import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { CheckboxField, SelectField } from 'components';

import { productTypesOptions } from 'consts';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

const ProductWrapper = styled(Box)`
  min-width: 235px
  max-width: 500px;
`;

interface ProductsFilterProps {
  institutionsOptions: Array<SelectValues>;
}

const ProductsFilter: React.FC<ProductsFilterProps> = ({
  institutionsOptions,
}) => {
  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isClearable={false}
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
          isMulti={true}
        />
      </ProductWrapper>
      <Box width={[1]} p="10px">
        <Field
          id="activeStatusFlag"
          name="activeStatusFlag"
          component={CheckboxField}
          label="Only &quot;Active&quot;"
        />
      </Box>
    </React.Fragment>
  );
};

export default ProductsFilter;
