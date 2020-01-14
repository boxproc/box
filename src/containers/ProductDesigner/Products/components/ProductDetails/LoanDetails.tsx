import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components';

import { loanInterestDistributionTypesCodes, loanTypesOptions } from 'consts';

import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface LoanDetailsProps {
  isReadOnly?: boolean;
  interestDistributionEditorValue: SelectValues;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({
  isReadOnly,
  interestDistributionEditorValue,
}) => {
  const isEqualOrActualDistribution = React.useMemo(
    () => interestDistributionEditorValue
      && (interestDistributionEditorValue.value === loanInterestDistributionTypesCodes.EQUAL
        || interestDistributionEditorValue.value === loanInterestDistributionTypesCodes.ACTUAL),
    [interestDistributionEditorValue]
  );

  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box
          width={[1 / 3]}
          p="10px"
          pt={!isEqualOrActualDistribution && '26px'}
        >
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
        <Box
          width={[1 / 6]}
          p="10px"
          pt={!isEqualOrActualDistribution && '26px'}
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
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        {isEqualOrActualDistribution && (
        <Box
          width={[1 / 6]}
          p="10px"
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
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        )}
        <Box
          width="160px"
          p="10px"
          pt={!isEqualOrActualDistribution && '26px'}
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
