import React from 'react';

import { NumberFormatInput, SelectInput, TextInput } from 'components';

import { schedulerStatusTypesOptions, statusTypesCodes } from 'consts';

import { TableItemWrapper } from './TableItemWrapper';

import { SelectValues } from 'types';
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
  selectOptions?: Array<SelectValues>;
  defaultSelectValue?: SelectValues;
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
  isDate = false,
  isNumber = false,
  isDecimalNumber = false,
  onCenter = false,
  isSmaller = false,
  isEditable = false,
  isSelect = false,
  toFixedNumber,
  selectOptions,
  defaultSelectValue,
  selectLabel,
  onSelectChange,
}) => {
  const isPendingStatus = React.useMemo(
    () => value === schedulerStatusTypesOptions
      .find(status => status.value === statusTypesCodes.EXECUTION_PENDING).label,
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
