import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { GeneralUserGroupInfo } from 'containers/Administration/Permission/UsersGroup/components';

import { HandleAddAdminUsersGroups } from 'store/domains';

export interface EditGeneralInfoUserGroupFromProps extends ExternalSpinnerProps {
  onCancel: () => void;
  updateAdminUsersGroup: HandleAddAdminUsersGroups;
}

type EditGeneralInfoUserGroupFromPropsAllProps = EditGeneralInfoUserGroupFromProps &
  InjectedFormProps<{}, EditGeneralInfoUserGroupFromProps>;

const EditGeneralInfoUserGroupFrom: React.FC<EditGeneralInfoUserGroupFromPropsAllProps> = ({
  onCancel,
  handleSubmit,
  updateAdminUsersGroup,
  dirty,
  pristine,
  submitting,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateAdminUsersGroup(data)),
    [handleSubmit, updateAdminUsersGroup]
  );
  return (
    <form onSubmit={handleSubmitForm}>
      <GeneralUserGroupInfo
        isEditMode={true}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        disabledOk={pristine || submitting}
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
      />
    </form>
  );
};

export default reduxForm<{}, EditGeneralInfoUserGroupFromProps>({
  form: formNamesConst.EDIT_GENERAL_INFO_USER_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditGeneralInfoUserGroupFrom));
