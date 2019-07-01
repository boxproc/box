import styled from 'styled-components';

export enum NavbarClasses {
  MENU = 'menu',
  SUB_MENU = 'sub-menu',
  MENU_ITEM = 'menu-item',
  MENU_TITLE = 'menu-title',
  ACTIVE = 'is-active',
}

export const NavList = styled.ul`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  list-style-type: none;
  .${NavbarClasses.MENU_TITLE} {
    position: relative;
    display: block;
    padding: 12px 0;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.normalAccentColor};
    }
  }
  .${NavbarClasses.MENU_ITEM}  {
    position: relative;
    padding: 0 10px;
    &.is-active {
      & > .${NavbarClasses.SUB_MENU} {
        display: block;
      }
      & > .${NavbarClasses.MENU_TITLE} {
        color: ${({ theme }) => theme.normalAccentColor};
      }
    }
  }
  .${NavbarClasses.SUB_MENU} {
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
    .${NavbarClasses.SUB_MENU} {
      left: 100%;
      top: 0;
    }
    .${NavbarClasses.MENU_ITEM} {
      &:not(:last-child) {
        .${NavbarClasses.MENU_TITLE} {
          border-bottom: 1px solid ${({ theme }) => theme.lightGrayColor};
        }
      }
    }
  }
`;
