import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, T4 } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { StatementAprsTable, StatementDate } from 'containers/Ledger/Statements/components';

import { LedgerStatementAprItemPrepared } from 'store';

interface StatementAprsProps extends WithModalProps {
  statementAprs: ImmutableArray<LedgerStatementAprItemPrepared>;
  currentAccountAlias: string;
  currentStatementDate: string;
}

const modalName = modalNamesConst.STATEMENT_APRS;

const StatementAprs: React.FC<StatementAprsProps> = ({
  closeModal,
  statementAprs,
  currentAccountAlias,
  currentStatementDate,
}) => {
  const modalTitle = React.useMemo(
    () => {
      const accountAlias = currentAccountAlias ? `: ${currentAccountAlias}` : '';

      return `Account${accountAlias}`;
    },
    [currentAccountAlias]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title={modalTitle}
      containerWidth="700px"
      minContainerHeight="500px"
    >
      <StatementDate date={currentStatementDate} />
      <T4>Accrued Interest</T4>
      <StatementAprsTable data={statementAprs} />
      <Flex justifyContent="flex-end">
        <Box mt="10px">
          <Button
            text="close"
            onClick={handleOnCancel}
          />
        </Box>
      </Flex>
    </Modal>
  );
};

export default withModal(StatementAprs);
