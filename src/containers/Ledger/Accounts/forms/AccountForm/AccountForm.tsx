import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { ImmutableArray } from 'seamless-immutable';

import { ISpinner, Tabs, TabsPanel, withSpinner } from 'components';
import { formNamesConst, productTypesConst, repaymentTypesConst } from 'consts';
import { AuxiliaryCounters, GeneralAccountInfo, Overdue } from './../../components';

import {
  IAccountDetails,
  IInstProduct,
  THandleAddAccount,
  THandleUpdateAccount,
} from 'store';

import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface IAccountForm extends ISpinner {
  institutionsOptions: Array<ISelectValue>;
  institutionProducts: ImmutableArray<IInstProduct>;
  currentAccAuxCounters: Partial<IAccountDetails>;
  currentProduct: ISelectValue;
  currentInstitution: ISelectValue;
  updateAccount: THandleUpdateAccount;
  addAccount: THandleAddAccount;
  repaymentTypesOptions: Array<ISelectValue>;
  onCancel: () => void;
  isEditMode?: boolean;
  isReadOnly?: boolean;
}

type TAccountForm = IAccountForm & InjectedFormProps<{}, IAccountForm>;

const AccountForm: React.FC<TAccountForm> = ({
  onCancel,
  handleSubmit,
  updateAccount,
  addAccount,
  institutionsOptions,
  currentProduct,
  currentInstitution,
  currentAccAuxCounters,
  institutionProducts,
  repaymentTypesOptions,
  isEditMode,
  dirty,
  pristine,
  isReadOnly,
  change,
}) => {
  const [currentInstId, setCurrentInstId] = React.useState(null);
  const [currentProductId, setCurrentProductId] = React.useState(null);

  // reset products list if institution changed (adding mode)
  React.useEffect(
    () => {
      if (!isEditMode && currentInstitution) {
        if (currentInstId !== currentInstitution.value) {
          change('product', '');
          setCurrentInstId(currentInstitution.value);
        }
      }
    },
    [currentInstitution, currentInstId, change, isEditMode]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateAccount : addAccount,
    [updateAccount, addAccount, isEditMode]
  );

  const currentProductType = React.useMemo(
    () => {
      if (!currentProduct) {
        return undefined;
      }

      const productId = currentProduct.value;
      const product = institutionProducts.find(el => el.id === productId);

      return product && product.productType;
    },
    [institutionProducts, currentProduct]
  );

  const isChosenLoanProductType = React.useMemo(
    () => currentProductType === productTypesConst.LOAN,
    [currentProductType]
  );

  const isChosenRevCreditProductType = React.useMemo(
    () => currentProductType === productTypesConst.REVOLVING_CREDIT,
    [currentProductType]
  );

  React.useEffect(
    () => {
      const selectedProductId = currentProduct && currentProduct.value;
      const currentProductItem = institutionProducts
        .find(product => product.id === selectedProductId);

      const numOfInstallments = currentProductItem && currentProductItem.defNumOfInstallments;
      const numInterestFreeInstlmts = currentProductItem
        && currentProductItem.defNumInterestFreeInstlmts;
      const numDeferredInstlmts = currentProductItem
        && currentProductItem.defNumDeferredInstlmts;

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
        if (currentProductId !== selectedProductId) {
          setCurrentProductId(selectedProductId);

          if (isChosenLoanProductType) {
            change('numOfInstallments', numOfInstallments);
            change('numInterestFreeInstlmts', numInterestFreeInstlmts);
            change('numDeferredInstlmts', numDeferredInstlmts);
            change('repaymentType', repaymentTypeInstalments);
          } else if (isChosenRevCreditProductType) {
            change('repaymentType', repaymentTypeMinimumRepayment);
          }
        }

        if (!isChosenLoanProductType) {
          resetLoanValues();
        }

        if (!isChosenLoanProductType && !isChosenRevCreditProductType) {
          change('repaymentType', '');
        }
      }
    },
    [
      currentProductId,
      institutionProducts,
      currentProduct,
      change,
      isChosenLoanProductType,
      isChosenRevCreditProductType,
      isEditMode,
      repaymentTypesOptions,
    ]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Tabs>
        <TabsPanel title="General">
          <GeneralAccountInfo
            institutionsOptions={institutionsOptions}
            isEditMode={isEditMode}
            isChosenLoanProductType={isChosenLoanProductType}
            isChosenRevCreditProductType={isChosenRevCreditProductType}
            onCancel={onCancel}
            dirty={dirty}
            pristine={pristine}
            isReadOnly={isReadOnly}
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
