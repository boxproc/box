import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { InputField, NumberFormatField, SelectField } from 'components';

import { feeTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface FieldWrapperProps {
  minWidth?: string;
  maxWidth?: string;
}

const FieldWrapper = styled(Box) <FieldWrapperProps>`
  padding: 10px;
  width: 100%;

  ${({ minWidth }) => minWidth && `
    min-width: ${minWidth};
  `}

  ${({ maxWidth }) => maxWidth && `
    max-width: ${maxWidth};
  `}
`;

interface ProductFeesProps {
  isDisabled: boolean;
}

const ProductFees: React.FC<ProductFeesProps> = ({
  isDisabled,
}) => {
  return (
    <Flex alignItems="flex-end">
      <FieldWrapper minWidth="300px" maxWidth="300px">
        <Field
          id="description"
          name="description"
          component={InputField}
          label="Description"
          placeholder="Enter Description"
          disabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </FieldWrapper>
      <FieldWrapper maxWidth="280px" minWidth="280px">
        <Field
          id="feeApplicationCondition"
          name="feeApplicationCondition"
          component={SelectField}
          label="Fee Application Condition"
          options={feeTypesOptions}
          placeholder="Select Condition"
          isDisabled={isDisabled}
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </FieldWrapper>
      <FieldWrapper maxWidth="140px">
        <Field
          id="rate"
          name="rate"
          component={NumberFormatField}
          label="Rate"
          isNumber={true}
          disabled={isDisabled}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={[formErrorUtil.required, formErrorUtil.isNumber]}
        />
      </FieldWrapper>
      <FieldWrapper maxWidth="140px">
        <Field
          id="amount"
          name="amount"
          component={NumberFormatField}
          label="Amount"
          isNumber={true}
          disabled={isDisabled}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={[formErrorUtil.required, formErrorUtil.isNumber]}
        />
      </FieldWrapper>
    </Flex>
  );
};

export default ProductFees;
