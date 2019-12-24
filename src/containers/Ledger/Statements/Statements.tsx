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
  HandleGetLedgerStatementAprsFeesRewards,
  HandleGetLedgerStatementTransactions,
  LedgerStatementAprItemPrepared,
  LedgerStatementFeeItemPrepared,
  LedgerStatementItemPrepared,
  LedgerStatementRewardItemPrepared,
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
  getLedgerStatementAprsFeesRewards: HandleGetLedgerStatementAprsFeesRewards;
  statementAprs: Array<LedgerStatementAprItemPrepared>;
  statementFees: Array<LedgerStatementFeeItemPrepared>;
  statementRewards: Array<LedgerStatementRewardItemPrepared>;
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
  getLedgerStatementAprsFeesRewards,
  statementAprs,
  statementFees,
  statementRewards,
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
        Promise.all([
          getStatementTransactions(),
          getLedgerStatementAprsFeesRewards(currentId),
        ]);
      }
    },
    [currentId, getStatementTransactions, getLedgerStatementAprsFeesRewards]
  );

  const reportFileName = React.useMemo(
    () => {
      if (!currentStatement) {
        return null;
      }

      const date = currentStatement.statementDate;
      const accountId = currentStatement.accountId;
      const fileName = `statement_${accountId}_${date}`.replace(/\//g, '');

      return fileName;
    },
    [currentStatement]
  );

  const handleGenerateReport = React.useCallback(
    () => {
      downloadPDF({
        fileName: reportFileName,
        statement: currentStatement,
        tables: [
          {
            title: 'Transactions',
            items: statementTransactions,
          },
          {
            title: 'Accrued Interest',
            items: statementAprs,
          },
          {
            title: 'Fees',
            items: statementFees,
          },
          {
            title: 'Rewards',
            items: statementRewards,
          },
        ],
      });
    },
    [
      statementTransactions,
      statementAprs,
      statementFees,
      statementRewards,
      currentStatement,
      reportFileName,
    ]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        isDivider: true,
      },
      {
        name: 'Generate pdf file',
        icon: iconNamesConst.FILE_PDF,
        action: handleGenerateReport,
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
      currentId,
      filterLedgerCustomersById,
      filterLedgerTransactionsById,
      filterLedgerCardsById,
      filterLedgerAccountsById,
      handleGenerateReport,
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
