import React from 'react';

import { modalNames } from 'consts';

import { AddProductModal, EditProductModal } from 'containers/ProductDesigner/Products/modals';

export const productDesignerModalList = [
  {
    name: modalNames.ADD_PRODUCT,
    component: <AddProductModal />,
  },
  {
    name: modalNames.EDIT_PRODUCT,
    component: <EditProductModal />,
  },
];
