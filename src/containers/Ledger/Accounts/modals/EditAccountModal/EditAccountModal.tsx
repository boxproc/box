import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { LedgerAccountItemDetailsPrepared } from 'store/domains';

interface EditAccountModalProps extends WithModalProps {
  ledgerCurrentAccountAlias: string;
  ledgerCurrentAccount: Partial<LedgerAccountItemDetailsPrepared>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_LEDGER_ACCOUNT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  ledgerCurrentAccountAlias,
  ledgerCurrentAccount,
  isFormDirty,
}) => {
  const accountAlias = React.useMemo(
    () => ledgerCurrentAccountAlias ? `: ${ledgerCurrentAccountAlias}` : '',
    [ledgerCurrentAccountAlias]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Account${accountAlias}`}
      maxContainerWidth={1050}
      minContainerHeight={580}
      withCloseConfirmation={isFormDirty}
    >
      <AccountForm
        onCancel={handleOnCancel}
        mode="edit"
        initialValues={ledgerCurrentAccount}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
