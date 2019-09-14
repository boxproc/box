import React from 'react';

import { Modal } from 'components';

import { modalNames } from 'consts';

import { AddProductForm } from 'containers/ProductDesigner/Products/forms';

import { CloseModal } from 'store/domains';

interface AddProductModalProps {
  closeModal: CloseModal;
  isFormDirty: boolean;
}

const modalName = modalNames.ADD_PRODUCT;

const AddProductModal: React.FC<AddProductModalProps> = ({
  closeModal,
  isFormDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New Product"
      minContainerHeight={465}
      withCloseConfirmation={isFormDirty}
    >
      <AddProductForm
        onCancel={() => closeModal(modalName)}
        isDirty={isFormDirty}
      />
    </Modal>
  );
};

export default AddProductModal;
