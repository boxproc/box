import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  Button,
  ExternalSpinnerProps,
  Hr,
  OkCancelButtons,
  Tabs,
  TabsPanel,
  withSpinner,
} from 'components';

import { formNamesConst, productTypesCodes } from 'consts';

import {
  AuxiliaryCounters,
  Cards,
  GeneralAccountInfo,
  LastStatement,
  Overdue,
  RepaymentStatusTable,
} from 'containers/Ledger/Accounts/components';

import { HandleAddLedgerAccount, HandleUpdateLedgerAccount } from 'store/domains';
import { SelectValues } from 'types';

interface AccountFormProps extends ExternalSpinnerProps {
  institutionsOptions: Array<SelectValues>;
  accountProductType: string;
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
  accountProductType,
  mode,
  dirty,
  pristine,
}) => {
  const isEditMode = React.useMemo(
    () => mode === 'edit',
    [mode]
  );

  const action = React.useMemo(
    () => isEditMode ? updateLedgerAccount : addLedgerAccount,
    [updateLedgerAccount, addLedgerAccount, isEditMode]
  );

  const isLoanProductType = React.useMemo(
    () => accountProductType === productTypesCodes.LOAN,
    [accountProductType]
  );

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
            disabledOk={pristine}
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
            disabledOk={pristine}
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
            disabledOk={pristine}
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
        {isEditMode && isLoanProductType && (
          <TabsPanel title="Repayment Status">
            <Box mt="20px">
              <RepaymentStatusTable />
            </Box>
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
