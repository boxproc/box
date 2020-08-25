import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, T4 } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { StatementAprsTable, StatementDate } from 'containers/Ledger/Statements/components';
import { IStatementApr, THandleGetStatementAprLogs } from 'store';

interface IStatementAprs extends IWithModal {
  currentAccAlias: string;
  currentStatementDate: string;
  getStatementAprLogs: THandleGetStatementAprLogs;
  isStatementAprLogsLoading: boolean;
  statementAprs: ImmutableArray<IStatementApr>;
}

const modalName = modalNamesConst.STATEMENT_APRS;

const StatementAprs: React.FC<IStatementAprs> = ({
  closeModal,
  currentAccAlias,
  currentStatementDate,
  getStatementAprLogs,
  isStatementAprLogsLoading,
  statementAprs,
}) => {
  const modalTitle = React.useMemo(
    () => {
      const accountAlias = currentAccAlias ? `: ${currentAccAlias}` : '';

      return `Account${accountAlias}`;
    },
    [currentAccAlias]
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
      <StatementAprsTable
        data={statementAprs}
        isStatementAprLogsLoading={isStatementAprLogsLoading}
        getStatementAprLogs={getStatementAprLogs}
      />
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
