import React from 'react';

import { LinkExternal } from 'styled-icons/boxicons-regular/LinkExternal';

import styled from 'styled-components';

interface ExternalLinkWrapperProps {
  grayStyle?: boolean;
  underline?: boolean;
}

const ExternalLinkWrapper = styled.a<ExternalLinkWrapperProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, grayStyle }) => grayStyle ? theme.grayColor : 'inherit'};
  font-size: 13px;
  text-decoration: none;
  font-weight: ${({ grayStyle }) => grayStyle ? '500' : 'normal'};
  text-transform: capitalize;

  ${({ theme, underline }) => underline && `
    .text {
      border-bottom: 1px solid transparent;
    }

    &:hover .text {
      border-bottom-color: ${theme.normalAccentColor};
    }
  `}

  ${({ theme, underline }) => !underline && `
    &:hover * {
      color: ${theme.normalAccentColor};
    }
  `}
`;

const LinkIcon = styled(LinkExternal)`
  margin-right: 5px;
  color: ${({ theme }) => theme.grayColor};
`;

interface ExternalLinkProps {
  link: string;
  text: string;
  grayStyle?: boolean;
  underline?: boolean;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  link,
  text,
  grayStyle = false,
  underline = false,
}) => {
  return (
    <ExternalLinkWrapper
      href={link}
      title={link}
      grayStyle={grayStyle}
      underline={underline}
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
