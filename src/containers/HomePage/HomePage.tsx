import React from 'react';

import { Box } from '@rebass/grid';

import { SmallText } from 'components/Text';

import { cookiesNames } from 'consts';

import { cookiesUtil } from 'utils';

interface HomePageProps {
  lastActivity: string;
}

const HomePage: React.FC<HomePageProps> = ({
  lastActivity,
}) => {
  React.useEffect(
    () => {
      if (lastActivity) {
        cookiesUtil.set(cookiesNames.LAST_ACTIVITY, lastActivity);
      }
      return () => cookiesUtil.remove(cookiesNames.LAST_ACTIVITY);
    },
    [lastActivity]
  );

  return (
    <React.Fragment>
      {lastActivity && (
        <React.Fragment>
          <Box mb="5px">Welcome, {cookiesUtil.get(cookiesNames.FULL_NAME)}!</Box>
          <SmallText>
            Datetime of your last activity: {cookiesUtil.get(cookiesNames.LAST_ACTIVITY)}
          </SmallText>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default HomePage;
