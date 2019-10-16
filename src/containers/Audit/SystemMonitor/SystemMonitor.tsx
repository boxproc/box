import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';
import styled from 'theme';

import {
  ChevronDownIcon,
  CountDownTimer,
  ExternalLink,
  T2,
  T4,
  Table,
  TableCell,
  TableHeader,
} from 'components';

const CountsWrapper = styled.div`
  margin-bottom: 3px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 12px;
`;

const tableColumns = [
  {
    maxWidth: 80,
    Header: <TableHeader title="Institution ID" />,
    accessor: 'institutionId',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 260,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 140,
    Header: <TableHeader title="Last Message Date&nbsp;/&nbsp;Time" />,
    accessor: 'lastMessageDatetime',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 140,
    Header: <TableHeader title="Last Fault Date&nbsp;/&nbsp;Time" />,
    accessor: 'lastFaultDatetime',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
];

const schedulerTableColumns = [
  {
    maxWidth: 80,
    Header: <TableHeader title="Institution ID" />,
    accessor: 'institutionId',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 260,
    Header: <TableHeader title="Name" />,
    accessor: 'name',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 100,
    Header: <TableHeader title="Status" />,
    accessor: 'status',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
];

const transactionsTableColumns = [
  {
    maxWidth: 100,
    Header: <TableHeader title="Institution ID" />,
    accessor: 'institutionId',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isSmaller={true}
        isNumber={true}
      />
    ),
  },
  {
    maxWidth: 260,
    Header: <TableHeader title="Institution Name" />,
    accessor: 'institutionName',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isSmaller={true}
      />
    ),
  },
  {
    maxWidth: 140,
    Header: <TableHeader title="Transaction Date&nbsp;/&nbsp;Time" />,
    accessor: 'transactionDatetime',
    Cell: (props: any) => (
      <TableCell
        value={props.value}
        isDate={true}
        isSmaller={true}
      />
    ),
  },
];

const interfacesData = [
  {
    name: 'Tutuka card management interface',
    lastMessageDatetime: '15/10/2019 17:27:52',
    lastFaultDatetime: '15/10/2019 17:27:52',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'Tribe card management interface',
    lastMessageDatetime: '15/10/2019 17:27:52',
    lastFaultDatetime: '15/10/2019 17:27:52',
    status: 'Active',
    institutionId: 2,
  },
  {
    name: 'Tutuka card management interface',
    lastMessageDatetime: '15/10/2019 17:27:52',
    lastFaultDatetime: '15/10/2019 17:27:52',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'Tribe card management interface',
    lastMessageDatetime: '15/10/2019 17:27:52',
    lastFaultDatetime: '15/10/2019 17:27:52',
    status: 'Active',
    institutionId: 2,
  },
  {
    name: 'Tutuka card management interface',
    lastMessageDatetime: '15/10/2019 17:27:52',
    lastFaultDatetime: '15/10/2019 17:27:52',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'Tribe card management interface',
    lastMessageDatetime: '15/10/2019 17:27:52',
    lastFaultDatetime: '15/10/2019 17:27:52',
    status: 'Active',
    institutionId: 2,
  },
  {
    name: 'Tutuka card management interface',
    lastMessageDatetime: '15/10/2019 17:27:52',
    lastFaultDatetime: '15/10/2019 17:27:52',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'Tribe card management interface',
    lastMessageDatetime: '15/10/2019 17:27:52',
    lastFaultDatetime: '15/10/2019 17:27:52',
    status: 'Active',
    institutionId: 2,
  },
];

const endpointsData = [
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'BOX API endpoint',
    institutionId: 1,
    status: 'Active',
  },
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'Tribe card transactions endpoint',
    institutionId: 1,
    status: 'Active',
  },
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'Tutuka card transactions endpoint',
    institutionId: 1,
    status: 'Active',
  },
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'BOX API endpoint',
    institutionId: 1,
    status: 'Active',
  },
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'Tribe card transactions endpoint',
    institutionId: 1,
    status: 'Active',
  },
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'Tutuka card transactions endpoint',
    institutionId: 1,
    status: 'Active',
  },
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'BOX API endpoint',
    institutionId: 1,
    status: 'Active',
  },
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'Tribe card transactions endpoint',
    institutionId: 1,
    status: 'Active',
  },
  {
    lastFaultDatetime: '15/10/2019 17:27:51',
    lastMessageDatetime: '15/10/2019 17:27:51',
    name: 'Tutuka card transactions endpoint',
    institutionId: 1,
    status: 'Active',
  },
];

