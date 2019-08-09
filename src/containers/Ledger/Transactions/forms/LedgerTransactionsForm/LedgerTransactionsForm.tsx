import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Panel, Tabs } from 'components/Tabs';

import { formNames } from 'consts';

import {
  LedgerCurrentTransactionBalance,
  LedgerCurrentTransactionCard,
  LedgerCurrentTransactionGeneral,
} from 'containers/Ledger/Transactions/transactionsComponents';

interface LedgerTransactionsFormProps { }

type TransactionsFilterFormAllProps = LedgerTransactionsFormProps &
  InjectedFormProps<{}, LedgerTransactionsFormProps>;

const LedgerTransactionsForm: React.FC<TransactionsFilterFormAllProps> = () => {
  return (
    <form>
      <Tabs>
        <Panel title="General">
          <LedgerCurrentTransactionGeneral />
        </Panel>
        <Panel title="Card">
          <LedgerCurrentTransactionCard />
        </Panel>
        <Panel title="Balance">
          <LedgerCurrentTransactionBalance />
        </Panel>
      </Tabs>
    </form>
  );
};

export default reduxForm<{}, LedgerTransactionsFormProps>({
  form: formNames.LEDGER_TRANSACTIONS,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(LedgerTransactionsForm);
