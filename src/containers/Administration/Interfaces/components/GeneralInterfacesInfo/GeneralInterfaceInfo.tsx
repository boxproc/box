import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField } from 'components/Form';

import { SelectValues } from 'types';

import { protocolTypesOptions, statusTypesOptions } from 'consts';
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
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="name"
            name="name"
            component={InputField}
            label="Interface  name"
            placeholder="Enter Interface name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="url"
            name="url"
            component={InputField}
            label="Interface  url"
            placeholder="Enter Interface url"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="privateKeyLocation"
            name="privateKeyLocation"
            component={InputField}
            label="Interface  Private Key Location"
            placeholder="Enter Interface  Private Key Location"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Interface  Status"
            placeholder="Select Interface Status"
            options={statusTypesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="protocolType"
            name="protocolType"
            component={SelectField}
            label="Interface  Protocol Type"
            placeholder="Select Interface Protocol Type"
            options={protocolTypesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="connectionAttributes"
            name="connectionAttributes"
            component={InputField}
            label="Interface  Connection Attributes"
            placeholder="Enter Interface Connection Attributes"
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralInterfaceInfo;
