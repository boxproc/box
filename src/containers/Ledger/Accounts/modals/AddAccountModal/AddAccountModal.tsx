import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { CloseModal } from 'store/domains';
import { SelectValues } from 'types';

interface AddAccountModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_LEDGER_ACCOUNT;

const AddAccountModal: React.FC<AddAccountModalProps> = ({
  closeModal,
  institutionsOptions,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Account"
      maxContainerWidth={980}
      minContainerHeight={511}
      withCloseConfirmation={isFormDirty}
    >
      <AccountForm
        institutionsOptions={institutionsOptions}
        initialValues={{
          institutionId: institutionsOptions && institutionsOptions[0],
        }}
        isDirty={isFormDirty}
        onCancel={() => closeModal(modalName)}
        mode="add"
      />
    </Modal>
  );
};

export default AddAccountModal;
