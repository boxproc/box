import React from 'react';

import { Flex } from '@rebass/grid';
import * as H from 'history';

import styled from 'theme';

import { Dropdown, DropdownOption, ExternalLink, HelpCircleIcon } from 'components';

import { basePath, linksConst } from 'consts';

import {
  UiItemPrepared,
} from 'store/domains';
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
    <HelpIcon size="16" />
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
  const isHome = location.pathname === basePath;
  const currentUrl = stringsUtil.getCurrentBPSUrl(location.pathname);

  const currentPathname = location.pathname.slice(1);
  const currentUiItem = currentPathname.split('/').slice(1).join('/');
  const currentUiItemName = uiItems
    && uiItems.find(item => item.id === currentUiItem)
    && uiItems.find(item => item.id === currentUiItem).title;

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
