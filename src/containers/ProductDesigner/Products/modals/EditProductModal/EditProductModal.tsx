import React from 'react';

import { Modal, ProductImages } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditProductForms } from 'containers/ProductDesigner/Products/forms';

interface EditProductModalProps extends WithModalProps {
  currentProductName: string;
  currentProductType: string | number;
  isProductOverride: boolean;
  isGeneralProductFormDirty: boolean;
  isProductDetailsFormDirty: boolean;
  isProductRulesFormDirty: boolean;
  isAuxCountersFormDirty: boolean;
  isServicesFormDirty: boolean;
  isGlFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_PRODUCT;

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  currentProductName,
  currentProductType,
  isProductOverride,
  isGeneralProductFormDirty,
  isProductDetailsFormDirty,
  isProductRulesFormDirty,
  isAuxCountersFormDirty,
  isServicesFormDirty,
  isGlFormDirty,
  isReadOnly,
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
        || isAuxCountersFormDirty
        || isServicesFormDirty
        || isGlFormDirty;
    },
    [
      isGeneralProductFormDirty,
      isProductDetailsFormDirty,
      isProductRulesFormDirty,
      isAuxCountersFormDirty,
      isServicesFormDirty,
      isGlFormDirty,
    ]
  );

  const modalHeight = React.useMemo(
    () => window.innerHeight - 10,
    []
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={modalTitle}
      containerWidth={1010}
      minContainerHeight={modalHeight}
      withCloseConfirmation={isAnyFormDirty}
      TitleIcon={ProductImages[currentProductType]}
    >
      <EditProductForms
        onCancel={handleOnCancel}
        isProductOverride={isProductOverride}
        isAnyFormDirty={isAnyFormDirty}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withModal(EditProductModal);
