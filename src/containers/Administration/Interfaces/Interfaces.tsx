import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import { modalNamesConst } from 'consts';

import InterfaceFilterForm from './forms/InterfaceFilterForm';

import { AdminInterfaceItemPrepared, HandleDeleteAdminInterface } from 'store/domains';

export interface AccountsProps {
  adminInterfaceItems: Array<AdminInterfaceItemPrepared>;
  deleteInterface: HandleDeleteAdminInterface;
}

const Interfaces: React.FC<AccountsProps> = ({
  adminInterfaceItems,
  deleteInterface,
}) => {
  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: 'delete',
        action: deleteInterface,
        withConfirmation: true,
        confirmationText: `Delete cycle editor record?`,
      },
    ],
    [deleteInterface]
  );

  return (
    <TablePage
      title="Interfaces"
      data={adminInterfaceItems}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_ADMIN_INTERFACE}
      editModalName={modalNamesConst.EDIT_ADMIN_INTERFACE}
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
