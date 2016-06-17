/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojoffcanvas"], function($oj$$68$$, $$$$63$$) {
  $oj$$68$$.$SwipeToRevealUtils$ = {};
  $goog$exportPath_$$("SwipeToRevealUtils", $oj$$68$$.$SwipeToRevealUtils$, $oj$$68$$);
  $oj$$68$$.$SwipeToRevealUtils$.$setupSwipeActions$ = function $$oj$$68$$$$SwipeToRevealUtils$$$setupSwipeActions$$($elem$$157$$, $options$$402$$) {
    var $drawer$$21$$, $direction$$14$$, $offcanvas$$24$$, $outerWrapper$$4$$, $threshold$$4$$, $minimum$$2$$, $drawerShown$$, $evt$$27$$, $checkpoint$$, $defaultAction$$, $distance$$2$$;
    $drawer$$21$$ = $$$$63$$($elem$$157$$);
    $drawer$$21$$.hasClass("oj-swipetoreveal") || ($drawer$$21$$.addClass("oj-swipetoreveal"), $direction$$14$$ = $drawer$$21$$.hasClass("oj-offcanvas-start") ? "end" : "start", $offcanvas$$24$$ = {}, $offcanvas$$24$$.selector = $drawer$$21$$, $oj$$68$$.$OffcanvasUtils$.$setupPanToReveal$($offcanvas$$24$$), $outerWrapper$$4$$ = $oj$$68$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$21$$), null != $options$$402$$ && ($threshold$$4$$ = $options$$402$$.threshold), null != $threshold$$4$$ ? ($threshold$$4$$ = 
    parseInt($threshold$$4$$, 10), /%$/.test($options$$402$$.threshold) && ($threshold$$4$$ = $threshold$$4$$ / 100 * $outerWrapper$$4$$.outerWidth())) : $threshold$$4$$ = .55 * $outerWrapper$$4$$.outerWidth(), $minimum$$2$$ = Math.min(.3 * $outerWrapper$$4$$.outerWidth(), $drawer$$21$$.outerWidth()), $drawerShown$$ = !1, $outerWrapper$$4$$.on("click.swipetoreveal", function($event$$623$$) {
      $drawerShown$$ && ($event$$623$$.stopImmediatePropagation(), $drawerShown$$ = !1);
    }), $drawer$$21$$.on("ojpanstart", function($event$$624$$, $ui$$37$$) {
      $ui$$37$$.direction != $direction$$14$$ ? $event$$624$$.preventDefault() : ($drawer$$21$$.children().addClass("oj-swipetoreveal-action"), $defaultAction$$ = $drawer$$21$$.children(".oj-swipetoreveal-default").get(0), $checkpoint$$ = (new Date).getTime());
    }).on("ojpanmove", function($event$$625$$, $ui$$38$$) {
      $drawerShown$$ = !0;
      null != $defaultAction$$ && ($ui$$38$$.distance > $threshold$$4$$ ? $drawer$$21$$.children().each(function() {
        this != $defaultAction$$ && $$$$63$$(this).addClass("oj-swipetoreveal-hide-when-full");
      }) : $drawer$$21$$.children().removeClass("oj-swipetoreveal-hide-when-full"));
    }).on("ojpanend", function($event$$626$$, $ui$$39$$) {
      $distance$$2$$ = $ui$$39$$.distance;
      null != $defaultAction$$ && $distance$$2$$ > $threshold$$4$$ && ($evt$$27$$ = $$$$63$$.Event("ojdefaultaction"), $drawer$$21$$.trigger($evt$$27$$, $offcanvas$$24$$), $event$$626$$.preventDefault());
      $distance$$2$$ < $minimum$$2$$ && (200 < (new Date).getTime() - $checkpoint$$ || 10 > $distance$$2$$) && $event$$626$$.preventDefault();
    }));
  };
  $goog$exportPath_$$("SwipeToRevealUtils.setupSwipeActions", $oj$$68$$.$SwipeToRevealUtils$.$setupSwipeActions$, $oj$$68$$);
  $oj$$68$$.$SwipeToRevealUtils$.$tearDownSwipeActions$ = function $$oj$$68$$$$SwipeToRevealUtils$$$tearDownSwipeActions$$($elem$$158_offcanvas$$25$$) {
    var $drawer$$22_outerWrapper$$5$$;
    $drawer$$22_outerWrapper$$5$$ = $$$$63$$($elem$$158_offcanvas$$25$$);
    $elem$$158_offcanvas$$25$$ = {};
    $elem$$158_offcanvas$$25$$.selector = $drawer$$22_outerWrapper$$5$$;
    $drawer$$22_outerWrapper$$5$$ = $oj$$68$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$22_outerWrapper$$5$$);
    null != $drawer$$22_outerWrapper$$5$$ && $drawer$$22_outerWrapper$$5$$.off("click.swipetoreveal");
    $oj$$68$$.$OffcanvasUtils$.$tearDownPanToReveal$($elem$$158_offcanvas$$25$$);
  };
  $goog$exportPath_$$("SwipeToRevealUtils.tearDownSwipeActions", $oj$$68$$.$SwipeToRevealUtils$.$tearDownSwipeActions$, $oj$$68$$);
});
