import React from 'react';

import { Modal } from 'components';

import { modalNames, modalTypes } from 'consts';

import { InstitutionForm } from 'containers/Administration/Institutions/forms';

import { AdminInstitutionsItemDetailsPrepared, CloseModal } from 'store/domains';

interface EditInstitutionModalProps {
  closeModal: CloseModal;
  adminCurrentInstitution: AdminInstitutionsItemDetailsPrepared;
  adminCurrentInstitutionName: string;
  isFormDirty: boolean;
}

const modalName = modalNames.EDIT_ADMIN_INSTITUTION;

const EditInstitutionModal: React.FC<EditInstitutionModalProps> = ({
  closeModal,
  adminCurrentInstitution,
  adminCurrentInstitutionName,
  isFormDirty,
}) => {
  const institutionName = adminCurrentInstitutionName ? `: "${adminCurrentInstitutionName}"` : '';
  return (
    <Modal
      name={modalName}
      type={modalTypes.EDIT_MODAL}
      title={`Edit Institution${institutionName}`}
      maxContainerWidth={550}
      withCloseConfirmation={isFormDirty}
    >
      <InstitutionForm
        initialValues={adminCurrentInstitution}
        onCancel={() => closeModal(modalName)}
        mode="edit"
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default EditInstitutionModal;
