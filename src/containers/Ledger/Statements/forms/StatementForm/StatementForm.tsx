import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { StatementInfoTemplate } from 'components';

import { formNamesConst } from 'consts';

interface StatementFormProps { }

type StatementFormAllProps = StatementFormProps & InjectedFormProps<{}, StatementFormProps>;

const StatementForm: React.FC<StatementFormAllProps> = () => {
  return (
    <form>
      <StatementInfoTemplate isDisabled={true} />
    </form>
  );
};

export default reduxForm<{}, StatementFormProps>({
  form: formNamesConst.LEDGER_STATEMENT,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(StatementForm);
