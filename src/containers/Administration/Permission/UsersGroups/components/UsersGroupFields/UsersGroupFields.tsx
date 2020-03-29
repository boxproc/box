import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField } from 'components';
import { THandleGetInstitutions } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IUsersGroupFields {
  institutionsOptions: Array<ISelectValue>;
  isEditMode?: boolean;
  isInstitutionsLoading: boolean;
  getInstitutions: THandleGetInstitutions;
  isReadOnly: boolean;
}

const UsersGroupFields: React.FC<IUsersGroupFields> = ({
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
    <Box mx="-8px" >
      <Flex flexWrap="wrap">
        <Box width={[isEditMode ? 1 / 2 : 1]} p="8px">
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
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 2 : 1]} p="8px">
          <Field
            id="name"
            name="name"
            component={InputField}
            label="Group Name"
            placeholder="Enter Group Name"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isAlphaNumeric,
            ]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default UsersGroupFields;
