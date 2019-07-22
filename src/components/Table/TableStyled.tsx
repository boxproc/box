import styled from 'theme';

import 'react-table/react-table.css';

export const TableStyled = styled.div`
  margin-bottom: 20px;

  // .ReactTable,
  // .ReactTable .rt-tbody,
  // .ReactTable .rt-table {
  //   overflow-y: visible !important;
  //   overflow-x: visible !important;
  // }

  .ReactTable .rt-thead .rt-resizable-header-content,
  .ReactTable .rt-thead .rt-th {
    overflow: visible;
  }
  .ReactTable .rt-thead .rt-resizable-header,
  .ReactTable .rt-thead .rt-th.-cursor-pointer  {
    border-left: 1px solid ${({ theme }) => theme.lighterGrayColor} !important;
  }

  .ReactTable .rt-tbody::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .ReactTable .rt-tbody::-webkit-scrollbar-thumb {
    background-color: rgba(38, 46, 62, 0.2);
    border-radius: 5px;
    outline: 1px solid ${({ theme }) => theme.grayColor};
  }

  .ReactTable .rt-tbody::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.grayColor};
    border-radius: 2px;
  }

  .ReactTable .rt-tbody::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .ReactTable {
    height: 100%;
    border: none;
    overflow-y: auto;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  .ReactTable .rt-tbody {
    overflow-y: overlay;
    overflow-x: hidden;
  }

  .ReactTable .rt-td {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    transition: none;
    transition-property: none;
  }

  .ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td {
    padding: 10px;
    outline: 0;
    text-align: left;
  }

  .ReactTable .rt-thead.-header {
    background-color: ${({ theme }) => theme.lightGrayColor};
    box-shadow: none;
  }

  .ReactTable  .rt-th:first-child, .rt-td:first-child {
    padding-left: 20px !important;
  }

  .ReactTable  .rt-th:last-child, .rt-td:last-child {
    padding-right: 20px !important;
  }

  .ReactTable .rt-tbody .rt-tr-group {
    flex: 0 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.lighterGrayColor};
  }

  .ReactTable  .rt-tr-group:hover {
    cursor: default;
    background-color: ${({ theme }) => theme.lighterGrayColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  .ReactTable  .rt-thead .rt-th.-sort-desc, .rt-thead .rt-td.-sort-desc {
    box-shadow: none !important;
  }

  .ReactTable  .rt-thead .rt-th.-sort-asc, .rt-thead .rt-td.-sort-asc {
    box-shadow: none !important;
  }

  .ReactTable  .rt-th, .rt-td {
    border: none !important;
  }

  .ReactTable .rt-tbody .rt-td {
    overflow: visible;
  }

  /* header */
  .ReactTable .-sort-asc .up-icon path,
  .ReactTable .-sort-desc .down-icon path {
    stroke: ${({ theme }) => theme.blackColorOpacity8};
  }
  .ReactTable .rt-thead.-filters input {
    font-size: 13px;
    &:focus {
      border-color: ${({ theme }) => theme.lightAccentColor};
      border-radius: 2px;
    }
  }
`;
