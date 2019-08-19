import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { InstitutionForm } from 'containers/Administration/Institutions/forms';

import { AdminInstitutionsItemDetailsPrepared, CloseModal } from 'store/domains';

interface EditInstitutionModalProps {
  closeModal: CloseModal;
  adminCurrentInstitution: AdminInstitutionsItemDetailsPrepared;
  adminCurrentInstitutionName: string;
}

const modalName = modalNames.EDIT_ADMIN_INSTITUTION;

const EditInstitutionModal: React.FC<EditInstitutionModalProps> = ({
  closeModal,
  adminCurrentInstitution,
  adminCurrentInstitutionName,
}) => {
  const institutionName = adminCurrentInstitutionName ? ` : ${adminCurrentInstitutionName}` : '';

  return (
    <Modal
      name={modalName}
      title={`Edit Institution${institutionName}`}
      maxContainerWidth={550}
    >
      <InstitutionForm
        initialValues={adminCurrentInstitution}
        onCancel={() => closeModal(modalName)}
        mode="edit"
      />
    </Modal>
  );
};

export default EditInstitutionModal;
