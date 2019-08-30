import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Hint from 'components/Hint';
import { ExternalLink } from 'components/links';
import { T2 } from 'components/Text';

import EditableTable from './EditableTable';
import TableFilterContainer from './TableFilterContainer';

import { OpenModal } from 'store/domains';

import { ContextMenuItem } from 'types';
import { stringsUtil } from 'utils';

interface TablePageProps extends RouteComponentProps {
  title: string;
  data: Array<object>;
  columns: Array<object>;
  FilterForm?: ReactChild;
  hint?: string;
  openModal?: OpenModal;
  addNewModalName?: string;
  contextMenuItems?: Array<ContextMenuItem>;
}

export const TablePage: React.FC<TablePageProps> = props => {
  const {
    title,
    data,
    columns,
    FilterForm,
    hint,
    openModal,
    addNewModalName,
    location,
    ...tablePageProps
  } = props;

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
      <EditableTable
        data={data}
        columns={columns}
        {...tablePageProps}
      />
    </React.Fragment >
  );
};

export default withRouter(TablePage);
