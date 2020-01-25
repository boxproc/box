import React from 'react';

import { Flex } from '@rebass/grid';

import { Button } from 'components';

import { transactionTypesIds } from 'consts';

import { illustrationInitValuesRevCredit } from 'containers/ProductDesigner/Products/consts';
import { withLoadTransactionTypes, WithLoadTransactionTypesProps } from 'HOCs';
import RevolvingCreditIllustrationForm from './RevolvingCreditIllustrationForm';
import RevolvingCreditIllustrationTables from './RevolvingCreditIllustrationTables';

import { HandleIllustrateRevolvingCreditProduct } from 'store/domains';

interface IllustrationProductFormProps extends WithLoadTransactionTypesProps {
  illustrateRevolvingCreditProduct: HandleIllustrateRevolvingCreditProduct;
  dirty: boolean;
  onCancel?: () => void;
  isLoading: boolean;
}

const RevolvingCreditIllustration: React.FC<IllustrationProductFormProps> = ({
  onCancel,
  illustrateRevolvingCreditProduct,
  transactionTypesOptions,
  isTransactionTypesLoading,
  dirty,
  isLoading,
}) => {
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
        ...illustrationInitValuesRevCredit,
        transactionType1: initialPurchaseType,
        transactionType2: initialCahWithdrawalType,
        transactionType3: initialBalanceTransferType,
      };
    },
    [initialPurchaseType, initialCahWithdrawalType, initialBalanceTransferType]
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
      <RevolvingCreditIllustrationTables isLoading={isLoading}/>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          rightPosition={true}
          withCancelConfirmation={dirty}
        />
      </Flex>
    </React.Fragment>
  );
};

export default withLoadTransactionTypes(RevolvingCreditIllustration);
