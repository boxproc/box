import React from 'react';
import { CellInfo } from 'react-table';

import styled from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from 'components';

import { codeKeys, yesNoTypesCodes } from 'consts';

import { TableCell } from './Table';

export const renderEditableTableCell = (data: {
  updateAction: (data: object) => void,
  isSmaller?: boolean,
  isNumber?: boolean,
  isDecimalNumber?: boolean;
  isAlwaysEditable?: boolean,
}) =>
  (cellInfo: CellInfo) => {
    const { updateAction, isSmaller, isNumber, isDecimalNumber, isAlwaysEditable } = data;
    const isEditable = cellInfo.row.lockedFlag === false || isAlwaysEditable;

    const updateCellInfo = (e: React.MouseEvent) => {
      const el = e.target as HTMLInputElement;
      const newValue = el.value;
      const isChanged = cellInfo.value.toString() !== newValue;

      isChanged && updateAction({
        ...cellInfo.original,
        [cellInfo.column.id]: newValue,
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
        onKeyUp={handleKeyUp}
      />
    );
  };

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 2px;
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
