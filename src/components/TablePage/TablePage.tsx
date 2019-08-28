import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Hint from 'components/Hint';
import { withEditTable, WithEditTableProps } from 'components/HOCs';
import { ExternalLink } from 'components/links';
import { Table, TableNoData } from 'components/Table';
import { T2 } from 'components/Text';

import TableFilterContainer from './TableFilterContainer';

import { OpenModal } from 'store/domains';

import { stringsUtil } from 'utils';

interface TablePageProps extends RouteComponentProps, WithEditTableProps {
  title: string;
  data: Array<object>;
  columns: Array<object>;
  FilterForm?: ReactChild;
  hint?: string;
  openModal?: OpenModal;
  addNewModalName?: string;
  contextMenuItems?: Array<{ name: string }>;
}

export const TablePage: React.FC<TablePageProps> = ({
  title,
  data,
  columns,
  FilterForm,
  hint,
  openModal,
  addNewModalName,
  location,
  onRowClick,
}) => {
  const [isFilter, setIsFilter] = React.useState(true);

  return (
    <React.Fragment>
      <Flex alignItems="center" justifyContent="space-between">
        <T2>{title}</T2>
        <ExternalLink
          text="HELP"
          link={stringsUtil.getCurrentBPSUrl(location.pathname)}
          grayStyle={true}
        />
      </Flex>
      {FilterForm && (
        <Box mb="7px">
          <Button
            text={(isFilter ? 'Hide' : 'Show') + ' Filters'}
            iconName="filter"
            onClick={() => setIsFilter(!isFilter)}
          />
        </Box>
      )}
      {FilterForm && isFilter && (
        <TableFilterContainer>{FilterForm}</TableFilterContainer>
      )}
      <Flex alignItems="center">
        {addNewModalName && (
          <Box mb="7px" mr="7px">
            <Button
              text="Add New"
              iconName="plus"
              onClick={() => openModal({
                name: addNewModalName,
              })}
            />
          </Box>
        )}
        {hint && (
          <Box mb="10px"><Hint text={hint} /></Box>
        )}
      </Flex>
      <Table
        data={data}
        columns={columns}
        getTrGroupProps={onRowClick}
        NoDataComponent={TableNoData}
      />
    </React.Fragment >
  );
};

export default withRouter(withEditTable(TablePage));
