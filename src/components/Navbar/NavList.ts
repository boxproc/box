import styled from 'styled-components';

export enum menuClasses {
  MENU = 'menu',
  SUB_MENU = 'sub-menu',
  MENU_ITEM = 'menu-item',
  MENU_TITLE = 'menu-title',
  ACTIVE = 'is-active',
}

export const NavList = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  list-style-type: none;
  .${menuClasses.MENU_ITEM}  {
    position: relative;
    cursor: pointer;
    &.is-active {
      & > .${menuClasses.SUB_MENU} {
        display: block;
      }
      & > .${menuClasses.MENU_TITLE} {
        background-color: ${({ theme }) => theme.normalAccentColor};
      }
    }
  }
  .${menuClasses.MENU_TITLE} {
    padding: 10px;
    width: 100%;
    &:hover {
      background-color: ${({ theme }) => theme.normalAccentColor};
    }
  }
  .${menuClasses.SUB_MENU} {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    top: calc(100% + 15px);
    list-style-type: none;
    display: none;
    width: 200px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    background-color: ${({ theme }) => theme.whiteColor};
    .${menuClasses.SUB_MENU} {
      left: 100%;
      top: 0;
    }
    .${menuClasses.MENU_ITEM} {
      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.lightGrayColor};
      }
      &.is-active {
        & > .${menuClasses.MENU_TITLE} {
          background-color: transparent;
        }
      }
    }
  }
  .chevron-icon {
    transform: rotate(-90deg);
  }
`;
