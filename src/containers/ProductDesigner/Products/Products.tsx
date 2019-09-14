import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNames } from 'consts';

import { tableColumns } from 'containers/ProductDesigner/Products/components';
import { ProductsFilterForm } from 'containers/ProductDesigner/Products/forms';

import {
  HandleDeleteProduct,
  HandleFilterProducts,
  HandleGetProductId,
  ProductItem,
} from 'store/domains';

import { SelectValues } from 'types';

interface ProductsProps {
  productItems: Array<ProductItem>;
  institutionsOptions: Array<SelectValues>;
  getProductId: HandleGetProductId;
  filterProducts: HandleFilterProducts;
  deleteProduct: HandleDeleteProduct;
  currentProductName: string;
  isFilterFormDirty: boolean;
}

export const Products: React.FC<ProductsProps> = ({
  getProductId,
  productItems,
  institutionsOptions,
  filterProducts,
  isFilterFormDirty,
  currentProductName,
  deleteProduct,
}) => {
  const contextMenuItems = [
    {
      name: 'Delete',
      icon: 'delete',
      action: deleteProduct,
      withConfirmation: true,
      confirmationText: `Delete product "${currentProductName}?`,
    },
  ];

  return (
    <TablePage
      title="Products"
      data={productItems}
      columns={tableColumns}
      addNewModalName={modalNames.ADD_PRODUCT}
      editModalName={modalNames.EDIT_PRODUCT}
      setCurrentIdAction={getProductId}
      contextMenuItems={contextMenuItems}
      FilterForm={
        <ProductsFilterForm
          filterProducts={filterProducts}
          institutionsOptions={institutionsOptions}
          isDirty={isFilterFormDirty}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Products);
