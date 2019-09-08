import React from 'react';

import styled from 'styled-components';

const CircleListWrapper = styled.ul`
  font-size: 14px;
  list-style-type: none;

  li {
    position: relative;
    padding-left: 13px;

    &:before {
      content: '';
      position: absolute;
      top: 6px;
      left: 0;
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.normalAccentColor};
    }

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

interface CircleListProps {
  items: Array<string>;
}

const CircleList: React.FC<CircleListProps> = ({ items }) => {
  return (
    <CircleListWrapper>
      {items.length && items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </CircleListWrapper>
  );
};

export default CircleList;
