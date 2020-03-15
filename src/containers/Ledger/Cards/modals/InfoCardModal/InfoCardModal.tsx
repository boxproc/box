import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { cardStatusesConst, modalNamesConst, modalTypesConst } from 'consts';

import { CardForm, StatusForm } from 'containers/Ledger/Cards/forms';

import { HandleActivateLedgerCard, LedgerCardItemPrepared } from 'store/domains';

interface InfoAccountModalProps extends WithModalProps {
  currentCard: Partial<LedgerCardItemPrepared>;
  activateCard: HandleActivateLedgerCard;
  currentStatus: number;
  currentCardId: number;
  isFormDirty: boolean;
  isLoading: boolean;
  isReadOnly: boolean;
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
  isReadOnly,
}) => {
  const buttonText = React.useMemo(
    () => isLoading ? 'Activating...' : 'Activate Card',
    [isLoading]
  );

  const isStatusActive = React.useMemo(
    () => currentStatus === cardStatusesConst.ACTIVE,
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
      type={modalTypesConst.VIEWING}
      title="Card"
      containerWidth="450px"
      withCloseConfirmation={isFormDirty}
    >
      {!isReadOnly && (
        <React.Fragment>
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
        </React.Fragment>
      )}
      <StatusForm isReadOnly={isReadOnly} />
      <Hr />
      <CardForm initialValues={currentCard} />
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          onClick={handleOnCancel}
          text="Close"
          withConfirmation={isFormDirty}
          confirmationTitle="Close the window?"
          confirmationText="You have unsaved changes."
        />
      </Flex>
    </Modal>
  );
};

export default withModal(InfoAccountModal);
