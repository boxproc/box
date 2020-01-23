import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button } from 'components';

import { formNamesConst } from 'consts';

import {
  IllustrationLoanTable,
  ProductIllustrationLoan,
} from 'containers/ProductDesigner/Products/components';
import {
  HandleGetProductDetails,
  HandleIllustrateLoanProduct,
  IllustrationProductLoan,
  ResetProductIllustration
} from 'store/domains';

interface IllustrationProductFormProps {
  productIllustration: Array<IllustrationProductLoan>;
  illustrateLoanProduct: HandleIllustrateLoanProduct;
  getProductDetails: HandleGetProductDetails;
  resetProductIllustration: ResetProductIllustration;
  onCancel?: () => void;
  isReadOnly: boolean;
  isLoading: boolean;
}

type GeneralProductFormAllProps = IllustrationProductFormProps &
  InjectedFormProps<{}, IllustrationProductFormProps>;

const GeneralProductForm: React.FC<GeneralProductFormAllProps> = ({
  handleSubmit,
  illustrateLoanProduct,
  productIllustration,
  getProductDetails,
  onCancel,
  dirty,
  isReadOnly,
  isLoading,
  resetProductIllustration,
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
            <ProductIllustrationLoan isLoading={isLoading} />
          </Flex>
        </form>
      )}
      <Box mt="15px">
        <IllustrationLoanTable
          productIllustration={productIllustration}
          isLoading={isLoading}
        />
      </Box>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          rightPosition={true}
          withCancelConfirmation={dirty}
          disabled={isLoading}
        />
      </Flex>
    </React.Fragment>
  );
};

export default reduxForm<{}, IllustrationProductFormProps>({
  form: formNamesConst.PRODUCT_ILLUSTRATION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(GeneralProductForm);
