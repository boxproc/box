import React from 'react';

import styled from 'theme';

interface IWrapper {
  seconds: number;
}

const Wrapper = styled.div<IWrapper>`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  font-size: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.normalAccent};
  font-weight: 500;
  line-height: 15.65px;
  box-shadow: ${({ theme }) => theme.shadows.aroundBox};

  svg {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 20px;
    height: 20px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }

  svg circle {
    stroke-dasharray: 55.5px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke: ${({ theme }) => theme.colors.normalAccent};
    fill: none;
    animation: countdown ${({ seconds }) => seconds}s linear infinite forwards;
  }

  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 55.5px;
    }
  }
`;

interface ICountDownTimer {
  seconds: number;
}

const CountDownTimer: React.FC<ICountDownTimer> = ({ seconds }) => {
  const [count, setCount] = React.useState(seconds);

  React.useEffect(
    () => {
      const interval = setInterval(() => setCount(count - 1), 1000);

      if (count <= 0) {
        setCount(seconds);
      }

      return () => clearInterval(interval);
    },
    [count, seconds]
  );

  return (
    <Wrapper seconds={seconds}>
      {count}
      <svg>
        <circle r="9" cx="10" cy="10" />
      </svg>
    </Wrapper>
  );
};

export default CountDownTimer;
