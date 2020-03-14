import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { TransactionForm } from 'containers/Ledger/Transactions/forms';
import LoanIllustration from 'containers/ProductDesigner/Products/illustration/LoanIllustration';

import { PayloadTransactionModal } from 'store/domains';
import { dateUtil } from 'utils';

interface TransactionModalProps extends WithModalProps {
  currentTransactionId: number;
  transactionAmount: number;
  payloadTransactionModal: PayloadTransactionModal;
  isConvertibleToLoan: boolean;
}

const modalName = modalNamesConst.TRANSACTION;

const TransactionModal: React.FC<TransactionModalProps> = ({
  closeModal,
  currentTransactionId,
  payloadTransactionModal,
  transactionAmount,
  isReadOnly,
  isConvertibleToLoan,
}) => {
  const modalTitle = React.useMemo(
    () => `Transaction ${currentTransactionId}`,
    [currentTransactionId]
  );

  const activeTab = React.useMemo(
    () => payloadTransactionModal && payloadTransactionModal.activeTab,
    [payloadTransactionModal]
  );

  const convertToLoanInitValues = React.useMemo(
    () => {
      return {
        startDate: dateUtil.todayDate(),
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
      containerWidth={1010}
      minContainerHeight={580}
    >
      {!isConvertibleToLoan && (
        <TransactionForm onCancel={handleOnCancel} />
      )}
      {isConvertibleToLoan && (
        <Tabs activeTab={activeTab}>
          <TabsPanel
            title="Transaction Information"
            hasTabs={true}
          >
            <TransactionForm onCancel={handleOnCancel} />
          </TabsPanel>
          <TabsPanel title="Convert to Loan">
            <LoanIllustration
              initialFormValues={convertToLoanInitValues}
              withLoanSelection={true}
              withConvertToLoan={true}
              isReadOnly={isReadOnly}
              onCancel={handleOnCancel}
            />
          </TabsPanel>
        </Tabs>
      )}
    </Modal>
  );
};

export default withModal(TransactionModal);
