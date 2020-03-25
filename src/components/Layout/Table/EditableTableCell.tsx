import React from 'react';
import { CellInfo } from 'react-table';

import { codeKeysConst } from 'consts';

import { TableCell } from './TableCell';

import { ISelectValue } from 'types';

interface EditableTableCellProps {
  cellInfo: CellInfo;
  isDecimalNumber?: boolean;
  isEditable?: boolean;
  isNumber?: boolean;
  isSelect?: boolean;
  isSmaller?: boolean;
  selectOptions?: Array<ISelectValue>;
  updateAction: (data: object) => void;
}

const EditableTableCell: React.FC<EditableTableCellProps> = ({
  cellInfo,
  isDecimalNumber,
  isEditable = true,
  isNumber,
  isSelect,
  isSmaller,
  selectOptions,
  updateAction,
}) => {
  const handleSelectValue = React.useCallback(
    (value: ISelectValue) => {
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
    if (e.key === codeKeysConst.ENTER) {
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
