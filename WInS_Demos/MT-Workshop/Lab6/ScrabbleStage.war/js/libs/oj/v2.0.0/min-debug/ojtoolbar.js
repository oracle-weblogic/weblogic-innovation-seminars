/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$75$$, $$$$69$$) {
  (function() {
    $oj$$75$$.$__registerWidget$("oj.ojToolbar", $$$$69$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{chroming:"half"}, $_InitOptions$:function($originalDefaults$$20$$, $constructorOptions$$22$$) {
      this._super($originalDefaults$$20$$, $constructorOptions$$22$$);
      "disabled" in $constructorOptions$$22$$ && $oj$$75$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.");
    }, _ComponentCreate:function() {
      this._super();
      this.element.attr($oj$$75$$.Components.$_OJ_CONTAINER_ATTR$, this.widgetName).addClass("oj-toolbar oj-component").attr("role", "toolbar");
      this.$_setup$(!0);
    }, $_NotifyContextMenuGesture$:function($currentButton$$1_menu$$28$$, $event$$649$$, $eventType$$56$$) {
      $currentButton$$1_menu$$28$$ = this.element.find(":oj-button[tabindex\x3d0]");
      this.$_OpenContextMenu$($event$$649$$, $eventType$$56$$, {launcher:$currentButton$$1_menu$$28$$, position:{of:"keyboard" === $eventType$$56$$ ? $currentButton$$1_menu$$28$$.ojButton("widget") : $event$$649$$}});
    }, _setOption:function($key$$182$$, $value$$300$$) {
      this._superApply(arguments);
      "disabled" === $key$$182$$ ? $oj$$75$$.$Logger$.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.  Ignoring the call.") : "chroming" === $key$$182$$ && (this.$$buttonsets$.ojButtonset("refresh"), this.$$topLevelButtons$.ojButton("refresh"));
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$3$$) {
      var $self$$228$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$$buttons$ = this.element.find(":oj-button").unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$650$$) {
        $self$$228$$.$_handleKeyDown$($event$$650$$, $$$$69$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$69$$(this).ojButton("option", "disabled") || $self$$228$$.$_setTabStop$($$$$69$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$228$$.$_setTabStop$($$$$69$$(this));
      });
      this.$$buttonsets$ = this.element.find(":oj-buttonset").ojButtonset("refresh");
      this.$$topLevelButtons$ = this.$$buttons$.not(this.$$buttonsets$.find(":oj-button")).ojButton("refresh");
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$69$$(this).ojButton("option", "disabled");
      });
      this.$_initTabindexes$($isCreate$$3$$);
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$4$$) {
      var $$last$$1$$ = $$$$69$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$4$$ = $$newTabStop$$1_isCreate$$4$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$4$$);
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$294$$, $elem$$163$$) {
        if ("radio" != $elem$$163$$.type || $elem$$163$$.checked || "" == $elem$$163$$.name) {
          return $elem$$163$$;
        }
        var $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$ = $elem$$163$$.name;
        $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$ ? ($$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$ = $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$.replace(/'/g, "\\'"), $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$ = $$enabledButtons$$2$$.filter(":radio[name\x3d'" + $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$ + "']:oj-button")) : $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$ = $$enabledButtons$$2$$.filter($elem$$163$$).filter(":oj-button");
        $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$ = $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$.filter(":checked");
        return $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$.length ? $$checkedRadio$$1_$radios$$inline_1060_name$$inline_1059$$[0] : $elem$$163$$;
      });
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$1$$ = $$button$$4$$[0], $last$$7$$ = this.$_lastTabStop$;
      $button$$1$$ !== $last$$7$$ && ($$$$69$$($last$$7$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$1$$);
    }, $_handleKeyDown$:function($event$$653$$, $$button$$5$$) {
      switch($event$$653$$.which) {
        case $$$$69$$.ui.keyCode.LEFT:
        ;
        case $$$$69$$.ui.keyCode.RIGHT:
          $event$$653$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$21$$ = $$enabledButtons$$3$$.length;
          if (2 > $length$$21$$) {
            break;
          }
          var $oldIndex$$2$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$2$$ + ($event$$653$$.which == $$$$69$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$21$$) % $length$$21$$).focus();
          break;
        case $$$$69$$.ui.keyCode.UP:
        ;
        case $$$$69$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$653$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-component").removeAttr($oj$$75$$.Components.$_OJ_CONTAINER_ATTR$).removeAttr("role");
      this.$$buttons$.attr("tabindex", "0");
      this.$$buttonsets$.ojButtonset("refresh");
      this.$$topLevelButtons$.ojButton("refresh");
    }});
  })();
  $oj$$75$$.Components.$setDefaultOptions$({ojToolbar:{chroming:$oj$$75$$.Components.$createDynamicPropertyGetter$(function() {
    return $oj$$75$$.$ThemeUtils$.$getOptionDefaultMap$("toolbar").chroming;
  })}});
});
