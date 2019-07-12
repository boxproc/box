import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import TablePage from 'components/TablePage/TablePage';

import { modalNames } from 'consts';

import ProductsFilter from './ProductsFilter';

import { OpenModal } from 'store/domains';
import { TableCell } from 'types';
import { renderCheckBoxIcon } from 'components/Table/utils';

interface ProductsProps {
  openModal: OpenModal;
}

interface ProductsItemProps {
  id: number | string;
  institution_id: number | string;
  name: string;
  description: string;
  status: string;
  product_type: string;
  scheme: string;
}

type PCell<T extends keyof ProductsItemProps> = TableCell<ProductsItemProps[T]>;

export const Products: React.FC<ProductsProps> = ({
  openModal,
}) => {
  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      return {
        onDoubleClick: () => openModal({
          name: modalNames.GET_PRODUCT_INFO,
          fields: {info: rowInfo.original},
        }),
      };
    },
    [openModal]
  );
  const data = [
    {
      id: 1,
      institution_id: 100,
      name: 'name',
      description: 'description',
      status: 'status',
      product_type: 'product_type',
      scheme: 'scheme',
      locked_flag: 'N',
    },
    {
      id: 2,
      institution_id: 101,
      name: 'name 2',
      description: 'description 2',
      status: 'status 2',
      product_type: 'product_type 2',
      scheme: 'scheme 2',
      locked_flag: 'N',
    },
    {
      id: 3,
      institution_id: 102,
      name: 'name 3',
      description: 'description 3',
      status: 'status 3',
      product_type: 'product_type 3',
      scheme: 'scheme 3',
      locked_flag: 'Y',
    },
  ];

  const columns = [
    {
      maxWidth: 80,
      sortable: true,
      filterable: true,
      Header: <Header title="ID" showSortIcons={true} />,
      accessor: 'id',
      Cell: (props: PCell<'id'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 150,
      sortable: true,
      filterable: true,
      Header: <Header title="Institution ID" showSortIcons={true} />,
      accessor: 'institution_id',
      Cell: (props: PCell<'institution_id'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Name" showSortIcons={true} />,
      accessor: 'name',
      Cell: (props: PCell<'name'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Description" showSortIcons={true} />,
      accessor: 'description',
      Cell: (props: PCell<'description'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Status" showSortIcons={true} />,
      accessor: 'status',
      Cell: (props: PCell<'status'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Product Type" showSortIcons={true} />,
      accessor: 'product_type',
      Cell: (props: PCell<'product_type'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Scheme" showSortIcons={true} />,
      accessor: 'scheme',
      Cell: (props: PCell<'scheme'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 150,
      sortable: true,
      Header: <Header title="Locked" showSortIcons={true} />,
      accessor: 'locked_flag',
      Cell: renderCheckBoxIcon(() => console.log('---')),
    },
  ];

  return (
    <React.Fragment>
      <TablePage
        title="Products"
        data={data}
        columns={columns}
        addNewModalName={modalNames.ADD_PRODUCT}
        openModal={openModal}
        getTrGroupProps={handleOnClickRow}
        FilterForm={
          <ProductsFilter/>
        }
      />
    </React.Fragment >
  );
};

export default withSpinner({
  isFixed: true,
})(Products);
