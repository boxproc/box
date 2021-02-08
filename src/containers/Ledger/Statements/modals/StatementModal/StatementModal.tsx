import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, T4, Tabs, TabsPanel } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { StatementAprsTable, TransactionsTable } from './../../components';
import { StatementForm } from './../../forms';

import { iconNamesConst, modalNamesConst, modalTypesConst } from 'consts';

import {
  IStatement,
  IStatementApr,
  IStatementTransaction,
  THandleDownloadStatement,
  THandleGetStatementAprs,
  THandleGetStatementTransactions,
} from 'store';

interface IStatementModal extends IWithModal {
  currentStatement: IStatement;
  currentStatementId: number;
  downloadStatement: THandleDownloadStatement;
  getStatementAprs: THandleGetStatementAprs;
  getStatementTransactions: THandleGetStatementTransactions;
  isLoading: boolean;
  statementAprs: ImmutableArray<IStatementApr>;
  statementPendingTransactions: ImmutableArray<IStatementTransaction>;
  statementTransactions: ImmutableArray<IStatementTransaction>;
}

const modalName = modalNamesConst.STATEMENTS;

const StatementModal: React.FC<IStatementModal> = ({
  closeModal,
  currentStatement,
  currentStatementId,
  downloadStatement,
  getStatementAprs,
  getStatementTransactions,
  isLoading,
  openModal,
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

  const changeMinimumAmount = React.useCallback(
    () => openModal({ name: modalNamesConst.MINIMUM_REPAYMENT }),
    [openModal]
  );

  const sequenceNumber = React.useMemo(
    () => currentStatement && currentStatement.sequenceNumber,
    [currentStatement]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={`Statement #${sequenceNumber}`}
      containerWidth="1010px"
      minContainerHeight="600px"
    >
      <Tabs>

        <TabsPanel title="Totals">
          <StatementForm
            initialValues={currentStatement}
            changeMinimumAmount={changeMinimumAmount}
          />
          <Hr />
        </TabsPanel>

        <TabsPanel
          title="Transactions"
          isLoading={isLoading}
        >
          <Box mt="20px" mb="10px">
            <T4>Pending Transactions</T4>
            <TransactionsTable data={statementPendingTransactions} />
          </Box>
          <Box mt="20px" mb="10px">
            <T4>Transactions</T4>
            <TransactionsTable data={statementTransactions} />
          </Box>
        </TabsPanel>

        <TabsPanel
          title="Accrued Interest"
          isLoading={isLoading}
        >
          <Box mt="20px" mb="10px">
            <StatementAprsTable data={statementAprs} />
          </Box>
        </TabsPanel>

      </Tabs>
      <Flex
        alignItems="center"
        justifyContent="flex-end"
        mt="20px"
      >
        <Box mr="7px">
          <Button
            text="Open pdf statement"
            iconName={iconNamesConst.FILE_PDF}
            classNames={['is-bordered']}
            disabled={isLoading}
            type="reset"
            onClick={downloadStatement}
          />
        </Box>
        <Button
          text="Close"
          type="reset"
          onClick={handleCloseModal}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(StatementModal);
