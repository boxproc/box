import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField } from 'components';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface GeneralUserGroupInfoProps {
  institutionsOptions: Array<SelectValues>;
  isEditMode?: boolean;
}

const GeneralUserGroupInfo: React.FC<GeneralUserGroupInfoProps> = ({
  institutionsOptions,
  isEditMode,
}) => {
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
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 2 : 1]} p="10px">
          <Field
            id="name"
            name="name"
            component={InputField}
            label="User group name"
            placeholder="Enter User group name"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralUserGroupInfo;
