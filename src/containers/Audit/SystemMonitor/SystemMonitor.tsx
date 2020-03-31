import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Box, Flex } from '@rebass/grid';

import { CountDownTimer, Table, withSpinner } from 'components';

import {
  basePath,
  cookiesExpiresConst,
  systemMonitorTablesConst,
  uiItemsConst,
  yesNoConst,
} from 'consts';

import {
  Collapse,
  Header,
  RefreshCheckbox,
  schedulerTableColumns,
  SysMonitorBox,
  tableColumns,
  transactionsTableColumns,
} from './components';

import PageTitle from 'containers/PageTemplate/PageTitle';

import {
  HandleGetLogData,
  HandleGetSysMonitorData,
  ISysMonitorCounts,
  ISysMonitorItem,
  ISysMonitorScheduler,
  ISysMonitorTransaction,
  ResetSysMonitor,
} from 'store';
import { cookiesUtil } from 'utils';

interface ISystemMonitor {
  interfacesData: ImmutableArray<ISysMonitorItem>;
  endpointsData: ImmutableArray<ISysMonitorItem>;
  schedulerData: ImmutableArray<ISysMonitorScheduler>;
  lastTransactionsData: ImmutableArray<ISysMonitorTransaction>;
  getLogData: HandleGetLogData;
  getSysMonitorData: HandleGetSysMonitorData;
  isLoadingInterfaces: boolean;
  isLoadingEndpoints: boolean;
  isLoadingScheduler: boolean;
  isLoadingLastTransactions: boolean;
  interfacesCounts: ISysMonitorCounts;
  endpointsCounts: ISysMonitorCounts;
  schedulerCounts: ISysMonitorCounts;
  resetSysMonitor: ResetSysMonitor;
}

interface ISysMonitorBlock {
  id: number;
  name: string;
  title: string;
  isLoading: boolean;
  tableData: Array<object>;
  columns: Array<object>;
  counts?: ISysMonitorCounts;
}

const SystemMonitor: React.FC<ISystemMonitor> = ({
  getSysMonitorData,
  resetSysMonitor,
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
  getLogData,
}) => {
  const [refreshingTables, setRefreshingTables] = React.useState([]);
  const [isCounter, setIsCounter] = React.useState(false);

  const location = `${basePath}${uiItemsConst.SYSTEM_MONITOR}`;

  // get data for each table and reset it on unmount
  React.useEffect(
    () => {
      getSysMonitorData();
      return () => resetSysMonitor();
    },
    [getSysMonitorData, resetSysMonitor]
  );

  // get table names which have to be refreshed from cookies and set to state
  React.useEffect(
    () => {
      const storedNames = [];

      for (const table in systemMonitorTablesConst) {
        if (cookiesUtil.get(`${location}/${systemMonitorTablesConst[table]}`)) {
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
          getSysMonitorData(refreshingTables);
          refreshCounter();
        },
        60000
      );
      return () => clearInterval(timer);
    },
    [getSysMonitorData, isCounter, refreshingTables]
  );

  const handleSetRefreshingTables = React.useCallback(
    (tableName: string) => {
      const hasTableName = refreshingTables.find(name => name === tableName);

      if (!hasTableName) {
        getSysMonitorData([tableName]); // update current table
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

      const storedTableName = `${location}/${tableName}`;

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
    [refreshingTables, getSysMonitorData, location]
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
        <PageTitle
          title="System Monitor"
          pageId={uiItemsConst.SYSTEM_MONITOR}
        />
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
              {el.map((block: Partial<ISysMonitorBlock>) => (
                <SysMonitorBox
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
                        value={!!cookiesUtil.get(`${location}/${block.name}`)}
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
                </SysMonitorBox>
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
})(SystemMonitor);
