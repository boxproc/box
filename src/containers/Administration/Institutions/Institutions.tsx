import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';

import {
  AdminInstitutionsItemPrepared,
  HandleDeleteAdminInstitution,
  HandleGetAdminInstitutions,
} from 'store/domains';

export interface InstitutionsProps {
  getAdminInstitutions: HandleGetAdminInstitutions;
  adminInstitutions: Array<AdminInstitutionsItemPrepared>;
  deleteAdminInstitution: HandleDeleteAdminInstitution;
  adminCurrentInstitutionName: string;
}

const Institutions: React.FC<InstitutionsProps> = ({
  adminInstitutions,
  getAdminInstitutions,
  deleteAdminInstitution,
  adminCurrentInstitutionName,
}) => {
  React.useEffect(
    () => {
      getAdminInstitutions();
    },
    [getAdminInstitutions]
  );
  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: 'delete',
        action: deleteAdminInstitution,
        withConfirmation: true,
        confirmationText: `Delete institution "${adminCurrentInstitutionName}"?`,
      },
    ],
    [deleteAdminInstitution, adminCurrentInstitutionName]
  );

  return (
    <TablePage
      title="Institutions"
      data={adminInstitutions}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_ADMIN_INSTITUTION}
      editModalName={modalNamesConst.EDIT_ADMIN_INSTITUTION}
      contextMenuItems={contextMenuItems}
    />
  );
};

export default withSpinner()(Institutions);
