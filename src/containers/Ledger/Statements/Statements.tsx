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
  currentId: number;
  statements: Array<LedgerStatementItemPrepared>;
  institutionsOptions: Array<SelectValues>;
  currentStatementForReport: Array<object>;
  statementTransactionsForReport: Array<Partial<LedgerStatementTransactionsItemPrepared>>;
  statementAprsForReport: Array<Partial<LedgerStatementAprItemPrepared>>;
  statementFeesForReport: Array<Partial<LedgerStatementFeeItemPrepared>>;
  statementRewardsForReport: Array<Partial<LedgerStatementRewardItemPrepared>>;
  filterLedgerStatements: HandleFilterLedgerStatements;
  filterLedgerCustomersById: HandleFilterLedgerCustomersById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  currentStatement: LedgerStatementItemPrepared;
  getStatementTransactions: HandleGetLedgerStatementTransactions;
  getLedgerStatementAprsFeesRewards: HandleGetLedgerStatementAprsFeesRewards;
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
  currentStatementForReport,
  getStatementTransactions,
  statementTransactionsForReport,
  getLedgerStatementAprsFeesRewards,
  statementAprsForReport,
  statementFeesForReport,
  statementRewardsForReport,
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
        statement: currentStatementForReport,
        tables: [
          {
            id: 'transactions',
            items: statementTransactionsForReport,
          },
          {
            id: 'accruedInterest',
            items: statementAprsForReport,
          },
          {
            id: 'fees',
            items: statementFeesForReport,
          },
          {
            id: 'rewards',
            items: statementRewardsForReport,
          },
        ],
      });
    },
    [
      statementTransactionsForReport,
      statementAprsForReport,
      statementFeesForReport,
      statementRewardsForReport,
      currentStatementForReport,
      reportFileName,
    ]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        isDivider: true,
      },
      {
        name: 'Open .pdf statement',
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

  const statementsTableColumns = React.useMemo(
    () => {
      return [
        // {
        //   maxWidth: 60,
        //   accessor: 'deleteButton',
        //   Cell: (cellInfo: CellInfo) => (
        //     <Button
        //       iconName={iconNamesConst.FILE_PDF}
        //       text=""
        //       iconSize="24"
        //       onClick={handleGenerateReport}
        //       hint="Open .pdf statement"
        //     />
        //   ),
        // },
        ...tableColumns,
      ];
    },
    []
  );

  return (
    <PageTemplate
      title="Statements"
      data={statements}
      columns={statementsTableColumns}
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
