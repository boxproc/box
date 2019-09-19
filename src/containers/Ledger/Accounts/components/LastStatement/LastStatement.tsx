import React from 'react';

import { StatementInfoTemplate, withSpinner } from 'components';

import { HandleGetLedgerLastStatement } from 'store/domains';

interface LastStatementProps {
  getLedgerLastStatement: HandleGetLedgerLastStatement;
  accountCurrentId: number;
}

const LastStatement: React.FC<LastStatementProps> = ({
  getLedgerLastStatement,
  accountCurrentId,
}) => {
  React.useEffect(
    () => {
      getLedgerLastStatement(accountCurrentId);
    },
    [getLedgerLastStatement, accountCurrentId]
  );

  return (
    <StatementInfoTemplate isDisabled={true} />
  );
};

export default withSpinner()(LastStatement);
