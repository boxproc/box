import React from 'react';

import { withSpinner } from 'components';

import { iconNamesConst, modalNamesConst, stringsConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { ProductsFilter } from './forms';

import {
  HandleDeleteProduct,
  HandleFilterProducts,
  ProductItem,
  ResetProducts,
} from 'store/domains';

import { SelectValues } from 'types';

interface ProductsProps {
  productItems: Array<ProductItem>;
  institutionsOptions: Array<SelectValues>;
  filterProducts: HandleFilterProducts;
  deleteProduct: HandleDeleteProduct;
  currentProductName: string;
  resetProducts: ResetProducts;
}

export const Products: React.FC<ProductsProps> = ({
  productItems,
  institutionsOptions,
  filterProducts,
  currentProductName,
  deleteProduct,
  resetProducts,
}) => {
  React.useEffect(
    () => {
      return () => resetProducts();
    },
    [resetProducts]
  );

  const contextMenuItems = React.useMemo(
    () => [
      {
        name: stringsConst.DELETE,
        icon: iconNamesConst.DELETE,
        action: deleteProduct,
        withConfirmation: true,
        confirmationText: `Delete product "${currentProductName}?`,
      },
    ],
    [deleteProduct, currentProductName]
  );

  return (
    <PageTemplate
      title="Products"
      data={productItems}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_PRODUCT}
      editModalName={modalNamesConst.EDIT_PRODUCT}
      contextMenuItems={contextMenuItems}
      filterAction={filterProducts}
      initialFilterValues={{
        institutionId: institutionsOptions[0],
      }}
      FilterForm={
        <ProductsFilter
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Products);
