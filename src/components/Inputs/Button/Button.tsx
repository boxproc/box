import React from 'react';

import { Box } from '@rebass/grid';

import { Hint } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { ButtonWrapper } from './ButtonWrapper';
import { renderIcon } from './renderIcon';

interface ButtonProps extends WithModalProps {
  text: string;
  size?: string;
  iconSize?: string;
  iconName?: string;
  type?: 'reset' | 'submit';
  disabled?: boolean;
  isFocused?: boolean;
  withConfirmation?: boolean;
  confirmationText?: string;
  confirmationTitle?: string;
  bordered?: boolean;
  underline?: boolean;
  textTransformNone?: boolean;
  title?: string;
  hint?: string;
  hintStyle?: object;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  isFocused,
  onClick,
  text,
  iconName,
  type,
  size,
  iconSize,
  confirmationText,
  confirmationTitle,
  openModal,
  withConfirmation = false,
  bordered = false,
  underline = false,
  textTransformNone = false,
  title,
  hint,
  hintStyle,
}) => {
  const handleClick = React.useCallback(
    disabled
      ? null
      : withConfirmation
        ? () => openModal({
          name: modalNamesConst.CONFIRMATION,
          payload: {
            confirmationAction: onClick,
            confirmationTitle,
            confirmationText,
          },
        })
        : onClick,
    [disabled, withConfirmation, openModal, onClick, confirmationText, confirmationTitle]
  );

  return (
    <ButtonWrapper
      onClick={handleClick}
      disabled={disabled}
      type={type}
      size={size}
      bordered={bordered}
      underline={underline}
      hasIcon={!!iconName}
      textTransformNone={textTransformNone}
      className={isFocused && 'is-focused'}
      title={title}
    >
      {iconName && (
        <Box mr="2px">
          {renderIcon(iconName, iconSize)}
        </Box>
      )}
      <span className="text-wrapper">
        {text}
        {hint && (
          <Hint
            text={hint}
            icon={false}
            position="top"
            style={hintStyle}
          />
        )}
      </span>
    </ButtonWrapper>
  );

};

export default withModal(Button);
