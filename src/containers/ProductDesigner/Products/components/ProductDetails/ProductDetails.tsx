import React from 'react';

import { productTypesCodes } from 'consts';

import { SelectValues } from 'types';
import DebitDetails from './DebitDetails';
import LoanDetails from './LoanDetails';
import PrepaidDetails from './PrepaidDetails';
import RevolvingCreditDetails from './RevolvingCreditDetails';
import SavingsDetails from './SavingsDetails';

interface ProductDetailsProps {
  productType: string | number;
  isReadOnly?: boolean;
  interestDistributionEditorValue?: SelectValues;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productType,
  isReadOnly,
  interestDistributionEditorValue,
}) => {
  const isLoan = React.useMemo(
    () => productType === productTypesCodes.LOAN,
    [productType]
  );

  const isDebit = React.useMemo(
    () => productType === productTypesCodes.DEBIT,
    [productType]
  );

  const isSavings = React.useMemo(
    () => productType === productTypesCodes.SAVINGS,
    [productType]
  );

  const isPrepaid = React.useMemo(
    () => productType === productTypesCodes.PREPAID,
    [productType]
  );

  const isRevolvingCredit = React.useMemo(
    () => productType === productTypesCodes.REVOLVING_CREDIT,
    [productType]
  );

  return (
    <React.Fragment>
      {isLoan && (
        <LoanDetails
          isReadOnly={isReadOnly}
          interestDistributionEditorValue={interestDistributionEditorValue}
        />)}
      {isPrepaid && (<PrepaidDetails isReadOnly={isReadOnly} />)}
      {isDebit && (
      <DebitDetails
        isReadOnly={isReadOnly}
      />)}
      {isSavings && (<SavingsDetails isReadOnly={isReadOnly} />)}
      {isRevolvingCredit && (<RevolvingCreditDetails isReadOnly={isReadOnly} />)}
    </React.Fragment>
  );
};

export default ProductDetails;
