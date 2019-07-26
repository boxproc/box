import React from 'react';

import { Button } from 'components/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { modalNames } from 'consts';

import {
  CloseModal,
  HandleDeleteProduct,
  HandleUpdateProduct,
  // ProductItemDetails,
} from 'store/domains';

import { SelectValues } from 'types';

interface Id {
  id: number;
}

interface EditProductModalProps {
  closeModal: CloseModal;
  deleteProduct: HandleDeleteProduct;
  updateProduct: HandleUpdateProduct;
  currentProductId: number;
  institutionsOptions: Array<SelectValues>;
  currentProduct: Id;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  deleteProduct,
  currentProductId,
  institutionsOptions,
  updateProduct,
  currentProduct,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title="Edit Product"
      maxContainerWidth={700}
      minContainerHeight={610}
    >
      <ProductForm
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
        productAction={updateProduct}
        institutionsOptions={institutionsOptions}
        isDisabledProductTypes={true}
        isDisabledInstitutions={true}
        isDisabledStatus={true}
        initialValues={currentProduct}
      />
      <Hr />
      <Button
        text="delete"
        iconName="delete"
        onClick={() => deleteProduct(currentProductId)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditProductModal);
