import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components';

import { formNamesConst } from 'consts';

interface ICardForm { }

type TCardForm = ICardForm & InjectedFormProps<{}, ICardForm>;

const CardForm: React.FC<TCardForm> = () => {
  return (
    <form>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        mx="-8px"
      >
        <Box width={[1 / 3]} p="8px">
          <Field
            id="id"
            name="id"
            component={InputField}
            label="ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[2 / 3]} p="8px">
          <Field
            id="panAlias"
            name="panAlias"
            component={InputField}
            label="Pan Alias"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 3]} p="8px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[2 / 3]} p="8px">
          <Field
            id="panMasked"
            name="panMasked"
            component={InputField}
            label="Pan Masked"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 3]} p="8px">
          <Field
            id="expiryDate"
            name="expiryDate"
            component={InputField}
            label="Expiry Date"
            disabled={true}
          />
        </Box>
      </Flex>
    </form >
  );
};

export default reduxForm<{}, ICardForm>({
  form: formNamesConst.CARD,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(CardForm);
