import React from 'react';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  DictionaryTransactionTypes,
  HandleGetDictionaryTransactionTypes,
} from 'store/domains';

interface TransactionTypesProps {
  getTransactionTypes: HandleGetDictionaryTransactionTypes;
  transactionTypes: Array<DictionaryTransactionTypes>;
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
