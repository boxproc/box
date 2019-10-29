import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { InputField, SelectField } from 'components';

import { aprTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface FieldWrapperProps {
  minWidth?: string;
}

const FieldWrapper = styled(Box)<FieldWrapperProps>`
  padding: 10px;
  width: 100%;

  ${({ minWidth }) => minWidth && `
    min-width: ${minWidth};
  `}
`;

interface ProductAprsProps {
  isDisabled: boolean;
}

const ProductAprs: React.FC<ProductAprsProps> = ({
  isDisabled,
}) => {
  return (
    <Flex alignItems="flex-end">
      <FieldWrapper>
        <Field
          id="repaymentSequence"
          name="repaymentSequence"
          component={InputField}
          label="Repayment Sequence"
          placeholder="Enter Sequence"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </FieldWrapper>
      <FieldWrapper minWidth="180px">
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
      <FieldWrapper>
        <Field
          id="calculationMethod"
          name="calculationMethod"
          component={SelectField}
          label="Calculation Method"
          placeholder="Select Method"
          options={aprTypesOptions}
          isDisabled={isDisabled}
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          id="rate"
          name="rate"
          component={InputField}
          label="Rate"
          placeholder="Enter Rate"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          id="graceNumberOfDays"
          name="graceNumberOfDays"
          component={InputField}
          label="Grace # of Days"
          placeholder="Enter #"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </FieldWrapper>
    </Flex>
  );
};

export default ProductAprs;
