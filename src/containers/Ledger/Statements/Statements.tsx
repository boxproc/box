import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';
import { StatementsFilterForm } from './forms';

import { modalNamesConst } from 'consts';

import { HandleSetLedgerStatementId, LedgerStatementItemPrepared } from 'store/domains';

export interface StatementsProps {
  ledgerStatements: Array<LedgerStatementItemPrepared>;
  setLedgerStatementId: HandleSetLedgerStatementId;
}

const Statements: React.FC<StatementsProps> = ({
  ledgerStatements,
  setLedgerStatementId,
}) => {
  return (
    <TablePage
      title="Statements"
      data={ledgerStatements}
      columns={tableColumns}
      editModalName={modalNamesConst.LEDGER_STATEMENTS}
      setCurrentIdAction={setLedgerStatementId}
      FilterForm={
        <StatementsFilterForm />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Statements);
