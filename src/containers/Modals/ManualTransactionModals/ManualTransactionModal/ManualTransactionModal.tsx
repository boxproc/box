import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { ExternalLink, Modal, T2, withSpinner } from 'components';
import { ManualTransactionForm } from 'containers/Modals/ManualTransactionModals/forms';

import { withModal, WithModalProps } from 'HOCs';

import { linksConst, modalNamesConst, modalTypesConst, uiItemConsts } from 'consts';

import {
  HandleMakeLedgerLimitAdjustment,
  HandleMakeLedgerTransaction,
  PayloadLedgerManualTransactionModal
} from 'store/domains';

import { SelectValues } from 'types';

interface ManualTransactionModalProps extends WithModalProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
  makeLedgerLimitAdjustment: HandleMakeLedgerLimitAdjustment;
  modalPayload: PayloadLedgerManualTransactionModal;
  currenciesOptions: Array<SelectValues>;
  isLimitAdjustment: boolean;
}
const modalName = modalNamesConst.LEDGER_MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<ManualTransactionModalProps> = ({
  makeLedgerTransaction,
  makeLedgerLimitAdjustment,
  modalPayload,
  isLimitAdjustment,
  closeModal,
  currenciesOptions,
}) => {
  const modalTitle = React.useMemo(
    () => isLimitAdjustment ? 'Limit Adjustment' : 'Manual Transaction',
    [isLimitAdjustment]
  );

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

  const helpLink = isLimitAdjustment
    ? `${linksConst.BPS_BASE}${uiItemConsts.LEDGER_LIMIT_ADJUSTMENT}`
    : `${linksConst.BPS_BASE}${uiItemConsts.LEDGER_MANUAL_TRANSACTIONS}`;

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
            link={helpLink}
            grayStyle={true}
          />
        </Box>
        <T2>{modalTitle}</T2>
      </Flex>
      <ManualTransactionForm
        makeLedgerTransaction={makeLedgerTransaction}
        makeLedgerLimitAdjustment={makeLedgerLimitAdjustment}
        initialValues={initialFormValues}
        onCancel={handleOnCancel}
        isLimitAdjustment={isLimitAdjustment}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(ManualTransactionModal));
