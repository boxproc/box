import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, SelectField } from 'components/Form';
import { Hr } from 'components/Text';

import { HandleGetInstitutionProducts } from 'store/domains';

import {
  dateFormat,
  statementCyclesOptions,
  statusTypesOptions,
} from 'consts';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface CustomerInfoProps {
  institutionsOptions: Array<SelectValues>;
  institutionProductsOptions: Array<SelectValues>;
  isLoadingInstitutionProducts: boolean;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValues;
  isEditMode: boolean;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  institutionsOptions,
  institutionValue,
  institutionProductsOptions,
  isLoadingInstitutionProducts,
  getInstitutionProducts,
  isEditMode = false,
}) => {
  const currentInstitutionId = institutionValue && institutionValue.value;

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getInstitutionProducts(currentInstitutionId);
      }
    },
    [getInstitutionProducts, currentInstitutionId]
  );

  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 3]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isEditMode}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="productName"
            name="productName"
            component={SelectField}
            label="Product"
            placeholder="Select Product"
            isDisabled={isEditMode}
            options={institutionProductsOptions}
            isLoading={isLoadingInstitutionProducts}
            validate={[formErrorUtil.required]}
          />
        </Box>
        {isEditMode && (
          <Box width="150px" p="10px">
            <Field
              id="productId"
              name="productId"
              component={InputField}
              label="Product ID"
              placeholder="Enter ID"
              disabled={isEditMode}
              validate={[formErrorUtil.required]}
            />
          </Box>
        )}
        <Box width={[1 / 4]} p="10px">
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
        <Box width={[1 / 4]} p="10px">
          <Field
            id="accountAlias"
            name="accountAlias"
            component={InputField}
            label="Account Alias"
            placeholder="Enter Account Alias"
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="accountAliasAdditional"
            name="accountAliasAdditional"
            component={InputField}
            label="Account Alias Additional"
            placeholder="Enter Account Alias Additional"
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="customerId"
            name="customerId"
            component={InputField}
            label="Customer ID"
            placeholder="Enter ID"
            disabled={isEditMode}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Hr />
        <Box width={[isEditMode ? 1 / 6 : 1 / 4]} p="10px">
          <Field
            id="balanceSettled"
            name="balanceSettled"
            component={InputField}
            label="Balance Settled"
            placeholder="Enter Balance Settled"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 6 : 1 / 4]} p="10px">
          <Field
            id="balanceAvailable"
            name="balanceAvailable"
            component={InputField}
            label="Balance Available"
            placeholder="Enter Balance Available"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 6 : 1 / 4]} p="10px">
          <Field
            id="amountDueRepayment"
            name="amountDueRepayment"
            component={InputField}
            label="Amount Due Repayment"
            placeholder="Enter Amount Due Repayment"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 6 : 1 / 4]} p="10px">
          <Field
            id="balanceLimit"
            name="balanceLimit"
            component={InputField}
            label="Balance Limit"
            placeholder="Enter Balance Limit"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 6 : 1 / 4]} p="10px">
          <Field
            id="balanceLimitShared"
            name="balanceLimitShared"
            component={InputField}
            label="Balance Limit Shared"
            placeholder="Enter Balance Limit Shared"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[isEditMode ? 1 / 6 : 1 / 4]} p="10px">
          <Field
            id="accruedInterest"
            name="accruedInterest"
            component={InputField}
            label="Accrued Interest"
            placeholder="Enter Accrued Interest"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="statementCycleId"
            name="statementCycleId"
            component={SelectField}
            label="Statement Cycle"
            placeholder="Select Statement Cycle"
            options={statementCyclesOptions}
            isDisabled={isEditMode}
            validate={[formErrorUtil.required]}
          />
        </Box>
        {isEditMode && (
          <React.Fragment>
            <Box width={[1 / 4]} p="10px">
              <Field
                id="lastCycleDate"
                name="lastCycleDate"
                component={InputField}
                label="Last Cycle Date"
                placeholder={dateFormat.FORMAT}
                disabled={true}
              />
            </Box>
            <Box width={[1 / 4]} p="10px">
              <Field
                id="dateCreated"
                name="dateCreated"
                component={InputField}
                label="Date Created"
                disabled={true}
              />
            </Box>
            <Box width={[1 / 4]} p="10px">
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
