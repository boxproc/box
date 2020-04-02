import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';
import { InstitutionForm } from './../../forms';

import { IInstitutionDetails } from 'store';

interface IEditInstitutionModal extends IWithModal {
  currentInstitution: IInstitutionDetails;
  currentInstitutionName: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_INSTITUTION;

const EditInstitutionModal: React.FC<IEditInstitutionModal> = ({
  closeModal,
  currentInstitution,
  currentInstitutionName,
  isFormDirty,
  isReadOnly,
}) => {
  const modalTitle = React.useMemo(
    () => {
      const institutionName = currentInstitutionName ? `: "${currentInstitutionName}"` : '';
      return `Edit Institution${institutionName}`;
    },
    [currentInstitutionName]
  );

  const isMasterInstitutionFlag = React.useMemo(
    () => currentInstitution && currentInstitution.masterInstitutionFlag,
    [currentInstitution]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      containerWidth="550px"
      withCloseConfirmation={isFormDirty}
    >
      <InstitutionForm
        initialValues={currentInstitution}
        onCancel={handleOnCancel}
        isReadOnly={isReadOnly}
        isMasterInstitutionFlag={isMasterInstitutionFlag}
        isEditMode={true}
      />
    </Modal>
  );
};

export default withModal(EditInstitutionModal);
