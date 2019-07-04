import styled from 'styled-components';

import { menuClasses } from './utils';

export const NavList = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  .chevron-icon {
    transform: rotate(-90deg);
  }
  .highlight-link {
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.lightGrayColor};
    line-height: 1.4;
    &:hover {
      border-bottom-color: ${({ theme }) => theme.lighterAccentColor};
    }
  }
  .${menuClasses.MENU_ITEM}  {
    position: relative;
    cursor: pointer;
    margin: 0 15px;
    // &:before {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   top: 0;
    //   left: -10px;
    //   right: -10px;
    //   bottom: -30px;
    //   background: yellow;
    // }
    &.${menuClasses.ACTIVE} {
      & > .${menuClasses.SUB_MENU} {
        display: block;
      }
      & > .highlight-link {
        border-bottom-color: ${({ theme }) => theme.lighterAccentColor};
      }
    }
  }
  .${menuClasses.SUB_MENU} {
    position: absolute;
    left: -10px;
    top: calc(100% + 24px);
    display: flex;
    flex-direction: column;
    display: none;
    width: 200px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.whiteColor};
    font-size: 14px;
    .${menuClasses.SUB_MENU} {
      left: 100%;
      top: 0;
    }
    .${menuClasses.MENU_ITEM} {
      padding: 10px;
      margin: 0;
      &:not(:first-child) {
        border-top: 1px solid ${({ theme }) => theme.lighterGrayColor};
      }
      &.${menuClasses.ACTIVE},
      &:hover {
        & > .${menuClasses.MENU_TITLE} {
          color: ${({ theme }) => theme.normalAccentColor};
          .chevron-icon path {
            stroke: ${({ theme }) => theme.normalAccentColor};
          }
        }
      }
    }
  }
`;
