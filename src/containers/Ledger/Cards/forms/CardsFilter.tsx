import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { InputField } from 'components';

import { maskFormat } from 'consts';

const CardsFilter: React.FC = () => {
  return (
    <React.Fragment>
      <Box width="150px" p="10px">
        <Field
          id="id"
          name="id"
          component={InputField}
          label="Card ID"
          placeholder="Card ID"
          isDisabled={false}
          isNumber={true}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="accountId"
          name="accountId"
          component={InputField}
          label="Account ID"
          placeholder="Account ID"
          isDisabled={false}
          isNumber={true}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="customerId"
          name="customerId"
          component={InputField}
          label="Customer ID"
          placeholder="Customer ID"
          isDisabled={false}
          isNumber={true}
        />
      </Box>
      <Box width="200px" p="10px">
        <Field
          id="panAlias"
          name="panAlias"
          component={InputField}
          label="PAN Alias"
          placeholder="PAN Alias"
          mask={maskFormat.DATE_TIME}
          maskChar={null}
        />
      </Box>
    </React.Fragment>
  );
};

export default CardsFilter;
