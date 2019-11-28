import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, NumberFormatField, OkCancelButtons } from 'components';

import { formErrorUtil } from 'utils';

interface AuxiliaryCountersProps {
  isEditMode: boolean;
  onCancel: () => void;
  dirty: boolean;
  pristine: boolean;
}

const AuxiliaryCounters: React.FC<AuxiliaryCountersProps> = ({
  isEditMode,
  onCancel,
  dirty,
  pristine,
}) => {
  return (
    <React.Fragment>
      <Box mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 5]} p="10px">
            <Field
              id="auxCounter1"
              name="auxCounter1"
              label="Aux Counter 1"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="auxCounter2"
              name="auxCounter2"
              label="Aux Counter 2"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="auxCounter3"
              name="auxCounter3"
              label="Aux Counter 3"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
              validate={[formErrorUtil.isNumber]}
            />
          </Box>
        </Flex>
      </Box>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
      />
    </React.Fragment>
  );
};

export default AuxiliaryCounters;
