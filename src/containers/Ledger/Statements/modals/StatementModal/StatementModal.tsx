import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, T4, Tabs, TabsPanel, withSpinner } from 'components';
import { StatementAprsTable, TransactionsTable } from 'containers/Ledger/Statements/components';
import { StatementForm } from 'containers/Ledger/Statements/forms';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst, modalTypesConst } from 'consts';

import {
  HandleGetLedgerStatementAprs,
  HandleGetLedgerStatementTransactions,
  LedgerStatementAprItemPrepared,
  LedgerStatementItemPrepared,
  LedgerStatementTransactionsItemPrepared,
} from 'store';

interface StatementModalProps extends WithModalProps {
  currentStatementId: number;
  currentStatement: LedgerStatementItemPrepared;
  statementPendingTransactions: ImmutableArray<LedgerStatementTransactionsItemPrepared>;
  statementTransactions: ImmutableArray<LedgerStatementTransactionsItemPrepared>;
  statementAprs: ImmutableArray<LedgerStatementAprItemPrepared>;
  getStatementTransactions: HandleGetLedgerStatementTransactions;
  getStatementAprs: HandleGetLedgerStatementAprs;
  generateTransactionsAprs: HandleGetLedgerStatementAprs;
}

const modalName = modalNamesConst.STATEMENTS;

const StatementModal: React.FC<StatementModalProps> = ({
  currentStatementId,
  currentStatement,
  closeModal,
  statementPendingTransactions,
  statementTransactions,
  statementAprs,
  getStatementTransactions,
  getStatementAprs,
  generateTransactionsAprs,
}) => {
  React.useEffect(
    () => {
      Promise.all([
        getStatementTransactions(),
        getStatementAprs(currentStatementId),
      ]);
    },
    [getStatementTransactions, getStatementAprs, currentStatementId]
  );

  const handleCloseModal = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title="Statement"
      containerWidth="1010px"
      minContainerHeight="600px"
    >
      <Tabs>
        <TabsPanel title="Totals">
          <StatementForm initialValues={currentStatement} />
          <Hr />
        </TabsPanel>
        <TabsPanel title="Transactions">
          <Box mt="20px" mb="10px">
            <T4>Pending Transactions</T4>
            <TransactionsTable statementTransactions={statementPendingTransactions} />
          </Box>
          <Box mt="20px" mb="10px">
            <T4>Transactions</T4>
            <TransactionsTable statementTransactions={statementTransactions} />
          </Box>
        </TabsPanel>
        <TabsPanel title="Accrued Interest">
          <Box mt="20px" mb="10px">
            <StatementAprsTable data={statementAprs} />
          </Box>
        </TabsPanel>
      </Tabs>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mt="20px"
      >
        <Button
          text="Open pdf statement"
          iconName={iconNamesConst.FILE_PDF}
          onClick={generateTransactionsAprs}
        />
        <Button
          text="Close"
          onClick={handleCloseModal}
        />
      </Flex>
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(StatementModal));
