import React from 'react';

import { iconNamesConst, modalNamesConst, systemMonitorTables } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { EndpointsFilter } from './forms';

import {
  AdminEndpointItemPrepared,
  HandleDeleteAdminEndpoint,
  HandleFilterAdminEndpoints,
  HandleGetLogData,
  ResetEndpoints,
} from 'store/domains';
import { SelectValue } from 'types';

export interface EndpointsProps {
  endpointItems: Array<AdminEndpointItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  currentEndpointName: string;
  currentEndpointId: number;
  isLoading: boolean;
  isReadOnly: boolean;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  filterEndpoints: HandleFilterAdminEndpoints;
  getLogData: HandleGetLogData;
  resetEndpoints: ResetEndpoints;
}

const Endpoints: React.FC<EndpointsProps> = ({
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
          name: systemMonitorTables.ENDPOINTS,
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
      return {
        institutionId: institutionsOptions[0],
      };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Endpoints"
      data={endpointItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ENDPOINT}
      editModalName={modalNamesConst.EDIT_ENDPOINT}
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
