import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { CheckboxField, SelectField } from 'components/Form';

import { formNames, productTypesOptions } from 'consts';

import { HandleFilterProducts } from 'store/domains';

import { SelectValues } from 'types';

interface ProductsFilterProps {
  institutionsOptions: Array<SelectValues>;
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
          alignItems="flex-start"
          flexWrap="wrap"
        >
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
            />
          </Box>
          <Box width={[1]} p="10px">
            <Field
              id="activeStatusFlag"
              name="activeStatusFlag"
              component={CheckboxField}
              label="Only &quot;Active&quot;"
              disabled={false}
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Show"
        cancelText="Reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, ProductsFilterProps>({
  form: formNames.PRODUCTS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(ProductsFilter);
