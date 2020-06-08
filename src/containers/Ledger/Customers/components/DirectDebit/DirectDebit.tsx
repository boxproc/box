import React from 'react';
// import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components';
import { DirectDebitsMandatesTable } from './../../components';
import { DirectDebitForm } from './../../forms';

import {
  // IDirectDebitMandate,
  THandleAddDirectDebitAccount,
  THandleChangeDirectDebitMandate,
  THandleGetDirectDebitMandates,
  TResetDirectDebitMandates,
} from 'store';
import { ISelectValue } from 'types';

interface IDirectDebit {
  addDirectDebitAccount: THandleAddDirectDebitAccount;
  // mandates: ImmutableArray<IDirectDebitMandate>;
  changeMandate: THandleChangeDirectDebitMandate;
  customerCountryCode: string;
  customerId: number;
  getMandates: THandleGetDirectDebitMandates;
  interfacesOptions: Array<ISelectValue>;
  isChangingMandate: boolean;
  isInterfacesLoading: boolean;
  isLoading: boolean;
  isMandatesLoading: boolean;
  isReadOnly: boolean;
  mandates: any;
  onCancel: () => void;
  resetDirectDebitMandates: TResetDirectDebitMandates;
}

const DirectDebit: React.FC<IDirectDebit> = ({
  addDirectDebitAccount,
  changeMandate,
  customerCountryCode,
  customerId,
  getMandates,
  interfacesOptions,
  isChangingMandate,
  isInterfacesLoading,
  isLoading,
  isMandatesLoading,
  isReadOnly,
  mandates,
  onCancel,
  resetDirectDebitMandates,
}) => {
  React.useEffect(
    () => {
      return () => resetDirectDebitMandates();
    },
    [resetDirectDebitMandates]
  );

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
      <Box py="10px">
        <DirectDebitsMandatesTable
          customerId={customerId}
          changeMandate={changeMandate}
          getMandates={getMandates}
          isChangingMandate={isChangingMandate}
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
