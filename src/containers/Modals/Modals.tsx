import React from 'react';

import styled from 'theme';

import { ScrollDisable } from 'theme/styles';

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
    pointer-events: none;
    user-select: none;
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
        const { name, component } = modal;

        if (!modalsStateList[`is${name}`]) {
          return null;
        }

        const isMessageModal = name === modalNamesConst.MESSAGE;

        return (
          <ModalsWrapper
            key={name + index}
            isBlured={isRelogin && !isMessageModal}
          >
            {name && (<ScrollDisable />)}
            {component}
          </ModalsWrapper>
        );
      })}
    </React.Fragment>
  );
};

export default Modals;
