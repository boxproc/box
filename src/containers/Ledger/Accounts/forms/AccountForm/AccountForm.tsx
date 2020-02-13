import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  ExternalSpinnerProps,
  Tabs,
  TabsPanel,
  withSpinner,
} from 'components';

import {
  formNamesConst,
  productTypesCodes,
  repaymentTypesCodes,
} from 'consts';

import {
  AuxiliaryCounters,
  GeneralAccountInfo,
  Overdue,
} from 'containers/Ledger/Accounts/components';

import {
  HandleAddLedgerAccount,
  HandleUpdateLedgerAccount,
  InstitutionProductsItemPrepared,
  LedgerAccountItemDetailsPrepared,
} from 'store/domains';

import { SelectValue } from 'types';
import { dateUtil } from 'utils';

interface AccountFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValue>;
  institutionProducts: Array<InstitutionProductsItemPrepared>;
  currentAccountAuxCounters: Partial<LedgerAccountItemDetailsPrepared>;
  currentProduct: SelectValue;
  currentInstitution: SelectValue;
  updateLedgerAccount: HandleUpdateLedgerAccount;
  addLedgerAccount: HandleAddLedgerAccount;
  repaymentTypesOptions: Array<SelectValue>;
  onCancel: () => void;
  mode: 'add' | 'edit';
  isReadOnly?: boolean;
}

type AccountFormAllProps = AccountFormProps & InjectedFormProps<{}, AccountFormProps>;

const AccountForm: React.FC<AccountFormAllProps> = ({
  onCancel,
  handleSubmit,
  updateLedgerAccount,
  addLedgerAccount,
  institutionsOptions,
  currentProduct,
  currentInstitution,
  currentAccountAuxCounters,
  institutionProducts,
  repaymentTypesOptions,
  mode,
  dirty,
  pristine,
  isReadOnly,
  change,
}) => {
  const [currentInstId, setCurrentInstId] = React.useState(null);

  React.useEffect(
    () => {
      if (currentInstitution) {
        if (currentInstId !== currentInstitution.value) {
          change('product', '');
          setCurrentInstId(currentInstitution.value);
        }
      }
    },
    [currentInstitution, currentInstId, change]
  );

  const isEditMode = React.useMemo(
    () => mode === 'edit',
    [mode]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateLedgerAccount : addLedgerAccount,
    [updateLedgerAccount, addLedgerAccount, isEditMode]
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
    () => currentProductType === productTypesCodes.LOAN,
    [currentProductType]
  );

  const isChosenRevCreditProductType = React.useMemo(
    () => currentProductType === productTypesCodes.REVOLVING_CREDIT,
    [currentProductType]
  );

  React.useEffect(
    () => {
      const currentProductId = currentProduct && currentProduct.value;
      const currentProductItem = institutionProducts
        .find(product => product.id === currentProductId);

      const numOfInstallments = currentProductItem && currentProductItem.defNumOfInstallments;
      const numOfInterestFreeInstllmnts = currentProductItem
        && currentProductItem.defNumOfIntrstFreeInstlmts;

      const resetAll = () => {
        change('numOfInstallments', 0);
        change('numOfInterestFreeInstllmnts', 0);
        change('loanStartDate', dateUtil.todayDate);
        change('repaymentType', '');
      };

      if (!isEditMode) {
        if (isChosenLoanProductType) {
          change('numOfInstallments', numOfInstallments);
          change('numOfInterestFreeInstllmnts', numOfInterestFreeInstllmnts);
          change(
            'repaymentType',
            repaymentTypesOptions.find(type => type.value === repaymentTypesCodes.INSTALMENTS)
          );
        } else if (isChosenRevCreditProductType) {
          change(
            'repaymentType',
            repaymentTypesOptions.find(type => type.value === repaymentTypesCodes.MINIMUM_REPAYMENT)
          );
        } else if (currentProduct && !isChosenLoanProductType) {
          resetAll();
        } else if (currentProduct && !isChosenRevCreditProductType) {
          change('repaymentType', '');
        } else if (!currentProduct) {
          resetAll();
        }
      }
    },
    [
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
            currentAccountAuxCounters={currentAccountAuxCounters}
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

export default reduxForm<{}, AccountFormProps>({
  form: formNamesConst.ACCOUNT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AccountForm));
