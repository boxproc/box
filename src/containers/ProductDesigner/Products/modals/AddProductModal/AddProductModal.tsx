import React from 'react';

import { Modal } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst } from 'consts';

import { AddProductForm } from 'containers/ProductDesigner/Products/forms';

interface IAddProductModal extends IWithModal {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_PRODUCT;

const AddProductModal: React.FC<IAddProductModal> = ({
  closeModal,
  isFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add New Product"
      containerWidth="850px"
      minContainerHeight="560px"
      withCloseConfirmation={isFormDirty}
      isBluredBackdrop={true}
    >
      <AddProductForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddProductModal);
