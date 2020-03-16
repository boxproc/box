import React from 'react';

interface TabsPanelProps {
  hasTabs?: boolean;
  hintIfDisabled?: string;
  isDisabled?: boolean;
  title: string;
  withConfirmation?: boolean;
}

const TabsPanel: React.FC<TabsPanelProps> = ({ children }) => (
  <div>{children}</div>
);

export default TabsPanel;
