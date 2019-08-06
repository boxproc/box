import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { cookiesExpires, cookiesNames, modalNames, yesNoTypes } from 'consts';

import {
  ProductsFilterForm,
  tableColumns,
} from 'containers/ProductDesigner/Products/productComponents';

import {
  HandleFilterProducts,
  HandleGetProductId,
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
  getProductId: HandleGetProductId;
  getProducts: HandleGetProducts;
  filterProducts: HandleFilterProducts;
  institutionsOptions: Array<SelectValues>;
  filterProductParams: ProductFilterParams;
}

export const Products: React.FC<ProductsProps> = ({
  openModal,
  getProductId,
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
          getProductId(rowInfo.original.id);
          openModal({
            name: modalNames.EDIT_PRODUCT,
          });
        },
      };
    },
    [openModal, getProductId]
  );

  const productParams = cookiesUtil.get(cookiesNames.PRODUCTS_FILTER);
  const productParamsParsed = productParams && JSON.parse(productParams);

  const initialFilterValues = {
    institutionId: institutionsOptions[0],
    ...productParamsParsed,
  };

  return (
    <TablePage
      title="Products"
      data={productItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_PRODUCT}
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
