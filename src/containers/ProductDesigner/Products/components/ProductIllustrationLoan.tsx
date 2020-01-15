import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, MaskField, NumberFormatField, InputField } from 'components';

import { dateFormat, maskFormat } from 'consts';
import { formErrorUtil } from 'utils';

const ProductIllustrationLoan: React.FC = () => {
  return (
    <Flex alignItems="flex-end" flexWrap="wrap" width="100%" >
      <Box width="120px" p="10px">
        <Field
          id="startDate"
          name="startDate"
          component={MaskField}
          label="Start Date"
          placeholder={dateFormat.DATE}
          mask={maskFormat.DATE}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Box width={[1 / 4]} ml="1px" p="10px">
        <Field
          id="amount"
          name="amount"
          component={NumberFormatField}
          label="Loan amount (principal)"
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          validate={[formErrorUtil.required]}
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
          validate={[formErrorUtil.required]}
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
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Hr />
        <Flex justifyContent="flex-end" width="100%">
        <Button
          text="Illustrate"
        />
        </Flex>
    </Flex>
  );
};

export default ProductIllustrationLoan;
