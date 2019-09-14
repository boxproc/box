import React from 'react';

import { Modal } from 'components';

import { modalNames } from 'consts';

import { AddCustomerForm } from 'containers/Ledger/Customers/forms';

import { CloseModal } from 'store/domains';

interface AddCustomerModalProps {
  closeModal: CloseModal;
  isFormDirty: boolean;
}

const modalName = modalNames.ADD_LEDGER_CUSTOMER;

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New Customer"
      maxContainerWidth={980}
      withCloseConfirmation={isFormDirty}
    >
      <AddCustomerForm
        onCancel={() => closeModal(modalName)}
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default AddCustomerModal;
