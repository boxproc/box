import React from 'react';

import { NumberFormatInput, SelectInput, TextInput } from 'components';

import { schedulerStatusTypesOptions, statusTypesCodes } from 'consts';

import { TableItemWrapper } from './TableItemWrapper';

import { SelectValues } from 'types';

interface TableCellProps {
  value: string | number;
  style?: object;
  onBlur?: any;
  onKeyUp?: (e: React.KeyboardEvent) => void;
  isDate?: boolean;
  isNumber?: boolean;
  isDecimalNumber?: boolean;
  onCenter?: boolean;
  isSmaller?: boolean;
  isEditable?: boolean;
  isSelect?: boolean;
  selectOptions?: Array<SelectValues>;
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
  selectOptions,
}) => {
  const isPendingStatus = value === schedulerStatusTypesOptions
    .find(status => status.value === statusTypesCodes.EXECUTION_PENDING).label;

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
          isDisabled={false}
          isClearable={false}
          options={selectOptions}
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
      textCenter={onCenter}
      isAccentColor={isPendingStatus}
      isSmaller={isSmaller}
    >
      {isEditable
        ? renderFields()
        : value
      }
    </TableItemWrapper>
  );
};
