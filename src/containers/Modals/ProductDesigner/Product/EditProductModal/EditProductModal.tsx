import React from 'react';

import { Button } from 'components/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { modalNames } from 'consts';

import {
  CloseModal,
  // DebitProductItem,
  HandleDeleteProduct,
  HandleUpdateProduct,
  // LoanProductItem,
  // PrepaidProductItem,
  // RevolvingCreditProductItem,
  // SavingsProductItem,
} from 'store/domains';
import { SelectValues } from 'types';

interface Id {
  id: number;
}

interface EditProductModalProps {
  closeModal: CloseModal;
  deleteProduct: HandleDeleteProduct;
  updateProduct: HandleUpdateProduct;
  productId: number;
  institutionsOptions: Array<SelectValues>;
  savingsProduct: Id;
  revolvingCreditProduct: Id;
  prepaidProduct: Id;
  loanProduct: Id;
  debitProduct: Id;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  deleteProduct,
  productId,
  institutionsOptions,
  savingsProduct,
  revolvingCreditProduct,
  prepaidProduct,
  loanProduct,
  debitProduct,
  updateProduct,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title="Edit Product"
      maxContainerWidth={700}
    >
      <ProductForm
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
        productAction={updateProduct}
        institutionsOptions={institutionsOptions}
        isDisabledProductTypes={true}
        isDisabledInstitutions={true}
        isDisabledStatus={true}
        initialValues={
          savingsProduct
          || revolvingCreditProduct
          || prepaidProduct
          || loanProduct
          || debitProduct
        }
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
