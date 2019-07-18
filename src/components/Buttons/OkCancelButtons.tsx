import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons/Buttons';

interface OkCancelButtonProps {
  okText?: string;
  cancelText?: string;
  onCancel?: () => void;
  disabledCancel?: boolean;
  disabledOk?: boolean;
}

const OkCancelButtons: React.FC<OkCancelButtonProps> = ({
  okText = 'Ok',
  cancelText = 'Cancel',
  onCancel,
  disabledCancel = false,
  disabledOk = false,
}) => {
  return (
    <Flex alignItems="center">
      <Box mt="20px" mr="10px">
        <Button
          text={okText}
          disabled={disabledOk}
        />
      </Box>
      <Box mt="20px">
        <Button
          text={cancelText}
          onClick={onCancel}
          type="reset"
          disabled={disabledCancel}
        />
      </Box>
    </Flex>
  );
};

export default OkCancelButtons;
