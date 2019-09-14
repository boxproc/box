import React from 'react';

import { Flex } from '@rebass/grid';
import { User } from 'styled-icons/fa-solid/User';
import { UserShield } from 'styled-icons/fa-solid/UserShield';

import styled, { css } from 'theme';

import { Button, Dropdown, DropdownOption } from 'components';

import { modalNames, usernames } from 'consts';

import { HandleUserLogout, OpenModal } from 'store/domains';
import { storageUtil } from 'utils';

const iconCss = css`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.gray};
`;

const UserIcon = styled(User)`
  ${iconCss};
`;

const UserShieldIcon = styled(UserShield)`
  ${iconCss};
`;

const TextWrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray};
  text-transform: uppercase;
  letter-spacing: .2pt;
`;

interface UserDataProps {
  username: string;
  firstName: string;
  lastName: string;
}

const UserBlock: React.FC<UserDataProps> = ({ username, firstName, lastName }) => (
  <Flex alignItems="baseline">
    {username === usernames.ADMIN
      ? <div><UserShieldIcon size="17" /></div>
      : <UserIcon size="12" />
    }
    <TextWrapper>{`${firstName} ${lastName}`}</TextWrapper>
  </Flex>
);

interface UserDropdownProps {
  userLogout: HandleUserLogout;
  openModal: OpenModal;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ userLogout, openModal }) => {
  const userData = storageUtil.getUserData();

  const handleUserLogout = React.useCallback(
    () => userLogout(),
    [userLogout]
  );

  return (
    <Dropdown
      selectable={false}
      dropdownListPosition="right"
      ToggleButtonComponent={
        <UserBlock
          username={userData && userData.username}
          firstName={userData && userData.firstName}
          lastName={userData && userData.lastName}
        />
      }
    >
      {userData && userData.username === usernames.ADMIN && (
        <DropdownOption>
          <Button
            text="Change profile"
            iconName="user"
            onClick={() => openModal({
              name: modalNames.CHANGE_PROFILE_MODAL,
            })}
          />
        </DropdownOption>)}
      <DropdownOption>
        <Button
          text="Log out"
          iconName="logOut"
          onClick={handleUserLogout}
        />
      </DropdownOption>
    </Dropdown>
  );
};

export default UserDropdown;
