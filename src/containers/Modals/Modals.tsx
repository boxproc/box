import React from 'react';

import styled from 'styled-components';

import { ScrollDisable } from 'theme/scrollbarCss';

import { modalNamesConst } from 'consts';

import { modalsList } from 'containers/Modals/modalsList';

interface ModalsWrapperProps {
  isBlured?: boolean;
}

const ModalsWrapper = styled.div<ModalsWrapperProps>`
  ${({ isBlured }) => isBlured && `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    filter: blur(3px);
  `}
`;

interface ModalsProps {
  modalsStateList?: object;
  isRelogin: boolean;
}

const Modals: React.FC<ModalsProps> = ({ modalsStateList, isRelogin }) => {
  return (
    <React.Fragment>
      {modalsList.map((modal, index) => {
        if (!modalsStateList[`is${modal.name}`]) {
          return null;
        }

        const isMessageModal = modal.name === modalNamesConst.MESSAGE_MODAL;

        return (
          <ModalsWrapper
            key={modal.name + index}
            isBlured={isRelogin && !isMessageModal}
          >
            {isRelogin && (
              <ScrollDisable />
            )}
            {modal.component}
          </ModalsWrapper>
        );
      })}
    </React.Fragment>
  );
};

export default Modals;
