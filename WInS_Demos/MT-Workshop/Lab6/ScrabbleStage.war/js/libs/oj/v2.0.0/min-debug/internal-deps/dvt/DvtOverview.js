/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTimeUtils$$ = {$supportsTouch$:function() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$4$$, $endTime$$4$$, $number$$2_time$$15$$, $width$$136$$) {
  $number$$2_time$$15$$ = ($number$$2_time$$15$$ - $denominator$$1_startTime$$4$$) * $width$$136$$;
  $denominator$$1_startTime$$4$$ = $endTime$$4$$ - $denominator$$1_startTime$$4$$;
  return 0 == $number$$2_time$$15$$ || 0 == $denominator$$1_startTime$$4$$ ? 0 : $number$$2_time$$15$$ / $denominator$$1_startTime$$4$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$5$$, $endTime$$5_number$$3$$, $pos$$66$$, $width$$137$$) {
  $endTime$$5_number$$3$$ = $pos$$66$$ * ($endTime$$5_number$$3$$ - $startTime$$5$$);
  return 0 == $endTime$$5_number$$3$$ || 0 == $width$$137$$ ? $startTime$$5$$ : $endTime$$5_number$$3$$ / $width$$137$$ + $startTime$$5$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$468$$, $callback$$128$$, $callbackObj$$77$$) {
  this.Init($context$$468$$, $callback$$128$$, $callbackObj$$77$$)
};
(0,D.$goog$exportPath_$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$469$$, $callback$$129$$, $callbackObj$$78$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$469$$);
  this.$_callback$ = $callback$$129$$;
  this.$_callbackObj$ = $callbackObj$$78$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(null != this.$_callback$ || null != this.$_callbackObj$) {
    this.$EventManager$ = new D.$DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$TOUCHSTART$$, this.$HandleTouchStart$, !1, this), this.$addEvtListener$(D.$DvtTouchEvent$TOUCHMOVE$$, this.$HandleTouchMove$, !1, this), this.$addEvtListener$(D.$DvtTouchEvent$TOUCHEND$$, this.$HandleTouchEnd$, !1, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, !1, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, 
    this.$HandleShapeMouseOver$, !1, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, !1, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, !1, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, !1, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, !1, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$37_viewportStart$$, $end$$21_size$$39$$, $overviewLength$$) {
  null == $overviewLength$$ && ($overviewLength$$ = this.$Width$);
  $start$$37_viewportStart$$ = this.$getDatePosition$($start$$37_viewportStart$$);
  var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($end$$21_size$$39$$);
  $start$$37_viewportStart$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this) || ($end$$21_size$$39$$ = window.Math.max($slidingWindow_viewportEnd$$ - $start$$37_viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this)), 0 < $end$$21_size$$39$$ && (0 <= $start$$37_viewportStart$$ && $slidingWindow_viewportEnd$$ <= $overviewLength$$) && ($slidingWindow_viewportEnd$$ = this.$getChildAt$(1), (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $overviewLength$$ - ($start$$37_viewportStart$$ + $end$$21_size$$39$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $start$$37_viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow_viewportEnd$$, $end$$21_size$$39$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this)))
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return null == $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ ? !1 : -1 != D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$, "zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$) {
  if(null == $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$) {
    var $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = this.$_start$, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = this.$_end$, $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = 
    this.$getChildAt$(1), $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$);
    null != $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ && 0 != $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ && (this.$_renderStart$ = D.$DvtTimeUtils$$.$getPositionDate$($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$, 
    $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$, $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$, this.$Width$));
    this.$removeChildren$()
  }
  null != $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ && null != $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ && (this.$Width$ = $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, this.$Height$ = $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$);
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ && ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ = this.$Parse$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$), this.$_applyParsedProperties$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$));
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ = null != this.$_callback$ || null != this.$_callbackObj$;
  this.$createBackground$($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$);
  if($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$) {
    $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = ($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = this.$isVertical$()) ? new D.$DvtRect$$(this.$getCtx$(), 
    0, 0, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, 0, "window") : new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "window");
    $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$) {
        var $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ = ($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ - 36) / 2, $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 
        3, 6, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 8, 8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 28, 8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 33, 6, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 3, -6, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 
        8, -8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 28, -8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 33, -6, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        var $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$, 
        "lhb"), $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$, 
        "rhb"), $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, 10), $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, 
          10)
        }else {
          $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$), $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$)
        }
      }else {
        $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ = ($height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ - 36) / 2, $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$ = D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 3, 8, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 
        8) + D.$DvtPathUtils$$.lineTo(8, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 28) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 33, 0, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 36), D.$DvtPathUtils$$.closePath(), $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = 
        D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 3, -8, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 8) + D.$DvtPathUtils$$.lineTo(-8, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 28) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 
        33, 0, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ + 36), D.$DvtPathUtils$$.closePath(), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = new D.$DvtRect$$(this.$getCtx$(), 0 - $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
        0, $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "lhb"), $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = new D.$DvtRect$$(this.$getCtx$(), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
        0, $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "rhb"), $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ = "col-resize", this.$_handleBackgroundImage$ ? ($bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$ = 
        (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$), $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$)) : ($bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, 
        $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$), $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$))
      }
      $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$);
      $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$ = new D.$DvtPath$$(this.$getCtx$(), $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$, "lh");
      $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = new D.$DvtPath$$(this.$getCtx$(), $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$, "rh");
      $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$.$setSolidStroke$(this.$_handleFillColor$);
      $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$));
      $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$.setCursor($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$);
      $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$.setCursor($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$);
      $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$.setCursor($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$);
      $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.setCursor($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$);
      $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$.setCursor($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$);
      $handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$.setCursor($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$);
      $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$addChild$($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$);
      $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$addChild$($leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$);
      $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$addChild$($bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$);
      $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$addChild$($handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$);
      $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$addChild$($child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$);
      $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$addChild$($handleX$$inline_7436_handleY$$inline_7444_rightGrippy$$inline_7443$$)
    }
    $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.setCursor("move");
    this.$addChild$($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$);
    $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ ? this.$isRTL$() ? new D.$DvtLine$$(this.$getCtx$(), 
    this.$getTimeAxisWidth$(), 0, this.$getTimeAxisWidth$(), $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "tab") : new D.$DvtLine$$(this.$getCtx$(), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ - this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ - 
    this.$getTimeAxisWidth$(), $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$getCtx$(), 0, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab") : new D.$DvtLine$$(this.$getCtx$(), 
    0, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab");
    $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$);
    this.$_timeAxisTopBar$ = $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$;
    this.$addChild$($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$);
    this.$isLeftAndRightFilterRendered$() && ($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ ? ($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, 0, "lbg"), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, 
    0, "rbg")) : ($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "lbg"), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "rbg")), $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$), 
    $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$), 
    D.$DvtTimeUtils$$.$supportsTouch$() && void 0 != $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ ? 
    ($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
    "lbgrh"), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
    "rbgrh")) : ($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
    $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "lbgrh"), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
    $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "rbgrh")), $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$), 
    $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$)))
  }
  if(null != this.$_ticks$) {
    $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = this.$isVertical$();
    $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this);
    for($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = 0;$end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ < this.$_ticks$.length;$end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$++) {
      $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = this.$_ticks$[$end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$], $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = 
      (0,window.parseInt)($child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.$getAttr$("time"), 10), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = this.$getDatePosition$($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$), 
      $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.$getAttr$("label"), $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = 
      0, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ + 1 < this.$_ticks$.length ? ($handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = (0,window.parseInt)(this.$_ticks$[$end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ + 
      1].$getAttr$("time"), 10), $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = this.$getDatePosition$($handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$) - $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$) : 
      $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ - $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, 
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ - 
      $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ && ($handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = 
      this.$Width$), $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ -= 10, this.$addTick$($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, 
      $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "tick" + $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$), this.$addLabel$($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, 
      $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$, 
      "label" + $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$)
    }
  }
  if(null != this.$_formattedTimeRanges$) {
    for($actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = 0;$actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ < 
    this.$_formattedTimeRanges$.length;$actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$++) {
      $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = this.$_formattedTimeRanges$[$actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$], 
      $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = 
      $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ = (0,window.parseInt)($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$.$getAttr$("rs"), 10), $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = 
      (0,window.parseInt)($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$.$getAttr$("re"), 10), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$.$getAttr$("c"), 
      null != $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ && null != $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ && ($handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = 
      (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ = this.$getDatePosition$($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$), $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = 
      this.$getDatePosition$($child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$) - $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ = 
      $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ - $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ - $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$), $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = 
      this.$isVertical$() ? new D.$DvtRect$$(this.$getCtx$(), 0, $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ - this.$getTimeAxisWidth$(), $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$, 
      "ftr") : new D.$DvtRect$$(this.$getCtx$(), $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$, "above" == this.$_overviewPosition$ ? (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) : 0, $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ - 
      (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "ftr"), null != $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ && $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$.$setSolidFill$($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, 
      0.4), $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$.setCursor("move"), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$), 
      this.$addChild$($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$))
    }
  }
  null == this.$_currentTime$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = 
  new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ - $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$), 
  $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = new D.$DvtLine$$(this.$getCtx$(), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
  0, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "ocd")), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$), this.$addChild$($actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$));
  this.$parseDataXML$($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$);
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ && ($child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ = 
  $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.$getY$(), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ + 
  0.5, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ + $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.getHeight(), 
  $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$ = $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ - 0.5, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = 
  0, $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = 0.5, $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$ = $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ - 0.5, $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, 
  $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, "lh"), $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$, 
  $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$, "rh"), $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ = new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, 
  0, $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, "ltb"), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$, $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, 
  $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, "rtb"), $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$, 
  $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$, "bb"), $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ = new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, 
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$, 
  "tb")) : ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ = 0, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ + 
  0.5, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$ = $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ - 
  0.5, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.$getX$(), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = 
  $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ + 0.5, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ = $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ + 
  $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.getWidth(), $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$ = $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ - 0.5, $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, 
  $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$, "lh"), $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$, 
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, $leftHandle$$inline_7445_leftHandleCmds$$inline_7437_rightCenter$$inline_7490$$, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$, "rh"), $cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$ = 
  new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ + 
  1, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, "ltb"), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ = new D.$DvtLine$$(this.$getCtx$(), $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ - 
  1, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
  "rtb"), $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$, $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, 
  $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$, "bb"), $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
  $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$), "none" != this.$_windowBorderLeftStyle$ && $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$), "none" != this.$_windowBorderRightStyle$ && $handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($handleSize$$inline_7433_maxWidth$$inline_7463_next_time$$inline_7464_rightHandle$$inline_7492_rightHandleBackground$$inline_7440_size$$inline_11188$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($cursor$$inline_7441_leftTopBar$$inline_7493_rangeStart$$inline_11185_rangeStart_pos$$inline_11189$$), 
  this.$addChild$($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_7495_bottomCenter$$inline_7486_leftGrippy$$inline_7442$$), "none" != this.$_windowBorderTopStyle$ && $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ = this.$isVertical$() ? D.$DvtPathUtils$$.moveTo(6, 0) + D.$DvtPathUtils$$.lineTo(0, 5) + D.$DvtPathUtils$$.lineTo(5, 5) + D.$DvtPathUtils$$.lineTo(5, 17) + D.$DvtPathUtils$$.lineTo(0, 17) + D.$DvtPathUtils$$.lineTo(6, 
  22) + D.$DvtPathUtils$$.lineTo(12, 17) + D.$DvtPathUtils$$.lineTo(7, 17) + D.$DvtPathUtils$$.lineTo(7, 5) + D.$DvtPathUtils$$.lineTo(12, 5) + D.$DvtPathUtils$$.closePath() : D.$DvtPathUtils$$.moveTo(5, 0) + D.$DvtPathUtils$$.lineTo(0, 6) + D.$DvtPathUtils$$.lineTo(5, 12) + D.$DvtPathUtils$$.lineTo(5, 7) + D.$DvtPathUtils$$.lineTo(17, 7) + D.$DvtPathUtils$$.lineTo(17, 12) + D.$DvtPathUtils$$.lineTo(22, 6) + D.$DvtPathUtils$$.lineTo(17, 0) + D.$DvtPathUtils$$.lineTo(17, 4) + D.$DvtPathUtils$$.lineTo(5, 
  4) + D.$DvtPathUtils$$.lineTo(5, 0) + D.$DvtPathUtils$$.closePath(), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ = new D.$DvtPath$$(this.$getCtx$(), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, "arr"), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$.$setSolidFill$("#ffffff"), 
  $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$.$setSolidStroke$("#000000"), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$.$setVisible$(!1), this.$addChild$($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$), this.$_resizeArrow$ = 
  $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$), $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ = this.$isVertical$(), $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ = this.$getChildAt$(1), $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ = 
  (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ ? this.$Height$ : this.$Width$, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = 
  this.$_width$, $color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$ = this.$_start$, $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ = 
  this.$_renderStart$, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, 
  $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$, 0, $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$), $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_11187_elem$$inline_11182_leftCenter$$inline_7488_leftHandleBackground$$inline_7439_rightBackground$$inline_7449_slidingWindow$$1_start$$inline_7508_time$$inline_7460_time_pos$$inline_7461$$, $child$$inline_7459_end$$inline_7509_label$$inline_7462_leftHandle$$inline_7491_rangeEnd$$inline_11186_rangeWidth$$inline_11190_rightHandle$$inline_7446_rightHandleCmds$$inline_7438_slidingWindow$$inline_7482_slidingWindowPos$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
  $end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$), $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = this.$getDatePosition$($bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$), 
  $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = window.Math.min($actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
  this.$getDatePosition$($end$$22_height$$inline_11184_i$$inline_7458_left$$inline_7487_leftBackground$$inline_7448_rangeEndTime$$inline_7512_slidingWindow$$inline_7432_timeAxisTopBar$$inline_7447_timelineWidth$$inline_7507$$)), $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ = this.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$), 
  $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ -= $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$, 
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ - $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ - 
  $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$), 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$ = 
  this.$_width$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$ = this.$_start$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$ = this.$_end$, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 1, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$), 
  $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
  2, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$), $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, 
  $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$, 
  $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$), this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7510_renderStartPos$$inline_7515_start$$inline_11196_top$$inline_7483_vertical$$inline_7503$$, $actualSize$$inline_7506_end$$inline_11197_handleStart$$inline_7434_i$$inline_7471_line$$inline_7477_newWidth$$inline_7516_rangeEndPos$$inline_7514_rightBackgroundResizeHandle$$inline_7451_time_pos$$inline_7476_topCenter$$inline_7484_vertical$$inline_7456$$, 
  $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$, $height$$111_right$$inline_7489_timelineWidth$$inline_11195_topBar$$inline_7496_window$$inline_7504$$) - $bottom$$inline_7485_day1$$inline_11198_displayable$$inline_11191_leftBackgroundResizeHandle$$inline_7450_pos1$$inline_11200_rangeStartPos$$inline_7513_rangeStartTime$$inline_7511_size$$inline_7457_start$$38_vertical$$inline_7431_width$$inline_11183$$);
  null != this.$_initialFocusTime$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ = this.$_initPos$ / this.$_increment$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$ = 0 - $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_7520_arrow$$inline_7500_arrowCmds$$inline_7499_day2$$inline_11199_rightTopBar$$inline_7494_size$$inline_7505_width$$122$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$312$$) {
  return this.$getParser$($obj$$312$$).parse($obj$$312$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$3$$) {
  this.$_start$ = $props$$3$$.start;
  this.$_end$ = $props$$3$$.end;
  this.$_width$ = $props$$3$$.width;
  this.$_renderStart$ = $props$$3$$.$renderStart$;
  this.$_currentTime$ = $props$$3$$.currentTime;
  this.$_initialFocusTime$ = $props$$3$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$3$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$3$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$3$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$3$$.orientation;
  this.$_overviewPosition$ = $props$$3$$.$overviewPosition$;
  this.$_isRtl$ = $props$$3$$.$isRtl$;
  null != $props$$3$$.$featuresOff$ && (this.$_featuresOff$ = $props$$3$$.$featuresOff$.split(" "));
  null != $props$$3$$.$minimumWindowSize$ && 0 < $props$$3$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$3$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$3$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$3$$.$timeAxisInfo$;
  null != $props$$3$$.$timeAxisInfo$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$3$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$3$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$3$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$3$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$3$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$3$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$3$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$3$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$3$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$3$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$3$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$3$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$3$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$3$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$3$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$3$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$3$$.$handleWidth$;
  this.$_handleHeight$ = $props$$3$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$3$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$3$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$3$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$3$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$3$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$3$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$3$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$3$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$3$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$10$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$10$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$55$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$55$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return"true" == this.$_isRtl$
};
D.$JSCompiler_StaticMethods_isHorizontalRTL$$ = function $$JSCompiler_StaticMethods_isHorizontalRTL$$$($JSCompiler_StaticMethods_isHorizontalRTL$self$$) {
  return $JSCompiler_StaticMethods_isHorizontalRTL$self$$.$isRTL$() && !$JSCompiler_StaticMethods_isHorizontalRTL$self$$.$isVertical$()
};
D.$DvtOverview$$.prototype.$isVertical$ = function $$DvtOverview$$$$$isVertical$$() {
  return"vertical" == this.$_orientation$
};
D.$JSCompiler_StaticMethods_getOverviewSize$$ = function $$JSCompiler_StaticMethods_getOverviewSize$$$($JSCompiler_StaticMethods_getOverviewSize$self$$) {
  return $JSCompiler_StaticMethods_getOverviewSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getOverviewSize$self$$.$Height$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getOverviewSize$self$$.$Width$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMaximumPosition$$ = function $$JSCompiler_StaticMethods_getMaximumPosition$$$($JSCompiler_StaticMethods_getMaximumPosition$self$$) {
  return $JSCompiler_StaticMethods_getMaximumPosition$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Height$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Width$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMinimumWindowSize$$ = function $$JSCompiler_StaticMethods_getMinimumWindowSize$$$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$) {
  return null != $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ ? $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ : null != $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$ ? ($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_end$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$ + 
  $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_getMinimumWindowSize$self$$)), $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$) : 10
};
D.$JSCompiler_StaticMethods_getHandleStart$$ = function $$JSCompiler_StaticMethods_getHandleStart$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? (0,D.$JSCompiler_StaticMethods_getHandleSize$$)() / 2 : 0
};
D.$JSCompiler_StaticMethods_getHandleSize$$ = function $$JSCompiler_StaticMethods_getHandleSize$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? 30 : 10
};
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$) {
  var $id$$241$$ = $drawable$$.getId();
  return"lh" == $id$$241$$ || "rh" == $id$$241$$ || "lhb" == $id$$241$$ || "rhb" == $id$$241$$ || "grpy" == $id$$241$$ || "lbgrh" == $id$$241$$ || "rbgrh" == $id$$241$$ || null != $drawable$$.getParent() && "grpy" == $drawable$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(null == this.$_timeAxisInfo$) {
    return 0
  }
  if(null == this.$_timeAxisWidth$) {
    var $width$$123$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$123$$) && $width$$123$$ < this.$Width$ ? $width$$123$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$JSCompiler_StaticMethods_getTimeAxisHeight$$ = function $$JSCompiler_StaticMethods_getTimeAxisHeight$$$($JSCompiler_StaticMethods_getTimeAxisHeight$self$$) {
  if(null == $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$) {
    return 0
  }
  if(null == $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$) {
    var $height$$112$$ = (0,window.parseInt)($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$.height, 10);
    $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ = !(0,window.isNaN)($height$$112$$) && $height$$112$$ < $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$Height$ ? $height$$112$$ : 20
  }
  return $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$598$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && null != $event$$598$$.targetTouches ? 0 < $event$$598$$.targetTouches.length ? $event$$598$$.targetTouches[0].pageX : null : $event$$598$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$599$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && null != $event$$599$$.targetTouches ? 0 < $event$$599$$.targetTouches.length ? $event$$599$$.targetTouches[0].pageY : null : $event$$599$$.pageY
};
D.$DvtOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(!1);
D.$JSCompiler_StaticMethods_getLeftBackground$$ = function $$JSCompiler_StaticMethods_getLeftBackground$$$($JSCompiler_StaticMethods_getLeftBackground$self$$) {
  return $JSCompiler_StaticMethods_getLeftBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getLeftBackground$self$$.$getChildAt$(3) : null
};
D.$JSCompiler_StaticMethods_getRightBackground$$ = function $$JSCompiler_StaticMethods_getRightBackground$$$($JSCompiler_StaticMethods_getRightBackground$self$$) {
  return $JSCompiler_StaticMethods_getRightBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getRightBackground$self$$.$getChildAt$(4) : null
};
D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$ = function $$JSCompiler_StaticMethods_getRightBackgroundHandle$$$($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) ? $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$getChildAt$(6) : null
};
D.$JSCompiler_StaticMethods_getRightHandle$$ = function $$JSCompiler_StaticMethods_getRightHandle$$$($JSCompiler_StaticMethods_getRightHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightHandle$self$$.$getChildAt$($JSCompiler_StaticMethods_getRightHandle$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_getRightHandle$self$$.$_lastChildIndex$ - 1))
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$12$$, $pos1$$1$$, $pos2$$1$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$1$$ && $line$$12$$.$setY1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setY2$($pos2$$1$$)) : (-1 != $pos1$$1$$ && $line$$12$$.$setX1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setX2$($pos2$$1$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$13$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$13$$.$getY1$() : $line$$13$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$600_target$$122$$) {
  $event$$600_target$$122$$ = $event$$600_target$$122$$.target;
  if(null != $event$$600_target$$122$$) {
    var $id$$242$$ = $event$$600_target$$122$$.getId();
    if(null == $id$$242$$) {
      return null
    }
    if("_border" == $id$$242$$.substr($id$$242$$.length - 7)) {
      return this.$getChildAfter$($event$$600_target$$122$$)
    }
    if("tick" != $id$$242$$.substr(0, 4) && "ltb" != $id$$242$$ && "rtb" != $id$$242$$ && "bb" != $id$$242$$ && "tab" != $id$$242$$) {
      return $event$$600_target$$122$$
    }
  }
  return null
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$1$$) {
  return"window" == $drawable$$1$$.getId() || "ftr" == $drawable$$1$$.getId() || "sta" == $drawable$$1$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$1$$) ? !0 : !1
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$124$$, $height$$113$$) {
  var $background$$13$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$124$$, $height$$113$$, "bg");
  $background$$13$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$13$$);
  this.$addChild$($background$$13$$);
  return $background$$13$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$, $width$$126$$, $height$$115$$) {
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$getCtx$(), $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleBackgroundImage$, ($width$$126$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$) / 2, ($height$$115$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$, 
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$, "grpy");
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$setMouseEnabled$(!1);
  return $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$1$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), "grpy"), $color$$77$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$2$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$750$$ = 0;9 > $i$$750$$;$i$$750$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$750$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$750$$ + 1, $starty$$1$$, "dot1" + $i$$750$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 1 + 2 * $i$$750$$, $starty$$1$$, $startx$$2$$ + 1 + 2 * $i$$750$$ + 1, $starty$$1$$, "dot2" + $i$$750$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$750$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$750$$ + 1, $starty$$1$$, "dot3" + $i$$750$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$77$$);
    $grippy$$1$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$2$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$750$$ = 0;9 > $i$$750$$;$i$$750$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$750$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$750$$ + 1, "dot1" + $i$$750$$), $dot$$.$setSolidStroke$($color$$77$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$750$$, $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$750$$ + 1, "dot2" + $i$$750$$), $dot$$.$setSolidStroke$($color$$77$$), 
      $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$750$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$750$$ + 1, "dot3" + $i$$750$$), $dot$$.$setSolidStroke$($color$$77$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$77$$);
    $grippy$$1$$.$addChild$($dot$$);
    $startx$$2$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$77$$);
  $grippy$$1$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$1$$);
  return $grippy$$1$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$40$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$40$$.getHeight() : $rect$$40$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$4$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$4$$.$getTranslateY$() : $slidingWindow$$4$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$, $pos$$57$$) {
  $pos$$57$$ = window.Math.max(0, $pos$$57$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$5$$.$setTranslateY$($pos$$57$$) : $rightStart_slidingWindow$$5$$.$setTranslateX$($pos$$57$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$57$$);
    $rightStart_slidingWindow$$5$$ = $pos$$57$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$5$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$5$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    null).$setX$($pos$$57$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$5$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$, $size$$42$$) {
  $size$$42$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$42$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$ = $size$$42$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$42$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$7$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$) : $rightGrippy$$1_slidingWindow$$7$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$) + $size$$42$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$7$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$42$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$.$setTranslateY$($size$$42$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateY$($size$$42$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$42$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_7528$$.$setTranslateX$($size$$42$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateX$($size$$42$$ - 10)))
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$14_pos$$58$$, $stroke$$99_width$$130$$, $height$$119$$, $id$$243$$) {
  $line$$14_pos$$58$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$getCtx$(), 0, $line$$14_pos$$58$$, $stroke$$99_width$$130$$, $line$$14_pos$$58$$, $id$$243$$) : new D.$DvtLine$$(this.$getCtx$(), $line$$14_pos$$58$$, 0, $line$$14_pos$$58$$, $height$$119$$, $id$$243$$);
  $stroke$$99_width$$130$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$99_width$$130$$.$setStyle$(1, 3);
  $line$$14_pos$$58$$.$setStroke$($stroke$$99_width$$130$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$14_pos$$58$$);
  this.$addChild$($line$$14_pos$$58$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($pos$$59$$, $label$$72_text$$102$$, $width$$131_y$$224$$, $height$$120$$, $maxWidth$$26$$, $id$$244$$, $dim$$63_labelStyle$$19$$) {
  $dim$$63_labelStyle$$19$$ = $dim$$63_labelStyle$$19$$ || new D.$DvtCSSStyle$$("font-weight:bold");
  this.$isVertical$() ? ($label$$72_text$$102$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$72_text$$102$$, 4, $pos$$59$$, $id$$244$$), $label$$72_text$$102$$.$setCSSStyle$($dim$$63_labelStyle$$19$$), this.$isRTL$() && (this.$addChild$($label$$72_text$$102$$), $dim$$63_labelStyle$$19$$ = $label$$72_text$$102$$.$getDimensions$(), this.removeChild($label$$72_text$$102$$), $label$$72_text$$102$$.$setX$(window.Math.max(4, this.$Width$ - $dim$$63_labelStyle$$19$$.$w$ - 4)))) : ($width$$131_y$$224$$ = 
  "above" == this.$_overviewPosition$ ? 2 : $height$$120$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) + 2, $label$$72_text$$102$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$72_text$$102$$, $pos$$59$$ + 5, $width$$131_y$$224$$, $id$$244$$), $label$$72_text$$102$$.$setCSSStyle$($dim$$63_labelStyle$$19$$), (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && (this.$addChild$($label$$72_text$$102$$), $dim$$63_labelStyle$$19$$ = $label$$72_text$$102$$.$getDimensions$(), this.removeChild($label$$72_text$$102$$), 
  $label$$72_text$$102$$.$setX$($pos$$59$$ - window.Math.min($dim$$63_labelStyle$$19$$.$w$, $maxWidth$$26$$) - 5)));
  D.$DvtTextUtils$$.$fitText$($label$$72_text$$102$$, $maxWidth$$26$$, window.Infinity, this);
  $label$$72_text$$102$$.$_rawText$ = $label$$72_text$$102$$.$getUntruncatedTextString$()
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$2$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(5);
  if($newLeft$$2$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$108_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$);
    $newLeft$$2$$ = window.Math.max($animator$$108_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$2$$));
    $animator$$108_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getCtx$(), 0.5, 0, D.$DvtEasing$linear$$) : null;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $posGetter$$, $posSetter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$2$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $newLeft$$2$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : null, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$2$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    null != $animator$$108_minPos$$ && $animator$$108_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$109$$, $obj$$313$$, $getter$$5$$, $setter$$3$$, $value$$184$$) {
  null != $animator$$109$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$109$$, "typeNumber", $obj$$313$$, $getter$$5$$, $setter$$3$$, $value$$184$$) : $setter$$3$$.call($obj$$313$$, $value$$184$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$601_relPos$$56$$) {
  var $drawable$$2$$ = this.$_findDrawable$($event$$601_relPos$$56$$);
  if($drawable$$2$$ && !("bg" == $drawable$$2$$.getId() || "ocd" == $drawable$$2$$.getId())) {
    if("label" == $drawable$$2$$.getId().substr(0, 5) && ($drawable$$2$$ instanceof D.$DvtOutputText$$ || $drawable$$2$$ instanceof D.$DvtBackgroundOutputText$$)) {
      $drawable$$2$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$601_relPos$$56$$.pageX, $event$$601_relPos$$56$$.pageY, $drawable$$2$$.$_rawText$, "#000000")
    }else {
      if(null != this.$_resizeArrow$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$) && ($event$$601_relPos$$56$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $event$$601_relPos$$56$$.pageX, $event$$601_relPos$$56$$.pageY), $event$$601_relPos$$56$$ = this.$stageToLocal$($event$$601_relPos$$56$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$601_relPos$$56$$.x + 6, $event$$601_relPos$$56$$.y - 10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, 
      $event$$601_relPos$$56$$.x - 6, $event$$601_relPos$$56$$.y - 20), this.$_resizeArrow$.$setVisible$(!0)), "window" == $drawable$$2$$.getId() || "ftr" == $drawable$$2$$.getId() || "arr" == $drawable$$2$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$2$$
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$3_event$$602$$) {
  null == this.$_moveDrawable$ && this.setCursor("default");
  $drawable$$3_event$$602$$ = this.$_findDrawable$($drawable$$3_event$$602$$);
  if(null != $drawable$$3_event$$602$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$3_event$$602$$) && null != this.$_resizeArrow$ && this.$_resizeArrow$.$setVisible$(!1), $drawable$$3_event$$602$$
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$, $newPos$$1_pageX$$8$$, $evt$$53_pageY$$8_pos$$60$$) {
  $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.stopPropagation();
  var $drawable$$4_newStartTime_size$$45$$ = this.$_findDrawable$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
  if($drawable$$4_newStartTime_size$$45$$ && !("window" == $drawable$$4_newStartTime_size$$45$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$4_newStartTime_size$$45$$))) {
    if("bg" == $drawable$$4_newStartTime_size$$45$$.getId() || "label" == $drawable$$4_newStartTime_size$$45$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$45$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$45$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$45$$.getId()) {
      void 0 == $newPos$$1_pageX$$8$$ && ($newPos$$1_pageX$$8$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.pageX);
      void 0 == $evt$$53_pageY$$8_pos$$60$$ && ($evt$$53_pageY$$8_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.pageY);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $newPos$$1_pageX$$8$$, $evt$$53_pageY$$8_pos$$60$$);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$stageToLocal$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
      this.$isVertical$() ? ($evt$$53_pageY$$8_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.y, $drawable$$4_newStartTime_size$$45$$ = this.$Height$) : ($evt$$53_pageY$$8_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.x, $drawable$$4_newStartTime_size$$45$$ = this.$Width$);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$getChildAt$(1);
      $newPos$$1_pageX$$8$$ = $evt$$53_pageY$$8_pos$$60$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$1_pageX$$8$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($evt$$53_pageY$$8_pos$$60$$ = this.$Width$ - $evt$$53_pageY$$8_pos$$60$$);
      var $time$$10$$ = this.$getPositionDate$($evt$$53_pageY$$8_pos$$60$$);
      $evt$$53_pageY$$8_pos$$60$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$53_pageY$$8_pos$$60$$.setTime($time$$10$$);
      $newPos$$1_pageX$$8$$ = window.Math.max(0, window.Math.min($newPos$$1_pageX$$8$$, $drawable$$4_newStartTime_size$$45$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? ($drawable$$4_newStartTime_size$$45$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$1_pageX$$8$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$))), $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$getPositionDate$(this.$Width$ - $newPos$$1_pageX$$8$$)) : ($drawable$$4_newStartTime_size$$45$$ = this.$getPositionDate$($newPos$$1_pageX$$8$$), $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = 
      this.$getPositionDate$($newPos$$1_pageX$$8$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$53_pageY$$8_pos$$60$$, $drawable$$4_newStartTime_size$$45$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$53_pageY$$8_pos$$60$$, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
      this.dispatchEvent($evt$$53_pageY$$8_pos$$60$$)
    }else {
      return $drawable$$4_newStartTime_size$$45$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($drawable$$5_event$$604_evt$$54$$, $compX_cursor$$inline_7531_slidingWindow$$10$$, $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$) {
  $drawable$$5_event$$604_evt$$54$$ = this.$_findDrawable$($drawable$$5_event$$604_evt$$54$$);
  if(null != $drawable$$5_event$$604_evt$$54$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$5_event$$604_evt$$54$$)) {
    if("ftr" == $drawable$$5_event$$604_evt$$54$$.getId() || "sta" == $drawable$$5_event$$604_evt$$54$$.getId()) {
      $drawable$$5_event$$604_evt$$54$$ = this.$getChildAt$(1)
    }
    this.$_initX$ = $compX_cursor$$inline_7531_slidingWindow$$10$$;
    this.$_initY$ = $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$;
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$5_event$$604_evt$$54$$)) {
      $compX_cursor$$inline_7531_slidingWindow$$10$$ = this.$getChildAt$(1);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? (this.$_oldEndPos$ = this.$Width$ - $compX_cursor$$inline_7531_slidingWindow$$10$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $compX_cursor$$inline_7531_slidingWindow$$10$$.getWidth()) : (this.$_oldStartPos$ = $compX_cursor$$inline_7531_slidingWindow$$10$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $compX_cursor$$inline_7531_slidingWindow$$10$$.getWidth());
      "grpy" == $drawable$$5_event$$604_evt$$54$$.getParent().getId() && ($drawable$$5_event$$604_evt$$54$$ = $drawable$$5_event$$604_evt$$54$$.getParent());
      $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ = $drawable$$5_event$$604_evt$$54$$.getId();
      "grpy" == $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7531_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$604_evt$$54$$), $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ = $drawable$$5_event$$604_evt$$54$$.getId());
      if("lh" == $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ || "rh" == $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$) {
        $drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7531_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$604_evt$$54$$), $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ = $drawable$$5_event$$604_evt$$54$$.getId()
      }
      "lbgrh" == $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7531_slidingWindow$$10$$.$getChildAt$(0));
      "rbgrh" == $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7531_slidingWindow$$10$$.$getChildAt$($compX_cursor$$inline_7531_slidingWindow$$10$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? ($drawable$$5_event$$604_evt$$54$$.$setY$(-20), $drawable$$5_event$$604_evt$$54$$.$setHeight$(2 * ($drawable$$5_event$$604_evt$$54$$.getHeight() + 20))) : ($drawable$$5_event$$604_evt$$54$$.$setX$(-20), $drawable$$5_event$$604_evt$$54$$.$setWidth$(2 * ($drawable$$5_event$$604_evt$$54$$.getWidth() + 20))));
      $compX_cursor$$inline_7531_slidingWindow$$10$$ = $drawable$$5_event$$604_evt$$54$$.getCursor();
      $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ = this.$getChildAt$(1);
      null != $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ && $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$.setCursor($compX_cursor$$inline_7531_slidingWindow$$10$$);
      if(this.$isLeftAndRightFilterRendered$()) {
        $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this);
        var $rightBackground$$inline_7534$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
        null != $compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$ && null != $rightBackground$$inline_7534$$ && ($compY_drawableId_leftBackground$$inline_7533_slidingWindow$$inline_7532$$.setCursor($compX_cursor$$inline_7531_slidingWindow$$10$$), $rightBackground$$inline_7534$$.setCursor($compX_cursor$$inline_7531_slidingWindow$$10$$))
      }
    }
    this.$_moveDrawable$ = $drawable$$5_event$$604_evt$$54$$;
    $drawable$$5_event$$604_evt$$54$$ = new D.$DvtOverviewEvent$$("dropCallback");
    this.dispatchEvent($drawable$$5_event$$604_evt$$54$$);
    return!0
  }
  return!1
};
D.$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  if(null != this.$_moveDrawable$) {
    if("window" == this.$_moveDrawable$.getId()) {
      this.$finishWindowDrag$(0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)(this.$_moveDrawable$)) {
        this.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_7538_slidingWindow$$inline_7537$$ = this.$getChildAt$(1);
        null != $leftBackground$$inline_7538_slidingWindow$$inline_7537$$ && $leftBackground$$inline_7538_slidingWindow$$inline_7537$$.setCursor("move");
        if(this.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_7538_slidingWindow$$inline_7537$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this), $rightBackground$$inline_7539$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
          null != $leftBackground$$inline_7538_slidingWindow$$inline_7537$$ && null != $rightBackground$$inline_7539$$ && ($leftBackground$$inline_7538_slidingWindow$$inline_7537$$.setCursor("default"), $rightBackground$$inline_7539$$.setCursor("default"))
        }
      }
    }
    this.$_moveDrawable$ = null;
    this.$_initX$ = -1
  }
};
D.$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($event$$605$$, $compX$$1$$, $compY$$1$$) {
  if(null != this.$_moveDrawable$ && -1 != this.$_initX$) {
    var $diffX$$11$$ = $compX$$1$$ - this.$_initX$, $diffY$$12$$ = $compY$$1$$ - this.$_initY$;
    this.$_initX$ = $compX$$1$$;
    this.$_initY$ = $compY$$1$$;
    "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$11$$, $diffY$$12$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$605$$, $diffX$$11$$, $diffY$$12$$, !0) : ("rh" == this.$_moveDrawable$.getId() || "rhb" == this.$_moveDrawable$.getId()) && this.$handleRightHandleDragPositioning$($event$$605$$, $diffX$$11$$, $diffY$$12$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$606$$) {
  var $touches$$10$$ = $event$$606$$.touches;
  this.$_touchStartX$ = $touches$$10$$[0].pageX;
  this.$_touchStartY$ = $touches$$10$$[0].pageY;
  2 == $touches$$10$$.length && ($event$$606$$.preventDefault(), this.$_touchStartX2$ = $touches$$10$$[1].pageX, this.$_touchStartY2$ = $touches$$10$$[1].pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = null)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$607_touches$$11$$) {
  $event$$607_touches$$11$$.preventDefault();
  $event$$607_touches$$11$$ = $event$$607_touches$$11$$.touches;
  if(null != this.$_touchStartX2$ && null != this.$_touchStartY2$) {
    50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$(null, $event$$607_touches$$11$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $event$$607_touches$$11$$[1].pageX, this.$_counter$ = 0)
  }else {
    var $pageDy$$1$$ = window.Math.abs(this.$_touchStartY$ - $event$$607_touches$$11$$[0].pageY);
    if(3 < window.Math.abs(this.$_touchStartX$ - $event$$607_touches$$11$$[0].pageX) || 3 < $pageDy$$1$$) {
      this.$_touchStartY$ = this.$_touchStartX$ = null
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$608$$) {
  null != this.$_touchStartX2$ && null != this.$_touchStartY2$ ? this.$finishHandleDrag$() : null != this.$_touchStartX$ && null != this.$_touchStartY$ && this.$HandleShapeClick$($event$$608$$, this.$_touchStartX$, this.$_touchStartY$);
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = null
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$609$$) {
  var $delta$$16_keyCode$$40$$ = $event$$609$$.keyCode;
  if(37 === $delta$$16_keyCode$$40$$ || 39 === $delta$$16_keyCode$$40$$) {
    $delta$$16_keyCode$$40$$ = 37 === $delta$$16_keyCode$$40$$ ? -1 : 1, ($event$$609$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$609$$, $delta$$16_keyCode$$40$$, $delta$$16_keyCode$$40$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$610$$) {
  var $delta$$17_keyCode$$41$$ = $event$$610$$.keyCode;
  if(37 === $delta$$17_keyCode$$41$$ || 39 === $delta$$17_keyCode$$41$$) {
    $delta$$17_keyCode$$41$$ = 37 === $delta$$17_keyCode$$41$$ ? -1 : 1, ($event$$610$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $delta$$17_keyCode$$41$$, $delta$$17_keyCode$$41$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$611$$, $deltaX$$16$$, $deltaY$$19$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$16$$, $deltaY$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($deltaX$$17$$, $deltaY$$20$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$17$$, $deltaY$$20$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$55_type$$231$$, $delta$$18_deltaX$$18$$, $deltaY$$21$$) {
  var $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$64$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$46$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$18_deltaX$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$21$$ : $delta$$18_deltaX$$18$$;
  $pos$$64$$ + $delta$$18_deltaX$$18$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$46$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? -2 : -1) : $pos$$64$$ + $newStartTime$$1_scrollTo_size$$46$$ + $delta$$18_deltaX$$18$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$46$$), $newStartTime$$1_scrollTo_size$$46$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $pos$$64$$ + $delta$$18_deltaX$$18$$), $newStartTime$$1_scrollTo_size$$46$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? 
  ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$46$$ - $pos$$64$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$64$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$55_type$$231$$ = new D.$DvtOverviewEvent$$($evt$$55_type$$231$$);
  $evt$$55_type$$231$$.$setPosition$($newStartTime$$1_scrollTo_size$$46$$);
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? ($newStartTime$$1_scrollTo_size$$46$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$64$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$64$$)) : ($newStartTime$$1_scrollTo_size$$46$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$64$$), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$64$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$55_type$$231$$, $newStartTime$$1_scrollTo_size$$46$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$55_type$$231$$, $newEndTime$$1_slidingWindow$$17$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$55_type$$231$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$613$$, $deltaX$$20$$, $deltaY$$23$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$613$$, $deltaX$$20$$, $deltaY$$23$$, !1)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $delta$$19_deltaY$$24$$, $isLeft$$5_newStartTime$$2$$) {
  var $evt$$56_size$$47$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$19_deltaY$$24$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$19_deltaY$$24$$ : $deltaX$$21_newEndTime$$2_slidingWindow$$18$$;
  if(0 != $delta$$19_deltaY$$24$$) {
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$);
    if($isLeft$$5_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$19_deltaY$$24$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$19_deltaY$$24$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$)).x;
      $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$);
      if(0 < $delta$$19_deltaY$$24$$ && $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ <= $windowPos$$ || 0 > $delta$$19_deltaY$$24$$ && $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowPos$$ + $delta$$19_deltaY$$24$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ - $delta$$19_deltaY$$24$$)
    }else {
      if($windowSize$$ + $delta$$19_deltaY$$24$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$19_deltaY$$24$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$)).x;
      $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$);
      if(0 < $delta$$19_deltaY$$24$$ && $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$19_deltaY$$24$$ && $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ + $delta$$19_deltaY$$24$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$));
    $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ = $evt$$56_size$$47$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $evt$$56_size$$47$$ = new D.$DvtOverviewEvent$$("rangeChanging");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$47$$, "newSize", $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$);
    $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$;
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$47$$, "endHandle", $endHandle$$inline_7550_event$$614_newSize$$1_relPos$$58_time$$12$$);
    $isLeft$$5_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$47$$, "expand", 0 > $delta$$19_deltaY$$24$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$47$$, "expand", 0 < $delta$$19_deltaY$$24$$);
    (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) ? ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$) + 
    (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$))), $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$))) : ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$)), $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$)));
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$56_size$$47$$, $isLeft$$5_newStartTime$$2$$);
    (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$56_size$$47$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$56_size$$47$$)
  }
};
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$44$$ = this.$_start$, $end$$28_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$48$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$19$$ = this.$getChildAt$(1), $newStartTime$$3_time$$13$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newSize$$2_start$$44$$ = $oldEndTime_size$$48$$ * ($end$$28_oldStartTime$$ - $newSize$$2_start$$44$$) / 
  ($newStartTime$$3_time$$13$$ - $newSize$$2_start$$44$$), $end$$28_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$48$$ = this.$getPositionDate$(this.$_oldEndPos$);
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? ($newStartTime$$3_time$$13$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$13$$ = 
  this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)));
  var $evt$$57$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "newSize", $newSize$$2_start$$44$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldStartTime", $end$$28_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldEndTime", $oldEndTime_size$$48$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$57$$, $newStartTime$$3_time$$13$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$57$$, $newEndTime$$3_slidingWindow$$19$$);
  this.dispatchEvent($evt$$57$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $rightCenter$$1_slidingWindow$$20$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $left$$18$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$), $leftCenter$$1$$ = $left$$18$$ + 0.5, $rightCenter$$1_slidingWindow$$20$$ = $left$$18$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$) - 0.5, $leftHandle$$3$$ = 
  $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, $leftCenter$$1$$, $leftCenter$$1$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, $rightCenter$$1_slidingWindow$$20$$, $rightCenter$$1_slidingWindow$$20$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, $left$$18$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$), -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$615$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$615$$)
};
D.$DvtOverview$$.prototype.$destroy$ = function $$DvtOverview$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = null);
  D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$removeEvtListener$(D.$DvtTouchEvent$TOUCHSTART$$, this.$HandleTouchStart$, !1, this), this.$removeEvtListener$(D.$DvtTouchEvent$TOUCHMOVE$$, this.$HandleTouchMove$, !1, this), this.$removeEvtListener$(D.$DvtTouchEvent$TOUCHEND$$, this.$HandleTouchEnd$, !1, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, !1, this)) : (this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleShapeMouseOver$, !1, this), this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  this.$HandleShapeMouseOut$, !1, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, !1, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, !1, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, !1, this));
  D.$DvtOverview$$.$superclass$.$destroy$.call(this)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$49$$) {
  this.Init($view$$49$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$89$$) {
  return this.$ParseRootAttributes$($data$$89$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$231$$) {
  var $ret$$92$$ = {};
  $ret$$92$$.$animationOnClick$ = $options$$231$$.animationOnClick;
  null != $options$$231$$.startTime && ($ret$$92$$.start = $options$$231$$.startTime);
  null != $options$$231$$.endTime && ($ret$$92$$.end = $options$$231$$.endTime);
  null == $ret$$92$$.start && ($ret$$92$$.start = (new window.Date).getTime());
  if(null == $ret$$92$$.end || $ret$$92$$.end <= $ret$$92$$.start) {
    $ret$$92$$.end = $ret$$92$$.start + 864E5
  }
  null != $options$$231$$.currentTime && ($ret$$92$$.currentTime = $options$$231$$.currentTime);
  null != $options$$231$$.initialFocusTime && ($ret$$92$$.$initialFocusTime$ = $options$$231$$.initialFocusTime);
  $ret$$92$$.orientation = "horizontal";
  null != $options$$231$$.orientation && ($ret$$92$$.orientation = $options$$231$$.orientation);
  $ret$$92$$.$featuresOff$ = $options$$231$$.featuresOff;
  $ret$$92$$.$minimumWindowSize$ = $options$$231$$.minimumWindowSize;
  $ret$$92$$.$leftMargin$ = $options$$231$$.leftMargin;
  $ret$$92$$.$rightMargin$ = $options$$231$$.rightMargin;
  if(null != $options$$231$$.viewportEndTime) {
    var $viewportEndTime$$ = $options$$231$$.viewportEndTime, $viewportStartTime$$ = $ret$$92$$.start;
    null != $options$$231$$.viewportStartTime && $options$$231$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$231$$.viewportStartTime);
    $ret$$92$$.width = null != $options$$231$$.viewportEndPos ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$231$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$92$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$92$$.$renderStart$ = $ret$$92$$.start
  }
  0 == $ret$$92$$.width && ($ret$$92$$.width = 1E3);
  $ret$$92$$.$overviewPosition$ = "below";
  $ret$$92$$.$selectionMode$ = "none";
  $ret$$92$$.$isRtl$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_view$.$getCtx$()).toString();
  null != $options$$231$$.rtl && ($ret$$92$$.$isRtl$ = $options$$231$$.rtl.toString());
  $ret$$92$$.$handleFillColor$ = "#FFFFFF";
  $ret$$92$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$92$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$92$$.$windowBackgroundAlpha$ = 1;
  $ret$$92$$.$windowBorderTopStyle$ = "solid";
  $ret$$92$$.$windowBorderRightStyle$ = "solid";
  $ret$$92$$.$windowBorderBottomStyle$ = "solid";
  $ret$$92$$.$windowBorderLeftStyle$ = "solid";
  $ret$$92$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$92$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$92$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$92$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$92$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$92$$.$timeAxisBarOpacity$ = 1;
  $ret$$92$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$92$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$rightFilterPanelAlpha$ = 0.7;
  null != $options$$231$$.style && (null != $options$$231$$.style.handleFillColor && ($ret$$92$$.$handleFillColor$ = $options$$231$$.style.handleFillColor), null != $options$$231$$.style.handleTextureColor && ($ret$$92$$.$handleTextureColor$ = $options$$231$$.style.handleTextureColor), null != $options$$231$$.style.handleBackgroundImage && ($ret$$92$$.$handleBackgroundImage$ = $options$$231$$.style.handleBackgroundImage), null != $options$$231$$.style.handleWidth && ($ret$$92$$.$handleWidth$ = $options$$231$$.style.handleWidth), 
  null != $options$$231$$.style.handleHeight && ($ret$$92$$.$handleHeight$ = $options$$231$$.style.handleHeight), null != $options$$231$$.style.windowBackgroundColor && ($ret$$92$$.$windowBackgroundColor$ = $options$$231$$.style.windowBackgroundColor), null != $options$$231$$.style.windowBackgroundAlpha && ($ret$$92$$.$windowBackgroundAlpha$ = $options$$231$$.style.windowBackgroundAlpha), null != $options$$231$$.style.windowBorderTopStyle && ($ret$$92$$.$windowBorderTopStyle$ = $options$$231$$.style.windowBorderTopStyle), 
  null != $options$$231$$.style.windowBorderRightStyle && ($ret$$92$$.$windowBorderRightStyle$ = $options$$231$$.style.windowBorderRightStyle), null != $options$$231$$.style.windowBorderBottomStyle && ($ret$$92$$.$windowBorderBottomStyle$ = $options$$231$$.style.windowBorderBottomStyle), null != $options$$231$$.style.windowBorderLeftStyle && ($ret$$92$$.$windowBorderLeftStyle$ = $options$$231$$.style.windowBorderLeftStyle), null != $options$$231$$.style.windowBorderTopColor && ($ret$$92$$.$windowBorderTopColor$ = 
  $options$$231$$.style.windowBorderTopColor), null != $options$$231$$.style.windowBorderRightColor && ($ret$$92$$.$windowBorderRightColor$ = $options$$231$$.style.windowBorderRightColor), null != $options$$231$$.style.windowBorderBottomColor && ($ret$$92$$.$windowBorderBottomColor$ = $options$$231$$.style.windowBorderBottomColor), null != $options$$231$$.style.windowBorderLeftColor && ($ret$$92$$.$windowBorderLeftColor$ = $options$$231$$.style.windowBorderLeftColor), null != $options$$231$$.style.overviewBackgroundColor && 
  ($ret$$92$$.$overviewBackgroundColor$ = $options$$231$$.style.overviewBackgroundColor), null != $options$$231$$.style.currentTimeIndicatorColor && ($ret$$92$$.$currentTimeIndicatorColor$ = $options$$231$$.style.currentTimeIndicatorColor), null != $options$$231$$.style.timeIndicatorColor && ($ret$$92$$.$timeIndicatorColor$ = $options$$231$$.style.timeIndicatorColor), null != $options$$231$$.style.leftFilterPanelColor && ($ret$$92$$.$leftFilterPanelColor$ = $options$$231$$.style.leftFilterPanelColor), 
  null != $options$$231$$.style.leftFilterPanelAlpha && ($ret$$92$$.$leftFilterPanelAlpha$ = $options$$231$$.style.leftFilterPanelAlpha), null != $options$$231$$.style.rightFilterPanelColor && ($ret$$92$$.$rightFilterPanelColor$ = $options$$231$$.style.rightFilterPanelColor), null != $options$$231$$.style.rightFilterPanelAlpha && ($ret$$92$$.$rightFilterPanelAlpha$ = $options$$231$$.style.rightFilterPanelAlpha));
  return $ret$$92$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$1_startTime$$3$$, $endTime$$3$$, $denominator_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$1_startTime$$3$$ = $viewportEndPos$$ * ($endTime$$3$$ - $number$$1_startTime$$3$$);
  $denominator_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator_viewportStartTime$$1$$;
  return 0 == $number$$1_startTime$$3$$ || 0 == $denominator_viewportStartTime$$1$$ ? 0 : $number$$1_startTime$$3$$ / $denominator_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$232$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$232$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$14$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$14$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$4$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$4$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$65$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$65$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
D.$DvtOverviewEventManager$$ = function $$DvtOverviewEventManager$$$($overview$$1$$) {
  this.Init($overview$$1$$.$getCtx$(), $overview$$1$$.$processEvent$, $overview$$1$$);
  this.$_overview$ = $overview$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEventManager$$, D.$DvtEventManager$$, "DvtOverviewEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverviewEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$81$$) {
  D.$DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$81$$);
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this)
};
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$616$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$616$$) : this.$_onMouseDragStart$($event$$616$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$617$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$617$$) : this.$_onMouseDragMove$($event$$617$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$618$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$618$$) : this.$_onMouseDragEnd$($event$$618$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$9$$, $pageY$$9$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$9$$ - this.$_stageAbsolutePosition$.x, $pageY$$9$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$619$$) {
  if(2 != $event$$619$$.button) {
    var $relPos$$59$$ = this.$_getRelativePosition$($event$$619$$.pageX, $event$$619$$.pageY);
    (0,D.$DvtEventManager$consumeEvent$$)($event$$619$$);
    this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
    return this.$_overview$.$beginDragPan$($event$$619$$, $relPos$$59$$.x, $relPos$$59$$.y)
  }
  return!1
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$620$$) {
  var $relPos$$60$$ = this.$_getRelativePosition$($event$$620$$.pageX, $event$$620$$.pageY);
  $event$$620$$.stopPropagation();
  this.$_overview$.$contDragPan$($event$$620$$, $relPos$$60$$.x, $relPos$$60$$.y);
  return!0
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$($event$$621$$) {
  $event$$621$$.stopPropagation();
  this.$_overview$.$endDragPan$();
  this.$_stageAbsolutePosition$ = null
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$622$$) {
  var $relPos$$61_touches$$12$$ = $event$$622$$.touches;
  $event$$622$$.stopPropagation();
  return 1 == $relPos$$61_touches$$12$$.length ? ($relPos$$61_touches$$12$$ = this.$_getRelativePosition$($relPos$$61_touches$$12$$[0].pageX, $relPos$$61_touches$$12$$[0].pageY), $event$$622$$.preventDefault(), this.$_overview$.$beginDragPan$($event$$622$$, $relPos$$61_touches$$12$$.x, $relPos$$61_touches$$12$$.y)) : !1
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$623$$) {
  var $relPos$$62_touches$$13$$ = $event$$623$$.touches;
  1 == $relPos$$62_touches$$13$$.length && ($relPos$$62_touches$$13$$ = this.$_getRelativePosition$($relPos$$62_touches$$13$$[0].pageX, $relPos$$62_touches$$13$$[0].pageY), this.$_overview$.$contDragPan$($event$$623$$, $relPos$$62_touches$$13$$.x, $relPos$$62_touches$$13$$.y), $event$$623$$.preventDefault());
  $event$$623$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$624$$) {
  this.$_overview$.$endDragPan$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$624$$);
  this.$_stageAbsolutePosition$ = null
};

  return D;
});