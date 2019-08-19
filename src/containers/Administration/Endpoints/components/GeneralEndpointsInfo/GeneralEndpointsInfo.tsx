import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField } from 'components/Form';

import { statusTypesOptions } from 'consts';

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
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="name"
            name="name"
            component={InputField}
            label="Endpoint  name"
            placeholder="Enter Endpoint name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="port"
            name="port"
            component={InputField}
            label="Endpoint  port"
            placeholder="Enter Endpoint port"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="privateKeyLocation"
            name="privateKeyLocation"
            component={InputField}
            label="Endpoint  Private Key Location"
            placeholder="Enter Endpoint  Private Key Location"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Endpoint  Status"
            placeholder="Select Endpoint Status"
            options={statusTypesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="connectionAttributes"
            name="connectionAttributes"
            component={InputField}
            label="Endpoint  Connection Attributes"
            placeholder="Enter Endpoint Connection Attributes"
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralEndpointsInfo;
