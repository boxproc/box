import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { cardStatusesCodes, modalNamesConst, modalTypesConst, messagesConst } from 'consts';

import { CardForm, StatusForm } from 'containers/Ledger/Cards/forms';

import { HandleActivateLedgerCard, LedgerCardItemPrepared } from 'store/domains';

interface InfoAccountModalProps extends WithModalProps {
  ledgerCurrentCard: Partial<LedgerCardItemPrepared>;
  activateLedgerCard: HandleActivateLedgerCard;
  ledgerCardPanAlias: string;
  currentStatus: number;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.INFO_LEDGER_CARDS;

const InfoAccountModal: React.FC<InfoAccountModalProps> = ({
  closeModal,
  ledgerCurrentCard,
  activateLedgerCard,
  ledgerCardPanAlias,
  currentStatus,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleActivateLedgerCard = React.useCallback(
    () => activateLedgerCard(ledgerCardPanAlias),
    [ledgerCardPanAlias, activateLedgerCard]
  );

  const isStatusActive = currentStatus === cardStatusesCodes.ACTIVE;

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Card"
      maxContainerWidth={450}
      withCloseConfirmation={isFormDirty}
    >
      <Box mb="10px">
        <Button
          disabled={isStatusActive}
          type="reset"
          onClick={handleActivateLedgerCard}
          text="Activate Card"
          isFocused={true}
        />
      </Box>
      <Hr />
      <StatusForm />
      <Hr />
      <CardForm initialValues={ledgerCurrentCard} />
      <Hr />
      <Flex
        justifyContent="flex-end"
      >
        <Button
          rightPosition={true}
          onClick={handleOnCancel}
          text="Close"
          withConfirmation={isFormDirty}
          confirmationTitle={messagesConst.CLOSE_MODAL_WINDOW}
          confirmationText={messagesConst.UNSAVED_CHANGES}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(withSpinner({
  isFixed: true,
})(
  InfoAccountModal
));
