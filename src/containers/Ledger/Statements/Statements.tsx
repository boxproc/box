import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { StatementsFilter } from './forms';

import { modalNamesConst } from 'consts';

import {
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerStatements,
  HandleFilterLedgerTransactionsById,
  LedgerStatementItemPrepared,
  ResetStatements,
} from 'store/domains';

import { SelectValues } from 'types';
import { dateUtil } from 'utils';

export interface StatementsProps {
  ledgerStatements: Array<LedgerStatementItemPrepared>;
  filterLedgerStatements: HandleFilterLedgerStatements;
  institutionsOptions: Array<SelectValues>;
  currentId: number;
  filterLedgerCustomersById: HandleFilterLedgerCustomersById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  resetStatements: ResetStatements;
}

const Statements: React.FC<StatementsProps> = ({
  ledgerStatements,
  filterLedgerStatements,
  institutionsOptions,
  filterLedgerTransactionsById,
  filterLedgerCustomersById,
  filterLedgerCardsById,
  filterLedgerAccountsById,
  currentId,
  resetStatements,
}) => {
  const [dateFrom, setDateFrom] = React.useState(null);
  const [dateTo, setDateTo] = React.useState(null);

  React.useEffect(
    () => {
      setDateFrom(dateUtil.yesterdayDate);
      setDateTo(dateUtil.todayDate);

      return () => resetStatements();
    },
    [resetStatements]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        isDivider: true,
      },
      {
        name: 'Accounts',
        action: () => filterLedgerAccountsById({ statement_id: currentId }),
      },
      {
        name: 'Customers',
        action: () => filterLedgerCustomersById({ statement_id: currentId }),
      },
      {
        name: 'Cards',
        action: () => filterLedgerCardsById({ statement_id: currentId }),
      },
      {
        name: 'Transactions',
        action: () => filterLedgerTransactionsById({ statement_id: currentId }),
      },
    ],
    [
      filterLedgerCustomersById,
      filterLedgerTransactionsById,
      filterLedgerCardsById,
      filterLedgerAccountsById,
      currentId,
    ]
  );

  return (
    <PageTemplate
      title="Statements"
      data={ledgerStatements}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_STATEMENTS}
      filterAction={filterLedgerStatements}
      contextMenuItems={contextMenuItems}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        statementsDateFrom: dateFrom,
        statementsDateTo: dateTo,
      }}
      FilterForm={
        <StatementsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Statements);
