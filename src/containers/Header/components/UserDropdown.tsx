import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled, { css } from 'theme';

import { Button, Dropdown, DropdownOption, UserIcon, UserShieldIcon } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { iconNamesConst, modalNamesConst, yesNoConst } from 'consts';

import { THandleUserLogout } from 'store';
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

interface IUserData {
  isMasterInstitution: boolean;
  firstName: string;
  lastName: string;
}

const UserBlock: React.FC<IUserData> = ({
  isMasterInstitution,
  firstName,
  lastName,
}) => (
    <Flex alignItems="center">
      {isMasterInstitution
        ? (<Box mt="-2px"><UserShieldIconStyled size="15" /></Box>)
        : (<Box mt="-2px"><UserIconStyled size="12" /></Box>)
      }
      <TextWrapper>{`${firstName} ${lastName}`}</TextWrapper>
    </Flex>
  );

interface IUserDropdown extends IWithModal {
  userLogout: THandleUserLogout;
}

const UserDropdown: React.FC<IUserDropdown> = ({ userLogout, openModal }) => {
  const userData = storageUtil.getUserData();

  const isChangePasswordAvailable = React.useMemo(
    () => storageUtil.getLoginFlag() && !storageUtil.getRegistrationPendingFlag(),
    []
  );

  const isChangeProfileAvailable = React.useMemo(
    () => userData
      && userData.changeProfileAllowedFlag === yesNoConst.YES
      && !storageUtil.getRegistrationPendingFlag(),
    [userData]
  );

  const isMasterInstitution = React.useMemo(
    () => userData && userData.masterInstitutionFlag,
    [userData]
  );

  const firstName = React.useMemo(
    () => userData && userData.firstName,
    [userData]
  );

  const lastName = React.useMemo(
    () => userData && userData.lastName,
    [userData]
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
          isMasterInstitution={isMasterInstitution}
          firstName={firstName}
          lastName={lastName}
        />
      }
    >
      {isChangePasswordAvailable && (
        <DropdownOption>
          <Button
            text="Change password"
            iconName={iconNamesConst.KEY}
            onClick={handleOpenChangePasswordModal}
            classNames={['no-text-transform']}
          />
        </DropdownOption>
      )}
      {isChangeProfileAvailable && (
        <DropdownOption>
          <Button
            text="Change profile"
            iconName={iconNamesConst.USER}
            onClick={handleOpenChangeProfileModal}
            classNames={['no-text-transform']}
          />
        </DropdownOption>
      )}
      <DropdownOption>
        <Button
          text="Log out"
          iconName={iconNamesConst.LOGOUT}
          onClick={handleUserLogout}
          classNames={['no-text-transform']}
        />
      </DropdownOption>
    </Dropdown>
  );
};

export default withModal(UserDropdown);
