import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components/Form';
import { Hr } from 'components/Text';

import { formErrorUtil } from 'utils';

const Overdue: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue"
            name="amountOverdue"
            component={InputField}
            label="Amount Overdue"
            placeholder="Enter Amount Overdue"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue1Cycle"
            name="amountOverdue1Cycle"
            component={InputField}
            label="Amount Overdue 1 Cycle"
            placeholder="Enter Amount Overdue 1 Cycle"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue2Cycles"
            name="amountOverdue2Cycles"
            component={InputField}
            label="Amount Overdue 2 Cycles"
            placeholder="Enter Amount Overdue 2 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue3Cycles"
            name="amountOverdue3Cycles"
            component={InputField}
            label="Amount Overdue 3 Cycles"
            placeholder="Enter Amount Overdue 3 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue4Cycles"
            name="amountOverdue4Cycles"
            component={InputField}
            label="Amount Overdue 4 Cycles"
            placeholder="Enter Amount Overdue 4 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue5Cycles"
            name="amountOverdue5Cycles"
            component={InputField}
            label="Amount Overdue 5 Cycles"
            placeholder="Enter Amount Overdue 5 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue6Cycles"
            name="amountOverdue6Cycles"
            component={InputField}
            label="Amount Overdue 6 Cycles"
            placeholder="Enter Amount Overdue 6 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue7Cycles"
            name="amountOverdue7Cycles"
            component={InputField}
            label="Amount Overdue 7 Cycles"
            placeholder="Enter Amount Overdue 7 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Hr />
        <Box width={[1 / 4]} p="10px">
          <Field
            id="numberOfTimesOverdueTotal"
            name="numberOfTimesOverdueTotal"
            component={InputField}
            label="Number of Times Overdue Total"
            placeholder="Enter Number of Times Overdue Total"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="numberOfTimesOverdue1Cycle"
            name="numberOfTimesOverdue1Cycle"
            component={InputField}
            label="Number of Times Overdue 1 Cycle"
            placeholder="Enter Number of Times Overdue 1 Cycle"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="numberOfTimesOverdue2Cycles"
            name="numberOfTimesOverdue2Cycles"
            component={InputField}
            label="Number of Times Overdue 2 Cycles"
            placeholder="Enter Number of Times Overdue 2 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="numberOfTimesOverdue3Cycles"
            name="numberOfTimesOverdue3Cycles"
            component={InputField}
            label="Number of Times Overdue 3 Cycles"
            placeholder="Enter Number of Times Overdue 3 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="numberOfTimesOverdue4Cycles"
            name="numberOfTimesOverdue4Cycles"
            component={InputField}
            label="Number of Times Overdue 4 Cycles"
            placeholder="Enter Number of Times Overdue 4 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="numberOfTimesOverdue5Cycles"
            name="numberOfTimesOverdue5Cycles"
            component={InputField}
            label="Number of Times Overdue 5 Cycles"
            placeholder="Enter Number of Times Overdue 5 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="numberOfTimesOverdue6Cycles"
            name="numberOfTimesOverdue6Cycles"
            component={InputField}
            label="Number of Times Overdue 6 Cycles"
            placeholder="Enter Number of Times Overdue 6 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="numberOfTimesOverdue7Cycles"
            name="numberOfTimesOverdue7Cycles"
            component={InputField}
            label="Number of Times Overdue 7 Cycles"
            placeholder="Enter Number of Times Overdue 7 Cycles"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Overdue;
