import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { CheckboxField, SelectField } from 'components/Form';

import { formNames, productTypesOptions } from 'consts';

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
      <Box width={[ 1, 1, 1, 700]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[ 1, 1 / 2]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              isSearchable={true}
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={false}
              isMulti={true}
            />
          </Box>
          <Box width={[ 1, 1 / 2]} p="10px">
            <Field
              id="productType"
              name="productType"
              isSearchable={true}
              component={SelectField}
              label="Product Type"
              placeholder="Select Product Type"
              options={productTypesOptions}
              isDisabled={false}
              isMulti={true}
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="activeStatusFlag"
              name="activeStatusFlag"
              component={CheckboxField}
              label="Show only &quot;Active&quot;"
              disabled={false}
            />
          </Box>
        </Flex>
      </Box>
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
