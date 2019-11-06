import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { CustomerForm } from 'containers/Ledger/Customers/forms';

interface EditCustomerModalProps extends WithModalProps {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_LEDGER_CUSTOMER;

const EditCustomerModal: React.FC<EditCustomerModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Edit Customer"
      maxContainerWidth={1010}
      withCloseConfirmation={isFormDirty}
    >
      <CustomerForm
        isEditMode={true}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

export default withModal(EditCustomerModal);
