import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Tabs, TabsPanel } from 'components';

import { formNamesConst } from 'consts';

import {
  LedgerCurrentTransactionBalance,
  LedgerCurrentTransactionCard,
  LedgerCurrentTransactionGeneral,
} from 'containers/Ledger/Transactions/components';

interface LedgerTransactionsFormProps { }

type TransactionsFilterFormAllProps = LedgerTransactionsFormProps &
  InjectedFormProps<{}, LedgerTransactionsFormProps>;

const LedgerTransactionsForm: React.FC<TransactionsFilterFormAllProps> = () => {
  return (
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
  );
};

export default reduxForm<{}, LedgerTransactionsFormProps>({
  form: formNamesConst.LEDGER_TRANSACTIONS,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(LedgerTransactionsForm);
