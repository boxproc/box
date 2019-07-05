import styled from 'styled-components';

import { menuClasses } from './utils';

export const NavList = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  .chevron-icon {
    transform: rotate(-90deg);
  }
  .highlight-link {
    position: relative;
    // border-bottom: 1px solid ${({ theme }) => theme.lightGrayColor};
    border-bottom: 1px solid transparent;
    line-height: 1.4;
    &:hover {
      border-bottom-color: ${({ theme }) => theme.lighterAccentColor};
    }
  }
  .${menuClasses.MENU_TITLE} {
    position: relative;
    cursor: pointer;
    padding: 10px;
  }
  .${menuClasses.MENU_ITEM}  {
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: -10px;
      right: -10px;
      bottom: -20px;
      cursor: default;
    }
    &.${menuClasses.ACTIVE} {
      & > .${menuClasses.SUB_MENU} {
        display: block;
      }
      & > .${menuClasses.MENU_TITLE} {
        .highlight-link {
          border-bottom-color: ${({ theme }) => theme.lighterAccentColor};
        }
      }
    }
  }
  .${menuClasses.SUB_MENU} {
    position: absolute;
    left: 0;
    top: calc(100% + 14px);
    display: flex;
    flex-direction: column;
    display: none;
    width: 200px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.lighterGrayColor};
    font-size: 14px;
    .${menuClasses.SUB_MENU} {
      left: 100%;
      top: 0;
    }
  }
`;
