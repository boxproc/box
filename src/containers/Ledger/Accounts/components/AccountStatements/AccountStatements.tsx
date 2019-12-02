import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { RowInfo } from 'react-table';

import { Button, Table, withSpinner } from 'components';
import { tableColumns } from './tableColumns';

import { WithModalProps } from 'HOCs';

import {
  HandleGetLedgerAccountStatements,
  HandleGetLedgerStatementAprsFeesRewards,
  LedgerAccountStatementItemPrepared,
} from 'store/domains';

interface AccountStatementsProps extends WithModalProps {
  accountStatements: Array<LedgerAccountStatementItemPrepared>;
  getLedgerAccountStatements: HandleGetLedgerAccountStatements;
  getLedgerStatementAprsFeesRewards: HandleGetLedgerStatementAprsFeesRewards;
  accountCurrentId: number;
  onCancel: () => void;
}

const AccountStatements: React.FC<AccountStatementsProps> = ({
  getLedgerAccountStatements,
  getLedgerStatementAprsFeesRewards,
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

  const handleClickOnRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      const statementId = rowInfo.original.id;

      return {
        onDoubleClick: () => {
          getLedgerStatementAprsFeesRewards(statementId);
        },
      };
    },
    [getLedgerStatementAprsFeesRewards]
  );

  return (
    <Box mt="20px">
      <Table
        title="Account Cards"
        pageSize={5}
        data={accountStatements}
        columns={tableColumns}
        getTrGroupProps={handleClickOnRow}
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
