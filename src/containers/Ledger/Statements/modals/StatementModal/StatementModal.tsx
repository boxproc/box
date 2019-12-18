import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, Tabs, TabsPanel, withSpinner } from 'components';
import { TransactionsTable } from 'containers/Ledger/Statements/components';
import { StatementForm } from 'containers/Ledger/Statements/forms';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import {
  HandleGetLedgerStatementTransactions,
  LedgerStatementItemPrepared,
  LedgerStatementTransactionsItemPrepared,
} from 'store/domains';

// import { downloadPDF } from './downloadPDF';

interface StatementModalProps extends WithModalProps {
  statements: Array<LedgerStatementItemPrepared>;
  currentStatement: Array<LedgerStatementItemPrepared>;
  getStatementTransactions: HandleGetLedgerStatementTransactions;
  statementTransactions: Array<LedgerStatementTransactionsItemPrepared>;
}

const modalName = modalNamesConst.LEDGER_STATEMENTS;

const StatementModal: React.FC<StatementModalProps> = ({
  currentStatement,
  closeModal,
  getStatementTransactions,
  statementTransactions,
}) => {
  React.useEffect(
    () => {
      getStatementTransactions();
    },
    [getStatementTransactions]
  );

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
          <Box mt="20px">
            <TransactionsTable statementTransactions={statementTransactions} />
          </Box>
        </TabsPanel>
      </Tabs>
      <Flex justifyContent="flex-end">
        {/* <Button
          text="Generate pdf file"
          iconName={iconNamesConst.FILE_PDF}
          onClick={() => downloadPDF({
            fileName: 'statement',
            title: 'Statement',
            downloadData: currentStatement,
            location: window.location.href,
          })}
        /> */}
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
