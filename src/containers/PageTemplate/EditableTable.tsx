import React from 'react';

import { Table } from 'components';

import { withEditTable, WithEditTableProps } from './withEditTable';

interface PageTemplateProps extends WithEditTableProps {
  data: Array<object>;
  columns: Array<object>;
}

export const PageTemplate: React.FC<PageTemplateProps> = props => {
  const {
    data,
    columns,
    onRowClick,
    activeTableRowIndex,
    ...pageTemplateProps
  } = props;

  return (
    <Table
      data={data}
      columns={columns}
      activeRowIndex={activeTableRowIndex}
      getTrGroupProps={onRowClick}
      {...pageTemplateProps}
    />
  );
};

export default withEditTable(PageTemplate);
