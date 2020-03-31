import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { ISpinner, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { UsersGroupFields } from '../../components';

import { THandleAddUsersGroup } from 'store';

interface IAddUsersGroupForm extends ISpinner {
  addUsersGroup: THandleAddUsersGroup;
  onCancel: () => void;
}

type TAddUsersGroupForm = IAddUsersGroupForm & InjectedFormProps<{}, IAddUsersGroupForm>;

const AddUsersGroupForm: React.FC<TAddUsersGroupForm> = ({
  onCancel,
  addUsersGroup,
  handleSubmit,
  dirty,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(addUsersGroup),
    [handleSubmit, addUsersGroup]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <UsersGroupFields />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
      />
    </form>
  );
};

export default reduxForm<{}, IAddUsersGroupForm>({
  form: formNamesConst.ADD_USERS_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddUsersGroupForm));
