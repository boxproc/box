import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { Button, HighlightCode, Modal, Paragraph } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { basePath, modalNamesConst, modalTypesConst, sessionStatusCodes } from 'consts';

import { IPayloadMessageModal } from 'store';
import { storageUtil, urlUtil } from 'utils';

interface IMessageModal extends RouteComponentProps, IWithModal {
  payloadMessageModal: IPayloadMessageModal;
}

const modalName = modalNamesConst.MESSAGE;

const MessageModal: React.FC<IMessageModal> = ({
  payloadMessageModal,
  closeModal,
}) => {
  const [isVisibleDetails, setVisibleDetails] = React.useState(false);

  const title = React.useMemo(
    () => payloadMessageModal && payloadMessageModal.title,
    [payloadMessageModal]
  );

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

  const isSessionEnded = React.useMemo(
    () => statusCode === sessionStatusCodes.SESSION_TIMEOUT,
    [statusCode]
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
      return isSessionEnded ? 'Session ended' : title;
    },
    [isSessionEnded, title]
  );

  const modalWidth = React.useMemo(
    () => isVisibleDetails ? '1010px' : '350px',
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
      hideCloseIcon={isReLogin}
      type={modalTypesConst.MESSAGE}
    >
      <Paragraph light={true}>{message}</Paragraph>
      {isVisibleDetails && (
        <Box mt="15px" mb="10px">
          <HighlightCode
            value={details}
            height="420px"
          />
        </Box>
      )}
      <Flex
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box mt="5px">
          <Button
            text={isReLogin ? 'Re Login' : 'Close'}
            isFocused={true}
            classNames={[isReLogin ? 'is-animated' : '']}
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
    </Modal>
  );
};

export default withModal(MessageModal);
