import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField, TextField } from 'components';

import { statusOptions } from 'consts';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

export interface InterfaceFieldsProps {
  institutionsOptions: Array<SelectValue>;
  interfaceTypesOptions: Array<SelectValue>;
  isLoadingTypesSelector: boolean;
  isEditMode?: boolean;
  isReadOnly: boolean;
}

const InterfaceFields: React.FC<InterfaceFieldsProps> = ({
  institutionsOptions,
  interfaceTypesOptions,
  isLoadingTypesSelector,
  isEditMode,
  isReadOnly,
}) => {
  return (
    <Box mx="-8px" >
      <Flex flexWrap="wrap">
        <Box width={[1 / 3]} p="8px">
          <Field
            id="institutionId"
            name="institutionId"
            placeholder="Select Institution"
            component={SelectField}
            label="Institution"
            options={institutionsOptions}
            isDisabled={isEditMode || isReadOnly}
            isClearable={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="name"
            name="name"
            component={InputField}
            label="Name"
            placeholder="Enter Name"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="url"
            name="url"
            component={InputField}
            label="URL"
            placeholder="Enter URL"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
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
        <Box width={[1 / 4]} p="8px">
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
        <Box width={[1 / 4]} p="8px">
          <Field
            id="interfaceTypeId"
            name="interfaceTypeId"
            component={SelectField}
            label="Type"
            placeholder="Select Type"
            options={interfaceTypesOptions}
            isLoading={isLoadingTypesSelector}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="lastMessageDatetime"
            name="lastMessageDatetime"
            component={InputField}
            label="Last Message Datetime"
            placeholder="Last Message Datetime"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="lastFaultDatetime"
            name="lastFaultDatetime"
            component={InputField}
            label="Last Fault Datetime"
            placeholder="Last Fault Datetime"
            readOnly={true}
          />
        </Box>
        <Box width="100%">
          <Flex alignItems="flex-start">
            <Box width="50%" p="8px">
              <Field
                id="logFileLocation"
                name="logFileLocation"
                component={TextField}
                label="Log File Location Attributes"
                placeholder="Enter Log File Location"
                height={120}
                readOnly={isReadOnly}
                validate={[formErrorUtil.required]}
              />
            </Box>
            <Box width="50%" p="8px">
              <Field
                id="connectionAttributes"
                name="connectionAttributes"
                component={TextField}
                label="Connection Attributes"
                placeholder="Enter Connection Attributes"
                height={120}
                readOnly={isReadOnly}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default InterfaceFields;
