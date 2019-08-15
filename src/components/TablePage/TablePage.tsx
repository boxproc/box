import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Hint from 'components/Hint';
import { ExternalLink } from 'components/links';
import { Table, TableNoData } from 'components/Table';
import { T2 } from 'components/Text';

import TableFilterContainer from './TableFilterContainer';

import { OpenModal } from 'store/domains';

import { stringsUtil } from 'utils';

interface TablePageProps extends RouteComponentProps {
  title: string;
  data: Array<object>;
  columns: Array<object>;
  FilterForm?: ReactChild;
  getTrGroupProps?: any;
  hint?: string;
  openModal?: OpenModal;
  addNewModalName?: string;
}

export const TablePage: React.FC<TablePageProps> = ({
  title,
  data,
  columns,
  addNewModalName,
  openModal,
  FilterForm,
  getTrGroupProps,
  hint,
  location,
}) => {
  const [isFilter, setIsFilter] = React.useState(true);

  return (
    <React.Fragment>
      <T2>{title}</T2>
      {FilterForm && (
        <Box mb="7px">
          <Button
            text={(isFilter ? 'Hide' : 'Show') + ' Filters'}
            iconName="filter"
            onClick={() => setIsFilter(!isFilter)}
          />
        </Box>
      )}
      {FilterForm && isFilter &&
        <TableFilterContainer>
          {FilterForm}
        </TableFilterContainer>
      }
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Flex
            alignItems="center"
            justifyContent="space-between"
          >
            {addNewModalName && (
              <Box mb="7px">
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
              <Box mb="10px" ml="7px">
                <Hint text={hint} />
              </Box>
            )}
          </Flex>
        </Box>
        <Box mb="10px">
          <ExternalLink
            text="HELP"
            link={stringsUtil.getCurrentBPSUrl(location.pathname)}
            grayStyle={true}
          />
        </Box>
      </Flex>
      <Table
        data={data}
        columns={columns}
        getTrGroupProps={getTrGroupProps}
        NoDataComponent={TableNoData}
      />
    </React.Fragment >
  );
};

export default withRouter(TablePage);
