import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Paragraph, T2 } from 'components/Text';

import { modalNames } from 'consts';

import { CloseModal, FieldsMessageModal } from 'store/domains';

interface MessageModalProps {
  fieldsMessageModal: FieldsMessageModal;
  closeModal: CloseModal;
}

const MessageModal: React.FC<MessageModalProps> = ({
  fieldsMessageModal,
  closeModal,
}) => {
  const [isVisibleDetail, setVisibleDetail] = React.useState(false);

  const { title, message, details } = fieldsMessageModal;
  return (
    <Modal
      name={modalNames.MESSAGE_MODAL}
      maxContainerWidth={300}
    >
      <Box pr="12px">
        <T2>{title}</T2>
      </Box>
      <Paragraph light={true}>{message}</Paragraph>
      <Flex
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box mt="5px">
          <Button
            text="Close"
            transparent={true}
            onClick={() => closeModal(modalNames.MESSAGE_MODAL)}
          />
        </Box>
        {details &&
        <Box mt="5px" ml="10px">
          <Button
            text={isVisibleDetail ? 'Hide Details' : 'Show Details'}
            transparent={true}
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
