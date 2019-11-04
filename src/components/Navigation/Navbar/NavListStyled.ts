import styled from 'theme';

import { menuClasses } from './utils';

export const NavListStyled = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
  .${menuClasses.MENU_TITLE} {
    position: relative;
    cursor: pointer;
    padding: 7px 10px 6px;
    &:hover .icon {
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }
  .${menuClasses.MENU_ITEM} {
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .2pt;
    color: ${({ theme }) => theme.colors.darkGray};
    user-select: none;
  }
  .${menuClasses.MENU_ITEM}  {
    position: relative;
    margin: 0 1px;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 100
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
    }
  }
  .${menuClasses.SUB_MENU} {
    position: absolute;
    left: 0;
    top: calc(100% + 20px);
    padding: 1px 0;
    display: flex;
    flex-direction: column;
    display: none;
    width: 200px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.normalBox};
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
    .${menuClasses.SUB_MENU} {
      left: calc(100% + 1px);
      top: -2px;
    }
    .${menuClasses.MENU_ITEM} {
      border-radius: 0;
      text-transform: none;
      font-size: 14px;
      font-weight: normal;
      letter-spacing: normal;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .${menuClasses.MENU_ITEM}  {
    &:hover {
      background-color: ${({ theme }) => theme.colors.lighterGray};
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }
`;
