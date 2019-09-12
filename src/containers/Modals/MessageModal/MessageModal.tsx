import React from 'react';

import { Box, Flex } from '@rebass/grid';
import { RouteComponentProps } from 'react-router';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Paragraph } from 'components/Text';

import { basePath, modalNames, statusCodes } from 'consts';

import { CloseModal, PayloadMessageModal } from 'store/domains';

interface MessageModalProps extends RouteComponentProps {
  payloadMessageModal: PayloadMessageModal;
  closeModal: CloseModal;
}

const modalName = modalNames.MESSAGE_MODAL;

const MessageModal: React.FC<MessageModalProps> = ({
  payloadMessageModal,
  closeModal,
  history,
}) => {
  const [isVisibleDetail, setVisibleDetail] = React.useState(false);

  const { title, message, details, statusCode } = payloadMessageModal;

  const handleClick = React.useCallback(
    () => {
      closeModal(modalName);
      if (statusCode === statusCodes.NO_SESSION) {
        sessionStorage.clear();
        history.push(basePath);
      }
    },
    [closeModal, statusCode, history]
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
        {details &&
          <Box mt="5px" ml="10px">
            <Button
              text={isVisibleDetail ? 'Hide Details' : 'Show Details'}
              onClick={() => setVisibleDetail(!isVisibleDetail)}
            />
          </Box>
        }
      </Flex>
      {isVisibleDetail &&
        <Box mt="15px">
          <Paragraph light={true}>{details}</Paragraph>
        </Box>
      }
    </Modal>
  );
};

export default MessageModal;
