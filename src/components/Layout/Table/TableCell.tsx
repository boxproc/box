import React, { ReactChild } from 'react';

import { NumberFormatInput, SelectInput, TextInput } from './../../Inputs';

import { schedulerStatusOptions, statusConst } from 'consts';

import { TableItemWrapper } from './TableItemWrapper';

import { SelectValue } from 'types';
import { stringsUtil } from 'utils';

interface TableCellProps {
  defaultSelectValue?: SelectValue;
  Icon?: ReactChild;
  isDate?: boolean;
  isDecimalNumber?: boolean;
  isEditable?: boolean;
  isNumber?: boolean;
  isSelect?: boolean;
  isSmaller?: boolean;
  onBlur?: any;
  onCenter?: boolean;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  onSelectChange?: any;
  selectLabel?: string;
  selectOptions?: Array<SelectValue>;
  style?: object;
  toFixedNumber?: number;
  value: string | number;
}

export const TableCell: React.FC<TableCellProps> = ({
  defaultSelectValue,
  Icon,
  isDate,
  isDecimalNumber,
  isEditable,
  isNumber,
  isSelect,
  isSmaller,
  onBlur,
  onCenter,
  onKeyUp,
  onSelectChange,
  selectLabel,
  selectOptions,
  style,
  toFixedNumber,
  value,
}) => {
  const isPendingStatus = React.useMemo(
    () => value === schedulerStatusOptions
      .find(status => status.value === statusConst.EXECUTION_PENDING).label,
    [value]
  );

  const renderFields = () => {
    if (isDecimalNumber) {
      return (
        <NumberFormatInput
          value={value}
          placeholder="0.00"
          fixedDecimalScale={true}
          decimalScale={2}
          isEditableCellStyle={true}
        />
      );
    } else if (isSelect) {
      return (
        <SelectInput
          placeholder="Select APR"
          isClearable={false}
          options={selectOptions}
          defaultValue={defaultSelectValue}
          isEditableCellStyle={true}
          onChange={onSelectChange}
        />
      );
    } else {
      return (
        <TextInput
          value={value}
          isNumber={isNumber}
          isEditableCellStyle={true}
        />
      );
    }
  };

  return (
    <TableItemWrapper
      style={style}
      textRight={isNumber || isDecimalNumber}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      isDate={isDate}
      isEditable={isEditable}
      isSelect={isSelect}
      textCenter={onCenter}
      isAccentColor={isPendingStatus}
      isSmaller={isSmaller}
    >
      {Icon}
      {isEditable
        ? renderFields()
        : isSelect
          ? selectLabel
          : toFixedNumber
            ? stringsUtil.numberToFixed(value, toFixedNumber)
            : value
      }
    </TableItemWrapper>
  );
};
