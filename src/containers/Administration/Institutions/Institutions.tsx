import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from './components';

import {
  AdminInstitutionsItemPrepared,
  HandleDeleteAdminInstitution,
  HandleGetAdminInstitutions,
  ResetInstitutions,
} from 'store/domains';

export interface InstitutionsProps {
  getAdminInstitutions: HandleGetAdminInstitutions;
  adminInstitutions: Array<AdminInstitutionsItemPrepared>;
  deleteAdminInstitution: HandleDeleteAdminInstitution;
  adminCurrentInstitutionName: string;
  resetInstitutions: ResetInstitutions;
}

const Institutions: React.FC<InstitutionsProps> = ({
  adminInstitutions,
  getAdminInstitutions,
  deleteAdminInstitution,
  adminCurrentInstitutionName,
  resetInstitutions,
}) => {
  React.useEffect(
    () => {
      getAdminInstitutions();
      return () => resetInstitutions();
    },
    [getAdminInstitutions, resetInstitutions]
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
