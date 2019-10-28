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
  isServicesFormDirty: boolean;
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
  isServicesFormDirty,
}) => {
  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const productName = React.useMemo(
    () => currentProductName ? `: ${currentProductName}` : '',
    [currentProductName]
  );

  const modalTitle = React.useMemo(
    () => isProductOverride ? `Product override${productName}` : `Edit product${productName}`,
    [isProductOverride, productName]
  );

  const isAnyFormDirty = React.useMemo(
    () => {
      return isGeneralProductFormDirty
        || isProductDetailsFormDirty
        || isProductRulesFormDirty
        || isServicesFormDirty;
    },
    [
      isGeneralProductFormDirty,
      isProductDetailsFormDirty,
      isProductRulesFormDirty,
      isServicesFormDirty,
    ]
  );

  const modalMinHeight = React.useMemo(
    () => isProductOverride ? 576 : 550,
    [isProductOverride]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={modalTitle}
      minContainerHeight={modalMinHeight}
      withCloseConfirmation={isAnyFormDirty}
    >
      <EditProductForms
        onCancel={handleOnCancel}
        isProductOverride={isProductOverride}
      />
    </Modal>
  );
};

export default withModal(EditProductModal);
