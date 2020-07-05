import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import IllustrationLoanTable from './IllustrationLoanTable';
import LoanIllustrationForm from './LoanIllustrationForm';

import {
  ILoanIllustration,
  ILoanProduct,
  THandleConvertTrToLoan,
  THandleGetInstProducts,
  THandleGetProductDetails,
  THandleIllustrateLoan,
  TResetProductIllustration,
} from 'store';
import { ISelectValue } from 'types';

interface ILoanIllust {
  convertTransactionToLoan: THandleConvertTrToLoan;
  currentInstitution: number;
  getInstProducts: THandleGetInstProducts;
  getProductDetails: THandleGetProductDetails;
  illustrateLoanProduct: THandleIllustrateLoan;
  initialFormValues: object;
  isConversionLoading: boolean;
  isIllustrationLoading: boolean;
  isLoading: boolean;
  isReadOnly?: boolean;
  loanDetails: Partial<ILoanProduct>;
  loanProductsOptions: Array<ISelectValue>;
  onCancel?: () => void;
  productId?: number;
  productIllustrationData: ImmutableArray<ILoanIllustration>;
  resetProductIllustration: TResetProductIllustration;
  selectedLoanProduct?: ISelectValue;
  withConvertToLoan?: boolean;
  withLoanSelection?: boolean;
}

const LoanIllustration: React.FC<ILoanIllust> = ({
  convertTransactionToLoan,
  currentInstitution,
  getInstProducts,
  getProductDetails,
  illustrateLoanProduct,
  initialFormValues,
  isConversionLoading,
  isIllustrationLoading,
  isLoading,
  isReadOnly,
  loanDetails,
  loanProductsOptions,
  onCancel,
  productId,
  productIllustrationData,
  resetProductIllustration,
  selectedLoanProduct,
  withConvertToLoan,
  withLoanSelection,
}) => {
  const loanProductId = React.useMemo(
    () => selectedLoanProduct && Number(selectedLoanProduct.value),
    [selectedLoanProduct]
  );

  React.useEffect(
    () => {
      if (currentInstitution) {
        getInstProducts(currentInstitution);
      }
    },
    [currentInstitution, getInstProducts]
  );

  React.useEffect(
    () => {
      withLoanSelection
        ? loanProductId && getProductDetails(loanProductId)
        : productId && getProductDetails(productId);
    },
    [getProductDetails, loanProductId, productId, withLoanSelection]
  );

  React.useEffect(
    () => {
      return () => resetProductIllustration();
    },
    [resetProductIllustration]
  );

  const initialValues = React.useMemo(
    () => {
      const baseValues = { ...initialFormValues, ...loanDetails };

      return withLoanSelection
        ? { loanProduct: selectedLoanProduct, ...baseValues }
        : baseValues;
    },
    [loanDetails, initialFormValues, selectedLoanProduct, withLoanSelection]
  );

  const isDisabledForm = React.useMemo(
    () => isLoading || isIllustrationLoading || isConversionLoading,
    [isLoading, isIllustrationLoading, isConversionLoading]
  );

  return (
    <React.Fragment>
      <LoanIllustrationForm
        isDisabled={isDisabledForm}
        isIllustrationLoading={isIllustrationLoading}
        isConversionLoading={isConversionLoading}
        illustrateLoanProduct={illustrateLoanProduct}
        convertTransactionToLoan={convertTransactionToLoan}
        loanProductsOptions={loanProductsOptions}
        withLoanSelection={withLoanSelection}
        withConvertToLoan={withConvertToLoan}
        selectedLoanProduct={selectedLoanProduct}
        initialValues={initialValues}
        isReadOnly={isReadOnly}
      />
      <Box mt="15px">
        <IllustrationLoanTable
          data={productIllustrationData}
          isLoading={isIllustrationLoading}
        />
      </Box>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
        />
      </Flex>
    </React.Fragment>
  );
};

export default LoanIllustration;
