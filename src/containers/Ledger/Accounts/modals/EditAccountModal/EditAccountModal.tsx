import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { LedgerAccountItemDetailsPrepared, LedgerStatementItemPrepared } from 'store/domains';

import { SelectValues } from 'types';

interface EditAccountModalProps extends WithModalProps {
  ledgerCurrentAccountAlias: string;
  ledgerCurrentAccount: Partial<LedgerAccountItemDetailsPrepared>;
  institutionsOptions: Array<SelectValues>;
  isFormDirty: boolean;
  ledgerLastStatement: Partial<LedgerStatementItemPrepared>;
}

const modalName = modalNamesConst.EDIT_LEDGER_ACCOUNT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  ledgerCurrentAccountAlias,
  ledgerCurrentAccount,
  institutionsOptions,
  isFormDirty,
  ledgerLastStatement,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const accountAlias = ledgerCurrentAccountAlias ? `: ${ledgerCurrentAccountAlias}` : '';

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Account${accountAlias}`}
      maxContainerWidth={980}
      minContainerHeight={515}
      withCloseConfirmation={isFormDirty}
    >
      <AccountForm
        onCancel={handleOnCancel}
        mode="edit"
        initialValues={{
          ...ledgerCurrentAccount,
          ...ledgerLastStatement,
        }}
        institutionsOptions={institutionsOptions}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
