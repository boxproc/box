import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { InterfacesFilter } from './forms';

import { iconNamesConst, modalNamesConst, systemMonitorTablesConst } from 'consts';

import {
  HandleGetLogData,
  IInterface,
  THandleDeleteInterface,
  THandleFilterInterfaces,
  TResetInterfaces,
} from 'store';

import { ISelectValue } from 'types';

interface IInterfaces {
  interfaceItems: ImmutableArray<IInterface>;
  institutionsOptions: Array<ISelectValue>;
  currentInterfaceName: string;
  currentInterfaceId: number;
  isLoading: boolean;
  isReadOnly: boolean;
  deleteInterface: THandleDeleteInterface;
  filterInterfaces: THandleFilterInterfaces;
  getLogData: HandleGetLogData;
  resetInterfaces: TResetInterfaces;
}

const Interfaces: React.FC<IInterfaces> = ({
  interfaceItems,
  deleteInterface,
  filterInterfaces,
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
      filterAction={filterInterfaces}
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
