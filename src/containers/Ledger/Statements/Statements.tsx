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
  filterStatements: HandleFilterLedgerStatements;
  filterCustomersById: HandleFilterLedgerCustomersById;
  filterAccountsById: HandleFilterLedgerAccountsById;
  filterTransactionsById: HandleFilterLedgerTransactionsById;
  filterCardsById: HandleFilterLedgerCardsById;
  generateTransactionsAprsFeesRewards: HandleGenerateStatementTransactionsAprs;
  resetStatements: ResetStatements;
  setActiveItemId: SetActiveItemId;
  isLoadingStatement: boolean;
  isLoading: boolean;
}

const Statements: React.FC<StatementsProps> = ({
  statements,
  filterStatements,
  institutionsOptions,
  filterTransactionsById,
  filterCustomersById,
  filterCardsById,
  filterAccountsById,
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
      setDateFrom(dateUtil.yesterdayDate());
      setDateTo(dateUtil.todayDate());

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
        action: () => filterAccountsById({ statement_id: currentId }),
      },
      {
        name: 'Customers',
        action: () => filterCustomersById({ statement_id: currentId }),
      },
      {
        name: 'Cards',
        action: () => filterCardsById({ statement_id: currentId }),
      },
      {
        name: 'Transactions',
        action: () => filterTransactionsById({ statement_id: currentId }),
      },
    ],
    [
      currentId,
      filterCustomersById,
      filterTransactionsById,
      filterCardsById,
      filterAccountsById,
      generateTransactionsAprsFeesRewards,
    ]
  );

  const statementsTableColumns = React.useMemo(
    () => {
      return [
        {
          maxWidth: 50,
          accessor: 'deleteButton',
          Cell: (cellInfo: CellInfo) => (
            <Flex
              justifyContent="center"
              width="100%"
            >
              <Button
                iconName={iconNamesConst.FILE_PDF}
                onClick={() => handleClickOnPdfReportButton(cellInfo.original.id)}
                title="Open pdf statement"
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
      viewingModalName={modalNamesConst.STATEMENTS}
      filterAction={filterStatements}
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
