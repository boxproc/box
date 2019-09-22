import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';
import { EndpointFilterForm } from './forms';

import { AdminEndpointItemPrepared, HandleDeleteAdminEndpoint } from 'store/domains';

export interface EndpointsProps {
  adminEndpointItems: Array<AdminEndpointItemPrepared>;
  deleteEndpoint: HandleDeleteAdminEndpoint;
  adminCurrentEndpointName: string;
}

const Endpoints: React.FC<EndpointsProps> = ({
  adminEndpointItems,
  deleteEndpoint,
  adminCurrentEndpointName,
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
      FilterForm={
        <EndpointFilterForm />
      }
    />
  );
};

export default withSpinner()(Endpoints);
