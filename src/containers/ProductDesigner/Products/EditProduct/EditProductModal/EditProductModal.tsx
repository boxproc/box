import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import EditProductForms from 'containers/ProductDesigner/Products/editProduct/EditProductForms';

import { CloseModal } from 'store/domains';

interface EditProductModalProps {
  closeModal: CloseModal;
  currentProductName: string;
}

const modalName = modalNames.EDIT_PRODUCT;

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  currentProductName,
}) => {
  const productName = currentProductName ? `: ${currentProductName}` : '';

  return (
    <Modal
      name={modalName}
      title={`Edit Product${productName}`}
      minContainerHeight={635}
    >
      <EditProductForms
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default EditProductModal;
