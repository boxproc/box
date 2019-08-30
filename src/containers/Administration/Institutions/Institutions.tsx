import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './components';

import {
  AdminInstitutionsItemPrepared,
  HandleGetAdminInstitutions,
  HandleSetAdminInstitutionId,
} from 'store/domains';

export interface InstitutionsProps {
  getAdminInstitutions: HandleGetAdminInstitutions;
  adminInstitutions: Array<AdminInstitutionsItemPrepared>;
  setAdminInstitutionId: HandleSetAdminInstitutionId;
}

const Institutions: React.FC<InstitutionsProps> = ({
  adminInstitutions,
  getAdminInstitutions,
  setAdminInstitutionId,
}) => {
  React.useEffect(
    () => {
      getAdminInstitutions();
    },
    [getAdminInstitutions]
  );

  return (
    <TablePage
      title="Institutions"
      data={adminInstitutions}
      columns={tableColumns}
      hint="Double Click on Row to View Institution"
      addNewModalName={modalNames.ADD_ADMIN_INSTITUTION}
      editModalName={modalNames.EDIT_ADMIN_INSTITUTION}
      setCurrentIdAction={setAdminInstitutionId}
    />
  );
};

export default withSpinner()(Institutions);
