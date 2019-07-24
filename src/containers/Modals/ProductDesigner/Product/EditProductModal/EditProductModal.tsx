import React from 'react';

import { Button } from 'components/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { modalNames } from 'consts';

import {
  CloseModal,
  DebitProductItemDetails,
  HandleDeleteProduct,
  LoanProductItemDetails,
  PrepaidProductItemDetails,
  RevolvingCreditProductItemDetails,
  SavingsProductItemDetails,
} from 'store/domains';
import { SelectValues } from 'types';

interface EditProductModalProps {
  closeModal: CloseModal;
  deleteProduct: HandleDeleteProduct;
  productId: number;
  institutionsOptions: Array<SelectValues>;
  productTypeValue: SelectValues;
  savingsProduct: SavingsProductItemDetails;
  revolvingCreditProduct: RevolvingCreditProductItemDetails;
  prepaidProduct: PrepaidProductItemDetails;
  loanProduct: LoanProductItemDetails;
  debitProduct: DebitProductItemDetails;
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
