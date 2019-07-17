import React from 'react';
import { RowInfo } from 'react-table';

import { withSpinner } from 'components/Spinner';
import TablePage from 'components/TablePage/TablePage';

import { cookiesExpires, cookiesNames, modalNames, yesNoTypes } from 'consts';

import { columns } from './columns';
import ProductsFilter from './ProductsFilter';

import {
  HandleFilterProducts,
  HandleGetProducts,
  OpenModal,
  ProductFilterParamsPrepared,
  ProductItem,
} from 'store/domains';

import { ParsedSelectValues } from 'types';

import { cookiesUtil } from 'utils';

interface ProductsProps {
  openModal: OpenModal;
  productItems: Array<Partial<ProductItem>>;
  getProducts: HandleGetProducts;
  filterProducts: HandleFilterProducts;
  institutionsOptions: Array<ParsedSelectValues>;
  filterProductParams: ProductFilterParamsPrepared;
}

export const Products: React.FC<ProductsProps> = ({
  openModal,
  getProducts,
  productItems,
  institutionsOptions,
  filterProducts,
  filterProductParams,
}) => {
  React.useEffect(
    () => {
      getProducts();

      if (filterProductParams) {
        cookiesUtil.set(
          cookiesNames.PRODUCTS_FILTER,
          JSON.stringify(filterProductParams), {
            expires: cookiesExpires.WEEK,
          }
        );
      }
    },
    [getProducts, filterProductParams]
  );

  const handleOnClickRow = React.useCallback(
    (_, rowInfo: RowInfo) => {
      if (rowInfo.original.lockedFlag === yesNoTypes.YES) {
        return null;
      }
      return {
        onDoubleClick: () => openModal({
          name: modalNames.EDIT_PRODUCT,
          fields: {id: rowInfo.original.id},
        }),
      };
    },
    [openModal]
  );

  const productParams = cookiesUtil.get(cookiesNames.PRODUCTS_FILTER);
  const initialFilterValues = productParams && JSON.parse(productParams);

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
          <ProductsFilter
            filterProducts={filterProducts}
            institutionsOptions={institutionsOptions}
            initialValues={initialFilterValues}
          />
        }
      />
    </React.Fragment >
  );
};

export default withSpinner({
  isFixed: true,
})(Products);
