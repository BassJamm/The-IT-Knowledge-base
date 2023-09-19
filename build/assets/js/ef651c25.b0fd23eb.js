"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Microsoft Defender for Endpoint Woes",description:"Windows services hating each other on Server 2012 R2.",slug:"Defender-for-Endpoint-Woes",date:"2023-08-05T11:00",authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],tags:["Defender","Azure"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/Defender-for-Endpoint-Woes",source:"@site/blog/2023-09-12-Defender-Woes/Microsoft-Defender-for-Endpoint-Woes.md",title:"Microsoft Defender for Endpoint Woes",description:"Windows services hating each other on Server 2012 R2.",date:"2023-08-05T11:00:00.000Z",formattedDate:"August 5, 2023",tags:[{label:"Defender",permalink:"/blog/tags/defender"},{label:"Azure",permalink:"/blog/tags/azure"}],readingTime:1.3333333333333333,hasTruncateMarker:!0,authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],frontMatter:{title:"Microsoft Defender for Endpoint Woes",description:"Windows services hating each other on Server 2012 R2.",slug:"Defender-for-Endpoint-Woes",date:"2023-08-05T11:00",authors:[{name:"Will",title:"Creator of the IT KB.",url:"https://github.com/BassJamm?tab=repositories"}],tags:["Defender","Azure"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},prevItem:{title:"Challenge 1 - File Download Script with PowerShell",permalink:"/blog/pwsh-challenge-001"},nextItem:{title:"Welcome!",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0]},p=[{value:"The Investigation",id:"the-investigation",level:2},{value:"What Solved It",id:"what-solved-it",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'For the last 3 months our monitoring team at my workplace has been spammed with alerts about the Windows Defender Advanced Threat Protection Service has entered the "stopped" state for one 2012 R2 server.'),(0,o.kt)("p",null,"Quickly followed about 6 minutes later with another alert saying, the service is okay."),(0,o.kt)("admonition",{title:"Quick Social Plug",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out my other post locations: -"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://willh.hashnode.dev/"},"HashNode Link")))),(0,o.kt)("h2",{id:"the-investigation"},"The Investigation"),(0,o.kt)("p",null,"From checking the alert, I could see the service was stopping and starting but, no real reason as to why it was doing this. This is when I turned to PowerShell (",(0,o.kt)("em",{parentName:"p"},"still unsure of why I did this over trusty Event Viewer, just seems to be my default now"),")."),(0,o.kt)("p",null,"Quickly smashed out the below command to see what I could find."),(0,o.kt)("p",null,"This promptly spat out these errors."),(0,o.kt)("p",null,"After googling this (as any techy would), there are a lot of mentions of this error message all over the place with suggestions to do the following:-"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable or uninstall any other AV products on the device.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run a Full system scan for viruses.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run a System File Checker scan from the command line, ",(0,o.kt)("inlineCode",{parentName:"p"},"sfc /scannow"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Re-install the Defender for Endpoint on that device.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the OS to a new version (",(0,o.kt)("em",{parentName:"p"},"A bit extreme mind you however, new OS versions have much better support for Defender, you don't need this service on Server 2016 and above, so it's still valid!"),")"))),(0,o.kt)("h2",{id:"what-solved-it"},"What Solved It"),(0,o.kt)("p",null,"The short answer is, I'm not 100% certain."),(0,o.kt)("p",null,"Our first port of call was to remove the ",(0,o.kt)("em",{parentName:"p"},"System Center Endpoint Protection")," application, which we probably should have done before installing the ",(0,o.kt)("em",{parentName:"p"},"Defender for Endpoint")," application to be honest."),(0,o.kt)("p",null,"Secondly, we off-boarded the appliance from Defedner and then on-boarded it again by doing the following: -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Download the off-boarding script from your Defender portal."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In the navigation pane, select Settings ",">"," Endpoints ",">"," Device management ",">"," Offboarding."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Off-Board the Server using the script provided by Microsoft below."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Packages\\Plugins\\Microsoft.Azure.AzureDefenderForServers.MDE.Windows\\versionNo\\Install.ps1."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The command is, ",(0,o.kt)("inlineCode",{parentName:"p"},"Install.ps1 -OffboardingScript .\\WindowsDefenderATPOffboardingScript_valid_until_*.cmd"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reboot the server.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the Defender application is gone from Programs and Features and that the Services are gone. If not, manually uninstall using Programs and Features.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On-Board the server again using the script provided by Microsoft. Command below."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Packages\\Plugins\\Microsoft.Azure.AzureDefenderForServers.MDE.Windows\\versionNo\\Install.ps1."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The command is, ",(0,o.kt)("inlineCode",{parentName:"p"},".\\Install.ps1 -OnboardingScript .\\WindowsDefenderATPOnboardingScript_valid_until_*.cmd"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reboot the server."))),(0,o.kt)("p",null,"Hopefully this helps somone!"))}c.isMDXComponent=!0}}]);