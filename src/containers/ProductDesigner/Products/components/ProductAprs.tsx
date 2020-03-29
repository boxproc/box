import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, NumberFormatField, SelectField } from 'components';

import { aprTypesOptions, iconNamesConst } from 'consts';

import { formErrorUtil } from 'utils';

interface IProductAprs {
  isDisabled: boolean;
  isLoading: boolean;
  pristine: boolean;
}

const ProductAprs: React.FC<IProductAprs> = ({
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
      mx="-8px"
      width="100%"
    >
      <Box width={[1 / 4]} p="8px">
        <Field
          id="description"
          name="description"
          component={InputField}
          label="Description"
          placeholder="Enter Description"
          disabled={isDisabled}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 5]} p="8px">
        <Field
          id="calculationMethod"
          name="calculationMethod"
          component={SelectField}
          label="Calculation Method"
          options={aprTypesOptions}
          placeholder="Select Method"
          isDisabled={isDisabled}
          isClearable={false}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 5]} p="8px">
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
            formErrorUtil.isRequired,
            formErrorUtil.isNumber,
            formErrorUtil.isPositive,
          ]}
        />
      </Box>
      <Box width="120px" p="8px">
        <Field
          id="graceNumberOfDays"
          name="graceNumberOfDays"
          component={InputField}
          label="Grace # of Days"
          placeholder="Enter #"
          isNumber={true}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isInteger,
          ]}
        />
      </Box>
      <Box pb="15px">
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
