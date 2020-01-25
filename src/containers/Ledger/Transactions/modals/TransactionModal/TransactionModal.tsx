import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import {
  LedgerConvertToLoanForm,
  LedgerTransactionForm,
} from 'containers/Ledger/Transactions/forms';
import { PayloadLedgerTransactionModal } from 'store/domains';

interface TransactionModalProps extends WithModalProps {
  currentTransactionId: number;
  payloadLedgerTransactionModal: PayloadLedgerTransactionModal;
}

const modalName = modalNamesConst.LEDGER_TRANSACTION;

const TransactionModal: React.FC<TransactionModalProps> = ({
  closeModal,
  currentTransactionId,
  payloadLedgerTransactionModal,
  isReadOnly,
}) => {
  const modalTitle = React.useMemo(
    () => `Transaction ${currentTransactionId}`,
    [currentTransactionId]
  );

  const activeTab = React.useMemo(
    () => payloadLedgerTransactionModal && payloadLedgerTransactionModal.activeTab,
    [payloadLedgerTransactionModal]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={modalTitle}
      maxContainerWidth={1010}
      minContainerHeight={590}
    >
      <Tabs activeTab={activeTab}>
        <TabsPanel
          title="Transaction Information"
          hasTabs={true}
        >
          <LedgerTransactionForm onCancel={handleOnCancel} />
        </TabsPanel>
        <TabsPanel title="Convert to Loan">
          <LedgerConvertToLoanForm
            onCancel={handleOnCancel}
            isReadOnly={isReadOnly}
          />
        </TabsPanel>
      </Tabs>
    </Modal>
  );
};

export default withModal(TransactionModal);
