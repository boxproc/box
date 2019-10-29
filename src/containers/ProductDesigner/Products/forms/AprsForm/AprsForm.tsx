import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import { ProductAprs } from 'containers/ProductDesigner/Products/components';

import { HandleAddProductApr } from 'store/domains';

interface AprsFormProps {
  addProductApr: HandleAddProductApr;
  isLoading: boolean;
}

type AprsFormAllProps = AprsFormProps & InjectedFormProps<{}, AprsFormProps>;

const AprsForm: React.FC<AprsFormAllProps> = ({
  addProductApr,
  handleSubmit,
  pristine,
  dirty,
  isLoading,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addProductApr),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box pb="10px">
        <Flex alignItems="flex-end">
          <ProductAprs isDisabled={isLoading}/>
          <Box width="90px" pb="20px">
            <Button
              text={isLoading ? 'adding...' : 'add APR'}
              iconName={iconNamesConst.PLUS}
              disabled={pristine || isLoading}
            />
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, AprsFormProps>({
  form: formNamesConst.PRODUCT_APRS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AprsForm);
