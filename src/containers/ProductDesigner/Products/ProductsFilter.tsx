import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import OkCancelButtons from 'components/Buttons/OkCancelButtons';
import { CheckboxField, SelectField } from 'components/Form';

import { formNames } from 'consts';

import { HandleFilterProducts } from 'store/domains';

import { ParsedSelectValues } from 'types';

interface ProductsFilterProps {
  institutionsOptions: Array<ParsedSelectValues>;
  filterProducts: HandleFilterProducts;
 }

type ProductsFilterAllProps = ProductsFilterProps &
  InjectedFormProps<{}, ProductsFilterProps>;

const ProductsFilter: React.FC<ProductsFilterAllProps> = ({
  handleSubmit,
  institutionsOptions,
  filterProducts,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterProducts(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end">
        <Box width="320px" mr="20px">
          <Field
            id="institutionId"
            name="institutionId"
            isSearchable={true}
            component={SelectField}
            label="Institution ID"
            placeholder="Select Institution ID"
            options={institutionsOptions}
            isDisabled={false}
            isMulti={true}
          />
        </Box>
        <Box>
          <Field
            id="activeStatusFlag"
            name="activeStatusFlag"
            component={CheckboxField}
            label="Show active"
            disabled={false}
          />
        </Box>
      </Flex>
      <OkCancelButtons
        okText="Run it"
        cancelText="Reset"
        cancelIconName="reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, ProductsFilterProps>({
  form: formNames.PRODUCTS_FILTER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductsFilter);
