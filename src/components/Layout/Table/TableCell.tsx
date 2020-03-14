import React, { ReactChild } from 'react';

import { NumberFormatInput, SelectInput, TextInput } from 'components';

import { schedulerStatusOptions, statusConst } from 'consts';

import { TableItemWrapper } from './TableItemWrapper';

import { SelectValue } from 'types';
import { stringsUtil } from 'utils';

interface TableCellProps {
  value: string | number;
  style?: object;
  isDate?: boolean;
  isNumber?: boolean;
  isDecimalNumber?: boolean;
  onCenter?: boolean;
  isSmaller?: boolean;
  isEditable?: boolean;
  isSelect?: boolean;
  Icon?: ReactChild;
  selectOptions?: Array<SelectValue>;
  defaultSelectValue?: SelectValue;
  selectLabel?: string;
  toFixedNumber?: number;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  onBlur?: any;
  onSelectChange?: any;
}

export const TableCell: React.FC<TableCellProps> = ({
  value,
  style,
  onBlur,
  onKeyUp,
  isDate,
  isNumber,
  isDecimalNumber,
  onCenter,
  isSmaller,
  isEditable,
  isSelect,
  Icon,
  toFixedNumber,
  selectOptions,
  defaultSelectValue,
  selectLabel,
  onSelectChange,
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
