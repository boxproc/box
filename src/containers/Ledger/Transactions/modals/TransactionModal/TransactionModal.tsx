import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import LoanIllustration from 'containers/ProductDesigner/Products/illustration/LoanIllustration';
import { TransactionForm } from './../../forms';

import { IPayloadTransactionModal } from 'store';
import { dateUtil } from 'utils';

interface ITransactionModal extends IWithModal {
  currentTransactionId: number;
  transactionAmount: number;
  payloadTransactionModal: IPayloadTransactionModal;
  isConvertibleToLoan: boolean;
}

const modalName = modalNamesConst.TRANSACTION;

const TransactionModal: React.FC<ITransactionModal> = ({
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
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      containerWidth="1010px"
      minContainerHeight="580px"
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
