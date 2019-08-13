import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components/Form';

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
            id="Tt1Apr"
            name="Tt1Apr"
            component={InputField}
            label="TT1 APR"
            placeholder="Enter TT1 APR"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="Tt2Apr"
            name="Tt2Apr"
            component={InputField}
            label="TT2 APR"
            placeholder="Enter TT2 APR"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="introductionTermApr"
            name="introductionTermApr"
            component={InputField}
            label="Introduction term APR"
            placeholder="Enter Introduction Term APR"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceTransferApr"
            name="balanceTransferApr"
            component={InputField}
            label="Balance Transfer APR"
            placeholder="Enter Balance Transfer APR"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="delinquentApr"
            name="delinquentApr"
            component={InputField}
            label="'Delinquent' APR"
            placeholder="Enter 'Delinquent' APR"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="overpaymentApr"
            name="overpaymentApr"
            component={InputField}
            label="Overpayment APR"
            placeholder="Enter Overpayment APR"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="convertToLoanApr"
            name="convertToLoanApr"
            component={InputField}
            label="Convert to Loan APR"
            placeholder="Enter Convert to Loan APR"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductAprs;
