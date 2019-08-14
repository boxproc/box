import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

// tslint:disable-next-line: max-line-length
import { GeneralUserGroupInfo } from 'containers/Administration/Permission/UsersGroup/UsersGroupComponents';

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
        isDisabledInstitutions={true}
      />
      <Hr/>
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        disabledOk={!isDirty}
        onCancel={onCancel}
        rightPosition={true}
      />
    </form>
  );
};

export default reduxForm<{}, EditGeneralInfoUserGroupFromProps>({
  form: formNames.EDIT_GENERAL_INFO_USER_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditGeneralInfoUserGroupFrom));
