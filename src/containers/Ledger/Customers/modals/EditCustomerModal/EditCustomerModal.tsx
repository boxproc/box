import React from 'react';

import Modal from 'components/Modal';

import { modalNames, modalTypes } from 'consts';

import { EditCustomerForm } from 'containers/Ledger/Customers/forms';

import { CloseModal } from 'store/domains';

interface EditCustomerModalProps {
  closeModal: CloseModal;
  isFormDirty: boolean;
}

const modalName = modalNames.EDIT_LEDGER_CUSTOMER;

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      type={modalTypes.EDIT_MODAL}
      title="Edit Customer"
      maxContainerWidth={980}
      withCloseConfirmation={isFormDirty}
    >
      <EditCustomerForm
        onCancel={() => closeModal(modalName)}
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default EditCustomerModal;
