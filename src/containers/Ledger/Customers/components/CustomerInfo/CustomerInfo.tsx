import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, Hr, InputField, MaskField, SelectField, T4 } from 'components';

import {
  customerStatusOptions,
  dateFormatConst,
  identificationTypesOptions,
  maskFormatConst
} from 'consts';

import { ISelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface ICustomerInfo {
  institutionsOptions: Array<ISelectValue>;
  isEditMode?: boolean;
  isIdentification: boolean;
  countryCodes: Array<ISelectValue>;
  isCountryCodesLoading: boolean;
  isReadOnly: boolean;
}

const CustomerInfo: React.FC<ICustomerInfo> = ({
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
              disabled={true}
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
            validate={[formErrorUtil.isRequired]}
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
            validate={[formErrorUtil.isRequired]}
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
            validate={[formErrorUtil.isRequired]}
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
              disabled={isReadOnly}
              validate={[formErrorUtil.isRequired]}
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
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isAlpha,
            ]}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="lastName"
            name="lastName"
            component={InputField}
            label="Last Name"
            placeholder="Enter Last Name"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isAlpha,
            ]}
          />
        </Box>
        <Box width="160px" p="8px">
          <Field
            id="dateOfBirth"
            name="dateOfBirth"
            component={MaskField}
            label="Date of Birth"
            placeholder={dateFormatConst.DATE}
            mask={maskFormatConst.DATE}
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
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
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isEmail,
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
            disabled={isReadOnly}
            // tslint:disable-next-line: max-line-length
            hint="Phone number must be supplied with the country code and therefore must start with +."
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isMobilePhone,
            ]}
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
            validate={[formErrorUtil.isRequired]}
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
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressLine1"
            name="addressLine1"
            component={InputField}
            label="Line 1"
            placeholder="Enter Line 1"
            disabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressLine2"
            name="addressLine2"
            component={InputField}
            label="Line 2"
            placeholder="Enter Line 2"
            disabled={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressLine3"
            name="addressLine3"
            component={InputField}
            label="Line 3"
            placeholder="Enter Line 3"
            disabled={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressLine4"
            name="addressLine4"
            component={InputField}
            label="Line 4"
            placeholder="Enter Line 4"
            disabled={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressTown"
            name="addressTown"
            component={InputField}
            label="Town"
            placeholder="Enter Town"
            disabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="addressPostCode"
            name="addressPostCode"
            component={InputField}
            label="Post Code"
            placeholder="Enter Post Code"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isPostalCode,
            ]}
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
                disabled={true}
              />
            </Box>
            <Box width="180px" p="8px">
              <Field
                id="dateClosed"
                name="dateClosed"
                component={InputField}
                label="Date Closed"
                disabled={true}
              />
            </Box>
          </React.Fragment>
        )}
      </Flex>
    </Box>
  );
};

export default CustomerInfo;
