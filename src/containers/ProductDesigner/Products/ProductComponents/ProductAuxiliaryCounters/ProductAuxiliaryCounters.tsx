import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField } from 'components/Form';
import { Delimiter } from 'components/Text';

import { formErrorUtil } from 'utils';

interface ProductAuxiliaryCountersProps { }

const ProductAuxiliaryCounters: React.FC<ProductAuxiliaryCountersProps> = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="230px" p="10px">
          <Field
            id="auxCounter1Description"
            name="auxCounter1Description"
            component={InputField}
            label="Aux Counter 1 Description"
            placeholder="Enter Aux Counter 1 Description"
            isDisabled={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="230px" p="10px" pb="25px">
          <Field
            id="auxCounter1Enabled"
            name="auxCounter1Enabled"
            component={CheckboxField}
            label="Aux Counter 1 Enabled"
            placeholder="Enter Aux Counter 1 Enabled"
            isDisabled={false}
          />
        </Box>
        <Delimiter />
        <Box width="230px" p="10px">
          <Field
            id="auxCounter2Description"
            name="auxCounter2Description"
            component={InputField}
            label="Aux Counter 2 Description"
            placeholder="Enter Aux Counter 2 Description"
            isDisabled={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="230px" p="10px" pb="25px">
          <Field
            id="auxCounter2Enabled"
            name="auxCounter2Enabled"
            component={CheckboxField}
            label="Aux Counter 2 Enabled"
            placeholder="Enter Aux Counter 2 Enabled"
            isDisabled={false}
          />
        </Box>
        <Delimiter />
        <Box width="230px" p="10px">
          <Field
            id="auxCounter3Description"
            name="auxCounter3Description"
            component={InputField}
            label="Aux Counter 3 Description"
            placeholder="Enter Aux Counter 3 Description"
            isDisabled={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="230px" p="10px" pb="25px">
          <Field
            id="auxCounter3Enabled"
            name="auxCounter3Enabled"
            component={CheckboxField}
            label="Aux Counter 3 Enabled"
            placeholder="Enter Aux Counter 1 Enabled"
            isDisabled={false}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductAuxiliaryCounters;
