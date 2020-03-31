import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { MaskField, SelectField } from 'components';

import { dateFormatConst, maskFormatConst, } from 'consts';

import { THandleGetUsersActivityUsers } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IUsersActivityFilter {
  institutionsOptions: Array<ISelectValue>;
  getUsers: THandleGetUsersActivityUsers;
  currentInstitution: ISelectValue;
  usersOptions: Array<ISelectValue>;
  isLoadingUsers: boolean;
  isDisabled: boolean;
}

const UsersActivityFilter: React.FC<IUsersActivityFilter> = ({
  usersOptions,
  institutionsOptions,
  getUsers,
  currentInstitution,
  isLoadingUsers,
  isDisabled,
}) => {
  const currentInstitutionId = currentInstitution && currentInstitution.value;

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getUsers(currentInstitutionId);
      }
    },
    [getUsers, currentInstitutionId]
  );

  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isClearable={false}
          isDisabled={isDisabled}
          isRequired={true}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="username"
          name="username"
          component={SelectField}
          label="User Name"
          options={usersOptions}
          placeholder="Select Username"
          isLoading={isLoadingUsers}
          disabled={isDisabled}
        />
      </Box>
      <Box width="180px" p="8px" >
        <Field
          id="usersActivityDateTimeFrom"
          name="usersActivityDateTimeFrom"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time From"
          placeholder={dateFormatConst.DATE_TIME}
          mask={maskFormatConst.DATE_TIME}
          disabled={isDisabled}
          isRequired={true}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Box width="180px" p="8px" >
        <Field
          id="usersActivityDateTimeTo"
          name="usersActivityDateTimeTo"
          component={MaskField}
          label="Date&nbsp;/&nbsp;Time To"
          placeholder={dateFormatConst.DATE_TIME}
          mask={maskFormatConst.DATE_TIME}
          disabled={isDisabled}
          isRequired={true}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
    </React.Fragment>
  );
};

export default UsersActivityFilter;
