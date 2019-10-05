import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { StatementsFilter } from './forms';

import { modalNamesConst } from 'consts';

import {
  HandleFilterLedgerStatements,
  LedgerStatementItemPrepared,
  ResetStatements,
} from 'store/domains';

import { SelectValues } from 'types';

import { dateUtil } from 'utils';

export interface StatementsProps {
  ledgerStatements: Array<LedgerStatementItemPrepared>;
  filterLedgerStatements: HandleFilterLedgerStatements;
  institutionsOptions: Array<SelectValues>;
  resetStatements: ResetStatements;
}

const Statements: React.FC<StatementsProps> = ({
  ledgerStatements,
  filterLedgerStatements,
  institutionsOptions,
  resetStatements,
}) => {
  React.useEffect(
    () => {
      return () => resetStatements();
    },
    [resetStatements]
  );

  return (
    <PageTemplate
      title="Statements"
      data={ledgerStatements}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_STATEMENTS}
      filterAction={filterLedgerStatements}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
        dateFrom: dateUtil.yesterdayDate,
        dateTo: dateUtil.todayDate,
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
