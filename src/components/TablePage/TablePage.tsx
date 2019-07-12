import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import { Table, TableNoData } from 'components/Table';
import { T2 } from 'components/Text';

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
  getTrGroupProps?: any;
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
  getTrGroupProps,
}) => {

  const [isFilter, setIsFilter] = React.useState(false);

  return (
    <React.Fragment>
      <T2>{title}</T2>
      <Flex alignItems="center">
        <Box mb="7px">
          <Button
            text={(isFilter ? 'Hide' : 'Show') + ' Filters'}
            transparent={true}
            icon="&#9776;"
            onClick={() => setIsFilter(!isFilter)}
          />
        </Box>
      </Flex>
      {isFilter &&
        <TableFilterContainer>
          {FilterForm}
        </TableFilterContainer>
      }
      <Flex alignItems="center">
        <Box mb="7px">
          <Button
            text="Add New"
            icon="&#43;"
            transparent={true}
            onClick={() => openModal({
              name: addNewModalName,
            })}
          />
        </Box>
      </Flex>
      <Table
        data={data}
        columns={columns}
        getTrGroupProps={getTrGroupProps}
        NoDataComponent={NoDataComponent}
      />
    </React.Fragment >
  );
};

export default TablePage;
