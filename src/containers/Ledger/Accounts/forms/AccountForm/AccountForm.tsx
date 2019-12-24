import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  ExternalSpinnerProps,
  Tabs,
  TabsPanel,
  withSpinner,
} from 'components';

import { formNamesConst, productTypesCodes } from 'consts';

import {
  AccountStatements,
  AuxiliaryCounters,
  Cards,
  GeneralAccountInfo,
  Overdue,
} from 'containers/Ledger/Accounts/components';

import {
  HandleAddLedgerAccount,
  HandleUpdateLedgerAccount,
  InstitutionProductsItemPrepared,
  LedgerAccountItemDetailsPrepared,
} from 'store/domains';

import { SelectValues } from 'types';

interface AccountFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  cyclesDescriptionsOptions: Array<SelectValues>;
  institutionProducts: Array<InstitutionProductsItemPrepared>;
  currentAccountAuxCounters: Partial<LedgerAccountItemDetailsPrepared>;
  currentProduct: SelectValues;
  updateLedgerAccount: HandleUpdateLedgerAccount;
  addLedgerAccount: HandleAddLedgerAccount;
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
  currentAccountAuxCounters,
  institutionProducts,
  cyclesDescriptionsOptions,
  change,
  mode,
  dirty,
  pristine,
  isReadOnly,
}) => {
  const isEditMode = React.useMemo(
    () => mode === 'edit',
    [mode]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateLedgerAccount : addLedgerAccount,
    [updateLedgerAccount, addLedgerAccount, isEditMode]
  );

  const defaultStatementCycleValue = React.useMemo(
    () => {
      if (!currentProduct) {
        return undefined;
      }

      const productId = currentProduct.value;
      const product = institutionProducts.find(el => el.id === productId);
      const cycleId = product && product.defaultStatementCycleId;

      return cyclesDescriptionsOptions.find(el => el.value === cycleId);
    },
    [institutionProducts, currentProduct, cyclesDescriptionsOptions]
  );

  React.useEffect(
    () => {
      if (defaultStatementCycleValue) {
        change('statementCycle', defaultStatementCycleValue);
      }
    },
    [defaultStatementCycleValue, change]
  );

  const currentProductType = React.useMemo(
    () => {
      if (!currentProduct) {
        return undefined;
      }

      const productId = currentProduct.value;
      const product = institutionProducts.find(el => el.id === productId);

      return product.productType;
    },
    [institutionProducts, currentProduct]
  );

  const isChosenLoanProductType = React.useMemo(
    () => currentProductType === productTypesCodes.LOAN,
    [currentProductType]
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
        {isEditMode && (
          <TabsPanel title="Cards">
            <Cards
              onCancel={onCancel}
              isReadOnly={isReadOnly}
            />
          </TabsPanel>
        )}
        {isEditMode && (
          <TabsPanel title="Statements">
            <AccountStatements onCancel={onCancel} />
          </TabsPanel>
        )}
      </Tabs>
    </form >
  );
};

export default reduxForm<{}, AccountFormProps>({
  form: formNamesConst.LEDGER_ACCOUNT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AccountForm));
