import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { ProductLoyaltyAndBonus } from 'containers/ProductDesigner/Products/productComponents';

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
      <Flex
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <OkCancelButtons
          okText="Save Loyalty and Bonus"
          cancelText="Close"
          onCancel={onCancel}
        />
      </Flex>
    </form>
  );
};

export default reduxForm<{}, LoyaltyAndBonusFormProps>({
  form: formNames.PRODUCT_LIMITS_AND_COMMISSION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(LoyaltyAndBonusForm);
