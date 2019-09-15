import React from 'react';

import { modalNamesConst } from 'consts';

import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';

export const productsModals = [
  {
    name: modalNamesConst.ADD_PRODUCT,
    component: <AddProductModal />,
  },
  {
    name: modalNamesConst.EDIT_PRODUCT,
    component: <EditProductModal />,
  },
];
