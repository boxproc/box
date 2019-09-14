import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components';

import { formErrorUtil } from 'utils';

interface AuxiliaryCountersProps {
  isEditMode: boolean;
}

const AuxiliaryCounters: React.FC<AuxiliaryCountersProps> = ({
  isEditMode,
}) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="auxCounter1"
            name="auxCounter1"
            component={InputField}
            label="Aux Counter 1"
            placeholder="Enter Aux Counter 1"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="auxCounter2"
            name="auxCounter2"
            component={InputField}
            label="Aux Counter 2"
            placeholder="Enter Aux Counter 2"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="auxCounter3"
            name="auxCounter3"
            component={InputField}
            label="Aux Counter 3"
            placeholder="Enter Aux Counter 3"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.isNumber]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AuxiliaryCounters;
