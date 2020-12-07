import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, T4 } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';
import { StatementAprsTable, StatementDate } from 'containers/Ledger/Statements/components';
import { IStatementApr } from 'store';

interface IStatementAprs extends IWithModal {
  currentStatementDate: string;
  statementAprs: ImmutableArray<IStatementApr>;
}

const modalName = modalNamesConst.STATEMENT_APRS;

const StatementAprs: React.FC<IStatementAprs> = ({
  closeModal,
  currentStatementDate,
  statementAprs,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Statement"
      containerWidth="1010px"
      minContainerHeight="500px"
    >
      <StatementDate date={currentStatementDate} />
      <T4>Accrued Interest</T4>
      <StatementAprsTable data={statementAprs} />
      <Flex justifyContent="flex-end">
        <Box mt="15px">
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
