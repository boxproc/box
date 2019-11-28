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
  RepaymentStatusTable,
} from 'containers/Ledger/Accounts/components';

import {
  HandleAddLedgerAccount,
  HandleUpdateLedgerAccount,
  InstitutionProductsItemPrepared,
} from 'store/domains';

import { SelectValues } from 'types';

interface AccountFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  cyclesDescriptionsOptions: Array<SelectValues>;
  institutionProducts: Array<InstitutionProductsItemPrepared>;
  currentProduct: SelectValues;
  accountProductType: string;
  updateLedgerAccount: HandleUpdateLedgerAccount;
  addLedgerAccount: HandleAddLedgerAccount;
  onCancel: () => void;
  mode: 'add' | 'edit';
}

type AccountFormAllProps = AccountFormProps & InjectedFormProps<{}, AccountFormProps>;

const AccountForm: React.FC<AccountFormAllProps> = ({
  onCancel,
  handleSubmit,
  updateLedgerAccount,
  addLedgerAccount,
  institutionsOptions,
  accountProductType,
  currentProduct,
  institutionProducts,
  cyclesDescriptionsOptions,
  change,
  mode,
  dirty,
  pristine,
}) => {
  const isEditMode = React.useMemo(
    () => mode === 'edit',
    [mode]
  );

  const submitFormAction = React.useMemo(
    () => isEditMode ? updateLedgerAccount : addLedgerAccount,
    [updateLedgerAccount, addLedgerAccount, isEditMode]
  );

  const isLoanProductType = React.useMemo(
    () => accountProductType === productTypesCodes.LOAN,
    [accountProductType]
  );

  const defaultStatementCycleValue = React.useMemo(
    () => {
      if (!currentProduct) {
        return undefined;
      }

      const productId = currentProduct.value;
      const product = institutionProducts.find(el => el.id === productId);
      const cycleId = product.defaultStatementCycleId;

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

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitFormAction),
    [handleSubmit, submitFormAction]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <TabsPanel title="General">
          <GeneralAccountInfo
            institutionsOptions={institutionsOptions}
            isEditMode={isEditMode}
            onCancel={onCancel}
            dirty={dirty}
            pristine={pristine}
          />
        </TabsPanel>
        <TabsPanel title="Auxiliary Counters">
          <AuxiliaryCounters
            isEditMode={isEditMode}
            onCancel={onCancel}
            dirty={dirty}
            pristine={pristine}
          />
        </TabsPanel>
        <TabsPanel title="Overdue">
          <Overdue
            isEditMode={isEditMode}
            onCancel={onCancel}
            dirty={dirty}
            pristine={pristine}
          />
        </TabsPanel>
        {isEditMode && (
          <TabsPanel title="Cards">
            <Cards onCancel={onCancel} />
          </TabsPanel>
        )}
        {isEditMode && (
          <TabsPanel title="Statements">
            <AccountStatements onCancel={onCancel} />
          </TabsPanel>
        )}
        {isEditMode && isLoanProductType && (
          <TabsPanel title="Repayment Status">
            <RepaymentStatusTable onCancel={onCancel} />
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
