import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, NumberFormatField, SelectField } from 'components';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface LedgerConvertToLoanProps {
  loanProductsOptions: Array<SelectValue>;
}

const LedgerConvertToLoan: React.FC<LedgerConvertToLoanProps> = ({
  loanProductsOptions,
}) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="product"
            name="product"
            component={SelectField}
            placeholder="Select Product"
            label="Product"
            options={loanProductsOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="160px" p="10px">
          <Field
            id="amount"
            name="amount"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Amount"
            readOnly={true}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width="120px" p="10px">
          <Field
            id="numberOfInstallments"
            name="numberOfInstallments"
            component={InputField}
            placeholder="Enter #"
            label="# of Installments"
            validate={[
              formErrorUtil.required,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LedgerConvertToLoan;
