import React from 'react';

import { withSpinner } from 'components';

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
import { SelectValues } from 'types';

export interface EndpointsProps {
  adminCurrentEndpointName: string;
  currentEndPointId: number;
  adminEndpointItems: Array<AdminEndpointItemPrepared>;
  institutionsOptions: Array<SelectValues>;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  filterAdminEndpoint: HandleFilterAdminEndpoint;
  getLogData: HandleGetLogData;
  resetEndpoints: ResetEndpoints;
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
      initialFilterValues={{
        institutionId: institutionsOptions[0],
      }}
      FilterForm={
        <EndpointsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Endpoints);
