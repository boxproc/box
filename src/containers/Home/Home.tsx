import React from 'react';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { Paragraph, SmallText } from 'components/Text';

import { cookiesNames, modalNames, sessionStorageNames } from 'consts';

import { OpenModal } from 'store/domains';

import { cookiesUtil } from 'utils';

interface HomeProps {
  lastActivity: string;
  openModal: OpenModal;
  is2faRegistrationPending: boolean;
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
  is2faRegistrationPending,
}) => {
  React.useEffect(
    () => {
      if (lastActivity) {
        sessionStorage.setItem(sessionStorageNames.LAST_ACTIVITY, lastActivity);
      }
      return () => sessionStorage.removeItem(sessionStorageNames.LAST_ACTIVITY);
    },
    [lastActivity]
  );

  return (
    <React.Fragment>
      <CenterBlock>
        {lastActivity && (
          <React.Fragment>
            <Paragraph
              bold={true}
              size={15}
            >
              Welcome, {cookiesUtil.get(cookiesNames.FULL_NAME)}!
            </Paragraph>
            <SmallText>
              Datetime of your last
            activity: {sessionStorage.getItem(sessionStorageNames.LAST_ACTIVITY)}
            </SmallText>
          </React.Fragment>
        )}
        {cookiesUtil.get(cookiesNames.AUTH_REGISTRATION_PENDING) && (
          <React.Fragment>
            <Paragraph>Please, enable two-factor authentication</Paragraph>
            <Button
              text="Turn on"
              iconName="smartphone"
              onClick={() => openModal({
                name: modalNames.REGISTER_2FA_MODAL,
              })}
            />
          </React.Fragment>
        )}
      </CenterBlock>
    </React.Fragment>
  );
};

export default Home;
