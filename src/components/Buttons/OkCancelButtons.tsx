import React from 'react';
import styled from 'theme';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Hint from 'components/Hint';

import { messages } from 'consts';

const Wrapper = styled(Box)`
  position: relative;
`;

interface OkCancelButtonsProps {
  okText?: string;
  cancelText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  disabledCancel?: boolean;
  disabledOk?: boolean;
  cancelIconName?: string;
  hintOk?: string;
  hintCancel?: string;
  rightPosition?: boolean;
  withCancelConfirmation?: boolean;
  cancelConfirmationText?: string;
  cancelConfirmationTitle?: string;
}

export const OkCancelButtons: React.FC<OkCancelButtonsProps> = ({
  okText = 'Ok',
  cancelText = 'Cancel',
  onCancel,
  onOk,
  disabledCancel = false,
  disabledOk = false,
  cancelIconName,
  hintOk,
  hintCancel,
  rightPosition = false,
  withCancelConfirmation = false,
  cancelConfirmationText = messages.UNSAVED_CHANGES,
  cancelConfirmationTitle = messages.CLOSE_MODAL_WINDOW,
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent={rightPosition ? 'flex-end' : 'flex-start'}
      width={rightPosition ? '100%' : 'auto'}
    >
      <Wrapper mr="15px" mt="10px">
        <Button
          text={okText}
          disabled={disabledOk}
          onClick={onOk}
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
          withConfirmation={withCancelConfirmation}
          confirmationText={cancelConfirmationText}
          confirmationTitle={cancelConfirmationTitle}
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
