import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button, CountDownTimer, ExternalLink, T2 } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst } from 'consts';

import EditableTable from './EditableTable';
import Filter from './Filter';

import { ResetUtils, StopAutoRefresh } from 'store/domains';

import { ContextMenuItem } from 'types';
import { cookiesUtil, dateUtil, stringsUtil } from 'utils';

interface PageTemplateProps extends RouteComponentProps, WithModalProps {
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
  resetUtils: ResetUtils;
  AdditionalButton?: ReactChild;
}

export const PageTemplate: React.FC<PageTemplateProps> = props => {
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
    resetUtils,
    AdditionalButton,
    ...pageTemplateProps
  } = props;
  const [date, setDate] = React.useState({
    dateTimeFrom: null,
    dateTimeTo: null,
    dateFrom: null,
    dateTo: null,
  });

  React.useEffect(
    () => {
      const timer = isAutoRefresh && setInterval(() => filterAction(), 5000);

      return () => clearInterval(timer);
    },
    [isAutoRefresh, filterAction]
  );

  React.useEffect(
    () => {
      setDate({
        dateTimeFrom: dateUtil.yesterdayDateTime(),
        dateTimeTo: dateUtil.todayDateTime(),
        dateFrom: dateUtil.yesterdayDate,
        dateTo: dateUtil.todayDate,
      });

      return () => resetUtils();
    },
    [resetUtils]
  );

  const [isFilter, setIsFilter] = React.useState(true);
  const storedFilter = cookiesUtil.get(location.pathname);

  const handleOpenModal = React.useCallback(
    () => openModal({ name: newModalName }),
    [openModal, newModalName]
  );

  const handleSetIsFilter = React.useCallback(
    () => setIsFilter(!isFilter),
    [isFilter]
  );

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
            dateTimeFrom: date.dateTimeFrom,
            dateTimeTo: date.dateTimeTo,
            dateFrom: date.dateFrom,
            dateTo: date.dateTo,
          }}
          location={location}
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
        {AdditionalButton && (
           <Box mb="7px" ml="20px">
            {AdditionalButton}
           </Box>
        )}
        {isAutoRefresh && (
          <Box mb="7px" ml="25px">
            <Flex alignItems="flex-end">
              <CountDownTimer seconds={5} />
              <Box ml="4px">
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
        {...pageTemplateProps}
      />
    </React.Fragment >
  );
};

export default withModal(
  withRouter(PageTemplate)
);
