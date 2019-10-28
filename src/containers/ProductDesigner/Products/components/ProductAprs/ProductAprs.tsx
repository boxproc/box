import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, InputField, SelectField, TextField } from 'components';

import { aprTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface ProductAprsProps { }

const ProductAprs: React.FC<ProductAprsProps> = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="repaymentSequence"
            name="repaymentSequence"
            component={InputField}
            label="Repayment Sequence"
            placeholder="Enter Repayment Sequence"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="rate"
            name="rate"
            component={InputField}
            label="Rate"
            placeholder="Enter Rate"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 2]} p="10px">
          <Field
            id="calculationMethod"
            name="calculationMethod"
            component={SelectField}
            label="Calculation Method"
            placeholder="Select Calculation Method"
            options={aprTypesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="description"
            name="description"
            component={TextField}
            label="Description"
            placeholder="Enter Description"
            height={130}
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductAprs;
