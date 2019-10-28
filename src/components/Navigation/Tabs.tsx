import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Hint } from 'components';

const TabsWrapper = styled.div`
  margin: 0 -20px 10px;
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

  ${({ isDisabled, theme }) => !isDisabled && `
    &:hover {
      color: ${theme.colors.normalAccent};
    }
  `}

  .title {
    opacity: ${({ isDisabled }) => isDisabled && .5};
  }

  &.is-active {
    color: ${({ theme }) => theme.colors.normalAccent};
    background-color: ${({ theme }) => theme.colors.lighterGray};
    border-bottom-color: ${({ theme }) => theme.colors.normalAccent};
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
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

            const { title, hintIfDisabled, isDisabled } = children[i].props;
            return (
              <TabTitle
                className={i === activeTabIndex && 'is-active'}
                isDisabled={isDisabled}
                onClick={isDisabled ? null : () => setActiveTabIndex(i)}
              >
                <div className="title">{title}</div>
                {hintIfDisabled && isDisabled && (
                  <Hint
                    text={hintIfDisabled}
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
  hintIfDisabled?: string;
  isDisabled?: boolean;
}

export const TabsPanel: React.FC<TabsPanelProps> = ({
  children,
}) => {
  return (
    <div>{children}</div>
  );
};
