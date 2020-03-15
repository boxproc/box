import styled from 'theme';

interface ModalWrapperProps {
  containerWidth?: string;
  minContainerHeight?: string;
  zIndex?: string;
  containerWidthAuto?: boolean;
  containerHeightFull?: boolean;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
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
    background-color: rgba(0, 0, 0, .6);

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
    @media only screen and (max-width: ${containerWidth + 20}px) {
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
    background-color: #fafafa;
    text-align: left;
    box-sizing: border-box;
    min-width: ${({ containerWidth }) => containerWidth ? `${containerWidth}px` : '350px'};
    width: ${({ containerWidth }) => containerWidth ? `${containerWidth}px` : '500px'};
    min-height: ${({ minContainerHeight }) =>
    minContainerHeight ? `${minContainerHeight}px` : '130px'};
    border-radius: 3px;
    word-break: break-word;
    font-size: 0;

    ${({ containerWidthAuto }) => containerWidthAuto && `
      width: 100%;
      max-width: 1550px;
    `};

    ${({ containerHeightFull }) => containerHeightFull && `
      height: calc(100vh - 20px);
    `}
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
