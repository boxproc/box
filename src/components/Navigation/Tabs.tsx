import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Hint } from 'components';

const TabsWrapper = styled.div`
  margin: 0 -20px 20px;
  box-shadow: ${({ theme }) => theme.shadows.bottomBox};
`;

interface TabTitleProps {
  isDisabled?: boolean;
}

const TabTitle = styled.div<TabTitleProps>`
  position: relative;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: ${({ isDisabled }) => isDisabled ? 'auto' : 'pointer'};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  letter-spacing: .5pt;
  border-bottom: 1px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.normalAccent};
  }

  .title {
    opacity: ${({ isDisabled }) => isDisabled && .5};
  }

  &.is-active {
    color: ${({ theme }) => theme.colors.normalAccent};
    border-bottom-color: ${({ theme }) => theme.colors.lightAccent};
  }
`;

export const Tabs: React.FC = ({
  children,
}) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  return (
    <React.Fragment>
      <TabsWrapper>
        <Flex flexWrap="wrap">
          {React.Children.map(children, (child, i) => {
            if (!children[i]) {
              return null;
            }

            const { title, hintForDisabled, isDisabled } = children[i].props;
            return (
              <TabTitle
                className={i === activeTabIndex && 'is-active'}
                isDisabled={isDisabled}
                onClick={isDisabled ? null : () => setActiveTabIndex(i)}
              >
                <div className="title">{title}</div>
                {hintForDisabled && isDisabled && (
                  <Hint
                    text={hintForDisabled}
                    icon={false}
                    position="bottom"
                  />
                )}
              </TabTitle>
            );
          })}
        </Flex>
      </TabsWrapper>
      <div>{children[activeTabIndex]}</div>
    </React.Fragment>
  );
};

interface TabsPanelProps {
  title: string;
  hintForDisabled?: string;
  isDisabled?: boolean;
}

export const TabsPanel: React.FC<TabsPanelProps> = ({
  children,
}) => {
  return (
    <div>{children}</div>
  );
};
