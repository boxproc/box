import styled from 'styled-components';
import { media } from 'theme/media';

interface ModalWrapperProps {
  maxContainerWidth?: string;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 50px 20px;
  text-align: center;
  overflow-y: auto;
  z-index: 100;

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
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .6);
  }
  .modal-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-color: #ffffff;
    text-align: left;
    box-sizing: border-box;
    max-width: ${({ maxContainerWidth }) => maxContainerWidth ? maxContainerWidth + 'px' : '500px'};
    width: 100%;
    padding: 20px;
  }
  .modal-close {
    position: absolute;
    top: 0;
    right: 0;
    text-decoration: none;
    font-size: 28px;
    line-height: .6;
    color: ${({ theme }) => theme.whiteColor};
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.blackColor};
    padding: 10px;
  }
`;
