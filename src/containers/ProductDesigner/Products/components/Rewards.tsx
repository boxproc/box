import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';
import { RewardsTable } from './../components';
import { RewardsForm } from './../forms';

interface IRewards {
  onCancel: () => void;
  isReadOnly: boolean;
}

const Rewards: React.FC<IRewards> = ({
  onCancel,
  isReadOnly,
}) => {
  return (
    <React.Fragment>
      {!isReadOnly && (
        <RewardsForm />
      )}
      <Box pt="10px">
        <RewardsTable isReadOnly={isReadOnly} />
      </Box>
      <Flex justifyContent="flex-end">
        <Button
          text="Close"
          onClick={onCancel}
        />
      </Flex>
    </React.Fragment>
  );
};

export default Rewards;
