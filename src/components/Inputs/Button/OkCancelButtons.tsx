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
  margin: 0 -10px;

  .btn-wrapper {
    position: relative;
  }
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

const OkCancelButtons: React.FC<OkCancelButtonsProps> = ({
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
  cancelConfirmationText = messagesConst.UNSAVED_CHANGES,
  cancelConfirmationTitle = messagesConst.CLOSE_MODAL_WINDOW,
}) => {
  return (
    <Wrapper rightPosition={rightPosition} >
      <div className="btn-wrapper">
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
      </div>
      <div className="btn-wrapper">
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
      </div>
    </Wrapper>
  );
};

export default OkCancelButtons;
