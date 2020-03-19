import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { CountDownTimer, ExternalLink, T2, Table, withSpinner } from 'components';

import {
  basePath,
  cookiesExpiresConst,
  systemMonitorTablesConst,
  yesNoConst,
} from 'consts';

import {
  Collapse,
  Header,
  RefreshCheckbox,
  schedulerTableColumns,
  SystemMonitorBox,
  tableColumns,
  transactionsTableColumns,
} from './components';

import {
  HandleGetLogData,
  HandleGetSystemMonitorData,
  ResetSystemMonitor,
  SystemMonitorCounts,
  SystemMonitorItem,
  SystemMonitorSchedulerItem,
  SystemMonitorTransaction,
  UiItemPrepared,
} from 'store';
import { cookiesUtil } from 'utils';

interface SystemMonitorProps extends RouteComponentProps {
  interfacesData: ImmutableArray<SystemMonitorItem>;
  endpointsData: ImmutableArray<SystemMonitorItem>;
  schedulerData: ImmutableArray<SystemMonitorSchedulerItem>;
  lastTransactionsData: ImmutableArray<SystemMonitorTransaction>;
  getLogData: HandleGetLogData;
  getSystemMonitorData: HandleGetSystemMonitorData;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isLoadingScheduler: boolean;
  isLoadingLastTransactions: boolean;
  interfacesCounts: SystemMonitorCounts;
  endpointsCounts: SystemMonitorCounts;
  schedulerCounts: SystemMonitorCounts;
  resetSystemMonitor: ResetSystemMonitor;
  uiItems: Array<UiItemPrepared>;
}

