import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { Hr } from 'components/Delimiter';

import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { formNames } from 'consts';
import { HandleUpdateCardService } from 'store/domains';
import { Services } from '../../components';

interface ServicesFormProps extends ExternalSpinnerProps {
  onCancel?: () => void;
  currentGroupId: number;
  updateCardService: HandleUpdateCardService;
}

type ServicesFormAllProps = ServicesFormProps &
  InjectedFormProps<{}, ServicesFormProps>;

const ServicesForm: React.FC<ServicesFormAllProps> = ({
  currentGroupId,
  updateCardService,
  handleSubmit,
  onCancel,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateCardService({
      ...data,
      id: currentGroupId,

    })),
    [handleSubmit, updateCardService]
  );

  return (
    <form onSubmit={handleSubmitForm}>
       <Services />
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

export default reduxForm<{}, ServicesFormProps>({
  form: formNames.PRODUCT_SERVICES,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(ServicesForm));
