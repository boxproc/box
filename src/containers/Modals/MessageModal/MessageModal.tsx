import React from 'react';

import { Box } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Paragraph, T2 } from 'components/Text';

interface MessageModalProps {
  messageModalFields: any;
}

const MessageModal: React.FC<MessageModalProps> = ({
  messageModalFields,
}) => {
  const [isVisibleDetail, setVisibleDetail] = React.useState(false);

  const {title, message, details} = messageModalFields;
  return (
    <Modal
      name="MessageModal"
      maxContainerWidth={350}
    >
      <T2>{title}</T2>
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
    </Modal>
  );
};

export default MessageModal;
