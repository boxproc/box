import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, InputField, MaskField, NumberFormatField } from 'components';

import { dateFormat, maskFormat } from 'consts';
import { formErrorUtil } from 'utils';

interface ProductIllustrationLoanProps {
  isLoading: boolean;
}

const ProductIllustrationLoan: React.FC<ProductIllustrationLoanProps> = ({
  isLoading,
}) => {
  return (
    <Flex
      alignItems="flex-end"
      flexWrap="wrap"
      width="100%"
      mx="-10px"
    >
      <Box width="120px" p="10px">
        <Field
          id="startDate"
          name="startDate"
          component={MaskField}
          label="Start Date"
          placeholder={dateFormat.DATE}
          mask={maskFormat.DATE}
          disabled={isLoading}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Box width="160px" ml="1px" p="10px">
        <Field
          id="amount"
          name="amount"
          component={NumberFormatField}
          label="Loan amount (principal)"
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          disabled={isLoading}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isNumber,
          ]}
        />
      </Box>
      <Box width="115px" p="10px">
        <Field
          id="defNumOfInstallments"
          name="defNumOfInstallments"
          placeholder="Enter #"
          component={InputField}
          label="# of Installments"
          isNumber={true}
          disabled={isLoading}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isInteger,
          ]}
        />
      </Box>
      <Box width="120px" p="10px">
        <Field
          id="defNumOfIntrstFreeInstlmts"
          name="defNumOfIntrstFreeInstlmts"
          component={InputField}
          isNumber={true}
          label="# of Interest Free"
          placeholder="Enter #"
          disabled={isLoading}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isInteger,
          ]}
        />
      </Box>
      <Hr />
      <Flex justifyContent="flex-end" width="100%">
        <Button text="Illustrate" />
      </Flex>
    </Flex>
  );
};

export default ProductIllustrationLoan;
