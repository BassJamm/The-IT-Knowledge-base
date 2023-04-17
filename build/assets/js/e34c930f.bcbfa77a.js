"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4,id:"Renew Apple Tokens and Certs",title:"Renew Apple Tokens and Certs",tags:["KB","Intune","Apple","Certificate","VPP","MDM","APNS"]},i=void 0,l={unversionedId:"How-to Guides/Intune/Renew Apple Tokens and Certs",id:"How-to Guides/Intune/Renew Apple Tokens and Certs",title:"Renew Apple Tokens and Certs",description:"Read more on this top here, https://learn.microsoft.com/en-us/intune-education/renew-ios-certificate-token.",source:"@site/docs/How-to Guides/Intune/Renew Apple Tokens and Certs.md",sourceDirName:"How-to Guides/Intune",slug:"/How-to Guides/Intune/Renew Apple Tokens and Certs",permalink:"/How-to Guides/Intune/Renew Apple Tokens and Certs",draft:!1,tags:[{label:"KB",permalink:"/tags/kb"},{label:"Intune",permalink:"/tags/intune"},{label:"Apple",permalink:"/tags/apple"},{label:"Certificate",permalink:"/tags/certificate"},{label:"VPP",permalink:"/tags/vpp"},{label:"MDM",permalink:"/tags/mdm"},{label:"APNS",permalink:"/tags/apns"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"Renew Apple Tokens and Certs",title:"Renew Apple Tokens and Certs",tags:["KB","Intune","Apple","Certificate","VPP","MDM","APNS"]},sidebar:"tutorialSidebar",previous:{title:"Perform an AutoPilot Reset",permalink:"/How-to Guides/Intune/Perform an AutoPilot Reset"},next:{title:"Partner Centre",permalink:"/category/partner-centre"}},p={},s=[{value:"Apple MDM (Mobile Device Management) certificate",id:"apple-mdm-mobile-device-management-certificate",level:2},{value:"What is it?",id:"what-is-it",level:3},{value:"Replacement steps",id:"replacement-steps",level:3},{value:"Enrollment program token",id:"enrollment-program-token",level:2},{value:"VPP (Volume Purchase Program) token(s)",id:"vpp-volume-purchase-program-tokens",level:2},{value:"Testing",id:"testing",level:2}],m={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Read more on this top here, ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/intune-education/renew-ios-certificate-token"},"https://learn.microsoft.com/en-us/intune-education/renew-ios-certificate-token"),"."),(0,r.kt)("p",null,"You need to renew possibly 3 items here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apple MDM (Mobile Device Management) certificate or Push Certificate."),(0,r.kt)("li",{parentName:"ul"},"Enrollment Program Token or APNS."),(0,r.kt)("li",{parentName:"ul"},"Apple Volume Purchase Program (VPP) token.")),(0,r.kt)("h2",{id:"apple-mdm-mobile-device-management-certificate"},"Apple MDM (Mobile Device Management) certificate"),(0,r.kt)("h3",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,"The MDM push certificate is associated with the Apple ID you used to create it. The Certificate is used to enrol and manage your IOS devices in your tenant."),(0,r.kt)("h3",{id:"replacement-steps"},"Replacement steps"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not let this expire, if it does expire you may have to re-enrol deviecs again.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://admin.microsoft.com"},"https://admin.microsoft.com"),", navigate to the Intune portal."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Devices")," > ",(0,r.kt)("strong",{parentName:"li"},"Enroll Devices")," > ",(0,r.kt)("strong",{parentName:"li"},"Apple enrollment")," > ",(0,r.kt)("strong",{parentName:"li"},"Apple MDM Push Certificates"),"."),(0,r.kt)("li",{parentName:"ol"},"Fill out the information in the window that pops out from the right.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("img",{alt:"APB Cert upload",src:n(9827).Z,width:"989",height:"885"})))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Follow the onscreen instructions"),". Remember to sign into the Apple Push Certificates Portal with the ",(0,r.kt)("strong",{parentName:"li"},"Apple ID you used to create your original certificate"),"."),(0,r.kt)("li",{parentName:"ol"},"Within the Apple Push Certificates Portal, click Renew on the old certificate. You can create a new Certificate; however, this requires further steps outlined in the following ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/mem/intune/enrollment/apple-mdm-push-certificate-get"},"Microsoft link."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("img",{alt:"APB Cert upload",src:n(7836).Z,width:"630",height:"236"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Upload")," the new CSR you just created."),(0,r.kt)("li",{parentName:"ol"},"After you renew and download the certificate, return to Intune to complete the remaining steps on this screen."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Upload"),".")),(0,r.kt)("h2",{id:"enrollment-program-token"},"Enrollment program token"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to Office 365, navigate to the Intune portal."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Devices")," > ",(0,r.kt)("strong",{parentName:"li"},"Enroll Device"),"s > ",(0,r.kt)("strong",{parentName:"li"},"Apple enrollment")," >",(0,r.kt)("strong",{parentName:"li"},"Enrollment program tokens"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Select the token")," that you want to renew."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Renew token")," at the top."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Sign-into Apple Business Manager")," with the account shown on the token."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click your name")," in the bottom left of the screen."),(0,r.kt)("li",{parentName:"ol"},'Under "Your MDM Servers" ',(0,r.kt)("strong",{parentName:"li"},"select the relevant server"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click download")," at the top in the right-hand half of the page.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("img",{alt:"ABM example",src:n(4663).Z,width:"1201",height:"828"})))),(0,r.kt)("li",{parentName:"ol"},"Return to Intune portal."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Upload the VPP token")," using the provided option."),(0,r.kt)("li",{parentName:"ol"},"Select, Next then ",(0,r.kt)("strong",{parentName:"li"},"Review + Save"),".")),(0,r.kt)("h2",{id:"vpp-volume-purchase-program-tokens"},"VPP (Volume Purchase Program) token(s)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to Office 365, navigate to the Intune portal."),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Tenant settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Connectors and tokens")," > ",(0,r.kt)("strong",{parentName:"li"},"Apple VPP Tokens"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click on the token")," you want to renew."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click the Edit")," button next to the basics section."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Sign into Apple Business Manager")," with the account you used to set this up originally."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click your name")," in the bottom left > ",(0,r.kt)("strong",{parentName:"li"},"Payments and Billing"),"."),(0,r.kt)("li",{parentName:"ol"},"Scroll down to the Server Tokens section."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click download")," next to your token name, it should match the organisation in your Intune tenant."),(0,r.kt)("li",{parentName:"ol"},"Back in Intune, ",(0,r.kt)("strong",{parentName:"li"},"upload the VPP token")," using the provided option."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Notify the customer that the above has been updated successfully. The customer should confirm they can enroll new devices into Intune, download and assign apps to the devices."))}c.isMDXComponent=!0},4663:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Apple-Business-Manager-01-ffbf2088de8ac252190dc81c2b77c4b1.jpg"},9827:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Configure-MDM Push-Certificate-001-9510b559ae13a94420c7e666796183c6.jpg"},7836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Configure-MDM Push-Certificate-002-35400021ba42ad2ceaed109f500a57c9.jpg"}}]);