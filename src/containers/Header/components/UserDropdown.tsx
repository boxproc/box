import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled, { css } from 'theme';

import { Button, Dropdown, DropdownOption, UserIcon, UserShieldIcon } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst, usernames } from 'consts';

import { HandleUserLogout } from 'store/domains';
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
  <Flex alignItems="center">
    {username === usernames.ADMIN
      ? (<div><UserShieldIconStyled size="15" /></div>)
      : (<Box mt="-2px"><UserIconStyled size="12" /></Box>)
    }
    <TextWrapper>{`${firstName} ${lastName}`}</TextWrapper>
  </Flex>
);

interface UserDropdownProps extends WithModalProps {
  userLogout: HandleUserLogout;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ userLogout, openModal }) => {
  const userData = storageUtil.getUserData();

  const isChangePasswordAvailable = React.useMemo(
    () => storageUtil.getLoginFlag() && !storageUtil.getRegistrationPendingFlag(),
    []
  );

  const handleUserLogout = React.useCallback(
    () => userLogout(),
    [userLogout]
  );

  const handleOpenChangePasswordModal = React.useCallback(
    () => openModal({ name: modalNamesConst.CHANGE_PASSWORD }),
    [openModal]
  );

  const handleOpenChangeProfileModal = React.useCallback(
    () => openModal({ name: modalNamesConst.CHANGE_PROFILE }),
    [openModal]
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
      {isChangePasswordAvailable && (
        <DropdownOption>
          <Button
            text="Change password"
            iconName={iconNamesConst.KEY}
            onClick={handleOpenChangePasswordModal}
            textTransformNone={true}
          />
        </DropdownOption>
      )}
      {userData && userData.username === usernames.ADMIN && (
        <DropdownOption>
          <Button
            text="Change profile"
            iconName={iconNamesConst.USER}
            onClick={handleOpenChangeProfileModal}
            textTransformNone={true}
          />
        </DropdownOption>)}
      <DropdownOption>
        <Button
          text="Log out"
          iconName={iconNamesConst.LOGOUT}
          onClick={handleUserLogout}
          textTransformNone={true}
        />
      </DropdownOption>
    </Dropdown>
  );
};

export default withModal(UserDropdown);
