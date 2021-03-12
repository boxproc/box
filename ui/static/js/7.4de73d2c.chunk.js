(this["webpackJsonpbox-ui"]=this["webpackJsonpbox-ui"]||[]).push([[7],{1171:function(e,t,n){"use strict";var i,c=n(12),o=n(17),a=n(10),r=n(36),s=n(53),u=n(2),l=n.n(u),d=n(56),f=n(5),b=n(1),m=n(21),O=n(3),j=n(57),x=n(135),p=n(359),h=n(7),I=n(4),S=n(0),g=function(e){var t=function(t){var n=t.activeTableRowIndex,i=t.contextMenuItems,c=void 0===i?[]:i,o=t.handleOpenModal,u=t.modalsStateList,d=(t.onRowClick,t.handleSetActiveItemId),f=t.handleSetActiveTableRowIndex,m=t.viewingModalName,h=Object(s.a)(t,["activeTableRowIndex","contextMenuItems","handleOpenModal","modalsStateList","onRowClick","handleSetActiveItemId","handleSetActiveTableRowIndex","viewingModalName"]),I=l.a.useState(null),g=Object(r.a)(I,2),R=g[0],v=g[1],A=l.a.useState(!1),T=Object(r.a)(A,2),M=T[0],w=T[1],C=l.a.useCallback((function(){w(!1),f(null),d(null)}),[f,d]);l.a.useEffect((function(){var e=p.a.find((function(e){return u["is".concat(e.name)]}));v(e)}),[u]),l.a.useEffect((function(){R||C()}),[R,C]);var F=l.a.useCallback((function(){return o({name:m})}),[o,m]),N=l.a.useCallback((function(e,t){t.withConfirmation?o({name:O.G.CONFIRMATION,payload:{confirmationAction:t.action,confirmationTitle:t.confirmationTitle,confirmationText:t.confirmationText}}):t.action()}),[o]),P=l.a.useMemo((function(){var e={name:"Open",icon:O.z.EDIT,action:function(){return F()}};return m?[e].concat(Object(j.a)(c)):c}),[c,m,F]),k=l.a.useCallback((function(e,t){var n=t.original.lockedFlag,i=t.original.id,c=t.index+1,o=t.page?c-t.pageSize*t.page:c;return{onDoubleClick:function(){m&&(d(i,n),f(o),F())},onContextMenu:function(){P.length&&(d(i,n),f(o),w(!0))},className:n&&"is-gray"}}),[F,m,P,d,f]);return Object(S.jsxs)(l.a.Fragment,{children:[Object(S.jsx)(x.b,{id:"tableContextMenu",disable:!P.length,children:Object(S.jsx)(e,Object(a.a)({onRowClick:k,activeTableRowIndex:n},h))}),Object(S.jsx)(b.g,{menuId:"tableContextMenu",onClick:N,items:P,isHidden:R||!M,onHide:!R&&n?C:null})]})};t.displayName="WithEditTable(".concat(I.a.getDisplayName(e),")");return Object(c.c)((function(e){return{activeTableRowIndex:Object(h.activeTableRowIndexSelector)(e),modalsStateList:Object(h.modalsStateListSelector)(e)}}),(function(e){return Object(o.b)({handleOpenModal:h.openModal,handleSetActiveItemId:h.setActiveItemId,handleSetActiveTableRowIndex:h.setActiveTableRowIndex},e)}))(t)}(Object(b.Z)()((function(e){var t=e.onRowClick,n=e.activeTableRowIndex,i=Object(s.a)(e,["onRowClick","activeTableRowIndex"]);return Object(S.jsx)(b.O,Object(a.a)({getTrGroupProps:t,activeRowIndex:n},i))}))),R=n(351),v=n(6),A=n.n(v),T=n(8),M=n(18),w=n(600),C=n(11).d.div(i||(i=Object(M.a)(["\n  margin-bottom: 15px;\n  padding: 10px 15px 12px;\n  border: 1px solid ",";\n  border-radius: 2px;\n  background-color: ",";\n\n  .title {\n    font-size: 18px;\n    color: ",";\n    font-weight: bold;\n  }\n\n  ",";\n"])),(function(e){return e.theme.colors.lighterGray}),(function(e){return e.theme.colors.lighterGrayCell}),(function(e){var t=e.theme;return e.color||t.colors.darkGray}),(function(e){return e.isHidden&&"\n    display: none;\n  "})),F=function(e){return e&&Object.keys(e).filter((function(e){return!e.match(/dateFrom|dateTo|dateTimeFrom|dateTimeTo/gi)})).reduce((function(t,n){return t[n]=e[n],t}),{})},N=Object(w.a)({form:O.y.FILTER,destroyOnUnmount:!1,enableReinitialize:!0})((function(e){var t=e.FilterForm,n=e.filterAction,i=e.filterValues,c=e.handleSubmit,o=e.invalid,a=e.isAutoRefresh,r=e.isHidden,s=e.isLoading,u=e.location,d=e.setIsAccessibleFiltering,m=e.stopAutoRefresh,j=l.a.useMemo((function(){var e=I.g.getUserData();return e&&e.username}),[]),x=l.a.useMemo((function(){return i&&i.institutionId}),[i]),p=l.a.useMemo((function(){return i&&i.transactionId}),[i]),h=l.a.useMemo((function(){return i&&i.accountId}),[i]),g=l.a.useMemo((function(){return i&&i.customerId}),[i]),R=l.a.useMemo((function(){return i&&i.cardId}),[i]),v=l.a.useMemo((function(){return i&&i.productName}),[i]),M=l.a.useMemo((function(){return i&&i.accountAlias}),[i]),w=l.a.useMemo((function(){return i&&i.panAlias}),[i]),N=l.a.useMemo((function(){return i&&i.lastName}),[i]),P=l.a.useMemo((function(){return i&&Object.values(i).reduce((function(e,t){return t?++e:e}),0)}),[i]),k=l.a.useCallback((function(){switch(u.pathname){case"".concat(O.e).concat(O.fb.SYSTEM_PROPERTIES):case"".concat(O.e).concat(O.fb.USERS):case"".concat(O.e).concat(O.fb.SCHEDULER):return P>=0;case"".concat(O.e).concat(O.fb.API_CALLS):case"".concat(O.e).concat(O.fb.USERS_ACTIVITY):return P>1;case"".concat(O.e).concat(O.fb.ACCOUNTS):return x&&(h||M||N);case"".concat(O.e).concat(O.fb.CARDS):return x&&(h||R||g||w);case"".concat(O.e).concat(O.fb.STATEMENTS):return x&&(h||M||N);case"".concat(O.e).concat(O.fb.CUSTOMERS):return x&&(g||N);case"".concat(O.e).concat(O.fb.TRANSACTIONS):return x&&(p||v||g||h);default:return P>0}}),[x,h,g,R,p,M,w,N,v,P,u]),D=l.a.useMemo((function(){return o||!k()}),[k,o]);l.a.useEffect((function(){d(!D)}),[D,d]);var E=l.a.useCallback(c(function(){var e=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:a&&m(),I.b.set("".concat(u.pathname,"-").concat(j),JSON.stringify(F(t)),{expires:O.j.MONTH});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),[c,n,a,m]);return Object(S.jsxs)(C,{isHidden:r,children:[Object(S.jsx)("div",{className:"title",children:"Filter"}),Object(S.jsxs)("form",{onSubmit:E,children:[Object(S.jsx)(f.Flex,{width:"960px",alignItems:"flex-end",flexWrap:"wrap",m:"0 -8px 5px",children:t}),Object(S.jsx)(b.a,{text:"Show",isLoading:s,disabled:D})]})]})})),P=Object(R.a)(O.y.FILTER),k=Object(c.c)((function(e){return{filterValues:P(e),isAutoRefresh:Object(h.isAutoRefreshSelector)(e)}}),(function(e){return Object(o.b)({stopAutoRefresh:h.stopAutoRefresh,setIsAccessibleFiltering:h.setIsAccessibleFiltering},e)}))(N),D=n(237),E=Object(m.b)(Object(d.g)((function(e){var t=e.title,n=e.data,i=e.columns,c=e.FilterForm,o=e.filterAction,u=e.openModal,d=e.newModalName,m=e.location,j=e.isAutoRefresh,x=e.stopAutoRefresh,p=e.resetUtils,h=e.AdditionalButton,R=e.initialFilterValues,v=(e.filterData,e.setIsOpenFilter),A=e.isOpenFilter,T=e.isDownloadButton,M=e.isSearchable,w=e.uiItems,C=e.isReadOnly,F=e.isLoading,N=e.setActivePagePermission,P=Object(s.a)(e,["title","data","columns","FilterForm","filterAction","openModal","newModalName","location","isAutoRefresh","stopAutoRefresh","resetUtils","AdditionalButton","initialFilterValues","filterData","setIsOpenFilter","isOpenFilter","isDownloadButton","isSearchable","uiItems","isReadOnly","isLoading","setActivePagePermission"]),E=l.a.useState(!1),L=Object(r.a)(E,2),y=L[0],U=L[1];l.a.useEffect((function(){var e=j&&setInterval((function(){return o()}),5e3);return function(){return clearInterval(e)}}),[j,o]);var z=l.a.useMemo((function(){return w.find((function(e){return"".concat(O.e).concat(e.id)==="".concat(m.pathname)}))}),[m,w]);l.a.useEffect((function(){var e=z&&z.permission;N(e)}),[N,w,m,z]),l.a.useEffect((function(){return function(){return p()}}),[p]);var B=l.a.useMemo((function(){return A?"Hide Filter":"Show Filter"}),[A]),H=l.a.useMemo((function(){return t.split(" ").join("_").toLowerCase()}),[t]),V=l.a.useMemo((function(){return n&&n.length}),[n]),G=l.a.useMemo((function(){var e=I.g.getUserData(),t=e&&e.username,n=I.b.get("".concat(m.pathname,"-").concat(t));return Object(a.a)(Object(a.a)({},R),n?JSON.parse(n):{})}),[R,m]),_=l.a.useMemo((function(){return M&&n&&n.length>10}),[M,n]),J=l.a.useCallback((function(){return U(!y)}),[y]),W=l.a.useCallback((function(){return v(!A)}),[v,A]),Y=l.a.useCallback((function(){return u({name:d})}),[u,d]);return Object(S.jsxs)(l.a.Fragment,{children:[Object(S.jsx)(D.a,{title:t,pageId:z&&z.id}),c&&Object(S.jsx)(f.Box,{mb:"5px",children:Object(S.jsx)(b.a,{text:B,iconName:O.z.FILTER,onClick:W})}),c&&Object(S.jsx)(k,{filterAction:o,initialValues:G,isHidden:!A,isLoading:F,location:m,FilterForm:c}),Object(S.jsxs)(f.Flex,{alignItems:"center",fontSize:"0px",children:[d&&!C&&Object(S.jsx)(f.Box,{mr:"20px",children:Object(S.jsx)(b.a,{text:"Add New",iconName:O.z.PLUS,onClick:Y,disabled:F})}),_&&Object(S.jsx)(f.Box,{mr:"20px",children:Object(S.jsx)(b.a,{text:"Search",disabled:!V||F,iconName:O.z.SEARCH,onClick:J})}),h&&Object(S.jsx)(f.Box,{mr:"20px",children:h}),T&&Object(S.jsx)(f.Box,{mr:"20px",children:Object(S.jsx)(b.j,{selectable:!1,isDisabled:!V,dropdownListPosition:"center",ToggleButtonComponent:Object(S.jsx)(b.a,{text:"Download",iconName:O.z.DOWNLOAD,disabled:F}),children:Object(S.jsx)(b.k,{children:Object(S.jsx)(b.a,{text:".csv",iconName:O.z.FILE,onClick:function(){return I.d.downloadCSV(H,n)},classNames:["no-text-transform"],disabled:F})})})}),j&&Object(S.jsxs)(f.Flex,{alignItems:"flex-end",children:[Object(S.jsx)(b.h,{seconds:5}),Object(S.jsx)(f.Box,{ml:"4px",children:Object(S.jsx)(b.a,{text:"Stop Auto Refreshing",size:"11",iconName:O.z.STOP,onClick:x,disabled:F})})]})]}),Object(S.jsx)(f.Box,{mt:"5px",children:Object(S.jsx)(g,Object(a.a)({data:n,columns:i,filterable:y,isLoading:F},P))})]})})));t.a=Object(c.c)((function(e){return{isAutoRefresh:Object(h.isAutoRefreshSelector)(e),isOpenFilter:Object(h.isOpenFilterSelector)(e),isReadOnly:Object(h.isReadOnlySelector)(e),uiItems:Object(h.uiItemsSelector)(e)}}),(function(e){return Object(o.b)({stopAutoRefresh:h.stopAutoRefresh,resetUtils:h.resetUtils,setIsOpenFilter:h.setIsOpenFilter,setActivePagePermission:h.setActivePagePermission},e)}))(E)},1539:function(e,t,n){"use strict";n.r(t),n.d(t,"Products",(function(){return m}));var i=n(12),c=n(17),o=n(2),a=n.n(o),r=n(3),s=n(1171),u=n(67),l=n(125),d=n(0),f=function(e){var t=e.productItems,n=e.institutionsOptions,i=e.filterProducts,c=e.currentProductName,o=e.deleteProduct,f=e.resetProducts,b=e.isLoading,m=e.isReadOnly;a.a.useEffect((function(){return function(){return f()}}),[f]);var O=a.a.useMemo((function(){return[{name:"Delete",icon:r.z.DELETE,isDisabled:m,action:o,withConfirmation:!0,confirmationText:'Delete product "'.concat(c,'"?')}]}),[o,c,m]),j=a.a.useMemo((function(){return{institutionId:n[0]}}),[n]);return Object(d.jsx)(s.a,{title:"Products",data:t,columns:u.m,isDownloadButton:!0,newModalName:r.G.ADD_PRODUCT,viewingModalName:r.G.EDIT_PRODUCT,contextMenuItems:O,filterAction:i,initialFilterValues:j,isLoading:b,FilterForm:Object(d.jsx)(l.j,{isDisabled:b,institutionsOptions:n})})},b=n(7),m=Object(i.c)((function(e){return{isLoading:Object(b.isProductsFilteringSelector)(e)||Object(b.isProductsDeletingSelector)(e),productItems:Object(b.productsSelector)(e),institutionsOptions:Object(b.userInstitutionsOptionsSelector)(e),currentProductName:Object(b.productNameSelector)(e),isReadOnly:Object(b.isReadOnlySelector)(e)}}),(function(e){return Object(c.b)({filterProducts:b.handleFilterProducts,deleteProduct:b.handleDeleteProduct,resetProducts:b.resetProducts},e)}))(f)}}]);
//# sourceMappingURL=7.4de73d2c.chunk.js.map