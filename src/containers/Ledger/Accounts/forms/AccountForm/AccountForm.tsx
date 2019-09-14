import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import {
  ExternalSpinnerProps,
  Hr,
  OkCancelButtons,
  Tabs,
  TabsPanel,
  withSpinner,
} from 'components';

import { formNames } from 'consts';

import {
  AuxiliaryCounters,
  Cards,
  GeneralAccountInfo,
  Overdue,
} from 'containers/Ledger/Accounts/components';

import { HandleAddLedgerAccount, HandleUpdateLedgerAccount } from 'store/domains';
import { SelectValues } from 'types';

interface AccountFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  updateLedgerAccount: HandleUpdateLedgerAccount;
  addLedgerAccount: HandleAddLedgerAccount;
  onCancel: () => void;
  mode: 'add' | 'edit';
  isDirty: boolean;
}

type AccountFormAllProps = AccountFormProps &
  InjectedFormProps<{}, AccountFormProps>;

const AccountForm: React.FC<AccountFormAllProps> = ({
  onCancel,
  handleSubmit,
  updateLedgerAccount,
  addLedgerAccount,
  institutionsOptions,
  mode,
  isDirty,
}) => {
  const isEditMode = mode === 'edit';
  const action = isEditMode ? updateLedgerAccount : addLedgerAccount;

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => action(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <TabsPanel title="General">
          <GeneralAccountInfo
            institutionsOptions={institutionsOptions}
            isEditMode={isEditMode}
          />
          <Hr />
          <OkCancelButtons
            okText="Save"
            cancelText="Close"
            onCancel={onCancel}
            rightPosition={true}
            withCancelConfirmation={isDirty}
            disabledOk={!isDirty}
          />
        </TabsPanel>
        <TabsPanel title="Auxiliary Counters">
          <AuxiliaryCounters
            isEditMode={isEditMode}
          />
          <Hr />
          <OkCancelButtons
            okText="Save"
            cancelText="Close"
            onCancel={onCancel}
            rightPosition={true}
            withCancelConfirmation={isDirty}
            disabledOk={!isDirty}
          />
        </TabsPanel>
        <TabsPanel title="Overdue">
          <Overdue isEditMode={isEditMode}/>
          <Hr />
          <OkCancelButtons
            okText="Save"
            cancelText="Close"
            onCancel={onCancel}
            rightPosition={true}
            withCancelConfirmation={isDirty}
            disabledOk={!isDirty}
          />
        </TabsPanel>
        {isEditMode && (
          <TabsPanel title="Cards">
            <Cards />
          </TabsPanel>
        )}
      </Tabs>
    </form >
  );
};

export default reduxForm<{}, AccountFormProps>({
  form: formNames.LEDGER_ACCOUNT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AccountForm));
