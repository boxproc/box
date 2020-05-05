import React from 'react';

import { Modal, Tabs, TabsPanel } from 'components';
import { IWithModal, withModal } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import {
  CurrencyLimitForm,
  CustomerForm,
  RepaymentDebitCardsForm,
  RepaymentDirectDebitsForm,
} from './../../forms';

import { THandleGetServicesInterfaces } from 'store';
import { ISelectValue } from 'types';

interface IEditCustomerModal extends IWithModal {
  currentCustomerInstitutionId: number;
  currentCustomerName: string;
  getInterfaces: THandleGetServicesInterfaces;
  interfacesOptions: Array<ISelectValue>;
  isFormDirty: boolean;
  isInterfacesLoading: boolean;
  isLimitAtCustomerLevel: boolean;
}

const modalName = modalNamesConst.EDIT_CUSTOMER;

const EditCustomerModal: React.FC<IEditCustomerModal> = ({
  closeModal,
  currentCustomerInstitutionId,
  currentCustomerName,
  getInterfaces,
  interfacesOptions,
  isFormDirty,
  isInterfacesLoading,
  isLimitAtCustomerLevel,
  isReadOnly,
}) => {
  React.useEffect(
    () => {
      getInterfaces(currentCustomerInstitutionId);
    },
    [getInterfaces, currentCustomerInstitutionId]
  );

  const modalTitle = React.useMemo(
    () => `Edit Customer: ${currentCustomerName}`,
    [currentCustomerName]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      containerWidth="1010px"
      minContainerHeight="600px"
      withCloseConfirmation={isFormDirty}
    >
      <Tabs>
        <TabsPanel title="General">
          <CustomerForm
            isEditMode={true}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        <TabsPanel title="Repayment Debit Cards">
          <RepaymentDebitCardsForm
            interfacesOptions={interfacesOptions}
            isInterfacesLoading={isInterfacesLoading}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        <TabsPanel title="Repayment Direct Debits">
          <RepaymentDirectDebitsForm
            interfacesOptions={interfacesOptions}
            isInterfacesLoading={isInterfacesLoading}
            isReadOnly={isReadOnly}
            onCancel={handleOnCancel}
          />
        </TabsPanel>
        {isLimitAtCustomerLevel && (
          <TabsPanel title="Limit">
            <CurrencyLimitForm
              isReadOnly={isReadOnly}
              onCancel={handleOnCancel}
            />
          </TabsPanel>
        )}
      </Tabs>
    </Modal>
  );
};

export default withModal(EditCustomerModal);
