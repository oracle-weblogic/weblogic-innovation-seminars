/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtAxis'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$382$$, $callback$$108$$, $callbackObj$$59$$, $bStaticRendering$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$382$$, $callback$$108$$, $callbackObj$$59$$);
  this.$_bStaticRendering$ = $bStaticRendering$$;
  this.$_bStaticRendering$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$382$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), 
  this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = !1;
  this.$_oldValue$ = null
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$131$$) {
  this.$Options$ = $options$$131$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$, $container$$98_width$$88$$, $ariaId_height$$82_oldShapes_value$$167$$) {
  $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$) : this.$Options$ || this.$SetOptions$(null);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($container$$98_width$$88$$) && !(0,window.isNaN)($ariaId_height$$82_oldShapes_value$$167$$) && (this.$Width$ = $container$$98_width$$88$$, this.$Height$ = $ariaId_height$$82_oldShapes_value$$167$$);
  $ariaId_height$$82_oldShapes_value$$167$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$98_width$$88$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChildAt$($container$$98_width$$88$$, 0);
  this.$Render$($container$$98_width$$88$$, this.$Width$, this.$Height$);
  var $bData$$inline_6275_newObjs$$inline_10918$$ = null != $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$, $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$ = this.$Width$, $context$$inline_6284_endState$$inline_10924_height$$inline_6278$$ = this.$Height$;
  this.$_animation$ && (this.$_animationStopped$ = !0, this.$_animation$.stop());
  $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ = !1;
  var $animatedObjs$$inline_10920_animationOnDataChange$$inline_6280$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDataChange, $animationOnDisplay$$inline_6281_i$$inline_10921$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDisplay, $animationDuration$$inline_6282$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)(this.$getOptions$().animationDuration) / 1E3;
  if($animationOnDisplay$$inline_6281_i$$inline_10921$$ || $animatedObjs$$inline_10920_animationOnDataChange$$inline_6280$$) {
    $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$, $context$$inline_6284_endState$$inline_10924_height$$inline_6278$$);
    $context$$inline_6284_endState$$inline_10924_height$$inline_6278$$ = this.$getCtx$();
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_6281_i$$inline_10921$$ && null != this.$__shapes$[0]) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_6284_endState$$inline_10924_height$$inline_6278$$, $animationOnDisplay$$inline_6281_i$$inline_10921$$, $container$$98_width$$88$$, $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$, $animationDuration$$inline_6282$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_6281_i$$inline_10921$$, $animationDuration$$inline_6282$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_10920_animationOnDataChange$$inline_6280$$ && $bData$$inline_6275_newObjs$$inline_10918$$ && null != this.$__shapes$[0]) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_6284_endState$$inline_10924_height$$inline_6278$$, $animatedObjs$$inline_10920_animationOnDataChange$$inline_6280$$, this.$_container$, $container$$98_width$$88$$, $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$, $animationDuration$$inline_6282$$)) {
          $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ = !0
        }else {
          $bData$$inline_6275_newObjs$$inline_10918$$ = this.$__shapes$;
          $animatedObjs$$inline_10920_animationOnDataChange$$inline_6280$$ = [];
          for($animationOnDisplay$$inline_6281_i$$inline_10921$$ = 0;$animationOnDisplay$$inline_6281_i$$inline_10921$$ < $ariaId_height$$82_oldShapes_value$$167$$.length;$animationOnDisplay$$inline_6281_i$$inline_10921$$++) {
            var $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$ = $bData$$inline_6275_newObjs$$inline_10918$$[$animationOnDisplay$$inline_6281_i$$inline_10921$$], $animation$$inline_10925_startState$$inline_10923$$ = $ariaId_height$$82_oldShapes_value$$167$$[$animationOnDisplay$$inline_6281_i$$inline_10921$$].$getAnimationParams$(), $context$$inline_6284_endState$$inline_10924_height$$inline_6278$$ = $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$.$getAnimationParams$();
            $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$.$setAnimationParams$($animation$$inline_10925_startState$$inline_10923$$);
            $animation$$inline_10925_startState$$inline_10923$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$, $animationDuration$$inline_6282$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_10925_startState$$inline_10923$$.$_animator$, "typeNumberArray", $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$, $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$.$getAnimationParams$, $bounds$$inline_6283_newObj$$inline_10922_width$$inline_6277$$.$setAnimationParams$, $context$$inline_6284_endState$$inline_10924_height$$inline_6278$$);
            $animatedObjs$$inline_10920_animationOnDataChange$$inline_6280$$.push($animation$$inline_10925_startState$$inline_10923$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs$$inline_10920_animationOnDataChange$$inline_6280$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$98_width$$88$$
  }
  this.$_editingOverlay$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$), this.$getEventManager$().$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), !0));
  !this.$_bStaticRendering$ && !this.$Options$.readOnly && ($container$$98_width$$88$$.$setAriaRole$("slider"), $container$$98_width$$88$$.$setAriaProperty$("valuemin", this.$Options$.min), $container$$98_width$$88$$.$setAriaProperty$("valuemax", this.$Options$.max), $ariaId_height$$82_oldShapes_value$$167$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $container$$98_width$$88$$.$setAriaProperty$("valuenow", $ariaId_height$$82_oldShapes_value$$167$$), $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ = 
  D.$DvtGaugeRenderer$$.$getTooltipString$(this), (0,D.$DvtAgent$isTouchDevice$$)() && (this.$_container$.$setAriaProperty$("live", "assertive"), $ariaId_height$$82_oldShapes_value$$167$$ != $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ && ($bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ = $ariaId_height$$82_oldShapes_value$$167$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ARIA_LABEL_DESC_DELIMITER") + $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$)), 
  $ariaId_height$$82_oldShapes_value$$167$$ != $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$ && $container$$98_width$$88$$.$setAriaProperty$("label", $bBlackBoxUpdate$$inline_6279_options$$132_tooltip$$29$$), this.$_renderCount$ = null != this.$_renderCount$ ? this.$_renderCount$ + 1 : 0, $ariaId_height$$82_oldShapes_value$$167$$ = this.getId() + "_" + this.$_renderCount$, $container$$98_width$$88$$.setId($ariaId_height$$82_oldShapes_value$$167$$), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$getCtx$(), 
  $container$$98_width$$88$$));
  this.$Options$._selectingCursor && this.setCursor("pointer");
  this.$UpdateAriaAttributes$();
  this.$_animation$ || (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this)
};
D.$DvtGauge$$.prototype.render = D.$DvtGauge$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$__getLogicalObject$$() {
  var $tooltip$$30$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), $color$$52$$ = D.$DvtGaugeStyleUtils$$.$getColor$(this);
  return new D.$DvtSimpleObjPeer$$(null, $tooltip$$30$$, $color$$52$$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  this.$render$();
  (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)(this, this.$_container$)
};
D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$ = function $$JSCompiler_StaticMethods_UpdateAriaLiveValue$$$($JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$, $container$$101$$, $value$$168$$) {
  $value$$168$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($value$$168$$ ? $value$$168$$ : $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$.$Options$.value, $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$);
  $container$$101$$.$setAriaProperty$("valuenow", $value$$168$$);
  (0,D.$DvtAgent$isTouchDevice$$)() && $container$$101$$.$setAriaProperty$("label", $value$$168$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = null);
  this.$_animationStopped$ || (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this);
  this.$_animationStopped$ = this.$_animation$ = null
};
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$201$$, $y$$175$$) {
  this.$_bEditing$ = !0;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$201$$, $y$$175$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$202$$, $y$$176$$) {
  null != this.$_oldValue$ && (this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$202$$, $y$$176$$)), this.$renderUpdate$(), this.dispatchEvent(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, !1)))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$203$$, $y$$177$$) {
  this.$__processValueChangeMove$($x$$203$$, $y$$177$$);
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $value$$169$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $tooltip$$31$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
    $value$$169$$ != $tooltip$$31$$ && ($tooltip$$31$$ = $value$$169$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ARIA_LABEL_DESC_DELIMITER") + $tooltip$$31$$, this.$_container$.$setAriaProperty$("label", $tooltip$$31$$))
  }
  this.dispatchEvent(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, !0));
  this.$_bEditing$ = !1;
  this.$_oldValue$ = null
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$55$$, $b$$40$$) {
  return null != $a$$55$$.max && null != $b$$40$$.max ? $a$$55$$.max - $b$$40$$.max : $a$$55$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
  return new D.$DvtGaugeAutomation$$(this)
};
D.$DvtGauge$$.prototype.getAutomation = D.$DvtGauge$$.prototype.$getAutomation$;
D.$DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($manager$$16$$) {
  return new D.$DvtGaugeKeyboardHandler$$($manager$$16$$, this)
};
D.$DvtGauge$$.prototype.$GetComponentDescription$ = function $$DvtGauge$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "GAUGE")
};
D.$DvtGauge$$.prototype.$UpdateAriaAttributes$ = function $$DvtGauge$$$$$UpdateAriaAttributes$$() {
  if(!this.$_bStaticRendering$) {
    var $tooltip$$32$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
    (0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this) ? this.$Options$.readOnly ? (this.$getCtx$().$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), $tooltip$$32$$ ? [$tooltip$$32$$] : null)]))) : 
    (this.$getCtx$().$setAriaRole$("application"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$())]))) : this.$Options$.readOnly && (this.$setAriaRole$("img"), this.$setAriaProperty$("label", (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), 
    $tooltip$$32$$ ? [$tooltip$$32$$] : null)))
  }
};
D.$DvtGaugeAutomation$$ = (0,D.$JSCompiler_set$$)("$_gauge$");
(0,D.$goog$exportPath_$$)("DvtGaugeAutomation", D.$DvtGaugeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeAutomation$$, D.$DvtAutomation$$, "DvtGaugeAutomation");
D.$DvtGaugeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtGaugeAutomation$$$$$getDomElementForSubId$$($item$$24_subId$$15$$) {
  if("tooltip" == $item$$24_subId$$15$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_gauge$)
  }
  if(0 == $item$$24_subId$$15$$.indexOf("item")) {
    var $openParen$$2$$ = $item$$24_subId$$15$$.indexOf("["), $closeParen$$2$$ = $item$$24_subId$$15$$.indexOf("]");
    if(0 < $openParen$$2$$ && 0 < $closeParen$$2$$ && ($item$$24_subId$$15$$ = this.$_gauge$.$_container$.$getChildAt$(0).$getChildAt$($item$$24_subId$$15$$.substring($openParen$$2$$ + 1, $closeParen$$2$$)))) {
      return $item$$24_subId$$15$$.$getElem$()
    }
  }
  return null
};
D.$DvtGaugeAutomation$$.prototype.getDomElementForSubId = D.$DvtGaugeAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
  return this.$_gauge$.$getOptions$().value
};
D.$DvtGaugeAutomation$$.prototype.getValue = D.$DvtGaugeAutomation$$.prototype.getValue;
D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
  return D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
};
D.$DvtGaugeAutomation$$.prototype.getMetricLabel = D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$;
(0,D.$DvtBundle$addDefaultStrings$$)("DvtGaugeBundle", {});
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _statusMessageStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _thresholdColors:["#ed6647", "#fad55c", "#68c182"]};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:null, visualEffects:"auto", emptyText:null, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"auto", scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), textType:"number"}, _statusMessageStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), title:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), 
position:"auto"}, _thresholdColors:["#D62800", "#FFCF21", "#84AE31"], __layout:{outerGap:1, labelGap:5}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$88$$) {
  $defaultsMap$$1_ret$$88$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$88$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$88$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$88$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$18$$) {
  return"skyros" == $gauge$$18$$.$getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$14_options$$133$$) {
  $gauge$$14_options$$133$$ = $gauge$$14_options$$133$$.$getOptions$();
  return!$gauge$$14_options$$133$$ || (0,window.isNaN)($gauge$$14_options$$133$$.value) || null === $gauge$$14_options$$133$$.value ? !1 : !0
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$15$$, $value$$170$$) {
  var $options$$134_thresholds$$1$$ = $gauge$$15$$.$getOptions$(), $gaugeValue$$ = null != $value$$170$$ ? $value$$170$$ : $options$$134_thresholds$$1$$.value, $options$$134_thresholds$$1$$ = $options$$134_thresholds$$1$$.thresholds;
  if(!$options$$134_thresholds$$1$$) {
    return-1
  }
  for(var $i$$616$$ = 0;$i$$616$$ < $options$$134_thresholds$$1$$.length;$i$$616$$++) {
    if($gaugeValue$$ <= $options$$134_thresholds$$1$$[$i$$616$$].max) {
      return $i$$616$$
    }
  }
  return $options$$134_thresholds$$1$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$16$$, $index$$198$$) {
  var $thresholds$$2$$ = $gauge$$16$$.$getOptions$().thresholds;
  return $thresholds$$2$$ && 0 <= $index$$198$$ && $index$$198$$ < $thresholds$$2$$.length ? $thresholds$$2$$[$index$$198$$] : null
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$17$$, $index$$199$$) {
  var $referenceObjects$$ = $gauge$$17$$.$getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$199$$ && $index$$199$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$199$$] : null
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$19$$) {
  this.Init($gauge$$19$$.$getCtx$(), $gauge$$19$$.dispatchEvent, $gauge$$19$$);
  this.$_gauge$ = $gauge$$19$$;
  this.$IsMouseEditing$ = !1
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$27_event$$499$$) {
  !1 === this.$_gauge$.$getOptions$().readOnly ? (this.$IsMouseEditing$ = !0, this.$hideTooltip$(), $coords$$27_event$$499$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$27_event$$499$$.pageX, $coords$$27_event$$499$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$27_event$$499$$.x, $coords$$27_event$$499$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$27_event$$499$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$28_event$$500$$) {
  this.$IsMouseEditing$ ? (this.$IsMouseEditing$ = !1, $coords$$28_event$$500$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$28_event$$500$$.pageX, $coords$$28_event$$500$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$28_event$$500$$.x, $coords$$28_event$$500$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$28_event$$500$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$501$$) {
  if(this.$IsMouseEditing$) {
    var $coords$$29$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$501$$.pageX, $event$$501$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$29$$.x, $coords$$29$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$IsMouseEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$501$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(!1);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$502$$) {
  if(D.$DvtTouchEvent$TOUCHSTART$$ === $event$$502$$.type && !1 === this.$_gauge$.$getOptions$().readOnly) {
    this.$IsMouseEditing$ = !0;
    var $coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$502$$.touches[0].pageX, $event$$502$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$30$$.x, $coords$$30$$.y);
    $event$$502$$.preventDefault()
  }else {
    D.$DvtTouchEvent$TOUCHMOVE$$ === $event$$502$$.type && this.$IsMouseEditing$ ? ($coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$502$$.touches[0].pageX, $event$$502$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$30$$.x, $coords$$30$$.y), $event$$502$$.preventDefault()) : D.$DvtTouchEvent$TOUCHEND$$ === $event$$502$$.type && this.$IsMouseEditing$ && (this.$IsMouseEditing$ = !1, $coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$502$$.changedTouches[0].pageX, $event$$502$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$30$$.x, $coords$$30$$.y), $event$$502$$.preventDefault())
  }
  (!this.$IsMouseEditing$ || this.$IsShowingTooltipWhileEditing$()) && D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$502$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$503$$) {
  if(!this.$KeyboardHandler$) {
    return!1
  }
  this.$KeyboardHandler$.$processKeyDown$($event$$503$$);
  var $keyCode$$33_pos$$46$$ = $event$$503$$.keyCode;
  if(38 == $keyCode$$33_pos$$46$$ || 37 == $keyCode$$33_pos$$46$$ || 40 == $keyCode$$33_pos$$46$$ || 39 == $keyCode$$33_pos$$46$$ || 9 == $keyCode$$33_pos$$46$$) {
    $keyCode$$33_pos$$46$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_gauge$.$getCtx$()), (0,D.$JSCompiler_StaticMethods_ProcessObjectTooltip$$)(this, $event$$503$$, $keyCode$$33_pos$$46$$.x, $keyCode$$33_pos$$46$$.y, this.$_gauge$.$__getLogicalObject$(), this.$_gauge$)
  }
  return!1
};
D.$JSCompiler_prototypeAlias$$.$OnBlur$ = function $$JSCompiler_prototypeAlias$$$$OnBlur$$($event$$504$$) {
  D.$DvtGaugeEventManager$$.$superclass$.$OnBlur$.call(this, $event$$504$$);
  this.$hideTooltip$()
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$7_stageCoords$$, $pageY$$7$$) {
  $pageX$$7_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$getCtx$(), $pageX$$7_stageCoords$$, $pageY$$7$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$7_stageCoords$$)
};
D.$DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGaugeKeyboardHandler$$ = function $$DvtGaugeKeyboardHandler$$$($manager$$17$$, $gauge$$20$$) {
  this.Init($manager$$17$$, $gauge$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtGaugeKeyboardHandler");
D.$DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($manager$$18$$, $gauge$$21$$) {
  D.$DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $manager$$18$$);
  this.$_gauge$ = $gauge$$21$$
};
D.$DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($event$$505$$) {
  var $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$ = $event$$505$$.keyCode, $isR2L$$6_oldValue$$inline_6307_oldValue$$inline_6310$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_gauge$.$getCtx$());
  if(38 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$ == ($isR2L$$6_oldValue$$inline_6307_oldValue$$inline_6310$$ ? 37 : 39)) {
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.readOnly || ($isR2L$$6_oldValue$$inline_6307_oldValue$$inline_6310$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value = null != $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.step ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value + 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value + ($JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.max - $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.min) / 
    100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$render$(), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.dispatchEvent(new D.$DvtValueChangeEvent$$($isR2L$$6_oldValue$$inline_6307_oldValue$$inline_6310$$, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value, !0))), (0,D.$DvtEventManager$consumeEvent$$)($event$$505$$)
  }else {
    if(40 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$ == ($isR2L$$6_oldValue$$inline_6307_oldValue$$inline_6310$$ ? 39 : 37)) {
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.readOnly || ($isR2L$$6_oldValue$$inline_6307_oldValue$$inline_6310$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value = null != $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.step ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value - 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value - ($JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.max - $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.min) / 
      100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$render$(), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.dispatchEvent(new D.$DvtValueChangeEvent$$($isR2L$$6_oldValue$$inline_6307_oldValue$$inline_6310$$, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6309_JSCompiler_StaticMethods___increaseValue$self$$inline_6306_keyCode$$34$$.$Options$.value, !0))), (0,D.$DvtEventManager$consumeEvent$$)($event$$505$$)
    }
  }
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:0.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$29$$) {
  var $options$$145$$ = $gauge$$29$$.$getOptions$(), $thresholdIndex$$1$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$29$$), $threshold$$7$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$29$$, $thresholdIndex$$1$$);
  return $threshold$$7$$ && (!($gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$145$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$29$$, $threshold$$7$$, $thresholdIndex$$1$$) : $options$$145$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$30$$) {
  var $options$$146$$ = $gauge$$30$$.$getOptions$(), $threshold$$8_thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$30$$);
  return($threshold$$8_thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$30$$, $threshold$$8_thresholdIndex$$2$$)) && $threshold$$8_thresholdIndex$$2$$.borderColor && (!($gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$146$$.thresholdDisplay) ? $threshold$$8_thresholdIndex$$2$$.borderColor : $options$$146$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$31$$) {
  var $options$$147$$ = $gauge$$31$$.$getOptions$(), $thresholdIndex$$3$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$31$$), $threshold$$9$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$31$$, $thresholdIndex$$3$$);
  return $threshold$$9$$ && (!($gauge$$31$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$31$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$147$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$31$$, $threshold$$9$$, $thresholdIndex$$3$$) : $options$$147$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaBorderColor$$($gauge$$32$$) {
  var $options$$148$$ = $gauge$$32$$.$getOptions$(), $borderColor$$35$$ = $options$$148$$.plotArea.borderColor;
  return $gauge$$32$$ instanceof D.$DvtStatusMeterGauge$$ && "circular" != $options$$148$$.orientation && null == $borderColor$$35$$ ? "skyros" == $options$$148$$.skin ? "#C6C6C6" : "#D6DFE6" : $borderColor$$35$$
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$33_options$$149$$, $threshold$$10$$, $thresholdIndex$$4$$) {
  if($threshold$$10$$.color) {
    return $threshold$$10$$.color
  }
  $gauge$$33_options$$149$$ = $gauge$$33_options$$149$$.$getOptions$();
  return $gauge$$33_options$$149$$._thresholdColors[$thresholdIndex$$4$$ % $gauge$$33_options$$149$$._thresholdColors.length]
};
D.$DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($backgroundType$$1$$) {
  return"rectangleAlta" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : 
  "rectangleLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : "domeLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ : D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
};
D.$DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($indicatorType$$1$$) {
  return"needleAntique" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
};
D.$DvtGaugeStyleUtils$$.$hasTitle$ = function $$DvtGaugeStyleUtils$$$$hasTitle$$($options$$150$$) {
  return!!$options$$150$$.title.text
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$22$$, $container$$102$$, $availSpace$$85$$) {
  var $labelStyle$$14_options$$136$$ = $gauge$$22$$.$getOptions$(), $emptyTextStr$$1$$ = $labelStyle$$14_options$$136$$.emptyText;
  $emptyTextStr$$1$$ || ($emptyTextStr$$1$$ = (0,D.$DvtBundle$getTranslation$$)($labelStyle$$14_options$$136$$, "labelNoData", "DvtUtilBundle", "NO_DATA", null));
  $labelStyle$$14_options$$136$$ = $labelStyle$$14_options$$136$$._statusMessageStyle;
  $labelStyle$$14_options$$136$$.$getStyle$("font-size") || $labelStyle$$14_options$$136$$.$setStyle$("font-size", "13px");
  if($gauge$$22$$ instanceof D.$DvtStatusMeterGauge$$) {
    var $labelColor$$1$$ = $labelStyle$$14_options$$136$$.$getStyle$("color");
    $labelStyle$$14_options$$136$$.$setStyle$("color", $labelColor$$1$$ ? $labelColor$$1$$ : "#333333")
  }
  D.$DvtTextUtils$$.$renderEmptyText$($container$$102$$, $emptyTextStr$$1$$, new D.$DvtRectangle$$($availSpace$$85$$.x, $availSpace$$85$$.y, $availSpace$$85$$.$w$, $availSpace$$85$$.$h$), $gauge$$22$$.$getEventManager$(), $labelStyle$$14_options$$136$$)
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$171$$, $gauge$$23$$) {
  var $options$$137$$ = $gauge$$23$$.$getOptions$();
  return $options$$137$$.metricLabel.text ? $options$$137$$.metricLabel.text : D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$171$$, $gauge$$23$$, $options$$137$$.metricLabel.converter, $options$$137$$.metricLabel.scaling, $options$$137$$.metricLabel.autoPrecision ? $options$$137$$.metricLabel.autoPrecision : "on", "percent" == $options$$137$$.metricLabel.textType)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$172$$, $gauge$$24$$) {
  var $options$$138$$ = $gauge$$24$$.$getOptions$(), $converter$$6$$ = null, $isPercent$$1$$ = "percent" == $options$$138$$.tickLabel.textType;
  "on" == $options$$138$$.tickLabel.rendered && $options$$138$$.tickLabel.converter && ($converter$$6$$ = $options$$138$$.tickLabel.converter);
  var $scaling$$2$$ = null;
  "on" == $options$$138$$.tickLabel.rendered && $options$$138$$.tickLabel.scaling && ($scaling$$2$$ = $options$$138$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$172$$, $gauge$$24$$, $converter$$6$$, $scaling$$2$$, $options$$138$$.tickLabel.autoPrecision ? $options$$138$$.tickLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($output_value$$173$$, $formatter$$1_gauge$$25$$, $converter$$7$$, $scaling$$3$$, $autoPrecision$$7$$, $isPercent$$2$$) {
  var $options$$139$$ = $formatter$$1_gauge$$25$$.$getOptions$(), $minValue$$12$$ = $options$$139$$.min, $maxValue$$11$$ = $options$$139$$.max, $difference$$ = $maxValue$$11$$ - $minValue$$12$$, $increment$$2$$ = null;
  (0,window.isNaN)($difference$$) || ($increment$$2$$ = $difference$$ / (1E3 > $difference$$ ? 100 : 1E3));
  $isPercent$$2$$ && ($output_value$$173$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$139$$, $options$$139$$.min, $output_value$$173$$, !0));
  $formatter$$1_gauge$$25$$ = new D.$DvtLinearScaleAxisValueFormatter$$($formatter$$1_gauge$$25$$.$getCtx$(), $minValue$$12$$, $maxValue$$11$$, $increment$$2$$, $scaling$$3$$, $autoPrecision$$7$$);
  $output_value$$173$$ = $converter$$7$$ && $converter$$7$$.getAsString ? $formatter$$1_gauge$$25$$.$format$($output_value$$173$$, $converter$$7$$) : $converter$$7$$ && $converter$$7$$.format ? $formatter$$1_gauge$$25$$.$format$($output_value$$173$$, $converter$$7$$) : $isPercent$$2$$ ? window.Math.round(100 * $output_value$$173$$) : $formatter$$1_gauge$$25$$.$format$($output_value$$173$$);
  return $isPercent$$2$$ ? (0,window.String)($output_value$$173$$) + "%" : $output_value$$173$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$140_percentFill$$, $min$$17$$, $value$$174$$, $unbound$$) {
  $options$$140_percentFill$$ = ($value$$174$$ - $min$$17$$) / ($options$$140_percentFill$$.max - $options$$140_percentFill$$.min);
  return $options$$140_percentFill$$ = $unbound$$ ? $options$$140_percentFill$$ : window.Math.min(window.Math.max(0, $options$$140_percentFill$$), 1)
};
D.$DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($gauge$$26_metricValue$$) {
  var $options$$141$$ = $gauge$$26_metricValue$$.$getOptions$(), $threshold$$6_thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$26_metricValue$$), $threshold$$6_thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$26_metricValue$$, $threshold$$6_thresholdIndex$$);
  $gauge$$26_metricValue$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$141$$.value, $gauge$$26_metricValue$$);
  return $threshold$$6_thresholdIndex$$ && null != $threshold$$6_thresholdIndex$$.shortDesc ? $threshold$$6_thresholdIndex$$.shortDesc : null != $options$$141$$.shortDesc ? $options$$141$$.shortDesc : $options$$141$$.title.text ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$options$$141$$.title.text, $gauge$$26_metricValue$$]) : $gauge$$26_metricValue$$
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$27_label$$55$$, $container$$103$$, $bounds$$87$$, $color$$53$$, $halign$$5$$, $valign$$2$$, $isRenderedByDefault_labelString$$4$$) {
  var $options$$142_size$$32$$ = $gauge$$27_label$$55$$.$getOptions$(), $minString$$1_rendered$$3$$ = !1;
  if("on" == $options$$142_size$$32$$.metricLabel.rendered || $isRenderedByDefault_labelString$$4$$ && "off" != $options$$142_size$$32$$.metricLabel.rendered) {
    $isRenderedByDefault_labelString$$4$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$142_size$$32$$.value, $gauge$$27_label$$55$$);
    var $minString$$1_rendered$$3$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$142_size$$32$$.min, $gauge$$27_label$$55$$), $maxString$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$142_size$$32$$.max, $gauge$$27_label$$55$$);
    $gauge$$27_label$$55$$ = new D.$DvtOutputText$$($gauge$$27_label$$55$$.$getCtx$(), $isRenderedByDefault_labelString$$4$$, $bounds$$87$$.x + $bounds$$87$$.$w$ / 2, $bounds$$87$$.y + $bounds$$87$$.$h$ / 2);
    $gauge$$27_label$$55$$.$setCSSStyle$($options$$142_size$$32$$.metricLabel.style);
    $options$$142_size$$32$$ = ($options$$142_size$$32$$ = $options$$142_size$$32$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($options$$142_size$$32$$) : null;
    $options$$142_size$$32$$ || ($options$$142_size$$32$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$isRenderedByDefault_labelString$$4$$, $minString$$1_rendered$$3$$, $maxString$$1$$], $gauge$$27_label$$55$$, $bounds$$87$$), $gauge$$27_label$$55$$.$setTextString$($isRenderedByDefault_labelString$$4$$), $gauge$$27_label$$55$$.$setFontSize$($options$$142_size$$32$$));
    "top" == $valign$$2$$ ? ($gauge$$27_label$$55$$.$setY$($bounds$$87$$.y), $gauge$$27_label$$55$$.$alignTop$()) : "middle" == $valign$$2$$ ? D.$DvtTextUtils$$.$centerTextVertically$($gauge$$27_label$$55$$, $bounds$$87$$.y + $bounds$$87$$.$h$ / 2) : "bottom" == $valign$$2$$ && ($gauge$$27_label$$55$$.$setY$($bounds$$87$$.y + $bounds$$87$$.$h$), $gauge$$27_label$$55$$.$alignBottom$());
    "center" == $halign$$5$$ ? $gauge$$27_label$$55$$.$alignCenter$() : "left" == $halign$$5$$ ? ($gauge$$27_label$$55$$.$setX$($bounds$$87$$.x), $gauge$$27_label$$55$$.$alignLeft$()) : "right" == $halign$$5$$ && ($gauge$$27_label$$55$$.$setX$($bounds$$87$$.x + $bounds$$87$$.$w$), $gauge$$27_label$$55$$.$alignRight$());
    null != $color$$53$$ && $gauge$$27_label$$55$$.$setSolidFill$($color$$53$$);
    $minString$$1_rendered$$3$$ = D.$DvtTextUtils$$.$fitText$($gauge$$27_label$$55$$, $bounds$$87$$.$w$, $bounds$$87$$.$h$, $container$$103$$)
  }
  return $minString$$1_rendered$$3$$
};
D.$DvtGaugeRenderer$$.$renderTitle$ = function $$DvtGaugeRenderer$$$$renderTitle$$($gauge$$28_textHeight$$2$$, $container$$104$$, $bounds$$88$$, $color$$54$$, $valign$$3$$) {
  var $options$$143_title$$11$$ = $gauge$$28_textHeight$$2$$.$getOptions$(), $rendered$$4_tempTitle_titleString$$ = !1;
  if(D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$143_title$$11$$)) {
    var $rendered$$4_tempTitle_titleString$$ = $options$$143_title$$11$$.title.text, $titleStyle$$ = $options$$143_title$$11$$.title.style, $options$$143_title$$11$$ = new D.$DvtMultilineText$$($gauge$$28_textHeight$$2$$.$getCtx$(), $rendered$$4_tempTitle_titleString$$), $fontStyle$$ = $titleStyle$$.$clone$();
    $options$$143_title$$11$$.$setCSSStyle$($titleStyle$$);
    var $size$$33$$ = $titleStyle$$.$getStyle$("font-size"), $size$$33$$ = $size$$33$$ ? (0,window.parseInt)($size$$33$$) : null;
    $size$$33$$ || ($rendered$$4_tempTitle_titleString$$ = new D.$DvtOutputText$$($gauge$$28_textHeight$$2$$.$getCtx$(), $rendered$$4_tempTitle_titleString$$, 0, 0), $rendered$$4_tempTitle_titleString$$.$setCSSStyle$($titleStyle$$), $size$$33$$ = $rendered$$4_tempTitle_titleString$$.$getOptimalFontSize$($bounds$$88$$), $fontStyle$$.$setFontSize$("font-size", $size$$33$$.toString()));
    null != $color$$54$$ && $fontStyle$$.$setStyle$("color", $color$$54$$);
    $options$$143_title$$11$$.$setCSSStyle$($fontStyle$$);
    $rendered$$4_tempTitle_titleString$$ = D.$DvtTextUtils$$.$fitText$($options$$143_title$$11$$, $bounds$$88$$.$w$, $bounds$$88$$.$h$, $gauge$$28_textHeight$$2$$);
    $gauge$$28_textHeight$$2$$ = D.$DvtTextUtils$$.$getTextHeight$($options$$143_title$$11$$);
    "top" == $valign$$3$$ ? $options$$143_title$$11$$.$setY$($bounds$$88$$.y) : "bottom" == $valign$$3$$ ? $options$$143_title$$11$$.$setY$($bounds$$88$$.y + $bounds$$88$$.$h$ - $gauge$$28_textHeight$$2$$) : $options$$143_title$$11$$.$setY$($bounds$$88$$.y + $bounds$$88$$.$h$ / 2 - $gauge$$28_textHeight$$2$$ / 2);
    $options$$143_title$$11$$.$setX$($bounds$$88$$.x + $bounds$$88$$.$w$ / 2);
    $options$$143_title$$11$$.$alignCenter$();
    $container$$104$$.$addChild$($options$$143_title$$11$$)
  }
  return $rendered$$4_tempTitle_titleString$$
};
D.$DvtGaugeRenderer$$.$calcLabelFontSize$ = function $$DvtGaugeRenderer$$$$calcLabelFontSize$$($labels$$20$$, $label$$56$$, $bounds$$89$$) {
  for(var $maxWidth$$22$$ = 0, $maxLabel$$ = null, $width$$91$$ = 0, $i$$617$$ = 0;$i$$617$$ < $labels$$20$$.length;$i$$617$$++) {
    $label$$56$$.$setTextString$($labels$$20$$[$i$$617$$]), $width$$91$$ = $label$$56$$.$measureDimensions$().$w$, $width$$91$$ > $maxWidth$$22$$ && ($maxLabel$$ = $labels$$20$$[$i$$617$$], $maxWidth$$22$$ = $width$$91$$)
  }
  $label$$56$$.$setTextString$($maxLabel$$);
  return $label$$56$$.$getOptimalFontSize$($bounds$$89$$)
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$144$$, $value$$175$$) {
  var $step$$3$$ = (0,window.Number)($options$$144$$.step);
  if($step$$3$$ && 0 < $step$$3$$) {
    var $stepNum$$ = ($value$$175$$ - $options$$144$$.min) / $step$$3$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$144$$.max, window.Math.round($stepNum$$) * $step$$3$$ + $options$$144$$.min), $options$$144$$.min) : $options$$144$$.min
  }
  return $value$$175$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$384$$, $callback$$109$$, $callbackObj$$60$$, $bStaticRendering$$1$$) {
  var $gauge$$34$$ = new D.$DvtLedGauge$$;
  $gauge$$34$$.Init($context$$384$$, $callback$$109$$, $callbackObj$$60$$, $bStaticRendering$$1$$);
  return $gauge$$34$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$385$$, $callback$$110$$, $callbackObj$$61$$, $bStaticRendering$$2$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$385$$, $callback$$110$$, $callbackObj$$61$$, $bStaticRendering$$2$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$151$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$151$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = !0
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$105$$, $width$$92$$, $height$$85$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$105$$, $width$$92$$, $height$$85$$)
};
D.$DvtLedGaugeDefaults$$ = function $$DvtLedGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtLedGaugeDefaults");
D.$DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"};
D.$DvtLedGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeRenderer$$, D.$DvtObj$$, "DvtLedGaugeRenderer");
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ = "M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 -20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 -11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 -9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 -0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 -2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ";
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$35$$, $container$$106$$, $labelColor$$2_width$$93$$, $bounds$$90_height$$86_labelBounds$$8$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$35$$)) {
    var $options$$152$$ = $gauge$$35$$.$getOptions$(), $bTitleRendered_outerGap$$1_titleValign$$ = $options$$152$$.__layout.outerGap, $size$$34_titleBounds_valign$$4$$ = $options$$152$$ && (0 <= $options$$152$$.size || 1 > $options$$152$$.size) ? window.Math.sqrt($options$$152$$.size) : 1;
    $bounds$$90_height$$86_labelBounds$$8$$ = new D.$DvtRectangle$$($bTitleRendered_outerGap$$1_titleValign$$ + ($labelColor$$2_width$$93$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * (1 - $size$$34_titleBounds_valign$$4$$) / 2, $bTitleRendered_outerGap$$1_titleValign$$ + ($bounds$$90_height$$86_labelBounds$$8$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * (1 - $size$$34_titleBounds_valign$$4$$) / 2, ($labelColor$$2_width$$93$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * $size$$34_titleBounds_valign$$4$$, 
    ($bounds$$90_height$$86_labelBounds$$8$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * $size$$34_titleBounds_valign$$4$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$35$$, $container$$106$$, $bounds$$90_height$$86_labelBounds$$8$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$35$$, $container$$106$$, $bounds$$90_height$$86_labelBounds$$8$$);
    $bTitleRendered_outerGap$$1_titleValign$$ = !1;
    $labelColor$$2_width$$93$$ = D.$DvtColorUtils$$.$getContrastingTextColor$(D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$35$$));
    D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$152$$) && ($bTitleRendered_outerGap$$1_titleValign$$ = "middle", $size$$34_titleBounds_valign$$4$$ = D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$35$$, $bounds$$90_height$$86_labelBounds$$8$$), "on" == $options$$152$$.metricLabel.rendered && ($size$$34_titleBounds_valign$$4$$.y += 0.6 * $size$$34_titleBounds_valign$$4$$.$h$, $size$$34_titleBounds_valign$$4$$.$h$ *= 0.4, $bTitleRendered_outerGap$$1_titleValign$$ = "top"), $bTitleRendered_outerGap$$1_titleValign$$ = 
    !0 !== D.$DvtAgent$_highContrast$$ && null != $options$$152$$.title.style.$getStyle$("color") ? D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$35$$, $container$$106$$, $size$$34_titleBounds_valign$$4$$, null, $bTitleRendered_outerGap$$1_titleValign$$) : D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$35$$, $container$$106$$, $size$$34_titleBounds_valign$$4$$, $labelColor$$2_width$$93$$, $bTitleRendered_outerGap$$1_titleValign$$));
    "on" == $options$$152$$.metricLabel.rendered && ($bounds$$90_height$$86_labelBounds$$8$$ = D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$35$$, $bounds$$90_height$$86_labelBounds$$8$$), $size$$34_titleBounds_valign$$4$$ = "middle", $bTitleRendered_outerGap$$1_titleValign$$ && ($bounds$$90_height$$86_labelBounds$$8$$.$h$ *= 0.55, $size$$34_titleBounds_valign$$4$$ = "bottom"), !0 !== D.$DvtAgent$_highContrast$$ && null != $options$$152$$.metricLabel.style.$getStyle$("color") ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$35$$, 
    $container$$106$$, $bounds$$90_height$$86_labelBounds$$8$$, null, "center", $size$$34_titleBounds_valign$$4$$) : D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$35$$, $container$$106$$, $bounds$$90_height$$86_labelBounds$$8$$, $labelColor$$2_width$$93$$, "center", $size$$34_titleBounds_valign$$4$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$35$$, $container$$106$$, new D.$DvtRectangle$$(0, 0, $labelColor$$2_width$$93$$, $bounds$$90_height$$86_labelBounds$$8$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$36$$, $container$$107$$, $bounds$$91$$) {
  var $arColors$$21_context$$386$$ = $gauge$$36$$.$getCtx$(), $options$$153$$ = $gauge$$36$$.$getOptions$(), $type$$220$$ = $options$$153$$.type, $color$$55_rotation$$2$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$36$$), $borderColor$$36$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$36$$), $cmds$$17_cx$$46_dim$$51_shape$$52$$ = $bounds$$91$$.x + $bounds$$91$$.$w$ / 2, $cy$$47_scaleTo100$$ = $bounds$$91$$.y + $bounds$$91$$.$h$ / 2, $r$$36$$ = window.Math.min($bounds$$91$$.$w$, $bounds$$91$$.$h$) / 
  2, $isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$36$$);
  D.$DvtLedGaugeRenderer$$.$_cache$ || (D.$DvtLedGaugeRenderer$$.$_cache$ = new D.$DvtCache$$(50));
  var $scale$$24$$ = window.Math.min($bounds$$91$$.$w$ / 100, $bounds$$91$$.$h$ / 100);
  "rectangle" == $type$$220$$ ? $cmds$$17_cx$$46_dim$$51_shape$$52$$ = new D.$DvtRect$$($arColors$$21_context$$386$$, $bounds$$91$$.x, $bounds$$91$$.y, $bounds$$91$$.$w$, $bounds$$91$$.$h$) : "diamond" == $type$$220$$ ? $cmds$$17_cx$$46_dim$$51_shape$$52$$ = new D.$DvtPolygon$$($arColors$$21_context$$386$$, [$cmds$$17_cx$$46_dim$$51_shape$$52$$ - $r$$36$$, $cy$$47_scaleTo100$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$, $cy$$47_scaleTo100$$ - $r$$36$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$ + $r$$36$$, 
  $cy$$47_scaleTo100$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$, $cy$$47_scaleTo100$$ + $r$$36$$]) : "circle" == $type$$220$$ ? $cmds$$17_cx$$46_dim$$51_shape$$52$$ = new D.$DvtCircle$$($arColors$$21_context$$386$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$, $cy$$47_scaleTo100$$, $r$$36$$) : ("star" == $type$$220$$ ? $cmds$$17_cx$$46_dim$$51_shape$$52$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $type$$220$$ ? $cmds$$17_cx$$46_dim$$51_shape$$52$$ = 
  $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $type$$220$$ ? $cmds$$17_cx$$46_dim$$51_shape$$52$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ : "human" == $type$$220$$ ? $cmds$$17_cx$$46_dim$$51_shape$$52$$ = D.$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ : ($cmds$$17_cx$$46_dim$$51_shape$$52$$ = D.$DvtLedGaugeRenderer$$.$_cache$.get($type$$220$$), 
  $cmds$$17_cx$$46_dim$$51_shape$$52$$ || ($cmds$$17_cx$$46_dim$$51_shape$$52$$ = new D.$DvtPath$$($arColors$$21_context$$386$$, $type$$220$$), $cmds$$17_cx$$46_dim$$51_shape$$52$$ = (0,D.$DvtDisplayableUtils$getDimForced$$)($arColors$$21_context$$386$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$), $cy$$47_scaleTo100$$ = 100 / window.Math.max($cmds$$17_cx$$46_dim$$51_shape$$52$$.$w$, $cmds$$17_cx$$46_dim$$51_shape$$52$$.$h$), $cmds$$17_cx$$46_dim$$51_shape$$52$$ = D.$DvtPathUtils$$.$transformPath$($type$$220$$, 
  -$cy$$47_scaleTo100$$ * ($cmds$$17_cx$$46_dim$$51_shape$$52$$.x + $cmds$$17_cx$$46_dim$$51_shape$$52$$.$w$ / 2), -$cy$$47_scaleTo100$$ * ($cmds$$17_cx$$46_dim$$51_shape$$52$$.y + $cmds$$17_cx$$46_dim$$51_shape$$52$$.$h$ / 2), $cy$$47_scaleTo100$$, $cy$$47_scaleTo100$$), D.$DvtLedGaugeRenderer$$.$_cache$.put($type$$220$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$))), !$isSkyros$$ && ("triangle" == $type$$220$$ || "arrow" == $type$$220$$) || "star" == $type$$220$$ ? ($cmds$$17_cx$$46_dim$$51_shape$$52$$ = 
  D.$DvtPolygonUtils$$.scale($cmds$$17_cx$$46_dim$$51_shape$$52$$, $scale$$24$$, $scale$$24$$), $cmds$$17_cx$$46_dim$$51_shape$$52$$ = D.$DvtPolygonUtils$$.translate($cmds$$17_cx$$46_dim$$51_shape$$52$$, $bounds$$91$$.x + $bounds$$91$$.$w$ / 2, $bounds$$91$$.y + $bounds$$91$$.$h$ / 2), $cmds$$17_cx$$46_dim$$51_shape$$52$$ = new D.$DvtPolygon$$($arColors$$21_context$$386$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$)) : ($cmds$$17_cx$$46_dim$$51_shape$$52$$ = D.$DvtPathUtils$$.$transformPath$($cmds$$17_cx$$46_dim$$51_shape$$52$$, 
  $bounds$$91$$.x + $bounds$$91$$.$w$ / 2, $bounds$$91$$.y + $bounds$$91$$.$h$ / 2, $scale$$24$$, $scale$$24$$), $cmds$$17_cx$$46_dim$$51_shape$$52$$ = new D.$DvtPath$$($arColors$$21_context$$386$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$)));
  $isSkyros$$ || "none" == $options$$153$$.visualEffects ? $cmds$$17_cx$$46_dim$$51_shape$$52$$.$setSolidFill$($color$$55_rotation$$2$$) : ($arColors$$21_context$$386$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$55_rotation$$2$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$55_rotation$$2$$, -0.04, -0.05)], $color$$55_rotation$$2$$ = $options$$153$$ && 0 == $options$$153$$.rotation % 90 ? $options$$153$$.rotation : 0, $cmds$$17_cx$$46_dim$$51_shape$$52$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == 
  $type$$220$$ || "star" == $type$$220$$ || "triangle" == $type$$220$$ ? $color$$55_rotation$$2$$ - 90 : 270, $arColors$$21_context$$386$$, [1, 1], [0, 1])));
  $borderColor$$36$$ && $cmds$$17_cx$$46_dim$$51_shape$$52$$.$setSolidStroke$($borderColor$$36$$);
  if(($color$$55_rotation$$2$$ = $isSkyros$$ ? $options$$153$$.rotation + 90 : $options$$153$$.rotation) && ("arrow" == $type$$220$$ || "triangle" == $type$$220$$ || $cmds$$17_cx$$46_dim$$51_shape$$52$$ instanceof D.$DvtPath$$ && "human" != $type$$220$$)) {
    $cmds$$17_cx$$46_dim$$51_shape$$52$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$36$$, $container$$107$$, $cmds$$17_cx$$46_dim$$51_shape$$52$$, $bounds$$91$$)
  }
  $container$$107$$.$addChild$($cmds$$17_cx$$46_dim$$51_shape$$52$$)
};
D.$DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($gauge$$37_translateGroup$$, $container$$108_groupDims_matrix$$16_rotation$$3$$, $shape$$53_tx$$24$$, $bounds$$92_ty$$25$$) {
  var $options$$154_rotationMatrix$$2$$ = $gauge$$37_translateGroup$$.$getOptions$();
  $gauge$$37_translateGroup$$ = new D.$DvtContainer$$($gauge$$37_translateGroup$$.$getCtx$());
  $container$$108_groupDims_matrix$$16_rotation$$3$$.$addChild$($gauge$$37_translateGroup$$);
  $gauge$$37_translateGroup$$.$addChild$($shape$$53_tx$$24$$);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = $options$$154_rotationMatrix$$2$$ && 0 == $options$$154_rotationMatrix$$2$$.rotation % 90 ? $options$$154_rotationMatrix$$2$$.rotation : 0;
  $options$$154_rotationMatrix$$2$$ = new D.$DvtMatrix$$;
  $options$$154_rotationMatrix$$2$$.rotate(window.Math.PI * $container$$108_groupDims_matrix$$16_rotation$$3$$ / 180);
  $shape$$53_tx$$24$$.$setMatrix$($options$$154_rotationMatrix$$2$$);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = $gauge$$37_translateGroup$$.$getDimensions$();
  $shape$$53_tx$$24$$ = $bounds$$92_ty$$25$$.x + $bounds$$92_ty$$25$$.$w$ / 2 - ($container$$108_groupDims_matrix$$16_rotation$$3$$.x + $container$$108_groupDims_matrix$$16_rotation$$3$$.$w$ / 2);
  $bounds$$92_ty$$25$$ = $bounds$$92_ty$$25$$.y + $bounds$$92_ty$$25$$.$h$ / 2 - ($container$$108_groupDims_matrix$$16_rotation$$3$$.y + $container$$108_groupDims_matrix$$16_rotation$$3$$.$h$ / 2);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = new D.$DvtMatrix$$;
  $container$$108_groupDims_matrix$$16_rotation$$3$$.translate($shape$$53_tx$$24$$, $bounds$$92_ty$$25$$);
  $gauge$$37_translateGroup$$.$setMatrix$($container$$108_groupDims_matrix$$16_rotation$$3$$);
  return $gauge$$37_translateGroup$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$38$$, $container$$109$$, $bounds$$93$$) {
  var $options$$155$$ = $gauge$$38$$.$getOptions$(), $type$$221$$ = $options$$155$$.type;
  "none" != $options$$155$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$38$$) && ("circle" == $type$$221$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$38$$, $container$$109$$, $bounds$$93$$) : "diamond" == $type$$221$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$38$$, $container$$109$$, $bounds$$93$$) : "triangle" == $type$$221$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$38$$, $container$$109$$, $bounds$$93$$) : "arrow" == $type$$221$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$38$$, $container$$109$$, $bounds$$93$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$38$$, $container$$109$$, $bounds$$93$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$39_overlay$$9$$, $container$$110_gradient$$7$$, $bounds$$94_overlayBounds$$1$$) {
  var $dx$$20$$ = 0.04 * $bounds$$94_overlayBounds$$1$$.$w$, $dy$$23$$ = 0.04 * $bounds$$94_overlayBounds$$1$$.$h$;
  $bounds$$94_overlayBounds$$1$$ = new D.$DvtRectangle$$($bounds$$94_overlayBounds$$1$$.x + $dx$$20$$, $bounds$$94_overlayBounds$$1$$.y + $dy$$23$$, $bounds$$94_overlayBounds$$1$$.$w$ - 2 * $dx$$20$$, $bounds$$94_overlayBounds$$1$$.$h$ - 2 * $dy$$23$$);
  $gauge$$39_overlay$$9$$ = new D.$DvtRect$$($gauge$$39_overlay$$9$$.$getCtx$(), $bounds$$94_overlayBounds$$1$$.x, $bounds$$94_overlayBounds$$1$$.y, $bounds$$94_overlayBounds$$1$$.$w$, $bounds$$94_overlayBounds$$1$$.$h$);
  $gauge$$39_overlay$$9$$.$setMouseEnabled$(!1);
  $container$$110_gradient$$7$$.$addChild$($gauge$$39_overlay$$9$$);
  $container$$110_gradient$$7$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$39_overlay$$9$$.$setFill$($container$$110_gradient$$7$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$40_overlay$$10$$, $container$$111_gradient$$8$$, $bounds$$95_cx$$47$$) {
  var $cy$$48_dx$$21$$ = 0.05 * $bounds$$95_cx$$47$$.$w$, $dy$$24_overlayBounds$$2_r$$37$$ = 0.05 * $bounds$$95_cx$$47$$.$h$, $dy$$24_overlayBounds$$2_r$$37$$ = new D.$DvtRectangle$$($bounds$$95_cx$$47$$.x + $cy$$48_dx$$21$$, $bounds$$95_cx$$47$$.y + $dy$$24_overlayBounds$$2_r$$37$$, $bounds$$95_cx$$47$$.$w$ - 2 * $cy$$48_dx$$21$$, $bounds$$95_cx$$47$$.$h$ - 2 * $dy$$24_overlayBounds$$2_r$$37$$);
  $bounds$$95_cx$$47$$ = $dy$$24_overlayBounds$$2_r$$37$$.x + $dy$$24_overlayBounds$$2_r$$37$$.$w$ / 2;
  $cy$$48_dx$$21$$ = $dy$$24_overlayBounds$$2_r$$37$$.y + $dy$$24_overlayBounds$$2_r$$37$$.$h$ / 2;
  $dy$$24_overlayBounds$$2_r$$37$$ = window.Math.min($dy$$24_overlayBounds$$2_r$$37$$.$w$, $dy$$24_overlayBounds$$2_r$$37$$.$h$) / 2;
  $gauge$$40_overlay$$10$$ = new D.$DvtPolygon$$($gauge$$40_overlay$$10$$.$getCtx$(), [$bounds$$95_cx$$47$$ - $dy$$24_overlayBounds$$2_r$$37$$, $cy$$48_dx$$21$$, $bounds$$95_cx$$47$$, $cy$$48_dx$$21$$ - $dy$$24_overlayBounds$$2_r$$37$$, $bounds$$95_cx$$47$$ + $dy$$24_overlayBounds$$2_r$$37$$, $cy$$48_dx$$21$$, $bounds$$95_cx$$47$$, $cy$$48_dx$$21$$ + $dy$$24_overlayBounds$$2_r$$37$$]);
  $gauge$$40_overlay$$10$$.$setMouseEnabled$(!1);
  $container$$111_gradient$$8$$.$addChild$($gauge$$40_overlay$$10$$);
  $container$$111_gradient$$8$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$40_overlay$$10$$.$setFill$($container$$111_gradient$$8$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$41$$, $container$$112$$, $bounds$$96_overlay$$11$$) {
  var $dx$$22_overlayBounds$$3$$ = 0.05 * $bounds$$96_overlay$$11$$.$w$, $cmds$$18_dy$$25_options$$156_rotation$$4$$ = 0.05 * $bounds$$96_overlay$$11$$.$h$, $gradient$$9_isSkyros$$1$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$41$$), $dx$$22_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$96_overlay$$11$$.x + $dx$$22_overlayBounds$$3$$, $bounds$$96_overlay$$11$$.y + $cmds$$18_dy$$25_options$$156_rotation$$4$$, $bounds$$96_overlay$$11$$.$w$ - 2 * $dx$$22_overlayBounds$$3$$, $bounds$$96_overlay$$11$$.$h$ - 
  2 * $cmds$$18_dy$$25_options$$156_rotation$$4$$), $cmds$$18_dy$$25_options$$156_rotation$$4$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $scale$$25$$ = window.Math.min($dx$$22_overlayBounds$$3$$.$w$ / 100, $dx$$22_overlayBounds$$3$$.$h$ / 100), $cmds$$18_dy$$25_options$$156_rotation$$4$$ = D.$DvtPolygonUtils$$.scale($cmds$$18_dy$$25_options$$156_rotation$$4$$, $scale$$25$$, $scale$$25$$), $cmds$$18_dy$$25_options$$156_rotation$$4$$ = D.$DvtPolygonUtils$$.translate($cmds$$18_dy$$25_options$$156_rotation$$4$$, 
  $bounds$$96_overlay$$11$$.x + $bounds$$96_overlay$$11$$.$w$ / 2, $bounds$$96_overlay$$11$$.y + $bounds$$96_overlay$$11$$.$h$ / 2);
  $bounds$$96_overlay$$11$$ = new D.$DvtPolygon$$($gauge$$41$$.$getCtx$(), $cmds$$18_dy$$25_options$$156_rotation$$4$$);
  $cmds$$18_dy$$25_options$$156_rotation$$4$$ = ($cmds$$18_dy$$25_options$$156_rotation$$4$$ = $gauge$$41$$.$getOptions$()) && 0 == $cmds$$18_dy$$25_options$$156_rotation$$4$$.rotation % 90 ? $cmds$$18_dy$$25_options$$156_rotation$$4$$.rotation : 0;
  $gradient$$9_isSkyros$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$9_isSkyros$$1$$ ? $cmds$$18_dy$$25_options$$156_rotation$$4$$ - 90 : 360 - $cmds$$18_dy$$25_options$$156_rotation$$4$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$96_overlay$$11$$.$setFill$($gradient$$9_isSkyros$$1$$);
  $bounds$$96_overlay$$11$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$41$$, $container$$112$$, $bounds$$96_overlay$$11$$, $dx$$22_overlayBounds$$3$$);
  $bounds$$96_overlay$$11$$.$setMouseEnabled$(!1);
  $container$$112$$.$addChild$($bounds$$96_overlay$$11$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$42$$, $container$$113$$, $bounds$$97_overlay$$12$$) {
  var $dx$$23_overlayBounds$$4$$ = 0.05 * $bounds$$97_overlay$$12$$.$w$, $cmds$$19_dy$$26_options$$157_rotation$$5$$ = 0.05 * $bounds$$97_overlay$$12$$.$h$, $gradient$$10_isSkyros$$2$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$42$$), $dx$$23_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$97_overlay$$12$$.x + $dx$$23_overlayBounds$$4$$, $bounds$$97_overlay$$12$$.y + $cmds$$19_dy$$26_options$$157_rotation$$5$$, $bounds$$97_overlay$$12$$.$w$ - 2 * $dx$$23_overlayBounds$$4$$, $bounds$$97_overlay$$12$$.$h$ - 
  2 * $cmds$$19_dy$$26_options$$157_rotation$$5$$), $cmds$$19_dy$$26_options$$157_rotation$$5$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $scale$$26$$ = window.Math.min($dx$$23_overlayBounds$$4$$.$w$ / 100, $dx$$23_overlayBounds$$4$$.$h$ / 100), $cmds$$19_dy$$26_options$$157_rotation$$5$$ = D.$DvtPolygonUtils$$.scale($cmds$$19_dy$$26_options$$157_rotation$$5$$, $scale$$26$$, $scale$$26$$), $cmds$$19_dy$$26_options$$157_rotation$$5$$ = D.$DvtPolygonUtils$$.translate($cmds$$19_dy$$26_options$$157_rotation$$5$$, 
  $bounds$$97_overlay$$12$$.x + $bounds$$97_overlay$$12$$.$w$ / 2, $bounds$$97_overlay$$12$$.y + $bounds$$97_overlay$$12$$.$h$ / 2);
  $bounds$$97_overlay$$12$$ = new D.$DvtPolygon$$($gauge$$42$$.$getCtx$(), $cmds$$19_dy$$26_options$$157_rotation$$5$$);
  $cmds$$19_dy$$26_options$$157_rotation$$5$$ = ($cmds$$19_dy$$26_options$$157_rotation$$5$$ = $gauge$$42$$.$getOptions$()) && 0 == $cmds$$19_dy$$26_options$$157_rotation$$5$$.rotation % 90 ? $cmds$$19_dy$$26_options$$157_rotation$$5$$.rotation : 0;
  $gradient$$10_isSkyros$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$10_isSkyros$$2$$ ? $cmds$$19_dy$$26_options$$157_rotation$$5$$ - 90 : 360 - $cmds$$19_dy$$26_options$$157_rotation$$5$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$97_overlay$$12$$.$setFill$($gradient$$10_isSkyros$$2$$);
  $bounds$$97_overlay$$12$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$42$$, $container$$113$$, $bounds$$97_overlay$$12$$, $dx$$23_overlayBounds$$4$$);
  $bounds$$97_overlay$$12$$.$setMouseEnabled$(!1);
  $container$$113$$.$addChild$($bounds$$97_overlay$$12$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$43_highlight$$, $container$$114_highlightGradient$$, $bounds$$98_gradientBounds$$) {
  var $cx$$48_dx$$24$$ = 0.05 * $bounds$$98_gradientBounds$$.$w$, $cy$$49_dy$$27$$ = 0.05 * $bounds$$98_gradientBounds$$.$h$;
  $bounds$$98_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$98_gradientBounds$$.x + $cx$$48_dx$$24$$, $bounds$$98_gradientBounds$$.y + $cy$$49_dy$$27$$, $bounds$$98_gradientBounds$$.$w$ - 2 * $cx$$48_dx$$24$$, $bounds$$98_gradientBounds$$.$h$ - 2 * $cy$$49_dy$$27$$);
  var $cx$$48_dx$$24$$ = $bounds$$98_gradientBounds$$.x + $bounds$$98_gradientBounds$$.$w$ / 2, $cy$$49_dy$$27$$ = $bounds$$98_gradientBounds$$.y + $bounds$$98_gradientBounds$$.$h$ / 2, $radius$$18_ry$$24$$ = window.Math.min($bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$) / 2, $overlay$$13_rx$$28$$ = new D.$DvtCircle$$($gauge$$43_highlight$$.$getCtx$(), $cx$$48_dx$$24$$, $cy$$49_dy$$27$$, $radius$$18_ry$$24$$);
  $overlay$$13_rx$$28$$.$setMouseEnabled$(!1);
  $container$$114_highlightGradient$$.$addChild$($overlay$$13_rx$$28$$);
  var $gradient$$11$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$48_dx$$24$$, $cy$$49_dy$$27$$ - 0.6 * $radius$$18_ry$$24$$, 1.5 * $radius$$18_ry$$24$$, [$bounds$$98_gradientBounds$$.x, $bounds$$98_gradientBounds$$.y, $bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$]);
  $overlay$$13_rx$$28$$.$setFill$($gradient$$11$$);
  $overlay$$13_rx$$28$$ = 0.6 * $radius$$18_ry$$24$$;
  $radius$$18_ry$$24$$ *= 0.4;
  $cy$$49_dy$$27$$ -= 0.3 * $radius$$18_ry$$24$$;
  $gauge$$43_highlight$$ = new D.$DvtOval$$($gauge$$43_highlight$$.$getCtx$(), $cx$$48_dx$$24$$, $cy$$49_dy$$27$$ - $radius$$18_ry$$24$$, $overlay$$13_rx$$28$$, $radius$$18_ry$$24$$);
  $gauge$$43_highlight$$.$setMouseEnabled$(!1);
  $container$$114_highlightGradient$$.$addChild$($gauge$$43_highlight$$);
  $container$$114_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$48_dx$$24$$, $cy$$49_dy$$27$$, $overlay$$13_rx$$28$$, [$bounds$$98_gradientBounds$$.x, $bounds$$98_gradientBounds$$.y, $bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$]);
  $gauge$$43_highlight$$.$setFill$($container$$114_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$44$$, $bounds$$99$$) {
  var $options$$158_rotation$$6$$ = $gauge$$44$$.$getOptions$(), $type$$222$$ = $options$$158_rotation$$6$$.type, $options$$158_rotation$$6$$ = 0 == $options$$158_rotation$$6$$.rotation % 90 ? $options$$158_rotation$$6$$.rotation : 0, $minDim$$ = window.Math.min($bounds$$99$$.$w$, $bounds$$99$$.$h$), $newX$$6$$ = $bounds$$99$$.x + $bounds$$99$$.$w$ / 2 - $minDim$$ / 2, $newY$$7$$ = $bounds$$99$$.y + $bounds$$99$$.$h$ / 2 - $minDim$$ / 2, $newWidth$$5$$ = $minDim$$, $newHeight$$4$$ = $minDim$$;
  "triangle" == $type$$222$$ ? 0 == $options$$158_rotation$$6$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.25 * $minDim$$, $newWidth$$5$$ -= 0.4 * $minDim$$, $newHeight$$4$$ -= 0.3 * $minDim$$) : 90 == $options$$158_rotation$$6$$ ? ($newX$$6$$ += 0.05 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$5$$ -= 0.3 * $minDim$$, $newHeight$$4$$ -= 0.4 * $minDim$$) : 180 == $options$$158_rotation$$6$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.05 * $minDim$$, $newWidth$$5$$ -= 0.4 * 
  $minDim$$, $newHeight$$4$$ -= 0.3 * $minDim$$) : 270 == $options$$158_rotation$$6$$ && ($newX$$6$$ += 0.25 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$5$$ -= 0.3 * $minDim$$, $newHeight$$4$$ -= 0.4 * $minDim$$) : "arrow" == $type$$222$$ ? 0 == $options$$158_rotation$$6$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$5$$ -= 0.4 * $minDim$$, $newHeight$$4$$ -= 0.4 * $minDim$$) : 90 == $options$$158_rotation$$6$$ ? ($newX$$6$$ += 0.05 * $minDim$$, $newY$$7$$ += 
  0.2 * $minDim$$, $newWidth$$5$$ -= 0.28 * $minDim$$, $newHeight$$4$$ -= 0.4 * $minDim$$) : 180 == $options$$158_rotation$$6$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$5$$ -= 0.4 * $minDim$$, $newHeight$$4$$ -= 0.4 * $minDim$$) : 270 == $options$$158_rotation$$6$$ && ($newX$$6$$ += 0.23 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$5$$ -= 0.28 * $minDim$$, $newHeight$$4$$ -= 0.4 * $minDim$$) : "star" == $type$$222$$ ? ($newX$$6$$ += 0.25 * $minDim$$, $newY$$7$$ += 
  0.25 * $minDim$$, $newWidth$$5$$ -= 0.5 * $minDim$$, $newHeight$$4$$ -= 0.4 * $minDim$$) : "diamond" == $type$$222$$ ? ($newX$$6$$ += 0.15 * $minDim$$, $newY$$7$$ += 0.15 * $minDim$$, $newWidth$$5$$ -= 0.3 * $minDim$$, $newHeight$$4$$ -= 0.3 * $minDim$$) : "rectangle" == $type$$222$$ ? ($newX$$6$$ += 0.1 * $minDim$$, $newY$$7$$ += 0.1 * $minDim$$, $newWidth$$5$$ -= 0.2 * $minDim$$, $newHeight$$4$$ -= 0.2 * $minDim$$) : ($newX$$6$$ += 0.15 * $minDim$$, $newY$$7$$ += 0.15 * $minDim$$, $newWidth$$5$$ -= 
  0.3 * $minDim$$, $newHeight$$4$$ -= 0.3 * $minDim$$);
  return new D.$DvtRectangle$$($newX$$6$$, $newY$$7$$, $newWidth$$5$$, $newHeight$$4$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$$.newInstance = function $$DvtStatusMeterGauge$$$newInstance$($context$$390$$, $callback$$113$$, $callbackObj$$64$$) {
  var $gauge$$50$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$50$$.Init($context$$390$$, $callback$$113$$, $callbackObj$$64$$);
  return $gauge$$50$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$391$$, $callback$$114$$, $callbackObj$$65$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$391$$, $callback$$114$$, $callbackObj$$65$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = null
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$163$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$163$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$120$$, $width$$96$$, $height$$89$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$120$$, $width$$96$$, $height$$89$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$60$$, $animatedObjs$$2_animationType$$3$$, $animationDuration$$7$$) {
  $animatedObjs$$2_animationType$$3$$ = [];
  for(var $i$$619$$ = 0;$i$$619$$ < $objs$$60$$.length;$i$$619$$++) {
    var $obj$$292$$ = $objs$$60$$[$i$$619$$], $endState$$15$$ = $obj$$292$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation ? $obj$$292$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[0], $endState$$15$$[2], $endState$$15$$[3]]) : "vertical" == this.$Options$.orientation ? $obj$$292$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], $endState$$15$$[3], $endState$$15$$[3]]) : "circular" == this.$Options$.orientation && $obj$$292$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], 0, $endState$$15$$[3], $endState$$15$$[4]]);
    var $animation$$3$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $obj$$292$$, $animationDuration$$7$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$3$$.$_animator$, "typeNumberArray", $obj$$292$$, $obj$$292$$.$getAnimationParams$, $obj$$292$$.$setAnimationParams$, $endState$$15$$);
    $animation$$3$$.$_animator$.$setEasing$(function($objs$$60$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$60$$, 0.7)
    });
    $animatedObjs$$2_animationType$$3$$.push($animation$$3$$)
  }
  return new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs$$2_animationType$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$210$$, $y$$184$$) {
  var $maxValue$$13_options$$164$$ = this.$Options$, $angle$$42_isRTL$$25$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$());
  if("horizontal" == $maxValue$$13_options$$164$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$210$$)
  }
  if("vertical" == $maxValue$$13_options$$164$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$184$$)
  }
  if("circular" == $maxValue$$13_options$$164$$.orientation) {
    var $angleExtent$$9$$ = $maxValue$$13_options$$164$$.angleExtent, $angleRads$$11_minValue$$13_value$$178$$ = window.Math.atan2($y$$184$$ - this.$cy$, $x$$210$$ - this.$cx$), $angle$$42_isRTL$$25$$ = $angle$$42_isRTL$$25$$ ? 180 - (D.$DvtMath$$.$radsToDegrees$($angleRads$$11_minValue$$13_value$$178$$) - $maxValue$$13_options$$164$$.startAngle) : D.$DvtMath$$.$radsToDegrees$($angleRads$$11_minValue$$13_value$$178$$) - (360 - $maxValue$$13_options$$164$$.startAngle), $angle$$42_isRTL$$25$$ = ($angle$$42_isRTL$$25$$ + 
    720) % 360, $angleRads$$11_minValue$$13_value$$178$$ = $maxValue$$13_options$$164$$.min, $maxValue$$13_options$$164$$ = $maxValue$$13_options$$164$$.max, $angleRads$$11_minValue$$13_value$$178$$ = $angle$$42_isRTL$$25$$ / $angleExtent$$9$$ * ($maxValue$$13_options$$164$$ - $angleRads$$11_minValue$$13_value$$178$$) + $angleRads$$11_minValue$$13_value$$178$$;
    $angle$$42_isRTL$$25$$ > $angleExtent$$9$$ && ($angleRads$$11_minValue$$13_value$$178$$ = 0.5 < ($angle$$42_isRTL$$25$$ - $angleExtent$$9$$) / (360 - $angleExtent$$9$$) ? 0 : $maxValue$$13_options$$164$$);
    return $angleRads$$11_minValue$$13_value$$178$$
  }
};
D.$DvtStatusMeterGaugeDefaults$$ = function $$DvtStatusMeterGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtStatusMeterGaugeDefaults");
D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#E4E8EA"}};
D.$DvtStatusMeterGaugeDefaults$VERSION_1$$ = {angleExtent:360, borderRadius:"auto", color:"#313842", indicatorSize:1, innerRadius:0.7, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), position:"auto"}, orientation:"horizontal", plotArea:{color:"#AAAAAA", rendered:"auto", borderRadius:"auto"}, startAngle:90, thresholdDisplay:"onIndicator"};
D.$DvtStatusMeterGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeRenderer$$, D.$DvtObj$$, "DvtStatusMeterGaugeRenderer");
D.$DvtStatusMeterGaugeRenderer$$.$_MIN_CORNER_RADIUS$ = 2.5;
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$53$$, $container$$121$$, $bounds$$104_width$$98$$, $height$$91$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$53$$)) {
    var $options$$166$$ = $gauge$$53$$.$getOptions$(), $outerGap$$3$$ = $options$$166$$.__layout.outerGap;
    $bounds$$104_width$$98$$ = new D.$DvtRectangle$$($outerGap$$3$$, $outerGap$$3$$, $bounds$$104_width$$98$$ - 2 * $outerGap$$3$$, $height$$91$$ - 2 * $outerGap$$3$$);
    "horizontal" == $options$$166$$.orientation || "vertical" == $options$$166$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$166$$) && D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$($gauge$$53$$, $container$$121$$, $bounds$$104_width$$98$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$53$$, $container$$121$$, $bounds$$104_width$$98$$)) : "circular" == $options$$166$$.orientation && D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$($gauge$$53$$, 
    $container$$121$$, $bounds$$104_width$$98$$)
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$53$$, $container$$121$$, new D.$DvtRectangle$$(0, 0, $bounds$$104_width$$98$$, $height$$91$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularGauge$$($gauge$$54$$, $container$$122$$, $bounds$$105$$) {
  var $options$$167$$ = $gauge$$54$$.$getOptions$(), $innerRadiusLength_isRTL$$26_referenceLineWidth$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$54$$.$getCtx$()), $angleExtent$$13_max$$19_percentFill$$1$$ = 0, $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ = null, $angle$$43_value$$179$$ = $options$$167$$.value, $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$ = $options$$167$$.innerRadius, $plotAreaColor_referenceLineColor_thresholds$$3$$ = $options$$167$$.thresholds, $i$$620_maxDiameter$$ = 
  null, $startAngleRads$$1$$ = D.$DvtMath$$.$TWO_PI$ - D.$DvtMath$$.$degreesToRads$($options$$167$$.startAngle), $angleExtentRads$$2$$ = D.$DvtMath$$.$degreesToRads$($options$$167$$.angleExtent), $endAngle$$4_outerRadius$$3_referenceLineStyle$$ = ($startAngleRads$$1$$ + $angleExtentRads$$2$$) % (2 * window.Math.PI);
  $gauge$$54$$.$cx$ = $bounds$$105$$.$w$ / 2;
  $gauge$$54$$.$cy$ = $bounds$$105$$.$h$ / 2;
  $angleExtentRads$$2$$ != 2 * window.Math.PI && ($labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$($gauge$$54$$, $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $endAngle$$4_outerRadius$$3_referenceLineStyle$$, $bounds$$105$$, $innerRadiusLength_isRTL$$26_referenceLineWidth$$));
  var $i$$620_maxDiameter$$ = $i$$620_maxDiameter$$ ? $i$$620_maxDiameter$$ : window.Math.min($bounds$$105$$.$w$, $bounds$$105$$.$h$), $innerRadiusLength_isRTL$$26_referenceLineWidth$$ = 0.5 * $i$$620_maxDiameter$$ * $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$, $endAngle$$4_outerRadius$$3_referenceLineStyle$$ = 0.5 * $i$$620_maxDiameter$$, $indicatorSize$$ = $options$$167$$.indicatorSize;
  if($indicatorSize$$ && 1 < $indicatorSize$$) {
    var $labelValign_spaceWidth_startAngle$$16$$ = (1 - 1 / $indicatorSize$$) / 2 * ($endAngle$$4_outerRadius$$3_referenceLineStyle$$ - $innerRadiusLength_isRTL$$26_referenceLineWidth$$), $innerRadiusLength_isRTL$$26_referenceLineWidth$$ = $innerRadiusLength_isRTL$$26_referenceLineWidth$$ + $labelValign_spaceWidth_startAngle$$16$$, $endAngle$$4_outerRadius$$3_referenceLineStyle$$ = $endAngle$$4_outerRadius$$3_referenceLineStyle$$ - $labelValign_spaceWidth_startAngle$$16$$
  }
  $labelValign_spaceWidth_startAngle$$16$$ = "middle";
  $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ || ($labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ = window.Math.min($bounds$$105$$.$w$, $bounds$$105$$.$h$) * $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$, $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$ ? $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$ * window.Math.min($bounds$$105$$.$w$, $bounds$$105$$.$h$) : window.Math.min($bounds$$105$$.$w$, $bounds$$105$$.$h$), $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ = 
  new D.$DvtRectangle$$($bounds$$105$$.x + $bounds$$105$$.$w$ / 2 - $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ * (3 / 7), $bounds$$105$$.y + $bounds$$105$$.$h$ / 2 - $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ * (2.5 / 7), $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ * (6 / 7), $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ * (5 / 7)));
  var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = !1;
  if(D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$167$$)) {
    var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "middle", $thresholdColor_titleSpace$$3$$ = new D.$DvtRectangle$$($labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$.x, $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$.y, $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$.$w$, $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$.$h$);
    "off" != $options$$167$$.metricLabel.rendered && ($thresholdColor_titleSpace$$3$$.y += 0.6 * $thresholdColor_titleSpace$$3$$.$h$, $thresholdColor_titleSpace$$3$$.$h$ *= 0.4, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "top");
    if(($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$54$$, $container$$122$$, $thresholdColor_titleSpace$$3$$, null, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$)) && "off" != $options$$167$$.metricLabel.rendered) {
      $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$.$h$ *= 0.55, $labelValign_spaceWidth_startAngle$$16$$ = "bottom"
    }
  }
  D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$54$$, $container$$122$$, $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$, null, "center", $labelValign_spaceWidth_startAngle$$16$$, !0);
  $labelValign_spaceWidth_startAngle$$16$$ = $startAngleRads$$1$$;
  $angleExtent$$13_max$$19_percentFill$$1$$ *= $angleExtentRads$$2$$;
  $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($gauge$$54$$);
  if($plotAreaColor_referenceLineColor_thresholds$$3$$ && "off" != $options$$167$$.plotArea.rendered && "all" == $options$$167$$.thresholdDisplay) {
    for($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = 0;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ < $plotAreaColor_referenceLineColor_thresholds$$3$$.length;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$++) {
      var $thresholdColor_titleSpace$$3$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$54$$, $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$], $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$), $angleExtent$$13_max$$19_percentFill$$1$$ = $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max < $options$$167$$.max ? $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max : 
      $options$$167$$.max, $min$$18_thresholdborderColor$$ = 0 == $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ ? $options$$167$$.min : $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ - 1].max, $labelValign_spaceWidth_startAngle$$16$$ = $startAngleRads$$1$$ + $angleExtentRads$$2$$ * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$167$$, $options$$167$$.min, $min$$18_thresholdborderColor$$), $angleExtent$$13_max$$19_percentFill$$1$$ = 
      D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$167$$, $min$$18_thresholdborderColor$$, $angleExtent$$13_max$$19_percentFill$$1$$), $angleExtent$$13_max$$19_percentFill$$1$$ = $angleExtent$$13_max$$19_percentFill$$1$$ * $angleExtentRads$$2$$, $min$$18_thresholdborderColor$$ = $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].borderColor;
      D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$54$$, $container$$122$$, $bounds$$105$$, $labelValign_spaceWidth_startAngle$$16$$, $angleExtent$$13_max$$19_percentFill$$1$$, $innerRadiusLength_isRTL$$26_referenceLineWidth$$, $endAngle$$4_outerRadius$$3_referenceLineStyle$$, $thresholdColor_titleSpace$$3$$, !0, $min$$18_thresholdborderColor$$ ? $min$$18_thresholdborderColor$$ : $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$)
    }
  }else {
    "off" != $options$$167$$.plotArea.rendered && "all" != $options$$167$$.thresholdDisplay && ($plotAreaColor_referenceLineColor_thresholds$$3$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$54$$), D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$54$$, $container$$122$$, $bounds$$105$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$26_referenceLineWidth$$, $endAngle$$4_outerRadius$$3_referenceLineStyle$$, $plotAreaColor_referenceLineColor_thresholds$$3$$, 
    !0, $labelBounds$$9_maxInnerDiameter_plotAreaBorderColor$$1$$))
  }
  $innerRadiusLength_isRTL$$26_referenceLineWidth$$ = 0.5 * $i$$620_maxDiameter$$ * $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$;
  $endAngle$$4_outerRadius$$3_referenceLineStyle$$ = 0.5 * $i$$620_maxDiameter$$;
  $indicatorSize$$ && 1 > $indicatorSize$$ && ($innerRadius$$4_referenceObjects$$1_totalWidth$$5$$ = (1 - $indicatorSize$$) / 2 * ($endAngle$$4_outerRadius$$3_referenceLineStyle$$ - $innerRadiusLength_isRTL$$26_referenceLineWidth$$), $innerRadiusLength_isRTL$$26_referenceLineWidth$$ += $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$, $endAngle$$4_outerRadius$$3_referenceLineStyle$$ -= $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$);
  $angleExtent$$13_max$$19_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$167$$, $options$$167$$.min, $angle$$43_value$$179$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$54$$, $container$$122$$, $bounds$$105$$, $startAngleRads$$1$$, $angleExtent$$13_max$$19_percentFill$$1$$ * $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$26_referenceLineWidth$$, $endAngle$$4_outerRadius$$3_referenceLineStyle$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$54$$), !1);
  if($innerRadius$$4_referenceObjects$$1_totalWidth$$5$$ = $options$$167$$.referenceLines) {
    for($i$$620_maxDiameter$$ = 0;$i$$620_maxDiameter$$ < $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$.length;$i$$620_maxDiameter$$++) {
      $plotAreaColor_referenceLineColor_thresholds$$3$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$[$i$$620_maxDiameter$$].color ? $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$[$i$$620_maxDiameter$$].color : "black", $innerRadiusLength_isRTL$$26_referenceLineWidth$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$[$i$$620_maxDiameter$$].lineWidth ? $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$[$i$$620_maxDiameter$$].lineWidth : 2, $endAngle$$4_outerRadius$$3_referenceLineStyle$$ = 
      $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$[$i$$620_maxDiameter$$].lineStyle, $angle$$43_value$$179$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$5$$[$i$$620_maxDiameter$$].value, $angle$$43_value$$179$$ = $startAngleRads$$1$$ + D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$167$$, $options$$167$$.min, $angle$$43_value$$179$$) * $angleExtentRads$$2$$, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$54$$, $container$$122$$, $bounds$$105$$, $angle$$43_value$$179$$, 
      $plotAreaColor_referenceLineColor_thresholds$$3$$, $innerRadiusLength_isRTL$$26_referenceLineWidth$$, $endAngle$$4_outerRadius$$3_referenceLineStyle$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$55$$, $container$$123$$, $bounds$$106$$) {
  var $options$$168$$ = $gauge$$55$$.$getOptions$(), $color$$56_isRTL$$27$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$55$$.$getCtx$()), $isVert$$8_labelPosition$$5$$ = "vertical" == $options$$168$$.orientation, $axisInfo$$16_axisOptions$$17$$ = {layout:{}};
  $axisInfo$$16_axisOptions$$17$$.layout.gapRatio = 0;
  $axisInfo$$16_axisOptions$$17$$.timeAxisType = "disabled";
  $axisInfo$$16_axisOptions$$17$$.position = $isVert$$8_labelPosition$$5$$ ? "left" : "bottom";
  $axisInfo$$16_axisOptions$$17$$.min = $options$$168$$.min;
  $axisInfo$$16_axisOptions$$17$$.max = $options$$168$$.max;
  $axisInfo$$16_axisOptions$$17$$.dataMin = $options$$168$$.min;
  $axisInfo$$16_axisOptions$$17$$.dataMax = $options$$168$$.max;
  $axisInfo$$16_axisOptions$$17$$.tickLabel = {rendered:"off"};
  $axisInfo$$16_axisOptions$$17$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$55$$.$getCtx$(), $axisInfo$$16_axisOptions$$17$$, $bounds$$106$$);
  $gauge$$55$$.$__axisInfo$ = $axisInfo$$16_axisOptions$$17$$;
  var $baseline$$12_indicatorX1$$ = 0;
  0 >= $options$$168$$.max ? $baseline$$12_indicatorX1$$ = $options$$168$$.max : 0 <= $options$$168$$.min && ($baseline$$12_indicatorX1$$ = $options$$168$$.min);
  var $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ = $axisInfo$$16_axisOptions$$17$$.$getCoordAt$($baseline$$12_indicatorX1$$);
  "off" != $options$$168$$.plotArea.rendered && !("auto" == $options$$168$$.plotArea.rendered && "onIndicator" == $options$$168$$.thresholdDisplay) && ($baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.min));
  var $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.value), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $isVert$$8_labelPosition$$5$$ ? window.Math.max($bounds$$106$$.y, window.Math.min($bounds$$106$$.y + $bounds$$106$$.$h$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)) : window.Math.max($bounds$$106$$.x, window.Math.min($bounds$$106$$.x + $bounds$$106$$.$w$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)), 
  $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = $options$$168$$.indicatorSize, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$, $plotX1$$, $plotX2$$, $plotY1$$, $drawnPlotSize_plotY2$$ = 0, $drawnPlotSize_plotY2$$ = 1 > $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ ? 1 : $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$;
  $drawnIndicatorSize_indicatorY2$$ = 1 < $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ ? 1 : $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$;
  $isVert$$8_labelPosition$$5$$ ? ($baseline$$12_indicatorX1$$ = $bounds$$106$$.x + (1 - $drawnIndicatorSize_indicatorY2$$) / 2 * $bounds$$106$$.$w$ + 0.5, $indicatorX2$$ = $bounds$$106$$.x + $bounds$$106$$.$w$ * (1 + $drawnIndicatorSize_indicatorY2$$) / 2 - 0.5, $drawnIndicatorSize_indicatorY2$$ = $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ - 0.5, $indicatorY1$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ + 0.5, $plotX1$$ = $bounds$$106$$.x + (1 - 1 / $drawnPlotSize_plotY2$$) / 
  2 * $bounds$$106$$.$w$, $plotX2$$ = $bounds$$106$$.x + $bounds$$106$$.$w$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2, $plotY1$$ = $bounds$$106$$.y, $drawnPlotSize_plotY2$$ = $bounds$$106$$.y + $bounds$$106$$.$h$) : ($baseline$$12_indicatorX1$$ = $color$$56_isRTL$$27$$ ? $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ - 0.5 : $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ + 0.5, $indicatorX2$$ = $color$$56_isRTL$$27$$ ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ + 
  0.5 : $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ - 0.5, $indicatorY1$$ = $bounds$$106$$.y + (1 - $drawnIndicatorSize_indicatorY2$$) / 2 * $bounds$$106$$.$h$ + 0.5, $drawnIndicatorSize_indicatorY2$$ = $bounds$$106$$.y + $bounds$$106$$.$h$ * (1 + $drawnIndicatorSize_indicatorY2$$) / 2 - 0.5, $plotX1$$ = $bounds$$106$$.x, $plotX2$$ = $bounds$$106$$.x + $bounds$$106$$.$w$, $plotY1$$ = $bounds$$106$$.y + (1 - 1 / $drawnPlotSize_plotY2$$) / 2 * $bounds$$106$$.$h$, $drawnPlotSize_plotY2$$ = $bounds$$106$$.y + 
  $bounds$$106$$.$h$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2);
  $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = !0;
  $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ == $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ && ($isVert$$8_labelPosition$$5$$ ? $indicatorY1$$ = $drawnIndicatorSize_indicatorY2$$ : $baseline$$12_indicatorX1$$ = $indicatorX2$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = !1);
  var $borderColor$$37_refColor_shadow$$7_stroke$$76$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$55$$), $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($gauge$$55$$), $thresholds$$4_value$$180$$ = $options$$168$$.thresholds, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $isVert$$8_labelPosition$$5$$ ? 0 : 270;
  if($thresholds$$4_value$$180$$ && "off" != $options$$168$$.plotArea.rendered && "all" == $options$$168$$.thresholdDisplay) {
    for($baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ = $thresholds$$4_value$$180$$.length - 1;0 <= $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$;$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$--) {
      var $currentThresholdIndex$$1$$ = $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$, $plotArea$$3_referenceLineSize$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$55$$, $gauge$$55$$.$getCtx$(), $plotX1$$, $plotX2$$, $plotY1$$, $drawnPlotSize_plotY2$$), $cp$$4_thresholdBorderColor$$ = new D.$DvtClipPath$$("pacp" + $gauge$$55$$.getId());
      if($baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ == $thresholds$$4_value$$180$$.length - 1) {
        !$isVert$$8_labelPosition$$5$$ && $color$$56_isRTL$$27$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4_thresholdBorderColor$$, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.max) + 1, 0, $bounds$$106$$.$w$ + 2, $bounds$$106$$.$h$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4_thresholdBorderColor$$, 0, 0, $bounds$$106$$.$w$ + 2, $bounds$$106$$.$h$ + 2, 0, 0)
      }else {
        if($isVert$$8_labelPosition$$5$$) {
          (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4_thresholdBorderColor$$, 0, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.max), $bounds$$106$$.$w$ + 2, 1 * ($options$$168$$.max - $thresholds$$4_value$$180$$[$thresholds$$4_value$$180$$.length - 2 - $currentThresholdIndex$$1$$].max) / window.Math.abs($options$$168$$.min - $options$$168$$.max) * $bounds$$106$$.$h$, 0, 0)
        }else {
          if($color$$56_isRTL$$27$$) {
            var $thresholdMax$$ = null == $thresholds$$4_value$$180$$[$thresholds$$4_value$$180$$.length - 2 - $currentThresholdIndex$$1$$].max ? 100 : $thresholds$$4_value$$180$$[$thresholds$$4_value$$180$$.length - 2 - $currentThresholdIndex$$1$$].max;
            (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4_thresholdBorderColor$$, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.max), 0, 1 * ($options$$168$$.max - $thresholdMax$$) / window.Math.abs($options$$168$$.min - $options$$168$$.max) * $bounds$$106$$.$w$, $bounds$$106$$.$h$ + 2, 0, 0)
          }else {
            (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4_thresholdBorderColor$$, 0, 0, 1 * ($thresholds$$4_value$$180$$[$currentThresholdIndex$$1$$].max - $options$$168$$.min) / window.Math.abs($options$$168$$.min - $options$$168$$.max) * $bounds$$106$$.$w$, $bounds$$106$$.$h$ + 2, 0, 0)
          }
        }
      }
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$3_referenceLineSize$$, $cp$$4_thresholdBorderColor$$);
      if($color$$56_isRTL$$27$$ || $isVert$$8_labelPosition$$5$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$4_value$$180$$.length - 1 - $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$
      }
      $plotArea$$3_referenceLineSize$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$55$$, $thresholds$$4_value$$180$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $cp$$4_thresholdBorderColor$$ = $thresholds$$4_value$$180$$[$currentThresholdIndex$$1$$].borderColor;
      $plotArea$$3_referenceLineSize$$.$setSolidStroke$($cp$$4_thresholdBorderColor$$ ? $cp$$4_thresholdBorderColor$$ : $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$55$$, $container$$123$$, $plotArea$$3_referenceLineSize$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$55$$, $thresholds$$4_value$$180$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)
    }
  }else {
    "off" != $options$$168$$.plotArea.rendered && (!("auto" == $options$$168$$.plotArea.rendered && "onIndicator" == $options$$168$$.thresholdDisplay) && "all" != $options$$168$$.thresholdDisplay) && ($plotArea$$3_referenceLineSize$$ = $isVert$$8_labelPosition$$5$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$55$$, $gauge$$55$$.$getCtx$(), $plotX1$$, $plotX2$$, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.max), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.min)) : 
    D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$55$$, $gauge$$55$$.$getCtx$(), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.min), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$168$$.max), $plotY1$$, $drawnPlotSize_plotY2$$), $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$55$$), $plotArea$$3_referenceLineSize$$.$setSolidFill$($baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$), 
    $plotArea$$3_referenceLineSize$$.$setSolidStroke$($arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$55$$, $container$$123$$, $plotArea$$3_referenceLineSize$$, $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$))
  }
  $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ = new D.$DvtStatusMeterGaugeIndicator$$($gauge$$55$$, $gauge$$55$$.$getCtx$(), $baseline$$12_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$);
  $gauge$$55$$.$__shapes$.push($baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$);
  $color$$56_isRTL$$27$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$55$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$55$$) && "none" != $options$$168$$.visualEffects ? ($arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$56_isRTL$$27$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$56_isRTL$$27$$, -0.04, -0.05)], $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$ = new D.$DvtLinearGradientFill$$($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$, $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$, 
  [1, 1], [0, 1]), $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$.$setFill$($arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$)) : $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$.$setSolidFill$($color$$56_isRTL$$27$$);
  $borderColor$$37_refColor_shadow$$7_stroke$$76$$ && $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$.$setSolidStroke$($borderColor$$37_refColor_shadow$$7_stroke$$76$$);
  $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ && $container$$123$$.$addChild$($baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$);
  $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$55$$, $gauge$$55$$.$getCtx$(), $baseline$$12_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$55$$, $container$$123$$, $baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$);
  if($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $options$$168$$.referenceLines) {
    for($baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ = 0;$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$ < $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$.length;$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$++) {
      $borderColor$$37_refColor_shadow$$7_stroke$$76$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$].color ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$].color : "white", $thresholds$$4_value$$180$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$].value, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = 
      $options$$168$$.indicatorSize, $isVert$$8_labelPosition$$5$$ ? ($plotArea$$3_referenceLineSize$$ = ((1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) / 2 + $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) * $bounds$$106$$.$w$, $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$ = $bounds$$106$$.x + (1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) / 4 * $bounds$$106$$.$w$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($thresholds$$4_value$$180$$), 
      $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = new D.$DvtLine$$($gauge$$55$$.$getCtx$(), $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$, $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$ + $plotArea$$3_referenceLineSize$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$)) : ($plotArea$$3_referenceLineSize$$ = ((1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) / 2 + $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) * 
      $bounds$$106$$.$h$, $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($thresholds$$4_value$$180$$), $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = $bounds$$106$$.y + (1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) / 4 * $bounds$$106$$.$h$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = new D.$DvtLine$$($gauge$$55$$.$getCtx$(), $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$, 
      $arColors$$27_gradient$$12_plotAreaBorderColor$$2_xCoord$$12$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ + $plotArea$$3_referenceLineSize$$)), $borderColor$$37_refColor_shadow$$7_stroke$$76$$ = new D.$DvtSolidStroke$$($borderColor$$37_refColor_shadow$$7_stroke$$76$$, 1, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$].lineWidth ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$].lineWidth : 
      2), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$].lineStyle && $borderColor$$37_refColor_shadow$$7_stroke$$76$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$621_overlay$$14_plotAreaColor$$1_shape$$55$$].lineStyle)), $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$.$setStroke$($borderColor$$37_refColor_shadow$$7_stroke$$76$$), $container$$123$$.$addChild$($bRender_indicatorSize$$1_referenceLine_yCoord$$10$$), 
      !(0,D.$DvtAgent$isPlatformIE$$)() && "none" != $options$$168$$.visualEffects && ($borderColor$$37_refColor_shadow$$7_stroke$$76$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, !1, !1, !1), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)($bRender_indicatorSize$$1_referenceLine_yCoord$$10$$, $borderColor$$37_refColor_shadow$$7_stroke$$76$$))
    }
  }
  $isVert$$8_labelPosition$$5$$ = $options$$168$$.metricLabel.position;
  "on" == $options$$168$$.metricLabel.rendered && !D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$168$$) && !D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$168$$) ? D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$55$$, $container$$123$$, $bounds$$106$$, $color$$56_isRTL$$27$$, $isVert$$8_labelPosition$$5$$, {$x1$:$baseline$$12_indicatorX1$$, $x2$:$indicatorX2$$, $y1$:$indicatorY1$$, $y2$:$drawnIndicatorSize_indicatorY2$$}, {$x1$:$plotX1$$, $x2$:$plotX2$$, 
  $y1$:$plotY1$$, $y2$:$drawnPlotSize_plotY2$$}) : D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$168$$) && D.$DvtStatusMeterGaugeRenderer$$.$_renderTitle$($gauge$$55$$, $container$$123$$, $bounds$$106$$, $isVert$$8_labelPosition$$5$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($defaultValue$$4_gauge$$56$$, $context$$396$$, $width$$99_x1$$47$$, $multiplier$$1_x2$$43$$, $height$$92_y1$$37$$, $options$$169_y2$$34$$) {
  var $cmds$$21_x$$212$$ = window.Math.min($width$$99_x1$$47$$, $multiplier$$1_x2$$43$$), $y$$186$$ = window.Math.min($height$$92_y1$$37$$, $options$$169_y2$$34$$);
  $width$$99_x1$$47$$ = window.Math.abs($width$$99_x1$$47$$ - $multiplier$$1_x2$$43$$);
  $height$$92_y1$$37$$ = window.Math.abs($options$$169_y2$$34$$ - $height$$92_y1$$37$$);
  $options$$169_y2$$34$$ = $defaultValue$$4_gauge$$56$$.$getOptions$();
  $multiplier$$1_x2$$43$$ = "vertical" == $options$$169_y2$$34$$.orientation ? $width$$99_x1$$47$$ : $height$$92_y1$$37$$;
  $defaultValue$$4_gauge$$56$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($defaultValue$$4_gauge$$56$$) ? "25%" : "15%";
  $cmds$$21_x$$212$$ = D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$($cmds$$21_x$$212$$, $y$$186$$, $width$$99_x1$$47$$, $height$$92_y1$$37$$, "auto" != $options$$169_y2$$34$$.plotArea.borderRadius ? $options$$169_y2$$34$$.plotArea.borderRadius : $options$$169_y2$$34$$.borderRadius, $multiplier$$1_x2$$43$$, $defaultValue$$4_gauge$$56$$);
  return new D.$DvtPath$$($context$$396$$, $cmds$$21_x$$212$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$57$$, $container$$124$$, $shape$$56$$, $bRender$$1$$, $gradient$$13_gradientAngle$$2$$) {
  "none" != $gauge$$57$$.$getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$57$$) && ($gradient$$13_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$13_gradientAngle$$2$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$56$$.$setFill$($gradient$$13_gradientAngle$$2$$), $gauge$$57$$.$__shapes$.push($shape$$56$$), $shape$$56$$.$setMouseEnabled$(!1), $bRender$$1$$ && $container$$124$$.$addChild$($shape$$56$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$29_gauge$$58$$, $container$$125$$, $shape$$57$$, $color$$57$$, $gradient$$14_gradientAngle$$3$$) {
  var $options$$171$$ = $arColors$$29_gauge$$58$$.$getOptions$();
  $shape$$57$$.$setMouseEnabled$(!1);
  $container$$125$$.$addChild$($shape$$57$$);
  "none" != $options$$171$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$29_gauge$$58$$) ? ($arColors$$29_gauge$$58$$ = [D.$DvtColorUtils$$.$getDarker$($color$$57$$, 0.9), $color$$57$$, D.$DvtColorUtils$$.$getBrighter$($color$$57$$)], $gradient$$14_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$14_gradientAngle$$3$$, $arColors$$29_gauge$$58$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$29_gauge$$58$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$57$$, -0.04, -0.05), 
  D.$DvtColorUtils$$.$adjustHSL$($color$$57$$, -0.09, 0.04)], $gradient$$14_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$14_gradientAngle$$3$$, $arColors$$29_gauge$$58$$, [1, 1], [0, 1])), $shape$$57$$.$setFill$($gradient$$14_gradientAngle$$3$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelOutsidePlotArea$$($gauge$$59$$, $container$$126$$, $bounds$$107$$) {
  var $computedLabelBounds_options$$172$$ = $gauge$$59$$.$getOptions$(), $isRTL$$28$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$59$$.$getCtx$()), $isVert$$9_size$$37$$ = "vertical" == $computedLabelBounds_options$$172$$.orientation, $label$$57$$ = new D.$DvtOutputText$$($gauge$$59$$.$getCtx$(), ""), $labelString$$5$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$172$$.value, $gauge$$59$$), $labelGap$$ = $computedLabelBounds_options$$172$$.__layout.labelGap, $labelStyle$$15_minLabelDims$$1$$ = 
  $computedLabelBounds_options$$172$$.metricLabel.style, $labelColor$$3_minLabel$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("color"), $labelColor$$3_minLabel$$ = $labelColor$$3_minLabel$$ ? $labelColor$$3_minLabel$$ : "#333333", $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = null;
  $label$$57$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
  $label$$57$$.$setSolidFill$($labelColor$$3_minLabel$$);
  if($isVert$$9_size$$37$$ && "on" == $computedLabelBounds_options$$172$$.metricLabel.rendered) {
    var $bound$$8_labelSpace_maxValue$$14$$ = 0 < $computedLabelBounds_options$$172$$.max ? $computedLabelBounds_options$$172$$.max : $computedLabelBounds_options$$172$$.min, $bound$$8_labelSpace_maxValue$$14$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$8_labelSpace_maxValue$$14$$, $gauge$$59$$), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = new D.$DvtOutputText$$($gauge$$59$$.$getCtx$(), $bound$$8_labelSpace_maxValue$$14$$);
    $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
    $computedLabelBounds_options$$172$$ = new D.$DvtRectangle$$($bounds$$107$$.x, $bounds$$107$$.y + 0.8 * $bounds$$107$$.$h$, $bounds$$107$$.$w$, 0.2 * $bounds$$107$$.$h$);
    $isVert$$9_size$$37$$ = ($isVert$$9_size$$37$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$9_size$$37$$) : $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$getOptimalFontSize$($computedLabelBounds_options$$172$$);
    $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$measureDimensions$();
    $bounds$$107$$.$h$ -= $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$h$;
    $bound$$8_labelSpace_maxValue$$14$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$;
    $label$$57$$.$setFontSize$($isVert$$9_size$$37$$);
    $label$$57$$.$setTextString$($labelString$$5$$);
    $label$$57$$.$setX$($bounds$$107$$.x + $bounds$$107$$.$w$ / 2);
    $label$$57$$.$setY$($bounds$$107$$.y + $bounds$$107$$.$h$);
    $bounds$$107$$.$h$ -= $labelGap$$;
    $label$$57$$.$alignCenter$();
    D.$DvtTextUtils$$.$fitText$($label$$57$$, $bounds$$107$$.$w$, $bounds$$107$$.$h$, $container$$126$$)
  }else {
    if(!$isVert$$9_size$$37$$ && "on" == $computedLabelBounds_options$$172$$.metricLabel.rendered) {
      $isVert$$9_size$$37$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("font-size");
      $labelColor$$3_minLabel$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$172$$.min, $gauge$$59$$);
      $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$172$$.max, $gauge$$59$$);
      void 0 === $isVert$$9_size$$37$$ && 18 > $bounds$$107$$.$h$ && ($isVert$$9_size$$37$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$5$$, $labelColor$$3_minLabel$$, $maxLabel$$1_maxLabelDims$$1_minValue$$14$$], $label$$57$$, $bounds$$107$$));
      $isVert$$9_size$$37$$ = $isVert$$9_size$$37$$ ? (0,window.parseInt)($isVert$$9_size$$37$$) : 13;
      $label$$57$$.$setFontSize$($isVert$$9_size$$37$$);
      var $alignCoord$$;
      if(0 < $computedLabelBounds_options$$172$$.max || "off" != $computedLabelBounds_options$$172$$.plotArea.rendered || !("auto" == $computedLabelBounds_options$$172$$.plotArea.rendered && "onIndicator" == $computedLabelBounds_options$$172$$.thresholdDisplay)) {
        $bound$$8_labelSpace_maxValue$$14$$ = 0 < $computedLabelBounds_options$$172$$.max ? $computedLabelBounds_options$$172$$.max : $computedLabelBounds_options$$172$$.min, $bound$$8_labelSpace_maxValue$$14$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$8_labelSpace_maxValue$$14$$, $gauge$$59$$), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = new D.$DvtOutputText$$($gauge$$59$$.$getCtx$(), $bound$$8_labelSpace_maxValue$$14$$), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$), 
        $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$setFontSize$($isVert$$9_size$$37$$), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$measureDimensions$(), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$ = window.Math.min($maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$, $bounds$$107$$.$w$), $alignCoord$$ = $isRTL$$28$$ ? $bounds$$107$$.x + $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$ : $bounds$$107$$.x + $bounds$$107$$.$w$, $bound$$8_labelSpace_maxValue$$14$$ = 
        $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$, $isRTL$$28$$ && ($bounds$$107$$.x += $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$ + $labelGap$$), $bounds$$107$$.$w$ -= $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$ + $labelGap$$
      }
      if(0 > $computedLabelBounds_options$$172$$.min && "on" != $computedLabelBounds_options$$172$$.plotArea.rendered && !("auto" == $computedLabelBounds_options$$172$$.plotArea.rendered && "onIndicator" == $computedLabelBounds_options$$172$$.thresholdDisplay)) {
        $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$172$$.min, $gauge$$59$$);
        $labelColor$$3_minLabel$$ = new D.$DvtOutputText$$($gauge$$59$$.$getCtx$(), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$);
        $labelColor$$3_minLabel$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
        $labelColor$$3_minLabel$$.$setFontSize$($isVert$$9_size$$37$$);
        $labelStyle$$15_minLabelDims$$1$$ = $labelColor$$3_minLabel$$.$measureDimensions$();
        if(0 > $computedLabelBounds_options$$172$$.value || 0 >= $computedLabelBounds_options$$172$$.max) {
          $alignCoord$$ = $isRTL$$28$$ ? $bounds$$107$$.x + $bounds$$107$$.$w$ : $bounds$$107$$.x + $labelStyle$$15_minLabelDims$$1$$.$w$, $bound$$8_labelSpace_maxValue$$14$$ = $labelStyle$$15_minLabelDims$$1$$.$w$
        }
        $isRTL$$28$$ || ($bounds$$107$$.x += $labelStyle$$15_minLabelDims$$1$$.$w$ + $labelGap$$);
        $bounds$$107$$.$w$ -= $labelStyle$$15_minLabelDims$$1$$.$w$ + $labelGap$$
      }
      $label$$57$$.$setTextString$($labelString$$5$$);
      $label$$57$$.$setX$($alignCoord$$);
      D.$DvtTextUtils$$.$centerTextVertically$($label$$57$$, $bounds$$107$$.y + $bounds$$107$$.$h$ / 2);
      $label$$57$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$57$$, $bound$$8_labelSpace_maxValue$$14$$, $bounds$$107$$.$h$, $container$$126$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelInsidePlotArea$$($gauge$$60$$, $container$$127$$, $bounds$$108$$, $color$$58$$, $labelPosition$$6$$, $indicator$$8$$, $plotArea$$4$$, $repeatedTry$$) {
  var $labelColor$$4_options$$173$$ = $gauge$$60$$.$getOptions$(), $isRTL$$29$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$60$$.$getCtx$()), $isVert$$10$$ = "vertical" == $labelColor$$4_options$$173$$.orientation, $plotAreaRendered$$ = "on" == $labelColor$$4_options$$173$$.plotArea.rendered, $hAlignment$$ = "center", $vAlignment$$ = "middle", $labelSpace$$1$$ = new D.$DvtRectangle$$(window.Math.min($indicator$$8$$.$x1$, $indicator$$8$$.$x2$), window.Math.min($indicator$$8$$.$y1$, $indicator$$8$$.$y2$), 
  window.Math.abs($indicator$$8$$.$x2$ - $indicator$$8$$.$x1$), window.Math.abs($indicator$$8$$.$y2$ - $indicator$$8$$.$y1$)), $labelColor$$4_options$$173$$ = $labelColor$$4_options$$173$$.metricLabel.style.$getStyle$("color");
  "center" == $labelPosition$$6$$ ? ($labelColor$$4_options$$173$$ = $labelColor$$4_options$$173$$ ? $labelColor$$4_options$$173$$ : D.$DvtColorUtils$$.$getContrastingTextColor$($color$$58$$), $isVert$$10$$ ? ($labelSpace$$1$$.$h$ -= $labelSpace$$1$$.$w$, $labelSpace$$1$$.y += $labelSpace$$1$$.$w$ / 2) : ($labelSpace$$1$$.$w$ -= $labelSpace$$1$$.$h$, $labelSpace$$1$$.x += $labelSpace$$1$$.$h$ / 2)) : "insideIndicatorEdge" == $labelPosition$$6$$ ? ($labelColor$$4_options$$173$$ = $labelColor$$4_options$$173$$ ? 
  $labelColor$$4_options$$173$$ : D.$DvtColorUtils$$.$getContrastingTextColor$($color$$58$$), $isVert$$10$$ ? ($labelSpace$$1$$.$h$ -= $labelSpace$$1$$.$w$, $labelSpace$$1$$.y += $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = !$plotAreaRendered$$ && $indicator$$8$$.$y1$ > $indicator$$8$$.$y2$ ? "bottom" : "top") : ($labelSpace$$1$$.$w$ -= $labelSpace$$1$$.$h$, $labelSpace$$1$$.x += $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = $isRTL$$29$$ ? !$plotAreaRendered$$ && $indicator$$8$$.$x1$ < $indicator$$8$$.$x2$ ? 
  "right" : "left" : !$plotAreaRendered$$ && $indicator$$8$$.$x1$ > $indicator$$8$$.$x2$ ? "left" : "right")) : "outsideIndicatorEdge" == $labelPosition$$6$$ && ($isVert$$10$$ ? ($labelSpace$$1$$.$h$ = window.Math.abs($plotArea$$4$$.$y1$ - $indicator$$8$$.$y1$) - $labelSpace$$1$$.$w$, $labelSpace$$1$$.y = $plotArea$$4$$.$y1$ + $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = "bottom", !$plotAreaRendered$$ && $indicator$$8$$.$y1$ > $indicator$$8$$.$y2$ && ($labelSpace$$1$$.$h$ = window.Math.abs($plotArea$$4$$.$y1$ - 
  $indicator$$8$$.$y1$) - $labelSpace$$1$$.$w$, $labelSpace$$1$$.y = $indicator$$8$$.$y1$ + $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = "top")) : $isRTL$$29$$ ? !$plotAreaRendered$$ && $indicator$$8$$.$x1$ < $indicator$$8$$.$x2$ ? ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x2$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $indicator$$8$$.$x2$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "left") : ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x1$ - $indicator$$8$$.$x2$) - 
  $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $plotArea$$4$$.$x1$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "right") : !$plotAreaRendered$$ && $indicator$$8$$.$x1$ > $indicator$$8$$.$x2$ ? ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x1$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $plotArea$$4$$.$x1$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "right") : ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x2$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, 
  $labelSpace$$1$$.x = $indicator$$8$$.$x2$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "left"));
  !D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$60$$, $container$$127$$, $labelSpace$$1$$, $labelColor$$4_options$$173$$, $hAlignment$$, $vAlignment$$) && !$repeatedTry$$ && ("outsideIndicatorEdge" == $labelPosition$$6$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$60$$, $container$$127$$, $bounds$$108$$, $color$$58$$, "insideIndicatorEdge", $indicator$$8$$, $plotArea$$4$$, !0) : ("insideIndicatorEdge" == $labelPosition$$6$$ || "center" == $labelPosition$$6$$) && D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$60$$, 
  $container$$127$$, $bounds$$108$$, $color$$58$$, "outsideIndicatorEdge", $indicator$$8$$, $plotArea$$4$$, !0))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderTitle$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderTitle$$($gauge$$61$$, $container$$128$$, $bounds$$109$$) {
  var $isRTL$$30$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$61$$.$getCtx$()), $options$$174$$ = $gauge$$61$$.$getOptions$(), $isVert$$11$$ = "vertical" == $options$$174$$.orientation, $titleSpace$$4$$ = new D.$DvtRectangle$$($bounds$$109$$.x, $bounds$$109$$.y, $isVert$$11$$ ? $bounds$$109$$.$w$ : $bounds$$109$$.$w$ - $bounds$$109$$.$h$, $isVert$$11$$ ? $bounds$$109$$.$h$ - $bounds$$109$$.$w$ : $bounds$$109$$.$h$), $title$$12_titleString$$1$$ = $options$$174$$.title.text;
  if(!D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$174$$) && "on" == $options$$174$$.metricLabel.rendered) {
    var $fontStyle$$1_labelString$$6$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$174$$.value, $gauge$$61$$), $title$$12_titleString$$1$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$title$$12_titleString$$1$$, $fontStyle$$1_labelString$$6$$])
  }
  var $titleStyle$$1$$ = $options$$174$$.title.style, $fontStyle$$1_labelString$$6$$ = $titleStyle$$1$$.$clone$(), $size$$38_tempTitle$$1$$ = $titleStyle$$1$$.$getStyle$("font-size");
  $size$$38_tempTitle$$1$$ || ($size$$38_tempTitle$$1$$ = new D.$DvtOutputText$$($gauge$$61$$.$getCtx$(), $title$$12_titleString$$1$$, 0, 0), $size$$38_tempTitle$$1$$.$setCSSStyle$($titleStyle$$1$$), $size$$38_tempTitle$$1$$.$setTextString$($title$$12_titleString$$1$$), $size$$38_tempTitle$$1$$ = $isVert$$11$$ ? $size$$38_tempTitle$$1$$.$getOptimalFontSize$(new D.$DvtRectangle$$($titleSpace$$4$$.x, $titleSpace$$4$$.y, $titleSpace$$4$$.$w$, window.Number.MAX_VALUE)) : $size$$38_tempTitle$$1$$.$getOptimalFontSize$(new D.$DvtRectangle$$($titleSpace$$4$$.x, 
  $titleSpace$$4$$.y, window.Number.MAX_VALUE, $titleSpace$$4$$.$h$)));
  $title$$12_titleString$$1$$ = new D.$DvtMultilineText$$($gauge$$61$$.$getCtx$(), $title$$12_titleString$$1$$);
  $fontStyle$$1_labelString$$6$$.$setFontSize$("font-size", $size$$38_tempTitle$$1$$.toString());
  $title$$12_titleString$$1$$.$setCSSStyle$($fontStyle$$1_labelString$$6$$);
  D.$DvtTextUtils$$.$fitText$($title$$12_titleString$$1$$, $titleSpace$$4$$.$w$, $titleSpace$$4$$.$h$, $gauge$$61$$);
  "center" == $options$$174$$.title.position || "auto" == $options$$174$$.title.position && $isVert$$11$$ ? (D.$DvtTextUtils$$.$centerTextVertically$($title$$12_titleString$$1$$, $bounds$$109$$.y + $bounds$$109$$.$h$ / 2), $title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $bounds$$109$$.$w$ / 2), $title$$12_titleString$$1$$.$alignCenter$()) : (D.$DvtTextUtils$$.$centerTextVertically$($title$$12_titleString$$1$$, $bounds$$109$$.y + $bounds$$109$$.$h$ / 2), !$isVert$$11$$ && $isRTL$$30$$ ? ($title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + 
  $bounds$$109$$.$w$ - $titleSpace$$4$$.$h$ / 2), $title$$12_titleString$$1$$.$alignRight$()) : !$isVert$$11$$ && !$isRTL$$30$$ ? ($title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $titleSpace$$4$$.$h$ / 2), $title$$12_titleString$$1$$.$alignLeft$()) : $isVert$$11$$ && ($title$$12_titleString$$1$$.$setY$($bounds$$109$$.y + $bounds$$109$$.$h$ - $title$$12_titleString$$1$$.$getDimensions$().$h$ - $titleSpace$$4$$.$w$ / 2), $title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $bounds$$109$$.$w$ / 
  2), $title$$12_titleString$$1$$.$alignCenter$()));
  $container$$128$$.$addChild$($title$$12_titleString$$1$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$110$$, $radius$$19$$, $angle$$44$$) {
  return{x:window.Math.cos($angle$$44$$) * $radius$$19$$ + $bounds$$110$$.$w$ / 2 + $bounds$$110$$.x, y:window.Math.sin($angle$$44$$) * $radius$$19$$ + $bounds$$110$$.$h$ / 2 + $bounds$$110$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$38_gauge$$62$$, $container$$129$$, $bounds$$111_shape$$58$$, $startAngle$$17$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$, $color$$59$$, $isPlotArea$$, $plotAreaBorderColor$$3$$) {
  var $context$$397$$ = $borderColor$$38_gauge$$62$$.$getCtx$();
  (0,D.$DvtAgent$isRightToLeft$$)($borderColor$$38_gauge$$62$$.$getCtx$()) && ($startAngle$$17$$ = window.Math.PI - $startAngle$$17$$ - $angleExtent$$14$$, $startAngle$$17$$ = 0 < $startAngle$$17$$ ? $startAngle$$17$$ : $startAngle$$17$$ + 2 * window.Math.PI);
  $isPlotArea$$ ? $bounds$$111_shape$$58$$ = new D.$DvtPath$$($context$$397$$, D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$111_shape$$58$$, $startAngle$$17$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$)) : ($bounds$$111_shape$$58$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$397$$, $bounds$$111_shape$$58$$, $startAngle$$17$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$), $borderColor$$38_gauge$$62$$.$__shapes$.push($bounds$$111_shape$$58$$));
  $bounds$$111_shape$$58$$.$setSolidFill$($color$$59$$);
  ($borderColor$$38_gauge$$62$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$38_gauge$$62$$)) && !$isPlotArea$$ ? $bounds$$111_shape$$58$$.$setSolidStroke$($borderColor$$38_gauge$$62$$) : $isPlotArea$$ && $plotAreaBorderColor$$3$$ && $bounds$$111_shape$$58$$.$setSolidStroke$($plotAreaBorderColor$$3$$);
  $container$$129$$.$addChild$($bounds$$111_shape$$58$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$63_p1$$8$$, $container$$130$$, $bounds$$112_p2$$7$$, $angle$$45$$, $color$$60_stroke$$77$$, $lineWidth$$8$$, $lineStyle$$2$$) {
  var $context$$398_shape$$59$$ = $gauge$$63_p1$$8$$.$getCtx$(), $maxDiameter$$1_outerRadius$$5$$ = window.Math.min($bounds$$112_p2$$7$$.$w$, $bounds$$112_p2$$7$$.$h$), $innerRadius$$6$$ = 0.275 * $maxDiameter$$1_outerRadius$$5$$, $maxDiameter$$1_outerRadius$$5$$ = 0.5 * $maxDiameter$$1_outerRadius$$5$$;
  (0,D.$DvtAgent$isRightToLeft$$)($gauge$$63_p1$$8$$.$getCtx$()) && ($angle$$45$$ = window.Math.PI - $angle$$45$$, $angle$$45$$ = 0 < $angle$$45$$ ? $angle$$45$$ : $angle$$45$$ + 2 * window.Math.PI);
  $gauge$$63_p1$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$112_p2$$7$$, $innerRadius$$6$$, $angle$$45$$);
  $bounds$$112_p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$112_p2$$7$$, $maxDiameter$$1_outerRadius$$5$$, $angle$$45$$);
  $context$$398_shape$$59$$ = new D.$DvtLine$$($context$$398_shape$$59$$, $gauge$$63_p1$$8$$.x, $gauge$$63_p1$$8$$.y, $bounds$$112_p2$$7$$.x, $bounds$$112_p2$$7$$.y);
  $color$$60_stroke$$77$$ = new D.$DvtSolidStroke$$($color$$60_stroke$$77$$, 1, $lineWidth$$8$$);
  $lineStyle$$2$$ && $color$$60_stroke$$77$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$2$$));
  $context$$398_shape$$59$$.$setStroke$($color$$60_stroke$$77$$);
  $container$$130$$.$addChild$($context$$398_shape$$59$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($bounds$$113_p4$$2$$, $startAngle$$18$$, $angleExtent$$15$$, $innerRadius$$7$$, $cmd$$15_outerRadius$$6$$) {
  var $p1$$9$$, $p2$$8$$, $p3$$2$$;
  $angleExtent$$15$$ < D.$DvtMath$$.$TWO_PI$ ? ($p1$$9$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$18$$), $p2$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$18$$ + $angleExtent$$15$$), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$18$$ + $angleExtent$$15$$), $bounds$$113_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, 
  $innerRadius$$7$$, $startAngle$$18$$), $cmd$$15_outerRadius$$6$$ = D.$DvtPathUtils$$.moveTo($p1$$9$$.x, $p1$$9$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$, 1, $p2$$8$$.x, $p2$$8$$.y) + D.$DvtPathUtils$$.lineTo($p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, $angleExtent$$15$$, 0, $bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y) + D.$DvtPathUtils$$.closePath()) : ($p1$$9$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, 
  $cmd$$15_outerRadius$$6$$, $startAngle$$18$$), $p2$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$18$$ + $angleExtent$$15$$ / 2), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$18$$), $bounds$$113_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$18$$ + $angleExtent$$15$$ / 2), $cmd$$15_outerRadius$$6$$ = 
  D.$DvtPathUtils$$.moveTo($p1$$9$$.x, $p1$$9$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$ / 2, 1, $p2$$8$$.x, $p2$$8$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$ / 2, 1, $p1$$9$$.x, $p1$$9$$.y), 0 < $innerRadius$$7$$ && ($cmd$$15_outerRadius$$6$$ += D.$DvtPathUtils$$.moveTo($bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, 
  $angleExtent$$15$$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, $angleExtent$$15$$ / 2, 0, $bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y)), $cmd$$15_outerRadius$$6$$ += D.$DvtPathUtils$$.closePath());
  return $cmd$$15_outerRadius$$6$$
};
D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$ = function $$DvtStatusMeterGaugeRenderer$$$$getAngleQuadrant$$($angle$$46$$, $bStart$$1$$) {
  var $quadrant$$ = 1;
  if($bStart$$1$$) {
    $angle$$46$$ >= D.$DvtMath$$.$HALF_PI$ && $angle$$46$$ < window.Math.PI ? $quadrant$$ = 2 : $angle$$46$$ >= window.Math.PI && $angle$$46$$ < 1.5 * window.Math.PI ? $quadrant$$ = 3 : $angle$$46$$ >= 1.5 * window.Math.PI && $angle$$46$$ < D.$DvtMath$$.$TWO_PI$ && ($quadrant$$ = 4)
  }else {
    if($angle$$46$$ > D.$DvtMath$$.$HALF_PI$ && $angle$$46$$ <= window.Math.PI) {
      $quadrant$$ = 2
    }else {
      if($angle$$46$$ > window.Math.PI && $angle$$46$$ <= 1.5 * window.Math.PI) {
        $quadrant$$ = 3
      }else {
        if($angle$$46$$ > 1.5 * window.Math.PI && $angle$$46$$ < D.$DvtMath$$.$TWO_PI$ || 0 == $angle$$46$$) {
          $quadrant$$ = 4
        }
      }
    }
  }
  return $quadrant$$
};
D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_hasMetricLabelOutsidePlotArea$$($options$$175$$) {
  var $labelPosition$$8$$ = $options$$175$$.metricLabel.position;
  return"auto" == $labelPosition$$8$$ || "outsidePlotArea" == $labelPosition$$8$$ || "withTitle" == $labelPosition$$8$$ && !D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$175$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$ = function $$DvtStatusMeterGaugeRenderer$$$$_adjustCenterAndBounds$$($gauge$$64$$, $innerRadius$$8_maxInnerDiameter$$1$$, $maxDiameter$$2_startAngleRads$$2$$, $angleExtentRads$$3$$, $endAngle$$5$$, $bounds$$114$$, $isRTL$$32$$) {
  var $labelBounds$$10_labelCenterOffset$$ = null, $startQuadrant$$ = D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($maxDiameter$$2_startAngleRads$$2$$, !0), $endQuadrant$$ = D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($endAngle$$5$$, !1), $width$$100$$ = $bounds$$114$$.$w$, $height$$93$$ = $bounds$$114$$.$h$, $cx$$50$$ = $width$$100$$ / 2, $cy$$51$$ = $height$$93$$ / 2;
  if($startQuadrant$$ == $endQuadrant$$ && $angleExtentRads$$3$$ <= D.$DvtMath$$.$HALF_PI$) {
    if($maxDiameter$$2_startAngleRads$$2$$ = 2 * window.Math.min($bounds$$114$$.$w$, $bounds$$114$$.$h$), $bounds$$114$$.$w$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$114$$.$h$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, !$isRTL$$32$$ && 1 == $startQuadrant$$ || $isRTL$$32$$ && 2 == $startQuadrant$$) {
      $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$50$$ = $width$$100$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$51$$ = $height$$93$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
      (2.5 / 7) - 2)
    }else {
      if(!$isRTL$$32$$ && 2 == $startQuadrant$$ || $isRTL$$32$$ && 1 == $startQuadrant$$) {
        $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$50$$ = $width$$100$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$51$$ = $height$$93$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
        (2.5 / 7) - 2)
      }else {
        if(!$isRTL$$32$$ && 3 == $startQuadrant$$ || $isRTL$$32$$ && 4 == $startQuadrant$$) {
          $cx$$50$$ = $width$$100$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$51$$ = $height$$93$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
          (2.5 / 7) - 2)
        }else {
          if(!$isRTL$$32$$ && 4 == $startQuadrant$$ || $isRTL$$32$$ && 3 == $startQuadrant$$) {
            $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$50$$ = $width$$100$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$51$$ = $height$$93$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
            (2.5 / 7) - 2)
          }
        }
      }
    }
  }else {
    $startQuadrant$$ % 4 + 1 == $endQuadrant$$ && $angleExtentRads$$3$$ <= window.Math.PI ? 1 == $startQuadrant$$ || 3 == $startQuadrant$$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min($bounds$$114$$.$w$, 2 * $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $bounds$$114$$.$w$ > $bounds$$114$$.$h$ && ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * 
    (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ - ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.75 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7)), 1 == $startQuadrant$$ ? ($labelBounds$$10_labelCenterOffset$$.y = $bounds$$114$$.y + ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$8_maxInnerDiameter$$1$$ * (0.5 / 7), $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$51$$ = $height$$93$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$114$$.y += ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$51$$ = $height$$93$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$)) : ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * $bounds$$114$$.$w$, $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= 
    $maxDiameter$$2_startAngleRads$$2$$, $bounds$$114$$.$w$ < $bounds$$114$$.$h$ && ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ - ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3.25 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), 
    !$isRTL$$32$$ && 4 == $startQuadrant$$ || $isRTL$$32$$ && 2 == $startQuadrant$$ ? ($labelBounds$$10_labelCenterOffset$$.x = $bounds$$114$$.x + ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$8_maxInnerDiameter$$1$$ * (0.25 / 7), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2 - ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$50$$ = $width$$100$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$114$$.x += ($bounds$$114$$.$w$ - 
    $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$50$$ = $width$$100$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$114$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$)) : $endQuadrant$$ % 4 + 1 == $startQuadrant$$ && $angleExtentRads$$3$$ > window.Math.PI && (1 == $startQuadrant$$ && $bounds$$114$$.$h$ > $bounds$$114$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$w$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$) + 1)), 2 * ($bounds$$114$$.$w$ / 
    (window.Math.sin($endAngle$$5$$ - 1.5 * window.Math.PI) + 1)), $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$32$$ ? ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, 
    $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$w$, $cx$$50$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$100$$) : ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$50$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2), $bounds$$114$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$) : 2 == $startQuadrant$$ && $bounds$$114$$.$h$ < $bounds$$114$$.$w$ ? 
    ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$h$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - D.$DvtMath$$.$HALF_PI$) + 1)), 2 * ($bounds$$114$$.$h$ / (window.Math.sin($endAngle$$5$$) + 1)), $bounds$$114$$.$w$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + 
    $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) * (1 + (2 * $bounds$$114$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1))), $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$51$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : 3 == $startQuadrant$$ && $bounds$$114$$.$h$ > $bounds$$114$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * 
    ($bounds$$114$$.$w$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - window.Math.PI) + 1)), 2 * ($bounds$$114$$.$w$ / (window.Math.sin($endAngle$$5$$ - D.$DvtMath$$.$HALF_PI$) + 1)), $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$32$$ ? ($labelBounds$$10_labelCenterOffset$$ = 
    new D.$DvtRectangle$$($bounds$$114$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$50$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + 
    $bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$w$, $cx$$50$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$100$$), $bounds$$114$$.$w$ = 
    $maxDiameter$$2_startAngleRads$$2$$) : 4 == $startQuadrant$$ && $bounds$$114$$.$h$ < $bounds$$114$$.$w$ && ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$h$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - 1.5 * window.Math.PI) + 1)), 2 * ($bounds$$114$$.$h$ / (window.Math.sin(D.$DvtMath$$.$TWO_PI$ - $endAngle$$5$$) + 1)), $bounds$$114$$.$w$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = 
    $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) * (2 * $bounds$$114$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + $labelBounds$$10_labelCenterOffset$$), 
    $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$h$, $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$51$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $height$$93$$))
  }
  $gauge$$64$$.$cx$ = $cx$$50$$;
  $gauge$$64$$.$cy$ = $cy$$51$$;
  return $labelBounds$$10_labelCenterOffset$$
};
D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$ = function $$DvtStatusMeterGaugeRenderer$$$$rectangleWithBorderRadius$$($x$$214$$, $y$$188$$, $w$$49$$, $h$$46$$, $horiz$$1_radius$$20_split$$1$$, $multiplier$$2$$, $bottomLeftY_defaultValue$$5$$) {
  var $topLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$, $topLeftY$$ = $bottomLeftY_defaultValue$$5$$, $topRightX$$1$$ = $bottomLeftY_defaultValue$$5$$, $topRightY$$ = $bottomLeftY_defaultValue$$5$$, $bottomRightX$$1$$ = $bottomLeftY_defaultValue$$5$$, $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$, $bottomLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$;
  if($horiz$$1_radius$$20_split$$1$$) {
    if(-1 != $horiz$$1_radius$$20_split$$1$$.indexOf("/")) {
      var $splitHorizVert_vert$$1$$ = $horiz$$1_radius$$20_split$$1$$.split("/");
      $horiz$$1_radius$$20_split$$1$$ = D.$DvtStringUtils$$.trim($splitHorizVert_vert$$1$$[0]).split(/\s+/);
      $splitHorizVert_vert$$1$$ = D.$DvtStringUtils$$.trim($splitHorizVert_vert$$1$$[1]).split(/\s+/);
      1 == $horiz$$1_radius$$20_split$$1$$.length ? $topLeftX$$1$$ = $topRightX$$1$$ = $bottomRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0] : 2 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1]) : 3 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1], 
      $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[2]) : 4 == $horiz$$1_radius$$20_split$$1$$.length && ($topLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[2], $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[3]);
      1 == $splitHorizVert_vert$$1$$.length ? $topLeftY$$ = $topRightY$$ = $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[0] : 2 == $splitHorizVert_vert$$1$$.length ? ($topLeftY$$ = $bottomRightY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[1]) : 3 == $splitHorizVert_vert$$1$$.length ? ($topLeftY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[1], 
      $bottomRightY$$ = $splitHorizVert_vert$$1$$[2]) : 4 == $splitHorizVert_vert$$1$$.length && ($topLeftY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $splitHorizVert_vert$$1$$[1], $bottomRightY$$ = $splitHorizVert_vert$$1$$[2], $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[3])
    }else {
      "auto" != $horiz$$1_radius$$20_split$$1$$ && ($horiz$$1_radius$$20_split$$1$$ = D.$DvtStringUtils$$.trim($horiz$$1_radius$$20_split$$1$$).split(/\s+/), 1 == $horiz$$1_radius$$20_split$$1$$.length ? $topLeftX$$1$$ = $topRightX$$1$$ = $bottomRightX$$1$$ = $bottomLeftX$$1$$ = $topLeftY$$ = $topRightY$$ = $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[0] : 2 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $bottomRightX$$1$$ = $topLeftY$$ = $bottomRightY$$ = 
      $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[1]) : 3 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $topLeftY$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $bottomRightY$$ = $horiz$$1_radius$$20_split$$1$$[2]) : 4 == $horiz$$1_radius$$20_split$$1$$.length && 
      ($topLeftX$$1$$ = $topLeftY$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $topRightY$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $bottomRightY$$ = $horiz$$1_radius$$20_split$$1$$[2], $bottomLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[3]))
    }
  }
  return D.$DvtStatusMeterGaugeRenderer$$.$_roundedRectangle$($x$$214$$, $y$$188$$, $w$$49$$, $h$$46$$, D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topLeftX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topLeftY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topRightX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topRightY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomRightX$$1$$, 
  $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomRightY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomLeftX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomLeftY_defaultValue$$5$$, $multiplier$$2$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$ = function $$DvtStatusMeterGaugeRenderer$$$$_parseBorderRadiusItem$$($item$$25$$, $multiplier$$3$$) {
  var $radius$$21$$ = window.Math.min((0,window.parseFloat)($item$$25$$), $multiplier$$3$$ / 2);
  -1 != $item$$25$$.indexOf("%") && ($radius$$21$$ = 0.01 * window.Math.min(50, (0,window.parseFloat)($item$$25$$)) * $multiplier$$3$$);
  return $radius$$21$$ < D.$DvtStatusMeterGaugeRenderer$$.$_MIN_CORNER_RADIUS$ ? 0 : $radius$$21$$
};
D.$DvtStatusMeterGaugeRenderer$$.$_roundedRectangle$ = function $$DvtStatusMeterGaugeRenderer$$$$_roundedRectangle$$($x$$215$$, $y$$189$$, $w$$50$$, $h$$47$$, $tlcrX$$, $tlcrY$$, $trcrX$$, $trcrY$$, $brcrX$$, $brcrY$$, $blcrX$$, $blcrY$$) {
  $tlcrY$$ = window.Math.min($tlcrY$$, 0.5 * $h$$47$$);
  $trcrY$$ = window.Math.min($trcrY$$, 0.5 * $h$$47$$);
  $brcrY$$ = window.Math.min($brcrY$$, 0.5 * $h$$47$$);
  $blcrY$$ = window.Math.min($blcrY$$, 0.5 * $h$$47$$);
  $tlcrX$$ = window.Math.min($tlcrX$$, 0.5 * $w$$50$$);
  $trcrX$$ = window.Math.min($trcrX$$, 0.5 * $w$$50$$);
  $brcrX$$ = window.Math.min($brcrX$$, 0.5 * $w$$50$$);
  $blcrX$$ = window.Math.min($blcrX$$, 0.5 * $w$$50$$);
  return D.$DvtPathUtils$$.moveTo($x$$215$$ + $tlcrX$$, $y$$189$$) + D.$DvtPathUtils$$.lineTo($x$$215$$ + $w$$50$$ - $trcrX$$, $y$$189$$) + D.$DvtPathUtils$$.arcTo($trcrX$$, $trcrY$$, window.Math.PI / 2, 1, $x$$215$$ + $w$$50$$, $y$$189$$ + $trcrY$$) + D.$DvtPathUtils$$.lineTo($x$$215$$ + $w$$50$$, $y$$189$$ + $h$$47$$ - $brcrY$$) + D.$DvtPathUtils$$.arcTo($brcrX$$, $brcrY$$, window.Math.PI / 2, 1, $x$$215$$ + $w$$50$$ - $brcrX$$, $y$$189$$ + $h$$47$$) + D.$DvtPathUtils$$.lineTo($x$$215$$ + $blcrX$$, 
  $y$$189$$ + $h$$47$$) + D.$DvtPathUtils$$.arcTo($blcrX$$, $blcrY$$, window.Math.PI / 2, 1, $x$$215$$, $y$$189$$ + $h$$47$$ - $blcrY$$) + D.$DvtPathUtils$$.lineTo($x$$215$$, $y$$189$$ + $tlcrY$$) + D.$DvtPathUtils$$.arcTo($tlcrX$$, $tlcrY$$, window.Math.PI / 2, 1, $x$$215$$ + $tlcrX$$, $y$$189$$) + D.$DvtPathUtils$$.closePath()
};
D.$DvtStatusMeterGaugeIndicator$$ = function $$DvtStatusMeterGaugeIndicator$$$($gauge$$51$$, $context$$394$$, $x1$$44$$, $x2$$40$$, $y1$$34$$, $y2$$31$$) {
  this.Init($gauge$$51$$, $context$$394$$, $x1$$44$$, $x2$$40$$, $y1$$34$$, $y2$$31$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeIndicator");
D.$DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($gauge$$52$$, $context$$395$$, $x1$$45$$, $x2$$41$$, $y1$$35$$, $y2$$32$$) {
  D.$DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $context$$395$$);
  this.$_gauge$ = $gauge$$52$$;
  this.$setCoords$($x1$$45$$, $x2$$41$$, $y1$$35$$, $y2$$32$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($width$$97_x1$$46$$, $multiplier_x2$$42$$, $height$$90_y1$$36$$, $options$$165_y2$$33$$) {
  this.$_x1$ = $width$$97_x1$$46$$;
  this.$_x2$ = $multiplier_x2$$42$$;
  this.$_y1$ = $height$$90_y1$$36$$;
  this.$_y2$ = $options$$165_y2$$33$$;
  var $cmds$$20_x$$211$$ = window.Math.min($width$$97_x1$$46$$, $multiplier_x2$$42$$), $y$$185$$ = window.Math.min($height$$90_y1$$36$$, $options$$165_y2$$33$$);
  $width$$97_x1$$46$$ = window.Math.abs($width$$97_x1$$46$$ - $multiplier_x2$$42$$);
  $height$$90_y1$$36$$ = window.Math.abs($options$$165_y2$$33$$ - $height$$90_y1$$36$$);
  $options$$165_y2$$33$$ = this.$_gauge$.$getOptions$();
  $multiplier_x2$$42$$ = "vertical" == $options$$165_y2$$33$$.orientation ? $width$$97_x1$$46$$ : $height$$90_y1$$36$$;
  var $defaultValue$$3$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)(this.$_gauge$) ? "25%" : "15%", $cmds$$20_x$$211$$ = D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$($cmds$$20_x$$211$$, $y$$185$$, $width$$97_x1$$46$$, $height$$90_y1$$36$$, $options$$165_y2$$33$$.borderRadius, $multiplier_x2$$42$$, $defaultValue$$3$$);
  this.$setCmds$($cmds$$20_x$$211$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($params$$29$$) {
  $params$$29$$ && 4 == $params$$29$$.length && this.$setCoords$($params$$29$$[0], $params$$29$$[1], $params$$29$$[2], $params$$29$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$392$$, $bounds$$101$$, $startAngle$$13$$, $angleExtent$$10$$, $innerRadius$$1$$, $outerRadius$$) {
  this.Init($context$$392$$, $bounds$$101$$, $startAngle$$13$$, $angleExtent$$10$$, $innerRadius$$1$$, $outerRadius$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$393$$, $bounds$$102$$, $startAngle$$14$$, $angleExtent$$11$$, $innerRadius$$2$$, $outerRadius$$1$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$393$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$102$$, $startAngle$$14$$, $angleExtent$$11$$, $innerRadius$$2$$, $outerRadius$$1$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$103$$, $startAngle$$15$$, $angleExtent$$12$$, $innerRadius$$3$$, $outerRadius$$2$$) {
  $bounds$$103$$ && $bounds$$103$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$103$$ : $bounds$$103$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$15$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$12$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$3$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $outerRadius$$2$$;
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$(D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$103$$, $startAngle$$15$$, $angleExtent$$12$$, $innerRadius$$3$$, $outerRadius$$2$$))
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$28$$) {
  $params$$28$$ && 5 == $params$$28$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$28$$[0], $params$$28$$[1], $params$$28$$[2], $params$$28$$[3], $params$$28$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$$.newInstance = function $$DvtDialGauge$$$newInstance$($context$$379$$, $callback$$106$$, $callbackObj$$57$$) {
  var $gauge$$ = new D.$DvtDialGauge$$;
  $gauge$$.Init($context$$379$$, $callback$$106$$, $callbackObj$$57$$);
  return $gauge$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$380$$, $callback$$107$$, $callbackObj$$58$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$380$$, $callback$$107$$, $callbackObj$$58$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = null
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$126$$) {
  var $backgroundType$$ = $options$$126$$.background, $indicatorType$$ = $options$$126$$.indicator;
  "string" === typeof $backgroundType$$ && ($options$$126$$.background = D.$DvtGaugeStyleUtils$$.$getDialBackground$($backgroundType$$), $options$$126$$.background.images = $options$$126$$._backgroundImages);
  "string" === typeof $indicatorType$$ && ($options$$126$$.indicator = D.$DvtGaugeStyleUtils$$.$getDialIndicator$($indicatorType$$), $options$$126$$.indicator.images = $options$$126$$._indicatorImages);
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$126$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$92$$, $width$$83$$, $height$$77$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$92$$, $width$$83$$, $height$$77$$)
};
D.$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  D.$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$(this, this.$_container$, this.$Width$, this.$Height$);
  var $eventManager$$17$$ = this.$getEventManager$();
  $eventManager$$17$$ && $eventManager$$17$$.$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), !0);
  (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)(this, this.$_container$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$58$$, $animatedObjs_animationType$$, $animationDuration$$3$$) {
  $animatedObjs_animationType$$ = [];
  for(var $i$$612$$ = 0;$i$$612$$ < $objs$$58$$.length;$i$$612$$++) {
    var $obj$$290$$ = $objs$$58$$[$i$$612$$], $endState$$13$$ = $obj$$290$$.$getAnimationParams$(), $animation$$1_startAngle$$9$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$290$$.$setAngle$($animation$$1_startAngle$$9$$);
    $animation$$1_startAngle$$9$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $obj$$290$$, $animationDuration$$3$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$1_startAngle$$9$$.$_animator$, "typeNumberArray", $obj$$290$$, $obj$$290$$.$getAnimationParams$, $obj$$290$$.$setAnimationParams$, $endState$$13$$);
    $animation$$1_startAngle$$9$$.$_animator$.$setEasing$(function($objs$$58$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$58$$, 0.7)
    });
    $animatedObjs_animationType$$.push($animation$$1_startAngle$$9$$)
  }
  return new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs_animationType$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$198$$, $y$$173$$) {
  var $angle$$41_ratio$$13$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$173$$ - this.$__anchorPt$.y, $x$$198$$ - this.$__anchorPt$.x));
  0 >= $angle$$41_ratio$$13$$ && ($angle$$41_ratio$$13$$ += 360);
  var $isRTL$$19_minValue$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()), $angleExtent$$7_backgroundOptions$$ = this.$getOptions$().background, $startAngle$$10$$ = $isRTL$$19_minValue$$9$$ ? 180 + $angleExtent$$7_backgroundOptions$$.startAngle : 360 - $angleExtent$$7_backgroundOptions$$.startAngle, $angleExtent$$7_backgroundOptions$$ = $angleExtent$$7_backgroundOptions$$.angleExtent, $endAngle$$3$$ = $startAngle$$10$$ + $angleExtent$$7_backgroundOptions$$;
  if($isRTL$$19_minValue$$9$$) {
    $endAngle$$3$$ = $startAngle$$10$$;
    for($startAngle$$10$$ -= $angleExtent$$7_backgroundOptions$$;0 > $startAngle$$10$$;) {
      $startAngle$$10$$ += 360, $endAngle$$3$$ += 360
    }
  }
  $angle$$41_ratio$$13$$ + 360 >= $startAngle$$10$$ && $angle$$41_ratio$$13$$ + 360 <= $endAngle$$3$$ ? $angle$$41_ratio$$13$$ += 360 : $angle$$41_ratio$$13$$ >= $startAngle$$10$$ && $angle$$41_ratio$$13$$ <= $endAngle$$3$$ || ($angle$$41_ratio$$13$$ = $angle$$41_ratio$$13$$ > $endAngle$$3$$ ? $startAngle$$10$$ + 360 - $angle$$41_ratio$$13$$ < $angle$$41_ratio$$13$$ - $endAngle$$3$$ ? $startAngle$$10$$ : $endAngle$$3$$ : $startAngle$$10$$ - $angle$$41_ratio$$13$$ < $angle$$41_ratio$$13$$ + 360 - 
  $endAngle$$3$$ ? $startAngle$$10$$ : $endAngle$$3$$);
  $angle$$41_ratio$$13$$ = ($angle$$41_ratio$$13$$ - $startAngle$$10$$) / $angleExtent$$7_backgroundOptions$$;
  $isRTL$$19_minValue$$9$$ && ($angle$$41_ratio$$13$$ = 1 - $angle$$41_ratio$$13$$);
  $isRTL$$19_minValue$$9$$ = this.$Options$.min;
  return $angle$$41_ratio$$13$$ * (this.$Options$.max - $isRTL$$19_minValue$$9$$) + $isRTL$$19_minValue$$9$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$1$$, $container$$93$$, $bounds$$76_width$$84$$, $height$$78$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$1$$) ? ($bounds$$76_width$$84$$ = new D.$DvtRectangle$$(0, 0, $bounds$$76_width$$84$$, $height$$78$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$1$$, $container$$93$$, $bounds$$76_width$$84$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$1$$, $container$$93$$, $bounds$$76_width$$84$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$1$$, $container$$93$$, new D.$DvtRectangle$$(0, 0, $bounds$$76_width$$84$$, $height$$78$$))
};
D.$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$ = function $$DvtDialGaugeRenderer$$$$updateIndicatorAndLabel$$($gauge$$2$$, $container$$94$$, $width$$85$$, $height$$79$$) {
  $gauge$$2$$.$__indicatorContainer$.$setAngle$(D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$2$$, $gauge$$2$$.$getOptions$().value));
  $container$$94$$.removeChild($gauge$$2$$.$__label$);
  D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$2$$, $container$$94$$, new D.$DvtRectangle$$(0, 0, $width$$85$$, $height$$79$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$3$$, $backgroundAnchor_container$$95$$, $bounds$$77_scale$$22$$) {
  var $angleRads$$9_options$$127$$ = $gauge$$3$$.$getOptions$(), $background$$6_indicator$$7$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$3$$, $bounds$$77_scale$$22$$);
  $backgroundAnchor_container$$95$$.$addChild$($background$$6_indicator$$7$$);
  $angleRads$$9_options$$127$$.background.majorTickCount && $angleRads$$9_options$$127$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$3$$, $backgroundAnchor_container$$95$$, $bounds$$77_scale$$22$$);
  var $background$$6_indicator$$7$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$3$$, $bounds$$77_scale$$22$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$3$$.$getCtx$()), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$3$$.$getCtx$());
  $backgroundAnchor_container$$95$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($background$$6_indicator$$7$$);
  var $indicatorBounds_mat$$43$$ = $background$$6_indicator$$7$$.$getDimensions$(), $angleRads$$9_options$$127$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$3$$, $angleRads$$9_options$$127$$.value);
  $backgroundAnchor_container$$95$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$3$$, $bounds$$77_scale$$22$$);
  var $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$3$$, $indicatorBounds_mat$$43$$);
  $bounds$$77_scale$$22$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$3$$, $bounds$$77_scale$$22$$, $indicatorBounds_mat$$43$$);
  $indicatorBounds_mat$$43$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$43$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$43$$.scale($bounds$$77_scale$$22$$, $bounds$$77_scale$$22$$);
  $background$$6_indicator$$7$$.$setMatrix$($indicatorBounds_mat$$43$$);
  $rotateContainer$$.$setAngle$($angleRads$$9_options$$127$$);
  $indicatorBounds_mat$$43$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$43$$.translate($backgroundAnchor_container$$95$$.x, $backgroundAnchor_container$$95$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$43$$);
  $gauge$$3$$.$__shapes$.push($rotateContainer$$);
  $gauge$$3$$.$__indicatorContainer$ = $rotateContainer$$;
  $gauge$$3$$.$__anchorPt$ = $backgroundAnchor_container$$95$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$4$$, $bounds$$78$$) {
  var $backgroundOptions$$1$$ = $gauge$$4$$.$getOptions$().background, $isRTL$$20_radiusScale$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$4$$.$getCtx$()), $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $shape$$50_widthRes$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ ? 2 * $bounds$$78$$.$w$ : $bounds$$78$$.$w$, $heightRes_scale$$23$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ ? 2 * $bounds$$78$$.$h$ : $bounds$$78$$.$h$, $images$$10_tx$$23$$ = 
  $backgroundOptions$$1$$.images;
  if($images$$10_tx$$23$$ && 0 < $images$$10_tx$$23$$.length) {
    var $i$$613_ty$$24$$, $refWidth$$, $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ = [];
    for($i$$613_ty$$24$$ = 0;$i$$613_ty$$24$$ < $images$$10_tx$$23$$.length;$i$$613_ty$$24$$++) {
      var $imageDims$$1_isImageRTL_source$$28$$ = "rtl" == $images$$10_tx$$23$$[$i$$613_ty$$24$$].dir;
      $isRTL$$20_radiusScale$$1$$ && $imageDims$$1_isImageRTL_source$$28$$ ? $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.push($images$$10_tx$$23$$[$i$$613_ty$$24$$]) : !$isRTL$$20_radiusScale$$1$$ && !$imageDims$$1_isImageRTL_source$$28$$ && $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.push($images$$10_tx$$23$$[$i$$613_ty$$24$$])
    }
    $images$$10_tx$$23$$ = 0 < $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.length ? $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ : $images$$10_tx$$23$$;
    for($i$$613_ty$$24$$ = 0;$i$$613_ty$$24$$ < $images$$10_tx$$23$$.length;$i$$613_ty$$24$$++) {
      var $height$$80_image$$11$$ = $images$$10_tx$$23$$[$i$$613_ty$$24$$], $imageDims$$1_isImageRTL_source$$28$$ = $height$$80_image$$11$$.src, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ = $height$$80_image$$11$$.width, $height$$80_image$$11$$ = $height$$80_image$$11$$.height, $isSvg$$ = $imageDims$$1_isImageRTL_source$$28$$ && -1 < $imageDims$$1_isImageRTL_source$$28$$.search(".svg");
      0 == $i$$613_ty$$24$$ && ($refWidth$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$86$$, $refHeight$$ = $height$$80_image$$11$$);
      if($isSvg$$ || $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ >= $shape$$50_widthRes$$ && $height$$80_image$$11$$ >= $heightRes_scale$$23$$ || $i$$613_ty$$24$$ == $images$$10_tx$$23$$.length - 1) {
        var $shape$$50_widthRes$$ = new D.$DvtImage$$($gauge$$4$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$28$$, 0, 0, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$, $height$$80_image$$11$$), $matrix$$15$$ = new D.$DvtMatrix$$, $heightRes_scale$$23$$ = window.Math.min($bounds$$78$$.$w$ / $isTouchDevice$$3_locImages_metLblBounds_width$$86$$, $bounds$$78$$.$h$ / $height$$80_image$$11$$), $images$$10_tx$$23$$ = ($bounds$$78$$.$w$ - $heightRes_scale$$23$$ * $isTouchDevice$$3_locImages_metLblBounds_width$$86$$) / 
        2;
        $i$$613_ty$$24$$ = ($bounds$$78$$.$h$ - $heightRes_scale$$23$$ * $height$$80_image$$11$$) / 2;
        $matrix$$15$$.scale($heightRes_scale$$23$$, $heightRes_scale$$23$$);
        $matrix$$15$$.translate($images$$10_tx$$23$$, $i$$613_ty$$24$$);
        $shape$$50_widthRes$$.$setMatrix$($matrix$$15$$);
        $isSvg$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && ($imageDims$$1_isImageRTL_source$$28$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$4$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$28$$, D.$DvtObj$$.$createCallback$($shape$$50_widthRes$$, $shape$$50_widthRes$$.$__setDimensions$))) && $shape$$50_widthRes$$.$__setDimensions$($imageDims$$1_isImageRTL_source$$28$$);
        $bounds$$78$$.x += $images$$10_tx$$23$$;
        $bounds$$78$$.y += $i$$613_ty$$24$$;
        $bounds$$78$$.$w$ = $heightRes_scale$$23$$ * $isTouchDevice$$3_locImages_metLblBounds_width$$86$$;
        $bounds$$78$$.$h$ = $heightRes_scale$$23$$ * $height$$80_image$$11$$;
        !(0,window.isNaN)($backgroundOptions$$1$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$1$$.anchorY) && ($backgroundOptions$$1$$._anchorX = $isRTL$$20_radiusScale$$1$$ ? $bounds$$78$$.x + $bounds$$78$$.$w$ - $bounds$$78$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$ : $bounds$$78$$.x + $bounds$$78$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$, $backgroundOptions$$1$$._anchorY = $bounds$$78$$.y + $bounds$$78$$.$h$ * $backgroundOptions$$1$$.anchorY / $refHeight$$);
        $backgroundOptions$$1$$.metricLabelBounds && ($isTouchDevice$$3_locImages_metLblBounds_width$$86$$ = {}, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.width = $bounds$$78$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.width / $refWidth$$, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.height = $bounds$$78$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.height / $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.y = $bounds$$78$$.y + $bounds$$78$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.y / 
        $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.x = $isRTL$$20_radiusScale$$1$$ ? $bounds$$78$$.x + $bounds$$78$$.$w$ - $bounds$$78$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$ - $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.width : $bounds$$78$$.x + $bounds$$78$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$, $backgroundOptions$$1$$._metricLabelBounds = $isTouchDevice$$3_locImages_metLblBounds_width$$86$$);
        $isRTL$$20_radiusScale$$1$$ = window.Math.min($bounds$$78$$.$w$ / $refWidth$$, $bounds$$78$$.$h$ / $refHeight$$);
        $backgroundOptions$$1$$._radius = $backgroundOptions$$1$$.radius * $isRTL$$20_radiusScale$$1$$;
        $backgroundOptions$$1$$._tickLabelHeight = $backgroundOptions$$1$$.tickLabelHeight * $bounds$$78$$.$h$ / $refHeight$$;
        $backgroundOptions$$1$$._tickLabelWidth = $backgroundOptions$$1$$.tickLabelWidth * $bounds$$78$$.$w$ / $refWidth$$;
        return $shape$$50_widthRes$$
      }
    }
  }
  return null
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$5$$, $bounds$$79$$) {
  var $indicatorOptions$$ = $gauge$$5$$.$getOptions$().indicator, $indicatorLength_source$$29$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$5$$, $bounds$$79$$), $heightRes$$1_shape$$51$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 2 * $indicatorLength_source$$29$$ : $indicatorLength_source$$29$$, $refWidth$$1$$, $refHeight$$1$$, $images$$11$$ = $indicatorOptions$$.images;
  if($images$$11$$ && 0 < $images$$11$$.length) {
    for(var $i$$614$$ = 0;$i$$614$$ < $images$$11$$.length;$i$$614$$++) {
      var $height$$81_image$$12$$ = $images$$11$$[$i$$614$$], $indicatorLength_source$$29$$ = $height$$81_image$$12$$.src, $width$$87$$ = $height$$81_image$$12$$.width, $height$$81_image$$12$$ = $height$$81_image$$12$$.height, $isSvg$$1$$ = $indicatorLength_source$$29$$ && -1 < $indicatorLength_source$$29$$.search(".svg");
      0 == $i$$614$$ && ($refWidth$$1$$ = $width$$87$$, $refHeight$$1$$ = $height$$81_image$$12$$);
      if($isSvg$$1$$ || $height$$81_image$$12$$ >= $heightRes$$1_shape$$51$$ || $i$$614$$ == $images$$11$$.length - 1) {
        return $heightRes$$1_shape$$51$$ = new D.$DvtImage$$($gauge$$5$$.$getCtx$(), $indicatorLength_source$$29$$, 0, 0, $width$$87$$, $height$$81_image$$12$$), $isSvg$$1$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && D.$DvtImageLoader$$.$loadImage$($gauge$$5$$.$getCtx$(), $indicatorLength_source$$29$$, D.$DvtObj$$.$createCallback$($heightRes$$1_shape$$51$$, $heightRes$$1_shape$$51$$.$__setDimensions$)) && ($heightRes$$1_shape$$51$$.$setWidth$($width$$87$$), $heightRes$$1_shape$$51$$.$setHeight$($height$$81_image$$12$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$87$$ / $refWidth$$1$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$81_image$$12$$ / $refHeight$$1$$), $heightRes$$1_shape$$51$$
      }
    }
  }
  return null
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$6_startAngle$$11$$) {
  var $backgroundOptions$$2$$ = $gauge$$6_startAngle$$11$$.$getOptions$().background;
  $gauge$$6_startAngle$$11$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$6_startAngle$$11$$.$getCtx$()) ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle;
  return window.Math.PI * (90 - $gauge$$6_startAngle$$11$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$7$$, $value$$166$$) {
  var $isRTL$$22_maxValue$$9_options$$128$$ = $gauge$$7$$.$getOptions$(), $backgroundOptions$$3$$ = $isRTL$$22_maxValue$$9_options$$128$$.background, $minValue$$10_ratio$$14$$ = $isRTL$$22_maxValue$$9_options$$128$$.min, $isRTL$$22_maxValue$$9_options$$128$$ = $isRTL$$22_maxValue$$9_options$$128$$.max;
  $value$$166$$ = window.Math.max(window.Math.min($value$$166$$, $isRTL$$22_maxValue$$9_options$$128$$), $minValue$$10_ratio$$14$$);
  $minValue$$10_ratio$$14$$ = ($value$$166$$ - $minValue$$10_ratio$$14$$) / ($isRTL$$22_maxValue$$9_options$$128$$ - $minValue$$10_ratio$$14$$);
  $isRTL$$22_maxValue$$9_options$$128$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$7$$.$getCtx$());
  return window.Math.PI * (90 - (($isRTL$$22_maxValue$$9_options$$128$$ ? 180 - $backgroundOptions$$3$$.startAngle : $backgroundOptions$$3$$.startAngle) - $minValue$$10_ratio$$14$$ * ($isRTL$$22_maxValue$$9_options$$128$$ ? -$backgroundOptions$$3$$.angleExtent : $backgroundOptions$$3$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$8$$, $bounds$$80$$) {
  var $anchorY_backgroundOptions$$4$$ = $gauge$$8$$.$getOptions$().background, $anchorX$$ = $anchorY_backgroundOptions$$4$$._anchorX, $anchorY_backgroundOptions$$4$$ = $anchorY_backgroundOptions$$4$$._anchorY;
  return!(0,window.isNaN)($anchorX$$) && !(0,window.isNaN)($anchorY_backgroundOptions$$4$$) ? new D.$DvtPoint$$($anchorX$$, $anchorY_backgroundOptions$$4$$) : new D.$DvtPoint$$($bounds$$80$$.x + $bounds$$80$$.$w$ / 2, $bounds$$80$$.y + $bounds$$80$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$9$$, $bounds$$81$$) {
  var $radius$$16$$ = window.Math.min($bounds$$81$$.$w$, $bounds$$81$$.$h$) / 2;
  return $gauge$$9$$.$getOptions$().background.indicatorLength * $radius$$16$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$10$$, $indicatorBounds$$1$$) {
  var $anchorY$$1_indicatorOptions$$1$$ = $gauge$$10$$.$getOptions$().indicator, $anchorX$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorX, $anchorY$$1_indicatorOptions$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$1$$) && !(0,window.isNaN)($anchorY$$1_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$1$$, $anchorY$$1_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$11$$, $bounds$$83$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$11$$, $bounds$$83$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$12$$, $container$$96$$, $bounds$$84$$) {
  var $options$$129_size$$31$$ = $gauge$$12$$.$getOptions$();
  if("on" == $options$$129_size$$31$$.metricLabel.rendered) {
    var $labelString$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$129_size$$31$$.value, $gauge$$12$$), $minString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$129_size$$31$$.min, $gauge$$12$$), $maxString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$129_size$$31$$.max, $gauge$$12$$), $cx$$44_label$$53$$ = $bounds$$84$$.x + $bounds$$84$$.$w$ / 2, $cy$$45$$ = $bounds$$84$$.y + $bounds$$84$$.$h$ / 2, $labelWidth$$5$$ = $bounds$$84$$.$w$, $labelHeight$$4$$ = 
    $bounds$$84$$.$h$, $metricLabelBounds$$ = $options$$129_size$$31$$.background._metricLabelBounds;
    $metricLabelBounds$$ && ($cx$$44_label$$53$$ = $metricLabelBounds$$.x + $metricLabelBounds$$.width / 2, $cy$$45$$ = $metricLabelBounds$$.y + $metricLabelBounds$$.height / 2, $bounds$$84$$.$w$ = $metricLabelBounds$$.width, $bounds$$84$$.$h$ = $metricLabelBounds$$.height);
    $cx$$44_label$$53$$ = new D.$DvtOutputText$$($gauge$$12$$.$getCtx$(), $labelString$$2$$, $cx$$44_label$$53$$, $cy$$45$$);
    !$options$$129_size$$31$$.metricLabel.style.$getStyle$("color") && $options$$129_size$$31$$.background._isDark && $options$$129_size$$31$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$44_label$$53$$.$setCSSStyle$($options$$129_size$$31$$.metricLabel.style);
    $options$$129_size$$31$$ = ($options$$129_size$$31$$ = (0,window.parseInt)($options$$129_size$$31$$.metricLabel.style.$getFontSize$())) ? (0,window.parseInt)($options$$129_size$$31$$) : null;
    $options$$129_size$$31$$ || ($options$$129_size$$31$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$2$$, $minString$$, $maxString$$], $cx$$44_label$$53$$, $bounds$$84$$), $cx$$44_label$$53$$.$setTextString$($labelString$$2$$), $cx$$44_label$$53$$.$setFontSize$($options$$129_size$$31$$));
    $cx$$44_label$$53$$.$alignCenter$();
    $cx$$44_label$$53$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$44_label$$53$$, $labelWidth$$5$$, $labelHeight$$4$$, $container$$96$$) && ($gauge$$12$$.$__label$ = $cx$$44_label$$53$$)
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$13$$, $container$$97$$, $bounds$$85$$) {
  var $options$$130$$ = $gauge$$13$$.$getOptions$(), $isRTL$$23$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$13$$.$getCtx$());
  if($options$$130$$.background.radius && $options$$130$$.background.majorTickCount) {
    var $radius$$17$$ = $options$$130$$.background._radius, $minValue$$11$$ = $options$$130$$.min, $maxValue$$10$$ = $options$$130$$.max, $majorTickCount$$1$$ = $options$$130$$.background.majorTickCount, $fontSize$$9$$ = 12, $labelBounds$$7$$ = new D.$DvtRectangle$$($cx$$45_labelValue$$, $angleRads$$10_cy$$46$$, $bounds$$85$$.$w$, $bounds$$85$$.$h$), $style$$91_x$$199$$ = $options$$130$$.metricLabel.style.$getStyle$("font-size");
    $options$$130$$.background._tickLabelHeight && !$style$$91_x$$199$$ && ($labelBounds$$7$$.$h$ = $options$$130$$.background._tickLabelHeight);
    $options$$130$$.background._tickLabelWidth && !$style$$91_x$$199$$ && ($labelBounds$$7$$.$w$ = $options$$130$$.background._tickLabelWidth);
    if(!$style$$91_x$$199$$) {
      var $label$$54_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$13$$.$getCtx$(), "", $cx$$45_labelValue$$, $angleRads$$10_cy$$46$$), $fontSize$$9$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$130$$.max, $gauge$$13$$), D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$130$$.min, $gauge$$13$$)], $label$$54_labelString$$3$$, $labelBounds$$7$$)
    }
    for($style$$91_x$$199$$ = 0;$style$$91_x$$199$$ < $majorTickCount$$1$$;$style$$91_x$$199$$++) {
      var $cx$$45_labelValue$$ = $minValue$$11$$ + window.Math.abs($maxValue$$10$$ - $minValue$$11$$) * $style$$91_x$$199$$ / ($majorTickCount$$1$$ - 1);
      $isRTL$$23$$ && ($cx$$45_labelValue$$ = $minValue$$11$$ + window.Math.abs($maxValue$$10$$ - $minValue$$11$$) * ($majorTickCount$$1$$ - 1 - $style$$91_x$$199$$) / ($majorTickCount$$1$$ - 1));
      var $label$$54_labelString$$3$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$45_labelValue$$, $gauge$$13$$), $angleRads$$10_cy$$46$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$13$$, $cx$$45_labelValue$$), $anchor$$7$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$13$$, $bounds$$85$$), $cx$$45_labelValue$$ = $anchor$$7$$.x + $radius$$17$$ * window.Math.cos($angleRads$$10_cy$$46$$ - window.Math.PI / 2), $angleRads$$10_cy$$46$$ = $anchor$$7$$.y + $radius$$17$$ * 
      window.Math.sin($angleRads$$10_cy$$46$$ - window.Math.PI / 2), $label$$54_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$13$$.$getCtx$(), $label$$54_labelString$$3$$, $cx$$45_labelValue$$, $angleRads$$10_cy$$46$$);
      !$options$$130$$.tickLabel.style.$getStyle$("color") && $options$$130$$.background._isDark && $options$$130$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$54_labelString$$3$$.$setCSSStyle$($options$$130$$.tickLabel.style);
      $options$$130$$.tickLabel.style.$getStyle$("font-size") || $label$$54_labelString$$3$$.$setFontSize$($fontSize$$9$$);
      $label$$54_labelString$$3$$.$alignCenter$();
      $label$$54_labelString$$3$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$54_labelString$$3$$, $labelBounds$$7$$.$w$ + 0.5, $labelBounds$$7$$.$h$ + 0.5, $container$$97$$)
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$381$$) {
  this.Init($context$$381$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$8$$) {
  var $mat$$42$$ = new D.$DvtMatrix$$;
  $mat$$42$$.rotate($angleRads$$8$$);
  this.$setMatrix$($mat$$42$$);
  this.$_angleRads$ = $angleRads$$8$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$27$$) {
  $params$$27$$ && 1 == $params$$27$$.length && this.$setAngle$($params$$27$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$$.newInstance = function $$DvtRatingGauge$$$newInstance$($context$$387$$, $callback$$111$$, $callbackObj$$62$$) {
  var $gauge$$45$$ = new D.$DvtRatingGauge$$;
  $gauge$$45$$.Init($context$$387$$, $callback$$111$$, $callbackObj$$62$$);
  return $gauge$$45$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$388$$, $callback$$112$$, $callbackObj$$63$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$388$$, $callback$$112$$, $callbackObj$$63$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$159$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$159$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$116$$, $width$$94$$, $height$$87$$) {
  var $outerGap$$2$$ = this.$Options$.__layout.outerGap, $maxValue$$12$$ = this.$Options$.max, $isVert$$6$$ = "vertical" == this.$Options$.orientation, $preserveAspectRatio$$ = "none" != this.$Options$.preserveAspectRatio;
  this.$Options$.selectedState.source && $preserveAspectRatio$$ ? D.$DvtImageLoader$$.$loadImage$(this.$getCtx$(), this.$Options$.selectedState.source, D.$DvtObj$$.$createCallback$(this, function($preserveAspectRatio$$) {
    $preserveAspectRatio$$ && ($preserveAspectRatio$$.width && $preserveAspectRatio$$.height) && ($preserveAspectRatio$$ = $preserveAspectRatio$$.width / $preserveAspectRatio$$.height, this.$__shapeWidth$ = $isVert$$6$$ ? window.Math.min($width$$94$$ - 2 * $outerGap$$2$$, ($height$$87$$ - 2 * $outerGap$$2$$) * $preserveAspectRatio$$ / $maxValue$$12$$) : window.Math.min(($height$$87$$ - 2 * $outerGap$$2$$) * $preserveAspectRatio$$, ($width$$94$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$), this.$__shapeHeight$ = 
    this.$__shapeWidth$ / $preserveAspectRatio$$, this.$__bounds$ = $isVert$$6$$ ? new D.$DvtRectangle$$($outerGap$$2$$, ($height$$87$$ - this.$__shapeHeight$ * $maxValue$$12$$) / 2, $width$$94$$ - 2 * $outerGap$$2$$, this.$__shapeHeight$ * $maxValue$$12$$) : new D.$DvtRectangle$$(($width$$94$$ - this.$__shapeWidth$ * $maxValue$$12$$) / 2, $outerGap$$2$$, this.$__shapeWidth$ * $maxValue$$12$$, $height$$87$$ - 2 * $outerGap$$2$$), D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$116$$, $width$$94$$, 
    $height$$87$$))
  })) : ($preserveAspectRatio$$ ? this.$__shapeHeight$ = this.$__shapeWidth$ = $isVert$$6$$ ? window.Math.min($width$$94$$ - 2 * $outerGap$$2$$, ($height$$87$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$) : window.Math.min($height$$87$$ - 2 * $outerGap$$2$$, ($width$$94$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$) : (this.$__shapeWidth$ = $isVert$$6$$ ? $width$$94$$ - 2 * $outerGap$$2$$ : ($width$$94$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$, this.$__shapeHeight$ = $isVert$$6$$ ? ($height$$87$$ - 2 * $outerGap$$2$$) / 
  $maxValue$$12$$ : $height$$87$$ - 2 * $outerGap$$2$$), this.$__bounds$ = $isVert$$6$$ ? new D.$DvtRectangle$$($outerGap$$2$$, ($height$$87$$ - this.$__shapeHeight$ * $maxValue$$12$$) / 2, $width$$94$$ - 2 * $outerGap$$2$$, this.$__shapeHeight$ * $maxValue$$12$$) : new D.$DvtRectangle$$(($width$$94$$ - this.$__shapeWidth$ * $maxValue$$12$$) / 2, $outerGap$$2$$, this.$__shapeWidth$ * $maxValue$$12$$, $height$$87$$ - 2 * $outerGap$$2$$), D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$116$$, 
  $width$$94$$, $height$$87$$))
};
D.$JSCompiler_prototypeAlias$$.$__getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$__getLogicalObject$$() {
  return new D.$DvtRatingGaugePeer$$(this)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$204$$, $y$$178$$) {
  var $size$$35$$ = "vertical" == this.$Options$.orientation ? this.$__shapeHeight$ : this.$__shapeWidth$;
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    if("vertical" == this.$Options$.orientation) {
      $y$$178$$ = window.Math.max(window.Math.min($y$$178$$, this.$__bounds$.y + this.$__bounds$.$h$), this.$__bounds$.y), $val$$70$$ = window.Math.max((this.$__bounds$.y + this.$__bounds$.$h$ - $y$$178$$) / $size$$35$$, this.$Options$.min)
    }else {
      $x$$204$$ = window.Math.max(window.Math.min($x$$204$$, this.$__bounds$.x + this.$__bounds$.$w$), this.$__bounds$.x);
      var $val$$70$$ = 0, $val$$70$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? window.Math.max((this.$__bounds$.x + this.$__bounds$.$w$ - $x$$204$$) / $size$$35$$, this.$Options$.min) : window.Math.max(($x$$204$$ - this.$__bounds$.x) / $size$$35$$, this.$Options$.min)
    }
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$70$$)
  }
  return null
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$206$$, $y$$180$$) {
  this.$__processValueChangeMove$($x$$206$$, $y$$180$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$207$$, $y$$181$$) {
  var $value$$176$$ = this.$GetValueAt$($x$$207$$, $y$$181$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$176$$, "hover");
  this.dispatchEvent(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$176$$, !1))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$208$$, $y$$182$$) {
  var $oldValue$$5$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$208$$, $y$$182$$);
  this.$Options$.changed = !0;
  this.$render$();
  this.dispatchEvent(new D.$DvtValueChangeEvent$$($oldValue$$5$$, this.$Options$.value, !1));
  this.dispatchEvent(new D.$DvtValueChangeEvent$$($oldValue$$5$$, this.$Options$.value, !0))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $value$$177$$, $hoverClip_proc_selContainer_unselContainer$$, $container$$117$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$117$$ || ($container$$117$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$24_selClip_unselClip$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods___updateClipRects$self$$.$getCtx$()), $isVert$$7$$ = "vertical" == $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.orientation, $size$$36$$ = $isVert$$7$$ ? $JSCompiler_StaticMethods___updateClipRects$self$$.$__shapeHeight$ : $JSCompiler_StaticMethods___updateClipRects$self$$.$__shapeWidth$;
    $value$$177$$ = window.Math.max(window.Math.min($value$$177$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$56_hoverContainer$$ = 0, $b$$41$$ = $value$$177$$ * $size$$36$$, $c$$23$$ = $value$$177$$ * $size$$36$$;
    "render" == $hoverClip_proc_selContainer_unselContainer$$ && ($a$$56_hoverContainer$$ = $value$$177$$ * $size$$36$$, $b$$41$$ = 0);
    $isVert$$7$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$ - 
    $c$$23$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$ - $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$, $a$$56_hoverContainer$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y + $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$ - $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$, $b$$41$$)) : $isRTL$$24_selClip_unselClip$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = 
    new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, 
    $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$)) : ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x + $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = 
    $container$$117$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $isRTL$$24_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($a$$56_hoverContainer$$, $hoverClip_proc_selContainer_unselContainer$$);
    (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)($JSCompiler_StaticMethods___updateClipRects$self$$, $container$$117$$, $value$$177$$)
  }
};
D.$DvtRatingGauge$$.prototype.$CreateEventManager$ = function $$DvtRatingGauge$$$$$CreateEventManager$$() {
  return new D.$DvtRatingGaugeEventManager$$(this)
};
D.$DvtRatingGaugeDefaults$$ = function $$DvtRatingGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtRatingGaugeDefaults$VERSION_1$$, alta:D.$DvtRatingGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtRatingGaugeDefaults");
D.$DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:null}, selectedState:{shape:"star", color:"#F8C15A", borderColor:null}, hoverState:{shape:"star", color:"#007CC8", borderColor:null}, changedState:{shape:"star", color:"#ED2C02", borderColor:null}};
D.$DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, orientation:"horizontal", unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, preserveAspectRatio:"meet", step:1};
D.$DvtRatingGaugePeer$$ = function $$DvtRatingGaugePeer$$$($gauge$$47$$) {
  this.Init();
  this.$_gauge$ = $gauge$$47$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugePeer$$, D.$DvtSimpleObjPeer$$, "DvtRatingGaugePeer");
