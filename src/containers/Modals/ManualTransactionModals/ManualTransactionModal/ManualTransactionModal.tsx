import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { ExternalLink, Modal, T2, withSpinner } from 'components';
import { ManualTransactionForm } from 'containers/Modals/ManualTransactionModals/forms';

import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { HandleMakeLedgerTransaction, PayloadLedgerManualTransactionModal } from 'store/domains';

import { SelectValues } from 'types';

import { stringsUtil } from 'utils';

interface ManualTransactionModalProps extends RouteComponentProps, WithModalProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
  modalPayload: PayloadLedgerManualTransactionModal;
  currenciesOptions: Array<SelectValues>;
}
const modalName = modalNamesConst.LEDGER_MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<ManualTransactionModalProps> = ({
  location,
  makeLedgerTransaction,
  modalPayload,
  closeModal,
  currenciesOptions,
}) => {
  const initialFormValues = React.useMemo(
    () => {
      if (!modalPayload) {
        return null;
      }

      const { currencyCode, accountId } = modalPayload;
      const currency = currenciesOptions.find(item => item.value === currencyCode);

      return {
        currencyCode: currency,
        accountId,
      };
    },
    [currenciesOptions, modalPayload]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      maxContainerWidth={550}
    >
      <Flex alignItems="center">
        <Box mb="15px" mr="15px">
          <ExternalLink
            text="HELP"
            link={stringsUtil.getCurrentBPSUrl(location.pathname)}
            grayStyle={true}
          />
        </Box>
        <T2>Manual Transaction</T2>
      </Flex>
      <ManualTransactionForm
        makeLedgerTransaction={makeLedgerTransaction}
        initialValues={initialFormValues}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

const transactionWithRouter = withRouter(ManualTransactionModal);
const transactionWithRouterAndModal = withModal(transactionWithRouter);

export default withSpinner({
  isFixed: true,
})(transactionWithRouterAndModal);
