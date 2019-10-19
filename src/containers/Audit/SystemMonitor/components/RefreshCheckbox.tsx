import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { CheckedBoxIcon, SmallText, UncheckedBoxIcon } from 'components';

const CheckBoxWrapper = styled(Flex)`
  align-items: flex-start;
  cursor: pointer;
`;

interface RefreshCheckboxProps {
  onClick?: () => void;
}

const RefreshCheckbox: React.FC<RefreshCheckboxProps> = ({
  onClick,
}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleClick = React.useCallback(
    () => {
      onClick();
      setIsChecked(!isChecked);
    },
    [isChecked, onClick]
  );

  return (
    <CheckBoxWrapper onClick={handleClick}>
      {isChecked
        ? (<CheckedBoxIcon />)
        : (<UncheckedBoxIcon />)
      }
      <Box ml="5px">
        <SmallText>Refresh table</SmallText>
      </Box>
    </CheckBoxWrapper>
  );
};

export default RefreshCheckbox;
