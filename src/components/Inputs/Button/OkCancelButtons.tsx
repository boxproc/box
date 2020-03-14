import React from 'react';

import styled from 'theme';

import { Hint } from './../../Utils';
import { Button } from './../Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
  focusedButton?: 'ok' | 'cancel' | 'none';
  cancelIconName?: string;
  hintOk?: string;
  hintCancel?: string;
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
  withCancelConfirmation = false,
  cancelConfirmationText = 'You have unsaved changes.',
  cancelConfirmationTitle = 'Close the window?',
  hideOk,
  hideCancel,
}) => {
  const okBtnFocused = React.useMemo(
    () => focusedButton === 'ok',
    [focusedButton]
  );

  const cancelBtnFocused = React.useMemo(
    () => focusedButton === 'cancel',
    [focusedButton]
  );

  return (
    <Wrapper>
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
