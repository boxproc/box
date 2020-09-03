import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, CircleList, Modal } from 'components';
import { modalNamesConst } from 'consts';
import { IWithModal, withModal } from 'HOCs';
import { StatementAprLogsTable } from '../../components';

import { IStatementAprLog } from 'store';

interface IStatementAprLogsModal extends IWithModal {
  statementAprLogs: ImmutableArray<IStatementAprLog>;
}

const modalName = modalNamesConst.STATEMENT_APR_LOGS;

const StatementAprLogsModal: React.FC<IStatementAprLogsModal> = ({
  closeModal,
  statementAprLogs,
}) => {
  const productAprId = React.useMemo(
    () => statementAprLogs && statementAprLogs[0] && statementAprLogs[0].productAprId,
    [statementAprLogs]
  );

  const productId = React.useMemo(
    () => statementAprLogs && statementAprLogs[0] && statementAprLogs[0].productId,
    [statementAprLogs]
  );

  return (
    <Modal
      name={modalName}
      title="Statement APR log"
      containerWidth="550px"
      minContainerHeight="500px"
    >
      <Box mb="15px">
        <CircleList
          items={[
            `APR ID: ${productAprId}`,
            `Product ID: ${productId}`,
          ]}
        />
      </Box>
      <StatementAprLogsTable
        data={statementAprLogs}
      />
      <Flex
        justifyContent="flex-end"
        mt="15px"
      >
        <Button
          text="Close"
          type="reset"
          onClick={() => closeModal(modalName)}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(StatementAprLogsModal);
