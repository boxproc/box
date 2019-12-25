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
  emptyStatementAprs,
  emptyStatementFees,
  emptyStatementRewards,
  emptyStatementTransactions,
} from 'containers/Ledger/Statements/consts';

import {
  LedgerStatementAprItemPrepared,
  LedgerStatementFeeItemPrepared,
  LedgerStatementItemPrepared,
  LedgerStatementRewardItemPrepared,
  LedgerStatementTransactionsItemPrepared,
} from 'store/domains';

import { downloadPDF } from 'containers/Ledger/Statements/downloadPDF';

interface StatementModalProps extends WithModalProps {
  statements: Array<LedgerStatementItemPrepared>;
  currentStatement: LedgerStatementItemPrepared;
  currentStatementForReport: Array<object>;
  statementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
  statementAprs: Array<LedgerStatementAprItemPrepared>;
  statementFees: Array<LedgerStatementFeeItemPrepared>;
  statementRewards: Array<LedgerStatementRewardItemPrepared>;
}

const modalName = modalNamesConst.LEDGER_STATEMENTS;

const StatementModal: React.FC<StatementModalProps> = ({
  currentStatement,
  currentStatementForReport,
  closeModal,
  statementTransactions,
  statementAprs,
  statementFees,
  statementRewards,
}) => {
  const reportFileName = React.useMemo(
    () => {
      if (!currentStatement) {
        return null;
      }

      const date = currentStatement.statementDate;
      const accountId = currentStatement.accountId;
      const fileName = `statement_${accountId}_${date}`.replace(/\//g, '');

      return fileName;
    },
    [currentStatement]
  );

  const handleCloseModal = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const reportStatementTransactions = React.useMemo(
    () => statementTransactions.length ? statementTransactions : emptyStatementTransactions,
    [statementTransactions]
  );

  const reportStatementAprs = React.useMemo(
    () => statementAprs.length ? statementAprs : emptyStatementAprs,
    [statementAprs]
  );

  const reportStatementFees = React.useMemo(
    () => statementFees.length ? statementFees : emptyStatementFees,
    [statementFees]
  );

  const reportStatementRewards = React.useMemo(
    () => statementRewards.length ? statementRewards : emptyStatementRewards,
    [statementRewards]
  );

  const handleGenerateReport = React.useCallback(
    () => downloadPDF({
      fileName: reportFileName,
      statement: currentStatementForReport,
      tables: [
        {
          title: 'Transactions',
          items: reportStatementTransactions,
        },
        {
          title: 'Accrued Interest',
          items: reportStatementAprs,
        },
        {
          title: 'Fees',
          items: reportStatementFees,
        },
        {
          title: 'Rewards',
          items: reportStatementRewards,
        },
      ],
    }),
    [
      reportStatementTransactions,
      reportStatementAprs,
      reportStatementFees,
      reportStatementRewards,
      currentStatementForReport,
      reportFileName,
    ]
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
          text="Generate pdf file"
          iconName={iconNamesConst.FILE_PDF}
          onClick={handleGenerateReport}
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
