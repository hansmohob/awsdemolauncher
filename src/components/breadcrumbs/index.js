import React from 'react';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';

const items = [{ text: 'Demo Launcher', href: '/home/index.html' }];

// Create the Breadcrumbs component
export default function Breadcrumbs({ active }) {
  // Return the BreadcrumbGroup with the items and active item
  return <BreadcrumbGroup items={[...items, active]} />;
}
