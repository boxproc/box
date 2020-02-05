import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, Hr, Tabs, TabsPanel } from 'components';

import { formNamesConst } from 'consts';

import {
  LedgerCurrentTransactionBalance,
  LedgerCurrentTransactionCard,
  LedgerCurrentTransactionGeneral,
} from 'containers/Ledger/Transactions/components';

interface LedgerTransactionFormProps {
  onCancel: () => void;
}

type TransactionsFilterFormAllProps = LedgerTransactionFormProps &
  InjectedFormProps<{}, LedgerTransactionFormProps>;

const LedgerTransactionForm: React.FC<TransactionsFilterFormAllProps> = ({
  onCancel,
}) => {
  return (
    <React.Fragment>
      <form>
        <Tabs>
          <TabsPanel title="General">
            <LedgerCurrentTransactionGeneral />
          </TabsPanel>
          <TabsPanel title="Card">
            <LedgerCurrentTransactionCard />
          </TabsPanel>
          <TabsPanel title="Balance">
            <LedgerCurrentTransactionBalance />
          </TabsPanel>
        </Tabs>
      </form>
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={onCancel}
        />
      </Flex>
    </React.Fragment>
  );
};

export default reduxForm<{}, LedgerTransactionFormProps>({
  form: formNamesConst.LEDGER_TRANSACTION,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(LedgerTransactionForm);
