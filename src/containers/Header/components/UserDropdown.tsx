import React from 'react';

import { Flex } from '@rebass/grid';
import { User } from 'styled-icons/fa-solid/User';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { Dropdown, Option } from 'components/Dropdown';
import { sessionStorageNames } from 'consts';

import { HandleUserLogout } from 'store/domains';

const UserIcon = styled(User)`
  margin-right: 5px;
  color: ${({ theme }) => theme.grayColor};
`;

const TextWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.darkGrayColor};
  text-transform: uppercase;
  letter-spacing: .2pt;
`;

const UserBlock = () => (
  <Flex alignItems="baseline">
    <UserIcon size="12" />
    <TextWrapper>{sessionStorage.getItem(sessionStorageNames.FULL_NAME)}</TextWrapper>
  </Flex>
);

interface UserDropdownProps {
  userLogout: HandleUserLogout;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ userLogout }) => {
  const handleUserLogout = React.useCallback(
    () => userLogout(),
    [userLogout]
  );

  return (
    <Dropdown
      selectable={false}
      dropdownListPosition="right"
      ToggleButtonComponent={<UserBlock />}
    >
      <Option>
        <Button
          text="Log out"
          iconName="logOut"
          onClick={handleUserLogout}
        />
      </Option>
    </Dropdown>
  );
};

export default UserDropdown;
