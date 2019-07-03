import React from 'react';

import { Flex } from '@rebass/grid';

interface HomePageProps {
  userName: string;
}

const HomePage: React.FC<HomePageProps> = ({
  userName,
}) => {

  return (
    <Flex justifyContent="center" flexDirection="column" alignItems="center">
      <React.Fragment>Welcome, {userName}!</React.Fragment>
    </Flex>
  );
};

export default HomePage;
