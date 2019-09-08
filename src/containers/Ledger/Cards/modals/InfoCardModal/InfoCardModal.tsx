import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { Hr } from 'components/Delimiter';
import Modal from 'components/Modal';

import { modalNames, modalTypes } from 'consts';

import { CardForm } from 'containers/Ledger/Cards/forms';

import { CloseModal, HandleActivateLedgerCard, LedgerCardItemPrepared } from 'store/domains';

interface InfoAccountModalProps {
  closeModal: CloseModal;
  ledgerCurrentCard: Partial<LedgerCardItemPrepared>;
  activateLedgerCard: HandleActivateLedgerCard;
  ledgerCardPanAlias: string;
  statusValue: string;
}

const modalName = modalNames.INFO_LEDGER_CARDS;

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
      type={modalTypes.EDIT_MODAL}
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
            iconName="activateCard"
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
            iconName="closeModal"
            text="Close"
          />
        </Box>
      </Flex>
    </Modal>
  );
};

export default InfoAccountModal;
