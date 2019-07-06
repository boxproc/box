import React from 'react';

import styled from 'theme';

interface ContainerProps {
  isFixed: boolean;
  backgroundColor?: string;
}

const Container = styled.div<ContainerProps>`
  position: ${({ isFixed }) => isFixed ? 'fixed' : 'absolute'};
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: ${({ backgroundColor, theme }) => backgroundColor || theme.whiteOpacityColor};
`;

interface CircleProps {
  color?: string;
  size?: string | number;
}

const Circle = styled.svg<CircleProps>`
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rotate 1s linear infinite;
  z-index: 3;
  width: ${({ size }) => size ? (isNaN(Number(size)) ? size : `${size}px`) : '50px'};
  height: ${({ size }) => size ? (isNaN(Number(size)) ? size : `${size}px`) : '50px'};
  circle {
    stroke: ${({ color, theme }) => color || theme.lightAccentColor};
    stroke-linecap: round;
    stroke-dasharray: 45;
  }
`;

export const Spinner: React.FC<ContainerProps & CircleProps> = ({
  size, color, isFixed, backgroundColor,
}) => (
    <Container
      isFixed={isFixed}
      backgroundColor={backgroundColor}
    >
      <Circle className="spinner" viewBox="0 0 50 50" size={size} color={color}>
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="3" />
      </Circle>
    </Container>
  );
