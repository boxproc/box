import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Paragraph, T2 } from 'components/Text';

import { modalNames } from 'consts';

import { FieldsMessageModal } from 'store/domains';

interface MessageModalProps {
  fieldsMessageModal: FieldsMessageModal;
}

const MessageModal: React.FC<MessageModalProps> = ({
  fieldsMessageModal,
}) => {
  const [isVisibleDetail, setVisibleDetail] = React.useState(false);

  const { title, message, details } = fieldsMessageModal;
  return (
    <Modal
      name={modalNames.MESSAGE_MODAL}
      maxContainerWidth={350}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
      >
        <Box pr="12px">
          <T2>{title}</T2>
        </Box>
        <Paragraph light={true}>{message}</Paragraph>
        {details &&
          <Box my="10px">
            <Button
              text={isVisibleDetail ? 'Hide Details' : 'Show Details'}
              onClick={() => setVisibleDetail(!isVisibleDetail)}
            />
          </Box>
        }
        {isVisibleDetail &&
          <Paragraph light={true}>{details}</Paragraph>
        }
      </Flex>
    </Modal>
  );
};

export default MessageModal;
