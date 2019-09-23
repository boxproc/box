import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { EndpointsFilter } from './forms';

import {
  AdminEndpointItemPrepared,
  HandleDeleteAdminEndpoint,
  HandleFilterAdminEndpoint,
} from 'store/domains';
import { SelectValues } from 'types';

export interface EndpointsProps {
  adminEndpointItems: Array<AdminEndpointItemPrepared>;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  adminCurrentEndpointName: string;
  filterAdminEndpoint: HandleFilterAdminEndpoint;
  institutionsOptions: Array<SelectValues>;
}

const Endpoints: React.FC<EndpointsProps> = ({
  adminEndpointItems,
  deleteEndpoint,
  filterAdminEndpoint,
  adminCurrentEndpointName,
  institutionsOptions,
}) => {
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
    <TablePage
      title="Endpoints"
      data={adminEndpointItems}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_ADMIN_ENDPOINT}
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
