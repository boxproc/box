import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { StatementAprsTable, StatementDate } from 'containers/Ledger/Statements/components';

import { LedgerStatementAprItemPrepared } from 'store/domains';

interface StatementAprsProps extends WithModalProps {
  statementAprs: Array<LedgerStatementAprItemPrepared>;
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
  const accountAlias = React.useMemo(
    () => currentAccountAlias ? `: ${currentAccountAlias}` : '',
    [currentAccountAlias]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title={`Account${accountAlias}`}
      maxContainerWidth={1010}
      minContainerHeight={500}
    >
      <Tabs>
        <TabsPanel title="Accrued Interest">
          <Box mt="20px">
            <StatementDate date={currentStatementDate} />
            <StatementAprsTable data={statementAprs} />
          </Box>
        </TabsPanel>
      </Tabs>
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
