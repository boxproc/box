import React from 'react';

import { TableItemWrapper } from './TableItemWrapper';

interface ITableHeader {
  title: string;
}

export const TableHeader: React.FC<ITableHeader> = ({ title }) => {
  return (
    <TableItemWrapper>
      <div className="title">{title}</div>
    </TableItemWrapper>
  );
};
