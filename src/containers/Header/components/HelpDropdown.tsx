import React from 'react';

import { Box, Flex } from '@rebass/grid';
import * as H from 'history';

import styled from 'theme';

import { Dropdown, DropdownOption, ExternalLink, HelpCircleIcon } from 'components';

import { basePath } from 'consts';

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

interface IHelpDropdown {
  helpLink: string;
  location: H.Location;
}

const HelpDropdown: React.FC<IHelpDropdown> = ({ helpLink, location }) => {
  const isHome = React.useMemo(
    () => location.pathname === basePath,
    [location]
  );

  const helpLinkTitle = React.useMemo(
    () => {
      const pathArr = location.pathname.split('/');
      const lastElem = pathArr[pathArr.length - 1];
      return lastElem.replace(/_/g, ' ');
    },
    [location]
  );

  return (
    <Dropdown
      selectable={false}
      ToggleButtonComponent={<HelpBlock />}
    >
      <DropdownOption>
        <ExternalLink
          link="https://www.boxprocessing.com/confluence/display/bps/box+ui"
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
