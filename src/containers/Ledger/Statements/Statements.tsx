import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';
import { StatementsFilter } from './forms';

import { modalNamesConst } from 'consts';

import { HandleFilterLedgerStatements, LedgerStatementItemPrepared } from 'store/domains';

import { SelectValues } from 'types';

import { dateUtil } from 'utils';

export interface StatementsProps {
  ledgerStatements: Array<LedgerStatementItemPrepared>;
  filterLedgerStatements: HandleFilterLedgerStatements;
  institutionsOptions: Array<SelectValues>;
}

const Statements: React.FC<StatementsProps> = ({
  ledgerStatements,
  filterLedgerStatements,
  institutionsOptions,
}) => {
  return (
    <TablePage
      title="Statements"
      data={ledgerStatements}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_STATEMENTS}
      filterAction={filterLedgerStatements}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        dateFrom: dateUtil.yesterday,
        dateTo: dateUtil.today,
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
