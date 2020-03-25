import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components';

import { loanInterestConst, loanTypesOptions } from 'consts';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface LoanDetailsProps {
  isReadOnly?: boolean;
  interestDistributionValue: ISelectValue;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({
  isReadOnly,
  interestDistributionValue,
}) => {
  const isEqualOrActualDistribution = React.useMemo(
    () => interestDistributionValue
      && (interestDistributionValue.value === loanInterestConst.REDUCING_BALANCE_METHOD
        || interestDistributionValue.value === loanInterestConst.FLAT_RATE_METHOD),
    [interestDistributionValue]
  );

  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box
          width={[1 / 3]}
          p="8px"
          pt="26px"
        >
          <Field
            id="interestDistributionType"
            name="interestDistributionType"
            component={SelectField}
            label="Interest Method"
            placeholder="Select Method"
            options={loanTypesOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box
          width={[1 / 6]}
          p="8px"
          pt="26px"
        >
          <Field
            id="defNumOfInstallments"
            name="defNumOfInstallments"
            component={InputField}
            placeholder="Enter #"
            label="Default # of installments"
            readOnly={isReadOnly}
            isNumber={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        {isEqualOrActualDistribution && (
          <Box
            width={[1 / 6]}
            p="8px"
          >
            <Field
              id="defNumOfIntrstFreeInstlmts"
              name="defNumOfIntrstFreeInstlmts"
              component={InputField}
              placeholder="Enter #"
              label="Default # of interest free installments"
              readOnly={isReadOnly}
              isNumber={true}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isInteger,
              ]}
            />
          </Box>
        )}
        <Box
          width="160px"
          p="8px"
          pt="26px"
          m="1px"
        >
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
