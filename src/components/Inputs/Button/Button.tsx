import React from 'react';

import { Box } from '@rebass/grid';

import { Hint } from './../../Utils';

import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';

import { ButtonWrapper } from './ButtonWrapper';
import { icons } from './icons';

interface IButton extends IWithModal {
  classNames?: Array<string>; /** no-text-transform, is-tabs, is-bordered, is-animated */
  confirmationText?: string;
  confirmationTitle?: string;
  disabled?: boolean;
  hint?: string | React.ReactChild;
  iconName?: string;
  isFocused?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  size?: string;
  text: string;
  title?: string;
  type?: 'reset' | 'submit';
  width?: string;
  withConfirmation?: boolean;
}

const Button: React.FC<IButton> = ({
  classNames,
  confirmationText,
  confirmationTitle,
  disabled,
  hint,
  iconName,
  isFocused,
  isLoading,
  onClick,
  openModal,
  size,
  text,
  title,
  type,
  width,
  withConfirmation,
}) => {
  const buttonClasses = React.useMemo(
    () => {
      const focused = isFocused ? 'is-focused' : '';
      const classes = classNames ? classNames.join(',') : '';

      return `button ${focused} ${classes}`;
    },
    [isFocused, classNames]
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
      disabled={disabled || isLoading}
      type={type}
      size={size}
      hasIcon={!!iconName}
      className={buttonClasses}
      onClick={handleClick}
    >
      {iconName && (
        <Box mr="2px" className="icon">
          {icons[iconName]}
        </Box>
      )}
      {text && (
        <span className="text-wrapper">
          {isLoading ? `${text}...` : text}
        </span>
      )}
      {hint && (
        <Hint
          text={hint}
          icon={false}
          position="top"
        />
      )}
    </ButtonWrapper>
  );

};

export default withModal(Button);
