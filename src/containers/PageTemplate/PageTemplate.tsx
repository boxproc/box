import React, { ReactChild } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

import { Box, Flex } from '@rebass/grid';

import { Button, CountDownTimer, Dropdown, DropdownOption, ExternalLink, T2 } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { basePath, iconNamesConst } from 'consts';

import EditableTable from './EditableTable';
import Filter from './Filter';

import {
  ResetUtils,
  SetActivePagePermission,
  SetIsOpenFilter,
  StopAutoRefresh,
  UiItemPrepared,
} from 'store/domains';

import { ContextMenuItemProps } from 'types';
import { cookiesUtil, downloadUtil, storageUtil } from 'utils';

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
  uiItems: Array<UiItemPrepared>;
  setActivePagePermission: SetActivePagePermission;
  isReadOnly: boolean;
  isLoading: boolean;
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

  const helpLink = React.useMemo(
    () => currentUiItem.helpPageURL,
    [currentUiItem]
  );

  const fileName = React.useMemo(
    () => title.split(' ').join('_').toLowerCase(),
    [title]
  );

  const isData = React.useMemo(
    () => data.length,
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

  const handleOpenModal = React.useCallback(
    () => openModal({ name: newModalName }),
    [openModal, newModalName]
  );

  return (
    <React.Fragment>
      <Flex alignItems="baseline">
        <Box mr="10px">
          <ExternalLink
            text="HELP"
            link={helpLink}
            grayStyle={true}
          />
        </Box>
        <T2>{title}</T2>
      </Flex>
      {FilterForm && (
        <Box mb="5px">
          <Button
            text={filterButtonText}
            iconName={iconNamesConst.FILTER}
            onClick={() => setIsOpenFilter(!isOpenFilter)}
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
      <Flex alignItems="center">
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
              onClick={() => setIsFilterable(!isFilterable)}
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
                  textTransformNone={true}
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