interface SystemMonitorBlockProps {
  id: number;
  name: string;
  title: string;
  isLoading: boolean;
  tableData: Array<object>;
  columns: Array<object>;
  counts?: SystemMonitorCounts;
}

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  getSystemMonitorData,
  resetSystemMonitor,
  interfacesData,
  endpointsData,
  schedulerData,
  lastTransactionsData,
  isLoadingInterfaces,
  isLoadingEndpoints,
  isLoadingScheduler,
  isLoadingLastTransactions,
  interfacesCounts,
  endpointsCounts,
  schedulerCounts,
  location,
  getLogData,
  uiItems,
}) => {
  const [refreshingTables, setRefreshingTables] = React.useState([]);
  const [isCounter, setIsCounter] = React.useState(false);

  // get data for each table and reset it on unmount
  React.useEffect(
    () => {
      getSystemMonitorData();
      return () => resetSystemMonitor();
    },
    [getSystemMonitorData, resetSystemMonitor]
  );

  // get table names which have to be refreshed from cookies and set to state
  React.useEffect(
    () => {
      const storedNames = [];

      for (const table in systemMonitorTablesConst) {
        if (cookiesUtil.get(`${location.pathname}/${systemMonitorTablesConst[table]}`)) {
          storedNames.push(systemMonitorTablesConst[table]);
        }
      }

      setRefreshingTables(storedNames);

      if (storedNames.length > 0) {
        refreshCounter();
      }
    },
    [location]
  );

  const refreshCounter = () => {
    setIsCounter(false);
    setTimeout(() => setIsCounter(true), 50);
  };

  // refresh each table which is in refreshingTables state
  React.useEffect(
    () => {
      const timer = isCounter && setInterval(
        () => {
          getSystemMonitorData(refreshingTables);
          refreshCounter();
        },
        60000
      );
      return () => clearInterval(timer);
    },
    [getSystemMonitorData, isCounter, refreshingTables]
  );

  const handleSetRefreshingTables = React.useCallback(
    (tableName: string) => {
      const hasTableName = refreshingTables.find(name => name === tableName);

      if (!hasTableName) {
        getSystemMonitorData([tableName]); // update current table
        setRefreshingTables([...refreshingTables, tableName]);
        refreshCounter();
      } else {
        setRefreshingTables(refreshingTables.filter(name => name !== tableName));

        if (refreshingTables.length <= 1) {
          setIsCounter(false);
        } else {
          refreshCounter();
        }
      }

      const storedTableName = `${location.pathname}/${tableName}`;

      if (cookiesUtil.get(storedTableName)) {
        cookiesUtil.remove(storedTableName);
      } else {
        cookiesUtil.set(
          storedTableName,
          JSON.stringify(yesNoConst.YES),
          { expires: cookiesExpiresConst.MONTH }
        );
      }
    },
    [refreshingTables, getSystemMonitorData, location]
  );

  const helpLink = React.useMemo(
    () => {
      const currentUiItem = uiItems
        .find(item => `${basePath}${item.id}` === `${location.pathname}`);

      if (!currentUiItem) {
        return null;
      }

      return currentUiItem.helpPageURL;
    },
    [location, uiItems]
  );

  const systemMonitorBlocks = React.useMemo(
    () => [
      [
        {
          id: 1,
          name: systemMonitorTablesConst.INTERFACES,
          title: 'Interfaces',
          counts: interfacesCounts,
          isLoading: isLoadingInterfaces,
          tableData: interfacesData,
          columns: tableColumns(getLogData, systemMonitorTablesConst.INTERFACES),
        },
        {
          id: 2,
          name: systemMonitorTablesConst.LAST_TRANSACTIONS,
          title: 'Last Transactions',
          isLoading: isLoadingLastTransactions,
          tableData: lastTransactionsData,
          columns: transactionsTableColumns,
        },
      ],
      [
        {
          id: 3,
          name: systemMonitorTablesConst.ENDPOINTS,
          title: 'Endpoints',
          counts: endpointsCounts,
          isLoading: isLoadingEndpoints,
          tableData: endpointsData,
          columns: tableColumns(getLogData, systemMonitorTablesConst.ENDPOINTS),
        },
        {
          id: 4,
          name: systemMonitorTablesConst.SCHEDULER_JOBS,
          title: 'Scheduler Jobs',
          counts: schedulerCounts,
          isLoading: isLoadingScheduler,
          tableData: schedulerData,
          columns: schedulerTableColumns(getLogData, systemMonitorTablesConst.SCHEDULER_JOBS),
        },
      ],
    ],
    [
      endpointsCounts,
      endpointsData,
      interfacesCounts,
      interfacesData,
      isLoadingEndpoints,
      isLoadingInterfaces,
      isLoadingLastTransactions,
      isLoadingScheduler,
      lastTransactionsData,
      schedulerCounts,
      schedulerData,
      getLogData,
    ]
  );

  return (
    <React.Fragment>
      <Flex alignItems="center">
        <Box mb="5px" mr="15px">
          <ExternalLink
            text="HELP"
            link={helpLink}
            grayStyle={true}
          />
        </Box>
        <T2>System Monitor</T2>
        <Box mb="5px" ml="12px">
          {isCounter && (
            <CountDownTimer seconds={60} />
          )}
        </Box>
      </Flex>
      <Box mx="-20px">
        <Flex flexWrap="wrap" alignItems="flex-start">
          {systemMonitorBlocks.map((el: Array<object>, index) => (
            <Box
              key={index}
              width={[1 / 2]}
              px="20px"
            >
              {el.map((block: Partial<SystemMonitorBlockProps>) => (
                <SystemMonitorBox
                  key={block.id}
                  isLoading={block.isLoading}
                >
                  <Collapse
                    header={(
                      <Header
                        title={block.title}
                        counts={block.counts}
                      />
                    )}
                    additionalTool={(
                      <RefreshCheckbox
                        onClick={() => handleSetRefreshingTables(block.name)}
                        value={!!cookiesUtil.get(`${location.pathname}/${block.name}`)}
                      />
                    )}
                  >
                    <Table
                      data={block.tableData || []}
                      columns={block.columns}
                      pageSize={4}
                      isSmaller={true}
                    />
                  </Collapse>
                </SystemMonitorBox>
              ))}
            </Box>
          ))}
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default withSpinner({
  isFixed: true,
})(withRouter(SystemMonitor));
