import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { ComponentPropsGetter0, ComponentPropsGetterR, RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import { ContextMenuList } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import { modalsList } from 'containers/Modals/modalsList';

import {
  activeTableRowIndexSelector,
  IStoreState,
  modalsStateListSelector,
  openModal,
  setActiveItemId,
  setActiveTableRowIndex,
  TOpenModal,
  TSetActiveItemId,
  TSetActiveTableRowIndex,
} from 'store';

import { IContextMenuItem } from 'types';

import { componentUtil } from 'utils';

export interface IWithEditTable {
  activeTableRowIndex?: number;
  contextMenuItems?: Array<IContextMenuItem>;
  handleOpenModal: TOpenModal;
  modalsStateList: object;
  onRowClick: ComponentPropsGetterR | ComponentPropsGetter0;
  handleSetActiveItemId: TSetActiveItemId;
  handleSetActiveTableRowIndex: TSetActiveTableRowIndex;
  viewingModalName: string;
}

export const withEditTable = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<IWithEditTable>>
) => {
  const WithEditTable: React.FC<IWithEditTable> = props => {
    const {
      activeTableRowIndex,
      contextMenuItems = [],
      handleOpenModal,
      modalsStateList,
      onRowClick,
      handleSetActiveItemId,
      handleSetActiveTableRowIndex,
      viewingModalName,
      ...originProps
    } = props;

    const [isOpenedModal, setIsOpenedModal] = React.useState(null);
    const [isVisibleContextMenu, setIsVisibleContextMenu] = React.useState(false);

    const handleRemoveActiveIds = React.useCallback(
      () => {
        setIsVisibleContextMenu(false);

        handleSetActiveTableRowIndex(null);
        handleSetActiveItemId(null);
      },
      [handleSetActiveTableRowIndex, handleSetActiveItemId]
    );

    React.useEffect(
      () => {
        const isSomeModalOpened = modalsList.find(modal => modalsStateList[`is${modal.name}`]);

        setIsOpenedModal(isSomeModalOpened);
      },
      [modalsStateList]
    );

    React.useEffect(
      () => {
        if (!isOpenedModal) {
          handleRemoveActiveIds();
        }
      },
      [isOpenedModal, handleRemoveActiveIds]
    );

    const openCurrentRowInModal = React.useCallback(
      () => handleOpenModal({ name: viewingModalName }),
      [handleOpenModal, viewingModalName]
    );

    const onContextMenuClick = React.useCallback(
      (e: Event, value: IContextMenuItem) => {
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
      [handleOpenModal]
    );

    const menuItems = React.useMemo(
      () => {
        const openItem = {
          name: 'Open',
          icon: iconNamesConst.EDIT,
          action: () => openCurrentRowInModal(),
        };

        return viewingModalName ? [openItem, ...contextMenuItems] : contextMenuItems;
      },
      [contextMenuItems, viewingModalName, openCurrentRowInModal]
    );

    const handleClickOnRow = React.useCallback(
      (_, rowInfo: RowInfo) => {
        const isLocked = rowInfo.original.lockedFlag;
        const id = rowInfo.original.id;
        const rowIndexOriginal = rowInfo.index + 1; // from 1 for css style
        const rowIndex = rowInfo.page
          ? rowIndexOriginal - rowInfo.pageSize * rowInfo.page
          : rowIndexOriginal; // considering page number

        return {
          onDoubleClick: () => {
            if (viewingModalName) {
              handleSetActiveItemId(id, isLocked);
              handleSetActiveTableRowIndex(rowIndex);

              openCurrentRowInModal();
            }
          },
          onContextMenu: () => {
            if (menuItems.length) {
              handleSetActiveItemId(id, isLocked);
              handleSetActiveTableRowIndex(rowIndex);

              setIsVisibleContextMenu(true);
            }
          },
        };
      },
      [
        openCurrentRowInModal,
        viewingModalName,
        menuItems,
        handleSetActiveItemId,
        handleSetActiveTableRowIndex,
      ]
    );

    return (
      <React.Fragment>
        <ContextMenuTrigger
          id="tableContextMenu"
          disable={!menuItems.length}
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
          isHidden={isOpenedModal || !isVisibleContextMenu}
          onHide={(!isOpenedModal && activeTableRowIndex) ? handleRemoveActiveIds : null}
        />
      </React.Fragment>
    );
  };

  WithEditTable.displayName = `WithEditTable(${componentUtil.getDisplayName(Component)})`;

  const mapStateToProps = (state: IStoreState) => ({
    activeTableRowIndex: activeTableRowIndexSelector(state),
    modalsStateList: modalsStateListSelector(state),
  });

  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      handleOpenModal: openModal,
      handleSetActiveItemId: setActiveItemId,
      handleSetActiveTableRowIndex: setActiveTableRowIndex,
    },
    dispatch
  );

  return connect<Partial<IWithEditTable>, Partial<IWithEditTable>, any, IStoreState>(
    mapStateToProps,
    mapDispatchToProps
  )(WithEditTable);
};
