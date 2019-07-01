import React from 'react';

import { Flex } from '@rebass/grid';
import { Link } from 'react-router-dom';

import { basePath } from 'consts';

interface HomePageProps {
  userName: string;
}

const HomePage: React.FC<HomePageProps> = ({
  userName,
}) => {

  return (
    <Flex justifyContent="center" flexDirection="column" alignItems="center">
      <React.Fragment>Welcome, {userName}!</React.Fragment>
      <Link to={`${basePath}page`}>Page</Link>
    </Flex>
  );
};

export default HomePage;
