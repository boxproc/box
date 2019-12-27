import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, Tabs, TabsPanel, withSpinner } from 'components';
import {
  StatementAprsTable,
  StatementFeesTable,
  StatementRewardsTable,
  TransactionsTable,
} from 'containers/Ledger/Statements/components';
import { StatementForm } from 'containers/Ledger/Statements/forms';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst, modalTypesConst } from 'consts';

import {
  HandleGetLedgerStatementAprsFeesRewards,
  LedgerStatementAprItemPrepared,
  LedgerStatementFeeItemPrepared,
  LedgerStatementItemPrepared,
  LedgerStatementRewardItemPrepared,
  LedgerStatementTransactionsItemPrepared,
} from 'store/domains';

interface StatementModalProps extends WithModalProps {
  currentStatement: LedgerStatementItemPrepared;
  statementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
  statementAprs: Array<LedgerStatementAprItemPrepared>;
  statementFees: Array<LedgerStatementFeeItemPrepared>;
  statementRewards: Array<LedgerStatementRewardItemPrepared>;
  generateTransactionsAprsFeesRewards: HandleGetLedgerStatementAprsFeesRewards;
}

const modalName = modalNamesConst.LEDGER_STATEMENTS;

const StatementModal: React.FC<StatementModalProps> = ({
  currentStatement,
  closeModal,
  statementTransactions,
  statementAprs,
  statementFees,
  statementRewards,
  generateTransactionsAprsFeesRewards,
}) => {
  const handleCloseModal = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Statement"
      maxContainerWidth={1100}
      minContainerHeight={500}
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
        <TabsPanel title="Fees">
          <Box mt="20px" mb="10px">
            <StatementFeesTable data={statementFees} />
          </Box>
        </TabsPanel>
        <TabsPanel title="Rewards">
          <Box mt="20px" mb="10px">
            <StatementRewardsTable data={statementRewards} />
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
          onClick={generateTransactionsAprsFeesRewards}
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
