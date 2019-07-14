import React from 'react';

import { Box } from '@rebass/grid';

import styled from 'theme';

import { Button } from 'components/Buttons';

import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import ProductForm from 'containers/ProductDesigner/Products/ProductForm';

import { modalNames } from 'consts';

import { CloseModal } from 'store/domains';

const DeleteWrapper = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.lighterGrayColor};
`;

interface EditProductModalProps {
  closeModal: CloseModal;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  closeModal,
}) => {
  return (
    <Modal
      name={modalNames.EDIT_PRODUCT}
      title="Edit Product"
      maxContainerWidth={700}
    >
      <ProductForm
        onCancel={() => closeModal(modalNames.EDIT_PRODUCT)}
      />

      <DeleteWrapper mt="15px" pt="15px">
        <Button
          text="delete"
          iconName="delete"
          transparent={true}
        />
      </DeleteWrapper>
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(EditProductModal);
