import React from 'react';
// import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { Button, Hr, T4 } from 'components';
import { DirectDebitForm } from './../../forms';
import DirectDebitsMandatesTable from './DirectDebitsMandatesTable';

import {
  IDirectDebitMandate,
  THandleAddDirectDebitAccount,
  THandleChangeDirectDebitMandate,
  THandleGetDirectDebitMandates,
  TResetDirectDebitMandates,
} from 'store';
import { ISelectValue } from 'types';
import MandatesFilterForm from './MandatesFilterForm';

const statusOptions = [
  { value: 'all', label: 'All' },
  { value: 'A', label: 'Active' },
  { value: 'P', label: 'Pending' },
  { value: 'I', label: 'Inactive' },
  { value: 'F', label: 'Failed' },
];

interface IDirectDebit {
  addDirectDebitAccount: THandleAddDirectDebitAccount;
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
  // mandates: ImmutableArray<IDirectDebitMandate>;
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
  const [data, setData] = React.useState([]);
  const [status, setStatus] = React.useState('All');
  const [isFiltering, setIsFiltering] = React.useState(false);

  React.useEffect(
    () => {
      let filteredData = [];

      if (status === 'All') {
        filteredData = mandates;
      } else {
        filteredData = mandates.filter((el: IDirectDebitMandate) => el.status === status);
      }

      setData(filteredData);
    },
    [mandates, status]
  );

  React.useEffect(
    () => {
      getMandates({ customerId });
      return () => resetDirectDebitMandates();
    },
    [getMandates, resetDirectDebitMandates, customerId]
  );

  const filterMandates = React.useCallback(
    formValues => {
      const statusValue = formValues.status;
      setIsFiltering(true);

      setTimeout(
        () => {
          setStatus(statusValue.label);
          setIsFiltering(false);
        },
        300
      );
    },
    []
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
      <Hr />
      <Box mt="15px">
        <T4>Mandates</T4>
      </Box>
      <MandatesFilterForm
        options={statusOptions}
        onSubmit={filterMandates}
        initialValues={{
          status: statusOptions.find(el => el.label === status),
        }}
      />
      <Box py="10px">
        <DirectDebitsMandatesTable
          changeMandate={changeMandate}
          isChangingMandate={isChangingMandate}
          isLoading={isMandatesLoading || isFiltering}
          isReadOnly={isReadOnly}
          mandates={data}
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
