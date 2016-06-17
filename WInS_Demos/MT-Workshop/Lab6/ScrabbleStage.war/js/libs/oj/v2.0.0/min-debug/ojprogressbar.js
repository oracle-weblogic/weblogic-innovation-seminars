/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$62$$, $$$$57$$) {
  (function() {
    $oj$$62$$.$__registerWidget$("oj.ojProgressbar", $$$$57$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _ComponentCreate:function() {
      this._super();
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$57$$("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
    }, $_InitOptions$:function($originalDefaults$$14$$, $constructorOptions$$16$$) {
      var $dom_element$$140$$ = this.element;
      this._super($originalDefaults$$14$$, $constructorOptions$$16$$);
      void 0 === $constructorOptions$$16$$.max && ($dom_element$$140$$ = $dom_element$$140$$.attr("max") || void 0, null != $dom_element$$140$$ && (this.options.max = $dom_element$$140$$));
    }, $_constrainedValue$:function($newValue$$21$$) {
      void 0 === $newValue$$21$$ && ($newValue$$21$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$21$$;
      "number" !== typeof $newValue$$21$$ && ($newValue$$21$$ = isNaN($newValue$$21$$) ? 0 : Number($newValue$$21$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$21$$));
    }, _setOptions:function($options$$395$$, $flags$$44$$) {
      var $value$$287$$ = $options$$395$$.value;
      delete $options$$395$$.value;
      this._super($options$$395$$, $flags$$44$$);
      this.options.disabled || (this.options.value = this.$_constrainedValue$($value$$287$$), this.$_refreshValue$());
    }, _setOption:function($key$$174$$, $value$$288$$, $flags$$45$$) {
      "max" === $key$$174$$ && ($value$$288$$ = Math.max(this.min, $value$$288$$));
      this._super($key$$174$$, $value$$288$$, $flags$$45$$);
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, $_refreshValue$:function() {
      var $value$$289$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$289$$ > this.min).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$57$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$), this.$overlayDiv$.addClass("oj-indeterminate"))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$289$$}), this.$overlayDiv$ && 
      (this.$overlayDiv$.remove(), this.$overlayDiv$ = null));
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove();
      this._super();
    }});
  })();
});
