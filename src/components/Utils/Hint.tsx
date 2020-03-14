import React from 'react';

import styled from 'theme';

import { InfoCircleIcon } from './../Icons';

interface HintWrapperProps {
  position?: string;
  icon?: boolean;
}

const HintWrapper = styled.div<HintWrapperProps>`
  position: ${({ icon }) => icon ? 'relative' : 'absolute'};
  width: ${({ icon }) => icon ? 'auto' : '100%'};
  height: ${({ icon }) => icon ? 'auto' : '100%'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  .hint {
    position: absolute;
    top: ${({ position }) => position === 'bottom' ? 'calc(100% + 3px)' : 'auto'};
    right: ${({ position }) => position === 'left' ? 'calc(100% + 3px)' : 'auto'};
    bottom: ${({ position }) => position === 'top' ? 'calc(100% + 3px)' : 'auto'};
    left: ${({ position }) => position === 'right' ? 'calc(100% + 3px)' : 'auto'};
    min-width: ${({ icon }) => icon ? '160px' : 'auto'};
    padding: 7px 10px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    box-shadow: ${({ theme }) => theme.shadows.normalBox};
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    transform: ${({ position }) =>
    position === 'left' || position === 'right' ? 'translateY(-50%)' : 'translateX(-50%)'};
    margin: ${({ position }) =>
    position === 'left' || position === 'right' ? '-50% 0 0 0' : '0 0 0 50%'};
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
    font-size: 0;
  }
`;

const InfoButton = styled(InfoCircleIcon)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  transition: all .1s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

interface HintProps {
  text: string | React.ReactChild;
  position?: 'top' | 'right' | 'bottom' | 'left' | string;
  icon?: boolean;
  style?: object;
}

const Hint: React.FC<HintProps> = ({
  text,
  position = 'right',
  icon = true,
  style,
}) => {
  const [isHint, setIsHint] = React.useState(false);

  return (
    <HintWrapper
      position={position}
      icon={icon}
      onMouseLeave={() => setIsHint(false)}
    >
      <div
        className="toggle-hint"
        onMouseEnter={() => setIsHint(true)}
      >
        {icon && (
          <InfoButton size="16" />
        )}
      </div>
      {isHint && (
        <div
          className="hint"
          style={style}
        >
          {text}
        </div>
      )}
    </HintWrapper>
  );
};

export default Hint;
