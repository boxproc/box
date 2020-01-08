import React from 'react';

import styled from 'theme';

import { LinkExternalIcon } from 'components';

interface ExternalLinkWrapperProps {
  grayStyle?: boolean;
}

const ExternalLinkWrapper = styled.a<ExternalLinkWrapperProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, grayStyle }) => grayStyle ? theme.colors.gray : 'inherit'};
  font-size: 13px;
  text-decoration: none;
  font-weight: ${({ grayStyle }) => grayStyle ? '500' : 'normal'};
  text-transform: capitalize;

  * {
    transition: all .1s linear;
  }

  &:hover * {
    color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

const LinkIcon = styled(LinkExternalIcon)`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.gray};
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
