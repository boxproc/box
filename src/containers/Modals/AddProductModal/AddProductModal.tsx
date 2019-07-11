import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import { CloseModal } from 'store/domains';

interface AddSystemPropertyModalProps {
  closeModal: CloseModal;
  // addProduct?: any;
}

const AddProductModal: React.FC<AddSystemPropertyModalProps> = ({
  closeModal,
  // addProduct,
}) => {
  return (
    <Modal
      name={modalNames.ADD_PRODUCT}
      title="Add Product"
      maxContainerWidth={600}
    >
      Add Product
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddProductModal);
