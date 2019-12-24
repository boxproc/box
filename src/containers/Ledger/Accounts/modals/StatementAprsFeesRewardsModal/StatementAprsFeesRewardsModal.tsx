import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import {
  StatementAprsTable,
  StatementDate,
  StatementFeesTable,
  StatementRewardsTable,
} from 'containers/Ledger/Statements/components';

import {
  LedgerStatementAprItemPrepared,
  LedgerStatementFeeItemPrepared,
  LedgerStatementRewardItemPrepared,
} from 'store/domains';

interface StatementAprsFeesRewardsProps extends WithModalProps {
  statementAprs: Array<LedgerStatementAprItemPrepared>;
  statementFees: Array<LedgerStatementFeeItemPrepared>;
  statementRewards: Array<LedgerStatementRewardItemPrepared>;
  currentAccountAlias: string;
  currentStatementDate: string;
}

const modalName = modalNamesConst.STATEMENT_APRS_FEES_REWARDS;

const StatementAprsFeesRewards: React.FC<StatementAprsFeesRewardsProps> = ({
  closeModal,
  statementAprs,
  statementFees,
  statementRewards,
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
        <TabsPanel title="Fees">
          <Box mt="20px">
            <StatementDate date={currentStatementDate} />
            <StatementFeesTable data={statementFees} />
          </Box>
        </TabsPanel>
        <TabsPanel title="Rewards">
          <Box mt="20px">
            <StatementDate date={currentStatementDate} />
            <StatementRewardsTable data={statementRewards} />
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

export default withModal(StatementAprsFeesRewards);
