import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { Box } from '@rebass/grid';
import styled from 'theme';

import { T2 } from 'components/Text';
import { UncheckedBoxIcon } from 'components/Icon';

const Wrapper = styled(Box)`
  padding-top: 30px
`;

export const SystemProperties = () => {
  const data = [
    {
      propertyName: 'property name 1',
      currentValue: 'current value 1',
      previousValue: 'previous value 1',
      lastDatetime: '05.07.2019',
      lockedFlag: true,
    },
    {
      propertyName: 'property name 2',
      currentValue: 'current value 2',
      previousValue: 'previous value 2',
      lastDatetime: '05.07.2019',
      lockedFlag: true,
    },
    {
      propertyName: 'property name 3',
      currentValue: 'current value 3',
      previousValue: 'previous value 3',
      lastDatetime: '05.07.2019',
      lockedFlag: true,
    },
    {
      propertyName: 'property name 4',
      currentValue: 'current value 4',
      previousValue: 'previous value 4',
      lastDatetime: '05.07.2019',
      lockedFlag: true,
    },
  ];
  const renderEditable = (cellInfo: any) => {
    return (
      <div
        style={{ backgroundColor: '#fafafa' }}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={e => {
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
        }}
        dangerouslySetInnerHTML={{
          __html: data[cellInfo.index][cellInfo.column.id],
        }}
      />
    );
  };
  return (
    <Wrapper>
      <T2>System Properties</T2>
      <ReactTable
        data={data}
        columns={[
          {
            Header: 'Property Name',
            accessor: 'propertyName',
          },
          {
            Header: 'Current Value',
            accessor: 'currentValue',
            Cell: renderEditable,
          },
          {
            Header: 'Previous Value',
            accessor: 'previousValue',
          },
          {
            Header: 'Last Datetime',
            accessor: 'lastDatetime',
          },
          {
            Header: 'Locked Flag',
            accessor: 'lockedFlag',
            Cell: () => <UncheckedBoxIcon/>,
          },
        ]}
        showPageSizeOptions={false}
        className="-highlight"
      />
    </Wrapper>
  );
};

export const HomePage = () => (
  <Wrapper>Welcome!</Wrapper>
);

export const Customers = () => (
  <Wrapper>Customers</Wrapper>
);

export const Accounts = () => (
  <Wrapper>Accounts</Wrapper>
);

export const Countries = () => (
  <Wrapper>Countries</Wrapper>
);

export const Currencies = () => (
  <Wrapper>Currencies</Wrapper>
);
