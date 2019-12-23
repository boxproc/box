import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

import { GeneralUserGroupInfo } from 'containers/Administration/Permission/UsersGroup/components';

import { HandleAddAdminUsersGroups } from 'store/domains';

export interface EditGeneralInfoUserGroupFromProps extends ExternalSpinnerProps {
  onCancel: () => void;
  updateAdminUsersGroup: HandleAddAdminUsersGroups;
  isReadOnly: boolean;
}

type EditGeneralInfoUserGroupFromPropsAllProps = EditGeneralInfoUserGroupFromProps &
  InjectedFormProps<{}, EditGeneralInfoUserGroupFromProps>;

const EditGeneralInfoUserGroupFrom: React.FC<EditGeneralInfoUserGroupFromPropsAllProps> = ({
  onCancel,
  handleSubmit,
  updateAdminUsersGroup,
  dirty,
  pristine,
  isReadOnly,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(updateAdminUsersGroup),
    [handleSubmit, updateAdminUsersGroup]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <GeneralUserGroupInfo
        isEditMode={true}
        isReadOnly={isReadOnly}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        disabledOk={pristine}
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, EditGeneralInfoUserGroupFromProps>({
  form: formNamesConst.EDIT_GENERAL_INFO_USER_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditGeneralInfoUserGroupFrom));
