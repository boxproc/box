import React from 'react';

import { Table, TableNoData } from 'components';

import { withEditTable, WithEditTableProps } from './withEditTable';

interface TablePageProps extends WithEditTableProps {
  data: Array<object>;
  columns: Array<object>;
}

export const TablePage: React.FC<TablePageProps> = props => {
  const {
    data,
    columns,
    onRowClick,
    activeTableRowIndex,
    ...tablePageProps
  } = props;

  return (
    <Table
      data={data}
      columns={columns}
      activeRowIndex={activeTableRowIndex}
      getTrGroupProps={onRowClick}
      NoDataComponent={TableNoData}
      {...tablePageProps}
    />
  );
};

export default withEditTable(TablePage);