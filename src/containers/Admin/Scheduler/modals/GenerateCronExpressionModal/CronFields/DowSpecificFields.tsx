import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField } from 'components';
import { daysOfWeekOptionsWithStrValues } from 'consts';

interface IDowSpecificFields {
  isSpecific: boolean;
}

const DowSpecificFields: React.FC<IDowSpecificFields> = ({ isSpecific }) => {
  return (
    <React.Fragment>
      Specific day of week (choose one or many)
      {isSpecific && (
        <Box mt="10px">
          <Flex
            alignItems="center"
            flexWrap="wrap"
          >
            {daysOfWeekOptionsWithStrValues.map(day => (
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
    </React.Fragment>
  );
};

export default DowSpecificFields;
