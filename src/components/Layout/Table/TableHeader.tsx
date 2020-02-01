import React from 'react';

import { TableItemWrapper } from './TableItemWrapper';

interface TableHeaderProps {
  title: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ title }) => {
  return (
    <TableItemWrapper>
      <div className="title">{title}</div>
    </TableItemWrapper>
  );
};
