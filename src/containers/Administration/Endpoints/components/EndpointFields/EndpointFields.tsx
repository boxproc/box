import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField, TextField } from 'components';

import { statusOptions } from 'consts';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

export interface EndpointFieldsProps {
  institutionsOptions: Array<SelectValue>;
  endpointTypesOptions: Array<SelectValue>;
  isDisabledInstitutions?: boolean;
  isLoadingTypesSelector: boolean;
  isReadOnly: boolean;
  isEditMode: boolean;
}

const EndpointFields: React.FC<EndpointFieldsProps> = ({
  institutionsOptions,
  endpointTypesOptions,
  isDisabledInstitutions,
  isLoadingTypesSelector,
  isReadOnly,
  isEditMode,
}) => {
  return (
    <Box mx="-10px" >
      <Flex flexWrap="wrap">
        <Box width={[1 / 2]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            placeholder="Select Institution"
            component={SelectField}
            label="Institution"
            options={institutionsOptions}
            isDisabled={isDisabledInstitutions || isReadOnly}
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
            readOnly={isReadOnly}
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
            readOnly={isReadOnly}
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
            options={statusOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="endpointTypeId"
            name="endpointTypeId"
            component={SelectField}
            label="Type"
            options={endpointTypesOptions}
            placeholder="Select Type"
            isDisabled={isReadOnly}
            isLoading={isLoadingTypesSelector}
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
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="logFileLocation"
            name="logFileLocation"
            component={InputField}
            label="Log File Location"
            placeholder="Enter Log File Location"
            readOnly={isReadOnly}
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
            readOnly={isReadOnly}
          />
        </Box>
        {isEditMode && (
          <React.Fragment>
            <Box width={[1 / 3]} p="10px">
              <Field
                id="sourceIpAddress"
                name="sourceIpAddress"
                component={InputField}
                label="Source IP Address"
                placeholder="Enter Source IP Address"
                readOnly={true}
              />
            </Box>
            <Box width={[1 / 3]} p="10px">
              <Field
                id="lastMessageDatetime"
                name="lastMessageDatetime"
                component={InputField}
                label="Last Message Datetime"
                placeholder="Enter Last Message Datetime"
                readOnly={true}
              />
            </Box>
            <Box width={[1 / 3]} p="10px">
              <Field
                id="lastFaultDatetime"
                name="lastFaultDatetime"
                component={InputField}
                label="Last Fault Datetime"
                placeholder="Enter Last Fault Datetime"
                readOnly={true}
              />
            </Box>
          </React.Fragment>
        )}
      </Flex>
    </Box>
  );
};

export default EndpointFields;