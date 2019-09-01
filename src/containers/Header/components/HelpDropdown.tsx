import React from 'react';

import { Flex } from '@rebass/grid';
import * as H from 'history';
import { HelpCircle } from 'styled-icons/boxicons-regular/HelpCircle';

import styled from 'theme';

import { Dropdown, Option } from 'components/Dropdown';
import { ExternalLink } from 'components/links';

import { basePath, links } from 'consts';

import {
  UiItemPrepared,
} from 'store/domains';
import { stringsUtil } from 'utils';

const HelpIcon = styled(HelpCircle)`
  margin-right: 3px;
  color: ${({ theme }) => theme.grayColor};
`;

const TextWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.darkGrayColor};
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
      <Option>
        <ExternalLink
          link={links.BPS}
          text="BOX-UI"
        />
      </Option>
      {!isHome && (
        <Option>
          <ExternalLink
            link={currentUrl}
            text={`Help: ${currentUiItemName}`}
          />
        </Option>
      )}
    </Dropdown>
  );
};

export default HelpDropdown;
