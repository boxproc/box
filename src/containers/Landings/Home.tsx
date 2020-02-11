import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, Paragraph, SmallText } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst, modalNamesConst } from 'consts';

import { storageUtil } from 'utils';

interface HomeProps extends WithModalProps { }

const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 230px);
  align-items: center;
  justify-content: center;
`;

const Home: React.FC<HomeProps> = ({ openModal }) => {
  React.useEffect(
    () => {
      return () => storageUtil.removeFirstScreenFlag();
    },
    []
  );

  const handleOpenModal = React.useCallback(
    () => openModal({ name: modalNamesConst.REGISTER_2FA }),
    [openModal]
  );

  const userData = React.useMemo(
    () => storageUtil.getUserData(),
    []
  );

  const lastActivity = React.useMemo(
    () => userData && userData.lastActivity,
    [userData]
  );

  const userName = React.useMemo(
    () => `${userData && userData.firstName} ${userData && userData.lastName}`,
    [userData]
  );

  const registrationPendingFlag = React.useMemo(
    () => storageUtil.getRegistrationPendingFlag(),
    []
  );

  return (
    <React.Fragment>
      <CenterBlock>
        {storageUtil.getFirstScreenFlag() && (
          <React.Fragment>
            <Paragraph bold={true} size={15}>
              Welcome {userName}!
            </Paragraph>
            {lastActivity && (
              <SmallText>
                Your last activity: {lastActivity}
              </SmallText>
            )}
          </React.Fragment>
        )}
        {registrationPendingFlag && (
          <React.Fragment>
            <Paragraph>
              Complete registration in <b>BOX UI</b> by enabling second authentication.
            </Paragraph>
            <Flex
              alignItems="center"
              justifyContent="center"
              mt="10px"
            >
              <Button
                text="Enable second factor authentication"
                bordered={true}
                width="100%"
                iconName={iconNamesConst.SMARTPHONE}
                onClick={handleOpenModal}
              />
            </Flex>
          </React.Fragment>
        )}
      </CenterBlock>
    </React.Fragment>
  );
};

export default withModal(Home);
