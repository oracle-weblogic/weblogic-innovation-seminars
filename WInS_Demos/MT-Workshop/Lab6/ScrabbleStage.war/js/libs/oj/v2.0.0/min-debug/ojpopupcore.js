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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "jqueryui-amd/position"], function($oj$$61$$, $$$$56$$) {
  $oj$$61$$.$PopupService$ = function $$oj$$61$$$$PopupService$$() {
    this.Init();
  };
  $oj$$61$$.$Object$.$createSubclass$($oj$$61$$.$PopupService$, $oj$$61$$.$Object$, "oj.PopupService");
  $oj$$61$$.$PopupService$.prototype.Init = function $$oj$$61$$$$PopupService$$$Init$() {
    $oj$$61$$.$PopupService$.$superclass$.Init.call(this);
  };
  $oj$$61$$.$PopupService$.$getInstance$ = function $$oj$$61$$$$PopupService$$$getInstance$$() {
    $oj$$61$$.$PopupService$.$_popupService$ || ($oj$$61$$.$PopupService$.$_popupService$ = new $oj$$61$$.$PopupServiceImpl$);
    return $oj$$61$$.$PopupService$.$_popupService$;
  };
  $oj$$61$$.$PopupService$.prototype.open = function $$oj$$61$$$$PopupService$$$open$() {
    $oj$$61$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$61$$.$PopupService$.prototype.close = function $$oj$$61$$$$PopupService$$$close$() {
    $oj$$61$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$61$$.$PopupService$.prototype.$changeOptions$ = function $$oj$$61$$$$PopupService$$$$changeOptions$$() {
    $oj$$61$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$61$$.$PopupService$.prototype.$triggerOnDescendents$ = function $$oj$$61$$$$PopupService$$$$triggerOnDescendents$$() {
    $oj$$61$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$61$$.$PopupService$.prototype.destroy = function $$oj$$61$$$$PopupService$$$destroy$() {
    delete $oj$$61$$.$PopupService$.$_popupService$;
  };
  $oj$$61$$.$PopupService$.$MODALITY$ = {NONE:"none", $MODAL$:"modal", $MODELESS$:"modeless"};
  $oj$$61$$.$PopupService$.$EVENT$ = {$POPUP_REMOVE$:"ojPopupRemove", $POPUP_CLOSE$:"ojPopupClose", $POPUP_REFRESH$:"ojPopupRefresh", $POPUP_AUTODISMISS$:"ojPopupAutoDismiss"};
  $oj$$61$$.$PopupService$.$LAYER_LEVEL$ = {$TOP_LEVEL$:"topLevel", $NEAREST_ANCESTOR$:"nearestAncestor"};
  $oj$$61$$.$PopupService$.$OPTION$ = {$POPUP$:"popup", $EVENTS$:"events", $MODALITY$:"modality", $LAUNCHER$:"launcher", $POSITION$:"position", $LAYER_SELECTORS$:"layerSelectors", $LAYER_LEVEL$:"layerLevel"};
  $oj$$61$$.$PopupServiceImpl$ = function $$oj$$61$$$$PopupServiceImpl$$() {
    this.Init();
  };
  $oj$$61$$.$Object$.$createSubclass$($oj$$61$$.$PopupServiceImpl$, $oj$$61$$.$PopupService$, "oj.PopupServiceImpl");
  $oj$$61$$.$PopupServiceImpl$.prototype.open = function $$oj$$61$$$$PopupServiceImpl$$$open$($layerLevel_options$$392$$) {
    $oj$$61$$.$Assert$.$assertObject$($layerLevel_options$$392$$);
    var $popup$$4$$ = $layerLevel_options$$392$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$61$$.$Assert$.$assertPrototype$($popup$$4$$, jQuery);
    var $launcher$$21$$ = $layerLevel_options$$392$$[$oj$$61$$.$PopupService$.$OPTION$.$LAUNCHER$];
    $oj$$61$$.$Assert$.$assertPrototype$($launcher$$21$$, jQuery);
    var $position$$38$$ = $layerLevel_options$$392$$[$oj$$61$$.$PopupService$.$OPTION$.$POSITION$];
    $oj$$61$$.$Assert$.$assertObjectOrNull$($position$$38$$);
    var $events$$8$$ = $layerLevel_options$$392$$[$oj$$61$$.$PopupService$.$OPTION$.$EVENTS$];
    $oj$$61$$.$Assert$.$assertObject$($events$$8$$);
    var $modality$$1$$ = $layerLevel_options$$392$$[$oj$$61$$.$PopupService$.$OPTION$.$MODALITY$];
    if (!$modality$$1$$ || $oj$$61$$.$PopupService$.$MODALITY$.$MODELESS$ !== $modality$$1$$ && $oj$$61$$.$PopupService$.$MODALITY$.$MODAL$ !== $modality$$1$$) {
      $modality$$1$$ = $oj$$61$$.$PopupService$.$MODALITY$.NONE;
    }
    var $layerClass$$3$$ = $layerLevel_options$$392$$[$oj$$61$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$61$$.$Assert$.$assertString$($layerClass$$3$$);
    $layerLevel_options$$392$$ = $layerLevel_options$$392$$[$oj$$61$$.$PopupService$.$OPTION$.$LAYER_LEVEL$];
    if (!$layerLevel_options$$392$$ || $oj$$61$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$ !== $layerLevel_options$$392$$ && $oj$$61$$.$PopupService$.$LAYER_LEVEL$.$NEAREST_ANCESTOR$ !== $layerLevel_options$$392$$) {
      $layerLevel_options$$392$$ = $oj$$61$$.$PopupService$.$LAYER_LEVEL$.$NEAREST_ANCESTOR$;
    }
    $oj$$61$$.$DomUtils$.$setLogicalParent$($popup$$4$$, $launcher$$21$$);
    $oj$$61$$.$ZOrderUtils$.$addToAncestorLayer$($popup$$4$$, $launcher$$21$$, $events$$8$$, $modality$$1$$, $layerClass$$3$$, $layerLevel_options$$392$$);
    $popup$$4$$.show();
    $popup$$4$$.removeAttr("aria-hidden");
    $position$$38$$ && $popup$$4$$.position($position$$38$$);
    this.$_assertEventSink$();
    $oj$$61$$.Components.$subtreeShown$($popup$$4$$[0]);
  };
  $oj$$61$$.$PopupServiceImpl$.prototype.close = function $$oj$$61$$$$PopupServiceImpl$$$close$($options$$393_popup$$5$$) {
    $oj$$61$$.$Assert$.$assertObject$($options$$393_popup$$5$$);
    $options$$393_popup$$5$$ = $options$$393_popup$$5$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$61$$.$Assert$.$assertPrototype$($options$$393_popup$$5$$, jQuery);
    $oj$$61$$.$ZOrderUtils$.$removeFromAncestorLayer$($options$$393_popup$$5$$);
    $options$$393_popup$$5$$.hide();
    $options$$393_popup$$5$$.attr("aria-hidden", "true");
    $oj$$61$$.$DomUtils$.$setLogicalParent$($options$$393_popup$$5$$, null);
    this.$_assertEventSink$();
    $oj$$61$$.Components.$subtreeHidden$($options$$393_popup$$5$$[0]);
  };
  $oj$$61$$.$PopupServiceImpl$.prototype.$changeOptions$ = function $$oj$$61$$$$PopupServiceImpl$$$$changeOptions$$($layerClass$$4_options$$394$$) {
    $oj$$61$$.$Assert$.$assertObject$($layerClass$$4_options$$394$$);
    var $layer$$2_popup$$6$$ = $layerClass$$4_options$$394$$[$oj$$61$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$61$$.$Assert$.$assertPrototype$($layer$$2_popup$$6$$, jQuery);
    $layer$$2_popup$$6$$ = $oj$$61$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$2_popup$$6$$);
    $oj$$61$$.$Assert$.$assertPrototype$($layer$$2_popup$$6$$, jQuery);
    var $events$$9_modality$$2$$ = $layerClass$$4_options$$394$$[$oj$$61$$.$PopupService$.$OPTION$.$EVENTS$];
    $events$$9_modality$$2$$ && $oj$$61$$.$ZOrderUtils$.$applyEvents$($layer$$2_popup$$6$$, $events$$9_modality$$2$$);
    ($events$$9_modality$$2$$ = $layerClass$$4_options$$394$$[$oj$$61$$.$PopupService$.$OPTION$.$MODALITY$]) && $oj$$61$$.$ZOrderUtils$.$applyModality$($layer$$2_popup$$6$$, $events$$9_modality$$2$$);
    $layerClass$$4_options$$394$$ = $layerClass$$4_options$$394$$[$oj$$61$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($layerClass$$4_options$$394$$) || $layer$$2_popup$$6$$.attr("class", $layerClass$$4_options$$394$$);
  };
  $oj$$61$$.$PopupServiceImpl$.prototype.$triggerOnDescendents$ = function $$oj$$61$$$$PopupServiceImpl$$$$triggerOnDescendents$$($layer$$3_popup$$7$$, $event$$585$$, $argsArray$$1$$) {
    var $context$$142$$ = {};
    $context$$142$$.event = $event$$585$$;
    $context$$142$$.argsArray = $argsArray$$1$$;
    $layer$$3_popup$$7$$ = $oj$$61$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$3_popup$$7$$);
    $oj$$61$$.$ZOrderUtils$.$postOrderVisit$($layer$$3_popup$$7$$, this.$_triggerOnDescendentsVisitCallback$, $context$$142$$);
  };
  $oj$$61$$.$PopupServiceImpl$.prototype.$_triggerOnDescendentsVisitCallback$ = function $$oj$$61$$$$PopupServiceImpl$$$$_triggerOnDescendentsVisitCallback$$($layer$$4$$, $context$$143$$) {
    var $event$$586$$ = $context$$143$$.event, $argsArray$$2$$ = $context$$143$$.argsArray, $events$$10$$ = $oj$$61$$.$ZOrderUtils$.$getEvents$($layer$$4$$);
    $events$$10$$ && $$$$56$$.isFunction($events$$10$$[$event$$586$$]) && $events$$10$$[$event$$586$$].apply(this, $argsArray$$2$$);
    return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$61$$.$PopupServiceImpl$.prototype.$_assertEventSink$ = function $$oj$$61$$$$PopupServiceImpl$$$$_assertEventSink$$() {
    var $docElement_hasPopupsOpen$$ = $oj$$61$$.$ZOrderUtils$.$hasPopupsOpen$(), $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$;
    if (!$docElement_hasPopupsOpen$$ && $callbackEventFilter_simpleTapRecognizer$$) {
      window.removeEventListener("resize", $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      window.removeEventListener("scroll", $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$ = document.documentElement;
      $docElement_hasPopupsOpen$$.removeEventListener("mousewheel", $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$.removeEventListener("DOMMouseScroll", $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      delete this.$_callbackEventFilter$;
      for (var $i$$422$$ = 0;$i$$422$$ < $oj$$61$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$422$$++) {
        var $event$$587$$ = $oj$$61$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$422$$];
        $docElement_hasPopupsOpen$$.removeEventListener($event$$587$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
      }
      if ($callbackEventFilter_simpleTapRecognizer$$ = this.$_simpleTapRecognizer$) {
        $callbackEventFilter_simpleTapRecognizer$$.destroy(), delete this.$_simpleTapRecognizer$;
      }
    } else {
      if ($docElement_hasPopupsOpen$$ && !$callbackEventFilter_simpleTapRecognizer$$) {
        window.addEventListener("resize", $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        window.addEventListener("scroll", $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$ = document.documentElement;
        $docElement_hasPopupsOpen$$.addEventListener("mousewheel", $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$.addEventListener("DOMMouseScroll", $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$ = $$$$56$$.proxy(this.$_eventFilterCallback$, this);
        for ($i$$422$$ = 0;$i$$422$$ < $oj$$61$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$422$$++) {
          $event$$587$$ = $oj$$61$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$422$$], $docElement_hasPopupsOpen$$.addEventListener($event$$587$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
        }
        $oj$$61$$.$DomUtils$.$isTouchSupported$() && (this.$_simpleTapRecognizer$ = new $oj$$61$$.$SimpleTapRecognizer$($callbackEventFilter_simpleTapRecognizer$$));
      }
    }
  };
  $oj$$61$$.$PopupServiceImpl$.prototype.$_eventFilterCallback$ = function $$oj$$61$$$$PopupServiceImpl$$$$_eventFilterCallback$$($event$$588$$) {
    var $context$$144_target$$101$$ = $$$$56$$($event$$588$$.target);
    if (!$oj$$61$$.$ZOrderUtils$.$hasPopupsOpen$()) {
      this.$_assertEventSink$();
    } else {
      if (!$oj$$61$$.$DomUtils$.$isChromeEvent$($event$$588$$) && ("focus" !== $event$$588$$.type || $context$$144_target$$101$$.is(":focusable"))) {
        var $defaultLayer$$ = $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$();
        if ("keydown" === $event$$588$$.type && $oj$$61$$.$ZOrderUtils$.$hasModalDialogOpen$() && !$oj$$61$$.$DomUtils$.$isAncestor$($defaultLayer$$[0], $context$$144_target$$101$$[0])) {
          $oj$$61$$.$ZOrderUtils$.$eatEvent$($$$$56$$.Event($event$$588$$));
        } else {
          var $props$$22_targetWitinLayer$$ = $oj$$61$$.$ZOrderUtils$.$getFirstAncestorLayer$($context$$144_target$$101$$);
          if ($defaultLayer$$[0] !== $props$$22_targetWitinLayer$$[0]) {
            if (!$props$$22_targetWitinLayer$$.hasClass($oj$$61$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$)) {
              var $lastFocusLayer$$ = this.$_lastFocusLayer$;
              $lastFocusLayer$$ && $lastFocusLayer$$.removeClass($oj$$61$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              $props$$22_targetWitinLayer$$.addClass($oj$$61$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              this.$_lastFocusLayer$ = $props$$22_targetWitinLayer$$;
            }
          } else {
            if ($lastFocusLayer$$ = this.$_lastFocusLayer$) {
              $lastFocusLayer$$.removeClass($oj$$61$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$), delete this.$_lastFocusLayer$;
            }
          }
          if ("focus" !== $event$$588$$.type || "-1" !== $context$$144_target$$101$$.attr("tabindex")) {
            var $context$$144_target$$101$$ = {}, $props$$22_targetWitinLayer$$ = {}, $key$$173$$;
            for ($key$$173$$ in $event$$588$$) {
              $oj$$61$$.$PopupServiceImpl$.$_COPY_SAFE_EVENT_PROPERTIES$[$key$$173$$] && !$$$$56$$.isFunction($event$$588$$[$key$$173$$]) && ($props$$22_targetWitinLayer$$[$key$$173$$] = $event$$588$$[$key$$173$$]);
            }
            $context$$144_target$$101$$.event = $$$$56$$.Event($event$$588$$, $props$$22_targetWitinLayer$$);
            $oj$$61$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$, $oj$$61$$.$PopupServiceImpl$.$_redistributeVisitCallback$, $context$$144_target$$101$$);
          }
        }
      }
    }
  };
  $oj$$61$$.$PopupServiceImpl$.$_redistributeVisitCallback$ = function $$oj$$61$$$$PopupServiceImpl$$$_redistributeVisitCallback$$($layer$$5$$, $context$$145$$) {
    var $events$$11$$ = $oj$$61$$.$ZOrderUtils$.$getEvents$($layer$$5$$), $event$$589$$ = $context$$145$$.event;
    if ($events$$11$$ && $$$$56$$.isFunction($events$$11$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$])) {
      $events$$11$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$]($event$$589$$);
    }
    return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$61$$.$PopupServiceImpl$.$_refreshCallback$ = function $$oj$$61$$$$PopupServiceImpl$$$_refreshCallback$$() {
    isNaN($oj$$61$$.$PopupServiceImpl$.$_refreshTimmer$) && ($oj$$61$$.$PopupServiceImpl$.$_refreshTimmer$ = window.setTimeout(function() {
      delete $oj$$61$$.$PopupServiceImpl$.$_refreshTimmer$;
      var $defaultLayer$$1$$ = $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$();
      $oj$$61$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$1$$, $oj$$61$$.$PopupServiceImpl$.$_refreshVisitCallback$);
    }, $oj$$61$$.$PopupServiceImpl$.$_REFRESH_DELAY$));
  };
  $oj$$61$$.$PopupServiceImpl$.$_refreshVisitCallback$ = function $$oj$$61$$$$PopupServiceImpl$$$_refreshVisitCallback$$($layer$$6$$, $context$$146$$) {
    if (0 < $context$$146$$.level) {
      return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$12$$ = $oj$$61$$.$ZOrderUtils$.$getEvents$($layer$$6$$);
    if ($events$$12$$ && $$$$56$$.isFunction($events$$12$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_REFRESH$])) {
      $events$$12$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_REFRESH$]();
    }
    return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$61$$.$PopupServiceImpl$.prototype.destroy = function $$oj$$61$$$$PopupServiceImpl$$$destroy$() {
    $oj$$61$$.$PopupServiceImpl$.$superclass$.destroy.call(this);
  };
  $oj$$61$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$ = "oj-focus-within";
  $oj$$61$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$ = ["focus", "mousedown", "keydown"];
  $oj$$61$$.$PopupServiceImpl$.$_COPY_SAFE_EVENT_PROPERTIES$ = {altKey:!0, bubbles:!0, cancelable:!0, ctrlKey:!0, currentTarget:!0, eventPhase:!0, metaKey:!0, relatedTarget:!0, shiftKey:!0, target:!0, timeStamp:!0, view:!0, which:!0, button:!0, buttons:!0, clientX:!0, clientY:!0, offsetX:!0, offsetY:!0, pageX:!0, pageY:!0, screenX:!0, screenY:!0, toElement:!0, "char":!0, charCode:!0, key:!0, keyCode:!0};
  $oj$$61$$.$PopupServiceImpl$.$_REFRESH_DELAY$ = 100;
  $oj$$61$$.$ZOrderUtils$ = {};
  $oj$$61$$.$ZOrderUtils$.$getFirstAncestorLayer$ = function $$oj$$61$$$$ZOrderUtils$$$getFirstAncestorLayer$$($launcher$$22_parent$$50$$) {
    if (!$launcher$$22_parent$$50$$) {
      return $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$();
    }
    for (;$launcher$$22_parent$$50$$ && 0 < $launcher$$22_parent$$50$$.length && $launcher$$22_parent$$50$$.attr("oj.ZOrderUtils._SURROGATE_ATTR") !== $oj$$61$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$;) {
      if ($oj$$61$$.$ZOrderUtils$.$_hasSurrogate$($launcher$$22_parent$$50$$[0])) {
        return $launcher$$22_parent$$50$$;
      }
      $launcher$$22_parent$$50$$ = $launcher$$22_parent$$50$$.parent();
    }
    return $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$();
  };
  $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$ = function $$oj$$61$$$$ZOrderUtils$$$getDefaultLayer$$() {
    var $defaultLayer$$2$$ = $$$$56$$(document.getElementById($oj$$61$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$));
    if (0 < $defaultLayer$$2$$.length) {
      return $defaultLayer$$2$$;
    }
    $defaultLayer$$2$$ = $$$$56$$("\x3cdiv\x3e");
    $defaultLayer$$2$$.attr("role", "presentation");
    $defaultLayer$$2$$.attr("id", $oj$$61$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$);
    $defaultLayer$$2$$.prependTo($$$$56$$(document.body));
    return $defaultLayer$$2$$;
  };
  $oj$$61$$.$ZOrderUtils$.$addToAncestorLayer$ = function $$oj$$61$$$$ZOrderUtils$$$addToAncestorLayer$$($popup$$8$$, $ancestorLayer_launcher$$23$$, $events$$13$$, $modality$$3$$, $layerClass$$5_surrogate$$2$$, $layer$$7_layerLevel$$1$$) {
    var $popupDom$$ = $popup$$8$$[0];
    if ($oj$$61$$.$ZOrderUtils$.$_hasSurrogate$($popupDom$$.parentNode)) {
      throw Error("JET Popup is already open - id: " + $popupDom$$.getAttribute("id"));
    }
    $ancestorLayer_launcher$$23$$ = $oj$$61$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$7_layerLevel$$1$$ === $oj$$61$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$ ? null : $ancestorLayer_launcher$$23$$);
    $layer$$7_layerLevel$$1$$ = $$$$56$$("\x3cdiv\x3e");
    var $popupId$$2$$ = $popup$$8$$.attr("id");
    $oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($popupId$$2$$) ? $layer$$7_layerLevel$$1$$.uniqueId() : $layer$$7_layerLevel$$1$$.attr("id", [$popupId$$2$$, "layer"].join("_"));
    $layer$$7_layerLevel$$1$$.attr("role", "presentation");
    $layer$$7_layerLevel$$1$$.addClass($layerClass$$5_surrogate$$2$$);
    $popup$$8$$.after($layer$$7_layerLevel$$1$$);
    $layerClass$$5_surrogate$$2$$ = $oj$$61$$.$ZOrderUtils$.$_createSurrogate$($layer$$7_layerLevel$$1$$);
    $oj$$61$$.Components.$subtreeDetached$($popupDom$$);
    $popup$$8$$.appendTo($layer$$7_layerLevel$$1$$);
    $layer$$7_layerLevel$$1$$.appendTo($ancestorLayer_launcher$$23$$);
    $oj$$61$$.Components.$subtreeAttached$($popupDom$$);
    $oj$$61$$.$ZOrderUtils$.$applyModality$($layer$$7_layerLevel$$1$$, $modality$$3$$);
    $oj$$61$$.$ZOrderUtils$.$applyEvents$($layer$$7_layerLevel$$1$$, $events$$13$$, $layerClass$$5_surrogate$$2$$);
  };
  $oj$$61$$.$ZOrderUtils$.$applyEvents$ = function $$oj$$61$$$$ZOrderUtils$$$applyEvents$$($layer$$8$$, $events$$14$$, $surrogate$$3$$) {
    if (!$surrogate$$3$$) {
      var $surrogateId$$1$$ = $layer$$8$$.attr($oj$$61$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
      $surrogateId$$1$$ && ($surrogate$$3$$ = $$$$56$$(document.getElementById($surrogateId$$1$$)));
    }
    $layer$$8$$.data($oj$$61$$.$ZOrderUtils$.$_EVENTS_DATA$, $events$$14$$);
    $surrogate$$3$$ && $events$$14$$ && $$$$56$$.isFunction($events$$14$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]) && ($surrogate$$3$$.surrogate(), $surrogate$$3$$.surrogate("option", "beforeDestroy", $events$$14$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]));
  };
  $oj$$61$$.$ZOrderUtils$.$getEvents$ = function $$oj$$61$$$$ZOrderUtils$$$getEvents$$($layer$$9$$) {
    return $layer$$9$$.data($oj$$61$$.$ZOrderUtils$.$_EVENTS_DATA$);
  };
  $oj$$61$$.$ZOrderUtils$.$_createSurrogate$ = function $$oj$$61$$$$ZOrderUtils$$$_createSurrogate$$($layer$$10$$) {
    var $surrogate$$4$$ = $$$$56$$("\x3cscript\x3e"), $layerId$$1_surrogateId$$2$$ = $layer$$10$$.attr("id");
    $oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($layerId$$1_surrogateId$$2$$) ? $surrogate$$4$$.uniqueId() : $surrogate$$4$$.attr("id", [$layerId$$1_surrogateId$$2$$, "surrogate"].join("_"));
    $surrogate$$4$$.insertBefore($layer$$10$$);
    $layerId$$1_surrogateId$$2$$ = $surrogate$$4$$.attr("id");
    $layer$$10$$.attr($oj$$61$$.$ZOrderUtils$.$_SURROGATE_ATTR$, $layerId$$1_surrogateId$$2$$);
    return $surrogate$$4$$;
  };
  $oj$$61$$.$ZOrderUtils$.$_removeSurrogate$ = function $$oj$$61$$$$ZOrderUtils$$$_removeSurrogate$$($layer$$11$$) {
    var $surrogate$$5_surrogateId$$3$$ = $layer$$11$$.attr($oj$$61$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $layer$$11$$.removeAttr($oj$$61$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $surrogate$$5_surrogateId$$3$$ = $$$$56$$(document.getElementById($surrogate$$5_surrogateId$$3$$));
    $layer$$11$$.insertAfter($surrogate$$5_surrogateId$$3$$);
    $surrogate$$5_surrogateId$$3$$.surrogate("option", "beforeDestroy", null);
    $surrogate$$5_surrogateId$$3$$.remove();
  };
  $oj$$61$$.$ZOrderUtils$.$removeFromAncestorLayer$ = function $$oj$$61$$$$ZOrderUtils$$$removeFromAncestorLayer$$($popup$$9$$) {
    var $layer$$12$$ = $oj$$61$$.$ZOrderUtils$.$getFirstAncestorLayer$($popup$$9$$);
    $oj$$61$$.$ZOrderUtils$.$preOrderVisit$($layer$$12$$, $oj$$61$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$);
    $oj$$61$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$12$$);
    $layer$$12$$.removeData($oj$$61$$.$ZOrderUtils$.$_EVENTS_DATA$);
    $layer$$12$$.removeData($oj$$61$$.$ZOrderUtils$.$_MODALITY_DATA$);
    var $popupDom$$1$$ = $popup$$9$$[0];
    $oj$$61$$.Components.$subtreeDetached$($popupDom$$1$$);
    $oj$$61$$.$ZOrderUtils$.$_removeSurrogate$($layer$$12$$);
    $oj$$61$$.$DomUtils$.unwrap($popup$$9$$, $layer$$12$$);
    $oj$$61$$.Components.$subtreeAttached$($popupDom$$1$$);
  };
  $oj$$61$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$ = function $$oj$$61$$$$ZOrderUtils$$$_closeDescendantPopupsCallback$$($layer$$13$$, $context$$147$$) {
    if (0 < $context$$147$$.level) {
      return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$16$$ = $layer$$13$$.data($oj$$61$$.$ZOrderUtils$.$_EVENTS_DATA$);
    if ($events$$16$$ && $$$$56$$.isFunction($events$$16$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_CLOSE$])) {
      $events$$16$$[$oj$$61$$.$PopupService$.$EVENT$.$POPUP_CLOSE$]();
    }
    return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$61$$.$ZOrderUtils$.$applyModality$ = function $$oj$$61$$$$ZOrderUtils$$$applyModality$$($layer$$14$$, $modality$$4$$) {
    var $currModality$$ = $layer$$14$$.data($oj$$61$$.$ZOrderUtils$.$_MODALITY_DATA$);
    $layer$$14$$.data($oj$$61$$.$ZOrderUtils$.$_MODALITY_DATA$, $modality$$4$$);
    $oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($currModality$$) ? $oj$$61$$.$PopupService$.$MODALITY$.$MODAL$ === $modality$$4$$ ? $oj$$61$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$14$$) : $oj$$61$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$14$$) : $currModality$$ !== $modality$$4$$ && ($modality$$4$$ !== $currModality$$ && $modality$$4$$ === $oj$$61$$.$PopupService$.$MODALITY$.$MODAL$ ? $oj$$61$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$14$$) : $oj$$61$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$14$$));
  };
  $oj$$61$$.$ZOrderUtils$.$hasModalDialogOpen$ = function $$oj$$61$$$$ZOrderUtils$$$hasModalDialogOpen$$() {
    for (var $children$$30$$ = $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$().children(), $i$$423$$ = $children$$30$$.length - 1;-1 < $i$$423$$;$i$$423$$--) {
      if ($$$$56$$($children$$30$$[$i$$423$$]).hasClass($oj$$61$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$61$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$ = function $$oj$$61$$$$ZOrderUtils$$$_addOverlayToAncestorLayer$$($layer$$15$$) {
    var $overlay$$1_overlayId$$ = $$$$56$$("\x3cdiv\x3e");
    $overlay$$1_overlayId$$.addClass($oj$$61$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$);
    $overlay$$1_overlayId$$.addClass($layer$$15$$[0].className);
    $overlay$$1_overlayId$$.attr("role", "presentation");
    var $layerId$$2$$ = $layer$$15$$.attr("id");
    $oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($layerId$$2$$) ? $overlay$$1_overlayId$$.uniqueId() : $overlay$$1_overlayId$$.attr("id", [$layerId$$2$$, "overlay"].join("_"));
    $layer$$15$$.before($overlay$$1_overlayId$$);
    $overlay$$1_overlayId$$ = $overlay$$1_overlayId$$.attr("id");
    $layer$$15$$.attr($oj$$61$$.$ZOrderUtils$.$_OVERLAY_ATTR$, $overlay$$1_overlayId$$);
  };
  $oj$$61$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$ = function $$oj$$61$$$$ZOrderUtils$$$_removeOverlayFromAncestorLayer$$($layer$$16$$) {
    var $overlayId$$1$$ = $layer$$16$$.attr($oj$$61$$.$ZOrderUtils$.$_OVERLAY_ATTR$);
    $oj$$61$$.$StringUtils$.$isEmptyOrUndefined$($overlayId$$1$$) || ($layer$$16$$.removeAttr($oj$$61$$.$ZOrderUtils$.$_OVERLAY_ATTR$), $$$$56$$(document.getElementById($overlayId$$1$$)).remove());
  };
  $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$ = {$ACCEPT$:0, $REJECT$:1, $COMPLETE$:2};
  $oj$$61$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$ = {$PRE_ORDER$:0, $POST_ORDER$:1};
  $oj$$61$$.$ZOrderUtils$.$postOrderVisit$ = function $$oj$$61$$$$ZOrderUtils$$$postOrderVisit$$($layer$$17$$, $callback$$119$$, $context$$148$$) {
    $context$$148$$ || ($context$$148$$ = {});
    $context$$148$$.level = 0;
    $context$$148$$.type = $oj$$61$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$;
    $oj$$61$$.$ZOrderUtils$.$_visitTree$($layer$$17$$, $callback$$119$$, $context$$148$$);
  };
  $oj$$61$$.$ZOrderUtils$.$preOrderVisit$ = function $$oj$$61$$$$ZOrderUtils$$$preOrderVisit$$($layer$$18$$, $callback$$120$$, $context$$149$$) {
    $context$$149$$ || ($context$$149$$ = {});
    $context$$149$$.level = 0;
    $context$$149$$.type = $oj$$61$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$;
    $oj$$61$$.$ZOrderUtils$.$_visitTree$($layer$$18$$, $callback$$120$$, $context$$149$$);
  };
  $oj$$61$$.$ZOrderUtils$.$_visitTree$ = function $$oj$$61$$$$ZOrderUtils$$$_visitTree$$($children$$31_layer$$19$$, $callback$$121$$, $context$$150$$) {
    var $level$$44$$ = $context$$150$$.level;
    $children$$31_layer$$19$$ = $children$$31_layer$$19$$.children();
    for (var $i$$424$$ = $children$$31_layer$$19$$.length - 1;-1 < $i$$424$$;$i$$424$$--) {
      var $child$$24$$ = $$$$56$$($children$$31_layer$$19$$[$i$$424$$]);
      if ($oj$$61$$.$ZOrderUtils$.$_hasSurrogate$($child$$24$$[0])) {
        var $vrtn$$;
        if ($context$$150$$.type === $oj$$61$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$) {
          $vrtn$$ = $callback$$121$$($child$$24$$, $context$$150$$);
          if ($vrtn$$ === $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
        $context$$150$$.level = $level$$44$$ + 1;
        $vrtn$$ = $oj$$61$$.$ZOrderUtils$.$_visitTree$($child$$24$$, $callback$$121$$, $context$$150$$);
        $context$$150$$.level = $level$$44$$;
        if ($vrtn$$ === $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
          return $vrtn$$;
        }
        if ($context$$150$$.type === $oj$$61$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$) {
          $vrtn$$ = $callback$$121$$($child$$24$$, $context$$150$$);
          if ($vrtn$$ === $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
      }
    }
    return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$61$$.$ZOrderUtils$.$_hasSurrogate$ = function $$oj$$61$$$$ZOrderUtils$$$_hasSurrogate$$($element$$138$$) {
    return 1 === $element$$138$$.nodeType && $element$$138$$.hasAttribute($oj$$61$$.$ZOrderUtils$.$_SURROGATE_ATTR$) ? !0 : !1;
  };
  $oj$$61$$.$ZOrderUtils$.$hasPopupsOpen$ = function $$oj$$61$$$$ZOrderUtils$$$hasPopupsOpen$$() {
    return 0 < $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$().children().length;
  };
  $oj$$61$$.$ZOrderUtils$.$getOpenPopupCount$ = function $$oj$$61$$$$ZOrderUtils$$$getOpenPopupCount$$() {
    var $context$$151$$ = {popupCount:0}, $defaultLayer$$5$$ = $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$61$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$5$$, $oj$$61$$.$ZOrderUtils$.$_openPopupCountCallback$, $context$$151$$);
    return $context$$151$$.popupCount;
  };
  $oj$$61$$.$ZOrderUtils$.$_openPopupCountCallback$ = function $$oj$$61$$$$ZOrderUtils$$$_openPopupCountCallback$$($layer$$20$$, $context$$152$$) {
    $context$$152$$.popupCount += 1;
    return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$61$$.$ZOrderUtils$.$findOpenPopups$ = function $$oj$$61$$$$ZOrderUtils$$$findOpenPopups$$() {
    var $context$$153$$ = {}, $defaultLayer$$6_popups$$2$$ = [];
    $context$$153$$.popups = $defaultLayer$$6_popups$$2$$;
    $defaultLayer$$6_popups$$2$$ = $oj$$61$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$61$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$6_popups$$2$$, $oj$$61$$.$ZOrderUtils$.$_openPopupsCallback$, $context$$153$$);
    $defaultLayer$$6_popups$$2$$ = $context$$153$$.popups;
    return $$$$56$$($defaultLayer$$6_popups$$2$$);
  };
  $oj$$61$$.$ZOrderUtils$.$_openPopupsCallback$ = function $$oj$$61$$$$ZOrderUtils$$$_openPopupsCallback$$($layer$$21$$, $context$$154$$) {
    $context$$154$$.popups.push($layer$$21$$[0]);
    return $oj$$61$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$61$$.$ZOrderUtils$.$compareStackingContexts$ = function $$oj$$61$$$$ZOrderUtils$$$compareStackingContexts$$($el1$$1$$, $el2$$1$$) {
    function $describeStackingContext$$($element$$139$$, $allLevels$$) {
      for (var $positions$$ = ["absolute", "relative", "fixed"], $parents$$7$$ = $element$$139$$.parents(), $stack_tmp$$2$$ = [], $i$$426$$ = $parents$$7$$.length - 1;-1 < $i$$426$$;$i$$426$$--) {
        $stack_tmp$$2$$.push($$$$56$$($parents$$7$$[$i$$426$$]));
      }
      $parents$$7$$ = $stack_tmp$$2$$;
      $parents$$7$$.push($element$$139$$);
      for (var $stack_tmp$$2$$ = [], $level$$45$$ = 0, $i$$426$$ = 0;$i$$426$$ < $parents$$7$$.length;$i$$426$$++) {
        var $order_parent$$51$$ = $parents$$7$$[$i$$426$$], $position$$39$$ = $order_parent$$51$$.css("position"), $opacity$$1$$ = $oj$$61$$.$DomUtils$.$getCSSLengthAsFloat$($order_parent$$51$$.css("opacity")), $zindex$$ = $oj$$61$$.$DomUtils$.$getCSSLengthAsInt$($order_parent$$51$$.css("z-index")), $order_parent$$51$$ = $$$$56$$.inArray($order_parent$$51$$[0], $order_parent$$51$$.parent().children());
        -1 < $$$$56$$.inArray($position$$39$$, $positions$$) ? $stack_tmp$$2$$.push({weight:[$level$$45$$++, $zindex$$, $order_parent$$51$$], order:[$order_parent$$51$$]}) : 1 > $opacity$$1$$ ? $stack_tmp$$2$$.push({weight:[$level$$45$$++, 1, $order_parent$$51$$], order:[$order_parent$$51$$]}) : $allLevels$$ && $stack_tmp$$2$$.push({weight:[0, 0, $order_parent$$51$$], order:[$order_parent$$51$$]});
      }
      return $stack_tmp$$2$$;
    }
    function $compareSets$$($n1$$3$$, $n2$$3$$) {
      for (var $maxLen$$1$$ = Math.max($n1$$3$$.length, $n2$$3$$.length), $i$$427$$ = 0;$i$$427$$ < $maxLen$$1$$;$i$$427$$++) {
        var $e1$$1$$ = $i$$427$$ < $n1$$3$$.length ? $n1$$3$$[$i$$427$$] : -1, $e2$$1$$ = $i$$427$$ < $n2$$3$$.length ? $n2$$3$$[$i$$427$$] : -1;
        if ($e1$$1$$ !== $e2$$1$$) {
          return $e1$$1$$ < $e2$$1$$ ? -1 : 1;
        }
      }
      return 0;
    }
    $oj$$61$$.$Assert$.$assertPrototype$($el1$$1$$, jQuery);
    $oj$$61$$.$Assert$.$assertPrototype$($el2$$1$$, jQuery);
    for (var $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !1), $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !1), $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length), $i$$425$$ = 0;$i$$425$$ < $maxLen$$;$i$$425$$++) {
      var $c$$51_e1$$ = $i$$425$$ < $n1$$2$$.length ? $n1$$2$$[$i$$425$$].weight : [-1], $e2$$ = $i$$425$$ < $n2$$2$$.length ? $n2$$2$$[$i$$425$$].weight : [-1], $c$$51_e1$$ = $compareSets$$($c$$51_e1$$, $e2$$);
      if (0 !== $c$$51_e1$$) {
        return $c$$51_e1$$;
      }
    }
    $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !0);
    $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !0);
    $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length);
    for ($i$$425$$ = 0;$i$$425$$ < $maxLen$$;$i$$425$$++) {
      if ($c$$51_e1$$ = $i$$425$$ < $n1$$2$$.length ? $n1$$2$$[$i$$425$$].order : [-1], $e2$$ = $i$$425$$ < $n2$$2$$.length ? $n2$$2$$[$i$$425$$].order : [-1], $c$$51_e1$$ = $compareSets$$($c$$51_e1$$, $e2$$), 0 !== $c$$51_e1$$) {
        return $c$$51_e1$$;
      }
    }
    return 0;
  };
  $oj$$61$$.$ZOrderUtils$.$eatEvent$ = function $$oj$$61$$$$ZOrderUtils$$$eatEvent$$($event$$591$$) {
    $event$$591$$.stopPropagation();
    $event$$591$$.preventDefault();
  };
  $oj$$61$$.$ZOrderUtils$.$_EVENTS_DATA$ = "oj-popup-events";
  $oj$$61$$.$ZOrderUtils$.$_MODALITY_DATA$ = "oj-popup-modality";
  $oj$$61$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$ = "__oj_zorder_container";
  $oj$$61$$.$ZOrderUtils$.$_SURROGATE_ATTR$ = "data-oj-surrogate-id";
  $oj$$61$$.$ZOrderUtils$.$_OVERLAY_ATTR$ = "data-oj-overlayid";
  $oj$$61$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$ = "oj-component-overlay";
  $$$$56$$.widget("oj.surrogate", {options:{create:null, beforeDestroy:null}, _create:function() {
    this._super();
    this.element.uniqueId();
  }, _destroy:function() {
    this._trigger("beforeDestroy");
    this.element.removeUniqueId();
    this._super();
  }});
  $oj$$61$$.$SimpleTapRecognizer$ = function $$oj$$61$$$$SimpleTapRecognizer$$($tapCallback$$) {
    this.$_tapCallback$ = $tapCallback$$;
    this.Init();
  };
  $oj$$61$$.$Object$.$createSubclass$($oj$$61$$.$SimpleTapRecognizer$, $oj$$61$$.$Object$, "oj.SimpleTapRecognizer");
  $oj$$61$$.$SimpleTapRecognizer$.prototype.Init = function $$oj$$61$$$$SimpleTapRecognizer$$$Init$() {
    $oj$$61$$.$SimpleTapRecognizer$.$superclass$.Init.call(this);
    for (var $eventHandlerCallback$$ = this.$_eventHandlerCallback$ = $$$$56$$.proxy(this.$_eventHandler$, this), $docElement$$1$$ = document.documentElement, $i$$428$$ = 0;$i$$428$$ < $oj$$61$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$428$$++) {
      $docElement$$1$$.addEventListener($oj$$61$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$428$$], $eventHandlerCallback$$, !0);
    }
  };
  $oj$$61$$.$SimpleTapRecognizer$.prototype.$_eventHandler$ = function $$oj$$61$$$$SimpleTapRecognizer$$$$_eventHandler$$($event$$592_tapStart$$) {
    var $tapCallback$$1$$ = this.$_tapCallback$, $eventType$$53$$ = $event$$592_tapStart$$.type;
    "touchstart" === $eventType$$53$$ ? (this.$_touchStartEvent$ = $event$$592_tapStart$$, this.$_touchStartEvent$.$_tapStart$ = (new Date).getTime()) : "touchmove" === $eventType$$53$$ || "touchcancel" === $eventType$$53$$ ? delete this.$_touchStartEvent$ : "touchend" === $eventType$$53$$ && (this.$_touchStartEvent$ && ($event$$592_tapStart$$ = this.$_touchStartEvent$.$_tapStart$, isNaN($event$$592_tapStart$$) ? $tapCallback$$1$$(this.$_touchStartEvent$) : (new Date).getTime() - $event$$592_tapStart$$ < 
    $oj$$61$$.$SimpleTapRecognizer$.$_PRESSHOLDTHRESSHOLD$ && $tapCallback$$1$$(this.$_touchStartEvent$)), delete this.$_touchStartEvent$);
  };
  $oj$$61$$.$SimpleTapRecognizer$.prototype.destroy = function $$oj$$61$$$$SimpleTapRecognizer$$$destroy$() {
    delete this.$_tapCallback$;
    var $eventHandlerCallback$$1$$ = this.$_eventHandlerCallback$;
    delete this.$_eventHandlerCallback$;
    for (var $docElement$$2$$ = document.documentElement, $i$$429$$ = 0;$i$$429$$ < $oj$$61$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$429$$++) {
      $docElement$$2$$.removeEventListener($oj$$61$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$429$$], $eventHandlerCallback$$1$$, !0);
    }
  };
  $oj$$61$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$ = ["touchstart", "touchmove", "touchcancel", "touchend"];
  $oj$$61$$.$SimpleTapRecognizer$.$_PRESSHOLDTHRESSHOLD$ = 700;
  $oj$$61$$.$PopupLiveRegion$ = function $$oj$$61$$$$PopupLiveRegion$$() {
    this.Init();
  };
  $oj$$61$$.$Object$.$createSubclass$($oj$$61$$.$PopupLiveRegion$, $oj$$61$$.$Object$, "oj.PopupLiveRegion");
  $oj$$61$$.$PopupLiveRegion$.prototype.Init = function $$oj$$61$$$$PopupLiveRegion$$$Init$() {
    $oj$$61$$.$PopupLiveRegion$.$superclass$.Init.call(this);
    isNaN($oj$$61$$.$PopupLiveRegion$.$_refCounter$) ? $oj$$61$$.$PopupLiveRegion$.$_refCounter$ = 1 : ++$oj$$61$$.$PopupLiveRegion$.$_refCounter$;
  };
  $oj$$61$$.$PopupLiveRegion$.prototype.destroy = function $$oj$$61$$$$PopupLiveRegion$$$destroy$() {
    if (!isNaN($oj$$61$$.$PopupLiveRegion$.$_refCounter$) && (--$oj$$61$$.$PopupLiveRegion$.$_refCounter$, 1 > $oj$$61$$.$PopupLiveRegion$.$_refCounter$)) {
      var $liveRegion$$2$$ = $$$$56$$(document.getElementById($oj$$61$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$));
      0 < $liveRegion$$2$$.length && $liveRegion$$2$$.remove();
    }
  };
  $oj$$61$$.$PopupLiveRegion$.prototype.$announce$ = function $$oj$$61$$$$PopupLiveRegion$$$$announce$$($message$$35$$) {
    if (!$oj$$61$$.$StringUtils$.$isEmpty$($message$$35$$)) {
      var $liveRegion$$3$$ = $oj$$61$$.$PopupLiveRegion$.$_getLiveRegion$();
      $liveRegion$$3$$.children().remove();
      $$$$56$$("\x3cdiv\x3e").text($message$$35$$).appendTo($liveRegion$$3$$);
    }
  };
  $oj$$61$$.$PopupLiveRegion$.$_getLiveRegion$ = function $$oj$$61$$$$PopupLiveRegion$$$_getLiveRegion$$() {
    var $liveRegion$$4$$ = $$$$56$$(document.getElementById($oj$$61$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$));
    0 === $liveRegion$$4$$.length && ($liveRegion$$4$$ = $$$$56$$("\x3cdiv\x3e"), $liveRegion$$4$$.attr({id:$oj$$61$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$, role:"log", "aria-live":"polite", "aria-relevant":"additions"}), $liveRegion$$4$$.addClass("oj-helper-hidden-accessible"), $liveRegion$$4$$.appendTo(document.body));
    return $liveRegion$$4$$;
  };
  $oj$$61$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$ = "__oj_popup_arialiveregion";
  $oj$$61$$.$PopupSkipLink$ = function $$oj$$61$$$$PopupSkipLink$$($sibling$$, $message$$36$$, $callback$$122$$, $id$$48$$) {
    $oj$$61$$.$Assert$.$assertPrototype$($sibling$$, jQuery);
    $oj$$61$$.$Assert$.$assertString$($message$$36$$);
    $oj$$61$$.$Assert$.$assertFunction$($callback$$122$$);
    $oj$$61$$.$Assert$.$assertStringOrNull$($id$$48$$);
    this.$_sibling$ = $sibling$$;
    this.$_message$ = $message$$36$$;
    this.$_callback$ = $callback$$122$$;
    this.$_id$ = $id$$48$$ ? $id$$48$$ : "";
    this.Init();
  };
  $oj$$61$$.$Object$.$createSubclass$($oj$$61$$.$PopupSkipLink$, $oj$$61$$.$Object$, "oj.PopupSkipLink");
  $oj$$61$$.$PopupSkipLink$.prototype.Init = function $$oj$$61$$$$PopupSkipLink$$$Init$() {
    $oj$$61$$.$PopupSkipLink$.$superclass$.Init.call(this);
    var $sibling$$1$$ = this.$_sibling$, $callback$$123$$ = this.$_callback$, $message$$37$$ = this.$_message$;
    delete this.$_message$;
    var $id$$49$$ = this.$_id$;
    delete this.$_id$;
    var $link$$2$$ = $$$$56$$("\x3ca\x3e").attr({tabindex:"-1", href:"#"});
    $oj$$61$$.$StringUtils$.$isEmpty$($id$$49$$) || $link$$2$$.attr("id", $id$$49$$);
    $link$$2$$.addClass("oj-helper-hidden-accessible");
    $link$$2$$.text($message$$37$$);
    $link$$2$$.insertAfter($sibling$$1$$);
    $link$$2$$.on("click", $callback$$123$$);
    $sibling$$1$$.data($oj$$61$$.$PopupSkipLink$.$_SKIPLINK_ATTR$, $link$$2$$);
  };
  $oj$$61$$.$PopupSkipLink$.prototype.destroy = function $$oj$$61$$$$PopupSkipLink$$$destroy$() {
    var $sibling$$2$$ = this.$_sibling$;
    delete this.$_sibling$;
    var $callback$$124$$ = this.$_callback$;
    delete this.$_callback$;
    if ($sibling$$2$$) {
      var $link$$3$$ = $sibling$$2$$.data($oj$$61$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $sibling$$2$$.removeData($oj$$61$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $link$$3$$ && ($link$$3$$.off("click", $callback$$124$$), $link$$3$$.remove());
    }
  };
  $oj$$61$$.$PopupSkipLink$.prototype.getLink = function $$oj$$61$$$$PopupSkipLink$$$getLink$() {
    var $sibling$$3$$ = this.$_sibling$, $link$$4$$;
    $sibling$$3$$ && ($link$$4$$ = $sibling$$3$$.data($oj$$61$$.$PopupSkipLink$.$_SKIPLINK_ATTR$));
    return $link$$4$$;
  };
  $oj$$61$$.$PopupSkipLink$.$_SKIPLINK_ATTR$ = "oj-skiplink";
  $oj$$61$$.$PositionUtils$ = {};
  $oj$$61$$.$PositionUtils$.$normalizeHorizontalAlignment$ = function $$oj$$61$$$$PositionUtils$$$normalizeHorizontalAlignment$$($position$$40$$, $isRtl$$7$$) {
    for (var $target$$102$$ = $$$$56$$.extend({}, $position$$40$$), $i$$430$$ = 0;$i$$430$$ < $oj$$61$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$.length;$i$$430$$++) {
      var $propName$$5$$ = $oj$$61$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$[$i$$430$$], $align$$ = $target$$102$$[$propName$$5$$];
      $align$$ && ($target$$102$$[$propName$$5$$] = $align$$.replace("start", $isRtl$$7$$ ? "right" : "left").replace("end", $isRtl$$7$$ ? "left" : "right").replace("\x3c", $isRtl$$7$$ ? "+" : "-").replace("\x3e", $isRtl$$7$$ ? "-" : "+"));
    }
    return $target$$102$$;
  };
  $oj$$61$$.$PositionUtils$.$normalizePositionOf$ = function $$oj$$61$$$$PositionUtils$$$normalizePositionOf$$($of$$, $launcher$$24$$, $event$$593$$) {
    return "event" === $of$$ ? $event$$593$$ : null == $of$$ || "launcher" === $of$$ ? $launcher$$24$$ : $of$$;
  };
  $oj$$61$$.$PositionUtils$.$_normalizeEventForPosition$ = function $$oj$$61$$$$PositionUtils$$$_normalizeEventForPosition$$($event$$594$$) {
    $$$$56$$.each(["pageX", "pageY"], function($index$$255$$, $pagePos$$) {
      if ($event$$594$$ && void 0 === $event$$594$$[$pagePos$$] && $event$$594$$.originalEvent) {
        var $firstTouch$$6_originalEvent$$11$$ = $event$$594$$.originalEvent, $touchList_type$$99$$ = $firstTouch$$6_originalEvent$$11$$.type;
        ($touchList_type$$99$$ = "touchstart" === $touchList_type$$99$$ || "touchmove" === $touchList_type$$99$$ ? "touches" : "touchend" === $touchList_type$$99$$ ? "changedTouches" : null) && ($firstTouch$$6_originalEvent$$11$$ = $firstTouch$$6_originalEvent$$11$$[$touchList_type$$99$$][0]) && ($event$$594$$[$pagePos$$] = $firstTouch$$6_originalEvent$$11$$[$pagePos$$]);
      }
    });
  };
  $oj$$61$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$ = ["my", "at"];
  $oj$$61$$.$PositionUtils$.$isAligningPositionClipped$ = function $$oj$$61$$$$PositionUtils$$$isAligningPositionClipped$$($props$$23$$) {
    return $props$$23$$.target && 0 < $props$$23$$.target.height && 0 < $props$$23$$.target.width ? !$oj$$61$$.$DomUtils$.$isWithinViewport$($props$$23$$.target.element) : !1;
  };
  $$$$56$$.ui.position.flipcenter = {left:function $$$$$56$$$ui$position$flipcenter$left$($position$$41$$, $data$$168$$) {
    var $posLeft$$ = $position$$41$$.left;
    $$$$56$$.ui.position.flip.left.call(this, $position$$41$$, $data$$168$$);
    var $overRight_within$$ = $data$$168$$.within, $dirFactor_withinOffset$$ = $overRight_within$$.isWindow ? $overRight_within$$.scrollLeft : $overRight_within$$.offset.left, $collisionPosLeft$$ = $position$$41$$.left - $data$$168$$.collisionPosition.marginLeft, $overRight_within$$ = $collisionPosLeft$$ + $data$$168$$.collisionWidth - $overRight_within$$.width - $dirFactor_withinOffset$$;
    if (0 < $dirFactor_withinOffset$$ - $collisionPosLeft$$ || 0 < $overRight_within$$) {
      "right" === $data$$168$$.at[0] ? $posLeft$$ -= $data$$168$$.targetWidth / 2 : "left" === $data$$168$$.at[0] && ($posLeft$$ += $data$$168$$.targetWidth / 2), $dirFactor_withinOffset$$ = "rtl" === $oj$$61$$.$DomUtils$.$getReadingDirection$() ? -1 : 1, $posLeft$$ -= $data$$168$$.elemWidth / 2 * $dirFactor_withinOffset$$, $position$$41$$.left = $posLeft$$;
    }
  }, top:function $$$$$56$$$ui$position$flipcenter$top$($position$$42$$, $data$$169$$) {
    var $posTop$$ = $position$$42$$.top;
    $$$$56$$.ui.position.flip.top.call(this, $position$$42$$, $data$$169$$);
    var $within$$1_withinOffset$$1$$ = $data$$169$$.within, $within$$1_withinOffset$$1$$ = $within$$1_withinOffset$$1$$.isWindow ? $within$$1_withinOffset$$1$$.scrollTop : $within$$1_withinOffset$$1$$.offset.top, $collisionPosTop$$ = $position$$42$$.top - $data$$169$$.collisionPosition.marginTop, $overBottom$$ = $collisionPosTop$$ + $data$$169$$.collisionHeight - $data$$169$$.within.height - $within$$1_withinOffset$$1$$;
    if (0 < $within$$1_withinOffset$$1$$ - $collisionPosTop$$ || 0 < $overBottom$$) {
      "top" === $data$$169$$.at[1] ? $posTop$$ += $data$$169$$.targetHeight / 2 : "bottom" === $data$$169$$.at[1] && ($posTop$$ -= $data$$169$$.targetHeight / 2), $posTop$$ += $data$$169$$.elemHeight / 2, $position$$42$$.top = $posTop$$;
    }
  }};
  $$$$56$$.ui.position.flip = {left:function $$$$$56$$$ui$position$flip$left$($position$$43$$, $data$$170$$) {
    var $offsetLeft_within$$2$$ = $data$$170$$.within, $withinOffset$$2$$ = $offsetLeft_within$$2$$.offset.left + $offsetLeft_within$$2$$.scrollLeft, $outerWidth$$1$$ = $offsetLeft_within$$2$$.width, $offsetLeft_within$$2$$ = $offsetLeft_within$$2$$.isWindow ? $offsetLeft_within$$2$$.scrollLeft : $offsetLeft_within$$2$$.offset.left, $collisionPosLeft$$1_overRight$$1$$ = $position$$43$$.left - $data$$170$$.collisionPosition.marginLeft, $overLeft$$1$$ = $collisionPosLeft$$1_overRight$$1$$ - $offsetLeft_within$$2$$, 
    $collisionPosLeft$$1_overRight$$1$$ = $collisionPosLeft$$1_overRight$$1$$ + $data$$170$$.collisionWidth - $outerWidth$$1$$ - $offsetLeft_within$$2$$, $myOffset$$ = "left" === $data$$170$$.my[0] ? -$data$$170$$.elemWidth : "right" === $data$$170$$.my[0] ? $data$$170$$.elemWidth : 0, $atOffset$$ = "left" === $data$$170$$.at[0] ? $data$$170$$.targetWidth : "right" === $data$$170$$.at[0] ? -$data$$170$$.targetWidth : 0, $offset$$31$$ = -2 * $data$$170$$.offset[0], $newOverRight$$, $newOverLeft$$;
    if (0 > $overLeft$$1$$ && Math.abs($newOverRight$$) < Math.abs($newOverLeft$$)) {
      if ($newOverRight$$ = $position$$43$$.left + $myOffset$$ + $atOffset$$ + $offset$$31$$ + $data$$170$$.collisionWidth - $outerWidth$$1$$ - $withinOffset$$2$$, 0 > $newOverRight$$ || $newOverRight$$ < Math.abs($overLeft$$1$$)) {
        $position$$43$$.left += $myOffset$$ + $atOffset$$ + $offset$$31$$;
      }
    } else {
      0 < $collisionPosLeft$$1_overRight$$1$$ && ($newOverLeft$$ = $position$$43$$.left - $data$$170$$.collisionPosition.marginLeft + $myOffset$$ + $atOffset$$ + $offset$$31$$ - $offsetLeft_within$$2$$, 0 < $newOverLeft$$ || Math.abs($newOverLeft$$) < $collisionPosLeft$$1_overRight$$1$$) && ($position$$43$$.left += $myOffset$$ + $atOffset$$ + $offset$$31$$);
    }
  }, top:function $$$$$56$$$ui$position$flip$top$($position$$44$$, $data$$171$$) {
    var $overTop$$1_within$$3$$ = $data$$171$$.within, $newOverBottom_newOverTop_withinOffset$$3$$ = $overTop$$1_within$$3$$.offset.top + $overTop$$1_within$$3$$.scrollTop, $outerHeight$$1$$ = $overTop$$1_within$$3$$.height, $offsetTop$$ = $overTop$$1_within$$3$$.isWindow ? $overTop$$1_within$$3$$.scrollTop : $overTop$$1_within$$3$$.offset.top, $collisionPosTop$$1_overBottom$$1$$ = $position$$44$$.top - $data$$171$$.collisionPosition.marginTop, $overTop$$1_within$$3$$ = $collisionPosTop$$1_overBottom$$1$$ - 
    $offsetTop$$, $collisionPosTop$$1_overBottom$$1$$ = $collisionPosTop$$1_overBottom$$1$$ + $data$$171$$.collisionHeight - $outerHeight$$1$$ - $offsetTop$$, $myOffset$$1$$ = "top" === $data$$171$$.my[1] ? -$data$$171$$.elemHeight : "bottom" === $data$$171$$.my[1] ? $data$$171$$.elemHeight : 0, $atOffset$$1$$ = "top" === $data$$171$$.at[1] ? $data$$171$$.targetHeight : "bottom" === $data$$171$$.at[1] ? -$data$$171$$.targetHeight : 0, $offset$$32$$ = -2 * $data$$171$$.offset[1];
    0 > $overTop$$1_within$$3$$ ? ($newOverBottom_newOverTop_withinOffset$$3$$ = $position$$44$$.top + $myOffset$$1$$ + $atOffset$$1$$ + $offset$$32$$ + $data$$171$$.collisionHeight - $outerHeight$$1$$ - $newOverBottom_newOverTop_withinOffset$$3$$, (0 > $newOverBottom_newOverTop_withinOffset$$3$$ || $newOverBottom_newOverTop_withinOffset$$3$$ < Math.abs($overTop$$1_within$$3$$)) && 0 > $collisionPosTop$$1_overBottom$$1$$ && $overTop$$1_within$$3$$ < $collisionPosTop$$1_overBottom$$1$$ && ($position$$44$$.top += 
    $myOffset$$1$$ + $atOffset$$1$$ + $offset$$32$$)) : 0 < $collisionPosTop$$1_overBottom$$1$$ && ($newOverBottom_newOverTop_withinOffset$$3$$ = $position$$44$$.top - $data$$171$$.collisionPosition.marginTop + $myOffset$$1$$ + $atOffset$$1$$ + $offset$$32$$ - $offsetTop$$, 0 < $newOverBottom_newOverTop_withinOffset$$3$$ || Math.abs($newOverBottom_newOverTop_withinOffset$$3$$) < $collisionPosTop$$1_overBottom$$1$$) && ($position$$44$$.top += $myOffset$$1$$ + $atOffset$$1$$ + $offset$$32$$);
  }};
});
