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
import { cookiesUtil, stringsUtil } from 'utils';

interface PageTemplateProps extends RouteComponentProps, WithModalProps {
  title: string;
  data: Array<object>;
  columns: Array<object>;
  FilterForm?: ReactChild;
  newModalName?: string;
  contextMenuItems?: Array<ContextMenuItem>;
  filterAction?: () => void;
  isAutoRefresh?: boolean;
  stopAutoRefresh: StopAutoRefresh;
  resetUtils: ResetUtils;
  AdditionalButton?: ReactChild;
  initialFilterValues?: object;
  filterData: object;
}

export const PageTemplate: React.FC<PageTemplateProps> = props => {
  const {
    title,
    data,
    columns,
    FilterForm,
    filterAction,
    openModal,
    newModalName,
    location,
    isAutoRefresh,
    stopAutoRefresh,
    resetUtils,
    AdditionalButton,
    initialFilterValues,
    filterData,
    ...pageTemplateProps
  } = props;

  React.useEffect(
    () => {
      const timer = isAutoRefresh && setInterval(() => filterAction(), 5000);

      return () => clearInterval(timer);
    },
    [isAutoRefresh, filterAction]
  );

  React.useEffect(
    () => {
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
          location={location}
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
          <Box>
            <Button
              text="Add New"
              iconName={iconNamesConst.PLUS}
              onClick={handleOpenModal}
            />
          </Box>
        )}
        {AdditionalButton && (
          <Box ml="20px">
            {AdditionalButton}
          </Box>
        )}
        {isAutoRefresh && (
          <Box ml="25px">
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
      <Box mt="7px">
        <EditableTable
          data={data}
          columns={columns}
          {...pageTemplateProps}
        />
      </Box>
    </React.Fragment >
  );
};

export default withModal(
  withRouter(PageTemplate)
);
