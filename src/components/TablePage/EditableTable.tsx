import React from 'react';

import { withEditTable, WithEditTableProps } from 'components/HOCs';
import { Table, TableNoData } from 'components/Table';

interface TablePageProps extends WithEditTableProps {
  data: Array<object>;
  columns: Array<object>;
}

export const TablePage: React.FC<TablePageProps> = props => {
  const {
    data,
    columns,
    onRowClick,
    ...tablePageProps
  } = props;

  return (
    <Table
      data={data}
      columns={columns}
      getTrGroupProps={onRowClick}
      NoDataComponent={TableNoData}
      {...tablePageProps}
    />
  );
};

export default withEditTable(TablePage);
