import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { CustomerForm } from 'containers/Ledger/Customers/forms';

import { CloseModal } from 'store/domains';

interface AddCustomerModalProps {
  closeModal: CloseModal;
}

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalNames.ADD_LEDGER_CUSTOMER}
      title="Add New Customer"
      maxContainerWidth={700}
    >
      <CustomerForm
        onCancel={() => closeModal(modalNames.ADD_LEDGER_CUSTOMER)}
        mode="add"
      />
    </Modal>
  );
};

export default AddCustomerModal;
