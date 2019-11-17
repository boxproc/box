import React from 'react';

import { NumberFormatInput, TextInput } from 'components';

import { schedulerStatusTypesOptions, statusTypesCodes } from 'consts';

import { TableItemWrapper } from './TableItemWrapper';

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
}) => {
  const isPendingStatus = value === schedulerStatusTypesOptions
    .find(status => status.value === statusTypesCodes.EXECUTION_PENDING).label;

  return (
    <TableItemWrapper
      style={style}
      textRight={isNumber || isDecimalNumber}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      isDate={isDate}
      textCenter={onCenter}
      isAccentColor={isPendingStatus}
      isSmaller={isSmaller}
    >
      {isEditable
        ? isDecimalNumber
          ? (
            <NumberFormatInput
              value={value}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              isEditableCellStyle={true}
            />
          )
          : (
            <TextInput
              value={value}
              isNumber={isNumber}
              isEditableCellStyle={true}
            />
          )
        : value
      }
    </TableItemWrapper>
  );
};
