import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Paragraph, T2 } from 'components/Text';

import { modalNames } from 'consts';

import { CloseModal, FieldsMessageModal } from 'store/domains';

interface MessageModalProps {
  fieldsMessageModal: FieldsMessageModal;
  closeModal: CloseModal;
}

const Link = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.darkGrayColor};
  border-bottom: 1px solid ${({ theme }) => theme.lightGrayColor};
  cursor: pointer;
  &:hover {
    border-bottom-color: ${({ theme }) => theme.lightAccentColor};
  }
`;

const MessageModal: React.FC<MessageModalProps> = ({
  fieldsMessageModal,
  closeModal,
}) => {
  const [isVisibleDetail, setVisibleDetail] = React.useState(false);

  const { title, message, details } = fieldsMessageModal;
  return (
    <Modal
      name={modalNames.MESSAGE_MODAL}
      maxContainerWidth={350}
    >
      <Box pr="12px">
        <T2 textAlign="center">{title}</T2>
      </Box>
      <Paragraph light={true} textAlign="center">{message}</Paragraph>
      <Flex alignItems="flex-end" flexDirection="column">
        <Box my="10px">
          <Button
            text="Close/OK"
            small={true}
            onClick={() => closeModal(modalNames.MESSAGE_MODAL)}
          />
        </Box>
        {details &&
          <Box mt="5px" mb="15px">
            <Link onClick={() => setVisibleDetail(!isVisibleDetail)}>
              {isVisibleDetail ? 'Hide Details' : 'Show Details'}
            </Link>
          </Box>
        }
      </Flex>
      {isVisibleDetail &&
        <Paragraph light={true} textAlign="center">{details}</Paragraph>
      }
    </Modal>
  );
};

export default MessageModal;
