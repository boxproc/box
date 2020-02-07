import React from 'react';

import { Box } from '@rebass/grid';

import { Hint } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { ButtonWrapper } from './ButtonWrapper';
import { renderIcon } from './renderIcon';

interface ButtonProps extends WithModalProps {
  text: string;
  width?: string;
  size?: string;
  iconSize?: string;
  iconName?: string;
  type?: 'reset' | 'submit';
  disabled?: boolean;
  isFocused?: boolean;
  isTabsTheme?: boolean;
  withConfirmation?: boolean;
  withAnimation?: boolean;
  confirmationText?: string;
  confirmationTitle?: string;
  bordered?: boolean;
  underline?: boolean;
  textTransformNone?: boolean;
  title?: string;
  hint?: string | React.ReactChild;
  hintPosition?: 'top' | 'right' | 'bottom' | 'left';
  hintStyle?: object;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  width,
  isFocused,
  isTabsTheme,
  onClick,
  text,
  iconName,
  type,
  size,
  iconSize,
  confirmationText,
  confirmationTitle,
  openModal,
  withConfirmation,
  bordered,
  underline,
  textTransformNone,
  title,
  hint,
  hintPosition = 'top',
  hintStyle,
  withAnimation,
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
          {renderIcon(iconName, iconSize)}
        </Box>
      )}
      <span className="text-wrapper">
        {text}
      </span>
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
