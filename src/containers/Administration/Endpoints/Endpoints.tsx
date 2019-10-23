import React from 'react';

import { withSpinner } from 'components';

import { iconNamesConst, modalNamesConst, stringsConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { EndpointsFilter } from './forms';

import {
  AdminEndpointItemPrepared,
  HandleDeleteAdminEndpoint,
  HandleFilterAdminEndpoint,
  HandleGetEndpointLogData,
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
  getEndpointLogData: HandleGetEndpointLogData;
  resetEndpoints: ResetEndpoints;
}

const Endpoints: React.FC<EndpointsProps> = ({
  adminEndpointItems,
  deleteEndpoint,
  filterAdminEndpoint,
  adminCurrentEndpointName,
  currentEndPointId,
  institutionsOptions,
  getEndpointLogData,
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
        name: stringsConst.SHOW_LOG,
        icon: iconNamesConst.SHORT_TEXT,
        action: () => getEndpointLogData(currentEndPointId),
      },
      {
        name: stringsConst.DELETE,
        icon: iconNamesConst.DELETE,
        action: deleteEndpoint,
        withConfirmation: true,
        confirmationText: `Delete endpoint "${adminCurrentEndpointName}"?`,
      },
    ],
    [deleteEndpoint, adminCurrentEndpointName, getEndpointLogData, currentEndPointId]
  );

  return (
    <PageTemplate
      title="Endpoints"
      data={adminEndpointItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ADMIN_ENDPOINT}
      editModalName={modalNamesConst.EDIT_ADMIN_ENDPOINT}
      contextMenuItems={contextMenuItems}
      filterAction={filterAdminEndpoint}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
      }}
      FilterForm={
        <EndpointsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner()(Endpoints);
