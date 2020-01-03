import React from 'react';

import { Box, Flex } from '@rebass/grid';
import * as H from 'history';

import styled from 'theme';

import { Dropdown, DropdownOption, ExternalLink, HelpCircleIcon } from 'components';

import { basePath, linksConst } from 'consts';

import { UiItemPrepared } from 'store/domains';

const HelpIcon = styled(HelpCircleIcon)`
  margin-right: 3px;
  color: ${({ theme }) => theme.colors.gray};
`;

const TextWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray};
  text-transform: uppercase;
  letter-spacing: .2pt;
`;

const HelpBlock = () => (
  <Flex alignItems="center">
    <Box mt="-1px"><HelpIcon size="15" /></Box>
    <TextWrapper>Help</TextWrapper>
  </Flex>
);

interface HelpDropdownProps {
  uiItems: Array<UiItemPrepared>;
  location: H.Location;
}

const HelpDropdown: React.FC<HelpDropdownProps> = ({
  uiItems,
  location,
}) => {
  const isHome = React.useMemo(
    () => location.pathname === basePath,
    [location]
  );

  const currentUiItem = React.useMemo(
    () => uiItems.find(item => `${basePath}${item.id}` === `${location.pathname}`),
    [location, uiItems]
  );

  const helpLink = React.useMemo(
    () => currentUiItem && currentUiItem.helpPageURL,
    [currentUiItem]
  );

  const helpLinkTitle = React.useMemo(
    () => currentUiItem && currentUiItem.title,
    [currentUiItem]
  );

  return (
    <Dropdown
      selectable={false}
      ToggleButtonComponent={<HelpBlock />}
    >
      <DropdownOption>
        <ExternalLink
          link={linksConst.BPS_BASE}
          text="BOX-UI"
        />
      </DropdownOption>
      {!isHome && (
        <DropdownOption>
          <ExternalLink
            link={helpLink}
            text={`Help: ${helpLinkTitle}`}
          />
        </DropdownOption>
      )}
    </Dropdown>
  );
};

export default HelpDropdown;
