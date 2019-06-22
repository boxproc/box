import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';

import { HandleUserLogout } from 'store/domains';

interface PageProps {
  userName: string;
  userLogout: HandleUserLogout;
}

const Page: React.FC<PageProps> = ({
  userName,
  userLogout,
}) => {
  const handleUserLogout = React.useCallback(
    () => userLogout(),
    [userLogout]
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
