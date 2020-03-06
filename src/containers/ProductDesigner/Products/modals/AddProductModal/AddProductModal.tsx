import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { AddProductForm } from 'containers/ProductDesigner/Products/forms';

interface AddProductModalProps extends WithModalProps {
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_PRODUCT;

const AddProductModal: React.FC<AddProductModalProps> = ({
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
      containerWidth={1010}
      minContainerHeight={580}
      withCloseConfirmation={isFormDirty}
    >
      <AddProductForm onCancel={handleOnCancel} />
    </Modal>
  );
};

export default withModal(AddProductModal);
