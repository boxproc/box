import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { cardStatusesCodes, messagesConst, modalNamesConst, modalTypesConst } from 'consts';

import { CardForm, StatusForm } from 'containers/Ledger/Cards/forms';

import { HandleActivateLedgerCard, LedgerCardItemPrepared } from 'store/domains';

interface InfoAccountModalProps extends WithModalProps {
  currentCard: Partial<LedgerCardItemPrepared>;
  activateCard: HandleActivateLedgerCard;
  currentStatus: number;
  currentCardId: number;
  isFormDirty: boolean;
  isLoading: boolean;
}

const modalName = modalNamesConst.INFO_CARDS;

const InfoAccountModal: React.FC<InfoAccountModalProps> = ({
  closeModal,
  currentCard,
  activateCard,
  currentStatus,
  currentCardId,
  isFormDirty,
  isLoading,
}) => {
  const buttonText = React.useMemo(
    () => isLoading ? 'Activating...' : 'Activate Card',
    [isLoading]
  );

  const isStatusActive = React.useMemo(
    () => currentStatus === cardStatusesCodes.ACTIVE,
    [currentStatus]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleActivateCard = React.useCallback(
    () => activateCard(currentCardId),
    [activateCard, currentCardId]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="Card"
      containerWidth={450}
      withCloseConfirmation={isFormDirty}
    >
      <Box mb="10px">
        <Button
          disabled={isStatusActive || isLoading}
          type="reset"
          onClick={handleActivateCard}
          text={buttonText}
          isFocused={true}
        />
      </Box>
      <Hr />
      <StatusForm />
      <Hr />
      <CardForm initialValues={currentCard} />
      <Hr />
      <Flex justifyContent="flex-end">
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

export default withModal(InfoAccountModal);
