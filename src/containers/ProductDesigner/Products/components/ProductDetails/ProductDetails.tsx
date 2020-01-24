import React from 'react';

import { productTypesCodes } from 'consts';

import { SelectValue } from 'types';
import DebitDetails from './DebitDetails';
import LoanDetails from './LoanDetails';
import PrepaidDetails from './PrepaidDetails';
import RevolvingCreditDetails from './RevolvingCreditDetails';
import SavingsDetails from './SavingsDetails';

interface ProductDetailsProps {
  productType: string | number;
  isReadOnly?: boolean;
  isUpdating?: boolean;
  interestDistributionValue?: SelectValue;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productType,
  isReadOnly,
  isUpdating,
  interestDistributionValue,
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

  const readOnly = React.useMemo(
    () => isReadOnly || isUpdating,
    [isUpdating, isReadOnly]
  );

  return (
    <React.Fragment>
      {isLoan && (
        <LoanDetails
          isReadOnly={readOnly}
          interestDistributionValue={interestDistributionValue}
        />
      )}
      {isPrepaid && (
        <PrepaidDetails isReadOnly={readOnly} />
      )}
      {isDebit && (
        <DebitDetails isReadOnly={readOnly} />
      )}
      {isSavings && (
        <SavingsDetails isReadOnly={readOnly} />
      )}
      {isRevolvingCredit && (
        <RevolvingCreditDetails isReadOnly={readOnly} />
      )}
    </React.Fragment>
  );
};

export default ProductDetails;
