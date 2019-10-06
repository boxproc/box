import React from 'react';

import styled from 'theme';

import { T2 } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { messagesConst, modalNamesConst, modalTypesConst } from 'consts';

import { ModalWrapper } from './ModalWrapper';

import {
  HandleSetActiveItemId,
  HandleSetActiveTableRowIndex,
  HandleSetIsClearActiveIds,
  SetIsEditModalOpened,
} from 'store/domains';

const ModalTitle = styled(T2)`
  padding-right: 15px;
  text-transform: none;
`;

interface ModalProps extends WithModalProps {
  name: string;
  title?: string;
  type?: string;
  maxContainerWidth?: string;
  minContainerHeight?: string;
  zIndex?: string;
  accentClose?: boolean;
  closeOnBackdrop?: boolean;
  withCloseConfirmation?: boolean;
  setActiveTableRowIndex: HandleSetActiveTableRowIndex;
  setActiveItemId: HandleSetActiveItemId;
  setIsClearActiveIds: HandleSetIsClearActiveIds;
  setIsEditModalOpened: SetIsEditModalOpened;
  isEditModalOpened: boolean;
  isBlurBackDrop?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  name,
  title,
  closeModal,
  openModal,
  maxContainerWidth = '720',
  minContainerHeight,
  zIndex,
  accentClose = true,
  closeOnBackdrop = false,
  withCloseConfirmation = false,
  setActiveTableRowIndex,
  setActiveItemId,
  type,
  setIsClearActiveIds,
  setIsEditModalOpened,
  isEditModalOpened,
  isBlurBackDrop,
}) => {
  const isClearableActiveIdsFromStore = (type === modalTypesConst.EDIT_MODAL) || !isEditModalOpened;

  React.useEffect(
    () => {
      if (type === modalTypesConst.EDIT_MODAL) {
        setIsEditModalOpened(true);
      }

      return () => type === modalTypesConst.EDIT_MODAL ? setIsEditModalOpened(false) : null;
    },
    [setIsEditModalOpened, type]
  );

  React.useEffect(
    () => {
      return isClearableActiveIdsFromStore
        ? () => {
          setActiveTableRowIndex(null);
          setActiveItemId(null);
          setIsClearActiveIds(true);
        }
        : () => null;
    },
    [setActiveTableRowIndex, setActiveItemId, setIsClearActiveIds, isClearableActiveIdsFromStore]
  );

  const handleCloseModal = React.useCallback(
    withCloseConfirmation
      ? () => openModal({
        name: modalNamesConst.CONFIRMATION_MODAL,
        payload: {
          confirmationAction: () => closeModal(name),
          confirmationTitle: messagesConst.CLOSE_MODAL_WINDOW,
          confirmationText: messagesConst.UNSAVED_CHANGES,
        },
      })
      : () => closeModal(name),
    [name, closeModal, withCloseConfirmation]
  );

  return (
    <ModalWrapper
      maxContainerWidth={maxContainerWidth}
      minContainerHeight={minContainerHeight}
      zIndex={zIndex}
      accentClose={accentClose}
      isBlurBackDrop={isBlurBackDrop}
    >
      <div
        className="modal-backdrop"
        onClick={closeOnBackdrop ? handleCloseModal : () => null}
      />
      <div className="modal-container">
        <span
          className="modal-close"
          onClick={handleCloseModal}
          title="Close"
        >
          &times;
        </span>
        {title && (
          <ModalTitle>{title}</ModalTitle>
        )}
        {children}
      </div>
    </ModalWrapper>
  );
};

export default withModal(Modal);
