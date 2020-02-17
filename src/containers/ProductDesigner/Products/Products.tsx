import React from 'react';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { ProductsFilter } from './forms';

import {
  HandleDeleteProduct,
  HandleFilterProducts,
  ProductItem,
  ResetProducts,
} from 'store/domains';

import { SelectValue } from 'types';

interface ProductsProps {
  productItems: Array<ProductItem>;
  institutionsOptions: Array<SelectValue>;
  currentProductName: string;
  isLoading: boolean;
  isReadOnly: boolean;
  filterProducts: HandleFilterProducts;
  deleteProduct: HandleDeleteProduct;
  resetProducts: ResetProducts;
}

export const Products: React.FC<ProductsProps> = ({
  productItems,
  institutionsOptions,
  filterProducts,
  currentProductName,
  deleteProduct,
  resetProducts,
  isLoading,
  isReadOnly,
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
        name: 'Delete',
        icon: iconNamesConst.DELETE,
        isDisabled: isReadOnly,
        action: deleteProduct,
        withConfirmation: true,
        confirmationText: `Delete product "${currentProductName}"?`,
      },
    ],
    [deleteProduct, currentProductName, isReadOnly]
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
      };
    },
    [institutionsOptions]
  );

  return (
    <PageTemplate
      title="Products"
      data={productItems}
      columns={tableColumns}
      isDownloadButton={true}
      newModalName={modalNamesConst.ADD_PRODUCT}
      editModalName={modalNamesConst.EDIT_PRODUCT}
      contextMenuItems={contextMenuItems}
      filterAction={filterProducts}
      initialFilterValues={initialFilterValues}
      isLoading={isLoading}
      FilterForm={
        <ProductsFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default Products;
