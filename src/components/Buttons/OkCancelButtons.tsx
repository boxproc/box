import React from 'react';
import styled from 'theme';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Hint from 'components/Hint';

const Wrapper = styled(Box)`
  position: relative;
`;

interface OkCancelButtonsProps {
  okText?: string;
  cancelText?: string;
  onCancel?: () => void;
  disabledCancel?: boolean;
  disabledOk?: boolean;
  cancelIconName?: string;
  hintOk?: string;
  hintCancel?: string;
}

export const OkCancelButtons: React.FC<OkCancelButtonsProps> = ({
  okText = 'Ok',
  cancelText = 'Cancel',
  onCancel,
  disabledCancel = false,
  disabledOk = false,
  cancelIconName,
  hintOk,
  hintCancel,
}) => {
  return (
    <Flex alignItems="center">
      <Wrapper mr="15px" mt="10px">
        <Button
          text={okText}
          disabled={disabledOk}
        />
        {hintOk && (
          <Hint
            text={hintOk}
            icon={false}
            position="top"
          />
        )}
      </Wrapper>
      <Wrapper mt="10px">
        <Button
          text={cancelText}
          onClick={onCancel}
          type="reset"
          iconName={cancelIconName}
          disabled={disabledCancel}
        />
        {hintCancel && (
          <Hint
            text={hintCancel}
            icon={false}
            position="top"
          />
        )}
      </Wrapper>
    </Flex>
  );
};
