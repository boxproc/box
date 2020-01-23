import React from 'react';

import { iconNamesConst, modalNamesConst, systemMonitorTables } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { EndpointsFilter } from './forms';

import {
  AdminEndpointItemPrepared,
  HandleDeleteAdminEndpoint,
  HandleFilterAdminEndpoint,
  HandleGetLogData,
  ResetEndpoints,
} from 'store/domains';
import { SelectValue } from 'types';

export interface EndpointsProps {
  adminCurrentEndpointName: string;
  currentEndPointId: number;
  adminEndpointItems: Array<AdminEndpointItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  filterAdminEndpoint: HandleFilterAdminEndpoint;
  getLogData: HandleGetLogData;
  resetEndpoints: ResetEndpoints;
  isLoading: boolean;
}

const Endpoints: React.FC<EndpointsProps> = ({
  adminEndpointItems,
  deleteEndpoint,
  filterAdminEndpoint,
  adminCurrentEndpointName,
  currentEndPointId,
  institutionsOptions,
  getLogData,
  resetEndpoints,
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
          id: currentEndPointId,
          title: adminCurrentEndpointName,
        }),
      },
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        action: deleteEndpoint,
        withConfirmation: true,
        confirmationText: `Delete endpoint "${adminCurrentEndpointName}"?`,
      },
    ],
    [deleteEndpoint, adminCurrentEndpointName, getLogData, currentEndPointId]
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
      data={adminEndpointItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ENDPOINT}
      editModalName={modalNamesConst.EDIT_ENDPOINT}
      contextMenuItems={contextMenuItems}
      filterAction={filterAdminEndpoint}
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
