import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components';

import { formNamesConst } from 'consts';

interface CardFormProps {}

type DefineCardFormAllProps = CardFormProps & InjectedFormProps<{}, CardFormProps>;

const CardForm: React.FC<DefineCardFormAllProps> = () => {
  return (
    <form >
      <Box mx="-8px" >
        <Flex flexWrap="wrap">
          <Box width={[1 / 3]} p="8px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 3]} p="8px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 3]} p="8px">
            <Field
              id="expiryDate"
              name="expiryDate"
              component={InputField}
              label="Expiry Date"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 2]} p="8px">
            <Field
              id="panAlias"
              name="panAlias"
              component={InputField}
              label="Pan Alias"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 2]} p="8px">
            <Field
              id="panMasked"
              name="panMasked"
              component={InputField}
              label="Pan Masked"
              readOnly={true}
            />
          </Box>
        </Flex>
      </Box>
      <Flex
        alignItems="flex-end"
        justifyContent="space-between"
      />
    </form >
  );
};

export default reduxForm<{}, CardFormProps>({
  form: formNamesConst.LEDGER_CARDS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(CardForm);
