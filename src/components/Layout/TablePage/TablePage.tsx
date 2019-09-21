import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button, ExternalLink, Hint, T2 } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst } from 'consts';

import EditableTable from './EditableTable';
import TableFilterContainer from './TableFilterContainer';

import { ContextMenuItem } from 'types';
import { stringsUtil } from 'utils';

interface TablePageProps extends RouteComponentProps, WithModalProps {
  title: string;
  data: Array<object>;
  columns: Array<object>;
  FilterForm?: ReactChild;
  hint?: string;
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
      <Flex alignItems="baseline">
        <Box mr="15px">
          <ExternalLink
            text="HELP"
            link={stringsUtil.getCurrentBPSUrl(location.pathname)}
            grayStyle={true}
          />
        </Box>
        <T2>{title}</T2>
      </Flex>
      {FilterForm && (
        <Box mb="7px">
          <Button
            text={(isFilter ? 'Hide' : 'Show') + ' Filter'}
            iconName={iconNamesConst.FILTER}
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
              iconName={iconNamesConst.PLUS}
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

export default withModal(
  withRouter(TablePage)
);
