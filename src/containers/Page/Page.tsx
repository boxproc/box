import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';

import { HandleUserLogout } from 'types';

interface PageProps {
  userName: string;
  userLogout: HandleUserLogout;
}

const Page: React.FC<PageProps> = ({
  userName,
  userLogout,
}) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
    >
      <Box mb={20}>
        Welcome, {userName}!
      </Box>
      <Button onClick={userLogout}>Logout</Button>
    </Flex>
  );
};

export default Page;
