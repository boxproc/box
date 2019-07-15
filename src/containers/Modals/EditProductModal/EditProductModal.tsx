import React from 'react';

import { Button } from 'components/Buttons/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';
import { Panel, Tabs } from 'components/Tabs';
import { Hr } from 'components/Text';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { modalNames } from 'consts';

import { CloseModal, PreparedFieldsEditProductModal } from 'store/domains';

interface EditProductModalProps {
  closeModal: CloseModal;
  fieldsEditProductModal: PreparedFieldsEditProductModal;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  fieldsEditProductModal,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title="Edit Product"
      maxContainerWidth={700}
    >
      <Tabs>
        <Panel title="General">
        <ProductForm
          onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
          initialValues={fieldsEditProductModal}
          isDisabledProductTypes={true}
        />
        </Panel>
        <Panel title="Tab">Tab Content</Panel>
      </Tabs>

      <Hr/>

      <Button
        text="delete"
        iconName="delete"
        transparent={true}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditProductModal);
