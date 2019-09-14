import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { CloseModal, LedgerAccountItemDetailsPrepared } from 'store/domains';

import { SelectValues } from 'types';

interface EditAccountModalProps {
  closeModal: CloseModal;
  ledgerCurrentAccountAlias: string;
  ledgerCurrentAccount: Partial<LedgerAccountItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
  isDirty: boolean;
}

const modalName = modalNamesConst.EDIT_LEDGER_ACCOUNT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  ledgerCurrentAccountAlias,
  ledgerCurrentAccount,
  institutionsOptions,
  isDirty,
}) => {
  const accountAlias = ledgerCurrentAccountAlias ? `: ${ledgerCurrentAccountAlias}` : '';

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Account${accountAlias}`}
      maxContainerWidth={980}
      minContainerHeight={511}
      withCloseConfirmation={isDirty}
    >
      <AccountForm
        onCancel={() => closeModal(modalName)}
        mode="edit"
        isDirty={isDirty}
        initialValues={ledgerCurrentAccount}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default EditAccountModal;
