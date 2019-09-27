import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, Paragraph } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { basePath, modalNamesConst, statusCodes } from 'consts';

import { PayloadMessageModal } from 'store/domains';
import { storageUtil, urlUtil } from 'utils';

interface MessageModalProps extends RouteComponentProps, WithModalProps {
  payloadMessageModal: PayloadMessageModal;
}

const modalName = modalNamesConst.MESSAGE_MODAL;

const MessageModal: React.FC<MessageModalProps> = ({
  payloadMessageModal,
  closeModal,
  closeAllModals,
}) => {
  const { title, message, details, statusCode } = payloadMessageModal;

  const isSessionEnded = statusCode === statusCodes.NO_SESSION
    || statusCode === statusCodes.SESSION_TIMEOUT;

  const isReLogin = isSessionEnded
    || statusCode === statusCodes.USER_NOT_AUTH
    || statusCode === statusCodes.NO_SESSION_ID;

  const isIncorrectPassword = statusCode === statusCodes.INCORRECT_PASSWORD;

  const isSmallWindow = isIncorrectPassword || isSessionEnded;

  React.useEffect(
    () => {
      return () => {
        if (isReLogin) {
          storageUtil.clear();
          closeAllModals();
          urlUtil.openLocation(basePath);
        }
      };
    },
    [statusCode, closeAllModals, isSessionEnded, isReLogin]
  );

  const [isVisibleDetail, setVisibleDetail] = React.useState(false);

  const handleClick = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title={isSessionEnded ? 'Session ended' : title}
      maxContainerWidth={isSmallWindow ? 350 : 500}
      zIndex="102"
      closeOnBackdrop={true}
    >
      <Paragraph light={true}>{message}</Paragraph>
      <Flex
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box mt="5px">
          <Button
            text={isReLogin ? 'Re Login' : 'Close'}
            isFocused={isSessionEnded}
            onClick={handleClick}
          />
        </Box>
        {details && (
          <Box mt="5px" ml="10px">
            <Button
              text={isVisibleDetail ? 'Hide Details' : 'Show Details'}
              onClick={() => setVisibleDetail(!isVisibleDetail)}
            />
          </Box>
        )}
      </Flex>
      {isVisibleDetail && (
        <Box mt="15px">
          <Paragraph light={true}>{details}</Paragraph>
        </Box>
      )}
    </Modal>
  );
};

export default withModal(MessageModal);
