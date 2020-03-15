import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, Paragraph } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { basePath, modalNamesConst, modalTypesConst, sessionStatusCodes } from 'consts';

import { PayloadMessageModal } from 'store/domains';
import { storageUtil, urlUtil } from 'utils';

interface MessageModalProps extends RouteComponentProps, WithModalProps {
  payloadMessageModal: PayloadMessageModal;
}

const modalName = modalNamesConst.MESSAGE;

const MessageModal: React.FC<MessageModalProps> = ({
  payloadMessageModal,
  closeModal,
}) => {
  const [isVisibleDetails, setVisibleDetails] = React.useState(false);

  const message = React.useMemo(
    () => payloadMessageModal && payloadMessageModal.message,
    [payloadMessageModal]
  );

  const details = React.useMemo(
    () => payloadMessageModal && payloadMessageModal.details,
    [payloadMessageModal]
  );

  const statusCode = React.useMemo(
    () => payloadMessageModal && payloadMessageModal.statusCode,
    [payloadMessageModal]
  );

  const type = React.useMemo(
    () => payloadMessageModal && payloadMessageModal.type,
    [payloadMessageModal]
  );

  const isSessionEnded = React.useMemo(
    () => statusCode === sessionStatusCodes.SESSION_TIMEOUT
      || type === modalTypesConst.SESSION_ENDED,
    [statusCode, type]
  );

  const isReLogin = React.useMemo(
    () => isSessionEnded
      || statusCode === sessionStatusCodes.USER_NOT_AUTH
      || statusCode === sessionStatusCodes.INVALID_ID,
    [statusCode, isSessionEnded]
  );

  const detailsButtonText = React.useMemo(
    () => isVisibleDetails ? 'Hide Details' : 'Show Details',
    [isVisibleDetails]
  );

  const modalTitle = React.useMemo(
    () => {
      if (!payloadMessageModal) {
        return null;
      }

      const { title } = payloadMessageModal;

      return isSessionEnded ? 'Session ended' : title;
    },
    [isSessionEnded, payloadMessageModal]
  );

  const modalWidth = React.useMemo(
    () => isVisibleDetails ? 1010 : 350,
    [isVisibleDetails]
  );

  const handleRelogin = React.useCallback(
    () => {
      storageUtil.clear();
      urlUtil.openLocation(basePath);
    },
    []
  );

  const handleCloseModal = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleSetVisibleDetails = React.useCallback(
    () => setVisibleDetails(!isVisibleDetails),
    [setVisibleDetails, isVisibleDetails]
  );

  return (
    <Modal
      name={modalName}
      title={modalTitle}
      containerWidth={modalWidth}
      type={modalTypesConst.MESSAGE_MODAL}
      hideCloseIcon={isReLogin}
      isBackdropBlured={isReLogin}
      zIndex="102"
    >
      <Paragraph light={true}>{message}</Paragraph>
      <Flex
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box mt="5px">
          <Button
            text={isReLogin ? 'Re Login' : 'Close'}
            isFocused={true}
            withAnimation={isReLogin}
            onClick={isReLogin ? handleRelogin : handleCloseModal}
          />
        </Box>
        {details && (
          <Box mt="5px" ml="10px">
            <Button
              text={detailsButtonText}
              onClick={handleSetVisibleDetails}
            />
          </Box>
        )}
      </Flex>
      {isVisibleDetails && (
        <Box mt="15px">
          <Paragraph
            light={true}
            size={9}
            monoFontFamily={true}
          >
            {details}
          </Paragraph>
        </Box>
      )}
    </Modal>
  );
};

export default withModal(MessageModal);
