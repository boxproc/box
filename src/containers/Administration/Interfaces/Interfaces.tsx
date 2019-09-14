import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import { modalNamesConst } from 'consts';

import InterfaceFilterForm from './forms/InterfaceFilterForm';

import {
  AdminInterfaceItemPrepared,
  HandleDeleteAdminInterface,
  HandleSetInterfaceId,
} from 'store/domains';

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
      addNewModalName={modalNamesConst.ADD_ADMIN_INTERFACE}
      editModalName={modalNamesConst.EDIT_ADMIN_INTERFACE}
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
