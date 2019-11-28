import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Table, withSpinner } from 'components';
import { tableColumns } from './tableColumns';

import {
  HandleGetLedgerAccountStatements,
  LedgerAccountStatementItemPrepared,
} from 'store/domains';

interface AccountStatementsProps {
  accountStatements: Array<LedgerAccountStatementItemPrepared>;
  getLedgerAccountStatements: HandleGetLedgerAccountStatements;
  accountCurrentId: number;
  onCancel: () => void;
}

const AccountStatements: React.FC<AccountStatementsProps> = ({
  getLedgerAccountStatements,
  accountStatements,
  accountCurrentId,
  onCancel,
}) => {
  React.useEffect(
    () => {
      getLedgerAccountStatements(accountCurrentId);
    },
    [getLedgerAccountStatements, accountCurrentId]
  );

  return (
    <Box mt="20px">
      <Table
        title="Account Cards"
        pageSize={5}
        data={accountStatements}
        columns={tableColumns}
        isSmaller={true}
      />
      <Flex justifyContent="flex-end">
        <Box mt="10px">
          <Button
            text="close"
            type="reset"
            onClick={onCancel}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default withSpinner()(AccountStatements);
