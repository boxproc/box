import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditProductForms } from 'containers/ProductDesigner/Products/forms';

interface EditProductModalProps extends WithModalProps {
  currentProductName: string;
  isProductOverride: boolean;
  isGeneralProductFormDirty: boolean;
  isProductDetailsFormDirty: boolean;
  isProductRulesFormDirty: boolean;
  isAuxCountersFormDirty: boolean;
  isAprsFormDirty: boolean;
  isFeesFormDirty: boolean;
  isRewardsFormDirty: boolean;
  isServicesFormDirty: boolean;
  isGlFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_PRODUCT;

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  currentProductName,
  isProductOverride,
  isGeneralProductFormDirty,
  isProductDetailsFormDirty,
  isProductRulesFormDirty,
  isAuxCountersFormDirty,
  isAprsFormDirty,
  isFeesFormDirty,
  isRewardsFormDirty,
  isServicesFormDirty,
  isGlFormDirty,
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
        || isAprsFormDirty
        || isFeesFormDirty
        || isRewardsFormDirty
        || isServicesFormDirty
        || isGlFormDirty;
    },
    [
      isGeneralProductFormDirty,
      isProductDetailsFormDirty,
      isProductRulesFormDirty,
      isAuxCountersFormDirty,
      isAprsFormDirty,
      isFeesFormDirty,
      isRewardsFormDirty,
      isServicesFormDirty,
      isGlFormDirty,
    ]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={modalTitle}
      maxContainerWidth={1010}
      minContainerHeight={window.innerHeight - 10}
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
