import React from 'react';

import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import ContextMenuList from 'components/ContextMenuList';

import { modalNames } from 'consts';

import {
  handleSetActiveTableRowIndex,
  HandleSetActiveTableRowIndex,
  openModal,
  OpenModal,
  selectActiveTableRowIndex,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

import { ContextMenuItem } from 'types';

import { componentUtil } from 'utils';

export interface WithEditTableProps {
  setCurrentIdAction: (id: number) => void;
  setActiveTableRowIndex: HandleSetActiveTableRowIndex;
  handleOpenModal: OpenModal;
  editModalName: string;
  onRowClick: () => object;
  contextMenuItems?: Array<ContextMenuItem>;
  activeTableRowIndex?: number;
}

export const withEditTable = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<WithEditTableProps>>
) => {
  const WithEditTable: React.FC<WithEditTableProps> = props => {
    const {
      setCurrentIdAction,
      setActiveTableRowIndex,
      handleOpenModal,
      editModalName,
      onRowClick,
      activeTableRowIndex,
      contextMenuItems = [],
      ...originProps
    } = props;

    const [currentId, setCurrentId] = React.useState(null);

    const openCurrentRowInModal = React.useCallback(
      () => handleOpenModal({
        name: editModalName,
      }),
      [handleOpenModal, editModalName]
    );

    const onContextMenuClick = (e: Event, value: ContextMenuItem) =>
      value.withConfirmation
        ? handleOpenModal({
          name: modalNames.CONFIRMATION_MODAL,
          payload: {
            confirmationAction: value.action,
            confirmationTitle: value.confirmationTitle,
            confirmationText: value.confirmationText,
          },
        })
        : value.action();

    let menuItems = [...contextMenuItems];

    if (editModalName) {
      menuItems = [
        {
          name: 'Edit',
          icon: 'edit',
          action: () => openCurrentRowInModal(),
        },
        ...menuItems,
      ];
    }

    const handleClickOnRow = React.useCallback(
      (_, rowInfo: RowInfo) => {
        const isLocked = rowInfo.original.lockedFlag;
        const id = rowInfo.original.id;
        const rowIndex = rowInfo.index + 1; // from 1

        if (isLocked) {
          return null;
        }

        return {
          onDoubleClick: () => {
            setActiveTableRowIndex(rowIndex);
            setCurrentIdAction(id);
            return editModalName ? openCurrentRowInModal() : null;
          },
          onContextMenu: () => {
            if (!menuItems.length) {
              return null;
            }
            setCurrentIdAction(id);
            setCurrentId(id);
            setActiveTableRowIndex(rowIndex);
          },
        };
      },
      [
        openCurrentRowInModal,
        editModalName,
        menuItems,
        setCurrentIdAction,
        setActiveTableRowIndex,
      ]
    );

    return (
      <React.Fragment>
        <ContextMenuTrigger id="tableContextMenu">
          <Component
            onRowClick={handleClickOnRow}
            activeTableRowIndex={activeTableRowIndex}
            {...originProps as OriginProps}
          />
        </ContextMenuTrigger>
        <ContextMenuList
          menuId="tableContextMenu"
          onClick={onContextMenuClick}
          items={menuItems}
          isVisible={currentId}
          onHide={() => setActiveTableRowIndex(null)}
        />
      </React.Fragment>
    );
  };

  WithEditTable.displayName = `WithEditTable(${componentUtil.getDisplayName(Component)})`;

  const mapStateToProps = (state: StoreState) => ({
    activeTableRowIndex: selectActiveTableRowIndex(state),
  });

  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      handleOpenModal: openModal,
      setActiveTableRowIndex: handleSetActiveTableRowIndex,
    },
    dispatch
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithEditTable);
};
