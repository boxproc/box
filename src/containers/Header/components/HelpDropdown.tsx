import React from 'react';

import { Box, Flex } from '@rebass/grid';
import * as H from 'history';

import styled from 'theme';

import { Dropdown, DropdownOption, ExternalLink, HelpCircleIcon } from 'components';

import { basePath, linksConst } from 'consts';

import { UiItemPrepared } from 'store/domains';
import { stringsUtil } from 'utils';

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

  const currentUrl = React.useMemo(
    () => stringsUtil.getCurrentBPSUrl(location.pathname),
    [location]
  );

  const currentPathname = React.useMemo(
    () => location.pathname.slice(1),
    [location]
  );

  const currentUiItem = React.useMemo(
    () => currentPathname.split('/').slice(1).join('/'),
    [currentPathname]
  );

  const currentUiItemName = React.useMemo(
    () => uiItems
    && uiItems.find(item => item.id === currentUiItem)
    && uiItems.find(item => item.id === currentUiItem).title,
    [uiItems, currentUiItem]
  );

  return (
    <Dropdown
      selectable={false}
      ToggleButtonComponent={<HelpBlock />}
    >
      <DropdownOption>
        <ExternalLink
          link={linksConst.BPS}
          text="BOX-UI"
        />
      </DropdownOption>
      {!isHome && (
        <DropdownOption>
          <ExternalLink
            link={currentUrl}
            text={`Help: ${currentUiItemName}`}
          />
        </DropdownOption>
      )}
    </Dropdown>
  );
};

export default HelpDropdown;
