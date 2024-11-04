"use strict";(self.webpackChunkymp_react=self.webpackChunkymp_react||[]).push([[275],{2275:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(2791),r=n(3433),i=n(1413),c=n(5861),s=n(9439),l=n(4687),o=n.n(l),d=n(5316),u=n(3168),m=n(6592),v=n(6557),f=n(6580),h=n(9406),p=n(6491),x=n(1186),y=n(5462),j=n(5078),b=n(4808),g=n(2419),N=n(184),Z=function(e){var t=e.data,n=e.onDelete,a=(0,u.$)(),r=(0,s.Z)(a,1)[0];return(0,N.jsx)("div",{className:"row",children:(0,N.jsx)("div",{className:"col-sm-12",children:(0,N.jsx)("div",{className:"card",children:(0,N.jsx)("div",{className:"table-responsive",children:(0,N.jsxs)("table",{className:"table table-hover table-center mb-0",children:[(0,N.jsx)("thead",{children:(0,N.jsxs)("tr",{children:[(0,N.jsx)("th",{className:"text-center",children:"#"}),(0,N.jsx)("th",{className:"text-center",children:r("Treatment.Country")}),(0,N.jsx)("th",{className:"text-center",children:r("Treatment.City")}),(0,N.jsx)("th",{className:"text-center",children:r("Treatment.Facility")}),(0,N.jsx)("td",{})]})}),(0,N.jsx)("tbody",{children:t&&t.length>0&&t.map((function(e,t){return(0,N.jsxs)("tr",{children:[(0,N.jsx)("td",{className:"text-center",children:t+1}),(0,N.jsx)("td",{className:"text-center",children:e.country.label}),(0,N.jsx)("td",{className:"text-center",children:e.city.label}),(0,N.jsx)("td",{className:"text-center",children:e.facility.label}),(0,N.jsx)("td",{className:"text-center",children:(0,N.jsx)("span",{onClick:function(){return n(t)},title:"remove",style:{cursor:"pointer",marginTop:"44px"},children:"\u274c"})})]},t)}))})]})})})})})};var C=function(e){var t=e.onAdd,n=e.facilitiesData,r=e.countriesData,l=e.citiesData,d=(0,u.$)(),m=(0,s.Z)(d,1)[0],v=(0,a.useState)(),f=(0,s.Z)(v,2),h=f[0],y=f[1],b=(0,a.useState)(),g=(0,s.Z)(b,2),Z=g[0],C=g[1],k=(0,a.useState)(),w=(0,s.Z)(k,2);w[0],w[1],(0,a.useEffect)((0,c.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[]);var S=function(){var e=(0,c.Z)(o().mark((function e(a){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={facility:{value:a.facility,label:n.find((function(e){return e.id==a.facility})).name},country:{value:a.country,label:r.find((function(e){return e.id==a.country})).name},city:{value:a.city,label:l.find((function(e){return e.id==a.city})).name}},t(i),console.log("onSubmit :: ".concat(JSON.stringify(a,0,2)));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=(0,c.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},t.facility||(n.facility=x.C1),t.country||(n.country=x.C1),t.city||(n.city=x.C1),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=(0,N.jsx)(j.l0,{mutators:{setValue:function(e,t,n){var a=(0,s.Z)(e,2),r=a[0],i=a[1];(0,n.changeValue)(t,r,(function(){return i}))}},validate:D,onSubmit:S,render:function(e){var t=e.handleSubmit,a=e.values,c=e.form.mutators.setValue;return(0,N.jsxs)("form",{onSubmit:t,className:"needs-validation",noValidate:!0,children:[(0,N.jsxs)("div",{className:"row form-row",children:[(0,N.jsx)("div",{className:"col-12 col-md-4",children:(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsx)("label",{children:m("Facility.Country")}),(0,N.jsx)(j.gN,{name:"country",showerrorbeside:"true",children:function(e){var t=e.input;e.meta;return(0,N.jsxs)("select",(0,i.Z)((0,i.Z)({className:"form-control select"},t.select),{},{defaultValue:a.country,value:a.country,onChange:function(e){t.onChange(e),y(e.target.value),c("city",""),c("facility","")},children:[(0,N.jsx)("option",{value:"",children:m("Facility.SelectCountry")}),null===r||void 0===r?void 0:r.map((function(e,t){return(0,N.jsx)("option",{value:e.id,children:e.name},t)}))]}))}}),(0,N.jsx)(p.jj,{name:"country",showerrorbeside:"true"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-4",children:(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsx)("label",{children:m("Facility.City")}),(0,N.jsx)(j.gN,{name:"city",showerrorbeside:"true",children:function(e){var t=e.input;e.meta;return(0,N.jsxs)("select",(0,i.Z)((0,i.Z)({className:"form-control select"},t.select),{},{defaultValue:null===a||void 0===a?void 0:a.city,value:null===a||void 0===a?void 0:a.city,disabled:!(null!==a&&void 0!==a&&a.country)||l.findIndex((function(e){var t;return(null===(t=e.country)||void 0===t?void 0:t.id)==h}))<0,onChange:function(e){t.onChange(e),C(e.target.value),c("facility","")},children:[(0,N.jsx)("option",{value:"",children:h&&l.findIndex((function(e){var t;return(null===(t=e.country)||void 0===t?void 0:t.id)==h}))<0?"No cities found":m("Facility.SelectCity")}),null===l||void 0===l?void 0:l.filter((function(e){var t;return(null===(t=e.country)||void 0===t?void 0:t.id)==h})).map((function(e,t){return(0,N.jsx)("option",{value:e.id,children:e.name},t)}))]}))}}),(0,N.jsx)(p.jj,{name:"city",showerrorbeside:"true"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-4",children:(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsx)("label",{children:m("Facility.Facility")}),(0,N.jsx)(j.gN,{name:"facility",showerrorbeside:"true",children:function(e){var t=e.input;e.meta;return(0,N.jsxs)("select",(0,i.Z)((0,i.Z)({className:"form-control select"},t.select),{},{defaultValue:a.facility,value:a.facility,disabled:!a.city||n.findIndex((function(e){var t;return(null===(t=e.city)||void 0===t?void 0:t.id)==Z}))<0,onChange:function(e){t.onChange(e)},children:[(0,N.jsx)("option",{value:"",children:Z&&n.findIndex((function(e){var t;return(null===(t=e.city)||void 0===t?void 0:t.id)==Z}))<0?"No facilities found":!a.city||n.findIndex((function(e){var t;return(null===(t=e.city)||void 0===t?void 0:t.id)==Z}))<0?"":m("Treatment.SelectFacility")}),null===n||void 0===n?void 0:n.filter((function(e){var t;return(null===(t=e.city)||void 0===t?void 0:t.id)==Z})).map((function(e,t){return(0,N.jsx)("option",{value:e.id,children:e.name},t)}))]}))}}),(0,N.jsx)(p.jj,{name:"facility",showerrorbeside:"true"})]})})]}),(0,N.jsx)("div",{className:"submit-section",children:(0,N.jsx)("button",{type:"submit",className:"btn btn-primary submit-btn",children:m("Facility.Add")})})]})}});return(0,N.jsx)("div",{children:T})};var k=function(e){var t=(0,u.$)(),n=(0,s.Z)(t,1)[0],l=e.mode,m=e.selectedTreatment,v=e.onClose,h=(0,a.useState)(!1),k=(0,s.Z)(h,2),w=k[0],S=k[1],D=(0,a.useState)(),T=(0,s.Z)(D,2),A=T[0],B=T[1],X=(0,a.useState)([]),U=(0,s.Z)(X,2),F=U[0],I=U[1],O=(0,a.useState)([]),_=(0,s.Z)(O,2),E=_[0],V=_[1],M=(0,a.useState)([]),R=(0,s.Z)(M,2),q=R[0],L=R[1],z=(0,a.useState)(!1),J=(0,s.Z)(z,2),Y=J[0],P=J[1],H=(0,a.useState)(),$=(0,s.Z)(H,2),K=$[0],Q=$[1],W=(0,a.useState)(!0),G=(0,s.Z)(W,2),ee=G[0],te=G[1],ne=(0,a.useState)(!1),ae=(0,s.Z)(ne,2),re=ae[0],ie=ae[1],ce=(0,a.useState)([]),se=(0,s.Z)(ce,2),le=se[0],oe=se[1],de=function(){return ie(!1)};(0,a.useEffect)((0,c.Z)(o().mark((function e(){var t,n,a,r,i,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m&&oe(null===m||void 0===m?void 0:m.facilities.map((function(e){return{facility:{value:e.id,label:e.name},country:{value:e.city.country.id,label:e.city.country.name},city:{value:e.city.id,label:e.city.name}}}))),l===x.Vc.Update&&null!==m&&void 0!==m&&null!==(t=m.attachment)&&void 0!==t&&t.id&&P(!0),e.next=4,y.jU.getAllFacilities();case 4:return a=e.sent,e.next=7,y.Tf.getAllCountries();case 7:return r=e.sent,e.next=10,y.Zp.getAllCities();case 10:if(i=e.sent,B(!(null===a||void 0===a||!a.message)&&(null===a||void 0===a?void 0:a.message)),a.success&&I(a.body),r.success&&V(r.body),i.success&&L(i.body),l!==x.Vc.Update||null===m||void 0===m||null===(n=m.attachment)||void 0===n||!n.id){e.next=21;break}return e.next=18,y.Lk.getAttachmentById(null===m||void 0===m||null===(c=m.attachment)||void 0===c?void 0:c.id);case 18:(s=e.sent).success?(Q(s.body),te(!1)):Q(null),P(!1);case 21:case"end":return e.stop()}}),e)}))),[]);var ue=function(){var e=(0,c.Z)(o().mark((function e(t){var n,a,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(!0),n={name:t.name,name_ar:t.name_ar,facilities:null===le||void 0===le?void 0:le.map((function(e){return e.facility.value})),details:t.details,details_ar:t.details_ar,active:l!==x.Vc.Update||t.active},(a=new FormData).append("request",JSON.stringify(n,0,2)),ee&&a.append("image",t.image[0]),l!==x.Vc.Update){e.next=11;break}return e.next=8,y.JB.updateTreatment(null===m||void 0===m?void 0:m.id,a);case 8:r=e.sent,e.next=14;break;case 11:return e.next=13,y.JB.createTreatment(a);case 13:r=e.sent;case 14:if(r.success||r.success){e.next=18;break}return S(!1),B(!!r.message&&r.message),e.abrupt("return");case 18:S(!1),v(r.body);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=(0,c.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},t.name||(n.name=x.C1),t.details||(n.details=x.C1),!t.image&&ee&&(n.image=x.C1),0===le.length&&(n.facilities=x.C1),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(e){oe(le.filter((function(t){return t!==le[e]})))};return(0,N.jsxs)("div",{children:[(0,N.jsx)(j.l0,{initialValues:{name:null===m||void 0===m?void 0:m.name,details:null===m||void 0===m?void 0:m.details,name_ar:null===m||void 0===m?void 0:m.name_ar,details_ar:null===m||void 0===m?void 0:m.details_ar,image:null===m||void 0===m?void 0:m.image},validate:me,onSubmit:ue,mutators:(0,i.Z)({},b.Z),render:function(e){var t=e.handleSubmit,a=(e.onChange,e.submitError,e.form.mutators);a.push,a.pop,e.form,e.submitting,e.pristine,e.values;return(0,N.jsxs)("form",{onSubmit:t,className:"needs-validation",noValidate:!0,children:[A&&(0,N.jsx)("div",{className:"invalid-feedback d-block mb-2",children:A}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("div",{className:"row form-row",children:[(0,N.jsx)("div",{className:"col-12 col-md-6",children:(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsx)("label",{children:n("Treatment.Name")}),(0,N.jsx)(j.gN,{name:"name",className:"form-control floating",type:"text",component:p.UP,placeholder:"Name"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6",style:{direction:"rtl"},children:(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsxs)("label",{children:[n("Treatment.Name")," - AR"]}),(0,N.jsx)(j.gN,{name:"name_ar",className:"form-control floating",type:"text",component:p.UP,placeholder:"\u0627\u0644\u0627\u0633\u0645"})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6",children:(0,N.jsx)("div",{className:"form-group",children:Y?(0,N.jsx)(f.Z,{}):l===x.Vc.Update&&K&&!ee?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("img",{src:null===K||void 0===K?void 0:K.fileUrl,alt:"image",width:250}),(0,N.jsx)("span",{title:"remove",onClick:function(){return te(!0)},style:{cursor:"pointer",marginTop:"44px"},children:"\u274c"})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("label",{children:n("Country.Image")}),(0,N.jsx)(p.j9,{name:"image"}),(0,N.jsx)(p.jj,{name:"image",showerrorbeside:"true"})]})})}),(0,N.jsx)("div",{className:"col-12 col-md-12",children:(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsx)("label",{children:n("Country.Details")}),(0,N.jsx)(j.gN,{name:"details",className:"form-control",type:"textarea",rows:"4",placeholder:"Write here the details...",component:p.UP})]})}),(0,N.jsx)("div",{className:"col-12 col-md-12",style:{direction:"rtl"},children:(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsxs)("label",{children:[n("Country.Details")," - AR"]}),(0,N.jsx)(j.gN,{name:"details_ar",className:"form-control",type:"textarea",rows:"4",placeholder:"\u0627\u0643\u062a\u0628 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0647\u0646\u0627 ...",component:p.UP})]})}),(0,N.jsx)("div",{className:"col-12 col-md-6",children:(0,N.jsx)("div",{className:"form-group",children:(0,N.jsxs)("button",{className:"btn btn-secondary submit-btn",type:"button",style:{marginTop:"34px"},onClick:function(){ie(!0)},children:[(0,N.jsx)(g.Z,{}),"facility"]})})})]}),(0,N.jsx)(Z,{data:le,onDelete:ve}),(0,N.jsx)(p.jj,{name:"facilities",showerrorbeside:"true"})]}),(0,N.jsxs)("div",{className:"submit-section",children:[(0,N.jsxs)("button",{type:"submit",className:"btn btn-primary submit-btn",disabled:w,children:[w?"":n("Treatment.Save"),w&&(0,N.jsx)("span",{className:"spinner-border spinner-border-sm mb-1"})]}),(0,N.jsx)("button",{className:"btn btn-secondary submit-btn",onClick:function(e){e.preventDefault(),v(null)},children:n("Treatment.Close")})]})]})}}),(0,N.jsxs)(d.Z,{show:re,onHide:de,size:"lg",scrollable:!1,"aria-labelledby":"example-modal-sizes-title-sm",centered:!0,children:[(0,N.jsxs)(d.Z.Header,{children:[(0,N.jsx)("h5",{className:"modal-title",children:"Add Facility"}),(0,N.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:de,children:(0,N.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,N.jsx)(d.Z.Body,{children:(0,N.jsx)("div",{className:"modal-body",children:(0,N.jsx)("div",{children:(0,N.jsx)(C,{onAdd:function(e){oe((function(t){return[e].concat((0,r.Z)(t))})),ie(!1)},facilitiesData:F,countriesData:E,citiesData:q})})})})]})]})};var w=function(){var e=(0,u.$)(),t=(0,s.Z)(e,1)[0],n=(0,a.useState)(!1),l=(0,s.Z)(n,2),j=l[0],b=l[1],g=(0,a.useState)(!1),Z=(0,s.Z)(g,2),C=Z[0],w=Z[1],S=(0,a.useState)(!1),D=(0,s.Z)(S,2),T=D[0],A=D[1],B=(0,a.useState)(!1),X=(0,s.Z)(B,2),U=X[0],F=X[1],I=(0,a.useState)(!1),O=(0,s.Z)(I,2),_=O[0],E=O[1],V=(0,a.useState)(),M=(0,s.Z)(V,2),R=M[0],q=M[1],L=(0,a.useState)(),z=(0,s.Z)(L,2),J=z[0],Y=z[1],P=(0,a.useState)(),H=(0,s.Z)(P,2),$=H[0],K=H[1],Q=(0,a.useState)(null),W=(0,s.Z)(Q,2),G=W[0],ee=W[1],te=(0,a.useState)(x.Vc.Add),ne=(0,s.Z)(te,2),ae=ne[0],re=ne[1],ie=function(){return A(!1)},ce=function(){A(!0),E(!1)},se=function(){return F(!1)};(0,a.useEffect)((0,c.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,y.JB.getAllTreatments();case 3:t=e.sent,q(!(null===t||void 0===t||!t.message)&&(null===t||void 0===t?void 0:t.message)),t.success&&K(t.body),b(!1);case 7:case"end":return e.stop()}}),e)}))),[]);var le=function(){var e=(0,c.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,y.JB.deleteTreatment(t);case 3:if(n=e.sent,w(!1),n.success||n.success){e.next=8;break}return Y(!!n.message&&n.message),e.abrupt("return");case 8:if(se(),K($.filter((function(e){return e.id!=t}))),n.success||n.success){e.next=14;break}return q(!(null===n||void 0===n||!n.message)&&(null===n||void 0===n?void 0:n.message)),b(!1),e.abrupt("return");case 14:b(!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=(0,c.Z)(o().mark((function e(t,n){var a,r,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),a=new FormData,r={active:!n},a.append("request",JSON.stringify(r,0,2)),e.next=6,y.JB.updateTreatment(t,a);case 6:if((c=e.sent).success||c.success){e.next=11;break}return b(!1),q(!(null===c||void 0===c||!c.message)&&(null===c||void 0===c?void 0:c.message)),e.abrupt("return");case 11:K(null===$||void 0===$?void 0:$.map((function(e){var t,n;return e.id===(null===c||void 0===c||null===(t=c.body)||void 0===t?void 0:t.id)?(0,i.Z)((0,i.Z)({},e),{},{active:null===c||void 0===c||null===(n=c.body)||void 0===n?void 0:n.active}):e}))),b(!1);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),de=[{id:"name",label:t("Treatment.Name")},{id:"name_ar",label:t("Treatment.Name")+" - AR"},{id:"active",label:t("Treatment.Active"),type:x.zw.Toggle}],ue=(0,N.jsx)(p.wQ,{columns:de,rows:null===$||void 0===$?void 0:$.flat(),showActions:!0,onEdit:function(e){ce(),ee(e),re(x.Vc.Update)},onDelete:function(e){F(!0),E(!1),ee(e),Y(null)},onUpdateStatus:function(e){oe(e.id,e.active)}});return(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:"content",children:(0,N.jsx)("div",{className:"container-fluid",children:(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-md-5 col-lg-4 col-xl-3 theiaStickySidebar",children:(0,N.jsx)(m.Z,{offsetTop:20,offsetBottom:20,children:(0,N.jsx)(h.Z,{})})}),(0,N.jsx)("div",{className:"col-md-7 col-lg-8 col-xl-9",children:(0,N.jsx)("div",{className:"row",children:(0,N.jsx)("div",{className:"col-sm-12",children:(0,N.jsxs)("div",{className:"card",children:[(0,N.jsxs)("div",{className:"card-header",children:[(0,N.jsx)("h4",{className:"card-title float-left",children:t("Treatment.ListTitle")}),(0,N.jsx)("button",{className:"btn btn-primary float-right",onClick:function(){ce(),ee(null),re(x.Vc.Add)},"data-toggle":"modal",children:t("Treatment.Add")})]}),(0,N.jsx)("div",{className:"card-body ",children:(0,N.jsx)("div",{className:"card card-table mb-0",children:(0,N.jsx)("div",{className:"card-body",children:(0,N.jsxs)("div",{className:"table-responsive",children:[(0,N.jsx)("div",{className:"invalid-feedback d-block mb-2",children:R}),j?(0,N.jsx)("div",{className:"centered",children:(0,N.jsxs)("h4",{children:[(0,N.jsx)("div",{children:(0,N.jsx)(f.Z,{})}),(0,N.jsx)("div",{children:(0,N.jsx)("span",{style:{color:"#15558d"},children:t("Treatment.GettingTreatments")})})]})}):(0,N.jsxs)(N.Fragment,{children:[_?(0,N.jsx)("div",{style:{margin:"20px"},children:(0,N.jsx)(v.Z,{severity:"success",children:ae===x.Vc.Add?t("Treatment.AddingSuccessfullyMessage"):t("Treatment.UpdatingSuccessfullyMessage")})}):(0,N.jsx)(N.Fragment,{}),ue]})]})})})})]})})})})]})})}),(0,N.jsxs)(d.Z,{show:T,onHide:ie,size:"lg",scrollable:!1,"aria-labelledby":"example-modal-sizes-title-sm",children:[(0,N.jsxs)(d.Z.Header,{children:[(0,N.jsx)("h5",{className:"modal-title",children:"".concat(t(ae)," ").concat(t("Treatment.Treatment"))}),(0,N.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:ie,children:(0,N.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,N.jsx)(d.Z.Body,{children:(0,N.jsx)("div",{className:"modal-body",children:(0,N.jsx)("div",{children:(0,N.jsx)(k,{selectedTreatment:G,mode:ae,onClose:function(e){if(ie(),e){if(ae===x.Vc.Update){var t=$.flat().map((function(t){return t.id===e.id?(0,i.Z)({},e):t}));K(t)}else{var n=(0,i.Z)({},e);K([].concat((0,r.Z)($),[n]))}E(!0)}}})})})})]}),(0,N.jsxs)(d.Z,{show:U,onHide:se,"aria-labelledby":"example-modal-sizes-title-sm",centered:!0,children:[(0,N.jsxs)(d.Z.Header,{children:[(0,N.jsx)("h5",{className:"modal-title",children:t("Treatment.DeleteConfirmationTitle")}),(0,N.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:se,children:(0,N.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,N.jsx)(d.Z.Body,{children:(0,N.jsxs)("div",{className:"modal-body",children:[J&&(0,N.jsx)("div",{className:"invalid-feedback d-block mb-2",children:J}),(0,N.jsx)("h5",{style:{color:"red"},children:t("Treatment.DeleteConfirmationMessage")}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("b",{children:[t("Treatment.Treatment"),":"]})," ".concat(null===G||void 0===G?void 0:G.name," ")]})]})}),(0,N.jsxs)(d.Z.Footer,{children:[(0,N.jsxs)("button",{className:"btn btn-danger submit-btn",disabled:C,onClick:function(){le(G.id)},children:[C?"":t("Treatment.Delete"),C&&(0,N.jsx)("span",{className:"spinner-border spinner-border-sm mb-1"})]}),(0,N.jsx)("button",{className:"btn btn-secondary submit-btn",onClick:se,children:t("Treatment.Close")})]})]})]})};var S=function(){return(0,N.jsx)(w,{})}},5462:function(e,t,n){n.d(t,{Lk:function(){return r},Zp:function(){return c},Tf:function(){return l},OE:function(){return u},jU:function(){return v},dt:function(){return h},JB:function(){return x},KD:function(){return j}});var a=n(1186),r={getAttachmentById:function(e){var t="".concat("https://ymp-api.herokuapp.com","/api/v1/attachment/").concat(e);return(0,a.o7)({url:t,method:"get"})}},i="".concat("https://ymp-api.herokuapp.com","/api/v1/city"),c={getAllCities:function(){var e=i;return(0,a.Xv)({url:e,method:"get"})},getCityByID:function(e){var t="".concat(i,"/").concat(e);return(0,a.Xv)({url:t,method:"get"})},createCity:function(e){var t=i;return(0,a.Xv)({url:t,method:"post",requestBody:e})},updateCity:function(e,t){var n="".concat(i,"/").concat(e);return(0,a.Xv)({url:n,method:"put",requestBody:t})},deleteCity:function(e){var t="".concat(i,"/").concat(e);return(0,a.Xv)({url:t,method:"delete"})}},s="".concat("https://ymp-api.herokuapp.com","/api/v1/country"),l={getAllCountries:function(){var e=s;return(0,a.Xv)({url:e,method:"get"})},getCountryByID:function(e){var t="".concat(s,"/").concat(e);return(0,a.Xv)({url:t,method:"get"})},createCountry:function(e){var t=s;return(0,a.Xv)({url:t,method:"post",requestBody:e})},updateCountry:function(e,t){var n="".concat(s,"/").concat(e);return(0,a.Xv)({url:n,method:"put",requestBody:t})},deleteCountry:function(e){var t="".concat(s,"/").concat(e);return(0,a.Xv)({url:t,method:"delete"})}},o=n(1413),d="".concat("https://ymp-api.herokuapp.com","/api/v1/doctor"),u={getAllDoctors:function(e,t){var n="".concat(d,"?page=").concat(e,"&size=").concat(t);return(0,a.Xv)({url:n,method:"get"})},getDoctorByID:function(e){var t="".concat(d,"/").concat(e);return(0,a.Xv)({url:t,method:"get"})},createDoctor:function(e){var t=d;return(0,a.Xv)({url:t,method:"post",requestBody:(0,o.Z)({},e)})},updateDoctor:function(e,t){var n="".concat(d,"/").concat(e);return(0,a.Xv)({url:n,method:"put",requestBody:(0,o.Z)({},t)})},deleteDoctor:function(e){var t="".concat(d,"/").concat(e);return(0,a.Xv)({url:t,method:"delete"})}},m="".concat("https://ymp-api.herokuapp.com","/api/v1/facility"),v={getAllFacilities:function(){var e=m;return(0,a.Xv)({url:e,method:"get"})},getFacilityByID:function(e){var t="".concat(m,"/").concat(e);return(0,a.Xv)({url:t,method:"get"})},createFacility:function(e){var t=m;return(0,a.Xv)({url:t,method:"post",requestBody:e})},updateFacility:function(e,t){var n="".concat(m,"/").concat(e);return(0,a.Xv)({url:n,method:"put",requestBody:t})},deleteFacility:function(e){var t="".concat(m,"/").concat(e);return(0,a.Xv)({url:t,method:"delete"})}},f="".concat("https://ymp-api.herokuapp.com","/api/v1/speciality"),h={getAllSpecialitiesWithPagination:function(e,t){var n="".concat(f,"?page=").concat(e,"&size=").concat(t);return(0,a.Xv)({url:n,method:"get"})},getAllSpecialities:function(){var e="".concat(f);return(0,a.Xv)({url:e,method:"get"})},getSpecialityByID:function(e){var t="".concat(f,"/").concat(e);return(0,a.Xv)({url:t,method:"get"})},createSpeciality:function(e){var t=f;return(0,a.Xv)({url:t,method:"post",requestBody:(0,o.Z)({},e)})},updateSpeciality:function(e,t){var n="".concat(f,"/").concat(e);return(0,a.Xv)({url:n,method:"put",requestBody:(0,o.Z)({},t)})},deleteSpeciality:function(e){var t="".concat(f,"/").concat(e);return(0,a.Xv)({url:t,method:"delete"})}},p="".concat("https://ymp-api.herokuapp.com","/api/v1/treatment"),x={getAllTreatments:function(){var e=p;return(0,a.Xv)({url:e,method:"get"})},getTreatmentByID:function(e){var t="".concat(p,"/").concat(e);return(0,a.Xv)({url:t,method:"get"})},createTreatment:function(e){var t=p;return(0,a.Xv)({url:t,method:"post",requestBody:e})},updateTreatment:function(e,t){var n="".concat(p,"/").concat(e);return(0,a.Xv)({url:n,method:"put",requestBody:t})},deleteTreatment:function(e){var t="".concat(p,"/").concat(e);return(0,a.Xv)({url:t,method:"delete"})}},y="".concat("https://ymp-api.herokuapp.com","/api/v1/user"),j={getAllUsers:function(e,t){var n="".concat(y,"?page=").concat(e,"&size=").concat(t);return(0,a.Xv)({url:n,method:"get"})},getUserByID:function(e){var t="".concat(y,"/id/").concat(e);return(0,a.Xv)({url:t,method:"get"})},createUser:function(e){var t=y;return(0,a.Xv)({url:t,method:"post",requestBody:(0,o.Z)({},e)})},updateUser:function(e,t){var n="".concat(y,"/").concat(e);return(0,a.Xv)({url:n,method:"put",requestBody:(0,o.Z)({},t)})},deleteUser:function(e){var t="".concat(y,"/").concat(e);return(0,a.Xv)({url:t,method:"delete"})},getUserByEmail:function(e){var t="".concat(y,"/email/").concat(e);return(0,a.Xv)({url:t,method:"get"})}}},9406:function(e,t,n){n.d(t,{g:function(){return y},Z:function(){return j}});var a=n(5861),r=n(9439),i=n(4687),c=n.n(i),s=n(5263),l=n(2705),o=n(1186),d=n(2426),u=n.n(d),m=n(2791),v=n(3168),f=n(3504),h=n(6871),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[{path:"/en/account-profile",icon:"fas fa-user-cog",label:e("ProfileSettings"),role:"all"},{path:"/en/account-appointments",icon:"fas fa-calendar-alt",label:e("Appointments"),role:"ROLE_ADMIN"},{path:"/en/admin/specialities",icon:"fas fa-stethoscope",label:e("Specialities"),role:"ROLE_ADMIN"},{path:"/en/admin/Doctors",icon:"fas fa-users",label:e("Doctors"),role:"ROLE_ADMIN"},{path:"/en/admin/Users",icon:"fas fa-users",label:e("Users"),role:"ROLE_ADMIN"},{path:"/en/admin/Countries",icon:"fas fa-gear",label:e("Countries"),role:"ROLE_ADMIN"},{path:"/en/admin/Cities",icon:"fas fa-gear",label:e("Cities"),role:"ROLE_ADMIN"},{path:"/en/admin/Facilities",icon:"fas fa-gear",label:e("Facilities"),role:"ROLE_ADMIN"},{path:"/en/admin/Treatments",icon:"fas fa-gear",label:e("Treatments"),role:"ROLE_ADMIN"},{path:"/en/account-change-password",icon:"fas fa-lock",label:e("ChangePassword"),role:"all"},{path:"/",icon:"fas fa-lock",label:e("logout"),role:"all",onClick:t.logout}]},x=n(184),y=function(){var e=(0,v.$)(),t=(0,r.Z)(e,2),n=t[0],i=(t[1],window.location.pathname),d=(0,m.useState)(null),y=(0,r.Z)(d,2),j=y[0],b=y[1],g=(0,h.s0)(),N=(0,m.useState)(),Z=(0,r.Z)(N,2),C=(Z[0],Z[1]);(0,m.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.KD.getCurrentUser();case 3:t=e.sent,b(null===t||void 0===t?void 0:t.body),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error fetching current user:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var k={logout:function(){console.log("Logging out..."),l.e8.logout(),C(!1),g("/")}};return(0,x.jsxs)("div",{className:"profile-sidebar",children:[(0,x.jsx)("div",{className:"widget-profile pro-widget-content",children:(0,x.jsxs)("div",{className:"profile-info-widget",children:[(0,x.jsx)("a",{href:"#0",className:"booking-doc-img",children:(0,x.jsx)("img",{src:s,alt:"User"})}),(0,x.jsxs)("div",{className:"profile-det-info",children:[(0,x.jsx)("h3",{children:null===j||void 0===j?void 0:j.email}),(0,x.jsxs)("div",{className:"patient-details",children:[(0,x.jsxs)("h5",{children:[(0,x.jsx)("i",{className:"fas fa-birthday-cake"})," ",(null===j||void 0===j?void 0:j.dateOfBirth)&&u()(null===j||void 0===j?void 0:j.dateOfBirth).format("DD MMM YYYY"),","," ",(null===j||void 0===j?void 0:j.dateOfBirth)&&u()(null===j||void 0===j?void 0:j.dateOfBirth,"YYYY-MM-DD").month(0).from(u()().month(0))]}),(0,x.jsxs)("h5",{className:"mb-0",children:[(0,x.jsx)("i",{className:"fas fa-map-marker-alt"}),(null===j||void 0===j?void 0:j.cityOfResidence)&&(null===j||void 0===j?void 0:j.cityOfResidence),","," ",(null===j||void 0===j?void 0:j.countryOfResidence)&&o.mQ.getCountryOfCode(null===j||void 0===j?void 0:j.countryOfResidence).name]})]})]})]})}),(0,x.jsx)("div",{className:"dashboard-widget",children:(0,x.jsx)("nav",{className:"dashboard-menu",children:(0,x.jsx)("ul",{children:p(n,k).map((function(e,t){var n;return"all"===e.role||(null===j||void 0===j||null===(n=j.roles)||void 0===n?void 0:n.some((function(e){return"ROLE_ADMIN"===(null===e||void 0===e?void 0:e.name)})))&&"ROLE_ADMIN"===(null===e||void 0===e?void 0:e.role)?(0,x.jsx)("li",{className:i.includes(e.path)?"active":"",children:(0,x.jsxs)(f.rU,{to:e.path,onClick:function(t){e.onClick&&(t.preventDefault(),e.onClick())},children:[(0,x.jsx)("i",{className:e.icon}),(0,x.jsx)("span",{children:e.label})]})},t):null}))})})})]})},j=y}}]);
//# sourceMappingURL=275.21a95581.chunk.js.map