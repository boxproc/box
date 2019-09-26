import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button, ExternalLink, T2 } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst } from 'consts';

import EditableTable from './EditableTable';
import Filter from './Filter';

import { ContextMenuItem } from 'types';
import { cookiesUtil, stringsUtil } from 'utils';

interface TablePageProps extends RouteComponentProps, WithModalProps {
  title: string;
  data: Array<object>;
  columns: Array<object>;
  FilterForm?: ReactChild;
  addNewModalName?: string;
  contextMenuItems?: Array<ContextMenuItem>;
  filterAction?: () => void;
  initialFilterValues?: object;
}

export const TablePage: React.FC<TablePageProps> = props => {
  const {
    title,
    data,
    columns,
    FilterForm,
    filterAction,
    initialFilterValues,
    openModal,
    addNewModalName,
    location,
    ...tablePageProps
  } = props;

  const [isFilter, setIsFilter] = React.useState(true);
  const storedFilter = cookiesUtil.get(window.location.pathname);

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
        <Filter
          filterAction={filterAction}
          initialValues={{
            ...initialFilterValues,
            ...storedFilter && JSON.parse(storedFilter),
          }}
        >
          {FilterForm}
        </Filter>
      )}
      {addNewModalName && (
        <Box mb="7px">
          <Button
            text="Add New"
            iconName={iconNamesConst.PLUS}
            onClick={() => openModal({
              name: addNewModalName,
            })}
          />
        </Box>
      )}
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
