import React from 'react';

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
  institutionsData: Array<AdminInstitutionsItemPrepared>;
  currentInstitutionName: string;
  currentInstitutionId: number;
  isLoading: boolean;
  isReadOnly: boolean;
  getInstitutions: HandleGetAdminInstitutions;
  deleteInstitution: HandleDeleteAdminInstitution;
  resetInstitutions: ResetInstitutions;
}

const Institutions: React.FC<InstitutionsProps> = ({
  institutionsData,
  getInstitutions,
  deleteInstitution,
  currentInstitutionName,
  currentInstitutionId,
  resetInstitutions,
  isLoading,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getInstitutions();
      return () => resetInstitutions();
    },
    [getInstitutions, resetInstitutions]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        isDisabled: isReadOnly,
        action: () => deleteInstitution(currentInstitutionId),
        withConfirmation: true,
        confirmationText: `Delete institution "${currentInstitutionName}"?`,
      },
    ],
    [deleteInstitution, currentInstitutionName, currentInstitutionId, isReadOnly]
  );

  return (
    <PageTemplate
      title="Institutions"
      data={institutionsData}
      columns={tableColumns}
      isDownloadButton={true}
      newModalName={modalNamesConst.ADD_INSTITUTION}
      editModalName={modalNamesConst.EDIT_INSTITUTION}
      contextMenuItems={contextMenuItems}
      isLoading={isLoading}
    />
  );
};

export default Institutions;
