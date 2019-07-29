import React from 'react';

import { productTypes } from 'consts';

import DebitDetails from './DebitDetails';
import LoanDetails from './LoanDetails';
import PrepaidDetails from './PrepaidDetails';
import RevolvingCreditDetails from './RevolvingCreditDetails';
import SavingsDetails from './SavingsDetails';

import { SelectValues } from 'types';

interface ProductDetailsProps {
  productTypeValue: SelectValues;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productTypeValue,
}) => {
  const isLoan = productTypeValue && productTypeValue.value === productTypes.LOAN;
  const isDebit = productTypeValue && productTypeValue.value === productTypes.DEBIT;
  const isSavings = productTypeValue && productTypeValue.value === productTypes.SAVINGS;
  const isPrepaid = productTypeValue && productTypeValue.value === productTypes.PREPAID;
  const isRevolvingCredit =
    productTypeValue && productTypeValue.value === productTypes.REVOLVING_CREDIT;

  return (
    <React.Fragment>
      {isLoan && (
        <LoanDetails />
      )}
      {isPrepaid && (
        <PrepaidDetails />
      )}
      {isDebit && (
        <DebitDetails />
      )}
      {isSavings && (
        <SavingsDetails />
      )}
      {isRevolvingCredit && (
        <RevolvingCreditDetails />
      )}
    </React.Fragment>
  );
};

export default ProductDetails;
