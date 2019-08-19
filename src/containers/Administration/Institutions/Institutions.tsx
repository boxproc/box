import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { modalNames } from 'consts';

import { tableColumns } from './components';

import {
  AdminInstitutionsItemPrepared,
  HandleGetAdminInstitutions,
  HandleSetAdminInstitutionId,
  OpenModal,
} from 'store/domains';

export interface InstitutionsProps {
  openModal: OpenModal;
  getAdminInstitutions: HandleGetAdminInstitutions;
  setAdminInstitutionId: HandleSetAdminInstitutionId;
  adminInstitutions: Array<AdminInstitutionsItemPrepared>;
}

const Institutions: React.FC<InstitutionsProps> = ({
  openModal,
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

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => {
          setAdminInstitutionId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_ADMIN_INSTITUTION,
          });
        },
      };
    },
    [openModal, setAdminInstitutionId]
  );

  return (
    <TablePage
      title="Accounts"
      data={adminInstitutions}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_ADMIN_INSTITUTION}
      hint="Double Click on Row to View Institution"
      getTrGroupProps={handleOnClickRow}
    />
  );
};

export default withSpinner()(Institutions);
