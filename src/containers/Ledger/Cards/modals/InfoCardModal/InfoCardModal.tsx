import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { cardStatusesCodes, messagesConst, modalNamesConst, modalTypesConst } from 'consts';

import { CardForm, StatusForm } from 'containers/Ledger/Cards/forms';

import { HandleActivateLedgerCard, LedgerCardItemPrepared } from 'store/domains';

interface InfoAccountModalProps extends WithModalProps {
  ledgerCurrentCard: Partial<LedgerCardItemPrepared>;
  activateLedgerCard: HandleActivateLedgerCard;
  currentStatus: number;
  isFormDirty: boolean;
  isLoading: boolean;
}

const modalName = modalNamesConst.INFO_CARDS;

const InfoAccountModal: React.FC<InfoAccountModalProps> = ({
  closeModal,
  ledgerCurrentCard,
  activateLedgerCard,
  currentStatus,
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

  const handleActivateLedgerCard = React.useCallback(
    () => activateLedgerCard(),
    [activateLedgerCard]
  );

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
          disabled={isStatusActive || isLoading}
          type="reset"
          onClick={handleActivateLedgerCard}
          text={buttonText}
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

export default withModal(InfoAccountModal);
