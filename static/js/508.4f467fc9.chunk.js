"use strict";(self.webpackChunkymp_react=self.webpackChunkymp_react||[]).push([[508],{4508:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var s=t(2791),i=t(3433),l=t(5861),a=t(1413),c=t(9439),r=t(4687),o=t.n(r),d=t(3168),u=t(3504),p=t(6871),m=t(1951),v=t(2705),x=t(1186),f=t(184),h=function(){var e,n,t=(0,d.$)(),r=(0,c.Z)(t,2),h=r[0],y=r[1],j=(0,p.TH)(),g=(0,s.useState)((0,a.Z)({},null===j||void 0===j?void 0:j.state)),b=(0,c.Z)(g,2),N=b[0],w=(b[1],(0,s.useState)()),k=(0,c.Z)(w,2),Z=(k[0],k[1],(0,s.useState)()),A=(0,c.Z)(Z,2),C=(A[0],A[1]),S=(0,s.useState)([]),D=(0,c.Z)(S,2),E=(D[0],D[1]),B=(0,s.useState)(),T=(0,c.Z)(B,2),H=T[0],M=T[1],P=(0,s.useState)(JSON.parse(null===N||void 0===N?void 0:N.travelPreferences)),I=(0,c.Z)(P,2),J=I[0],O=(I[1],(0,s.useState)(!1)),U=(0,c.Z)(O,2),_=(U[0],U[1]);function L(e){var n=document.createElement("a");n.setAttribute("href",e.fileUrl),n.setAttribute("download",e.fileName),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}function Y(){return(Y=(0,l.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(),console.log("AppointmentDetails :: ExportMedicalDetails: ".concat(JSON.stringify(n))),e.next=4,v.H0.exportAppointmentDetails(null===n||void 0===n?void 0:n.id);case 4:if((t=e.sent).success||t.success){e.next=8;break}return M(!!t.message&&t.message),e.abrupt("return");case 8:L(null===t||void 0===t?void 0:t.body);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=(0,l.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(),e.next=3,v.H0.exportTravelPreferences(n);case 3:if((t=e.sent).success||t.success){e.next=7;break}return M(!!t.message&&t.message),e.abrupt("return");case 7:L(null===t||void 0===t?void 0:t.body);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.useEffect)((0,l.Z)(o().mark((function e(){var n,t,s,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.H0.getAppointmentById(null===N||void 0===N?void 0:N.id);case 2:s=e.sent,C(null===s||void 0===s?void 0:s.body),(null===s||void 0===s||null===(n=s.body)||void 0===n||null===(t=n.attachments)||void 0===t?void 0:t.length)>0&&(_(!0),null===s||void 0===s||null===(a=s.body)||void 0===a||a.attachments.map(function(){var e=(0,l.Z)(o().mark((function e(n,t){var l,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Lk.getAttachmentById(n.id);case 2:c=e.sent,E((function(e){var n;return[].concat((0,i.Z)(e),[null===(n=c)||void 0===n?void 0:n.body])})),t===(null===s||void 0===s||null===(l=s.body)||void 0===l||null===(a=l.attachments)||void 0===a?void 0:a.length)-1&&_(!1);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e)}))),[]),(0,f.jsx)("div",{className:"content",children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsxs)(u.rU,{to:"/account-appointments",className:"btn btn-primary bd-highlight",children:[(0,f.jsx)("i",{className:"fas  fa-arrow-left"})," ",h("AppointmentsComponent.BackToAppointments")]}),(0,f.jsxs)("div",{className:"row patient-details-flex mt-4",children:[null===H||void 0===H?void 0:H.map((function(e,n){return(0,f.jsx)("div",{className:"invalid-feedback d-block mb-2",style:{margin:"en"===y.language?"10px 0 0 15px":"10px 15px 0 0"},children:e},n)})),(0,f.jsx)("div",{className:"col-md-6",children:(0,f.jsxs)("div",{className:"card booking-card",children:[(0,f.jsxs)("h3",{className:"p-2 bd-highlight text-center",children:[h("AppointmentsComponent.MedicalServiceDetails"),(0,f.jsx)("a",{title:h("Export"),style:{color:"darkblue",padding:"en"===y.language?"0 0 0 5px":"0 5px 0 0",cursor:"pointer",display:"none"},onClick:function(){!function(e){Y.apply(this,arguments)}(N)},children:(0,f.jsx)("i",{className:"fa fa-file-word"})})]}),(0,f.jsx)("div",{className:"card-body d-flex justify-content-center",children:(0,f.jsxs)("ul",{className:"list-group",style:{width:"40rem"},children:[(0,f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center py-1",children:[(0,f.jsxs)("div",{className:"col-5",children:[h("AppointmentsComponent.BookingNumber"),":"]}),(0,f.jsx)("div",{className:"col-7",children:null===N||void 0===N?void 0:N.id})]}),(0,f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center py-1",children:[(0,f.jsxs)("div",{className:"col-5",children:[h("AppointmentsComponent.Email"),":"]}),(0,f.jsx)("div",{className:"col-12",children:null===N||void 0===N?void 0:N.patientEmail})]}),(0,f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center py-1",children:[(0,f.jsxs)("div",{className:"col-5",children:[h("AppointmentsComponent.CreatedDate"),":"]}),(0,f.jsx)("div",{className:"col-12",children:(null===N||void 0===N?void 0:N.createdDate)&&(0,m.default)(new Date(null===N||void 0===N?void 0:N.createdDate),"dd/MM/yyyy")})]}),(0,f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center py-1",children:[(0,f.jsxs)("div",{className:"col-5",children:[h("AppointmentsComponent.Treatment"),":"]}),(0,f.jsx)("div",{className:"col-12",children:null===N||void 0===N||null===(e=N.treatment)||void 0===e?void 0:e.name})]})]})})]})}),(null===N||void 0===N?void 0:N.travelPreferences)&&(0,f.jsx)("div",{className:"col-md-6",children:(0,f.jsxs)("div",{className:"card booking-card",children:[(0,f.jsxs)("h3",{className:"p-2 bd-highlight text-center",children:[h("AppointmentsComponent.TravelPreferences"),(0,f.jsx)("a",{title:h("Export"),style:{color:"darkblue",padding:"en"===y.language?"0 0 0 5px":"0 5px 0 0",cursor:"pointer",display:"none"},onClick:function(){!function(e){$.apply(this,arguments)}(null===N||void 0===N?void 0:N.id)},children:(0,f.jsx)("i",{className:"fa fa-file-word"})})]}),(0,f.jsx)("div",{className:"card-body d-flex justify-content-center",children:(0,f.jsx)("ul",{className:"list-group",style:{width:"40rem"},children:null===(n="ar"===y.language?x.SZ:x.Bo)||void 0===n?void 0:n.map((function(e){return(0,f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center py-1",children:[(0,f.jsx)("div",{className:"col-10",children:null===e||void 0===e?void 0:e.title}),(0,f.jsx)("div",{className:"col-2",children:J[null===e||void 0===e?void 0:e.id]?(0,f.jsx)("b",{children:"Yes"}):"No"})]})}))})})]})})]})]})})};var y=function(){return(0,f.jsx)(h,{})}}}]);
//# sourceMappingURL=508.4f467fc9.chunk.js.map