import React from 'react';
import { match as Match, Redirect, Route, Switch } from 'react-router';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Container } from 'components/Block';
import { Footer } from 'components/Footer';

import { cookiesExpires, cookiesNames } from 'consts';

import HomePage from 'containers/HomePage';
import Login from 'containers/Login';

import { HandleGetUserInfo } from 'store/domains';

import { cookiesUtil } from 'utils';

const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  min-height: 100vh;
`;

const PagesWrapper = styled(Container)``;

interface RootProps {
  match: Match<string>;
  getUserInfo: HandleGetUserInfo;
  sessionId: string;
  isLoggedIn: string;
  isRememberedMe: boolean;
  userName: string;
}

const Root: React.FC<RootProps> = ({
  match,
  getUserInfo,
  sessionId,
  isLoggedIn,
  isRememberedMe,
  userName,
}) => {
  React.useEffect(
    () => {
      console.log('---isLoggedIn', isLoggedIn);
      getUserInfo();
      if (sessionId) {
        cookiesUtil.setCookie(cookiesNames.SESSION_ID, sessionId);
      }
      if (!isLoggedIn) {
        cookiesUtil.deleteCookie(cookiesNames.SESSION_ID);
      }
      if (isRememberedMe) {
        cookiesUtil.setCookie(
          cookiesNames.USER_NAME,
          userName, {
            expires: cookiesExpires.USER_NAME_EXPIRES,
          }
        );
      }
    },
    [getUserInfo, sessionId, isLoggedIn, isRememberedMe, userName]
  );

  return (
    <RootWrapper>
      <Box />
      <PagesWrapper>
        <Switch>
          <Route
            exact={true}
            path={`${match.path}`}
            render={() => (
              isLoggedIn
                ? <HomePage />
                : <Redirect from="*" to={`${match.path}login`} />
            )}
          />
          <Route
            exact={true}
            path={`${match.path}login`}
            render={() => (
              !isLoggedIn
                ? <Login />
                : <Redirect from="*" to={`${match.path}`} />
            )}
          />
        </Switch>
      </PagesWrapper>
      <Footer />
    </RootWrapper>
  );
};

export default Root;
