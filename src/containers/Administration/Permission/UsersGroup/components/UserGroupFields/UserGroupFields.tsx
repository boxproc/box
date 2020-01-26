import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField } from 'components';

import { HandleGetAdminInstitutions } from 'store/domains';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

export interface UserGroupFieldsProps {
  institutionsOptions: Array<SelectValue>;
  isEditMode?: boolean;
  isInstitutionsLoading: boolean;
  getInstitutions: HandleGetAdminInstitutions;
  isReadOnly: boolean;
}

const UserGroupFields: React.FC<UserGroupFieldsProps> = ({
  institutionsOptions,
  isEditMode,
  getInstitutions,
  isInstitutionsLoading,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getInstitutions();
    },
    [getInstitutions]
  );

  return (
    <Box mx="-10px" >
      <Flex
        flexWrap="wrap"
      >
        <Box width={[isEditMode ? 1 / 2 : 1]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            placeholder="Select Institution"
            component={SelectField}
            label="Institution"
            options={institutionsOptions}
            isDisabled={isEditMode || isReadOnly}
            isClearable={false}
            isLoading={isInstitutionsLoading}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 2 : 1]} p="10px">
          <Field
            id="name"
            name="name"
            component={InputField}
            label="Group Name"
            placeholder="Enter Group Name"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserGroupFields;
