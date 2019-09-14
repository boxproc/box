import React from 'react';

import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import { ContextMenuList } from 'components';

import { modalNamesConst } from 'consts';

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
  setActiveTableRowIndex: HandleSetActiveTableRowIndex;
  editModalName: string;
  contextMenuItems?: Array<ContextMenuItem>;
  activeTableRowIndex?: number;
  handleOpenModal: OpenModal;
  setCurrentIdAction: (id: number) => void;
  onRowClick: () => object;
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
          name: modalNamesConst.CONFIRMATION_MODAL,
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

        return {
          onDoubleClick: () => {
            if (editModalName && !isLocked) {
              setActiveTableRowIndex(rowIndex);
              setCurrentIdAction(id);
              return openCurrentRowInModal();
            } else {
              return null;
            }
          },
          onContextMenu: () => {
            if (menuItems.length && !isLocked) {
              setCurrentIdAction(id);
              setCurrentId(id);
              setActiveTableRowIndex(rowIndex);
            } else {
              return null;
            }
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
