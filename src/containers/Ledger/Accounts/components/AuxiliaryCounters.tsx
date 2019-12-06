import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, NumberFormatField, OkCancelButtons } from 'components';

import { LedgerAccountItemDetailsPrepared } from 'store/domains';

import { formErrorUtil } from 'utils';

interface AuxiliaryCountersProps {
  currentAccountAuxCounters: Partial<LedgerAccountItemDetailsPrepared>;
  isEditMode: boolean;
  onCancel: () => void;
  dirty: boolean;
  pristine: boolean;
}

const AuxiliaryCounters: React.FC<AuxiliaryCountersProps> = ({
  currentAccountAuxCounters,
  isEditMode,
  onCancel,
  dirty,
  pristine,
}) => {
  const auxCounter1Description = React.useMemo(
    () => currentAccountAuxCounters && currentAccountAuxCounters.auxCounter1Description,
    [currentAccountAuxCounters]
  );

  const auxCounter2Description = React.useMemo(
    () => currentAccountAuxCounters && currentAccountAuxCounters.auxCounter2Description,
    [currentAccountAuxCounters]
  );

  const auxCounter3Description = React.useMemo(
    () => currentAccountAuxCounters && currentAccountAuxCounters.auxCounter3Description,
    [currentAccountAuxCounters]
  );

  const auxCounter1Enabled = React.useMemo(
    () => currentAccountAuxCounters && currentAccountAuxCounters.auxCounter1Enabled,
    [currentAccountAuxCounters]
  );

  const auxCounter2Enabled = React.useMemo(
    () => currentAccountAuxCounters && currentAccountAuxCounters.auxCounter2Enabled,
    [currentAccountAuxCounters]
  );

  const auxCounter3Enabled = React.useMemo(
    () => currentAccountAuxCounters && currentAccountAuxCounters.auxCounter3Enabled,
    [currentAccountAuxCounters]
  );

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
              label={auxCounter1Description || 'Aux Counter 1'}
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode && !auxCounter1Enabled}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="auxCounter2"
              name="auxCounter2"
              label={auxCounter2Description || 'Aux Counter 2'}
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode && !auxCounter2Enabled}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="auxCounter3"
              name="auxCounter3"
              label={auxCounter3Description || 'Aux Counter 3'}
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode && !auxCounter3Enabled}
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
