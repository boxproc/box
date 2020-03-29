import React, { ReactChild } from 'react';

import { ScrollDisable } from 'theme/styles';

import { modalsList } from 'containers/Modals/modalsList';

interface IModals {
  modalsStateList?: object;
}

const Modals: React.FC<IModals> = ({ modalsStateList }) => {
  const activeModals = React.useMemo(
    () => {
      const preparedList: Array<ReactChild> = [];

      modalsList.forEach((modal, index) => {
        const { name, component } = modal;

        if (modalsStateList[`is${name}`]) {
          preparedList.push(
            <div key={name + index}>
              {name && (<ScrollDisable />)}
              {component}
            </div>
          );
        }
      });

      return preparedList;
    },
    [modalsStateList]
  );

  return (
    <React.Fragment>
      {activeModals}
    </React.Fragment>
  );
};

export default Modals;
