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
  color: ${({ theme }) => theme.colors.gray};

  .title {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  .hint {
    font-size: 16px;
  }
`;

interface NoDataProps {
  title?: string;
  hint?: string;
}

export const TableNoData: React.FC<NoDataProps> = ({
  title = 'No data found',
  hint,
}) => (
    <NoDataWrapper>
      <div className="title">{title}</div>
      {hint && <div className="hint">{hint}</div>}
    </NoDataWrapper>
  );
