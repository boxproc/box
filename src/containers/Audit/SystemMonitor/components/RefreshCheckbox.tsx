import React from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { CheckedBoxIcon, SmallText, UncheckedBoxIcon } from 'components';

const CheckBoxWrapper = styled(Flex)`
  align-items: flex-start;
  cursor: pointer;
`;

interface IRefreshCheckbox {
  value: boolean;
  onClick: () => void;
}

const RefreshCheckbox: React.FC<IRefreshCheckbox> = ({
  value,
  onClick,
}) => {
  const [isChecked, setIsChecked] = React.useState(value);

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
      <Box ml="5px" mb="3px">
        <SmallText>Refresh table</SmallText>
      </Box>
    </CheckBoxWrapper>
  );
};

export default RefreshCheckbox;
