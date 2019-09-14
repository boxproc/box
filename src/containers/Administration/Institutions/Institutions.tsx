import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';

import {
  AdminInstitutionsItemPrepared,
  HandleDeleteAdminInstitution,
  HandleGetAdminInstitutions,
  HandleSetAdminInstitutionId,
} from 'store/domains';

export interface InstitutionsProps {
  getAdminInstitutions: HandleGetAdminInstitutions;
  adminInstitutions: Array<AdminInstitutionsItemPrepared>;
  setAdminInstitutionId: HandleSetAdminInstitutionId;
  deleteAdminInstitution: HandleDeleteAdminInstitution;
  adminCurrentInstitutionName: string;
}

const Institutions: React.FC<InstitutionsProps> = ({
  adminInstitutions,
  getAdminInstitutions,
  setAdminInstitutionId,
  deleteAdminInstitution,
  adminCurrentInstitutionName,
}) => {
  React.useEffect(
    () => {
      getAdminInstitutions();
    },
    [getAdminInstitutions]
  );

  const contextMenuItems = [
    {
      name: 'Delete',
      icon: 'delete',
      action: deleteAdminInstitution,
      withConfirmation: true,
      confirmationText: `Delete institution "${adminCurrentInstitutionName}"?`,
    },
  ];

  return (
    <TablePage
      title="Institutions"
      data={adminInstitutions}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_ADMIN_INSTITUTION}
      editModalName={modalNamesConst.EDIT_ADMIN_INSTITUTION}
      setCurrentIdAction={setAdminInstitutionId}
      contextMenuItems={contextMenuItems}
    />
  );
};

export default withSpinner()(Institutions);
