import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, Delimiter, InputField } from 'components';

import { formErrorUtil } from 'utils';

interface ProductAuxiliaryCountersProps {
  isCounter1Enabled: boolean;
  isCounter2Enabled: boolean;
  isCounter3Enabled: boolean;
}

const ProductAuxiliaryCounters: React.FC<ProductAuxiliaryCountersProps> = ({
  isCounter1Enabled,
  isCounter2Enabled,
  isCounter3Enabled,
}) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box p="10px 0 20px 10px">
          <Field
            id="auxCounter1Enabled"
            name="auxCounter1Enabled"
            component={CheckboxField}
            label=""
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="auxCounter1Description"
            name="auxCounter1Description"
            component={InputField}
            label="Aux Counter 1 Description"
            placeholder="Enter Aux Counter 1 Description"
            disabled={!isCounter1Enabled}
            validate={isCounter1Enabled ? [formErrorUtil.required] : null}
          />
        </Box>
        <Delimiter />
        <Box p="10px 0 20px 10px">
          <Field
            id="auxCounter2Enabled"
            name="auxCounter2Enabled"
            component={CheckboxField}
            label=""
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="auxCounter2Description"
            name="auxCounter2Description"
            component={InputField}
            label="Aux Counter 2 Description"
            placeholder="Enter Aux Counter 2 Description"
            disabled={!isCounter2Enabled}
            validate={isCounter2Enabled ? [formErrorUtil.required] : null}
          />
        </Box>
        <Delimiter />
        <Box p="10px 0 20px 10px">
          <Field
            id="auxCounter3Enabled"
            name="auxCounter3Enabled"
            component={CheckboxField}
            label=""
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="auxCounter3Description"
            name="auxCounter3Description"
            component={InputField}
            label="Aux Counter 3 Description"
            placeholder="Enter Aux Counter 3 Description"
            disabled={!isCounter3Enabled}
            validate={isCounter3Enabled ? [formErrorUtil.required] : null}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductAuxiliaryCounters;
