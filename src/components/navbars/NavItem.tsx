import React from 'react';

export interface NavItem {
  label?: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}
