/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$589$$, $callback$$156$$, $callbackObj$$104$$) {
  this.Init($context$$589$$, $callback$$156$$, $callbackObj$$104$$)
};
(0,D.$goog$exportPath_$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$590$$, $callback$$157$$, $callbackObj$$105$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$590$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$590$$, $callback$$157$$, $callbackObj$$105$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$590$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$591$$, $callback$$158$$, $callbackObj$$106$$) {
  return new D.$DvtAmxThematicMap$$($context$$591$$, $callback$$158$$, $callbackObj$$106$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$268$$, $availSpace$$127_width$$158$$, $height$$142$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$268$$);
  this.$_width$ = $availSpace$$127_width$$158$$;
  this.$_height$ = $height$$142$$;
  $availSpace$$127_width$$158$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$127_width$$158$$, $height$$142$$);
  this.$_renderLegend$(this, $availSpace$$127_width$$158$$);
  this.$_tmap$.$render$($options$$268$$, $availSpace$$127_width$$158$$.$w$, $availSpace$$127_width$$158$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$190$$, $availSpace$$128$$) {
  this.$_legend$ && ($container$$190$$.removeChild(this.$_legend$), this.$_legend$ = null);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$128$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$128$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap$$29_options$$269$$ = this.$Options$, $position$$60_rendered$$6$$ = $gap$$29_options$$269$$.legend.rendered, $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ = $gap$$29_options$$269$$.legend.scrolling, 
  $legendOptions$$10$$ = D.$DvtJSONUtils$$.$clone$($gap$$29_options$$269$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$10$$);
  if($position$$60_rendered$$6$$ && !($legendOptions$$10$$.$sections$ && 0 == $legendOptions$$10$$.$sections$.length)) {
    $position$$60_rendered$$6$$ = $gap$$29_options$$269$$.legend.position;
    delete $legendOptions$$10$$.position;
    $legendOptions$$10$$.layout.gapRatio = (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this);
    $legendOptions$$10$$.hideAndShowBehavior = "none";
    $legendOptions$$10$$.rolloverBehavior = "none";
    $legendOptions$$10$$.scrolling = $gap$$29_options$$269$$.legend.scrolling;
    var $legend$$31$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$getCtx$());
    $container$$190$$.$addChild$($legend$$31$$);
    "auto" == $position$$60_rendered$$6$$ && "asNeeded" !== $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ ? $position$$60_rendered$$6$$ = "bottom" : "auto" == $position$$60_rendered$$6$$ && "asNeeded" == $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ && ($position$$60_rendered$$6$$ = "end");
    $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$190$$.$getCtx$());
    "start" == $position$$60_rendered$$6$$ ? $position$$60_rendered$$6$$ = $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ ? "right" : "left" : "end" == $position$$60_rendered$$6$$ && ($position$$60_rendered$$6$$ = $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ ? "left" : "right");
    $legendOptions$$10$$.orientation = "left" == $position$$60_rendered$$6$$ || "right" == $position$$60_rendered$$6$$ ? "vertical" : "horizontal";
    $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ = "top" == $position$$60_rendered$$6$$ || "bottom" == $position$$60_rendered$$6$$;
    $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ = $legend$$31$$.$getPreferredSize$($legendOptions$$10$$, $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ ? $availLegendSpace$$.$w$ : $gap$$29_options$$269$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$ ? $gap$$29_options$$269$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$w$ && 0 < $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$h$) {
      switch($legend$$31$$.$render$($legendOptions$$10$$, $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$h$), this.$_legend$ = $legend$$31$$, $gap$$29_options$$269$$ = window.Math.ceil($gap$$29_options$$269$$.layout.legendGap * (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this)), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position$$60_rendered$$6$$, $legend$$31$$, $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$h$, 
      $gap$$29_options$$269$$), $position$$60_rendered$$6$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$128$$.$h$ -= $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$128$$.$w$ -= $actualSize$$2_isHoriz$$17_isRTL$$40_scrolling$$2$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getGapRatio$$ = function $$JSCompiler_StaticMethods_getGapRatio$$$($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$) {
  if(null !== $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio && !(0,window.isNaN)($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio)) {
    return $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio
  }
  var $wRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_width$ / 400, 1);
  $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_height$ / 300, 1);
  return window.Math.min($wRatio$$, $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$)
};
D.$DvtAmxThematicMap$$.prototype.$_addLegendData$ = function $$DvtAmxThematicMap$$$$$_addLegendData$$($data$$97$$, $legendOptions$$11$$) {
  $legendOptions$$11$$.title = $data$$97$$.legend ? $data$$97$$.legend.title : null;
  $legendOptions$$11$$.sections = [];
  if($data$$97$$ && $data$$97$$.legend && $data$$97$$.legend.sections) {
    for(var $i$$794$$ = 0;$i$$794$$ < $data$$97$$.legend.sections.length;$i$$794$$++) {
      var $dataSection$$1$$ = $data$$97$$.legend.sections[$i$$794$$];
      $dataSection$$1$$ && $legendOptions$$11$$.sections.push({title:$dataSection$$1$$.title, items:$dataSection$$1$$.items, sections:$dataSection$$1$$.sections})
    }
  }
  return $legendOptions$$11$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$602$$, $callback$$159$$, $callbackObj$$107$$) {
  this.Init($context$$602$$, $callback$$159$$, $callbackObj$$107$$)
};
(0,D.$goog$exportPath_$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$603$$, $callback$$160$$, $callbackObj$$108$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$603$$, $callback$$160$$, $callbackObj$$108$$);
  (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendData$ = this.$_legendPanel$ = this.$_legend$ = null;
  this.$_bBaseMapChanged$ = !1;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = !1;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_labelLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_panning$ = this.$_zooming$ = this.$_initialZooming$ = !1;
  this.$_maxZoomFactor$ = 6;
  this.$_isMarkerZoomBehaviorFixed$ = !0;
  this.$_selectedAreas$ = {};
  this.$_bListenersRemoved$ = !1;
  this.$_showPopupBehaviors$ = null;
  this.$_displayedControls$ = 16777215;
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$;
  this.$_eventHandler$.$associate$(this, this);
  this.$_bRendered$ = !1
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$604$$, $callback$$161$$, $callbackObj$$109$$) {
  return new D.$DvtThematicMap$$($context$$604$$, $callback$$161$$, $callbackObj$$109$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$272$$) {
  D.$DvtThematicMap$$.$superclass$.$SetOptions$.call(this, $options$$272$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$)
};
D.$DvtThematicMap$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$21$$) {
  for(var $i$$817$$ = 0;$i$$817$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$817$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$817$$].$LayerName$ == $layerName$$21$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$817$$]
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$20$$) {
  this.$_animationDuration$ = (0,window.parseFloat)($attr$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$22_featuresOff$$1$$) {
  $attr$$22_featuresOff$$1$$ = (0,window.parseInt)($attr$$22_featuresOff$$1$$);
  var $controls$$5$$ = this.$_displayedControls$;
  if(1 == $attr$$22_featuresOff$$1$$ || 3 == $attr$$22_featuresOff$$1$$ || 5 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -17, this.$_panning$ = !1
  }
  if(2 == $attr$$22_featuresOff$$1$$ || 3 == $attr$$22_featuresOff$$1$$ || 6 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -4098, this.$_zooming$ = !1
  }
  if(4 == $attr$$22_featuresOff$$1$$ || 5 == $attr$$22_featuresOff$$1$$ || 6 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -257
  }
  this.$_displayedControls$ = $controls$$5$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$27$$) {
  this.$_drillMode$ = $attr$$27$$;
  this.$_eventHandler$.$setDrillMode$($attr$$27$$)
};
D.$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  D.$DvtThematicMap$$.$superclass$.$PreRender$.call(this);
  !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendData$ = this.$_legend$ = this.$_legendPanel$ = null, this.$_displayedControls$ = 16777215, this.$_panning$ = this.$_zooming$ = !0, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = new D.$DvtContainer$$(this.$getCtx$()), 
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_labelLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_showPopupBehaviors$ = null, this.$_eventHandler$.$removeListeners$(this), (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this), this.$_bListenersRemoved$ = !1, this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$associate$(this, this))
};
D.$JSCompiler_StaticMethods__createHandlers$$ = function $$JSCompiler_StaticMethods__createHandlers$$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new D.$DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$getCtx$(), $JSCompiler_StaticMethods__createHandlers$self$$.dispatchEvent, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = null : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new D.$DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)($JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$, $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleLegendResize$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendResize$$($event$$751_x$$277$$) {
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) || ($event$$751_x$$277$$ = this.getWidth() - 5 - $event$$751_x$$277$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$751_x$$277$$))
};
D.$JSCompiler_prototypeAlias$$.$_renderLegend$ = function $$JSCompiler_prototypeAlias$$$$_renderLegend$$() {
  if(this.$_legendData$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ = "true" == this.$_legendData$.disclosed, $isFixed$$2$$ = "fixed" == this.$_legendData$.display || (0,D.$DvtAgent$isEnvironmentBatik$$)();
    if(!$isFixed$$2$$ || $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$) {
      var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$ = this.$_legendData$.maxWidth, $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$.indexOf("%"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$ = 
      -1 != $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$ ? (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$.substring(0, $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$)) / 100 * this.getWidth() : (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$), 
      $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$ = this.getHeight() - 10;
      "alta" == this.$_skinName$ ? (this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$getCtx$(), null, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, !1, this), this.$_legendPanel$.$setMaxWidth$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$), this.$_legendPanel$.$setMaxHeight$($collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$), this.$_legendPanel$.$_isFixed$ = 
      $isFixed$$2$$, (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? (this.$_legendPanel$.$_discloseDirection$ = "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.getWidth())) : (this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$getCtx$(), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$, $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$, 
      "col_northeast", (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$getSubcomponentStyles$(), $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$, $isFixed$$2$$), this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, !1, this), this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, !1, this), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$ = 
      this.$_legendPanel$, $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$ = this.$_legendData$.collapseTooltip, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$.$_expandTooltip$ = this.$_legendData$.expandTooltip, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$.$_collapseTooltip$ = $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$);
      $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$ = this.$_legendData$;
      this.$_legend$ = (0,D.$DvtLegend$newInstance$$)(this.$getCtx$(), this.$processLegendEvent$, this);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$ = this.$_legend$.$getPreferredSize$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$());
      this.$_legend$.$render$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$, $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$.$w$, $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$.$h$);
      var $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, this.$_legend$.$getContentDimensions$().$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$ = new D.$DvtImage$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$ = new D.$DvtImage$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $downState$$20$$ = new D.$DvtImage$$(this.$getCtx$(), 
        (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$5$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND");
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$, $collapse$$inline_8364_maxHeight$$21_overState$$20_percentIndex$$1_preferredSize$$8$$, $downState$$20$$, $tip$$5$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ && this.$_legendPanel$.$setDisclosed$(!0, !0)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$ = this.$_legendPanel$, $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_contentContainer$.$addChild$($dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$), $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$HandleResize$, !1, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$), $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_contentContainer$.$getDimensions$(), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_width$ = window.Math.min($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_maxWidth$, 
        $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$.$w$ + 10), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_height$ = window.Math.min($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_maxHeight$, $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$.$h$ + 10), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_background$ ? 
        ($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_width$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_height$)), $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonFrame$ && $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ && $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_width$)) : 
        ($dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_width$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_height$)), 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_styleMap$.borderAlpha, $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_bgAlpha$), 
        $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_borderColor$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8362_alpha$$inline_11309_legendData$$7_maxWidth$$33_upState$$23$$), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_background$ = $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_background$, 0), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonFrame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$getCtx$(), 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_styleMap$, !1), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_styleMap$.borderAlpha), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonFrame$), $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseExpandButton$ = $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$getCtx$(), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_styleMap$, $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$getCtx$(), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_styleMap$, $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseExpandButton$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ ? $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_width$ : -10), (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$TOUCHSTART$$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$OnButtonClick$, 
        !1, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$) : ($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$OnButtonClick$, !1, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$OnButtonHoverOver$, !1, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$OnButtonHoverOut$, !1, $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$_collapse$ && 
        (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$, !1), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? 5 : this.getWidth() - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$w$ - 
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, $dims$$inline_8368_disclosed$$4_object$$inline_8367_rect$$inline_11308_west$$inline_11312_west$$inline_8369_x$$278$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$w$ += 5
      }
      if(this.$_isFixedLegend$ = $isFixed$$2$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_8366_legendPanelDim$$.$w$, this.$_pzc$.$setSize$(this.getWidth() - this.$_legendWidth$, this.getHeight(), !0)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  D.$DvtThematicMap$$.$superclass$.$Render$.call(this);
  var $pzcContainer$$ = new D.$DvtContainer$$(this.$getCtx$()), $bounds$$155_cpContainer$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_pzc$ = this.$_panZoomCanvas$;
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($bounds$$155_cpContainer$$);
  this.$_render$($pzcContainer$$, $bounds$$155_cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
    $bounds$$155_cpContainer$$ = new D.$DvtRectangle$$(0, 0, this.getWidth(), this.getHeight());
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), this.$_animationOnDisplay$, this.$_pzc$, $bounds$$155_cpContainer$$, this.$_animationDuration$))
    }else {
      var $anim$$43$$ = null;
      this.$_bBaseMapChanged$ && !this.$_isResize$ ? $anim$$43$$ = this.$_animationOnMapChange$ : this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$43$$ = this.$_topLayer$.$getAnimation$());
      D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$43$$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $anim$$43$$, this.$_oldPzc$, this.$_pzc$, $bounds$$155_cpContainer$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$)
    }
    this.$_animation$ ? (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_bListenersRemoved$ = !0, this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play()) : this.$OnAnimationEnd$();
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this]);
    this.$_bRendered$ = !0
  }
};
D.$JSCompiler_prototypeAlias$$.$_render$ = function $$JSCompiler_prototypeAlias$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = !1;
  for(var $i$$818$$ = 0;$i$$818$$ < this.$_layers$.length;$i$$818$$++) {
    var $layer$$11$$ = this.$_layers$[$i$$818$$];
    if(!this.$_topLayerRendered$ && $layer$$11$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$11$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$11$$.$render$($isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$), !this.$_topLayerRendered$ && $layer$$11$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = !0, this.$_topLayer$ = $layer$$11$$)
    }
  }
  this.$_topLayer$ && ($isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$ = this.$_topLayer$.$_isolatedArea$, this.$_isolatedArea$ != $isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$ && (this.$_isolatedArea$ = $isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$, this.$_initialZoom$ = this.$_initialCenterY$ = this.$_initialCenterX$ = null), this.$_keyboardHandler$ && ($isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$ = 
  (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 0 == $isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$.length && ($isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), ($isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$ = $isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, 
  $isolatedArea$$1_navigable$$inline_8381_navigables$$13_pzcMatrix$$18$$)), this.$_pzc$.$setMinZoom$(null), this.$_pzc$.$setMaxZoom$(null), this.$_pzc$.$_bZoomingEnabled$ = !0, this.$_pzc$.$_bPanningEnabled$ = !0, !this.$_bBaseMapChanged$ && !this.$_isResize$ && null != this.$_initialZoom$ ? ((0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_pzc$, this.$_initialZoom$), (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_pzc$, this.$_initialCenterX$, this.$_initialCenterY$)) : this.$_pzc$.$zoomToFit$(null, 
  this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), (0,D.$JSCompiler_StaticMethods__updateZoomLimits$$)(this), this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_prototypeAlias$$.$updateLayer$ = function $$JSCompiler_prototypeAlias$$$$updateLayer$$($dataLayerOptions_navigable$$inline_8396_navigables$$14$$, $parentLayer$$2$$, $isAreaDataLayer$$) {
  this.$_bRendered$ = !1;
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(new D.$DvtThematicMapJsonParser$$(this), [$dataLayerOptions_navigable$$inline_8396_navigables$$14$$], (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, $parentLayer$$2$$), this.$_topLayer$.$LayerName$, $isAreaDataLayer$$);
  this.$_renderLegend$();
  this.$_bRendered$ = !0;
  this.$_keyboardHandler$ && ($dataLayerOptions_navigable$$inline_8396_navigables$$14$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 0 == $dataLayerOptions_navigable$$inline_8396_navigables$$14$$.length && ($dataLayerOptions_navigable$$inline_8396_navigables$$14$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), ($dataLayerOptions_navigable$$inline_8396_navigables$$14$$ = $dataLayerOptions_navigable$$inline_8396_navigables$$14$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, 
  $dataLayerOptions_navigable$$inline_8396_navigables$$14$$));
  (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this]);
  (0,D.$JSCompiler_StaticMethods__updateZoomLimits$$)(this)
};
D.$DvtThematicMap$$.prototype.updateLayer = D.$DvtThematicMap$$.prototype.$updateLayer$;
D.$JSCompiler_StaticMethods__updateZoomLimits$$ = function $$JSCompiler_StaticMethods__updateZoomLimits$$$($JSCompiler_StaticMethods__updateZoomLimits$self$$) {
  var $fittedZoom_zoomPadding$$inline_8403$$;
  $fittedZoom_zoomPadding$$inline_8403$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$_zoomToFitPadding$;
  var $mapDim$$inline_8404$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_topLayer$.$getLayerDim$(), $pzcDim$$inline_8405$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$getSize$();
  $fittedZoom_zoomPadding$$inline_8403$$ = window.Math.min(($pzcDim$$inline_8405$$.$w$ - 2 * $fittedZoom_zoomPadding$$inline_8403$$) / $mapDim$$inline_8404$$.$w$, ($pzcDim$$inline_8405$$.$h$ - 2 * $fittedZoom_zoomPadding$$inline_8403$$) / $mapDim$$inline_8404$$.$h$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMinZoom$($fittedZoom_zoomPadding$$inline_8403$$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMaxZoom$($fittedZoom_zoomPadding$$inline_8403$$ * ($JSCompiler_StaticMethods__updateZoomLimits$self$$.$_zooming$ ? $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_maxZoomFactor$ : 1))
};
D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$ = function $$JSCompiler_StaticMethods_OnUpdateLayerEnd$$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$_isolatedArea$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$(null, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$());
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$)
};
D.$DvtThematicMap$$.prototype.$setRolloverBehavior$ = (0,D.$JSCompiler_set$$)("$_rolloverBehavior$");
D.$JSCompiler_StaticMethods__transformContainers$$ = function $$JSCompiler_StaticMethods__transformContainers$$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$19$$) {
  var $mat$$50$$ = new D.$DvtMatrix$$;
  $mat$$50$$.translate($pzcMatrix$$19$$.$_tx$, $pzcMatrix$$19$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$50$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$50$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$752$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, "isLegendDisclosed", "show" == $event$$752$$.$getSubType$());
  this.dispatchEvent($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$132_event$$753$$, $bRecenterObjs_transMat$$) {
  if($animator$$132_event$$753$$ = $animator$$132_event$$753$$.$_animator$) {
    var $contentPane$$2$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$51$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$132_event$$753$$, $contentPane$$2$$, $contentPane$$2$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$2$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132_event$$753$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$51$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$51$$.$_tx$, $mat$$51$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132_event$$753$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132_event$$753$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$) {
  switch($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$ = $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$_newZoom$;
        $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$ = this.$_pzc$.$getSize$();
        $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$ = new D.$DvtRectangle$$($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$, $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$, $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$.$w$ - 2 * $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$, $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$.$h$ - 2 * 
        $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$);
        var $legendAdjust$$inline_8441_mapDim$$inline_8436$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_8442_zoomedMapX$$inline_8437$$ = $legendAdjust$$inline_8441_mapDim$$inline_8436$$.x * $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$, $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$ = $legendAdjust$$inline_8441_mapDim$$inline_8436$$.y * $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$, $zoomedMapW$$inline_8439$$ = $legendAdjust$$inline_8441_mapDim$$inline_8436$$.$w$ * 
        $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$, $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$ = $legendAdjust$$inline_8441_mapDim$$inline_8436$$.$h$ * $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$, $legendAdjust$$inline_8441_mapDim$$inline_8436$$ = 0;
        $zoomedMapW$$inline_8439$$ > $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$w$ ? (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($legendAdjust$$inline_8441_mapDim$$inline_8436$$ = this.$_legendWidth$), this.$_pzc$.$_minPanX$ = $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.x + $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$w$ + $legendAdjust$$inline_8441_mapDim$$inline_8436$$ - 
        ($minMaxX$$inline_8442_zoomedMapX$$inline_8437$$ + $zoomedMapW$$inline_8439$$), this.$_pzc$.$_maxPanX$ = $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.x - $minMaxX$$inline_8442_zoomedMapX$$inline_8437$$ + $legendAdjust$$inline_8441_mapDim$$inline_8436$$) : (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($legendAdjust$$inline_8441_mapDim$$inline_8436$$ = 2 * this.$_legendWidth$), $minMaxX$$inline_8442_zoomedMapX$$inline_8437$$ = 
        ($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.x + $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$w$ + $legendAdjust$$inline_8441_mapDim$$inline_8436$$) / 2 - ($minMaxX$$inline_8442_zoomedMapX$$inline_8437$$ + $zoomedMapW$$inline_8439$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_8442_zoomedMapX$$inline_8437$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_8442_zoomedMapX$$inline_8437$$);
        $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$ > $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.y + $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$h$ - ($pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$ + $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$), this.$_pzc$.$_maxPanY$ = $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.y - 
        $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$) : ($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$ = ($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.y + $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$h$) / 2 - ($pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$ + $i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$ / 2), this.$_pzc$.$_minPanY$ = $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$, 
        this.$_pzc$.$_maxPanY$ = $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$, !0);
      break;
    case "zoomed":
      if(null != $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$_newZoom$) {
        $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$, "panX", $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$, "panY", $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$.$_ty$);
        $event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$.$_animator$ = null;
        this.dispatchEvent($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$);
        for($i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$ = 0;$i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$ < this.$_layers$.length;$i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$++) {
          this.$_layers$[$i$$819_zoom$$inline_8432_zoomedMapH$$inline_8440$$].$HandleZoomEvent$($event$$754_minMaxY$$inline_8443_padding$$inline_8433_viewportDim$$inline_8435$$, $pzcDim$$inline_8434_pzcMatrix$$20_zoomedMapY$$inline_8438$$)
        }
      }
      break;
    case "zoomAndCenter":
      (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this);
      break;
    case "zoomToFitEnd":
      this.dispatchEvent(new D.$DvtZoomEvent$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$755_i$$820_stroke$$114$$) {
  var $subType$$9$$ = $event$$755_i$$820_stroke$$114$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$9$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$755_i$$820_stroke$$114$$, !1)
  }else {
    if("panned" == $subType$$9$$ && null != $event$$755_i$$820_stroke$$114$$.$_newX$) {
      var $pzcMatrix$$21_styleMap$$93$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$755_i$$820_stroke$$114$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$755_i$$820_stroke$$114$$, "panX", $pzcMatrix$$21_styleMap$$93$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$755_i$$820_stroke$$114$$, "panY", $pzcMatrix$$21_styleMap$$93$$.$_ty$);
      $event$$755_i$$820_stroke$$114$$.$_animator$ = null;
      this.dispatchEvent($event$$755_i$$820_stroke$$114$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$21_styleMap$$93$$);
      for($event$$755_i$$820_stroke$$114$$ = 0;$event$$755_i$$820_stroke$$114$$ < this.$_layers$.length;$event$$755_i$$820_stroke$$114$$++) {
        this.$_layers$[$event$$755_i$$820_stroke$$114$$].$HandlePanEvent$($pzcMatrix$$21_styleMap$$93$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$9$$ ? this.$_legendPanel$.$setMouseEnabled$(!1) : "dragPanEnd" === $subType$$9$$ && this.$_legendPanel$.$setMouseEnabled$(!0) : ($pzcMatrix$$21_styleMap$$93$$ = this.$getSubcomponentStyles$(), $event$$755_i$$820_stroke$$114$$ = this.$_legendPanel$.$_background$.$getStroke$().$clone$(), "dragPanBegin" === $subType$$9$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.backgroundDragAlpha), $event$$755_i$$820_stroke$$114$$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderDragAlpha), 
  this.$_legendPanel$.$_background$.$setStroke$($event$$755_i$$820_stroke$$114$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(!1)) : "dragPanEnd" === $subType$$9$$ && (this.$_legend$.$setAlpha$(1), $event$$755_i$$820_stroke$$114$$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$755_i$$820_stroke$$114$$), this.$_legendPanel$.$_buttonFrame$ && 
  this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(!0))))
};
D.$DvtThematicMap$$.prototype.$GetControlPanelBehavior$ = function $$DvtThematicMap$$$$$GetControlPanelBehavior$$() {
  return"none" == this.$_drillMode$ && !this.$_zooming$ && (!this.$_panning$ || "alta" == this.$_skinName$) ? "hidden" : D.$DvtThematicMap$$.$superclass$.$GetControlPanelBehavior$.call(this)
};
D.$DvtThematicMap$$.prototype.$GetControlPanel$ = function $$DvtThematicMap$$$$$GetControlPanel$$() {
  var $cpBehavior$$3$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$3$$ ? new D.$DvtThematicMapControlPanel$$(this.$getCtx$(), this, "initCollapsed" == $cpBehavior$$3$$ ? 1 : 2) : null
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = !0;
  for(var $i$$821$$ = 0;$i$$821$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$821$$++) {
    var $layerName$$23$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$821$$].$LayerName$;
    $layerName$$23$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$23$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$23$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$23$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$23$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = !1
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_8446_removeObjs$$ = [], $addObjs$$ = [], $i$$822_j$$113$$ = this.$_layers$.length - 1;-1 < $i$$822_j$$113$$;$i$$822_j$$113$$--) {
    this.$_layers$[$i$$822_j$$113$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$822_j$$113$$].reset($addObjs$$) : this.$_layers$[$i$$822_j$$113$$].reset($animator$$inline_8446_removeObjs$$)
  }
  for($i$$822_j$$113$$ = 0;$i$$822_j$$113$$ < $animator$$inline_8446_removeObjs$$.length;$i$$822_j$$113$$++) {
    if($animator$$inline_8446_removeObjs$$[$i$$822_j$$113$$]) {
      var $parent$$88$$ = $animator$$inline_8446_removeObjs$$[$i$$822_j$$113$$].getParent();
      $parent$$88$$ && $parent$$88$$.removeChild($animator$$inline_8446_removeObjs$$[$i$$822_j$$113$$])
    }
  }
  for($i$$822_j$$113$$ = 0;$i$$822_j$$113$$ < $addObjs$$.length;$i$$822_j$$113$$++) {
    $addObjs$$[$i$$822_j$$113$$] && $addObjs$$[$i$$822_j$$113$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_8446_removeObjs$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_8446_removeObjs$$);
  $animator$$inline_8446_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, !1), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, !1))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$156$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$52$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$52$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$52$$.$_d$;
    $pointBounds$$.x /= $mat$$52$$.$_a$;
    $pointBounds$$.y /= $mat$$52$$.$_d$
  }
  $areaBounds_bounds$$156$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$156$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  var $maxZoom$$4$$;
  $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_bZoomingEnabled$ || ($maxZoom$$4$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$getMaxZoom$(), $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$ * $JSCompiler_StaticMethods__zoomData$self$$.$_maxZoomFactor$));
  var $animation$$6$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && ($animation$$6$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$getCtx$(), 0.3));
  0 < $areaBounds_bounds$$156$$.$w$ && 0 < $areaBounds_bounds$$156$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($animation$$6$$, $areaBounds_bounds$$156$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($animation$$6$$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $animation$$6$$ && $animation$$6$$.play();
  $maxZoom$$4$$ && $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$)
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$157$$) {
  var $animator$$133$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$133$$, $bounds$$157$$);
  $animator$$133$$.play()
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer$$8_selection$$37_selectionHandler$$13$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer$$8_selection$$37_selectionHandler$$13$$ && ($dataLayer$$8_selection$$37_selectionHandler$$13$$ = $dataLayer$$8_selection$$37_selectionHandler$$13$$.$_selectionHandler$)) {
      for(var $dataLayer$$8_selection$$37_selectionHandler$$13$$ = $dataLayer$$8_selection$$37_selectionHandler$$13$$.getSelection(), $i$$823$$ = 0;$i$$823$$ < $dataLayer$$8_selection$$37_selectionHandler$$13$$.length;$i$$823$$++) {
        $dataLayer$$8_selection$$37_selectionHandler$$13$$[$i$$823$$] = $dataLayer$$8_selection$$37_selectionHandler$$13$$[$i$$823$$].$getDisplayable$()
      }
      if(0 < $dataLayer$$8_selection$$37_selectionHandler$$13$$.length) {
        for(var $bounds$$158$$ = $dataLayer$$8_selection$$37_selectionHandler$$13$$[0].$getDimensions$(), $i$$823$$ = 1;$i$$823$$ < $dataLayer$$8_selection$$37_selectionHandler$$13$$.length;$i$$823$$++) {
          $bounds$$158$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$158$$, $dataLayer$$8_selection$$37_selectionHandler$$13$$[$i$$823$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$158$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getDrillParentLayer$$ = function $$JSCompiler_StaticMethods_getDrillParentLayer$$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$24$$) {
  var $parentLayerName$$ = D.$DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$24$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$)
};
D.$JSCompiler_StaticMethods_getDrillChildLayer$$ = function $$JSCompiler_StaticMethods_getDrillChildLayer$$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$25$$) {
  var $childLayerName$$1$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$25$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getNavigableAreas$$ = function $$JSCompiler_StaticMethods_getNavigableAreas$$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$5$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$824$$ = 0;$i$$824$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$824$$++) {
      var $dataLayers$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$824$$].$DataLayers$, $id$$293$$;
      for($id$$293$$ in $dataLayers$$) {
        $disclosed$$5$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$824$$].$LayerName$ ? $disclosed$$5$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$[$id$$293$$])) : $disclosed$$5$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$[$id$$293$$]))
      }
    }
  }
  return $disclosed$$5$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$20$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$825$$ = 0;$i$$825$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$825$$++) {
      var $dataLayers$$1$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$825$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$825$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$825$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$294$$ in $dataLayers$$1$$) {
          $navigable$$20$$ = $navigable$$20$$.concat($dataLayers$$1$$[$id$$294$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$20$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$22$$) {
  this.$_currentAnimMatrix$ = $matrix$$22$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$63$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$826_j$$114$$ = 0;$i$$826_j$$114$$ < $numLabelLayers_objs$$63$$.length;$i$$826_j$$114$$++) {
      $numLabelLayers_objs$$63$$[$i$$826_j$$114$$].$HandleZoomEvent$($matrix$$22$$)
    }
    $numLabelLayers_objs$$63$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$826_j$$114$$ = 0;$i$$826_j$$114$$ < $numLabelLayers_objs$$63$$;$i$$826_j$$114$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$826_j$$114$$), $numLabels$$1$$ = $labelLayer$$.$getNumChildren$(), $k$$10$$ = 0;$k$$10$$ < $numLabels$$1$$;$k$$10$$++) {
        var $label$$101$$ = $labelLayer$$.$getChildAt$($k$$10$$);
        $label$$101$$ instanceof D.$DvtMapLabel$$ && $label$$101$$.update($matrix$$22$$)
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$_getCenteredObjsMatrix$ = (0,D.$JSCompiler_get$$)("$_currentAnimMatrix$");
D.$DvtThematicMap$$.prototype.$drillDown$ = function $$DvtThematicMap$$$$$drillDown$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  var $childLayer$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$3$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$5$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    for(var $newSelectedAreas_selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $areasToDrill$$ = [], $i$$827$$ = 0;$i$$827$$ < $newSelectedAreas_selectedAreas$$1$$.length;$i$$827$$++) {
      var $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$;
      a: {
        $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$ = $parentLayer$$3$$.$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$;
        for(var $JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$ = 0;$JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$ < $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$.length;$JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$++) {
          if($JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$[$JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$].$getLocation$() === $newSelectedAreas_selectedAreas$$1$$[$i$$827$$]) {
            $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$ = $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$[$JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$];
            break a
          }
        }
        $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$ = null
      }
      $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$.$isDrilled$() || $areasToDrill$$.push($newSelectedAreas_selectedAreas$$1$$[$i$$827$$])
    }
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$3$$.reset($fadeInObjs$$5$$, $newSelectedAreas_selectedAreas$$1$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    $newSelectedAreas_selectedAreas$$1$$ = [];
    for($i$$827$$ = 0;$i$$827$$ < $areasToDrill$$.length;$i$$827$$++) {
      $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$ = $areasToDrill$$[$i$$827$$];
      $JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$3$$, $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$);
      $newSelectedAreas_selectedAreas$$1$$.push($JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$[0]);
      for(var $areaName$$inline_8454_j$$115$$ = 0;$areaName$$inline_8454_j$$115$$ < $JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.length;$areaName$$inline_8454_j$$115$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$[$areaName$$inline_8454_j$$115$$]] = $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$, $fadeInObjs$$5$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$ = $parentLayer$$3$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_8454_j$$115$$ = $JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$, $fadeOutObjs$$inline_8455$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$ = 0;$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$ < $JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_areaObjs$.length;$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_areaObjs$[$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$].$getLocation$() == $areaName$$inline_8454_j$$115$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_areaObjs$[$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$].$setDrilled$(!0);
            $JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_drilled$.push($areaName$$inline_8454_j$$115$$);
            $fadeOutObjs$$inline_8455$$.push($JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_areaObjs$[$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$].$getDisplayable$());
            if($i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$ = $JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_areaObjs$[$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$].$getLabel$()) {
              $fadeOutObjs$$inline_8455$$.push($i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$), ($i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$ = $i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$.$_leaderLine$) && $fadeOutObjs$$inline_8455$$.push($i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$)
            }
            break
          }
        }
        for($i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$ = 0;$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$ < $JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_dataObjs$.length;$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_dataObjs$[$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$].$getLocation$() == $areaName$$inline_8454_j$$115$$) {
            $fadeOutObjs$$inline_8455$$.push($JSCompiler_StaticMethods_drill$self$$inline_8453_childrenToDisclose_drillLayer_j$$inline_8451$$.$_dataObjs$[$i$$inline_8456_label$$inline_8457_leaderLine$$inline_8458$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($JSCompiler_inline_result$$178_dataObjs$$inline_8450_parentArea$$)
    }
    (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$5$$, !1);
    (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, $childLayer$$.$LayerName$, !0);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas_selectedAreas$$1$$
  }
};
D.$DvtThematicMap$$.prototype.$drillUp$ = function $$DvtThematicMap$$$$$drillUp$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$4$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$6$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$2$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$828$$ = 0;$i$$828$$ < $selectedAreas$$2$$.length;$i$$828$$++) {
    var $index$$241_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$2$$[$i$$828$$]];
    $newSelectedAreas$$1$$.push($index$$241_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$241_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$4$$, $index$$241_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_8460$$ = $parentLayer$$4$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$4$$.$LayerName$]), $areaName$$inline_8461$$ = $index$$241_parentArea$$1$$, $fadeInObjs$$inline_8462$$ = $fadeInObjs$$6$$, $i$$inline_8463_label$$inline_8466$$ = 0;$i$$inline_8463_label$$inline_8466$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_areaObjs$.length;$i$$inline_8463_label$$inline_8466$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_areaObjs$[$i$$inline_8463_label$$inline_8466$$].$getLocation$() == $areaName$$inline_8461$$) {
          var $displayable$$inline_8465_idx$$inline_8464$$ = D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_drilled$, $areaName$$inline_8461$$);
          $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_drilled$.splice($displayable$$inline_8465_idx$$inline_8464$$, 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_areaObjs$[$i$$inline_8463_label$$inline_8466$$].$setDrilled$(!1);
          $displayable$$inline_8465_idx$$inline_8464$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_areaObjs$[$i$$inline_8463_label$$inline_8466$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_dataAreaLayer$.$addChild$($displayable$$inline_8465_idx$$inline_8464$$);
          $fadeInObjs$$inline_8462$$.push($displayable$$inline_8465_idx$$inline_8464$$);
          if($i$$inline_8463_label$$inline_8466$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_areaObjs$[$i$$inline_8463_label$$inline_8466$$].$getLabel$()) {
            $i$$inline_8463_label$$inline_8466$$.update($JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_pzcMatrix$), $fadeInObjs$$inline_8462$$.push($i$$inline_8463_label$$inline_8466$$), $fadeInObjs$$inline_8462$$.push($i$$inline_8463_label$$inline_8466$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_8463_label$$inline_8466$$ = 0;$i$$inline_8463_label$$inline_8466$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_dataObjs$.length;$i$$inline_8463_label$$inline_8466$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_dataObjs$[$i$$inline_8463_label$$inline_8466$$].$getLocation$() == $areaName$$inline_8461$$) {
          $displayable$$inline_8465_idx$$inline_8464$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_dataObjs$[$i$$inline_8463_label$$inline_8466$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8460$$.$_dataPointLayer$.$addChild$($displayable$$inline_8465_idx$$inline_8464$$);
          $fadeInObjs$$inline_8462$$.push($displayable$$inline_8465_idx$$inline_8464$$);
          break
        }
      }
      $index$$241_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$241_parentArea$$1$$);
      -1 != $index$$241_parentArea$$1$$ && this.$_drilled$.splice($index$$241_parentArea$$1$$, 1)
    }
  }
  (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$6$$, !0);
  this.$_clickedLayerName$ = $parentLayer$$4$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$)
};
D.$JSCompiler_StaticMethods__stopAnimation$$ = function $$JSCompiler_StaticMethods__stopAnimation$$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop(!0), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = null)
};
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$3$$, $newObjs$$3$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if("zoomToFit" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$135$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), 0.3);
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($animator$$135$$ = null);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$135$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$135$$ && $animator$$135$$.play()
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  if((0,D.$DvtAgent$isEnvironmentBrowser$$)() && ("alphaFade" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ || "auto" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$)) {
    $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), "alphaFade", $oldObjs$$3$$, $newObjs$$3$$, null, 0.5)
  }
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.dispatchEvent = function $$DvtThematicMap$$$$dispatchEvent$($event$$756$$) {
  var $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$ = $event$$756$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$756$$.getSelection();
      for(var $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$9298$$ = this.$_clickedLayerName$, $selectedObjs$$inline_11339$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_11340$$ = [], $areaObjs$$inline_11341$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_11342$$ = 0;$i$$inline_11342$$ < $selectedObjs$$inline_11339$$.length;$i$$inline_11342$$++) {
        for(var $j$$inline_11343$$ = 0;$j$$inline_11343$$ < $areaObjs$$inline_11341$$.length;$j$$inline_11343$$++) {
          if($areaObjs$$inline_11341$$[$j$$inline_11343$$].getId() == $selectedObjs$$inline_11339$$[$i$$inline_11342$$]) {
            $selectedAreas$$inline_11340$$.push($areaObjs$$inline_11341$$[$j$$inline_11343$$].$getLocation$());
            break
          }
        }
      }
      $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$[$JSCompiler_temp_const$$9298$$] = $selectedAreas$$inline_11340$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$756$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, null), this.$_zoomToFitObject$ = null
    }
  }else {
    $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$756$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$ = $event$$756$$.$_drillType$, $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$756$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$ || "hidePopup" == $JSCompiler_temp_const$$9299_drillType$$inline_8473_type$$240$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$756$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtThematicMap$$.$superclass$.dispatchEvent.call(this, $event$$756$$)
};
D.$JSCompiler_StaticMethods__updateDrillButton$$ = function $$JSCompiler_StaticMethods__updateDrillButton$$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$27_parentLayer$$5$$, $isDrillDown$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$27_parentLayer$$5$$);
    $layerName$$27_parentLayer$$5$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$27_parentLayer$$5$$);
    $childLayer$$2$$ && !$isDrillDown$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, !0) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, !1);
    $layerName$$27_parentLayer$$5$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, !0) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, !1)
  }
};
D.$DvtThematicMap$$.prototype.$destroy$ = function $$DvtThematicMap$$$$$destroy$$() {
  D.$DvtThematicMap$$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = null)
};
D.$DvtThematicMap$$.prototype.destroy = D.$DvtThematicMap$$.prototype.$destroy$;
D.$DvtThematicMap$$.prototype.$OnAnimationEnd$ = function $$DvtThematicMap$$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = null);
  this.$_animation$ = null;
  this.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)(this);
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories);
  this.$_bListenersRemoved$ && (this.$_eventHandler$.$addListeners$(this), this.$_bListenersRemoved$ = !1)
};
D.$DvtThematicMap$$.prototype.$OnDrillAnimationEnd$ = function $$DvtThematicMap$$$$$OnDrillAnimationEnd$$() {
  (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)(this);
  this.$_animation$ = null;
  this.$_eventHandler$.$addListeners$(this)
};
D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$ = function $$JSCompiler_StaticMethods__cleanUpDrilledObjects$$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$829$$ = 0;$i$$829$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$829$$++) {
      var $obj$$355$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$829$$];
      if($obj$$355$$) {
        if($obj$$355$$ instanceof D.$DvtMapLabel$$) {
          $obj$$355$$.reset()
        }else {
          if($obj$$355$$.$isDrilled$ && $obj$$355$$.$isDrilled$()) {
            $obj$$355$$.$setAlpha$(0)
          }else {
            var $parent$$89$$ = $obj$$355$$.getParent();
            $parent$$89$$ && $parent$$89$$.removeChild($obj$$355$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$DvtThematicMap$$.prototype.$_fireRolloverEvent$ = function $$DvtThematicMap$$$$$_fireRolloverEvent$$($type$$241$$, $category$$22$$) {
  var $rolloverEvent$$7$$ = new D.$DvtCategoryRolloverEvent$$($type$$241$$, $category$$22$$), $objects$$5$$ = [], $layerId_legendItems$$;
  for($layerId_legendItems$$ in this.$_areas$) {
    for(var $key$$126_wrapper$$ in this.$_areas$[$layerId_legendItems$$]) {
      $objects$$5$$.push(this.$_areas$[$layerId_legendItems$$][$key$$126_wrapper$$])
    }
  }
  for($layerId_legendItems$$ in this.$_markers$) {
    for($key$$126_wrapper$$ in this.$_markers$[$layerId_legendItems$$]) {
      $objects$$5$$.push(this.$_markers$[$layerId_legendItems$$][$key$$126_wrapper$$])
    }
  }
  $layerId_legendItems$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$ in $layerId_legendItems$$) {
    $key$$126_wrapper$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$[$legendCategory$$].$getContentShape$(), $legendCategory$$), $objects$$5$$.push($key$$126_wrapper$$)
  }
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($rolloverEvent$$7$$.$_category$, $objects$$5$$, !0)
};
D.$DvtThematicMap$$.prototype.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtThematicMap$$.prototype.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$DvtThematicMap$$.prototype.$getAutomation$ = function $$DvtThematicMap$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
D.$DvtThematicMap$$.prototype.getAutomation = D.$DvtThematicMap$$.prototype.$getAutomation$;
D.$DvtThematicMap$$.prototype.$GetComponentDescription$ = function $$DvtThematicMap$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "THEMATIC_MAP")
};
D.$DvtThematicMap$$.prototype.$processLegendEvent$ = function $$DvtThematicMap$$$$$processLegendEvent$$($event$$759$$) {
  "dvtResizeEvent" == $event$$759$$.$getType$() && this.$_legend$ && this.$_legend$.$FireListener$($event$$759$$)
};
D.$DvtThematicMap$$.prototype.$highlight$ = function $$DvtThematicMap$$$$$highlight$$($categories$$29$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$29$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$29$$, (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this).concat((0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), "any" == this.$Options$.highlightMatch)
};
D.$DvtThematicMap$$.prototype.highlight = D.$DvtThematicMap$$.prototype.$highlight$;
D.$DvtThematicMap$$.prototype.$processDefaultHoverEffect$ = function $$DvtThematicMap$$$$$processDefaultHoverEffect$$($id$$296$$, $hovered$$3$$) {
  var $dataItem$$44$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$296$$);
  $dataItem$$44$$ && $dataItem$$44$$.$processDefaultHoverEffect$($hovered$$3$$)
};
D.$DvtThematicMap$$.prototype.processDefaultHoverEffect = D.$DvtThematicMap$$.prototype.$processDefaultHoverEffect$;
D.$DvtThematicMap$$.prototype.$processDefaultSelectionEffect$ = function $$DvtThematicMap$$$$$processDefaultSelectionEffect$$($id$$297$$, $selected$$45$$) {
  var $dataItem$$45$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$297$$);
  $dataItem$$45$$ && $dataItem$$45$$.$processDefaultSelectionEffect$($selected$$45$$)
};
D.$DvtThematicMap$$.prototype.processDefaultSelectionEffect = D.$DvtThematicMap$$.prototype.$processDefaultSelectionEffect$;
D.$DvtThematicMap$$.prototype.$processDefaultFocusEffect$ = function $$DvtThematicMap$$$$$processDefaultFocusEffect$$($id$$298$$, $focused$$4$$) {
  var $dataItem$$46$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$298$$);
  $dataItem$$46$$ && $dataItem$$46$$.$processDefaultFocusEffect$($focused$$4$$)
};
D.$DvtThematicMap$$.prototype.processDefaultFocusEffect = D.$DvtThematicMap$$.prototype.$processDefaultFocusEffect$;
D.$JSCompiler_StaticMethods__getDataItemById$$ = function $$JSCompiler_StaticMethods__getDataItemById$$$($JSCompiler_StaticMethods__getDataItemById$self$$, $id$$299$$) {
  for(var $i$$831$$ = 0;$i$$831$$ < $JSCompiler_StaticMethods__getDataItemById$self$$.$_layers$.length;$i$$831$$++) {
    var $dataLayers$$3$$ = $JSCompiler_StaticMethods__getDataItemById$self$$.$_layers$[$i$$831$$].$DataLayers$, $dlId$$;
    for($dlId$$ in $dataLayers$$3$$) {
      for(var $dataObjs$$2$$ = $dataLayers$$3$$[$dlId$$].$_dataObjs$, $j$$116$$ = 0;$j$$116$$ < $dataObjs$$2$$.length;$j$$116$$++) {
        if($dataObjs$$2$$[$j$$116$$].getId() === $id$$299$$) {
          return $dataObjs$$2$$[$j$$116$$]
        }
      }
    }
  }
  return null
};
D.$DvtThematicMapDefaults$$ = function $$DvtThematicMapDefaults$$$() {
  this.Init({fusion:D.$DvtThematicMapDefaults$DEFAULT$$, alta:D.$DvtThematicMapDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtThematicMapDefaults");
D.$DvtThematicMapDefaults$DEFAULT$$ = {animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"none", highlightMatch:"all", hoverBehavior:"none", initialZooming:"none", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", touchResponse:"auto", visualEffects:"none", zooming:"none", styleDefaults:{skin:"alta", areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", hoverBehaviorDelay:200, dataAreaDefaults:{borderColor:"#FFFFFF", 
drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:0.5, color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:!0, layout:{gapRatio:1}}, layout:{gapRatio:null, 
legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selectionMode:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$842$$ = 0;$i$$842$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$842$$++) {
    var $dataLayers$$7$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$842$$].$DataLayers$, $id$$302$$;
    for($id$$302$$ in $dataLayers$$7$$) {
      var $dragSource$$3$$ = $dataLayers$$7$$[$id$$302$$].$_dragSource$;
      if($dragSource$$3$$ && $dragSource$$3$$.$_dragCandidate$) {
        return $dragSource$$3$$
      }
    }
  }
  return null
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($dragSource$$4_mouseX$$53$$, $mouseY$$53$$, $clientIds$$23$$) {
  this.$_dragAllowed$ = !1;
  return($dragSource$$4_mouseX$$53$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$4_mouseX$$53$$.$isDragAvailable$($clientIds$$23$$) : !1
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$54$$, $mouseY$$54$$) {
  var $dragSource$$5$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$5$$ ? $dragSource$$5$$.$getDragTransferable$($mouseX$$54$$, $mouseY$$54$$) : null
};
D.$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$55$$, $mouseY$$55$$) {
  var $dragSource$$6$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$6$$ ? $dragSource$$6$$.$getDragOverFeedback$($mouseX$$55$$, $mouseY$$55$$) : null
};
D.$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$56$$, $mouseY$$56$$) {
  var $dragSource$$7$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$7$$ ? $dragSource$$7$$.$getDragContext$($mouseX$$56$$, $mouseY$$56$$) : null
};
D.$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$57$$, $mouseY$$57$$) {
  var $dragSource$$8$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$8$$ ? $dragSource$$8$$.$getDragOffset$($mouseX$$57$$, $mouseY$$57$$) : null
};
D.$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$7$$, $yOffset$$10$$) {
  var $dragSource$$9$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$9$$ ? $dragSource$$9$$.$getPointerOffset$($xOffset$$7$$, $yOffset$$10$$) : null
};
D.$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  var $dragSource$$10$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  $dragSource$$10$$ && $dragSource$$10$$.$initiateDrag$()
};
D.$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  var $dragSource$$11$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  $dragSource$$11$$ && $dragSource$$11$$.$dragDropEnd$();
  (0,D.$JSCompiler_StaticMethods_resetTouchTargets$$)(this.$_panZoomCanvas$)
};
D.$DvtThematicMap$$.prototype.$acceptDrag$ = function $$DvtThematicMap$$$$$acceptDrag$$($mouseX$$59$$, $mouseY$$59$$, $clientIds$$24$$) {
  var $JSCompiler_inline_result$$121_mouseX$$inline_8716_zoom$$16$$ = this.$_pzc$.$getZoom$();
  $mouseX$$59$$ = ($mouseX$$59$$ - (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_pzc$)) / $JSCompiler_inline_result$$121_mouseX$$inline_8716_zoom$$16$$;
  $mouseY$$59$$ = ($mouseY$$59$$ - (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_pzc$)) / $JSCompiler_inline_result$$121_mouseX$$inline_8716_zoom$$16$$;
  a: {
    for(var $JSCompiler_inline_result$$121_mouseX$$inline_8716_zoom$$16$$ = $mouseX$$59$$, $mouseY$$inline_8717$$ = $mouseY$$59$$, $i$$inline_8718$$ = 0;$i$$inline_8718$$ < this.$_layers$.length;$i$$inline_8718$$++) {
      if(this.$_layers$[$i$$inline_8718$$].$getDropTarget$) {
        var $dropTarget$$inline_8719$$ = this.$_layers$[$i$$inline_8718$$].$_dropTarget$;
        if($dropTarget$$inline_8719$$ && $dropTarget$$inline_8719$$.$getDropSite$($JSCompiler_inline_result$$121_mouseX$$inline_8716_zoom$$16$$, $mouseY$$inline_8717$$)) {
          $JSCompiler_inline_result$$121_mouseX$$inline_8716_zoom$$16$$ = $dropTarget$$inline_8719$$;
          break a
        }
      }
    }
    $JSCompiler_inline_result$$121_mouseX$$inline_8716_zoom$$16$$ = null
  }
  return(this.$_dropTarget$ = $JSCompiler_inline_result$$121_mouseX$$inline_8716_zoom$$16$$) ? this.$_dropTarget$.$acceptDrag$($mouseX$$59$$, $mouseY$$59$$, $clientIds$$24$$) : null
};
D.$DvtThematicMap$$.prototype.$getDropSite$ = function $$DvtThematicMap$$$$$getDropSite$$($mouseX$$60$$, $mouseY$$60$$) {
  var $zoom$$17$$ = this.$_pzc$.$getZoom$();
  $mouseX$$60$$ = ($mouseX$$60$$ - (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_pzc$)) / $zoom$$17$$;
  $mouseY$$60$$ = ($mouseY$$60$$ - (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_pzc$)) / $zoom$$17$$;
  return this.$_dropTarget$ ? this.$_dropTarget$.$getDropSite$($mouseX$$60$$, $mouseY$$60$$) : null
};
D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$, $basemap$$3$$) {
  this.$_areaLayer$ = $areaLayer$$;
  this.$_basemap$ = $basemap$$3$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapDropTarget$$.prototype.$acceptDrag$ = function $$DvtThematicMapDropTarget$$$$$acceptDrag$$($mouseX$$51_obj$$356$$, $mouseY$$51$$, $clientIds$$22$$) {
  if($mouseX$$51_obj$$356$$ = (0,D.$JSCompiler_StaticMethods___getObjectUnderPoint$$)(this.$_areaLayer$, $mouseX$$51_obj$$356$$, $mouseY$$51$$)) {
    $mouseX$$51_obj$$356$$ != this.$_dropSite$ && (this.$_areaLayer$.$__showDropSiteFeedback$($mouseX$$51_obj$$356$$), this.$_dropSite$ = $mouseX$$51_obj$$356$$)
  }else {
    return this.$_areaLayer$.$__showDropSiteFeedback$(null), null
  }
  return $clientIds$$22$$[0]
};
D.$DvtThematicMapDropTarget$$.prototype.$getDropSite$ = function $$DvtThematicMapDropTarget$$$$$getDropSite$$($mouseX$$52$$, $mouseY$$52$$) {
  var $obj$$357$$ = (0,D.$JSCompiler_StaticMethods___getObjectUnderPoint$$)(this.$_areaLayer$, $mouseX$$52$$, $mouseY$$52$$);
  if($obj$$357$$) {
    var $projPoint$$ = D.$DvtThematicMapProjections$$.$inverseProject$($mouseX$$52$$, $mouseY$$52$$, this.$_basemap$);
    return{$regionId$:$obj$$357$$.$_areaName$, $localX$:$projPoint$$.x, $localY$:$projPoint$$.y}
  }
  return null
};
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
(0,D.$goog$exportPath_$$)("DvtThematicMapAutomation", D.$DvtThematicMapAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($actions$$1_displayable$$102_displayable$$inline_8501$$) {
  var $dataObject$$inline_8500_logicalObj$$15$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tmap$.$getEventManager$(), $actions$$1_displayable$$102_displayable$$inline_8501$$);
  if($dataObject$$inline_8500_logicalObj$$15$$ && ($dataObject$$inline_8500_logicalObj$$15$$ instanceof D.$DvtMapAreaPeer$$ || $dataObject$$inline_8500_logicalObj$$15$$ instanceof D.$DvtMapObjPeer$$)) {
    var $JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$;
    a: {
      $actions$$1_displayable$$102_displayable$$inline_8501$$ = $dataObject$$inline_8500_logicalObj$$15$$.$getDisplayable$();
      for(var $idx$$39_layers$$inline_8502$$ = this.$_tmap$.$_layers$, $i$$inline_8503$$ = 0;$i$$inline_8503$$ < $idx$$39_layers$$inline_8502$$.length;$i$$inline_8503$$++) {
        var $dataLayers$$inline_8504$$ = $idx$$39_layers$$inline_8502$$[$i$$inline_8503$$].$DataLayers$;
        for($JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$ in $dataLayers$$inline_8504$$) {
          if($actions$$1_displayable$$102_displayable$$inline_8501$$ instanceof D.$DvtPath$$) {
            for(var $areas$$inline_8506_markers$$inline_8508$$ = $dataLayers$$inline_8504$$[$JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$].$_areaObjs$, $k$$inline_8507$$ = 0;$k$$inline_8507$$ < $areas$$inline_8506_markers$$inline_8508$$.length;$k$$inline_8507$$++) {
              if($areas$$inline_8506_markers$$inline_8508$$[$k$$inline_8507$$] === $dataObject$$inline_8500_logicalObj$$15$$) {
                $JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$) + ":area[" + $k$$inline_8507$$ + "]";
                break a
              }
            }
          }else {
            if($actions$$1_displayable$$102_displayable$$inline_8501$$ instanceof D.$DvtSimpleMarker$$ || $actions$$1_displayable$$102_displayable$$inline_8501$$ instanceof D.$DvtImageMarker$$) {
              $areas$$inline_8506_markers$$inline_8508$$ = $dataLayers$$inline_8504$$[$JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$].$_dataObjs$;
              for($k$$inline_8507$$ = 0;$k$$inline_8507$$ < $areas$$inline_8506_markers$$inline_8508$$.length;$k$$inline_8507$$++) {
                if($areas$$inline_8506_markers$$inline_8508$$[$k$$inline_8507$$] === $dataObject$$inline_8500_logicalObj$$15$$) {
                  $JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$) + ":marker[" + $k$$inline_8507$$ + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$ = null
    }
    return $JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$
  }
  if($JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$ = this.$_tmap$.$_panZoomCanvas$.$_controlPanel$) {
    if(($dataObject$$inline_8500_logicalObj$$15$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$.$getEventManager$(), $actions$$1_displayable$$102_displayable$$inline_8501$$)) && $dataObject$$inline_8500_logicalObj$$15$$ instanceof D.$DvtButton$$) {
      $actions$$1_displayable$$102_displayable$$inline_8501$$ = "disclosure zoomIn zoomOut zoomToFit drillDown drillUp reset".split(" ");
      for($idx$$39_layers$$inline_8502$$ = 0;$idx$$39_layers$$inline_8502$$ < $actions$$1_displayable$$102_displayable$$inline_8501$$.length;$idx$$39_layers$$inline_8502$$++) {
        if($JSCompiler_inline_result$$453_controlPanel$$10_id$$inline_8505$$.$getActionDisplayable$($actions$$1_displayable$$102_displayable$$inline_8501$$[$idx$$39_layers$$inline_8502$$]) === $dataObject$$inline_8500_logicalObj$$15$$) {
          return"controlPanel#" + $actions$$1_displayable$$102_displayable$$inline_8501$$[$idx$$39_layers$$inline_8502$$]
        }
      }
    }
  }
  return null
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$) {
  if("tooltip" == $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_tmap$)
  }
  var $actionIdx_colonIdx$$1_controlPanel$$11$$ = $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.indexOf(":"), $parenIdx$$2$$ = $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.indexOf("[");
  return 0 < $actionIdx_colonIdx$$1_controlPanel$$11$$ && 0 < $parenIdx$$2$$ ? ($action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.substring(0, $actionIdx_colonIdx$$1_controlPanel$$11$$), $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.substring($actionIdx_colonIdx$$1_controlPanel$$11$$ + 1, $parenIdx$$2$$), (0,window.parseInt)($action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.substring($parenIdx$$2$$ + 
  1, $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.length - 1)))) ? $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.$getDisplayable$().$getElem$() : null : 0 === $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.lastIndexOf("controlPanel") && ($actionIdx_colonIdx$$1_controlPanel$$11$$ = $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.indexOf("#"), 0 < $actionIdx_colonIdx$$1_controlPanel$$11$$ && ($action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$ = 
  $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.substring($actionIdx_colonIdx$$1_controlPanel$$11$$ + 1), ($actionIdx_colonIdx$$1_controlPanel$$11$$ = this.$_tmap$.$_panZoomCanvas$.$_controlPanel$) && $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$)) ? ($action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$ = $actionIdx_colonIdx$$1_controlPanel$$11$$.$getActionDisplayable$($action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$)) ? $action$$28_dataObj$$inline_8514_displayable$$103_subId$$31$$.$getElem$() : 
  null : null
};
D.$DvtThematicMapAutomation$$.prototype.getDomElementForSubId = D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dataLayerId$$1_dataObj$$2$$, $data$$103_dataObjType$$1$$, $index$$243_label$$102$$) {
  return($dataLayerId$$1_dataObj$$2$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $dataLayerId$$1_dataObj$$2$$, $data$$103_dataObjType$$1$$, $index$$243_label$$102$$)) ? ($data$$103_dataObjType$$1$$ = {}, $data$$103_dataObjType$$1$$.color = $dataLayerId$$1_dataObj$$2$$.$getDatatipColor$(), $data$$103_dataObjType$$1$$.tooltip = $dataLayerId$$1_dataObj$$2$$.$getShortDesc$(), $index$$243_label$$102$$ = $dataLayerId$$1_dataObj$$2$$.$getLabel$(), $data$$103_dataObjType$$1$$.label = $index$$243_label$$102$$ ? 
  $index$$243_label$$102$$.$getTextString$() : null, $data$$103_dataObjType$$1$$.selected = $dataLayerId$$1_dataObj$$2$$.$isSelected$(), $data$$103_dataObjType$$1$$) : null
};
D.$DvtThematicMapAutomation$$.prototype.getData = D.$DvtThematicMapAutomation$$.prototype.getData;
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$1$$, $dataLayerId$$3$$, $dataObjType$$3$$, $index$$245$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.$_tmap$.$_layers$;
  for(var $i$$833$$ = 0;$i$$833$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.length;$i$$833$$++) {
    var $dataLayers$$5$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$[$i$$833$$].$DataLayers$, $id$$301$$;
    for($id$$301$$ in $dataLayers$$5$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$301$$) == $dataLayerId$$3$$) {
        if("area" == $dataObjType$$3$$) {
          return $dataLayers$$5$$[$id$$301$$].$_dataAreaCollection$[$index$$245$$]
        }
        if("marker" == $dataObjType$$3$$) {
          return $dataLayers$$5$$[$id$$301$$].$_dataMarkerCollection$[$index$$245$$]
        }
      }
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__getDataLayerId$$ = function $$JSCompiler_StaticMethods__getDataLayerId$$$($dataLayerId$$4$$) {
  var $colonIdx$$2$$ = $dataLayerId$$4$$.lastIndexOf(":");
  return 0 < $colonIdx$$2$$ ? $dataLayerId$$4$$.substring($colonIdx$$2$$ + 1) : $dataLayerId$$4$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$594$$, $bSupportsVectorEffects$$) {
  this.Init($context$$594$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$595$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$595$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = null;
  this.$_isDrilled$ = !1;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled_parent$$85$$) {
  this.$_isDrilled$ != $drilled_parent$$85$$ && (this.$_isDrilled$ = $drilled_parent$$85$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(null), this.$_disclosedInnerShape$.$setMouseEnabled$(!1), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(null), this.$_disclosedOuterShape$.$setMouseEnabled$(!1), $drilled_parent$$85$$ = this.getParent(), $drilled_parent$$85$$.$addChild$(this.$_disclosedOuterShape$), 
  $drilled_parent$$85$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(!1), this.$IsShowingHoverEffect$ = !1) : (this.$IsShowingHoverEffect$ && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, 
  this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(!0), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$41$$) {
  this.$IsSelected$ != $selected$$41$$ && ($selected$$41$$ && (this.$IsShowingHoverEffect$ ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$41$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 2);
  D.$DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.$clone$(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = !0));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.$clone$(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = !0))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4));
  D.$DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$3$$, $outerStroke$$3$$) {
  D.$DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$3$$, $outerStroke$$3$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && (this.$HoverInnerStroke$.$_bFixedWidth$ = !0), this.$HoverOuterStroke$ && (this.$HoverOuterStroke$.$_bFixedWidth$ = !0));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$4$$, $outerStroke$$4$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$4$$, $outerStroke$$4$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && (this.$SelectedInnerStroke$.$_bFixedWidth$ = !0), this.$SelectedOuterStroke$ && (this.$SelectedOuterStroke$.$_bFixedWidth$ = !0));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$5$$, $outerStroke$$5$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$5$$, $outerStroke$$5$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = !0), this.$SelectedHoverOuterStroke$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = !0));
  return this
};
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$90$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$107$$ = $shape$$90$$.$getStroke$();
    $stroke$$107$$ && ($stroke$$107$$ = $stroke$$107$$.$clone$(), $stroke$$107$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$90$$.$setStroke$($stroke$$107$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$108$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$108$$ = $adjustedStroke_stroke$$108$$.$clone$(), $adjustedStroke_stroke$$108$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$108$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
};
D.$DvtCustomDataItem$$ = function $$DvtCustomDataItem$$$($context$$592$$, $dataItem$$42$$, $styles$$16$$) {
  this.Init($context$$592$$, $dataItem$$42$$, $styles$$16$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCustomDataItem$$, D.$DvtContainer$$, "DvtCustomDataItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCustomDataItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$593_his$$3$$, $dataItem$$43_dim$$83_hos$$3$$, $shos$$3_styles$$17$$) {
  D.$DvtCustomDataItem$$.$superclass$.Init.call(this, $context$$593_his$$3$$);
  this.$_dataItem$ = $dataItem$$43_dim$$83_hos$$3$$;
  $dataItem$$43_dim$$83_hos$$3$$ instanceof D.$DvtBaseComponent$$ ? (this.$_width$ = $dataItem$$43_dim$$83_hos$$3$$.getWidth(), this.$_height$ = $dataItem$$43_dim$$83_hos$$3$$.getHeight(), this.$addChild$($dataItem$$43_dim$$83_hos$$3$$)) : (this.$getElem$().appendChild($dataItem$$43_dim$$83_hos$$3$$), $dataItem$$43_dim$$83_hos$$3$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$593_his$$3$$, this), this.$_width$ = $dataItem$$43_dim$$83_hos$$3$$.$w$, this.$_height$ = $dataItem$$43_dim$$83_hos$$3$$.$h$);
  this.$_boundingRect$ = new D.$DvtRect$$($context$$593_his$$3$$, -5, -5, this.$_width$ + 10, this.$_height$ + 10);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_boundingRect$);
  $context$$593_his$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2);
  $dataItem$$43_dim$$83_hos$$3$$ = new D.$DvtSolidStroke$$("rgb(235, 236, 237)", 1, 4);
  var $sis$$4$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2), $sos$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedOuterColor, 1, 4), $shis$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2);
  $shos$$3_styles$$17$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedOuterColor, 1, 6);
  this.$_boundingRect$.$setHoverStroke$($context$$593_his$$3$$, $dataItem$$43_dim$$83_hos$$3$$).$setSelectedStroke$($sis$$4$$, $sos$$3$$).$setSelectedHoverStroke$($shis$$3$$, $shos$$3_styles$$17$$);
  this.$addChildAt$(this.$_boundingRect$, 0)
};
D.$JSCompiler_prototypeAlias$$.$setAriaProperty$ = function $$JSCompiler_prototypeAlias$$$$setAriaProperty$$($property$$8$$, $value$$189$$) {
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_boundingRect$.$setAriaProperty$($property$$8$$, $value$$189$$) : D.$DvtCustomDataItem$$.$superclass$.$setAriaProperty$.call(this, $property$$8$$, $value$$189$$)
};
D.$JSCompiler_prototypeAlias$$.$setAriaRole$ = function $$JSCompiler_prototypeAlias$$$$setAriaRole$$($role$$3$$) {
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_boundingRect$.$setAriaRole$($role$$3$$) : D.$DvtCustomDataItem$$.$superclass$.$setAriaRole$.call(this, $role$$3$$)
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($bSelectable$$2$$) {
  this.$_boundingRect$.$setSelectable$($bSelectable$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_boundingRect$.$isSelectable$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$_boundingRect$.$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$40$$) {
  this.$_boundingRect$.$setSelected$($selected$$40$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_boundingRect$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_boundingRect$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getRootElement$ = (0,D.$JSCompiler_get$$)("$_dataItem$");
D.$JSCompiler_prototypeAlias$$.$fireKeyboardListener$ = function $$JSCompiler_prototypeAlias$$$$fireKeyboardListener$$($event$$745$$) {
  this.$_dataItem$ instanceof D.$DvtBaseComponent$$ && this.$_dataItem$.$fireKeyboardListener$($event$$745$$)
};
this ? this.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = this.DvtBaseMapManager : (this.DvtBaseMapManager = D.$DvtBaseMapManager$$ = {}, D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]) : window.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = window.DvtBaseMapManager : (D.$DvtBaseMapManager$$ = {}, window.DvtBaseMapManager = D.$DvtBaseMapManager$$, D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = 
[[]]);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseMapManager$$, D.$DvtObj$$, "DvtBaseMapManager");
D.$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
D.$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
D.$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
D.$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
D.$DvtBaseMapManager$$.$_INDEX$ = "__index";
D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$, $layerName$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$][$layerName$$];
  return $dimAr_layer$$ && ($dimAr_layer$$ = $dimAr_layer$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$[0], $dimAr_layer$$[1], $dimAr_layer$$[2], $dimAr_layer$$[3]) : null
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$1$$, $layerName$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$1$$];
  return $layer$$1$$ ? $layer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : null
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$2$$, $layerName$$2$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$2$$];
  return $layer$$2$$ ? $layer$$2$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : null
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$3_layer$$3$$, $layerName$$3$$, $areaId$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$3_layer$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3_layer$$3$$][$layerName$$3$$];
  var $labels$$28$$;
  $baseMapName$$3_layer$$3$$ && ($labels$$28$$ = $baseMapName$$3_layer$$3$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$28$$ && $labels$$28$$[$areaId$$] ? $labels$$28$$[$areaId$$][1] : null
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$4$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap_cityLayer_coords$$34$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4$$];
  if($basemap_cityLayer_coords$$34$$ && ($basemap_cityLayer_coords$$34$$ = $basemap_cityLayer_coords$$34$$.cities)) {
    if($basemap_cityLayer_coords$$34$$ = $basemap_cityLayer_coords$$34$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap_cityLayer_coords$$34$$[0], $basemap_cityLayer_coords$$34$$[1])
    }
  }
  return null
};
D.$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$5$$, $city$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$1_cityLabel_cityLayer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$1_cityLabel_cityLayer$$1$$ && ($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$1_cityLabel_cityLayer$$1$$[1]
    }
  }
  return null
};
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath$$2_baseMapName$$6_path$$38$$, $layerName$$4$$, $areaId$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$2_labelInfo$$8_layer$$4$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$38$$];
  if($basemap$$2_labelInfo$$8_layer$$4$$ && ($basemap$$2_labelInfo$$8_layer$$4$$ = $basemap$$2_labelInfo$$8_layer$$4$$[$layerName$$4$$])) {
    if(($basemap$$2_labelInfo$$8_layer$$4$$ = $basemap$$2_labelInfo$$8_layer$$4$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$2_labelInfo$$8_layer$$4$$[$areaId$$1$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$2_labelInfo$$8_layer$$4$$[$areaId$$1$$][0]).$getCenter$()
    }
    $arPath$$2_baseMapName$$6_path$$38$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$38$$][$layerName$$4$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$1$$];
    if(!$arPath$$2_baseMapName$$6_path$$38$$) {
      return null
    }
    $arPath$$2_baseMapName$$6_path$$38$$ = D.$DvtPathUtils$$.$createPathArray$($arPath$$2_baseMapName$$6_path$$38$$);
    return D.$DvtPathUtils$$.$getDimensions$($arPath$$2_baseMapName$$6_path$$38$$).$getCenter$()
  }
  return null
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$7$$, $layerName$$5$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$5$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$layerName$$5$$];
  return $layer$$5$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$5$$.__index + 1] : null
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$8$$, $layerName$$6$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$6$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$6$$].__index - 1] : null
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$9$$, $layerName$$7$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$7$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$10$$, $layerName$$8$$, $area$$3$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$8$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$3$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$11$$, $layerName$$9$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName_children$$15$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$11$$, $layerName$$9$$);
  return $childLayerName_children$$15$$ && ($childLayerName_children$$15$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$childLayerName_children$$15$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName_children$$15$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$12$$, $index$$238$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$238$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$13_layerMetadata$$, $layerName$$10$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$239$$, $dim$$82$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$13_layerMetadata$$ = $basemapMetadata$$[$layerName$$10$$];
  $baseMapName$$13_layerMetadata$$ || ($baseMapName$$13_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$10$$] = $baseMapName$$13_layerMetadata$$, null != $index$$239$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$239$$] = $layerName$$10$$));
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$82$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$239$$
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$14_layerMetadata$$1$$, $layerName$$11$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$11$$];
  $baseMapName$$14_layerMetadata$$1$$ || ($baseMapName$$14_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$11$$] = $baseMapName$$14_layerMetadata$$1$$);
  ($baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$11$$]) && ($baseMapName$$14_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$15_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$12$$, $labelMetadata$$2$$) {
  if($baseMapName$$15_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$12$$ = $baseMapName$$15_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$12$$]) {
      for(var $prop$$18$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$12$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$18$$] = $labelMetadata$$2$$[$prop$$18$$]
      }
    }
  }
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.updateResourceBundle", D.$DvtBaseMapManager$$.$updateResourceBundle$);
D.$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$795_index$$240$$, $args$$6$$, $unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_MAPS;
  if($unprocessedMaps_unprocessedParentUpdates$$) {
    for($i$$795_index$$240$$ = 0;$i$$795_index$$240$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$795_index$$240$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$795_index$$240$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2], $args$$6$$[3], $args$$6$$[4], $args$$6$$[5], $args$$6$$[6], $args$$6$$[7])
    }
    for($i$$795_index$$240$$ = 0;$i$$795_index$$240$$ < $unprocessedMaps_unprocessedParentUpdates$$[1].length;$i$$795_index$$240$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[1][$i$$795_index$$240$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    for($i$$795_index$$240$$ = 0;$i$$795_index$$240$$ < $unprocessedMaps_unprocessedParentUpdates$$[2].length;$i$$795_index$$240$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[2][$i$$795_index$$240$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []]
  }
  if($unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) {
    for($i$$795_index$$240$$ = 0;$i$$795_index$$240$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$795_index$$240$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$795_index$$240$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$6$$[1], $layerName$$13_lowerLayer$$ = $args$$6$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$6$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$6$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$795_index$$240$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$795_index$$240$$, 0, $layerName$$13_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$13_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$795_index$$240$$;
          for($i$$795_index$$240$$ += 1;$i$$795_index$$240$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$795_index$$240$$++) {
            ($layerName$$13_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$795_index$$240$$]]) && $layerName$$13_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$6$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$64$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$1$$) {
  if(0 < $zoomFactor$$1$$) {
    $basemapW_scale$$64$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$64$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$1$$);
    if(1 >= $basemapW_scale$$64$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$39$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$39$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = D.$DvtPathUtils$$.$createPathArray$($paths$$[$path$$39$$])), $basemapH_simplifiedPaths$$[$path$$39$$] = D.$DvtPathUtils$$.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$64$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtBaseMapManager$$.$getLayerIds$ = function $$DvtBaseMapManager$$$$getLayerIds$$($baseMapName$$16$$, $layerName$$14$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $ids$$1_layer$$7$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$16$$][$layerName$$14$$], $map$$13$$ = {};
  if($ids$$1_layer$$7$$) {
    var $ids$$1_layer$$7$$ = $ids$$1_layer$$7$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$], $id$$283$$;
    for($id$$283$$ in $ids$$1_layer$$7$$) {
      $map$$13$$[$id$$283$$] = $ids$$1_layer$$7$$[$id$$283$$][1]
    }
  }
  return $map$$13$$
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.getLayerIds", D.$DvtBaseMapManager$$.$getLayerIds$);
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$105$$, $category$$23$$) {
  this.Init($displayable$$105$$, $category$$23$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$106$$, $category$$24$$) {
  this.$_displayable$ = $displayable$$106$$;
  this.$_category$ = $category$$24$$
};
D.$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = (0,D.$JSCompiler_get$$)("$_category$");
D.$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$DvtMapDrillEvent$$ = function $$DvtMapDrillEvent$$$($drillType$$) {
  this.Init(D.$DvtMapDrillEvent$$.$TYPE$);
  this.$_drillType$ = $drillType$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapDrillEvent");
D.$DvtMapDrillEvent$$.$TYPE$ = "drill";
D.$DvtMapDrillEvent$$.$DRILL_UP$ = 0;
D.$DvtMapDrillEvent$$.$DRILL_DOWN$ = 1;
D.$DvtMapDrillEvent$$.$RESET$ = 2;
D.$DvtMapDrillEvent$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_disclosed$");
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$3$$, $rowKey$$17$$, $action$$27$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$3$$;
  this.$_rowKey$ = $rowKey$$17$$;
  this.$_action$ = $action$$27$$
};
(0,D.$goog$exportPath_$$)("DvtMapActionEvent", D.$DvtMapActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtMapActionEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapActionEvent");
D.$DvtMapActionEvent$$.TYPE = "action";
D.$DvtMapActionEvent$$.prototype.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$DvtMapActionEvent$$.prototype.getClientId = D.$DvtMapActionEvent$$.prototype.$getClientId$;
D.$DvtMapActionEvent$$.prototype.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$DvtMapActionEvent$$.prototype.getRowKey = D.$DvtMapActionEvent$$.prototype.$getRowKey$;
D.$DvtMapActionEvent$$.prototype.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$DvtMapActionEvent$$.prototype.getAction = D.$DvtMapActionEvent$$.prototype.$getAction$;
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$599$$, $label$$94$$, $labelInfo$$9$$, $labelDisplay$$5$$, $parentContainer$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$599$$, $label$$94$$, $labelInfo$$9$$, $labelDisplay$$5$$, $parentContainer$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$600$$, $i$$812_label$$95$$, $labelInfo$$10$$, $labelDisplay$$6_line$$16_polyline$$, $parentContainer$$1_stroke$$112$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$600$$, $i$$812_label$$95$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(!1);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = null;
  this.$_labelDisplay$ = $labelDisplay$$6_line$$16_polyline$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$112$$;
  if($labelInfo$$10$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$10$$[0])), 1 < $labelInfo$$10$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$812_label$$95$$ = 1;$i$$812_label$$95$$ < $labelInfo$$10$$.length;$i$$812_label$$95$$++) {
      $labelDisplay$$6_line$$16_polyline$$ = $labelInfo$$10$$[$i$$812_label$$95$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$6_line$$16_polyline$$[0])), $labelDisplay$$6_line$$16_polyline$$ = new D.$DvtPolyline$$($context$$600$$, $labelDisplay$$6_line$$16_polyline$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$6_line$$16_polyline$$), $parentContainer$$1_stroke$$112$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && ($parentContainer$$1_stroke$$112$$.$_bFixedWidth$ = 
      !0), $labelDisplay$$6_line$$16_polyline$$.$setStroke$($parentContainer$$1_stroke$$112$$), this.$_leaderLines$.push($labelDisplay$$6_line$$16_polyline$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$12_zoom$$13$$) {
  $pzcMatrix$$12_zoom$$13$$ = $pzcMatrix$$12_zoom$$13$$.$_a$;
  for(var $mat$$49_state$$96_stroke$$113$$ = -1, $center$$9_estimatedDims$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$116$$ = !1, $i$$813_leaderLinePoints$$ = 0;$i$$813_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$813_leaderLinePoints$$++) {
    var $numPoints$$2_zoomW$$ = this.$_boundRectangle$[$i$$813_leaderLinePoints$$].$w$ * $pzcMatrix$$12_zoom$$13$$;
    if($center$$9_estimatedDims$$3$$.$h$ <= this.$_boundRectangle$[$i$$813_leaderLinePoints$$].$h$ * $pzcMatrix$$12_zoom$$13$$) {
      if($center$$9_estimatedDims$$3$$.$w$ <= $numPoints$$2_zoomW$$) {
        $mat$$49_state$$96_stroke$$113$$ = $i$$813_leaderLinePoints$$;
        break
      }else {
        if(this.getParent() || ($labelBox_remove_style$$116$$ = !0, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints$$2_zoomW$$) {
          $mat$$49_state$$96_stroke$$113$$ = $i$$813_leaderLinePoints$$;
          break
        }
      }
    }
  }
  -1 == $mat$$49_state$$96_stroke$$113$$ && "on" == this.$_labelDisplay$ && ($mat$$49_state$$96_stroke$$113$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$49_state$$96_stroke$$113$$ ? (-1 == $mat$$49_state$$96_stroke$$113$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$9_estimatedDims$$3$$ = this.$_boundRectangle$[$mat$$49_state$$96_stroke$$113$$].$getCenter$(), this.$setCenter$($center$$9_estimatedDims$$3$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = null, 0 < $mat$$49_state$$96_stroke$$113$$ ? (this.$_leaderLine$ = 
  this.$_leaderLines$[$mat$$49_state$$96_stroke$$113$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$116$$ = this.$getCSSStyle$(), $labelBox_remove_style$$116$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$116$$), $labelBox_remove_style$$116$$ = this.$_boundRectangle$[$mat$$49_state$$96_stroke$$113$$], $i$$813_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints$$2_zoomW$$ = $i$$813_leaderLinePoints$$.length, $labelBox_remove_style$$116$$.x > 
  $i$$813_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$116$$.x, $center$$9_estimatedDims$$3$$.y))) : $labelBox_remove_style$$116$$.y > $i$$813_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$9_estimatedDims$$3$$.x, $labelBox_remove_style$$116$$.y))) : $labelBox_remove_style$$116$$.x + $labelBox_remove_style$$116$$.$w$ < 
  $i$$813_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$116$$.x + $labelBox_remove_style$$116$$.$w$, $center$$9_estimatedDims$$3$$.y))) : $labelBox_remove_style$$116$$.y + $labelBox_remove_style$$116$$.$h$ < $i$$813_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$9_estimatedDims$$3$$.x, $labelBox_remove_style$$116$$.y + 
  $labelBox_remove_style$$116$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$116$$ = this.$getCSSStyle$(), $labelBox_remove_style$$116$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$116$$)))), this.$_currentState$ = $mat$$49_state$$96_stroke$$113$$) : -1 == $mat$$49_state$$96_stroke$$113$$ && $labelBox_remove_style$$116$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$49_state$$96_stroke$$113$$ = new D.$DvtMatrix$$, $mat$$49_state$$96_stroke$$113$$.translate($pzcMatrix$$12_zoom$$13$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$12_zoom$$13$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$49_state$$96_stroke$$113$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$12_zoom$$13$$, 0, 0, $pzcMatrix$$12_zoom$$13$$)), this.$_bSupportsVectorEffects$ || ($mat$$49_state$$96_stroke$$113$$ = 
  this.$_leaderLine$.$getStroke$().$clone$(), $mat$$49_state$$96_stroke$$113$$.$setWidth$(1 / $pzcMatrix$$12_zoom$$13$$), this.$_leaderLine$.$setStroke$($mat$$49_state$$96_stroke$$113$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$29$$) {
  this.$_center$ = $p$$29$$;
  this.$setX$($p$$29$$.x);
  this.$setY$($p$$29$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$39$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$39$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$39$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = null)
};
D.$DvtMapObjPeer$$ = function $$DvtMapObjPeer$$$($data$$100$$, $dataLayer$$6$$, $displayable$$100$$, $label$$96$$, $center$$10$$) {
  this.Init($data$$100$$, $dataLayer$$6$$, $displayable$$100$$, $label$$96$$, $center$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapObjPeer$$, D.$DvtObj$$, "DvtMapObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$101$$, $dataLayer$$7_mapLayer_preDatatip$$, $displayable$$101_location$$24$$, $label$$97$$, $center$$11$$) {
  this.$_data$ = $data$$101$$;
  this.$_dataLayer$ = $dataLayer$$7_mapLayer_preDatatip$$;
  this.$Displayable$ = $displayable$$101_location$$24$$;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isShowingHoverEffect$ = this.$_isSelected$ = !1;
  this.$Displayable$.$setDataColor$ && this.$Displayable$.$setDataColor$($data$$101$$.color);
  this.$_label$ = $label$$97$$;
  this.$_center$ = $center$$11$$;
  this.$_zoom$ = 1;
  this.$_view$ = $dataLayer$$7_mapLayer_preDatatip$$.$_tmap$;
  this.$_data$.categories || this.$_label$ && (this.$_data$.categories = [this.$_label$.$getTextString$()]);
  $displayable$$101_location$$24$$ = $data$$101$$.location;
  "auto" == this.$_view$.$_displayTooltips$ && $displayable$$101_location$$24$$ && ($dataLayer$$7_mapLayer_preDatatip$$ = $dataLayer$$7_mapLayer_preDatatip$$.$_parentLayer$, ($dataLayer$$7_mapLayer_preDatatip$$ = !($dataLayer$$7_mapLayer_preDatatip$$ instanceof D.$DvtMapAreaLayer$$) || $dataLayer$$7_mapLayer_preDatatip$$ instanceof D.$DvtMapCustomAreaLayer$$ ? D.$DvtBaseMapManager$$.$getCityLabel$(this.$_view$.$_mapName$, $displayable$$101_location$$24$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$(this.$_view$.$_mapName$, 
  $dataLayer$$7_mapLayer_preDatatip$$.$LayerName$, $displayable$$101_location$$24$$)) && (this.$_data$.shortDesc = $data$$101$$.shortDesc ? $dataLayer$$7_mapLayer_preDatatip$$ + ": " + $data$$101$$.shortDesc : $dataLayer$$7_mapLayer_preDatatip$$));
  this.$Displayable$ && ($data$$101$$.destination ? (this.$Displayable$.$setAriaRole$("link"), this.$_linkCallback$ = D.$DvtToolkitUtils$$.$getLinkCallback$("_blank", $data$$101$$.destination)) : this.$Displayable$.$setAriaRole$("img"));
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getClientId$ = function $$JSCompiler_prototypeAlias$$$$getClientId$$() {
  return this.$_data$.clientId
};
D.$JSCompiler_prototypeAlias$$.$getLocation$ = function $$JSCompiler_prototypeAlias$$$$getLocation$$() {
  return this.$_data$.location
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($center$$12$$) {
  this.$_center$ = $center$$12$$;
  this.$__recenter$()
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Displayable$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$11$$) {
  this.$Displayable$.$setVisible$($bVisible$$11$$);
  this.$_label$ && this.$_label$.$setVisible$($bVisible$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$Displayable$.getWidth ? this.$Displayable$.getWidth() * this.$Displayable$.getHeight() : 0
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  if("none" != this.$_view$.$_displayTooltips$) {
    var $tooltipFunc$$10$$ = this.$_view$.$getOptions$().tooltip;
    return $tooltipFunc$$10$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$10$$, this.$getDataContext$()) : this.$getShortDesc$()
  }
  return null
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$_label$ ? this.$_label$.$getTextString$() : null, color:this.$getDatatipColor$(), location:this.$getLocation$(), x:this.$_data$.x, y:this.$_data$.y}
};
D.$JSCompiler_prototypeAlias$$.$getLinkCallback$ = (0,D.$JSCompiler_get$$)("$_linkCallback$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$_data$.color ? this.$_data$.color : "#000000"
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$18$$ = [];
  this.$isSelectable$() && $states$$18$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$getDisplayable$()]
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$27$$ = this.$getAriaLabel$();
    $desc$$27$$ && this.$Displayable$.$setAriaProperty$("label", $desc$$27$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($bSelectable$$3$$) {
  var $label$$98$$ = this.$getLabel$();
  this.$Displayable$.$setSelectable$ && (this.$Displayable$.$setSelectable$($bSelectable$$3$$), $label$$98$$ && $bSelectable$$3$$ && $label$$98$$.setCursor("pointer"));
  this.$_data$.destination && (this.$Displayable$.setCursor("pointer"), $label$$98$$ && $label$$98$$.setCursor("pointer"))
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Displayable$.$isSelectable$ ? this.$Displayable$.$isSelectable$() : !1
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$43$$) {
  if(this.$isSelectable$()) {
    var $prevState$$7$$ = this.$_getState$();
    this.$_isSelected$ = $selected$$43$$;
    this.$_dataLayer$.$getOptions$().selectionRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().selectionRenderer, this.$_getState$(), $prevState$$7$$) : this.$processDefaultSelectionEffect$($selected$$43$$);
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  var $prevState$$8$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = !0;
  this.$_dataLayer$.$getOptions$().hoverRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$8$$) : this.$processDefaultHoverEffect$(!0)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  var $prevState$$9$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = !1;
  this.$_dataLayer$.$getOptions$().hoverRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$9$$) : this.$processDefaultHoverEffect$(!1)
};
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$21$$) {
  for(var $parentId$$30$$ = this.$_dataLayer$.$getClientId$(), $i$$816$$ = 0;$i$$816$$ < $clientIds$$21$$.length && $clientIds$$21$$[$i$$816$$] != $parentId$$30$$;$i$$816$$++) {
  }
  return $parentId$$30$$
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$750$$) {
  return $event$$750$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$750$$.keyCode && $event$$750$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$750$$, this.$GetNavigables$())
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$62$$) {
  return this.$Displayable$.getParent() ? this.$Displayable$ instanceof D.$DvtCustomDataItem$$ ? this.$Displayable$.$getDimensions$($targetCoordinateSpace$$62$$ ? $targetCoordinateSpace$$62$$ : this.$Displayable$.$getCtx$().$_stage$) : this.$Displayable$.$getDimensions$($targetCoordinateSpace$$62$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$Displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  var $prevState$$10$$ = this.$_getState$();
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$_dataLayer$.$getOptions$().focusRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$10$$) : this.$processDefaultFocusEffect$(!0)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  if(this.$isShowingKeyboardFocusEffect$()) {
    var $prevState$$11$$ = this.$_getState$();
    this.$_isShowingKeyboardFocusEffect$ = !1;
    this.$_dataLayer$.$getOptions$().focusRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$11$$) : this.$processDefaultFocusEffect$(!1)
  }
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$17$$) {
  this.$Displayable$.getParent() && (this.$_zoom$ = $pzcMatrix$$17$$.$_a$, this.$__recenter$())
};
D.$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$() {
  if(this.$_label$) {
    this.$_label$.$alignCenter$();
    var $x$$276$$ = this.$Displayable$.$getCx$() * this.$_zoom$, $markerY$$2_y$$248$$ = this.$Displayable$.$getCy$() * this.$_zoom$, $markerH$$ = this.$Displayable$.getHeight(), $markerType$$1$$ = this.$Displayable$ instanceof D.$DvtSimpleMarker$$ ? this.$Displayable$.$getType$() : "image", $position$$61$$ = this.$_data$.labelPosition;
    "top" == $position$$61$$ ? ($markerY$$2_y$$248$$ = $markerY$$2_y$$248$$ - $markerH$$ / 2 - 4, this.$_label$.$alignBottom$()) : "bottom" == $position$$61$$ ? ($markerY$$2_y$$248$$ += $markerH$$ / 2, this.$_label$.$alignTop$()) : ($markerY$$2_y$$248$$ = "triangleUp" == $markerType$$1$$ ? $markerY$$2_y$$248$$ + $markerH$$ / 6 : "triangleDown" == $markerType$$1$$ ? $markerY$$2_y$$248$$ - $markerH$$ / 6 : $markerY$$2_y$$248$$, this.$_label$.$alignMiddle$());
    this.$_label$.$setX$($x$$276$$).$setY$($markerY$$2_y$$248$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$__recenter$ = function $$JSCompiler_prototypeAlias$$$$__recenter$$() {
  var $width$$160$$ = this.$Displayable$.getWidth(), $height$$144$$ = this.$Displayable$.getHeight();
  if(null != $width$$160$$ && null != $height$$144$$ && this.$Displayable$.getParent()) {
    var $rotation$$7_shapeY$$ = 0, $shapeX$$ = this.$_center$.x, $rotation$$7_shapeY$$ = this.$_center$.y;
    this.$Displayable$.$getRotation$ && ($rotation$$7_shapeY$$ = this.$Displayable$.$getRotation$(), $shapeX$$ = this.$_center$.x * window.Math.cos($rotation$$7_shapeY$$) - this.$_center$.y * window.Math.sin($rotation$$7_shapeY$$), $rotation$$7_shapeY$$ = this.$_center$.x * window.Math.sin($rotation$$7_shapeY$$) + this.$_center$.y * window.Math.cos($rotation$$7_shapeY$$));
    $shapeX$$ = this.$_center$.x * this.$_zoom$ - $shapeX$$;
    $rotation$$7_shapeY$$ = this.$_center$.y * this.$_zoom$ - $rotation$$7_shapeY$$;
    this.$Displayable$ instanceof D.$DvtCustomDataItem$$ && ($shapeX$$ += this.$_center$.x - $width$$160$$ / 2, $rotation$$7_shapeY$$ += this.$_center$.y - $height$$144$$ / 2);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Displayable$, $shapeX$$, $rotation$$7_shapeY$$);
    (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$Displayable$);
    this.$positionLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$62$$, $oldObj$$4$$) {
  var $anim$$40$$ = new D.$DvtCustomAnimation$$(this.$_view$.$getCtx$(), this.$Displayable$, this.$getDataLayer$().$getAnimationDuration$()), $oldDisplayable$$2$$ = $oldObj$$4$$.$getDisplayable$();
  if(this.$Displayable$.$getFill$) {
    var $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = $oldDisplayable$$2$$.$getFill$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = this.$Displayable$.$getFill$();
    $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ instanceof D.$DvtSolidFill$$ && !($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$getColor$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getColor$() && $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$getAlpha$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getAlpha$()) && (this.$Displayable$.$setFill$($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$), 
    $oldObj$$4$$.$getLabel$() && this.$_label$ && ($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getFill$(), this.$_label$.$setFill$($oldObj$$4$$.$getLabel$().$getFill$().$clone$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeFill", this.$_label$, this.$_label$.$getFill$, this.$_label$.$setFill$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, 
    "typeFill", this.$Displayable$, this.$Displayable$.$getFill$, this.$Displayable$.$setFill$, $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$))
  }
  if(this.$Displayable$.$getCenterDimensions$ && ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getDisplayable$().$getCenterDimensions$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getCenterDimensions$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.x != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.x || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.y != 
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.y || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$w$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$w$ || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$h$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$h$)) {
    this.$Displayable$.$setCenterDimensions$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeRectangle", this.$Displayable$, this.$Displayable$.$getCenterDimensions$, this.$Displayable$.$setCenterDimensions$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldDisplayable$$2$$.$getRotation$();
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getRotation$();
  if($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$) {
    var $diffRotation_startCenter$$ = $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ - $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$;
    $diffRotation_startCenter$$ > window.Math.PI ? $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ -= 2 * window.Math.PI : $diffRotation_startCenter$$ < -window.Math.PI && ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ += 2 * window.Math.PI);
    this.$Displayable$.$setRotation$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this.$Displayable$, this.$Displayable$.$getRotation$, this.$Displayable$.$setRotation$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  var $diffRotation_startCenter$$ = $oldObj$$4$$.$getCenter$(), $endCenter$$ = this.$getCenter$();
  if($diffRotation_startCenter$$ && $endCenter$$ && ($diffRotation_startCenter$$.x != $endCenter$$.x || $diffRotation_startCenter$$.y != $endCenter$$.y || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)) {
    this.$setCenter$(new D.$DvtPoint$$($diffRotation_startCenter$$.x, $diffRotation_startCenter$$.y)), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typePoint", this, this.$getCenter$, this.$setCenter$, new D.$DvtPoint$$($endCenter$$.x, $endCenter$$.y))
  }
  this.$_label$ && $oldObj$$4$$.$getLabel$() ? ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getLabel$().$getX$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getX$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setX$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, 
  "typeNumber", this.$_label$, this.$_label$.$getX$, this.$_label$.$setX$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getLabel$().$getY$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getY$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setY$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), 
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this.$_label$, this.$_label$.$getY$, this.$_label$.$setY$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $oldObj$$4$$.$getLabel$().$setAlpha$(0)) : $oldObj$$4$$.$getLabel$() && $oldObj$$4$$.$getLabel$().$setAlpha$(0);
  $oldDisplayable$$2$$.$setAlpha$(0);
  $handler$$62$$.add($anim$$40$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$63$$) {
  var $anim$$41_fadeObjs$$ = [this.$Displayable$], $label$$99$$ = this.$getLabel$();
  $label$$99$$ && $anim$$41_fadeObjs$$.push($label$$99$$);
  $anim$$41_fadeObjs$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$getCtx$(), $anim$$41_fadeObjs$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$63$$.add($anim$$41_fadeObjs$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$64$$) {
  var $anim$$42_fadeObjs$$1$$ = [this.$Displayable$];
  this.$Displayable$.$setAlpha$(0);
  var $label$$100$$ = this.$getLabel$();
  $label$$100$$ && ($label$$100$$.$setAlpha$(0), $anim$$42_fadeObjs$$1$$.push($label$$100$$));
  $anim$$42_fadeObjs$$1$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$getCtx$(), $anim$$42_fadeObjs$$1$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$64$$.add($anim$$42_fadeObjs$$1$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultSelectionEffect$$($selected$$44$$) {
  this.$Displayable$.$setSelected$ && this.$Displayable$.$setSelected$($selected$$44$$)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultFocusEffect$$($focused$$3$$) {
  this.$processDefaultHoverEffect$($focused$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultHoverEffect$$($hovered$$2$$) {
  $hovered$$2$$ ? this.$Displayable$.$showHoverEffect$ && this.$Displayable$.$showHoverEffect$() : this.$Displayable$.$hideHoverEffect$ && !this.$isShowingKeyboardFocusEffect$() && this.$Displayable$.$hideHoverEffect$()
};
D.$JSCompiler_StaticMethods__callCustomRenderer$$ = function $$JSCompiler_StaticMethods__callCustomRenderer$$$($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$, $newRootElem_renderer$$11$$, $context$$601_state$$97$$, $prevState$$12$$) {
  if($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$Displayable$ instanceof D.$DvtCustomDataItem$$) {
    var $contextHandler$$1$$ = $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$_view$.$getOptions$()._contextHandler;
    $contextHandler$$1$$ && ($context$$601_state$$97$$ = $contextHandler$$1$$($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$Displayable$.$getElem$(), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$Displayable$.$getRootElement$(), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$_data$, $context$$601_state$$97$$, 
    $prevState$$12$$), $newRootElem_renderer$$11$$ = $newRootElem_renderer$$11$$($context$$601_state$$97$$), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$ = $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$Displayable$, $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$_dataItem$ !== $newRootElem_renderer$$11$$ && 
    ($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$_dataItem$ && ($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$_dataItem$ instanceof D.$DvtBaseComponent$$ ? $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.removeChild($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$_dataItem$) : 
    $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$getElem$().removeChild($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$_dataItem$)), $newRootElem_renderer$$11$$ instanceof D.$DvtBaseComponent$$ ? $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$addChild$($newRootElem_renderer$$11$$) : $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$getElem$().appendChild($newRootElem_renderer$$11$$), 
    $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8337$$.$_dataItem$ = $newRootElem_renderer$$11$$))
  }
};
D.$DvtMapObjPeer$$.prototype.$_getState$ = function $$DvtMapObjPeer$$$$$_getState$$() {
  return{hovered:this.$_isShowingHoverEffect$, selected:this.$isSelected$(), focused:this.$isShowingKeyboardFocusEffect$()}
};
D.$DvtMapAreaPeer$$ = function $$DvtMapAreaPeer$$$($data$$98$$, $dataLayer$$1$$, $displayable$$91$$, $label$$84$$) {
  this.Init($data$$98$$, $dataLayer$$1$$, $displayable$$91$$, $label$$84$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaPeer$$, D.$DvtMapObjPeer$$, "DvtMapAreaPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$99$$, $dataLayer$$2$$, $displayable$$92$$, $label$$85$$) {
  D.$DvtMapAreaPeer$$.$superclass$.Init.call(this, $data$$99$$, $dataLayer$$2$$, $displayable$$92$$, $label$$85$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$42$$) {
  this.$isSelectable$() && ($selected$$42$$ && !this.$_isShowingHoverEffect$ && this.$_dataAreaLayer$.$addChild$(this.$Displayable$), D.$DvtMapAreaPeer$$.$superclass$.$setSelected$.call(this, $selected$$42$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Displayable$);
  D.$DvtMapAreaPeer$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  D.$DvtMapAreaPeer$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Displayable$.$isDrilled$()
};
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$1$$) {
  $drilled$$1$$ ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  this.$Displayable$.$setDrilled$($drilled$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$5$$) {
  D.$DvtMapAreaPeer$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$5$$);
  this.$Displayable$.getParent() && ((0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Displayable$, $pzcMatrix$$5$$), this.$isDrilled$() || this.$positionLabel$($pzcMatrix$$5$$))
};
D.$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$($pzcMatrix$$6$$) {
  this.$getLabel$() && this.$getLabel$().update($pzcMatrix$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$61$$, $oldObj$$3$$) {
  D.$DvtMapAreaPeer$$.$superclass$.$animateUpdate$.call(this, $handler$$61$$, $oldObj$$3$$);
  this.$getDataLayer$().$_parentLayer$.$_renderArea$[this.$getLocation$()] = !1
};
D.$JSCompiler_prototypeAlias$$.$__recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$596$$, $dvtShape$$, $areaName$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$596$$, $dvtShape$$, $areaName$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$597_stroke$$109$$, $dvtShape$$1$$, $areaName$$1$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$597_stroke$$109$$);
  this.$_isSelected$ = this.$_bSelectable$ = !1;
  this.$_areaName$ = $areaName$$1$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  if($context$$597_stroke$$109$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$597_stroke$$109$$.getWidth()
  }
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = (0,D.$JSCompiler_set$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : null
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$110$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$110$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$74$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$74$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : null
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : null
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$30$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$30$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$23$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$23$$)
};
D.$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDropSiteFeedback$$() {
  return this.$_shape$.$copyShape$()
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$274$$, $y$$246$$) {
  var $dims$$70$$ = this.$getDimensions$();
  return $x$$274$$ >= $dims$$70$$.x && $x$$274$$ <= $dims$$70$$.x + $dims$$70$$.$w$ && $y$$246$$ >= $dims$$70$$.y && $y$$246$$ <= $dims$$70$$.y + $dims$$70$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$1$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().$clone$();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$1$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$6$$, $layerName$$19$$, $eventHandler$$6$$) {
  this.Init($tmap$$6$$, $layerName$$19$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$7$$, $layerName$$20$$, $eventHandler$$7$$) {
  this.$_tmap$ = $tmap$$7$$;
  this.$LayerName$ = $layerName$$20$$;
  this.$EventHandler$ = $eventHandler$$7$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$4$$, $pzcMatrix$$13$$) {
  this.$_animation$ && this.$_animation$.stop(!0);
  this.$PzcMatrix$ = $pzcMatrix$$13$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$4$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$4$$.$getClientId$()] = $dataLayer$$4$$;
  $dataLayer$$4$$.$render$(this.$PzcMatrix$);
  $dataLayer$$4$$.$HandleZoomEvent$(new D.$DvtZoomEvent$$("zoomed"), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$39_oldContainers$$ = $dataLayer$$4$$.$getAnimation$(), $animDur$$2$$ = $dataLayer$$4$$.$getAnimationDuration$();
    if("auto" == $anim$$39_oldContainers$$) {
      var $anim2_animHandler$$1_i$$814$$ = new D.$DvtDataAnimationHandler$$(this.$_tmap$.$getCtx$());
      (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim2_animHandler$$1_i$$814$$, this.$_oldDataLayer$.$_dataObjs$.concat(this.$_oldDataLayer$.$_areaObjs$), $dataLayer$$4$$.$_dataObjs$.concat($dataLayer$$4$$.$_areaObjs$));
      this.$_animation$ = $anim2_animHandler$$1_i$$814$$.$getAnimation$()
    }else {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$39_oldContainers$$)) {
        this.$_removeAnimRect$ = !0;
        for(var $anim1_bounds1$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $bounds2_oldNonScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)(this.$_oldDataLayer$), $anim2_animHandler$$1_i$$814$$ = 0;$anim2_animHandler$$1_i$$814$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_animHandler$$1_i$$814$$++) {
          var $rect$$50$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight());
          $rect$$50$$.$setFill$(null);
          $bounds2_oldNonScaledContainers$$[$anim2_animHandler$$1_i$$814$$].$addChild$($rect$$50$$)
        }
        for(var $newNonScaledContainers_oldScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$4$$), $anim2_animHandler$$1_i$$814$$ = 0;$anim2_animHandler$$1_i$$814$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler$$1_i$$814$$++) {
          $rect$$50$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $rect$$50$$.$setFill$(null), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler$$1_i$$814$$].$addChild$($rect$$50$$)
        }
        $anim1_bounds1$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$39_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$2$$);
        $bounds2_oldNonScaledContainers$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$);
        $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
        for($anim2_animHandler$$1_i$$814$$ = 0;$anim2_animHandler$$1_i$$814$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler$$1_i$$814$$++) {
          $rect$$50$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$50$$.$setFill$(null), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler$$1_i$$814$$].$addChild$($rect$$50$$)
        }
        for(var $newScaledContainers$$ = [$dataLayer$$4$$.$_dataAreaLayer$], $anim2_animHandler$$1_i$$814$$ = 0;$anim2_animHandler$$1_i$$814$$ < $newScaledContainers$$.length;$anim2_animHandler$$1_i$$814$$++) {
          $rect$$50$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$50$$.$setFill$(null), $newScaledContainers$$[$anim2_animHandler$$1_i$$814$$].$addChild$($rect$$50$$)
        }
        $anim2_animHandler$$1_i$$814$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$39_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$2$$);
        this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_tmap$.$getCtx$(), [$anim1_bounds1$$, $anim2_animHandler$$1_i$$814$$])
      }else {
        $anim$$39_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
        for($anim2_animHandler$$1_i$$814$$ = 0;$anim2_animHandler$$1_i$$814$$ < $anim$$39_oldContainers$$.length;$anim2_animHandler$$1_i$$814$$++) {
          $anim$$39_oldContainers$$[$anim2_animHandler$$1_i$$814$$].getParent().removeChild($anim$$39_oldContainers$$[$anim2_animHandler$$1_i$$814$$])
        }
      }
    }
    this.$PreDataLayerUpdate$();
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$42$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$42$$.$OnAnimationEnd$($dataLayer$$4$$)
      }, this);
      this.$_animation$.play()
    }
  }else {
    this.$PostDataLayerUpdate$(), (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$6$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$6$$] : null
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$14$$) {
  this.$PzcMatrix$ = $pzcMatrix$$14$$;
  for(var $id$$289$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$289$$].$render$($pzcMatrix$$14$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$2$$) {
  for(var $id$$290$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$290$$].reset($fadeOutContainer$$, $doNotResetAreas$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$749$$, $pzcMatrix$$15$$) {
  this.$PzcMatrix$ = $pzcMatrix$$15$$;
  for(var $id$$291$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$291$$].$HandleZoomEvent$($event$$749$$, $pzcMatrix$$15$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$16$$) {
  this.$PzcMatrix$ = $pzcMatrix$$16$$;
  for(var $id$$292$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$292$$].$HandlePanEvent$($pzcMatrix$$16$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$5_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$815$$ = 0;$i$$815$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$815$$++) {
      var $parent$$87$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$815$$].getParent();
      $parent$$87$$ && $parent$$87$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$815$$])
    }
  }
  if(this.$_removeAnimRect$) {
    this.$_removeAnimRect$ = !1;
    $newNonScaledContainers$$1_oldContainers$$1$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$5_newScaledContainers$$1$$);
    for($i$$815$$ = 0;$i$$815$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$815$$++) {
      $newNonScaledContainers$$1_oldContainers$$1$$[$i$$815$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$815$$].$getNumChildren$() - 1)
    }
    $dataLayer$$5_newScaledContainers$$1$$ = [$dataLayer$$5_newScaledContainers$$1$$.$_dataAreaLayer$];
    for($i$$815$$ = 0;$i$$815$$ < $dataLayer$$5_newScaledContainers$$1$$.length;$i$$815$$++) {
      $dataLayer$$5_newScaledContainers$$1$$[$i$$815$$].$removeChildAt$($dataLayer$$5_newScaledContainers$$1$$[$i$$815$$].$getNumChildren$() - 1)
    }
  }
  this.$PostDataLayerUpdate$();
  (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$);
  this.$_animation$ = null;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$, $layerName$$15$$, $labelDisplay$$1$$, $labelType$$2$$, $eventHandler$$) {
  this.Init($tmap$$, $layerName$$15$$, $labelDisplay$$1$$, $labelType$$2$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$1$$, $layerName$$16$$, $labelDisplay$$2$$, $labelType$$3$$, $eventHandler$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$1$$, $layerName$$16$$, $eventHandler$$1$$);
  this.$_labelDisplay$ = $labelDisplay$$2$$;
  this.$_labelType$ = $labelType$$3$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = null;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$LabelContainer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new D.$DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getDropTarget$ = (0,D.$JSCompiler_get$$)("$_dropTarget$");
D.$JSCompiler_StaticMethods_setAreaNames$$ = function $$JSCompiler_StaticMethods_setAreaNames$$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$16$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$16$$;
  for(var $area$$4$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$4$$] = !0, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$4$$] = !0
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$7$$) {
  return!this.$_labelInfo$ ? null : this.$_labelInfo$[$area$$7$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$8$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = D.$DvtPathUtils$$.$getDimensions$(D.$DvtPathUtils$$.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$84$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$84$$.$w$ && 0 < $dim$$84$$.$h$ && (this.$_layerDim$ = $dim$$84$$)
      }
    }
  }
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$12$$, $bForceUpdateArea_label$$80_labelText$$1_mapArea$$) {
  var $areaDim_areaShape$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$12$$];
  if($areaDim_areaShape$$ && (($bForceUpdateArea_label$$80_labelText$$1_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$12$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] || ($bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$, $area$$12$$, 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] = $bForceUpdateArea_label$$80_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim_areaShape$$, $bForceUpdateArea_label$$80_labelText$$1_mapArea$$), $bForceUpdateArea_label$$80_labelText$$1_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1] : null)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$12$$] && ($bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$], !$bForceUpdateArea_label$$80_labelText$$1_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$] ? $bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$80_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim_areaShape$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$), $bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$80_labelText$$1_mapArea$$, 
    [[$areaDim_areaShape$$.x, $areaDim_areaShape$$.y, $areaDim_areaShape$$.$w$, $areaDim_areaShape$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$] = $bForceUpdateArea_label$$80_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && 
    $bForceUpdateArea_label$$80_labelText$$1_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$13$$, $fadeInObjs$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$13$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]);
    var $label$$81$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$13$$];
    $label$$81$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$] ? $label$$81$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$81$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$13$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$]);
    $fadeInObjs$$ && ($fadeInObjs$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]), $label$$81$$ && ($fadeInObjs$$.push($label$$81$$), $fadeInObjs$$.push($label$$81$$.$_leaderLine$)))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateAreaShape$ = function $$JSCompiler_prototypeAlias$$$$updateAreaShape$$($area$$14$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = !1;
    var $cmd$$20_layerDim$$;
    this.$_paths$ = ($cmd$$20_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$20_layerDim$$.$w$, $cmd$$20_layerDim$$.$h$, this.$_tmap$.getWidth(), this.$_tmap$.getHeight(), this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$20_layerDim$$ = this.$_paths$[$area$$14$$];
  this.$AreaShapes$[$area$$14$$] && $cmd$$20_layerDim$$ ? this.$AreaShapes$[$area$$14$$].$setCmds$($cmd$$20_layerDim$$) : delete this.$AreaShapes$[$area$$14$$]
};
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$, $pzcMatrix$$2$$, $topLayerName$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$, $pzcMatrix$$2$$, $topLayerName$$);
  if($topLayerName$$ == this.$LayerName$) {
    for(var $area$$16$$ in this.$AreaShapes$) {
      (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$16$$, !0), this.$_renderArea$[$area$$16$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$16$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$3$$) {
  this.$_bUpdateShapesForRender$ = !0;
  for(var $area$$17$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$17$$, !0), this.$_renderArea$[$area$$17$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$17$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$18$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$18$$] || ((0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$18$$, !1), (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$18$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$19$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$19$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$19$$]);
      var $label$$82_leaderLine$$ = this.$_areaLabels$[$area$$19$$];
      $label$$82_leaderLine$$ && (this.$_renderedLabels$[$area$$19$$] = !1, this.$LabelContainer$.removeChild($label$$82_leaderLine$$), ($label$$82_leaderLine$$ = $label$$82_leaderLine$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$82_leaderLine$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$1$$, $fadeInObjs$$2$$) {
  for(var $i$$inline_8306$$ = 0;$i$$inline_8306$$ < $areas$$1$$.length;$i$$inline_8306$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_8306$$], !1), this.$_renderArea$[$areas$$1$$[$i$$inline_8306$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_8306$$], $fadeInObjs$$2$$)
  }
  for(var $id$$286$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$286$$].$discloseAreas$($areas$$1$$, $fadeInObjs$$2$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$2$$, $fadeOutObjs$$) {
  for(var $childAreaLayer_id$$287$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$287$$].$undiscloseAreas$($areas$$2$$, $fadeOutObjs$$)
  }
  $childAreaLayer_id$$287$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$797$$ = 0;$i$$797$$ < $areas$$2$$.length;$i$$797$$++) {
    var $areaName$$2$$ = $areas$$2$$[$i$$797$$];
    if(this.$Areas$[$areaName$$2$$]) {
      var $idx$$35$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$2$$);
      -1 !== $idx$$35$$ && (this.$_disclosed$.splice($idx$$35$$, 1), $fadeOutObjs$$.push(this.$Areas$[$areaName$$2$$]))
    }
    $childAreaLayer_id$$287$$ && $childAreaLayer_id$$287$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$2$$), $fadeOutObjs$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$1$$, $doNotResetAreas$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$1$$, $doNotResetAreas$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$1$$), this.$_disclosed$ = [])
};
D.$JSCompiler_StaticMethods___getObjectUnderPoint$$ = function $$JSCompiler_StaticMethods___getObjectUnderPoint$$$($JSCompiler_StaticMethods___getObjectUnderPoint$self$$, $x$$275$$, $y$$247$$) {
  for(var $id$$288$$ in $JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$) {
    if($JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$[$id$$288$$].contains($x$$275$$, $y$$247$$)) {
      return $JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$[$id$$288$$]
    }
  }
  return null
};
D.$DvtMapAreaLayer$$.prototype.$__showDropSiteFeedback$ = function $$DvtMapAreaLayer$$$$$__showDropSiteFeedback$$($obj$$349_stroke$$111_strokeWidth$$14$$) {
  this.$_dropSiteFeedback$ && (this.$AreaContainer$.removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = null);
  if($obj$$349_stroke$$111_strokeWidth$$14$$ && (this.$_dropSiteFeedback$ = $obj$$349_stroke$$111_strokeWidth$$14$$.$getDropSiteFeedback$())) {
    this.$_dropSiteFeedback$.$setFill$(new D.$DvtSolidFill$$(this.$_dropSiteCSSStyle$.$getStyle$("background-color"))), $obj$$349_stroke$$111_strokeWidth$$14$$ = this.$_dropSiteCSSStyle$.$getStyle$("border-width") ? this.$_dropSiteCSSStyle$.$getStyle$("border-width").substring(0, this.$_dropSiteCSSStyle$.$getStyle$("border-width").indexOf("px")) : 1, this.$_tmap$.$_bSupportsVectorEffects$ || ($obj$$349_stroke$$111_strokeWidth$$14$$ /= this.$PzcMatrix$.$_a$), $obj$$349_stroke$$111_strokeWidth$$14$$ = 
    new D.$DvtSolidStroke$$(this.$_dropSiteCSSStyle$.$getStyle$("border-color"), 1, $obj$$349_stroke$$111_strokeWidth$$14$$), this.$_tmap$.$_bSupportsVectorEffects$ && ($obj$$349_stroke$$111_strokeWidth$$14$$.$_bFixedWidth$ = !0), this.$_dropSiteFeedback$.$setStroke$($obj$$349_stroke$$111_strokeWidth$$14$$), this.$AreaContainer$.$addChild$(this.$_dropSiteFeedback$)
  }
  return this.$_dropSiteFeedback$
};
D.$DvtMapAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapAreaLayer$$$$$HandleZoomEvent$$($event$$746$$, $pzcMatrix$$4$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$746$$, $pzcMatrix$$4$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$20$$ in this.$Areas$) {
      this.$Areas$[$area$$20$$].$HandleZoomEvent$($pzcMatrix$$4$$)
    }
  }
  for($area$$20$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$20$$]) {
      var $label$$83$$ = this.$_areaLabels$[$area$$20$$];
      $label$$83$$ && $label$$83$$.update($pzcMatrix$$4$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$2$$, $layerName$$17$$, $labelDisplay$$3$$, $labelType$$4$$, $eventHandler$$2$$) {
  this.Init($tmap$$2$$, $layerName$$17$$, $labelDisplay$$3$$, $labelType$$4$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$3$$, $layerName$$18$$, $labelDisplay$$4$$, $labelType$$5$$, $eventHandler$$3$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$3$$, $layerName$$18$$, $labelDisplay$$4$$, $labelType$$5$$, $eventHandler$$3$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$) {
  var $widthRes$$1$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getWidth(), $heightRes$$2$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getHeight();
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_areaLayerImages$;
  for(var $i$$798$$ = 0;$i$$798$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length;$i$$798$$++) {
    var $height$$143_image$$21$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$[$i$$798$$], $source$$35$$ = $height$$143_image$$21$$.source, $width$$159$$ = $height$$143_image$$21$$.width, $height$$143_image$$21$$ = $height$$143_image$$21$$.height;
    if($source$$35$$ && -1 < $source$$35$$.search(".svg") || $width$$159$$ >= $widthRes$$1$$ && $height$$143_image$$21$$ >= $heightRes$$2$$ || $i$$798$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length - 1) {
      return $source$$35$$
    }
  }
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$747$$, $pzcMatrix$$7$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$747$$, $pzcMatrix$$7$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$.image.$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$4$$, $parentLayer$$, $clientId$$4$$, $eventHandler$$4$$, $options$$270$$) {
  this.Init($tmap$$4$$, $parentLayer$$, $clientId$$4$$, $eventHandler$$4$$, $options$$270$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$5$$, $parentLayer$$1$$, $clientId$$5$$, $eventHandler$$5$$, $options$$271$$) {
  this.$_tmap$ = $tmap$$5$$;
  this.$_clientId$ = $clientId$$5$$;
  this.$_options$ = $options$$271$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_dataAreaCollection$ = [];
  this.$_dataMarkerCollection$ = [];
  this.$_eventHandler$ = $eventHandler$$5$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$5$$.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$1$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$DvtMapDataLayer$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_StaticMethods_getNonScaledContainers$$ = function $$JSCompiler_StaticMethods_getNonScaledContainers$$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$11$$ = [], $i$$800$$ = 0;$i$$800$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$800$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$800$$].$isDrilled$() || $navigables$$11$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$800$$])
  }
  return $navigables$$11$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$12$$ = [], $i$$801$$ = 0;$i$$801$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$801$$++) {
    for(var $j$$107$$ = 0;$j$$107$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$107$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$801$$].$getLocation$() == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$107$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$801$$].$isDrilled$() || $navigables$$12$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$801$$]))
    }
  }
  return $navigables$$12$$
};
D.$JSCompiler_StaticMethods_addDataObject$$ = function $$JSCompiler_StaticMethods_addDataObject$$$($JSCompiler_StaticMethods_addDataObject$self$$, $obj$$350$$) {
  $JSCompiler_StaticMethods_addDataObject$self$$.$_dataMarkerCollection$.push($obj$$350$$);
  if($obj$$350$$) {
    $JSCompiler_StaticMethods_addDataObject$self$$.$_dataObjs$.push($obj$$350$$);
    $JSCompiler_StaticMethods_addDataObject$self$$.$_eventHandler$.$associate$($obj$$350$$.$getDisplayable$(), $obj$$350$$);
    var $label$$86$$ = $obj$$350$$.$getLabel$();
    $label$$86$$ && $JSCompiler_StaticMethods_addDataObject$self$$.$_eventHandler$.$associate$($label$$86$$, $obj$$350$$)
  }
};
D.$JSCompiler_StaticMethods_addAreaObject$$ = function $$JSCompiler_StaticMethods_addAreaObject$$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$351$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaCollection$.push($obj$$351$$);
  $obj$$351$$ && ($JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$351$$), $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$351$$.$getDisplayable$(), $obj$$351$$), $obj$$351$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$11$$) {
  if(this.$_selectionMode$ = $mode$$11$$) {
    this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return null != this.$_selectionMode$
};
D.$JSCompiler_StaticMethods__renderAreaAndLabel$$ = function $$JSCompiler_StaticMethods__renderAreaAndLabel$$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$1$$) {
  var $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$;
  $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$];
  var $areaDim$$1_displayable$$94_displayable$$inline_8323$$ = $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$.$getDisplayable$(), $pathToCopy$$inline_8324$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$.$getLocation$()];
  $pathToCopy$$inline_8324$$ ? ($areaDim$$1_displayable$$94_displayable$$inline_8323$$.$setCmds$($pathToCopy$$inline_8324$$.$getCmds$()), $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$ = !0) : ($JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$), -1 !== $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$ && 
  $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$, 1), $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$ = !1);
  if($JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$) {
    $areaDim$$1_displayable$$94_displayable$$inline_8323$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim$$1_displayable$$94_displayable$$inline_8323$$);
    if($JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$.$_boundRectangle$.length || ($areaDim$$1_displayable$$94_displayable$$inline_8323$$ = $areaDim$$1_displayable$$94_displayable$$inline_8323$$.$getDimensions$(), $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$.$_boundRectangle$.push($areaDim$$1_displayable$$94_displayable$$inline_8323$$)), $JSCompiler_inline_result$$399_areaObj$$inline_8322_idx$$inline_11300_label$$87$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return!0
  }
  return!1
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($areaLabelsToRemove_pzcMatrix$$8$$) {
  this.$_bFixPatterns$ = !0;
  this.$_pzcMatrix$ = $areaLabelsToRemove_pzcMatrix$$8$$;
  $areaLabelsToRemove_pzcMatrix$$8$$ = {};
  var $dataObjs$$ = this.$_dataObjs$.slice();
  $dataObjs$$.sort(function compare($areaLabelsToRemove_pzcMatrix$$8$$, $dataObjs$$) {
    return $areaLabelsToRemove_pzcMatrix$$8$$.$getSize$() < $dataObjs$$.$getSize$() ? 1 : $areaLabelsToRemove_pzcMatrix$$8$$.$getSize$() > $dataObjs$$.$getSize$() ? -1 : 0
  });
  for(var $i$$802$$ = 0;$i$$802$$ < $dataObjs$$.length;$i$$802$$++) {
    var $dataObj$$1_regionId$$ = $dataObjs$$[$i$$802$$], $displayable$$95$$ = $dataObj$$1_regionId$$.$getDisplayable$(), $label$$88$$ = $dataObj$$1_regionId$$.$getLabel$();
    if($label$$88$$) {
      var $container$$191$$ = new D.$DvtContainer$$($displayable$$95$$.$getCtx$());
      this.$_dataPointLayer$.$addChild$($container$$191$$);
      $container$$191$$.$addChild$($displayable$$95$$);
      $container$$191$$.$addChild$($label$$88$$);
      $dataObj$$1_regionId$$.$positionLabel$()
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$95$$)
    }
    ($dataObj$$1_regionId$$ = $dataObj$$1_regionId$$.$getLocation$()) && ($areaLabelsToRemove_pzcMatrix$$8$$[$dataObj$$1_regionId$$] = !0)
  }
  for($i$$802$$ = 0;$i$$802$$ < this.$_areaObjs$.length;$i$$802$$++) {
    $areaLabelsToRemove_pzcMatrix$$8$$[this.$_areaObjs$[$i$$802$$].$getLocation$()] && (this.$_areaObjs$[$i$$802$$].$_label$ = null), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$802$$) || $i$$802$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$3$$, $fadeInObjs$$3$$, $pzcMatrix$$9_regionId$$1$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$9_regionId$$1$$;
  for(var $drilledAreas$$ = [], $j$$108$$ = 0;$j$$108$$ < $areas$$3$$.length;$j$$108$$++) {
    for(var $i$$803_label$$89_leaderLine$$1$$ = 0;$i$$803_label$$89_leaderLine$$1$$ < this.$_areaObjs$.length;$i$$803_label$$89_leaderLine$$1$$++) {
      if(this.$_areaObjs$[$i$$803_label$$89_leaderLine$$1$$].$getLocation$() == $areas$$3$$[$j$$108$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$803_label$$89_leaderLine$$1$$].$getLocation$());
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$803_label$$89_leaderLine$$1$$);
        var $displayable$$96$$ = this.$_areaObjs$[$i$$803_label$$89_leaderLine$$1$$].$getDisplayable$();
        $fadeInObjs$$3$$.push($displayable$$96$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$96$$, $pzcMatrix$$9_regionId$$1$$);
        if($i$$803_label$$89_leaderLine$$1$$ = this.$_areaObjs$[$i$$803_label$$89_leaderLine$$1$$].$getLabel$()) {
          $fadeInObjs$$3$$.push($i$$803_label$$89_leaderLine$$1$$), ($i$$803_label$$89_leaderLine$$1$$ = $i$$803_label$$89_leaderLine$$1$$.$_leaderLine$) && $fadeInObjs$$3$$.push($i$$803_label$$89_leaderLine$$1$$)
        }
        break
      }
    }
  }
  for($i$$803_label$$89_leaderLine$$1$$ = 0;$i$$803_label$$89_leaderLine$$1$$ < this.$_dataObjs$.length;$i$$803_label$$89_leaderLine$$1$$++) {
    for($j$$108$$ = 0;$j$$108$$ < $areas$$3$$.length;$j$$108$$++) {
      $pzcMatrix$$9_regionId$$1$$ = this.$_dataObjs$[$i$$803_label$$89_leaderLine$$1$$].$getLocation$(), $displayable$$96$$ = this.$_dataObjs$[$i$$803_label$$89_leaderLine$$1$$].$getDisplayable$(), null != $pzcMatrix$$9_regionId$$1$$ ? $pzcMatrix$$9_regionId$$1$$ == $areas$$3$$[$j$$108$$] && (this.$_dataPointLayer$.$addChild$($displayable$$96$$), $fadeInObjs$$3$$.push($displayable$$96$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$96$$), $fadeInObjs$$3$$.push($displayable$$96$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$4$$, $fadeOutObjs$$2$$) {
  for(var $j$$109$$ = 0;$j$$109$$ < $areas$$4$$.length;$j$$109$$++) {
    for(var $i$$804_label$$90$$ = 0;$i$$804_label$$90$$ < this.$_areaObjs$.length;$i$$804_label$$90$$++) {
      if(this.$_areaObjs$[$i$$804_label$$90$$].$getLocation$() == $areas$$4$$[$j$$109$$]) {
        this.$_areaObjs$[$i$$804_label$$90$$].$isDrilled$() && this.$_areaObjs$[$i$$804_label$$90$$].$setDrilled$(!1);
        this.$_areaObjs$[$i$$804_label$$90$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$804_label$$90$$]);
        var $idx$$37$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$4$$[$j$$109$$]);
        if(-1 < $idx$$37$$ && (this.$_disclosed$.splice($idx$$37$$, 1), $fadeOutObjs$$2$$.push(this.$_areaObjs$[$i$$804_label$$90$$].$getDisplayable$()), $i$$804_label$$90$$ = this.$_areaObjs$[$i$$804_label$$90$$].$getLabel$())) {
          $fadeOutObjs$$2$$.push($i$$804_label$$90$$), $fadeOutObjs$$2$$.push($i$$804_label$$90$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$1$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$110_selectedObjs$$ = this.$_selectionHandler$.getSelection(), $i$$807_label$$93$$ = 0;$i$$807_label$$93$$ < $j$$110_selectedObjs$$.length;$i$$807_label$$93$$++) {
      (!$doNotResetAreas$$1$$ || $doNotResetAreas$$1$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$1$$, $j$$110_selectedObjs$$[$i$$807_label$$93$$].$getLocation$())) && this.$_selectionHandler$.$removeFromSelection$($j$$110_selectedObjs$$[$i$$807_label$$93$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$110_selectedObjs$$ = 0;$j$$110_selectedObjs$$ < this.$_drilled$.length;$j$$110_selectedObjs$$++) {
      for($i$$807_label$$93$$ = 0;$i$$807_label$$93$$ < this.$_areaObjs$.length;$i$$807_label$$93$$++) {
        if(this.$_areaObjs$[$i$$807_label$$93$$].$getLocation$() == this.$_drilled$[$j$$110_selectedObjs$$]) {
          this.$_areaObjs$[$i$$807_label$$93$$].$setDrilled$(!1);
          var $displayable$$98$$ = this.$_areaObjs$[$i$$807_label$$93$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$98$$);
          $fadeOutObjs$$4$$.push($displayable$$98$$);
          if($i$$807_label$$93$$ = this.$_areaObjs$[$i$$807_label$$93$$].$getLabel$()) {
            $i$$807_label$$93$$.update(this.$_pzcMatrix$), $fadeOutObjs$$4$$.push($i$$807_label$$93$$), $fadeOutObjs$$4$$.push($i$$807_label$$93$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$807_label$$93$$ = 0;$i$$807_label$$93$$ < this.$_dataObjs$.length;$i$$807_label$$93$$++) {
        if(this.$_dataObjs$[$i$$807_label$$93$$].$getLocation$() == this.$_drilled$[$j$$110_selectedObjs$$]) {
          $displayable$$98$$ = this.$_dataObjs$[$i$$807_label$$93$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$98$$);
          $fadeOutObjs$$4$$.push($displayable$$98$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$748$$, $pzcMatrix$$10$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$10$$;
  var $i$$808_zoom$$12$$ = $pzcMatrix$$10$$.$_a$, $areaObjs_dataObjs$$1_j$$111_type$$238$$ = $event$$748$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs_dataObjs$$1_j$$111_type$$238$$) {
    this.$_bFixPatterns$ = !1;
    for($areaObjs_dataObjs$$1_j$$111_type$$238$$ = 0;$areaObjs_dataObjs$$1_j$$111_type$$238$$ < this.$_areaObjs$.length;$areaObjs_dataObjs$$1_j$$111_type$$238$$++) {
      var $displayable$$99$$ = this.$_areaObjs$[$areaObjs_dataObjs$$1_j$$111_type$$238$$].$getDisplayable$(), $fill$$75$$ = $displayable$$99$$.$_ptFill$;
      if($fill$$75$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$75$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$808_zoom$$12$$, null, null, 1 / $i$$808_zoom$$12$$));
        $displayable$$99$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs_dataObjs$$1_j$$111_type$$238$$ = this.$_areaObjs$;
  for($i$$808_zoom$$12$$ = 0;$i$$808_zoom$$12$$ < $areaObjs_dataObjs$$1_j$$111_type$$238$$.length;$i$$808_zoom$$12$$++) {
    $areaObjs_dataObjs$$1_j$$111_type$$238$$[$i$$808_zoom$$12$$].$HandleZoomEvent$($pzcMatrix$$10$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs_dataObjs$$1_j$$111_type$$238$$ = this.$_dataObjs$;
    for($i$$808_zoom$$12$$ = 0;$i$$808_zoom$$12$$ < $areaObjs_dataObjs$$1_j$$111_type$$238$$.length;$i$$808_zoom$$12$$++) {
      $areaObjs_dataObjs$$1_j$$111_type$$238$$[$i$$808_zoom$$12$$].$HandleZoomEvent$($pzcMatrix$$10$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = null)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$353_rowKeys$$3$$) {
  if(this.$_selectionHandler$) {
    $obj$$353_rowKeys$$3$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$353_rowKeys$$3$$, !1), this.$_eventHandler$.$fireSelectionEvent$($obj$$353_rowKeys$$3$$));
    $obj$$353_rowKeys$$3$$ = [];
    for(var $selection$$35$$ = this.$_selectionHandler$.getSelection(), $i$$809$$ = 0;$i$$809$$ < $selection$$35$$.length;$i$$809$$++) {
      $obj$$353_rowKeys$$3$$.push($selection$$35$$[$i$$809$$].getId())
    }
    return $obj$$353_rowKeys$$3$$
  }
  return null
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$29$$ = [], $selection$$36$$ = this.$_selectionHandler$.getSelection(), $i$$810$$ = 0;$i$$810$$ < $selection$$36$$.length;$i$$810$$++) {
    $displayables$$29$$.push($selection$$36$$[$i$$810$$].$getDisplayable$())
  }
  return $displayables$$29$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$11$$, $manager$$30$$) {
  this.Init($tmap$$11$$, $manager$$30$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$12$$, $manager$$31$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init.call(this, $tmap$$12$$, $manager$$31$$);
  this.$_tmap$ = $tmap$$12$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$771$$) {
  return this.$isNavigationEvent$($event$$771$$) && !$event$$771$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$772$$) {
  var $focusObj$$3_keyCode$$50$$ = $event$$772$$.keyCode;
  if(221 == $focusObj$$3_keyCode$$50$$) {
    var $focusObj$$3_keyCode$$50$$ = this.$_eventManager$.$getFocus$(), $navigables$$15$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj$$3_keyCode$$50$$ instanceof D.$DvtMapAreaPeer$$ && 0 < $navigables$$15$$.length && ($focusObj$$3_keyCode$$50$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$3_keyCode$$50$$, $event$$772$$, $navigables$$15$$));
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$3_keyCode$$50$$)
  }else {
    219 == $focusObj$$3_keyCode$$50$$ ? ($focusObj$$3_keyCode$$50$$ = this.$_eventManager$.$getFocus$(), $navigables$$15$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj$$3_keyCode$$50$$ instanceof D.$DvtMapAreaPeer$$) && 0 < $navigables$$15$$.length && ($focusObj$$3_keyCode$$50$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$3_keyCode$$50$$, $event$$772$$, $navigables$$15$$)), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, 
    $focusObj$$3_keyCode$$50$$)) : ($focusObj$$3_keyCode$$50$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$772$$), this.$isNavigationEvent$($event$$772$$) && !$event$$772$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$3_keyCode$$50$$))
  }
  return $focusObj$$3_keyCode$$50$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$773$$) {
  return 32 == $event$$773$$.keyCode && $event$$773$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$774_keyCode$$51$$) {
  var $isNavigable$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$774_keyCode$$51$$);
  if(!$isNavigable$$ && ($event$$774_keyCode$$51$$ = $event$$774_keyCode$$51$$.keyCode, 219 == $event$$774_keyCode$$51$$ || 221 == $event$$774_keyCode$$51$$)) {
    $isNavigable$$ = !0
  }
  return $isNavigable$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$605$$, $callback$$162$$, $callbackObj$$110$$) {
  this.Init($context$$605$$, $callback$$162$$, $callbackObj$$110$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$606$$, $callback$$163$$, $callbackObj$$111$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$606$$, $callback$$163$$, $callbackObj$$111$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$111$$;
  this.$_bPassOnEvent$ = !1
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$16$$) {
  if($logicalObj$$16$$ && $logicalObj$$16$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$16$$.$getDataLayer$().$getClientId$()]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$5$$, $handler$$65$$) {
  this.$_selectionHandlers$[$dataLayerId$$5$$] = $handler$$65$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$10$$, $obj$$358$$) {
  var $selectionHandler$$14$$ = this.$_selectionHandlers$[$clientId$$10$$];
  $selectionHandler$$14$$ && $selectionHandler$$14$$.$removeFromSelection$($obj$$358$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$11_selectionHandler$$15$$) {
  ($clientId$$11_selectionHandler$$15$$ = this.$_selectionHandlers$[$clientId$$11_selectionHandler$$15$$]) && $clientId$$11_selectionHandler$$15$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$760$$) {
  var $obj$$359$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$760$$.target);
  $obj$$359$$ && ($obj$$359$$.$getShowPopupBehaviors$ && $obj$$359$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$359$$.$getDataLayer$().$getClientId$());
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$760$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$761$$) {
  this.$_tmap$.$_eventClientId$ = null;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$761$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$762$$) {
  var $obj$$360$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$762$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$360$$);
  if(!$obj$$360$$ || !$obj$$360$$.$isSelectable$ || !$obj$$360$$.$isSelectable$()) {
    for(var $clientId$$12$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$12$$].$processClick$(null, $event$$762$$.ctrlKey)) {
        var $selectionEvent$$2$$ = new D.$DvtSelectionEvent$$([]);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$2$$, "clientId", $clientId$$12$$);
        this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$2$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$762$$);
  this.$_handleClick$($obj$$360$$, $event$$762$$.pageX, $event$$762$$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$361$$, $pageX$$11$$, $pageY$$11$$) {
  if($obj$$361$$ instanceof D.$DvtMapObjPeer$$) {
    var $callback$$164$$ = $obj$$361$$.$getLinkCallback$();
    $callback$$164$$ ? $callback$$164$$.call() : null != $obj$$361$$.$getAction$() ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $obj$$361$$, $pageX$$11$$, $pageY$$11$$) : $obj$$361$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$361$$.$getDataLayer$().$getClientId$())
  }
};
D.$JSCompiler_StaticMethods_HandleAction$$ = function $$JSCompiler_StaticMethods_HandleAction$$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$362_offset$$34$$, $pageX$$12$$, $pageY$$12$$) {
  var $actionEvent$$ = new D.$DvtMapActionEvent$$($obj$$362_offset$$34$$.$getClientId$(), $obj$$362_offset$$34$$.getId(), $obj$$362_offset$$34$$.$getAction$());
  (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$, "clientId", $obj$$362_offset$$34$$.$getDataLayer$().$getClientId$());
  null != $pageX$$12$$ && null != $pageY$$12$$ && ($obj$$362_offset$$34$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_HandleAction$self$$.$_tmap$.$getCtx$(), $pageX$$12$$, $pageY$$12$$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$, "pointXY", {x:$obj$$362_offset$$34$$.x, y:$obj$$362_offset$$34$$.y}));
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$)
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$363$$) {
  var $clientId$$13$$ = null, $dataLayer$$11_mapLayer$$1$$ = null, $clickedObj$$ = null;
  $obj$$363$$ && ($obj$$363$$ instanceof D.$DvtMapObjPeer$$ ? $clickedObj$$ = $obj$$363$$.$getDisplayable$() : $obj$$363$$ instanceof D.$DvtMapArea$$ && ($clickedObj$$ = $obj$$363$$), $obj$$363$$.$getDataLayer$ && ($dataLayer$$11_mapLayer$$1$$ = $obj$$363$$.$getDataLayer$(), $clientId$$13$$ = $dataLayer$$11_mapLayer$$1$$.$getClientId$(), $dataLayer$$11_mapLayer$$1$$ = $dataLayer$$11_mapLayer$$1$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_8533$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8533$$.$_clickedLayerName$ = $dataLayer$$11_mapLayer$$1$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8533$$.$_clickedDataLayerId$ = $clientId$$13$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8533$$.$_clickedObject$ = $clickedObj$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($drillEvent_event$$763_obj$$364$$) {
  $drillEvent_event$$763_obj$$364$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent_event$$763_obj$$364$$.target);
  this.$getSelectionHandler$($drillEvent_event$$763_obj$$364$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$763_obj$$364$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$763_obj$$364$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$764$$) {
  var $eventConsumed$$7$$ = !0, $keyCode$$49$$ = $event$$764$$.keyCode, $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$ = this.$getFocus$(), $callback$$165_focusDisp$$1_toFit$$inline_8539$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$getDisplayable$();
  9 != $keyCode$$49$$ && this.$_bPassOnEvent$ ? ($callback$$165_focusDisp$$1_toFit$$inline_8539$$.$fireKeyboardListener$($event$$764$$), $event$$764$$.preventDefault()) : (48 == $keyCode$$49$$ || 96 == $keyCode$$49$$) && $event$$764$$.ctrlKey && $event$$764$$.shiftKey ? (this.$_tmap$.$resetMap$(), $event$$764$$.preventDefault()) : 220 == $keyCode$$49$$ ? (($JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$ = this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$ instanceof 
  D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.isCollapsed()) : $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$isDisclosed$())), 
  $event$$764$$.preventDefault()) : 13 == $keyCode$$49$$ ? $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$ instanceof D.$DvtMapObjPeer$$ && (($callback$$165_focusDisp$$1_toFit$$inline_8539$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$getLinkCallback$()) ? $callback$$165_focusDisp$$1_toFit$$inline_8539$$.call() : null != $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$getAction$() ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, 
  $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$) : $event$$764$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $event$$764$$.preventDefault()) : 32 == $keyCode$$49$$ && $event$$764$$.ctrlKey ? ((0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$, 
  !0), $event$$764$$.preventDefault()) : (48 == $keyCode$$49$$ || 96 == $keyCode$$49$$) && $event$$764$$.ctrlKey ? ($event$$764$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$ = this.$_tmap$, $callback$$165_focusDisp$$1_toFit$$inline_8539$$ || ($callback$$165_focusDisp$$1_toFit$$inline_8539$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$_zoomToFitObject$), $callback$$165_focusDisp$$1_toFit$$inline_8539$$ || ($callback$$165_focusDisp$$1_toFit$$inline_8539$$ = 
  $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$_clickedObject$), $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$_zoomToFitBounds$($callback$$165_focusDisp$$1_toFit$$inline_8539$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$), $event$$764$$.preventDefault()) : 9 == $keyCode$$49$$ && $callback$$165_focusDisp$$1_toFit$$inline_8539$$ instanceof D.$DvtCustomDataItem$$ ? !$event$$764$$.shiftKey && 
  $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$isShowingKeyboardFocusEffect$() ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$hideKeyboardFocusEffect$(), $callback$$165_focusDisp$$1_toFit$$inline_8539$$.$fireKeyboardListener$($event$$764$$), $event$$764$$.preventDefault(), this.$_bPassOnEvent$ = !0) : ($event$$764$$.shiftKey && this.$_bPassOnEvent$ ? (this.$ShowFocusEffect$($event$$764$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$), 
  $event$$764$$.preventDefault()) : (this.$_bPassOnEvent$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_8538_focusObj$$2_legendPanel$$.$showKeyboardFocusEffect$(), $eventConsumed$$7$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$764$$)), this.$_bPassOnEvent$ = !1) : $eventConsumed$$7$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$764$$);
  return $eventConsumed$$7$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$765$$) {
  if(!(0,D.$JSCompiler_StaticMethods_GetEventInfo$$)(this, $event$$765$$, "panned")) {
    var $obj$$365$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$765$$.target);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$365$$);
    if($obj$$365$$ instanceof D.$DvtThematicMap$$) {
      for(var $clientId$$14$$ in this.$_selectionHandlers$) {
        if(this.$_selectionHandlers$[$clientId$$14$$].$processClick$(null, $event$$765$$.ctrlKey)) {
          for(var $selectedObjs$$2_selectionEvent$$3$$ = this.$_selectionHandlers$[$clientId$$14$$].getSelection(), $selectedIds$$10$$ = [], $i$$834$$ = 0;$i$$834$$ < $selectedObjs$$2_selectionEvent$$3$$.length;$i$$834$$++) {
            $selectedIds$$10$$.push($selectedObjs$$2_selectionEvent$$3$$[$i$$834$$].getId())
          }
          $selectedObjs$$2_selectionEvent$$3$$ = new D.$DvtSelectionEvent$$($selectedIds$$10$$);
          this.$_callback$.call(this.$_callbackObj$, $selectedObjs$$2_selectionEvent$$3$$)
        }
      }
    }
    D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$765$$);
    this.$_handleClick$($obj$$365$$, $event$$765$$.$touch$.pageX, $event$$765$$.$touch$.pageY)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$766_obj$$366$$) {
  $event$$766_obj$$366$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$766_obj$$366$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$766_obj$$366$$ && $event$$766_obj$$366$$.$getShowPopupBehaviors$ && $event$$766_obj$$366$$.$getDataLayer$ ? $event$$766_obj$$366$$.$getDataLayer$().$getClientId$() : null
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$767_obj$$367$$) {
  $event$$767_obj$$367$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$767_obj$$367$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$767_obj$$367$$ && $event$$767_obj$$367$$.$getShowPopupBehaviors$ && $event$$767_obj$$367$$.$getDataLayer$ ? $event$$767_obj$$367$$.$getDataLayer$().$getClientId$() : null
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($drillEvent$$1_event$$768$$) {
  var $obj$$368$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent$$1_event$$768$$.target);
  $obj$$368$$ && (this.$getSelectionHandler$($obj$$368$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$368$$, $drillEvent$$1_event$$768$$.ctrlKey), $drillEvent$$1_event$$768$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$768$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchActionsEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchActionsEnd$$($event$$769$$, $touch$$53$$) {
  var $obj$$369$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$769$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$369$$);
  D.$DvtThematicMapEventManager$$.$superclass$.$HandleTouchActionsEnd$.call(this, $event$$769$$, $touch$$53$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$770_options$$273$$, $categories$$30_hoverBehaviorDelay$$6_obj$$370$$, $bOver$$13_rolloverEvent$$8$$) {
  $event$$770_options$$273$$ = this.$_tmap$.$getOptions$();
  "dim" == $event$$770_options$$273$$.hoverBehavior && ($categories$$30_hoverBehaviorDelay$$6_obj$$370$$ = $categories$$30_hoverBehaviorDelay$$6_obj$$370$$.$getCategories$ ? $categories$$30_hoverBehaviorDelay$$6_obj$$370$$.$getCategories$() : [], $event$$770_options$$273$$.highlightedCategories = $bOver$$13_rolloverEvent$$8$$ ? $categories$$30_hoverBehaviorDelay$$6_obj$$370$$.slice() : null, $bOver$$13_rolloverEvent$$8$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$13_rolloverEvent$$8$$ ? "categoryRollOver" : 
  "categoryRollOut", $event$$770_options$$273$$.highlightedCategories), $categories$$30_hoverBehaviorDelay$$6_obj$$370$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$770_options$$273$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$13_rolloverEvent$$8$$, (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$).concat((0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$)), $categories$$30_hoverBehaviorDelay$$6_obj$$370$$, "any" == $event$$770_options$$273$$.highlightMatch))
};
D.$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  var $options$$274$$ = this.$_tmap$.$getOptions$();
  return"none" !== $options$$274$$.panning || "none" !== $options$$274$$.zooming ? "touchHold" : "touchStart" === $options$$274$$.touchResponse ? "touchStart" : "auto"
};
D.$JSCompiler_prototypeAlias$$.$StoreInfoByEventType$ = function $$JSCompiler_prototypeAlias$$$$StoreInfoByEventType$$($key$$127$$) {
  return"panned" == $key$$127$$ ? !1 : D.$DvtThematicMapEventManager$$.$superclass$.$StoreInfoByEventType$.call(this, $key$$127$$)
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$9$$) {
  this.Init($tmap$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$DvtThematicMapJsonParser$$.prototype.Init = function $$DvtThematicMapJsonParser$$$$Init$($tmap$$10$$) {
  this.$_tmap$ = $tmap$$10$$;
  this.$_isCustomBasemap$ = !1;
  this.$_areaLayerStyle$ = null;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_customAreaLayerImages$ = {};
  this.$_customMarkerDefs$ = {}
};
D.$DvtThematicMapJsonParser$$.prototype.parse = function $$DvtThematicMapJsonParser$$$$parse$($options$$275$$) {
  var $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = $options$$275$$.animationDuration;
  "string" == typeof $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ ? "ms" == $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.slice(-2) ? $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = 
  (0,window.parseInt)($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.slice(0, -2)) / 1E3 : "s" == $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.slice(-1) && 
  ($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.slice(0, -1))) : $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ /= 
  1E3;
  this.$_tmap$.$setAnimationDuration$($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$275$$.animationOnDisplay ? "alphaFade" : $options$$275$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$275$$.animationOnMapChange ? "alphaFade" : $options$$275$$.animationOnMapChange;
  this.$_isCustomBasemap$ = null != $options$$275$$.source;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = this.$_tmap$, $attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$ = this.$_isCustomBasemap$ ? "$" + $options$$275$$.basemap : $options$$275$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.$_mapName$ != 
  $attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.$_mapName$ = $attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$;
  this.$_tmap$.$setFeaturesOff$($options$$275$$.featuresOff);
  this.$_tmap$.$_controlPanelBehavior$ = $options$$275$$.controlPanelBehavior;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = $options$$275$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = "shortDescOnly" : "labelAndShortDesc" == 
  $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ && ($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$;
  ($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = $options$$275$$.popups) && this.$_tmap$.$setShowPopupBehaviors$(this.$_getShowPopupBehaviors$($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$));
  this.$_tmap$.$setDrillMode$($options$$275$$.drilling);
  this.$_tmap$.$_animationOnDrill$ = $options$$275$$.animationOnDrill;
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$275$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$275$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$275$$.panning;
  this.$_tmap$.$_zooming$ = "auto" == $options$$275$$.zooming;
  this.$_tmap$.$_initialCenterX$ = $options$$275$$.panX;
  this.$_tmap$.$_initialCenterY$ = $options$$275$$.panY;
  this.$_tmap$.$_initialZoom$ = $options$$275$$.zoom;
  (0,window.isNaN)($options$$275$$.maxZoom) || ($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = window.Math.max($options$$275$$.maxZoom, 1), this.$_tmap$.$_maxZoomFactor$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$);
  $options$$275$$._legend && (this.$_tmap$.$_legendData$ = $options$$275$$._legend);
  $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = $options$$275$$.styleDefaults;
  (0,D.$JSCompiler_StaticMethods_parseComponentJson$$)(this.$_tmap$, $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$);
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.areaStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.labelStyle);
  this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.dropTargetStyle);
  this.$_tmap$.$_styleDefaults$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$;
  if(this.$_isCustomBasemap$ && $options$$275$$.sourceXml) {
    for(var $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = (new D.$DvtXmlParser$$).parse($options$$275$$.sourceXml).$getChildNodes$(), $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$, $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$, 
    $attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$ = 0;$attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.length;$attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$++) {
      if($childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$[$attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$], $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$ = $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$.getName(), 
      "layer" == $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$) {
        $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$ = $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$;
        $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$ = $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.$getChildNodes$();
        $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$ = $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.$getAttr$("id");
        for(var $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$ = void 0, $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ = void 0, $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$ = [], $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$ = 0;$children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$ < 
        $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$.length;$children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$++) {
          if($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$ = $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$[$children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$], $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.getName(), 
          "image" == $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$) {
            $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ = {};
            $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$.source = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$getAttr$("source");
            $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$.width = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$getAttr$("width");
            $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$.height = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$getAttr$("height");
            var $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$getAttr$("bidi"), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$getAttr$("dir");
            $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$.dir = "true" == $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$ || "rtl" == $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$ ? "rtl" : "ltr";
            $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$.push($JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$)
          }
        }
        this.$_customAreaLayerImages$[$areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$] = $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$
      }else {
        if("points" == $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$) {
          $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$ = $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$.$getChildNodes$();
          $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$ = $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$ = void 0;
          $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$ = {};
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$ = {};
          for($JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ = 0;$JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ < $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$.length;$JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$++) {
            $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$ = $childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$[$JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$], $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$ = $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.getName(), 
            "point" == $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$ && ($children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$[$areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.$getAttr$("name")] = [$areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.$getAttr$("x"), $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.$getAttr$("y")], 
            $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$[$areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.$getAttr$("name")] = [null, $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.$getAttr$("longLabel")])
          }
          D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$, $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$, null, null, 1)
        }
      }
    }
  }
  $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$ = $options$$275$$.areaLayers;
  $attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$ = this.$_tmap$.$_mapName$;
  for($childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$ = 0;$childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$.length;$childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$++) {
    if($areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$ = D.$DvtJSONUtils$$.$merge$($JSCompiler_StaticMethods_setMapName$self$$inline_11354_animDur$$inline_8555_areaLayers$$inline_8573_childNodes$$inline_8567_maxZoomFactor$$inline_11388_popups$$inline_8557_styles$$inline_8563_tooltipDisplay$$inline_8556$$[$childNodes$$inline_11395_childNodes$$inline_11407_i$$inline_8575_node$$inline_8568$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), 
    $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$ = $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.layer) {
      $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.areaStyle);
      $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.labelStyle);
      if(this.$_isCustomBasemap$) {
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$ = $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$, $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.labelDisplay, 
        $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.labelType, this.$_tmap$.$getEventManager$());
        $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$ = this.$_customAreaLayerImages$[$children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$];
        $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$ = null;
        $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$_tmap$.$getCtx$());
        if($children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$ && 0 < $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$.length) {
          var $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$ = $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$[0].width, $context$$inline_11426_refHeight$$inline_11419$$ = $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$[0].height;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$_layerWidth$ = $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$_layerHeight$ = $context$$inline_11426_refHeight$$inline_11419$$;
          for(var $area$$inline_11427_locImages$$inline_11420$$ = [], $areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$ = 0;$areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$ < $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$.length;$areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$++) {
            $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ && "rtl" == $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$[$areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$].dir ? $area$$inline_11427_locImages$$inline_11420$$.push($children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$[$areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$]) : 
            !$JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ && "ltr" == $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$[$areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$].dir && $area$$inline_11427_locImages$$inline_11420$$.push($children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$[$areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$])
          }
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$_areaLayerImages$ = 0 < $area$$inline_11427_locImages$$inline_11420$$.length ? $area$$inline_11427_locImages$$inline_11420$$ : $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$);
          $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$_imageSrc$, 0, 0, $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$, 
          $context$$inline_11426_refHeight$$inline_11419$$)
        }
        $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$, {image:[null, null]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$.$AreaShapes$ = 
        {image:$bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$})
      }else {
        $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$, $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.labelDisplay, $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.labelType, this.$_tmap$.$getEventManager$());
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$, $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$);
        $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$ = $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$;
        $areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$;
        $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$ = {};
        $context$$inline_11426_refHeight$$inline_11419$$ = this.$_tmap$.$getCtx$();
        $area$$inline_11427_locImages$$inline_11420$$ = void 0;
        for($area$$inline_11427_locImages$$inline_11420$$ in $areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$) {
          $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$[$area$$inline_11427_locImages$$inline_11420$$] = new D.$DvtPath$$($context$$inline_11426_refHeight$$inline_11419$$);
          if(($areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$ = this.$_areaLayerStyle$.$getStyle$("border-color")) && "transparent" != $areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$) {
            $areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$ = new D.$DvtSolidStroke$$($areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$), this.$_tmap$.$_bSupportsVectorEffects$ && ($areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$.$_bFixedWidth$ = !0), $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$[$area$$inline_11427_locImages$$inline_11420$$].$setStroke$($areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$)
          }
          $areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$ = this.$_areaLayerStyle$.$getStyle$("background-color");
          "transparent" != $areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$ ? $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$[$area$$inline_11427_locImages$$inline_11420$$].$setSolidFill$($areaNames$$inline_11424_backgroundColor$$inline_11430_borderColor$$inline_11428_i$$inline_11421_stroke$$inline_11429$$) : $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$[$area$$inline_11427_locImages$$inline_11420$$].$setFill$(null)
        }
        $JSCompiler_temp_const$$9329_i$$inline_11412_image$$inline_11401_isRTL$$inline_11417_nodeName$$inline_11398$$.$AreaShapes$ = $bidi$$inline_11402_refWidth$$inline_11418_shape$$inline_11416_shapes$$inline_11425$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$);
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$inline_11355_basemap$$inline_8574_i$$inline_8570$$, $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$);
        $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$.$_labelInfo$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11414_areaNames$$inline_8579_dir$$inline_11403_labels$$inline_11411_node$$inline_11397_values$$inline_11436$$;
        $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$);
        $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$.$_children$ = $children$$inline_11439_i$$inline_11400_images$$inline_11415_layer$$inline_8577_points$$inline_11410$$
      }
      $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
      $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$.$setAnimation$("auto" == $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.animationOnLayerChange);
      $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$);
      $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.areaDataLayer && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, [$areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.areaDataLayer], $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$, null, !0);
      $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.pointDataLayers && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $areaLayer$$inline_8576_layerName$$inline_11396_node$$inline_11408_nodeName$$inline_8569_xmlNode$$inline_11394$$.pointDataLayers, $images$$inline_11399_mapLayer$$inline_8578_nodeName$$inline_11409$$, null, !1)
    }
  }
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $options$$275$$.pointDataLayers, null, null, !1)
};
D.$JSCompiler_StaticMethods_ParseDataLayers$$ = function $$JSCompiler_StaticMethods_ParseDataLayers$$$($JSCompiler_StaticMethods_ParseDataLayers$self$$, $dataLayers$$6$$, $parentLayer$$6$$, $topLayerName$$2$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$) {
  if($dataLayers$$6$$) {
    for(var $i$$836$$ = 0;$i$$836$$ < $dataLayers$$6$$.length;$i$$836$$++) {
      var $dataLayerOptions$$1_initSelections$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$6$$[$i$$836$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      if($dataLayerOptions$$1_initSelections$$.markerDefs) {
        var $area$$inline_8636_dataLayer$$12_markerDefs$$ = $dataLayerOptions$$1_initSelections$$.markerDefs, $markerDef$$16$$;
        for($markerDef$$16$$ in $area$$inline_8636_dataLayer$$12_markerDefs$$) {
          if(!$JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$16$$]) {
            var $initDisclosed_xmlNode$$67$$ = (new D.$DvtXmlParser$$).parse($area$$inline_8636_dataLayer$$12_markerDefs$$[$markerDef$$16$$]);
            $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$16$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getCtx$(), $initDisclosed_xmlNode$$67$$)
          }
        }
      }
      $dataLayerOptions$$1_initSelections$$.legend && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_legendData$ = $dataLayerOptions$$1_initSelections$$.legend);
      if($parentLayer$$6$$) {
        if($parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$ && $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$) {
          for($area$$inline_8636_dataLayer$$12_markerDefs$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$ = $parentLayer$$6$$, $area$$inline_8636_dataLayer$$12_markerDefs$$ = void 0, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$.$AreaNames$) {
            $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$.$_renderArea$[$area$$inline_8636_dataLayer$$12_markerDefs$$] = !0, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$.$_renderLabel$[$area$$inline_8636_dataLayer$$12_markerDefs$$] = !0
          }
        }
      }else {
        $parentLayer$$6$$ = new D.$DvtMapLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getEventManager$()), $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_layers$.push($parentLayer$$6$$)
      }
      $area$$inline_8636_dataLayer$$12_markerDefs$$ = new D.$DvtMapDataLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $parentLayer$$6$$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getEventManager$(), $dataLayerOptions$$1_initSelections$$);
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$ = $dataLayerOptions$$1_initSelections$$.selectionMode;
      "single" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$ ? $area$$inline_8636_dataLayer$$12_markerDefs$$.$setSelectionMode$("s") : "multiple" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$ && $area$$inline_8636_dataLayer$$12_markerDefs$$.$setSelectionMode$("m");
      $area$$inline_8636_dataLayer$$12_markerDefs$$.$setAnimation$($dataLayerOptions$$1_initSelections$$.animationOnDataChange);
      $area$$inline_8636_dataLayer$$12_markerDefs$$.$setAnimationDuration$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getAnimationDuration$());
      var $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$ = null;
      $parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$ = $dataLayerOptions$$1_initSelections$$.isolatedItem);
      var $disclosedItems_isolatedArea$$inline_8667$$ = $dataLayerOptions$$1_initSelections$$.disclosedItems, $initDisclosed_xmlNode$$67$$ = [], $isolatedAreaId$$;
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$ = $parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$;
      var $popups$$1$$;
      $dataLayerOptions$$1_initSelections$$.popups && ($popups$$1$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_getShowPopupBehaviors$($dataLayerOptions$$1_initSelections$$.popups));
      var $context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$().hiddenCategories, $areas$$6_renderer$$12$$ = $dataLayerOptions$$1_initSelections$$.areas;
      if($areas$$6_renderer$$12$$) {
        for(var $area$$inline_8668_j$$118$$ = 0;$area$$inline_8668_j$$118$$ < $areas$$6_renderer$$12$$.length;$area$$inline_8668_j$$118$$++) {
          if($context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$ && D.$DvtArrayUtils$$.$hasAnyItem$($context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$, $areas$$6_renderer$$12$$[$area$$inline_8668_j$$118$$].categories)) {
            (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($area$$inline_8636_dataLayer$$12_markerDefs$$, null)
          }else {
            var $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = $areas$$6_renderer$$12$$[$area$$inline_8668_j$$118$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$ != $areas$$6_renderer$$12$$[$area$$inline_8668_j$$118$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$
              }
            }
            $disclosedItems_isolatedArea$$inline_8667$$ && -1 != D.$DvtArrayUtils$$.$getIndex$($disclosedItems_isolatedArea$$inline_8667$$, $areas$$6_renderer$$12$$[$area$$inline_8668_j$$118$$].id) && $initDisclosed_xmlNode$$67$$.push($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$);
            var $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$, $layer$$inline_8642_layer$$inline_8655$$ = $parentLayer$$6$$, $dataLayer$$inline_8643_markers$$10$$ = $area$$inline_8636_dataLayer$$12_markerDefs$$, $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = $areas$$6_renderer$$12$$[$area$$inline_8668_j$$118$$], $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$ = 
            $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.location;
            if($layer$$inline_8642_layer$$inline_8655$$.$AreaShapes$[$areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$] && $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.color) {
              $layer$$inline_8642_layer$$inline_8655$$.$_renderArea$[$areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$] = !1;
              $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$ = new D.$DvtDrillablePath$$($JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$.$_tmap$.$_bSupportsVectorEffects$);
              $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = D.$DvtJSONUtils$$.$merge$($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$, $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$.$_tmap$.$_styleDefaults$.dataAreaDefaults);
              $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.labelStyle || ($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.labelStyle = $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$.$_tmap$.$_styleDefaults$.labelStyle);
              var $dis$$inline_8650_hs$$inline_8647_svgElem$$inline_8658$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.hoverColor, 1, 2), $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.selectedInnerColor, 1, 1), $dos$$inline_8651_outerStroke$$inline_11464_sos$$inline_8649$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.selectedOuterColor, 
              1, 4);
              $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$.$setHoverStroke$($dis$$inline_8650_hs$$inline_8647_svgElem$$inline_8658$$, null).$setSelectedStroke$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$, $dos$$inline_8651_outerStroke$$inline_11464_sos$$inline_8649$$);
              $dis$$inline_8650_hs$$inline_8647_svgElem$$inline_8658$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.drilledInnerColor, 1, 2);
              $dos$$inline_8651_outerStroke$$inline_11464_sos$$inline_8649$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.drilledOuterColor, 1, 4);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$ = $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$.$_disclosedInnerStroke$ = $dis$$inline_8650_hs$$inline_8647_svgElem$$inline_8658$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$.$_disclosedInnerStroke$.$_bFixedWidth$ = !0);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$.$_disclosedOuterStroke$ = $dos$$inline_8651_outerStroke$$inline_11464_sos$$inline_8649$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$.$_disclosedOuterStroke$.$_bFixedWidth$ = !0);
              $layer$$inline_8642_layer$$inline_8655$$.$_renderLabel$[$areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.location] = !1;
              (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)($JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$, $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$, $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$);
              $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$ = $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$.$_createLabel$($layer$$inline_8642_layer$$inline_8655$$, $dataLayer$$inline_8643_markers$$10$$, $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$, 
              $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$, !0);
              $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = new D.$DvtMapAreaPeer$$($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$, $dataLayer$$inline_8643_markers$$10$$, $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$, $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$)
            }else {
              $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = null
            }
            $popups$$1$$ && $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ && ($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.$setSelectable$($area$$inline_8636_dataLayer$$12_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($area$$inline_8636_dataLayer$$12_markerDefs$$, $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$))
          }
        }
      }
      $areas$$6_renderer$$12$$ = $dataLayerOptions$$1_initSelections$$.renderer;
      if(($dataLayer$$inline_8643_markers$$10$$ = $dataLayerOptions$$1_initSelections$$.markers) && !$areas$$6_renderer$$12$$) {
        for($area$$inline_8668_j$$118$$ = 0;$area$$inline_8668_j$$118$$ < $dataLayer$$inline_8643_markers$$10$$.length;$area$$inline_8668_j$$118$$++) {
          if($context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$ && D.$DvtArrayUtils$$.$hasAnyItem$($context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$, $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$].categories)) {
            (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8636_dataLayer$$12_markerDefs$$, null)
          }else {
            $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$ != $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$
              }
            }
            $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createMarker$($parentLayer$$6$$, $area$$inline_8636_dataLayer$$12_markerDefs$$, $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$);
            $popups$$1$$ && $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ && ($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.$setSelectable$($area$$inline_8636_dataLayer$$12_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8636_dataLayer$$12_markerDefs$$, $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$))
          }
        }
      }
      if($context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$ = $dataLayerOptions$$1_initSelections$$.images) {
        for($area$$inline_8668_j$$118$$ = 0;$area$$inline_8668_j$$118$$ < $context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$.length;$area$$inline_8668_j$$118$$++) {
          $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = $context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$[$area$$inline_8668_j$$118$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$ != $context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$[$area$$inline_8668_j$$118$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$
            }
          }
          $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createImage$($parentLayer$$6$$, $area$$inline_8636_dataLayer$$12_markerDefs$$, $context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$[$area$$inline_8668_j$$118$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$);
          $popups$$1$$ && $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ && (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8636_dataLayer$$12_markerDefs$$, $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$)
        }
      }
      if($areas$$6_renderer$$12$$) {
        for($area$$inline_8668_j$$118$$ = 0;$area$$inline_8668_j$$118$$ < $dataLayer$$inline_8643_markers$$10$$.length;$area$$inline_8668_j$$118$$++) {
          $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$ != $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$
            }
          }
          $disclosedItems_isolatedArea$$inline_8667$$ && -1 != D.$DvtArrayUtils$$.$getIndex$($disclosedItems_isolatedArea$$inline_8667$$, $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$].id) && $initDisclosed_xmlNode$$67$$.push($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$);
          $context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$()._contextHandler($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getElem$(), null, $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$], {hovered:!1, selected:!1, focused:!1}, null);
          $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$ = $areas$$6_renderer$$12$$($context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$);
          $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$;
          $layer$$inline_8642_layer$$inline_8655$$ = $parentLayer$$6$$;
          $context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$ = $area$$inline_8636_dataLayer$$12_markerDefs$$;
          $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = $dataLayer$$inline_8643_markers$$10$$[$area$$inline_8668_j$$118$$];
          $dis$$inline_8650_hs$$inline_8647_svgElem$$inline_8658$$ = $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$;
          $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$ = $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8635_isAreaDataLayer$$1_selectionMode$$14$$;
          ($areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$, $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$)) ? ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11462_isParentAreaDataLayer$$inline_8659_sis$$inline_8648$$ && ($layer$$inline_8642_layer$$inline_8655$$.$_renderLabel$[$areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.location] = 
          !1), $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$ = new D.$DvtCustomDataItem$$($JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$.$_tmap$.$getCtx$(), $dis$$inline_8650_hs$$inline_8647_svgElem$$inline_8658$$, $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$.$_tmap$.$_styleDefaults$.dataAreaDefaults), 
          $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = new D.$DvtMapObjPeer$$($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$, $context$$607_dataLayer$$inline_8656_hiddenCategories$$12_images$$22$$, $JSCompiler_StaticMethods__createArea$self$$inline_8641_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8654_dataItem$$inline_8661_label$$inline_8652$$, null, $areaId$$inline_8645_center$$inline_8660_path$$inline_8646_svgElem$$2$$)) : $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ = 
          null;
          $popups$$1$$ && $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$ && ($areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$.$setSelectable$($area$$inline_8636_dataLayer$$12_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8636_dataLayer$$12_markerDefs$$, $areaId$$2_data$$inline_8644_data$$inline_8657_dataObj$$4$$))
        }
      }
      if($isolatedAreaId$$) {
        for($area$$inline_8668_j$$118$$ in $area$$inline_8636_dataLayer$$12_markerDefs$$.$_isolatedAreaRowKey$ = $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$ = $parentLayer$$6$$, $disclosedItems_isolatedArea$$inline_8667$$ = $isolatedAreaId$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$.$_isolatedArea$ = $disclosedItems_isolatedArea$$inline_8667$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$.$_layerDim$ = 
        null, $area$$inline_8668_j$$118$$ = void 0, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$.$AreaShapes$) {
          $area$$inline_8668_j$$118$$ != $disclosedItems_isolatedArea$$inline_8667$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8666_isolatedRowKey$$.$_renderArea$[$area$$inline_8668_j$$118$$] = !1)
        }
      }
      if(($dataLayerOptions$$1_initSelections$$ = $dataLayerOptions$$1_initSelections$$.selection) && 0 < $dataLayerOptions$$1_initSelections$$.length) {
        $area$$inline_8636_dataLayer$$12_markerDefs$$.$_initSelections$ = $dataLayerOptions$$1_initSelections$$
      }
      $initDisclosed_xmlNode$$67$$ && 0 < $initDisclosed_xmlNode$$67$$.length && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_initDrilled$[$parentLayer$$6$$.$LayerName$] = [$area$$inline_8636_dataLayer$$12_markerDefs$$.$getClientId$(), $initDisclosed_xmlNode$$67$$]);
      $topLayerName$$2$$ ? $parentLayer$$6$$.$updateDataLayer$($area$$inline_8636_dataLayer$$12_markerDefs$$, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), $topLayerName$$2$$) : $parentLayer$$6$$.$DataLayers$[$area$$inline_8636_dataLayer$$12_markerDefs$$.$getClientId$()] = $area$$inline_8636_dataLayer$$12_markerDefs$$
    }
  }
};
D.$DvtThematicMapJsonParser$$.prototype.$_createMarker$ = function $$DvtThematicMapJsonParser$$$$$_createMarker$$($label$$104_layer$$14$$, $dataLayer$$14$$, $data$$105$$, $isParentAreaDataLayer$$) {
  var $center$$13$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$14$$, $data$$105$$);
  if(!$center$$13$$) {
    return null
  }
  var $marker$$18_markerDefaults_sx$$18$$ = this.$_tmap$.$_styleDefaults$.dataMarkerDefaults, $markerLabelStyle_rotation$$8_sy$$18$$ = new D.$DvtCSSStyle$$($marker$$18_markerDefaults_sx$$18$$.labelStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($markerLabelStyle_rotation$$8_sy$$18$$, $data$$105$$.labelStyle);
  $data$$105$$ = D.$DvtJSONUtils$$.$merge$($data$$105$$, $marker$$18_markerDefaults_sx$$18$$);
  $data$$105$$.labelStyle = $markerLabelStyle_rotation$$8_sy$$18$$.toString();
  $marker$$18_markerDefaults_sx$$18$$ = 1;
  (0,window.isNaN)($data$$105$$.scaleX) || ($marker$$18_markerDefaults_sx$$18$$ = $data$$105$$.scaleX);
  $markerLabelStyle_rotation$$8_sy$$18$$ = 1;
  (0,window.isNaN)($data$$105$$.scaleY) || ($markerLabelStyle_rotation$$8_sy$$18$$ = $data$$105$$.scaleY);
  var $w$$68$$ = $data$$105$$.width, $h$$66$$ = $data$$105$$.height;
  if(!$w$$68$$ || (0,window.isNaN)($w$$68$$)) {
    $w$$68$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.width
  }
  if(!$h$$66$$ || (0,window.isNaN)($h$$66$$)) {
    $h$$66$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.height
  }
  if($data$$105$$.source) {
    $marker$$18_markerDefaults_sx$$18$$ = new D.$DvtImageMarker$$(this.$_tmap$.$getCtx$(), $center$$13$$.x, $center$$13$$.y, $w$$68$$ * $marker$$18_markerDefaults_sx$$18$$, $h$$66$$ * $markerLabelStyle_rotation$$8_sy$$18$$, $data$$105$$.source, $data$$105$$.sourceSelected, $data$$105$$.sourceHover, $data$$105$$.sourceHoverSelected)
  }else {
    var $shapeType$$1$$ = $data$$105$$.shape ? $data$$105$$.shape : this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.shape, $marker$$18_markerDefaults_sx$$18$$ = new D.$DvtSimpleMarker$$(this.$_tmap$.$getCtx$(), $shapeType$$1$$, this.$_tmap$.$_skinName$, $center$$13$$.x, $center$$13$$.y, $w$$68$$ * $marker$$18_markerDefaults_sx$$18$$, $h$$66$$ * $markerLabelStyle_rotation$$8_sy$$18$$)
  }
  ($markerLabelStyle_rotation$$8_sy$$18$$ = $data$$105$$.rotation) && $marker$$18_markerDefaults_sx$$18$$.$setRotation$($markerLabelStyle_rotation$$8_sy$$18$$ * window.Math.PI / 180);
  $isParentAreaDataLayer$$ && ($label$$104_layer$$14$$.$_renderLabel$[$data$$105$$.location] = !1);
  (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)(this, $data$$105$$, $marker$$18_markerDefaults_sx$$18$$);
  $label$$104_layer$$14$$ = this.$_createLabel$($label$$104_layer$$14$$, $dataLayer$$14$$, $data$$105$$, $marker$$18_markerDefaults_sx$$18$$, $isParentAreaDataLayer$$);
  return new D.$DvtMapObjPeer$$($data$$105$$, $dataLayer$$14$$, $marker$$18_markerDefaults_sx$$18$$, $label$$104_layer$$14$$, $center$$13$$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_createImage$ = function $$DvtThematicMapJsonParser$$$$$_createImage$$($layer$$15$$, $dataLayer$$15$$, $data$$106$$, $isParentAreaDataLayer$$1$$) {
  var $center$$14$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$15$$, $data$$106$$);
  if(!$center$$14$$) {
    return null
  }
  var $image$$23$$ = new D.$DvtImage$$(this.$_tmap$.$getCtx$(), $data$$106$$.url), $width$$161$$ = $data$$106$$.width, $height$$145$$ = $data$$106$$.height;
  null != $width$$161$$ && null != $height$$145$$ && ($image$$23$$.$setX$($center$$14$$.x - $width$$161$$ / 2), $image$$23$$.$setY$($center$$14$$.y - $height$$145$$ / 2), $image$$23$$.$setWidth$($width$$161$$), $image$$23$$.$setHeight$($height$$145$$));
  $isParentAreaDataLayer$$1$$ && ($layer$$15$$.$_renderLabel$[$data$$106$$.location] = !1);
  var $peer$$33$$ = new D.$DvtMapObjPeer$$($data$$106$$, $dataLayer$$15$$, $image$$23$$, null, $center$$14$$);
  (!$width$$161$$ || !$height$$145$$) && D.$DvtImageLoader$$.$loadImage$(this.$_tmap$.$getCtx$(), $data$$106$$.url, function($layer$$15$$) {
    $layer$$15$$ && ($layer$$15$$.width && $layer$$15$$.height) && ($image$$23$$.$setWidth$($layer$$15$$.width), $image$$23$$.$setHeight$($layer$$15$$.height), $image$$23$$.$setX$($center$$14$$.x - $layer$$15$$.width / 2), $image$$23$$.$setY$($center$$14$$.y - $layer$$15$$.height / 2), $peer$$33$$.$__recenter$())
  });
  return $peer$$33$$
};
D.$DvtThematicMapJsonParser$$.prototype.$_createLabel$ = function $$DvtThematicMapJsonParser$$$$$_createLabel$$($fillColor$$10_layer$$17$$, $dataLayer$$17_labelStyle$$21$$, $data$$108$$, $displayable$$107_isArea$$1$$, $isParentAreaDataLayer$$3$$) {
  var $areaId$$4$$ = $data$$108$$.location, $labelText$$2$$ = $data$$108$$.label, $labelDisplay$$7$$ = $labelText$$2$$ ? "on" : "off";
  $isParentAreaDataLayer$$3$$ && ($labelDisplay$$7$$ = $fillColor$$10_layer$$17$$.$getLabelDisplay$());
  $displayable$$107_isArea$$1$$ = $displayable$$107_isArea$$1$$ instanceof D.$DvtPath$$;
  if(!$labelText$$2$$ && $isParentAreaDataLayer$$3$$ && ($displayable$$107_isArea$$1$$ && "off" != $labelDisplay$$7$$ || !$displayable$$107_isArea$$1$$ && "on" == $labelDisplay$$7$$)) {
    $labelText$$2$$ = "long" == $fillColor$$10_layer$$17$$.$_labelType$ ? $fillColor$$10_layer$$17$$.$AreaNames$[$areaId$$4$$][1] : $fillColor$$10_layer$$17$$.$AreaNames$[$areaId$$4$$][0]
  }
  if($labelText$$2$$) {
    var $context$$610_label$$105$$ = this.$_tmap$.$getCtx$(), $context$$610_label$$105$$ = $displayable$$107_isArea$$1$$ ? new D.$DvtMapLabel$$($context$$610_label$$105$$, $labelText$$2$$, $fillColor$$10_layer$$17$$.$getLabelInfoForArea$ ? $fillColor$$10_layer$$17$$.$getLabelInfoForArea$($areaId$$4$$) : null, $labelDisplay$$7$$, $dataLayer$$17_labelStyle$$21$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : new D.$DvtOutputText$$($context$$610_label$$105$$, $labelText$$2$$, 0, 0);
    $dataLayer$$17_labelStyle$$21$$ = new D.$DvtCSSStyle$$;
    $displayable$$107_isArea$$1$$ && $dataLayer$$17_labelStyle$$21$$.$merge$(new D.$DvtCSSStyle$$($fillColor$$10_layer$$17$$.$_layerCSSStyle$));
    $data$$108$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($dataLayer$$17_labelStyle$$21$$, $data$$108$$.labelStyle);
    $fillColor$$10_layer$$17$$ = $dataLayer$$17_labelStyle$$21$$.$getStyle$("color");
    $dataLayer$$17_labelStyle$$21$$.$setStyle$("color", null);
    $context$$610_label$$105$$.$setCSSStyle$($dataLayer$$17_labelStyle$$21$$);
    if($context$$610_label$$105$$ instanceof D.$DvtMapLabel$$ && (!0 === D.$DvtAgent$_highContrast$$ || !$fillColor$$10_layer$$17$$)) {
      $fillColor$$10_layer$$17$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($data$$108$$.color)
    }
    $fillColor$$10_layer$$17$$ && $context$$610_label$$105$$.$setSolidFill$($fillColor$$10_layer$$17$$)
  }
  return $context$$610_label$$105$$
};
D.$JSCompiler_StaticMethods__styleDisplayable$$ = function $$JSCompiler_StaticMethods__styleDisplayable$$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8713$$, $borderColor$$61_style$$117$$, $displayable$$108$$) {
  var $pattern$$14$$ = $borderColor$$61_style$$117$$.pattern, $backgroundColor$$26$$ = $borderColor$$61_style$$117$$.color, $gradient$$15$$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8713$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8713$$.$_tmap$.$_skinName$ ? "none" : $borderColor$$61_style$$117$$.visualEffects;
  if($displayable$$108$$ instanceof D.$DvtSimpleMarker$$) {
    if("none" != $borderColor$$61_style$$117$$.borderStyle) {
      var $borderWidth$$16_opacity$$5$$ = $borderColor$$61_style$$117$$.borderWidth;
      "string" == typeof $borderWidth$$16_opacity$$5$$ && ($borderWidth$$16_opacity$$5$$ = "px" == $borderWidth$$16_opacity$$5$$.slice(-2) ? (0,window.parseFloat)($borderColor$$61_style$$117$$.borderWidth.slice(0, -2)) : (0,window.parseFloat)($borderColor$$61_style$$117$$.borderWidth));
      var $stroke$$116$$ = new D.$DvtSolidStroke$$($borderColor$$61_style$$117$$.borderColor, 1, $borderWidth$$16_opacity$$5$$);
      $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8713$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($stroke$$116$$.$_bFixedWidth$ = !0);
      $stroke$$116$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($borderColor$$61_style$$117$$.borderStyle));
      $displayable$$108$$.$setStroke$($stroke$$116$$)
    }
    $borderWidth$$16_opacity$$5$$ = $borderColor$$61_style$$117$$.opacity;
    "none" != $gradient$$15$$ ? $displayable$$108$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$26$$, $displayable$$108$$, $borderWidth$$16_opacity$$5$$)) : $pattern$$14$$ ? $displayable$$108$$.$setFill$(new D.$DvtPatternFill$$($pattern$$14$$, $backgroundColor$$26$$, "#FFFFFF")) : $backgroundColor$$26$$ && $displayable$$108$$.$setSolidFill$($backgroundColor$$26$$, $borderWidth$$16_opacity$$5$$)
  }else {
    if($displayable$$108$$ instanceof D.$DvtPath$$) {
      if($borderColor$$61_style$$117$$ = $borderColor$$61_style$$117$$.borderColor) {
        $stroke$$116$$ = new D.$DvtSolidStroke$$($borderColor$$61_style$$117$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8713$$.$_tmap$.$_bSupportsVectorEffects$ && ($stroke$$116$$.$_bFixedWidth$ = !0), $displayable$$108$$.$setStroke$($stroke$$116$$)
      }
      $pattern$$14$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8713$$ = new D.$DvtPatternFill$$($pattern$$14$$, $backgroundColor$$26$$, "#FFFFFF"), $displayable$$108$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8713$$) : $displayable$$108$$.$setSolidFill$($backgroundColor$$26$$, $borderWidth$$16_opacity$$5$$)
    }
  }
};
D.$DvtThematicMapJsonParser$getCenter$$ = function $$DvtThematicMapJsonParser$getCenter$$$($dataLayer$$18$$, $data$$109$$) {
  var $locationCoords_map$$14$$ = $dataLayer$$18$$.$_tmap$, $mapName$$ = $locationCoords_map$$14$$.$_mapName$, $location$$25$$ = $data$$109$$.location;
  return $location$$25$$ ? (($locationCoords_map$$14$$ = D.$DvtBaseMapManager$$.$getAreaCenter$($mapName$$, $dataLayer$$18$$.$_parentLayer$.$LayerName$, $location$$25$$)) || ($locationCoords_map$$14$$ = D.$DvtBaseMapManager$$.$getCityCoordinates$($mapName$$, $location$$25$$)), $locationCoords_map$$14$$) : D.$DvtThematicMapProjections$$.$project$($data$$109$$.x, $data$$109$$.y, $locationCoords_map$$14$$.$_mapName$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_getShowPopupBehaviors$ = function $$DvtThematicMapJsonParser$$$$$_getShowPopupBehaviors$$($popups$$2$$) {
  for(var $spbs$$6$$ = [], $i$$840$$ = 0;$i$$840$$ < $popups$$2$$.length;$i$$840$$++) {
    $spbs$$6$$.push(new D.$DvtShowPopupBehavior$$($popups$$2$$[$i$$840$$].popupId, $popups$$2$$[$i$$840$$].triggerType, null, $popups$$2$$[$i$$840$$].align))
  }
  return $spbs$$6$$
};
D.$DvtThematicMapProjections$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapProjections$$, D.$DvtObj$$, "DvtThematicMapProjections");
D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new D.$DvtRectangle$$(0, 0, 800, 500);
D.$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new D.$DvtRectangle$$(500, 200, 200, 200);
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new D.$DvtRectangle$$(163, -49, 17, 17);
D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new D.$DvtRectangle$$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new D.$DvtRectangle$$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new D.$DvtRectangle$$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new D.$DvtRectangle$$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new D.$DvtRectangle$$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new D.$DvtRectangle$$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new D.$DvtRectangle$$(-171.9, -62.6, 349.8, 150.8);
D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new D.$DvtRectangle$$(172, 51, 8, 3);
D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new D.$DvtRectangle$$(-180, 51, 51, 21);
D.$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new D.$DvtRectangle$$(-178.5, 18.9, 35, 11);
D.$DvtThematicMapProjections$$.$_USA_RECT$ = new D.$DvtRectangle$$(-124.8, 24.4, 58, 25.5);
D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new D.$DvtRectangle$$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new D.$DvtRectangle$$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
D.$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new D.$DvtRectangle$$(-2386803.25, -1183550.5, 4514111, 2908402);
D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new D.$DvtRectangle$$(165, 400, 100, 100);
D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new D.$DvtRectangle$$(-75, 350, 240, 150);
D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$279$$, $y$$249$$, $basemap$$5$$) {
  var $point$$49$$;
  switch($basemap$$5$$) {
    case "africa":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$279$$, $y$$249$$));
      break;
    case "asia":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$279$$, $y$$249$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$279$$, $y$$249$$);
      break;
    case "europe":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$279$$, $y$$249$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$279$$, $y$$249$$));
      break;
    case "southAmerica":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$279$$, $y$$249$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$279$$, $y$$249$$));
      break;
    case "emea":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$279$$, $y$$249$$));
      break;
    case "latinAmerica":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$279$$, $y$$249$$));
      break;
    case "usaAndCanada":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$279$$, $y$$249$$));
      break;
    case "worldRegions":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$279$$, $y$$249$$);
      break;
    case "usa":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$279$$, $y$$249$$);
      break;
    case "world":
      $point$$49$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$279$$, $y$$249$$)
  }
  return $point$$49$$ ? new D.$DvtPoint$$(10 * $point$$49$$.x, 10 * $point$$49$$.y) : null
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$280$$, $y$$250$$) {
  var $transformedPoint$$1_viewPortTransform$$;
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$280$$, $y$$250$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$280$$, $y$$250$$) ? ($transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$280$$, $y$$250$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$280$$, $y$$250$$) ? ($transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, 
  new D.$DvtPoint$$($x$$280$$, $y$$250$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$280$$, $y$$250$$) && ($transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$280$$, $y$$250$$)));
  return D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$1_viewPortTransform$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$281$$, $y$$251$$) {
  var $transformedPoint$$2_viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $transformedPoint$$2_viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$2_viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$281$$, $y$$251$$));
  return D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$2_viewPortTransform$$1$$)
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$282$$, $y$$252$$) {
  var $transformedPoint$$3_viewPortTransform$$2$$;
  $transformedPoint$$3_viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$282$$, $y$$252$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $transformedPoint$$3_viewPortTransform$$2$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$3_viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$282$$, $y$$252$$));
  return D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$3_viewPortTransform$$2$$)
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$50_transformedPoint$$4$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  $point$$50_transformedPoint$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$50_transformedPoint$$4$$);
  return D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($point$$50_transformedPoint$$4$$)
};
D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$ = function $$DvtThematicMapProjections$$$$_getBoundedTransformedPoint$$($point$$51$$) {
  var $bounds$$159$$ = D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$;
  return!$point$$51$$ || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($bounds$$159$$, $point$$51$$.x, $point$$51$$.y) ? null : $point$$51$$
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$48_sP1$$, $n$$38_sP2$$, $theta$$4_x$$283$$, $rho_y$$253$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$48_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$48_sP1$$);
  $n$$38_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$38_sP2$$);
  $n$$38_sP2$$ = 0.5 * (window.Math.sin($c$$48_sP1$$) + window.Math.sin($n$$38_sP2$$));
  $c$$48_sP1$$ = window.Math.pow(window.Math.cos($c$$48_sP1$$), 2) + 2 * $n$$38_sP2$$ * window.Math.sin($c$$48_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$48_sP1$$ - 2 * $n$$38_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$38_sP2$$;
  $theta$$4_x$$283$$ = $n$$38_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta$$4_x$$283$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$253$$ = $c$$48_sP1$$ - 2 * $n$$38_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$253$$));
  $rho_y$$253$$ = window.Math.sqrt($rho_y$$253$$) / $n$$38_sP2$$;
  return new D.$DvtPoint$$($rho_y$$253$$ * window.Math.sin($theta$$4_x$$283$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$253$$ * window.Math.cos($theta$$4_x$$283$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$284$$, $y$$254$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$254$$)));
  return new D.$DvtPoint$$($x$$284$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$16_centerY$$5$$, $radX$$1_x$$285$$, $radY$$1_y$$255$$) {
  $radX$$1_x$$285$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX$$1_x$$285$$);
  $radY$$1_y$$255$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY$$1_y$$255$$);
  var $centerX$$4$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$16_centerY$$5$$.x);
  $center$$16_centerY$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$16_centerY$$5$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY$$1_y$$255$$) * window.Math.sin($radX$$1_x$$285$$ - $centerX$$4$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$16_centerY$$5$$) * window.Math.sin($radY$$1_y$$255$$) - window.Math.sin($center$$16_centerY$$5$$) * window.Math.cos($radY$$1_y$$255$$) * window.Math.cos($radX$$1_x$$285$$ - $centerX$$4$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$286$$, $y$$256$$) {
  var $newY$$13_ycriteria$$ = window.Math.floor(window.Math.abs($y$$256$$) / 5);
  $newY$$13_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$13_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$256$$) - 5 * $newY$$13_ycriteria$$) / 5, $newX$$12$$ = $x$$286$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][0])), $newY$$13_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][1] + $yInterval$$ * 
  (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][1]);
  0 > $y$$256$$ && ($newY$$13_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$12$$, 180 * $newY$$13_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$23$$, $point$$52$$) {
  return new D.$DvtPoint$$($point$$52$$.x * $matrix$$23$$.$_a$ + $matrix$$23$$.$_tx$, $point$$52$$.y * $matrix$$23$$.$_d$ + $matrix$$23$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$841$$ = $deviceView$$.x, $d6_j$$119$$ = $deviceView$$.y, $d$$13$$ = $mapBound$$.$w$, $d1$$1$$ = $mapBound$$.$h$, $d2$$1_d3$$1$$ = 0, $d2$$1_d3$$1$$ = $deviceView$$.$w$ / $d$$13$$, $d4$$ = $deviceView$$.$h$ / $d1$$1$$, $d2$$1_d3$$1$$ = $d2$$1_d3$$1$$ <= $d4$$ ? $d2$$1_d3$$1$$ : $d4$$, $d5_i$$841$$ = $d5_i$$841$$ - $mapBound$$.x * $d2$$1_d3$$1$$, $d6_j$$119$$ = $d6_j$$119$$ + $mapBound$$.y * $d2$$1_d3$$1$$, $d5_i$$841$$ = $d5_i$$841$$ + ($deviceView$$.$w$ - $d$$13$$ * $d2$$1_d3$$1$$) / 
  2, $d6_j$$119$$ = $d6_j$$119$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - $d1$$1$$ * $d2$$1_d3$$1$$) / 2);
  return new D.$DvtMatrix$$($d2$$1_d3$$1$$, 0, 0, -$d2$$1_d3$$1$$, $d5_i$$841$$, $d6_j$$119$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$287$$) {
  return $x$$287$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$288$$) {
  return $x$$288$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$289$$, $y$$257$$, $basemap$$6$$) {
  var $point$$53$$;
  $x$$289$$ /= 10;
  $y$$257$$ /= 10;
  switch($basemap$$6$$) {
    case "africa":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$));
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$53$$.x, $point$$53$$.y);
      break;
    case "asia":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$53$$.x, $point$$53$$.y);
      break;
    case "australia":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$289$$, $y$$257$$);
      break;
    case "europe":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$53$$.x, $point$$53$$.y);
      break;
    case "northAmerica":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$));
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$53$$.x, $point$$53$$.y);
      break;
    case "southAmerica":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$));
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$53$$.x, $point$$53$$.y);
      break;
    case "emea":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$));
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$53$$.x, $point$$53$$.y);
      break;
    case "latinAmerica":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$));
      break;
    case "usaAndCanada":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$289$$, $y$$257$$));
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$53$$.x, $point$$53$$.y);
      break;
    case "worldRegions":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$289$$, $y$$257$$);
      break;
    case "usa":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$289$$, $y$$257$$);
      break;
    case "world":
      $point$$53$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$289$$, $y$$257$$)
  }
  return $point$$53$$ ? $point$$53$$ : new D.$DvtPoint$$($x$$289$$, $y$$257$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$290$$, $y$$258$$) {
  var $point$$54_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$290$$, $y$$258$$) ? ($point$$54_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$54_viewPortTransform$$4$$.$invert$(), $point$$54_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$54_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$290$$, 
  $y$$258$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$54_viewPortTransform$$4$$.x, $point$$54_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$290$$, $y$$258$$) ? ($point$$54_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$54_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$54_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$290$$, $y$$258$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$290$$, $y$$258$$) ? ($point$$54_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$54_viewPortTransform$$4$$.$invert$(), $point$$54_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$54_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$290$$, $y$$258$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$54_viewPortTransform$$4$$.x, $point$$54_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$290$$, $y$$258$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$291$$, $y$$259$$) {
  var $point$$55_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$55_viewPortTransform$$5$$.$invert$();
  $point$$55_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$55_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$291$$, $y$$259$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$55_viewPortTransform$$5$$.x, $point$$55_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$292$$, $y$$260$$) {
  var $point$$56_viewPortTransform$$6$$;
  $point$$56_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$292$$, $y$$260$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$56_viewPortTransform$$6$$.$invert$();
  $point$$56_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$56_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$292$$, $y$$260$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$56_viewPortTransform$$6$$.x, $point$$56_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$57$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$57$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0$$4_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$50_sP1$$1$$, $n$$39_sP2$$1$$, $x$$293$$, $y$$261$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0$$4_phi0$$1$$);
  $c$$50_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$50_sP1$$1$$);
  $n$$39_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$39_sP2$$1$$);
  $n$$39_sP2$$1$$ = 0.5 * (window.Math.sin($c$$50_sP1$$1$$) + window.Math.sin($n$$39_sP2$$1$$));
  $c$$50_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$50_sP1$$1$$), 2) + 2 * $n$$39_sP2$$1$$ * window.Math.sin($c$$50_sP1$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = $c$$50_sP1$$1$$ - 2 * $n$$39_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0$$4_phi0$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0$$4_phi0$$1$$) / $n$$39_sP2$$1$$;
  var $p$$30$$ = window.Math.sqrt($x$$293$$ * $x$$293$$ + ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$261$$) * ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$261$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$293$$ / ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$261$$)) / $n$$39_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$50_sP1$$1$$ - $p$$30$$ * $p$$30$$ * $n$$39_sP2$$1$$ * $n$$39_sP2$$1$$) / (2 * $n$$39_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$294$$, $y$$262$$) {
  return new D.$DvtPoint$$($x$$294$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$262$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$17$$, $radX$$2_x$$295$$, $radY$$2_y$$263$$) {
  $radX$$2_x$$295$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$2_y$$263$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$6$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$17$$.y), $p$$31$$ = window.Math.sqrt($radX$$2_x$$295$$ * $radX$$2_x$$295$$ + $radY$$2_y$$263$$ * $radY$$2_y$$263$$), $c$$51$$ = window.Math.asin($p$$31$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$17$$.x) + window.Math.atan($radX$$2_x$$295$$ * window.Math.sin($c$$51$$) / ($p$$31$$ * window.Math.cos($centerY$$6$$) * window.Math.cos($c$$51$$) - $radY$$2_y$$263$$ * window.Math.sin($centerY$$6$$) * window.Math.sin($c$$51$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$51$$) * window.Math.sin($centerY$$6$$) + $radY$$2_y$$263$$ * window.Math.sin($c$$51$$) * 
  window.Math.cos($centerY$$6$$) / $p$$31$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$296$$, $y$$264$$) {
  var $criteria$$2_originalX$$ = window.Math.floor(window.Math.abs($y$$264$$) / 5);
  $criteria$$2_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$2_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$264$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$2_originalX$$, $criteria$$2_originalX$$ = $x$$296$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0]));
  0 > $y$$264$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$2_originalX$$, $originalY$$)
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$611$$, $view$$58$$, $state$$98$$) {
  this.Init($context$$611$$, $view$$58$$, $state$$98$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$612$$, $view$$59$$, $state$$99$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$612$$, $view$$59$$, $state$$99$$);
  this.$_drillMode$ = $view$$59$$.$_drillMode$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$59$$);
  this.$_drillUpCallback$ = D.$DvtObj$$.$createCallback$($view$$59$$, $view$$59$$.$drillUp$);
  this.$_drillDownCallback$ = D.$DvtObj$$.$createCallback$($view$$59$$, $view$$59$$.$drillDown$);
  this.$_resetCallback$ = D.$DvtObj$$.$createCallback$($view$$59$$, $view$$59$$.$resetMap$);
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = null;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = !1;
  this.$_styleMap$ = $view$$59$$.$getSubcomponentStyles$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$2$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$2$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && (0,D.$JSCompiler_StaticMethods_setEnabled$$)($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$, $enable$$2$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$3$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$3$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && (0,D.$JSCompiler_StaticMethods_setEnabled$$)($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$, $enable$$3$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$1$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
    (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_resetButton$, this.$_resetCallback$, this);
    this.$_resetButton$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_RESET"));
    this.$_eventManager$.$associate$(this.$_resetButton$, this.$_resetButton$);
    $contentSprite$$1$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
    (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_drillDownButton$, this.$_drillDownCallback$, this);
    this.$_drillDownButton$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_DRILLDOWN"));
    this.$_eventManager$.$associate$(this.$_drillDownButton$, this.$_drillDownButton$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    (0,D.$JSCompiler_StaticMethods_setEnabled$$)(this.$_drillDownButton$, this.$_drillDownButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
    (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_drillUpButton$, this.$_drillUpCallback$, this);
    this.$_drillUpButton$.$setTooltip$((0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_DRILLUP"));
    this.$_eventManager$.$associate$(this.$_drillUpButton$, this.$_drillUpButton$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    (0,D.$JSCompiler_StaticMethods_setEnabled$$)(this.$_drillUpButton$, this.$_drillUpButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillUpButton$)
  }
};
D.$DvtThematicMapControlPanel$$.prototype.$getActionDisplayable$ = function $$DvtThematicMapControlPanel$$$$$getActionDisplayable$$($type$$243$$, $stampId$$21$$) {
  var $displayable$$109$$ = D.$DvtThematicMapControlPanel$$.$superclass$.$getActionDisplayable$.call(this, $type$$243$$, $stampId$$21$$);
  !$displayable$$109$$ && this.$isDisclosed$() && ("drillDown" == $type$$243$$ && this.$_drillDownButton$ && this.$_drillDownButton$.isEnabled() ? $displayable$$109$$ = this.$_drillDownButton$ : "drillUp" == $type$$243$$ && this.$_drillUpButton$ && this.$_drillUpButton$.isEnabled() ? $displayable$$109$$ = this.$_drillUpButton$ : "reset" == $type$$243$$ && (this.$_resetButton$ && this.$_resetButton$.isEnabled()) && ($displayable$$109$$ = this.$_resetButton$));
  return $displayable$$109$$
};

  return D;
});