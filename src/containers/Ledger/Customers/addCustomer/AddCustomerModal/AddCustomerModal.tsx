import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import AddCustomerForm from 'containers/Ledger/Customers/addCustomer/AddCustomerForm';

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
      <AddCustomerForm onCancel={() => closeModal(modalNames.ADD_LEDGER_CUSTOMER)} />
    </Modal>
  );
};

export default AddCustomerModal;
