import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, ExternalSpinnerProps, InputField, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { HandleUserEnterAuthKey } from 'store/domains';

import { formErrorUtil } from 'utils';

interface CodeFormProps extends ExternalSpinnerProps {
  userEnterAuthKey: HandleUserEnterAuthKey;
}

type CodeFormPropsAllProps = CodeFormProps & InjectedFormProps<{}, CodeFormProps>;

const CodeForm: React.FC<CodeFormPropsAllProps> = ({
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

export default reduxForm<{}, CodeFormProps>({
  form: formNamesConst.LOGIN_CODE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner({
  isFixed: true,
})(CodeForm));
