import 'react-grid-layout/css/styles.css';

import styled from 'theme';

export const UiItemsWrapper = styled.div`
  .ui-items {
    display: flex;
    align-items: flex-start;
    margin: 0 -5px 20px;
    color: ${({ theme }) => theme.colors.darkGray};

    &__group {
      width: 210px;
    }

    &.is-active {
      .ui-items__group:not(.is-active) {
        opacity: .3;
      }
    }

    &__title {
      position: relative;
      padding: 8px 25px 6px 5px;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 13px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.gray};
      text-align: center;
      text-transform: uppercase;

      .ui-items__icon {
        right: 8px;
      }
    }

    &__item {
      position: relative;
      padding: 6px 5px 8px;
      margin: 0 5px 5px;
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.lightGray};
      border-radius: 2px;
      font-size: 13px;
      cursor: move;
      text-transform: capitalize;
      user-select: none;

      &--separator {
        padding-right: 25px;
        background-color: ${({ theme }) => theme.colors.lighterGray};
        color: ${({ theme }) => theme.colors.gray};
      }

      &:hover {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
        border-color: ${({ theme }) => theme.colors.normalAccent};
        box-shadow: ${({ theme }) => theme.shadows.normalBox};
      }
    }

    &__icon {
      position: absolute;
      right: 5px;
      top: 50%;
      margin-top: -11px;
      padding: 5px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.gray};
      font-size: 0;

      &:hover {
        color: ${({ theme }) => theme.colors.normalAccent};
      }
    }
  }

  .react-grid-item.react-grid-placeholder {
    background: ${({ theme }) => theme.colors.normalAccent};
    opacity: 1;
    border-radius: 2px;
  }
`;
