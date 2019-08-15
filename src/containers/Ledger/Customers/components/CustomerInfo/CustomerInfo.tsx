import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CalendarField, InputField, MaskField, SelectField } from 'components/Form';
import { Delimiter, Hr } from 'components/Text';

import { customerStatusTypesOptions, dateFormat, maskFormat } from 'consts';

import { SelectValues } from 'types';

import {
  withLoadCountryCodes,
  WithLoadCountryCodesProps,
} from 'components/HOCs';
import { formErrorUtil } from 'utils';

interface CustomerInfoProps {
  institutionsOptions: Array<SelectValues>;
  isDisabledInstitution?: boolean;
  isDisabledStatus?: boolean;
}

type CustomerInfoAllProps = CustomerInfoProps & WithLoadCountryCodesProps;

const CustomerInfo: React.FC<CustomerInfoAllProps> = ({
  institutionsOptions,
  isDisabledInstitution,
  isDisabledStatus,
  countryCodes,
  isCountryCodesLoading,
}) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isDisabledInstitution}
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
            isDisabled={isDisabledStatus}
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
            component={CalendarField}
            label="Date of Birth"
            placeholder={dateFormat.FORMAT}
            validate={[formErrorUtil.required]}
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
            component={MaskField}
            label="Mobile Phone Number"
            placeholder="Enter Mobile Phone Number"
            mask={maskFormat.PHONE}
            maskChar={null}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Hr />
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressLine1"
            name="addressLine1"
            component={InputField}
            label="Address Line 1"
            placeholder="Enter Address Line 1"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressLine2"
            name="addressLine2"
            component={InputField}
            label="Address Line 2"
            placeholder="Enter Address Line 2"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressLine3"
            name="addressLine3"
            component={InputField}
            label="Address Line 3"
            placeholder="Enter Address Line 3"
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressLine4"
            name="addressLine4"
            component={InputField}
            label="Address Line 4"
            placeholder="Enter Address Line 4"
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressTown"
            name="addressTown"
            component={InputField}
            label="Address Town"
            placeholder="Enter Address Town"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="addressPostCode"
            name="addressPostCode"
            component={InputField}
            label="Address Post Code"
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
        <Delimiter />
        <Box width="180px" p="10px">
          <Field
            id="dateCreated"
            name="dateCreated"
            component={InputField}
            label="Date Created"
            disabled={true}
          />
        </Box>
        <Box width="180px" p="10px">
          <Field
            id="dateClosed"
            name="dateClosed"
            component={InputField}
            label="Date Closed"
            disabled={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default withLoadCountryCodes(CustomerInfo);
