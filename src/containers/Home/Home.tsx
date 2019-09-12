import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { Paragraph, SmallText } from 'components/Text';

import { modalNames, sessionStorageNames } from 'consts';

import { OpenModal } from 'store/domains';

interface HomeProps {
  lastActivity: string;
  openModal: OpenModal;
  firstName: string;
  lastName: string;
}

const CenterBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 230px);
  align-items: center;
  justify-content: center;
`;

const Home: React.FC<HomeProps> = ({
  lastActivity,
  openModal,
  firstName,
  lastName,
}) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <React.Fragment>
      <CenterBlock>
        {lastActivity && (
          <React.Fragment>
            <Paragraph bold={true} size={15}>
              Welcome, {fullName}!
            </Paragraph>
            <SmallText>
              Datetime of your last activity: {lastActivity}
            </SmallText>
          </React.Fragment>
        )}
        {sessionStorage.getItem(sessionStorageNames.AUTH_REGISTRATION_PENDING) && (
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
                  iconName="smartphone"
                  onClick={() => openModal({
                    name: modalNames.REGISTER_2FA_MODAL,
                  })}
                />
              </Flex>
            </React.Fragment>
          )}
      </CenterBlock>
    </React.Fragment>
  );
};

export default Home;
