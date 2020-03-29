import React from 'react';

import { productTypesConst } from 'consts';

import { ISelectValue } from 'types';
import DebitDetails from './DebitDetails';
import LoanDetails from './LoanDetails';
import PrepaidDetails from './PrepaidDetails';
import RevolvingCreditDetails from './RevolvingCreditDetails';
import SavingsDetails from './SavingsDetails';

interface IProductDetails {
  productType: string | number;
  isReadOnly?: boolean;
  isUpdating?: boolean;
  interestDistributionValue?: ISelectValue;
}

const ProductDetails: React.FC<IProductDetails> = ({
  productType,
  isReadOnly,
  isUpdating,
  interestDistributionValue,
}) => {
  const isLoan = React.useMemo(
    () => productType === productTypesConst.LOAN,
    [productType]
  );

  const isDebit = React.useMemo(
    () => productType === productTypesConst.DEBIT,
    [productType]
  );

  const isSavings = React.useMemo(
    () => productType === productTypesConst.SAVINGS,
    [productType]
  );

  const isPrepaid = React.useMemo(
    () => productType === productTypesConst.PREPAID,
    [productType]
  );

  const isRevolvingCredit = React.useMemo(
    () => productType === productTypesConst.REVOLVING_CREDIT,
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
