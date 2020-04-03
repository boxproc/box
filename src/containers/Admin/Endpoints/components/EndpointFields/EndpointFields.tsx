import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField, TextareaField } from 'components';
import { statusOptions } from 'consts';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IEndpointFields {
  institutionsOptions: Array<ISelectValue>;
  endpointTypesOptions: Array<ISelectValue>;
  isLoadingTypesSelector: boolean;
  isReadOnly: boolean;
  isEditMode?: boolean;
}

const EndpointFields: React.FC<IEndpointFields> = ({
  institutionsOptions,
  endpointTypesOptions,
  isLoadingTypesSelector,
  isReadOnly,
  isEditMode,
}) => {
  return (
    <Box mx="-8px">
      <Flex flexWrap="wrap">
        <Box width={[1 / 2]} p="8px">
          <Field
            id="institutionId"
            name="institutionId"
            placeholder="Select Institution"
            component={SelectField}
            label="Institution"
            options={institutionsOptions}
            isDisabled={isEditMode || isReadOnly}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="name"
            name="name"
            component={InputField}
            label="Name"
            placeholder="Enter name"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isAlphaNumeric,
            ]}
          />
        </Box>
        <Box width={[1 / 3]} p="8px">
          <Field
            id="port"
            name="port"
            component={InputField}
            label="Port"
            placeholder="Enter port"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isPort,
            ]}
          />
        </Box>
        <Box width={[1 / 3]} p="8px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={statusOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1 / 3]} p="8px">
          <Field
            id="endpointTypeId"
            name="endpointTypeId"
            component={SelectField}
            label="Type"
            options={endpointTypesOptions}
            placeholder="Select Type"
            isDisabled={isReadOnly}
            isLoading={isLoadingTypesSelector}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1]} p="8px">
          <Field
            id="privateKeyLocation"
            name="privateKeyLocation"
            component={InputField}
            label="Private Key Location"
            placeholder="Enter Private Key Location"
            disabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1]} p="8px">
          <Field
            id="logFileLocation"
            name="logFileLocation"
            component={InputField}
            label="Log File Location"
            placeholder="Enter Log File Location"
            disabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1]} p="8px">
          <Field
            id="connectionAttributes"
            name="connectionAttributes"
            component={TextareaField}
            label="Connection Attributes"
            placeholder="Enter Connection Attributes"
            disabled={isReadOnly}
          />
        </Box>
        {isEditMode && (
          <React.Fragment>
            <Box width={[1 / 3]} p="8px">
              <Field
                id="sourceIpAddress"
                name="sourceIpAddress"
                component={InputField}
                label="Source IP Address"
                placeholder="Enter Source IP Address"
                disabled={true}
              />
            </Box>
            <Box width={[1 / 3]} p="8px">
              <Field
                id="lastMessageDatetime"
                name="lastMessageDatetime"
                component={InputField}
                label="Last Message Datetime"
                placeholder="Enter Last Message Datetime"
                disabled={true}
              />
            </Box>
            <Box width={[1 / 3]} p="8px">
              <Field
                id="lastFaultDatetime"
                name="lastFaultDatetime"
                component={InputField}
                label="Last Fault Datetime"
                placeholder="Enter Last Fault Datetime"
                disabled={true}
              />
            </Box>
          </React.Fragment>
        )}
      </Flex>
    </Box>
  );
};

export default EndpointFields;
