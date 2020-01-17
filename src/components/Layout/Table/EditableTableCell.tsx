import React from 'react';
import { CellInfo } from 'react-table';

import { codeKeys } from 'consts';

import { TableCell } from './TableCell';

import { SelectValue } from 'types';

interface EditableTableCellProps {
  updateAction: (data: object) => void;
  isSmaller?: boolean;
  isNumber?: boolean;
  isDecimalNumber?: boolean;
  isEditable?: boolean;
  cellInfo: CellInfo;
  isSelect?: boolean;
  selectOptions?: Array<SelectValue>;
}

const EditableTableCell: React.FC<EditableTableCellProps> = ({
  updateAction,
  isSmaller,
  isNumber,
  isDecimalNumber,
  isEditable = true,
  cellInfo,
  isSelect,
  selectOptions,
}) => {
  const handleSelectValue = React.useCallback(
    (value: SelectValue) => {
      if (value) {
        updateAction({
          ...cellInfo.original,
          [cellInfo.column.id]: value,
        });
      }
    },
    [cellInfo, updateAction]
  );

  const updateCellInfo = React.useCallback(
    (e: React.MouseEvent) => {
      const el = e.target as HTMLInputElement;
      const newValue = el.value.toString();
      const currentValue = cellInfo.value.toString();
      const isChanged = currentValue !== newValue;

      isChanged && updateAction({
        ...cellInfo.original,
        [cellInfo.column.id]: newValue === '' ? null : newValue,
      });
    },
    [updateAction, cellInfo]
  );

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === codeKeys.ENTER) {
      const el = e.target as HTMLElement;
      el.blur();
    }
  };

  return (
    <TableCell
      value={cellInfo.value}
      isEditable={isEditable}
      onBlur={isSelect ? null : updateCellInfo}
      isNumber={isNumber}
      isDecimalNumber={isDecimalNumber}
      isSmaller={isSmaller}
      isSelect={isSelect}
      defaultSelectValue={cellInfo.value}
      selectLabel={cellInfo.value.label}
      selectOptions={selectOptions}
      onSelectChange={isSelect ? handleSelectValue : null}
      onKeyUp={isSelect ? null : handleKeyUp}
    />
  );
};

export default EditableTableCell;
