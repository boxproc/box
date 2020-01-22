import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField, SelectField } from 'components';

import { aprTypesOptions, iconNamesConst } from 'consts';

import { formErrorUtil } from 'utils';

interface ProductAprsProps {
  isDisabled: boolean;
  isLoading: boolean;
  pristine: boolean;
}

const ProductAprs: React.FC<ProductAprsProps> = ({
  isDisabled,
  isLoading,
  pristine,
}) => {
  const buttonText = React.useMemo(
    () => isLoading ? 'Adding...' : 'Add APR',
    [isLoading]
  );

  return (
    <Flex
      alignItems="flex-end"
      flexWrap="wrap"
      mx="-10px"
    >
      <Box width="120px" p="10px">
        <Field
          id="repaymentOrder"
          name="repaymentOrder"
          component={InputField}
          label="Repayment Order"
          placeholder="Enter Order"
          isNumber={true}
          readOnly={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
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
      <Box width={[1 / 6]} p="10px">
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
      <Box width={[1 / 6]} p="10px">
        <Field
          id="rate"
          name="rate"
          component={NumberFormatField}
          label="Rate %"
          disabled={isDisabled}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isNumber,
          ]}
        />
      </Box>
      <Box width={[1 / 8]} p="10px">
        <Field
          id="graceNumberOfDays"
          name="graceNumberOfDays"
          component={InputField}
          label="Grace # of Days"
          placeholder="Enter #"
          isNumber={true}
          disabled={isDisabled}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isNumber,
          ]}
        />
      </Box>
      <Box width={[1 / 7]} pb="20px">
        <Button
          text={buttonText}
          iconName={iconNamesConst.PLUS}
          disabled={pristine || isDisabled}
        />
      </Box>
    </Flex>
  );
};

export default ProductAprs;
