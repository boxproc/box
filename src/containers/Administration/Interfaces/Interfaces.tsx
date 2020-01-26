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
  interfaceItems: Array<AdminInterfaceItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  currentInterfaceName: string;
  currentInterfaceId: number;
  isLoading: boolean;
  deleteInterface: HandleDeleteAdminInterface;
  filterInterface: HandleFilterAdminInterface;
  getLogData: HandleGetLogData;
  resetInterfaces: ResetInterfaces;
}

const Interfaces: React.FC<AccountsProps> = ({
  interfaceItems,
  deleteInterface,
  filterInterface,
  institutionsOptions,
  resetInterfaces,
  currentInterfaceName,
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
          title: currentInterfaceName,
        }),
      },
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        action: () => deleteInterface(currentInterfaceId),
        withConfirmation: true,
        confirmationText: `Delete interface: ${currentInterfaceName}?`,
      },
    ],
    [deleteInterface, currentInterfaceName, currentInterfaceId, getLogData]
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
      data={interfaceItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_INTERFACE}
      editModalName={modalNamesConst.EDIT_INTERFACE}
      contextMenuItems={contextMenuItems}
      filterAction={filterInterface}
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
