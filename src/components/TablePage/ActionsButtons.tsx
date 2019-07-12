import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { Button } from 'components/Buttons';

import { OpenModal } from 'store/domains';

interface ActionsButtonsProps {
  isAddNewButton?: boolean;
  openModal?: OpenModal;
  addNewModalName?: string;

  isFilterButton?: boolean;
  isFilter?: boolean;
  onFilterButtonClick?: () => void;
}

const ActionsButtons: React.FC<ActionsButtonsProps> = ({
  isAddNewButton,
  openModal,
  addNewModalName,

  isFilterButton,
  isFilter,
  onFilterButtonClick,
}) => {
  return (
    <Flex alignItems="center">
      {isAddNewButton &&
        <Box mb="7px" mr="13px">
          <Button
            text="Add New"
            icon="&#43;"
            transparent={true}
            onClick={() => openModal({
              name: addNewModalName,
            })}
          />
        </Box>
      }
      {isFilterButton &&
        <Box mb="7px">
          <Button
            text={(isFilter ? 'Hide' : 'Show') + ' Filters'}
            transparent={true}
            onClick={onFilterButtonClick}
          />
        </Box>
      }
    </Flex>
  );
};

export default ActionsButtons;
