import React from 'react';

import { Box, Flex } from '@rebass/grid';

import { ExternalLink, T2 } from 'components';
import { HandleGetHelpLink } from 'store';

interface IPageTitle {
  getHelpLink: HandleGetHelpLink;
  helpLink: string;
  pageId: string;
  title: string;
}

export const PageTitle: React.FC<IPageTitle> = ({
  getHelpLink,
  helpLink,
  pageId,
  title,
}) => {
  React.useEffect(
    () => {
      getHelpLink(pageId);
    },
    [getHelpLink, pageId]
  );

  return (
    <Flex alignItems="baseline">
      <Box mr="10px">
        <ExternalLink
          text="HELP"
          link={helpLink}
          grayStyle={true}
        />
      </Box>
      <T2>{title}</T2>
    </Flex>
  );
};

export default PageTitle;
