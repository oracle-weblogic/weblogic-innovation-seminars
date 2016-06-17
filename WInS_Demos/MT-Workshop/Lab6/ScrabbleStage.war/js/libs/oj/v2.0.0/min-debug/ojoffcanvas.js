/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$55$$, $$$$50$$, $Hammer$$5$$) {
  $oj$$55$$.$OffcanvasUtils$ = {};
  $goog$exportPath_$$("OffcanvasUtils", $oj$$55$$.$OffcanvasUtils$, $oj$$55$$);
  $oj$$55$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$ = "oj-offcanvasEdge";
  $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$ = "oj-offcanvas";
  $oj$$55$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$ = "oj-mediaQueryListener";
  $oj$$55$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$ = "oj-offcanvasHammer";
  $oj$$55$$.$OffcanvasUtils$.$SELECTOR_KEY$ = "selector";
  $oj$$55$$.$OffcanvasUtils$.$EDGE_START$ = "start";
  $oj$$55$$.$OffcanvasUtils$.$EDGE_END$ = "end";
  $oj$$55$$.$OffcanvasUtils$.$EDGE_TOP$ = "top";
  $oj$$55$$.$OffcanvasUtils$.$EDGE_BOTTOM$ = "bottom";
  $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$ = "displayMode";
  $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ = "push";
  $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ = "overlay";
  $oj$$55$$.$OffcanvasUtils$.$MODALITY_KEY$ = "modality";
  $oj$$55$$.$OffcanvasUtils$.$MODALITY_NONE$ = "none";
  $oj$$55$$.$OffcanvasUtils$.$MODALITY_MODAL$ = "modal";
  $oj$$55$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$ = "_dismissHandler";
  $oj$$55$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$ = "_openPromise";
  $oj$$55$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$ = "_closePromise";
  $oj$$55$$.$OffcanvasUtils$.$GLASS_PANE_KEY$ = "_glassPane";
  $oj$$55$$.$OffcanvasUtils$.$SURROGATE_KEY$ = "_surrogate";
  $oj$$55$$.$OffcanvasUtils$.$SURROGATE_ATTR$ = "data-oj-surrogate-id";
  $oj$$55$$.$OffcanvasUtils$.$OUTER_WRAPPER_SELECTOR$ = "oj-offcanvas-outer-wrapper";
  $oj$$55$$.$OffcanvasUtils$.$OPEN_SELECTOR$ = "oj-offcanvas-open";
  $oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$ = "oj-offcanvas-transition";
  $oj$$55$$.$OffcanvasUtils$.$GLASSPANE_SELECTOR$ = "oj-offcanvas-glasspane";
  $oj$$55$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$ = "oj-offcanvas-glasspane-dim";
  $oj$$55$$.$OffcanvasUtils$.$WRAPPER_GENERATED_SELECTOR$ = "oj-offcanvas-generated";
  $oj$$55$$.$OffcanvasUtils$.$_shiftSelector$ = {start:"oj-offcanvas-shift-start", end:"oj-offcanvas-shift-end", top:"oj-offcanvas-shift-down", bottom:"oj-offcanvas-shift-up"};
  $oj$$55$$.$OffcanvasUtils$.$_drawerSelector$ = {start:"oj-offcanvas-start", end:"oj-offcanvas-end", top:"oj-offcanvas-top", bottom:"oj-offcanvas-bottom"};
  $oj$$55$$.$OffcanvasUtils$.$_getDisplayMode$ = function $$oj$$55$$$$OffcanvasUtils$$$_getDisplayMode$$($displayMode_offcanvas$$) {
    $displayMode_offcanvas$$ = $displayMode_offcanvas$$[$oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$];
    $displayMode_offcanvas$$ !== $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ && $displayMode_offcanvas$$ !== $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && ($displayMode_offcanvas$$ = $oj$$55$$.$ThemeUtils$.$getOptionDefaultMap$("offcanvas").displayMode);
    return $displayMode_offcanvas$$;
  };
  $oj$$55$$.$OffcanvasUtils$.$_getDrawer$ = function $$oj$$55$$$$OffcanvasUtils$$$_getDrawer$$($offcanvas$$1$$) {
    return $$$$50$$($offcanvas$$1$$[$oj$$55$$.$OffcanvasUtils$.$SELECTOR_KEY$]);
  };
  $oj$$55$$.$OffcanvasUtils$.$_isModal$ = function $$oj$$55$$$$OffcanvasUtils$$$_isModal$$($offcanvas$$2$$) {
    return $offcanvas$$2$$[$oj$$55$$.$OffcanvasUtils$.$MODALITY_KEY$] === $oj$$55$$.$OffcanvasUtils$.$MODALITY_MODAL$;
  };
  $oj$$55$$.$OffcanvasUtils$.$_isOpen$ = function $$oj$$55$$$$OffcanvasUtils$$$_isOpen$$($drawer$$) {
    return $drawer$$.hasClass($oj$$55$$.$OffcanvasUtils$.$OPEN_SELECTOR$);
  };
  $oj$$55$$.$OffcanvasUtils$.$_getOuterWrapper$ = function $$oj$$55$$$$OffcanvasUtils$$$_getOuterWrapper$$($drawer$$1$$) {
    return $drawer$$1$$.closest("." + $oj$$55$$.$OffcanvasUtils$.$OUTER_WRAPPER_SELECTOR$);
  };
  $oj$$55$$.$OffcanvasUtils$.$_getAnimateWrapper$ = function $$oj$$55$$$$OffcanvasUtils$$$_getAnimateWrapper$$($offcanvas$$3$$) {
    var $wrapper$$2$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$3$$);
    return $offcanvas$$3$$[$oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] === $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ ? $wrapper$$2$$.parent() : $wrapper$$2$$;
  };
  $oj$$55$$.$OffcanvasUtils$.$_getShiftSelector$ = function $$oj$$55$$$$OffcanvasUtils$$$_getShiftSelector$$($edge$$2$$) {
    var $selector$$39$$ = $oj$$55$$.$OffcanvasUtils$.$_shiftSelector$[$edge$$2$$];
    if (!$selector$$39$$) {
      throw "Invalid edge: " + $edge$$2$$;
    }
    return $selector$$39$$;
  };
  $oj$$55$$.$OffcanvasUtils$.$_isRTL$ = function $$oj$$55$$$$OffcanvasUtils$$$_isRTL$$() {
    return "rtl" === $oj$$55$$.$DomUtils$.$getReadingDirection$();
  };
  $oj$$55$$.$OffcanvasUtils$.$_setTransform$ = function $$oj$$55$$$$OffcanvasUtils$$$_setTransform$$($wrapper$$3$$, $transform$$2$$) {
    $wrapper$$3$$.css({"-webkit-transform":$transform$$2$$, "-ms-transform":$transform$$2$$, transform:$transform$$2$$});
  };
  $oj$$55$$.$OffcanvasUtils$.$_setTranslationX$ = function $$oj$$55$$$$OffcanvasUtils$$$_setTranslationX$$($wrapper$$4$$, $edge$$3_minus$$, $width$$33$$) {
    $edge$$3_minus$$ = $edge$$3_minus$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_END$;
    $oj$$55$$.$OffcanvasUtils$.$_isRTL$() && ($edge$$3_minus$$ = !$edge$$3_minus$$);
    $oj$$55$$.$OffcanvasUtils$.$_setTransform$($wrapper$$4$$, "translate3d(" + ($edge$$3_minus$$ ? "-" : "") + $width$$33$$ + ", 0, 0)");
  };
  $oj$$55$$.$OffcanvasUtils$.$_setTranslationY$ = function $$oj$$55$$$$OffcanvasUtils$$$_setTranslationY$$($wrapper$$5$$, $edge$$4$$, $height$$32$$) {
    $oj$$55$$.$OffcanvasUtils$.$_setTransform$($wrapper$$5$$, "translate3d(0, " + ($edge$$4$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_BOTTOM$ ? "-" : "") + $height$$32$$ + ", 0)");
  };
  $oj$$55$$.$OffcanvasUtils$.$_saveEdge$ = function $$oj$$55$$$$OffcanvasUtils$$$_saveEdge$$($drawer$$2_offcanvas$$4$$) {
    var $edge$$5$$ = $drawer$$2_offcanvas$$4$$.edge;
    $drawer$$2_offcanvas$$4$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($drawer$$2_offcanvas$$4$$);
    $edge$$5$$ && $edge$$5$$.length || ($edge$$5$$ = $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-start") ? $oj$$55$$.$OffcanvasUtils$.$EDGE_START$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-end") ? $oj$$55$$.$OffcanvasUtils$.$EDGE_END$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-top") ? $oj$$55$$.$OffcanvasUtils$.$EDGE_TOP$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-bottom") ? $oj$$55$$.$OffcanvasUtils$.$EDGE_BOTTOM$ : $oj$$55$$.$OffcanvasUtils$.$EDGE_START$);
    $$$$50$$.data($drawer$$2_offcanvas$$4$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$5$$);
    return $edge$$5$$;
  };
  $oj$$55$$.$OffcanvasUtils$.$_getEdge$ = function $$oj$$55$$$$OffcanvasUtils$$$_getEdge$$($drawer$$3$$) {
    return $$$$50$$.data($drawer$$3$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$);
  };
  $oj$$55$$.$OffcanvasUtils$.$_toggleClass$ = function $$oj$$55$$$$OffcanvasUtils$$$_toggleClass$$($offcanvas$$5$$, $wrapper$$6$$, $isOpen$$2_oTabIndex$$) {
    var $displayMode$$1_wrapperClass$$ = $offcanvas$$5$$[$oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$], $drawer$$4$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$5$$), $drawerClass$$ = $oj$$55$$.$OffcanvasUtils$.$OPEN_SELECTOR$, $displayMode$$1_wrapperClass$$ = $displayMode$$1_wrapperClass$$ === $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ ? $oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$ + " oj-offcanvas-overlay" : $oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$;
    $isOpen$$2_oTabIndex$$ ? ($isOpen$$2_oTabIndex$$ = $drawer$$4$$.attr("tabIndex"), void 0 !== $isOpen$$2_oTabIndex$$ && ($offcanvas$$5$$.tabIndex = $isOpen$$2_oTabIndex$$), $drawer$$4$$.addClass($drawerClass$$).attr("tabIndex", "-1"), $wrapper$$6$$.addClass($displayMode$$1_wrapperClass$$)) : ($isOpen$$2_oTabIndex$$ = $offcanvas$$5$$.tabIndex, void 0 === $isOpen$$2_oTabIndex$$ ? $drawer$$4$$.removeAttr("tabIndex") : $drawer$$4$$.attr("tabIndex", $isOpen$$2_oTabIndex$$), $drawer$$4$$.removeClass($drawerClass$$), 
    $wrapper$$6$$.removeClass($displayMode$$1_wrapperClass$$));
  };
  $oj$$55$$.$OffcanvasUtils$.$_isAutoDismiss$ = function $$oj$$55$$$$OffcanvasUtils$$$_isAutoDismiss$$($offcanvas$$6$$) {
    return "none" != $offcanvas$$6$$.autoDismiss;
  };
  $oj$$55$$.$OffcanvasUtils$.$_onTransitionEnd$ = function $$oj$$55$$$$OffcanvasUtils$$$_onTransitionEnd$$($wrapper$$7$$, $handler$$51$$) {
    function $listener$$41$$() {
      $handler$$51$$();
      $wrapper$$7$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$41$$);
    }
    $wrapper$$7$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$41$$);
  };
  $oj$$55$$.$OffcanvasUtils$.$_registerCloseHandler$ = function $$oj$$55$$$$OffcanvasUtils$$$_registerCloseHandler$$($offcanvas$$7$$) {
    $oj$$55$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$7$$);
    if ($oj$$55$$.$OffcanvasUtils$.$_isAutoDismiss$($offcanvas$$7$$)) {
      var $drawer$$5$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$7$$), $dismisHandler$$ = $offcanvas$$7$$[$oj$$55$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$] = function $$offcanvas$$7$$$$oj$$55$$$$OffcanvasUtils$$$DISMISS_HANDLER_KEY$$($event$$567$$) {
        var $target$$97$$ = $event$$567$$.target;
        $oj$$55$$.$DomUtils$.$isChromeEvent$($event$$567$$) || "focus" === $event$$567$$.type && !$$$$50$$($target$$97$$).is(":focusable") || (null == $$$$50$$.data($drawer$$5$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$) ? $oj$$55$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$7$$) : $oj$$55$$.$DomUtils$.$isLogicalAncestorOrSelf$($drawer$$5$$[0], $target$$97$$) || $oj$$55$$.$OffcanvasUtils$.close($offcanvas$$7$$));
      }, $documentElement$$ = document.documentElement;
      $oj$$55$$.$DomUtils$.$isTouchSupported$() && $documentElement$$.addEventListener("touchstart", $dismisHandler$$, !0);
      $documentElement$$.addEventListener("mousedown", $dismisHandler$$, !0);
      $documentElement$$.addEventListener("focus", $dismisHandler$$, !0);
    }
    $oj$$55$$.$OffcanvasUtils$.$_registerSwipeHandler$($offcanvas$$7$$);
  };
  $oj$$55$$.$OffcanvasUtils$.$_unregisterCloseHandler$ = function $$oj$$55$$$$OffcanvasUtils$$$_unregisterCloseHandler$$($offcanvas$$8$$) {
    var $dismisHandler$$1$$ = $offcanvas$$8$$[$oj$$55$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$];
    if ($dismisHandler$$1$$) {
      var $documentElement$$1$$ = document.documentElement;
      $oj$$55$$.$DomUtils$.$isTouchSupported$() && $documentElement$$1$$.removeEventListener("touchstart", $dismisHandler$$1$$, !0);
      $documentElement$$1$$.removeEventListener("mousedown", $dismisHandler$$1$$, !0);
      $documentElement$$1$$.removeEventListener("focus", $dismisHandler$$1$$, !0);
      delete $offcanvas$$8$$[$oj$$55$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$];
      $offcanvas$$8$$[$oj$$55$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$] = null;
    }
    $oj$$55$$.$OffcanvasUtils$.$_unregisterSwipeHandler$($offcanvas$$8$$);
  };
  $oj$$55$$.$OffcanvasUtils$.$_registerSwipeHandler$ = function $$oj$$55$$$$OffcanvasUtils$$$_registerSwipeHandler$$($offcanvas$$9$$) {
    if ($oj$$55$$.$DomUtils$.$isTouchSupported$()) {
      var $selector$$40$$ = $offcanvas$$9$$[$oj$$55$$.$OffcanvasUtils$.$SELECTOR_KEY$], $drawer$$6_drawerHammer$$ = $$$$50$$($selector$$40$$), $edge$$6$$ = $oj$$55$$.$OffcanvasUtils$.$_getEdge$($drawer$$6_drawerHammer$$), $swipeEvent$$, $options$$367$$;
      $edge$$6$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_START$ && !$oj$$55$$.$OffcanvasUtils$.$_isRTL$() || $edge$$6$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_END$ && $oj$$55$$.$OffcanvasUtils$.$_isRTL$() ? ($options$$367$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_LEFT}]]}, $swipeEvent$$ = "swipeleft") : $edge$$6$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_START$ && $oj$$55$$.$OffcanvasUtils$.$_isRTL$() || $edge$$6$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_END$ && !$oj$$55$$.$OffcanvasUtils$.$_isRTL$() ? 
      ($options$$367$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_RIGHT}]]}, $swipeEvent$$ = "swiperight") : $edge$$6$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_TOP$ ? ($options$$367$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_UP}]]}, $swipeEvent$$ = "swipeup") : $edge$$6$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_BOTTOM$ && ($options$$367$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_DOWN}]]}, $swipeEvent$$ = "swipedown");
      $drawer$$6_drawerHammer$$ = $drawer$$6_drawerHammer$$.$ojHammer$($options$$367$$).on($swipeEvent$$, function($event$$568$$) {
        $event$$568$$.preventDefault();
        $oj$$55$$.$OffcanvasUtils$.close($offcanvas$$9$$);
      });
      $$$$50$$.data($$$$50$$($selector$$40$$)[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$, {event:$swipeEvent$$, hammer:$drawer$$6_drawerHammer$$});
    }
  };
  $oj$$55$$.$OffcanvasUtils$.$_unregisterSwipeHandler$ = function $$oj$$55$$$$OffcanvasUtils$$$_unregisterSwipeHandler$$($dHammer_drawer$$7_offcanvas$$10$$) {
    $dHammer_drawer$$7_offcanvas$$10$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($dHammer_drawer$$7_offcanvas$$10$$);
    0 < $dHammer_drawer$$7_offcanvas$$10$$.length && ($dHammer_drawer$$7_offcanvas$$10$$ = $$$$50$$.data($dHammer_drawer$$7_offcanvas$$10$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$)) && $dHammer_drawer$$7_offcanvas$$10$$.hammer.off($dHammer_drawer$$7_offcanvas$$10$$.event);
  };
  $oj$$55$$.$OffcanvasUtils$.$_afterCloseHandler$ = function $$oj$$55$$$$OffcanvasUtils$$$_afterCloseHandler$$($offcanvas$$11$$) {
    var $drawer$$8$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$11$$);
    if ($$$$50$$.data($drawer$$8$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$) === $offcanvas$$11$$) {
      $oj$$55$$.$OffcanvasUtils$.$_getEdge$($drawer$$8$$);
      var $wrapper$$8$$ = $oj$$55$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$11$$);
      $oj$$55$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$11$$, $wrapper$$8$$, !1);
      $oj$$55$$.$OffcanvasUtils$.$_removeModality$($offcanvas$$11$$);
      $oj$$55$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$11$$);
      $drawer$$8$$.trigger("ojclose", $offcanvas$$11$$);
      $$$$50$$.removeData($drawer$$8$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    }
  };
  $oj$$55$$.$OffcanvasUtils$.$_setVisible$ = function $$oj$$55$$$$OffcanvasUtils$$$_setVisible$$($selector$$41$$, $visible$$1$$, $edge$$8$$) {
    var $drawer$$9$$ = $$$$50$$($selector$$41$$);
    ($visible$$1$$ = !!$visible$$1$$) && $oj$$55$$.$OffcanvasUtils$.$_isOpen$($drawer$$9$$) && $oj$$55$$.$OffcanvasUtils$.$_close$($selector$$41$$, !1);
    $drawer$$9$$.toggleClass($oj$$55$$.$OffcanvasUtils$.$_drawerSelector$[$edge$$8$$], !$visible$$1$$);
  };
  $oj$$55$$.$OffcanvasUtils$.$setupResponsive$ = function $$oj$$55$$$$OffcanvasUtils$$$setupResponsive$$($mqListener_offcanvas$$12$$) {
    var $mqs_query$$11$$ = $mqListener_offcanvas$$12$$.query;
    if (null !== $mqs_query$$11$$) {
      var $selector$$42$$ = $mqListener_offcanvas$$12$$[$oj$$55$$.$OffcanvasUtils$.$SELECTOR_KEY$], $mqs_query$$11$$ = window.matchMedia($mqs_query$$11$$), $edge$$9$$ = $oj$$55$$.$OffcanvasUtils$.$_saveEdge$($mqListener_offcanvas$$12$$);
      $mqListener_offcanvas$$12$$ = function $$mqListener_offcanvas$$12$$$($event$$569$$) {
        $oj$$55$$.$OffcanvasUtils$.$_setVisible$($selector$$42$$, $event$$569$$.matches, $edge$$9$$);
      };
      $mqs_query$$11$$.addListener($mqListener_offcanvas$$12$$);
      $oj$$55$$.$OffcanvasUtils$.$_setVisible$($selector$$42$$, $mqs_query$$11$$.matches, $edge$$9$$);
      $$$$50$$.data($$$$50$$($selector$$42$$)[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$, {mqList:$mqs_query$$11$$, mqListener:$mqListener_offcanvas$$12$$});
    }
  };
  $goog$exportPath_$$("OffcanvasUtils.setupResponsive", $oj$$55$$.$OffcanvasUtils$.$setupResponsive$, $oj$$55$$);
  $oj$$55$$.$OffcanvasUtils$.$tearDownResponsive$ = function $$oj$$55$$$$OffcanvasUtils$$$tearDownResponsive$$($drawer$$10_offcanvas$$13$$) {
    $drawer$$10_offcanvas$$13$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($drawer$$10_offcanvas$$13$$);
    var $mql$$ = $$$$50$$.data($drawer$$10_offcanvas$$13$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$);
    $mql$$ && ($mql$$.mqList.removeListener($mql$$.mqListener), $$$$50$$.removeData($drawer$$10_offcanvas$$13$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$));
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownResponsive", $oj$$55$$.$OffcanvasUtils$.$tearDownResponsive$, $oj$$55$$);
  $oj$$55$$.$OffcanvasUtils$.open = function $$oj$$55$$$$OffcanvasUtils$$open$($offcanvas$$14$$) {
    var $drawer$$11$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$14$$), $oldOffcanvas_promise$$8$$ = $$$$50$$.data($drawer$$11$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($oldOffcanvas_promise$$8$$) {
      if ($oldOffcanvas_promise$$8$$[$oj$$55$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$]) {
        return $oldOffcanvas_promise$$8$$[$oj$$55$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$];
      }
      if ($oldOffcanvas_promise$$8$$[$oj$$55$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$]) {
        return $oldOffcanvas_promise$$8$$[$oj$$55$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$];
      }
    }
    var $oldOffcanvas_promise$$8$$ = new Promise(function($resolve$$62$$, $reject$$59$$) {
      $oj$$55$$.$Assert$.$assertPrototype$($drawer$$11$$, jQuery);
      var $edge$$10$$ = $oj$$55$$.$OffcanvasUtils$.$_saveEdge$($offcanvas$$14$$), $displayMode$$2_event$$570$$ = $$$$50$$.Event("ojbeforeopen");
      $drawer$$11$$.trigger($displayMode$$2_event$$570$$, $offcanvas$$14$$);
      if (!1 === $displayMode$$2_event$$570$$.result) {
        $reject$$59$$("ojbeforeopen veto");
      } else {
        var $size$$26$$, $displayMode$$2_event$$570$$ = $oj$$55$$.$OffcanvasUtils$.$_getDisplayMode$($offcanvas$$14$$), $myOffcanvas$$ = $$$$50$$.extend({}, $offcanvas$$14$$);
        $myOffcanvas$$[$oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] = $displayMode$$2_event$$570$$;
        $$$$50$$.data($drawer$$11$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $myOffcanvas$$);
        var $wrapper$$9$$;
        $wrapper$$9$$ = $oj$$55$$.$OffcanvasUtils$.$_getAnimateWrapper$($myOffcanvas$$);
        $oj$$55$$.$Assert$.$assertPrototype$($wrapper$$9$$, jQuery);
        $oj$$55$$.$OffcanvasUtils$.$_toggleClass$($myOffcanvas$$, $wrapper$$9$$, !0);
        $edge$$10$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_START$ || $edge$$10$$ === $oj$$55$$.$OffcanvasUtils$.$EDGE_END$ ? ($size$$26$$ = void 0 === $size$$26$$ ? $drawer$$11$$.outerWidth(!0) + "px" : $size$$26$$, $displayMode$$2_event$$570$$ === $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$55$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$9$$, $edge$$10$$, $size$$26$$)) : ($size$$26$$ = void 0 === $size$$26$$ ? $drawer$$11$$.outerHeight(!0) + "px" : $size$$26$$, $displayMode$$2_event$$570$$ === 
        $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$55$$.$OffcanvasUtils$.$_setTranslationY$($wrapper$$9$$, $edge$$10$$, $size$$26$$));
        var $outerWrapper$$;
        window.setTimeout(function() {
          $outerWrapper$$ = $oj$$55$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$11$$);
          $oj$$55$$.$Assert$.$assertPrototype$($outerWrapper$$, jQuery);
          $outerWrapper$$.addClass($oj$$55$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$10$$));
        }, 10);
        $oj$$55$$.$OffcanvasUtils$.$_applyModality$($myOffcanvas$$, $drawer$$11$$);
        $oj$$55$$.$OffcanvasUtils$.$_onTransitionEnd$($wrapper$$9$$, function() {
          $wrapper$$9$$.removeClass($oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
          $oj$$55$$.$FocusUtils$.$focusElement$($drawer$$11$$[0]);
          $drawer$$11$$.trigger("ojopen", $myOffcanvas$$);
          $oj$$55$$.$OffcanvasUtils$.$_registerCloseHandler$($myOffcanvas$$);
          $resolve$$62$$(!0);
        });
      }
    }), $nOffcanvas$$ = $$$$50$$.data($drawer$$11$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    $nOffcanvas$$ && ($nOffcanvas$$[$oj$$55$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$] = $oldOffcanvas_promise$$8$$);
    return $oldOffcanvas_promise$$8$$;
  };
  $goog$exportPath_$$("OffcanvasUtils.open", $oj$$55$$.$OffcanvasUtils$.open, $oj$$55$$);
  $oj$$55$$.$OffcanvasUtils$.close = function $$oj$$55$$$$OffcanvasUtils$$close$($offcanvas$$15$$) {
    return $oj$$55$$.$OffcanvasUtils$.$_close$($offcanvas$$15$$[$oj$$55$$.$OffcanvasUtils$.$SELECTOR_KEY$], !0);
  };
  $goog$exportPath_$$("OffcanvasUtils.close", $oj$$55$$.$OffcanvasUtils$.close, $oj$$55$$);
  $oj$$55$$.$OffcanvasUtils$.$_close$ = function $$oj$$55$$$$OffcanvasUtils$$$_close$$($selector$$43$$, $animation$$2$$) {
    var $drawer$$12$$ = $$$$50$$($selector$$43$$);
    $oj$$55$$.$Assert$.$assertPrototype$($drawer$$12$$, jQuery);
    var $offcanvas$$16$$ = $$$$50$$.data($drawer$$12$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($offcanvas$$16$$ && $offcanvas$$16$$[$oj$$55$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$]) {
      return $offcanvas$$16$$[$oj$$55$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$];
    }
    var $promise$$9$$ = new Promise(function($resolve$$63$$, $reject$$60$$) {
      if ($oj$$55$$.$OffcanvasUtils$.$_isOpen$($drawer$$12$$)) {
        $selector$$43$$ != $offcanvas$$16$$[$oj$$55$$.$OffcanvasUtils$.$SELECTOR_KEY$] && $resolve$$63$$(!0);
        var $edge$$11_shiftSelector$$ = $oj$$55$$.$OffcanvasUtils$.$_getEdge$($drawer$$12$$), $displayMode$$3$$ = $offcanvas$$16$$[$oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$], $edge$$11_shiftSelector$$ = $oj$$55$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$11_shiftSelector$$), $outerWrapper$$1$$ = $oj$$55$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$12$$);
        $oj$$55$$.$Assert$.$assertPrototype$($outerWrapper$$1$$, jQuery);
        $outerWrapper$$1$$.hasClass($edge$$11_shiftSelector$$) || $resolve$$63$$(!0);
        var $event$$571_wrapper$$10$$ = $$$$50$$.Event("ojbeforeclose");
        $drawer$$12$$.trigger($event$$571_wrapper$$10$$, $offcanvas$$16$$);
        if (!1 === $event$$571_wrapper$$10$$.result) {
          $reject$$60$$("beforeClose veto");
        } else {
          $event$$571_wrapper$$10$$ = $oj$$55$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$16$$);
          if ($animation$$2$$) {
            var $rafId$$ = 0, $endHandler$$1$$ = function $$endHandler$$1$$$() {
              $oj$$55$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$16$$);
              0 !== $rafId$$ && window.cancelAnimationFrame($rafId$$);
              $resolve$$63$$(!0);
            }, $checkDetachedHandler$$ = function $$checkDetachedHandler$$$() {
              null == $drawer$$12$$[0].offsetParent ? $endHandler$$1$$() : $rafId$$ = window.requestAnimationFrame($checkDetachedHandler$$);
            };
            $oj$$55$$.$OffcanvasUtils$.$_onTransitionEnd$($event$$571_wrapper$$10$$, $endHandler$$1$$);
            $rafId$$ = window.requestAnimationFrame($checkDetachedHandler$$);
          }
          $displayMode$$3$$ === $oj$$55$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$55$$.$OffcanvasUtils$.$_setTransform$($event$$571_wrapper$$10$$, "");
          $outerWrapper$$1$$.removeClass($edge$$11_shiftSelector$$);
          $oj$$55$$.$OffcanvasUtils$.$_isModal$($offcanvas$$16$$) && $offcanvas$$16$$[$oj$$55$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].removeClass($oj$$55$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
          $animation$$2$$ ? $event$$571_wrapper$$10$$.addClass($oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$) : ($oj$$55$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$16$$), $resolve$$63$$(!0));
        }
      } else {
        $resolve$$63$$(!0);
      }
    });
    ($offcanvas$$16$$ = $$$$50$$.data($drawer$$12$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$)) && ($offcanvas$$16$$[$oj$$55$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$] = $promise$$9$$);
    return $promise$$9$$;
  };
  $oj$$55$$.$OffcanvasUtils$.toggle = function $$oj$$55$$$$OffcanvasUtils$$toggle$($offcanvas$$17$$) {
    var $drawer$$13$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$17$$);
    $oj$$55$$.$Assert$.$assertPrototype$($drawer$$13$$, jQuery);
    return $oj$$55$$.$OffcanvasUtils$.$_isOpen$($drawer$$13$$) ? $oj$$55$$.$OffcanvasUtils$.close($offcanvas$$17$$) : $oj$$55$$.$OffcanvasUtils$.open($offcanvas$$17$$);
  };
  $goog$exportPath_$$("OffcanvasUtils.toggle", $oj$$55$$.$OffcanvasUtils$.toggle, $oj$$55$$);
  $oj$$55$$.$OffcanvasUtils$.$_addGlassPane$ = function $$oj$$55$$$$OffcanvasUtils$$$_addGlassPane$$($drawer$$14$$) {
    var $overlay$$ = $$$$50$$("\x3cdiv\x3e");
    $overlay$$.addClass($oj$$55$$.$OffcanvasUtils$.$GLASSPANE_SELECTOR$);
    $overlay$$.attr("role", "presentation");
    $overlay$$.attr("aria-hidden", "true");
    $overlay$$.appendTo($drawer$$14$$.parent());
    $overlay$$.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus", function($event$$572$$) {
      $event$$572$$.stopPropagation();
      $event$$572$$.preventDefault();
    });
    return $overlay$$;
  };
  $oj$$55$$.$OffcanvasUtils$.$_createSurrogate$ = function $$oj$$55$$$$OffcanvasUtils$$$_createSurrogate$$($layer$$) {
    var $surrogate$$ = $$$$50$$("\x3cscript\x3e"), $layerId_surrogateId$$ = $layer$$.attr("id");
    $layerId_surrogateId$$ ? ($layerId_surrogateId$$ = [$layerId_surrogateId$$, "surrogate"].join("_"), $surrogate$$.attr("id", $layerId_surrogateId$$)) : $layerId_surrogateId$$ = $surrogate$$.uniqueId();
    $surrogate$$.insertBefore($layer$$);
    $layer$$.attr($oj$$55$$.$OffcanvasUtils$.$SURROGATE_ATTR$, $layerId_surrogateId$$);
    return $surrogate$$;
  };
  $oj$$55$$.$OffcanvasUtils$.$_swapOrder$ = function $$oj$$55$$$$OffcanvasUtils$$$_swapOrder$$($offcanvas$$18$$, $drawer$$15$$) {
    $offcanvas$$18$$[$oj$$55$$.$OffcanvasUtils$.$SURROGATE_KEY$] = $oj$$55$$.$OffcanvasUtils$.$_createSurrogate$($drawer$$15$$);
    $drawer$$15$$.appendTo($drawer$$15$$.parent());
  };
  $oj$$55$$.$OffcanvasUtils$.$_restoreOrder$ = function $$oj$$55$$$$OffcanvasUtils$$$_restoreOrder$$($offcanvas$$19_surrogate$$1$$) {
    var $drawer$$16$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$19_surrogate$$1$$);
    $offcanvas$$19_surrogate$$1$$ = $offcanvas$$19_surrogate$$1$$[$oj$$55$$.$OffcanvasUtils$.$SURROGATE_KEY$];
    $drawer$$16$$ && $offcanvas$$19_surrogate$$1$$ && $drawer$$16$$.attr($oj$$55$$.$OffcanvasUtils$.$SURROGATE_ATTR$) === $offcanvas$$19_surrogate$$1$$.attr("id") && ($drawer$$16$$.insertAfter($offcanvas$$19_surrogate$$1$$), $drawer$$16$$.removeAttr($oj$$55$$.$OffcanvasUtils$.$SURROGATE_ATTR$), $offcanvas$$19_surrogate$$1$$.remove());
  };
  $oj$$55$$.$OffcanvasUtils$.$_applyModality$ = function $$oj$$55$$$$OffcanvasUtils$$$_applyModality$$($offcanvas$$20$$, $drawer$$17$$) {
    $oj$$55$$.$OffcanvasUtils$.$_isModal$($offcanvas$$20$$) && ($offcanvas$$20$$[$oj$$55$$.$OffcanvasUtils$.$GLASS_PANE_KEY$] = $oj$$55$$.$OffcanvasUtils$.$_addGlassPane$($drawer$$17$$), $oj$$55$$.$OffcanvasUtils$.$_swapOrder$($offcanvas$$20$$, $drawer$$17$$), window.setTimeout(function() {
      $offcanvas$$20$$[$oj$$55$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].addClass($oj$$55$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
    }, 0));
  };
  $oj$$55$$.$OffcanvasUtils$.$_removeModality$ = function $$oj$$55$$$$OffcanvasUtils$$$_removeModality$$($offcanvas$$21$$) {
    $oj$$55$$.$OffcanvasUtils$.$_isModal$($offcanvas$$21$$) && ($offcanvas$$21$$[$oj$$55$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].remove(), $oj$$55$$.$OffcanvasUtils$.$_restoreOrder$($offcanvas$$21$$));
  };
  $oj$$55$$.$OffcanvasUtils$.$setupPanToReveal$ = function $$oj$$55$$$$OffcanvasUtils$$$setupPanToReveal$$($offcanvas$$22$$) {
    var $drawer$$19$$, $size$$27$$, $outerWrapper$$2$$, $wrapper$$11$$, $mOptions$$, $proceed$$, $direction$$13$$, $ui$$33$$, $evt$$26$$, $delta$$7$$, $edge$$12$$, $listener$$42$$;
    null == $$$$50$$($offcanvas$$22$$).attr("oj-data-pansetup") && ($$$$50$$($offcanvas$$22$$).attr("oj-data-pansetup", "true"), $offcanvas$$22$$.displayMode = "push", $drawer$$19$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$22$$), $size$$27$$ = $offcanvas$$22$$.size, null == $size$$27$$ && ($size$$27$$ = $drawer$$19$$.outerWidth()), $outerWrapper$$2$$ = $oj$$55$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$19$$), $wrapper$$11$$ = $oj$$55$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$22$$), 
    $mOptions$$ = {recognizers:[[$Hammer$$5$$.Pan, {direction:$Hammer$$5$$.DIRECTION_HORIZONTAL}]]}, $proceed$$ = !1, $$$$50$$($outerWrapper$$2$$).$ojHammer$($mOptions$$).on("panstart", function($event$$573$$) {
      $direction$$13$$ = null;
      switch($event$$573$$.gesture.direction) {
        case $Hammer$$5$$.DIRECTION_LEFT:
          Math.abs($event$$573$$.gesture.deltaY) < Math.abs($event$$573$$.gesture.deltaX) && ($direction$$13$$ = $oj$$55$$.$OffcanvasUtils$.$_isRTL$() ? "end" : "start");
          break;
        case $Hammer$$5$$.DIRECTION_RIGHT:
          Math.abs($event$$573$$.gesture.deltaY) < Math.abs($event$$573$$.gesture.deltaX) && ($direction$$13$$ = $oj$$55$$.$OffcanvasUtils$.$_isRTL$() ? "start" : "end");
      }
      null != $direction$$13$$ && ($ui$$33$$ = {direction:$direction$$13$$, distance:Math.abs($event$$573$$.gesture.deltaX)}, $evt$$26$$ = $$$$50$$.Event("ojpanstart"), $drawer$$19$$.trigger($evt$$26$$, $ui$$33$$), $evt$$26$$.isDefaultPrevented() || ($offcanvas$$22$$._closePromise = null, $oj$$55$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$22$$, $wrapper$$11$$, !0), $proceed$$ = !0, $event$$573$$.stopPropagation()));
    }).on("panmove", function($event$$574$$) {
      $proceed$$ && ($delta$$7$$ = Math.abs($event$$574$$.gesture.deltaX), $drawer$$19$$.css("width", $delta$$7$$), $wrapper$$11$$.removeClass($oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$55$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$11$$, "start", $event$$574$$.gesture.deltaX + "px"), $ui$$33$$ = {direction:$direction$$13$$, distance:$delta$$7$$}, $evt$$26$$ = $$$$50$$.Event("ojpanmove"), $drawer$$19$$.trigger($evt$$26$$, $ui$$33$$), $event$$574$$.stopPropagation());
    }).on("panend", function($event$$575$$) {
      $proceed$$ && ($proceed$$ = !1, $delta$$7$$ = Math.abs($event$$575$$.gesture.deltaX), $ui$$33$$ = {distance:$delta$$7$$}, $evt$$26$$ = $$$$50$$.Event("ojpanend"), $drawer$$19$$.trigger($evt$$26$$, $ui$$33$$), $event$$575$$.stopPropagation(), $evt$$26$$.isDefaultPrevented() ? ($listener$$42$$ = function $$listener$$42$$$() {
        $oj$$55$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$22$$, $wrapper$$11$$, !1);
        $wrapper$$11$$.removeClass($oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
        $wrapper$$11$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$42$$);
      }, $wrapper$$11$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$42$$), $wrapper$$11$$.addClass($oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$55$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$11$$, "start", "0px")) : ($wrapper$$11$$.addClass($oj$$55$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $drawer$$19$$.css("width", $size$$27$$ + "px"), $edge$$12$$ = $offcanvas$$22$$.edge, null == $edge$$12$$ && ($edge$$12$$ = $drawer$$19$$.hasClass("oj-offcanvas-start") ? 
      "start" : "end"), $oj$$55$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$11$$, $edge$$12$$, $size$$27$$ + "px"), $$$$50$$.data($drawer$$19$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $offcanvas$$22$$), $$$$50$$.data($drawer$$19$$[0], $oj$$55$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$12$$), $oj$$55$$.$OffcanvasUtils$.$_registerCloseHandler$($offcanvas$$22$$)));
    }));
  };
  $goog$exportPath_$$("OffcanvasUtils.setupPanToReveal", $oj$$55$$.$OffcanvasUtils$.$setupPanToReveal$, $oj$$55$$);
  $oj$$55$$.$OffcanvasUtils$.$tearDownPanToReveal$ = function $$oj$$55$$$$OffcanvasUtils$$$tearDownPanToReveal$$($drawer$$20_offcanvas$$23$$) {
    $drawer$$20_offcanvas$$23$$ = $oj$$55$$.$OffcanvasUtils$.$_getDrawer$($drawer$$20_offcanvas$$23$$);
    $$$$50$$($oj$$55$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$20_offcanvas$$23$$)).off("panstart panmove panend");
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownPanToReveal", $oj$$55$$.$OffcanvasUtils$.$tearDownPanToReveal$, $oj$$55$$);
});
