import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { CustomerForm } from 'containers/Ledger/Customers/forms';

interface AddCustomerModalProps extends WithModalProps {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_CUSTOMER;

const AddCustomerModal: React.FC<AddCustomerModalProps> = ({
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
      title="Add New Customer"
      containerWidth={1010}
      withCloseConfirmation={isFormDirty}
    >
      <CustomerForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddCustomerModal);
