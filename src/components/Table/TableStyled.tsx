﻿import styled from 'theme';

import 'react-table/react-table.css';

interface TableStyledProps {
  activeRowChild: number;
}

export const TableStyled = styled.div<TableStyledProps>`
  margin-bottom: 20px;

  .ReactTable .rt-thead .rt-resizable-header-content,
  .ReactTable .rt-thead .rt-th {
    overflow: visible;
  }
  .ReactTable .rt-thead .rt-resizable-header,
  .ReactTable .rt-thead .rt-th.-cursor-pointer  {
    border-right: 1px solid ${({ theme }) => theme.lighterGrayColor} !important;
  }

  .ReactTable .rt-tbody::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .ReactTable .rt-tbody::-webkit-scrollbar-thumb {
    background-color: rgba(38, 46, 62, 0.2);
    border-radius: 5px;
    outline: 1px solid ${({ theme }) => theme.normalAccentColor};
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
    padding: 6px;
    outline: 0;
    text-align: left;
  }

  .ReactTable .rt-thead .rt-th > div {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .ReactTable .rt-thead.-header {
    background-color: ${({ theme }) => theme.lightGrayColor};
    box-shadow: none;
  }

  .ReactTable .rt-tbody .rt-tr-group,
  .ReactTable .rt-tbody .rt-tr-group:last-child {
    position: relative;
    flex: 0 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.lighterGrayColor};
  }

  .ReactTable .rt-tr-group:hover,
  .ReactTable .rt-tbody .rt-tr-group:last-child:hover {
    cursor: default;
    background-color: ${({ theme }) => theme.lighterGrayColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
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
      ${({ theme }) => theme.lighterAccentColor} 50%,
      hsla(0,0%,0%,0) 100%);
  }

  ${({ activeRowChild, theme }) => activeRowChild && `
    .ReactTable .rt-tbody .rt-tr-group:nth-child(${activeRowChild}) {
      background-color: ${theme.lighterGrayColor};
      box-shadow: ${theme.boxShadow};
    }
    .ReactTable .rt-tbody .rt-tr-group:nth-child(${activeRowChild}):before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: o;
      height: 100%;
      width: 0.12rem;
      display: block;
      background-image: linear-gradient(to bottom, hsla(0,0%,0%,0) 0,
        ${theme.lighterAccentColor} 50%,
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
    overflow: visible;
    word-break: break-word;
  }

  /* header */
  .ReactTable .-sort-asc .up-icon path,
  .ReactTable .-sort-desc .down-icon path {
    stroke: ${({ theme }) => theme.blackColor};
  }

  .ReactTable .rt-thead.-filters input {
    font-size: 13px;
    &:focus {
      border-color: ${({ theme }) => theme.normalAccentColor};
      border-radius: 2px;
    }
  }

  .ReactTable .-pagination {
    justify-content: flex-start;
    box-shadow: none;
    border-top: 1px solid ${({ theme }) => theme.lighterGrayColor};
  }

  .ReactTable .-pagination .-pageInfo,
  .ReactTable .-pagination .-pageJump input {
    font-size: 12px;
    color: ${({ theme }) => theme.grayColor};
  }

  .ReactTable .-pagination .-pageJump input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .ReactTable .-pagination .-pageJump input:focus {
    border-color: ${({ theme }) => theme.normalAccentColor};
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
    color: ${({ theme }) => theme.grayColor };
    font-weight: 500;
    line-height: 1.3;
  }

  .ReactTable .-pagination .-previous,
  .ReactTable .-pagination .-next,
  .ReactTable .-pagination .-center {
    flex: none;
  }

  .ReactTable .-pagination .-btn:not([disabled]):hover {
    background: transparent;
    color: ${({ theme }) => theme.lighterAccentColor};
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
