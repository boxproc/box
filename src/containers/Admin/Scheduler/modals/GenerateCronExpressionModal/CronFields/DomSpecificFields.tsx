import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField } from 'components';
import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeDecimalNumbersArray(31, 1);

interface IDomSpecificFields {
  isSpecific: boolean;
}

const DomSpecificFields: React.FC<IDomSpecificFields> = ({ isSpecific }) => {
  return (
    <Box width="720px">
      Specific day of month (choose one or many)
      {isSpecific && (
        <Box mt="10px">
          <Flex
            alignItems="center"
            flexWrap="wrap"
          >
            {numbersArray.map(num => (
              <Box
                key={num}
                width={[1 / 11]}
                p="0 2px"
              >
                <Field
                  id={`cronDom${num}`}
                  name={`cronDomSpecificSpecific${num}`}
                  component={CheckboxField}
                  label={num}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default DomSpecificFields;
