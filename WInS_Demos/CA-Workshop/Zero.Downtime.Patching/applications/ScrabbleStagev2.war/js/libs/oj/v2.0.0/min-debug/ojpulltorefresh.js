/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$63$$, $$$$58$$) {
  $oj$$63$$.$PullToRefreshUtils$ = {};
  $goog$exportPath_$$("PullToRefreshUtils", $oj$$63$$.$PullToRefreshUtils$, $oj$$63$$);
  $oj$$63$$.$PullToRefreshUtils$.$setupPullToRefresh$ = function $$oj$$63$$$$PullToRefreshUtils$$$setupPullToRefresh$$($element$$141$$, $refreshFunc$$, $options$$396$$) {
    var $outer$$, $content$$29$$, $panel$$, $threshold$$3$$, $start$$57$$, $height$$33$$, $icon$$9$$, $iconOffset$$, $lastIconClass$$, $title$$10$$, $ratio$$, $iconClass$$;
    $outer$$ = $$$$58$$(document.createElement("div"));
    $oj$$63$$.$PullToRefreshUtils$.$_renderAccessibleLink$($outer$$, $refreshFunc$$, $options$$396$$);
    $content$$29$$ = $$$$58$$(document.createElement("div")).addClass("oj-pulltorefresh-panel");
    $outer$$.append($content$$29$$);
    $panel$$ = $$$$58$$($element$$141$$);
    $panel$$.prepend($outer$$);
    $panel$$.on("touchstart.pulltorefresh", function($event$$595$$) {
      null == $$$$58$$.data($content$$29$$[0], "data-pullstart") && 0 === $panel$$[0].scrollTop && ($oj$$63$$.$PullToRefreshUtils$.$_handlePull$($event$$595$$, $content$$29$$, $options$$396$$), $icon$$9$$ = $content$$29$$.find(".oj-pulltorefresh-icon"), 0 < $icon$$9$$.length && ($iconOffset$$ = $icon$$9$$.parent().outerHeight(!0)), $options$$396$$ && !isNaN($options$$396$$.threshold) && ($threshold$$3$$ = parseInt($options$$396$$.threshold, 10)), $threshold$$3$$ = isNaN($threshold$$3$$) ? $content$$29$$.outerHeight(!0) : 
      Math.max(0, Math.min($threshold$$3$$, $content$$29$$.outerHeight(!0))), $content$$29$$.css("height", 0), $content$$29$$.removeClass("oj-pulltorefresh-transition"), $$$$58$$.data($content$$29$$[0], "data-pullstart", $event$$595$$.originalEvent.touches[0].clientY));
    }).on("touchmove.pulltorefresh", function($event$$596$$) {
      $start$$57$$ = $$$$58$$.data($content$$29$$[0], "data-pullstart");
      null != $start$$57$$ && ($height$$33$$ = $event$$596$$.originalEvent.touches[0].clientY - parseInt($start$$57$$, 10), 0 > $height$$33$$ || ($event$$596$$.preventDefault(), null != $$$$58$$.data($content$$29$$[0], "data-loading") ? $content$$29$$.css("height", Math.max($height$$33$$, $threshold$$3$$)) : ($content$$29$$.css("height", $height$$33$$), $oj$$63$$.$PullToRefreshUtils$.$_fireEvent$($event$$596$$, "pull", $content$$29$$, $height$$33$$), null != $icon$$9$$ && 0 < $icon$$9$$.length && 
      ($lastIconClass$$ = $$$$58$$.data($content$$29$$[0], "data-lasticonclass"), null != $lastIconClass$$ && $icon$$9$$.removeClass($lastIconClass$$), $ratio$$ = 10 * Math.round($height$$33$$ / $threshold$$3$$ * 10), 100 <= $ratio$$ ? ($iconClass$$ = "oj-pulltorefresh-icon-full", $title$$10$$ = $oj$$63$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.titleIconFull")) : ($iconClass$$ = "oj-pulltorefresh-icon-" + $ratio$$ + "-percent", $title$$10$$ = $oj$$63$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.titleIcon" + 
      $ratio$$ + "percent")), $icon$$9$$.addClass($iconClass$$), $icon$$9$$.attr("title", $title$$10$$), $$$$58$$.data($content$$29$$[0], "data-lasticonclass", $iconClass$$), $oj$$63$$.$PullToRefreshUtils$.$_showHideDefaultText$($content$$29$$, $height$$33$$ > $iconOffset$$)))));
    }).on("touchcancel.pulltorefresh", function() {
      $oj$$63$$.$PullToRefreshUtils$.$_cleanup$($content$$29$$);
    }).on("touchend.pulltorefresh", function($event$$598$$) {
      $start$$57$$ = $$$$58$$.data($content$$29$$[0], "data-pullstart");
      null != $start$$57$$ && null == $$$$58$$.data($content$$29$$[0], "data-loading") && ($content$$29$$.outerHeight() < $threshold$$3$$ ? ($content$$29$$.addClass("oj-pulltorefresh-transition").css("height", 0), $oj$$63$$.$PullToRefreshUtils$.$_cleanup$($content$$29$$)) : $oj$$63$$.$PullToRefreshUtils$.$_handleRelease$($event$$598$$, $content$$29$$, $refreshFunc$$));
    });
  };
  $goog$exportPath_$$("PullToRefreshUtils.setupPullToRefresh", $oj$$63$$.$PullToRefreshUtils$.$setupPullToRefresh$, $oj$$63$$);
  $oj$$63$$.$PullToRefreshUtils$.$_handlePull$ = function $$oj$$63$$$$PullToRefreshUtils$$$_handlePull$$($event$$599$$, $content$$30$$, $options$$397$$) {
    var $primaryText$$, $secondaryText$$;
    $oj$$63$$.$PullToRefreshUtils$.$_fireEvent$($event$$599$$, "pull", $content$$30$$, 0);
    0 == $content$$30$$.children().length && ($options$$397$$ && ($primaryText$$ = $options$$397$$.primaryText, $secondaryText$$ = $options$$397$$.secondaryText), $oj$$63$$.$PullToRefreshUtils$.$_createDefaultContent$($content$$30$$, $primaryText$$, $secondaryText$$));
    $content$$30$$.prev().text($oj$$63$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshingLink"));
    $content$$30$$.css("height", "auto");
    $$$$58$$.data($content$$30$$[0], "data-panelheight", $content$$30$$.outerHeight());
  };
  $oj$$63$$.$PullToRefreshUtils$.$_handleRelease$ = function $$oj$$63$$$$PullToRefreshUtils$$$_handleRelease$$($event$$600$$, $content$$31$$, $refreshFunc$$1$$) {
    var $height$$34$$, $icon$$11$$, $lastIconClass$$1$$, $listener$$43$$;
    $height$$34$$ = $$$$58$$.data($content$$31$$[0], "data-panelheight");
    $content$$31$$.addClass("oj-pulltorefresh-transition").css("height", $height$$34$$);
    $oj$$63$$.$PullToRefreshUtils$.$_fireEvent$($event$$600$$, "release", $content$$31$$, $height$$34$$);
    $$$$58$$.data($content$$31$$[0], "data-loading", !0);
    $icon$$11$$ = $content$$31$$.find(".oj-pulltorefresh-icon");
    0 < $icon$$11$$.length && ($lastIconClass$$1$$ = $$$$58$$.data($content$$31$$[0], "data-lasticonclass"), null != $lastIconClass$$1$$ && $icon$$11$$.removeClass($lastIconClass$$1$$), $icon$$11$$.addClass("oj-pulltorefresh-icon-full"));
    $refreshFunc$$1$$().then(function() {
      $listener$$43$$ = function $$listener$$43$$$() {
        $oj$$63$$.$PullToRefreshUtils$.$_fireEvent$($event$$600$$, "complete", $content$$31$$, $height$$34$$);
        $oj$$63$$.$PullToRefreshUtils$.$_cleanup$($content$$31$$);
        $content$$31$$.off("transitionend", $listener$$43$$);
        $content$$31$$.prev().text("");
      };
      $content$$31$$.prev().text($oj$$63$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshCompleteLink"));
      $content$$31$$.prev().prev().css("position", "");
      $content$$31$$.on("transitionend", $listener$$43$$);
      $content$$31$$.css("height", 0);
    });
  };
  $oj$$63$$.$PullToRefreshUtils$.$tearDownPullToRefresh$ = function $$oj$$63$$$$PullToRefreshUtils$$$tearDownPullToRefresh$$($element$$142$$) {
    $$$$58$$($element$$142$$).children().first().remove();
    $$$$58$$($element$$142$$).off(".pulltorefresh");
  };
  $goog$exportPath_$$("PullToRefreshUtils.tearDownPullToRefresh", $oj$$63$$.$PullToRefreshUtils$.$tearDownPullToRefresh$, $oj$$63$$);
  $oj$$63$$.$PullToRefreshUtils$.$_fireEvent$ = function $$oj$$63$$$$PullToRefreshUtils$$$_fireEvent$$($originalEvent$$12$$, $event$$601_key$$175$$, $content$$32$$, $distance$$) {
    $event$$601_key$$175$$ = $$$$58$$.Event("oj" + $event$$601_key$$175$$);
    $event$$601_key$$175$$.originalEvent = $originalEvent$$12$$;
    $content$$32$$.trigger($event$$601_key$$175$$, {content:$content$$32$$, distance:$distance$$});
  };
  $oj$$63$$.$PullToRefreshUtils$.$_createDefaultContent$ = function $$oj$$63$$$$PullToRefreshUtils$$$_createDefaultContent$$($content$$33$$, $primary_primaryText$$1$$, $secondary$$1_secondaryText$$1$$) {
    var $icon$$12$$, $iconContainer$$;
    $content$$33$$.addClass("oj-pulltorefresh-content").attr("aria-hidden", "true");
    $icon$$12$$ = $$$$58$$(document.createElement("div"));
    $icon$$12$$.addClass("oj-pulltorefresh-icon oj-pulltorefresh-icon-initial");
    $iconContainer$$ = $$$$58$$(document.createElement("div"));
    $iconContainer$$.addClass("oj-pulltorefresh-icon-container");
    $iconContainer$$.append($icon$$12$$);
    $$$$58$$.data($content$$33$$[0], "data-lasticonclass", "oj-pulltorefresh-icon-initial");
    $content$$33$$.append($iconContainer$$);
    null != $primary_primaryText$$1$$ && ($primary_primaryText$$1$$ = $$$$58$$(document.createElement("div")).addClass("oj-pulltorefresh-primary-text").text($primary_primaryText$$1$$), $content$$33$$.append($primary_primaryText$$1$$), null != $secondary$$1_secondaryText$$1$$ && ($secondary$$1_secondaryText$$1$$ = $$$$58$$(document.createElement("div")).addClass("oj-pulltorefresh-secondary-text").text($secondary$$1_secondaryText$$1$$), $content$$33$$.append($secondary$$1_secondaryText$$1$$)));
  };
  $oj$$63$$.$PullToRefreshUtils$.$_showHideDefaultText$ = function $$oj$$63$$$$PullToRefreshUtils$$$_showHideDefaultText$$($content$$34$$, $show$$) {
    var $primaryText$$2$$, $secondaryText$$2$$;
    $primaryText$$2$$ = $content$$34$$.find(".oj-pulltorefresh-primary-text");
    $secondaryText$$2$$ = $content$$34$$.find(".oj-pulltorefresh-secondary-text");
    $show$$ ? ($primaryText$$2$$ && $primaryText$$2$$.show(), $secondaryText$$2$$ && $secondaryText$$2$$.show()) : ($primaryText$$2$$ && $primaryText$$2$$.hide(), $secondaryText$$2$$ && $secondaryText$$2$$.hide());
  };
  $oj$$63$$.$PullToRefreshUtils$.$_renderAccessibleLink$ = function $$oj$$63$$$$PullToRefreshUtils$$$_renderAccessibleLink$$($panel$$1$$, $refreshFunc$$2$$, $options$$398$$) {
    var $link$$5$$, $content$$35$$, $status$$30$$;
    $link$$5$$ = $$$$58$$(document.createElement("a"));
    $link$$5$$.text($oj$$63$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshLink"));
    $link$$5$$.addClass("oj-helper-hidden-accessible").attr("href", "#").focus(function() {
      $link$$5$$.css("position", "static");
    }).blur(function($event$$602$$) {
      null != $event$$602$$.relatedTarget && $link$$5$$.css("position", "");
    }).click(function($event$$603$$) {
      $content$$35$$ = $panel$$1$$.children().last();
      $oj$$63$$.$PullToRefreshUtils$.$_handlePull$($event$$603$$, $content$$35$$, $options$$398$$);
      $oj$$63$$.$PullToRefreshUtils$.$_handleRelease$($event$$603$$, $content$$35$$, $refreshFunc$$2$$);
      $refreshFunc$$2$$();
    });
    $status$$30$$ = $$$$58$$(document.createElement("div"));
    $status$$30$$.addClass("oj-helper-hidden-accessible").attr("aria-live", "polite");
    $panel$$1$$.append($link$$5$$);
    $panel$$1$$.append($status$$30$$);
  };
  $oj$$63$$.$PullToRefreshUtils$.$_cleanup$ = function $$oj$$63$$$$PullToRefreshUtils$$$_cleanup$$($content$$36$$) {
    $$$$58$$.removeData($content$$36$$[0], "data-pullstart");
    $$$$58$$.removeData($content$$36$$[0], "data-loading");
    0 < $content$$36$$.find(".oj-pulltorefresh-icon").length && $content$$36$$.empty();
  };
});
