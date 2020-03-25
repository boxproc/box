import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { tableColumns } from './tableColumns';

import PageTemplate from 'containers/PageTemplate';

import { IDictionaryTransactionTypePrepared, THandleGetDictionaryTransactionTypes } from 'store';

interface TransactionTypesProps {
  getTransactionTypesData: THandleGetDictionaryTransactionTypes;
  isLoading: boolean;
  transactionTypesData: ImmutableArray<IDictionaryTransactionTypePrepared>;
}

export const TransactionTypes: React.FC<TransactionTypesProps> = ({
  getTransactionTypesData,
  isLoading,
  transactionTypesData,
}) => {
  React.useEffect(
    () => {
      getTransactionTypesData();
    },
    [getTransactionTypesData]
  );

  return (
    <PageTemplate
      columns={tableColumns}
      data={transactionTypesData}
      isDownloadButton={true}
      isLoading={isLoading}
      title="Transaction Types"
    />
  );
};

export default TransactionTypes;
