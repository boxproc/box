import React from 'react';
import styled from 'theme';

const ListWrapper = styled.table`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  list-style-type: none;

  td {
    padding-bottom: 5px;

    &:first-child {
      color: ${({ theme }) => theme.colors.darkGray};
      text-align: right;
      width: 150px;
      display: inline-block;
      padding-right: 10px;
      padding-right: 10px;
    }
  }
`;

interface IList {
  items: Array<Array<string | number>>;
}

const List: React.FC<IList> = ({ items }) => {
  return (
    <ListWrapper>
      <tbody>
        {items && items.length && items.map((item, index) => (
          <tr key={index}>
            <td>{item[0]}</td>
            <td>{item[1] ? item[1] : '-'}</td>
          </tr>
        ))}
      </tbody>
    </ListWrapper>
  );
};

export default List;
