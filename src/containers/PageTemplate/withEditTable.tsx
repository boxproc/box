import React from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import { ContextMenuList } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import { modalsList } from 'containers/Modals/modalsList';

import {
  handleSetActiveItemId,
  HandleSetActiveItemId,
  handleSetActiveTableRowIndex,
  HandleSetActiveTableRowIndex,
  openModal,
  OpenModal,
  selectActiveTableRowIndex,
  selectModalsStateList,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

import { ContextMenuItemProps } from 'types';

import { componentUtil } from 'utils';

export interface WithEditTableProps {
  activeTableRowIndex?: number;
  contextMenuItems?: Array<ContextMenuItemProps>;
  editableItemName?: string;
  handleOpenModal: OpenModal;
  onRowClick: () => object;
  setActiveItemId: HandleSetActiveItemId;
  setActiveTableRowIndex: HandleSetActiveTableRowIndex;
  viewingModalName: string;
  modalsStateList: object;
}

export const withEditTable = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<WithEditTableProps>>
) => {
  const WithEditTable: React.FC<WithEditTableProps> = props => {
    const {
      activeTableRowIndex,
      contextMenuItems = [],
      editableItemName,
      handleOpenModal,
      onRowClick,
      setActiveItemId,
      setActiveTableRowIndex,
      viewingModalName,
      modalsStateList,
      ...originProps
    } = props;

    const [isOpenedModal, setIsOpenedModal] = React.useState(false);

    React.useEffect(
      () => {
        const isSomeModalOpened = modalsList.find(modal => {
          const { name } = modal;

          return modalsStateList[`is${name}`];
        });

        isSomeModalOpened ? setIsOpenedModal(true) : setIsOpenedModal(false);
      },
      [modalsStateList]
    );

    const handleRemoveActiveIds = React.useCallback(
      () => {
        setActiveTableRowIndex(null);
        setActiveItemId(null);
      },
      [setActiveTableRowIndex, setActiveItemId]
    );

    const openCurrentRowInModal = React.useCallback(
      () => handleOpenModal({ name: viewingModalName }),
      [handleOpenModal, viewingModalName]
    );

    const onContextMenuClick = React.useCallback(
      (e: Event, value: ContextMenuItemProps) => {
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

    let menuItems = [...contextMenuItems];

    if (viewingModalName) {
      menuItems = [
        {
          name: editableItemName ? `Open ${editableItemName}` : 'Open',
          icon: iconNamesConst.EDIT,
          action: () => openCurrentRowInModal(),
        },
        ...menuItems,
      ];
    }

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
            if (viewingModalName && !isLocked) {
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
            } else {
              setActiveItemId(null);
              setActiveTableRowIndex(null);
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
          isHidden={isOpenedModal}
          onHide={isOpenedModal ? null : handleRemoveActiveIds}
        />
      </React.Fragment>
    );
  };

  WithEditTable.displayName = `WithEditTable(${componentUtil.getDisplayName(Component)})`;

  const mapStateToProps = (state: StoreState) => ({
    activeTableRowIndex: selectActiveTableRowIndex(state),
    modalsStateList: selectModalsStateList(state),
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
