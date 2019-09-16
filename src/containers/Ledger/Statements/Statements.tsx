import React from 'react';

import { TablePage } from 'components';

import { tableColumns } from './components';
import { StatementsFilterForm } from './forms';

import { modalNamesConst } from 'consts';

const data = [
  {
    id: 1,
    accountId: 1,
    dateFrom: '16/09/2019 11:03:37',
    dateTo: '16/09/2019 11:03:37',
    balanceOpen: 1,
    balanceClose: 1,
    minimumAmountDueRepayment: 1,
    statementCycleId: 1,
    cycleExecutionHistoryId: 1,
    accountAlias: 1,
    institution: 'institution 1',
    product: 'product 1',
    firstName: 'first name 1',
    lastName: 'last name 1',
  },
  {
    id: 2,
    accountId: 2,
    dateFrom: '16/09/2019 11:03:37',
    dateTo: '16/09/2019 11:03:37',
    balanceOpen: 2,
    balanceClose: 2,
    minimumAmountDueRepayment: 2,
    statementCycleId: 2,
    cycleExecutionHistoryId: 2,
    accountAlias: 2,
    institution: 'institution 2',
    product: 'product 2',
    firstName: 'first name 2',
    lastName: 'last name 2',
  },
];

const Statements = () => {
  return (
    <TablePage
      title="Statements"
      columns={tableColumns}
      data={data}
      editModalName={modalNamesConst.LEDGER_STATEMENTS}
      FilterForm={
        <StatementsFilterForm />
      }
    />
  );
};

export default Statements;
