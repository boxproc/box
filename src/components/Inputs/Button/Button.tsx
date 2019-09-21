import React from 'react';

import { Box } from '@rebass/grid';

import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { ButtonWrapper } from './ButtonWrapper';
import { renderIcon } from './renderIcon';

interface ButtonProps extends WithModalProps {
  text: string;
  size?: string;
  iconName?: string;
  type?: 'reset' | 'submit';
  disabled?: boolean;
  withConfirmation?: boolean;
  confirmationText?: string;
  confirmationTitle?: string;
  bordered?: boolean;
  underline?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  text,
  iconName,
  type,
  size,
  confirmationText,
  confirmationTitle,
  openModal,
  withConfirmation = false,
  bordered = false,
  underline = false,
}) => {
  const handleClick = React.useCallback(
    disabled
      ? null
      : withConfirmation
        ? () => openModal({
          name: modalNamesConst.CONFIRMATION_MODAL,
          payload: {
            confirmationAction: onClick,
            confirmationTitle,
            confirmationText,
          },
        })
        : onClick,
    [disabled, withConfirmation, openModal, onClick]
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
    >
      {iconName && (
        <Box mr="2px">
          {renderIcon(iconName)}
        </Box>
      )}
      {text}
    </ButtonWrapper>
  );

};

export default withModal(Button);
