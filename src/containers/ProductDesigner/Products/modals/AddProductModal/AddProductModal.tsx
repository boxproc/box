import React from 'react';

import { Modal } from 'components';

import { modalNamesConst } from 'consts';

import { AddProductForm } from 'containers/ProductDesigner/Products/forms';

import { CloseModal } from 'store/domains';

interface AddProductModalProps {
  closeModal: CloseModal;
  isDirty: boolean;
}

const modalName = modalNamesConst.ADD_PRODUCT;

const AddProductModal: React.FC<AddProductModalProps> = ({
  closeModal,
  isDirty,
}) => {
  return (
    <Modal
      name={modalName}
      title="Add New Product"
      minContainerHeight={465}
      withCloseConfirmation={isDirty}
    >
      <AddProductForm
        onCancel={() => closeModal(modalName)}
        isDirty={isDirty}
      />
    </Modal>
  );
};

export default AddProductModal;
