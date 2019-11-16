import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField, SelectField } from 'components';

import { aprTypesOptions, iconNamesConst } from 'consts';

import { formErrorUtil } from 'utils';

interface ProductAprsProps {
  isDisabled: boolean;
  pristine: boolean;
}

const ProductAprs: React.FC<ProductAprsProps> = ({
  isDisabled,
  pristine,
}) => {
  return (
    <Flex alignItems="flex-end">
      <Box width="140px" p="10px">
        <Field
          id="repaymentSequence"
          name="repaymentSequence"
          component={InputField}
          label="Repayment Priority"
          placeholder="Enter Priority"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required, formErrorUtil.isInteger]}
        />
      </Box>
      <Box width="300px" p="10px">
        <Field
          id="description"
          name="description"
          component={InputField}
          label="Description"
          placeholder="Enter Description"
          disabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="calculationMethod"
          name="calculationMethod"
          component={SelectField}
          label="Calculation Method"
          options={aprTypesOptions}
          placeholder="Select Method"
          isDisabled={isDisabled}
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width="140px" p="10px">
        <Field
          id="rate"
          name="rate"
          component={NumberFormatField}
          label="Rate"
          disabled={isDisabled}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={[formErrorUtil.required, formErrorUtil.isNumber]}
        />
      </Box>
      <Box width="140px" p="10px">
        <Field
          id="graceNumberOfDays"
          name="graceNumberOfDays"
          component={InputField}
          label="Grace # of Days"
          placeholder="Enter # of Days"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required, formErrorUtil.isNumber]}
        />
      </Box>
      <Box width="90px" pb="20px">
        <Button
          text={isDisabled ? 'Adding...' : 'Add APR'}
          iconName={iconNamesConst.PLUS}
          disabled={pristine || isDisabled}
        />
      </Box>
    </Flex>
  );
};

export default ProductAprs;
