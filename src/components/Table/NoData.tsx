import * as React from 'react';
import * as styledComponents from 'styled-components';

const { default: styled } = styledComponents;

const NoDataWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 100%;
  pointer-events: none;
`;

interface NoDataProps {
  title: string;
  Icon?: React.ReactNode;
  hint?: string;
}

export const TableNoData: React.FC<NoDataProps> = ({ Icon, title, hint }) => (
  <NoDataWrapper>
    {Icon && <div>{Icon}</div>}
    <div>{title}</div>
    {hint && <div>{hint}</div>}
  </NoDataWrapper>
);
