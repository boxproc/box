import React, { ReactChild } from 'react';

import { Table, TableNoData } from 'components/Table';
import { T2 } from 'components/Text';

import ActionsButtons from './ActionsButtons';
import TableFilterContainer from './TableFilterContainer';

import {
  OpenModal,
} from 'store/domains';

interface TablePageProps {
  title: string;
  data: any;
  columns: any;
  addNewModalName: string;
  openModal: OpenModal;
  FilterForm: ReactChild;
}

const NoDataComponent = () => (
  <TableNoData
    title="No rows found"
  />
);

export const TablePage: React.FC<TablePageProps> = ({
  title,
  data,
  columns,
  addNewModalName,
  openModal,
  FilterForm,
}) => {

  const [isFilter, setIsFilter] = React.useState(false);

  return (
    <React.Fragment>
      <T2>{title}</T2>
      <ActionsButtons
        isAddNewButton={true}
        isFilterButton={true}
        openModal={openModal}
        addNewModalName={addNewModalName}
        isFilter={isFilter}
        onFilterButtonClick={() => setIsFilter(!isFilter)}
      />
      {isFilter &&
        <TableFilterContainer>
          {FilterForm}
        </TableFilterContainer>
      }
      <Table
        data={data}
        columns={columns}
        NoDataComponent={NoDataComponent}
      />
    </React.Fragment >
  );
};

export default TablePage;
