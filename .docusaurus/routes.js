import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'de6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e31'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f8a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'e73'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ec8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'aac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '1c0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ca9'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '8cc'),
    exact: true
  },
  {
    path: '/tags/automation',
    component: ComponentCreator('/tags/automation', 'dac'),
    exact: true
  },
  {
    path: '/tags/azure',
    component: ComponentCreator('/tags/azure', '4e7'),
    exact: true
  },
  {
    path: '/tags/azure-backup',
    component: ComponentCreator('/tags/azure-backup', '2e9'),
    exact: true
  },
  {
    path: '/tags/azure-virtual-desktop',
    component: ComponentCreator('/tags/azure-virtual-desktop', '07d'),
    exact: true
  },
  {
    path: '/tags/cmd-let',
    component: ComponentCreator('/tags/cmd-let', 'f8a'),
    exact: true
  },
  {
    path: '/tags/guide',
    component: ComponentCreator('/tags/guide', 'cf6'),
    exact: true
  },
  {
    path: '/tags/lighthouse',
    component: ComponentCreator('/tags/lighthouse', 'f1b'),
    exact: true
  },
  {
    path: '/tags/re-usable-code',
    component: ComponentCreator('/tags/re-usable-code', '55d'),
    exact: true
  },
  {
    path: '/tags/refernce-doc',
    component: ComponentCreator('/tags/refernce-doc', '409'),
    exact: true
  },
  {
    path: '/tags/resource-creation',
    component: ComponentCreator('/tags/resource-creation', '512'),
    exact: true
  },
  {
    path: '/tags/restore',
    component: ComponentCreator('/tags/restore', '1a9'),
    exact: true
  },
  {
    path: '/tags/scripting',
    component: ComponentCreator('/tags/scripting', '77f'),
    exact: true
  },
  {
    path: '/tags/scripts',
    component: ComponentCreator('/tags/scripts', 'e9e'),
    exact: true
  },
  {
    path: '/tags/setup-azure-site-recovery',
    component: ComponentCreator('/tags/setup-azure-site-recovery', '39e'),
    exact: true
  },
  {
    path: '/tags/snap-shot',
    component: ComponentCreator('/tags/snap-shot', 'fac'),
    exact: true
  },
  {
    path: '/tags/virtual-machine',
    component: ComponentCreator('/tags/virtual-machine', '3a1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '9ad'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '73d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Azure/Backup and Disaster Recovery/Setup Azure Backup',
        component: ComponentCreator('/Azure/Backup and Disaster Recovery/Setup Azure Backup', 'f2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Azure/Backup and Disaster Recovery/Setup Azure Site Recovery',
        component: ComponentCreator('/Azure/Backup and Disaster Recovery/Setup Azure Site Recovery', 'f3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Azure/Data Management/Restore data from a Snapshot',
        component: ComponentCreator('/Azure/Data Management/Restore data from a Snapshot', '337'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Azure/Data Management/Restore VM from Snapshot',
        component: ComponentCreator('/Azure/Data Management/Restore VM from Snapshot', '4c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Azure/Infrastructure/AVD Image Update Guidance',
        component: ComponentCreator('/Azure/Infrastructure/AVD Image Update Guidance', '071'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Azure/Infrastructure/Create an Automation Account',
        component: ComponentCreator('/Azure/Infrastructure/Create an Automation Account', '444'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Azure/Infrastructure/Re-size a Virtual Machine',
        component: ComponentCreator('/Azure/Infrastructure/Re-size a Virtual Machine', 'a1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Azure/Infrastructure/Setup Azure Lighthouse',
        component: ComponentCreator('/Azure/Infrastructure/Setup Azure Lighthouse', 'a97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/azure',
        component: ComponentCreator('/category/azure', 'd40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/backup-and-disaster-recovery',
        component: ComponentCreator('/category/backup-and-disaster-recovery', '641'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/data-management',
        component: ComponentCreator('/category/data-management', 'd0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/infrastructure',
        component: ComponentCreator('/category/infrastructure', '960'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/powershell',
        component: ComponentCreator('/category/powershell', 'dde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/scripts',
        component: ComponentCreator('/category/scripts', '298'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PowerShell/Credential Management',
        component: ComponentCreator('/PowerShell/Credential Management', '506'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PowerShell/Error Management',
        component: ComponentCreator('/PowerShell/Error Management', 'da3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PowerShell/Scripts/Windows OS Scripts',
        component: ComponentCreator('/PowerShell/Scripts/Windows OS Scripts', 'ca5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/PowerShell/Windows Troubleshooting',
        component: ComponentCreator('/PowerShell/Windows Troubleshooting', 'bfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
