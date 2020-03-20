import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import { DictionaryTransactionTypes, HandleGetDictionaryTransactionTypes } from 'store';

interface TransactionTypesProps {
  getTransactionTypes: HandleGetDictionaryTransactionTypes;
  transactionTypes: ImmutableArray<DictionaryTransactionTypes>;
  isLoading: boolean;
}

export const TransactionTypes: React.FC<TransactionTypesProps> = ({
  getTransactionTypes,
  transactionTypes,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getTransactionTypes();
    },
    [getTransactionTypes]
  );

  return (
    <PageTemplate
      title="Transaction Types"
      data={transactionTypes}
      columns={tableColumns}
      isDownloadButton={true}
      isLoading={isLoading}
    />
  );
};

export default TransactionTypes;
