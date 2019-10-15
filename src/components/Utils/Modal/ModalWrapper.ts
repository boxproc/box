import styled from 'theme';

interface ModalWrapperProps {
  maxContainerWidth?: string;
  minContainerHeight?: string;
  zIndex?: string;
  accentClose?: boolean;
  containerWidthAuto?: boolean;
  containerHeightFull?: boolean;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 20px;
  text-align: center;
  overflow-y: scroll;
  z-index: ${({ zIndex }) => zIndex ? zIndex : 100};

  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: .1%;
    margin-left: -.1%;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 17px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);
  }

  .modal-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 5px 0;
    background-color: #fafafa;
    text-align: left;
    box-sizing: border-box;
    min-width: 350px;
    max-width: ${({ maxContainerWidth }) =>
    maxContainerWidth ? maxContainerWidth + 'px' : '500px'};
    min-height: ${({ minContainerHeight }) =>
    minContainerHeight ? minContainerHeight + 'px' : 'auto'}
    width: 100%;
    padding: 20px 20px 10px;
    border-radius: 3px;
    word-break: break-word;
    font-size: 0;

    ${({ containerWidthAuto }) => containerWidthAuto && `
      width: auto;
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
    color: ${({ theme, accentClose }) =>
    accentClose ? theme.colors.normalAccent : theme.colors.gray};
    padding: 10px;

    &:hover {
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }
`;
