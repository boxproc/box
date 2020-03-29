import React from 'react';

import { Flex } from '@rebass/grid';

import { Button, Modal, withSpinner } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { ApiCallForm } from 'containers/Audit/ApiCalls/forms';

import { HandleGetDetailsAuditApiCalls } from 'store';

interface IApiCallModal extends IWithModal {
  getDetailsApiCalls: HandleGetDetailsAuditApiCalls;
}

const modalName = modalNamesConst.API_CALL;

const ApiCallModal: React.FC<IApiCallModal> = ({
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
      type={modalTypesConst.VIEWING}
      title="API Call"
      containerWidth="980px"
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
