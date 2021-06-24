(this["webpackJsonpbox-ui"]=this["webpackJsonpbox-ui"]||[]).push([[2],{1171:function(e,t,n){"use strict";var i,a=n(12),s=n(17),c=n(10),r=n(43),o=n(54),l=n(2),u=n.n(l),d=n(57),b=n(5),j=n(1),m=n(22),x=n(3),O=n(47),f=n(170),h=n(359),p=n(7),v=n(4),S=n(0),g=function(e){var t=function(t){var n=t.activeTableRowIndex,i=t.contextMenuItems,a=void 0===i?[]:i,s=t.handleOpenModal,l=t.modalsStateList,d=(t.onRowClick,t.handleSetActiveItemId),b=t.handleSetActiveTableRowIndex,m=t.viewingModalName,p=Object(o.a)(t,["activeTableRowIndex","contextMenuItems","handleOpenModal","modalsStateList","onRowClick","handleSetActiveItemId","handleSetActiveTableRowIndex","viewingModalName"]),v=u.a.useState(null),g=Object(r.a)(v,2),I=g[0],T=g[1],D=u.a.useState(!1),C=Object(r.a)(D,2),R=C[0],A=C[1],L=u.a.useCallback((function(){A(!1),b(null),d(null)}),[b,d]);u.a.useEffect((function(){var e=h.a.find((function(e){return l["is".concat(e.name)]}));T(e)}),[l]),u.a.useEffect((function(){I||L()}),[I,L]);var y=u.a.useCallback((function(){return s({name:m})}),[s,m]),F=u.a.useCallback((function(e,t){t.withConfirmation?s({name:x.E.CONFIRMATION,payload:{confirmationAction:t.action,confirmationTitle:t.confirmationTitle,confirmationText:t.confirmationText}}):t.action()}),[s]),N=u.a.useMemo((function(){var e={name:"Open",icon:x.x.EDIT,action:function(){return y()}};return m?[e].concat(Object(O.a)(a)):a}),[a,m,y]),E=u.a.useCallback((function(e,t){var n=t.original.lockedFlag,i=t.original.id,a=t.index+1,s=t.page?a-t.pageSize*t.page:a;return{onDoubleClick:function(){m&&(d(i,n),b(s),y())},onContextMenu:function(){N.length&&(d(i,n),b(s),A(!0))},className:n&&"is-gray"}}),[y,m,N,d,b]);return Object(S.jsxs)(u.a.Fragment,{children:[Object(S.jsx)(f.b,{id:"tableContextMenu",disable:!N.length,children:Object(S.jsx)(e,Object(c.a)({onRowClick:E,activeTableRowIndex:n},p))}),Object(S.jsx)(j.g,{menuId:"tableContextMenu",onClick:F,items:N,isHidden:I||!R,onHide:!I&&n?L:null})]})};t.displayName="WithEditTable(".concat(v.a.getDisplayName(e),")");return Object(a.c)((function(e){return{activeTableRowIndex:Object(p.activeTableRowIndexSelector)(e),modalsStateList:Object(p.modalsStateListSelector)(e)}}),(function(e){return Object(s.b)({handleOpenModal:p.openModal,handleSetActiveItemId:p.setActiveItemId,handleSetActiveTableRowIndex:p.setActiveTableRowIndex},e)}))(t)}(Object(j.ab)()((function(e){var t=e.onRowClick,n=e.activeTableRowIndex,i=Object(o.a)(e,["onRowClick","activeTableRowIndex"]);return Object(S.jsx)(j.P,Object(c.a)({getTrGroupProps:t,activeRowIndex:n},i))}))),I=n(351),T=n(6),D=n.n(T),C=n(8),R=n(21),A=n(18),L=n(601),y=n(11).d.div(i||(i=Object(A.a)(["\n  margin-bottom: 15px;\n  padding: 10px 15px 12px;\n  border: 1px solid ",";\n  border-radius: 2px;\n  background-color: ",";\n\n  .title {\n    font-size: 18px;\n    color: ",";\n    font-weight: bold;\n  }\n\n  ",";\n"])),(function(e){return e.theme.colors.lighterGray}),(function(e){return e.theme.colors.lighterGrayCell}),(function(e){var t=e.theme;return e.color||t.colors.darkGray}),(function(e){return e.isHidden&&"\n    display: none;\n  "})),F=function(e){return e&&Object.keys(e).filter((function(e){return!e.match(/dateFrom|dateTo|dateTimeFrom|dateTimeTo/gi)})).reduce((function(t,n){return t[n]=e[n],t}),{})},N=Object(L.a)({form:x.w.FILTER,destroyOnUnmount:!1,enableReinitialize:!0})((function(e){var t=e.FilterForm,n=e.filterAction,i=e.filterValues,a=e.handleSubmit,s=e.isAutoRefresh,c=e.isHidden,r=e.isLoading,o=e.location,l=e.setIsAccessibleFiltering,d=e.stopAutoRefresh,m=u.a.useMemo((function(){var e=v.g.getUserData();return e&&e.username}),[]),O=u.a.useMemo((function(){return i&&Object.values(i).reduce((function(e,t){return t?++e:e}),0)}),[i]),f=u.a.useMemo((function(){var e,t=i&&i.institutionId,n=i&&i.transactionId,a=i&&i.accountId,s=i&&i.customerId,c=i&&i.cardId,r=i&&i.productName,l=i&&i.accountAlias,u=i&&i.panAlias,d=i&&i.lastName,b=(e={default:O>0},Object(R.a)(e,"".concat(x.d).concat(x.gb.SYSTEM_PROPERTIES),O>=0),Object(R.a)(e,"".concat(x.d).concat(x.gb.USERS),O>=0),Object(R.a)(e,"".concat(x.d).concat(x.gb.SCHEDULER),O>=0),Object(R.a)(e,"".concat(x.d).concat(x.gb.API_CALLS),O>1),Object(R.a)(e,"".concat(x.d).concat(x.gb.USERS_ACTIVITY),O>1),Object(R.a)(e,"".concat(x.d).concat(x.gb.ACCOUNTS),t&&(a||l||d)),Object(R.a)(e,"".concat(x.d).concat(x.gb.CARDS),t&&(a||c||s||u)),Object(R.a)(e,"".concat(x.d).concat(x.gb.STATEMENTS),t&&(a||l||d)),Object(R.a)(e,"".concat(x.d).concat(x.gb.CUSTOMERS),t&&(s||d)),Object(R.a)(e,"".concat(x.d).concat(x.gb.TRANSACTIONS),t&&(n||r||s||a)),e);return o.pathname in b?b[o.pathname]:b.default}),[O,i,o]);u.a.useEffect((function(){l(f)}),[f,l]);var h=u.a.useCallback(a(function(){var e=Object(C.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:s&&d(),v.b.set("".concat(o.pathname,"-").concat(m),JSON.stringify(F(t)),{expires:x.i.MONTH});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),[a,n,s,d]);return Object(S.jsxs)(y,{isHidden:c,children:[Object(S.jsx)("div",{className:"title",children:"Filter"}),Object(S.jsxs)("form",{onSubmit:h,children:[Object(S.jsx)(b.Flex,{width:"960px",alignItems:"flex-end",flexWrap:"wrap",m:"0 -8px 5px",children:t}),Object(S.jsx)(j.a,{text:"Show",isLoading:r,disabled:!f})]})]})})),E=Object(I.a)(x.w.FILTER),M=Object(a.c)((function(e){return{filterValues:E(e),isAutoRefresh:Object(p.isAutoRefreshSelector)(e)}}),(function(e){return Object(s.b)({stopAutoRefresh:p.stopAutoRefresh,setIsAccessibleFiltering:p.setIsAccessibleFiltering},e)}))(N),w=n(236),U=Object(m.b)(Object(d.g)((function(e){var t=e.title,n=e.data,i=e.columns,a=e.FilterForm,s=e.filterAction,l=e.openModal,d=e.newModalName,m=e.location,O=e.isAutoRefresh,f=e.stopAutoRefresh,h=e.resetUtils,p=e.AdditionalButton,I=e.initialFilterValues,T=(e.filterData,e.setIsOpenFilter),D=e.isOpenFilter,C=e.isDownloadButton,R=e.isSearchable,A=e.uiItems,L=e.isReadOnly,y=e.isLoading,F=e.setActivePagePermission,N=Object(o.a)(e,["title","data","columns","FilterForm","filterAction","openModal","newModalName","location","isAutoRefresh","stopAutoRefresh","resetUtils","AdditionalButton","initialFilterValues","filterData","setIsOpenFilter","isOpenFilter","isDownloadButton","isSearchable","uiItems","isReadOnly","isLoading","setActivePagePermission"]),E=u.a.useState(!1),U=Object(r.a)(E,2),H=U[0],k=U[1];u.a.useEffect((function(){var e=O&&setInterval((function(){return s()}),5e3);return function(){return clearInterval(e)}}),[O,s]);var B=u.a.useMemo((function(){return A.find((function(e){return"".concat(x.d).concat(e.id)==="".concat(m.pathname)}))}),[m,A]);u.a.useEffect((function(){var e=B&&B.permission;F(e)}),[F,A,m,B]),u.a.useEffect((function(){return function(){return h()}}),[h]);var W=u.a.useMemo((function(){return D?"Hide Filter":"Show Filter"}),[D]),J=u.a.useMemo((function(){return t.split(" ").join("_").toLowerCase()}),[t]),Q=u.a.useMemo((function(){return n&&n.length}),[n]),P=u.a.useMemo((function(){var e=v.g.getUserData(),t=e&&e.username,n=v.b.get("".concat(m.pathname,"-").concat(t));return Object(c.a)(Object(c.a)({},I),n?JSON.parse(n):{})}),[I,m]),_=u.a.useMemo((function(){return R&&n&&n.length>10}),[R,n]),q=u.a.useCallback((function(){return k(!H)}),[H]),z=u.a.useCallback((function(){return T(!D)}),[T,D]),V=u.a.useCallback((function(){return l({name:d})}),[l,d]);return Object(S.jsxs)(u.a.Fragment,{children:[Object(S.jsx)(w.a,{title:t,pageId:B&&B.id}),a&&Object(S.jsx)(b.Box,{mb:"5px",children:Object(S.jsx)(j.a,{text:W,iconName:x.x.FILTER,onClick:z})}),a&&Object(S.jsx)(M,{filterAction:s,initialValues:P,isHidden:!D,isLoading:y,location:m,FilterForm:a}),Object(S.jsxs)(b.Flex,{alignItems:"center",fontSize:"0px",children:[d&&!L&&Object(S.jsx)(b.Box,{mr:"20px",children:Object(S.jsx)(j.a,{text:"Add New",iconName:x.x.PLUS,onClick:V,disabled:y})}),_&&Object(S.jsx)(b.Box,{mr:"20px",children:Object(S.jsx)(j.a,{text:"Search",disabled:!Q||y,iconName:x.x.SEARCH,onClick:q})}),p&&Object(S.jsx)(b.Box,{mr:"20px",children:p}),C&&Object(S.jsx)(b.Box,{mr:"20px",children:Object(S.jsx)(j.j,{selectable:!1,isDisabled:!Q,dropdownListPosition:"center",ToggleButtonComponent:Object(S.jsx)(j.a,{text:"Download",iconName:x.x.DOWNLOAD,disabled:y}),children:Object(S.jsx)(j.k,{children:Object(S.jsx)(j.a,{text:".csv",iconName:x.x.FILE,onClick:function(){return v.d.downloadCSV(J,n)},classNames:["no-text-transform"],disabled:y})})})}),O&&Object(S.jsxs)(b.Flex,{alignItems:"flex-end",children:[Object(S.jsx)(j.h,{seconds:5}),Object(S.jsx)(b.Box,{ml:"4px",children:Object(S.jsx)(j.a,{text:"Stop Auto Refreshing",size:"11",iconName:x.x.STOP,onClick:f,disabled:y})})]})]}),Object(S.jsx)(b.Box,{mt:"5px",children:Object(S.jsx)(g,Object(c.a)({data:n,columns:i,filterable:H,isLoading:y},N))})]})})));t.a=Object(a.c)((function(e){return{isAutoRefresh:Object(p.isAutoRefreshSelector)(e),isOpenFilter:Object(p.isOpenFilterSelector)(e),isReadOnly:Object(p.isReadOnlySelector)(e),uiItems:Object(p.uiItemsSelector)(e)}}),(function(e){return Object(s.b)({stopAutoRefresh:p.stopAutoRefresh,resetUtils:p.resetUtils,setIsOpenFilter:p.setIsOpenFilter,setActivePagePermission:p.setActivePagePermission},e)}))(U)},1537:function(e,t,n){"use strict";n.r(t),n.d(t,"UsersActivity",(function(){return R})),n.d(t,"ApiCalls",(function(){return F})),n.d(t,"ScheduledJobs",(function(){return H})),n.d(t,"SystemMonitor",(function(){return ee})),n.d(t,"UiSessions",(function(){return ce}));var i,a,s,c,r,o=n(12),l=n(17),u=n(43),d=n(2),b=n.n(d),j=n(1171),m=n(1),x=n(0),O=[{maxWidth:100,Header:Object(x.jsx)(m.R,{title:"ID"}),accessor:"id",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isNumber:!0})}},{maxWidth:200,Header:Object(x.jsx)(m.R,{title:"User Name"}),accessor:"username",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:150,Header:Object(x.jsx)(m.R,{title:"Event Date Time"}),accessor:"eventDatetime",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isDate:!0})}},{maxWidth:350,Header:Object(x.jsx)(m.R,{title:"API Name"}),accessor:"apiName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{Header:Object(x.jsx)(m.R,{title:"Description"}),accessor:"description",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}}],f=n(613),h=n(3),p=n(600),v=n(5),S=n(4),g=function(e){var t=e.usersOptions,n=e.institutionsOptions,i=e.getUsers,a=e.currentInstitution,s=e.isLoadingUsers,c=e.isDisabled,r=a&&a.value;return b.a.useEffect((function(){r&&i(r)}),[i,r]),Object(x.jsxs)(b.a.Fragment,{children:[Object(x.jsx)(v.Box,{width:"300px",p:"8px",children:Object(x.jsx)(p.a,{id:"institutionId",name:"institutionId",component:m.J,label:"Institution",placeholder:"Select Institution",options:n,isClearable:!1,isDisabled:c,isRequired:!0,validate:[S.f.isRequired]})}),Object(x.jsx)(v.Box,{width:"300px",p:"8px",children:Object(x.jsx)(p.a,{id:"username",name:"username",component:m.J,label:"User Name",options:t,placeholder:"Select Username",isLoading:s,disabled:c})}),Object(x.jsx)(v.Box,{width:"180px",p:"8px",children:Object(x.jsx)(p.a,{id:"usersActivityDateTimeFrom",name:"usersActivityDateTimeFrom",component:m.z,label:"Date\xa0/\xa0Time From",placeholder:h.o.DATE_TIME,mask:h.D.DATE_TIME,disabled:c,isRequired:!0,validate:[S.f.isRequired,S.f.isDateTime]})}),Object(x.jsx)(v.Box,{width:"180px",p:"8px",children:Object(x.jsx)(p.a,{id:"usersActivityDateTimeTo",name:"usersActivityDateTimeTo",component:m.z,label:"Date\xa0/\xa0Time To",placeholder:h.o.DATE_TIME,mask:h.D.DATE_TIME,disabled:c,isRequired:!0,validate:[S.f.isRequired,S.f.isDateTime]})})]})},I=n(7),T=Object(f.a)(h.w.FILTER),D=Object(o.c)((function(e){return{isLoadingUsers:Object(I.isUsersActivityUsersLoadingSelector)(e),usersOptions:Object(I.usersActivityUsersSelector)(e),currentInstitution:T(e,"institutionId")}}),(function(e){return Object(l.b)({getUsers:I.handleGetUsersActivityUsers},e)}))(g),C=function(e){var t=e.institutionsOptions,n=e.usersActivity,i=e.filterUsersActivity,a=e.resetUsersActivity,s=e.isLoading,c=b.a.useState(null),r=Object(u.a)(c,2),o=r[0],l=r[1],d=b.a.useState(null),m=Object(u.a)(d,2),f=m[0],h=m[1];b.a.useEffect((function(){return l(S.c.yesterdayDateTime()),h(S.c.todayDateTime()),function(){return a()}}),[a]);var p=b.a.useMemo((function(){return{institutionId:t[0],usersActivityDateTimeFrom:o,usersActivityDateTimeTo:f}}),[t,o,f]);return Object(x.jsx)(j.a,{title:"User Activity",data:n,columns:O,isDownloadButton:!0,isLoading:s,filterAction:i,initialFilterValues:p,FilterForm:Object(x.jsx)(D,{isDisabled:s,institutionsOptions:t})})},R=Object(o.c)((function(e){return{isLoading:Object(I.isUsersActivityLoadingSelector)(e),institutionsOptions:Object(I.userInstitutionsOptionsSelector)(e),usersActivity:Object(I.usersActivitySelector)(e)}}),(function(e){return Object(l.b)({filterUsersActivity:I.handleFilterUsersActivity,resetUsersActivity:I.resetUsersActivity},e)}))(C),A=[{maxWidth:100,Header:Object(x.jsx)(m.R,{title:"ID"}),accessor:"id",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isNumber:!0})}},{maxWidth:130,Header:Object(x.jsx)(m.R,{title:"Institution"}),accessor:"institutionId",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:100,Header:Object(x.jsx)(m.R,{title:"Endpoint ID"}),accessor:"endpointId",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isNumber:!0})}},{maxWidth:200,Header:Object(x.jsx)(m.R,{title:"Endpoint Name"}),accessor:"endpointName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:150,Header:Object(x.jsx)(m.R,{title:"Event Date Time"}),accessor:"eventDatetime",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isDate:!0})}},{maxWidth:120,Header:Object(x.jsx)(m.R,{title:"API Name"}),accessor:"apiName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{Header:Object(x.jsx)(m.R,{title:"Request Body"}),accessor:"requestBody",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{Header:Object(x.jsx)(m.R,{title:"Response Body"}),accessor:"responseBody",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}}],L=n(602),y=function(e){var t=e.apiCalls,n=e.filterApiCalls,i=e.institutionsOptions,a=e.resetApiCalls,s=e.isLoading,c=b.a.useState(null),r=Object(u.a)(c,2),o=r[0],l=r[1],d=b.a.useState(null),m=Object(u.a)(d,2),O=m[0],f=m[1];b.a.useEffect((function(){return l(S.c.yesterdayDateTime()),f(S.c.todayDateTime()),function(){return a()}}),[a]);var p=b.a.useMemo((function(){return{institutionId:i[0],apiCallsDateTimeFrom:o,apiCallsDateTimeTo:O}}),[i,o,O]);return Object(x.jsx)(j.a,{title:"API Calls",data:t,columns:A,viewingModalName:h.E.API_CALL,filterAction:n,isDownloadButton:!0,isLoading:s,initialFilterValues:p,FilterForm:Object(x.jsx)(L.b,{isDisabled:s,institutionsOptions:i})})},F=Object(o.c)((function(e){return{isLoading:Object(I.isLoadingApiCallsSelector)(e),apiCalls:Object(I.apiCallsSelector)(e),institutionsOptions:Object(I.userInstitutionsOptionsSelector)(e)}}),(function(e){return Object(l.b)({filterApiCalls:I.handleFilterApiCalls,resetApiCalls:I.resetApiCalls},e)}))(y),N=function(e){var t=e.institutionsOptions,n=e.institutionValue,i=e.getSchedulerNames,a=e.schedulerNameOptions,s=e.isLoadingSchedulerNames,c=e.isDisabled,r=n&&n.value;return b.a.useEffect((function(){r&&i(r)}),[i,r]),Object(x.jsxs)(b.a.Fragment,{children:[Object(x.jsx)(v.Box,{width:"300px",p:"8px",children:Object(x.jsx)(p.a,{id:"institutionId",name:"institutionId",component:m.J,label:"Institution",placeholder:"Select Institution",options:t,isClearable:!1,isDisabled:c,isRequired:!0,validate:[S.f.isRequired]})}),Object(x.jsx)(v.Box,{width:"300px",p:"8px",children:Object(x.jsx)(p.a,{id:"scheduler",name:"scheduler",component:m.J,options:a,label:"Scheduler",placeholder:"Select Scheduler",isLoading:s,isDisabled:c})}),Object(x.jsx)(v.Box,{width:"180px",p:"8px",children:Object(x.jsx)(p.a,{id:"scheduledJobsDateTimeFrom",name:"scheduledJobsDateTimeFrom",component:m.z,label:"Date\xa0/\xa0Time From",placeholder:h.o.DATE_TIME,mask:h.D.DATE_TIME,disabled:c,isRequired:!0,validate:[S.f.isRequired,S.f.isDateTime]})}),Object(x.jsx)(v.Box,{width:"180px",p:"8px",children:Object(x.jsx)(p.a,{id:"scheduledJobsDateTimeTo",name:"scheduledJobsDateTimeTo",component:m.z,label:"Date\xa0/\xa0Time To",placeholder:h.o.DATE_TIME,mask:h.D.DATE_TIME,disabled:c,isRequired:!0,validate:[S.f.isRequired,S.f.isDateTime]})})]})},E=Object(f.a)(h.w.FILTER),M=Object(o.c)((function(e){return{isLoadingSchedulerNames:Object(I.isSchedulerJobNamesGettingSelector)(e),schedulerNameOptions:Object(I.instSchedulerNamesOptions)(e),institutionValue:E(e,"institutionId")}}),(function(e){return Object(l.b)({getSchedulerNames:I.handleGetSchedulerNamesByInstId},e)}))(N),w=[{maxWidth:100,Header:Object(x.jsx)(m.R,{title:"ID"}),accessor:"id",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isNumber:!0})}},{maxWidth:200,Header:Object(x.jsx)(m.R,{title:"Scheduler"}),accessor:"scheduler",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:150,Header:Object(x.jsx)(m.R,{title:"Date\xa0/\xa0Time From"}),accessor:"dateTimeFrom",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isDate:!0})}},{maxWidth:150,Header:Object(x.jsx)(m.R,{title:"Date\xa0/\xa0Time To"}),accessor:"dateTimeTo",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isDate:!0})}},{maxWidth:150,Header:Object(x.jsx)(m.R,{title:"Execution Result"}),accessor:"executionResult",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{Header:Object(x.jsx)(m.R,{title:"Error Description"}),accessor:"errorDescription",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}}],U=function(e){var t=e.institutionsOptions,n=e.scheduledJobs,i=e.filterScheduledJobs,a=e.resetScheduledJobs,s=e.getLogData,c=e.currentSchedulerId,r=e.currentScheduledJobName,o=e.isLoading,l=b.a.useState(null),d=Object(u.a)(l,2),m=d[0],O=d[1],f=b.a.useState(null),p=Object(u.a)(f,2),v=p[0],g=p[1];b.a.useEffect((function(){return O(S.c.yesterdayDateTime()),g(S.c.todayDateTime()),function(){return a()}}),[a]);var I=b.a.useMemo((function(){return[{name:"Show log",icon:h.x.SHORT_TEXT,action:function(){return s({id:c,name:h.ab.SCHEDULER_JOBS,title:r})}}]}),[s,c,r]);return Object(x.jsx)(j.a,{title:"Scheduled Jobs",data:n,columns:w,isDownloadButton:!0,isLoading:o,filterAction:i,contextMenuItems:I,initialFilterValues:{institutionId:t[0],scheduledJobsDateTimeFrom:m,scheduledJobsDateTimeTo:v},FilterForm:Object(x.jsx)(M,{isDisabled:o,institutionsOptions:t})})},H=Object(o.c)((function(e){return{isLoading:Object(I.isSysMonitorLoadingLogDataSelector)(e)||Object(I.isScheduledJobsLoadingSelector)(e),institutionsOptions:Object(I.userInstitutionsOptionsSelector)(e),scheduledJobs:Object(I.scheduledJobsSelector)(e),currentSchedulerId:Object(I.currentScheduledJobIdSelector)(e),currentScheduledJobName:Object(I.currentScheduledJobNameSelector)(e)}}),(function(e){return Object(l.b)({filterScheduledJobs:I.handleFilterScheduledJobs,getLogData:I.handleGetLogData,resetScheduledJobs:I.resetScheduledJobs},e)}))(U),k=n(47),B=n(18),W=n(11),J=Object(W.d)(m.d)(i||(i=Object(B.a)(["\n  cursor: pointer;\n  color: ",";\n  transition: all .1s linear;\n\n  ","\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.gray}),(function(e){return e.isOpen&&"\n    transform: rotate(-180deg);\n  "}),(function(e){return e.theme.colors.normalAccent})),Q=W.d.div(a||(a=Object(B.a)(["\n  .header {\n    z-index: 11;\n  }\n"]))),P=function(e){var t=e.children,n=e.header,i=e.additionalTool,a=b.a.useState(!0),s=Object(u.a)(a,2),c=s[0],r=s[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)(Q,{children:Object(x.jsxs)(v.Flex,{justifyContent:"space-between",alignItems:"center",children:[n&&Object(x.jsx)("div",{className:"header",children:n}),Object(x.jsxs)(v.Flex,{alignItems:"flex-end",children:[i&&Object(x.jsx)(v.Box,{mb:"4px",children:i}),Object(x.jsx)(v.Box,{mb:"3px",children:Object(x.jsx)(J,{size:"24",className:"icon",isOpen:c,onClick:function(){return r(!c)}})})]})]})}),c&&Object(x.jsx)(b.a.Fragment,{children:t}),!c&&Object(x.jsx)(m.t,{noSpace:!0})]})},_=W.d.div(s||(s=Object(B.a)(["\n  position: relative;\n  margin-bottom: 30px;\n\n  .loading {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    color: ",";\n    font-weight: bold;\n    font-size: 10px;\n    letter-spacing: .5pt;\n    text-transform: uppercase;\n    z-index: 10;\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.darkGray})),q=function(e){var t=e.children,n=e.isLoading;return Object(x.jsxs)(_,{children:[t,n&&Object(x.jsx)("div",{className:"loading",children:"Loading..."})]})},z=Object(W.d)(v.Flex)(c||(c=Object(B.a)(["\n  align-items: flex-start;\n  cursor: pointer;\n"]))),V=function(e){var t=e.value,n=e.onClick,i=b.a.useState(t),a=Object(u.a)(i,2),s=a[0],c=a[1],r=b.a.useCallback((function(){n(),c(!s)}),[s,n]);return Object(x.jsxs)(z,{onClick:r,children:[s?Object(x.jsx)(m.c,{}):Object(x.jsx)(m.W,{}),Object(x.jsx)(v.Box,{ml:"5px",mb:"3px",children:Object(x.jsx)(m.K,{children:"Refresh table"})})]})},G=function(e){var t=e.title,n=e.counts;return Object(x.jsxs)(v.Flex,{alignItems:"baseline",justifyContent:"space-between",children:[Object(x.jsx)(v.Box,{mr:"10px",children:Object(x.jsx)(m.O,{children:t})}),n&&Object(x.jsxs)(m.K,{children:[n.countActive," active, ",n.countFaulty," faulty"]})]})},Y=function(e,t){return[{maxWidth:130,Header:Object(x.jsx)(m.R,{title:"Institution"}),accessor:"institutionName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{maxWidth:260,Header:Object(x.jsx)(m.R,{title:"Name"}),accessor:"name",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{maxWidth:100,Header:Object(x.jsx)(m.R,{title:"Status"}),accessor:"status",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{maxWidth:140,Header:Object(x.jsx)(m.R,{title:"Last Message Date\xa0/\xa0Time"}),accessor:"lastMessageDatetime",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isDate:!0,isSmaller:!0})}},{maxWidth:140,Header:Object(x.jsx)(m.R,{title:"Last Fault Date\xa0/\xa0Time"}),accessor:"lastFaultDatetime",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isDate:!0,isSmaller:!0})}},{maxWidth:85,accessor:"showLogButton",Cell:function(n){return Object(x.jsx)(v.Flex,{alignItems:"flex-start",p:"7px 5px",children:Object(x.jsx)(m.a,{text:"Show log",size:"10",classNames:["is-bordered"],onClick:function(){return e({name:t,id:n.original.id,title:n.original.name})}})})}}]},K=function(e,t){return[{maxWidth:130,Header:Object(x.jsx)(m.R,{title:"Institution"}),accessor:"institutionName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{maxWidth:300,Header:Object(x.jsx)(m.R,{title:"Name"}),accessor:"name",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{maxWidth:100,Header:Object(x.jsx)(m.R,{title:"Status"}),accessor:"status",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{maxWidth:85,accessor:"showLogButton",Cell:function(n){return Object(x.jsx)(v.Flex,{alignItems:"flex-start",p:"7px 5px",children:Object(x.jsx)(m.a,{text:"Show log",size:"10",classNames:["is-bordered"],onClick:function(){return e({name:t,id:n.original.id,title:n.original.name})}})})}}]},X=[{maxWidth:130,Header:Object(x.jsx)(m.R,{title:"Institution"}),accessor:"institutionName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{maxWidth:140,Header:Object(x.jsx)(m.R,{title:"Transaction Date\xa0/\xa0Time"}),accessor:"transactionDatetime",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isDate:!0,isSmaller:!0})}}],Z=n(236),$=Object(m.ab)({isFixed:!0})((function(e){var t=e.getSysMonitorData,n=e.resetSysMonitor,i=e.interfacesData,a=e.endpointsData,s=e.schedulerData,c=e.lastTransactionsData,r=e.isLoadingInterfaces,o=e.isLoadingEndpoints,l=e.isLoadingScheduler,d=e.isLoadingLastTransactions,j=e.interfacesCounts,O=e.endpointsCounts,f=e.schedulerCounts,p=e.getLogData,g=b.a.useState([]),I=Object(u.a)(g,2),T=I[0],D=I[1],C=b.a.useState(!1),R=Object(u.a)(C,2),A=R[0],L=R[1],y="".concat(h.d).concat(h.gb.SYSTEM_MONITOR);b.a.useEffect((function(){return t(),function(){return n()}}),[t,n]),b.a.useEffect((function(){var e=[];for(var t in h.ab)S.b.get("".concat(y,"/").concat(h.ab[t]))&&e.push(h.ab[t]);D(e),e.length>0&&F()}),[y]);var F=function(){L(!1),setTimeout((function(){return L(!0)}),50)};b.a.useEffect((function(){var e=A&&setInterval((function(){t(T),F()}),6e4);return function(){return clearInterval(e)}}),[t,A,T]);var N=b.a.useCallback((function(e){T.find((function(t){return t===e}))?(D(T.filter((function(t){return t!==e}))),T.length<=1?L(!1):F()):(t([e]),D([].concat(Object(k.a)(T),[e])),F());var n="".concat(y,"/").concat(e);S.b.get(n)?S.b.remove(n):S.b.set(n,JSON.stringify(h.kb.YES),{expires:h.i.MONTH})}),[T,t,y]),E=b.a.useMemo((function(){return[[{id:1,name:h.ab.INTERFACES,title:"Interfaces",counts:j,isLoading:r,tableData:i,columns:Y(p,h.ab.INTERFACES)},{id:2,name:h.ab.LAST_TRANSACTIONS,title:"Last Transactions",isLoading:d,tableData:c,columns:X}],[{id:3,name:h.ab.ENDPOINTS,title:"Endpoints",counts:O,isLoading:o,tableData:a,columns:Y(p,h.ab.ENDPOINTS)},{id:4,name:h.ab.SCHEDULER_JOBS,title:"Scheduler Jobs",counts:f,isLoading:l,tableData:s,columns:K(p,h.ab.SCHEDULER_JOBS)}]]}),[O,a,j,i,o,r,d,l,c,f,s,p]);return Object(x.jsxs)(b.a.Fragment,{children:[Object(x.jsxs)(v.Flex,{alignItems:"center",children:[Object(x.jsx)(Z.a,{title:"System Monitor",pageId:h.gb.SYSTEM_MONITOR}),Object(x.jsx)(v.Box,{mb:"5px",ml:"12px",children:A&&Object(x.jsx)(m.h,{seconds:60})})]}),Object(x.jsx)(v.Box,{mx:"-20px",children:Object(x.jsx)(v.Flex,{flexWrap:"wrap",alignItems:"flex-start",children:E.map((function(e,t){return Object(x.jsx)(v.Box,{width:[.5],px:"20px",children:e.map((function(e){return Object(x.jsx)(q,{isLoading:e.isLoading,children:Object(x.jsx)(P,{header:Object(x.jsx)(G,{title:e.title,counts:e.counts}),additionalTool:Object(x.jsx)(V,{onClick:function(){return N(e.name)},value:!!S.b.get("".concat(y,"/").concat(e.name))}),children:Object(x.jsx)(m.P,{data:e.tableData||[],columns:e.columns,pageSize:4,isSmaller:!0})})},e.id)}))},t)}))})})]})})),ee=Object(o.c)((function(e){return{isLoading:Object(I.isSysMonitorLoadingLogDataSelector)(e),isLoadingInterfaces:Object(I.isSysMonitorInterfacesLoadingSelector)(e),isLoadingEndpoints:Object(I.isSysMonitorEndpointsLoadingSelector)(e),isLoadingScheduler:Object(I.isSysMonitorSchedulerLoadingSelector)(e),isLoadingLastTransactions:Object(I.isSysMonitorLastTransactionsLoadingSelector)(e),interfacesData:Object(I.sysMonitorInterfacesSelector)(e),endpointsData:Object(I.sysMonitorEndpointsSelector)(e),schedulerData:Object(I.sysMonitorSchedulerSelector)(e),lastTransactionsData:Object(I.sysMonitorLastTransactionsSelector)(e),interfacesCounts:Object(I.sysMonitorInterfacesCountsSelector)(e),endpointsCounts:Object(I.sysMonitorEndpointsCountsSelector)(e),schedulerCounts:Object(I.sysMonitorSchedulerCountsSelector)(e)}}),(function(e){return Object(l.b)({getSysMonitorData:I.handleGetSysMonitorData,getLogData:I.handleGetLogData,resetSysMonitor:I.resetSysMonitor},e)}))($),te=n(57),ne=[{maxWidth:150,Header:Object(x.jsx)(m.R,{title:"Institution"}),accessor:"institutionName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:150,Header:Object(x.jsx)(m.R,{title:"Username"}),accessor:"username",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:180,Header:Object(x.jsx)(m.R,{title:"First Name"}),accessor:"firstName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:180,Header:Object(x.jsx)(m.R,{title:"Last Name"}),accessor:"lastName",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:140,Header:Object(x.jsx)(m.R,{title:"Last Date Time"}),accessor:"lastDatetime",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isDate:!0})}},{maxWidth:120,Header:Object(x.jsx)(m.R,{title:"IP Address"}),accessor:"ipAddress",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}},{maxWidth:500,Header:Object(x.jsx)(m.R,{title:"User Agent"}),accessor:"userAgent",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value,isSmaller:!0})}},{maxWidth:100,Header:Object(x.jsx)(m.R,{title:"Status"}),accessor:"status",Cell:function(e){return Object(x.jsx)(m.Q,{value:e.value})}}],ie=Object(W.d)(v.Box)(r||(r=Object(B.a)(["\n  max-width: 50%;\n  min-width: 300px;\n  padding: 8px;\n"]))),ae=function(e){var t=e.institutionsOptions,n=e.isDisabled;return Object(x.jsx)(b.a.Fragment,{children:Object(x.jsx)(ie,{children:Object(x.jsx)(p.a,{id:"institutionId",name:"institutionId",component:m.J,label:"Institution",placeholder:"Select Institution",options:t,isMulti:!0,isDisabled:n,isRequired:!0,validate:[S.f.isRequired]})})})},se=Object(te.g)((function(e){var t=e.institutionsOptions,n=e.uiSessions,i=e.filterUiSessions,a=e.filterUsersActivity,s=e.resetUiSessions,c=e.currentUserId,r=e.history,o=e.isLoading;b.a.useEffect((function(){return function(){return s()}}),[s]);var l=b.a.useMemo((function(){var e=n.find((function(e){return e.id===c}));return e?{username:{value:e.username,label:"".concat(e.firstName," ").concat(e.lastName)},institutionId:{value:e.institutionId,label:e.institutionName},usersActivityDateTimeFrom:S.c.yesterdayDateTime(),usersActivityDateTimeTo:S.c.todayDateTime()}:null}),[n,c]),u=b.a.useMemo((function(){var e=S.g.getUserData();return e&&e.username}),[]),d=b.a.useCallback((function(){var e="".concat(h.d).concat(h.gb.USERS_ACTIVITY);S.b.set("".concat(e,"-").concat(u),JSON.stringify(l),{expires:h.i.MONTH}),r.push(e),a(l)}),[r,l,a,u]),m=b.a.useMemo((function(){return[{name:"Show user activity",icon:h.x.SHORT_TEXT,action:d}]}),[d]),O=b.a.useMemo((function(){return{institutionId:[t[0]]}}),[t]);return Object(x.jsx)(b.a.Fragment,{children:Object(x.jsx)(j.a,{title:"UI Sessions",data:n,columns:ne,isDownloadButton:!0,filterAction:i,isSearchable:!0,isLoading:o,contextMenuItems:m,initialFilterValues:O,FilterForm:Object(x.jsx)(ae,{isDisabled:o,institutionsOptions:t})})})})),ce=Object(o.c)((function(e){return{isLoading:Object(I.isUiSessionsLoadingSelector)(e),institutionsOptions:Object(I.userInstitutionsOptionsSelector)(e),uiSessions:Object(I.uiSessionsSelector)(e),currentUserId:Object(I.activeItemIdSelector)(e)}}),(function(e){return Object(l.b)({filterUiSessions:I.handleFilterUiSessions,filterUsersActivity:I.handleFilterUsersActivityByData,resetUiSessions:I.resetUiSessions},e)}))(se)}}]);
//# sourceMappingURL=2.9bfbbe8f.chunk.js.map