import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import AddCustomerForm from 'containers/Ledger/Customers/addCustomer/AddCustomerForm';

import { CloseModal } from 'store/domains';

interface AddCustomerModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.ADD_LEDGER_CUSTOMER;

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New Customer"
      maxContainerWidth={980}
    >
      <AddCustomerForm
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default AddCustomerModal;
