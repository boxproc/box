import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, Tabs, TabsPanel, withSpinner } from 'components';
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
  statementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
  statementAprs: Array<LedgerStatementAprItemPrepared>;
  getStatementTransactions: HandleGetLedgerStatementTransactions;
  getStatementAprs: HandleGetLedgerStatementAprs;
  generateTransactionsAprs: HandleGetLedgerStatementAprs;
}

const modalName = modalNamesConst.STATEMENTS;

const StatementModal: React.FC<StatementModalProps> = ({
  currentStatementId,
  currentStatement,
  closeModal,
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
      minContainerHeight="500px"
    >
      <Tabs>
        <TabsPanel title="Totals">
          <StatementForm initialValues={currentStatement} />
          <Hr />
        </TabsPanel>
        <TabsPanel title="Transactions">
          <Box mt="20px" mb="10px">
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
