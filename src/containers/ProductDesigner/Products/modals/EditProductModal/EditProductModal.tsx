import React from 'react';

import { Modal, ProductImages } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditProductForms } from 'containers/ProductDesigner/Products/forms';

interface IEditProductModal extends IWithModal {
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

const EditProductModal: React.FC<IEditProductModal> = ({
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
    () => isProductOverride ? `Product override${productName}` : `Product${productName}`,
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

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      containerWidth="1010px"
      minContainerHeight="560px"
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
