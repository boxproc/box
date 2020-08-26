import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { CheckboxField, SelectField } from 'components';

import { productTypesOptions } from 'consts';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

const ProductWrapper = styled(Box)`
  min-width: 300px;
  max-width: 500px;
`;

interface IProductsFilter {
  institutionsOptions: Array<ISelectValue>;
  isDisabled: boolean;
}

const ProductsFilter: React.FC<IProductsFilter> = ({
  institutionsOptions,
  isDisabled,
}) => {
  return (
    <React.Fragment>
      <Box width="300px" p="8px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isClearable={false}
          isDisabled={isDisabled}
          isRequired={true}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <ProductWrapper p="8px">
        <Field
          id="productType"
          name="productType"
          component={SelectField}
          label="Product Type"
          placeholder="Select Product Type"
          options={productTypesOptions}
          isMulti={true}
          isDisabled={isDisabled}
        />
      </ProductWrapper>
      <Box p="8px" pb="10px">
        <Field
          id="activeStatusFlag"
          name="activeStatusFlag"
          component={CheckboxField}
          label="Only &quot;Active&quot;"
          disabled={isDisabled}
        />
      </Box>
    </React.Fragment>
  );
};

export default ProductsFilter;
