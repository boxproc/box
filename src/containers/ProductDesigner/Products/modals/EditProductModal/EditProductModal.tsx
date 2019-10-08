import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditProductForms } from 'containers/ProductDesigner/Products/forms';

interface EditProductModalProps extends WithModalProps {
  currentProductName: string;
  isGeneralProductFormDirty: boolean;
  isProductDetailsFormDirty: boolean;
  isProductRulesFormDirty: boolean;
  isProductOverride: boolean;
}

const modalName = modalNamesConst.EDIT_PRODUCT;

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  currentProductName,
  isGeneralProductFormDirty,
  isProductDetailsFormDirty,
  isProductRulesFormDirty,
  isProductOverride,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const productName = currentProductName ? `: ${currentProductName}` : '';
  const isFormDirty = isGeneralProductFormDirty
    || isProductDetailsFormDirty
    || isProductRulesFormDirty;

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={isProductOverride ? `Product override${productName}` : `Edit product${productName}`}
      minContainerHeight={isProductOverride ? 576 : 550}
      withCloseConfirmation={isFormDirty}
    >
      <EditProductForms
        onCancel={handleOnCancel}
        isProductOverride={isProductOverride}
      />
    </Modal>
  );
};

export default withModal(EditProductModal);
