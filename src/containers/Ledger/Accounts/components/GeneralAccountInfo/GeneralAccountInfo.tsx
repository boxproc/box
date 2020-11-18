import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Delimiter,
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
  cycleTypesConst,
  dateFormatConst,
  maskFormatConst,
} from 'consts';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

const rangeValueMonthly = formErrorUtil.rangeValue(1, 28);
const rangeValueBiMonthly = formErrorUtil.rangeValue(1, 28);
const rangeValueWeekly = formErrorUtil.rangeValue(1, 7);
const rangeValueBiWeekly = formErrorUtil.rangeValue(1, 7);
const rangeValueFixedNumOfDays = formErrorUtil.rangeValue(1, 250);

interface IGeneralAccountInfo {
  customerId: number;
  directDebitMandatesOptions: Array<ISelectValue>;
  dirty: boolean;
  getAccountStatuses: THandleGetDictionaryAccountStatuses;
  getInstProducts: THandleGetInstProducts;
  hasProductOverride: boolean;
  institutionProductsOptions: Array<ISelectValue>;
  institutionsOptions: Array<ISelectValue>;
  institutionValue: ISelectValue;
  isEditMode?: boolean;
  isLoadingMandates: boolean;
  isReadOnly: boolean;
  isSelectedLoan: boolean;
  onCancel: () => void;
  pristine: boolean;
  productId: number;
  statementCycleTypeId: number;
  statusesOptions: Array<ISelectValue>;
}

