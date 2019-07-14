import React from 'react';

import styled from 'styled-components';

import { InfoCircle } from 'styled-icons/boxicons-regular/InfoCircle';

interface HintWrapperProps {
  position?: string;
}

const HintWrapper = styled.div<HintWrapperProps>`
  position: relative;

  .hint {
    position: absolute;
    left: ${({ position }) => position === 'left' ? 'auto' : 'calc(100% + 8px)'};
    right: ${({ position }) => position === 'left' ? 'calc(100% + 8px)' : 'auto'};
    top: 0;
    width: 170px;
    padding: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.grayColor};
    color: ${({ theme }) => theme.whiteColor};
    transform: translateY(-50%);
    margin-top: 50%;
    border-radius: 2px;
    font-size: 14px;
    line-height: 1.35;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      right: ${({ position }) => position === 'right' ? '100%' : 'auto'};
      left: ${({ position }) => position === 'left' ? '100%' : 'auto'};
      top: 50%;
      margin-top: -6px;
      display: block;
      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: ${({ theme, position }) =>
        position === 'left' ? 'transparent' : '7px solid' + theme.grayColor}
      border-left: ${({ theme, position }) =>
        position === 'right' ? 'transparent' : '7px solid' + theme.grayColor}
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
  position?: 'left' | 'right';
}

const Hint: React.FC<HintProps> = ({
  text,
  position = 'right',
}) => {
  const [isHint, setIsHint] = React.useState(false);
  return (
    <HintWrapper position={position}>
      <InfoButton
        size="18"
        onMouseEnter={() => setIsHint(true)}
        onMouseLeave={() => setIsHint(false)}
      />
      {isHint && (
        <div className="hint">{text}</div>
      )}
    </HintWrapper>
  );
};

export default Hint;
