import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { iconNamesConst, modalNamesConst } from 'consts';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';
import { ProductsFilter } from './forms';

import {
  IProduct,
  THandleDeleteProduct,
  THandleFilterProducts,
  TResetProducts,
} from 'store';

import { ISelectValue } from 'types';

interface IProducts {
  productItems: ImmutableArray<IProduct>;
  institutionsOptions: Array<ISelectValue>;
  currentProductName: string;
  isLoading: boolean;
  isReadOnly: boolean;
  filterProducts: THandleFilterProducts;
  deleteProduct: THandleDeleteProduct;
  resetProducts: TResetProducts;
}

export const Products: React.FC<IProducts> = ({
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
      viewingModalName={modalNamesConst.EDIT_PRODUCT}
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
