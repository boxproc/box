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
} from 'containers/Ledger/Accounts/сomponents';

import { HandleUpdateLedgerAccount } from 'store/domains';

interface EditAccountFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
  updateLedgerAccount: HandleUpdateLedgerAccount;
}

type EditAccountFormAllProps = EditAccountFormProps &
  InjectedFormProps<{}, EditAccountFormProps>;

const EditAccountForm: React.FC<EditAccountFormAllProps> = ({
  onCancel,
  handleSubmit,
  updateLedgerAccount,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateLedgerAccount(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <Panel title="General">
          <GeneralAccountInfo />
        </Panel>
        <Panel title="Auxiliary Counters">
          <AuxiliaryCounters />
        </Panel>
        <Panel title="Overdue">
          <Overdue />
        </Panel>
      </Tabs>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, EditAccountFormProps>({
  form: formNames.EDIT_LEDGER_ACCOUNT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditAccountForm));
