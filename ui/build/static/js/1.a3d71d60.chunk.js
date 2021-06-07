(this["webpackJsonpbox-ui"]=this["webpackJsonpbox-ui"]||[]).push([[1],{1171:function(t,e,n){"use strict";var i,r=n(12),a=n(17),c=n(10),s=n(43),o=n(54),u=n(2),l=n.n(u),d=n(57),m=n(5),f=n(1),b=n(22),O=n(3),j=n(47),I=n(170),x=n(359),C=n(7),v=n(4),S=n(0),A=function(t){var e=function(e){var n=e.activeTableRowIndex,i=e.contextMenuItems,r=void 0===i?[]:i,a=e.handleOpenModal,u=e.modalsStateList,d=(e.onRowClick,e.handleSetActiveItemId),m=e.handleSetActiveTableRowIndex,b=e.viewingModalName,C=Object(o.a)(e,["activeTableRowIndex","contextMenuItems","handleOpenModal","modalsStateList","onRowClick","handleSetActiveItemId","handleSetActiveTableRowIndex","viewingModalName"]),v=l.a.useState(null),A=Object(s.a)(v,2),p=A[0],T=A[1],h=l.a.useState(!1),y=Object(s.a)(h,2),g=y[0],F=y[1],R=l.a.useCallback((function(){F(!1),m(null),d(null)}),[m,d]);l.a.useEffect((function(){var t=x.a.find((function(t){return u["is".concat(t.name)]}));T(t)}),[u]),l.a.useEffect((function(){p||R()}),[p,R]);var D=l.a.useCallback((function(){return a({name:b})}),[a,b]),M=l.a.useCallback((function(t,e){e.withConfirmation?a({name:O.E.CONFIRMATION,payload:{confirmationAction:e.action,confirmationTitle:e.confirmationTitle,confirmationText:e.confirmationText}}):e.action()}),[a]),B=l.a.useMemo((function(){var t={name:"Open",icon:O.x.EDIT,action:function(){return D()}};return b?[t].concat(Object(j.a)(r)):r}),[r,b,D]),N=l.a.useCallback((function(t,e){var n=e.original.lockedFlag,i=e.original.id,r=e.index+1,a=e.page?r-e.pageSize*e.page:r;return{onDoubleClick:function(){b&&(d(i,n),m(a),D())},onContextMenu:function(){B.length&&(d(i,n),m(a),F(!0))},className:n&&"is-gray"}}),[D,b,B,d,m]);return Object(S.jsxs)(l.a.Fragment,{children:[Object(S.jsx)(I.b,{id:"tableContextMenu",disable:!B.length,children:Object(S.jsx)(t,Object(c.a)({onRowClick:N,activeTableRowIndex:n},C))}),Object(S.jsx)(f.g,{menuId:"tableContextMenu",onClick:M,items:B,isHidden:p||!g,onHide:!p&&n?R:null})]})};e.displayName="WithEditTable(".concat(v.a.getDisplayName(t),")");return Object(r.c)((function(t){return{activeTableRowIndex:Object(C.activeTableRowIndexSelector)(t),modalsStateList:Object(C.modalsStateListSelector)(t)}}),(function(t){return Object(a.b)({handleOpenModal:C.openModal,handleSetActiveItemId:C.setActiveItemId,handleSetActiveTableRowIndex:C.setActiveTableRowIndex},t)}))(e)}(Object(f.Z)()((function(t){var e=t.onRowClick,n=t.activeTableRowIndex,i=Object(o.a)(t,["onRowClick","activeTableRowIndex"]);return Object(S.jsx)(f.O,Object(c.a)({getTrGroupProps:e,activeRowIndex:n},i))}))),p=n(351),T=n(6),h=n.n(T),y=n(8),g=n(18),F=n(601),R=n(11).d.div(i||(i=Object(g.a)(["\n  margin-bottom: 15px;\n  padding: 10px 15px 12px;\n  border: 1px solid ",";\n  border-radius: 2px;\n  background-color: ",";\n\n  .title {\n    font-size: 18px;\n    color: ",";\n    font-weight: bold;\n  }\n\n  ",";\n"])),(function(t){return t.theme.colors.lighterGray}),(function(t){return t.theme.colors.lighterGrayCell}),(function(t){var e=t.theme;return t.color||e.colors.darkGray}),(function(t){return t.isHidden&&"\n    display: none;\n  "})),D=function(t){return t&&Object.keys(t).filter((function(t){return!t.match(/dateFrom|dateTo|dateTimeFrom|dateTimeTo/gi)})).reduce((function(e,n){return e[n]=t[n],e}),{})},M=Object(F.a)({form:O.w.FILTER,destroyOnUnmount:!1,enableReinitialize:!0})((function(t){var e=t.FilterForm,n=t.filterAction,i=t.filterValues,r=t.handleSubmit,a=t.invalid,c=t.isAutoRefresh,s=t.isHidden,o=t.isLoading,u=t.location,d=t.setIsAccessibleFiltering,b=t.stopAutoRefresh,j=l.a.useMemo((function(){var t=v.g.getUserData();return t&&t.username}),[]),I=l.a.useMemo((function(){return i&&i.institutionId}),[i]),x=l.a.useMemo((function(){return i&&i.transactionId}),[i]),C=l.a.useMemo((function(){return i&&i.accountId}),[i]),A=l.a.useMemo((function(){return i&&i.customerId}),[i]),p=l.a.useMemo((function(){return i&&i.cardId}),[i]),T=l.a.useMemo((function(){return i&&i.productName}),[i]),g=l.a.useMemo((function(){return i&&i.accountAlias}),[i]),F=l.a.useMemo((function(){return i&&i.panAlias}),[i]),M=l.a.useMemo((function(){return i&&i.lastName}),[i]),B=l.a.useMemo((function(){return i&&Object.values(i).reduce((function(t,e){return e?++t:t}),0)}),[i]),N=l.a.useCallback((function(){switch(u.pathname){case"".concat(O.d).concat(O.gb.SYSTEM_PROPERTIES):case"".concat(O.d).concat(O.gb.USERS):case"".concat(O.d).concat(O.gb.SCHEDULER):return B>=0;case"".concat(O.d).concat(O.gb.API_CALLS):case"".concat(O.d).concat(O.gb.USERS_ACTIVITY):return B>1;case"".concat(O.d).concat(O.gb.ACCOUNTS):return I&&(C||g||M);case"".concat(O.d).concat(O.gb.CARDS):return I&&(C||p||A||F);case"".concat(O.d).concat(O.gb.STATEMENTS):return I&&(C||g||M);case"".concat(O.d).concat(O.gb.CUSTOMERS):return I&&(A||M);case"".concat(O.d).concat(O.gb.TRANSACTIONS):return I&&(x||T||A||C);default:return B>0}}),[I,C,A,p,x,g,F,M,T,B,u]),E=l.a.useMemo((function(){return a||!N()}),[N,a]);l.a.useEffect((function(){d(!E)}),[E,d]);var L=l.a.useCallback(r(function(){var t=Object(y.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:c&&b(),v.b.set("".concat(u.pathname,"-").concat(j),JSON.stringify(D(e)),{expires:O.i.MONTH});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),[r,n,c,b]);return Object(S.jsxs)(R,{isHidden:s,children:[Object(S.jsx)("div",{className:"title",children:"Filter"}),Object(S.jsxs)("form",{onSubmit:L,children:[Object(S.jsx)(m.Flex,{width:"960px",alignItems:"flex-end",flexWrap:"wrap",m:"0 -8px 5px",children:e}),Object(S.jsx)(f.a,{text:"Show",isLoading:o,disabled:E})]})]})})),B=Object(p.a)(O.w.FILTER),N=Object(r.c)((function(t){return{filterValues:B(t),isAutoRefresh:Object(C.isAutoRefreshSelector)(t)}}),(function(t){return Object(a.b)({stopAutoRefresh:C.stopAutoRefresh,setIsAccessibleFiltering:C.setIsAccessibleFiltering},t)}))(M),E=n(236),L=Object(b.b)(Object(d.g)((function(t){var e=t.title,n=t.data,i=t.columns,r=t.FilterForm,a=t.filterAction,u=t.openModal,d=t.newModalName,b=t.location,j=t.isAutoRefresh,I=t.stopAutoRefresh,x=t.resetUtils,C=t.AdditionalButton,p=t.initialFilterValues,T=(t.filterData,t.setIsOpenFilter),h=t.isOpenFilter,y=t.isDownloadButton,g=t.isSearchable,F=t.uiItems,R=t.isReadOnly,D=t.isLoading,M=t.setActivePagePermission,B=Object(o.a)(t,["title","data","columns","FilterForm","filterAction","openModal","newModalName","location","isAutoRefresh","stopAutoRefresh","resetUtils","AdditionalButton","initialFilterValues","filterData","setIsOpenFilter","isOpenFilter","isDownloadButton","isSearchable","uiItems","isReadOnly","isLoading","setActivePagePermission"]),L=l.a.useState(!1),w=Object(s.a)(L,2),P=w[0],_=w[1];l.a.useEffect((function(){var t=j&&setInterval((function(){return a()}),5e3);return function(){return clearInterval(t)}}),[j,a]);var k=l.a.useMemo((function(){return F.find((function(t){return"".concat(O.d).concat(t.id)==="".concat(b.pathname)}))}),[b,F]);l.a.useEffect((function(){var t=k&&k.permission;M(t)}),[M,F,b,k]),l.a.useEffect((function(){return function(){return x()}}),[x]);var H=l.a.useMemo((function(){return h?"Hide Filter":"Show Filter"}),[h]),U=l.a.useMemo((function(){return e.split(" ").join("_").toLowerCase()}),[e]),W=l.a.useMemo((function(){return n&&n.length}),[n]),Q=l.a.useMemo((function(){var t=v.g.getUserData(),e=t&&t.username,n=v.b.get("".concat(b.pathname,"-").concat(e));return Object(c.a)(Object(c.a)({},p),n?JSON.parse(n):{})}),[p,b]),V=l.a.useMemo((function(){return g&&n&&n.length>10}),[g,n]),Y=l.a.useCallback((function(){return _(!P)}),[P]),z=l.a.useCallback((function(){return T(!h)}),[T,h]),G=l.a.useCallback((function(){return u({name:d})}),[u,d]);return Object(S.jsxs)(l.a.Fragment,{children:[Object(S.jsx)(E.a,{title:e,pageId:k&&k.id}),r&&Object(S.jsx)(m.Box,{mb:"5px",children:Object(S.jsx)(f.a,{text:H,iconName:O.x.FILTER,onClick:z})}),r&&Object(S.jsx)(N,{filterAction:a,initialValues:Q,isHidden:!h,isLoading:D,location:b,FilterForm:r}),Object(S.jsxs)(m.Flex,{alignItems:"center",fontSize:"0px",children:[d&&!R&&Object(S.jsx)(m.Box,{mr:"20px",children:Object(S.jsx)(f.a,{text:"Add New",iconName:O.x.PLUS,onClick:G,disabled:D})}),V&&Object(S.jsx)(m.Box,{mr:"20px",children:Object(S.jsx)(f.a,{text:"Search",disabled:!W||D,iconName:O.x.SEARCH,onClick:Y})}),C&&Object(S.jsx)(m.Box,{mr:"20px",children:C}),y&&Object(S.jsx)(m.Box,{mr:"20px",children:Object(S.jsx)(f.j,{selectable:!1,isDisabled:!W,dropdownListPosition:"center",ToggleButtonComponent:Object(S.jsx)(f.a,{text:"Download",iconName:O.x.DOWNLOAD,disabled:D}),children:Object(S.jsx)(f.k,{children:Object(S.jsx)(f.a,{text:".csv",iconName:O.x.FILE,onClick:function(){return v.d.downloadCSV(U,n)},classNames:["no-text-transform"],disabled:D})})})}),j&&Object(S.jsxs)(m.Flex,{alignItems:"flex-end",children:[Object(S.jsx)(f.h,{seconds:5}),Object(S.jsx)(m.Box,{ml:"4px",children:Object(S.jsx)(f.a,{text:"Stop Auto Refreshing",size:"11",iconName:O.x.STOP,onClick:I,disabled:D})})]})]}),Object(S.jsx)(m.Box,{mt:"5px",children:Object(S.jsx)(A,Object(c.a)({data:n,columns:i,filterable:P,isLoading:D},B))})]})})));e.a=Object(r.c)((function(t){return{isAutoRefresh:Object(C.isAutoRefreshSelector)(t),isOpenFilter:Object(C.isOpenFilterSelector)(t),isReadOnly:Object(C.isReadOnlySelector)(t),uiItems:Object(C.uiItemsSelector)(t)}}),(function(t){return Object(a.b)({stopAutoRefresh:C.stopAutoRefresh,resetUtils:C.resetUtils,setIsOpenFilter:C.setIsOpenFilter,setActivePagePermission:C.setActivePagePermission},t)}))(L)},1538:function(t,e,n){"use strict";n.r(e),n.d(e,"Accounts",(function(){return O})),n.d(e,"Cards",(function(){return v})),n.d(e,"CurrencyRates",(function(){return y})),n.d(e,"Customers",(function(){return D})),n.d(e,"Statements",(function(){return w})),n.d(e,"Transactions",(function(){return H}));var i=n(12),r=n(17),a=n(2),c=n.n(a),s=n(22),o=n(3),u=n(1171),l=n(176),d=n(275),m=n(0),f=Object(s.b)((function(t){var e=t.accounts,n=t.filterAccounts,i=t.institutionsOptions,r=t.hasProductOverride,a=t.addProductOverride,s=t.openModal,f=t.resetAccounts,b=t.setActiveItemId,O=t.productOverrideId,j=t.currentId,I=t.filterCustomersById,x=t.filterCardsById,C=t.filterTransactionsById,v=t.filterStatementsById,S=t.currentCurrencyCode,A=t.isLoading,p=t.isReadOnly,T=t.uiItems;c.a.useEffect((function(){return function(){return f()}}),[f]);var h=c.a.useMemo((function(){var t,e=T.find((function(t){return t.id===o.gb.MANUAL_TRANSACTION}));return{isReadOnlyManualTransaction:(t=e,!!t&&t.permission===o.I.READ_ONLY)}}),[T]),y=c.a.useCallback((function(){r?(b(O),j&&s({name:o.E.EDIT_PRODUCT})):a(j,{withOpenProductModal:!0})}),[s,a,r,O,b,j]),g=c.a.useMemo((function(){return[{name:r?"Product override":"Add product override",icon:r?o.x.EDIT:o.x.PLUS,isDisabled:p,action:y},{isDivider:!0},{name:"Customers",action:function(){return I({account_id:j})}},{name:"Cards",action:function(){return x({account_id:j})}},{name:"Statements",action:function(){return v({account_id:j})}},{name:"Transactions",action:function(){return C({account_id:j})}},{isDivider:!0},{name:"Manual Transaction",isDisabled:h.isReadOnlyManualTransaction,action:function(){return s({name:o.E.MANUAL_TRANSACTION,payload:{accountId:j,currencyCode:S}})}}]}),[r,y,I,C,v,x,j,S,s,p,h]),F=c.a.useMemo((function(){return{institutionId:i[0]}}),[i]);return Object(m.jsx)(u.a,{title:"Accounts",data:e,columns:l.f,newModalName:o.E.ADD_ACCOUNT,viewingModalName:o.E.EDIT_ACCOUNT,contextMenuItems:g,filterAction:n,isDownloadButton:!0,isLoading:A,initialFilterValues:F,FilterForm:Object(m.jsx)(d.b,{isDisabled:A,institutionsOptions:i})})})),b=n(7),O=Object(i.c)((function(t){return{isLoading:Object(b.isAccountLoadingSelector)(t),accounts:Object(b.accountsSelector)(t),institutionsOptions:Object(b.userInstitutionsOptionsSelector)(t),hasProductOverride:Object(b.currentAccHasProductOverrideSelector)(t),productOverrideId:Object(b.currentAccProductOverrideIdSelector)(t),currentId:Object(b.activeItemIdSelector)(t),currentCurrencyCode:Object(b.currentAccCurrencyCodeSelector)(t),isReadOnly:Object(b.isReadOnlySelector)(t),uiItems:Object(b.uiItemsSelector)(t)}}),(function(t){return Object(r.b)({filterAccounts:b.handleFilterAccounts,filterCustomersById:b.handleFilterByIdCustomers,filterCardsById:b.handleFilterByIdCards,filterTransactionsById:b.handleFilterByIdTransactions,filterStatementsById:b.handleFilterByIdStatements,addProductOverride:b.handleAddProductOverride,setActiveItemId:b.setActiveItemId,resetAccounts:b.resetAccounts},t)}))(f),j=n(1),I=[{maxWidth:120,Header:Object(m.jsx)(j.Q,{title:"ID"}),accessor:"id",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,isNumber:!0})}},{maxWidth:120,Header:Object(m.jsx)(j.Q,{title:"Account ID"}),accessor:"accountId",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,isNumber:!0})}},{maxWidth:120,Header:Object(m.jsx)(j.Q,{title:"Customer ID"}),accessor:"customerId",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,isNumber:!0})}},{maxWidth:150,Header:Object(m.jsx)(j.Q,{title:"PAN Alias"}),accessor:"panAlias",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value})}},{maxWidth:200,Header:Object(m.jsx)(j.Q,{title:"PAN Masked"}),accessor:"panMasked",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value})}},{maxWidth:120,Header:Object(m.jsx)(j.Q,{title:"Expiry Date"}),accessor:"expiryDate",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,isDate:!0})}},{maxWidth:200,Header:Object(m.jsx)(j.Q,{title:"Status"}),accessor:"status",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value})}}],x=n(349),C=function(t){var e=t.cards,n=t.filterCards,i=t.filterCustomersById,r=t.filterAccountsById,a=t.filterTransactionsById,s=t.filterStatementsById,l=t.institutionsOptions,d=t.currentId,f=t.resetCards,b=t.isLoading;c.a.useEffect((function(){return function(){return f()}}),[f]);var O=c.a.useMemo((function(){return[{isDivider:!0},{name:"Accounts",action:function(){return r({card_id:d})}},{name:"Customers",action:function(){return i({card_id:d})}},{name:"Statements",action:function(){return s({card_id:d})}},{name:"Transactions",action:function(){return a({card_id:d})}}]}),[i,a,s,r,d]),j=c.a.useMemo((function(){return{institutionId:l[0]}}),[l]);return Object(m.jsx)(u.a,{title:"Cards",data:e,columns:I,viewingModalName:o.E.INFO_CARDS,contextMenuItems:O,filterAction:n,isDownloadButton:!0,isLoading:b,initialFilterValues:j,FilterForm:Object(m.jsx)(x.b,{isDisabled:b,institutionsOptions:l})})},v=Object(i.c)((function(t){return{isLoading:Object(b.isLoadingCardsSelector)(t),cards:Object(b.cardsSelector)(t),currentId:Object(b.activeItemIdSelector)(t),institutionsOptions:Object(b.userInstitutionsOptionsSelector)(t)}}),(function(t){return Object(r.b)({filterCards:b.handleFilterCards,filterAccountsById:b.handleFilterByIdAccounts,filterCustomersById:b.handleFilterByIdCustomers,filterStatementsById:b.handleFilterByIdStatements,filterTransactionsById:b.handleFilterByIdTransactions,resetCards:b.resetCards},t)}))(C),S=n(43),A=[{maxWidth:100,Header:Object(m.jsx)(j.Q,{title:"Institution ID"}),accessor:"institutionId",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,isNumber:!0})}},{maxWidth:200,Header:Object(m.jsx)(j.Q,{title:"Institution"}),accessor:"institutionName",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value})}},{maxWidth:200,Header:Object(m.jsx)(j.Q,{title:"Provider"}),accessor:"rateProvider",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value})}},{maxWidth:100,Header:Object(m.jsx)(j.Q,{title:"From Currency"}),accessor:"fromCurrency",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,onCenter:!0})}},{maxWidth:100,Header:Object(m.jsx)(j.Q,{title:"To Currency"}),accessor:"toCurrency",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,onCenter:!0})}},{maxWidth:100,Header:Object(m.jsx)(j.Q,{title:"Spot Rate"}),accessor:"spotRate",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,isNumber:!0})}},{maxWidth:160,Header:Object(m.jsx)(j.Q,{title:"Created Datetime"}),accessor:"createdDatetime",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,isDate:!0})}},{maxWidth:160,Header:Object(m.jsx)(j.Q,{title:"Provider Datetime"}),accessor:"providerDatetime",Cell:function(t){return Object(m.jsx)(j.P,{value:t.value,isDate:!0})}}],p=n(276),T=n(4),h=function(t){var e=t.currencyRatesData,n=t.filterCurrencyRates,i=t.institutionsOptions,r=t.isLoading,a=t.resetCurrencyRates,s=c.a.useState(null),l=Object(S.a)(s,2),d=l[0],f=l[1],b=c.a.useState(null),O=Object(S.a)(b,2),j=O[0],I=O[1],x=c.a.useState(null),C=Object(S.a)(x,2),v=C[0],h=C[1],y=c.a.useState(null),g=Object(S.a)(y,2),F=g[0],R=g[1];c.a.useEffect((function(){f(T.c.yesterdayDateTime()),I(T.c.todayDateTime()),h(T.c.yesterdayDateTime()),R(T.c.todayDateTime())}),[]),c.a.useEffect((function(){return function(){return a()}}),[a]);var D=c.a.useMemo((function(){return{institutionId:i[0],rateProvider:o.k.find((function(t){return"custom"===t.value})),providerDatetimeFrom:d,providerDatetimeTo:j,createdDatetimeFrom:v,createdDatetimeTo:F}}),[i,d,j,v,F]);return Object(m.jsx)(u.a,{title:"Currency Rates",data:e,columns:A,newModalName:o.E.ADD_CURRENCY_RATE,viewingModalName:o.E.EDIT_CURRENCY_RATE,filterAction:n,isDownloadButton:!0,isLoading:r,initialFilterValues:D,FilterForm:Object(m.jsx)(p.b,{isDisabled:r,institutionsOptions:i})})},y=Object(i.c)((function(t){return{isLoading:Object(b.isLoadingCurrencyRatesSelector)(t),institutionsOptions:Object(b.userInstitutionsOptionsSelector)(t),currencyRatesData:Object(b.currencyRatesSelector)(t)}}),(function(t){return Object(r.b)({filterCurrencyRates:b.handleFilterCurrencyRates,resetCurrencyRates:b.resetCurrencyRates},t)}))(h),g=n(173),F=n(150),R=function(t){var e=t.institutionsOptions,n=t.customers,i=t.filterCustomers,r=t.currentId,a=t.filterCardsById,s=t.filterTransactionsById,l=t.filterStatementsById,d=t.filterAccountsById,f=t.resetCustomers,b=t.isLoading;c.a.useEffect((function(){return function(){return f()}}),[f]);var O=c.a.useMemo((function(){return[{isDivider:!0},{name:"Accounts",action:function(){return d({customer_id:r})}},{name:"Cards",action:function(){return a({customer_id:r})}},{name:"Statements",action:function(){return l({customer_id:r})}},{name:"Transactions",action:function(){return s({customer_id:r})}}]}),[s,l,a,d,r]),j=c.a.useMemo((function(){return{institutionId:e[0]}}),[e]);return Object(m.jsx)(u.a,{title:"Customers",data:n,columns:g.e,newModalName:o.E.ADD_CUSTOMER,viewingModalName:o.E.EDIT_CUSTOMER,contextMenuItems:O,filterAction:i,isDownloadButton:!0,isLoading:b,initialFilterValues:j,FilterForm:Object(m.jsx)(F.c,{isDisabled:b,institutionsOptions:e})})},D=Object(i.c)((function(t){return{isLoading:Object(b.isLoadingCustomersSelector)(t),institutionsOptions:Object(b.userInstitutionsOptionsSelector)(t),customers:Object(b.customersSelector)(t),currentId:Object(b.activeItemIdSelector)(t),isReadOnly:Object(b.isReadOnlySelector)(t)}}),(function(t){return Object(r.b)({filterCustomers:b.handleFilterCustomers,filterCardsById:b.handleFilterByIdCards,filterTransactionsById:b.handleFilterByIdTransactions,filterStatementsById:b.handleFilterByIdStatements,filterAccountsById:b.handleFilterByIdAccounts,resetCustomers:b.resetCustomers},t)}))(R),M=n(47),B=n(5),N=n(177),E=n(277),L=function(t){var e=t.currentId,n=t.filterAccountsById,i=t.filterCardsById,r=t.filterCustomersById,a=t.filterStatements,s=t.filterTransactionsById,l=t.downloadStatement,d=t.institutionsOptions,f=t.isLoading,b=t.isLoadingStatement,O=t.resetStatements,I=t.setActiveItemId,x=t.statements,C=c.a.useState(null),v=Object(S.a)(C,2),A=v[0],p=v[1],h=c.a.useState(null),y=Object(S.a)(h,2),g=y[0],F=y[1];c.a.useEffect((function(){return p(T.c.yesterdayDate()),F(T.c.todayDate()),function(){return O()}}),[O]);var R=c.a.useCallback((function(t){I(t),l(),setTimeout((function(){return I(null)}),100)}),[I,l]),D=c.a.useMemo((function(){return[{isDivider:!0},{name:"Open pdf statement",icon:o.x.FILE_PDF,action:l},{isDivider:!0},{name:"Accounts",action:function(){return n({statement_id:e})}},{name:"Customers",action:function(){return r({statement_id:e})}},{name:"Cards",action:function(){return i({statement_id:e})}},{name:"Transactions",action:function(){return s({statement_id:e})}}]}),[e,r,s,i,n,l]),L=c.a.useMemo((function(){return[{maxWidth:50,accessor:"openPdfButton",Cell:function(t){return Object(m.jsx)(B.Flex,{justifyContent:"center",width:"100%",children:Object(m.jsx)(j.a,{iconName:o.x.FILE_PDF,onClick:function(){return R(t.original.id)},title:"Open pdf statement",isLoading:b})})}}].concat(Object(M.a)(N.d))}),[R,b]),w=c.a.useMemo((function(){return{institutionId:d[0],statementsDateFrom:A,statementsDateTo:g}}),[d,A,g]);return Object(m.jsx)(u.a,{columns:L,contextMenuItems:D,data:x,filterAction:a,initialFilterValues:w,isDownloadButton:!0,isLoading:f,title:"Statements",viewingModalName:o.E.STATEMENTS,FilterForm:Object(m.jsx)(E.c,{institutionsOptions:d,isDisabled:f})})},w=Object(i.c)((function(t){return{currentId:Object(b.activeItemIdSelector)(t),institutionsOptions:Object(b.userInstitutionsOptionsSelector)(t),isLoading:Object(b.isStatementsLoadingSelector)(t),isLoadingStatement:Object(b.isTransArsLoadingSelector)(t),statements:Object(b.statementsSelector)(t)}}),(function(t){return Object(r.b)({filterAccountsById:b.handleFilterByIdAccounts,filterCardsById:b.handleFilterByIdCards,filterCustomersById:b.handleFilterByIdCustomers,filterStatements:b.handleFilterStatements,filterTransactionsById:b.handleFilterByIdTransactions,downloadStatement:b.handleDownloadStatement,resetStatements:b.resetStatements,setActiveItemId:b.setActiveItemId},t)}))(L),P=n(299),_=n(350),k=Object(s.b)((function(t){var e=t.currentId,n=t.filterAccountsById,i=t.filterCardsById,r=t.filterCustomersById,a=t.filterStatementsById,s=t.filterTransactions,l=t.institutionsOptions,d=t.isConvertibleToLoan,f=t.isSettledTr,b=t.isLoading,O=t.openModal,j=t.resetTransactions,I=t.transactions,x=t.uiItems,C=c.a.useState(null),v=Object(S.a)(C,2),A=v[0],p=v[1],h=c.a.useState(null),y=Object(S.a)(h,2),g=y[0],F=y[1];c.a.useEffect((function(){return p(T.c.yesterdayDateTime()),F(T.c.todayDateTime()),function(){return j()}}),[j]);var R=c.a.useMemo((function(){var t=x.find((function(t){return t.id===o.gb.SETTLE_TRANSACTION}));return!!t&&t.permission===o.I.READ_ONLY}),[x]),D=c.a.useMemo((function(){var t=[{isDivider:!0},{name:"Accounts",action:function(){return n({transaction_id:e})}},{name:"Customers",action:function(){return r({transaction_id:e})}},{name:"Cards",action:function(){return i({transaction_id:e})}},{name:"Statements",action:function(){return a({transaction_id:e})}}],c=[{isDivider:!0},{name:"Convert to Loan",icon:o.x.LOAN,action:function(){return O({name:o.E.TRANSACTION,payload:{activeTab:2}})}}],s=[{isDivider:!0},{name:"Settle Transaction",isDisabled:R,action:function(){return O({name:o.E.SETTLE_TRANSACTION,payload:{transactionId:e}})}}];return d&&!f?[].concat(t,s,c):d?[].concat(t,c):f?t:[].concat(t,s)}),[d,e,n,i,r,a,O,R,f]),M=c.a.useMemo((function(){return{institutionId:l[0],transactionsDateTimeFrom:A,transactionsDateTimeTo:g}}),[l,A,g]);return Object(m.jsx)(u.a,{title:"Transactions",data:I,columns:P.d,viewingModalName:o.E.TRANSACTION,filterAction:s,contextMenuItems:D,isDownloadButton:!0,isLoading:b,initialFilterValues:M,FilterForm:Object(m.jsx)(_.c,{isDisabled:b,institutionsOptions:l})})})),H=Object(i.c)((function(t){return{isLoading:Object(b.isLoadingTransactionsSelector)(t),transactions:Object(b.transactionsSelector)(t),institutionsOptions:Object(b.userInstitutionsOptionsSelector)(t),currentId:Object(b.activeItemIdSelector)(t),isConvertibleToLoan:Object(b.isTrConvertibleToLoanSelector)(t),isSettledTr:Object(b.isSettledTrSelector)(t),uiItems:Object(b.uiItemsSelector)(t)}}),(function(t){return Object(r.b)({filterTransactions:b.handleFilterTransactions,filterCardsById:b.handleFilterByIdCards,filterStatementsById:b.handleFilterByIdStatements,filterCustomersById:b.handleFilterByIdCustomers,filterAccountsById:b.handleFilterByIdAccounts,resetTransactions:b.resetTransactions},t)}))(k)}}]);
//# sourceMappingURL=1.a3d71d60.chunk.js.map