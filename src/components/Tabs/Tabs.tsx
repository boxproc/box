import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

const TabsWrapper = styled.div`
  margin: 0 -20px 20px;
  box-shadow: ${({ theme }) => theme.boxShadowBottom};
`;

interface TabTitleProps {
  isDisabled?: boolean;
}

const TabTitle = styled.div<TabTitleProps>`
  padding: 10px 25px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.grayColor};
  font-size: 14px;
  letter-spacing: .5pt;
  opacity: ${({ isDisabled }) => isDisabled && .5};
  pointer-events: ${({ isDisabled }) => isDisabled && 'none'};

  &.is-active {
    color: ${({ theme }) => theme.darkGrayColor};
    border-bottom: 2px solid ${({ theme }) => theme.darkGrayColor};
  }
`;

interface TabsProps { }

export const Tabs: React.FC<TabsProps> = ({
  children,
}) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <React.Fragment>
      <TabsWrapper>
        <Flex>
          {React.Children.map(children, (child, i) => {
            return (
              <TabTitle
                className={i === activeTabIndex && 'is-active'}
                isDisabled={children[i].props.isDisabled}
                onClick={() => setActiveTabIndex(i)}
              >
                {children[i].props.title}
              </TabTitle>
            );
          })}
        </Flex>
      </TabsWrapper>
      <div>{children[activeTabIndex]}</div>
    </React.Fragment>
  );
};

interface PanelProps {
  title: string;
  isDisabled?: boolean;
}

export const Panel: React.FC<PanelProps> = ({
  children,
  isDisabled,
}) => {
  return (
    <div>{children}</div>
  );
};
