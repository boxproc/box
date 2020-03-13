import React from 'react';

import { Flex } from '@rebass/grid';

import { Button } from 'components';

import { transactionTypesIds } from 'consts';

import { withLoadTransactionTypes, WithLoadTransactionTypesProps } from 'HOCs';
import RevolvingCreditIllustrationForm from './RevolvingCreditIllustrationForm';
import RevolvingCreditIllustrationTables from './RevolvingCreditIllustrationTables';

import { HandleIllustrateRevolvingCreditProduct, ResetProductIllustration } from 'store/domains';

interface IllustrationProductFormProps extends WithLoadTransactionTypesProps {
  illustrateRevolvingCreditProduct: HandleIllustrateRevolvingCreditProduct;
  resetProductIllustration: ResetProductIllustration;
  initialFormValues: object;
  productId: number;
  dirty: boolean;
  onCancel?: () => void;
  isLoading: boolean;
}

const RevolvingCreditIllustration: React.FC<IllustrationProductFormProps> = ({
  illustrateRevolvingCreditProduct,
  initialFormValues,
  transactionTypesOptions,
  isTransactionTypesLoading,
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
      .find(type => type.value === transactionTypesIds.PURCHASE_CARD_PAYMENT),
    [transactionTypesOptions]
  );

  const initialCahWithdrawalType = React.useMemo(
    () => transactionTypesOptions
      .find(type => type.value === transactionTypesIds.CASH_WITHDRAWAL_ATM),
    [transactionTypesOptions]
  );

  const initialBalanceTransferType = React.useMemo(
    () => transactionTypesOptions
      .find(type => type.value === transactionTypesIds.BALANCE_TRANSFER_DEBIT),
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
        isTransactionTypesLoading={isTransactionTypesLoading}
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
