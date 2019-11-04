import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { AddCustomerForm } from 'containers/Ledger/Customers/forms';

interface AddCustomerModalProps extends WithModalProps {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_LEDGER_CUSTOMER;

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
      maxContainerWidth={980}
      minContainerHeight={510}
      withCloseConfirmation={isFormDirty}
    >
      <AddCustomerForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddCustomerModal);
