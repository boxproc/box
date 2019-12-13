import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button, CountDownTimer, Dropdown, DropdownOption, ExternalLink, T2 } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { iconNamesConst } from 'consts';

import EditableTable from './EditableTable';
import Filter from './Filter';

import { downloadCSV } from './downloadCSV';

import { ResetUtils, SetIsOpenFilter, StopAutoRefresh } from 'store/domains';

import { ContextMenuItemProps } from 'types';
import { cookiesUtil, stringsUtil } from 'utils';

interface PageTemplateProps extends RouteComponentProps, WithModalProps {
  title: string;
  data: Array<object>;
  columns: Array<object>;
  FilterForm?: ReactChild;
  newModalName?: string;
  contextMenuItems?: Array<ContextMenuItemProps>;
  filterAction?: () => void;
  isAutoRefresh?: boolean;
  stopAutoRefresh: StopAutoRefresh;
  resetUtils: ResetUtils;
  AdditionalButton?: ReactChild;
  initialFilterValues?: object;
  filterData: object;
  setIsOpenFilter: SetIsOpenFilter;
  isOpenFilter: boolean;
  isDownloadButton?: boolean;
  isSearchable?: boolean;
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
    setIsOpenFilter,
    isOpenFilter,
    isDownloadButton,
    isSearchable,
    ...pageTemplateProps
  } = props;

  const [isFilterable, setIsFilterable] = React.useState(false);

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

  const fileName = React.useMemo(
    () => title.split(' ').join('_').toLowerCase(),
    [title]
  );

  const isData = React.useMemo(
    () => data.length,
    [data]
  );

  const storedFilter = cookiesUtil.get(location.pathname);

  const handleOpenModal = React.useCallback(
    () => openModal({ name: newModalName }),
    [openModal, newModalName]
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
            text={isOpenFilter ? 'Hide Filter' : 'Show Filter'}
            iconName={iconNamesConst.FILTER}
            onClick={() => setIsOpenFilter(!isOpenFilter)}
          />
        </Box>
      )}
      {FilterForm && isOpenFilter && (
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
          <Box mr="20px">
            <Button
              text="Add New"
              iconName={iconNamesConst.PLUS}
              onClick={handleOpenModal}
            />
          </Box>
        )}
        {isSearchable && (
          <Box mr="20px">
            <Button
              text="Search"
              disabled={!isData}
              iconName={iconNamesConst.SEARCH}
              onClick={() => setIsFilterable(!isFilterable)}
            />
          </Box>
        )}
        {AdditionalButton && (
          <Box mr="20px">
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
        {isDownloadButton && (
          <Box mr="20px">
            <Dropdown
              selectable={false}
              isDisabled={!isData}
              dropdownListPosition="center"
              ToggleButtonComponent={
                <Button
                  text="Download"
                  iconName={iconNamesConst.DOWNLOAD}
                />
              }
            >
              <DropdownOption>
                <Button
                  text=".csv"
                  iconName={iconNamesConst.FILE_CSV}
                  onClick={() => downloadCSV(fileName, data)}
                  textTransformNone={true}
                />
              </DropdownOption>
            </Dropdown>
          </Box>
        )}
      </Flex>
      <Box mt="7px">
        <EditableTable
          data={data}
          columns={columns}
          filterable={isFilterable}
          {...pageTemplateProps}
        />
      </Box>
    </React.Fragment >
  );
};

export default withModal(
  withRouter(PageTemplate)
);
