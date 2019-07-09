import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';

interface OkCancelButtonProps {
  okText?: string;
  cancelText?: string;
  onCancel: () => void;
}

const OkCancelButtons: React.FC<OkCancelButtonProps> = ({
  okText = 'Ok',
  cancelText = 'Cancel',
  onCancel,
}) => {
  return (
    <Flex alignItems="center">
      <Box mt="15px" mr="10px">
        <Button
          text={okText}
          transparent={true}
        />
      </Box>
      <Box mt="15px">
        <Button
          text={cancelText}
          transparent={true}
          onClick={onCancel}
        />
      </Box>
    </Flex>
  );
};

export default OkCancelButtons;
