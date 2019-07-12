import React from 'react';

import styled from 'styled-components';

import { T3 } from 'components/Text';

const FilterWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const TableFilterContainer: React.FC = ({
  children,
}) => {
  return (
    <FilterWrapper>
      <T3>Filters</T3>
      {children}
    </FilterWrapper >
  );
};

export default TableFilterContainer;
