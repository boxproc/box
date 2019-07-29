import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage/TablePage';

import { cookiesExpires, cookiesNames, modalNames, yesNoTypes } from 'consts';

import {
  ProductsFilterForm,
  tableColumns,
} from 'containers/ProductDesigner/Products/ProductComponents';

import {
  HandleFilterProducts,
  HandleGetProduct,
  HandleGetProducts,
  OpenModal,
  ProductFilterParams,
  ProductItem,
} from 'store/domains';

import { SelectValues } from 'types';

import { cookiesUtil } from 'utils';

interface ProductsProps {
  openModal: OpenModal;
  productItems: Array<ProductItem>;
  getProduct: HandleGetProduct;
  getProducts: HandleGetProducts;
  filterProducts: HandleFilterProducts;
  institutionsOptions: Array<SelectValues>;
  filterProductParams: ProductFilterParams;
}

export const Products: React.FC<ProductsProps> = ({
  openModal,
  getProduct,
  getProducts,
  productItems,
  institutionsOptions,
  filterProducts,
  filterProductParams,
}) => {
  React.useEffect(
    () => {
      getProducts();
    },
    [getProducts]
  );

  React.useEffect(
    () => {
      if (filterProductParams) {
        cookiesUtil.set(
          cookiesNames.PRODUCTS_FILTER,
          JSON.stringify(filterProductParams), {
            expires: cookiesExpires.WEEK,
          }
        );
      }
    },
    [filterProductParams]
  );

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      if (rowInfo.original.lockedFlag === yesNoTypes.YES) {
        return null;
      }
      return {
        onDoubleClick: () => {
          getProduct(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_PRODUCT,
            payload: { id: rowInfo.original.id },
          });
        },
      };
    },
    [openModal, getProduct]
  );

  const productParams = cookiesUtil.get(cookiesNames.PRODUCTS_FILTER);
  const initialFilterValues = productParams && JSON.parse(productParams);

  return (
    <TablePage
      title="Products"
      data={productItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_PRODUCT}
      openModal={openModal}
      getTrGroupProps={handleOnClickRow}
      hint="Double Click on Row to Edit Unlocked Product"
      FilterForm={
        <ProductsFilterForm
          filterProducts={filterProducts}
          institutionsOptions={institutionsOptions}
          initialValues={initialFilterValues}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Products);
