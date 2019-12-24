import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components';

import { loanTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface LoanDetailsProps {
  isReadOnly?: boolean;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({ isReadOnly }) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="interestDistributionType"
            name="interestDistributionType"
            component={SelectField}
            label="Interest Distribution Type"
            placeholder="Select Distribution Type"
            options={loanTypesOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="defNumOfInstallments"
            name="defNumOfInstallments"
            component={InputField}
            placeholder="# of installments "
            label="Default # of installments"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="defNumOfIntrstFreeInstlmts"
            name="defNumOfIntrstFreeInstlmts"
            component={InputField}
            placeholder="# of interest free "
            label="Default # of interest free installments"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width="160px" p="10px">
          <Field
            id="allowOverpayment"
            name="allowOverpayment"
            component={CheckboxField}
            label="Allow overpayment"
            readOnly={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LoanDetails;
