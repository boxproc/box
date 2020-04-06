import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { iconNamesConst, modalNamesConst, yesNoConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  IInstitution,
  THandleDeleteInstitution,
  THandleGetInstitutions,
  TResetInstitutions,
} from 'store';
import { storageUtil } from 'utils';

interface IInstitutions {
  currentInstitutionId: number;
  currentInstitutionName: string;
  deleteInstitution: THandleDeleteInstitution;
  getInstitutions: THandleGetInstitutions;
  institutionsData: ImmutableArray<IInstitution>;
  isLoading: boolean;
  isReadOnly: boolean;
  resetInstitutions: TResetInstitutions;
}

const Institutions: React.FC<IInstitutions> = ({
  currentInstitutionId,
  currentInstitutionName,
  deleteInstitution,
  getInstitutions,
  institutionsData,
  isLoading,
  isReadOnly,
  resetInstitutions,
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

  const isMasterInstitution = React.useMemo(
    () => {
      const userData = storageUtil.getUserData();

      return userData && userData.changeProfileAllowedFlag === yesNoConst.YES;
    },
    []
  );

  return (
    <PageTemplate
      title="Institutions"
      data={institutionsData}
      columns={tableColumns}
      isDownloadButton={true}
      newModalName={isMasterInstitution && modalNamesConst.ADD_INSTITUTION}
      viewingModalName={modalNamesConst.EDIT_INSTITUTION}
      contextMenuItems={contextMenuItems}
      isLoading={isLoading}
      isSearchable={true}
    />
  );
};

export default Institutions;
