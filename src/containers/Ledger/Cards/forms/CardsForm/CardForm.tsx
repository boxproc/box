import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { ExternalSpinnerProps, InputField, withSpinner } from 'components';

import { formNamesConst } from 'consts';

interface CardInfoFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
}

type DefineCardInfoFormAllProps = CardInfoFormProps &
  InjectedFormProps<{}, CardInfoFormProps>;

const CardInfoForm: React.FC<DefineCardInfoFormAllProps> = () => {
  return (
    <form >
      <Box mx="-10px" >
        <Flex
          flexWrap="wrap"
        >
          <Box width={[1 / 4]} p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="expiryDate"
              name="expiryDate"
              component={InputField}
              label="Expiry Date"
              disabled={true}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="status"
              name="status"
              component={InputField}
              label="Status"
              disabled={true}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="panAlias"
              name="panAlias"
              component={InputField}
              label="Pan Alias"
              disabled={true}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="panMasked"
              name="panMasked"
              component={InputField}
              label="Pan Masked"
              disabled={true}
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

export default reduxForm<{}, CardInfoFormProps>({
  form: formNamesConst.LEDGER_CARDS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(CardInfoForm));
