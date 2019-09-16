import React from 'react';
import { RouteComponentProps } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { Button, Modal, Paragraph } from 'components';

import { basePath, modalNamesConst, statusCodes } from 'consts';

import { CloseAllModals, CloseModal, PayloadMessageModal } from 'store/domains';
import { storageUtil } from 'utils';

interface MessageModalProps extends RouteComponentProps {
  payloadMessageModal: PayloadMessageModal;
  closeModal: CloseModal;
  closeAllModals: CloseAllModals;
}

const modalName = modalNamesConst.MESSAGE_MODAL;

const MessageModal: React.FC<MessageModalProps> = ({
  payloadMessageModal,
  closeModal,
  closeAllModals,
  history,
}) => {
  const { title, message, details, statusCode } = payloadMessageModal;

  React.useEffect(
    () => {
      return () => {
        if (
          statusCode === statusCodes.NO_SESSION
          || statusCode === statusCodes.USER_NOT_AUTH
          || statusCode === statusCodes.SESSION_TIMEOUT
        ) {
          storageUtil.clear();
          closeAllModals();
          history.push(basePath);
        }
      };
    },
    [statusCode, history, closeAllModals]
  );

  const [isVisibleDetail, setVisibleDetail] = React.useState(false);

  const handleClick = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title={title}
      maxContainerWidth={500}
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
            text="Close"
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

export default MessageModal;
