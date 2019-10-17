import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, InputField, SelectField } from 'components';

import { formErrorUtil } from 'utils';

interface ProductLoyaltyAndBonusProps { }

const ProductLoyaltyAndBonus: React.FC<ProductLoyaltyAndBonusProps> = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="230px" p="10px">
          <Field
            id="participatingSchemes"
            name="participatingSchemes"
            component={SelectField}
            label="Participating Schemes"
            placeholder="Select Participating Schemes"
            isMulti={true}
            options={[
              {value: '1', label: 'Black and White'},
              {value: '2', label: 'Bink'},
              {value: '3', label: 'Test scheme 1'},
              {value: '4', label: 'Test scheme 2'},
            ]}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="230px" p="10px">
          <Field
            id="discountOrBond"
            name="discountOrBond"
            component={SelectField}
            label="'Discount' or 'Bond'"
            placeholder="Select 'Discount' or 'Bond'"
            options={[
              {value: '1', label: 'Discount'},
              {value: '2', label: 'Bond'},
            ]}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Delimiter />
        <Box width="160px" p="10px">
          <Field
            id="discount"
            name="discount"
            component={InputField}
            label="Discount %"
            placeholder="Enter Discount %"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="190px" p="10px">
          <Field
            id="discountThreshold"
            name="discountThreshold"
            component={InputField}
            label="Discount Threshold"
            placeholder="Enter Discount Threshold"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductLoyaltyAndBonus;
