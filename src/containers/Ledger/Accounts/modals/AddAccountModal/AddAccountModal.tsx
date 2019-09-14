import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { CloseModal } from 'store/domains';
import { SelectValues } from 'types';

interface AddAccountModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_LEDGER_ACCOUNT;

const AddAccountModal: React.FC<AddAccountModalProps> = ({
  closeModal,
  institutionsOptions,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add Account"
      maxContainerWidth={980}
      minContainerHeight={511}
      withCloseConfirmation={isDirty}
    >
      <AccountForm
        institutionsOptions={institutionsOptions}
        initialValues={{
          institutionId: institutionsOptions && institutionsOptions[0],
        }}
        isDirty={isDirty}
        onCancel={() => closeModal(modalName)}
        mode="add"
      />
    </Modal>
  );
};

export default AddAccountModal;
