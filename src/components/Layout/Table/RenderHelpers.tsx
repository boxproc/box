import React from 'react';
import { CellInfo } from 'react-table';

import styled from 'theme';

import { CheckedBoxIcon, UncheckedBoxIcon } from 'components';

import { yesNoTypesCodes } from 'consts';

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
