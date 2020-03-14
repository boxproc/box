import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Hint } from './../../Utils';
import { TabTitle } from './TabTitle';

import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

const TabsWrapper = styled.div`
  margin: 0 -15px 10px;
  box-shadow: ${({ theme }) => theme.shadows.bottomBox};
`;

interface TabsProps extends WithModalProps {
  activeTab?: number;
}

const Tabs: React.FC<TabsProps> = ({
  children,
  openModal,
  activeTab = 0,
}) => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(activeTab);

  const tab = React.useMemo(
    () => {
      const items = children as Array<object>;

      return items.length
        ? children[activeTabIndex]
        : children;
    },
    [activeTabIndex, children]
  );

  return (
    <React.Fragment>
      <TabsWrapper>
        <Flex flexWrap="wrap">
          {React.Children.map(children, (child, i) => {
            if (!child) {
              return null;
            }

            const { title, hintIfDisabled, isDisabled, withConfirmation, hasTabs } = child['props'];

            const handleClick = () =>
              withConfirmation
                ? openModal({
                  name: modalNamesConst.CONFIRMATION,
                  payload: {
                    confirmationAction: () => setActiveTabIndex(i),
                    confirmationTitle: 'Switch the tab?',
                    confirmationText: 'You have unsaved changes.',
                  },
                })
                : setActiveTabIndex(i);

            return (
              <TabTitle
                className={i === activeTabIndex && 'is-active'}
                isDisabled={isDisabled}
                hasTabs={hasTabs}
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
      <div>{tab}</div>
    </React.Fragment>
  );
};

export default withModal(Tabs);
