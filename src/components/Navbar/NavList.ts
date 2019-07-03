import styled from 'styled-components';

export enum menuClasses {
  MENU = 'menu',
  SUB_MENU = 'sub-menu',
  MENU_ITEM = 'menu-item',
  ACTIVE = 'is-active',
}

export const NavList = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  .chevron-icon {
    transform: rotate(-90deg);
  }
  .highlight-link {
    border-bottom: 1px solid ${({ theme }) => theme.lightGrayColor};
    line-height: 1.4;
    &:hover {
      border-bottom-color: ${({ theme }) => theme.lighterAccentColor};
    }
  }
  .${menuClasses.MENU_ITEM}  {
    position: relative;
    cursor: pointer;
    margin: 0 10px;
    &.is-active {
      & > .${menuClasses.SUB_MENU} {
        display: block;
      }
      .highlight-link {
        border-bottom-color: ${({ theme }) => theme.lighterAccentColor};
      }
    }
  }
  .${menuClasses.SUB_MENU} {
    position: absolute;
    left: 0%;
    top: calc(100% + 15px);
    display: flex;
    flex-direction: column;
    display: none;
    width: 200px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.whiteColor};
    .${menuClasses.SUB_MENU} {
      left: 100%;
      top: 0;
    }
    .${menuClasses.MENU_ITEM} {
      padding: 10px;
      margin: 0;
      &:not(:first-child) {
        border-top: 1px solid ${({ theme }) => theme.lightGrayColor};
      }
      &:hover {
        background-color: ${({ theme }) => theme.lightAccentColor};
        border-top-color: ${({ theme }) => theme.lightAccentColor};
        + .${menuClasses.MENU_ITEM} {
          border-top-color: ${({ theme }) => theme.lightAccentColor};
        }
      }
    }
  }
`;
