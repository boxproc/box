import React from 'react';

import styled from 'theme';

import { LinkExternalIcon } from './../../Icons';

interface IExternalLinkWrapper {
  grayStyle?: boolean;
}

const ExternalLinkWrapper = styled.a<IExternalLinkWrapper>`
  display: flex;
  align-items: center;
  color: ${({ theme, grayStyle }) => grayStyle ? theme.colors.gray : 'inherit'};
  font-size: 13px;
  text-decoration: none;
  text-transform: capitalize;
  user-select: none;

  ${({ grayStyle }) => grayStyle && `
    font-weight: 500;
  `}

  * {
    transition: all .1s linear;
  }

  &:hover * {
    color: ${({ theme }) => theme.colors.normalAccent};
  }

  &.is-bordered {
    padding: 3px 5px 2px;
    background-color: ${({ theme }) => theme.colors.lighterGray};
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 2px;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.lighterGrayHover};
      box-shadow: ${({ theme }) => theme.shadows.bottomBox};
    }
  }
`;

const LinkIcon = styled(LinkExternalIcon)`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.gray};
`;

interface IExternalLink {
  link: string;
  text: string;
  grayStyle?: boolean;
  className?: string;
}

const ExternalLink: React.FC<IExternalLink> = ({
  link,
  text,
  grayStyle = false,
  className,
}) => {
  return (
    <ExternalLinkWrapper
      href={link}
      title={link}
      grayStyle={grayStyle}
      className={className}
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
