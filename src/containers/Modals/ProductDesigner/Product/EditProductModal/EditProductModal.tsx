import React from 'react';

import { Button } from 'components/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { modalNames } from 'consts';

import { CloseModal, HandleDeleteProduct } from 'store/domains';
import { ParsedSelectValues } from 'types';

interface EditProductModalProps {
  closeModal: CloseModal;
  deleteProduct: HandleDeleteProduct;
  productId: number | string;
  institutionsOptions: Array<ParsedSelectValues>;
  productTypeValue: ParsedSelectValues;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  deleteProduct,
  productId,
  institutionsOptions,
  productTypeValue,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title="Edit Product"
      maxContainerWidth={700}
    >
      <ProductForm
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
        institutionsOptions={institutionsOptions}
        isDisabledProductTypes={true}
        isDisabledInstitutions={true}
        isDisabledStatus={true}
        productTypeValue={productTypeValue}
      />
      <Hr />
      <Button
        text="delete"
        iconName="delete"
        onClick={() => deleteProduct(productId)}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditProductModal);
