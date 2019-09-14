import React from 'react';

import { Flex } from '@rebass/grid';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Button } from 'components/Buttons';
import { InputField } from 'components/Form';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import { formNames } from 'consts';

import { HandleUserEnterAuthKey } from 'store/domains';

import { formErrorUtil } from 'utils';

interface CodeFormProps extends ExternalSpinnerProps {
  userEnterAuthKey: HandleUserEnterAuthKey;
}

type CodeFormPropsAllProps = CodeFormProps & InjectedFormProps<{}, CodeFormProps>;

const CodeForm: React.FC<CodeFormPropsAllProps> = ({
  handleSubmit,
  userEnterAuthKey,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => userEnterAuthKey(data)),
    [handleSubmit]
  );

  return (
    <React.Fragment>
      <form onSubmit={handleSubmitForm}>
        <Field
          id="code"
          name="code"
          placeholder="Enter code"
          component={InputField}
          validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          autoFocus={true}
        />
        <Flex justifyContent="flex-end">
          <Button text="Log In" />
        </Flex>
      </form>
    </React.Fragment>
  );
};

export default reduxForm<{}, CodeFormProps>({
  form: formNames.LOGIN_CODE,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner({
  isFixed: true,
})(CodeForm));
