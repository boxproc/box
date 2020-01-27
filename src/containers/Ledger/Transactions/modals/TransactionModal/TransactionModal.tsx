import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { LedgerTransactionForm } from 'containers/Ledger/Transactions/forms';
import LoanIllustration from 'containers/ProductDesigner/Products/illustration/LoanIllustration';

import { PayloadLedgerTransactionModal } from 'store/domains';
import { dateUtil } from 'utils';

interface TransactionModalProps extends WithModalProps {
  currentTransactionId: number;
  transactionAmount: number;
  payloadLedgerTransactionModal: PayloadLedgerTransactionModal;
  isTransactionConvertibleToLoan: boolean;
}

const modalName = modalNamesConst.LEDGER_TRANSACTION;

const TransactionModal: React.FC<TransactionModalProps> = ({
  closeModal,
  currentTransactionId,
  payloadLedgerTransactionModal,
  transactionAmount,
  isReadOnly,
  isTransactionConvertibleToLoan,
}) => {
  const modalTitle = React.useMemo(
    () => `Transaction ${currentTransactionId}`,
    [currentTransactionId]
  );

  const activeTab = React.useMemo(
    () => payloadLedgerTransactionModal && payloadLedgerTransactionModal.activeTab,
    [payloadLedgerTransactionModal]
  );

  const convertToLoanInitValues = React.useMemo(
    () => {
      return {
        startDate: dateUtil.todayDate,
        amount: transactionAmount,
      };
    },
    [transactionAmount]
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
        {isTransactionConvertibleToLoan &&
        <TabsPanel title="Convert to Loan">
          <LoanIllustration
            initialFormValues={convertToLoanInitValues}
            withLoanSelection={true}
            withConvertToLoan={true}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        }
      </Tabs>
    </Modal>
  );
};

export default withModal(TransactionModal);
