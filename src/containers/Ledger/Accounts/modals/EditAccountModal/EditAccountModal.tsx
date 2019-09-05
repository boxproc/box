import React from 'react';

import Modal from 'components/Modal';

import { modalNames, modalTypes } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { CloseModal, LedgerAccountItemDetailsPrepared } from 'store/domains';
import { SelectValues } from 'types';

interface EditAccountModalProps {
  closeModal: CloseModal;
  ledgerCurrentAccountAlias: string;
  ledgerCurrentAccount: Partial<LedgerAccountItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
}

const modalName = modalNames.EDIT_LEDGER_ACCOUNT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  ledgerCurrentAccountAlias,
  ledgerCurrentAccount,
  institutionsOptions,
  isFormDirty,
}) => {
  const accountAlias = ledgerCurrentAccountAlias ? `: ${ledgerCurrentAccountAlias}` : '';

  return (
    <Modal
      name={modalName}
      type={modalTypes.EDIT_MODAL}
      title={`Account${accountAlias}`}
      maxContainerWidth={980}
      minContainerHeight={511}
      withCloseConfirmation={isFormDirty}
    >
      <AccountForm
        onCancel={() => closeModal(modalName)}
        mode="edit"
        isDirty={isFormDirty}
        initialValues={ledgerCurrentAccount}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default EditAccountModal;
