import React from 'react';

import { Flex } from '@rebass/grid';
import { User } from 'styled-icons/fa-solid/User';
import { UserShield } from 'styled-icons/fa-solid/UserShield';

import styled, { css } from 'theme';

import { Button } from 'components/Buttons';
import { Dropdown, Option } from 'components/Dropdown';
import { modalNames, sessionStorageNames } from 'consts';

import { HandleUserLogout, OpenModal } from 'store/domains';

const iconCss = css`
  margin-right: 5px;
  color: ${({ theme }) => theme.grayColor};
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
  color: ${({ theme }) => theme.darkGrayColor};
  text-transform: uppercase;
  letter-spacing: .2pt;
`;

const UserBlock = () => (
  <Flex alignItems="baseline">
    {sessionStorage.getItem(sessionStorageNames.USER_NAME) === 'admin'
      ? <div><UserShieldIcon size="17"/></div>
      : <UserIcon size="12"/>
    }
    <TextWrapper>{sessionStorage.getItem(sessionStorageNames.FULL_NAME)}</TextWrapper>
  </Flex>
);

interface UserDropdownProps {
  userLogout: HandleUserLogout;
  openModal: OpenModal;
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  userLogout,
  openModal,
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
      {sessionStorage.getItem(sessionStorageNames.USER_NAME) === 'admin' && (
        <Option>
        <Button
          text="Change profile"
          iconName="user"
          onClick={() => openModal({
            name: modalNames.CHANGE_PROFILE_MODAL,
          })}
        />
      </Option>)}
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
