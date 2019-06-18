import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { History } from 'history';

import { Button } from 'components/Buttons';

import { HandleUserLogout } from 'types';

interface PageProps {
  userName: string;
  userLogout: HandleUserLogout;
  history: History;
}

const Page: React.FC<PageProps> = ({
  userName,
  userLogout,
  history,
}) => {
  const handleUserLogout = React.useCallback(
    () => {
      userLogout();
      history.push('/login');
    },
    []
  );

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
    >
      <Box mb={20}>
        Welcome, {userName}!
      </Box>
      <Box>
        <Button onClick={handleUserLogout}>Logout</Button>
      </Box>
    </Flex>
  );
};

export default Page;
