import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField } from 'components';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeDecimalNumbersArray(31, 1);

interface DomSpecificFieldsProps {
  isSpecific: boolean;
}

const DomSpecificFields: React.FC<DomSpecificFieldsProps> = ({ isSpecific }) => {
  return (
    <Flex alignItems="baseline" flexWrap="wrap">
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
                p="2px"
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
    </Flex>
  );
};

export default DomSpecificFields;
