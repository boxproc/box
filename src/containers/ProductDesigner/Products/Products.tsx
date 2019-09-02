import React from 'react';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage';

import { cookiesExpires, cookiesNames, modalNames } from 'consts';

import { tableColumns } from 'containers/ProductDesigner/Products/components';
import { ProductsFilterForm } from 'containers/ProductDesigner/Products/forms';

import {
  HandleFilterProducts,
  HandleGetProductId,
  HandleGetProducts,
  ProductFilterParams,
  ProductItem,
} from 'store/domains';

import { SelectValues } from 'types';

import { cookiesUtil } from 'utils';

interface ProductsProps {
  productItems: Array<ProductItem>;
  getProductId: HandleGetProductId;
  getProducts: HandleGetProducts;
  filterProducts: HandleFilterProducts;
  institutionsOptions: Array<SelectValues>;
  filterProductParams: ProductFilterParams;
  isFilterFormDirty: boolean;
}

export const Products: React.FC<ProductsProps> = ({
  getProductId,
  getProducts,
  productItems,
  institutionsOptions,
  filterProducts,
  filterProductParams,
  isFilterFormDirty,
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
      editModalName={modalNames.EDIT_PRODUCT}
      setCurrentIdAction={getProductId}
      FilterForm={
        <ProductsFilterForm
          filterProducts={filterProducts}
          institutionsOptions={institutionsOptions}
          initialValues={initialFilterValues}
          isDirty={isFilterFormDirty}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Products);
