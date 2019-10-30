import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { SelectValues } from 'types';

interface AddAccountModalProps extends WithModalProps {
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_LEDGER_ACCOUNT;

const AddAccountModal: React.FC<AddAccountModalProps> = ({
  closeModal,
  institutionsOptions,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add Account"
      maxContainerWidth={980}
      minContainerHeight={490}
      withCloseConfirmation={isFormDirty}
    >
      <AccountForm
        institutionsOptions={institutionsOptions}
        initialValues={{
          institutionId: institutionsOptions && institutionsOptions[0],
        }}
        onCancel={handleOnCancel}
        mode="add"
      />
    </Modal>
  );
};

export default withModal(AddAccountModal);
