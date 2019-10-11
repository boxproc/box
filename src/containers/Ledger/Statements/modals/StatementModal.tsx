import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, Tabs, TabsPanel } from 'components';
import { withModal, WithModalProps } from 'HOCs';
import { StatementForm } from '../forms';

import { modalNamesConst, modalTypesConst } from 'consts';
import TransactionsTable from '../components/TransactionsTable';

interface StatementModalProps extends WithModalProps { }

const modalName = modalNamesConst.LEDGER_STATEMENTS;

const StatementModal: React.FC<StatementModalProps> = ({
  closeModal,
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
      closeOnBackdrop={true}
      maxContainerWidth={1100}
      minContainerHeight={566}
    >
      <Tabs>
        <TabsPanel title="Totals">
          <StatementForm isDisabled={true} />
          <Hr />
          <Flex justifyContent="flex-end">
            <Button
              text="close"
              onClick={handleCloseModal}
            />
          </Flex>
        </TabsPanel>
        <TabsPanel title="Transactions" >
          <TransactionsTable />
          <Flex justifyContent="flex-end">
            <Box mt="10px">
              <Button
                text="close"
                onClick={handleCloseModal}
              />
            </Box>
          </Flex>
        </TabsPanel>
      </Tabs>
    </Modal>
  );
};

export default withModal(StatementModal);
