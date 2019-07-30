import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { HighLightCodeField, InputField, SelectField, TextField } from 'components/Form';

import { actionTypesOptions } from 'consts';

interface ProductRulesProps {}

const ProductRules: React.FC<ProductRulesProps> = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 2]} p="10px">
          <Field
            id="eventId"
            name="eventId"
            component={InputField}
            label="Event ID"
            placeholder="Enter Event ID"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="actionType"
            name="actionType"
            isSearchable={true}
            component={SelectField}
            label="Action Type"
            placeholder="Select Action Type"
            options={actionTypesOptions}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="description"
            name="description"
            placeholder="Enter Description"
            component={TextField}
            label="Description"
          />
        </Box>
        <Box width={[1]} p="10px">
        <Field
          id="script"
          name="script"
          placeholder="Enter Code"
          component={HighLightCodeField}
          label="Code"
        />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductRules;
