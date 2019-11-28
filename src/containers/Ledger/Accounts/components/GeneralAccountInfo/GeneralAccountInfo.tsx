import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField, OkCancelButtons, SelectField } from 'components';

import { HandleGetCyclesDescriptions, HandleGetInstitutionProducts } from 'store/domains';

import { dateFormat, maskFormat, statusTypesOptions } from 'consts';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

export interface CustomerInfoProps {
  institutionsOptions: Array<SelectValues>;
  institutionProductsOptions: Array<SelectValues>;
  getInstitutionProducts: HandleGetInstitutionProducts;
  getCyclesDescriptions: HandleGetCyclesDescriptions;
  cyclesDescriptionsOptions: Array<SelectValues>;
  currentInstitution: SelectValues;
  isEditMode: boolean;
  hasProductOverride: boolean;
  onCancel: () => void;
  dirty: boolean;
  pristine: boolean;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  institutionsOptions,
  currentInstitution,
  institutionProductsOptions,
  getInstitutionProducts,
  getCyclesDescriptions,
  cyclesDescriptionsOptions,
  isEditMode = false,
  hasProductOverride,
  onCancel,
  dirty,
  pristine,
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
    <React.Fragment>
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
                readOnly={true}
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
              readOnly={isEditMode}
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
              id="product"
              name="product"
              component={SelectField}
              label="Product"
              placeholder="Select Product"
              isDisabled={isEditMode}
              options={institutionProductsOptions}
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
                readOnly={isEditMode}
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
                readOnly={true}
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
                maskPlaceholder={dateFormat.DATE}
                mask={maskFormat.DATE}
                readOnly={true}
                validate={[formErrorUtil.isDate]}
              />
            </Box>
          )}
          <Hr />
          <Box width={[1 / 6]} p="10px">
            <Field
              id="balanceSettled"
              name="balanceSettled"
              label="Balance Settled"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
              validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="balanceAvailable"
              name="balanceAvailable"
              label="Balance Available"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
              validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="amountDueRepayment"
              name="amountDueRepayment"
              label="Amount Due Repayment"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
              validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="balanceLimit"
              name="balanceLimit"
              label="Balance Limit"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
              validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="balanceLimitShared"
              name="balanceLimitShared"
              label="Balance Limit Shared"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
              validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="accruedInterest"
              name="accruedInterest"
              label="Accrued Interest"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode}
              validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="statementCycle"
              name="statementCycle"
              component={SelectField}
              label="Statement Cycle"
              placeholder="Select Statement Cycle"
              options={cyclesDescriptionsOptions}
              isDisabled={isEditMode}
              validate={[formErrorUtil.required]}
            />
          </Box>
          {isEditMode && (
            <React.Fragment>
              <Box width={[1 / 6]} p="10px">
                <Field
                  id="lastCycleDate"
                  name="lastCycleDate"
                  component={InputField}
                  label="Last Cycle Date"
                  placeholder={dateFormat.DATE}
                  readOnly={true}
                />
              </Box>
              <Box width={[1 / 6]} p="10px">
                <Field
                  id="dateCreated"
                  name="dateCreated"
                  component={InputField}
                  label="Date Created"
                  readOnly={true}
                />
              </Box>
              <Box width={[1 / 6]} p="10px">
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
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
      />
    </React.Fragment>
  );
};

export default CustomerInfo;
