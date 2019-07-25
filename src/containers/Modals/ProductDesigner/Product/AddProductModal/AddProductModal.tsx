import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { CloseModal, HandleAddProduct } from 'store/domains';
import { SelectValues } from 'types';

interface AddProductModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
  addProduct: HandleAddProduct;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  closeModal,
  institutionsOptions,
  addProduct,
}) => {
  return (
    <Modal
      name={modalNames.ADD_PRODUCT}
      title="Add New Product"
      maxContainerWidth={700}
    >
      <ProductForm
        onCancel={() => closeModal(modalNames.ADD_PRODUCT)}
        productAction={addProduct}
        institutionsOptions={institutionsOptions}
        initialValues={{
          historyRetentionNumberOfDay: 90,
        }}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddProductModal);
