import styled from 'styled-components';

export enum NavbarClasses {
  MENU_CLASS = 'menu',
  SUB_MENU_CLASS = 'sub-menu',
  MENU_ITEM_CLASS = 'menu-item',
  MENU_TITLE_CLASS = 'menu-title',
  ACTIVE_CLASS = 'is-active',
}

export const NavList = styled.ul`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  list-style-type: none;
  .${NavbarClasses.MENU_TITLE_CLASS} {
    position: relative;
    display: block;
    padding: 10px;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.normalAccentColor};
    }
  }
  .${NavbarClasses.MENU_ITEM_CLASS}  {
    position: relative;
    &.is-active {
      & > .${NavbarClasses.SUB_MENU_CLASS} {
        display: block;
      }
      & > .${NavbarClasses.MENU_TITLE_CLASS} {
        color: ${({ theme }) => theme.normalAccentColor};
      }
    }
  }
  .${NavbarClasses.SUB_MENU_CLASS} {
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
    .${NavbarClasses.SUB_MENU_CLASS} {
      left: 100%;
      top: 0;
    }
  }
`;
