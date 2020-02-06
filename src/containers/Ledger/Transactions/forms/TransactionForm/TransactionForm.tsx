import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, Hr, Tabs, TabsPanel } from 'components';

import { formNamesConst } from 'consts';

import {
  CurrentTransactionBalance,
  CurrentTransactionCard,
  CurrentTransactionGeneral,
} from 'containers/Ledger/Transactions/components';

interface TransactionFormProps {
  onCancel: () => void;
}

type TransactionsFilterFormAllProps = TransactionFormProps &
  InjectedFormProps<{}, TransactionFormProps>;

const TransactionForm: React.FC<TransactionsFilterFormAllProps> = ({
  onCancel,
}) => {
  return (
    <React.Fragment>
      <form>
        <Tabs>
          <TabsPanel title="General">
            <CurrentTransactionGeneral />
          </TabsPanel>
          <TabsPanel title="Card">
            <CurrentTransactionCard />
          </TabsPanel>
          <TabsPanel title="Balance">
            <CurrentTransactionBalance />
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

export default reduxForm<{}, TransactionFormProps>({
  form: formNamesConst.TRANSACTION,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(TransactionForm);
