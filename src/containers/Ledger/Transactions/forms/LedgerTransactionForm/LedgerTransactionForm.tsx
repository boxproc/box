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
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={onCancel}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, LedgerTransactionFormProps>({
  form: formNamesConst.LEDGER_TRANSACTION,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(LedgerTransactionForm);
