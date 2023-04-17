"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1693],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:7,id:"Restore VM from Snapshot",title:"Restore VM from Snapshot",tags:["Azure","Restore","SnapShot"]},s=void 0,i={unversionedId:"How-to Guides/Azure/Restore VM from Snapshot",id:"How-to Guides/Azure/Restore VM from Snapshot",title:"Restore VM from Snapshot",description:"We're assuming there is already a valid Snapshot taken of the machine you're trying to restore.",source:"@site/docs/How-to Guides/Azure/Restore VM from Snapshot.md",sourceDirName:"How-to Guides/Azure",slug:"/How-to Guides/Azure/Restore VM from Snapshot",permalink:"/How-to Guides/Azure/Restore VM from Snapshot",draft:!1,tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Restore",permalink:"/tags/restore"},{label:"SnapShot",permalink:"/tags/snap-shot"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"Restore VM from Snapshot",title:"Restore VM from Snapshot",tags:["Azure","Restore","SnapShot"]},sidebar:"tutorialSidebar",previous:{title:"Restore data from a Snapshot",permalink:"/How-to Guides/Azure/Restore data from a Snapshot"},next:{title:"Setup Azure Backup",permalink:"/How-to Guides/Azure/Setup Azure Backup"}},l={},p=[{value:"Step 1: Create a new Managed Disk",id:"step-1-create-a-new-managed-disk",level:2},{value:"Step 2: Attach the new disk",id:"step-2-attach-the-new-disk",level:2},{value:"Step 3: Test the VM",id:"step-3-test-the-vm",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're assuming there is already a valid Snapshot taken of the machine you're trying to restore."),(0,o.kt)("h2",{id:"step-1-create-a-new-managed-disk"},"Step 1: Create a new Managed Disk"),(0,o.kt)("p",null,"Firstly we need to create a new managed disk from the snapshot taken, this is to then replace the disk on the VM we need to restore."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the search box, enter Disks, and then select Disks from the list."),(0,o.kt)("li",{parentName:"ol"},"On the Disks page, select Create."),(0,o.kt)("li",{parentName:"ol"},"Create the new disk based off of the current disk of the VM (In Source type, ensure the Snapshot is selected).")),(0,o.kt)("h2",{id:"step-2-attach-the-new-disk"},"Step 2: Attach the new disk"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Confirm there's no public IP attached to this VM, this process will stop & De-Allocate the VM in question.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find your VM in the Azure Portal."),(0,o.kt)("li",{parentName:"ol"},"Select Disks."),(0,o.kt)("li",{parentName:"ol"},"Click Swap OS Disk.")),(0,o.kt)("h2",{id:"step-3-test-the-vm"},"Step 3: Test the VM"),(0,o.kt)("p",null,"Once you've attached the new disk."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check it boots correctly."),(0,o.kt)("li",{parentName:"ol"},"Confirm apps are installed and run")))}c.isMDXComponent=!0}}]);