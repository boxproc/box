import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { T2 } from './../../Text';

import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { ModalWrapper } from './ModalWrapper';

import {
  HandleSetActiveItemId,
  HandleSetActiveTableRowIndex,
  HandleSetIsClearActiveIds,
  SetIsEditModalOpened,
} from 'store/domains';

const ModalTitle = styled(T2)`
  padding-right: 15px;
  font-size: 20px;
  text-transform: none;
`;

const MonoTitleStr = styled.div`
  padding-right: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.code};
`;

interface ModalProps extends WithModalProps {
  name: string; // modal name
  title?: string; // modal title
  monoTitleStr?: string; // addition string to modal title. monoTitleStr has mono font-family.
  type?: string; // modal type, e.g. 'messageModal', 'editModal' etc.
  containerWidth?: string; // width of modal container
  minContainerHeight?: string; // min height of modal container
  zIndex?: string; // z-index of modal
  closeOnBackdrop?: boolean; // allows close modal on backdrop
  withCloseConfirmation?: boolean; // opens confirmation modal by modal close
  setActiveTableRowIndex: HandleSetActiveTableRowIndex; // sets active table row index to store
  setActiveItemId: HandleSetActiveItemId; // sets active item index to store
  setIsClearActiveIds: HandleSetIsClearActiveIds; // clearing table row and item indexes in store
  setIsEditModalOpened: SetIsEditModalOpened;  // sets open state of edit modal to store
  isEditModalOpened: boolean; // open state of edit modal
  containerWidthAuto?: boolean; // sets width of container to 'auto'
  containerHeightFull?: boolean; // sets height of container to '100vh'
  hideCloseIcon?: boolean; // hides close icon '&times';
  isBackdropBlured?: boolean;
  TitleIcon?: ReactChild;
}

const Modal: React.FC<ModalProps> = ({
  children,
  name,
  title,
  monoTitleStr,
  closeModal,
  openModal,
  containerWidth = '720',
  minContainerHeight,
  zIndex,
  closeOnBackdrop,
  withCloseConfirmation,
  setActiveTableRowIndex,
  setActiveItemId,
  type,
  setIsClearActiveIds,
  setIsEditModalOpened,
  isEditModalOpened,
  containerWidthAuto,
  containerHeightFull,
  hideCloseIcon,
  isBackdropBlured,
  TitleIcon,
}) => {
  const isClearableActiveIdsFromStore = React.useMemo(
    () => type === modalTypesConst.EDIT_MODAL || !isEditModalOpened,
    [type, isEditModalOpened]
  );

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
      containerWidthAuto={containerWidthAuto}
      containerHeightFull={containerHeightFull}
      zIndex={zIndex}
    >
      <div
        className={`modal-backdrop ${isBackdropBlured ? 'is-blured' : ''}`}
        onClick={closeOnBackdrop ? handleCloseModal : () => null}
      />
      <div className="modal-container-wrapper">
        <div className="modal-container">
          {!hideCloseIcon && (
            <span
              className="modal-close"
              onClick={handleCloseModal}
              title="Close"
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
            {monoTitleStr && (
              <MonoTitleStr>{monoTitleStr}</MonoTitleStr>
            )}
          </Flex>
          {children}
        </div>
      </div>
    </ModalWrapper>
  );
};

export default withModal(Modal);
