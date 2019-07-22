import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import Hint from 'components/Hint';

import { statusTypes } from 'consts';
interface CircleProps {
  status: string;
}

const Circle = styled.div<CircleProps>`
  position: relative;

  .circle {
    margin-right: 4px;
    margin-top: 1px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    border: 2px solid ${({ theme, status }) => {
      switch (status) {
        case statusTypes.DELETED:
          return theme.grayColor;
        default:
          return 'transparent';
        }
      }
    };
    background: ${({ theme, status }) => {
      switch (status) {
        case 'box':
          return theme.normalAccentColor;
        case statusTypes.ACTIVE:
          return theme.greenColor;
        case statusTypes.INACTIVE:
          return theme.grayColor;
        default:
          return 'transparent';
        }
      }
    };
  }
`;

interface StatusBlockProps {
  text: string;
  status: string;
  title: string;
}

const StatusBlock: React.FC<StatusBlockProps> = ({
  text,
  status,
  title,
}) => (
    <Flex alignItems="center">
      <Circle status={text === 'BOX' ? 'box' : status} >
        <div className="circle"/>
        <Hint
          text={title}
          icon={false}
          position="bottom"
        />
      </Circle>
      <div>{text}</div>
    </Flex>
  );

export default StatusBlock;
