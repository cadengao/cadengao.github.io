"use strict";(self.webpackChunk_craft_internal_sharepage=self.webpackChunk_craft_internal_sharepage||[]).push([[581],{55456:(e,n,i)=>{i.r(n),i.d(n,{default:()=>te});var t=i(27051),r=i(65043),o=i(30570),s=i(97950),l=i(83456),a=i(30082),d=i(99006),c=i(4703),u=i(93766),h=i(56818),p=i(5464),b=i(79957),g=i(26719),v=i(62836),x=i(60179),m=i(14057),f=i(43802),y=i(12363),j=i(37384),C=i(75041),k=i(90532),w=i(62182),P=i(70579);const $=768,_=1024,A=1280,F=1536,L=512,O=640,T=768,z=1024,E=1280,H=e=>e>=F?E:e>=A?z:e>=_?T:e>=$?O:L,I=(0,r.memo)((e=>{let{children:n}=e;const[i,t]=(0,r.useState)((()=>H(document.body.offsetWidth)));return(0,r.useEffect)((()=>{const e="resize",n=()=>{const e=H(document.body.offsetWidth);t((n=>n!==e?e:n))};(0,w.sg)(n,100,e);const i=new ResizeObserver((()=>(0,w.sg)(n,100,e)));return i.observe(document.body),()=>{i.disconnect(),(0,w.hq)(e)}}),[]),(0,P.jsx)(P.Fragment,{children:n(i)})}));var W=i(96945),J=i(42761);const M=(0,r.memo)((function(e){const{backgroundOverlay:n,bgColor:i,children:t,onClose:o}=e,s=(0,r.useRef)(null),l=(0,r.useRef)(null),[a,c]=(0,r.useState)(!1),{currentSlide:h,numSlides:p,status:b}=(0,u.po)(),g="loaded"===b,v=(0,u.o6)(),x=(0,r.useCallback)((()=>{null===o||void 0===o||o(),v({type:"presentation_closed"})}),[o,v]),m=(0,r.useCallback)((()=>{v({type:"prev_slide"})}),[v]),f=(0,r.useCallback)((()=>{v({type:"next_slide"})}),[v]),w=(0,r.useCallback)((e=>{var n,i;const t=null!==(n=null===(i=window)||void 0===i?void 0:i.innerHeight)&&void 0!==n?n:0,r=s.current,o=.5*t;if(!r)return;const l="up"===e?-o:o;r.scrollTo({top:r.scrollTop+l,behavior:"smooth"})}),[]),$=(0,r.useCallback)((()=>{w("up")}),[w]),_=(0,r.useCallback)((()=>{w("down")}),[w]);return(0,r.useEffect)((()=>{const e="FocusModeToolbar";return y.Ay.pushIntoFocus({id:e,keyDefs:[{matcher:(0,y.LJ)(y.wq),handler:x},{matcher:(0,y.LJ)(y.OJ),handler:m},{matcher:(0,y.LJ)(y.xd),handler:f},{matcher:(0,y.LJ)(y.FF),handler:_},{matcher:(0,y.LJ)(y.UC),handler:$}],allowPropagation:!0}),()=>{y.Ay.removeFromFocus(e)}}),[x,m,f,_,$]),(0,r.useEffect)((()=>()=>{null===o||void 0===o||o()}),[o]),(0,r.useEffect)((()=>{var e,n;const i=s.current,t=l.current;var r;i&&i.scrollTop>0&&(null===(r=s.current)||void 0===r||r.scrollTo({top:0}));if(!t)return;const o=null!==(e=null===(n=window)||void 0===n?void 0:n.innerHeight)&&void 0!==e?e:0,a=t.offsetHeight;o&&a&&c(o>a+120)}),[h]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(d.P.div,{initial:"hidden",variants:K,animate:g?"visible":"hidden",children:n}),(0,P.jsxs)(G,{ref:s,isCentered:a,children:[(0,P.jsx)(d.P.div,{initial:"hidden",variants:V,animate:g?"visible":"hidden",children:(0,P.jsx)(R,{ref:l,bgColor:i,children:(0,P.jsx)(I,{children:e=>(0,P.jsx)(S,{docWidth:e,children:t})})})}),(0,P.jsxs)(D,{isVisible:g,children:[(0,P.jsx)(k.$n,{type:"Plain",icon:j.J,disabled:h<=1,onClick:m}),(0,P.jsxs)(B,{children:[h," / ",p]}),(0,P.jsx)(k.$n,{type:"Plain",icon:C.c,disabled:h>=p,onClick:f}),(0,P.jsx)(q,{type:"FilledDanger",onClick:x,children:"关闭"})]})]})]})})),S=e=>{const{children:n,docWidth:i}=e,t=i<=O,o=t?1:i>=E?1.5:1.1,s=t?i:void 0,l=(0,u.o6)(),a=(0,r.useRef)(1);return(0,r.useEffect)((()=>{a.current!==o&&(a.current=o,l({type:"slide_size_changed",payload:{zoom:o}}))}),[l,o]),(0,P.jsx)(X,{style:{zoom:o,width:s},children:n})},D=(0,r.memo)((function(e){const{isVisible:n,children:i}=e;return(0,P.jsx)(U,{initial:"hidden",variants:Y,animate:n?"visible":"hidden",children:i})})),G=p.Ay.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: ${e=>{let{isCentered:n}=e;return n?"center":"flex-start"}};
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${f.is.LIGHTBOX};
  ${(0,J._)("none")}
  pointer-events: auto;
`,R=p.Ay.div`
  margin: 5vh 0 80px;
  border-radius: 32px;
  overflow: hidden;
  background-color: ${e=>{let{bgColor:n}=e;return n}};
  box-shadow: ${e=>{let{theme:n}=e;return n.shadows.md}};
  padding: 5vw 5.5vw;
`,X=p.Ay.div`
  width: ${W.rr.MAX_PAGE_COLUMN_WIDTH}px;
`,B=p.Ay.span`
  padding: 0 4px;
  font-size: 14px;
  min-width: 56px;
  text-align: center;
`,U=(0,p.Ay)(d.P.div)`
  position: fixed;
  bottom: 25px;
  left: 50%;
  z-index: ${f.is.LIGHTBOX};
  border-radius: 8px;
  background-color: ${e=>{let{theme:n}=e;return n.colors.base[900]}};
  box-shadow: ${e=>{let{theme:n}=e;return n.shadows.xs}};
  border: ${e=>{let{theme:n}=e;return`1px solid ${n.colors.neutral[200]}`}};
  padding: 4px;
  display: flex;
  align-items: center;
`,q=(0,p.Ay)(k.$n)`
  margin-left: 8px;
`,K={hidden:{opacity:0,visibility:"hidden",transition:{ease:"linear",duration:.4,easings:[.23,1,.32,1]}},visible:{opacity:1,visibility:"visible",transition:{ease:"linear",duration:.4,easing:[.23,1,.32,1]}}},V={hidden:{opacity:0,scale:1.03,transition:{ease:"linear",duration:.32,delay:.1,easing:[.23,1,.32,1]}},visible:{opacity:1,scale:1,transition:{ease:"linear",duration:.32,delay:.1,easing:[.23,1,.32,1]}}},Y={hidden:{translateY:65,translateX:"-50%",transition:{ease:"linear",duration:.2,delay:1.2,easing:[.23,1,.32,1]}},visible:{translateY:0,transition:{ease:"linear",duration:.2,delay:1,easing:[.23,1,.32,1]}}};var N=i(34496),Q=i(44176);const Z=(0,r.memo)((function(e){const{isDarkMode:n,backgroundComponent:i,inheritedPageStyleProps:o,children:s}=e,{isOpen:b,featureDisabled:f,status:y}=(0,u.po)(),j=(0,u.o6)(),{colors:C}=(0,p.DP)(),k=b&&"loading"===y;(0,r.useEffect)((()=>{b&&!f&&(0,c.p)().logEvent("presentationModeStarted",{Location:"Published Page"})}),[f,b]);const w=(0,r.useCallback)((()=>{j({type:"presentation_closed"})}),[j]),$=(0,r.useMemo)((()=>{const e=o.paperBackgroundColor;return e?"default"===e.type?C.base[900]:"solid"===e.type?n?e.color.dark:e.color.light:C.base[900]:C.base[900]}),[C.base,o.paperBackgroundColor,n]),_=N.O.getLukiTheme(o.styleId,o,"web"),A=Q.m.resolvePageThemeProps(o,_,n);return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(ee,{children:[(0,P.jsx)(g.Gt,{isOpen:k,placement:"bottom",transition:{durationMs:200},overlayProps:{bgColor:(0,v.AR)(v.bG.text(!1),n?.1:.05)},children:(0,P.jsx)(x.yK,{placement:"bottom",children:(0,P.jsxs)(m.s,{padding:16,alignItems:"center",verticalGap:4,$direction:"column",children:[(0,P.jsx)(ne,{children:(0,P.jsx)(h.f,{height:40})}),(0,P.jsx)(ie,{children:"Hang tight, we're building your presentation..."})]})})},"presentation-loading-spinner"),(0,P.jsx)(l.F,{features:a.l,children:b&&(0,P.jsx)(d.P.div,{children:(0,P.jsx)(r.Suspense,{fallback:null,children:(0,P.jsx)(W.kI.Provider,{value:(0,t.A)({pageColumnWidth:1400,availablePageWidth:1400,availableHoverWidth:1386},A),children:(0,P.jsx)(M,{backgroundOverlay:i,onClose:w,bgColor:$,children:s})})})})})]})})})),ee=e=>{let{children:n}=e;const{current:i}=(0,o.px)("presentation-mode","message");return(0,s.createPortal)(n,i)},ne=p.Ay.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:n}=e;return n.colors.neutral[800]}};
`,ie=p.Ay.div`
  ${b.K.UI.XL600};
  color: ${e=>{let{theme:n}=e;return n.colors.neutral[800]}};
  ${(0,J._)("none")}
`,te=Z}}]);
//# sourceMappingURL=presentation-mode.bba6d09a.chunk.js.map
