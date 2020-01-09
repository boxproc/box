import React from 'react';

import { Modal } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst } from 'consts';

import { accountInitialFormValues } from 'containers/Ledger/Accounts/consts';
import { AccountForm } from 'containers/Ledger/Accounts/forms';

import { InstitutionProductsItemPrepared } from 'store/domains';

import { SelectValues } from 'types';

interface AddAccountModalProps extends WithModalProps {
  institutionsOptions: Array<SelectValues>;
  institutionProducts: Array<InstitutionProductsItemPrepared>;
  currentProduct: SelectValues;
  isFormDirty: boolean;
}

const modalName = modalNamesConst.ADD_LEDGER_ACCOUNT;

const AddAccountModal: React.FC<AddAccountModalProps> = ({
  institutionsOptions,
  institutionProducts,
  currentProduct,
  isFormDirty,
  closeModal,
}) => {
  const installmentsInitialValues = React.useMemo(
    () => {
      const currentProductId = currentProduct && currentProduct.value;
      const currentProductItem = institutionProducts
        .find(product => product.id === currentProductId);

      return {
        product: currentProduct,
        numOfInstallments: currentProductItem && currentProductItem.defNumOfInstallments,
        numOfInterestFreeInstllmnts: currentProductItem
          && currentProductItem.defNumOfIntrstFreeInstlmts,
      };

    },
    [institutionProducts, currentProduct]
  );

  const initialValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions && institutionsOptions[0],
        ...accountInitialFormValues,
        ...installmentsInitialValues,
      };
    },
    [institutionsOptions, installmentsInitialValues]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      title="Add Account"
      maxContainerWidth={980}
      minContainerHeight={510}
      withCloseConfirmation={isFormDirty}
    >
      <AccountForm
        initialValues={initialValues}
        onCancel={handleOnCancel}
        mode="add"
      />
    </Modal>
  );
};

export default withModal(AddAccountModal);
