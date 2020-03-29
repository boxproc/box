import styled from 'theme';

interface IModalWrapper {
  containerWidth?: string;
  minContainerHeight?: string;
  zIndex?: string;
}

export const ModalWrapper = styled.div<IModalWrapper>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 5px;
  text-align: center;
  z-index: ${({ zIndex }) => zIndex || 100};

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.blackOpacity};

    &.is-blured {
      backdrop-filter: blur(2.5px);
    }
  }

  .modal-container-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;

    &:after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
      width: .1px;
      margin-left: -.1px;
    }
  }

  ${({ containerWidth }) => containerWidth && `
    @media only screen and (max-width: ${containerWidth}) {
      .modal-container-wrapper:after {
        display: none;
      }
    }`
  }

  .modal-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 5px auto;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.lighterGrayCell};
    text-align: left;
    box-sizing: border-box;
    min-width: ${({ containerWidth }) => containerWidth || '350px'};
    width: ${({ containerWidth }) => containerWidth || '500px'};
    min-height: ${({ minContainerHeight }) => minContainerHeight || '130px'};
    border-radius: 3px;
    word-break: break-word;
    font-size: 0;
  }

  .modal-close {
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;
    font-size: 24px;
    line-height: .5;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.lightAccent};
    padding: 10px;
    user-select: none;
    transition: all .1s linear;

    &:hover {
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }
`;
