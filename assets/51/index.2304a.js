window.__require = function t(e, n, o) {
    function i(s, c) {
        if (!n[s]) {
            if (!e[s]) {
                var a = s.split("/");
                if (a = a[a.length - 1], !e[a]) {
                    var u = "function" == typeof __require && __require;
                    if (!c && u) return u(a, !0);
                    if (r) return r(a, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = a
            }
            var l = n[s] = {
                exports: {}
            };
            e[s][0].call(l.exports, function(t) {
                return i(e[s][1][t] || t)
            }, l, l.exports, t, e, n, o)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof __require && __require, s = 0; s < o.length; s++) i(o[s]);
    return i
}({
    AnhMatMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a21703zSaZGc7VE83C7pQbf", "AnhMatMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            c = s.ccclass,
            a = (s.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), r([c], e)
            }(cc.Component));
        n.default = a, cc._RF.pop()
    }, {}],
    AssetMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "767dcaBDptMhqa5BpPQHMwr", "AssetMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("./SymbolMedusa"),
            c = cc._decorator,
            a = c.ccclass,
            u = c.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.atlasSymbol = null, e.atlasSpecial = null, e.listSkeData = [], e.itemSymbolMedusa = null, e.itemEffNearWin = null, e.itemEffNearWinNoSap = null, e.effectWinSymbol = null, e.listEfRemove = [], e.itemMutilX = null, e.itemMutilXGold = null, e.bkgTakeItem = null, e.itemAddScater = null, e.poolSymbol = new cc.NodePool(s.default), e
                }
                return i(e, t), e.prototype.getMutiX = function() {
                    var t = cc.instantiate(this.itemMutilX);
                    return t.active = !0, t
                }, e.prototype.getMutiXGold = function() {
                    var t = cc.instantiate(this.itemMutilXGold);
                    return t.active = !0, t
                }, e.prototype.getBkgTake = function() {
                    var t = cc.instantiate(this.bkgTakeItem);
                    return t.active = !0, t
                }, e.prototype.getSymbol = function() {
                    var t = null;
                    return (t = this.poolSymbol.size() > 0 ? this.poolSymbol.get() : cc.instantiate(this.itemSymbolMedusa)).active = !0, t
                }, e.prototype.putSymbol = function(t) {
                    this.poolSymbol.put(t)
                }, e.prototype.getNearWin = function() {
                    return cc.instantiate(this.itemEffNearWin)
                }, e.prototype.getNearWinNoSap = function() {
                    return cc.instantiate(this.itemEffNearWinNoSap)
                }, e.prototype.putNearWin = function(t) {
                    t.destroy()
                }, e.prototype.getEffectRemove = function(t) {
                    var e = this.listEfRemove[t - 1];
                    return cc.instantiate(e)
                }, e.prototype.getWinSymbol = function() {
                    var t = null;
                    return (t = cc.instantiate(this.effectWinSymbol)).active = !0, t
                }, e.prototype.putWinSymbol = function(t) {
                    t.destroy()
                }, e.prototype.getAddScater = function() {
                    var t = null;
                    return (t = cc.instantiate(this.itemAddScater)).active = !0, t
                }, e.prototype.putAddScater = function(t) {
                    t.destroy()
                }, e.prototype.getSfItemSymbol = function(t, e, n) {
                    return n ? this.getAtlas(t).getSpriteFrame(t + "_blur") : this.getAtlas(t).getSpriteFrame("" + t)
                }, e.prototype.getAtlas = function(t) {
                    return t < 12 ? this.atlasSymbol : this.atlasSpecial
                }, e.prototype.onDestroy = function() {
                    this.poolSymbol.clear()
                }, r([u(cc.SpriteAtlas)], e.prototype, "atlasSymbol", void 0), r([u(cc.SpriteAtlas)], e.prototype, "atlasSpecial", void 0), r([u([sp.SkeletonData])], e.prototype, "listSkeData", void 0), r([u(cc.Prefab)], e.prototype, "itemSymbolMedusa", void 0), r([u(cc.Prefab)], e.prototype, "itemEffNearWin", void 0), r([u(cc.Prefab)], e.prototype, "itemEffNearWinNoSap", void 0), r([u(cc.Prefab)], e.prototype, "effectWinSymbol", void 0), r([u([cc.Prefab])], e.prototype, "listEfRemove", void 0), r([u(cc.Prefab)], e.prototype, "itemMutilX", void 0), r([u(cc.Prefab)], e.prototype, "itemMutilXGold", void 0), r([u(cc.Node)], e.prototype, "bkgTakeItem", void 0), r([u(cc.Prefab)], e.prototype, "itemAddScater", void 0), r([a], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "./SymbolMedusa": "SymbolMedusa"
    }],
    AudioMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "20b213IdPdFhIL/zKGhg+qv", "AudioMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Scritps/Parent/AudioManager"),
            c = cc._decorator,
            a = c.ccclass,
            u = c.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.click = null, e.bgm_bigwin_coins = null, e.bgm_bigwin_end = null, e.bgm_bigwin_main = null, e.bgm_fs = null, e.bgm_mg = null, e.bgm_totalwin_end = null, e.bgm_totalwin_main = null, e.fastspinStart = null, e.fastspinStop = null, e.fsEnter = null, e.fsSpin = null, e.fsTrans = null, e.fsWonRemainingIncrease = null, e.fsWonTitle = null, e.heartbeat = null, e.heartbeatNoise = null, e.heartbeatSlowdrop = null, e.infobarLevelUp = null, e.list_item_click = null, e.menu_icon_press = null, e.multiActivate = null, e.multiFly = null, e.multiUp = null, e.prizeInfobarTotalwin = null, e.prizeInfobarTotalwinMedEnd = null, e.prizeInfobarTotalwinMedMain = null, e.prizeSmallwin = null, e.prizeSmallwinMultiplied = null, e.scatterWinHighlight = null, e.spinActiveLoop = null, e.spinBtn = null, e.spinStopLarge = null, e.spinStopNormal = null, e.spinStopQuick = null, e.symCollapse = null, e.symScatter = null, e.symScatterActive = null, e.symShrink = null, e.symWild = null, e.uiCollect = null, e
                }
                return i(e, t), e.prototype.onChangeMusic = function(e) {
                    t.prototype.onChangeMusic.call(this, e), this.isActiveSound = e
                }, e.prototype.playClick = function() {
                    this.playEffect(this.click)
                }, e.prototype.playMusic = function() {
                    this.isActiveMusic && this.backgroundMusicAudio && (cc.audioEngine.playMusic(this.backgroundMusicAudio, !0), cc.audioEngine.setMusicVolume(.5))
                }, e.prototype.playIndexTakeLine = function() {}, e.prototype.playSmalWin = function() {}, e.prototype.playBkgfs = function() {
                    this.stopMusic(), this.playEffect(this.bgm_fs, .9, !0)
                }, e.prototype.stopBkgFs = function() {
                    this.stopEffect(this.bgm_fs, !0), this.playMusic()
                }, e.prototype.playSymCollapse = function() {
                    this.playEffectNoStop(this.symCollapse)
                }, e.prototype.playStopAudio = function(t) {
                    t > 1 ? this.playEffectNoStop(this.spinStopLarge, 1) : this.playEffectNoStop(this.spinStopNormal, 1)
                }, r([u(cc.AudioClip)], e.prototype, "click", void 0), r([u(cc.AudioClip)], e.prototype, "bgm_bigwin_coins", void 0), r([u(cc.AudioClip)], e.prototype, "bgm_bigwin_end", void 0), r([u(cc.AudioClip)], e.prototype, "bgm_bigwin_main", void 0), r([u(cc.AudioClip)], e.prototype, "bgm_fs", void 0), r([u(cc.AudioClip)], e.prototype, "bgm_mg", void 0), r([u(cc.AudioClip)], e.prototype, "bgm_totalwin_end", void 0), r([u(cc.AudioClip)], e.prototype, "bgm_totalwin_main", void 0), r([u(cc.AudioClip)], e.prototype, "fastspinStart", void 0), r([u(cc.AudioClip)], e.prototype, "fastspinStop", void 0), r([u(cc.AudioClip)], e.prototype, "fsEnter", void 0), r([u(cc.AudioClip)], e.prototype, "fsSpin", void 0), r([u(cc.AudioClip)], e.prototype, "fsTrans", void 0), r([u(cc.AudioClip)], e.prototype, "fsWonRemainingIncrease", void 0), r([u(cc.AudioClip)], e.prototype, "fsWonTitle", void 0), r([u(cc.AudioClip)], e.prototype, "heartbeat", void 0), r([u(cc.AudioClip)], e.prototype, "heartbeatNoise", void 0), r([u(cc.AudioClip)], e.prototype, "heartbeatSlowdrop", void 0), r([u(cc.AudioClip)], e.prototype, "infobarLevelUp", void 0), r([u(cc.AudioClip)], e.prototype, "list_item_click", void 0), r([u(cc.AudioClip)], e.prototype, "menu_icon_press", void 0), r([u(cc.AudioClip)], e.prototype, "multiActivate", void 0), r([u(cc.AudioClip)], e.prototype, "multiFly", void 0), r([u(cc.AudioClip)], e.prototype, "multiUp", void 0), r([u(cc.AudioClip)], e.prototype, "prizeInfobarTotalwin", void 0), r([u(cc.AudioClip)], e.prototype, "prizeInfobarTotalwinMedEnd", void 0), r([u(cc.AudioClip)], e.prototype, "prizeInfobarTotalwinMedMain", void 0), r([u(cc.AudioClip)], e.prototype, "prizeSmallwin", void 0), r([u(cc.AudioClip)], e.prototype, "prizeSmallwinMultiplied", void 0), r([u(cc.AudioClip)], e.prototype, "scatterWinHighlight", void 0), r([u(cc.AudioClip)], e.prototype, "spinActiveLoop", void 0), r([u(cc.AudioClip)], e.prototype, "spinBtn", void 0), r([u(cc.AudioClip)], e.prototype, "spinStopLarge", void 0), r([u(cc.AudioClip)], e.prototype, "spinStopNormal", void 0), r([u(cc.AudioClip)], e.prototype, "spinStopQuick", void 0), r([u(cc.AudioClip)], e.prototype, "symCollapse", void 0), r([u(cc.AudioClip)], e.prototype, "symScatter", void 0), r([u(cc.AudioClip)], e.prototype, "symScatterActive", void 0), r([u(cc.AudioClip)], e.prototype, "symShrink", void 0), r([u(cc.AudioClip)], e.prototype, "symWild", void 0), r([u(cc.AudioClip)], e.prototype, "uiCollect", void 0), r([a], e)
            }(s.default);
        n.default = l, cc._RF.pop()
    }, {
        "../../../Scritps/Parent/AudioManager": void 0
    }],
    BaseItemMutilMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "31d5a6o1CtILaG/3ziQCB7x", "BaseItemMutilMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Scritps/Other/LbMonoSpace"),
            c = cc._decorator,
            a = c.ccclass,
            u = c.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mutilMng = null, e.mutil = 1, e.lbMutil = null, e
                }
                return i(e, t), r([u(s.default)], e.prototype, "lbMutil", void 0), r([a], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../../../Scritps/Other/LbMonoSpace": void 0
    }],
    BigWinMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5e351mpdElO7qLYQ8GI9ky+", "BigWinMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../../Scritps/DefineTs/REQUEST_CODE"),
            u = t("../../../../Scritps/Game/GAME_TYPE"),
            l = t("../../../../Scritps/Network/ConectManager"),
            p = t("../../../../Scritps/Other/LbMonoSpace"),
            d = t("../../../../Scritps/Util"),
            h = t("../../../../Scritps/Windown"),
            f = cc._decorator,
            y = f.ccclass,
            m = f.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb_Money = null, e.btnFast = null, e.listPromiseIgro = [], e.isClickBtnFast = !1, e
                }
                return i(e, t), e.prototype.init = function(t, e) {
                    var n = this;
                    return new Promise(function(o) {
                        return s(n, void 0, void 0, function() {
                            var n, i, r, s, p, f, y, m = this;
                            return c(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 7, , 8]), this.btnFast.interactable = !1, this.scheduleOnce(function() {
                                            m.btnFast.interactable = !0
                                        }, 1), this.lb_Money.node.active = !0, this.node.opacity = 255, this.lb_Money.resetLb(), 4, n = e < 30 ? 4 : e < 50 ? 8 : 12, this.lb_Money.time = n, this.lb_Money.setMoney(t), (i = this.node.getComponent(cc.Animation)).play("ChangeTypeWin"), i.playAdditive("Loop1"), i.playAdditive("BigWin"), h.Windown.Medusa.audio.playEffect(h.Windown.Medusa.audio.bgm_bigwin_main, 1), r = h.Windown.Medusa.getMakeDelay(4), this.listPromiseIgro.push(r), [4, r.prosime];
                                    case 1:
                                        return c.sent(), e >= 30 ? (h.Windown.Medusa.audio.playEffect(h.Windown.Medusa.audio.bgm_bigwin_end, .7), i.playAdditive("ChangeTypeWin"), i.playAdditive("MegaWin"), i.playAdditive("MegaWinLoop"), this.isClickBtnFast ? [3, 3] : (s = h.Windown.Medusa.getMakeDelay(4), this.listPromiseIgro.push(s), [4, s.prosime])) : [3, 3];
                                    case 2:
                                        c.sent(), c.label = 3;
                                    case 3:
                                        return e >= 50 ? (h.Windown.Medusa.audio.playEffect(h.Windown.Medusa.audio.bgm_bigwin_end, .5), i.playAdditive("ChangeTypeWin"), i.playAdditive("SuperWin"), this.isClickBtnFast ? [3, 5] : (s = h.Windown.Medusa.getMakeDelay(4), this.listPromiseIgro.push(s), [4, s.prosime])) : [3, 5];
                                    case 4:
                                        c.sent(), c.label = 5;
                                    case 5:
                                        return h.Windown.Medusa.audio.stopEffect(h.Windown.Medusa.audio.bgm_bigwin_main), h.Windown.Medusa.audio.playEffect(h.Windown.Medusa.audio.bgm_bigwin_end), (p = l.ConectManager.getIns().getSFSObj()).putInt("gt", u.default.Medusa), p.putInt("mt", h.Windown.Medusa.dataFinish.get("agWin")), p.putUtfString("nn", h.Windown.User.nickName), p.putUtfString("dt", "bw"), l.ConectManager.getIns().sendRequest(a.REQUEST_CODE.AddBigWin, p), i.playAdditive("ChangeTypeWin"), this.lb_Money.setMoneyNoTime(t), this.lb_Money.node.parent.runAction(cc.sequence(cc.scaleTo(.2, 1.3), cc.scaleTo(.2, 1))), f = h.Windown.Medusa.getMakeDelay(4), this.listPromiseIgro.push(f), this.btnFast.interactable = !0, [4, f.prosime];
                                    case 6:
                                        return c.sent(), this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                                            o(null), m.node.destroy()
                                        }))), [3, 8];
                                    case 7:
                                        return y = c.sent(), o(null), this.node.destroy(), d.Util.ThrowErrProsime(y), [3, 8];
                                    case 8:
                                        return [2]
                                }
                            })
                        })
                    })
                }, e.prototype.onClickBtnShowFast = function() {
                    for (this.btnFast.interactable = !1, this.isClickBtnFast = !0; this.listPromiseIgro.length > 0;) this.listPromiseIgro.shift().cancle(!0)
                }, r([m(p.default)], e.prototype, "lb_Money", void 0), r([m(cc.Button)], e.prototype, "btnFast", void 0), r([y], e)
            }(cc.Component);
        n.default = v, cc._RF.pop()
    }, {
        "../../../../Scritps/DefineTs/REQUEST_CODE": void 0,
        "../../../../Scritps/Game/GAME_TYPE": void 0,
        "../../../../Scritps/Network/ConectManager": void 0,
        "../../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../../Scritps/Util": void 0,
        "../../../../Scritps/Windown": void 0
    }],
    CachChoiMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4e165ahItdNbKx2KjUiEyAx", "CachChoiMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Scritps/Windown"),
            c = cc._decorator,
            a = c.ccclass,
            u = (c.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.onClickClose = function() {
                    var t = this;
                    s.Windown.Medusa.audio.playClick(), this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                        t.node.destroy()
                    })))
                }, r([a], e)
            }(cc.Component));
        n.default = u, cc._RF.pop()
    }, {
        "../../../Scritps/Windown": void 0
    }],
    DetailHistoryMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "01da1rudRZF9rtWTKbpcC+8", "DetailHistoryMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Scritps/Windown"),
            c = t("./ItemResultDetailMedusa"),
            a = cc._decorator,
            u = a.ccclass,
            l = a.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.parentItem = null, e.itemTemplate = null, e.lbTitle = null, e.lbTime = null, e.lbBet = null, e.lbWin = null, e.lbMNUser = null, e.lbCuocCoSo = null, e.isFreeSpin = !1, e
                }
                return i(e, t), e.prototype.show = function(t) {
                    var e = this;
                    this.node.active = !0, this.node.x = 721.812, this.node.stopAllActions(), this.node.opacity = 0, this.node.runAction(cc.spawn(cc.moveTo(.3, 0, 0), cc.fadeIn(.3).easing(cc.easeElasticIn(3))));
                    var n = t.get("date"),
                        o = t.get("infolog"),
                        i = JSON.parse(o);
                    cc.log(o), this.isFreeSpin = i.numFreeSpin > 0, 0 == i.agBet ? this.lbTitle.string = "Free spin" : this.lbTitle.string = "Spin normal", this.lbTime.string = s.Windown.formatDate(new Date(n), "dd/MM HH:mm:ss"), this.lbBet.string = s.Windown.formatNumber(20 * i.agBet), this.lbWin.string = s.Windown.formatNumber(i.agWin), this.lbMNUser.string = s.Windown.formatNumber(i.agUser), this.lbCuocCoSo.string = s.Windown.formatNumber(i.agBet);
                    for (var r = i.bonusSpin; this.parentItem.childrenCount > 0;) {
                        var a = this.parentItem.children[0];
                        a.removeFromParent(), a.destroy()
                    }
                    i.views.forEach(function(t, n) {
                        var o = e.parentItem.children[n];
                        null == o && ((o = cc.instantiate(e.itemTemplate)).parent = e.parentItem, o.active = !0), o.active = !0;
                        var s = o.getComponent(c.default);
                        i.listItemWin[n] && (i.listItemWin[n].lsIdItem = JSON.parse(i.listItemWin[n].lsIdItem), i.listItemWin[n].lsstack = JSON.parse(i.listItemWin[n].lsstack), i.listItemWin[n].lsAgWin = JSON.parse(i.listItemWin[n].lsAgWin)), s.init(t, i.listItemWin[n], 0 == r[n] ? 1 : r[n], i.agBet)
                    });
                    for (var u = i.views.length; u < this.parentItem.childrenCount; u++) this.parentItem.children[u].active = !1
                }, e.prototype.onClickClose = function() {
                    var t = this;
                    this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.spawn(cc.moveTo(.3, 721.812, 0), cc.fadeOut(.3).easing(cc.easeElasticOut(3))), cc.callFunc(function() {
                        t.node.active = !1
                    })))
                }, r([l(cc.Node)], e.prototype, "parentItem", void 0), r([l(cc.Node)], e.prototype, "itemTemplate", void 0), r([l(cc.Label)], e.prototype, "lbTitle", void 0), r([l(cc.Label)], e.prototype, "lbTime", void 0), r([l(cc.Label)], e.prototype, "lbBet", void 0), r([l(cc.Label)], e.prototype, "lbWin", void 0), r([l(cc.Label)], e.prototype, "lbMNUser", void 0), r([l(cc.Label)], e.prototype, "lbCuocCoSo", void 0), r([u], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../../../Scritps/Windown": void 0,
        "./ItemResultDetailMedusa": "ItemResultDetailMedusa"
    }],
    EffectMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "52a95fE9QVHzIxL0qhOuTwQ", "EffectMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../Scritps/Game/GAME_TYPE"),
            u = t("../../../Scritps/Util"),
            l = t("../../../Scritps/Windown"),
            p = t("./Effect/BigWinMedusa"),
            d = t("./Effect/EndFreeSpinMedusa"),
            h = t("./Effect/StartFreeSpinMedusa"),
            f = cc._decorator,
            y = f.ccclass,
            m = f.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.listNodeBoxMoney = [], e.funDelayOff = null, e.mapColor = new Map, e
                }
                return i(e, t), e.prototype.onEnable = function() {}, e.prototype.onDisable = function() {
                    this.unschedule(this.funDelayOff)
                }, e.prototype.initPosMask = function(t) {
                    cc.find("mask", this.node).y = t
                }, e.prototype.showBigWin = function(t, e) {
                    var n = this;
                    return new Promise(function(o) {
                        return s(n, void 0, void 0, function() {
                            var n, i, r;
                            return c(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, l.Windown.loadRes(a.default.Medusa.toString(), "Frefabs/BigWin", cc.Prefab)];
                                    case 1:
                                        return n = s.sent(), (i = cc.instantiate(n)).parent = this.node, i.zIndex = 1, r = i.getComponent(p.default), [4, l.Windown.Medusa.getPromise(r.init(t, e))];
                                    case 2:
                                        return s.sent(), o(null), [2]
                                }
                            })
                        })
                    })
                }, e.prototype.swidthFS = function(t, e) {
                    t ? (this.listNodeBoxMoney.forEach(function(t) {
                        t.y = -613
                    }), l.Windown.Medusa.switchBkgGame(!0, e)) : (l.Windown.Medusa.switchBkgGame(!1), this.listNodeBoxMoney.forEach(function(t) {
                        t.y = -387.117
                    }))
                }, e.prototype.showTakeFreeSpin = function(t) {
                    var e = this;
                    return new Promise(function(n) {
                        return s(e, void 0, void 0, function() {
                            var e, o, i, r;
                            return c(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return s.trys.push([0, 4, , 5]), l.Windown.Medusa.stateSpin.freeSpinCache = t, l.Windown.Medusa.stateSpin.activeAllSymbol(), l.Windown.Medusa.listColum.forEach(function(t) {
                                            t.getListSymbolResult().forEach(function(t) {
                                                t.effectNearWinScater(!1)
                                            })
                                        }), l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.scatterWinHighlight), [4, l.Windown.Medusa.getMakeDelay(1.5).prosime];
                                    case 1:
                                        return s.sent(), [4, l.Windown.loadRes(a.default.Medusa.toString(), "Frefabs/ShowFreeSpin", cc.Prefab)];
                                    case 2:
                                        return e = s.sent(), (o = cc.instantiate(e)).parent = this.node, o.zIndex = 1, i = o.getComponent(h.default), [4, l.Windown.Medusa.getPromise(i.show(t, this.listNodeBoxMoney))];
                                    case 3:
                                        return s.sent(), l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.fsEnter), n(null), [3, 5];
                                    case 4:
                                        return r = s.sent(), u.Util.ThrowErrProsime(r), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    })
                }, e.prototype.showEndFree = function(t) {
                    var e = this;
                    return new Promise(function(n) {
                        return s(e, void 0, void 0, function() {
                            var e, o, i, r;
                            return c(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return s.trys.push([0, 3, , 4]), t < 1 ? (l.Windown.Medusa.audio.stopBkgFs(), this.swidthFS(!1), n(null), [2]) : [4, l.Windown.loadRes(a.default.Medusa.toString(), "Frefabs/EndFreeSpin", cc.Prefab)];
                                    case 1:
                                        return e = s.sent(), this.swidthFS(!1), (o = cc.instantiate(e)).parent = this.node, o.zIndex = 999, i = o.getComponent(d.default), [4, l.Windown.Medusa.getPromise(i.show(t))];
                                    case 2:
                                        return s.sent(), n(null), [3, 4];
                                    case 3:
                                        return r = s.sent(), u.Util.ThrowErrProsime(r), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    })
                }, e.prototype.pointsOnCircle = function(t) {
                    var e = t.radius,
                        n = t.angle,
                        o = t.cx,
                        i = t.cy;
                    return n *= Math.PI / 180, [o + e * Math.sin(n), i + e * Math.cos(n)]
                }, r([m([cc.Node])], e.prototype, "listNodeBoxMoney", void 0), r([y], e)
            }(cc.Component);
        n.default = v, cc._RF.pop()
    }, {
        "../../../Scritps/Game/GAME_TYPE": void 0,
        "../../../Scritps/Util": void 0,
        "../../../Scritps/Windown": void 0,
        "./Effect/BigWinMedusa": "BigWinMedusa",
        "./Effect/EndFreeSpinMedusa": "EndFreeSpinMedusa",
        "./Effect/StartFreeSpinMedusa": "StartFreeSpinMedusa"
    }],
    EffectSymbolMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f2f23W1aQhMKZE6d3P4Ilvw", "EffectSymbolMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../../Scritps/Windown"),
            c = cc._decorator,
            a = c.ccclass,
            u = (c.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._nodeBkg = null, e
                }
                return i(e, t), e.prototype.effTakeItem = function(t, e) {
                    this.node.getComponent(cc.Animation).play("TakeItem");
                    var n = s.Windown.Medusa.asset.getBkgTake();
                    n.scale = e, this._nodeBkg = n, n.parent = this.node.parent, n.setPosition(this.node.getPosition()), n.zIndex = cc.macro.MIN_ZINDEX;
                    var o = this.getComponentInChildren(sp.Skeleton);
                    o.node.active = !0, o.skeletonData = s.Windown.Medusa.asset.listSkeData[t - 1], o.setAnimation(0, "win", !1), 10 != t && o.node.runAction(cc.sequence(cc.scaleTo(.2, .38), cc.scaleTo(.2, .33))), 12 == t && (cc.find("frame", this.node).active = !1, o.addAnimation(0, "idle", !0))
                }, e.prototype.effRemoveItem = function(t) {
                    var e = this,
                        n = this.getComponent(cc.Animation);
                    n.once(cc.Animation.EventType.FINISHED, function() {
                        e.node.destroy()
                    }), n.play("RemoveItem" + t)
                }, e.prototype.onDestroy = function() {
                    this._nodeBkg && this._nodeBkg.destroy()
                }, r([a], e)
            }(cc.Component));
        n.default = u, cc._RF.pop()
    }, {
        "../../../../Scritps/Windown": void 0
    }],
    EndFreeSpinMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "be464xl+utIR6AmS10JLv4r", "EndFreeSpinMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../../Scritps/DefineTs/REQUEST_CODE"),
            u = t("../../../../Scritps/Game/GAME_TYPE"),
            l = t("../../../../Scritps/Network/ConectManager"),
            p = t("../../../../Scritps/Other/LbMonoSpace"),
            d = t("../../../../Scritps/Util"),
            h = t("../../../../Scritps/Windown"),
            f = cc._decorator,
            y = f.ccclass,
            m = f.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.btnThuThap = null, e
                }
                return i(e, t), e.prototype.show = function(t) {
                    var e = this;
                    return new Promise(function(n) {
                        return s(e, void 0, void 0, function() {
                            var e, o, i, r, s, p = this;
                            return c(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 3, , 4]), h.Windown.Medusa.audio.playEffect(h.Windown.Medusa.audio.bgm_totalwin_main), this.getComponent(cc.Animation).play("EndFreeSpin"), this.getComponent(cc.Animation).playAdditive("EndFreeSpinLoop"), e = [], o = h.Windown.Medusa.getMakeDelay(3.8), e.push(o), this.btnThuThap.active = !1, this.label.resetLb(), this.label.time = 3.8, this.label.setMoney(t), i = function() {
                                            var e = l.ConectManager.getIns().getSFSObj();
                                            e.putInt("gt", u.default.Medusa), e.putInt("mt", t), e.putUtfString("nn", h.Windown.User.nickName), e.putUtfString("dt", "fs"), l.ConectManager.getIns().sendRequest(a.REQUEST_CODE.AddBigWin, e), p.getComponent(cc.Animation).stop(), p.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                                                p.node.destroy(), n(null), h.Windown.Medusa.audio.stopBkgFs()
                                            })))
                                        }, this.scheduleOnce(function() {
                                            p.node.once(cc.Node.EventType.TOUCH_END, function() {
                                                for (; e.length > 0;) e.shift().cancle(!0)
                                            })
                                        }, .5), [4, o.prosime];
                                    case 1:
                                        return c.sent(), e.length = 0, this.node.targetOff(this), r = h.Windown.Medusa.getMakeDelay(6), e.push(r), this.label.setMoneyNoTime(t), this.btnThuThap.active = !0, this.btnThuThap.opacity = 0, this.btnThuThap.runAction(cc.fadeIn(.5)), this.btnThuThap.once("click", function() {
                                            for (; e.length > 0;) e.shift().cancle(!0)
                                        }), h.Windown.Medusa.audio.stopEffect(h.Windown.Medusa.audio.bgm_totalwin_main), h.Windown.Medusa.audio.playEffect(h.Windown.Medusa.audio.bgm_totalwin_end), [4, r.prosime];
                                    case 2:
                                        return c.sent(), e.length = 0, i(), [3, 4];
                                    case 3:
                                        return s = c.sent(), d.Util.ThrowErrProsime(s), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    })
                }, r([m(p.default)], e.prototype, "label", void 0), r([m(cc.Node)], e.prototype, "btnThuThap", void 0), r([y], e)
            }(cc.Component);
        n.default = v, cc._RF.pop()
    }, {
        "../../../../Scritps/DefineTs/REQUEST_CODE": void 0,
        "../../../../Scritps/Game/GAME_TYPE": void 0,
        "../../../../Scritps/Network/ConectManager": void 0,
        "../../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../../Scritps/Util": void 0,
        "../../../../Scritps/Windown": void 0
    }],
    InfoBarControllerMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "335adxcFEJB3ZbEHC9kZtBr", "InfoBarControllerMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../Scritps/Other/LbMonoSpace"),
            u = t("../../../Scritps/Util"),
            l = t("../../../Scritps/Windown"),
            p = cc._decorator,
            d = p.ccclass,
            h = p.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbMoney = null, e.spTotalWin = null, e.spWin = null, e.spInfoBar = null, e.listInfoBar = [], e.spMaskInfoBar = [], e.parentOneMore = null, e.parentContent = null, e.parentMoney = null, e.anhSang = null, e.smallWin = null, e.isShowOneMoreScater = !1, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    this.showRdContent(), this.parentContent.x = 360, this.parentContent.runAction(cc.repeatForever(cc.sequence(cc.moveTo(65, -5535.768, 18), cc.callFunc(function() {
                        t.parentContent.x = 360
                    }))))
                }, e.prototype.showRdContent = function() {
                    this.parentContent.active = !0, this.parentOneMore.active = !1, this.parentMoney.active = !1
                }, e.prototype.showOneMoreScater = function() {
                    this.isShowOneMoreScater || (this.isShowOneMoreScater = !0, this.parentContent.active = !1, this.parentOneMore.active = !0, this.parentMoney.active = !1, this.anhSang.stopAllActions(), this.anhSang.opacity = 50, this.anhSang.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.3).easing(cc.easeSineInOut()), cc.fadeTo(.3, 50).easing(cc.easeSineInOut())))), this.parentOneMore.stopAllActions(), this.parentOneMore.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, 1.15).easing(cc.easeSineInOut()), cc.scaleTo(.3, 1).easing(cc.easeSineInOut())))))
                }, e.prototype.effectDropOneMorScater = function() {
                    this.anhSang.stopAllActions(), this.anhSang.opacity = 50, this.parentOneMore.stopAllActions(), this.parentOneMore.runAction(cc.sequence(cc.scaleTo(.1, 1.18).easing(cc.easeSineOut()), cc.scaleTo(.1, 1).easing(cc.easeSineIn()))), this.anhSang.runAction(cc.sequence(cc.fadeIn(.1).easing(cc.easeSineOut()), cc.fadeTo(.1, 50).easing(cc.easeSineIn())))
                }, e.prototype.offOneMoreScater = function() {
                    this.parentOneMore.active = !1
                }, e.prototype.offLbMoney = function() {
                    this.parentMoney.active = !1
                }, e.prototype.offAnhSang = function() {
                    this.anhSang.stopAllActions(), this.anhSang.opacity = 50
                }, e.prototype.showTakeMoney = function(t) {
                    return s(this, void 0, void 0, function() {
                        var e = this;
                        return c(this, function() {
                            return [2, new Promise(function(n) {
                                return s(e, void 0, void 0, function() {
                                    var e;
                                    return c(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return o.trys.push([0, 5, , 6]), l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.prizeSmallwin), this.node.getComponent(cc.Animation).play("TakeMoney"), this.node.getComponent(cc.Animation).playAdditive("TakeMoneyLoop"), this.offAnhSang(), cc.find("ParrentMOney/info_win", this.node).active = !1, this.parentContent.active = !1, this.parentOneMore.active = !1, this.parentMoney.active = !0, this.lbMoney.setMoneyNoTime(t), l.Windown.Medusa.stateSpin.isMaxSpeed ? [3, 2] : [4, l.Windown.Medusa.getMakeDelay(.8).prosime];
                                            case 1:
                                                return o.sent(), [3, 4];
                                            case 2:
                                                return [4, l.Windown.Medusa.getMakeDelay(.2).prosime];
                                            case 3:
                                                o.sent(), o.label = 4;
                                            case 4:
                                                return n(null), [3, 6];
                                            case 5:
                                                return e = o.sent(), u.Util.ThrowErrProsime(e), [3, 6];
                                            case 6:
                                                return [2]
                                        }
                                    })
                                })
                            })]
                        })
                    })
                }, e.prototype.runActiontakeMutil = function() {
                    return s(this, void 0, void 0, function() {
                        var t = this;
                        return c(this, function() {
                            return [2, new Promise(function(e) {
                                return s(t, void 0, void 0, function() {
                                    var t;
                                    return c(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 3, , 4]), l.Windown.Medusa.muitlCtr.currentItemMutil.mutil > 1 ? [4, l.Windown.Medusa.getPromise(l.Windown.Medusa.muitlCtr.animMutil())] : [3, 2];
                                            case 1:
                                                n.sent(), l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.prizeSmallwinMultiplied), this.node.getComponent(cc.Animation).play("TakeMoney"), n.label = 2;
                                            case 2:
                                                return e(null), [3, 4];
                                            case 3:
                                                return t = n.sent(), u.Util.ThrowErrProsime(t), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    })
                                })
                            })]
                        })
                    })
                }, e.prototype.showTakeMoneyTurn = function(t) {
                    return s(this, void 0, void 0, function() {
                        var e = this;
                        return c(this, function() {
                            return [2, new Promise(function(n) {
                                return s(e, void 0, void 0, function() {
                                    var e;
                                    return c(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return o.trys.push([0, 2, , 3]), [4, l.Windown.Medusa.getPromise(this.runActiontakeMutil())];
                                            case 1:
                                                return o.sent(), n(null), cc.find("ParrentMOney/info_win", this.node).active = !0, cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spWin, this.parentContent.active = !1, this.parentOneMore.active = !1, this.parentMoney.active = !0, this.node.stopAllActions(), this.lbMoney.setMoneyNoTime(t), this.node.runAction(cc.sequence(cc.scaleTo(.15, 1.15), cc.scaleTo(.15, 1))), l.Windown.Medusa.stateSpin.freeSpinLeft, [3, 3];
                                            case 2:
                                                return e = o.sent(), u.Util.ThrowErrProsime(e), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })]
                        })
                    })
                }, e.prototype.reset = function() {
                    this.spInfoBar.spriteFrame = this.listInfoBar[0], this.spMaskInfoBar.forEach(function(t) {
                        return t.node.active = !0
                    }), this.smallWin.active = !1, this.offAnhSang()
                }, e.prototype.showTotalMoney = function(t) {
                    var e = this;
                    return new Promise(function(n) {
                        return s(e, void 0, void 0, function() {
                            var e, o, i, r;
                            return c(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        this.offAnhSang(), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 10, , 11]), e = l.Windown.Medusa.stateSpin.isMaxSpeed ? 3 : 1, 0 == t ? (n(null), [2]) : (this.lbMoney.resetLb(), o = l.Windown.Medusa.curRoomBet * l.Windown.Medusa.totalLineBet, (i = t / o) < 7 ? (this.parentContent.active = !1, this.parentOneMore.active = !1, this.parentMoney.active = !0, this.parentMoney.scale = 0, cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin, this.node.getComponent(cc.Animation).play("TakeMoney"), this.node.getComponent(cc.Animation).playAdditive("TakeMoneyLoop"), this.parentMoney.runAction(cc.scaleTo(.5, 1).easing(cc.easeElasticOut(.3))), this.lbMoney.setMoneyNoTime(t), l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.prizeInfobarTotalwin), [4, l.Windown.Medusa.getMakeDelay(1 / e).prosime]) : [3, 3]);
                                    case 2:
                                        return s.sent(), [3, 9];
                                    case 3:
                                        return i <= 15 ? (l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.prizeInfobarTotalwinMedMain), l.Windown.Medusa.audio.playSmalWin(), this.parentContent.active = !1, this.parentOneMore.active = !1, this.parentMoney.active = !0, cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin, this.lbMoney.time = 2, this.lbMoney.setMoney(t), this.smallWin.active = !0, this.node.getComponent(cc.Animation).play("ShowTotalMoneyBig"), this.node.getComponent(cc.Animation).playAdditive("ShowTakeMoneyBigLoop"), [4, l.Windown.Medusa.getMakeDelay(2).prosime]) : [3, 6];
                                    case 4:
                                        return s.sent(), l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.prizeInfobarTotalwinMedEnd), this.parentMoney.runAction(cc.sequence(cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1))), this.node.getComponent(cc.Animation).play("ShowTotalMoneyBig"), this.node.getComponent(cc.Animation).playAdditive("ShowTakeMoneyBigLoop"), [4, l.Windown.Medusa.getMakeDelay(1 / e).prosime];
                                    case 5:
                                        return s.sent(), [3, 9];
                                    case 6:
                                        return [4, l.Windown.Medusa.getPromise(l.Windown.Medusa.effect.showBigWin(t, i))];
                                    case 7:
                                        return s.sent(), this.parentMoney.scale = 0, l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.prizeInfobarTotalwin), this.parentContent.active = !1, this.parentOneMore.active = !1, this.parentMoney.active = !0, cc.find("ParrentMOney/info_win", this.node).getComponent(cc.Sprite).spriteFrame = this.spTotalWin, this.parentMoney.runAction(cc.scaleTo(.5, 1).easing(cc.easeElasticOut(.3))), this.smallWin.active = !0, this.node.getComponent(cc.Animation).play("ShowTotalMoneyBig"), this.node.getComponent(cc.Animation).playAdditive("ShowTakeMoneyBigLoop"), this.lbMoney.setMoneyNoTime(t), [4, l.Windown.Medusa.getMakeDelay(1 / e).prosime];
                                    case 8:
                                        s.sent(), s.label = 9;
                                    case 9:
                                        return n(null), [3, 11];
                                    case 10:
                                        return r = s.sent(), u.Util.ThrowErrProsime(r), [3, 11];
                                    case 11:
                                        return [2]
                                }
                            })
                        })
                    })
                }, r([h(a.default)], e.prototype, "lbMoney", void 0), r([h(cc.SpriteFrame)], e.prototype, "spTotalWin", void 0), r([h(cc.SpriteFrame)], e.prototype, "spWin", void 0), r([h(cc.Sprite)], e.prototype, "spInfoBar", void 0), r([h([cc.SpriteFrame])], e.prototype, "listInfoBar", void 0), r([h([cc.Sprite])], e.prototype, "spMaskInfoBar", void 0), r([h(cc.Node)], e.prototype, "parentOneMore", void 0), r([h(cc.Node)], e.prototype, "parentContent", void 0), r([h(cc.Node)], e.prototype, "parentMoney", void 0), r([h(cc.Node)], e.prototype, "anhSang", void 0), r([h(cc.Node)], e.prototype, "smallWin", void 0), r([d], e)
            }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../Scritps/Util": void 0,
        "../../../Scritps/Windown": void 0
    }],
    ItemAddScaterMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3797abiyLlNo57TRwfXje//", "ItemAddScaterMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            c = s.ccclass,
            a = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.isShow = !1, e.spine = null, e
                }
                return i(e, t), e.prototype.start = function() {}, e.prototype.show = function() {
                    var t = this;
                    this.spine.setAnimation(0, "win", !1), this.spine.addAnimation(0, "win_idle", !0), this.scheduleOnce(function() {
                        t.getComponent(cc.Animation).play("NearWinScaterAdd")
                    }, .2)
                }, e.prototype.idle = function() {
                    this.spine.setAnimation(0, "idle", !0)
                }, e.prototype.effectNearWinNoSap = function() {
                    var t = this;
                    this.spine.setAnimation(0, "win", !1), this.spine.addAnimation(0, "win_idle", !0), this.scheduleOnce(function() {
                        t.getComponent(cc.Animation).play("NearWinScaterAdd")
                    }, .2)
                }, r([a(sp.Skeleton)], e.prototype, "spine", void 0), r([c], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {}],
    ItemDetalMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bc7b5Og9yhOeLhNVk314WA3", "ItemDetalMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            c = s.ccclass,
            a = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.text = "hello", e
                }
                return i(e, t), e.prototype.start = function() {}, r([a(cc.Label)], e.prototype, "label", void 0), r([a], e.prototype, "text", void 0), r([c], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {}],
    ItemLichSuMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "37838f55zVEtYo1UUZ4lLnH", "ItemLichSuMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Scritps/DefineTs/REQUEST_CODE"),
            c = t("../../../Scritps/Network/ConectManager"),
            a = t("../../../Scritps/Windown"),
            u = cc._decorator,
            l = u.ccclass,
            p = u.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbTime = null, e.lbBet = null, e.lbWin = null, e.data = null, e
                }
                return i(e, t), e.prototype.initItem = function(t) {
                    try {
                        this.data = t;
                        var e = this.data.get("date"),
                            n = this.data.get("bet"),
                            o = this.data.get("agWin");
                        this.lbTime.string = a.Windown.formatDate(new Date(e), "dd/MM\nHH:mm:ss"), this.lbBet.string = a.Windown.formatNumber(n * a.Windown.Medusa.totalLineBet), this.lbWin.string = a.Windown.formatNumber(o)
                    } catch (i) {
                        console.error(i)
                    }
                }, e.prototype.onClick = function() {
                    var t = c.ConectManager.getIns().getSFSObj();
                    t.putInt("id", this.data.get("id")), console.log("id la: " + this.data.get("id")), c.ConectManager.getIns().sendRequest(s.REQUEST_CODE.HistoryChiTietMedusa, t, a.Windown.Medusa.roomSFS), a.Windown.Medusa.audio.playClick(), a.Windown.UIManager.showLoading()
                }, r([p(cc.Label)], e.prototype, "lbTime", void 0), r([p(cc.Label)], e.prototype, "lbBet", void 0), r([p(cc.Label)], e.prototype, "lbWin", void 0), r([l], e)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
        "../../../Scritps/Network/ConectManager": void 0,
        "../../../Scritps/Windown": void 0
    }],
    ItemMutilFsMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ef57dAeuWxOr4POgke7wa3h", "ItemMutilFsMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../Scritps/Other/LbMonoSpace"),
            u = t("../../../Scritps/Util"),
            l = t("../../../Scritps/Windown"),
            p = t("./BaseItemMutilMedusa"),
            d = cc._decorator,
            h = d.ccclass,
            f = d.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbFade = null, e.spine = null, e
                }
                return i(e, t), e.prototype.take = function(t) {
                    return s(this, void 0, void 0, function() {
                        var e;
                        return c(this, function() {
                            try {
                                if (t == this.mutil) return [2];
                                1 == this.mutil && 1 != t && this.startTakeMutil(), l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.multiUp), (e = this.lbMutil.node.parent).active = !0, e.scale = .5, e.stopAllActions(), e.runAction(cc.sequence(cc.scaleTo(.2, .7), cc.scaleTo(.2, .5))), this.mutil = t, this.lbMutil.setMoneyNoTime(this.mutil), this.mutilMng.anim1.play(), this.mutilMng.anim2.play(), this.lbMutil.setMoneyNoTime(this.mutil)
                            } catch (n) {
                                u.Util.ThrowErrProsime(n)
                            }
                            return [2]
                        })
                    })
                }, e.prototype.startTakeMutil = function() {
                    this.spine.node.active = !0, this.spine.clearTracks(), this.spine.setAnimation(0, "spawn", !1), this.spine.addAnimation(0, "idle", !0), this.lbMutil.node.parent.setSiblingIndex(0), this.lbMutil.node.parent.y = 531.424, this.lbMutil.node.parent.opacity = 150, this.mutilMng.animLoop.node.stopAllActions(), this.mutilMng.animLoop.node.runAction(cc.fadeIn(.3)), this.mutilMng.anim1.play(), this.mutilMng.anim2.play(), l.Windown.Medusa.audio.playEffect(l.Windown.Medusa.audio.multiActivate)
                }, e.prototype.animRevice = function() {
                    var t = l.Windown.Medusa.stateSpin.isMaxSpeed ? 2 : 1;
                    this.spine.clearTracks(), this.spine.timeScale = 1 / t, this.spine.setAnimation(0, "win", !1), this.spine.addAnimation(0, "idle", !0)
                }, e.prototype.resetForNextSpin = function() {}, e.prototype.init = function(t) {
                    cc.log("init mutil"), this.mutilMng.currentItemMutil && (this.mutilMng.currentItemMutil.node.active = !1), this.mutil = t || 1, this.lbMutil.setMoneyNoTime(this.mutil), this.node.active = !0, this.mutilMng.currentItemMutil.spine.node.active = !1, this.mutilMng.currentItemMutil = this, this.mutil > 1 ? this.lbMutil.node.parent.active = !0 : (this.mutilMng.animLoop.node.opacity = 0, this.lbMutil.node.parent.active = !1)
                }, r([f(a.default)], e.prototype, "lbFade", void 0), r([f(sp.Skeleton)], e.prototype, "spine", void 0), r([h], e)
            }(p.default);
        n.default = y, cc._RF.pop()
    }, {
        "../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../Scritps/Util": void 0,
        "../../../Scritps/Windown": void 0,
        "./BaseItemMutilMedusa": "BaseItemMutilMedusa"
    }],
    ItemMutilNomalMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c5abdsLtTtOqr9BfB2DQfd9", "ItemMutilNomalMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../Scritps/Util"),
            u = t("../../../Scritps/Windown"),
            l = t("./BaseItemMutilMedusa"),
            p = cc._decorator,
            d = p.ccclass,
            h = p.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spine = null, e
                }
                return i(e, t), e.prototype.animRevice = function() {
                    this.spine.clearTracks(), this.spine.setAnimation(0, "win", !1), this.spine.addAnimation(0, "idle", !0)
                }, e.prototype.take = function(t) {
                    return s(this, void 0, void 0, function() {
                        var e;
                        return c(this, function() {
                            try {
                                if (t == this.mutil) return [2];
                                1 == this.mutil && 1 != t && this.startTakeMutil(), u.Windown.Medusa.audio.playEffect(u.Windown.Medusa.audio.multiUp), (e = this.lbMutil.node.parent).active = !0, e.scale = .5, e.stopAllActions(), e.runAction(cc.sequence(cc.scaleTo(.2, .7), cc.scaleTo(.2, .5))), this.mutil = t, this.lbMutil.setMoneyNoTime(this.mutil), this.mutilMng.anim1.play(), this.mutilMng.anim2.play(), cc.log("mull la: " + t)
                            } catch (n) {
                                a.Util.ThrowErrProsime(n)
                            }
                            return [2]
                        })
                    })
                }, e.prototype.resetForNextSpin = function() {
                    return s(this, void 0, void 0, function() {
                        var t, e = this;
                        return c(this, function() {
                            try {
                                this.mutil > 1 && (this.spine.clearTracks(), t = u.Windown.Medusa.stateSpin.isMaxSpeed ? 2 : 1, this.spine.timeScale = 1 * t, this.spine.setAnimation(0, "exit", !1), this.lbMutil.node.parent.runAction(cc.sequence(cc.moveTo(.3 * t, cc.v2(0, 407.874)), cc.callFunc(function() {
                                    e.lbMutil.node.parent.active = !1, e.spine.node.active = !1
                                }))), this.mutilMng.animLoop.node.stopAllActions(), this.mutilMng.animLoop.node.runAction(cc.fadeOut(.3 * t)), this.mutil = 1)
                            } catch (n) {
                                a.Util.ThrowErrProsime(n)
                            }
                            return [2]
                        })
                    })
                }, e.prototype.startTakeMutil = function() {
                    this.spine.node.active = !0, this.spine.clearTracks(), this.spine.setAnimation(0, "spawn", !1), this.spine.addAnimation(0, "idle", !0), this.lbMutil.node.parent.zIndex = cc.macro.MIN_ZINDEX, this.lbMutil.node.parent.y = 531.424, this.lbMutil.node.parent.opacity = 150, this.mutilMng.animLoop.node.stopAllActions(), this.mutilMng.animLoop.node.runAction(cc.fadeIn(.3)), this.mutilMng.anim1.play(), this.mutilMng.anim2.play(), u.Windown.Medusa.audio.playEffect(u.Windown.Medusa.audio.multiActivate)
                }, e.prototype.aniTakeMutil = function() {}, e.prototype.init = function() {
                    this.mutilMng.currentItemMutil && (this.mutilMng.currentItemMutil.node.active = !1), this.mutil = this.mutilMng.currentItemMutil ? this.mutilMng.currentItemMutil.mutil : 1, this.lbMutil.setMoneyNoTime(this.mutil), this.mutilMng.currentItemMutil = this, this.mutil > 1 ? (this.spine.node.active = !0, this.lbMutil.node.parent.active = !0) : (this.spine.node.active = !1, this.mutilMng.animLoop.node.opacity = 0, this.lbMutil.node.parent.active = !1)
                }, r([h(sp.Skeleton)], e.prototype, "spine", void 0), r([d], e)
            }(l.default);
        n.default = f, cc._RF.pop()
    }, {
        "../../../Scritps/Util": void 0,
        "../../../Scritps/Windown": void 0,
        "./BaseItemMutilMedusa": "BaseItemMutilMedusa"
    }],
    ItemResultDetailMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ced5cQVZJlOGLMvmfZnzpwD", "ItemResultDetailMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Scritps/Other/LbMonoSpace"),
            c = t("../../../Scritps/Windown"),
            a = cc._decorator,
            u = a.ccclass,
            l = a.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbX = null, e.lbTitleToHopWin = null, e.parentItemResult = null, e.parentItemWin = null, e.colorOf = null, e.playTable = [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 5, 0, 0],
                        [2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 8, 0, 0],
                        [3, 3, 3, 3, 5, 5, 5, 6, 6, 6, 10, 0, 0],
                        [4, 4, 4, 4, 6, 6, 6, 10, 10, 10, 20, 0, 0]
                    ], e
                }
                return i(e, t), e.prototype.init = function(t, e, n, o) {
                    var i = this;
                    if (c.Windown.Medusa.addFielActiveGroupInList(t), e) {
                        this.lbTitleToHopWin.string = "T\u1ed5 h\u1ee3p win", this.parentItemWin.active = !0;
                        for (var r = this.parentItemWin.children[0], s = 0, a = e.lsIdItem.length; s < a; s++) {
                            var u = e.lsIdItem[s];
                            e.lsAgWin[s], null == (_ = this.parentItemWin.children[s]) && ((_ = cc.instantiate(r)).parent = this.parentItemWin), _.active = !0;
                            var l = this.getArrSf(u + 1, 1);
                            _.children[0].children[1].getComponent(cc.Sprite).spriteFrame = l[0]
                        }
                        for (s = e.lsIdItem.length; s < this.parentItemWin.childrenCount; s++) this.parentItemWin.children[s].active = !1
                    } else this.lbTitleToHopWin.string = "-------------", this.parentItemWin.active = !1;
                    var p = this.parentItemResult.children,
                        d = p[0].children[0];
                    if (t.forEach(function(t, e) {
                            var n = p[e],
                                o = null;
                            t.forEach(function(t, e) {
                                var r = n.children[e],
                                    s = t.i,
                                    c = t.s || 1,
                                    a = (t.g, t.a || !1);
                                null == r && ((r = cc.instantiate(d)).parent = n);
                                var u = i.getArrSf(s + 1, c);
                                null == u[0] && cc.log("id: " + (s + 1)), r.children[1].getComponent(cc.Sprite).spriteFrame = u[0], s + 1 == 12 || s + 1 == 13 ? (r.children[0].active = !1, r.children[2].active = !1) : (r.children[0].active = !0, r.children[2].active = !0), r.children[1].color = i.colorOf, r.children[0].color = i.colorOf, r.children[2].color = i.colorOf, r.opacity = 255, r.x = 0, 12 != s && c > 1 && (a ? r.x += 100 * (c - 1) / 2 : r.opacity = 0), r.height = 98 * c, r.scale = c;
                                var l = o ? o.y + o.height / 2 : -500;
                                r.y = l + r.height / 2, o = r
                            })
                        }), e) {
                        var h = e.lsIdItem,
                            f = e.lsstack,
                            y = e.lsAgWin;
                        for (s = 0, a = h.length; s < a; s++) {
                            for (var m = "", v = 0; v < f[s] + 1; v++) {
                                for (var S = p[v], g = 0, w = 0, M = S.childrenCount; w < M; w++)
                                    if (t[v][w].i == h[s] || 11 == t[v][w].i) {
                                        var b = S.children[w];
                                        b.children[0].color = cc.Color.WHITE, b.children[1].color = cc.Color.WHITE, b.children[2].color = cc.Color.WHITE, g++
                                    }
                                m += g + "x"
                            }
                            var _;
                            m += this.playTable[f[s]][h[s]] + "x" + c.Windown.formatNumber(o), m += "\nx" + n, (_ = this.parentItemWin.children[s]).children[1].getComponent(cc.Label).string = m + "=\n" + c.Windown.formatNumber(y[s] * n)
                        }
                    }
                    this.lbX.string = n.toString()
                }, e.prototype.getArrSf = function(t, e) {
                    return [c.Windown.Medusa.asset.getSfItemSymbol(t, e, !1)]
                }, r([l(s.default)], e.prototype, "lbX", void 0), r([l(cc.Label)], e.prototype, "lbTitleToHopWin", void 0), r([l(cc.Node)], e.prototype, "parentItemResult", void 0), r([l(cc.Node)], e.prototype, "parentItemWin", void 0), r([l(cc.Color)], e.prototype, "colorOf", void 0), r([u], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../Scritps/Windown": void 0
    }],
    ItemSlotMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cc438ytJOREK6t+RyOugZJa", "ItemSlotMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            },
            a = this && this.__spreadArrays || function() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var o = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var r = arguments[e], s = 0, c = r.length; s < c; s++, i++) o[i] = r[s];
                return o
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.TYPE_MOVE = void 0;
        var u = t("../../../Scritps/DefineTs/StateReelSlot"),
            l = t("../../../Scritps/Util"),
            p = t("../../../Scritps/Windown"),
            d = t("./SymbolMedusa");
        (function(t) {
            t[t.NORMAL = 0] = "NORMAL", t[t.ADD_NEW = 1] = "ADD_NEW"
        })(n.TYPE_MOVE || (n.TYPE_MOVE = {}));
        var h = cc._decorator,
            f = h.ccclass,
            y = (h.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.sizeSymbol = 7, e.funReject = null, e.resolve = null, e.stateWhel = u.default.WAITING, e.result = [], e.resultTemp = [], e.listResultRandomCache = [], e.nodeEffNearWin = null, e.nodeWildDT = null, e.nodeWildShowDT = null, e.isScater = !1, e.index = -1, e.indexNodeFirt = 0, e.isMoveSlowDown = !1, e.deltaSlowDown = 0, e.listNumMutilWild = [], e.listItemSymbol = [], e._isInResult = !1, e
                }
                return i(e, t), e.prototype.onLoad = function() {}, e.prototype.getListSymbol = function() {
                    return this.listItemSymbol
                }, e.prototype.getListSymbolResult = function() {
                    var t = [],
                        e = this.getListSymbol();
                    return this.result.forEach(function(n, o) {
                        t.push(e[o + 1])
                    }), t
                }, e.prototype.setResultFirtGame = function(t) {
                    var e = t.slice(1, t.length - 1);
                    this.setResult(e);
                    for (var n = 0, o = this.sizeSymbol; n < o; n++) {
                        var i = this.getSymbol();
                        i.parent = p.Windown.Medusa.parentItem, i.setSiblingIndex(n);
                        var r = i.getComponent(d.default);
                        r.setItemColum(this), r.setResult(t[n]), this.listItemSymbol.push(r)
                    }
                    this.getListSymbol().forEach(function(t) {
                        t.initPosStartGame(), t.effectSpawnSymbol(!1)
                    })
                }, e.prototype.getSymbolByGroupId = function(t) {
                    var e = this.getListSymbol();
                    return t ? e.find(function(e) {
                        return e.groupId == t
                    }) : e.find(function(t) {
                        return -1 != t.groupId
                    })
                }, e.prototype.checkContainsGroupInRandom = function(t) {
                    var e = !1;
                    return null != (t ? this.listResultRandomCache.find(function(e) {
                        return e.g && e.g == t
                    }) : this.listResultRandomCache.find(function(t) {
                        return t.g && -1 != t.g
                    })) && (e = !0), e
                }, e.prototype.checkIsColumMutil = function() {
                    return this.result.find(function(t) {
                        return t.g && -1 != t.g
                    })
                }, e.prototype.checkContainsGroupInResult = function(t) {
                    return t ? this.result.find(function(e) {
                        return e.g && e.g == t
                    }) : this.checkIsColumMutil()
                }, e.prototype.checkHienThiGroup = function(t) {
                    return this._isInResult ? this.checkContainsGroupInResult(t) : this.checkContainsGroupInRandom(t)
                }, e.prototype.setResult = function(t) {
                    this.result = t, this.resultTemp = t.slice()
                }, e.prototype.checkAndRemoveItem = function(t) {
                    for (var e = this.getListSymbol().slice(1, this.result.length + 1), n = 0; n < e.length; n++) null != e[n] && (e[n].result - 1 != t && 12 != e[n].result || (e[n].removeItem(), this.result[n] = null))
                }, e.prototype.checkItemWin = function(t) {
                    this.getListSymbol();
                    for (var e = 0, n = this.getListSymbol().slice(1, this.result.length + 1); e < n.length; e++) {
                        var o = n[e];
                        o.result - 1 != t && 12 != o.result || o.takeItem()
                    }
                }, e.prototype.addNewListSymbol = function(t) {
                    var e = this;
                    return new Promise(function(n) {
                        return s(e, void 0, void 0, function() {
                            var e, o, i, r, s, u, h, f, y = this;
                            return c(this, function() {
                                try {
                                    for (e = this.getListSymbol().splice(1, this.result.length), this.setResult(t.slice()), t = t.reverse(), e = (e = e.reverse()).filter(function(t) {
                                            return null != t
                                        }), 0 == this.index && cc.log("list result server: " + JSON.stringify(t)), 0 == this.index && cc.log("list result old in view: " + JSON.stringify(e.map(function(t) {
                                            return t.objSFS
                                        }))), o = function(t) {
                                            var n = e.find(function(e) {
                                                return e.checkEqualsResult(t)
                                            });
                                            return null != n ? (e.splice(e.indexOf(n), 1), 0 == y.index && cc.log("list result sau khi x\xf3a: " + JSON.stringify(e.map(function(t) {
                                                return t.objSFS
                                            }))), n.node) : null
                                        }, i = null, r = 0; r < t.length; r++) s = t[r], null != e[r] && e[r].checkEqualsResult(s) || (null == (u = o(s)) ? (u = p.Windown.Medusa.asset.getSymbol(), h = u.getComponent(d.default), p.Windown.Medusa.parentItem.addChild(u), h.setItemColum(this), h.setResult(s), e.splice(r, 0, h), i ? i += h.node.height / 2 : i = h.node.height / 2, 2 == this.index && cc.log(i), h.node.y = i, i += h.node.height / 2) : e.splice(r, 0, u.getComponent(d.default)), 0 == this.index && cc.log("list result sau khi for co thang khac: " + JSON.stringify(e.map(function(t) {
                                        return t.objSFS
                                    }))));
                                    0 == this.index && cc.log("list result sau khi add: " + JSON.stringify(e.map(function(t) {
                                        return t.objSFS
                                    }))), e.reverse(), (f = this.getListSymbol()).splice.apply(f, a([1, 0], e)), 0 == this.index && cc.log("list result cuoi cung: " + JSON.stringify(this.getListSymbol().map(function(t) {
                                        return t.objSFS
                                    }))), n(null)
                                } catch (c) {
                                    l.Util.ThrowErrProsime(c)
                                }
                                return [2]
                            })
                        })
                    })
                }, e.prototype.getSymbol = function() {
                    return p.Windown.Medusa.asset.getSymbol()
                }, e.prototype.checkIsNorSap = function() {
                    var t = this.getListSymbol().filter(function(t) {
                            return t.checkIsInView()
                        }),
                        e = 0;
                    return t.forEach(function(t) {
                        e += t.sizeItem
                    }), this.sizeSymbol - 2 - e > 0
                }, e.prototype.moveSymbolInView = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return s(t, void 0, void 0, function() {
                            var t, n, o, i, r, s, a, u, d, h;
                            return c(this, function() {
                                try {
                                    if (p.Windown.Medusa.stateSpin.curentCountScater > 2 && p.Windown.Medusa.stateSpin.isMaxSpeed, t = p.Windown.Medusa.stateSpin.isMaxSpeed ? 3 : 1, this.getListSymbol().forEach(function(t) {
                                            t.offItem()
                                        }), (n = this.getListSymbol().filter(function(t) {
                                            return t.checkIsInView()
                                        })).reverse(), o = this.getListYByListResult(), n.length > 0)
                                        for (i = 0, r = n.length; i < r; i++) s = n[i], a = s.getIndexOf() - 1, u = o[a], Math.abs(u - s.node.y) > 2 && (d = cc.moveTo(.25 / t, s.node.x, u).easing(cc.easeSineIn()), h = cc.sequence(cc.moveBy(.04 / t, 0, 15).easing(cc.easeSineOut()), cc.moveBy(.04 / t, 0, -15).easing(cc.easeSineIn()), cc.callFunc(function() {})), s.node.runAction(cc.sequence(d, cc.callFunc(function() {
                                            p.Windown.Medusa.audio.playSymCollapse()
                                        }), h)));
                                    e(null)
                                } catch (c) {
                                    l.Util.ThrowErrProsime(c)
                                }
                                return [2]
                            })
                        })
                    })
                }, e.prototype.moveSymbolNew = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return s(t, void 0, void 0, function() {
                            var t, n, o, i, r, s, a, u, d;
                            return c(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        return c.trys.push([0, 6, , 7]), t = this.getListSymbol().filter(function(t) {
                                            return t.checkIsInView()
                                        }), n = p.Windown.Medusa.stateSpin.isMaxSpeed ? 3 : 1, o = this.getListSymbolResult(), i = [], r = o.reverse(), (s = this.getListYByListResult()).reverse(), a = 0, u = 0, r.forEach(function(e, o) {
                                            var r = e.node,
                                                c = s[o];
                                            !t.includes(e) && Math.abs(c - r.y) > 2 && (e.checkIsBlock() && !e.isFirtGroup ? e.node.y = c : (u++, i.push(new Promise(function(t) {
                                                var i = cc.moveTo(.25 / n, r.x, c).easing(cc.easeSineIn()),
                                                    s = cc.sequence(cc.moveBy(.04, 0, 15).easing(cc.easeSineOut()), cc.moveBy(.04, 0, -15).easing(cc.easeSineIn()), cc.callFunc(function() {
                                                        t(null), e.effectSpawnSymbol()
                                                    }));
                                                r.runAction(cc.sequence(cc.delayTime(a), i, cc.callFunc(function() {
                                                    p.Windown.Medusa.audio.playSymCollapse()
                                                }), s)), 1 == n && (a += p.Windown.RandomNumber(0, 4) < 2 ? 0 : .05 * o)
                                            }))))
                                        }), i.length > 0 && 1 == n && p.Windown.Medusa.nodeEffNearWinNoSap ? (p.Windown.Medusa.audio.playEffectNoStop(p.Windown.Medusa.audio.heartbeatSlowdrop), [4, p.Windown.Medusa.getMakeDelay(.5).prosime]) : [3, 2];
                                    case 1:
                                        c.sent(), c.label = 2;
                                    case 2:
                                        return [4, p.Windown.Medusa.getPromiseAll(i)];
                                    case 3:
                                        return c.sent(), i.length < 1 && u < 1 ? [4, p.Windown.Medusa.getMakeDelay(.25 / n + .08).prosime] : [3, 5];
                                    case 4:
                                        c.sent(), c.label = 5;
                                    case 5:
                                        return t.forEach(function(t) {
                                            t.offItem()
                                        }), this.reSetResultColum(), e(null), [3, 7];
                                    case 6:
                                        return d = c.sent(), l.Util.ThrowErrProsime(d), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    })
                }, e.prototype.getListYByListResult = function() {
                    var t = [],
                        e = this.getListSymbol()[0].size.height,
                        n = this.getListSymbol().slice(1, this.result.length + 1),
                        o = -n[0].sizeItem * e / 2;
                    t.push(o);
                    for (var i = 1; i < n.length; i++) o -= n[i - 1].sizeItem * e / 2 + n[i].sizeItem * e / 2, t.push(o);
                    return t
                }, e.prototype.runSpin = function() {
                    this.stateWhel = u.default.RUN, this.deltaSlowDown = 6e3, this.getListSymbol().forEach(function(t) {
                        t.runSpin()
                    })
                }, e.prototype.stopSpin = function(t, e, n) {
                    var o = this;
                    return new Promise(function(i, r) {
                        return s(o, void 0, void 0, function() {
                            var o;
                            return c(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return s.trys.push([0, 5, , 6]), this.funReject = r, this.isScater = t, this.resolve = i, t ? (5 != this.index && (i(null), this.resolve = null, this.funReject = null), p.Windown.Medusa.activeNodeNearWin(this.index), this.runSlowDownActicon(), [3, 4]) : [3, 1];
                                    case 1:
                                        return this.stateWhel = u.default.STOP, n != this.index ? [3, 3] : [4, p.Windown.Medusa.getMakeDelay(.2).prosime];
                                    case 2:
                                        return s.sent(), 5 == this.index || e || (this.resolve && this.resolve(null), this.resolve = null), [3, 4];
                                    case 3:
                                        this.resolve && this.resolve(null), this.resolve = null, s.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return o = s.sent(), l.Util.ThrowErrProsime(o), [3, 6];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    })
                }, e.prototype.forceStopSpin = function(t) {
                    return t && (p.Windown.Medusa.offNearWin(), p.Windown.Medusa.audio.stopEffect(p.Windown.Medusa.audio.fastspinStop), this.isMoveSlowDown = !1), this.stopSpinIsFastSpin(t)
                }, e.prototype.stopSpinIsFastSpin = function() {
                    var t = this;
                    return new Promise(function(e) {
                        t.stateWhel != u.default.SHOW_EFFECT ? (t.stateWhel = u.default.SHOW_EFFECT, t.listResultRandomCache.length = 0, t.reSetResultColum(), t.sizeSymbol > 6 && (p.Windown.Medusa.audio.playStopAudio(t.sizeSymbol), p.Windown.Medusa.updateNewTotalLine(t.result.length + 1)), t.isMoveSlowDown = !1, t.getListSymbolResult().forEach(function(t) {
                            t.node.y += 20, t.node.runAction(cc.sequence(cc.moveBy(.04, 0, -20).easing(cc.easeSineOut()), cc.callFunc(function() {
                                t.effectSpawnSymbol()
                            })))
                        }), e(null)) : e(null)
                    })
                }, e.prototype.getSize2SymbolHead = function() {
                    var t = this.getListSymbol();
                    return 0 + (t[0].sizeItem + t[1].sizeItem)
                }, e.prototype.errSpin = function() {}, e.prototype.reSetResultColum = function() {
                    var t = this.getListSymbol();
                    if (t.length > this.sizeSymbol)
                        for (; t.length > this.sizeSymbol;) p.Windown.Medusa.asset.putSymbol(t[t.length - 1].node), t.pop();
                    else if (t.length < this.sizeSymbol)
                        for (var e = t.length; e < this.sizeSymbol; e++) {
                            var n = this.getSymbol();
                            p.Windown.Medusa.parentItem.addChild(n);
                            var o = n.getComponent(d.default);
                            o.setItemColum(this), t.push(o)
                        }
                    this.result.forEach(function(e, n) {
                        t[n + 1].setResult(e)
                    }), e = this.result.length + 1;
                    for (var i = t.length; e < i; e++) t[e].setResult(t[e].objSFS);
                    t.forEach(function(t) {
                        t.setImgResult(!1), t.canRun = !1, t.node.stopAllActions(), t.initPosStartGame()
                    })
                }, e.prototype.effStopSpin = function() {
                    return s(this, void 0, void 0, function() {
                        var t;
                        return c(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 5, , 6]), this.stateWhel == u.default.SHOW_EFFECT ? [2] : (this.stateWhel = u.default.SHOW_EFFECT, this.reSetResultColum(), p.Windown.Medusa.audio.playStopAudio(this.sizeSymbol), p.Windown.Medusa.updateNewTotalLine(this.result.length), this.funReject = null, this.isMoveSlowDown = !1, this.isScater ? (p.Windown.Medusa.offNearWin(), this.getListSymbolResult().forEach(function(t) {
                                        t.effectSpawnSymbol()
                                    }), p.Windown.Medusa.audio.playEffect(p.Windown.Medusa.audio.fastspinStop), [4, p.Windown.Medusa.getMakeDelay(.3).prosime]) : [3, 2]);
                                case 1:
                                    return e.sent(), this.resolve && this.resolve(null), this.resolve = null, [3, 4];
                                case 2:
                                    return this.getListSymbol().forEach(function(t) {
                                        var e = cc.sequence(cc.moveBy(.06, 0, 10).easing(cc.easeSineOut()), cc.moveBy(.06, 0, -10).easing(cc.easeSineIn()), cc.callFunc(function() {
                                            t.effectSpawnSymbol()
                                        }));
                                        t.node.runAction(e)
                                    }), [4, p.Windown.Medusa.getMakeDelay(.12).prosime];
                                case 3:
                                    e.sent(), this.resolve && this.resolve(null), this.resolve = null, e.label = 4;
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return t = e.sent(), l.Util.ThrowErrProsime(t), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.getIdSymbolResult = function() {
                    if (this.stateWhel == u.default.STOP) {
                        var t = this.listResultRandomCache.pop();
                        return t || (this.resultTemp.pop() || (this.getListSymbol().forEach(function(t) {
                            t.canRun = !1
                        }), {
                            i: p.Windown.RandomNumber(0, 12)
                        }))
                    }
                    return this.getRandomResult()
                }, e.prototype.checkLastSymbol = function(t) {
                    var e = this.getListSymbol();
                    return e[e.length - 1] == t
                }, e.prototype.getRandomResult = function() {
                    this.listResultRandomCache.length < 1 && p.Windown.Medusa.initRandomResult();
                    var t = this.listResultRandomCache.pop();
                    return this.listResultRandomCache.length < 1 && p.Windown.Medusa.initRandomResult(), t
                }, e.prototype.checkParentItem = function() {}, e.prototype.runSlowDownActicon = function() {
                    this.getListSymbol().forEach(function(t) {
                        t.node.stopAllActions()
                    }), this.isMoveSlowDown = !0, this.deltaSlowDown = 2500
                }, e.prototype.update = function(t) {
                    var e = this;
                    this.isMoveSlowDown && (this.getListSymbol().forEach(function(n) {
                        n.node.y -= t * e.deltaSlowDown
                    }), this.deltaSlowDown > 500 ? this.deltaSlowDown -= 1800 * t : this.deltaSlowDown < 1e3 && (this.stateWhel = u.default.STOP))
                }, r([f], e)
            }(cc.Component));
        n.default = y, cc._RF.pop()
    }, {
        "../../../Scritps/DefineTs/StateReelSlot": void 0,
        "../../../Scritps/Util": void 0,
        "../../../Scritps/Windown": void 0,
        "./SymbolMedusa": "SymbolMedusa"
    }],
    ItemXMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d7576UnZAhKc4Q4WmYsfUwc", "ItemXMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Scritps/Other/LbMonoSpace"),
            c = t("../../../Scritps/Windown"),
            a = cc._decorator,
            u = a.ccclass,
            l = a.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb = null, e._symbol = null, e
                }
                var n;
                return i(e, t), n = e, e.prototype.init = function(t, e) {
                    var n = this;
                    this.lb.string = e.toString(), this._symbol = t, t.node.on(cc.Node.EventType.POSITION_CHANGED, this.emitNewPos, this), this.node.on(cc.Node.EventType.SIZE_CHANGED, function() {
                        n.emitNewPos()
                    }), this.emitNewPos()
                }, e.prototype.emitNewParent = function(t) {
                    this.node.parent = t, this.emitNewPos()
                }, e.prototype.emitNewPos = function() {
                    var t = this._symbol.node.getPosition();
                    2 == this._symbol.sizeItem ? t.addSelf(cc.v2(103 - this.node.width / 3, 66)) : t.addSelf(cc.v2(146 - this.node.width / 3, 118)), this.node.setPosition(t)
                }, e.prototype.runToMutil = function() {
                    var t = this,
                        e = c.Windown.Medusa.stateSpin.isMaxSpeed ? 3 : 1;
                    this._symbol.node.targetOff(this);
                    var o = c.Windown.convertPosInOtherNode(this.node.getPosition(), this.node.parent, c.Windown.Medusa.parentEffect);
                    this.node.parent = c.Windown.Medusa.parentEffect, this.node.setPosition(o);
                    var i = c.Windown.convertNodeInOtherNode(this._symbol.node, this.node.parent);
                    this.node.stopAllActions(), this.node.runAction(cc.speed(cc.sequence(cc.spawn(cc.moveTo(.5, i).easing(cc.easeQuinticActionOut()), cc.sequence(cc.delayTime(.2), cc.fadeOut(.3))), cc.callFunc(function() {
                        t.node.destroy()
                    })), e));
                    var r = c.Windown.Medusa.asset.getMutiXGold();
                    r.parent = this.node.parent, r.setPosition(this.node.getPosition()), r.opacity = 0, r.zIndex = this.node.zIndex + 1, r.getComponent(n).lb.string = this.lb.string, r.runAction(cc.speed(cc.sequence(cc.spawn(cc.moveTo(.5, i).easing(cc.easeQuinticActionOut()), cc.sequence(cc.delayTime(.2), cc.fadeIn(.3))), cc.spawn(cc.moveTo(.3, 0, 500).easing(cc.easeQuarticActionIn()), cc.fadeOut(.3)), cc.callFunc(function() {
                        r.destroy()
                    })), e))
                }, e.prototype.onDestroy = function() {
                    this._symbol && cc.isValid(this._symbol.node, !0) && this._symbol.node.targetOff(this)
                }, r([l(s.default)], e.prototype, "lb", void 0), n = r([u], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../Scritps/Windown": void 0
    }],
    LichSuMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "00b97kUffRFWo92D1UvjipJ", "LichSuMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Scritps/DefineTs/REQUEST_CODE"),
            c = t("../../../Scritps/Network/ConectManager"),
            a = t("../../../Scritps/Popup/PageData/PageData"),
            u = t("../../../Scritps/Windown"),
            l = t("./DetailHistoryMedusa"),
            p = t("./ItemLichSuMedusa"),
            d = cc._decorator,
            h = d.ccclass,
            f = d.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pageDate = null, e.detail = null, e.listData = null, e.maxRow = 11, e
                }
                return i(e, t), e.prototype.show = function() {
                    this.node.active = !0, this.reset(), this.node.y = -1280, this.node.stopAllActions(), this.node.runAction(cc.moveTo(.3, 0, 0)), c.ConectManager.getIns().sendRequest(s.REQUEST_CODE.HistoryMedusa, null, u.Windown.Medusa.roomSFS), u.Windown.UIManager.showLoading()
                }, e.prototype.responseServer = function(t) {
                    u.Windown.UIManager.hideLoading();
                    var e = t.getSFSArray("history");
                    this.initWithListData(e)
                }, e.prototype.responseServerChiTiet = function(t) {
                    u.Windown.UIManager.hideLoading(), this.showDetail(t)
                }, e.prototype.initWithListData = function(t) {
                    cc.log(u.Windown.SFSArrToJson(t)), this.pageDate.content.children;
                    var e = t.size(),
                        n = Math.floor(e / this.maxRow);
                    e % this.maxRow > 0 && n++, 0 == n && (n = 1), this.pageDate.setTotalPage(n), this.listData = t, this.onChangePage(1)
                }, e.prototype.onChangePage = function(t) {
                    for (var e = this.pageDate.content, n = e.children, o = n[0], i = (t - 1) * this.maxRow, r = 0, s = this.maxRow; r < s; r++) {
                        var c = n[r];
                        if (i < this.listData.size()) {
                            null == c && (c = cc.instantiate(o), e.addChild(c), c.y = -(r + 1) * c.height + c.height / 2);
                            var a = this.listData.getSFSObject(i);
                            c.getComponent(p.default).initItem(a), c.active = !0, i++
                        } else {
                            if (!c) break;
                            c.active = !1
                        }
                    }
                }, e.prototype.showDetail = function(t) {
                    this.detail.show(t)
                }, e.prototype.resetContent = function() {
                    for (var t = this.pageDate.content.children, e = 0, n = t.length; e < n; e++) t[e].active = !1
                }, e.prototype.reset = function() {
                    this.pageDate.setTotalPage(1), this.pageDate.reset(), this.resetContent()
                }, e.prototype.onClickClose = function() {
                    var t = this;
                    u.Windown.Medusa.audio.playClick(), this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.moveTo(.3, 0, -1280), cc.callFunc(function() {
                        t.node.active = !1
                    })))
                }, r([f(a.default)], e.prototype, "pageDate", void 0), r([f(l.default)], e.prototype, "detail", void 0), r([h], e)
            }(cc.Component);
        n.default = y, cc._RF.pop()
    }, {
        "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
        "../../../Scritps/Network/ConectManager": void 0,
        "../../../Scritps/Popup/PageData/PageData": void 0,
        "../../../Scritps/Windown": void 0,
        "./DetailHistoryMedusa": "DetailHistoryMedusa",
        "./ItemLichSuMedusa": "ItemLichSuMedusa"
    }],
    MedusaView: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "77722VctMhDWphIbVPNIj3o", "MedusaView");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../Scritps/DefineTs/EVENT_MANAGER"),
            u = t("../../../Scritps/DefineTs/PlayerPP"),
            l = t("../../../Scritps/DefineTs/REQUEST_CODE"),
            p = t("../../../Scritps/DefineTs/StateReelSlot"),
            d = t("../../../Scritps/DefineTs/TextDefine"),
            h = t("../../../Scritps/Game/GAME_TYPE"),
            f = t("../../../Scritps/Network/ConectManager"),
            y = t("../../../Scritps/Obs/LbMoneyChange"),
            m = t("../../../Scritps/Other/LbMonoSpace"),
            v = t("../../../Scritps/Util"),
            S = t("../../../Scritps/Windown"),
            g = t("./AssetMedusa"),
            w = t("./AudioMedusa"),
            M = t("./Effect/NearFreeSpinMedusa"),
            b = t("./Effect/NearFreeSpinMedusaNoSap"),
            _ = t("./EffectMedusa"),
            W = t("./InfoBarControllerMedusa"),
            C = t("./ItemSlotMedusa"),
            O = t("./LichSuMedusa"),
            A = t("./MutilControlMedusa"),
            I = t("./SpinNormalMedusa"),
            E = cc._decorator,
            R = E.ccclass,
            T = E.property,
            P = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.asset = null, e.bkgSprite = null, e.itemColum = null, e.parentItem = null, e.parentEffect = null, e.parentItemFront = null, e.parentItemActive = null, e.nodeLine = null, e.effect = null, e.labelChipReviceInBox = null, e.lb_totalBet = null, e.lb_FSLeft = null, e.lb_TotalLine = null, e.lb_CountAuto = null, e.infoBar = null, e.muitlCtr = null, e.btnSpin = null, e.parentMask = null, e.nodeChooseAuto = null, e._popupLichSu = null, e.audio = null, e.listNodeDeactive = [], e.nodeBtnPlay = null, e.nodeBtnSeting = null, e.toggleTurbo = null, e.btnStartAuto = null, e.spineBot = null, e.listColum = [], e.listResult = null, e.listResultConvert = [], e.listConfigBet = [], e.gameType = -1, e.sfs = null, e.roomSFS = null, e.stateReel = 0, e.totalLineBet = 20, e.curRoomBet = 50, e.funEnd = null, e.isShowBtnPlay = !0, e.dataFinish = null, e.sfsObjTest = null, e.sfsObjTest2 = null, e.stateSpin = null, e.isDoneStartSpin = !1, e.nodeEffNearWin = null, e.nodeEffNearWinNoSap = null, e.currentTotalLine = 1, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    S.Windown.Medusa = this, cc.log("start dieu thuyen"), this.gameType = h.default.Medusa, this.sfs = f.ConectManager.getIns().sfs, this.sfs.addEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom, this), this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError, this), this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom, this), this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr, this), this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse, this), cc.systemEvent.on(a.EVENT_MANAGER.onDisconnect, this.onDisconnect, this), this.stateReel = p.default.WAITING, this.stateSpin = new I.default, this.sendJoinRoom(), this.activeMask(!1), this.scheduleOnce(this.startSpineBot, S.Windown.RandomNumber(5, 10))
                }, e.prototype.startSpineBot = function() {
                    var t = this,
                        e = ["p1_a", "p1_b", "p1_c", "p1_d", "p1_e", "p1_f", "p2_a", "p2_b", "p2_c", "p2_d", "p2_e", "p2_f", "p3_a", "p3_b", "p3_c", "p3_d", "p3_e", "p3_f"];
                    this.spineBot.setAnimation(0, e[S.Windown.RandomNumber(0, e.length)], !1), this.spineBot.setEndListener(function() {
                        t.scheduleOnce(t.startSpineBot, S.Windown.RandomNumber(5, 10))
                    })
                }, e.prototype.sendJoinRoom = function() {
                    var t = f.ConectManager.getIns().getSFSObj();
                    t.putInt("gameType", h.default.Medusa), t.putInt("roomType", -1), t.putInt("mark", -1), f.ConectManager.getIns().sendRequest(l.REQUEST_CODE.GetIdJoinRoom, t), cc.log("send requesrt ne")
                }, e.prototype.onDisconnect = function() {
                    cc.log("disconnect"), S.Windown.UIManager.hideLoading(), S.Windown.UIManager.hideLoadingData(), cc.director.loadScene("main")
                }, e.prototype.userExitRoom = function(t) {
                    cc.log("user exit room"), "Medusa" == t.room.groupId && t.user.isItMe && cc.director.loadScene("main")
                }, e.prototype.onCreateError = function() {
                    cc.log("creat errr"), S.Windown.UIManager.hideLoading(), cc.director.loadScene("main"), S.Windown.Dialog.showLog(d.TextDefine.ERR_JOIN_ROOM)
                }, e.prototype.onJoinRoom = function(t) {
                    cc.log("onJoinRoom "), cc.log(t);
                    var e = t.room;
                    if ("Medusa" == e.groupId) {
                        this.roomSFS = e, S.Windown.UIManager.hideLoadingData();
                        var n = e.getVariable("cf").value;
                        cc.log(n);
                        var o = [],
                            i = JSON.parse(n);
                        for (var r in i) {
                            var s = Object.create(null);
                            s.bet = parseInt(r), s.perJp = i[r].percentPot / 100, o.push(s)
                        }
                        o.sort(function(t, e) {
                            return t.bet - e.bet
                        }), this.listConfigBet = o, this.curRoomBet = this.listConfigBet[0].bet, this.lb_totalBet.string = S.Windown.formatNumber(this.totalLineBet * this.curRoomBet)
                    }
                }, e.prototype.switchBkgGame = function(t, e) {
                    var n = cc.find("Game/Bot", this.node),
                        o = cc.find("Game/Mid/FreeSpin", this.node),
                        i = cc.find("Game/Mid/AnimBot", this.node);
                    t ? (this.muitlCtr.startFreeSpin(e), i.active = !1, o.active = !0, n.active = !1) : (this.muitlCtr.endFreeSpin(), i.active = !0, o.active = !1, n.active = !0)
                }, e.prototype.onJoinRoomErr = function() {
                    cc.log("onJoinRoomErr "), S.Windown.UIManager.hideLoading(), S.Windown.UIManager.hideLoadingData(), S.Windown.Dialog.showLog(d.TextDefine.ERR_JOIN_ROOM), cc.director.loadScene("main")
                }, e.prototype.activeMask = function(t, e) {
                    var n = this.parentMask.children;
                    t ? e ? (n[e].stopAllActions(), n[e].runAction(cc.fadeTo(.3, 190))) : n.forEach(function(t) {
                        t.stopAllActions(), t.runAction(cc.fadeTo(.3, 190))
                    }) : e ? (n[e].stopAllActions(), n[e].runAction(cc.fadeOut(.3))) : n.forEach(function(t) {
                        t.stopAllActions(), t.runAction(cc.fadeOut(.3))
                    })
                }, e.prototype.extResponse = function(t) {
                    var e = t.cmd,
                        n = t.params;
                    switch (e) {
                        case l.REQUEST_CODE.SpinMedusa:
                            cc.log(S.Windown.SFSObjToJson(n)), this.handleFinish(n);
                            break;
                        case l.REQUEST_CODE.HistoryMedusa:
                            this._popupLichSu && this._popupLichSu.responseServer(n);
                            break;
                        case l.REQUEST_CODE.HistoryChiTietMedusa:
                            this._popupLichSu && this._popupLichSu.responseServerChiTiet(n);
                            break;
                        case l.REQUEST_CODE.GetRandomViewMedusa:
                            cc.log(S.Windown.SFSObjToJson(n));
                            break;
                        case l.REQUEST_CODE.GetIdJoinRoom:
                            try {
                                S.Windown.Dialog.checkAndShowLog(t.params)
                            } catch (o) {
                                this.onClickBackToLobby()
                            }
                    }
                }, e.prototype.handleWaitSPin = function() {}, e.prototype.handleFinish = function(t) {
                    var e = this;
                    if (this.isDoneStartSpin) {
                        if (t.containsKey(u.PlayerPP.ERR_MESSAGE)) return this.stateSpin.handleErrSpin(), S.Windown.Dialog.showLog(t.get(u.PlayerPP.ERR_MESSAGE)), this.activeAllBtn(), void this.onClickResetCountAuto();
                        this.dataFinish = t, S.Windown.MoneyUser.pushDelayMoney(this.gameType, this.dataFinish.get("agUser"), t.get("agWin")), this.truTienBet(this.dataFinish.get("agBet") * this.totalLineBet, this.dataFinish.get("agUser")), this.listResult = t.get("views");
                        var n = t.get("bonusSpin");
                        this.listResultConvert = this.convertResult(this.listResult, JSON.parse(S.Windown.SFSArrToJson(t.get("listItemWin"))), n), this.stateReel = p.default.CAN_STOP;
                        for (var o = this.stateSpin.isMaxSpeed ? 0 : .3, i = 0, r = S.Windown.Medusa.listResultConvert, s = 0, c = this.listColum; s < c.length; s++) c[s].setResult(r[0].listSFSObj[i]), i++;
                        i = 0, this.scheduleOnce(this.funEnd = function() {
                            e.stateSpin.onEnd()
                        }, o)
                    } else this.scheduleOnce(function() {
                        e.handleFinish(t)
                    }, .05)
                }, e.prototype.onDestroy = function() {
                    S.Windown.Medusa = null, this.dataFinish && (S.Windown.MoneyUser.removeDelay(this.gameType), this.dataFinish = null), S.Windown.MoneyUser.endGameMOney(this.gameType), cc.systemEvent.removeAll(this), this.roomSFS = null, this.sfs.removeEventListener(SFS2X.SFSEvent.USER_EXIT_ROOM, this.userExitRoom), this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_CREATION_ERROR, this.onCreateError), this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onJoinRoom), this.sfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.onJoinRoomErr), this.sfs.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.extResponse), S.Windown.UIManager.changeRotation(), this.clearAllMakeDelay()
                }, e.prototype.start = function() {
                    var t = this;
                    this.setupView(), this.initItem(), cc.sys.isNative || this.scheduleOnce(function() {
                        return s(t, void 0, void 0, function() {
                            return c(this, function() {
                                return [2]
                            })
                        })
                    }, 2)
                }, e.prototype.initItem = function() {
                    for (var t, e = this.getRdView(6, 5), n = this.getRdViewForLoop(0), o = this.itemColum, i = o.width, r = 0; r < 6; r++) {
                        var s = n[r].pop();
                        e[r].unshift(s), e[r].push(s);
                        var c = cc.instantiate(o);
                        c.parent = this.node;
                        var a = c.getComponent(C.default);
                        this.listColum.push(a), a.index = r, a.node.x = i * r + i / 2 - 6 * i / 2, a.node.y = 0, n[r].length > 0 && (t = a.listResultRandomCache).unshift.apply(t, n[r]), a.setResultFirtGame(e[r])
                    }
                }, e.prototype.getRdView = function(t, e) {
                    var n = this;
                    this.grid = this.grid || 1e6, this.grid > 2e6 && (this.grid = 1e6);
                    for (var o, i, r, s = [], c = 0, a = 0; a < t; a++) {
                        for (var u = [], l = 0; l < e; l++)(h = Object.create(null)).i = (o = a, i = l, void 0, (r = S.Windown.RandomNumber(0, 100)) < 3 && c < 3 && i < 4 ? (c++, 12) : r < 10 && o > 0 ? 11 : S.Windown.RandomNumber(0, 11)), h.g = -1, h.s = 1, u.push(h);
                        s.push(u)
                    }
                    var p = function(n, o, i, r) {
                        if (!(o + r <= t && i + r <= e)) return !1;
                        for (var s = o; s < r + o; s++)
                            for (var c = i; c < r + i; c++) {
                                var a = n[s][c];
                                if (-1 != a.g || 12 == a.i) return !1
                            }
                        return !0
                    };
                    for (a = 0; a < s.length; a++)
                        for (u = s[a], l = 0; l < u.length - 1; l++)(h = u[l]) && 12 == h.i && 1 == h.s && (h.s = 2, u[l + 1].i = 12, u[l + 1].s = 12);
                    for (s.forEach(function(t, e) {
                            t.forEach(function(t, o) {
                                if (12 != t.i && -1 == t.g && 1 == t.s && S.Windown.RandomNumber(0, 100) < 20) {
                                    var i = S.Windown.RandomNumber(0, 100) < 20 ? 3 : 2;
                                    if (p(s, e, o, i)) {
                                        for (var r = t.i, c = 3 == i ? S.Windown.RandomNumber(6, 11) : S.Windown.RandomNumber(2, 6), a = e; a < i + e; a++)
                                            for (var u = o; u < i + o; u++) s[a][u].g = n.grid, s[a][u].i = r, s[a][u].s = i, s[a][u].m = c, a == e && (s[a][u].a = !0);
                                        n.grid++
                                    }
                                }
                            })
                        }), a = 0; a < s.length; a++)
                        for (u = s[a], l = 0; l < u.length; l++)(h = u[l]) && 12 == h.i && (h.s = 2, u[l + 1] = null);
                    for (var d in s) s[d] = s[d].filter(function(t) {
                        return null != t
                    });
                    for (a = 0; a < s.length; a++)
                        for (u = s[a], l = 0; l < u.length; l++) {
                            var h;
                            if ((h = u[l]) && -1 != h.g)
                                for (var f = l + 1, y = l + 1 + h.s - 1; f < y; f++) u[f] = null
                        }
                    for (var d in s) s[d] = s[d].filter(function(t) {
                        return null != t
                    });
                    return s
                }, e.prototype.getRdViewForLoop = function(t) {
                    var e = this;
                    this.grid = this.grid || 1e6, this.grid > 2e6 && (this.grid = 1e6);
                    for (var n, o = 0, i = [], r = 0, s = 6 - t; r < s; r++) i.push([{
                        i: (void 0, n = S.Windown.RandomNumber(0, 100), n < 3 && o < 3 ? (o++, 12) : n < 10 && t > 0 ? 11 : S.Windown.RandomNumber(0, 11)),
                        s: 1,
                        g: -1,
                        m: 1
                    }]);
                    for (r = 0; r < i.length; r++)
                        for (var c = i[r], a = 0; a < c.length; a++) {
                            var u = c[a];
                            u && 12 == u.i && 1 == u.s && (u.s = 2)
                        }
                    i.forEach(function(n, o) {
                        n.forEach(function(n) {
                            if (12 != n.i && -1 == n.g && 1 == n.s && S.Windown.RandomNumber(0, 100) < 20) {
                                var r = S.Windown.RandomNumber(0, 100) < 20 ? 3 : 2,
                                    s = n.i,
                                    c = 3 == r ? S.Windown.RandomNumber(6, 11) : S.Windown.RandomNumber(2, 6);
                                if (o + r <= 6 - t) {
                                    for (var a = o; a < r + o; a++) i[a][0].g = e.grid, i[a][0].i = s, i[a][0].s = r, i[a][0].m = c, a == o && (i[a][0].a = !0);
                                    e.grid++
                                }
                            }
                        })
                    });
                    var l = 0;
                    return i.forEach(function(t) {
                        var e = t[0].s || 1;
                        e > l && (l = e)
                    }), i.forEach(function(t) {
                        for (var e = t[0].s || 1, n = 0, o = l - e; n < o; n++) t.unshift({
                            i: S.Windown.RandomNumber(0, 11)
                        })
                    }), i
                }, e.prototype.activeNodeNearWin = function(t) {
                    if (!this.nodeEffNearWin) {
                        S.Windown.Medusa.activeMask(!0);
                        for (var e = t; e < 6; e++) S.Windown.Medusa.activeMask(!1, e);
                        for (e = 0; e < t; e++) this.listColum[e].getListSymbolResult().forEach(function(t) {
                            return t.effectScaterShowFS()
                        });
                        null == this.nodeEffNearWin && (this.nodeEffNearWin = S.Windown.Medusa.asset.getNearWin(), this.nodeEffNearWin.parent = S.Windown.Medusa.parentEffect, this.nodeEffNearWin.getComponent(M.default).init(t), S.Windown.Medusa.infoBar.showOneMoreScater(), S.Windown.Medusa.audio.playEffect(S.Windown.Medusa.audio.fastspinStart), S.Windown.Medusa.audio.playEffect(S.Windown.Medusa.audio.symScatterActive))
                    }
                }, e.prototype.offNearWin = function() {
                    S.Windown.Medusa.activeMask(!1), S.Windown.Medusa.audio.stopEffect(S.Windown.Medusa.audio.fastspinStart), this.nodeEffNearWin && this.nodeEffNearWin.getComponent(M.default).offNearWin(), this.nodeEffNearWin = null
                }, e.prototype.activeNearWinNoSap = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return s(t, void 0, void 0, function() {
                            var t, n;
                            return c(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 4, , 5]), t = S.Windown.Medusa.stateSpin.curentCountScater > 2 && !S.Windown.Medusa.stateSpin.isMaxSpeed, this.nodeEffNearWinNoSap || !t ? (e(null), [2]) : null != this.nodeEffNearWinNoSap ? [3, 3] : (this.nodeEffNearWinNoSap = S.Windown.Medusa.asset.getNearWinNoSap(), this.nodeEffNearWinNoSap.parent = S.Windown.Medusa.parentEffect, [4, S.Windown.Medusa.getMakeDelay(.3).prosime]);
                                    case 1:
                                        return o.sent(), [4, S.Windown.Medusa.getPromise(this.nodeEffNearWinNoSap.getComponent(b.default).init())];
                                    case 2:
                                        o.sent(), o.label = 3;
                                    case 3:
                                        return e(null), [3, 5];
                                    case 4:
                                        return n = o.sent(), v.Util.ThrowErrProsime(n), [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    })
                }, e.prototype.offNearWinNoSap = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return s(t, void 0, void 0, function() {
                            var t;
                            return c(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 3, , 4]), this.nodeEffNearWinNoSap ? (this.nodeEffNearWinNoSap.getComponent(b.default).offNearWin(), this.nodeEffNearWinNoSap = null, [4, S.Windown.Medusa.getMakeDelay(.3).prosime]) : [3, 2];
                                    case 1:
                                        n.sent(), n.label = 2;
                                    case 2:
                                        return e(null), [3, 4];
                                    case 3:
                                        return t = n.sent(), v.Util.ThrowErrProsime(t), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    })
                }, e.prototype.initRandomResult = function() {
                    for (var t = 0, e = 0, n = this.listColum; e < n.length; e++) {
                        var o = n[e];
                        o.stateWhel != p.default.RUN && (t = o.index + 1)
                    }
                    var i = this.getRdViewForLoop(t);
                    this.listColum.forEach(function(e, n) {
                        var o;
                        e.index >= t && (o = e.listResultRandomCache).unshift.apply(o, i[n - t])
                    })
                }, e.prototype.setupView = function() {
                    var t = cc.find("Game", this.node);
                    if (cc.sys.isMobile) t.angle = 90, this.bkgSprite.angle = 90, this.bkgSprite.scale = 1280 / 720;
                    else {
                        var e = cc.winSize.height / 1280;
                        t.angle = 0, t.scale = e, this.bkgSprite.angle = 0;
                        var n = this.bkgSprite.addComponent(cc.Widget);
                        n.left = 0, n.right = 0, n.bottom = 0, n.top = 0
                    }
                    S.Windown.UIManager.changeRotation(!0)
                }, e.prototype.sendClickSpin = function() {
                    if (null != this.sfsObjTest) return f.ConectManager.getIns().sendRequest("testSpin", this.sfsObjTest, this.roomSFS), this.sfsObjTest = null, void cc.log("send test ne");
                    if (null != this.sfsObjTest2) return f.ConectManager.getIns().sendRequest("testSpin2", this.sfsObjTest2, this.roomSFS), this.sfsObjTest2 = null, void cc.log("send test ne");
                    var t = f.ConectManager.getIns().getSFSObj();
                    t.putInt("bet", this.curRoomBet), f.ConectManager.getIns().sendRequest(l.REQUEST_CODE.SpinMedusa, t, this.roomSFS)
                }, e.prototype.onClickBtnSpin = function() {
                    return s(this, void 0, void 0, function() {
                        var t;
                        return c(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 4, , 5]), this.stateReel != p.default.WAITING ? [3, 2] : (this.audio.playEffect(this.audio.spinBtn), this.stateReel = p.default.RUN, this.setStateEffBtnSpin(), this.offAllBtn(), this.infoBar.reset(), this.isDoneStartSpin = !1, this.sendClickSpin(), [4, S.Windown.Medusa.getPromise(this.stateSpin.onStart())]);
                                case 1:
                                    return e.sent(), this.isDoneStartSpin = !0, cc.log("co the nhay voa start nay"), [3, 3];
                                case 2:
                                    this.stateReel == p.default.CAN_STOP ? this.stateSpin.isMaxSpeed || (cc.log("nhay vao forestop ne"), this.stateReel = p.default.RUN, this.unschedule(this.funEnd), this.stateSpin.onForceEnd()) : this.stateReel == p.default.STOP || this.stateReel == p.default.SHOW_EFFECT && (this.stateSpin.resetForNextNextSpin(), this.onClickBtnSpin()), e.label = 3;
                                case 3:
                                    return [3, 5];
                                case 4:
                                    return t = e.sent(), v.Util.ThrowErrProsime(t), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.showContentTip = function() {}, e.prototype.updateNewTotalLine = function(t) {
                    this.currentTotalLine *= t, this.lb_TotalLine.string = this.currentTotalLine.toString()
                }, e.prototype.resetForNewGame = function() {
                    this.stateReel = p.default.WAITING, this.listColum.forEach(function(t) {
                        return t.stateWhel = p.default.WAITING
                    }), this.setStateEffBtnSpin()
                }, e.prototype.resetLbTotalLine = function() {
                    this.currentTotalLine = 1, this.lb_TotalLine.string = "..."
                }, e.prototype.setStateEffBtnSpin = function() {
                    var t = cc.find("sb_arrow", this.btnSpin),
                        e = cc.find("sb_arrow_blur", this.btnSpin);
                    if (this.stateReel != p.default.STOP) {
                        var n = cc.Material.getBuiltinMaterial("2d-sprite");
                        t.getComponent(cc.Sprite).setMaterial(0, n);
                        var o = cc.find("sb_vfx_d_add", this.btnSpin);
                        o.stopAllActions(), o.runAction(cc.fadeOut(.3))
                    }
                    if (this.stateReel == p.default.WAITING || this.stateReel == p.default.SHOW_EFFECT) e.active = !1, t.active = !0, t.stopAllActions(), t.runAction(cc.repeatForever(cc.rotateBy(3, -360)));
                    else if (this.stateReel == p.default.RUN) cc.log("play anim"), this.btnSpin.getComponent(cc.Animation).play("StartBtn"), e.active = !0, e.stopAllActions(), e.runAction(cc.repeatForever(cc.rotateBy(.3, -360))), t.active = !1, this.infoBar.showRdContent();
                    else if (this.stateReel == p.default.STOP) {
                        t.active = !0, t.stopAllActions(), e.active = !1;
                        var i = cc.Material.getBuiltinMaterial("2d-gray-sprite");
                        t.getComponent(cc.Sprite).setMaterial(0, i)
                    }
                }, e.prototype.setLbFreeSpinLeft = function(t) {
                    cc.log("num fs: " + t);
                    var e = this.lb_FSLeft.node.parent;
                    this.lb_FSLeft.string = t.toString(), t < 1 ? (cc.find("last_spin", e).active = !0, cc.find("remaining_spin", e).active = !1, this.lb_FSLeft.node.active = !1) : (cc.find("last_spin", e).active = !1, cc.find("remaining_spin", e).active = !0, this.lb_FSLeft.node.active = !0)
                }, e.prototype.setCountAuto = function(t) {
                    this.lb_CountAuto.node.parent.active = !(t < 1), this.lb_CountAuto.string = t.toString()
                }, e.prototype.showMoneyAllWin = function(t) {
                    cc.log("money win: " + t), this.labelChipReviceInBox.setMoney(t), S.Windown.MoneyUser.removeDelay(this.gameType)
                }, e.prototype.offLbFree = function() {
                    this.lb_FSLeft.node.parent.active = !1
                }, e.prototype.onClickSendObjTest = function() {
                    return s(this, void 0, void 0, function() {
                        return c(this, function() {
                            return [2]
                        })
                    })
                }, e.prototype.onClickSendFixData = function() {
                    var t = f.ConectManager.getIns().getSFSObj();
                    this.sfsObjTest2 = t, this.onClickBtnSpin()
                }, e.prototype.onClickTest = function() {
                    return s(this, void 0, void 0, function() {
                        return c(this, function() {
                            return this.activeNodeNearWin(2), [2]
                        })
                    })
                }, e.prototype.onClickResetCountAuto = function() {
                    this.stateSpin.countAutoSpin = 0, this.lb_CountAuto.node.parent.active = !1, S.Windown.Medusa.audio.playClick()
                }, e.prototype.onClickItemAutoSpin = function(t) {
                    S.Windown.Medusa.audio.playClick(), this.btnStartAuto.node.parent.getComponentInChildren(cc.ToggleContainer).allowSwitchOff = !1;
                    var e = t.node.name,
                        n = Number(e);
                    this.stateSpin.countAutoSpin = n, this.btnStartAuto.interactable = !0, this.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color, "#FF8E26")
                }, e.prototype.onClickStartAutoSpin = function() {
                    this.onClickBtnSpin(), this.onClickCloseListAuto(), S.Windown.Medusa.stateSpin.countAutoSpin > 0 && S.Windown.Medusa.setCountAuto(S.Windown.Medusa.stateSpin.countAutoSpin)
                }, e.prototype.onClickShowListAuto = function() {
                    S.Windown.Medusa.audio.playClick(), this.nodeChooseAuto.active = !0, this.nodeChooseAuto.opacity = 0, this.nodeChooseAuto.runAction(cc.fadeIn(.3)), this.btnStartAuto.interactable = !1, this.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color, "#945F00")
                }, e.prototype.onClickCloseListAuto = function() {
                    var t = this;
                    S.Windown.Medusa.audio.playClick(), this.nodeChooseAuto.stopAllActions(), this.nodeChooseAuto.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                        var e = t.btnStartAuto.node.parent.getComponentInChildren(cc.ToggleContainer);
                        e.allowSwitchOff = !0, e.toggleItems.forEach(function(t) {
                            t.isChecked && t.uncheck()
                        }), t.nodeChooseAuto.active = !1, t.btnStartAuto.interactable = !1, t.btnStartAuto.node.children[0].color = cc.Color.fromHEX(new cc.Color, "#945F00")
                    })))
                }, e.prototype.getMaxIndexByResult = function(t, e) {
                    for (var n = t, o = [], i = t; i < e.length; i++) {
                        for (var r = e[i], s = !1, c = 0; c < r.length; c++) {
                            var a = r[c];
                            if (a.g && a.s > 1 && 12 != a.i && -1 != a.g && !o.includes(a.g)) {
                                var u = i + a.s - 1;
                                u > n && (n = u), s = !0, o.push(a.g)
                            }
                        }
                        if (!s && i >= n) return n
                    }
                }, e.prototype.convertResult = function(t, e, n) {
                    var o = this;
                    t = JSON.parse(S.Windown.SFSArrToJson(t));
                    var i = [];
                    return t.forEach(function(t, r) {
                        var s = Object.create(null);
                        s.listSFSObj = [], s.mutil = cc.misc.clampf(n[r], 1, 9999999), s.agWin = 0, t.forEach(function(n, o) {
                            var i = [];
                            if (n.forEach(function(t) {
                                    t.g = t.g || -1, t.s = t.s || 1, t.m = t.m || 1, i.push(t)
                                }), i.reverse(), s.listSFSObj.push(i), o == t.length - 1) {
                                var r = e.shift();
                                r && (r.lsIdItem = JSON.parse(r.lsIdItem), r.lsstack = JSON.parse(r.lsstack), r.lsAgWin = JSON.parse(r.lsAgWin), r.lsAgWin.length > 0 && (s.listItemWin = r, s.isNoSap = !0), r.lsAgWin.forEach(function(t) {
                                    s.agWin += t
                                }))
                            }
                        }), o.addFielActiveGroupInList(s.listSFSObj), s.countScater = o.getCountScater(s.listSFSObj), i.push(s)
                    }), i
                }, e.prototype.addFielActiveGroupInList = function(t) {
                    var e = [];
                    t.forEach(function(t) {
                        t.forEach(function(t) {
                            t.g && -1 != t.g && !e.includes(t.g) && (t.a = !0, e.push(t.g))
                        })
                    })
                }, e.prototype.setResult = function() {}, e.prototype.getListActiveScaster = function(t) {
                    for (var e = [], n = 0, o = 0, i = 0; i < t.length; i++) t[i].forEach(function(t) {
                        12 == t.i && n++
                    }), n > 2 ? (0 == o && (o = i), e.push(!0)) : e.push(!1);
                    var r = [],
                        s = S.Windown.Medusa.getMaxIndexByResult(0, t);
                    for (r.push(s); s < 5;) s = S.Windown.Medusa.getMaxIndexByResult(s + 1, t), r.push(s);
                    if (0 != o) {
                        for (var c = o, a = 0, u = r; a < u.length; a++) {
                            var l = u[a];
                            if (l >= c) {
                                c = l;
                                break
                            }
                        }
                        for (i = 0; i < c + 1; i++) e[i] = !1
                    }
                    return e
                }, e.prototype.onClickChangeBet = function(t, e) {
                    if (S.Windown.Medusa.audio.playClick(), this.listConfigBet.length < 1) S.Windown.Dialog.showLog(d.TextDefine.Error);
                    else {
                        var n = -1;
                        for (var o in this.listConfigBet)
                            if (this.listConfigBet[o].bet == this.curRoomBet) {
                                n = parseInt(o);
                                break
                            }
                        0 == e ? n-- : n++, n < 0 && (n = this.listConfigBet.length - 1), n > this.listConfigBet.length - 1 && (n = 0), this.curRoomBet = this.listConfigBet[n].bet, this.lb_totalBet.string = S.Windown.formatNumber(this.totalLineBet * this.curRoomBet)
                    }
                }, e.prototype.onClickCachChoi = function() {
                    return s(this, void 0, void 0, function() {
                        var t;
                        return c(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return S.Windown.Medusa.audio.playClick(), S.Windown.UIManager.showLoading(), [4, S.Windown.loadRes(this.gameType.toString(), "Frefabs/CachChoi", cc.Prefab)];
                                case 1:
                                    return t = e.sent(), cc.instantiate(t).parent = S.Windown.Medusa.node.getChildByName("Game"), S.Windown.UIManager.hideLoading(), [2]
                            }
                        })
                    })
                }, e.prototype.onClickBackToLobby = function() {
                    S.Windown.Medusa.audio.playClick(), this.roomSFS ? f.ConectManager.getIns().sendLeaveRoom(this.roomSFS) : cc.director.loadScene("main")
                }, e.prototype.onClickTurbo = function() {
                    S.Windown.Medusa.audio.playClick();
                    var t = this.toggleTurbo.isChecked;
                    this.toggleTurbo.node.children[1].active = !t, this.stateSpin.isMaxSpeed = t, t ? S.Windown.UIManager.showAlertMini("\u0110\xe3 b\u1eadt quay nhanh") : S.Windown.UIManager.showAlertMini("\u0110\xe3 t\u1eaft quay nhanh")
                }, e.prototype.onClickSeting = function() {
                    if (S.Windown.Medusa.audio.playClick(), cc.log("click onClickSeting"), this.isShowBtnPlay = !this.isShowBtnPlay, this.isShowBtnPlay) t = cc.v2(0, -750), this.nodeBtnPlay.runAction(cc.fadeIn(.4)), this.nodeBtnSeting.runAction(cc.spawn(cc.fadeOut(.3), cc.moveTo(.3, t)));
                    else {
                        this.nodeBtnPlay.stopAllActions(), this.nodeBtnSeting.stopAllActions();
                        var t = cc.v2(0, -525.279);
                        this.nodeBtnPlay.runAction(cc.fadeOut(.3)), this.nodeBtnSeting.opacity = 0, this.nodeBtnSeting.runAction(cc.spawn(cc.fadeIn(.4), cc.moveTo(.4, t)))
                    }
                }, e.prototype.getCountScater = function(t) {
                    var e = 0;
                    return t.forEach(function(t) {
                        t.forEach(function(t) {
                            12 == t.i && e++
                        })
                    }), e
                }, e.prototype.getMakeDelay = function(t) {
                    return S.Windown.CpPromise.getDelay(t, this)
                }, e.prototype.getPromise = function(t) {
                    return S.Windown.CpPromise.getDelayByPromise(t, this).prosime
                }, e.prototype.getPromiseAll = function(t) {
                    return S.Windown.CpPromise.getDelayPromiseAll(t, this).prosime
                }, e.prototype.clearAllMakeDelay = function() {
                    S.Windown.CpPromise.targetOff(this)
                }, e.prototype.activeAllBtn = function() {
                    this.listNodeDeactive.forEach(function(t) {
                        t.interactable = !0, t.node.children.forEach(function(t) {
                            t.color = cc.Color.fromHEX(new cc.Color, "#FFD500")
                        })
                    })
                }, e.prototype.offAllBtn = function() {
                    this.listNodeDeactive.forEach(function(t) {
                        t.interactable = !1, t.node.children.forEach(function(t) {
                            t.color = cc.Color.fromHEX(new cc.Color, "#999999")
                        })
                    })
                }, e.prototype.truTienBet = function(t, e) {
                    0 != t && S.Windown.MoneyUser.subMoney(t, e)
                }, e.prototype.effectShake = function(t, e) {
                    void 0 === t && (t = .2), void 0 === e && (e = 10)
                }, e.prototype.onClickLichSu = function() {
                    return s(this, void 0, void 0, function() {
                        var t;
                        return c(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return S.Windown.Medusa.audio.playClick(), S.Windown.UIManager.showLoading(), [4, S.Windown.loadRes(this.gameType.toString(), "Frefabs/LichSu", cc.Prefab)];
                                case 1:
                                    return t = e.sent(), this._popupLichSu = cc.instantiate(t).getComponent(O.default), this._popupLichSu.node.parent = S.Windown.Medusa.node.getChildByName("Game"), this._popupLichSu.show(), [2]
                            }
                        })
                    })
                }, e.prototype.update = function() {}, r([T(g.default)], e.prototype, "asset", void 0), r([T(cc.Node)], e.prototype, "bkgSprite", void 0), r([T(cc.Node)], e.prototype, "itemColum", void 0), r([T(cc.Node)], e.prototype, "parentItem", void 0), r([T(cc.Node)], e.prototype, "parentEffect", void 0), r([T(cc.Node)], e.prototype, "parentItemFront", void 0), r([T(cc.Node)], e.prototype, "parentItemActive", void 0), r([T(cc.Node)], e.prototype, "nodeLine", void 0), r([T(_.default)], e.prototype, "effect", void 0), r([T(y.default)], e.prototype, "labelChipReviceInBox", void 0), r([T(cc.Label)], e.prototype, "lb_totalBet", void 0), r([T(m.default)], e.prototype, "lb_FSLeft", void 0), r([T(m.default)], e.prototype, "lb_TotalLine", void 0), r([T(m.default)], e.prototype, "lb_CountAuto", void 0), r([T(W.default)], e.prototype, "infoBar", void 0), r([T(A.default)], e.prototype, "muitlCtr", void 0), r([T(cc.Node)], e.prototype, "btnSpin", void 0), r([T(cc.Node)], e.prototype, "parentMask", void 0), r([T(cc.Node)], e.prototype, "nodeChooseAuto", void 0), r([T(w.default)], e.prototype, "audio", void 0), r([T([cc.Button])], e.prototype, "listNodeDeactive", void 0), r([T(cc.Node)], e.prototype, "nodeBtnPlay", void 0), r([T(cc.Node)], e.prototype, "nodeBtnSeting", void 0), r([T(cc.Toggle)], e.prototype, "toggleTurbo", void 0), r([T(cc.Button)], e.prototype, "btnStartAuto", void 0), r([T(sp.Skeleton)], e.prototype, "spineBot", void 0), r([R], e)
            }(cc.Component);
        n.default = P, cc._RF.pop()
    }, {
        "../../../Scritps/DefineTs/EVENT_MANAGER": void 0,
        "../../../Scritps/DefineTs/PlayerPP": void 0,
        "../../../Scritps/DefineTs/REQUEST_CODE": void 0,
        "../../../Scritps/DefineTs/StateReelSlot": void 0,
        "../../../Scritps/DefineTs/TextDefine": void 0,
        "../../../Scritps/Game/GAME_TYPE": void 0,
        "../../../Scritps/Network/ConectManager": void 0,
        "../../../Scritps/Obs/LbMoneyChange": void 0,
        "../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../Scritps/Util": void 0,
        "../../../Scritps/Windown": void 0,
        "./AssetMedusa": "AssetMedusa",
        "./AudioMedusa": "AudioMedusa",
        "./Effect/NearFreeSpinMedusa": "NearFreeSpinMedusa",
        "./Effect/NearFreeSpinMedusaNoSap": "NearFreeSpinMedusaNoSap",
        "./EffectMedusa": "EffectMedusa",
        "./InfoBarControllerMedusa": "InfoBarControllerMedusa",
        "./ItemSlotMedusa": "ItemSlotMedusa",
        "./LichSuMedusa": "LichSuMedusa",
        "./MutilControlMedusa": "MutilControlMedusa",
        "./SpinNormalMedusa": "SpinNormalMedusa"
    }],
    MutilControlMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "23bfcuN9LNKV6ovATr6hmWH", "MutilControlMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../Scritps/Other/LbMonoSpace"),
            u = t("../../../Scritps/Windown"),
            l = t("./ItemMutilFsMedusa"),
            p = t("./ItemMutilNomalMedusa"),
            d = cc._decorator,
            h = d.ccclass,
            f = d.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.itemMutilFS = null, e.itemMutilNormal = null, e.anim1 = null, e.anim2 = null, e.animLoop = null, e.currentItemMutil = null, e.nodeMultilFade = null, e
                }
                return i(e, t), e.prototype.start = function() {
                    this.itemMutilFS.mutilMng = this, this.itemMutilNormal.mutilMng = this, this.itemMutilNormal.init()
                }, e.prototype.take = function(t) {
                    this.currentItemMutil.take(t)
                }, e.prototype.animMutil = function() {
                    var t = this;
                    return new Promise(function(e) {
                        var n = u.Windown.Medusa.stateSpin.isMaxSpeed ? 3 : 1,
                            o = t.currentItemMutil.lbMutil.node.parent;
                        t.currentItemMutil.animRevice(), o.zIndex = cc.macro.MAX_ZINDEX, u.Windown.Medusa.audio.playEffect(u.Windown.Medusa.audio.multiFly), o.stopAllActions(), o.runAction(cc.fadeIn(.2)), o.runAction(cc.speed(cc.sequence(cc.scaleTo(.2, .7).easing(cc.easeSineOut()), cc.scaleTo(.2, .5).easing(cc.easeSineIn())), 1 * n)), t.nodeMultilFade.getComponentInChildren(a.default).string = t.currentItemMutil.lbMutil.string, t.nodeMultilFade.stopAllActions(), t.nodeMultilFade.scale = .65, t.nodeMultilFade.opacity = 0, t.nodeMultilFade.y = 534.06, t.nodeMultilFade.runAction(cc.speed(cc.sequence(cc.delayTime(.1), cc.spawn(cc.fadeTo(.1, 200), cc.sequence(cc.scaleTo(.2, .9), cc.scaleTo(.3, .8)), cc.sequence(cc.delayTime(0), cc.moveTo(.7, 0, 141.076).easing(cc.easeSineOut()))), cc.sequence(cc.spawn(cc.moveTo(.15, 0, -250).easing(cc.easeCubicActionIn()), cc.scaleTo(.1, .6).easing(cc.easeCubicActionIn())), cc.callFunc(e), cc.spawn(cc.fadeOut(.4), cc.scaleTo(.4, 1)))), 1 * n))
                    })
                }, e.prototype.startFreeSpin = function(t) {
                    this.itemMutilFS.init(t)
                }, e.prototype.endFreeSpin = function() {
                    this.itemMutilNormal.init()
                }, e.prototype.resetForNextSpin = function() {
                    return s(this, void 0, void 0, function() {
                        return c(this, function() {
                            return this.currentItemMutil.resetForNextSpin(), [2]
                        })
                    })
                }, r([f(l.default)], e.prototype, "itemMutilFS", void 0), r([f(p.default)], e.prototype, "itemMutilNormal", void 0), r([f(cc.Animation)], e.prototype, "anim1", void 0), r([f(cc.Animation)], e.prototype, "anim2", void 0), r([f(cc.Animation)], e.prototype, "animLoop", void 0), r([f(cc.Node)], e.prototype, "nodeMultilFade", void 0), r([h], e)
            }(cc.Component);
        n.default = y, cc._RF.pop()
    }, {
        "../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../Scritps/Windown": void 0,
        "./ItemMutilFsMedusa": "ItemMutilFsMedusa",
        "./ItemMutilNomalMedusa": "ItemMutilNomalMedusa"
    }],
    NearFreeSpinMedusaNoSap: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b9473Z7dLNEUKJaH1IV3wD4", "NearFreeSpinMedusaNoSap");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../../Scritps/Util"),
            u = t("../../../../Scritps/Windown"),
            l = cc._decorator,
            p = l.ccclass,
            d = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._listItemNearWin = [], e.nodeChieuSang = null, e.indexCurrentColum = 0, e
                }
                return i(e, t), e.prototype.init = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return s(t, void 0, void 0, function() {
                            var t, n, o, i, r, s, l, p, d, h, f, y = this;
                            return c(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        c.trys.push([0, 6, , 7]), this.node.active = !0, this.node.setPosition(u.Windown.convertNodeInOtherNode(u.Windown.Medusa.parentItem, this.node.parent)), t = null, n = null, o = this.node.children[0], u.Windown.Medusa.listColum.forEach(function(e) {
                                            var i = e.getListYByListResult(),
                                                r = e.getListSymbolResult().filter(function(t) {
                                                    return !t.checkIsInView() || (t.effectNearWinScater(!1), !1)
                                                });
                                            if (r.reverse(), r.length > 0) {
                                                null == t && (t = e), n = e;
                                                for (var s = 0; s < r.length; s++) {
                                                    var c = r[s],
                                                        a = null;
                                                    (a = cc.instantiate(o)).active = !0, a.opacity = 0, a.runAction(cc.fadeIn(.2)), a.parent = u.Windown.Medusa.parentItemActive, a.zIndex = cc.macro.MAX_ZINDEX, a.height = c.node.height, a.setPosition(cc.v2(c.itemColum.node.x, i[c.getIndexOf() - 1])), y._listItemNearWin.push(a);
                                                    for (var l = s + 1; l < r.length; l++) {
                                                        var p = r[l];
                                                        if (!(c.getIndexOf() - p.getIndexOf() < 2)) break;
                                                        a.height += c.size.height * c.sizeItem, a.y += c.size.height * c.sizeItem / 2, s = l
                                                    }
                                                }
                                            }
                                        }), u.Windown.Medusa.audio.playEffect(u.Windown.Medusa.audio.heartbeatNoise, .7), u.Windown.Medusa.activeMask(!0), u.Windown.Medusa.infoBar.showOneMoreScater(), this.nodeChieuSang.active = !0, this.nodeChieuSang.parent = cc.find("Game", u.Windown.Medusa.node), this.nodeChieuSang.setPosition(u.Windown.convertNodeInOtherNode(u.Windown.Medusa.btnSpin, this.nodeChieuSang.parent)), i = cc.find("NearFSSb", this.nodeChieuSang), r = cc.v2(t.node.x, 0), s = cc.v2(n.node.x, 0), l = cc.v2((r.x + s.x) / 2, 200), cc.log(l.toString()), l = u.Windown.convertPosInOtherNode(l, n.node.parent, this.nodeChieuSang), p = l.clone().subSelf(i.getPosition()), d = 180 * Math.atan2(p.x, p.y) / Math.PI, i.angle = -d, h = 0, c.label = 1;
                                    case 1:
                                        return h < 5 ? (u.Windown.Medusa.audio.playEffectNoStop(u.Windown.Medusa.audio.heartbeat), [4, u.Windown.Medusa.getMakeDelay(.8).prosime]) : [3, 4];
                                    case 2:
                                        c.sent(), c.label = 3;
                                    case 3:
                                        return h++, [3, 1];
                                    case 4:
                                        return u.Windown.Medusa.listColum.forEach(function(t) {
                                            t.getListSymbol().forEach(function(t) {
                                                return t.removeAddScater()
                                            })
                                        }), [4, u.Windown.Medusa.getMakeDelay(.8).prosime];
                                    case 5:
                                        return c.sent(), u.Windown.Medusa.activeMask(!1), e(null), [3, 7];
                                    case 6:
                                        return f = c.sent(), a.Util.ThrowErrProsime(f), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    })
                }, e.prototype.offNearWin = function() {
                    var t = this;
                    this._listItemNearWin.forEach(function(e) {
                        e.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
                            t.node.destroy()
                        })))
                    }), this.node.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
                        t.node.destroy()
                    }))), this.nodeChieuSang.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
                        t.nodeChieuSang.destroy()
                    })))
                }, r([d(cc.Node)], e.prototype, "nodeChieuSang", void 0), r([p], e)
            }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../../../../Scritps/Util": void 0,
        "../../../../Scritps/Windown": void 0
    }],
    NearFreeSpinMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a3972CLB41Kf6Y3Q7IDHZgr", "NearFreeSpinMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../../Scritps/Windown"),
            c = cc._decorator,
            a = c.ccclass,
            u = c.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.parent1 = null, e.parent2 = null, e.nodeChieuSang = null, e
                }
                return i(e, t), e.prototype.init = function(t) {
                    this.node.width = 122 * (6 - t) + 278;
                    for (var e = this.parent1.children[0], n = this.parent2.children[0], o = 0, i = 6 - t; o < i; o++) {
                        var r = this.parent1.children[o];
                        null == r && (r = cc.instantiate(e), this.parent1.addChild(r));
                        var c = this.parent2.children[o];
                        null == c && (c = cc.instantiate(n), this.parent2.addChild(c))
                    }
                    var a = s.Windown.Medusa.listColum,
                        u = cc.v2((a[t].node.x + a[5].node.x) / 2, -s.Windown.Medusa.parentItem.height / 2),
                        l = s.Windown.convertPosInOtherNode(u, s.Windown.Medusa.parentItem, s.Windown.Medusa.parentEffect);
                    this.node.setPosition(l), this.node.active = !0, this.nodeChieuSang.parent = cc.find("Game", s.Windown.Medusa.node), this.nodeChieuSang.setPosition(s.Windown.convertNodeInOtherNode(s.Windown.Medusa.btnSpin, this.nodeChieuSang.parent));
                    var p = cc.find("NearFSSb", this.nodeChieuSang),
                        d = cc.v2(this.node.x - this.node.width / 2 + 300, this.node.y + this.node.height / 2 - 50),
                        h = cc.v2(this.node.x + this.node.width / 2 - 200, this.node.y),
                        f = s.Windown.convertPosInOtherNode(d, s.Windown.Medusa.parentEffect, this.nodeChieuSang),
                        y = s.Windown.convertPosInOtherNode(h, s.Windown.Medusa.parentEffect, this.nodeChieuSang),
                        m = f.clone().subSelf(p.getPosition()),
                        v = 180 * Math.atan2(m.x, m.y) / Math.PI,
                        S = y.clone().subSelf(p.getPosition()),
                        g = 180 * Math.atan2(S.x, S.y) / Math.PI;
                    p.angle = -v, p.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(2, g).easing(cc.easeSineInOut()), cc.rotateTo(2, v).easing(cc.easeSineInOut()))))
                }, e.prototype.offNearWin = function() {
                    var t = this;
                    this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                        t.node.destroy()
                    }))), this.nodeChieuSang.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
                        t.nodeChieuSang.destroy()
                    })))
                }, r([u(cc.Node)], e.prototype, "parent1", void 0), r([u(cc.Node)], e.prototype, "parent2", void 0), r([u(cc.Node)], e.prototype, "nodeChieuSang", void 0), r([a], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../../../../Scritps/Windown": void 0
    }],
    SpinNormalMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7eddccQ7SZCZ7kVkLGrFp4l", "SpinNormalMedusa");
        var o = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            i = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../../Scritps/DefineTs/StateReelSlot"),
            s = t("../../../Scritps/Util"),
            c = t("../../../Scritps/Windown"),
            a = function() {
                function t() {
                    this.listFunShowOceLine = [], this.funShowOceLine = null, this.listColum = [], this.effect = null, this.isMaxSpeed = !1, this.isAutoSpin = !1, this.lastAutoSpin = !1, this.countAutoSpin = 0, this.lastFreeSpinLeft = 0, this.freeSpinLeft = 0, this.freeSpinCache = 0, this.moneyTotalFs = 0, this.curentCountScater = 0, this.isShowNearWin = !1, this.listColum = c.Windown.Medusa.listColum, this.effect = c.Windown.Medusa.effect
                }
                return t.prototype.onStart = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return o(t, void 0, void 0, function() {
                            var t;
                            return i(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        try {
                                            for (this.removeAllMutilAdded(), t = 0; t < this.listColum.length; t++) this.listColum[t].runSpin();
                                            c.Windown.Medusa.audio.playEffect(c.Windown.Medusa.audio.spinActiveLoop, .5, !0)
                                        } catch (o) {
                                            s.Util.ThrowErrProsime(o)
                                        }
                                        return [4, c.Windown.Medusa.getMakeDelay(.4).prosime];
                                    case 1:
                                        return n.sent(), e(null), [2]
                                }
                            })
                        })
                    })
                }, t.prototype.onEnd = function() {
                    return o(this, void 0, void 0, function() {
                        var t, e, n, o, a, u, l, p, d, h, f;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    for (i.trys.push([0, 14, , 15]), cc.log("onend:========"), t = c.Windown.Medusa.listResultConvert, e = c.Windown.Medusa.getListActiveScaster(t[0].listSFSObj), n = 0, o = [], this.isShowNearWin = !1, a = 0, u = e; a < u.length; a++)
                                        if (h = u[a]) {
                                            this.isShowNearWin = !0;
                                            break
                                        }
                                    return this.curentCountScater = t[0].countScater, this.isMaxSpeed ? [3, 2] : [4, c.Windown.Medusa.getMakeDelay(.3).prosime];
                                case 1:
                                    i.sent(), i.label = 2;
                                case 2:
                                    c.Windown.Medusa.audio.stopEffect(c.Windown.Medusa.audio.spinActiveLoop), l = c.Windown.Medusa.getMaxIndexByResult(0, t[0].listSFSObj), p = 0, d = this.listColum, i.label = 3;
                                case 3:
                                    return p < d.length ? (h = d[p], this.isMaxSpeed ? [3, 5] : [4, c.Windown.Medusa.getPromise(h.stopSpin(e[n], e[n + 1], l))]) : [3, 8];
                                case 4:
                                    return i.sent(), [3, 6];
                                case 5:
                                    o.push(h.stopSpinIsFastSpin(e[n])), i.label = 6;
                                case 6:
                                    l == h.index && (l = c.Windown.Medusa.getMaxIndexByResult(l + 1, t[0].listSFSObj)), n++, i.label = 7;
                                case 7:
                                    return p++, [3, 3];
                                case 8:
                                    return this.isMaxSpeed ? [4, c.Windown.Medusa.getPromiseAll(o)] : [3, 11];
                                case 9:
                                    return i.sent(), [4, c.Windown.Medusa.getMakeDelay(.1).prosime];
                                case 10:
                                    return i.sent(), [3, 13];
                                case 11:
                                    return [4, c.Windown.Medusa.getMakeDelay(.2).prosime];
                                case 12:
                                    i.sent(), i.label = 13;
                                case 13:
                                    return c.Windown.Medusa.stateReel != r.default.RUN && this.handleStopAllColum(), [3, 15];
                                case 14:
                                    return f = i.sent(), s.Util.ThrowErrProsime(f), [3, 15];
                                case 15:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.setUpResuForNearFS = function() {}, t.prototype.handleErrSpin = function() {
                    return o(this, void 0, void 0, function() {
                        var t, e, n, o;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    for (c.Windown.Medusa.clearAllMakeDelay(), c.Windown.Medusa.audio.stopEffect(c.Windown.Medusa.audio.spinActiveLoop), t = [], e = 0, n = this.listColum; e < n.length; e++) o = n[e], t.push(o.forceStopSpin(!1));
                                    return [4, c.Windown.Medusa.getPromiseAll(t)];
                                case 1:
                                    return i.sent(), c.Windown.Medusa.audio.playEffect(c.Windown.Medusa.audio.spinStopQuick), c.Windown.Medusa.resetForNewGame(), [2]
                            }
                        })
                    })
                }, t.prototype.onForceEnd = function() {
                    return o(this, void 0, void 0, function() {
                        var t, e, n, o, r, a, u, l;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    for (i.trys.push([0, 3, , 4]), c.Windown.Medusa.clearAllMakeDelay(), t = c.Windown.Medusa.listResultConvert, e = c.Windown.Medusa.getListActiveScaster(t[0].listSFSObj), n = [], o = 0, r = 0, a = this.listColum; r < a.length; r++) u = a[r], n.push(u.forceStopSpin(e[o])), o++;
                                    return c.Windown.Medusa.audio.playEffect(c.Windown.Medusa.audio.spinStopQuick), [4, c.Windown.Medusa.getPromiseAll(n)];
                                case 1:
                                    return i.sent(), [4, c.Windown.Medusa.getMakeDelay(.25).prosime];
                                case 2:
                                    return i.sent(), this.handleStopAllColum(), [3, 4];
                                case 3:
                                    return l = i.sent(), s.Util.ThrowErrProsime(l), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.handleStopAllColum = function() {
                    return o(this, void 0, void 0, function() {
                        var t, e, n, o, a;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (i.trys.push([0, 14, , 15]), c.Windown.Medusa.stateReel == r.default.STOP) return [2];
                                    c.Windown.Medusa.stateReel = r.default.STOP, c.Windown.Medusa.audio.stopEffect(c.Windown.Medusa.audio.spinActiveLoop), c.Windown.Medusa.setStateEffBtnSpin(), t = c.Windown.Medusa.listResultConvert, this.offAllEffectSymbolScater(), this.activeAllSymbol(), c.Windown.Medusa.infoBar.offOneMoreScater(), c.Windown.Medusa.infoBar.showRdContent(), e = 0, n = t.length, i.label = 1;
                                case 1:
                                    return e < n ? (o = t[e], this.curentCountScater = o.countScater, o.listItemWin ? [4, c.Windown.Medusa.getPromise(this.checkAndShowLineAn(o.listItemWin, o.agWin))] : [3, 9]) : [3, 11];
                                case 2:
                                    return i.sent(), [4, c.Windown.Medusa.getPromise(c.Windown.Medusa.infoBar.showTakeMoneyTurn(o.agWin * o.mutil))];
                                case 3:
                                    return i.sent(), this.checkAndRemoveSymbol(o.listItemWin), [4, c.Windown.Medusa.getPromise(this.takeMutil(t[e + 1].mutil))];
                                case 4:
                                    return i.sent(), o.isNoSap ? [4, c.Windown.Medusa.getPromise(this.addNewSymbol(t[e + 1]))] : [3, 9];
                                case 5:
                                    return i.sent(), c.Windown.Medusa.infoBar.isShowOneMoreScater = !1, [4, c.Windown.Medusa.getPromise(this.moveSymbolInView())];
                                case 6:
                                    return i.sent(), [4, c.Windown.Medusa.getPromise(c.Windown.Medusa.activeNearWinNoSap())];
                                case 7:
                                    return i.sent(), [4, c.Windown.Medusa.getPromise(this.moveSymbolNew())];
                                case 8:
                                    i.sent(), i.label = 9;
                                case 9:
                                    c.Windown.Medusa.infoBar.offOneMoreScater(), i.label = 10;
                                case 10:
                                    return e++, [3, 1];
                                case 11:
                                    return [4, c.Windown.Medusa.getPromise(this.showMoneyTotalRevice())];
                                case 12:
                                    return i.sent(), [4, c.Windown.Medusa.getPromise(this.checkAndShowEffect())];
                                case 13:
                                    return i.sent(), this.resetForNextNextSpin(), [3, 15];
                                case 14:
                                    return a = i.sent(), s.Util.ThrowErrProsime(a), [3, 15];
                                case 15:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.checkIsNearFS = function() {
                    return this.isShowNearWin
                }, t.prototype.removeAllMutilAdded = function() {
                    var t = this;
                    return new Promise(function(e) {
                        c.Windown.Medusa.resetLbTotalLine(), c.Windown.Medusa.muitlCtr.resetForNextSpin(), t.listColum.forEach(function(t) {
                            t.getListSymbol().forEach(function(t) {
                                t.removeMutilWhenSpin()
                            })
                        }), e(null)
                    })
                }, t.prototype.checkAndRemoveSymbol = function(t) {
                    var e = this;
                    return new Promise(function() {
                        e.activeAllSymbol();
                        for (var n = t.lsIdItem, o = t.lsstack, i = 0, r = n.length; i < r; i++)
                            for (var s = 0; s < o[i] + 1; s++) e.listColum[s].checkAndRemoveItem(n[i], null)
                    })
                }, t.prototype.addNewSymbol = function(t) {
                    var e = this;
                    return new Promise(function(n) {
                        return o(e, void 0, void 0, function() {
                            var e, o, r, a;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        for (r in i.trys.push([0, 3, , 4]), e = c.Windown.Medusa.stateSpin.isMaxSpeed ? 3 : 1, o = [], this.listColum) o.push(this.listColum[r].addNewListSymbol(t.listSFSObj[r]));
                                        return [4, c.Windown.Medusa.getPromiseAll(o)];
                                    case 1:
                                        return i.sent(), [4, c.Windown.Medusa.getMakeDelay(1 / e).prosime];
                                    case 2:
                                        return i.sent(), n(null), [3, 4];
                                    case 3:
                                        return a = i.sent(), s.Util.ThrowErrProsime(a), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    })
                }, t.prototype.moveSymbolInView = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return o(t, void 0, void 0, function() {
                            var t, n, o;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        for (n in i.trys.push([0, 2, , 3]), t = [], this.listColum) t.push(this.listColum[n].moveSymbolInView());
                                        return [4, c.Windown.Medusa.getPromiseAll(t)];
                                    case 1:
                                        return i.sent(), e(null), [3, 3];
                                    case 2:
                                        return o = i.sent(), s.Util.ThrowErrProsime(o), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    })
                }, t.prototype.moveSymbolNew = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return o(t, void 0, void 0, function() {
                            var t, n, o, r, a, u;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        for (o in i.trys.push([0, 8, , 9]), t = [], n = [], this.listColum) n.push(o);
                                        r = 0, i.label = 1;
                                    case 1:
                                        return r < n.length ? (a = n[r], c.Windown.Medusa.nodeEffNearWinNoSap ? [4, c.Windown.Medusa.getPromise(this.listColum[a].moveSymbolNew())] : [3, 3]) : [3, 5];
                                    case 2:
                                        return i.sent(), [3, 4];
                                    case 3:
                                        t.push(this.listColum[a].moveSymbolNew()), i.label = 4;
                                    case 4:
                                        return r++, [3, 1];
                                    case 5:
                                        return [4, c.Windown.Medusa.getPromiseAll(t)];
                                    case 6:
                                        return i.sent(), [4, c.Windown.Medusa.getPromise(c.Windown.Medusa.offNearWinNoSap())];
                                    case 7:
                                        return i.sent(), e(null), [3, 9];
                                    case 8:
                                        return u = i.sent(), s.Util.ThrowErrProsime(u), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    })
                }, t.prototype.takeMutil = function(t) {
                    var e = this;
                    return new Promise(function(n) {
                        return o(e, void 0, void 0, function() {
                            var e, o;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 5, , 6]), e = c.Windown.Medusa.stateSpin.isMaxSpeed ? 3 : 1, c.Windown.Medusa.muitlCtr.currentItemMutil.mutil != t ? [4, c.Windown.Medusa.getMakeDelay(.3 / e).prosime] : [3, 3];
                                    case 1:
                                        return i.sent(), n(null), [4, c.Windown.Medusa.getMakeDelay(.5 / e).prosime];
                                    case 2:
                                        return i.sent(), c.Windown.Medusa.muitlCtr.take(t), [3, 4];
                                    case 3:
                                        n(null), i.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return o = i.sent(), s.Util.ThrowErrProsime(o), [3, 6];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    })
                }, t.prototype.offAllSymbol = function(t) {
                    void 0 === t && (t = !0), c.Windown.Medusa.activeMask(!0)
                }, t.prototype.activeAllSymbol = function() {
                    c.Windown.Medusa.activeMask(!1)
                }, t.prototype.checkAndShowLineAn = function(t, e) {
                    var n = this;
                    return new Promise(function(r) {
                        return o(n, void 0, void 0, function() {
                            var n, o, a, u, l, p, d;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        for (i.trys.push([0, 2, , 3]), this.offAllSymbol(), n = t.lsIdItem, o = t.lsstack, a = t.lsAgWin, u = 0, l = n.length; u < l; u++) {
                                            for (p = 0; p < o[u] + 1; p++) this.listColum[p].checkItemWin(n[u], null);
                                            a[u]
                                        }
                                        return [4, c.Windown.Medusa.getPromise(c.Windown.Medusa.infoBar.showTakeMoney(e))];
                                    case 1:
                                        return i.sent(), r(null), [3, 3];
                                    case 2:
                                        return d = i.sent(), s.Util.ThrowErrProsime(d), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    })
                }, t.prototype.effectDropScater = function() {
                    cc.log("effectDropScater"), c.Windown.Medusa.infoBar.effectDropOneMorScater(), this.listColum.forEach(function(t) {
                        t.getListSymbolResult().forEach(function(t) {
                            t.effectDropScater()
                        })
                    })
                }, t.prototype.offAllEffectSymbolScater = function() {
                    this.listColum.forEach(function(t) {
                        t.getListSymbolResult().forEach(function(t) {
                            t.removeAddScater()
                        })
                    })
                }, t.prototype.resetForNextNextSpin = function() {
                    var t = this;
                    this.listColum.forEach(function(t) {
                        t.getListSymbolResult().forEach(function(t) {
                            t.removeAddScater(!0)
                        })
                    }), c.Windown.Medusa.resetForNewGame(), this.freeSpinLeft > 0 ? c.Windown.Medusa.scheduleOnce(function() {
                        c.Windown.Medusa.setLbFreeSpinLeft(t.freeSpinLeft - 1), c.Windown.Medusa.onClickBtnSpin()
                    }, .5) : this.countAutoSpin > 0 ? c.Windown.Medusa.scheduleOnce(function() {
                        t.countAutoSpin--, c.Windown.Medusa.setCountAuto(t.countAutoSpin), c.Windown.Medusa.onClickBtnSpin()
                    }, .5) : c.Windown.Medusa.activeAllBtn()
                }, t.prototype.checkAndShowEffect = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return o(t, void 0, void 0, function() {
                            var t, n, o;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 5, , 6]), cc.log(c.Windown.Medusa.dataFinish.get("numFreeSpin")), t = c.Windown.Medusa.dataFinish.getBool("Scarter4"), n = c.Windown.Medusa.dataFinish.get("numFreeSpin"), this.freeSpinLeft = n, !t && this.lastFreeSpinLeft < 1 ? (e(null), [2]) : t ? [4, c.Windown.Medusa.getPromise(c.Windown.Medusa.effect.showTakeFreeSpin(n))] : [3, 2];
                                    case 1:
                                        i.sent(), i.label = 2;
                                    case 2:
                                        return 1 == this.lastFreeSpinLeft && this.freeSpinLeft < 1 ? [4, c.Windown.Medusa.getPromise(this.effect.showEndFree(this.moneyTotalFs))] : [3, 4];
                                    case 3:
                                        i.sent(), this.moneyTotalFs = 0, i.label = 4;
                                    case 4:
                                        return this.lastFreeSpinLeft = this.freeSpinLeft, e(null), [3, 6];
                                    case 5:
                                        return o = i.sent(), s.Util.ThrowErrProsime(o), [3, 6];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    })
                }, t.prototype.showMoneyTotalRevice = function() {
                    var t = this;
                    return new Promise(function(e) {
                        return o(t, void 0, void 0, function() {
                            var t, n;
                            return i(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), t = c.Windown.Medusa.dataFinish.get("agWin"), this.lastFreeSpinLeft > 0 && (this.moneyTotalFs += t), c.Windown.Medusa.activeMask(!1), t < 1 ? (e(null), [2]) : [4, c.Windown.Medusa.getPromise(c.Windown.Medusa.infoBar.showTotalMoney(t))];
                                    case 1:
                                        return o.sent(), c.Windown.Medusa.showMoneyAllWin(t), e(null), [3, 3];
                                    case 2:
                                        return n = o.sent(), s.Util.ThrowErrProsime(n), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    })
                }, t
            }();
        n.default = a, cc._RF.pop()
    }, {
        "../../../Scritps/DefineTs/StateReelSlot": void 0,
        "../../../Scritps/Util": void 0,
        "../../../Scritps/Windown": void 0
    }],
    StartFreeSpinMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f1e90dM6fRHro8tYVpOvlOK", "StartFreeSpinMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../../Scritps/Other/LbMonoSpace"),
            c = t("../../../../Scritps/Windown"),
            a = cc._decorator,
            u = a.ccclass,
            l = a.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lb = null, e.btnBatDau = null, e
                }
                return i(e, t), e.prototype.show = function(t) {
                    var e = this;
                    return new Promise(function(n) {
                        c.Windown.Medusa.audio.playBkgfs(), c.Windown.Medusa.audio.playEffect(c.Windown.Medusa.audio.fsTrans);
                        var o = e.getComponent(cc.Animation);
                        o.play("ShowFs1"), o.playAdditive("ShowFs2"), o.playAdditive("ShowFsLoop1"), o.playAdditive("ShowFsLoop2"), e.lb.setMoneyNoTime(t), e.btnBatDau.interactable = !1, e.btnBatDau.node.opacity = 0;
                        var i = function() {
                            e.node.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function() {
                                e.node.destroy()
                            }))), n(null)
                        };
                        e.scheduleOnce(function() {
                            c.Windown.Medusa.effect.swidthFS(!0), e.btnBatDau.interactable = !0;
                            var t = e.btnBatDau;
                            t.node.opacity = 0, t.node.runAction(cc.sequence(cc.fadeIn(1), cc.callFunc(function() {
                                t.node.once("click", i)
                            }), cc.delayTime(5), cc.callFunc(i)))
                        }, 1)
                    })
                }, r([l(s.default)], e.prototype, "lb", void 0), r([l(cc.Button)], e.prototype, "btnBatDau", void 0), r([u], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../../../../Scritps/Other/LbMonoSpace": void 0,
        "../../../../Scritps/Windown": void 0
    }],
    SymbolMedusa: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b2977aZkSBPBZo5EhouNcc0", "SymbolMedusa");
        var o, i = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(i = t[c]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, n, s) : i(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, i, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < i[1]) {
                                    s.label = i[1], i = r;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(r);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (c) {
                        r = [6, c], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Z_INDEX = n.TYPE_ITEM = void 0;
        var a, u = t("../../../Scritps/DefineTs/StateReelSlot"),
            l = t("../../../Scritps/Util"),
            p = t("../../../Scritps/Windown"),
            d = t("./Effect/EffectSymbolMedusa"),
            h = t("./Effect/ItemAddScaterMedusa"),
            f = t("./ItemXMedusa"),
            y = cc._decorator,
            m = y.ccclass,
            v = y.property;
        (function(t) {
            t[t.NONE = 0] = "NONE", t[t.BAC = 1] = "BAC", t[t.VANG = 2] = "VANG"
        })(n.TYPE_ITEM || (n.TYPE_ITEM = {})),
        function(t) {
            t[t.NORMAL = 0] = "NORMAL", t[t.BLOCK = 10] = "BLOCK", t[t.WILD = 100] = "WILD", t[t.BKG_SCATER = 200] = "BKG_SCATER", t[t.SCATER = 300] = "SCATER", t[t.ITEM_X = 600] = "ITEM_X", t[t.ACTIVE_WIN = 500] = "ACTIVE_WIN", t[t.ACTIVE_REMOVE = 550] = "ACTIVE_REMOVE"
        }(a = n.Z_INDEX || (n.Z_INDEX = {}));
        var S = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.sprite = null, e.spriteBkg = null, e.bkgScater = null, e.Frame = null, e.skeletonItem = null, e.listColorBkg = [null, null], e.isVectical = !0, e.nodeScater = null, e.size = new cc.Size(120, 122), e.itemColum = null, e.result = -1, e.groupId = -1, e.objSFS = null, e.sizeItem = 1, e.canRun = !1, e.efWin = null, e.lastPos = null, e.isShowEffectSpawn = !1, e.isFirtGroup = !1, e.isLastGroup = !1, e._itemX = null, e._mutil = 0, e._isInResult = !1, e
            }
            return i(e, t), e.prototype.onLoad = function() {
                var t = this;
                this.node.on(cc.Node.EventType.POSITION_CHANGED, function() {
                    t.bkgScater.position = t.node.position
                }, this)
            }, e.prototype.setItemColum = function(t) {
                this.itemColum = t
            }, e.prototype.setResult = function(t) {
                if (null != t) {
                    this.isFirtGroup = !1, this.isLastGroup = !1, this.objSFS = t, this.result = t.i + 1, this.sizeItem = t.s || 1, this.groupId = t.g || -1, this._mutil = t.m || 1, this.setSize(), this.skeletonItem.node.active = !1, this.itemColum.stateWhel == u.default.RUN && this.itemColum.deltaSlowDown > 2e3 ? this.setImgResult(!0) : this.setImgResult(!1), this.isShowEffectSpawn = !1, this.emitNewzIndex(), this.node.x = this.itemColum.node.x, this.node.opacity = 255, this.node.scale = .34 * this.sizeItem, this._itemX && this._itemX.node.destroy(), this._itemX = null;
                    var e = t.a || !1; - 1 != this.groupId && this.sizeItem > 1 && 13 != this.result && this.setPosInGroup(e)
                }
            }, e.prototype.emitNewzIndex = function() {
                this.bkgScater.active = !1, 13 == this.result ? (this.node.zIndex = a.SCATER, this.bkgScater.active = !0, this.bkgScater.parent = this.node.parent, this.bkgScater.setScale(1.95, 3.2), this.bkgScater.setPosition(this.node.getPosition())) : 12 == this.result ? this.node.zIndex = a.WILD : (this.node.zIndex = a.NORMAL, this.checkIsBlock() && (this.node.zIndex = a.BLOCK)), this.bkgScater.zIndex = a.BKG_SCATER
            }, e.prototype.setPosInGroup = function(t) {
                if (t) {
                    this.isFirtGroup = !0, this.node.x += this.size.width * (this.sizeItem - 1) / 2;
                    var e = p.Windown.Medusa.asset.getMutiX();
                    e.parent = this.node.parent, e.zIndex = a.ITEM_X, this._itemX = e.getComponent(f.default), this._itemX.init(this, this._mutil)
                } else this.node.opacity = 0
            }, e.prototype.setSize = function() {
                this.node.height = this.size.height * this.sizeItem
            }, e.prototype.setImgResult = function(t) {
                this.sprite.spriteFrame = this.getSpItem(t), 13 != this.result && 12 != this.result ? this.spriteBkg.node.active = !0 : this.spriteBkg.node.active = !1, this.Frame.active = this.spriteBkg.node.active, this.sprite.node.scale = t ? 2.138 : 1
            }, e.prototype.getSpItem = function(t) {
                var e = this.sizeItem;
                return this.result < 11 && (e = 1), 12 != this.result && (e = cc.misc.clampf(e, 1, 2)), p.Windown.Medusa.asset.getSfItemSymbol(this.result, e, t)
            }, e.prototype.getAtlas = function() {
                return this.result < 12 ? p.Windown.Medusa.asset.atlasSymbol : p.Windown.Medusa.asset.atlasSpecial
            }, e.prototype.getIndexOf = function() {
                return this.itemColum.getListSymbol().indexOf(this)
            }, e.prototype.getColorBkg = function() {
                return this.result < 4 ? this.listColorBkg[this.result - 1] : this.listColorBkg[3]
            }, e.prototype.showSkeleton = function() {
                var t;
                (t = p.Windown.Medusa.asset.listSkeData[this.result - 1]) && (this.skeletonItem.node.active = !0, this.skeletonItem.skeletonData = t, this.skeletonItem.setAnimation(0, "spawn", !1), 12 != this.result && 13 != this.result || (cc.log("nhay vai idle skele ton"), this.skeletonItem.addAnimation(0, "idle", !0)))
            }, e.prototype.hideSkeleton = function() {
                this.skeletonItem.node.active = !1
            }, e.prototype.convertNameSpineById = function() {
                switch (this.result) {
                    case 12:
                        return "s_wild";
                    case 13:
                        return "s_scatter"
                }
            }, e.prototype.convertNameSize = function() {
                switch (this.sizeItem) {
                    case 1:
                        return "_a_atlas_symbols";
                    case 2:
                        return "_b_atlas_symbols";
                    case 3:
                        return this.result < 11 || 13 == this.result ? "_b_atlas_symbols" : 11 == this.result ? "_cd_atlas_symbols" : "_c_atlas_symbols";
                    case 4:
                        return this.result < 11 || 13 == this.result ? "_b_atlas_symbols" : 11 == this.result ? "_cd_atlas_symbols" : "_d_atlas_symbols"
                }
            }, e.prototype.convertNameSizeSpine = function() {
                switch (this.sizeItem) {
                    case 1:
                        return "_a_atlas_symbols";
                    case 2:
                        return "_b_atlas_symbols";
                    case 3:
                        return 12 == this.result ? "_c_atlas_symbols" : "_b_atlas_symbols";
                    case 4:
                        return 12 == this.result ? "_d_atlas_symbols" : "_b_atlas_symbols"
                }
            }, e.prototype.removeAddScater = function(t) {
                null != this.nodeScater && (t ? (this.nodeScater && p.Windown.Medusa.asset.putAddScater(this.nodeScater.node), this.nodeScater = null) : this.nodeScater.idle(), this.skeletonItem.node.active = !0, this.offItem())
            }, e.prototype.effectScaterShowFS = function() {
                13 == this.result && (cc.log("show symboll result ne"), null == this.nodeScater && (this.nodeScater = p.Windown.Medusa.asset.getAddScater().getComponent(h.default), this.nodeScater.node.parent = this.node, this.nodeScater.node.setPosition(0, 0)), this.activeItem(), this.nodeScater.node.active = !0, this.skeletonItem.node.active = !1, this.nodeScater.show())
            }, e.prototype.effectNearWinScater = function(t) {
                13 == this.result && (null == this.nodeScater && (this.nodeScater = p.Windown.Medusa.asset.getAddScater().getComponent(h.default), this.nodeScater.node.parent = this.node, this.nodeScater.node.setPosition(0, 0)), this.activeItem(), this.nodeScater.node.active = !0, this.nodeScater.effectNearWinNoSap(t), this.skeletonItem.node.active = !1)
            }, e.prototype.effectDropScater = function() {
                13 == this.result && this.nodeScater && !p.Windown.Medusa.stateSpin.isMaxSpeed && (this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.scaleTo(.1, 1.18).easing(cc.easeSineOut()), cc.scaleTo(.1, 1).easing(cc.easeSineIn()))))
            }, e.prototype.checkIsInView = function() {
                return this.node.y < 0 && this.node.y > -this.size.height * (this.itemColum.sizeSymbol - 2)
            }, e.prototype.checkIsBlock = function() {
                return 12 != this.objSFS.i && this.objSFS.s > 1
            }, e.prototype.checkEqualsResult = function(t) {
                var e = t.s || 1,
                    n = t.g || -1,
                    o = t.i,
                    i = this.objSFS.s || 1,
                    r = this.objSFS.g || -1,
                    s = this.objSFS.i;
                return e == i && n == r && o == s
            }, e.prototype.offItem = function() {
                this.node.parent = p.Windown.Medusa.parentItem
            }, e.prototype.activeItem = function() {
                this.node.parent = p.Windown.Medusa.parentItemActive, this._itemX && this._itemX.emitNewParent(this.node.parent)
            }, e.prototype.runSpin = function() {
                var t = this,
                    e = cc.repeatForever(cc.moveBy(p.Windown.Medusa.stateSpin.isMaxSpeed ? .5 : 1, 0, -2500));
                this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.moveBy(.1, 0, 20).easing(cc.easeSineOut()), cc.moveBy(.1, 0, -20).easing(cc.easeSineIn()), cc.callFunc(function() {
                    t.node.stopAllActions(), t.node.runAction(e)
                }))), this.canRun = !0
            }, e.prototype.stopSpin = function(t) {
                var e = this;
                this.node.stopAllActions(), this.getIndexOf(), this.node.runAction(cc.sequence(t, cc.callFunc(function() {
                    e.itemColum.effStopSpin()
                })))
            }, e.prototype.initPosStartGame = function() {
                var t, e = this.getIndexOf(),
                    n = this.itemColum.getListSymbol()[e - 1],
                    o = null == n ? void 0 : n.node.y;
                t = n ? o - this.node.height / 2 - n.node.height / 2 : this.node.height / 2, this.node.y = t
            }, e.prototype.setPos = function(t) {
                this.node.y = t.y
            }, e.prototype.getPos = function() {
                return this.node.getPosition()
            }, e.prototype.moveWhenListChange = function() {
                var t, e = this.getIndexOf(),
                    n = this.itemColum.getListSymbol()[e + 1],
                    o = n.getPos();
                t = o.y + this.node.height / 2 + n.node.height / 2, o.y = t, this.setPos(o)
            }, e.prototype.takeItem = function() {
                if (this.removeEfWin(), this.activeItem(), !this.checkIsBlock() || this.isFirtGroup) {
                    var t = p.Windown.Medusa.asset.getWinSymbol(this.sizeItem);
                    t.zIndex = a.ACTIVE_WIN, t.scale = this.sizeItem, this.node.parent.addChild(t), t.setPosition(this.node.getPosition()), t.getComponent(d.default).effTakeItem(this.result, this.sizeItem), this.efWin = t
                }
            }, e.prototype.removeEfWin = function() {
                this.efWin && p.Windown.Medusa.asset.putWinSymbol(this.efWin), this.efWin = null
            }, e.prototype.removeNodeClone = function() {}, e.prototype.removeItem = function() {
                var t = this,
                    e = this.getIndexOf();
                e > -1 && (this.itemColum.getListSymbol()[e] = null), this.node.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                    p.Windown.Medusa.asset.putSymbol(t.node)
                }))), p.Windown.Medusa.audio.playEffect(p.Windown.Medusa.audio.symShrink), this.effectRemoveItem()
            }, e.prototype.effectRemoveItem = function() {
                if (this.efWin) {
                    var t = p.Windown.Medusa.asset.getEffectRemove(this.sizeItem);
                    t.parent = this.node.parent, t.setPosition(p.Windown.convertNodeInOtherNode(this.node, this.node.parent)), t.getComponent(d.default).effRemoveItem(this.sizeItem), t.zIndex = a.ACTIVE_REMOVE;
                    var e = this.efWin;
                    e.runAction(cc.sequence(cc.fadeOut(.3), cc.callFunc(function() {
                        e.destroy()
                    })))
                }
                this._itemX && this._itemX.runToMutil(), this._itemX = null, this.efWin = null
            }, e.prototype.removeMutilWhenSpin = function() {
                this.removeEfWin()
            }, e.prototype.effectSpawnSymbol = function(t) {
                return void 0 === t && (t = !0), s(this, void 0, void 0, function() {
                    return c(this, function() {
                        try {
                            if (this.isShowEffectSpawn || !this.checkIsInView()) return [2];
                            t && (13 == this.result ? p.Windown.Medusa.audio.playEffectNoStop(p.Windown.Medusa.audio.symScatter) : 12 == this.result && p.Windown.Medusa.audio.playEffectNoStop(p.Windown.Medusa.audio.symWild)), this.isShowEffectSpawn = !0, this.showSkeleton()
                        } catch (e) {
                            l.Util.ThrowErrProsime(e)
                        }
                        return [2]
                    })
                })
            }, e.prototype.unuse = function() {
                this.skeletonItem.node.active = !1, this.isShowEffectSpawn = !1, this.result = -1, this.node.opacity = 255, this.sprite.node.opacity = 255, this.node.x = 0, this.node.scale = 1, this.node.stopAllActions(), this.removeAddScater(!0)
            }, e.prototype.checkEndCot = function() {
                if (0 == this.getIndexOf()) {
                    var t = this.node.height / 2;
                    if (this.node.y <= t) {
                        var e = this.itemColum.getIdSymbolResult(),
                            n = this.itemColum.getListSymbol(),
                            o = n.pop();
                        n.unshift(o), o.node.zIndex = 0, o.setResult(e), o.moveWhenListChange()
                    }
                }
            }, e.prototype.update = function() {
                if (this.canRun && this.checkEndCot(), this.itemColum.stateWhel == u.default.STOP && 0 == this.getIndexOf() && this.itemColum.resultTemp.length < 1 && this.node.y <= this.node.height / 2) return this.itemColum.getListSymbol().forEach(function(t) {
                    t.node.stopAllActions()
                }), void this.itemColum.effStopSpin()
            }, r([v(cc.Sprite)], e.prototype, "sprite", void 0), r([v(cc.Sprite)], e.prototype, "spriteBkg", void 0), r([v(cc.Node)], e.prototype, "bkgScater", void 0), r([v(cc.Node)], e.prototype, "Frame", void 0), r([v(sp.Skeleton)], e.prototype, "skeletonItem", void 0), r([v([cc.Color])], e.prototype, "listColorBkg", void 0), r([m], e)
        }(cc.Component);
        n.default = S, cc._RF.pop()
    }, {
        "../../../Scritps/DefineTs/StateReelSlot": void 0,
        "../../../Scritps/Util": void 0,
        "../../../Scritps/Windown": void 0,
        "./Effect/EffectSymbolMedusa": "EffectSymbolMedusa",
        "./Effect/ItemAddScaterMedusa": "ItemAddScaterMedusa",
        "./ItemXMedusa": "ItemXMedusa"
    }]
}, {}, ["AssetMedusa", "AudioMedusa", "BaseItemMutilMedusa", "CachChoiMedusa", "DetailHistoryMedusa", "EffectMedusa", "AnhMatMedusa", "BigWinMedusa", "EffectSymbolMedusa", "EndFreeSpinMedusa", "ItemAddScaterMedusa", "NearFreeSpinMedusa", "NearFreeSpinMedusaNoSap", "StartFreeSpinMedusa", "InfoBarControllerMedusa", "ItemDetalMedusa", "ItemLichSuMedusa", "ItemMutilFsMedusa", "ItemMutilNomalMedusa", "ItemResultDetailMedusa", "ItemSlotMedusa", "ItemXMedusa", "LichSuMedusa", "MedusaView", "MutilControlMedusa", "SpinNormalMedusa", "SymbolMedusa"]);