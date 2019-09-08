import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Delimiter';

import { formNames } from 'consts';

import { ProductLimitsFeesCommissions } from 'containers/ProductDesigner/Products/components';

interface ProductLimitsFeesCommissionsFormProps {
  onCancel?: () => void;
}

type ProductLimitsFeesCommissionsFormAllProps = ProductLimitsFeesCommissionsFormProps &
  InjectedFormProps<{}, ProductLimitsFeesCommissionsFormProps>;

const ProductLimitsFeesCommissionsForm: React.FC<ProductLimitsFeesCommissionsFormAllProps> = ({
  handleSubmit,
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductLimitsFeesCommissions />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
      />
    </form>
  );
};

export default reduxForm<{}, ProductLimitsFeesCommissionsFormProps>({
  form: formNames.PRODUCT_LIMITS_AND_COMMISSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ProductLimitsFeesCommissionsForm);
