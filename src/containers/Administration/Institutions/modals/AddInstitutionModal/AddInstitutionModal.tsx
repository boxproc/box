import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { InstitutionForm } from 'containers/Administration/Institutions/forms';

import { CloseModal } from 'store/domains';

interface AddInstitutionModalProps {
  closeModal: CloseModal;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_ADMIN_INSTITUTION;

const AddInstitutionModal: React.FC<AddInstitutionModalProps> = ({
  closeModal,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Institution"
      maxContainerWidth={550}
      withCloseConfirmation={isDirty}
    >
      <InstitutionForm
        onCancel={() => closeModal(modalName)}
        mode="add"
        isDirty={isDirty}
      />
    </Modal>
  );
};

export default AddInstitutionModal;
