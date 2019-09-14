import React from 'react';

import { productTypesConst } from 'consts';

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
  const isLoan = productType === productTypesConst.LOAN;
  const isDebit = productType === productTypesConst.DEBIT;
  const isSavings = productType === productTypesConst.SAVINGS;
  const isPrepaid = productType === productTypesConst.PREPAID;
  const isRevolvingCredit = productType === productTypesConst.REVOLVING_CREDIT;

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
