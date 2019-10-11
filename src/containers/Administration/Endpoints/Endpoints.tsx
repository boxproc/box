import React from 'react';

import { withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { EndpointsFilter } from './forms';

import {
  AdminEndpointItemPrepared,
  HandleDeleteAdminEndpoint,
  HandleFilterAdminEndpoint,
  ResetEndpoints,
} from 'store/domains';
import { SelectValues } from 'types';

export interface EndpointsProps {
  adminEndpointItems: Array<AdminEndpointItemPrepared>;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  adminCurrentEndpointName: string;
  filterAdminEndpoint: HandleFilterAdminEndpoint;
  institutionsOptions: Array<SelectValues>;
  resetEndpoints: ResetEndpoints;
}

const Endpoints: React.FC<EndpointsProps> = ({
  adminEndpointItems,
  deleteEndpoint,
  filterAdminEndpoint,
  adminCurrentEndpointName,
  institutionsOptions,
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
        name: 'Delete',
        icon: 'delete',
        action: deleteEndpoint,
        withConfirmation: true,
        confirmationText: `Delete endpoint "${adminCurrentEndpointName}"?`,
      },
    ],
    [deleteEndpoint, adminCurrentEndpointName]
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
      FilterForm={
        <EndpointsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner()(Endpoints);
