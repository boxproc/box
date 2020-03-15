import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { ExternalLink, Modal, T2 } from 'components';
import { SettleTransactionForm, TransactionRetrievingForm } from './forms';

import { modalNamesConst, modalTypesConst, uiItemsConst } from 'consts';

import { withModal, WithModalProps } from 'HOCs';

import {
  HandleRetrieveTransaction,
  HandleSettleTransaction,
  PayloadSettleTransactionModal,
  ResetRetrievedTransaction,
  SettleTransactionFormValues,
  UiItemPrepared,
} from 'store/domains';

interface SettleTransactionModalProps extends WithModalProps {
  retrievedTransaction: SettleTransactionFormValues;
  retrieveTransaction: HandleRetrieveTransaction;
  settleTransaction: HandleSettleTransaction;
  resetRetrievedTransaction: ResetRetrievedTransaction;
  isRetrieving: boolean;
  isLoading: boolean;
  isRetrievedTransaction: boolean;
  isDirtySettleTransactionForm: boolean;
  payloadSettleTransactionModal: PayloadSettleTransactionModal;
  uiItems: Array<UiItemPrepared>;
}

const modalName = modalNamesConst.SETTLE_TRANSACTION;

const SettleTransactionModal: React.FC<SettleTransactionModalProps> = ({
  retrievedTransaction,
  retrieveTransaction,
  resetRetrievedTransaction,
  settleTransaction,
  isLoading,
  isRetrieving,
  isRetrievedTransaction,
  isDirtySettleTransactionForm,
  closeModal,
  payloadSettleTransactionModal,
  uiItems,
}) => {
  React.useEffect(
    () => {
      return () => resetRetrievedTransaction();
    },
    [resetRetrievedTransaction]
  );

  const initialRetrievingFormValues = React.useMemo(
    () => {
      const id = payloadSettleTransactionModal && payloadSettleTransactionModal.transactionId;

      return { id };
    },
    [payloadSettleTransactionModal]
  );

  const isReadonlyId = React.useMemo(
    () => {
      const id = payloadSettleTransactionModal && payloadSettleTransactionModal.transactionId;

      return Boolean(id);
    },
    [payloadSettleTransactionModal]
  );

  const helpLink = React.useMemo(
    () => {
      if (!uiItems) {
        return null;
      }

      const currentUiItem = uiItems
        .find(item => item.id === uiItemsConst.LEDGER_SETTLE_TRANSACTION);

      if (!currentUiItem) {
        return null;
      }

      return currentUiItem.helpPageURL;
    },
    [uiItems]
  );

  const handleCloseModal = React.useCallback(
    () => {
      closeModal(modalName);
    },
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      containerWidth="400px"
      minContainerHeight="160px"
      type={modalTypesConst.VIEWING}
      withCloseConfirmation={isDirtySettleTransactionForm}
    >
      <Flex alignItems="center">
        <Box mb="5px" mr="15px">
          <ExternalLink
            text="HELP"
            link={helpLink}
            grayStyle={true}
          />
        </Box>
        <T2>Settle Transaction</T2>
      </Flex>
      <TransactionRetrievingForm
        isRetrieving={isRetrieving}
        isRetrieved={isRetrievedTransaction}
        retrieveTransaction={retrieveTransaction}
        initialValues={initialRetrievingFormValues}
        isReadonly={isReadonlyId}
        onCancel={handleCloseModal}
      />
      {isRetrievedTransaction && (
        <SettleTransactionForm
          isLoading={isLoading}
          isDisabled={isLoading || isRetrieving}
          initialValues={retrievedTransaction}
          onCancel={handleCloseModal}
          settleTransaction={settleTransaction}
        />
      )}
    </Modal>
  );
};

export default withModal(SettleTransactionModal);
