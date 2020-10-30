import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, Hr, InputField, NumberFormatField } from 'components';
import { formErrorUtil } from 'utils';

interface IRevolvingCreditDetails {
  isReadOnly: boolean;
  useStatementGracePeriodFlagValue: boolean;
}

const RevolvingCreditDetails: React.FC<IRevolvingCreditDetails> = ({
  isReadOnly,
  useStatementGracePeriodFlagValue,
}) => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="150px" p="8px">
          <Field
            id="minimumRepaymentAmount"
            name="minimumRepaymentAmount"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Repayment Amount"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="minimumRepaymentRate"
            name="minimumRepaymentRate"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Repayment Rate"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width={[1]} p="8px" pb="10px">
          <Field
            id="limitSharingAllowedFlag"
            name="limitSharingAllowedFlag"
            component={CheckboxField}
            label="Limit Sharing Allowed"
            disabled={isReadOnly}
          />
        </Box>
        <Hr />
        <Box width="150px" p="8px">
          <Field
            id="statementInitialInterestFreeDays"
            name="statementInitialInterestFreeDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Statement Initial Interest Free Days"
            isNumber={true}
            disabled={isReadOnly ? true : !useStatementGracePeriodFlagValue}
            validate={[
              formErrorUtil.isInteger,
              formErrorUtil.rangeValueMin1Max255,
            ]}
          />
        </Box>
        <Box width={[1]} p="8px" pb="10px">
          <Field
            id="useStatementGracePeriodFlag"
            name="useStatementGracePeriodFlag"
            component={CheckboxField}
            label="Use Statement Grace Period"
            disabled={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RevolvingCreditDetails;
