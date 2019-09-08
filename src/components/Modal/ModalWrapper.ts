import styled from 'theme';
import { media } from 'theme/media';

interface ModalWrapperProps {
  maxContainerWidth?: string;
  minContainerHeight?: string;
  zIndex?: string;
  accentClose?: boolean;
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
  z-index: ${({zIndex}) => zIndex ? zIndex : 100};
  &:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: .1%;
    margin-left: -.1%;
  }
  ${media.tablet`
    padding-left: 10px;
    padding-right: 10px;
  `}
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
    max-width: ${({ maxContainerWidth }) =>
      maxContainerWidth ? maxContainerWidth + 'px' : '500px'};
    min-height: ${({ minContainerHeight }) =>
      minContainerHeight ? minContainerHeight + 'px' : 'auto'}
    width: 100%;
    padding: 20px 20px 10px;
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
    color: ${({ theme, accentClose }) =>
      accentClose ? theme.normalAccentColor : theme.grayColor};
    padding: 10px;

    &:hover {
      color: ${({ theme, accentClose }) => theme.normalAccentColor};
    }
  }
`;
