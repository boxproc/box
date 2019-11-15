import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, Paragraph } from 'components';

import { daysOfWeekOptions } from 'consts';

const DowSpecificFields: React.FC = () => {
  return (
    <Flex alignItems="baseline" flexWrap="wrap">
      <Paragraph size={13}>Specific day of week (choose one or many)</Paragraph>
      <Flex
        alignItems="center"
        flexWrap="wrap"
      >
        {daysOfWeekOptions.map(day => (
          <Box
            key={day.value}
            pr="15px"
          >
            <Field
              id={`cronDow${day.value}`}
              name={`cronDowSpecificSpecific${day.value}`}
              component={CheckboxField}
              label={day.label}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default DowSpecificFields;
