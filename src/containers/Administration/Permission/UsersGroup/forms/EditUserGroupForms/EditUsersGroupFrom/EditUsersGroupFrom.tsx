import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { UserGroupFields } from 'containers/Administration/Permission/UsersGroup/components';

import { HandleAddAdminUsersGroups } from 'store/domains';

export interface EditUsersGroupFromProps extends ExternalSpinnerProps {
  updateUsersGroup: HandleAddAdminUsersGroups;
  isReadOnly: boolean;
  onCancel: () => void;
}

type EditUsersGroupFromPropsAllProps = EditUsersGroupFromProps &
  InjectedFormProps<{}, EditUsersGroupFromProps>;

const EditUsersGroupFrom: React.FC<EditUsersGroupFromPropsAllProps> = ({
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
      <UserGroupFields
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

export default reduxForm<{}, EditUsersGroupFromProps>({
  form: formNamesConst.EDIT_GENERAL_INFO_USER_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditUsersGroupFrom));
