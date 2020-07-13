import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, T4, Tabs, TabsPanel, Timeline } from 'components';
import { modalNamesConst, modalTypesConst } from 'consts';
import LoanIllustration from 'containers/ProductDesigner/Products/illustration/LoanIllustration';
import { IWithModal, withModal } from 'HOCs';
import { DirectDebitForm, TransactionForm } from './../../forms';

import {
  IDirectDebitPayment,
  IPayloadTransactionModal,
  ITransaction,
  THandleGetDirectDebitPayment,
  TResetDirectDebitPayment,
} from 'store';
import { dateUtil } from 'utils';

interface ITransactionModal extends IWithModal {
  currentTransaction: ITransaction;
  directDebitPayment: IDirectDebitPayment;
  directDebitPaymentHistory: Array<{ date: string; event: string; }>;
  getDirectDebitPayment: THandleGetDirectDebitPayment;
  isConvertibleToLoan: boolean;
  isDirectDebitTr: boolean;
  isLoadingDirectDebitPayment: boolean;
  payloadTransactionModal: IPayloadTransactionModal;
  resetDirectDebitPayment: TResetDirectDebitPayment;
  transactionAmount: number;
}

const modalName = modalNamesConst.TRANSACTION;

const TransactionModal: React.FC<ITransactionModal> = ({
  closeModal,
  currentTransaction,
  directDebitPayment,
  directDebitPaymentHistory,
  getDirectDebitPayment,
  isConvertibleToLoan,
  isDirectDebitTr,
  isLoadingDirectDebitPayment,
  isReadOnly,
  payloadTransactionModal,
  resetDirectDebitPayment,
  transactionAmount,
}) => {
  const currentTransactionId = React.useMemo(
    () => currentTransaction && currentTransaction.id,
    [currentTransaction]
  );

  const currentTransactionDescription = React.useMemo(
    () => currentTransaction && currentTransaction.description,
    [currentTransaction]
  );

  React.useEffect(
    () => {
      if (isDirectDebitTr) {
        getDirectDebitPayment(currentTransactionId);
      }
    },
    [isDirectDebitTr, currentTransactionId, getDirectDebitPayment]
  );

  React.useEffect(
    () => {
      return () => resetDirectDebitPayment();
    },
    [resetDirectDebitPayment]
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
      title={`Transaction: ${currentTransactionDescription}`}
      containerWidth="900px"
      minContainerHeight="580px"
    >
      <Tabs activeTab={activeTab}>
        <TabsPanel
          title="Transaction Information"
          hasTabs={true}
        >
          <TransactionForm
            initialValues={currentTransaction}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        {isDirectDebitTr && (
          <TabsPanel
            title="Direct Debit"
            isLoading={isLoadingDirectDebitPayment}
          >
            <DirectDebitForm initialValues={directDebitPayment} />
            <Box my="15px">
              <Box mb="20px">
                <T4>Payment history</T4>
              </Box>
              <Timeline items={directDebitPaymentHistory} />
            </Box>
            <Hr />
            <Flex justifyContent="flex-end">
              <Button
                text="close"
                onClick={handleOnCancel}
              />
            </Flex>
          </TabsPanel>
        )}
        {isConvertibleToLoan && (
          <TabsPanel title="Convert to Loan">
            <LoanIllustration
              initialFormValues={convertToLoanInitValues}
              withLoanSelection={true}
              withConvertToLoan={true}
              isReadOnly={isReadOnly}
              onCancel={handleOnCancel}
            />
          </TabsPanel>
        )}
      </Tabs>
    </Modal>
  );
};

export default withModal(TransactionModal);
