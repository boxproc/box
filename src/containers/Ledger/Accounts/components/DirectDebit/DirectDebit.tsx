import React from 'react';
// import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';
import DirectDebitsMandatesTable from './DirectDebitsMandatesTable';

import {
  // IDirectDebitMandate,
  THandleGetDirectDebitMandates,
  THandleMakeDefaultDirectDebitMandate,
  TResetDirectDebitMandates,
} from 'store';

interface IDirectDebit {
  // mandates: ImmutableArray<IDirectDebitMandate>;
  makeDefault: THandleMakeDefaultDirectDebitMandate;
  accountId: number;
  getMandates: THandleGetDirectDebitMandates;
  isChangingMandate: boolean;
  isLoading: boolean;
  isReadOnly: boolean;
  mandates: any;
  onCancel: () => void;
  resetDirectDebitMandates: TResetDirectDebitMandates;
}

const DirectDebit: React.FC<IDirectDebit> = ({
  makeDefault,
  accountId,
  getMandates,
  isChangingMandate,
  isLoading,
  isReadOnly,
  mandates,
  onCancel,
  resetDirectDebitMandates,
}) => {
  React.useEffect(
    () => {
      getMandates({ accountId });
      return () => resetDirectDebitMandates();
    },
    [getMandates, resetDirectDebitMandates, accountId]
  );

  return (
    <React.Fragment>
      <Box py="10px">
        <DirectDebitsMandatesTable
          makeDefault={makeDefault}
          isChangingMandate={isChangingMandate}
          isLoading={isLoading}
          isReadOnly={isReadOnly}
          mandates={mandates}
          accountId={accountId}
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

export default DirectDebit;
