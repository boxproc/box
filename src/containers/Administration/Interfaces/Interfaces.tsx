import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';
import { InterfacesFilter } from './forms';

import { modalNamesConst } from 'consts';

import {
  AdminInterfaceItemPrepared,
  HandleDeleteAdminInterface,
  HandleFilterAdminInterface,
} from 'store/domains';
import { SelectValues } from 'types';

export interface AccountsProps {
  adminInterfaceItems: Array<AdminInterfaceItemPrepared>;
  deleteInterface: HandleDeleteAdminInterface;
  filterAdminInterface: HandleFilterAdminInterface;
  institutionsOptions: Array<SelectValues>;
}

const Interfaces: React.FC<AccountsProps> = ({
  adminInterfaceItems,
  deleteInterface,
  filterAdminInterface,
  institutionsOptions,
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
      filterAction={filterAdminInterface}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
      }}
      FilterForm={
        <InterfacesFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Interfaces);
