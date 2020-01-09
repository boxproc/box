import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Hint } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { messagesConst, modalNamesConst } from 'consts';

const TabsWrapper = styled.div`
  margin: 0 -15px 10px;
  box-shadow: ${({ theme }) => theme.shadows.bottomBox};
`;

interface TabTitleProps {
  isDisabled?: boolean;
}

const TabTitle = styled.div<TabTitleProps>`
  position: relative;
  padding: 8px 15px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: ${({ isDisabled }) => isDisabled ? 'auto' : 'pointer'};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  letter-spacing: .4pt;
  border-bottom: 1px solid transparent;
  user-select: none;
  transition: all .1s linear;

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
    background-color: ${({ theme }) => theme.colors.lighterGrayHover};
    border-bottom-color: ${({ theme }) => theme.colors.normalAccent};
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    cursor: default;
    user-select: inherit;
  }
`;

interface TabsProps extends WithModalProps { }

const Tabs: React.FC<TabsProps> = ({
  children,
  openModal,
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

            const { title, hintIfDisabled, isDisabled, withConfirmation } = children[i].props;

            const handleClick = () =>
              withConfirmation
                ? openModal({
                  name: modalNamesConst.CONFIRMATION,
                  payload: {
                    confirmationAction: () => setActiveTabIndex(i),
                    confirmationTitle: messagesConst.SWITCH_TAB,
                    confirmationText: messagesConst.UNSAVED_CHANGES,
                  },
                })
                : setActiveTabIndex(i);

            return (
              <TabTitle
                className={i === activeTabIndex && 'is-active'}
                isDisabled={isDisabled}
                onClick={(isDisabled || i === activeTabIndex) ? null : handleClick}
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

export default withModal(Tabs);
