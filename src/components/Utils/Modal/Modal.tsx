import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { T2 } from './../../Text';

import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { ModalWrapper } from './ModalWrapper';

import { HandleSetActiveItemId, HandleSetActiveTableRowIndex } from 'store/domains';

const zIndexes = {
  [modalTypesConst.VIEWING]: 100,
  [modalTypesConst.CONFIRMATION]: 101,
  [modalTypesConst.MESSAGE]: 102,
};

const ModalTitle = styled(T2)`
  padding-right: 15px;
  font-size: 20px;
  text-transform: none;
`;

interface ModalProps extends WithModalProps {
  /** Width of modal window container */
  containerWidth?: string;

  /** Hides close icon */
  hideCloseIcon?: boolean;

  /** Applies blur behind the backdrop */
  isBackdropBlured?: boolean;

  /** Min height of modal window container */
  minContainerHeight?: string;

  /** Name of modal window used in store */
  name: string;

  /** Sets active item index to store */
  setActiveItemId: HandleSetActiveItemId;

  /** Sets active table row index to store */
  setActiveTableRowIndex: HandleSetActiveTableRowIndex;

  /** Title of modal window */
  title?: string;

  /** Icon which is next to the title */
  TitleIcon?: ReactChild;

  /** Modal window type, e.g. 'viewingModal' etc. */
  type?: string;

  /** Opens confirmation modal by modal window close */
  withCloseConfirmation?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  closeModal,
  containerWidth = '720px',
  hideCloseIcon,
  isBackdropBlured,
  minContainerHeight,
  name,
  openModal,
  setActiveItemId,
  setActiveTableRowIndex,
  title,
  TitleIcon,
  type,
  withCloseConfirmation,
}) => {
  React.useEffect(
    () => {
      return type === modalTypesConst.VIEWING
        ? () => {
          setActiveTableRowIndex(null);
          setActiveItemId(null);
        }
        : () => null;
    },
    [type, setActiveTableRowIndex, setActiveItemId]
  );

  const handleCloseModal = React.useCallback(
    withCloseConfirmation
      ? () => openModal({
        name: modalNamesConst.CONFIRMATION,
        payload: {
          confirmationAction: () => closeModal(name),
          confirmationTitle: 'Close the window?',
          confirmationText: 'You have unsaved changes.',
        },
      })
      : () => closeModal(name),
    [name, closeModal, withCloseConfirmation]
  );

  return (
    <ModalWrapper
      containerWidth={containerWidth}
      minContainerHeight={minContainerHeight}
      zIndex={zIndexes[type]}
    >
      <div
        className={`
          modal-backdrop
          ${isBackdropBlured ? 'is-blured' : ''}
        `}
      />
      <div className="modal-container-wrapper">
        <div className="modal-container">
          {!hideCloseIcon && (
            <span
              className="modal-close"
              title="Close"
              onClick={handleCloseModal}
            >
              &times;
            </span>
          )}
          <Flex
            alignItems="center"
            flexWrap="wrap"
          >
            {TitleIcon && (
              <Box mb="5px">{TitleIcon}</Box>
            )}
            {title && (
              <ModalTitle>{title}</ModalTitle>
            )}
          </Flex>
          {children}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default withModal(Modal);
