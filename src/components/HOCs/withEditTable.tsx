import React from 'react';

import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import ContextMenuList from 'components/ContextMenuList';

import { openModal, OpenModal } from 'store/domains';

import { ContextMenuItem } from 'types';

import { componentUtil } from 'utils';

export interface WithEditTableProps {
  setCurrentIdAction: (id: number) => void;
  handleOpenModal: OpenModal;
  editModalName: string;
  onRowClick: () => object;
  contextMenuItems?: Array<ContextMenuItem>;
}

export const withEditTable = <OriginProps extends {}>(
  Component: React.ComponentType<OriginProps & Partial<WithEditTableProps>>
) => {
  const WithEditTable: React.FC<WithEditTableProps> = props => {
    const {
      setCurrentIdAction,
      handleOpenModal,
      editModalName,
      onRowClick,
      contextMenuItems = [],
      ...originProps
    } = props;

    const [contextMenuState, setContextMenuState] = React.useState({
      currentId: null,
      isVisible: false,
    });

    const openCurrentRowInModal = React.useCallback(
      (id: number) => {
        setCurrentIdAction(id);
        handleOpenModal({
          name: editModalName,
        });
      },
      [setCurrentIdAction, handleOpenModal, editModalName]
    );

    const onContextMenuClick = (e: Event, value: ContextMenuItem) => value.action();

    const menuItems = [
      editModalName && {
        name: 'Edit',
        icon: 'edit',
        action: () => openCurrentRowInModal(contextMenuState.currentId),
      },
      ...contextMenuItems,
    ];

    const handleClickOnRow = React.useCallback(
      (_, rowInfo: RowInfo) => {
        const isLocked = rowInfo.original.lockedFlag;
        const id = rowInfo.original.id;

        if (isLocked) {
          return null;
        }

        return {
          onDoubleClick: () => {
            return editModalName ? openCurrentRowInModal(id) : null;
          },
          onContextMenu: () => {
            return menuItems.length
              ? setContextMenuState({
                currentId: id,
                isVisible: true,
              })
              : null;
          },
        };
      },
      [openCurrentRowInModal, editModalName, menuItems]
    );

    return (
      <React.Fragment>
        <ContextMenuTrigger id="tableContextMenu">
          <Component
            onRowClick={handleClickOnRow}
            {...originProps as OriginProps}
          />
        </ContextMenuTrigger>
        <ContextMenuList
          menuId="tableContextMenu"
          onClick={onContextMenuClick}
          items={menuItems}
          isVisible={contextMenuState.isVisible}
          onHide={() => setContextMenuState({
            currentId: null,
            isVisible: false,
          })}
        />
      </React.Fragment>
    );
  };

  WithEditTable.displayName = `WithEditTable(${componentUtil.getDisplayName(Component)})`;

  const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
    {
      handleOpenModal: openModal,
    },
    dispatch
  );

  return connect(
    null,
    mapDispatchToProps
  )(WithEditTable);
};
