import React from 'react';

import { modalNamesConst } from 'consts';

import { AddProductModal, EditProductModal } from 'containers/ProductDesigner/Products/modals';

export const productDesignerModalList = [
  {
    name: modalNamesConst.ADD_PRODUCT,
    component: <AddProductModal />,
  },
  {
    name: modalNamesConst.EDIT_PRODUCT,
    component: <EditProductModal />,
  },
];
