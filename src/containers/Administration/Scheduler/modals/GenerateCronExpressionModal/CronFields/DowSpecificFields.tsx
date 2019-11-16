import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField } from 'components';

import { daysOfWeekOptions } from 'consts';

interface DowSpecificFieldsProps {
  isSpecific: boolean;
}

const DowSpecificFields: React.FC<DowSpecificFieldsProps> = ({ isSpecific }) => {
  return (
    <Flex alignItems="baseline" flexWrap="wrap">
      Specific day of week (choose one or many)
      {isSpecific && (
        <Box mt="10px">
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
        </Box>
      )}
    </Flex>
  );
};

export default DowSpecificFields;
