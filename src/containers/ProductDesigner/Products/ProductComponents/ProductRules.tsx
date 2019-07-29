import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { HighLightCodeField, SelectField, TextField } from 'components/Form';

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
            id="event"
            name="event"
            isSearchable={true}
            component={SelectField}
            label="Event"
            placeholder="Select Event"
            options={[]}
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
            options={[]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="rulesDescription"
            name="rulesDescription"
            placeholder="Enter Description"
            component={TextField}
            label="Description"
          />
        </Box>
        <Box width={[1]} p="10px">
        <Field
          id="rulesCode"
          name="rulesCode"
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
