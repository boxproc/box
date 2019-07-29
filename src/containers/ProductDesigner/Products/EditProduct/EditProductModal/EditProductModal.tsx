import React from 'react';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import EditProductForm from 'containers/ProductDesigner/Products/EditProduct/EditProductForm';

import { modalNames } from 'consts';

import {
  CloseModal,
  HandleDeleteProduct,
  HandleUpdateProduct,
  // ProductItemDetails,
} from 'store/domains';

import { SelectValues } from 'types';

interface Id {
  id: number;
}

interface EditProductModalProps {
  closeModal: CloseModal;
  deleteProduct: HandleDeleteProduct;
  updateProduct: HandleUpdateProduct;
  currentProductId: number;
  currentProduct: Id;
  productTypeValue: SelectValues;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
  deleteProduct,
  currentProductId,
  updateProduct,
  currentProduct,
  productTypeValue,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title="Edit Product"
      maxContainerWidth={700}
      minContainerHeight={610}
    >
      <EditProductForm
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        productTypeValue={productTypeValue}
        currentProductId={currentProductId}
        initialValues={{
          ...currentProduct,
          rulesCode:
`function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}`,
        }}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditProductModal);
