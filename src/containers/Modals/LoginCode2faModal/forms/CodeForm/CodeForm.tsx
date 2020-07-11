import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField } from 'components';
import { formNamesConst } from 'consts';
import { THandleUserEnterAuthKey } from 'store';
import { formErrorUtil } from 'utils';

interface ICodeForm {
  userEnterAuthKey: THandleUserEnterAuthKey;
  isLoading: boolean;
}

type TCodeForm = ICodeForm & InjectedFormProps<{}, ICodeForm>;

const CodeForm: React.FC<TCodeForm> = ({
  handleSubmit,
  userEnterAuthKey,
  pristine,
  isLoading,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(userEnterAuthKey),
    [handleSubmit, userEnterAuthKey]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="center">
        <Box width="120px" p="8px">
          <Field
            id="code"
            name="code"
            placeholder="Enter code"
            component={InputField}
            disabled={isLoading}
            autoFocus={true}
            isNumber={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
              formErrorUtil.exactNumberValue6,
            ]}
          />
        </Box>
        <Box p="8px" pl="0">
          <Button
            text="Log In"
            disabled={pristine}
            isLoading={isLoading}
          />
        </Box>
      </Flex>
    </form>
  );
};

export default reduxForm<{}, ICodeForm>({
  form: formNamesConst.LOGIN_CODE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(CodeForm);
