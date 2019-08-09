import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons';
import { InputField, SelectField } from 'components/Form';

import { formNames, } from 'consts';

import { HandleFilterAuditUserActivities, HandleGetAuditUsers } from 'store/domains';
import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface UserActivitiesFilterFormProps {
  institutionsOptions: Array<SelectValues>;
  getAuditUsers?: HandleGetAuditUsers;
  currentInstitution: SelectValues;
  auditUsersOptions: Array<SelectValues>;
  isLoadingUsers: boolean;
  filterAuditUserActivities: HandleFilterAuditUserActivities;
}

type UserActivitiesFilterFormAllProps = UserActivitiesFilterFormProps &
  InjectedFormProps<{}, UserActivitiesFilterFormProps>;

const UserActivitiesFilterForm: React.FC<UserActivitiesFilterFormAllProps> = ({
  handleSubmit,
  filterAuditUserActivities,
  auditUsersOptions,
  institutionsOptions,
  getAuditUsers,
  currentInstitution,
  isLoadingUsers,
}) => {
  const currentInstitutionId = currentInstitution && currentInstitution.value;
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => filterAuditUserActivities(data)),
    [handleSubmit, filterAuditUserActivities ]
  );

  React.useEffect(
    () => {
       if (currentInstitutionId) {
        getAuditUsers(currentInstitutionId);
       }
    },
    [getAuditUsers, currentInstitutionId]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box width={[1, 1, 1, 1, 1000]} mx="-10px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 4]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={SelectField}
              label="Institution"
              placeholder="Select Institution"
              options={institutionsOptions}
              validate={[formErrorUtil.required]}
              isDisabled={false}
              isClearable={false}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="username"
              name="username"
              component={SelectField}
              label="User Name"
              options={auditUsersOptions}
              placeholder="Select Username"
              validate={[formErrorUtil.required]}
              isDisabled={false}
              isLoading={isLoadingUsers}
            />
          </Box>
          <Box width="175px" p="10px" >
            <Field
              id="datetimeFrom"
              name="datetimeFrom"
              placeholder="dd/mm/yyyy"
              validate={[formErrorUtil.required]}
              component={InputField}
              label="Date From"
              isDisabled={false}
            />
          </Box>
          <Box width="175px" p="10px" >
            <Field
              id="datetimeTo"
              name="datetimeTo"
              placeholder="dd/mm/yyyy"
              component={InputField}
              validate={[formErrorUtil.required]}
              label="Date To"
              isDisabled={false}
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Show"
        cancelText="Reset"
        disabledCancel={true}
      />
    </form >
  );
};

export default reduxForm<{}, UserActivitiesFilterFormProps>({
  form: formNames.AUDIT_USER_ACTIVITIES_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(UserActivitiesFilterForm);
