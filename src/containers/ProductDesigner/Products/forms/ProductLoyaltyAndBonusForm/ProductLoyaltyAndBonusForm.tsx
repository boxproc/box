import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { Hr, OkCancelButtons } from 'components';

import { formNames } from 'consts';

import { ProductLoyaltyAndBonus } from 'containers/ProductDesigner/Products/components';

interface LoyaltyAndBonusFormProps {
  onCancel?: () => void;
}

type LoyaltyAndBonusFormAllProps = LoyaltyAndBonusFormProps &
  InjectedFormProps<{}, LoyaltyAndBonusFormProps>;

const LoyaltyAndBonusForm: React.FC<LoyaltyAndBonusFormAllProps> = ({
  handleSubmit,
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <ProductLoyaltyAndBonus />
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

export default reduxForm<{}, LoyaltyAndBonusFormProps>({
  form: formNames.PRODUCT_LIMITS_AND_COMMISSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(LoyaltyAndBonusForm);
