import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { accountInitialFormValues } from 'containers/Ledger/Accounts/consts';
import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { SelectValues } from 'types';

interface AddAccountModalProps extends WithModalProps {
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_LEDGER_ACCOUNT;

const AddAccountModal: React.FC<AddAccountModalProps> = ({
  institutionsOptions,
  isFormDirty,
  closeModal,
}) => {
  const initialValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions && institutionsOptions[0],
        ...accountInitialFormValues,
      };
    },
    [institutionsOptions]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add Account"
      maxContainerWidth={980}
      minContainerHeight={510}
      withCloseConfirmation={isFormDirty}
    >
      <AccountForm
        initialValues={initialValues}
        onCancel={handleOnCancel}
        mode="add"
      />
    </Modal>
  );
};

export default withModal(AddAccountModal);