const GeneralAccountInfo: React.FC<IGeneralAccountInfo> = ({
  customerId,
  directDebitMandatesOptions,
  dirty,
  getAccountStatuses,
  getInstProducts,
  hasProductOverride,
  institutionProductsOptions,
  institutionsOptions,
  institutionValue,
  isEditMode,
  isLoadingMandates,
  isReadOnly,
  isSelectedLoan,
  onCancel,
  pristine,
  productId,
  statementCycleTypeId,
  statusesOptions,
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

  const statuses = React.useMemo(
    () => {
      const activeInd = statusesOptions.findIndex(el => el.value === 'A');

      return isEditMode
        ? statusesOptions
        : [statusesOptions[activeInd]];
    },
    [statusesOptions, isEditMode]
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

  const statementCycleParameterValidation = React.useMemo(
    () => {
      if (statementCycleTypeId === cycleTypesConst.MONTHLY) {
        return {
          validation: rangeValueMonthly,
          hint: 'Statement cycle type "Monthly"',
        };
      } else if (statementCycleTypeId === cycleTypesConst.BI_MONTHLY) {
        return {
          validation: rangeValueBiMonthly,
          hint: 'Statement cycle type "Bi-monthly"',
        };
      } else if (statementCycleTypeId === cycleTypesConst.WEEKLY) {
        return {
          validation: rangeValueWeekly,
          hint: 'Statement cycle type "Weekly"',
        };
      } else if (statementCycleTypeId === cycleTypesConst.BI_WEEKLY) {
        return {
          validation: rangeValueBiWeekly,
          hint: 'Statement cycle type "Bi-Weekly"',
        };
      } else if (statementCycleTypeId === cycleTypesConst.FIXED_NUMBER_OF_DAYS) {
        return {
          validation: rangeValueFixedNumOfDays,
          hint: 'Statement cycle type "Fixed number of days"',
        };
      } else {
        return {
          validation: formErrorUtil.isInteger,
        };
      }
    },
    [statementCycleTypeId]
  );

  return (
    <React.Fragment>
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
        mx="-8px"
      >
        {isEditMode && (
          <Box width="110px" p="8px">
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
        <Box width={isEditMode ? '260px' : '370px'} p="8px">
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
        <Box width="110px" p="8px">
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
        <Box width="160px" p="8px">
          <Field
            id="accountAlias"
            name="accountAlias"
            component={InputField}
            label="Account Alias"
            placeholder="Enter Alias"
            disabled={isReadOnly}
          />
        </Box>
        <Box width="160px" p="8px">
          <Field
            id="accountAliasAdditional"
            name="accountAliasAdditional"
            component={InputField}
            label="Account Alias Additional"
            placeholder="Enter Alias"
            disabled={isReadOnly}
          />
        </Box>
        <Box width="195px" p="8px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={statuses}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Flex>
          <Flex
            flexWrap="wrap"
            alignItems="flex-end"
            width="480px"
          >
            <Box width="480px" p="8px">
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
            <Box width="480px" p="8px">
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
          </Flex>
          <Flex
            flexWrap="wrap"
            alignItems="flex-end"
            width="480px"
          >
            {isEditMode && (
              <Box width="110px" p="8px">
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
            {hasProductOverride && (
              <React.Fragment>
                <Box width="110px" p="8px">
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
            <Box width="110px" p="8px">
              <Field
                id="statementCycleParameter"
                name="statementCycleParameter"
                component={InputField}
                label="Statement Cycle Parameter"
                placeholder="Enter Day"
                disabled={isReadOnly}
                isNumber={true}
                hint={statementCycleTypeId && statementCycleParameterValidation.hint}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isInteger,
                  statementCycleParameterValidation.validation,
                ]}
              />
            </Box>
            {isSelectedLoan && (
              <React.Fragment>
                <Delimiter />
                <Box width="110px" p="8px">
                  <Field
                    id="numOfInstallments"
                    name="numOfInstallments"
                    component={InputField}
                    label="# of Installments"
                    placeholder="Enter #"
                    disabled={isEditMode}
                    isNumber={true}
                    validate={[
                      formErrorUtil.isRequired,
                      formErrorUtil.isInteger,
                    ]}
                  />
                </Box>
                <Box width="110px" p="8px">
                  <Field
                    id="numOfInterestFreeInstllmnts"
                    name="numOfInterestFreeInstllmnts"
                    component={InputField}
                    label="# of Interest Free Installments"
                    placeholder="Enter #"
                    disabled={isEditMode}
                    isNumber={true}
                    validate={[
                      formErrorUtil.isInteger,
                    ]}
                  />
                </Box>
                <Box width="110px" p="8px">
                  <Field
                    id="numDeferredInstlmts"
                    name="numDeferredInstlmts"
                    component={InputField}
                    label="# of Deferred Installments"
                    placeholder="Enter #"
                    disabled={isEditMode}
                    isNumber={true}
                    validate={[
                      formErrorUtil.isInteger,
                    ]}
                  />
                </Box>
                <Box width="120px" p="8px">
                  <Field
                    id="loanStartDate"
                    name="loanStartDate"
                    component={MaskField}
                    label="Loan Start Date"
                    placeholder={dateFormatConst.DATE}
                    mask={maskFormatConst.DATE}
                    disabled={isEditMode}
                    validate={[
                      formErrorUtil.isRequired,
                      formErrorUtil.isDate,
                    ]}
                  />
                </Box>
              </React.Fragment>
            )}
          </Flex>
        </Flex>
        <Hr />
        <Box width="160px" p="8px">
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
        <Box width="160px" p="8px">
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
        <Box width="160px" p="8px">
          <Field
            id="balanceSettled"
            name="balanceSettled"
            label="Balance Settled"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={true}
          />
        </Box>
        <Box width="160px" p="8px">
          <Field
            id="balanceAuthorised"
            name="balanceAuthorised"
            label="Balance Authorised"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={true}
          />
        </Box>
        <Hr />
        <Box width="160px" p="8px">
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
        <Box width="160px" p="8px">
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
            <Box width="107px" p="8px">
              <Field
                id="lastCycleDate"
                name="lastCycleDate"
                component={InputField}
                label="Last Cycle Date"
                disabled={true}
              />
            </Box>
            <Box width="107px" p="8px">
              <Field
                id="dateCreated"
                name="dateCreated"
                component={InputField}
                label="Date Created"
                disabled={true}
              />
            </Box>
            <Box width="107px" p="8px">
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
