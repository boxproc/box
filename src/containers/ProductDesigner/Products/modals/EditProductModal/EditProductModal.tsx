import React from 'react';

import { Modal } from 'components';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditProductForms } from 'containers/ProductDesigner/Products/forms';

import { CloseModal } from 'store/domains';

interface EditProductModalProps {
  closeModal: CloseModal;
  currentProductName: string;
  isGeneralProductFormDirty: boolean;
  isProductDetailsFormDirty: boolean;
  isProductRulesFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_PRODUCT;

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  currentProductName,
  isGeneralProductFormDirty,
  isProductDetailsFormDirty,
  isProductRulesFormDirty,
}) => {
  const productName = currentProductName ? `: ${currentProductName}` : '';
  const isDirty = isGeneralProductFormDirty
    || isProductDetailsFormDirty
    || isProductRulesFormDirty;

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Edit Product${productName}`}
      minContainerHeight={545}
      withCloseConfirmation={isDirty}
    >
      <EditProductForms
        onCancel={() => closeModal(modalName)}
      />
    </Modal>
  );
};

export default EditProductModal;
