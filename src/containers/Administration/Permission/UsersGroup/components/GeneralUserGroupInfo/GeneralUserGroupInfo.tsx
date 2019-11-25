import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField } from 'components';

import { HandleGetAdminInstitutions } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface GeneralUserGroupInfoProps {
  institutionsOptions: Array<SelectValues>;
  isEditMode?: boolean;
  isInstitutionsLoading: boolean;
  getAdminInstitutions: HandleGetAdminInstitutions;
}

const GeneralUserGroupInfo: React.FC<GeneralUserGroupInfoProps> = ({
  institutionsOptions,
  isEditMode,
  getAdminInstitutions,
  isInstitutionsLoading,
}) => {
  React.useEffect(
    () => {
      getAdminInstitutions();
    },
    [getAdminInstitutions]
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
            isDisabled={isEditMode}
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
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralUserGroupInfo;
