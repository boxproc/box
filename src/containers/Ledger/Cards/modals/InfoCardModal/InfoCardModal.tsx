import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { CardForm } from 'containers/Ledger/Cards/forms';

import { HandleActivateLedgerCard, LedgerCardItemPrepared } from 'store/domains';

interface InfoAccountModalProps extends WithModalProps {
  ledgerCurrentCard: Partial<LedgerCardItemPrepared>;
  activateLedgerCard: HandleActivateLedgerCard;
  ledgerCardPanAlias: string;
  statusValue: string;
}

const modalName = modalNamesConst.INFO_LEDGER_CARDS;

const InfoAccountModal: React.FC<InfoAccountModalProps> = ({
  closeModal,
  ledgerCurrentCard,
  activateLedgerCard,
  ledgerCardPanAlias,
  statusValue,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const isStatusActive = (statusValue === 'Active');

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Card"
      maxContainerWidth={500}
    >
      <React.Fragment>
        <Box mb="10px">
          <Button
            disabled={isStatusActive}
            type="reset"
            onClick={() => activateLedgerCard(ledgerCardPanAlias)}
            text="Activate Card"
            isFocused={true}
          />
        </Box>
      </React.Fragment>
      <CardForm
        initialValues={ledgerCurrentCard}
        onCancel={handleOnCancel}
      />
      <Hr />
      <Flex
        justifyContent="flex-end"
      >
        <Button
          rightPosition={true}
          onClick={handleOnCancel}
          text="Close"
        />
      </Flex>
    </Modal>
  );
};

export default withModal(InfoAccountModal);
