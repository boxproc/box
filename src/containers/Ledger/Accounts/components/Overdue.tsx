import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField } from 'components';

import { formErrorUtil } from 'utils';

interface OverdueProps {
  isEditMode: boolean;
}

const Overdue: React.FC<OverdueProps> = ({
  isEditMode = false,
}) => {
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
            label="Amount Overdue"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            readOnly={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue1Cycle"
            name="amountOverdue1Cycle"
            label="Amount Overdue 1 Cycle"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            readOnly={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue2Cycles"
            name="amountOverdue2Cycles"
            label="Amount Overdue 2 Cycles"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            readOnly={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue3Cycles"
            name="amountOverdue3Cycles"
            label="Amount Overdue 3 Cycles"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            readOnly={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue4Cycles"
            name="amountOverdue4Cycles"
            label="Amount Overdue 4 Cycles"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            readOnly={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue5Cycles"
            name="amountOverdue5Cycles"
            label="Amount Overdue 5 Cycles"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            readOnly={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue6Cycles"
            name="amountOverdue6Cycles"
            label="Amount Overdue 6 Cycles"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            readOnly={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountOverdue7Cycles"
            name="amountOverdue7Cycles"
            label="Amount Overdue 7 Cycles"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            readOnly={isEditMode}
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
            placeholder="0"
            readOnly={isEditMode}
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
            placeholder="0"
            readOnly={isEditMode}
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
            placeholder="0"
            readOnly={isEditMode}
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
            placeholder="0"
            readOnly={isEditMode}
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
            placeholder="0"
            readOnly={isEditMode}
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
            placeholder="0"
            readOnly={isEditMode}
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
            placeholder="0"
            readOnly={isEditMode}
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
            placeholder="0"
            readOnly={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Overdue;
