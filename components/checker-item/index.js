!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxCheckerItem=t():e.vuxCheckerItem=t()}(this,function(){return function(e){function t(o){if(s[o])return s[o].exports;var i=s[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var s={};return t.m=e,t.c=s,t.p="",t(0)}([function(e,t,s){e.exports=s(3)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,"default":!1}},computed:{classNames:function(){var e={"vux-tap-active":!this.disabled};return this.$parent.defaultItemClass&&(e[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass&&(e[this.$parent.selectedItemClass]=this.$parent.value===this.value),this.$parent.disabledItemClass&&(e[this.$parent.disabledItemClass]=this.disabled),e}},methods:{select:function(){this.disabled||(this.$parent.$set("value",this.value),this.$dispatch("on-item-click",this.value,this.disabled))}}}},function(e,t){e.exports="<div class=vux-checker-item :class=classNames @click=select> <slot></slot> </div>"},function(e,t,s){var o,i;o=s(1),i=s(2),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}])});