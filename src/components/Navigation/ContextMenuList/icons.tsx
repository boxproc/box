import React from 'react';

import { Box } from '@rebass/grid';

import { DeleteIcon, EditIcon, FilePdfIcon, LockIcon, PlusIcon, ShortTextIcon } from 'components';
import { iconNamesConst } from 'consts';
import { percent } from 'resources/images';

export const icons = {
  [iconNamesConst.EDIT]: <EditIcon size="13" />,
  [iconNamesConst.DELETE]: <Box ml="-3px"><DeleteIcon size="16" /></Box>,
  [iconNamesConst.LOCK]: <LockIcon size="15" />,
  [iconNamesConst.PLUS]: <PlusIcon size="15" />,
  [iconNamesConst.SHORT_TEXT]: <ShortTextIcon size="16" />,
  [iconNamesConst.FILE_PDF]: <FilePdfIcon size="13" />,
  [iconNamesConst.LOAN]: <Box ml="-3px"><img src={percent} width={15} alt="" /></Box>,
};
