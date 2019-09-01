import React from 'react';

import { Table, TableNoData } from 'components/Table';

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
    activeRowChild,
    ...tablePageProps
  } = props;

  return (
    <Table
      data={data}
      columns={columns}
      activeRowChild={activeRowChild}
      getTrGroupProps={onRowClick}
      NoDataComponent={TableNoData}
      {...tablePageProps}
    />
  );
};

export default withEditTable(TablePage);
