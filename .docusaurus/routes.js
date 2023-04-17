import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '17c'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', 'eec'),
    exact: true
  },
  {
    path: '/tags/aad-joined',
    component: ComponentCreator('/tags/aad-joined', '497'),
    exact: true
  },
  {
    path: '/tags/admin-tasks',
    component: ComponentCreator('/tags/admin-tasks', 'a05'),
    exact: true
  },
  {
    path: '/tags/apns',
    component: ComponentCreator('/tags/apns', 'c9b'),
    exact: true
  },
  {
    path: '/tags/app-deployment',
    component: ComponentCreator('/tags/app-deployment', '73a'),
    exact: true
  },
  {
    path: '/tags/apple',
    component: ComponentCreator('/tags/apple', 'fd6'),
    exact: true
  },
  {
    path: '/tags/apps',
    component: ComponentCreator('/tags/apps', '44e'),
    exact: true
  },
  {
    path: '/tags/automation',
    component: ComponentCreator('/tags/automation', '363'),
    exact: true
  },
  {
    path: '/tags/autopilot',
    component: ComponentCreator('/tags/autopilot', '6ec'),
    exact: true
  },
  {
    path: '/tags/azure',
    component: ComponentCreator('/tags/azure', 'e60'),
    exact: true
  },
  {
    path: '/tags/azure-ad',
    component: ComponentCreator('/tags/azure-ad', '30b'),
    exact: true
  },
  {
    path: '/tags/azure-backup',
    component: ComponentCreator('/tags/azure-backup', '5b5'),
    exact: true
  },
  {
    path: '/tags/azure-virtual-desktop',
    component: ComponentCreator('/tags/azure-virtual-desktop', '33e'),
    exact: true
  },
  {
    path: '/tags/bitlocker',
    component: ComponentCreator('/tags/bitlocker', '5bc'),
    exact: true
  },
  {
    path: '/tags/certificate',
    component: ComponentCreator('/tags/certificate', '2fe'),
    exact: true
  },
  {
    path: '/tags/certificates',
    component: ComponentCreator('/tags/certificates', '5fa'),
    exact: true
  },
  {
    path: '/tags/citrix-cloud',
    component: ComponentCreator('/tags/citrix-cloud', '0e0'),
    exact: true
  },
  {
    path: '/tags/google-play',
    component: ComponentCreator('/tags/google-play', 'd7f'),
    exact: true
  },
  {
    path: '/tags/guide',
    component: ComponentCreator('/tags/guide', 'fc3'),
    exact: true
  },
  {
    path: '/tags/intune',
    component: ComponentCreator('/tags/intune', '79c'),
    exact: true
  },
  {
    path: '/tags/issue',
    component: ComponentCreator('/tags/issue', '55c'),
    exact: true
  },
  {
    path: '/tags/kb',
    component: ComponentCreator('/tags/kb', '89d'),
    exact: true
  },
  {
    path: '/tags/lighthouse',
    component: ComponentCreator('/tags/lighthouse', '9c3'),
    exact: true
  },
  {
    path: '/tags/mdm',
    component: ComponentCreator('/tags/mdm', 'd34'),
    exact: true
  },
  {
    path: '/tags/networking',
    component: ComponentCreator('/tags/networking', 'c09'),
    exact: true
  },
  {
    path: '/tags/partner-centre',
    component: ComponentCreator('/tags/partner-centre', 'd56'),
    exact: true
  },
  {
    path: '/tags/pem',
    component: ComponentCreator('/tags/pem', '985'),
    exact: true
  },
  {
    path: '/tags/pfx',
    component: ComponentCreator('/tags/pfx', '518'),
    exact: true
  },
  {
    path: '/tags/reference',
    component: ComponentCreator('/tags/reference', '128'),
    exact: true
  },
  {
    path: '/tags/reset-device',
    component: ComponentCreator('/tags/reset-device', 'fba'),
    exact: true
  },
  {
    path: '/tags/resource-creation',
    component: ComponentCreator('/tags/resource-creation', 'b9b'),
    exact: true
  },
  {
    path: '/tags/restore',
    component: ComponentCreator('/tags/restore', 'c29'),
    exact: true
  },
  {
    path: '/tags/scripting',
    component: ComponentCreator('/tags/scripting', '69c'),
    exact: true
  },
  {
    path: '/tags/setup-azure-site-recovery',
    component: ComponentCreator('/tags/setup-azure-site-recovery', '823'),
    exact: true
  },
  {
    path: '/tags/share-point-online',
    component: ComponentCreator('/tags/share-point-online', 'f2a'),
    exact: true
  },
  {
    path: '/tags/snap-shot',
    component: ComponentCreator('/tags/snap-shot', 'fc2'),
    exact: true
  },
  {
    path: '/tags/tutorial',
    component: ComponentCreator('/tags/tutorial', 'b67'),
    exact: true
  },
  {
    path: '/tags/virtual-machine',
    component: ComponentCreator('/tags/virtual-machine', '4c7'),
    exact: true
  },
  {
    path: '/tags/vpp',
    component: ComponentCreator('/tags/vpp', 'f41'),
    exact: true
  },
  {
    path: '/tags/windows',
    component: ComponentCreator('/tags/windows', '5aa'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '617'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '73d'),
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
        path: '/category/azure-active-directory',
        component: ComponentCreator('/category/azure-active-directory', 'fbd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/certificates',
        component: ComponentCreator('/category/certificates', 'b20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/citrix-cloud',
        component: ComponentCreator('/category/citrix-cloud', 'f48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/how-to-guides',
        component: ComponentCreator('/category/how-to-guides', 'db3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/intune',
        component: ComponentCreator('/category/intune', '12f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/intune-1',
        component: ComponentCreator('/category/intune-1', '31f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/partner-centre',
        component: ComponentCreator('/category/partner-centre', '482'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/references',
        component: ComponentCreator('/category/references', '0de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/scenario-based-guidance',
        component: ComponentCreator('/category/scenario-based-guidance', '28b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/sharepoint-online',
        component: ComponentCreator('/category/sharepoint-online', 'bac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/windows',
        component: ComponentCreator('/category/windows', 'c97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure Active Directory/Decom an Azure AD App',
        component: ComponentCreator('/How-to Guides/Azure Active Directory/Decom an Azure AD App', 'c67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure/AVD Image Update Guidance',
        component: ComponentCreator('/How-to Guides/Azure/AVD Image Update Guidance', '7d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure/Create an Automation Account',
        component: ComponentCreator('/How-to Guides/Azure/Create an Automation Account', '59b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure/Re-size a Virtual Machine',
        component: ComponentCreator('/How-to Guides/Azure/Re-size a Virtual Machine', '46a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure/Restore data from a Snapshot',
        component: ComponentCreator('/How-to Guides/Azure/Restore data from a Snapshot', '4bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure/Restore VM from Snapshot',
        component: ComponentCreator('/How-to Guides/Azure/Restore VM from Snapshot', 'eff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure/Setup Azure Backup',
        component: ComponentCreator('/How-to Guides/Azure/Setup Azure Backup', '437'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure/Setup Azure Lighthouse',
        component: ComponentCreator('/How-to Guides/Azure/Setup Azure Lighthouse', '722'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Azure/Setup Azure Site Recovery',
        component: ComponentCreator('/How-to Guides/Azure/Setup Azure Site Recovery', '79b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Certificates/Certificate Formats and Conversions',
        component: ComponentCreator('/How-to Guides/Certificates/Certificate Formats and Conversions', '069'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Certificates/Generating a CSR',
        component: ComponentCreator('/How-to Guides/Certificates/Generating a CSR', '2bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Certificates/Request Cert from internal CA',
        component: ComponentCreator('/How-to Guides/Certificates/Request Cert from internal CA', 'd1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Citrix Cloud/Citrix Image Update Guidance',
        component: ComponentCreator('/How-to Guides/Citrix Cloud/Citrix Image Update Guidance', '482'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Intune/Deploy Google Play store app',
        component: ComponentCreator('/How-to Guides/Intune/Deploy Google Play store app', '872'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Intune/Perform an AutoPilot Reset',
        component: ComponentCreator('/How-to Guides/Intune/Perform an AutoPilot Reset', 'b63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Intune/Renew Apple Tokens and Certs',
        component: ComponentCreator('/How-to Guides/Intune/Renew Apple Tokens and Certs', 'be7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Partner Centre/Setup an Azure Subscription from Partner Centre',
        component: ComponentCreator('/How-to Guides/Partner Centre/Setup an Azure Subscription from Partner Centre', '5c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/SharePoint Online/SharePoint Admin Tasks',
        component: ComponentCreator('/How-to Guides/SharePoint Online/SharePoint Admin Tasks', '9be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-to Guides/Windows/Reset BitLocker PIN or Password',
        component: ComponentCreator('/How-to Guides/Windows/Reset BitLocker PIN or Password', 'e1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/References/Intune/Device Troubleshooting',
        component: ComponentCreator('/References/Intune/Device Troubleshooting', '0d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/References/Partner access to Az Sub',
        component: ComponentCreator('/References/Partner access to Az Sub', 'ba8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Scenario based Guidance/Troubleshooting a connectivity issue',
        component: ComponentCreator('/Scenario based Guidance/Troubleshooting a connectivity issue', 'f39'),
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
