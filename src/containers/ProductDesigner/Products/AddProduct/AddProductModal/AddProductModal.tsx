import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import AddProductForm from 'containers/ProductDesigner/Products/AddProduct/AddProductForm';

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
      maxContainerWidth={700}
      minContainerHeight={607}
    >
      <AddProductForm
        onCancel={() => closeModal(modalNames.ADD_PRODUCT)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddProductModal);
