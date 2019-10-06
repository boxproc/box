import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, SelectField } from 'components';

import { HandleGetCyclesDescriptions, HandleGetInstitutionProducts } from 'store/domains';

import { dateFormat, maskFormat, statusTypesOptions } from 'consts';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface CustomerInfoProps {
  institutionsOptions: Array<SelectValues>;
  institutionProductsOptions: Array<SelectValues>;
  isLoadingInstitutionProducts: boolean;
  isLoadingCyclesDescriptions: boolean;
  getInstitutionProducts: HandleGetInstitutionProducts;
  getCyclesDescriptions: HandleGetCyclesDescriptions;
  cyclesDescriptionsOptions: Array<SelectValues>;
  currentInstitution: SelectValues;
  isEditMode: boolean;
  hasProductOverride: boolean;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  institutionsOptions,
  currentInstitution,
  institutionProductsOptions,
  isLoadingInstitutionProducts,
  isLoadingCyclesDescriptions,
  getInstitutionProducts,
  getCyclesDescriptions,
  cyclesDescriptionsOptions,
  isEditMode = false,
  hasProductOverride,
}) => {
  React.useEffect(
    () => {
      getInstitutionProducts(currentInstitution && currentInstitution.value);
      getCyclesDescriptions({
        institutionId: currentInstitution && currentInstitution.value,
      });
    },
    [getInstitutionProducts, getCyclesDescriptions, currentInstitution]
  );

  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        {isEditMode && (
          <Box width={[1 / 6]} p="10px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              placeholder="Enter ID"
              disabled={true}
              isNumber={true}
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
        <Box width={[1 / 6]} p="10px">
          <Field
            id="customerId"
            name="customerId"
            component={InputField}
            label="Customer ID"
            placeholder="Enter ID"
            disabled={isEditMode}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="accountAlias"
            name="accountAlias"
            component={InputField}
            label="Account Alias"
            placeholder="Enter Account Alias"
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="accountAliasAdditional"
            name="accountAliasAdditional"
            component={InputField}
            label="Account Alias Additional"
            placeholder="Enter Account Alias"
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
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
          <Box width={[1 / 6]} p="10px">
            <Field
              id="productId"
              name="productId"
              component={InputField}
              label="Product ID"
              placeholder="Enter ID"
              disabled={isEditMode}
              isNumber={true}
              validate={[formErrorUtil.required]}
            />
          </Box>
        )}
        {hasProductOverride && (
          <Box width={[1 / 6]} p="10px">
            <Field
              id="productOverrideId"
              name="productOverrideId"
              component={InputField}
              label="Product Override ID"
              placeholder="Enter ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
        )}
        {hasProductOverride && (
          <Box width={[1 / 5]} p="10px">
            <Field
              id="dateOfProductOverride"
              name="dateOfProductOverride"
              component={InputField}
              label="Date of Product Override"
              placeholder={dateFormat.DATE}
              mask={maskFormat.DATE_TIME}
              maskChar={null}
              disabled={true}
            />
          </Box>
        )}
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
            id="cycleStatement"
            name="cycleStatement"
            component={SelectField}
            label="Statement Cycle"
            placeholder="Select Statement Cycle"
            options={cyclesDescriptionsOptions}
            isDisabled={isEditMode}
            isLoading={isLoadingCyclesDescriptions}
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
                placeholder={dateFormat.DATE}
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
