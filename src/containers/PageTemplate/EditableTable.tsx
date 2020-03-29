import React from 'react';

import { Table, withSpinner } from 'components';

import { IWithEditTable, withEditTable } from './withEditTable';

interface IPageTemplate extends IWithEditTable {
  data: Array<object>;
  columns: Array<object>;
  isLoading: boolean;
}

export const PageTemplate: React.FC<IPageTemplate> = props => {
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
