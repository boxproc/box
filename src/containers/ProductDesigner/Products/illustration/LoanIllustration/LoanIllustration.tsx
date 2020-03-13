import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import IllustrationLoanTable from './IllustrationLoanTable';
import LoanIllustrationForm from './LoanIllustrationForm';

import {
  HandleConvertTransactionToLoan,
  HandleGetProductDetails,
  HandleIllustrateLoanProduct,
  IllustrationProductLoan,
  LoanProductItem,
  ResetProductIllustration,
} from 'store/domains';

import { SelectValue } from 'types';

interface IllustrationProductProps {
  productIllustrationData: Array<IllustrationProductLoan>;
  loanProductsOptions: Array<SelectValue>;
  illustrateLoanProduct: HandleIllustrateLoanProduct;
  convertTransactionToLoan: HandleConvertTransactionToLoan;
  getProductDetails: HandleGetProductDetails;
  resetProductIllustration: ResetProductIllustration;
  loanDetails: Partial<LoanProductItem>;
  initialFormValues: object;
  isLoading: boolean;
  isIllustrationLoading: boolean;
  isConversionLoading: boolean;
  withConvertToLoan?: boolean;
  withLoanSelection?: boolean;
  selectedLoanProduct?: SelectValue;
  productId?: number;
  isReadOnly: boolean;
  onCancel?: () => void;
}

const LoanIllustration: React.FC<IllustrationProductProps> = ({
  illustrateLoanProduct,
  convertTransactionToLoan,
  productIllustrationData,
  loanProductsOptions,
  getProductDetails,
  onCancel,
  isLoading,
  isIllustrationLoading,
  isConversionLoading,
  resetProductIllustration,
  loanDetails,
  withConvertToLoan,
  withLoanSelection,
  initialFormValues,
  selectedLoanProduct,
  productId,
  isReadOnly,
}) => {
  const loanProductId = React.useMemo(
    () => selectedLoanProduct && Number(selectedLoanProduct.value),
    [selectedLoanProduct]
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
