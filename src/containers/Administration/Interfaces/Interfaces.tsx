import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './components';

import {
  AdminInterfaceItemPrepared,
  HandleDeleteAdminInterface,
  HandleSetInterfaceId,
} from 'store/domains';
import InterfaceFilterForm from './forms/InterfaceFilterForm';

export interface AccountsProps {
  adminInterfaceItems: Array<AdminInterfaceItemPrepared>;
  setAdminInterfaceId: HandleSetInterfaceId;
  deleteInterface: HandleDeleteAdminInterface;
}

const Interfaces: React.FC<AccountsProps> = ({
  setAdminInterfaceId,
  adminInterfaceItems,
  deleteInterface,
}) => {
  const contextMenuItems = [
    {
      name: 'Delete',
      icon: 'delete',
      action: deleteInterface,
      withConfirmation: true,
      confirmationText: `Delete cycle editor record?`,
    },
  ];

  return (
    <TablePage
      title="Interfaces"
      data={adminInterfaceItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_INTERFACE}
      editModalName={modalNames.EDIT_ADMIN_INTERFACE}
      setCurrentIdAction={setAdminInterfaceId}
      contextMenuItems={contextMenuItems}
      FilterForm={
        <InterfaceFilterForm />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Interfaces);
