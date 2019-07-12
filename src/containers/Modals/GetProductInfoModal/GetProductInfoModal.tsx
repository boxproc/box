import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';
import Modal from 'components/Modal';
import { withSpinner } from 'components/Spinner';

import { modalNames } from 'consts';

import { CloseModal } from 'store/domains';

interface GetProductInfoModalProps {
  closeModal: CloseModal;
  // getProduct?: any;
}

const GetProductInfoModal: React.FC<GetProductInfoModalProps> = ({
  closeModal,
  // getProduct,
}) => {
  return (
    <Modal
      name={modalNames.GET_PRODUCT_INFO}
      title="Product Information"
      maxContainerWidth={800}
    >
      Product Information
      <Flex>
        <Box mt="20px">
          <Button
            text="close"
            transparent={true}
            onClick={() => closeModal(modalNames.GET_PRODUCT_INFO)}
          />
        </Box>
      </Flex>
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(GetProductInfoModal);
