import * as React from 'react';
import * as styledComponents from 'styled-components';

const { default: styled } = styledComponents;

const NoDataWrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 100%;
  pointer-events: none;
  color: ${({ theme}) => theme.grayColor};

  .title {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
  }

  .hint {
    font-size: 16px;
  }
`;

interface NoDataProps {
  title: string;
  Icon?: React.ReactNode;
  hint?: string;
}

export const TableNoData: React.FC<NoDataProps> = ({ Icon, title, hint }) => (
  <NoDataWrapper>
    {Icon && <div>{Icon}</div>}
    <div className="title">{title}</div>
    {hint && <div className="hint">{hint}</div>}
  </NoDataWrapper>
);
