window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  "mesh-texture-flag": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7955isD2pAy5KxbPkIzekN", "mesh-texture-flag");
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = "undefined" !== typeof Symbol && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && "number" === typeof o.length) {
        it && (o = it);
        var i = 0;
        return function() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      "Object" === n && o.constructor && (n = o.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(o);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      (null == len || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    var gfx = cc.gfx;
    cc.Class({
      extends: cc.Component,
      properties: {
        _offset: cc.v2(0, 0),
        offset: {
          get: function get() {
            return this._offset;
          },
          set: function set(value) {
            this._offset = value;
            this._applyVertexes();
          },
          type: cc.Vec2
        },
        _spriteFrame: {
          default: null,
          type: cc.SpriteFrame
        },
        spriteFrame: {
          get: function get() {
            return this._spriteFrame;
          },
          set: function set(value) {
            this._spriteFrame = value;
            this._applySpriteFrame();
          },
          type: cc.SpriteFrame
        },
        _row: 10,
        row: {
          tooltip: "\u7f51\u683c\u884c\u6570",
          get: function get() {
            return this._row;
          },
          set: function set(value) {
            value <= 0 ? value = 1 : "";
            if (this._row !== value) {
              this._row = value;
              this._updateMesh();
              this._applyVertexes();
            }
          },
          min: 1,
          step: 1
        },
        _col: 20,
        col: {
          tooltip: "\u7f51\u683c\u5217\u6570",
          get: function get() {
            return this._col;
          },
          set: function set(value) {
            value <= 0 ? value = 1 : "";
            if (this._col !== value) {
              this._col = value;
              this._updateMesh();
              this._applyVertexes();
            }
          },
          min: 1,
          step: 1
        },
        _speed: 10,
        speed: {
          tooltip: "\u901f\u5ea6",
          get: function get() {
            return this._speed;
          },
          set: function set(value) {
            value <= 0 ? value = .1 : "";
            if (this._speed !== value) {
              this._speed = value;
              this._updateMaterial();
            }
          },
          min: .1,
          step: .1
        },
        _amplitude: 5,
        amplitude: {
          tooltip: "\u5e45\u5ea6",
          get: function get() {
            return this._amplitude;
          },
          set: function set(value) {
            value <= 0 ? value = .1 : "";
            if (this._amplitude !== value) {
              this._amplitude = value;
              this._updateMaterial();
            }
          },
          min: .1,
          step: 1
        },
        _wave: 5,
        wave: {
          tooltip: "\u6ce2\u6d6a",
          get: function get() {
            return this._wave;
          },
          set: function set(value) {
            value <= 0 ? value = 0 : "";
            if (this._wave !== value) {
              this._wave = value;
              this._updateMaterial();
            }
          },
          min: 0,
          step: 1
        },
        mat: cc.Material
      },
      onLoad: function onLoad() {
        var _this = this;
        this._meshCache = {};
        this._vertexes = [];
        var renderer = this.node.getComponent(cc.MeshRenderer);
        renderer || (renderer = this.node.addComponent(cc.MeshRenderer));
        renderer.mesh = null;
        this.renderer = renderer;
        var matt = cc.Material.create(this.mat.effectAsset, this.mat.techniqueIndex);
        this.renderer.setMaterial(0, this.mat);
        this._updateMaterial();
        this._updateMesh();
        this._applySpriteFrame();
        this._applyVertexes();
        this.node.on("size-changed", function() {
          _this._updateMesh();
          _this._applyVertexes();
        }, this);
        this.node.on("anchor-changed", function() {
          _this._updateMesh();
          _this._applyVertexes();
        }, this);
      },
      _updateMesh: function _updateMesh() {
        this._vertexes = [];
        var _width = this.node.width;
        var _height = this.node.height;
        for (var _row = 0; _row < this._row + 1; _row++) for (var _col = 0; _col < this._col + 1; _col++) {
          var x = (_col - this._col * this.node.anchorX) * _width / this._col;
          var y = (_row - this._row * this.node.anchorY) * _height / this._row;
          this._vertexes.push(cc.v2(x, y));
        }
        var mesh = this._meshCache[this._vertexes.length];
        if (!mesh) {
          mesh = new cc.Mesh();
          mesh.init(new gfx.VertexFormat([ {
            name: gfx.ATTR_POSITION,
            type: gfx.ATTR_TYPE_FLOAT32,
            num: 2
          }, {
            name: gfx.ATTR_UV0,
            type: gfx.ATTR_TYPE_FLOAT32,
            num: 2
          } ]), this._vertexes.length, true);
          this._meshCache[this._vertexes.length] = mesh;
        }
        this.mesh = mesh;
        this._updateMaterial();
      },
      _applyVertexes: function _applyVertexes() {
        var _this2 = this;
        var mesh = this.mesh;
        mesh.setVertices(gfx.ATTR_POSITION, this._vertexes);
        if (this.texture) {
          var uvs = [];
          for (var _iterator = _createForOfIteratorHelperLoose(this._vertexes), _step; !(_step = _iterator()).done; ) {
            var pt = _step.value;
            var u = (pt.x + this.texture.width * this.node.anchorX + this.offset.x) / this.texture.width;
            var v = 1 - (pt.y + this.texture.height * this.node.anchorY + this.offset.y) / this.texture.height;
            uvs.push(cc.v2(u, v));
          }
          mesh.setVertices(gfx.ATTR_UV0, uvs);
        }
        if (this._vertexes.length >= 3) {
          var ids = [];
          var getIndexByRowCol = function getIndexByRowCol(_row, _col) {
            return _row * (_this2._col + 1) + _col;
          };
          for (var _row = 0; _row < this._row; _row++) for (var _col = 0; _col < this._col; _col++) {
            ids.push(getIndexByRowCol(_row, _col), getIndexByRowCol(_row, _col + 1), getIndexByRowCol(_row + 1, _col));
            ids.push(getIndexByRowCol(_row + 1, _col), getIndexByRowCol(_row + 1, _col + 1), getIndexByRowCol(_row, _col + 1));
          }
          mesh.setIndices(ids);
          this.renderer.mesh != mesh && (this.renderer.mesh = mesh);
        }
      },
      _applySpriteFrame: function _applySpriteFrame() {
        if (this.spriteFrame) {
          var texture = this.spriteFrame.getTexture();
          this.texture = texture;
          this._updateMaterial();
        }
      },
      _updateMaterial: function _updateMaterial() {
        var material = this.renderer._materials[0];
        if (material) {
          if (this.texture) {
            material.define("USE_TEXTURE", true);
            material.setProperty("texture", this.texture);
          }
          material.setProperty("textureWidth", this.node.width);
          material.setProperty("speed", this.speed);
          material.setProperty("amplitude", this.amplitude);
          material.setProperty("wave", this.wave);
          this._vertexes.length > 0 && material.setProperty("startPos", this._vertexes[0]);
        }
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "mesh-texture-flag" ]);