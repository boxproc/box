import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { Field } from 'redux-form';

import { InputField, SelectField, TextareaField } from 'components';

import { statusOptions } from 'consts';

import { ISelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface IInterfaceFields {
  institutionsOptions: Array<ISelectValue>;
  interfaceTypesOptions: Array<ISelectValue>;
  isLoadingTypesSelector: boolean;
  isEditMode?: boolean;
  isReadOnly: boolean;
}

const InterfaceFields: React.FC<IInterfaceFields> = ({
  institutionsOptions,
  interfaceTypesOptions,
  isLoadingTypesSelector,
  isEditMode,
  isReadOnly,
}) => {
  return (
    <Box mx="-8px" >
      <Flex flexWrap="wrap">
        {isEditMode && (
          <Box width={[1 / 6]} p="8px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              disabled={true}
              isNumber={true}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
        )}
        <Box width={[isEditMode ? 1 / 3 : 1 / 2]} p="8px">
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
            placeholder="Enter Name"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isAlphaNumeric,
            ]}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="url"
            name="url"
            component={InputField}
            label="URL"
            placeholder="Enter URL"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isURL,
            ]}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
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
        <Box width={[1 / 4]} p="8px">
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
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        {isEditMode && (
          <React.Fragment>
            <Box width={[1 / 4]} p="8px">
              <Field
                id="lastMessageDatetime"
                name="lastMessageDatetime"
                component={InputField}
                label="Last Message Datetime"
                placeholder="Last Message Datetime"
                disabled={true}
              />
            </Box>
            <Box width={[1 / 4]} p="8px">
              <Field
                id="lastFaultDatetime"
                name="lastFaultDatetime"
                component={InputField}
                label="Last Fault Datetime"
                placeholder="Last Fault Datetime"
                disabled={true}
              />
            </Box>
          </React.Fragment>
        )}
        <Box width="100%">
          <Flex alignItems="flex-start">
            <Box width="50%" p="8px">
              <Field
                id="logFileLocation"
                name="logFileLocation"
                component={TextareaField}
                label="Log File Location Attributes"
                placeholder="Enter Log File Location"
                height={120}
                disabled={isReadOnly}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
            <Box width="50%" p="8px">
              <Field
                id="connectionAttributes"
                name="connectionAttributes"
                component={TextareaField}
                label="Connection Attributes"
                placeholder="Enter Connection Attributes"
                height={120}
                disabled={isReadOnly}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default InterfaceFields;
