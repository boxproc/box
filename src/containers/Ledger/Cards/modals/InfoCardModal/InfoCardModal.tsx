import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { CardForm } from 'containers/Ledger/Cards/forms';

import { CloseModal, HandleActivateLedgerCard, LedgerCardItemPrepared } from 'store/domains';

interface InfoAccountModalProps {
  closeModal: CloseModal;
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
  const isStatusActive = (statusValue === 'Active');
  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Card"
      maxContainerWidth={500}
      minContainerHeight={250}
    >
      <React.Fragment>
        <Box mb="10px">
          <Button
            disabled={isStatusActive}
            type="reset"
            onClick={() => activateLedgerCard(ledgerCardPanAlias)}
            text="Activate Card"
          />
        </Box>
      </React.Fragment>
      <CardForm
        initialValues={ledgerCurrentCard}
        onCancel={() => closeModal(modalName)}
      />
      <Hr />
      <Flex
        justifyContent="flex-end"
      >
        <Box mb="10px">
          <Button
            rightPosition={true}
            onClick={() => closeModal(modalName)}
            text="Close"
          />
        </Box>
      </Flex>
    </Modal>
  );
};

export default InfoAccountModal;
