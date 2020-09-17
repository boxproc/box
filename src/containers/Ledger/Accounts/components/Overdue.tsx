import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField, OkCancelButtons } from 'components';
import { formErrorUtil } from 'utils';

interface IOverdue {
  onCancel: () => void;
  dirty: boolean;
  pristine: boolean;
  isReadOnly: boolean;
}

const Overdue: React.FC<IOverdue> = ({
  onCancel,
  dirty,
  pristine,
  isReadOnly,
}) => {
  return (
    <React.Fragment>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="150px" p="8px">
            <Field
              id="amountOverdue"
              name="amountOverdue"
              label="Amount Overdue"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
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
              id="numberOfTimeOverdueCycles"
              name="numberOfTimeOverdueCycles"
              component={InputField}
              label="Number of Times Overdue Cycles"
              placeholder="0"
              isRightPlaceholder={true}
              disabled={isReadOnly}
              isNumber={true}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isInteger,
              ]}
            />
          </Box>
        </Flex>
      </Box>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </React.Fragment>
  );
};

export default Overdue;