D.$DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($options$$160_target$$115$$, $threshold$$11_thresholdIndex$$5_x$$209$$, $y$$183$$) {
  $options$$160_target$$115$$ = this.$_gauge$.$getOptions$();
  $threshold$$11_thresholdIndex$$5_x$$209$$ = this.$_gauge$.$getEventManager$().$IsMouseEditing$ ? D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($threshold$$11_thresholdIndex$$5_x$$209$$, $y$$183$$)) : D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
  return($threshold$$11_thresholdIndex$$5_x$$209$$ = D.$DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $threshold$$11_thresholdIndex$$5_x$$209$$)) && $threshold$$11_thresholdIndex$$5_x$$209$$.shortDesc ? $threshold$$11_thresholdIndex$$5_x$$209$$.shortDesc : $options$$160_target$$115$$.shortDesc
};
D.$DvtRatingGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeRenderer$$, D.$DvtObj$$, "DvtRatingGaugeRenderer");
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$48$$, $container$$118$$, $options$$161_width$$95$$, $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$48$$)) {
    $options$$161_width$$95$$ = $gauge$$48$$.$getOptions$();
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$48$$);
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$48$$, $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$);
    var $selectedColor_selectedOptions$$ = $options$$161_width$$95$$.selectedState.color, $changedColor_changedOptions$$ = $options$$161_width$$95$$.changedState.color, $selectedBorderColor$$ = $options$$161_width$$95$$.selectedState.borderColor, $changedBorderColor_hoverOptions$$ = $options$$161_width$$95$$.changedState.borderColor;
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ && $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.color && ($changedColor_changedOptions$$ = $selectedColor_selectedOptions$$ = $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.color);
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ && $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.borderColor && ($changedBorderColor_hoverOptions$$ = $selectedBorderColor$$ = $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.borderColor);
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ = {value:0, type:$options$$161_width$$95$$.unselectedState.shape, color:$options$$161_width$$95$$.unselectedState.color, borderColor:$options$$161_width$$95$$.unselectedState.borderColor, visualEffects:$options$$161_width$$95$$.visualEffects, source:$options$$161_width$$95$$.unselectedState.source};
    $selectedColor_selectedOptions$$ = {value:0, type:$options$$161_width$$95$$.selectedState.shape, color:$selectedColor_selectedOptions$$, borderColor:$selectedBorderColor$$, visualEffects:$options$$161_width$$95$$.visualEffects, source:$options$$161_width$$95$$.selectedState.source};
    $changedColor_changedOptions$$ = {value:0, type:$options$$161_width$$95$$.changedState.shape, color:$changedColor_changedOptions$$, borderColor:$changedBorderColor_hoverOptions$$, visualEffects:$options$$161_width$$95$$.visualEffects, source:$options$$161_width$$95$$.changedState.source};
    $changedBorderColor_hoverOptions$$ = {value:0, type:$options$$161_width$$95$$.hoverState.shape, color:$options$$161_width$$95$$.hoverState.color, borderColor:$options$$161_width$$95$$.hoverState.borderColor, visualEffects:$options$$161_width$$95$$.visualEffects, source:$options$$161_width$$95$$.hoverState.source};
    "dot" == $options$$161_width$$95$$.unselectedState.shape && ($height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.type = "circle", $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.visualEffects = "none", $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.size = 0.05);
    D.$DvtRatingGaugeRenderer$$.$_createShapes$($gauge$$48$$, $container$$118$$, $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$);
    D.$DvtRatingGaugeRenderer$$.$_createShapes$($gauge$$48$$, $container$$118$$, $options$$161_width$$95$$.changed ? $changedColor_changedOptions$$ : $selectedColor_selectedOptions$$);
    D.$DvtRatingGaugeRenderer$$.$_createShapes$($gauge$$48$$, $container$$118$$, $changedBorderColor_hoverOptions$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$48$$, $options$$161_width$$95$$.value, "render", $container$$118$$)
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$48$$, $container$$118$$, new D.$DvtRectangle$$(0, 0, $options$$161_width$$95$$, $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$))
  }
};
D.$DvtRatingGaugeRenderer$$.$_createShapes$ = function $$DvtRatingGaugeRenderer$$$$_createShapes$$($gauge$$49_shapeHeight$$, $container$$119_options$$162$$, $stateOptions$$) {
  var $context$$389$$ = $gauge$$49_shapeHeight$$.$getCtx$(), $shapesContainer$$1$$ = new D.$DvtContainer$$($context$$389$$);
  $container$$119_options$$162$$.$addChild$($shapesContainer$$1$$);
  $container$$119_options$$162$$ = $gauge$$49_shapeHeight$$.$getOptions$();
  var $bounds$$100$$ = $gauge$$49_shapeHeight$$.$__bounds$, $shapeWidth$$ = $gauge$$49_shapeHeight$$.$__shapeWidth$;
  $gauge$$49_shapeHeight$$ = $gauge$$49_shapeHeight$$.$__shapeHeight$;
  for(var $i$$618$$ = 0;$i$$618$$ < $container$$119_options$$162$$.max;$i$$618$$++) {
    var $cx$$49$$, $cy$$50$$;
    "vertical" == $container$$119_options$$162$$.orientation ? ($cx$$49$$ = $bounds$$100$$.x + $bounds$$100$$.$w$ / 2 - $shapeWidth$$ / 2, $cy$$50$$ = $bounds$$100$$.y + $bounds$$100$$.$h$ - ($i$$618$$ + 1) * $gauge$$49_shapeHeight$$) : ($cx$$49$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$389$$) ? $bounds$$100$$.x + $bounds$$100$$.$w$ - ($i$$618$$ + 1) * $shapeWidth$$ : $bounds$$100$$.x + $i$$618$$ * $shapeWidth$$, $cy$$50$$ = $bounds$$100$$.y + $bounds$$100$$.$h$ / 2 - $gauge$$49_shapeHeight$$ / 
    2);
    var $shape$$54$$;
    $stateOptions$$.source ? $shape$$54$$ = new D.$DvtImageMarker$$($context$$389$$, $cx$$49$$ + $shapeWidth$$ / 2, $cy$$50$$ + $gauge$$49_shapeHeight$$ / 2, $shapeWidth$$, $gauge$$49_shapeHeight$$, $stateOptions$$.source) : "none" != $stateOptions$$.type && ($shape$$54$$ = (0,D.$DvtLedGauge$newInstance$$)($context$$389$$, null, null, !0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($shape$$54$$, $cx$$49$$, $cy$$50$$), $shape$$54$$.$render$($stateOptions$$, $shapeWidth$$, $gauge$$49_shapeHeight$$));
    $shape$$54$$ && $shapesContainer$$1$$.$addChild$($shape$$54$$)
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$46$$) {
  this.Init($gauge$$46$$.$getCtx$(), $gauge$$46$$.dispatchEvent, $gauge$$46$$);
  this.$_gauge$ = $gauge$$46$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$506$$) {
  if(!1 === this.$_gauge$.$getOptions$().readOnly) {
    var $coords$$31$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$506$$.pageX, $event$$506$$.pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$31$$.x, $coords$$31$$.y);
    this.$IsMouseEditing$ = !0
  }
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$506$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$507$$) {
  if(!1 === this.$_gauge$.$getOptions$().readOnly) {
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$507$$.pageX, $event$$507$$.pageY);
    var $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6320$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$inline_6320$$, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6320$$.$Options$.value, "render");
    $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6320$$.dispatchEvent(new D.$DvtValueChangeEvent$$($JSCompiler_StaticMethods___processHoverEnd$self$$inline_6320$$.$Options$.value, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6320$$.$Options$.value, !1));
    this.$IsMouseEditing$ = !1
  }
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$507$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$508$$) {
  var $coords$$33$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$508$$.pageX, $event$$508$$.pageY);
  !1 === this.$_gauge$.$getOptions$().readOnly && (!this.$IsMouseEditing$ && this.$_gauge$.$getOptions$().value != this.$_gauge$.$GetValueAt$($coords$$33$$.x, $coords$$33$$.y)) && (this.$IsMouseEditing$ = !0);
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$508$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$509$$) {
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$509$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$510$$) {
  this.$IsMouseEditing$ = !1;
  return D.$DvtRatingGaugeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$510$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(!0);

  return D;
});