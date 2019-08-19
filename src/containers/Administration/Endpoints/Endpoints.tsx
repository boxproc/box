import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './components';
import { EndpointFilterForm } from './forms';

import {
  AdminEndpointItemPrepared,
  HandleGetAdminEndpoint,
  HandleSetEndpointId,
  OpenModal,
} from 'store/domains';

export interface EndpointsProps {
  openModal: OpenModal;
  getAdminEndpoint: HandleGetAdminEndpoint;
  adminEndpointItems: Array<AdminEndpointItemPrepared>;
  setAdminEndpointId: HandleSetEndpointId;
}

const Endpoints: React.FC<EndpointsProps> = ({
  openModal,
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
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
            setAdminEndpointId(rowInfo.original.id);
            openModal({
            name: modalNames.EDIT_ADMIN_ENDPOINT,
          });
        },
      };
    },
    [openModal, setAdminEndpointId]
  );
  return (
    <TablePage
      title="Endpoints"
      data={adminEndpointItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_ENDPOINT}
      hint="Double Click on Row to View Endpoint"
      getTrGroupProps={handleOnClickRow}
      FilterForm={
        <EndpointFilterForm />
      }
    />
  );
};

export default withSpinner()(Endpoints);
