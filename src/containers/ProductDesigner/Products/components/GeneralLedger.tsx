import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, InputField } from 'components';

import { formErrorUtil } from 'utils';

interface GeneralLedgerProps { }

const GeneralLedger: React.FC<GeneralLedgerProps> = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="liabilitiesAccount"
            name="liabilitiesAccount"
            component={InputField}
            label="Liabilities Account"
            placeholder="Enter Liabilities Account"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="incomeAccount"
            name="incomeAccount"
            component={InputField}
            label="Income Account"
            placeholder="Enter Income Account"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="receivableAccount"
            name="receivableAccount"
            component={InputField}
            label="Receivable Account"
            placeholder="Enter Receivable Account"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 4]} p="10px">
          <Field
            id="writeOffAccount"
            name="writeOffAccount"
            component={InputField}
            label="Write off Account"
            placeholder="Enter Write off Account"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="auxAccount"
            name="auxAccount"
            component={InputField}
            label="Aux Account"
            placeholder="Enter Aux Account"
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralLedger;
