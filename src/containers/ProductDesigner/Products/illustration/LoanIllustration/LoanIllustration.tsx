import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import IllustrationLoanTable from './IllustrationLoanTable';
import LoanIllustrationForm from './LoanIllustrationForm';

import {
  HandleGetProductDetails,
  HandleIllustrateLoanProduct,
  IllustrationProductLoan,
  LoanProductItem,
  ResetProductIllustration,
} from 'store/domains';
import { illustrationInitValuesLoan } from '../../consts';

interface IllustrationProductProps {
  productIllustrationData: Array<IllustrationProductLoan>;
  illustrateLoanProduct: HandleIllustrateLoanProduct;
  getProductDetails: HandleGetProductDetails;
  resetProductIllustration: ResetProductIllustration;
  loanDetails: Partial<LoanProductItem>;
  onCancel?: () => void;
  isLoading: boolean;
}

const LoanIllustration: React.FC<IllustrationProductProps> = ({
  illustrateLoanProduct,
  productIllustrationData,
  getProductDetails,
  onCancel,
  isLoading,
  resetProductIllustration,
  loanDetails,
}) => {
  React.useEffect(
    () => {
      getProductDetails();
    },
    [getProductDetails]
  );

  React.useEffect(
    () => {
      return () => resetProductIllustration();
    },
    [resetProductIllustration]
  );

  const initialValues = React.useMemo(
    () => {
      return {
        ...illustrationInitValuesLoan,
        ...loanDetails,
      };
    },
    [loanDetails]
  );

  return (
    <React.Fragment>
      <LoanIllustrationForm
        isLoading={isLoading}
        illustrateLoanProduct={illustrateLoanProduct}
        initialValues={initialValues}
      />
      <Box mt="15px">
        <IllustrationLoanTable
          data={productIllustrationData}
          isLoading={isLoading}
        />
      </Box>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          rightPosition={true}
          disabled={isLoading}
        />
      </Flex>
    </React.Fragment>
  );
};

export default LoanIllustration;
