import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { CloseModal } from 'store/domains';
import { ParsedSelectValues } from 'types';

interface AddProductModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<ParsedSelectValues>;
  productTypeValue: ParsedSelectValues;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  closeModal,
  institutionsOptions,
  productTypeValue,
}) => {
  return (
    <Modal
      name={modalNames.ADD_PRODUCT}
      title="Add New Product"
      maxContainerWidth={700}
      label={productTypeValue && productTypeValue.label}
      labelIconName="creditCard"
    >
      <ProductForm
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
        institutionsOptions={institutionsOptions}
        initialValues={{
          historyRetentionNumberOfDay: 90,
        }}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(AddProductModal);
