import React from 'react';

interface TabsPanelProps {
  title: string;
  hintIfDisabled?: string;
  isDisabled?: boolean;
  withConfirmation?: boolean;
}

const TabsPanel: React.FC<TabsPanelProps> = ({ children }) => (
  <div>{children}</div>
);

export default TabsPanel;
