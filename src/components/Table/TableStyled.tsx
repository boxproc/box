import styled from 'theme';

export const TableStyled = styled.div`
  margin-top: 30px;
  font-size: 14px;

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
    -webkit-box-shadow: inset 0 0 5px ${({ theme }) => theme.grayColor};
    border-radius: 2px;
  }

  .ReactTable .rt-tbody::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* ie11 hack */
  /* _:-ms-fullscreen, :root .rt-table {
      flex: none;
      overflow: visible;
  } */

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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 8px;
    transition: none;
    -webkit-transition: none;
    -o-transition: none;
    transition-property: none;
    -webkit-transition-property: none;
    -o-transition-property: none;
  }

  .ReactTable .rt-thead .rt-th, .ReactTable .rt-thead .rt-td {
    padding: 10px 8px;
    outline: 0;
    text-align: left;
  }

  .ReactTable .rt-thead.-header {
    background-color: ${({ theme }) => theme.lightGrayColor};
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }

  .rt-th, .rt-td {
    border: none !important;
  }

  .rt-th:first-child, .rt-td:first-child {
    padding-left: 30px !important;
  }

  .rt-th:last-child, .rt-td:last-child {
    padding-right: 30px !important;
  }

  .rt-th div {
    height: 100%;
  }

  .ReactTable .rt-tbody .rt-tr-group {
    flex: 0 0 0;
    min-height: 45px;
    border-bottom: 1px solid ${({ theme }) => theme.lighterGrayColor};
  }
    // .ReactTable .rt-tbody .rt-tr-group:last-child {
    //   border-bottom: solid 1px rgba(11, 19, 43, 0.2);
    // }

  /* .rt-tr-group:last-child {
    margin-bottom: 15px;
  } */

  .rt-tr-group:hover {
    cursor: default;
    background-color: ${({ theme }) => theme.lighterGrayColor};
  }
  .rt-thead .rt-th.-sort-desc, .rt-thead .rt-td.-sort-desc {
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
  }

  .rt-thead .rt-th.-sort-asc, .rt-thead .rt-td.-sort-asc {
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
  }

  /* header */
  .-sort-asc .up-icon path {
    stroke: #0B132B;
  }

  .-sort-desc .down-icon path {
    stroke: #0B132B;
  }
`;
