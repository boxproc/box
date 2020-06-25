import React from 'react';
import { CellInfo } from 'react-table';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import { Button } from 'components';
import { tableColumns } from './components';
import { StatementsFilter } from './forms';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';

import {
  IStatement,
  THandleDownloadStatement,
  THandleFilterAccountsById,
  THandleFilterCardsById,
  THandleFilterCustomersById,
  THandleFilterStatements,
  THandleFilterTransactionsById,
  TResetStatements,
  TSetActiveItemId,
} from 'store';

import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface IStatements {
  currentId: number;
  filterAccountsById: THandleFilterAccountsById;
  filterCardsById: THandleFilterCardsById;
  filterCustomersById: THandleFilterCustomersById;
  filterStatements: THandleFilterStatements;
  filterTransactionsById: THandleFilterTransactionsById;
  downloadStatement: THandleDownloadStatement;
  institutionsOptions: Array<ISelectValue>;
  isLoading: boolean;
  isLoadingStatement: boolean;
  resetStatements: TResetStatements;
  setActiveItemId: TSetActiveItemId;
  statements: ImmutableArray<IStatement>;
}

const Statements: React.FC<IStatements> = ({
  currentId,
  filterAccountsById,
  filterCardsById,
  filterCustomersById,
  filterStatements,
  filterTransactionsById,
  downloadStatement,
  institutionsOptions,
  isLoading,
  isLoadingStatement,
  resetStatements,
  setActiveItemId,
  statements,
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
      downloadStatement();
      setTimeout(() => setActiveItemId(null), 100);
    },
    [setActiveItemId, downloadStatement]
  );

  const contextMenuItems = React.useMemo(
    () => [
      { isDivider: true },
      {
        name: 'Open pdf statement',
        icon: iconNamesConst.FILE_PDF,
        action: downloadStatement,
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
      downloadStatement,
    ]
  );

  const statementsTableColumns = React.useMemo(
    () => {
      return [
        {
          maxWidth: 50,
          accessor: 'openPdfButton',
          Cell: (cellInfo: CellInfo) => (
            <Flex
              justifyContent="center"
              width="100%"
            >
              <Button
                iconName={iconNamesConst.FILE_PDF}
                onClick={() => handleClickOnPdfReportButton(cellInfo.original.id)}
                title="Open pdf statement"
                isLoading={isLoadingStatement}
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
      columns={statementsTableColumns}
      contextMenuItems={contextMenuItems}
      data={statements}
      filterAction={filterStatements}
      initialFilterValues={initialFilterValues}
      isDownloadButton={true}
      isLoading={isLoading}
      title="Statements"
      viewingModalName={modalNamesConst.STATEMENTS}
      FilterForm={
        <StatementsFilter
          institutionsOptions={institutionsOptions}
          isDisabled={isLoading}
        />
      }
    />
  );
};

export default Statements;
