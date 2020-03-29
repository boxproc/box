import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { UsersGroupFields } from 'containers/Administration/Permission/UsersGroups/components';

import { THandleAddUsersGroup } from 'store';

interface IEditUsersGroupFrom extends ISpinner {
  updateUsersGroup: THandleAddUsersGroup;
  isReadOnly: boolean;
  onCancel: () => void;
}

type TEditUsersGroupFrom = IEditUsersGroupFrom & InjectedFormProps<{}, IEditUsersGroupFrom>;

const EditUsersGroupFrom: React.FC<TEditUsersGroupFrom> = ({
  onCancel,
  handleSubmit,
  updateUsersGroup,
  dirty,
  pristine,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(updateUsersGroup),
    [handleSubmit, updateUsersGroup]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <UsersGroupFields
        isEditMode={true}
        isReadOnly={isReadOnly}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        disabledOk={pristine}
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, IEditUsersGroupFrom>({
  form: formNamesConst.EDIT_GENERAL_INFO_USERS_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditUsersGroupFrom));
