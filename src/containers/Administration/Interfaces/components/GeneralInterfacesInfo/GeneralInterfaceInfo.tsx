import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField, TextField } from 'components';

import { protocolTypesOptions, statusTypesOptions, typeOfInterfacesCodes } from 'consts';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface GeneralInterfacesInfoProps {
  institutionsOptions: Array<SelectValues>;
  isDisabledInstitutions?: boolean;
}

const GeneralInterfaceInfo: React.FC<GeneralInterfacesInfoProps> = ({
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
            placeholder="Enter Name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="url"
            name="url"
            component={InputField}
            label="URL"
            placeholder="Enter URL"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="privateKeyLocation"
            name="privateKeyLocation"
            component={InputField}
            label="Private Key Location"
            placeholder="Enter Private Key Location"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[3 / 11]} p="10px">
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
        <Box width={[5 / 11]} p="10px">
          <Field
            id="type"
            name="type"
            component={SelectField}
            label="Type"
            placeholder="Select Type"
            options={typeOfInterfacesCodes}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[3 / 11]} p="10px">
          <Field
            id="protocolType"
            name="protocolType"
            component={SelectField}
            label="Protocol Type"
            placeholder="Select Type"
            options={protocolTypesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="logFileLocation"
            name="logFileLocation"
            component={InputField}
            label="Log File Location Attributes"
            placeholder="Enter Log File Location"
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

export default GeneralInterfaceInfo;
