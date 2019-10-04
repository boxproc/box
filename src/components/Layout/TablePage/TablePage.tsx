import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button, CountDownTimer, ExternalLink, T2 } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst } from 'consts';

import EditableTable from './EditableTable';
import Filter from './Filter';

import { StopAutoRefresh } from 'store/domains';

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
  isAutoRefresh?: boolean;
  stopAutoRefresh: StopAutoRefresh;
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
    isAutoRefresh,
    stopAutoRefresh,
    ...tablePageProps
  } = props;

  React.useEffect(
    () => {
      const timer = isAutoRefresh && setInterval(() => filterAction(), 5000);

      return () => clearInterval(timer);
    },
    [isAutoRefresh, filterAction]
  );

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
      <Flex alignItems="center">
        {newModalName && (
          <Box mb="7px">
            <Button
              text="Add New"
              iconName={iconNamesConst.PLUS}
              onClick={handleOpenModal}
            />
          </Box>
        )}
        {isAutoRefresh && (
          <Box mb="7px" ml="20px">
            <Flex alignItems="flex-end">
              <CountDownTimer seconds={5} />
              <Box ml="5px">
                <Button
                  text="Stop Auto Refreshing"
                  size="11"
                  iconName={iconNamesConst.STOP}
                  onClick={stopAutoRefresh}
                />
              </Box>
            </Flex>
          </Box>
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
