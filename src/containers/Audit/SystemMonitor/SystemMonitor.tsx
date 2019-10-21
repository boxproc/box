import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Box, Flex } from '@rebass/grid';

import { CountDownTimer, ExternalLink, T2, Table } from 'components';

import {
  cookiesExpires,
  systemMonitorInterval,
  systemMonitorTables,
  yesNoTypesCodes,
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
  HandleGetSystemMonitorData,
  ResetSystemMonitor,
  SystemMonitorCounts,
  SystemMonitorItem,
  SystemMonitorSchedulerItem,
  SystemMonitorTransaction,
} from 'store/domains';
import { cookiesUtil, stringsUtil } from 'utils';

interface SystemMonitorProps extends RouteComponentProps {
  getSystemMonitorData: HandleGetSystemMonitorData;
  resetSystemMonitor: ResetSystemMonitor;
  interfacesData: Array<SystemMonitorItem>;
  endpointsData: Array<SystemMonitorItem>;
  schedulerData: Array<SystemMonitorSchedulerItem>;
  lastTransactionsData: Array<SystemMonitorTransaction>;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isLoadingScheduler: boolean;
  isLoadingLastTransactions: boolean;
  interfacesCounts: SystemMonitorCounts;
  endpointsCounts: SystemMonitorCounts;
  schedulerCounts: SystemMonitorCounts;
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
}) => {
  const [refreshingTables, setRefreshingTables] = React.useState([]);
  const [isCounter, setIsCounter] = React.useState(false);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

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

      for (const table in systemMonitorTables) {
        if (cookiesUtil.get(`${location.pathname}/${systemMonitorTables[table]}`)) {
          storedNames.push(systemMonitorTables[table]);
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
        systemMonitorInterval.MILLISECONDS
      );
      return () => clearInterval(timer);
    },
    [getSystemMonitorData, isCounter, refreshingTables]
  );

  // update screen height for setting various number of table rows per page
  const updateWindowHeight = () => setScreenHeight(window.innerHeight);

  React.useEffect(
    () => {
      window.addEventListener('resize', updateWindowHeight);
      return () => window.removeEventListener('resize', updateWindowHeight);
    }
  );

  const tablePagesCount = React.useMemo(
    () => screenHeight < 750 ? 3
      : screenHeight < 850 ? 5
        : screenHeight < 950 ? 6 : 8,
    [screenHeight]
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
          JSON.stringify(yesNoTypesCodes.YES),
          { expires: cookiesExpires.MONTH }
        );
      }
    },
    [refreshingTables, getSystemMonitorData, location]
  );

  const systemMonitorBlocks = React.useMemo(
    () => [
      [
        {
          id: 1,
          name: systemMonitorTables.INTERFACES,
          title: 'Interfaces',
          counts: interfacesCounts,
          isLoading: isLoadingInterfaces,
          tableData: interfacesData,
          columns: tableColumns,
        },
        {
          id: 2,
          name: systemMonitorTables.LAST_TRANSACTIONS,
          title: 'Last Transactions',
          isLoading: isLoadingLastTransactions,
          tableData: lastTransactionsData,
          columns: transactionsTableColumns,
        },
      ],
      [
        {
          id: 3,
          name: systemMonitorTables.ENDPOINTS,
          title: 'Endpoints',
          counts: endpointsCounts,
          isLoading: isLoadingEndpoints,
          tableData: endpointsData,
          columns: tableColumns,
        },
        {
          id: 4,
          name: systemMonitorTables.SCHEDULER_JOBS,
          title: 'Scheduler Jobs',
          counts: schedulerCounts,
          isLoading: isLoadingScheduler,
          tableData: schedulerData,
          columns: schedulerTableColumns,
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
    ]
  );

  return (
    <React.Fragment>
      <Flex alignItems="center">
        <Box mb="15px" mr="15px">
          <ExternalLink
            text="HELP"
            link={stringsUtil.getCurrentBPSUrl(location.pathname)}
            grayStyle={true}
          />
        </Box>
        <T2>System Monitor</T2>
        <Box mb="12px" ml="12px">
          {isCounter && (
            <CountDownTimer seconds={systemMonitorInterval.SECONDS} />
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
                      data={block.tableData}
                      columns={block.columns}
                      pageSize={tablePagesCount}
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

export default withRouter(SystemMonitor);
