"use strict";(globalThis.webpackChunkunsplash_web=globalThis.webpackChunkunsplash_web||[]).push([[3671],{73671:(e,t,n)=>{n.d(t,{AR:()=>Ue.AR,UI:()=>qe,$e:()=>Ue.$e});var r={};n.r(r),n.d(r,{clear:()=>de,recentSearches:()=>he,trendingCollections:()=>ue,trendingSearches:()=>ge,trendingTopics:()=>me});var i={};n.r(i),n.d(i,{formAccessibilityLabel:()=>Pe,keywordFullLengthPlaceholder:()=>De,keywordSearchButtonTitle:()=>Fe,keywordShortPlaceholder:()=>He,visualPlaceholder:()=>Le});var s=n(85893),a=n(11324),o=n(8144),l=n(33072),c=n(73570),d=n(78679),h=n(60860),u=n(66132),g=n(77630),m=n(18711),p=n(9758),S=n(77903),T=n(39607),k=n(98677),y=n(46797);var w=n(46681),G=n(16378),R=n(44295),I=n(64574),C=n(4094),U=n(41210),z=n(12728),j=n(85198),x=n(57842),b=n(68873),v=n(87976),$=n(33037),N=n(25510),f=n(40755),V=n(13217),O=n(77657),Q=n(78697),A=n(76194),P=n(49056),D=n(35814),F=n(61465),H=n(49947),L=n(82323),W=n(20736),K=n(43172),Y=n(58811),_=n(84592),B=n(43125),J=n(94184),q=n.n(J),E=n(23209),X=n(26939),M=n(72450),Z=n(18655),ee=n(39147),te=n(38369),ne=n(18571);const re=e=>{let{thumbnail:t,isHighlighted:n,children:r}=e;return(0,s.jsxs)(y.tJQ,{className:q()("VJoss m46Yv",n&&"ob_1e"),children:[(0,N.zG)(t,x.ij,x.WA((e=>(0,s.jsx)(ne.p,{...e,width:38})))),(0,s.jsx)(y.tJQ,{className:"yfCAO",children:r})]})},ie=e=>{let{IconComponent:t,children:n,...r}=e;return(0,s.jsxs)(re,{...r,children:[(0,s.jsx)(t,{className:"ij2OU"}),(0,s.jsx)(M.L,{width:8}),n]})},se=y.X$I((e=>{let{topicSlug:t,...n}=e;const r=(0,w.v)((e=>(0,te.Mh)(e,t))),i=(0,w.v)((e=>(0,N.zG)(r.coverPhotoSlug,x.UI((t=>(0,ee.zw)(e,t))))));return(0,s.jsx)(re,{...n,thumbnail:(0,N.zG)(i,x.UI((e=>({photoOption:x.G(e)}))),x.FS),children:r.title})})),ae=y.X$I((e=>{let{collectionId:t,...n}=e;const r=(0,w.v)((e=>(0,Z.Fp)(e,t)));return(0,s.jsx)(re,{...n,children:r.title})}));const oe=v.Ue(),le=v.Ue();var ce=n(73505);n(37105),n(27306);const de=()=>"Clear",he=()=>"Recent Searches",ue=()=>"Trending Collections",ge=()=>"Trending Searches",me=()=>"Trending Topics",pe=e=>r,Se=((0,ce.G)(pe),{container:"kypwe",suggestionsContainer:"rMj7l"}),Te=e=>{let{className:t,children:n}=e;return(0,s.jsx)(y.tJQ,{className:q()(t,"feLIZ xSy4N"),children:n})},ke=e=>{let{children:t}=e;return(0,s.jsx)(y.Ct_,{className:"psy_G",children:t})},ye=e=>t=>{let{section:n,containerProps:r,children:i}=t;const a=i;return(0,N.zG)(n,oe.match({RelatedQueries:()=>(e=>{let{containerProps:t,children:n}=e;const r=n;return(0,s.jsx)(y.tJQ,{...t,className:q()(t.className,"xSy4N"),children:r})})({containerProps:r,children:a}),RecentSearches:()=>(0,s.jsxs)(Te,{...r,children:[(0,s.jsxs)(y.tJQ,{className:"Qozf9",children:[(0,s.jsx)(ke,{children:e.recentSearches()}),(0,s.jsx)(M.L,{width:4}),Q.re(" · "),(0,s.jsx)(M.L,{width:4}),(0,s.jsx)(X.Z,{type:"button",onClick:()=>E.Jo(),className:"GEQ71",children:e.clear()})]}),(0,s.jsx)(M.L,{height:8}),a]}),TrendingSearches:()=>(0,s.jsxs)(Te,{...r,children:[(0,s.jsx)(ke,{children:e.trendingSearches()}),(0,s.jsx)(M.L,{height:8}),a]}),TrendingCollections:()=>(0,s.jsxs)(Te,{...r,children:[(0,s.jsx)(ke,{children:e.trendingCollections()}),(0,s.jsx)(M.L,{height:8}),a]}),TrendingTopics:()=>(0,s.jsxs)(Te,{...r,children:[(0,s.jsx)(ke,{children:e.trendingTopics()}),(0,s.jsx)(M.L,{height:8}),a]})}))},we=(e,t)=>{let{isHighlighted:n}=t;return le.match({RelatedQuery:e=>{let{query:t}=e;return(0,s.jsx)(K.q$,{shouldHighlight:n,children:t})},RecentSearch:e=>(0,s.jsx)(re,{isHighlighted:n,children:e}),TrendingSearch:e=>(0,s.jsx)(ie,{IconComponent:G.mp,isHighlighted:n,children:e}),TrendingCollection:e=>(0,s.jsx)(ae,{isHighlighted:n,collectionId:e}),TrendingTopic:e=>(0,s.jsx)(se,{isHighlighted:n,topicSlug:e})})(e)},Ge=oe.match({RelatedQueries:C.UID(le.mk.RelatedQuery),RecentSearches:C.UID(le.mk.RecentSearch),TrendingSearches:C.UID(le.mk.TrendingSearch),TrendingCollections:C.UID(le.mk.TrendingCollection),TrendingTopics:C.UID(le.mk.TrendingTopic)}),Re=le.match({RelatedQuery:K.Go,RecentSearch:N.yR,TrendingSearch:N.yR,TrendingCollection:N.yR,TrendingTopic:U.Vv}),Ie=e=>null,Ce=y.X$I((e=>{let{autosuggestRef:t,onSuggestionSelected:n,inputValue:r,onChange:i,theme:a,sections:o,placeholder:l,title:c,name:d,testAttribute:u,required:g,...m}=e;const p=(()=>{const e=(0,h.bU)();return pe(e)})(),S=y.Yen((()=>ye(p)),[p]),T=y.Yen((()=>({type:"search",name:d,placeholder:l,title:c,className:B.XA(a),style:{WebkitAppearance:"none"},...void 0!==u&&(0,V.Nn)(u),autoCapitalize:"none",spellCheck:!1,value:r,onChange:i,required:g})),[a,d,l,c,u,r,i,g]);return(0,s.jsx)(K.II,{suggestions:o,focusInputOnSuggestionClick:!1,autosuggestRef:t,multiSection:!0,renderSectionTitle:Ie,getSectionSuggestions:Ge,renderSuggestion:we,renderSectionContainer:S,getSuggestionValue:Re,onSuggestionSelected:n,inputProps:T,suggestionContainerPositionClassName:K.se(),theme:Se,...m})}));var Ue=n(78061),ze=n(92736),je=n(70099),xe=n(12079),be=n(96393);const ve=e=>{let{variant:t,windowWidth:n,theme:r,onClick:i,...a}=e;return(0,s.jsx)(be.o,{id:(0,N.zG)(t,Ue.$e.match({Nav:(0,N.a9)(xe.e9.VisualSearchFormNav),HomepageHeader:(0,N.a9)(xe.e9.VisualSearchFormHomepageHeader)})),triggerClassName:B.P_,triggerChildren:(0,s.jsx)(G.Z4,{className:B.wE(r)}),triggerOnClick:i,...a})};const $e=y.Gpc(((e,t)=>{let{variant:n,children:r,className:i,onClear:a,shouldRenderClearButton:o,...l}=e;const c=(0,w.v)(P._v),d=(0,w.v)(P.Xy),h=(0,Ue.iP)(n);return(0,s.jsxs)(y.s8P,{ref:t,className:q()(B.kn(h),"fjL3_",(0,N.zG)(n,Ue.$e.match({Nav:(0,N.a9)("E0eB6"),HomepageHeader:(0,N.a9)(null)})),i),...l,children:[r,(0,N.zG)([x.RL(o)(je.Vo((()=>(0,s.jsx)(B.Cd,{theme:h,onClick:a})))),(0,N.zG)(d,x.hX((()=>(0,N.zG)(c,x.Gg(F.KD)))),x.UI((e=>(0,s.jsx)(ve,{variant:n,windowWidth:e,theme:h}))))],(0,ze.K4)("items"),(0,ze.Ke)((e=>(0,s.jsx)(y.tJQ,{className:B._o},e))))]})}));var Ne=n(46247),fe=n(38283),Ve=n(64379);const Oe=e=>{let{suggestionsQueryOption$:t}=e;return(0,N.zG)(K.cS(t),Ve.UI(oe.mk.RelatedQueries),b.UI(f.O4c(x.YP)))},Qe=e=>{let{suggestionsQueryOption$:t,formWidthOption$:n,recentSearches$:r,defaultSuggestionsOption$:i}=e;return(0,N.zG)(t,f.rPl((e=>e._tag)),fe.u5,fe.wt((e=>{switch(e.key){case"None":return(0,N.zG)((e=>{let{formWidthOption$:t,recentSearches$:n,defaultSuggestionsOption$:r}=e;return(0,N.zG)(t,j.hX((e=>e>=400)),j.wt((()=>r)),j.wt((e=>(0,N.zG)(n,f.UID((t=>(0,N.zG)([(0,N.zG)(t,Ne.nI,x.UI((0,N.ls)(Ne.UI(Q.re),oe.mk.RecentSearches))),(0,N.zG)(e.trendingSearches,x.tS((0,N.ls)(Ne.nI,x.UI((0,N.ls)(Ne.UI(Q.re),oe.mk.TrendingSearches))))),(0,N.zG)(e.trendingTopics,x.tS((0,N.ls)(Ne.nI,x.UI(oe.mk.TrendingTopics)))),(0,N.zG)(e.trendingCollections,x.tS((0,N.ls)(Ne.nI,x.UI((0,N.ls)(Ne.UI(Q.re),oe.mk.TrendingCollections)))))],C.oA$,Ne.nI)))))))})({formWidthOption$:n,recentSearches$:r,defaultSuggestionsOption$:i}),fe.u5);case"Some":return(0,N.zG)(Oe({suggestionsQueryOption$:e}),Ve.UI(C.of))}})),fe.UI(x.pF((()=>[]))))},Ae=e=>{let{modeTag$:t,suggestionsQueryOption$:n,formWidthOption$:r,recentSearches$:i,defaultSuggestionsOption$:s}=e;return(0,N.zG)(b.gz((e=>(0,N.zG)(Oe({suggestionsQueryOption$:e}),b.UI(f.UID(x.g_((()=>[]),C.of)))))(n),Qe({formWidthOption$:r,suggestionsQueryOption$:n,recentSearches$:i,defaultSuggestionsOption$:s})),b.UI((e=>{let[n,r]=e;return(0,N.zG)(t,f.zgw((e=>{switch(e){case"Visual":return n;case"Keyword":return r}})))})))},Pe=()=>"Find visuals sitewide",De=()=>"Search high-resolution images",Fe=()=>"Search Unsplash",He=()=>"Search images",Le=()=>"Filter by keyword",We=e=>i,Ke=()=>{const e=(0,h.bU)();return We(e)},Ye=((0,ce.G)(We),(0,N.ls)(We,(e=>Ue.AR.match({Visual:()=>()=>e.visualPlaceholder(),Keyword:()=>(0,N.ls)(x.HV((0,N.a9)(F.AS.mk.Desktop)),F.KD,$.EQ({True:()=>e.keywordFullLengthPlaceholder(),False:()=>e.keywordShortPlaceholder()}))})))),_e=e=>{let{theme:t,...n}=e;const r=Ke();return(0,s.jsx)(y.Jgb,{...n,title:r.keywordSearchButtonTitle(),className:B.P_,type:"submit",children:(0,s.jsx)(G.W1,{className:B.Y7(t)})})},Be={width:48,height:31},Je=e=>{let{searchId:t,onRemoveThumbnailButtonClick:n}=e;const r=y.Yen(D.b,[]),i=(0,w.v)((e=>r(e,t))),a=y.Yen((()=>(0,N.zG)(i,x.UI((e=>{let{thumbnail:t}=e;return{src:t.url}})))),[i]);return(0,s.jsxs)(y.tJQ,{className:"D9NiL",children:[(0,s.jsx)(_.Q,{containerStyle:{width:48},containerClassName:"hZiyU",className:"icGyT",aspectRatio:Be,responseOption:a,placeholderConfig:H.Dp}),(0,s.jsx)(M.L,{width:4}),(0,s.jsx)(y.Jgb,{type:"button",className:"qGrMU jpBZ0",onClick:n,children:(0,s.jsx)(G.b0,{width:16,height:16,fill:"white"})})]})},qe=e=>{let{className:t,recentSearches$:n,handleRemoveThumbnail:r,variant:i,testAttributes:G}=e;const $=(0,k.I)(),D=Ke(),F=(0,Ue.iP)(i),H=Ke(),_=(0,h.bU)(),B=(0,p.s0)(),J=y.sOu(null),q=y.Yen((()=>(0,N.zG)(i,Ue.$e.match({HomepageHeader:Ue.AR.mk.Keyword,Nav:N.yR}))),[i]),E=y.Yen((()=>(0,N.zG)(q,Ue.AR.match({Keyword:e=>{let{route:t}=e;return t},Visual:e=>{let{data:t}=e;return L.Vw.Union.mk.VisualSearch(t)}}))),[q]),X=y.I47((e=>(0,N.zG)(q,Ue.AR.match({Keyword:t=>{let{route:n}=t;return(0,N.zG)(n,L.Vw.mkSearchWithDefaultsAndCurrentFilters(e))},Visual:t=>{let{data:n}=t;return L.Vw.Union.mk.VisualSearch({id:n.id,keywordOption:x.G(e)})}}))),[q]),M=y.I47((()=>{(0,N.zG)(J.current?.input,O.f1,(e=>e.focus()))}),[]),{inputValue:Z,setInputValue:ee,decodedInputValue$:te}=Y.I.useInputValueState((0,N.zG)(E,L.Vw.Union.match({VisualSearch:e=>{let{keywordOption:t}=e;return(0,g.q)(t)},Search:e=>{let{query:t}=e;return t},[v._]:()=>""}))),ne=(()=>{const e=y.sOu();return y.d41((()=>{void 0!==e.current&&(e.current(),e.current=void 0)})),y.I47((t=>{e.current=t}),[])})(),re=y.I47((e=>{ee(""),ne((()=>{M()}))}),[ne,ee,M]),ie=(0,S.K)(),{suggestionsQueryOption$:se,inputProps:ae}=K.aM(),[oe,ce]=(0,T.I)(),de=(0,a.m)((()=>(0,N.zG)(ce,j.UI((e=>e.width)),f.xbd(x.fS)))),he=(0,w.v)(A.K),ue=(0,a.m)((e=>{const t=(0,N.zG)(e,f.UID((e=>{let[t]=e;return t})),f.xbd()),r=(0,N.zG)(e,f.UID((e=>{let[,t]=e;return t})),f.xbd());return Ae({modeTag$:t,suggestionsQueryOption$:se,formWidthOption$:de,recentSearches$:n,defaultSuggestionsOption$:r})([_,ie])}),[(0,Ue.gK)(q),he]),ge=(0,o.p)(ue,[]),[me,pe]=(0,l.W)((e=>(0,N.zG)(e,f.bwX((e=>e.preventDefault()))))),[Se,Te]=(0,l.W)(N.yR,(e=>e[1]));(0,c.m)(Te,(e=>{let{method:t}=e;"enter"===t&&(0,N.zG)(J.current?.input,O.f1,(e=>{e.blur()}))}));const ke=(0,a.m)((()=>(0,N.zG)(pe,f.Mmo(te,((e,t)=>t)),j.UI(Q.UI(z.BB))))),ye=le.match({RelatedQuery:(0,N.ls)(K.Go,X),RecentSearch:(0,N.RR)(L.Vw.mkSearchPhotosWithDefaultsAndCurrentFilters)(E),TrendingSearch:(0,N.RR)(L.Vw.mkSearchPhotosWithDefaultsAndCurrentFilters)(E),TrendingTopic:e=>L.Vw.Union.mk.Topic({slug:e}),TrendingCollection:e=>L.Vw.Union.mk.Collection(R.FE.mk.Public({id:e}))});(0,c.m)(Te,(e=>{let{suggestion:t}=e;const n=(0,N.zG)(t,le.match({RelatedQuery:K.Go,RecentSearch:N.yR,TrendingSearch:N.yR,TrendingTopic:U.Vv,TrendingCollection:N.yR})),r=le.match({RelatedQuery:(0,N.a9)(!0),RecentSearch:(0,N.a9)(!0),TrendingSearch:(0,N.a9)(!0),TrendingTopic:(0,N.a9)(!1),TrendingCollection:(0,N.a9)(!1)}),s=(0,N.zG)(t,le.match({RelatedQuery:(0,N.a9)(u.aU.mk.TrackSearchRelatedQueryClicked),RecentSearch:(0,N.a9)(u.aU.mk.TrackRecentSearchClicked),TrendingSearch:(0,N.a9)(u.aU.mk.TrackTrendingSearchClicked),TrendingTopic:(0,N.a9)(u.aU.mk.TrackSearchTrendingTopicClicked),TrendingCollection:(0,N.a9)(u.aU.mk.TrackSearchTrendingCollectionClicked)}));(0,Ue.p1)(q)&&(0,N.zG)([x.G(s([n,i])),x.RL(r(t))((()=>u.aU.mk.TrackSearchFormSubmission([n,i])))],C.oA$,(0,m.wV)($)),(0,N.zG)(t,ye,L.y$.fromRouteData,b.nn(_),B)})),(0,c.m)(ke,(e=>{var t;(0,Ue.p1)(q)&&(0,N.zG)(e,x.Ed((e=>{$(u.aU.mk.TrackSearchFormSubmission([e,i]))}))),(0,N.zG)((t=e,Ue.AR.match({Keyword:e=>{let{route:n}=e;return(0,N.zG)(t,x.UI((e=>(0,N.zG)(n,L.Vw.mkSearchWithDefaultsAndCurrentFilters(e)))))},Visual:e=>{let{data:n}=e;return x.G(L.Vw.Union.mk.VisualSearch({id:n.id,keywordOption:t}))}}))(q),x.Ed((0,N.ls)(L.y$.fromRouteData,b.nn(_),B)))}));const we=(0,d.R)(te),Ge=(0,w.v)(P._v);return(0,s.jsxs)($e,{className:t,variant:i,ref:oe,onSubmit:me,shouldRenderClearButton:x.pC(we),onClear:re,method:"get",role:"search","aria-label":H.formAccessibilityLabel(),action:(0,N.zG)(q,Ue.AR.match({Keyword:()=>`/${W.w1}`,Visual:e=>{let{data:t}=e;return L.y$.fromRouteData(L.Vw.Union.mk.VisualSearch({id:t.id,keywordOption:x.YP}))(_)}})),...(0,V.Nn)(G.FORM),children:[(0,N.zG)(q,Ue.AR.match({Keyword:()=>(0,s.jsx)(_e,{theme:F,...(0,V.Nn)(G.BUTTON)}),Visual:e=>{let{data:t}=e;return(0,s.jsx)(Je,{searchId:t.id,onRemoveThumbnailButtonClick:()=>{r(we),M()}})}})),(0,s.jsx)(Ce,{sections:ge,placeholder:Ye(_)(q)(Ge),title:D.keywordSearchButtonTitle(),name:(0,N.zG)(q,Ue.AR.match({Keyword:()=>I.me,Visual:()=>I.Db})),required:(0,Ue.p1)(q),theme:F,testAttribute:G.INPUT,inputValue:Z,onChange:K.Ub(ee),onSuggestionSelected:Se,autosuggestRef:J,...ae})]})};qe.displayName="SearchForm"},18571:(e,t,n)=>{n.d(t,{p:()=>p});var r=n(85893),i=n(7383),s=n(9892),a=n(73510),o=n(82353),l=n(57842),c=n(25510),d=n(28025),h=n(49947),u=n(46797),g=n(84592);const m=d.h,p=e=>{let{photoOption:t,className:n,width:d,disablePlaceholderAnimation:p}=e;const S=u.Yen((()=>({width:i.Ei(d)})),[d]),T=u.Yen((()=>(0,c.zG)(t,h.HR({disableAnimation:p}))),[p,t]),k=(0,o.N)((()=>(0,c.zG)(t,l.UI((e=>e.urls.raw)))),[t]),y=u.Yen((()=>(0,c.zG)(k,l.UI((e=>{const t=(0,a.ST)({aspectRatio:m,width:d});return(0,s.ru)({baseUrl:e,...t})})))),[k,d]);return(0,r.jsx)(g.Q,{containerClassName:n,placeholderConfig:T,aspectRatio:m,containerStyle:S,responseOption:y})}},77630:(e,t,n)=>{n.d(t,{q:()=>a});var r=n(57842),i=n(25510),s=(n(58966),n(78697));const a=e=>(0,i.zG)(e,r.pF((0,i.a9)(s.re(""))))},82353:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(57842),i=n(25510),s=n(46797),a=n(20930);const o=(e,t)=>((e,t,n)=>(0,i.zG)(s.Yen(e,t),(e=>(0,a.B)(e,n))))(e,t,r.fS)}}]);