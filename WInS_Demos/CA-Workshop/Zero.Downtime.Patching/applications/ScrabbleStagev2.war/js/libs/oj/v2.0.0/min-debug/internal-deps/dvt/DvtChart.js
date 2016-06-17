/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtChart$$ = function $$DvtChart$$$($context$$34$$, $callback$$40$$, $callbackObj$$3$$) {
  this.Init($context$$34$$, $callback$$40$$, $callbackObj$$3$$)
};
(0,D.$goog$exportPath_$$)("DvtChart", D.$DvtChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChart$$, D.$DvtBaseComponent$$, "DvtChart");
D.$DvtChart$newInstance$$ = function $$DvtChart$newInstance$$$($context$$35$$, $callback$$41$$, $callbackObj$$4$$) {
  return new D.$DvtChart$$($context$$35$$, $callback$$41$$, $callbackObj$$4$$)
};
D.$DvtChart$$.newInstance = D.$DvtChart$newInstance$$;
D.$DvtChart$$.getDefaults = function $$DvtChart$$$getDefaults$($skin$$1$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtChartDefaults$$, $skin$$1$$)
};
D.$DvtChart$$.prototype.Init = function $$DvtChart$$$$Init$($context$$36$$, $callback$$42$$, $callbackObj$$5$$) {
  D.$DvtChart$$.$superclass$.Init.call(this, $context$$36$$, $callback$$42$$, $callbackObj$$5$$);
  this.$Defaults$ = new D.$DvtChartDefaults$$;
  this.$EventManager$ = new D.$DvtChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("chart1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = this.$_animation$ = null;
  this.$Peers$ = [];
  this.$SeriesStyleArray$ = [];
  this.$Cache$ = {};
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0;
  this.$_rawOptions$ = this.$_dataLabels$ = null
};
D.$DvtChart$$.prototype.$GetComponentDescription$ = function $$DvtChart$$$$$GetComponentDescription$$() {
  var $options$$28$$ = this.$getOptions$(), $compName$$ = (0,D.$DvtBundle$getTranslation$$)($options$$28$$, "componentName", "DvtUtilBundle", "CHART"), $compDesc$$ = "", $delimiter$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ARIA_LABEL_DESC_DELIMITER");
  $options$$28$$.title.text && ($compDesc$$ += this.$Options$.title.text, $options$$28$$.subtitle.text && ($compDesc$$ += $delimiter$$ + this.$Options$.subtitle.text));
  $options$$28$$.footnote.text && ($compDesc$$ = 0 == $compDesc$$.length ? this.$Options$.footnote.text : $compDesc$$.concat($delimiter$$, this.$Options$.footnote.text));
  return 0 < $compDesc$$.length ? (0,D.$DvtBundle$getTranslation$$)($options$$28$$, "labelAndValue", "DvtUtilBundle", "COLON_SEP_LIST", [$compName$$, $compDesc$$]) : $compName$$
};
D.$DvtChart$$.prototype.$SetOptions$ = function $$DvtChart$$$$$SetOptions$$($options$$29_popupBehaviors_selectionMode$$5$$) {
  $options$$29_popupBehaviors_selectionMode$$5$$ ? (this.$_rawOptions$ = $options$$29_popupBehaviors_selectionMode$$5$$, this.$Options$ = this.$Defaults$.$calcOptions$($options$$29_popupBehaviors_selectionMode$$5$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), D.$DvtChartDataUtils$$.$processDataObject$(this), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = 
  "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$29_popupBehaviors_selectionMode$$5$$ = this.$Options$.selectionMode;
  this.$_selectionHandler$ = "single" == $options$$29_popupBehaviors_selectionMode$$5$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$29_popupBehaviors_selectionMode$$5$$ ? new D.$DvtSelectionHandler$$("m") : null;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  if($options$$29_popupBehaviors_selectionMode$$5$$ = this.$Options$._spb) {
    this.$_popupBehaviors$ = {};
    for(var $stampId$$ in $options$$29_popupBehaviors_selectionMode$$5$$) {
      for(var $popupBehaviorArray$$ = $options$$29_popupBehaviors_selectionMode$$5$$[$stampId$$], $i$$131$$ = 0;$i$$131$$ < $popupBehaviorArray$$.length;$i$$131$$++) {
        this.$_popupBehaviors$[$stampId$$] || (this.$_popupBehaviors$[$stampId$$] = []);
        var $popupBehavior$$ = $popupBehaviorArray$$[$i$$131$$];
        this.$_popupBehaviors$[$stampId$$].push(new D.$DvtShowPopupBehavior$$($popupBehavior$$.popupId, $popupBehavior$$.triggerType, $popupBehavior$$.alignId, $popupBehavior$$.align))
      }
    }
  }
};
D.$DvtChart$$.prototype.$render$ = function $$DvtChart$$$$$render$$($options$$30_paSpace$$, $container$$16_width$$33$$, $animationDuration$$1_height$$37$$) {
  var $context$$37$$ = this.$getCtx$(), $animationOnDataChange$$ = this.$Options$ ? this.$Options$.animationOnDataChange : "none", $oldChart$$ = "none" != $animationOnDataChange$$ ? new D.$DvtDCChart$$(this) : null, $focusState$$ = (0,D.$JSCompiler_StaticMethods___cacheChartFocus$$)(this);
  this.$__cleanUp$();
  this.$SetOptions$($options$$30_paSpace$$);
  !(0,window.isNaN)($container$$16_width$$33$$) && !(0,window.isNaN)($animationDuration$$1_height$$37$$) && (this.$Width$ = $container$$16_width$$33$$, this.$Height$ = $animationDuration$$1_height$$37$$);
  $container$$16_width$$33$$ = new D.$DvtContainer$$($context$$37$$);
  this.$addChild$($container$$16_width$$33$$);
  D.$DvtChartRenderer$$.$render$(this, $container$$16_width$$33$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  D.$DvtChartTypeUtils$$.$isSpark$(this) && this.$EventManager$.$removeListeners$(this);
  this.$_animation$ && (this.$_animationStopped$ = !0, this.$_animation$.stop());
  var $animationOnDisplay$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
  $animationDuration$$1_height$$37$$ = D.$DvtChartStyleUtils$$.$getAnimationDuration$(this);
  var $bounds$$4$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), $bBlackBoxUpdate$$ = !1;
  this.$_container$ ? "none" != $animationOnDataChange$$ && $options$$30_paSpace$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$37$$, $animationOnDataChange$$, this.$_container$, $container$$16_width$$33$$, $bounds$$4$$, $animationDuration$$1_height$$37$$)) ? $bBlackBoxUpdate$$ = !0 : "auto" == $animationOnDataChange$$ && this.$getPlotArea$() && ($options$$30_paSpace$$ = this.$_plotAreaSpace$, this.$_delContainer$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$(this, 
  this.$_container$, new D.$DvtRectangle$$(0, 0, $options$$30_paSpace$$.$w$, $options$$30_paSpace$$.$h$)), this.$_animation$ = D.$DvtAnimOnDC$$.$createAnimation$($oldChart$$, this, $animationOnDataChange$$, $animationDuration$$1_height$$37$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().$addChild$(this.$_delContainer$))) : "none" != $animationOnDisplay$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$37$$, $animationOnDisplay$$, 
  $container$$16_width$$33$$, $bounds$$4$$, $animationDuration$$1_height$$37$$), !this.$_animation$ && "auto" == $animationOnDisplay$$ && (this.$_animation$ = D.$DvtAnimOnDisplay$$.$createAnimation$(this, $animationOnDisplay$$, $animationDuration$$1_height$$37$$)));
  this.$_animation$ && (this.$EventManager$.$removeListeners$(this), (0,D.$DvtPlayable$appendOnEnd$$)(this.$_animation$, this.$_onAnimationEnd$, this), this.$_animation$.play());
  $bBlackBoxUpdate$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = null);
  this.$_container$ = $container$$16_width$$33$$;
  this.$_dataCursor$ = D.$DvtChartRenderer$$.$renderDataCursor$(this);
  this.$UpdateAriaAttributes$();
  (0,D.$JSCompiler_StaticMethods___restoreChartFocus$$)(this, $focusState$$);
  this.$_animation$ || (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this)
};
D.$DvtChart$$.prototype.render = D.$DvtChart$$.prototype.$render$;
D.$DvtChart$$.prototype.$destroy$ = function $$DvtChart$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = null);
  D.$DvtChart$$.$superclass$.$destroy$.call(this)
};
D.$DvtChart$$.prototype.destroy = D.$DvtChart$$.prototype.$destroy$;
D.$DvtChart$$.prototype.$__cleanUp$ = function $$DvtChart$$$$$__cleanUp$$() {
  this.$_dataCursor$ && (this.removeChild(this.$_dataCursor$), this.$_dataCursor$ = null);
  this.$EventManager$ && (0,D.$JSCompiler_StaticMethods_hideHoverFeedback$$)(this.$EventManager$);
  this.$Peers$ = [];
  this.$yScrollbar$ = this.$xScrollbar$ = null;
  this.$dragButtons$ && (this.removeChild(this.$dragButtons$), this.$dragButtons$.$destroy$(), this.$dragButtons$ = null, this.$EventManager$.$panButton$ = null, this.$EventManager$.$zoomButton$ = null, this.$EventManager$.$selectButton$ = null);
  this.$_dataLabels$ = this.$_areaContainer$ = this.$_plotArea$ = null;
  this.$Cache$ = {}
};
D.$DvtChart$$.prototype.$_onAnimationEnd$ = function $$DvtChart$$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
  this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().removeChild(this.$_delContainer$);
  this.$_delContainer$ = null;
  this.$_animationStopped$ || (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this);
  this.$_animationStopped$ = this.$_animation$ = null;
  this.$EventManager$.$addListeners$(this)
};
D.$DvtChart$$.prototype.$CreateKeyboardHandler$ = function $$DvtChart$$$$$CreateKeyboardHandler$$($manager$$2$$) {
  return new D.$DvtChartKeyboardHandler$$($manager$$2$$, this)
};
D.$DvtChart$$.prototype.$getAutomation$ = function $$DvtChart$$$$$getAutomation$$() {
  return new D.$DvtChartAutomation$$(this)
};
D.$DvtChart$$.prototype.getAutomation = D.$DvtChart$$.prototype.$getAutomation$;
D.$DvtChart$$.prototype.$getValuesAt$ = function $$DvtChart$$$$$getValuesAt$$($x$$70$$, $y$$49$$) {
  var $paBounds_r$$1$$ = this.$_plotAreaSpace$, $relX_theta$$ = $x$$70$$ - $paBounds_r$$1$$.x, $relY$$ = $y$$49$$ - $paBounds_r$$1$$.y, $isPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$(this), $isHoriz$$3$$ = D.$DvtChartTypeUtils$$.$isHorizontal$(this);
  return $isPolar$$ ? ($relX_theta$$ -= $paBounds_r$$1$$.$w$ / 2, $relY$$ -= $paBounds_r$$1$$.$h$ / 2, $paBounds_r$$1$$ = window.Math.sqrt($relX_theta$$ * $relX_theta$$ + $relY$$ * $relY$$), $relX_theta$$ = window.Math.atan2($relX_theta$$, -$relY$$), 0 > $relX_theta$$ && ($relX_theta$$ += 2 * window.Math.PI), {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($relX_theta$$) : null, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($paBounds_r$$1$$) : null}) : {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($isHoriz$$3$$ ? 
  $relY$$ : $relX_theta$$) : null, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($isHoriz$$3$$ ? $relX_theta$$ : $relY$$) : null, y2:this.$y2Axis$ ? this.$y2Axis$.$getValueAt$($isHoriz$$3$$ ? $relX_theta$$ : $relY$$) : null}
};
D.$DvtChart$$.prototype.getValuesAt = D.$DvtChart$$.prototype.$getValuesAt$;
D.$DvtChart$$.prototype.filter = function $$DvtChart$$$$filter$($category$$, $type$$60$$) {
  D.$DvtChartEventUtils$$.$setVisibility$(this, $category$$, "out" == $type$$60$$ ? "hidden" : "visible");
  this.$render$(this.$Options$)
};
D.$DvtChart$$.prototype.filter = D.$DvtChart$$.prototype.filter;
D.$DvtChart$$.prototype.$highlight$ = function $$DvtChart$$$$$highlight$$($categories$$) {
  this.$getOptions$().highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$, this.$getObjects$(), "any" == this.$getOptions$().highlightMatch);
  this.$legend$ && this.$legend$.$highlight$($categories$$);
  this.$pieChart$ && this.$pieChart$.$highlight$($categories$$);
  this.$overview$ && this.$overview$.$_chart$.$highlight$($categories$$)
};
D.$DvtChart$$.prototype.highlight = D.$DvtChart$$.prototype.$highlight$;
D.$DvtChart$$.prototype.select = function $$DvtChart$$$$select$($selected_selection$$10$$) {
  this.$getOptions$().selection = D.$DvtJSONUtils$$.$clone$($selected_selection$$10$$);
  $selected_selection$$10$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this);
  D.$DvtChartEventUtils$$.$setInitialSelection$(this, $selected_selection$$10$$);
  this.$pieChart$ && this.$pieChart$.$setInitialSelection$()
};
D.$DvtChart$$.prototype.select = D.$DvtChart$$.prototype.select;
D.$DvtChart$$.prototype.$positionDataCursor$ = function $$DvtChart$$$$$positionDataCursor$$($paBounds$$1_position$$7$$) {
  var $handler$$4$$ = this.$getEventManager$().$_dataCursorHandler$;
  if($handler$$4$$) {
    if($paBounds$$1_position$$7$$) {
      var $paCoords_xCoord$$ = this.$xAxis$ && null != $paBounds$$1_position$$7$$.x ? this.$xAxis$.$getCoordAt$($paBounds$$1_position$$7$$.x) : null, $yCoord$$1$$ = null;
      D.$DvtChartTypeUtils$$.$isBLAC$(this) ? this.$yAxis$ && null != $paBounds$$1_position$$7$$.y ? $yCoord$$1$$ = this.$yAxis$.$getBoundedCoordAt$($paBounds$$1_position$$7$$.y) : this.$y2Axis$ && null != $paBounds$$1_position$$7$$.y2 && ($yCoord$$1$$ = this.$yAxis$.$getBoundedCoordAt$($paBounds$$1_position$$7$$.y2)) : $yCoord$$1$$ = this.$yAxis$ && null != $paBounds$$1_position$$7$$.y ? this.$yAxis$.$getCoordAt$($paBounds$$1_position$$7$$.y) : null;
      if(null != $paCoords_xCoord$$ && null != $yCoord$$1$$) {
        $paBounds$$1_position$$7$$ = this.$_plotAreaSpace$;
        $paCoords_xCoord$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$(this, new D.$DvtPoint$$($paCoords_xCoord$$, $yCoord$$1$$), $paBounds$$1_position$$7$$);
        (0,D.$JSCompiler_StaticMethods_processMove$$)($handler$$4$$, new D.$DvtPoint$$($paBounds$$1_position$$7$$.x + $paCoords_xCoord$$.x, $paBounds$$1_position$$7$$.y + $paCoords_xCoord$$.y), !0);
        return
      }
    }
    (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($handler$$4$$, !0)
  }
};
D.$DvtChart$$.prototype.positionDataCursor = D.$DvtChart$$.prototype.$positionDataCursor$;
D.$DvtChart$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_StaticMethods_getFromCachedMap2D$$ = function $$JSCompiler_StaticMethods_getFromCachedMap2D$$$($JSCompiler_StaticMethods_getFromCachedMap2D$self$$, $mapKey$$2$$, $itemKeyA$$, $itemKeyB$$) {
  var $map$$2$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$self$$.$Cache$[$mapKey$$2$$];
  $map$$2$$ || ($map$$2$$ = new D.$DvtMap2D$$, $JSCompiler_StaticMethods_getFromCachedMap2D$self$$.$Cache$[$mapKey$$2$$] = $map$$2$$);
  return $map$$2$$.get($itemKeyA$$, $itemKeyB$$)
};
D.$JSCompiler_StaticMethods_putToCachedMap2D$$ = function $$JSCompiler_StaticMethods_putToCachedMap2D$$$($JSCompiler_StaticMethods_putToCachedMap2D$self$$, $mapKey$$3$$, $itemKeyA$$1$$, $itemKeyB$$1$$, $value$$86$$) {
  var $map$$3$$ = $JSCompiler_StaticMethods_putToCachedMap2D$self$$.$Cache$[$mapKey$$3$$];
  $map$$3$$ || ($map$$3$$ = new D.$DvtMap2D$$, $JSCompiler_StaticMethods_putToCachedMap2D$self$$.$Cache$[$mapKey$$3$$] = $map$$3$$);
  $map$$3$$.put($itemKeyA$$1$$, $itemKeyB$$1$$, $value$$86$$)
};
D.$DvtChart$$.prototype.$processEvent$ = function $$DvtChart$$$$$processEvent$$($event$$103$$, $source$$9$$) {
  var $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ = $event$$103$$.$getType$();
  if($actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    this.filter($event$$103$$.$_category$, $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ ? "out" : "in")
  }else {
    if("categoryRollOver" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ || "categoryRollOut" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$) {
      this != $source$$9$$ && this.$highlight$($event$$103$$.categories), this.$legend$ && this.$legend$ != $source$$9$$ && this.$legend$.$processEvent$($event$$103$$, $source$$9$$)
    }else {
      if("selection" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$) {
        $event$$103$$ = this.$_processSelectionEvent$($event$$103$$)
      }else {
        if("dvtPanZoom" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$) {
          var $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$ = $event$$103$$, $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$ = $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$getSubtype$(), $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ = "dvtPanEndEvent" == $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$ || "dvtZoomEvent" == $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$ || 
          "dvtPinchEndEvent" == $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$, $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$ = "dvtPanStartEvent" == $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$ || "dvtPinchStartEvent" == $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$;
          (0,D.$DvtAgent$isTouchDevice$$)() && ($actionStart$$inline_1869_addedSet_subtype$$inline_1867$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
          D.$DvtChartEventUtils$$.$isLiveScroll$(this) ? ($bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$dxMin$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$dxMax$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$dyMin$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$dyMax$), 
          $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$ || ((0,D.$JSCompiler_StaticMethods__setViewport$$)(this, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$, $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$), (0,D.$JSCompiler_StaticMethods__setScrollbarViewport$$)(this, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$))) : ($bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$ = 
          D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$dxMinTotal$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$dxMaxTotal$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$dyMinTotal$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$dyMaxTotal$), (0,D.$JSCompiler_StaticMethods__setScrollbarViewport$$)(this, 
          $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$), $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ && (0,D.$JSCompiler_StaticMethods__setViewport$$)(this, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$, $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$));
          $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ && (D.$DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = null));
          $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ = $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ ? "viewportChange" : "viewportChangeInput";
          $event$$103$$ = D.$DvtChartTypeUtils$$.$isBLAC$(this) ? new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$xMin$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$xMax$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$startGroup$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$endGroup$, 
          null, null) : new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$xMin$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$xMax$, null, null, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$yMin$, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.$yMax$)
        }else {
          if("dvtMarquee" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$) {
            $event$$103$$ = (0,D.$JSCompiler_StaticMethods__processMarqueeEvent$$)(this, $event$$103$$)
          }else {
            if("overview" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$) {
              $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ = $event$$103$$.$getSubType$();
              if("dropCallback" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$) {
                return
              }
              $event$$103$$ = (0,D.$JSCompiler_StaticMethods__processScrollbarEvent$$)(this, $event$$103$$.$getParamValue$("newStartTime"), $event$$103$$.$getParamValue$("newEndTime"), "scrollTime" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ || "scrollEnd" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ || "rangeChange" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$, 
              $source$$9$$)
            }else {
              "dvtSimpleScrollbar" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ ? $event$$103$$ = (0,D.$JSCompiler_StaticMethods__processScrollbarEvent$$)(this, $event$$103$$.$_newMin$, $event$$103$$.$_newMax$, "dvtEndEvent" == $event$$103$$.$getSubtype$(), $source$$9$$) : "showPopup" == $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ && ($actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ = 
              $event$$103$$, "mouseHover" != $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$.triggerType && (this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) && ($bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$ = D.$DvtChartEventUtils$$.$processIds$(this, (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$getSelectionHandler$())), $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ = 
              new D.$DvtShowPopupEvent$$($actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$.$_showPopupBehavior$, $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$.$_launcherBounds$, $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$.$_launcherId$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$, 
              "clientRowKey", $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$)), $event$$103$$ = $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$)
            }
          }
        }
      }
    }
  }
  if($event$$103$$ instanceof D.$DvtChartSelectionEvent$$) {
    var $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$ = this.$getOptions$(), $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ = $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.selection, $newItems_removedSet$$ = D.$DvtChartDataUtils$$.$getCurrentSelection$(this);
    "selectionInput" != $event$$103$$.$getType$() && ($bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$.selection = $newItems_removedSet$$);
    var $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ = $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ ? $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$ : [], $newItems_removedSet$$ = $newItems_removedSet$$ ? $newItems_removedSet$$ : [], $newIndex$$2_oldIndex$$, $oldItemId_oldSet$$ = {};
    for($newIndex$$2_oldIndex$$ = 0;$newIndex$$2_oldIndex$$ < $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$.length;$newIndex$$2_oldIndex$$++) {
      $oldItemId_oldSet$$[$actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$[$newIndex$$2_oldIndex$$].id] = !0
    }
    $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$ = {};
    for($newIndex$$2_oldIndex$$ = 0;$newIndex$$2_oldIndex$$ < $newItems_removedSet$$.length;$newIndex$$2_oldIndex$$++) {
      $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$[$newItems_removedSet$$[$newIndex$$2_oldIndex$$].id] = !0
    }
    $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$ = {};
    for($newIndex$$2_oldIndex$$ = 0;$newIndex$$2_oldIndex$$ < $newItems_removedSet$$.length;$newIndex$$2_oldIndex$$++) {
      var $newItemId$$ = $newItems_removedSet$$[$newIndex$$2_oldIndex$$].id;
      $oldItemId_oldSet$$[$newItemId$$] || ($actionStart$$inline_1869_addedSet_subtype$$inline_1867$$[$newItemId$$] = !0)
    }
    $newItems_removedSet$$ = {};
    for($newIndex$$2_oldIndex$$ = 0;$newIndex$$2_oldIndex$$ < $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$.length;$newIndex$$2_oldIndex$$++) {
      $oldItemId_oldSet$$ = $actionDone$$inline_1868_event$$inline_1874_eventType$$inline_1871_oldItems_subtype_type$$61$$[$newIndex$$2_oldIndex$$].id, $bounds$$inline_1870_event$$inline_1866_newSet_options$$32_selection$$inline_1875$$[$oldItemId_oldSet$$] || ($newItems_removedSet$$[$oldItemId_oldSet$$] = !0)
    }
    $event$$103$$.addedSet = $actionStart$$inline_1869_addedSet_subtype$$inline_1867$$;
    $event$$103$$.removedSet = $newItems_removedSet$$
  }
  $event$$103$$ && this.dispatchEvent($event$$103$$)
};
D.$DvtChart$$.prototype.$_processSelectionEvent$ = function $$DvtChart$$$$$_processSelectionEvent$$($event$$104_selection$$11$$) {
  $event$$104_selection$$11$$ = D.$DvtChartEventUtils$$.$processIds$(this, $event$$104_selection$$11$$.getSelection());
  (0,D.$JSCompiler_StaticMethods__updateOverviewSelection$$)(this);
  return new D.$DvtChartSelectionEvent$$($event$$104_selection$$11$$, "selection")
};
D.$JSCompiler_StaticMethods__processMarqueeEvent$$ = function $$JSCompiler_StaticMethods__processMarqueeEvent$$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$106$$) {
  var $subtype$$2$$ = $event$$106$$.$getSubtype$(), $bounds$$6_em_selectionEvent_selectionHandler$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$EventManager$;
  D.$DvtChartEventUtils$$.$adjustBounds$($event$$106$$);
  if("select" == $bounds$$6_em_selectionEvent_selectionHandler$$.$_dragMode$) {
    $bounds$$6_em_selectionEvent_selectionHandler$$ = $bounds$$6_em_selectionEvent_selectionHandler$$.$getSelectionHandler$();
    if("dvtMarqueeStartEvent" == $subtype$$2$$) {
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$ = $event$$106$$.ctrlKey ? (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($bounds$$6_em_selectionEvent_selectionHandler$$) : []
    }else {
      var $selection$$12_targets$$ = D.$DvtChartEventUtils$$.$getBoundedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$106$$);
      (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($bounds$$6_em_selectionEvent_selectionHandler$$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$, (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$));
      for(var $target$$inline_1880$$, $i$$inline_1881$$ = 0;$i$$inline_1881$$ < $selection$$12_targets$$.length;$i$$inline_1881$$++) {
        $target$$inline_1880$$ = $selection$$12_targets$$[$i$$inline_1881$$], (!$target$$inline_1880$$ || !$target$$inline_1880$$.$isUnrelatedToSelection$) && (0,D.$JSCompiler_StaticMethods__addToSelection$$)($bounds$$6_em_selectionEvent_selectionHandler$$, $target$$inline_1880$$, !0)
      }
    }
    $selection$$12_targets$$ = D.$DvtChartEventUtils$$.$getSelectedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$106$$, $bounds$$6_em_selectionEvent_selectionHandler$$);
    $bounds$$6_em_selectionEvent_selectionHandler$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$106$$, !1);
    $bounds$$6_em_selectionEvent_selectionHandler$$ = new D.$DvtChartSelectionEvent$$($selection$$12_targets$$, "dvtMarqueeEndEvent" == $subtype$$2$$ ? "selection" : "selectionInput", $bounds$$6_em_selectionEvent_selectionHandler$$.$xMin$, $bounds$$6_em_selectionEvent_selectionHandler$$.$xMax$, $bounds$$6_em_selectionEvent_selectionHandler$$.$startGroup$, $bounds$$6_em_selectionEvent_selectionHandler$$.$endGroup$, $bounds$$6_em_selectionEvent_selectionHandler$$.$yMin$, $bounds$$6_em_selectionEvent_selectionHandler$$.$yMax$, 
    $bounds$$6_em_selectionEvent_selectionHandler$$.$y2Min$, $bounds$$6_em_selectionEvent_selectionHandler$$.$y2Max$);
    "dvtMarqueeEndEvent" == $subtype$$2$$ && (0,D.$JSCompiler_StaticMethods__updateOverviewSelection$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
    return $bounds$$6_em_selectionEvent_selectionHandler$$
  }
  if("zoom" == $bounds$$6_em_selectionEvent_selectionHandler$$.$_dragMode$) {
    if("dvtMarqueeEndEvent" != $subtype$$2$$) {
      return null
    }
    $bounds$$6_em_selectionEvent_selectionHandler$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$106$$, !0);
    (0,D.$JSCompiler_StaticMethods__setViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$6_em_selectionEvent_selectionHandler$$, !0);
    (0,D.$JSCompiler_StaticMethods__setScrollbarViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$6_em_selectionEvent_selectionHandler$$);
    D.$DvtChartRenderer$$.$_setEventHandlers$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
    return D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__processMarqueeEvent$self$$) ? new D.$DvtChartViewportChangeEvent$$("viewportChange", $bounds$$6_em_selectionEvent_selectionHandler$$.$xMin$, $bounds$$6_em_selectionEvent_selectionHandler$$.$xMax$, $bounds$$6_em_selectionEvent_selectionHandler$$.$startGroup$, $bounds$$6_em_selectionEvent_selectionHandler$$.$endGroup$, null, null) : new D.$DvtChartViewportChangeEvent$$("viewportChange", $bounds$$6_em_selectionEvent_selectionHandler$$.$xMin$, 
    $bounds$$6_em_selectionEvent_selectionHandler$$.$xMax$, null, null, $bounds$$6_em_selectionEvent_selectionHandler$$.$yMin$, $bounds$$6_em_selectionEvent_selectionHandler$$.$yMax$)
  }
  return null
};
D.$JSCompiler_StaticMethods__processScrollbarEvent$$ = function $$JSCompiler_StaticMethods__processScrollbarEvent$$$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, $start$$24$$, $end$$10$$, $actionDone$$2_eventType$$7$$, $source$$10$$) {
  var $axis$$64$$ = $source$$10$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$ ? $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yAxis$ : $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$xAxis$;
  $start$$24$$ = $axis$$64$$.$linearToActual$($start$$24$$);
  $end$$10$$ = $axis$$64$$.$linearToActual$($end$$10$$);
  if(D.$DvtChartEventUtils$$.$isLiveScroll$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$) || $actionDone$$2_eventType$$7$$) {
    $source$$10$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$ ? (0,D.$JSCompiler_StaticMethods__setViewport$$)($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, {$yMin$:$start$$24$$, $yMax$:$end$$10$$}, $actionDone$$2_eventType$$7$$) : (0,D.$JSCompiler_StaticMethods__setViewport$$)($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, {$xMin$:$start$$24$$, $xMax$:$end$$10$$}, $actionDone$$2_eventType$$7$$)
  }
  $actionDone$$2_eventType$$7$$ = $actionDone$$2_eventType$$7$$ ? "viewportChange" : "viewportChangeInput";
  if($source$$10$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$) {
    return new D.$DvtChartViewportChangeEvent$$($actionDone$$2_eventType$$7$$, null, null, null, null, $start$$24$$, $end$$10$$)
  }
  $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$xAxis$, $start$$24$$, $end$$10$$);
  return new D.$DvtChartViewportChangeEvent$$($actionDone$$2_eventType$$7$$, $start$$24$$, $end$$10$$, $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$startGroup$, $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$endGroup$, null, null)
};
D.$JSCompiler_StaticMethods__updateOverviewSelection$$ = function $$JSCompiler_StaticMethods__updateOverviewSelection$$$($JSCompiler_StaticMethods__updateOverviewSelection$self$$) {
  if($JSCompiler_StaticMethods__updateOverviewSelection$self$$.$overview$) {
    var $ovChart$$ = $JSCompiler_StaticMethods__updateOverviewSelection$self$$.$overview$.$_chart$;
    $ovChart$$.$getOptions$().selection = D.$DvtChartDataUtils$$.$getCurrentSelection$($JSCompiler_StaticMethods__updateOverviewSelection$self$$);
    $ovChart$$.$render$()
  }
};
D.$JSCompiler_StaticMethods_changeOption$$ = function $$JSCompiler_StaticMethods_changeOption$$$($JSCompiler_StaticMethods_changeOption$self$$, $value$$87$$) {
  $JSCompiler_StaticMethods_changeOption$self$$.$getOptions$().dataCursorPosition = $value$$87$$;
  $JSCompiler_StaticMethods_changeOption$self$$.dispatchEvent(new D.$DvtOptionChangeEvent$$("dataCursorPosition", $value$$87$$, void 0))
};
D.$DvtChart$$.prototype.$registerObject$ = function $$DvtChart$$$$$registerObject$$($peer$$1$$) {
  this.$Peers$.push($peer$$1$$)
};
D.$DvtChart$$.prototype.$getObjects$ = (0,D.$JSCompiler_get$$)("$Peers$");
D.$JSCompiler_StaticMethods_getChartObjPeers$$ = function $$JSCompiler_StaticMethods_getChartObjPeers$$$($JSCompiler_StaticMethods_getChartObjPeers$self$$) {
  for(var $chartObjPeers$$ = [], $i$$132$$ = 0;$i$$132$$ < $JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$.length;$i$$132$$++) {
    $JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$[$i$$132$$] instanceof D.$DvtChartObjPeer$$ && $chartObjPeers$$.push($JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$[$i$$132$$])
  }
  return $chartObjPeers$$
};
D.$JSCompiler_StaticMethods_getObject$$ = function $$JSCompiler_StaticMethods_getObject$$$($JSCompiler_StaticMethods_getObject$self$$, $seriesIndex$$, $groupIndex$$2$$) {
  for(var $i$$134$$ = 0;$i$$134$$ < $JSCompiler_StaticMethods_getObject$self$$.$Peers$.length;$i$$134$$++) {
    if($JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$134$$] instanceof D.$DvtChartObjPeer$$ && $JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$134$$].$getSeriesIndex$() == $seriesIndex$$ && $JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$134$$].$getGroupIndex$() == $groupIndex$$2$$) {
      return $JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$134$$]
    }
  }
  return null
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getPlotArea$ = (0,D.$JSCompiler_get$$)("$_plotArea$");
D.$JSCompiler_prototypeAlias$$.$getType$ = function $$JSCompiler_prototypeAlias$$$$getType$$() {
  return this.$getOptions$().type
};
D.$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$getOptions$().skin
};
D.$JSCompiler_StaticMethods_getGapWidthRatio$$ = function $$JSCompiler_StaticMethods_getGapWidthRatio$$$($JSCompiler_StaticMethods_getGapWidthRatio$self$$) {
  var $options$$33$$ = $JSCompiler_StaticMethods_getGapWidthRatio$self$$.$getOptions$();
  return null !== $options$$33$$.layout.gapWidthRatio && !(0,window.isNaN)($options$$33$$.layout.gapWidthRatio) ? $options$$33$$.layout.gapWidthRatio : window.Math.min($JSCompiler_StaticMethods_getGapWidthRatio$self$$.$Width$ / 400, 1)
};
D.$JSCompiler_StaticMethods_getGapHeightRatio$$ = function $$JSCompiler_StaticMethods_getGapHeightRatio$$$($JSCompiler_StaticMethods_getGapHeightRatio$self$$) {
  var $options$$34$$ = $JSCompiler_StaticMethods_getGapHeightRatio$self$$.$getOptions$();
  return null !== $options$$34$$.layout.gapHeightRatio && !(0,window.isNaN)($options$$34$$.layout.gapHeightRatio) ? $options$$34$$.layout.gapHeightRatio : window.Math.min($JSCompiler_StaticMethods_getGapHeightRatio$self$$.$Height$ / 300, 1)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? !0 : !1
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$1$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$1$$] : null
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($detObj$$) {
  var $par$$ = $detObj$$.getParent();
  if($par$$) {
    var $parentChildCount$$ = $par$$.$getNumChildren$();
    1 < $parentChildCount$$ - this.$_numFrontObjs$ && ($par$$.removeChild($detObj$$), $par$$.$addChildAt$($detObj$$, $parentChildCount$$ - this.$_numFrontObjs$ - 1))
  }
  (!$detObj$$.$isSelected$() || !$detObj$$.$IsShowingHoverEffect$) && this.$_numSelectedObjsInFront$++
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($detObj$$1$$) {
  0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
  var $par$$1$$ = $detObj$$1$$.getParent();
  if($par$$1$$) {
    var $newIndex$$4$$ = $par$$1$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
    0 <= $newIndex$$4$$ && ($par$$1$$.removeChild($detObj$$1$$), $par$$1$$.$addChildAt$($detObj$$1$$, $newIndex$$4$$))
  }
};
D.$JSCompiler_StaticMethods__setViewport$$ = function $$JSCompiler_StaticMethods__setViewport$$$($JSCompiler_StaticMethods__setViewport$self$$, $bounds$$7$$, $actionDone$$3$$) {
  null != $bounds$$7$$.$xMax$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportMax = $bounds$$7$$.$xMax$);
  null != $bounds$$7$$.$xMin$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportMin = $bounds$$7$$.$xMin$);
  D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__setViewport$self$$) ? ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportStartGroup = null, $JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportEndGroup = null, $JSCompiler_StaticMethods__setViewport$self$$.$Options$._initialZoomed = !1) : (null != $bounds$$7$$.$yMax$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.yAxis.viewportMax = $bounds$$7$$.$yMax$), null != $bounds$$7$$.$yMin$ && 
  ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.yAxis.viewportMin = $bounds$$7$$.$yMin$));
  $JSCompiler_StaticMethods__setViewport$self$$.$Options$._duringAnimation = !$actionDone$$3$$;
  D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$($JSCompiler_StaticMethods__setViewport$self$$, $JSCompiler_StaticMethods__setViewport$self$$.$_container$)
};
D.$JSCompiler_StaticMethods__setScrollbarViewport$$ = function $$JSCompiler_StaticMethods__setScrollbarViewport$$$($JSCompiler_StaticMethods__setScrollbarViewport$self$$, $bounds$$8$$) {
  if($JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$ && null != $bounds$$8$$.$xMin$ && null != $bounds$$8$$.$xMax$) {
    var $xMin_yMin$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$.$actualToLinear$($bounds$$8$$.$xMin$), $xMax_yMax$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$.$actualToLinear$($bounds$$8$$.$xMax$);
    $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$overview$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$overview$.$setViewportRange$($xMin_yMin$$, $xMax_yMax$$);
    $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xScrollbar$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xScrollbar$.$setViewportRange$($xMin_yMin$$, $xMax_yMax$$)
  }
  $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$ && (null != $bounds$$8$$.$yMin$ && null != $bounds$$8$$.$yMax$) && ($xMin_yMin$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$.$actualToLinear$($bounds$$8$$.$yMin$), $xMax_yMax$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$.$actualToLinear$($bounds$$8$$.$yMax$), $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yScrollbar$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yScrollbar$.$setViewportRange$($xMin_yMin$$, 
  $xMax_yMax$$))
};
D.$DvtChart$$.prototype.$getRadius$ = (0,D.$JSCompiler_get$$)("$_radius$");
D.$JSCompiler_StaticMethods_getDataLabels$$ = function $$JSCompiler_StaticMethods_getDataLabels$$$($JSCompiler_StaticMethods_getDataLabels$self$$) {
  $JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$ || ($JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$ = []);
  return $JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$
};
D.$JSCompiler_StaticMethods___cacheChartFocus$$ = function $$JSCompiler_StaticMethods___cacheChartFocus$$$($JSCompiler_StaticMethods___cacheChartFocus$self$$) {
  var $chartFocus$$ = $JSCompiler_StaticMethods___cacheChartFocus$self$$.$EventManager$.$getFocus$();
  if($chartFocus$$) {
    var $chartShowingFocusEffect$$ = $chartFocus$$.$isShowingKeyboardFocusEffect$()
  }
  if($JSCompiler_StaticMethods___cacheChartFocus$self$$.$xAxis$) {
    var $axisFocus$$ = $JSCompiler_StaticMethods___cacheChartFocus$self$$.$xAxis$.$getKeyboardFocus$();
    if($axisFocus$$) {
      var $axisShowingFocusEffect$$ = $axisFocus$$.$isShowingKeyboardFocusEffect$()
    }
  }
  if($JSCompiler_StaticMethods___cacheChartFocus$self$$.$legend$) {
    var $legendFocus$$ = $JSCompiler_StaticMethods___cacheChartFocus$self$$.$legend$.$getKeyboardFocus$();
    if($legendFocus$$) {
      var $legendShowingFocusEffect$$ = $legendFocus$$.$isShowingKeyboardFocusEffect$()
    }
  }
  return{$chartFocus$:$chartFocus$$, $chartShowingFocusEffect$:$chartShowingFocusEffect$$, $axisFocus$:$axisFocus$$, $axisShowingFocusEffect$:$axisShowingFocusEffect$$, $legendFocus$:$legendFocus$$, $legendShowingFocusEffect$:$legendShowingFocusEffect$$}
};
D.$JSCompiler_StaticMethods___restoreChartFocus$$ = function $$JSCompiler_StaticMethods___restoreChartFocus$$$($JSCompiler_StaticMethods___restoreChartFocus$self$$, $focusState$$1$$) {
  if(!D.$DvtChartTypeUtils$$.$isOverview$($JSCompiler_StaticMethods___restoreChartFocus$self$$) && !D.$DvtChartTypeUtils$$.$isSpark$($JSCompiler_StaticMethods___restoreChartFocus$self$$)) {
    var $keyboardArray_navigables$$2$$ = [$JSCompiler_StaticMethods___restoreChartFocus$self$$];
    $JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$ && $JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$.$isNavigable$() && $keyboardArray_navigables$$2$$.push($JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$);
    $JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$ && $JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$.$isNavigable$() && $keyboardArray_navigables$$2$$.push($JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$);
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)($JSCompiler_StaticMethods___restoreChartFocus$self$$.$getCtx$(), $keyboardArray_navigables$$2$$);
    if($focusState$$1$$.$chartFocus$) {
      for(var $keyboardArray_navigables$$2$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$($JSCompiler_StaticMethods___restoreChartFocus$self$$), $matchFound$$1$$ = !1, $i$$136$$ = 0;$i$$136$$ < $keyboardArray_navigables$$2$$.length;$i$$136$$++) {
        var $id$$23$$ = $keyboardArray_navigables$$2$$[$i$$136$$].getId();
        if($id$$23$$ instanceof D.$DvtChartDataItem$$ && $id$$23$$.$equals$($focusState$$1$$.$chartFocus$.getId())) {
          (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($JSCompiler_StaticMethods___restoreChartFocus$self$$.$EventManager$, $keyboardArray_navigables$$2$$[$i$$136$$]);
          $focusState$$1$$.$chartShowingFocusEffect$ && $keyboardArray_navigables$$2$$[$i$$136$$].$showKeyboardFocusEffect$();
          $matchFound$$1$$ = !0;
          break
        }
      }
      $matchFound$$1$$ || (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($JSCompiler_StaticMethods___restoreChartFocus$self$$.$EventManager$, $JSCompiler_StaticMethods___restoreChartFocus$self$$.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($keyboardArray_navigables$$2$$))
    }
    $focusState$$1$$.$axisFocus$ && ($JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$.$setKeyboardFocus$($focusState$$1$$.$axisFocus$, $focusState$$1$$.$axisShowingFocusEffect$), $focusState$$1$$.$axisShowingFocusEffect$ && (0,D.$JSCompiler_StaticMethods_setCurrentKeyboardFocus$$)($JSCompiler_StaticMethods___restoreChartFocus$self$$.$getCtx$(), $JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$));
    $focusState$$1$$.$legendFocus$ && ($JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$.$setKeyboardFocus$($focusState$$1$$.$legendFocus$, $focusState$$1$$.$legendShowingFocusEffect$), $focusState$$1$$.$legendShowingFocusEffect$ && (0,D.$JSCompiler_StaticMethods_setCurrentKeyboardFocus$$)($JSCompiler_StaticMethods___restoreChartFocus$self$$.$getCtx$(), $JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$))
  }
};
D.$DvtChart$$.prototype.$processActiveDataChanges$ = function $$DvtChart$$$$$processActiveDataChanges$$($changes$$) {
  for(var $optionsOld$$ = D.$DvtJSONUtils$$.$clone$(this.$Options$), $optionsNew$$ = this.$Options$, $changeIndex$$ = 0;$changeIndex$$ < $changes$$.length;$changeIndex$$++) {
    var $entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$ = $changes$$[$changeIndex$$], $data$$inline_9760_data$$inline_9767_type$$inline_2098$$ = $entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.type;
    if("u" == $data$$inline_9760_data$$inline_9767_type$$inline_2098$$) {
      for(var $data$$inline_9760_data$$inline_9767_type$$inline_2098$$ = $entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.data, $i$$inline_9761_i$$inline_9768$$ = 0;$i$$inline_9761_i$$inline_9768$$ < $data$$inline_9760_data$$inline_9767_type$$inline_2098$$.length;$i$$inline_9761_i$$inline_9768$$++) {
        var $dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)(this, $entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.id, $data$$inline_9760_data$$inline_9767_type$$inline_2098$$[$i$$inline_9761_i$$inline_9768$$]._id);
        if($dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$) {
          for(var $key$$inline_9763$$ in $data$$inline_9760_data$$inline_9767_type$$inline_2098$$[$i$$inline_9761_i$$inline_9768$$]) {
            "_id" != $key$$inline_9763$$ && ($dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$.item[$key$$inline_9763$$] = $data$$inline_9760_data$$inline_9767_type$$inline_2098$$[$i$$inline_9761_i$$inline_9768$$][$key$$inline_9763$$])
          }
        }
      }
    }else {
      if("ia" == $data$$inline_9760_data$$inline_9767_type$$inline_2098$$ || "ib" == $data$$inline_9760_data$$inline_9767_type$$inline_2098$$) {
        $data$$inline_9760_data$$inline_9767_type$$inline_2098$$ = $entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.data;
        for($i$$inline_9761_i$$inline_9768$$ = 0;$i$$inline_9761_i$$inline_9768$$ < $data$$inline_9760_data$$inline_9767_type$$inline_2098$$.length;$i$$inline_9761_i$$inline_9768$$++) {
          this.$Cache$ = {};
          var $insertId$$inline_9769$$ = $entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.insertId, $dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$ = $data$$inline_9760_data$$inline_9767_type$$inline_2098$$[$i$$inline_9761_i$$inline_9768$$].group, $insertedSeries$$inline_9771_seriesItems$$inline_9776$$ = $data$$inline_9760_data$$inline_9767_type$$inline_2098$$[$i$$inline_9761_i$$inline_9768$$].series, $seriesCount$$inline_9772$$ = D.$DvtChartDataUtils$$.$getSeriesCount$(this), 
          $groupCount$$inline_9773_seriesIndex$$inline_9779$$ = D.$DvtChartDataUtils$$.$getGroupCount$(this), $insertedSeriesIndex$$inline_9774$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$(this, $insertedSeries$$inline_9771_seriesItems$$inline_9776$$), $dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$ = D.$DvtChartDataUtils$$.$getGroupIndex$(this, $dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$);
          if(0 <= $insertedSeriesIndex$$inline_9774$$ && 0 <= $dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$) {
            $insertedSeries$$inline_9771_seriesItems$$inline_9776$$ = D.$DvtChartDataUtils$$.$getSeriesItem$(this, $insertedSeriesIndex$$inline_9774$$).items, $insertedSeries$$inline_9771_seriesItems$$inline_9776$$[$dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$] = {id:$entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.id}, (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_9760_data$$inline_9767_type$$inline_2098$$[$i$$inline_9761_i$$inline_9768$$], $insertedSeries$$inline_9771_seriesItems$$inline_9776$$[$dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$])
          }else {
            if(0 <= $dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$) {
              $dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$ = (0,window.Array)($groupCount$$inline_9773_seriesIndex$$inline_9779$$), $dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$[$dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$] = {id:$entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.id}, (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_9760_data$$inline_9767_type$$inline_2098$$[$i$$inline_9761_i$$inline_9768$$], 
              $dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$[$dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$]), this.$Options$.series.push({name:$insertedSeries$$inline_9771_seriesItems$$inline_9776$$, items:$dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$})
            }else {
              $dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$ = ($dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)(this, $insertId$$inline_9769$$)) ? "ia" == $entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.type ? $dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$.$groupIndex$ + 1 : $dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$.$groupIndex$ : 0;
              0 > $insertedSeriesIndex$$inline_9774$$ && (this.$Options$.series.push({name:$insertedSeries$$inline_9771_seriesItems$$inline_9776$$, items:(0,window.Array)($groupCount$$inline_9773_seriesIndex$$inline_9779$$)}), $insertedSeriesIndex$$inline_9774$$ = $seriesCount$$inline_9772$$, $seriesCount$$inline_9772$$++);
              for($groupCount$$inline_9773_seriesIndex$$inline_9779$$ = 0;$groupCount$$inline_9773_seriesIndex$$inline_9779$$ < $seriesCount$$inline_9772$$;$groupCount$$inline_9773_seriesIndex$$inline_9779$$++) {
                $insertedSeries$$inline_9771_seriesItems$$inline_9776$$ = D.$DvtChartDataUtils$$.$getSeriesItem$(this, $groupCount$$inline_9773_seriesIndex$$inline_9779$$).items, $insertedSeries$$inline_9771_seriesItems$$inline_9776$$.splice($dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$, 0, {id:$entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$.id}), $groupCount$$inline_9773_seriesIndex$$inline_9779$$ == $insertedSeriesIndex$$inline_9774$$ && (0,D.$DvtChart$_copyActiveDataProperties$$)($data$$inline_9760_data$$inline_9767_type$$inline_2098$$[$i$$inline_9761_i$$inline_9768$$], 
                $insertedSeries$$inline_9771_seriesItems$$inline_9776$$[$dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$])
              }
              this.$Options$.groups.splice($dataItemInfo$$inline_9778_insertedGroupIndex$$inline_9775$$, 0, $dataItemInfo$$inline_9762_insertedGroup$$inline_9770_items$$inline_9777$$)
            }
          }
        }
      }else {
        "d" == $data$$inline_9760_data$$inline_9767_type$$inline_2098$$ && (0,D.$JSCompiler_StaticMethods__processActiveDataDelete$$)(this, $entry$$inline_2097_entry$$inline_9759_entry$$inline_9766$$)
      }
    }
  }
  this.$Options$ = $optionsOld$$;
  this.$render$($optionsNew$$)
};
D.$DvtChart$$.prototype.processActiveDataChanges = D.$DvtChart$$.prototype.$processActiveDataChanges$;
D.$JSCompiler_StaticMethods__processActiveDataDelete$$ = function $$JSCompiler_StaticMethods__processActiveDataDelete$$$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$3$$) {
  $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Cache$ = {};
  var $dataItemInfo$$2$$ = (0,D.$JSCompiler_StaticMethods__findDataItemById$$)($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$3$$.id);
  if($dataItemInfo$$2$$) {
    for(var $dataItem$$3_key$$51$$ in $dataItemInfo$$2$$.item) {
      $dataItemInfo$$2$$.item[$dataItem$$3_key$$51$$] = null
    }
    $dataItemInfo$$2$$.item._deleted = !0;
    for(var $seriesCount$$3$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__processActiveDataDelete$self$$), $groupCount$$2$$ = D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__processActiveDataDelete$self$$), $bDeleteGroup$$ = !0, $groupIndex$$9_seriesIndex$$14$$ = 0;$groupIndex$$9_seriesIndex$$14$$ < $seriesCount$$3$$;$groupIndex$$9_seriesIndex$$14$$++) {
      if(($dataItem$$3_key$$51$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $groupIndex$$9_seriesIndex$$14$$, $dataItemInfo$$2$$.$groupIndex$)) && !$dataItem$$3_key$$51$$._deleted) {
        $bDeleteGroup$$ = !1;
        break
      }
    }
    for(var $bDeleteSeries$$ = !0, $groupIndex$$9_seriesIndex$$14$$ = 0;$groupIndex$$9_seriesIndex$$14$$ < $groupCount$$2$$;$groupIndex$$9_seriesIndex$$14$$++) {
      if(($dataItem$$3_key$$51$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $dataItemInfo$$2$$.$seriesIndex$, $groupIndex$$9_seriesIndex$$14$$)) && !$dataItem$$3_key$$51$$._deleted) {
        $bDeleteSeries$$ = !1;
        break
      }
    }
    if($bDeleteGroup$$) {
      for($groupIndex$$9_seriesIndex$$14$$ = 0;$groupIndex$$9_seriesIndex$$14$$ < $seriesCount$$3$$;$groupIndex$$9_seriesIndex$$14$$++) {
        D.$DvtChartDataUtils$$.$getSeriesItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $groupIndex$$9_seriesIndex$$14$$).$items$.splice($dataItemInfo$$2$$.$groupIndex$, 1)
      }
      $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Options$.groups.splice($dataItemInfo$$2$$.$groupIndex$, 1)
    }
    $bDeleteSeries$$ && $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Options$.series.splice($dataItemInfo$$2$$.$seriesIndex$, 1);
    (0,D.$JSCompiler_StaticMethods__processActiveDataDelete$$)($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$3$$)
  }
};
D.$DvtChart$_copyActiveDataProperties$$ = function $$DvtChart$_copyActiveDataProperties$$$($entry$$4$$, $item$$1$$) {
  for(var $key$$52$$ in $entry$$4$$) {
    $item$$1$$[$key$$52$$] = $entry$$4$$[$key$$52$$]
  }
};
D.$JSCompiler_StaticMethods__findDataItemById$$ = function $$JSCompiler_StaticMethods__findDataItemById$$$($JSCompiler_StaticMethods__findDataItemById$self$$, $id$$28$$, $stampId$$2$$) {
  if(null == $id$$28$$) {
    return null
  }
  for(var $seriesCount$$4$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__findDataItemById$self$$), $groupCount$$3$$ = D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__findDataItemById$self$$), $seriesIndex$$15$$ = 0;$seriesIndex$$15$$ < $seriesCount$$4$$;$seriesIndex$$15$$++) {
    for(var $groupIndex$$10$$ = 0;$groupIndex$$10$$ < $groupCount$$3$$;$groupIndex$$10$$++) {
      var $dataItem$$4$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__findDataItemById$self$$, $seriesIndex$$15$$, $groupIndex$$10$$);
      if(null != $dataItem$$4$$ && $dataItem$$4$$.id === $id$$28$$ && (null == $stampId$$2$$ || $stampId$$2$$ === $dataItem$$4$$._id)) {
        return{item:$dataItem$$4$$, $seriesIndex$:$seriesIndex$$15$$, $groupIndex$:$groupIndex$$10$$}
      }
    }
  }
  return null
};
D.$DvtChartSelectionEvent$$ = function $$DvtChartSelectionEvent$$$($selection$$14$$, $type$$64$$, $xMin$$1$$, $xMax$$1$$, $startGroup$$, $endGroup$$, $yMin$$1$$, $yMax$$1$$, $y2Min$$, $y2Max$$) {
  D.$DvtChartSelectionEvent$$.$superclass$.Init.call(this, $selection$$14$$, $type$$64$$);
  this.$_xMin$ = $xMin$$1$$;
  this.$_xMax$ = $xMax$$1$$;
  this.$_startGroup$ = $startGroup$$;
  this.$_endGroup$ = $endGroup$$;
  this.$_yMin$ = $yMin$$1$$;
  this.$_yMax$ = $yMax$$1$$;
  this.$_y2Min$ = $y2Min$$;
  this.$_y2Max$ = $y2Max$$;
  this.$removedSet$ = this.$addedSet$ = null
};
(0,D.$goog$exportPath_$$)("DvtChartSelectionEvent", D.$DvtChartSelectionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartSelectionEvent$$, D.$DvtSelectionEvent$$, "DvtChartSelectionEvent");
D.$DvtChartSelectionEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartSelectionEvent$$.prototype.getXMin = D.$DvtChartSelectionEvent$$.prototype.$getXMin$;
D.$DvtChartSelectionEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartSelectionEvent$$.prototype.getXMax = D.$DvtChartSelectionEvent$$.prototype.$getXMax$;
D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartSelectionEvent$$.prototype.getStartGroup = D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartSelectionEvent$$.prototype.getEndGroup = D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartSelectionEvent$$.prototype.getYMin = D.$DvtChartSelectionEvent$$.prototype.$getYMin$;
D.$DvtChartSelectionEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartSelectionEvent$$.prototype.getYMax = D.$DvtChartSelectionEvent$$.prototype.$getYMax$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Min$ = (0,D.$JSCompiler_get$$)("$_y2Min$");
D.$DvtChartSelectionEvent$$.prototype.getY2Min = D.$DvtChartSelectionEvent$$.prototype.$getY2Min$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Max$ = (0,D.$JSCompiler_get$$)("$_y2Max$");
D.$DvtChartSelectionEvent$$.prototype.getY2Max = D.$DvtChartSelectionEvent$$.prototype.$getY2Max$;
D.$DvtChartViewportChangeEvent$$ = function $$DvtChartViewportChangeEvent$$$($type$$65$$, $xMin$$2$$, $xMax$$2$$, $startGroup$$1$$, $endGroup$$1$$, $yMin$$2$$, $yMax$$2$$) {
  D.$DvtChartViewportChangeEvent$$.$superclass$.Init.call(this, $type$$65$$);
  this.$_xMin$ = $xMin$$2$$;
  this.$_xMax$ = $xMax$$2$$;
  this.$_startGroup$ = $startGroup$$1$$;
  this.$_endGroup$ = $endGroup$$1$$;
  this.$_yMin$ = $yMin$$2$$;
  this.$_yMax$ = $yMax$$2$$
};
(0,D.$goog$exportPath_$$)("DvtChartViewportChangeEvent", D.$DvtChartViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtChartViewportChangeEvent");
D.$DvtChartViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtChartViewportChangeEvent$$.TYPE_INPUT = "viewportChangeInput";
D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMin = D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMax = D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$;
D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getStartGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getEndGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMin = D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMax = D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$;
D.$DvtChartAutomation$$ = function $$DvtChartAutomation$$$($dvtComponent$$1$$) {
  this.$_chart$ = $dvtComponent$$1$$;
  this.$_options$ = this.$_chart$.$getOptions$();
  this.$_legend$ = this.$_chart$.$legend$;
  this.$_xAxis$ = this.$_chart$.$xAxis$;
  this.$_yAxis$ = this.$_chart$.$yAxis$;
  this.$_y2Axis$ = this.$_chart$.$y2Axis$;
  this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : null;
  this.$_xAxisAutomation$ = this.$_xAxis$ ? this.$_xAxis$.$getAutomation$() : null;
  this.$_yAxisAutomation$ = this.$_yAxis$ ? this.$_yAxis$.$getAutomation$() : null;
  this.$_y2AxisAutomation$ = this.$_y2Axis$ ? this.$_y2Axis$.$getAutomation$() : null
};
(0,D.$goog$exportPath_$$)("DvtChartAutomation", D.$DvtChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartAutomation$$, D.$DvtAutomation$$, "DvtChartAutomation");
D.$DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$) {
  var $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ = null;
  if($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$isDescendantOf$(this.$_xAxis$)) {
    return $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ = this.$_xAxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$), (0,D.$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$)($axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$, "xAxis")
  }
  if($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$isDescendantOf$(this.$_yAxis$)) {
    return $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ = this.$_yAxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$), (0,D.$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$)($axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$, "yAxis")
  }
  if($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$isDescendantOf$(this.$_y2Axis$)) {
    return $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ = this.$_y2AxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$), (0,D.$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$)($axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$, "y2Axis")
  }
  if($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$isDescendantOf$(this.$_legend$)) {
    a: {
      if($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$), $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ = this.$_legend$.$getOptions$(), $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this.$_legendAutomation$, 
      $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$, $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$)) {
        for(var $s$$inline_1887$$ = 0;$s$$inline_1887$$ < this.$_options$.series.length;$s$$inline_1887$$++) {
          if(this.$_options$.series[$s$$inline_1887$$].name == $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$.text) {
            $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ = "series[" + $s$$inline_1887$$ + "]";
            break a
          }
        }
        $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ = "legend:" + $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$
      }else {
        $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ = null
      }
    }
    return $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$
  }
  if(($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_chart$.$getEventManager$(), $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$)) && "pie" == this.$_options$.type) {
    return"dataItem[" + $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$getSeriesIndex$() + "]"
  }
  if($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ instanceof D.$DvtChartObjPeer$$) {
    $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ = $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$getSeriesIndex$();
    $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ = $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$getGroupIndex$();
    if(null != $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ && 0 <= $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ && "funnel" != this.$_options$.type) {
      return"dataItem[" + $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ + "][" + $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ + "]"
    }
    if(null != $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ && $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ == D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
      return"dataItem[" + $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ + "]"
    }
    if(null != $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ && (null == $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ || 0 > $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$)) {
      return"series[" + $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ + "]"
    }
  }else {
    if($JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ instanceof D.$DvtRefObjPeer$$) {
      return $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ = $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$_axisType$, $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ = $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$.$getIndex$(), $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ && 
      0 <= $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ ? $axisSubId_axisType_legendItem$$inline_1886_legendOptions$$inline_1885_seriesIndex$$1$$ + ":referenceObject[" + $JSCompiler_inline_result$$142_displayable$$3_itemIndex_logicalObj$$1_refObjIndex_subId$$inline_1884$$ + "]" : null
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$ = function $$JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$$($subId$$3$$, $axisType$$1$$) {
  if("title" == $subId$$3$$ && $axisType$$1$$) {
    return $axisType$$1$$ + ":" + $subId$$3$$
  }
  var $indexList$$1$$ = $subId$$3$$.substring($subId$$3$$.indexOf("["));
  return $indexList$$1$$ ? "group" + $indexList$$1$$ : null
};
D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$) {
  if("tooltip" == $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_chart$, D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$(this.$_chart$) ? "_dvtDataCursor" : null)
  }
  var $openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.indexOf("["), $closeParen1_peers$$inline_1902$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.indexOf("]"), $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$, $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.indexOf(":");
  if(0 < $openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$ && 0 < $closeParen1_peers$$inline_1902$$ || 0 < $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$) {
    $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = 0 > $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$ ? $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring(0, $openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$) : $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring(0, $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$);
    if("group" == $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$) {
      return this.$_xAxisAutomation$.$getDomElementForSubId$($itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$)
    }
    if("series" == $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$) {
      return $openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring($itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.indexOf("[") + 1, $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.indexOf("]")), $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$ = this.$_legend$.$getOptions$(), $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$ = "section" + (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)(this.$_legendAutomation$, 
      this.$_options$.series[$openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$], $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$), this.$_legendAutomation$.$getDomElementForSubId$($itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$)
    }
    if("legend" == $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring(0, $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$)) {
      return $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring($axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$ + 1), this.$_legendAutomation$.$getDomElementForSubId$($itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$)
    }
    $openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring($openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$ + 1, $closeParen1_peers$$inline_1902$$);
    if("xAxis" == $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ || "yAxis" == $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ || "y2Axis" == $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$) {
      if($axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring($axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$ + 1), "title" == $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$) {
        if("xAxis" == $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$) {
          return this.$_xAxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$)
        }
        if("yAxis" == $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$) {
          return this.$_yAxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$)
        }
        if("y2Axis" == $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$) {
          return this.$_y2AxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$)
        }
      }else {
        if($index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$.indexOf("["), $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$ = $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$.indexOf("]"), "referenceObject" == $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$.substring(0, $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$)) {
          a: {
            $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$.substring($index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ + 1, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$);
            $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$ = this.$_chart$;
            for(var $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$ = [], $i$$inline_9727$$ = 0;$i$$inline_9727$$ < $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$.$Peers$.length;$i$$inline_9727$$++) {
              $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$.$Peers$[$i$$inline_9727$$] instanceof D.$DvtRefObjPeer$$ && $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$.push($JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$.$Peers$[$i$$inline_9727$$])
            }
            for($JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$ = 0;$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$ < $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$.length;$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$++) {
              if($index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ == $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$[$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$].$getIndex$()) {
                $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$[$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$];
                break a
              }
            }
            $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = null
          }
          if($index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$) {
            return $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
    }
    if("pie" == this.$_options$.type && ($index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = 0 <= $openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$ && $openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$ < this.$_chart$.$pieChart$.$_slices$.length ? (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this.$_chart$.$pieChart$.$_slices$[$openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$]) : null)) {
      return $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$.$getElem$()
    }
    if("funnel" == this.$_options$.type) {
      var $i$$inline_1903_itemIndex$$1$$ = D.$DvtFunnelRenderer$$.$_GROUP_INDEX$
    }else {
      $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring($closeParen1_peers$$inline_1902$$ + 1), $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.indexOf("["), $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.indexOf("]"), 
      0 <= $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ && 0 <= $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$ && ($i$$inline_1903_itemIndex$$1$$ = $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$.substring($index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ + 1, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_9725_closeParen2_i$$inline_1897$$))
    }
    a: {
      $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$ = $i$$inline_1903_itemIndex$$1$$;
      $closeParen1_peers$$inline_1902$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)(this.$_chart$);
      for($i$$inline_1903_itemIndex$$1$$ = 0;$i$$inline_1903_itemIndex$$1$$ < $closeParen1_peers$$inline_1902$$.length;$i$$inline_1903_itemIndex$$1$$++) {
        if($index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = $closeParen1_peers$$inline_1902$$[$i$$inline_1903_itemIndex$$1$$].$getSeriesIndex$(), $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$ = $closeParen1_peers$$inline_1902$$[$i$$inline_1903_itemIndex$$1$$].$getGroupIndex$(), $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ == $openParen1_seriesIndex$$2_seriesIndex$$inline_1891$$ && $axisObjectType_colon_item$$inline_1905_refObjPeers$$inline_9726$$ == 
        $itemIndex$$inline_1901_legendOptions$$inline_1892_subId$$4$$) {
          $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = $closeParen1_peers$$inline_1902$$[$i$$inline_1903_itemIndex$$1$$];
          break a
        }
      }
      $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$ = null
    }
    if($index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$) {
      return $index$$inline_1895_logicalObj$$2_objType_openParen2_pieSlice_series$$inline_1904$$.$getDisplayables$()[0].$getElem$()
    }
  }
  return null
};
D.$DvtChartAutomation$$.prototype.getDomElementForSubId = D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($seriesIndex$$5$$, $itemIndex$$3$$) {
  if("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
    $itemIndex$$3$$ = 0
  }
  var $dataItem$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$);
  return $dataItem$$ ? {borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), label:D.$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), targetValue:D.$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $seriesIndex$$5$$), tooltip:D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$, 
  !1), value:D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), open:$dataItem$$.open, close:$dataItem$$.close, high:D.$DvtChartDataUtils$$.$getHighValue$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), low:D.$DvtChartDataUtils$$.$getLowValue$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), volume:$dataItem$$.volume, x:D.$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$), y:$dataItem$$.y, z:$dataItem$$.z, min:$dataItem$$.min, 
  max:$dataItem$$.max, group:D.$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $itemIndex$$3$$), series:D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$5$$), selected:D.$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, $seriesIndex$$5$$, $itemIndex$$3$$)} : null
};
D.$DvtChartAutomation$$.prototype.getDataItem = D.$DvtChartAutomation$$.prototype.$getDataItem$;
D.$DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($itemIndex$$4$$) {
  return D.$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $itemIndex$$4$$)
};
D.$DvtChartAutomation$$.prototype.getGroup = D.$DvtChartAutomation$$.prototype.$getGroup$;
D.$DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($seriesIndex$$6$$) {
  return this.$_options$.series[$seriesIndex$$6$$].name
};
D.$DvtChartAutomation$$.prototype.getSeries = D.$DvtChartAutomation$$.prototype.$getSeries$;
D.$DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
  return D.$DvtChartDataUtils$$.$getGroupCount$(this.$_chart$)
};
D.$DvtChartAutomation$$.prototype.getGroupCount = D.$DvtChartAutomation$$.prototype.$getGroupCount$;
D.$DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
  return this.$_options$.series.length
};
D.$DvtChartAutomation$$.prototype.getSeriesCount = D.$DvtChartAutomation$$.prototype.$getSeriesCount$;
D.$DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
  return this.$_options$.title.text
};
D.$DvtChartAutomation$$.prototype.getTitle = D.$DvtChartAutomation$$.prototype.$getTitle$;
D.$DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
  var $legendSpace$$ = this.$_legend$.$_bounds$, $point$$4$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_chart$, new D.$DvtPoint$$($legendSpace$$.x, $legendSpace$$.y));
  return{bounds:{x:$point$$4$$.x, y:$point$$4$$.y, width:$legendSpace$$.$w$, height:$legendSpace$$.$h$}, title:this.$_legend$.$getOptions$().title}
};
D.$DvtChartAutomation$$.prototype.getLegend = D.$DvtChartAutomation$$.prototype.$getLegend$;
D.$DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
  var $plotAreaSpace$$ = this.$_chart$.$_plotAreaSpace$;
  return{bounds:{x:$plotAreaSpace$$.x, y:$plotAreaSpace$$.y, width:$plotAreaSpace$$.$w$, height:$plotAreaSpace$$.$h$}}
};
D.$DvtChartAutomation$$.prototype.getPlotArea = D.$DvtChartAutomation$$.prototype.$getPlotArea$;
D.$DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
  return this.$_getAxis$("x")
};
D.$DvtChartAutomation$$.prototype.getXAxis = D.$DvtChartAutomation$$.prototype.$getXAxis$;
D.$DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
  return this.$_getAxis$("y")
};
D.$DvtChartAutomation$$.prototype.getYAxis = D.$DvtChartAutomation$$.prototype.$getYAxis$;
D.$DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
  return this.$_getAxis$("y2")
};
D.$DvtChartAutomation$$.prototype.getY2Axis = D.$DvtChartAutomation$$.prototype.$getY2Axis$;
D.$DvtChartAutomation$$.prototype.$_getAxis$ = function $$DvtChartAutomation$$$$$_getAxis$$($type$$62$$) {
  var $axis$$65$$ = "x" == $type$$62$$ ? this.$_xAxis$ : "y" == $type$$62$$ ? this.$_yAxis$ : this.$_y2Axis$;
  if($axis$$65$$) {
    var $axisSpace$$ = $axis$$65$$.$_bounds$, $stageCoord$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($axis$$65$$, new D.$DvtPoint$$($axisSpace$$.x, $axisSpace$$.y)), $chart$$ = this.$_chart$;
    return{bounds:{x:$stageCoord$$.x, y:$stageCoord$$.y, width:$axisSpace$$.$w$, height:$axisSpace$$.$h$}, title:this.$_options$[$type$$62$$ + "Axis"].title, getPreferredSize:function($axisSpace$$, $stageCoord$$) {
      var $axisOptions_prefSize$$ = $axis$$65$$.$getOptions$(), $position$$8$$ = $axisOptions_prefSize$$.position, $tickLabelGap$$ = D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$, $type$$62$$), $outerGap$$ = D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$) || D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$) ? 2 : 0;
      "top" == $position$$8$$ || "bottom" == $position$$8$$ ? ($axisOptions_prefSize$$ = $axis$$65$$.$getPreferredSize$($axisOptions_prefSize$$, $axisSpace$$, $stageCoord$$ - $tickLabelGap$$ - $outerGap$$), $axisOptions_prefSize$$.$h$ = window.Math.ceil($axisOptions_prefSize$$.$h$ + $tickLabelGap$$ + $outerGap$$)) : ($axisOptions_prefSize$$ = $axis$$65$$.$getPreferredSize$($axisOptions_prefSize$$, $axisSpace$$ - $tickLabelGap$$ - $outerGap$$, $stageCoord$$), $axisOptions_prefSize$$.$w$ = window.Math.ceil($axisOptions_prefSize$$.$w$ + 
      $tickLabelGap$$ + $outerGap$$));
      return{width:$axisOptions_prefSize$$.$w$, height:$axisOptions_prefSize$$.$h$}
    }}
  }
  return null
};
D.$DvtAutomation$$.prototype.$IsTooltipElement$ = function $$DvtAutomation$$$$$IsTooltipElement$$($domElement$$3_id$$24$$) {
  return($domElement$$3_id$$24$$ = $domElement$$3_id$$24$$.getAttribute("id")) && (0 == $domElement$$3_id$$24$$.indexOf("_dvtDataCursor") || 0 == $domElement$$3_id$$24$$.indexOf(D.$DvtHtmlTooltipManager$_TOOLTIP_DIV_ID$$)) ? !0 : !1
};
(0,D.$DvtBundle$addDefaultStrings$$)("DvtChartBundle", {DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series", LABEL_GROUP:"Group", LABEL_VALUE:"Value", LABEL_TARGET_VALUE:"Target", LABEL_X:"X", LABEL_Y:"Y", LABEL_Z:"Z", LABEL_PERCENTAGE:"Percentage", LABEL_MIN:"Min", LABEL_MAX:"Max", LABEL_HIGH:"High", LABEL_LOW:"Low", LABEL_OPEN:"Open", LABEL_CLOSE:"Close", LABEL_VOLUME:"Volume", LABEL_OTHER:"Other", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom", PAN:"Pan"});
D.$DvtChartEventManager$$ = function $$DvtChartEventManager$$$($chart$$5$$) {
  D.$DvtChartEventManager$$.$superclass$.Init.call(this, $chart$$5$$.$getCtx$(), $chart$$5$$.$processEvent$, $chart$$5$$);
  this.$_chart$ = $chart$$5$$;
  this.$_dragMode$ = null;
  this.$_dragButtonsVisible$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$selectButton$ = this.$zoomButton$ = this.$panButton$ = null
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventManager$$, D.$DvtEventManager$$, "DvtChartEventManager");
D.$DvtChartEventManager$$.prototype.$addListeners$ = function $$DvtChartEventManager$$$$$addListeners$$($displayable$$4$$) {
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  D.$DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$4$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || $displayable$$4$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, !1, this)
};
D.$DvtChartEventManager$$.prototype.$removeListeners$ = function $$DvtChartEventManager$$$$$removeListeners$$($displayable$$5$$) {
  D.$DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$5$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || $displayable$$5$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, !1, this)
};
D.$DvtChartEventManager$$.prototype.$getLogicalObject$ = function $$DvtChartEventManager$$$$$getLogicalObject$$($target$$57$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $target$$57$$, !0)
};
D.$DvtChartEventManager$$.prototype.$_getRelativePosition$ = function $$DvtChartEventManager$$$$$_getRelativePosition$$($pageX$$1$$, $pageY$$1$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$1$$ - this.$_stageAbsolutePosition$.x, $pageY$$1$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_StaticMethods__getDragHandler$$ = function $$JSCompiler_StaticMethods__getDragHandler$$$($JSCompiler_StaticMethods__getDragHandler$self$$, $relPos$$) {
  if($relPos$$ && "user" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_chart$.$getOptions$().dragMode && D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__getDragHandler$self$$.$_chart$) && ("pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ || "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$)) {
    $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ = (0,D.$JSCompiler_StaticMethods_isWithinBounds$$)($JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$, $relPos$$) ? "pan" : "zoom"
  }
  return"pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$ : "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeZoomHandler$ : "select" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeSelectHandler$ : null
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$108$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$108$$) : this.$_onMouseDragStart$($event$$108$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$109$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$109$$) : this.$_onMouseDragMove$($event$$109$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$110$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$110$$) : this.$_onMouseDragEnd$($event$$110$$)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$111$$) {
  var $relPos$$1$$ = this.$_getRelativePosition$($event$$111$$.pageX, $event$$111$$.pageY), $dragHandler$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this, $relPos$$1$$), $chartEvent$$, $obj$$51$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$111$$));
  if((!$obj$$51$$ || !$obj$$51$$.$isSelectable$ || !$obj$$51$$.$isSelectable$()) && 0 == $event$$111$$.button && $dragHandler$$) {
    ($chartEvent$$ = $dragHandler$$.$processDragStart$($relPos$$1$$, $event$$111$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$), this.$_chart$.setCursor($dragHandler$$.getCursor($relPos$$1$$)), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, !1), this.$_chart$ != (this.$getCtx$().$_keyboardFocusArray$.length <= this.$getCtx$().$_keyboardFocusIndex$ ? null : this.$getCtx$().$_keyboardFocusArray$[this.$getCtx$().$_keyboardFocusIndex$]) && (0,D.$JSCompiler_StaticMethods_setCurrentKeyboardFocus$$)(this.$getCtx$(), 
    this.$_chart$)
  }
  return $chartEvent$$ ? (this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$, void 0), !0) : !1
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$112$$) {
  var $relPos$$2$$ = this.$_getRelativePosition$($event$$112$$.pageX, $event$$112$$.pageY), $dragHandler$$1$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$1$$;
  if($dragHandler$$1$$ && ($chartEvent$$1$$ = $dragHandler$$1$$.$processDragMove$($relPos$$2$$, $event$$112$$.ctrlKey))) {
    this.$_callback$.call(this.$_callbackObj$, $chartEvent$$1$$), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, !1)
  }
  $chartEvent$$1$$ && $event$$112$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$($chartEvent$$2_event$$113$$) {
  var $relPos$$3$$ = this.$_getRelativePosition$($chartEvent$$2_event$$113$$.pageX, $chartEvent$$2_event$$113$$.pageY), $axisSpace$$1_dragHandler$$2$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
  if($axisSpace$$1_dragHandler$$2$$) {
    if($chartEvent$$2_event$$113$$ = $axisSpace$$1_dragHandler$$2$$.$processDragEnd$($relPos$$3$$, $chartEvent$$2_event$$113$$.ctrlKey)) {
      this.$_callback$.call(this.$_callbackObj$, $chartEvent$$2_event$$113$$), (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)(this)
    }
    this.$_chart$.setCursor($axisSpace$$1_dragHandler$$2$$.getCursor($relPos$$3$$));
    ($axisSpace$$1_dragHandler$$2$$ = this.$_chart$.$_axisSpace$) && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($axisSpace$$1_dragHandler$$2$$, $relPos$$3$$.x, $relPos$$3$$.y))
  }
  this.$_stageAbsolutePosition$ = null
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($dragHandler$$3_event$$114$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $dragHandler$$3_event$$114$$);
  var $relPos$$4$$ = this.$_getRelativePosition$($dragHandler$$3_event$$114$$.pageX, $dragHandler$$3_event$$114$$.pageY);
  this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $dragHandler$$3_event$$114$$) instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$, void 0) : (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $relPos$$4$$));
  ($dragHandler$$3_event$$114$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this, $relPos$$4$$)) ? this.$_chart$.setCursor($dragHandler$$3_event$$114$$.getCursor($relPos$$4$$)) : this.$_chart$.setCursor("inherit")
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$115$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$115$$);
  var $relPos$$5$$ = this.$_getRelativePosition$($event$$115$$.pageX, $event$$115$$.pageY), $JSCompiler_StaticMethods_processOut$self$$inline_1973_axisSpace$$2$$ = this.$_chart$.$_axisSpace$;
  $JSCompiler_StaticMethods_processOut$self$$inline_1973_axisSpace$$2$$ && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_1973_axisSpace$$2$$, $relPos$$5$$.x, $relPos$$5$$.y));
  this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processOut$self$$inline_1973_axisSpace$$2$$ = this.$_dataCursorHandler$, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_1973_axisSpace$$2$$.$_chart$.$_plotAreaSpace$, $relPos$$5$$.x, $relPos$$5$$.y) || (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processOut$self$$inline_1973_axisSpace$$2$$, void 0));
  this.$_stageAbsolutePosition$ = null;
  (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$115$$.target)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$116$$) {
  if(D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    var $delta$$3_deltaXMin$$inline_1981$$ = null != $event$$116$$.wheelDelta ? $event$$116$$.wheelDelta : 0, $relPos$$6$$ = this.$_getRelativePosition$($event$$116$$.pageX, $event$$116$$.pageY);
    if(this.$_panZoomHandler$) {
      var $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$;
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$ = this.$_panZoomHandler$;
      var $delta$$inline_1979$$ = $delta$$3_deltaXMin$$inline_1981$$, $startPt$$inline_1980$$ = $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_container$.$stageToLocal$($relPos$$6$$);
      if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_bounds$, $startPt$$inline_1980$$.x, $startPt$$inline_1980$$.y)) {
        var $delta$$inline_1979$$ = $delta$$inline_1979$$ * $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_zoomRate$, $delta$$3_deltaXMin$$inline_1981$$ = $delta$$inline_1979$$ * ($startPt$$inline_1980$$.x - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_bounds$.x), $deltaXMax$$inline_1982$$ = -$delta$$inline_1979$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_bounds$.x + 
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_bounds$.$w$ - $startPt$$inline_1980$$.x), $deltaYMin$$inline_1983$$ = $delta$$inline_1979$$ * ($startPt$$inline_1980$$.y - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_bounds$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$ = -$delta$$inline_1979$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_bounds$.y + $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$.$_bounds$.$h$ - $startPt$$inline_1980$$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$ = new D.$DvtPanZoomEvent$$("dvtZoomEvent", $delta$$3_deltaXMin$$inline_1981$$, $deltaXMax$$inline_1982$$, $deltaYMin$$inline_1983$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$, $delta$$3_deltaXMin$$inline_1981$$, $deltaXMax$$inline_1982$$, $deltaYMin$$inline_1983$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$)
      }else {
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$ = null
      }
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$ && ($event$$116$$.preventDefault(), $event$$116$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_1977_deltaYMax$$inline_1984_panZoomEvent$$), this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $relPos$$6$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ShowFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$ShowFocusEffect$$($event$$117$$, $navigable$$1$$) {
  if(this.$_dataCursorHandler$) {
    var $pos$$5$$ = $navigable$$1$$.$_dataPos$;
    if($pos$$5$$) {
      var $plotAreaBounds$$1$$ = this.$_chart$.$_plotAreaSpace$;
      (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, new D.$DvtPoint$$($pos$$5$$.x + $plotAreaBounds$$1$$.x, $pos$$5$$.y + $plotAreaBounds$$1$$.y))
    }
  }
  D.$DvtChartEventManager$$.$superclass$.$ShowFocusEffect$.call(this, $event$$117$$, $navigable$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$OnBlur$ = function $$JSCompiler_prototypeAlias$$$$OnBlur$$($event$$118$$) {
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$, void 0);
  D.$DvtChartEventManager$$.$superclass$.$OnBlur$.call(this, $event$$118$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$119_pos$$6$$) {
  var $obj$$53$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$119_pos$$6$$.target);
  $event$$119_pos$$6$$ = this.$_getRelativePosition$($event$$119_pos$$6$$.pageX, $event$$119_pos$$6$$.pageY);
  this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($event$$119_pos$$6$$, $obj$$53$$);
  $obj$$53$$ && (this.$processActionEvent$($obj$$53$$), (!$obj$$53$$.$isSelectable$ || !$obj$$53$$.$isSelectable$()) && this.$processDrillEvent$($obj$$53$$))
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$120_obj$$54$$) {
  ($event$$120_obj$$54$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$120_obj$$54$$.target)) && $event$$120_obj$$54$$.$isSelectable$ && $event$$120_obj$$54$$.$isSelectable$() && this.$processDrillEvent$($event$$120_obj$$54$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$121$$) {
  var $dlo$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$121$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$121$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$));
  return!1
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverMoveInternal$$($event$$122$$) {
  var $dlo$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$122$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$122$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$1$$));
  return!1
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$123_obj$$55$$) {
  if($event$$123_obj$$55$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$123_obj$$55$$.target)) {
    this.$processActionEvent$($event$$123_obj$$55$$), (!$event$$123_obj$$55$$.$isSelectable$ || !$event$$123_obj$$55$$.$isSelectable$()) && this.$processDrillEvent$($event$$123_obj$$55$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$124_obj$$56$$) {
  if($event$$124_obj$$56$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$124_obj$$56$$.target)) {
    this.$processActionEvent$($event$$124_obj$$56$$), (!$event$$124_obj$$56$$.$isSelectable$ || !$event$$124_obj$$56$$.$isSelectable$()) && this.$processDrillEvent$($event$$124_obj$$56$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$125$$) {
  var $obj$$57$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$125$$.target);
  $obj$$57$$ && ($obj$$57$$.$isSelectable$ && $obj$$57$$.$isSelectable$()) && ($event$$125$$.preventDefault(), $event$$125$$.stopPropagation(), this.$processDrillEvent$($obj$$57$$))
};
D.$JSCompiler_prototypeAlias$$.$processActionEvent$ = function $$JSCompiler_prototypeAlias$$$$processActionEvent$$($obj$$58$$) {
  $obj$$58$$ && ($obj$$58$$.$getAction$ && $obj$$58$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$58$$.$getAction$(), $obj$$58$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$processDrillEvent$ = function $$JSCompiler_prototypeAlias$$$$processDrillEvent$$($obj$$59$$) {
  if($obj$$59$$ && $obj$$59$$.$isDrillable$ && $obj$$59$$.$isDrillable$()) {
    var $id$$27$$ = $obj$$59$$.getId();
    $obj$$59$$ instanceof D.$DvtChartObjPeer$$ ? this.$FireEvent$(new D.$DvtDrillEvent$$($id$$27$$.getId ? $id$$27$$.getId() : $id$$27$$, $obj$$59$$.$getSeries$(), $obj$$59$$.$getGroup$())) : $obj$$59$$ instanceof D.$DvtPieSlice$$ && this.$FireEvent$(new D.$DvtDrillEvent$$($id$$27$$.getId(), $id$$27$$.$getSeries$(), $id$$27$$.$getGroup$()))
  }
};
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$126_options$$35$$, $categories$$1_hoverBehaviorDelay_obj$$60$$, $bOver_rolloverEvent$$) {
  $event$$126_options$$35$$ = this.$_chart$.$getOptions$();
  if("dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this.$_chart$)) {
    $categories$$1_hoverBehaviorDelay_obj$$60$$ = $categories$$1_hoverBehaviorDelay_obj$$60$$.$getCategories$ ? $categories$$1_hoverBehaviorDelay_obj$$60$$.$getCategories$() : [];
    $event$$126_options$$35$$.highlightedCategories = $bOver_rolloverEvent$$ ? $categories$$1_hoverBehaviorDelay_obj$$60$$.slice() : null;
    $bOver_rolloverEvent$$ = new D.$DvtCategoryRolloverEvent$$($bOver_rolloverEvent$$ ? "categoryRollOver" : "categoryRollOut", $event$$126_options$$35$$.highlightedCategories);
    $categories$$1_hoverBehaviorDelay_obj$$60$$ = D.$DvtChartStyleUtils$$.$getHoverBehaviorDelay$(this.$_chart$);
    var $objs$$ = this.$_chart$.$getObjects$();
    this.$_chart$.$pieChart$ && ($objs$$ = $objs$$.concat(this.$_chart$.$pieChart$.$_slices$));
    this.$RolloverHandler$.$processEvent$($bOver_rolloverEvent$$, $objs$$, $categories$$1_hoverBehaviorDelay_obj$$60$$, "any" == $event$$126_options$$35$$.highlightMatch)
  }
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$127$$) {
  var $relPos$$7_relPos2_touches$$2$$ = $event$$127$$.touches, $chartEvent$$3_relPos1$$, $dataCursorOn$$;
  if(1 == $relPos$$7_relPos2_touches$$2$$.length) {
    var $relPos$$7_relPos2_touches$$2$$ = this.$_getRelativePosition$($relPos$$7_relPos2_touches$$2$$[0].pageX, $relPos$$7_relPos2_touches$$2$$[0].pageY), $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$ ? $chartEvent$$3_relPos1$$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$processDragStart$($relPos$$7_relPos2_touches$$2$$, !0) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $relPos$$7_relPos2_touches$$2$$), $dataCursorOn$$ = !0)
  }else {
    2 == $relPos$$7_relPos2_touches$$2$$.length && (this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && (this.$endDrag$(), $chartEvent$$3_relPos1$$ = this.$_getRelativePosition$($relPos$$7_relPos2_touches$$2$$[0].pageX, $relPos$$7_relPos2_touches$$2$$[0].pageY), $relPos$$7_relPos2_touches$$2$$ = this.$_getRelativePosition$($relPos$$7_relPos2_touches$$2$$[1].pageX, $relPos$$7_relPos2_touches$$2$$[1].pageY), $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$ = 
    this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_pinchOn$ ? $chartEvent$$3_relPos1$$ = null : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_origPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_container$.$stageToLocal$($chartEvent$$3_relPos1$$), $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_origPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_container$.$stageToLocal$($relPos$$7_relPos2_touches$$2$$), 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_lastPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_lastPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_origPt2$, !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_bounds$, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_origPt1$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_origPt1$.y) || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_bounds$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_origPt2$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_origPt2$.y) ? 
    $chartEvent$$3_relPos1$$ = null : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_1989_dragHandler$$4$$.$_pinchOn$ = !0, $chartEvent$$3_relPos1$$ = new D.$DvtPanZoomEvent$$("dvtPinchStartEvent", 0, 0, 0, 0, 0, 0, 0, 0))))
  }
  $chartEvent$$3_relPos1$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$3_relPos1$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$());
  return $chartEvent$$3_relPos1$$ || $dataCursorOn$$ ? ($event$$127$$.preventDefault(), $event$$127$$.stopPropagation(), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, !1), !0) : !1
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$128$$) {
  var $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$ = $event$$128$$.touches, $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$, $dataCursorOn$$1$$;
  if(1 == $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$.length) {
    var $newPt1$$inline_1996_relPos$$8_relPos1$$1$$ = this.$_getRelativePosition$($dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$[0].pageX, $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$[0].pageY);
    ($dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) ? $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$ = $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$.$processDragMove$($newPt1$$inline_1996_relPos$$8_relPos1$$1$$, !0) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $newPt1$$inline_1996_relPos$$8_relPos1$$1$$), $dataCursorOn$$1$$ = 
    !0)
  }else {
    if(2 == $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$.length && this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      if($newPt1$$inline_1996_relPos$$8_relPos1$$1$$ = this.$_getRelativePosition$($dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$[0].pageX, $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$[0].pageY), $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$ = this.$_getRelativePosition$($dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$[1].pageX, $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$[1].pageY), $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$ = 
      this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_pinchOn$) {
        var $newPt1$$inline_1996_relPos$$8_relPos1$$1$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_container$.$stageToLocal$($newPt1$$inline_1996_relPos$$8_relPos1$$1$$), $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_container$.$stageToLocal$($dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$), $deltas$$inline_1998$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$, 
        $newPt1$$inline_1996_relPos$$8_relPos1$$1$$, $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_lastPt2$), $totalDeltas$$inline_1999$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$, $newPt1$$inline_1996_relPos$$8_relPos1$$1$$, $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$, 
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_origPt2$);
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_lastPt1$ = $newPt1$$inline_1996_relPos$$8_relPos1$$1$$;
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$.$_lastPt2$ = $dragHandler$$5_newPt2$$inline_1997_relPos2$$1_touches$$3$$;
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$ = new D.$DvtPanZoomEvent$$("dvtPinchMoveEvent", $deltas$$inline_1998$$.$dxMin$, $deltas$$inline_1998$$.$dxMax$, $deltas$$inline_1998$$.$dyMin$, $deltas$$inline_1998$$.$dyMax$, $totalDeltas$$inline_1999$$.$dxMin$, $totalDeltas$$inline_1999$$.$dxMax$, $totalDeltas$$inline_1999$$.$dyMin$, $totalDeltas$$inline_1999$$.$dyMax$)
      }else {
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$ = null
      }
    }
  }
  ($JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$ || $dataCursorOn$$1$$) && $event$$128$$.preventDefault();
  $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$ && (this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_1993_chartEvent$$4$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$())
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$129$$) {
  var $chartEvent1$$ = this.$endDrag$(), $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$;
  if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$ = this.$_panZoomHandler$;
    if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$.$_pinchOn$) {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$.$_pinchOn$ = !1;
      var $totalDeltas$$inline_2002$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$.$_lastPt2$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$.$_origPt2$);
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$.$_lastPt1$ = null;
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$.$_lastPt2$ = null;
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$ = new D.$DvtPanZoomEvent$$("dvtPinchEndEvent", 0, 0, 0, 0, $totalDeltas$$inline_2002$$.$dxMin$, $totalDeltas$$inline_2002$$.$dxMax$, $totalDeltas$$inline_2002$$.$dyMin$, $totalDeltas$$inline_2002$$.$dyMax$)
    }else {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$ = null
    }
    $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$ && this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$)
  }
  if($chartEvent1$$ || $JSCompiler_StaticMethods_processPinchEnd$self$$inline_2001_chartEvent2$$) {
    $event$$129$$.preventDefault(), this.$getCtx$().$getTooltipManager$().$hideTooltip$()
  }
  this.$_stageAbsolutePosition$ = null;
  (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, !0)
};
D.$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$() {
  var $dragHandler$$6$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$5$$;
  $dragHandler$$6$$ && ($chartEvent$$5$$ = $dragHandler$$6$$.$processDragEnd$(null, !0)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$, void 0);
  $chartEvent$$5$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  return $chartEvent$$5$$
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($chartEvent$$6_dz$$) {
  this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($chartEvent$$6_dz$$ = this.$_panZoomHandler$.$zoomBy$($chartEvent$$6_dz$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$6_dz$$)
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$4$$, $dy$$6$$) {
  if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
    var $chartEvent$$7$$ = this.$_panZoomHandler$.$panBy$($dx$$4$$, $dy$$6$$);
    $chartEvent$$7$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$7$$)
  }
};
D.$JSCompiler_StaticMethods_hideHoverFeedback$$ = function $$JSCompiler_StaticMethods_hideHoverFeedback$$$($JSCompiler_StaticMethods_hideHoverFeedback$self$$) {
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$.$_dataCursorHandler$, void 0)
};
D.$DvtChartEventManager$$.prototype.$hideTooltip$ = function $$DvtChartEventManager$$$$$hideTooltip$$() {
  (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && D.$DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
};
D.$DvtChartEventManager$$.prototype.$getTooltipsEnabled$ = function $$DvtChartEventManager$$$$$getTooltipsEnabled$$($logicalObj$$3$$) {
  return this.$_dataCursorHandler$ && ($logicalObj$$3$$ instanceof D.$DvtChartObjPeer$$ || $logicalObj$$3$$ instanceof D.$DvtRefObjPeer$$ || this.$_dataCursorHandler$.$_dataCursorShown$) ? !1 : D.$DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
};
D.$DvtChartEventManager$$.prototype.$cancelMarquee$ = function $$DvtChartEventManager$$$$$cancelMarquee$$($event$$130$$) {
  "zoom" == this.$_dragMode$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $event$$130$$.preventDefault() : "select" == this.$_dragMode$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
};
D.$JSCompiler_StaticMethods_setDragMode$$ = function $$JSCompiler_StaticMethods_setDragMode$$$($JSCompiler_StaticMethods_setDragMode$self$$, $dragMode$$) {
  $JSCompiler_StaticMethods_setDragMode$self$$.$_dragMode$ = null == $dragMode$$ ? (0,D.$DvtAgent$isTouchDevice$$)() ? "off" : D.$DvtChartEventUtils$$.$isScrollable$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$) ? "pan" : "multiple" == $JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$getOptions$().selectionMode ? "select" : null : $dragMode$$;
  (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$xAxis$) && (!$JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$ || (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$)) && (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($JSCompiler_StaticMethods_setDragMode$self$$)
};
D.$DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
  this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, !1), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "zoom")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, null)
};
D.$DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
  this.$panButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, !1), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "pan")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, null)
};
D.$DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
  this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$zoomButton$, !1), this.$panButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$panButton$, !1), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "select")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, null)
};
D.$JSCompiler_StaticMethods_setDragButtonsVisible$$ = function $$JSCompiler_StaticMethods_setDragButtonsVisible$$$($JSCompiler_StaticMethods_setDragButtonsVisible$self$$, $visible$$3$$) {
  if($visible$$3$$ && !$JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$) {
    var $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2012_JSCompiler_StaticMethods_showDragButtons$self$$inline_2010$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$;
    $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2012_JSCompiler_StaticMethods_showDragButtons$self$$inline_2010$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2012_JSCompiler_StaticMethods_showDragButtons$self$$inline_2010$$.$dragButtons$.$setVisible$(!0);
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = !0
  }else {
    !$visible$$3$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ && ($JSCompiler_StaticMethods_hideDragButtons$self$$inline_2012_JSCompiler_StaticMethods_showDragButtons$self$$inline_2010$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$, $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2012_JSCompiler_StaticMethods_showDragButtons$self$$inline_2010$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2012_JSCompiler_StaticMethods_showDragButtons$self$$inline_2010$$.$dragButtons$.$setVisible$(!1), 
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = !1)
  }
};
D.$JSCompiler_StaticMethods_autoToggleZoomButton$$ = function $$JSCompiler_StaticMethods_autoToggleZoomButton$$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$) {
  !(0,D.$DvtAgent$isTouchDevice$$)() && $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$ && ((0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$xAxis$) && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$yAxis$) ? "pan" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, 
  !0), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()) : "zoom" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, !1), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()))
};
D.$DvtChartEventManager$$.prototype.$GetTouchResponse$ = function $$DvtChartEventManager$$$$$GetTouchResponse$$() {
  return this.$_dragMode$ && "off" != this.$_dragMode$ ? "touchHold" : this.$_chart$.$getOptions$().touchResponse
};
D.$DvtChartKeyboardHandler$$ = function $$DvtChartKeyboardHandler$$$($manager$$3$$, $chart$$6$$) {
  this.Init($manager$$3$$, $chart$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtChartKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($manager$$4$$, $chart$$7$$) {
  D.$DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $manager$$4$$);
  this.$_chart$ = $chart$$7$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$134$$) {
  return this.$isNavigationEvent$($event$$134$$) && !$event$$134$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$135$$) {
  return 32 == $event$$135$$.keyCode && $event$$135$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$136$$) {
  var $currentNavigable$$1_keyCode$$12_navigables$$3$$ = $event$$136$$.keyCode;
  if(9 == $currentNavigable$$1_keyCode$$12_navigables$$3$$) {
    if($currentNavigable$$1_keyCode$$12_navigables$$3$$ = this.$_eventManager$.$getFocus$()) {
      return(0,D.$DvtEventManager$consumeEvent$$)($event$$136$$), $currentNavigable$$1_keyCode$$12_navigables$$3$$
    }
    $currentNavigable$$1_keyCode$$12_navigables$$3$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
    if(0 < $currentNavigable$$1_keyCode$$12_navigables$$3$$.length) {
      return(0,D.$DvtEventManager$consumeEvent$$)($event$$136$$), this.$getDefaultNavigable$($currentNavigable$$1_keyCode$$12_navigables$$3$$)
    }
  }else {
    if(13 == $currentNavigable$$1_keyCode$$12_navigables$$3$$) {
      if($currentNavigable$$1_keyCode$$12_navigables$$3$$ = this.$_eventManager$.$getFocus$()) {
        return this.$_eventManager$.$processActionEvent$($currentNavigable$$1_keyCode$$12_navigables$$3$$), this.$_eventManager$.$processDrillEvent$($currentNavigable$$1_keyCode$$12_navigables$$3$$), (0,D.$DvtEventManager$consumeEvent$$)($event$$136$$), $currentNavigable$$1_keyCode$$12_navigables$$3$$
      }
    }else {
      27 == $currentNavigable$$1_keyCode$$12_navigables$$3$$ ? this.$_eventManager$.$cancelMarquee$($event$$136$$) : 33 == $currentNavigable$$1_keyCode$$12_navigables$$3$$ ? (($event$$136$$.ctrlKey || $event$$136$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && D.$DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$136$$)) : 34 == $currentNavigable$$1_keyCode$$12_navigables$$3$$ ? 
      (($event$$136$$.ctrlKey || $event$$136$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && D.$DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), (0,D.$DvtEventManager$consumeEvent$$)($event$$136$$)) : (0,D.$DvtKeyboardEvent$isEquals$$)($event$$136$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($event$$136$$) ? this.$_eventManager$.$zoomBy$(1.5) : ((0,D.$DvtKeyboardEvent$isMinus$$)($event$$136$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($event$$136$$)) && 
      this.$_eventManager$.$zoomBy$(1 / 1.5)
    }
  }
  return D.$DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$136$$)
};
D.$JSCompiler_prototypeAlias$$.$getDefaultNavigable$ = function $$JSCompiler_prototypeAlias$$$$getDefaultNavigable$$($navigableItems$$) {
  if(!$navigableItems$$ || 0 >= $navigableItems$$.length) {
    return null
  }
  for(var $isPie$$ = D.$DvtChartTypeUtils$$.$isPie$(this.$_chart$), $defaultNavigable$$, $defaultSeries$$, $defaultGroup$$, $navigable$$2$$, $i$$139$$ = 0;$i$$139$$ < $navigableItems$$.length;$i$$139$$++) {
    $navigable$$2$$ = $navigableItems$$[$i$$139$$], !$defaultNavigable$$ || $navigable$$2$$.$getSeriesIndex$() < $defaultSeries$$ ? ($defaultNavigable$$ = $navigable$$2$$, $defaultSeries$$ = $navigable$$2$$.$getSeriesIndex$(), $isPie$$ || ($defaultGroup$$ = $navigable$$2$$.$getGroupIndex$())) : !$isPie$$ && $navigable$$2$$.$getGroupIndex$() < $defaultGroup$$ && ($defaultNavigable$$ = $navigable$$2$$, $defaultSeries$$ = $navigable$$2$$.$getSeriesIndex$(), $defaultGroup$$ = $navigable$$2$$.$getGroupIndex$())
  }
  return $defaultNavigable$$
};
D.$DvtChartObjPeer$$ = function $$DvtChartObjPeer$$$($chart$$8$$, $displayables$$, $seriesIndex$$7$$, $groupIndex$$3$$, $dataPos$$) {
  this.Init($chart$$8$$, $displayables$$, $seriesIndex$$7$$, $groupIndex$$3$$, $dataPos$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartObjPeer$$, D.$DvtObj$$, "DvtChartObjPeer");
D.$DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($chart$$9_i$$140_index$$128$$, $displayables$$1$$, $displayable$$6_seriesIndex$$8$$, $groupIndex$$4$$, $dataItem$$2_dataPos$$1_seriesItem$$) {
  this.$_chart$ = $chart$$9_i$$140_index$$128$$;
  this.$_displayables$ = $displayables$$1$$;
  this.$_seriesIndex$ = !(0,window.isNaN)($displayable$$6_seriesIndex$$8$$) ? $displayable$$6_seriesIndex$$8$$ : -1;
  this.$_groupIndex$ = !(0,window.isNaN)($groupIndex$$4$$) ? $groupIndex$$4$$ : -1;
  this.$_dataPos$ = $dataItem$$2_dataPos$$1_seriesItem$$;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = !1;
  0 <= $displayable$$6_seriesIndex$$8$$ && (this.$_series$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$9_i$$140_index$$128$$, $displayable$$6_seriesIndex$$8$$));
  0 <= $groupIndex$$4$$ && (this.$_group$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$9_i$$140_index$$128$$, $groupIndex$$4$$));
  if($dataItem$$2_dataPos$$1_seriesItem$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$9_i$$140_index$$128$$, $displayable$$6_seriesIndex$$8$$)) {
    this.$_action$ = $dataItem$$2_dataPos$$1_seriesItem$$.action, this.$_drillable$ = D.$DvtChartEventUtils$$.$isSeriesDrillable$($chart$$9_i$$140_index$$128$$, $displayable$$6_seriesIndex$$8$$), this.$_stampId$ = $dataItem$$2_dataPos$$1_seriesItem$$._id
  }
  $dataItem$$2_dataPos$$1_seriesItem$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$9_i$$140_index$$128$$, $displayable$$6_seriesIndex$$8$$, $groupIndex$$4$$);
  this.$_categories$ = D.$DvtChartDataUtils$$.$getDataItemCategories$($chart$$9_i$$140_index$$128$$, $displayable$$6_seriesIndex$$8$$, $groupIndex$$4$$);
  $dataItem$$2_dataPos$$1_seriesItem$$ && (this.$_dataItemId$ = $dataItem$$2_dataPos$$1_seriesItem$$.id, this.$_action$ = $dataItem$$2_dataPos$$1_seriesItem$$.action, this.$_drillable$ = D.$DvtChartEventUtils$$.$isDataItemDrillable$($chart$$9_i$$140_index$$128$$, $displayable$$6_seriesIndex$$8$$, $groupIndex$$4$$), this.$_stampId$ = $dataItem$$2_dataPos$$1_seriesItem$$._id);
  if(this.$_action$ || this.$_drillable$) {
    for($chart$$9_i$$140_index$$128$$ = 0;$chart$$9_i$$140_index$$128$$ < this.$_displayables$.length;$chart$$9_i$$140_index$$128$$++) {
      this.$_displayables$[$chart$$9_i$$140_index$$128$$].setCursor("pointer")
    }
  }
  for($chart$$9_i$$140_index$$128$$ = 0;$chart$$9_i$$140_index$$128$$ < $displayables$$1$$.length;$chart$$9_i$$140_index$$128$$++) {
    $displayable$$6_seriesIndex$$8$$ = $displayables$$1$$[$chart$$9_i$$140_index$$128$$], $displayable$$6_seriesIndex$$8$$ instanceof D.$DvtChartLineArea$$ || $displayable$$6_seriesIndex$$8$$.$setAriaRole$("img"), this.$_updateAriaLabel$($displayable$$6_seriesIndex$$8$$)
  }
};
D.$DvtChartObjPeer$associate$$ = function $$DvtChartObjPeer$associate$$$($displayable$$7$$, $chart$$10$$, $identObj_seriesIndex$$9$$, $groupIndex$$5$$, $dataPos$$2$$) {
  $displayable$$7$$ && ($identObj_seriesIndex$$9$$ = new D.$DvtChartObjPeer$$($chart$$10$$, [$displayable$$7$$], $identObj_seriesIndex$$9$$, $groupIndex$$5$$, $dataPos$$2$$), $chart$$10$$.$registerObject$($identObj_seriesIndex$$9$$), $chart$$10$$.$getEventManager$().$associate$($displayable$$7$$, $identObj_seriesIndex$$9$$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return 0 <= this.$_seriesIndex$ && 0 <= this.$_groupIndex$ ? new D.$DvtChartDataItem$$(this.$_dataItemId$, this.$getSeries$(), this.$getGroup$()) : 0 <= this.$_seriesIndex$ ? this.$getSeries$() : null
};
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getGroupIndex$ = (0,D.$JSCompiler_get$$)("$_groupIndex$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return this.$isSelectable$() && this.$isDrillable$()
};
D.$JSCompiler_prototypeAlias$$.$getSeriesType$ = function $$JSCompiler_prototypeAlias$$$$getSeriesType$$() {
  return D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesItem$ = function $$JSCompiler_prototypeAlias$$$$getSeriesItem$$() {
  return D.$DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, !0)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return D.$DvtChartStyleUtils$$.$isSelectable$(this.$_chart$, this.$getSeriesIndex$(), this.$getGroupIndex$())
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$) {
  this.$_isSelected$ = $bSelected$$;
  for(var $i$$141$$ = 0;$i$$141$$ < this.$_displayables$.length;$i$$141$$++) {
    this.$_displayables$[$i$$141$$].$setSelected$ && (this.$_displayables$[$i$$141$$].$setSelected$($bSelected$$), this.$_updateAriaLabel$(this.$_displayables$[$i$$141$$]))
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$142$$ = 0;$i$$142$$ < this.$_displayables$.length;$i$$142$$++) {
    this.$_displayables$[$i$$142$$].$showHoverEffect$ && this.$_displayables$[$i$$142$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$143$$ = 0;$i$$143$$ < this.$_displayables$.length;$i$$143$$++) {
    this.$_displayables$[$i$$143$$].$hideHoverEffect$ && this.$_displayables$[$i$$143$$].$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$1$$ = [], $options$$36_shortDesc$$1$$ = this.$_chart$.$getOptions$();
  this.$isSelectable$() && $states$$1$$.push((0,D.$DvtBundle$getTranslation$$)($options$$36_shortDesc$$1$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", "DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$isDrillable$() && $states$$1$$.push((0,D.$DvtBundle$getTranslation$$)($options$$36_shortDesc$$1$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  $options$$36_shortDesc$$1$$ = D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, !1);
  null == $options$$36_shortDesc$$1$$ && (0 > this.$_groupIndex$ && 0 < $states$$1$$.length) && ($options$$36_shortDesc$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($options$$36_shortDesc$$1$$, $states$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$($displayable$$8$$) {
  (0,D.$DvtAgent$deferAriaCreation$$)() || $displayable$$8$$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($chart$$inline_2017_event$$137$$) {
  var $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$, $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$;
  $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$ = $chart$$inline_2017_event$$137$$.keyCode;
  if($chart$$inline_2017_event$$137$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$ && $chart$$inline_2017_event$$137$$.ctrlKey) {
    return this
  }
  $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$ = this.$_chart$;
  for(var $chartObjs_groupIndex$$inline_2020$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$11_keyCode$$13_seriesIndex$$inline_2019$$), $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ = [], $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ = 0;$groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ < $chartObjs_groupIndex$$inline_2020$$.length;$groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$++) {
    $chartObjs_groupIndex$$inline_2020$$[$groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$].$isNavigable$() && $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$.push($chartObjs_groupIndex$$inline_2020$$[$groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$])
  }
  if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$11_keyCode$$13_seriesIndex$$inline_2019$$)) {
    $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $chart$$inline_2017_event$$137$$, $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isLineArea$($chart$$11_keyCode$$13_seriesIndex$$inline_2019$$) || D.$DvtChartTypeUtils$$.$isStacked$($chart$$11_keyCode$$13_seriesIndex$$inline_2019$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$11_keyCode$$13_seriesIndex$$inline_2019$$)) {
      $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ = $chart$$inline_2017_event$$137$$.keyCode;
      $chart$$inline_2017_event$$137$$ = this.$_chart$;
      var $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ = $chart$$inline_2017_event$$137$$.$getCtx$();
      $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$ = this.$getSeriesIndex$();
      var $chartObjs_groupIndex$$inline_2020$$ = this.$getGroupIndex$(), $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$inline_2017_event$$137$$), $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$, $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$inline_2017_event$$137$$), $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ = 
      D.$DvtChartTypeUtils$$.$isPolar$($chart$$inline_2017_event$$137$$), $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$), $isDown$$inline_2027$$ = $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ ? $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ ? 39 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ : 
      37 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ : 40 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$, $isLeft$$inline_2028$$ = $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ ? 38 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ : $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ ? 39 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ : 
      37 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$, $isRight$$inline_2029$$ = $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ ? 40 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ : $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ ? 37 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ : 39 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$;
      if($i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ ? $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ ? 37 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ : 39 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ : 38 == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$) {
        $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = $chartObjs_groupIndex$$inline_2020$$;
        $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_2017_event$$137$$);
        $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2017_event$$137$$, $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$, $chartObjs_groupIndex$$inline_2020$$);
        $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ = $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ = null;
        for($i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ = 0;$i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ < $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$;$i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$++) {
          if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_2017_event$$137$$, $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$) && ($context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2017_event$$137$$, $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$, $chartObjs_groupIndex$$inline_2020$$), $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ > $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ || 
          $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ && $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ > $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$)) {
            if(null !== $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ && $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$ < $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ || null == $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$) {
              $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ = $context$$inline_2018_isRTL$$inline_2026_itemValue$$inline_9740$$, $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ = $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$
            }
          }
        }
        $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$ = $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$
      }else {
        if($isDown$$inline_2027$$) {
          $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = $chartObjs_groupIndex$$inline_2020$$;
          $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_2017_event$$137$$);
          $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2017_event$$137$$, $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$, $chartObjs_groupIndex$$inline_2020$$);
          $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ = $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ = null;
          for($i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ -= 1;0 <= $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$;$i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$--) {
            if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_2017_event$$137$$, $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$) && ($i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2017_event$$137$$, $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$, $chartObjs_groupIndex$$inline_2020$$), $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ < 
            $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$ || $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ == $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$ && $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$ < $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$)) {
              if(null !== $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ && $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ > $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ || null == $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$) {
                $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$ = $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$, $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ = $i$$inline_9749_isHoriz$$inline_2024_nextSeriesIndex$$inline_9738_seriesCount$$inline_9745$$
              }
            }
          }
          $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$ = $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$
        }else {
          if($isRight$$inline_2029$$) {
            $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$ = $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$;
            $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = $chartObjs_groupIndex$$inline_2020$$;
            do {
              $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$++, $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ && $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ >= $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ && ($next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = 0)
            }while(null == (0,D.$JSCompiler_StaticMethods_getObject$$)($chart$$inline_2017_event$$137$$, $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$, $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$) && $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ < $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$)
          }else {
            if($isLeft$$inline_2028$$) {
              $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$ = $chart$$11_keyCode$$13_seriesIndex$$inline_2019$$;
              $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = $chartObjs_groupIndex$$inline_2020$$;
              do {
                $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$--, $i$$inline_9739_isPolar$$inline_2025_itemValue$$inline_9750$$ && 0 > $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ && ($next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = $groupCount$$inline_2021_i$$144_nextSeriesIndex$$inline_9748_nextValue$$inline_9737$$ - 1)
              }while(null == (0,D.$JSCompiler_StaticMethods_getObject$$)($chart$$inline_2017_event$$137$$, $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$, $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$) && -1 < $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$)
            }
          }
        }
      }
      $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = ($next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = (0,D.$JSCompiler_StaticMethods_getObject$$)($chart$$inline_2017_event$$137$$, $currentValue$$inline_9746_nextSeriesIndex$$inline_2022_seriesCount$$inline_9735$$, $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$)) && $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$.$isNavigable$() ? $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ : this
    }else {
      D.$DvtChartTypeUtils$$.$isFunnel$($chart$$11_keyCode$$13_seriesIndex$$inline_2019$$) && (38 == $chart$$inline_2017_event$$137$$.keyCode || 40 == $chart$$inline_2017_event$$137$$.keyCode) ? ($chart$$inline_2017_event$$137$$.keyCode -= 1, $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_2017_event$$137$$, $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$)) : $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$ = 
      (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_2017_event$$137$$, $currentValue$$inline_9736_keyCode$$inline_2016_navigables$$4_nextValue$$inline_9747$$, !0)
    }
  }
  return $next_nextGroupIndex$$inline_2023_nextObj$$inline_2030$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$4$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$4$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : null
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = !0, this.$showHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = !1, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$isNavigable$ = function $$JSCompiler_prototypeAlias$$$$isNavigable$$() {
  return-1 != this.$getGroupIndex$() && -1 != this.$getSeriesIndex$()
};
D.$DvtRefObjPeer$$ = function $$DvtRefObjPeer$$$($chart$$17$$, $displayables$$2$$, $refObj$$, $index$$129$$, $axisType$$2$$) {
  this.Init($chart$$17$$, $displayables$$2$$, $refObj$$, $index$$129$$, $axisType$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjPeer$$, D.$DvtObj$$, "DvtRefObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRefObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($chart$$18_i$$153$$, $displayables$$3$$, $refObj$$1$$, $displayable$$9_index$$130$$, $axisType$$3$$) {
  this.$_chart$ = $chart$$18_i$$153$$;
  this.$_displayables$ = $displayables$$3$$;
  this.$_refObj$ = $refObj$$1$$;
  this.$_categories$ = D.$DvtChartRefObjUtils$$.$getRefObjCategories$(this.$_refObj$);
  this.$_index$ = $displayable$$9_index$$130$$;
  this.$_axisType$ = $axisType$$3$$;
  for($chart$$18_i$$153$$ = 0;$chart$$18_i$$153$$ < $displayables$$3$$.length;$chart$$18_i$$153$$++) {
    $displayable$$9_index$$130$$ = $displayables$$3$$[$chart$$18_i$$153$$], $displayable$$9_index$$130$$.$setAriaRole$("img"), $displayable$$9_index$$130$$.$setAriaProperty$("label", $refObj$$1$$.shortDesc)
  }
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return D.$DvtChartTooltipUtils$$.$getRefObjTooltip$(this.$_chart$, this.$_refObj$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtChartRefObjUtils$$.$getColor$(this.$_refObj$)
};
D.$DvtChartDataItem$$ = function $$DvtChartDataItem$$$($id$$25$$, $series$$3$$, $group$$10$$) {
  this.Init($id$$25$$, $series$$3$$, $group$$10$$)
};
(0,D.$goog$exportPath_$$)("DvtChartDataItem", D.$DvtChartDataItem$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataItem$$, D.$DvtObj$$, "DvtChartDataItem");
D.$DvtChartDataItem$$.prototype.Init = function $$DvtChartDataItem$$$$Init$($id$$26$$, $series$$4$$, $group$$11$$) {
  this.$_id$ = $id$$26$$;
  this.$_series$ = $series$$4$$;
  this.$_group$ = $group$$11$$
};
D.$DvtChartDataItem$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtChartDataItem$$.prototype.getId = D.$DvtChartDataItem$$.prototype.getId;
D.$DvtChartDataItem$$.prototype.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$DvtChartDataItem$$.prototype.getSeries = D.$DvtChartDataItem$$.prototype.$getSeries$;
D.$DvtChartDataItem$$.prototype.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$DvtChartDataItem$$.prototype.getGroup = D.$DvtChartDataItem$$.prototype.$getGroup$;
D.$DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dataItem$$1$$) {
  if($dataItem$$1$$ instanceof D.$DvtChartDataItem$$) {
    var $group$$12$$ = $dataItem$$1$$.$getGroup$();
    return this.$_group$ instanceof window.Array && $group$$12$$ instanceof window.Array ? D.$DvtArrayUtils$$.$equals$(this.$_group$, $group$$12$$) && this.$_series$ === $dataItem$$1$$.$getSeries$() : this.$_group$ === $group$$12$$ && this.$_series$ === $dataItem$$1$$.$getSeries$()
  }
  return!1
};
D.$DvtChartDefaults$$ = function $$DvtChartDefaults$$$() {
  this.Init({skyros:D.$DvtChartDefaults$VERSION_1$$, alta:D.$DvtChartDefaults$SKIN_ALTA$$, next:D.$DvtChartDefaults$SKIN_NEXT$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtChartDefaults");
D.$DvtChartDefaults$SKIN_NEXT$$ = {skin:"next", styleDefaults:{dataItemGaps:"auto", markerSize:10, marqueeColor:"rgba(255,255,255,0.4)", marqueeBorderColor:"#0572ce"}, yAxis:{axisLine:{rendered:"auto"}}, y2Axis:{axisLine:{rendered:"auto"}}, layout:{titlePlotAreaGap:16, footnoteGap:10, legendGapWidth:15, legendGapHeight:10, tickLabelGapHeight:8, tickLabelGapWidth:9}};
D.$DvtChartDefaults$SKIN_ALTA$$ = {skin:"alta", title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;")}, subtitle:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #252525;")}, footnote:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, _statusMessageStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"), 
styleDefaults:{seriesEffect:"color", colors:D.$DvtCSSStyle$COLORS_ALTA$$, pieCenterLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, dataLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), stackLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), stockRisingColor:"#6b6f74", stockFallingColor:"#ED6647"}};
D.$DvtChartDefaults$VERSION_1$$ = {skin:"skyros", emptyText:null, type:"bar", stack:"off", stackLabel:"off", orientation:"vertical", polarGridShape:"circle", selectionMode:"none", hideAndShowBehavior:"none", hoverBehavior:"none", zoomAndScroll:"off", zoomDirection:"auto", initialZooming:"none", dragMode:"user", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", __sparkBarSpacing:"subpixel", __spark:!1, dataCursor:"auto", dataCursorBehavior:"auto", drilling:"off", 
highlightMatch:"all", series:[], groups:[], title:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b; font-weight: bold"), halign:"start"}, subtitle:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;")}, footnote:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 10px; color: #333333;"), halign:"start"}, titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, touchResponse:"auto", 
_statusMessageStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b; font-weight: bold"), xAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33}, yAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33}, y2Axis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, 
axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33, alignTickMarks:"on"}, plotArea:{backgroundColor:null}, legend:{position:"auto", rendered:"on", maxSize:0.3, layout:{gapRatio:1}, seriesSection:{}, referenceObjectSection:{}, sections:[]}, overview:{rendered:"off"}, styleDefaults:{colors:D.$DvtCSSStyle$COLORS_SKYROS$$, borderColor:"auto", borderWidth:"auto", patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), 
shapes:"square circle diamond plus triangleDown triangleUp".split(" "), seriesEffect:"gradient", threeDEffect:"off", selectionEffect:"highlight", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:null, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", marqueeBorderColor:"rgba(0,0,0,0.2)", pieFeelerColor:"#BAC5D6", pieInnerRadius:0, selectedInnerColor:"#ffffff", 
selectedOuterColor:"#5a5a5a", pieCenterLabel:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;")}, sliceLabelType:"percent", otherColor:"#4b4b4b", stockRisingColor:"#006666", stockFallingColor:"#CC3300", stockRangeColor:"#B8B8B8", dataItemGaps:"0%", dataLabelStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px;"), dataLabelPosition:"auto", funnelBackgroundColor:"#EDEDED", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, 
_scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E", hoverBehaviorDelay:200, dataCursor:{markerSize:8, markerDisplayed:"on", lineColor:"#5a5a5a", lineWidth:2, lineStyle:"solid"}, groupSeparators:{rendered:"on", color:"rgba(138,141,172,0.4)"}, padding:"auto", _tooltipStyle:new D.$DvtCSSStyle$$("border-collapse: separate; border-spacing: 2px"), tooltipLabelStyle:new D.$DvtCSSStyle$$("color: #737373; padding: 0px 2px"), tooltipValueStyle:new D.$DvtCSSStyle$$("color: #333333; padding: 0px 2px"), 
stackLabelStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px;")}, layout:{gapWidthRatio:null, gapHeightRatio:null, outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendGapWidth:10, legendGapHeight:10, tickLabelGapHeight:5, tickLabelGapWidth:7}, _locale:"en-us", _resources:{}};
D.$DvtChartDefaults$getGapHeight$$ = function $$DvtChartDefaults$getGapHeight$$$($chart$$2$$, $defaultHeight$$1$$) {
  return window.Math.ceil($defaultHeight$$1$$ * (0,D.$JSCompiler_StaticMethods_getGapHeightRatio$$)($chart$$2$$))
};
D.$DvtDataCursorHandler$$ = function $$DvtDataCursorHandler$$$($chart$$15$$, $dataCursor$$) {
  this.Init($chart$$15$$, $dataCursor$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursorHandler$$, D.$DvtObj$$, "DvtDataCursorHandler");
D.$DvtDataCursorHandler$$.prototype.Init = function $$DvtDataCursorHandler$$$$Init$($chart$$16$$, $dataCursor$$1$$) {
  this.$_context$ = $chart$$16$$.$getCtx$();
  this.$_dataCursorShown$ = !1;
  this.$_dataCursor$ = $dataCursor$$1$$;
  this.$_chart$ = $chart$$16$$
};
D.$JSCompiler_StaticMethods_processMove$$ = function $$JSCompiler_StaticMethods_processMove$$$($JSCompiler_StaticMethods_processMove$self$$, $pos$$7_y$$inline_2107$$, $bSuppressEvent_values$$inline_2117$$) {
  var $plotRect$$ = $JSCompiler_StaticMethods_processMove$self$$.$_chart$.$_plotAreaSpace$;
  if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($plotRect$$, $pos$$7_y$$inline_2107$$.x, $pos$$7_y$$inline_2107$$.y)) {
    var $x$$inline_2106$$ = $pos$$7_y$$inline_2107$$.x;
    $pos$$7_y$$inline_2107$$ = $pos$$7_y$$inline_2107$$.y;
    if((0,D.$JSCompiler_StaticMethods_isOffscreen$$)($JSCompiler_StaticMethods_processMove$self$$.$_context$)) {
      (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2117$$)
    }else {
      var $dataCursor$$inline_2109$$ = $JSCompiler_StaticMethods_processMove$self$$.$_dataCursor$, $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$, $centerPoint$$inline_2111_horizontal$$inline_9784$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods_processMove$self$$.$_chart$), $closestMatch$$inline_9801_tooltipText$$inline_2114_useAllInGroup$$inline_9785$$ = D.$DvtChartTypeUtils$$.$isLineArea$($JSCompiler_StaticMethods_processMove$self$$.$_chart$) && 
      !D.$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods_processMove$self$$.$_chart$), $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$ = $JSCompiler_StaticMethods_processMove$self$$.$_findMatches$(), $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$;
      $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$ = window.Infinity;
      $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ = [];
      for(var $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$ = 0;$closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$ < $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$.length;$closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$++) {
        var $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$ = $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$[$closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$], $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$ = window.Math.round(window.Math.abs((($centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$.$matchRegion$.y : $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$.$matchRegion$.x) + 
        ($centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$.$matchRegion$.y + $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$.$matchRegion$.$h$ : $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$.$matchRegion$.x + $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$.$matchRegion$.$w$)) / 2 - ($centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $pos$$7_y$$inline_2107$$ : $x$$inline_2106$$)));
        $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$ <= $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$ && ($closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$ < $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$ && ($closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ = []), $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$.push($diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$), 
        $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$ = $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$)
      }
      $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$ = $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$;
      if(!D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods_processMove$self$$.$_chart$)) {
        $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ = window.Infinity;
        $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$ = -window.Infinity;
        $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$ = null;
        for($diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$ = 0;$diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$ < $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$.length;$diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$++) {
          $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$ = $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$[$diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$], $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ = window.Math.min($closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$, 
          $centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$.$matchRegion$.x), $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$ = window.Math.max($closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$, $centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$.$matchRegion$.y + 
          $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$.$matchRegion$.$w$), $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$ = $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$.$gidx$
        }
        for($diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$ = 0;$diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$ < $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$.length;$diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$++) {
          var $match$$inline_9798$$ = $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$[$diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$], $itemGroup$$inline_9799_midPoint$$inline_9800$$ = $match$$inline_9798$$.$gidx$;
          $closestMatch$$inline_9801_tooltipText$$inline_2114_useAllInGroup$$inline_9785$$ ? $closestFirstDirectionMatch$$inline_9797_closestGroup$$inline_9795_diffValue$$inline_9792$$ == $itemGroup$$inline_9799_midPoint$$inline_9800$$ && $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$.push($match$$inline_9798$$) : ($itemGroup$$inline_9799_midPoint$$inline_9800$$ = (($centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $match$$inline_9798$$.$matchRegion$.y : $match$$inline_9798$$.$matchRegion$.x) + 
          ($centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $match$$inline_9798$$.$matchRegion$.y + $match$$inline_9798$$.$matchRegion$.$h$ : $match$$inline_9798$$.$matchRegion$.x + $match$$inline_9798$$.$matchRegion$.$w$)) / 2, $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$ >= $itemGroup$$inline_9799_midPoint$$inline_9800$$ && $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ <= 
          $itemGroup$$inline_9799_midPoint$$inline_9800$$ && $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$.push($match$$inline_9798$$))
        }
      }
      $closestMatch$$inline_9801_tooltipText$$inline_2114_useAllInGroup$$inline_9785$$ = null;
      $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$ = window.Infinity;
      for($closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ = 0;$closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ < $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$.length;$closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$++) {
        $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$ = $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$[$closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$], $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$ = window.Math.round(window.Math.abs((($centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$.$matchRegion$.x : 
        $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$.$matchRegion$.y) + ($centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$.$matchRegion$.x + $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$.$matchRegion$.$w$ : $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$.$matchRegion$.y + $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$.$matchRegion$.$h$)) / 
        2 - ($centerPoint$$inline_2111_horizontal$$inline_9784$$ ? $x$$inline_2106$$ : $pos$$7_y$$inline_2107$$))), $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$ < $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$ && ($dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$ = $diffValue$$inline_9805_i$$inline_9796_matchObj$$inline_9791$$, $closestMatch$$inline_9801_tooltipText$$inline_2114_useAllInGroup$$inline_9785$$ = 
        $closestHigherBound$$inline_9794_i$$inline_9790_match$$inline_9804$$)
      }
      $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ = $closestMatch$$inline_9801_tooltipText$$inline_2114_useAllInGroup$$inline_9785$$;
      null == $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2117$$) : ($centerPoint$$inline_2111_horizontal$$inline_9784$$ = D.$DvtGeomUtils$$.$getCenterPoint$($closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$.$matchRegion$), 
      $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$ = $x$$inline_2106$$, $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$ = $pos$$7_y$$inline_2107$$, "SNAP" == ($dataCursor$$inline_2109$$.$_behavior$ ? $dataCursor$$inline_2109$$.$_behavior$ : "AUTO") && ($dataCursor$$inline_2109$$.$isHorizontal$() ? $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$ = window.Math.min(window.Math.max($centerPoint$$inline_2111_horizontal$$inline_9784$$.y, 
      $plotRect$$.y), $plotRect$$.y + $plotRect$$.$h$) : $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$ = window.Math.min(window.Math.max($centerPoint$$inline_2111_horizontal$$inline_9784$$.x, $plotRect$$.x), $plotRect$$.x + $plotRect$$.$w$)), $closestMatch$$inline_9801_tooltipText$$inline_2114_useAllInGroup$$inline_9785$$ = D.$DvtChartTooltipUtils$$.$getDatatip$($JSCompiler_StaticMethods_processMove$self$$.$_chart$, $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$.$sidx$, 
      $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$.$gidx$, !0), null == $closestMatch$$inline_9801_tooltipText$$inline_2114_useAllInGroup$$inline_9785$$ ? $dataCursor$$inline_2109$$.$setVisible$(!1) : ($dataCursor$$inline_2109$$.$setVisible$(!0), $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$ = D.$DvtChartTooltipUtils$$.$getDatatipColor$($JSCompiler_StaticMethods_processMove$self$$.$_chart$, 
      $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$.$sidx$, $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$.$gidx$), $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$ = $dataCursor$$inline_2109$$.$isHorizontal$() ? $dcY$$inline_2113_matchesInBounds$$inline_9787_minDiff$$inline_9788$$ : 
      $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$, $dataCursor$$inline_2109$$.$render$($plotRect$$, $centerPoint$$inline_2111_horizontal$$inline_9784$$.x, $centerPoint$$inline_2111_horizontal$$inline_9784$$.y, $dcX$$inline_2112_lineCoord$$inline_2116_matches$$inline_9786_minDiff$$inline_9802$$, $closestMatch$$inline_9801_tooltipText$$inline_2114_useAllInGroup$$inline_9785$$, $closestFirstDirectionMatches$$inline_9789_closestLowerBound$$inline_9793_closestMatch$$inline_2110_i$$inline_9803_seriesColor$$inline_2115$$), 
      $JSCompiler_StaticMethods_processMove$self$$.$_dataCursorShown$ = !0, $bSuppressEvent_values$$inline_2117$$ || ($bSuppressEvent_values$$inline_2117$$ = $JSCompiler_StaticMethods_processMove$self$$.$_chart$.$getValuesAt$($x$$inline_2106$$, $pos$$7_y$$inline_2107$$), (0,D.$JSCompiler_StaticMethods_changeOption$$)($JSCompiler_StaticMethods_processMove$self$$.$_chart$, $bSuppressEvent_values$$inline_2117$$))))
    }
  }else {
    (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2117$$)
  }
};
D.$JSCompiler_StaticMethods__removeDataCursor$$ = function $$JSCompiler_StaticMethods__removeDataCursor$$$($JSCompiler_StaticMethods__removeDataCursor$self$$, $bSuppressEvent$$4$$) {
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$_bVisible$ && $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$setVisible$(!1);
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_context$.$getTooltipManager$("_dvtDataCursor").$hideTooltip$();
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursorShown$ = !1;
  $bSuppressEvent$$4$$ || (0,D.$JSCompiler_StaticMethods_changeOption$$)($JSCompiler_StaticMethods__removeDataCursor$self$$.$_chart$, null)
};
D.$DvtDataCursorHandler$$.prototype.$_findMatches$ = function $$DvtDataCursorHandler$$$$$_findMatches$$() {
  var $stage$$5$$ = this.$_context$.$_stage$, $eventManager$$5$$ = this.$_chart$.$getEventManager$(), $matches$$2$$ = [];
  if(!this.$_chart$.$_currentMarkers$) {
    return null
  }
  for(var $i$$151$$ = 0;$i$$151$$ < this.$_chart$.$_currentMarkers$.length;$i$$151$$++) {
    for(var $markers$$ = this.$_chart$.$_currentMarkers$[$i$$151$$], $numMarkers$$ = $markers$$.length, $idx$$2$$ = 0;$idx$$2$$ < $numMarkers$$;$idx$$2$$++) {
      var $item$$2_match$$2$$ = $markers$$[$idx$$2$$], $logicalObject$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($eventManager$$5$$, $item$$2_match$$2$$), $dims$$6$$ = $item$$2_match$$2$$.$getDimensionsSelf$ ? $item$$2_match$$2$$.$getDimensionsSelf$($stage$$5$$) : $item$$2_match$$2$$.$getDimensions$($stage$$5$$), $item$$2_match$$2$$ = {$obj$:$item$$2_match$$2$$, $matchRegion$:$dims$$6$$, $gidx$:$logicalObject$$1$$.$getGroupIndex$(), $sidx$:$logicalObject$$1$$.$getSeriesIndex$(), $marker$:null};
      $matches$$2$$.push($item$$2_match$$2$$)
    }
  }
  return $matches$$2$$
};
D.$DvtSelectableWedge$$ = function $$DvtSelectableWedge$$$($cmds$$inline_2412_context$$57$$, $cx$$7$$, $cy$$8$$, $rx$$1$$, $ry$$1$$, $sa$$1$$, $ae$$1$$, $gap$$16$$, $ir$$2$$, $id$$31$$) {
  this.Init($cmds$$inline_2412_context$$57$$, null, $id$$31$$);
  this.$_cx$ = $cx$$7$$;
  this.$_cy$ = $cy$$8$$;
  this.$_rx$ = $rx$$1$$;
  this.$_ry$ = $ry$$1$$;
  this.$_sa$ = $sa$$1$$;
  this.$_ae$ = $ae$$1$$;
  this.$_gap$ = $gap$$16$$;
  this.$_ir$ = $ir$$2$$;
  $cmds$$inline_2412_context$$57$$ = (0,D.$JSCompiler_StaticMethods__makeWedgePath$$)(this, 0);
  this.$setCmds$($cmds$$inline_2412_context$$57$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSelectableWedge$$, D.$DvtPath$$, "DvtSelectableWedge");
D.$DvtSelectableWedge$$.prototype.Init = function $$DvtSelectableWedge$$$$Init$($context$$58$$, $cmds$$8$$, $id$$32$$) {
  D.$DvtSelectableWedge$$.$superclass$.Init.call(this, $context$$58$$, $cmds$$8$$, $id$$32$$)
};
D.$JSCompiler_StaticMethods__makeWedgePath$$ = function $$JSCompiler_StaticMethods__makeWedgePath$$$($JSCompiler_StaticMethods__makeWedgePath$self$$, $inset$$2$$) {
  var $rx$$3$$ = window.Math.max($JSCompiler_StaticMethods__makeWedgePath$self$$.$_rx$ - $inset$$2$$, 0), $ry$$3$$ = window.Math.max($JSCompiler_StaticMethods__makeWedgePath$self$$.$_ry$ - $inset$$2$$, 0), $ir$$4$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ir$ ? $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ir$ + $inset$$2$$ : 0, $angleExtentRads$$ = 360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? D.$DvtMath$$.$degreesToRads$(359.99) : D.$DvtMath$$.$degreesToRads$($JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$), 
  $pathCommands$$1_startAngleRads$$ = D.$DvtMath$$.$degreesToRads$($JSCompiler_StaticMethods__makeWedgePath$self$$.$_sa$), $dataItemGaps_innerPointY$$ = (360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ || $rx$$3$$ < $inset$$2$$ ? 0 : $JSCompiler_StaticMethods__makeWedgePath$self$$.$_gap$ + 2 * $inset$$2$$) / 2, $arcPoint2Y_gapAngle$$ = $dataItemGaps_innerPointY$$ < $rx$$3$$ ? window.Math.asin($dataItemGaps_innerPointY$$ / $rx$$3$$) : 0, $arcPointX_centerLineAngle$$ = -$angleExtentRads$$ / 
  2 - $pathCommands$$1_startAngleRads$$, $arcPointY_distanceToStartPointX$$ = window.Math.min(5 * $dataItemGaps_innerPointY$$, 0 < $angleExtentRads$$ ? window.Math.abs($dataItemGaps_innerPointY$$ / window.Math.sin($angleExtentRads$$ / 2)) : 0), $innerPointX_startPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + window.Math.cos($arcPointX_centerLineAngle$$) * $arcPointY_distanceToStartPointX$$, $innerPoint2X_startPointY$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin($arcPointX_centerLineAngle$$) * 
  (0 == $rx$$3$$ ? $arcPointY_distanceToStartPointX$$ : $arcPointY_distanceToStartPointX$$ * $ry$$3$$ / $rx$$3$$), $arcPointX_centerLineAngle$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + window.Math.cos(-$arcPoint2Y_gapAngle$$ - $pathCommands$$1_startAngleRads$$) * $rx$$3$$, $arcPointY_distanceToStartPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin(-$arcPoint2Y_gapAngle$$ - $pathCommands$$1_startAngleRads$$) * $ry$$3$$, $arcPoint2X$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + 
  window.Math.cos(-$pathCommands$$1_startAngleRads$$ - $angleExtentRads$$ + $arcPoint2Y_gapAngle$$) * $rx$$3$$, $arcPoint2Y_gapAngle$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin(-$pathCommands$$1_startAngleRads$$ - $angleExtentRads$$ + $arcPoint2Y_gapAngle$$) * $ry$$3$$;
  if(0 < $ir$$4$$) {
    var $innerGapAngle_innerPoint2Y$$ = $dataItemGaps_innerPointY$$ < $ir$$4$$ ? window.Math.asin($dataItemGaps_innerPointY$$ / $ir$$4$$) : 0, $innerPointX_startPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + window.Math.cos(-$innerGapAngle_innerPoint2Y$$ - $pathCommands$$1_startAngleRads$$) * $ir$$4$$, $dataItemGaps_innerPointY$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin(-$innerGapAngle_innerPoint2Y$$ - $pathCommands$$1_startAngleRads$$) * $ir$$4$$, 
    $innerPoint2X_startPointY$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + window.Math.cos(-$pathCommands$$1_startAngleRads$$ - $angleExtentRads$$ + $innerGapAngle_innerPoint2Y$$) * $ir$$4$$, $innerGapAngle_innerPoint2Y$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + window.Math.sin(-$pathCommands$$1_startAngleRads$$ - $angleExtentRads$$ + $innerGapAngle_innerPoint2Y$$) * $ir$$4$$;
    360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? ($pathCommands$$1_startAngleRads$$ = D.$DvtPathUtils$$.moveTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($rx$$3$$, $ry$$3$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.moveTo($innerPointX_startPointX$$, 
    $dataItemGaps_innerPointY$$)) : ($pathCommands$$1_startAngleRads$$ = D.$DvtPathUtils$$.moveTo($innerPoint2X_startPointY$$, $innerGapAngle_innerPoint2Y$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($rx$$3$$, $ry$$3$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($innerPointX_startPointX$$, 
    $dataItemGaps_innerPointY$$));
    $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($ir$$4$$, $ir$$4$$, $angleExtentRads$$, 0, $innerPoint2X_startPointY$$, $innerGapAngle_innerPoint2Y$$)
  }else {
    360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? ($pathCommands$$1_startAngleRads$$ = D.$DvtPathUtils$$.moveTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($rx$$3$$, $ry$$3$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$)) : ($pathCommands$$1_startAngleRads$$ = D.$DvtPathUtils$$.moveTo($innerPointX_startPointX$$, $innerPoint2X_startPointY$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($arcPoint2X$$, 
    $arcPoint2Y_gapAngle$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.arcTo($rx$$3$$, $ry$$3$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.lineTo($innerPointX_startPointX$$, $innerPoint2X_startPointY$$))
  }
  return $pathCommands$$1_startAngleRads$$ += D.$DvtPathUtils$$.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSelectableWedge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  var $innerChildCmds_outerBorderWidth$$2$$ = this.$isSelected$() ? 2 : 1.25, $outerChildCmds$$ = (0,D.$JSCompiler_StaticMethods__makeWedgePath$$)(this, $innerChildCmds_outerBorderWidth$$2$$), $innerChildCmds_outerBorderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods__makeWedgePath$$)(this, $innerChildCmds_outerBorderWidth$$2$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setCmds$($outerChildCmds$$), this.$InnerChild$.$setCmds$($innerChildCmds_outerBorderWidth$$2$$)) : (this.$OuterChild$ = new D.$DvtPath$$(this.$getCtx$(), $outerChildCmds$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$), this.$OuterChild$.$setMouseEnabled$(!0), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new D.$DvtPath$$(this.$getCtx$(), $innerChildCmds_outerBorderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$), 
  this.$InnerChild$.$setMouseEnabled$(!0), this.$addChild$(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$_showNestedBorders$ = function $$JSCompiler_prototypeAlias$$$$_showNestedBorders$$($outerBorderColor$$1$$, $innerBorderColor$$1$$) {
  this.$_initializeSelectionEffects$();
  $innerBorderColor$$1$$ ? (this.$setSolidFill$($outerBorderColor$$1$$), this.$setStroke$(null), this.$OuterChild$.$setSolidFill$($innerBorderColor$$1$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($outerBorderColor$$1$$ ? (this.$setSolidFill$($outerBorderColor$$1$$), this.$setStroke$(null), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_shapeStroke$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$11$$, $stroke$$19$$, $dataColor$$11$$, $innerColor$$8$$, $outerColor$$9$$) {
  this.$_fill$ = $fill$$11$$;
  this.$_shapeStroke$ = $stroke$$19$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$11$$);
  this.$_innerColor$ = $innerColor$$8$$;
  this.$_outerColor$ = $outerColor$$9$$;
  this.$setFill$($fill$$11$$);
  $stroke$$19$$ && this.$setStroke$($stroke$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = !0;
  this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = !1;
  this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$10$$) {
  this.$IsSelected$ != $selected$$10$$ && (this.$IsSelected$ = $selected$$10$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$())
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtSelectableRectangularPolygon$$ = function $$DvtSelectableRectangularPolygon$$$($context$$56$$, $arPoints$$1$$, $id$$30$$) {
  this.$_x1$ = window.Math.min($arPoints$$1$$[0], $arPoints$$1$$[4]);
  this.$_x2$ = window.Math.max($arPoints$$1$$[0], $arPoints$$1$$[4]);
  this.$_y1$ = window.Math.min($arPoints$$1$$[1], $arPoints$$1$$[5]);
  this.$_y2$ = window.Math.max($arPoints$$1$$[1], $arPoints$$1$$[5]);
  this.Init($context$$56$$, [this.$_x1$, this.$_y1$, this.$_x2$, this.$_y1$, this.$_x2$, this.$_y2$, this.$_x1$, this.$_y2$], $id$$30$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSelectableRectangularPolygon$$, D.$DvtPolygon$$, "DvtSelectableRectangularPolygon");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSelectableRectangularPolygon$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$10$$, $stroke$$18$$, $dataColor$$10$$, $innerColor$$7$$, $outerColor$$8$$) {
  this.$_fill$ = $fill$$10$$;
  this.$_borderStroke$ = $stroke$$18$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$10$$);
  this.$_innerColor$ = $innerColor$$7$$;
  this.$_outerColor$ = $outerColor$$8$$;
  this.$setFill$($fill$$10$$);
  $stroke$$18$$ && this.$setStroke$($stroke$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$6$$) {
  this.$_x1$ = window.Math.min($ar$$6$$[0], $ar$$6$$[4]);
  this.$_x2$ = window.Math.max($ar$$6$$[0], $ar$$6$$[4]);
  this.$_y1$ = window.Math.min($ar$$6$$[1], $ar$$6$$[5]);
  this.$_y2$ = window.Math.max($ar$$6$$[1], $ar$$6$$[5]);
  this.$setPoints$($ar$$6$$);
  this.$_initializeSelectionEffects$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = !0;
  this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = !1;
  this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$9$$) {
  this.$IsSelected$ != $selected$$9$$ && (this.$IsSelected$ = $selected$$9$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$())
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getPrimaryFill$ = (0,D.$JSCompiler_get$$)("$_fill$");
D.$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  this.$setPoints$(this.$_createPointsArray$(this.$isSelected$() ? -1 : 0));
  var $innerChildPoints$$1_outerBorderWidth$$1$$ = this.$isSelected$() ? 1 : 1.25, $outerChildPoints$$1$$ = this.$_createPointsArray$($innerChildPoints$$1_outerBorderWidth$$1$$), $innerChildPoints$$1_outerBorderWidth$$1$$ = this.$_createPointsArray$($innerChildPoints$$1_outerBorderWidth$$1$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($outerChildPoints$$1$$), this.$InnerChild$.$setPoints$($innerChildPoints$$1_outerBorderWidth$$1$$)) : (this.$OuterChild$ = new D.$DvtPolygon$$(this.$getCtx$(), $outerChildPoints$$1$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$), this.$OuterChild$.$setMouseEnabled$(!0), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new D.$DvtPolygon$$(this.$getCtx$(), $innerChildPoints$$1_outerBorderWidth$$1$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$), 
  this.$InnerChild$.$setMouseEnabled$(!0), this.$addChild$(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$_showNestedBorders$ = function $$JSCompiler_prototypeAlias$$$$_showNestedBorders$$($outerBorderColor$$, $innerBorderColor$$) {
  this.$_initializeSelectionEffects$();
  $innerBorderColor$$ ? (this.$setSolidFill$($outerBorderColor$$), this.$setStroke$(null), this.$OuterChild$.$setSolidFill$($innerBorderColor$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($outerBorderColor$$ ? (this.$setSolidFill$($outerBorderColor$$), this.$setStroke$(null), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_borderStroke$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$_createPointsArray$ = function $$JSCompiler_prototypeAlias$$$$_createPointsArray$$($inset$$1_y2$$8$$) {
  var $x1$$16$$ = this.$_x1$ + $inset$$1_y2$$8$$, $x2$$14$$ = this.$_x2$ - $inset$$1_y2$$8$$, $y1$$10$$ = this.$_y1$ + $inset$$1_y2$$8$$;
  $inset$$1_y2$$8$$ = this.$_y2$ - $inset$$1_y2$$8$$;
  return[$x1$$16$$, $y1$$10$$, $x2$$14$$, $y1$$10$$, $x2$$14$$, $inset$$1_y2$$8$$, $x1$$16$$, $inset$$1_y2$$8$$]
};
D.$DvtChartAxis$$ = function $$DvtChartAxis$$$($context$$50$$, $callback$$44$$, $callbackObj$$7$$) {
  this.Init($context$$50$$, $callback$$44$$, $callbackObj$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxis$$, D.$DvtAxis$$, "DvtChartAxis");
D.$JSCompiler_StaticMethods_axisToPlotArea$$ = function $$JSCompiler_StaticMethods_axisToPlotArea$$$($JSCompiler_StaticMethods_axisToPlotArea$self$$, $coord$$21$$) {
  if("tangential" == $JSCompiler_StaticMethods_axisToPlotArea$self$$.$getOptions$().position) {
    return $coord$$21$$
  }
  if(null == $coord$$21$$) {
    return null
  }
  var $ret$$6$$ = $coord$$21$$ - (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_axisToPlotArea$self$$);
  return window.Math.round(10 * $ret$$6$$) / 10
};
D.$JSCompiler_StaticMethods_plotAreaToAxis$$ = function $$JSCompiler_StaticMethods_plotAreaToAxis$$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$, $coord$$22$$) {
  if("tangential" == $JSCompiler_StaticMethods_plotAreaToAxis$self$$.$getOptions$().position) {
    return $coord$$22$$
  }
  if(null == $coord$$22$$) {
    return null
  }
  var $ret$$7$$ = $coord$$22$$ + (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_plotAreaToAxis$self$$);
  return window.Math.round($ret$$7$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$linearToActual$ = function $$JSCompiler_prototypeAlias$$$$linearToActual$$($value$$93$$) {
  return this.$Info$.$linearToActual$($value$$93$$)
};
D.$JSCompiler_prototypeAlias$$.$actualToLinear$ = function $$JSCompiler_prototypeAlias$$$$actualToLinear$$($value$$94$$) {
  return this.$Info$.$actualToLinear$($value$$94$$)
};
D.$JSCompiler_prototypeAlias$$.$getValueAt$ = function $$JSCompiler_prototypeAlias$$$$getValueAt$$($coord$$23$$) {
  return this.$Info$.$getValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$23$$))
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$95$$) {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getCoordAt$($value$$95$$))
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$24$$) {
  return this.$Info$.$getBoundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$24$$))
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$96$$) {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBoundedCoordAt$($value$$96$$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$25$$) {
  return this.$Info$.$getUnboundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$25$$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$97$$) {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getUnboundedCoordAt$($value$$97$$))
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBaselineCoord$())
};
D.$JSCompiler_prototypeAlias$$.$getPosition$ = function $$JSCompiler_prototypeAlias$$$$getPosition$$() {
  return this.$getOptions$().position
};
D.$JSCompiler_StaticMethods_isGroupAxis$$ = function $$JSCompiler_StaticMethods_isGroupAxis$$$($JSCompiler_StaticMethods_isGroupAxis$self$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$self$$.$Info$ instanceof D.$DvtGroupAxisInfo$$
};
D.$DvtChartAxis$$.prototype.$getMajorTickCoords$ = function $$DvtChartAxis$$$$$getMajorTickCoords$$() {
  for(var $coords$$14$$ = this.$Info$ ? this.$Info$.$getMajorTickCoords$() : [], $i$$169$$ = 0;$i$$169$$ < $coords$$14$$.length;$i$$169$$++) {
    $coords$$14$$[$i$$169$$] = (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, $coords$$14$$[$i$$169$$])
  }
  return $coords$$14$$
};
D.$DvtChartAxis$$.prototype.$getMinorTickCoords$ = function $$DvtChartAxis$$$$$getMinorTickCoords$$() {
  for(var $coords$$15$$ = this.$Info$ ? this.$Info$.$getMinorTickCoords$() : [], $i$$170$$ = 0;$i$$170$$ < $coords$$15$$.length;$i$$170$$++) {
    $coords$$15$$[$i$$170$$] = (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, $coords$$15$$[$i$$170$$])
  }
  return $coords$$15$$
};
D.$DvtChartAxis$$.prototype.$getBaselineCoord$ = function $$DvtChartAxis$$$$$getBaselineCoord$$() {
  return(0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBaselineCoord$())
};
D.$JSCompiler_StaticMethods_getLinearViewportMin$$ = function $$JSCompiler_StaticMethods_getLinearViewportMin$$$($JSCompiler_StaticMethods_getLinearViewportMin$self$$) {
  return $JSCompiler_StaticMethods_getLinearViewportMin$self$$.$actualToLinear$($JSCompiler_StaticMethods_getLinearViewportMin$self$$.$Info$.$MinValue$)
};
D.$JSCompiler_StaticMethods_getLinearViewportMax$$ = function $$JSCompiler_StaticMethods_getLinearViewportMax$$$($JSCompiler_StaticMethods_getLinearViewportMax$self$$) {
  return $JSCompiler_StaticMethods_getLinearViewportMax$self$$.$actualToLinear$($JSCompiler_StaticMethods_getLinearViewportMax$self$$.$Info$.$MaxValue$)
};
D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$ = function $$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$$($JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$, $coord$$26$$) {
  return $JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$.$Info$.$actualToLinear$($JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$.$getUnboundedValueAt$($coord$$26$$))
};
D.$JSCompiler_StaticMethods_isFullViewport$$ = function $$JSCompiler_StaticMethods_isFullViewport$$$($JSCompiler_StaticMethods_isFullViewport$self$$) {
  return $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$MinValue$ == $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$GlobalMin$ && $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$MaxValue$ == $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$GlobalMax$
};
D.$JSCompiler_StaticMethods_getLeftOverflow$$ = function $$JSCompiler_StaticMethods_getLeftOverflow$$$($JSCompiler_StaticMethods_getLeftOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getLeftOverflow$self$$.$getCtx$()) ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getEndOverflow$() : $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getStartOverflow$()
};
D.$JSCompiler_StaticMethods_getRightOverflow$$ = function $$JSCompiler_StaticMethods_getRightOverflow$$$($JSCompiler_StaticMethods_getRightOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getRightOverflow$self$$.$getCtx$()) ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getStartOverflow$() : $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getEndOverflow$()
};
D.$DvtChartBar$$ = function $$DvtChartBar$$$($chart$$104$$, $axisCoord$$1$$, $baselineCoord$$3$$, $endCoord$$, $x1$$7$$, $x2$$5$$) {
  this.Init($chart$$104$$.$getCtx$());
  this.$_bHoriz$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$104$$);
  this.$_bStacked$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$104$$);
  this.$_barGapRatio$ = D.$DvtChartStyleUtils$$.$getBarGapRatio$($chart$$104$$);
  this.$_dataItemGaps$ = D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$104$$);
  this.$_axisCoord$ = $axisCoord$$1$$;
  this.$_setBarCoords$($baselineCoord$$3$$, $endCoord$$, $x1$$7$$, $x2$$5$$, !0)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartBar$$, D.$DvtSelectableRectangularPolygon$$, "DvtChartBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$3$$) {
  this.$IsSelected$ != $selected$$3$$ && (this.$IsSelected$ = $selected$$3$$, this.$isSelected$() ? (this.$_tempX1$ = this.$_x1$, this.$_tempX2$ = this.$_x2$, this.$_tempBaselineCoord$ = this.$_baselineCoord$, this.$_x1$ = this.$_origX1$, this.$_x2$ = this.$_origX2$, this.$_baselineCoord$ = this.$_origBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$)) : (this.$_x1$ = this.$_tempX1$, 
  this.$_x2$ = this.$_tempX2$, this.$_baselineCoord$ = this.$_tempBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : null)))
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($bFlip$$2$$) {
  return $bFlip$$2$$ ? this.$_bHoriz$ ? [this.$_x2$, this.$_x1$, this.$_baselineCoord$, this.$_endCoord$] : [this.$_x1$, this.$_x2$, this.$_endCoord$, this.$_baselineCoord$] : [this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$12$$, $indicator$$2$$) {
  this.$_setBarCoords$($params$$12$$[0], $params$$12$$[1], $params$$12$$[2], $params$$12$$[3], !1);
  if($indicator$$2$$) {
    var $indicatorPosition_x$$inline_2266$$, $widthCoord$$inline_2265_y$$inline_2267$$ = (this.$_x1$ + this.$_x2$) / 2, $lengthCoord$$inline_2269_midLength$$inline_2268$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + 8 : this.$_endCoord$ - 8;
    $indicatorPosition_x$$inline_2266$$ = this.$_bHoriz$ ? $lengthCoord$$inline_2269_midLength$$inline_2268$$ : $widthCoord$$inline_2265_y$$inline_2267$$;
    $widthCoord$$inline_2265_y$$inline_2267$$ = this.$_bHoriz$ ? $widthCoord$$inline_2265_y$$inline_2267$$ : $lengthCoord$$inline_2269_midLength$$inline_2268$$;
    $indicatorPosition_x$$inline_2266$$ = new D.$DvtPoint$$($indicatorPosition_x$$inline_2266$$, $widthCoord$$inline_2265_y$$inline_2267$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$2$$, $indicatorPosition_x$$inline_2266$$.x, $indicatorPosition_x$$inline_2266$$.y);
    $indicator$$2$$.$setAlpha$(1);
    $indicator$$2$$.getParent().$addChild$($indicator$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$30_nodePlayable$$19$$) {
  var $endState$$7$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
  $duration$$30_nodePlayable$$19$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$30_nodePlayable$$19$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$30_nodePlayable$$19$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$7$$);
  return $duration$$30_nodePlayable$$19$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$31_nodePlayable$$20$$) {
  var $endState$$8$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$31_nodePlayable$$20$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$31_nodePlayable$$20$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$31_nodePlayable$$20$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$8$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$31_nodePlayable$$20$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$31_nodePlayable$$20$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$32_nodePlayable$$21$$) {
  this.$setAlpha$(0);
  $duration$$32_nodePlayable$$21$$ = this.$getDisplayAnimation$($duration$$32_nodePlayable$$21$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$32_nodePlayable$$21$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$32_nodePlayable$$21$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$4_gapSize$$2$$, $barWidth$$2_endCoord$$1$$, $bStartsAtBaseline_x1$$8$$, $x2$$6$$, $bAdjustForGaps$$) {
  this.$_baselineCoord$ = $baselineCoord$$4_gapSize$$2$$;
  this.$_endCoord$ = $barWidth$$2_endCoord$$1$$;
  this.$_x1$ = $bStartsAtBaseline_x1$$8$$;
  this.$_x2$ = $x2$$6$$;
  this.$_origX1$ = this.$_x1$;
  this.$_origX2$ = this.$_x2$;
  this.$_origBaselineCoord$ = this.$_baselineCoord$;
  0 < this.$_dataItemGaps$ && ($bAdjustForGaps$$ && !this.$isSelected$()) && ($baselineCoord$$4_gapSize$$2$$ = window.Math.ceil(2 * this.$_dataItemGaps$), $barWidth$$2_endCoord$$1$$ = this.$_x2$ - this.$_x1$, $bStartsAtBaseline_x1$$8$$ = this.$_axisCoord$ == this.$_baselineCoord$, 5 <= window.Math.abs(this.$_baselineCoord$ - this.$_endCoord$) && (this.$_bStacked$ && !$bStartsAtBaseline_x1$$8$$) && (this.$_baselineCoord$ += this.$_endCoord$ > this.$_baselineCoord$ ? $baselineCoord$$4_gapSize$$2$$ : 
  -$baselineCoord$$4_gapSize$$2$$), 5 <= $barWidth$$2_endCoord$$1$$ && (1 == (0,D.$DvtAgent$getDevicePixelRatio$$)() && 0 < this.$_barGapRatio$ && 15 < $barWidth$$2_endCoord$$1$$ ? ((0,D.$DvtAgent$isPlatformGecko$$)() || (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this), this.$_x1$ = window.Math.round(this.$_x1$), this.$_x2$ = window.Math.round(this.$_x2$), this.$_origX1$ = this.$_x1$, this.$_origX2$ = this.$_x2$, this.$_x2$ -= $baselineCoord$$4_gapSize$$2$$) : (this.$_x1$ += $baselineCoord$$4_gapSize$$2$$ / 
  2, this.$_x2$ -= $baselineCoord$$4_gapSize$$2$$ / 2)));
  this.$setPoints$(this.$_createPointsArray$());
  this.$OuterChild$ && this.$OuterChild$.$setPoints$(this.$_createPointsArray$(2));
  this.$InnerChild$ && this.$InnerChild$.$setPoints$(this.$_createPointsArray$(3))
};
D.$JSCompiler_prototypeAlias$$.$_createPointsArray$ = function $$JSCompiler_prototypeAlias$$$$_createPointsArray$$($inset$$) {
  var $baselineCoord$$5$$ = this.$_baselineCoord$, $endCoord$$2$$ = this.$_endCoord$, $x1$$9$$ = this.$_x1$, $x2$$7$$ = this.$_x2$;
  if(0 < $inset$$) {
    if(window.Math.abs($x1$$9$$ - $x2$$7$$) < 2 * $inset$$ || window.Math.abs($baselineCoord$$5$$ - $endCoord$$2$$) < 2 * $inset$$) {
      return[]
    }
    $x1$$9$$ += $inset$$;
    $x2$$7$$ -= $inset$$;
    $endCoord$$2$$ < $baselineCoord$$5$$ ? ($baselineCoord$$5$$ -= $inset$$, $endCoord$$2$$ += $inset$$) : ($baselineCoord$$5$$ += $inset$$, $endCoord$$2$$ -= $inset$$)
  }
  return this.$_bHoriz$ ? [$endCoord$$2$$, $x1$$9$$, $endCoord$$2$$, $x2$$7$$, $baselineCoord$$5$$, $x2$$7$$, $baselineCoord$$5$$, $x1$$9$$] : [$x1$$9$$, $endCoord$$2$$, $x2$$7$$, $endCoord$$2$$, $x2$$7$$, $baselineCoord$$5$$, $x1$$9$$, $baselineCoord$$5$$]
};
D.$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  var $innerChildPoints_outerBorderWidth$$ = this.$isSelected$() ? 2 : 1.25, $outerChildPoints$$ = this.$_createPointsArray$($innerChildPoints_outerBorderWidth$$), $innerChildPoints_outerBorderWidth$$ = this.$_createPointsArray$($innerChildPoints_outerBorderWidth$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($outerChildPoints$$), this.$InnerChild$.$setPoints$($innerChildPoints_outerBorderWidth$$)) : (this.$OuterChild$ = new D.$DvtPolygon$$(this.$getCtx$(), $outerChildPoints$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$OuterChild$), this.$OuterChild$.$setMouseEnabled$(!0), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new D.$DvtPolygon$$(this.$getCtx$(), $innerChildPoints_outerBorderWidth$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$InnerChild$), 
  this.$InnerChild$.$setMouseEnabled$(!0), this.$addChild$(this.$InnerChild$))
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getBoundingBox$$() {
  var $x$$78$$ = window.Math.min(this.$_x2$, this.$_x1$), $y$$57$$ = window.Math.min(this.$_endCoord$, this.$_baselineCoord$), $w$$7$$ = window.Math.abs(this.$_x2$ - this.$_x1$), $h$$5$$ = window.Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
  return this.$_bHoriz$ ? new D.$DvtRectangle$$($y$$57$$, $x$$78$$, $h$$5$$, $w$$7$$) : new D.$DvtRectangle$$($x$$78$$, $y$$57$$, $w$$7$$, $h$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$getDimensionsSelf$ = function $$JSCompiler_prototypeAlias$$$$getDimensionsSelf$$($targetCoordinateSpace$$5$$) {
  return(0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$getBoundingBox$(), $targetCoordinateSpace$$5$$)
};
D.$DvtChartCandlestick$$ = function $$DvtChartCandlestick$$$($context$$51$$, $rangeX1_xCoord$$6$$, $barWidth$$3_x2$$8$$, $openCoord$$1$$, $closeCoord$$1$$, $lowCoord$$3$$, $highCoord$$3$$) {
  this.Init($context$$51$$);
  $barWidth$$3_x2$$8$$ = window.Math.max(2 * window.Math.round($barWidth$$3_x2$$8$$ / 2), 1);
  var $rangeWidth_rangeX2$$ = window.Math.min(2 * window.Math.ceil(0.3 * $barWidth$$3_x2$$8$$ / 2), $barWidth$$3_x2$$8$$), $x1$$10$$ = window.Math.round($rangeX1_xCoord$$6$$) - $barWidth$$3_x2$$8$$ / 2;
  $barWidth$$3_x2$$8$$ = $x1$$10$$ + $barWidth$$3_x2$$8$$;
  null != $lowCoord$$3$$ && null != $highCoord$$3$$ && ($rangeX1_xCoord$$6$$ = window.Math.round($rangeX1_xCoord$$6$$) - $rangeWidth_rangeX2$$ / 2, $rangeWidth_rangeX2$$ = $rangeX1_xCoord$$6$$ + $rangeWidth_rangeX2$$, this.$_rangeShape$ = new D.$DvtSelectableRectangularPolygon$$($context$$51$$, [$rangeX1_xCoord$$6$$, $lowCoord$$3$$, $rangeWidth_rangeX2$$, $lowCoord$$3$$, $rangeWidth_rangeX2$$, $highCoord$$3$$, $rangeX1_xCoord$$6$$, $highCoord$$3$$]), this.$addChild$(this.$_rangeShape$));
  this.$_changeShape$ = new D.$DvtSelectableRectangularPolygon$$($context$$51$$, [$x1$$10$$, $openCoord$$1$$, $barWidth$$3_x2$$8$$, $openCoord$$1$$, $barWidth$$3_x2$$8$$, $closeCoord$$1$$, $x1$$10$$, $closeCoord$$1$$]);
  this.$addChild$(this.$_changeShape$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartCandlestick$$, D.$DvtContainer$$, "DvtChartCandlestick");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartCandlestick$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$4$$) {
  this.$_changeShape$.$setSelected$($selected$$4$$);
  this.$_rangeShape$ && this.$_rangeShape$.$setSelected$($selected$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_changeShape$.$showHoverEffect$();
  this.$_rangeShape$ && this.$_rangeShape$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_changeShape$.$hideHoverEffect$();
  this.$_rangeShape$ && this.$_rangeShape$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$33_nodePlayable$$22$$) {
  $duration$$33_nodePlayable$$22$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$33_nodePlayable$$22$$);
  var $endStateChange_endStateRange$$ = this.$_changeShape$.$getPoints$();
  this.$_changeShape$.$setPoints$((0,D.$DvtChartCandlestick$_getInitialPoints$$)($endStateChange_endStateRange$$));
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$33_nodePlayable$$22$$.$_animator$, "typeNumberArray", this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $endStateChange_endStateRange$$);
  this.$_rangeShape$ && ($endStateChange_endStateRange$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$((0,D.$DvtChartCandlestick$_getInitialPoints$$)($endStateChange_endStateRange$$)), (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$33_nodePlayable$$22$$.$_animator$, "typeNumberArray", this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $endStateChange_endStateRange$$));
  return $duration$$33_nodePlayable$$22$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$34_nodePlayable$$23$$) {
  $duration$$34_nodePlayable$$23$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$34_nodePlayable$$23$$);
  var $endStateChange$$1_endStateRange$$1$$ = (0,D.$DvtChartCandlestick$_getInitialPoints$$)(this.$_changeShape$.$getPoints$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$34_nodePlayable$$23$$.$_animator$, "typeNumberArray", this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $endStateChange$$1_endStateRange$$1$$);
  this.$_rangeShape$ && ($endStateChange$$1_endStateRange$$1$$ = (0,D.$DvtChartCandlestick$_getInitialPoints$$)(this.$_rangeShape$.$getPoints$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$34_nodePlayable$$23$$.$_animator$, "typeNumberArray", this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $endStateChange$$1_endStateRange$$1$$));
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$34_nodePlayable$$23$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$34_nodePlayable$$23$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$35_nodePlayable$$24$$) {
  this.$setAlpha$(0);
  $duration$$35_nodePlayable$$24$$ = this.$getDisplayAnimation$($duration$$35_nodePlayable$$24$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$35_nodePlayable$$24$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$35_nodePlayable$$24$$
};
D.$JSCompiler_prototypeAlias$$.$getUpdateAnimation$ = function $$JSCompiler_prototypeAlias$$$$getUpdateAnimation$$($duration$$36$$, $oldShape$$1$$) {
  var $nodePlayable$$25$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$36$$), $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$ = this.$_changeShape$.$getPoints$();
  this.$_changeShape$.$setPoints$($oldShape$$1$$.$_changeShape$.$getPoints$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$25$$.$_animator$, "typeNumberArray", this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$);
  var $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$ = $oldShape$$1$$.$_changeShape$.$isSelected$() || this.$_changeShape$.$isSelected$(), $startFill$$2$$ = $oldShape$$1$$.$_changeShape$.$getPrimaryFill$().$clone$(), $endFill$$2$$ = this.$_changeShape$.$getPrimaryFill$();
  $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$ || (this.$_changeShape$.$setFill$($startFill$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$25$$.$_animator$, "typeFill", this.$_changeShape$, this.$_changeShape$.$getFill$, this.$_changeShape$.$setFill$, $endFill$$2$$));
  this.$_rangeShape$ && $oldShape$$1$$.$_rangeShape$ && ($bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($oldShape$$1$$.$_rangeShape$.$getPoints$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$25$$.$_animator$, "typeNumberArray", this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $bSkipFillAnimation$$1_endStateChange$$2_endStateRange$$2$$));
  return $nodePlayable$$25$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartCandlestick$_getInitialPoints$$ = function $$DvtChartCandlestick$_getInitialPoints$$$($points$$8_yMid$$) {
  var $x1$$11$$ = $points$$8_yMid$$[0], $x2$$9$$ = $points$$8_yMid$$[2];
  $points$$8_yMid$$ = ($points$$8_yMid$$[1] + $points$$8_yMid$$[5]) / 2;
  return[$x1$$11$$, $points$$8_yMid$$, $x2$$9$$, $points$$8_yMid$$, $x2$$9$$, $points$$8_yMid$$, $x1$$11$$, $points$$8_yMid$$]
};
D.$DvtChartCoord$$ = function $$DvtChartCoord$$$($x$$79$$, $y1$$6$$, $y2$$4$$, $groupIndex$$21$$, $group$$14$$, $filtered$$1$$) {
  this.x = $x$$79$$;
  this.$y1$ = $y1$$6$$;
  this.$y2$ = $y2$$4$$;
  this.$groupIndex$ = $groupIndex$$21$$;
  this.group = $group$$14$$;
  this.$filtered$ = $filtered$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartCoord$$, D.$DvtObj$$, "DvtChartCoord");
D.$JSCompiler_StaticMethods_isUpstep$$ = function $$JSCompiler_StaticMethods_isUpstep$$$($JSCompiler_StaticMethods_isUpstep$self$$, $baseline$$4$$) {
  return window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y2$ - $baseline$$4$$) > window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y1$ - $baseline$$4$$)
};
D.$DvtChartCoord$$.prototype.$clone$ = function $$DvtChartCoord$$$$$clone$$() {
  return new D.$DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$)
};
D.$DvtChartLineArea$$ = function $$DvtChartLineArea$$$($chart$$105$$, $bArea$$, $availSpace$$74$$, $baseline$$5$$, $fill$$8$$, $stroke$$14$$, $type$$78$$, $arCoord$$, $baseType$$1$$, $arBaseCoord$$) {
  this.Init($chart$$105$$.$getCtx$());
  this.$_chart$ = $chart$$105$$;
  this.$_bArea$ = $bArea$$;
  this.$_availSpace$ = $availSpace$$74$$;
  this.$_baseline$ = $baseline$$5$$;
  this.$_fill$ = $fill$$8$$;
  this.$_stroke$ = $stroke$$14$$;
  this.$_type$ = $type$$78$$;
  this.$_baseType$ = $baseType$$1$$ ? $baseType$$1$$ : $type$$78$$;
  this.$_indicatorMap$ = {};
  this.$setCoords$($arCoord$$, $arBaseCoord$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineArea$$, D.$DvtContainer$$, "DvtChartLineArea");
D.$DvtChartLineArea$$.prototype.$setCoords$ = function $$DvtChartLineArea$$$$$setCoords$$($arCoord$$1$$, $arBaseCoord$$1$$) {
  this.$_arCoord$ = $arCoord$$1$$;
  $arBaseCoord$$1$$ && (this.$_arBaseCoord$ = $arBaseCoord$$1$$);
  this.$removeChildren$();
  this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
  for(var $indicator$$inline_2273_indicatorObj$$inline_2272$$, $pos$$inline_2274_y$$inline_2275$$, $coord$$inline_2276$$, $i$$inline_2277$$ = 0;$i$$inline_2277$$ < this.$_arCoord$.length;$i$$inline_2277$$++) {
    if($coord$$inline_2276$$ = this.$_arCoord$[$i$$inline_2277$$], ($indicator$$inline_2273_indicatorObj$$inline_2272$$ = this.$_indicatorMap$[$coord$$inline_2276$$.$groupIndex$]) && $indicator$$inline_2273_indicatorObj$$inline_2272$$.$indicator$) {
      $pos$$inline_2274_y$$inline_2275$$ = ((0,D.$JSCompiler_StaticMethods_isUpstep$$)($coord$$inline_2276$$, this.$_baseline$) ? $coord$$inline_2276$$.$y2$ : $coord$$inline_2276$$.$y1$) + 8 * ($indicator$$inline_2273_indicatorObj$$inline_2272$$.direction == D.$DvtDCChartUtils$$.$DIR_UP$ ? -1 : 1), $pos$$inline_2274_y$$inline_2275$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new D.$DvtPoint$$($coord$$inline_2276$$.x, $pos$$inline_2274_y$$inline_2275$$), this.$_availSpace$), $indicator$$inline_2273_indicatorObj$$inline_2272$$ = 
      $indicator$$inline_2273_indicatorObj$$inline_2272$$.$indicator$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$inline_2273_indicatorObj$$inline_2272$$, $pos$$inline_2274_y$$inline_2275$$.x, $pos$$inline_2274_y$$inline_2275$$.y), $indicator$$inline_2273_indicatorObj$$inline_2272$$.$setAlpha$(1), $indicator$$inline_2273_indicatorObj$$inline_2272$$.getParent().$addChild$($indicator$$inline_2273_indicatorObj$$inline_2272$$)
    }
  }
};
D.$DvtChartLineArea$$.prototype.$isArea$ = (0,D.$JSCompiler_get$$)("$_bArea$");
D.$JSCompiler_StaticMethods__getPointArrays$$ = function $$JSCompiler_StaticMethods__getPointArrays$$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $coords$$16_coords$$inline_2279$$, $type$$79$$) {
  var $pointsArrays$$1$$ = [], $points$$9$$ = [];
  $pointsArrays$$1$$.push($points$$9$$);
  for(var $isPolar$$4_pointCoords$$inline_2280$$ = [], $i$$inline_2281_isCentered$$ = 0;$i$$inline_2281_isCentered$$ < $coords$$16_coords$$inline_2279$$.length;$i$$inline_2281_isCentered$$++) {
    if(!$coords$$16_coords$$inline_2279$$[$i$$inline_2281_isCentered$$].$filtered$) {
      if(null == $coords$$16_coords$$inline_2279$$[$i$$inline_2281_isCentered$$].x) {
        $isPolar$$4_pointCoords$$inline_2280$$.push(null)
      }else {
        if($isPolar$$4_pointCoords$$inline_2280$$.push(new D.$DvtPoint$$($coords$$16_coords$$inline_2279$$[$i$$inline_2281_isCentered$$].x, $coords$$16_coords$$inline_2279$$[$i$$inline_2281_isCentered$$].$y1$)), $coords$$16_coords$$inline_2279$$[$i$$inline_2281_isCentered$$].$y1$ != $coords$$16_coords$$inline_2279$$[$i$$inline_2281_isCentered$$].$y2$) {
          var $isParallel_p2$$inline_2282$$ = new D.$DvtPoint$$($coords$$16_coords$$inline_2279$$[$i$$inline_2281_isCentered$$].x, $coords$$16_coords$$inline_2279$$[$i$$inline_2281_isCentered$$].$y2$);
          $isParallel_p2$$inline_2282$$.$_isY2$ = !0;
          $isPolar$$4_pointCoords$$inline_2280$$.push($isParallel_p2$$inline_2282$$)
        }
      }
    }
  }
  $coords$$16_coords$$inline_2279$$ = $isPolar$$4_pointCoords$$inline_2280$$;
  var $isPolar$$4_pointCoords$$inline_2280$$ = D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $isParallel_p2$$inline_2282$$ = ($i$$inline_2281_isCentered$$ = "centeredStepped" == $type$$79$$ || "centeredSegmented" == $type$$79$$) || "stepped" == $type$$79$$ || "segmented" == $type$$79$$, $groupWidth$$1$$ = D.$DvtChartStyleUtils$$.$getGroupWidth$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $dir$$22$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$getCtx$()) && 
  D.$DvtChartTypeUtils$$.$isVertical$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) ? -1 : 1, $lastCoord$$;
  $isPolar$$4_pointCoords$$inline_2280$$ && ($lastCoord$$ = $coords$$16_coords$$inline_2279$$[$coords$$16_coords$$inline_2279$$.length - 1]);
  for(var $coord$$27_finalXCoord$$, $xCoord$$7$$, $isY2$$, $inBump$$ = !1, $i$$171$$ = 0;$i$$171$$ < $coords$$16_coords$$inline_2279$$.length;$i$$171$$++) {
    if(null == $coords$$16_coords$$inline_2279$$[$i$$171$$]) {
      if(!D.$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) && ($isParallel_p2$$inline_2282$$ && !$isPolar$$4_pointCoords$$inline_2280$$ && $lastCoord$$ && !$isY2$$) && ($coord$$27_finalXCoord$$ = $i$$inline_2281_isCentered$$ ? $lastCoord$$.x + 0.5 * $groupWidth$$1$$ * $dir$$22$$ : $lastCoord$$.x + $groupWidth$$1$$ * $dir$$22$$, (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$9$$, 
      $coord$$27_finalXCoord$$, $lastCoord$$.y)), "jet" == $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$.$getOptions$()._environment || !D.$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$)) {
        $points$$9$$ = [], $pointsArrays$$1$$.push($points$$9$$), $lastCoord$$ = null
      }
    }else {
      $coord$$27_finalXCoord$$ = $coords$$16_coords$$inline_2279$$[$i$$171$$];
      $isY2$$ = $coords$$16_coords$$inline_2279$$[$i$$171$$].$_isY2$;
      $xCoord$$7$$ = $i$$inline_2281_isCentered$$ ? $coord$$27_finalXCoord$$.x - $groupWidth$$1$$ / 2 * $dir$$22$$ : $coord$$27_finalXCoord$$.x;
      $isY2$$ && ($inBump$$ && $isParallel_p2$$inline_2282$$ && ($xCoord$$7$$ += $groupWidth$$1$$ * $dir$$22$$), $inBump$$ = !$inBump$$);
      "curved" == $type$$79$$ && $isY2$$ && $points$$9$$.push(null, null);
      $lastCoord$$ && $isParallel_p2$$inline_2282$$ && (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$9$$, $xCoord$$7$$, $lastCoord$$.y);
      if(!$JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_bArea$ && ("segmented" == $type$$79$$ || "centeredSegmented" == $type$$79$$)) {
        $points$$9$$ = [], $pointsArrays$$1$$.push($points$$9$$)
      }
      (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$9$$, $xCoord$$7$$, $coord$$27_finalXCoord$$.y);
      $lastCoord$$ = $coord$$27_finalXCoord$$
    }
  }
  $isParallel_p2$$inline_2282$$ && (!$isPolar$$4_pointCoords$$inline_2280$$ && $lastCoord$$ && !$isY2$$) && ($coord$$27_finalXCoord$$ = $i$$inline_2281_isCentered$$ ? $lastCoord$$.x + 0.5 * $groupWidth$$1$$ * $dir$$22$$ : $lastCoord$$.x + $groupWidth$$1$$ * $dir$$22$$, (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$9$$, $coord$$27_finalXCoord$$, $lastCoord$$.y));
  $isPolar$$4_pointCoords$$inline_2280$$ && 1 < $pointsArrays$$1$$.length && ($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$ = $pointsArrays$$1$$.pop(), $pointsArrays$$1$$[0] = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.concat($pointsArrays$$1$$[0]));
  return $pointsArrays$$1$$
};
D.$JSCompiler_StaticMethods__pushCoord$$ = function $$JSCompiler_StaticMethods__pushCoord$$$($JSCompiler_StaticMethods__pushCoord$self_coord$$28$$, $pointArray$$, $x$$80$$, $y$$58$$) {
  $JSCompiler_StaticMethods__pushCoord$self_coord$$28$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($JSCompiler_StaticMethods__pushCoord$self_coord$$28$$.$_chart$, new D.$DvtPoint$$($x$$80$$, $y$$58$$), $JSCompiler_StaticMethods__pushCoord$self_coord$$28$$.$_availSpace$);
  $pointArray$$.push(window.Math.round(10 * $JSCompiler_StaticMethods__pushCoord$self_coord$$28$$.x) / 10, window.Math.round(10 * $JSCompiler_StaticMethods__pushCoord$self_coord$$28$$.y) / 10)
};
D.$JSCompiler_StaticMethods__isRing$$ = function $$JSCompiler_StaticMethods__isRing$$$($JSCompiler_StaticMethods__isRing$self$$) {
  if(!D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || !D.$DvtChartAxisUtils$$.$hasGroupAxis$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length < D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__isRing$self$$.$_chart$)) {
    return!1
  }
  for(var $i$$172$$ = 0;$i$$172$$ < $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length;$i$$172$$++) {
    if(null == $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$[$i$$172$$].x) {
      return!1
    }
  }
  return!0
};
D.$JSCompiler_StaticMethods__getSplineType$$ = function $$JSCompiler_StaticMethods__getSplineType$$$($JSCompiler_StaticMethods__getSplineType$self$$) {
  return D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? (0,D.$JSCompiler_StaticMethods__isRing$$)($JSCompiler_StaticMethods__getSplineType$self$$) ? D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL_CLOSED$ : D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? 
  D.$DvtPathUtils$$.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : D.$DvtPathUtils$$.$SPLINE_TYPE_MONOTONE_VERTICAL$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_renderLines$ = function $$JSCompiler_prototypeAlias$$$$_renderLines$$() {
  for(var $pointArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arCoord$, this.$_type$), $cmd$$3_line$$9_points$$10$$, $i$$173$$ = 0;$i$$173$$ < $pointArrays$$.length;$i$$173$$++) {
    if(($cmd$$3_line$$9_points$$10$$ = $pointArrays$$[$i$$173$$]) && 1 < $cmd$$3_line$$9_points$$10$$.length) {
      "curved" == this.$_type$ ? ($cmd$$3_line$$9_points$$10$$ = (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($cmd$$3_line$$9_points$$10$$, !1, (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this)), $cmd$$3_line$$9_points$$10$$ = new D.$DvtPath$$(this.$getCtx$(), $cmd$$3_line$$9_points$$10$$), $cmd$$3_line$$9_points$$10$$.$setFill$(null)) : (0,D.$JSCompiler_StaticMethods__isRing$$)(this) ? ($cmd$$3_line$$9_points$$10$$ = new D.$DvtPolygon$$(this.$getCtx$(), $cmd$$3_line$$9_points$$10$$), $cmd$$3_line$$9_points$$10$$.$setFill$(null)) : 
      $cmd$$3_line$$9_points$$10$$ = new D.$DvtPolyline$$(this.$getCtx$(), $cmd$$3_line$$9_points$$10$$), $cmd$$3_line$$9_points$$10$$.$setStroke$(this.$_stroke$), this.$addChild$($cmd$$3_line$$9_points$$10$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$_renderAreas$ = function $$JSCompiler_prototypeAlias$$$$_renderAreas$$() {
  var $arCoord$$2_highArrays$$ = this.$_arCoord$, $arBaseCoord$$2_lowArrays$$ = this.$_arBaseCoord$;
  !D.$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) && (0 < $arCoord$$2_highArrays$$.length && 0 < $arBaseCoord$$2_lowArrays$$.length) && ($arCoord$$2_highArrays$$ = $arCoord$$2_highArrays$$.slice(0), $arBaseCoord$$2_lowArrays$$ = $arBaseCoord$$2_lowArrays$$.slice(0), null != $arCoord$$2_highArrays$$[0].x && null != $arBaseCoord$$2_lowArrays$$[0].x && ((0,D.$DvtChartLineArea$_removeAreaEdge$$)($arCoord$$2_highArrays$$, 0, this.$_baseline$), (0,D.$DvtChartLineArea$_removeAreaEdge$$)($arBaseCoord$$2_lowArrays$$, 
  0, this.$_baseline$), $arBaseCoord$$2_lowArrays$$[0].x = $arCoord$$2_highArrays$$[0].x), null != $arCoord$$2_highArrays$$[$arCoord$$2_highArrays$$.length - 1].x && null != $arBaseCoord$$2_lowArrays$$[$arBaseCoord$$2_lowArrays$$.length - 1].x && ((0,D.$DvtChartLineArea$_removeAreaEdge$$)($arCoord$$2_highArrays$$, $arCoord$$2_highArrays$$.length - 1, this.$_baseline$), (0,D.$DvtChartLineArea$_removeAreaEdge$$)($arBaseCoord$$2_lowArrays$$, $arBaseCoord$$2_lowArrays$$.length - 1, this.$_baseline$), 
  $arBaseCoord$$2_lowArrays$$[$arBaseCoord$$2_lowArrays$$.length - 1].x = $arCoord$$2_highArrays$$[$arCoord$$2_highArrays$$.length - 1].x));
  $arCoord$$2_highArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, $arCoord$$2_highArrays$$, this.$_type$);
  $arBaseCoord$$2_lowArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, $arBaseCoord$$2_lowArrays$$, this.$_baseType$);
  if($arCoord$$2_highArrays$$.length == $arBaseCoord$$2_lowArrays$$.length) {
    for(var $area$$1_lowCurved_points$$11$$, $i$$174$$ = 0;$i$$174$$ < $arCoord$$2_highArrays$$.length;$i$$174$$++) {
      var $cmd$$4_highArray$$ = $arCoord$$2_highArrays$$[$i$$174$$], $lowArray_splineType$$ = $arBaseCoord$$2_lowArrays$$[$i$$174$$];
      if(!(2 > $cmd$$4_highArray$$.length)) {
        var $highCurved$$ = "curved" == this.$_type$;
        $area$$1_lowCurved_points$$11$$ = "curved" == this.$_baseType$;
        (0,D.$JSCompiler_StaticMethods__isRing$$)(this) && ($highCurved$$ || $cmd$$4_highArray$$.push($cmd$$4_highArray$$[0], $cmd$$4_highArray$$[1]), 2 <= $lowArray_splineType$$.length && !$area$$1_lowCurved_points$$11$$ && $lowArray_splineType$$.push($lowArray_splineType$$[0], $lowArray_splineType$$[1]));
        for(var $revLowArray$$ = [], $j$$30$$ = 0;$j$$30$$ < $lowArray_splineType$$.length;$j$$30$$ += 2) {
          $revLowArray$$.unshift($lowArray_splineType$$[$j$$30$$], $lowArray_splineType$$[$j$$30$$ + 1])
        }
        $highCurved$$ || $area$$1_lowCurved_points$$11$$ ? ($lowArray_splineType$$ = (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this), $cmd$$4_highArray$$ = $highCurved$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($cmd$$4_highArray$$, !1, $lowArray_splineType$$) : D.$DvtPathUtils$$.$polyline$($cmd$$4_highArray$$, !1), $cmd$$4_highArray$$ += $area$$1_lowCurved_points$$11$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($revLowArray$$, !0, $lowArray_splineType$$) : D.$DvtPathUtils$$.$polyline$($revLowArray$$, 
        !0), $cmd$$4_highArray$$ += D.$DvtPathUtils$$.closePath(), $area$$1_lowCurved_points$$11$$ = new D.$DvtPath$$(this.$getCtx$(), $cmd$$4_highArray$$)) : ($area$$1_lowCurved_points$$11$$ = $revLowArray$$.concat($cmd$$4_highArray$$), $area$$1_lowCurved_points$$11$$ = new D.$DvtPolygon$$(this.$getCtx$(), $area$$1_lowCurved_points$$11$$));
        $area$$1_lowCurved_points$$11$$.$setFill$(this.$_fill$);
        this.$_stroke$ && $area$$1_lowCurved_points$$11$$.$setStroke$(this.$_stroke$);
        this.$addChild$($area$$1_lowCurved_points$$11$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($other$$4$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arCoord$, $other$$4$$ ? $other$$4$$.$_arCoord$ : null, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($coords$$17_params$$13$$) {
  $coords$$17_params$$13$$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($coords$$17_params$$13$$);
  this.$setCoords$($coords$$17_params$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getBaseAnimationParams$$($other$$5$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arBaseCoord$, $other$$5$$ ? $other$$5$$.$_arBaseCoord$ : null, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setBaseAnimationParams$$($params$$14$$) {
  this.$_arBaseCoord$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($params$$14$$)
};
D.$JSCompiler_StaticMethods_getCommonGroupIndices$$ = function $$JSCompiler_StaticMethods_getCommonGroupIndices$$$($JSCompiler_StaticMethods_getCommonGroupIndices$self$$, $other$$6$$) {
  for(var $indices$$5$$ = [], $i$$176$$ = 0;$i$$176$$ < $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$.length;$i$$176$$++) {
    if(!($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$176$$].$filtered$ || null == $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$176$$].x)) {
      for(var $j$$31$$ = 0;$j$$31$$ < $other$$6$$.$_arCoord$.length;$j$$31$$++) {
        if(!($other$$6$$.$_arCoord$[$j$$31$$].$filtered$ || null == $other$$6$$.$_arCoord$[$j$$31$$].x) && $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$176$$].group == $other$$6$$.$_arCoord$[$j$$31$$].group) {
          $indices$$5$$.push($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$176$$].$groupIndex$);
          break
        }
      }
    }
  }
  return $indices$$5$$
};
D.$DvtChartLineArea$_coordsToAnimationParams$$ = function $$DvtChartLineArea$_coordsToAnimationParams$$$($coords$$19$$, $otherCoords_otherGroups$$, $baseline$$6_params$$15$$) {
  if($otherCoords_otherGroups$$ && 0 < $otherCoords_otherGroups$$.length) {
    if($coords$$19$$ && 0 < $coords$$19$$.length) {
      $coords$$19$$ = $coords$$19$$.slice(0);
      $otherCoords_otherGroups$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($otherCoords_otherGroups$$);
      for(var $groups$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($coords$$19$$), $idx$$3$$ = $coords$$19$$.length, $dummyCoord_group$$15_groupIdx$$, $g$$3_i$$178$$ = $otherCoords_otherGroups$$.length - 1;0 <= $g$$3_i$$178$$;$g$$3_i$$178$$--) {
        if($dummyCoord_group$$15_groupIdx$$ = $otherCoords_otherGroups$$[$g$$3_i$$178$$], $dummyCoord_group$$15_groupIdx$$ = D.$DvtArrayUtils$$.$getIndex$($groups$$, $dummyCoord_group$$15_groupIdx$$), -1 == $dummyCoord_group$$15_groupIdx$$) {
          if(0 == $idx$$3$$) {
            $dummyCoord_group$$15_groupIdx$$ = $coords$$19$$[0].$clone$();
            $coords$$19$$[0] = $coords$$19$$[0].$clone$();
            var $startCoord$$inline_2284_startCoord$$inline_2288$$ = $dummyCoord_group$$15_groupIdx$$, $endCoord$$inline_2285$$ = $coords$$19$$[0];
            (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_2284_startCoord$$inline_2288$$, $baseline$$6_params$$15$$) ? $endCoord$$inline_2285$$.$y1$ = $endCoord$$inline_2285$$.$y2$ : $startCoord$$inline_2284_startCoord$$inline_2288$$.$y2$ = $startCoord$$inline_2284_startCoord$$inline_2288$$.$y1$
          }else {
            $dummyCoord_group$$15_groupIdx$$ = $coords$$19$$[$idx$$3$$ - 1].$clone$(), $coords$$19$$[$idx$$3$$ - 1] = $coords$$19$$[$idx$$3$$ - 1].$clone$(), $startCoord$$inline_2284_startCoord$$inline_2288$$ = $coords$$19$$[$idx$$3$$ - 1], (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_2284_startCoord$$inline_2288$$, $baseline$$6_params$$15$$) ? $dummyCoord_group$$15_groupIdx$$.$y1$ = $dummyCoord_group$$15_groupIdx$$.$y2$ : $startCoord$$inline_2284_startCoord$$inline_2288$$.$y2$ = 
            $startCoord$$inline_2284_startCoord$$inline_2288$$.$y1$
          }
          $dummyCoord_group$$15_groupIdx$$.$groupIndex$ = -1;
          $coords$$19$$.splice($idx$$3$$, 0, $dummyCoord_group$$15_groupIdx$$)
        }else {
          $idx$$3$$ = $dummyCoord_group$$15_groupIdx$$
        }
      }
    }else {
      $coords$$19$$ = [];
      for($g$$3_i$$178$$ = 0;$g$$3_i$$178$$ < $otherCoords_otherGroups$$.length;$g$$3_i$$178$$++) {
        $coords$$19$$.push(new D.$DvtChartCoord$$($otherCoords_otherGroups$$[$g$$3_i$$178$$].x, $baseline$$6_params$$15$$, $baseline$$6_params$$15$$))
      }
    }
  }
  $baseline$$6_params$$15$$ = [];
  for($g$$3_i$$178$$ = 0;$g$$3_i$$178$$ < $coords$$19$$.length;$g$$3_i$$178$$++) {
    $coords$$19$$[$g$$3_i$$178$$].$filtered$ || (null == $coords$$19$$[$g$$3_i$$178$$].x ? ($baseline$$6_params$$15$$.push(window.Infinity), $baseline$$6_params$$15$$.push(window.Infinity), $baseline$$6_params$$15$$.push(window.Infinity)) : ($baseline$$6_params$$15$$.push($coords$$19$$[$g$$3_i$$178$$].x), $baseline$$6_params$$15$$.push($coords$$19$$[$g$$3_i$$178$$].$y1$), $baseline$$6_params$$15$$.push($coords$$19$$[$g$$3_i$$178$$].$y2$)), $baseline$$6_params$$15$$.push($coords$$19$$[$g$$3_i$$178$$].$groupIndex$))
  }
  return $baseline$$6_params$$15$$
};
D.$DvtChartLineArea$_animationParamsToCoords$$ = function $$DvtChartLineArea$_animationParamsToCoords$$$($params$$16$$) {
  for(var $coords$$20$$ = [], $i$$179$$ = 0;$i$$179$$ < $params$$16$$.length;$i$$179$$ += 4) {
    window.Infinity == $params$$16$$[$i$$179$$] || (0,window.isNaN)($params$$16$$[$i$$179$$]) ? $coords$$20$$.push(new D.$DvtChartCoord$$(null, null, null, $params$$16$$[$i$$179$$ + 3])) : $coords$$20$$.push(new D.$DvtChartCoord$$($params$$16$$[$i$$179$$], $params$$16$$[$i$$179$$ + 1], $params$$16$$[$i$$179$$ + 2], $params$$16$$[$i$$179$$ + 3]))
  }
  return $coords$$20$$
};
D.$DvtChartLineArea$_coordsToGroups$$ = function $$DvtChartLineArea$_coordsToGroups$$$($coords$$21$$) {
  for(var $groups$$1$$ = [], $i$$180$$ = 0;$i$$180$$ < $coords$$21$$.length;$i$$180$$++) {
    $coords$$21$$[$i$$180$$].$filtered$ || $groups$$1$$.push($coords$$21$$[$i$$180$$].group)
  }
  return $groups$$1$$
};
D.$DvtChartLineArea$_getCurvedPathCommands$$ = function $$DvtChartLineArea$_getCurvedPathCommands$$$($cmd$$5_points$$12$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$) {
  var $arP$$ = [], $p$$2$$ = [];
  $arP$$.push($p$$2$$);
  for(var $i$$181$$ = 0;$i$$181$$ < $cmd$$5_points$$12$$.length;$i$$181$$ += 2) {
    null == $cmd$$5_points$$12$$[$i$$181$$] ? ($p$$2$$ = [], $arP$$.push($p$$2$$)) : $p$$2$$.push($cmd$$5_points$$12$$[$i$$181$$], $cmd$$5_points$$12$$[$i$$181$$ + 1])
  }
  $lastPoints$$1_splineType$$1$$ == D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $arP$$.length && ($lastPoints$$1_splineType$$1$$ = $arP$$.pop(), $arP$$[0] = $lastPoints$$1_splineType$$1$$.concat($arP$$[0]), $lastPoints$$1_splineType$$1$$ = D.$DvtPathUtils$$.$SPLINE_TYPE_CARDINAL$);
  $cmd$$5_points$$12$$ = "";
  for($i$$181$$ = 0;$i$$181$$ < $arP$$.length;$i$$181$$++) {
    $p$$2$$ = $arP$$[$i$$181$$], $cmd$$5_points$$12$$ += D.$DvtPathUtils$$.$curveThroughPoints$($p$$2$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$), $connectWithLine$$ = !0
  }
  return $cmd$$5_points$$12$$
};
D.$DvtChartLineArea$_removeAreaEdge$$ = function $$DvtChartLineArea$_removeAreaEdge$$$($arCoord$$3$$, $index$$132$$, $baseline$$8$$) {
  var $coord$$30$$ = $arCoord$$3$$[$index$$132$$].$clone$();
  (0,D.$JSCompiler_StaticMethods_isUpstep$$)($coord$$30$$, $baseline$$8$$) ? $coord$$30$$.$y1$ = $coord$$30$$.$y2$ : $coord$$30$$.$y2$ = $coord$$30$$.$y1$;
  $arCoord$$3$$[$index$$132$$] = $coord$$30$$
};
D.$DvtChartLineMarker$$ = function $$DvtChartLineMarker$$$($context$$52$$, $type$$80$$, $cx$$5$$, $cy$$6$$, $size$$18$$, $bOptimizeStroke$$2$$) {
  this.Init($context$$52$$, $type$$80$$, null, $cx$$5$$, $cy$$6$$, $size$$18$$, $size$$18$$);
  $bOptimizeStroke$$2$$ && this.$setStroke$(D.$DvtChartLineMarker$DEFAULT_STROKE$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineMarker$$, D.$DvtSimpleMarker$$, "DvtChartLineMarker");
D.$DvtChartLineMarker$DEFAULT_STROKE$$ = new D.$DvtSolidStroke$$("none");
D.$DvtChartLineMarker$SELECTED_FILL$$ = new D.$DvtSolidFill$$("#FFFFFF");
D.$DvtChartLineMarker$SELECTED_STROKE$$ = new D.$DvtSolidStroke$$("#5A5A5A", 1, 1.5);
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$7$$) {
  this.$_dataColor$ = $dataColor$$7$$;
  this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$7$$, 1, 1.5)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = !0;
  this.$setStroke$(this.$_hoverStroke$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = !1;
  this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$SELECTED_STROKE$$ : D.$DvtChartLineMarker$DEFAULT_STROKE$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$5$$) {
  this.$IsSelected$ != $selected$$5$$ && (this.$IsSelected$ = $selected$$5$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$SELECTED_FILL$$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : D.$DvtChartLineMarker$SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : D.$DvtChartLineMarker$DEFAULT_STROKE$$)))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartOverview$$ = function $$DvtChartOverview$$$($chart$$106$$) {
  this.Init($chart$$106$$.$getCtx$(), $chart$$106$$.$processEvent$, $chart$$106$$);
  this.$_parentChart$ = $chart$$106$$;
  this.$_chart$ = $chart$$106$$.$overview$ ? $chart$$106$$.$overview$.$_chart$ : null;
  this.$_id$ = $chart$$106$$.getId() + "_overview"
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartOverview$$, D.$DvtOverview$$, "DvtChartOverview");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$createBackground$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$61$$, $width$$40$$, $glassPane$$inline_2297_height$$43$$) {
  $options$$61$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$options$$61$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
  $options$$61$$.animationOnClick = "off";
  var $options$$inline_2293$$ = $options$$61$$.chart;
  this.$_chartContainer$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$(this.$_chartContainer$);
  $options$$inline_2293$$ = D.$DvtJSONUtils$$.$merge$({legend:{rendered:"off", size:null}, xAxis:{viewportMin:null, viewportMax:null, viewportStartGroup:null, viewportEndGroup:null, axisLine:{rendered:"off"}, size:null, maxSize:0.5, title:null}, yAxis:{rendered:"off", size:null}, y2Axis:{rendered:"off", size:null}, splitDualY:"off", title:{text:null}, subtitle:{text:null}, footnote:{text:null}, titleSeparator:{rendered:"off"}, styleDefaults:{animationIndicators:"none"}, layout:{outerGapWidth:0, outerGapHeight:0}, 
  _isOverview:!0}, $options$$inline_2293$$);
  D.$DvtChartAxisUtils$$.$hasGroupAxis$(this.$_parentChart$) && ($options$$inline_2293$$.xAxis.tickLabel.rendered = "off");
  D.$DvtChartTypeUtils$$.$isStock$(this.$_parentChart$) && ($options$$inline_2293$$.series && $options$$inline_2293$$.series[0]) && ($options$$inline_2293$$.series = [$options$$inline_2293$$.series[0]], $options$$inline_2293$$.series[0].type = "lineWithArea");
  var $userOptions$$inline_2296$$ = this.$_parentChart$.$getOptions$().overview.content, $options$$inline_2293$$ = D.$DvtJSONUtils$$.$merge$($userOptions$$inline_2296$$, $options$$inline_2293$$);
  $options$$inline_2293$$.zoomAndScroll = "off";
  this.$_chart$ || (this.$_chart$ = (0,D.$DvtChart$newInstance$$)(this.$getCtx$()), this.$_chart$.setId(this.$_id$));
  this.$_chartContainer$.$addChild$(this.$_chart$);
  this.$_chart$.$render$($options$$inline_2293$$, $width$$40$$, $glassPane$$inline_2297_height$$43$$);
  $glassPane$$inline_2297_height$$43$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$40$$, $glassPane$$inline_2297_height$$43$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($glassPane$$inline_2297_height$$43$$);
  this.$_chartContainer$.$addChild$($glassPane$$inline_2297_height$$43$$);
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_chart$.$getEventManager$(), null);
  D.$DvtChartOverview$$.$superclass$.$render$.call(this, $options$$61$$, $width$$40$$, this.$_chart$.$_plotAreaSpace$.$h$)
};
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  D.$DvtChartOverview$$.$superclass$.$destroy$.call(this);
  this.$_chart$ = this.$_parentChart$ = null
};
D.$JSCompiler_prototypeAlias$$.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(!0);
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartPolarBar$$ = function $$DvtChartPolarBar$$$($chart$$107$$, $axisCoord$$2$$, $baselineCoord$$6$$, $endCoord$$4$$, $x1$$12$$, $x2$$10$$, $availSpace$$75$$) {
  this.Init($chart$$107$$.$getCtx$());
  this.$_axisCoord$ = $axisCoord$$2$$;
  this.$_availSpace$ = $availSpace$$75$$.$clone$();
  this.$_bbox$ = null;
  this.$_dataItemGaps$ = 3 * D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$107$$);
  this.$_setBarCoords$($baselineCoord$$6$$, $endCoord$$4$$, $x1$$12$$, $x2$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartPolarBar$$, D.$DvtSelectableWedge$$, "DvtChartPolarBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartPolarBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$17$$) {
  this.$_setBarCoords$($params$$17$$[0], $params$$17$$[1], $params$$17$$[2], $params$$17$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getPrimaryFill$ = function $$JSCompiler_prototypeAlias$$$$getPrimaryFill$$() {
  return this.$getFill$()
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$37_nodePlayable$$26$$) {
  var $endState$$9$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
  $duration$$37_nodePlayable$$26$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$37_nodePlayable$$26$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$37_nodePlayable$$26$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$9$$);
  return $duration$$37_nodePlayable$$26$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$38_nodePlayable$$27$$) {
  var $endState$$10$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$38_nodePlayable$$27$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$38_nodePlayable$$27$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$38_nodePlayable$$27$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$10$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$38_nodePlayable$$27$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$38_nodePlayable$$27$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$39_nodePlayable$$28$$) {
  this.$setAlpha$(0);
  var $endState$$11$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
  $duration$$39_nodePlayable$$28$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$39_nodePlayable$$28$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$39_nodePlayable$$28$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$11$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$39_nodePlayable$$28$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$39_nodePlayable$$28$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$7$$, $endCoord$$5$$, $x1$$13$$, $x2$$11$$) {
  var $cmds$$inline_2308_cx$$6_minX$$ = this.$_availSpace$.x + this.$_availSpace$.$w$ / 2, $cy$$7_maxX$$ = this.$_availSpace$.y + this.$_availSpace$.$h$ / 2, $minY_r$$3$$ = window.Math.max($endCoord$$5$$, $baselineCoord$$7$$), $inner1_ir_maxY$$ = 4 <= window.Math.abs($endCoord$$5$$ - $baselineCoord$$7$$) && this.$_axisCoord$ != $baselineCoord$$7$$ ? window.Math.min($endCoord$$5$$, $baselineCoord$$7$$) + this.$_dataItemGaps$ : window.Math.min($endCoord$$5$$, $baselineCoord$$7$$), $inner2_sa$$inline_2304$$ = 
  360 - D.$DvtMath$$.$radsToDegrees$(window.Math.max($x1$$13$$, $x2$$11$$)) + 90, $ae$$inline_2305_outer1$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.abs($x2$$11$$ - $x1$$13$$)), $gap$$inline_2306_outer2$$ = this.$_dataItemGaps$;
  this.$_cx$ = $cmds$$inline_2308_cx$$6_minX$$;
  this.$_cy$ = $cy$$7_maxX$$;
  this.$_ry$ = this.$_rx$ = $minY_r$$3$$;
  this.$_sa$ = $inner2_sa$$inline_2304$$;
  this.$_ae$ = $ae$$inline_2305_outer1$$;
  this.$_gap$ = $gap$$inline_2306_outer2$$;
  this.$_ir$ = $inner1_ir_maxY$$;
  $cmds$$inline_2308_cx$$6_minX$$ = (0,D.$JSCompiler_StaticMethods__makeWedgePath$$)(this, 0);
  this.$setCmds$($cmds$$inline_2308_cx$$6_minX$$);
  $inner1_ir_maxY$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$7$$, $x1$$13$$, this.$_availSpace$);
  $inner2_sa$$inline_2304$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$7$$, $x2$$11$$, this.$_availSpace$);
  $ae$$inline_2305_outer1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$5$$, $x1$$13$$, this.$_availSpace$);
  $gap$$inline_2306_outer2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$5$$, $x2$$11$$, this.$_availSpace$);
  $cmds$$inline_2308_cx$$6_minX$$ = window.Math.min($inner1_ir_maxY$$.x, $inner2_sa$$inline_2304$$.x, $ae$$inline_2305_outer1$$.x, $gap$$inline_2306_outer2$$.x);
  $cy$$7_maxX$$ = window.Math.max($inner1_ir_maxY$$.x, $inner2_sa$$inline_2304$$.x, $ae$$inline_2305_outer1$$.x, $gap$$inline_2306_outer2$$.x);
  $minY_r$$3$$ = window.Math.min($inner1_ir_maxY$$.y, $inner2_sa$$inline_2304$$.y, $ae$$inline_2305_outer1$$.y, $gap$$inline_2306_outer2$$.y);
  $inner1_ir_maxY$$ = window.Math.max($inner1_ir_maxY$$.y, $inner2_sa$$inline_2304$$.y, $ae$$inline_2305_outer1$$.y, $gap$$inline_2306_outer2$$.y);
  this.$_bbox$ = new D.$DvtRectangle$$($cmds$$inline_2308_cx$$6_minX$$, $minY_r$$3$$, $cy$$7_maxX$$ - $cmds$$inline_2308_cx$$6_minX$$, $inner1_ir_maxY$$ - $minY_r$$3$$);
  this.$_baselineCoord$ = $baselineCoord$$7$$;
  this.$_endCoord$ = $endCoord$$5$$;
  this.$_x1$ = $x1$$13$$;
  this.$_x2$ = $x2$$11$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = (0,D.$JSCompiler_get$$)("$_bbox$");
D.$DvtChartRangeMarker$$ = function $$DvtChartRangeMarker$$$($context$$53$$, $x1$$14$$, $y1$$7$$, $x2$$12$$, $y2$$5$$, $markerSize$$2$$, $isInvisible$$) {
  this.Init($context$$53$$);
  this.$_markerSize$ = $markerSize$$2$$;
  this.$_isInvisible$ = $isInvisible$$;
  (0,D.$JSCompiler_StaticMethods__drawPath$$)(this, $x1$$14$$, $y1$$7$$, $x2$$12$$, $y2$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRangeMarker$$, D.$DvtPath$$, "DvtChartRangeMarker");
D.$JSCompiler_StaticMethods__drawPath$$ = function $$JSCompiler_StaticMethods__drawPath$$$($JSCompiler_StaticMethods__drawPath$self$$, $x1$$15$$, $y1$$8$$, $x2$$13$$, $y2$$6$$) {
  var $angle$$4_cmds$$5$$ = window.Math.atan2($y2$$6$$ - $y1$$8$$, $x2$$13$$ - $x1$$15$$), $r$$4$$ = $JSCompiler_StaticMethods__drawPath$self$$.$_markerSize$ / 2, $lineAngle$$ = window.Math.PI / 8, $angle$$4_cmds$$5$$ = D.$DvtPathUtils$$.moveTo($x1$$15$$ + $r$$4$$ * window.Math.cos($angle$$4_cmds$$5$$ + $lineAngle$$), $y1$$8$$ + $r$$4$$ * window.Math.sin($angle$$4_cmds$$5$$ + $lineAngle$$)) + D.$DvtPathUtils$$.arcTo($r$$4$$, $r$$4$$, 2 * (window.Math.PI - $lineAngle$$), 1, $x1$$15$$ + $r$$4$$ * window.Math.cos($angle$$4_cmds$$5$$ - 
  $lineAngle$$), $y1$$8$$ + $r$$4$$ * window.Math.sin($angle$$4_cmds$$5$$ - $lineAngle$$)) + D.$DvtPathUtils$$.lineTo($x2$$13$$ - $r$$4$$ * window.Math.cos($angle$$4_cmds$$5$$ + $lineAngle$$), $y2$$6$$ - $r$$4$$ * window.Math.sin($angle$$4_cmds$$5$$ + $lineAngle$$)) + D.$DvtPathUtils$$.arcTo($r$$4$$, $r$$4$$, 2 * (window.Math.PI - $lineAngle$$), 1, $x2$$13$$ - $r$$4$$ * window.Math.cos($angle$$4_cmds$$5$$ - $lineAngle$$), $y2$$6$$ - $r$$4$$ * window.Math.sin($angle$$4_cmds$$5$$ - $lineAngle$$)) + 
  D.$DvtPathUtils$$.closePath();
  $JSCompiler_StaticMethods__drawPath$self$$.$setCmds$($angle$$4_cmds$$5$$);
  $JSCompiler_StaticMethods__drawPath$self$$.$_x1$ = $x1$$15$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_y1$ = $y1$$8$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_x2$ = $x2$$13$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_y2$ = $y2$$6$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartRangeMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$9$$, $stroke$$15$$, $dataColor$$8_hoverColor$$1$$, $innerColor$$5$$, $outerColor$$6$$) {
  this.$_dataColor$ = $dataColor$$8_hoverColor$$1$$;
  $dataColor$$8_hoverColor$$1$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$8_hoverColor$$1$$);
  this.$_isInvisible$ ? ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$8_hoverColor$$1$$, 1, 1.5)) : (this.$setFill$($fill$$9$$), this.$setStroke$($stroke$$15$$), this.$setHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$5$$, 1, 1), new D.$DvtSolidStroke$$($dataColor$$8_hoverColor$$1$$, 1, 3.5)), this.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$5$$, 1, 1.5), new D.$DvtSolidStroke$$($outerColor$$6$$, 1, 4.5)), this.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$5$$, 
  1, 1.5), new D.$DvtSolidStroke$$($dataColor$$8_hoverColor$$1$$, 1, 4.5)))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = !0, this.$setStroke$(this.$_hoverStroke$)) : D.$DvtChartRangeMarker$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = !1, this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$SELECTED_STROKE$$ : D.$DvtChartLineMarker$DEFAULT_STROKE$$)) : D.$DvtChartRangeMarker$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$6$$) {
  this.$_isInvisible$ ? this.$IsSelected$ != $selected$$6$$ && (this.$IsSelected$ = $selected$$6$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$SELECTED_FILL$$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : D.$DvtChartLineMarker$SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : D.$DvtChartLineMarker$DEFAULT_STROKE$$))) : D.$DvtChartRangeMarker$$.$superclass$.$setSelected$.call(this, 
  $selected$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$UpdateSelectionEffect$$() {
  this.$_isInvisible$ || D.$DvtChartRangeMarker$$.$superclass$.$UpdateSelectionEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_y1$, this.$_x2$, this.$_y2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$18$$) {
  (0,D.$JSCompiler_StaticMethods__drawPath$$)(this, $params$$18$$[0], $params$$18$$[1], $params$$18$$[2], $params$$18$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getBoundingBox$$() {
  return(0,D.$JSCompiler_StaticMethods_getUnion$$)((0,D.$JSCompiler_StaticMethods_getBoundingBox1$$)(this), (0,D.$JSCompiler_StaticMethods_getBoundingBox2$$)(this))
};
D.$JSCompiler_StaticMethods_getBoundingBox1$$ = function $$JSCompiler_StaticMethods_getBoundingBox1$$$($JSCompiler_StaticMethods_getBoundingBox1$self$$) {
  return new D.$DvtRectangle$$($JSCompiler_StaticMethods_getBoundingBox1$self$$.$_x1$ - $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_y1$ - $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$)
};
D.$JSCompiler_StaticMethods_getBoundingBox2$$ = function $$JSCompiler_StaticMethods_getBoundingBox2$$$($JSCompiler_StaticMethods_getBoundingBox2$self$$) {
  return new D.$DvtRectangle$$($JSCompiler_StaticMethods_getBoundingBox2$self$$.$_x2$ - $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_y2$ - $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$)
};
D.$DvtDataCursor$$ = function $$DvtDataCursor$$$($context$$54$$, $options$$62$$, $bHoriz$$7$$) {
  this.Init($context$$54$$, $options$$62$$, $bHoriz$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursor$$, D.$DvtContainer$$, "DvtDataCursor");
D.$DvtDataCursor$$.prototype.Init = function $$DvtDataCursor$$$$Init$($context$$55_lineWidth$$3_middleCircle$$, $markerSize$$3_options$$63$$, $bHoriz$$8_lineColor$$1$$) {
  D.$DvtDataCursor$$.$superclass$.Init.call(this, $context$$55_lineWidth$$3_middleCircle$$);
  this.$_bHoriz$ = $bHoriz$$8_lineColor$$1$$;
  this.$_options$ = $markerSize$$3_options$$63$$;
  this.$setMouseEnabled$(!1);
  this.$setVisible$(!1);
  $context$$55_lineWidth$$3_middleCircle$$ = $markerSize$$3_options$$63$$.lineWidth;
  $bHoriz$$8_lineColor$$1$$ = $markerSize$$3_options$$63$$.lineColor;
  var $lineStyle$$1_outerCircle$$ = (0,D.$DvtStroke$convertTypeString$$)($markerSize$$3_options$$63$$.lineStyle), $stroke$$16$$ = new D.$DvtSolidStroke$$($bHoriz$$8_lineColor$$1$$, 1, $context$$55_lineWidth$$3_middleCircle$$);
  $stroke$$16$$.$setStyle$($lineStyle$$1_outerCircle$$);
  this.$_cursorLine$ = new D.$DvtLine$$(this.$getCtx$(), 0, 0, 0, 0, "dcLine");
  this.$_cursorLine$.$setStroke$($stroke$$16$$);
  this.$addChild$(this.$_cursorLine$);
  "off" != $markerSize$$3_options$$63$$.markerDisplayed && (this.$_marker$ = new D.$DvtContainer$$(this.$_context$), this.$_marker$.$setMouseEnabled$(!1), this.$addChild$(this.$_marker$), $markerSize$$3_options$$63$$ = $markerSize$$3_options$$63$$.markerSize, $lineStyle$$1_outerCircle$$ = new D.$DvtSimpleMarker$$(this.$_context$, "circle", null, 0, 0, $markerSize$$3_options$$63$$ + 4 * $context$$55_lineWidth$$3_middleCircle$$, $markerSize$$3_options$$63$$ + 4 * $context$$55_lineWidth$$3_middleCircle$$), 
  $lineStyle$$1_outerCircle$$.$setSolidFill$($bHoriz$$8_lineColor$$1$$), this.$_marker$.$addChild$($lineStyle$$1_outerCircle$$), $context$$55_lineWidth$$3_middleCircle$$ = new D.$DvtSimpleMarker$$(this.$_context$, "circle", null, 0, 0, $markerSize$$3_options$$63$$ + 2 * $context$$55_lineWidth$$3_middleCircle$$, $markerSize$$3_options$$63$$ + 2 * $context$$55_lineWidth$$3_middleCircle$$), $context$$55_lineWidth$$3_middleCircle$$.$setSolidFill$("white"), this.$_marker$.$addChild$($context$$55_lineWidth$$3_middleCircle$$), 
  this.$_markerInnerCircle$ = new D.$DvtSimpleMarker$$(this.$_context$, "circle", null, 0, 0, $markerSize$$3_options$$63$$, $markerSize$$3_options$$63$$), this.$_marker$.$addChild$(this.$_markerInnerCircle$))
};
D.$DvtDataCursor$$.prototype.$render$ = function $$DvtDataCursor$$$$$render$$($markerColor_plotAreaBounds$$10$$, $dataX$$, $dataY$$, $lineCoord$$2$$, $markerSizeOuter_text$$47$$, $dataColor$$9$$) {
  var $bHoriz$$9$$ = this.$isHorizontal$(), $bRtl$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()), $tooltipBounds$$;
  if(null != $markerSizeOuter_text$$47$$ && "" != $markerSizeOuter_text$$47$$) {
    var $stagePageCoords$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$getCtx$()), $tooltipManager$$ = this.$getCtx$().$getTooltipManager$("_dvtDataCursor");
    $tooltipManager$$.$showDatatip$($dataX$$ + $stagePageCoords$$.x, $dataY$$ + $stagePageCoords$$.y, $markerSizeOuter_text$$47$$, $dataColor$$9$$, !1);
    $tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$);
    $markerSizeOuter_text$$47$$ = this.$_options$.markerSize + 4 * this.$_options$.lineWidth;
    var $tooltipX$$, $tooltipY$$;
    $bHoriz$$9$$ ? ($tooltipX$$ = $bRtl$$ ? $markerColor_plotAreaBounds$$10$$.x - 0.75 * $tooltipBounds$$.$w$ : $markerColor_plotAreaBounds$$10$$.x + $markerColor_plotAreaBounds$$10$$.$w$ - $tooltipBounds$$.$w$ / 4, $tooltipY$$ = $lineCoord$$2$$ - $tooltipBounds$$.$h$ / 2, !$bRtl$$ && $tooltipX$$ - $dataX$$ < $markerSizeOuter_text$$47$$ ? $tooltipX$$ = $dataX$$ + $markerSizeOuter_text$$47$$ : $bRtl$$ && $dataX$$ - ($tooltipX$$ + $tooltipBounds$$.$w$) < $markerSizeOuter_text$$47$$ && ($tooltipX$$ = 
    $dataX$$ - $markerSizeOuter_text$$47$$ - $tooltipBounds$$.$w$)) : ($tooltipX$$ = $lineCoord$$2$$ - $tooltipBounds$$.$w$ / 2, $tooltipY$$ = $markerColor_plotAreaBounds$$10$$.y - 0.75 * $tooltipBounds$$.$h$, $dataY$$ - ($tooltipY$$ + $tooltipBounds$$.$h$) < $markerSizeOuter_text$$47$$ && ($tooltipY$$ = $dataY$$ - $markerSizeOuter_text$$47$$ - $tooltipBounds$$.$h$));
    (0,D.$JSCompiler_StaticMethods_positionTip$$)($tooltipManager$$, $tooltipX$$ + $stagePageCoords$$.x, $tooltipY$$ + $stagePageCoords$$.y);
    $tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$);
    $tooltipBounds$$.x -= $stagePageCoords$$.x;
    $tooltipBounds$$.y -= $stagePageCoords$$.y
  }
  $bHoriz$$9$$ ? (this.$_cursorLine$.$setTranslateY$($lineCoord$$2$$), $bRtl$$ ? (this.$_cursorLine$.$setX1$($tooltipBounds$$ ? $tooltipBounds$$.x + $tooltipBounds$$.$w$ - 1 : $markerColor_plotAreaBounds$$10$$.x), this.$_cursorLine$.$setX2$($markerColor_plotAreaBounds$$10$$.x + $markerColor_plotAreaBounds$$10$$.$w$)) : (this.$_cursorLine$.$setX1$($markerColor_plotAreaBounds$$10$$.x), this.$_cursorLine$.$setX2$($tooltipBounds$$ ? $tooltipBounds$$.x + 1 : $markerColor_plotAreaBounds$$10$$.x + $markerColor_plotAreaBounds$$10$$.$w$))) : 
  (this.$_cursorLine$.$setTranslateX$($lineCoord$$2$$), this.$_cursorLine$.$setY1$($tooltipBounds$$ ? $tooltipBounds$$.y + $tooltipBounds$$.$h$ - 1 : $markerColor_plotAreaBounds$$10$$.y), this.$_cursorLine$.$setY2$($markerColor_plotAreaBounds$$10$$.y + $markerColor_plotAreaBounds$$10$$.$h$));
  this.$_marker$ && ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX$$, $dataY$$), $markerColor_plotAreaBounds$$10$$ = this.$_options$.markerColor, this.$_markerInnerCircle$.$setSolidFill$($markerColor_plotAreaBounds$$10$$ ? $markerColor_plotAreaBounds$$10$$ : $dataColor$$9$$), (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$_marker$))
};
D.$DvtDataCursor$$.prototype.$isHorizontal$ = (0,D.$JSCompiler_get$$)("$_bHoriz$");
D.$DvtFunnelSlice$$ = function $$DvtFunnelSlice$$$($chart$$108$$, $seriesIndex$$36$$, $numDrawnSeries$$1$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$14$$) {
  this.Init($chart$$108$$, $seriesIndex$$36$$, $numDrawnSeries$$1$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$14$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelSlice$$, D.$DvtPath$$, "DvtFunnelSlice");
D.$DvtFunnelSlice$$.prototype.Init = function $$DvtFunnelSlice$$$$Init$($bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$, $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$, $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$, $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$, $funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$, 
$backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$, $textDim$$inline_2329_valuePercent$$1$$, $fillPercent$$1_pos$$inline_2330$$, $displacement$$inline_2332_gap$$15$$) {
  D.$DvtFunnelSlice$$.$superclass$.Init.call(this, $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$.$getCtx$());
  this.$_chart$ = $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$;
  $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$ = $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$.$getOptions$().styleDefaults;
  this.$_seriesIndex$ = $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$;
  this.$_numDrawnSeries$ = $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$;
  this.$_funnelWidth$ = $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$;
  this.$_funnelHeight$ = $funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$;
  this.$_startPercent$ = $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$;
  this.$_valuePercent$ = $textDim$$inline_2329_valuePercent$$1$$;
  this.$_fillPercent$ = $fillPercent$$1_pos$$inline_2330$$;
  this.$_3dRatio$ = "on" == $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$.threeDEffect ? 1 : 0;
  this.$_gap$ = $displacement$$inline_2332_gap$$15$$;
  $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$_dataColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
  this.$_backgroundColor$ = $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$.backgroundColor ? $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$.backgroundColor : $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$.funnelBackgroundColor;
  this.$setCmds$($barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$.slice);
  $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$.bar && (this.$_bar$ = new D.$DvtPath$$(this.$getCtx$(), $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(!1));
  $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$ = $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$.sliceBounds;
  $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$);
  $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
  null == $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ && 0 < this.$_3dRatio$ && ($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ = "#FFFFFF");
  $funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, this.$_seriesIndex$, 0);
  $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$, !0);
  this.$_bar$ ? (this.$setFill$($backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$), this.$_bar$.$setFill$($JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$)) : this.$setFill$($JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$);
  $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ && this.$setSolidStroke$($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$, null, $funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$);
  this.$OriginalStroke$ = this.$getStroke$();
  this.$_chart$.$isSelectionSupported$() && ($JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$(this.$_dataColor$), $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$ = 
  D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$ = null != this.$_bar$ ? this.$_bar$ : this, $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$.$setHoverStroke$(new D.$DvtSolidStroke$$($JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$, 
  1, 2)), $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$, 1, 1.5), new D.$DvtSolidStroke$$($funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$, 1, 4.5)), $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$, 
  1, 1.5), new D.$DvtSolidStroke$$($JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$, 1, 4.5)), this.setCursor("pointer"));
  a: {
    $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$ = $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$.sliceBounds;
    $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$ = $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$.barBounds;
    ($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ = D.$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, this.$_seriesIndex$, 0)) || ($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    if($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ && "none" != D.$DvtChartStyleUtils$$.$getDataLabelPosition$(this.$_chart$, this.$_seriesIndex$, 0) && ($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$ = new D.$DvtOutputText$$(this.$getCtx$(), $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$, 0, 0), $funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$ = 
    null != D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0), $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$ = [this.$_chart$.$getOptions$().styleDefaults.dataLabelStyle, new D.$DvtCSSStyle$$(this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle), new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], $backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$ = 
    (0,D.$DvtCSSStyle$mergeStyles$$)($backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$), $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$.$setCSSStyle$($backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$), D.$DvtTextUtils$$.$fitText$($funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$, 
    $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$.$h$ - 50 * this.$_3dRatio$ * (0.8 - this.$_valuePercent$), $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$.$w$, this, 3))) {
      $textDim$$inline_2329_valuePercent$$1$$ = $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$.$measureDimensions$();
      $fillPercent$$1_pos$$inline_2330$$ = (0,D.$JSCompiler_StaticMethods__getLabelPosition$$)(this, $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$);
      $funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$ && ($bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$ = 0.15 * $textDim$$inline_2329_valuePercent$$1$$.$h$, $displacement$$inline_2332_gap$$15$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? 0.5 : -0.5, $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$ = D.$DvtPathUtils$$.$roundedRectangle$($textDim$$inline_2329_valuePercent$$1$$.x - 
      $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$, $textDim$$inline_2329_valuePercent$$1$$.y, $textDim$$inline_2329_valuePercent$$1$$.$w$ + 2 * $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$, $textDim$$inline_2329_valuePercent$$1$$.$h$, 2, 2, 2, 2), $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$ = new D.$DvtPath$$(this.$getCtx$(), $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$), 
      $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$.$setSolidFill$("#FFFFFF", 0.9), $fillPercent$$1_pos$$inline_2330$$.translate($displacement$$inline_2332_gap$$15$$ * $textDim$$inline_2329_valuePercent$$1$$.$h$, -$displacement$$inline_2332_gap$$15$$ * $textDim$$inline_2329_valuePercent$$1$$.$w$), $bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$.$setMatrix$($fillPercent$$1_pos$$inline_2330$$), this.$addChild$($bbox$$inline_2334_chart$$109_cmd$$inline_2333_padding$$inline_2331_styleDefaults$$));
      $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$ = $funnelHeight$$1_isPatternBg$$inline_2326_outerColor$$inline_2318_sliceBorderWidth$$inline_2314$$ ? "#000000" : (0,D.$JSCompiler_StaticMethods_containsPoint$$)($barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$, $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$.x, $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$.y + 
      ($JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$.$h$ - $textDim$$inline_2329_valuePercent$$1$$.$w$) / 2) ? D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_dataColor$) : D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_backgroundColor$);
      (!$backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$.$getStyle$("color") || !0 === D.$DvtAgent$_highContrast$$) && $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$.$setCSSStyle$($backgroundFill$$inline_2315_labelStyleArray$$inline_2327_shapeForSelection$$inline_2319_sliceBounds$$inline_2311_startPercent$$1_style$$inline_2328$$.$setStyle$("color", 
      $barBounds$$inline_2323_cmds$$6_labelColor$$inline_2335_numDrawnSeries$$2$$));
      $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getLabelPosition$$)(this, $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$));
      $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$.$alignCenter$();
      $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$.$alignMiddle$();
      $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$ = $funnelWidth$$1_innerColor$$inline_2317_label$$inline_2325_labelString$$inline_2324_sliceBorder$$inline_2313$$;
      break a
    }
    $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$ = void 0
  }
  this.$_label$ = $JSCompiler_inline_result$$371_hoverColor$$inline_2316_seriesIndex$$37_sliceBounds$$inline_2322_sliceFill$$inline_2312$$;
  null != this.$_label$ && (this.$_label$.$setMouseEnabled$(!1), this.$addChild$(this.$_label$))
};
D.$DvtFunnelSlice$_FUNNEL_RATIO$$ = 1 / 3;
D.$DvtFunnelSlice$_LINE_FRACTION$$ = 2 / 3;
D.$JSCompiler_StaticMethods__getPath$$ = function $$JSCompiler_StaticMethods__getPath$$$($JSCompiler_StaticMethods__getPath$self$$) {
  var $alpha$$4_isBiDi$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPath$self$$.$getCtx$()), $gapCount_rx$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__getPath$self$$.$_chart$), $ar$$2_offset$$16$$ = ($JSCompiler_StaticMethods__getPath$self$$.$_numDrawnSeries$ + 1) * $JSCompiler_StaticMethods__getPath$self$$.$_gap$, $angle$$5$$ = D.$DvtMath$$.$degreesToRads$(36 - 2 * $JSCompiler_StaticMethods__getPath$self$$.$_3dRatio$), $h2_totalWidth$$4$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - 
  $gapCount_rx$$ * $JSCompiler_StaticMethods__getPath$self$$.$_gap$, $gapCount_rx$$ = $h2_totalWidth$$4$$ / window.Math.sin(D.$DvtMath$$.$degreesToRads$(36)), $ry$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ / window.Math.sin($angle$$5$$), $ratio$$5$$ = 0.08 * ($JSCompiler_StaticMethods__getPath$self$$.$_3dRatio$ * $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$);
  1E-5 > $ratio$$5$$ && ($ratio$$5$$ = 0);
  var $b1_b12_c1$$1_pathCommands$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $b2$$1_p2$$1$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * D.$DvtFunnelSlice$_FUNNEL_RATIO$$, $arcDir1_p1_startAngle$$3$$, $arcDir2_b11_endAngle$$2$$, $b21_barCommands_c2$$1$$, $b22$$, $f1$$1_sliceBounds$$, $f2$$1$$, $t1$$, $t2$$, $h1$$;
  0.41 > $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ ? ($arcDir1_p1_startAngle$$3$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$, $arcDir2_b11_endAngle$$2$$ = $b1_b12_c1$$1_pathCommands$$, $b21_barCommands_c2$$1$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * D.$DvtFunnelSlice$_LINE_FRACTION$$, $f1$$1_sliceBounds$$ = 0.41, $t1$$ = 0.28 * $h2_totalWidth$$4$$, $h1$$ = 0.72 * $h2_totalWidth$$4$$) : 0.8 > $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ ? 
  ($arcDir1_p1_startAngle$$3$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ - 0.41, $arcDir2_b11_endAngle$$2$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * D.$DvtFunnelSlice$_LINE_FRACTION$$, $b21_barCommands_c2$$1$$ = 0.4 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $f1$$1_sliceBounds$$ = 0.8 - 0.41, $t1$$ = $h2_totalWidth$$4$$ * (0.7 - 0.28), $h1$$ = $h2_totalWidth$$4$$ * (1 - 0.7)) : ($arcDir1_p1_startAngle$$3$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ - 
  0.8, $arcDir2_b11_endAngle$$2$$ = 0.4 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $b21_barCommands_c2$$1$$ = $b2$$1_p2$$1$$, $f1$$1_sliceBounds$$ = 1 - 0.8, $t1$$ = $h2_totalWidth$$4$$ * (1 - 0.7), $h1$$ = 0);
  0.41 > $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$ ? ($b22$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * D.$DvtFunnelSlice$_LINE_FRACTION$$, $b2$$1_p2$$1$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$, $f2$$1$$ = 0.41, $t2$$ = 0.28 * $h2_totalWidth$$4$$, $h2_totalWidth$$4$$ *= 0.72) : 0.8 > $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + 
  $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$ ? ($b1_b12_c1$$1_pathCommands$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * D.$DvtFunnelSlice$_LINE_FRACTION$$, $b22$$ = 0.4 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $b2$$1_p2$$1$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$ - 0.41, $f2$$1$$ = 0.8 - 0.41, $t2$$ = $h2_totalWidth$$4$$ * (0.7 - 0.28), $h2_totalWidth$$4$$ *= 1 - 
  0.7) : ($b1_b12_c1$$1_pathCommands$$ = 0.4 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $b22$$ = $b2$$1_p2$$1$$, $b2$$1_p2$$1$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$ - 0.8, $f2$$1$$ = 1 - 0.8, $t2$$ = $h2_totalWidth$$4$$ * (1 - 0.7), $h2_totalWidth$$4$$ = 0);
  $arcDir1_p1_startAngle$$3$$ = 0.98 * window.Math.asin(((window.Math.sqrt(($f1$$1_sliceBounds$$ - $arcDir1_p1_startAngle$$3$$) / $f1$$1_sliceBounds$$ * $arcDir2_b11_endAngle$$2$$ * $arcDir2_b11_endAngle$$2$$ + $arcDir1_p1_startAngle$$3$$ / $f1$$1_sliceBounds$$ * $b21_barCommands_c2$$1$$ * $b21_barCommands_c2$$1$$) - $b21_barCommands_c2$$1$$) * $t1$$ / ($arcDir2_b11_endAngle$$2$$ - $b21_barCommands_c2$$1$$) + $h1$$) / $gapCount_rx$$);
  $arcDir2_b11_endAngle$$2$$ = 0.98 * window.Math.asin(((window.Math.sqrt(($f2$$1$$ - $b2$$1_p2$$1$$) / $f2$$1$$ * $b1_b12_c1$$1_pathCommands$$ * $b1_b12_c1$$1_pathCommands$$ + $b2$$1_p2$$1$$ / $f2$$1$$ * $b22$$ * $b22$$) - $b22$$) * $t2$$ / ($b1_b12_c1$$1_pathCommands$$ - $b22$$) + $h2_totalWidth$$4$$) / $gapCount_rx$$);
  $b1_b12_c1$$1_pathCommands$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ + $ry$$;
  $b21_barCommands_c2$$1$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ - $ry$$;
  $alpha$$4_isBiDi$$ ? ($ar$$2_offset$$16$$ = [$gapCount_rx$$ * window.Math.sin($arcDir1_p1_startAngle$$3$$) + $ar$$2_offset$$16$$, $b1_b12_c1$$1_pathCommands$$ - $ry$$ * window.Math.cos($arcDir1_p1_startAngle$$3$$), $gapCount_rx$$ * window.Math.sin($arcDir2_b11_endAngle$$2$$) + $ar$$2_offset$$16$$, $b1_b12_c1$$1_pathCommands$$ - $ry$$ * window.Math.cos($arcDir2_b11_endAngle$$2$$), $gapCount_rx$$ * window.Math.sin($arcDir2_b11_endAngle$$2$$) + $ar$$2_offset$$16$$, $b21_barCommands_c2$$1$$ + $ry$$ * 
  window.Math.cos($arcDir2_b11_endAngle$$2$$), $gapCount_rx$$ * window.Math.sin($arcDir1_p1_startAngle$$3$$) + $ar$$2_offset$$16$$, $b21_barCommands_c2$$1$$ + $ry$$ * window.Math.cos($arcDir1_p1_startAngle$$3$$)], $arcDir1_p1_startAngle$$3$$ = 0, $arcDir2_b11_endAngle$$2$$ = 1) : ($ar$$2_offset$$16$$ = [$JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$2_offset$$16$$ - $gapCount_rx$$ * window.Math.sin($arcDir1_p1_startAngle$$3$$), $b1_b12_c1$$1_pathCommands$$ - $ry$$ * window.Math.cos($arcDir1_p1_startAngle$$3$$), 
  $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$2_offset$$16$$ - $gapCount_rx$$ * window.Math.sin($arcDir2_b11_endAngle$$2$$), $b1_b12_c1$$1_pathCommands$$ - $ry$$ * window.Math.cos($arcDir2_b11_endAngle$$2$$), $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$2_offset$$16$$ - $gapCount_rx$$ * window.Math.sin($arcDir2_b11_endAngle$$2$$), $b21_barCommands_c2$$1$$ + $ry$$ * window.Math.cos($arcDir2_b11_endAngle$$2$$), $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - 
  $ar$$2_offset$$16$$ - $gapCount_rx$$ * window.Math.sin($arcDir1_p1_startAngle$$3$$), $b21_barCommands_c2$$1$$ + $ry$$ * window.Math.cos($arcDir1_p1_startAngle$$3$$)], $arcDir1_p1_startAngle$$3$$ = 1, $arcDir2_b11_endAngle$$2$$ = 0);
  $b1_b12_c1$$1_pathCommands$$ = D.$DvtPathUtils$$.moveTo($ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[1]);
  $b21_barCommands_c2$$1$$ = null;
  $b1_b12_c1$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, window.Math.PI, $arcDir2_b11_endAngle$$2$$, $ar$$2_offset$$16$$[6], $ar$$2_offset$$16$$[7]);
  $b1_b12_c1$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, window.Math.PI, $arcDir2_b11_endAngle$$2$$, $ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[1]);
  $b1_b12_c1$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir1_p1_startAngle$$3$$, $ar$$2_offset$$16$$[2], $ar$$2_offset$$16$$[3]);
  $b1_b12_c1$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2, ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2, window.Math.PI, $arcDir2_b11_endAngle$$2$$, $ar$$2_offset$$16$$[4], $ar$$2_offset$$16$$[5]);
  $b1_b12_c1$$1_pathCommands$$ += D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir1_p1_startAngle$$3$$, $ar$$2_offset$$16$$[6], $ar$$2_offset$$16$$[7]);
  $f1$$1_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[2]), $ar$$2_offset$$16$$[5], window.Math.abs($ar$$2_offset$$16$$[0] - $ar$$2_offset$$16$$[2]), window.Math.abs($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]));
  if(null != $JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$) {
    var $barBounds_percent$$1$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$, 1), 0), $alpha$$4_isBiDi$$ = $alpha$$4_isBiDi$$ ? -$barBounds_percent$$1$$ * window.Math.PI : $barBounds_percent$$1$$ * window.Math.PI;
    $b21_barCommands_c2$$1$$ = D.$DvtPathUtils$$.moveTo($ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[1]);
    $b21_barCommands_c2$$1$$ += D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir1_p1_startAngle$$3$$, $ar$$2_offset$$16$$[2], $ar$$2_offset$$16$$[3]);
    $b21_barCommands_c2$$1$$ += D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2, ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2, $alpha$$4_isBiDi$$, $arcDir2_b11_endAngle$$2$$, $ar$$2_offset$$16$$[2] + $ratio$$5$$ * ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2 * window.Math.sin($alpha$$4_isBiDi$$), ($ar$$2_offset$$16$$[5] + $ar$$2_offset$$16$$[3]) / 2 + ($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) / 2 * window.Math.cos($alpha$$4_isBiDi$$));
    $b21_barCommands_c2$$1$$ = 0.95 < $JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$ ? $b21_barCommands_c2$$1$$ + D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir1_p1_startAngle$$3$$, $ar$$2_offset$$16$$[6], $ar$$2_offset$$16$$[1] + $barBounds_percent$$1$$ * ($ar$$2_offset$$16$$[7] - $ar$$2_offset$$16$$[1])) : 0.05 > $JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$ ? $b21_barCommands_c2$$1$$ + D.$DvtPathUtils$$.arcTo($gapCount_rx$$, $ry$$, $angle$$5$$, $arcDir2_b11_endAngle$$2$$, 
    $ar$$2_offset$$16$$[6], $ar$$2_offset$$16$$[1] + $barBounds_percent$$1$$ * ($ar$$2_offset$$16$$[7] - $ar$$2_offset$$16$$[1])) : $b21_barCommands_c2$$1$$ + D.$DvtPathUtils$$.lineTo($ar$$2_offset$$16$$[6] + $ratio$$5$$ * ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2 * window.Math.sin($alpha$$4_isBiDi$$), ($ar$$2_offset$$16$$[7] + $ar$$2_offset$$16$$[1]) / 2 + ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2 * window.Math.cos($alpha$$4_isBiDi$$));
    $b21_barCommands_c2$$1$$ += D.$DvtPathUtils$$.arcTo($ratio$$5$$ * ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, ($ar$$2_offset$$16$$[1] - $ar$$2_offset$$16$$[7]) / 2, $alpha$$4_isBiDi$$, $arcDir1_p1_startAngle$$3$$, $ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[1]);
    $b21_barCommands_c2$$1$$ += D.$DvtPathUtils$$.closePath();
    $barBounds_percent$$1$$ = new D.$DvtRectangle$$(window.Math.min($ar$$2_offset$$16$$[0], $ar$$2_offset$$16$$[2]), $ar$$2_offset$$16$$[5] + window.Math.abs($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) * (1 - $barBounds_percent$$1$$), window.Math.abs($ar$$2_offset$$16$$[0] - $ar$$2_offset$$16$$[2]), window.Math.abs($ar$$2_offset$$16$$[3] - $ar$$2_offset$$16$$[5]) * $barBounds_percent$$1$$)
  }
  return{slice:$b1_b12_c1$$1_pathCommands$$, bar:$b21_barCommands_c2$$1$$, sliceBounds:$f1$$1_sliceBounds$$, barBounds:$b21_barCommands_c2$$1$$ ? $barBounds_percent$$1$$ : $f1$$1_sliceBounds$$}
};
D.$JSCompiler_StaticMethods__getLabelPosition$$ = function $$JSCompiler_StaticMethods__getLabelPosition$$$($JSCompiler_StaticMethods__getLabelPosition$self$$, $sliceBounds$$2$$) {
  var $displacement$$1$$ = $JSCompiler_StaticMethods__getLabelPosition$self$$.$_3dRatio$ * (0.08 * ($sliceBounds$$2$$.$h$ * $JSCompiler_StaticMethods__getLabelPosition$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getLabelPosition$self$$.$_funnelHeight$) / 2), $rotationMatrix$$1$$ = new D.$DvtMatrix$$;
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getLabelPosition$self$$.$getCtx$()) ? ($rotationMatrix$$1$$.rotate(window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 - $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2)) : ($rotationMatrix$$1$$.rotate(3 * window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 + $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 
  2));
  return $rotationMatrix$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtFunnelSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$(), this.$_3dRatio$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$3_cmds$$7$$) {
  this.$_startPercent$ = $ar$$3_cmds$$7$$[0];
  this.$_valuePercent$ = $ar$$3_cmds$$7$$[1];
  this.$_fillPercent$ = null != this.$_fillPercent$ ? $ar$$3_cmds$$7$$[2] : null;
  this.$setAlpha$($ar$$3_cmds$$7$$[3]);
  this.$_3dRatio$ = $ar$$3_cmds$$7$$[4];
  $ar$$3_cmds$$7$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$setCmds$($ar$$3_cmds$$7$$.slice);
  $ar$$3_cmds$$7$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($ar$$3_cmds$$7$$.bar);
  this.$_label$ && this.$_label$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getLabelPosition$$)(this, $ar$$3_cmds$$7$$.sliceBounds))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$7$$) {
  if(null != this.$_bar$) {
    if(this.$IsSelected$ == $selected$$7$$) {
      return
    }
    this.$IsSelected$ = $selected$$7$$;
    this.$_bar$.$setSelected$($selected$$7$$)
  }else {
    D.$DvtFunnelSlice$$.$superclass$.$setSelected$.call(this, $selected$$7$$)
  }
  var $dims$$8$$ = this.$getDimensions$(), $shapeForSelection$$1$$ = null != this.$_bar$ ? this.$_bar$ : this, $w$$8$$ = $dims$$8$$.$w$;
  $selected$$7$$ ? ($shapeForSelection$$1$$.$setScaleX$(($w$$8$$ - 3) / $w$$8$$), $shapeForSelection$$1$$.$setTranslateX$(window.Math.ceil(1.5) + 3 / $w$$8$$ * $dims$$8$$.x)) : ($shapeForSelection$$1$$.$setScaleX$(1), $shapeForSelection$$1$$.$setTranslateX$(0))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  null != this.$_bar$ ? this.$_bar$.$showHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  null != this.$_bar$ ? this.$_bar$.$hideHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$copyShape$ = function $$JSCompiler_prototypeAlias$$$$copyShape$$() {
  return new D.$DvtFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$)
};
D.$DvtPieChart$$ = function $$DvtPieChart$$$($chart$$110$$, $availSpace$$76$$, $callback$$45$$, $callbackObj$$8$$) {
  this.Init($chart$$110$$, $availSpace$$76$$, $callback$$45$$, $callbackObj$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChart$$, D.$DvtContainer$$, "DvtPieChart");
D.$DvtPieChart$$.prototype.Init = function $$DvtPieChart$$$$Init$($chart$$111$$, $availSpace$$77$$) {
  D.$DvtPieChart$$.$superclass$.Init.call(this, $chart$$111$$.$getCtx$());
  this.$chart$ = $chart$$111$$;
  this.$_options$ = $chart$$111$$.$getOptions$();
  this.$_frame$ = $availSpace$$77$$.$clone$();
  $chart$$111$$.$pieChart$ = this;
  for(var $labelPosition$$1_slices$$inline_2338$$ = this.$getLabelPosition$(), $numSeries_otherSlice$$inline_2344_seriesIndices$$inline_2340$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$111$$), $otherValue$$inline_2342_seriesIndex$$38$$ = 0;$otherValue$$inline_2342_seriesIndex$$38$$ < $numSeries_otherSlice$$inline_2344_seriesIndices$$inline_2340$$;$otherValue$$inline_2342_seriesIndex$$38$$++) {
    var $data$$25_i$$inline_2343$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$111$$, $otherValue$$inline_2342_seriesIndex$$38$$, 0);
    if($data$$25_i$$inline_2343$$ && ("center" == $labelPosition$$1_slices$$inline_2338$$ || "none" == $labelPosition$$1_slices$$inline_2338$$) && "outsideSlice" == $data$$25_i$$inline_2343$$.labelPosition) {
      $labelPosition$$1_slices$$inline_2338$$ = "outsideSlice"
    }
  }
  this.$_center$ = new D.$DvtPoint$$($availSpace$$77$$.x + window.Math.floor($availSpace$$77$$.$w$ / 2), $availSpace$$77$$.y + window.Math.floor($availSpace$$77$$.$h$ / 2));
  this.$_radiusY$ = this.$_radiusX$ = window.Math.floor(window.Math.min($availSpace$$77$$.$w$, $availSpace$$77$$.$h$) * ("center" == $labelPosition$$1_slices$$inline_2338$$ || "none" == $labelPosition$$1_slices$$inline_2338$$ ? 0.45 : 0.38));
  this.$_depth$ = 0;
  this.$_anchorOffset$ = 90;
  (0,D.$JSCompiler_StaticMethods_is3D$$)(this) && (this.$_depth$ = 0.1 * $availSpace$$77$$.$h$, this.$_center$.y -= window.Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= 0.59);
  for(var $labelPosition$$1_slices$$inline_2338$$ = [], $seriesIndex$$inline_2341_slice$$inline_2339$$, $numSeries_otherSlice$$inline_2344_seriesIndices$$inline_2340$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$(this.$chart$), $otherValue$$inline_2342_seriesIndex$$38$$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$chart$), $data$$25_i$$inline_2343$$ = 0;$data$$25_i$$inline_2343$$ < $numSeries_otherSlice$$inline_2344_seriesIndices$$inline_2340$$.length;$data$$25_i$$inline_2343$$++) {
    $seriesIndex$$inline_2341_slice$$inline_2339$$ = $numSeries_otherSlice$$inline_2344_seriesIndices$$inline_2340$$[$data$$25_i$$inline_2343$$], D.$DvtChartStyleUtils$$.$isDataItemRendered$(this.$chart$, $seriesIndex$$inline_2341_slice$$inline_2339$$) && ($seriesIndex$$inline_2341_slice$$inline_2339$$ = new D.$DvtPieSlice$$(this, $seriesIndex$$inline_2341_slice$$inline_2339$$), 0 >= $seriesIndex$$inline_2341_slice$$inline_2339$$.getValue() || $labelPosition$$1_slices$$inline_2338$$.push($seriesIndex$$inline_2341_slice$$inline_2339$$))
  }
  0 < $otherValue$$inline_2342_seriesIndex$$38$$ && ($numSeries_otherSlice$$inline_2344_seriesIndices$$inline_2340$$ = new D.$DvtPieSlice$$(this), "ascending" == this.$chart$.$getOptions$().sorting ? $labelPosition$$1_slices$$inline_2338$$.unshift($numSeries_otherSlice$$inline_2344_seriesIndices$$inline_2340$$) : $labelPosition$$1_slices$$inline_2338$$.push($numSeries_otherSlice$$inline_2344_seriesIndices$$inline_2340$$));
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && $labelPosition$$1_slices$$inline_2338$$.reverse();
  this.$_slices$ = $labelPosition$$1_slices$$inline_2338$$;
  this.$_shapesContainer$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtPieChart$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$DvtPieChart$$.prototype.$highlight$ = function $$DvtPieChart$$$$$highlight$$($categories$$2$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$2$$, this.$_slices$, "any" == this.$getOptions$().highlightMatch)
};
(0,D.$goog$exportPath_$$)("DvtPieChart.prototype.highlight", D.$DvtPieChart$$.prototype.$highlight$);
D.$DvtPieChart$$.prototype.$setInitialSelection$ = function $$DvtPieChart$$$$$setInitialSelection$$() {
  var $handler$$28$$ = this.$chart$.$getSelectionHandler$();
  if($handler$$28$$) {
    for(var $otherPeerId_selected$$8$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this.$chart$), $selectedIds$$1$$ = [], $i$$183$$ = 0;$i$$183$$ < $otherPeerId_selected$$8$$.length;$i$$183$$++) {
      for(var $j$$32$$ = 0;$j$$32$$ < this.$_slices$.length;$j$$32$$++) {
        var $peerId$$ = this.$_slices$[$j$$32$$].getId();
        $peerId$$ && ($otherPeerId_selected$$8$$[$i$$183$$].id && $peerId$$.getId() == $otherPeerId_selected$$8$$[$i$$183$$].id || $peerId$$.$getSeries$() == $otherPeerId_selected$$8$$[$i$$183$$].series && $peerId$$.$getGroup$() == $otherPeerId_selected$$8$$[$i$$183$$].group) && $selectedIds$$1$$.push($peerId$$)
      }
    }
    D.$DvtPieChartUtils$$.$isOtherSliceSelected$(this.$chart$, $otherPeerId_selected$$8$$) && ($otherPeerId_selected$$8$$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$chart$), $selectedIds$$1$$.push($otherPeerId_selected$$8$$));
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$28$$, $selectedIds$$1$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$render$ = function $$DvtPieChart$$$$$render$$() {
  var $shadow$$;
  this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new D.$DvtContainer$$(this.$getCtx$())), this.$addChild$(this.$_shapesContainer$), !(0,D.$JSCompiler_StaticMethods_is3D$$)(this) && "skyros" == this.$getSkin$() && ($shadow$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, !1, !1, !1)));
  var $i$$184_i$$inline_2374_slices$$inline_2346$$ = this.$_slices$, $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = this.$_anchorOffset$, $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$, $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$, $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ = 
  0, $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = $i$$184_i$$inline_2374_slices$$inline_2346$$ ? $i$$184_i$$inline_2374_slices$$inline_2346$$.length : 0;
  360 < $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ && ($anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ -= 360);
  0 > $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ && ($anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ += 360);
  var $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ = $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ = 0;
  0 < $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ && ($accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ = $i$$184_i$$inline_2374_slices$$inline_2346$$[0].$_pieChart$.$getTotalValue$());
  for($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$ < $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$;$JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$++) {
    $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$ = $i$$184_i$$inline_2374_slices$$inline_2346$$[$JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$], $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ = $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$.getValue(), $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ = 
    0 == $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ ? 0 : 100 * (window.Math.abs($angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$) / $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$), $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ *= 
    3.6, $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ -= $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$, 0 > $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ && ($anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ += 
    360), $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$.$setAngleStart$($anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$), $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$.$setAngleExtent$($angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$), $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = 
    $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$.$getAngleStart$()
  }
  for($i$$184_i$$inline_2374_slices$$inline_2346$$ = 0;$i$$184_i$$inline_2374_slices$$inline_2346$$ < this.$_slices$.length;$i$$184_i$$inline_2374_slices$$inline_2346$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$ = this.$_slices$[$i$$184_i$$inline_2374_slices$$inline_2346$$];
    $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_bFillerSlice$ ? "color" : D.$DvtChartStyleUtils$$.$getSeriesEffect$($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_chart$);
    $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$getFillColor$();
    $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$getFillPattern$();
    $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = void 0;
    if("pattern" == $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ || null != $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$) {
      $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = new D.$DvtPatternFill$$($accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$, $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$), $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = 
      "pattern"
    }else {
      if("gradient" == $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$) {
        var $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_pieChart$.$getSkin$(), $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = "skyros" == $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ ? 
        297 : 270, $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ = !(0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_pieChart$) ? "2D" : "3D", $arColors$$inline_2365$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$), 
        $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$, $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$), $arAlphas$$inline_2366$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$), $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$), 
        $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = new D.$DvtLinearGradientFill$$($anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$, $arColors$$inline_2365$$, $arAlphas$$inline_2366$$, D.$DvtPieRenderUtils$$.$getGradientRatios$($angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$, 
        $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$), [window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_centerX$ - $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_radiusX$), window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_centerY$ - 
        $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_radiusY$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_radiusX$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_radiusY$)])
      }else {
        $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = new D.$DvtSolidFill$$($color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$)
      }
    }
    $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_topSurface$ = D.$DvtPieRenderUtils$$.$createTopSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$, $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$);
    if(0 < $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_depth$ || $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_radiusX$ != $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_radiusY$) {
      $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = "gradient" == $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$, $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ = new D.$DvtSolidFill$$(D.$DvtColorUtils$$.$getDarker$($color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$, 
      0.6)), $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$ = $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ ? D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$, D.$DvtPieRenderUtils$$.$SIDE$) : $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$, 
      $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ ? D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$, D.$DvtPieRenderUtils$$.$CRUST$) : 
      $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$, $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_leftSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$, D.$DvtPieRenderUtils$$.$SURFACE_LEFT$, $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$), 
      $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_rightSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$, D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$, $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$), $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.$_crustSurface$ = 
      D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$, D.$DvtPieRenderUtils$$.$SURFACE_CRUST$, $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$)
    }
  }
  $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ = this.$_slices$;
  $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$ = [];
  $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$ = $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ ? $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$.length : 0;
  for(var $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = -1, $accumAngleThreshold$$inline_2385_sliceSpanBeforeNoon$$inline_2381$$, $i$$184_i$$inline_2374_slices$$inline_2346$$ = 0;$i$$184_i$$inline_2374_slices$$inline_2346$$ < $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$;$i$$184_i$$inline_2374_slices$$inline_2346$$++) {
    if($angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$[$i$$184_i$$inline_2374_slices$$inline_2346$$], $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ = $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$.$getAngleStart$(), 
    $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$.$getAngleExtent$(), $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = 
    $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ + $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$, 360 < $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ && ($angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ -= 
    360), 0 > $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ && ($angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ += 360), 90 == $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ || 
    90 > $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ && 90 < $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$) {
      $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = $i$$184_i$$inline_2374_slices$$inline_2346$$;
      $accumAngleThreshold$$inline_2385_sliceSpanBeforeNoon$$inline_2381$$ = $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ - 90;
      break
    }
  }
  $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$ = [];
  for($i$$184_i$$inline_2374_slices$$inline_2346$$ = $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$;$i$$184_i$$inline_2374_slices$$inline_2346$$ < $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$;$i$$184_i$$inline_2374_slices$$inline_2346$$++) {
    $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$.push($accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$[$i$$184_i$$inline_2374_slices$$inline_2346$$])
  }
  for($i$$184_i$$inline_2374_slices$$inline_2346$$ = 0;$i$$184_i$$inline_2374_slices$$inline_2346$$ < $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$;$i$$184_i$$inline_2374_slices$$inline_2346$$++) {
    $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$.push($accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$[$i$$184_i$$inline_2374_slices$$inline_2346$$])
  }
  $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ = 0;
  $accumAngleThreshold$$inline_2385_sliceSpanBeforeNoon$$inline_2381$$ = 180 + $accumAngleThreshold$$inline_2385_sliceSpanBeforeNoon$$inline_2381$$;
  for($i$$184_i$$inline_2374_slices$$inline_2346$$ = 0;$i$$184_i$$inline_2374_slices$$inline_2346$$ < $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$;$i$$184_i$$inline_2374_slices$$inline_2346$$++) {
    if($angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$[$i$$184_i$$inline_2374_slices$$inline_2346$$]) {
      if($accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ + $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$.$getAngleExtent$() > $accumAngleThreshold$$inline_2385_sliceSpanBeforeNoon$$inline_2381$$) {
        $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$ = $i$$184_i$$inline_2374_slices$$inline_2346$$;
        break
      }
      $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.push($angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$);
      $accumAngle$$inline_2383_dataTotal$$inline_2354_lateralFill$$inline_2368_pattern$$inline_2360_skin$$inline_2362_slices$$inline_2372$$ += $angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$.$getAngleExtent$()
    }
  }
  for($i$$184_i$$inline_2374_slices$$inline_2346$$ = $color$$inline_2359_nSlices$$inline_2375_sideFill$$inline_2369_slice$$inline_2349$$ - 1;$i$$184_i$$inline_2374_slices$$inline_2346$$ >= $anchorOffset$$inline_2347_angle$$inline_2350_grAngle$$inline_2363_lastSliceIndexToProcess$$inline_2384_rotateIdx$$inline_2377_topFill$$inline_2361$$;$i$$184_i$$inline_2374_slices$$inline_2346$$--) {
    ($angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$ = $angleStart$$inline_2378_arc$$inline_2351_percentage$$inline_2353_rotatedSlices$$inline_2382_style$$inline_2364_value$$inline_2355$$[$i$$184_i$$inline_2374_slices$$inline_2346$$]) && $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.push($angleExtent$$inline_2379_crustFill$$inline_2370_fillType$$inline_2358_nSlices$$inline_2352_slice$$inline_2376_sliceSpanEnd$$inline_2380_useGradientFill$$inline_2367$$)
  }
  D.$DvtPieLabelUtils$$.$createPieCenterLabel$(this);
  this.$_duringDisplayAnim$ || D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$(this);
  for($i$$184_i$$inline_2374_slices$$inline_2346$$ = 0;$i$$184_i$$inline_2374_slices$$inline_2346$$ < $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$.length;$i$$184_i$$inline_2374_slices$$inline_2346$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_2357_i$$inline_2348_zOrderedSlices$$inline_2373$$[$i$$184_i$$inline_2374_slices$$inline_2346$$].$render$(this.$_duringDisplayAnim$)
  }
  (0,D.$DvtAgent$isPlatformWebkit$$)() || $shadow$$ && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shapesContainer$, $shadow$$);
  this.$setInitialSelection$();
  this.$highlight$(D.$DvtChartStyleUtils$$.$getHighlightedCategories$(this.$chart$))
};
D.$DvtPieChart$$.prototype.$getTotalValue$ = function $$DvtPieChart$$$$$getTotalValue$$() {
  for(var $total$$1$$ = 0, $i$$185$$ = 0;$i$$185$$ < this.$_slices$.length;$i$$185$$++) {
    var $sliceValue$$ = this.$_slices$[$i$$185$$].getValue();
    0 <= $sliceValue$$ && ($total$$1$$ += $sliceValue$$)
  }
  return $total$$1$$
};
D.$JSCompiler_StaticMethods_is3D$$ = function $$JSCompiler_StaticMethods_is3D$$$($JSCompiler_StaticMethods_is3D$self$$) {
  return"on" == $JSCompiler_StaticMethods_is3D$self$$.$_options$.styleDefaults.threeDEffect
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return D.$DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$() {
  this.$_duringDisplayAnim$ = !0;
  var $anim_handler$$29$$ = new D.$DvtDataAnimationHandler$$(this.$getCtx$(), this), $duration$$40_labelAnim$$ = this.$getAnimationDuration$(), $ar$$4_fillerAnim_value$$inline_2388$$ = this.$getTotalValue$(), $i$$188_renderAnim_slice$$inline_2389$$ = new D.$DvtPieSlice$$(this);
  $i$$188_renderAnim_slice$$inline_2389$$.$_value$ = $ar$$4_fillerAnim_value$$inline_2388$$;
  $i$$188_renderAnim_slice$$inline_2389$$.$_bFillerSlice$ = !0;
  $i$$188_renderAnim_slice$$inline_2389$$.$_centerX$ = this.$getCenter$().x;
  $i$$188_renderAnim_slice$$inline_2389$$.$_centerY$ = this.$getCenter$().y;
  $i$$188_renderAnim_slice$$inline_2389$$.$_fillColor$ = "rgba(255,255,255,0)";
  $i$$188_renderAnim_slice$$inline_2389$$.$_strokeColor$ = "rgba(255,255,255,0)";
  $i$$188_renderAnim_slice$$inline_2389$$.$_id$ = new D.$DvtChartDataItem$$(null, null, null);
  this.$_slices$.push($i$$188_renderAnim_slice$$inline_2389$$);
  $ar$$4_fillerAnim_value$$inline_2388$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $i$$188_renderAnim_slice$$inline_2389$$, $duration$$40_labelAnim$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($ar$$4_fillerAnim_value$$inline_2388$$.$_animator$, "typeNumberArray", $i$$188_renderAnim_slice$$inline_2389$$, $i$$188_renderAnim_slice$$inline_2389$$.$GetAnimationParams$, $i$$188_renderAnim_slice$$inline_2389$$.$SetAnimationParams$, (0,D.$JSCompiler_StaticMethods_getDeletedAnimationParams$$)($i$$188_renderAnim_slice$$inline_2389$$));
  $ar$$4_fillerAnim_value$$inline_2388$$.$setOnEnd$($i$$188_renderAnim_slice$$inline_2389$$.$_removeDeletedSlice$, $i$$188_renderAnim_slice$$inline_2389$$);
  $anim_handler$$29$$.add($ar$$4_fillerAnim_value$$inline_2388$$, 0);
  for($i$$188_renderAnim_slice$$inline_2389$$ = 0;$i$$188_renderAnim_slice$$inline_2389$$ < this.$_slices$.length - 1;$i$$188_renderAnim_slice$$inline_2389$$++) {
    this.$_slices$[$i$$188_renderAnim_slice$$inline_2389$$].$animateInsert$($anim_handler$$29$$)
  }
  $i$$188_renderAnim_slice$$inline_2389$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, $duration$$40_labelAnim$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($i$$188_renderAnim_slice$$inline_2389$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim_handler$$29$$.add($i$$188_renderAnim_slice$$inline_2389$$, 0);
  $ar$$4_fillerAnim_value$$inline_2388$$ = [];
  for($i$$188_renderAnim_slice$$inline_2389$$ = 0;$i$$188_renderAnim_slice$$inline_2389$$ < this.$_slices$.length;$i$$188_renderAnim_slice$$inline_2389$$++) {
    $ar$$4_fillerAnim_value$$inline_2388$$ = $ar$$4_fillerAnim_value$$inline_2388$$.concat((0,D.$JSCompiler_StaticMethods_getLabelAndFeeler$$)(this.$_slices$[$i$$188_renderAnim_slice$$inline_2389$$]))
  }
  $duration$$40_labelAnim$$ = new D.$DvtAnimFadeIn$$(this.$_context$, $ar$$4_fillerAnim_value$$inline_2388$$, $duration$$40_labelAnim$$);
  $anim_handler$$29$$.add($duration$$40_labelAnim$$, 0);
  this.$_setAnimationParams$();
  $anim_handler$$29$$ = $anim_handler$$29$$.$getAnimation$(!0);
  $anim_handler$$29$$.$setOnEnd$(this.$_onEnd$, this);
  return $anim_handler$$29$$
};
D.$JSCompiler_prototypeAlias$$.$_onEnd$ = function $$JSCompiler_prototypeAlias$$$$_onEnd$$() {
  this.$_duringDisplayAnim$ = !1;
  this.$_setAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$getInnerRadius$ = function $$JSCompiler_prototypeAlias$$$$getInnerRadius$$() {
  return(0,D.$JSCompiler_StaticMethods_is3D$$)(this) ? 0 : 0.95 * this.$_options$.styleDefaults.pieInnerRadius * window.Math.min(this.$_radiusX$, this.$_radiusY$)
};
D.$JSCompiler_prototypeAlias$$.getDepth = (0,D.$JSCompiler_get$$)("$_depth$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$30$$, $oldPie$$) {
  var $anim$$1_sliceAnim_sliceHandler$$ = new D.$DvtDataAnimationHandler$$(this.$getCtx$(), this);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim$$1_sliceAnim_sliceHandler$$, $oldPie$$.$_slices$, this.$_slices$);
  var $anim$$1_sliceAnim_sliceHandler$$ = $anim$$1_sliceAnim_sliceHandler$$.$getAnimation$(!0), $renderAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($renderAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$1_sliceAnim_sliceHandler$$ = new D.$DvtParallelPlayable$$(this.$getCtx$(), $anim$$1_sliceAnim_sliceHandler$$, $renderAnim$$1$$);
  $anim$$1_sliceAnim_sliceHandler$$.$setOnEnd$(this.$_setAnimationParams$, this);
  $handler$$30$$.add($anim$$1_sliceAnim_sliceHandler$$, 0);
  this.$_setAnimationParams$([$oldPie$$.getDepth(), $oldPie$$.$_radiusY$, $oldPie$$.$getCenter$().y])
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[this.$_depth$, this.$_radiusY$, this.$_center$.y]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$19$$) {
  this.$removeChildren$();
  this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
  this.$_shapesContainer$ = null;
  $params$$19$$ && (this.$_depth$ = $params$$19$$[0], this.$_radiusY$ = $params$$19$$[1], this.$_center$.y = $params$$19$$[2]);
  this.$render$()
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($slice$$5$$) {
  var $par$$2$$ = $slice$$5$$.$_pieChart$.$_shapesContainer$;
  if($par$$2$$) {
    var $parentChildCount$$2$$ = $par$$2$$.$getNumChildren$();
    1 < $parentChildCount$$2$$ - this.$_numFrontObjs$ && ($par$$2$$.removeChild($slice$$5$$.$_topSurface$[0]), $par$$2$$.$addChildAt$($slice$$5$$.$_topSurface$[0], $parentChildCount$$2$$ - this.$_numFrontObjs$ - 1))
  }
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($slice$$6$$) {
  for(var $len$$2_par$$3$$ = this.$_slices$.length, $counter_newIndex$$6$$ = 0, $i$$189$$ = 0;$i$$189$$ < $len$$2_par$$3$$;$i$$189$$++) {
    this.$_slices$[$i$$189$$].$isSelected$() && $counter_newIndex$$6$$++
  }
  this.$_numSelectedObjsInFront$ = $counter_newIndex$$6$$;
  if($len$$2_par$$3$$ = $slice$$6$$.$_pieChart$.$_shapesContainer$) {
    $counter_newIndex$$6$$ = $len$$2_par$$3$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $counter_newIndex$$6$$ && ($len$$2_par$$3$$.removeChild($slice$$6$$.$_topSurface$[0]), $len$$2_par$$3$$.$addChildAt$($slice$$6$$.$_topSurface$[0], $counter_newIndex$$6$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$getLabelPosition$$() {
  var $position$$21$$ = this.$_options$.styleDefaults.sliceLabelPosition;
  $position$$21$$ || ($position$$21$$ = this.$_options$.styleDefaults.dataLabelPosition);
  return(0,D.$DvtPieChart$parseLabelPosition$$)($position$$21$$)
};
D.$JSCompiler_StaticMethods_getSeriesLabelPosition$$ = function $$JSCompiler_StaticMethods_getSeriesLabelPosition$$$($JSCompiler_StaticMethods_getSeriesLabelPosition$self$$, $seriesIndex$$40$$) {
  var $position$$22$$ = $JSCompiler_StaticMethods_getSeriesLabelPosition$self$$.$getLabelPosition$(), $data$$26$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods_getSeriesLabelPosition$self$$.$chart$, $seriesIndex$$40$$, 0);
  $data$$26$$ && $data$$26$$.labelPosition && ($position$$22$$ = $data$$26$$.labelPosition);
  return(0,D.$DvtPieChart$parseLabelPosition$$)($position$$22$$)
};
D.$DvtPieChart$parseLabelPosition$$ = function $$DvtPieChart$parseLabelPosition$$$($position$$23$$) {
  return"center" == $position$$23$$ || "inside" == $position$$23$$ ? "center" : "outsideSlice" == $position$$23$$ || "outside" == $position$$23$$ ? "outsideSlice" : "none" == $position$$23$$ ? "none" : "auto"
};
D.$DvtPieChart$$.prototype.$getSkin$ = function $$DvtPieChart$$$$$getSkin$$() {
  return this.$_options$.skin
};
D.$DvtPieSlice$$ = function $$DvtPieSlice$$$($pieChart$$1$$, $seriesIndex$$41$$) {
  this.Init($pieChart$$1$$, $seriesIndex$$41$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieSlice$$, D.$DvtObj$$, "DvtPieSlice");
D.$DvtPieSlice$$.prototype.Init = function $$DvtPieSlice$$$$Init$($pieChart$$2$$, $seriesIndex$$42$$) {
  this.$_pieChart$ = $pieChart$$2$$;
  this.$_chart$ = $pieChart$$2$$.$chart$;
  this.$_angleExtent$ = this.$_angleStart$ = 0;
  this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = null;
  this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_sliceLabelString$ = this.$_sliceLabel$ = null;
  this.$_hasFeeler$ = !1;
  this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = null;
  this.$_selecting$ = this.$_selected$ = !1;
  this.$_centerX$ = this.$_pieChart$.$getCenter$().x;
  this.$_centerY$ = this.$_pieChart$.$getCenter$().y;
  this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
  this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
  this.$_depth$ = this.$_pieChart$.getDepth();
  var $dataItem$$11_options$$64$$ = this.$_chart$.$getOptions$();
  null != $seriesIndex$$42$$ ? ($dataItem$$11_options$$64$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$42$$, 0), this.$_value$ = D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$42$$, 0), this.$_explode$ = D.$DvtPieChartUtils$$.$getSliceExplode$(this.$_chart$, $seriesIndex$$42$$), this.$_fillColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$42$$), this.$_fillPattern$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, $seriesIndex$$42$$, 
  0), this.$_strokeColor$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$42$$), this.$_borderWidth$ = D.$DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, $seriesIndex$$42$$), this.$_customLabel$ = $dataItem$$11_options$$64$$.label, this.$_seriesLabel$ = D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$42$$), this.$_action$ = $dataItem$$11_options$$64$$.action, this.$_drillable$ = D.$DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, $seriesIndex$$42$$, 
  0), this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($dataItem$$11_options$$64$$._id), this.$_id$ = D.$DvtPieChartUtils$$.$getSliceId$(this.$_chart$, $seriesIndex$$42$$), this.$_seriesIndex$ = $seriesIndex$$42$$, this.$_categories$ = D.$DvtChartDataUtils$$.$getDataItemCategories$(this.$_chart$, $seriesIndex$$42$$, 0)) : (this.$_value$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $dataItem$$11_options$$64$$.styleDefaults.otherColor, 
  this.$_fillPattern$ = null, this.$_strokeColor$ = $dataItem$$11_options$$64$$.styleDefaults.borderColor, this.$_borderWidth$ = $dataItem$$11_options$$64$$.styleDefaults.borderWidth, this.$_customLabel$ = null, this.$_seriesLabel$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtChartBundle", "LABEL_OTHER", null), this.$_action$ = null, this.$_drillable$ = !1, this.$_showPopupBehaviors$ = D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$_chart$))
};
D.$DvtPieSlice$$.prototype.$render$ = function $$DvtPieSlice$$$$$render$$($displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$) {
  var $i$$190_topSurface$$inline_2391$$ = this.$_topSurface$, $leftSurface$$inline_2392_len$$3$$ = this.$_leftSurface$, $rightSurface$$inline_2393_shapeArray$$ = this.$_rightSurface$, $crustSurface$$inline_2394_shapeCount$$ = this.$_crustSurface$, $angleStart$$inline_2395_j$$33$$ = this.$_angleStart$, $angleExtent$$inline_2396$$ = this.$_angleExtent$, $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$ = [];
  $leftSurface$$inline_2392_len$$3$$ && ($rightSurface$$inline_2393_shapeArray$$ && $crustSurface$$inline_2394_shapeCount$$) && (270 >= $angleStart$$inline_2395_j$$33$$ && 270 < $angleStart$$inline_2395_j$$33$$ + $angleExtent$$inline_2396$$ ? ($feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($leftSurface$$inline_2392_len$$3$$), $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($rightSurface$$inline_2393_shapeArray$$), $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($crustSurface$$inline_2394_shapeCount$$)) : 
  270 < $angleStart$$inline_2395_j$$33$$ || 90 >= $angleStart$$inline_2395_j$$33$$ + $angleExtent$$inline_2396$$ ? ($feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($leftSurface$$inline_2392_len$$3$$), $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($crustSurface$$inline_2394_shapeCount$$), $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($rightSurface$$inline_2393_shapeArray$$)) : ($feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($rightSurface$$inline_2393_shapeArray$$), 
  $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($crustSurface$$inline_2394_shapeCount$$), $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($leftSurface$$inline_2392_len$$3$$)));
  $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.push($i$$190_topSurface$$inline_2391$$);
  $leftSurface$$inline_2392_len$$3$$ = $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$.length;
  for($i$$190_topSurface$$inline_2391$$ = 0;$i$$190_topSurface$$inline_2391$$ < $leftSurface$$inline_2392_len$$3$$;$i$$190_topSurface$$inline_2391$$++) {
    $rightSurface$$inline_2393_shapeArray$$ = $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$[$i$$190_topSurface$$inline_2391$$];
    $crustSurface$$inline_2394_shapeCount$$ = $rightSurface$$inline_2393_shapeArray$$.length;
    for($angleStart$$inline_2395_j$$33$$ = 0;$angleStart$$inline_2395_j$$33$$ < $crustSurface$$inline_2394_shapeCount$$;$angleStart$$inline_2395_j$$33$$++) {
      this.$_pieChart$.$_shapesContainer$.$addChild$($rightSurface$$inline_2393_shapeArray$$[$angleStart$$inline_2395_j$$33$$]), $rightSurface$$inline_2393_shapeArray$$[$angleStart$$inline_2395_j$$33$$].$render$ && $rightSurface$$inline_2393_shapeArray$$[$angleStart$$inline_2395_j$$33$$].$render$()
    }
  }
  this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), D.$DvtPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), $displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_hasFeeler$ && ($displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerStart$, 
  this.$_outsideFeelerMid$), $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$), this.$_feelerRad$ = $displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$, this.$_feelerHoriz$ = $feelerHoriz$$inline_2401_sortedSurfaces$$inline_2397$$));
  (0,D.$JSCompiler_StaticMethods__explodeSlice$$)(this);
  if(this.$_action$ || this.$_drillable$) {
    $displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$ = this.$getDisplayables$();
    for($i$$190_topSurface$$inline_2391$$ = 0;$i$$190_topSurface$$inline_2391$$ < $displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$.length;$i$$190_topSurface$$inline_2391$$++) {
      $displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$[$i$$190_topSurface$$inline_2391$$].setCursor("pointer")
    }
  }
  if($displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this)) {
    $displayable$$10_duringDisplayAnim_feelerRad$$inline_2400_sliceDisplayables$$.$setAriaRole$("img"), this.$_updateAriaLabel$()
  }
};
D.$JSCompiler_StaticMethods__feelerFromPts$$ = function $$JSCompiler_StaticMethods__feelerFromPts$$$($JSCompiler_StaticMethods__feelerFromPts$self$$, $feeler_pt1$$, $color$$11_pt2_stroke$$17$$) {
  $feeler_pt1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getCtx$(), $feeler_pt1$$.x, $feeler_pt1$$.y, $color$$11_pt2_stroke$$17$$.x, $color$$11_pt2_stroke$$17$$.y);
  $color$$11_pt2_stroke$$17$$ = $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor;
  $color$$11_pt2_stroke$$17$$ = new D.$DvtSolidStroke$$($color$$11_pt2_stroke$$17$$);
  $feeler_pt1$$.$setStroke$($color$$11_pt2_stroke$$17$$);
  $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$addChild$($feeler_pt1$$);
  return $feeler_pt1$$
};
D.$JSCompiler_StaticMethods__explodeSlice$$ = function $$JSCompiler_StaticMethods__explodeSlice$$$($JSCompiler_StaticMethods__explodeSlice$self$$) {
  if(0 != $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$) {
    var $offsets_oldStartX_radian$$ = (360 - ($JSCompiler_StaticMethods__explodeSlice$self$$.$_angleStart$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_angleExtent$ / 2)) * D.$DvtMath$$.$RADS_PER_DEGREE$, $oldStartY_tilt$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$) ? 0.59 : 1, $explodeOffset_newStartX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$ * $JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$.$_radiusX$ * 
    (0.5 / 0.45 - 1);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = window.Math.cos($offsets_oldStartX_radian$$) * $explodeOffset_newStartX$$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = window.Math.sin($offsets_oldStartX_radian$$) * $oldStartY_tilt$$ * $explodeOffset_newStartX$$;
    (0,D.$DvtAgent$isPlatformWebkit$$)() && ($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = window.Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = window.Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$))
  }else {
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = 0, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = 0
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$ && ($offsets_oldStartX_radian$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$) && $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$[0].$getSelectionOffset$ ? $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$[0].$getSelectionOffset$() : [], (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$, $offsets_oldStartX_radian$$[0] ? 
  $offsets_oldStartX_radian$$[0] + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ : $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $offsets_oldStartX_radian$$[1] ? $offsets_oldStartX_radian$$[1] + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ : $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$));
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  if($JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$) {
    var $offsets_oldStartX_radian$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.x, $oldStartY_tilt$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.y, $explodeOffset_newStartX$$ = $offsets_oldStartX_radian$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $newStartY$$ = $oldStartY_tilt$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX1$($explodeOffset_newStartX$$);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY1$($newStartY$$);
    var $oldMidX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.x, $oldMidY$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.y;
    0 < $oldMidX$$ - $offsets_oldStartX_radian$$ != 0 < $oldMidX$$ - $explodeOffset_newStartX$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($explodeOffset_newStartX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($explodeOffset_newStartX$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($oldMidX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($oldMidX$$));
    0 < $oldMidY$$ - $oldStartY_tilt$$ != 0 < $oldMidY$$ - $newStartY$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($newStartY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($newStartY$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($oldMidY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($oldMidY$$))
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$ && !$JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$)
};
D.$DvtPieSlice$_translateShapes$$ = function $$DvtPieSlice$_translateShapes$$$($shapes$$2$$, $tx$$, $ty$$) {
  if($shapes$$2$$) {
    for(var $len$$4$$ = $shapes$$2$$.length, $i$$191$$ = 0;$i$$191$$ < $len$$4$$;$i$$191$$++) {
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($shapes$$2$$[$i$$191$$], $tx$$, $ty$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getCenter$ = function $$JSCompiler_prototypeAlias$$$$getCenter$$() {
  return new D.$DvtPoint$$(this.$_centerX$, this.$_centerY$)
};
D.$JSCompiler_prototypeAlias$$.getDepth = (0,D.$JSCompiler_get$$)("$_depth$");
D.$JSCompiler_prototypeAlias$$.$getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$setAngleExtent$ = (0,D.$JSCompiler_set$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$getAngleStart$ = (0,D.$JSCompiler_get$$)("$_angleStart$");
D.$JSCompiler_prototypeAlias$$.$setAngleStart$ = (0,D.$JSCompiler_set$$)("$_angleStart$");
D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$ = function $$JSCompiler_StaticMethods_setNoOutsideFeeler$$$($JSCompiler_StaticMethods_setNoOutsideFeeler$self$$) {
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerStart$ = null;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerMid$ = null;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerEnd$ = null;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_hasFeeler$ = !1
};
D.$JSCompiler_StaticMethods_getLabelAndFeeler$$ = function $$JSCompiler_StaticMethods_getLabelAndFeeler$$$($JSCompiler_StaticMethods_getLabelAndFeeler$self$$) {
  var $ar$$5$$ = [];
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$ && $ar$$5$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$ && $ar$$5$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$ && $ar$$5$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$);
  return $ar$$5$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$JSCompiler_prototypeAlias$$.getValue = (0,D.$JSCompiler_get$$)("$_value$");
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$82$$, $y$$60$$) {
  for(var $ir$$1$$ = this.$_pieChart$.$getInnerRadius$(), $angle$$8_c$$4_containsAngle$$ = this.$_pieChart$.$getCenter$(), $cos_distance$$1$$ = ($x$$82$$ - $angle$$8_c$$4_containsAngle$$.x) / this.$_radiusX$, $sin$$ = ($y$$60$$ - $angle$$8_c$$4_containsAngle$$.y) / this.$_radiusY$, $angle$$8_c$$4_containsAngle$$ = -window.Math.atan2($sin$$, $cos_distance$$1$$) * (180 / window.Math.PI);$angle$$8_c$$4_containsAngle$$ < this.$_angleStart$;) {
    $angle$$8_c$$4_containsAngle$$ += 360
  }
  for(;360 <= $angle$$8_c$$4_containsAngle$$ - this.$_angleStart$;) {
    $angle$$8_c$$4_containsAngle$$ -= 360
  }
  $cos_distance$$1$$ = window.Math.pow($cos_distance$$1$$, 2) + window.Math.pow($sin$$, 2);
  $angle$$8_c$$4_containsAngle$$ = $angle$$8_c$$4_containsAngle$$ <= this.$_angleStart$ + this.$_angleExtent$;
  return window.Math.sqrt($cos_distance$$1$$) > $ir$$1$$ / this.$_radiusX$ && 1 >= $cos_distance$$1$$ && $angle$$8_c$$4_containsAngle$$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$5$$ = D.$DvtColorUtils$$.$getRed$(this.$_fillColor$), $g$$4$$ = D.$DvtColorUtils$$.$getGreen$(this.$_fillColor$), $b$$2$$ = D.$DvtColorUtils$$.$getBlue$(this.$_fillColor$), $a$$23$$ = D.$DvtColorUtils$$.$getAlpha$(this.$_fillColor$);
  return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$, this.$_centerX$, this.$_centerY$, this.$_depth$, $r$$5$$, $g$$4$$, $b$$2$$, $a$$23$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$20$$) {
  this.$_value$ = $params$$20$$[0];
  this.$_radiusX$ = $params$$20$$[1];
  this.$_radiusY$ = $params$$20$$[2];
  this.$_explode$ = $params$$20$$[3];
  this.$_centerX$ = $params$$20$$[4];
  this.$_centerY$ = $params$$20$$[5];
  this.$_depth$ = $params$$20$$[6];
  this.$_fillColor$ = D.$DvtColorUtils$$.$makeRGBA$(window.Math.round($params$$20$$[7]), window.Math.round($params$$20$$[8]), window.Math.round($params$$20$$[9]), window.Math.round($params$$20$$[10]))
};
D.$JSCompiler_StaticMethods_getDeletedAnimationParams$$ = function $$JSCompiler_StaticMethods_getDeletedAnimationParams$$$($JSCompiler_StaticMethods_getDeletedAnimationParams$self$$) {
  var $params$$21$$ = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$GetAnimationParams$();
  $params$$21$$[0] = 0;
  $params$$21$$[1] = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$getInnerRadius$();
  $params$$21$$[2] = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$getInnerRadius$();
  $params$$21$$[3] = 0;
  return $params$$21$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$33$$, $oldSlice$$) {
  var $startState$$5$$ = $oldSlice$$.$GetAnimationParams$(), $endState$$12$$ = this.$GetAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$5$$, $endState$$12$$)) {
    var $anim$$2$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$2$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $endState$$12$$);
    $handler$$33$$.add($anim$$2$$, 0);
    this.$SetAnimationParams$($startState$$5$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$34$$) {
  var $anim$$3$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$3$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
  $handler$$34$$.add($anim$$3$$, 0);
  this.$SetAnimationParams$((0,D.$JSCompiler_StaticMethods_getDeletedAnimationParams$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$35$$, $container$$66$$) {
  var $anim$$4_newSlices$$ = $container$$66$$.$_slices$, $oldSlices_prevId$$ = this.$_pieChart$.$_slices$, $i$$192_prevIndex$$3$$ = D.$DvtArrayUtils$$.$getIndex$($oldSlices_prevId$$, this) - 1;
  if(0 <= $i$$192_prevIndex$$3$$) {
    $oldSlices_prevId$$ = $oldSlices_prevId$$[$i$$192_prevIndex$$3$$].getId();
    for($i$$192_prevIndex$$3$$ = 0;$i$$192_prevIndex$$3$$ < $anim$$4_newSlices$$.length;$i$$192_prevIndex$$3$$++) {
      if($anim$$4_newSlices$$[$i$$192_prevIndex$$3$$].getId().$equals$($oldSlices_prevId$$)) {
        $anim$$4_newSlices$$.splice($i$$192_prevIndex$$3$$ + 1, 0, this);
        break
      }
    }
  }else {
    $anim$$4_newSlices$$.splice(0, 0, this)
  }
  this.$_pieChart$ = $container$$66$$;
  $anim$$4_newSlices$$ = new D.$DvtCustomAnimation$$($container$$66$$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$4_newSlices$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, (0,D.$JSCompiler_StaticMethods_getDeletedAnimationParams$$)(this));
  $anim$$4_newSlices$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
  $handler$$35$$.add($anim$$4_newSlices$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedSlice$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedSlice$$() {
  var $slices$$3$$ = this.$_pieChart$.$_slices$, $index$$133$$ = D.$DvtArrayUtils$$.$getIndex$($slices$$3$$, this);
  0 <= $index$$133$$ && $slices$$3$$.splice($index$$133$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  var $ret$$8$$ = [];
  this.$_topSurface$ && ($ret$$8$$ = $ret$$8$$.concat(this.$_topSurface$));
  this.$_leftSurface$ && ($ret$$8$$ = $ret$$8$$.concat(this.$_leftSurface$));
  this.$_rightSurface$ && ($ret$$8$$ = $ret$$8$$.concat(this.$_rightSurface$));
  this.$_crustSurface$ && ($ret$$8$$ = $ret$$8$$.concat(this.$_crustSurface$));
  this.$_sliceLabel$ && $ret$$8$$.push(this.$_sliceLabel$);
  this.$_feelerRad$ && $ret$$8$$.push(this.$_feelerRad$);
  this.$_feelerHoriz$ && $ret$$8$$.push(this.$_feelerHoriz$);
  return $ret$$8$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $shortDesc$$2$$;
  $shortDesc$$2$$ = null == this.$_seriesIndex$ ? D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, !1) : D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, !1);
  var $percentageLabel_states$$2$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtChartBundle", "LABEL_PERCENTAGE", null), $percentage$$1$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$(this, "percent");
  $shortDesc$$2$$ += "; " + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$percentageLabel_states$$2$$, $percentage$$1$$]);
  $percentageLabel_states$$2$$ = [];
  this.$isSelectable$() && $percentageLabel_states$$2$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  D.$DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$) && $percentageLabel_states$$2$$.push((0,D.$DvtBundle$getTranslation$$)(this.$_pieChart$.$getOptions$(), "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($shortDesc$$2$$, $percentageLabel_states$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  var $displayable$$11$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this);
  $displayable$$11$$ && !(0,D.$DvtAgent$deferAriaCreation$$)() && $displayable$$11$$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_StaticMethods_getTopDisplayable$$ = function $$JSCompiler_StaticMethods_getTopDisplayable$$$($JSCompiler_StaticMethods_getTopDisplayable$self$$) {
  return $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$ && 0 < $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$.length ? $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$[0] : null
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_chart$.$isSelectionSupported$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$1$$, $isInitial$$) {
  (this.$_selected$ = $bSelected$$1$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  if(D.$DvtChartStyleUtils$$.$isSelectionHighlighted$(this.$_chart$)) {
    for(var $explode_shapeArr$$ = this.$getDisplayables$(), $anim$$5_i$$193$$ = 0;$anim$$5_i$$193$$ < $explode_shapeArr$$.length;$anim$$5_i$$193$$++) {
      $explode_shapeArr$$[$anim$$5_i$$193$$] instanceof D.$DvtSelectableWedge$$ && $explode_shapeArr$$[$anim$$5_i$$193$$].$setSelected$($bSelected$$1$$)
    }
  }
  D.$DvtChartStyleUtils$$.$isSelectionExploded$(this.$_chart$) && ($explode_shapeArr$$ = $bSelected$$1$$ ? 1 : 0, !$isInitial$$ && "none" != D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this.$_chart$) ? ($anim$$5_i$$193$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$() / 2), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$5_i$$193$$.$_animator$, "typeNumber", this, this.$getExplode$, this.$setExplode$, $explode_shapeArr$$), $anim$$5_i$$193$$.play()) : 
  this.$setExplode$($explode_shapeArr$$));
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_selecting$ = !0;
  this.$_pieChart$.$bringToFrontOfSelection$(this);
  for(var $shapeArr$$1$$ = this.$getDisplayables$(), $i$$194$$ = 0;$i$$194$$ < $shapeArr$$1$$.length;$i$$194$$++) {
    $shapeArr$$1$$[$i$$194$$] instanceof D.$DvtSelectableWedge$$ && $shapeArr$$1$$[$i$$194$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_selecting$ = !1;
  this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  for(var $shapeArr$$2$$ = this.$getDisplayables$(), $i$$195$$ = 0;$i$$195$$ < $shapeArr$$2$$.length;$i$$195$$++) {
    $shapeArr$$2$$[$i$$195$$] instanceof D.$DvtSelectableWedge$$ && $shapeArr$$2$$[$i$$195$$].$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$60$$) {
  return $target$$60$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getFillColor$()
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_categories$ && 0 < this.$_categories$.length ? this.$_categories$ : [this.getId().$getSeries$()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$142_rtl$$6$$) {
  var $keyCode$$15$$ = $event$$142_rtl$$6$$.keyCode;
  if($event$$142_rtl$$6$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $keyCode$$15$$ && $event$$142_rtl$$6$$.ctrlKey) {
    return this
  }
  $event$$142_rtl$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_chart$.$getCtx$());
  var $slices$$4$$ = this.$_pieChart$.$_slices$, $idx$$4$$ = D.$DvtArrayUtils$$.$getIndex$($slices$$4$$, this), $next$$1$$ = null;
  if(39 == $keyCode$$15$$ || 40 == $keyCode$$15$$ && !$event$$142_rtl$$6$$ || 38 == $keyCode$$15$$ && $event$$142_rtl$$6$$) {
    $next$$1$$ = $idx$$4$$ < $slices$$4$$.length - 1 ? $slices$$4$$[$idx$$4$$ + 1] : $slices$$4$$[0]
  }else {
    if(37 == $keyCode$$15$$ || 40 == $keyCode$$15$$ && $event$$142_rtl$$6$$ || 38 == $keyCode$$15$$ && !$event$$142_rtl$$6$$) {
      $next$$1$$ = 0 == $idx$$4$$ ? $slices$$4$$[$slices$$4$$.length - 1] : $slices$$4$$[$idx$$4$$ - 1]
    }
  }
  return $next$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$6$$) {
  var $displayables$$4$$ = this.$getDisplayables$();
  return $displayables$$4$$[0] ? $displayables$$4$$[0].$getDimensions$($targetCoordinateSpace$$6$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  var $displayables$$5$$ = this.$getDisplayables$();
  return $displayables$$5$$[0] ? $displayables$$5$$[0].$getElem$() : null
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getExplode$ = (0,D.$JSCompiler_get$$)("$_explode$");
D.$JSCompiler_prototypeAlias$$.$setExplode$ = function $$JSCompiler_prototypeAlias$$$$setExplode$$($explode$$1$$) {
  this.$_explode$ = $explode$$1$$;
  (0,D.$JSCompiler_StaticMethods__explodeSlice$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesLabel$ = (0,D.$JSCompiler_get$$)("$_seriesLabel$");
D.$JSCompiler_prototypeAlias$$.$getFillColor$ = (0,D.$JSCompiler_get$$)("$_fillColor$");
D.$JSCompiler_prototypeAlias$$.$getFillPattern$ = (0,D.$JSCompiler_get$$)("$_fillPattern$");
D.$JSCompiler_prototypeAlias$$.$getStrokeColor$ = (0,D.$JSCompiler_get$$)("$_strokeColor$");
D.$JSCompiler_prototypeAlias$$.$getBorderWidth$ = (0,D.$JSCompiler_get$$)("$_borderWidth$");
D.$JSCompiler_prototypeAlias$$.$getInnerRadius$ = function $$JSCompiler_prototypeAlias$$$$getInnerRadius$$() {
  return this.$_pieChart$.$getInnerRadius$()
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$() {
  return null == this.$_seriesIndex$ ? D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, !0) : D.$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, !0)
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtAnimOnDisplay$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDisplay$$, D.$DvtObj$$, "DvtAnimOnDisplay");
D.$DvtAnimOnDisplay$$.$createAnimation$ = function $$DvtAnimOnDisplay$$$$createAnimation$$($chart$$19$$, $arPlayables_type$$68$$, $duration$$12$$) {
  $arPlayables_type$$68$$ = [];
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$19$$)) {
    D.$DvtAnimOnDisplay$$.$_animBarLineArea$($chart$$19$$, $duration$$12$$, $arPlayables_type$$68$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$19$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$19$$)) {
      D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$($chart$$19$$, $duration$$12$$, $arPlayables_type$$68$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isPie$($chart$$19$$) && $chart$$19$$.$pieChart$) {
        return $chart$$19$$.$pieChart$.$getDisplayAnimation$()
      }
    }
  }
  return 0 < $arPlayables_type$$68$$.length ? new D.$DvtParallelPlayable$$($chart$$19$$.$getCtx$(), $arPlayables_type$$68$$) : null
};
D.$DvtAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtAnimOnDisplay$$$$_animBarLineArea$$($chart$$20$$, $duration$$13$$, $arPlayables$$1$$) {
  var $objs$$1$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$20$$), $objCount$$ = $objs$$1$$ ? $objs$$1$$.length : 0;
  if($objCount$$) {
    for(var $obj$$62$$, $nodePlayable_peer$$4$$, $i$$156$$ = 0;$i$$156$$ < $objCount$$;$i$$156$$++) {
      $nodePlayable_peer$$4$$ = $objs$$1$$[$i$$156$$];
      $obj$$62$$ = $nodePlayable_peer$$4$$.$getDisplayables$()[0];
      var $seriesType$$ = $nodePlayable_peer$$4$$.$getSeriesType$();
      $nodePlayable_peer$$4$$ = null;
      if($obj$$62$$ instanceof D.$DvtChartBar$$ || $obj$$62$$ instanceof D.$DvtChartPolarBar$$ || $obj$$62$$ instanceof D.$DvtChartCandlestick$$) {
        $nodePlayable_peer$$4$$ = $obj$$62$$.$getDisplayAnimation$($duration$$13$$)
      }else {
        if($obj$$62$$ instanceof D.$DvtChartLineArea$$) {
          $nodePlayable_peer$$4$$ = "line" == $seriesType$$ ? D.$DvtAnimOnDisplay$$.$_getLinePlayable$($chart$$20$$, $obj$$62$$, $duration$$13$$) : D.$DvtAnimOnDisplay$$.$_getAreaPlayable$($chart$$20$$, $obj$$62$$, $duration$$13$$)
        }else {
          if($obj$$62$$ instanceof D.$DvtSimpleMarker$$ || $obj$$62$$ instanceof D.$DvtChartRangeMarker$$) {
            if($obj$$62$$ instanceof D.$DvtChartLineMarker$$ && !$obj$$62$$.$isSelected$()) {
              continue
            }
            $nodePlayable_peer$$4$$ = new D.$DvtAnimFadeIn$$($chart$$20$$.$getCtx$(), $obj$$62$$, $duration$$13$$ - 0.8, 0.8)
          }
        }
      }
      $nodePlayable_peer$$4$$ && $arPlayables$$1$$.push($nodePlayable_peer$$4$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtAnimOnDisplay$$$$_animBubbleScatterFunnel$$($chart$$21$$, $duration$$14$$, $arPlayables$$2$$) {
  var $objs$$2$$ = $chart$$21$$.$getObjects$(), $objCount$$1$$ = $objs$$2$$ ? $objs$$2$$.length : 0;
  if($objCount$$1$$) {
    for(var $obj$$63_peer$$5$$, $nodePlayable$$1$$, $i$$157$$ = 0;$i$$157$$ < $objCount$$1$$;$i$$157$$++) {
      $obj$$63_peer$$5$$ = $objs$$2$$[$i$$157$$], $obj$$63_peer$$5$$ = $obj$$63_peer$$5$$.$getDisplayables$()[0], $obj$$63_peer$$5$$ instanceof D.$DvtSimpleMarker$$ ? $nodePlayable$$1$$ = new D.$DvtAnimPopIn$$($chart$$21$$.$getCtx$(), $obj$$63_peer$$5$$, !0, $duration$$14$$) : $obj$$63_peer$$5$$ instanceof D.$DvtFunnelSlice$$ && ($nodePlayable$$1$$ = D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$($chart$$21$$, $obj$$63_peer$$5$$, $duration$$14$$)), $nodePlayable$$1$$ && $arPlayables$$2$$.push($nodePlayable$$1$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getAreaPlayable$$($chart$$22_nodePlayable$$2$$, $shape$$23$$, $duration$$15_topAnim$$) {
  var $context$$39$$ = $chart$$22_nodePlayable$$2$$.$getCtx$(), $baselineCoord$$ = $shape$$23$$.$_baseline$, $baseAnim_baseParams$$;
  if($shape$$23$$.$isArea$()) {
    var $baseCoords$$ = $shape$$23$$.$_arBaseCoord$;
    $baseAnim_baseParams$$ = $shape$$23$$.$getBaseAnimationParams$();
    for(var $baseEndState_endState$$ = $baseAnim_baseParams$$.slice(0), $j$$28$$ = 0;$j$$28$$ < $baseAnim_baseParams$$.length;$j$$28$$++) {
      if(1 == $j$$28$$ % 4 || 2 == $j$$28$$ % 4) {
        $baseAnim_baseParams$$[$j$$28$$] = $baselineCoord$$
      }
    }
    $shape$$23$$.$setBaseAnimationParams$($baseAnim_baseParams$$);
    $baseAnim_baseParams$$ = new D.$DvtCustomAnimation$$($context$$39$$, $shape$$23$$, $duration$$15_topAnim$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim_baseParams$$.$_animator$, "typeNumberArray", $shape$$23$$, $shape$$23$$.$getBaseAnimationParams$, $shape$$23$$.$setBaseAnimationParams$, $baseEndState_endState$$)
  }
  for(var $coords$$6$$ = $shape$$23$$.$_arCoord$, $params$$7$$ = $shape$$23$$.$getAnimationParams$(), $baseEndState_endState$$ = $params$$7$$.slice(0), $j$$28$$ = 0;$j$$28$$ < $params$$7$$.length;$j$$28$$++) {
    if(1 == $j$$28$$ % 4 || 2 == $j$$28$$ % 4) {
      $params$$7$$[$j$$28$$] = $baselineCoord$$
    }
  }
  $shape$$23$$.$setAnimationParams$($params$$7$$);
  $duration$$15_topAnim$$ = new D.$DvtCustomAnimation$$($context$$39$$, $shape$$23$$, $duration$$15_topAnim$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$15_topAnim$$.$_animator$, "typeNumberArray", $shape$$23$$, $shape$$23$$.$getAnimationParams$, $shape$$23$$.$setAnimationParams$, $baseEndState_endState$$);
  $chart$$22_nodePlayable$$2$$ = new D.$DvtParallelPlayable$$($chart$$22_nodePlayable$$2$$.$getCtx$(), $baseAnim_baseParams$$, $duration$$15_topAnim$$);
  $chart$$22_nodePlayable$$2$$.$setOnEnd$(function() {
    $shape$$23$$.$setCoords$($coords$$6$$, $baseCoords$$)
  });
  return $chart$$22_nodePlayable$$2$$
};
D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtAnimOnDisplay$$$$_getFunnelPlayable$$($chart$$23_context$$40$$, $slice$$, $duration$$16_nodePlayable2$$) {
  $chart$$23_context$$40$$ = $chart$$23_context$$40$$.$getCtx$();
  var $arPoints_nodePlayable1$$ = $slice$$.$getAnimationParams$(), $endState1$$ = $arPoints_nodePlayable1$$.slice(0), $endState2$$ = $arPoints_nodePlayable1$$.slice(0);
  $arPoints_nodePlayable1$$[0] = 0;
  $arPoints_nodePlayable1$$[2] = 0;
  $endState1$$[2] = 0;
  $slice$$.$setAnimationParams$($arPoints_nodePlayable1$$);
  $arPoints_nodePlayable1$$ = new D.$DvtCustomAnimation$$($chart$$23_context$$40$$, $slice$$, $duration$$16_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($arPoints_nodePlayable1$$.$_animator$, "typeNumberArray", $slice$$, $slice$$.$getAnimationParams$, $slice$$.$setAnimationParams$, $endState1$$);
  $duration$$16_nodePlayable2$$ = new D.$DvtCustomAnimation$$($chart$$23_context$$40$$, $slice$$, $duration$$16_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$16_nodePlayable2$$.$_animator$, "typeNumberArray", $slice$$, $slice$$.$getAnimationParams$, $slice$$.$setAnimationParams$, $endState2$$);
  return new D.$DvtSequentialPlayable$$($chart$$23_context$$40$$, [$arPoints_nodePlayable1$$, $duration$$16_nodePlayable2$$])
};
D.$DvtAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtAnimOnDisplay$$$$_getLinePlayable$$($chart$$24_nodePlayable$$3$$, $line$$6$$, $duration$$17$$) {
  var $coords$$7$$ = $line$$6$$.$_arCoord$, $params$$8$$ = $line$$6$$.$getAnimationParams$(), $endState$$1$$ = $params$$8$$.slice(0);
  D.$DvtAnimOnDisplay$$.$_getMeanPoints$($params$$8$$);
  $line$$6$$.$setAnimationParams$($params$$8$$);
  $chart$$24_nodePlayable$$3$$ = new D.$DvtCustomAnimation$$($chart$$24_nodePlayable$$3$$.$getCtx$(), $line$$6$$, $duration$$17$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$24_nodePlayable$$3$$.$_animator$, "typeNumberArray", $line$$6$$, $line$$6$$.$getAnimationParams$, $line$$6$$.$setAnimationParams$, $endState$$1$$);
  $chart$$24_nodePlayable$$3$$.$setOnEnd$(function() {
    $line$$6$$.$setCoords$($coords$$7$$)
  });
  return $chart$$24_nodePlayable$$3$$
};
D.$DvtAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtAnimOnDisplay$$$$_getMeanPoints$$($params$$9$$) {
  var $mean$$ = 0, $min$$1$$ = window.Number.MAX_VALUE, $max$$1$$ = window.Number.MIN_VALUE, $len$$1$$ = $params$$9$$.length, $i$$158$$;
  for($i$$158$$ = 0;$i$$158$$ < $len$$1$$;$i$$158$$++) {
    var $v$$2$$ = $params$$9$$[$i$$158$$];
    0 == $i$$158$$ % 4 || (3 == $i$$158$$ % 4 || window.Infinity == $v$$2$$) || ($v$$2$$ < $min$$1$$ && ($min$$1$$ = $v$$2$$), $v$$2$$ > $max$$1$$ && ($max$$1$$ = $v$$2$$), $mean$$ += $v$$2$$)
  }
  8 < $len$$1$$ ? ($mean$$ = $mean$$ - 2 * $min$$1$$ - 2 * $max$$1$$, $mean$$ /= $len$$1$$ / 2 - 4) : $mean$$ /= $len$$1$$ / 2;
  for($i$$158$$ = 0;$i$$158$$ < $len$$1$$;$i$$158$$++) {
    if(1 == $i$$158$$ % 4 || 2 == $i$$158$$ % 4) {
      $params$$9$$[$i$$158$$] = $mean$$
    }
  }
};
D.$DvtAnimOnDC$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDC$$, D.$DvtObj$$, "DvtAnimOnDC");
D.$DvtAnimOnDC$$.$createAnimation$ = function $$DvtAnimOnDC$$$$createAnimation$$($handler$$9_i$$154_oldChart$$1$$, $newChart_newLabels$$, $ctx_type$$67$$, $duration$$10$$, $delContainer$$) {
  if(!D.$DvtAnimOnDC$$.$_canAnimate$($handler$$9_i$$154_oldChart$$1$$, $newChart_newLabels$$)) {
    return null
  }
  $ctx_type$$67$$ = $newChart_newLabels$$.$getCtx$();
  var $arOldList$$ = [], $arNewList$$ = [];
  D.$DvtChartTypeUtils$$.$isPie$($newChart_newLabels$$) ? ($arOldList$$.push($handler$$9_i$$154_oldChart$$1$$.$pieChart$), $arNewList$$.push($newChart_newLabels$$.$pieChart$)) : D.$DvtAnimOnDC$$.$_buildAnimLists$($arOldList$$, $handler$$9_i$$154_oldChart$$1$$, $arNewList$$, $newChart_newLabels$$, $duration$$10$$);
  var $playable$$3$$;
  $handler$$9_i$$154_oldChart$$1$$ = new D.$DvtDataAnimationHandler$$($ctx_type$$67$$, $delContainer$$);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$9_i$$154_oldChart$$1$$, $arOldList$$, $arNewList$$);
  0 < $handler$$9_i$$154_oldChart$$1$$.$_playables$.length && ($playable$$3$$ = $handler$$9_i$$154_oldChart$$1$$.$getAnimation$(!0));
  $newChart_newLabels$$ = (0,D.$JSCompiler_StaticMethods_getDataLabels$$)($newChart_newLabels$$);
  if($playable$$3$$ && 0 < $newChart_newLabels$$.length) {
    for($handler$$9_i$$154_oldChart$$1$$ = 0;$handler$$9_i$$154_oldChart$$1$$ < $newChart_newLabels$$.length;$handler$$9_i$$154_oldChart$$1$$++) {
      $newChart_newLabels$$[$handler$$9_i$$154_oldChart$$1$$].$setAlpha$(0)
    }
    $playable$$3$$ = new D.$DvtSequentialPlayable$$($ctx_type$$67$$, $playable$$3$$, new D.$DvtAnimFadeIn$$($ctx_type$$67$$, $newChart_newLabels$$, $duration$$10$$ / 4))
  }
  return $playable$$3$$
};
D.$DvtAnimOnDC$$.$_buildAnimLists$ = function $$DvtAnimOnDC$$$$_buildAnimLists$$($arOldList$$1_i$$155$$, $oldChart$$2$$, $arNewList$$1$$, $newChart$$1$$, $duration$$11$$) {
  var $j$$27$$, $ar$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($oldChart$$2$$), $aOut$$ = $arOldList$$1_i$$155$$, $peer$$3$$, $obj$$61$$, $dch$$;
  for($arOldList$$1_i$$155$$ = 0;2 > $arOldList$$1_i$$155$$;$arOldList$$1_i$$155$$++) {
    for($j$$27$$ = 0;$j$$27$$ < $ar$$.length;$j$$27$$++) {
      $peer$$3$$ = $ar$$[$j$$27$$];
      $obj$$61$$ = $peer$$3$$.$getDisplayables$()[0];
      $dch$$ = null;
      if($obj$$61$$ instanceof D.$DvtFunnelSlice$$) {
        $dch$$ = new D.$DvtDCFunnelSlice$$($peer$$3$$, $duration$$11$$)
      }else {
        if($obj$$61$$ instanceof D.$DvtChartBar$$ || $obj$$61$$ instanceof D.$DvtChartPolarBar$$) {
          $dch$$ = new D.$DvtDCChart2DBar$$($peer$$3$$, $duration$$11$$)
        }else {
          if($obj$$61$$ instanceof D.$DvtChartLineArea$$) {
            $dch$$ = new D.$DvtDCChartLineArea$$($peer$$3$$, $duration$$11$$)
          }else {
            if($obj$$61$$ instanceof D.$DvtSimpleMarker$$) {
              if($obj$$61$$ instanceof D.$DvtChartLineMarker$$ && !$obj$$61$$.$isSelected$()) {
                continue
              }
              $dch$$ = new D.$DvtDCChartMarker$$($peer$$3$$, $duration$$11$$)
            }else {
              if($obj$$61$$ instanceof D.$DvtChartRangeMarker$$) {
                if($obj$$61$$.$_isInvisible$ && !$obj$$61$$.$isSelected$()) {
                  continue
                }
                $dch$$ = new D.$DvtDCChartRangeMarker$$($peer$$3$$, $duration$$11$$)
              }else {
                $obj$$61$$ instanceof D.$DvtChartCandlestick$$ && ($dch$$ = new D.$DvtDCChartAbstract$$($peer$$3$$, $duration$$11$$))
              }
            }
          }
        }
      }
      $dch$$ && ($aOut$$.push($dch$$), $dch$$.$_oldChart$ = $oldChart$$2$$)
    }
    $aOut$$ = $arNewList$$1$$;
    $ar$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($newChart$$1$$)
  }
};
D.$DvtAnimOnDC$$.$_canAnimate$ = function $$DvtAnimOnDC$$$$_canAnimate$$($oldChart$$3$$, $newChart$$2$$) {
  return D.$DvtChartTypeUtils$$.$isPie$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isPie$($newChart$$2$$) ? $oldChart$$3$$ && $newChart$$2$$ : D.$DvtChartTypeUtils$$.$isPolar$($oldChart$$3$$) != D.$DvtChartTypeUtils$$.$isPolar$($newChart$$2$$) ? !1 : D.$DvtChartTypeUtils$$.$isBLAC$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isBLAC$($newChart$$2$$) ? !0 : D.$DvtChartTypeUtils$$.$isScatterBubble$($oldChart$$3$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($newChart$$2$$) ? !0 : $oldChart$$3$$.$getType$() == 
  $newChart$$2$$.$getType$() ? !0 : !1
};
D.$DvtDCChart$$ = function $$DvtDCChart$$$($chart$$25$$) {
  this.$Options$ = $chart$$25$$.$Options$;
  this.$Peers$ = $chart$$25$$.$Peers$;
  this.$SeriesStyleArray$ = $chart$$25$$.$SeriesStyleArray$;
  this.$Cache$ = $chart$$25$$.$Cache$;
  this.$pieChart$ = $chart$$25$$.$pieChart$
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart$$, D.$DvtChart$$, "DvtDCChart");
D.$DvtDCChartAbstract$$ = function $$DvtDCChartAbstract$$$($peer$$8$$, $duration$$20$$) {
  this.Init($peer$$8$$, $duration$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartAbstract$$, D.$DvtObj$$, "DvtDCChartAbstract");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartAbstract$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$13$$, $oldNode$$2$$) {
  var $oldShape$$ = $oldNode$$2$$.$_shape$;
  this.$_shape$ && this.$_shape$.$getUpdateAnimation$ && $handler$$13$$.add(this.$_shape$.$getUpdateAnimation$(this.$_updateDuration$, $oldShape$$), 1)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$14$$) {
  if(this.$_shape$ && this.$_shape$.$getInsertAnimation$) {
    $handler$$14$$.add(this.$_shape$.$getInsertAnimation$(this.$_insertDuration$), 2)
  }else {
    var $nodePlayable$$5$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $handler$$14$$.add($nodePlayable$$5$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$15$$, $delContainer$$2$$) {
  $delContainer$$2$$.$addChild$(this.$_shape$);
  if(this.$_shape$ && this.$_shape$.$getDeleteAnimation$) {
    $handler$$15$$.add(this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$), 0)
  }else {
    var $nodePlayable$$6$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $handler$$15$$.add($nodePlayable$$6$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_animId$");
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$9$$, $duration$$21$$) {
  this.$_peer$ = $peer$$9$$;
  this.$_updateDuration$ = 0.75 * $duration$$21$$;
  this.$_insertDuration$ = 0.5 * $duration$$21$$;
  this.$_deleteDuration$ = 0.5 * $duration$$21$$;
  this.$_shape$ = $peer$$9$$.$getDisplayables$()[0];
  this.$_animId$ = $peer$$9$$.$getSeries$() + "/" + $peer$$9$$.$getGroup$()
};
D.$DvtDCChart2DBar$$ = function $$DvtDCChart2DBar$$$($peer$$6$$, $duration$$18$$) {
  this.Init($peer$$6$$, $duration$$18$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart2DBar$$, D.$DvtDCChartAbstract$$, "DvtDCChart2DBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChart2DBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$7$$, $duration$$19$$) {
  D.$DvtDCChart2DBar$$.$superclass$.Init.call(this, $peer$$7$$, $duration$$19$$);
  this.$_indicator$ = null;
  this.$_animId$ += "/bar"
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$10$$) {
  var $playable$$4$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
  $handler$$10$$.add($playable$$4$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$11$$, $delContainer$$1$$) {
  $delContainer$$1$$.$addChild$(this.$_shape$);
  var $playable$$5$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
  $handler$$11$$.add($playable$$5$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$12$$, $oldDC$$) {
  var $nodePlayable$$4_oldChart$$4$$ = this.$_oldChart$, $newChart$$3$$ = this.$_peer$.$_chart$, $bFlip_endState$$2$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($nodePlayable$$4_oldChart$$4$$) != D.$DvtChartTypeUtils$$.$isHorizontal$($newChart$$3$$), $startState$$ = $oldDC$$.$_getAnimationParams$($bFlip_endState$$2$$), $bFlip_endState$$2$$ = this.$_getAnimationParams$(), $bSkipFillAnimation$$ = $oldDC$$.$_shape$.$isSelected$() || this.$_shape$.$isSelected$(), $startFill$$ = $oldDC$$.$_shape$.$getPrimaryFill$().$clone$(), 
  $endFill$$ = this.$_shape$.$getPrimaryFill$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$, $bFlip_endState$$2$$) || !$startFill$$.$equals$($endFill$$)) {
    var $newSIdx$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$ = $oldDC$$.$_peer$.$getSeriesIndex$(), $newGIdx$$ = this.$_peer$.$getGroupIndex$(), $oldGIdx$$ = $oldDC$$.$_peer$.$getGroupIndex$();
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$3$$) && (this.$_indicator$ = D.$DvtDCChartUtils$$.$makeIndicator$($nodePlayable$$4_oldChart$$4$$, $oldSIdx$$, $oldGIdx$$, $newChart$$3$$, $newSIdx$$, $newGIdx$$));
    this.$_setAnimationParams$($startState$$);
    $bSkipFillAnimation$$ || this.$_shape$.$setFill$($startFill$$);
    $nodePlayable$$4_oldChart$$4$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$4_oldChart$$4$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $bFlip_endState$$2$$);
    $bSkipFillAnimation$$ || (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$4_oldChart$$4$$.$_animator$, "typeFill", this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $endFill$$);
    this.$_indicator$ && ($nodePlayable$$4_oldChart$$4$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
    $handler$$12$$.add($nodePlayable$$4_oldChart$$4$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($bFlip$$1$$) {
  return this.$_shape$.$getAnimationParams$($bFlip$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$1$$) {
  this.$_shape$.$setAnimationParams$($ar$$1$$, this.$_indicator$)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_indicator$.getParent().removeChild(this.$_indicator$);
  this.$_indicator$ = null
};
D.$DvtDCChartLineArea$$ = function $$DvtDCChartLineArea$$$($peer$$10$$, $duration$$22$$) {
  this.Init($peer$$10$$, $duration$$22$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartLineArea$$, D.$DvtDCChartAbstract$$, "DvtDCChartLineArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$16$$, $oldDC$$1$$) {
  this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
  this.$_coords$ = this.$_shape$.$_arCoord$;
  var $i$$159_isArea$$ = this.$_shape$.$isArea$(), $nodePlayable$$7_oldChart$$5$$ = this.$_oldChart$, $newChart$$4$$ = this.$_chart$, $newSIdx$$1$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$1$$ = $oldDC$$1$$.$_peer$.$getSeriesIndex$(), $newGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)(this.$_shape$, $oldDC$$1$$.$_shape$), $oldGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)($oldDC$$1$$.$_shape$, this.$_shape$), $baseAnim$$1$$;
  if($i$$159_isArea$$) {
    var $JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$ = $oldDC$$1$$.$_getBaseAnimationParams$(this.$_shape$), $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$ = this.$_getBaseAnimationParams$($oldDC$$1$$.$_shape$);
    (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$, $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$);
    D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$, $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$) || (this.$_setBaseAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$), $baseAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getBaseAnimationParams$, 
    this.$_setBaseAnimationParams$, $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$))
  }
  var $topAnim$$1$$, $JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$ = $oldDC$$1$$.$_getAnimationParams$(this.$_shape$), $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$ = this.$_getAnimationParams$($oldDC$$1$$.$_shape$);
  (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$, $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$);
  D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$, $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$) || (this.$_setAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$), $topAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($topAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, 
  this.$_setAnimationParams$, $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$));
  if("none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$4$$) && !($i$$159_isArea$$ && "lineWithArea" == this.$_peer$.$getSeriesType$())) {
    for(var $direction$$12_direction$$inline_2144$$, $indicator_indicator$$inline_2145$$, $i$$159_isArea$$ = 0;$i$$159_isArea$$ < $newGIdcs$$.length;$i$$159_isArea$$++) {
      if($direction$$12_direction$$inline_2144$$ = D.$DvtDCChartUtils$$.$getDirection$($nodePlayable$$7_oldChart$$5$$, $oldSIdx$$1$$, $oldGIdcs$$[$i$$159_isArea$$], $newChart$$4$$, $newSIdx$$1$$, $newGIdcs$$[$i$$159_isArea$$]), $indicator_indicator$$inline_2145$$ = D.$DvtDCChartUtils$$.$makeIndicator$($nodePlayable$$7_oldChart$$5$$, $oldSIdx$$1$$, $oldGIdcs$$[$i$$159_isArea$$], $newChart$$4$$, $newSIdx$$1$$, $newGIdcs$$[$i$$159_isArea$$])) {
        $JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$ = this.$_shape$, $baseEndState$$1_endState$$3_groupIndex$$inline_2143$$ = $newGIdcs$$[$i$$159_isArea$$], $indicator_indicator$$inline_2145$$.$setAlpha$(0), $JSCompiler_StaticMethods_addIndicator$self$$inline_2142_baseStartState_startState$$1$$.$_indicatorMap$[$baseEndState$$1_endState$$3_groupIndex$$inline_2143$$] = {direction:$direction$$12_direction$$inline_2144$$, $indicator$:$indicator_indicator$$inline_2145$$}
      }
    }
  }
  if($baseAnim$$1$$ || $topAnim$$1$$) {
    $nodePlayable$$7_oldChart$$5$$ = new D.$DvtParallelPlayable$$(this.$_context$, $baseAnim$$1$$, $topAnim$$1$$), $nodePlayable$$7_oldChart$$5$$.$setOnEnd$(this.$_onAnimationEnd$, this), $handler$$16$$.add($nodePlayable$$7_oldChart$$5$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$17$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$8$$ = new D.$DvtAnimFadeIn$$(this.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$17$$.add($nodePlayable$$8$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$18$$, $delContainer$$3$$) {
  var $areaContainer_nodePlayable$$9$$;
  "area" == D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($areaContainer_nodePlayable$$9$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $areaContainer_nodePlayable$$9$$ && ($areaContainer_nodePlayable$$9$$.$addChild$(this.$_deletedAreas$), $areaContainer_nodePlayable$$9$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $areaContainer_nodePlayable$$9$$.$setOnEnd$(this.$_removeDeletedAreas$, 
  this), $handler$$18$$.add($areaContainer_nodePlayable$$9$$, 0))) : ($delContainer$$3$$.$addChild$(this.$_shape$), $areaContainer_nodePlayable$$9$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $handler$$18$$.add($areaContainer_nodePlayable$$9$$, 0))
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedAreas$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedAreas$$() {
  var $areaContainer$$1$$ = this.$_chart$.$_areaContainer$;
  $areaContainer$$1$$ && $areaContainer$$1$$.removeChild(this.$_deletedAreas$)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($otherShape$$) {
  return this.$_shape$.$getAnimationParams$($otherShape$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$10$$) {
  this.$_shape$.$setAnimationParams$($params$$10$$)
};
D.$JSCompiler_prototypeAlias$$.$_getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getBaseAnimationParams$$($otherShape$$1$$) {
  return this.$_shape$.$getBaseAnimationParams$($otherShape$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setBaseAnimationParams$$($params$$11$$) {
  this.$_shape$.$setBaseAnimationParams$($params$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  var $JSCompiler_StaticMethods_removeIndicators$self$$inline_2147$$ = this.$_shape$, $groupIndex$$inline_2148$$;
  for($groupIndex$$inline_2148$$ in $JSCompiler_StaticMethods_removeIndicators$self$$inline_2147$$.$_indicatorMap$) {
    var $indicator$$inline_2149$$ = $JSCompiler_StaticMethods_removeIndicators$self$$inline_2147$$.$_indicatorMap$[$groupIndex$$inline_2148$$].$indicator$;
    $indicator$$inline_2149$$ && $indicator$$inline_2149$$.getParent().removeChild($indicator$$inline_2149$$)
  }
  $JSCompiler_StaticMethods_removeIndicators$self$$inline_2147$$.$_indicatorMap$ = {};
  this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$)
};
D.$DvtDCChartLineArea$_matchGroupIndices$$ = function $$DvtDCChartLineArea$_matchGroupIndices$$$($startParams$$, $endParams$$) {
  for(var $i$$160$$ = 3;$i$$160$$ < $startParams$$.length;$i$$160$$ += 4) {
    $startParams$$[$i$$160$$] = $endParams$$[$i$$160$$]
  }
};
D.$DvtDCChartLineArea$$.prototype.Init = function $$DvtDCChartLineArea$$$$Init$($peer$$11$$, $duration$$23$$) {
  D.$DvtDCChartLineArea$$.$superclass$.Init.call(this, $peer$$11$$, $duration$$23$$);
  this.$_context$ = this.$_shape$.$getCtx$();
  this.$_chart$ = this.$_peer$.$_chart$;
  this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line")
};
D.$DvtDCChartMarker$$ = function $$DvtDCChartMarker$$$($peer$$12$$, $duration$$24$$) {
  this.Init($peer$$12$$, $duration$$24$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$19$$, $oldDC$$2$$) {
  var $startRect$$ = $oldDC$$2$$.$_shape$.$getCenterDimensions$(), $endRect$$ = this.$_shape$.$getCenterDimensions$();
  if(!$endRect$$.$equals$($startRect$$)) {
    this.$_shape$.$setCenterDimensions$($startRect$$);
    var $nodePlayable$$10$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$10$$.$_animator$, "typeRectangle", this.$_shape$, this.$_shape$.$getCenterDimensions$, this.$_shape$.$setCenterDimensions$, $endRect$$);
    var $chart$$27_overlay$$ = this.$_peer$.$_chart$, $bRet$$inline_2153_oldSIdx$$inline_2154$$ = !1;
    if($oldDC$$2$$) {
      var $bRet$$inline_2153_oldSIdx$$inline_2154$$ = $oldDC$$2$$.$_peer$.$getSeriesIndex$(), $oldGIdx$$inline_2155$$ = $oldDC$$2$$.$_peer$.$getGroupIndex$(), $newSIdx$$inline_2156$$ = this.$_peer$.$getSeriesIndex$(), $newGIdx$$inline_2157$$ = this.$_peer$.$getGroupIndex$(), $oldData$$inline_2158$$ = $oldDC$$2$$.$_oldChart$.$getOptions$(), $newData$$inline_2159$$ = this.$_peer$.$_chart$.$getOptions$(), $oldY$$inline_2160$$ = $oldData$$inline_2158$$.series[$bRet$$inline_2153_oldSIdx$$inline_2154$$].items[$oldGIdx$$inline_2155$$].y, 
      $oldZ$$inline_2161$$ = $oldData$$inline_2158$$.series[$bRet$$inline_2153_oldSIdx$$inline_2154$$].items[$oldGIdx$$inline_2155$$].z, $newY$$inline_2162$$ = $newData$$inline_2159$$.series[$newSIdx$$inline_2156$$].items[$newGIdx$$inline_2157$$].y, $newZ$$inline_2163$$ = $newData$$inline_2159$$.series[$newSIdx$$inline_2156$$].items[$newGIdx$$inline_2157$$].z, $bRet$$inline_2153_oldSIdx$$inline_2154$$ = $newData$$inline_2159$$.series[$newSIdx$$inline_2156$$].items[$newGIdx$$inline_2157$$].x !== $oldData$$inline_2158$$.series[$bRet$$inline_2153_oldSIdx$$inline_2154$$].items[$oldGIdx$$inline_2155$$].x || 
      $newY$$inline_2162$$ !== $oldY$$inline_2160$$ || $newZ$$inline_2163$$ !== $oldZ$$inline_2161$$
    }
    $bRet$$inline_2153_oldSIdx$$inline_2154$$ && ("none" != D.$DvtChartStyleUtils$$.$getAnimationIndicators$($chart$$27_overlay$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$27_overlay$$)) && ($chart$$27_overlay$$ = $oldDC$$2$$.$_shape$, $chart$$27_overlay$$.$setSolidFill$("#FFFF2B", 0.9), $chart$$27_overlay$$.$setCenterDimensions$($startRect$$), this.$_peer$.$_chart$.$getPlotArea$().$addChild$($chart$$27_overlay$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$10$$.$_animator$, 
    "typeRectangle", $chart$$27_overlay$$, $chart$$27_overlay$$.$getCenterDimensions$, $chart$$27_overlay$$.$setCenterDimensions$, $endRect$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$10$$.$_animator$, "typeNumber", $chart$$27_overlay$$, $chart$$27_overlay$$.$getAlpha$, $chart$$27_overlay$$.$setAlpha$, 0), this.$_overlay$ = $chart$$27_overlay$$, $nodePlayable$$10$$.$setOnEnd$(this.$_onEndAnimation$, this));
    $handler$$19$$.add($nodePlayable$$10$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$20$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$11$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
  $handler$$20$$.add($nodePlayable$$11$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$21$$, $delContainer$$4$$) {
  $delContainer$$4$$.$addChild$(this.$_shape$);
  var $nodePlayable$$12$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
  $handler$$21$$.add($nodePlayable$$12$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = null)
};
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$13$$, $duration$$25$$) {
  D.$DvtDCChartMarker$$.$superclass$.Init.call(this, $peer$$13$$, $duration$$25$$);
  this.$_animId$ += "/marker"
};
D.$DvtDCChartRangeMarker$$ = function $$DvtDCChartRangeMarker$$$($peer$$14$$, $duration$$26$$) {
  this.Init($peer$$14$$, $duration$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartRangeMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartRangeMarker");
D.$DvtDCChartRangeMarker$$.prototype.Init = function $$DvtDCChartRangeMarker$$$$Init$($peer$$15$$, $duration$$27$$) {
  D.$DvtDCChartRangeMarker$$.$superclass$.Init.call(this, $peer$$15$$, $duration$$27$$);
  this.$_animId$ += "/rangeMarker"
};
D.$DvtDCChartRangeMarker$$.prototype.$animateInsert$ = function $$DvtDCChartRangeMarker$$$$$animateInsert$$($handler$$22$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$13$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
  $handler$$22$$.add($nodePlayable$$13$$, 2)
};
D.$DvtDCChartRangeMarker$$.prototype.$animateDelete$ = function $$DvtDCChartRangeMarker$$$$$animateDelete$$($handler$$23$$, $delContainer$$5$$) {
  $delContainer$$5$$.$addChild$(this.$_shape$);
  var $nodePlayable$$14$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
  $handler$$23$$.add($nodePlayable$$14$$, 0)
};
D.$DvtDCChartRangeMarker$$.prototype.$animateUpdate$ = function $$DvtDCChartRangeMarker$$$$$animateUpdate$$($handler$$24$$, $oldDC$$4$$) {
  var $nodePlayable$$15_start$$25$$ = $oldDC$$4$$.$_shape$.$getAnimationParams$(), $end$$11$$ = this.$_shape$.$getAnimationParams$();
  this.$_shape$.$setAnimationParams$($nodePlayable$$15_start$$25$$);
  $nodePlayable$$15_start$$25$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$15_start$$25$$.$_animator$, "typeNumberArray", this.$_shape$, this.$_shape$.$getAnimationParams$, this.$_shape$.$setAnimationParams$, $end$$11$$);
  $handler$$24$$.add($nodePlayable$$15_start$$25$$, 1)
};
D.$DvtDCChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartUtils$$, D.$DvtObj$$, "DvtDCChartUtils");
D.$DvtDCChartUtils$$.$DIR_UP$ = 0;
D.$DvtDCChartUtils$$.$DIR_DOWN$ = 1;
D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ = 2;
D.$DvtDCChartUtils$$.$makeIndicator$ = function $$DvtDCChartUtils$$$$makeIndicator$$($bDown_indicator$$1_oldChart$$6_uiDirection$$, $fc$$1_oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$5$$, $newSIdx$$3$$, $newGIdx$$2$$) {
  if(D.$DvtChartTypeUtils$$.$isPolar$($newChart$$5$$)) {
    return null
  }
  $bDown_indicator$$1_oldChart$$6_uiDirection$$ = D.$DvtDCChartUtils$$.$getDirection$($bDown_indicator$$1_oldChart$$6_uiDirection$$, $fc$$1_oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$5$$, $newSIdx$$3$$, $newGIdx$$2$$);
  if($bDown_indicator$$1_oldChart$$6_uiDirection$$ == D.$DvtDCChartUtils$$.$DIR_NOCHANGE$) {
    return null
  }
  $fc$$1_oldSIdx$$3$$ = ($bDown_indicator$$1_oldChart$$6_uiDirection$$ = $bDown_indicator$$1_oldChart$$6_uiDirection$$ === D.$DvtDCChartUtils$$.$DIR_DOWN$) ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$5$$) : D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$5$$);
  $bDown_indicator$$1_oldChart$$6_uiDirection$$ = D.$DvtDCChartUtils$$.$_drawIndicator$($newChart$$5$$.$getCtx$(), $bDown_indicator$$1_oldChart$$6_uiDirection$$, D.$DvtChartTypeUtils$$.$isHorizontal$($newChart$$5$$), $fc$$1_oldSIdx$$3$$);
  $newChart$$5$$.$getPlotArea$().$addChild$($bDown_indicator$$1_oldChart$$6_uiDirection$$);
  return $bDown_indicator$$1_oldChart$$6_uiDirection$$
};
D.$DvtDCChartUtils$$.$getDirection$ = function $$DvtDCChartUtils$$$$getDirection$$($oldChart$$7_oldValue$$, $oldSIdx$$4$$, $oldGIdx$$3$$, $newChart$$6_newValue$$, $newSIdx$$4$$, $newGIdx$$3$$) {
  $oldChart$$7_oldValue$$ = D.$DvtChartDataUtils$$.getValue($oldChart$$7_oldValue$$, $oldSIdx$$4$$, $oldGIdx$$3$$);
  $newChart$$6_newValue$$ = D.$DvtChartDataUtils$$.getValue($newChart$$6_newValue$$, $newSIdx$$4$$, $newGIdx$$3$$);
  return null == $newChart$$6_newValue$$ || null == $oldChart$$7_oldValue$$ || $newChart$$6_newValue$$ == $oldChart$$7_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ : $newChart$$6_newValue$$ > $oldChart$$7_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_UP$ : D.$DvtDCChartUtils$$.$DIR_DOWN$
};
D.$DvtDCChartUtils$$.$_drawIndicator$ = function $$DvtDCChartUtils$$$$_drawIndicator$$($context$$41_ret$$3$$, $bDown$$1_ptrCmds$$, $bHoriz$$3$$, $fc$$2$$) {
  $bDown$$1_ptrCmds$$ = $bHoriz$$3$$ ? ((0,D.$DvtAgent$isRightToLeft$$)($context$$41_ret$$3$$) ? !$bDown$$1_ptrCmds$$ : $bDown$$1_ptrCmds$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $bDown$$1_ptrCmds$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
  $context$$41_ret$$3$$ = new D.$DvtPath$$($context$$41_ret$$3$$, $bDown$$1_ptrCmds$$);
  $context$$41_ret$$3$$.$setSolidFill$($fc$$2$$);
  return $context$$41_ret$$3$$
};
D.$DvtDCFunnelSlice$$ = function $$DvtDCFunnelSlice$$$($peer$$16$$, $duration$$28$$) {
  this.Init($peer$$16$$, $duration$$28$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCFunnelSlice$$, D.$DvtDCChartAbstract$$, "DvtDCFunnelSlice");
D.$DvtDCFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtDCFunnelSlice$$$$$animateUpdate$$($handler$$25$$, $oldDC$$5$$) {
  var $obj$$64$$ = this.$_shape$, $nodePlayable$$16_startState$$2$$ = $oldDC$$5$$.$_shape$.$getAnimationParams$(), $endState$$4$$ = $obj$$64$$.$getAnimationParams$(), $startFill$$1$$ = $oldDC$$5$$.$_shape$.$getFill$().$clone$(), $endFill$$1$$ = this.$_shape$.$getFill$();
  if(!D.$DvtArrayUtils$$.$equals$($nodePlayable$$16_startState$$2$$, $endState$$4$$) || !$startFill$$1$$.$equals$($endFill$$1$$)) {
    $obj$$64$$.$setAnimationParams$($nodePlayable$$16_startState$$2$$), this.$_shape$.$setFill$($startFill$$1$$), $nodePlayable$$16_startState$$2$$ = new D.$DvtCustomAnimation$$($obj$$64$$.$getCtx$(), this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$16_startState$$2$$.$_animator$, "typeNumberArray", $obj$$64$$, $obj$$64$$.$getAnimationParams$, $obj$$64$$.$setAnimationParams$, $endState$$4$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$16_startState$$2$$.$_animator$, 
    "typeFill", this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $endFill$$1$$), this.$_indicator$ && $nodePlayable$$16_startState$$2$$.$setOnEnd$(this.$_onEndAnimation$, this), $handler$$25$$.add($nodePlayable$$16_startState$$2$$, 1)
  }
};
D.$DvtDCFunnelSlice$$.prototype.$animateInsert$ = function $$DvtDCFunnelSlice$$$$$animateInsert$$($handler$$26$$) {
  var $obj$$65$$ = this.$_shape$, $endState$$5$$ = $obj$$65$$.$getAnimationParams$(), $nodePlayable$$17_startState$$3$$ = $endState$$5$$.slice(0);
  $nodePlayable$$17_startState$$3$$[0] += $nodePlayable$$17_startState$$3$$[1] / 2;
  $nodePlayable$$17_startState$$3$$[1] = 0;
  $nodePlayable$$17_startState$$3$$[3] = 0;
  $obj$$65$$.$setAnimationParams$($nodePlayable$$17_startState$$3$$);
  $nodePlayable$$17_startState$$3$$ = new D.$DvtCustomAnimation$$($obj$$65$$.$getCtx$(), this, this.$_insertDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$17_startState$$3$$.$_animator$, "typeNumberArray", $obj$$65$$, $obj$$65$$.$getAnimationParams$, $obj$$65$$.$setAnimationParams$, $endState$$5$$);
  $handler$$26$$.add($nodePlayable$$17_startState$$3$$, 2)
};
D.$DvtDCFunnelSlice$$.prototype.$animateDelete$ = function $$DvtDCFunnelSlice$$$$$animateDelete$$($handler$$27$$, $delContainer$$6$$) {
  var $obj$$66$$ = this.$_shape$;
  $delContainer$$6$$.$addChild$($obj$$66$$);
  var $nodePlayable$$18_startState$$4$$ = $obj$$66$$.$getAnimationParams$(), $endState$$6$$ = $nodePlayable$$18_startState$$4$$.slice(0);
  $endState$$6$$[0] += $nodePlayable$$18_startState$$4$$[1] / 2;
  $endState$$6$$[1] = 0;
  $endState$$6$$[3] = 0;
  $nodePlayable$$18_startState$$4$$ = new D.$DvtCustomAnimation$$($obj$$66$$.$getCtx$(), this, this.$_deleteDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$18_startState$$4$$.$_animator$, "typeNumberArray", $obj$$66$$, $obj$$66$$.$getAnimationParams$, $obj$$66$$.$setAnimationParams$, $endState$$6$$);
  $handler$$27$$.add($nodePlayable$$18_startState$$4$$, 0)
};
D.$DvtDCFunnelSlice$$.prototype.Init = function $$DvtDCFunnelSlice$$$$Init$($peer$$17$$, $duration$$29$$) {
  D.$DvtDCFunnelSlice$$.$superclass$.Init.call(this, $peer$$17$$, $duration$$29$$);
  this.$_animId$ += "/funnel"
};
D.$DvtChartAxisUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisUtils$$, D.$DvtObj$$, "DvtChartAxisUtils");
D.$DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($chart$$112$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$112$$) ? "tangential" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$112$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$112$$.$getCtx$()) ? "right" : "left" : "bottom"
};
D.$DvtChartAxisUtils$$.$getBaselineScaling$ = function $$DvtChartAxisUtils$$$$getBaselineScaling$$($chart$$113$$, $type$$81$$) {
  var $baselineScaling$$ = $chart$$113$$.$getOptions$()[$type$$81$$ + "Axis"].baselineScaling;
  return $baselineScaling$$ && ("zero" == $baselineScaling$$ || "min" == $baselineScaling$$) ? $baselineScaling$$ : D.$DvtChartTypeUtils$$.$isStock$($chart$$113$$) ? "min" : "zero"
};
D.$DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($chart$$114$$) {
  var $position$$24$$ = $chart$$114$$.$getOptions$().yAxis.position;
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$114$$)) {
    return"radial"
  }
  if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$114$$)) {
    return $position$$24$$ && ("top" == $position$$24$$ || "bottom" == $position$$24$$) ? $position$$24$$ : "bottom"
  }
  D.$DvtChartTypeUtils$$.$isStock$($chart$$114$$) && ($position$$24$$ = $position$$24$$ ? $position$$24$$ : "end");
  return(0,D.$DvtAgent$isRightToLeft$$)($chart$$114$$.$getCtx$()) ? $position$$24$$ && "end" == $position$$24$$ ? "left" : "right" : $position$$24$$ && "end" == $position$$24$$ ? "right" : "left"
};
D.$DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($chart$$115$$) {
  var $position$$25$$ = $chart$$115$$.$getOptions$().y2Axis.position;
  return D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$115$$) ? $position$$25$$ && ("top" == $position$$25$$ || "bottom" == $position$$25$$) ? $position$$25$$ : "top" : (0,D.$DvtAgent$isRightToLeft$$)($chart$$115$$.$getCtx$()) ? $position$$25$$ && "start" == $position$$25$$ ? "right" : "left" : $position$$25$$ && "start" == $position$$25$$ ? "left" : "right"
};
D.$DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($chart$$116$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$116$$) && "disabled" != D.$DvtChartAxisUtils$$.$getTimeAxisType$($chart$$116$$)
};
D.$DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($chart$$117$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$117$$) && "disabled" == D.$DvtChartAxisUtils$$.$getTimeAxisType$($chart$$117$$)
};
D.$DvtChartAxisUtils$$.$getTimeAxisType$ = function $$DvtChartAxisUtils$$$$getTimeAxisType$$($chart$$118$$) {
  var $timeAxisType$$1$$ = $chart$$118$$.$getOptions$().timeAxisType;
  return $timeAxisType$$1$$ && "auto" != $timeAxisType$$1$$ && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$118$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$118$$) ? $timeAxisType$$1$$ : D.$DvtChartTypeUtils$$.$isStock$($chart$$118$$) ? "skipGaps" : "disabled"
};
D.$DvtChartAxisUtils$$.$isMixedFrequency$ = function $$DvtChartAxisUtils$$$$isMixedFrequency$$($chart$$119$$) {
  return"mixedFrequency" == D.$DvtChartAxisUtils$$.$getTimeAxisType$($chart$$119$$)
};
D.$DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($chart$$120$$) {
  var $axisOffset$$1_groupSeparators_maxOffset$$ = $chart$$120$$.$Cache$.axisOffset;
  if(null != $axisOffset$$1_groupSeparators_maxOffset$$) {
    return $axisOffset$$1_groupSeparators_maxOffset$$
  }
  $axisOffset$$1_groupSeparators_maxOffset$$ = $chart$$120$$.$getOptions$().styleDefaults.groupSeparators;
  D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$120$$) && 1 < D.$DvtChartDataUtils$$.$getNumLevels$($chart$$120$$) && "on" == $axisOffset$$1_groupSeparators_maxOffset$$.rendered ? $axisOffset$$1_groupSeparators_maxOffset$$ = 0.5 : D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$120$$) || D.$DvtChartTypeUtils$$.$hasCenteredSeries$($chart$$120$$) || D.$DvtChartTypeUtils$$.$hasCandlestickSeries$($chart$$120$$) || D.$DvtChartTypeUtils$$.$isBLAC$($chart$$120$$) && 1 == D.$DvtChartDataUtils$$.$getGroupCount$($chart$$120$$) ? 
  $axisOffset$$1_groupSeparators_maxOffset$$ = 0.5 : "skyros" != $chart$$120$$.$getSkin$() && "alta" != $chart$$120$$.$getSkin$() && !D.$DvtChartTypeUtils$$.$isSpark$($chart$$120$$) && !D.$DvtChartEventUtils$$.$isScrollable$($chart$$120$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$120$$) ? ($axisOffset$$1_groupSeparators_maxOffset$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$120$$) ? 0.2 : 0.5, $axisOffset$$1_groupSeparators_maxOffset$$ -= $axisOffset$$1_groupSeparators_maxOffset$$ / window.Math.sqrt(D.$DvtChartDataUtils$$.$getGroupCount$($chart$$120$$))) : 
  $axisOffset$$1_groupSeparators_maxOffset$$ = 0;
  return $chart$$120$$.$Cache$.axisOffset = $axisOffset$$1_groupSeparators_maxOffset$$
};
D.$DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($chart$$121$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$121$$)) {
    return!1
  }
  for(var $seriesCount$$11$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$121$$), $i$$196$$ = 0;$i$$196$$ < $seriesCount$$11$$;$i$$196$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$121$$, $i$$196$$)) {
      var $seriesType$$4$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$121$$, $i$$196$$), $lineType$$4$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$121$$, $i$$196$$);
      if("bar" != $seriesType$$4$$ && "centeredSegmented" != $lineType$$4$$ && "centeredStepped" != $lineType$$4$$) {
        return!1
      }
    }
  }
  return!0
};
D.$DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($chart$$122$$) {
  return!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$122$$) || D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$122$$) ? !1 : "polygon" == $chart$$122$$.$getOptions$().polarGridShape
};
D.$DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($chart$$123$$, $type$$82$$) {
  if("y" == $type$$82$$ && D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$123$$) || "y2" == $type$$82$$ && !D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$123$$)) {
    return!1
  }
  var $axisOptions$$8$$ = $chart$$123$$.$getOptions$()[$type$$82$$ + "Axis"];
  return"off" == $axisOptions$$8$$.rendered || "off" == $axisOptions$$8$$.tickLabel.rendered && !$axisOptions$$8$$.title ? !1 : !0
};
D.$DvtChartAxisUtils$$.$isAxisLineRendered$ = function $$DvtChartAxisUtils$$$$isAxisLineRendered$$($chart$$124$$, $type$$83$$) {
  var $axisOptions$$9$$ = $chart$$124$$.$getOptions$()[$type$$83$$ + "Axis"];
  return"off" == $axisOptions$$9$$.rendered || "off" == $axisOptions$$9$$.axisLine.rendered ? !1 : "auto" == $axisOptions$$9$$.axisLine.rendered && "x" != $type$$83$$ && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$124$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$124$$) ? !1 : !0
};
D.$DvtChartAxisUtils$$.$isMajorTickRendered$ = function $$DvtChartAxisUtils$$$$isMajorTickRendered$$($chart$$125$$, $type$$84$$) {
  var $axisOptions$$10$$ = $chart$$125$$.$getOptions$()[$type$$84$$ + "Axis"];
  return"off" == $axisOptions$$10$$.rendered || "off" == $axisOptions$$10$$.majorTick.rendered ? !1 : "auto" == $axisOptions$$10$$.majorTick.rendered && "x" == $type$$84$$ && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$125$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$125$$) ? !1 : !0
};
D.$DvtChartAxisUtils$$.$isMinorTickRendered$ = function $$DvtChartAxisUtils$$$$isMinorTickRendered$$($chart$$126$$, $type$$85$$) {
  var $axisOptions$$11$$ = $chart$$126$$.$getOptions$()[$type$$85$$ + "Axis"];
  return"off" == $axisOptions$$11$$.rendered || "off" == $axisOptions$$11$$.minorTick.rendered ? !1 : "on" == $axisOptions$$11$$.minorTick.rendered ? !0 : D.$DvtChartAxisUtils$$.$isLog$($chart$$126$$, $type$$85$$)
};
D.$DvtChartAxisUtils$$.$isLog$ = function $$DvtChartAxisUtils$$$$isLog$$($chart$$127$$, $type$$86$$) {
  var $axisOptions$$12$$ = $chart$$127$$.$getOptions$()[$type$$86$$ + "Axis"], $minMax$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$127$$, $type$$86$$, !0);
  return"log" == $axisOptions$$12$$.scale && 0 < $minMax$$.min && 0 < $minMax$$.max
};
D.$DvtChartAxisUtils$$.$getTickLabelHeight$ = function $$DvtChartAxisUtils$$$$getTickLabelHeight$$($chart$$128$$, $type$$87$$) {
  var $options$$66$$ = $chart$$128$$.$getOptions$(), $tickLabelStyle$$1$$ = $options$$66$$[$type$$87$$ + "Axis"].tickLabel.style;
  $tickLabelStyle$$1$$ instanceof D.$DvtCSSStyle$$ || ($tickLabelStyle$$1$$ = new D.$DvtCSSStyle$$($tickLabelStyle$$1$$));
  (0,D.$JSCompiler_StaticMethods_mergeUnder$$)($tickLabelStyle$$1$$, (0,D.$DvtAxis$getDefaults$$)($options$$66$$.skin).tickLabel.style);
  return D.$DvtTextUtils$$.$getTextStringHeight$($chart$$128$$.$getCtx$(), $tickLabelStyle$$1$$)
};
D.$DvtChartAxisUtils$$.$getTickLabelGapSize$ = function $$DvtChartAxisUtils$$$$getTickLabelGapSize$$($chart$$129$$, $type$$88$$) {
  if(D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$129$$, $type$$88$$)) {
    return 0
  }
  var $gapHeight$$1_options$$67$$ = $chart$$129$$.$getOptions$(), $isHoriz$$11$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$129$$), $scalingFactor$$1$$ = D.$DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$129$$, $type$$88$$), $gapWidth$$1$$ = window.Math.ceil($gapHeight$$1_options$$67$$.layout.tickLabelGapWidth * $scalingFactor$$1$$), $gapHeight$$1_options$$67$$ = window.Math.ceil($gapHeight$$1_options$$67$$.layout.tickLabelGapHeight * $scalingFactor$$1$$);
  return"x" == $type$$88$$ ? $isHoriz$$11$$ ? $gapWidth$$1$$ : $gapHeight$$1_options$$67$$ : $isHoriz$$11$$ ? $gapHeight$$1_options$$67$$ : $gapWidth$$1$$
};
D.$DvtChartAxisUtils$$.$getGapScalingFactor$ = function $$DvtChartAxisUtils$$$$getGapScalingFactor$$($chart$$130$$, $type$$89$$) {
  return D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$130$$, $type$$89$$) ? D.$DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$130$$, $type$$89$$) / 14 : 0
};
D.$DvtChartAxisUtils$$.$isTickLabelInside$ = function $$DvtChartAxisUtils$$$$isTickLabelInside$$($chart$$131$$, $type$$90$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$131$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$131$$) || D.$DvtChartTypeUtils$$.$isBLAC$($chart$$131$$) && "x" == $type$$90$$ ? !1 : "inside" == $chart$$131$$.$getOptions$()[$type$$90$$ + "Axis"].tickLabel.position
};
D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisViewportMinMax$$($chart$$132$$, $useGlobal$$) {
  var $options$$68$$ = $chart$$132$$.$getOptions$().xAxis, $isGroupAxis$$2$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$132$$), $groupOffset$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$132$$);
  if($useGlobal$$) {
    var $globalMinMax$$ = D.$DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($chart$$132$$)
  }
  var $min$$2$$ = null;
  null != $options$$68$$.viewportMin ? $min$$2$$ = $options$$68$$.viewportMin : null != $options$$68$$.viewportStartGroup ? $min$$2$$ = $isGroupAxis$$2$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$132$$, $options$$68$$.viewportStartGroup) - $groupOffset$$ : $options$$68$$.viewportStartGroup : $useGlobal$$ && ($min$$2$$ = $globalMinMax$$.min);
  var $max$$2$$ = null;
  null != $options$$68$$.viewportMax ? $max$$2$$ = $options$$68$$.viewportMax : null != $options$$68$$.viewportEndGroup ? $max$$2$$ = $isGroupAxis$$2$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$132$$, $options$$68$$.viewportEndGroup) + $groupOffset$$ : $options$$68$$.viewportEndGroup : $useGlobal$$ && ($max$$2$$ = $globalMinMax$$.max);
  return{min:$min$$2$$, max:$max$$2$$}
};
D.$DvtChartAxisUtils$$.$getXAxisGlobalMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisGlobalMinMax$$($chart$$133$$) {
  var $options$$69$$ = $chart$$133$$.$getOptions$().xAxis, $isGroupAxis$$3$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$133$$), $groupOffset$$1$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$133$$);
  if(!$isGroupAxis$$3$$) {
    var $minMax$$1$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$133$$, "x")
  }
  var $min$$3$$ = null, $min$$3$$ = null != $options$$69$$.min ? $options$$69$$.min : $isGroupAxis$$3$$ ? 0 - $groupOffset$$1$$ : $minMax$$1$$.min, $max$$3$$ = null, $max$$3$$ = null != $options$$69$$.max ? $options$$69$$.max : $isGroupAxis$$3$$ ? D.$DvtChartDataUtils$$.$getGroupCount$($chart$$133$$) - 1 + $groupOffset$$1$$ : $minMax$$1$$.max;
  return{min:$min$$3$$, max:$max$$3$$}
};
D.$DvtChartAxisUtils$$.$applyInitialZooming$ = function $$DvtChartAxisUtils$$$$applyInitialZooming$$($chart$$134$$, $availSpace$$78$$) {
  var $options$$70$$ = $chart$$134$$.$getOptions$(), $axisOptions$$14$$ = $options$$70$$.xAxis, $axisWidth_globalMin_initialZooming$$ = $options$$70$$.initialZooming;
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$134$$) && !("off" == $options$$70$$.zoomAndScroll || "none" == $axisWidth_globalMin_initialZooming$$)) {
    $options$$70$$._initialZoomed && ("last" == $axisWidth_globalMin_initialZooming$$ ? $axisOptions$$14$$.viewportMin = null : $axisOptions$$14$$.viewportMax = null);
    var $viewportMax$$1_viewportMinMax$$ = D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$134$$, !1), $viewportMin$$1$$ = $viewportMax$$1_viewportMinMax$$.min, $viewportMax$$1_viewportMinMax$$ = $viewportMax$$1_viewportMinMax$$.max;
    if(!("last" == $axisWidth_globalMin_initialZooming$$ && null != $viewportMin$$1$$ || "first" == $axisWidth_globalMin_initialZooming$$ && null != $viewportMax$$1_viewportMinMax$$)) {
      var $axisWidth_globalMin_initialZooming$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$134$$) ? $availSpace$$78$$.$h$ : $availSpace$$78$$.$w$, $maxNumGroups_maxViewportSize$$ = window.Math.floor($axisWidth_globalMin_initialZooming$$ / (2 * D.$DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$134$$, "x"))) + D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$134$$), $numGroups$$5$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$134$$) - 1;
      if(!($numGroups$$5$$ <= $maxNumGroups_maxViewportSize$$)) {
        var $globalMax_globalMinMax$$1$$;
        D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$134$$) ? ($axisWidth_globalMin_initialZooming$$ = 0, $globalMax_globalMinMax$$1$$ = $numGroups$$5$$) : ($globalMax_globalMinMax$$1$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$134$$, "x"), $axisWidth_globalMin_initialZooming$$ = $globalMax_globalMinMax$$1$$.min, $globalMax_globalMinMax$$1$$ = $globalMax_globalMinMax$$1$$.max);
        $maxNumGroups_maxViewportSize$$ = $maxNumGroups_maxViewportSize$$ / $numGroups$$5$$ * ($globalMax_globalMinMax$$1$$ - $axisWidth_globalMin_initialZooming$$);
        "last" == $options$$70$$.initialZooming ? (null == $viewportMax$$1_viewportMinMax$$ && ($viewportMax$$1_viewportMinMax$$ = $globalMax_globalMinMax$$1$$), $axisOptions$$14$$.viewportMin = window.Math.max($viewportMax$$1_viewportMinMax$$ - $maxNumGroups_maxViewportSize$$, $axisWidth_globalMin_initialZooming$$)) : (null == $viewportMin$$1$$ && ($viewportMin$$1$$ = $axisWidth_globalMin_initialZooming$$), $axisOptions$$14$$.viewportMax = window.Math.min($viewportMin$$1$$ + $maxNumGroups_maxViewportSize$$, 
        $globalMax_globalMinMax$$1$$));
        $options$$70$$._initialZoomed = !0
      }
    }
  }
};
D.$DvtChartAxisUtils$$.$getGroupWidthRatios$ = function $$DvtChartAxisUtils$$$$getGroupWidthRatios$$($barWidthSum_chart$$135$$) {
  if(!D.$DvtChartTypeUtils$$.$hasBarSeries$($barWidthSum_chart$$135$$) && !D.$DvtChartTypeUtils$$.$hasCandlestickSeries$($barWidthSum_chart$$135$$)) {
    return null
  }
  var $options$$71$$ = $barWidthSum_chart$$135$$.$getOptions$(), $barGapRatio_groupWidths$$ = D.$DvtChartStyleUtils$$.$getBarGapRatio$($barWidthSum_chart$$135$$);
  if(1 <= $barGapRatio_groupWidths$$) {
    return $options$$71$$._averageGroupZ = window.Infinity, null
  }
  $options$$71$$._averageGroupZ = 0;
  for(var $numGroups$$6$$ = D.$DvtChartDataUtils$$.$getGroupCount$($barWidthSum_chart$$135$$), $isSplitDualY$$1$$ = D.$DvtChartTypeUtils$$.$isSplitDualY$($barWidthSum_chart$$135$$), $categories$$3$$ = D.$DvtChartDataUtils$$.$getStackCategories$($barWidthSum_chart$$135$$, "bar"), $barWidths$$ = [], $yWidth$$, $y2Width$$, $i$$197$$, $g$$6$$ = 0;$g$$6$$ < $numGroups$$6$$;$g$$6$$++) {
    for($i$$197$$ = $yWidth$$ = 0;$i$$197$$ < $categories$$3$$.y.length;$i$$197$$++) {
      $yWidth$$ += D.$DvtChartDataUtils$$.$getBarCategoryZ$($barWidthSum_chart$$135$$, $categories$$3$$.y[$i$$197$$], $g$$6$$, !1)
    }
    for($i$$197$$ = $y2Width$$ = 0;$i$$197$$ < $categories$$3$$.y2.length;$i$$197$$++) {
      $y2Width$$ += D.$DvtChartDataUtils$$.$getBarCategoryZ$($barWidthSum_chart$$135$$, $categories$$3$$.y2[$i$$197$$], $g$$6$$, !0)
    }
    $barWidths$$.push($isSplitDualY$$1$$ ? window.Math.max($yWidth$$, $y2Width$$) : $yWidth$$ + $y2Width$$)
  }
  $barWidthSum_chart$$135$$ = D.$DvtArrayUtils$$.reduce($barWidths$$, function($barWidthSum_chart$$135$$, $options$$71$$) {
    return $barWidthSum_chart$$135$$ + $options$$71$$
  });
  var $gapWidthSum$$ = $barWidthSum_chart$$135$$ * $barGapRatio_groupWidths$$ / (1 - $barGapRatio_groupWidths$$), $barGapRatio_groupWidths$$ = D.$DvtArrayUtils$$.map($barWidths$$, function($barWidthSum_chart$$135$$) {
    return $barWidthSum_chart$$135$$ + $gapWidthSum$$ / $numGroups$$6$$
  });
  $options$$71$$._averageGroupZ = ($barWidthSum_chart$$135$$ + $gapWidthSum$$) / $numGroups$$6$$;
  return $barGapRatio_groupWidths$$
};
D.$DvtChartDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataUtils$$, D.$DvtObj$$, "DvtChartDataUtils");
D.$DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($chart$$136$$) {
  var $options$$72_seriesCount$$12$$ = $chart$$136$$.$getOptions$();
  if(!$options$$72_seriesCount$$12$$ || !$options$$72_seriesCount$$12$$.series || 1 > $options$$72_seriesCount$$12$$.series.length) {
    return!1
  }
  for(var $options$$72_seriesCount$$12$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$136$$), $i$$198$$ = 0;$i$$198$$ < $options$$72_seriesCount$$12$$;$i$$198$$++) {
    var $seriesItem$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$136$$, $i$$198$$);
    if($seriesItem$$2$$ && $seriesItem$$2$$.items && 1 <= $seriesItem$$2$$.items.length) {
      return!0
    }
  }
  return!1
};
D.$DvtChartDataUtils$$.$hasInvalidData$ = function $$DvtChartDataUtils$$$$hasInvalidData$$($chart$$137$$) {
  return!D.$DvtChartDataUtils$$.$hasData$($chart$$137$$) || D.$DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$137$$)
};
D.$DvtChartDataUtils$$.$hasInvalidTimeData$ = function $$DvtChartDataUtils$$$$hasInvalidTimeData$$($chart$$138$$) {
  if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$138$$) || D.$DvtChartTypeUtils$$.$isPie$($chart$$138$$)) {
    return!1
  }
  var $groupIndex$$24_options$$73$$ = $chart$$138$$.$getOptions$(), $groupCount$$6$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$138$$);
  if(!$groupIndex$$24_options$$73$$ || (!$groupIndex$$24_options$$73$$.series || 1 > $groupIndex$$24_options$$73$$.series.length) || 1 > $groupCount$$6$$) {
    return!0
  }
  var $groupItem$$1_seriesIndex$$43$$, $seriesCount$$13$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$138$$);
  if(D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$138$$)) {
    for($groupItem$$1_seriesIndex$$43$$ = 0;$groupItem$$1_seriesIndex$$43$$ < $seriesCount$$13$$;$groupItem$$1_seriesIndex$$43$$++) {
      for($groupIndex$$24_options$$73$$ = 0;$groupIndex$$24_options$$73$$ < $groupCount$$6$$;$groupIndex$$24_options$$73$$++) {
        var $dataItem$$12$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$138$$, $groupItem$$1_seriesIndex$$43$$, $groupIndex$$24_options$$73$$);
        if($dataItem$$12$$ && (null == $dataItem$$12$$.x || (0,window.isNaN)($dataItem$$12$$.x))) {
          return!0
        }
      }
    }
  }else {
    if(D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$138$$)) {
      for($groupIndex$$24_options$$73$$ = 0;$groupIndex$$24_options$$73$$ < $groupCount$$6$$;$groupIndex$$24_options$$73$$++) {
        if($groupItem$$1_seriesIndex$$43$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$138$$, $groupIndex$$24_options$$73$$), null == $groupItem$$1_seriesIndex$$43$$ || (0,window.isNaN)($groupItem$$1_seriesIndex$$43$$)) {
          return!0
        }
      }
    }
  }
  return!1
};
D.$DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($chart$$139$$, $seriesIndex$$44$$) {
  var $dataItems$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$139$$, $seriesIndex$$44$$).items;
  if($dataItems$$) {
    for(var $i$$199$$ = 0;$i$$199$$ < $dataItems$$.length;$i$$199$$++) {
      if(null != $dataItems$$[$i$$199$$]) {
        return!0
      }
    }
  }
  return!1
};
D.$DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($chart$$140$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$140$$)) {
    var $options$$74_refObjs$$1$$ = $chart$$140$$.$getOptions$();
    D.$DvtChartTypeUtils$$.$isValidType$($chart$$140$$) || ($options$$74_refObjs$$1$$.type = "bar");
    var $isStock_total$$2_volumeItem$$ = D.$DvtChartTypeUtils$$.$isStock$($chart$$140$$);
    $isStock_total$$2_volumeItem$$ && ($options$$74_refObjs$$1$$._hasVolume = !1, 1 < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$140$$) && ($options$$74_refObjs$$1$$.series = $options$$74_refObjs$$1$$.series.slice(0, 1)));
    for(var $groups$$2_maxGroups$$ = 0, $arSeriesStyle_value$$100$$ = $chart$$140$$.$SeriesStyleArray$, $groupItems_seriesCount$$14$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$140$$), $i$$200_volumeSeries$$ = 0;$i$$200_volumeSeries$$ < $groupItems_seriesCount$$14$$;$i$$200_volumeSeries$$++) {
      var $groupCount$$7_itemIndex$$5_j$$34_series$$5$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$140$$, $i$$200_volumeSeries$$);
      null != $groupCount$$7_itemIndex$$5_j$$34_series$$5$$ && 0 > D.$DvtArrayUtils$$.$getIndex$($arSeriesStyle_value$$100$$, $groupCount$$7_itemIndex$$5_j$$34_series$$5$$) && $arSeriesStyle_value$$100$$.push($groupCount$$7_itemIndex$$5_j$$34_series$$5$$);
      var $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$140$$, $i$$200_volumeSeries$$);
      $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items && $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items.length > $groups$$2_maxGroups$$) && ($groups$$2_maxGroups$$ = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items.length);
      if("hidden" == $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.visibility) {
        var $hiddenCategories_items$$4$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$140$$);
        0 > D.$DvtArrayUtils$$.$getIndex$($hiddenCategories_items$$4$$, $groupCount$$7_itemIndex$$5_j$$34_series$$5$$) && $hiddenCategories_items$$4$$.push($groupCount$$7_itemIndex$$5_j$$34_series$$5$$)
      }
      $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.visibility = null;
      if($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ && $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items) {
        $hiddenCategories_items$$4$$ = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items;
        for($groupCount$$7_itemIndex$$5_j$$34_series$$5$$ = 0;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$ < $hiddenCategories_items$$4$$.length;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$++) {
          $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$] && (!(0,window.isNaN)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$]) && $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$] ? $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$] = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$]) : (!D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$140$$) && 
          $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].x && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].x = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].x)), $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].y && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].y = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].y)), 
          $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].z && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].z = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].z)), $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].value && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].value = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].value)), 
          $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].targetValue && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].targetValue = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].targetValue)), $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].open && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].open = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].open)), 
          $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].close && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].close = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].close)), $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].low && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].low = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].low)), 
          $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].high && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].high = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].high)), $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].volume && ($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].volume = (0,window.Number)($hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].volume), 
          $options$$74_refObjs$$1$$._hasVolume = !0)))
        }
      }
    }
    if($isStock_total$$2_volumeItem$$ && D.$DvtChartDataUtils$$.$hasVolumeSeries$($chart$$140$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$140$$)) {
      $i$$200_volumeSeries$$ = D.$DvtJSONUtils$$.$clone$(D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$140$$, 0));
      $i$$200_volumeSeries$$.assignedToY2 = "on";
      $i$$200_volumeSeries$$.type = "bar";
      $i$$200_volumeSeries$$.categories = D.$DvtChartDataUtils$$.$getSeriesCategories$($chart$$140$$, 0);
      $i$$200_volumeSeries$$.id = "_volume";
      $i$$200_volumeSeries$$._selectable = "off";
      $i$$200_volumeSeries$$.items = [];
      for($groupCount$$7_itemIndex$$5_j$$34_series$$5$$ = 0;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$ < $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items.length;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$++) {
        $isStock_total$$2_volumeItem$$ = {}, $isStock_total$$2_volumeItem$$.color = D.$DvtChartStyleUtils$$.$getStockVolumeColor$($chart$$140$$, $groupCount$$7_itemIndex$$5_j$$34_series$$5$$), $isStock_total$$2_volumeItem$$.x = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].x, $isStock_total$$2_volumeItem$$.value = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.items[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$].volume, $i$$200_volumeSeries$$.items.push($isStock_total$$2_volumeItem$$)
      }
      $options$$74_refObjs$$1$$.series.push($i$$200_volumeSeries$$)
    }
    $options$$74_refObjs$$1$$ = D.$DvtChartRefObjUtils$$.$getRefObjs$($chart$$140$$);
    for($i$$200_volumeSeries$$ = 0;$i$$200_volumeSeries$$ < $options$$74_refObjs$$1$$.length;$i$$200_volumeSeries$$++) {
      if($hiddenCategories_items$$4$$ = $options$$74_refObjs$$1$$[$i$$200_volumeSeries$$].items) {
        for($groupCount$$7_itemIndex$$5_j$$34_series$$5$$ = 0;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$ < $hiddenCategories_items$$4$$.length;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$++) {
          if($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$]) {
            (0,window.isNaN)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$) ? (!D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$140$$) && $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.x && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.x = (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.x)), $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.max && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.max = (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.max)), 
            $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.min && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.min = (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.min)), $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.value && ($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.value = (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.value))) : $hiddenCategories_items$$4$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$] = 
            (0,window.Number)($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$)
          }
        }
      }
    }
    $options$$74_refObjs$$1$$ = $chart$$140$$.$getOptions$();
    $options$$74_refObjs$$1$$.groups || ($options$$74_refObjs$$1$$.groups = []);
    $groupCount$$7_itemIndex$$5_j$$34_series$$5$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$140$$);
    for($i$$200_volumeSeries$$ = 0;$i$$200_volumeSeries$$ < $groups$$2_maxGroups$$ - $groupCount$$7_itemIndex$$5_j$$34_series$$5$$;$i$$200_volumeSeries$$++) {
      $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = (0,D.$DvtBundle$getTranslation$$)($options$$74_refObjs$$1$$, "labelDefaultGroupName", "DvtChartBundle", "DEFAULT_GROUP_NAME", $options$$74_refObjs$$1$$.groups.length + 1), $options$$74_refObjs$$1$$.groups.push($group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$)
    }
    $chart$$140$$.$Cache$.groupsArray = null;
    D.$DvtChartDataUtils$$.$_processTimeAxis$($chart$$140$$);
    $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = $options$$74_refObjs$$1$$.sorting;
    $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = "on" == $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ ? "descending" : "ascending" != $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ && "descending" != $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ ? "off" : $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$;
    if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$140$$) && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$140$$) && "off" != $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ && 1 == D.$DvtChartDataUtils$$.$getNumLevels$($chart$$140$$)) {
      for(var $groups$$2_maxGroups$$ = D.$DvtChartDataUtils$$.$getGroups$($chart$$140$$), $totalsMap$$ = {}, $groupCount$$7_itemIndex$$5_j$$34_series$$5$$ = 0;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$ < $groups$$2_maxGroups$$.length;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$++) {
        for($i$$200_volumeSeries$$ = $isStock_total$$2_volumeItem$$ = 0;$i$$200_volumeSeries$$ <= $groupItems_seriesCount$$14$$;$i$$200_volumeSeries$$++) {
          D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$140$$, $i$$200_volumeSeries$$) && !D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$140$$, $i$$200_volumeSeries$$) && ($arSeriesStyle_value$$100$$ = D.$DvtChartDataUtils$$.getValue($chart$$140$$, $i$$200_volumeSeries$$, $groupCount$$7_itemIndex$$5_j$$34_series$$5$$), $isStock_total$$2_volumeItem$$ += null == $arSeriesStyle_value$$100$$ || (0,window.isNaN)($arSeriesStyle_value$$100$$) ? 0 : $arSeriesStyle_value$$100$$)
        }
        $totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$]] = {index:$groupCount$$7_itemIndex$$5_j$$34_series$$5$$, total:$isStock_total$$2_volumeItem$$, group:$options$$74_refObjs$$1$$.groups[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$]}
      }
      "ascending" == $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ ? $groups$$2_maxGroups$$.sort(function($chart$$140$$, $options$$74_refObjs$$1$$) {
        return $totalsMap$$[$chart$$140$$].total - $totalsMap$$[$options$$74_refObjs$$1$$].total
      }) : $groups$$2_maxGroups$$.sort(function($chart$$140$$, $options$$74_refObjs$$1$$) {
        return $totalsMap$$[$options$$74_refObjs$$1$$].total - $totalsMap$$[$chart$$140$$].total
      });
      for($i$$200_volumeSeries$$ = 0;$i$$200_volumeSeries$$ < $groupItems_seriesCount$$14$$;$i$$200_volumeSeries$$++) {
        $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$ = [];
        for($groupCount$$7_itemIndex$$5_j$$34_series$$5$$ = 0;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$ < $groups$$2_maxGroups$$.length;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$++) {
          $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$.push(D.$DvtChartDataUtils$$.$getDataItem$($chart$$140$$, $i$$200_volumeSeries$$, $totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$]].index))
        }
        $options$$74_refObjs$$1$$.series[$i$$200_volumeSeries$$].items = $group$$16_item$$3_seriesItem$$4_seriesItems$$4_sorting$$
      }
      $groupItems_seriesCount$$14$$ = [];
      for($groupCount$$7_itemIndex$$5_j$$34_series$$5$$ = 0;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$ < $groups$$2_maxGroups$$.length;$groupCount$$7_itemIndex$$5_j$$34_series$$5$$++) {
        $groupItems_seriesCount$$14$$.push($totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$7_itemIndex$$5_j$$34_series$$5$$]].group)
      }
      $options$$74_refObjs$$1$$.groups = $groupItems_seriesCount$$14$$;
      $chart$$140$$.$Cache$ = {}
    }
    D.$DvtChartDataUtils$$.$_sanitizeAxis$($options$$74_refObjs$$1$$.xAxis);
    D.$DvtChartDataUtils$$.$_sanitizeAxis$($options$$74_refObjs$$1$$.yAxis);
    D.$DvtChartDataUtils$$.$_sanitizeAxis$($options$$74_refObjs$$1$$.y2Axis)
  }
};
D.$DvtChartDataUtils$$.$_sanitizeAxis$ = function $$DvtChartDataUtils$$$$_sanitizeAxis$$($axisOptions$$15$$) {
  $axisOptions$$15$$.min == $axisOptions$$15$$.max && ($axisOptions$$15$$.min = null, $axisOptions$$15$$.max = null)
};
D.$DvtChartDataUtils$$.$_sanitizeDateTime$ = function $$DvtChartDataUtils$$$$_sanitizeDateTime$$($context$$59$$, $dateTime$$) {
  var $ret$$9$$ = null, $isoToDateConverter$$ = $context$$59$$.$getLocaleHelpers$.isoToDateConverter;
  if($isoToDateConverter$$) {
    try {
      $ret$$9$$ = $isoToDateConverter$$($dateTime$$)
    }catch($err$$) {
      $ret$$9$$ = null
    }
    null != $ret$$9$$ && ($ret$$9$$ = $ret$$9$$.getTime())
  }
  null == $ret$$9$$ && ($ret$$9$$ = window.Date.parse($dateTime$$));
  (0,window.isNaN)($ret$$9$$) && ($ret$$9$$ = (0,window.Number)($dateTime$$));
  return $ret$$9$$
};
D.$DvtChartDataUtils$$.$_processTimeAxis$ = function $$DvtChartDataUtils$$$$_processTimeAxis$$($chart$$141_refObjs$$2$$) {
  var $context$$60$$ = $chart$$141_refObjs$$2$$.$getCtx$(), $i$$201_options$$75_xOptions$$ = $chart$$141_refObjs$$2$$.$getOptions$(), $group$$17_seriesIndex$$45$$, $groupIndex$$25_items$$5$$, $seriesCount$$15$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$141_refObjs$$2$$), $groupCount$$8_j$$35$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$141_refObjs$$2$$);
  if(D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$141_refObjs$$2$$)) {
    for($group$$17_seriesIndex$$45$$ = 0;$group$$17_seriesIndex$$45$$ < $seriesCount$$15$$;$group$$17_seriesIndex$$45$$++) {
      for($groupIndex$$25_items$$5$$ = 0;$groupIndex$$25_items$$5$$ < $groupCount$$8_j$$35$$;$groupIndex$$25_items$$5$$++) {
        var $dataItem$$13$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$141_refObjs$$2$$, $group$$17_seriesIndex$$45$$, $groupIndex$$25_items$$5$$);
        null != $dataItem$$13$$ && "string" == typeof $dataItem$$13$$.x && null != $dataItem$$13$$.x && ($dataItem$$13$$.x = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $dataItem$$13$$.x))
      }
    }
  }else {
    if(D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$141_refObjs$$2$$)) {
      for($groupIndex$$25_items$$5$$ = 0;$groupIndex$$25_items$$5$$ < $groupCount$$8_j$$35$$;$groupIndex$$25_items$$5$$++) {
        $group$$17_seriesIndex$$45$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$141_refObjs$$2$$, $groupIndex$$25_items$$5$$), null != $group$$17_seriesIndex$$45$$ && ($i$$201_options$$75_xOptions$$.groups[$groupIndex$$25_items$$5$$] = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $group$$17_seriesIndex$$45$$))
      }
      $chart$$141_refObjs$$2$$.$Cache$.groupsArray = null
    }
  }
  if(D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$141_refObjs$$2$$)) {
    $i$$201_options$$75_xOptions$$ = $i$$201_options$$75_xOptions$$.xAxis;
    null != $i$$201_options$$75_xOptions$$.dataMin && ($i$$201_options$$75_xOptions$$.dataMin = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $i$$201_options$$75_xOptions$$.dataMin));
    null != $i$$201_options$$75_xOptions$$.dataMax && ($i$$201_options$$75_xOptions$$.dataMax = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $i$$201_options$$75_xOptions$$.dataMax));
    null != $i$$201_options$$75_xOptions$$.min && ($i$$201_options$$75_xOptions$$.min = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $i$$201_options$$75_xOptions$$.min));
    null != $i$$201_options$$75_xOptions$$.max && ($i$$201_options$$75_xOptions$$.max = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $i$$201_options$$75_xOptions$$.max));
    null != $i$$201_options$$75_xOptions$$.viewportMin && ($i$$201_options$$75_xOptions$$.viewportMin = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $i$$201_options$$75_xOptions$$.viewportMin));
    null != $i$$201_options$$75_xOptions$$.viewportMax && ($i$$201_options$$75_xOptions$$.viewportMax = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $i$$201_options$$75_xOptions$$.viewportMax));
    null != $i$$201_options$$75_xOptions$$.viewportStartGroup && ($i$$201_options$$75_xOptions$$.viewportStartGroup = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $i$$201_options$$75_xOptions$$.viewportStartGroup));
    null != $i$$201_options$$75_xOptions$$.viewportEndGroup && ($i$$201_options$$75_xOptions$$.viewportEndGroup = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $i$$201_options$$75_xOptions$$.viewportEndGroup));
    $chart$$141_refObjs$$2$$ = D.$DvtChartRefObjUtils$$.$getRefObjs$($chart$$141_refObjs$$2$$);
    for($i$$201_options$$75_xOptions$$ = 0;$i$$201_options$$75_xOptions$$ < $chart$$141_refObjs$$2$$.length;$i$$201_options$$75_xOptions$$++) {
      if($groupIndex$$25_items$$5$$ = $chart$$141_refObjs$$2$$[$i$$201_options$$75_xOptions$$].items) {
        for($groupCount$$8_j$$35$$ = 0;$groupCount$$8_j$$35$$ < $groupIndex$$25_items$$5$$.length;$groupCount$$8_j$$35$$++) {
          null != $groupIndex$$25_items$$5$$[$groupCount$$8_j$$35$$].x && ($groupIndex$$25_items$$5$$[$groupCount$$8_j$$35$$].x = D.$DvtChartDataUtils$$.$_sanitizeDateTime$($context$$60$$, $groupIndex$$25_items$$5$$[$groupCount$$8_j$$35$$].x))
        }
      }
    }
  }
};
D.$DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($chart$$142$$) {
  return $chart$$142$$.$getOptions$().series.length
};
D.$DvtChartDataUtils$$.$getY2SeriesCount$ = function $$DvtChartDataUtils$$$$getY2SeriesCount$$($chart$$143$$) {
  for(var $y2SeriesCount$$ = 0, $seriesCount$$16$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$143$$), $seriesIndex$$46$$ = 0;$seriesIndex$$46$$ < $seriesCount$$16$$;$seriesIndex$$46$$++) {
    D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$143$$, $seriesIndex$$46$$) && $y2SeriesCount$$++
  }
  return $y2SeriesCount$$
};
D.$DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($chart$$144$$, $seriesIndex$$47$$) {
  var $seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$144$$, $seriesIndex$$47$$);
  return $seriesItem$$5$$ ? $seriesItem$$5$$.id ? $seriesItem$$5$$.id : $seriesItem$$5$$.name || "" == $seriesItem$$5$$.name ? $seriesItem$$5$$.name : (0,window.String)($seriesIndex$$47$$) : null
};
D.$DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($chart$$145$$, $seriesIndex$$48$$) {
  var $seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$145$$, $seriesIndex$$48$$);
  return $seriesItem$$6$$ && ($seriesItem$$6$$.name || "" == $seriesItem$$6$$.name) ? $seriesItem$$6$$.name : null
};
D.$DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($chart$$146$$, $series$$6$$) {
  for(var $numSeries$$1$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$146$$), $seriesIndex$$49$$ = 0;$seriesIndex$$49$$ < $numSeries$$1$$;$seriesIndex$$49$$++) {
    if(D.$DvtChartDataUtils$$.$getSeries$($chart$$146$$, $seriesIndex$$49$$) == $series$$6$$) {
      return $seriesIndex$$49$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($chart$$147$$, $series$$7$$) {
  return $series$$7$$ ? D.$DvtArrayUtils$$.$getIndex$($chart$$147$$.$SeriesStyleArray$, $series$$7$$) : D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$147$$, $series$$7$$)
};
D.$DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($chart$$148$$, $seriesIndex$$50$$) {
  if((0,window.isNaN)($seriesIndex$$50$$) || null == $seriesIndex$$50$$) {
    return null
  }
  var $options$$76$$ = $chart$$148$$.$getOptions$();
  if($options$$76$$.series && $options$$76$$.series.length > $seriesIndex$$50$$) {
    return $options$$76$$.series[$seriesIndex$$50$$]
  }
};
D.$DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($chart$$149_seriesItem$$7$$, $seriesIndex$$51$$, $groupIndex$$26$$) {
  return(0,window.isNaN)($groupIndex$$26$$) || null == $groupIndex$$26$$ || 0 > $groupIndex$$26$$ ? null : ($chart$$149_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$149_seriesItem$$7$$, $seriesIndex$$51$$)) && $chart$$149_seriesItem$$7$$.items && $chart$$149_seriesItem$$7$$.items.length > $groupIndex$$26$$ ? $chart$$149_seriesItem$$7$$.items[$groupIndex$$26$$] : null
};
D.$DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($chart$$150$$) {
  return D.$DvtChartDataUtils$$.$_getGroupsArray$($chart$$150$$).length
};
D.$DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($chart$$151$$, $groupIndex$$27$$) {
  if(0 <= $groupIndex$$27$$ && $groupIndex$$27$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$151$$)) {
    var $group$$18$$ = D.$DvtChartDataUtils$$.$_getGroupsArray$($chart$$151$$)[$groupIndex$$27$$];
    if($group$$18$$) {
      return $group$$18$$.id ? $group$$18$$.id : $group$$18$$.name || "" == $group$$18$$.name ? $group$$18$$.name : $group$$18$$
    }
  }
  return null
};
D.$DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($chart$$152$$, $group$$19$$) {
  for(var $groups$$3$$ = D.$DvtChartDataUtils$$.$getGroups$($chart$$152$$), $i$$202$$ = 0;$i$$202$$ < $groups$$3$$.length;$i$$202$$++) {
    if($group$$19$$ instanceof window.Array && $groups$$3$$[$i$$202$$] instanceof window.Array ? D.$DvtArrayUtils$$.$equals$($group$$19$$, $groups$$3$$[$i$$202$$]) : $group$$19$$ == $groups$$3$$[$i$$202$$]) {
      return $i$$202$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($chart$$153$$, $groupIndex$$28$$) {
  if(0 <= $groupIndex$$28$$ && $groupIndex$$28$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$153$$)) {
    var $group$$20$$ = D.$DvtChartDataUtils$$.$_getGroupsArray$($chart$$153$$)[$groupIndex$$28$$];
    if($group$$20$$) {
      return $group$$20$$.name ? $group$$20$$.name : null != $group$$20$$.id ? "" : $group$$20$$
    }
  }
  return null
};
D.$DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($chart$$154$$) {
  for(var $groupCount$$9$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$154$$), $groups$$4$$ = [], $groupIndex$$29$$ = 0;$groupIndex$$29$$ < $groupCount$$9$$;$groupIndex$$29$$++) {
    $groups$$4$$.push(D.$DvtChartDataUtils$$.$getGroup$($chart$$154$$, $groupIndex$$29$$))
  }
  return $groups$$4$$
};
D.$DvtChartDataUtils$$.$_getGroupsArray$ = function $$DvtChartDataUtils$$$$_getGroupsArray$$($chart$$155$$) {
  var $i$$203_options$$77$$ = $chart$$155$$.$getOptions$(), $groupsArray$$1$$ = $chart$$155$$.$Cache$.groupsArray;
  if(!$groupsArray$$1$$) {
    $groupsArray$$1$$ = [];
    $i$$203_options$$77$$.groups && ($groupsArray$$1$$ = D.$DvtChartDataUtils$$.$_getNestedGroups$($i$$203_options$$77$$.groups, $groupsArray$$1$$));
    for($i$$203_options$$77$$ = 0;$i$$203_options$$77$$ < $groupsArray$$1$$.length;$i$$203_options$$77$$++) {
      1 == $groupsArray$$1$$[$i$$203_options$$77$$].id.length && ($groupsArray$$1$$[$i$$203_options$$77$$].id = $groupsArray$$1$$[$i$$203_options$$77$$].id[0], $groupsArray$$1$$[$i$$203_options$$77$$].name = $groupsArray$$1$$[$i$$203_options$$77$$].name[0])
    }
    $chart$$155$$.$Cache$.groupsArray = $groupsArray$$1$$
  }
  return $groupsArray$$1$$
};
D.$DvtChartDataUtils$$.$_getNestedGroups$ = function $$DvtChartDataUtils$$$$_getNestedGroups$$($groups$$5$$, $groupsArray$$2$$) {
  if($groups$$5$$) {
    for(var $i$$204$$ = 0;$i$$204$$ < $groups$$5$$.length;$i$$204$$++) {
      var $group$$21_innerGroupArray$$ = $groups$$5$$[$i$$204$$], $elementId$$ = $group$$21_innerGroupArray$$.id ? $group$$21_innerGroupArray$$.id : $group$$21_innerGroupArray$$.name ? $group$$21_innerGroupArray$$.name : $group$$21_innerGroupArray$$, $elementName$$1$$ = $group$$21_innerGroupArray$$.name ? $group$$21_innerGroupArray$$.name : $group$$21_innerGroupArray$$;
      "object" == typeof $elementId$$ && ($elementId$$ = null);
      "object" == typeof $elementName$$1$$ && ($elementName$$1$$ = null);
      if($group$$21_innerGroupArray$$.groups) {
        ($group$$21_innerGroupArray$$ = D.$DvtChartDataUtils$$.$_getNestedGroups$($group$$21_innerGroupArray$$.groups, [])) || ($group$$21_innerGroupArray$$ = [{id:[], name:[]}]);
        for(var $j$$36$$ = 0;$j$$36$$ < $group$$21_innerGroupArray$$.length;$j$$36$$++) {
          $group$$21_innerGroupArray$$[$j$$36$$].id.unshift($elementId$$), $group$$21_innerGroupArray$$[$j$$36$$].name.unshift($elementName$$1$$)
        }
        $groupsArray$$2$$ = $groupsArray$$2$$.concat($group$$21_innerGroupArray$$)
      }else {
        $groupsArray$$2$$.push({id:[$elementId$$], name:[$elementName$$1$$]})
      }
    }
    return $groupsArray$$2$$
  }
};
D.$DvtChartDataUtils$$.$getNumLevels$ = function $$DvtChartDataUtils$$$$getNumLevels$$($chart$$156_groupsArray$$3$$) {
  $chart$$156_groupsArray$$3$$ = D.$DvtChartDataUtils$$.$_getGroupsArray$($chart$$156_groupsArray$$3$$);
  for(var $numLevels$$2$$ = 0, $i$$205$$ = 0;$i$$205$$ < $chart$$156_groupsArray$$3$$.length;$i$$205$$++) {
    var $group$$22_length$$12$$ = $chart$$156_groupsArray$$3$$[$i$$205$$];
    $group$$22_length$$12$$ && $group$$22_length$$12$$.id && ($group$$22_length$$12$$ = D.$DvtArrayUtils$$.isArray($group$$22_length$$12$$.id) ? $group$$22_length$$12$$.id.length : 1, $numLevels$$2$$ = window.Math.max($numLevels$$2$$, $group$$22_length$$12$$))
  }
  return $numLevels$$2$$
};
D.$DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($chart$$157$$, $seriesIndex$$52$$, $groupIndex$$30$$) {
  var $val$$19$$ = (0,D.$JSCompiler_StaticMethods_getFromCachedMap2D$$)($chart$$157$$, "value", $seriesIndex$$52$$, $groupIndex$$30$$);
  if(void 0 !== $val$$19$$) {
    return $val$$19$$
  }
  var $val$$19$$ = null, $dataItem$$14$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$157$$, $seriesIndex$$52$$, $groupIndex$$30$$);
  null != $dataItem$$14$$ && ((0,window.isNaN)($dataItem$$14$$) ? D.$DvtChartTypeUtils$$.$isStock$($chart$$157$$) && null != $dataItem$$14$$.close ? $val$$19$$ = $dataItem$$14$$.close : null != $dataItem$$14$$.value ? $val$$19$$ = $dataItem$$14$$.value : null != $dataItem$$14$$.y && ($val$$19$$ = $dataItem$$14$$.y) : $val$$19$$ = $dataItem$$14$$);
  (0,D.$JSCompiler_StaticMethods_putToCachedMap2D$$)($chart$$157$$, "value", $seriesIndex$$52$$, $groupIndex$$30$$, $val$$19$$);
  return $val$$19$$
};
D.$DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($chart$$158$$, $seriesIndex$$53$$, $groupIndex$$31$$, $bIncludeHiddenSeries$$1$$) {
  var $cacheKey$$4$$ = $bIncludeHiddenSeries$$1$$ ? "cumValueH" : "cumValue", $cumVal_value$$101$$ = (0,D.$JSCompiler_StaticMethods_getFromCachedMap2D$$)($chart$$158$$, $cacheKey$$4$$, $seriesIndex$$53$$, $groupIndex$$31$$);
  if(void 0 !== $cumVal_value$$101$$) {
    return $cumVal_value$$101$$
  }
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$158$$)) {
    for(var $seriesType$$5$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$158$$, $seriesIndex$$53$$), $bAssignedToY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$158$$, $seriesIndex$$53$$), $cumVal_value$$101$$ = D.$DvtChartDataUtils$$.getValue($chart$$158$$, $seriesIndex$$53$$, $groupIndex$$31$$), $isNegative$$ = "bar" == $seriesType$$5$$ ? 0 > $cumVal_value$$101$$ : D.$DvtChartDataUtils$$.$isSeriesNegative$($chart$$158$$, $seriesIndex$$53$$), $cumVal_value$$101$$ = 0, $category$$4$$ = 
    D.$DvtChartDataUtils$$.$getStackCategory$($chart$$158$$, $seriesIndex$$53$$), $i$$206$$ = 0;$i$$206$$ <= $seriesIndex$$53$$;$i$$206$$++) {
      if(($bIncludeHiddenSeries$$1$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$158$$, $i$$206$$, $groupIndex$$31$$)) && $seriesType$$5$$ == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$158$$, $i$$206$$) && $bAssignedToY2$$ == D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$158$$, $i$$206$$) && D.$DvtChartDataUtils$$.$getStackCategory$($chart$$158$$, $i$$206$$) == $category$$4$$) {
        var $groupValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$158$$, $i$$206$$, $groupIndex$$31$$), $isCurrentNegative$$ = "bar" == $seriesType$$5$$ ? 0 > $groupValue$$ : D.$DvtChartDataUtils$$.$isSeriesNegative$($chart$$158$$, $i$$206$$);
        if($isNegative$$ && $isCurrentNegative$$ || !$isNegative$$ && !$isCurrentNegative$$) {
          $cumVal_value$$101$$ += null == $groupValue$$ || (0,window.isNaN)($groupValue$$) ? 0 : $groupValue$$
        }
      }
    }
  }else {
    $cumVal_value$$101$$ = D.$DvtChartDataUtils$$.getValue($chart$$158$$, $seriesIndex$$53$$, $groupIndex$$31$$)
  }
  (0,D.$JSCompiler_StaticMethods_putToCachedMap2D$$)($chart$$158$$, $cacheKey$$4$$, $seriesIndex$$53$$, $groupIndex$$31$$, $cumVal_value$$101$$);
  return $cumVal_value$$101$$
};
D.$DvtChartDataUtils$$.$getLowValue$ = function $$DvtChartDataUtils$$$$getLowValue$$($chart$$159$$, $seriesIndex$$54$$, $dataItem$$15_groupIndex$$32$$) {
  $dataItem$$15_groupIndex$$32$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$159$$, $seriesIndex$$54$$, $dataItem$$15_groupIndex$$32$$);
  return null == $dataItem$$15_groupIndex$$32$$ ? null : "candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$159$$, $seriesIndex$$54$$) ? null == $dataItem$$15_groupIndex$$32$$.low && null != $dataItem$$15_groupIndex$$32$$.close ? null != $dataItem$$15_groupIndex$$32$$.open ? window.Math.min($dataItem$$15_groupIndex$$32$$.close, $dataItem$$15_groupIndex$$32$$.open) : $dataItem$$15_groupIndex$$32$$.close : $dataItem$$15_groupIndex$$32$$.low : null != $dataItem$$15_groupIndex$$32$$.low && 
  null == $dataItem$$15_groupIndex$$32$$.close ? $dataItem$$15_groupIndex$$32$$.low : null
};
D.$DvtChartDataUtils$$.$getHighValue$ = function $$DvtChartDataUtils$$$$getHighValue$$($chart$$160$$, $seriesIndex$$55$$, $dataItem$$16_groupIndex$$33$$) {
  $dataItem$$16_groupIndex$$33$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$160$$, $seriesIndex$$55$$, $dataItem$$16_groupIndex$$33$$);
  return null == $dataItem$$16_groupIndex$$33$$ ? null : "candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$160$$, $seriesIndex$$55$$) ? null == $dataItem$$16_groupIndex$$33$$.high ? null != $dataItem$$16_groupIndex$$33$$.open ? window.Math.max($dataItem$$16_groupIndex$$33$$.close, $dataItem$$16_groupIndex$$33$$.open) : $dataItem$$16_groupIndex$$33$$.close : $dataItem$$16_groupIndex$$33$$.high : null != $dataItem$$16_groupIndex$$33$$.high && null == $dataItem$$16_groupIndex$$33$$.close ? 
  $dataItem$$16_groupIndex$$33$$.high : null
};
D.$DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($chart$$161$$, $dataItem$$17_seriesIndex$$56_xVal$$, $groupIndex$$34$$) {
  if(D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$161$$)) {
    return $groupIndex$$34$$
  }
  $dataItem$$17_seriesIndex$$56_xVal$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$161$$, $dataItem$$17_seriesIndex$$56_xVal$$, $groupIndex$$34$$);
  if(null == $dataItem$$17_seriesIndex$$56_xVal$$) {
    return null
  }
  $dataItem$$17_seriesIndex$$56_xVal$$ = $dataItem$$17_seriesIndex$$56_xVal$$.x;
  return(0,window.isNaN)($dataItem$$17_seriesIndex$$56_xVal$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$161$$, $groupIndex$$34$$) : $dataItem$$17_seriesIndex$$56_xVal$$
};
D.$DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($chart$$162$$, $seriesIndex$$57$$) {
  var $dataItem$$18$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$162$$, $seriesIndex$$57$$, 0);
  return!(0,window.isNaN)($dataItem$$18$$) || null == $dataItem$$18$$ ? null : $dataItem$$18$$.targetValue
};
D.$DvtChartDataUtils$$.$getZValue$ = function $$DvtChartDataUtils$$$$getZValue$$($chart$$163_dataItem$$19$$, $seriesIndex$$58$$, $groupIndex$$35$$, $defaultVal$$) {
  $chart$$163_dataItem$$19$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$163_dataItem$$19$$, $seriesIndex$$58$$, $groupIndex$$35$$);
  return!(0,window.isNaN)($chart$$163_dataItem$$19$$) || null == $chart$$163_dataItem$$19$$ ? $defaultVal$$ : null != $chart$$163_dataItem$$19$$.z ? $chart$$163_dataItem$$19$$.z : $defaultVal$$
};
D.$DvtChartDataUtils$$.$isStockValueRising$ = function $$DvtChartDataUtils$$$$isStockValueRising$$($chart$$164_dataItem$$20$$, $seriesIndex$$59$$, $groupIndex$$36$$) {
  return($chart$$164_dataItem$$20$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$164_dataItem$$20$$, $seriesIndex$$59$$, $groupIndex$$36$$)) ? $chart$$164_dataItem$$20$$.open <= $chart$$164_dataItem$$20$$.close : !0
};
D.$DvtChartDataUtils$$.$getSeriesCategories$ = function $$DvtChartDataUtils$$$$getSeriesCategories$$($chart$$165$$, $seriesIndex$$60$$) {
  var $seriesItem$$8$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$165$$, $seriesIndex$$60$$), $series$$8$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$165$$, $seriesIndex$$60$$);
  return $seriesItem$$8$$ && $seriesItem$$8$$.categories ? $seriesItem$$8$$.categories : $series$$8$$ ? [$series$$8$$] : []
};
D.$DvtChartDataUtils$$.$getDataItemCategories$ = function $$DvtChartDataUtils$$$$getDataItemCategories$$($chart$$166$$, $seriesIndex$$61$$, $dataItem$$21_groupIndex$$37$$) {
  return($dataItem$$21_groupIndex$$37$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$166$$, $seriesIndex$$61$$, $dataItem$$21_groupIndex$$37$$)) && $dataItem$$21_groupIndex$$37$$.categories ? $dataItem$$21_groupIndex$$37$$.categories : D.$DvtChartDataUtils$$.$getSeriesCategories$($chart$$166$$, $seriesIndex$$61$$)
};
D.$DvtChartDataUtils$$.$isXValInViewport$ = function $$DvtChartDataUtils$$$$isXValInViewport$$($chart$$167$$, $xVal$$1$$) {
  if((0,window.isNaN)($xVal$$1$$) || null == $xVal$$1$$) {
    return!1
  }
  var $minMax$$2$$ = D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$167$$, !0);
  return!(null != $minMax$$2$$.min && $xVal$$1$$ < $minMax$$2$$.min) && !(null != $minMax$$2$$.max && $xVal$$1$$ > $minMax$$2$$.max)
};
D.$DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($chart$$168$$, $seriesIndex$$62$$, $groupIndex$$38$$) {
  var $isXInViewport_xVal$$2$$ = (0,D.$JSCompiler_StaticMethods_getFromCachedMap2D$$)($chart$$168$$, "isXInViewport", $seriesIndex$$62$$, $groupIndex$$38$$);
  null == $isXInViewport_xVal$$2$$ && ($isXInViewport_xVal$$2$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$168$$, $seriesIndex$$62$$, $groupIndex$$38$$), $isXInViewport_xVal$$2$$ = D.$DvtChartDataUtils$$.$isXValInViewport$($chart$$168$$, $isXInViewport_xVal$$2$$), (0,D.$JSCompiler_StaticMethods_putToCachedMap2D$$)($chart$$168$$, "isXInViewport", $seriesIndex$$62$$, $groupIndex$$38$$, $isXInViewport_xVal$$2$$));
  return $isXInViewport_xVal$$2$$
};
D.$DvtChartDataUtils$$.$isRefObjInViewport$ = function $$DvtChartDataUtils$$$$isRefObjInViewport$$($chart$$169$$, $items$$6_nextVal$$, $index$$134$$) {
  var $xVal$$3$$ = D.$DvtChartRefObjUtils$$.$getXValue$($chart$$169$$, $items$$6_nextVal$$, $index$$134$$), $isRefObjInViewport_previousVal$$ = (0,D.$JSCompiler_StaticMethods_getFromCachedMap2D$$)($chart$$169$$, "isRefObjInViewport", $xVal$$3$$);
  null == $isRefObjInViewport_previousVal$$ && ($isRefObjInViewport_previousVal$$ = D.$DvtChartRefObjUtils$$.$getXValue$($chart$$169$$, $items$$6_nextVal$$, $index$$134$$ - 1), $items$$6_nextVal$$ = D.$DvtChartRefObjUtils$$.$getXValue$($chart$$169$$, $items$$6_nextVal$$, $index$$134$$ + 1), $isRefObjInViewport_previousVal$$ = D.$DvtChartDataUtils$$.$isXValInViewport$($chart$$169$$, $xVal$$3$$) || D.$DvtChartDataUtils$$.$isXValInViewport$($chart$$169$$, $isRefObjInViewport_previousVal$$) || D.$DvtChartDataUtils$$.$isXValInViewport$($chart$$169$$, 
  $items$$6_nextVal$$), (0,D.$JSCompiler_StaticMethods_putToCachedMap2D$$)($chart$$169$$, "isRefObjInViewport", $xVal$$3$$, $isRefObjInViewport_previousVal$$));
  return $isRefObjInViewport_previousVal$$
};
D.$DvtChartDataUtils$$.$isBLACItemInViewport$ = function $$DvtChartDataUtils$$$$isBLACItemInViewport$$($chart$$170$$, $seriesIndex$$63$$, $groupIndex$$39$$) {
  return!D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$170$$, $seriesIndex$$63$$, $groupIndex$$39$$) ? !1 : D.$DvtChartDataUtils$$.$isXInViewport$($chart$$170$$, $seriesIndex$$63$$, $groupIndex$$39$$) || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$170$$, $seriesIndex$$63$$, $groupIndex$$39$$ - 1) || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$170$$, $seriesIndex$$63$$, $groupIndex$$39$$ + 1)
};
D.$DvtChartDataUtils$$.$isMarkerInViewport$ = function $$DvtChartDataUtils$$$$isMarkerInViewport$$($chart$$171_markerSize$$4$$, $seriesIndex$$64$$, $groupIndex$$40$$, $availSpace$$79$$) {
  if(!D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$171_markerSize$$4$$, $seriesIndex$$64$$, $groupIndex$$40$$)) {
    return!1
  }
  var $pos$$13$$ = D.$DvtChartDataUtils$$.$getMarkerPosition$($chart$$171_markerSize$$4$$, $seriesIndex$$64$$, $groupIndex$$40$$, $availSpace$$79$$);
  $chart$$171_markerSize$$4$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$171_markerSize$$4$$, $seriesIndex$$64$$, $groupIndex$$40$$);
  return $availSpace$$79$$ && $pos$$13$$ && $chart$$171_markerSize$$4$$ ? $availSpace$$79$$.$intersects$(new D.$DvtRectangle$$($pos$$13$$.x - $chart$$171_markerSize$$4$$ / 2, $pos$$13$$.y - $chart$$171_markerSize$$4$$ / 2, $chart$$171_markerSize$$4$$, $chart$$171_markerSize$$4$$)) : !0
};
D.$DvtChartDataUtils$$.$getViewportGroupCount$ = function $$DvtChartDataUtils$$$$getViewportGroupCount$$($chart$$172$$) {
  var $ratio$$6_viewportMinMax$$1$$ = D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$172$$, !0), $globalMinMax$$2$$ = D.$DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($chart$$172$$), $ratio$$6_viewportMinMax$$1$$ = ($ratio$$6_viewportMinMax$$1$$.max - $ratio$$6_viewportMinMax$$1$$.min) / ($globalMinMax$$2$$.max - $globalMinMax$$2$$.min);
  return(0,window.isNaN)($ratio$$6_viewportMinMax$$1$$) ? 1 : $ratio$$6_viewportMinMax$$1$$ * D.$DvtChartDataUtils$$.$getGroupCount$($chart$$172$$)
};
D.$DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($isLog$$, $x1$$17_y$$62$$, $y1$$11$$, $x2$$15$$, $y2$$9$$, $x$$84$$) {
  $isLog$$ && ($y1$$11$$ = D.$DvtMath$$.$log10$($y1$$11$$), $y2$$9$$ = D.$DvtMath$$.$log10$($y2$$9$$));
  $x1$$17_y$$62$$ = $y1$$11$$ + ($y2$$9$$ - $y1$$11$$) * ($x$$84$$ - $x1$$17_y$$62$$) / ($x2$$15$$ - $x1$$17_y$$62$$);
  return $isLog$$ ? window.Math.pow(10, $x1$$17_y$$62$$) : $x1$$17_y$$62$$
};
D.$DvtChartDataUtils$$.$_getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$_getViewportEdgeYValues$$($chart$$173$$, $seriesIndex$$65$$) {
  var $seriesData$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$173$$, $seriesIndex$$65$$).items;
  if(!$seriesData$$) {
    return{min:null, max:null}
  }
  for(var $bIncludeHiddenSeries$$2$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$173$$), $max$$4_minMax$$3$$ = D.$DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$173$$, !0), $min$$4$$ = $max$$4_minMax$$3$$.min, $max$$4_minMax$$3$$ = $max$$4_minMax$$3$$.max, $isLog$$1$$ = D.$DvtChartAxisUtils$$.$isLog$($chart$$173$$, D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$173$$, $seriesIndex$$65$$) ? "y2" : "y"), $x$$85$$, $y$$63$$, $prevX$$, $prevY$$, $yMin$$3$$, $yMax$$3$$, 
  $groupIndex$$41$$ = 0;$groupIndex$$41$$ < $seriesData$$.length;$groupIndex$$41$$++) {
    if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$173$$, $seriesIndex$$65$$, $groupIndex$$41$$)) {
      $x$$85$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$173$$, $seriesIndex$$65$$, $groupIndex$$41$$), $y$$63$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$173$$, $seriesIndex$$65$$, $groupIndex$$41$$, $bIncludeHiddenSeries$$2$$), null != $prevX$$ && (null != $min$$4$$ && ($min$$4$$ > $prevX$$ && $min$$4$$ < $x$$85$$) && ($yMin$$3$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($isLog$$1$$, $prevX$$, $prevY$$, $x$$85$$, $y$$63$$, $min$$4$$)), null != $max$$4_minMax$$3$$ && ($max$$4_minMax$$3$$ > 
      $prevX$$ && $max$$4_minMax$$3$$ < $x$$85$$) && ($yMax$$3$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($isLog$$1$$, $prevX$$, $prevY$$, $x$$85$$, $y$$63$$, $max$$4_minMax$$3$$))), $prevX$$ = $x$$85$$, $prevY$$ = $y$$63$$
    }
  }
  return{min:$yMin$$3$$, max:$yMax$$3$$}
};
D.$DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($chart$$174$$, $type$$92$$, $isDataOnly$$) {
  var $cacheKey$$7$$ = $type$$92$$ + ($isDataOnly$$ ? "MinMaxDO" : "MinMax"), $isLog$$2_minMax$$4$$ = $chart$$174$$.$Cache$[$cacheKey$$7$$];
  if($isLog$$2_minMax$$4$$) {
    return $isLog$$2_minMax$$4$$
  }
  var $isLog$$2_minMax$$4$$ = !$isDataOnly$$ && "z" != $type$$92$$ && D.$DvtChartAxisUtils$$.$isLog$($chart$$174$$, $type$$92$$), $isY2Value$$ = "y2" == $type$$92$$;
  $isY2Value$$ && ($type$$92$$ = "y");
  for(var $isYValue$$ = "y" == $type$$92$$, $limitToViewport$$ = !$isDataOnly$$ && $isYValue$$ && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$174$$), $bIncludeHiddenSeries$$3$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$174$$) || "x" == $type$$92$$ && D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$174$$), $maxValue$$4$$ = -window.Infinity, $minValue$$5$$ = window.Infinity, $seriesCount$$17$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$174$$), $seriesIndex$$66$$ = 
  0;$seriesIndex$$66$$ < $seriesCount$$17$$;$seriesIndex$$66$$++) {
    var $data$$27_edgeValues_hidden_high_seriesItem$$10$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$174$$, $seriesIndex$$66$$), $isRange$$2_refObjects$$ = $isYValue$$ && (D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$174$$, $seriesIndex$$66$$) || "candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$174$$, $seriesIndex$$66$$));
    if($bIncludeHiddenSeries$$3$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$174$$, $seriesIndex$$66$$)) {
      var $isY2Series_low_value$$102$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$174$$, $seriesIndex$$66$$);
      if(!($isYValue$$ && $isY2Value$$ != $isY2Series_low_value$$102$$)) {
        var $i$$207_seriesData$$1$$ = $data$$27_edgeValues_hidden_high_seriesItem$$10$$.items;
        if($i$$207_seriesData$$1$$) {
          for(var $groupIndex$$42_items$$7$$ = 0;$groupIndex$$42_items$$7$$ < $i$$207_seriesData$$1$$.length;$groupIndex$$42_items$$7$$++) {
            if($bIncludeHiddenSeries$$3$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$174$$, $seriesIndex$$66$$, $groupIndex$$42_items$$7$$)) {
              if("object" != typeof $i$$207_seriesData$$1$$[$groupIndex$$42_items$$7$$] && ($i$$207_seriesData$$1$$[$groupIndex$$42_items$$7$$] = {y:$i$$207_seriesData$$1$$[$groupIndex$$42_items$$7$$]}), $data$$27_edgeValues_hidden_high_seriesItem$$10$$ = $i$$207_seriesData$$1$$[$groupIndex$$42_items$$7$$], $isY2Series_low_value$$102$$ = null, $isYValue$$ ? $isRange$$2_refObjects$$ || ($isY2Series_low_value$$102$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$174$$, $seriesIndex$$66$$, $groupIndex$$42_items$$7$$, 
              $bIncludeHiddenSeries$$3$$)) : "x" == $type$$92$$ && D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$174$$) && !D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$174$$) ? ($isY2Series_low_value$$102$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$174$$, $groupIndex$$42_items$$7$$), null != $data$$27_edgeValues_hidden_high_seriesItem$$10$$ && ($data$$27_edgeValues_hidden_high_seriesItem$$10$$.x = $isY2Series_low_value$$102$$)) : null != $data$$27_edgeValues_hidden_high_seriesItem$$10$$ && 
              ($isY2Series_low_value$$102$$ = $data$$27_edgeValues_hidden_high_seriesItem$$10$$[$type$$92$$]), !$limitToViewport$$ || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$174$$, $seriesIndex$$66$$, $groupIndex$$42_items$$7$$)) {
                if(!$isRange$$2_refObjects$$ && null != $isY2Series_low_value$$102$$ && !(0,window.isNaN)($isY2Series_low_value$$102$$)) {
                  var $j$$37_radius$$4_refObj$$6$$ = 0;
                  D.$DvtChartTypeUtils$$.$isBubble$($chart$$174$$) && (!$isDataOnly$$ && 0 < $data$$27_edgeValues_hidden_high_seriesItem$$10$$.markerSize) && ($isYValue$$ ? $j$$37_radius$$4_refObj$$6$$ = $data$$27_edgeValues_hidden_high_seriesItem$$10$$._yAxisRadius : "x" == $type$$92$$ && ($j$$37_radius$$4_refObj$$6$$ = $data$$27_edgeValues_hidden_high_seriesItem$$10$$._xAxisRadius));
                  $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $isLog$$2_minMax$$4$$ ? $isY2Series_low_value$$102$$ * window.Math.pow(10, $j$$37_radius$$4_refObj$$6$$) : $isY2Series_low_value$$102$$ + $j$$37_radius$$4_refObj$$6$$);
                  $minValue$$5$$ = window.Math.min($minValue$$5$$, $isLog$$2_minMax$$4$$ ? $isY2Series_low_value$$102$$ / window.Math.pow(10, $j$$37_radius$$4_refObj$$6$$) : $isY2Series_low_value$$102$$ - $j$$37_radius$$4_refObj$$6$$)
                }
                $isRange$$2_refObjects$$ && ($data$$27_edgeValues_hidden_high_seriesItem$$10$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$174$$, $seriesIndex$$66$$, $groupIndex$$42_items$$7$$), $isY2Series_low_value$$102$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$174$$, $seriesIndex$$66$$, $groupIndex$$42_items$$7$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$, $isY2Series_low_value$$102$$), $minValue$$5$$ = window.Math.min($minValue$$5$$, 
                $data$$27_edgeValues_hidden_high_seriesItem$$10$$, $isY2Series_low_value$$102$$))
              }
            }
          }
          $isRange$$2_refObjects$$ = null;
          "x" == $type$$92$$ ? $isRange$$2_refObjects$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$174$$, "x") : $isY2Value$$ ? $isRange$$2_refObjects$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$174$$, "y2") : $isYValue$$ && ($isRange$$2_refObjects$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$174$$, "y"));
          if(null != $isRange$$2_refObjects$$) {
            for($i$$207_seriesData$$1$$ = 0;$i$$207_seriesData$$1$$ < $isRange$$2_refObjects$$.length;$i$$207_seriesData$$1$$++) {
              if($j$$37_radius$$4_refObj$$6$$ = $isRange$$2_refObjects$$[$i$$207_seriesData$$1$$], $groupIndex$$42_items$$7$$ = $j$$37_radius$$4_refObj$$6$$.items, $data$$27_edgeValues_hidden_high_seriesItem$$10$$ = "withRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$174$$) && "hidden" == $j$$37_radius$$4_refObj$$6$$.visibility, !$data$$27_edgeValues_hidden_high_seriesItem$$10$$) {
                if($groupIndex$$42_items$$7$$ && !$data$$27_edgeValues_hidden_high_seriesItem$$10$$) {
                  for($j$$37_radius$$4_refObj$$6$$ = 0;$j$$37_radius$$4_refObj$$6$$ < $groupIndex$$42_items$$7$$.length;$j$$37_radius$$4_refObj$$6$$++) {
                    if(!(null == $groupIndex$$42_items$$7$$[$j$$37_radius$$4_refObj$$6$$] || $limitToViewport$$ && !D.$DvtChartDataUtils$$.$isRefObjInViewport$($chart$$174$$, $groupIndex$$42_items$$7$$, $j$$37_radius$$4_refObj$$6$$))) {
                      var $isY2Series_low_value$$102$$ = D.$DvtChartRefObjUtils$$.$getLowValue$($groupIndex$$42_items$$7$$[$j$$37_radius$$4_refObj$$6$$]), $data$$27_edgeValues_hidden_high_seriesItem$$10$$ = D.$DvtChartRefObjUtils$$.$getHighValue$($groupIndex$$42_items$$7$$[$j$$37_radius$$4_refObj$$6$$]), $val$$20$$ = (0,window.isNaN)($groupIndex$$42_items$$7$$[$j$$37_radius$$4_refObj$$6$$]) ? $groupIndex$$42_items$$7$$[$j$$37_radius$$4_refObj$$6$$].value : $groupIndex$$42_items$$7$$[$j$$37_radius$$4_refObj$$6$$];
                      null != $isY2Series_low_value$$102$$ && (0,window.isFinite)($isY2Series_low_value$$102$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $isY2Series_low_value$$102$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $isY2Series_low_value$$102$$));
                      null != $data$$27_edgeValues_hidden_high_seriesItem$$10$$ && (0,window.isFinite)($data$$27_edgeValues_hidden_high_seriesItem$$10$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$));
                      null != $val$$20$$ && (0,window.isFinite)($val$$20$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $val$$20$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $val$$20$$))
                    }
                  }
                }else {
                  $isY2Series_low_value$$102$$ = D.$DvtChartRefObjUtils$$.$getLowValue$($j$$37_radius$$4_refObj$$6$$), $data$$27_edgeValues_hidden_high_seriesItem$$10$$ = D.$DvtChartRefObjUtils$$.$getHighValue$($j$$37_radius$$4_refObj$$6$$), $val$$20$$ = $j$$37_radius$$4_refObj$$6$$.value, null != $isY2Series_low_value$$102$$ && (0,window.isFinite)($isY2Series_low_value$$102$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $isY2Series_low_value$$102$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, 
                  $isY2Series_low_value$$102$$)), null != $data$$27_edgeValues_hidden_high_seriesItem$$10$$ && (0,window.isFinite)($data$$27_edgeValues_hidden_high_seriesItem$$10$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$)), null != $val$$20$$ && (0,window.isFinite)($val$$20$$) && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $val$$20$$), 
                  $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $val$$20$$))
                }
              }
            }
          }
          $limitToViewport$$ && ($data$$27_edgeValues_hidden_high_seriesItem$$10$$ = D.$DvtChartDataUtils$$.$_getViewportEdgeYValues$($chart$$174$$, $seriesIndex$$66$$), null != $data$$27_edgeValues_hidden_high_seriesItem$$10$$.min && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$.min), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$.min)), null != $data$$27_edgeValues_hidden_high_seriesItem$$10$$.max && 
          ($minValue$$5$$ = window.Math.min($minValue$$5$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$.max), $maxValue$$4$$ = window.Math.max($maxValue$$4$$, $data$$27_edgeValues_hidden_high_seriesItem$$10$$.max)))
        }
      }
    }
  }
  $isLog$$2_minMax$$4$$ = {min:$minValue$$5$$, max:$maxValue$$4$$};
  return $chart$$174$$.$Cache$[$cacheKey$$7$$] = $isLog$$2_minMax$$4$$
};
D.$DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($chart$$175$$, $seriesIndex$$67$$) {
  var $seriesItem$$11$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$175$$, $seriesIndex$$67$$);
  return $seriesItem$$11$$ && "on" == $seriesItem$$11$$.assignedToY2 && D.$DvtChartTypeUtils$$.$isDualY$($chart$$175$$) ? !0 : !1
};
D.$DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($chart$$176_peers$$3$$) {
  var $selection$$15$$ = $chart$$176_peers$$3$$.$getOptions$().selection;
  $selection$$15$$ || ($selection$$15$$ = []);
  $chart$$176_peers$$3$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$176_peers$$3$$);
  for(var $i$$208$$ = 0;$i$$208$$ < $selection$$15$$.length;$i$$208$$++) {
    var $id$$33$$;
    "string" == typeof $selection$$15$$[$i$$208$$] ? ($id$$33$$ = $selection$$15$$[$i$$208$$], $selection$$15$$[$i$$208$$] = {id:$id$$33$$}) : $id$$33$$ = $selection$$15$$[$i$$208$$].id;
    if(null != $id$$33$$ && (!$selection$$15$$[$i$$208$$].series || !$selection$$15$$[$i$$208$$].group)) {
      for(var $j$$38$$ = 0;$j$$38$$ < $chart$$176_peers$$3$$.length;$j$$38$$++) {
        var $peer$$18$$ = $chart$$176_peers$$3$$[$j$$38$$];
        if($id$$33$$ == $peer$$18$$.$_dataItemId$) {
          $selection$$15$$[$i$$208$$].series = $peer$$18$$.$getSeries$();
          $selection$$15$$[$i$$208$$].group = $peer$$18$$.$getGroup$();
          break
        }
      }
    }
  }
  return $selection$$15$$
};
D.$DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($chart$$177_handler$$36_selectedIds$$2$$) {
  var $selection$$16$$ = [];
  if($chart$$177_handler$$36_selectedIds$$2$$ = $chart$$177_handler$$36_selectedIds$$2$$.$getSelectionHandler$()) {
    $chart$$177_handler$$36_selectedIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($chart$$177_handler$$36_selectedIds$$2$$);
    for(var $i$$209$$ = 0;$i$$209$$ < $chart$$177_handler$$36_selectedIds$$2$$.length;$i$$209$$++) {
      var $selectedId$$ = $chart$$177_handler$$36_selectedIds$$2$$[$i$$209$$];
      $selection$$16$$.push({series:$selectedId$$.$getSeries$(), group:$selectedId$$.$getGroup$(), id:$selectedId$$.getId()})
    }
  }
  return $selection$$16$$
};
D.$DvtChartDataUtils$$.$hasVolumeSeries$ = function $$DvtChartDataUtils$$$$hasVolumeSeries$$($chart$$178_hasVolume$$) {
  return($chart$$178_hasVolume$$ = $chart$$178_hasVolume$$.$getOptions$()._hasVolume) ? $chart$$178_hasVolume$$ : !1
};
D.$DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($chart$$179_selection$$17$$, $series$$9_seriesIndex$$68$$, $group$$23_groupIndex$$43$$) {
  var $id$$34$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$179_selection$$17$$, $series$$9_seriesIndex$$68$$, $group$$23_groupIndex$$43$$).id;
  $series$$9_seriesIndex$$68$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$179_selection$$17$$, $series$$9_seriesIndex$$68$$);
  $group$$23_groupIndex$$43$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$179_selection$$17$$, $group$$23_groupIndex$$43$$);
  ($chart$$179_selection$$17$$ = $chart$$179_selection$$17$$.$getOptions$().selection) || ($chart$$179_selection$$17$$ = []);
  for(var $i$$210$$ = 0;$i$$210$$ < $chart$$179_selection$$17$$.length;$i$$210$$++) {
    if(null != $id$$34$$ && ($id$$34$$ == $chart$$179_selection$$17$$[$i$$210$$] || $id$$34$$ == $chart$$179_selection$$17$$[$i$$210$$].id) || $series$$9_seriesIndex$$68$$ == $chart$$179_selection$$17$$[$i$$210$$].series && $group$$23_groupIndex$$43$$ == $chart$$179_selection$$17$$[$i$$210$$].group) {
      return!0
    }
  }
  return!1
};
D.$DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($chart$$180_dataContext$$, $seriesIndex$$69$$, $groupIndex$$44$$, $defaultLabel_type$$93$$, $isStackLabel$$1$$) {
  var $funcLabel$$;
  $defaultLabel_type$$93$$ = D.$DvtChartDataUtils$$.$getDefaultDataLabel$($chart$$180_dataContext$$, $seriesIndex$$69$$, $groupIndex$$44$$, $defaultLabel_type$$93$$, $isStackLabel$$1$$);
  var $dataLabelFunc$$ = $chart$$180_dataContext$$.$getOptions$().dataLabel;
  $dataLabelFunc$$ && !$isStackLabel$$1$$ && ($chart$$180_dataContext$$ = D.$DvtChartDataUtils$$.$getDataContext$($chart$$180_dataContext$$, $seriesIndex$$69$$, $groupIndex$$44$$), $chart$$180_dataContext$$.label = $defaultLabel_type$$93$$, $funcLabel$$ = $dataLabelFunc$$($chart$$180_dataContext$$));
  return $funcLabel$$ ? $funcLabel$$ : $defaultLabel_type$$93$$
};
D.$DvtChartDataUtils$$.$getDefaultDataLabel$ = function $$DvtChartDataUtils$$$$getDefaultDataLabel$$($chart$$181$$, $axis$$79_seriesIndex$$70_valueFormat$$, $dataItem$$22_groupIndex$$45_label$$32$$, $type$$94$$, $isStackLabel$$2$$) {
  if($isStackLabel$$2$$) {
    $dataItem$$22_groupIndex$$45_label$$32$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$181$$, $axis$$79_seriesIndex$$70_valueFormat$$, $dataItem$$22_groupIndex$$45_label$$32$$)
  }else {
    $dataItem$$22_groupIndex$$45_label$$32$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$181$$, $axis$$79_seriesIndex$$70_valueFormat$$, $dataItem$$22_groupIndex$$45_label$$32$$);
    if(!$dataItem$$22_groupIndex$$45_label$$32$$) {
      return null
    }
    $dataItem$$22_groupIndex$$45_label$$32$$ = $dataItem$$22_groupIndex$$45_label$$32$$.label;
    "low" == $type$$94$$ ? $dataItem$$22_groupIndex$$45_label$$32$$ = $dataItem$$22_groupIndex$$45_label$$32$$ instanceof window.Array ? $dataItem$$22_groupIndex$$45_label$$32$$[0] : $dataItem$$22_groupIndex$$45_label$$32$$ : "high" == $type$$94$$ && ($dataItem$$22_groupIndex$$45_label$$32$$ = $dataItem$$22_groupIndex$$45_label$$32$$ instanceof window.Array ? $dataItem$$22_groupIndex$$45_label$$32$$[1] : null)
  }
  if(null != $dataItem$$22_groupIndex$$45_label$$32$$) {
    if("number" == typeof $dataItem$$22_groupIndex$$45_label$$32$$) {
      var $min$$5$$, $max$$5$$, $axisInfo$$15_majorIncrement$$;
      if($axis$$79_seriesIndex$$70_valueFormat$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$181$$, $axis$$79_seriesIndex$$70_valueFormat$$) && $chart$$181$$.$y2Axis$ ? $chart$$181$$.$y2Axis$ : $chart$$181$$.$yAxis$) {
        $axisInfo$$15_majorIncrement$$ = $axis$$79_seriesIndex$$70_valueFormat$$.$getInfo$(), $min$$5$$ = $axisInfo$$15_majorIncrement$$.$GlobalMin$, $max$$5$$ = $axisInfo$$15_majorIncrement$$.$GlobalMax$, $axisInfo$$15_majorIncrement$$ = $axisInfo$$15_majorIncrement$$.$getMajorIncrement$()
      }
      $axis$$79_seriesIndex$$70_valueFormat$$ = D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$181$$, "label");
      return D.$DvtChartTooltipUtils$$.$formatValue$($chart$$181$$.$getCtx$(), $axis$$79_seriesIndex$$70_valueFormat$$, $dataItem$$22_groupIndex$$45_label$$32$$, $min$$5$$, $max$$5$$, $axisInfo$$15_majorIncrement$$)
    }
    return $dataItem$$22_groupIndex$$45_label$$32$$
  }
  return null
};
D.$DvtChartDataUtils$$.$getStackCategory$ = function $$DvtChartDataUtils$$$$getStackCategory$$($chart$$182$$, $seriesIndex$$71$$) {
  return D.$DvtChartTypeUtils$$.$isStacked$($chart$$182$$) ? D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$182$$, $seriesIndex$$71$$).stackCategory : D.$DvtChartDataUtils$$.$getSeries$($chart$$182$$, $seriesIndex$$71$$)
};
D.$DvtChartDataUtils$$.$getStackCategories$ = function $$DvtChartDataUtils$$$$getStackCategories$$($chart$$183$$, $type$$95$$, $bIncludeHiddenSeries$$4$$) {
  for(var $yCategories$$ = [], $y2Categories$$ = [], $s$$12$$ = 0;$s$$12$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$183$$);$s$$12$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$183$$, $s$$12$$) || $bIncludeHiddenSeries$$4$$) {
      if($type$$95$$) {
        var $category$$5_seriesType$$6$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$183$$, $s$$12$$);
        "candlestick" == $category$$5_seriesType$$6$$ && ($category$$5_seriesType$$6$$ = "bar");
        if($type$$95$$ != $category$$5_seriesType$$6$$) {
          continue
        }
      }
      $category$$5_seriesType$$6$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$183$$, $s$$12$$);
      D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$183$$, $s$$12$$) ? -1 == D.$DvtArrayUtils$$.$getIndex$($y2Categories$$, $category$$5_seriesType$$6$$) && $y2Categories$$.push($category$$5_seriesType$$6$$) : -1 == D.$DvtArrayUtils$$.$getIndex$($yCategories$$, $category$$5_seriesType$$6$$) && $yCategories$$.push($category$$5_seriesType$$6$$)
    }
  }
  return{y:$yCategories$$, y2:$y2Categories$$}
};
D.$DvtChartDataUtils$$.$getBarCategoryZ$ = function $$DvtChartDataUtils$$$$getBarCategoryZ$$($chart$$184$$, $category$$6$$, $groupIndex$$46$$, $isY2$$1$$) {
  for(var $width$$41$$ = 0, $s$$13$$ = 0;$s$$13$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$184$$);$s$$13$$++) {
    if(!("bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$184$$, $s$$13$$) && "candlestick" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$184$$, $s$$13$$) || D.$DvtChartDataUtils$$.$getStackCategory$($chart$$184$$, $s$$13$$) != $category$$6$$ || !D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$184$$, $s$$13$$))) {
      var $isSeriesY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$184$$, $s$$13$$);
      if($isY2$$1$$ && $isSeriesY2$$ || !$isY2$$1$$ && !$isSeriesY2$$) {
        $width$$41$$ = window.Math.max($width$$41$$, D.$DvtChartDataUtils$$.$getZValue$($chart$$184$$, $s$$13$$, $groupIndex$$46$$, 1))
      }
    }
  }
  return $width$$41$$
};
D.$DvtChartDataUtils$$.$getBarInfo$ = function $$DvtChartDataUtils$$$$getBarInfo$$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$, $groupIndex$$47_stackWidth$$, $availSpace$$80$$) {
  var $bHoriz$$10_x1$$18$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$185_dataPos$$5$$), $bStacked$$1_groupWidth$$2$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$185_dataPos$$5$$), $isRTL$$15_x2$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$185_dataPos$$5$$.$getCtx$()), $axisCoord$$3_xAxis$$3$$ = $chart$$185_dataPos$$5$$.$xAxis$, $bRange$$ = D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$), $itemOffset_offsetMap$$ = D.$DvtChartStyleUtils$$.$getBarCategoryOffsetMap$($chart$$185_dataPos$$5$$, 
  $groupIndex$$47_stackWidth$$, $bStacked$$1_groupWidth$$2$$), $xValue$$2_yCoord$$5$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$, $groupIndex$$47_stackWidth$$), $xCoord$$8$$ = $axisCoord$$3_xAxis$$3$$.$getUnboundedCoordAt$($xValue$$2_yCoord$$5$$), $bY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$), $category$$7_yAxis$$3$$ = $bY2Series$$ ? $chart$$185_dataPos$$5$$.$y2Axis$ : $chart$$185_dataPos$$5$$.$yAxis$, 
  $axisCoord$$3_xAxis$$3$$ = $category$$7_yAxis$$3$$.$getBaselineCoord$(), $baseCoord$$1_highValue$$1_yValue$$1$$;
  if($bRange$$) {
    var $lowValue$$1_totalYValue$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$, $groupIndex$$47_stackWidth$$);
    $baseCoord$$1_highValue$$1_yValue$$1$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$, $groupIndex$$47_stackWidth$$);
    if(null == $lowValue$$1_totalYValue$$ || (0,window.isNaN)($lowValue$$1_totalYValue$$) || null == $baseCoord$$1_highValue$$1_yValue$$1$$ || (0,window.isNaN)($baseCoord$$1_highValue$$1_yValue$$1$$)) {
      return null
    }
    $xValue$$2_yCoord$$5$$ = $category$$7_yAxis$$3$$.$getBoundedCoordAt$($lowValue$$1_totalYValue$$);
    $baseCoord$$1_highValue$$1_yValue$$1$$ = $category$$7_yAxis$$3$$.$getBoundedCoordAt$($baseCoord$$1_highValue$$1_yValue$$1$$)
  }else {
    $baseCoord$$1_highValue$$1_yValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$, $groupIndex$$47_stackWidth$$);
    $lowValue$$1_totalYValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$, $groupIndex$$47_stackWidth$$);
    if(null == $baseCoord$$1_highValue$$1_yValue$$1$$ || (0,window.isNaN)($baseCoord$$1_highValue$$1_yValue$$1$$)) {
      return null
    }
    $xValue$$2_yCoord$$5$$ = $category$$7_yAxis$$3$$.$getBoundedCoordAt$($lowValue$$1_totalYValue$$);
    $baseCoord$$1_highValue$$1_yValue$$1$$ = $bStacked$$1_groupWidth$$2$$ ? $category$$7_yAxis$$3$$.$getBoundedCoordAt$($lowValue$$1_totalYValue$$ - $baseCoord$$1_highValue$$1_yValue$$1$$) : $axisCoord$$3_xAxis$$3$$
  }
  if($xValue$$2_yCoord$$5$$ == $baseCoord$$1_highValue$$1_yValue$$1$$ && null == $category$$7_yAxis$$3$$.$getCoordAt$($lowValue$$1_totalYValue$$)) {
    return null
  }
  $category$$7_yAxis$$3$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$);
  $barWidth$$6_seriesIndex$$72$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$185_dataPos$$5$$, $barWidth$$6_seriesIndex$$72$$, $groupIndex$$47_stackWidth$$);
  $groupIndex$$47_stackWidth$$ = $bStacked$$1_groupWidth$$2$$ ? D.$DvtChartStyleUtils$$.$getBarStackWidth$($chart$$185_dataPos$$5$$, $category$$7_yAxis$$3$$, $groupIndex$$47_stackWidth$$, $bY2Series$$) : $barWidth$$6_seriesIndex$$72$$;
  "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$185_dataPos$$5$$) && (0,D.$DvtAgent$isPlatformGecko$$)() && ($bStacked$$1_groupWidth$$2$$ = $barWidth$$6_seriesIndex$$72$$ / (1 - D.$DvtChartStyleUtils$$.$getBarGapRatio$($chart$$185_dataPos$$5$$)), 1 < $barWidth$$6_seriesIndex$$72$$ && 2 > $bStacked$$1_groupWidth$$2$$ - $barWidth$$6_seriesIndex$$72$$ && ($barWidth$$6_seriesIndex$$72$$--, $groupIndex$$47_stackWidth$$ = $barWidth$$6_seriesIndex$$72$$));
  $itemOffset_offsetMap$$ = $itemOffset_offsetMap$$[$bY2Series$$ ? "y2" : "y"][$category$$7_yAxis$$3$$] + 0.5 * ($groupIndex$$47_stackWidth$$ - $barWidth$$6_seriesIndex$$72$$);
  $bHoriz$$10_x1$$18$$ = $isRTL$$15_x2$$16$$ && !$bHoriz$$10_x1$$18$$ ? $xCoord$$8$$ - $itemOffset_offsetMap$$ - $barWidth$$6_seriesIndex$$72$$ : $xCoord$$8$$ + $itemOffset_offsetMap$$;
  $isRTL$$15_x2$$16$$ = $bHoriz$$10_x1$$18$$ + $barWidth$$6_seriesIndex$$72$$;
  $chart$$185_dataPos$$5$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($chart$$185_dataPos$$5$$, new D.$DvtPoint$$(($bHoriz$$10_x1$$18$$ + $isRTL$$15_x2$$16$$) / 2, $bRange$$ ? ($xValue$$2_yCoord$$5$$ + $baseCoord$$1_highValue$$1_yValue$$1$$) / 2 : $xValue$$2_yCoord$$5$$), $availSpace$$80$$);
  return{$x1$:$bHoriz$$10_x1$$18$$, $x2$:$isRTL$$15_x2$$16$$, $axisCoord$:$axisCoord$$3_xAxis$$3$$, $baseCoord$:$baseCoord$$1_highValue$$1_yValue$$1$$, $yCoord$:$xValue$$2_yCoord$$5$$, $dataPos$:$chart$$185_dataPos$$5$$, $barWidth$:$barWidth$$6_seriesIndex$$72$$}
};
D.$DvtChartDataUtils$$.$getMarkerPosition$ = function $$DvtChartDataUtils$$$$getMarkerPosition$$($chart$$186$$, $seriesIndex$$73_xCoord$$9$$, $groupIndex$$48_yCoord$$6$$, $availSpace$$81$$) {
  var $xAxis$$4$$ = $chart$$186$$.$xAxis$, $highCoord$$4_yAxis$$4$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$186$$, $seriesIndex$$73_xCoord$$9$$) ? $chart$$186$$.$y2Axis$ : $chart$$186$$.$yAxis$, $isPolar$$5$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$186$$), $bRange$$1$$ = D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$186$$, $seriesIndex$$73_xCoord$$9$$), $xValue$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$186$$, $seriesIndex$$73_xCoord$$9$$, $groupIndex$$48_yCoord$$6$$), $lowCoord$$4_yValue$$2$$ = 
  D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$186$$, $seriesIndex$$73_xCoord$$9$$, $groupIndex$$48_yCoord$$6$$);
  if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$186$$)) {
    if($isPolar$$5$$ && $lowCoord$$4_yValue$$2$$ < (0,D.$JSCompiler_StaticMethods_getViewportMin$$)($highCoord$$4_yAxis$$4$$.$getInfo$())) {
      return null
    }
    $seriesIndex$$73_xCoord$$9$$ = $isPolar$$5$$ ? $xAxis$$4$$.$getCoordAt$($xValue$$3$$) : $xAxis$$4$$.$getUnboundedCoordAt$($xValue$$3$$);
    $groupIndex$$48_yCoord$$6$$ = $highCoord$$4_yAxis$$4$$.$getUnboundedCoordAt$($lowCoord$$4_yValue$$2$$)
  }else {
    $bRange$$1$$ ? ($lowCoord$$4_yValue$$2$$ = $highCoord$$4_yAxis$$4$$.$getCoordAt$(D.$DvtChartDataUtils$$.$getLowValue$($chart$$186$$, $seriesIndex$$73_xCoord$$9$$, $groupIndex$$48_yCoord$$6$$)), $highCoord$$4_yAxis$$4$$ = $highCoord$$4_yAxis$$4$$.$getCoordAt$(D.$DvtChartDataUtils$$.$getHighValue$($chart$$186$$, $seriesIndex$$73_xCoord$$9$$, $groupIndex$$48_yCoord$$6$$)), $seriesIndex$$73_xCoord$$9$$ = $xAxis$$4$$.$getCoordAt$(D.$DvtChartDataUtils$$.$getXValue$($chart$$186$$, $seriesIndex$$73_xCoord$$9$$, 
    $groupIndex$$48_yCoord$$6$$)), $groupIndex$$48_yCoord$$6$$ = ($lowCoord$$4_yValue$$2$$ + $highCoord$$4_yAxis$$4$$) / 2) : ($seriesIndex$$73_xCoord$$9$$ = $xAxis$$4$$.$getCoordAt$($xValue$$3$$), $groupIndex$$48_yCoord$$6$$ = $highCoord$$4_yAxis$$4$$.$getCoordAt$($lowCoord$$4_yValue$$2$$))
  }
  return null == $seriesIndex$$73_xCoord$$9$$ || null == $groupIndex$$48_yCoord$$6$$ ? null : D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($chart$$186$$, new D.$DvtPoint$$($seriesIndex$$73_xCoord$$9$$, $groupIndex$$48_yCoord$$6$$), $availSpace$$81$$)
};
D.$DvtChartDataUtils$$.$isSeriesNegative$ = function $$DvtChartDataUtils$$$$isSeriesNegative$$($chart$$187$$, $seriesIndex$$74$$) {
  for(var $groupCount$$10$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$187$$), $i$$211$$ = 0;$i$$211$$ < $groupCount$$10$$;$i$$211$$++) {
    if(0 < D.$DvtChartDataUtils$$.getValue($chart$$187$$, $seriesIndex$$74$$, $i$$211$$)) {
      return!1
    }
  }
  return!0
};
D.$DvtChartDataUtils$$.$getDataContext$ = function $$DvtChartDataUtils$$$$getDataContext$$($chart$$188$$, $seriesIndex$$75$$, $groupIndex$$49$$) {
  var $dataItem$$23$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$188$$, $seriesIndex$$75$$, $groupIndex$$49$$), $rawOptions$$ = $chart$$188$$.$_rawOptions$;
  return{id:$dataItem$$23$$.id, series:D.$DvtChartDataUtils$$.$getSeries$($chart$$188$$, $seriesIndex$$75$$), group:D.$DvtChartDataUtils$$.$getGroup$($chart$$188$$, $groupIndex$$49$$), data:$rawOptions$$.series[$seriesIndex$$75$$].items[$groupIndex$$49$$], seriesData:$rawOptions$$.series[$seriesIndex$$75$$], groupData:D.$DvtChartDataUtils$$.$_getGroupsDataArray$($chart$$188$$)[$groupIndex$$49$$], component:$chart$$188$$.$getOptions$()._widgetConstructor, value:D.$DvtChartDataUtils$$.getValue($chart$$188$$, 
  $seriesIndex$$75$$, $groupIndex$$49$$), targetValue:D.$DvtChartDataUtils$$.$getTargetValue$($chart$$188$$, $seriesIndex$$75$$), x:D.$DvtChartDataUtils$$.$getXValue$($chart$$188$$, $seriesIndex$$75$$, $groupIndex$$49$$), y:D.$DvtChartDataUtils$$.getValue($chart$$188$$, $seriesIndex$$75$$, $groupIndex$$49$$), z:D.$DvtChartDataUtils$$.$getZValue$($chart$$188$$, $seriesIndex$$75$$, $groupIndex$$49$$), low:D.$DvtChartDataUtils$$.$getLowValue$($chart$$188$$, $seriesIndex$$75$$, $groupIndex$$49$$), high:D.$DvtChartDataUtils$$.$getHighValue$($chart$$188$$, 
  $seriesIndex$$75$$, $groupIndex$$49$$), color:D.$DvtChartStyleUtils$$.$getColor$($chart$$188$$, $seriesIndex$$75$$, $groupIndex$$49$$), open:$dataItem$$23$$.open, close:$dataItem$$23$$.close, volume:$dataItem$$23$$.volume, totalValue:D.$DvtChartTypeUtils$$.$isPie$($chart$$188$$) ? $chart$$188$$.$pieChart$.$getTotalValue$() : null}
};
D.$DvtChartDataUtils$$.$_getGroupsDataArray$ = function $$DvtChartDataUtils$$$$_getGroupsDataArray$$($chart$$189$$) {
  var $groupsDataArray$$ = $chart$$189$$.$Cache$.groupsDataArray;
  $groupsDataArray$$ || ($groupsDataArray$$ = D.$DvtChartDataUtils$$.$_getNestedGroupsData$($chart$$189$$.$_rawOptions$.groups), $chart$$189$$.$Cache$.groupsDataArray = $groupsDataArray$$);
  return $groupsDataArray$$
};
D.$DvtChartDataUtils$$.$_getNestedGroupsData$ = function $$DvtChartDataUtils$$$$_getNestedGroupsData$$($groups$$6$$) {
  if(!$groups$$6$$) {
    return[]
  }
  for(var $groupsDataArray$$1$$ = [], $i$$212$$ = 0;$i$$212$$ < $groups$$6$$.length;$i$$212$$++) {
    var $group$$24$$ = $groups$$6$$[$i$$212$$];
    if($group$$24$$.groups) {
      for(var $innerGroupData$$ = D.$DvtChartDataUtils$$.$_getNestedGroupsData$($group$$24$$.groups), $j$$39$$ = 0;$j$$39$$ < $innerGroupData$$.length;$j$$39$$++) {
        $innerGroupData$$[$j$$39$$].unshift($group$$24$$)
      }
      $groupsDataArray$$1$$ = $groupsDataArray$$1$$.concat($innerGroupData$$)
    }else {
      $groupsDataArray$$1$$.push([$group$$24$$])
    }
  }
  return $groupsDataArray$$1$$
};
D.$DvtChartDataUtils$$.$isBarStackLabeled$ = function $$DvtChartDataUtils$$$$isBarStackLabeled$$($chart$$190$$, $s$$14_seriesIndex$$76$$, $groupIndex$$50$$) {
  var $stackCategory$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$190$$, $s$$14_seriesIndex$$76$$), $isNegative$$1$$ = 0 > D.$DvtChartDataUtils$$.getValue($chart$$190$$, $s$$14_seriesIndex$$76$$, $groupIndex$$50$$), $numSeries$$2$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$190$$);
  for($s$$14_seriesIndex$$76$$ += 1;$s$$14_seriesIndex$$76$$ < $numSeries$$2$$;$s$$14_seriesIndex$$76$$++) {
    if($stackCategory$$ == D.$DvtChartDataUtils$$.$getStackCategory$($chart$$190$$, $s$$14_seriesIndex$$76$$) && $isNegative$$1$$ == 0 > D.$DvtChartDataUtils$$.getValue($chart$$190$$, $s$$14_seriesIndex$$76$$, $groupIndex$$50$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$190$$, $s$$14_seriesIndex$$76$$) && D.$DvtChartDataUtils$$.$isBLACItemInViewport$($chart$$190$$, $s$$14_seriesIndex$$76$$, $groupIndex$$50$$)) {
      return!1
    }
  }
  return!0
};
D.$DvtChartEventUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventUtils$$, D.$DvtObj$$, "DvtChartEventUtils");
D.$DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($chart$$191$$) {
  return $chart$$191$$.$getOptions$().hideAndShowBehavior
};
D.$DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($chart$$192$$) {
  return $chart$$192$$.$getOptions$().hoverBehavior
};
D.$DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($chart$$193_options$$78$$, $category$$8$$, $visibility$$2$$) {
  var $hiddenCategories$$1_i$$213_refObj$$7$$ = D.$DvtChartRefObjUtils$$.$getRefObj$($chart$$193_options$$78$$, $category$$8$$);
  null != $hiddenCategories$$1_i$$213_refObj$$7$$ && ($hiddenCategories$$1_i$$213_refObj$$7$$.visibility = $visibility$$2$$);
  var $hiddenCategories$$1_i$$213_refObj$$7$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$193_options$$78$$), $dataSection_index$$135$$ = D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$1_i$$213_refObj$$7$$, $category$$8$$);
  "hidden" == $visibility$$2$$ && 0 > $dataSection_index$$135$$ ? $hiddenCategories$$1_i$$213_refObj$$7$$.push($category$$8$$) : "visible" == $visibility$$2$$ && 0 <= $dataSection_index$$135$$ && $hiddenCategories$$1_i$$213_refObj$$7$$.splice($dataSection_index$$135$$, 1);
  if(($chart$$193_options$$78$$ = $chart$$193_options$$78$$.$getOptions$()) && $chart$$193_options$$78$$.legend && $chart$$193_options$$78$$.legend.sections) {
    for($hiddenCategories$$1_i$$213_refObj$$7$$ = 0;$hiddenCategories$$1_i$$213_refObj$$7$$ < $chart$$193_options$$78$$.legend.sections.length;$hiddenCategories$$1_i$$213_refObj$$7$$++) {
      if(($dataSection_index$$135$$ = $chart$$193_options$$78$$.legend.sections[$hiddenCategories$$1_i$$213_refObj$$7$$]) && $dataSection_index$$135$$.items) {
        for(var $j$$40$$ = 0;$j$$40$$ < $dataSection_index$$135$$.items.length;$j$$40$$++) {
          $dataSection_index$$135$$.items[$j$$40$$].id == $category$$8$$ && ($dataSection_index$$135$$.items[$j$$40$$].categoryVisibility = $visibility$$2$$)
        }
      }
    }
    return!0
  }
  return!1
};
D.$DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($chart$$194$$) {
  return!D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$194$$) ? !1 : "off" != $chart$$194$$.$getOptions$().zoomAndScroll
};
D.$DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($chart$$195_zs$$) {
  if(!D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$195_zs$$)) {
    return!1
  }
  $chart$$195_zs$$ = $chart$$195_zs$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$195_zs$$ || "delayed" == $chart$$195_zs$$
};
D.$DvtChartEventUtils$$.$getZoomDirection$ = function $$DvtChartEventUtils$$$$getZoomDirection$$($chart$$196$$) {
  return D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$196$$) ? $chart$$196$$.$getOptions$().zoomDirection : "auto"
};
D.$DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($chart$$197_zs$$1$$) {
  if(!D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$197_zs$$1$$)) {
    return!1
  }
  $chart$$197_zs$$1$$ = $chart$$197_zs$$1$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$197_zs$$1$$ || "liveScrollOnly" == $chart$$197_zs$$1$$
};
D.$DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($chart$$198_zs$$2$$) {
  if(!D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$198_zs$$2$$)) {
    return!1
  }
  $chart$$198_zs$$2$$ = $chart$$198_zs$$2$$.$getOptions$().zoomAndScroll;
  return"delayed" == $chart$$198_zs$$2$$ || "delayedScrollOnly" == $chart$$198_zs$$2$$
};
D.$DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($chart$$199$$, $selection$$18$$) {
  for(var $ret$$10$$ = [], $i$$214$$ = 0;$i$$214$$ < $selection$$18$$.length;$i$$214$$++) {
    var $item$$4_otherItems$$ = $selection$$18$$[$i$$214$$];
    $item$$4_otherItems$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($item$$4_otherItems$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$199$$), $ret$$10$$ = $ret$$10$$.concat($item$$4_otherItems$$)) : $ret$$10$$.push($item$$4_otherItems$$)
  }
  return $ret$$10$$
};
D.$DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($event$$143$$) {
  null != $event$$143$$.x && ($event$$143$$.x -= 1);
  null != $event$$143$$.$w$ && ($event$$143$$.$w$ += 2);
  null != $event$$143$$.y && ($event$$143$$.y -= 1);
  null != $event$$143$$.$h$ && ($event$$143$$.$h$ += 2)
};
D.$DvtChartEventUtils$$.$getSelectedObjects$ = function $$DvtChartEventUtils$$$$getSelectedObjects$$($chart$$200$$, $event$$144$$, $boundedObjects_selectionHandler$$2$$) {
  if(!$chart$$200$$.$Cache$.dataFiltered) {
    return(0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($boundedObjects_selectionHandler$$2$$)
  }
  $boundedObjects_selectionHandler$$2$$ = [];
  var $dataPositions$$ = $chart$$200$$.$Cache$.dataPositions;
  if(!$dataPositions$$) {
    for(var $dataPositions$$ = [], $i$$215_seriesIdx$$1$$ = 0;$i$$215_seriesIdx$$1$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$200$$);$i$$215_seriesIdx$$1$$++) {
      for(var $groupIdx$$1_withinY$$ = 0;$groupIdx$$1_withinY$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$200$$);$groupIdx$$1_withinY$$++) {
        var $dataPos$$7$$;
        if($dataPos$$7$$ = "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$200$$, $i$$215_seriesIdx$$1$$) ? D.$DvtChartDataUtils$$.$getBarInfo$($chart$$200$$, $i$$215_seriesIdx$$1$$, $groupIdx$$1_withinY$$).$dataPos$ : D.$DvtChartDataUtils$$.$getMarkerPosition$($chart$$200$$, $i$$215_seriesIdx$$1$$, $groupIdx$$1_withinY$$)) {
          $dataPos$$7$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$200$$.$getPlotArea$(), $dataPos$$7$$), $dataPositions$$.push({$seriesIndex$:$i$$215_seriesIdx$$1$$, $groupIndex$:$groupIdx$$1_withinY$$, $pos$:$dataPos$$7$$})
        }
      }
    }
    $chart$$200$$.$Cache$.dataPositions = $dataPositions$$
  }
  for($i$$215_seriesIdx$$1$$ = 0;$i$$215_seriesIdx$$1$$ < $dataPositions$$.length;$i$$215_seriesIdx$$1$$++) {
    if($dataPos$$7$$ = $dataPositions$$[$i$$215_seriesIdx$$1$$].$pos$) {
      $groupIdx$$1_withinY$$ = null == $event$$144$$.y || $dataPos$$7$$.y >= $event$$144$$.y && $dataPos$$7$$.y <= $event$$144$$.y + $event$$144$$.$h$, (null == $event$$144$$.x || $dataPos$$7$$.x >= $event$$144$$.x && $dataPos$$7$$.x <= $event$$144$$.x + $event$$144$$.$w$) && $groupIdx$$1_withinY$$ && $boundedObjects_selectionHandler$$2$$.push(new D.$DvtChartDataItem$$(null, D.$DvtChartDataUtils$$.$getSeries$($chart$$200$$, $dataPositions$$[$i$$215_seriesIdx$$1$$].$seriesIndex$), D.$DvtChartDataUtils$$.$getGroup$($chart$$200$$, 
      $dataPositions$$[$i$$215_seriesIdx$$1$$].$groupIndex$)))
    }
  }
  return $boundedObjects_selectionHandler$$2$$
};
D.$DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($chart$$201$$, $event$$145$$) {
  for(var $peers$$4$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$201$$), $boundedPeers$$ = [], $i$$216$$ = 0;$i$$216$$ < $peers$$4$$.length;$i$$216$$++) {
    var $peer$$19$$ = $peers$$4$$[$i$$216$$], $dataPos$$8$$ = $peer$$19$$.$_dataPos$;
    if($dataPos$$8$$) {
      var $dataPos$$8$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$201$$.$getPlotArea$(), $dataPos$$8$$), $withinY$$1$$ = null == $event$$145$$.y || $dataPos$$8$$.y >= $event$$145$$.y && $dataPos$$8$$.y <= $event$$145$$.y + $event$$145$$.$h$;
      (null == $event$$145$$.x || $dataPos$$8$$.x >= $event$$145$$.x && $dataPos$$8$$.x <= $event$$145$$.x + $event$$145$$.$w$) && $withinY$$1$$ && $boundedPeers$$.push($peer$$19$$)
    }
  }
  return $boundedPeers$$
};
D.$DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($chart$$202$$, $coords$$22_event$$146$$, $limitExtent$$) {
  var $maxPt_plotArea$$2_yMinMax$$ = $chart$$202$$.$getPlotArea$(), $minPt_xMinMax$$ = $maxPt_plotArea$$2_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($coords$$22_event$$146$$.x, $coords$$22_event$$146$$.y)), $maxPt_plotArea$$2_yMinMax$$ = $maxPt_plotArea$$2_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($coords$$22_event$$146$$.x + $coords$$22_event$$146$$.$w$, $coords$$22_event$$146$$.y + $coords$$22_event$$146$$.$h$));
  null == $coords$$22_event$$146$$.x && ($minPt_xMinMax$$.x = null, $maxPt_plotArea$$2_yMinMax$$.x = null);
  null == $coords$$22_event$$146$$.y && ($minPt_xMinMax$$.y = null, $maxPt_plotArea$$2_yMinMax$$.y = null);
  $coords$$22_event$$146$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$202$$, $minPt_xMinMax$$.x, $maxPt_plotArea$$2_yMinMax$$.x, $minPt_xMinMax$$.y, $maxPt_plotArea$$2_yMinMax$$.y);
  var $minPt_xMinMax$$ = {}, $maxPt_plotArea$$2_yMinMax$$ = {}, $y2MinMax$$ = {}, $startEndGroup$$1$$ = {};
  $chart$$202$$.$xAxis$ && ($minPt_xMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$202$$.$xAxis$, $coords$$22_event$$146$$.$xMin$, $coords$$22_event$$146$$.$xMax$, $limitExtent$$), $startEndGroup$$1$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$202$$.$xAxis$, $minPt_xMinMax$$.min, $minPt_xMinMax$$.max));
  $chart$$202$$.$yAxis$ && ($maxPt_plotArea$$2_yMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$202$$.$yAxis$, $coords$$22_event$$146$$.$yMin$, $coords$$22_event$$146$$.$yMax$, $limitExtent$$));
  $chart$$202$$.$y2Axis$ && ($y2MinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$202$$.$y2Axis$, $coords$$22_event$$146$$.$yMin$, $coords$$22_event$$146$$.$yMax$, $limitExtent$$));
  return{$xMin$:$minPt_xMinMax$$.min, $xMax$:$minPt_xMinMax$$.max, $yMin$:$maxPt_plotArea$$2_yMinMax$$.min, $yMax$:$maxPt_plotArea$$2_yMinMax$$.max, $y2Min$:$y2MinMax$$.min, $y2Max$:$y2MinMax$$.max, $startGroup$:$startEndGroup$$1$$.$startGroup$, $endGroup$:$startEndGroup$$1$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($axis$$80$$, $center$$1_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$, $limitExtent$$1_minExtent$$) {
  if(null == $center$$1_min$$6_minCoord$$2$$ || null == $max$$6_maxCoord$$2$$) {
    return{min:null, max:null}
  }
  $center$$1_min$$6_minCoord$$2$$ = (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$80$$, $center$$1_min$$6_minCoord$$2$$);
  $max$$6_maxCoord$$2$$ = (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$80$$, $max$$6_maxCoord$$2$$);
  return $limitExtent$$1_minExtent$$ ? ($limitExtent$$1_minExtent$$ = $axis$$80$$.$getInfo$().$getMinimumExtent$(), $max$$6_maxCoord$$2$$ - $center$$1_min$$6_minCoord$$2$$ < $limitExtent$$1_minExtent$$ && ($center$$1_min$$6_minCoord$$2$$ = ($max$$6_maxCoord$$2$$ + $center$$1_min$$6_minCoord$$2$$) / 2, $max$$6_maxCoord$$2$$ = $center$$1_min$$6_minCoord$$2$$ + $limitExtent$$1_minExtent$$ / 2, $center$$1_min$$6_minCoord$$2$$ -= $limitExtent$$1_minExtent$$ / 2), D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$80$$, 
  $center$$1_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$)) : D.$DvtChartEventUtils$$.$_getActualMinMax$($axis$$80$$, $center$$1_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$)
};
D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($chart$$203$$, $deltas_xMinDelta$$, $xMaxDelta_zoomDirection$$, $xMinMax$$1_yMinDelta$$, $yMaxDelta_yMinMax$$1$$) {
  $deltas_xMinDelta$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$203$$, $deltas_xMinDelta$$, $xMaxDelta_zoomDirection$$, $xMinMax$$1_yMinDelta$$, $yMaxDelta_yMinMax$$1$$);
  $xMaxDelta_zoomDirection$$ = D.$DvtChartEventUtils$$.$getZoomDirection$($chart$$203$$);
  $xMinMax$$1_yMinDelta$$ = {};
  $yMaxDelta_yMinMax$$1$$ = {};
  var $y2MinMax$$1$$ = {}, $startEndGroup$$2$$ = {};
  $chart$$203$$.$xAxis$ && "y" != $xMaxDelta_zoomDirection$$ && ($xMinMax$$1_yMinDelta$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$203$$.$xAxis$, $deltas_xMinDelta$$.$xMin$, $deltas_xMinDelta$$.$xMax$), $startEndGroup$$2$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$203$$.$xAxis$, $xMinMax$$1_yMinDelta$$.min, $xMinMax$$1_yMinDelta$$.max));
  $chart$$203$$.$yAxis$ && "x" != $xMaxDelta_zoomDirection$$ && ($yMaxDelta_yMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$203$$.$yAxis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  $chart$$203$$.$y2Axis$ && ($y2MinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$203$$.$y2Axis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  return{$xMin$:$xMinMax$$1_yMinDelta$$.min, $xMax$:$xMinMax$$1_yMinDelta$$.max, $yMin$:$yMaxDelta_yMinMax$$1$$.min, $yMax$:$yMaxDelta_yMinMax$$1$$.max, $y2Min$:$y2MinMax$$1$$.min, $y2Max$:$y2MinMax$$1$$.max, $startGroup$:$startEndGroup$$2$$.$startGroup$, $endGroup$:$startEndGroup$$2$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($axis$$81$$, $minDelta$$, $maxDelta$$) {
  var $min$$7$$ = (0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($axis$$81$$), $max$$7$$ = (0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($axis$$81$$);
  if($maxDelta$$ == $minDelta$$ && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($axis$$81$$)) {
    return D.$DvtChartEventUtils$$.$_getActualMinMax$($axis$$81$$, $min$$7$$, $max$$7$$)
  }
  var $minDeltaVal$$ = (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$81$$, $minDelta$$) - (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$81$$, 0), $maxDeltaVal$$ = (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$81$$, $maxDelta$$) - (0,D.$JSCompiler_StaticMethods_getUnboundedLinearValueAt$$)($axis$$81$$, 0), $weight$$ = 1, $newExtent$$ = $max$$7$$ + $maxDeltaVal$$ - ($min$$7$$ + $minDeltaVal$$), $minExtent$$1$$ = $axis$$81$$.$getInfo$().$getMinimumExtent$();
  $minDelta$$ != $maxDelta$$ && $newExtent$$ < $minExtent$$1$$ && ($weight$$ = ($max$$7$$ - $min$$7$$ - $minExtent$$1$$) / ($minDeltaVal$$ - $maxDeltaVal$$));
  return D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$81$$, $min$$7$$ + $minDeltaVal$$ * $weight$$, $max$$7$$ + $maxDeltaVal$$ * $weight$$)
};
D.$DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($chart$$204$$, $xMin$$3$$, $xMax$$3$$, $yMin$$4$$, $yMax$$4$$) {
  var $axisCoord$$4$$ = {}, $isRTL$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$204$$.$getCtx$());
  D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$204$$) ? ($axisCoord$$4$$.$xMin$ = $yMin$$4$$, $axisCoord$$4$$.$xMax$ = $yMax$$4$$, $axisCoord$$4$$.$yMin$ = $isRTL$$16$$ ? $xMax$$3$$ : $xMin$$3$$, $axisCoord$$4$$.$yMax$ = $isRTL$$16$$ ? $xMin$$3$$ : $xMax$$3$$) : ($axisCoord$$4$$.$xMin$ = $isRTL$$16$$ ? $xMax$$3$$ : $xMin$$3$$, $axisCoord$$4$$.$xMax$ = $isRTL$$16$$ ? $xMin$$3$$ : $xMax$$3$$, $axisCoord$$4$$.$yMin$ = $yMax$$4$$, $axisCoord$$4$$.$yMax$ = $yMin$$4$$);
  return $axisCoord$$4$$
};
D.$DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($axis$$82$$, $min$$8$$, $max$$8$$) {
  var $globalMin$$1$$ = $axis$$82$$.$actualToLinear$($axis$$82$$.$Info$.$GlobalMin$), $globalMax$$1$$ = $axis$$82$$.$actualToLinear$($axis$$82$$.$Info$.$GlobalMax$);
  $max$$8$$ - $min$$8$$ >= $globalMax$$1$$ - $globalMin$$1$$ ? ($min$$8$$ = $globalMin$$1$$, $max$$8$$ = $globalMax$$1$$) : $min$$8$$ < $globalMin$$1$$ ? ($max$$8$$ += $globalMin$$1$$ - $min$$8$$, $min$$8$$ = $globalMin$$1$$) : $max$$8$$ > $globalMax$$1$$ && ($min$$8$$ -= $max$$8$$ - $globalMax$$1$$, $max$$8$$ = $globalMax$$1$$);
  return D.$DvtChartEventUtils$$.$_getActualMinMax$($axis$$82$$, $min$$8$$, $max$$8$$)
};
D.$DvtChartEventUtils$$.$_getActualMinMax$ = function $$DvtChartEventUtils$$$$_getActualMinMax$$($axis$$83$$, $min$$9$$, $max$$9$$) {
  return{min:$axis$$83$$.$linearToActual$($min$$9$$), max:$axis$$83$$.$linearToActual$($max$$9$$)}
};
D.$DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($axis$$84_endGroup$$2$$, $min$$10_startGroup$$2_startIdx$$, $endIdx_max$$10$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$84_endGroup$$2$$) && (null != $min$$10_startGroup$$2_startIdx$$ && null != $endIdx_max$$10$$) && ($min$$10_startGroup$$2_startIdx$$ = window.Math.ceil($min$$10_startGroup$$2_startIdx$$), $endIdx_max$$10$$ = window.Math.floor($endIdx_max$$10$$), $endIdx_max$$10$$ >= $min$$10_startGroup$$2_startIdx$$) ? ($min$$10_startGroup$$2_startIdx$$ = $axis$$84_endGroup$$2$$.$getInfo$().$getGroup$($min$$10_startGroup$$2_startIdx$$), $axis$$84_endGroup$$2$$ = 
  $axis$$84_endGroup$$2$$.$getInfo$().$getGroup$($endIdx_max$$10$$), {$startGroup$:$min$$10_startGroup$$2_startIdx$$, $endGroup$:$axis$$84_endGroup$$2$$}) : {$startGroup$:null, $endGroup$:null}
};
D.$DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($chart$$205$$, $selected$$11$$) {
  var $handler$$37$$ = $chart$$205$$.$getSelectionHandler$();
  if($handler$$37$$) {
    for(var $peers$$5$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$205$$), $selectedIds$$3$$ = [], $i$$217$$ = 0;$i$$217$$ < $selected$$11$$.length;$i$$217$$++) {
      for(var $j$$41$$ = 0;$j$$41$$ < $peers$$5$$.length;$j$$41$$++) {
        var $peer$$20$$ = $peers$$5$$[$j$$41$$];
        $peer$$20$$.$getSeries$() === $selected$$11$$[$i$$217$$].series && $peer$$20$$.$getGroup$() === $selected$$11$$[$i$$217$$].group && $selectedIds$$3$$.push($peer$$20$$.getId())
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$37$$, $selectedIds$$3$$, $peers$$5$$)
  }
};
D.$DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($chart$$206_peers$$6$$) {
  var $navigables$$5$$ = [];
  if(D.$DvtChartTypeUtils$$.$isPie$($chart$$206_peers$$6$$)) {
    for(var $slices$$5$$ = $chart$$206_peers$$6$$.$pieChart$.$_slices$, $i$$218$$ = 0;$i$$218$$ < $slices$$5$$.length;$i$$218$$++) {
      D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$206_peers$$6$$, $slices$$5$$[$i$$218$$].$getSeriesIndex$()) && $navigables$$5$$.push($slices$$5$$[$i$$218$$])
    }
  }else {
    $chart$$206_peers$$6$$ = (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$206_peers$$6$$);
    for($i$$218$$ = 0;$i$$218$$ < $chart$$206_peers$$6$$.length;$i$$218$$++) {
      $chart$$206_peers$$6$$[$i$$218$$].$isNavigable$() && $navigables$$5$$.push($chart$$206_peers$$6$$[$i$$218$$])
    }
  }
  return $navigables$$5$$
};
D.$DvtChartEventUtils$$.$isSeriesDrillable$ = function $$DvtChartEventUtils$$$$isSeriesDrillable$$($chart$$207$$, $seriesIndex$$77$$) {
  var $drilling$$1_series$$10$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$207$$, $seriesIndex$$77$$), $drilling$$1_series$$10$$ = null != $drilling$$1_series$$10$$ ? $drilling$$1_series$$10$$.drilling : "inherit";
  if("on" == $drilling$$1_series$$10$$) {
    return!0
  }
  if("off" == $drilling$$1_series$$10$$) {
    return!1
  }
  $drilling$$1_series$$10$$ = $chart$$207$$.$getOptions$().drilling;
  return"on" == $drilling$$1_series$$10$$ || "seriesOnly" == $drilling$$1_series$$10$$
};
D.$DvtChartEventUtils$$.$isDataItemDrillable$ = function $$DvtChartEventUtils$$$$isDataItemDrillable$$($chart$$208$$, $drilling$$2_item$$5_seriesIndex$$78$$, $groupIndex$$51$$) {
  $drilling$$2_item$$5_seriesIndex$$78$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$208$$, $drilling$$2_item$$5_seriesIndex$$78$$, $groupIndex$$51$$);
  $drilling$$2_item$$5_seriesIndex$$78$$ = null != $drilling$$2_item$$5_seriesIndex$$78$$ ? $drilling$$2_item$$5_seriesIndex$$78$$.drilling : "inherit";
  if("on" == $drilling$$2_item$$5_seriesIndex$$78$$) {
    return!0
  }
  if("off" == $drilling$$2_item$$5_seriesIndex$$78$$) {
    return!1
  }
  $drilling$$2_item$$5_seriesIndex$$78$$ = $chart$$208$$.$getOptions$().drilling;
  return"on" == $drilling$$2_item$$5_seriesIndex$$78$$
};
D.$DvtChartRefObjUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRefObjUtils$$, D.$DvtObj$$, "DvtChartRefObjUtils");
D.$DvtChartRefObjUtils$$.$getRefObjs$ = function $$DvtChartRefObjUtils$$$$getRefObjs$$($chart$$213_y2$$12$$) {
  var $x$$86$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$213_y2$$12$$, "x"), $y$$64$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$213_y2$$12$$, "y");
  $chart$$213_y2$$12$$ = D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$213_y2$$12$$, "y2");
  return $x$$86$$.concat($y$$64$$, $chart$$213_y2$$12$$)
};
D.$DvtChartRefObjUtils$$.$getAxisRefObjs$ = function $$DvtChartRefObjUtils$$$$getAxisRefObjs$$($chart$$214$$, $axisType$$5$$) {
  var $options$$79$$ = $chart$$214$$.$getOptions$();
  return $options$$79$$ && $options$$79$$[$axisType$$5$$ + "Axis"] && $options$$79$$[$axisType$$5$$ + "Axis"].referenceObjects ? $options$$79$$[$axisType$$5$$ + "Axis"].referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($refObj$$8$$) {
  return"area" == $refObj$$8$$.type ? "area" : "line"
};
D.$DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($refObj$$9$$) {
  return"front" == $refObj$$9$$.location ? "front" : "back"
};
D.$DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($refObj$$10$$) {
  return $refObj$$10$$.color ? $refObj$$10$$.color : "#333333"
};
D.$DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($refObj$$11$$) {
  return $refObj$$11$$.lineWidth ? $refObj$$11$$.lineWidth : 1
};
D.$DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($refObj$$12$$) {
  return $refObj$$12$$.lineType ? $refObj$$12$$.lineType : "straight"
};
D.$DvtChartRefObjUtils$$.$isObjectRendered$ = function $$DvtChartRefObjUtils$$$$isObjectRendered$$($chart$$215$$, $refObj$$13$$) {
  var $hiddenCategories$$2$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$215$$);
  if(0 < $hiddenCategories$$2$$.length) {
    var $categories$$4$$ = D.$DvtChartRefObjUtils$$.$getRefObjCategories$($refObj$$13$$);
    if($categories$$4$$ && D.$DvtArrayUtils$$.$hasAnyItem$($hiddenCategories$$2$$, $categories$$4$$)) {
      return!1
    }
  }
  return"hidden" != $refObj$$13$$.visibility
};
D.$DvtChartRefObjUtils$$.getId = function $$DvtChartRefObjUtils$$$getId$($refObj$$14$$) {
  return null != $refObj$$14$$.id ? $refObj$$14$$.id : $refObj$$14$$.text
};
D.$DvtChartRefObjUtils$$.$getRefObjCategories$ = function $$DvtChartRefObjUtils$$$$getRefObjCategories$$($refObj$$15$$) {
  return $refObj$$15$$.categories ? $refObj$$15$$.categories : [D.$DvtChartRefObjUtils$$.getId($refObj$$15$$)]
};
D.$DvtChartRefObjUtils$$.$getRefObj$ = function $$DvtChartRefObjUtils$$$$getRefObj$$($chart$$216$$, $id$$35$$) {
  for(var $refObjs$$3$$ = D.$DvtChartRefObjUtils$$.$getRefObjs$($chart$$216$$), $i$$219$$ = 0;$i$$219$$ < $refObjs$$3$$.length;$i$$219$$++) {
    if(D.$DvtChartRefObjUtils$$.getId($refObjs$$3$$[$i$$219$$]) == $id$$35$$) {
      return $refObjs$$3$$[$i$$219$$]
    }
  }
};
D.$DvtChartRefObjUtils$$.$getLowValue$ = function $$DvtChartRefObjUtils$$$$getLowValue$$($item$$6$$) {
  return null == $item$$6$$ ? null : null != $item$$6$$.min ? $item$$6$$.min : $item$$6$$.low
};
D.$DvtChartRefObjUtils$$.$getHighValue$ = function $$DvtChartRefObjUtils$$$$getHighValue$$($item$$7$$) {
  return null == $item$$7$$ ? null : null != $item$$7$$.max ? $item$$7$$.max : $item$$7$$.high
};
D.$DvtChartRefObjUtils$$.$getXValue$ = function $$DvtChartRefObjUtils$$$$getXValue$$($chart$$217$$, $items$$8$$, $index$$136$$) {
  return $items$$8$$[$index$$136$$] && !(0,window.isNaN)($items$$8$$[$index$$136$$].x) ? $items$$8$$[$index$$136$$].x : D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$217$$) && !D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$217$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$217$$, $index$$136$$) : $index$$136$$
};
D.$DvtChartSeriesEffectUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesEffectUtils$$, D.$DvtObj$$, "DvtChartSeriesEffectUtils");
D.$DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($chart$$218_colors$$, $pattern$$2_seriesIndex$$81$$, $groupIndex$$52_seriesEffect$$, $angle$$9_bHoriz$$11$$, $barWidth$$7$$) {
  var $color$$13_stops$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$218_colors$$, $pattern$$2_seriesIndex$$81$$, $groupIndex$$52_seriesEffect$$);
  $pattern$$2_seriesIndex$$81$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$218_colors$$, $pattern$$2_seriesIndex$$81$$, $groupIndex$$52_seriesEffect$$);
  $groupIndex$$52_seriesEffect$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$218_colors$$);
  return $pattern$$2_seriesIndex$$81$$ ? new D.$DvtPatternFill$$($pattern$$2_seriesIndex$$81$$, $color$$13_stops$$) : "gradient" == $groupIndex$$52_seriesEffect$$ && 3 < $barWidth$$7$$ ? ($angle$$9_bHoriz$$11$$ = $angle$$9_bHoriz$$11$$ ? 270 : 0, D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$218_colors$$) ? ($chart$$218_colors$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$13_stops$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$13_stops$$, -0.04, -0.05)], $color$$13_stops$$ = [0, 
  1]) : ($chart$$218_colors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$13_stops$$, 0.15), D.$DvtColorUtils$$.$getPastel$($color$$13_stops$$, 0.45), D.$DvtColorUtils$$.$getPastel$($color$$13_stops$$, 0.25), $color$$13_stops$$, D.$DvtColorUtils$$.$getPastel$($color$$13_stops$$, 0.15), D.$DvtColorUtils$$.$getDarker$($color$$13_stops$$, 0.9)], $color$$13_stops$$ = [0, 0.15, 0.3, 0.65, 0.85, 1]), new D.$DvtLinearGradientFill$$($angle$$9_bHoriz$$11$$, $chart$$218_colors$$, null, $color$$13_stops$$)) : 
  new D.$DvtSolidFill$$($color$$13_stops$$)
};
D.$DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($chart$$219$$, $seriesIndex$$82$$) {
  var $alpha$$6_colors$$1_isLineWithArea$$2$$ = "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$219$$, $seriesIndex$$82$$), $color$$14_seriesItem$$14_stops$$1$$;
  ($color$$14_seriesItem$$14_stops$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$219$$, $seriesIndex$$82$$)) && $color$$14_seriesItem$$14_stops$$1$$.areaColor ? $color$$14_seriesItem$$14_stops$$1$$ = $color$$14_seriesItem$$14_stops$$1$$.areaColor : ($color$$14_seriesItem$$14_stops$$1$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$219$$, $seriesIndex$$82$$), $alpha$$6_colors$$1_isLineWithArea$$2$$ && ($color$$14_seriesItem$$14_stops$$1$$ = D.$DvtColorUtils$$.$setAlpha$($color$$14_seriesItem$$14_stops$$1$$, 
  0.2)));
  var $angle$$10_pattern$$3$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$219$$, $seriesIndex$$82$$), $seriesEffect$$1$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$219$$);
  return $angle$$10_pattern$$3$$ ? new D.$DvtPatternFill$$($angle$$10_pattern$$3$$, $color$$14_seriesItem$$14_stops$$1$$) : "gradient" == $seriesEffect$$1$$ ? ($angle$$10_pattern$$3$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$219$$) ? 180 : 270, $alpha$$6_colors$$1_isLineWithArea$$2$$ ? ($alpha$$6_colors$$1_isLineWithArea$$2$$ = D.$DvtColorUtils$$.$getAlpha$($color$$14_seriesItem$$14_stops$$1$$), $alpha$$6_colors$$1_isLineWithArea$$2$$ = [D.$DvtColorUtils$$.$setAlpha$($color$$14_seriesItem$$14_stops$$1$$, 
  window.Math.min($alpha$$6_colors$$1_isLineWithArea$$2$$ + 0.2, 1)), D.$DvtColorUtils$$.$setAlpha$($color$$14_seriesItem$$14_stops$$1$$, window.Math.max($alpha$$6_colors$$1_isLineWithArea$$2$$ - 0.15, 0))], $color$$14_seriesItem$$14_stops$$1$$ = [0, 1]) : D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$219$$) ? ($alpha$$6_colors$$1_isLineWithArea$$2$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$14_seriesItem$$14_stops$$1$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$14_seriesItem$$14_stops$$1$$, 
  -0.04, -0.05)], $color$$14_seriesItem$$14_stops$$1$$ = [0, 1]) : ($alpha$$6_colors$$1_isLineWithArea$$2$$ = D.$DvtChartTypeUtils$$.$isSpark$($chart$$219$$) ? [D.$DvtColorUtils$$.$getDarker$($color$$14_seriesItem$$14_stops$$1$$, 0.5), $color$$14_seriesItem$$14_stops$$1$$, D.$DvtColorUtils$$.$getPastel$($color$$14_seriesItem$$14_stops$$1$$, 0.5)] : [D.$DvtColorUtils$$.$getPastel$($color$$14_seriesItem$$14_stops$$1$$, 0.5), $color$$14_seriesItem$$14_stops$$1$$, D.$DvtColorUtils$$.$getDarker$($color$$14_seriesItem$$14_stops$$1$$, 
  0.7)], $color$$14_seriesItem$$14_stops$$1$$ = [0, 0.5, 1]), new D.$DvtLinearGradientFill$$($angle$$10_pattern$$3$$, $alpha$$6_colors$$1_isLineWithArea$$2$$, null, $color$$14_seriesItem$$14_stops$$1$$)) : new D.$DvtSolidFill$$($color$$14_seriesItem$$14_stops$$1$$)
};
D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($chart$$220_colors$$2_linearColors_radialColors$$, $seriesIndex$$83$$, $groupIndex$$53$$) {
  var $color$$15$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$220_colors$$2_linearColors_radialColors$$, $seriesIndex$$83$$, $groupIndex$$53$$), $pattern$$4$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$220_colors$$2_linearColors_radialColors$$, $seriesIndex$$83$$, $groupIndex$$53$$);
  if($pattern$$4$$) {
    return new D.$DvtPatternFill$$($pattern$$4$$, $color$$15$$)
  }
  if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$220_colors$$2_linearColors_radialColors$$) && "gradient" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$220_colors$$2_linearColors_radialColors$$)) {
    if(D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$220_colors$$2_linearColors_radialColors$$)) {
      return $chart$$220_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$15$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$15$$, -0.04, -0.05)], new D.$DvtLinearGradientFill$$(270, $chart$$220_colors$$2_linearColors_radialColors$$, null, [0, 1])
    }
    if("human" == D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$220_colors$$2_linearColors_radialColors$$, $seriesIndex$$83$$, $groupIndex$$53$$)) {
      return $chart$$220_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$15$$, 0.2), D.$DvtColorUtils$$.$getPastel$($color$$15$$, 0.1), $color$$15$$, D.$DvtColorUtils$$.$getDarker$($color$$15$$, 0.8)], new D.$DvtLinearGradientFill$$(315, $chart$$220_colors$$2_linearColors_radialColors$$, null, [0, 0.3, 0.7, 1])
    }
    $chart$$220_colors$$2_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$15$$, 0.15), $color$$15$$, D.$DvtColorUtils$$.$getDarker$($color$$15$$, 0.9), D.$DvtColorUtils$$.$getDarker$($color$$15$$, 0.8)];
    return new D.$DvtRadialGradientFill$$($chart$$220_colors$$2_linearColors_radialColors$$, null, [0, 0.5, 0.75, 1])
  }
  return new D.$DvtSolidFill$$($color$$15$$)
};
D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($chart$$221_colors$$3$$, $pattern$$5_seriesIndex$$84$$, $color$$16_stops$$3$$, $dimensions_fill$$12$$, $bBackground$$) {
  $pattern$$5_seriesIndex$$84$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$221_colors$$3$$, $pattern$$5_seriesIndex$$84$$, 0);
  var $seriesEffect$$3$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$221_colors$$3$$);
  return $pattern$$5_seriesIndex$$84$$ && !$bBackground$$ ? ($dimensions_fill$$12$$ = new D.$DvtPatternFill$$($pattern$$5_seriesIndex$$84$$, $color$$16_stops$$3$$), "vertical" == $chart$$221_colors$$3$$.$getOptions$().orientation && ((0,D.$DvtAgent$isRightToLeft$$)($chart$$221_colors$$3$$.$getCtx$()) ? $dimensions_fill$$12$$.$setMatrix$(new D.$DvtMatrix$$(0, -1, 1, 0)) : $dimensions_fill$$12$$.$setMatrix$(new D.$DvtMatrix$$(0, 1, -1, 0))), $dimensions_fill$$12$$) : "gradient" == $seriesEffect$$3$$ ? 
  ("on" == $chart$$221_colors$$3$$.$getOptions$().styleDefaults.threeDEffect ? ($chart$$221_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$16_stops$$3$$, 0, -0.1), D.$DvtColorUtils$$.$adjustHSL$($color$$16_stops$$3$$, 0, 0.12), $color$$16_stops$$3$$], $color$$16_stops$$3$$ = [0, 0.65, 1]) : ($chart$$221_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$16_stops$$3$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$16_stops$$3$$, -0.04, -0.05)], $color$$16_stops$$3$$ = [0, 1]), new D.$DvtLinearGradientFill$$(90, 
  $chart$$221_colors$$3$$, null, $color$$16_stops$$3$$, [$dimensions_fill$$12$$.x, $dimensions_fill$$12$$.y, $dimensions_fill$$12$$.$w$, $dimensions_fill$$12$$.$h$])) : new D.$DvtSolidFill$$($color$$16_stops$$3$$)
};
D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($chart$$222$$) {
  return"skyros" != $chart$$222$$.$getSkin$()
};
D.$DvtChartStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartStyleUtils$$, D.$DvtObj$$, "DvtChartStyleUtils");
D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
D.$DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($chart$$223$$, $seriesIndex$$85$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$223$$)) {
    return"auto"
  }
  var $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$223$$, $seriesIndex$$85$$), $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$ = $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$ ? $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$.type : null;
  !D.$DvtChartTypeUtils$$.$isStock$($chart$$223$$) && "candlestick" == $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$ && ($series$$11_seriesItem$$15_seriesType$$7_typeIndex$$ = "auto");
  if(!$series$$11_seriesItem$$15_seriesType$$7_typeIndex$$ || "auto" == $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$) {
    if(D.$DvtChartTypeUtils$$.$isBar$($chart$$223$$)) {
      return"bar"
    }
    if(D.$DvtChartTypeUtils$$.$isLine$($chart$$223$$)) {
      return"line"
    }
    if(D.$DvtChartTypeUtils$$.$isArea$($chart$$223$$)) {
      return"area"
    }
    if(D.$DvtChartTypeUtils$$.$isLineWithArea$($chart$$223$$)) {
      return"lineWithArea"
    }
    if(D.$DvtChartTypeUtils$$.$isStock$($chart$$223$$)) {
      return"candlestick"
    }
    if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$223$$)) {
      return $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$223$$, $seriesIndex$$85$$), $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$223$$, $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$) % D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$series$$11_seriesItem$$15_seriesType$$7_typeIndex$$]
    }
  }else {
    return $series$$11_seriesItem$$15_seriesType$$7_typeIndex$$
  }
};
D.$DvtChartStyleUtils$$.$isRangeSeries$ = function $$DvtChartStyleUtils$$$$isRangeSeries$$($chart$$224$$, $seriesIndex$$86$$) {
  var $isRange$$3_map$$inline_2445$$;
  $isRange$$3_map$$inline_2445$$ = $chart$$224$$.$Cache$.isRange;
  $isRange$$3_map$$inline_2445$$ || ($isRange$$3_map$$inline_2445$$ = {}, $chart$$224$$.$Cache$.isRange = $isRange$$3_map$$inline_2445$$);
  $isRange$$3_map$$inline_2445$$ = $isRange$$3_map$$inline_2445$$[$seriesIndex$$86$$];
  if(null != $isRange$$3_map$$inline_2445$$) {
    return $isRange$$3_map$$inline_2445$$
  }
  $isRange$$3_map$$inline_2445$$ = !1;
  var $g$$7_map$$inline_2451_seriesType$$8$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$224$$, $seriesIndex$$86$$);
  if("bar" == $g$$7_map$$inline_2451_seriesType$$8$$ || "area" == $g$$7_map$$inline_2451_seriesType$$8$$) {
    for($g$$7_map$$inline_2451_seriesType$$8$$ = 0;$g$$7_map$$inline_2451_seriesType$$8$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$224$$);$g$$7_map$$inline_2451_seriesType$$8$$++) {
      if(null != D.$DvtChartDataUtils$$.$getLowValue$($chart$$224$$, $seriesIndex$$86$$, $g$$7_map$$inline_2451_seriesType$$8$$) || null != D.$DvtChartDataUtils$$.$getHighValue$($chart$$224$$, $seriesIndex$$86$$, $g$$7_map$$inline_2451_seriesType$$8$$)) {
        $isRange$$3_map$$inline_2445$$ = !0;
        break
      }
    }
  }
  $g$$7_map$$inline_2451_seriesType$$8$$ = $chart$$224$$.$Cache$.isRange;
  $g$$7_map$$inline_2451_seriesType$$8$$ || ($g$$7_map$$inline_2451_seriesType$$8$$ = {}, $chart$$224$$.$Cache$.isRange = $g$$7_map$$inline_2451_seriesType$$8$$);
  return $g$$7_map$$inline_2451_seriesType$$8$$[$seriesIndex$$86$$] = $isRange$$3_map$$inline_2445$$
};
D.$DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($chart$$225$$) {
  return $chart$$225$$.$getOptions$().styleDefaults.seriesEffect
};
D.$DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($chart$$226_colorIndex$$, $series$$12_seriesIndex$$87$$, $groupIndex$$54_options$$81_seriesItem$$16$$) {
  var $dataItem$$26_defaultColors$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$226_colorIndex$$, $series$$12_seriesIndex$$87$$, $groupIndex$$54_options$$81_seriesItem$$16$$);
  if($dataItem$$26_defaultColors$$ && $dataItem$$26_defaultColors$$.color) {
    return $dataItem$$26_defaultColors$$.color
  }
  if("candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$226_colorIndex$$, $series$$12_seriesIndex$$87$$)) {
    return D.$DvtChartStyleUtils$$.$getStockItemColor$($chart$$226_colorIndex$$, $series$$12_seriesIndex$$87$$, $groupIndex$$54_options$$81_seriesItem$$16$$)
  }
  if(($groupIndex$$54_options$$81_seriesItem$$16$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$226_colorIndex$$, $series$$12_seriesIndex$$87$$)) && $groupIndex$$54_options$$81_seriesItem$$16$$.color) {
    return $groupIndex$$54_options$$81_seriesItem$$16$$.color
  }
  $groupIndex$$54_options$$81_seriesItem$$16$$ = $chart$$226_colorIndex$$.$getOptions$();
  $dataItem$$26_defaultColors$$ = $groupIndex$$54_options$$81_seriesItem$$16$$.styleDefaults.colors;
  $series$$12_seriesIndex$$87$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$226_colorIndex$$, $series$$12_seriesIndex$$87$$);
  $chart$$226_colorIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$226_colorIndex$$, $series$$12_seriesIndex$$87$$) % $dataItem$$26_defaultColors$$.length;
  return $groupIndex$$54_options$$81_seriesItem$$16$$.styleDefaults.colors[$chart$$226_colorIndex$$]
};
D.$DvtChartStyleUtils$$.$getStockItemColor$ = function $$DvtChartStyleUtils$$$$getStockItemColor$$($chart$$227$$, $seriesIndex$$88$$, $groupIndex$$55$$) {
  var $options$$82$$ = $chart$$227$$.$getOptions$();
  return D.$DvtChartDataUtils$$.$isStockValueRising$($chart$$227$$, $seriesIndex$$88$$, $groupIndex$$55$$) ? $options$$82$$.styleDefaults.stockRisingColor : $options$$82$$.styleDefaults.stockFallingColor
};
D.$DvtChartStyleUtils$$.$getStockVolumeColor$ = function $$DvtChartStyleUtils$$$$getStockVolumeColor$$($chart$$228$$, $groupIndex$$56$$) {
  var $dataItem$$27_options$$83$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$228$$, 0, $groupIndex$$56$$);
  if($dataItem$$27_options$$83$$ && $dataItem$$27_options$$83$$.color) {
    return $dataItem$$27_options$$83$$.color
  }
  $dataItem$$27_options$$83$$ = $chart$$228$$.$getOptions$();
  return $dataItem$$27_options$$83$$.styleDefaults.stockVolumeColor ? $dataItem$$27_options$$83$$.styleDefaults.stockVolumeColor : D.$DvtChartStyleUtils$$.$getStockItemColor$($chart$$228$$, 0, $groupIndex$$56$$)
};
D.$DvtChartStyleUtils$$.$getSplitterPosition$ = function $$DvtChartStyleUtils$$$$getSplitterPosition$$($chart$$229$$) {
  var $splitterPosition$$1$$ = $chart$$229$$.$getOptions$().splitterPosition;
  return null != $splitterPosition$$1$$ ? $splitterPosition$$1$$ : D.$DvtChartTypeUtils$$.$isStock$($chart$$229$$) ? 0.8 : 0.5
};
D.$DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($bRtl$$1_chart$$230_patternIndex$$, $bRisingValue_series$$13_seriesIndex$$90$$, $groupIndex$$57_options$$85$$) {
  var $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$ = D.$DvtChartDataUtils$$.$getDataItem$($bRtl$$1_chart$$230_patternIndex$$, $bRisingValue_series$$13_seriesIndex$$90$$, $groupIndex$$57_options$$85$$);
  if($dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$ && $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$.pattern && "auto" != $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$.pattern) {
    return $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$.pattern
  }
  $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($bRtl$$1_chart$$230_patternIndex$$, $bRisingValue_series$$13_seriesIndex$$90$$);
  if(("line" == $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$ || "area" == $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$) && null != $groupIndex$$57_options$$85$$) {
    return null
  }
  if(($dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($bRtl$$1_chart$$230_patternIndex$$, $bRisingValue_series$$13_seriesIndex$$90$$)) && $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$.pattern && "auto" != $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$.pattern) {
    return $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$.pattern
  }
  if("pattern" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($bRtl$$1_chart$$230_patternIndex$$)) {
    if(D.$DvtChartTypeUtils$$.$isStock$ && "candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($bRtl$$1_chart$$230_patternIndex$$, $bRisingValue_series$$13_seriesIndex$$90$$)) {
      return $bRisingValue_series$$13_seriesIndex$$90$$ = D.$DvtChartDataUtils$$.$isStockValueRising$($bRtl$$1_chart$$230_patternIndex$$, $bRisingValue_series$$13_seriesIndex$$90$$, $groupIndex$$57_options$$85$$), $bRtl$$1_chart$$230_patternIndex$$ = (0,D.$DvtAgent$isRightToLeft$$)($bRtl$$1_chart$$230_patternIndex$$.$getCtx$()), $bRisingValue_series$$13_seriesIndex$$90$$ ? $bRtl$$1_chart$$230_patternIndex$$ ? "smallDiagonalLeft" : "smallDiagonalRight" : $bRtl$$1_chart$$230_patternIndex$$ ? "smallDiagonalRight" : 
      "smallDiagonalLeft"
    }
    $groupIndex$$57_options$$85$$ = $bRtl$$1_chart$$230_patternIndex$$.$getOptions$();
    $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$ = $groupIndex$$57_options$$85$$.styleDefaults.patterns;
    $bRisingValue_series$$13_seriesIndex$$90$$ = D.$DvtChartDataUtils$$.$getSeries$($bRtl$$1_chart$$230_patternIndex$$, $bRisingValue_series$$13_seriesIndex$$90$$);
    $bRtl$$1_chart$$230_patternIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($bRtl$$1_chart$$230_patternIndex$$, $bRisingValue_series$$13_seriesIndex$$90$$) % $dataItem$$28_defaultPatterns_seriesItem$$17_seriesType$$9$$.length;
    return $groupIndex$$57_options$$85$$.styleDefaults.patterns[$bRtl$$1_chart$$230_patternIndex$$]
  }
  return null
};
D.$DvtChartStyleUtils$$.$getMarkerBorderColor$ = function $$DvtChartStyleUtils$$$$getMarkerBorderColor$$($chart$$231_markerColor$$1$$, $seriesIndex$$91$$, $groupIndex$$58$$) {
  var $borderColor$$15$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$231_markerColor$$1$$, $seriesIndex$$91$$, $groupIndex$$58$$);
  return $borderColor$$15$$ ? $borderColor$$15$$ : 0 < D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$231_markerColor$$1$$) && "lineWithArea" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$231_markerColor$$1$$, $seriesIndex$$91$$) ? D.$DvtChartStyleUtils$$.$getBackgroundColor$($chart$$231_markerColor$$1$$, !0) : D.$DvtChartTypeUtils$$.$isBubble$($chart$$231_markerColor$$1$$) && ("skyros" != $chart$$231_markerColor$$1$$.$getSkin$() && "gradient" != D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$231_markerColor$$1$$)) && 
  ($chart$$231_markerColor$$1$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$231_markerColor$$1$$, $seriesIndex$$91$$, $groupIndex$$58$$)) ? D.$DvtColorUtils$$.$adjustHSL$($chart$$231_markerColor$$1$$, 0.15, -0.25) : null
};
D.$DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($chart$$232_styleDefaults$$1$$, $seriesIndex$$92_seriesItem$$18$$, $dataItem$$29_groupIndex$$59$$) {
  if(($dataItem$$29_groupIndex$$59$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$232_styleDefaults$$1$$, $seriesIndex$$92_seriesItem$$18$$, $dataItem$$29_groupIndex$$59$$)) && $dataItem$$29_groupIndex$$59$$.borderColor) {
    return $dataItem$$29_groupIndex$$59$$.borderColor
  }
  if(($seriesIndex$$92_seriesItem$$18$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$232_styleDefaults$$1$$, $seriesIndex$$92_seriesItem$$18$$)) && $seriesIndex$$92_seriesItem$$18$$.borderColor) {
    return $seriesIndex$$92_seriesItem$$18$$.borderColor
  }
  $chart$$232_styleDefaults$$1$$ = $chart$$232_styleDefaults$$1$$.$getOptions$().styleDefaults;
  return"auto" != $chart$$232_styleDefaults$$1$$.borderColor ? $chart$$232_styleDefaults$$1$$.borderColor : null
};
D.$DvtChartStyleUtils$$.$getBorderWidth$ = function $$DvtChartStyleUtils$$$$getBorderWidth$$($chart$$233$$, $seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$, $dataItem$$30_groupIndex$$60$$) {
  if(($dataItem$$30_groupIndex$$60$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$233$$, $seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$, $dataItem$$30_groupIndex$$60$$)) && $dataItem$$30_groupIndex$$60$$.borderWidth) {
    return $dataItem$$30_groupIndex$$60$$.borderWidth
  }
  if(($seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$233$$, $seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$)) && $seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$.borderWidth) {
    return $seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$.borderWidth
  }
  $seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$ = $chart$$233$$.$getOptions$().styleDefaults;
  return"auto" != $seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$.borderWidth ? $seriesIndex$$93_seriesItem$$19_styleDefaults$$2$$.borderWidth : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$233$$) || D.$DvtChartTypeUtils$$.$isLineArea$($chart$$233$$) ? 1.25 : 1
};
D.$DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($chart$$234$$, $seriesIndex$$94$$, $groupIndex$$61$$) {
  if(!D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$234$$, $seriesIndex$$94$$, $groupIndex$$61$$)) {
    return D.$DvtChartStyleUtils$$.$getColor$($chart$$234$$, $seriesIndex$$94$$, $groupIndex$$61$$)
  }
  var $dataItem$$31_defaultMarkerColor_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$234$$, $seriesIndex$$94$$, $groupIndex$$61$$);
  return $dataItem$$31_defaultMarkerColor_seriesItem$$20$$ && $dataItem$$31_defaultMarkerColor_seriesItem$$20$$.color ? $dataItem$$31_defaultMarkerColor_seriesItem$$20$$.color : ($dataItem$$31_defaultMarkerColor_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$234$$, $seriesIndex$$94$$)) && $dataItem$$31_defaultMarkerColor_seriesItem$$20$$.markerColor ? $dataItem$$31_defaultMarkerColor_seriesItem$$20$$.markerColor : ($dataItem$$31_defaultMarkerColor_seriesItem$$20$$ = $chart$$234$$.$getOptions$().styleDefaults.markerColor) ? 
  $dataItem$$31_defaultMarkerColor_seriesItem$$20$$ : D.$DvtChartStyleUtils$$.$getColor$($chart$$234$$, $seriesIndex$$94$$, $groupIndex$$61$$)
};
D.$DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($chart$$235_styleIndex$$3$$, $series$$14_seriesIndex$$95$$, $dataItem$$32_groupIndex$$62$$) {
  var $options$$88_shapeRamp$$ = $chart$$235_styleIndex$$3$$.$getOptions$(), $shape$$32$$ = $options$$88_shapeRamp$$.styleDefaults.markerShape, $seriesItem$$21$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$235_styleIndex$$3$$, $series$$14_seriesIndex$$95$$);
  $seriesItem$$21$$ && $seriesItem$$21$$.markerShape && ($shape$$32$$ = $seriesItem$$21$$.markerShape);
  ($dataItem$$32_groupIndex$$62$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$235_styleIndex$$3$$, $series$$14_seriesIndex$$95$$, $dataItem$$32_groupIndex$$62$$)) && $dataItem$$32_groupIndex$$62$$.markerShape && ($shape$$32$$ = $dataItem$$32_groupIndex$$62$$.markerShape);
  "auto" == $shape$$32$$ && ("bubble" == $chart$$235_styleIndex$$3$$.$getType$() || D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$235_styleIndex$$3$$, $series$$14_seriesIndex$$95$$) ? $shape$$32$$ = "circle" : ($series$$14_seriesIndex$$95$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$235_styleIndex$$3$$, $series$$14_seriesIndex$$95$$), $chart$$235_styleIndex$$3$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$235_styleIndex$$3$$, $series$$14_seriesIndex$$95$$), $options$$88_shapeRamp$$ = 
  $options$$88_shapeRamp$$.styleDefaults.shapes, $shape$$32$$ = $options$$88_shapeRamp$$[$chart$$235_styleIndex$$3$$ % $options$$88_shapeRamp$$.length]));
  return $shape$$32$$
};
D.$DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($chart$$236$$, $seriesIndex$$96_seriesItem$$22$$, $dataItem$$33_groupIndex$$63_markerSize$$7$$) {
  $dataItem$$33_groupIndex$$63_markerSize$$7$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$236$$, $seriesIndex$$96_seriesItem$$22$$, $dataItem$$33_groupIndex$$63_markerSize$$7$$);
  $seriesIndex$$96_seriesItem$$22$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$236$$, $seriesIndex$$96_seriesItem$$22$$);
  var $options$$89$$ = $chart$$236$$.$getOptions$();
  $dataItem$$33_groupIndex$$63_markerSize$$7$$ = $dataItem$$33_groupIndex$$63_markerSize$$7$$ && (0,window.Number)($dataItem$$33_groupIndex$$63_markerSize$$7$$.markerSize) ? (0,window.Number)($dataItem$$33_groupIndex$$63_markerSize$$7$$.markerSize) : $seriesIndex$$96_seriesItem$$22$$ && (0,window.Number)($seriesIndex$$96_seriesItem$$22$$.markerSize) ? (0,window.Number)($seriesIndex$$96_seriesItem$$22$$.markerSize) : (0,window.Number)($options$$89$$.styleDefaults.markerSize);
  D.$DvtChartTypeUtils$$.$isOverview$($chart$$236$$) && ($dataItem$$33_groupIndex$$63_markerSize$$7$$ = window.Math.ceil(0.6 * $dataItem$$33_groupIndex$$63_markerSize$$7$$));
  return $dataItem$$33_groupIndex$$63_markerSize$$7$$
};
D.$DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($chart$$237$$, $seriesIndex$$97$$, $dataItem$$34_displayed_groupIndex$$64$$) {
  $dataItem$$34_displayed_groupIndex$$64$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$237$$, $seriesIndex$$97$$, $dataItem$$34_displayed_groupIndex$$64$$);
  var $seriesItem$$23$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$237$$, $seriesIndex$$97$$);
  $dataItem$$34_displayed_groupIndex$$64$$ = $dataItem$$34_displayed_groupIndex$$64$$ && null != $dataItem$$34_displayed_groupIndex$$64$$.markerDisplayed ? $dataItem$$34_displayed_groupIndex$$64$$.markerDisplayed : $seriesItem$$23$$ && null != $seriesItem$$23$$.markerDisplayed ? $seriesItem$$23$$.markerDisplayed : $chart$$237$$.$getOptions$().styleDefaults.markerDisplayed;
  return"on" == $dataItem$$34_displayed_groupIndex$$64$$ ? !0 : "off" == $dataItem$$34_displayed_groupIndex$$64$$ ? !1 : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$237$$) || "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$237$$, $seriesIndex$$97$$)
};
D.$DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($chart$$238$$, $seriesIndex$$98$$) {
  var $lineWidth$$4_seriesItem$$24$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$238$$, $seriesIndex$$98$$), $options$$90$$ = $chart$$238$$.$getOptions$(), $lineWidth$$4_seriesItem$$24$$ = $lineWidth$$4_seriesItem$$24$$ && $lineWidth$$4_seriesItem$$24$$.lineWidth ? $lineWidth$$4_seriesItem$$24$$.lineWidth : $options$$90$$.styleDefaults.lineWidth ? $options$$90$$.styleDefaults.lineWidth : "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$238$$, $seriesIndex$$98$$) ? 2 : 3;
  D.$DvtChartTypeUtils$$.$isOverview$($chart$$238$$) && ($lineWidth$$4_seriesItem$$24$$ = window.Math.ceil(0.6 * $lineWidth$$4_seriesItem$$24$$));
  return $lineWidth$$4_seriesItem$$24$$
};
D.$DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($chart$$239$$, $seriesIndex$$99$$) {
  var $seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$239$$, $seriesIndex$$99$$);
  return $seriesItem$$25$$ && $seriesItem$$25$$.lineStyle ? $seriesItem$$25$$.lineStyle : $chart$$239$$.$getOptions$().styleDefaults.lineStyle
};
D.$DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($chart$$240$$, $seriesIndex$$100$$) {
  var $lineType$$5_seriesItem$$26$$;
  $lineType$$5_seriesItem$$26$$ = ($lineType$$5_seriesItem$$26$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$240$$, $seriesIndex$$100$$)) && $lineType$$5_seriesItem$$26$$.lineType ? $lineType$$5_seriesItem$$26$$.lineType : $chart$$240$$.$getOptions$().styleDefaults.lineType;
  "auto" == $lineType$$5_seriesItem$$26$$ && ($lineType$$5_seriesItem$$26$$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$240$$) ? "none" : "straight");
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$240$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$240$$)) {
    "centeredSegmented" == $lineType$$5_seriesItem$$26$$ && ($lineType$$5_seriesItem$$26$$ = "segmented"), "centeredStepped" == $lineType$$5_seriesItem$$26$$ && ($lineType$$5_seriesItem$$26$$ = "stepped")
  }
  return $lineType$$5_seriesItem$$26$$
};
D.$DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($chart$$241$$) {
  return $chart$$241$$.$getOptions$().__sparkBarSpacing
};
D.$DvtChartStyleUtils$$.$getBarGapRatio$ = function $$DvtChartStyleUtils$$$$getBarGapRatio$$($chart$$242$$) {
  var $barGapRatio$$1_numStacks_numYStacks$$ = $chart$$242$$.$getOptions$().styleDefaults.barGapRatio;
  "string" == typeof $barGapRatio$$1_numStacks_numYStacks$$ && "%" == $barGapRatio$$1_numStacks_numYStacks$$.slice(-1) && ($barGapRatio$$1_numStacks_numYStacks$$ = (0,window.Number)($barGapRatio$$1_numStacks_numYStacks$$.slice(0, -1)) / 100);
  if(null != $barGapRatio$$1_numStacks_numYStacks$$ && !(0,window.isNaN)($barGapRatio$$1_numStacks_numYStacks$$)) {
    return $barGapRatio$$1_numStacks_numYStacks$$
  }
  var $categories$$5_numY2Stacks$$ = D.$DvtChartDataUtils$$.$getStackCategories$($chart$$242$$, "bar"), $barGapRatio$$1_numStacks_numYStacks$$ = $categories$$5_numY2Stacks$$.y.length, $categories$$5_numY2Stacks$$ = $categories$$5_numY2Stacks$$.y2.length, $barGapRatio$$1_numStacks_numYStacks$$ = D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$242$$) ? window.Math.max($barGapRatio$$1_numStacks_numYStacks$$, $categories$$5_numY2Stacks$$) : $barGapRatio$$1_numStacks_numYStacks$$ + $categories$$5_numY2Stacks$$;
  return $barGapRatio$$1_numStacks_numYStacks$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$242$$) ? 1 == $barGapRatio$$1_numStacks_numYStacks$$ ? 0 : 0.25 : 1 == $barGapRatio$$1_numStacks_numYStacks$$ ? 0.37 + 0.26 / D.$DvtChartDataUtils$$.$getViewportGroupCount$($chart$$242$$) : 0.25
};
D.$DvtChartStyleUtils$$.$getMaxBarWidth$ = function $$DvtChartStyleUtils$$$$getMaxBarWidth$$($chart$$243$$) {
  var $maxBarWidth$$ = $chart$$243$$.$getOptions$().styleDefaults.maxBarWidth;
  return null != $maxBarWidth$$ && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$243$$) ? $maxBarWidth$$ : window.Infinity
};
D.$DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($chart$$244$$, $ratio$$7_seriesIndex$$101$$, $groupIndex$$65$$) {
  $ratio$$7_seriesIndex$$101$$ = D.$DvtChartDataUtils$$.$getZValue$($chart$$244$$, $ratio$$7_seriesIndex$$101$$, $groupIndex$$65$$, 1) / $chart$$244$$.$getOptions$()._averageGroupZ;
  return window.Math.min($ratio$$7_seriesIndex$$101$$ * D.$DvtChartStyleUtils$$.$getGroupWidth$($chart$$244$$), D.$DvtChartStyleUtils$$.$getMaxBarWidth$($chart$$244$$))
};
D.$DvtChartStyleUtils$$.$getBarStackWidth$ = function $$DvtChartStyleUtils$$$$getBarStackWidth$$($chart$$245$$, $category$$9_ratio$$8$$, $groupIndex$$66$$, $isY2$$2$$) {
  $category$$9_ratio$$8$$ = D.$DvtChartDataUtils$$.$getBarCategoryZ$($chart$$245$$, $category$$9_ratio$$8$$, $groupIndex$$66$$, $isY2$$2$$) / $chart$$245$$.$getOptions$()._averageGroupZ;
  return window.Math.min($category$$9_ratio$$8$$ * D.$DvtChartStyleUtils$$.$getGroupWidth$($chart$$245$$), D.$DvtChartStyleUtils$$.$getMaxBarWidth$($chart$$245$$))
};
D.$DvtChartStyleUtils$$.$getBarCategoryOffsetMap$ = function $$DvtChartStyleUtils$$$$getBarCategoryOffsetMap$$($chart$$246$$, $groupIndex$$67$$, $bStacked$$2$$) {
  var $categories$$6_isY2Series$$1$$ = D.$DvtChartDataUtils$$.$getStackCategories$($chart$$246$$, "bar"), $isMixedFreq$$ = D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$246$$), $isSplitDualY$$2$$ = D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$246$$), $yOffsetMap$$ = {}, $y2OffsetMap$$ = {}, $yTotalWidth$$ = 0, $y2TotalWidth$$ = 0, $stackWidth$$1$$, $i$$220$$;
  if($bStacked$$2$$) {
    for($i$$220$$ = 0;$i$$220$$ < $categories$$6_isY2Series$$1$$.y.length;$i$$220$$++) {
      $stackWidth$$1$$ = D.$DvtChartStyleUtils$$.$getBarStackWidth$($chart$$246$$, $categories$$6_isY2Series$$1$$.y[$i$$220$$], $groupIndex$$67$$, !1), $isMixedFreq$$ ? $yOffsetMap$$[$categories$$6_isY2Series$$1$$.y[$i$$220$$]] = -0.5 * $stackWidth$$1$$ : ($yOffsetMap$$[$categories$$6_isY2Series$$1$$.y[$i$$220$$]] = $yTotalWidth$$, $yTotalWidth$$ += $stackWidth$$1$$)
    }
    $isSplitDualY$$2$$ || ($y2TotalWidth$$ = $yTotalWidth$$);
    for($i$$220$$ = 0;$i$$220$$ < $categories$$6_isY2Series$$1$$.y2.length;$i$$220$$++) {
      $stackWidth$$1$$ = D.$DvtChartStyleUtils$$.$getBarStackWidth$($chart$$246$$, $categories$$6_isY2Series$$1$$.y2[$i$$220$$], $groupIndex$$67$$, !0), $isMixedFreq$$ ? $y2OffsetMap$$[$categories$$6_isY2Series$$1$$.y2[$i$$220$$]] = -0.5 * $stackWidth$$1$$ : ($y2OffsetMap$$[$categories$$6_isY2Series$$1$$.y2[$i$$220$$]] = $y2TotalWidth$$, $y2TotalWidth$$ += $stackWidth$$1$$)
    }
    $isSplitDualY$$2$$ || ($yTotalWidth$$ = $y2TotalWidth$$)
  }else {
    for($i$$220$$ = 0;$i$$220$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$246$$);$i$$220$$++) {
      if(!("bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$246$$, $i$$220$$) && "candlestick" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$246$$, $i$$220$$)) && D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$246$$, $i$$220$$)) {
        var $categories$$6_isY2Series$$1$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$246$$, $i$$220$$), $category$$10$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$246$$, $i$$220$$);
        $stackWidth$$1$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$246$$, $i$$220$$, $groupIndex$$67$$);
        $categories$$6_isY2Series$$1$$ ? $isMixedFreq$$ ? $y2OffsetMap$$[$category$$10$$] = -0.5 * $stackWidth$$1$$ : ($y2OffsetMap$$[$category$$10$$] = $y2TotalWidth$$, $y2TotalWidth$$ += $stackWidth$$1$$) : $isMixedFreq$$ ? $yOffsetMap$$[$category$$10$$] = -0.5 * $stackWidth$$1$$ : ($yOffsetMap$$[$category$$10$$] = $yTotalWidth$$, $yTotalWidth$$ += $stackWidth$$1$$)
      }
    }
  }
  for($category$$10$$ in $yOffsetMap$$) {
    $yOffsetMap$$[$category$$10$$] -= !$isSplitDualY$$2$$ && !$bStacked$$2$$ ? ($yTotalWidth$$ + $y2TotalWidth$$) / 2 : $yTotalWidth$$ / 2
  }
  for($category$$10$$ in $y2OffsetMap$$) {
    $y2OffsetMap$$[$category$$10$$] -= !$isSplitDualY$$2$$ && !$bStacked$$2$$ ? ($yTotalWidth$$ + $y2TotalWidth$$) / 2 - $yTotalWidth$$ : $y2TotalWidth$$ / 2
  }
  return{y:$yOffsetMap$$, y2:$y2OffsetMap$$}
};
D.$DvtChartStyleUtils$$.$getDataItemGaps$ = function $$DvtChartStyleUtils$$$$getDataItemGaps$$($chart$$247_dataItemGaps$$1$$) {
  var $options$$93_percentIndex$$ = $chart$$247_dataItemGaps$$1$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$247_dataItemGaps$$1$$) && "on" == $options$$93_percentIndex$$.styleDefaults.funnelSliceGaps) {
    return 1
  }
  if(null != $options$$93_percentIndex$$.styleDefaults.sliceGaps) {
    return $options$$93_percentIndex$$.styleDefaults.sliceGaps
  }
  $chart$$247_dataItemGaps$$1$$ = $options$$93_percentIndex$$.styleDefaults.dataItemGaps;
  "auto" == $chart$$247_dataItemGaps$$1$$ && ($chart$$247_dataItemGaps$$1$$ = "on" == $options$$93_percentIndex$$.styleDefaults.threeDEffect ? "0%" : "50%");
  $options$$93_percentIndex$$ = $chart$$247_dataItemGaps$$1$$ && $chart$$247_dataItemGaps$$1$$.indexOf ? $chart$$247_dataItemGaps$$1$$.indexOf("%") : -1;
  return 0 <= $options$$93_percentIndex$$ ? ($chart$$247_dataItemGaps$$1$$ = $chart$$247_dataItemGaps$$1$$.substring(0, $options$$93_percentIndex$$), $chart$$247_dataItemGaps$$1$$ / 100) : 0
};
D.$DvtChartStyleUtils$$.$isSelectable$ = function $$DvtChartStyleUtils$$$$isSelectable$$($chart$$248$$, $seriesIndex$$102$$, $groupIndex$$68$$) {
  var $seriesItem$$27$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$248$$, $seriesIndex$$102$$);
  return $seriesItem$$27$$ && "off" == $seriesItem$$27$$._selectable ? !1 : $chart$$248$$.$isSelectionSupported$() && 0 <= $seriesIndex$$102$$ && 0 <= $groupIndex$$68$$
};
D.$DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($chart$$249$$, $seriesIndex$$103$$) {
  var $hiddenCategories$$3$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$249$$);
  return 0 < $hiddenCategories$$3$$.length && D.$DvtArrayUtils$$.$hasAnyItem$($hiddenCategories$$3$$, D.$DvtChartDataUtils$$.$getSeriesCategories$($chart$$249$$, $seriesIndex$$103$$)) ? !1 : !0
};
D.$DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($chart$$250$$, $seriesIndex$$104$$, $groupIndex$$69$$) {
  if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$250$$, $seriesIndex$$104$$)) {
    if(D.$DvtChartTypeUtils$$.$isPie$($chart$$250$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$250$$)) {
      $groupIndex$$69$$ = 0
    }
    var $hiddenCategories$$4$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$250$$);
    if(0 < $hiddenCategories$$4$$.length && D.$DvtArrayUtils$$.$hasAnyItem$($hiddenCategories$$4$$, D.$DvtChartDataUtils$$.$getDataItemCategories$($chart$$250$$, $seriesIndex$$104$$, $groupIndex$$69$$))) {
      return!1
    }
  }else {
    return!1
  }
  return!0
};
D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($chart$$251$$) {
  return $chart$$251$$.$getOptions$().animationOnDisplay
};
D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($chart$$252$$) {
  return $chart$$252$$.$getOptions$().animationOnDataChange
};
D.$DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($chart$$253$$) {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)($chart$$253$$.$getOptions$().styleDefaults.animationDuration) / 1E3
};
D.$DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($chart$$254$$) {
  return $chart$$254$$.$getOptions$().styleDefaults.animationIndicators
};
D.$DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($chart$$255$$) {
  return $chart$$255$$.$getOptions$().styleDefaults.animationUpColor
};
D.$DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($chart$$256$$) {
  return $chart$$256$$.$getOptions$().styleDefaults.animationDownColor
};
D.$DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($chart$$257_options$$94$$) {
  $chart$$257_options$$94$$ = $chart$$257_options$$94$$.$getOptions$();
  $chart$$257_options$$94$$.hiddenCategories || ($chart$$257_options$$94$$.hiddenCategories = []);
  return $chart$$257_options$$94$$.hiddenCategories
};
D.$DvtChartStyleUtils$$.$getHighlightedCategories$ = function $$DvtChartStyleUtils$$$$getHighlightedCategories$$($chart$$258_options$$95$$) {
  $chart$$258_options$$95$$ = $chart$$258_options$$95$$.$getOptions$();
  $chart$$258_options$$95$$.highlightedCategories || ($chart$$258_options$$95$$.highlightedCategories = []);
  return $chart$$258_options$$95$$.highlightedCategories
};
D.$DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($chart$$259$$) {
  return $chart$$259$$.$getOptions$().styleDefaults.selectedInnerColor
};
D.$DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($chart$$260$$) {
  return $chart$$260$$.$getOptions$().styleDefaults.selectedOuterColor
};
D.$DvtChartStyleUtils$$.$isSelectionHighlighted$ = function $$DvtChartStyleUtils$$$$isSelectionHighlighted$$($chart$$261_effect$$5$$) {
  $chart$$261_effect$$5$$ = $chart$$261_effect$$5$$.$getOptions$().styleDefaults.selectionEffect;
  return"highlight" == $chart$$261_effect$$5$$ || "highlightAndExplode" == $chart$$261_effect$$5$$
};
D.$DvtChartStyleUtils$$.$isSelectionExploded$ = function $$DvtChartStyleUtils$$$$isSelectionExploded$$($chart$$262_effect$$6$$) {
  $chart$$262_effect$$6$$ = $chart$$262_effect$$6$$.$getOptions$().styleDefaults.selectionEffect;
  return"explode" == $chart$$262_effect$$6$$ || "highlightAndExplode" == $chart$$262_effect$$6$$
};
D.$DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($chart$$263$$, $seriesIndex$$105$$, $groupIndex$$70$$, $dataColor$$12$$, $position$$26$$, $type$$97$$) {
  var $labelStyleArray$$1$$ = [], $contrastingColor$$;
  $dataColor$$12$$ && ("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$263$$, $seriesIndex$$105$$) || D.$DvtChartTypeUtils$$.$isBubble$($chart$$263$$)) && ("center" == $position$$26$$ || "inBottom" == $position$$26$$ || "inTop" == $position$$26$$ || "inRight" == $position$$26$$ || "inLeft" == $position$$26$$) ? ($contrastingColor$$ = null != D.$DvtChartStyleUtils$$.$getPattern$($chart$$263$$, $seriesIndex$$105$$, $groupIndex$$70$$) ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($dataColor$$12$$), 
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $contrastingColor$$ + ";"))) : $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: #333333;"));
  $labelStyleArray$$1$$.push(D.$DvtChartStyleUtils$$.$_parseLowHighArray$($chart$$263$$.$getOptions$().styleDefaults.dataLabelStyle, $type$$97$$));
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$(D.$DvtChartStyleUtils$$.$_parseLowHighArray$(D.$DvtChartDataUtils$$.$getDataItem$($chart$$263$$, $seriesIndex$$105$$, $groupIndex$$70$$).labelStyle, $type$$97$$)));
  $contrastingColor$$ && !0 === D.$DvtAgent$_highContrast$$ && $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $contrastingColor$$ + ";"));
  return(0,D.$DvtCSSStyle$mergeStyles$$)($labelStyleArray$$1$$)
};
D.$DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($bNegative_chart$$264$$, $seriesIndex$$106$$, $groupIndex$$71$$, $type$$98$$, $isStackLabel$$3_style$$51_textDim$$5$$) {
  var $data$$28$$ = D.$DvtChartDataUtils$$.$getDataItem$($bNegative_chart$$264$$, $seriesIndex$$106$$, $groupIndex$$71$$), $position$$27$$;
  if($isStackLabel$$3_style$$51_textDim$$5$$) {
    $position$$27$$ = "outsideBarEdge"
  }else {
    if(($position$$27$$ = $data$$28$$.labelPosition) || ($position$$27$$ = $bNegative_chart$$264$$.$getOptions$().styleDefaults.dataLabelPosition), $position$$27$$ = D.$DvtChartStyleUtils$$.$_parseLowHighArray$($position$$27$$, $type$$98$$), "none" == $position$$27$$) {
      return"none"
    }
  }
  var $bRTL$$ = (0,D.$DvtAgent$isRightToLeft$$)($bNegative_chart$$264$$.$getCtx$()), $bHorizontal$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($bNegative_chart$$264$$), $bPolar$$3_barInfo_isStacked_text$$48$$ = D.$DvtChartTypeUtils$$.$isPolar$($bNegative_chart$$264$$);
  if(D.$DvtChartTypeUtils$$.$isFunnel$($bNegative_chart$$264$$)) {
    return"center"
  }
  if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($bNegative_chart$$264$$, $seriesIndex$$106$$)) {
    if("center" == $position$$27$$ || $bPolar$$3_barInfo_isStacked_text$$48$$) {
      return"center"
    }
    $bPolar$$3_barInfo_isStacked_text$$48$$ = D.$DvtChartTypeUtils$$.$isStacked$($bNegative_chart$$264$$);
    if("insideBarEdge" != $position$$27$$) {
      if($bPolar$$3_barInfo_isStacked_text$$48$$ && !$isStackLabel$$3_style$$51_textDim$$5$$) {
        return"center"
      }
      "outsideBarEdge" != $position$$27$$ && ($position$$27$$ = "insideBarEdge")
    }
    "insideBarEdge" == $position$$27$$ && !$bPolar$$3_barInfo_isStacked_text$$48$$ && ($isStackLabel$$3_style$$51_textDim$$5$$ = $bNegative_chart$$264$$.$getOptions$().styleDefaults.dataLabelStyle, $bHorizontal$$ ? ($bPolar$$3_barInfo_isStacked_text$$48$$ = D.$DvtChartDataUtils$$.$getDataLabel$($bNegative_chart$$264$$, $seriesIndex$$106$$, $groupIndex$$71$$, $type$$98$$), $isStackLabel$$3_style$$51_textDim$$5$$ = D.$DvtTextUtils$$.$getTextStringWidth$($bNegative_chart$$264$$.$getCtx$(), $bPolar$$3_barInfo_isStacked_text$$48$$, 
    $isStackLabel$$3_style$$51_textDim$$5$$)) : $isStackLabel$$3_style$$51_textDim$$5$$ = D.$DvtTextUtils$$.$getTextStringHeight$($bNegative_chart$$264$$.$getCtx$(), $isStackLabel$$3_style$$51_textDim$$5$$), $bPolar$$3_barInfo_isStacked_text$$48$$ = D.$DvtChartDataUtils$$.$getBarInfo$($bNegative_chart$$264$$, $seriesIndex$$106$$, $groupIndex$$71$$), window.Math.abs($bPolar$$3_barInfo_isStacked_text$$48$$.$baseCoord$ - $bPolar$$3_barInfo_isStacked_text$$48$$.$yCoord$) <= $isStackLabel$$3_style$$51_textDim$$5$$ && 
    ($position$$27$$ = "outsideBarEdge"));
    $bNegative_chart$$264$$ = "low" == $type$$98$$ ? $data$$28$$.low <= $data$$28$$.high : "high" == $type$$98$$ ? $data$$28$$.high < $data$$28$$.low : 0 > D.$DvtChartDataUtils$$.getValue($bNegative_chart$$264$$, $seriesIndex$$106$$, $groupIndex$$71$$);
    return"outsideBarEdge" == $position$$27$$ ? $bHorizontal$$ ? !$bNegative_chart$$264$$ && !$bRTL$$ || $bNegative_chart$$264$$ && $bRTL$$ ? "right" : "left" : $bNegative_chart$$264$$ ? "bottom" : "top" : $bHorizontal$$ ? !$bNegative_chart$$264$$ && !$bRTL$$ || $bNegative_chart$$264$$ && $bRTL$$ ? "inRight" : "inLeft" : $bNegative_chart$$264$$ ? "inBottom" : "inTop"
  }
  if("center" == $position$$27$$) {
    return"center"
  }
  if("belowMarker" == $position$$27$$) {
    return"bottom"
  }
  if("aboveMarker" == $position$$27$$) {
    return"top"
  }
  if("afterMarker" != $position$$27$$ && "beforeMarker" != $position$$27$$) {
    if(D.$DvtChartTypeUtils$$.$isBubble$($bNegative_chart$$264$$)) {
      return"center"
    }
    if("low" == $type$$98$$ && !$bPolar$$3_barInfo_isStacked_text$$48$$) {
      if($bHorizontal$$) {
        $position$$27$$ = "beforeMarker"
      }else {
        return"bottom"
      }
    }else {
      if("high" == $type$$98$$ && !$bPolar$$3_barInfo_isStacked_text$$48$$) {
        if($bHorizontal$$) {
          $position$$27$$ = "afterMarker"
        }else {
          return"top"
        }
      }else {
        $position$$27$$ = "afterMarker"
      }
    }
  }
  return!$bRTL$$ && "afterMarker" == $position$$27$$ || $bRTL$$ && "beforeMarker" == $position$$27$$ ? "right" : "left"
};
D.$DvtChartStyleUtils$$.$_parseLowHighArray$ = function $$DvtChartStyleUtils$$$$_parseLowHighArray$$($value$$104$$, $type$$99$$) {
  return $value$$104$$ instanceof window.Array ? "high" == $type$$99$$ ? $value$$104$$[1] : $value$$104$$[0] : $value$$104$$
};
D.$DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($chart$$265$$) {
  var $options$$96$$ = $chart$$265$$.$getOptions$();
  return D.$DvtChartTypeUtils$$.$isOverviewSupported$($chart$$265$$) && "off" != $options$$96$$.overview.rendered
};
D.$DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($chart$$266$$) {
  var $height$$45$$ = $chart$$266$$.$getOptions$().overview.height;
  null == $height$$45$$ && ($height$$45$$ = D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$266$$) ? 0.25 : 0.2);
  return D.$DvtChartStyleUtils$$.$getSizeInPixels$($height$$45$$, $chart$$266$$.getHeight())
};
D.$DvtChartStyleUtils$$.$getSizeInPixels$ = function $$DvtChartStyleUtils$$$$getSizeInPixels$$($size$$19$$, $totalSize$$) {
  if("string" == typeof $size$$19$$) {
    if("%" == $size$$19$$.slice(-1)) {
      return $totalSize$$ * (0,window.Number)($size$$19$$.slice(0, -1)) / 100
    }
    if("px" == $size$$19$$.slice(-2)) {
      return(0,window.Number)($size$$19$$.slice(0, -2))
    }
    $size$$19$$ = (0,window.Number)($size$$19$$)
  }
  return(0,window.isNaN)($size$$19$$) ? 0 : 1 >= $size$$19$$ ? $totalSize$$ * $size$$19$$ : $size$$19$$
};
D.$DvtChartStyleUtils$$.$getBackgroundColor$ = function $$DvtChartStyleUtils$$$$getBackgroundColor$$($chart$$267$$, $useDefault$$) {
  var $options$$98$$ = $chart$$267$$.$getOptions$();
  return $options$$98$$.plotArea.backgroundColor ? $options$$98$$.plotArea.backgroundColor : $useDefault$$ ? "#FFFFFF" : null
};
D.$DvtChartStyleUtils$$.$getHoverBehaviorDelay$ = function $$DvtChartStyleUtils$$$$getHoverBehaviorDelay$$($chart$$268$$) {
  var $delay$$5$$ = $chart$$268$$.$getOptions$().styleDefaults.hoverBehaviorDelay;
  return $delay$$5$$ ? ($delay$$5$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($delay$$5$$), D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$268$$) || D.$DvtChartTypeUtils$$.$isLine$($chart$$268$$) ? 0.75 * $delay$$5$$ : 1.25 * $delay$$5$$) : 0
};
D.$DvtChartStyleUtils$$.$optimizeMarkerStroke$ = function $$DvtChartStyleUtils$$$$optimizeMarkerStroke$$($chart$$269$$) {
  return D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$269$$)
};
D.$DvtChartStyleUtils$$.$getGroupWidth$ = function $$DvtChartStyleUtils$$$$getGroupWidth$$($chart$$270$$) {
  var $width$$43$$ = $chart$$270$$.$Cache$.groupWidth;
  null == $width$$43$$ && ($width$$43$$ = $chart$$270$$.$xAxis$.$getInfo$().$getGroupWidth$(), $chart$$270$$.$Cache$.groupWidth = $width$$43$$);
  return $width$$43$$
};
D.$DvtChartStyleUtils$$.$isStackLabelRendered$ = function $$DvtChartStyleUtils$$$$isStackLabelRendered$$($chart$$271$$) {
  var $options$$99$$ = $chart$$271$$.$getOptions$();
  return D.$DvtChartTypeUtils$$.$isStacked$($chart$$271$$) && "on" == $options$$99$$.stackLabel ? !0 : !1
};
D.$DvtChartTextUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTextUtils$$, D.$DvtObj$$, "DvtChartTextUtils");
D.$DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($eventManager$$7$$, $container$$67$$, $text$$49_textString$$6$$, $cssStyle$$25$$, $x$$87$$, $y$$65$$, $width$$44$$, $height$$46$$) {
  $text$$49_textString$$6$$ = new D.$DvtOutputText$$($container$$67$$.$getCtx$(), $text$$49_textString$$6$$, $x$$87$$, $y$$65$$);
  $text$$49_textString$$6$$.$setCSSStyle$($cssStyle$$25$$);
  return D.$DvtTextUtils$$.$fitText$($text$$49_textString$$6$$, $width$$44$$, $height$$46$$, $container$$67$$) ? ($eventManager$$7$$.$associate$($text$$49_textString$$6$$, new D.$DvtSimpleObjPeer$$($text$$49_textString$$6$$.$getUntruncatedTextString$())), $text$$49_textString$$6$$) : null
};
D.$DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($chart$$272_options$$100$$) {
  $chart$$272_options$$100$$ = $chart$$272_options$$100$$.$getOptions$();
  return $chart$$272_options$$100$$.title.text || $chart$$272_options$$100$$.subtitle.text || $chart$$272_options$$100$$.footnote.text
};
D.$DvtChartTooltipUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTooltipUtils$$, D.$DvtObj$$, "DvtChartTooltipUtils");
D.$DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($chart$$273$$, $seriesIndex$$107$$, $groupIndex$$72$$) {
  return D.$DvtChartTypeUtils$$.$isStock$($chart$$273$$) ? D.$DvtChartStyleUtils$$.$getColor$($chart$$273$$, 0, $groupIndex$$72$$) : D.$DvtChartStyleUtils$$.$getColor$($chart$$273$$, $seriesIndex$$107$$, $groupIndex$$72$$)
};
D.$DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($chart$$274$$, $seriesIndex$$108$$, $groupIndex$$73$$, $isTabular_tooltipManager$$1$$) {
  if(D.$DvtChartTypeUtils$$.$isSpark$($chart$$274$$) || D.$DvtChartTypeUtils$$.$isOverview$($chart$$274$$) || 0 > $seriesIndex$$108$$ || 0 > $groupIndex$$73$$) {
    return null
  }
  var $dataContext$$2_dataItem$$35$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$274$$, $seriesIndex$$108$$, $groupIndex$$73$$), $datatip$$5_tooltipFunc$$ = $chart$$274$$.$getOptions$().tooltip;
  if($isTabular_tooltipManager$$1$$ && $datatip$$5_tooltipFunc$$) {
    return $isTabular_tooltipManager$$1$$ = $chart$$274$$.$getCtx$().$getTooltipManager$(D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$274$$) ? "_dvtDataCursor" : null), $dataContext$$2_dataItem$$35$$ = D.$DvtChartDataUtils$$.$getDataContext$($chart$$274$$, $seriesIndex$$108$$, $groupIndex$$73$$), $dataContext$$2_dataItem$$35$$.label = D.$DvtChartTypeUtils$$.$isPie$($chart$$274$$) ? $chart$$274$$.$pieChart$.$_slices$[$seriesIndex$$108$$].$_sliceLabelString$ : D.$DvtChartDataUtils$$.$getDataLabel$($chart$$274$$, 
    $seriesIndex$$108$$, $groupIndex$$73$$), (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)($isTabular_tooltipManager$$1$$, $datatip$$5_tooltipFunc$$, $dataContext$$2_dataItem$$35$$)
  }
  if($dataContext$$2_dataItem$$35$$ && null != $dataContext$$2_dataItem$$35$$.shortDesc) {
    return $dataContext$$2_dataItem$$35$$.shortDesc
  }
  $datatip$$5_tooltipFunc$$ = "";
  D.$DvtChartTypeUtils$$.$isStock$($chart$$274$$) ? $datatip$$5_tooltipFunc$$ += D.$DvtChartTooltipUtils$$.$getStockDatatip$($chart$$274$$, $groupIndex$$73$$, $isTabular_tooltipManager$$1$$) : ($datatip$$5_tooltipFunc$$ = D.$DvtChartTooltipUtils$$.$_addSeriesDatatip$($datatip$$5_tooltipFunc$$, $chart$$274$$, $seriesIndex$$108$$, $isTabular_tooltipManager$$1$$), $datatip$$5_tooltipFunc$$ = D.$DvtChartTooltipUtils$$.$_addGroupDatatip$($datatip$$5_tooltipFunc$$, $chart$$274$$, $seriesIndex$$108$$, $groupIndex$$73$$, 
  $isTabular_tooltipManager$$1$$), $datatip$$5_tooltipFunc$$ = D.$DvtChartTooltipUtils$$.$_addValueDatatip$($datatip$$5_tooltipFunc$$, $chart$$274$$, $seriesIndex$$108$$, $groupIndex$$73$$, $isTabular_tooltipManager$$1$$));
  return D.$DvtChartTooltipUtils$$.$_processDatatip$($datatip$$5_tooltipFunc$$, $chart$$274$$, $isTabular_tooltipManager$$1$$)
};
D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($chart$$275$$, $dataContext$$3_otherValue$$1$$, $isTabular$$1$$) {
  var $otherStr$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtChartBundle", "LABEL_OTHER", null), $datatip$$6_tooltipFunc$$1$$ = $chart$$275$$.$getOptions$().tooltip;
  if($isTabular$$1$$ && $datatip$$6_tooltipFunc$$1$$) {
    return $dataContext$$3_otherValue$$1$$ = {id:$otherStr$$, series:$otherStr$$, group:D.$DvtChartDataUtils$$.$getGroup$($chart$$275$$, 0), value:$dataContext$$3_otherValue$$1$$}, (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)($chart$$275$$.$getCtx$().$getTooltipManager$(), $datatip$$6_tooltipFunc$$1$$, $dataContext$$3_otherValue$$1$$)
  }
  $datatip$$6_tooltipFunc$$1$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$("", $chart$$275$$, "series", "SERIES", $otherStr$$, $isTabular$$1$$);
  $datatip$$6_tooltipFunc$$1$$ = D.$DvtChartTooltipUtils$$.$_addGroupDatatip$($datatip$$6_tooltipFunc$$1$$, $chart$$275$$, 0, 0, $isTabular$$1$$);
  $datatip$$6_tooltipFunc$$1$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$6_tooltipFunc$$1$$, $chart$$275$$, "value", "VALUE", $dataContext$$3_otherValue$$1$$, $isTabular$$1$$);
  return D.$DvtChartTooltipUtils$$.$_processDatatip$($datatip$$6_tooltipFunc$$1$$, $chart$$275$$, $isTabular$$1$$)
};
D.$DvtChartTooltipUtils$$.$_processDatatip$ = function $$DvtChartTooltipUtils$$$$_processDatatip$$($datatip$$7$$, $chart$$276$$, $isTabular$$2$$) {
  return"" == $datatip$$7$$ ? null : $isTabular$$2$$ ? (0,D.$DvtHtmlTooltipManager$createStartTag$$)("table", $chart$$276$$.$getOptions$().styleDefaults._tooltipStyle) + $datatip$$7$$ + "\x3c/table\x3e" : $datatip$$7$$
};
D.$DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($chart$$277$$, $refObj$$16$$) {
  var $tooltipFunc$$2$$ = $chart$$277$$.$getOptions$().tooltip;
  if($tooltipFunc$$2$$ && null != $refObj$$16$$.id) {
    var $tooltipManager$$2$$ = $chart$$277$$.$getCtx$().$getTooltipManager$(D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$277$$) ? "_dvtDataCursor" : null), $dataContext$$4$$ = {id:D.$DvtChartRefObjUtils$$.getId($refObj$$16$$), label:$refObj$$16$$.text, value:$refObj$$16$$.value, low:D.$DvtChartRefObjUtils$$.$getLowValue$($refObj$$16$$), high:D.$DvtChartRefObjUtils$$.$getHighValue$($refObj$$16$$), color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$16$$)};
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)($tooltipManager$$2$$, $tooltipFunc$$2$$, $dataContext$$4$$)
  }
  return $refObj$$16$$.shortDesc
};
D.$DvtChartTooltipUtils$$.$getStockDatatip$ = function $$DvtChartTooltipUtils$$$$getStockDatatip$$($chart$$278$$, $datatip$$8_groupIndex$$74$$, $isTabular$$3$$) {
  var $dataItem$$36$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$278$$, 0, $datatip$$8_groupIndex$$74$$);
  $datatip$$8_groupIndex$$74$$ = D.$DvtChartTooltipUtils$$.$_addGroupDatatip$("", $chart$$278$$, 0, $datatip$$8_groupIndex$$74$$, $isTabular$$3$$);
  $dataItem$$36$$ && ($datatip$$8_groupIndex$$74$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$74$$, $chart$$278$$, "open", "OPEN", $dataItem$$36$$.open, $isTabular$$3$$), $datatip$$8_groupIndex$$74$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$74$$, $chart$$278$$, "close", "CLOSE", $dataItem$$36$$.close, $isTabular$$3$$), $datatip$$8_groupIndex$$74$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$74$$, $chart$$278$$, "high", 
  "HIGH", $dataItem$$36$$.high, $isTabular$$3$$), $datatip$$8_groupIndex$$74$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$74$$, $chart$$278$$, "low", "LOW", $dataItem$$36$$.low, $isTabular$$3$$), $datatip$$8_groupIndex$$74$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$74$$, $chart$$278$$, "volume", "VOLUME", $dataItem$$36$$.volume, $isTabular$$3$$));
  return $datatip$$8_groupIndex$$74$$
};
D.$DvtChartTooltipUtils$$.$_addSeriesDatatip$ = function $$DvtChartTooltipUtils$$$$_addSeriesDatatip$$($datatip$$9$$, $chart$$279$$, $seriesIndex$$110_seriesLabel$$1$$, $isTabular$$4$$) {
  $seriesIndex$$110_seriesLabel$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$279$$, $seriesIndex$$110_seriesLabel$$1$$);
  return D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$9$$, $chart$$279$$, "series", "SERIES", $seriesIndex$$110_seriesLabel$$1$$, $isTabular$$4$$)
};
D.$DvtChartTooltipUtils$$.$_addGroupDatatip$ = function $$DvtChartTooltipUtils$$$$_addGroupDatatip$$($datatip$$10$$, $chart$$280$$, $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$, $groupIndex$$76_levelIndex$$1_numLevels$$3$$, $isTabular$$5$$) {
  var $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$;
  D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$280$$) ? ($JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$ = D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$280$$, "group"), $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$280$$, $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$, $groupIndex$$76_levelIndex$$1_numLevels$$3$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$ = 
  D.$DvtChartTooltipUtils$$.$formatDateValue$($JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$, new window.Date($defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$)), null == $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$ && ($JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$ = $chart$$280$$.$xAxis$.$getInfo$(), $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$ = 
  (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)($JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$, new window.Date($defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$), null, !0), $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$ = null != $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$[1] ? "YMD" == (0,D.$DvtTimeAxisInfo$_getDMYOrder$$)($JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$.$_locale$) || 
  24192E5 > $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$.$_timeRange$ && 864E5 > $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$.$_step$ ? $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$[1] + " " + $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$[0] : $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$[0] + " " + $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$[1] : 
  $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$[0])) : $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$280$$, $groupIndex$$76_levelIndex$$1_numLevels$$3$$);
  $groupIndex$$76_levelIndex$$1_numLevels$$3$$ = D.$DvtChartDataUtils$$.$getNumLevels$($chart$$280$$);
  $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$ = "GROUP";
  if(1 == $groupIndex$$76_levelIndex$$1_numLevels$$3$$ || !D.$DvtArrayUtils$$.isArray($JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$)) {
    $datatip$$10$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$10$$, $chart$$280$$, "group", $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$, $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$, $isTabular$$5$$)
  }else {
    for($groupIndex$$76_levelIndex$$1_numLevels$$3$$ -= 1;0 <= $groupIndex$$76_levelIndex$$1_numLevels$$3$$;$groupIndex$$76_levelIndex$$1_numLevels$$3$$--) {
      $datatip$$10$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$10$$, $chart$$280$$, "group", $defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$, $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$[$groupIndex$$76_levelIndex$$1_numLevels$$3$$], $isTabular$$5$$, $groupIndex$$76_levelIndex$$1_numLevels$$3$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_2457_groupLabel_valueFormat$$1$$[$groupIndex$$76_levelIndex$$1_numLevels$$3$$] && 
      ($defaultLabel$$1_seriesIndex$$111_twoLabels$$inline_2459_value$$105$$ = null)
    }
  }
  return $datatip$$10$$
};
D.$DvtChartTooltipUtils$$.$_addValueDatatip$ = function $$DvtChartTooltipUtils$$$$_addValueDatatip$$($datatip$$11$$, $chart$$281$$, $seriesIndex$$112_type$$100$$, $groupIndex$$77_highVal$$1$$, $isTabular$$6$$) {
  var $target$$61_val$$21$$ = D.$DvtChartDataUtils$$.getValue($chart$$281$$, $seriesIndex$$112_type$$100$$, $groupIndex$$77_highVal$$1$$), $xVal$$4$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$281$$, $seriesIndex$$112_type$$100$$, $groupIndex$$77_highVal$$1$$), $zVal$$ = D.$DvtChartDataUtils$$.$getZValue$($chart$$281$$, $seriesIndex$$112_type$$100$$, $groupIndex$$77_highVal$$1$$), $lowVal$$1$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$281$$, $seriesIndex$$112_type$$100$$, $groupIndex$$77_highVal$$1$$);
  $groupIndex$$77_highVal$$1$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$281$$, $seriesIndex$$112_type$$100$$, $groupIndex$$77_highVal$$1$$);
  D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$281$$) ? ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "x", "X", $xVal$$4$$, $isTabular$$6$$), $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "y", "Y", $target$$61_val$$21$$, $isTabular$$6$$), D.$DvtChartTypeUtils$$.$isBubble$($chart$$281$$) && ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "z", "Z", $zVal$$, $isTabular$$6$$))) : 
  D.$DvtChartTypeUtils$$.$isPie$($chart$$281$$) ? $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "value", "VALUE", $target$$61_val$$21$$, $isTabular$$6$$) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$281$$) ? ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "value", "VALUE", $target$$61_val$$21$$, $isTabular$$6$$), $target$$61_val$$21$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$281$$, $seriesIndex$$112_type$$100$$), 
  null != $target$$61_val$$21$$ && ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "targetValue", "TARGET_VALUE", $target$$61_val$$21$$, $isTabular$$6$$))) : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$281$$) && ($seriesIndex$$112_type$$100$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$281$$, $seriesIndex$$112_type$$100$$) ? "y2" : "y", null != $lowVal$$1$$ || null != $groupIndex$$77_highVal$$1$$ ? ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, 
  $chart$$281$$, "high", "HIGH", $groupIndex$$77_highVal$$1$$, $isTabular$$6$$), $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "low", "LOW", $lowVal$$1$$, $isTabular$$6$$), null != $zVal$$ && ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "z", "Z", $zVal$$, $isTabular$$6$$))) : null != $zVal$$ ? ($datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, $seriesIndex$$112_type$$100$$, 
  "Y", $target$$61_val$$21$$, $isTabular$$6$$), $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, "z", "Z", $zVal$$, $isTabular$$6$$)) : $datatip$$11$$ = D.$DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$281$$, $seriesIndex$$112_type$$100$$, "VALUE", $target$$61_val$$21$$, $isTabular$$6$$));
  return $datatip$$11$$
};
D.$DvtChartTooltipUtils$$.$_addDatatipRow$ = function $$DvtChartTooltipUtils$$$$_addDatatipRow$$($datatip$$12$$, $chart$$282_isRTL$$17$$, $type$$101$$, $defaultLabel$$2$$, $value$$106$$, $isTabular$$7$$, $index$$137$$) {
  if(null == $value$$106$$ || "" === $value$$106$$) {
    return $datatip$$12$$
  }
  var $options$$101$$ = $chart$$282_isRTL$$17$$.$getOptions$().styleDefaults, $valueFormat$$2$$ = D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$282_isRTL$$17$$, $type$$101$$), $tooltipDisplay$$ = $valueFormat$$2$$.tooltipDisplay;
  if(!$tooltipDisplay$$ || "auto" == $tooltipDisplay$$) {
    if("series" == $type$$101$$ && "none" == $options$$101$$.seriesTooltipType || "group" == $type$$101$$ && ("none" == $options$$101$$.groupTooltipType || D.$DvtChartTypeUtils$$.$isPie$($chart$$282_isRTL$$17$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$282_isRTL$$17$$)) || "series" != $type$$101$$ && ("group" != $type$$101$$ && "label" != $type$$101$$) && "none" == $options$$101$$.valueTooltipType) {
      $tooltipDisplay$$ = "off"
    }
  }
  if("off" == $tooltipDisplay$$) {
    return $datatip$$12$$
  }
  var $tooltipLabel$$;
  "string" === typeof $valueFormat$$2$$.tooltipLabel ? $tooltipLabel$$ = $valueFormat$$2$$.tooltipLabel : D.$DvtArrayUtils$$.isArray($valueFormat$$2$$.tooltipLabel) && ($tooltipLabel$$ = $valueFormat$$2$$.tooltipLabel[$index$$137$$ ? $index$$137$$ : 0]);
  null == $tooltipLabel$$ && ($tooltipLabel$$ = null == $defaultLabel$$2$$ ? "" : "GROUP" == $defaultLabel$$2$$ && D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$282_isRTL$$17$$) ? (0,D.$DvtBundle$getTranslation$$)($chart$$282_isRTL$$17$$.$getOptions$(), "labelDate", "DvtChartBundle", "LABEL_GROUP") : (0,D.$DvtBundle$getTranslatedString$$)("DvtChartBundle", "LABEL_" + $defaultLabel$$2$$, ""));
  "series" != $type$$101$$ && "group" != $type$$101$$ && ($value$$106$$ = D.$DvtChartTooltipUtils$$.$formatValue$($chart$$282_isRTL$$17$$.$getCtx$(), $valueFormat$$2$$, $value$$106$$));
  if($isTabular$$7$$) {
    return $chart$$282_isRTL$$17$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$282_isRTL$$17$$.$getCtx$()), $options$$101$$.tooltipLabelStyle.$setStyle$("text-align", $chart$$282_isRTL$$17$$ ? "left" : "right"), $options$$101$$.tooltipValueStyle.$setStyle$("text-align", $chart$$282_isRTL$$17$$ ? "right" : "left"), $datatip$$12$$ + "\x3ctr\x3e" + (0,D.$DvtHtmlTooltipManager$createStartTag$$)("td", $options$$101$$.tooltipLabelStyle) + $tooltipLabel$$ + "\x3c/td\x3e" + (0,D.$DvtHtmlTooltipManager$createStartTag$$)("td", 
    $options$$101$$.tooltipValueStyle) + $value$$106$$ + "\x3c/td\x3e\x3c/tr\x3e"
  }
  0 < $datatip$$12$$.length && ($datatip$$12$$ += "\x3cbr\x3e");
  return $datatip$$12$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$tooltipLabel$$, $value$$106$$])
};
D.$DvtChartTooltipUtils$$.$getValueFormat$ = function $$DvtChartTooltipUtils$$$$getValueFormat$$($chart$$283$$, $type$$102$$) {
  var $valueFormats$$ = $chart$$283$$.$getOptions$().valueFormats;
  if(!$valueFormats$$) {
    return{}
  }
  for(var $i$$221$$ = 0;$i$$221$$ < $valueFormats$$.length;$i$$221$$++) {
    if($valueFormats$$[$i$$221$$].type == $type$$102$$) {
      return $valueFormats$$[$i$$221$$]
    }
  }
  return"group" == $type$$102$$ && D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$283$$) ? D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$283$$, "x") : ("y" == $type$$102$$ || "y2" == $type$$102$$ || "min" == $type$$102$$ || "max" == $type$$102$$) && D.$DvtChartTypeUtils$$.$isBLAC$($chart$$283$$) ? D.$DvtChartTooltipUtils$$.$getValueFormat$($chart$$283$$, "value") : {}
};
D.$DvtChartTooltipUtils$$.$formatValue$ = function $$DvtChartTooltipUtils$$$$formatValue$$($context$$61_formatter$$, $valueFormat$$3$$, $value$$107$$, $min$$12$$, $max$$12$$, $majorIncrement$$1$$) {
  var $scaling$$ = "auto", $autoPrecision$$4$$ = "on", $converter$$3$$;
  $valueFormat$$3$$.scaling && ($scaling$$ = $valueFormat$$3$$.scaling);
  $valueFormat$$3$$.autoPrecision && ($autoPrecision$$4$$ = $valueFormat$$3$$.autoPrecision);
  $valueFormat$$3$$.converter && ($converter$$3$$ = $valueFormat$$3$$.converter);
  $context$$61_formatter$$ = new D.$DvtLinearScaleAxisValueFormatter$$($context$$61_formatter$$, null != $min$$12$$ ? $min$$12$$ : $value$$107$$, null != $max$$12$$ ? $max$$12$$ : $value$$107$$, null != $majorIncrement$$1$$ ? $majorIncrement$$1$$ : 0, $scaling$$, $autoPrecision$$4$$);
  return $converter$$3$$ && ($converter$$3$$.getAsString || $converter$$3$$.format) ? $context$$61_formatter$$.$format$($value$$107$$, $converter$$3$$) : $context$$61_formatter$$.$format$($value$$107$$)
};
D.$DvtChartTooltipUtils$$.$formatDateValue$ = function $$DvtChartTooltipUtils$$$$formatDateValue$$($valueFormat$$4$$, $date$$9$$) {
  var $converter$$4$$ = $valueFormat$$4$$.converter;
  return!$converter$$4$$ ? null : $converter$$4$$.getAsString ? $converter$$4$$.getAsString($date$$9$$) : $converter$$4$$.format ? $converter$$4$$.format($date$$9$$) : null
};
D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$ = function $$DvtChartTooltipUtils$$$$isDataCursorEnabled$$($chart$$284$$) {
  if(D.$DvtChartTypeUtils$$.$isPie$($chart$$284$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$284$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$284$$)) {
    return!1
  }
  var $options$$102$$ = $chart$$284$$.$getOptions$();
  return"on" == $options$$102$$.dataCursor ? !0 : "off" == $options$$102$$.dataCursor ? !1 : (0,D.$DvtAgent$isTouchDevice$$)() && D.$DvtChartTypeUtils$$.$isLineArea$($chart$$284$$)
};
D.$DvtChartTooltipUtils$$.$getDataCursorBehavior$ = function $$DvtChartTooltipUtils$$$$getDataCursorBehavior$$($chart$$285$$) {
  var $dataCursorBehavior$$ = $chart$$285$$.$getOptions$().dataCursorBehavior;
  return"snap" == $dataCursorBehavior$$ ? "SNAP" : "smooth" == $dataCursorBehavior$$ ? "SMOOTH" : D.$DvtChartTypeUtils$$.$isLineArea$($chart$$285$$) ? "SMOOTH" : "SNAP"
};
D.$DvtChartTypeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTypeUtils$$, D.$DvtObj$$, "DvtChartTypeUtils");
D.$DvtChartTypeUtils$$.$_SUPPORTED_TYPES$ = "bar line area lineWithArea combo pie bubble scatter funnel stock".split(" ");
D.$DvtChartTypeUtils$$.$isValidType$ = function $$DvtChartTypeUtils$$$$isValidType$$($chart$$286$$) {
  return 0 <= D.$DvtArrayUtils$$.$getIndex$(D.$DvtChartTypeUtils$$.$_SUPPORTED_TYPES$, $chart$$286$$.$getType$())
};
D.$DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($chart$$287$$) {
  return $chart$$287$$.$getOptions$().__spark
};
D.$DvtChartTypeUtils$$.$isOverview$ = function $$DvtChartTypeUtils$$$$isOverview$$($chart$$288$$) {
  return $chart$$288$$.$getOptions$()._isOverview
};
D.$DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($chart$$289$$) {
  return"combo" == $chart$$289$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($chart$$290$$) {
  return!D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$290$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$290$$)
};
D.$DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($chart$$291$$) {
  return"horizontal" == $chart$$291$$.$getOptions$().orientation && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$291$$) && !D.$DvtChartTypeUtils$$.$isStock$($chart$$291$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$291$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$291$$))
};
D.$DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($chart$$292$$) {
  return"polar" == $chart$$292$$.$getOptions$().coordinateSystem
};
D.$DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($chart$$293$$) {
  return"on" != $chart$$293$$.$getOptions$().stack || D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$293$$) ? !1 : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$293$$)
};
D.$DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($chart$$294$$) {
  return"bar" == $chart$$294$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isStock$ = function $$DvtChartTypeUtils$$$$isStock$$($chart$$295$$) {
  return"stock" == $chart$$295$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($chart$$296$$) {
  return"line" == $chart$$296$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($chart$$297$$) {
  return"lineWithArea" == $chart$$297$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($chart$$298$$) {
  return"area" == $chart$$298$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($chart$$299$$) {
  return"scatter" == $chart$$299$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($chart$$300$$) {
  return"bubble" == $chart$$300$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($chart$$301$$) {
  return"pie" == $chart$$301$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($chart$$302$$) {
  return"funnel" == $chart$$302$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($chart$$303$$) {
  return!D.$DvtChartTypeUtils$$.$hasAxes$($chart$$303$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$303$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$303$$) ? !1 : !0
};
D.$DvtChartTypeUtils$$.$isSplitDualY$ = function $$DvtChartTypeUtils$$$$isSplitDualY$$($chart$$304$$) {
  return D.$DvtChartTypeUtils$$.$isStock$($chart$$304$$) && D.$DvtChartDataUtils$$.$hasVolumeSeries$($chart$$304$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$304$$) ? !0 : "on" == $chart$$304$$.$getOptions$().splitDualY && D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$304$$) && !D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$304$$)
};
D.$DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($chart$$305_type$$103$$) {
  $chart$$305_type$$103$$ = $chart$$305_type$$103$$.$getType$();
  return"bar" == $chart$$305_type$$103$$ || "line" == $chart$$305_type$$103$$ || "area" == $chart$$305_type$$103$$ || "lineWithArea" == $chart$$305_type$$103$$ || "combo" == $chart$$305_type$$103$$ || "stock" == $chart$$305_type$$103$$
};
D.$DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($chart$$306_type$$104$$) {
  $chart$$306_type$$104$$ = $chart$$306_type$$104$$.$getType$();
  return"scatter" == $chart$$306_type$$104$$ || "bubble" == $chart$$306_type$$104$$
};
D.$DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($chart$$307_type$$105$$) {
  $chart$$307_type$$105$$ = $chart$$307_type$$105$$.$getType$();
  return"line" == $chart$$307_type$$105$$ || "area" == $chart$$307_type$$105$$ || "lineWithArea" == $chart$$307_type$$105$$
};
D.$DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($chart$$308$$) {
  return!D.$DvtChartTypeUtils$$.$isPie$($chart$$308$$) && !D.$DvtChartTypeUtils$$.$isFunnel$($chart$$308$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$308$$)
};
D.$DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($chart$$309$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$309$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$309$$)
};
D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($chart$$310$$) {
  var $direction$$15$$ = D.$DvtChartEventUtils$$.$getZoomDirection$($chart$$310$$);
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$310$$) ? !1 : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$310$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$310$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$310$$) && "y" != $direction$$15$$
};
D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($chart$$311$$) {
  var $direction$$16$$ = D.$DvtChartEventUtils$$.$getZoomDirection$($chart$$311$$);
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$311$$) ? !1 : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$311$$) && D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$311$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$311$$) && "x" != $direction$$16$$
};
D.$DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($chart$$312$$) {
  return!("pie" == $chart$$312$$.$getType$() || "funnel" == $chart$$312$$.$getType$())
};
D.$DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($chart$$313$$) {
  return!D.$DvtChartTypeUtils$$.$isDualY$($chart$$313$$) ? !1 : D.$DvtChartDataUtils$$.$getY2SeriesCount$($chart$$313$$) == D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$313$$)
};
D.$DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($chart$$314$$) {
  return!D.$DvtChartTypeUtils$$.$isDualY$($chart$$314$$) ? !1 : 0 < D.$DvtChartDataUtils$$.$getY2SeriesCount$($chart$$314$$)
};
D.$DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($chart$$315$$) {
  return D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$315$$)
};
D.$DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($chart$$316$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$316$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasCandlestickSeries$ = function $$DvtChartTypeUtils$$$$hasCandlestickSeries$$($chart$$317$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$317$$, "candlestick")
};
D.$DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($chart$$318$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$318$$, "line")
};
D.$DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($chart$$319$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$319$$, "area")
};
D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($chart$$320$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$320$$, "lineWithArea")
};
D.$DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($chart$$321$$, $type$$107$$) {
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$321$$)) {
    for(var $seriesCount$$20$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$321$$), $seriesIndex$$113$$ = 0;$seriesIndex$$113$$ < $seriesCount$$20$$;$seriesIndex$$113$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$321$$, $seriesIndex$$113$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$321$$, $seriesIndex$$113$$) == $type$$107$$) {
        return!0
      }
    }
  }
  return!1
};
D.$DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($chart$$322$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$322$$)) {
    return!1
  }
  for(var $seriesCount$$21$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$322$$), $seriesIndex$$114$$ = 0;$seriesIndex$$114$$ < $seriesCount$$21$$;$seriesIndex$$114$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$322$$, $seriesIndex$$114$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$322$$, $seriesIndex$$114$$)) {
      var $lineType$$6$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$322$$, $seriesIndex$$114$$);
      if("centeredSegmented" == $lineType$$6$$ || "centeredStepped" == $lineType$$6$$) {
        return!0
      }
    }
  }
  return!1
};
D.$DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($chart$$323$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$323$$)) {
    return!1
  }
  for(var $seriesCount$$22$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$323$$), $seriesIndex$$115$$ = 0;$seriesIndex$$115$$ < $seriesCount$$22$$;$seriesIndex$$115$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$323$$, $seriesIndex$$115$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$323$$, $seriesIndex$$115$$)) {
      var $lineType$$7$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$323$$, $seriesIndex$$115$$);
      if("segmented" == $lineType$$7$$ || "stepped" == $lineType$$7$$) {
        return!0
      }
    }
  }
  return!1
};
D.$DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($chart$$324$$) {
  var $options$$104$$ = $chart$$324$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$324$$) || "off" != $options$$104$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$324$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$324$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$324$$, "y2") ? !1 : !0
};
D.$DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($chart$$325$$) {
  var $options$$105$$ = $chart$$325$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$325$$) || "off" != $options$$105$$.legend.rendered || "off" != $options$$105$$.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$325$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$325$$, "y2") ? !1 : !0
};
D.$DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($chart$$326$$) {
  var $options$$106$$ = $chart$$326$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$326$$) || "off" != $options$$106$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$326$$, "x") || "off" != $options$$106$$.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$326$$, "y2") ? !1 : !0
};
D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($chart$$327$$) {
  var $options$$107$$ = $chart$$327$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$327$$) || "off" != $options$$107$$.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$327$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$327$$, "y") || "off" != $options$$107$$.plotArea.rendered ? !1 : !0
};
D.$DvtChartMarkerUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartMarkerUtils$$, D.$DvtObj$$, "DvtChartMarkerUtils");
D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$ = 2.5;
D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ = 0.125;
D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ = 0.2;
D.$DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($chart$$209$$, $width$$42$$, $height$$44$$) {
  var $isPolar$$6$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$209$$), $minMax$$5_xAxisValueRange$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$209$$, "z"), $minValue$$6$$ = $minMax$$5_xAxisValueRange$$.min, $maxValue$$5_valueRange$$ = $minMax$$5_xAxisValueRange$$.max, $minMax$$5_xAxisValueRange$$ = D.$DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$209$$, "x"), $yAxisValueRange$$ = D.$DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$209$$, "y"), $axisWidth$$1$$, $axisHeight$$;
  $isPolar$$6$$ ? ($axisWidth$$1$$ = window.Infinity, $axisHeight$$ = $chart$$209$$.$getRadius$()) : ($axisWidth$$1$$ = $width$$42$$ - 2.4 * D.$DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$209$$, "y"), $axisHeight$$ = $height$$44$$ - 1.6 * D.$DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$209$$, "x"));
  var $minArea$$ = window.Math.PI * window.Math.pow(D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$, 2), $areaRange_maxRadius_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ * window.Math.min($width$$42$$, $height$$44$$), $maxArea_maxMarkerSize_seriesCount$$18$$ = window.Math.PI * window.Math.pow($areaRange_maxRadius_minMaxArea$$, 2), $areaRange_maxRadius_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$($chart$$209$$, $minArea$$, $maxArea_maxMarkerSize_seriesCount$$18$$, 
  $minValue$$6$$, $maxValue$$5_valueRange$$), $minArea$$ = $areaRange_maxRadius_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$18$$ = $areaRange_maxRadius_minMaxArea$$.maxArea, $areaRange_maxRadius_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$($minArea$$, $maxArea_maxMarkerSize_seriesCount$$18$$, $minValue$$6$$, $maxValue$$5_valueRange$$), $minArea$$ = $areaRange_maxRadius_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$18$$ = $areaRange_maxRadius_minMaxArea$$.maxArea, 
  $maxValue$$5_valueRange$$ = $maxValue$$5_valueRange$$ - $minValue$$6$$, $areaRange_maxRadius_minMaxArea$$ = $maxArea_maxMarkerSize_seriesCount$$18$$ - $minArea$$, $maxArea_maxMarkerSize_seriesCount$$18$$ = 2 * window.Math.sqrt($maxArea_maxMarkerSize_seriesCount$$18$$ / window.Math.PI);
  $axisWidth$$1$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$18$$;
  $axisHeight$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$18$$;
  for(var $maxArea_maxMarkerSize_seriesCount$$18$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$209$$), $seriesIndex$$79$$ = 0;$seriesIndex$$79$$ < $maxArea_maxMarkerSize_seriesCount$$18$$;$seriesIndex$$79$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$209$$, $seriesIndex$$79$$)) {
      for(var $seriesItem$$12$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$209$$, $seriesIndex$$79$$), $numGroups$$7$$ = $seriesItem$$12$$.items ? $seriesItem$$12$$.items.length : 0, $j$$42$$ = 0;$j$$42$$ < $numGroups$$7$$;$j$$42$$++) {
        var $dataItem$$24$$ = $seriesItem$$12$$.items[$j$$42$$];
        $dataItem$$24$$ && $dataItem$$24$$.z && ($dataItem$$24$$.markerSize = 0 < $maxValue$$5_valueRange$$ ? 2 * window.Math.sqrt(($minArea$$ + ($dataItem$$24$$.z - $minValue$$6$$) / $maxValue$$5_valueRange$$ * $areaRange_maxRadius_minMaxArea$$) / window.Math.PI) : D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ * window.Math.min($width$$42$$, $height$$44$$), $dataItem$$24$$._xAxisRadius = 0 < $minMax$$5_xAxisValueRange$$ ? 0.5 * ($dataItem$$24$$.markerSize / $axisWidth$$1$$) * $minMax$$5_xAxisValueRange$$ : 
        $isPolar$$6$$ ? 0 : 29, $dataItem$$24$$._yAxisRadius = 0 < $yAxisValueRange$$ ? 0.5 * ($dataItem$$24$$.markerSize / $axisHeight$$) * $yAxisValueRange$$ : 29)
      }
    }
  }
};
D.$DvtChartMarkerUtils$$.$_getAxisValueRange$ = function $$DvtChartMarkerUtils$$$$_getAxisValueRange$$($chart$$210$$, $type$$96$$) {
  var $axisOptions$$16_max$$11$$ = $chart$$210$$.$getOptions$()[$type$$96$$ + "Axis"], $isLog$$3$$ = D.$DvtChartAxisUtils$$.$isLog$($chart$$210$$, $type$$96$$), $zeroBaseline$$ = !$isLog$$3$$ && "zero" == D.$DvtChartAxisUtils$$.$getBaselineScaling$($chart$$210$$, $type$$96$$), $minMax$$6$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$210$$, $type$$96$$, !0), $min$$11$$ = $axisOptions$$16_max$$11$$.min;
  null == $min$$11$$ && ($min$$11$$ = $zeroBaseline$$ ? window.Math.min(0, $minMax$$6$$.min) : $minMax$$6$$.min);
  $axisOptions$$16_max$$11$$ = $axisOptions$$16_max$$11$$.max;
  null == $axisOptions$$16_max$$11$$ && ($axisOptions$$16_max$$11$$ = $zeroBaseline$$ ? window.Math.max(0, $minMax$$6$$.max) : $minMax$$6$$.max);
  return $isLog$$3$$ && 0 < $axisOptions$$16_max$$11$$ && 0 < $min$$11$$ ? $axisOptions$$16_max$$11$$ == $min$$11$$ ? 6 : D.$DvtMath$$.$log10$($axisOptions$$16_max$$11$$ / $min$$11$$) : $axisOptions$$16_max$$11$$ == $min$$11$$ ? 60 : $axisOptions$$16_max$$11$$ - $min$$11$$
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForCount$$($avgRelSize_chart$$211_s2$$, $minArea$$1$$, $maxArea$$1$$, $minValue$$7_s1_t1$$1$$, $maxValue$$6_t2$$1$$) {
  for(var $bubbleCount$$ = 0, $sizeTotal$$ = 0, $seriesCount$$19$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($avgRelSize_chart$$211_s2$$), $seriesIndex$$80$$ = 0;$seriesIndex$$80$$ < $seriesCount$$19$$;$seriesIndex$$80$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($avgRelSize_chart$$211_s2$$, $seriesIndex$$80$$)) {
      for(var $seriesItem$$13$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($avgRelSize_chart$$211_s2$$, $seriesIndex$$80$$), $numDataItems$$ = $seriesItem$$13$$.items.length, $j$$43$$ = 0;$j$$43$$ < $numDataItems$$;$j$$43$$++) {
        var $dataItem$$25$$ = $seriesItem$$13$$.items[$seriesIndex$$80$$];
        $dataItem$$25$$ && $dataItem$$25$$.z && ($bubbleCount$$++, $sizeTotal$$ += $dataItem$$25$$.z)
      }
    }
  }
  $avgRelSize_chart$$211_s2$$ = ($sizeTotal$$ / $bubbleCount$$ - $minValue$$7_s1_t1$$1$$) / ($maxValue$$6_t2$$1$$ - $minValue$$7_s1_t1$$1$$);
  $minValue$$7_s1_t1$$1$$ = 15 + window.Math.floor(30 * (1 - $avgRelSize_chart$$211_s2$$));
  $maxValue$$6_t2$$1$$ = 30 + window.Math.floor(150 * (1 - $avgRelSize_chart$$211_s2$$));
  $bubbleCount$$ >= $maxValue$$6_t2$$1$$ ? $maxArea$$1$$ = $minArea$$1$$ + 0.15 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ >= $minValue$$7_s1_t1$$1$$ && ($maxArea$$1$$ -= 0.85 / ($maxValue$$6_t2$$1$$ - $minValue$$7_s1_t1$$1$$) * ($bubbleCount$$ - $minValue$$7_s1_t1$$1$$) * ($maxArea$$1$$ - $minArea$$1$$));
  $minValue$$7_s1_t1$$1$$ = 5 + window.Math.floor(15 * (1 - $avgRelSize_chart$$211_s2$$));
  $avgRelSize_chart$$211_s2$$ = 30 + window.Math.floor(70 * (1 - $avgRelSize_chart$$211_s2$$));
  $bubbleCount$$ < $minValue$$7_s1_t1$$1$$ ? $minArea$$1$$ += 0.005 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ < $avgRelSize_chart$$211_s2$$ && ($minArea$$1$$ += (0.005 - 0.005 / ($avgRelSize_chart$$211_s2$$ - $minValue$$7_s1_t1$$1$$) * ($bubbleCount$$ - $minValue$$7_s1_t1$$1$$)) * ($maxArea$$1$$ - $minArea$$1$$));
  return{minArea:$minArea$$1$$, maxArea:$maxArea$$1$$}
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForDataRange$$($minArea$$2$$, $maxArea$$2$$, $buffer$$10_minValue$$8$$, $maxValue$$7$$) {
  if(0 != $maxValue$$7$$ - $buffer$$10_minValue$$8$$) {
    var $bubbleRatio$$ = $maxArea$$2$$ / $minArea$$2$$, $dataRatio$$ = $bubbleRatio$$;
    0 < $maxValue$$7$$ && 0 < $buffer$$10_minValue$$8$$ ? $dataRatio$$ = $maxValue$$7$$ / $buffer$$10_minValue$$8$$ : 0 > $buffer$$10_minValue$$8$$ && 0 > $maxValue$$7$$ && ($dataRatio$$ = $buffer$$10_minValue$$8$$ / $maxValue$$7$$);
    $dataRatio$$ < $bubbleRatio$$ && ($buffer$$10_minValue$$8$$ = $maxArea$$2$$ / $dataRatio$$ - $minArea$$2$$, 0 < $buffer$$10_minValue$$8$$ && ($minArea$$2$$ += $buffer$$10_minValue$$8$$))
  }else {
    $minArea$$2$$ = $maxArea$$2$$
  }
  return{minArea:$minArea$$2$$, maxArea:$maxArea$$2$$}
};
D.$DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($markers$$8$$) {
  $markers$$8$$.sort(D.$DvtChartMarkerUtils$$.$_compareSize$)
};
D.$DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($a$$27$$, $b$$6$$) {
  var $aSize$$ = $a$$27$$.$getSize$ ? $a$$27$$.$getSize$() : $a$$27$$.size, $bSize$$ = $b$$6$$.$getSize$ ? $b$$6$$.$getSize$() : $b$$6$$.size;
  return $aSize$$ > $bSize$$ ? -1 : $aSize$$ < $bSize$$ ? 1 : 0
};
D.$DvtChartMarkerUtils$$.$checkPixelMap$ = function $$DvtChartMarkerUtils$$$$checkPixelMap$$($pixelMap$$1$$, $markerX_x2$$17$$, $markerY_y2$$10$$, $markerSize$$5_x1$$19$$) {
  var $halfSize$$ = $markerSize$$5_x1$$19$$ / 2;
  $markerSize$$5_x1$$19$$ = window.Math.max(window.Math.floor($markerX_x2$$17$$ - $halfSize$$), 0);
  var $y1$$12$$ = window.Math.max(window.Math.floor($markerY_y2$$10$$ - $halfSize$$), 0);
  $markerX_x2$$17$$ = window.Math.max(window.Math.ceil($markerX_x2$$17$$ + $halfSize$$), 0);
  $markerY_y2$$10$$ = window.Math.max(window.Math.ceil($markerY_y2$$10$$ + $halfSize$$), 0);
  return(0,D.$JSCompiler_StaticMethods_isObscured$$)($pixelMap$$1$$, $markerSize$$5_x1$$19$$, $y1$$12$$, $markerX_x2$$17$$, $markerY_y2$$10$$)
};
D.$DvtChartMarkerUtils$$.$updatePixelMap$ = function $$DvtChartMarkerUtils$$$$updatePixelMap$$($pixelMap$$2$$, $markerX$$1_x2$$18$$, $markerY$$1_y2$$11$$, $markerSize$$6_x1$$20$$, $alpha$$5$$) {
  var $halfSize$$1$$ = 0.4 * $markerSize$$6_x1$$20$$;
  $markerSize$$6_x1$$20$$ = window.Math.max(window.Math.round($markerX$$1_x2$$18$$ - $halfSize$$1$$), 0);
  $markerX$$1_x2$$18$$ = window.Math.max(window.Math.round($markerX$$1_x2$$18$$ + $halfSize$$1$$), 0);
  var $y1$$13$$ = window.Math.max(window.Math.round($markerY$$1_y2$$11$$ - $halfSize$$1$$), 0);
  $markerY$$1_y2$$11$$ = window.Math.max(window.Math.round($markerY$$1_y2$$11$$ + $halfSize$$1$$), 0);
  (0,D.$JSCompiler_StaticMethods_obscure$$)($pixelMap$$2$$, $markerSize$$6_x1$$20$$, $y1$$13$$, $markerX$$1_x2$$18$$, $markerY$$1_y2$$11$$, $alpha$$5$$)
};
D.$DvtPieChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChartUtils$$, D.$DvtObj$$, "DvtPieChartUtils");
D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
D.$DvtPieChartUtils$$.$getSliceId$ = function $$DvtPieChartUtils$$$$getSliceId$$($chart$$328$$, $seriesIndex$$116$$) {
  var $dataItem$$37_id$$36$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$328$$, $seriesIndex$$116$$, 0), $dataItem$$37_id$$36$$ = $dataItem$$37_id$$36$$ ? $dataItem$$37_id$$36$$.id : null, $series$$15$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$328$$, $seriesIndex$$116$$), $group$$25$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$328$$, 0);
  return new D.$DvtChartDataItem$$($dataItem$$37_id$$36$$, $series$$15$$, $group$$25$$)
};
D.$DvtPieChartUtils$$.$getOtherSliceId$ = function $$DvtPieChartUtils$$$$getOtherSliceId$$($chart$$329_group$$26$$) {
  $chart$$329_group$$26$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$329_group$$26$$, 0);
  return new D.$DvtChartDataItem$$(null, D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, $chart$$329_group$$26$$)
};
D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$ = function $$DvtPieChartUtils$$$$getRenderedSeriesIndices$$($chart$$330$$) {
  return D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$330$$).$rendered$
};
D.$DvtPieChartUtils$$.$hasOtherSeries$ = function $$DvtPieChartUtils$$$$hasOtherSeries$$($chart$$331$$) {
  return 0 < D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$331$$).$other$.length
};
D.$DvtPieChartUtils$$.$getOtherValue$ = function $$DvtPieChartUtils$$$$getOtherValue$$($chart$$332$$) {
  for(var $otherSeries$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$332$$).$other$, $otherValue$$2$$ = 0, $i$$222$$ = 0;$i$$222$$ < $otherSeries$$.length;$i$$222$$++) {
    var $seriesIndex$$117_value$$108$$ = $otherSeries$$[$i$$222$$];
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$332$$, $seriesIndex$$117_value$$108$$) && ($seriesIndex$$117_value$$108$$ = D.$DvtChartDataUtils$$.getValue($chart$$332$$, $seriesIndex$$117_value$$108$$, 0), 0 < $seriesIndex$$117_value$$108$$ && ($otherValue$$2$$ += $seriesIndex$$117_value$$108$$))
  }
  return $otherValue$$2$$
};
D.$DvtPieChartUtils$$.$getOtherSliceIds$ = function $$DvtPieChartUtils$$$$getOtherSliceIds$$($chart$$333$$) {
  for(var $otherSeries$$1$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$333$$).$other$, $seriesIds$$ = [], $i$$223$$ = 0;$i$$223$$ < $otherSeries$$1$$.length;$i$$223$$++) {
    $seriesIds$$.push(D.$DvtPieChartUtils$$.$getSliceId$($chart$$333$$, $otherSeries$$1$$[$i$$223$$]))
  }
  return $seriesIds$$
};
D.$DvtPieChartUtils$$.$isOtherSliceSelected$ = function $$DvtPieChartUtils$$$$isOtherSliceSelected$$($chart$$334$$, $selected$$12$$) {
  for(var $otherIds$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$334$$), $j$$44$$ = 0;$j$$44$$ < $otherIds$$.length;$j$$44$$++) {
    for(var $sliceId$$ = $otherIds$$[$j$$44$$], $sliceSelected$$ = !1, $i$$224$$ = 0;$i$$224$$ < $selected$$12$$.length;$i$$224$$++) {
      if($selected$$12$$[$i$$224$$].id && $sliceId$$.getId() === $selected$$12$$[$i$$224$$].id || $sliceId$$.$getSeries$() === $selected$$12$$[$i$$224$$].series && $sliceId$$.$getGroup$() === $selected$$12$$[$i$$224$$].group) {
        $sliceSelected$$ = !0;
        break
      }
    }
    if(!$sliceSelected$$) {
      return!1
    }
  }
  return!0
};
D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$ = function $$DvtPieChartUtils$$$$_getSeriesIndicesArrays$$($chart$$335$$) {
  for(var $renderedSeries$$ = [], $otherSeries$$2$$ = [], $seriesCount$$23$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$335$$), $options$$108$$ = $chart$$335$$.$getOptions$(), $otherThreshold$$ = $options$$108$$.otherThreshold * D.$DvtPieChartUtils$$.$getTotalValue$($chart$$335$$), $seriesIndex$$119$$ = 0;$seriesIndex$$119$$ < $seriesCount$$23$$;$seriesIndex$$119$$++) {
    var $value$$109$$ = D.$DvtChartDataUtils$$.getValue($chart$$335$$, $seriesIndex$$119$$, 0);
    0 < $otherThreshold$$ && $value$$109$$ < $otherThreshold$$ ? $otherSeries$$2$$.push($seriesIndex$$119$$) : $renderedSeries$$.push($seriesIndex$$119$$)
  }
  "ascending" == $options$$108$$.sorting ? $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$2$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$335$$, $renderedSeries$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$335$$, $otherSeries$$2$$, 0)
  }) : ("on" == $options$$108$$.sorting || "descending" == $options$$108$$.sorting) && $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$2$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$335$$, $otherSeries$$2$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$335$$, $renderedSeries$$, 0)
  });
  return{$rendered$:$renderedSeries$$, $other$:$otherSeries$$2$$}
};
D.$DvtPieChartUtils$$.$getTotalValue$ = function $$DvtPieChartUtils$$$$getTotalValue$$($chart$$336$$) {
  for(var $seriesCount$$24$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$336$$), $totalValue$$1$$ = 0, $seriesIndex$$120$$ = 0;$seriesIndex$$120$$ < $seriesCount$$24$$;$seriesIndex$$120$$++) {
    var $value$$110$$ = D.$DvtChartDataUtils$$.getValue($chart$$336$$, $seriesIndex$$120$$, 0);
    0 < $value$$110$$ && ($totalValue$$1$$ += $value$$110$$)
  }
  return $totalValue$$1$$
};
D.$DvtPieChartUtils$$.$getSliceExplode$ = function $$DvtPieChartUtils$$$$getSliceExplode$$($chart$$337$$, $seriesIndex$$121$$) {
  var $seriesItem$$28$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$337$$, $seriesIndex$$121$$);
  return $seriesItem$$28$$ && $seriesItem$$28$$.pieSliceExplode ? $seriesItem$$28$$.pieSliceExplode : 0
};
D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtPieChartUtils$$$$getOtherSliceShowPopupBehaviors$$($chart$$338$$) {
  var $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$338$$);
  if($firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ && 1 <= $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$.length) {
    return $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$338$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$[0].$getSeries$()), $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$338$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$, 0)._id, $chart$$338$$.$getShowPopupBehaviors$($firstDataItemSeriesIndex_otherSliceIds_stampId$$3$$)
  }
};
D.$DvtPieRenderUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieRenderUtils$$, D.$DvtObj$$, "DvtPieRenderUtils");
D.$DvtPieRenderUtils$$.$TWOD$ = "2D";
D.$DvtPieRenderUtils$$.$THREED$ = "3D";
D.$DvtPieRenderUtils$$.$CRUST$ = "CRUST";
D.$DvtPieRenderUtils$$.$SIDE$ = "SIDE";
D.$DvtPieRenderUtils$$.$BORDER$ = "BORDER";
D.$DvtPieRenderUtils$$.$SURFACE_CRUST$ = 0;
D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ = 1;
D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
D.$DvtPieRenderUtils$$.$SURFACE_TOP$ = 3;
D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtPieRenderUtils$$$$reflectAngleOverYAxis$$($angle$$13_radian$$1$$, $cx$$9$$, $cy$$10$$, $rx$$4$$, $ry$$4$$) {
  $angle$$13_radian$$1$$ = D.$DvtMath$$.$degreesToRads$(360 - $angle$$13_radian$$1$$);
  return{x:$cx$$9$$ + window.Math.cos($angle$$13_radian$$1$$) * $rx$$4$$, y:$cy$$10$$ + window.Math.sin($angle$$13_radian$$1$$) * $ry$$4$$}
};
D.$DvtPieRenderUtils$$.$getGradientColors$ = function $$DvtPieRenderUtils$$$$getGradientColors$$($baseColor_c3$$, $arColors$$4_style$$54$$, $c$$5_skin$$3$$) {
  if($c$$5_skin$$3$$ && "skyros" != $c$$5_skin$$3$$) {
    if($arColors$$4_style$$54$$ == D.$DvtPieRenderUtils$$.$TWOD$ || $arColors$$4_style$$54$$ == D.$DvtPieRenderUtils$$.$THREED$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.09, 0.04)]
    }
    if($arColors$$4_style$$54$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, 0, -0.14)]
    }
    if($arColors$$4_style$$54$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.1, 0.06), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05)]
    }
  }else {
    if($arColors$$4_style$$54$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
      return $arColors$$4_style$$54$$ = [], $arColors$$4_style$$54$$[0] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.1)), $arColors$$4_style$$54$$[1] = $arColors$$4_style$$54$$[0], $arColors$$4_style$$54$$[2] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.9)), $arColors$$4_style$$54$$
    }
    if($arColors$$4_style$$54$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
      return["#FFFFFF", "#000000", "#000000"]
    }
    $c$$5_skin$$3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.88));
    var $c1$$2$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.05)), $c2$$2$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.15));
    $baseColor_c3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.35));
    if($arColors$$4_style$$54$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[$c$$5_skin$$3$$, $c2$$2$$, $baseColor_c3$$, $c$$5_skin$$3$$]
    }
    if("SIDE" == $arColors$$4_style$$54$$) {
      return[$c$$5_skin$$3$$, $baseColor_c3$$]
    }
    if("3D" == $arColors$$4_style$$54$$) {
      return[$baseColor_c3$$, $c2$$2$$, $c$$5_skin$$3$$, $c1$$2$$, $baseColor_c3$$]
    }
  }
};
D.$DvtPieRenderUtils$$.$getGradientAlphas$ = function $$DvtPieRenderUtils$$$$getGradientAlphas$$($baseAlpha$$, $style$$55$$) {
  var $alpha$$7$$ = null == $baseAlpha$$ || (0,window.isNaN)($baseAlpha$$) || 0 == $baseAlpha$$ ? 1 : $baseAlpha$$;
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[$alpha$$7$$, $alpha$$7$$, $alpha$$7$$]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[$alpha$$7$$ / 1.59375, $alpha$$7$$ / 5.3125, $alpha$$7$$ / 2.65625]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[$alpha$$7$$, $alpha$$7$$, $alpha$$7$$, $alpha$$7$$, $alpha$$7$$]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[$alpha$$7$$, $alpha$$7$$, $alpha$$7$$, $alpha$$7$$]
  }
  if($style$$55$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[$alpha$$7$$, $alpha$$7$$]
  }
};
D.$DvtPieRenderUtils$$.$getGradientRatios$ = function $$DvtPieRenderUtils$$$$getGradientRatios$$($style$$56$$, $skin$$4$$) {
  if($skin$$4$$ && "skyros" != $skin$$4$$) {
    return[0, 1]
  }
  if($style$$56$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[0.2, 0.5, 1]
  }
  if($style$$56$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[0, 0.5, 1]
  }
  if($style$$56$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[0, 0.29, 0.55, 0.84, 1]
  }
  if($style$$56$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[0, 0.43, 0.91, 1]
  }
  if($style$$56$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[0, 1]
  }
};
D.$DvtPieRenderUtils$$.$createTopSurface$ = function $$DvtPieRenderUtils$$$$createTopSurface$$($slice$$24$$, $fill$$13$$) {
  var $edge_pieChart$$8$$ = $slice$$24$$.$_pieChart$, $context$$63_shapes$$3_wedge$$ = $edge_pieChart$$8$$.$getCtx$(), $innerColor$$9_pieCenter$$ = $slice$$24$$.$getCenter$(), $innerRadius_outerColor$$10$$ = $slice$$24$$.$getInnerRadius$(), $sliceGaps_stroke$$20$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$8$$) || (0 == $slice$$24$$.$_depth$ ? 3 * D.$DvtChartStyleUtils$$.$getDataItemGaps$($slice$$24$$.$_chart$) : 0) > window.Math.sin(D.$DvtMath$$.$degreesToRads$($slice$$24$$.$getAngleExtent$())) * 
  $slice$$24$$.$_radiusX$ + 1 ? null : 0 == $slice$$24$$.$_depth$ ? 3 * D.$DvtChartStyleUtils$$.$getDataItemGaps$($slice$$24$$.$_chart$) : 0, $context$$63_shapes$$3_wedge$$ = new D.$DvtSelectableWedge$$($context$$63_shapes$$3_wedge$$, $innerColor$$9_pieCenter$$.x, $innerColor$$9_pieCenter$$.y, $slice$$24$$.$_radiusX$, $slice$$24$$.$_radiusY$, $slice$$24$$.$getAngleStart$(), $slice$$24$$.$getAngleExtent$(), $sliceGaps_stroke$$20$$, $innerRadius_outerColor$$10$$), $innerColor$$9_pieCenter$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($edge_pieChart$$8$$.$chart$), 
  $innerRadius_outerColor$$10$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($edge_pieChart$$8$$.$chart$), $sliceGaps_stroke$$20$$ = new D.$DvtSolidStroke$$($slice$$24$$.$getStrokeColor$(), null, $slice$$24$$.$getBorderWidth$());
  $context$$63_shapes$$3_wedge$$.$setStyleProperties$($fill$$13$$, $sliceGaps_stroke$$20$$, $slice$$24$$.$getFillColor$(), $innerColor$$9_pieCenter$$, $innerRadius_outerColor$$10$$);
  $context$$63_shapes$$3_wedge$$ = [$context$$63_shapes$$3_wedge$$];
  if(!$slice$$24$$.$getStrokeColor$() && "skyros" == $edge_pieChart$$8$$.$getSkin$() && (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$8$$) && 0 < $slice$$24$$.getDepth() && "gradient" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($edge_pieChart$$8$$.$chart$) && (180 <= $slice$$24$$.$getAngleStart$() || 180 <= $slice$$24$$.$getAngleStart$() + $slice$$24$$.$getAngleExtent$() || 360 == $slice$$24$$.$getAngleExtent$())) {
    $edge_pieChart$$8$$ = D.$DvtPieRenderUtils$$.$_createGradientPieBorder$($slice$$24$$, $fill$$13$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($edge_pieChart$$8$$, $slice$$24$$.$_explodeOffsetX$, $slice$$24$$.$_explodeOffsetY$), $context$$63_shapes$$3_wedge$$.push($edge_pieChart$$8$$)
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$24$$, $context$$63_shapes$$3_wedge$$);
  return $context$$63_shapes$$3_wedge$$
};
D.$DvtPieRenderUtils$$.$associate$ = function $$DvtPieRenderUtils$$$$associate$$($slice$$25$$, $displayables$$6$$) {
  if($displayables$$6$$) {
    for(var $i$$231$$ = 0;$i$$231$$ < $displayables$$6$$.length;$i$$231$$++) {
      $slice$$25$$.$_pieChart$.$chart$.$getEventManager$().$associate$($displayables$$6$$[$i$$231$$], $slice$$25$$)
    }
  }
};
D.$DvtPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtPieRenderUtils$$$$_createGradientPieBorder$$($slice$$26$$, $topFill$$1$$) {
  var $angExtent_arRatios$$1_diff$$4_style$$57$$ = D.$DvtPieRenderUtils$$.$BORDER$, $arColors$$5_gradBorder$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(null, $angExtent_arRatios$$1_diff$$4_style$$57$$), $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(null, $angExtent_arRatios$$1_diff$$4_style$$57$$), $angExtent_arRatios$$1_diff$$4_style$$57$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($angExtent_arRatios$$1_diff$$4_style$$57$$), $arBounds$$1_pieChart$$9$$ = 
  $topFill$$1$$.$getBounds$(), $arColors$$5_gradBorder$$ = new D.$DvtLinearGradientStroke$$(120, $arColors$$5_gradBorder$$, $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff$$4_style$$57$$, $arBounds$$1_pieChart$$9$$);
  $arColors$$5_gradBorder$$.$setWidth$(1);
  $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ = $slice$$26$$.$getAngleStart$();
  $angExtent_arRatios$$1_diff$$4_style$$57$$ = 180 > $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ ? 180 - $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ : 0;
  $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ = 0 < $angExtent_arRatios$$1_diff$$4_style$$57$$ ? 180 : $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$;
  $angExtent_arRatios$$1_diff$$4_style$$57$$ = $slice$$26$$.$getAngleExtent$() - $angExtent_arRatios$$1_diff$$4_style$$57$$;
  360 < $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ + $angExtent_arRatios$$1_diff$$4_style$$57$$ && ($angExtent_arRatios$$1_diff$$4_style$$57$$ = 360 - $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$);
  var $arBounds$$1_pieChart$$9$$ = $slice$$26$$.$_pieChart$, $pieCenter$$1$$ = $slice$$26$$.$getCenter$(), $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$ = new D.$DvtArc$$($arBounds$$1_pieChart$$9$$.$getCtx$(), $pieCenter$$1$$.x, $pieCenter$$1$$.y, $arBounds$$1_pieChart$$9$$.$_radiusX$, $arBounds$$1_pieChart$$9$$.$_radiusY$, $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff$$4_style$$57$$, "OPEN");
  $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$.$setStroke$($arColors$$5_gradBorder$$);
  return $angStart_arAlphas$$4_edge$$1_sliceAngleStart$$
};
D.$DvtPieRenderUtils$$.$createLateralSurface$ = function $$DvtPieRenderUtils$$$$createLateralSurface$$($slice$$27$$, $pathType$$, $fill$$14$$) {
  if(0 == $slice$$27$$.$getAngleExtent$()) {
    return[]
  }
  var $shapes$$4$$ = [];
  if(0 < D.$DvtColorUtils$$.$getAlpha$($slice$$27$$.$getFillColor$())) {
    if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
      $shapes$$4$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$27$$, $pathType$$, null, $fill$$14$$))
    }else {
      if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_CRUST$) {
        for(var $pathCommands$$2$$ = D.$DvtPieRenderUtils$$.$_createCrustPathCommands$($slice$$27$$), $len$$5$$ = $pathCommands$$2$$.length, $i$$232$$ = 0;$i$$232$$ < $len$$5$$;$i$$232$$++) {
          $shapes$$4$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$27$$, $pathType$$, $pathCommands$$2$$[$i$$232$$], $fill$$14$$))
        }
      }
    }
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$27$$, $shapes$$4$$);
  return $shapes$$4$$
};
D.$DvtPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtPieRenderUtils$$$$generateLateralGradientFill$$($slice$$28$$, $objType$$1$$) {
  var $pieChart$$10$$ = $slice$$28$$.$_pieChart$, $skin$$5$$ = $pieChart$$10$$.$getSkin$(), $yOffset$$ = $objType$$1$$ == D.$DvtPieRenderUtils$$.$CRUST$ ? $slice$$28$$.getDepth() : 0, $angle$$14$$ = "skyros" == $skin$$5$$ ? 0 : 270, $arColors$$6$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($slice$$28$$.$getFillColor$()), $objType$$1$$, $skin$$5$$), $arAlphas$$5$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($slice$$28$$.$getFillColor$()), 
  $objType$$1$$), $arRatios$$2$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($objType$$1$$, $skin$$5$$), $arBounds$$2$$ = null;
  "skyros" == $skin$$5$$ && ($arBounds$$2$$ = [window.Math.floor($slice$$28$$.$getCenter$().x - $pieChart$$10$$.$_radiusX$), window.Math.floor($slice$$28$$.$getCenter$().y - $pieChart$$10$$.$_radiusY$) + $yOffset$$, window.Math.ceil(2 * $pieChart$$10$$.$_radiusX$), window.Math.ceil(2 * $pieChart$$10$$.$_radiusY$)]);
  return new D.$DvtLinearGradientFill$$($angle$$14$$, $arColors$$6$$, $arAlphas$$5$$, $arRatios$$2$$, $arBounds$$2$$)
};
D.$DvtPieRenderUtils$$.$_generateLateralShape$ = function $$DvtPieRenderUtils$$$$_generateLateralShape$$($slice$$29$$, $pathType$$1_pointArray$$1_pt$$, $pathCommand_points$$13_xCenter$$, $fill$$15$$) {
  var $context$$64_path$$6_polygon$$ = $slice$$29$$.$_pieChart$.$getCtx$();
  if($pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
    var $angle$$15$$ = $slice$$29$$.$getAngleStart$(), $arc$$2$$ = $slice$$29$$.$getAngleExtent$();
    $pathCommand_points$$13_xCenter$$ = $slice$$29$$.$getCenter$().x;
    var $i$$233_yCenter$$ = $slice$$29$$.$getCenter$().y, $xRadius$$ = $slice$$29$$.$_radiusX$, $yRadius$$ = $slice$$29$$.$_radiusY$, $depth$$6$$ = $slice$$29$$.getDepth();
    $pathType$$1_pointArray$$1_pt$$ = $pathType$$1_pointArray$$1_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ ? D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$15$$ + $arc$$2$$, $pathCommand_points$$13_xCenter$$, $i$$233_yCenter$$, $xRadius$$, $yRadius$$) : D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$15$$, $pathCommand_points$$13_xCenter$$, $i$$233_yCenter$$, $xRadius$$, $yRadius$$);
    $pathType$$1_pointArray$$1_pt$$ = D.$DvtPieRenderUtils$$.$_generateInnerPoints$($pathCommand_points$$13_xCenter$$, $i$$233_yCenter$$, $pathType$$1_pointArray$$1_pt$$.x, $pathType$$1_pointArray$$1_pt$$.y, $depth$$6$$);
    $pathCommand_points$$13_xCenter$$ = [];
    for($i$$233_yCenter$$ = 0;$i$$233_yCenter$$ < $pathType$$1_pointArray$$1_pt$$.length;$i$$233_yCenter$$++) {
      $pathCommand_points$$13_xCenter$$.push($pathType$$1_pointArray$$1_pt$$[$i$$233_yCenter$$].x, $pathType$$1_pointArray$$1_pt$$[$i$$233_yCenter$$].y)
    }
    $context$$64_path$$6_polygon$$ = new D.$DvtPolygon$$($context$$64_path$$6_polygon$$, $pathCommand_points$$13_xCenter$$);
    $context$$64_path$$6_polygon$$.$setFill$($fill$$15$$);
    $slice$$29$$.$getStrokeColor$() && $context$$64_path$$6_polygon$$.$setSolidStroke$($slice$$29$$.$getStrokeColor$());
    return $context$$64_path$$6_polygon$$
  }
  return $pathCommand_points$$13_xCenter$$ ? ($context$$64_path$$6_polygon$$ = new D.$DvtPath$$($context$$64_path$$6_polygon$$, null), $context$$64_path$$6_polygon$$.$setCmds$($pathCommand_points$$13_xCenter$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$64_path$$6_polygon$$, $slice$$29$$.$_explodeOffsetX$, $slice$$29$$.$_explodeOffsetY$), $context$$64_path$$6_polygon$$.$setFill$($fill$$15$$), $slice$$29$$.$getStrokeColor$() && $context$$64_path$$6_polygon$$.$setSolidStroke$($slice$$29$$.$getStrokeColor$()), 
  $context$$64_path$$6_polygon$$) : null
};
D.$DvtPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtPieRenderUtils$$$$_createCrustPathCommands$$($depth$$7_slice$$30$$) {
  var $angle$$16$$ = $depth$$7_slice$$30$$.$getAngleStart$(), $arc$$3$$ = $depth$$7_slice$$30$$.$getAngleExtent$(), $angleEnd$$ = $angle$$16$$ + $arc$$3$$, $xCenter$$1$$ = $depth$$7_slice$$30$$.$getCenter$().x, $yCenter$$1$$ = $depth$$7_slice$$30$$.$getCenter$().y, $xRadius$$1$$ = $depth$$7_slice$$30$$.$_radiusX$, $yRadius$$1$$ = $depth$$7_slice$$30$$.$_radiusY$;
  $depth$$7_slice$$30$$ = $depth$$7_slice$$30$$.getDepth();
  var $arOuterPath$$ = [];
  180 > $angle$$16$$ && 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$7_slice$$30$$, $angle$$16$$, 180 - $angle$$16$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$7_slice$$30$$, 360, $angleEnd$$ - 360)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, 
  $depth$$7_slice$$30$$, 180, 180))) : 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$7_slice$$30$$, $angle$$16$$, 360 - $angle$$16$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$7_slice$$30$$, 360, $angleEnd$$ - 360))) : 180 > $angle$$16$$ && 180 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, 
  $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$7_slice$$30$$, $angle$$16$$, 180 - $angle$$16$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$7_slice$$30$$, 180, $angleEnd$$ - 180))) : $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$7_slice$$30$$, $angle$$16$$, $arc$$3$$));
  return $arOuterPath$$
};
D.$DvtPieRenderUtils$$.$_makeOuterPath$ = function $$DvtPieRenderUtils$$$$_makeOuterPath$$($cx$$10_endPointTopX$$, $cy$$11_endPointTopY$$, $rx$$5$$, $ry$$5$$, $depth$$8$$, $startAngle$$4_startPointTop$$, $angleExtent$$2_angleExtentRads$$1$$) {
  $angleExtent$$2_angleExtentRads$$1$$ = D.$DvtMath$$.$degreesToRads$($angleExtent$$2_angleExtentRads$$1$$);
  var $endAngleRads_pathCommands$$3$$ = -(D.$DvtMath$$.$degreesToRads$($startAngle$$4_startPointTop$$) + $angleExtent$$2_angleExtentRads$$1$$);
  $startAngle$$4_startPointTop$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($startAngle$$4_startPointTop$$, $cx$$10_endPointTopX$$, $cy$$11_endPointTopY$$, $rx$$5$$, $ry$$5$$);
  $cx$$10_endPointTopX$$ += window.Math.cos($endAngleRads_pathCommands$$3$$) * $rx$$5$$;
  $cy$$11_endPointTopY$$ += window.Math.sin($endAngleRads_pathCommands$$3$$) * $ry$$5$$;
  $endAngleRads_pathCommands$$3$$ = D.$DvtPathUtils$$.moveTo($startAngle$$4_startPointTop$$.x, $startAngle$$4_startPointTop$$.y);
  $endAngleRads_pathCommands$$3$$ += D.$DvtPathUtils$$.arcTo($rx$$5$$, $ry$$5$$, $angleExtent$$2_angleExtentRads$$1$$, 0, $cx$$10_endPointTopX$$, $cy$$11_endPointTopY$$);
  $endAngleRads_pathCommands$$3$$ += D.$DvtPathUtils$$.lineTo($cx$$10_endPointTopX$$, $cy$$11_endPointTopY$$ + $depth$$8$$);
  $endAngleRads_pathCommands$$3$$ += D.$DvtPathUtils$$.arcTo($rx$$5$$, $ry$$5$$, $angleExtent$$2_angleExtentRads$$1$$, 1, $startAngle$$4_startPointTop$$.x, $startAngle$$4_startPointTop$$.y + $depth$$8$$);
  return $endAngleRads_pathCommands$$3$$ += D.$DvtPathUtils$$.lineTo($startAngle$$4_startPointTop$$.x, $startAngle$$4_startPointTop$$.y)
};
D.$DvtPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtPieRenderUtils$$$$_generateInnerPoints$$($cx$$11$$, $cy$$12$$, $xpos$$, $ypos$$, $tilt$$5$$) {
  var $pointArray$$2$$ = [];
  $pointArray$$2$$.push({x:$cx$$11$$, y:$cy$$12$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$ + $tilt$$5$$});
  $pointArray$$2$$.push({x:$cx$$11$$, y:$cy$$12$$ + $tilt$$5$$});
  return $pointArray$$2$$
};
D.$DvtPieLabelInfo$$ = function $$DvtPieLabelInfo$$$() {
  this.$_slice$ = this.$_sliceLabel$ = null;
  this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
  this.$_hasFeeler$ = !1;
  this.$_minY$ = this.$_maxY$ = -1
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelInfo$$, D.$DvtObj$$, "DvtPieLabelInfo");
D.$DvtPieLabelInfo$$.prototype.$getAngle$ = (0,D.$JSCompiler_get$$)("$_angle$");
D.$DvtPieLabelInfo$$.prototype.$setAngle$ = (0,D.$JSCompiler_set$$)("$_angle$");
D.$DvtPieLabelInfo$$.prototype.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$DvtPieLabelInfo$$.prototype.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_StaticMethods_boundY$$ = function $$JSCompiler_StaticMethods_boundY$$$($JSCompiler_StaticMethods_boundY$self$$, $y$$66$$) {
  $JSCompiler_StaticMethods_boundY$self$$.$_minY$ <= $JSCompiler_StaticMethods_boundY$self$$.$_maxY$ && ($y$$66$$ = window.Math.max($y$$66$$, $JSCompiler_StaticMethods_boundY$self$$.$_minY$), $y$$66$$ = window.Math.min($y$$66$$, $JSCompiler_StaticMethods_boundY$self$$.$_maxY$));
  return $y$$66$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getPosition$ = (0,D.$JSCompiler_get$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setPosition$ = (0,D.$JSCompiler_set$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtPieLabelUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelUtils$$, D.$DvtObj$$, "DvtPieLabelUtils");
D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 1.04;
D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = 0.5;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
D.$DvtPieLabelUtils$$.$_NO_COLLISION$ = 0;
D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ = 1;
D.$DvtPieLabelUtils$$.$_ALL_COLLISION$ = 2;
D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$layoutLabelsAndFeelers$$($pie$$) {
  var $labelPosition$$2$$ = $pie$$.$getLabelPosition$();
  D.$DvtPieLabelUtils$$.$_layoutInsideLabels$($pie$$, "auto" == $labelPosition$$2$$);
  D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($pie$$)
};
D.$DvtPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtPieLabelUtils$$$$_layoutInsideLabels$$($pie$$1$$, $isHybrid$$) {
  for(var $slices$$6$$ = $pie$$1$$.$_slices$, $i$$225$$ = 0;$i$$225$$ < $slices$$6$$.length;$i$$225$$++) {
    var $slice$$12$$ = $slices$$6$$[$i$$225$$], $labelPosition$$3_stage$$6$$ = (0,D.$JSCompiler_StaticMethods_getSeriesLabelPosition$$)($pie$$1$$, $slice$$12$$.$getSeriesIndex$());
    if(!("none" == $labelPosition$$3_stage$$6$$ || "outsideSlice" == $labelPosition$$3_stage$$6$$)) {
      var $estimatedDims_midAngle_midPt$$1$$ = $slice$$12$$.$getAngleStart$() + $slice$$12$$.$getAngleExtent$() / 2, $ir$$5_x1$$21$$ = $slice$$12$$.$getInnerRadius$(), $center$$2_x2$$19$$ = $slice$$12$$.$getCenter$(), $offset$$17_posX_usableSpace$$ = 0, $minChars$$4_posY_y2$$13$$ = 0, $sliceLabel$$1$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$12$$, !0);
      1 == $slices$$6$$.length ? ($offset$$17_posX_usableSpace$$ = $center$$2_x2$$19$$.x, $minChars$$4_posY_y2$$13$$ = $center$$2_x2$$19$$.y) : ($offset$$17_posX_usableSpace$$ = window.Math.max(0.45, 0.65 - 0.45 * $ir$$5_x1$$21$$ / window.Math.max($slice$$12$$.$_radiusY$, 0.001)), $estimatedDims_midAngle_midPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($estimatedDims_midAngle_midPt$$1$$, $center$$2_x2$$19$$.x, $center$$2_x2$$19$$.y, $ir$$5_x1$$21$$ + ($slice$$12$$.$_radiusX$ - $ir$$5_x1$$21$$) * 
      $offset$$17_posX_usableSpace$$, $ir$$5_x1$$21$$ + ($slice$$12$$.$_radiusY$ - $ir$$5_x1$$21$$) * $offset$$17_posX_usableSpace$$), $offset$$17_posX_usableSpace$$ = $estimatedDims_midAngle_midPt$$1$$.x, $minChars$$4_posY_y2$$13$$ = $estimatedDims_midAngle_midPt$$1$$.y);
      $sliceLabel$$1$$.$setX$($offset$$17_posX_usableSpace$$);
      $sliceLabel$$1$$.$setY$($minChars$$4_posY_y2$$13$$);
      $sliceLabel$$1$$.$alignMiddle$();
      $sliceLabel$$1$$.$alignCenter$();
      for(var $estimatedDims_midAngle_midPt$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($sliceLabel$$1$$), $center$$2_x2$$19$$ = $ir$$5_x1$$21$$ = $offset$$17_posX_usableSpace$$, $y1$$14$$ = $minChars$$4_posY_y2$$13$$ - $estimatedDims_midAngle_midPt$$1$$.$h$ / 2, $minChars$$4_posY_y2$$13$$ = $minChars$$4_posY_y2$$13$$ + $estimatedDims_midAngle_midPt$$1$$.$h$ / 2;$slice$$12$$.contains($ir$$5_x1$$21$$, $y1$$14$$) && $slice$$12$$.contains($ir$$5_x1$$21$$, $minChars$$4_posY_y2$$13$$);) {
        $ir$$5_x1$$21$$--
      }
      for(;$slice$$12$$.contains($center$$2_x2$$19$$, $y1$$14$$) && $slice$$12$$.contains($center$$2_x2$$19$$, $minChars$$4_posY_y2$$13$$);) {
        $center$$2_x2$$19$$++
      }
      $ir$$5_x1$$21$$ = window.Math.ceil($ir$$5_x1$$21$$ + 3);
      $center$$2_x2$$19$$ = window.Math.floor($center$$2_x2$$19$$ - 3);
      $offset$$17_posX_usableSpace$$ = 2 * window.Math.min($offset$$17_posX_usableSpace$$ - $ir$$5_x1$$21$$, $center$$2_x2$$19$$ - $offset$$17_posX_usableSpace$$);
      $offset$$17_posX_usableSpace$$ < $estimatedDims_midAngle_midPt$$1$$.$w$ && ($sliceLabel$$1$$.$setX$(($ir$$5_x1$$21$$ + $center$$2_x2$$19$$) / 2), $offset$$17_posX_usableSpace$$ = $center$$2_x2$$19$$ - $ir$$5_x1$$21$$);
      $isHybrid$$ && "center" != $labelPosition$$3_stage$$6$$ ? $sliceLabel$$1$$.$getDimensions$().$w$ < $offset$$17_posX_usableSpace$$ ? $slice$$12$$.$setSliceLabel$($sliceLabel$$1$$) : $slice$$12$$.$setSliceLabel$(null) : ($labelPosition$$3_stage$$6$$ = $pie$$1$$.$getCtx$().$_stage$, $minChars$$4_posY_y2$$13$$ = !D.$DvtPieLabelUtils$$.$_isTextLabel$($pie$$1$$, $slice$$12$$) ? $sliceLabel$$1$$.$getTextString$().length : null, D.$DvtTextUtils$$.$fitText$($sliceLabel$$1$$, $offset$$17_posX_usableSpace$$, 
      $estimatedDims_midAngle_midPt$$1$$.$h$, $labelPosition$$3_stage$$6$$, $minChars$$4_posY_y2$$13$$) && ($labelPosition$$3_stage$$6$$.removeChild($sliceLabel$$1$$), $slice$$12$$.$setSliceLabel$($sliceLabel$$1$$)));
      null != $slice$$12$$.$_sliceLabel$ && (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($slice$$12$$)
    }
  }
};
D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($pie$$2$$) {
  var $leftLabels$$ = [], $alabels_rightLabels$$ = [], $alabels_rightLabels$$ = D.$DvtPieLabelUtils$$.$_generateInitialLayout$($pie$$2$$), $leftLabels$$ = $alabels_rightLabels$$[0], $alabels_rightLabels$$ = $alabels_rightLabels$$[1], $leftColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$2$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $rightColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$2$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
  $leftColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && $rightColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$2$$, $leftLabels$$, !0, !0, !0);
  $leftColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && $rightColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$2$$, $alabels_rightLabels$$, !1, !0, !0);
  D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$2$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
  D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$2$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
};
D.$DvtPieLabelUtils$$.$_createLabel$ = function $$DvtPieLabelUtils$$$$_createLabel$$($slice$$13$$, $isInside$$) {
  var $dataItem$$38_pieChart$$4_style$$52$$ = $slice$$13$$.$_pieChart$, $context$$62_sliceLabel$$2$$ = $dataItem$$38_pieChart$$4_style$$52$$.$getCtx$(), $context$$62_sliceLabel$$2$$ = $isInside$$ ? new D.$DvtOutputText$$($context$$62_sliceLabel$$2$$) : new D.$DvtMultilineText$$($context$$62_sliceLabel$$2$$), $labelStr$$1_styleDefaults$$3$$ = $dataItem$$38_pieChart$$4_style$$52$$.$getOptions$().styleDefaults, $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = [$labelStr$$1_styleDefaults$$3$$.dataLabelStyle, 
  new D.$DvtCSSStyle$$($labelStr$$1_styleDefaults$$3$$.sliceLabelStyle)];
  ($dataItem$$38_pieChart$$4_style$$52$$ = D.$DvtChartDataUtils$$.$getDataItem$($dataItem$$38_pieChart$$4_style$$52$$.$chart$, $slice$$13$$.$getSeriesIndex$(), 0)) && $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$.push(new D.$DvtCSSStyle$$($dataItem$$38_pieChart$$4_style$$52$$.labelStyle));
  $dataItem$$38_pieChart$$4_style$$52$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($bColorDefined_contrastingColor$$1_labelStyleArray$$2$$);
  $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = null != $dataItem$$38_pieChart$$4_style$$52$$.$getStyle$("color");
  $isInside$$ && (!$bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ || !0 === D.$DvtAgent$_highContrast$$) ? ($bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($slice$$13$$.$getFillColor$()), $dataItem$$38_pieChart$$4_style$$52$$.$setStyle$("color", $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$)) : $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ || $dataItem$$38_pieChart$$4_style$$52$$.$setStyle$("color", $labelStr$$1_styleDefaults$$3$$._defaultSliceLabelColor);
  $context$$62_sliceLabel$$2$$.$setCSSStyle$($dataItem$$38_pieChart$$4_style$$52$$);
  $labelStr$$1_styleDefaults$$3$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$($slice$$13$$, $labelStr$$1_styleDefaults$$3$$.sliceLabelType);
  $context$$62_sliceLabel$$2$$.$setTextString$($labelStr$$1_styleDefaults$$3$$);
  $slice$$13$$.$_sliceLabelString$ = $labelStr$$1_styleDefaults$$3$$;
  return $context$$62_sliceLabel$$2$$
};
D.$DvtPieLabelUtils$$.$createPieCenterLabel$ = function $$DvtPieLabelUtils$$$$createPieCenterLabel$$($pieChart$$5$$) {
  var $pieCenterLabel_textDim$$6$$ = $pieChart$$5$$.$getOptions$().pieCenterLabel, $centerLabel_dataLabelPosition$$1$$ = $pieChart$$5$$.$getLabelPosition$();
  if($pieCenterLabel_textDim$$6$$) {
    var $centerStyle$$ = $pieCenterLabel_textDim$$6$$.style, $availSpace$$82_ir$$6_radiusX$$2$$ = $pieChart$$5$$.$_radiusX$, $availSpace$$82_ir$$6_radiusX$$2$$ = 0 < $pieChart$$5$$.$getInnerRadius$() ? $pieChart$$5$$.$getInnerRadius$() : "outsideSlice" == $centerLabel_dataLabelPosition$$1$$ ? 0.9 * $availSpace$$82_ir$$6_radiusX$$2$$ : 0.5 * $availSpace$$82_ir$$6_radiusX$$2$$, $center$$3$$ = $pieChart$$5$$.$getCenter$(), $centerLabel_dataLabelPosition$$1$$ = new D.$DvtMultilineText$$($pieChart$$5$$.$getCtx$()), 
    $availSpace$$82_ir$$6_radiusX$$2$$ = new D.$DvtRectangle$$($center$$3$$.x, $center$$3$$.y, $availSpace$$82_ir$$6_radiusX$$2$$ * window.Math.sqrt(2), $availSpace$$82_ir$$6_radiusX$$2$$ * window.Math.sqrt(2));
    $centerLabel_dataLabelPosition$$1$$.$setCSSStyle$(new D.$DvtCSSStyle$$($centerStyle$$));
    $centerLabel_dataLabelPosition$$1$$.$setTextString$($pieCenterLabel_textDim$$6$$.text);
    D.$DvtTextUtils$$.$fitText$($centerLabel_dataLabelPosition$$1$$, $availSpace$$82_ir$$6_radiusX$$2$$.$w$, $availSpace$$82_ir$$6_radiusX$$2$$.$h$, $pieChart$$5$$) && ($pieCenterLabel_textDim$$6$$ = $centerLabel_dataLabelPosition$$1$$.$getDimensions$(), $centerLabel_dataLabelPosition$$1$$.$setY$($availSpace$$82_ir$$6_radiusX$$2$$.y - $pieCenterLabel_textDim$$6$$.$h$ / 2), $centerLabel_dataLabelPosition$$1$$.$setX$($availSpace$$82_ir$$6_radiusX$$2$$.x), $centerLabel_dataLabelPosition$$1$$.$alignCenter$(), 
    $centerLabel_dataLabelPosition$$1$$.$isTruncated$() && $pieChart$$5$$.$chart$.$getEventManager$().$associate$($centerLabel_dataLabelPosition$$1$$, new D.$DvtSimpleObjPeer$$($centerLabel_dataLabelPosition$$1$$.$getTextString$())), $pieChart$$5$$.$addChild$($centerLabel_dataLabelPosition$$1$$))
  }
};
D.$DvtPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtPieLabelUtils$$$$generateSliceLabelString$$($slice$$14$$, $labelType$$) {
  var $dataContext$$5_functionLabel$$, $defaultLabel$$3$$ = D.$DvtPieLabelUtils$$.$getDefaultSliceLabelString$($slice$$14$$, $labelType$$), $dataLabelFunc$$1$$ = $slice$$14$$.$_pieChart$.$getOptions$().dataLabel;
  $dataLabelFunc$$1$$ && ($dataContext$$5_functionLabel$$ = D.$DvtChartDataUtils$$.$getDataContext$($slice$$14$$.$_chart$, $slice$$14$$.$getSeriesIndex$(), 0), $dataContext$$5_functionLabel$$.label = $defaultLabel$$3$$, $dataContext$$5_functionLabel$$ = $dataLabelFunc$$1$$($dataContext$$5_functionLabel$$));
  return $dataContext$$5_functionLabel$$ ? $dataContext$$5_functionLabel$$ : $defaultLabel$$3$$
};
D.$DvtPieLabelUtils$$.$getDefaultSliceLabelString$ = function $$DvtPieLabelUtils$$$$getDefaultSliceLabelString$$($slice$$15$$, $labelType$$1$$) {
  var $pieChart$$6_svalue$$ = $slice$$15$$.$_pieChart$, $customLabel_spercent_totalValue$$2$$ = $slice$$15$$.$_customLabel$, $stext_valueFormat$$5$$ = D.$DvtChartTooltipUtils$$.$getValueFormat$($pieChart$$6_svalue$$.$chart$, "label");
  if(null != $customLabel_spercent_totalValue$$2$$) {
    return"number" == typeof $customLabel_spercent_totalValue$$2$$ ? D.$DvtChartTooltipUtils$$.$formatValue$($pieChart$$6_svalue$$.$getCtx$(), $stext_valueFormat$$5$$, $customLabel_spercent_totalValue$$2$$) : $customLabel_spercent_totalValue$$2$$
  }
  var $value$$111$$ = $slice$$15$$.getValue(), $customLabel_spercent_totalValue$$2$$ = $pieChart$$6_svalue$$.$getTotalValue$(), $percentage$$2$$ = 0 == $customLabel_spercent_totalValue$$2$$ ? 0 : $value$$111$$ / $customLabel_spercent_totalValue$$2$$, $decDigits$$ = 0.01 > $percentage$$2$$ ? 3 : 0.1 > $percentage$$2$$ ? 2 : 1 > $percentage$$2$$ ? 1 : 0;
  150 > 2 * $pieChart$$6_svalue$$.$_radiusX$ && ($decDigits$$ = window.Math.max($decDigits$$ - 1, 0));
  var $percentConverter$$ = (0,D.$JSCompiler_StaticMethods_getNumberConverter$$)($pieChart$$6_svalue$$.$getCtx$(), {style:"percent", maximumFractionDigits:$decDigits$$, minimumFractionDigits:$decDigits$$}), $customLabel_spercent_totalValue$$2$$ = "";
  $percentConverter$$ && $percentConverter$$.getAsString ? $customLabel_spercent_totalValue$$2$$ = $percentConverter$$.getAsString($percentage$$2$$) : $percentConverter$$ && $percentConverter$$.format ? $customLabel_spercent_totalValue$$2$$ = $percentConverter$$.format($percentage$$2$$) : ($percentage$$2$$ *= 100, $customLabel_spercent_totalValue$$2$$ = D.$DvtChartTooltipUtils$$.$formatValue$($pieChart$$6_svalue$$.$getCtx$(), {}, $percentage$$2$$, null, null, 100 == $percentage$$2$$ ? 1 : window.Math.pow(10, 
  -1 * $decDigits$$)) + "%");
  $pieChart$$6_svalue$$ = D.$DvtChartTooltipUtils$$.$formatValue$($pieChart$$6_svalue$$.$getCtx$(), $stext_valueFormat$$5$$, $value$$111$$);
  $stext_valueFormat$$5$$ = $slice$$15$$.$getSeriesLabel$();
  return"percent" == $labelType$$1$$ ? $customLabel_spercent_totalValue$$2$$ : "number" == $labelType$$1$$ ? $pieChart$$6_svalue$$ : "text" == $labelType$$1$$ ? $stext_valueFormat$$5$$ : "textAndPercent" == $labelType$$1$$ ? $stext_valueFormat$$5$$ + ", " + $customLabel_spercent_totalValue$$2$$ : null
};
D.$DvtPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtPieLabelUtils$$$$_refineInitialLayout$$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$) {
  if($labelInfoArray$$ && 0 < $labelInfoArray$$.length) {
    var $lastY$$ = $pie$$3$$.$_frame$.y, $collisionTop$$ = !1, $collisionCentral$$ = !1, $collisionBottom$$ = !1, $labelBottom$$ = 0, $collide_labelInfo$$, $bottomQuarter$$ = !1, $prevBottomQuarter$$ = $bottomQuarter$$;
    $collide_labelInfo$$ = !1;
    $isLeftSideLabels_side$$ = $isLeftSideLabels_side$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
    for(var $i$$226$$ = 0;$i$$226$$ < $labelInfoArray$$.length;$i$$226$$++) {
      $collide_labelInfo$$ = $labelInfoArray$$[$i$$226$$], $prevBottomQuarter$$ = $bottomQuarter$$, 90 < $collide_labelInfo$$.$getPosition$() && ($bottomQuarter$$ = !0), $labelBottom$$ = $collide_labelInfo$$.$getY$() + $collide_labelInfo$$.getHeight(), ($collide_labelInfo$$ = $lastY$$ - $collide_labelInfo$$.$getY$() > D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$) && ($bottomQuarter$$ ? $bottomQuarter$$ && !$prevBottomQuarter$$ ? $collisionCentral$$ = !0 : $collisionBottom$$ = !0 : $collisionTop$$ = 
      !0), $labelBottom$$ > $lastY$$ && ($lastY$$ = $labelBottom$$)
    }
    return $collisionTop$$ && $collisionBottom$$ || $collisionCentral$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$, !0, !0), D.$DvtPieLabelUtils$$.$_ALL_COLLISION$) : $collisionTop$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$, !0, !1), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : $collisionBottom$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$3$$, $labelInfoArray$$, $isLeftSideLabels_side$$, 
    !1, !0), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : D.$DvtPieLabelUtils$$.$_NO_COLLISION$
  }
};
D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_setLabelsAndFeelers$$($pie$$4$$, $alabels$$1$$, $i$$227_side$$1$$) {
  if(!(null == $alabels$$1$$ || 0 >= $alabels$$1$$.length)) {
    var $excessLength_slice$$16$$, $sliceLabel$$3$$, $labelInfo$$1$$, $isLeftSide$$ = $i$$227_side$$1$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $excessWidth$$ = window.Infinity;
    for($i$$227_side$$1$$ = 0;$i$$227_side$$1$$ < $alabels$$1$$.length;$i$$227_side$$1$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$227_side$$1$$], $excessLength_slice$$16$$ = $labelInfo$$1$$.$_slice$, $labelInfo$$1$$.$_hasFeeler$ ? ($excessLength_slice$$16$$ = D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$16$$, $isLeftSide$$), $excessWidth$$ = window.Math.min($excessWidth$$, $excessLength_slice$$16$$)) : (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$16$$)
    }
    for($i$$227_side$$1$$ = 0;$i$$227_side$$1$$ < $alabels$$1$$.length;$i$$227_side$$1$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$227_side$$1$$];
      $excessLength_slice$$16$$ = $labelInfo$$1$$.$_slice$;
      $sliceLabel$$3$$ = $labelInfo$$1$$.$_sliceLabel$;
      $labelInfo$$1$$.$_hasFeeler$ && ($isLeftSide$$ ? $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() + $excessWidth$$) : $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() - $excessWidth$$), D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$16$$, $isLeftSide$$), (0,D.$JSCompiler_StaticMethods_setMaxLines$$)($sliceLabel$$3$$, 1));
      $sliceLabel$$3$$.$setY$($labelInfo$$1$$.$getY$());
      $sliceLabel$$3$$.$setX$($labelInfo$$1$$.$getX$());
      var $frame$$ = $pie$$4$$.$_frame$;
      $labelInfo$$1$$.$getY$() < $frame$$.y || $labelInfo$$1$$.$getY$() + $labelInfo$$1$$.getHeight() > $frame$$.y + $frame$$.$h$ ? ($excessLength_slice$$16$$.$setSliceLabel$(null), (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$16$$)) : (D.$DvtPieLabelUtils$$.$_truncateSliceLabel$($pie$$4$$, $excessLength_slice$$16$$, $labelInfo$$1$$, $isLeftSide$$), 0 == $labelInfo$$1$$.getWidth() || 0 == $labelInfo$$1$$.getHeight() ? ($excessLength_slice$$16$$.$setSliceLabel$(null), 
      (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$16$$)) : $excessLength_slice$$16$$.$setSliceLabel$($sliceLabel$$3$$))
    }
  }
};
D.$DvtPieLabelUtils$$.$_calculateFeeler$ = function $$DvtPieLabelUtils$$$$_calculateFeeler$$($labelInfo$$2_pa$$, $slice$$17$$, $isLeft$$1$$) {
  var $endPt$$1_targetX$$ = $labelInfo$$2_pa$$.$getX$(), $radFeelerAngle_targetY_tilt$$1$$ = $labelInfo$$2_pa$$.$getY$() + $labelInfo$$2_pa$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $minHorizLength$$ = D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $slice$$17$$.$_radiusX$, $midPt$$2_midX$$;
  $isLeft$$1$$ ? ($endPt$$1_targetX$$ += D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ + $minHorizLength$$) : ($endPt$$1_targetX$$ -= D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ - $minHorizLength$$);
  var $ma_startPt$$1$$ = {x:0, y:0};
  $midPt$$2_midX$$ = {x:$midPt$$2_midX$$, y:$radFeelerAngle_targetY_tilt$$1$$};
  $endPt$$1_targetX$$ = {x:$endPt$$1_targetX$$, y:$radFeelerAngle_targetY_tilt$$1$$};
  $ma_startPt$$1$$ = $labelInfo$$2_pa$$.$getAngle$();
  $radFeelerAngle_targetY_tilt$$1$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma_startPt$$1$$, $slice$$17$$.getDepth());
  $ma_startPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma_startPt$$1$$, $slice$$17$$.$getCenter$().x, $slice$$17$$.$getCenter$().y + $radFeelerAngle_targetY_tilt$$1$$, $slice$$17$$.$_radiusX$, $slice$$17$$.$_radiusY$);
  $labelInfo$$2_pa$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$2_pa$$.$getPosition$());
  var $radFeelerAngle_targetY_tilt$$1$$ = window.Math.abs(window.Math.atan2($midPt$$2_midX$$.x - $ma_startPt$$1$$.x, $ma_startPt$$1$$.y - $midPt$$2_midX$$.y)), $horizOffset$$ = ($ma_startPt$$1$$.y - $midPt$$2_midX$$.y) * window.Math.tan($labelInfo$$2_pa$$);
  if($labelInfo$$2_pa$$ > window.Math.PI / 2 && $radFeelerAngle_targetY_tilt$$1$$ > window.Math.PI / 2 && $radFeelerAngle_targetY_tilt$$1$$ < $labelInfo$$2_pa$$ || $labelInfo$$2_pa$$ < window.Math.PI / 2 && $radFeelerAngle_targetY_tilt$$1$$ < window.Math.PI / 2 && $radFeelerAngle_targetY_tilt$$1$$ > $labelInfo$$2_pa$$) {
    $midPt$$2_midX$$.x = $isLeft$$1$$ ? $ma_startPt$$1$$.x - $horizOffset$$ : $ma_startPt$$1$$.x + $horizOffset$$
  }
  $slice$$17$$.$_outsideFeelerStart$ = $ma_startPt$$1$$;
  $slice$$17$$.$_outsideFeelerMid$ = $midPt$$2_midX$$;
  $slice$$17$$.$_outsideFeelerEnd$ = $endPt$$1_targetX$$;
  $slice$$17$$.$_hasFeeler$ = !0;
  return window.Math.abs($endPt$$1_targetX$$.x - $midPt$$2_midX$$.x) - $minHorizLength$$
};
D.$DvtPieLabelUtils$$.$_adjustForDepth$ = function $$DvtPieLabelUtils$$$$_adjustForDepth$$($ma$$1$$, $pieDepth$$) {
  var $depth$$5$$ = 0;
  189 < $ma$$1$$ && 351 > $ma$$1$$ && ($depth$$5$$ = $pieDepth$$);
  return $depth$$5$$
};
D.$DvtPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtPieLabelUtils$$$$_getMiddleLabel$$($alabels$$2$$) {
  for(var $bestAngle$$ = 91, $bestIndex$$ = -1, $i$$228$$ = 0;$i$$228$$ < $alabels$$2$$.length;$i$$228$$++) {
    var $pa$$1$$ = $alabels$$2$$[$i$$228$$].$getPosition$();
    window.Math.abs($pa$$1$$ - 90) < $bestAngle$$ && ($bestAngle$$ = window.Math.abs($pa$$1$$ - 90), $bestIndex$$ = $i$$228$$)
  }
  return $bestIndex$$
};
D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtPieLabelUtils$$$$_setOptimalLabelPosition$$($optimalY_pie$$5$$, $labelInfo$$3$$, $b$$9_heightFromCenter_vertX$$) {
  $labelInfo$$3$$.$setX$($b$$9_heightFromCenter_vertX$$);
  $b$$9_heightFromCenter_vertX$$ = $optimalY_pie$$5$$.$_radiusY$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$);
  var $angleInRad_tilt$$2$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$3$$.$getPosition$());
  $b$$9_heightFromCenter_vertX$$ *= window.Math.cos($angleInRad_tilt$$2$$);
  $angleInRad_tilt$$2$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($labelInfo$$3$$.$getAngle$(), $optimalY_pie$$5$$.getDepth());
  $optimalY_pie$$5$$ = $optimalY_pie$$5$$.$getCenter$().y - $b$$9_heightFromCenter_vertX$$ - $labelInfo$$3$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $angleInRad_tilt$$2$$;
  $labelInfo$$3$$.$setY$((0,D.$JSCompiler_StaticMethods_boundY$$)($labelInfo$$3$$, $optimalY_pie$$5$$))
};
D.$DvtPieLabelUtils$$.$_getRadFeelerAngle$ = function $$DvtPieLabelUtils$$$$_getRadFeelerAngle$$($labelInfo$$4_ma$$2$$, $x$$89$$, $y$$68$$) {
  var $slice$$18_startPt$$2$$ = $labelInfo$$4_ma$$2$$.$_slice$, $center$$4$$ = $slice$$18_startPt$$2$$.$getCenter$();
  $labelInfo$$4_ma$$2$$ = $labelInfo$$4_ma$$2$$.$getAngle$();
  var $tilt$$3$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($labelInfo$$4_ma$$2$$, $slice$$18_startPt$$2$$.getDepth()), $slice$$18_startPt$$2$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($labelInfo$$4_ma$$2$$, $center$$4$$.x, $center$$4$$.y + $tilt$$3$$, $slice$$18_startPt$$2$$.$_radiusX$, $slice$$18_startPt$$2$$.$_radiusY$);
  return window.Math.atan2(window.Math.abs($x$$89$$ - $slice$$18_startPt$$2$$.x), $slice$$18_startPt$$2$$.y - $y$$68$$)
};
D.$DvtPieLabelUtils$$.$_columnLabels$ = function $$DvtPieLabelUtils$$$$_columnLabels$$($pie$$6$$, $alabels$$3$$, $i$$229_isLeft$$3_startLabel$$, $isTop_optimalY$$1$$, $isBottom$$) {
  var $frame$$1_vertX$$1$$ = $pie$$6$$.$_frame$, $minY$$2_startIndex$$17$$ = $frame$$1_vertX$$1$$.y, $highestY_maxY$$2$$ = $frame$$1_vertX$$1$$.y + $frame$$1_vertX$$1$$.$h$, $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$, $lowestY_pa$$2$$ = 0, $frame$$1_vertX$$1$$ = $pie$$6$$.$getCenter$().x, $feelerX_labelHeight$$3$$;
  $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ = $pie$$6$$.$_radiusX$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
  $i$$229_isLeft$$3_startLabel$$ ? ($frame$$1_vertX$$1$$ -= $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$, $feelerX_labelHeight$$3$$ = $frame$$1_vertX$$1$$ + $pie$$6$$.$_radiusX$ * D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$) : ($frame$$1_vertX$$1$$ += $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$, $feelerX_labelHeight$$3$$ = $frame$$1_vertX$$1$$ - $pie$$6$$.$_radiusX$ * D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
  for($i$$229_isLeft$$3_startLabel$$ = 0;$i$$229_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$229_isLeft$$3_startLabel$$++) {
    $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ = $alabels$$3$$[$i$$229_isLeft$$3_startLabel$$], $lowestY_pa$$2$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.$getPosition$()), $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ = D.$DvtPieLabelUtils$$.$_getRadFeelerAngle$($labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$, $feelerX_labelHeight$$3$$, $minY$$2_startIndex$$17$$), $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ - $lowestY_pa$$2$$ > 0.45 * window.Math.PI ? 
    ($alabels$$3$$.splice($i$$229_isLeft$$3_startLabel$$, 1), $i$$229_isLeft$$3_startLabel$$--) : ($alabels$$3$$[$i$$229_isLeft$$3_startLabel$$].$_minY$ = $minY$$2_startIndex$$17$$, $minY$$2_startIndex$$17$$ += $alabels$$3$$[$i$$229_isLeft$$3_startLabel$$].getHeight())
  }
  for($i$$229_isLeft$$3_startLabel$$ = $alabels$$3$$.length - 1;0 <= $i$$229_isLeft$$3_startLabel$$;$i$$229_isLeft$$3_startLabel$$--) {
    $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ = $alabels$$3$$[$i$$229_isLeft$$3_startLabel$$], $lowestY_pa$$2$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.$getPosition$()), $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ = D.$DvtPieLabelUtils$$.$_getRadFeelerAngle$($labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$, $feelerX_labelHeight$$3$$, $highestY_maxY$$2$$), $lowestY_pa$$2$$ - $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ > 0.45 * window.Math.PI ? $alabels$$3$$.splice($i$$229_isLeft$$3_startLabel$$, 
    1) : ($highestY_maxY$$2$$ -= $alabels$$3$$[$i$$229_isLeft$$3_startLabel$$].getHeight(), $alabels$$3$$[$i$$229_isLeft$$3_startLabel$$].$_maxY$ = $highestY_maxY$$2$$)
  }
  $minY$$2_startIndex$$17$$ = D.$DvtPieLabelUtils$$.$_getMiddleLabel$($alabels$$3$$);
  $i$$229_isLeft$$3_startLabel$$ = $alabels$$3$$[$minY$$2_startIndex$$17$$];
  D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $i$$229_isLeft$$3_startLabel$$, $frame$$1_vertX$$1$$);
  $i$$229_isLeft$$3_startLabel$$.$_hasFeeler$ = !0;
  $isTop_optimalY$$1$$ && !$isBottom$$ && $i$$229_isLeft$$3_startLabel$$.$_minY$ + $i$$229_isLeft$$3_startLabel$$.getHeight() > $pie$$6$$.$getCenter$().y && ($isBottom$$ = !0);
  $isBottom$$ && !$isTop_optimalY$$1$$ && $i$$229_isLeft$$3_startLabel$$.$_maxY$ < $pie$$6$$.$getCenter$().y && ($isTop_optimalY$$1$$ = !0);
  $highestY_maxY$$2$$ = $i$$229_isLeft$$3_startLabel$$.$getY$();
  $lowestY_pa$$2$$ = $i$$229_isLeft$$3_startLabel$$.$getY$() + $i$$229_isLeft$$3_startLabel$$.getHeight();
  if($isTop_optimalY$$1$$) {
    for($i$$229_isLeft$$3_startLabel$$ = $minY$$2_startIndex$$17$$ - 1;0 <= $i$$229_isLeft$$3_startLabel$$;$i$$229_isLeft$$3_startLabel$$--) {
      $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ = $alabels$$3$$[$i$$229_isLeft$$3_startLabel$$], $feelerX_labelHeight$$3$$ = $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$, $frame$$1_vertX$$1$$), $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.$_hasFeeler$ = !0, $isTop_optimalY$$1$$ = $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.$getY$(), $highestY_maxY$$2$$ = $isTop_optimalY$$1$$ + 
      $feelerX_labelHeight$$3$$ < $highestY_maxY$$2$$ ? $isTop_optimalY$$1$$ : $highestY_maxY$$2$$ - $feelerX_labelHeight$$3$$, $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.$setY$($highestY_maxY$$2$$)
    }
  }
  if($isBottom$$) {
    for($i$$229_isLeft$$3_startLabel$$ = $minY$$2_startIndex$$17$$ + 1;$i$$229_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$229_isLeft$$3_startLabel$$++) {
      $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$ = $alabels$$3$$[$i$$229_isLeft$$3_startLabel$$], $feelerX_labelHeight$$3$$ = $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$6$$, $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$, $frame$$1_vertX$$1$$), $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.$_hasFeeler$ = !0, $isTop_optimalY$$1$$ = $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.$getY$(), $lowestY_pa$$2$$ = $isTop_optimalY$$1$$ > 
      $lowestY_pa$$2$$ ? $isTop_optimalY$$1$$ + $feelerX_labelHeight$$3$$ : $lowestY_pa$$2$$ + $feelerX_labelHeight$$3$$, $labelInfo$$5_minFeelerDist_radFeelerAngle$$1$$.$setY$($lowestY_pa$$2$$ - $feelerX_labelHeight$$3$$)
    }
  }
};
D.$DvtPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtPieLabelUtils$$$$_truncateSliceLabel$$($pie$$7_tmDimPt$$, $slice$$19$$, $labelInfo$$6$$, $isLeft$$4$$) {
  var $sliceLabel$$4$$ = $labelInfo$$6$$.$_sliceLabel$, $frame$$2_style$$53$$ = $sliceLabel$$4$$.$getCSSStyle$(), $maxLabelWidth$$2_numChildren$$5$$ = 0, $maxLabelWidth$$2_numChildren$$5$$ = $pie$$7_tmDimPt$$.$getNumChildren$(), $removeTextArea$$ = !1;
  $pie$$7_tmDimPt$$.contains($sliceLabel$$4$$) || ($pie$$7_tmDimPt$$.$addChild$($sliceLabel$$4$$), $removeTextArea$$ = !0);
  $sliceLabel$$4$$.$setCSSStyle$($frame$$2_style$$53$$);
  $sliceLabel$$4$$.$setTextString$($slice$$19$$.$_sliceLabelString$);
  $removeTextArea$$ && $pie$$7_tmDimPt$$.$removeChildAt$($maxLabelWidth$$2_numChildren$$5$$);
  $frame$$2_style$$53$$ = $pie$$7_tmDimPt$$.$_frame$;
  $maxLabelWidth$$2_numChildren$$5$$ = $isLeft$$4$$ ? $labelInfo$$6$$.$getX$() - $frame$$2_style$$53$$.x : $frame$$2_style$$53$$.x + $frame$$2_style$$53$$.$w$ - $labelInfo$$6$$.$getX$();
  $pie$$7_tmDimPt$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$7_tmDimPt$$, $slice$$19$$, $sliceLabel$$4$$, $maxLabelWidth$$2_numChildren$$5$$, $labelInfo$$6$$.$_initialNumLines$);
  $labelInfo$$6$$.$setWidth$($pie$$7_tmDimPt$$.x);
  $labelInfo$$6$$.getHeight() != $pie$$7_tmDimPt$$.y && $labelInfo$$6$$.$setHeight$($pie$$7_tmDimPt$$.y)
};
D.$DvtPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtPieLabelUtils$$$$_generateInitialLayout$$($pie$$8$$) {
  for(var $arArrays$$ = (0,window.Array)(2), $leftLabels$$1$$ = [], $rightLabels$$1$$ = [], $slices$$7$$ = $pie$$8$$.$_slices$, $frame$$3$$ = $pie$$8$$.$_frame$, $i$$230$$ = 0;$i$$230$$ < $slices$$7$$.length;$i$$230$$++) {
    var $slice$$20$$ = $slices$$7$$[$i$$230$$], $labelPosition$$4_s_label$$ = (0,D.$JSCompiler_StaticMethods_getSeriesLabelPosition$$)($pie$$8$$, $slice$$20$$.$getSeriesIndex$());
    if(!(null != $slice$$20$$.$_sliceLabel$ || "none" == $labelPosition$$4_s_label$$ || "center" == $labelPosition$$4_s_label$$)) {
      var $labelPosition$$4_s_label$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$20$$, !1), $ma$$3$$ = $slice$$20$$.$getAngleStart$() + $slice$$20$$.$getAngleExtent$() / 2;
      360 < $ma$$3$$ && ($ma$$3$$ -= 360);
      0 > $ma$$3$$ && ($ma$$3$$ += 360);
      var $labelPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma$$3$$, $pie$$8$$.$getCenter$().x, $pie$$8$$.$getCenter$().y, $pie$$8$$.$_radiusX$ * D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $pie$$8$$.$_radiusY$ * D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$), $tmDimPt$$1$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$8$$, $slice$$20$$, $labelPosition$$4_s_label$$, 90 <= $ma$$3$$ && 270 > $ma$$3$$ ? $labelPt$$.x - $frame$$3$$.x : $frame$$3$$.x + $frame$$3$$.$w$ - $labelPt$$.x, 
      D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$);
      165 > $ma$$3$$ && 15 < $ma$$3$$ ? $labelPt$$.y -= 1 * $tmDimPt$$1$$.y : 15 > $ma$$3$$ || 345 < $ma$$3$$ ? ($labelPt$$.y -= 0.5 * $tmDimPt$$1$$.y, $labelPt$$.x += 0.2 * $tmDimPt$$1$$.y) : 165 < $ma$$3$$ && 195 > $ma$$3$$ && ($labelPt$$.y -= 0.5 * $tmDimPt$$1$$.y, $labelPt$$.x -= 0.2 * $tmDimPt$$1$$.y);
      var $pa$$3_tilt$$4$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma$$3$$, $pie$$8$$.getDepth());
      $labelPt$$.y += $pa$$3_tilt$$4$$;
      1 == $slices$$7$$.length && ($labelPt$$.x -= $tmDimPt$$1$$.x / 2);
      $labelPt$$.y < $frame$$3$$.y || $labelPt$$.y + $tmDimPt$$1$$.y > $frame$$3$$.y + $frame$$3$$.$h$ || (90 <= $ma$$3$$ && 270 > $ma$$3$$ ? ($labelPosition$$4_s_label$$.$alignRight$(), $pa$$3_tilt$$4$$ = $ma$$3$$ - 90, D.$DvtPieLabelUtils$$.$_createLabelInfo$($slice$$20$$, $labelPosition$$4_s_label$$, $ma$$3$$, $pa$$3_tilt$$4$$, $tmDimPt$$1$$, $labelPt$$, $leftLabels$$1$$)) : ($pa$$3_tilt$$4$$ = 90 >= $ma$$3$$ ? window.Math.abs(90 - $ma$$3$$) : 180 - ($ma$$3$$ - 270), D.$DvtPieLabelUtils$$.$_createLabelInfo$($slice$$20$$, 
      $labelPosition$$4_s_label$$, $ma$$3$$, $pa$$3_tilt$$4$$, $tmDimPt$$1$$, $labelPt$$, $rightLabels$$1$$)))
    }
  }
  $arArrays$$[0] = $leftLabels$$1$$;
  $arArrays$$[1] = $rightLabels$$1$$;
  return $arArrays$$
};
D.$DvtPieLabelUtils$$.$_createLabelInfo$ = function $$DvtPieLabelUtils$$$$_createLabelInfo$$($slice$$21$$, $sliceLabel$$5$$, $ma$$4$$, $pa$$4$$, $tmDimPt$$2$$, $labelPt$$1$$, $labelInfoArray$$1$$) {
  for(var $insertPos$$ = -1, $labelInfo$$7$$, $j$$45$$ = 0;$j$$45$$ < $labelInfoArray$$1$$.length;$j$$45$$++) {
    if($labelInfo$$7$$ = $labelInfoArray$$1$$[$j$$45$$], $labelInfo$$7$$.$getPosition$() > $pa$$4$$) {
      $insertPos$$ = $j$$45$$;
      break
    }
  }
  -1 == $insertPos$$ && ($insertPos$$ = $labelInfoArray$$1$$.length);
  $labelInfo$$7$$ = new D.$DvtPieLabelInfo$$;
  $labelInfo$$7$$.$setPosition$($pa$$4$$);
  $labelInfo$$7$$.$setAngle$($ma$$4$$);
  $labelInfo$$7$$.$setSliceLabel$($sliceLabel$$5$$);
  $labelInfo$$7$$.$_slice$ = $slice$$21$$;
  $labelInfo$$7$$.$setWidth$($tmDimPt$$2$$.x);
  $labelInfo$$7$$.$setHeight$($tmDimPt$$2$$.y);
  $labelInfo$$7$$.$setX$($labelPt$$1$$.x);
  $labelInfo$$7$$.$setY$($labelPt$$1$$.y);
  $labelInfoArray$$1$$.splice($insertPos$$, 0, $labelInfo$$7$$)
};
D.$DvtPieLabelUtils$$.$_getTextDimension$ = function $$DvtPieLabelUtils$$$$_getTextDimension$$($pieChart$$7$$, $minChars$$5_slice$$22$$, $sliceLabel$$6$$, $dimensions$$1_maxWidth$$6$$, $maxLines$$) {
  (0,D.$JSCompiler_StaticMethods_setMaxLines$$)($sliceLabel$$6$$, $maxLines$$);
  $minChars$$5_slice$$22$$ = !D.$DvtPieLabelUtils$$.$_isTextLabel$($pieChart$$7$$, $minChars$$5_slice$$22$$) ? $sliceLabel$$6$$.$getTextString$().length : null;
  return D.$DvtTextUtils$$.$fitText$($sliceLabel$$6$$, $dimensions$$1_maxWidth$$6$$, window.Infinity, $pieChart$$7$$, $minChars$$5_slice$$22$$) ? ($pieChart$$7$$.$addChild$($sliceLabel$$6$$), $dimensions$$1_maxWidth$$6$$ = $sliceLabel$$6$$.$getDimensions$(), $pieChart$$7$$.removeChild($sliceLabel$$6$$), {x:$dimensions$$1_maxWidth$$6$$.$w$, y:$dimensions$$1_maxWidth$$6$$.$h$}) : {x:0, y:0}
};
D.$DvtPieLabelUtils$$.$_isTextLabel$ = function $$DvtPieLabelUtils$$$$_isTextLabel$$($pie$$9$$, $slice$$23$$) {
  var $customLabel$$1$$ = $slice$$23$$.$_customLabel$;
  return-1 != $pie$$9$$.$getOptions$().styleDefaults.sliceLabelType.indexOf("text") || null != $customLabel$$1$$ && "number" != typeof $customLabel$$1$$
};
D.$DvtChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRenderer$$, D.$DvtObj$$, "DvtChartRenderer");
D.$DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
D.$DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
D.$DvtChartRenderer$$.$_BUTTON_OPACITY$ = 0.8;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = 0.05;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = 0.2;
D.$DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($chart$$45$$, $container$$25$$, $availSpace$$29$$) {
  D.$DvtChartRenderer$$.$_renderBackground$($chart$$45$$, $container$$25$$, $availSpace$$29$$);
  if(D.$DvtChartDataUtils$$.$hasInvalidData$($chart$$45$$)) {
    D.$DvtChartRenderer$$.$renderEmptyText$($chart$$45$$, $container$$25$$, $availSpace$$29$$)
  }else {
    D.$DvtChartTypeUtils$$.$isOverview$($chart$$45$$) || ($chart$$45$$.$getOptions$()._maxOverflowCoord = $availSpace$$29$$.x + $availSpace$$29$$.$w$, $chart$$45$$.$getOptions$()._minOverflowCoord = $availSpace$$29$$.x);
    D.$DvtChartRenderer$$.$_addOuterGaps$($chart$$45$$, $availSpace$$29$$);
    var $titleSpace$$ = $availSpace$$29$$.$clone$();
    D.$DvtChartRenderer$$.$_renderTitles$($chart$$45$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    D.$DvtChartLegendRenderer$$.$render$($chart$$45$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    var $horizSbDim$$ = D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$($chart$$45$$, $container$$25$$, $availSpace$$29$$), $vertSbDim$$ = D.$DvtChartRenderer$$.$_prerenderVertScrollbar$($chart$$45$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    var $maxHeight$$inline_2168_space$$inline_2166$$ = $availSpace$$29$$.$clone$();
    $chart$$45$$.$_axisSpace$ = $maxHeight$$inline_2168_space$$inline_2166$$;
    var $maxWidth$$inline_2167_space$$inline_2171$$;
    D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$45$$, "x") ? ($maxWidth$$inline_2167_space$$inline_2171$$ = 0.8 * $maxHeight$$inline_2168_space$$inline_2166$$.$w$, $maxHeight$$inline_2168_space$$inline_2166$$ = $maxHeight$$inline_2168_space$$inline_2166$$.$h$ - 4 * D.$DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$45$$, "x")) : D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$45$$, "y") ? ($maxWidth$$inline_2167_space$$inline_2171$$ = $maxHeight$$inline_2168_space$$inline_2166$$.$w$, $maxHeight$$inline_2168_space$$inline_2166$$ = 
    $maxHeight$$inline_2168_space$$inline_2166$$.$h$ - D.$DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$45$$, "y")) : ($maxWidth$$inline_2167_space$$inline_2171$$ = $maxHeight$$inline_2168_space$$inline_2166$$.$w$, $maxHeight$$inline_2168_space$$inline_2166$$ = $maxHeight$$inline_2168_space$$inline_2166$$.$h$);
    $chart$$45$$.$_radius$ = window.Math.min($maxWidth$$inline_2167_space$$inline_2171$$, $maxHeight$$inline_2168_space$$inline_2166$$) / 2;
    D.$DvtChartAxisRenderer$$.$render$($chart$$45$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$29$$);
    D.$DvtChartRenderer$$.$_positionLegend$($chart$$45$$.$legend$, $availSpace$$29$$);
    $maxWidth$$inline_2167_space$$inline_2171$$ = $availSpace$$29$$.$clone$();
    $chart$$45$$.$_plotAreaSpace$ = $maxWidth$$inline_2167_space$$inline_2171$$;
    D.$DvtChartRenderer$$.$_setEventHandlers$($chart$$45$$);
    D.$DvtChartRenderer$$.$_renderScrollbars$($chart$$45$$, $horizSbDim$$, $vertSbDim$$);
    D.$DvtChartRenderer$$.$_updateTitles$($chart$$45$$, $container$$25$$, $titleSpace$$, $availSpace$$29$$);
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$45$$, $container$$25$$, $availSpace$$29$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$45$$) && $container$$25$$.$addChild$($chart$$45$$.$yAxis$);
    D.$DvtChartRenderer$$.$_renderDragButtons$($chart$$45$$)
  }
};
D.$DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($chart$$46$$) {
  var $options$$44$$ = $chart$$46$$.$getOptions$(), $em$$1$$ = $chart$$46$$.$getEventManager$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$46$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$46$$)) {
    var $chartBounds$$ = new D.$DvtRectangle$$(0, 0, $chart$$46$$.getWidth(), $chart$$46$$.getHeight()), $plotAreaBounds$$2$$ = $chart$$46$$.$_plotAreaSpace$, $axisBounds$$1_vertAxisBounds$$ = $chart$$46$$.$_axisSpace$, $horizAxisBounds$$ = new D.$DvtRectangle$$($plotAreaBounds$$2$$.x, $axisBounds$$1_vertAxisBounds$$.y, $plotAreaBounds$$2$$.$w$, $axisBounds$$1_vertAxisBounds$$.$h$), $axisBounds$$1_vertAxisBounds$$ = new D.$DvtRectangle$$($axisBounds$$1_vertAxisBounds$$.x, $plotAreaBounds$$2$$.y, 
    $axisBounds$$1_vertAxisBounds$$.$w$, $plotAreaBounds$$2$$.$h$), $marqueeFill$$ = new D.$DvtSolidFill$$($options$$44$$.styleDefaults.marqueeColor), $marqueeStroke$$ = new D.$DvtSolidStroke$$($options$$44$$.styleDefaults.marqueeBorderColor), $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$;
    if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$46$$)) {
      $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartEventUtils$$.$isDelayedScroll$($chart$$46$$) ? D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$;
      $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtPanZoomHandler$$($chart$$46$$, $plotAreaBounds$$2$$, $chartBounds$$, $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$);
      var $panUpCursor$$inline_2174$$ = $options$$44$$._resources.panCursorUp, $panDownCursor$$inline_2175$$ = $options$$44$$._resources.panCursorDown;
      (0,D.$DvtAgent$isPlatformIE$$)() || ($panUpCursor$$inline_2174$$ && ($direction$$13_marqueeHandler_panZoomHandler_zoomRate$$.$_panUpCursor$ = "url(" + $panUpCursor$$inline_2174$$ + ") 8 8, auto"), $panDownCursor$$inline_2175$$ && ($direction$$13_marqueeHandler_panZoomHandler_zoomRate$$.$_panDownCursor$ = "url(" + $panDownCursor$$inline_2175$$ + ") 8 8, auto"));
      $em$$1$$.$_panZoomHandler$ = $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$;
      D.$DvtChartEventUtils$$.$isZoomable$($chart$$46$$) && ($direction$$13_marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartEventUtils$$.$getZoomDirection$($chart$$46$$), $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$46$$) || "y" == $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$ ? new D.$DvtMarqueeHandler$$($chart$$46$$, $plotAreaBounds$$2$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, !1, !0, null, $axisBounds$$1_vertAxisBounds$$) : 
      D.$DvtChartTypeUtils$$.$isBLAC$($chart$$46$$) || "x" == $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$ ? new D.$DvtMarqueeHandler$$($chart$$46$$, $plotAreaBounds$$2$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, !0, !1, $horizAxisBounds$$, null) : new D.$DvtMarqueeHandler$$($chart$$46$$, $plotAreaBounds$$2$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, !0, !0, $horizAxisBounds$$, $axisBounds$$1_vertAxisBounds$$), $em$$1$$.$_marqueeZoomHandler$ = $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$)
    }
    "multiple" == $options$$44$$.selectionMode && ($direction$$13_marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtMarqueeHandler$$($chart$$46$$, $plotAreaBounds$$2$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, !0, !0, $horizAxisBounds$$, $axisBounds$$1_vertAxisBounds$$), $em$$1$$.$_marqueeSelectHandler$ = $direction$$13_marqueeHandler_panZoomHandler_zoomRate$$)
  }
};
D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($chart$$47$$, $container$$26$$) {
  if(!D.$DvtChartDataUtils$$.$hasInvalidData$($chart$$47$$)) {
    var $availSpace$$30$$ = $chart$$47$$.$_axisSpace$.$clone$(), $selectionHandler$$1$$ = $chart$$47$$.$getSelectionHandler$();
    if($selectionHandler$$1$$) {
      var $selectedIds$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($selectionHandler$$1$$)
    }
    var $focusState$$2$$ = (0,D.$JSCompiler_StaticMethods___cacheChartFocus$$)($chart$$47$$);
    (0,D.$JSCompiler_StaticMethods_hideHoverFeedback$$)($chart$$47$$.$EventManager$);
    $chart$$47$$.$Peers$ = [];
    $chart$$47$$.$_container$.removeChild($chart$$47$$.$xAxis$);
    $chart$$47$$.$_container$.removeChild($chart$$47$$.$yAxis$);
    $chart$$47$$.$_container$.removeChild($chart$$47$$.$y2Axis$);
    $chart$$47$$.$_plotArea$ && $chart$$47$$.$_plotArea$ == $chart$$47$$.$_panZoomTarget$ ? $chart$$47$$.$_plotArea$.$setVisible$(!1) : $chart$$47$$.$_container$.removeChild($chart$$47$$.$_plotArea$);
    $chart$$47$$.$_plotArea$ = null;
    $chart$$47$$.$Cache$ = {};
    D.$DvtChartAxisRenderer$$.$render$($chart$$47$$, $container$$26$$, $availSpace$$30$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$30$$);
    var $space$$inline_2189$$ = $availSpace$$30$$.$clone$();
    $chart$$47$$.$_plotAreaSpace$ = $space$$inline_2189$$;
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$47$$, $container$$26$$, $availSpace$$30$$);
    $selectionHandler$$1$$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($selectionHandler$$1$$, $selectedIds$$, (0,D.$JSCompiler_StaticMethods_getChartObjPeers$$)($chart$$47$$));
    (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($chart$$47$$.$getEventManager$());
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$47$$);
    $chart$$47$$.$highlight$(D.$DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$47$$));
    (0,D.$JSCompiler_StaticMethods___restoreChartFocus$$)($chart$$47$$, $focusState$$2$$)
  }
};
D.$DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($chart$$48_rect$$1$$, $container$$27$$, $availSpace$$31$$) {
  $chart$$48_rect$$1$$ = new D.$DvtRect$$($chart$$48_rect$$1$$.$getCtx$(), $availSpace$$31$$.x, $availSpace$$31$$.y, $availSpace$$31$$.$w$, $availSpace$$31$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($chart$$48_rect$$1$$);
  $container$$27$$.$addChild$($chart$$48_rect$$1$$)
};
D.$DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($chart$$49$$, $availSpace$$32$$) {
  var $options$$45$$ = $chart$$49$$.$getOptions$(), $gapWidth$$ = window.Math.ceil($options$$45$$.layout.outerGapWidth * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$49$$)), $gapHeight$$ = (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$49$$, $options$$45$$.layout.outerGapHeight);
  if("none" == $options$$45$$.styleDefaults.padding || D.$DvtChartTypeUtils$$.$isStandalonePlotArea$($chart$$49$$) || D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$49$$) || D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$49$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$49$$)) {
    $gapWidth$$ = window.Math.min($gapWidth$$, 1), $gapHeight$$ = window.Math.min($gapHeight$$, 1)
  }
  $availSpace$$32$$.x += $gapWidth$$;
  $availSpace$$32$$.$w$ -= 2 * $gapWidth$$;
  $availSpace$$32$$.y += $gapHeight$$;
  $availSpace$$32$$.$h$ -= 2 * $gapHeight$$
};
D.$DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($chart$$50$$, $container$$28_footnoteObj$$, $availSpace$$33$$) {
  var $options$$46$$ = $chart$$50$$.$getOptions$();
  if($options$$46$$.title.text) {
    var $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$50$$.$getEventManager$(), $container$$28_footnoteObj$$, $options$$46$$.title.text, $options$$46$$.title.style, $availSpace$$33$$.x, $availSpace$$33$$.y, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, $footnoteDims_titleDims$$, $titleAlign$$ = null != $options$$46$$.title.hAlign ? $options$$46$$.title.hAlign : $options$$46$$.title.halign, 
    $alignTitlesToPlotArea$$ = "plotArea" == $titleAlign$$.substring(0, 8);
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ ? ($footnoteDims_titleDims$$ = $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getDimensions$(), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = $footnoteDims_titleDims$$.$h$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setAriaProperty$("hidden", null)) : ($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = 0, $footnoteDims_titleDims$$ = new D.$DvtRectangle$$(0, 0, 0, 0));
    if($options$$46$$.subtitle.text) {
      var $subtitleObj$$ = new D.$DvtOutputText$$($chart$$50$$.$getCtx$(), $options$$46$$.subtitle.text, $availSpace$$33$$.x, $availSpace$$33$$.y);
      if($subtitleObj$$) {
        $subtitleObj$$.$setCSSStyle$($options$$46$$.subtitle.style);
        $container$$28_footnoteObj$$.$addChild$($subtitleObj$$);
        var $subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), $titleSubtitleGap$$ = window.Math.ceil($options$$46$$.layout.titleSubtitleGapWidth * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$50$$)), $titleSpace$$1$$ = $footnoteDims_titleDims$$.$w$ + $titleSubtitleGap$$ + $subtitleDims$$.$w$;
        $titleSpace$$1$$ > $availSpace$$33$$.$w$ || $alignTitlesToPlotArea$$ ? ($titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$50$$, $options$$46$$.layout.titleSubtitleGapHeight), $subtitleObj$$.$setY$($availSpace$$33$$.y + $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + $titleSubtitleGap$$), D.$DvtTextUtils$$.$fitText$($subtitleObj$$, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$, $container$$28_footnoteObj$$) && ($subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), 
        $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ += $subtitleDims$$.$h$ + $titleSubtitleGap$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$50$$.$getCtx$()) && ($subtitleObj$$ && $subtitleObj$$.$setX$($availSpace$$33$$.$w$ - $subtitleDims$$.$w$), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setX$($availSpace$$33$$.$w$ - $footnoteDims_titleDims$$.$w$)))) : ($subtitleObj$$.$setY$($footnoteDims_titleDims$$.$h$ - 
        $subtitleDims$$.$h$ + $availSpace$$33$$.y), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && ((0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, $titleAlign$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $titleSpace$$1$$), (0,D.$DvtAgent$isRightToLeft$$)($chart$$50$$.$getCtx$()) ? ($subtitleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$()), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$() + 
        $subtitleDims$$.$w$ + $titleSubtitleGap$$)) : $subtitleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $titleSpace$$1$$ - $subtitleDims$$.$w$)));
        $subtitleObj$$.$setAriaProperty$("hidden", null);
        $chart$$50$$.$getEventManager$().$associate$($subtitleObj$$, new D.$DvtSimpleObjPeer$$($subtitleObj$$.$getUntruncatedTextString$()))
      }
    }else {
      (0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, $titleAlign$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $footnoteDims_titleDims$$.$w$)
    }
    $alignTitlesToPlotArea$$ && ($chart$$50$$.$Cache$.title = $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $chart$$50$$.$Cache$.subtitle = $subtitleObj$$);
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = "on" == $options$$46$$.titleSeparator.rendered ? $options$$46$$.layout.titleSeparatorGap : $options$$46$$.layout.titlePlotAreaGap;
    $availSpace$$33$$.y += $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$50$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$);
    $availSpace$$33$$.$h$ -= $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$50$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$);
    "on" == $options$$46$$.titleSeparator.rendered && ($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = new D.$DvtLine$$($chart$$50$$.$getCtx$(), $availSpace$$33$$.x, $availSpace$$33$$.y, $availSpace$$33$$.x + $availSpace$$33$$.$w$, $availSpace$$33$$.y), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = new D.$DvtLine$$($chart$$50$$.$getCtx$(), $availSpace$$33$$.x, $availSpace$$33$$.y + 1, $availSpace$$33$$.x + $availSpace$$33$$.$w$, $availSpace$$33$$.y + 1), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$.$setSolidStroke$($options$$46$$.titleSeparator.upperColor), 
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setSolidStroke$($options$$46$$.titleSeparator.lowerColor), $container$$28_footnoteObj$$.$addChild$($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$), $container$$28_footnoteObj$$.$addChild$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = 2 + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$50$$, $options$$46$$.layout.titlePlotAreaGap), $availSpace$$33$$.y += 
    $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, $availSpace$$33$$.$h$ -= $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$)
  }
  $options$$46$$.footnote.text && ($container$$28_footnoteObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$50$$.$getEventManager$(), $container$$28_footnoteObj$$, $options$$46$$.footnote.text, $options$$46$$.footnote.style, $availSpace$$33$$.x, 0, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = null != $options$$46$$.footnote.hAlign ? $options$$46$$.footnote.hAlign : $options$$46$$.footnote.halign, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = 
  "plotArea" == $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$.substring(0, 8), $container$$28_footnoteObj$$ && ($footnoteDims_titleDims$$ = $container$$28_footnoteObj$$.$getDimensions$(), $container$$28_footnoteObj$$.$setY$($availSpace$$33$$.y + $availSpace$$33$$.$h$ - $footnoteDims_titleDims$$.$h$), $availSpace$$33$$.$h$ -= $footnoteDims_titleDims$$.$h$ + (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$50$$, $options$$46$$.layout.footnoteGap), (0,D.$DvtLayoutUtils$align$$)($availSpace$$33$$, 
  $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, $container$$28_footnoteObj$$, $footnoteDims_titleDims$$.$w$), $container$$28_footnoteObj$$.$setAriaProperty$("hidden", null)), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && ($chart$$50$$.$Cache$.footnote = $container$$28_footnoteObj$$))
};
D.$DvtChartRenderer$$.$_updateTitles$ = function $$DvtChartRenderer$$$$_updateTitles$$($chart$$51_footnoteObj$$1$$, $container$$29$$, $titleSpace$$2$$, $availSpace$$34_subtitleObj$$1$$) {
  var $options$$47_updateFootnote$$ = $chart$$51_footnoteObj$$1$$.$getOptions$(), $footnoteDims$$1_titleAlign$$1$$ = null != $options$$47_updateFootnote$$.title.hAlign ? $options$$47_updateFootnote$$.title.hAlign : $options$$47_updateFootnote$$.title.halign, $footnoteAlign$$1$$ = null != $options$$47_updateFootnote$$.footnote.hAlign ? $options$$47_updateFootnote$$.footnote.hAlign : $options$$47_updateFootnote$$.footnote.halign, $subtitleDims$$1_titleObj$$1_updateTitle$$ = $options$$47_updateFootnote$$.title.text && 
  "plotArea" == $footnoteDims$$1_titleAlign$$1$$.substring(0, 8), $options$$47_updateFootnote$$ = $options$$47_updateFootnote$$.footnote.text && "plotArea" == $footnoteAlign$$1$$.substring(0, 8);
  $titleSpace$$2$$.x = $availSpace$$34_subtitleObj$$1$$.x;
  $titleSpace$$2$$.$w$ = $availSpace$$34_subtitleObj$$1$$.$w$;
  if($subtitleDims$$1_titleObj$$1_updateTitle$$) {
    $subtitleDims$$1_titleObj$$1_updateTitle$$ = $chart$$51_footnoteObj$$1$$.$Cache$.title;
    $availSpace$$34_subtitleObj$$1$$ = $chart$$51_footnoteObj$$1$$.$Cache$.subtitle;
    var $titleDims$$1$$ = $subtitleDims$$1_titleObj$$1_updateTitle$$.$getDimensions$();
    D.$DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteDims$$1_titleAlign$$1$$, $subtitleDims$$1_titleObj$$1_updateTitle$$, $titleDims$$1$$.$w$);
    $availSpace$$34_subtitleObj$$1$$ && ($subtitleDims$$1_titleObj$$1_updateTitle$$ = $availSpace$$34_subtitleObj$$1$$.$getDimensions$(), D.$DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteDims$$1_titleAlign$$1$$, $availSpace$$34_subtitleObj$$1$$, $subtitleDims$$1_titleObj$$1_updateTitle$$.$w$))
  }
  $options$$47_updateFootnote$$ && ($chart$$51_footnoteObj$$1$$ = $chart$$51_footnoteObj$$1$$.$Cache$.footnote, $footnoteDims$$1_titleAlign$$1$$ = $chart$$51_footnoteObj$$1$$.$getDimensions$(), D.$DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteAlign$$1$$, $chart$$51_footnoteObj$$1$$, $footnoteDims$$1_titleAlign$$1$$.$w$))
};
D.$DvtChartRenderer$$.$_alignTextToPlotArea$ = function $$DvtChartRenderer$$$$_alignTextToPlotArea$$($container$$30$$, $availSpace$$35$$, $halign$$, $text$$46$$, $width$$35$$) {
  D.$DvtTextUtils$$.$fitText$($text$$46$$, $availSpace$$35$$.$w$, $availSpace$$35$$.$h$, $container$$30$$) && ("plotAreaStart" == $halign$$ ? (0,D.$DvtLayoutUtils$align$$)($availSpace$$35$$, "start", $text$$46$$, $width$$35$$) : "plotAreaCenter" == $halign$$ ? (0,D.$DvtLayoutUtils$align$$)($availSpace$$35$$, "center", $text$$46$$, $width$$35$$) : "plotAreaEnd" == $halign$$ && (0,D.$DvtLayoutUtils$align$$)($availSpace$$35$$, "end", $text$$46$$, $width$$35$$))
};
D.$DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($chart$$52$$, $container$$31$$, $availSpace$$36$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$52$$)) {
    var $pieChart_plotArea$$1$$ = new D.$DvtContainer$$($chart$$52$$.$getCtx$());
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($pieChart_plotArea$$1$$, $availSpace$$36$$.x, $availSpace$$36$$.y);
    $container$$31$$.$addChild$($pieChart_plotArea$$1$$);
    $chart$$52$$.$_plotArea$ = $pieChart_plotArea$$1$$;
    D.$DvtPlotAreaRenderer$$.$render$($chart$$52$$, $pieChart_plotArea$$1$$, new D.$DvtRectangle$$(0, 0, $availSpace$$36$$.$w$, $availSpace$$36$$.$h$))
  }else {
    D.$DvtChartTypeUtils$$.$isPie$($chart$$52$$) ? ($pieChart_plotArea$$1$$ = new D.$DvtPieChart$$($chart$$52$$, $availSpace$$36$$), 0 < $pieChart_plotArea$$1$$.$_slices$.length ? ($container$$31$$.$addChild$($pieChart_plotArea$$1$$), $chart$$52$$.$_plotArea$ = $pieChart_plotArea$$1$$, $pieChart_plotArea$$1$$.$render$()) : D.$DvtChartRenderer$$.$renderEmptyText$($chart$$52$$, $container$$31$$, $availSpace$$36$$)) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$52$$) && D.$DvtFunnelRenderer$$.$render$($chart$$52$$, 
    $container$$31$$, $availSpace$$36$$)
  }
  $availSpace$$36$$.$w$ = 0;
  $availSpace$$36$$.$h$ = 0
};
D.$DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($chart$$53$$, $container$$32$$, $availSpace$$37$$) {
  var $options$$48$$ = $chart$$53$$.$getOptions$();
  if(D.$DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$53$$) && D.$DvtChartDataUtils$$.$hasData$($chart$$53$$)) {
    var $emptyTextStr$$ = (0,D.$DvtBundle$getTranslation$$)($options$$48$$, "labelInvalidData", "DvtUtilBundle", "INVALID_DATA")
  }else {
    ($emptyTextStr$$ = $options$$48$$.emptyText) || ($emptyTextStr$$ = (0,D.$DvtBundle$getTranslation$$)($options$$48$$, "labelNoData", "DvtUtilBundle", "NO_DATA"))
  }
  D.$DvtTextUtils$$.$renderEmptyText$($container$$32$$, $emptyTextStr$$, new D.$DvtRectangle$$($availSpace$$37$$.x, $availSpace$$37$$.y, $availSpace$$37$$.$w$, $availSpace$$37$$.$h$), $chart$$53$$.$getEventManager$(), $options$$48$$._statusMessageStyle)
};
D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($chart$$54$$, $container$$33$$, $availSpace$$38$$) {
  var $width$$36$$ = $availSpace$$38$$.$w$, $height$$39$$ = 0;
  D.$DvtChartEventUtils$$.$isScrollable$($chart$$54$$) && D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$($chart$$54$$) ? D.$DvtChartStyleUtils$$.$isOverviewRendered$($chart$$54$$) ? ($height$$39$$ = window.Math.min(D.$DvtChartStyleUtils$$.$getOverviewHeight$($chart$$54$$), $availSpace$$38$$.$h$), 0 < $height$$39$$ && ($chart$$54$$.$overview$ = new D.$DvtChartOverview$$($chart$$54$$), $container$$33$$.$addChild$($chart$$54$$.$overview$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$38$$, "bottom", 
  $chart$$54$$.$overview$, $width$$36$$, $height$$39$$, 10))) : ($height$$39$$ = $chart$$54$$.$getOptions$().styleDefaults._scrollbarHeight, $chart$$54$$.$xScrollbar$ = new D.$DvtSimpleScrollbar$$($chart$$54$$.$getCtx$(), $chart$$54$$.$processEvent$, $chart$$54$$), $container$$33$$.$addChild$($chart$$54$$.$xScrollbar$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$38$$, "bottom", $chart$$54$$.$xScrollbar$, $width$$36$$, $height$$39$$, 8), $chart$$54$$.$overview$ = null) : $chart$$54$$.$overview$ = 
  null;
  return new D.$DvtDimension$$($width$$36$$, $height$$39$$)
};
D.$DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($chart$$55$$, $container$$34$$, $availSpace$$39$$) {
  var $width$$37$$ = 0, $height$$40$$ = $availSpace$$39$$.$h$;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$55$$) && D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$($chart$$55$$)) {
    var $width$$37$$ = $chart$$55$$.$getOptions$().styleDefaults._scrollbarHeight, $scrollbar$$ = new D.$DvtSimpleScrollbar$$($chart$$55$$.$getCtx$(), $chart$$55$$.$processEvent$, $chart$$55$$);
    $container$$34$$.$addChild$($scrollbar$$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$39$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$55$$.$getCtx$()) ? "right" : "left", $scrollbar$$, $width$$37$$, $height$$40$$, 8);
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$55$$) ? $chart$$55$$.$xScrollbar$ = $scrollbar$$ : $chart$$55$$.$yScrollbar$ = $scrollbar$$
  }
  return new D.$DvtDimension$$($width$$37$$, $height$$40$$)
};
D.$DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($chart$$56$$, $horizScrollbarDim$$, $ovOptions_vertScrollbarDim$$) {
  var $options$$49$$ = $chart$$56$$.$getOptions$(), $sbOptions$$ = {color:$options$$49$$.styleDefaults._scrollbarHandleColor, backgroundColor:$options$$49$$.styleDefaults._scrollbarTrackColor}, $plotAreaDim$$ = $chart$$56$$.$_plotAreaSpace$;
  $chart$$56$$.$xScrollbar$ && ($sbOptions$$.min = $chart$$56$$.$xAxis$.$actualToLinear$($chart$$56$$.$xAxis$.$Info$.$GlobalMin$), $sbOptions$$.max = $chart$$56$$.$xAxis$.$actualToLinear$($chart$$56$$.$xAxis$.$Info$.$GlobalMax$), D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$56$$) ? ($sbOptions$$.isHorizontal = !1, $sbOptions$$.isReversed = !1, $chart$$56$$.$xScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$56$$.$xScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$)) : 
  ($sbOptions$$.isHorizontal = !0, $sbOptions$$.isReversed = (0,D.$DvtAgent$isRightToLeft$$)($chart$$56$$.$getCtx$()), $chart$$56$$.$xScrollbar$.$setTranslateX$($plotAreaDim$$.x), $chart$$56$$.$xScrollbar$.$render$($sbOptions$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$)), $chart$$56$$.$xScrollbar$.$setViewportRange$((0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($chart$$56$$.$xAxis$), (0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($chart$$56$$.$xAxis$)));
  $chart$$56$$.$yScrollbar$ && ($sbOptions$$.min = $chart$$56$$.$yAxis$.$actualToLinear$($chart$$56$$.$yAxis$.$Info$.$GlobalMin$), $sbOptions$$.max = $chart$$56$$.$yAxis$.$actualToLinear$($chart$$56$$.$yAxis$.$Info$.$GlobalMax$), $sbOptions$$.isHorizontal = !1, $sbOptions$$.isReversed = !0, $chart$$56$$.$yScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$56$$.$yScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$), $chart$$56$$.$yScrollbar$.$setViewportRange$((0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($chart$$56$$.$yAxis$), 
  (0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($chart$$56$$.$yAxis$)));
  $chart$$56$$.$overview$ && ($ovOptions_vertScrollbarDim$$ = {startTime:$chart$$56$$.$xAxis$.$actualToLinear$($chart$$56$$.$xAxis$.$Info$.$GlobalMin$), endTime:$chart$$56$$.$xAxis$.$actualToLinear$($chart$$56$$.$xAxis$.$Info$.$GlobalMax$), viewportStartTime:(0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($chart$$56$$.$xAxis$), viewportEndTime:(0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($chart$$56$$.$xAxis$), minimumWindowSize:$chart$$56$$.$xAxis$.$getInfo$().$getMinimumExtent$(), 
  chart:D.$DvtJSONUtils$$.$clone$($options$$49$$)}, D.$DvtChartEventUtils$$.$isZoomable$($chart$$56$$) || ($ovOptions_vertScrollbarDim$$.featuresOff = "zoom"), $ovOptions_vertScrollbarDim$$.chart._minOverflowCoord = $options$$49$$._minOverflowCoord - $plotAreaDim$$.x, $ovOptions_vertScrollbarDim$$.chart._maxOverflowCoord = $options$$49$$._maxOverflowCoord - $plotAreaDim$$.x, $chart$$56$$.$overview$.$setTranslateX$($plotAreaDim$$.x), $chart$$56$$.$overview$.$render$($ovOptions_vertScrollbarDim$$, 
  $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$), $chart$$56$$.$overview$.$setViewportRange$((0,D.$JSCompiler_StaticMethods_getLinearViewportMin$$)($chart$$56$$.$xAxis$), (0,D.$JSCompiler_StaticMethods_getLinearViewportMax$$)($chart$$56$$.$xAxis$)))
};
D.$DvtChartRenderer$$.$_positionLegend$ = function $$DvtChartRenderer$$$$_positionLegend$$($legend$$2$$, $availSpace$$40$$) {
  if($legend$$2$$) {
    var $dims$$7$$ = $legend$$2$$.$getDimensions$(), $orientation$$ = $legend$$2$$.$getOptions$().orientation;
    "vertical" == $orientation$$ && $dims$$7$$.$h$ <= $availSpace$$40$$.$h$ ? $legend$$2$$.$setTranslateY$(window.Math.round($availSpace$$40$$.y + $availSpace$$40$$.$h$ / 2 - $dims$$7$$.$h$ / 2)) : "horizontal" == $orientation$$ && $dims$$7$$.$w$ <= $availSpace$$40$$.$w$ && $legend$$2$$.$setTranslateX$(window.Math.round($availSpace$$40$$.x + $availSpace$$40$$.$w$ / 2 - $dims$$7$$.$w$ / 2))
  }
};
D.$DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($chart$$57$$) {
  var $options$$50$$ = $chart$$57$$.$getOptions$(), $em$$2$$ = $chart$$57$$.$getEventManager$(), $dragMode$$1_isTouch$$ = $options$$50$$.dragMode;
  if("user" != $dragMode$$1_isTouch$$) {
    "pan" == $dragMode$$1_isTouch$$ ? (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, "pan") : "zoom" == $dragMode$$1_isTouch$$ ? (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, "zoom") : "select" == $dragMode$$1_isTouch$$ ? (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, "select") : (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, "off")
  }else {
    if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$57$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$57$$)) {
      var $dragMode$$1_isTouch$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $isScrollable$$ = D.$DvtChartEventUtils$$.$isScrollable$($chart$$57$$);
      $chart$$57$$.$dragButtons$ = new D.$DvtContainer$$($chart$$57$$.$getCtx$());
      var $resources$$3$$ = $options$$50$$._resources, $position$$12_tooltip$$5$$;
      if("multiple" == $options$$50$$.selectionMode && ($dragMode$$1_isTouch$$ || $isScrollable$$)) {
        $position$$12_tooltip$$5$$ = $isScrollable$$ && ($dragMode$$1_isTouch$$ || D.$DvtChartEventUtils$$.$isZoomable$($chart$$57$$)) ? "end" : "solo", $em$$2$$.$selectButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$57$$, $chart$$57$$.$dragButtons$, $resources$$3$$.selectUp, $resources$$3$$.selectDown, $em$$2$$.$onSelectButtonClick$, $em$$2$$, $position$$12_tooltip$$5$$), $position$$12_tooltip$$5$$ = (0,D.$DvtBundle$getTranslation$$)($options$$50$$, "tooltipSelect", "DvtChartBundle", 
        "MARQUEE_SELECT"), $em$$2$$.$selectButton$.$setTooltip$($position$$12_tooltip$$5$$), $em$$2$$.$associate$($em$$2$$.$selectButton$, $em$$2$$.$selectButton$)
      }
      $isScrollable$$ && ($position$$12_tooltip$$5$$ = null == $em$$2$$.$selectButton$ ? "solo" : "start", $dragMode$$1_isTouch$$ ? ($em$$2$$.$panButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$57$$, $chart$$57$$.$dragButtons$, $resources$$3$$.panUp, $resources$$3$$.panDown, $em$$2$$.$onPanButtonClick$, $em$$2$$, $position$$12_tooltip$$5$$), $position$$12_tooltip$$5$$ = (0,D.$DvtBundle$getTranslation$$)($options$$50$$, "tooltipPan", "DvtChartBundle", "PAN"), $em$$2$$.$panButton$.$setTooltip$($position$$12_tooltip$$5$$), 
      $em$$2$$.$associate$($em$$2$$.$panButton$, $em$$2$$.$panButton$)) : D.$DvtChartEventUtils$$.$isZoomable$($chart$$57$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$57$$) && ($em$$2$$.$zoomButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$57$$, $chart$$57$$.$dragButtons$, $resources$$3$$.zoomUp, $resources$$3$$.zoomDown, $em$$2$$.$onZoomButtonClick$, $em$$2$$, $position$$12_tooltip$$5$$), $position$$12_tooltip$$5$$ = (0,D.$DvtBundle$getTranslation$$)($options$$50$$, "tooltipZoom", 
      "DvtChartBundle", "MARQUEE_ZOOM"), $em$$2$$.$zoomButton$.$setTooltip$($position$$12_tooltip$$5$$), $em$$2$$.$associate$($em$$2$$.$zoomButton$, $em$$2$$.$zoomButton$)));
      D.$DvtChartRenderer$$.$positionDragButtons$($chart$$57$$);
      (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, null);
      0 < $chart$$57$$.$dragButtons$.$getNumChildren$() && ($chart$$57$$.$addChild$($chart$$57$$.$dragButtons$), $dragMode$$1_isTouch$$ ? $isScrollable$$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($em$$2$$.$panButton$, !0), $em$$2$$.$onPanButtonClick$()) : $chart$$57$$.$dragButtons$ && $chart$$57$$.$dragButtons$.$setVisible$(!1), $chart$$57$$.$dragButtons$.setCursor("default"))
    }
  }
};
D.$DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($chart$$58_transX$$, $button$$4$$, $availSpace$$41$$) {
  (0,D.$DvtAgent$isRightToLeft$$)($chart$$58_transX$$.$getCtx$()) ? ($chart$$58_transX$$ = $availSpace$$41$$.x + D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $availSpace$$41$$.x += D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$) : $chart$$58_transX$$ = $availSpace$$41$$.x + $availSpace$$41$$.$w$ - D.$DvtChartRenderer$$.$_BUTTON_SIZE$ - D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  $availSpace$$41$$.$w$ -= D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$4$$, $chart$$58_transX$$, $availSpace$$41$$.y + D.$DvtChartRenderer$$.$_BUTTON_PADDING$)
};
D.$DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($chart$$59$$) {
  var $availSpace$$42$$ = $chart$$59$$.$_plotAreaSpace$.$clone$();
  $availSpace$$42$$.x += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$42$$.$w$ -= 2 * D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$42$$.y += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  var $em$$3$$ = $chart$$59$$.$getEventManager$();
  $em$$3$$.$selectButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$59$$, $em$$3$$.$selectButton$, $availSpace$$42$$);
  $em$$3$$.$panButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$59$$, $em$$3$$.$panButton$, $availSpace$$42$$);
  $em$$3$$.$zoomButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$59$$, $em$$3$$.$zoomButton$, $availSpace$$42$$)
};
D.$DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($context$$42$$, $position$$13$$) {
  var $background_blcr_cmd$$1$$ = 2, $trcr$$ = 2, $isR2L$$3_pos$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$42$$);
  "start" == $position$$13$$ ? $isR2L$$3_pos$$9$$ ? $background_blcr_cmd$$1$$ = 0 : $trcr$$ = 0 : "end" == $position$$13$$ && ($isR2L$$3_pos$$9$$ ? $trcr$$ = 0 : $background_blcr_cmd$$1$$ = 0);
  var $isR2L$$3_pos$$9$$ = -D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $size$$16$$ = D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $background_blcr_cmd$$1$$ = D.$DvtPathUtils$$.$roundedRectangle$($isR2L$$3_pos$$9$$, $isR2L$$3_pos$$9$$, $size$$16$$, $size$$16$$, $background_blcr_cmd$$1$$, $trcr$$, $trcr$$, $background_blcr_cmd$$1$$), $background_blcr_cmd$$1$$ = new D.$DvtPath$$($context$$42$$, $background_blcr_cmd$$1$$);
  1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? ($background_blcr_cmd$$1$$.$setSolidStroke$("#D8DEE3", 1, 1), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background_blcr_cmd$$1$$)) : $background_blcr_cmd$$1$$.$setSolidStroke$("#B8BDC1", 1, 1);
  return $background_blcr_cmd$$1$$
};
D.$DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($chart$$60_context$$43$$, $container$$36_isR2L$$4$$, $overDownState_upSrc$$, $button$$5_downSrc$$, $callback$$43_enabled$$inline_2213_hitPadding$$, $callbackObj$$6$$, $hitArea_position$$14$$) {
  $chart$$60_context$$43$$ = $chart$$60_context$$43$$.$getCtx$();
  var $upState$$2$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$60_context$$43$$, $hitArea_position$$14$$);
  $upState$$2$$.$setSolidFill$("#FFFFFF", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $upState$$2$$.$addChild$(new D.$DvtImage$$($chart$$60_context$$43$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $overState$$2$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$60_context$$43$$, $hitArea_position$$14$$);
  $overState$$2$$.$setSolidFill$("#E2E3E4", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overState$$2$$.$addChild$(new D.$DvtImage$$($chart$$60_context$$43$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $downState$$2$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$60_context$$43$$, $hitArea_position$$14$$);
  $downState$$2$$.$setFill$(new D.$DvtLinearGradientFill$$(90, ["#0527CE", "#0586F0"], [D.$DvtChartRenderer$$.$_BUTTON_OPACITY$, D.$DvtChartRenderer$$.$_BUTTON_OPACITY$]));
  $downState$$2$$.$addChild$(new D.$DvtImage$$($chart$$60_context$$43$$, $button$$5_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $overDownState_upSrc$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$60_context$$43$$, $hitArea_position$$14$$);
  $overDownState_upSrc$$.$setSolidFill$("#0586F0", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overDownState_upSrc$$.$addChild$(new D.$DvtImage$$($chart$$60_context$$43$$, $button$$5_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $button$$5_downSrc$$ = new D.$DvtButton$$($chart$$60_context$$43$$, $upState$$2$$, $overState$$2$$, $downState$$2$$, null, null, $callback$$43_enabled$$inline_2213_hitPadding$$, $callbackObj$$6$$);
  if(!$button$$5_downSrc$$.$overDownState$ || $button$$5_downSrc$$.$overDownState$ == $overDownState_upSrc$$) {
    $callback$$43_enabled$$inline_2213_hitPadding$$ = !1, $button$$5_downSrc$$.$overDownState$ && ($callback$$43_enabled$$inline_2213_hitPadding$$ = (0,D.$JSCompiler_StaticMethods__isButtonEnabled$$)($button$$5_downSrc$$.$overDownState$), $button$$5_downSrc$$.removeChild($button$$5_downSrc$$.$overDownState$)), $overDownState_upSrc$$ && $button$$5_downSrc$$.$addChild$($overDownState_upSrc$$), $button$$5_downSrc$$.$overDownState$ = $overDownState_upSrc$$, (0,D.$JSCompiler_StaticMethods__enableButton$$)($button$$5_downSrc$$.$overDownState$, 
    $callback$$43_enabled$$inline_2213_hitPadding$$)
  }
  $button$$5_downSrc$$.$_bToggleEnabled$ = !0;
  $container$$36_isR2L$$4$$.$addChild$($button$$5_downSrc$$);
  $button$$5_downSrc$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, function($chart$$60_context$$43$$) {
    $chart$$60_context$$43$$.stopPropagation()
  });
  (0,D.$DvtAgent$isTouchDevice$$)() && ($container$$36_isR2L$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$60_context$$43$$), $callback$$43_enabled$$inline_2213_hitPadding$$ = 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $hitArea_position$$14$$ = "solo" == $hitArea_position$$14$$ ? new D.$DvtRect$$($chart$$60_context$$43$$, -$callback$$43_enabled$$inline_2213_hitPadding$$, -$callback$$43_enabled$$inline_2213_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$43_enabled$$inline_2213_hitPadding$$, 
  D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$43_enabled$$inline_2213_hitPadding$$) : "start" == $hitArea_position$$14$$ && !$container$$36_isR2L$$4$$ || "end" == $hitArea_position$$14$$ && $container$$36_isR2L$$4$$ ? new D.$DvtRect$$($chart$$60_context$$43$$, -$callback$$43_enabled$$inline_2213_hitPadding$$, -$callback$$43_enabled$$inline_2213_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$43_enabled$$inline_2213_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 
  2 * $callback$$43_enabled$$inline_2213_hitPadding$$) : new D.$DvtRect$$($chart$$60_context$$43$$, -0.5 * $callback$$43_enabled$$inline_2213_hitPadding$$, -$callback$$43_enabled$$inline_2213_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$43_enabled$$inline_2213_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$43_enabled$$inline_2213_hitPadding$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea_position$$14$$), $button$$5_downSrc$$.$addChild$($hitArea_position$$14$$));
  return $button$$5_downSrc$$
};
D.$DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($availSpace$$43$$) {
  $availSpace$$43$$.x = window.Math.round($availSpace$$43$$.x);
  $availSpace$$43$$.y = window.Math.round($availSpace$$43$$.y);
  $availSpace$$43$$.$w$ = window.Math.round($availSpace$$43$$.$w$);
  $availSpace$$43$$.$h$ = window.Math.round($availSpace$$43$$.$h$)
};
D.$DvtChartRenderer$$.$renderDataCursor$ = function $$DvtChartRenderer$$$$renderDataCursor$$($chart$$61$$) {
  var $dataCursor$$3$$ = null, $options$$51$$ = $chart$$61$$.$getOptions$(), $eventManager$$6$$ = $chart$$61$$.$getEventManager$();
  if(D.$DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$61$$)) {
    var $dataCursor$$3$$ = new D.$DvtDataCursor$$($chart$$61$$.$getCtx$(), $options$$51$$.styleDefaults.dataCursor, D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$61$$)), $behavior$$inline_2216_dataCursorHandler$$ = D.$DvtChartTooltipUtils$$.$getDataCursorBehavior$($chart$$61$$);
    $dataCursor$$3$$.$_behavior$ = $behavior$$inline_2216_dataCursorHandler$$;
    $chart$$61$$.$addChild$($dataCursor$$3$$);
    $behavior$$inline_2216_dataCursorHandler$$ = new D.$DvtDataCursorHandler$$($chart$$61$$, $dataCursor$$3$$);
    $eventManager$$6$$.$_dataCursorHandler$ = $behavior$$inline_2216_dataCursorHandler$$;
    $chart$$61$$.$positionDataCursor$($options$$51$$.dataCursorPosition)
  }else {
    $eventManager$$6$$.$_dataCursorHandler$ = null
  }
  return $dataCursor$$3$$
};
D.$DvtChartAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisRenderer$$, D.$DvtObj$$, "DvtChartAxisRenderer");
D.$DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($chart$$28$$, $container$$18$$, $availSpace$$17$$) {
  D.$DvtChartTypeUtils$$.$hasAxes$($chart$$28$$) && (D.$DvtChartAxisUtils$$.$applyInitialZooming$($chart$$28$$, $availSpace$$17$$), D.$DvtChartTypeUtils$$.$isBubble$($chart$$28$$) && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$28$$, $availSpace$$17$$.$w$, $availSpace$$17$$.$h$), D.$DvtChartTypeUtils$$.$isPolar$($chart$$28$$) ? D.$DvtChartAxisRenderer$$.$_renderPolar$($chart$$28$$, $container$$18$$, $availSpace$$17$$) : D.$DvtChartAxisRenderer$$.$_renderCartesian$($chart$$28$$, $container$$18$$, 
  $availSpace$$17$$))
};
D.$DvtChartAxisRenderer$$.$_renderCartesian$ = function $$DvtChartAxisRenderer$$$$_renderCartesian$$($chart$$29$$, $container$$19_xInfo$$, $availSpace$$18$$) {
  var $bAligned_options$$37$$ = $chart$$29$$.$getOptions$(), $isHoriz$$5$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$29$$), $isSplitDualY$$ = D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$29$$), $totalAvailSpace_yAvailSpace$$ = $availSpace$$18$$.$clone$(), $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($chart$$29$$), $isR2L_y2Position$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$29$$);
  D.$DvtChartAxisRenderer$$.$_addAxisGaps$($chart$$29$$, $availSpace$$18$$);
  $isSplitDualY$$ && $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ == $isR2L_y2Position$$ && ($bAligned_options$$37$$.yAxis._skipHighestTick = $isHoriz$$5$$, $bAligned_options$$37$$.y2Axis._skipHighestTick = !$isHoriz$$5$$);
  var $yInfo$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$29$$, $container$$19_xInfo$$, $availSpace$$18$$, $totalAvailSpace_yAvailSpace$$), $y2Info$$ = D.$DvtChartAxisRenderer$$.$_createY2Axis$($chart$$29$$, $container$$19_xInfo$$, $availSpace$$18$$, $totalAvailSpace_yAvailSpace$$);
  if(($bAligned_options$$37$$ = !$isSplitDualY$$ && "on" == $bAligned_options$$37$$.y2Axis.alignTickMarks && null == $bAligned_options$$37$$.y2Axis.step) && $yInfo$$ && $y2Info$$) {
    D.$DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $isHoriz$$5$$ || ($y2Info$$.$dim$ = D.$DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$29$$, $y2Info$$.axis, $chart$$29$$.$y2Axis$, $y2Info$$.options, "y2", $availSpace$$18$$, $totalAvailSpace_yAvailSpace$$))
  }
  var $yGap$$ = D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$29$$, "y"), $y2Gap$$ = D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$29$$, "y2");
  $isSplitDualY$$ && $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ == $isR2L_y2Position$$ ? ($isHoriz$$5$$ ? ($maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = window.Math.max($yInfo$$.$dim$.$h$ + $yGap$$, $y2Info$$.$dim$.$h$ + $y2Gap$$), $yInfo$$.$dim$.$h$ = $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ - $yGap$$, $y2Info$$.$dim$.$h$ = $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ - $y2Gap$$) : 
  ($maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = window.Math.max($yInfo$$.$dim$.$w$ + $yGap$$, $y2Info$$.$dim$.$w$ + $y2Gap$$), $yInfo$$.$dim$.$w$ = $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ - $yGap$$, $y2Info$$.$dim$.$w$ = $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ - $y2Gap$$), D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$18$$.$clone$(), $yInfo$$, $yGap$$)) : D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$18$$, 
  $yInfo$$, $yGap$$);
  D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$18$$, $y2Info$$, $y2Gap$$);
  $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$29$$);
  "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$29$$) && D.$DvtChartTypeUtils$$.$isBar$($chart$$29$$) && $availSpace$$18$$.$w$ > $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ && ($maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ *= window.Math.floor($availSpace$$18$$.$w$ / $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$), $availSpace$$18$$.x += ($availSpace$$18$$.$w$ - $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$) / 
  2, $availSpace$$18$$.$w$ = $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$);
  $container$$19_xInfo$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$29$$, $container$$19_xInfo$$, $availSpace$$18$$, $totalAvailSpace_yAvailSpace$$);
  $container$$19_xInfo$$.axis.$render$($container$$19_xInfo$$.options, $container$$19_xInfo$$.$dim$.$w$, $container$$19_xInfo$$.$dim$.$h$);
  D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$18$$, $container$$19_xInfo$$, D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$29$$, "x"));
  $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = D.$DvtChartStyleUtils$$.$getSplitterPosition$($chart$$29$$);
  $isR2L_y2Position$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$29$$.$getCtx$());
  $totalAvailSpace_yAvailSpace$$ = D.$DvtChartAxisRenderer$$.$_getSplitAvailSpace$($availSpace$$18$$, $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$, $isHoriz$$5$$, $isHoriz$$5$$ && $isR2L_y2Position$$);
  $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$ = D.$DvtChartAxisRenderer$$.$_getSplitAvailSpace$($availSpace$$18$$, 1 - $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$, $isHoriz$$5$$, !$isHoriz$$5$$ || !$isR2L_y2Position$$);
  $isHoriz$$5$$ ? ($yInfo$$ && ($yInfo$$.axis.$setTranslateX$($availSpace$$18$$.x), $isSplitDualY$$ ? $yInfo$$.axis.$render$($yInfo$$.options, $totalAvailSpace_yAvailSpace$$.$w$, $yInfo$$.$dim$.$h$, $totalAvailSpace_yAvailSpace$$.x, 0) : $yInfo$$.axis.$render$($yInfo$$.options, $availSpace$$18$$.$w$, $yInfo$$.$dim$.$h$)), $bAligned_options$$37$$ && ($yInfo$$ && $y2Info$$) && D.$DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $y2Info$$ && ($y2Info$$.axis.$setTranslateX$($availSpace$$18$$.x), 
  $isSplitDualY$$ ? $y2Info$$.axis.$render$($y2Info$$.options, $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$.$w$, $y2Info$$.$dim$.$h$, $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$.x, 0) : $y2Info$$.axis.$render$($y2Info$$.options, $availSpace$$18$$.$w$, $y2Info$$.$dim$.$h$)), D.$DvtChartAxisRenderer$$.$_setOverflow$($availSpace$$18$$, $yInfo$$, $container$$19_xInfo$$)) : ($yInfo$$ && ($isSplitDualY$$ ? $yInfo$$.axis.$render$($yInfo$$.options, 
  $yInfo$$.$dim$.$w$, $totalAvailSpace_yAvailSpace$$.$h$, 0, $totalAvailSpace_yAvailSpace$$.y) : $yInfo$$.axis.$render$($yInfo$$.options, $yInfo$$.$dim$.$w$, $availSpace$$18$$.$h$)), $bAligned_options$$37$$ && ($yInfo$$ && $y2Info$$) && D.$DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $y2Info$$ && ($isSplitDualY$$ ? $y2Info$$.axis.$render$($y2Info$$.options, $y2Info$$.$dim$.$w$, $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$.$h$, 0, $maxSize_newWidth$$3_numGroups_splitterPosition_y2AvailSpace_yPosition$$.y) : 
  $y2Info$$.axis.$render$($y2Info$$.options, $y2Info$$.$dim$.$w$, $availSpace$$18$$.$h$)), D.$DvtChartAxisRenderer$$.$_setOverflow$($availSpace$$18$$, $container$$19_xInfo$$, $yInfo$$, $y2Info$$));
  D.$DvtChartAxisRenderer$$.$_storeAxes$($chart$$29$$, $container$$19_xInfo$$, $yInfo$$, $y2Info$$)
};
D.$DvtChartAxisRenderer$$.$_renderPolar$ = function $$DvtChartAxisRenderer$$$$_renderPolar$$($chart$$30$$, $container$$20_yInfo$$1$$, $availSpace$$19$$) {
  var $xInfo$$1$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$30$$, $container$$20_yInfo$$1$$, $availSpace$$19$$, $availSpace$$19$$);
  $xInfo$$1$$.axis.$setTranslateX$($availSpace$$19$$.x);
  $xInfo$$1$$.axis.$setTranslateY$($availSpace$$19$$.y);
  $xInfo$$1$$.axis.$render$($xInfo$$1$$.options, $availSpace$$19$$.$w$, $availSpace$$19$$.$h$);
  $container$$20_yInfo$$1$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$30$$, $container$$20_yInfo$$1$$, $availSpace$$19$$, $availSpace$$19$$);
  $container$$20_yInfo$$1$$.axis.$setTranslateX$($availSpace$$19$$.x);
  $container$$20_yInfo$$1$$.axis.$setTranslateY$($availSpace$$19$$.y);
  $container$$20_yInfo$$1$$.axis.$render$($container$$20_yInfo$$1$$.options, $availSpace$$19$$.$w$, $availSpace$$19$$.$h$);
  D.$DvtChartAxisRenderer$$.$_storeAxes$($chart$$30$$, $xInfo$$1$$, $container$$20_yInfo$$1$$)
};
D.$DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($chart$$31_preferredSize$$, $container$$21$$, $availSpace$$20$$, $totalAvailSpace$$1$$) {
  var $options$$38$$ = $chart$$31_preferredSize$$.$getOptions$(), $axisOffset_numGroups$$1_position$$9$$ = D.$DvtChartAxisUtils$$.$getXAxisPosition$($chart$$31_preferredSize$$), $axisOptions$$1$$ = D.$DvtJSONUtils$$.$clone$($options$$38$$.xAxis);
  $axisOptions$$1$$.position = $axisOffset_numGroups$$1_position$$9$$;
  $axisOptions$$1$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$31_preferredSize$$);
  $axisOptions$$1$$.groupSeparators = $options$$38$$.styleDefaults.groupSeparators;
  D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$1$$, "x", $chart$$31_preferredSize$$);
  $axisOptions$$1$$.groups = $options$$38$$.groups;
  $axisOptions$$1$$._groupWidthRatios = D.$DvtChartAxisUtils$$.$getGroupWidthRatios$($chart$$31_preferredSize$$);
  $axisOptions$$1$$.timeAxisType = D.$DvtChartAxisUtils$$.$getTimeAxisType$($chart$$31_preferredSize$$);
  $axisOptions$$1$$._environment = $options$$38$$._environment;
  $axisOptions$$1$$._locale = $options$$38$$._locale;
  $axisOptions$$1$$.drilling = $options$$38$$.drilling;
  var $axis$$66_isHoriz$$6$$ = "top" == $axisOffset_numGroups$$1_position$$9$$ || "bottom" == $axisOffset_numGroups$$1_position$$9$$, $isGridShifted$$ = D.$DvtChartAxisUtils$$.$isGridShifted$($chart$$31_preferredSize$$);
  "tangential" == $axisOffset_numGroups$$1_position$$9$$ && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$31_preferredSize$$) ? $isGridShifted$$ ? ($axisOptions$$1$$.startGroupOffset = 0.5, $axisOptions$$1$$.endGroupOffset = 0.5) : $axisOptions$$1$$.endGroupOffset = 1 : ($axisOffset_numGroups$$1_position$$9$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$31_preferredSize$$), $axisOptions$$1$$.startGroupOffset = $axisOffset_numGroups$$1_position$$9$$, $axisOptions$$1$$.endGroupOffset = $axisOffset_numGroups$$1_position$$9$$, 
  D.$DvtChartTypeUtils$$.$hasUncenteredSeries$($chart$$31_preferredSize$$) && ($axisOptions$$1$$.endGroupOffset += 1), !D.$DvtChartEventUtils$$.$isScrollable$($chart$$31_preferredSize$$) && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$31_preferredSize$$) && ($axisOffset_numGroups$$1_position$$9$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$31_preferredSize$$), D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$31_preferredSize$$, "y") && D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$31_preferredSize$$, 
  "y") && ($axisOptions$$1$$[($axis$$66_isHoriz$$6$$ ? "start" : "end") + "GroupOffset"] += 0.04 * $axisOffset_numGroups$$1_position$$9$$), D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$31_preferredSize$$, "y2") && D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$31_preferredSize$$, "y2") && ($axisOptions$$1$$[($axis$$66_isHoriz$$6$$ ? "end" : "start") + "GroupOffset"] += 0.04 * $axisOffset_numGroups$$1_position$$9$$)));
  $axisOptions$$1$$.leftBuffer = $axis$$66_isHoriz$$6$$ ? $availSpace$$20$$.x - $totalAvailSpace$$1$$.x : 0;
  $axisOptions$$1$$.rightBuffer = $axis$$66_isHoriz$$6$$ ? $totalAvailSpace$$1$$.$w$ + $totalAvailSpace$$1$$.x - ($availSpace$$20$$.$w$ + $availSpace$$20$$.x) : 0;
  $axisOptions$$1$$._renderGridAtLabels = !$isGridShifted$$ || D.$DvtChartAxisUtils$$.$hasTimeAxis$($chart$$31_preferredSize$$);
  $axis$$66_isHoriz$$6$$ = new D.$DvtChartAxis$$($chart$$31_preferredSize$$.$getCtx$(), $chart$$31_preferredSize$$.$processEvent$, $chart$$31_preferredSize$$);
  $container$$21$$.$addChild$($axis$$66_isHoriz$$6$$);
  $chart$$31_preferredSize$$ = D.$DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$31_preferredSize$$, $axis$$66_isHoriz$$6$$, $chart$$31_preferredSize$$.$xAxis$, $axisOptions$$1$$, "x", $availSpace$$20$$, $totalAvailSpace$$1$$);
  $axisOptions$$1$$._minOverflowCoord = $options$$38$$._minOverflowCoord - $availSpace$$20$$.x;
  $axisOptions$$1$$._maxOverflowCoord = $options$$38$$._maxOverflowCoord - $availSpace$$20$$.x;
  return{axis:$axis$$66_isHoriz$$6$$, options:$axisOptions$$1$$, $dim$:$chart$$31_preferredSize$$}
};
D.$DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($chart$$32$$, $container$$22_preferredSize$$1$$, $availSpace$$21$$, $totalAvailSpace$$2$$) {
  var $options$$39$$ = $chart$$32$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$32$$)) {
    return null
  }
  var $axisOptions$$2$$ = D.$DvtJSONUtils$$.$clone$($options$$39$$.yAxis);
  $axisOptions$$2$$.position = D.$DvtChartAxisUtils$$.$getYAxisPosition$($chart$$32$$);
  $axisOptions$$2$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$32$$);
  D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$2$$, "y", $chart$$32$$);
  D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($axisOptions$$2$$, $chart$$32$$);
  var $axis$$67$$ = new D.$DvtChartAxis$$($chart$$32$$.$getCtx$(), $chart$$32$$.$processEvent$, $chart$$32$$);
  $container$$22_preferredSize$$1$$.$addChild$($axis$$67$$);
  $container$$22_preferredSize$$1$$ = D.$DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$32$$, $axis$$67$$, $chart$$32$$.$yAxis$, $axisOptions$$2$$, "y", $availSpace$$21$$, $totalAvailSpace$$2$$);
  D.$DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($axis$$67$$, $axisOptions$$2$$, $chart$$32$$, "y");
  $options$$39$$.yAxis.min = $axisOptions$$2$$.min;
  $options$$39$$.yAxis.max = $axisOptions$$2$$.max;
  return{axis:$axis$$67$$, options:$axisOptions$$2$$, $dim$:$container$$22_preferredSize$$1$$}
};
D.$DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($chart$$33$$, $container$$23_preferredSize$$2$$, $availSpace$$22$$, $totalAvailSpace$$3$$) {
  var $options$$40$$ = $chart$$33$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$33$$)) {
    var $axisOptions$$3$$ = D.$DvtJSONUtils$$.$clone$($options$$40$$.y2Axis);
    $axisOptions$$3$$.position = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$33$$);
    $axisOptions$$3$$.isStandalone = D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$33$$);
    D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$3$$, "y2", $chart$$33$$);
    D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($axisOptions$$3$$, $chart$$33$$);
    var $axis$$68$$ = new D.$DvtChartAxis$$($chart$$33$$.$getCtx$(), $chart$$33$$.$processEvent$, $chart$$33$$);
    $container$$23_preferredSize$$2$$.$addChild$($axis$$68$$);
    $container$$23_preferredSize$$2$$ = D.$DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$33$$, $axis$$68$$, $chart$$33$$.$y2Axis$, $axisOptions$$3$$, "y2", $availSpace$$22$$, $totalAvailSpace$$3$$);
    D.$DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($axis$$68$$, $axisOptions$$3$$, $chart$$33$$, "y2");
    $options$$40$$.y2Axis.min = $axisOptions$$3$$.min;
    $options$$40$$.y2Axis.max = $axisOptions$$3$$.max;
    return{axis:$axis$$68$$, options:$axisOptions$$3$$, $dim$:$container$$23_preferredSize$$2$$}
  }
};
D.$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonAxisAttributes$$($axisOptions$$4$$, $dataValues_type$$69$$, $chart$$34$$) {
  var $options$$41$$ = $chart$$34$$.$getOptions$();
  $axisOptions$$4$$.skin = $options$$41$$.skin;
  $axisOptions$$4$$.tickLabel.position = D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$34$$, $dataValues_type$$69$$) ? "inside" : "outside";
  $axisOptions$$4$$.baselineScaling = D.$DvtChartAxisUtils$$.$getBaselineScaling$($chart$$34$$, $dataValues_type$$69$$);
  if(D.$DvtChartAxisUtils$$.$isTickLabelInside$($chart$$34$$, $dataValues_type$$69$$) || "tangential" == $axisOptions$$4$$.position) {
    $axisOptions$$4$$._skipHighestTick = !0
  }
  $axisOptions$$4$$.zoomAndScroll = D.$DvtChartTypeUtils$$.$isPolar$($chart$$34$$) ? "off" : $options$$41$$.zoomAndScroll;
  $axisOptions$$4$$._isOverview = D.$DvtChartTypeUtils$$.$isOverview$($chart$$34$$);
  if("x" != $dataValues_type$$69$$ || !D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$34$$)) {
    $dataValues_type$$69$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$34$$, $dataValues_type$$69$$), $axisOptions$$4$$.dataMin = null != $axisOptions$$4$$.dataMin ? $axisOptions$$4$$.dataMin : $dataValues_type$$69$$.min, $axisOptions$$4$$.dataMax = null != $axisOptions$$4$$.dataMax ? $axisOptions$$4$$.dataMax : $dataValues_type$$69$$.max
  }
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$34$$) && ($axisOptions$$4$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$34$$) ? "polygon" : "circle", $axisOptions$$4$$._radius = $chart$$34$$.$getRadius$())
};
D.$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonYAxisAttributes$$($axisOptions$$5$$, $chart$$35$$) {
  $axisOptions$$5$$.timeAxisType = "disabled";
  D.$DvtChartEventUtils$$.$isLiveScroll$($chart$$35$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$35$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$35$$)) && ($axisOptions$$5$$._continuousExtent = "on");
  if($axisOptions$$5$$.isStandalone) {
    $axisOptions$$5$$.leftBuffer = 0, $axisOptions$$5$$.rightBuffer = 0
  }else {
    if(D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$35$$)) {
      $axisOptions$$5$$.leftBuffer = window.Infinity, $axisOptions$$5$$.rightBuffer = window.Infinity
    }else {
      var $isR2L$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$35$$.$getCtx$());
      $axisOptions$$5$$.leftBuffer = $isR2L$$1$$ ? 0 : 10;
      $axisOptions$$5$$.rightBuffer = $isR2L$$1$$ ? 10 : 0
    }
  }
};
D.$DvtChartAxisRenderer$$.$_adjustYAxisForLabels$ = function $$DvtChartAxisRenderer$$$$_adjustYAxisForLabels$$($axis$$69_splitYFactor$$, $axisOptions$$6$$, $chart$$36$$, $type$$70$$) {
  var $axisInfo$$11_options$$42$$ = $chart$$36$$.$getOptions$(), $buffer$$8_dataLabelPosition_dataLabelStyle$$ = $axisInfo$$11_options$$42$$.styleDefaults.dataLabelPosition, $isStackLabelRendered_textHeight$$ = D.$DvtChartStyleUtils$$.$isStackLabelRendered$($chart$$36$$);
  if(D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$36$$) && ("outsideBarEdge" == $buffer$$8_dataLabelPosition_dataLabelStyle$$ || $isStackLabelRendered_textHeight$$)) {
    var $buffer$$8_dataLabelPosition_dataLabelStyle$$ = $axisInfo$$11_options$$42$$.styleDefaults.dataLabelStyle, $stackLabelStyle$$ = $axisInfo$$11_options$$42$$.styleDefaults.stackLabelStyle, $axisInfo$$11_options$$42$$ = $axis$$69_splitYFactor$$.$getInfo$(), $isStackLabelRendered_textHeight$$ = D.$DvtTextUtils$$.$getTextStringHeight$($chart$$36$$.$getCtx$(), $isStackLabelRendered_textHeight$$ ? $stackLabelStyle$$ : $buffer$$8_dataLabelPosition_dataLabelStyle$$), $buffer$$8_dataLabelPosition_dataLabelStyle$$ = 
    0;
    "log" == $axisOptions$$6$$.scale ? $buffer$$8_dataLabelPosition_dataLabelStyle$$ = $axis$$69_splitYFactor$$.$getUnboundedValueAt$($axis$$69_splitYFactor$$.$getUnboundedCoordAt$($axisInfo$$11_options$$42$$.$DataMax$) - $isStackLabelRendered_textHeight$$) - $axisInfo$$11_options$$42$$.$DataMax$ : ($axis$$69_splitYFactor$$ = 1, D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$36$$) && ($axis$$69_splitYFactor$$ = "y" == $type$$70$$ ? D.$DvtChartStyleUtils$$.$getSplitterPosition$($chart$$36$$) : 1 - 
    D.$DvtChartStyleUtils$$.$getSplitterPosition$($chart$$36$$)), $buffer$$8_dataLabelPosition_dataLabelStyle$$ = window.Math.abs($axisInfo$$11_options$$42$$.$MaxValue$ - $axisInfo$$11_options$$42$$.$MinValue$) / (window.Math.abs($axisInfo$$11_options$$42$$.$getEndCoord$() - $axisInfo$$11_options$$42$$.$getStartCoord$()) * $axis$$69_splitYFactor$$) * $isStackLabelRendered_textHeight$$);
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$36$$) && ($buffer$$8_dataLabelPosition_dataLabelStyle$$ *= 4);
    $axisInfo$$11_options$$42$$.$DataMin$ - $axisInfo$$11_options$$42$$.$GlobalMin$ < $buffer$$8_dataLabelPosition_dataLabelStyle$$ && 0 > $axisInfo$$11_options$$42$$.$DataMin$ && ($axisOptions$$6$$.dataMin -= $buffer$$8_dataLabelPosition_dataLabelStyle$$);
    $axisInfo$$11_options$$42$$.$GlobalMax$ - $axisInfo$$11_options$$42$$.$DataMax$ < $buffer$$8_dataLabelPosition_dataLabelStyle$$ && 0 < $axisInfo$$11_options$$42$$.$DataMax$ && ($axisOptions$$6$$.dataMax += $buffer$$8_dataLabelPosition_dataLabelStyle$$)
  }
};
D.$DvtChartAxisRenderer$$.$_getPreferredSize$ = function $$DvtChartAxisRenderer$$$$_getPreferredSize$$($chart$$37$$, $axis$$70_isR2L$$2$$, $maxSize$$1_oldAxis$$, $axisOptions$$7$$, $gap$$11_type$$71$$, $availSpace$$23$$, $totalAvailSpace$$4$$) {
  var $axisSize_isStandalone$$ = $axisOptions$$7$$.isStandalone, $position$$10$$ = $axisOptions$$7$$.position, $isHoriz$$7$$ = "top" == $position$$10$$ || "bottom" == $position$$10$$;
  if("radial" == $position$$10$$ || "tangential" == $position$$10$$) {
    return new D.$DvtDimension$$(0, 0)
  }
  if("off" == $axisOptions$$7$$.rendered) {
    return $isHoriz$$7$$ ? new D.$DvtDimension$$($availSpace$$23$$.$w$, 0) : new D.$DvtDimension$$(0, $availSpace$$23$$.$h$)
  }
  $gap$$11_type$$71$$ = D.$DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$37$$, $gap$$11_type$$71$$);
  if($axisSize_isStandalone$$) {
    return $isHoriz$$7$$ ? new D.$DvtDimension$$($availSpace$$23$$.$w$, $availSpace$$23$$.$h$ - $gap$$11_type$$71$$) : new D.$DvtDimension$$($availSpace$$23$$.$w$ - $gap$$11_type$$71$$, $availSpace$$23$$.$h$)
  }
  $axisSize_isStandalone$$ = $axisOptions$$7$$.size;
  if(null != $axisSize_isStandalone$$) {
    return $isHoriz$$7$$ ? new D.$DvtDimension$$($availSpace$$23$$.$w$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisSize_isStandalone$$, $totalAvailSpace$$4$$.$h$) - $gap$$11_type$$71$$) : new D.$DvtDimension$$(D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisSize_isStandalone$$, $totalAvailSpace$$4$$.$w$) - $gap$$11_type$$71$$, $availSpace$$23$$.$h$)
  }
  if($chart$$37$$.$getOptions$()._duringAnimation) {
    return $isHoriz$$7$$ ? ($axis$$70_isR2L$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$37$$.$getCtx$()), $axisOptions$$7$$._startOverflow = $axis$$70_isR2L$$2$$ ? (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($maxSize$$1_oldAxis$$) : (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($maxSize$$1_oldAxis$$), $axisOptions$$7$$._endOverflow = $axis$$70_isR2L$$2$$ ? (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($maxSize$$1_oldAxis$$) : (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($maxSize$$1_oldAxis$$), 
    new D.$DvtDimension$$($availSpace$$23$$.$w$, $maxSize$$1_oldAxis$$.getHeight())) : new D.$DvtDimension$$($maxSize$$1_oldAxis$$.getWidth(), $availSpace$$23$$.$h$)
  }
  $maxSize$$1_oldAxis$$ = $axisOptions$$7$$.maxSize;
  return $isHoriz$$7$$ ? $axis$$70_isR2L$$2$$.$getPreferredSize$($axisOptions$$7$$, $availSpace$$23$$.$w$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($maxSize$$1_oldAxis$$, $totalAvailSpace$$4$$.$h$) - $gap$$11_type$$71$$) : $axis$$70_isR2L$$2$$.$getPreferredSize$($axisOptions$$7$$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($maxSize$$1_oldAxis$$, $totalAvailSpace$$4$$.$w$) - $gap$$11_type$$71$$, $availSpace$$23$$.$h$)
};
D.$DvtChartAxisRenderer$$.$_addAxisGaps$ = function $$DvtChartAxisRenderer$$$$_addAxisGaps$$($chart$$38$$, $availSpace$$24$$) {
  var $isHoriz$$8$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$38$$), $yPosition$$1$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($chart$$38$$), $y2Position$$1$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$38$$), $isXRendered$$ = D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$38$$, "x"), $isYRendered$$ = D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$38$$, "y"), $isY2Rendered$$ = D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$38$$, "y2"), $axisGap$$ = $chart$$38$$.$getOptions$().layout.verticalAxisGap, 
  $axisGap$$ = $isHoriz$$8$$ ? $axisGap$$ * D.$DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$38$$, "x") : $axisGap$$ * window.Math.max(D.$DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$38$$, "y"), D.$DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$38$$, "y2")), $axisGap$$ = window.Math.ceil($axisGap$$);
  if($isHoriz$$8$$ && !("top" == $yPosition$$1$$ && $isYRendered$$) && !("top" == $y2Position$$1$$ && $isY2Rendered$$) || !$isHoriz$$8$$) {
    $availSpace$$24$$.y += $axisGap$$, $availSpace$$24$$.$h$ -= $axisGap$$
  }
  if($isHoriz$$8$$ && !("bottom" == $yPosition$$1$$ && $isYRendered$$) && !("bottom" == $y2Position$$1$$ && $isY2Rendered$$) || !$isHoriz$$8$$ && !$isXRendered$$) {
    $availSpace$$24$$.$h$ -= $axisGap$$
  }
};
D.$DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($availSpace$$25$$, $axisInfo$$12$$, $gap$$12$$) {
  $axisInfo$$12$$ && (0,D.$DvtLayoutUtils$position$$)($availSpace$$25$$, $axisInfo$$12$$.options.position, $axisInfo$$12$$.axis, $axisInfo$$12$$.$dim$.$w$, $axisInfo$$12$$.$dim$.$h$, $gap$$12$$)
};
D.$DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($yInfo$$2$$, $y2Info$$1$$) {
  var $yAxisInfo$$ = $yInfo$$2$$.axis.$getInfo$();
  if($yAxisInfo$$) {
    var $minorTickCount$$ = $yAxisInfo$$.$getMinorTickCount$(), $y2Options$$ = $y2Info$$1$$.options;
    $y2Options$$._majorTickCount = $yAxisInfo$$.$getMajorTickCount$();
    $y2Options$$._minorTickCount = $minorTickCount$$
  }
};
D.$DvtChartAxisRenderer$$.$_getSplitAvailSpace$ = function $$DvtChartAxisRenderer$$$$_getSplitAvailSpace$$($availSpace$$26$$, $splitRatio$$, $isHoriz$$9$$, $isEnd$$) {
  var $splitSpace$$ = $availSpace$$26$$.$clone$();
  $isHoriz$$9$$ ? ($splitSpace$$.$w$ = $availSpace$$26$$.$w$ * $splitRatio$$, $splitSpace$$.x = $isEnd$$ ? $availSpace$$26$$.$w$ * (1 - $splitRatio$$) : 0) : ($splitSpace$$.$h$ = $availSpace$$26$$.$h$ * $splitRatio$$, $splitSpace$$.y = $isEnd$$ ? $availSpace$$26$$.$h$ * (1 - $splitRatio$$) : 0);
  return $splitSpace$$
};
D.$DvtChartAxisRenderer$$.$_setOverflow$ = function $$DvtChartAxisRenderer$$$$_setOverflow$$($availSpace$$27$$, $rightOverflow_xInfo$$2$$, $yInfo$$3$$, $y2Info$$2$$) {
  if($rightOverflow_xInfo$$2$$) {
    var $leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($rightOverflow_xInfo$$2$$.axis);
    $rightOverflow_xInfo$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($rightOverflow_xInfo$$2$$.axis);
    $availSpace$$27$$.x += $leftOverflow$$;
    $availSpace$$27$$.$w$ -= $leftOverflow$$ + $rightOverflow_xInfo$$2$$;
    $yInfo$$3$$ && $yInfo$$3$$.axis.$setTranslateX$($yInfo$$3$$.axis.$getTranslateX$() + ("left" == $yInfo$$3$$.options.position ? $leftOverflow$$ : -$rightOverflow_xInfo$$2$$));
    $y2Info$$2$$ && $y2Info$$2$$.axis.$setTranslateX$($y2Info$$2$$.axis.$getTranslateX$() + ("left" == $y2Info$$2$$.options.position ? $leftOverflow$$ : -$rightOverflow_xInfo$$2$$))
  }
};
D.$DvtChartAxisRenderer$$.$_storeAxes$ = function $$DvtChartAxisRenderer$$$$_storeAxes$$($chart$$39$$, $xInfo$$3$$, $yInfo$$4$$, $y2Info$$3$$) {
  $chart$$39$$.$xAxis$ && ($chart$$39$$.$xAxis$.$destroy$(), $chart$$39$$.removeChild($chart$$39$$.$xAxis$));
  $chart$$39$$.$yAxis$ && ($chart$$39$$.$yAxis$.$destroy$(), $chart$$39$$.removeChild($chart$$39$$.$yAxis$));
  $chart$$39$$.$y2Axis$ && ($chart$$39$$.$y2Axis$.$destroy$(), $chart$$39$$.removeChild($chart$$39$$.$y2Axis$));
  $chart$$39$$.$xAxis$ = $xInfo$$3$$.axis;
  $chart$$39$$.$yAxis$ = $yInfo$$4$$ ? $yInfo$$4$$.axis : null;
  $chart$$39$$.$y2Axis$ = $y2Info$$3$$ ? $y2Info$$3$$.axis : null
};
D.$DvtChartLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLegendRenderer$$, D.$DvtObj$$, "DvtChartLegendRenderer");
D.$DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($chart$$40$$, $container$$24$$, $availSpace$$28_bounds$$9$$) {
  var $options$$43$$ = $chart$$40$$.$getOptions$(), $position$$11$$ = $options$$43$$.legend.position;
  if("on" == $options$$43$$.legend.rendered) {
    var $gap$$13_legendOptions$$2$$ = D.$DvtJSONUtils$$.$clone$($options$$43$$.legend);
    delete $gap$$13_legendOptions$$2$$.position;
    $gap$$13_legendOptions$$2$$.skin = $options$$43$$.skin;
    $gap$$13_legendOptions$$2$$.hideAndShowBehavior = D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$40$$);
    $gap$$13_legendOptions$$2$$.hoverBehavior = D.$DvtChartEventUtils$$.$getHoverBehavior$($chart$$40$$);
    $gap$$13_legendOptions$$2$$.hoverBehaviorDelay = D.$DvtChartStyleUtils$$.$getHoverBehaviorDelay$($chart$$40$$);
    $gap$$13_legendOptions$$2$$.hiddenCategories = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$40$$);
    $gap$$13_legendOptions$$2$$.highlightedCategories = D.$DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$40$$);
    "auto" == $position$$11$$ && ($position$$11$$ = $availSpace$$28_bounds$$9$$.$w$ >= $availSpace$$28_bounds$$9$$.$h$ ? "end" : "bottom");
    var $isHoriz$$10_shiftedPos$$ = "top" == $position$$11$$ || "bottom" == $position$$11$$;
    $gap$$13_legendOptions$$2$$.orientation = $isHoriz$$10_shiftedPos$$ ? "horizontal" : "vertical";
    "start" == $position$$11$$ && ($gap$$13_legendOptions$$2$$.halign = "end");
    if("start" == $position$$11$$ || "end" == $position$$11$$) {
      $gap$$13_legendOptions$$2$$.valign = "middle"
    }
    "top" == $position$$11$$ && ($gap$$13_legendOptions$$2$$.valign = "bottom");
    if("top" == $position$$11$$ || "bottom" == $position$$11$$) {
      $gap$$13_legendOptions$$2$$.halign = "center"
    }
    D.$DvtChartLegendRenderer$$.$_addLegendData$($chart$$40$$, $gap$$13_legendOptions$$2$$);
    if(0 != $gap$$13_legendOptions$$2$$.sections.length) {
      var $legend$$1$$ = (0,D.$DvtLegend$newInstance$$)($chart$$40$$.$getCtx$(), $chart$$40$$.$processEvent$, $chart$$40$$);
      null != $chart$$40$$.getId() && $legend$$1$$.setId($chart$$40$$.getId() + "legend");
      $container$$24$$.$addChild$($legend$$1$$);
      var $actualSize_isRTL$$14_maxWidth$$5$$;
      if(null != $gap$$13_legendOptions$$2$$.size) {
        $actualSize_isRTL$$14_maxWidth$$5$$ = $isHoriz$$10_shiftedPos$$ ? new D.$DvtDimension$$($availSpace$$28_bounds$$9$$.$w$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($gap$$13_legendOptions$$2$$.size, $availSpace$$28_bounds$$9$$.$h$)) : new D.$DvtDimension$$(D.$DvtChartStyleUtils$$.$getSizeInPixels$($gap$$13_legendOptions$$2$$.size, $availSpace$$28_bounds$$9$$.$w$), $availSpace$$28_bounds$$9$$.$h$)
      }else {
        $actualSize_isRTL$$14_maxWidth$$5$$ = $isHoriz$$10_shiftedPos$$ ? $availSpace$$28_bounds$$9$$.$w$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($gap$$13_legendOptions$$2$$.maxSize, $availSpace$$28_bounds$$9$$.$w$);
        var $maxHeight$$3$$ = $isHoriz$$10_shiftedPos$$ ? D.$DvtChartStyleUtils$$.$getSizeInPixels$($gap$$13_legendOptions$$2$$.maxSize, $availSpace$$28_bounds$$9$$.$h$) : $availSpace$$28_bounds$$9$$.$h$;
        $actualSize_isRTL$$14_maxWidth$$5$$ = $legend$$1$$.$getPreferredSize$($gap$$13_legendOptions$$2$$, $actualSize_isRTL$$14_maxWidth$$5$$, $maxHeight$$3$$)
      }
      $legend$$1$$.$render$($gap$$13_legendOptions$$2$$, $actualSize_isRTL$$14_maxWidth$$5$$.$w$, $actualSize_isRTL$$14_maxWidth$$5$$.$h$);
      $gap$$13_legendOptions$$2$$ = $isHoriz$$10_shiftedPos$$ ? (0,D.$DvtChartDefaults$getGapHeight$$)($chart$$40$$, $options$$43$$.layout.legendGapHeight) : window.Math.ceil($options$$43$$.layout.legendGapWidth * (0,D.$JSCompiler_StaticMethods_getGapWidthRatio$$)($chart$$40$$));
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$28_bounds$$9$$, $position$$11$$, $legend$$1$$, $actualSize_isRTL$$14_maxWidth$$5$$.$w$, $actualSize_isRTL$$14_maxWidth$$5$$.$h$, $gap$$13_legendOptions$$2$$);
      $availSpace$$28_bounds$$9$$ = $legend$$1$$.$_bounds$;
      $isHoriz$$10_shiftedPos$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($legend$$1$$, new D.$DvtPoint$$($availSpace$$28_bounds$$9$$.x, $availSpace$$28_bounds$$9$$.y));
      $availSpace$$28_bounds$$9$$.x = $isHoriz$$10_shiftedPos$$.x;
      $availSpace$$28_bounds$$9$$.y = $isHoriz$$10_shiftedPos$$.y;
      D.$DvtChartTypeUtils$$.$isOverview$($chart$$40$$) || ($actualSize_isRTL$$14_maxWidth$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$40$$.$getCtx$()), "end" == $position$$11$$ ? $actualSize_isRTL$$14_maxWidth$$5$$ ? $options$$43$$._minOverflowCoord = $isHoriz$$10_shiftedPos$$.x + $availSpace$$28_bounds$$9$$.$w$ + $gap$$13_legendOptions$$2$$ / 2 : $options$$43$$._maxOverflowCoord = $isHoriz$$10_shiftedPos$$.x - $gap$$13_legendOptions$$2$$ / 2 : "start" == $position$$11$$ && ($actualSize_isRTL$$14_maxWidth$$5$$ ? 
      $options$$43$$._maxOverflowCoord = $isHoriz$$10_shiftedPos$$.x - $gap$$13_legendOptions$$2$$ / 2 : $options$$43$$._minOverflowCoord = $isHoriz$$10_shiftedPos$$.x + $availSpace$$28_bounds$$9$$.$w$ + $gap$$13_legendOptions$$2$$ / 2));
      $chart$$40$$.$legend$ && ($chart$$40$$.$legend$.$destroy$(), $container$$24$$.removeChild($chart$$40$$.$legend$));
      $chart$$40$$.$legend$ = $legend$$1$$
    }
  }
};
D.$DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($chart$$41$$, $legendOptions$$3$$) {
  var $refObjItems_seriesItems$$2$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItems$($chart$$41$$, "vertical" == $legendOptions$$3$$.orientation);
  if(0 < $refObjItems_seriesItems$$2$$.length) {
    var $refObjSection_seriesSection$$ = $legendOptions$$3$$.seriesSection;
    $refObjSection_seriesSection$$.items = $refObjItems_seriesItems$$2$$;
    $legendOptions$$3$$.sections.unshift($refObjSection_seriesSection$$)
  }
  $refObjItems_seriesItems$$2$$ = D.$DvtChartLegendRenderer$$.$_getRefObjItems$($chart$$41$$);
  0 < $refObjItems_seriesItems$$2$$.length && ($refObjSection_seriesSection$$ = $legendOptions$$3$$.referenceObjectSection, $refObjSection_seriesSection$$.items = $refObjItems_seriesItems$$2$$, $legendOptions$$3$$.referenceObjectTitle && ($refObjSection_seriesSection$$.title = $legendOptions$$3$$.referenceObjectTitle), $legendOptions$$3$$.sections.push($refObjSection_seriesSection$$))
};
D.$DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($chart$$42$$, $isVertical$$) {
  var $ret$$4$$ = [], $categoryKeys_legendItem$$1$$, $bReversed_seriesIndex$$16$$;
  if("pie" == $chart$$42$$.$getType$()) {
    for(var $seriesIndices_yCategoryMap$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$($chart$$42$$), $i$$161_y2CategoryMap$$ = 0;$i$$161_y2CategoryMap$$ < $seriesIndices_yCategoryMap$$.length;$i$$161_y2CategoryMap$$++) {
      $bReversed_seriesIndex$$16$$ = $seriesIndices_yCategoryMap$$[$i$$161_y2CategoryMap$$], ($categoryKeys_legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$42$$, $bReversed_seriesIndex$$16$$)) && $ret$$4$$.push($categoryKeys_legendItem$$1$$)
    }
    D.$DvtPieChartUtils$$.$hasOtherSeries$($chart$$42$$) && ($categoryKeys_legendItem$$1$$ = {id:D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, text:(0,D.$DvtBundle$getTranslation$$)($chart$$42$$.$getOptions$(), "labelOther", "DvtChartBundle", "LABEL_OTHER"), categoryVisibility:0 <= D.$DvtArrayUtils$$.$getIndex$(D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$42$$), D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$) ? "hidden" : "visible", symbolType:"marker", color:$chart$$42$$.$getOptions$().styleDefaults.otherColor, 
    borderColor:$chart$$42$$.$getOptions$().styleDefaults.borderColor}, $ret$$4$$.push($categoryKeys_legendItem$$1$$))
  }else {
    var $seriesIndices_yCategoryMap$$ = {}, $i$$161_y2CategoryMap$$ = {}, $seriesCount$$5$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$42$$);
    for($bReversed_seriesIndex$$16$$ = 0;$bReversed_seriesIndex$$16$$ < $seriesCount$$5$$;$bReversed_seriesIndex$$16$$++) {
      if($categoryKeys_legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$42$$, $bReversed_seriesIndex$$16$$)) {
        var $category$$2$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$42$$, $bReversed_seriesIndex$$16$$);
        D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$42$$, $bReversed_seriesIndex$$16$$) ? $i$$161_y2CategoryMap$$[$category$$2$$] ? $i$$161_y2CategoryMap$$[$category$$2$$].push($categoryKeys_legendItem$$1$$) : $i$$161_y2CategoryMap$$[$category$$2$$] = [$categoryKeys_legendItem$$1$$] : $seriesIndices_yCategoryMap$$[$category$$2$$] ? $seriesIndices_yCategoryMap$$[$category$$2$$].push($categoryKeys_legendItem$$1$$) : $seriesIndices_yCategoryMap$$[$category$$2$$] = [$categoryKeys_legendItem$$1$$]
      }
    }
    $categoryKeys_legendItem$$1$$ = D.$DvtChartDataUtils$$.$getStackCategories$($chart$$42$$, null, !0);
    $bReversed_seriesIndex$$16$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$42$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$42$$) && $isVertical$$;
    $ret$$4$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($seriesIndices_yCategoryMap$$, $categoryKeys_legendItem$$1$$.y, $bReversed_seriesIndex$$16$$, $ret$$4$$);
    $ret$$4$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($i$$161_y2CategoryMap$$, $categoryKeys_legendItem$$1$$.y2, $bReversed_seriesIndex$$16$$, $ret$$4$$)
  }
  return $ret$$4$$
};
D.$DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$ = function $$DvtChartLegendRenderer$$$$_getSeriesItemsForAxis$$($categoryMap$$, $categoryKeys$$1$$, $bReversed$$1$$, $ret$$5$$) {
  for(var $legendItemArray$$, $categoryIndex$$ = 0;$categoryIndex$$ < $categoryKeys$$1$$.length;$categoryIndex$$++) {
    ($legendItemArray$$ = $categoryMap$$[$categoryKeys$$1$$[$categoryIndex$$]]) && ($ret$$5$$ = $bReversed$$1$$ ? $ret$$5$$.concat($legendItemArray$$.reverse()) : $ret$$5$$.concat($legendItemArray$$))
  }
  return $ret$$5$$
};
D.$DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($chart$$43$$, $seriesIndex$$17$$) {
  var $seriesItem$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$43$$, $seriesIndex$$17$$), $chartType$$ = $chart$$43$$.$getType$(), $seriesType$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$43$$, $seriesIndex$$17$$), $lineType$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$43$$, $seriesIndex$$17$$), $displayInLegend_legendItem$$2$$ = $seriesItem$$1$$.displayInLegend;
  if(!$seriesItem$$1$$ || "off" == $displayInLegend_legendItem$$2$$ || "on" != $displayInLegend_legendItem$$2$$ && (D.$DvtChartTypeUtils$$.$isFunnel$($chart$$43$$) || D.$DvtChartTypeUtils$$.$isStock$($chart$$43$$)) || "on" != $displayInLegend_legendItem$$2$$ && !D.$DvtChartDataUtils$$.$hasSeriesData$($chart$$43$$, $seriesIndex$$17$$)) {
    return null
  }
  var $seriesLabel$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$43$$, $seriesIndex$$17$$);
  if("on" != $displayInLegend_legendItem$$2$$ && (!$seriesLabel$$ || 0 >= D.$DvtStringUtils$$.trim($seriesLabel$$).length)) {
    return null
  }
  $displayInLegend_legendItem$$2$$ = {id:D.$DvtChartDataUtils$$.$getSeries$($chart$$43$$, $seriesIndex$$17$$), text:$seriesLabel$$, categories:D.$DvtChartDataUtils$$.$getSeriesCategories$($chart$$43$$, $seriesIndex$$17$$), categoryVisibility:D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$43$$, $seriesIndex$$17$$) ? "visible" : "hidden"};
  "line" == $seriesType$$2$$ || "lineWithArea" == $seriesType$$2$$ || "scatter" == $chartType$$ || "bubble" == $chartType$$ ? ($displayInLegend_legendItem$$2$$.lineStyle = D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$43$$, $seriesIndex$$17$$), $displayInLegend_legendItem$$2$$.lineWidth = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$43$$, $seriesIndex$$17$$), D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$43$$, $seriesIndex$$17$$) ? ($displayInLegend_legendItem$$2$$.symbolType = "none" == 
  $lineType$$ ? "marker" : "lineWithMarker", $displayInLegend_legendItem$$2$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$43$$, $seriesIndex$$17$$), $displayInLegend_legendItem$$2$$.markerColor = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$43$$, $seriesIndex$$17$$)) : $displayInLegend_legendItem$$2$$.symbolType = "line") : ($displayInLegend_legendItem$$2$$.symbolType = "marker", "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$43$$, $seriesIndex$$17$$) && ($displayInLegend_legendItem$$2$$.markerShape = 
  D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$43$$, $seriesIndex$$17$$)));
  $displayInLegend_legendItem$$2$$.color = D.$DvtChartStyleUtils$$.$getColor$($chart$$43$$, $seriesIndex$$17$$);
  $displayInLegend_legendItem$$2$$.borderColor = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$43$$, $seriesIndex$$17$$);
  $displayInLegend_legendItem$$2$$.pattern = D.$DvtChartStyleUtils$$.$getPattern$($chart$$43$$, $seriesIndex$$17$$);
  $displayInLegend_legendItem$$2$$.action = $seriesItem$$1$$.action;
  $displayInLegend_legendItem$$2$$._spb = $chart$$43$$.$getShowPopupBehaviors$($seriesItem$$1$$._id);
  $displayInLegend_legendItem$$2$$.drilling = D.$DvtChartEventUtils$$.$isSeriesDrillable$($chart$$43$$, $seriesIndex$$17$$) ? "on" : "off";
  $displayInLegend_legendItem$$2$$.shortDesc = $seriesItem$$1$$.shortDesc;
  return $displayInLegend_legendItem$$2$$
};
D.$DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($chart$$44$$) {
  var $refObjs$$ = D.$DvtChartRefObjUtils$$.$getRefObjs$($chart$$44$$);
  if(0 >= $refObjs$$.length) {
    return[]
  }
  for(var $items$$1$$ = [], $i$$162$$ = 0;$i$$162$$ < $refObjs$$.length;$i$$162$$++) {
    var $refObj$$2$$ = $refObjs$$[$i$$162$$];
    if($refObj$$2$$ && "on" == $refObj$$2$$.displayInLegend && $refObj$$2$$.text) {
      var $type$$72$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$2$$);
      $items$$1$$.push({symbolType:"area" == $type$$72$$ ? "square" : "line", text:$refObj$$2$$.text, color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$2$$), lineStyle:$refObj$$2$$.lineStyle, lineWidth:D.$DvtChartRefObjUtils$$.$getLineWidth$($refObj$$2$$), categories:D.$DvtChartRefObjUtils$$.$getRefObjCategories$($refObj$$2$$), categoryVisibility:D.$DvtChartRefObjUtils$$.$isObjectRendered$($chart$$44$$, $refObj$$2$$) ? "visible" : "hidden", shortDesc:$refObj$$2$$.shortDesc})
    }
  }
  return $items$$1$$
};
D.$DvtPlotAreaRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPlotAreaRenderer$$, D.$DvtObj$$, "DvtPlotAreaRenderer");
D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
D.$DvtPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$ = 1E4;
D.$DvtPlotAreaRenderer$$.$render$ = function $$DvtPlotAreaRenderer$$$$render$$($chart$$64$$, $container$$39$$, $availSpace$$46$$) {
  "off" == $chart$$64$$.$getOptions$().plotArea.rendered ? D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$64$$, $container$$39$$, $availSpace$$46$$) : 0 < $availSpace$$46$$.$w$ && 0 < $availSpace$$46$$.$h$ && ($chart$$64$$.$_currentMarkers$ = [], $chart$$64$$.$_currentAreas$ = [], D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$($chart$$64$$, $container$$39$$, $availSpace$$46$$), D.$DvtPlotAreaRenderer$$.$_renderTicks$($chart$$64$$, $container$$39$$, $availSpace$$46$$), D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$($chart$$64$$, 
  $container$$39$$, $availSpace$$46$$))
};
D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderBackgroundObjects$$($chart$$65$$, $container$$40$$, $availSpace$$47$$) {
  var $areaContainer$$2_clipGroup_options$$53$$ = $chart$$65$$.$getOptions$(), $background$$1$$ = D.$DvtPlotAreaRenderer$$.$_getBackgroundShape$($chart$$65$$, $availSpace$$47$$), $backgroundColor$$6$$ = D.$DvtChartStyleUtils$$.$getBackgroundColor$($chart$$65$$);
  $backgroundColor$$6$$ ? $background$$1$$.$setSolidFill$($backgroundColor$$6$$) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$1$$);
  $container$$40$$.$addChild$($background$$1$$);
  if($areaContainer$$2_clipGroup_options$$53$$.xAxis.referenceObjects || $areaContainer$$2_clipGroup_options$$53$$.yAxis.referenceObjects || $areaContainer$$2_clipGroup_options$$53$$.y2Axis.referenceObjects) {
    $areaContainer$$2_clipGroup_options$$53$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$65$$, $container$$40$$, $availSpace$$47$$), D.$DvtRefObjRenderer$$.$renderBackgroundObjects$($chart$$65$$, $areaContainer$$2_clipGroup_options$$53$$, $availSpace$$47$$)
  }
  D.$DvtChartTypeUtils$$.$isBLAC$($chart$$65$$) && ($areaContainer$$2_clipGroup_options$$53$$ = new D.$DvtContainer$$($chart$$65$$.$getCtx$()), $container$$40$$.$addChild$($areaContainer$$2_clipGroup_options$$53$$), $chart$$65$$.$_areaContainer$ = $areaContainer$$2_clipGroup_options$$53$$, D.$DvtChartTypeUtils$$.$hasAreaSeries$($chart$$65$$) && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$65$$, $areaContainer$$2_clipGroup_options$$53$$, $availSpace$$47$$, !1))
};
D.$DvtPlotAreaRenderer$$.$_getBackgroundShape$ = function $$DvtPlotAreaRenderer$$$$_getBackgroundShape$$($chart$$66$$, $availSpace$$48$$) {
  var $background$$2_context$$44$$;
  $background$$2_context$$44$$ = $chart$$66$$.$getCtx$();
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$66$$)) {
    var $cx$$1_points$$2$$ = $availSpace$$48$$.x + $availSpace$$48$$.$w$ / 2, $cy$$2$$ = $availSpace$$48$$.y + $availSpace$$48$$.$h$ / 2;
    D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$66$$) ? ($cx$$1_points$$2$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($cx$$1_points$$2$$, $cy$$2$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$66$$), $chart$$66$$.$getRadius$()), $background$$2_context$$44$$ = new D.$DvtPolygon$$($background$$2_context$$44$$, $cx$$1_points$$2$$)) : $background$$2_context$$44$$ = new D.$DvtCircle$$($background$$2_context$$44$$, $cx$$1_points$$2$$, $cy$$2$$, $chart$$66$$.$getRadius$())
  }else {
    $background$$2_context$$44$$ = new D.$DvtRect$$($background$$2_context$$44$$, $availSpace$$48$$.x, $availSpace$$48$$.y, $availSpace$$48$$.$w$, $availSpace$$48$$.$h$)
  }
  return $background$$2_context$$44$$
};
D.$DvtPlotAreaRenderer$$.$_renderTicks$ = function $$DvtPlotAreaRenderer$$$$_renderTicks$$($chart$$67$$, $container$$41$$, $availSpace$$49$$) {
  $chart$$67$$.$xAxis$ && D.$DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$67$$, "x") && D.$DvtPlotAreaRenderer$$.$_renderMinorTicks$($chart$$67$$, $container$$41$$, $chart$$67$$.$xAxis$, $availSpace$$49$$);
  $chart$$67$$.$yAxis$ && D.$DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$67$$, "y") && D.$DvtPlotAreaRenderer$$.$_renderMinorTicks$($chart$$67$$, $container$$41$$, $chart$$67$$.$yAxis$, $availSpace$$49$$);
  $chart$$67$$.$y2Axis$ && D.$DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$67$$, "y2") && D.$DvtPlotAreaRenderer$$.$_renderMinorTicks$($chart$$67$$, $container$$41$$, $chart$$67$$.$y2Axis$, $availSpace$$49$$);
  $chart$$67$$.$xAxis$ && D.$DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$67$$, "x") && D.$DvtPlotAreaRenderer$$.$_renderMajorTicks$($chart$$67$$, $container$$41$$, $chart$$67$$.$xAxis$, $availSpace$$49$$);
  $chart$$67$$.$yAxis$ && D.$DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$67$$, "y") && D.$DvtPlotAreaRenderer$$.$_renderMajorTicks$($chart$$67$$, $container$$41$$, $chart$$67$$.$yAxis$, $availSpace$$49$$);
  $chart$$67$$.$y2Axis$ && D.$DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$67$$, "y2") && D.$DvtPlotAreaRenderer$$.$_renderMajorTicks$($chart$$67$$, $container$$41$$, $chart$$67$$.$y2Axis$, $availSpace$$49$$)
};
D.$DvtPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtPlotAreaRenderer$$$$_renderAxisLines$$($chart$$68$$, $container$$42$$, $availSpace$$50$$) {
  $chart$$68$$.$xAxis$ && ($chart$$68$$.$yAxis$ && D.$DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$68$$, "x")) && D.$DvtPlotAreaRenderer$$.$_renderAxisLine$($chart$$68$$, $container$$42$$, $chart$$68$$.$xAxis$, $chart$$68$$.$yAxis$, $availSpace$$50$$);
  $chart$$68$$.$xAxis$ && $chart$$68$$.$y2Axis$ && D.$DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$68$$, "x") && (!$chart$$68$$.$yAxis$ || D.$DvtChartTypeUtils$$.$isSplitDualY$($chart$$68$$)) && D.$DvtPlotAreaRenderer$$.$_renderAxisLine$($chart$$68$$, $container$$42$$, $chart$$68$$.$xAxis$, $chart$$68$$.$y2Axis$, $availSpace$$50$$);
  $chart$$68$$.$yAxis$ && ($chart$$68$$.$xAxis$ && D.$DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$68$$, "y")) && D.$DvtPlotAreaRenderer$$.$_renderAxisLine$($chart$$68$$, $container$$42$$, $chart$$68$$.$yAxis$, $chart$$68$$.$xAxis$, $availSpace$$50$$);
  $chart$$68$$.$y2Axis$ && ($chart$$68$$.$xAxis$ && D.$DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$68$$, "y2")) && D.$DvtPlotAreaRenderer$$.$_renderAxisLine$($chart$$68$$, $container$$42$$, $chart$$68$$.$y2Axis$, $chart$$68$$.$xAxis$, $availSpace$$50$$)
};
D.$DvtPlotAreaRenderer$$.$_renderMajorTicks$ = function $$DvtPlotAreaRenderer$$$$_renderMajorTicks$$($chart$$69$$, $container$$43$$, $axis$$71$$, $availSpace$$51$$) {
  D.$DvtPlotAreaRenderer$$.$_renderGridlines$($chart$$69$$, $container$$43$$, $axis$$71$$.$getOptions$().majorTick, $axis$$71$$.$getPosition$(), $axis$$71$$.$getMajorTickCoords$(), $axis$$71$$.$getBaselineCoord$(), $availSpace$$51$$)
};
D.$DvtPlotAreaRenderer$$.$_renderMinorTicks$ = function $$DvtPlotAreaRenderer$$$$_renderMinorTicks$$($chart$$70$$, $container$$44$$, $axis$$72$$, $availSpace$$52$$) {
  D.$DvtPlotAreaRenderer$$.$_renderGridlines$($chart$$70$$, $container$$44$$, $axis$$72$$.$getOptions$().minorTick, $axis$$72$$.$getPosition$(), $axis$$72$$.$getMinorTickCoords$(), null, $availSpace$$52$$)
};
D.$DvtPlotAreaRenderer$$.$_renderAxisLine$ = function $$DvtPlotAreaRenderer$$$$_renderAxisLine$$($chart$$71$$, $container$$45$$, $oAxis_options$$54$$, $dAxis$$, $availSpace$$53$$) {
  $oAxis_options$$54$$ = $oAxis_options$$54$$.$getOptions$();
  var $coord$$16_position$$15$$ = $oAxis_options$$54$$.position, $coord$$16_position$$15$$ = "bottom" == $coord$$16_position$$15$$ || "right" == $coord$$16_position$$15$$ || "tangential" == $coord$$16_position$$15$$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($dAxis$$, window.Math.max($dAxis$$.$Info$.$getStartCoord$(), $dAxis$$.$Info$.$getEndCoord$())) : (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($dAxis$$, window.Math.min($dAxis$$.$Info$.$getStartCoord$(), $dAxis$$.$Info$.$getEndCoord$()));
  D.$DvtPlotAreaRenderer$$.$_renderGridlines$($chart$$71$$, $container$$45$$, $oAxis_options$$54$$.axisLine, $dAxis$$.$getPosition$(), [$coord$$16_position$$15$$], null, $availSpace$$53$$)
};
D.$DvtPlotAreaRenderer$$.$_renderGridlines$ = function $$DvtPlotAreaRenderer$$$$_renderGridlines$$($chart$$72$$, $container$$46$$, $i$$163_options$$55$$, $position$$16$$, $coords$$8$$, $baselineCoord$$1$$, $availSpace$$54$$) {
  var $baselineColor_lineColor$$ = $i$$163_options$$55$$.lineColor, $lineStroke$$2$$ = new D.$DvtSolidStroke$$($baselineColor_lineColor$$, 1, $i$$163_options$$55$$.lineWidth);
  $i$$163_options$$55$$.lineStyle && $lineStroke$$2$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$163_options$$55$$.lineStyle));
  var $baselineStroke$$ = $lineStroke$$2$$.$clone$();
  "inherit" != $i$$163_options$$55$$.baselineColor && ($baselineColor_lineColor$$ = "auto" == $i$$163_options$$55$$.baselineColor ? D.$DvtColorUtils$$.$getDarker$($baselineColor_lineColor$$, 0.4) : $i$$163_options$$55$$.baselineColor, $baselineStroke$$.$setColor$($baselineColor_lineColor$$));
  $baselineStroke$$.$setWidth$(null != $i$$163_options$$55$$.baselineWidth ? $i$$163_options$$55$$.baselineWidth : $i$$163_options$$55$$.lineWidth);
  $baselineStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$163_options$$55$$.baselineStyle ? $i$$163_options$$55$$.baselineStyle : $i$$163_options$$55$$.lineStyle));
  for($i$$163_options$$55$$ = 0;$i$$163_options$$55$$ < $coords$$8$$.length;$i$$163_options$$55$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderGridline$($chart$$72$$, $container$$46$$, $position$$16$$, $coords$$8$$[$i$$163_options$$55$$], null != $baselineCoord$$1$$ && $coords$$8$$[$i$$163_options$$55$$] == $baselineCoord$$1$$ ? $baselineStroke$$ : $lineStroke$$2$$, $availSpace$$54$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderGridline$ = function $$DvtPlotAreaRenderer$$$$_renderGridline$$($chart$$73$$, $container$$47$$, $position$$17$$, $coord$$17_points$$3$$, $stroke$$5$$, $availSpace$$55$$) {
  var $context$$45_line$$7$$;
  $context$$45_line$$7$$ = $container$$47$$.$getCtx$();
  var $usePixelHinting$$ = !(0,D.$DvtAgent$isTouchDevice$$)() || 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)();
  "radial" == $position$$17$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$73$$) ? ($coord$$17_points$$3$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$(0, 0, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$73$$), $coord$$17_points$$3$$), $context$$45_line$$7$$ = new D.$DvtPolygon$$($context$$45_line$$7$$, $coord$$17_points$$3$$)) : $context$$45_line$$7$$ = new D.$DvtCircle$$($context$$45_line$$7$$, 0, 0, $coord$$17_points$$3$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$45_line$$7$$), 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$45_line$$7$$, $availSpace$$55$$.x + $availSpace$$55$$.$w$ / 2, $availSpace$$55$$.y + $availSpace$$55$$.$h$ / 2)) : "tangential" == $position$$17$$ ? ($context$$45_line$$7$$ = new D.$DvtLine$$($context$$45_line$$7$$, 0, 0, $chart$$73$$.$getRadius$() * window.Math.sin($coord$$17_points$$3$$), -$chart$$73$$.$getRadius$() * window.Math.cos($coord$$17_points$$3$$)), 0.01 > $coord$$17_points$$3$$ % window.Math.PI / 2 && $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$45_line$$7$$), 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$45_line$$7$$, $availSpace$$55$$.x + $availSpace$$55$$.$w$ / 2, $availSpace$$55$$.y + $availSpace$$55$$.$h$ / 2)) : ($context$$45_line$$7$$ = "top" == $position$$17$$ || "bottom" == $position$$17$$ ? new D.$DvtLine$$($context$$45_line$$7$$, $coord$$17_points$$3$$, $availSpace$$55$$.y, $coord$$17_points$$3$$, $availSpace$$55$$.y + $availSpace$$55$$.$h$) : new D.$DvtLine$$($context$$45_line$$7$$, $availSpace$$55$$.x, $coord$$17_points$$3$$, 
  $availSpace$$55$$.x + $availSpace$$55$$.$w$, $coord$$17_points$$3$$), $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$45_line$$7$$));
  $context$$45_line$$7$$.$setStroke$($stroke$$5$$);
  $context$$45_line$$7$$.$setMouseEnabled$(!1);
  $container$$47$$.$addChild$($context$$45_line$$7$$)
};
D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderForegroundObjects$$($chart$$74$$, $container$$48_selected$$2$$, $availSpace$$56$$) {
  var $options$$56$$ = $chart$$74$$.$getOptions$(), $bBLAC$$ = D.$DvtChartTypeUtils$$.$isBLAC$($chart$$74$$), $bBarSeries$$ = D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$74$$), $bLineSeries$$ = D.$DvtChartTypeUtils$$.$hasLineSeries$($chart$$74$$), $bStockSeries$$ = D.$DvtChartTypeUtils$$.$hasCandlestickSeries$($chart$$74$$), $bLineWithAreaSeries$$ = D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$74$$), $clipGroup$$1$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$74$$, $container$$48_selected$$2$$, 
  $availSpace$$56$$);
  D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$74$$, $container$$48_selected$$2$$, $availSpace$$56$$);
  var $plotAreaBorderColor$$ = $options$$56$$.plotArea.borderColor, $plotAreaBorderWidth$$ = $options$$56$$.plotArea.borderWidth;
  if($plotAreaBorderColor$$ && 0 != $plotAreaBorderWidth$$) {
    var $plotAreaBorder$$ = D.$DvtPlotAreaRenderer$$.$_getBackgroundShape$($chart$$74$$, $availSpace$$56$$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($plotAreaBorder$$);
    $plotAreaBorder$$.$setSolidStroke$($plotAreaBorderColor$$, null, $plotAreaBorderWidth$$);
    $plotAreaBorder$$.$setMouseEnabled$(!1);
    $container$$48_selected$$2$$.$addChild$($plotAreaBorder$$)
  }
  $bBLAC$$ ? ($bLineWithAreaSeries$$ && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$74$$, $container$$48_selected$$2$$, $availSpace$$56$$, !0), $bBarSeries$$ && D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$74$$, $clipGroup$$1$$, $availSpace$$56$$), $bLineSeries$$ && D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$74$$, $container$$48_selected$$2$$, $clipGroup$$1$$, $availSpace$$56$$), $bStockSeries$$ && D.$DvtPlotAreaRenderer$$.$_renderStock$($chart$$74$$, $clipGroup$$1$$)) : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$74$$) && 
  D.$DvtPlotAreaRenderer$$.$_renderScatterBubble$($chart$$74$$, $container$$48_selected$$2$$, $clipGroup$$1$$, $availSpace$$56$$);
  if($options$$56$$.xAxis.referenceObjects || $options$$56$$.yAxis.referenceObjects || $options$$56$$.y2Axis.referenceObjects) {
    $clipGroup$$1$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$74$$, $container$$48_selected$$2$$, $availSpace$$56$$), D.$DvtRefObjRenderer$$.$renderForegroundObjects$($chart$$74$$, $clipGroup$$1$$, $availSpace$$56$$)
  }
  $container$$48_selected$$2$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$74$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$74$$, $container$$48_selected$$2$$);
  $chart$$74$$.$highlight$(D.$DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$74$$))
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabel$$($chart$$75$$, $container$$49$$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$, $seriesIndex$$19$$, $groupIndex$$11$$, $dataColor_style$$48_textDim$$3$$, $type$$73$$, $isStackLabel$$) {
  if(!D.$DvtChartTypeUtils$$.$isOverview$($chart$$75$$)) {
    var $label$$30_labelString$$ = D.$DvtChartDataUtils$$.$getDataLabel$($chart$$75$$, $seriesIndex$$19$$, $groupIndex$$11$$, $type$$73$$, $isStackLabel$$);
    if(null != $label$$30_labelString$$) {
      var $position$$18_size$$17$$ = D.$DvtChartStyleUtils$$.$getDataLabelPosition$($chart$$75$$, $seriesIndex$$19$$, $groupIndex$$11$$, $type$$73$$, $isStackLabel$$);
      if("none" != $position$$18_size$$17$$) {
        $label$$30_labelString$$ = new D.$DvtOutputText$$($chart$$75$$.$getCtx$(), $label$$30_labelString$$, 0, 0);
        $label$$30_labelString$$.$setMouseEnabled$(!1);
        $dataColor_style$$48_textDim$$3$$ = $isStackLabel$$ ? $chart$$75$$.$getOptions$().styleDefaults.stackLabelStyle : D.$DvtChartStyleUtils$$.$getDataLabelStyle$($chart$$75$$, $seriesIndex$$19$$, $groupIndex$$11$$, $dataColor_style$$48_textDim$$3$$, $position$$18_size$$17$$, $type$$73$$);
        $label$$30_labelString$$.$setCSSStyle$($dataColor_style$$48_textDim$$3$$);
        $label$$30_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$ / 2);
        $label$$30_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ / 2);
        $label$$30_labelString$$.$alignCenter$();
        $label$$30_labelString$$.$alignMiddle$();
        $dataColor_style$$48_textDim$$3$$ = $label$$30_labelString$$.$measureDimensions$();
        if("left" == $position$$18_size$$17$$) {
          $label$$30_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x - $dataColor_style$$48_textDim$$3$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$)
        }else {
          if("right" == $position$$18_size$$17$$) {
            $label$$30_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ + $dataColor_style$$48_textDim$$3$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$)
          }else {
            if("top" == $position$$18_size$$17$$) {
              $label$$30_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y - $dataColor_style$$48_textDim$$3$$.$h$ / 2)
            }else {
              if("bottom" == $position$$18_size$$17$$) {
                $label$$30_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$ + $dataColor_style$$48_textDim$$3$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
              }else {
                if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$75$$, $seriesIndex$$19$$)) {
                  if($dataColor_style$$48_textDim$$3$$.$w$ > $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ || $dataColor_style$$48_textDim$$3$$.$h$ > $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$) {
                    return
                  }
                  "inLeft" == $position$$18_size$$17$$ ? $label$$30_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x + $dataColor_style$$48_textDim$$3$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inRight" == $position$$18_size$$17$$ ? $label$$30_labelString$$.$setX$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ - $dataColor_style$$48_textDim$$3$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : 
                  "inTop" == $position$$18_size$$17$$ ? $label$$30_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y + $dataColor_style$$48_textDim$$3$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $position$$18_size$$17$$ && $label$$30_labelString$$.$setY$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y + $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$ - $dataColor_style$$48_textDim$$3$$.$h$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 
                  2)
                }else {
                  if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$75$$) && ($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.x += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.y += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$ -= 2 * D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$ -= 2 * D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $position$$18_size$$17$$ = 
                  $label$$30_labelString$$.$getOptimalFontSize$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$), $label$$30_labelString$$.$setFontSize$($position$$18_size$$17$$), !D.$DvtTextUtils$$.$fitText$($label$$30_labelString$$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$w$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$h$, $container$$49$$, D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
                    return
                  }
                }
                null != D.$DvtChartStyleUtils$$.$getPattern$($chart$$75$$, $seriesIndex$$19$$, $groupIndex$$11$$) && ($dataColor_style$$48_textDim$$3$$ = $label$$30_labelString$$.$getDimensions$(), $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$ = 0.15 * $dataColor_style$$48_textDim$$3$$.$h$, $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$ = D.$DvtPathUtils$$.$roundedRectangle$($dataColor_style$$48_textDim$$3$$.x - $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$, $dataColor_style$$48_textDim$$3$$.y, $dataColor_style$$48_textDim$$3$$.$w$ + 
                2 * $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$, $dataColor_style$$48_textDim$$3$$.$h$, 2, 2, 2, 2), $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$ = new D.$DvtPath$$($chart$$75$$.$getCtx$(), $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$), $bbox$$5_cmd$$2_dataItemBounds_padding$$6$$.$setSolidFill$("#FFFFFF", 0.9), $container$$49$$.$addChild$($bbox$$5_cmd$$2_dataItemBounds_padding$$6$$))
              }
            }
          }
        }
        D.$DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$75$$) && $label$$30_labelString$$.$setSolidStroke$("none");
        $container$$49$$.$addChild$($label$$30_labelString$$);
        (0,D.$JSCompiler_StaticMethods_getDataLabels$$)($chart$$75$$).push($label$$30_labelString$$)
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabelForMarker$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabelForMarker$$($chart$$76$$, $container$$50$$, $marker$$3$$) {
  var $groupIndex$$12_logicalObject$$2$$ = $chart$$76$$.$getEventManager$().$getLogicalObject$($marker$$3$$), $seriesIndex$$20$$ = $groupIndex$$12_logicalObject$$2$$.$getSeriesIndex$(), $groupIndex$$12_logicalObject$$2$$ = $groupIndex$$12_logicalObject$$2$$.$getGroupIndex$();
  if($marker$$3$$ instanceof D.$DvtSimpleMarker$$) {
    var $markerBounds$$ = new D.$DvtRectangle$$($marker$$3$$.$getCx$() - $marker$$3$$.getWidth() / 2, $marker$$3$$.$getCy$() - $marker$$3$$.getHeight() / 2, $marker$$3$$.getWidth(), $marker$$3$$.getHeight());
    D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$76$$, $container$$50$$, $markerBounds$$, $seriesIndex$$20$$, $groupIndex$$12_logicalObject$$2$$, $marker$$3$$.$_dataColor$)
  }else {
    $marker$$3$$ instanceof D.$DvtChartRangeMarker$$ && (D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$76$$, $container$$50$$, (0,D.$JSCompiler_StaticMethods_getBoundingBox1$$)($marker$$3$$), $seriesIndex$$20$$, $groupIndex$$12_logicalObject$$2$$, $marker$$3$$.$_dataColor$, "low"), D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$76$$, $container$$50$$, (0,D.$JSCompiler_StaticMethods_getBoundingBox2$$)($marker$$3$$), $seriesIndex$$20$$, $groupIndex$$12_logicalObject$$2$$, $marker$$3$$.$_dataColor$, 
    "high"))
  }
};
D.$DvtPlotAreaRenderer$$.$_renderScatterBubble$ = function $$DvtPlotAreaRenderer$$$$_renderScatterBubble$$($chart$$77$$, $container$$51$$, $clipGroup$$2$$, $availSpace$$57$$) {
  D.$DvtPlotAreaRenderer$$.$_filterScatterBubble$($chart$$77$$, $availSpace$$57$$);
  for(var $borderColor$$8_defaultStroke$$ = D.$DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$77$$), $borderWidth$$2_markers$$1$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$77$$), $borderColor$$8_defaultStroke$$ = new D.$DvtSolidStroke$$($borderColor$$8_defaultStroke$$, null, $borderWidth$$2_markers$$1$$), $borderWidth$$2_markers$$1$$ = [], $seriesCount$$7$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$77$$), $seriesIndex$$21$$ = 0;$seriesIndex$$21$$ < $seriesCount$$7$$;$seriesIndex$$21$$++) {
    "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$77$$, $seriesIndex$$21$$) && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$77$$, $clipGroup$$2$$, $seriesIndex$$21$$, $availSpace$$57$$);
    var $seriesMarkers$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$77$$, $seriesIndex$$21$$, $availSpace$$57$$, $borderColor$$8_defaultStroke$$), $borderWidth$$2_markers$$1$$ = $borderWidth$$2_markers$$1$$.concat($seriesMarkers$$)
  }
  D.$DvtChartMarkerUtils$$.$sortMarkers$($borderWidth$$2_markers$$1$$);
  D.$DvtChartTypeUtils$$.$isBubble$($chart$$77$$) ? D.$DvtPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$77$$, $clipGroup$$2$$, $borderWidth$$2_markers$$1$$, $borderColor$$8_defaultStroke$$) : D.$DvtPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$77$$, $container$$51$$, $borderWidth$$2_markers$$1$$, $borderColor$$8_defaultStroke$$)
};
D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderMarkersForSeries$$($chart$$78$$, $container$$52$$, $markers$$2_seriesIndex$$22$$, $availSpace$$58$$) {
  var $borderColor$$9_defaultStroke$$1$$ = D.$DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$78$$, $markers$$2_seriesIndex$$22$$), $borderWidth$$3$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$78$$, $markers$$2_seriesIndex$$22$$), $borderColor$$9_defaultStroke$$1$$ = new D.$DvtSolidStroke$$($borderColor$$9_defaultStroke$$1$$, null, $borderWidth$$3$$);
  $markers$$2_seriesIndex$$22$$ = D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$78$$, $markers$$2_seriesIndex$$22$$) ? D.$DvtPlotAreaRenderer$$.$_getRangeMarkersForSeries$($chart$$78$$, $markers$$2_seriesIndex$$22$$, $availSpace$$58$$) : D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$78$$, $markers$$2_seriesIndex$$22$$, $availSpace$$58$$, $borderColor$$9_defaultStroke$$1$$);
  D.$DvtPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$78$$, $container$$52$$, $markers$$2_seriesIndex$$22$$, $borderColor$$9_defaultStroke$$1$$)
};
D.$DvtPlotAreaRenderer$$.$_addMarkersToContainer$ = function $$DvtPlotAreaRenderer$$$$_addMarkersToContainer$$($chart$$79$$, $container$$53_i$$164$$, $markers$$3$$, $defaultStroke$$2$$) {
  var $markerContainer$$ = $container$$53_i$$164$$;
  D.$DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$79$$) && ($markerContainer$$ = new D.$DvtContainer$$($chart$$79$$.$getCtx$()), $markerContainer$$.$setStroke$($defaultStroke$$2$$), $container$$53_i$$164$$.$addChild$($markerContainer$$));
  for($container$$53_i$$164$$ = 0;$container$$53_i$$164$$ < $markers$$3$$.length;$container$$53_i$$164$$++) {
    $markerContainer$$.$addChild$($markers$$3$$[$container$$53_i$$164$$]), D.$DvtPlotAreaRenderer$$.$_renderDataLabelForMarker$($chart$$79$$, $markerContainer$$, $markers$$3$$[$container$$53_i$$164$$])
  }
  $chart$$79$$.$_currentMarkers$.push($markers$$3$$)
};
D.$DvtPlotAreaRenderer$$.$_getMarkerInfo$ = function $$DvtPlotAreaRenderer$$$$_getMarkerInfo$$($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$, $availSpace$$59_pos$$10$$) {
  var $options$$57_shape$$24$$ = $chart$$80_markerSize$$.$getOptions$(), $bMarkerDisplayed_dataValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$);
  if(null == $bMarkerDisplayed_dataValue$$ || (0,window.isNaN)($bMarkerDisplayed_dataValue$$) || D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$)) {
    return null
  }
  var $nextIndex$$1_nextValue$$2_numGroups$$2$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$80_markerSize$$), $bMarkerDisplayed_dataValue$$ = D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$);
  if(!$bMarkerDisplayed_dataValue$$) {
    if("jet" != $options$$57_shape$$24$$._environment && D.$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$80_markerSize$$)) {
      2 > $nextIndex$$1_nextValue$$2_numGroups$$2$$ && ($bMarkerDisplayed_dataValue$$ = !0)
    }else {
      var $lastIndex$$1_prevValue$$ = $nextIndex$$1_nextValue$$2_numGroups$$2$$ - 1, $isPolar$$2$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$80_markerSize$$), $nextIndex$$1_nextValue$$2_numGroups$$2$$ = $isPolar$$2$$ && 0 < $lastIndex$$1_prevValue$$ && $groupIndex$$13$$ == $lastIndex$$1_prevValue$$ ? 0 : $groupIndex$$13$$ + 1, $lastIndex$$1_prevValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$80_markerSize$$, $seriesIndex$$23$$, $isPolar$$2$$ && 0 < $lastIndex$$1_prevValue$$ && 0 == $groupIndex$$13$$ ? 
      $lastIndex$$1_prevValue$$ : $groupIndex$$13$$ - 1), $nextIndex$$1_nextValue$$2_numGroups$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$80_markerSize$$, $seriesIndex$$23$$, $nextIndex$$1_nextValue$$2_numGroups$$2$$);
      if((null == $lastIndex$$1_prevValue$$ || (0,window.isNaN)($lastIndex$$1_prevValue$$)) && (null == $nextIndex$$1_nextValue$$2_numGroups$$2$$ || (0,window.isNaN)($nextIndex$$1_nextValue$$2_numGroups$$2$$))) {
        $bMarkerDisplayed_dataValue$$ = !0
      }
    }
  }
  if(!$bMarkerDisplayed_dataValue$$ && (D.$DvtChartTypeUtils$$.$isSpark$($chart$$80_markerSize$$) || ($options$$57_shape$$24$$._duringAnimation || D.$DvtChartTypeUtils$$.$isOverview$($chart$$80_markerSize$$)) && !D.$DvtChartDataUtils$$.$isDataSelected$($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$)) || !D.$DvtChartDataUtils$$.$isMarkerInViewport$($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$, $availSpace$$59_pos$$10$$)) {
    return null
  }
  $availSpace$$59_pos$$10$$ = D.$DvtChartDataUtils$$.$getMarkerPosition$($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$, $availSpace$$59_pos$$10$$);
  if(!$availSpace$$59_pos$$10$$) {
    return null
  }
  $options$$57_shape$$24$$ = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$);
  $chart$$80_markerSize$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$80_markerSize$$, $seriesIndex$$23$$, $groupIndex$$13$$);
  return{$seriesIndex$:$seriesIndex$$23$$, $groupIndex$:$groupIndex$$13$$, x:$availSpace$$59_pos$$10$$.x, y:$availSpace$$59_pos$$10$$.y, shape:$options$$57_shape$$24$$, size:$chart$$80_markerSize$$, $markerDisplayed$:$bMarkerDisplayed_dataValue$$}
};
D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getMarkersForSeries$$($chart$$81$$, $seriesIndex$$24$$, $availSpace$$60$$, $defaultBorderWidth_defaultStroke$$3$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$81$$, $seriesIndex$$24$$)) {
    return[]
  }
  var $isTouchDevice$$1$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $context$$46$$ = $chart$$81$$.$getCtx$(), $bOptimizeStroke$$ = D.$DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$81$$), $defaultBorderColor$$ = $bOptimizeStroke$$ ? $defaultBorderWidth_defaultStroke$$3$$.$getColor$() : null;
  $defaultBorderWidth_defaultStroke$$3$$ = $bOptimizeStroke$$ ? $defaultBorderWidth_defaultStroke$$3$$.getWidth() : null;
  for(var $markers$$4$$ = [], $numGroups$$3$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$81$$), $groupIndex$$14$$ = 0;$groupIndex$$14$$ < $numGroups$$3$$;$groupIndex$$14$$++) {
    var $markerInfo$$ = D.$DvtPlotAreaRenderer$$.$_getMarkerInfo$($chart$$81$$, $seriesIndex$$24$$, $groupIndex$$14$$, $availSpace$$60$$);
    if($markerInfo$$) {
      var $marker$$4$$ = null, $dataColor$$1_hoverColor$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$81$$, $seriesIndex$$24$$, $groupIndex$$14$$);
      if($markerInfo$$.$markerDisplayed$) {
        $marker$$4$$ = new D.$DvtSimpleMarker$$($context$$46$$, $markerInfo$$.shape, $chart$$81$$.$getSkin$(), $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $markerInfo$$.size);
        D.$DvtChartStyleUtils$$.$isSelectable$($chart$$81$$, $seriesIndex$$24$$, $groupIndex$$14$$) && $marker$$4$$.setCursor("pointer");
        $marker$$4$$.$setFill$(D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$81$$, $seriesIndex$$24$$, $groupIndex$$14$$));
        var $borderColor$$10_innerColor$$ = D.$DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$81$$, $seriesIndex$$24$$, $groupIndex$$14$$), $borderWidth$$4_outerColor$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$81$$, $seriesIndex$$24$$, $groupIndex$$14$$);
        ($borderColor$$10_innerColor$$ != $defaultBorderColor$$ || $borderWidth$$4_outerColor$$ != $defaultBorderWidth_defaultStroke$$3$$) && $marker$$4$$.$setSolidStroke$($borderColor$$10_innerColor$$, null, $borderWidth$$4_outerColor$$);
        $marker$$4$$.$setDataColor$($dataColor$$1_hoverColor$$, !0);
        $dataColor$$1_hoverColor$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$1_hoverColor$$);
        $borderColor$$10_innerColor$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$81$$);
        $borderWidth$$4_outerColor$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$81$$);
        $marker$$4$$.$setHoverStroke$(new D.$DvtSolidStroke$$($borderColor$$10_innerColor$$, 1, 1), new D.$DvtSolidStroke$$($dataColor$$1_hoverColor$$, 1, 3.5));
        $marker$$4$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($borderColor$$10_innerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($borderWidth$$4_outerColor$$, 1, 4.5));
        $marker$$4$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($borderColor$$10_innerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($dataColor$$1_hoverColor$$, 1, 4.5));
        $isTouchDevice$$1$$ && $markerInfo$$.size < D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && D.$DvtPlotAreaRenderer$$.$_addMarkerHitArea$($marker$$4$$, $markerInfo$$.x, $markerInfo$$.y, $bOptimizeStroke$$)
      }else {
        D.$DvtChartStyleUtils$$.$isSelectable$($chart$$81$$, $seriesIndex$$24$$, $groupIndex$$14$$) ? ($marker$$4$$ = new D.$DvtChartLineMarker$$($context$$46$$, $markerInfo$$.shape, $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $bOptimizeStroke$$), $marker$$4$$.setCursor("pointer"), $isTouchDevice$$1$$ && D.$DvtPlotAreaRenderer$$.$_addMarkerHitArea$($marker$$4$$, $markerInfo$$.x, $markerInfo$$.y, $bOptimizeStroke$$)) : ($isTouchDevice$$1$$ && ($markerInfo$$.size = D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), 
        $marker$$4$$ = new D.$DvtChartLineMarker$$($context$$46$$, "square", $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $bOptimizeStroke$$)), null != $marker$$4$$ && ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($marker$$4$$), $marker$$4$$.$setDataColor$($dataColor$$1_hoverColor$$))
      }
      null != $marker$$4$$ && ($markers$$4$$.push($marker$$4$$), (0,D.$DvtChartObjPeer$associate$$)($marker$$4$$, $chart$$81$$, $seriesIndex$$24$$, $groupIndex$$14$$, $markerInfo$$))
    }
  }
  return $markers$$4$$
};
D.$DvtPlotAreaRenderer$$.$_addMarkerHitArea$ = function $$DvtPlotAreaRenderer$$$$_addMarkerHitArea$$($marker$$5$$, $hitArea$$1_x$$75$$, $y$$54$$, $bOptimizeStroke$$1$$) {
  $hitArea$$1_x$$75$$ = new D.$DvtRect$$($marker$$5$$.$getCtx$(), $hitArea$$1_x$$75$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $y$$54$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$);
  $bOptimizeStroke$$1$$ && $hitArea$$1_x$$75$$.$setSolidStroke$("none");
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$1_x$$75$$);
  $marker$$5$$.$addChild$($hitArea$$1_x$$75$$)
};
D.$DvtPlotAreaRenderer$$.$_getRangeMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getRangeMarkersForSeries$$($chart$$82$$, $seriesIndex$$25$$, $availSpace$$61$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$82$$, $seriesIndex$$25$$)) {
    return[]
  }
  for(var $isTouchDevice$$2$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $context$$47$$ = $chart$$82$$.$getCtx$(), $xAxis$$ = $chart$$82$$.$xAxis$, $yAxis$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$82$$, $seriesIndex$$25$$) ? $chart$$82$$.$y2Axis$ : $chart$$82$$.$yAxis$, $options$$58$$ = $chart$$82$$.$getOptions$(), $numGroups$$4$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$82$$), $markers$$5$$ = [], $groupIndex$$15$$ = 0;$groupIndex$$15$$ < $numGroups$$4$$;$groupIndex$$15$$++) {
    if(!D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$) && D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$)) {
      var $dataPos$$3_xCoord$$1$$ = $xAxis$$.$getCoordAt$(D.$DvtChartDataUtils$$.$getXValue$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$)), $hitArea$$2_lowCoord_pLow$$ = $yAxis$$.$getUnboundedCoordAt$(D.$DvtChartDataUtils$$.$getLowValue$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$)), $highCoord_markerSize$$1$$ = $yAxis$$.$getUnboundedCoordAt$(D.$DvtChartDataUtils$$.$getHighValue$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$));
      if(!(null == $dataPos$$3_xCoord$$1$$ || null == $hitArea$$2_lowCoord_pLow$$ || null == $highCoord_markerSize$$1$$)) {
        var $bMarkerDisplayed$$1_marker$$6$$ = D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$);
        if(!$bMarkerDisplayed$$1_marker$$6$$) {
          var $fill$$2_lastIndex$$2_prevLowValue$$ = $numGroups$$4$$ - 1, $borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$82$$), $nextHighValue_pHigh_prevIndex$$1$$ = $borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$ && 0 < $fill$$2_lastIndex$$2_prevLowValue$$ && 0 == $groupIndex$$15$$ ? $fill$$2_lastIndex$$2_prevLowValue$$ : $groupIndex$$15$$ - 1, $borderWidth$$5_dataColor$$2_nextIndex$$2_nextLowValue$$ = $borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$ && 
          0 < $fill$$2_lastIndex$$2_prevLowValue$$ && $groupIndex$$15$$ == $fill$$2_lastIndex$$2_prevLowValue$$ ? 0 : $groupIndex$$15$$ + 1, $fill$$2_lastIndex$$2_prevLowValue$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$82$$, $seriesIndex$$25$$, $nextHighValue_pHigh_prevIndex$$1$$), $borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$82$$, $seriesIndex$$25$$, $nextHighValue_pHigh_prevIndex$$1$$), $borderWidth$$5_dataColor$$2_nextIndex$$2_nextLowValue$$ = 
          D.$DvtChartDataUtils$$.$getLowValue$($chart$$82$$, $seriesIndex$$25$$, $borderWidth$$5_dataColor$$2_nextIndex$$2_nextLowValue$$), $nextHighValue_pHigh_prevIndex$$1$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$82$$, $seriesIndex$$25$$, $nextHighValue_pHigh_prevIndex$$1$$);
          null == $fill$$2_lastIndex$$2_prevLowValue$$ && (null == $borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$ && null == $borderWidth$$5_dataColor$$2_nextIndex$$2_nextLowValue$$ && null == $nextHighValue_pHigh_prevIndex$$1$$) && ($bMarkerDisplayed$$1_marker$$6$$ = !0)
        }
        if(!$options$$58$$._duringAnimation && !D.$DvtChartTypeUtils$$.$isOverview$($chart$$82$$) && !D.$DvtChartTypeUtils$$.$isSpark$($chart$$82$$) || $bMarkerDisplayed$$1_marker$$6$$ || D.$DvtChartDataUtils$$.$isDataSelected$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$)) {
          var $hitArea$$2_lowCoord_pLow$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($chart$$82$$, new D.$DvtPoint$$($dataPos$$3_xCoord$$1$$, $hitArea$$2_lowCoord_pLow$$), $availSpace$$61$$), $nextHighValue_pHigh_prevIndex$$1$$ = D.$DvtPlotAreaRenderer$$.$convertAxisCoord$($chart$$82$$, new D.$DvtPoint$$($dataPos$$3_xCoord$$1$$, $highCoord_markerSize$$1$$), $availSpace$$61$$), $dataPos$$3_xCoord$$1$$ = new D.$DvtPoint$$(($hitArea$$2_lowCoord_pLow$$.x + $nextHighValue_pHigh_prevIndex$$1$$.x) / 
          2, ($hitArea$$2_lowCoord_pLow$$.y + $nextHighValue_pHigh_prevIndex$$1$$.y) / 2), $highCoord_markerSize$$1$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$), $bMarkerDisplayed$$1_marker$$6$$ = new D.$DvtChartRangeMarker$$($context$$47$$, $hitArea$$2_lowCoord_pLow$$.x, $hitArea$$2_lowCoord_pLow$$.y, $nextHighValue_pHigh_prevIndex$$1$$.x, $nextHighValue_pHigh_prevIndex$$1$$.y, $highCoord_markerSize$$1$$, !$bMarkerDisplayed$$1_marker$$6$$), $fill$$2_lastIndex$$2_prevLowValue$$ = 
          D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$), $borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$ = D.$DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$), $borderWidth$$5_dataColor$$2_nextIndex$$2_nextLowValue$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$), $borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$ = new D.$DvtSolidStroke$$($borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$, 
          null, $borderWidth$$5_dataColor$$2_nextIndex$$2_nextLowValue$$), $borderWidth$$5_dataColor$$2_nextIndex$$2_nextLowValue$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$), $innerColor$$1$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$82$$), $outerColor$$1$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$82$$);
          $bMarkerDisplayed$$1_marker$$6$$.$setStyleProperties$($fill$$2_lastIndex$$2_prevLowValue$$, $borderColor$$11_isPolar$$3_prevHighValue_stroke$$6$$, $borderWidth$$5_dataColor$$2_nextIndex$$2_nextLowValue$$, $innerColor$$1$$, $outerColor$$1$$);
          D.$DvtChartStyleUtils$$.$isSelectable$($chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$) && $bMarkerDisplayed$$1_marker$$6$$.setCursor("pointer");
          $hitArea$$2_lowCoord_pLow$$ = new D.$DvtLine$$($context$$47$$, $hitArea$$2_lowCoord_pLow$$.x, $hitArea$$2_lowCoord_pLow$$.y, $nextHighValue_pHigh_prevIndex$$1$$.x, $nextHighValue_pHigh_prevIndex$$1$$.y);
          $hitArea$$2_lowCoord_pLow$$.$setSolidStroke$("rgba(0,0,0,0)", null, $isTouchDevice$$2$$ ? window.Math.max($highCoord_markerSize$$1$$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$) : $highCoord_markerSize$$1$$);
          $bMarkerDisplayed$$1_marker$$6$$.$addChild$($hitArea$$2_lowCoord_pLow$$);
          $markers$$5$$.push($bMarkerDisplayed$$1_marker$$6$$);
          (0,D.$DvtChartObjPeer$associate$$)($bMarkerDisplayed$$1_marker$$6$$, $chart$$82$$, $seriesIndex$$25$$, $groupIndex$$15$$, $dataPos$$3_xCoord$$1$$)
        }
      }
    }
  }
  return $markers$$5$$
};
D.$DvtPlotAreaRenderer$$.$_renderBars$ = function $$DvtPlotAreaRenderer$$$$_renderBars$$($chart$$83$$, $container$$54$$, $availSpace$$62$$) {
  for(var $bHoriz$$4$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$83$$), $bPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$83$$), $bStock$$ = D.$DvtChartTypeUtils$$.$isStock$($chart$$83$$), $bPixelSpacing$$ = "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$83$$), $isR2L$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$83$$.$getCtx$()), $hasStackLabel$$ = D.$DvtChartStyleUtils$$.$isStackLabelRendered$($chart$$83$$), $groupIndex$$16$$ = 0;$groupIndex$$16$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$83$$);$groupIndex$$16$$++) {
    for(var $seriesIndex$$26$$ = 0;$seriesIndex$$26$$ < D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$83$$);$seriesIndex$$26$$++) {
      if(D.$DvtChartDataUtils$$.$isBLACItemInViewport$($chart$$83$$, $seriesIndex$$26$$, $groupIndex$$16$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$83$$, $seriesIndex$$26$$)) {
        var $barData_markers$$6$$ = D.$DvtChartDataUtils$$.$getBarInfo$($chart$$83$$, $seriesIndex$$26$$, $groupIndex$$16$$, $availSpace$$62$$);
        if(null != $barData_markers$$6$$) {
          var $shape$$25_yCoord$$2$$ = $barData_markers$$6$$.$yCoord$, $baseCoord_stroke$$7$$ = $barData_markers$$6$$.$baseCoord$, $axisCoord_borderWidth$$6_innerColor$$2$$ = $barData_markers$$6$$.$axisCoord$, $outerColor$$2_x1$$6$$ = $barData_markers$$6$$.$x1$, $x2$$4$$ = $barData_markers$$6$$.$x2$, $barWidth_fill$$3$$ = $barData_markers$$6$$.$barWidth$, $bInvisible_borderColor$$12_dataColor$$3$$ = !1;
          1 > window.Math.abs($shape$$25_yCoord$$2$$ - $baseCoord_stroke$$7$$) && (D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$83$$, $seriesIndex$$26$$) ? $shape$$25_yCoord$$2$$-- : ($bInvisible_borderColor$$12_dataColor$$3$$ = !0, $shape$$25_yCoord$$2$$ = $shape$$25_yCoord$$2$$ > $baseCoord_stroke$$7$$ || $bHoriz$$4$$ && !$isR2L$$5$$ && $shape$$25_yCoord$$2$$ == $baseCoord_stroke$$7$$ ? $baseCoord_stroke$$7$$ + 3 : $baseCoord_stroke$$7$$ - 3));
          $shape$$25_yCoord$$2$$ = $bPolar$$ ? new D.$DvtChartPolarBar$$($chart$$83$$, $axisCoord_borderWidth$$6_innerColor$$2$$, $baseCoord_stroke$$7$$, $shape$$25_yCoord$$2$$, $outerColor$$2_x1$$6$$, $x2$$4$$, $availSpace$$62$$) : new D.$DvtChartBar$$($chart$$83$$, $axisCoord_borderWidth$$6_innerColor$$2$$, $baseCoord_stroke$$7$$, $shape$$25_yCoord$$2$$, $outerColor$$2_x1$$6$$, $x2$$4$$);
          $container$$54$$.$addChild$($shape$$25_yCoord$$2$$);
          D.$DvtChartStyleUtils$$.$isSelectable$($chart$$83$$, $seriesIndex$$26$$, $groupIndex$$16$$) && $shape$$25_yCoord$$2$$.setCursor("pointer");
          $baseCoord_stroke$$7$$ = null;
          $bInvisible_borderColor$$12_dataColor$$3$$ ? $barWidth_fill$$3$$ = (0,D.$DvtSolidFill$invisibleFill$$)() : ($barWidth_fill$$3$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$83$$, $seriesIndex$$26$$, $groupIndex$$16$$, $bHoriz$$4$$, $barWidth_fill$$3$$), $bInvisible_borderColor$$12_dataColor$$3$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$83$$, $seriesIndex$$26$$, $groupIndex$$16$$), $axisCoord_borderWidth$$6_innerColor$$2$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$83$$, 
          $seriesIndex$$26$$, $groupIndex$$16$$), $bInvisible_borderColor$$12_dataColor$$3$$ && ($baseCoord_stroke$$7$$ = new D.$DvtSolidStroke$$($bInvisible_borderColor$$12_dataColor$$3$$, null, $axisCoord_borderWidth$$6_innerColor$$2$$)));
          $bInvisible_borderColor$$12_dataColor$$3$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$83$$, $seriesIndex$$26$$, $groupIndex$$16$$);
          $axisCoord_borderWidth$$6_innerColor$$2$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$83$$);
          $outerColor$$2_x1$$6$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$83$$);
          $shape$$25_yCoord$$2$$.$setStyleProperties$($barWidth_fill$$3$$, $baseCoord_stroke$$7$$, $bInvisible_borderColor$$12_dataColor$$3$$, $axisCoord_borderWidth$$6_innerColor$$2$$, $outerColor$$2_x1$$6$$);
          $bPixelSpacing$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($shape$$25_yCoord$$2$$);
          (0,D.$DvtChartObjPeer$associate$$)($shape$$25_yCoord$$2$$, $chart$$83$$, $seriesIndex$$26$$, $groupIndex$$16$$, $barData_markers$$6$$.$dataPos$);
          D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$83$$, $seriesIndex$$26$$) ? (D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$83$$, $container$$54$$, $shape$$25_yCoord$$2$$.$getBoundingBox$(), $seriesIndex$$26$$, $groupIndex$$16$$, $bInvisible_borderColor$$12_dataColor$$3$$, "low"), D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$83$$, $container$$54$$, $shape$$25_yCoord$$2$$.$getBoundingBox$(), $seriesIndex$$26$$, $groupIndex$$16$$, $bInvisible_borderColor$$12_dataColor$$3$$, "high")) : 
          D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$83$$, $container$$54$$, $shape$$25_yCoord$$2$$.$getBoundingBox$(), $seriesIndex$$26$$, $groupIndex$$16$$, $bInvisible_borderColor$$12_dataColor$$3$$);
          $barData_markers$$6$$ = [];
          $barData_markers$$6$$.push($shape$$25_yCoord$$2$$);
          $bStock$$ && 0 != $seriesIndex$$26$$ || $chart$$83$$.$_currentMarkers$.push($barData_markers$$6$$);
          $hasStackLabel$$ && D.$DvtChartDataUtils$$.$isBarStackLabeled$($chart$$83$$, $seriesIndex$$26$$, $groupIndex$$16$$) && D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$83$$, $container$$54$$, $shape$$25_yCoord$$2$$.$getBoundingBox$(), $seriesIndex$$26$$, $groupIndex$$16$$, null, null, !0)
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderStock$ = function $$DvtPlotAreaRenderer$$$$_renderStock$$($chart$$84$$, $container$$55$$) {
  var $options$$59$$ = $chart$$84$$.$getOptions$(), $xAxis$$1$$ = $chart$$84$$.$xAxis$, $yAxis$$1$$ = $chart$$84$$.$yAxis$;
  if("candlestick" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$84$$, 0)) {
    for(var $groupIndex$$17$$ = 0;$groupIndex$$17$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$84$$);$groupIndex$$17$$++) {
      if(D.$DvtChartDataUtils$$.$isBLACItemInViewport$($chart$$84$$, 0, $groupIndex$$17$$)) {
        var $dataPos$$4_markers$$7_xCoord$$2_xValue$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$84$$, 0, $groupIndex$$17$$), $dataItem$$5_openCoord$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$84$$, 0, $groupIndex$$17$$), $openValue$$, $closeValue$$, $lowValue$$, $candlestick_highValue$$ = null;
        $dataItem$$5_openCoord$$ && ($openValue$$ = $dataItem$$5_openCoord$$.open, $closeValue$$ = $dataItem$$5_openCoord$$.close, $lowValue$$ = $dataItem$$5_openCoord$$.low, $candlestick_highValue$$ = $dataItem$$5_openCoord$$.high);
        var $renderRange_stroke$$8$$ = null != $lowValue$$ && null != $candlestick_highValue$$;
        if(!(null == $openValue$$ || null == $closeValue$$)) {
          var $dataPos$$4_markers$$7_xCoord$$2_xValue$$ = $xAxis$$1$$.$getUnboundedCoordAt$($dataPos$$4_markers$$7_xCoord$$2_xValue$$), $barWidth$$1_fill$$4_fill$$inline_2241$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$84$$, 0, $groupIndex$$17$$), $dataItem$$5_openCoord$$ = $yAxis$$1$$.$getBoundedCoordAt$($openValue$$), $closeCoord$$ = $yAxis$$1$$.$getBoundedCoordAt$($closeValue$$), $lowCoord$$1$$, $borderColor$$13_highCoord$$1_outerColor$$3$$ = null;
          $renderRange_stroke$$8$$ && ($lowCoord$$1$$ = $yAxis$$1$$.$getBoundedCoordAt$($lowValue$$), $borderColor$$13_highCoord$$1_outerColor$$3$$ = $yAxis$$1$$.$getBoundedCoordAt$($candlestick_highValue$$));
          $candlestick_highValue$$ = new D.$DvtChartCandlestick$$($chart$$84$$.$getCtx$(), $dataPos$$4_markers$$7_xCoord$$2_xValue$$, $barWidth$$1_fill$$4_fill$$inline_2241$$, $dataItem$$5_openCoord$$, $closeCoord$$, $lowCoord$$1$$, $borderColor$$13_highCoord$$1_outerColor$$3$$);
          $container$$55$$.$addChild$($candlestick_highValue$$);
          D.$DvtChartStyleUtils$$.$isSelectable$($chart$$84$$, 0, $groupIndex$$17$$) && $candlestick_highValue$$.setCursor("pointer");
          var $barWidth$$1_fill$$4_fill$$inline_2241$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$84$$, 0, $groupIndex$$17$$, !1, $barWidth$$1_fill$$4_fill$$inline_2241$$), $renderRange_stroke$$8$$ = null, $borderColor$$13_highCoord$$1_outerColor$$3$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$84$$, 0, $groupIndex$$17$$), $borderWidth$$7_rangeColor$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$84$$, 0, $groupIndex$$17$$);
          $borderColor$$13_highCoord$$1_outerColor$$3$$ ? $renderRange_stroke$$8$$ = new D.$DvtSolidStroke$$($borderColor$$13_highCoord$$1_outerColor$$3$$, null, $borderWidth$$7_rangeColor$$) : $barWidth$$1_fill$$4_fill$$inline_2241$$ instanceof D.$DvtPatternFill$$ && ($renderRange_stroke$$8$$ = new D.$DvtSolidStroke$$($barWidth$$1_fill$$4_fill$$inline_2241$$.$getColor$(), null, $borderWidth$$7_rangeColor$$));
          var $dataColor$$4$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$84$$, 0, $groupIndex$$17$$), $innerColor$$3$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$84$$), $borderColor$$13_highCoord$$1_outerColor$$3$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$84$$), $borderWidth$$7_rangeColor$$ = $options$$59$$.styleDefaults.stockRangeColor;
          $candlestick_highValue$$.$_changeShape$.$setStyleProperties$($barWidth$$1_fill$$4_fill$$inline_2241$$, $renderRange_stroke$$8$$, $dataColor$$4$$, $innerColor$$3$$, $borderColor$$13_highCoord$$1_outerColor$$3$$);
          $barWidth$$1_fill$$4_fill$$inline_2241$$ = new D.$DvtSolidFill$$($borderWidth$$7_rangeColor$$);
          $candlestick_highValue$$.$_rangeShape$ && $candlestick_highValue$$.$_rangeShape$.$setStyleProperties$($barWidth$$1_fill$$4_fill$$inline_2241$$, $renderRange_stroke$$8$$, $borderWidth$$7_rangeColor$$, null, $borderColor$$13_highCoord$$1_outerColor$$3$$);
          $dataPos$$4_markers$$7_xCoord$$2_xValue$$ = new D.$DvtPoint$$($dataPos$$4_markers$$7_xCoord$$2_xValue$$, ($dataItem$$5_openCoord$$ + $closeCoord$$) / 2);
          (0,D.$DvtChartObjPeer$associate$$)($candlestick_highValue$$, $chart$$84$$, 0, $groupIndex$$17$$, $dataPos$$4_markers$$7_xCoord$$2_xValue$$);
          $dataPos$$4_markers$$7_xCoord$$2_xValue$$ = [];
          $dataPos$$4_markers$$7_xCoord$$2_xValue$$.push($candlestick_highValue$$.$_changeShape$);
          $chart$$84$$.$_currentMarkers$.push($dataPos$$4_markers$$7_xCoord$$2_xValue$$)
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLines$ = function $$DvtPlotAreaRenderer$$$$_renderLines$$($chart$$85$$, $container$$56$$, $clipGroup$$3$$, $availSpace$$64$$) {
  var $lineSeries$$ = [], $seriesIndex$$27$$, $lineIndex_seriesCount$$8$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$85$$);
  for($seriesIndex$$27$$ = 0;$seriesIndex$$27$$ < $lineIndex_seriesCount$$8$$;$seriesIndex$$27$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$85$$, $seriesIndex$$27$$) && "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$85$$, $seriesIndex$$27$$) && $lineSeries$$.push($seriesIndex$$27$$)
  }
  for($lineIndex_seriesCount$$8$$ = 0;$lineIndex_seriesCount$$8$$ < $lineSeries$$.length;$lineIndex_seriesCount$$8$$++) {
    $seriesIndex$$27$$ = $lineSeries$$[$lineIndex_seriesCount$$8$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$85$$, $seriesIndex$$27$$) && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$85$$) || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$85$$, $seriesIndex$$27$$), D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$85$$, $clipGroup$$3$$, $seriesIndex$$27$$, $availSpace$$64$$))
  }
  for($lineIndex_seriesCount$$8$$ = 0;$lineIndex_seriesCount$$8$$ < $lineSeries$$.length;$lineIndex_seriesCount$$8$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$85$$, $container$$56$$, $lineSeries$$[$lineIndex_seriesCount$$8$$], $availSpace$$64$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderAreas$ = function $$DvtPlotAreaRenderer$$$$_renderAreas$$($chart$$86$$, $container$$57$$, $availSpace$$65$$, $isLineWithArea$$) {
  for(var $seriesCount$$9$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$86$$), $seriesType$$3$$ = $isLineWithArea$$ ? "lineWithArea" : "area", $yAreaSeries$$ = [], $y2AreaSeries$$ = [], $seriesIndex$$28$$ = 0;$seriesIndex$$28$$ < $seriesCount$$9$$;$seriesIndex$$28$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$86$$, $seriesIndex$$28$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$86$$, $seriesIndex$$28$$) == $seriesType$$3$$ && (D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$86$$, $seriesIndex$$28$$) ? $y2AreaSeries$$.push($seriesIndex$$28$$) : $yAreaSeries$$.push($seriesIndex$$28$$))
  }
  0 < $yAreaSeries$$.length && D.$DvtPlotAreaRenderer$$.$_renderAreasForAxis$($chart$$86$$, $container$$57$$, $yAreaSeries$$, $chart$$86$$.$yAxis$.$getBaselineCoord$(), $availSpace$$65$$, $isLineWithArea$$);
  0 < $y2AreaSeries$$.length && D.$DvtPlotAreaRenderer$$.$_renderAreasForAxis$($chart$$86$$, $container$$57$$, $y2AreaSeries$$, $chart$$86$$.$y2Axis$.$getBaselineCoord$(), $availSpace$$65$$, $isLineWithArea$$)
};
D.$DvtPlotAreaRenderer$$.$_renderAreasForAxis$ = function $$DvtPlotAreaRenderer$$$$_renderAreasForAxis$$($chart$$87$$, $container$$58$$, $areaSeries$$, $baselineCoord$$2_hasBorder$$, $availSpace$$66$$, $isLineWithArea$$1$$) {
  for(var $bStacked$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$87$$), $bPolar$$1$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$87$$), $clippedGroup$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$87$$, $container$$58$$, $availSpace$$66$$), $prevCoordsMap$$ = {}, $prevTypeMap$$ = {}, $prevCoordsMapNegative$$ = {}, $prevTypeMapNegative$$ = {}, $baselineCoords$$ = [], $areaIndex_groupCount$$4$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$87$$), $i$$165_seriesIndex$$29$$ = 0;$i$$165_seriesIndex$$29$$ < 
  $areaIndex_groupCount$$4$$;$i$$165_seriesIndex$$29$$++) {
    $baselineCoords$$.push(new D.$DvtChartCoord$$(null, $baselineCoord$$2_hasBorder$$, $baselineCoord$$2_hasBorder$$, $i$$165_seriesIndex$$29$$, D.$DvtChartDataUtils$$.$getGroup$($chart$$87$$, $i$$165_seriesIndex$$29$$), !0))
  }
  for($areaIndex_groupCount$$4$$ = 0;$areaIndex_groupCount$$4$$ < $areaSeries$$.length;$areaIndex_groupCount$$4$$++) {
    var $i$$165_seriesIndex$$29$$ = $areaSeries$$[$areaIndex_groupCount$$4$$], $category$$3$$ = D.$DvtChartDataUtils$$.$getStackCategory$($chart$$87$$, $i$$165_seriesIndex$$29$$), $isSeriesNegative$$ = D.$DvtChartDataUtils$$.$isSeriesNegative$($chart$$87$$, $i$$165_seriesIndex$$29$$), $baseCoords$$1_prevCoords$$ = $prevCoordsMap$$[$category$$3$$], $baseType_prevType$$ = $prevTypeMap$$[$category$$3$$], $prevCoordsNegative$$ = $prevCoordsMapNegative$$[$category$$3$$], $prevTypeNegative$$ = $prevTypeMapNegative$$[$category$$3$$];
    if("none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$87$$, $i$$165_seriesIndex$$29$$)) {
      D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$87$$, $container$$58$$, $i$$165_seriesIndex$$29$$, $availSpace$$66$$)
    }else {
      var $area_fill$$5$$ = D.$DvtChartSeriesEffectUtils$$.$getAreaFill$($chart$$87$$, $i$$165_seriesIndex$$29$$), $borderColor$$14$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$87$$, $i$$165_seriesIndex$$29$$), $borderWidth$$8_type$$74$$ = D.$DvtChartStyleUtils$$.$getBorderWidth$($chart$$87$$, $i$$165_seriesIndex$$29$$), $stroke$$9$$ = $borderColor$$14$$ ? new D.$DvtSolidStroke$$($borderColor$$14$$, null, $borderWidth$$8_type$$74$$) : null, $borderWidth$$8_type$$74$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$87$$, 
      $i$$165_seriesIndex$$29$$);
      $bPolar$$1$$ || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$87$$, $i$$165_seriesIndex$$29$$);
      var $coords$$9$$;
      D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$87$$, $i$$165_seriesIndex$$29$$) ? ($coords$$9$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$87$$, $i$$165_seriesIndex$$29$$, "high"), $baseCoords$$1_prevCoords$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$87$$, $i$$165_seriesIndex$$29$$, "low"), $baseType_prevType$$ = $borderWidth$$8_type$$74$$) : $isSeriesNegative$$ ? ($coords$$9$$ = D.$DvtPlotAreaRenderer$$.$_getAreaCoordsForSeries$($chart$$87$$, $i$$165_seriesIndex$$29$$, 
      $prevCoordsNegative$$ ? $prevCoordsNegative$$ : $baselineCoords$$), $baseCoords$$1_prevCoords$$ = $prevCoordsNegative$$ ? $prevCoordsNegative$$ : [], $baseType_prevType$$ = $prevTypeNegative$$) : ($coords$$9$$ = D.$DvtPlotAreaRenderer$$.$_getAreaCoordsForSeries$($chart$$87$$, $i$$165_seriesIndex$$29$$, $baseCoords$$1_prevCoords$$ ? $baseCoords$$1_prevCoords$$ : $baselineCoords$$), $baseCoords$$1_prevCoords$$ = $baseCoords$$1_prevCoords$$ ? $baseCoords$$1_prevCoords$$ : []);
      $area_fill$$5$$ = new D.$DvtChartLineArea$$($chart$$87$$, !0, $availSpace$$66$$, $baselineCoord$$2_hasBorder$$, $area_fill$$5$$, $stroke$$9$$, $borderWidth$$8_type$$74$$, $coords$$9$$, $baseType_prevType$$, $baseCoords$$1_prevCoords$$);
      $clippedGroup$$.$addChild$($area_fill$$5$$);
      $chart$$87$$.$_currentAreas$.push($area_fill$$5$$);
      (0,D.$DvtChartObjPeer$associate$$)($area_fill$$5$$, $chart$$87$$, $i$$165_seriesIndex$$29$$);
      $isSeriesNegative$$ ? ($prevCoordsMapNegative$$[$category$$3$$] = $coords$$9$$, $prevTypeMapNegative$$[$category$$3$$] = $borderWidth$$8_type$$74$$) : ($prevCoordsMap$$[$category$$3$$] = $coords$$9$$, $prevTypeMap$$[$category$$3$$] = $borderWidth$$8_type$$74$$);
      $bStacked$$ || (($isLineWithArea$$1$$ || 0 < D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$87$$) && !$borderColor$$14$$) && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$87$$, $clippedGroup$$, $i$$165_seriesIndex$$29$$, $availSpace$$66$$, !$isLineWithArea$$1$$), $isLineWithArea$$1$$ || D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$87$$, $container$$58$$, $i$$165_seriesIndex$$29$$, $availSpace$$66$$), $areaIndex_groupCount$$4$$ + 1 < $areaSeries$$.length && ($clippedGroup$$ = 
      D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$87$$, $container$$58$$, $availSpace$$66$$)))
    }
  }
  for($areaIndex_groupCount$$4$$ = 0;$areaIndex_groupCount$$4$$ < $areaSeries$$.length;$areaIndex_groupCount$$4$$++) {
    $i$$165_seriesIndex$$29$$ = $areaSeries$$[$areaIndex_groupCount$$4$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$87$$, $i$$165_seriesIndex$$29$$) && ($baselineCoord$$2_hasBorder$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$87$$, $i$$165_seriesIndex$$29$$) || D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$87$$, $i$$165_seriesIndex$$29$$ + 1), $bStacked$$ && ($isLineWithArea$$1$$ || 0 < D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$87$$) && !$baselineCoord$$2_hasBorder$$) && 
    D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$87$$, $clippedGroup$$, $i$$165_seriesIndex$$29$$, $availSpace$$66$$, !$isLineWithArea$$1$$), ($bStacked$$ || $isLineWithArea$$1$$) && D.$DvtPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$87$$, $container$$58$$, $i$$165_seriesIndex$$29$$, $availSpace$$66$$))
  }
};
D.$DvtPlotAreaRenderer$$.$_getAreaCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getAreaCoordsForSeries$$($bPolar$$2_chart$$88$$, $rawCoords_seriesIndex$$30$$, $lastIndex$$3_prevCoords$$1$$) {
  $rawCoords_seriesIndex$$30$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($bPolar$$2_chart$$88$$, $rawCoords_seriesIndex$$30$$);
  for(var $coords$$10$$ = [], $i$$166$$ = 0;$i$$166$$ < $lastIndex$$3_prevCoords$$1$$.length;$i$$166$$++) {
    $coords$$10$$.push($lastIndex$$3_prevCoords$$1$$[$i$$166$$].$clone$())
  }
  $lastIndex$$3_prevCoords$$1$$ = $rawCoords_seriesIndex$$30$$.length - 1;
  $bPolar$$2_chart$$88$$ = D.$DvtChartTypeUtils$$.$isPolar$($bPolar$$2_chart$$88$$);
  for($i$$166$$ = 0;$i$$166$$ < $rawCoords_seriesIndex$$30$$.length;$i$$166$$++) {
    if(null != $rawCoords_seriesIndex$$30$$[$i$$166$$].x) {
      var $coord$$18$$ = $coords$$10$$[$rawCoords_seriesIndex$$30$$[$i$$166$$].$groupIndex$], $prevIndex$$2$$ = $bPolar$$2_chart$$88$$ && 0 == $i$$166$$ ? $lastIndex$$3_prevCoords$$1$$ : $i$$166$$ - 1, $nextIndex$$3$$ = $bPolar$$2_chart$$88$$ && $i$$166$$ == $lastIndex$$3_prevCoords$$1$$ ? 0 : $i$$166$$ + 1;
      0 <= $prevIndex$$2$$ && null != $rawCoords_seriesIndex$$30$$[$prevIndex$$2$$].x && ($coord$$18$$.$y1$ = $rawCoords_seriesIndex$$30$$[$i$$166$$].$y1$);
      $nextIndex$$3$$ <= $lastIndex$$3_prevCoords$$1$$ && null != $rawCoords_seriesIndex$$30$$[$nextIndex$$3$$].x && ($coord$$18$$.$y2$ = $rawCoords_seriesIndex$$30$$[$i$$166$$].$y2$);
      $coord$$18$$.x = $rawCoords_seriesIndex$$30$$[$i$$166$$].x;
      $coord$$18$$.$filtered$ = $coord$$18$$.$y1$ == $coord$$18$$.$y2$ ? $rawCoords_seriesIndex$$30$$[$i$$166$$].$filtered$ : !1
    }
  }
  return $coords$$10$$
};
D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderLinesForSeries$$($chart$$89$$, $container$$59$$, $seriesIndex$$31$$, $availSpace$$68$$, $color$$8_gapSize$$1_isDataItemGap_renderLine$$) {
  var $stroke$$10$$;
  if($color$$8_gapSize$$1_isDataItemGap_renderLine$$) {
    $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = 2.5 * D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$89$$), $stroke$$10$$ = new D.$DvtSolidStroke$$(D.$DvtChartStyleUtils$$.$getBackgroundColor$($chart$$89$$, !0), 1, $color$$8_gapSize$$1_isDataItemGap_renderLine$$)
  }else {
    $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$89$$, $seriesIndex$$31$$);
    var $lineWidth$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$89$$, $seriesIndex$$31$$), $lineStyle$$ = (0,D.$DvtStroke$convertTypeString$$)(D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$89$$, $seriesIndex$$31$$));
    $stroke$$10$$ = new D.$DvtSolidStroke$$($color$$8_gapSize$$1_isDataItemGap_renderLine$$, 1, $lineWidth$$);
    $stroke$$10$$.$setStyle$($lineStyle$$)
  }
  var $baseline$$3$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$89$$, $seriesIndex$$31$$) ? $chart$$89$$.$y2Axis$.$getBaselineCoord$() : $chart$$89$$.$yAxis$.$getBaselineCoord$(), $lineType$$1$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$89$$, $seriesIndex$$31$$);
  $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = function $$color$$8_gapSize$$1_isDataItemGap_renderLine$$$($color$$8_gapSize$$1_isDataItemGap_renderLine$$) {
    $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$89$$, $seriesIndex$$31$$, $color$$8_gapSize$$1_isDataItemGap_renderLine$$);
    $color$$8_gapSize$$1_isDataItemGap_renderLine$$ = new D.$DvtChartLineArea$$($chart$$89$$, !1, $availSpace$$68$$, $baseline$$3$$, null, $stroke$$10$$, $lineType$$1$$, $color$$8_gapSize$$1_isDataItemGap_renderLine$$);
    $container$$59$$.$addChild$($color$$8_gapSize$$1_isDataItemGap_renderLine$$);
    (0,D.$DvtChartObjPeer$associate$$)($color$$8_gapSize$$1_isDataItemGap_renderLine$$, $chart$$89$$, $seriesIndex$$31$$)
  };
  D.$DvtChartStyleUtils$$.$isRangeSeries$($chart$$89$$, $seriesIndex$$31$$) ? ($color$$8_gapSize$$1_isDataItemGap_renderLine$$("high"), $color$$8_gapSize$$1_isDataItemGap_renderLine$$("low")) : $color$$8_gapSize$$1_isDataItemGap_renderLine$$("value")
};
D.$DvtPlotAreaRenderer$$.$_filterScatterBubble$ = function $$DvtPlotAreaRenderer$$$$_filterScatterBubble$$($chart$$90$$, $availSpace$$69$$) {
  var $pixelMap_seriesCount$$10$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$90$$), $groupCount$$5_markerIndex$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$90$$);
  if(!($pixelMap_seriesCount$$10$$ * $groupCount$$5_markerIndex$$ < D.$DvtPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$)) {
    for(var $markerInfo$$1$$, $markerInfos$$ = [], $alpha$$3_dataColor$$5_seriesIndex$$32$$ = 0;$alpha$$3_dataColor$$5_seriesIndex$$32$$ < $pixelMap_seriesCount$$10$$;$alpha$$3_dataColor$$5_seriesIndex$$32$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$90$$, $alpha$$3_dataColor$$5_seriesIndex$$32$$)) {
        for(var $dataItem$$6_groupIndex$$18$$ = 0;$dataItem$$6_groupIndex$$18$$ < $groupCount$$5_markerIndex$$;$dataItem$$6_groupIndex$$18$$++) {
          $markerInfo$$1$$ = D.$DvtPlotAreaRenderer$$.$_getMarkerInfo$($chart$$90$$, $alpha$$3_dataColor$$5_seriesIndex$$32$$, $dataItem$$6_groupIndex$$18$$, $availSpace$$69$$), null != $markerInfo$$1$$ && $markerInfos$$.push($markerInfo$$1$$)
        }
      }
    }
    if(!($markerInfos$$.length < D.$DvtPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$)) {
      D.$DvtChartMarkerUtils$$.$sortMarkers$($markerInfos$$);
      $pixelMap_seriesCount$$10$$ = new D.$DvtPixelMap$$(25, new D.$DvtPixelMap$$(5, new D.$DvtPixelMap$$));
      for($groupCount$$5_markerIndex$$ = $markerInfos$$.length - 1;0 <= $groupCount$$5_markerIndex$$;$groupCount$$5_markerIndex$$--) {
        $markerInfo$$1$$ = $markerInfos$$[$groupCount$$5_markerIndex$$], $alpha$$3_dataColor$$5_seriesIndex$$32$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$90$$, $markerInfo$$1$$.$seriesIndex$, $markerInfo$$1$$.$groupIndex$), $alpha$$3_dataColor$$5_seriesIndex$$32$$ = $markerInfo$$1$$.$markerDisplayed$ ? D.$DvtColorUtils$$.$getAlpha$($alpha$$3_dataColor$$5_seriesIndex$$32$$) : 0, $dataItem$$6_groupIndex$$18$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$90$$, $markerInfo$$1$$.$seriesIndex$, 
        $markerInfo$$1$$.$groupIndex$), D.$DvtChartMarkerUtils$$.$checkPixelMap$($pixelMap_seriesCount$$10$$, $markerInfo$$1$$.x, $markerInfo$$1$$.y, $markerInfo$$1$$.size) ? $dataItem$$6_groupIndex$$18$$._filtered = !0 : 0 < $alpha$$3_dataColor$$5_seriesIndex$$32$$ && (D.$DvtChartMarkerUtils$$.$updatePixelMap$($pixelMap_seriesCount$$10$$, $markerInfo$$1$$.x, $markerInfo$$1$$.y, $markerInfo$$1$$.size, $alpha$$3_dataColor$$5_seriesIndex$$32$$), $dataItem$$6_groupIndex$$18$$._filtered = !1)
      }
      $chart$$90$$.$Cache$.dataFiltered = !0
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtPlotAreaRenderer$$$$_filterPointsForSeries$$($chart$$91$$, $seriesIndex$$33$$) {
  var $maxNumPts_setSize$$ = $chart$$91$$.$_plotAreaSpace$.$w$, $seriesItems$$3$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$91$$, $seriesIndex$$33$$).items, $axisInfo$$13_i$$167$$ = $chart$$91$$.$xAxis$.$getInfo$(), $maxNumPts_setSize$$ = window.Math.round(2 * ($seriesItems$$3$$.length / (($axisInfo$$13_i$$167$$.$DataMax$ - $axisInfo$$13_i$$167$$.$DataMin$) / ($axisInfo$$13_i$$167$$.$MaxValue$ - $axisInfo$$13_i$$167$$.$MinValue$))) / $maxNumPts_setSize$$);
  if(2 >= $maxNumPts_setSize$$) {
    for($axisInfo$$13_i$$167$$ = 0;$axisInfo$$13_i$$167$$ < $seriesItems$$3$$.length;$axisInfo$$13_i$$167$$++) {
      ($dataItem$$7$$ = $seriesItems$$3$$[$axisInfo$$13_i$$167$$]) && ($dataItem$$7$$._filtered = !1)
    }
  }else {
    for(var $maxIndex$$1$$, $maxValue$$3$$, $minIndex$$, $minValue$$4$$, $dataItem$$7$$, $dataValue$$1$$, $filtered$$ = !1, $axisInfo$$13_i$$167$$ = 0;$axisInfo$$13_i$$167$$ < $seriesItems$$3$$.length;$axisInfo$$13_i$$167$$ += $maxNumPts_setSize$$) {
      $maxIndex$$1$$ = -1;
      $maxValue$$3$$ = -window.Infinity;
      $minIndex$$ = -1;
      $minValue$$4$$ = window.Infinity;
      for(var $j$$29$$ = $axisInfo$$13_i$$167$$;$j$$29$$ < window.Math.min($axisInfo$$13_i$$167$$ + $maxNumPts_setSize$$, $seriesItems$$3$$.length);$j$$29$$++) {
        $dataValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$91$$, $seriesIndex$$33$$, $j$$29$$), $dataItem$$7$$ = $seriesItems$$3$$[$j$$29$$], null == $dataValue$$1$$ || null == $dataItem$$7$$ || ($dataValue$$1$$ > $maxValue$$3$$ && ($maxIndex$$1$$ = $j$$29$$, $maxValue$$3$$ = $dataValue$$1$$), $dataValue$$1$$ < $minValue$$4$$ && ($minIndex$$ = $j$$29$$, $minValue$$4$$ = $dataValue$$1$$), $filtered$$ = $dataItem$$7$$._filtered = !0)
      }
      for($j$$29$$ = $axisInfo$$13_i$$167$$;$j$$29$$ < window.Math.min($axisInfo$$13_i$$167$$ + $maxNumPts_setSize$$, $seriesItems$$3$$.length);$j$$29$$++) {
        if($dataItem$$7$$ = $seriesItems$$3$$[$j$$29$$], null != $dataItem$$7$$ && ($j$$29$$ == $maxIndex$$1$$ || $j$$29$$ == $minIndex$$)) {
          $dataItem$$7$$._filtered = !1
        }
      }
    }
    $chart$$91$$.$Cache$.dataFiltered = $filtered$$
  }
};
D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtPlotAreaRenderer$$$$_isDataItemFiltered$$($chart$$92_dataItem$$8$$, $seriesIndex$$34$$, $groupIndex$$19$$) {
  return($chart$$92_dataItem$$8$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$92_dataItem$$8$$, $seriesIndex$$34$$, $groupIndex$$19$$)) && $chart$$92_dataItem$$8$$._filtered ? !0 : !1
};
D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getCoordsForSeries$$($chart$$93$$, $seriesIndex$$35$$, $type$$76$$) {
  var $xAxis$$2$$ = $chart$$93$$.$xAxis$, $yAxis$$2$$ = $chart$$93$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$93$$, $seriesIndex$$35$$) && ($yAxis$$2$$ = $chart$$93$$.$y2Axis$);
  for(var $coords$$12$$ = [], $groupIndex$$20$$ = 0;$groupIndex$$20$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$93$$);$groupIndex$$20$$++) {
    var $coord$$19_group$$13$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$93$$, $groupIndex$$20$$), $dataValue$$2_xCoord$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$93$$, $seriesIndex$$35$$, $groupIndex$$20$$), $xValue$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$93$$, $seriesIndex$$35$$, $groupIndex$$20$$), $yCoord$$3_yValue$$ = null;
    "low" == $type$$76$$ ? $yCoord$$3_yValue$$ = D.$DvtChartDataUtils$$.$getLowValue$($chart$$93$$, $seriesIndex$$35$$, $groupIndex$$20$$) : "high" == $type$$76$$ ? $yCoord$$3_yValue$$ = D.$DvtChartDataUtils$$.$getHighValue$($chart$$93$$, $seriesIndex$$35$$, $groupIndex$$20$$) : null != $dataValue$$2_xCoord$$3$$ && !(0,window.isNaN)($dataValue$$2_xCoord$$3$$) && ($yCoord$$3_yValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$93$$, $seriesIndex$$35$$, $groupIndex$$20$$));
    null == $yCoord$$3_yValue$$ || (0,window.isNaN)($yCoord$$3_yValue$$) || !D.$DvtChartDataUtils$$.$isBLACItemInViewport$($chart$$93$$, $seriesIndex$$35$$, $groupIndex$$20$$) ? $coords$$12$$.push(new D.$DvtChartCoord$$(null, null, null, $groupIndex$$20$$, $coord$$19_group$$13$$, !1)) : (D.$DvtChartTypeUtils$$.$isPolar$($chart$$93$$) && ($yCoord$$3_yValue$$ = window.Math.max($yCoord$$3_yValue$$, (0,D.$JSCompiler_StaticMethods_getViewportMin$$)($yAxis$$2$$.$getInfo$()))), $dataValue$$2_xCoord$$3$$ = 
    $xAxis$$2$$.$getUnboundedCoordAt$($xValue$$1$$), $yCoord$$3_yValue$$ = $yAxis$$2$$.$getUnboundedCoordAt$($yCoord$$3_yValue$$), $coord$$19_group$$13$$ = new D.$DvtChartCoord$$($dataValue$$2_xCoord$$3$$, $yCoord$$3_yValue$$, $yCoord$$3_yValue$$, $groupIndex$$20$$, $coord$$19_group$$13$$, D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$93$$, $seriesIndex$$35$$, $groupIndex$$20$$)), $coords$$12$$.push($coord$$19_group$$13$$))
  }
  return $coords$$12$$
};
D.$DvtPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtPlotAreaRenderer$$$$createClippedGroup$$($chart$$94_points$$4_r$$inline_2261$$, $clip$$1_container$$60$$, $availSpace$$71_cy$$3$$) {
  var $clipGroup$$4$$ = new D.$DvtContainer$$($clip$$1_container$$60$$.$getCtx$());
  $clip$$1_container$$60$$.$addChild$($clipGroup$$4$$);
  $clip$$1_container$$60$$ = new D.$DvtClipPath$$($chart$$94_points$$4_r$$inline_2261$$.getId());
  var $buffer$$9_cx$$2_obj$$inline_2256$$ = D.$DvtPlotAreaRenderer$$.$_extendClipGroup$($chart$$94_points$$4_r$$inline_2261$$);
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$94_points$$4_r$$inline_2261$$)) {
    if($buffer$$9_cx$$2_obj$$inline_2256$$ = $availSpace$$71_cy$$3$$.x + $availSpace$$71_cy$$3$$.$w$ / 2, $availSpace$$71_cy$$3$$ = $availSpace$$71_cy$$3$$.y + $availSpace$$71_cy$$3$$.$h$ / 2, D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$94_points$$4_r$$inline_2261$$)) {
      $chart$$94_points$$4_r$$inline_2261$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($buffer$$9_cx$$2_obj$$inline_2256$$, $availSpace$$71_cy$$3$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$94_points$$4_r$$inline_2261$$), $chart$$94_points$$4_r$$inline_2261$$.$getRadius$()), $buffer$$9_cx$$2_obj$$inline_2256$$ = {type:3}, $buffer$$9_cx$$2_obj$$inline_2256$$.$points$ = $chart$$94_points$$4_r$$inline_2261$$, $buffer$$9_cx$$2_obj$$inline_2256$$ && $clip$$1_container$$60$$.$_regions$.push($buffer$$9_cx$$2_obj$$inline_2256$$)
    }else {
      $chart$$94_points$$4_r$$inline_2261$$ = $chart$$94_points$$4_r$$inline_2261$$.$getRadius$();
      var $obj$$inline_2262$$ = {type:5};
      $obj$$inline_2262$$.$cx$ = $buffer$$9_cx$$2_obj$$inline_2256$$;
      $obj$$inline_2262$$.$cy$ = $availSpace$$71_cy$$3$$;
      $obj$$inline_2262$$.$r$ = $chart$$94_points$$4_r$$inline_2261$$;
      $obj$$inline_2262$$ && $clip$$1_container$$60$$.$_regions$.push($obj$$inline_2262$$)
    }
  }else {
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$94_points$$4_r$$inline_2261$$) ? (0,D.$JSCompiler_StaticMethods_addRect$$)($clip$$1_container$$60$$, $availSpace$$71_cy$$3$$.x - $buffer$$9_cx$$2_obj$$inline_2256$$, $availSpace$$71_cy$$3$$.y, $availSpace$$71_cy$$3$$.$w$ + 2 * $buffer$$9_cx$$2_obj$$inline_2256$$, $availSpace$$71_cy$$3$$.$h$) : (0,D.$JSCompiler_StaticMethods_addRect$$)($clip$$1_container$$60$$, $availSpace$$71_cy$$3$$.x, $availSpace$$71_cy$$3$$.y - $buffer$$9_cx$$2_obj$$inline_2256$$, 
    $availSpace$$71_cy$$3$$.$w$, $availSpace$$71_cy$$3$$.$h$ + 2 * $buffer$$9_cx$$2_obj$$inline_2256$$)
  }
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($clipGroup$$4$$, $clip$$1_container$$60$$);
  return $clipGroup$$4$$
};
D.$DvtPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtPlotAreaRenderer$$$$polarToCartesian$$($r$$2$$, $theta$$1$$, $availSpace$$72$$) {
  return new D.$DvtPoint$$($availSpace$$72$$.x + $availSpace$$72$$.$w$ / 2 + $r$$2$$ * window.Math.sin($theta$$1$$), $availSpace$$72$$.y + $availSpace$$72$$.$h$ / 2 - $r$$2$$ * window.Math.cos($theta$$1$$))
};
D.$DvtPlotAreaRenderer$$.$convertAxisCoord$ = function $$DvtPlotAreaRenderer$$$$convertAxisCoord$$($cartesian_chart$$95$$, $coord$$20$$, $availSpace$$73$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($cartesian_chart$$95$$) ? ($cartesian_chart$$95$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($coord$$20$$.y, $coord$$20$$.x, $availSpace$$73$$), new D.$DvtPoint$$($cartesian_chart$$95$$.x, $cartesian_chart$$95$$.y)) : D.$DvtChartTypeUtils$$.$isHorizontal$($cartesian_chart$$95$$) ? new D.$DvtPoint$$($coord$$20$$.y, $coord$$20$$.x) : new D.$DvtPoint$$($coord$$20$$.x, $coord$$20$$.y)
};
D.$DvtPlotAreaRenderer$$.$_extendClipGroup$ = function $$DvtPlotAreaRenderer$$$$_extendClipGroup$$($chart$$96$$) {
  if(D.$DvtChartTypeUtils$$.$hasLineSeries$($chart$$96$$) || D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$96$$)) {
    var $lineWidth$$1$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$96$$), $hasEdgeData$$ = function $$hasEdgeData$$$($chart$$96$$) {
      var $hasEdgeData$$ = $chart$$96$$.$getInfo$();
      $chart$$96$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$GlobalMax$);
      var $dataMaxCoord$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$DataMax$), $globalMinCoord$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$GlobalMin$), $hasEdgeData$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$DataMin$);
      return null != $chart$$96$$ && null != $dataMaxCoord$$ && $dataMaxCoord$$ - $chart$$96$$ <= $lineWidth$$1$$ / 2 || null != $globalMinCoord$$ && null != $hasEdgeData$$ && $globalMinCoord$$ - $hasEdgeData$$ <= $lineWidth$$1$$ / 2 ? !0 : !1
    };
    if($chart$$96$$.$yAxis$ && $hasEdgeData$$($chart$$96$$.$yAxis$) || $chart$$96$$.$y2Axis$ && $hasEdgeData$$($chart$$96$$.$y2Axis$)) {
      return window.Math.ceil($lineWidth$$1$$ / 2)
    }
  }
  return 0
};
D.$DvtFunnelRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelRenderer$$, D.$DvtObj$$, "DvtFunnelRenderer");
D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 70;
D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ = 0;
D.$DvtFunnelRenderer$$.$render$ = function $$DvtFunnelRenderer$$$$render$$($chart$$62$$, $container$$37_selected$$1$$, $availSpace$$44$$) {
  var $funnelContainer$$ = new D.$DvtContainer$$($chart$$62$$.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($funnelContainer$$, $availSpace$$44$$.x, $availSpace$$44$$.y);
  $container$$37_selected$$1$$.$addChild$($funnelContainer$$);
  $chart$$62$$.$_plotArea$ = $funnelContainer$$;
  var $bbox$$4_dirFactor$$;
  if("horizontal" == $chart$$62$$.$getOptions$().orientation) {
    $bbox$$4_dirFactor$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$44$$.$w$, $availSpace$$44$$.$h$)
  }else {
    var $rotationMatrix$$ = new D.$DvtMatrix$$;
    $bbox$$4_dirFactor$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$62$$.$getCtx$()) ? -1 : 1;
    $rotationMatrix$$.translate(-$availSpace$$44$$.$h$ / 2, -$availSpace$$44$$.$w$ / 2);
    $rotationMatrix$$.rotate($bbox$$4_dirFactor$$ * window.Math.PI / 2);
    $rotationMatrix$$.translate($availSpace$$44$$.x + $availSpace$$44$$.$w$ / 2, $availSpace$$44$$.y + $availSpace$$44$$.$h$ / 2);
    $bbox$$4_dirFactor$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$44$$.$h$, $availSpace$$44$$.$w$);
    $funnelContainer$$.$setMatrix$($rotationMatrix$$)
  }
  D.$DvtFunnelRenderer$$.$_renderFunnelSlices$($chart$$62$$, $funnelContainer$$, $bbox$$4_dirFactor$$) || D.$DvtChartRenderer$$.$renderEmptyText$($chart$$62$$, $container$$37_selected$$1$$, $availSpace$$44$$);
  $container$$37_selected$$1$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$62$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$62$$, $container$$37_selected$$1$$);
  $chart$$62$$.$highlight$(D.$DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$62$$))
};
D.$DvtFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtFunnelRenderer$$$$_renderFunnelSlices$$($chart$$63$$, $container$$38$$, $availSpace$$45$$) {
  for(var $maxGapSize_options$$52_totalValue$$ = $chart$$63$$.$getOptions$(), $seriesCount$$6_slice$$1_targetValue$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$63$$), $gapRatio_gapSize$$ = D.$DvtChartStyleUtils$$.$getDataItemGaps$($chart$$63$$), $maxGapSize_options$$52_totalValue$$ = window.Math.min(D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * $availSpace$$45$$.$w$ / ($seriesCount$$6_slice$$1_targetValue$$ - 1), ("on" == $maxGapSize_options$$52_totalValue$$.styleDefaults.threeDEffect ? D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ : 
  D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$) * $availSpace$$45$$.$w$), $gapRatio_gapSize$$ = $gapRatio_gapSize$$ * $maxGapSize_options$$52_totalValue$$, $numDrawnSeries$$ = $maxGapSize_options$$52_totalValue$$ = 0, $cumulativeValue$$ = 0, $seriesIndex$$18$$ = 0;$seriesIndex$$18$$ < $seriesCount$$6_slice$$1_targetValue$$;$seriesIndex$$18$$++) {
    if(D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$63$$, $seriesIndex$$18$$)) {
      var $value$$90$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$63$$, $seriesIndex$$18$$);
      null == $value$$90$$ && ($value$$90$$ = D.$DvtChartDataUtils$$.getValue($chart$$63$$, $seriesIndex$$18$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$));
      0 >= $value$$90$$ || ($maxGapSize_options$$52_totalValue$$ += $value$$90$$)
    }
  }
  if(0 == $maxGapSize_options$$52_totalValue$$) {
    return!1
  }
  for($seriesIndex$$18$$ = $seriesCount$$6_slice$$1_targetValue$$ - 1;0 <= $seriesIndex$$18$$;$seriesIndex$$18$$--) {
    D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$63$$, $seriesIndex$$18$$) && ($value$$90$$ = D.$DvtChartDataUtils$$.getValue($chart$$63$$, $seriesIndex$$18$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$), $seriesCount$$6_slice$$1_targetValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$63$$, $seriesIndex$$18$$), 0 >= $value$$90$$ && null == $seriesCount$$6_slice$$1_targetValue$$ || null != $seriesCount$$6_slice$$1_targetValue$$ && 0 >= $seriesCount$$6_slice$$1_targetValue$$ || (null != 
    $seriesCount$$6_slice$$1_targetValue$$ ? ($cumulativeValue$$ += $seriesCount$$6_slice$$1_targetValue$$ / $maxGapSize_options$$52_totalValue$$, $seriesCount$$6_slice$$1_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$63$$, $seriesIndex$$18$$, $numDrawnSeries$$, $availSpace$$45$$.$w$, $availSpace$$45$$.$h$, 1 - $cumulativeValue$$, $seriesCount$$6_slice$$1_targetValue$$ / $maxGapSize_options$$52_totalValue$$, $value$$90$$ / $seriesCount$$6_slice$$1_targetValue$$, $gapRatio_gapSize$$)) : ($cumulativeValue$$ += 
    $value$$90$$ / $maxGapSize_options$$52_totalValue$$, $seriesCount$$6_slice$$1_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$63$$, $seriesIndex$$18$$, $numDrawnSeries$$, $availSpace$$45$$.$w$, $availSpace$$45$$.$h$, 1 - $cumulativeValue$$, $value$$90$$ / $maxGapSize_options$$52_totalValue$$, null, $gapRatio_gapSize$$)), $numDrawnSeries$$++, $container$$38$$.$addChild$($seriesCount$$6_slice$$1_targetValue$$), (0,D.$DvtChartObjPeer$associate$$)($seriesCount$$6_slice$$1_targetValue$$, $chart$$63$$, 
    $seriesIndex$$18$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$)))
  }
  return!0
};
D.$DvtRefObjRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjRenderer$$, D.$DvtObj$$, "DvtRefObjRenderer");
D.$DvtRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtRefObjRenderer$$$$renderBackgroundObjects$$($chart$$97$$, $container$$61$$, $plotAreaBounds$$4$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$97$$, $container$$61$$, $plotAreaBounds$$4$$, "back")
};
D.$DvtRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtRefObjRenderer$$$$renderForegroundObjects$$($chart$$98$$, $container$$62$$, $plotAreaBounds$$5$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$98$$, $container$$62$$, $plotAreaBounds$$5$$, "front")
};
D.$DvtRefObjRenderer$$.$_renderObjects$ = function $$DvtRefObjRenderer$$$$_renderObjects$$($chart$$99$$, $container$$63$$, $plotAreaBounds$$6$$, $location$$21$$) {
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$99$$, $container$$63$$, $plotAreaBounds$$6$$, $location$$21$$, $chart$$99$$.$xAxis$, D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$99$$, "x"));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$99$$, $container$$63$$, $plotAreaBounds$$6$$, $location$$21$$, $chart$$99$$.$yAxis$, D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$99$$, "y"));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$99$$, $container$$63$$, $plotAreaBounds$$6$$, $location$$21$$, $chart$$99$$.$y2Axis$, D.$DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$99$$, "y2"))
};
D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtRefObjRenderer$$$$_renderObjectsForAxis$$($chart$$100$$, $container$$64$$, $plotAreaBounds$$7$$, $location$$22$$, $axis$$74$$, $objects$$) {
  if($objects$$ && $axis$$74$$) {
    for(var $i$$168$$ = 0;$i$$168$$ < $objects$$.length;$i$$168$$++) {
      var $refObj$$3_refObjPeer$$ = $objects$$[$i$$168$$];
      if(D.$DvtChartRefObjUtils$$.$isObjectRendered$($chart$$100$$, $refObj$$3_refObjPeer$$) && $refObj$$3_refObjPeer$$ && D.$DvtChartRefObjUtils$$.$getLocation$($refObj$$3_refObjPeer$$) == $location$$22$$) {
        var $shape$$26$$, $type$$77$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$3_refObjPeer$$);
        "area" == $type$$77$$ ? $shape$$26$$ = D.$DvtRefObjRenderer$$.$_createReferenceArea$($refObj$$3_refObjPeer$$, $chart$$100$$, $plotAreaBounds$$7$$, $axis$$74$$) : "line" == $type$$77$$ && ($shape$$26$$ = D.$DvtRefObjRenderer$$.$_createReferenceLine$($refObj$$3_refObjPeer$$, $chart$$100$$, $plotAreaBounds$$7$$, $axis$$74$$));
        null != $shape$$26$$ && ($refObj$$3_refObjPeer$$ = new D.$DvtRefObjPeer$$($chart$$100$$, [$shape$$26$$], $refObj$$3_refObjPeer$$, $i$$168$$, $axis$$74$$ == $chart$$100$$.$xAxis$ ? "xAxis" : $axis$$74$$ == $chart$$100$$.$yAxis$ ? "yAxis" : "y2Axis"), $chart$$100$$.$registerObject$($refObj$$3_refObjPeer$$), $chart$$100$$.$getEventManager$().$associate$($shape$$26$$, $refObj$$3_refObjPeer$$), $container$$64$$.$addChild$($shape$$26$$))
      }
    }
  }
};
D.$DvtRefObjRenderer$$.$_createReferenceArea$ = function $$DvtRefObjRenderer$$$$_createReferenceArea$$($cy$$4_highVal_pointIndex_refObj$$4$$, $chart$$101_outerPoints_radius$$3$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$, $axis$$75_highCoord$$2$$) {
  var $context$$48_items$$2$$ = $chart$$101_outerPoints_radius$$3$$.$getCtx$(), $color$$9_position$$19$$ = $axis$$75_highCoord$$2$$.$getPosition$(), $bHoriz$$5_cx$$3_lowCoords$$ = "top" == $color$$9_position$$19$$ || "bottom" == $color$$9_position$$19$$, $bRadial_highCoords_pLow$$1$$ = "radial" == $color$$9_position$$19$$, $color$$9_position$$19$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$4_highVal_pointIndex_refObj$$4$$), $lineType$$2_lowCoord$$2_lowVal$$ = D.$DvtChartRefObjUtils$$.$getLineType$($cy$$4_highVal_pointIndex_refObj$$4$$);
  if(null != $cy$$4_highVal_pointIndex_refObj$$4$$.items && $axis$$75_highCoord$$2$$ == $chart$$101_outerPoints_radius$$3$$.$yAxis$) {
    $context$$48_items$$2$$ = $cy$$4_highVal_pointIndex_refObj$$4$$.items;
    $bRadial_highCoords_pLow$$1$$ = [];
    $bHoriz$$5_cx$$3_lowCoords$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($chart$$101_outerPoints_radius$$3$$.$xAxis$)) {
      for(;$context$$48_items$$2$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$101_outerPoints_radius$$3$$);) {
        $context$$48_items$$2$$.push(null)
      }
    }
    for($cy$$4_highVal_pointIndex_refObj$$4$$ = 0;$cy$$4_highVal_pointIndex_refObj$$4$$ < $context$$48_items$$2$$.length;$cy$$4_highVal_pointIndex_refObj$$4$$++) {
      var $dataItem$$9_hCoord_hVal$$ = $context$$48_items$$2$$[$cy$$4_highVal_pointIndex_refObj$$4$$], $lCoord_lVal$$ = D.$DvtChartRefObjUtils$$.$getLowValue$($dataItem$$9_hCoord_hVal$$), $dataItem$$9_hCoord_hVal$$ = D.$DvtChartRefObjUtils$$.$getHighValue$($dataItem$$9_hCoord_hVal$$);
      if(null == $lCoord_lVal$$ || null == $dataItem$$9_hCoord_hVal$$) {
        $bRadial_highCoords_pLow$$1$$.push(new D.$DvtChartCoord$$), $bHoriz$$5_cx$$3_lowCoords$$.push(new D.$DvtChartCoord$$)
      }else {
        var $lCoord_lVal$$ = $axis$$75_highCoord$$2$$.$getUnboundedCoordAt$($lCoord_lVal$$), $dataItem$$9_hCoord_hVal$$ = $axis$$75_highCoord$$2$$.$getUnboundedCoordAt$($dataItem$$9_hCoord_hVal$$), $xCoord$$4$$ = $chart$$101_outerPoints_radius$$3$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtChartRefObjUtils$$.$getXValue$($chart$$101_outerPoints_radius$$3$$, $context$$48_items$$2$$, $cy$$4_highVal_pointIndex_refObj$$4$$));
        $bRadial_highCoords_pLow$$1$$.push(new D.$DvtChartCoord$$($xCoord$$4$$, $dataItem$$9_hCoord_hVal$$, $dataItem$$9_hCoord_hVal$$));
        $bHoriz$$5_cx$$3_lowCoords$$.push(new D.$DvtChartCoord$$($xCoord$$4$$, $lCoord_lVal$$, $lCoord_lVal$$))
      }
    }
    $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = new D.$DvtChartLineArea$$($chart$$101_outerPoints_radius$$3$$, !0, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$, null, new D.$DvtSolidFill$$($color$$9_position$$19$$), null, $lineType$$2_lowCoord$$2_lowVal$$, $bRadial_highCoords_pLow$$1$$, $lineType$$2_lowCoord$$2_lowVal$$, $bHoriz$$5_cx$$3_lowCoords$$)
  }else {
    $lineType$$2_lowCoord$$2_lowVal$$ = D.$DvtChartRefObjUtils$$.$getLowValue$($cy$$4_highVal_pointIndex_refObj$$4$$);
    $cy$$4_highVal_pointIndex_refObj$$4$$ = D.$DvtChartRefObjUtils$$.$getHighValue$($cy$$4_highVal_pointIndex_refObj$$4$$);
    if(null == $lineType$$2_lowCoord$$2_lowVal$$ || -window.Infinity == $lineType$$2_lowCoord$$2_lowVal$$) {
      $lineType$$2_lowCoord$$2_lowVal$$ = $axis$$75_highCoord$$2$$.$getInfo$().$GlobalMin$
    }
    if(null == $cy$$4_highVal_pointIndex_refObj$$4$$ || window.Infinity == $cy$$4_highVal_pointIndex_refObj$$4$$) {
      $cy$$4_highVal_pointIndex_refObj$$4$$ = $axis$$75_highCoord$$2$$.$getInfo$().$GlobalMax$
    }
    $lineType$$2_lowCoord$$2_lowVal$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$101_outerPoints_radius$$3$$, $axis$$75_highCoord$$2$$, $lineType$$2_lowCoord$$2_lowVal$$);
    $axis$$75_highCoord$$2$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$101_outerPoints_radius$$3$$, $axis$$75_highCoord$$2$$, $cy$$4_highVal_pointIndex_refObj$$4$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$101_outerPoints_radius$$3$$) ? ($bHoriz$$5_cx$$3_lowCoords$$ = $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.x + $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$w$ / 2, $cy$$4_highVal_pointIndex_refObj$$4$$ = $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.y + $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$h$ / 2, $bRadial_highCoords_pLow$$1$$ ? D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$101_outerPoints_radius$$3$$) ? 
    ($cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$101_outerPoints_radius$$3$$), $chart$$101_outerPoints_radius$$3$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$5_cx$$3_lowCoords$$, $cy$$4_highVal_pointIndex_refObj$$4$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$, $axis$$75_highCoord$$2$$, 1), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$5_cx$$3_lowCoords$$, 
    $cy$$4_highVal_pointIndex_refObj$$4$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$, $lineType$$2_lowCoord$$2_lowVal$$, 0), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPathUtils$$.$polyline$($chart$$101_outerPoints_radius$$3$$) + D.$DvtPathUtils$$.$polyline$($cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$) + D.$DvtPathUtils$$.closePath()) : $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPathUtils$$.moveTo($bHoriz$$5_cx$$3_lowCoords$$, 
    $cy$$4_highVal_pointIndex_refObj$$4$$ - $axis$$75_highCoord$$2$$) + D.$DvtPathUtils$$.arcTo($axis$$75_highCoord$$2$$, $axis$$75_highCoord$$2$$, window.Math.PI, 1, $bHoriz$$5_cx$$3_lowCoords$$, $cy$$4_highVal_pointIndex_refObj$$4$$ + $axis$$75_highCoord$$2$$) + D.$DvtPathUtils$$.arcTo($axis$$75_highCoord$$2$$, $axis$$75_highCoord$$2$$, window.Math.PI, 1, $bHoriz$$5_cx$$3_lowCoords$$, $cy$$4_highVal_pointIndex_refObj$$4$$ - $axis$$75_highCoord$$2$$) + D.$DvtPathUtils$$.moveTo($bHoriz$$5_cx$$3_lowCoords$$, 
    $cy$$4_highVal_pointIndex_refObj$$4$$ - $lineType$$2_lowCoord$$2_lowVal$$) + D.$DvtPathUtils$$.arcTo($lineType$$2_lowCoord$$2_lowVal$$, $lineType$$2_lowCoord$$2_lowVal$$, window.Math.PI, 0, $bHoriz$$5_cx$$3_lowCoords$$, $cy$$4_highVal_pointIndex_refObj$$4$$ + $lineType$$2_lowCoord$$2_lowVal$$) + D.$DvtPathUtils$$.arcTo($lineType$$2_lowCoord$$2_lowVal$$, $lineType$$2_lowCoord$$2_lowVal$$, window.Math.PI, 0, $bHoriz$$5_cx$$3_lowCoords$$, $cy$$4_highVal_pointIndex_refObj$$4$$ - $lineType$$2_lowCoord$$2_lowVal$$) + 
    D.$DvtPathUtils$$.closePath() : ($chart$$101_outerPoints_radius$$3$$ = $chart$$101_outerPoints_radius$$3$$.$getRadius$(), $bRadial_highCoords_pLow$$1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$101_outerPoints_radius$$3$$, $lineType$$2_lowCoord$$2_lowVal$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$101_outerPoints_radius$$3$$, $axis$$75_highCoord$$2$$, 
    $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = D.$DvtPathUtils$$.moveTo($bHoriz$$5_cx$$3_lowCoords$$, $cy$$4_highVal_pointIndex_refObj$$4$$) + D.$DvtPathUtils$$.lineTo($bRadial_highCoords_pLow$$1$$.x, $bRadial_highCoords_pLow$$1$$.y) + D.$DvtPathUtils$$.arcTo($chart$$101_outerPoints_radius$$3$$, $chart$$101_outerPoints_radius$$3$$, $axis$$75_highCoord$$2$$ - $lineType$$2_lowCoord$$2_lowVal$$, (0,D.$DvtAgent$isRightToLeft$$)($context$$48_items$$2$$) ? 
    0 : 1, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.x, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.y) + D.$DvtPathUtils$$.lineTo($cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.x, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.y) + D.$DvtPathUtils$$.closePath()), $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = new D.$DvtPath$$($context$$48_items$$2$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$)) : 
    $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$ = new D.$DvtPolygon$$($context$$48_items$$2$$, $bHoriz$$5_cx$$3_lowCoords$$ ? [$lineType$$2_lowCoord$$2_lowVal$$, 0, $axis$$75_highCoord$$2$$, 0, $axis$$75_highCoord$$2$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$h$, $lineType$$2_lowCoord$$2_lowVal$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$h$] : [0, $lineType$$2_lowCoord$$2_lowVal$$, 0, $axis$$75_highCoord$$2$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$w$, 
    $axis$$75_highCoord$$2$$, $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$w$, $lineType$$2_lowCoord$$2_lowVal$$]);
    $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$.$setSolidFill$($color$$9_position$$19$$)
  }
  return $cmds$$4_innerPoints_nSides_pHigh$$1_plotAreaBounds$$8_shape$$27$$
};
D.$DvtRefObjRenderer$$.$_createReferenceLine$ = function $$DvtRefObjRenderer$$$$_createReferenceLine$$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $cartesian$$1_chart$$102_shape$$28$$, $plotAreaBounds$$9$$, $axis$$76_cx$$4$$) {
  var $lineWidth$$2_position$$20_stroke$$11$$ = $axis$$76_cx$$4$$.$getPosition$(), $bHoriz$$6_items$$3$$ = "top" == $lineWidth$$2_position$$20_stroke$$11$$ || "bottom" == $lineWidth$$2_position$$20_stroke$$11$$, $bRadial$$1_coords$$13_points$$6$$ = "radial" == $lineWidth$$2_position$$20_stroke$$11$$, $bTangential_pointIndex$$1$$ = "tangential" == $lineWidth$$2_position$$20_stroke$$11$$, $lineWidth$$2_position$$20_stroke$$11$$ = D.$DvtChartRefObjUtils$$.$getLineWidth$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), 
  $cy$$5_lineType$$3$$ = D.$DvtChartRefObjUtils$$.$getLineType$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $color$$10_context$$49_dataItem$$10_yCoord$$4$$ = D.$DvtChartRefObjUtils$$.$getColor$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $lineWidth$$2_position$$20_stroke$$11$$ = new D.$DvtSolidStroke$$($color$$10_context$$49_dataItem$$10_yCoord$$4$$, 1, $lineWidth$$2_position$$20_stroke$$11$$);
  $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.lineStyle && $lineWidth$$2_position$$20_stroke$$11$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.lineStyle));
  $color$$10_context$$49_dataItem$$10_yCoord$$4$$ = $cartesian$$1_chart$$102_shape$$28$$.$getCtx$();
  if(null != $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.items && $axis$$76_cx$$4$$ == $cartesian$$1_chart$$102_shape$$28$$.$yAxis$) {
    $bHoriz$$6_items$$3$$ = $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.items;
    $bRadial$$1_coords$$13_points$$6$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($cartesian$$1_chart$$102_shape$$28$$.$xAxis$)) {
      for(;$bHoriz$$6_items$$3$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($cartesian$$1_chart$$102_shape$$28$$);) {
        $bHoriz$$6_items$$3$$.push(null)
      }
    }
    $bRadial$$1_coords$$13_points$$6$$ = [];
    for($bTangential_pointIndex$$1$$ = 0;$bTangential_pointIndex$$1$$ < $bHoriz$$6_items$$3$$.length;$bTangential_pointIndex$$1$$++) {
      $color$$10_context$$49_dataItem$$10_yCoord$$4$$ = $bHoriz$$6_items$$3$$[$bTangential_pointIndex$$1$$], $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = null, null != $color$$10_context$$49_dataItem$$10_yCoord$$4$$ && ((0,window.isNaN)($color$$10_context$$49_dataItem$$10_yCoord$$4$$) ? null != $color$$10_context$$49_dataItem$$10_yCoord$$4$$.value && ($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = $color$$10_context$$49_dataItem$$10_yCoord$$4$$.value) : $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = 
      $color$$10_context$$49_dataItem$$10_yCoord$$4$$), null == $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ ? $bRadial$$1_coords$$13_points$$6$$.push(new D.$DvtChartCoord$$) : ($color$$10_context$$49_dataItem$$10_yCoord$$4$$ = $axis$$76_cx$$4$$.$getUnboundedCoordAt$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = $cartesian$$1_chart$$102_shape$$28$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtChartRefObjUtils$$.$getXValue$($cartesian$$1_chart$$102_shape$$28$$, 
      $bHoriz$$6_items$$3$$, $bTangential_pointIndex$$1$$)), $bRadial$$1_coords$$13_points$$6$$.push(new D.$DvtChartCoord$$($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $color$$10_context$$49_dataItem$$10_yCoord$$4$$, $color$$10_context$$49_dataItem$$10_yCoord$$4$$)))
    }
    $cartesian$$1_chart$$102_shape$$28$$ = new D.$DvtChartLineArea$$($cartesian$$1_chart$$102_shape$$28$$, !1, $plotAreaBounds$$9$$, null, null, $lineWidth$$2_position$$20_stroke$$11$$, $cy$$5_lineType$$3$$, $bRadial$$1_coords$$13_points$$6$$)
  }else {
    if($lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.value) {
      $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($cartesian$$1_chart$$102_shape$$28$$, $axis$$76_cx$$4$$, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$.value);
      if(null == $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ || window.Infinity == $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$ || -window.Infinity == $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$) {
        return null
      }
      $axis$$76_cx$$4$$ = $plotAreaBounds$$9$$.x + $plotAreaBounds$$9$$.$w$ / 2;
      $cy$$5_lineType$$3$$ = $plotAreaBounds$$9$$.y + $plotAreaBounds$$9$$.$h$ / 2;
      $bRadial$$1_coords$$13_points$$6$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($cartesian$$1_chart$$102_shape$$28$$) ? ($bRadial$$1_coords$$13_points$$6$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($axis$$76_cx$$4$$, $cy$$5_lineType$$3$$, D.$DvtChartDataUtils$$.$getGroupCount$($cartesian$$1_chart$$102_shape$$28$$), $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $cartesian$$1_chart$$102_shape$$28$$ = new D.$DvtPolygon$$($color$$10_context$$49_dataItem$$10_yCoord$$4$$, $bRadial$$1_coords$$13_points$$6$$)) : 
      $cartesian$$1_chart$$102_shape$$28$$ = new D.$DvtCircle$$($color$$10_context$$49_dataItem$$10_yCoord$$4$$, $axis$$76_cx$$4$$, $cy$$5_lineType$$3$$, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), $cartesian$$1_chart$$102_shape$$28$$.$setFill$(null)) : $bTangential_pointIndex$$1$$ ? ($cartesian$$1_chart$$102_shape$$28$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian$$1_chart$$102_shape$$28$$.$getRadius$(), $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $plotAreaBounds$$9$$), $cartesian$$1_chart$$102_shape$$28$$ = 
      new D.$DvtLine$$($color$$10_context$$49_dataItem$$10_yCoord$$4$$, $axis$$76_cx$$4$$, $cy$$5_lineType$$3$$, $cartesian$$1_chart$$102_shape$$28$$.x, $cartesian$$1_chart$$102_shape$$28$$.y)) : ($cartesian$$1_chart$$102_shape$$28$$ = $bHoriz$$6_items$$3$$ ? new D.$DvtLine$$($color$$10_context$$49_dataItem$$10_yCoord$$4$$, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, 0, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $plotAreaBounds$$9$$.$h$) : new D.$DvtLine$$($color$$10_context$$49_dataItem$$10_yCoord$$4$$, 
      0, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$, $plotAreaBounds$$9$$.$w$, $lineCoord$$1_refObj$$5_value$$91_xCoord$$5$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cartesian$$1_chart$$102_shape$$28$$));
      $cartesian$$1_chart$$102_shape$$28$$.$setStroke$($lineWidth$$2_position$$20_stroke$$11$$)
    }else {
      return null
    }
  }
  return $cartesian$$1_chart$$102_shape$$28$$
};
D.$DvtRefObjRenderer$$.$_getAxisCoord$ = function $$DvtRefObjRenderer$$$$_getAxisCoord$$($chart$$103_index$$131$$, $axis$$77$$, $value$$92$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$77$$) && ($chart$$103_index$$131$$ = D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$103_index$$131$$, $value$$92$$), 0 <= $chart$$103_index$$131$$) ? $axis$$77$$.$getUnboundedCoordAt$($chart$$103_index$$131$$) : !(0,window.isNaN)($value$$92$$) ? $axis$$77$$.$getUnboundedCoordAt$($value$$92$$) : null
};
D.$DvtSparkChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtSparkChart", D.$DvtSparkChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChart$$, D.$DvtBaseComponent$$, "DvtSparkChart");
D.$DvtSparkChart$$.newInstance = function $$DvtSparkChart$$$newInstance$($context$$551$$, $callback$$138$$, $callbackObj$$87$$) {
  var $sparkChart$$ = new D.$DvtSparkChart$$;
  $sparkChart$$.Init($context$$551$$, $callback$$138$$, $callbackObj$$87$$);
  return $sparkChart$$
};
D.$DvtSparkChart$$.getDefaults = function $$DvtSparkChart$$$getDefaults$($skin$$18$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSparkChartDefaults$$, $skin$$18$$)
};
D.$DvtSparkChart$$.prototype.Init = function $$DvtSparkChart$$$$Init$($context$$552$$, $callback$$139$$, $callbackObj$$88$$) {
  D.$DvtSparkChart$$.$superclass$.Init.call(this, $context$$552$$, $callback$$139$$, $callbackObj$$88$$);
  this.$Defaults$ = new D.$DvtSparkChartDefaults$$;
  this.$_eventManager$ = new D.$DvtSparkChartEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_chart$ = (0,D.$DvtChart$newInstance$$)($context$$552$$, this.$_onRenderEnd$, this);
  this.$addChild$(this.$_chart$);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtKeyboardHandler$$(this.$_eventManager$));
  this.$_tooltipMask$ = new D.$DvtRect$$($context$$552$$);
  this.$addChild$(this.$_tooltipMask$);
  this.setId("sparkChart1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$DvtSparkChart$$.prototype.$SetOptions$ = function $$DvtSparkChart$$$$$SetOptions$$($options$$244$$) {
  $options$$244$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$244$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtSparkChart$$.prototype.setId = function $$DvtSparkChart$$$$setId$($id$$256$$) {
  D.$DvtSparkChart$$.$superclass$.setId.call(this, $id$$256$$);
  this.$_chart$ && this.$_chart$.setId($id$$256$$ + "chart")
};
D.$DvtSparkChart$$.prototype.$render$ = function $$DvtSparkChart$$$$$render$$($options$$245_tooltip$$41$$, $width$$149$$, $height$$136$$) {
  this.$SetOptions$($options$$245_tooltip$$41$$);
  !(0,window.isNaN)($width$$149$$) && !(0,window.isNaN)($height$$136$$) && (this.$Width$ = $width$$149$$, this.$Height$ = $height$$136$$);
  this.$_isDoneRendering$ = this.$_eventReceived$ = !1;
  D.$DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
  $options$$245_tooltip$$41$$ = this.$Options$.shortDesc;
  this.$_tooltipMask$.$setWidth$(this.$Width$);
  this.$_tooltipMask$.$setHeight$(this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_tooltipMask$);
  $options$$245_tooltip$$41$$ ? (this.$_peer$ = new D.$DvtSimpleObjPeer$$(null, $options$$245_tooltip$$41$$, this.$Options$.color), this.$_eventManager$.$associate$(this.$_tooltipMask$, this.$_peer$)) : this.$_peer$ = null;
  this.$Options$._selectingCursor && this.setCursor("pointer");
  this.$UpdateAriaAttributes$();
  this.$_eventReceived$ && (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this);
  this.$_isDoneRendering$ = !0
};
D.$DvtSparkChart$$.prototype.render = D.$DvtSparkChart$$.prototype.$render$;
D.$DvtSparkChart$$.prototype.$_onRenderEnd$ = function $$DvtSparkChart$$$$$_onRenderEnd$$($event$$699$$) {
  this.$_eventReceived$ = !0;
  "ready" == $event$$699$$.$getType$() && this.$_isDoneRendering$ && (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this)
};
D.$DvtSparkChart$$.prototype.$getAutomation$ = function $$DvtSparkChart$$$$$getAutomation$$() {
  return new D.$DvtSparkChartAutomation$$(this)
};
D.$DvtSparkChart$$.prototype.getAutomation = D.$DvtSparkChart$$.prototype.$getAutomation$;
D.$DvtSparkChart$$.prototype.$GetComponentDescription$ = function $$DvtSparkChart$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "CHART")
};
D.$DvtSparkChart$$.prototype.$UpdateAriaAttributes$ = function $$DvtSparkChart$$$$$UpdateAriaAttributes$$() {
  var $desc$$26$$ = (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), this.$Options$.shortDesc ? [this.$Options$.shortDesc] : null);
  (0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this) ? (this.$getCtx$().$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), $desc$$26$$]))) : (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $desc$$26$$))
};
D.$DvtSparkChart$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtSparkChart$$.prototype.$__getLogicalObject$ = (0,D.$JSCompiler_get$$)("$_peer$");
D.$DvtSparkChartAutomation$$ = (0,D.$JSCompiler_set$$)("$_sparkChart$");
(0,D.$goog$exportPath_$$)("DvtSparkChartAutomation", D.$DvtSparkChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartAutomation$$, D.$DvtAutomation$$, "DvtSparkChartAutomation");
D.$DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($dataItem$$40_itemIndex$$10$$) {
  return($dataItem$$40_itemIndex$$10$$ = this.$_sparkChart$.$_chart$.$getAutomation$().$getDataItem$(0, $dataItem$$40_itemIndex$$10$$)) ? {borderColor:$dataItem$$40_itemIndex$$10$$.borderColor, color:$dataItem$$40_itemIndex$$10$$.color, date:$dataItem$$40_itemIndex$$10$$.x, low:$dataItem$$40_itemIndex$$10$$.low, high:$dataItem$$40_itemIndex$$10$$.high, value:null == $dataItem$$40_itemIndex$$10$$.low || null == $dataItem$$40_itemIndex$$10$$.high ? $dataItem$$40_itemIndex$$10$$.value : $dataItem$$40_itemIndex$$10$$.high - 
  $dataItem$$40_itemIndex$$10$$.low} : null
};
D.$DvtSparkChartAutomation$$.prototype.getDataItem = D.$DvtSparkChartAutomation$$.prototype.$getDataItem$;
D.$DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$() {
  this.Init({skyros:D.$DvtSparkChartDefaults$VERSION_1$$, alta:D.$DvtSparkChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtSparkChartDefaults");
D.$DvtSparkChartDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#267db3"};
D.$DvtSparkChartDefaults$VERSION_1$$ = {skin:"skyros", type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:null, color:"#666699", firstColor:null, lastColor:null, highColor:null, lowColor:null, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", barGapRatio:0.25, _statusMessageStyle:new D.$DvtCSSStyle$$("font-size: 12px; color: #404259;")};
D.$DvtSparkChartEventManager$$ = function $$DvtSparkChartEventManager$$$($sparkChart$$1$$) {
  this.Init($sparkChart$$1$$.$getCtx$(), $sparkChart$$1$$.dispatchEvent, $sparkChart$$1$$);
  this.$_sparkChart$ = $sparkChart$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartEventManager$$, D.$DvtEventManager$$, "DvtSparkChartEventManager");
D.$DvtSparkChartEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtSparkChartEventManager$$$$$ProcessKeyboardEvent$$($event$$700$$) {
  if(!this.$KeyboardHandler$) {
    return!1
  }
  if(9 == $event$$700$$.keyCode) {
    var $pos$$70$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_sparkChart$.$getCtx$());
    (0,D.$JSCompiler_StaticMethods_ProcessObjectTooltip$$)(this, $event$$700$$, $pos$$70$$.x, $pos$$70$$.y, this.$_sparkChart$.$__getLogicalObject$(), this.$_sparkChart$)
  }
  return!1
};
D.$DvtSparkChartEventManager$$.prototype.$OnBlur$ = function $$DvtSparkChartEventManager$$$$$OnBlur$$($event$$701$$) {
  D.$DvtSparkChartEventManager$$.$superclass$.$OnBlur$.call(this, $event$$701$$);
  this.$hideTooltip$()
};
D.$DvtSparkChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartRenderer$$, D.$DvtObj$$, "DvtSparkChartRenderer");
D.$DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($items$$32_spark$$, $width$$150$$, $height$$137$$) {
  var $chart$$340$$ = $items$$32_spark$$.$_chart$, $chartOptions$$ = D.$DvtSparkChartRenderer$$.$_convertOptionsObj$($items$$32_spark$$), $markerGap$$1_options$$246$$ = $items$$32_spark$$.$getOptions$();
  if("area" == $markerGap$$1_options$$246$$.type || "line" == $markerGap$$1_options$$246$$.type || "lineWithArea" == $markerGap$$1_options$$246$$.type) {
    $items$$32_spark$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$32_spark$$);
    var $hasMarkers$$ = !1;
    if($markerGap$$1_options$$246$$.firstColor || $markerGap$$1_options$$246$$.lastColor || $markerGap$$1_options$$246$$.highColor || $markerGap$$1_options$$246$$.lowColor) {
      $hasMarkers$$ = !0
    }else {
      for(var $i$$763$$ = 0;$i$$763$$ < $items$$32_spark$$.length;$i$$763$$++) {
        if($items$$32_spark$$[$i$$763$$] && "on" == $items$$32_spark$$[$i$$763$$].markerDisplayed) {
          $hasMarkers$$ = !0;
          break
        }
      }
    }
    if($hasMarkers$$ && 0 < $items$$32_spark$$.length || "none" == $markerGap$$1_options$$246$$.lineType) {
      $markerGap$$1_options$$246$$ = $markerGap$$1_options$$246$$.markerSize / 2, $width$$150$$ -= 2 * $markerGap$$1_options$$246$$, $height$$137$$ -= 2 * $markerGap$$1_options$$246$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($chart$$340$$, $markerGap$$1_options$$246$$, $markerGap$$1_options$$246$$)
    }
  }
  $chart$$340$$.$render$($chartOptions$$, $width$$150$$, $height$$137$$)
};
D.$DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($options$$247_spark$$1$$) {
  return($options$$247_spark$$1$$ = $options$$247_spark$$1$$.$getOptions$()) && $options$$247_spark$$1$$.items ? $options$$247_spark$$1$$.items : []
};
D.$DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($items$$33_spark$$2$$) {
  var $options$$248$$ = $items$$33_spark$$2$$.$getOptions$(), $chartOptions$$1$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]};
  $chartOptions$$1$$.translations = $options$$248$$.translations;
  var $bFloatingBar_zeroBaseline$$1$$ = "floatingBar" == $options$$248$$.type, $axisGap$$1_barSpacing_chartItems$$ = [], $highIndex$$ = -1, $lowIndex$$ = -1, $highValue$$2$$ = -window.Infinity, $lowValue$$2$$ = window.Infinity;
  $items$$33_spark$$2$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$33_spark$$2$$);
  for(var $i$$764$$ = 0;$i$$764$$ < $items$$33_spark$$2$$.length;$i$$764$$++) {
    var $item$$53_topValue$$ = $items$$33_spark$$2$$[$i$$764$$], $baseValue_chartItem$$ = {};
    $item$$53_topValue$$ instanceof window.Object ? ($bFloatingBar_zeroBaseline$$1$$ ? ($baseValue_chartItem$$.low = $item$$53_topValue$$.floatValue, $baseValue_chartItem$$.high = $item$$53_topValue$$.floatValue + $item$$53_topValue$$.value) : ($baseValue_chartItem$$.value = $item$$53_topValue$$.value, $baseValue_chartItem$$.low = $item$$53_topValue$$.low, $baseValue_chartItem$$.high = $item$$53_topValue$$.high), $item$$53_topValue$$.date && ($chartOptions$$1$$.timeAxisType = "enabled", $chartOptions$$1$$.groups.push($item$$53_topValue$$.date)), 
    "on" == $item$$53_topValue$$.markerDisplayed && ($baseValue_chartItem$$.markerDisplayed = "on"), $item$$53_topValue$$.color && ($baseValue_chartItem$$.color = $item$$53_topValue$$.color), $item$$53_topValue$$.borderColor && ($baseValue_chartItem$$.borderColor = $item$$53_topValue$$.borderColor), $item$$53_topValue$$.markerShape && ($baseValue_chartItem$$.markerShape = $item$$53_topValue$$.markerShape), $item$$53_topValue$$.markerSize && ($baseValue_chartItem$$.markerSize = $item$$53_topValue$$.markerSize)) : 
    $baseValue_chartItem$$.value = $item$$53_topValue$$;
    $axisGap$$1_barSpacing_chartItems$$.push($baseValue_chartItem$$);
    $item$$53_topValue$$ = null != $baseValue_chartItem$$.value ? $baseValue_chartItem$$.value : window.Math.max($baseValue_chartItem$$.low, $baseValue_chartItem$$.high);
    $highValue$$2$$ < $item$$53_topValue$$ && ($highValue$$2$$ = $item$$53_topValue$$, $highIndex$$ = $i$$764$$);
    $baseValue_chartItem$$ = null != $baseValue_chartItem$$.value ? $baseValue_chartItem$$.value : window.Math.min($baseValue_chartItem$$.low, $baseValue_chartItem$$.high);
    $lowValue$$2$$ > $baseValue_chartItem$$ && ($lowValue$$2$$ = $baseValue_chartItem$$, $lowIndex$$ = $i$$764$$)
  }
  $options$$248$$.highColor && 0 <= $highIndex$$ && ($axisGap$$1_barSpacing_chartItems$$[$highIndex$$].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$highIndex$$].color || ($axisGap$$1_barSpacing_chartItems$$[$highIndex$$].color = $options$$248$$.highColor));
  $options$$248$$.lowColor && 0 <= $lowIndex$$ && ($axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].color || ($axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].color = $options$$248$$.lowColor));
  $options$$248$$.firstColor && 0 < $axisGap$$1_barSpacing_chartItems$$.length && ($axisGap$$1_barSpacing_chartItems$$[0].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[0].color || ($axisGap$$1_barSpacing_chartItems$$[0].color = $options$$248$$.firstColor));
  $options$$248$$.lastColor && 0 < $axisGap$$1_barSpacing_chartItems$$.length && ($axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].color || ($axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].color = $options$$248$$.lastColor));
  $chartOptions$$1$$.series = [{items:$axisGap$$1_barSpacing_chartItems$$, areaColor:$options$$248$$.areaColor}];
  $options$$248$$.referenceObjects && ($chartOptions$$1$$.yAxis.referenceObjects = $options$$248$$.referenceObjects);
  $chartOptions$$1$$.__spark = !0;
  $axisGap$$1_barSpacing_chartItems$$ = $options$$248$$.barSpacing;
  "auto" == $axisGap$$1_barSpacing_chartItems$$ && ($axisGap$$1_barSpacing_chartItems$$ = 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? "subpixel" : "pixel");
  $chartOptions$$1$$.__sparkBarSpacing = $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$1$$.type = $bFloatingBar_zeroBaseline$$1$$ ? "bar" : $options$$248$$.type;
  $chartOptions$$1$$.animationOnDataChange = $options$$248$$.animationOnDataChange;
  $chartOptions$$1$$.animationOnDisplay = $options$$248$$.animationOnDisplay;
  $chartOptions$$1$$.emptyText = $options$$248$$.emptyText;
  $chartOptions$$1$$.styleDefaults.colors = [$options$$248$$.color];
  $chartOptions$$1$$.styleDefaults.animationDuration = $options$$248$$.animationDuration;
  $chartOptions$$1$$.styleDefaults.animationIndicators = "none";
  $chartOptions$$1$$.styleDefaults.lineWidth = $options$$248$$.lineWidth;
  $chartOptions$$1$$.styleDefaults.lineStyle = $options$$248$$.lineStyle;
  $chartOptions$$1$$.styleDefaults.lineType = $options$$248$$.lineType;
  $chartOptions$$1$$.styleDefaults.markerSize = $options$$248$$.markerSize;
  $chartOptions$$1$$.styleDefaults.markerShape = $options$$248$$.markerShape;
  $chartOptions$$1$$.styleDefaults.barGapRatio = $options$$248$$.barGapRatio;
  $chartOptions$$1$$.styleDefaults.dataItemGaps = "0%";
  $chartOptions$$1$$.xAxis.rendered = "off";
  $chartOptions$$1$$.yAxis.rendered = "off";
  $bFloatingBar_zeroBaseline$$1$$ = "zero" == $options$$248$$.baselineScaling;
  $axisGap$$1_barSpacing_chartItems$$ = $highValue$$2$$ != $lowValue$$2$$ ? 0.1 * ($highValue$$2$$ - $lowValue$$2$$) : 0.1 * window.Math.abs($highValue$$2$$);
  $chartOptions$$1$$.yAxis.min = $bFloatingBar_zeroBaseline$$1$$ && 0 <= $lowValue$$2$$ ? 0 : $lowValue$$2$$ - $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$1$$.yAxis.max = $bFloatingBar_zeroBaseline$$1$$ && 0 >= $highValue$$2$$ ? 0 : $highValue$$2$$ + $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$1$$.styleDefaults.seriesEffect = "none" == $options$$248$$.visualEffects || !("area" == $options$$248$$.type || "lineWithArea" == $options$$248$$.type) ? "color" : "gradient";
  $chartOptions$$1$$.layout = {gapWidthRatio:0, gapHeightRatio:0};
  $chartOptions$$1$$.legend = {rendered:"off"};
  $chartOptions$$1$$._statusMessageStyle = $options$$248$$._statusMessageStyle;
  return $chartOptions$$1$$
};

  return D;
});