import React from 'react';

import { LinkExternal } from 'styled-icons/boxicons-regular/LinkExternal';

import styled from 'theme';

interface ExternalLinkWrapperProps {
  grayStyle?: boolean;
}

const ExternalLinkWrapper = styled.a<ExternalLinkWrapperProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, grayStyle }) => grayStyle ? theme.grayColor : 'inherit'};
  font-size: 13px;
  text-decoration: none;
  font-weight: ${({ grayStyle }) => grayStyle ? '500' : 'normal'};
  text-transform: capitalize;

  &:hover * {
    color: ${({ theme }) => theme.normalAccentColor};
  }
`;

const LinkIcon = styled(LinkExternal)`
  margin-right: 5px;
  color: ${({ theme }) => theme.grayColor};
`;

interface ExternalLinkProps {
  link: string;
  text: string;
  grayStyle?: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  link,
  text,
  grayStyle = false,
}) => {
  return (
    <ExternalLinkWrapper
      href={link}
      title={link}
      grayStyle={grayStyle}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkIcon size="14" />
      <span className="text">
        {text}
      </span>
    </ExternalLinkWrapper>
  );
};

export default ExternalLink;
