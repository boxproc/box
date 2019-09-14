import React from 'react';

import styled from 'theme';

import { T3 } from 'components/Text';

const FilterWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px 20px 15px;
  border: 1px solid ${({ theme }) => theme.colors.lighterGray};
  border-radius: 2px;
  background-color: rgba(0, 0, 0, .02)};
`;

const TableFilterContainer: React.FC = ({
  children,
}) => {
  return (
    <FilterWrapper>
      <T3>Filter</T3>
      {children}
    </FilterWrapper >
  );
};

export default TableFilterContainer;
