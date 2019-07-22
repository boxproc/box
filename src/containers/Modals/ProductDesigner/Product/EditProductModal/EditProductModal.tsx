import React from 'react';

import { Button } from 'components/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { modalNames } from 'consts';

import {
  CloseModal,
  // DebitProductItemDetails,
  HandleDeleteProduct,
  // LoanProductItemDetails,
  // PrepaidProductItemDetails,
  // RevolvingCreditProductItemDetails,
  // SavingsProductItemDetails,
} from 'store/domains';
import { ParsedSelectValues } from 'types';

interface EditProductModalProps {
  closeModal: CloseModal;
  deleteProduct: HandleDeleteProduct;
  productId: number;
  institutionsOptions: Array<ParsedSelectValues>;
  productTypeValue: ParsedSelectValues;
  savingsProduct: any;
  revolvingCreditProduct: any;
  prepaidProduct: any;
  loanProduct: any;
  debitProduct: any;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  deleteProduct,
  productId,
  institutionsOptions,
  productTypeValue,
  savingsProduct,
  revolvingCreditProduct,
  prepaidProduct,
  loanProduct,
  debitProduct,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title="Edit Product"
      maxContainerWidth={700}
      label={productTypeValue && productTypeValue.label}
      labelIconName="creditCard"
    >
      <ProductForm
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
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
