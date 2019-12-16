import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { NumberFormatField, SelectField, InputField } from 'components';

import { SelectValues } from 'types';

interface TableCellFormProps {
  value: string | number;
  isNumber?: boolean;
  isDecimalNumber?: boolean;
  isSelect?: boolean;
  selectOptions?: Array<SelectValues>;
}

// type TableCellFormAllProps = TableCellFormProps & InjectedFormProps<{}, TableCellFormProps>;
type TableCellFormAllProps = any;

export const TableCellForm: React.FC<TableCellFormAllProps> = ({
  value,
  isNumber = false,
  isDecimalNumber = false,
  isSelect = false,
  selectOptions,
}) => {
  const renderFields = () => {
    if (isDecimalNumber) {
      return (
        <Field
          id="tableCellDecimalNumber"
          name="tableCellDecimalNumber"
          component={NumberFormatField}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          isEditableCellStyle={true}
        />
      );
    } else if (isSelect) {
      return (
        <Field
          id="tableCellNumber"
          name="tableCellNumber"
          component={SelectField}
          options={selectOptions}
          isClearable={false}
        />
      );
    } else {
      return (
        <Field
          id="tableCellText"
          name="tableCellText"
          component={InputField}
          isEditableCellStyle={true}
        />
      );
    }
  };

  return renderFields();
};

export default reduxForm<{}, TableCellFormProps>({
  form: 'tableCellForm',
  destroyOnUnmount: true,
  enableReinitialize: true,
})(TableCellForm);
