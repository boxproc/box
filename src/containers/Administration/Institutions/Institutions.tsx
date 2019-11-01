import React from 'react';

import { withSpinner } from 'components';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
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
        icon: iconNamesConst.DELETE,
        action: deleteAdminInstitution,
        withConfirmation: true,
        confirmationText: `Delete institution "${adminCurrentInstitutionName}"?`,
      },
    ],
    [deleteAdminInstitution, adminCurrentInstitutionName]
  );

  return (
    <PageTemplate
      title="Institutions"
      data={adminInstitutions}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_INSTITUTION}
      editModalName={modalNamesConst.EDIT_INSTITUTION}
      contextMenuItems={contextMenuItems}
    />
  );
};

export default withSpinner()(Institutions);
