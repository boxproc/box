import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Panel, Tabs } from 'components/Tabs';
import { Hr } from 'components/Text';

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
        <Panel title="General">
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
        </Panel>
        <Panel title="Auxiliary Counters">
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
        </Panel>
        <Panel title="Overdue">
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
        </Panel>
        {isEditMode && (
          <Panel title="Cards">
            <Cards />
          </Panel>
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
