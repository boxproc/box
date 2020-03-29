import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import { ContextMenuList } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import { modalsList } from 'containers/Modals/modalsList';

import {
  activeTableRowIndexSelector,
  handleSetActiveItemId,
  handleSetActiveTableRowIndex,
  modalsStateListSelector,
  openModal,
  StoreState,
  THandleSetActiveItemId,
  THandleSetActiveTableRowIndex,
  TOpenModal,
} from 'store';

import { IContextMenuItem } from 'types';

import { componentUtil } from 'utils';

export interface IWithEditTable {
  activeTableRowIndex?: number;
  contextMenuItems?: Array<IContextMenuItem>;
  handleOpenModal: TOpenModal;
  modalsStateList: object;
  onRowClick: () => object;
  setActiveItemId: THandleSetActiveItemId;
  setActiveTableRowIndex: THandleSetActiveTableRowIndex;
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
      setActiveItemId,
      setActiveTableRowIndex,
      viewingModalName,
      ...originProps
    } = props;

    const [isOpenedModal, setIsOpenedModal] = React.useState(null);
    const [isHiddenContextMenu, setIsHiddenContextMenu] = React.useState(false);

    const handleRemoveActiveIds = React.useCallback(
      () => {
        setActiveTableRowIndex(null);
        setActiveItemId(null);
      },
      [setActiveTableRowIndex, setActiveItemId]
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
            if (viewingModalName && !isLocked) {
              setActiveItemId(id);
              setActiveTableRowIndex(rowIndex);

              openCurrentRowInModal();
            }
          },
          onContextMenu: () => {
            setIsHiddenContextMenu(isLocked);

            if (menuItems.length && !isLocked) {
              setActiveItemId(id);
              setActiveTableRowIndex(rowIndex);
            }
          },
        };
      },
      [
        openCurrentRowInModal,
        viewingModalName,
        menuItems,
        setActiveItemId,
        setActiveTableRowIndex,
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
          isHidden={isOpenedModal || isHiddenContextMenu}
          onHide={(!isOpenedModal && activeTableRowIndex) ? handleRemoveActiveIds : null}
        />
      </React.Fragment>
    );
  };

  WithEditTable.displayName = `WithEditTable(${componentUtil.getDisplayName(Component)})`;

  const mapStateToProps = (state: StoreState) => ({
    activeTableRowIndex: activeTableRowIndexSelector(state),
    modalsStateList: modalsStateListSelector(state),
  });

  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      handleOpenModal: openModal,
      setActiveItemId: handleSetActiveItemId,
      setActiveTableRowIndex: handleSetActiveTableRowIndex,
    },
    dispatch
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithEditTable);
};
