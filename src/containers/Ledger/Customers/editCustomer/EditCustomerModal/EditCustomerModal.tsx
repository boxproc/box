import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import EditCustomerForm from 'containers/Ledger/Customers/editCustomer/EditCustomerForm';

import { CloseModal } from 'store/domains';

interface EditCustomerModalProps {
  closeModal: CloseModal;
}

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_LEDGER_CUSTOMER}
      title="Edit Customer"
    >
      <EditCustomerForm
        onCancel={() => closeModal(modalNames.EDIT_LEDGER_CUSTOMER)}
      />
    </Modal>
  );
};

export default EditCustomerModal;
