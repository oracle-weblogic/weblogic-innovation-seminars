/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtAxis$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtAxis", D.$DvtAxis$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxis$$, D.$DvtBaseComponent$$, "DvtAxis");
D.$DvtAxis$$.newInstance = function $$DvtAxis$$$newInstance$($context$$4$$, $callback$$38$$, $callbackObj$$1$$) {
  var $axis$$46$$ = new D.$DvtAxis$$;
  $axis$$46$$.Init($context$$4$$, $callback$$38$$, $callbackObj$$1$$);
  return $axis$$46$$
};
D.$DvtAxis$getDefaults$$ = function $$DvtAxis$getDefaults$$$($skin$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtAxisDefaults$$, $skin$$)
};
D.$DvtAxis$$.getDefaults = D.$DvtAxis$getDefaults$$;
D.$DvtAxis$$.prototype.Init = function $$DvtAxis$$$$Init$($context$$5$$, $callback$$39$$, $callbackObj$$2$$) {
  D.$DvtAxis$$.$superclass$.Init.call(this, $context$$5$$, $callback$$39$$, $callbackObj$$2$$);
  this.$Defaults$ = new D.$DvtAxisDefaults$$;
  this.$_eventManager$ = new D.$DvtAxisEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtAxisKeyboardHandler$$(this.$_eventManager$, this));
  this.$_bounds$ = null
};
D.$DvtAxis$$.prototype.$SetOptions$ = function $$DvtAxis$$$$$SetOptions$$($options$$7$$) {
  $options$$7$$ ? this.$Options$ = "off" == $options$$7$$.rendered ? $options$$7$$ : this.$Defaults$.$calcOptions$($options$$7$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtAxis$$.prototype.$getPreferredSize$ = function $$DvtAxis$$$$$getPreferredSize$$($options$$8$$, $maxWidth$$1$$, $maxHeight$$) {
  this.$SetOptions$($options$$8$$);
  return D.$DvtAxisRenderer$$.$getPreferredSize$(this, $maxWidth$$1$$, $maxHeight$$)
};
D.$DvtAxis$$.prototype.$render$ = function $$DvtAxis$$$$$render$$($options$$9$$, $width$$31$$, $height$$34$$, $x$$66$$, $y$$47$$) {
  this.$SetOptions$($options$$9$$);
  this.$_navigablePeers$ = [];
  this.$Width$ = $width$$31$$;
  this.$Height$ = $height$$34$$;
  this.$removeChildren$();
  $x$$66$$ || ($x$$66$$ = 0);
  $y$$47$$ || ($y$$47$$ = 0);
  D.$DvtAxisRenderer$$.$render$(this, new D.$DvtRectangle$$($x$$66$$, $y$$47$$, $width$$31$$, $height$$34$$))
};
D.$DvtAxis$$.prototype.render = D.$DvtAxis$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__registerObject$ = function $$JSCompiler_prototypeAlias$$$$__registerObject$$($peer$$) {
  (null != $peer$$.$getDatatip$() || null != $peer$$.$getAction$() || $peer$$.$isDrillable$()) && this.$_navigablePeers$.push($peer$$)
};
D.$JSCompiler_prototypeAlias$$.$isNavigable$ = function $$JSCompiler_prototypeAlias$$$$isNavigable$$() {
  return 0 < this.$_navigablePeers$.length
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocus$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocus$$() {
  return null != this.$_eventManager$ ? this.$_eventManager$.$getFocus$() : null
};
D.$JSCompiler_prototypeAlias$$.$setKeyboardFocus$ = function $$JSCompiler_prototypeAlias$$$$setKeyboardFocus$$($navigable$$, $isShowingFocusEffect$$) {
  if(null != this.$_eventManager$) {
    for(var $focus_peers$$ = this.$_navigablePeers$, $displayable$$1_id$$20$$ = $navigable$$.getId(), $matchFound$$ = !1, $i$$99$$ = 0;$i$$99$$ < $focus_peers$$.length;$i$$99$$++) {
      var $otherId$$ = $focus_peers$$[$i$$99$$].getId();
      if($displayable$$1_id$$20$$ instanceof window.Array && $otherId$$ instanceof window.Array && D.$DvtArrayUtils$$.$equals$($displayable$$1_id$$20$$, $otherId$$) || $displayable$$1_id$$20$$ === $otherId$$) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_eventManager$, $focus_peers$$[$i$$99$$]);
        $matchFound$$ = !0;
        $isShowingFocusEffect$$ && $focus_peers$$[$i$$99$$].$showKeyboardFocusEffect$();
        break
      }
    }
    $matchFound$$ || (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_eventManager$, this.$_eventManager$.$KeyboardHandler$.$getDefaultNavigable$($focus_peers$$));
    if($focus_peers$$ = this.$getKeyboardFocus$()) {
      $displayable$$1_id$$20$$ = $focus_peers$$.$getDisplayable$(), $displayable$$1_id$$20$$.$setAriaProperty$("label", $focus_peers$$.$getAriaLabel$()), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$getCtx$(), $displayable$$1_id$$20$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$99$$, $source$$8$$) {
  this === $source$$8$$ && this.dispatchEvent($event$$99$$)
};
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$getInfo$ = (0,D.$JSCompiler_get$$)("$Info$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = null);
  D.$DvtAxis$$.$superclass$.$destroy$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new D.$DvtAxisAutomation$$(this)
};
D.$DvtAxis$$.prototype.getAutomation = D.$DvtAxis$$.prototype.$getAutomation$;
D.$DvtAxisConstants$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisConstants$$, D.$DvtObj$$, "DvtAxisConstants");
D.$DvtAxisConstants$$.$TICK_LABEL$ = "tickLabel";
D.$DvtAxisConstants$$.$TITLE$ = "title";
D.$DvtAbstractAxisValueFormatter$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractAxisValueFormatter$$, D.$DvtObj$$, "DvtAbstractAxisValueFormatter");
D.$DvtAbstractAxisValueFormatter$$.prototype.$format$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAxisAutomation$$ = function $$DvtAxisAutomation$$$($dvtComponent$$) {
  this.$_axis$ = $dvtComponent$$;
  this.$_options$ = this.$_axis$.$getOptions$();
  this.$_axisInfo$ = this.$_axis$.$getInfo$()
};
(0,D.$goog$exportPath_$$)("DvtAxisAutomation", D.$DvtAxisAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisAutomation$$, D.$DvtAutomation$$, "DvtAxisAutomation");
D.$DvtAxisAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtAxisAutomation$$$$$GetSubIdForDomElement$$($displayable$$2_level$$34$$) {
  var $labelIndex_logicalObj$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_axis$.$getEventManager$(), $displayable$$2_level$$34$$);
  if($labelIndex_logicalObj$$ && $labelIndex_logicalObj$$ instanceof D.$DvtSimpleObjPeer$$) {
    if($labelIndex_logicalObj$$.$_params$.type == D.$DvtAxisConstants$$.$TITLE$) {
      return"title"
    }
    if(this.$_options$.groups) {
      $displayable$$2_level$$34$$ = $labelIndex_logicalObj$$.$_params$.level;
      for(var $labelIndex_logicalObj$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this.$_axisInfo$, $labelIndex_logicalObj$$.$_params$.index, $displayable$$2_level$$34$$), $indexList$$ = "", $levelIdx$$ = 0;$levelIdx$$ <= $displayable$$2_level$$34$$;$levelIdx$$++) {
        for(var $labels$$1$$ = this.$_axisInfo$.$getLabels$(this.$_axis$.$getCtx$(), $levelIdx$$), $i$$100$$ = 0;$i$$100$$ < $labels$$1$$.length;$i$$100$$++) {
          var $index$$101$$ = (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($labels$$1$$[$i$$100$$]);
          (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this.$_axisInfo$, $index$$101$$, $levelIdx$$) <= $labelIndex_logicalObj$$ && this.$_axisInfo$.$getEndIndex$($index$$101$$, $levelIdx$$) >= $labelIndex_logicalObj$$ && ($indexList$$ += "[" + this.$_axisInfo$.$getPosition$($index$$101$$, $levelIdx$$) + "]")
        }
      }
      if(0 < $indexList$$.length) {
        return"item" + $indexList$$
      }
    }
  }
  return null
};
D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtAxisAutomation$$$$$getDomElementForSubId$$($subId$$1_title$$8$$) {
  if("title" == $subId$$1_title$$8$$) {
    if($subId$$1_title$$8$$ = this.$_axisInfo$.$getTitle$()) {
      return $subId$$1_title$$8$$.$getElem$()
    }
  }else {
    if(this.$_axisInfo$ instanceof D.$DvtGroupAxisInfo$$) {
      for(var $labelLevel$$ = $subId$$1_title$$8$$.split("[").length - 1 - 1, $labelIndex$$1$$ = 0, $startIndex$$11$$ = 0, $levelIdx$$1$$ = 0;$levelIdx$$1$$ <= $labelLevel$$;$levelIdx$$1$$++) {
        var $closeParen_labels$$2$$ = $subId$$1_title$$8$$.indexOf("]"), $groupIndex$$ = $subId$$1_title$$8$$.substring($subId$$1_title$$8$$.indexOf("[") + 1, $closeParen_labels$$2$$);
        $subId$$1_title$$8$$ = $subId$$1_title$$8$$.substring($closeParen_labels$$2$$ + 1);
        for(var $closeParen_labels$$2$$ = this.$_axisInfo$.$getLabels$(this.$_axis$.$getCtx$(), $levelIdx$$1$$), $index$$102$$, $i$$101_j$$16$$ = 0;$i$$101_j$$16$$ < $closeParen_labels$$2$$.length;$i$$101_j$$16$$++) {
          if($index$$102$$ = (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($closeParen_labels$$2$$[$i$$101_j$$16$$]), (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this.$_axisInfo$, $index$$102$$, $levelIdx$$1$$) == $startIndex$$11$$) {
            $labelIndex$$1$$ = $index$$102$$;
            break
          }
        }
        for($i$$101_j$$16$$ = $labelIndex$$1$$;$i$$101_j$$16$$ < $closeParen_labels$$2$$.length;$i$$101_j$$16$$++) {
          if($index$$102$$ = (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($closeParen_labels$$2$$[$i$$101_j$$16$$]), this.$_axisInfo$.$getPosition$($index$$102$$, $levelIdx$$1$$) == $groupIndex$$) {
            if(0 == $subId$$1_title$$8$$.length) {
              return $closeParen_labels$$2$$[$i$$101_j$$16$$].$getElem$()
            }
            $startIndex$$11$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this.$_axisInfo$, $index$$102$$, $levelIdx$$1$$);
            break
          }
        }
      }
    }
  }
  return null
};
D.$DvtAxisAutomation$$.prototype.getDomElementForSubId = D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtAxisDefaults$$ = function $$DvtAxisDefaults$$$() {
  this.Init({skyros:D.$DvtAxisDefaults$VERSION_1$$, alta:D.$DvtAxisDefaults$SKIN_ALTA$$, next:D.$DvtAxisDefaults$SKIN_NEXT$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAxisDefaults");
D.$DvtAxisDefaults$SKIN_NEXT$$ = {skin:"next", layout:{titleGap:6}};
D.$DvtAxisDefaults$SKIN_ALTA$$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)", baselineColor:"auto"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; white-space:normal;")}, titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
D.$DvtAxisDefaults$VERSION_1$$ = {position:null, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, titleStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px; color: #737373;"), 
startGroupOffset:0, endGroupOffset:0, layout:{titleGap:4, radialLabelGap:5, insideLabelGapWidth:4, insideLabelGapHeight:2, hierarchicalLabelGapHeight:8, hierarchicalLabelGapWidth:15}, _locale:"en-us"};
D.$DvtAxisDefaults$getGapSize$$ = function $$DvtAxisDefaults$getGapSize$$$($context$$6_scalingFactor$$, $options$$10$$, $defaultSize$$) {
  $context$$6_scalingFactor$$ = window.Math.min(D.$DvtTextUtils$$.$getTextStringHeight$($context$$6_scalingFactor$$, $options$$10$$.tickLabel.style) / 14, 1);
  return window.Math.ceil($defaultSize$$ * $context$$6_scalingFactor$$)
};
D.$DvtAxisEventManager$$ = function $$DvtAxisEventManager$$$($axis$$47$$) {
  this.Init($axis$$47$$.$getCtx$(), $axis$$47$$.$processEvent$, $axis$$47$$);
  this.$_axis$ = $axis$$47$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisEventManager$$, D.$DvtEventManager$$, "DvtAxisEventManager");
D.$DvtAxisEventManager$getUIParams$$ = function $$DvtAxisEventManager$getUIParams$$$($type$$59$$, $id$$21$$, $index$$103$$, $level$$35$$) {
  return{type:$type$$59$$, id:$id$$21$$, index:$index$$103$$, level:$level$$35$$}
};
D.$DvtAxisEventManager$$.prototype.$OnClick$ = function $$DvtAxisEventManager$$$$$OnClick$$($event$$100$$) {
  D.$DvtAxisEventManager$$.$superclass$.$OnClick$.call(this, $event$$100$$);
  var $obj$$48$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$100$$.target);
  $obj$$48$$ && this.$processActionEvent$($obj$$48$$) && $event$$100$$.stopPropagation()
};
D.$DvtAxisEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtAxisEventManager$$$$$HandleTouchClickInternal$$($evt$$16_touchEvent$$) {
  var $obj$$49$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$16_touchEvent$$.target);
  $obj$$49$$ && ($evt$$16_touchEvent$$ = $evt$$16_touchEvent$$.$touchEvent$, this.$processActionEvent$($obj$$49$$) && $evt$$16_touchEvent$$ && $evt$$16_touchEvent$$.preventDefault())
};
D.$DvtAxisEventManager$$.prototype.$processActionEvent$ = function $$DvtAxisEventManager$$$$$processActionEvent$$($obj$$50$$) {
  return $obj$$50$$ && $obj$$50$$.$getAction$ && $obj$$50$$.$getAction$() ? (this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$50$$.$getAction$(), $obj$$50$$.getId()), this.$_axis$), !0) : $obj$$50$$ instanceof D.$DvtAxisObjPeer$$ && $obj$$50$$.$isDrillable$() ? (this.$FireEvent$(new D.$DvtDrillEvent$$($obj$$50$$.getId(), null, $obj$$50$$.$getGroup$()), this.$_axis$), !0) : !1
};
D.$DvtAxisKeyboardHandler$$ = function $$DvtAxisKeyboardHandler$$$($manager$$, $axis$$48$$) {
  this.Init($manager$$, $axis$$48$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtAxisKeyboardHandler");
D.$DvtAxisKeyboardHandler$$.prototype.Init = function $$DvtAxisKeyboardHandler$$$$Init$($manager$$1$$, $axis$$49$$) {
  D.$DvtAxisKeyboardHandler$$.$superclass$.Init.call(this, $manager$$1$$);
  this.$_axis$ = $axis$$49$$
};
D.$DvtAxisKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtAxisKeyboardHandler$$$$$processKeyDown$$($event$$101$$) {
  var $keyCode$$11_navigables$$ = $event$$101$$.keyCode, $currentNavigable$$ = this.$_eventManager$.$getFocus$(), $nextNavigable$$ = null;
  9 == $keyCode$$11_navigables$$ ? ($currentNavigable$$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$101$$), $nextNavigable$$ = $currentNavigable$$), $keyCode$$11_navigables$$ = this.$_axis$.$_navigablePeers$, 0 < $keyCode$$11_navigables$$.length && ((0,D.$DvtEventManager$consumeEvent$$)($event$$101$$), $nextNavigable$$ = this.$getDefaultNavigable$($keyCode$$11_navigables$$))) : 13 == $keyCode$$11_navigables$$ ? $currentNavigable$$ && (this.$_eventManager$.$processActionEvent$($currentNavigable$$), 
  (0,D.$DvtEventManager$consumeEvent$$)($event$$101$$)) : $nextNavigable$$ = D.$DvtAxisKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$101$$);
  return $nextNavigable$$
};
D.$DvtAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisRenderer$$, D.$DvtObj$$, "DvtAxisRenderer");
D.$DvtAxisRenderer$$.$getPreferredSize$ = function $$DvtAxisRenderer$$$$getPreferredSize$$($axis$$52_innerLabelWidth_innerLabels$$, $availWidth$$4$$, $availHeight$$4$$) {
  var $axisInfo$$1_outerLabelWidth_outerLabels$$ = D.$DvtAxisRenderer$$.$_createAxisInfo$($axis$$52_innerLabelWidth_innerLabels$$, new D.$DvtRectangle$$(0, 0, $availWidth$$4$$, $availHeight$$4$$)), $context$$12$$ = $axis$$52_innerLabelWidth_innerLabels$$.$getCtx$(), $labelHeight$$1_options$$13$$ = $axis$$52_innerLabelWidth_innerLabels$$.$getOptions$(), $size$$14$$ = 0, $bHoriz$$ = "top" == $labelHeight$$1_options$$13$$.position || "bottom" == $labelHeight$$1_options$$13$$.position;
  if("off" == $labelHeight$$1_options$$13$$.rendered || 0 >= $availWidth$$4$$ || 0 >= $availHeight$$4$$) {
    return $bHoriz$$ ? new D.$DvtDimension$$($availWidth$$4$$, 0) : new D.$DvtDimension$$(0, $availHeight$$4$$)
  }
  $labelHeight$$1_options$$13$$.title && ($size$$14$$ = D.$DvtTextUtils$$.$getTextStringHeight$($context$$12$$, $labelHeight$$1_options$$13$$.titleStyle) + D.$DvtAxisRenderer$$.$_getTitleGap$($axis$$52_innerLabelWidth_innerLabels$$));
  "on" == $labelHeight$$1_options$$13$$.tickLabel.rendered && "inside" != $labelHeight$$1_options$$13$$.tickLabel.position && ($bHoriz$$ ? ($labelHeight$$1_options$$13$$ = D.$DvtTextUtils$$.$getTextStringHeight$($context$$12$$, $labelHeight$$1_options$$13$$.tickLabel.style), $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtDataAxisInfo$$ ? $size$$14$$ += $labelHeight$$1_options$$13$$ : $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtTimeAxisInfo$$ ? $size$$14$$ += null != $axisInfo$$1_outerLabelWidth_outerLabels$$.$getLabels$($context$$12$$, 
  1) ? 2 * $labelHeight$$1_options$$13$$ : $labelHeight$$1_options$$13$$ : $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtGroupAxisInfo$$ && ($size$$14$$ = D.$DvtAxisRenderer$$.$_getGroupAxisPreferredSize$($axis$$52_innerLabelWidth_innerLabels$$, $axisInfo$$1_outerLabelWidth_outerLabels$$, $size$$14$$, $availHeight$$4$$, $bHoriz$$))) : $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtDataAxisInfo$$ ? $size$$14$$ += D.$DvtTextUtils$$.$getMaxTextDimensions$($axisInfo$$1_outerLabelWidth_outerLabels$$.$getLabels$($context$$12$$)).$w$ : 
  $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtTimeAxisInfo$$ ? ($axis$$52_innerLabelWidth_innerLabels$$ = $axisInfo$$1_outerLabelWidth_outerLabels$$.$getLabels$($context$$12$$), $axis$$52_innerLabelWidth_innerLabels$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($axis$$52_innerLabelWidth_innerLabels$$).$w$, $axisInfo$$1_outerLabelWidth_outerLabels$$ = $axisInfo$$1_outerLabelWidth_outerLabels$$.$getLabels$($context$$12$$, 1), $axisInfo$$1_outerLabelWidth_outerLabels$$ = null != $axisInfo$$1_outerLabelWidth_outerLabels$$ ? 
  D.$DvtTextUtils$$.$getMaxTextDimensions$($axisInfo$$1_outerLabelWidth_outerLabels$$).$w$ : 0, $size$$14$$ += window.Math.max($axis$$52_innerLabelWidth_innerLabels$$, $axisInfo$$1_outerLabelWidth_outerLabels$$)) : $axisInfo$$1_outerLabelWidth_outerLabels$$ instanceof D.$DvtGroupAxisInfo$$ && ($size$$14$$ = D.$DvtAxisRenderer$$.$_getGroupAxisPreferredSize$($axis$$52_innerLabelWidth_innerLabels$$, $axisInfo$$1_outerLabelWidth_outerLabels$$, $size$$14$$, $availWidth$$4$$, $bHoriz$$)));
  return $bHoriz$$ ? new D.$DvtDimension$$($availWidth$$4$$, window.Math.min($size$$14$$, $availHeight$$4$$)) : new D.$DvtDimension$$(window.Math.min($size$$14$$, $availWidth$$4$$), $availHeight$$4$$)
};
D.$DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($axis$$53$$, $availSpace$$3$$) {
  var $axisInfo$$2$$ = D.$DvtAxisRenderer$$.$_createAxisInfo$($axis$$53$$, $availSpace$$3$$);
  "off" != $axis$$53$$.$getOptions$().rendered && ($axis$$53$$.$__setBounds$($availSpace$$3$$.$clone$()), D.$DvtAxisRenderer$$.$_renderTitle$($axis$$53$$, $axisInfo$$2$$, $availSpace$$3$$), D.$DvtAxisRenderer$$.$_renderLabels$($axis$$53$$, $axisInfo$$2$$, $availSpace$$3$$))
};
D.$DvtAxisRenderer$$.$_createAxisInfo$ = function $$DvtAxisRenderer$$$$_createAxisInfo$$($axis$$54$$, $availSpace$$4$$) {
  var $axisInfo$$3$$ = (0,D.$DvtAxisInfo$newInstance$$)($axis$$54$$.$getCtx$(), $axis$$54$$.$getOptions$(), $availSpace$$4$$);
  return $axis$$54$$.$Info$ = $axisInfo$$3$$
};
D.$DvtAxisRenderer$$.$_getTitleGap$ = function $$DvtAxisRenderer$$$$_getTitleGap$$($axis$$55$$) {
  var $options$$15$$ = $axis$$55$$.$getOptions$();
  return(0,D.$DvtAxisDefaults$getGapSize$$)($axis$$55$$.$getCtx$(), $options$$15$$, $options$$15$$.layout.titleGap)
};
D.$DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($axis$$56_isRTL$$1$$, $axisInfo$$4$$, $availSpace$$5$$) {
  var $options$$16_title$$10$$ = $axis$$56_isRTL$$1$$.$getOptions$();
  if($options$$16_title$$10$$.title) {
    var $position$$2$$ = $options$$16_title$$10$$.position;
    if(!("radial" == $position$$2$$ || "tangential" == $position$$2$$)) {
      var $bHoriz$$1_gap$$1$$ = "top" == $options$$16_title$$10$$.position || "bottom" == $options$$16_title$$10$$.position;
      if($options$$16_title$$10$$ = D.$DvtAxisRenderer$$.$_createText$($axis$$56_isRTL$$1$$.$getEventManager$(), $axis$$56_isRTL$$1$$, $options$$16_title$$10$$.title, $options$$16_title$$10$$.titleStyle, $bHoriz$$1_gap$$1$$ ? $availSpace$$5$$.$w$ : $availSpace$$5$$.$h$, $bHoriz$$1_gap$$1$$ ? $availSpace$$5$$.$h$ : $availSpace$$5$$.$w$)) {
        var $bHoriz$$1_gap$$1$$ = D.$DvtAxisRenderer$$.$_getTitleGap$($axis$$56_isRTL$$1$$), $overflow$$ = ($axisInfo$$4$$.$getStartOverflow$() - $axisInfo$$4$$.$getEndOverflow$()) / 2;
        $axis$$56_isRTL$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$56_isRTL$$1$$.$getCtx$());
        var $titleHeight$$ = D.$DvtTextUtils$$.$getTextHeight$($options$$16_title$$10$$);
        $options$$16_title$$10$$.$alignCenter$();
        "top" == $position$$2$$ ? ($options$$16_title$$10$$.$setX$($availSpace$$5$$.x + $overflow$$ + $availSpace$$5$$.$w$ / 2), $options$$16_title$$10$$.$setY$($availSpace$$5$$.y), $availSpace$$5$$.y += $titleHeight$$ + $bHoriz$$1_gap$$1$$, $availSpace$$5$$.$h$ -= $titleHeight$$ + $bHoriz$$1_gap$$1$$) : "bottom" == $position$$2$$ ? ($options$$16_title$$10$$.$setX$($availSpace$$5$$.x + $overflow$$ + $availSpace$$5$$.$w$ / 2), $options$$16_title$$10$$.$setY$($availSpace$$5$$.y + $availSpace$$5$$.$h$ - 
        $titleHeight$$), $availSpace$$5$$.$h$ -= $titleHeight$$ + $bHoriz$$1_gap$$1$$) : "left" == $position$$2$$ ? ($options$$16_title$$10$$.$alignMiddle$(), $options$$16_title$$10$$.$setRotation$($axis$$56_isRTL$$1$$ ? window.Math.PI / 2 : 3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($options$$16_title$$10$$, $availSpace$$5$$.x + $titleHeight$$ / 2, $availSpace$$5$$.y + $availSpace$$5$$.$h$ / 2), $availSpace$$5$$.x += $titleHeight$$ + $bHoriz$$1_gap$$1$$, $availSpace$$5$$.$w$ -= 
        $titleHeight$$ + $bHoriz$$1_gap$$1$$) : "right" == $position$$2$$ && ($options$$16_title$$10$$.$alignMiddle$(), $options$$16_title$$10$$.$setRotation$($axis$$56_isRTL$$1$$ ? window.Math.PI / 2 : 3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($options$$16_title$$10$$, $availSpace$$5$$.x + $availSpace$$5$$.$w$ - $titleHeight$$ / 2, $availSpace$$5$$.y + $availSpace$$5$$.$h$ / 2), $availSpace$$5$$.$w$ -= $titleHeight$$ + $bHoriz$$1_gap$$1$$);
        $axisInfo$$4$$.$_title$ = $options$$16_title$$10$$
      }
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($axis$$57$$, $axisInfo$$5$$, $availSpace$$6$$) {
  var $options$$17_position$$3$$ = $axis$$57$$.$getOptions$();
  "on" == $options$$17_position$$3$$.tickLabel.rendered && ($options$$17_position$$3$$ = $options$$17_position$$3$$.position, "top" == $options$$17_position$$3$$ || "bottom" == $options$$17_position$$3$$ ? D.$DvtAxisRenderer$$.$_renderLabelsHoriz$($axis$$57$$, $axisInfo$$5$$, $availSpace$$6$$) : "tangential" == $options$$17_position$$3$$ ? D.$DvtAxisRenderer$$.$_renderLabelsTangent$($axis$$57$$, $axisInfo$$5$$, $availSpace$$6$$) : D.$DvtAxisRenderer$$.$_renderLabelsVert$($axis$$57$$, $axisInfo$$5$$, 
  $availSpace$$6$$), D.$DvtAxisRenderer$$.$_renderGroupSeparators$($axis$$57$$, $axisInfo$$5$$))
};
D.$DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($axis$$58$$, $axisInfo$$6$$, $availSpace$$7$$) {
  for(var $context$$13_lv2Labels$$ = $axis$$58$$.$getCtx$(), $offset$$15_options$$18$$ = $axis$$58$$.$getOptions$(), $maxOverflow_position$$4$$ = $offset$$15_options$$18$$.position, $isTickInside_minOverflow$$ = "inside" == $offset$$15_options$$18$$.tickLabel.position, $isRTL$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$13_lv2Labels$$), $isGroupAxis_overflow1_x$$67$$ = $axisInfo$$6$$ instanceof D.$DvtGroupAxisInfo$$, $isHierarchical_overflow2$$ = $isGroupAxis_overflow1_x$$67$$ && 1 < $axisInfo$$6$$.$getNumLevels$(), 
  $levelIdx$$3$$ = $isHierarchical_overflow2$$ ? 0 : null, $labels$$7$$ = $axisInfo$$6$$.$getLabels$($context$$13_lv2Labels$$, $levelIdx$$3$$), $gap$$2$$ = $isHierarchical_overflow2$$ ? (0,D.$DvtAxisDefaults$getGapSize$$)($context$$13_lv2Labels$$, $offset$$15_options$$18$$, $offset$$15_options$$18$$.layout.hierarchicalLabelGapHeight) : 0;$labels$$7$$;) {
    for(var $height$$35_index$$108_isMultiline_isRotated$$ = 0, $maxLvlHeight$$ = 0, $i$$104$$ = 0;$i$$104$$ < $labels$$7$$.length;$i$$104$$++) {
      var $label$$14$$ = $labels$$7$$[$i$$104$$];
      if(null != $label$$14$$) {
        $height$$35_index$$108_isMultiline_isRotated$$ = $label$$14$$ instanceof D.$DvtMultilineText$$ || $label$$14$$ instanceof D.$DvtBackgroundMultilineText$$;
        if($axisInfo$$6$$.$isLabelRotated$($levelIdx$$3$$)) {
          if((!$height$$35_index$$108_isMultiline_isRotated$$ || $height$$35_index$$108_isMultiline_isRotated$$ && !$label$$14$$.$isWrapEnabled$()) && !D.$DvtTextUtils$$.$fitText$($label$$14$$, $availSpace$$7$$.$h$, $availSpace$$7$$.$w$, $axis$$58$$)) {
            continue
          }
          $isRTL$$2$$ ? $label$$14$$.$alignLeft$() : $label$$14$$.$alignRight$();
          $isHierarchical_overflow2$$ ? ($height$$35_index$$108_isMultiline_isRotated$$ = D.$DvtTextUtils$$.$getTextWidth$($label$$14$$), $label$$14$$.$setTranslateY$($availSpace$$7$$.$h$ - $height$$35_index$$108_isMultiline_isRotated$$), $maxLvlHeight$$ = window.Math.max($maxLvlHeight$$, $height$$35_index$$108_isMultiline_isRotated$$)) : $label$$14$$.$setTranslateY$($availSpace$$7$$.y)
        }else {
          if(!$isTickInside_minOverflow$$ && D.$DvtTextUtils$$.$guessTextDimensions$($label$$14$$).$h$ - 1 > $availSpace$$7$$.$h$) {
            continue
          }
          $isHierarchical_overflow2$$ && "bottom" == $maxOverflow_position$$4$$ ? $label$$14$$.$setY$($availSpace$$7$$.$h$) : "bottom" == $maxOverflow_position$$4$$ ? $label$$14$$.$setY$($availSpace$$7$$.y) : $label$$14$$.$setY$($availSpace$$7$$.y + $availSpace$$7$$.$h$);
          !$isHierarchical_overflow2$$ && ("bottom" == $maxOverflow_position$$4$$ && !$isTickInside_minOverflow$$ || "top" == $maxOverflow_position$$4$$ && $isTickInside_minOverflow$$) ? $label$$14$$.$alignTop$() : $isHierarchical_overflow2$$ && "top" == $maxOverflow_position$$4$$ ? $label$$14$$.$alignTop$() : $label$$14$$.$alignBottom$();
          if($isHierarchical_overflow2$$) {
            $maxLvlHeight$$ = window.Math.max($maxLvlHeight$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$14$$).$h$)
          }else {
            if($isTickInside_minOverflow$$) {
              var $gap$$2$$ = (0,D.$DvtAxisDefaults$getGapSize$$)($context$$13_lv2Labels$$, $offset$$15_options$$18$$, $offset$$15_options$$18$$.layout.insideLabelGapWidth);
              $isRTL$$2$$ ? $label$$14$$.$alignRight$() : $label$$14$$.$alignLeft$();
              $label$$14$$.$setX$($label$$14$$.$getX$() + $gap$$2$$ * ($isRTL$$2$$ ? -1 : 1))
            }
          }
        }
        var $height$$35_index$$108_isMultiline_isRotated$$ = $isGroupAxis_overflow1_x$$67$$ ? (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($label$$14$$) : $i$$104$$, $datatip$$2_isOuterLevel$$ = $axisInfo$$6$$.$getDatatip$($height$$35_index$$108_isMultiline_isRotated$$, $levelIdx$$3$$), $tooltip$$2$$ = $label$$14$$.$getUntruncatedTextString$(), $action$$5$$ = $axisInfo$$6$$.$getAction$($height$$35_index$$108_isMultiline_isRotated$$, $levelIdx$$3$$), $drillable$$2$$ = $axisInfo$$6$$.$isDrillable$($height$$35_index$$108_isMultiline_isRotated$$, 
        $levelIdx$$3$$), $group$$6$$ = $axisInfo$$6$$.$getGroup$($height$$35_index$$108_isMultiline_isRotated$$, $levelIdx$$3$$);
        $axis$$58$$.$getEventManager$().$associate$($label$$14$$, new D.$DvtAxisObjPeer$$($axis$$58$$, $label$$14$$, $group$$6$$, $action$$5$$, $drillable$$2$$, $tooltip$$2$$, $datatip$$2_isOuterLevel$$, (0,D.$DvtAxisEventManager$getUIParams$$)(D.$DvtAxisConstants$$.$TICK_LABEL$, $label$$14$$.$getTextString$(), $height$$35_index$$108_isMultiline_isRotated$$, $levelIdx$$3$$)));
        $isHierarchical_overflow2$$ ? $axisInfo$$6$$.$_lastRenderedLevel$ = $levelIdx$$3$$ : $maxLvlHeight$$ = window.Math.max($maxLvlHeight$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$14$$).$h$);
        $axis$$58$$.$addChild$($label$$14$$)
      }
    }
    if($isHierarchical_overflow2$$) {
      for($i$$104$$ = 0;$i$$104$$ < $labels$$7$$.length;$i$$104$$++) {
        $label$$14$$ = $labels$$7$$[$i$$104$$], null != $label$$14$$ && ($height$$35_index$$108_isMultiline_isRotated$$ = $axisInfo$$6$$.$isLabelRotated$($levelIdx$$3$$), $datatip$$2_isOuterLevel$$ = $levelIdx$$3$$ < $axisInfo$$6$$.$getNumLevels$() - 1, !$height$$35_index$$108_isMultiline_isRotated$$ && $datatip$$2_isOuterLevel$$ ? ($label$$14$$.$setY$($availSpace$$7$$.$h$ - $maxLvlHeight$$ / 2), $label$$14$$.$alignMiddle$()) : $label$$14$$.$setTranslateY$($availSpace$$7$$.$h$ - $maxLvlHeight$$))
      }
      $availSpace$$7$$.y += $maxLvlHeight$$ + $gap$$2$$;
      $availSpace$$7$$.$h$ -= $maxLvlHeight$$ + $gap$$2$$;
      $levelIdx$$3$$++;
      $labels$$7$$ = $axisInfo$$6$$.$getLabels$($axis$$58$$.$getCtx$(), $levelIdx$$3$$)
    }else {
      $availSpace$$7$$.y += $maxLvlHeight$$, $availSpace$$7$$.$h$ -= $maxLvlHeight$$, $labels$$7$$ = null
    }
  }
  if($axisInfo$$6$$ instanceof D.$DvtTimeAxisInfo$$ && ($labels$$7$$ = $axisInfo$$6$$.$getLabels$($axis$$58$$.$getCtx$()), $context$$13_lv2Labels$$ = $axisInfo$$6$$.$getLabels$($axis$$58$$.$getCtx$(), 1), $offset$$15_options$$18$$ = 0, null != $context$$13_lv2Labels$$)) {
    for($i$$104$$ = 0;$i$$104$$ < $context$$13_lv2Labels$$.length;$i$$104$$++) {
      $label$$14$$ = $context$$13_lv2Labels$$[$i$$104$$], null != $label$$14$$ && !(D.$DvtTextUtils$$.$guessTextDimensions$($label$$14$$).$h$ - 1 > $availSpace$$7$$.$h$) && ($axis$$58$$.$getEventManager$().$associate$($label$$14$$, new D.$DvtSimpleObjPeer$$(null, null, null, (0,D.$DvtAxisEventManager$getUIParams$$)(D.$DvtAxisConstants$$.$TICK_LABEL$, $label$$14$$.$getTextString$()))), $isHierarchical_overflow2$$ = $isGroupAxis_overflow1_x$$67$$ = 0, $maxOverflow_position$$4$$ = $axisInfo$$6$$.$getOptions$()._maxOverflowCoord, 
      $isTickInside_minOverflow$$ = $axisInfo$$6$$.$getOptions$()._minOverflowCoord, null != $labels$$7$$[$i$$104$$] && ($offset$$15_options$$18$$ = $labels$$7$$[$i$$104$$].$measureDimensions$().$w$ / 2, $isGroupAxis_overflow1_x$$67$$ = $axisInfo$$6$$.$_level1Overflow$[$i$$104$$], $isHierarchical_overflow2$$ = $axisInfo$$6$$.$_level2Overflow$[$i$$104$$]), 0 == $isGroupAxis_overflow1_x$$67$$ && 0 == $isHierarchical_overflow2$$ ? ($isGroupAxis_overflow1_x$$67$$ = $label$$14$$.$getX$(), $label$$14$$.$setX$($isRTL$$2$$ ? 
      $isGroupAxis_overflow1_x$$67$$ + $offset$$15_options$$18$$ <= $maxOverflow_position$$4$$ ? $isGroupAxis_overflow1_x$$67$$ + $offset$$15_options$$18$$ : $maxOverflow_position$$4$$ : $isGroupAxis_overflow1_x$$67$$ - $offset$$15_options$$18$$ >= $isTickInside_minOverflow$$ ? $isGroupAxis_overflow1_x$$67$$ - $offset$$15_options$$18$$ : $isTickInside_minOverflow$$)) : 0 > $isGroupAxis_overflow1_x$$67$$ ? $label$$14$$.$setX$($isTickInside_minOverflow$$) : 0 < $isGroupAxis_overflow1_x$$67$$ && $label$$14$$.$setX$($maxOverflow_position$$4$$), 
      $label$$14$$.$alignTop$(), $label$$14$$.$setY$($availSpace$$7$$.y), $axis$$58$$.$addChild$($label$$14$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($axis$$59$$, $axisInfo$$7$$, $availSpace$$8$$) {
  var $options$$19$$ = $axis$$59$$.$getOptions$(), $position$$5$$ = $options$$19$$.position, $context$$14$$ = $axis$$59$$.$getCtx$(), $isRTL$$3$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$14$$), $isNumerical$$ = $axisInfo$$7$$ instanceof D.$DvtDataAxisInfo$$, $isTickInside$$1$$ = "inside" == $options$$19$$.tickLabel.position, $labels$$8$$, $gap$$3_lv2Labels$$1$$, $maxLvlWidth$$, $isGroupAxis$$1$$ = $axisInfo$$7$$ instanceof D.$DvtGroupAxisInfo$$, $isHierarchical$$1$$ = $isGroupAxis$$1$$ && 1 < 
  $axisInfo$$7$$.$getNumLevels$(), $levelIdx$$4$$ = $isHierarchical$$1$$ ? 0 : null;
  $labels$$8$$ = $axisInfo$$7$$.$getLabels$($axis$$59$$.$getCtx$(), $levelIdx$$4$$);
  var $labelX$$ = 0;
  $isHierarchical$$1$$ ? ($gap$$3_lv2Labels$$1$$ = (0,D.$DvtAxisDefaults$getGapSize$$)($context$$14$$, $options$$19$$, $options$$19$$.layout.hierarchicalLabelGapWidth), $maxLvlWidth$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$) : "radial" == $position$$5$$ ? ($gap$$3_lv2Labels$$1$$ = (0,D.$DvtAxisDefaults$getGapSize$$)($context$$14$$, $options$$19$$, $options$$19$$.layout.radialLabelGap), $labelX$$ = $availSpace$$8$$.x + $availSpace$$8$$.$w$ / 2, $labelX$$ = $isRTL$$3$$ ? $labelX$$ + 
  ($gap$$3_lv2Labels$$1$$ + D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$) : $labelX$$ - $gap$$3_lv2Labels$$1$$) : "left" == $position$$5$$ ? ($labelX$$ = $availSpace$$8$$.x + $availSpace$$8$$.$w$, $isNumerical$$ && $isTickInside$$1$$ && ($labelX$$ += D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$)) : ($labelX$$ = $availSpace$$8$$.x, $isNumerical$$ && !$isTickInside$$1$$ && ($labelX$$ += D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$));
  for(var $formatLabelVert$$ = function $$formatLabelVert$$$($gap$$3_lv2Labels$$1$$, $formatLabelVert$$) {
    var $i$$105$$ = $gap$$3_lv2Labels$$1$$ instanceof D.$DvtMultilineText$$ || $gap$$3_lv2Labels$$1$$ instanceof D.$DvtBackgroundMultilineText$$, $i$$105$$ = !$i$$105$$ || $i$$105$$ && !$gap$$3_lv2Labels$$1$$.$isWrapEnabled$();
    if(!($isHierarchical$$1$$ && D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$ - 1 > $availSpace$$8$$.$w$) && ($isHierarchical$$1$$ || $isTickInside$$1$$ || !$i$$105$$ || D.$DvtTextUtils$$.$fitText$($gap$$3_lv2Labels$$1$$, $availSpace$$8$$.$w$, $availSpace$$8$$.$h$, $axis$$59$$))) {
      $formatLabelVert$$ = $isGroupAxis$$1$$ ? (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($gap$$3_lv2Labels$$1$$) : $formatLabelVert$$;
      var $i$$105$$ = $axisInfo$$7$$.$getDatatip$($formatLabelVert$$, $levelIdx$$4$$), $label$$15$$ = $gap$$3_lv2Labels$$1$$.$getUntruncatedTextString$(), $action$$6_bbox$$2_cmd_padding$$4$$ = $axisInfo$$7$$.$getAction$($formatLabelVert$$, $levelIdx$$4$$), $bgColor$$5_drillable$$3$$ = $axisInfo$$7$$.$isDrillable$($formatLabelVert$$, $levelIdx$$4$$), $group$$7$$ = $axisInfo$$7$$.$getGroup$($formatLabelVert$$, $levelIdx$$4$$);
      $axis$$59$$.$getEventManager$().$associate$($gap$$3_lv2Labels$$1$$, new D.$DvtAxisObjPeer$$($axis$$59$$, $gap$$3_lv2Labels$$1$$, $group$$7$$, $action$$6_bbox$$2_cmd_padding$$4$$, $bgColor$$5_drillable$$3$$, $label$$15$$, $i$$105$$, (0,D.$DvtAxisEventManager$getUIParams$$)(D.$DvtAxisConstants$$.$TICK_LABEL$, $gap$$3_lv2Labels$$1$$.$getTextString$(), $formatLabelVert$$, $levelIdx$$4$$)));
      $isHierarchical$$1$$ ? ($gap$$3_lv2Labels$$1$$.$alignRight$(), $gap$$3_lv2Labels$$1$$.$setX$($isRTL$$3$$ ? $availSpace$$8$$.$w$ : $availSpace$$8$$.x + $maxLvlWidth$$), $axisInfo$$7$$.$_lastRenderedLevel$ = $levelIdx$$4$$) : ($gap$$3_lv2Labels$$1$$.$setX$($labelX$$), !$isNumerical$$ && "right" == $position$$5$$ ? $gap$$3_lv2Labels$$1$$.$alignLeft$() : $gap$$3_lv2Labels$$1$$.$alignRight$(), $isTickInside$$1$$ && ($gap$$3_lv2Labels$$1$$.$alignBottom$(), $gap$$3_lv2Labels$$1$$.$setY$($gap$$3_lv2Labels$$1$$.$getY$() - 
      (0,D.$DvtAxisDefaults$getGapSize$$)($context$$14$$, $options$$19$$, $options$$19$$.layout.insideLabelGapHeight))), "radial" == $position$$5$$ && ($i$$105$$ = $gap$$3_lv2Labels$$1$$.$getY$(), $gap$$3_lv2Labels$$1$$.$setY$($availSpace$$8$$.y + $availSpace$$8$$.$h$ / 2 - $i$$105$$), $label$$15$$ = $gap$$3_lv2Labels$$1$$.$getDimensions$(), $action$$6_bbox$$2_cmd_padding$$4$$ = 0.15 * $label$$15$$.$h$, $action$$6_bbox$$2_cmd_padding$$4$$ = D.$DvtPathUtils$$.$roundedRectangle$($label$$15$$.x - $action$$6_bbox$$2_cmd_padding$$4$$, 
      $label$$15$$.y, $label$$15$$.$w$ + 2 * $action$$6_bbox$$2_cmd_padding$$4$$, $label$$15$$.$h$, 2, 2, 2, 2), $action$$6_bbox$$2_cmd_padding$$4$$ = new D.$DvtPath$$($axis$$59$$.$getCtx$(), $action$$6_bbox$$2_cmd_padding$$4$$), $bgColor$$5_drillable$$3$$ = $gap$$3_lv2Labels$$1$$.$getCSSStyle$().$getStyle$("background-color"), $i$$105$$ = $i$$105$$ + $label$$15$$.$h$ / 2 > $axisInfo$$7$$.$getEndCoord$() && "circle" == $axis$$59$$.$getOptions$().polarGridShape ? 1 : 0.3, $bgColor$$5_drillable$$3$$ ? 
      $action$$6_bbox$$2_cmd_padding$$4$$.$setSolidFill$($bgColor$$5_drillable$$3$$) : $action$$6_bbox$$2_cmd_padding$$4$$.$setSolidFill$("#FFFFFF", $i$$105$$), $axis$$59$$.$addChild$($action$$6_bbox$$2_cmd_padding$$4$$)));
      $axis$$59$$.$addChild$($gap$$3_lv2Labels$$1$$)
    }
  };$labels$$8$$;) {
    for(var $i$$105$$ = 0;$i$$105$$ < $labels$$8$$.length;$i$$105$$++) {
      var $label$$15$$ = $labels$$8$$[$i$$105$$];
      null != $label$$15$$ && $formatLabelVert$$($label$$15$$, $i$$105$$)
    }
    if($isHierarchical$$1$$) {
      $availSpace$$8$$.x += $maxLvlWidth$$ + $gap$$3_lv2Labels$$1$$, $availSpace$$8$$.$w$ -= $maxLvlWidth$$ + $gap$$3_lv2Labels$$1$$, $levelIdx$$4$$++, $maxLvlWidth$$ = ($labels$$8$$ = $axisInfo$$7$$.$getLabels$($axis$$59$$.$getCtx$(), $levelIdx$$4$$)) ? D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$8$$).$w$ : null
    }else {
      break
    }
  }
  if($axisInfo$$7$$ instanceof D.$DvtTimeAxisInfo$$ && ($gap$$3_lv2Labels$$1$$ = $axisInfo$$7$$.$getLabels$($axis$$59$$.$getCtx$(), 1), null != $gap$$3_lv2Labels$$1$$)) {
    for($i$$105$$ = 0;$i$$105$$ < $gap$$3_lv2Labels$$1$$.length;$i$$105$$++) {
      $label$$15$$ = $gap$$3_lv2Labels$$1$$[$i$$105$$], null != $label$$15$$ && $formatLabelVert$$($label$$15$$, $i$$105$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($axis$$60$$, $axisInfo$$8$$, $availSpace$$9$$) {
  for(var $labels$$9$$ = $axisInfo$$8$$.$getLabels$($axis$$60$$.$getCtx$()), $i$$106$$ = 0;$i$$106$$ < $labels$$9$$.length;$i$$106$$++) {
    var $label$$17$$ = $labels$$9$$[$i$$106$$];
    if(null != $label$$17$$) {
      var $index$$110_maxWidth$$2$$ = $availSpace$$9$$.$w$ / 2 - window.Math.abs($label$$17$$.$getX$()), $datatip$$4_maxHeight$$1$$ = $availSpace$$9$$.$h$ / 2 - window.Math.abs($label$$17$$.$getY$());
      if(D.$DvtTextUtils$$.$fitText$($label$$17$$, $index$$110_maxWidth$$2$$, $datatip$$4_maxHeight$$1$$, $axis$$60$$)) {
        var $index$$110_maxWidth$$2$$ = $axisInfo$$8$$ instanceof D.$DvtGroupAxisInfo$$ ? (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($label$$17$$) : $i$$106$$, $datatip$$4_maxHeight$$1$$ = $axisInfo$$8$$.$getDatatip$($index$$110_maxWidth$$2$$), $tooltip$$4$$ = $label$$17$$.$getUntruncatedTextString$(), $action$$7$$ = $axisInfo$$8$$.$getAction$($index$$110_maxWidth$$2$$), $drillable$$4$$ = $axisInfo$$8$$.$isDrillable$($index$$110_maxWidth$$2$$), $group$$8$$ = $axisInfo$$8$$.$getGroup$($index$$110_maxWidth$$2$$);
        $axis$$60$$.$getEventManager$().$associate$($label$$17$$, new D.$DvtAxisObjPeer$$($axis$$60$$, $label$$17$$, $group$$8$$, $action$$7$$, $drillable$$4$$, $tooltip$$4$$, $datatip$$4_maxHeight$$1$$, (0,D.$DvtAxisEventManager$getUIParams$$)(D.$DvtAxisConstants$$.$TICK_LABEL$, $label$$17$$.$getTextString$(), $index$$110_maxWidth$$2$$)));
        $label$$17$$.$setTranslateX$($availSpace$$9$$.x + $availSpace$$9$$.$w$ / 2);
        $label$$17$$.$setTranslateY$($availSpace$$9$$.y + $availSpace$$9$$.$h$ / 2);
        $axis$$60$$.$addChild$($label$$17$$)
      }
    }
  }
};
D.$DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($eventManager$$4$$, $container$$9$$, $text$$38_textString$$5$$, $cssStyle$$22$$, $width$$32$$, $height$$36$$) {
  var $params$$6$$ = (0,D.$DvtAxisEventManager$getUIParams$$)(D.$DvtAxisConstants$$.$TITLE$);
  $text$$38_textString$$5$$ = new D.$DvtOutputText$$($container$$9$$.$getCtx$(), $text$$38_textString$$5$$, 0, 0);
  $text$$38_textString$$5$$.$setCSSStyle$($cssStyle$$22$$);
  return D.$DvtTextUtils$$.$fitText$($text$$38_textString$$5$$, $width$$32$$, $height$$36$$, $container$$9$$) ? ($eventManager$$4$$.$associate$($text$$38_textString$$5$$, new D.$DvtSimpleObjPeer$$($text$$38_textString$$5$$.$getUntruncatedTextString$(), null, null, $params$$6$$)), $text$$38_textString$$5$$) : null
};
D.$DvtAxisRenderer$$.$_renderGroupSeparators$ = function $$DvtAxisRenderer$$$$_renderGroupSeparators$$($axis$$61$$, $axisInfo$$9$$) {
  if($axisInfo$$9$$ instanceof D.$DvtGroupAxisInfo$$ && $axisInfo$$9$$.$_areSeparatorsRendered$ && !(1 >= $axisInfo$$9$$.$getNumLevels$() || 0 >= $axisInfo$$9$$.$_lastRenderedLevel$)) {
    for(var $endOffset_options$$20$$ = $axis$$61$$.$getOptions$(), $isHoriz_position$$6$$ = $endOffset_options$$20$$.position, $isHoriz_position$$6$$ = "top" == $isHoriz_position$$6$$ || "bottom" == $isHoriz_position$$6$$, $context$$15_gap$$4$$ = $axis$$61$$.$getCtx$(), $isRTL$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$15_gap$$4$$), $lineStroke$$ = new D.$DvtSolidStroke$$($axisInfo$$9$$.$_separatorColor$, 1, 1), $prevLevelSize$$ = 0, $context$$15_gap$$4$$ = $isHoriz_position$$6$$ ? (0,D.$DvtAxisDefaults$getGapSize$$)($context$$15_gap$$4$$, 
    $endOffset_options$$20$$, $endOffset_options$$20$$.layout.hierarchicalLabelGapHeight) : (0,D.$DvtAxisDefaults$getGapSize$$)($context$$15_gap$$4$$, $endOffset_options$$20$$, $endOffset_options$$20$$.layout.hierarchicalLabelGapWidth), $startOffset$$ = $endOffset_options$$20$$.startGroupOffset, $endOffset_options$$20$$ = $endOffset_options$$20$$.endGroupOffset, $maxDims_x1$$4$$, $x3_y1$$3$$, $x2$$2$$, $y2$$1_yCoord$$, $start$$20_x4$$, $level$$39$$ = $axisInfo$$9$$.$_lastRenderedLevel$;0 <= $level$$39$$;$level$$39$$--) {
      var $labels$$10$$ = $axisInfo$$9$$.$getLabels$($axis$$61$$.$getCtx$(), $level$$39$$);
      $maxDims_x1$$4$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($labels$$10$$);
      var $isRotated$$1$$ = $axisInfo$$9$$.$isLabelRotated$($level$$39$$), $levelSize$$ = $isRotated$$1$$ || !$isHoriz_position$$6$$ ? $maxDims_x1$$4$$.$w$ : $maxDims_x1$$4$$.$h$;
      if(0 != $levelSize$$) {
        var $nextLabel_prevLabelRendered$$ = !1, $prevLabelEmpty$$ = null;
        if($level$$39$$ < $axisInfo$$9$$.$_lastRenderedLevel$) {
          for(var $i$$107$$ = 0;$i$$107$$ < $labels$$10$$.length;$i$$107$$++) {
            var $label$$18$$ = $labels$$10$$[$i$$107$$];
            if(null != $label$$18$$) {
              var $index$$111$$ = (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($label$$18$$), $isEmptyLabel$$ = 0 == (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axisInfo$$9$$, $index$$111$$, $level$$39$$).length;
              if(!$isEmptyLabel$$) {
                var $eraseCornerEdge$$ = $isEmptyLabel$$ && 0 == $level$$39$$ && (0 == $index$$111$$ || $index$$111$$ == $labels$$10$$.length - 1), $isFirstLabel$$ = $label$$18$$ && null == $labels$$10$$[$index$$111$$ - 1], $isLastLabel_spacing$$ = $label$$18$$ && null == $labels$$10$$[$index$$111$$ + 1];
                $start$$20_x4$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)($axisInfo$$9$$, $index$$111$$, $level$$39$$);
                var $drawLeftLine_end$$5$$ = $axisInfo$$9$$.$getEndIndex$($index$$111$$, $level$$39$$);
                if($isHoriz_position$$6$$) {
                  if($label$$18$$ && ($y2$$1_yCoord$$ = $label$$18$$ instanceof D.$DvtMultilineText$$ || $label$$18$$ instanceof D.$DvtBackgroundMultilineText$$ ? $label$$18$$.$getYAlignCoord$() : $label$$18$$.$getY$(), $maxDims_x1$$4$$ = $axisInfo$$9$$.$getCoordAt$($start$$20_x4$$ - $startOffset$$), $x3_y1$$3$$ = !$isRotated$$1$$ ? $y2$$1_yCoord$$ - $levelSize$$ / 2 - 0.5 * $prevLevelSize$$ - $context$$15_gap$$4$$ : $y2$$1_yCoord$$ + 0.5 * $prevLevelSize$$, $x2$$2$$ = $axisInfo$$9$$.$getCoordAt$($drawLeftLine_end$$5$$ + 
                  $endOffset_options$$20$$), $y2$$1_yCoord$$ = !$isRotated$$1$$ ? $y2$$1_yCoord$$ : $y2$$1_yCoord$$ + $levelSize$$ + $prevLevelSize$$ + 2 * $context$$15_gap$$4$$, (!$isEmptyLabel$$ || !$eraseCornerEdge$$) && (!1 == $nextLabel_prevLabelRendered$$ && null != $maxDims_x1$$4$$) && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $maxDims_x1$$4$$, $x3_y1$$3$$), null != $x2$$2$$ && !$eraseCornerEdge$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, 
                  $lineStroke$$, $x2$$2$$, $y2$$1_yCoord$$, $x2$$2$$, $x3_y1$$3$$)), !$isEmptyLabel$$) {
                    if($label$$18$$) {
                      var $labelWidth$$1$$ = $isRotated$$1$$ ? D.$DvtTextUtils$$.$getTextHeight$($label$$18$$) : D.$DvtTextUtils$$.$getTextWidth$($label$$18$$)
                    }
                    $maxDims_x1$$4$$ = $isFirstLabel$$ && !1 == $prevLabelEmpty$$ ? $axisInfo$$9$$.$getStartCoord$() : $axisInfo$$9$$.$getBoundedCoordAt$($start$$20_x4$$ - $startOffset$$);
                    $nextLabel_prevLabelRendered$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axisInfo$$9$$, $index$$111$$ + 1, $level$$39$$);
                    $x2$$2$$ = $isLastLabel_spacing$$ && $nextLabel_prevLabelRendered$$ && 0 < $nextLabel_prevLabelRendered$$.length ? $axisInfo$$9$$.$getEndCoord$() : $axisInfo$$9$$.$getBoundedCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$20$$);
                    $x3_y1$$3$$ = $label$$18$$ ? $isRTL$$4$$ ? $label$$18$$.$getX$() + 0.5 * $labelWidth$$1$$ : $label$$18$$.$getX$() - 0.5 * $labelWidth$$1$$ : $axisInfo$$9$$.$getBoundedCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$20$$);
                    $start$$20_x4$$ = $label$$18$$ ? $isRTL$$4$$ ? $label$$18$$.$getX$() - 0.5 * $labelWidth$$1$$ : $label$$18$$.$getX$() + 0.5 * $labelWidth$$1$$ : $axisInfo$$9$$.$getBoundedCoordAt$($start$$20_x4$$ - $startOffset$$);
                    $label$$18$$ && ($isRotated$$1$$ ? D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $x2$$2$$, $y2$$1_yCoord$$) : ($isLastLabel_spacing$$ = $isRTL$$4$$ ? 0.5 * -D.$DvtTextUtils$$.$getTextHeight$($label$$18$$) : 0.5 * D.$DvtTextUtils$$.$getTextHeight$($label$$18$$), $drawLeftLine_end$$5$$ = $isRTL$$4$$ ? $start$$20_x4$$ + $isLastLabel_spacing$$ > $x2$$2$$ : $start$$20_x4$$ + $isLastLabel_spacing$$ < $x2$$2$$, ($isRTL$$4$$ ? 
                    $maxDims_x1$$4$$ > $x3_y1$$3$$ - $isLastLabel_spacing$$ : $maxDims_x1$$4$$ < $x3_y1$$3$$ - $isLastLabel_spacing$$) && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $x3_y1$$3$$ - $isLastLabel_spacing$$, $y2$$1_yCoord$$), $drawLeftLine_end$$5$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $start$$20_x4$$ + $isLastLabel_spacing$$, $y2$$1_yCoord$$, $x2$$2$$, $y2$$1_yCoord$$)))
                  }
                }else {
                  $label$$18$$ && ($maxDims_x1$$4$$ = !$isRTL$$4$$ ? $label$$18$$.$getX$() + 0.5 * $context$$15_gap$$4$$ : $label$$18$$.$getX$() - $levelSize$$ - 0.5 * $context$$15_gap$$4$$, $x3_y1$$3$$ = $axisInfo$$9$$.$getCoordAt$($start$$20_x4$$ - $startOffset$$), $x2$$2$$ = !$isRTL$$4$$ ? $label$$18$$.$getX$() - $levelSize$$ - 0.5 * $context$$15_gap$$4$$ : $label$$18$$.$getX$() + 0.5 * $context$$15_gap$$4$$, $y2$$1_yCoord$$ = $axisInfo$$9$$.$getCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$20$$), 
                  (!$isEmptyLabel$$ && !1 == $nextLabel_prevLabelRendered$$ || 0 == $index$$111$$ && $isEmptyLabel$$ && 0 != $level$$39$$) && null != $x3_y1$$3$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $maxDims_x1$$4$$, $x3_y1$$3$$, $x2$$2$$, $x3_y1$$3$$), null != $y2$$1_yCoord$$ && !$eraseCornerEdge$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $x2$$2$$, $y2$$1_yCoord$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$)), $isEmptyLabel$$ || ($x3_y1$$3$$ = 
                  $isFirstLabel$$ && !1 == $prevLabelEmpty$$ ? 0 : $axisInfo$$9$$.$getBoundedCoordAt$($start$$20_x4$$ - $startOffset$$), $nextLabel_prevLabelRendered$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axisInfo$$9$$, $index$$111$$ + 1, $level$$39$$), $y2$$1_yCoord$$ = $isLastLabel_spacing$$ && $nextLabel_prevLabelRendered$$ && 0 < $nextLabel_prevLabelRendered$$.length ? $axisInfo$$9$$.$getEndCoord$() : $axisInfo$$9$$.$getBoundedCoordAt$($drawLeftLine_end$$5$$ + $endOffset_options$$20$$), 
                  $label$$18$$ && D.$DvtAxisRenderer$$.$_addSeparatorLine$($axis$$61$$, $lineStroke$$, $x2$$2$$, $x3_y1$$3$$, $x2$$2$$, $y2$$1_yCoord$$))
                }
                $nextLabel_prevLabelRendered$$ = !$isEmptyLabel$$ && null != $label$$18$$;
                $prevLabelEmpty$$ = null != $label$$18$$ || null == $label$$18$$ && $isEmptyLabel$$
              }
            }
          }
        }
      }
      $prevLevelSize$$ = $levelSize$$
    }
  }
};
D.$DvtAxisRenderer$$.$_addSeparatorLine$ = function $$DvtAxisRenderer$$$$_addSeparatorLine$$($axis$$62$$, $lineStroke$$1$$, $line$$5_x1$$5$$, $y1$$4$$, $x2$$3$$, $y2$$2$$) {
  $line$$5_x1$$5$$ = new D.$DvtLine$$($axis$$62$$.$getCtx$(), $line$$5_x1$$5$$, $y1$$4$$, $x2$$3$$, $y2$$2$$);
  $line$$5_x1$$5$$.$setStroke$($lineStroke$$1$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$5_x1$$5$$);
  $axis$$62$$.$addChild$($line$$5_x1$$5$$)
};
D.$DvtAxisRenderer$$.$_getGroupAxisPreferredSize$ = function $$DvtAxisRenderer$$$$_getGroupAxisPreferredSize$$($axis$$63_numLevels$$1$$, $axisInfo$$10$$, $size$$15$$, $availSize$$, $bHoriz$$2$$) {
  var $context$$16$$ = $axis$$63_numLevels$$1$$.$getCtx$(), $gap$$5_options$$21$$ = $axis$$63_numLevels$$1$$.$getOptions$();
  $axis$$63_numLevels$$1$$ = $axisInfo$$10$$.$getNumLevels$();
  for(var $gap$$5_options$$21$$ = 1 < $axis$$63_numLevels$$1$$ ? (0,D.$DvtAxisDefaults$getGapSize$$)($context$$16$$, $gap$$5_options$$21$$, $gap$$5_options$$21$$.layout[$bHoriz$$2$$ ? "hierarchicalLabelGapHeight" : "hierarchicalLabelGapWidth"]) : 0, $level$$40$$ = 0;$level$$40$$ < $axis$$63_numLevels$$1$$;$level$$40$$++) {
    var $labelSize_labels$$11_maxDims$$1$$ = $axisInfo$$10$$.$getLabels$($context$$16$$, $level$$40$$);
    $bHoriz$$2$$ ? ($labelSize_labels$$11_maxDims$$1$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($labelSize_labels$$11_maxDims$$1$$), $labelSize_labels$$11_maxDims$$1$$ = $axisInfo$$10$$.$isLabelRotated$($level$$40$$) ? $labelSize_labels$$11_maxDims$$1$$.$w$ : $labelSize_labels$$11_maxDims$$1$$.$h$) : $labelSize_labels$$11_maxDims$$1$$ = D.$DvtTextUtils$$.$getMaxTextDimensions$($labelSize_labels$$11_maxDims$$1$$).$w$;
    if($size$$15$$ + $labelSize_labels$$11_maxDims$$1$$ <= $availSize$$) {
      $size$$15$$ += $labelSize_labels$$11_maxDims$$1$$ + $gap$$5_options$$21$$
    }else {
      0 == $level$$40$$ && ($size$$15$$ = $availSize$$);
      break
    }
  }
  0 != $level$$40$$ && ($size$$15$$ -= $gap$$5_options$$21$$);
  return $size$$15$$
};
D.$DvtAxisInfo$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAxisInfo$$, D.$DvtObj$$, "DvtAxisInfo");
D.$DvtAxisInfo$newInstance$$ = function $$DvtAxisInfo$newInstance$$$($context$$7$$, $options$$11$$, $availSpace$$1$$) {
  return $options$$11$$.timeAxisType && "disabled" != $options$$11$$.timeAxisType ? new D.$DvtTimeAxisInfo$$($context$$7$$, $options$$11$$, $availSpace$$1$$) : (0,window.isNaN)($options$$11$$.dataMin) && (0,window.isNaN)($options$$11$$.dataMax) ? new D.$DvtGroupAxisInfo$$($context$$7$$, $options$$11$$, $availSpace$$1$$) : new D.$DvtDataAxisInfo$$($context$$7$$, $options$$11$$, $availSpace$$1$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$8$$, $options$$12$$, $availSpace$$2$$) {
  this.$_context$ = $context$$8$$;
  this.$Position$ = $options$$12$$.position;
  this.$_radius$ = $options$$12$$._radius;
  this.$_title$ = null;
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$2$$.x, this.$EndCoord$ = $availSpace$$2$$.x + $availSpace$$2$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$2$$.y, this.$EndCoord$ = $availSpace$$2$$.y + $availSpace$$2$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && ((0,D.$DvtAgent$isRightToLeft$$)($context$$8$$) ? 
  (this.$StartCoord$ = 2 * window.Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * window.Math.PI));
  this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = null;
  this.$EndOverflow$ = this.$StartOverflow$ = 0;
  null == $options$$12$$.leftBuffer && ($options$$12$$.leftBuffer = window.Infinity);
  null == $options$$12$$.rightBuffer && ($options$$12$$.rightBuffer = window.Infinity);
  this.$Options$ = $options$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getCtx$ = (0,D.$JSCompiler_get$$)("$_context$");
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$getLabels$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$getValueAt$ = function $$JSCompiler_prototypeAlias$$$$getValueAt$$($coord$$) {
  if(null == $coord$$) {
    return null
  }
  var $minCoord$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  return $coord$$ < $minCoord$$ || $coord$$ > $maxCoord$$ ? null : this.$getUnboundedValueAt$($coord$$)
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$62$$) {
  return null == $value$$62$$ ? null : $value$$62$$ < this.$MinValue$ || $value$$62$$ > this.$MaxValue$ ? null : this.$getUnboundedCoordAt$($value$$62$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$1$$) {
  if(null == $coord$$1$$) {
    return null
  }
  var $minCoord$$1$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$1$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  $coord$$1$$ < $minCoord$$1$$ ? $coord$$1$$ = $minCoord$$1$$ : $coord$$1$$ > $maxCoord$$1$$ && ($coord$$1$$ = $maxCoord$$1$$);
  return this.$getUnboundedValueAt$($coord$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$63$$) {
  if(null == $value$$63$$) {
    return null
  }
  $value$$63$$ < this.$MinValue$ ? $value$$63$$ = this.$MinValue$ : $value$$63$$ >= this.$MaxValue$ && ($value$$63$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$63$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$isLabelRotated$ = (0,D.$JSCompiler_returnArg$$)(!1);
D.$JSCompiler_prototypeAlias$$.$CreateLabel$ = function $$JSCompiler_prototypeAlias$$$$CreateLabel$$($context$$11_text$$35$$, $label$$11$$, $coord$$3$$, $style$$45$$, $bMultiline_vTol$$) {
  if("tangential" == this.$Position$) {
    $bMultiline_vTol$$ = 16 / 180 * window.Math.PI;
    var $hTol$$ = 1 / 180 * window.Math.PI, $offset$$14_xcoord$$ = 0.5 * this.$getTickLabelHeight$(), $dist_ycoord$$ = this.$_radius$ + $offset$$14_xcoord$$;
    if($coord$$3$$ < $hTol$$ || $coord$$3$$ > 2 * window.Math.PI - $hTol$$) {
      $dist_ycoord$$ += $offset$$14_xcoord$$
    }
    $offset$$14_xcoord$$ = window.Math.round($dist_ycoord$$ * window.Math.sin($coord$$3$$));
    $dist_ycoord$$ = window.Math.round(-$dist_ycoord$$ * window.Math.cos($coord$$3$$));
    $context$$11_text$$35$$ = $style$$45$$ ? new D.$DvtBackgroundOutputText$$($context$$11_text$$35$$, $label$$11$$, $offset$$14_xcoord$$, $dist_ycoord$$, $style$$45$$) : new D.$DvtOutputText$$($context$$11_text$$35$$, $label$$11$$, $offset$$14_xcoord$$, $dist_ycoord$$);
    $coord$$3$$ < $hTol$$ || window.Math.abs($coord$$3$$ - window.Math.PI) < $hTol$$ || $coord$$3$$ > 2 * window.Math.PI - $hTol$$ ? $context$$11_text$$35$$.$alignCenter$() : $coord$$3$$ < window.Math.PI ? $context$$11_text$$35$$.$alignLeft$() : $context$$11_text$$35$$.$alignRight$();
    window.Math.abs($coord$$3$$ - window.Math.PI / 2) < $bMultiline_vTol$$ || window.Math.abs($coord$$3$$ - 3 * window.Math.PI / 2) < $bMultiline_vTol$$ ? $context$$11_text$$35$$.$alignMiddle$() : $coord$$3$$ < window.Math.PI / 2 || $coord$$3$$ > 3 * window.Math.PI / 2 ? $context$$11_text$$35$$.$alignBottom$() : $context$$11_text$$35$$.$alignTop$()
  }else {
    $bMultiline_vTol$$ ? $context$$11_text$$35$$ = $style$$45$$ ? new D.$DvtBackgroundMultilineText$$($context$$11_text$$35$$, $label$$11$$, $coord$$3$$, $coord$$3$$, $style$$45$$) : new D.$DvtMultilineText$$($context$$11_text$$35$$, $label$$11$$, $coord$$3$$, $coord$$3$$) : ($context$$11_text$$35$$ = $style$$45$$ ? new D.$DvtBackgroundOutputText$$($context$$11_text$$35$$, $label$$11$$, $coord$$3$$, $coord$$3$$, $style$$45$$) : new D.$DvtOutputText$$($context$$11_text$$35$$, $label$$11$$, $coord$$3$$, 
    $coord$$3$$), $context$$11_text$$35$$.$alignMiddle$()), $context$$11_text$$35$$.$alignCenter$()
  }
  ($context$$11_text$$35$$ instanceof D.$DvtOutputText$$ || $context$$11_text$$35$$ instanceof D.$DvtMultilineText$$) && $context$$11_text$$35$$.$setCSSStyle$(this.$Options$.tickLabel.style);
  return $context$$11_text$$35$$
};
D.$JSCompiler_StaticMethods_IsOverlapping$$ = function $$JSCompiler_StaticMethods_IsOverlapping$$$($JSCompiler_StaticMethods_IsOverlapping$self_gap$$, $labelDims$$, $skippedLabels$$) {
  if(!$labelDims$$ || 0 >= $labelDims$$.length) {
    return!1
  }
  var $isVert$$ = "left" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$.$Position$ || "right" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$.$Position$ || "radial" == $JSCompiler_StaticMethods_IsOverlapping$self_gap$$.$Position$, $isRTL$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_IsOverlapping$self_gap$$.$getCtx$());
  $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ = (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)($JSCompiler_StaticMethods_IsOverlapping$self_gap$$);
  for(var $pointA1$$, $pointA2$$, $pointB1$$, $pointB2$$, $j$$17$$ = 0;$j$$17$$ < $labelDims$$.length;$j$$17$$ += $skippedLabels$$ + 1) {
    if(null != $labelDims$$[$j$$17$$]) {
      if(null == $pointA1$$ || null == $pointA2$$) {
        $isVert$$ ? ($pointA1$$ = $labelDims$$[$j$$17$$].y, $pointA2$$ = $labelDims$$[$j$$17$$].y + $labelDims$$[$j$$17$$].$h$) : ($pointA1$$ = $labelDims$$[$j$$17$$].x, $pointA2$$ = $labelDims$$[$j$$17$$].x + $labelDims$$[$j$$17$$].$w$)
      }else {
        if($isVert$$) {
          if($pointB1$$ = $labelDims$$[$j$$17$$].y, $pointB2$$ = $labelDims$$[$j$$17$$].y + $labelDims$$[$j$$17$$].$h$, $pointB1$$ >= $pointA1$$ && $pointB1$$ - $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ < $pointA2$$ || $pointB1$$ < $pointA1$$ && $pointB2$$ + $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ > $pointA1$$) {
            return!0
          }
        }else {
          if($pointB1$$ = $labelDims$$[$j$$17$$].x, $pointB2$$ = $labelDims$$[$j$$17$$].x + $labelDims$$[$j$$17$$].$w$, !$isRTL$$ && $pointB1$$ - $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ < $pointA2$$ || $isRTL$$ && $pointB2$$ + $JSCompiler_StaticMethods_IsOverlapping$self_gap$$ > $pointA1$$) {
            return!0
          }
        }
        $pointA1$$ = $pointB1$$;
        $pointA2$$ = $pointB2$$
      }
    }
  }
  return!1
};
D.$JSCompiler_StaticMethods_IsOverlappingDims$$ = function $$JSCompiler_StaticMethods_IsOverlappingDims$$$($labelDims1$$, $labelDims2$$) {
  if(!$labelDims1$$ || !$labelDims2$$) {
    return!1
  }
  var $pointA1$$1$$ = $labelDims1$$.y, $pointA2$$1$$ = $labelDims1$$.y + $labelDims1$$.$h$, $pointA3$$ = $labelDims1$$.x, $pointA4$$ = $labelDims1$$.x + $labelDims1$$.$w$, $pointB1$$1$$ = $labelDims2$$.y, $pointB2$$1$$ = $labelDims2$$.y + $labelDims2$$.$h$, $pointB3$$ = $labelDims2$$.x, $pointB4$$ = $labelDims2$$.x + $labelDims2$$.$w$;
  return($pointA3$$ <= $pointB3$$ && $pointB3$$ <= $pointA4$$ || $pointA3$$ <= $pointB4$$ && $pointB4$$ <= $pointA4$$ || $pointB3$$ <= $pointA3$$ && $pointA3$$ <= $pointB4$$ || $pointB3$$ <= $pointA4$$ && $pointA4$$ <= $pointB4$$) && ($pointB1$$1$$ >= $pointA1$$1$$ && $pointB1$$1$$ < $pointA2$$1$$ || $pointB1$$1$$ <= $pointA1$$1$$ && $pointB2$$1$$ >= $pointA1$$1$$)
};
D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$ = function $$JSCompiler_StaticMethods_GetTickLabelGapSize$$$($JSCompiler_StaticMethods_GetTickLabelGapSize$self$$) {
  var $gapVert_labelHeight$$ = $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$getTickLabelHeight$(), $gapHoriz$$ = $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.24 * $gapVert_labelHeight$$ : 0.79 * $gapVert_labelHeight$$, $gapVert_labelHeight$$ = $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.08 * $gapVert_labelHeight$$ : 0.28 * $gapVert_labelHeight$$;
  return"left" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$ || ("right" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$ || "radial" == $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$Position$) || $JSCompiler_StaticMethods_GetTickLabelGapSize$self$$.$isLabelRotated$() ? $gapVert_labelHeight$$ : $gapHoriz$$
};
D.$DvtAxisInfo$$.prototype.$getTickLabelHeight$ = function $$DvtAxisInfo$$$$$getTickLabelHeight$$() {
  return D.$DvtTextUtils$$.$getTextStringHeight$(this.$getCtx$(), this.$Options$.tickLabel.style)
};
D.$JSCompiler_StaticMethods_SkipLabels$$ = function $$JSCompiler_StaticMethods_SkipLabels$$$($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $labels$$3$$, $j$$18_labelDims$$1$$) {
  for(var $skippedLabels$$1$$ = 0, $bOverlaps$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$18_labelDims$$1$$, $skippedLabels$$1$$);$bOverlaps$$;) {
    $skippedLabels$$1$$++, $bOverlaps$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$18_labelDims$$1$$, $skippedLabels$$1$$)
  }
  if(0 < $skippedLabels$$1$$) {
    $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$ = [];
    for($j$$18_labelDims$$1$$ = 0;$j$$18_labelDims$$1$$ < $labels$$3$$.length;$j$$18_labelDims$$1$$ += $skippedLabels$$1$$ + 1) {
      $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$.push($labels$$3$$[$j$$18_labelDims$$1$$])
    }
    return $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$
  }
  return $labels$$3$$
};
D.$JSCompiler_StaticMethods_GetLabelDims$$ = function $$JSCompiler_StaticMethods_GetLabelDims$$$($labels$$5$$, $container$$7$$) {
  for(var $labelDims$$3$$ = [], $i$$102$$ = 0;$i$$102$$ < $labels$$5$$.length;$i$$102$$++) {
    var $dims$$2_text$$36$$ = $labels$$5$$[$i$$102$$];
    null == $dims$$2_text$$36$$ ? $labelDims$$3$$.push(null) : ($dims$$2_text$$36$$ = $dims$$2_text$$36$$.$measureDimensions$($container$$7$$), $dims$$2_text$$36$$.$w$ && $dims$$2_text$$36$$.$h$ ? $labelDims$$3$$.push($dims$$2_text$$36$$) : $labelDims$$3$$.push(null))
  }
  return $labelDims$$3$$
};
D.$JSCompiler_StaticMethods_GuessLabelDims$$ = function $$JSCompiler_StaticMethods_GuessLabelDims$$$($JSCompiler_StaticMethods_GuessLabelDims$self$$, $labels$$6$$, $container$$8$$, $fudgeFactor$$, $level$$37$$) {
  var $labelDims$$4$$ = [];
  "undefined" == typeof $fudgeFactor$$ && ($fudgeFactor$$ = 1);
  for(var $i$$103$$ = 0;$i$$103$$ < $labels$$6$$.length;$i$$103$$++) {
    var $dims$$3_text$$37$$ = $labels$$6$$[$i$$103$$];
    if(null == $dims$$3_text$$37$$) {
      $labelDims$$4$$.push(null)
    }else {
      $container$$8$$.$addChild$($dims$$3_text$$37$$);
      var $estH_estimatedSize$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$3_text$$37$$), $estW$$ = $estH_estimatedSize$$.$w$ * $fudgeFactor$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
      $container$$8$$.removeChild($dims$$3_text$$37$$);
      $dims$$3_text$$37$$ = $JSCompiler_StaticMethods_GuessLabelDims$self$$.$isLabelRotated$($level$$37$$) ? new D.$DvtRectangle$$($dims$$3_text$$37$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $dims$$3_text$$37$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new D.$DvtRectangle$$($dims$$3_text$$37$$.$getX$() - $estW$$ / 2, $dims$$3_text$$37$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
      $labelDims$$4$$.push($dims$$3_text$$37$$)
    }
  }
  return $labelDims$$4$$
};
D.$DvtAxisInfo$$.prototype.$getMajorTickCount$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$DvtAxisInfo$$.prototype.$getMinorTickCount$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$DvtAxisInfo$$.prototype.$getMajorIncrement$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_StaticMethods_getViewportMin$$ = function $$JSCompiler_StaticMethods_getViewportMin$$$($JSCompiler_StaticMethods_getViewportMin$self$$) {
  return $JSCompiler_StaticMethods_getViewportMin$self$$.$MinValue$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getStartCoord$ = (0,D.$JSCompiler_get$$)("$StartCoord$");
D.$JSCompiler_prototypeAlias$$.$getEndCoord$ = (0,D.$JSCompiler_get$$)("$EndCoord$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = (0,D.$JSCompiler_get$$)("$StartOverflow$");
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = (0,D.$JSCompiler_get$$)("$EndOverflow$");
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$linearToActual$ = (0,D.$JSCompiler_identityFn$$)();
D.$JSCompiler_prototypeAlias$$.$actualToLinear$ = (0,D.$JSCompiler_identityFn$$)();
D.$DvtDataAxisInfo$$ = function $$DvtDataAxisInfo$$$($context$$17$$, $options$$22$$, $availSpace$$11$$) {
  this.Init($context$$17$$, $options$$22$$, $availSpace$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataAxisInfo$$, D.$DvtAxisInfo$$, "DvtDataAxisInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$18_continuousExtent$$inline_1704$$, $options$$23_scaleUnit$$inline_1705$$, $availSpace$$12$$) {
  D.$DvtDataAxisInfo$$.$superclass$.Init.call(this, $context$$18_continuousExtent$$inline_1704$$, $options$$23_scaleUnit$$inline_1705$$, $availSpace$$12$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $options$$23_scaleUnit$$inline_1705$$.tickLabel.rendered && "off" != $options$$23_scaleUnit$$inline_1705$$.rendered && (this.$StartOverflow$ = window.Math.max(10 - $options$$23_scaleUnit$$inline_1705$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $options$$23_scaleUnit$$inline_1705$$.rightBuffer, 0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$18_continuousExtent$$inline_1704$$) ? (this.$_minCoord$ = this.$EndCoord$ - 
  this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
  this.$DataMin$ = $options$$23_scaleUnit$$inline_1705$$.dataMin;
  this.$DataMax$ = $options$$23_scaleUnit$$inline_1705$$.dataMax;
  this.$_isLog$ = "log" == $options$$23_scaleUnit$$inline_1705$$.scale && 0 < this.$DataMin$ && 0 < this.$DataMax$;
  this.$_globalMin$ = this.$actualToLinear$($options$$23_scaleUnit$$inline_1705$$.min);
  this.$_globalMax$ = this.$actualToLinear$($options$$23_scaleUnit$$inline_1705$$.max);
  this.$_minValue$ = null == $options$$23_scaleUnit$$inline_1705$$.viewportMin ? this.$_globalMin$ : this.$actualToLinear$($options$$23_scaleUnit$$inline_1705$$.viewportMin);
  this.$_maxValue$ = null == $options$$23_scaleUnit$$inline_1705$$.viewportMax ? this.$_globalMax$ : this.$actualToLinear$($options$$23_scaleUnit$$inline_1705$$.viewportMax);
  this.$_dataMin$ = this.$actualToLinear$(this.$DataMin$);
  this.$_dataMax$ = this.$actualToLinear$(this.$DataMax$);
  this.$_majorIncrement$ = this.$actualToLinear$($options$$23_scaleUnit$$inline_1705$$.step);
  this.$_minorIncrement$ = this.$actualToLinear$($options$$23_scaleUnit$$inline_1705$$.minorStep);
  this.$_minMajorIncrement$ = this.$actualToLinear$($options$$23_scaleUnit$$inline_1705$$.minStep);
  this.$_majorTickCount$ = $options$$23_scaleUnit$$inline_1705$$._majorTickCount;
  this.$_minorTickCount$ = $options$$23_scaleUnit$$inline_1705$$._minorTickCount;
  this.$_zeroBaseline$ = !this.$_isLog$ && "zero" == $options$$23_scaleUnit$$inline_1705$$.baselineScaling;
  this.$_converter$ = null;
  null != $options$$23_scaleUnit$$inline_1705$$.tickLabel && (this.$_converter$ = $options$$23_scaleUnit$$inline_1705$$.tickLabel.converter);
  $context$$18_continuousExtent$$inline_1704$$ = "on" == this.$Options$._continuousExtent;
  this.$_zeroBaseline$ && (this.$_dataMin$ = window.Math.min(0, this.$_dataMin$), this.$_dataMax$ = window.Math.max(0, this.$_dataMax$));
  $options$$23_scaleUnit$$inline_1705$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, null != this.$_globalMin$ ? this.$_globalMin$ : this.$_dataMin$, null != this.$_globalMax$ ? this.$_globalMax$ : this.$_dataMax$);
  this.$_dataMin$ == this.$_dataMax$ && (0 == this.$_dataMin$ ? this.$_dataMax$ += 5 * $options$$23_scaleUnit$$inline_1705$$ : (this.$_dataMin$ -= 2 * $options$$23_scaleUnit$$inline_1705$$, this.$_dataMax$ += 2 * $options$$23_scaleUnit$$inline_1705$$));
  if(null == this.$_globalMin$) {
    if(this.$_zeroBaseline$ && 0 <= this.$_dataMin$) {
      this.$_globalMin$ = 0
    }else {
      if($context$$18_continuousExtent$$inline_1704$$) {
        this.$_globalMin$ = this.$_dataMin$ - 0.1 * (this.$_dataMax$ - this.$_dataMin$)
      }else {
        if(!this.$_zeroBaseline$ && null != this.$_globalMax$) {
          for(this.$_globalMin$ = this.$_globalMax$;this.$_globalMin$ >= this.$_dataMin$;) {
            this.$_globalMin$ -= $options$$23_scaleUnit$$inline_1705$$
          }
        }else {
          this.$_globalMin$ = (window.Math.ceil(this.$_dataMin$ / $options$$23_scaleUnit$$inline_1705$$) - 1) * $options$$23_scaleUnit$$inline_1705$$
        }
      }
    }
    0 <= this.$_dataMin$ && (this.$_globalMin$ = window.Math.max(this.$_globalMin$, 0))
  }
  if(null == this.$_globalMax$) {
    if(this.$_majorTickCount$) {
      this.$_globalMax$ = this.$_globalMin$ + this.$_majorTickCount$ * $options$$23_scaleUnit$$inline_1705$$
    }else {
      if(this.$_zeroBaseline$ && 0 >= this.$_dataMax$) {
        this.$_globalMax$ = 0
      }else {
        if($context$$18_continuousExtent$$inline_1704$$) {
          this.$_globalMax$ = this.$_dataMax$ + 0.1 * (this.$_dataMax$ - this.$_dataMin$)
        }else {
          if(this.$_zeroBaseline$) {
            this.$_globalMax$ = (window.Math.floor(this.$_dataMax$ / $options$$23_scaleUnit$$inline_1705$$) + 1) * $options$$23_scaleUnit$$inline_1705$$
          }else {
            for(this.$_globalMax$ = this.$_globalMin$;this.$_globalMax$ <= this.$_dataMax$;) {
              this.$_globalMax$ += $options$$23_scaleUnit$$inline_1705$$
            }
          }
        }
      }
    }
    0 >= this.$_dataMax$ && (this.$_globalMax$ = window.Math.min(this.$_globalMax$, 0))
  }
  this.$_globalMax$ == this.$_globalMin$ && (this.$_globalMax$ = 100, this.$_globalMin$ = 0, $options$$23_scaleUnit$$inline_1705$$ = (this.$_globalMax$ - this.$_globalMin$) / 10);
  null == this.$_minValue$ && (this.$_minValue$ = this.$_globalMin$);
  null == this.$_maxValue$ && (this.$_maxValue$ = this.$_globalMax$);
  if(this.$_minValue$ != this.$_globalMin$ || this.$_maxValue$ != this.$_globalMax$) {
    $options$$23_scaleUnit$$inline_1705$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$_minValue$, this.$_maxValue$)
  }
  this.$_globalMin$ > this.$_minValue$ && (this.$_globalMin$ = this.$_minValue$);
  this.$_globalMax$ < this.$_maxValue$ && (this.$_globalMax$ = this.$_maxValue$);
  this.$_majorIncrement$ || (this.$_majorIncrement$ = this.$_majorTickCount$ ? (this.$_maxValue$ - this.$_minValue$) / this.$_majorTickCount$ : window.Math.max($options$$23_scaleUnit$$inline_1705$$, this.$_minMajorIncrement$));
  this.$_majorTickCount$ || (this.$_majorTickCount$ = (this.$_maxValue$ - this.$_minValue$) / this.$_majorIncrement$);
  this.$_minorTickCount$ || (this.$_minorTickCount$ = this.$_minorIncrement$ ? this.$_majorIncrement$ / this.$_minorIncrement$ : this.$_isLog$ ? this.$_majorIncrement$ : 2);
  this.$_minorIncrement$ || (this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$);
  this.$GlobalMin$ = this.$linearToActual$(this.$_globalMin$);
  this.$GlobalMax$ = this.$linearToActual$(this.$_globalMax$);
  this.$MinValue$ = this.$linearToActual$(this.$_minValue$);
  this.$MaxValue$ = this.$linearToActual$(this.$_maxValue$)
};
D.$JSCompiler_prototypeAlias$$.$getMinLabel$ = function $$JSCompiler_prototypeAlias$$$$getMinLabel$$() {
  return this.$_zeroBaseline$ || "on" == this.$Options$._continuousExtent && null == this.$Options$.min ? window.Math.ceil(this.$_minValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : window.Math.ceil((this.$_minValue$ - this.$_globalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$_globalMin$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$19$$, $levelIdx$$5$$) {
  if($levelIdx$$5$$ && 0 < $levelIdx$$5$$) {
    return null
  }
  var $labels$$12$$ = [], $container$$10_labelDims$$5$$ = [], $container$$10_labelDims$$5$$ = $context$$19$$.$_stage$;
  if(this.$Options$.tickLabel && this.$Options$.tickLabel.scaling) {
    var $autoPrecision$$ = this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on";
    this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$($context$$19$$, this.$_minValue$, this.$_maxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, $autoPrecision$$)
  }
  for(var $i$$108$$ = 0;$i$$108$$ <= this.$_majorTickCount$;$i$$108$$++) {
    var $label$$19_value$$67$$ = $i$$108$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if($label$$19_value$$67$$ > this.$_maxValue$) {
      break
    }
    var $coord$$4_text$$39$$ = (0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, $label$$19_value$$67$$);
    if(this.$Options$._skipHighestTick) {
      if($label$$19_value$$67$$ == this.$_maxValue$) {
        continue
      }
      if("tangential" != this.$Position$ && window.Math.abs($coord$$4_text$$39$$ - this.$_maxCoord$) < this.$getTickLabelHeight$()) {
        continue
      }
    }
    this.$_isLog$ && ($label$$19_value$$67$$ = this.$linearToActual$($label$$19_value$$67$$), this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$($context$$19$$, $label$$19_value$$67$$, $label$$19_value$$67$$, $label$$19_value$$67$$, this.$Options$.tickLabel.scaling, $autoPrecision$$));
    $label$$19_value$$67$$ = (0,D.$JSCompiler_StaticMethods__formatValue$$)(this, $label$$19_value$$67$$);
    $coord$$4_text$$39$$ = this.$CreateLabel$($context$$19$$, $label$$19_value$$67$$, $coord$$4_text$$39$$);
    $labels$$12$$.push($coord$$4_text$$39$$)
  }
  "tangential" != this.$Position$ && ($container$$10_labelDims$$5$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$12$$, $container$$10_labelDims$$5$$), $labels$$12$$ = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$12$$, $container$$10_labelDims$$5$$));
  return $labels$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  for(var $coords$$ = [], $i$$109$$ = 0;$i$$109$$ <= this.$_majorTickCount$;$i$$109$$++) {
    var $value$$68$$ = $i$$109$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if($value$$68$$ > this.$_maxValue$) {
      break
    }
    this.$Options$._skipHighestTick && $value$$68$$ == this.$_maxValue$ || $coords$$.push((0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, $value$$68$$))
  }
  return $coords$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  for(var $coords$$1$$ = [], $i$$110$$ = -1;$i$$110$$ <= this.$_majorTickCount$;$i$$110$$++) {
    var $value$$69$$ = $i$$110$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if(this.$_isLog$ && 1 == this.$_majorIncrement$ && 1 == this.$_minorIncrement$) {
      for(var $j$$20$$ = 2;9 >= $j$$20$$;$j$$20$$++) {
        var $coord$$6_linearValue_minorValue$$ = $value$$69$$ + D.$DvtMath$$.$log10$($j$$20$$);
        if($coord$$6_linearValue_minorValue$$ > this.$_maxValue$) {
          break
        }
        $coord$$6_linearValue_minorValue$$ < this.$_minValue$ || ($coord$$6_linearValue_minorValue$$ = (0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, $coord$$6_linearValue_minorValue$$), $coords$$1$$.push($coord$$6_linearValue_minorValue$$))
      }
    }else {
      for($j$$20$$ = 1;$j$$20$$ < this.$_minorTickCount$;$j$$20$$++) {
        $coord$$6_linearValue_minorValue$$ = $value$$69$$ + $j$$20$$ * this.$_minorIncrement$;
        if($coord$$6_linearValue_minorValue$$ > this.$_maxValue$) {
          break
        }
        $coord$$6_linearValue_minorValue$$ < this.$_minValue$ || ($coord$$6_linearValue_minorValue$$ = (0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, $coord$$6_linearValue_minorValue$$), $coords$$1$$.push($coord$$6_linearValue_minorValue$$))
      }
    }
  }
  return $coords$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return this.$_isLog$ ? this.$_minCoord$ : this.$getBoundedCoordAt$(0)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$7$$) {
  return null == $coord$$7$$ ? null : this.$linearToActual$(this.$_minValue$ + ($coord$$7$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$_maxValue$ - this.$_minValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$71$$) {
  return(0,D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$)(this, this.$actualToLinear$($value$$71$$))
};
D.$JSCompiler_StaticMethods__getUnboundedCoordAt$$ = function $$JSCompiler_StaticMethods__getUnboundedCoordAt$$$($JSCompiler_StaticMethods__getUnboundedCoordAt$self$$, $value$$72$$) {
  return null == $value$$72$$ ? null : $JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_minCoord$ + ($value$$72$$ - $JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_minValue$) / ($JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_maxValue$ - $JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_minValue$) * ($JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_maxCoord$ - $JSCompiler_StaticMethods__getUnboundedCoordAt$self$$.$_minCoord$)
};
D.$JSCompiler_StaticMethods__formatValue$$ = function $$JSCompiler_StaticMethods__formatValue$$$($JSCompiler_StaticMethods__formatValue$self$$, $value$$73$$) {
  if($JSCompiler_StaticMethods__formatValue$self$$.$_converter$ && ($JSCompiler_StaticMethods__formatValue$self$$.$_converter$.getAsString || $JSCompiler_StaticMethods__formatValue$self$$.$_converter$.format)) {
    if($JSCompiler_StaticMethods__formatValue$self$$.$_axisValueFormatter$) {
      return $JSCompiler_StaticMethods__formatValue$self$$.$_axisValueFormatter$.$format$($value$$73$$, $JSCompiler_StaticMethods__formatValue$self$$.$_converter$)
    }
    if($JSCompiler_StaticMethods__formatValue$self$$.$_converter$.getAsString) {
      return $JSCompiler_StaticMethods__formatValue$self$$.$_converter$.getAsString($value$$73$$)
    }
    if($JSCompiler_StaticMethods__formatValue$self$$.$_converter$.format) {
      return $JSCompiler_StaticMethods__formatValue$self$$.$_converter$.format($value$$73$$)
    }
  }else {
    if($JSCompiler_StaticMethods__formatValue$self$$.$_axisValueFormatter$) {
      return $JSCompiler_StaticMethods__formatValue$self$$.$_axisValueFormatter$.$format$($value$$73$$)
    }
    var $decimals_t$$9$$ = D.$DvtMath$$.$log10$($JSCompiler_StaticMethods__formatValue$self$$.$_majorIncrement$), $decimals_t$$9$$ = window.Math.max(window.Math.ceil(-$decimals_t$$9$$), 0);
    return $value$$73$$.toFixed($decimals_t$$9$$)
  }
};
D.$JSCompiler_StaticMethods__calcAxisScale$$ = function $$JSCompiler_StaticMethods__calcAxisScale$$$($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$, $min$$, $first2Digits_firstDigit_increment_max_spread$$) {
  if($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_majorIncrement$) {
    return $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_majorIncrement$
  }
  $first2Digits_firstDigit_increment_max_spread$$ -= $min$$;
  if($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_isLog$) {
    return window.Math.floor($first2Digits_firstDigit_increment_max_spread$$ / 8) + 1
  }
  if(0 == $first2Digits_firstDigit_increment_max_spread$$) {
    return 0 == $min$$ ? 10 : window.Math.pow(10, window.Math.floor(D.$DvtMath$$.$log10$($min$$)) - 1)
  }
  if($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_majorTickCount$) {
    return $first2Digits_firstDigit_increment_max_spread$$ /= $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$.$_majorTickCount$, $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$ = window.Math.pow(10, window.Math.ceil(D.$DvtMath$$.$log10$($first2Digits_firstDigit_increment_max_spread$$) - 1)), $first2Digits_firstDigit_increment_max_spread$$ /= $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$, $first2Digits_firstDigit_increment_max_spread$$ = 1 < $first2Digits_firstDigit_increment_max_spread$$ && 
    1.5 >= $first2Digits_firstDigit_increment_max_spread$$ ? 1.5 : 5 < $first2Digits_firstDigit_increment_max_spread$$ ? 10 : window.Math.ceil($first2Digits_firstDigit_increment_max_spread$$), $first2Digits_firstDigit_increment_max_spread$$ * $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$
  }
  $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$ = D.$DvtMath$$.$log10$($first2Digits_firstDigit_increment_max_spread$$);
  $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$ = window.Math.pow(10, window.Math.ceil($JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$) - 2);
  $first2Digits_firstDigit_increment_max_spread$$ = window.Math.round($first2Digits_firstDigit_increment_max_spread$$ / $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$);
  return(10 <= $first2Digits_firstDigit_increment_max_spread$$ && 14 >= $first2Digits_firstDigit_increment_max_spread$$ ? 2 : 15 <= $first2Digits_firstDigit_increment_max_spread$$ && 19 >= $first2Digits_firstDigit_increment_max_spread$$ ? 3 : 20 <= $first2Digits_firstDigit_increment_max_spread$$ && 24 >= $first2Digits_firstDigit_increment_max_spread$$ ? 4 : 25 <= $first2Digits_firstDigit_increment_max_spread$$ && 45 >= $first2Digits_firstDigit_increment_max_spread$$ ? 5 : 46 <= $first2Digits_firstDigit_increment_max_spread$$ && 
  80 >= $first2Digits_firstDigit_increment_max_spread$$ ? 10 : 20) * $JSCompiler_StaticMethods__calcAxisScale$self_t$$10_testVal$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_get$$)("$_majorTickCount$");
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_get$$)("$_minorTickCount$");
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMajorIncrement$$() {
  return this.$linearToActual$(this.$_majorIncrement$)
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return(this.$_globalMax$ - this.$_globalMin$) / 64
};
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? this.$StartOverflow$ : this.$EndOverflow$
};
D.$JSCompiler_prototypeAlias$$.$linearToActual$ = function $$JSCompiler_prototypeAlias$$$$linearToActual$$($value$$74$$) {
  return null == $value$$74$$ ? null : this.$_isLog$ ? window.Math.pow(10, $value$$74$$) : $value$$74$$
};
D.$JSCompiler_prototypeAlias$$.$actualToLinear$ = function $$JSCompiler_prototypeAlias$$$$actualToLinear$$($value$$75$$) {
  return null == $value$$75$$ ? null : this.$_isLog$ ? 0 < $value$$75$$ ? D.$DvtMath$$.$log10$($value$$75$$) : null : $value$$75$$
};
D.$DvtGroupAxisInfo$$ = function $$DvtGroupAxisInfo$$$($context$$20$$, $options$$24$$, $availSpace$$13$$) {
  this.Init($context$$20$$, $options$$24$$, $availSpace$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGroupAxisInfo$$, D.$DvtAxisInfo$$, "DvtGroupAxisInfo");
D.$DvtGroupAxisInfo$$.prototype.Init = function $$DvtGroupAxisInfo$$$$Init$($context$$21$$, $options$$25$$, $availSpace$$14$$) {
  D.$DvtGroupAxisInfo$$.$superclass$.Init.call(this, $context$$21$$, $options$$25$$, $availSpace$$14$$);
  var $i$$111_isRTL$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$21$$), $isHoriz$$1$$ = "top" == this.$Position$ || "bottom" == this.$Position$;
  if($isHoriz$$1$$ && $i$$111_isRTL$$5$$) {
    var $endOffset$$1_temp$$ = this.$StartCoord$;
    this.$StartCoord$ = this.$EndCoord$;
    this.$EndCoord$ = $endOffset$$1_temp$$
  }
  this.$_levelsArray$ = [];
  this.$_groupCount$ = (0,D.$JSCompiler_StaticMethods__generateLevelsArray$$)(this, $options$$25$$.groups, 0, this.$_levelsArray$, 0);
  this.$_numLevels$ = this.$_levelsArray$.length;
  this.$_areSeparatorsRendered$ = "on" == $options$$25$$.groupSeparators.rendered;
  this.$_separatorColor$ = $options$$25$$.groupSeparators.color;
  this.$_lastRenderedLevel$ = null;
  this.$_drilling$ = $options$$25$$.drilling;
  var $endOffset$$1_temp$$ = 0 < $options$$25$$.endGroupOffset ? (0,window.Number)($options$$25$$.endGroupOffset) : 0, $startOffset$$1$$ = 0 < $options$$25$$.startGroupOffset ? (0,window.Number)($options$$25$$.startGroupOffset) : 0;
  this.$DataMin$ = 0;
  this.$DataMax$ = this.$_groupCount$ - 1;
  this.$GlobalMin$ = null == $options$$25$$.min ? this.$DataMin$ - $startOffset$$1$$ : $options$$25$$.min;
  this.$GlobalMax$ = null == $options$$25$$.max ? this.$DataMax$ + $endOffset$$1_temp$$ : $options$$25$$.max;
  var $startIndex$$12$$ = this.$getGroupIndex$($options$$25$$.viewportStartGroup), $endIndex$$12$$ = this.$getGroupIndex$($options$$25$$.viewportEndGroup);
  -1 != $startIndex$$12$$ && (this.$MinValue$ = $startIndex$$12$$ - $startOffset$$1$$);
  -1 != $endIndex$$12$$ && (this.$MaxValue$ = $endIndex$$12$$ + $endOffset$$1_temp$$);
  null != $options$$25$$.viewportMin && (this.$MinValue$ = $options$$25$$.viewportMin);
  null != $options$$25$$.viewportMax && (this.$MaxValue$ = $options$$25$$.viewportMax);
  null == this.$MinValue$ && (this.$MinValue$ = this.$GlobalMin$);
  null == this.$MaxValue$ && (this.$MaxValue$ = this.$GlobalMax$);
  this.$GlobalMin$ > this.$MinValue$ && (this.$GlobalMin$ = this.$MinValue$);
  this.$GlobalMax$ < this.$MaxValue$ && (this.$GlobalMax$ = this.$MaxValue$);
  this.$_groupWidthRatios$ = $options$$25$$._groupWidthRatios;
  (0,D.$JSCompiler_StaticMethods__processGroupWidthRatios$$)(this);
  this.$_startBuffer$ = $i$$111_isRTL$$5$$ ? $options$$25$$.rightBuffer : $options$$25$$.leftBuffer;
  this.$_endBuffer$ = $i$$111_isRTL$$5$$ ? $options$$25$$.leftBuffer : $options$$25$$.rightBuffer;
  this.$_isLabelRotated$ = [];
  for($i$$111_isRTL$$5$$ = 0;$i$$111_isRTL$$5$$ < this.$_numLevels$;$i$$111_isRTL$$5$$++) {
    this.$_isLabelRotated$.push(!1)
  }
  this.$_renderGridAtLabels$ = $options$$25$$._renderGridAtLabels;
  this.$_labels$ = null;
  this.$_maxSpace$ = $isHoriz$$1$$ ? $availSpace$$14$$.$h$ : $availSpace$$14$$.$w$;
  $options$$25$$.title && (this.$_maxSpace$ -= D.$DvtTextUtils$$.$getTextStringHeight$($context$$21$$, $options$$25$$.titleStyle) + (0,D.$DvtAxisDefaults$getGapSize$$)($context$$21$$, $options$$25$$, $options$$25$$.layout.titleGap));
  this.$_maxLineWrap$ = 3
};
D.$JSCompiler_StaticMethods__processGroupWidthRatios$$ = function $$JSCompiler_StaticMethods__processGroupWidthRatios$$$($JSCompiler_StaticMethods__processGroupWidthRatios$self$$) {
  if(!$JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$ || 2 > $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$.length) {
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$ = null
  }else {
    for(var $sum$$ = 0, $anchor$$2_groupMin$$, $groupMax$$, $g$$ = 0;$g$$ < $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupCount$;$g$$++) {
      $anchor$$2_groupMin$$ = 0 == $g$$ ? $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MinValue$ : window.Math.max($g$$ - 0.5, $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MinValue$), $groupMax$$ = $g$$ == $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupCount$ - 1 ? $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MaxValue$ : window.Math.min($g$$ + 0.5, $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MaxValue$), $groupMax$$ > $anchor$$2_groupMin$$ && 
      ($sum$$ += ($groupMax$$ - $anchor$$2_groupMin$$) * $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$[$g$$])
    }
    var $totalWidth$$1$$ = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$EndCoord$ - $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$StartCoord$;
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidths$ = D.$DvtArrayUtils$$.map($JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$, function($JSCompiler_StaticMethods__processGroupWidthRatios$self$$) {
      return $JSCompiler_StaticMethods__processGroupWidthRatios$self$$ * $totalWidth$$1$$ / $sum$$
    });
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$ = [];
    for($g$$ = 0;$g$$ < $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidthRatios$.length - 1;$g$$++) {
      $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$.push($g$$ + 0.5)
    }
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$ = [];
    $anchor$$2_groupMin$$ = window.Math.min(window.Math.max(window.Math.round($JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MinValue$), 0), $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$.length - 1);
    $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$anchor$$2_groupMin$$] = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$StartCoord$ + ($JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$[$anchor$$2_groupMin$$] - $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$MinValue$) * $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidths$[$anchor$$2_groupMin$$];
    for($g$$ = $anchor$$2_groupMin$$ + 1;$g$$ < $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderValues$.length;$g$$++) {
      $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$g$$] = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$g$$ - 1] + $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidths$[$g$$]
    }
    for($g$$ = $anchor$$2_groupMin$$ - 1;0 <= $g$$;$g$$--) {
      $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$g$$] = $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_borderCoords$[$g$$ + 1] - $JSCompiler_StaticMethods__processGroupWidthRatios$self$$.$_groupWidths$[$g$$ + 1]
    }
  }
};
D.$JSCompiler_StaticMethods__rotateLabels$$ = function $$JSCompiler_StaticMethods__rotateLabels$$$($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$13$$, $container$$11$$, $overflow$$1_text$$40$$, $level$$41$$) {
  var $x$$69$$, $context$$22$$ = $JSCompiler_StaticMethods__rotateLabels$self$$.$getCtx$(), $isRTL$$6_labelDims$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$22$$), $isHierarchical$$2$$ = 1 < $JSCompiler_StaticMethods__rotateLabels$self$$.$_numLevels$;
  null == $level$$41$$ && ($level$$41$$ = $JSCompiler_StaticMethods__rotateLabels$self$$.$_numLevels$ - 1);
  $JSCompiler_StaticMethods__rotateLabels$self$$.$_isLabelRotated$[$level$$41$$] = !0;
  $isHierarchical$$2$$ || $JSCompiler_StaticMethods__rotateLabels$self$$.$_setOverflow$($overflow$$1_text$$40$$, $overflow$$1_text$$40$$, $labels$$13$$);
  for(var $i$$112$$ = 0;$i$$112$$ < $labels$$13$$.length;$i$$112$$++) {
    if($overflow$$1_text$$40$$ = $labels$$13$$[$i$$112$$], null != $overflow$$1_text$$40$$) {
      $x$$69$$ = $overflow$$1_text$$40$$.$getX$();
      if($overflow$$1_text$$40$$ instanceof D.$DvtMultilineText$$ || $overflow$$1_text$$40$$ instanceof D.$DvtBackgroundMultilineText$$) {
        var $groupSpan$$ = $JSCompiler_StaticMethods__rotateLabels$self$$.$getGroupWidth$() * ($JSCompiler_StaticMethods__rotateLabels$self$$.$getEndIndex$($i$$112$$, $level$$41$$) - (0,D.$JSCompiler_StaticMethods_getStartIndex$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $i$$112$$, $level$$41$$) + 1);
        2 * $overflow$$1_text$$40$$.$getLineHeight$() < $groupSpan$$ ? $overflow$$1_text$$40$$.$wrapText$($JSCompiler_StaticMethods__rotateLabels$self$$.$_maxSpace$, 3 * $overflow$$1_text$$40$$.$getLineHeight$(), 1) : $overflow$$1_text$$40$$.$setWrapEnabled$(!1)
      }
      $overflow$$1_text$$40$$.$setX$(0);
      $overflow$$1_text$$40$$.$setY$(0);
      $isRTL$$6_labelDims$$6$$ ? $overflow$$1_text$$40$$.$setRotation$(window.Math.PI / 2) : $overflow$$1_text$$40$$.$setRotation$(3 * window.Math.PI / 2);
      $overflow$$1_text$$40$$.$setTranslateX$($x$$69$$)
    }
  }
  $isRTL$$6_labelDims$$6$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$13$$, $container$$11$$, null, $level$$41$$);
  "normal" == $JSCompiler_StaticMethods__rotateLabels$self$$.$Options$.tickLabel.style.$getStyle$("white-space") && (0,D.$JSCompiler_StaticMethods__sanitizeWrappedText$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $context$$22$$, $isRTL$$6_labelDims$$6$$, $labels$$13$$, !0, $isHierarchical$$2$$) && ($isRTL$$6_labelDims$$6$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$13$$, $container$$11$$, null, $level$$41$$));
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$13$$, $isRTL$$6_labelDims$$6$$)
};
D.$JSCompiler_StaticMethods__sanitizeWrappedText$$ = function $$JSCompiler_StaticMethods__sanitizeWrappedText$$$($JSCompiler_StaticMethods__sanitizeWrappedText$self$$, $context$$23$$, $labelDims$$7_updateLabelDims$$1$$, $labels$$14$$, $isRotated$$2$$, $isHierarchical$$3$$) {
  for(var $totalSpace_updateLabelDims$$inline_1711$$ = !1;(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods__sanitizeWrappedText$self$$, $labelDims$$7_updateLabelDims$$1$$, 0) && 1 < $JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$_maxLineWrap$;) {
    for(var $totalSpace_updateLabelDims$$inline_1711$$ = !0, $i$$113_i$$inline_1712$$ = 0;$i$$113_i$$inline_1712$$ < $labels$$14$$.length;$i$$113_i$$inline_1712$$++) {
      var $lineHeight$$inline_1714_text$$41_text$$inline_1713$$ = $labels$$14$$[$i$$113_i$$inline_1712$$];
      if(($lineHeight$$inline_1714_text$$41_text$$inline_1713$$ instanceof D.$DvtMultilineText$$ || $lineHeight$$inline_1714_text$$41_text$$inline_1713$$ instanceof D.$DvtBackgroundMultilineText$$) && $lineHeight$$inline_1714_text$$41_text$$inline_1713$$.$getLineCount$() == $JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$_maxLineWrap$) {
        $lineHeight$$inline_1714_text$$41_text$$inline_1713$$ = $lineHeight$$inline_1714_text$$41_text$$inline_1713$$.$getLineHeight$(), $isRotated$$2$$ ? $labelDims$$7_updateLabelDims$$1$$[$i$$113_i$$inline_1712$$].$w$ -= $lineHeight$$inline_1714_text$$41_text$$inline_1713$$ : ($labelDims$$7_updateLabelDims$$1$$[$i$$113_i$$inline_1712$$].y += 0.5 * $lineHeight$$inline_1714_text$$41_text$$inline_1713$$, $labelDims$$7_updateLabelDims$$1$$[$i$$113_i$$inline_1712$$].$h$ -= $lineHeight$$inline_1714_text$$41_text$$inline_1713$$)
      }
    }
    $JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$_maxLineWrap$--
  }
  $labelDims$$7_updateLabelDims$$1$$ = $totalSpace_updateLabelDims$$inline_1711$$;
  for($i$$113_i$$inline_1712$$ = $totalSpace_updateLabelDims$$inline_1711$$ = 0;$i$$113_i$$inline_1712$$ < $labels$$14$$.length;$i$$113_i$$inline_1712$$++) {
    if($lineHeight$$inline_1714_text$$41_text$$inline_1713$$ = $labels$$14$$[$i$$113_i$$inline_1712$$]) {
      var $isMultiline$$3$$ = $lineHeight$$inline_1714_text$$41_text$$inline_1713$$ instanceof D.$DvtMultilineText$$ || $lineHeight$$inline_1714_text$$41_text$$inline_1713$$ instanceof D.$DvtBackgroundMultilineText$$;
      $labelDims$$7_updateLabelDims$$1$$ && ($isMultiline$$3$$ && $lineHeight$$inline_1714_text$$41_text$$inline_1713$$.$isWrapEnabled$()) && $lineHeight$$inline_1714_text$$41_text$$inline_1713$$.$wrapText$($JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$_maxSpace$, $lineHeight$$inline_1714_text$$41_text$$inline_1713$$.$getLineHeight$() * $JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$_maxLineWrap$, 1);
      $isHierarchical$$3$$ && ($totalSpace_updateLabelDims$$inline_1711$$ = window.Math.max($totalSpace_updateLabelDims$$inline_1711$$, D.$DvtTextUtils$$.$getTextWidth$($lineHeight$$inline_1714_text$$41_text$$inline_1713$$)));
      $lineHeight$$inline_1714_text$$41_text$$inline_1713$$.$alignMiddle$()
    }
  }
  $isHierarchical$$3$$ && ($JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$_maxSpace$ -= $totalSpace_updateLabelDims$$inline_1711$$ + (0,D.$DvtAxisDefaults$getGapSize$$)($context$$23$$, $JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$Options$, $isRotated$$2$$ ? $JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$Options$.layout.hierarchicalLabelGapHeight : $JSCompiler_StaticMethods__sanitizeWrappedText$self$$.$Options$.layout.hierarchicalLabelGapWidth));
  return $labelDims$$7_updateLabelDims$$1$$
};
D.$DvtGroupAxisInfo$$.prototype.$isLabelRotated$ = function $$DvtGroupAxisInfo$$$$$isLabelRotated$$($level$$42$$) {
  null == $level$$42$$ && ($level$$42$$ = this.$_numLevels$ - 1);
  return this.$_isLabelRotated$[$level$$42$$]
};
D.$DvtGroupAxisInfo$$.prototype.$_setOverflow$ = function $$DvtGroupAxisInfo$$$$$_setOverflow$$($startOverflow$$, $endOverflow$$, $isRTL$$7_labels$$16$$) {
  $startOverflow$$ = window.Math.max($startOverflow$$ - this.$_startBuffer$, 0);
  $endOverflow$$ = window.Math.max($endOverflow$$ - this.$_endBuffer$, 0);
  $isRTL$$7_labels$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$());
  this.$StartCoord$ += ($startOverflow$$ - this.$StartOverflow$) * ($isRTL$$7_labels$$16$$ ? -1 : 1);
  this.$EndCoord$ -= ($endOverflow$$ - this.$EndOverflow$) * ($isRTL$$7_labels$$16$$ ? -1 : 1);
  (0,D.$JSCompiler_StaticMethods__processGroupWidthRatios$$)(this);
  for(var $j$$21$$ = 0;$j$$21$$ < this.$_numLevels$;$j$$21$$++) {
    $isRTL$$7_labels$$16$$ = this.$_labels$[$j$$21$$];
    for(var $i$$115$$ = 0;$i$$115$$ < $isRTL$$7_labels$$16$$.length;$i$$115$$++) {
      var $text$$43$$ = $isRTL$$7_labels$$16$$[$i$$115$$];
      if($text$$43$$) {
        var $coord$$8$$ = (0,D.$JSCompiler_StaticMethods__getLabelCoord$$)(this, $j$$21$$, (0,D.$JSCompiler_StaticMethods_getLabelIndex$$)($text$$43$$));
        $text$$43$$.$setX$($coord$$8$$)
      }
    }
  }
  this.$StartOverflow$ = $startOverflow$$;
  this.$EndOverflow$ = $endOverflow$$
};
D.$DvtGroupAxisInfo$$.prototype.$getLabels$ = function $$DvtGroupAxisInfo$$$$$getLabels$$($context$$24$$, $level$$43$$) {
  null == $level$$43$$ && ($level$$43$$ = this.$_numLevels$ - 1);
  this.$_labels$ || this.$_generateLabels$($context$$24$$);
  return this.$_labels$[$level$$43$$]
};
D.$JSCompiler_StaticMethods__getLabelCoord$$ = function $$JSCompiler_StaticMethods__getLabelCoord$$$($JSCompiler_StaticMethods__getLabelCoord$self$$, $endValue_level$$44$$, $index$$112$$) {
  var $startValue$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)($JSCompiler_StaticMethods__getLabelCoord$self$$, $index$$112$$, $endValue_level$$44$$);
  $endValue_level$$44$$ = $JSCompiler_StaticMethods__getLabelCoord$self$$.$getEndIndex$($index$$112$$, $endValue_level$$44$$);
  if(null == $startValue$$ || null == $endValue_level$$44$$) {
    return null
  }
  $startValue$$ < $JSCompiler_StaticMethods__getLabelCoord$self$$.$MinValue$ && $endValue_level$$44$$ > $JSCompiler_StaticMethods__getLabelCoord$self$$.$MinValue$ && ($startValue$$ = $JSCompiler_StaticMethods__getLabelCoord$self$$.$MinValue$);
  $endValue_level$$44$$ > $JSCompiler_StaticMethods__getLabelCoord$self$$.$MaxValue$ && $startValue$$ < $JSCompiler_StaticMethods__getLabelCoord$self$$.$MaxValue$ && ($endValue_level$$44$$ = $JSCompiler_StaticMethods__getLabelCoord$self$$.$MaxValue$);
  return $JSCompiler_StaticMethods__getLabelCoord$self$$.$getCoordAt$($endValue_level$$44$$ ? $startValue$$ + ($endValue_level$$44$$ - $startValue$$) / 2 : $startValue$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($JSCompiler_temp_const$$293_context$$25$$) {
  var $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$ = [];
  this.$_labels$ = [];
  for(var $container$$12_labelDims$$inline_1732$$ = $JSCompiler_temp_const$$293_context$$25$$.$_stage$, $isHoriz$$2_renderedLabels$$inline_1733$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $endOverflow$$1_isRTL$$8_minLabelDims$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_temp_const$$293_context$$25$$), $isHierarchical$$4_numLabels$$inline_1734$$ = 1 < this.$_numLevels$, $groupWidth_labelDims$$9$$ = this.$getGroupWidth$(), $availSize$$1$$ = this.$_maxSpace$, $firstLabelDims$$inline_1735_gap$$7$$ = 
  $isHierarchical$$4_numLabels$$inline_1734$$ ? (0,D.$DvtAxisDefaults$getGapSize$$)($JSCompiler_temp_const$$293_context$$25$$, this.$Options$, this.$Options$.layout[$isHoriz$$2_renderedLabels$$inline_1733$$ ? "hierarchicalLabelGapHeight" : "hierarchicalLabelGapWidth"]) : 0, $j$$inline_1737_rotationEnabled$$ = "auto" == this.$Options$.tickLabel.rotation && $isHoriz$$2_renderedLabels$$inline_1733$$, $tickLabelStyle_wrapping$$ = this.$Options$.tickLabel.style, $tickLabelStyle_wrapping$$ = "normal" == 
  $tickLabelStyle_wrapping$$.$getStyle$("white-space") && "tangential" != this.$Position$ && $groupWidth_labelDims$$9$$ > D.$DvtTextUtils$$.$getTextStringHeight$($JSCompiler_temp_const$$293_context$$25$$, $tickLabelStyle_wrapping$$), $dims$$4_label$$20_textWidth$$inline_1728$$, $firstLabel$$, $lastLabel_lastLabelDim_maxLabelDims$$, $cssStyle$$23$$, $coord$$9_text$$44$$, $level$$45_startOverflow$$1$$ = 0;$level$$45_startOverflow$$1$$ < this.$_numLevels$;$level$$45_startOverflow$$1$$++) {
    for(var $j$$22_levels$$ = this.$_levelsArray$[$level$$45_startOverflow$$1$$], $i$$116_totalSpace$$1$$ = 0;$i$$116_totalSpace$$1$$ < $j$$22_levels$$.length;$i$$116_totalSpace$$1$$++) {
      if($j$$22_levels$$[$i$$116_totalSpace$$1$$]) {
        if($dims$$4_label$$20_textWidth$$inline_1728$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)(this, $i$$116_totalSpace$$1$$, $level$$45_startOverflow$$1$$), "" == $dims$$4_label$$20_textWidth$$inline_1728$$ || !$dims$$4_label$$20_textWidth$$inline_1728$$ && 0 != $dims$$4_label$$20_textWidth$$inline_1728$$) {
          $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$.push(null)
        }else {
          if($coord$$9_text$$44$$ = (0,D.$JSCompiler_StaticMethods__getLabelCoord$$)(this, $level$$45_startOverflow$$1$$, $i$$116_totalSpace$$1$$), null != $coord$$9_text$$44$$) {
            var $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$ = (0,D.$JSCompiler_StaticMethods__getGroupAttribute$$)(this, $i$$116_totalSpace$$1$$, $level$$45_startOverflow$$1$$, "labelStyle");
            $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$ ? ($bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$ = new D.$DvtCSSStyle$$($bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$), $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$.$getStyle$("font-size") || $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$.$setStyle$("font-size", this.$Options$.tickLabel.style.$getStyle$("font-size")), $cssStyle$$23$$ = $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$) : 
            $cssStyle$$23$$ = null;
            $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$ = $tickLabelStyle_wrapping$$ && (0,window.isNaN)($dims$$4_label$$20_textWidth$$inline_1728$$) && 0 <= $dims$$4_label$$20_textWidth$$inline_1728$$.indexOf(" ");
            $coord$$9_text$$44$$ = this.$CreateLabel$($JSCompiler_temp_const$$293_context$$25$$, $dims$$4_label$$20_textWidth$$inline_1728$$, $coord$$9_text$$44$$, $cssStyle$$23$$, $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$);
            var $groupSpan$$1$$ = $groupWidth_labelDims$$9$$ * (this.$getEndIndex$($i$$116_totalSpace$$1$$, $level$$45_startOverflow$$1$$) - (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $i$$116_totalSpace$$1$$, $level$$45_startOverflow$$1$$) + 1), $JSCompiler_temp$$12_rotationEnabled$$inline_1726$$;
            if($JSCompiler_temp$$12_rotationEnabled$$inline_1726$$ = $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$) {
              $JSCompiler_temp$$12_rotationEnabled$$inline_1726$$ = $j$$inline_1737_rotationEnabled$$;
              var $maxWidth$$inline_1727$$ = $isHoriz$$2_renderedLabels$$inline_1733$$ ? $groupSpan$$1$$ : $availSize$$1$$;
              $dims$$4_label$$20_textWidth$$inline_1728$$ = D.$DvtTextUtils$$.$getTextStringWidth$($JSCompiler_temp_const$$293_context$$25$$, $dims$$4_label$$20_textWidth$$inline_1728$$, $cssStyle$$23$$);
              $JSCompiler_temp$$12_rotationEnabled$$inline_1726$$ = $dims$$4_label$$20_textWidth$$inline_1728$$ >= $maxWidth$$inline_1727$$ && ($dims$$4_label$$20_textWidth$$inline_1728$$ / this.$_maxLineWrap$ < $maxWidth$$inline_1727$$ || !$JSCompiler_temp$$12_rotationEnabled$$inline_1726$$) ? !0 : !1
            }
            $JSCompiler_temp$$12_rotationEnabled$$inline_1726$$ ? $isHoriz$$2_renderedLabels$$inline_1733$$ ? $coord$$9_text$$44$$.$wrapText$($groupSpan$$1$$, $availSize$$1$$, 1, !0) : $coord$$9_text$$44$$.$wrapText$($availSize$$1$$, $coord$$9_text$$44$$.$getLineHeight$() * this.$_maxLineWrap$, 1, !1) : $bMultiline$$1_cssStyle$$inline_1720_labelStyle$$inline_1719$$ && !$isHoriz$$2_renderedLabels$$inline_1733$$ && $coord$$9_text$$44$$.$setWrapEnabled$(!1);
            $coord$$9_text$$44$$.$_index$ = $i$$116_totalSpace$$1$$;
            $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$.push($coord$$9_text$$44$$);
            !$firstLabel$$ && 0 == $level$$45_startOverflow$$1$$ && ($firstLabel$$ = $coord$$9_text$$44$$);
            0 == $level$$45_startOverflow$$1$$ && ($lastLabel_lastLabelDim_maxLabelDims$$ = $coord$$9_text$$44$$)
          }else {
            $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$.push(null)
          }
        }
      }else {
        $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$.push(null)
      }
    }
    if($tickLabelStyle_wrapping$$ && $isHierarchical$$4_numLabels$$inline_1734$$) {
      for($j$$22_levels$$ = $i$$116_totalSpace$$1$$ = 0;$j$$22_levels$$ < $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$.length;$j$$22_levels$$++) {
        $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$[$j$$22_levels$$] && ($dims$$4_label$$20_textWidth$$inline_1728$$ = $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$[$j$$22_levels$$].$measureDimensions$(), $i$$116_totalSpace$$1$$ = window.Math.max($i$$116_totalSpace$$1$$, $isHoriz$$2_renderedLabels$$inline_1733$$ ? $dims$$4_label$$20_textWidth$$inline_1728$$.$h$ : $dims$$4_label$$20_textWidth$$inline_1728$$.$w$))
      }
      $availSize$$1$$ -= $i$$116_totalSpace$$1$$ + $firstLabelDims$$inline_1735_gap$$7$$
    }
    this.$_labels$.push($JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$);
    $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$ = []
  }
  $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$ = this.$_labels$[this.$_numLevels$ - 1];
  $groupWidth_labelDims$$9$$ = [];
  if($firstLabel$$) {
    if("tangential" == this.$Position$) {
      $groupWidth_labelDims$$9$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $container$$12_labelDims$$inline_1732$$);
      $JSCompiler_temp_const$$293_context$$25$$ = this.$_labels$;
      $container$$12_labelDims$$inline_1732$$ = $groupWidth_labelDims$$9$$;
      $isHoriz$$2_renderedLabels$$inline_1733$$ = [];
      $isHierarchical$$4_numLabels$$inline_1734$$ = $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$.length;
      $firstLabelDims$$inline_1735_gap$$7$$ = null;
      if(1 < $isHierarchical$$4_numLabels$$inline_1734$$) {
        for(var $firstLabelDim_prevLabelDims$$inline_1736$$, $j$$inline_1737_rotationEnabled$$ = 0;$j$$inline_1737_rotationEnabled$$ < $isHierarchical$$4_numLabels$$inline_1734$$;$j$$inline_1737_rotationEnabled$$++) {
          if($container$$12_labelDims$$inline_1732$$[$j$$inline_1737_rotationEnabled$$] && (!$firstLabelDim_prevLabelDims$$inline_1736$$ || $firstLabelDim_prevLabelDims$$inline_1736$$ && !(0,D.$JSCompiler_StaticMethods_IsOverlappingDims$$)($firstLabelDim_prevLabelDims$$inline_1736$$, $container$$12_labelDims$$inline_1732$$[$j$$inline_1737_rotationEnabled$$]))) {
            $firstLabelDims$$inline_1735_gap$$7$$ || ($firstLabelDims$$inline_1735_gap$$7$$ = $container$$12_labelDims$$inline_1732$$[$j$$inline_1737_rotationEnabled$$]), $isHoriz$$2_renderedLabels$$inline_1733$$.push($JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$[$j$$inline_1737_rotationEnabled$$]), $firstLabelDim_prevLabelDims$$inline_1736$$ = $container$$12_labelDims$$inline_1732$$[$j$$inline_1737_rotationEnabled$$]
          }
        }
        (0,D.$JSCompiler_StaticMethods_IsOverlappingDims$$)($firstLabelDim_prevLabelDims$$inline_1736$$, $firstLabelDims$$inline_1735_gap$$7$$) && $isHoriz$$2_renderedLabels$$inline_1733$$.pop();
        $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$ = $isHoriz$$2_renderedLabels$$inline_1733$$
      }
      $JSCompiler_temp_const$$293_context$$25$$[0] = $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$
    }else {
      $firstLabelDim_prevLabelDims$$inline_1736$$ = $firstLabel$$.$measureDimensions$();
      $isHoriz$$2_renderedLabels$$inline_1733$$ && (null != this.$Options$._startOverflow && null != this.$Options$._endOverflow ? ($level$$45_startOverflow$$1$$ = this.$Options$._startOverflow, $endOverflow$$1_isRTL$$8_minLabelDims$$ = this.$Options$._endOverflow) : ($lastLabel_lastLabelDim_maxLabelDims$$ = $lastLabel_lastLabelDim_maxLabelDims$$.$measureDimensions$(), $level$$45_startOverflow$$1$$ = $endOverflow$$1_isRTL$$8_minLabelDims$$ ? $firstLabelDim_prevLabelDims$$inline_1736$$.$w$ + $firstLabelDim_prevLabelDims$$inline_1736$$.x - 
      this.$StartCoord$ : this.$StartCoord$ - $firstLabelDim_prevLabelDims$$inline_1736$$.x, $endOverflow$$1_isRTL$$8_minLabelDims$$ = $endOverflow$$1_isRTL$$8_minLabelDims$$ ? this.$EndCoord$ - $lastLabel_lastLabelDim_maxLabelDims$$.x : $lastLabel_lastLabelDim_maxLabelDims$$.$w$ + $lastLabel_lastLabelDim_maxLabelDims$$.x - this.$EndCoord$), ($level$$45_startOverflow$$1$$ > this.$_startBuffer$ || $endOverflow$$1_isRTL$$8_minLabelDims$$ > this.$_endBuffer$) && this.$_setOverflow$($level$$45_startOverflow$$1$$, 
      $endOverflow$$1_isRTL$$8_minLabelDims$$, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$));
      for($level$$45_startOverflow$$1$$ = 0;$level$$45_startOverflow$$1$$ < this.$_numLevels$;$level$$45_startOverflow$$1$$++) {
        if($JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$ = this.$_labels$[$level$$45_startOverflow$$1$$], $endOverflow$$1_isRTL$$8_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $container$$12_labelDims$$inline_1732$$, 0.3, $level$$45_startOverflow$$1$$), $lastLabel_lastLabelDim_maxLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, 
        $container$$12_labelDims$$inline_1732$$, null, $level$$45_startOverflow$$1$$), (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $lastLabel_lastLabelDim_maxLabelDims$$, 0) || (this.$_labels$[$level$$45_startOverflow$$1$$] = $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$), $isHoriz$$2_renderedLabels$$inline_1733$$) {
          if($j$$inline_1737_rotationEnabled$$) {
            if((0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$8_minLabelDims$$, 0)) {
              this.$_labels$[$level$$45_startOverflow$$1$$] = (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $container$$12_labelDims$$inline_1732$$, $firstLabelDim_prevLabelDims$$inline_1736$$.$h$ / 2, $level$$45_startOverflow$$1$$)
            }else {
              if($groupWidth_labelDims$$9$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $container$$12_labelDims$$inline_1732$$), (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $groupWidth_labelDims$$9$$, 0)) {
                this.$_labels$[$level$$45_startOverflow$$1$$] = (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $container$$12_labelDims$$inline_1732$$, $firstLabelDim_prevLabelDims$$inline_1736$$.$h$ / 2, $level$$45_startOverflow$$1$$)
              }else {
                if(this.$_labels$[$level$$45_startOverflow$$1$$] = $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $isHierarchical$$4_numLabels$$inline_1734$$) {
                  for($j$$22_levels$$ = $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$ = 0;$j$$22_levels$$ < $groupWidth_labelDims$$9$$.length;$j$$22_levels$$++) {
                    $groupWidth_labelDims$$9$$[$j$$22_levels$$] && ($JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$ = window.Math.max($JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $groupWidth_labelDims$$9$$[$j$$22_levels$$].$h$))
                  }
                  this.$_maxSpace$ -= $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$ + $firstLabelDims$$inline_1735_gap$$7$$
                }
              }
            }
          }else {
            $groupWidth_labelDims$$9$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $container$$12_labelDims$$inline_1732$$), this.$_labels$[$level$$45_startOverflow$$1$$] = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $groupWidth_labelDims$$9$$)
          }
        }else {
          $tickLabelStyle_wrapping$$ && (0,D.$JSCompiler_StaticMethods__sanitizeWrappedText$$)(this, $JSCompiler_temp_const$$293_context$$25$$, $lastLabel_lastLabelDim_maxLabelDims$$, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, !1, $isHierarchical$$4_numLabels$$inline_1734$$) && ($lastLabel_lastLabelDim_maxLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $container$$12_labelDims$$inline_1732$$, 
          null, $level$$45_startOverflow$$1$$)), this.$_labels$[$level$$45_startOverflow$$1$$] = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $JSCompiler_inline_result$$294_labels$$17_labels$$inline_1731_totalHeight$$2$$, $lastLabel_lastLabelDim_maxLabelDims$$)
        }
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  for(var $coords$$2$$ = [], $coord$$10_start$$21$$, $maxIndex$$ = "tangential" == this.$Position$ ? this.$getGroupCount$() : this.$getGroupCount$() - 1, $i$$117$$ = 0;$i$$117$$ < this.$_levelsArray$[0].length;$i$$117$$++) {
    if(this.$_levelsArray$[0][$i$$117$$]) {
      $coord$$10_start$$21$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $i$$117$$, 0);
      var $end$$6$$ = this.$getEndIndex$($i$$117$$, 0);
      $coord$$10_start$$21$$ = this.$_renderGridAtLabels$ ? this.$getCoordAt$($coord$$10_start$$21$$ + 0.5 * ($end$$6$$ - $coord$$10_start$$21$$)) : $end$$6$$ + 0.5 < $maxIndex$$ ? this.$getCoordAt$($end$$6$$ + 0.5) : null;
      null != $coord$$10_start$$21$$ && $coords$$2$$.push($coord$$10_start$$21$$)
    }
  }
  return $coords$$2$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  var $coords$$3$$ = [], $coord$$11_start$$22$$;
  if(!this.$_levelsArray$[1]) {
    return $coords$$3$$
  }
  for(var $i$$118$$ = 0;$i$$118$$ < this.$_levelsArray$[1].length;$i$$118$$++) {
    if(this.$_levelsArray$[1][$i$$118$$]) {
      $coord$$11_start$$22$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $i$$118$$, 1);
      var $end$$7$$ = this.$getEndIndex$($i$$118$$, 1);
      $coord$$11_start$$22$$ = this.$_renderGridAtLabels$ ? this.$getCoordAt$($coord$$11_start$$22$$ + 0.5 * ($end$$7$$ - $coord$$11_start$$22$$)) : $end$$7$$ + 0.5 < this.$getGroupCount$() - 1 ? this.$getCoordAt$($end$$7$$ + 0.5) : null;
      null != $coord$$11_start$$22$$ && $coords$$3$$.push($coord$$11_start$$22$$)
    }
  }
  return $coords$$3$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$12$$) {
  if(null == $coord$$12$$) {
    return null
  }
  if(this.$_groupWidthRatios$) {
    for(var $anchor$$3$$ = this.$_borderCoords$.length, $g$$1$$ = 0;$g$$1$$ < this.$_borderCoords$.length;$g$$1$$++) {
      if($coord$$12$$ <= this.$_borderCoords$[$g$$1$$]) {
        $anchor$$3$$ = $g$$1$$;
        break
      }
    }
    return 0 == $anchor$$3$$ ? this.$_borderValues$[0] - (this.$_borderCoords$[0] - $coord$$12$$) / this.$_groupWidths$[0] : this.$_borderValues$[$anchor$$3$$ - 1] + ($coord$$12$$ - this.$_borderCoords$[$anchor$$3$$ - 1]) / this.$_groupWidths$[$anchor$$3$$]
  }
  return this.$MinValue$ + ($coord$$12$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$76$$) {
  if(null == $value$$76$$) {
    return null
  }
  if(this.$_groupWidthRatios$) {
    for(var $anchor$$4$$ = this.$_borderValues$.length, $g$$2$$ = 0;$g$$2$$ < this.$_borderValues$.length;$g$$2$$++) {
      if($value$$76$$ <= this.$_borderValues$[$g$$2$$]) {
        $anchor$$4$$ = $g$$2$$;
        break
      }
    }
    return 0 == $anchor$$4$$ ? this.$_borderCoords$[0] - this.$_groupWidths$[0] * (this.$_borderValues$[0] - $value$$76$$) : this.$_borderCoords$[$anchor$$4$$ - 1] + this.$_groupWidths$[$anchor$$4$$] * ($value$$76$$ - this.$_borderValues$[$anchor$$4$$ - 1])
  }
  return this.$StartCoord$ + ($value$$76$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_StaticMethods_getLabelAt$$ = function $$JSCompiler_StaticMethods_getLabelAt$$$($JSCompiler_StaticMethods_getLabelAt$self_label$$21$$, $index$$113$$, $level$$46$$) {
  null == $level$$46$$ && ($level$$46$$ = $JSCompiler_StaticMethods_getLabelAt$self_label$$21$$.$_numLevels$ - 1);
  $index$$113$$ = window.Math.round($index$$113$$);
  if(0 > $index$$113$$) {
    return null
  }
  ($JSCompiler_StaticMethods_getLabelAt$self_label$$21$$ = $JSCompiler_StaticMethods_getLabelAt$self_label$$21$$.$_levelsArray$[$level$$46$$] && $JSCompiler_StaticMethods_getLabelAt$self_label$$21$$.$_levelsArray$[$level$$46$$][$index$$113$$] ? $JSCompiler_StaticMethods_getLabelAt$self_label$$21$$.$_levelsArray$[$level$$46$$][$index$$113$$].item : null) && ($JSCompiler_StaticMethods_getLabelAt$self_label$$21$$.name ? $JSCompiler_StaticMethods_getLabelAt$self_label$$21$$ = $JSCompiler_StaticMethods_getLabelAt$self_label$$21$$.name : 
  null != $JSCompiler_StaticMethods_getLabelAt$self_label$$21$$.id && ($JSCompiler_StaticMethods_getLabelAt$self_label$$21$$ = ""));
  return $JSCompiler_StaticMethods_getLabelAt$self_label$$21$$
};
D.$JSCompiler_StaticMethods_getGroupAt$$ = function $$JSCompiler_StaticMethods_getGroupAt$$$($JSCompiler_StaticMethods_getGroupAt$self_label$$22$$, $index$$114$$, $level$$47$$) {
  null == $level$$47$$ && ($level$$47$$ = $JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.$_numLevels$ - 1);
  $index$$114$$ = window.Math.round($index$$114$$);
  if(0 > $index$$114$$) {
    return null
  }
  if($JSCompiler_StaticMethods_getGroupAt$self_label$$22$$ = $JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.$_levelsArray$[$level$$47$$] && $JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.$_levelsArray$[$level$$47$$][$index$$114$$] ? $JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.$_levelsArray$[$level$$47$$][$index$$114$$].item : null) {
    if($JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.id) {
      return $JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.id
    }
    if($JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.name || "" == $JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.name) {
      return $JSCompiler_StaticMethods_getGroupAt$self_label$$22$$.name
    }
  }
  return $JSCompiler_StaticMethods_getGroupAt$self_label$$22$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($index$$116$$, $level$$49$$) {
  return(0,D.$JSCompiler_StaticMethods__getGroupAttribute$$)(this, $index$$116$$, $level$$49$$, "shortDesc")
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$($index$$117$$, $level$$50$$) {
  return(0,D.$JSCompiler_StaticMethods__getGroupAttribute$$)(this, $index$$117$$, $level$$50$$, "action")
};
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = function $$JSCompiler_prototypeAlias$$$$isDrillable$$($index$$118$$, $level$$51$$) {
  var $drilling$$ = (0,D.$JSCompiler_StaticMethods__getGroupAttribute$$)(this, $index$$118$$, $level$$51$$, "drilling");
  return"on" == $drilling$$ ? !0 : "off" == $drilling$$ ? !1 : "on" == this.$_drilling$ || "groupsOnly" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$getGroup$ = function $$JSCompiler_prototypeAlias$$$$getGroup$$($index$$119$$, $level$$52$$) {
  if(0 > $index$$119$$ || $index$$119$$ > this.$getGroupCount$() - 1) {
    return null
  }
  var $groupLabels$$ = [];
  null == $level$$52$$ && ($level$$52$$ = this.$_numLevels$ - 1);
  for(var $startIndex$$13$$ = (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $index$$119$$, $level$$52$$), $levelIndex$$ = 0;$levelIndex$$ <= $level$$52$$;$levelIndex$$++) {
    for(var $levelArray$$ = this.$_levelsArray$[$levelIndex$$], $i$$119$$ = 0;$i$$119$$ < $levelArray$$.length;$i$$119$$++) {
      (0,D.$JSCompiler_StaticMethods_getStartIndex$$)(this, $i$$119$$, $levelIndex$$) <= $startIndex$$13$$ && this.$getEndIndex$($i$$119$$, $levelIndex$$) >= $startIndex$$13$$ && $groupLabels$$.push((0,D.$JSCompiler_StaticMethods_getGroupAt$$)(this, $i$$119$$, $levelIndex$$))
    }
  }
  return 0 < $groupLabels$$.length ? 1 == $groupLabels$$.length ? $groupLabels$$[0] : $groupLabels$$ : null
};
D.$JSCompiler_prototypeAlias$$.$getGroupIndex$ = function $$JSCompiler_prototypeAlias$$$$getGroupIndex$$($group$$9$$) {
  if(null == $group$$9$$) {
    return-1
  }
  for(var $index$$120$$ = -1, $i$$120$$ = 0;$i$$120$$ < this.$_groupCount$;$i$$120$$++) {
    var $curGroup$$ = this.$getGroup$($i$$120$$);
    if($group$$9$$ instanceof window.Array && $curGroup$$ instanceof window.Array ? D.$DvtArrayUtils$$.$equals$($group$$9$$, $curGroup$$) : $group$$9$$ == $curGroup$$) {
      $index$$120$$ = $i$$120$$;
      break
    }
  }
  return $index$$120$$
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(1);
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return window.Math.abs(this.$EndCoord$ - this.$StartCoord$) / window.Math.abs(this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getGroupCount$ = (0,D.$JSCompiler_get$$)("$_groupCount$");
D.$JSCompiler_prototypeAlias$$.$getNumLevels$ = (0,D.$JSCompiler_get$$)("$_numLevels$");
D.$JSCompiler_StaticMethods__generateLevelsArray$$ = function $$JSCompiler_StaticMethods__generateLevelsArray$$$($JSCompiler_StaticMethods__generateLevelsArray$self$$, $groupsArray$$, $level$$54$$, $levelsArray$$, $groupIndex$$1_lastIndex$$) {
  for(var $i$$121$$ = 0;$i$$121$$ < $groupsArray$$.length;$i$$121$$++) {
    if($levelsArray$$[$level$$54$$] || ($levelsArray$$[$level$$54$$] = []), $levelsArray$$[$level$$54$$].push({item:$groupsArray$$[$i$$121$$], start:$groupIndex$$1_lastIndex$$, end:$groupIndex$$1_lastIndex$$, position:$i$$121$$}), $groupsArray$$[$i$$121$$] && $groupsArray$$[$i$$121$$].groups) {
      $groupIndex$$1_lastIndex$$ = $levelsArray$$[$level$$54$$].length - 1;
      var $numChildren$$4$$ = (0,D.$JSCompiler_StaticMethods__generateLevelsArray$$)($JSCompiler_StaticMethods__generateLevelsArray$self$$, $groupsArray$$[$i$$121$$].groups, $level$$54$$ + 1, $levelsArray$$, $levelsArray$$[$level$$54$$][$groupIndex$$1_lastIndex$$].start);
      $levelsArray$$[$level$$54$$][$groupIndex$$1_lastIndex$$].end = $numChildren$$4$$ - 1;
      $groupIndex$$1_lastIndex$$ = $numChildren$$4$$
    }else {
      $groupIndex$$1_lastIndex$$++
    }
  }
  return $groupIndex$$1_lastIndex$$
};
D.$JSCompiler_StaticMethods__getGroupAttribute$$ = function $$JSCompiler_StaticMethods__getGroupAttribute$$$($JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$, $index$$121$$, $level$$55$$, $attribute$$1$$) {
  null == $level$$55$$ && ($level$$55$$ = $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$.$_numLevels$ - 1);
  return($JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$ = $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$.$_levelsArray$[$level$$55$$] && $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$.$_levelsArray$[$level$$55$$][$index$$121$$] ? $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$.$_levelsArray$[$level$$55$$][$index$$121$$].item : null) ? $JSCompiler_StaticMethods__getGroupAttribute$self_groupItem$$[$attribute$$1$$] : null
};
D.$JSCompiler_StaticMethods_getStartIndex$$ = function $$JSCompiler_StaticMethods_getStartIndex$$$($JSCompiler_StaticMethods_getStartIndex$self$$, $index$$122$$, $level$$56$$) {
  null == $level$$56$$ && ($level$$56$$ = $JSCompiler_StaticMethods_getStartIndex$self$$.$_numLevels$ - 1);
  return $JSCompiler_StaticMethods_getStartIndex$self$$.$_levelsArray$[$level$$56$$] && $JSCompiler_StaticMethods_getStartIndex$self$$.$_levelsArray$[$level$$56$$][$index$$122$$] ? $JSCompiler_StaticMethods_getStartIndex$self$$.$_levelsArray$[$level$$56$$][$index$$122$$].start : null
};
D.$DvtGroupAxisInfo$$.prototype.$getEndIndex$ = function $$DvtGroupAxisInfo$$$$$getEndIndex$$($index$$123$$, $level$$57$$) {
  null == $level$$57$$ && ($level$$57$$ = this.$_numLevels$ - 1);
  return this.$_levelsArray$[$level$$57$$] && this.$_levelsArray$[$level$$57$$][$index$$123$$] ? this.$_levelsArray$[$level$$57$$][$index$$123$$].end : null
};
D.$DvtGroupAxisInfo$$.prototype.$getPosition$ = function $$DvtGroupAxisInfo$$$$$getPosition$$($index$$124$$, $level$$58$$) {
  null == $level$$58$$ && ($level$$58$$ = this.$_numLevels$ - 1);
  return this.$_levelsArray$[$level$$58$$] && this.$_levelsArray$[$level$$58$$][$index$$124$$] ? this.$_levelsArray$[$level$$58$$][$index$$124$$].position : null
};
D.$JSCompiler_StaticMethods_getLabelIndex$$ = function $$JSCompiler_StaticMethods_getLabelIndex$$$($label$$24$$) {
  return 0 <= $label$$24$$.$_index$ ? $label$$24$$.$_index$ : null
};
D.$DvtAxisObjPeer$$ = function $$DvtAxisObjPeer$$$($axis$$50$$, $label$$12$$, $group$$4$$, $action$$3$$, $drillable$$, $tooltip$$, $datatip$$, $params$$1$$) {
  this.Init($axis$$50$$, $label$$12$$, $group$$4$$, $action$$3$$, $drillable$$, $tooltip$$, $datatip$$, $params$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisObjPeer$$, D.$DvtSimpleObjPeer$$, "DvtAxisObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($axis$$51$$, $label$$13$$, $group$$5$$, $action$$4$$, $drillable$$1$$, $tooltip$$1$$, $datatip$$1$$, $params$$2$$) {
  D.$DvtAxisObjPeer$$.$superclass$.Init.call(this, $tooltip$$1$$, $datatip$$1$$, null, $params$$2$$);
  this.$_axis$ = $axis$$51$$;
  this.$_label$ = $label$$13$$;
  this.$_group$ = $group$$5$$;
  this.$_action$ = $action$$4$$;
  this.$_drillable$ = $drillable$$1$$;
  (this.$_action$ || this.$_drillable$) && $label$$13$$.setCursor("pointer");
  $axis$$51$$.$__registerObject$(this)
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$102$$) {
  return $event$$102$$.type == D.$DvtMouseEvent$CLICK$$ ? this : (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$102$$, this.$_axis$.$_navigablePeers$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$3$$) {
  return this.$_label$ ? this.$_label$.$getDimensions$($targetCoordinateSpace$$3$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_label$ ? this.$_label$.$getElem$() : null
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  if(this.$_label$) {
    var $bounds$$3$$ = this.$getKeyboardBoundingBox$();
    this.$_overlayRect$ = new D.$DvtRect$$(this.$_axis$.$getCtx$(), $bounds$$3$$.x, $bounds$$3$$.y, $bounds$$3$$.$w$, $bounds$$3$$.$h$);
    this.$_overlayRect$.$setSolidStroke$((0,D.$DvtAgent$getFocusColor$$)());
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_overlayRect$);
    this.$_axis$.$addChild$(this.$_overlayRect$)
  }
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  this.$_label$ && (this.$_axis$.removeChild(this.$_overlayRect$), this.$_overlayRect$ = null)
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$;
  this.$isDrillable$() && ($states$$ = [(0,D.$DvtBundle$getTranslation$$)(this.$_axis$.$getOptions$(), "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE")]);
  if(null != this.$getDatatip$()) {
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getDatatip$(), $states$$)
  }
  if(null != $states$$) {
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getLabel$().$getTextString$(), $states$$)
  }
};
D.$DvtLinearScaleAxisValueFormatter$$ = function $$DvtLinearScaleAxisValueFormatter$$$($context$$28$$, $minValue$$1$$, $maxValue$$, $tickStep$$, $scale$$2$$, $autoPrecision$$1$$) {
  this.Init($context$$28$$, $minValue$$1$$, $maxValue$$, $tickStep$$, $scale$$2$$, $autoPrecision$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLinearScaleAxisValueFormatter$$, D.$DvtAbstractAxisValueFormatter$$, "DvtLinearScaleAxisValueFormatter");
D.$DvtLinearScaleAxisValueFormatter$$.prototype.Init = function $$DvtLinearScaleAxisValueFormatter$$$$Init$($context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$, $minValue$$2_scaleFactorDiff$$inline_1760$$, $maxValue$$1$$, $tickStep$$1$$, $i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$, $autoPrecision$$2$$) {
  this.$_context$ = $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$;
  this.$_scales$ = {};
  this.$_scalesOrder$ = [];
  this.$_factorToScaleMapping$ = {};
  $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$ = function $$context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$$($context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$, $minValue$$2_scaleFactorDiff$$inline_1760$$, $maxValue$$1$$) {
    var $tickStep$$1$$;
    $maxValue$$1$$ && ($tickStep$$1$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $maxValue$$1$$));
    $maxValue$$1$$ = {$scaleFactor$:$minValue$$2_scaleFactorDiff$$inline_1760$$, $localizedSuffix$:$tickStep$$1$$};
    this.$_scales$[$context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$] = $maxValue$$1$$;
    this.$_scalesOrder$.push($maxValue$$1$$);
    this.$_factorToScaleMapping$[$minValue$$2_scaleFactorDiff$$inline_1760$$] = $maxValue$$1$$
  };
  $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$.call(this, "none", 0);
  $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$.call(this, "thousand", 3, "SCALING_SUFFIX_THOUSAND");
  $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$.call(this, "million", 6, "SCALING_SUFFIX_MILLION");
  $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$.call(this, "billion", 9, "SCALING_SUFFIX_BILLION");
  $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$.call(this, "trillion", 12, "SCALING_SUFFIX_TRILLION");
  $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$.call(this, "quadrillion", 15, "SCALING_SUFFIX_QUADRILLION");
  this.$_scalesOrder$.sort(function($context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$, $minValue$$2_scaleFactorDiff$$inline_1760$$) {
    return $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$.$scaleFactor$ < $minValue$$2_scaleFactorDiff$$inline_1760$$.$scaleFactor$ ? -1 : $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$.$scaleFactor$ > $minValue$$2_scaleFactorDiff$$inline_1760$$.$scaleFactor$ ? 1 : 0
  });
  var $findScale$$inline_1755_scaleFactor$$inline_9716$$ = !1, $decimalPlaces$$inline_1756$$, $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$;
  $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$ = !1;
  "off" !== $autoPrecision$$2$$ && ($context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$ = !0);
  $i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$ || ($i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$ = "auto");
  if($i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$ = this.$_scales$[$i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$]) {
    $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ = $i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$.$scaleFactor$
  }
  "number" !== typeof $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ && ($findScale$$inline_1755_scaleFactor$$inline_9716$$ = !0);
  if($findScale$$inline_1755_scaleFactor$$inline_9716$$) {
    $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ = window.Math.max(window.Math.abs($minValue$$2_scaleFactorDiff$$inline_1760$$), window.Math.abs($maxValue$$1$$));
    $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ = (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$);
    $findScale$$inline_1755_scaleFactor$$inline_9716$$ = 0;
    if($absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ <= this.$_scalesOrder$[0].$scaleFactor$) {
      $findScale$$inline_1755_scaleFactor$$inline_9716$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $findScale$$inline_1755_scaleFactor$$inline_9716$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for($i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$ = this.$_scalesOrder$.length - 1;0 <= $i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$;$i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$--) {
          if(this.$_scalesOrder$[$i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$].$scaleFactor$ <= $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$) {
            $findScale$$inline_1755_scaleFactor$$inline_9716$$ = this.$_scalesOrder$[$i$$inline_9717_scale$$3_scale$$inline_9712_scaleName$$inline_9710$$].$scaleFactor$;
            break
          }
        }
      }
    }
    $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ = $findScale$$inline_1755_scaleFactor$$inline_9716$$
  }
  !0 === $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$ && (0 == $tickStep$$1$$ && $minValue$$2_scaleFactorDiff$$inline_1760$$ == $maxValue$$1$$ ? ($minValue$$2_scaleFactorDiff$$inline_1760$$ = $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($maxValue$$1$$), $decimalPlaces$$inline_1756$$ = 0 >= $minValue$$2_scaleFactorDiff$$inline_1760$$ ? window.Math.max($minValue$$2_scaleFactorDiff$$inline_1760$$ + 
  3, 0) : window.Math.max($minValue$$2_scaleFactorDiff$$inline_1760$$, 4)) : $decimalPlaces$$inline_1756$$ = window.Math.max($absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($tickStep$$1$$), 0));
  this.$_useAutoPrecision$ = $context$$29_createScale$$inline_1740_useAutoPrecision$$inline_1758$$;
  this.$_scaleFactor$ = $absMax$$inline_1759_scaleFactor$$inline_1757_scaleFactor$$inline_9711_value$$inline_9715$$;
  this.$_decimalPlaces$ = $decimalPlaces$$inline_1756$$
};
D.$DvtLinearScaleAxisValueFormatter$$.prototype.$format$ = function $$DvtLinearScaleAxisValueFormatter$$$$$format$$($value$$78$$, $converter$$) {
  var $formatted$$inline_1764_parsed$$ = (0,window.parseFloat)($value$$78$$);
  if((0,window.isNaN)($formatted$$inline_1764_parsed$$)) {
    return $value$$78$$
  }
  var $i$$123_suffix$$1$$;
  if(0 < this.$_scaleFactor$) {
    for($i$$123_suffix$$1$$ = 0;$i$$123_suffix$$1$$ < this.$_scaleFactor$;$i$$123_suffix$$1$$++) {
      $formatted$$inline_1764_parsed$$ /= 10
    }
    $i$$123_suffix$$1$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
  }
  if($converter$$ && $converter$$.getAsString) {
    $formatted$$inline_1764_parsed$$ = $converter$$.getAsString($formatted$$inline_1764_parsed$$)
  }else {
    if($converter$$ && $converter$$.format) {
      $formatted$$inline_1764_parsed$$ = $converter$$.format($formatted$$inline_1764_parsed$$)
    }else {
      var $decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$ = (0,D.$JSCompiler_StaticMethods_getNumberConverter$$)(this.$_context$, {minimumFractionDigits:this.$_decimalPlaces$, maximumFractionDigits:this.$_decimalPlaces$});
      if($decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$ && $decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$.format) {
        $formatted$$inline_1764_parsed$$ = $decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$.format($formatted$$inline_1764_parsed$$)
      }else {
        if(this.$_useAutoPrecision$ && !(0,window.isNaN)((0,window.parseFloat)($formatted$$inline_1764_parsed$$)) && ($formatted$$inline_1764_parsed$$ = (0,window.parseFloat)((new window.Number($formatted$$inline_1764_parsed$$)).toFixed(this.$_decimalPlaces$)), $formatted$$inline_1764_parsed$$ = $formatted$$inline_1764_parsed$$.toString(), -1 == $formatted$$inline_1764_parsed$$.indexOf("e") && ($decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$ = ".", $decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$ = 
        (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NUMBER_FORMAT_DECIMAL_SEPARATOR"), 0 < this.$_decimalPlaces$))) {
          $formatted$$inline_1764_parsed$$ = -1 == $formatted$$inline_1764_parsed$$.indexOf(".") ? $formatted$$inline_1764_parsed$$ + $decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$ : $formatted$$inline_1764_parsed$$.replace(".", $decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$);
          for($decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$ = $formatted$$inline_1764_parsed$$.substring($formatted$$inline_1764_parsed$$.indexOf($decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$) + 1).length;$decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$ < this.$_decimalPlaces$;) {
            $formatted$$inline_1764_parsed$$ += "0", $decimalSep$$inline_1765_defaultConverter_existingPlacesCount$$inline_1766$$++
          }
        }
      }
    }
  }
  "string" === typeof $i$$123_suffix$$1$$ && 0 != $value$$78$$ && ($formatted$$inline_1764_parsed$$ += $i$$123_suffix$$1$$);
  return $formatted$$inline_1764_parsed$$
};
D.$JSCompiler_StaticMethods__getPowerOfTen$$ = function $$JSCompiler_StaticMethods__getPowerOfTen$$$($value$$80$$) {
  $value$$80$$ = 0 <= $value$$80$$ ? $value$$80$$ : -$value$$80$$;
  var $power$$1$$ = 0;
  if(1E-15 > $value$$80$$) {
    return 0
  }
  if(window.Infinity == $value$$80$$) {
    return window.Number.MAX_VALUE
  }
  if(10 <= $value$$80$$) {
    for(;10 <= $value$$80$$;) {
      $power$$1$$ += 1, $value$$80$$ /= 10
    }
  }else {
    if(1 > $value$$80$$) {
      for(;1 > $value$$80$$;) {
        $power$$1$$ -= 1, $value$$80$$ *= 10
      }
    }
  }
  return $power$$1$$
};
D.$DvtTimeAxisInfo$$ = function $$DvtTimeAxisInfo$$$($context$$30$$, $options$$26$$, $availSpace$$15$$) {
  this.Init($context$$30$$, $options$$26$$, $availSpace$$15$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeAxisInfo$$, D.$DvtAxisInfo$$, "DvtTimeAxisInfo");
D.$DvtTimeAxisInfo$$.prototype.Init = function $$DvtTimeAxisInfo$$$$Init$($context$$31_endOffset$$2_timeAxisType$$, $options$$27$$, $availSpace$$16_converter$$1_startOffset$$2$$) {
  D.$DvtTimeAxisInfo$$.$superclass$.Init.call(this, $context$$31_endOffset$$2_timeAxisType$$, $options$$27$$, $availSpace$$16_converter$$1_startOffset$$2$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$options$$27$$._isOverview && "on" == $options$$27$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $options$$27$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $options$$27$$.rightBuffer, 0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$31_endOffset$$2_timeAxisType$$) ? (this.$_startCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_endCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_startCoord$ = 
  this.$StartCoord$ + this.$StartOverflow$, this.$_endCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_startCoord$ = this.$StartCoord$, this.$_endCoord$ = this.$EndCoord$);
  this.$_label1Converter$ = ($availSpace$$16_converter$$1_startOffset$$2$$ = null != $options$$27$$.tickLabel ? $options$$27$$.tickLabel.converter : null) && $availSpace$$16_converter$$1_startOffset$$2$$[0] ? $availSpace$$16_converter$$1_startOffset$$2$$[0] : $availSpace$$16_converter$$1_startOffset$$2$$;
  this.$_label2Converter$ = $availSpace$$16_converter$$1_startOffset$$2$$ && $availSpace$$16_converter$$1_startOffset$$2$$[1] ? $availSpace$$16_converter$$1_startOffset$$2$$[1] : null;
  this.$_dateToIsoConverter$ = $context$$31_endOffset$$2_timeAxisType$$.$getLocaleHelpers$().dateToIsoConverter;
  this.$_groups$ = $options$$27$$.groups;
  $context$$31_endOffset$$2_timeAxisType$$ = $options$$27$$.timeAxisType;
  this.$_skipGaps$ = "skipGaps" == $context$$31_endOffset$$2_timeAxisType$$;
  this.$_mixedFrequency$ = "mixedFrequency" == $context$$31_endOffset$$2_timeAxisType$$;
  this.$DataMin$ = $options$$27$$.dataMin;
  this.$DataMax$ = $options$$27$$.dataMax;
  this.$_averageInterval$ = 1 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0 < this.$DataMax$ - this.$DataMin$ ? this.$DataMax$ - this.$DataMin$ : 36E4;
  this.$_step$ = $options$$27$$.step;
  $context$$31_endOffset$$2_timeAxisType$$ = 0 < $options$$27$$.endGroupOffset ? $options$$27$$.endGroupOffset * this.$_averageInterval$ : 0;
  $availSpace$$16_converter$$1_startOffset$$2$$ = 0 < $options$$27$$.startGroupOffset ? $options$$27$$.startGroupOffset * this.$_averageInterval$ : 0;
  this.$GlobalMin$ = null != $options$$27$$.min ? $options$$27$$.min : this.$DataMin$ - $availSpace$$16_converter$$1_startOffset$$2$$;
  this.$GlobalMax$ = null != $options$$27$$.max ? $options$$27$$.max : this.$DataMax$ + $context$$31_endOffset$$2_timeAxisType$$;
  null != $options$$27$$.viewportStartGroup && (this.$MinValue$ = $options$$27$$.viewportStartGroup - $availSpace$$16_converter$$1_startOffset$$2$$);
  null != $options$$27$$.viewportEndGroup && (this.$MaxValue$ = $options$$27$$.viewportEndGroup + $context$$31_endOffset$$2_timeAxisType$$);
  null != $options$$27$$.viewportMin && (this.$MinValue$ = $options$$27$$.viewportMin);
  null != $options$$27$$.viewportMax && (this.$MaxValue$ = $options$$27$$.viewportMax);
  null == this.$MinValue$ && (this.$MinValue$ = this.$GlobalMin$);
  null == this.$MaxValue$ && (this.$MaxValue$ = this.$GlobalMax$);
  this.$GlobalMin$ > this.$MinValue$ && (this.$GlobalMin$ = this.$MinValue$);
  this.$GlobalMax$ < this.$MaxValue$ && (this.$GlobalMax$ = this.$MaxValue$);
  this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
  this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = null;
  this.$_isOneLevel$ = !0;
  this.$_level1Overflow$ = [];
  this.$_level2Overflow$ = [];
  this.$_locale$ = $options$$27$$._locale.toLowerCase();
  this.$_monthResources$ = [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JANUARY"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_FEBRUARY"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MARCH"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_APRIL"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_MAY"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_JUNE"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", 
  "MONTH_SHORT_JULY"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_AUGUST"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_SEPTEMBER"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_OCTOBER"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_NOVEMBER"), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "MONTH_SHORT_DECEMBER")]
};
D.$DvtTimeAxisInfo$_getAMString$$ = function $$DvtTimeAxisInfo$_getAMString$$$($locale$$) {
  if("en-au" == $locale$$ || "en-ie" == $locale$$ || "en-ph" == $locale$$) {
    return"am"
  }
  if("en-gb" == $locale$$) {
    return""
  }
  switch($locale$$.substring(0, 2)) {
    case "en":
      return"AM";
    case "ar":
      return"\u0635";
    case "el":
      return"\u03c0\u03bc";
    case "ko":
      return"\uc624\uc804";
    case "zh":
      return"\u4e0a\u5348";
    default:
      return""
  }
};
D.$DvtTimeAxisInfo$_getPMString$$ = function $$DvtTimeAxisInfo$_getPMString$$$($locale$$1$$) {
  if("en-au" == $locale$$1$$ || "en-ie" == $locale$$1$$ || "en-ph" == $locale$$1$$) {
    return"pm"
  }
  if("en-gb" == $locale$$1$$) {
    return""
  }
  switch($locale$$1$$.substring(0, 2)) {
    case "en":
      return"PM";
    case "ar":
      return"\u0645";
    case "el":
      return"\u03bc\u03bc";
    case "ko":
      return"\uc624\ud6c4";
    case "zh":
      return"\u4e0b\u5348";
    default:
      return""
  }
};
D.$DvtTimeAxisInfo$_getDMYOrder$$ = function $$DvtTimeAxisInfo$_getDMYOrder$$$($locale$$3$$) {
  var $language$$3$$ = $locale$$3$$.substring(0, 2);
  return"en-us" == $locale$$3$$ || "en-ph" == $locale$$3$$ ? "MDY" : "fa" == $language$$3$$ || "hu" == $language$$3$$ || "ja" == $language$$3$$ || "ko" == $language$$3$$ || "lt" == $language$$3$$ || "mn" == $language$$3$$ || "zh" == $language$$3$$ ? "YMD" : "DMY"
};
D.$JSCompiler_StaticMethods__formatAxisLabelWithConverter$$ = function $$JSCompiler_StaticMethods__formatAxisLabelWithConverter$$$($JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$, $date$$2$$, $prevDate$$, $converter$$2$$) {
  if($converter$$2$$) {
    var $label$$26$$ = null, $prevLabel$$ = null;
    $converter$$2$$.getAsString ? ($label$$26$$ = $converter$$2$$.getAsString($date$$2$$), $prevLabel$$ = $converter$$2$$.getAsString($prevDate$$)) : $converter$$2$$.format && ($label$$26$$ = $converter$$2$$.format($JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$.$_dateToIsoConverter$($date$$2$$) : $date$$2$$), $prevLabel$$ = $converter$$2$$.format($JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$.$_dateToIsoConverter$ ? 
    $JSCompiler_StaticMethods__formatAxisLabelWithConverter$self$$.$_dateToIsoConverter$($prevDate$$) : $prevDate$$));
    if($prevLabel$$ != $label$$26$$) {
      return $label$$26$$
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__formatAxisLabel$$ = function $$JSCompiler_StaticMethods__formatAxisLabel$$$($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, $prevDate$$1$$, $bOneLabel$$) {
  var $label1$$ = null, $label2$$ = null, $isVert$$2$$ = "left" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ || "right" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$;
  if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label1Converter$ || $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label2Converter$) {
    return $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label1Converter$ && ($label1$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabelWithConverter$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, $prevDate$$1$$, $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label1Converter$)), $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label2Converter$ && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabelWithConverter$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, 
    $date$$3$$, $prevDate$$1$$, $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_label2Converter$)), [$label1$$, $label2$$]
  }
  if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 189216E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
    $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !1, !1, !0)
  }else {
    if(24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 145152E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
      if(null == $prevDate$$1$$ || $prevDate$$1$$.getMonth() != $date$$3$$.getMonth()) {
        $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !1, !0, !1)
      }
      if(null == $prevDate$$1$$ || $prevDate$$1$$.getYear() != $date$$3$$.getYear()) {
        $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !1, !1, !0)
      }
    }else {
      if(864E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 5184E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
        if($bOneLabel$$) {
          $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !0, !0, !0)
        }else {
          if(null == $prevDate$$1$$ || $prevDate$$1$$.getDate() != $date$$3$$.getDate()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !0, !1, !1)
          }
          null == $prevDate$$1$$ || $prevDate$$1$$.getYear() != $date$$3$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !1, !0, !0) : $prevDate$$1$$.getMonth() != $date$$3$$.getMonth() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !1, !0, !1))
        }
      }else {
        if(36E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 216E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
          if(null == $prevDate$$1$$ || $prevDate$$1$$.getHours() != $date$$3$$.getHours()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !1, !1)
          }
        }else {
          if(6E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$ || 36E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$) {
            if(null == $prevDate$$1$$ || $prevDate$$1$$.getMinutes() != $date$$3$$.getMinutes()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !0, !1)
            }
          }else {
            if(null == $prevDate$$1$$ || $prevDate$$1$$.getSeconds() != $date$$3$$.getSeconds()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !0, !0)
            }
          }
        }
        if($isVert$$2$$) {
          if(null == $prevDate$$1$$ || $prevDate$$1$$.getDate() != $date$$3$$.getDate()) {
            $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !0, !0, !1)
          }
        }else {
          null == $prevDate$$1$$ || $prevDate$$1$$.getYear() != $date$$3$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !0, !0, !0) : $prevDate$$1$$.getMonth() != $date$$3$$.getMonth() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$3$$, !0, !0, !1) : $prevDate$$1$$.getDate() != $date$$3$$.getDate() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, 
          $date$$3$$, !0, !1, !1))
        }
      }
    }
  }
  return[$label1$$, $label2$$]
};
D.$JSCompiler_StaticMethods__formatDate$$ = function $$JSCompiler_StaticMethods__formatDate$$$($JSCompiler_StaticMethods__formatDate$self_dmyOrder$$, $date$$4_dayStr$$, $showDay$$, $showMonth$$, $showYear$$) {
  var $yearStr$$ = "th" == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.substring(0, 2) && "jet" != $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$Options$._environment ? $date$$4_dayStr$$.getFullYear() + 543 : $date$$4_dayStr$$.getFullYear(), $monthStr$$;
  $monthStr$$ = $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_monthResources$ && 12 <= $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_monthResources$.length ? $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_monthResources$[$date$$4_dayStr$$.getMonth()] : $date$$4_dayStr$$.toString().split(" ")[1];
  $date$$4_dayStr$$ = $date$$4_dayStr$$.getDate();
  $yearStr$$ += 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("ja") || 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("zh") ? "\u5e74" : 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("ko") ? "\ub144" : "";
  $date$$4_dayStr$$ += 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("ja") || 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("zh") ? "\u65e5" : 0 == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$.indexOf("ko") ? "\uc77c" : "";
  $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$ = (0,D.$DvtTimeAxisInfo$_getDMYOrder$$)($JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.$_locale$);
  for(var $dateStr$$ = "", $i$$124$$ = 0;$i$$124$$ < $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$.length;$i$$124$$++) {
    $showDay$$ && "D" == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$[$i$$124$$] ? $dateStr$$ += $date$$4_dayStr$$ + " " : $showMonth$$ && "M" == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$[$i$$124$$] ? $dateStr$$ += $monthStr$$ + " " : $showYear$$ && "Y" == $JSCompiler_StaticMethods__formatDate$self_dmyOrder$$[$i$$124$$] && ($dateStr$$ += $yearStr$$ + " ")
  }
  return 0 < $dateStr$$.length ? $dateStr$$.slice(0, $dateStr$$.length - 1) : $dateStr$$
};
D.$JSCompiler_StaticMethods__formatTime$$ = function $$JSCompiler_StaticMethods__formatTime$$$($JSCompiler_StaticMethods__formatTime$self$$, $date$$5_secs$$, $showMinute$$, $showSecond$$) {
  var $hours$$ = $date$$5_secs$$.getHours(), $mins$$ = $date$$5_secs$$.getMinutes();
  $date$$5_secs$$ = $date$$5_secs$$.getSeconds();
  var $am$$ = (0,D.$DvtTimeAxisInfo$_getAMString$$)($JSCompiler_StaticMethods__formatTime$self$$.$_locale$), $pm$$ = (0,D.$DvtTimeAxisInfo$_getPMString$$)($JSCompiler_StaticMethods__formatTime$self$$.$_locale$), $ampmBefore_language$$inline_1769$$;
  $ampmBefore_language$$inline_1769$$ = $JSCompiler_StaticMethods__formatTime$self$$.$_locale$.substring(0, 2);
  $ampmBefore_language$$inline_1769$$ = "ko" == $ampmBefore_language$$inline_1769$$ || "zh" == $ampmBefore_language$$inline_1769$$ ? !0 : !1;
  var $b12HFormat$$ = "" != $am$$ && "" != $pm$$, $ampm$$, $timeLabel$$ = "";
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__formatTime$self$$.$getCtx$()) && ($timeLabel$$ = "\u200f");
  if($b12HFormat$$) {
    if(12 > $hours$$ ? ($ampm$$ = $am$$, 0 == $hours$$ && ($hours$$ = 12)) : ($ampm$$ = $pm$$, 12 < $hours$$ && ($hours$$ -= 12)), $timeLabel$$ += $hours$$, $showMinute$$ || 0 != $mins$$) {
      $timeLabel$$ += ":" + (0,D.$JSCompiler_StaticMethods__doubleDigit$$)($mins$$)
    }
  }else {
    $timeLabel$$ += (0,D.$JSCompiler_StaticMethods__doubleDigit$$)($hours$$) + ":" + (0,D.$JSCompiler_StaticMethods__doubleDigit$$)($mins$$)
  }
  $showSecond$$ && ($timeLabel$$ += ":" + (0,D.$JSCompiler_StaticMethods__doubleDigit$$)($date$$5_secs$$));
  return $b12HFormat$$ ? $ampmBefore_language$$inline_1769$$ ? $ampm$$ + " " + $timeLabel$$ : $timeLabel$$ + " " + $ampm$$ : $timeLabel$$
};
D.$JSCompiler_StaticMethods__doubleDigit$$ = function $$JSCompiler_StaticMethods__doubleDigit$$$($num$$6$$) {
  return 10 > $num$$6$$ ? "0" + $num$$6$$ : "" + $num$$6$$
};
D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$ = function $$JSCompiler_StaticMethods__getMixedFrequencyStep$$$($JSCompiler_StaticMethods__getMixedFrequencyStep$self$$) {
  return 189216E6 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 31536E6 : 145152E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 24192E5 : 5184E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 864E5 : 864E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 108E5 : 216E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 36E5 : 36E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 
  9E5 : 18E5 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 3E5 : 36E4 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 6E4 : 6E4 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 15E3 : 3E4 <= $JSCompiler_StaticMethods__getMixedFrequencyStep$self$$.$_timeRange$ ? 5E3 : 1E3
};
D.$DvtTimeAxisInfo$_getLabelPositions$$ = function $$DvtTimeAxisInfo$_getLabelPositions$$$($start$$23$$, $end$$9$$, $step$$) {
  var $anchor$$5_time$$2$$ = new window.Date($start$$23$$);
  $anchor$$5_time$$2$$.setMonth(0, 1);
  $anchor$$5_time$$2$$.setHours(0, 0, 0, 0);
  var $anchor$$5_time$$2$$ = $anchor$$5_time$$2$$.getTime(), $times$$ = [];
  if(31536E6 <= $step$$ && 316224E5 >= $step$$) {
    for(;$anchor$$5_time$$2$$ < $start$$23$$;) {
      $anchor$$5_time$$2$$ = (0,D.$DvtTimeAxisInfo$_addOneYear$$)($anchor$$5_time$$2$$)
    }
    for(;$anchor$$5_time$$2$$ <= $end$$9$$;) {
      $times$$.push($anchor$$5_time$$2$$), $anchor$$5_time$$2$$ = (0,D.$DvtTimeAxisInfo$_addOneYear$$)($anchor$$5_time$$2$$)
    }
  }else {
    if(24192E5 <= $step$$ && 26784E5 >= $step$$) {
      for(;$anchor$$5_time$$2$$ < $start$$23$$;) {
        $anchor$$5_time$$2$$ = (0,D.$DvtTimeAxisInfo$_addOneMonth$$)($anchor$$5_time$$2$$)
      }
      for(;$anchor$$5_time$$2$$ <= $end$$9$$;) {
        $times$$.push($anchor$$5_time$$2$$), $anchor$$5_time$$2$$ = (0,D.$DvtTimeAxisInfo$_addOneMonth$$)($anchor$$5_time$$2$$)
      }
    }else {
      for($anchor$$5_time$$2$$ += window.Math.ceil(($start$$23$$ - $anchor$$5_time$$2$$) / $step$$) * $step$$;$anchor$$5_time$$2$$ <= $end$$9$$;) {
        $times$$.push($anchor$$5_time$$2$$), $anchor$$5_time$$2$$ += $step$$
      }
    }
  }
  return $times$$
};
D.$DvtTimeAxisInfo$_addOneYear$$ = function $$DvtTimeAxisInfo$_addOneYear$$$($date$$6_time$$3$$) {
  $date$$6_time$$3$$ = new window.Date($date$$6_time$$3$$);
  $date$$6_time$$3$$.setFullYear($date$$6_time$$3$$.getFullYear() + 1);
  return $date$$6_time$$3$$.getTime()
};
D.$DvtTimeAxisInfo$_addOneMonth$$ = function $$DvtTimeAxisInfo$_addOneMonth$$$($date$$7_time$$4$$) {
  $date$$7_time$$4$$ = new window.Date($date$$7_time$$4$$);
  $date$$7_time$$4$$.setMonth($date$$7_time$$4$$.getMonth() + 1);
  return $date$$7_time$$4$$.getTime()
};
D.$DvtTimeAxisInfo$$.prototype.$_generateLabels$ = function $$DvtTimeAxisInfo$$$$$_generateLabels$$($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$) {
  var $labels1$$ = [], $labels2$$ = [], $isOverlapping$$inline_1794_j$$23_labelInfos1$$ = [], $coords1$$ = [], $coords2$$ = [], $label1$$1_prevDate$$2_text$$45$$ = null, $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$ = 0, $c2_i$$inline_1797$$ = 0, $container$$13$$ = $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$.$_stage$, $isRTL$$9_labels1$$inline_1791$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$), 
  $isVert$$3_labels2$$inline_1792$$ = "left" == this.$Position$ || "right" == this.$Position$, $lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ = "off" != this.$Options$.zoomAndScroll, $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = !0, $levelsGap_skip$$inline_1784$$ = 0;
  $isVert$$3_labels2$$inline_1792$$ && (0,D.$DvtAgent$isBrowserChrome$$)() && ($levelsGap_skip$$inline_1784$$ = 0.16 * this.$getTickLabelHeight$());
  var $times$$1$$ = [];
  if(null != this.$_step$) {
    $times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$)
  }else {
    if(this.$_mixedFrequency$) {
      this.$_step$ = (0,D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$)(this), $times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$)
    }else {
      for(var $firstLabel$$1_i$$125$$ = 0;$firstLabel$$1_i$$125$$ < this.$_groups$.length;$firstLabel$$1_i$$125$$++) {
        this.$_groups$[$firstLabel$$1_i$$125$$] >= this.$MinValue$ && this.$_groups$[$firstLabel$$1_i$$125$$] <= this.$MaxValue$ && $times$$1$$.push(this.$_groups$[$firstLabel$$1_i$$125$$])
      }
      this.$_step$ = this.$_averageInterval$;
      if(!this.$_skipGaps$ && ($firstLabel$$1_i$$125$$ = new D.$DvtOutputText$$($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$, (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, new window.Date($times$$1$$[0]))[0], 0, 0), (($isVert$$3_labels2$$inline_1792$$ ? D.$DvtTextUtils$$.$guessTextDimensions$($firstLabel$$1_i$$125$$).$h$ : $firstLabel$$1_i$$125$$.$measureDimensions$().$w$) + (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)(this)) * ($times$$1$$.length - 
      1) > window.Math.abs(this.$_endCoord$ - this.$_startCoord$))) {
        this.$_step$ = (0,D.$JSCompiler_StaticMethods__getMixedFrequencyStep$$)(this), $times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$)
      }
    }
  }
  0 == $times$$1$$.length && ($times$$1$$ = [this.$MinValue$]);
  for($firstLabel$$1_i$$125$$ = 0;$firstLabel$$1_i$$125$$ < $times$$1$$.length;$firstLabel$$1_i$$125$$++) {
    var $date$$8_time$$5$$ = $times$$1$$[$firstLabel$$1_i$$125$$], $coord$$13$$ = this.$getCoordAt$($date$$8_time$$5$$);
    if(null != $coord$$13$$) {
      var $date$$8_time$$5$$ = new window.Date($date$$8_time$$5$$), $label2$$1_twoLabels$$1$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, $date$$8_time$$5$$, $label1$$1_prevDate$$2_text$$45$$), $label1$$1_prevDate$$2_text$$45$$ = $label2$$1_twoLabels$$1$$[0], $label2$$1_twoLabels$$1$$ = $label2$$1_twoLabels$$1$$[1];
      null != $label1$$1_prevDate$$2_text$$45$$ ? ($isOverlapping$$inline_1794_j$$23_labelInfos1$$.push({text:$label1$$1_prevDate$$2_text$$45$$, $coord$:null != $label2$$1_twoLabels$$1$$ ? $coord$$13$$ + $levelsGap_skip$$inline_1784$$ : $coord$$13$$}), $coords1$$.push($coord$$13$$), $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$++) : ($isOverlapping$$inline_1794_j$$23_labelInfos1$$.push(null), $coords1$$.push(null));
      $labels1$$.push(null);
      $lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ && $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ && ($coord$$13$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$13$$);
      $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = !1;
      null != $label2$$1_twoLabels$$1$$ ? ($label1$$1_prevDate$$2_text$$45$$ = this.$CreateLabel$($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$, $label2$$1_twoLabels$$1$$, null != $label2$$1_twoLabels$$1$$ ? $coord$$13$$ - $levelsGap_skip$$inline_1784$$ : $coord$$13$$), $coords2$$.push($coord$$13$$), $isVert$$3_labels2$$inline_1792$$ || ($isRTL$$9_labels1$$inline_1791$$ ? $label1$$1_prevDate$$2_text$$45$$.$alignRight$() : $label1$$1_prevDate$$2_text$$45$$.$alignLeft$()), 
      $labels2$$.push($label1$$1_prevDate$$2_text$$45$$), this.$_isOneLevel$ = !1, $c2_i$$inline_1797$$++) : ($labels2$$.push(null), $coords2$$.push(null));
      $label1$$1_prevDate$$2_text$$45$$ = $date$$8_time$$5$$
    }
  }
  $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$ = $labels1$$;
  for(var $rLabelInfos$$inline_1776$$ = [], $rLabelDims$$inline_1777$$ = [], $availWidth$$inline_1778$$ = window.Math.abs(this.$_endCoord$ - this.$_startCoord$), $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = 0;$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ < $isOverlapping$$inline_1794_j$$23_labelInfos1$$.length;$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$++) {
    null != $isOverlapping$$inline_1794_j$$23_labelInfos1$$[$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$] && ($rLabelInfos$$inline_1776$$.push($isOverlapping$$inline_1794_j$$23_labelInfos1$$[$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$]), $rLabelDims$$inline_1777$$.push(null), this.$_level1Overflow$.push(0))
  }
  for(var $isVert$$inline_1780$$ = "left" == this.$Position$ || "right" == this.$Position$, $_this$$inline_1781$$ = this, $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$ = function $$c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$$($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$) {
    if(null == $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$]) {
      if($rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].label = $_this$$inline_1781$$.$CreateLabel$($container$$13$$.$getCtx$(), $rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].text, $rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$coord$), $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$] = 
      $rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].label.$measureDimensions$($container$$13$$), $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$w$ > $availWidth$$inline_1778$$) {
        $rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].label = null, $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$w$ = 0, $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$h$ = 0
      }else {
        var $labels1$$ = (0,D.$JSCompiler_StaticMethods__getLabelOverflow$$)($_this$$inline_1781$$, $rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$coord$, $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$w$, !1, !1);
        0 != $labels1$$ && ($rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$coord$ -= $labels1$$, $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].x -= $labels1$$, $rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].label.$setX$($rLabelInfos$$inline_1776$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].label.$getX$() - 
        $labels1$$), $_this$$inline_1781$$.$_level1Overflow$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$] = $labels1$$)
      }
    }
    return $isVert$$inline_1780$$ ? $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$h$ : $rLabelDims$$inline_1777$$[$context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$].$w$
  }, $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = ($c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$(0) + (0,D.$JSCompiler_StaticMethods_GetTickLabelGapSize$$)(this)) * ($rLabelInfos$$inline_1776$$.length - 1), $levelsGap_skip$$inline_1784$$ = 0 < $availWidth$$inline_1778$$ ? window.Math.ceil($bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ / $availWidth$$inline_1778$$) - 
  1 : 0, $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = !0;$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$;) {
    for($bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = 0;$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ < $rLabelInfos$$inline_1776$$.length;$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$++) {
      0 == $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ % ($levelsGap_skip$$inline_1784$$ + 1) ? ($c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$($bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$), $rLabelInfos$$inline_1776$$[$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$].$skipped$ = !1) : $rLabelInfos$$inline_1776$$[$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$].$skipped$ = 
      !0
    }
    $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $rLabelDims$$inline_1777$$, $levelsGap_skip$$inline_1784$$);
    $levelsGap_skip$$inline_1784$$++
  }
  for($bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$ = 0;$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ < $isOverlapping$$inline_1794_j$$23_labelInfos1$$.length;$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$++) {
    null != $isOverlapping$$inline_1794_j$$23_labelInfos1$$[$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$] && !$isOverlapping$$inline_1794_j$$23_labelInfos1$$[$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$].$skipped$ && ($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$[$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$] = $isOverlapping$$inline_1794_j$$23_labelInfos1$$[$bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$].label, 
    $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$++)
  }
  if(!$lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ && 1 < $c2_i$$inline_1797$$ && $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$ < 1.5 * $c2_i$$inline_1797$$) {
    $labels1$$ = $labels2$$;
    $labels2$$ = null;
    for($isOverlapping$$inline_1794_j$$23_labelInfos1$$ = 0;$isOverlapping$$inline_1794_j$$23_labelInfos1$$ < $labels1$$.length;$isOverlapping$$inline_1794_j$$23_labelInfos1$$++) {
      null != $labels1$$[$isOverlapping$$inline_1794_j$$23_labelInfos1$$] && $labels1$$[$isOverlapping$$inline_1794_j$$23_labelInfos1$$].$alignCenter$()
    }
    (0,D.$JSCompiler_StaticMethods__skipLabelsGreedy$$)(this, $labels1$$, (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels1$$, $container$$13$$), !1, $isRTL$$9_labels1$$inline_1791$$)
  }else {
    $c2_i$$inline_1797$$ = (0,D.$JSCompiler_StaticMethods__skipLabelsGreedy$$)(this, $labels2$$, (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels2$$, $container$$13$$), !0, $isRTL$$9_labels1$$inline_1791$$), 0 == $c2_i$$inline_1797$$ && ($labels2$$ = null)
  }
  if($isVert$$3_labels2$$inline_1792$$ && null != $labels2$$) {
    var $isRTL$$9_labels1$$inline_1791$$ = $labels1$$, $isVert$$3_labels2$$inline_1792$$ = $labels2$$, $gap$$inline_1793$$ = 0.08 * this.$getTickLabelHeight$(), $isOverlapping$$inline_1794_j$$23_labelInfos1$$ = function $$isOverlapping$$inline_1794_j$$23_labelInfos1$$$($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$, $labels1$$) {
      return $labels1$$.y >= $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$.y && $labels1$$.y - $gap$$inline_1793$$ < $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$.y + $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$.$h$ || $labels1$$.y < $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$.y && $labels1$$.y + $labels1$$.$h$ + $gap$$inline_1793$$ > $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$.y ? 
      !0 : !1
    }, $lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ = null;
    $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$ = !1;
    for($c2_i$$inline_1797$$ = 0;$c2_i$$inline_1797$$ < $isRTL$$9_labels1$$inline_1791$$.length;$c2_i$$inline_1797$$++) {
      if($isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$] && $isVert$$3_labels2$$inline_1792$$[$c2_i$$inline_1797$$]) {
        $isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$].$alignTop$();
        $isVert$$3_labels2$$inline_1792$$[$c2_i$$inline_1797$$].$alignBottom$();
        if($lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ && $isOverlapping$$inline_1794_j$$23_labelInfos1$$($lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$, $isVert$$3_labels2$$inline_1792$$[$c2_i$$inline_1797$$].$measureDimensions$())) {
          $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$ = !0;
          break
        }
        $lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ = $isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$].$measureDimensions$()
      }else {
        if($isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$] || $isVert$$3_labels2$$inline_1792$$[$c2_i$$inline_1797$$]) {
          $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$ = $isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$] ? $isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$] : $isVert$$3_labels2$$inline_1792$$[$c2_i$$inline_1797$$];
          if($lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ && $isOverlapping$$inline_1794_j$$23_labelInfos1$$($lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$, $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$.$measureDimensions$())) {
            $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$ = !0;
            break
          }
          $lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ = $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$.$measureDimensions$()
        }
      }
    }
    if($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$) {
      $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$ = $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$ = $lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ = null;
      for($c2_i$$inline_1797$$ = 0;$c2_i$$inline_1797$$ < $isRTL$$9_labels1$$inline_1791$$.length;$c2_i$$inline_1797$$++) {
        $isVert$$3_labels2$$inline_1792$$[$c2_i$$inline_1797$$] ? ($isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$] = null, $isVert$$3_labels2$$inline_1792$$[$c2_i$$inline_1797$$].$alignMiddle$(), $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = $isVert$$3_labels2$$inline_1792$$[$c2_i$$inline_1797$$].$measureDimensions$(), $context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$ && $isOverlapping$$inline_1794_j$$23_labelInfos1$$($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$, 
        $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$) && ($isRTL$$9_labels1$$inline_1791$$[$lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$] = null), $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$ = $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$) : $isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$] && ($bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$ = 
        $isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$].$measureDimensions$(), $c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$ && $isOverlapping$$inline_1794_j$$23_labelInfos1$$($c1_count$$inline_1786_getDim$$inline_1782_label$$inline_1798_lastLv2Dims$$inline_1801$$, $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$) ? $isRTL$$9_labels1$$inline_1791$$[$c2_i$$inline_1797$$] = null : ($context$$32_labels$$inline_1773_lastLv1Dims$$inline_1800_overlapping$$inline_1796$$ = 
        $bOverlaps$$inline_1785_dims$$inline_1802_first$$2_j$$inline_1779_totalWidth$$inline_1783$$, $lastDims$$inline_1795_lastLv1Idx$$inline_1799_scrollable$$ = $c2_i$$inline_1797$$))
      }
    }
  }
  this.$_level1Labels$ = $labels1$$;
  this.$_level2Labels$ = $labels2$$;
  this.$_level1Coords$ = $coords1$$;
  this.$_level2Coords$ = $coords2$$
};
D.$JSCompiler_StaticMethods__getLabelOverflow$$ = function $$JSCompiler_StaticMethods__getLabelOverflow$$$($JSCompiler_StaticMethods__getLabelOverflow$self$$, $coord$$14_maxOverflow$$1$$, $labelLength$$, $isStartAligned$$, $isRTL$$10$$) {
  var $minOverflow$$1$$ = $coord$$14_maxOverflow$$1$$ - ($isStartAligned$$ ? $isRTL$$10$$ ? $labelLength$$ : 0 : 0.5 * $labelLength$$);
  if($minOverflow$$1$$ < $JSCompiler_StaticMethods__getLabelOverflow$self$$.$Options$._minOverflowCoord) {
    return window.Math.floor($minOverflow$$1$$ - $JSCompiler_StaticMethods__getLabelOverflow$self$$.$Options$._minOverflowCoord)
  }
  $coord$$14_maxOverflow$$1$$ += $isStartAligned$$ ? $isRTL$$10$$ ? 0 : $labelLength$$ : 0.5 * $labelLength$$;
  return $coord$$14_maxOverflow$$1$$ > $JSCompiler_StaticMethods__getLabelOverflow$self$$.$Options$._maxOverflowCoord ? window.Math.ceil($coord$$14_maxOverflow$$1$$ - $JSCompiler_StaticMethods__getLabelOverflow$self$$.$Options$._maxOverflowCoord) : 0
};
D.$JSCompiler_StaticMethods__skipLabelsGreedy$$ = function $$JSCompiler_StaticMethods__skipLabelsGreedy$$$($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$, $labels$$18$$, $labelDims$$10$$, $isStartAligned$$1_pointB2$$3$$, $isRTL$$11$$) {
  if(!$labelDims$$10$$ || 0 >= $labelDims$$10$$.length) {
    return!1
  }
  for(var $isVert$$4$$ = "left" == $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$Position$ || "right" == $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$Position$, $gap$$9_labelHeight$$2$$ = $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$getTickLabelHeight$(), $gap$$9_labelHeight$$2$$ = $isVert$$4$$ ? 0.08 * $gap$$9_labelHeight$$2$$ : 0.24 * $gap$$9_labelHeight$$2$$, $count$$9$$ = 0, $pointA1$$3$$, $pointA2$$3$$, $label$$27$$, $availWidth$$6$$ = window.Math.abs($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$_endCoord$ - 
  $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$_startCoord$), $j$$24$$ = 0;$j$$24$$ < $labelDims$$10$$.length;$j$$24$$++) {
    if($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$_level2Overflow$.push(0), null != $labels$$18$$[$j$$24$$]) {
      $label$$27$$ = $labels$$18$$[$j$$24$$];
      var $labelLength$$1_overflow$$2$$ = D.$DvtTextUtils$$.$getTextWidth$($label$$27$$);
      $labelDims$$10$$[$j$$24$$].$w$ > $availWidth$$6$$ ? $labels$$18$$[$j$$24$$] = null : ($labelLength$$1_overflow$$2$$ = (0,D.$JSCompiler_StaticMethods__getLabelOverflow$$)($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$, $label$$27$$.$getX$(), $labelLength$$1_overflow$$2$$, $isStartAligned$$1_pointB2$$3$$, $isRTL$$11$$), $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$.$_level2Overflow$[$j$$24$$] = $labelLength$$1_overflow$$2$$, 0 != $labelLength$$1_overflow$$2$$ && 
      ($label$$27$$.$setX$($label$$27$$.$getX$() - $labelLength$$1_overflow$$2$$), $labelDims$$10$$[$j$$24$$].x -= $labelLength$$1_overflow$$2$$))
    }
  }
  for($j$$24$$ = 0;$j$$24$$ < $labelDims$$10$$.length;$j$$24$$++) {
    null != $labelDims$$10$$[$j$$24$$] && ($isVert$$4$$ ? ($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ = $labelDims$$10$$[$j$$24$$].y, $isStartAligned$$1_pointB2$$3$$ = $labelDims$$10$$[$j$$24$$].y + $labelDims$$10$$[$j$$24$$].$h$) : ($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ = $labelDims$$10$$[$j$$24$$].x, $isStartAligned$$1_pointB2$$3$$ = $labelDims$$10$$[$j$$24$$].x + $labelDims$$10$$[$j$$24$$].$w$), null != $pointA1$$3$$ && (null != $pointA2$$3$$ && ($JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ >= 
    $pointA1$$3$$ && $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ - $gap$$9_labelHeight$$2$$ < $pointA2$$3$$ || $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$ < $pointA1$$3$$ && $isStartAligned$$1_pointB2$$3$$ + $gap$$9_labelHeight$$2$$ > $pointA1$$3$$)) && ($labels$$18$$[$j$$24$$] = null), null != $labels$$18$$[$j$$24$$] && ($pointA1$$3$$ = $JSCompiler_StaticMethods__skipLabelsGreedy$self_pointB1$$3$$, $pointA2$$3$$ = $isStartAligned$$1_pointB2$$3$$, $count$$9$$++))
  }
  return $count$$9$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$33$$, $levelIdx$$6$$) {
  if($levelIdx$$6$$ && 1 < $levelIdx$$6$$) {
    return null
  }
  this.$_level1Labels$ || this.$_generateLabels$($context$$33$$);
  return 1 == $levelIdx$$6$$ ? this.$_level2Labels$ : this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  var $coords$$4$$ = [];
  if(this.$_isOneLevel$) {
    for(var $i$$128$$ = 0;$i$$128$$ < this.$_level1Coords$.length;$i$$128$$++) {
      null != this.$_level1Coords$[$i$$128$$] && null != this.$_level1Labels$[$i$$128$$] && $coords$$4$$.push(this.$_level1Coords$[$i$$128$$])
    }
  }else {
    for($i$$128$$ = 1;$i$$128$$ < this.$_level2Coords$.length;$i$$128$$++) {
      null != this.$_level2Coords$[$i$$128$$] && $coords$$4$$.push(this.$_level2Coords$[$i$$128$$])
    }
  }
  return $coords$$4$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  if(this.$_isOneLevel$) {
    return[]
  }
  for(var $coords$$5$$ = [], $i$$129$$ = 0;$i$$129$$ < this.$_level1Coords$.length;$i$$129$$++) {
    null != this.$_level1Coords$[$i$$129$$] && null != this.$_level1Labels$[$i$$129$$] && $coords$$5$$.push(this.$_level1Coords$[$i$$129$$])
  }
  return $coords$$5$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$15_ratio$$3$$) {
  if(null == $coord$$15_ratio$$3$$) {
    return null
  }
  $coord$$15_ratio$$3$$ = ($coord$$15_ratio$$3$$ - this.$_startCoord$) / (this.$_endCoord$ - this.$_startCoord$);
  if(this.$_skipGaps$) {
    var $minVal$$ = (0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, this.$MinValue$);
    return(0,D.$JSCompiler_StaticMethods__indexToTime$$)(this, $minVal$$ + $coord$$15_ratio$$3$$ * ((0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, this.$MaxValue$) - $minVal$$))
  }
  return this.$MinValue$ + $coord$$15_ratio$$3$$ * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($ratio$$4_value$$81$$) {
  if(null == $ratio$$4_value$$81$$) {
    return null
  }
  if(this.$_skipGaps$) {
    var $minVal$$1$$ = (0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, this.$MinValue$);
    $ratio$$4_value$$81$$ = ((0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, $ratio$$4_value$$81$$) - $minVal$$1$$) / ((0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, this.$MaxValue$) - $minVal$$1$$)
  }else {
    $ratio$$4_value$$81$$ = ($ratio$$4_value$$81$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$)
  }
  return this.$_startCoord$ + $ratio$$4_value$$81$$ * (this.$_endCoord$ - this.$_startCoord$)
};
D.$JSCompiler_prototypeAlias$$.$linearToActual$ = function $$JSCompiler_prototypeAlias$$$$linearToActual$$($value$$82$$) {
  return null == $value$$82$$ ? null : this.$_skipGaps$ ? (0,D.$JSCompiler_StaticMethods__indexToTime$$)(this, $value$$82$$) : $value$$82$$
};
D.$JSCompiler_prototypeAlias$$.$actualToLinear$ = function $$JSCompiler_prototypeAlias$$$$actualToLinear$$($value$$83$$) {
  return null == $value$$83$$ ? null : this.$_skipGaps$ ? (0,D.$JSCompiler_StaticMethods__timeToIndex$$)(this, $value$$83$$) : $value$$83$$
};
D.$JSCompiler_StaticMethods__timeToIndex$$ = function $$JSCompiler_StaticMethods__timeToIndex$$$($JSCompiler_StaticMethods__timeToIndex$self$$, $time$$6$$) {
  for(var $endIndex$$15$$ = $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$.length, $i$$130_startIndex$$15$$ = 0;$i$$130_startIndex$$15$$ < $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$.length;$i$$130_startIndex$$15$$++) {
    if($time$$6$$ <= $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$i$$130_startIndex$$15$$]) {
      $endIndex$$15$$ = $i$$130_startIndex$$15$$;
      break
    }
  }
  var $i$$130_startIndex$$15$$ = $endIndex$$15$$ - 1, $startTime$$ = void 0 !== $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$i$$130_startIndex$$15$$] ? $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$i$$130_startIndex$$15$$] : $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[0] - $JSCompiler_StaticMethods__timeToIndex$self$$.$_averageInterval$;
  return $i$$130_startIndex$$15$$ + ($time$$6$$ - $startTime$$) / ((void 0 !== $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$endIndex$$15$$] ? $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$endIndex$$15$$] : $JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$[$JSCompiler_StaticMethods__timeToIndex$self$$.$_groups$.length - 1] + $JSCompiler_StaticMethods__timeToIndex$self$$.$_averageInterval$) - $startTime$$)
};
D.$JSCompiler_StaticMethods__indexToTime$$ = function $$JSCompiler_StaticMethods__indexToTime$$$($JSCompiler_StaticMethods__indexToTime$self$$, $index$$125$$) {
  var $endIndex$$16$$ = window.Math.min(window.Math.max(window.Math.ceil($index$$125$$), 0), $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$.length), $startIndex$$16$$ = $endIndex$$16$$ - 1, $startTime$$1$$ = void 0 !== $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$startIndex$$16$$] ? $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$startIndex$$16$$] : $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[0] - $JSCompiler_StaticMethods__indexToTime$self$$.$_averageInterval$;
  return $startTime$$1$$ + ($index$$125$$ - $startIndex$$16$$) * ((void 0 !== $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$endIndex$$16$$] ? $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$endIndex$$16$$] : $JSCompiler_StaticMethods__indexToTime$self$$.$_groups$[$JSCompiler_StaticMethods__indexToTime$self$$.$_groups$.length - 1] + $JSCompiler_StaticMethods__indexToTime$self$$.$_averageInterval$) - $startTime$$1$$)
};
D.$DvtTimeAxisInfo$$.prototype.$getGroupWidth$ = function $$DvtTimeAxisInfo$$$$$getGroupWidth$$() {
  return this.$_skipGaps$ ? window.Math.abs(this.$getUnboundedCoordAt$((0,D.$JSCompiler_StaticMethods__indexToTime$$)(this, 1)) - this.$getUnboundedCoordAt$((0,D.$JSCompiler_StaticMethods__indexToTime$$)(this, 0))) : window.Math.abs(this.$getUnboundedCoordAt$(this.$MinValue$ + this.$_averageInterval$) - this.$getUnboundedCoordAt$(this.$MinValue$))
};
D.$DvtTimeAxisInfo$$.prototype.$getMinimumExtent$ = function $$DvtTimeAxisInfo$$$$$getMinimumExtent$$() {
  return this.$_skipGaps$ ? 1 : this.$_mixedFrequency$ ? window.Math.min(this.$_timeRange$ / 8, this.$_averageInterval$) : this.$_averageInterval$
};
D.$DvtTimeAxisInfo$$.prototype.$getStartOverflow$ = function $$DvtTimeAxisInfo$$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$DvtTimeAxisInfo$$.prototype.$getEndOverflow$ = function $$DvtTimeAxisInfo$$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? this.$StartOverflow$ : this.$EndOverflow$
};

  return D;
});