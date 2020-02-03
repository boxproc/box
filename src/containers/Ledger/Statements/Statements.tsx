import React from 'react';
import { CellInfo } from 'react-table';

import { Flex } from '@rebass/grid';

import { Button } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { StatementsFilter } from './forms';

import { iconNamesConst, modalNamesConst } from 'consts';

import {
  HandleFilterLedgerAccountsById,
  HandleFilterLedgerCardsById,
  HandleFilterLedgerCustomersById,
  HandleFilterLedgerStatements,
  HandleFilterLedgerTransactionsById,
  HandleGenerateStatementTransactionsAprs,
  LedgerStatementItemPrepared,
  ResetStatements,
  SetActiveItemId,
} from 'store/domains';

import { SelectValue } from 'types';
import { dateUtil } from 'utils';

export interface StatementsProps {
  currentId: number;
  statements: Array<LedgerStatementItemPrepared>;
  institutionsOptions: Array<SelectValue>;
  filterLedgerStatements: HandleFilterLedgerStatements;
  filterLedgerCustomersById: HandleFilterLedgerCustomersById;
  filterLedgerAccountsById: HandleFilterLedgerAccountsById;
  filterLedgerTransactionsById: HandleFilterLedgerTransactionsById;
  filterLedgerCardsById: HandleFilterLedgerCardsById;
  generateTransactionsAprsFeesRewards: HandleGenerateStatementTransactionsAprs;
  resetStatements: ResetStatements;
  setActiveItemId: SetActiveItemId;
  isLoadingStatement: boolean;
  isLoading: boolean;
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
  generateTransactionsAprsFeesRewards,
  resetStatements,
  setActiveItemId,
  isLoadingStatement,
  isLoading,
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

  const handleClickOnPdfReportButton = React.useCallback(
    statementId => {
      setActiveItemId(statementId);
      generateTransactionsAprsFeesRewards();
      setTimeout(() => setActiveItemId(null), 100);
    },
    [setActiveItemId, generateTransactionsAprsFeesRewards]
  );

  const contextMenuItems = React.useMemo(
    () => [
      { isDivider: true },
      {
        name: 'Open pdf statement',
        icon: iconNamesConst.FILE_PDF,
        action: generateTransactionsAprsFeesRewards,
      },
      { isDivider: true },
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
      generateTransactionsAprsFeesRewards,
    ]
  );

  const statementsTableColumns = React.useMemo(
    () => {
      return [
        {
          maxWidth: 60,
          accessor: 'deleteButton',
          Cell: (cellInfo: CellInfo) => (
            <Flex
              justifyContent="center"
              width="100%"
            >
              <Button
                iconName={iconNamesConst.FILE_PDF}
                text=""
                iconSize="22"
                onClick={() => handleClickOnPdfReportButton(cellInfo.original.id)}
                hint="Open pdf statement"
                hintPosition="right"
                disabled={isLoadingStatement}
              />
            </Flex>
          ),
        },
        ...tableColumns,
      ];
    },
    [handleClickOnPdfReportButton, isLoadingStatement]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
        statementsDateFrom: dateFrom,
        statementsDateTo: dateTo,
      };
    },
    [institutionsOptions, dateFrom, dateTo]
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
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <StatementsFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default Statements;
