import React from 'react';

import styled from 'theme';

import { InfoCircleIcon } from './../Icons';

interface IHintWrapper {
  icon?: boolean;
  position?: string;
}

const hintShift = 'calc(100% + 3px)';

const HintWrapper = styled.div<IHintWrapper>`
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
    top: ${({ position }) => position === 'bottom' ? hintShift : 'auto'};
    right: ${({ position }) => position === 'left' ? hintShift : 'auto'};
    bottom: ${({ position }) => position === 'top' ? hintShift : 'auto'};
    left: ${({ position }) => position === 'right' ? hintShift : 'auto'};
    min-width: ${({ icon }) => icon ? '160px' : 'auto'};
    padding: 7px 10px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.aroundBox};
    background-color: ${({ theme }) => theme.colors.darkGray};
    transform: ${({ position }) =>
    position === 'left' || position === 'right' ? 'translateY(-50%)' : 'translateX(-50%)'};
    margin: ${({ position }) =>
    position === 'left' || position === 'right' ? '-50% 0 0 0' : '0 0 0 50%'};
    border-radius: 2px;
    font-size: 13px;
    line-height: 1.5;
    text-transform: none;
    white-space: ${({ icon }) => icon ? 'normal' : 'nowrap'};
    z-index: 1;
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

interface IHint {
  icon?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
  text: string | React.ReactChild;
}

const Hint: React.FC<IHint> = ({
  icon = true,
  position = 'right',
  text,
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
        <div className="hint">
          {text}
        </div>
      )}
    </HintWrapper>
  );
};

export default Hint;
