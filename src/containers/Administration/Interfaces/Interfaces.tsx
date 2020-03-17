import React from 'react';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { InterfacesFilter } from './forms';

import { iconNamesConst, modalNamesConst, systemMonitorTablesConst } from 'consts';

import {
  AdminInterfaceItemPrepared,
  HandleDeleteAdminInterface,
  HandleFilterAdminInterface,
  HandleGetLogData,
  ResetInterfaces,
} from 'store';

import { SelectValue } from 'types';

export interface AccountsProps {
  interfaceItems: Array<AdminInterfaceItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  currentInterfaceName: string;
  currentInterfaceId: number;
  isLoading: boolean;
  isReadOnly: boolean;
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
  isReadOnly,
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
          name: systemMonitorTablesConst.INTERFACES,
          id: currentInterfaceId,
          title: currentInterfaceName,
        }),
      },
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        isDisabled: isReadOnly,
        action: () => deleteInterface(currentInterfaceId),
        withConfirmation: true,
        confirmationText: `Delete interface: ${currentInterfaceName}?`,
      },
    ],
    [deleteInterface, currentInterfaceName, currentInterfaceId, getLogData, isReadOnly]
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
      viewingModalName={modalNamesConst.EDIT_INTERFACE}
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
