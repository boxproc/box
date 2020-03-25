import React from 'react';

import { Table, withSpinner } from 'components';

import { withEditTable, WithEditTableProps } from './withEditTable';

interface PageTemplateProps extends WithEditTableProps {
  data: Array<object>;
  columns: Array<object>;
  isLoading: boolean;
}

export const PageTemplate: React.FC<PageTemplateProps> = props => {
  const { onRowClick, activeTableRowIndex, ...pageTemplateProps } = props;

  return (
    <Table
      getTrGroupProps={onRowClick}
      activeRowIndex={activeTableRowIndex}
      {...pageTemplateProps}
    />
  );
};

export default withEditTable(
  withSpinner()(PageTemplate)
);
