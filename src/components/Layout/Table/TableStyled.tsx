﻿import 'react-table/react-table.css';

import styled, { theme as themeColors } from 'theme';
import { scrollbarCss } from 'theme/styles';

const gradients = {
  rowActive: `linear-gradient(to bottom,
    hsla(0,0%,0%,0) 0, ${themeColors.colors.lighterAccent} 50%,
    hsla(0,0%,0%,0) 100%)`,
  cellWhite: 'linear-gradient(to right, rgba(255, 255, 255, .6) 0%,rgba(255, 255, 255,1) 100%)',
  cellGray: 'linear-gradient(to right, rgba(243, 243, 243, .6) 0%,rgba(243, 243, 243,1) 100%)',
};

interface ITableStyled {
  activeRowIndex: number;
  isScrollbar?: boolean;
  isSmaller?: boolean;
  isNoData?: boolean;
}

export const TableStyled = styled.div<ITableStyled>`
  .ReactTable {
    height: 100%;
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.normalBox};
    overflow-x: ${({ isScrollbar }) => isScrollbar ? 'auto' : 'visible'};
    ${scrollbarCss};

    ${({ isNoData }) => isNoData && `
      overflow: hidden;
    `};

    .rt-table, .rt-tbody {
      display: block;
      overflow: visible;
    }

    ${({ isScrollbar }) => !isScrollbar && `
      .rt-tbody .rt-td {
        overflow: visible;
      }
    `};

    .rt-thead .rt-th, .rt-tbody .rt-td {
      padding: 0;
    }

    .rt-thead .rt-th {
      border-right: 1px solid ${({ theme }) => theme.colors.lighterGray};
    }

    .rt-thead .rt-th,
    .rt-thead .rt-resizable-header,
    .rt-thead .rt-th.-cursor-pointer,
    .rt-tbody .rt-td {
      min-width: 50px;
    }

    .rt-thead .rt-th > div {
      display: flex;
      height: 100%;
    }

    .rt-resizer {
      width: 8px;
      right: -4px;
    }

    .rt-th:last-child .rt-resizer {
      display: none;
    }

    .rt-thead.-header {
      background-color: ${({ theme }) => theme.colors.lightGray};
      box-shadow: none;
    }

    .rt-thead .rt-th.-sort-asc {
      box-shadow: inset 0 3px 0 0 ${({ theme }) => theme.colors.gray};
    }

    .rt-thead .rt-th.-sort-desc {
      box-shadow: inset 0 -3px 0 0 ${({ theme }) => theme.colors.gray};
    }

    .rt-thead.-filters input {
      font-size: 13px;
      transition: all .1s linear;

      &:focus {
        border-color: ${({ theme }) => theme.colors.normalAccent};
        border-radius: 2px;
      }
    }

    .rt-tbody {
      background-color: ${({ theme }) => theme.colors.white};
    }

    .rt-tbody .rt-td {
      display: flex;
      min-width: 50px;
      text-align: left;
    }

    .rt-tbody .rt-tr-group,
    .rt-tbody .rt-tr-group:last-child {
      position: relative;
      flex: 0 0 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lighterGray};
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
      background-image: ${gradients.rowActive};
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
        background-image: ${gradients.rowActive};
      }
    `}

    .rt-tbody .rt-td {
      position: relative;
      border-right: none;

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: 3px;
        bottom: 3px;
        right: 0;
        width: 5px;
        background: ${gradients.cellWhite};
      }
    }

    .rt-tbody .rt-tr-group:hover .rt-td:before {
      background: ${gradients.cellGray};
    }

    ${({ activeRowIndex }) => activeRowIndex && `
      .rt-tbody .rt-tr-group:nth-child(${activeRowIndex}) .rt-td:before {
        background: ${gradients.cellGray};
      }
    `};

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
  }
`;
