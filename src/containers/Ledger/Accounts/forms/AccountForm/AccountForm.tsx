import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { ImmutableArray } from 'seamless-immutable';

import { ISpinner, Tabs, TabsPanel, withSpinner } from 'components';
import {
  formNamesConst,
  productTypesConst,
  repaymentMethodsConst,
  repaymentTypesConst,
  repaymentTypesOptions,
} from 'consts';
import { AuxiliaryCounters, GeneralAccountInfo, Overdue } from './../../components';

import {
  IAccountDetails,
  IInstProduct,
  THandleAddAccount,
  THandleGetDirectDebitMandates,
  THandleUpdateAccount,
  TResetDirectDebitMandates,
} from 'store';

import { ISelectValue } from 'types';
import { dateUtil, stringsUtil } from 'utils';

interface IAccountForm extends ISpinner {
  addAccount: THandleAddAccount;
  currentAccountId: number;
  currentAccAuxCounters: Partial<IAccountDetails>;
  customerIdValue: number;
  institutionValue: ISelectValue;
  productValue: ISelectValue;
  repaymentMethodValue: ISelectValue;
  institutionProducts: ImmutableArray<IInstProduct>;
  isEditMode?: boolean;
  isReadOnly?: boolean;
  onCancel: () => void;
  updateAccount: THandleUpdateAccount;
  getDirectDebitMandates: THandleGetDirectDebitMandates;
  resetDirectDebitMandates: TResetDirectDebitMandates;
}

type TAccountForm = IAccountForm & InjectedFormProps<{}, IAccountForm>;

