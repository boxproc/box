import styled from 'theme';

type AvailablePosition = 'left' | 'right' | 'center';

interface IDropdownWrapper {
  isActive: boolean;
  isDisabled?: boolean;
  position?: AvailablePosition;
}

export const DropdownWrapper = styled.div<IDropdownWrapper>`
  position: relative;
  display: inline-block;
  user-select: none;

  .dropdown-list {
    position: absolute;
    left: ${({ position }) => position === 'left' ? '-10px' : 'auto'};
    right: ${({ position }) => position === 'right' ? '0' : 'auto'};
    top: calc(100% + 2px);
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
    border-radius: 2px;
    z-index: 11;

  ${({ position }) => position === 'center' && `
    transform: translateX(-50%);
    margin-left: 50%;
  `};
  }

  .dropdown-option {
    margin: 1px;
    transition: all .1s linear;

    > * {
      padding: 10px 10px 8px;
      width: 100%;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.lighterGray};
    }
  }

  .dropdown-toggle-btn {
    display: flex;
    align-items: center;
    cursor: pointer;

    * {
      color: ${({ theme, isActive }) => isActive && theme.colors.normalAccent};
    }

    &:hover * {
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }

  ${({ isDisabled }) => isDisabled && `
    pointer-events: none;
    opacity: .5;
  `};
`;
