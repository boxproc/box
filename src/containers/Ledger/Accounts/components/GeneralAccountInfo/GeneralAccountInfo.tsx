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
  THandleGetDictionaryAccountStatuses,
  THandleGetInstProducts,
} from 'store';

import {
  dateFormatConst,
  maskFormatConst,
  repaymentMethodsOptions,
  repaymentTypesOptions,
} from 'consts';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IGeneralAccountInfo {
  directDebitMandatesOptions: Array<ISelectValue>;
  dirty: boolean;
  getAccountStatuses: THandleGetDictionaryAccountStatuses;
  getInstProducts: THandleGetInstProducts;
  hasProductOverride: boolean;
  institutionProductsOptions: Array<ISelectValue>;
  institutionsOptions: Array<ISelectValue>;
  institutionValue: ISelectValue;
  isSelectedLoan: boolean;
  isDirectDebitRepayment: boolean;
  isEditMode?: boolean;
  isLoadingMandates: boolean;
  isReadOnly: boolean;
  isRepaymentType: boolean;
  onCancel: () => void;
  pristine: boolean;
  statusesOptions: Array<ISelectValue>;
  customerId: number;
  productId: number;
}

const GeneralAccountInfo: React.FC<IGeneralAccountInfo> = ({
  institutionValue,
  directDebitMandatesOptions,
  dirty,
  getAccountStatuses,
  getInstProducts,
  hasProductOverride,
  institutionProductsOptions,
  institutionsOptions,
  isSelectedLoan,
  isDirectDebitRepayment,
  isEditMode,
  isLoadingMandates,
  isReadOnly,
  isRepaymentType,
  onCancel,
  pristine,
  statusesOptions,
  customerId,
  productId,
}) => {
  React.useEffect(
    () => {
      getAccountStatuses();
    },
    [getAccountStatuses]
  );

  React.useEffect(
    () => {
      if (institutionValue) {
        getInstProducts(institutionValue.value);
      }
    },
    [getInstProducts, institutionValue]
  );

  const hint = React.useMemo(
    () => {
      let text = '';

      if (!customerId && !productId) {
        text = 'Fill customer ID and select a product.';
      } else if (!customerId) {
        text = 'Enter a customer ID.';
      } else if (!productId) {
        text = 'Select a product.';
      }

      return text;
    },
    [customerId, productId]
  );

  return (
    <React.Fragment>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        mx="-8px"
      >
        {isEditMode && (
          <Box width="120px" p="8px">
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
        <Box width="240px" p="8px">
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
        <Box width="120px" p="8px">
          <Field
            id="customerId"
            name="customerId"
            component={InputField}
            label="Customer ID"
            placeholder="Enter ID"
            disabled={isEditMode || isReadOnly}
            isNumber={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box width="235px" p="8px">
          <Field
            id="accountAlias"
            name="accountAlias"
            component={InputField}
            label="Account Alias"
            placeholder="Enter Account Alias"
            disabled={isReadOnly}
          />
        </Box>
        <Box width="235px" p="8px">
          <Field
            id="accountAliasAdditional"
            name="accountAliasAdditional"
            component={InputField}
            label="Account Alias Additional"
            placeholder="Enter Account Alias"
            disabled={isReadOnly}
          />
        </Box>
        <Box width="240px" p="8px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={statusesOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        {isEditMode && (
          <Box width="120px" p="8px">
            <Field
              id="productId"
              name="productId"
              component={InputField}
              label="Product ID"
              placeholder="Enter ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
        )}
        <Box width="240px" p="8px">
          <Field
            id="product"
            name="product"
            component={SelectField}
            label="Product"
            placeholder="Select Product"
            isDisabled={isEditMode || isReadOnly}
            options={institutionProductsOptions}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        {isRepaymentType && (
          <React.Fragment>
            <Box width="150px" p="8px">
              <Field
                id="repaymentMethod"
                name="repaymentMethod"
                component={SelectField}
                label="Repayment Method"
                placeholder="Select Method"
                isDisabled={isReadOnly}
                options={repaymentMethodsOptions}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
            <Box width="200px" p="8px">
              <Field
                id="repaymentType"
                name="repaymentType"
                component={SelectField}
                label="Repayment Type"
                placeholder="Select Type"
                isDisabled={isSelectedLoan || isReadOnly}
                options={repaymentTypesOptions}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
          </React.Fragment>
        )}
        {isDirectDebitRepayment && (
          <Box width="240px" p="8px">
            <Field
              id="directDebitMandateId"
              name="directDebitMandateId"
              component={SelectField}
              label="Direct Debit Mandate"
              placeholder="Select Mandate"
              isDisabled={isReadOnly || hint}
              isLoading={isLoadingMandates}
              hint={hint}
              options={directDebitMandatesOptions}
            />
          </Box>
        )}
        {isEditMode && (
          <Box width="120px" p="8px">
            <Field
              id="statementCycleRepaymentDay"
              name="statementCycleRepaymentDay"
              component={InputField}
              label="Statement Cycle Repayment Day"
              placeholder="Enter Day"
              disabled={true}
              isNumber={true}
              validate={[formErrorUtil.isInteger]}
            />
          </Box>
        )}
        {isSelectedLoan && (
          <React.Fragment>
            <Box width="120px" p="8px">
              <Field
                id="numOfInstallments"
                name="numOfInstallments"
                component={InputField}
                label="# of Installments"
                placeholder="Enter #"
                disabled={isReadOnly}
                isNumber={true}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isInteger,
                ]}
              />
            </Box>
            <Box width="120px" p="8px">
              <Field
                id="numInterestFreeInstlmts"
                name="numInterestFreeInstlmts"
                component={InputField}
                label="# of Interest Free Installments"
                placeholder="Enter #"
                disabled={isReadOnly}
                isNumber={true}
                validate={[
                  formErrorUtil.isInteger,
                ]}
              />
            </Box>
            <Box width="120px" p="8px">
              <Field
                id="numDeferredInstlmts"
                name="numDeferredInstlmts"
                component={InputField}
                label="# of Deferred Installments"
                placeholder="Enter #"
                disabled={isReadOnly}
                isNumber={true}
                validate={[
                  formErrorUtil.isInteger,
                ]}
              />
            </Box>
            <Box width="115px" p="8px">
              <Field
                id="loanStartDate"
                name="loanStartDate"
                component={MaskField}
                label="Loan Start Date"
                placeholder={dateFormatConst.DATE}
                mask={maskFormatConst.DATE}
                disabled={isReadOnly || isEditMode}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isDate,
                ]}
              />
            </Box>
          </React.Fragment>
        )}
        {hasProductOverride && (
          <React.Fragment>
            <Hr />
            <Box width="150px" p="8px">
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
            <Box width="120px" p="8px">
              <Field
                id="dateOfProductOverride"
                name="dateOfProductOverride"
                component={MaskField}
                label="Date of Product Override"
                placeholder={dateFormatConst.DATE}
                mask={maskFormatConst.DATE}
                disabled={true}
              />
            </Box>
          </React.Fragment>
        )}
        <Hr />
        <Box width="120px" p="8px">
          <Field
            id="balanceLimit"
            name="balanceLimit"
            label="Balance Limit"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={isEditMode || isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="balanceLimitShared"
            name="balanceLimitShared"
            label="Balance Limit Shared"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={isEditMode || isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="balanceSettled"
            name="balanceSettled"
            label="Balance Settled"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={isEditMode || isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="balanceAvailable"
            name="balanceAvailable"
            label="Balance Available"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={isEditMode || isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Hr />
        <Box width="120px" p="8px">
          <Field
            id="repaymentAmountDue"
            name="repaymentAmountDue"
            label="Repayment Amount Due"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="accruedInterest"
            name="accruedInterest"
            label="Total Accrued Interest"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        {isEditMode && (
          <React.Fragment>
            <Box width="120px" p="8px">
              <Field
                id="totalOverdueAmount"
                name="totalOverdueAmount"
                label="Total Overdue Amount"
                component={NumberFormatField}
                placeholder="0.00"
                fixedDecimalScale={true}
                decimalScale={2}
                disabled={true}
              />
            </Box>
            <Box width="120px" p="8px">
              <Field
                id="lastCycleDate"
                name="lastCycleDate"
                component={InputField}
                label="Last Cycle Date"
                placeholder={dateFormatConst.DATE}
                disabled={true}
              />
            </Box>
            <Box width="120px" p="8px">
              <Field
                id="dateCreated"
                name="dateCreated"
                component={InputField}
                label="Date Created"
                disabled={true}
              />
            </Box>
            <Box width="120px" p="8px">
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
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </React.Fragment>
  );
};

export default GeneralAccountInfo;
