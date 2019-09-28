import React from 'react';

import { TablePage, withSpinner } from 'components';

import { modalNamesConst } from 'consts';

import { tableColumns } from 'containers/ProductDesigner/Products/components';
import { ProductsFilter } from 'containers/ProductDesigner/Products/forms';

import {
  HandleDeleteProduct,
  HandleFilterProducts,
  ProductItem,
} from 'store/domains';

import { SelectValues } from 'types';

interface ProductsProps {
  productItems: Array<ProductItem>;
  institutionsOptions: Array<SelectValues>;
  filterProducts: HandleFilterProducts;
  deleteProduct: HandleDeleteProduct;
  currentProductName: string;
}

export const Products: React.FC<ProductsProps> = ({
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
