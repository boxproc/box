import React from 'react';

import { Box } from '@rebass/grid';

import Modal from 'components/Modal';

import { Button } from 'components/Buttons';

import { Hr } from 'components/Text';
import { modalNames } from 'consts';
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
      title="Card"
      maxContainerWidth={550}
    >
      <React.Fragment>
        <Box mb="25px">
          <Button
            disabled={isStatusActive}
            type="reset"
            underline={true}
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
       <Box mb="35px">
          <Button
            rightPosition={true}
            onClick={() => closeModal(modalName)}
            iconName="closeModal"
            text="Close"
          />
        </Box>
    </Modal>
  );
};

export default InfoAccountModal;
