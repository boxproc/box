import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Hr,
  InputField,
  MaskField,
  NumberFormatField,
  OkCancelButtons,
  SelectField,
} from 'components';

import {
  HandleGetDictionaryAccountStatuses,
  HandleGetDictionaryRepaymentTypes,
  HandleGetInstitutionProducts,
} from 'store/domains';

import { dateFormat, maskFormat } from 'consts';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

export interface CustomerInfoProps {
  institutionsOptions: Array<SelectValue>;
  institutionProductsOptions: Array<SelectValue>;
  statusesOptions: Array<SelectValue>;
  currentInstitution: SelectValue;
  repaymentTypesOptions: Array<SelectValue>;
  isEditMode: boolean;
  hasProductOverride: boolean;
  isChosenLoanProductType: boolean;
  isChosenRevCreditProductType: boolean;
  dirty: boolean;
  pristine: boolean;
  isReadOnly: boolean;
  getInstitutionProducts: HandleGetInstitutionProducts;
  getAccountStatuses: HandleGetDictionaryAccountStatuses;
  getRepaymentTypes: HandleGetDictionaryRepaymentTypes;
  onCancel: () => void;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({
  institutionsOptions,
  currentInstitution,
  institutionProductsOptions,
  statusesOptions,
  getInstitutionProducts,
  getAccountStatuses,
  isEditMode,
  isChosenLoanProductType,
  isChosenRevCreditProductType,
  hasProductOverride,
  repaymentTypesOptions,
  getRepaymentTypes,
  onCancel,
  dirty,
  pristine,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      Promise.all([
        getAccountStatuses(),
        getRepaymentTypes(),
      ]);
    },
    [getAccountStatuses, getRepaymentTypes]
  );

  React.useEffect(
    () => {
      if (currentInstitution) {
        getInstitutionProducts(currentInstitution.value);
      }
    },
    [getInstitutionProducts, currentInstitution]
  );

  const isRepaymentType = React.useMemo(
    () => isChosenLoanProductType || isChosenRevCreditProductType,
    [isChosenLoanProductType, isChosenRevCreditProductType]
  );

