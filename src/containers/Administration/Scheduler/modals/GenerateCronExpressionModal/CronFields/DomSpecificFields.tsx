import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, Paragraph } from 'components';

import { stringsUtil } from 'utils';

const numbersArray = stringsUtil.rangeDecimalNumbersArray(31, 1);

const DomSpecificFields: React.FC = () => {
  return (
    <Flex alignItems="baseline" flexWrap="wrap">
      <Paragraph>Specific day of month (choose one or many)</Paragraph>
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
    </Flex>
  );
};

export default DomSpecificFields;
