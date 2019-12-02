import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import {
  StatementAprsTable,
  StatementFeesTable,
  StatementRewardsTable,
} from 'containers/Ledger/Accounts/components';

import {
  LedgerStatementAprItemPrepared,
  LedgerStatementFeeItemPrepared,
  LedgerStatementRewardItemPrepared,
} from 'store/domains';

interface StatementAprsFeesRewardsProps extends WithModalProps {
  statementAprs: Array<LedgerStatementAprItemPrepared>;
  statementFees: Array<LedgerStatementFeeItemPrepared>;
  statementRewards: Array<LedgerStatementRewardItemPrepared>;
}

const modalName = modalNamesConst.STATEMENT_APRS_FEES_REWARDS;

const StatementAprsFeesRewards: React.FC<StatementAprsFeesRewardsProps> = ({
  closeModal,
  statementAprs,
  statementFees,
  statementRewards,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Statement"
      maxContainerWidth={450}
      minContainerHeight={500}
    >
      <Tabs>
        <TabsPanel title="APRs">
          <Box mt="20px">
            <StatementAprsTable data={statementAprs} />
          </Box>
        </TabsPanel>
        <TabsPanel title="Fees">
          <Box mt="20px">
            <StatementFeesTable data={statementFees} />
          </Box>
        </TabsPanel>
        <TabsPanel title="Rewards">
          <Box mt="20px">
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
