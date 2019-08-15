import React from 'react';

import { Flex } from '@rebass/grid';
import { User } from 'styled-icons/fa-solid/User';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { Dropdown, Option } from 'components/Dropdown';
import { cookiesNames } from 'consts';

import { HandleUserLogout } from 'store/domains';

import { cookiesUtil } from 'utils';

const UserIcon = styled(User)`
  margin-right: 5px;
  color: ${({ theme }) => theme.grayColor};
`;

const UserBlock = () => (
  <Flex alignItems="baseline">
    <UserIcon size="12" />
    <div>{cookiesUtil.get(cookiesNames.FULL_NAME)}</div>
  </Flex>
);

interface UserDropdownProps {
  userLogout: HandleUserLogout;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  userLogout,
}) => {

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
