import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';
import { FeesTable } from './../components';
import { FeesForm } from './../forms';

interface IFees {
  onCancel: () => void;
  isReadOnly: boolean;
}

const Fees: React.FC<IFees> = ({
  onCancel,
  isReadOnly,
}) => {
  return (
    <React.Fragment>
      {!isReadOnly && (
        <FeesForm />
      )}
      <Box pt="10px">
        <FeesTable isReadOnly={isReadOnly} />
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

export default Fees;
