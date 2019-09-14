import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, MaskField, SelectField } from 'components';

import { dateFormat, formNames, maskFormat, } from 'consts';

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
  isDirty: boolean;
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
  isDirty,
}) => {
  const currentInstitutionId = currentInstitution && currentInstitution.value;
  const handleSubmitForm = React.useCallback(
    handleSubmit(filterAuditUserActivities),
    [handleSubmit, filterAuditUserActivities]
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
      <Box width={[1000]} mx="-10px">
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
          <Box width="190px" p="10px" >
            <Field
              id="datetimeFrom"
              name="datetimeFrom"
              validate={[formErrorUtil.required]}
              component={MaskField}
              label="Date From"
              placeholder={dateFormat.DATE_TIME_FORMAT}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
              disabled={false}
            />
          </Box>
          <Box width="190px" p="10px" >
            <Field
              id="datetimeTo"
              name="datetimeTo"
              component={MaskField}
              validate={[formErrorUtil.required]}
              label="Date To"
              placeholder={dateFormat.DATE_TIME_FORMAT}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
              disabled={false}
            />
          </Box>
        </Flex>
        <Button
          text="Show"
          disabled={!isDirty}
        />
      </Box>
    </form >
  );
};

export default reduxForm<{}, UserActivitiesFilterFormProps>({
  form: formNames.AUDIT_USER_ACTIVITIES_FILTER,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(UserActivitiesFilterForm);
