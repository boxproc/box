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
  HandleIllustrateLoanProduct,
  IllustrationProductLoan,
  ResetIllustrationLoan
} from 'store/domains';
import IllustrationLoanTable from '../../components/IllustrationLoanTable/IllustrationLoanTable';
import ProductIllustrationLoan from '../../components/ProductIllustrationLoan';

interface IllustrationProductFormProps extends ExternalSpinnerProps {
  productIlustration: Array<IllustrationProductLoan>;
  illustrateLoanProduct: HandleIllustrateLoanProduct;
  isLoading: boolean;
  resetIllustrationLoan: ResetIllustrationLoan;
  onCancel?: () => void;
}

type GeneralProductFormAllProps = IllustrationProductFormProps &
  InjectedFormProps<{}, IllustrationProductFormProps>;

const GeneralProductForm: React.FC<GeneralProductFormAllProps> = ({
  handleSubmit,
  illustrateLoanProduct,
  resetIllustrationLoan,
  productIlustration,
  onCancel,
  dirty,
}) => {
  React.useEffect(
      () => {
        return () => resetIllustrationLoan();
      },
      [resetIllustrationLoan]
  );
  const handleSubmitForm = React.useCallback(
    handleSubmit(() => illustrateLoanProduct()),
    [handleSubmit]
  );

  return (
    <React.Fragment>
      )}
      <form onSubmit={handleSubmitForm}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
        >
          <ProductIllustrationLoan
          />
        </Flex>
      </form>
      <Box mt="10px">
        <IllustrationLoanTable
          productIlustration={productIlustration}
        />
      </Box>
      <Flex
        justifyContent="flex-end"
      >
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
