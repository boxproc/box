import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { CloseModal } from 'store/domains';

interface AddSystemPropertyModalProps {
  closeModal: CloseModal;
}

const AddProductModal: React.FC<AddSystemPropertyModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalNames.ADD_PRODUCT}
      title="Add New Product"
      maxContainerWidth={700}
    >
      <ProductForm
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddProductModal);
