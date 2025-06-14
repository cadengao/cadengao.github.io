"use strict";
(self.webpackChunk_craft_internal_sharepage = self.webpackChunk_craft_internal_sharepage || []).push([[639], {
    85041: (e, n, t) => {
        t.r(n),
        t.d(n, {
            default: () => x
        });
        var o = t(65043)
          , i = t(5464)
          , l = t(70547)
          , r = t(27154)
          , s = t(17082)
          , d = t(76039)
          , c = t(12363)
          , a = t(70579);
        const u = (0,
        i.Ay)(d.H)`
  min-height: 44px;
  padding: 0 16px;
`
          , p = (0,
        i.Ay)(r.pH)`
  && {
    padding: 0;
    color: ${e => {
            let {theme: n} = e;
            return n.colors.neutral[400]
        }
        };

    &:not(:disabled):hover {
      color: ${e => {
            let {theme: n} = e;
            return n.colors.neutral[500]
        }
        };
    }
  }
`
          , h = i.Ay.div`
  width: 90vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
`
          , x = e => {
            let {uiDispatch: n, codeModel: t, block: i} = e;
            const d = (0,
            o.useCallback)(( () => {
                n({
                    type: "toggleViewerDialog",
                    dialog: {
                        type: "code",
                        blockId: i.id
                    },
                    isOpen: !1
                })
            }
            ), [i.id, n]);
            return (0,
            o.useEffect)(( () => (c.Ay.pushIntoFocus({
                id: "CODE_EDITOR_FOCUS_POPUP",
                allowPropagation: !1,
                keyDefs: [{
                    matcher: (0,
                    c.LJ)(c.wq),
                    handler: d
                }]
            }),
            () => {
                c.Ay.removeFromFocus("CODE_EDITOR_FOCUS_POPUP")
            }
            )), [d]),
            (0,
            a.jsxs)(h, {
                children: [(0,
                a.jsx)(u, {
                    justifyContent: "end",
                    children: (0,
                    a.jsx)(p, {
                        type: r.tx.Secondary,
                        icon: s.R,
                        onClick: d
                    })
                }), (0,
                a.jsx)(l.default, {
                    storedContent: i.textContent,
                    storedLanguage: t.language,
                    block: i,
                    uiDispatch: n,
                    inFocusMode: !0,
                    renderBlockActions: !1
                })]
            })
        }
    }
    ,
    70547: (e, n, t) => {
        t.r(n),
        t.d(n, {
            default: () => z
        });
        var o = t(24392)
          , i = t(62182)
          , l = t(65043)
          , r = t(5464)
          , s = t(35382)
          , d = t(32631)
          , c = t(47622)
          , a = t(6664)
          , u = t(82347)
          , p = t(14057)
          , h = t(61836)
          , x = t(32086)
          , g = t(640)
          , f = t(80579)
          , C = t(12748)
          , m = t(76846)
          , b = t(76129)
          , j = t(72326)
          , y = t(26619)
          , k = t(27180)
          , v = t(73227)
          , $ = t(53541)
          , D = t(90532)
          , _ = t(41464)
          , E = t(49666)
          , A = t(45685)
          , S = t(43269)
          , P = t(9737)
          , w = t(30570)
          , M = t(12676)
          , F = t(27308)
          , O = t(42761)
          , U = t(70579);
        const I = r.Ay.div`
  width: 100%;
  flex-shrink: 0;
  border-top: 1px solid ${e => {
            let {theme: n} = e;
            return n.colors.neutral[200]
        }
        };
  background: ${e => {
            let {theme: n} = e;
            return n.colors.neutral[25]
        }
        };
  ${(0,
        O._)("none")}
  position: relative;
`
          , R = r.Ay.div`
  display: flex;

  ${(0,
        a.U)(8)}
`
          , H = r.Ay.button`
  ${d.t};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  height: 28px;
  padding: 6px 8px;
  border-radius: 6px;
  transition: ${c.Ds.fast};
  transition-property: background, border;
  border: 1px solid transparent;

  ${(0,
        a.U)(8)}

  ${e => r.AH`
      ${e.theme.isTouchDevice ? "&:active" : "&:hover"} {
        background: ${e => {
            let {theme: n} = e;
            return n.colors.neutral[100]
        }
        };
        border: 1px solid ${e => {
            let {theme: n} = e;
            return n.colors.neutral[100]
        }
        };
      }
    `}
`
          , z = e => {
            let {storedContent: n, storedLanguage: t, block: r, uiDispatch: d, inFocusMode: c, renderBlockActions: a} = e;
            const {isTouchDevice: O} = l.useContext(y.BR)
              , {toggleReaction: z} = (0,
            l.useContext)(h.o)
              , B = (0,
            l.useRef)(null)
              , [L,T] = (0,
            l.useState)(!1)
              , {updateRef: V, ref: Q} = (0,
            w.Y3)(null)
              , q = r.id
              , [J,Y] = (0,
            l.useState)(n || "")
              , [Z,G] = (0,
            l.useState)(s.$U[0])
              , [N,K] = (0,
            l.useState)(s.QU[0])
              , {codeBlockRefs: W} = (0,
            l.useContext)(h.o)
              , X = (0,
            l.useRef)(null);
            (0,
            l.useEffect)(( () => {
                Y(n || "")
            }
            ), [n]),
            (0,
            l.useEffect)(( () => {
                if (t) {
                    const e = s.$U.find((e => e.storedLangCode === t));
                    e && G(e)
                }
            }
            ), [t]);
            const ee = (0,
            l.useMemo)(( () => {
                const e = r.pluginData;
                return e && "codeBlock" === e.pluginName && e.pluginConfigurationData ? e.pluginConfigurationData.themeId : null
            }
            ), [r.pluginData]);
            (0,
            l.useEffect)(( () => {
                const e = s.QU.find((e => e.id === ee));
                e && K(e)
            }
            ), [ee]);
            const ne = (0,
            l.useCallback)(( () => {
                d({
                    type: "toggleViewerDialog",
                    dialog: {
                        type: "code",
                        blockId: q
                    },
                    isOpen: !0
                })
            }
            ), [d, q])
              , te = () => {
                (0,
                f.eG)(J) && null != B.current && B.current.flashMessage("代码复制成功！", "info")
            }
            ;
            (0,
            l.useEffect)(( () => {
                if (W)
                    return W.set(q, X),
                    () => {
                        W && W.delete(q)
                    }
            }
            ), [q, W]);
            const oe = () => {
                d({
                    type: "openCommentSidebar",
                    blockId: q,
                    markerData: null,
                    commentId: null,
                    threadId: void 0
                })
            }
              , ie = k.Ay.isEnabled(v.LE);
            let le;
            return a && (le = (0,
            U.jsx)(F.r, {
                scope: "app",
                children: (0,
                U.jsx)(b.mg, {
                    top: 6,
                    right: 6,
                    children: (0,
                    U.jsx)(j.P, {
                        forceVisible: L,
                        children: (0,
                        U.jsxs)($.Q, {
                            children: [(0,
                            U.jsx)(M.m_, {
                                content: "复制代码",
                                asChild: !0,
                                disableHoverableContent: !0,
                                children: (0,
                                U.jsx)(D.$n, {
                                    size: "MediumSmall",
                                    type: "Plain",
                                    icon: A.Y,
                                    onClick: te
                                })
                            }), (0,
                            U.jsx)(M.m_, {
                                content: "全屏展示代码",
                                asChild: !0,
                                disableHoverableContent: !0,
                                children: (0,
                                U.jsx)(D.$n, {
                                    size: "MediumSmall",
                                    type: "Plain",
                                    icon: S.c,
                                    onClick: ne
                                })
                            }), ie && (0,
                            U.jsxs)(U.Fragment, {
                                children: [(0,
                                U.jsx)(M.m_, {
                                    content: "Add Reaction",
                                    asChild: !0,
                                    disableHoverableContent: !0,
                                    children: (0,
                                    U.jsx)(D.$n, {
                                        size: "MediumSmall",
                                        type: "Plain",
                                        icon: _.r,
                                        onClick: () => T(!0),
                                        ref: V
                                    })
                                }), (0,
                                U.jsx)(M.m_, {
                                    content: "Add Comment",
                                    asChild: !0,
                                    disableHoverableContent: !0,
                                    children: (0,
                                    U.jsx)(D.$n, {
                                        size: "MediumSmall",
                                        type: "Plain",
                                        icon: E.P,
                                        onClick: oe
                                    })
                                })]
                            })]
                        })
                    })
                })
            })),
            (0,
            U.jsxs)(o.Ay, {
                ref: X,
                value: J,
                inCodeEditing: !1,
                onCodeEditorBlur: i.fZ,
                onCodeEditorClick: () => {
                    !c && O && ne(),
                    W && W.forEach(( (e, n) => {
                        var t;
                        n !== q && (null === (t = e.current) || void 0 === t || t.deselect())
                    }
                    ))
                }
                ,
                inFocusMode: !1,
                isFocusModePreviewVisible: !1,
                langCode: Z.langCode,
                disableScroll: O && !c,
                editorTheme: N,
                children: [(0,
                U.jsx)(m.q, {}), le, (0,
                U.jsx)(P.H, {
                    isOpen: L,
                    onClose: () => T(!1),
                    anchor: Q,
                    placement: "bottom",
                    onEmojiSelected: e => {
                        T(!1),
                        z(q, e)
                    }
                }), (0,
                U.jsx)(C.s, {
                    ref: B,
                    position: ["top", "center"],
                    zIndex: 100,
                    style: {
                        top: "40px"
                    }
                }), c && (0,
                U.jsx)(I, {
                    children: (0,
                    U.jsxs)(p.s, {
                        $direction: "row",
                        justifyContent: "space-between",
                        children: [(0,
                        U.jsx)(u.a, {
                            padding: 6,
                            children: (0,
                            U.jsx)(R, {
                                children: (0,
                                U.jsx)(H, {
                                    onClick: te,
                                    children: (0,
                                    U.jsx)(o.JU, {
                                        children: "Copy"
                                    })
                                })
                            })
                        }), (0,
                        U.jsx)(u.a, {
                            padding: 8,
                            marginLeft: 8,
                            children: (0,
                            U.jsx)(R, {
                                children: !c && (0,
                                U.jsx)(H, {
                                    onClick: ne,
                                    children: (0,
                                    U.jsx)(x.v_, {
                                        icon: g.Z
                                    })
                                })
                            })
                        })]
                    })
                })]
            })
        }
    }
}]);
//# sourceMappingURL=codeeditor.8c92a4af.chunk.js.map
