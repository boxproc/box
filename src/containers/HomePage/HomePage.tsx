import React from 'react';

import { Flex } from '@rebass/grid';

interface HomePageProps {
  userName: string;
}

const HomePage: React.FC<HomePageProps> = ({
  userName,
}) => {

  return (
    <Flex justifyContent="center">
      Welcome, {userName}!
    </Flex>
  );
};

export default HomePage;
