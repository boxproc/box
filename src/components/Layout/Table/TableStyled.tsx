import styled from 'theme';

import 'react-table/react-table.css';

import { scrollbarCss } from 'theme/scrollbarCss';

interface TableStyledProps {
  activeRowIndex: number;
  isSmaller?: boolean;
  minHeight?: number;
  isScrollbar?: boolean;
}

export const TableStyled = styled.div<TableStyledProps>`
  box-shadow: ${({ theme }) => theme.shadows.normalBox};
  overflow: ${({ isScrollbar }) => isScrollbar ? 'auto' : 'visible'};
  ${scrollbarCss}

  .ReactTable {
    height: 100%;
    border: none;
    overflow: visible;

    ${({ minHeight }) => minHeight && `
      min-height: ${minHeight}px;
    `};

    .rt-table {
      overflow: visible;
    }

    .rt-thead .rt-resizable-header-content,
    .rt-thead .rt-th {
      overflow: visible;
    }

    .rt-thead .rt-resizable-header,
    .rt-thead .rt-th.-cursor-pointer  {
      border-right: 1px solid ${({ theme }) => theme.colors.lighterGray};
      min-width: 50px;
    }

    .rt-td {
      display: flex;
      align-items: center;
      padding: 0;
      transition: none;
      transition-property: none;
      min-width: 50px;
    }

    .rt-thead .rt-th,
    .rt-thead .rt-td {
      padding: 0;
      outline: 0;
      text-align: left;

      ${({ isSmaller }) => isSmaller && `
        padding: 3px;
      `};
    }

    .rt-thead .rt-th > div {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }

    .rt-thead.-header {
      background-color: ${({ theme }) => theme.colors.lightGray};
      box-shadow: none;
    }

    .rt-tbody {
      overflow: visible;
      background-color: ${({ theme }) => theme.colors.white};
    }

    .rt-tbody .rt-tr-group,
    .rt-tbody .rt-tr-group:last-child {
      position: relative;
      flex: 0 0 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lighterGray};
      transition: all .1s linear;
    }

    .rt-tr-group:hover,
    .rt-tbody .rt-tr-group:last-child:hover {
      cursor: default;
      background-color: ${({ theme }) => theme.colors.lighterGray};
      box-shadow: ${({ theme }) => theme.shadows.normalBox};
    }

    .rt-tbody .rt-tr-group:hover:before {
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
      .rt-tbody .rt-tr-group:nth-child(${activeRowIndex}) {
        background-color: ${theme.colors.lighterGray};
        box-shadow: ${theme.shadows.normalBox};
      }

      .rt-tbody .rt-tr-group:nth-child(${activeRowIndex}):before {
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

    .rt-thead .rt-th.-sort-desc,
    .rt-thead .rt-td.-sort-desc {
      box-shadow: none;
    }

    .rt-thead .rt-th.-sort-asc,
    .rt-thead .rt-td.-sort-asc {
      box-shadow: none;
    }

    .rt-tbody .rt-th,
    .rt-tbody .rt-td {
      border-right: none;
    }

    .rt-tbody .rt-td {
      word-break: break-word;
      overflow: visible;
    }

    .-sort-asc .up-icon path,
    .-sort-desc .down-icon path {
      stroke: ${({ theme }) => theme.colors.black};
    }

    .rt-thead.-filters input {
      font-size: 13px;
      &:focus {
        border-color: ${({ theme }) => theme.colors.normalAccent};
        border-radius: 2px;
      }
    }

    .-pagination {
      justify-content: flex-start;
      box-shadow: none;
      border-top: 0;
    }

    .-pagination .-pageInfo,
    .-pagination .-pageJump input {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.gray};

      ${({ isSmaller }) => isSmaller && `
        font-size: 10px;
      `};
    }

    .-pagination .-pageJump input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    .-pagination .-pageJump input:focus {
      border-color: ${({ theme }) => theme.colors.normalAccent};
    }

    .-pagination .-pageInfo {
      margin: 3px 20px;
    }

    .-pagination .-btn {
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

    .-pagination .-previous,
    .-pagination .-next,
    .-pagination .-center {
      flex: none;
    }

    .-pagination .-btn:not([disabled]):hover {
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

    .rt-resizer {
      width: 8px;
      right: -4px;
    }

    .rt-th:last-child .rt-resizer {
      display: none;
    }
  }
`;
