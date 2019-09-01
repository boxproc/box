import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './components';
import { EndpointFilterForm } from './forms';

import {
  AdminEndpointItemPrepared,
  HandleGetAdminEndpoint,
  HandleSetEndpointId,
} from 'store/domains';

export interface EndpointsProps {
  getAdminEndpoint: HandleGetAdminEndpoint;
  adminEndpointItems: Array<AdminEndpointItemPrepared>;
  setAdminEndpointId: HandleSetEndpointId;
}

const Endpoints: React.FC<EndpointsProps> = ({
  getAdminEndpoint,
  setAdminEndpointId,
  adminEndpointItems,
}) => {
  React.useEffect(
    () => {
        getAdminEndpoint();
    },
    [getAdminEndpoint]
  );

  return (
    <TablePage
      title="Endpoints"
      data={adminEndpointItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_ENDPOINT}
      editModalName={modalNames.EDIT_ADMIN_ENDPOINT}
      setCurrentIdAction={setAdminEndpointId}
      FilterForm={
        <EndpointFilterForm />
      }
    />
  );
};

export default withSpinner()(Endpoints);
