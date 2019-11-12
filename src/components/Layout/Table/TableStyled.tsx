import styled from 'theme';

import 'react-table/react-table.css';

interface TableStyledProps {
  activeRowIndex: number;
  isSmaller?: boolean;
  minHeight?: number;
}

export const TableStyled = styled.div<TableStyledProps>`
  overflow: visible;

  .ReactTable,
  .ReactTable .rt-table {
    overflow: visible;
  }

  .ReactTable {
    height: 100%;
    border: none;

    ${({ minHeight }) => minHeight && `
      min-height: ${minHeight}px;
    `};
  }

  .ReactTable .rt-thead .rt-resizable-header-content,
  .ReactTable .rt-thead .rt-th {
    overflow: visible;
  }

  .ReactTable .rt-thead .rt-resizable-header,
  .ReactTable .rt-thead .rt-th.-cursor-pointer  {
    border-right: 1px solid ${({ theme }) => theme.colors.lighterGray} !important;
    min-width: 80px;
  }

  .ReactTable .rt-td {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    transition: none;
    transition-property: none;
    min-width: 80px;

    ${({ isSmaller }) => isSmaller && `
      padding: 5px 7px;
    `};
  }

  .ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td {
    padding: 6px;
    outline: 0;
    text-align: left;

    ${({ isSmaller }) => isSmaller && `
      padding: 3px;
    `};
  }

  .ReactTable .rt-thead .rt-th > div {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .ReactTable .rt-thead.-header {
    background-color: ${({ theme }) => theme.colors.lightGray};
    box-shadow: none;
  }

  .ReactTable .rt-tbody {
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .ReactTable .rt-tbody .rt-tr-group,
  .ReactTable .rt-tbody .rt-tr-group:last-child {
    position: relative;
    flex: 0 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lighterGray};
  }

  .ReactTable .rt-tbody .rt-tr-group:last-child {
    border-bottom: 0;
  }

  .ReactTable .rt-tr-group:hover,
  .ReactTable .rt-tbody .rt-tr-group:last-child:hover {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.lighterGray};
    box-shadow: ${({ theme }) => theme.shadows.normalBox};
  }

  .ReactTable .rt-tbody .rt-tr-group:hover:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: o;
    height: 100%;
    width: 0.12rem;
    display: block;
    background-image: linear-gradient(to bottom, hsla(0,0%,0%,0) 0,
      ${({ theme }) => theme.colors.lighterAccent} 50%,
      hsla(0,0%,0%,0) 100%);
  }

  ${({ activeRowIndex, theme }) => activeRowIndex && `
    .ReactTable .rt-tbody .rt-tr-group:nth-child(${activeRowIndex}) {
      background-color: ${theme.colors.lighterGray};
      box-shadow: ${theme.shadows.normalBox};
    }
    .ReactTable .rt-tbody .rt-tr-group:nth-child(${activeRowIndex}):before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: o;
      height: 100%;
      width: 0.12rem;
      display: block;
      background-image: linear-gradient(to bottom, hsla(0,0%,0%,0) 0,
        ${theme.colors.lighterAccent} 50%,
        hsla(0,0%,0%,0) 100%);
    }
  `}


  .ReactTable .rt-thead .rt-th.-sort-desc, .rt-thead .rt-td.-sort-desc {
    box-shadow: none !important;
  }

  .ReactTable  .rt-thead .rt-th.-sort-asc, .rt-thead .rt-td.-sort-asc {
    box-shadow: none !important;
  }

  .ReactTable  .rt-th, .rt-td {
    border: none !important;
  }

  .ReactTable .rt-tbody .rt-td {
    word-break: break-word;
  }

  .ReactTable .-sort-asc .up-icon path,
  .ReactTable .-sort-desc .down-icon path {
    stroke: ${({ theme }) => theme.colors.black};
  }

  .ReactTable .rt-thead.-filters input {
    font-size: 13px;
    &:focus {
      border-color: ${({ theme }) => theme.colors.normalAccent};
      border-radius: 2px;
    }
  }

  .ReactTable .-pagination {
    justify-content: flex-start;
    box-shadow: none;
    border-top: 1px solid ${({ theme }) => theme.colors.lighterGray};
  }

  .ReactTable .-pagination .-pageInfo,
  .ReactTable .-pagination .-pageJump input {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.gray};

    ${({ isSmaller }) => isSmaller && `
      font-size: 10px;
    `};
  }

  .ReactTable .-pagination .-pageJump input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .ReactTable .-pagination .-pageJump input:focus {
    border-color: ${({ theme }) => theme.colors.normalAccent};
  }

  .ReactTable .-pagination .-pageInfo {
    margin: 3px 20px;
  }

  .ReactTable .-pagination .-btn {
    width: auto;
    background: transparent;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: .2pt;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    line-height: 1.3;

    ${({ isSmaller }) => isSmaller && `
      font-size: 9px;
    `};
  }

  .ReactTable .-pagination .-previous,
  .ReactTable .-pagination .-next,
  .ReactTable .-pagination .-center {
    flex: none;
  }

  .ReactTable .-pagination .-btn:not([disabled]):hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.lighterAccent};
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .ReactTable .rt-resizer {
    width: 8px;
    right: -4px;
  }

  .ReactTable .rt-th:last-child .rt-resizer {
    display: none;
  }
`;
