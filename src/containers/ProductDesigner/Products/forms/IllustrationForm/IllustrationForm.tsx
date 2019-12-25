import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  Button,
  ExternalSpinnerProps,
  withSpinner,
} from 'components';

import { formNamesConst } from 'consts';

import {
  IllustrationLoanTable,
  ProductIllustrationLoan,
} from 'containers/ProductDesigner/Products/components';
import {
  HandleGetProductDetails,
  HandleIllustrateLoanProduct,
  IllustrationProductLoan,
  ResetIllustrationLoan
} from 'store/domains';

interface IllustrationProductFormProps extends ExternalSpinnerProps {
  productIllustration: Array<IllustrationProductLoan>;
  illustrateLoanProduct: HandleIllustrateLoanProduct;
  getProductDetails: HandleGetProductDetails;
  isLoading: boolean;
  resetIllustrationLoan: ResetIllustrationLoan;
  onCancel?: () => void;
  isReadOnly: boolean;
}

type GeneralProductFormAllProps = IllustrationProductFormProps &
  InjectedFormProps<{}, IllustrationProductFormProps>;

const GeneralProductForm: React.FC<GeneralProductFormAllProps> = ({
  handleSubmit,
  illustrateLoanProduct,
  resetIllustrationLoan,
  productIllustration,
  getProductDetails,
  onCancel,
  dirty,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getProductDetails();
      return () => resetIllustrationLoan();
    },
    [resetIllustrationLoan, getProductDetails]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(() => illustrateLoanProduct()),
    [handleSubmit]
  );

  return (
    <React.Fragment>
      {!isReadOnly && (
        <form onSubmit={handleSubmitForm}>
          <Flex
            alignItems="center"
            justifyContent="space-between"
          >
            <ProductIllustrationLoan />
          </Flex>
        </form>
      )}
      <Box mt="10px">
        <IllustrationLoanTable productIllustration={productIllustration} />
      </Box>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          rightPosition={true}
          withCancelConfirmation={dirty}
        />
      </Flex>
    </React.Fragment>
  );
};

export default reduxForm<{}, IllustrationProductFormProps>({
  form: formNamesConst.PRODUCT_ILLUSTRATION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(GeneralProductForm));
