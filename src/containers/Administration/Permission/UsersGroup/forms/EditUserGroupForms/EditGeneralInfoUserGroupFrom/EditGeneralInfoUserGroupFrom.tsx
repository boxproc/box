import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Delimiter';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';

import { formNames } from 'consts';

import { GeneralUserGroupInfo } from 'containers/Administration/Permission/UsersGroup/components';

import { HandleAddAdminUsersGroups } from 'store/domains';

export interface EditGeneralInfoUserGroupFromProps extends ExternalSpinnerProps {
  onCancel: () => void;
  updateAdminUsersGroup: HandleAddAdminUsersGroups;
  isDirty: boolean;
}

type EditGeneralInfoUserGroupFromPropsAllProps = EditGeneralInfoUserGroupFromProps &
  InjectedFormProps<{}, EditGeneralInfoUserGroupFromProps>;

const EditGeneralInfoUserGroupFrom: React.FC<EditGeneralInfoUserGroupFromPropsAllProps> = ({
  onCancel,
  handleSubmit,
  updateAdminUsersGroup,
  isDirty,
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
        disabledOk={!isDirty}
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={isDirty}
      />
    </form>
  );
};

export default reduxForm<{}, EditGeneralInfoUserGroupFromProps>({
  form: formNames.EDIT_GENERAL_INFO_USER_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditGeneralInfoUserGroupFrom));
