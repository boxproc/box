import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

const TabsWrapper = styled.div`
  margin: 0 -20px 20px;
  box-shadow: ${({ theme }) => theme.boxShadowBottom};
`;

const TabTitle = styled.div`
  padding: 10px 25px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.grayColor};
  font-size: 14px;
  letter-spacing: .5pt;

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
              <Box
                onClick={() => setActiveTabIndex(i)}
              >
                <TabTitle className={i === activeTabIndex && 'is-active'}>
                  {children[i].props.title}
                </TabTitle>
              </Box>
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
}

export const Panel: React.FC<PanelProps> = ({
  children,
}) => {
  return (
    <div>{children}</div>
  );
};
