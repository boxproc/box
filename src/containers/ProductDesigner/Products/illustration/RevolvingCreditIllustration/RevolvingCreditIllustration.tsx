import React from 'react';

import { Flex } from '@rebass/grid';

import { Button } from 'components';
import { transactionTypesIdsConst } from 'consts';

import { IWithLoadTransactionTypes, withLoadTransactionTypes } from 'HOCs';
import RevolvingCreditIllustrationForm from './RevolvingCreditIllustrationForm';
import RevolvingCreditIllustrationTables from './RevolvingCreditIllustrationTables';

import { THandleIllustrateRevCredit, TResetProductIllustration } from 'store';

interface IRevolvingCreditIllustration extends IWithLoadTransactionTypes {
  dirty: boolean;
  illustrateRevolvingCreditProduct: THandleIllustrateRevCredit;
  initialFormValues: object;
  isLoading: boolean;
  onCancel?: () => void;
  productId: number;
  resetProductIllustration: TResetProductIllustration;
}

const RevolvingCreditIllustration: React.FC<IRevolvingCreditIllustration> = ({
  illustrateRevolvingCreditProduct,
  initialFormValues,
  transactionTypesOptions,
  isTransTypesLoading,
  resetProductIllustration,
  productId,
  dirty,
  isLoading,
  onCancel,
}) => {
  React.useEffect(
    () => {
      return () => resetProductIllustration();
    },
    [resetProductIllustration]
  );

  const initialPurchaseType = React.useMemo(
    () => transactionTypesOptions
      .find(type => type.value === transactionTypesIdsConst.PURCHASE_CARD_PAYMENT),
    [transactionTypesOptions]
  );

  const initialCahWithdrawalType = React.useMemo(
    () => transactionTypesOptions
      .find(type => type.value === transactionTypesIdsConst.CASH_WITHDRAWAL_ATM),
    [transactionTypesOptions]
  );

  const initialBalanceTransferType = React.useMemo(
    () => transactionTypesOptions
      .find(type => type.value === transactionTypesIdsConst.BALANCE_TRANSFER_DEBIT),
    [transactionTypesOptions]
  );

  const initialValues = React.useMemo(
    () => {
      return {
        ...initialFormValues,
        transactionType1: initialPurchaseType,
        transactionType2: initialCahWithdrawalType,
        transactionType3: initialBalanceTransferType,
        productId,
      };
    },
    [
      initialPurchaseType,
      initialCahWithdrawalType,
      initialBalanceTransferType,
      initialFormValues,
      productId,
    ]
  );

  return (
    <React.Fragment>
      <RevolvingCreditIllustrationForm
        initialValues={initialValues}
        illustrateRevolvingCreditProduct={illustrateRevolvingCreditProduct}
        transactionTypesOptions={transactionTypesOptions}
        isTransTypesLoading={isTransTypesLoading}
        isLoading={isLoading}
        isDisabled={isLoading}
      />
      <RevolvingCreditIllustrationTables isLoading={isLoading} />
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          withCancelConfirmation={dirty}
        />
      </Flex>
    </React.Fragment>
  );
};

export default withLoadTransactionTypes(RevolvingCreditIllustration);
