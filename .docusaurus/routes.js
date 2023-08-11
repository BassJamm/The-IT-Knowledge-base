import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '5da'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e18'),
    exact: true
  },
  {
    path: '/blog/pwsh-challenge-001',
    component: ComponentCreator('/blog/pwsh-challenge-001', 'a06'),
    exact: true
  },
  {
    path: '/blog/pwsh-challenge-002',
    component: ComponentCreator('/blog/pwsh-challenge-002', 'e5f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'cce'),
    exact: true
  },
  {
    path: '/blog/tags/challenge',
    component: ComponentCreator('/blog/tags/challenge', 'cdc'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus-v-2',
    component: ComponentCreator('/blog/tags/docusaurus-v-2', '3ba'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b35'),
    exact: true
  },
  {
    path: '/blog/tags/power-shell',
    component: ComponentCreator('/blog/tags/power-shell', 'a94'),
    exact: true
  },
  {
    path: '/blog/tags/script',
    component: ComponentCreator('/blog/tags/script', '33b'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c05'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '8b6'),
    exact: true
  },
  {
    path: '/docs/tags/automation',
    component: ComponentCreator('/docs/tags/automation', 'e8c'),
    exact: true
  },
  {
    path: '/docs/tags/az-c-li',
    component: ComponentCreator('/docs/tags/az-c-li', 'c5f'),
    exact: true
  },
  {
    path: '/docs/tags/azure',
    component: ComponentCreator('/docs/tags/azure', '9e5'),
    exact: true
  },
  {
    path: '/docs/tags/azure-ad',
    component: ComponentCreator('/docs/tags/azure-ad', '6ec'),
    exact: true
  },
  {
    path: '/docs/tags/azure-backup',
    component: ComponentCreator('/docs/tags/azure-backup', 'ef5'),
    exact: true
  },
  {
    path: '/docs/tags/certificates',
    component: ComponentCreator('/docs/tags/certificates', '99a'),
    exact: true
  },
  {
    path: '/docs/tags/citrix',
    component: ComponentCreator('/docs/tags/citrix', '49b'),
    exact: true
  },
  {
    path: '/docs/tags/command-line',
    component: ComponentCreator('/docs/tags/command-line', '6f2'),
    exact: true
  },
  {
    path: '/docs/tags/command-line-ref',
    component: ComponentCreator('/docs/tags/command-line-ref', 'cbe'),
    exact: true
  },
  {
    path: '/docs/tags/ent-app',
    component: ComponentCreator('/docs/tags/ent-app', 'e37'),
    exact: true
  },
  {
    path: '/docs/tags/exchange-online',
    component: ComponentCreator('/docs/tags/exchange-online', 'd7d'),
    exact: true
  },
  {
    path: '/docs/tags/flow-log',
    component: ComponentCreator('/docs/tags/flow-log', '398'),
    exact: true
  },
  {
    path: '/docs/tags/git',
    component: ComponentCreator('/docs/tags/git', 'e5a'),
    exact: true
  },
  {
    path: '/docs/tags/guide',
    component: ComponentCreator('/docs/tags/guide', '56a'),
    exact: true
  },
  {
    path: '/docs/tags/lighthouse',
    component: ComponentCreator('/docs/tags/lighthouse', '864'),
    exact: true
  },
  {
    path: '/docs/tags/microsoft-graph',
    component: ComponentCreator('/docs/tags/microsoft-graph', '069'),
    exact: true
  },
  {
    path: '/docs/tags/network-security-groups',
    component: ComponentCreator('/docs/tags/network-security-groups', '0c0'),
    exact: true
  },
  {
    path: '/docs/tags/networking',
    component: ComponentCreator('/docs/tags/networking', '1bd'),
    exact: true
  },
  {
    path: '/docs/tags/nsg',
    component: ComponentCreator('/docs/tags/nsg', '4f6'),
    exact: true
  },
  {
    path: '/docs/tags/partner-centre',
    component: ComponentCreator('/docs/tags/partner-centre', 'ea3'),
    exact: true
  },
  {
    path: '/docs/tags/power-shell',
    component: ComponentCreator('/docs/tags/power-shell', '6f3'),
    exact: true
  },
  {
    path: '/docs/tags/re-usable-code',
    component: ComponentCreator('/docs/tags/re-usable-code', 'f4c'),
    exact: true
  },
  {
    path: '/docs/tags/resource-creation',
    component: ComponentCreator('/docs/tags/resource-creation', 'a86'),
    exact: true
  },
  {
    path: '/docs/tags/restore',
    component: ComponentCreator('/docs/tags/restore', 'c8c'),
    exact: true
  },
  {
    path: '/docs/tags/script',
    component: ComponentCreator('/docs/tags/script', '4d5'),
    exact: true
  },
  {
    path: '/docs/tags/scripting',
    component: ComponentCreator('/docs/tags/scripting', '856'),
    exact: true
  },
  {
    path: '/docs/tags/scripts',
    component: ComponentCreator('/docs/tags/scripts', '551'),
    exact: true
  },
  {
    path: '/docs/tags/setup-azure-site-recovery',
    component: ComponentCreator('/docs/tags/setup-azure-site-recovery', 'fc4'),
    exact: true
  },
  {
    path: '/docs/tags/snap-shot',
    component: ComponentCreator('/docs/tags/snap-shot', 'e15'),
    exact: true
  },
  {
    path: '/docs/tags/virtual-machine',
    component: ComponentCreator('/docs/tags/virtual-machine', 'e28'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ca9'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '4b0'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '63d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure Active Directory/App Registrations/Decom and AAD App',
        component: ComponentCreator('/docs/Azure Active Directory/App Registrations/Decom and AAD App', 'd13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Backup and Disaster Recovery/Setup Azure Backup',
        component: ComponentCreator('/docs/Azure/Backup and Disaster Recovery/Setup Azure Backup', '014'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Backup and Disaster Recovery/Setup Azure Site Recovery',
        component: ComponentCreator('/docs/Azure/Backup and Disaster Recovery/Setup Azure Site Recovery', '173'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Data Management/Restore data from a Snapshot',
        component: ComponentCreator('/docs/Azure/Data Management/Restore data from a Snapshot', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Data Management/Restore VM from Snapshot',
        component: ComponentCreator('/docs/Azure/Data Management/Restore VM from Snapshot', '5a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Infrastructure/Create an Automation Account',
        component: ComponentCreator('/docs/Azure/Infrastructure/Create an Automation Account', '15e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Infrastructure/Re-size a Virtual Machine',
        component: ComponentCreator('/docs/Azure/Infrastructure/Re-size a Virtual Machine', '47d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Infrastructure/Setup Azure Lighthouse',
        component: ComponentCreator('/docs/Azure/Infrastructure/Setup Azure Lighthouse', 'bf0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Networking/Network Security Groups',
        component: ComponentCreator('/docs/Azure/Networking/Network Security Groups', '89c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/app-registrations',
        component: ComponentCreator('/docs/category/app-registrations', 'c1b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/azure',
        component: ComponentCreator('/docs/category/azure', 'ebb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/azure-active-directory',
        component: ComponentCreator('/docs/category/azure-active-directory', 'e1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/backup-and-disaster-recovery',
        component: ComponentCreator('/docs/category/backup-and-disaster-recovery', '033'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/certificates',
        component: ComponentCreator('/docs/category/certificates', '29d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/citrix',
        component: ComponentCreator('/docs/category/citrix', '994'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/command-line-references',
        component: ComponentCreator('/docs/category/command-line-references', '1a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/data-management',
        component: ComponentCreator('/docs/category/data-management', 'bea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/infrastructure-management',
        component: ComponentCreator('/docs/category/infrastructure-management', 'a26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/networking',
        component: ComponentCreator('/docs/category/networking', '796'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/scripts',
        component: ComponentCreator('/docs/category/scripts', '5d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/windows-os',
        component: ComponentCreator('/docs/category/windows-os', 'b61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Certificates/Formats and Conversions',
        component: ComponentCreator('/docs/Certificates/Formats and Conversions', '6ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Certificates/Generating a CSR',
        component: ComponentCreator('/docs/Certificates/Generating a CSR', '192'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Certificates/Request from Internal CA',
        component: ComponentCreator('/docs/Certificates/Request from Internal CA', 'e6d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Citrix/Updating an image',
        component: ComponentCreator('/docs/Citrix/Updating an image', '359'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Command Line References/AzCLi',
        component: ComponentCreator('/docs/Command Line References/AzCLi', '443'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Command Line References/Exchange Online',
        component: ComponentCreator('/docs/Command Line References/Exchange Online', '561'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Command Line References/Git CMDLine Ref',
        component: ComponentCreator('/docs/Command Line References/Git CMDLine Ref', 'd9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Command Line References/Microsoft Graph',
        component: ComponentCreator('/docs/Command Line References/Microsoft Graph', '4de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Command Line References/PowerShell',
        component: ComponentCreator('/docs/Command Line References/PowerShell', 'd0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Scripts/NSG Flow log Formatter',
        component: ComponentCreator('/docs/Scripts/NSG Flow log Formatter', '909'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Scripts/Windows OS Scripts',
        component: ComponentCreator('/docs/Scripts/Windows OS Scripts', 'f85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Windows OS/Creating a nice pwsh prompt',
        component: ComponentCreator('/docs/Windows OS/Creating a nice pwsh prompt', '77a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '53b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
