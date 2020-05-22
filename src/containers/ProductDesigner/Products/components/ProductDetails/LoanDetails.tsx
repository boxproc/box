import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components';

import { loanInterestConst, loanTypesOptions } from 'consts';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ILoanDetails {
  isReadOnly?: boolean;
  interestDistributionValue: ISelectValue;
}

const LoanDetails: React.FC<ILoanDetails> = ({
  isReadOnly,
  interestDistributionValue,
}) => {
  const isEqualOrActualDistribution = React.useMemo(
    () => interestDistributionValue
      && (interestDistributionValue.value === loanInterestConst.REDUCING_BALANCE_METHOD_SIMPLE
        || interestDistributionValue.value === loanInterestConst.REDUCING_BALANCE_METHOD_COMPOUND
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
          width={[1 / 4]}
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
          width="130px"
          p="8px"
          pt="26px"
        >
          <Field
            id="defNumOfInstallments"
            name="defNumOfInstallments"
            component={InputField}
            placeholder="Enter #"
            label="Default # of installments"
            disabled={isReadOnly}
            isNumber={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        {isEqualOrActualDistribution && (
          <Box
            width="130px"
            p="8px"
          >
            <Field
              id="defNumInterestFreeInstlmts"
              name="defNumInterestFreeInstlmts"
              component={InputField}
              placeholder="Enter #"
              label="Default # of Interest Free Installments"
              disabled={isReadOnly}
              isNumber={true}
              validate={[
                formErrorUtil.isInteger,
              ]}
            />
          </Box>
        )}
        <Box
          width="130px"
          p="8px"
        >
          <Field
            id="defNumDeferredInstlmts"
            name="defNumDeferredInstlmts"
            component={InputField}
            placeholder="Enter #"
            label="Default # of Deferred Installments"
            disabled={isReadOnly}
            isNumber={true}
            validate={[
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
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
            disabled={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LoanDetails;
