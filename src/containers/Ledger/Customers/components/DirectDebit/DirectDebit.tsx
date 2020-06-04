import React from 'react';
// import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';
import { DirectDebitsMandatesTable } from './../../components';
import { DirectDebitForm } from './../../forms';

import {
  // IDirectDebitMandate,
  THandleAddDirectDebitAccount,
  THandleGetDirectDebitMandates,
} from 'store';
import { ISelectValue } from 'types';

interface IDirectDebit {
  addDirectDebitAccount: THandleAddDirectDebitAccount;
  customerCountryCode: string;
  customerId: number;
  getMandates: THandleGetDirectDebitMandates;
  interfacesOptions: Array<ISelectValue>;
  isInterfacesLoading: boolean;
  isLoading: boolean;
  isMandatesLoading: boolean;
  isReadOnly: boolean;
  // mandates: ImmutableArray<IDirectDebitMandate>;
  mandates: any;
  onCancel: () => void;
}

const DirectDebit: React.FC<IDirectDebit> = ({
  addDirectDebitAccount,
  customerCountryCode,
  customerId,
  getMandates,
  interfacesOptions,
  isInterfacesLoading,
  isLoading,
  isMandatesLoading,
  isReadOnly,
  mandates,
  onCancel,
}) => {
  return (
    <React.Fragment>
      {!isReadOnly && (
        <DirectDebitForm
          isDisabled={isLoading}
          isLoading={isLoading}
          addDirectDebitAccount={addDirectDebitAccount}
          customerId={customerId}
          customerCountryCode={customerCountryCode}
          interfacesOptions={interfacesOptions}
          isInterfacesLoading={isInterfacesLoading}
        />
      )}
      <Box pt="10px">
        <DirectDebitsMandatesTable
          customerId={customerId}
          getMandates={getMandates}
          isLoading={isMandatesLoading}
          isReadOnly={isReadOnly}
          mandates={mandates}
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
