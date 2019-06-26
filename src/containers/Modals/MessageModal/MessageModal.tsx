import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { Paragraph, T2 } from 'components/Text';

const MessageModal = () => {
  const [isVisibleDetail, setVisibleDetail] = React.useState(false);

  return (
    <Modal
      name="MessageModal"
      maxContainerWidth={350}
    >
      <Flex
        flexDirection="column"
      >
        <T2>Title</T2>
        <Paragraph light={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore.
        </Paragraph>
        <Box mt="10px">
          <Button
            text={isVisibleDetail ? 'Hide Details' : 'Show Details'}
            onClick={() => setVisibleDetail(!isVisibleDetail)}
          />
        </Box>
        {isVisibleDetail &&
          <Box mt="15px">
            <Paragraph light={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore.
            </Paragraph>
          </Box>
        }
      </Flex>
    </Modal>
  );
};

export default MessageModal;
