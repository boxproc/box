import React from 'react';
import styled from 'theme';

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
  hint?: string | React.ReactChild;
  title?: string;
}

export const TableNoData: React.FC<NoDataProps> = ({
  hint,
  title = 'No data found',
}) => (
    <NoDataWrapper>
      <div className="title">{title}</div>
      {hint && (
        <div className="hint">{hint}</div>
      )}
    </NoDataWrapper>
  );
