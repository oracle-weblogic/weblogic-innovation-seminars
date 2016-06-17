/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTimelineOverview$$ = function $$DvtTimelineOverview$$$($context$$620$$, $callback$$173$$, $callbackObj$$118$$) {
  this.Init($context$$620$$, $callback$$173$$, $callbackObj$$118$$)
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverview", D.$DvtTimelineOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverview$$, D.$DvtOverview$$, "DvtTimelineOverview");
D.$DvtTimelineOverview$$.prototype.Init = function $$DvtTimelineOverview$$$$Init$($colors$$5_context$$621$$, $callback$$174$$, $callbackObj$$119$$) {
  D.$DvtTimelineOverview$$.$superclass$.Init.call(this, $colors$$5_context$$621$$, $callback$$174$$, $callbackObj$$119$$);
  $colors$$5_context$$621$$ = [D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getPastel$("#aadd77", 0.35)), "#aadd77", D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getDarker$("#aadd77", 0.5))];
  D.$DvtTimeUtils$$.$supportsTouch$() && ($colors$$5_context$$621$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$5_context$$621$$;
  this.$_markerBorderFill$ = (0,D.$DvtSolidFill$invisibleFill$$)();
  this.$_markerSize$ = 12
};
D.$DvtTimelineOverview$$.prototype.$getParser$ = function $$DvtTimelineOverview$$$$$getParser$$() {
  return new D.$DvtTimelineOverviewParser$$(this)
};
D.$DvtTimelineOverview$$.prototype.$_applyParsedProperties$ = function $$DvtTimelineOverview$$$$$_applyParsedProperties$$($_eOffset_borderOpacity_props$$10$$) {
  D.$DvtTimelineOverview$$.$superclass$.$_applyParsedProperties$.call(this, $_eOffset_borderOpacity_props$$10$$);
  this.$_selectionMode$ = $_eOffset_borderOpacity_props$$10$$.$selectionMode$;
  this.$_markers$ = $_eOffset_borderOpacity_props$$10$$.$markers$;
  this.$_seriesIds$ = $_eOffset_borderOpacity_props$$10$$.$seriesIds$;
  this.$_defaultMarkerStyles$ = $_eOffset_borderOpacity_props$$10$$.$defaultMarkerStyles$;
  this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
  $_eOffset_borderOpacity_props$$10$$.$labelStyle$ && (this.$_labelStyle$ = new D.$DvtCSSStyle$$($_eOffset_borderOpacity_props$$10$$.$labelStyle$));
  $_eOffset_borderOpacity_props$$10$$ = "solid" == this.$getStyle$("_", "bs") ? (0,window.parseInt)(this.$getStyle$("_", "bof"), 10) : 1;
  var $_asOffset$$ = "solid" == this.$getStyle$("_as", "bs") ? (0,window.parseInt)(this.$getStyle$("_as", "bof"), 10) : 1, $_sOffset$$ = "solid" == this.$getStyle$("_s", "bs") ? (0,window.parseInt)(this.$getStyle$("_s", "bof"), 10) : 1;
  this.$_markerSpacingOffset$ = "none" != this.$_selectionMode$ ? window.Math.max($_asOffset$$, $_sOffset$$, $_eOffset_borderOpacity_props$$10$$, 1) / 2 + 1 : 1;
  this.$_defOpacity$ = this.$isVertical$() ? 0 : 0.75;
  this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
  this.$_radialFill$ = new D.$DvtLinearGradientFill$$(250, this.$_defColors$, this.$_defAlphas$);
  this.$_linearFill$ = new D.$DvtLinearGradientFill$$(180, this.$_defColors$, this.$_defAlphas$);
  $_eOffset_borderOpacity_props$$10$$ = this.$isVertical$() ? 0 : 1;
  this.$_border$ = new D.$DvtSolidStroke$$("#aadd77", $_eOffset_borderOpacity_props$$10$$)
};
D.$DvtTimelineOverview$$.prototype.$addLabel$ = function $$DvtTimelineOverview$$$$$addLabel$$($pos$$77$$, $text$$114$$, $width$$167$$, $height$$150$$, $maxWidth$$34$$, $id$$308$$) {
  D.$DvtTimelineOverview$$.$superclass$.$addLabel$.call(this, $pos$$77$$, $text$$114$$, $width$$167$$, $height$$150$$, $maxWidth$$34$$, $id$$308$$, this.$_labelStyle$)
};
D.$JSCompiler_StaticMethods_getDrawableById$$ = function $$JSCompiler_StaticMethods_getDrawableById$$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$309$$) {
  for(var $drawableId$$1$$ = "_mrk_" + $id$$309$$, $durationId$$ = "_drn_" + $id$$309$$, $numChildren$$16$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$11$$ = 0;$childIndex$$11$$ < $numChildren$$16$$;$childIndex$$11$$++) {
    var $drawable$$7$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getChildAt$($childIndex$$11$$);
    if(null != $drawable$$7$$ && ($drawableId$$1$$ == $drawable$$7$$.getId() || $durationId$$ == $drawable$$7$$.getId())) {
      return $drawable$$7$$
    }
  }
  return null
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$($drawable$$8$$) {
  return $drawable$$8$$.getId().substr(5)
};
D.$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($state$$100$$, $style$$120$$) {
  return this.$_borderStyles$[$state$$100$$ + $style$$120$$]
};
D.$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$($drawable$$9$$) {
  return null != $drawable$$9$$.$_node$ ? $drawable$$9$$.$_node$.$getX$() : $drawable$$9$$.$getMatrix$().$_tx$
};
D.$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$($drawable$$10$$) {
  return null != $drawable$$10$$.$_node$ ? $drawable$$10$$.$_node$.$getY$() : $drawable$$10$$.$getMatrix$().$_ty$
};
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$311_scaleX$$7$$) {
  $node$$311_scaleX$$7$$ = $node$$311_scaleX$$7$$.$getScaleX$();
  null == $node$$311_scaleX$$7$$ && ($node$$311_scaleX$$7$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$311_scaleX$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$312_scaleY$$7$$) {
  $node$$312_scaleY$$7$$ = $node$$312_scaleY$$7$$.$getScaleY$();
  null == $node$$312_scaleY$$7$$ && ($node$$312_scaleY$$7$$ = 1);
  return $node$$312_scaleY$$7$$
};
D.$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$168$$, $height$$151$$) {
  D.$DvtTimelineOverview$$.$superclass$.$parseDataXML$.call(this, $width$$168$$, $height$$151$$);
  if(null != this.$_markers$) {
    for(var $opt$$2$$ = (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)(this, this.$_start$, this.$_end$, $width$$168$$, $height$$151$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_8887_j$$124$$ = 0;$context$$inline_8887_j$$124$$ < this.$_markers$.length;$context$$inline_8887_j$$124$$++) {
      var $i$$inline_8888_marker$$19_node$$inline_8862$$ = this.$_markers$[$context$$inline_8887_j$$124$$];
      if(null == $i$$inline_8888_marker$$19_node$$inline_8862$$.$_endTime$) {
        var $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$ = $opt$$2$$, $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$ = "_mrk_" + $i$$inline_8888_marker$$19_node$$inline_8862$$.getId(), $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ = $i$$inline_8888_marker$$19_node$$inline_8862$$.$getColor$(), $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$ = $i$$inline_8888_marker$$19_node$$inline_8862$$.$_gradient$, 
        $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ = $i$$inline_8888_marker$$19_node$$inline_8862$$.$getOpacity$();
        null == $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ && ($durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ = this.$_defOpacity$, 0 == $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ && null != $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ && ($durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ = 1));
        var $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ = this.$getScaleX$($i$$inline_8888_marker$$19_node$$inline_8862$$), $cx$$inline_8873_scaleY$$inline_8869$$ = this.$getScaleY$($i$$inline_8888_marker$$19_node$$inline_8862$$), $j$$inline_8889_marker$$inline_8870$$ = $i$$inline_8888_marker$$19_node$$inline_8862$$.$getShape$();
        if(this.$isVertical$()) {
          var $j$$inline_8889_marker$$inline_8870$$ = "rectangle", $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ = 2 * $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$, $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$ = 2 * $cx$$inline_8873_scaleY$$inline_8869$$, $cx$$inline_8873_scaleY$$inline_8869$$ = $i$$inline_8888_marker$$19_node$$inline_8862$$.$getY$() + $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ / 
          2, $cy$$inline_8874$$ = $i$$inline_8888_marker$$19_node$$inline_8862$$.$getX$() + $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$ / 2
        }else {
          $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ *= $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$, $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$ *= $cx$$inline_8873_scaleY$$inline_8869$$, $cx$$inline_8873_scaleY$$inline_8869$$ = $i$$inline_8888_marker$$19_node$$inline_8862$$.$getX$() + $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ / 
          2, $cy$$inline_8874$$ = $i$$inline_8888_marker$$19_node$$inline_8862$$.$getY$() + $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$ / 2
        }
        $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$ = new D.$DvtSimpleMarker$$(this.$getCtx$(), $j$$inline_8889_marker$$inline_8870$$, null, $cx$$inline_8873_scaleY$$inline_8869$$, $cy$$inline_8874$$, $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$, $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$, null, $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$);
        $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$.$_node$ = $i$$inline_8888_marker$$19_node$$inline_8862$$;
        null == $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ && $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ == this.$_defOpacity$ && null == $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$ ? ($duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$ = "circle" == $j$$inline_8889_marker$$inline_8870$$ ? this.$_radialFill$ : this.$_linearFill$, $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ = 
        this.$_border$) : ($colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ = this.$_defColors$, null != $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ && (D.$DvtTimeUtils$$.$supportsTouch$() ? $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ = [$color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$] : ($colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ = 
        D.$DvtColorUtils$$.$getPastel$($color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$, 0.5), $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$ = D.$DvtColorUtils$$.$getDarker$($color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$, 0.5), $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ = [$colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$, 
        $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$, $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$])), $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$ = [$durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$, $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$, $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$], $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$ = 
        null == $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$ ? "circle" == $j$$inline_8889_marker$$inline_8870$$ ? new D.$DvtLinearGradientFill$$(250, $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$, $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$) : new D.$DvtLinearGradientFill$$(180, $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$, 
        $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$) : new D.$DvtSolidFill$$($color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$, $alphas$$inline_8879_darker$$inline_8878_height$$inline_8872_sz$$inline_8863$$[0]), $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ = new D.$DvtSolidStroke$$($color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$, $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$));
        $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$.$setFill$($duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$);
        $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$.$setStroke$($color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$);
        "none" != this.$_selectionMode$ && $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$.$setSelectable$(!0);
        $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ = this.$getNumChildren$();
        $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ = this.$getChildAt$($color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ - 1);
        $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ > this.$_lastChildIndex$ && ("tb" == $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$.getId() || "arr" == $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$.getId()) ? this.$addChildAt$($displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$, $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ - this.$_lastChildIndex$) : 
        this.$addChild$($displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$);
        $i$$inline_8888_marker$$19_node$$inline_8862$$.$setDisplayable$($displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$);
        this.$applyState$($displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$, "_");
        (this.$isVertical$() || "rectangle" == $j$$inline_8889_marker$$inline_8870$$ || "diamond" == $j$$inline_8889_marker$$inline_8870$$ || "triangleUp" == $j$$inline_8889_marker$$inline_8870$$ || "triangleDown" == $j$$inline_8889_marker$$inline_8870$$ || "plus" == $j$$inline_8889_marker$$inline_8870$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$)
      }else {
        $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_8888_marker$$19_node$$inline_8862$$
      }
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_8887_j$$124$$ = this.$getCtx$();
    for($i$$inline_8888_marker$$19_node$$inline_8862$$ = this.$_maxDurationY$;0 < $i$$inline_8888_marker$$19_node$$inline_8862$$;$i$$inline_8888_marker$$19_node$$inline_8862$$--) {
      for($j$$inline_8889_marker$$inline_8870$$ = 0;$j$$inline_8889_marker$$inline_8870$$ < $durationMarkers$$.length;$j$$inline_8889_marker$$inline_8870$$++) {
        $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$ = $durationMarkers$$[$j$$inline_8889_marker$$inline_8870$$], $i$$inline_8888_marker$$19_node$$inline_8862$$ == $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$.$_durationLevel$ && ($duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$.getTime(), 
        this.$isVertical$() ? this.$Height$ : this.$Width$), $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$ = "_drn_" + $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$.getId(), $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ = 9 + 5 * $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$.$_durationLevel$, $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ = 
        D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$.$_endTime$, this.$isVertical$() ? this.$Height$ : this.$Width$), $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$ = this.$isVertical$() ? this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8887_j$$124$$, 0, $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$, $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$, 
        $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ - $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$, $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$) : new D.$DvtRect$$($context$$inline_8887_j$$124$$, this.$Width$ - $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$, $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$, 
        $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$, $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ - $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$, $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$) : this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8887_j$$124$$, this.$Width$ - $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$, 
        this.$Height$ - $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ - 20, $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ - $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$, $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$, $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$) : new D.$DvtRect$$($context$$inline_8887_j$$124$$, 
        $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$, this.$Height$ - $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ - 20, $colors$$inline_8876_lighter$$inline_8877_scaleX$$inline_8868_width$$inline_8871_x2$$inline_8894$$ - $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$, $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$, $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$), 
        $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$.$setFill$(new D.$DvtSolidFill$$($color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$.$_durationFillColor$)), $displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$ = new D.$DvtSolidStroke$$(this.$getStyle$("_", "dbc"), 1, 1), $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$.$setStroke$($displayable$$inline_8875_durationId$$inline_8892_feelerStroke$$inline_8896_itemId$$inline_8864$$), 
        (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$), $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$.$_node$ = $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$, this.$addChild$($duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$), $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$.$_durationBar$ = 
        $duration$$inline_8895_fill$$inline_8880_isGradient$$inline_8866_x$$inline_8891$$, $color$$inline_8865_count$$inline_8882_node$$inline_8890_stroke$$inline_8881$$.$_durationY$ = $durationY$$inline_8893_lastChild$$inline_8883_opacity$$inline_8867$$ - 2)
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
    this.$_markerSize$ = $opt$$2$$
  }
};
D.$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$($durationMarkers$$1$$) {
  this.$_maxDurationY$ = 0;
  var $markerSeries$$ = null;
  null == this.$_durationColorMap$ && (this.$_durationColorMap$ = {});
  for(var $i$$859$$ = 0;$i$$859$$ < $durationMarkers$$1$$.length;$i$$859$$++) {
    var $marker$$20$$ = $durationMarkers$$1$$[$i$$859$$], $id$$310$$ = $marker$$20$$.getId(), $sId$$2$$ = $id$$310$$.substring($id$$310$$.indexOf(":") + 1, $id$$310$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$20$$.$_durationLevel$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)(this, $marker$$20$$, $durationMarkers$$1$$);
    null == $marker$$20$$.$_durationFillColor$ && (null == this.$_durationColorMap$[$id$$310$$] ? (this.$_durationColorMap$[$id$$310$$] = this.$_colorCount$, $marker$$20$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$20$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$310$$]])
  }
};
D.$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : null
};
D.$DvtTimelineOverview$$.prototype.getDurationColorMap = D.$DvtTimelineOverview$$.prototype.$getDurationColorMap$;
D.$JSCompiler_StaticMethods_calculateOptimalSize$$ = function $$JSCompiler_StaticMethods_calculateOptimalSize$$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$48$$, $end$$32$$, $width$$169$$, $height$$152$$, $size$$50$$) {
  for(var $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$, $JSCompiler_object_inline_maxy_11609_result$$inline_11499$$, $result$$3$$ = {max:1, $arr$:[]}, $canvasSize$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$152$$ : $width$$169$$, $i$$860$$ = 0;$i$$860$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$860$$++) {
    var $marker$$21_node$$inline_8903$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$860$$];
    if(null != $marker$$21_node$$inline_8903$$.$_endTime$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$48$$, $end$$32$$, $marker$$21_node$$inline_8903$$.getTime(), $canvasSize$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$) && ($JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$ = $canvasSize$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$);
      $marker$$21_node$$inline_8903$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$)
    }else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_8912_start$$inline_8904$$ = $start$$48$$, $counter$$inline_8916_end$$inline_8905$$ = $end$$32$$, $cy$$inline_8914_size$$inline_8906$$ = $canvasSize$$, $borderOffset$$inline_8913_hsz$$inline_8907$$ = $size$$50$$ / 2, $result$$inline_8908$$ = $result$$3$$, $maxHeight$$inline_8909$$ = $height$$152$$, $hszx$$inline_8910$$ = $borderOffset$$inline_8913_hsz$$inline_8907$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$getScaleX$($marker$$21_node$$inline_8903$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$_markerSpacingOffset$, $hszy$$inline_8911$$ = $borderOffset$$inline_8913_hsz$$inline_8907$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$getScaleY$($marker$$21_node$$inline_8903$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$_markerSpacingOffset$, $cx$$inline_8912_start$$inline_8904$$ = 
      D.$DvtTimeUtils$$.$getDatePosition$($cx$$inline_8912_start$$inline_8904$$, $counter$$inline_8916_end$$inline_8905$$, $marker$$21_node$$inline_8903$$.getTime(), $cy$$inline_8914_size$$inline_8906$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$) && ($cx$$inline_8912_start$$inline_8904$$ = $cy$$inline_8914_size$$inline_8906$$ - $cx$$inline_8912_start$$inline_8904$$ - 2 * $hszx$$inline_8910$$);
      if($JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$isVertical$()) {
        $borderOffset$$inline_8913_hsz$$inline_8907$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$getStyle$("_", "bs") && ($borderOffset$$inline_8913_hsz$$inline_8907$$ = (0,window.parseInt)($JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$getStyle$("_", "bw"), 10)), $cy$$inline_8914_size$$inline_8906$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$isRTL$() ? $borderOffset$$inline_8913_hsz$$inline_8907$$ + 4 : $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$Width$ - 
        2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$.$getScaleX$($marker$$21_node$$inline_8903$$) - $borderOffset$$inline_8913_hsz$$inline_8907$$ - 4
      }else {
        for(var $cy$$inline_8914_size$$inline_8906$$ = 3, $maxy$$inline_11505_maxy$$inline_8915$$ = 0, $counter$$inline_8916_end$$inline_8905$$ = 0;1 > $counter$$inline_8916_end$$inline_8905$$;) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8902_x$$299$$;
          $JSCompiler_object_inline_maxy_11609_result$$inline_11499$$ = $result$$inline_8908$$;
          var $shape$$inline_11500$$ = $marker$$21_node$$inline_8903$$.$getShape$(), $cx$$inline_11501$$ = $cx$$inline_8912_start$$inline_8904$$, $cy$$inline_11502$$ = $cy$$inline_8914_size$$inline_8906$$, $hszx$$inline_11503$$ = $hszx$$inline_8910$$, $hszy$$inline_11504$$ = $hszy$$inline_8911$$, $hsz$$inline_11506$$ = $borderOffset$$inline_8913_hsz$$inline_8907$$, $maxHeight$$inline_11507$$ = $maxHeight$$inline_8909$$;
          "above" == $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$.$_overviewPosition$ && ($cy$$inline_11502$$ += (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)($JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$));
          for(var $i$$inline_11508$$ = 0;$i$$inline_11508$$ < $JSCompiler_object_inline_maxy_11609_result$$inline_11499$$.$arr$.length;$i$$inline_11508$$++) {
            var $prevMarker$$inline_11509_prevScaleY$$inline_11514$$ = $JSCompiler_object_inline_maxy_11609_result$$inline_11499$$.$arr$[$i$$inline_11508$$], $prevX$$inline_11510_xDist$$inline_11515$$ = $prevMarker$$inline_11509_prevScaleY$$inline_11514$$.$getX$(), $prevY$$inline_11511$$ = $prevMarker$$inline_11509_prevScaleY$$inline_11514$$.$getY$(), $height$$inline_11517_prevShape$$inline_11512$$ = $prevMarker$$inline_11509_prevScaleY$$inline_11514$$.$getShape$(), $prevScaleX$$inline_11513$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$.$getScaleX$($prevMarker$$inline_11509_prevScaleY$$inline_11514$$), $prevMarker$$inline_11509_prevScaleY$$inline_11514$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$.$getScaleY$($prevMarker$$inline_11509_prevScaleY$$inline_11514$$), $prevX$$inline_11510_xDist$$inline_11515$$ = window.Math.abs($cx$$inline_11501$$ - $prevX$$inline_11510_xDist$$inline_11515$$), 
            $minDist$$inline_11516$$ = $hsz$$inline_11506$$ * $prevScaleX$$inline_11513$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$.$_markerSpacingOffset$ + $hszx$$inline_11503$$;
            if(!($prevX$$inline_11510_xDist$$inline_11515$$ >= $minDist$$inline_11516$$) && ($height$$inline_11517_prevShape$$inline_11512$$ = "circle" == $shape$$inline_11500$$ && "circle" == $height$$inline_11517_prevShape$$inline_11512$$ && $hszx$$inline_11503$$ == $hszy$$inline_11504$$ && $prevScaleX$$inline_11513$$ == $prevMarker$$inline_11509_prevScaleY$$inline_11514$$ ? window.Math.sqrt($minDist$$inline_11516$$ * $minDist$$inline_11516$$ - $prevX$$inline_11510_xDist$$inline_11515$$ * $prevX$$inline_11510_xDist$$inline_11515$$) : 
            $hsz$$inline_11506$$ * $prevMarker$$inline_11509_prevScaleY$$inline_11514$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$.$_markerSpacingOffset$ + $hszy$$inline_11504$$, $height$$inline_11517_prevShape$$inline_11512$$ > window.Math.abs($cy$$inline_11502$$ - $prevY$$inline_11511$$) && ($cy$$inline_11502$$ = $prevY$$inline_11511$$ + $height$$inline_11517_prevShape$$inline_11512$$, $maxy$$inline_11505_maxy$$inline_8915$$ = window.Math.max($maxy$$inline_11505_maxy$$inline_8915$$, 
            $cy$$inline_11502$$ + $height$$inline_11517_prevShape$$inline_11512$$), 1 <= $hsz$$inline_11506$$ && void 0 != $maxHeight$$inline_11507$$ && $maxy$$inline_11505_maxy$$inline_8915$$ > $maxHeight$$inline_11507$$))) {
              break
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$ = $cy$$inline_11502$$;
          $JSCompiler_object_inline_maxy_11609_result$$inline_11499$$ = $maxy$$inline_11505_maxy$$inline_8915$$;
          $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$ == $cy$$inline_8914_size$$inline_8906$$ && ($counter$$inline_8916_end$$inline_8905$$ = 1);
          $maxy$$inline_11505_maxy$$inline_8915$$ = $JSCompiler_object_inline_maxy_11609_result$$inline_11499$$;
          $cy$$inline_8914_size$$inline_8906$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11498_JSCompiler_object_inline_cy_11608$$;
          $counter$$inline_8916_end$$inline_8905$$++
        }
      }
      $marker$$21_node$$inline_8903$$.$setX$($cx$$inline_8912_start$$inline_8904$$);
      $marker$$21_node$$inline_8903$$.$setY$($cy$$inline_8914_size$$inline_8906$$);
      $result$$inline_8908$$.$arr$.push($marker$$21_node$$inline_8903$$);
      $maxy$$inline_11505_maxy$$inline_8915$$ > $result$$inline_8908$$.max && ($result$$inline_8908$$.max = $maxy$$inline_11505_maxy$$inline_8915$$);
      if($result$$3$$.max > $height$$152$$) {
        break
      }
    }
  }
  return $result$$3$$.max > $height$$152$$ && 1 < $size$$50$$ ? (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$48$$, $end$$32$$, $width$$169$$, $height$$152$$, $size$$50$$ - 1) : $size$$50$$
};
D.$JSCompiler_StaticMethods_calculateDurationY$$ = function $$JSCompiler_StaticMethods_calculateDurationY$$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$63$$, $durationMarkers$$3$$) {
  var $index$$246$$ = $durationMarkers$$3$$.length, $startTime$$7$$ = $item$$63$$.getTime(), $y$$267$$ = $item$$63$$.$_durationLevel$;
  null == $y$$267$$ && ($y$$267$$ = 1);
  for(var $i$$863$$ = 0;$i$$863$$ < $index$$246$$;$i$$863$$++) {
    var $currItem_curry$$ = $durationMarkers$$3$$[$i$$863$$];
    if($currItem_curry$$ != $item$$63$$) {
      var $currEndTime$$ = $currItem_curry$$.$_endTime$;
      if(null != $currEndTime$$) {
        var $currStartTime$$ = $currItem_curry$$.getTime(), $currItem_curry$$ = $currItem_curry$$.$_durationLevel$;
        null == $currItem_curry$$ && ($currItem_curry$$ = 1);
        $startTime$$7$$ >= $currStartTime$$ && ($startTime$$7$$ <= $currEndTime$$ && $y$$267$$ == $currItem_curry$$) && ($y$$267$$ = $currItem_curry$$ + 1, $item$$63$$.$_durationLevel$ = $y$$267$$, $y$$267$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$63$$, $durationMarkers$$3$$))
      }
    }
  }
  $y$$267$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$267$$);
  return $y$$267$$
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOver$$($event$$809_isSelected$$1_itemId$$3$$) {
  var $drawable$$11$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$809_isSelected$$1_itemId$$3$$);
  if(null != $drawable$$11$$) {
    if(null != $drawable$$11$$.$_node$) {
      var $evt$$66_i$$864_tooltip$$48$$ = $drawable$$11$$.$_node$.$_desc$;
      null != $evt$$66_i$$864_tooltip$$48$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$809_isSelected$$1_itemId$$3$$.pageX, $event$$809_isSelected$$1_itemId$$3$$.pageY, $evt$$66_i$$864_tooltip$$48$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer")
    }
    if("none" != this.$_selectionMode$) {
      $event$$809_isSelected$$1_itemId$$3$$ = !1;
      if(null != this.$_selectedMarkers$) {
        for($evt$$66_i$$864_tooltip$$48$$ = 0;$evt$$66_i$$864_tooltip$$48$$ < this.$_selectedMarkers$.length;$evt$$66_i$$864_tooltip$$48$$++) {
          if($drawable$$11$$ == this.$_selectedMarkers$[$evt$$66_i$$864_tooltip$$48$$]) {
            $event$$809_isSelected$$1_itemId$$3$$ = !0;
            break
          }
        }
      }
      $event$$809_isSelected$$1_itemId$$3$$ || ($event$$809_isSelected$$1_itemId$$3$$ = this.$getItemId$($drawable$$11$$), $evt$$66_i$$864_tooltip$$48$$ = new D.$DvtTimelineOverviewEvent$$("highlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$66_i$$864_tooltip$$48$$, "itemId", $event$$809_isSelected$$1_itemId$$3$$), this.dispatchEvent($evt$$66_i$$864_tooltip$$48$$), (0,D.$JSCompiler_StaticMethods_highlightMarker$$)(this, $drawable$$11$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOut$$($drawable$$12_event$$810$$) {
  $drawable$$12_event$$810$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$810$$);
  if(null != $drawable$$12_event$$810$$ && !(0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$12_event$$810$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$2_itemId$$4$$ = !1;
    if(null != this.$_selectedMarkers$) {
      for(var $evt$$67_i$$865$$ = 0;$evt$$67_i$$865$$ < this.$_selectedMarkers$.length;$evt$$67_i$$865$$++) {
        if($drawable$$12_event$$810$$ == this.$_selectedMarkers$[$evt$$67_i$$865$$]) {
          $isSelected$$2_itemId$$4$$ = !0;
          break
        }
      }
    }
    $isSelected$$2_itemId$$4$$ || ($isSelected$$2_itemId$$4$$ = this.$getItemId$($drawable$$12_event$$810$$), $evt$$67_i$$865$$ = new D.$DvtTimelineOverviewEvent$$("unhighlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$67_i$$865$$, "itemId", $isSelected$$2_itemId$$4$$), this.dispatchEvent($evt$$67_i$$865$$), (0,D.$JSCompiler_StaticMethods_unhighlightMarker$$)(this, $drawable$$12_event$$810$$))
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeClick$ = function $$DvtTimelineOverview$$$$$HandleShapeClick$$($event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$, $drawable$$13_newPos$$inline_8925_pageX$$14$$, $evt$$inline_8923_itemId$$inline_11522_pageY$$14$$) {
  $drawable$$13_newPos$$inline_8925_pageX$$14$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeClick$.call(this, $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$, $drawable$$13_newPos$$inline_8925_pageX$$14$$, $evt$$inline_8923_itemId$$inline_11522_pageY$$14$$);
  if(null != $drawable$$13_newPos$$inline_8925_pageX$$14$$ && ($event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$ = $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$.ctrlKey || $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$.shiftKey || (0,D.$DvtAgent$isTouchDevice$$)(), "none" != this.$_selectionMode$)) {
    $evt$$inline_8923_itemId$$inline_11522_pageY$$14$$ = this.$getItemId$($drawable$$13_newPos$$inline_8925_pageX$$14$$);
    var $evt$$inline_11523$$ = new D.$DvtTimelineOverviewEvent$$("selection");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11523$$, "itemId", $evt$$inline_8923_itemId$$inline_11522_pageY$$14$$);
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11523$$, "multiSelect", $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$);
    this.dispatchEvent($evt$$inline_11523$$);
    $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$ = $drawable$$13_newPos$$inline_8925_pageX$$14$$.$_node$.getTime();
    null != $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$ && ($evt$$inline_8923_itemId$$inline_11522_pageY$$14$$ = new D.$DvtTimelineOverviewEvent$$("scrollTime"), $evt$$inline_8923_itemId$$inline_11522_pageY$$14$$.setTime($event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$), this.dispatchEvent($evt$$inline_8923_itemId$$inline_11522_pageY$$14$$), $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$ = 
    this.$getChildAt$(1), $drawable$$13_newPos$$inline_8925_pageX$$14$$ = this.$isVertical$() ? this.$getX$($drawable$$13_newPos$$inline_8925_pageX$$14$$) - $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$.getHeight() / 2 : this.$getX$($drawable$$13_newPos$$inline_8925_pageX$$14$$) - $event$$811_isMultiSelect$$inline_8921_slidingWindow$$inline_8924_time$$inline_8922$$.getWidth() / 2, (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $drawable$$13_newPos$$inline_8925_pageX$$14$$))
  }
};
D.$JSCompiler_StaticMethods_highlightMarker$$ = function $$JSCompiler_StaticMethods_highlightMarker$$$($JSCompiler_StaticMethods_highlightMarker$self$$, $drawable$$17$$) {
  if(null != $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$) {
    for(var $i$$866$$ = 0;$i$$866$$ < $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$.length;$i$$866$$++) {
      if($drawable$$17$$ == $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$[$i$$866$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_highlightMarker$self$$.$applyState$($drawable$$17$$, "_h")
};
D.$JSCompiler_StaticMethods_unhighlightMarker$$ = function $$JSCompiler_StaticMethods_unhighlightMarker$$$($JSCompiler_StaticMethods_unhighlightMarker$self$$, $drawable$$18$$) {
  if(null != $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$) {
    for(var $i$$867$$ = 0;$i$$867$$ < $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$.length;$i$$867$$++) {
      if($drawable$$18$$ == $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$[$i$$867$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_unhighlightMarker$self$$.$applyState$($drawable$$18$$, "_")
};
D.$JSCompiler_StaticMethods_addSelectedMarker$$ = function $$JSCompiler_StaticMethods_addSelectedMarker$$$($JSCompiler_StaticMethods_addSelectedMarker$self$$, $drawable$$22$$) {
  null == $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ && ($JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ = []);
  var $lastSelectedMarker$$ = null;
  0 < $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length && ($lastSelectedMarker$$ = $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$[$JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length - 1]);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.push($drawable$$22$$);
  null != $lastSelectedMarker$$ && $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($lastSelectedMarker$$, "_s");
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($drawable$$22$$, "_as")
};
D.$DvtTimelineOverview$$.prototype.$applyState$ = function $$DvtTimelineOverview$$$$$applyState$$($drawable$$25$$, $state$$101$$) {
  if($drawable$$25$$ instanceof D.$DvtSimpleMarker$$) {
    var $borderWidth$$19_requiresBorderMarker$$ = !1, $requiresGlowMarker$$ = !1;
    if("solid" == this.$getStyle$($state$$101$$, "bs")) {
      var $borderWidth$$19_requiresBorderMarker$$ = !0, $borderColor$$62_stroke$$119$$ = this.$getStyle$($state$$101$$, "bc");
      null == $borderColor$$62_stroke$$119$$ && ($borderColor$$62_stroke$$119$$ = "#000000");
      var $glowColor_glowStroke_width$$inline_8931$$ = this.$getStyle$($state$$101$$, "gc");
      null != $glowColor_glowStroke_width$$inline_8931$$ && "none" != $glowColor_glowStroke_width$$inline_8931$$ && ($requiresGlowMarker$$ = !0)
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    !$borderWidth$$19_requiresBorderMarker$$ && null != $borderMarker$$ ? (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = null, null != $glowMarker_glowOffset$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = null)) : !$requiresGlowMarker$$ && null != $glowMarker_glowOffset$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = null);
    var $borderColor$$inline_8930_id$$311_markerType$$2$$ = $drawable$$25$$.$getType$();
    if($borderWidth$$19_requiresBorderMarker$$) {
      var $borderWidth$$19_requiresBorderMarker$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "bw"), 10), $borderOffset$$1$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "bof"), 10);
      if(null == $borderMarker$$) {
        if("circle" == $borderColor$$inline_8930_id$$311_markerType$$2$$) {
          this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0);
          var $width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$172$$ / 2, $cy$$67$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$155$$ / 2
        }else {
          this.$isVertical$() ? ($width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + ($borderWidth$$19_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + ($borderWidth$$19_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getY$($drawable$$25$$) - ($borderWidth$$19_requiresBorderMarker$$ + 1) / 2 + $width$$172$$ / 2, $cy$$67$$ = this.$getX$($drawable$$25$$) - ($borderWidth$$19_requiresBorderMarker$$ + 
          1) / 2 + $height$$155$$ / 2) : ($width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$172$$ / 2, $cy$$67$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$155$$ / 2)
        }
        $borderMarker$$ = new D.$DvtSimpleMarker$$(this.$getCtx$(), $borderColor$$inline_8930_id$$311_markerType$$2$$, null, $cx$$66$$, $cy$$67$$, $width$$172$$, $height$$155$$, null, $drawable$$25$$.getId() + "_border");
        this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$));
        $drawable$$25$$.$_borderMarker$ = $borderMarker$$;
        $borderMarker$$.$setFill$(this.$_markerBorderFill$)
      }
      $borderColor$$62_stroke$$119$$ = new D.$DvtSolidStroke$$($borderColor$$62_stroke$$119$$, this.$getStyle$($state$$101$$, "bo"), $borderWidth$$19_requiresBorderMarker$$);
      $borderMarker$$.$setStroke$($borderColor$$62_stroke$$119$$);
      (this.$isVertical$() || "rectangle" == $borderColor$$inline_8930_id$$311_markerType$$2$$ || "diamond" == $borderColor$$inline_8930_id$$311_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8930_id$$311_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8930_id$$311_markerType$$2$$ || "plus" == $borderColor$$inline_8930_id$$311_markerType$$2$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($borderMarker$$);
      $requiresGlowMarker$$ && (null == $glowMarker_glowOffset$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $borderWidth$$19_requiresBorderMarker$$, "circle" == $borderColor$$inline_8930_id$$311_markerType$$2$$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), 
      $cx$$66$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$172$$ / 2, $cy$$67$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$155$$ / 2) : this.$isVertical$() ? ($width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 3) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 3) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getY$($drawable$$25$$) + $width$$172$$ / 2, $cy$$67$$ = this.$getX$($drawable$$25$$) - 
      1 + $height$$155$$ / 2) : ($width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$172$$ / 2, $cy$$67$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$155$$ / 2), $glowMarker_glowOffset$$ = new D.$DvtSimpleMarker$$(this.$getCtx$(), 
      $borderColor$$inline_8930_id$$311_markerType$$2$$, null, $cx$$66$$, $cy$$67$$, $width$$172$$, $height$$155$$, null, $drawable$$25$$.getId() + "_glow"), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_8931$$ = new D.$DvtSolidStroke$$($glowColor_glowStroke_width$$inline_8931$$, this.$getStyle$($state$$101$$, 
      "go"), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_8931$$), (this.$isVertical$() || "rectangle" == $borderColor$$inline_8930_id$$311_markerType$$2$$ || "diamond" == $borderColor$$inline_8930_id$$311_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8930_id$$311_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8930_id$$311_markerType$$2$$ || "plus" == $borderColor$$inline_8930_id$$311_markerType$$2$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && 
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($glowMarker_glowOffset$$))
    }
  }else {
    if(($borderColor$$inline_8930_id$$311_markerType$$2$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_8930_id$$311_markerType$$2$$.substring(0, 5)) {
      $borderColor$$inline_8930_id$$311_markerType$$2$$ = this.$getStyle$($state$$101$$, "dbc"), null == $borderColor$$inline_8930_id$$311_markerType$$2$$ && ($borderColor$$inline_8930_id$$311_markerType$$2$$ = "#000000"), $glowColor_glowStroke_width$$inline_8931$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "dbw"), 10), $drawable$$25$$.$setStroke$(new D.$DvtSolidStroke$$($borderColor$$inline_8930_id$$311_markerType$$2$$, 1, $glowColor_glowStroke_width$$inline_8931$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$getAutomation$ = function $$DvtTimelineOverview$$$$$getAutomation$$() {
  this.$_Automation$ || (this.$_Automation$ = new D.$DvtTimelineOverviewAutomation$$(this));
  return this.$_Automation$
};
D.$DvtTimelineOverview$$.prototype.getAutomation = D.$DvtTimelineOverview$$.prototype.$getAutomation$;
D.$DvtTimelineOverviewParser$$ = function $$DvtTimelineOverviewParser$$$($timelineOverview$$) {
  this.Init($timelineOverview$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewParser$$, D.$DvtObj$$, "DvtTimelineOverviewParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverviewParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$6$$) {
  this.$_view$ = $overview$$6$$;
  this.$_parser$ = new D.$DvtXmlParser$$
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$96_xmlString$$9$$) {
  var $childNodes$$24_rootNode$$4$$ = this.$_parser$.parse($ret$$96_xmlString$$9$$);
  $ret$$96_xmlString$$9$$ = this.$ParseRootAttributes$($childNodes$$24_rootNode$$4$$);
  var $childNodes$$24_rootNode$$4$$ = $childNodes$$24_rootNode$$4$$.$getChildNodes$(), $JSCompiler_inline_result$$66_xmlNode$$inline_8953$$;
  if($JSCompiler_inline_result$$66_xmlNode$$inline_8953$$ = $childNodes$$24_rootNode$$4$$[0]) {
    var $ret$$inline_8954$$ = {};
    $ret$$inline_8954$$.width = $JSCompiler_inline_result$$66_xmlNode$$inline_8953$$.$getAttr$("width");
    $ret$$inline_8954$$.height = $JSCompiler_inline_result$$66_xmlNode$$inline_8953$$.$getAttr$("height");
    $ret$$inline_8954$$.$ticks$ = $JSCompiler_inline_result$$66_xmlNode$$inline_8953$$.$getChildNodes$();
    $JSCompiler_inline_result$$66_xmlNode$$inline_8953$$ = $ret$$inline_8954$$
  }else {
    $JSCompiler_inline_result$$66_xmlNode$$inline_8953$$ = null
  }
  $ret$$96_xmlString$$9$$.$timeAxisInfo$ = $JSCompiler_inline_result$$66_xmlNode$$inline_8953$$;
  $ret$$96_xmlString$$9$$.$markers$ = this.$_parseDataNode$($childNodes$$24_rootNode$$4$$[1], $ret$$96_xmlString$$9$$.$defaultMarkerStyles$);
  2 < $childNodes$$24_rootNode$$4$$.length && ($ret$$96_xmlString$$9$$.$formattedTimeRanges$ = !$childNodes$$24_rootNode$$4$$[2] ? null : $childNodes$$24_rootNode$$4$$[2].$getChildNodes$());
  return $ret$$96_xmlString$$9$$
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$71$$) {
  var $ret$$97$$ = {};
  $ret$$97$$.start = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("start"));
  $ret$$97$$.end = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("end"));
  $ret$$97$$.width = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("width"));
  $ret$$97$$.$renderStart$ = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("renstart"));
  $ret$$97$$.currentTime = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("ocd"));
  $ret$$97$$.orientation = $xmlNode$$71$$.$getAttr$("orn");
  $ret$$97$$.$overviewPosition$ = $xmlNode$$71$$.$getAttr$("ovp");
  $ret$$97$$.$selectionMode$ = $xmlNode$$71$$.$getAttr$("selmode");
  $ret$$97$$.$isRtl$ = $xmlNode$$71$$.$getAttr$("rtl");
  $ret$$97$$.borderTopStyle = $xmlNode$$71$$.$getAttr$("_bts");
  $ret$$97$$.borderTopColor = $xmlNode$$71$$.$getAttr$("_btc");
  $ret$$97$$.$seriesIds$ = $xmlNode$$71$$.$getAttr$("sid");
  $ret$$97$$.$animationOnClick$ = $xmlNode$$71$$.$getAttr$("_aoc");
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $xmlNode$$71$$.$getAttr$("_ds");
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $xmlNode$$71$$.$getAttr$("_dsx");
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $xmlNode$$71$$.$getAttr$("_dsy");
  $borderStyles_defaultMarkerStyles$$.opacity = $xmlNode$$71$$.$getAttr$("_do");
  $borderStyles_defaultMarkerStyles$$.color = $xmlNode$$71$$.$getAttr$("_fc");
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $xmlNode$$71$$.$getAttr$("_ph");
  $ret$$97$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$97$$.$handleFillColor$ = $xmlNode$$71$$.$getAttr$("_hfc");
  $ret$$97$$.$handleTextureColor$ = $xmlNode$$71$$.$getAttr$("_htc");
  $ret$$97$$.$handleBackgroundImage$ = $xmlNode$$71$$.$getAttr$("_hbi");
  $ret$$97$$.$handleWidth$ = $xmlNode$$71$$.$getAttr$("_hw");
  $ret$$97$$.$handleHeight$ = $xmlNode$$71$$.$getAttr$("_hh");
  $ret$$97$$.$windowBackgroundColor$ = $xmlNode$$71$$.$getAttr$("_wbc");
  $ret$$97$$.$windowBorderTopStyle$ = $xmlNode$$71$$.$getAttr$("_wbts");
  $ret$$97$$.$windowBorderRightStyle$ = $xmlNode$$71$$.$getAttr$("_wbrs");
  $ret$$97$$.$windowBorderBottomStyle$ = $xmlNode$$71$$.$getAttr$("_wbbs");
  $ret$$97$$.$windowBorderLeftStyle$ = $xmlNode$$71$$.$getAttr$("_wbls");
  $ret$$97$$.$windowBorderTopColor$ = $xmlNode$$71$$.$getAttr$("_wbtc");
  $ret$$97$$.$windowBorderRightColor$ = $xmlNode$$71$$.$getAttr$("_wbrc");
  $ret$$97$$.$windowBorderBottomColor$ = $xmlNode$$71$$.$getAttr$("_wbbc");
  $ret$$97$$.$windowBorderLeftColor$ = $xmlNode$$71$$.$getAttr$("_wblc");
  $ret$$97$$.$overviewBackgroundColor$ = $xmlNode$$71$$.$getAttr$("_obc");
  $ret$$97$$.$currentTimeIndicatorColor$ = $xmlNode$$71$$.$getAttr$("_ctic");
  $ret$$97$$.$timeIndicatorColor$ = $xmlNode$$71$$.$getAttr$("_tic");
  $ret$$97$$.$timeAxisBarColor$ = $xmlNode$$71$$.$getAttr$("_tabc");
  $ret$$97$$.$timeAxisBarOpacity$ = $xmlNode$$71$$.$getAttr$("_tabo");
  $ret$$97$$.$labelStyle$ = $xmlNode$$71$$.$getAttr$("_ls");
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $xmlNode$$71$$.$getAttr$("_bs");
  $borderStyles_defaultMarkerStyles$$._bc = $xmlNode$$71$$.$getAttr$("_bc");
  $borderStyles_defaultMarkerStyles$$._bw = $xmlNode$$71$$.$getAttr$("_bw");
  $borderStyles_defaultMarkerStyles$$._bof = $xmlNode$$71$$.$getAttr$("_bof");
  $borderStyles_defaultMarkerStyles$$._bo = $xmlNode$$71$$.$getAttr$("_bo");
  $borderStyles_defaultMarkerStyles$$._gc = $xmlNode$$71$$.$getAttr$("_gc");
  $borderStyles_defaultMarkerStyles$$._go = $xmlNode$$71$$.$getAttr$("_go");
  $borderStyles_defaultMarkerStyles$$._dbs = $xmlNode$$71$$.$getAttr$("_dbs");
  $borderStyles_defaultMarkerStyles$$._dbc = $xmlNode$$71$$.$getAttr$("_dbc");
  $borderStyles_defaultMarkerStyles$$._dbw = $xmlNode$$71$$.$getAttr$("_dbw");
  $borderStyles_defaultMarkerStyles$$._hbs = $xmlNode$$71$$.$getAttr$("_hbs");
  $borderStyles_defaultMarkerStyles$$._hbc = $xmlNode$$71$$.$getAttr$("_hbc");
  $borderStyles_defaultMarkerStyles$$._hbw = $xmlNode$$71$$.$getAttr$("_hbw");
  $borderStyles_defaultMarkerStyles$$._hbof = $xmlNode$$71$$.$getAttr$("_hbof");
  $borderStyles_defaultMarkerStyles$$._hbo = $xmlNode$$71$$.$getAttr$("_hbo");
  $borderStyles_defaultMarkerStyles$$._hgc = $xmlNode$$71$$.$getAttr$("_hgc");
  $borderStyles_defaultMarkerStyles$$._hgo = $xmlNode$$71$$.$getAttr$("_hgo");
  $borderStyles_defaultMarkerStyles$$._hdbs = $xmlNode$$71$$.$getAttr$("_hdbs");
  $borderStyles_defaultMarkerStyles$$._hdbc = $xmlNode$$71$$.$getAttr$("_hdbc");
  $borderStyles_defaultMarkerStyles$$._hdbw = $xmlNode$$71$$.$getAttr$("_hdbw");
  $borderStyles_defaultMarkerStyles$$._sbs = $xmlNode$$71$$.$getAttr$("_sbs");
  $borderStyles_defaultMarkerStyles$$._sbc = $xmlNode$$71$$.$getAttr$("_sbc");
  $borderStyles_defaultMarkerStyles$$._sbw = $xmlNode$$71$$.$getAttr$("_sbw");
  $borderStyles_defaultMarkerStyles$$._sbof = $xmlNode$$71$$.$getAttr$("_sbof");
  $borderStyles_defaultMarkerStyles$$._sbo = $xmlNode$$71$$.$getAttr$("_sbo");
  $borderStyles_defaultMarkerStyles$$._sgc = $xmlNode$$71$$.$getAttr$("_sgc");
  $borderStyles_defaultMarkerStyles$$._sgo = $xmlNode$$71$$.$getAttr$("_sgo");
  $borderStyles_defaultMarkerStyles$$._sdbs = $xmlNode$$71$$.$getAttr$("_sdbs");
  $borderStyles_defaultMarkerStyles$$._sdbc = $xmlNode$$71$$.$getAttr$("_sdbc");
  $borderStyles_defaultMarkerStyles$$._sdbw = $xmlNode$$71$$.$getAttr$("_sdbw");
  $borderStyles_defaultMarkerStyles$$._asbs = $xmlNode$$71$$.$getAttr$("_asbs");
  $borderStyles_defaultMarkerStyles$$._asbc = $xmlNode$$71$$.$getAttr$("_asbc");
  $borderStyles_defaultMarkerStyles$$._asbw = $xmlNode$$71$$.$getAttr$("_asbw");
  $borderStyles_defaultMarkerStyles$$._asbof = $xmlNode$$71$$.$getAttr$("_asbof");
  $borderStyles_defaultMarkerStyles$$._asbo = $xmlNode$$71$$.$getAttr$("_asbo");
  $borderStyles_defaultMarkerStyles$$._asgc = $xmlNode$$71$$.$getAttr$("_asgc");
  $borderStyles_defaultMarkerStyles$$._asgo = $xmlNode$$71$$.$getAttr$("_asgo");
  $borderStyles_defaultMarkerStyles$$._asdbs = $xmlNode$$71$$.$getAttr$("_asdbs");
  $borderStyles_defaultMarkerStyles$$._asdbc = $xmlNode$$71$$.$getAttr$("_asdbc");
  $borderStyles_defaultMarkerStyles$$._asdbw = $xmlNode$$71$$.$getAttr$("_asdbw");
  $ret$$97$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$97$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$72$$, $defaultMarkerStyles$$1$$) {
  if(!$xmlNode$$72$$) {
    return null
  }
  for(var $treeNodes$$ = [], $markers$$12$$ = $xmlNode$$72$$.$getChildNodes$(), $i$$875$$ = 0;$i$$875$$ < $markers$$12$$.length;$i$$875$$++) {
    var $props$$14_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$12$$[$i$$875$$], $defaultMarkerStyles$$1$$), $props$$14_treeNode$$1$$ = new D.$DvtTimelineOverviewNode$$(this.$_view$, $props$$14_treeNode$$1$$);
    $treeNodes$$.push($props$$14_treeNode$$1$$)
  }
  return $treeNodes$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($xmlNode$$73$$, $defaultMarkerStyles$$2$$) {
  var $ret$$98$$ = {}, $useSkinningDefaults$$ = "true" == $xmlNode$$73$$.$getAttr$("_sd");
  $ret$$98$$.id = $xmlNode$$73$$.$getAttr$("tid");
  $ret$$98$$.$rowKey$ = $xmlNode$$73$$.$getAttr$("rk");
  $ret$$98$$.time = $xmlNode$$73$$.$getAttr$("t");
  $ret$$98$$.$endTime$ = $xmlNode$$73$$.$getAttr$("et");
  $ret$$98$$.shape = $xmlNode$$73$$.$getAttr$("s");
  $useSkinningDefaults$$ && null == $ret$$98$$.shape && ($ret$$98$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$98$$.$desc$ = $xmlNode$$73$$.$getAttr$("d");
  $ret$$98$$.color = $xmlNode$$73$$.$getAttr$("c");
  $ret$$98$$.$durationFillColor$ = $xmlNode$$73$$.$getAttr$("dfc");
  $useSkinningDefaults$$ && null == $ret$$98$$.color && ($ret$$98$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$98$$.$scaleX$ = $xmlNode$$73$$.$getAttr$("sx");
  $useSkinningDefaults$$ && null == $ret$$98$$.$scaleX$ && ($ret$$98$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$98$$.$scaleY$ = $xmlNode$$73$$.$getAttr$("sy");
  $useSkinningDefaults$$ && null == $ret$$98$$.$scaleY$ && ($ret$$98$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$98$$.$gradient$ = $xmlNode$$73$$.$getAttr$("g");
  $ret$$98$$.opacity = $xmlNode$$73$$.$getAttr$("o");
  $useSkinningDefaults$$ && null == $ret$$98$$.opacity && ($ret$$98$$.opacity = $defaultMarkerStyles$$2$$.opacity);
  return $ret$$98$$
};
D.$DvtTimelineOverviewNode$$ = function $$DvtTimelineOverviewNode$$$($overview$$4$$, $props$$11$$) {
  this.Init($overview$$4$$, $props$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewNode$$, D.$DvtObj$$, "DvtTimelineOverviewNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverviewNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$5$$, $props$$12$$) {
  this.$_view$ = $overview$$5$$;
  this.$_rowKey$ = $props$$12$$.$rowKey$;
  this.$_id$ = $props$$12$$.id;
  this.$_time$ = (0,window.parseInt)($props$$12$$.time);
  this.$_endTime$ = null == $props$$12$$.$endTime$ ? null : (0,window.parseInt)($props$$12$$.$endTime$);
  this.$_shape$ = "circle";
  "square" == $props$$12$$.shape ? this.$_shape$ = "rectangle" : "plus" == $props$$12$$.shape ? this.$_shape$ = "plus" : "diamond" == $props$$12$$.shape ? this.$_shape$ = "diamond" : "triangleUp" == $props$$12$$.shape ? this.$_shape$ = "triangleUp" : "triangleDown" == $props$$12$$.shape && (this.$_shape$ = "triangleDown");
  this.$_desc$ = $props$$12$$.$desc$;
  this.$_color$ = $props$$12$$.color;
  this.$_gradient$ = $props$$12$$.$gradient$;
  null != $props$$12$$.opacity && (this.$_opacity$ = (0,window.parseFloat)($props$$12$$.opacity));
  null != $props$$12$$.$scaleX$ && (this.$_scaleX$ = (0,window.parseFloat)($props$$12$$.$scaleX$));
  null != $props$$12$$.$scaleY$ && (this.$_scaleY$ = (0,window.parseFloat)($props$$12$$.$scaleY$));
  null != $props$$12$$.$durationFillColor$ && (this.$_durationFillColor$ = $props$$12$$.$durationFillColor$)
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$JSCompiler_prototypeAlias$$.getTime = (0,D.$JSCompiler_get$$)("$_time$");
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = (0,D.$JSCompiler_get$$)("$_scaleX$");
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = (0,D.$JSCompiler_get$$)("$_scaleY$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getShape$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getOpacity$ = (0,D.$JSCompiler_get$$)("$_opacity$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = (0,D.$JSCompiler_set$$)("$_displayable$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtTimelineOverviewEvent$$ = function $$DvtTimelineOverviewEvent$$$($type$$248$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$248$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewEvent$$, D.$DvtOverviewEvent$$, "DvtTimelineOverviewEvent");
D.$DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
  return this.$getParamValue$("itemId")
};
D.$DvtTimelineOverviewAutomation$$ = function $$DvtTimelineOverviewAutomation$$$($overview$$2$$) {
  this.$_Init$($overview$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewAutomation$$, D.$DvtAutomation$$, "DvtTimelineOverviewAutomation");
D.$DvtTimelineOverviewAutomation$$.prototype.$_Init$ = (0,D.$JSCompiler_set$$)("$_overview$");
D.$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$17_displayable$$114_prev$$4$$) {
  var $id$$312_seriesIds$$1_seriesIndex$$124$$ = $arr$$17_displayable$$114_prev$$4$$.getId();
  if($arr$$17_displayable$$114_prev$$4$$ instanceof D.$DvtSimpleMarker$$) {
    $arr$$17_displayable$$114_prev$$4$$ = $id$$312_seriesIds$$1_seriesIndex$$124$$.split(":");
    if(4 != $arr$$17_displayable$$114_prev$$4$$.length) {
      return null
    }
    $id$$312_seriesIds$$1_seriesIndex$$124$$ = null == this.$_overview$.$_seriesIds$ ? null : this.$_overview$.$_seriesIds$.split(" ");
    if(null != $id$$312_seriesIds$$1_seriesIndex$$124$$ && ($id$$312_seriesIds$$1_seriesIndex$$124$$ = D.$DvtArrayUtils$$.$getIndex$($id$$312_seriesIds$$1_seriesIndex$$124$$, $arr$$17_displayable$$114_prev$$4$$[1]), -1 < $id$$312_seriesIds$$1_seriesIndex$$124$$)) {
      return"marker[" + $id$$312_seriesIds$$1_seriesIndex$$124$$ + "][" + $arr$$17_displayable$$114_prev$$4$$[2] + "]"
    }
  }else {
    if("window" == $id$$312_seriesIds$$1_seriesIndex$$124$$) {
      return"range_window"
    }
    if("lh" == $id$$312_seriesIds$$1_seriesIndex$$124$$ || "lhb" == $id$$312_seriesIds$$1_seriesIndex$$124$$ || "lbgrh" == $id$$312_seriesIds$$1_seriesIndex$$124$$) {
      return"range_start_handle"
    }
    if("rh" == $id$$312_seriesIds$$1_seriesIndex$$124$$ || "rhb" == $id$$312_seriesIds$$1_seriesIndex$$124$$ || "rbgrh" == $id$$312_seriesIds$$1_seriesIndex$$124$$) {
      return"range_end_handle"
    }
    if("grpy" == $id$$312_seriesIds$$1_seriesIndex$$124$$) {
      return $arr$$17_displayable$$114_prev$$4$$ = $arr$$17_displayable$$114_prev$$4$$.getParent().$getChildBefore$($arr$$17_displayable$$114_prev$$4$$), this.$GetSubIdForDomElement$($arr$$17_displayable$$114_prev$$4$$)
    }
  }
  return null
};
D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($markers$$inline_8945_subId$$33$$) {
  for(var $array$$inline_8938_marker$$32_markerId$$inline_8948$$ = $markers$$inline_8945_subId$$33$$.split("["), $i$$inline_8949_len$$inline_8939_seriesIds$$2$$ = $array$$inline_8938_marker$$32_markerId$$inline_8948$$.length, $i$$inline_8940_index$$248_marker$$inline_8950$$ = 1;$i$$inline_8940_index$$248_marker$$inline_8950$$ < $i$$inline_8949_len$$inline_8939_seriesIds$$2$$;$i$$inline_8940_index$$248_marker$$inline_8950$$++) {
    var $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$ = $array$$inline_8938_marker$$32_markerId$$inline_8948$$[$i$$inline_8940_index$$248_marker$$inline_8950$$], $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$ = $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$.substr(0, $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$.length - 1), $tempIdAsNumber$$inline_8943$$ = (0,window.parseFloat)($elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$), $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$ = 
    (0,window.isNaN)($tempIdAsNumber$$inline_8943$$) ? $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$ : $tempIdAsNumber$$inline_8943$$;
    $array$$inline_8938_marker$$32_markerId$$inline_8948$$[$i$$inline_8940_index$$248_marker$$inline_8950$$] = $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$
  }
  if($array$$inline_8938_marker$$32_markerId$$inline_8948$$ && 3 == $array$$inline_8938_marker$$32_markerId$$inline_8948$$.length && "marker" == $array$$inline_8938_marker$$32_markerId$$inline_8948$$[0]) {
    if($i$$inline_8949_len$$inline_8939_seriesIds$$2$$ = null == this.$_overview$.$_seriesIds$ ? null : this.$_overview$.$_seriesIds$.split(" "), null != $i$$inline_8949_len$$inline_8939_seriesIds$$2$$ && ($i$$inline_8940_index$$248_marker$$inline_8950$$ = (0,window.parseInt)($array$$inline_8938_marker$$32_markerId$$inline_8948$$[1], 10), -1 < $i$$inline_8940_index$$248_marker$$inline_8950$$ && $i$$inline_8940_index$$248_marker$$inline_8950$$ < $i$$inline_8949_len$$inline_8939_seriesIds$$2$$.length)) {
      a: {
        $markers$$inline_8945_subId$$33$$ = this.$_overview$.$_markers$;
        $array$$inline_8938_marker$$32_markerId$$inline_8948$$ = "tl1:" + $i$$inline_8949_len$$inline_8939_seriesIds$$2$$[$i$$inline_8940_index$$248_marker$$inline_8950$$] + ":" + $array$$inline_8938_marker$$32_markerId$$inline_8948$$[2] + ":";
        for($i$$inline_8949_len$$inline_8939_seriesIds$$2$$ = 0;$i$$inline_8949_len$$inline_8939_seriesIds$$2$$ < $markers$$inline_8945_subId$$33$$.length;$i$$inline_8949_len$$inline_8939_seriesIds$$2$$++) {
          if($i$$inline_8940_index$$248_marker$$inline_8950$$ = $markers$$inline_8945_subId$$33$$[$i$$inline_8949_len$$inline_8939_seriesIds$$2$$], $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$ = $i$$inline_8940_index$$248_marker$$inline_8950$$.getId(), null != $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$ && 0 == $elem$$inline_8941_id$$inline_8951_tempId$$inline_8942$$.indexOf($array$$inline_8938_marker$$32_markerId$$inline_8948$$)) {
            $array$$inline_8938_marker$$32_markerId$$inline_8948$$ = $i$$inline_8940_index$$248_marker$$inline_8950$$;
            break a
          }
        }
        $array$$inline_8938_marker$$32_markerId$$inline_8948$$ = null
      }
      return $array$$inline_8938_marker$$32_markerId$$inline_8948$$ ? $array$$inline_8938_marker$$32_markerId$$inline_8948$$.$getDisplayable$().$getElem$() : null
    }
  }else {
    if("range_window" == $markers$$inline_8945_subId$$33$$) {
      return this.$_overview$.$getChildAt$(1).$getElem$()
    }
    if("range_start_handle" == $markers$$inline_8945_subId$$33$$) {
      return this.$_overview$.$getChildAt$(this.$_overview$.$getNumChildren$() - this.$_overview$.$_lastChildIndex$).$getElem$()
    }
    if("range_end_handle" == $markers$$inline_8945_subId$$33$$) {
      return(0,D.$JSCompiler_StaticMethods_getRightHandle$$)(this.$_overview$).$getElem$()
    }
  }
  return null
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverviewAutomation.prototype.getDomElementForSubId", D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$);

  return D;
});