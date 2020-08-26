import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Flex } from '@rebass/grid';

import { Button, Modal } from 'components';
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
  return (
    <Modal
      name={modalName}
      title="Statement APR log"
      containerWidth="650px"
      minContainerHeight="500px"
    >
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
