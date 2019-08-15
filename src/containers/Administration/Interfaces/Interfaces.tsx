import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './components';

import {
  AdminInterfaceItemPrepared,
  HandleGetAdminInterface,
  HandleSetInterfaceId,
  OpenModal,
} from 'store/domains';
import InterfaceFilterForm from './forms/InterfaceFilterForm';

export interface AccountsProps {
  openModal: OpenModal;
  getAdminInterface: HandleGetAdminInterface;
  adminInterfaceItems: Array<AdminInterfaceItemPrepared>;
  setAdminInterfaceId: HandleSetInterfaceId;
}

const Interfaces: React.FC<AccountsProps> = ({
  openModal,
  getAdminInterface,
  setAdminInterfaceId,
  adminInterfaceItems,
}) => {
  React.useEffect(
    () => {
      getAdminInterface();
    },
    [getAdminInterface]
  );
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setAdminInterfaceId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_ADMIN_INTERFACE,
          });
        },
      };
    },
    [openModal, setAdminInterfaceId]
  );
  return (
    <TablePage
      title="Interfaces"
      data={adminInterfaceItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_INTERFACE}
      hint="Double Click on Row to Edit Interface"
      getTrGroupProps={handleOnClickRow}
      FilterForm={
        <InterfaceFilterForm />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Interfaces);
