import React from 'react';

import { productTypesCodes } from 'consts';

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
  const isLoan = productType === productTypesCodes.LOAN;
  const isDebit = productType === productTypesCodes.DEBIT;
  const isSavings = productType === productTypesCodes.SAVINGS;
  const isPrepaid = productType === productTypesCodes.PREPAID;
  const isRevolvingCredit = productType === productTypesCodes.REVOLVING_CREDIT;

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
