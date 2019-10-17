import React from 'react';

import { Box, Flex } from '@rebass/grid';

import {
  CountDownTimer,
  ExternalLink,
  SmallText,
  T2,
  T4,
  Table,
} from 'components';

import {
  Collapse,
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
  lastTransactionData,
  isLoadingInterfaces,
  isLoadingEndpoints,
  isLoadingScheduler,
  isLoadingLastTransaction,
  interfacesCounts,
  endpointsCounts,
  schedulerCounts,
}) => {
  const [isCounter, setIsCounter] = React.useState(true);

  React.useEffect(
    () => {
      getSystemMonitorData();
      const timer = setInterval(() => {
        getSystemMonitorData();
        setIsCounter(false);
        setIsCounter(true);
      }, 60000);

      return () => clearInterval(timer);
    },
    [getSystemMonitorData]
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

  const SystemMonitorBlocks = React.useMemo(
    () => [
      [
        {
          id: 1,
          title: 'Interfaces',
          counts: interfacesCounts,
          isLoading: isLoadingInterfaces,
          tableData: interfacesData,
          columns: tableColumns,
        },
        {
          id: 2,
          title: 'Last Transactions',
          isLoading: isLoadingLastTransaction,
          tableData: lastTransactionData,
          columns: transactionsTableColumns,
        },
      ],
      [
        {
          id: 3,
          title: 'Endpoints',
          counts: endpointsCounts,
          isLoading: isLoadingEndpoints,
          tableData: endpointsData,
          columns: tableColumns,
        },
        {
          id: 4,
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
          {isCounter && (
            <CountDownTimer seconds={60} />
          )}
        </Box>
      </Flex>
      <Box mx="-15px">
        <Flex flexWrap="wrap" alignItems="flex-start">
          {SystemMonitorBlocks.map((el: Array<object>, index) => (
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
                    title={(
                      <Flex alignItems="baseline" justifyContent="space-between">
                        <Box mr="10px"><T4>{block.title}</T4></Box>
                        {block.counts && (
                          <SmallText>
                            {block.counts.countActive} active, {block.counts.countFaulty} faulty
                          </SmallText>
                        )}
                      </Flex>
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
              )
              )}
            </Box>
          ))}
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default SystemMonitor;