  return (
    <React.Fragment>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          {isEditMode && (
            <Box width="150px" p="8px">
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
          <Box width={[1 / 6]} p="8px">
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
          <Box width="150px" p="8px">
            <Field
              id="customerId"
              name="customerId"
              component={InputField}
              label="Customer ID"
              placeholder="Enter ID"
              readOnly={isEditMode || isReadOnly}
              isNumber={true}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 6]} p="8px">
            <Field
              id="accountAlias"
              name="accountAlias"
              component={InputField}
              label="Account Alias"
              placeholder="Enter Account Alias"
              readOnly={isReadOnly}
            />
          </Box>
          <Box width={[1 / 6]} p="8px">
            <Field
              id="accountAliasAdditional"
              name="accountAliasAdditional"
              component={InputField}
              label="Account Alias Additional"
              placeholder="Enter Account Alias"
              readOnly={isReadOnly}
            />
          </Box>
          <Box width={[1 / 6]} p="8px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              label="Status"
              placeholder="Select Status"
              options={statusesOptions}
              isDisabled={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          {isEditMode && (
            <Box width="150px" p="8px">
              <Field
                id="productId"
                name="productId"
                component={InputField}
                label="Product ID"
                placeholder="Enter ID"
                readOnly={isEditMode || isReadOnly}
                isNumber={true}
                validate={[formErrorUtil.required]}
              />
            </Box>
          )}
          <Box width={[1 / 5]} p="8px">
            <Field
              id="product"
              name="product"
              component={SelectField}
              label="Product"
              placeholder="Select Product"
              isDisabled={isEditMode || isReadOnly}
              options={institutionProductsOptions}
              validate={[formErrorUtil.required]}
            />
          </Box>
          {isRepaymentType && (
            <Box width={[1 / 5]} p="8px">
              <Field
                id="repaymentType"
                name="repaymentType"
                component={SelectField}
                label="Repayment Type"
                placeholder="Select Type"
                isDisabled={isChosenLoanProductType || isReadOnly}
                options={repaymentTypesOptions}
                validate={[formErrorUtil.required]}
              />
            </Box>
          )}
          {isEditMode && (
            <Box width="150px" p="8px">
              <Field
                id="statementCycleRepaymentDay"
                name="statementCycleRepaymentDay"
                component={InputField}
                label="Statement Cycle Repayment Day"
                placeholder="Enter Day"
                readOnly={isReadOnly}
                isNumber={true}
              />
            </Box>
          )}
          {isChosenLoanProductType && (
            <React.Fragment>
              <Box width="150px" p="8px">
                <Field
                  id="numOfInstallments"
                  name="numOfInstallments"
                  component={InputField}
                  label="Number of Installments"
                  placeholder="Enter Number"
                  readOnly={isReadOnly}
                  isNumber={true}
                  validate={[formErrorUtil.required]}
                />
              </Box>
              <Box width="150px" p="8px">
                <Field
                  id="numOfInterestFreeInstllmnts"
                  name="numOfInterestFreeInstllmnts"
                  component={InputField}
                  label="Number of Interest Free Installments"
                  placeholder="Enter Number"
                  readOnly={isReadOnly}
                  isNumber={true}
                  validate={[formErrorUtil.required]}
                />
              </Box>
            </React.Fragment>
          )}
          {isChosenLoanProductType && !isEditMode && (
            <Box width="150px" p="8px">
              <Field
                id="loanStartDate"
                name="loanStartDate"
                component={MaskField}
                label="Loan Start Date"
                placeholder={dateFormat.DATE}
                mask={maskFormat.DATE}
                readOnly={isReadOnly}
                validate={[
                  formErrorUtil.required,
                  formErrorUtil.isDate,
                ]}
              />
            </Box>
          )}
          {hasProductOverride && (
            <React.Fragment>
              <Box width="150px" p="8px">
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
              <Box width="120px" p="8px">
                <Field
                  id="dateOfProductOverride"
                  name="dateOfProductOverride"
                  component={MaskField}
                  label="Date of Product Override"
                  placeholder={dateFormat.DATE}
                  mask={maskFormat.DATE}
                  readOnly={true}
                  validate={[formErrorUtil.isDate]}
                />
              </Box>
            </React.Fragment>
          )}
          <Hr />
          <Box width={[1 / 7]} p="8px">
            <Field
              id="balanceLimit"
              name="balanceLimit"
              label="Balance Limit"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.required,
                formErrorUtil.isNumber,
              ]}
            />
          </Box>
          <Box width={[1 / 7]} p="8px">
            <Field
              id="balanceLimitShared"
              name="balanceLimitShared"
              label="Balance Limit Shared"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.required,
                formErrorUtil.isNumber,
              ]}
            />
          </Box>
          <Box width={[1 / 7]} p="8px">
            <Field
              id="balanceSettled"
              name="balanceSettled"
              label="Balance Settled"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.required,
                formErrorUtil.isNumber,
              ]}
            />
          </Box>
          <Box width={[1 / 7]} p="8px">
            <Field
              id="balanceAvailable"
              name="balanceAvailable"
              label="Balance Available"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.required,
                formErrorUtil.isNumber,
              ]}
            />
          </Box>
          <Hr />
          <Box width={[1 / 7]} p="8px">
            <Field
              id="repaymentAmountDue"
              name="repaymentAmountDue"
              label="Repayment Amount Due"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.required,
                formErrorUtil.isNumber,
              ]}
            />
          </Box>
          <Box width={[1 / 7]} p="8px">
            <Field
              id="accruedInterest"
              name="accruedInterest"
              label="Total Accrued Interest"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              readOnly={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.required,
                formErrorUtil.isNumber,
              ]}
            />
          </Box>
          {isEditMode && (
            <React.Fragment>
              <Box width={[1 / 7]} p="8px">
                <Field
                  id="totalOverdueAmount"
                  name="totalOverdueAmount"
                  label="Total Overdue Amount"
                  component={NumberFormatField}
                  placeholder="0.00"
                  fixedDecimalScale={true}
                  decimalScale={2}
                  readOnly={isEditMode || isReadOnly}
                  validate={[
                    formErrorUtil.required,
                    formErrorUtil.isNumber,
                  ]}
                />
              </Box>
              <Hr />
              <Box width="120px" p="8px">
                <Field
                  id="lastCycleDate"
                  name="lastCycleDate"
                  component={InputField}
                  label="Last Cycle Date"
                  placeholder={dateFormat.DATE}
                  readOnly={true}
                />
              </Box>
              <Box width="120px" p="8px">
                <Field
                  id="dateCreated"
                  name="dateCreated"
                  component={InputField}
                  label="Date Created"
                  readOnly={true}
                />
              </Box>
              <Box width="120px" p="8px">
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
        hideOk={isReadOnly}
      />
    </React.Fragment>
  );
};

export default CustomerInfo;
