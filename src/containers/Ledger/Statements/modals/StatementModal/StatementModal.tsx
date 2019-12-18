import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, Tabs, TabsPanel, withSpinner } from 'components';
import { TransactionsTable } from 'containers/Ledger/Statements/components';
import { StatementForm } from 'containers/Ledger/Statements/forms';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst, modalTypesConst } from 'consts';

import {
  LedgerStatementItemPrepared,
  LedgerStatementTransactionsItemPrepared,
} from 'store/domains';

import { downloadPDF } from 'containers/Ledger/Statements/downloadPDF';

interface StatementModalProps extends WithModalProps {
  statements: Array<LedgerStatementItemPrepared>;
  currentStatement: Array<LedgerStatementItemPrepared>;
  statementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
}

const modalName = modalNamesConst.LEDGER_STATEMENTS;

const StatementModal: React.FC<StatementModalProps> = ({
  currentStatement,
  closeModal,
  statementTransactions,
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
      </Tabs>
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          text="Generate pdf file"
          iconName={iconNamesConst.FILE_PDF}
          onClick={() => downloadPDF({
            statement: currentStatement,
            transactions: statementTransactions,
          })}
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
