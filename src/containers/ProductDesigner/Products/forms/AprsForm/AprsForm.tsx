import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { formNamesConst } from 'consts';

import { AprsTable, ProductAprs } from 'containers/ProductDesigner/Products/components';

import { HandleAddProductApr } from 'store/domains';

interface AprsFormProps {
  addProductApr: HandleAddProductApr;
  isLoading: boolean;
  onCancel: () => void;
}

type AprsFormAllProps = AprsFormProps & InjectedFormProps<{}, AprsFormProps>;

const AprsForm: React.FC<AprsFormAllProps> = ({
  onCancel,
  addProductApr,
  handleSubmit,
  pristine,
  dirty,
  isLoading,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addProductApr),
    [handleSubmit, addProductApr]
  );

  return (
    <React.Fragment>
      <Box pb="10px">
        <form onSubmit={handleSubmitForm}>
          <Flex alignItems="flex-end" flexWrap="wrap">
            <ProductAprs
              isDisabled={isLoading}
              pristine={pristine}
            />
          </Flex>
        </form>
      </Box>
      <AprsTable />
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
          withConfirmation={dirty}
        />
      </Flex>
    </React.Fragment>
  );
};

export default reduxForm<{}, AprsFormProps>({
  form: formNamesConst.PRODUCT_APRS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AprsForm);
