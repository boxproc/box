import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components/Form';
import OkCancelButtons from 'components/OkCancelButtons';

import { formNames } from 'consts';

import { HandleResetFormByName } from 'store/domains';

interface ProductsFilterProps {
  filterProducts?: any;
  resetFormByName: HandleResetFormByName;
}

type ProductsFilterAllProps = ProductsFilterProps &
  InjectedFormProps<{}, ProductsFilterProps>;

const ProductsFilter: React.FC<ProductsFilterAllProps> = ({
  handleSubmit,
  filterProducts,
  resetFormByName,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterProducts(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end">
        <Box width="200px">
          <Field
            id="id"
            name="name"
            placeholder="Enter"
            component={InputField}
            label="Filter Parameter"
          />
        </Box>
      </Flex>
      <OkCancelButtons
        okText="Search"
        cancelText="Reset"
        onCancel={() => resetFormByName(formNames.PRODUCTS_FILTER)}
      />
    </form >
  );
};

export default reduxForm<{}, ProductsFilterProps>({
  form: formNames.PRODUCTS_FILTER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductsFilter);
