import React from 'react';

import { Flex } from '@rebass/grid';

import styled, { css } from 'theme';

import { Button, Dropdown, DropdownOption, UserIcon, UserShieldIcon } from 'components';

import { iconNamesConst, modalNamesConst, usernames } from 'consts';

import { HandleUserLogout, OpenModal } from 'store/domains';
import { storageUtil } from 'utils';

const iconCss = css`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.gray};
`;

const UserIconStyled = styled(UserIcon)`
  ${iconCss};
`;

const UserShieldIconStyled = styled(UserShieldIcon)`
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
      ? <div><UserShieldIconStyled size="17" /></div>
      : <UserIconStyled size="12" />
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
            iconName={iconNamesConst.USER}
            onClick={() => openModal({
              name: modalNamesConst.CHANGE_PROFILE_MODAL,
            })}
          />
        </DropdownOption>)}
      <DropdownOption>
        <Button
          text="Log out"
          iconName={iconNamesConst.LOGOUT}
          onClick={handleUserLogout}
        />
      </DropdownOption>
    </Dropdown>
  );
};

export default UserDropdown;