const AccountForm: React.FC<TAccountForm> = ({
  customerIdValue,
  institutionValue,
  productValue,
  currentAccAuxCounters,
  currentAccountId,
  institutionProducts,
  repaymentMethodValue,
  isEditMode,
  isReadOnly,
  dirty,
  pristine,
  addAccount,
  updateAccount,
  getDirectDebitMandates,
  resetDirectDebitMandates,
  onCancel,
  handleSubmit,
  change,
}) => {
  const [institutionIdState, setStateInstitutionId] = React.useState(null);
  const [productIdState, setStateProductId] = React.useState(null);
  const [customerIdState, setStateCustomerId] = React.useState(null);

  const selectedProductId = React.useMemo(
    () => productValue && Number(productValue.value),
    [productValue]
  );

  const selectedProductType = React.useMemo(
    () => {
      const product = institutionProducts.find(el => el.id === selectedProductId);
      return product && product.productType;
    },
    [institutionProducts, selectedProductId]
  );

  const isSelectedLoan = React.useMemo(
    () => selectedProductType === productTypesConst.LOAN,
    [selectedProductType]
  );

  const isSelectedRevCredit = React.useMemo(
    () => selectedProductType === productTypesConst.REVOLVING_CREDIT,
    [selectedProductType]
  );

  const selectedInstitutionId = React.useMemo(
    () => institutionValue && Number(institutionValue.value),
    [institutionValue]
  );

  const isDirectDebitRepayment = React.useMemo(
    () => repaymentMethodValue && repaymentMethodValue.value === repaymentMethodsConst.DIRECT_DEBIT,
    [repaymentMethodValue]
  );

  // reset products list if institution changed (adding mode)
  React.useEffect(
    () => {
      if (!isEditMode) {
        if (institutionIdState !== selectedInstitutionId) {
          change('product', '');
          setStateInstitutionId(selectedInstitutionId);
        }
      }
    },
    [selectedInstitutionId, institutionIdState, change, isEditMode]
  );

  // reset mandates list if customer or product changed (adding mode)
  React.useEffect(
    () => {
      const resetMandatesList = () => {
        resetDirectDebitMandates();
        change('directDebitMandateId', '');
      };

      if (!isEditMode && isDirectDebitRepayment) {
        if (customerIdState !== customerIdValue) {
          resetMandatesList();
          setStateCustomerId(customerIdValue);
        }

        if (productIdState !== selectedProductId) {
          resetMandatesList();
          setStateProductId(selectedProductId);
        }
      }
    },
    [
      change,
      customerIdValue,
      customerIdState,
      isDirectDebitRepayment,
      isEditMode,
      productIdState,
      resetDirectDebitMandates,
      selectedProductId,
    ]
  );

  React.useEffect(
    () => {
      const selectedProduct = institutionProducts.find(product => product.id === selectedProductId);

      const numOfInstallments = selectedProduct && selectedProduct.defNumOfInstallments;
      const numInterestFreeInstlmts = selectedProduct && selectedProduct.defNumInterestFreeInstlmts;
      const numDeferredInstlmts = selectedProduct && selectedProduct.defNumDeferredInstlmts;

      const repaymentTypeInstalments = repaymentTypesOptions
        .find(type => type.value === repaymentTypesConst.INSTALMENTS);
      const repaymentTypeMinimumRepayment = repaymentTypesOptions
        .find(type => type.value === repaymentTypesConst.MINIMUM_REPAYMENT);

      const resetLoanValues = () => {
        change('numOfInstallments', 0);
        change('numInterestFreeInstlmts', 0);
        change('numDeferredInstlmts', 0);
        change('loanStartDate', dateUtil.todayDate());
      };

      if (!isEditMode) {
        if (productIdState !== selectedProductId) {
          setStateProductId(selectedProductId);

          if (isSelectedLoan) {
            change('numOfInstallments', numOfInstallments);
            change('numInterestFreeInstlmts', numInterestFreeInstlmts);
            change('numDeferredInstlmts', numDeferredInstlmts);
            change('repaymentType', repaymentTypeInstalments);
          } else if (isSelectedRevCredit) {
            change('repaymentType', repaymentTypeMinimumRepayment);
          }
        }

        if (!isSelectedLoan) {
          resetLoanValues();
        }

        if (!isSelectedLoan && !isSelectedRevCredit) {
          change('repaymentType', '');
        }
      }
    },
    [
      change,
      institutionProducts,
      isSelectedLoan,
      isSelectedRevCredit,
      isEditMode,
      productValue,
      productIdState,
      selectedProductId,
    ]
  );

  React.useEffect(
    () => {
      if (isEditMode && isDirectDebitRepayment) {
        getDirectDebitMandates({
          accountId: currentAccountId,
          forAccount: true,
        });
      }
    },
    [
      getDirectDebitMandates,
      currentAccountId,
      isEditMode,
      isDirectDebitRepayment,
    ]
  );

  React.useEffect(
    () => {
      if (!isEditMode && isDirectDebitRepayment && customerIdValue && selectedProductId) {
        getDirectDebitMandates({
          customerId: stringsUtil.toNumber(customerIdValue),
          productId: selectedProductId,
          forAccount: true,
        });
      }
    },
    [
      getDirectDebitMandates,
      customerIdValue,
      isEditMode,
      isDirectDebitRepayment,
      selectedProductId,
    ]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(isEditMode ? updateAccount : addAccount),
    [handleSubmit, updateAccount, addAccount, isEditMode]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Tabs>
        <TabsPanel title="General">
          <GeneralAccountInfo
            dirty={dirty}
            institutionValue={institutionValue}
            isSelectedLoan={isSelectedLoan}
            isDirectDebitRepayment={isDirectDebitRepayment}
            isEditMode={isEditMode}
            isReadOnly={isReadOnly}
            isRepaymentType={isSelectedLoan || isSelectedRevCredit}
            customerId={customerIdValue}
            productId={selectedProductId}
            onCancel={onCancel}
            pristine={pristine}
          />
        </TabsPanel>
        <TabsPanel title="Aux Counters">
          <AuxiliaryCounters
            isEditMode={isEditMode}
            currentAccAuxCounters={currentAccAuxCounters}
            onCancel={onCancel}
            dirty={dirty}
            pristine={pristine}
            isReadOnly={isReadOnly}
          />
        </TabsPanel>
        <TabsPanel title="Overdue">
          <Overdue
            isEditMode={isEditMode}
            onCancel={onCancel}
            dirty={dirty}
            pristine={pristine}
            isReadOnly={isReadOnly}
          />
        </TabsPanel>
      </Tabs>
    </form >
  );
};

export default reduxForm<{}, IAccountForm>({
  form: formNamesConst.ACCOUNT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AccountForm));
