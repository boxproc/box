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
      FilterForm={
        <StatementsFilter institutionsOptions={institutionsOptions} />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Statements);
