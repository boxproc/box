import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditCustomerForm } from 'containers/Ledger/Customers/forms';

import { CloseModal } from 'store/domains';

interface EditCustomerModalProps {
  closeModal: CloseModal;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_LEDGER_CUSTOMER;

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
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
