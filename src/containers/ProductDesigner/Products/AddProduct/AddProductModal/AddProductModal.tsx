import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import AddProductForm from 'containers/ProductDesigner/Products/addProduct/AddProductForm';

import { CloseModal } from 'store/domains';

interface AddProductModalProps {
  closeModal: CloseModal;
}

const modalName = modalNames.ADD_PRODUCT;

const AddProductModal: React.FC<AddProductModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New Product"
      minContainerHeight={503}
    >
      <AddProductForm
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default AddProductModal;
