import React from 'react';

import { Box } from '@rebass/grid';

import { Hint } from './../../Utils';

import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { ButtonWrapper } from './ButtonWrapper';
import { icons } from './icons';

interface ButtonProps extends WithModalProps {
  bordered?: boolean;
  confirmationText?: string;
  confirmationTitle?: string;
  disabled?: boolean;
  hint?: string | React.ReactChild;
  hintPosition?: 'top' | 'right' | 'bottom' | 'left';
  hintStyle?: object;
  iconName?: string;
  isFocused?: boolean;
  isTabsTheme?: boolean;
  onClick?: () => void;
  size?: string;
  text: string;
  textTransformNone?: boolean;
  title?: string;
  type?: 'reset' | 'submit';
  underline?: boolean;
  width?: string;
  withAnimation?: boolean;
  withConfirmation?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  bordered,
  confirmationText,
  confirmationTitle,
  disabled,
  hint,
  hintPosition = 'top',
  hintStyle,
  iconName,
  isFocused,
  isTabsTheme,
  onClick,
  openModal,
  size,
  text,
  textTransformNone,
  title,
  type,
  underline,
  width,
  withAnimation,
  withConfirmation,
}) => {
  const buttonClasses = React.useMemo(
    () => isFocused ? 'button is-focused' : 'button',
    [isFocused]
  );

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
      title={title}
      width={width}
      disabled={disabled}
      type={type}
      size={size}
      bordered={bordered}
      underline={underline}
      hasIcon={!!iconName}
      withAnimation={withAnimation}
      textTransformNone={textTransformNone}
      className={buttonClasses}
      isTabsTheme={isTabsTheme}
      onClick={handleClick}
    >
      {iconName && (
        <Box mr="2px" className="icon">
          {icons[iconName]}
        </Box>
      )}
      {text && (
        <span className="text-wrapper">
          {text}
        </span>
      )}
      {hint && (
        <Hint
          text={hint}
          icon={false}
          position={hintPosition}
          style={hintStyle}
        />
      )}
    </ButtonWrapper>
  );

};

export default withModal(Button);
