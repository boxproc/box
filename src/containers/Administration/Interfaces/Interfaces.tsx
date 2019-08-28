import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './components';

import {
  AdminInterfaceItemPrepared,
  HandleGetAdminInterface,
  HandleSetInterfaceId,
} from 'store/domains';
import InterfaceFilterForm from './forms/InterfaceFilterForm';

export interface AccountsProps {
  getAdminInterface: HandleGetAdminInterface;
  adminInterfaceItems: Array<AdminInterfaceItemPrepared>;
  setAdminInterfaceId: HandleSetInterfaceId;
}

const Interfaces: React.FC<AccountsProps> = ({
  getAdminInterface,
  setAdminInterfaceId,
  adminInterfaceItems,
}) => {
  React.useEffect(
    () => {
      getAdminInterface();
    },
    [getAdminInterface]
  );

  return (
    <TablePage
      title="Interfaces"
      data={adminInterfaceItems}
      columns={tableColumns}
      hint="Double Click on Row to Edit Interface"
      addNewModalName={modalNames.ADD_ADMIN_INTERFACE}
      editModalName={modalNames.EDIT_ADMIN_INTERFACE}
      setCurrentIdAction={setAdminInterfaceId}
      withOpenModalOnDoubleClick={true}
      withContextMenu={true}
      contextMenuItems={[
        { name: 'Edit' },
      ]}
      FilterForm={
        <InterfaceFilterForm />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Interfaces);
