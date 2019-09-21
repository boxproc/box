import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import {
  Button,
  ExternalSpinnerProps,
  Hr,
  OkCancelButtons,
  Tabs,
  TabsPanel,
  withSpinner,
} from 'components';

import { formNamesConst } from 'consts';

import {
  AuxiliaryCounters,
  Cards,
  GeneralAccountInfo,
  LastStatement,
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
  dirty,
  pristine,
  invalid,
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
            withCancelConfirmation={dirty}
            disabledOk={pristine || invalid}
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
            withCancelConfirmation={dirty}
            disabledOk={pristine || invalid}
          />
        </TabsPanel>
        <TabsPanel title="Overdue">
          <Overdue isEditMode={isEditMode} />
          <Hr />
          <OkCancelButtons
            okText="Save"
            cancelText="Close"
            onCancel={onCancel}
            rightPosition={true}
            withCancelConfirmation={dirty}
            disabledOk={pristine || invalid}
          />
        </TabsPanel>
        {isEditMode && (
          <TabsPanel title="Cards">
            <Cards />
          </TabsPanel>
        )}
        {isEditMode && (
          <TabsPanel title="Last Statement">
            <LastStatement />
            <Hr />
            <Flex justifyContent="flex-end">
              <Button
                text="close"
                onClick={onCancel}
              />
            </Flex>
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
