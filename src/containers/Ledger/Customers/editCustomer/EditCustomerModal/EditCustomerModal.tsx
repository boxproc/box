import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import EditCustomerForm from 'containers/Ledger/Customers/editCustomer/EditCustomerForm';

import { CloseModal } from 'store/domains';

interface EditCustomerModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.EDIT_LEDGER_CUSTOMER;

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Edit Customer"
    >
      <EditCustomerForm
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default EditCustomerModal;
