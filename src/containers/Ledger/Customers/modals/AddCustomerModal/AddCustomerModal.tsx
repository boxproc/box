import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';

import { CustomerForm } from 'containers/Ledger/Customers/forms';

interface AddCustomerModalProps extends IWithModal {
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
      containerWidth="1010px"
      withCloseConfirmation={isFormDirty}
    >
      <CustomerForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddCustomerModal);
