// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import SideNavigation, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

const navHeader = { text: 'AWS Demo Launcher', href: '#/' };
export const navItems: SideNavigationProps['items'] = [
  {
    type: 'section',
    text: 'Domain',
    items: [
      { type: 'link', text: 'Microsoft', href: '#/distributions' },
      { type: 'link', text: 'Analytics', href: '#/cache' },
      { type: 'link', text: 'Serverless', href: '#/monitoring' },
      { type: 'link', text: 'Containers', href: '#/popular' },
      { type: 'link', text: 'ML & AI', href: '#/referrers' },
      { type: 'link', text: 'Security & Compliance', href: '#/usage' },
      { type: 'link', text: 'IoT', href: '#/viewers' },
    ],
  },
  {
    type: 'section',
    text: 'Help & Support',
    items: [
      { type: 'link', text: 'How-to guide', href: '#/howto' },
      { type: 'link', text: 'GitHub Repository', href: '#/origin' },
    ],
  },
];

const defaultOnFollowHandler: SideNavigationProps['onFollow'] = event => {
  // keep the locked href for our demo pages
  event.preventDefault();
};

interface NavigationProps {
  activeHref?: string;
  header?: SideNavigationProps['header'];
  items?: SideNavigationProps['items'];
  onFollowHandler?: SideNavigationProps['onFollow'];
}

export function Navigation({
  activeHref,
  header = navHeader,
  items = navItems,
  onFollowHandler = defaultOnFollowHandler,
}: NavigationProps) {
  return <SideNavigation items={items} header={header} activeHref={activeHref} onFollow={onFollowHandler} />;
}
