/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtPictoChart$$ = function $$DvtPictoChart$$$($context$$545$$, $callback$$135$$, $callbackObj$$84$$) {
  this.Init($context$$545$$, $callback$$135$$, $callbackObj$$84$$)
};
(0,D.$goog$exportPath_$$)("DvtPictoChart", D.$DvtPictoChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChart$$, D.$DvtBaseComponent$$, "DvtPictoChart");
D.$DvtPictoChart$$.newInstance = function $$DvtPictoChart$$$newInstance$($context$$546$$, $callback$$136$$, $callbackObj$$85$$) {
  return new D.$DvtPictoChart$$($context$$546$$, $callback$$136$$, $callbackObj$$85$$)
};
D.$DvtPictoChart$$.prototype.Init = function $$DvtPictoChart$$$$Init$($context$$547$$, $callback$$137$$, $callbackObj$$86$$) {
  D.$DvtPictoChart$$.$superclass$.Init.call(this, $context$$547$$, $callback$$137$$, $callbackObj$$86$$);
  this.$EventManager$ = new D.$DvtPictoChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, new D.$DvtPictoChartKeyboardHandler$$(this.$EventManager$));
  this.$Defaults$ = new D.$DvtPictoChartDefaults$$;
  this.$_items$ = []
};
D.$DvtPictoChart$$.prototype.$_getPreferredSize$ = function $$DvtPictoChart$$$$$_getPreferredSize$$($width$$144$$, $height$$131$$) {
  if(!$width$$144$$ || !$height$$131$$) {
    var $info$$18$$ = D.$DvtPictoChartRenderer$$.$getInfo$(this, $width$$144$$, $height$$131$$);
    this.$_info$ = $info$$18$$;
    $width$$144$$ || ($width$$144$$ = $info$$18$$.$items$ ? $info$$18$$.$colCount$ * $info$$18$$.$colWidth$ : 0);
    $height$$131$$ || ($height$$131$$ = $info$$18$$.$items$ ? $info$$18$$.$rowCount$ * $info$$18$$.$rowHeight$ : 0)
  }
  return new D.$DvtDimension$$($width$$144$$, $height$$131$$)
};
D.$DvtPictoChart$$.prototype.$render$ = function $$DvtPictoChart$$$$$render$$($animHandler_context$$inline_7871_options$$234$$, $bounds$$inline_7872_preferredSize$$6_width$$145$$, $height$$132_outerDivSize_playables$$inline_7873$$) {
  this.$_oldContainer$ = this.$_container$;
  var $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$ = this.$_markers$, $oldWidth$$1$$ = this.$Width$ ? this.$Width$ : 0, $oldHeight$$1$$ = this.$Height$ ? this.$Height$ : 0;
  this.$EventManager$.$hideTooltip$();
  this.$_items$ = [];
  this.$_markers$ = [];
  this.$_info$ = null;
  this.$_emptyText$ && (this.$_container$.removeChild(this.$_emptyText$), this.$_emptyText$ = null);
  this.$_animation$ && (this.$_animationStopped$ = !0, this.$_animation$.stop());
  this.$SetOptions$($animHandler_context$$inline_7871_options$$234$$);
  var $context$$548$$ = this.$getCtx$();
  if(!$bounds$$inline_7872_preferredSize$$6_width$$145$$ && !$height$$132_outerDivSize_playables$$inline_7873$$) {
    if($context$$548$$.$_root$.style.display = "block", $bounds$$inline_7872_preferredSize$$6_width$$145$$ = this.$_getPreferredSize$(), D.$DvtToolkitUtils$$.$setSvgSize$($context$$548$$, $bounds$$inline_7872_preferredSize$$6_width$$145$$.$w$, $bounds$$inline_7872_preferredSize$$6_width$$145$$.$h$), $height$$132_outerDivSize_playables$$inline_7873$$ = D.$DvtToolkitUtils$$.$getOuterDivSize$($context$$548$$), $bounds$$inline_7872_preferredSize$$6_width$$145$$.$w$ == $height$$132_outerDivSize_playables$$inline_7873$$.$w$ && 
    $bounds$$inline_7872_preferredSize$$6_width$$145$$.$h$ != $height$$132_outerDivSize_playables$$inline_7873$$.$h$ ? (this.$Height$ = $height$$132_outerDivSize_playables$$inline_7873$$.$h$, $bounds$$inline_7872_preferredSize$$6_width$$145$$ = this.$_getPreferredSize$(null, this.$Height$), D.$DvtToolkitUtils$$.$setSvgSize$($context$$548$$, $bounds$$inline_7872_preferredSize$$6_width$$145$$.$w$, this.$Height$), this.$Width$ = D.$DvtToolkitUtils$$.$getOuterDivSize$($context$$548$$).$w$) : $bounds$$inline_7872_preferredSize$$6_width$$145$$.$w$ != 
    $height$$132_outerDivSize_playables$$inline_7873$$.$w$ && $bounds$$inline_7872_preferredSize$$6_width$$145$$.$h$ == $height$$132_outerDivSize_playables$$inline_7873$$.$h$ ? (this.$Width$ = $height$$132_outerDivSize_playables$$inline_7873$$.$w$, $bounds$$inline_7872_preferredSize$$6_width$$145$$ = this.$_getPreferredSize$(this.$Width$, null), D.$DvtToolkitUtils$$.$setSvgSize$($context$$548$$, this.$Width$, $bounds$$inline_7872_preferredSize$$6_width$$145$$.$h$), this.$Height$ = D.$DvtToolkitUtils$$.$getOuterDivSize$($context$$548$$).$h$) : 
    (this.$Width$ = $height$$132_outerDivSize_playables$$inline_7873$$.$w$, this.$Height$ = $height$$132_outerDivSize_playables$$inline_7873$$.$h$), this.$Width$ != $bounds$$inline_7872_preferredSize$$6_width$$145$$.$w$ || this.$Height$ != $bounds$$inline_7872_preferredSize$$6_width$$145$$.$h$) {
      this.$_info$ = null
    }
  }else {
    this.$Width$ = $bounds$$inline_7872_preferredSize$$6_width$$145$$, this.$Height$ = $height$$132_outerDivSize_playables$$inline_7873$$
  }
  this.$_container$ = new D.$DvtContainer$$($context$$548$$);
  this.$addChild$(this.$_container$);
  D.$DvtPictoChartRenderer$$.$render$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), this.$_info$);
  if(this.$_oldContainer$) {
    "none" != this.$Options$.animationOnDataChange && $animHandler_context$$inline_7871_options$$234$$ && ($animHandler_context$$inline_7871_options$$234$$ = new D.$DvtDataAnimationHandler$$($context$$548$$, null), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animHandler_context$$inline_7871_options$$234$$, $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$, this.$_markers$), this.$_animation$ = $animHandler_context$$inline_7871_options$$234$$.$getAnimation$())
  }else {
    var $animOnDisplay$$inline_7869_i$$inline_7874$$ = this.$Options$.animationOnDisplay, $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$ = this.$getAnimationDuration$();
    $animHandler_context$$inline_7871_options$$234$$ = this.$getCtx$();
    $bounds$$inline_7872_preferredSize$$6_width$$145$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    if(D.$DvtBlackBoxAnimationHandler$$.isSupported($animOnDisplay$$inline_7869_i$$inline_7874$$)) {
      $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($animHandler_context$$inline_7871_options$$234$$, $animOnDisplay$$inline_7869_i$$inline_7874$$, this.$_container$, $bounds$$inline_7872_preferredSize$$6_width$$145$$, $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$)
    }else {
      $height$$132_outerDivSize_playables$$inline_7873$$ = [];
      if("popIn" == $animOnDisplay$$inline_7869_i$$inline_7874$$) {
        for($animOnDisplay$$inline_7869_i$$inline_7874$$ = 0;$animOnDisplay$$inline_7869_i$$inline_7874$$ < this.$_markers$.length;$animOnDisplay$$inline_7869_i$$inline_7874$$++) {
          var $marker$$inline_7875$$ = this.$_markers$[$animOnDisplay$$inline_7869_i$$inline_7874$$];
          $height$$132_outerDivSize_playables$$inline_7873$$.push(new D.$DvtAnimPopIn$$($animHandler_context$$inline_7871_options$$234$$, $marker$$inline_7875$$, !0, $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$))
        }
      }else {
        if("none" != $animOnDisplay$$inline_7869_i$$inline_7874$$) {
          for($animOnDisplay$$inline_7869_i$$inline_7874$$ = 0;$animOnDisplay$$inline_7869_i$$inline_7874$$ < this.$_markers$.length;$animOnDisplay$$inline_7869_i$$inline_7874$$++) {
            var $marker$$inline_7875$$ = this.$_markers$[$animOnDisplay$$inline_7869_i$$inline_7874$$], $playable$$inline_7876$$ = new D.$DvtCustomAnimation$$($animHandler_context$$inline_7871_options$$234$$, $marker$$inline_7875$$, $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$), $startState$$inline_7877$$, $endState$$inline_7878$$;
            D.$DvtPictoChartRenderer$$.$isVertical$(this) ? ($startState$$inline_7877$$ = D.$DvtPictoChartRenderer$$.$isOriginRight$(this) ? this.$Width$ : 0, $endState$$inline_7878$$ = $marker$$inline_7875$$.$getCx$(), $marker$$inline_7875$$.$setCx$($startState$$inline_7877$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$inline_7876$$.$_animator$, "typeNumber", $marker$$inline_7875$$, $marker$$inline_7875$$.$getCx$, $marker$$inline_7875$$.$setCx$, $endState$$inline_7878$$)) : ($startState$$inline_7877$$ = 
            D.$DvtPictoChartRenderer$$.$isOriginBottom$(this) ? this.$Height$ : 0, $endState$$inline_7878$$ = $marker$$inline_7875$$.$getCy$(), $marker$$inline_7875$$.$setCy$($startState$$inline_7877$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$inline_7876$$.$_animator$, "typeNumber", $marker$$inline_7875$$, $marker$$inline_7875$$.$getCy$, $marker$$inline_7875$$.$setCy$, $endState$$inline_7878$$));
            $height$$132_outerDivSize_playables$$inline_7873$$.push($playable$$inline_7876$$)
          }
          $height$$132_outerDivSize_playables$$inline_7873$$.push(D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($animHandler_context$$inline_7871_options$$234$$, D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$, this.$_container$, $bounds$$inline_7872_preferredSize$$6_width$$145$$, $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$))
        }
      }
      $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$ = 0 < $height$$132_outerDivSize_playables$$inline_7873$$.length ? new D.$DvtParallelPlayable$$($animHandler_context$$inline_7871_options$$234$$, $height$$132_outerDivSize_playables$$inline_7873$$) : null
    }
    this.$_animation$ = $JSCompiler_inline_result$$207_duration$$inline_7870_oldMarkers$$
  }
  this.$_animation$ ? (D.$DvtToolkitUtils$$.$setSvgSize$($context$$548$$, window.Math.max($oldWidth$$1$$, this.$Width$), window.Math.max($oldHeight$$1$$, this.$Height$)), this.$EventManager$.$removeListeners$(this), this.$_emptyText$ && this.$_container$.removeChild(this.$_emptyText$), this.$_animation$.$setOnEnd$(this.$_onRenderEnd$, this), this.$_animation$.play()) : this.$_onRenderEnd$()
};
D.$DvtPictoChart$$.prototype.render = D.$DvtPictoChart$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$235_selectionMode$$12$$) {
  $options$$235_selectionMode$$12$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$235_selectionMode$$12$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
  $options$$235_selectionMode$$12$$ = this.$Options$.selectionMode;
  this.$_selectionHandler$ = "single" == $options$$235_selectionMode$$12$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$235_selectionMode$$12$$ ? new D.$DvtSelectionHandler$$("m") : null;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$)
};
D.$JSCompiler_prototypeAlias$$.$_onRenderEnd$ = function $$JSCompiler_prototypeAlias$$$$_onRenderEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
  this.$_animation$ && (this.$_animation$ = null, this.$EventManager$.$addListeners$(this), this.$_emptyText$ && this.$_container$.$addChild$(this.$_emptyText$));
  D.$DvtToolkitUtils$$.$setSvgSize$(this.$getCtx$(), this.$Width$, this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, this.$_items$[0]);
  this.$_selectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$Options$.selection, this.$_items$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)(this.$Options$.highlightedCategories, this.$_items$, "any" == this.$Options$.highlightMatch);
  this.$UpdateAriaAttributes$();
  this.$_animationStopped$ || (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this);
  this.$_animationStopped$ = null
};
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_prototypeAlias$$.$registerItems$ = (0,D.$JSCompiler_set$$)("$_items$");
D.$JSCompiler_prototypeAlias$$.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)(this.$Options$.animationDuration) / 1E3
};
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = null);
  D.$DvtPictoChart$$.$superclass$.$destroy$.call(this)
};
D.$DvtPictoChart$$.prototype.destroy = D.$DvtPictoChart$$.prototype.$destroy$;
D.$DvtPictoChart$$.prototype.$highlight$ = function $$DvtPictoChart$$$$$highlight$$($categories$$25$$) {
  var $options$$236$$ = this.$getOptions$();
  $options$$236$$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$25$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$25$$, this.$getItems$(), "any" == $options$$236$$.highlightMatch)
};
D.$DvtPictoChart$$.prototype.highlight = D.$DvtPictoChart$$.prototype.$highlight$;
D.$DvtPictoChart$$.prototype.select = function $$DvtPictoChart$$$$select$($selection$$31$$) {
  this.$getOptions$().selection = D.$DvtJSONUtils$$.$clone$($selection$$31$$);
  this.$_selectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, $selection$$31$$, this.$getItems$())
};
D.$DvtPictoChart$$.prototype.select = D.$DvtPictoChart$$.prototype.select;
D.$DvtPictoChart$$.prototype.$GetComponentDescription$ = function $$DvtPictoChart$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "PICTOCHART")
};
D.$DvtPictoChart$$.prototype.$getAutomation$ = function $$DvtPictoChart$$$$$getAutomation$$() {
  this.$_automation$ || (this.$_automation$ = new D.$DvtPictoChartAutomation$$(this));
  return this.$_automation$
};
D.$DvtPictoChart$$.prototype.getAutomation = D.$DvtPictoChart$$.prototype.$getAutomation$;
D.$DvtPictoChartAutomation$$ = (0,D.$JSCompiler_set$$)("$_picto$");
(0,D.$goog$exportPath_$$)("DvtPictoChartAutomation", D.$DvtPictoChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartAutomation$$, D.$DvtAutomation$$, "DvtPictoChartAutomation");
D.$DvtPictoChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtPictoChartAutomation$$$$$GetSubIdForDomElement$$($displayable$$84_logicalObj$$13$$) {
  return($displayable$$84_logicalObj$$13$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_picto$.$getEventManager$(), $displayable$$84_logicalObj$$13$$)) && $displayable$$84_logicalObj$$13$$ instanceof D.$DvtPictoChartItem$$ ? "item[" + this.$_picto$.$getItems$().indexOf($displayable$$84_logicalObj$$13$$) + "]" : null
};
D.$DvtPictoChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtPictoChartAutomation$$$$$getDomElementForSubId$$($index$$226_item$$47_subId$$29$$) {
  if("tooltip" == $index$$226_item$$47_subId$$29$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_picto$)
  }
  var $parenIdx$$ = $index$$226_item$$47_subId$$29$$.indexOf("[");
  return 0 < $parenIdx$$ && "item" === $index$$226_item$$47_subId$$29$$.substring(0, $parenIdx$$) && ($index$$226_item$$47_subId$$29$$ = (0,window.parseInt)($index$$226_item$$47_subId$$29$$.substring($parenIdx$$ + 1, $index$$226_item$$47_subId$$29$$.length - 1)), $index$$226_item$$47_subId$$29$$ = this.$_picto$.$getItems$()[$index$$226_item$$47_subId$$29$$]) ? $index$$226_item$$47_subId$$29$$.$getElem$() : null
};
D.$DvtPictoChartAutomation$$.prototype.getDomElementForSubId = D.$DvtPictoChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtPictoChartAutomation$$.prototype.getItem = function $$DvtPictoChartAutomation$$$$getItem$($index$$227_item$$48$$) {
  if($index$$227_item$$48$$ = this.$_picto$.$getItems$()[$index$$227_item$$48$$]) {
    var $data$$91$$ = {};
    $data$$91$$.color = $index$$227_item$$48$$.$getDatatipColor$();
    $data$$91$$.tooltip = $index$$227_item$$48$$.$getShortDesc$();
    $data$$91$$.id = $index$$227_item$$48$$.getId();
    $data$$91$$.name = $index$$227_item$$48$$.getName();
    $data$$91$$.count = $index$$227_item$$48$$.getCount();
    $data$$91$$.selected = $index$$227_item$$48$$.$isSelected$();
    return $data$$91$$
  }
  return null
};
D.$DvtPictoChartAutomation$$.prototype.getItem = D.$DvtPictoChartAutomation$$.prototype.getItem;
D.$DvtPictoChartAutomation$$.prototype.$getItemCount$ = function $$DvtPictoChartAutomation$$$$$getItemCount$$() {
  return this.$_picto$.$getItems$().length
};
D.$DvtPictoChartAutomation$$.prototype.getItemCount = D.$DvtPictoChartAutomation$$.prototype.$getItemCount$;
D.$DvtPictoChartEventManager$$ = function $$DvtPictoChartEventManager$$$($picto$$1$$) {
  this.Init($picto$$1$$.$getCtx$(), $picto$$1$$.dispatchEvent, $picto$$1$$);
  this.$_picto$ = $picto$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartEventManager$$, D.$DvtEventManager$$, "DvtPictoChartEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$688_options$$238$$, $categories$$26_hoverBehaviorDelay$$4_obj$$323$$, $bOver$$11_rolloverEvent$$5$$) {
  $event$$688_options$$238$$ = this.$_picto$.$getOptions$();
  "none" != $event$$688_options$$238$$.hoverBehavior && ($categories$$26_hoverBehaviorDelay$$4_obj$$323$$ = $categories$$26_hoverBehaviorDelay$$4_obj$$323$$.$getCategories$ ? $categories$$26_hoverBehaviorDelay$$4_obj$$323$$.$getCategories$() : [], $event$$688_options$$238$$.highlightedCategories = $bOver$$11_rolloverEvent$$5$$ ? $categories$$26_hoverBehaviorDelay$$4_obj$$323$$.slice() : null, $bOver$$11_rolloverEvent$$5$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$11_rolloverEvent$$5$$ ? "categoryRollOver" : 
  "categoryRollOut", $event$$688_options$$238$$.highlightedCategories), $categories$$26_hoverBehaviorDelay$$4_obj$$323$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$688_options$$238$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$11_rolloverEvent$$5$$, this.$_picto$.$getItems$(), $categories$$26_hoverBehaviorDelay$$4_obj$$323$$, "any" == $event$$688_options$$238$$.highlightMatch))
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$689_obj$$324$$) {
  ($event$$689_obj$$324$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$689_obj$$324$$.target)) && (!$event$$689_obj$$324$$.$isSelectable$ || !$event$$689_obj$$324$$.$isSelectable$()) && this.$processDrillEvent$($event$$689_obj$$324$$)
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$690_obj$$325$$) {
  ($event$$690_obj$$325$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$690_obj$$325$$.target)) && $event$$690_obj$$325$$.$isSelectable$ && $event$$690_obj$$325$$.$isSelectable$() && this.$processDrillEvent$($event$$690_obj$$325$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$691_obj$$326$$) {
  ($event$$691_obj$$326$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$691_obj$$326$$.target)) && (!$event$$691_obj$$326$$.$isSelectable$ || !$event$$691_obj$$326$$.$isSelectable$()) && this.$processDrillEvent$($event$$691_obj$$326$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$692_obj$$327$$) {
  ($event$$692_obj$$327$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$692_obj$$327$$.target)) && (!$event$$692_obj$$327$$.$isSelectable$ || !$event$$692_obj$$327$$.$isSelectable$()) && this.$processDrillEvent$($event$$692_obj$$327$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$693$$) {
  var $obj$$328$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$693$$.target);
  $obj$$328$$ && ($obj$$328$$.$isSelectable$ && $obj$$328$$.$isSelectable$()) && ($event$$693$$.preventDefault(), $event$$693$$.stopPropagation(), this.$processDrillEvent$($obj$$328$$))
};
D.$JSCompiler_prototypeAlias$$.$processDrillEvent$ = function $$JSCompiler_prototypeAlias$$$$processDrillEvent$$($obj$$329$$) {
  $obj$$329$$ instanceof D.$DvtPictoChartItem$$ && $obj$$329$$.$isDrillable$() && this.$FireEvent$(new D.$DvtDrillEvent$$($obj$$329$$.getId()))
};
D.$DvtPictoChartDefaults$$ = function $$DvtPictoChartDefaults$$$() {
  this.Init({alta:D.$DvtPictoChartDefaults$VERSION_1$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtPictoChartDefaults");
D.$DvtPictoChartDefaults$VERSION_1$$ = {animationOnDisplay:"none", animationOnDataChange:"none", animationDuration:750, drilling:"off", hiddenCategories:[], highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, layout:"horizontal", layoutOrigin:"topStart", selection:[], selectionMode:"none", _defaultColor:"#a6acb1", _defaultSize:32, _defaultShape:"rectangle", _gapRatio:0.25, _textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"), 
_statusMessageStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"), _tooltipStyle:new D.$DvtCSSStyle$$("border-collapse: separate; border-spacing: 1px"), _tooltipLabelStyle:new D.$DvtCSSStyle$$("color: #737373; padding: 0px 2px"), _tooltipValueStyle:new D.$DvtCSSStyle$$("color: #333333; padding: 0px 2px")};
D.$DvtPictoChartImageMarker$$ = function $$DvtPictoChartImageMarker$$$($picto$$2$$, $cx$$58$$, $cy$$59$$, $width$$146$$, $height$$133$$, $source$$33$$, $sourceSelected$$3$$, $sourceHover$$3$$, $sourceHoverSelected$$3$$, $id$$254$$) {
  D.$DvtPictoChartImageMarker$$.$superclass$.Init.call(this, $picto$$2$$.$getCtx$(), $cx$$58$$, $cy$$59$$, $width$$146$$, $height$$133$$, $source$$33$$, $sourceSelected$$3$$, $sourceHover$$3$$, $sourceHoverSelected$$3$$, $id$$254$$);
  this.$_picto$ = $picto$$2$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartImageMarker$$, D.$DvtImageMarker$$, "DvtPictoChartImageMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartImageMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$51$$, $oldMarker$$) {
  var $animation$$4$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, 0.75 * this.$_picto$.$getAnimationDuration$()), $animator$$128$$ = $animation$$4$$.$_animator$, $endParams$$1$$ = this.$_getAnimationParams$();
  this.$_setAnimationParams$($oldMarker$$.$_getAnimationParams$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$128$$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endParams$$1$$);
  $oldMarker$$.$setAlpha$(0);
  $handler$$51$$.add($animation$$4$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$52$$) {
  $handler$$52$$.add(new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$53$$) {
  this.$setAlpha$(0);
  $handler$$53$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 2)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[this.$getCx$(), this.$getCy$(), this.getWidth(), this.getHeight()]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$48$$) {
  this.$setCx$($params$$48$$[0]);
  this.$setCy$($params$$48$$[1]);
  this.$setWidth$($params$$48$$[2]);
  this.$setHeight$($params$$48$$[3])
};
D.$DvtPictoChartItem$$ = function $$DvtPictoChartItem$$$($picto$$3$$, $item$$49$$) {
  this.Init($picto$$3$$, $item$$49$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartItem$$, D.$DvtContainer$$, "DvtPictoChartItem");
D.$DvtPictoChartItem$_counter$$ = 0;
D.$DvtPictoChartItem$$.prototype.Init = function $$DvtPictoChartItem$$$$Init$($picto$$4$$, $item$$50$$) {
  D.$DvtPictoChartItem$$.$superclass$.Init.call(this, $picto$$4$$.$getCtx$(), null, $item$$50$$.id);
  this.$_picto$ = $picto$$4$$;
  this.$_item$ = $item$$50$$;
  this.$_id$ = null != $item$$50$$.id ? $item$$50$$.id : null != $item$$50$$.name ? $item$$50$$.name : "_defaultId" + D.$DvtPictoChartItem$_counter$$;
  D.$DvtPictoChartItem$_counter$$++;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = !1;
  this.$_keyboardTooltipLocation$ = new D.$DvtPoint$$(0, 0);
  (this.$isSelectable$() || this.$isDrillable$()) && this.setCursor("pointer");
  $picto$$4$$.$getEventManager$().$associate$(this, this)
};
D.$JSCompiler_StaticMethods_getColSpan$$ = function $$JSCompiler_StaticMethods_getColSpan$$$($JSCompiler_StaticMethods_getColSpan$self_colSpan$$) {
  $JSCompiler_StaticMethods_getColSpan$self_colSpan$$ = $JSCompiler_StaticMethods_getColSpan$self_colSpan$$.$_item$.columnSpan;
  return null != $JSCompiler_StaticMethods_getColSpan$self_colSpan$$ && 0 <= $JSCompiler_StaticMethods_getColSpan$self_colSpan$$ ? $JSCompiler_StaticMethods_getColSpan$self_colSpan$$ : 1
};
D.$JSCompiler_StaticMethods_getRowSpan$$ = function $$JSCompiler_StaticMethods_getRowSpan$$$($JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$) {
  $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$ = $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$.$_item$.rowSpan;
  return null != $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$ && 0 <= $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$ ? $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$ : 1
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.getCount = function $$JSCompiler_prototypeAlias$$$getCount$() {
  var $count$$24$$ = this.$_item$.count;
  return null != $count$$24$$ ? window.Math.max($count$$24$$, 0) : 1
};
D.$JSCompiler_prototypeAlias$$.$getShape$ = function $$JSCompiler_prototypeAlias$$$$getShape$$() {
  return this.$_item$.shape || this.$_picto$.$getOptions$()._defaultShape
};
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color || this.$_picto$.$getOptions$()._defaultColor
};
D.$JSCompiler_prototypeAlias$$.$getBorderColor$ = function $$JSCompiler_prototypeAlias$$$$getBorderColor$$() {
  return this.$_item$.borderColor
};
D.$JSCompiler_prototypeAlias$$.$getBorderWidth$ = function $$JSCompiler_prototypeAlias$$$$getBorderWidth$$() {
  return this.$_item$.borderWidth
};
D.$JSCompiler_prototypeAlias$$.$getSource$ = function $$JSCompiler_prototypeAlias$$$$getSource$$() {
  return this.$_item$.source
};
D.$JSCompiler_prototypeAlias$$.$getSourceSelected$ = function $$JSCompiler_prototypeAlias$$$$getSourceSelected$$() {
  return this.$_item$.sourceSelected
};
D.$JSCompiler_prototypeAlias$$.$getSourceHover$ = function $$JSCompiler_prototypeAlias$$$$getSourceHover$$() {
  return this.$_item$.sourceHover
};
D.$JSCompiler_prototypeAlias$$.$getSourceHoverSelected$ = function $$JSCompiler_prototypeAlias$$$$getSourceHoverSelected$$() {
  return this.$_item$.sourceHoverSelected
};
D.$JSCompiler_prototypeAlias$$.getName = function $$JSCompiler_prototypeAlias$$$getName$() {
  return this.$_item$.name
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_item$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = function $$JSCompiler_prototypeAlias$$$$isDrillable$$() {
  var $drilling$$3$$ = this.$_item$.drilling;
  return $drilling$$3$$ && "inherit" != $drilling$$3$$ ? "on" == $drilling$$3$$ : "on" == this.$_picto$.$getOptions$().drilling
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return this.$isSelectable$() && this.$isDrillable$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $options$$239_tooltipManager$$9$$ = this.$_picto$.$getOptions$(), $nameTd_tooltipFunc$$8$$ = this.$_picto$.$getOptions$().tooltip;
  if($nameTd_tooltipFunc$$8$$) {
    var $options$$239_tooltipManager$$9$$ = this.$_picto$.$getCtx$().$getTooltipManager$(), $dataContext$$9_isRTL$$38_name$$102$$ = {id:this.getId(), name:this.getName(), count:this.getCount(), color:this.$getColor$()};
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)($options$$239_tooltipManager$$9$$, $nameTd_tooltipFunc$$8$$, $dataContext$$9_isRTL$$38_name$$102$$)
  }
  if(null != this.$getShortDesc$()) {
    return this.$getShortDesc$()
  }
  $nameTd_tooltipFunc$$8$$ = "";
  ($dataContext$$9_isRTL$$38_name$$102$$ = this.getName()) && ($nameTd_tooltipFunc$$8$$ = (0,D.$DvtHtmlTooltipManager$createStartTag$$)("td", $options$$239_tooltipManager$$9$$._tooltipLabelStyle) + $dataContext$$9_isRTL$$38_name$$102$$ + "\x3c/td\x3e");
  $dataContext$$9_isRTL$$38_name$$102$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_picto$.$getCtx$());
  $options$$239_tooltipManager$$9$$._tooltipLabelStyle.$setStyle$("text-align", $dataContext$$9_isRTL$$38_name$$102$$ ? "left" : "right");
  $options$$239_tooltipManager$$9$$._tooltipValueStyle.$setStyle$("text-align", $dataContext$$9_isRTL$$38_name$$102$$ ? "right" : "left");
  return(0,D.$DvtHtmlTooltipManager$createStartTag$$)("table", $options$$239_tooltipManager$$9$$._tooltipStyle) + "\x3ctr\x3e" + $nameTd_tooltipFunc$$8$$ + (0,D.$DvtHtmlTooltipManager$createStartTag$$)("td", $options$$239_tooltipManager$$9$$._tooltipValueStyle) + (0,D.$JSCompiler_StaticMethods__getCountString$$)(this) + "\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getColor$()
};
D.$JSCompiler_StaticMethods__getCountString$$ = function $$JSCompiler_StaticMethods__getCountString$$$($JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7912$$) {
  var $JSCompiler_temp_const$$424$$ = $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7912$$.$_picto$.$getOptions$(), $JSCompiler_temp_const$$423$$ = $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7912$$.getCount();
  $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7912$$ = $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7912$$.$_picto$;
  for(var $count$$inline_7913$$ = 0, $i$$inline_7914$$ = 0;$i$$inline_7914$$ < $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7912$$.$_items$.length;$i$$inline_7914$$++) {
    $count$$inline_7913$$ += $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7912$$.$_items$[$i$$inline_7914$$].getCount()
  }
  return(0,D.$DvtBundle$getTranslation$$)($JSCompiler_temp_const$$424$$, "labelCountWithTotal", "DvtUtilBundle", "COUNT_WITH_TOTAL", [$JSCompiler_temp_const$$423$$, $count$$inline_7913$$])
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"none" != this.$_picto$.$getOptions$().selectionMode
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$3$$) {
  this.$_isSelected$ = $bSelected$$3$$;
  this.$_updateAriaLabel$();
  for(var $i$$758$$ = 0;$i$$758$$ < this.$getNumChildren$();$i$$758$$++) {
    var $child$$74$$ = this.$getChildAt$($i$$758$$);
    ($child$$74$$ instanceof D.$DvtPictoChartShapeMarker$$ || $child$$74$$ instanceof D.$DvtPictoChartImageMarker$$) && $child$$74$$.$setSelected$($bSelected$$3$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$759$$ = 0;$i$$759$$ < this.$getNumChildren$();$i$$759$$++) {
    var $child$$75$$ = this.$getChildAt$($i$$759$$);
    ($child$$75$$ instanceof D.$DvtPictoChartShapeMarker$$ || $child$$75$$ instanceof D.$DvtPictoChartImageMarker$$) && $child$$75$$.$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$760$$ = 0;$i$$760$$ < this.$getNumChildren$();$i$$760$$++) {
    var $child$$76$$ = this.$getChildAt$($i$$760$$);
    ($child$$76$$ instanceof D.$DvtPictoChartShapeMarker$$ || $child$$76$$ instanceof D.$DvtPictoChartImageMarker$$) && $child$$76$$.$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$14$$ = [], $name$$103_options$$240_shortDesc$$9$$ = this.$_picto$.$getOptions$();
  this.$isSelectable$() && $states$$14$$.push((0,D.$DvtBundle$getTranslation$$)($name$$103_options$$240_shortDesc$$9$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", "DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$isDrillable$() && $states$$14$$.push((0,D.$DvtBundle$getTranslation$$)($name$$103_options$$240_shortDesc$$9$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  $name$$103_options$$240_shortDesc$$9$$ = this.getName();
  $name$$103_options$$240_shortDesc$$9$$ = null != this.$getShortDesc$() ? this.$getShortDesc$() : null == $name$$103_options$$240_shortDesc$$9$$ ? (0,D.$JSCompiler_StaticMethods__getCountString$$)(this) : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$name$$103_options$$240_shortDesc$$9$$, (0,D.$JSCompiler_StaticMethods__getCountString$$)(this)]);
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($name$$103_options$$240_shortDesc$$9$$, $states$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_item$.categories || [this.getId()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$) {
  var $keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$ = this.$_picto$.$getEventManager$().$KeyboardHandler$;
  if($JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$.type == D.$DvtMouseEvent$CLICK$$ || $keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$.$isMultiSelectEvent$($JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$)) {
    $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$ = this
  }else {
    if($keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$.$isNavigationEvent$($JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$)) {
      var $keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$ = this.$_picto$, $isOriginRight$$inline_7919$$ = D.$DvtPictoChartRenderer$$.$isOriginRight$($keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$), $isOriginBottom$$inline_7920$$ = D.$DvtPictoChartRenderer$$.$isOriginBottom$($keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$);
      $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$ = 37 == $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$.keyCode && $isOriginRight$$inline_7919$$ || 39 == $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$.keyCode && !$isOriginRight$$inline_7919$$ || 38 == $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$.keyCode && 
      $isOriginBottom$$inline_7920$$ || 40 == $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$.keyCode && !$isOriginBottom$$inline_7920$$;
      $keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$ = $keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$.$getItems$();
      $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$ = D.$DvtArrayUtils$$.$getIndex$($keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$, this) + ($JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$ ? 1 : -1);
      $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$ = $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$ < $keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$.length && 0 <= $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$ ? $keyboardHandler$$5_navigableItems$$inline_7922_picto$$inline_7916$$[$JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$] : 
      this
    }else {
      $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$ = null
    }
  }
  return $JSCompiler_temp$$279_JSCompiler_temp$$280_event$$694_isForward$$inline_7921_nextIdx$$inline_7923$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$54$$) {
  return this.$getDimensions$($targetCoordinateSpace$$54$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
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
D.$JSCompiler_prototypeAlias$$.$getKeyboardTooltipLocation$ = (0,D.$JSCompiler_get$$)("$_keyboardTooltipLocation$");
D.$DvtPictoChartKeyboardHandler$$ = function $$DvtPictoChartKeyboardHandler$$$($eventManager$$19$$) {
  this.Init($eventManager$$19$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPictoChartKeyboardHandler");
D.$DvtPictoChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtPictoChartKeyboardHandler$$$$$isSelectionEvent$$($event$$695$$) {
  return this.$isNavigationEvent$($event$$695$$) && !$event$$695$$.ctrlKey
};
D.$DvtPictoChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtPictoChartKeyboardHandler$$$$$isMultiSelectEvent$$($event$$696$$) {
  return 32 == $event$$696$$.keyCode && $event$$696$$.ctrlKey
};
D.$DvtPictoChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPictoChartKeyboardHandler$$$$$processKeyDown$$($event$$698$$) {
  var $currentNavigable$$15$$ = this.$_eventManager$.$getFocus$();
  return $currentNavigable$$15$$ && 13 == $event$$698$$.keyCode ? (this.$_eventManager$.$processDrillEvent$($currentNavigable$$15$$), (0,D.$DvtEventManager$consumeEvent$$)($event$$698$$), $currentNavigable$$15$$) : D.$DvtPictoChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$698$$)
};
D.$DvtPictoChartShapeMarker$$ = function $$DvtPictoChartShapeMarker$$$($picto$$12$$, $shape$$85$$, $cx$$59$$, $cy$$60$$, $width$$148$$, $height$$135$$, $id$$255$$) {
  D.$DvtPictoChartShapeMarker$$.$superclass$.Init.call(this, $picto$$12$$.$getCtx$(), $shape$$85$$, "alta", $cx$$59$$, $cy$$60$$, $width$$148$$, $height$$135$$, !0, $id$$255$$);
  this.$_picto$ = $picto$$12$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartShapeMarker$$, D.$DvtSimpleMarker$$, "DvtPictoChartShapeMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartShapeMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$54$$, $oldMarker$$1$$) {
  var $animation$$5$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, 0.75 * this.$_picto$.$getAnimationDuration$()), $animator$$129$$ = $animation$$5$$.$_animator$, $endFill$$3_endParams$$2$$ = this.$getFill$();
  this.$setFill$($oldMarker$$1$$.$getFill$().$clone$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$129$$, "typeFill", this, this.$getFill$, this.$setFill$, $endFill$$3_endParams$$2$$);
  $endFill$$3_endParams$$2$$ = this.$_getAnimationParams$();
  this.$_setAnimationParams$($oldMarker$$1$$.$_getAnimationParams$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$129$$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endFill$$3_endParams$$2$$);
  $oldMarker$$1$$.$setAlpha$(0);
  $handler$$54$$.add($animation$$5$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$55$$) {
  $handler$$55$$.add(new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$56$$) {
  this.$setAlpha$(0);
  $handler$$56$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 2)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[this.$getCx$(), this.$getCy$(), this.getWidth(), this.getHeight()]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$49$$) {
  this.$setCx$($params$$49$$[0]);
  this.$setCy$($params$$49$$[1]);
  this.$setWidth$($params$$49$$[2]);
  this.$setHeight$($params$$49$$[3])
};
D.$DvtPictoChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartRenderer$$, D.$DvtObj$$, "DvtPictoChartRenderer");
D.$DvtPictoChartRenderer$$.$render$ = function $$DvtPictoChartRenderer$$$$render$$($picto$$6$$, $container$$169$$, $availSpace$$115$$, $info$$19$$) {
  var $context$$550$$ = $picto$$6$$.$getCtx$(), $background$$15_gapRatio$$1$$ = new D.$DvtRect$$($context$$550$$, $availSpace$$115$$.x, $availSpace$$115$$.y, $availSpace$$115$$.$w$, $availSpace$$115$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$15_gapRatio$$1$$);
  $container$$169$$.$addChild$($background$$15_gapRatio$$1$$);
  $info$$19$$ || ($info$$19$$ = D.$DvtPictoChartRenderer$$.$getInfo$($picto$$6$$, $availSpace$$115$$.$w$, $availSpace$$115$$.$h$));
  if($info$$19$$.$items$) {
    $picto$$6$$.$registerItems$($info$$19$$.$items$);
    for(var $background$$15_gapRatio$$1$$ = $picto$$6$$.$getOptions$()._gapRatio, $isVert$$12$$ = D.$DvtPictoChartRenderer$$.$isVertical$($picto$$6$$), $isOriginBottom$$1$$ = D.$DvtPictoChartRenderer$$.$isOriginBottom$($picto$$6$$), $isOriginRight$$1$$ = D.$DvtPictoChartRenderer$$.$isOriginRight$($picto$$6$$), $cellMap$$1$$ = new D.$DvtMap2D$$, $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7931_prevColSpan$$ = 0, $prevRowSpan$$ = 0, $remainder$$ = 0, $i$$761$$ = 0;$i$$761$$ < $info$$19$$.$items$.length;$i$$761$$++) {
      for(var $item$$51$$ = $info$$19$$.$items$[$i$$761$$], $colSpan$$1$$ = (0,D.$JSCompiler_StaticMethods_getColSpan$$)($item$$51$$), $rowSpan$$1$$ = (0,D.$JSCompiler_StaticMethods_getRowSpan$$)($item$$51$$), $w$$63$$ = $colSpan$$1$$ * $info$$19$$.$colWidth$, $h$$61$$ = $rowSpan$$1$$ * $info$$19$$.$rowHeight$, $count$$25$$ = $item$$51$$.getCount(), $index$$228$$ = 0, $isFirstMarker_location$$inline_7926$$ = !0, $cell$$49$$;0 < $count$$25$$;) {
        if($colSpan$$1$$ != $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7931_prevColSpan$$ || $rowSpan$$1$$ != $prevRowSpan$$) {
          $remainder$$ = 0
        }
        0 == $remainder$$ && ($cell$$49$$ = D.$DvtPictoChartRenderer$$.$_findNextAvailableCell$($cellMap$$1$$, $colSpan$$1$$, $rowSpan$$1$$, $info$$19$$.$colCount$, $info$$19$$.$rowCount$, $isVert$$12$$));
        if(null == $cell$$49$$) {
          break
        }
        var $x$$257_xOffset$$5$$ = $cell$$49$$.$col$ * $info$$19$$.$colWidth$ + $w$$63$$ / 2, $fraction$$1_yOffset$$8$$ = $cell$$49$$.$row$ * $info$$19$$.$rowHeight$ + $h$$61$$ / 2, $x$$257_xOffset$$5$$ = $availSpace$$115$$.x + ($isOriginRight$$1$$ ? $availSpace$$115$$.$w$ - $x$$257_xOffset$$5$$ : $x$$257_xOffset$$5$$), $y$$232$$ = $availSpace$$115$$.y + ($isOriginBottom$$1$$ ? $availSpace$$115$$.$h$ - $fraction$$1_yOffset$$8$$ : $fraction$$1_yOffset$$8$$), $fraction$$1_yOffset$$8$$ = window.Math.min(1 - 
        $remainder$$, $count$$25$$), $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$;
        $isVert$$12$$ ? ($rectX$$ = $x$$257_xOffset$$5$$ - $w$$63$$ / 2, $rectY$$ = $isOriginBottom$$1$$ ? $y$$232$$ + $h$$61$$ * (0.5 - $fraction$$1_yOffset$$8$$ - $remainder$$) : $y$$232$$ + $h$$61$$ * ($remainder$$ - 0.5), $rectW$$1$$ = $w$$63$$, $rectH$$1$$ = $h$$61$$ * $fraction$$1_yOffset$$8$$) : ($rectX$$ = $isOriginRight$$1$$ ? $x$$257_xOffset$$5$$ + $w$$63$$ * (0.5 - $fraction$$1_yOffset$$8$$ - $remainder$$) : $x$$257_xOffset$$5$$ + $w$$63$$ * ($remainder$$ - 0.5), $rectY$$ = $y$$232$$ - 
        $h$$61$$ / 2, $rectW$$1$$ = $w$$63$$ * $fraction$$1_yOffset$$8$$, $rectH$$1$$ = $h$$61$$);
        var $marker$$17_markerId$$11$$;
        1 == $fraction$$1_yOffset$$8$$ ? ($marker$$17_markerId$$11$$ = $item$$51$$.getId() + "_" + $index$$228$$, $index$$228$$++) : $marker$$17_markerId$$11$$ = window.Math.random();
        if($item$$51$$.$getSource$()) {
          $marker$$17_markerId$$11$$ = new D.$DvtPictoChartImageMarker$$($picto$$6$$, $x$$257_xOffset$$5$$, $y$$232$$, $w$$63$$, $h$$61$$, $item$$51$$.$getSource$(), $item$$51$$.$getSourceSelected$(), $item$$51$$.$getSourceHover$(), $item$$51$$.$getSourceHoverSelected$(), $marker$$17_markerId$$11$$ + "_I")
        }else {
          var $clipPath$$15_hitArea$$4$$ = new D.$DvtRect$$($context$$550$$, $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$);
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($clipPath$$15_hitArea$$4$$);
          $item$$51$$.$addChild$($clipPath$$15_hitArea$$4$$);
          $marker$$17_markerId$$11$$ = new D.$DvtPictoChartShapeMarker$$($picto$$6$$, $item$$51$$.$getShape$(), $x$$257_xOffset$$5$$, $y$$232$$, $w$$63$$ - $info$$19$$.$colWidth$ * $background$$15_gapRatio$$1$$, $h$$61$$ - $info$$19$$.$rowHeight$ * $background$$15_gapRatio$$1$$, $marker$$17_markerId$$11$$ + "_S");
          $marker$$17_markerId$$11$$.$setSolidFill$($item$$51$$.$getColor$());
          $marker$$17_markerId$$11$$.$setSolidStroke$($item$$51$$.$getBorderColor$(), null, $item$$51$$.$getBorderWidth$());
          $marker$$17_markerId$$11$$.$setDataColor$($item$$51$$.$getColor$())
        }
        1 > $fraction$$1_yOffset$$8$$ && ($clipPath$$15_hitArea$$4$$ = new D.$DvtClipPath$$, (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$15_hitArea$$4$$, $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($marker$$17_markerId$$11$$, $clipPath$$15_hitArea$$4$$));
        $isFirstMarker_location$$inline_7926$$ && ($isFirstMarker_location$$inline_7926$$ = new D.$DvtPoint$$($x$$257_xOffset$$5$$, $y$$232$$), $item$$51$$.$_keyboardTooltipLocation$ = $isFirstMarker_location$$inline_7926$$, $isFirstMarker_location$$inline_7926$$ = !1);
        $item$$51$$.$addChild$($marker$$17_markerId$$11$$);
        $picto$$6$$.$_markers$.push($marker$$17_markerId$$11$$);
        $count$$25$$ -= $fraction$$1_yOffset$$8$$;
        $remainder$$ = ($remainder$$ + $fraction$$1_yOffset$$8$$) % 1
      }
      $container$$169$$.$addChild$($item$$51$$);
      $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7931_prevColSpan$$ = $item$$51$$;
      $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7931_prevColSpan$$.$setAriaRole$("img");
      $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7931_prevColSpan$$.$_updateAriaLabel$();
      $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7931_prevColSpan$$ = $colSpan$$1$$;
      $prevRowSpan$$ = $rowSpan$$1$$
    }
  }else {
    D.$DvtPictoChartRenderer$$.$renderEmptyText$($picto$$6$$, $container$$169$$, $availSpace$$115$$)
  }
};
D.$DvtPictoChartRenderer$$.$getInfo$ = function $$DvtPictoChartRenderer$$$$getInfo$$($isVert$$13_picto$$7$$, $width$$147$$, $height$$134$$) {
  var $options$$242_rowCount$$21$$ = $isVert$$13_picto$$7$$.$getOptions$(), $colWidth$$4_itemObjs$$ = $options$$242_rowCount$$21$$.items;
  if(!$colWidth$$4_itemObjs$$) {
    return{}
  }
  for(var $categoryMap$$1_rowHeight$$11$$ = D.$DvtArrayUtils$$.$createBooleanMap$($options$$242_rowCount$$21$$.hiddenCategories), $items$$31$$ = [], $numCells$$ = 0, $maxColSpan$$ = 1, $maxRowSpan$$ = 1, $colCount$$3_i$$762$$ = 0;$colCount$$3_i$$762$$ < $colWidth$$4_itemObjs$$.length;$colCount$$3_i$$762$$++) {
    if(null != $colWidth$$4_itemObjs$$[$colCount$$3_i$$762$$]) {
      var $item$$52$$ = new D.$DvtPictoChartItem$$($isVert$$13_picto$$7$$, $colWidth$$4_itemObjs$$[$colCount$$3_i$$762$$]);
      if(!$categoryMap$$1_rowHeight$$11$$ || !D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$1_rowHeight$$11$$, $item$$52$$.$getCategories$())) {
        var $colSpan$$2$$ = (0,D.$JSCompiler_StaticMethods_getColSpan$$)($item$$52$$), $rowSpan$$2$$ = (0,D.$JSCompiler_StaticMethods_getRowSpan$$)($item$$52$$);
        $colSpan$$2$$ > $maxColSpan$$ && ($maxColSpan$$ = $colSpan$$2$$);
        $rowSpan$$2$$ > $maxRowSpan$$ && ($maxRowSpan$$ = $rowSpan$$2$$);
        $numCells$$ += $colSpan$$2$$ * $rowSpan$$2$$ * $item$$52$$.getCount();
        $items$$31$$.push($item$$52$$)
      }
    }
  }
  if(0 == $numCells$$) {
    return{}
  }
  $colWidth$$4_itemObjs$$ = $options$$242_rowCount$$21$$.columnWidth;
  $categoryMap$$1_rowHeight$$11$$ = $options$$242_rowCount$$21$$.rowHeight;
  if(!$width$$147$$ || !$height$$134$$) {
    $colWidth$$4_itemObjs$$ || ($colWidth$$4_itemObjs$$ = $categoryMap$$1_rowHeight$$11$$ ? $categoryMap$$1_rowHeight$$11$$ : $options$$242_rowCount$$21$$._defaultSize), $categoryMap$$1_rowHeight$$11$$ || ($categoryMap$$1_rowHeight$$11$$ = $colWidth$$4_itemObjs$$)
  }
  $isVert$$13_picto$$7$$ = D.$DvtPictoChartRenderer$$.$isVertical$($isVert$$13_picto$$7$$);
  $colCount$$3_i$$762$$ = $options$$242_rowCount$$21$$.columnCount;
  $options$$242_rowCount$$21$$ = $options$$242_rowCount$$21$$.rowCount;
  !$colCount$$3_i$$762$$ && !$options$$242_rowCount$$21$$ && ($width$$147$$ && $height$$134$$ ? $isVert$$13_picto$$7$$ ? $options$$242_rowCount$$21$$ = D.$DvtPictoChartRenderer$$.$_ceil$(window.Math.sqrt($numCells$$ * $height$$134$$ / $width$$147$$), $maxRowSpan$$) : $colCount$$3_i$$762$$ = D.$DvtPictoChartRenderer$$.$_ceil$(window.Math.sqrt($numCells$$ * $width$$147$$ / $height$$134$$), $maxColSpan$$) : $width$$147$$ ? $colCount$$3_i$$762$$ = window.Math.max(window.Math.floor($width$$147$$ / $colWidth$$4_itemObjs$$), 
  1) : $height$$134$$ ? $options$$242_rowCount$$21$$ = window.Math.max(window.Math.floor($height$$134$$ / $categoryMap$$1_rowHeight$$11$$), 1) : $isVert$$13_picto$$7$$ ? $options$$242_rowCount$$21$$ = D.$DvtPictoChartRenderer$$.$_ceil$(window.Math.sqrt($numCells$$), $maxRowSpan$$) : $colCount$$3_i$$762$$ = D.$DvtPictoChartRenderer$$.$_ceil$(window.Math.sqrt($numCells$$), $maxColSpan$$));
  $colCount$$3_i$$762$$ ? $options$$242_rowCount$$21$$ || ($options$$242_rowCount$$21$$ = D.$DvtPictoChartRenderer$$.$_ceil$($numCells$$ / $colCount$$3_i$$762$$, $maxRowSpan$$)) : $colCount$$3_i$$762$$ = D.$DvtPictoChartRenderer$$.$_ceil$($numCells$$ / $options$$242_rowCount$$21$$, $maxColSpan$$);
  $width$$147$$ && $height$$134$$ && ($colWidth$$4_itemObjs$$ || ($colWidth$$4_itemObjs$$ = $categoryMap$$1_rowHeight$$11$$ ? $categoryMap$$1_rowHeight$$11$$ : window.Math.min($width$$147$$ / $colCount$$3_i$$762$$, $height$$134$$ / $options$$242_rowCount$$21$$)), $categoryMap$$1_rowHeight$$11$$ || ($categoryMap$$1_rowHeight$$11$$ = $colWidth$$4_itemObjs$$));
  return 0 >= $colCount$$3_i$$762$$ || 0 >= $options$$242_rowCount$$21$$ || 0 >= $colWidth$$4_itemObjs$$ || 0 >= $categoryMap$$1_rowHeight$$11$$ ? {} : {$items$:$items$$31$$, $colCount$:$colCount$$3_i$$762$$, $rowCount$:$options$$242_rowCount$$21$$, $colWidth$:$colWidth$$4_itemObjs$$, $rowHeight$:$categoryMap$$1_rowHeight$$11$$}
};
D.$DvtPictoChartRenderer$$.$_ceil$ = function $$DvtPictoChartRenderer$$$$_ceil$$($a$$77$$, $b$$57$$) {
  return window.Math.ceil($a$$77$$ / $b$$57$$) * $b$$57$$
};
D.$DvtPictoChartRenderer$$.$_findNextAvailableCell$ = function $$DvtPictoChartRenderer$$$$_findNextAvailableCell$$($cell$$50_cellMap$$2$$, $colSpan$$3$$, $rowSpan$$3$$, $colCount$$4$$, $rowCount$$22$$, $isVert$$14_r$$87$$) {
  if($isVert$$14_r$$87$$) {
    return($cell$$50_cellMap$$2$$ = D.$DvtPictoChartRenderer$$.$_findNextAvailableCell$($cell$$50_cellMap$$2$$, $rowSpan$$3$$, $colSpan$$3$$, $rowCount$$22$$, $colCount$$4$$, !1)) ? {$col$:$cell$$50_cellMap$$2$$.$row$, $row$:$cell$$50_cellMap$$2$$.$col$} : null
  }
  for($isVert$$14_r$$87$$ = 0;$isVert$$14_r$$87$$ < $rowCount$$22$$ - $rowSpan$$3$$ + 1;$isVert$$14_r$$87$$++) {
    for(var $c$$45$$ = 0;$c$$45$$ < $colCount$$4$$ - $colSpan$$3$$ + 1;$c$$45$$++) {
      if(D.$DvtPictoChartRenderer$$.$_areCellsAvailable$($cell$$50_cellMap$$2$$, $c$$45$$, $isVert$$14_r$$87$$, $colSpan$$3$$, $rowSpan$$3$$)) {
        return D.$DvtPictoChartRenderer$$.$_occupyCells$($cell$$50_cellMap$$2$$, $c$$45$$, $isVert$$14_r$$87$$, $colSpan$$3$$, $rowSpan$$3$$), {$col$:$c$$45$$, $row$:$isVert$$14_r$$87$$}
      }
    }
  }
  return null
};
D.$DvtPictoChartRenderer$$.$_areCellsAvailable$ = function $$DvtPictoChartRenderer$$$$_areCellsAvailable$$($cellMap$$3$$, $col$$5$$, $row$$54$$, $colSpan$$4$$, $rowSpan$$4$$) {
  for(var $r$$88$$ = 0;$r$$88$$ < $rowSpan$$4$$;$r$$88$$++) {
    for(var $c$$46$$ = 0;$c$$46$$ < $colSpan$$4$$;$c$$46$$++) {
      if($cellMap$$3$$.get($col$$5$$ + $c$$46$$, $row$$54$$ + $r$$88$$)) {
        return!1
      }
    }
  }
  return!0
};
D.$DvtPictoChartRenderer$$.$_occupyCells$ = function $$DvtPictoChartRenderer$$$$_occupyCells$$($cellMap$$4$$, $col$$6$$, $row$$55$$, $colSpan$$5$$, $rowSpan$$5$$) {
  for(var $r$$89$$ = 0;$r$$89$$ < $rowSpan$$5$$;$r$$89$$++) {
    for(var $c$$47$$ = 0;$c$$47$$ < $colSpan$$5$$;$c$$47$$++) {
      $cellMap$$4$$.put($col$$6$$ + $c$$47$$, $row$$55$$ + $r$$89$$, !0)
    }
  }
};
D.$DvtPictoChartRenderer$$.$renderEmptyText$ = function $$DvtPictoChartRenderer$$$$renderEmptyText$$($picto$$8$$, $container$$170_emptyText$$4$$, $availSpace$$116$$) {
  var $options$$243$$ = $picto$$8$$.$getOptions$(), $emptyTextStr$$2$$ = (0,D.$DvtBundle$getTranslation$$)($options$$243$$, "labelNoData", "DvtUtilBundle", "NO_DATA");
  $container$$170_emptyText$$4$$ = D.$DvtTextUtils$$.$renderEmptyText$($container$$170_emptyText$$4$$, $emptyTextStr$$2$$, $availSpace$$116$$.$clone$(), $picto$$8$$.$getEventManager$(), $options$$243$$._statusMessageStyle);
  $picto$$8$$.$_emptyText$ = $container$$170_emptyText$$4$$
};
D.$DvtPictoChartRenderer$$.$isVertical$ = function $$DvtPictoChartRenderer$$$$isVertical$$($picto$$9$$) {
  return"vertical" == $picto$$9$$.$getOptions$().layout
};
D.$DvtPictoChartRenderer$$.$isOriginBottom$ = function $$DvtPictoChartRenderer$$$$isOriginBottom$$($origin_picto$$10$$) {
  $origin_picto$$10$$ = $origin_picto$$10$$.$getOptions$().layoutOrigin;
  return"bottomStart" == $origin_picto$$10$$ || "bottomEnd" == $origin_picto$$10$$
};
D.$DvtPictoChartRenderer$$.$isOriginRight$ = function $$DvtPictoChartRenderer$$$$isOriginRight$$($picto$$11$$) {
  var $isEnd$$1_origin$$1$$ = $picto$$11$$.$getOptions$().layoutOrigin, $isEnd$$1_origin$$1$$ = "topEnd" == $isEnd$$1_origin$$1$$ || "bottomEnd" == $isEnd$$1_origin$$1$$;
  return(0,D.$DvtAgent$isRightToLeft$$)($picto$$11$$.$getCtx$()) ? !$isEnd$$1_origin$$1$$ : $isEnd$$1_origin$$1$$
};

  return D;
});