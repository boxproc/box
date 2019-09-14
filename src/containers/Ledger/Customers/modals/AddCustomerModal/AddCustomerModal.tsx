import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { AddCustomerForm } from 'containers/Ledger/Customers/forms';

import { CloseModal } from 'store/domains';

interface AddCustomerModalProps {
  closeModal: CloseModal;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_LEDGER_CUSTOMER;

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({
  closeModal,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New Customer"
      maxContainerWidth={980}
      withCloseConfirmation={isDirty}
    >
      <AddCustomerForm
        onCancel={() => closeModal(modalName)}
        isDirty={isDirty}
      />
    </Modal>
  );
};

export default AddCustomerModal;
