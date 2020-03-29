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

interface IOkCancelButtons {
  cancelConfirmationText?: string;
  cancelConfirmationTitle?: string;
  cancelIconName?: string;
  cancelText?: string;
  disabledCancel?: boolean;
  disabledOk?: boolean;
  focusedButton?: 'ok' | 'cancel' | 'none';
  hideCancel?: boolean;
  hideOk?: boolean;
  hintCancel?: string;
  hintOk?: string;
  okText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  withCancelConfirmation?: boolean;
}

const OkCancelButtons: React.FC<IOkCancelButtons> = ({
  cancelConfirmationText = 'You have unsaved changes.',
  cancelConfirmationTitle = 'Close the window?',
  cancelIconName,
  cancelText = 'Cancel',
  disabledCancel = false,
  disabledOk = false,
  focusedButton = 'ok',
  hideCancel,
  hideOk,
  hintCancel,
  hintOk,
  okText = 'Ok',
  onCancel,
  onOk,
  withCancelConfirmation = false,
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
