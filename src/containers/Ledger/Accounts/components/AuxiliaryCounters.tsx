import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, NumberFormatField, OkCancelButtons } from 'components';
import { IAccountDetails } from 'store';
import { formErrorUtil } from 'utils';

interface IAuxiliaryCounters {
  currentAccAuxCounters: Partial<IAccountDetails>;
  isEditMode?: boolean;
  onCancel: () => void;
  dirty: boolean;
  pristine: boolean;
  isReadOnly: boolean;
}

const AuxiliaryCounters: React.FC<IAuxiliaryCounters> = ({
  currentAccAuxCounters,
  isEditMode,
  onCancel,
  dirty,
  pristine,
  isReadOnly,
}) => {
  const auxCounter1Description = React.useMemo(
    () => currentAccAuxCounters && currentAccAuxCounters.auxCounter1Description,
    [currentAccAuxCounters]
  );

  const auxCounter2Description = React.useMemo(
    () => currentAccAuxCounters && currentAccAuxCounters.auxCounter2Description,
    [currentAccAuxCounters]
  );

  const auxCounter3Description = React.useMemo(
    () => currentAccAuxCounters && currentAccAuxCounters.auxCounter3Description,
    [currentAccAuxCounters]
  );

  const auxCounter1Enabled = React.useMemo(
    () => currentAccAuxCounters && currentAccAuxCounters.auxCounter1Enabled,
    [currentAccAuxCounters]
  );

  const auxCounter2Enabled = React.useMemo(
    () => currentAccAuxCounters && currentAccAuxCounters.auxCounter2Enabled,
    [currentAccAuxCounters]
  );

  const auxCounter3Enabled = React.useMemo(
    () => currentAccAuxCounters && currentAccAuxCounters.auxCounter3Enabled,
    [currentAccAuxCounters]
  );

  return (
    <React.Fragment>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="150px" p="8px">
            <Field
              id="auxCounter1"
              name="auxCounter1"
              label={auxCounter1Description || 'Aux Counter 1'}
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              disabled={(isEditMode && !auxCounter1Enabled) || isReadOnly}
              validate={[
                formErrorUtil.isNumber,
                formErrorUtil.isPositive,
              ]}
            />
          </Box>
          <Box width="150px" p="8px">
            <Field
              id="auxCounter2"
              name="auxCounter2"
              label={auxCounter2Description || 'Aux Counter 2'}
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              disabled={(isEditMode && !auxCounter2Enabled) || isReadOnly}
              validate={[
                formErrorUtil.isNumber,
                formErrorUtil.isPositive,
              ]}
            />
          </Box>
          <Box width="150px" p="8px">
            <Field
              id="auxCounter3"
              name="auxCounter3"
              label={auxCounter3Description || 'Aux Counter 3'}
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              disabled={(isEditMode && !auxCounter3Enabled) || isReadOnly}
              validate={[
                formErrorUtil.isNumber,
                formErrorUtil.isPositive,
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

export default AuxiliaryCounters;
