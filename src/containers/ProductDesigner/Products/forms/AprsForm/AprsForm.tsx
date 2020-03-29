import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';

import { formNamesConst } from 'consts';

import { AprsTable, ProductAprs } from 'containers/ProductDesigner/Products/components';

import { HandleAddProductApr } from 'store';

interface IAprsForm {
  addProductApr: HandleAddProductApr;
  isLoading: boolean;
  onCancel: () => void;
  isReadOnly: boolean;
}

type TAprsForm = IAprsForm & InjectedFormProps<{}, IAprsForm>;

const AprsForm: React.FC<TAprsForm> = ({
  onCancel,
  addProductApr,
  handleSubmit,
  pristine,
  dirty,
  isLoading,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addProductApr),
    [handleSubmit, addProductApr]
  );

  return (
    <React.Fragment>
      {!isReadOnly && (
        <form onSubmit={handleSubmitForm}>
          <Flex alignItems="flex-end" flexWrap="wrap">
            <ProductAprs
              isLoading={isLoading}
              isDisabled={isLoading}
              pristine={pristine}
            />
          </Flex>
        </form>
      )}
      <Box pt="10px">
        <AprsTable isReadOnly={isReadOnly} />
      </Box>
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

export default reduxForm<{}, IAprsForm>({
  form: formNamesConst.PRODUCT_APRS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(AprsForm);
