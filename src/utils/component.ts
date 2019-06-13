import { ComponentType } from 'react';

export const getDisplayName = <T extends {}>(PassedComponent: ComponentType<T>) =>
  PassedComponent.displayName || PassedComponent.name || 'Component';
