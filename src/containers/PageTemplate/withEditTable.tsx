import React from 'react';

import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import { ContextMenuList } from 'components';

import { modalNamesConst } from 'consts';

import {
  handleSetActiveItemId,
  HandleSetActiveItemId,
  handleSetActiveTableRowIndex,
  HandleSetActiveTableRowIndex,
  openModal,
  OpenModal,
  selectActiveTableRowIndex,
  selectIsClearActiveIds,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

import { ContextMenuItem } from 'types';

import { componentUtil } from 'utils';

export interface WithEditTableProps {
  setActiveTableRowIndex: HandleSetActiveTableRowIndex;
  setActiveItemId: HandleSetActiveItemId;
  editModalName: string;
  editableItemName?: string;
  contextMenuItems?: Array<ContextMenuItem>;
  activeTableRowIndex?: number;
  handleOpenModal: OpenModal;
  onRowClick: () => object;
  isClearActiveIds: boolean;
}

export const withEditTable = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<WithEditTableProps>>
) => {
  const WithEditTable: React.FC<WithEditTableProps> = props => {
    const {
      setActiveTableRowIndex,
      setActiveItemId,
      handleOpenModal,
      editModalName,
      editableItemName,
      onRowClick,
      activeTableRowIndex,
      contextMenuItems = [],
      isClearActiveIds,
      ...originProps
    } = props;
    const [isContextMenuVisible, setIsContextMenuVisible] = React.useState(false);

    const handleRemoveActiveIds = React.useCallback(
      () => {
        if (isClearActiveIds) {
          setActiveTableRowIndex(null);
          setActiveItemId(null);
        }
      },
      [setActiveTableRowIndex, setActiveItemId, isClearActiveIds]
    );

    const openCurrentRowInModal = React.useCallback(
      () => handleOpenModal({ name: editModalName }),
      [handleOpenModal, editModalName]
    );

    const onContextMenuClick = React.useCallback(
      (e: Event, value: ContextMenuItem) => {
        setIsContextMenuVisible(false);
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
      },
      [handleOpenModal]
    );

    let menuItems = [...contextMenuItems];

    if (editModalName) {
      menuItems = [
        {
          name: editableItemName ? `Edit ${editableItemName}` : 'Edit',
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
        const rowIndex = rowInfo.index + 1; // from 1 for css style

        return {
          onDoubleClick: () => {
            if (editModalName && !isLocked) {
              setActiveItemId(id);
              setActiveTableRowIndex(rowIndex);

              openCurrentRowInModal();
            } else {
              setActiveItemId(null);
              setActiveTableRowIndex(null);
            }
          },
          onContextMenu: () => {
            if (menuItems.length && !isLocked) {
              setActiveItemId(id);
              setActiveTableRowIndex(rowIndex);

              setIsContextMenuVisible(true);
            } else {
              setActiveItemId(null);
              setActiveTableRowIndex(null);

              setIsContextMenuVisible(false);
            }
          },
        };
      },
      [
        openCurrentRowInModal,
        editModalName,
        menuItems,
        setActiveItemId,
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
          isVisible={isContextMenuVisible}
          onHide={handleRemoveActiveIds}
        />
      </React.Fragment>
    );
  };

  WithEditTable.displayName = `WithEditTable(${componentUtil.getDisplayName(Component)})`;

  const mapStateToProps = (state: StoreState) => ({
    activeTableRowIndex: selectActiveTableRowIndex(state),
    isClearActiveIds: selectIsClearActiveIds(state),
  });

  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      handleOpenModal: openModal,
      setActiveTableRowIndex: handleSetActiveTableRowIndex,
      setActiveItemId: handleSetActiveItemId,
    },
    dispatch
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithEditTable);
};
