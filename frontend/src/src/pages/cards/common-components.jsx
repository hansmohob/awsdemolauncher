// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { BreadcrumbGroup, HelpPanel } from '@cloudscape-design/components';
import { resourcesBreadcrumbs } from '../../common/breadcrumbs';
import { ExternalLinkGroup } from '../commons';

export const Breadcrumbs = () => (
  <BreadcrumbGroup items={resourcesBreadcrumbs} expandAriaLabel="Show path" ariaLabel="Breadcrumbs" />
);

const toolsFooter = (
  <ExternalLinkGroup
    items={[
      {
        text: 'Introduction',
        href: 'https://aws.amazon.com/windows/',
      },
      {
        text: 'Blog Channel',
        href: 'https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-returned.html',
      },
    ]}
  />
);
export const ToolsContent = () => (
  <HelpPanel footer={toolsFooter} header={<h2>Distributions</h2>}>
    <p>
      Welcome to the Microsoft on AWS demo section. Use the main pane to explore demos and deploy them directly to your AWS account.
    </p>
  </HelpPanel>
);
