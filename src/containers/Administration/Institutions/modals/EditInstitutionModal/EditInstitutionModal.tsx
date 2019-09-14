import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { InstitutionForm } from 'containers/Administration/Institutions/forms';

import { AdminInstitutionsItemDetailsPrepared, CloseModal } from 'store/domains';

interface EditInstitutionModalProps {
  closeModal: CloseModal;
  adminCurrentInstitution: AdminInstitutionsItemDetailsPrepared;
  adminCurrentInstitutionName: string;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_ADMIN_INSTITUTION;

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
      type={modalTypesConst.EDIT_MODAL}
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
