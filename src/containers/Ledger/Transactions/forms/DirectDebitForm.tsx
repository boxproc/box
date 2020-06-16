import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';
import { InputField, NumberFormatField } from 'components';
import { formNamesConst } from 'consts';

interface IDirectDebitForm { }

type TDirectDebitForm = IDirectDebitForm & InjectedFormProps<{}, IDirectDebitForm>;

const DirectDebitForm: React.FC<TDirectDebitForm> = () => {
  return (
    <Flex
      alignItems="flex-end"
      flexWrap="wrap"
      mx="-8px"
    >
      <Box width="170px" p="8px">
        <Field
          id="directDebitCreatedTimestamp"
          name="directDebitCreatedTimestamp"
          component={InputField}
          label="BOX timestamp"
          disabled={true}
        />
      </Box>
      <Box width="150px" p="8px">
        <Field
          id="directDebitStatus"
          name="directDebitStatus"
          component={InputField}
          label="Status"
          disabled={true}
        />
      </Box>
      <Box width="100px" p="8px">
        <Field
          id="directDebitAmount"
          name="directDebitAmount"
          component={NumberFormatField}
          label="Amount"
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          disabled={true}
        />
      </Box>
      <Box width="100px" p="8px">
        <Field
          id="directDebitAccountAlias"
          name="directDebitAccountAlias"
          component={InputField}
          label="Account Alias"
          disabled={true}
          isNumber={true}
        />
      </Box>
      <Box width="320px" p="8px">
        <Field
          id="directDebitBankName"
          name="directDebitBankName"
          component={InputField}
          label="Bank Name"
          disabled={true}
        />
      </Box>
    </Flex>
  );
};

export default reduxForm<{}, IDirectDebitForm>({
  form: formNamesConst.DIRECT_DEBIT_TRANSACTION,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(DirectDebitForm);
