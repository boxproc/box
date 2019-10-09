import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { MaskField, SelectField } from 'components';

import { dateFormat, maskFormat, } from 'consts';

import { HandleGetAuditUsers } from 'store/domains';
import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';

interface UserActivityFilterProps {
  institutionsOptions: Array<SelectValues>;
  getAuditUsers: HandleGetAuditUsers;
  currentInstitution: SelectValues;
  auditUsersOptions: Array<SelectValues>;
  isLoadingUsers: boolean;
}

const UserActivityFilter: React.FC<UserActivityFilterProps> = ({
  auditUsersOptions,
  institutionsOptions,
  getAuditUsers,
  currentInstitution,
  isLoadingUsers,
}) => {
  const currentInstitutionId = currentInstitution && currentInstitution.value;

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getAuditUsers(currentInstitutionId);
      }
    },
    [getAuditUsers, currentInstitutionId]
  );

  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isDisabled={false}
          isClearable={false}
          validate={[formErrorUtil.required]}
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
          isDisabled={false}
          isLoading={isLoadingUsers}
        />
      </Box>
      <Box width="200px" p="10px" >
        <Field
          id="dateTimeFrom"
          name="dateTimeFrom"
          component={MaskField}
          label="Date / Time From"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          maskChar={null}
          disabled={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width="200px" p="10px" >
        <Field
          id="dateTimeTo"
          name="dateTimeTo"
          component={MaskField}
          label="Date / Time To"
          placeholder={dateFormat.DATE_TIME}
          mask={maskFormat.DATE_TIME}
          maskChar={null}
          disabled={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
    </React.Fragment>
  );
};

export default UserActivityFilter;
