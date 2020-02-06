import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { ApiCallForm } from 'containers/Audit/ApiCalls/forms';

import { HandleGetDetailsAuditApiCalls } from 'store/domains';

interface ApiCallModalProps extends WithModalProps {
  getDetailsApiCalls: HandleGetDetailsAuditApiCalls;
}

const modalName = modalNamesConst.API_CALL;

const ApiCallModal: React.FC<ApiCallModalProps> = ({
  closeModal,
  getDetailsApiCalls,
}) => {
  React.useEffect(
    () => {
      getDetailsApiCalls();
    },
    [getDetailsApiCalls]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title="API Call"
      maxContainerWidth={980}
    >
      <ApiCallForm />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(ApiCallModal));
