"use strict";(self.webpackChunkymp_react=self.webpackChunkymp_react||[]).push([[211],{3211:function(e,s,n){n.r(s),n.d(s,{default:function(){return p}});var a=n(2791),r=n(5861),i=n(9439),o=n(4687),t=n.n(o),l=n(5078),c=n(6491),d=n(6592),u=n(9406),f=n(2705),m=n(184),h=function(){var e=(0,a.useState)(!1),s=(0,i.Z)(e,2),n=s[0],o=s[1],h=(0,a.useState)(),p=(0,i.Z)(h,2),v=p[0],x=p[1],b=(0,a.useState)(!1),g=(0,i.Z)(b,2),j=g[0],N=g[1],w=function(){var e=(0,r.Z)(t().mark((function e(s){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},s.oldPassword||(n.oldPassword="Required"),s.newPassword||(n.newPassword="Required"),s.confirm?s.confirm!==s.newPassword&&(n.confirm="Must match"):n.confirm="Required",e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),k=function(){var e=(0,r.Z)(t().mark((function e(s){var n,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!1),o(!0),e.next=4,f.e8.login(f.e8.getCurrentUser().email,s.oldPassword);case 4:if(n=e.sent,x(!!n.message&&n.message),n.success){e.next=9;break}return o(!1),e.abrupt("return");case 9:if(!n.success){e.next=14;break}return e.next=12,f.KD.updateUser({password:s.newPassword});case 12:(a=e.sent).success?N(a.success):x(!!a.message&&a.message);case 14:o(!1);case 15:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:"content",children:(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-5 col-lg-4 col-xl-3 theiaStickySidebar",children:(0,m.jsx)(d.Z,{offsetTop:20,offsetBottom:20,children:(0,m.jsx)(u.Z,{})})}),(0,m.jsxs)("div",{className:"col-md-7 col-lg-8 col-xl-9",children:[j?(0,m.jsx)(c.at,{type:"success",boldMsg:"Success!",msg:"Password has been changed successfully!"}):"",(0,m.jsx)("div",{className:"card",children:(0,m.jsx)("div",{className:"card-body",children:(0,m.jsx)(l.l0,{validate:w,onSubmit:k,render:function(e){var s=e.handleSubmit,a=(e.submitError,e.form,e.submitting,e.pristine,e.values,e.reset);return(0,m.jsxs)("form",{onSubmit:function(e){s(e).then(a)},className:"needs-validation",noValidate:!0,children:[null===v||void 0===v?void 0:v.map((function(e,s){return(0,m.jsx)("div",{className:"invalid-feedback d-block mb-2",children:e},s)})),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Old Password"}),(0,m.jsx)(l.gN,{name:"oldPassword",className:"form-control floating",type:"password",component:c.UP})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"New Password"}),(0,m.jsx)(l.gN,{name:"newPassword",className:"form-control floating",type:"password",component:c.UP})]}),(0,m.jsxs)("div",{className:"form-group",children:[(0,m.jsx)("label",{children:"Confirm Password"}),(0,m.jsx)(l.gN,{name:"confirm",className:"form-control floating",type:"password",component:c.UP})]}),(0,m.jsx)("div",{className:"submit-section",children:(0,m.jsxs)("button",{type:"submit",className:"btn btn-primary submit-btn",disabled:n,children:[n?"":"Save Changes",n&&(0,m.jsx)("span",{className:"spinner-border spinner-border-sm mb-1"})]})})]})}})})})]})]})})})})};var p=function(){return(0,m.jsx)(h,{})}},9406:function(e,s,n){n.d(s,{g:function(){return b},Z:function(){return g}});var a=n(5861),r=n(9439),i=n(4687),o=n.n(i),t=n(5263),l=n(2705),c=n(1186),d=n(2426),u=n.n(d),f=n(2791),m=n(3168),h=n(3504),p=n(6871),v=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[{path:"/en/account-profile",icon:"fas fa-user-cog",label:e("ProfileSettings"),role:"all"},{path:"/en/account-appointments",icon:"fas fa-calendar-alt",label:e("Appointments"),role:"ROLE_ADMIN"},{path:"/en/admin/specialities",icon:"fas fa-stethoscope",label:e("Specialities"),role:"ROLE_ADMIN"},{path:"/en/admin/Doctors",icon:"fas fa-users",label:e("Doctors"),role:"ROLE_ADMIN"},{path:"/en/admin/Users",icon:"fas fa-users",label:e("Users"),role:"ROLE_ADMIN"},{path:"/en/admin/Countries",icon:"fas fa-gear",label:e("Countries"),role:"ROLE_ADMIN"},{path:"/en/admin/Cities",icon:"fas fa-gear",label:e("Cities"),role:"ROLE_ADMIN"},{path:"/en/admin/Facilities",icon:"fas fa-gear",label:e("Facilities"),role:"ROLE_ADMIN"},{path:"/en/admin/Treatments",icon:"fas fa-gear",label:e("Treatments"),role:"ROLE_ADMIN"},{path:"/en/account-change-password",icon:"fas fa-lock",label:e("ChangePassword"),role:"all"},{path:"/",icon:"fas fa-lock",label:e("logout"),role:"all",onClick:s.logout}]},x=n(184),b=function(){var e=(0,m.$)(),s=(0,r.Z)(e,2),n=s[0],i=(s[1],window.location.pathname),d=(0,f.useState)(null),b=(0,r.Z)(d,2),g=b[0],j=b[1],N=(0,p.s0)(),w=(0,f.useState)(),k=(0,r.Z)(w,2),y=(k[0],k[1]);(0,f.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.KD.getCurrentUser();case 3:s=e.sent,j(null===s||void 0===s?void 0:s.body),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error fetching current user:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var O={logout:function(){console.log("Logging out..."),l.e8.logout(),y(!1),N("/")}};return(0,x.jsxs)("div",{className:"profile-sidebar",children:[(0,x.jsx)("div",{className:"widget-profile pro-widget-content",children:(0,x.jsxs)("div",{className:"profile-info-widget",children:[(0,x.jsx)("a",{href:"#0",className:"booking-doc-img",children:(0,x.jsx)("img",{src:t,alt:"User"})}),(0,x.jsxs)("div",{className:"profile-det-info",children:[(0,x.jsx)("h3",{children:null===g||void 0===g?void 0:g.email}),(0,x.jsxs)("div",{className:"patient-details",children:[(0,x.jsxs)("h5",{children:[(0,x.jsx)("i",{className:"fas fa-birthday-cake"})," ",(null===g||void 0===g?void 0:g.dateOfBirth)&&u()(null===g||void 0===g?void 0:g.dateOfBirth).format("DD MMM YYYY"),","," ",(null===g||void 0===g?void 0:g.dateOfBirth)&&u()(null===g||void 0===g?void 0:g.dateOfBirth,"YYYY-MM-DD").month(0).from(u()().month(0))]}),(0,x.jsxs)("h5",{className:"mb-0",children:[(0,x.jsx)("i",{className:"fas fa-map-marker-alt"}),(null===g||void 0===g?void 0:g.cityOfResidence)&&(null===g||void 0===g?void 0:g.cityOfResidence),","," ",(null===g||void 0===g?void 0:g.countryOfResidence)&&c.mQ.getCountryOfCode(null===g||void 0===g?void 0:g.countryOfResidence).name]})]})]})]})}),(0,x.jsx)("div",{className:"dashboard-widget",children:(0,x.jsx)("nav",{className:"dashboard-menu",children:(0,x.jsx)("ul",{children:v(n,O).map((function(e,s){var n;return"all"===e.role||(null===g||void 0===g||null===(n=g.roles)||void 0===n?void 0:n.some((function(e){return"ROLE_ADMIN"===(null===e||void 0===e?void 0:e.name)})))&&"ROLE_ADMIN"===(null===e||void 0===e?void 0:e.role)?(0,x.jsx)("li",{className:i.includes(e.path)?"active":"",children:(0,x.jsxs)(h.rU,{to:e.path,onClick:function(s){e.onClick&&(s.preventDefault(),e.onClick())},children:[(0,x.jsx)("i",{className:e.icon}),(0,x.jsx)("span",{children:e.label})]})},s):null}))})})})]})},g=b}}]);
//# sourceMappingURL=211.2b182435.chunk.js.map