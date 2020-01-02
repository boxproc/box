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
import styled from 'styled-components';

const TableWrapper = styled(Box)`
  max-width: 100%;
`;
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
  productIllustration,
  getProductDetails,
  onCancel,
  dirty,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getProductDetails();
    },
    [getProductDetails]
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
      <Flex>
      <TableWrapper mt="10px">
        <IllustrationLoanTable productIllustration={productIllustration} />
      </TableWrapper>
      </Flex>
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
