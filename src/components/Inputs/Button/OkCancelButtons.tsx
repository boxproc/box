import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, Hint } from 'components';

import { messagesConst } from 'consts';

interface WrapperProps {
  rightPosition?: boolean;
}

const Wrapper = styled(Flex) <WrapperProps>`
  align-items: center;
  justify-content: ${({ rightPosition }) => rightPosition ? 'flex-end' : 'flex-start'};

  .btn-wrapper {
    position: relative;

    &:first-child {
      margin-right: 7px;
    }
  }
`;

interface OkCancelButtonsProps {
  okText?: string;
  cancelText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  disabledCancel?: boolean;
  disabledOk?: boolean;
  focusedButton?: 'ok' | 'cancel';
  cancelIconName?: string;
  hintOk?: string;
  hintCancel?: string;
  rightPosition?: boolean;
  withCancelConfirmation?: boolean;
  cancelConfirmationText?: string;
  cancelConfirmationTitle?: string;
  hideOk?: boolean;
  hideCancel?: boolean;
}

const OkCancelButtons: React.FC<OkCancelButtonsProps> = ({
  okText = 'Ok',
  cancelText = 'Cancel',
  focusedButton = 'ok',
  onCancel,
  onOk,
  cancelIconName,
  hintOk,
  hintCancel,
  disabledCancel = false,
  disabledOk = false,
  rightPosition = false,
  withCancelConfirmation = false,
  cancelConfirmationText = messagesConst.UNSAVED_CHANGES,
  cancelConfirmationTitle = messagesConst.CLOSE_MODAL_WINDOW,
  hideOk,
  hideCancel,
}) => {
  const okBtnFocused = focusedButton === 'ok';
  const cancelBtnFocused = focusedButton === 'cancel';

  return (
    <Wrapper rightPosition={rightPosition} >
      {!hideOk && (
        <div className="btn-wrapper">
          <Button
            text={okText}
            disabled={disabledOk}
            onClick={onOk}
            isFocused={okBtnFocused}
          />
          {hintOk && (
            <Hint
              text={hintOk}
              icon={false}
              position="top"
            />
          )}
        </div>
      )}
      {!hideCancel && (
        <div className="btn-wrapper">
          <Button
            text={cancelText}
            onClick={onCancel}
            isFocused={cancelBtnFocused}
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
        </div>
      )}
    </Wrapper>
  );
};

export default OkCancelButtons;
