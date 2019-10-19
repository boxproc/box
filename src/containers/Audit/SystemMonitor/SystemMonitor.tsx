import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { CountDownTimer, ExternalLink, T2, Table } from 'components';

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

interface SystemMonitorProps {
  getSystemMonitorData: HandleGetSystemMonitorData;
  resetSystemMonitor: ResetSystemMonitor;
  interfacesData: Array<SystemMonitorItem>;
  endpointsData: Array<SystemMonitorItem>;
  schedulerData: Array<SystemMonitorSchedulerItem>;
  lastTransactionData: Array<SystemMonitorTransaction>;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isLoadingScheduler: boolean;
  isLoadingLastTransaction: boolean;
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

const refreshInterval = {
  inSeconds: 60,
  inMilliseconds: 60000,
};

const SystemMonitor: React.FC<SystemMonitorProps> = ({
  getSystemMonitorData,
  resetSystemMonitor,
  interfacesData,
  endpointsData,
  schedulerData,
  lastTransactionData,
  isLoadingInterfaces,
  isLoadingEndpoints,
  isLoadingScheduler,
  isLoadingLastTransaction,
  interfacesCounts,
  endpointsCounts,
  schedulerCounts,
}) => {
  const [refreshedTables, setRefreshedTables] = React.useState([]);
  const [isCounter, setIsCounter] = React.useState(false);

  const refreshCounter = () => {
    setIsCounter(false);
    setTimeout(() => setIsCounter(true), 50);
  };

  const handleSetRefreshedTables = React.useCallback(
    (tableName: string) => {
      const hasTableName = refreshedTables.find(name => name === tableName);

      if (!hasTableName) {
        getSystemMonitorData([tableName]); // update current table
        setRefreshedTables([...refreshedTables, tableName]);
        refreshCounter();
      } else {
        setRefreshedTables(refreshedTables.filter(name => name !== tableName));
        if (refreshedTables.length <= 1) {
          setIsCounter(false);
        } else {
          refreshCounter();
        }
      }
    },
    [refreshedTables, getSystemMonitorData]
  );

  React.useEffect(
    () => {
      getSystemMonitorData();
    },
    [getSystemMonitorData]
  );

  React.useEffect(
    () => {
      const timer = isCounter && setInterval(
        () => {
          getSystemMonitorData(refreshedTables);
          refreshCounter();
        },
        refreshInterval.inMilliseconds
      );
      return () => clearInterval(timer);
    },
    [getSystemMonitorData, isCounter, refreshedTables]
  );

  React.useEffect(
    () => {
      return () => resetSystemMonitor();
    },
    [resetSystemMonitor]
  );

  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);
  const updateWindowHeight = () => setScreenHeight(window.innerHeight);

  React.useEffect(
    () => {
      window.addEventListener('resize', updateWindowHeight);
      return () => window.removeEventListener('resize', updateWindowHeight);
    }
  );

  const pagesCount = React.useMemo(
    () => screenHeight < 750 ? 3
      : screenHeight < 850 ? 5
        : screenHeight < 950 ? 6 : 8,
    [screenHeight]
  );

  const systemMonitorBlocks = React.useMemo(
    () => [
      [
        {
          id: 1,
          name: 'interfaces',
          title: 'Interfaces',
          counts: interfacesCounts,
          isLoading: isLoadingInterfaces,
          tableData: interfacesData,
          columns: tableColumns,
        },
        {
          id: 2,
          name: 'lastTransactions',
          title: 'Last Transactions',
          isLoading: isLoadingLastTransaction,
          tableData: lastTransactionData,
          columns: transactionsTableColumns,
        },
      ],
      [
        {
          id: 3,
          name: 'endpoints',
          title: 'Endpoints',
          counts: endpointsCounts,
          isLoading: isLoadingEndpoints,
          tableData: endpointsData,
          columns: tableColumns,
        },
        {
          id: 4,
          name: 'schedulerJobs',
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
      isLoadingLastTransaction,
      isLoadingScheduler,
      lastTransactionData,
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
            link=""
            grayStyle={true}
          />
        </Box>
        <T2>System Monitor</T2>
        <Box mb="12px" ml="12px">
          {isCounter && (<CountDownTimer seconds={refreshInterval.inSeconds} />)}
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
                        onClick={() => handleSetRefreshedTables(block.name)}
                      />
                    )}
                  >
                    <Table
                      data={block.tableData}
                      columns={block.columns}
                      pageSize={pagesCount}
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

export default SystemMonitor;
