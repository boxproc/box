import React from 'react';

import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { RowInfo } from 'react-table';
import { bindActionCreators, Dispatch } from 'redux';

import ContextMenuList from 'components/ContextMenuList';

import { openModal, OpenModal } from 'store/domains';

import { componentUtil } from 'utils';

export interface WithEditTableProps {
  setCurrentIdAction: (id: number) => void;
  handleOpenModal: OpenModal;
  editModalName: string;
  onRowClick: () => object;
  contextMenuItems?: Array<{ name: string }>;
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
      contextMenuItems,
      ...originProps
    } = props;

    const [currentId, setCurrentId] = React.useState(null);

    const openCurrentRowInModal = React.useCallback(
      (id: number) => {
        setCurrentIdAction(id);
        handleOpenModal({
          name: editModalName,
        });
      },
      [setCurrentIdAction, handleOpenModal, editModalName]
    );

    const handleClickOnRow = React.useCallback(
      (_, rowInfo: RowInfo) => {
        const id = rowInfo.original.id;

        return {
          onClick: () => {
            openCurrentRowInModal(id);
          },
          onContextMenu: () => {
            setCurrentId(id);
          },
        };
      },
      [openCurrentRowInModal]
    );

    const onContextMenuClick = (e: Event, value: { name: string }) =>
      openCurrentRowInModal(currentId);

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
          items={contextMenuItems}
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
