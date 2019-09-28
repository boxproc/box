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
  newModalName?: string;
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
    newModalName,
    location,
    ...tablePageProps
  } = props;

  const handleOpenModal = React.useCallback(
    () => openModal({
      name: newModalName,
    }),
    [openModal, newModalName]
  );

  const [isFilter, setIsFilter] = React.useState(true);
  const storedFilter = cookiesUtil.get(window.location.pathname);

  const handleSetIsFilter = () => setIsFilter(!isFilter);

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
            text={isFilter ? 'Hide Filter' : 'Show Filter'}
            iconName={iconNamesConst.FILTER}
            onClick={handleSetIsFilter}
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
      {newModalName && (
        <Box mb="7px">
          <Button
            text="Add New"
            iconName={iconNamesConst.PLUS}
            onClick={handleOpenModal}
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
