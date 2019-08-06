import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import { CustomerForm } from 'containers/Ledger/Customers/forms';

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
      maxContainerWidth={700}
    >
      <CustomerForm
        isDisabledInstitution={true}
        isDisabledStatus={true}
        onCancel={() => closeModal(modalNames.EDIT_LEDGER_CUSTOMER)}
        mode="edit"
      />
    </Modal>
  );
};

export default EditCustomerModal;
