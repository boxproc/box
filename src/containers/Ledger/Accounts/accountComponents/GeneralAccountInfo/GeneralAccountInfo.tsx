import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CalendarField, InputField, SelectField } from 'components/Form';
import { Hr } from 'components/Text';

import { statementCyclesOptions, statusTypesOptions } from 'consts';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface CustomerInfoProps {
  institutionsOptions: Array<SelectValues>;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  institutionsOptions,
}) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[2 / 5]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="100px" p="10px">
          <Field
            id="customerId"
            name="customerId"
            component={InputField}
            label="Customer ID"
            placeholder="Enter ID"
            disabled={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[2 / 5]} p="10px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={statusTypesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="accountAlias"
            name="accountAlias"
            component={InputField}
            label="Account Alias"
            placeholder="Enter Account Alias"
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="accountAliasAdditional"
            name="accountAliasAdditional"
            component={InputField}
            label="Account Alias Additional"
            placeholder="Enter Account Alias Additional"
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="productName"
            name="productName"
            component={InputField}
            label="Product Name"
            placeholder="Enter Product Name"
            disabled={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Hr />
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceSettled"
            name="balanceSettled"
            component={InputField}
            label="Balance Settled"
            placeholder="Enter Balance Settled"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceAvailable"
            name="balanceAvailable"
            component={InputField}
            label="Balance Available"
            placeholder="Enter Balance Available"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="amountDueRepayment"
            name="amountDueRepayment"
            component={InputField}
            label="Amount Due Repayment"
            placeholder="Enter Amount Due Repayment"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceLimit"
            name="balanceLimit"
            component={InputField}
            label="Balance Limit"
            placeholder="Enter Balance Limit"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceLimitShared"
            name="balanceLimitShared"
            component={InputField}
            label="Balance Limit Shared"
            placeholder="Enter Balance Limit Shared"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="accruedInterest"
            name="accruedInterest"
            component={InputField}
            label="Accrued Interest"
            placeholder="Enter Accrued Interest"
            disabled={true}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Hr />
        <Box width={[1 / 2]} p="10px">
          <Field
            id="statementCycleId"
            name="statementCycleId"
            component={SelectField}
            label="Statement Cycle"
            placeholder="Select Statement Cycle"
            options={statementCyclesOptions}
            isDisabled={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="lastCycleDate"
            name="lastCycleDate"
            component={CalendarField}
            label="Last Cycle Date"
            placeholder="dd/mm/yyyy"
            disabled={true}
          />
        </Box>
        <Hr />
        <Box width={[1 / 4]} p="10px">
          <Field
            id="dateCreated"
            name="dateCreated"
            component={CalendarField}
            label="Date Created"
            placeholder="dd/mm/yyyy"
            disabled={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="dateClosed"
            name="dateClosed"
            component={CalendarField}
            label="Date Closed"
            placeholder="dd/mm/yyyy"
            disabled={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CustomerInfo;
