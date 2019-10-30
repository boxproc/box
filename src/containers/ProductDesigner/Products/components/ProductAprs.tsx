import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { InputField, SelectField } from 'components';

import { aprTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface FieldWrapperProps {
  minWidth?: string;
  maxWidth?: string;
}

const FieldWrapper = styled(Box)<FieldWrapperProps>`
  padding: 10px;
  width: 100%;

  ${({ minWidth }) => minWidth && `
    min-width: ${minWidth};
  `}

  ${({ maxWidth }) => maxWidth && `
    max-width: ${maxWidth};
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
      <FieldWrapper maxWidth="140px">
        <Field
          id="repaymentSequence"
          name="repaymentSequence"
          component={InputField}
          label="Repayment Sequence"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required, formErrorUtil.isInteger]}
        />
      </FieldWrapper>
      <FieldWrapper minWidth="230px" maxWidth="230px">
        <Field
          id="description"
          name="description"
          component={InputField}
          label="Description"
          disabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </FieldWrapper>
      <FieldWrapper maxWidth="130px">
        <Field
          id="calculationMethod"
          name="calculationMethod"
          component={SelectField}
          label="Calculation Method"
          options={aprTypesOptions}
          isDisabled={isDisabled}
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </FieldWrapper>
      <FieldWrapper maxWidth="140px">
        <Field
          id="rate"
          name="rate"
          component={InputField}
          label="Rate"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required, formErrorUtil.isNumber]}
        />
      </FieldWrapper>
      <FieldWrapper maxWidth="140px">
        <Field
          id="graceNumberOfDays"
          name="graceNumberOfDays"
          component={InputField}
          label="Grace # of Days"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.required, formErrorUtil.isNumber]}
        />
      </FieldWrapper>
    </Flex>
  );
};

export default ProductAprs;
