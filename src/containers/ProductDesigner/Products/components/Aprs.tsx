import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';
import { AprsTable } from './../components';
import { AprsForm } from './../forms';

interface IAprs {
  onCancel: () => void;
  isReadOnly: boolean;
}

const Aprs: React.FC<IAprs> = ({
  onCancel,
  isReadOnly,
}) => {
  return (
    <React.Fragment>
      {!isReadOnly && (
        <AprsForm />
      )}
      <Box pt="10px">
        <AprsTable isReadOnly={isReadOnly} />
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

export default Aprs;
