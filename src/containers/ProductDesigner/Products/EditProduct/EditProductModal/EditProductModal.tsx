import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import EditProductForms from 'containers/ProductDesigner/Products/EditProduct/EditProductForms';

import { CloseModal } from 'store/domains';

interface EditProductModalProps {
  closeModal: CloseModal;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title="Edit Product"
      maxContainerWidth={700}
      minContainerHeight={665}
    >
      <EditProductForms
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
      />
    </Modal>
  );
};

export default EditProductModal;
