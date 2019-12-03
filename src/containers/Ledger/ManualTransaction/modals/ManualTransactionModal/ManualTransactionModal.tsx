import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { ExternalLink, Modal, T2, withSpinner } from 'components';
import { ManualTransactionForm } from 'containers/Ledger/ManualTransaction/forms';

import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { HandleMakeLedgerTransaction } from 'store/domains';

import { stringsUtil } from 'utils';

interface ManualTransactionModalProps extends RouteComponentProps, WithModalProps {
  makeLedgerTransaction: HandleMakeLedgerTransaction;
}
const modalName = modalNamesConst.LEDGER_MANUAL_TRANSACTION;

const ManualTransactionModal: React.FC<ManualTransactionModalProps> = ({
  location,
  makeLedgerTransaction,
  closeModal,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      maxContainerWidth={550}
    >
      <Flex alignItems="center">
        <Box mb="15px" mr="15px">
          <ExternalLink
            text="HELP"
            link={stringsUtil.getCurrentBPSUrl(location.pathname)}
            grayStyle={true}
          />
        </Box>
        <T2>Manual Transaction</T2>
      </Flex>
      <ManualTransactionForm
        makeLedgerTransaction={makeLedgerTransaction}
        onCancel={handleOnCancel}
      />
    </Modal>
  );
};

const transactionWithRouter = withRouter(ManualTransactionModal);
const transactionWithRouterAndModal = withModal(transactionWithRouter);

export default withSpinner({
  isFixed: true,
})(transactionWithRouterAndModal);
