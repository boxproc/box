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
  isAprsFormDirty: boolean;
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
  isAprsFormDirty,
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
        || isServicesFormDirty
        || isAprsFormDirty;
    },
    [
      isGeneralProductFormDirty,
      isProductDetailsFormDirty,
      isProductRulesFormDirty,
      isServicesFormDirty,
      isAprsFormDirty,
    ]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={modalTitle}
      maxContainerWidth={900}
      minContainerHeight={576}
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
