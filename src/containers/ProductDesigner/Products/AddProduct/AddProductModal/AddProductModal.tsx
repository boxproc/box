import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import AddProductForm from 'containers/ProductDesigner/Products/AddProduct/AddProductForm';

import { CloseModal, HandleAddProduct } from 'store/domains';

interface AddProductModalProps {
  closeModal: CloseModal;
  addProduct: HandleAddProduct;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  closeModal,
  addProduct,
}) => {
  return (
    <Modal
      name={modalNames.ADD_PRODUCT}
      title="Add New Product"
      maxContainerWidth={700}
      minContainerHeight={610}
    >
      <AddProductForm
        onCancel={() => closeModal(modalNames.ADD_PRODUCT)}
        addProduct={addProduct}
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
