import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { iconNamesConst, modalNamesConst, systemMonitorTablesConst } from 'consts';
import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { EndpointsFilter } from './forms';

import {
  HandleGetLogData,
  IEndpoint,
  THandleDeleteEndpoint,
  THandleFilterEndpoints,
  TResetEndpoints,
} from 'store';
import { ISelectValue } from 'types';

interface IEndpoints {
  currentEndpointId: number;
  currentEndpointName: string;
  deleteEndpoint: THandleDeleteEndpoint;
  endpointItems: ImmutableArray<IEndpoint>;
  filterEndpoints: THandleFilterEndpoints;
  getLogData: HandleGetLogData;
  institutionsOptions: Array<ISelectValue>;
  isLoading: boolean;
  isReadOnly: boolean;
  resetEndpoints: TResetEndpoints;
}

const Endpoints: React.FC<IEndpoints> = ({
  endpointItems,
  deleteEndpoint,
  filterEndpoints,
  currentEndpointName,
  currentEndpointId,
  institutionsOptions,
  getLogData,
  resetEndpoints,
  isReadOnly,
  isLoading,
}) => {
  React.useEffect(
    () => {
      return () => resetEndpoints();
    },
    [resetEndpoints]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Show log',
        icon: iconNamesConst.SHORT_TEXT,
        action: () => getLogData({
          name: systemMonitorTablesConst.ENDPOINTS,
          id: currentEndpointId,
          title: currentEndpointName,
        }),
      },
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        isDisabled: isReadOnly,
        action: () => deleteEndpoint(currentEndpointId),
        withConfirmation: true,
        confirmationText: `Delete endpoint "${currentEndpointName}"?`,
      },
    ],
    [deleteEndpoint, currentEndpointName, getLogData, currentEndpointId, isReadOnly]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return { institutionId: institutionsOptions[0] };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Endpoints"
      data={endpointItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ENDPOINT}
      viewingModalName={modalNamesConst.EDIT_ENDPOINT}
      contextMenuItems={contextMenuItems}
      filterAction={filterEndpoints}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <EndpointsFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default Endpoints;