const schedulerData = [
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
  {
    name: 'API test Job 1',
    status: 'Active',
    institutionId: 1,
  },
];

const transactionData = {
  institutionId: 1,
  institutionName: 'BOX Institution',
  transactionDatetime: '2019-10-16 13:49:31',
};

const CollapseIcon = styled(ChevronDownIcon)``;

interface CollapseButtonProps {
  isOpen: boolean;
}

const CollapseButton = styled.div<CollapseButtonProps>`
  cursor: pointer;

  .icon {
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ isOpen }) => isOpen && `
    .icon {
      transform: rotate(180deg);
    }
  `}

  ${({ theme, isOpen }) => !isOpen && `
    border-bottom: 1px solid ${theme.colors.lightGray};

    &:hover {
      border-bottom-color: ${theme.colors.lightAccent};
    }
  `}

  &:hover {
    .icon {
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }
`;

interface CollapseProps {
  title?: ReactChild;
}

const Collapse: React.FC<CollapseProps> = ({
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div>
      <CollapseButton
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
        >
          {title && (
            <React.Fragment>{title}</React.Fragment>
          )}
          <CollapseIcon
            size="24"
            className="icon"
          />
        </Flex>
      </CollapseButton>
      {isOpen && (
        <React.Fragment>{children}</React.Fragment>
      )}
    </div>
  );
};

interface SystemMonitorProps { }

const SystemMonitor: React.FC<SystemMonitorProps> = () => {
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);

  const updateWindowHeight = () => setScreenHeight(window.innerHeight);

  React.useEffect(
    () => {
      window.addEventListener('resize', updateWindowHeight);

      return () => window.removeEventListener('resize', updateWindowHeight);
    }
  );

  const pagesCount = React.useMemo(
    () => screenHeight < 750
      ? 3
      : screenHeight < 850
        ? 5
        : screenHeight < 950
          ? 6
          : 8,
    [screenHeight]
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
        <Box mb="12px" ml="15px">
          <CountDownTimer seconds={60} />
        </Box>
      </Flex>
      <Box mx="-15px">
        <Flex flexWrap="wrap" alignItems="flex-start">
          <Box width={[1 / 2]} px="20px" >
            <Box mb="30px">
              <Collapse
                title={(
                  <Flex alignItems="baseline" justifyContent="space-between">
                    <Box mr="10px"><T4>Interfaces</T4></Box>
                    <CountsWrapper>27 active, 2 faulty</CountsWrapper>
                  </Flex>
                )}
              >
                <Table
                  data={interfacesData}
                  columns={tableColumns}
                  pageSize={pagesCount}
                  isSmaller={true}
                />
              </Collapse>
            </Box>
            <Box mb="30px">
              <Collapse
                title={(
                  <Box mr="10px"><T4>Last Transaction</T4></Box>
                )}
              >
                <Table
                  data={[transactionData]}
                  columns={transactionsTableColumns}
                  isSmaller={true}
                />
              </Collapse>
            </Box>
          </Box>
          <Box width={[1 / 2]} px="20px" >
            <Box mb="30px">
              <Collapse
                title={(
                  <Flex alignItems="baseline" justifyContent="space-between">
                    <Box mr="10px"><T4>Endpoints</T4></Box>
                    <CountsWrapper>27 active, 2 faulty</CountsWrapper>
                  </Flex>
                )}
              >
                <Table
                  data={endpointsData}
                  columns={tableColumns}
                  pageSize={pagesCount}
                  isSmaller={true}
                />
              </Collapse>
            </Box>
            <Box mb="30px">
              <Collapse
                title={(
                  <Flex alignItems="baseline" justifyContent="space-between">
                    <Box mr="10px"><T4>Scheduler Jobs</T4></Box>
                    <CountsWrapper>27 active, 2 faulty</CountsWrapper>
                  </Flex>
                )}
              >
                <Table
                  data={schedulerData}
                  columns={schedulerTableColumns}
                  pageSize={pagesCount}
                  isSmaller={true}
                />
              </Collapse>
            </Box>
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default SystemMonitor;
