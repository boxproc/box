import React from 'react';

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
import { SelectValue } from 'types';

export interface AccountsProps {
  interfaceName: string;
  currentInterfaceId: number;
  adminInterfaceItems: Array<AdminInterfaceItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  deleteInterface: HandleDeleteAdminInterface;
  filterAdminInterface: HandleFilterAdminInterface;
  getLogData: HandleGetLogData;
  resetInterfaces: ResetInterfaces;
  isLoading: boolean;
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
  isLoading,
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

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
      };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Interfaces"
      data={adminInterfaceItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_INTERFACE}
      editModalName={modalNamesConst.EDIT_INTERFACE}
      contextMenuItems={contextMenuItems}
      filterAction={filterAdminInterface}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <InterfacesFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default Interfaces;
