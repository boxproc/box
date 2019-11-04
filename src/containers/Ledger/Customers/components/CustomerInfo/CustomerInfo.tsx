import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, MaskField, SelectField, T4 } from 'components';

import { withLoadCountryCodes, WithLoadCountryCodesProps } from 'HOCs';

import { customerStatusTypesOptions, dateFormat, maskFormat } from 'consts';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface CustomerInfoProps {
  institutionsOptions: Array<SelectValues>;
  isEditMode?: boolean;
}

type CustomerInfoAllProps = CustomerInfoProps & WithLoadCountryCodesProps;

const CustomerInfo: React.FC<CustomerInfoAllProps> = ({
  institutionsOptions,
  countryCodes,
  isCountryCodesLoading,
  isEditMode = false,
}) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        {isEditMode && (
          <Box width="100px" p="10px">
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
        <Box width={[1 / 5]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isEditMode}
            isClearable={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="180px" p="10px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={customerStatusTypesOptions}
            isDisabled={isEditMode}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="firstName"
            name="firstName"
            component={InputField}
            label="First Name"
            placeholder="Enter First Name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="lastName"
            name="lastName"
            component={InputField}
            label="Last Name"
            placeholder="Enter Last Name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="180px" p="10px">
          <Field
            id="dateOfBirth"
            name="dateOfBirth"
            component={MaskField}
            label="Date of Birth"
            placeholder={dateFormat.DATE}
            maskPlaceholder={dateFormat.DATE}
            validate={[formErrorUtil.required, formErrorUtil.isDate]}
            mask={maskFormat.DATE}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="email"
            name="email"
            component={InputField}
            label="Email"
            placeholder="Enter Email"
            validate={[formErrorUtil.required, formErrorUtil.email]}
          />
        </Box>
        <Box width="160px" p="10px">
          <Field
            id="mobilePhoneNumber"
            name="mobilePhoneNumber"
            component={InputField}
            label="Mobile Phone Number"
            placeholder="Enter Phone Number"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Hr />
        <Box width="100%" px="10px">
          <T4>Address</T4>
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressLine1"
            name="addressLine1"
            component={InputField}
            label="Line 1"
            placeholder="Enter Line 1"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressLine2"
            name="addressLine2"
            component={InputField}
            label="Line 2"
            placeholder="Enter Line 2"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressLine3"
            name="addressLine3"
            component={InputField}
            label="Line 3"
            placeholder="Enter Line 3"
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressLine4"
            name="addressLine4"
            component={InputField}
            label="Line 4"
            placeholder="Enter Line 4"
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressTown"
            name="addressTown"
            component={InputField}
            label="Town"
            placeholder="Enter Town"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressPostCode"
            name="addressPostCode"
            component={InputField}
            label="Post Code"
            placeholder="Enter Post Code"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="nationalityCountryCode"
            name="nationalityCountryCode"
            component={SelectField}
            options={countryCodes}
            isLoading={isCountryCodesLoading}
            label="Nationality Country Code"
            placeholder="Select Nationality Country Code"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressCountryCode"
            name="addressCountryCode"
            component={SelectField}
            options={countryCodes}
            isLoading={isCountryCodesLoading}
            label="Address Country Code"
            placeholder="Select Country Code"
            validate={[formErrorUtil.required]}
          />
        </Box>
        {isEditMode && (
          <React.Fragment>
            <Hr />
            <Box width="180px" p="10px">
              <Field
                id="dateCreated"
                name="dateCreated"
                component={InputField}
                label="Date Created"
                readOnly={true}
              />
            </Box>
            <Box width="180px" p="10px">
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

export default withLoadCountryCodes(CustomerInfo);
