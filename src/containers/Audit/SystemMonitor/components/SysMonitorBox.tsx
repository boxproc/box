import React from 'react';

import styled from 'theme';

const SysMonitorBoxWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;

  .loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
    font-size: 10px;
    letter-spacing: .5pt;
    text-transform: uppercase;
    z-index: 10;
  }
`;

interface ISysMonitorBox {
  isLoading: boolean;
}

const SysMonitorBox: React.FC<ISysMonitorBox> = ({
  children,
  isLoading,
}) => {
  return (
    <SysMonitorBoxWrapper>
      {children}
      {isLoading && (
        <div className="loading">Loading...</div>
      )}
    </SysMonitorBoxWrapper>
  );
};

export default SysMonitorBox;
