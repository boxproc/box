import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import { Cell, Header } from 'components/Table';
import { renderCheckBoxIcon } from 'components/Table/utils';
import TablePage from 'components/TablePage/TablePage';

import { modalNames, yesNoTypes } from 'consts';

import ProductsFilter from './ProductsFilter';

import { HandleGetProducts, OpenModal, ProductItem } from 'store/domains';
import { TableCell } from 'types';

interface ProductsProps {
  openModal: OpenModal;
  productItems: Array<Partial<ProductItem>>;
  handleGetProducts: HandleGetProducts;
}

type PCell<T extends keyof ProductItem> = TableCell<ProductItem[T]>;

export const Products: React.FC<ProductsProps> = ({
  openModal,
  handleGetProducts,
  productItems,
}) => {
  React.useEffect(
    () => {
      handleGetProducts();
    },
    [handleGetProducts]
  );

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      if (rowInfo.original.lockedFlag === yesNoTypes.YES) {
        return null;
      }
      return {
        onDoubleClick: () => openModal({
          name: modalNames.EDIT_PRODUCT,
          fields: {values: rowInfo.original},
        }),
      };
    },
    [openModal]
  );

  const columns = [
    {
      maxWidth: 60,
      filterable: true,
      Header: <Header title="ID" />,
      accessor: 'id',
      Cell: (props: PCell<'id'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Institution ID" showSortIcons={true} />,
      accessor: 'institutionId',
      Cell: (props: PCell<'institutionId'>) => (
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
      maxWidth: 130,
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
      maxWidth: 130,
      sortable: true,
      filterable: true,
      Header: <Header title="Product Type" showSortIcons={true} />,
      accessor: 'productType',
      Cell: (props: PCell<'productType'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 130,
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
      maxWidth: 130,
      sortable: true,
      filterable: true,
      Header: <Header title="Currency code" showSortIcons={true} />,
      accessor: 'currencyCode',
      Cell: (props: PCell<'currencyCode'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="History Retention Number of Days" showSortIcons={true} />,
      accessor: 'historyRetentionNumberOfDays',
      Cell: (props: PCell<'historyRetentionNumberOfDays'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      sortable: true,
      filterable: true,
      Header: <Header title="Default Statement Cycle ID" showSortIcons={true} />,
      accessor: 'defaultStatementCycleId',
      Cell: (props: PCell<'defaultStatementCycleId'>) => (
        <Cell
          value={props.value}
        />
      ),
    },
    {
      maxWidth: 95,
      sortable: true,
      Header: <Header title="Locked" showSortIcons={true} />,
      accessor: 'lockedFlag',
      Cell: renderCheckBoxIcon(),
    },
  ];

  return (
    <React.Fragment>
      <TablePage
        title="Products"
        data={productItems}
        columns={columns}
        addNewModalName={modalNames.ADD_PRODUCT}
        openModal={openModal}
        getTrGroupProps={handleOnClickRow}
        hint="Double Click on Row to Edit Unlocked Product"
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
