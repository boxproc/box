import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, Delimiter, InputField } from 'components';

import { formErrorUtil } from 'utils';

interface IProductAuxiliaryCounters {
  isCounter1Enabled: boolean;
  isCounter2Enabled: boolean;
  isCounter3Enabled: boolean;
  isReadOnly: boolean;
}

const ProductAuxiliaryCounters: React.FC<IProductAuxiliaryCounters> = ({
  isCounter1Enabled,
  isCounter2Enabled,
  isCounter3Enabled,
  isReadOnly,
}) => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Box p="8px 0 15px 10px">
          <Field
            id="auxCounter1Enabled"
            name="auxCounter1Enabled"
            component={CheckboxField}
            label=""
            disabled={isReadOnly}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="auxCounter1Description"
            name="auxCounter1Description"
            component={InputField}
            label="Aux Counter 1 Description"
            placeholder="Enter Aux Counter 1 Description"
            readOnly={!isCounter1Enabled || isReadOnly}
            validate={
              isCounter1Enabled
                ? [formErrorUtil.isRequired, formErrorUtil.isAlphaNumeric]
                : null
            }
          />
        </Box>
        <Delimiter />
        <Box p="8px 0 15px 8px">
          <Field
            id="auxCounter2Enabled"
            name="auxCounter2Enabled"
            component={CheckboxField}
            label=""
            disabled={isReadOnly}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="auxCounter2Description"
            name="auxCounter2Description"
            component={InputField}
            label="Aux Counter 2 Description"
            placeholder="Enter Aux Counter 2 Description"
            readOnly={!isCounter2Enabled || isReadOnly}
            validate={
              isCounter2Enabled
                ? [formErrorUtil.isRequired, formErrorUtil.isAlphaNumeric]
                : null
            }
          />
        </Box>
        <Delimiter />
        <Box p="8px 0 15px 8px">
          <Field
            id="auxCounter3Enabled"
            name="auxCounter3Enabled"
            component={CheckboxField}
            label=""
            disabled={isReadOnly}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="auxCounter3Description"
            name="auxCounter3Description"
            component={InputField}
            label="Aux Counter 3 Description"
            placeholder="Enter Aux Counter 3 Description"
            readOnly={!isCounter3Enabled || isReadOnly}
            validate={
              isCounter3Enabled
                ? [formErrorUtil.isRequired, formErrorUtil.isAlphaNumeric]
                : null
            }
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductAuxiliaryCounters;
