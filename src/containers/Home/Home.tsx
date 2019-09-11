import React from 'react';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';
import { Paragraph, SmallText } from 'components/Text';

import { cookiesNames, modalNames, sessionStorageNames } from 'consts';

import { OpenModal } from 'store/domains';

import { cookiesUtil } from 'utils';

interface HomeProps {
  lastActivity: string;
  is2faRegistrationPending: boolean;
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
  is2faRegistrationPending,
  firstName,
  lastName,
  openModal,
}) => {
  React.useEffect(
    () => {
      if (lastActivity) {
        sessionStorage.setItem(sessionStorageNames.LAST_ACTIVITY, lastActivity);
      }
      if (is2faRegistrationPending) {
        cookiesUtil.set(cookiesNames.AUTH_REGISTRATION_PENDING, 'Y');
      }
      return () => sessionStorage.removeItem(sessionStorageNames.LAST_ACTIVITY);
    },
    [lastActivity, is2faRegistrationPending]
  );

  const fullName = `${firstName} ${lastName}`;

  return (
    <React.Fragment>
      <CenterBlock>
        {lastActivity && (
          <React.Fragment>
            <Paragraph
              bold={true}
              size={15}
            >
              Welcome, {cookiesUtil.get(cookiesNames.FULL_NAME) || fullName}!
            </Paragraph>
            <SmallText>
              Datetime of your last
              activity: {lastActivity}
            </SmallText>
          </React.Fragment>
        )}
        {(cookiesUtil.get(cookiesNames.AUTH_REGISTRATION_PENDING) || is2faRegistrationPending) && (
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
