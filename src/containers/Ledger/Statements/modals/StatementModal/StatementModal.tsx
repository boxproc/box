import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, T4, Tabs, TabsPanel, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { StatementAprsTable, TransactionsTable } from './../../components';
import { StatementForm } from './../../forms';

import { iconNamesConst, modalNamesConst, modalTypesConst } from 'consts';

import {
  IStatement,
  IStatementApr,
  IStatementTransaction,
  THandleGetStatementAprs,
  THandleGetStatementTransactions,
} from 'store';

interface IStatementModal extends WithModalProps {
  currentStatement: IStatement;
  currentStatementId: number;
  generateTransactionsAprs: THandleGetStatementAprs;
  getStatementAprs: THandleGetStatementAprs;
  getStatementTransactions: THandleGetStatementTransactions;
  statementAprs: ImmutableArray<IStatementApr>;
  statementPendingTransactions: ImmutableArray<IStatementTransaction>;
  statementTransactions: ImmutableArray<IStatementTransaction>;
}

const modalName = modalNamesConst.STATEMENTS;

const StatementModal: React.FC<IStatementModal> = ({
  closeModal,
  currentStatement,
  currentStatementId,
  generateTransactionsAprs,
  getStatementAprs,
  getStatementTransactions,
  statementAprs,
  statementPendingTransactions,
  statementTransactions,
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
            <TransactionsTable data={statementPendingTransactions} />
          </Box>
          <Box mt="20px" mb="10px">
            <T4>Transactions</T4>
            <TransactionsTable data={statementTransactions} />
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
