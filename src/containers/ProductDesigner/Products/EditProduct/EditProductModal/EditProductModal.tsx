import React from 'react';

import Modal from 'components/Modal';

import { modalNames } from 'consts';

import EditProductForms from 'containers/ProductDesigner/Products/editProduct/EditProductForms';

import { CloseModal } from 'store/domains';

interface EditProductModalProps {
  closeModal: CloseModal;
  currentProductName: string;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  currentProductName,
}) => {
  const productName = currentProductName ? `: ${currentProductName}` : '';

  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title={`Edit Product${productName}`}
      maxContainerWidth={700}
      minContainerHeight={758}
    >
      <EditProductForms
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
      />
    </Modal>
  );
};

export default EditProductModal;
