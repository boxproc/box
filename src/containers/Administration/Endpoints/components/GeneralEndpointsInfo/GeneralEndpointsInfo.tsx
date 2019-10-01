import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField, TextField } from 'components';

import { endpointsOptions, statusTypesOptions } from 'consts';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface GeneralEndpointsInfoProps {
  institutionsOptions: Array<SelectValues>;
  isDisabledInstitutions?: boolean;
}

const GeneralEndpointsInfo: React.FC<GeneralEndpointsInfoProps> = ({
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
            options={institutionsOptions}
            isDisabled={isDisabledInstitutions}
            isClearable={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="name"
            name="name"
            component={InputField}
            label="Name"
            placeholder="Enter name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="port"
            name="port"
            component={InputField}
            label="Port"
            placeholder="Enter port"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={statusTypesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="type"
            name="type"
            component={SelectField}
            label="Type"
            options={endpointsOptions}
            placeholder="Select Type"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[2 / 3]} p="10px">
          <Field
            id="privateKeyLocation"
            name="privateKeyLocation"
            component={InputField}
            label="Private Key Location"
            placeholder="Enter Private Key Location"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="connectionAttributes"
            name="connectionAttributes"
            component={TextField}
            label="Connection Attributes"
            placeholder="Enter Connection Attributes"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralEndpointsInfo;
