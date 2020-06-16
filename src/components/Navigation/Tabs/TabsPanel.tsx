import React from 'react';

interface ITabsPanel {
  hasTabs?: boolean;
  hintIfDisabled?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  title: string;
  withConfirmation?: boolean;
}

const TabsPanel: React.FC<ITabsPanel> = ({ children }) => (
  <div>{children}</div>
);

export default TabsPanel;
