import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, OkCancelButtons } from 'components';

import { formNamesConst } from 'consts';

import { ProductLimitsFeesCommissions } from 'containers/ProductDesigner/Products/components';

interface LimitsFeesCommissionsFormProps {
  onCancel?: () => void;
}

type LimitsFeesCommissionsFormAllProps = LimitsFeesCommissionsFormProps &
  InjectedFormProps<{}, LimitsFeesCommissionsFormProps>;

const LimitsFeesCommissionsForm: React.FC<LimitsFeesCommissionsFormAllProps> = ({
  handleSubmit,
  onCancel,
  pristine,
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
        disabledOk={pristine}
      />
    </form>
  );
};

export default reduxForm<{}, LimitsFeesCommissionsFormProps>({
  form: formNamesConst.PRODUCT_LIMITS_AND_COMMISSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(LimitsFeesCommissionsForm);
