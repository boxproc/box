import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { StatementsFilter } from './forms';

import { downloadPDF } from 'containers/Ledger/Statements/downloadPDF';

import { iconNamesConst, modalNamesConst } from 'consts';

import {
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerStatements,
  HandleFilterLedgerTransactionsById,
  HandleGetLedgerStatementTransactions,
  LedgerStatementItemPrepared,
  LedgerStatementTransactionsItemPrepared,
  ResetStatements,
} from 'store/domains';

import { SelectValues } from 'types';
import { dateUtil } from 'utils';

export interface StatementsProps {
  statements: Array<LedgerStatementItemPrepared>;
  filterLedgerStatements: HandleFilterLedgerStatements;
  institutionsOptions: Array<SelectValues>;
  currentId: number;
  filterLedgerCustomersById: HandleFilterLedgerCustomersById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  currentStatement: LedgerStatementItemPrepared;
  getStatementTransactions: HandleGetLedgerStatementTransactions;
  statementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
  resetStatements: ResetStatements;
}

const Statements: React.FC<StatementsProps> = ({
  statements,
  filterLedgerStatements,
  institutionsOptions,
  filterLedgerTransactionsById,
  filterLedgerCustomersById,
  filterLedgerCardsById,
  filterLedgerAccountsById,
  currentId,
  currentStatement,
  getStatementTransactions,
  statementTransactions,
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

  React.useEffect(
    () => {
      if (currentId) {
        getStatementTransactions();
      }
    },
    [currentId, getStatementTransactions]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        isDivider: true,
      },
      {
        name: 'Generate pdf file',
        icon: iconNamesConst.FILE_PDF,
        action: () => downloadPDF({
          statement: currentStatement,
          transactions: statementTransactions,
        }),
      },
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
      currentStatement,
      statementTransactions,
      currentId,
    ]
  );

  return (
    <PageTemplate
      title="Statements"
      data={statements}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_STATEMENTS}
      filterAction={filterLedgerStatements}
      contextMenuItems={contextMenuItems}
      isDownloadButton={true}
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
