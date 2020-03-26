import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Table } from 'components';
import { tableColumns } from './tableColumns';

import { IStatementTransaction } from 'store';

interface ITransactionsTable {
  data: ImmutableArray<IStatementTransaction>;
}

export const TransactionsTable: React.FC<ITransactionsTable> = ({ data }) => {
  return (
    <Table
      columns={tableColumns}
      data={data}
      isHeader={true}
      isSmaller={true}
      pageSize={7}
    />
  );
};

export default TransactionsTable;
