import React from 'react';

import Modal from 'components/Modal';
import { modalNames } from 'consts';

import { withSpinner } from 'components/Spinner';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { CloseModal } from 'store/domains';
import { SelectValues } from 'types';

interface AddProductModalProps {
  closeModal: CloseModal;
  institutionsOptions: Array<SelectValues>;
  productTypeValue: SelectValues;
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
