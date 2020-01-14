import React from 'react';

import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import { ContextMenuList } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import {
  handleSetActiveItemId,
  HandleSetActiveItemId,
  handleSetActiveTableRowIndex,
  HandleSetActiveTableRowIndex,
  handleSetIsClearActiveIds,
  HandleSetIsClearActiveIds,
  openModal,
  OpenModal,
  selectActiveTableRowIndex,
  selectIsClearActiveIds,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

import { ContextMenuItemProps } from 'types';

import { componentUtil } from 'utils';

export interface WithEditTableProps {
  setActiveTableRowIndex: HandleSetActiveTableRowIndex;
  setActiveItemId: HandleSetActiveItemId;
  editModalName: string;
  editableItemName?: string;
  contextMenuItems?: Array<ContextMenuItemProps>;
  activeTableRowIndex?: number;
  handleOpenModal: OpenModal;
  onRowClick: () => object;
  isClearActiveIds: boolean;
  setIsClearActiveIds: HandleSetIsClearActiveIds;
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
      setIsClearActiveIds,
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
      (e: Event, value: ContextMenuItemProps) => {
        setIsContextMenuVisible(false);
        setIsClearActiveIds(false);
        value.withConfirmation
          ? handleOpenModal({
            name: modalNamesConst.CONFIRMATION,
            payload: {
              confirmationAction: value.action,
              confirmationTitle: value.confirmationTitle,
              confirmationText: value.confirmationText,
            },
          })
          : value.action();
      },
      [handleOpenModal, setIsClearActiveIds]
    );

    let menuItems = [...contextMenuItems];

    if (editModalName) {
      menuItems = [
        {
          name: editableItemName ? `Edit ${editableItemName}` : 'Edit',
          icon: iconNamesConst.EDIT,
          action: () => openCurrentRowInModal(),
        },
        ...menuItems,
      ];
    }

    const isDisableContextMenu = React.useMemo(
      () => !menuItems.length,
      [menuItems]
    );

    const handleClickOnRow = React.useCallback(
      (_, rowInfo: RowInfo) => {
        const isLocked = rowInfo.original.lockedFlag;
        const id = rowInfo.original.id;
        const rowIndexOriginal = rowInfo.index + 1; // from 1 for css style
        const rowIndex = rowInfo.page
          ? rowIndexOriginal - rowInfo.pageSize * rowInfo.page
          : rowIndexOriginal;

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
        <ContextMenuTrigger
          id="tableContextMenu"
          disable={isDisableContextMenu}
        >
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
          preventClose={true}
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
      setIsClearActiveIds: handleSetIsClearActiveIds,
    },
    dispatch
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithEditTable);
};
