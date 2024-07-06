import React from 'react';
import SideNavigation from '@cloudscape-design/components/side-navigation';

const items = [
  { type: 'link', text: 'Demos', href: '/home/index.html' },
];

export default function Navigation() {
  return (
    <>
      <SideNavigation
        activeHref={window.location.pathname}
        header={{ href: '/home/index.html', text: 'Service' }}
        items={items}
      />
    </>
  );
}
