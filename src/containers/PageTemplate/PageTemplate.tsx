import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button, CountDownTimer, Dropdown, DropdownOption } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { basePath, iconNamesConst } from 'consts';

import EditableTable from './EditableTable';
import Filter from './Filter';
import PageTitle from './PageTitle';

import {
  IUiItem,
  TResetUtils,
  TSetActivePagePermission,
  TSetIsOpenFilter,
  TStopAutoRefresh,
} from 'store';

import { IContextMenuItem } from 'types';
import { cookiesUtil, downloadUtil, storageUtil } from 'utils';

interface PageTemplateProps extends RouteComponentProps, IWithModal {
  AdditionalButton?: ReactChild;
  columns: Array<object>;
  contextMenuItems?: Array<IContextMenuItem>;
  data: Array<object>;
  filterAction?: () => void;
  filterData: object;
  FilterForm?: ReactChild;
  initialFilterValues?: object;
  isAutoRefresh?: boolean;
  isDownloadButton?: boolean;
  isLoading: boolean;
  isOpenFilter: boolean;
  isReadOnly: boolean;
  isSearchable?: boolean;
  newModalName?: string;
  resetUtils: TResetUtils;
  setActivePagePermission: TSetActivePagePermission;
  setIsOpenFilter: TSetIsOpenFilter;
  stopAutoRefresh: TStopAutoRefresh;
  title: string;
  uiItems: Array<IUiItem>;
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
    uiItems,
    isReadOnly,
    isLoading,
    setActivePagePermission,
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

  const currentUiItem = React.useMemo(
    () => uiItems.find(item => `${basePath}${item.id}` === `${location.pathname}`),
    [location, uiItems]
  );

  React.useEffect(
    () => {
      const permission = currentUiItem.permission;

      setActivePagePermission(permission);
    },
    [setActivePagePermission, uiItems, location, currentUiItem]
  );

  React.useEffect(
    () => {
      return () => resetUtils();
    },
    [resetUtils]
  );

  const filterButtonText = React.useMemo(
    () => isOpenFilter ? 'Hide Filter' : 'Show Filter',
    [isOpenFilter]
  );

  const fileName = React.useMemo(
    () => title.split(' ').join('_').toLowerCase(),
    [title]
  );

  const isData = React.useMemo(
    () => data && data.length,
    [data]
  );

  const filterInitialValues = React.useMemo(
    () => {
      const userData = storageUtil.getUserData();
      const username = userData && userData.username;

      const storedFilter = cookiesUtil.get(`${location.pathname}-${username}`);

      return {
        ...initialFilterValues,
        ...storedFilter && JSON.parse(storedFilter),
      };
    },
    [initialFilterValues, location]
  );

  const isSearchableButton = React.useMemo(
    () => isSearchable && data && data.length > 10,
    [isSearchable, data]
  );

  const handleSetIsFilterable = React.useCallback(
    () => setIsFilterable(!isFilterable),
    [isFilterable]
  );

  const handleSetIsOpenFilter = React.useCallback(
    () => setIsOpenFilter(!isOpenFilter),
    [setIsOpenFilter, isOpenFilter]
  );

  const handleOpenModal = React.useCallback(
    () => openModal({ name: newModalName }),
    [openModal, newModalName]
  );

  return (
    <React.Fragment>
      <PageTitle
        title={title}
        pageId={currentUiItem.id}
      />
      {FilterForm && (
        <Box mb="5px">
          <Button
            text={filterButtonText}
            iconName={iconNamesConst.FILTER}
            onClick={handleSetIsOpenFilter}
          />
        </Box>
      )}
      {FilterForm && (
        <Filter
          filterAction={filterAction}
          location={location}
          isHidden={!isOpenFilter}
          initialValues={filterInitialValues}
          isLoading={isLoading}
        >
          {FilterForm}
        </Filter>
      )}
      <Flex alignItems="center" fontSize="0">
        {newModalName && !isReadOnly && (
          <Box mr="20px">
            <Button
              text="Add New"
              iconName={iconNamesConst.PLUS}
              onClick={handleOpenModal}
              disabled={isLoading}
            />
          </Box>
        )}
        {isSearchableButton && (
          <Box mr="20px">
            <Button
              text="Search"
              disabled={!isData || isLoading}
              iconName={iconNamesConst.SEARCH}
              onClick={handleSetIsFilterable}
            />
          </Box>
        )}
        {AdditionalButton && (
          <Box mr="20px">
            {AdditionalButton}
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
                  disabled={isLoading}
                />
              }
            >
              <DropdownOption>
                <Button
                  text=".csv"
                  iconName={iconNamesConst.FILE}
                  onClick={() => downloadUtil.downloadCSV(fileName, data)}
                  classNames={['no-text-transform']}
                  disabled={isLoading}
                />
              </DropdownOption>
            </Dropdown>
          </Box>
        )}
        {isAutoRefresh && (
          <Flex alignItems="flex-end">
            <CountDownTimer seconds={5} />
            <Box ml="4px">
              <Button
                text="Stop Auto Refreshing"
                size="11"
                iconName={iconNamesConst.STOP}
                onClick={stopAutoRefresh}
                disabled={isLoading}
              />
            </Box>
          </Flex>
        )}
      </Flex>
      <Box mt="5px">
        <EditableTable
          data={data}
          columns={columns}
          filterable={isFilterable}
          isLoading={isLoading}
          {...pageTemplateProps}
        />
      </Box>
    </React.Fragment >
  );
};

export default withModal(
  withRouter(PageTemplate)
);
