import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';
import { DirectDebitAccountsTable } from './../../components';
import { DirectDebitForm } from './../../forms';

import { THandleAddDirectDebitAccount } from 'store';

interface IDirectDebitAccounts {
  isLoading: boolean;
  onCancel: () => void;
  isReadOnly: boolean;
  addDirectDebitAccount: THandleAddDirectDebitAccount;
}

const DirectDebitAccounts: React.FC<IDirectDebitAccounts> = ({
  onCancel,
  isLoading,
  isReadOnly,
  addDirectDebitAccount,
}) => {
  return (
    <React.Fragment>
      {!isReadOnly && (
        <DirectDebitForm
          isDisabled={isLoading}
          isLoading={isLoading}
          addDirectDebitAccount={addDirectDebitAccount}
        />
      )}
      <Box pt="10px">
        <DirectDebitAccountsTable
          isReadOnly={isReadOnly}
          isDisabled={isLoading}
        />
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

export default DirectDebitAccounts;
