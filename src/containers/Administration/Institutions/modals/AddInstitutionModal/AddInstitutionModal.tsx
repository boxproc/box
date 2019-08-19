import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { InstitutionForm } from 'containers/Administration/Institutions/forms';

import { CloseModal } from 'store/domains';

interface AddInstitutionModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.ADD_ADMIN_INSTITUTION;

const AddInstitutionModal: React.FC<AddInstitutionModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Institution"
      maxContainerWidth={550}
    >
      <InstitutionForm
        onCancel={() => closeModal(modalName)}
        mode="add"
      />
    </Modal>
  );
};

export default AddInstitutionModal;
