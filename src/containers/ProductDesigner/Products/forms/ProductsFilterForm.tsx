import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, CheckboxField, SelectField } from 'components';

import { formNamesConst, productTypesOptions } from 'consts';

import { HandleFilterProducts } from 'store/domains';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

const ProductWrapper = styled(Box)`
  min-width: 234px
  max-width: 460px;
`;

interface ProductsFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  filterProducts: HandleFilterProducts;
}

type ProductsFilterFormAllProps = ProductsFilterFormProps &
  InjectedFormProps<{}, ProductsFilterFormProps>;

const ProductsFilterForm: React.FC<ProductsFilterFormAllProps> = ({
  handleSubmit,
  institutionsOptions,
  filterProducts,
  pristine,
  invalid,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(filterProducts),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="700px" mx="-10px">
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              isDisabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <ProductWrapper p="10px">
            <Field
              id="productType"
              name="productType"
              component={SelectField}
              label="Product Type"
              placeholder="Select Product Type"
              options={productTypesOptions}
              isDisabled={false}
              isMulti={true}
            />
          </ProductWrapper>
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
        <Button
          text="Show"
          disabled={pristine || invalid}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, ProductsFilterFormProps>({
  form: formNamesConst.PRODUCTS_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(ProductsFilterForm);
