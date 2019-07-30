import React from 'react';

import { productTypes } from 'consts';

import DebitDetails from './DebitDetails';
import LoanDetails from './LoanDetails';
import PrepaidDetails from './PrepaidDetails';
import RevolvingCreditDetails from './RevolvingCreditDetails';
import SavingsDetails from './SavingsDetails';

interface ProductDetailsProps {
  productType: string | number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productType,
}) => {
  const isLoan = productType === productTypes.LOAN;
  const isDebit = productType === productTypes.DEBIT;
  const isSavings = productType === productTypes.SAVINGS;
  const isPrepaid = productType === productTypes.PREPAID;
  const isRevolvingCredit = productType === productTypes.REVOLVING_CREDIT;

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
