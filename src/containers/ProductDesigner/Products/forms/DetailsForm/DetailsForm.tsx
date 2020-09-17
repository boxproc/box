import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';
import { formNamesConst } from 'consts';
import { ProductDetails } from 'containers/ProductDesigner/Products/components';
import {
  THandleGetProductDetails,
  THandleUpdateProductDetails,
} from 'store';
import { ISelectValue } from 'types';

interface IDetailsForm extends ISpinner {
  currentProductId: number;
  getProductDetails: THandleGetProductDetails;
  interestDistributionValue: ISelectValue;
  isReadOnly: boolean;
  isUpdating: boolean;
  onCancel?: () => void;
  productType: string | number;
  updateProductDetails: THandleUpdateProductDetails;
  useStatementGracePeriodFlagValue: boolean;
}

type TDetailsForm = IDetailsForm & InjectedFormProps<{}, IDetailsForm>;

const DetailsForm: React.FC<TDetailsForm> = ({
  currentProductId,
  dirty,
  getProductDetails,
  handleSubmit,
  interestDistributionValue,
  isReadOnly,
  isUpdating,
  onCancel,
  pristine,
  productType,
  updateProductDetails,
  useStatementGracePeriodFlagValue,
}) => {
  React.useEffect(
    () => {
      getProductDetails(currentProductId);
    },
    [getProductDetails, currentProductId]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProductDetails),
    [handleSubmit, updateProductDetails]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <ProductDetails
        interestDistributionValue={interestDistributionValue}
        useStatementGracePeriodFlagValue={useStatementGracePeriodFlagValue}
        productType={productType}
        isReadOnly={isReadOnly}
        isUpdating={isUpdating}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        hideOk={isReadOnly}
        disabledOk={pristine}
      />
    </form>
  );
};

export default reduxForm<{}, IDetailsForm>({
  form: formNamesConst.PRODUCT_DETAILS,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(DetailsForm));
