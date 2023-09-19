import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '353'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1bd'),
    exact: true
  },
  {
    path: '/blog/Defender-for-Endpoint-Woes',
    component: ComponentCreator('/blog/Defender-for-Endpoint-Woes', 'd7b'),
    exact: true
  },
  {
    path: '/blog/pwsh-challenge-001',
    component: ComponentCreator('/blog/pwsh-challenge-001', '582'),
    exact: true
  },
  {
    path: '/blog/pwsh-challenge-002',
    component: ComponentCreator('/blog/pwsh-challenge-002', 'f57'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '3c3'),
    exact: true
  },
  {
    path: '/blog/tags/azure',
    component: ComponentCreator('/blog/tags/azure', 'bd3'),
    exact: true
  },
  {
    path: '/blog/tags/challenge',
    component: ComponentCreator('/blog/tags/challenge', 'd01'),
    exact: true
  },
  {
    path: '/blog/tags/defender',
    component: ComponentCreator('/blog/tags/defender', '2c9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus-v-2',
    component: ComponentCreator('/blog/tags/docusaurus-v-2', '42e'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '98e'),
    exact: true
  },
  {
    path: '/blog/tags/power-shell',
    component: ComponentCreator('/blog/tags/power-shell', '400'),
    exact: true
  },
  {
    path: '/blog/tags/script',
    component: ComponentCreator('/blog/tags/script', '8f2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '524'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags', '769'),
    exact: true
  },
  {
    path: '/docs/tags/app-registrations',
    component: ComponentCreator('/docs/tags/app-registrations', '628'),
    exact: true
  },
  {
    path: '/docs/tags/automation',
    component: ComponentCreator('/docs/tags/automation', '346'),
    exact: true
  },
  {
    path: '/docs/tags/azure',
    component: ComponentCreator('/docs/tags/azure', '999'),
    exact: true
  },
  {
    path: '/docs/tags/azure-ad',
    component: ComponentCreator('/docs/tags/azure-ad', '861'),
    exact: true
  },
  {
    path: '/docs/tags/azure-backup',
    component: ComponentCreator('/docs/tags/azure-backup', '72e'),
    exact: true
  },
  {
    path: '/docs/tags/command-line',
    component: ComponentCreator('/docs/tags/command-line', 'b41'),
    exact: true
  },
  {
    path: '/docs/tags/command-line-ref',
    component: ComponentCreator('/docs/tags/command-line-ref', '544'),
    exact: true
  },
  {
    path: '/docs/tags/git',
    component: ComponentCreator('/docs/tags/git', '808'),
    exact: true
  },
  {
    path: '/docs/tags/lighthouse',
    component: ComponentCreator('/docs/tags/lighthouse', '075'),
    exact: true
  },
  {
    path: '/docs/tags/microsoft-graph',
    component: ComponentCreator('/docs/tags/microsoft-graph', 'a3f'),
    exact: true
  },
  {
    path: '/docs/tags/power-shell',
    component: ComponentCreator('/docs/tags/power-shell', 'cc1'),
    exact: true
  },
  {
    path: '/docs/tags/resource-creation',
    component: ComponentCreator('/docs/tags/resource-creation', 'cbf'),
    exact: true
  },
  {
    path: '/docs/tags/restore',
    component: ComponentCreator('/docs/tags/restore', 'f5e'),
    exact: true
  },
  {
    path: '/docs/tags/scripting',
    component: ComponentCreator('/docs/tags/scripting', '8ec'),
    exact: true
  },
  {
    path: '/docs/tags/snapshot',
    component: ComponentCreator('/docs/tags/snapshot', '22a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'cdf'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '76e'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '63d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure-Active-Directory/App-Registrations/Decom an Azure AD App',
        component: ComponentCreator('/docs/Azure-Active-Directory/App-Registrations/Decom an Azure AD App', '84b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Automation/Automation-Accounts/Create an Automation Account',
        component: ComponentCreator('/docs/Azure/Automation/Automation-Accounts/Create an Automation Account', 'bfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Azure-Backup/Setup Azure Backup',
        component: ComponentCreator('/docs/Azure/Azure-Backup/Setup Azure Backup', '637'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Azure-Lighthouse/Setup Azure Lighthouse',
        component: ComponentCreator('/docs/Azure/Azure-Lighthouse/Setup Azure Lighthouse', '835'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Azure/Disks/Restore data from a Snapshot',
        component: ComponentCreator('/docs/Azure/Disks/Restore data from a Snapshot', 'a3e'),
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
        path: '/docs/category/automation',
        component: ComponentCreator('/docs/category/automation', '5c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/automation-accounts',
        component: ComponentCreator('/docs/category/automation-accounts', '7e2'),
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
        path: '/docs/category/azure-backup',
        component: ComponentCreator('/docs/category/azure-backup', 'e40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/azure-lighthouse',
        component: ComponentCreator('/docs/category/azure-lighthouse', '79a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/disks',
        component: ComponentCreator('/docs/category/disks', '4ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/git',
        component: ComponentCreator('/docs/category/git', '5f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/microsoft-graph',
        component: ComponentCreator('/docs/category/microsoft-graph', '7e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/powershell',
        component: ComponentCreator('/docs/category/powershell', '4b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/powershell-1',
        component: ComponentCreator('/docs/category/powershell-1', '4ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PowerShell/Git/Git Cheatsheet',
        component: ComponentCreator('/docs/PowerShell/Git/Git Cheatsheet', '974'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PowerShell/MS-Graph/Microsoft Graph Cheatsheet',
        component: ComponentCreator('/docs/PowerShell/MS-Graph/Microsoft Graph Cheatsheet', '466'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/PowerShell/PowerShell-cheatsheet/',
        component: ComponentCreator('/docs/PowerShell/PowerShell-cheatsheet/', '6d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a89'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
