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
      return () => {
        storageUtil.removeFirstScreenFlag();
      };
    },
    []
  );

  const handleOpenModal = React.useCallback(
    () => openModal({
      name: modalNamesConst.REGISTER_2FA_MODAL,
    }),
    [openModal]
  );

  const userData = storageUtil.getUserData();
  const registrationPendingFlag = storageUtil.getRegistrationPendingFlag();

  return (
    <React.Fragment>
      <CenterBlock>
        {storageUtil.getFirstScreenFlag() && (
          <React.Fragment>
            <Paragraph bold={true} size={15}>
              Welcome {`${userData && userData.firstName} ${userData && userData.lastName}`}!
            </Paragraph>
            <SmallText>
              Your last activity: {userData && userData.lastActivity}
            </SmallText>
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
            >
              <Button
                text="Enable second factor authentication"
                bordered={true}
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
