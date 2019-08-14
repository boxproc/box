import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Panel, Tabs } from 'components/Tabs';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import {
  AuxiliaryCounters,
  GeneralAccountInfo,
  Overdue,
} from 'containers/Ledger/Accounts/components';

import { HandleUpdateLedgerAccount } from 'store/domains';
import { SelectValues } from 'types';

interface AccountFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  updateLedgerAccount: HandleUpdateLedgerAccount;
  onCancel: () => void;
  mode: 'add' | 'edit';
}

type AccountFormAllProps = AccountFormProps &
  InjectedFormProps<{}, AccountFormProps>;

const AccountForm: React.FC<AccountFormAllProps> = ({
  onCancel,
  handleSubmit,
  updateLedgerAccount,
  institutionsOptions,
  mode,
}) => {
  const isEditMode = mode === 'edit';

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateLedgerAccount(data)),
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
        </Panel>
        <Panel title="Auxiliary Counters">
          <AuxiliaryCounters
            isEditMode={isEditMode}
          />
        </Panel>
        <Panel title="Overdue">
          <Overdue
            isEditMode={isEditMode}
          />
        </Panel>
      </Tabs>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
      />
    </form >
  );
};

export default reduxForm<{}, AccountFormProps>({
  form: formNames.LEDGER_ACCOUNT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AccountForm));
