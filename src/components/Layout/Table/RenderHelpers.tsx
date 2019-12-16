import React from 'react';
import { CellInfo } from 'react-table';

import styled from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from 'components';

import { codeKeys, yesNoTypesCodes } from 'consts';

import { TableCell } from './TableCell';

import { SelectValues } from 'types';

export const renderEditableTableCell = (data: {
  updateAction: (data: object) => void,
  isSmaller?: boolean,
  isNumber?: boolean,
  isDecimalNumber?: boolean;
  isEditable?: boolean,
  cellInfo: CellInfo;
  isSelect?: boolean;
  selectOptions?: Array<SelectValues>;
}) => {
  const {
    updateAction,
    isSmaller,
    isNumber,
    isDecimalNumber,
    isEditable = true,
    cellInfo,
    isSelect,
    selectOptions,
  } = data;

  if (!cellInfo) {
    return false;
  }

  const updateCellInfo = (e: React.MouseEvent) => {
    const el = e.target as HTMLInputElement;
    const newValue = !isSelect && el.value.toString();
    const currentValue = cellInfo.value.toString();
    const isChanged = currentValue !== newValue;

    isChanged && updateAction({
      ...cellInfo.original,
      [cellInfo.column.id]: newValue === '' ? null : newValue,
    });
  };

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
      onBlur={updateCellInfo}
      isNumber={isNumber}
      isDecimalNumber={isDecimalNumber}
      isSmaller={isSmaller}
      isSelect={isSelect}
      selectOptions={selectOptions}
      onKeyUp={handleKeyUp}
    />
  );
};

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const renderCheckBoxTableCell = (updateAction?: (data: object) => void) =>
  (cellInfo: CellInfo) => {
    const isLocked = cellInfo.value === true;
    const values = cellInfo.original;

    const handleClick = () => updateAction && updateAction({
      ...values,
      lockedFlag: yesNoTypesCodes.YES,
    });

    return (
      <CheckBoxWrapper>
        {
          isLocked
            ? (<CheckedBoxIcon />)
            : (
              <div
                style={{ cursor: updateAction && 'pointer' }}
                onClick={handleClick}
              >
                <UncheckedBoxIcon />
              </div>
            )
        }
      </CheckBoxWrapper>
    );
  };
