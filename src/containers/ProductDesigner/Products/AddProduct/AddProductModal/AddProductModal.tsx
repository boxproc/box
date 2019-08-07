import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import AddProductForm from 'containers/ProductDesigner/Products/addProduct/AddProductForm';

import { CloseModal } from 'store/domains';

interface AddProductModalProps {
  closeModal: CloseModal;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalNames.ADD_PRODUCT}
      title="Add New Product"
      minContainerHeight={607}
    >
      <AddProductForm
        onCancel={() => closeModal(modalNames.ADD_PRODUCT)}
      />
    </Modal>
  );
};

export default AddProductModal;
