import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField } from 'components/Form';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface GeneralUserGroupInfoProps {
  institutionsOptions: Array<SelectValues>;
  isDisabledInstitutions?: boolean;
}

const GeneralUserGroupInfo: React.FC<GeneralUserGroupInfoProps> = ({
  institutionsOptions,
  isDisabledInstitutions,
}) => {
  return (
    <Box mx="-10px" >
      <Flex
        flexWrap="wrap"
      >
        <Box width={[1 / 2]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            placeholder="Select Institution"
            component={SelectField}
            label="Institution"
            validate={[formErrorUtil.required]}
            options={institutionsOptions}
            isDisabled={isDisabledInstitutions}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="name"
            name="name"
            isSearchable={true}
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
