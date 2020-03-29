import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, InputField, ISpinner, withSpinner } from 'components';
import { formNamesConst } from 'consts';
import { THandleUserEnterAuthKey } from 'store';
import { formErrorUtil } from 'utils';

interface ICodeForm extends ISpinner {
  userEnterAuthKey: THandleUserEnterAuthKey;
}

type TCodeForm = ICodeForm & InjectedFormProps<{}, ICodeForm>;

const CodeForm: React.FC<TCodeForm> = ({
  handleSubmit,
  userEnterAuthKey,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(userEnterAuthKey),
    [handleSubmit, userEnterAuthKey]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width="120px" mt="15px">
        <Field
          id="code"
          name="code"
          placeholder="Enter code"
          component={InputField}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isInteger,
            formErrorUtil.exactNumberValue6,
          ]}
          autoFocus={true}
        />
      </Box>
      <Flex justifyContent="flex-end">
        <Button
          text="Log In"
          disabled={pristine}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, ICodeForm>({
  form: formNamesConst.LOGIN_CODE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner({
  isFixed: true,
})(CodeForm));
