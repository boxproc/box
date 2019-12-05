import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { LedgerAccountItemDetailsPrepared } from 'store/domains';

interface EditAccountModalProps extends WithModalProps {
  currentAccountAlias: string;
  currentAccount: Partial<LedgerAccountItemDetailsPrepared>;
  currentAccountAuxCounters: Partial<LedgerAccountItemDetailsPrepared>;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_LEDGER_ACCOUNT;

const EditAccountModal: React.FC<EditAccountModalProps> = ({
  closeModal,
  currentAccountAlias,
  currentAccount,
  currentAccountAuxCounters,
  isFormDirty,
}) => {
  const accountAlias = React.useMemo(
    () => currentAccountAlias ? `: ${currentAccountAlias}` : '',
    [currentAccountAlias]
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
      maxContainerWidth={1100}
      minContainerHeight={580}
      withCloseConfirmation={isFormDirty}
    >
      <AccountForm
        onCancel={handleOnCancel}
        mode="edit"
        initialValues={currentAccount}
        currentAccountAuxCounters={currentAccountAuxCounters}
      />
    </Modal>
  );
};

export default withModal(EditAccountModal);
