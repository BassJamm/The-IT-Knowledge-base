"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={draft:!1,id:"Formats and Conversions",title:"Certificate formats and Converting formats",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Certificate formats and Converting formats",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Certificate formats and Converting formats",tags:["Certificates"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Certificate formatting and converting them to different formats."},o=void 0,l={unversionedId:"Certificates/Formats and Conversions",id:"Certificates/Formats and Conversions",title:"Certificate formats and Converting formats",description:"Certificate formatting and converting them to different formats.",source:"@site/docs/Certificates/Formats & Conversion.md",sourceDirName:"Certificates",slug:"/Certificates/Formats and Conversions",permalink:"/docs/Certificates/Formats and Conversions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",tags:[{label:"Certificates",permalink:"/docs/tags/certificates"}],version:"current",sidebarPosition:1,frontMatter:{draft:!1,id:"Formats and Conversions",title:"Certificate formats and Converting formats",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Certificate formats and Converting formats",sidebar_position:1,toc_max_heading_level:4,pagination_label:"Certificate formats and Converting formats",tags:["Certificates"],custom_edit_url:"https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md",description:"Certificate formatting and converting them to different formats."},sidebar:"tutorialSidebar",previous:{title:"Certificates",permalink:"/docs/category/certificates"},next:{title:"Generating a CSR",permalink:"/docs/Certificates/Generating a CSR"}},s={},c=[{value:"Document Control",id:"document-control",level:2},{value:"Certificate Formats",id:"certificate-formats",level:2},{value:"X.509 certificate encoding formats and extensions",id:"x509-certificate-encoding-formats-and-extensions",level:3},{value:"PEM (Base64 (ASCII))",id:"pem-base64-ascii",level:4},{value:"PKCS#7 (Base64 (ASCII))",id:"pkcs7-base64-ascii",level:4},{value:"DER (Binary)",id:"der-binary",level:4},{value:"PKCS#12 (Binary)",id:"pkcs12-binary",level:4},{value:"Convertion to different formats",id:"convertion-to-different-formats",level:2},{value:"Open SSL",id:"open-ssl",level:3},{value:"Installing Open SSL",id:"installing-open-ssl",level:4},{value:"Using Open SSL",id:"using-open-ssl",level:3},{value:"Before you begin",id:"before-you-begin",level:4},{value:"PFX file with separate key file",id:"pfx-file-with-separate-key-file",level:4},{value:"PFX to PEM with Private Key File",id:"pfx-to-pem-with-private-key-file",level:4}],p={toc:c},f="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"document-control"},"Document Control"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Created: 27/04/23"),(0,a.kt)("li",{parentName:"ul"},"Last Updated: 27/04/23")),(0,a.kt)("h2",{id:"certificate-formats"},"Certificate Formats"),(0,a.kt)("p",null,"All you need to know is that there are several file extension types and encoding formats. Plus, in order to successfully install an SSL on your server, you need to know which type exactly your server or device requires."),(0,a.kt)("h3",{id:"x509-certificate-encoding-formats-and-extensions"},"X.509 certificate encoding formats and extensions"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},".pem, "),".crt, ",(0,a.kt)("em",{parentName:"p"},".ca-bundle, "),".cer, ",(0,a.kt)("em",{parentName:"p"},".p7b, "),".p7s files contain one or more X.509 digital certificate files that use base64 (ASCII) encoding. You get one of those in a zip file."),(0,a.kt)("p",null,"You may also encounter *.pfx files. This is an archive file format for storing several cryptographic objects in a single file. In the scope of SSL certificates for SSL/TLS client and SSL/TLS web server authentication, a .pfx file must contain the end-entity certificate (issued for your domain), a matching private key, and may optionally include an intermediate certification authority (a.k.a. a CA Bundle). All this is wrapped up in a single file which is then protected with a pfx password. A Private key must be kept secret and is something that you generate alongside with the certificate signing request (CSR) by using an available tool."),(0,a.kt)("h4",{id:"pem-base64-ascii"},"PEM (Base64 (ASCII))"),(0,a.kt)("p",null,"A PEM file is a text format, the pem file contains the certificates inforamtion in a Hash format, which can be placed into an application."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".pem"),(0,a.kt)("li",{parentName:"ul"},".crt"),(0,a.kt)("li",{parentName:"ul"},".ca-bundle")),(0,a.kt)("p",null,"You can decode the Hash using a tool such as this online one, paste the text into the tool for it to show you the information. ",(0,a.kt)("a",{parentName:"p",href:"https://www.sslshopper.com/certificate-decoder.html"},"https://www.sslshopper.com/certificate-decoder.html")," "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pem Decom",src:n(6209).Z,width:"822",height:"722"})),(0,a.kt)("p",null,"You can also do this using OpenSSL from your computer with the command openssl x509 -in certificate.crt -text -noout"),(0,a.kt)("h4",{id:"pkcs7-base64-ascii"},"PKCS#7 (Base64 (ASCII))"),(0,a.kt)("p",null,"Are mostly used in Windows or Java-based server environments (e.g. Internet Information Server (IIS), MS Exchange server, Java Tomcat, etc). PKCS#7 certificate file includes the end-entity certificate (the one issued to your domain name), plus one or more trusted intermediate certification authority files."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".p7b"),(0,a.kt)("li",{parentName:"ul"},".p7s")),(0,a.kt)("h4",{id:"der-binary"},"DER (Binary)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".der"),(0,a.kt)("li",{parentName:"ul"},".cer")),(0,a.kt)("p",null,"These files are very often used for Microsoft IIS services."),(0,a.kt)("h4",{id:"pkcs12-binary"},"PKCS#12 (Binary)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".pfx"),(0,a.kt)("li",{parentName:"ul"},".p12")),(0,a.kt)("h2",{id:"convertion-to-different-formats"},"Convertion to different formats"),(0,a.kt)("h3",{id:"open-ssl"},"Open SSL"),(0,a.kt)("h4",{id:"installing-open-ssl"},"Installing Open SSL"),(0,a.kt)("p",null,"Install Chocolatey (Package Manager), Link to document ."),(0,a.kt)("h3",{id:"using-open-ssl"},"Using Open SSL"),(0,a.kt)("h4",{id:"before-you-begin"},"Before you begin"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create a folder")," and place the pfx file into the folder."),(0,a.kt)("li",{parentName:"ol"},"To load openssl, ",(0,a.kt)("strong",{parentName:"li"},"open cmd as admin"),", navigate to \u201c",(0,a.kt)("strong",{parentName:"li"},"C:\\Program Files\\OpenSSL-Win64"),"\u201d, run the ",(0,a.kt)("strong",{parentName:"li"},"start.bat")," file to launch openssl."),(0,a.kt)("li",{parentName:"ol"},"Change to the folder containing the pfx file and run the following commands.")),(0,a.kt)("h4",{id:"pfx-file-with-separate-key-file"},"PFX file with separate key file"),(0,a.kt)("p",null,"Follow the guidance in the above section before proceeding."),(0,a.kt)("p",null,"Type the following commands into your admin command prompt."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"openssl pkcs12 -in nameofyourcertificate.pfx -nocerts -nodes -out privatekey.key"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"openssl pkcs12 -in nameofyourcertificate.pfx -clcerts -nokeys -out certificate.cer")),(0,a.kt)("p",null,"This will create a privatekey.key file (containing the private keys) and certificate.cer (containing the certificate)."),(0,a.kt)("h4",{id:"pfx-to-pem-with-private-key-file"},"PFX to PEM with Private Key File"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/15413646/converting-pfx-to-pem-using-openssl"},"Stack OverFlow link"),"."),(0,a.kt)("p",null,"Follow the guidance in the ",(0,a.kt)("a",{parentName:"p",href:"#before-you-begin"},"Before you begin")," section above before proceeding."),(0,a.kt)("p",null,"To convert a PFX file to a PEM file that contains both the certificate and private key (you'll need the private key for the PFX file to do this)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"openssl pkcs12 -in filename.pfx -out cert.pem -nodes")),(0,a.kt)("p",null,"To convert a PFX file to separate public and private key PEM files (you'll need the private key for the PFX file to do this):"),(0,a.kt)("p",null,"Extracts the private key form a PFX to a PEM file:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"openssl pkcs12 -in filename.pfx -nocerts -out key.pem")),(0,a.kt)("p",null,"Exports the certificate (includes the public key only):"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"openssl pkcs12 -in filename.pfx -clcerts -nokeys -out cert.pem")),(0,a.kt)("p",null,"Removes the password (paraphrase) from the extracted private key (optional):"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"openssl rsa -in key.pem -out server.key")))}d.isMDXComponent=!0},6209:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Pem-Decode-001-275c0a3655e92c1754066a031a1e1ffb.jpg"}}]);