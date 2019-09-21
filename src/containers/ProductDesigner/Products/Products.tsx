import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

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
}

export const Products: React.FC<ProductsProps> = ({
  getProductId,
  productItems,
  institutionsOptions,
  filterProducts,
  currentProductName,
  deleteProduct,
}) => {
  const contextMenuItems = React.useMemo(
    () => [
      {
        name: 'Delete',
        icon: 'delete',
        action: deleteProduct,
        withConfirmation: true,
        confirmationText: `Delete product "${currentProductName}?`,
      },
    ],
    [deleteProduct, currentProductName]
  );

  return (
    <TablePage
      title="Products"
      data={productItems}
      columns={tableColumns}
      addNewModalName={modalNamesConst.ADD_PRODUCT}
      editModalName={modalNamesConst.EDIT_PRODUCT}
      setCurrentIdAction={getProductId}
      contextMenuItems={contextMenuItems}
      FilterForm={
        <ProductsFilterForm
          filterProducts={filterProducts}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Products);
