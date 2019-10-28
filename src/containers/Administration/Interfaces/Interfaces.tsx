import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { InterfacesFilter } from './forms';

import { iconNamesConst, modalNamesConst, systemMonitorTables } from 'consts';

import {
  AdminInterfaceItemPrepared,
  HandleDeleteAdminInterface,
  HandleFilterAdminInterface,
  HandleGetLogData,
  ResetInterfaces,
} from 'store/domains';
import { SelectValues } from 'types';

export interface AccountsProps {
  interfaceName: string;
  currentInterfaceId: number;
  adminInterfaceItems: Array<AdminInterfaceItemPrepared>;
  institutionsOptions: Array<SelectValues>;
  deleteInterface: HandleDeleteAdminInterface;
  filterAdminInterface: HandleFilterAdminInterface;
  getLogData: HandleGetLogData;
  resetInterfaces: ResetInterfaces;
}

const Interfaces: React.FC<AccountsProps> = ({
  adminInterfaceItems,
  deleteInterface,
  filterAdminInterface,
  institutionsOptions,
  resetInterfaces,
  interfaceName,
  getLogData,
  currentInterfaceId,
}) => {
  React.useEffect(
    () => {
      return () => resetInterfaces();
    },
    [resetInterfaces]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Show log',
        icon: iconNamesConst.SHORT_TEXT,
        action: () => getLogData({
          name: systemMonitorTables.INTERFACES,
          id: currentInterfaceId,
          title: interfaceName,
        }),
      },
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        action: deleteInterface,
        withConfirmation: true,
        confirmationText: `Delete interface: ${interfaceName}?`,
      },
    ],
    [deleteInterface, interfaceName, currentInterfaceId, getLogData]
  );

  return (
    <PageTemplate
      title="Interfaces"
      data={adminInterfaceItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ADMIN_INTERFACE}
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
