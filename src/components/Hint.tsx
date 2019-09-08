import React from 'react';

import { InfoCircle } from 'styled-icons/boxicons-regular/InfoCircle';

import styled from 'theme';

interface HintWrapperProps {
  position?: string;
  icon?: boolean;
  width?: string;
}

const HintWrapper = styled.div<HintWrapperProps>`
  position: ${({ icon }) => icon ? 'relative' : 'absolute'};
  width: ${({ icon }) => icon ? 'auto' : '100%'};
  height: ${({ icon }) => icon ? 'auto' : '100%'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .hint {
    position: absolute;
    top: ${({ position }) => position === 'bottom' ? 'calc(100% + 3px)' : 'auto'};
    right: ${({ position }) => position === 'left' ? 'calc(100% + 3px)' : 'auto'};
    bottom: ${({ position }) => position === 'top' ? 'calc(100% + 3px)' : 'auto'};
    left: ${({ position }) => position === 'right' ? 'calc(100% + 3px)' : 'auto'};
    min-width: ${({ icon, width }) => icon ? width ? width + 'px' : '160px' : 'auto'};
    padding: 7px 10px;
    background-color: ${({ theme }) => theme.blackColorOpacity7};
    color: ${({ theme }) => theme.whiteColor};
    transform: ${({ position }) =>
      position === 'left' || position === 'right' ? 'translateY(-50%)' : 'translateX(-50%)' };
    margin: ${({ position }) =>
      position === 'left' || position === 'right' ? '-50% 0 0 0' : '0 0 0 50%' };
    border-radius: 2px;
    font-size: 13px;
    line-height: 1.5;
    text-transform: none;
    z-index: 1;
    white-space: ${({ icon }) => icon ? 'normal' : 'nowrap'};
  }

  .toggle-hint {
    width: 100%;
    height: 100%;
  }
`;

const InfoButton = styled(InfoCircle)`
  cursor: pointer;
  color: ${({ theme }) => theme.grayColor};

  &:hover {
    color: ${({ theme }) => theme.normalAccentColor};
  }
`;

interface HintProps {
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left' | string;
  icon?: boolean;
  width?: string;
}

const Hint: React.FC<HintProps> = ({
  text,
  position = 'right',
  icon = true,
  width,
}) => {
  const [isHint, setIsHint] = React.useState(false);

  const toggleIsHint = React.useCallback(
    () => setIsHint(!isHint),
    [isHint]);

  return (
    <HintWrapper
      position={position}
      icon={icon}
      width={width}
    >
      <div
        className="toggle-hint"
        onMouseEnter={toggleIsHint}
        onMouseLeave={toggleIsHint}
      >
        {icon && (
          <InfoButton size="18"/>
        )}
      </div>
      {isHint && (
        <div className="hint">{text}</div>
      )}
    </HintWrapper>
  );
};

export default Hint;
