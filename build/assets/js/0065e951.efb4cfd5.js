"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={draft:!1,id:"Display-FTP-executable-for-users",title:"Disable FTP Executable",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Disable FTP Executable",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Disable FTP Executable",tags:[],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Disable FTP Executable for end users."},o=void 0,s={unversionedId:"Intune/Remediation-Scripts/Display-FTP-executable-for-users",id:"Intune/Remediation-Scripts/Display-FTP-executable-for-users",title:"Disable FTP Executable",description:"Disable FTP Executable for end users.",source:"@site/docs/Intune/Remediation-Scripts/Disable-FTP-for-User.md",sourceDirName:"Intune/Remediation-Scripts",slug:"/Intune/Remediation-Scripts/Display-FTP-executable-for-users",permalink:"/docs/Intune/Remediation-Scripts/Display-FTP-executable-for-users",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{draft:!1,id:"Display-FTP-executable-for-users",title:"Disable FTP Executable",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Disable FTP Executable",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Disable FTP Executable",tags:[],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Disable FTP Executable for end users."},sidebar:"tutorialSidebar",previous:{title:"Remediation Scripts",permalink:"/docs/category/remediation-scripts"},next:{title:"Remediation Scripts",permalink:"/docs/Intune/Remediation-Scripts/Re-Mapping-Drives"}},c={},l=[{value:"Detection Script",id:"detection-script",level:2},{value:"Remediation Script",id:"remediation-script",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The script below can be used to disable FTP Executable for end users and leave it working for systema and admins. This came up in a pen test that one of my colleagues was working on."),(0,i.kt)("h2",{id:"detection-script"},"Detection Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNumbers",showLineNumbers:!0},'try {\n\n    $acl = Get-Acl C:\\Windows\\System32\\ftp.exe\n    if($acl.Access.identityReference.value -eq \'BUILTIN\\Users\') {\n        Write-Warning "Not Compliant"\n        Exit 1\n    } else {\n        Write-Output "Compliant"\n        Exit 0\n    }\n    \n}\ncatch {\n    Write-Warning "Not Compliant"\n    Exit 1\n}\n')),(0,i.kt)("h2",{id:"remediation-script"},"Remediation Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell",metastring:"showLineNUmbers",showLineNUmbers:!0},'# The Script gathers the existing acl\'s on the .exe and then defines a new object matching the acl without touching inheritance\n$acl = Get-Acl C:\\Windows\\System32\\ftp.exe\n$inherit =[system.security.accesscontrol.InheritanceFlags]"ContainerInherit,ObjectInherit"\n$propagation =[system.security.accesscontrol.PropagationFlags]"None"\n$accessrule = New-Object System.Security.AccessControl.FileSystemAccessRule("BUILTIN\\Users","ReadAndExecute", $inherit, $Propagation ,,,"Allow")\n\n#The access rule is removed from the acl and the acl is then written to the .exe\n$acl.RemoveAccessRuleAll($accessrule)\nSet-Acl -AclObject $acl C:\\Windows\\System32\\ftp.exe\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Created: 2023-10-28, Last Updated: 2023-10-28"))}d.isMDXComponent=!0}}]);