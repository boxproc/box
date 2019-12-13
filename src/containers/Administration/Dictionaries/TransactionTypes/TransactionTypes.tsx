import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  DictionaryTransactionTypes,
  HandleGetDictionaryTransactionTypes,
} from 'store/domains';

interface TransactionTypesProps {
  getTransactionTypes: HandleGetDictionaryTransactionTypes;
  transactionTypes: Array<DictionaryTransactionTypes>;
}

export const TransactionTypes: React.FC<TransactionTypesProps> = ({
  getTransactionTypes,
  transactionTypes,
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
    />
  );
};

export default withSpinner({
  isFixed: true,
})(TransactionTypes);
