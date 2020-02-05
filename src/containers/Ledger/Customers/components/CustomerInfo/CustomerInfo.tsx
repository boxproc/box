import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, Hr, InputField, MaskField, SelectField, T4 } from 'components';

import {
  customerStatusOptions,
  dateFormat,
  identificationTypesOptions,
  maskFormat
} from 'consts';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface CustomerInfoProps {
  institutionsOptions: Array<SelectValue>;
  isEditMode?: boolean;
  isIdentification: boolean;
  countryCodes: Array<SelectValue>;
  isCountryCodesLoading: boolean;
  isReadOnly: boolean;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  institutionsOptions,
  countryCodes,
  isEditMode = false,
  isIdentification,
  isCountryCodesLoading,
  isReadOnly,
}) => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        {isEditMode && (
          <Box width="100px" p="8px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              placeholder="Enter ID"
              readOnly={true}
            />
          </Box>
        )}
        <Box width={[1 / 5]} p="8px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isEditMode || isReadOnly}
            isClearable={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="180px" p="8px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={customerStatusOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="180px" p="8px">
          <Field
            id="identificationType"
            name="identificationType"
            component={SelectField}
            options={identificationTypesOptions}
            label="Identification Type"
            placeholder="Select Type"
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        {isIdentification && (
          <Box width="180px" p="8px">
            <Field
              id="identificationNumber"
              name="identificationNumber"
              component={InputField}
              label="Identification Number"
              placeholder="Enter Number"
              readOnly={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
        )}
        <Delimiter />
        <Box width={[1 / 5]} p="8px">
          <Field
            id="firstName"
            name="firstName"
            component={InputField}
            label="First Name"
            placeholder="Enter First Name"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="lastName"
            name="lastName"
            component={InputField}
            label="Last Name"
            placeholder="Enter Last Name"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="160px" p="8px">
          <Field
            id="dateOfBirth"
            name="dateOfBirth"
            component={MaskField}
            label="Date of Birth"
            placeholder={dateFormat.DATE}
            mask={maskFormat.DATE}
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isDate,
            ]}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="email"
            name="email"
            component={InputField}
            label="Email"
            placeholder="Enter Email"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.email,
            ]}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="mobilePhoneNumber"
            name="mobilePhoneNumber"
            component={InputField}
            label="Mobile Phone Number"
            placeholder="Enter Phone Number"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Hr />
        <Box width="100%" px="10px">
          <T4>Address</T4>
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="nationalityCountryCode"
            name="nationalityCountryCode"
            component={SelectField}
            options={countryCodes}
            isLoading={isCountryCodesLoading}
            label="Nationality Country Code"
            placeholder="Select Nationality Country Code"
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressCountryCode"
            name="addressCountryCode"
            component={SelectField}
            options={countryCodes}
            isLoading={isCountryCodesLoading}
            label="Address Country Code"
            placeholder="Select Country Code"
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressLine1"
            name="addressLine1"
            component={InputField}
            label="Line 1"
            placeholder="Enter Line 1"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressLine2"
            name="addressLine2"
            component={InputField}
            label="Line 2"
            placeholder="Enter Line 2"
            readOnly={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressLine3"
            name="addressLine3"
            component={InputField}
            label="Line 3"
            placeholder="Enter Line 3"
            readOnly={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressLine4"
            name="addressLine4"
            component={InputField}
            label="Line 4"
            placeholder="Enter Line 4"
            readOnly={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressTown"
            name="addressTown"
            component={InputField}
            label="Town"
            placeholder="Enter Town"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressPostCode"
            name="addressPostCode"
            component={InputField}
            label="Post Code"
            placeholder="Enter Post Code"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        {isEditMode && (
          <React.Fragment>
            <Hr />
            <Box width="180px" p="8px">
              <Field
                id="dateCreated"
                name="dateCreated"
                component={InputField}
                label="Date Created"
                readOnly={true}
              />
            </Box>
            <Box width="180px" p="8px">
              <Field
                id="dateClosed"
                name="dateClosed"
                component={InputField}
                label="Date Closed"
                readOnly={true}
              />
            </Box>
          </React.Fragment>
        )}
      </Flex>
    </Box>
  );
};

export default CustomerInfo;
