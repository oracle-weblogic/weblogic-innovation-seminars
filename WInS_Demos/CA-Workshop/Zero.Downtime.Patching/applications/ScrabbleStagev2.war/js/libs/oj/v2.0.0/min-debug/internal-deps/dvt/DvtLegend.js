/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtLegend$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtLegend", D.$DvtLegend$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegend$$, D.$DvtBaseComponent$$, "DvtLegend");
D.$DvtLegend$newInstance$$ = function $$DvtLegend$newInstance$$$($context$$452$$, $callback$$118$$, $callbackObj$$69$$) {
  var $legend$$3$$ = new D.$DvtLegend$$;
  $legend$$3$$.Init($context$$452$$, $callback$$118$$, $callbackObj$$69$$);
  return $legend$$3$$
};
D.$DvtLegend$$.newInstance = D.$DvtLegend$newInstance$$;
D.$DvtLegend$$.getDefaults = function $$DvtLegend$$$getDefaults$($skin$$16$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtLegendDefaults$$, $skin$$16$$)
};
D.$DvtLegend$$.prototype.Init = function $$DvtLegend$$$$Init$($context$$453$$, $callback$$119$$, $callbackObj$$70$$) {
  D.$DvtLegend$$.$superclass$.Init.call(this, $context$$453$$, $callback$$119$$, $callbackObj$$70$$);
  this.setId("legend1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$Defaults$ = new D.$DvtLegendDefaults$$;
  this.$_eventManager$ = new D.$DvtLegendEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_peers$ = [];
  this.$_navigablePeers$ = [];
  this.$_bounds$ = null;
  this.$_titles$ = []
};
D.$DvtLegend$$.prototype.$SetOptions$ = function $$DvtLegend$$$$$SetOptions$$($options$$176$$) {
  $options$$176$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$176$$), (0,D.$JSCompiler_StaticMethods__transferVisibilityProperties$$)(this, this.$Options$.sections)) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtLegend$$.prototype.$getPreferredSize$ = function $$DvtLegend$$$$$getPreferredSize$$($dim$$62_options$$177$$, $maxWidth$$24$$, $maxHeight$$15$$) {
  this.$SetOptions$($dim$$62_options$$177$$);
  this.$getOptions$().isLayout = !0;
  $dim$$62_options$$177$$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $maxWidth$$24$$, $maxHeight$$15$$));
  this.$getOptions$().isLayout = !1;
  return new D.$DvtDimension$$($dim$$62_options$$177$$.$w$, $dim$$62_options$$177$$.$h$)
};
D.$DvtLegend$$.prototype.getPreferredSize = D.$DvtLegend$$.prototype.$getPreferredSize$;
D.$DvtLegend$$.prototype.$render$ = function $$DvtLegend$$$$$render$$($highlightedCategories_options$$178$$, $width$$114$$, $height$$106$$) {
  this.$SetOptions$($highlightedCategories_options$$178$$);
  !(0,window.isNaN)($width$$114$$) && !(0,window.isNaN)($height$$106$$) && (this.$Width$ = $width$$114$$, this.$Height$ = $height$$106$$);
  this.$getOptions$().isLayout = !1;
  this.$removeChildren$();
  this.$_peers$ = [];
  this.$_navigablePeers$ = [];
  this.$_bounds$ = null;
  this.$_titles$ = [];
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtLegendKeyboardHandler$$(this.$_eventManager$, this));
  this.$UpdateAriaAttributes$();
  this.$_contentDimensions$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  ($highlightedCategories_options$$178$$ = this.$getOptions$().highlightedCategories) && 0 < $highlightedCategories_options$$178$$.length && this.$highlight$($highlightedCategories_options$$178$$);
  return this.$_contentDimensions$
};
D.$DvtLegend$$.prototype.render = D.$DvtLegend$$.prototype.$render$;
D.$DvtLegend$$.prototype.$highlight$ = function $$DvtLegend$$$$$highlight$$($categories$$15$$) {
  this.$getOptions$().highlightedCategories = $categories$$15$$ && 0 < $categories$$15$$.length ? $categories$$15$$.slice() : null;
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$15$$, this.$_peers$, !0)
};
D.$DvtLegend$$.prototype.highlight = D.$DvtLegend$$.prototype.$highlight$;
D.$DvtLegend$$.prototype.$processEvent$ = function $$DvtLegend$$$$$processEvent$$($event$$549$$, $source$$30$$) {
  var $type$$226$$ = $event$$549$$.$getType$();
  if(("categoryRollOver" == $type$$226$$ || "categoryRollOut" == $type$$226$$) && "dim" == this.$getOptions$().hoverBehavior) {
    var $peers$$7$$ = this.$_peers$;
    this != $source$$30$$ && this.$highlight$($event$$549$$.categories);
    for(var $i$$694$$ = 0;$i$$694$$ < $peers$$7$$.length;$i$$694$$++) {
      if($peers$$7$$[$i$$694$$].getId() == $event$$549$$.$_category$) {
        this.$container$.scrollIntoView($peers$$7$$[$i$$694$$].$getDisplayables$()[0]);
        break
      }
    }
  }
  (this == $source$$30$$ || "showPopup" == $type$$226$$ || "hidePopup" == $type$$226$$) && this.dispatchEvent($event$$549$$)
};
D.$DvtLegend$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtLegend$$.prototype.$__registerObject$ = function $$DvtLegend$$$$$__registerObject$$($peer$$21$$) {
  if($peer$$21$$.$getDisplayables$()[0] instanceof D.$DvtButton$$) {
    this.$_navigablePeers$.push($peer$$21$$)
  }else {
    var $hideAndShow$$ = this.$getOptions$().hideAndShowBehavior;
    (null != $peer$$21$$.$getDatatip$() || null != $peer$$21$$.$getAction$() || $peer$$21$$.$isDrillable$() || "none" != $hideAndShow$$ && "off" != $hideAndShow$$) && this.$_navigablePeers$.push($peer$$21$$);
    this.$_peers$.push($peer$$21$$)
  }
};
D.$DvtLegend$$.prototype.$destroy$ = function $$DvtLegend$$$$$destroy$$() {
  this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = null);
  D.$DvtLegend$$.$superclass$.$destroy$.call(this)
};
D.$DvtLegend$$.prototype.destroy = D.$DvtLegend$$.prototype.$destroy$;
D.$DvtLegend$$.prototype.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$DvtLegend$$.prototype.$getAutomation$ = function $$DvtLegend$$$$$getAutomation$$() {
  return new D.$DvtLegendAutomation$$(this)
};
D.$DvtLegend$$.prototype.getAutomation = D.$DvtLegend$$.prototype.$getAutomation$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegend$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocus$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocus$$() {
  return null != this.$_eventManager$ ? this.$_eventManager$.$getFocus$() : null
};
D.$JSCompiler_prototypeAlias$$.$setKeyboardFocus$ = function $$JSCompiler_prototypeAlias$$$$setKeyboardFocus$$($navigable$$15$$, $isShowingFocusEffect$$1$$) {
  if(null != this.$_eventManager$) {
    for(var $focus$$1_peers$$8$$ = this.$_navigablePeers$, $displayable$$64_i$$695$$ = 0;$displayable$$64_i$$695$$ < $focus$$1_peers$$8$$.length;$displayable$$64_i$$695$$++) {
      if($focus$$1_peers$$8$$[$displayable$$64_i$$695$$].getId() == $navigable$$15$$.getId()) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_eventManager$, $focus$$1_peers$$8$$[$displayable$$64_i$$695$$]);
        $isShowingFocusEffect$$1$$ && $focus$$1_peers$$8$$[$displayable$$64_i$$695$$].$showKeyboardFocusEffect$();
        break
      }
    }
    if($focus$$1_peers$$8$$ = this.$getKeyboardFocus$()) {
      $displayable$$64_i$$695$$ = $focus$$1_peers$$8$$.$getDisplayables$()[0], $displayable$$64_i$$695$$.$setAriaProperty$("label", $focus$$1_peers$$8$$.$getAriaLabel$()), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$getCtx$(), $displayable$$64_i$$695$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getDimensions$ = function $$JSCompiler_prototypeAlias$$$$getDimensions$$($targetCoordinateSpace$$45$$) {
  var $bounds$$135$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  return!$targetCoordinateSpace$$45$$ || $targetCoordinateSpace$$45$$ === this ? $bounds$$135$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$135$$, $targetCoordinateSpace$$45$$)
};
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$($targetCoordinateSpace$$46$$) {
  return!$targetCoordinateSpace$$46$$ || $targetCoordinateSpace$$46$$ === this ? this.$_contentDimensions$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$_contentDimensions$, $targetCoordinateSpace$$46$$)
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND")
};
D.$JSCompiler_StaticMethods__transferVisibilityProperties$$ = function $$JSCompiler_StaticMethods__transferVisibilityProperties$$$($JSCompiler_StaticMethods__transferVisibilityProperties$self$$, $sections$$2$$) {
  if($sections$$2$$ && !(0 >= $sections$$2$$.length)) {
    for(var $hiddenCategories$$7$$ = $JSCompiler_StaticMethods__transferVisibilityProperties$self$$.$getOptions$().hiddenCategories, $i$$696$$ = 0;$i$$696$$ < $sections$$2$$.length;$i$$696$$++) {
      var $items$$26_section$$4$$ = $sections$$2$$[$i$$696$$];
      $items$$26_section$$4$$.sections && ($hiddenCategories$$7$$ = (0,D.$JSCompiler_StaticMethods__transferVisibilityProperties$$)($JSCompiler_StaticMethods__transferVisibilityProperties$self$$, $items$$26_section$$4$$.sections));
      if(($items$$26_section$$4$$ = $items$$26_section$$4$$.items) && !(0 >= $items$$26_section$$4$$.length)) {
        for(var $j$$92$$ = 0;$j$$92$$ < $items$$26_section$$4$$.length;$j$$92$$++) {
          var $item$$26$$ = $items$$26_section$$4$$[$j$$92$$], $itemCategory$$ = D.$DvtLegendRenderer$$.$getItemCategory$($item$$26$$);
          "hidden" == $item$$26$$.categoryVisibility && 0 > D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$7$$, $itemCategory$$) && $hiddenCategories$$7$$.push($itemCategory$$);
          $item$$26$$.categoryVisibility = null
        }
      }
    }
  }
};
D.$DvtLegend$$.prototype.$UpdateAriaAttributes$ = function $$DvtLegend$$$$$UpdateAriaAttributes$$() {
  if((0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this)) {
    var $options$$179$$ = this.$getOptions$(), $hideAndShow$$1$$ = $options$$179$$.hideAndShowBehavior;
    if("off" != $hideAndShow$$1$$ && "none" != $hideAndShow$$1$$ || "dim" == $options$$179$$.hoverBehavior) {
      this.$getCtx$().$setAriaRole$("application"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$())]))
    }
  }
};
D.$DvtLegend$$.prototype.$isNavigable$ = function $$DvtLegend$$$$$isNavigable$$() {
  return 0 < this.$_navigablePeers$.length
};
D.$DvtLegendAutomation$$ = function $$DvtLegendAutomation$$$($dvtComponent$$11$$) {
  this.$_legend$ = $dvtComponent$$11$$;
  this.$_options$ = this.$_legend$.$getOptions$()
};
(0,D.$goog$exportPath_$$)("DvtLegendAutomation", D.$DvtLegendAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAutomation$$, D.$DvtAutomation$$, "DvtLegendAutomation");
D.$DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($displayable$$65_indexList$$4_item$$27_logicalObj$$12$$) {
  if(($displayable$$65_indexList$$4_item$$27_logicalObj$$12$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_legend$.$getEventManager$(), $displayable$$65_indexList$$4_item$$27_logicalObj$$12$$)) && $displayable$$65_indexList$$4_item$$27_logicalObj$$12$$ instanceof D.$DvtLegendObjPeer$$) {
    if($displayable$$65_indexList$$4_item$$27_logicalObj$$12$$ = $displayable$$65_indexList$$4_item$$27_logicalObj$$12$$.getData(), $displayable$$65_indexList$$4_item$$27_logicalObj$$12$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)(this, $displayable$$65_indexList$$4_item$$27_logicalObj$$12$$, this.$_options$)) {
      return"section" + $displayable$$65_indexList$$4_item$$27_logicalObj$$12$$
    }
  }
  return null
};
D.$JSCompiler_StaticMethods__getIndicesFromItem$$ = function $$JSCompiler_StaticMethods__getIndicesFromItem$$$($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$697$$, $item$$28$$, $legendOptions$$4$$) {
  if($legendOptions$$4$$.sections && 0 < $legendOptions$$4$$.sections.length) {
    for(var $s$$149$$ = 0;$s$$149$$ < $legendOptions$$4$$.sections.length;$s$$149$$++) {
      if($legendOptions$$4$$.sections[$s$$149$$] == $item$$28$$) {
        return"[" + $s$$149$$ + "]"
      }
      var $itemIndex$$8$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$697$$, $item$$28$$, $legendOptions$$4$$.sections[$s$$149$$]);
      if($itemIndex$$8$$) {
        return"[" + $s$$149$$ + "]" + $itemIndex$$8$$
      }
    }
    return null
  }
  if($legendOptions$$4$$.items && 0 < $legendOptions$$4$$.items.length) {
    for($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$697$$ = 0;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$697$$ < $legendOptions$$4$$.items.length;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$697$$++) {
      if($legendOptions$$4$$.items[$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$697$$] == $item$$28$$) {
        return":item[" + $JSCompiler_StaticMethods__getIndicesFromItem$self_i$$697$$ + "]"
      }
    }
    return null
  }
};
D.$JSCompiler_StaticMethods_getIndicesFromSeries$$ = function $$JSCompiler_StaticMethods_getIndicesFromSeries$$$($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$698$$, $series$$17$$, $legendOptions$$5$$) {
  if($legendOptions$$5$$.sections && 0 < $legendOptions$$5$$.sections.length) {
    for(var $s$$150$$ = 0;$s$$150$$ < $legendOptions$$5$$.sections.length;$s$$150$$++) {
      var $itemIndex$$9$$ = (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$698$$, $series$$17$$, $legendOptions$$5$$.sections[$s$$150$$]);
      if($itemIndex$$9$$) {
        return"[" + $s$$150$$ + "]" + $itemIndex$$9$$
      }
    }
    return null
  }
  if($legendOptions$$5$$.items && 0 < $legendOptions$$5$$.items.length) {
    for($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$698$$ = 0;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$698$$ < $legendOptions$$5$$.items.length;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$698$$++) {
      if($legendOptions$$5$$.items[$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$698$$].text == $series$$17$$.name) {
        return":item[" + $JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$698$$ + "]"
      }
    }
    return null
  }
};
D.$JSCompiler_StaticMethods_getLegendItem$$ = function $$JSCompiler_StaticMethods_getLegendItem$$$($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$180$$, $subId$$24$$) {
  var $index$$210_openParen$$3$$ = $subId$$24$$.indexOf("["), $closeParen$$3_nextCloseParen$$ = $subId$$24$$.indexOf("]");
  if(0 <= $index$$210_openParen$$3$$ && 0 <= $closeParen$$3_nextCloseParen$$) {
    var $index$$210_openParen$$3$$ = $subId$$24$$.substring($index$$210_openParen$$3$$ + 1, $closeParen$$3_nextCloseParen$$), $colonIndex$$2$$ = $subId$$24$$.indexOf(":");
    $subId$$24$$ = $subId$$24$$.substring($closeParen$$3_nextCloseParen$$ + 1);
    $closeParen$$3_nextCloseParen$$ = $subId$$24$$.indexOf("]");
    return 0 <= $subId$$24$$.indexOf("[") && 0 <= $closeParen$$3_nextCloseParen$$ ? (0,D.$JSCompiler_StaticMethods_getLegendItem$$)($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$180$$.sections[$index$$210_openParen$$3$$], $subId$$24$$) : 0 == $colonIndex$$2$$ ? $options$$180$$.items[$index$$210_openParen$$3$$] : $options$$180$$.sections[$index$$210_openParen$$3$$]
  }
};
D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($legendItem$$3_subId$$25$$) {
  if("tooltip" == $legendItem$$3_subId$$25$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_legend$)
  }
  $legendItem$$3_subId$$25$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this, this.$_options$, $legendItem$$3_subId$$25$$);
  for(var $legendPeers$$ = this.$_legend$.$_peers$, $i$$699$$ = 0;$i$$699$$ < $legendPeers$$.length;$i$$699$$++) {
    var $item$$29$$ = $legendPeers$$[$i$$699$$].getData();
    if($legendItem$$3_subId$$25$$ == $item$$29$$) {
      return $legendPeers$$[$i$$699$$].$getDisplayables$()[0].$getElem$()
    }
  }
  return null
};
D.$DvtLegendAutomation$$.prototype.getDomElementForSubId = D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
  return this.$_options$.title
};
D.$DvtLegendAutomation$$.prototype.getTitle = D.$DvtLegendAutomation$$.prototype.$getTitle$;
D.$DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($subIdPath$$) {
  for(var $item$$30$$, $index$$211$$ = $subIdPath$$.shift(), $options$$181$$ = this.$_options$;void 0 != $index$$211$$;) {
    0 < $subIdPath$$.length ? $options$$181$$ = $options$$181$$.sections[$index$$211$$] : $item$$30$$ = $options$$181$$.items[$index$$211$$], $index$$211$$ = $subIdPath$$.shift()
  }
  return $item$$30$$ ? {text:$item$$30$$.text ? $item$$30$$.text : null} : null
};
D.$DvtLegendAutomation$$.prototype.getItem = D.$DvtLegendAutomation$$.prototype.getItem;
D.$DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($subIdPath$$1$$) {
  for(var $section$$5$$, $index$$212$$ = $subIdPath$$1$$.shift(), $options$$182$$ = this.$_options$;void 0 != $index$$212$$;) {
    0 < $subIdPath$$1$$.length ? $options$$182$$ = $options$$182$$.sections[$index$$212$$] : $section$$5$$ = $options$$182$$.sections[$index$$212$$], $index$$212$$ = $subIdPath$$1$$.shift()
  }
  return{title:$section$$5$$.title ? $section$$5$$.title : null, items:$section$$5$$.items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($section$$5$$.items) : null, sections:$section$$5$$.sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)(this, $section$$5$$.sections) : null}
};
D.$DvtLegendAutomation$$.prototype.getSection = D.$DvtLegendAutomation$$.prototype.$getSection$;
D.$JSCompiler_StaticMethods__generateItemObjects$$ = function $$JSCompiler_StaticMethods__generateItemObjects$$$($items$$27$$) {
  for(var $itemDataArray$$ = [], $i$$700$$ = 0;$i$$700$$ < $items$$27$$.length;$i$$700$$++) {
    $itemDataArray$$.push({text:$items$$27$$[$i$$700$$].text})
  }
  return $itemDataArray$$
};
D.$JSCompiler_StaticMethods__generateSectionObjects$$ = function $$JSCompiler_StaticMethods__generateSectionObjects$$$($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$3$$) {
  for(var $sectionDataArray$$ = [], $i$$701$$ = 0;$i$$701$$ < $sections$$3$$.length;$i$$701$$++) {
    $sectionDataArray$$.push({title:$sections$$3$$[$i$$701$$].title ? $sections$$3$$[$i$$701$$].title : null, items:$sections$$3$$[$i$$701$$].items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($sections$$3$$[$i$$701$$].items) : null, sections:$sections$$3$$[$i$$701$$].sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$3$$[$i$$701$$].sections) : null})
  }
  return $sectionDataArray$$
};
D.$DvtLegendDefaults$$ = function $$DvtLegendDefaults$$$() {
  this.Init({skyros:D.$DvtLegendDefaults$VERSION_1$$, alta:D.$DvtLegendDefaults$SKIN_ALTA$$, next:D.$DvtLegendDefaults$SKIN_NEXT$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtLegendDefaults");
D.$DvtLegendDefaults$SKIN_NEXT$$ = {skin:"next", titleStyle:new D.$DvtCSSStyle$$("color: #737373;"), _sectionTitleStyle:new D.$DvtCSSStyle$$("color: #737373;"), layout:{titleGapWidth:17, titleGapHeight:9, symbolGapWidth:7, symbolGapHeight:4, rowGap:4, columnGap:10, sectionGapHeight:16, sectionGapWidth:24}};
D.$DvtLegendDefaults$SKIN_ALTA$$ = {skin:"alta", textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), _sectionTitleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;")};
D.$DvtLegendDefaults$VERSION_1$$ = {skin:"skyros", orientation:"vertical", position:null, backgroundColor:null, borderColor:null, textStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"), titleStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;"), titleHalign:"start", hiddenCategories:[], hideAndShowBehavior:"off", hoverBehavior:"none", hoverBehaviorDelay:200, scrolling:"asNeeded", halign:"start", valign:"top", drilling:"off", 
_color:"#a6acb1", _markerShape:"square", _lineWidth:3, layout:{outerGapWidth:3, outerGapHeight:3, titleGapWidth:8, titleGapHeight:3, symbolGapWidth:5, symbolGapHeight:4, rowGap:0, columnGap:8, sectionGapHeight:6, sectionGapWidth:15}, isLayout:!1};
D.$DvtLegendDefaults$getGapSize$$ = function $$DvtLegendDefaults$getGapSize$$$($legend$$4$$, $defaultSize$$1$$) {
  var $scalingFactor$$2$$ = window.Math.min(D.$DvtTextUtils$$.$getTextStringHeight$($legend$$4$$.$getCtx$(), $legend$$4$$.$getOptions$().textStyle) / 14, 1);
  return window.Math.ceil($defaultSize$$1$$ * $scalingFactor$$2$$)
};
D.$DvtLegendEventManager$$ = function $$DvtLegendEventManager$$$($legend$$5$$) {
  this.Init($legend$$5$$.$getCtx$(), $legend$$5$$.$processEvent$, $legend$$5$$);
  this.$_legend$ = $legend$$5$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendEventManager$$, D.$DvtEventManager$$, "DvtLegendEventManager");
D.$DvtLegendEventManager$$.prototype.$OnClick$ = function $$DvtLegendEventManager$$$$$OnClick$$($event$$550$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$550$$);
  var $action$$22_obj$$297$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$550$$.target);
  if($action$$22_obj$$297$$) {
    var $hideShow$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$22_obj$$297$$), $action$$22_obj$$297$$ = (0,D.$JSCompiler_StaticMethods_handleClick$$)(this, $action$$22_obj$$297$$, $event$$550$$);
    ($hideShow$$ || $action$$22_obj$$297$$) && $event$$550$$.stopPropagation()
  }
};
D.$DvtLegendEventManager$$.prototype.$OnMouseOver$ = function $$DvtLegendEventManager$$$$$OnMouseOver$$($event$$551_obj$$298$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$551_obj$$298$$);
  ($event$$551_obj$$298$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$551_obj$$298$$.target)) && this.$UpdateActiveElement$($event$$551_obj$$298$$)
};
D.$DvtLegendEventManager$$.prototype.$OnMouseOut$ = function $$DvtLegendEventManager$$$$$OnMouseOut$$($event$$552$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$552$$);
  (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$552$$.target)
};
D.$DvtLegendEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtLegendEventManager$$$$$HandleTouchClickInternal$$($evt$$52_touchEvent$$7$$) {
  var $obj$$300_processEvt$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$52_touchEvent$$7$$.target);
  if($obj$$300_processEvt$$) {
    $evt$$52_touchEvent$$7$$ = $evt$$52_touchEvent$$7$$.$touchEvent$;
    var $hideShow$$1$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $obj$$300_processEvt$$), $obj$$300_processEvt$$ = (0,D.$JSCompiler_StaticMethods_handleClick$$)(this, $obj$$300_processEvt$$, window.event);
    ($hideShow$$1$$ || $obj$$300_processEvt$$) && $evt$$52_touchEvent$$7$$ && $evt$$52_touchEvent$$7$$.preventDefault()
  }
};
D.$JSCompiler_StaticMethods_processHideShowEvent$$ = function $$JSCompiler_StaticMethods_processHideShowEvent$$$($JSCompiler_StaticMethods_processHideShowEvent$self$$, $obj$$301$$) {
  var $hiddenCategories$$8_hideAndShow$$2$$ = $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hideAndShowBehavior;
  if("none" == $hiddenCategories$$8_hideAndShow$$2$$ || "off" == $hiddenCategories$$8_hideAndShow$$2$$) {
    return!1
  }
  var $categories$$16_id$$219$$ = $obj$$301$$.$getCategories$ ? $obj$$301$$.$getCategories$() : null;
  if(!$categories$$16_id$$219$$ || 0 >= $categories$$16_id$$219$$.length) {
    return!1
  }
  for(var $category$$15_event$$553$$ = $obj$$301$$.$getCategories$()[0], $hiddenCategories$$8_hideAndShow$$2$$ = $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hiddenCategories || [], $hiddenCategories$$8_hideAndShow$$2$$ = $hiddenCategories$$8_hideAndShow$$2$$.slice(), $displayables$$18$$ = $obj$$301$$.$getDisplayables$(), $i$$702$$ = 0;$i$$702$$ < $displayables$$18$$.length;$i$$702$$++) {
    var $displayable$$66$$ = $displayables$$18$$[$i$$702$$];
    $displayable$$66$$ instanceof D.$DvtSimpleMarker$$ ? $displayable$$66$$.$setHollow$($obj$$301$$.$getColor$()) : $displayable$$66$$ instanceof D.$DvtRect$$ && (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($obj$$301$$)
  }
  $categories$$16_id$$219$$ = $categories$$16_id$$219$$[0];
  D.$DvtLegendRenderer$$.$isCategoryHidden$($category$$15_event$$553$$, $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$) ? ($hiddenCategories$$8_hideAndShow$$2$$.splice(D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$8_hideAndShow$$2$$, $category$$15_event$$553$$), 1), $category$$15_event$$553$$ = new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$, $categories$$16_id$$219$$)) : ($hiddenCategories$$8_hideAndShow$$2$$.push($category$$15_event$$553$$), $category$$15_event$$553$$ = 
  new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$, $categories$$16_id$$219$$));
  $category$$15_event$$553$$.hiddenCategories = $hiddenCategories$$8_hideAndShow$$2$$;
  $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hiddenCategories = $hiddenCategories$$8_hideAndShow$$2$$;
  $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$($category$$15_event$$553$$, $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$);
  return!0
};
D.$JSCompiler_StaticMethods_handleClick$$ = function $$JSCompiler_StaticMethods_handleClick$$$($JSCompiler_StaticMethods_handleClick$self$$, $obj$$302_params$$45$$, $event$$554_id$$220$$) {
  return $obj$$302_params$$45$$ && $obj$$302_params$$45$$.$getAction$ && $obj$$302_params$$45$$.$getAction$() ? ($JSCompiler_StaticMethods_handleClick$self$$.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$302_params$$45$$.$getAction$(), $obj$$302_params$$45$$.getId()), $JSCompiler_StaticMethods_handleClick$self$$.$_legend$), !0) : $obj$$302_params$$45$$ instanceof D.$DvtLegendObjPeer$$ && $obj$$302_params$$45$$.$isDrillable$() ? ($event$$554_id$$220$$ = $obj$$302_params$$45$$.getId(), $JSCompiler_StaticMethods_handleClick$self$$.$FireEvent$(new D.$DvtDrillEvent$$($event$$554_id$$220$$, 
  $event$$554_id$$220$$, null), $JSCompiler_StaticMethods_handleClick$self$$.$_legend$), !0) : ($obj$$302_params$$45$$ = $obj$$302_params$$45$$ instanceof D.$DvtSimpleObjPeer$$ ? $obj$$302_params$$45$$.$_params$ : null) && "title" == $obj$$302_params$$45$$.type && $obj$$302_params$$45$$.isCollapsible ? ((0,D.$JSCompiler_StaticMethods_toggleSectionCollapse$$)($JSCompiler_StaticMethods_handleClick$self$$, $event$$554_id$$220$$, $obj$$302_params$$45$$.id), !0) : !1
};
D.$DvtLegendEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtLegendEventManager$$$$$ProcessRolloverEvent$$($event$$555_hoverBehaviorDelay$$2_options$$183$$, $categories$$17_obj$$303$$, $bOver$$9_rolloverEvent$$3$$) {
  $event$$555_hoverBehaviorDelay$$2_options$$183$$ = this.$_legend$.$getOptions$();
  "none" == $event$$555_hoverBehaviorDelay$$2_options$$183$$.hoverBehavior || $categories$$17_obj$$303$$.$getDisplayables$ && $categories$$17_obj$$303$$.$getDisplayables$()[0] instanceof D.$DvtButton$$ || ($categories$$17_obj$$303$$ = $categories$$17_obj$$303$$.$getCategories$ ? $categories$$17_obj$$303$$.$getCategories$() : [], $event$$555_hoverBehaviorDelay$$2_options$$183$$.highlightedCategories = $bOver$$9_rolloverEvent$$3$$ ? $categories$$17_obj$$303$$.slice() : null, $bOver$$9_rolloverEvent$$3$$ = 
  new D.$DvtCategoryRolloverEvent$$($bOver$$9_rolloverEvent$$3$$ ? "categoryRollOver" : "categoryRollOut", $event$$555_hoverBehaviorDelay$$2_options$$183$$.highlightedCategories), $event$$555_hoverBehaviorDelay$$2_options$$183$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$555_hoverBehaviorDelay$$2_options$$183$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$9_rolloverEvent$$3$$, this.$_legend$.$_peers$, $event$$555_hoverBehaviorDelay$$2_options$$183$$, !0))
};
D.$DvtLegendEventManager$$.prototype.$onCollapseButtonClick$ = function $$DvtLegendEventManager$$$$$onCollapseButtonClick$$($event$$556$$, $button$$64$$) {
  var $buttonId$$1$$ = $button$$64$$.getId();
  (0,D.$JSCompiler_StaticMethods_toggleSectionCollapse$$)(this, $event$$556$$, $buttonId$$1$$)
};
D.$JSCompiler_StaticMethods_toggleSectionCollapse$$ = function $$JSCompiler_StaticMethods_toggleSectionCollapse$$$($JSCompiler_StaticMethods_toggleSectionCollapse$self$$, $bounds$$136_event$$557_focus$$2$$, $isShowingFocusEffect$$2_peer$$22_sectionIdArray$$) {
  for(var $section$$6$$ = $JSCompiler_StaticMethods_toggleSectionCollapse$self$$.$_legend$.$getOptions$(), $i$$703$$ = 0;$i$$703$$ < $isShowingFocusEffect$$2_peer$$22_sectionIdArray$$.length;$i$$703$$++) {
    $section$$6$$ = $section$$6$$.sections[$isShowingFocusEffect$$2_peer$$22_sectionIdArray$$[$i$$703$$]]
  }
  $section$$6$$.expanded = "off" == $section$$6$$.expanded ? "on" : "off";
  $bounds$$136_event$$557_focus$$2$$.type == D.$DvtMouseEvent$CLICK$$ && ($isShowingFocusEffect$$2_peer$$22_sectionIdArray$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_StaticMethods_toggleSectionCollapse$self$$, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($JSCompiler_StaticMethods_toggleSectionCollapse$self$$, $bounds$$136_event$$557_focus$$2$$)), $isShowingFocusEffect$$2_peer$$22_sectionIdArray$$.$getNextNavigable$ && (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($JSCompiler_StaticMethods_toggleSectionCollapse$self$$, 
  $isShowingFocusEffect$$2_peer$$22_sectionIdArray$$.$getNextNavigable$($bounds$$136_event$$557_focus$$2$$)));
  $isShowingFocusEffect$$2_peer$$22_sectionIdArray$$ = ($bounds$$136_event$$557_focus$$2$$ = $JSCompiler_StaticMethods_toggleSectionCollapse$self$$.$_legend$.$getKeyboardFocus$()) ? $bounds$$136_event$$557_focus$$2$$.$isShowingKeyboardFocusEffect$() : !1;
  $JSCompiler_StaticMethods_toggleSectionCollapse$self$$.$_legend$.$render$();
  $bounds$$136_event$$557_focus$$2$$ && $JSCompiler_StaticMethods_toggleSectionCollapse$self$$.$_legend$.$setKeyboardFocus$($bounds$$136_event$$557_focus$$2$$, $isShowingFocusEffect$$2_peer$$22_sectionIdArray$$);
  $JSCompiler_StaticMethods_toggleSectionCollapse$self$$.$hideTooltip$();
  $bounds$$136_event$$557_focus$$2$$ = $JSCompiler_StaticMethods_toggleSectionCollapse$self$$.$_legend$.$getContentDimensions$();
  $JSCompiler_StaticMethods_toggleSectionCollapse$self$$.$FireEvent$(new D.$DvtResizeEvent$$($bounds$$136_event$$557_focus$$2$$.$w$, $bounds$$136_event$$557_focus$$2$$.$h$, $bounds$$136_event$$557_focus$$2$$.x, $bounds$$136_event$$557_focus$$2$$.y), $JSCompiler_StaticMethods_toggleSectionCollapse$self$$.$_legend$)
};
D.$DvtLegendEventManager$$.prototype.$GetTouchResponse$ = function $$DvtLegendEventManager$$$$$GetTouchResponse$$() {
  return this.$_legend$.$getOptions$()._isScrollingLegend ? "touchHold" : "touchStart"
};
D.$DvtLegendKeyboardHandler$$ = function $$DvtLegendKeyboardHandler$$$($manager$$19$$, $legend$$6$$) {
  this.Init($manager$$19$$, $legend$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtLegendKeyboardHandler");
D.$DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($manager$$20$$, $legend$$7$$) {
  D.$DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $manager$$20$$);
  this.$_legend$ = $legend$$7$$
};
D.$DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($event$$558$$) {
  var $keyCode$$37_navigables$$8$$ = $event$$558$$.keyCode, $currentNavigable$$12$$ = this.$_eventManager$.$getFocus$(), $isButton$$ = $currentNavigable$$12$$ && $currentNavigable$$12$$.$getDisplayables$()[0] instanceof D.$DvtButton$$, $nextNavigable$$5$$ = null;
  null == $currentNavigable$$12$$ && 9 == $keyCode$$37_navigables$$8$$ ? ($keyCode$$37_navigables$$8$$ = this.$_legend$.$_navigablePeers$, 0 < $keyCode$$37_navigables$$8$$.length && ((0,D.$DvtEventManager$consumeEvent$$)($event$$558$$), $nextNavigable$$5$$ = this.$getDefaultNavigable$($keyCode$$37_navigables$$8$$))) : $currentNavigable$$12$$ && (9 == $keyCode$$37_navigables$$8$$ ? ((0,D.$DvtEventManager$consumeEvent$$)($event$$558$$), $nextNavigable$$5$$ = $currentNavigable$$12$$) : 13 == $keyCode$$37_navigables$$8$$ || 
  32 == $keyCode$$37_navigables$$8$$ ? (13 == $keyCode$$37_navigables$$8$$ && (0,D.$JSCompiler_StaticMethods_handleClick$$)(this.$_eventManager$, $currentNavigable$$12$$, $event$$558$$), $isButton$$ ? this.$_eventManager$.$onCollapseButtonClick$($event$$558$$, $currentNavigable$$12$$.$getDisplayables$()[0]) : (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this.$_eventManager$, $currentNavigable$$12$$), (0,D.$DvtEventManager$consumeEvent$$)($event$$558$$)) : $isButton$$ && (37 == $keyCode$$37_navigables$$8$$ || 
  39 == $keyCode$$37_navigables$$8$$) ? (this.$_eventManager$.$onCollapseButtonClick$($event$$558$$, $currentNavigable$$12$$.$getDisplayables$()[0]), (0,D.$DvtEventManager$consumeEvent$$)($event$$558$$)) : $nextNavigable$$5$$ = D.$DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$558$$));
  $nextNavigable$$5$$ && this.$_legend$.$container$.scrollIntoView($nextNavigable$$5$$.$getDisplayables$()[0]);
  return $nextNavigable$$5$$
};
D.$DvtLegendObjPeer$$ = function $$DvtLegendObjPeer$$$($legend$$8$$, $displayables$$19$$, $id$$221$$, $tooltip$$34$$, $datatip$$16$$, $drillable$$5$$) {
  this.Init($legend$$8$$, $displayables$$19$$, $id$$221$$, $tooltip$$34$$, $datatip$$16$$, $drillable$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendObjPeer$$, D.$DvtObj$$, "DvtLegendObjPeer");
D.$DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($i$$704_legend$$9$$, $displayables$$20$$, $item$$31$$, $tooltip$$35$$, $datatip$$17$$, $drillable$$6$$) {
  this.$_legend$ = $i$$704_legend$$9$$;
  this.$_displayables$ = $displayables$$20$$;
  this.$_item$ = $item$$31$$;
  this.$_id$ = (this.$_category$ = D.$DvtLegendRenderer$$.$getItemCategory$(this.$_item$)) ? this.$_category$ : $item$$31$$.title;
  this.$_action$ = $item$$31$$.action;
  this.$_drillable$ = $drillable$$6$$;
  this.$_spb$ = $item$$31$$._spb;
  this.$_tooltip$ = $tooltip$$35$$;
  this.$_datatip$ = $datatip$$17$$;
  this.$_isShowingKeyboardFocusEffect$ = !1;
  if(this.$_action$ || this.$_drillable$) {
    for($i$$704_legend$$9$$ = 0;$i$$704_legend$$9$$ < this.$_displayables$.length;$i$$704_legend$$9$$++) {
      this.$_displayables$[$i$$704_legend$$9$$].setCursor("pointer")
    }
  }
};
D.$DvtLegendObjPeer$associate$$ = function $$DvtLegendObjPeer$associate$$$($displayables$$21$$, $legend$$10$$, $identObj$$1_item$$32$$, $i$$705_tooltip$$36$$, $datatip$$18$$, $drillable$$7$$) {
  if(!$displayables$$21$$ || !$identObj$$1_item$$32$$) {
    return null
  }
  $identObj$$1_item$$32$$ = new D.$DvtLegendObjPeer$$($legend$$10$$, $displayables$$21$$, $identObj$$1_item$$32$$, $i$$705_tooltip$$36$$, $datatip$$18$$, $drillable$$7$$);
  $legend$$10$$.$__registerObject$($identObj$$1_item$$32$$);
  for($i$$705_tooltip$$36$$ = 0;$i$$705_tooltip$$36$$ < $displayables$$21$$.length;$i$$705_tooltip$$36$$++) {
    $legend$$10$$.$getEventManager$().$associate$($displayables$$21$$[$i$$705_tooltip$$36$$], $identObj$$1_item$$32$$)
  }
  return $identObj$$1_item$$32$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_item$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return null != this.$_category$ ? [this.$_category$] : null
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_spb$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$11$$ = [], $options$$184$$ = this.$_legend$.$getOptions$(), $hideAndShow$$3$$ = this.$_legend$.$getOptions$().hideAndShowBehavior, $bHiddenCategory$$ = D.$DvtLegendRenderer$$.$isCategoryHidden$(this.$_category$, this.$_legend$), $data$$61$$ = this.getData();
  if(this.$_displayables$[0] instanceof D.$DvtButton$$) {
    return $states$$11$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "off" == $data$$61$$.expanded ? "STATE_COLLAPSED" : "STATE_EXPANDED")), (0,D.$DvtDisplayable$generateAriaLabel$$)($data$$61$$.title, $states$$11$$)
  }
  "off" != $hideAndShow$$3$$ && "none" != $hideAndShow$$3$$ && $states$$11$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $bHiddenCategory$$ ? "STATE_HIDDEN" : "STATE_VISIBLE"));
  this.$isDrillable$() && $states$$11$$.push((0,D.$DvtBundle$getTranslation$$)($options$$184$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  return null != $data$$61$$.shortDesc ? (0,D.$DvtDisplayable$generateAriaLabel$$)($data$$61$$.shortDesc, $states$$11$$) : 0 < $states$$11$$.length ? (0,D.$DvtDisplayable$generateAriaLabel$$)($data$$61$$.text, $states$$11$$) : null
};
D.$JSCompiler_StaticMethods_updateAriaLabel$$ = function $$JSCompiler_StaticMethods_updateAriaLabel$$$($JSCompiler_StaticMethods_updateAriaLabel$self$$) {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && $JSCompiler_StaticMethods_updateAriaLabel$self$$.$_displayables$[0] && $JSCompiler_StaticMethods_updateAriaLabel$self$$.$_displayables$[0].$setAriaProperty$("label", $JSCompiler_StaticMethods_updateAriaLabel$self$$.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$559$$) {
  return $event$$559$$.type == D.$DvtMouseEvent$CLICK$$ ? this : (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$559$$, this.$_legend$.$_navigablePeers$, !0)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$47$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$47$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : null
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$_displayables$[0] && (this.$_displayables$[0] instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods_drawOverState$$)(this.$_displayables$[0]) : this.$_displayables$[0].$setSolidStroke$((0,D.$DvtAgent$getFocusColor$$)()))
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  this.$_displayables$[0] && (this.$_displayables$[0] instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods_drawUpState$$)(this.$_displayables$[0]) : this.$_displayables$[0].$setStroke$(null))
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$_item$.color
};
D.$DvtLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendRenderer$$, D.$DvtObj$$, "DvtLegendRenderer");
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$ = 5;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$ = 2;
D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$ = 0.6;
D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$ = 10;
D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ = 12;
D.$DvtLegendRenderer$$.$_FOCUS_GAP$ = 2;
D.$DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($legend$$11$$, $availSpace$$88$$) {
  var $options$$185_titles$$ = $legend$$11$$.$getOptions$(), $context$$454_totalDim$$ = $legend$$11$$.$getCtx$(), $contentDims_isRTL$$33_valign$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$454_totalDim$$);
  $options$$185_titles$$.isLayout || D.$DvtLegendRenderer$$.$_renderBackground$($legend$$11$$, $availSpace$$88$$);
  var $container$$131_translateX$$1$$ = new D.$DvtSimpleScrollableContainer$$($context$$454_totalDim$$, $availSpace$$88$$.$w$, $availSpace$$88$$.$h$), $contentContainer$$3_i$$706$$ = new D.$DvtContainer$$($context$$454_totalDim$$);
  $container$$131_translateX$$1$$.$_container$.$addChild$($contentContainer$$3_i$$706$$);
  $legend$$11$$.$addChild$($container$$131_translateX$$1$$);
  $legend$$11$$.$container$ = $container$$131_translateX$$1$$;
  var $gapWidth$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$11$$, $options$$185_titles$$.layout.outerGapWidth), $gapHeight$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$11$$, $options$$185_titles$$.layout.outerGapHeight);
  $availSpace$$88$$.x += $gapWidth$$2$$;
  $availSpace$$88$$.y += $gapHeight$$2$$;
  $availSpace$$88$$.$w$ -= 2 * $gapWidth$$2$$;
  $availSpace$$88$$.$h$ -= 2 * $gapHeight$$2$$;
  $legend$$11$$.$__setBounds$($availSpace$$88$$);
  if(0 >= $availSpace$$88$$.$w$ || 0 >= $availSpace$$88$$.$h$) {
    return new D.$DvtDimension$$(0, 0)
  }
  $context$$454_totalDim$$ = D.$DvtLegendRenderer$$.$_renderContents$($legend$$11$$, $contentContainer$$3_i$$706$$, new D.$DvtRectangle$$($availSpace$$88$$.x, $availSpace$$88$$.y, $availSpace$$88$$.$w$, $availSpace$$88$$.$h$));
  if(0 == $context$$454_totalDim$$.$w$ || 0 == $context$$454_totalDim$$.$h$) {
    return new D.$DvtDimension$$(0, 0)
  }
  (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($container$$131_translateX$$1$$);
  $context$$454_totalDim$$.$h$ > $availSpace$$88$$.$h$ ? ($context$$454_totalDim$$.$h$ = $availSpace$$88$$.$h$, $options$$185_titles$$._isScrollingLegend = !0) : $options$$185_titles$$._isScrollingLegend = !1;
  var $translateY$$1$$ = $container$$131_translateX$$1$$ = 0, $halign$$6$$ = null != $options$$185_titles$$.hAlign ? $options$$185_titles$$.hAlign : $options$$185_titles$$.halign;
  "center" == $halign$$6$$ ? $container$$131_translateX$$1$$ = $availSpace$$88$$.x - $context$$454_totalDim$$.x + ($availSpace$$88$$.$w$ - $context$$454_totalDim$$.$w$) / 2 : "end" == $halign$$6$$ && ($container$$131_translateX$$1$$ = $contentDims_isRTL$$33_valign$$5$$ ? $availSpace$$88$$.x - $context$$454_totalDim$$.x : $availSpace$$88$$.x - $context$$454_totalDim$$.x + $availSpace$$88$$.$w$ - $context$$454_totalDim$$.$w$);
  $contentDims_isRTL$$33_valign$$5$$ = null != $options$$185_titles$$.vAlign ? $options$$185_titles$$.vAlign : $options$$185_titles$$.valign;
  "middle" == $contentDims_isRTL$$33_valign$$5$$ ? $translateY$$1$$ = $availSpace$$88$$.y - $context$$454_totalDim$$.y + ($availSpace$$88$$.$h$ - $context$$454_totalDim$$.$h$) / 2 : "bottom" == $contentDims_isRTL$$33_valign$$5$$ && ($translateY$$1$$ = $availSpace$$88$$.y - $context$$454_totalDim$$.y + $availSpace$$88$$.$h$ - $context$$454_totalDim$$.$h$);
  $contentDims_isRTL$$33_valign$$5$$ = new D.$DvtRectangle$$($context$$454_totalDim$$.x + $container$$131_translateX$$1$$ - $gapWidth$$2$$, $context$$454_totalDim$$.y + $translateY$$1$$ - $gapHeight$$2$$, $context$$454_totalDim$$.$w$ + 2 * $gapWidth$$2$$, $context$$454_totalDim$$.$h$ + 2 * $gapHeight$$2$$);
  if($options$$185_titles$$.isLayout) {
    return $contentDims_isRTL$$33_valign$$5$$
  }
  ($container$$131_translateX$$1$$ || $translateY$$1$$) && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($contentContainer$$3_i$$706$$, $container$$131_translateX$$1$$, $translateY$$1$$);
  $options$$185_titles$$ = $legend$$11$$.$_titles$;
  for($contentContainer$$3_i$$706$$ = 0;$contentContainer$$3_i$$706$$ < $options$$185_titles$$.length;$contentContainer$$3_i$$706$$++) {
    (0,D.$DvtLayoutUtils$align$$)($context$$454_totalDim$$, $options$$185_titles$$[$contentContainer$$3_i$$706$$].$halign$, $options$$185_titles$$[$contentContainer$$3_i$$706$$].text, $options$$185_titles$$[$contentContainer$$3_i$$706$$].text.$measureDimensions$().$w$)
  }
  return $contentDims_isRTL$$33_valign$$5$$
};
D.$DvtLegendRenderer$$.$_renderContents$ = function $$DvtLegendRenderer$$$$_renderContents$$($legend$$12_sectionsDim$$, $container$$132$$, $availSpace$$89$$) {
  var $options$$186$$ = $legend$$12_sectionsDim$$.$getOptions$();
  $availSpace$$89$$ = $availSpace$$89$$.$clone$();
  var $title$$14$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$12_sectionsDim$$, $container$$132$$, $options$$186$$.title, $availSpace$$89$$, null, !0);
  if($title$$14$$) {
    var $titleDim$$ = $title$$14$$.$measureDimensions$(), $titleGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$12_sectionsDim$$, $options$$186$$.layout.titleGapHeight);
    $availSpace$$89$$.y += $titleDim$$.$h$ + $titleGap$$;
    $availSpace$$89$$.$h$ -= window.Math.floor($titleDim$$.$h$ + $titleGap$$)
  }
  $legend$$12_sectionsDim$$ = D.$DvtLegendRenderer$$.$_renderSections$($legend$$12_sectionsDim$$, $container$$132$$, $options$$186$$.sections, $availSpace$$89$$, []);
  return $title$$14$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($titleDim$$, $legend$$12_sectionsDim$$) : $legend$$12_sectionsDim$$
};
D.$DvtLegendRenderer$$.$_renderBackground$ = function $$DvtLegendRenderer$$$$_renderBackground$$($legend$$13$$, $availSpace$$90$$) {
  var $borderColor$$51_options$$187$$ = $legend$$13$$.$getOptions$(), $backgroundColor$$23$$ = $borderColor$$51_options$$187$$.backgroundColor, $borderColor$$51_options$$187$$ = $borderColor$$51_options$$187$$.borderColor;
  if($backgroundColor$$23$$ || $borderColor$$51_options$$187$$) {
    var $rect$$33$$ = new D.$DvtRect$$($legend$$13$$.$getCtx$(), $availSpace$$90$$.x, $availSpace$$90$$.y, $availSpace$$90$$.$w$, $availSpace$$90$$.$h$);
    $backgroundColor$$23$$ ? $rect$$33$$.$setSolidFill$($backgroundColor$$23$$) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$33$$);
    $borderColor$$51_options$$187$$ && ($rect$$33$$.$setSolidStroke$($borderColor$$51_options$$187$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rect$$33$$));
    $legend$$13$$.$addChild$($rect$$33$$)
  }
};
D.$DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($legend$$14$$, $container$$133_params$$46$$, $title$$15_titleStr$$, $availSpace$$91$$, $section$$7$$, $isAligned$$) {
  var $options$$188$$ = $legend$$14$$.$getOptions$(), $context$$455_titleStyle$$2$$ = $container$$133_params$$46$$.$getCtx$(), $isRTL$$34$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$455_titleStyle$$2$$);
  if(!$title$$15_titleStr$$) {
    return null
  }
  $title$$15_titleStr$$ = new D.$DvtOutputText$$($context$$455_titleStyle$$2$$, $title$$15_titleStr$$, $availSpace$$91$$.x, $availSpace$$91$$.y);
  $context$$455_titleStyle$$2$$ = $options$$188$$.titleStyle;
  $section$$7$$ && $section$$7$$.titleStyle ? $context$$455_titleStyle$$2$$ = new D.$DvtCSSStyle$$($section$$7$$.titleStyle) : $section$$7$$ && $options$$188$$._sectionTitleStyle && ($context$$455_titleStyle$$2$$ = $options$$188$$._sectionTitleStyle);
  $title$$15_titleStr$$.$setCSSStyle$($context$$455_titleStyle$$2$$);
  return D.$DvtTextUtils$$.$fitText$($title$$15_titleStr$$, $availSpace$$91$$.$w$, window.Infinity, $container$$133_params$$46$$) ? ($isRTL$$34$$ && $title$$15_titleStr$$.$setX$($availSpace$$91$$.x + $availSpace$$91$$.$w$ - $title$$15_titleStr$$.$measureDimensions$().$w$), $options$$188$$.isLayout ? $container$$133_params$$46$$.removeChild($title$$15_titleStr$$) : ($container$$133_params$$46$$ = {}, $container$$133_params$$46$$.isCollapsible = $section$$7$$ && ("on" == $section$$7$$.collapsible || 
  !0 == $section$$7$$.collapsible), $legend$$14$$.$getEventManager$().$associate$($title$$15_titleStr$$, new D.$DvtSimpleObjPeer$$($title$$15_titleStr$$.$getUntruncatedTextString$(), null, null, $container$$133_params$$46$$)), $isAligned$$ && $legend$$14$$.$_titles$.push({text:$title$$15_titleStr$$, $halign$:$section$$7$$ && $section$$7$$.titleHalign ? $section$$7$$.titleHalign : $options$$188$$.titleHalign})), $title$$15_titleStr$$) : null
};
D.$DvtLegendRenderer$$.$_renderSections$ = function $$DvtLegendRenderer$$$$_renderSections$$($legend$$15$$, $container$$134$$, $sections$$4$$, $availSpace$$92$$, $id$$223$$) {
  var $isHoriz$$16_options$$189$$ = $legend$$15$$.$getOptions$();
  null == $isHoriz$$16_options$$189$$.symbolWidth && null == $isHoriz$$16_options$$189$$.symbolHeight ? ($isHoriz$$16_options$$189$$.symbolWidth = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$, $isHoriz$$16_options$$189$$.symbolHeight = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$) : (null == $isHoriz$$16_options$$189$$.symbolWidth ? $isHoriz$$16_options$$189$$.symbolWidth = $isHoriz$$16_options$$189$$.symbolHeight : null == $isHoriz$$16_options$$189$$.symbolHeight && ($isHoriz$$16_options$$189$$.symbolHeight = 
  $isHoriz$$16_options$$189$$.symbolWidth), $isHoriz$$16_options$$189$$.symbolWidth = (0,window.parseInt)($isHoriz$$16_options$$189$$.symbolWidth), $isHoriz$$16_options$$189$$.symbolHeight = (0,window.parseInt)($isHoriz$$16_options$$189$$.symbolHeight));
  for(var $sectionGapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$16_options$$189$$.layout.sectionGapHeight), $titleGapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$16_options$$189$$.layout.titleGapHeight), $gapWidth$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$16_options$$189$$.layout.sectionGapWidth), $rowHeight$$2$$ = D.$DvtLegendRenderer$$.$_getRowHeight$($legend$$15$$), $isHoriz$$16_options$$189$$ = "vertical" != 
  $isHoriz$$16_options$$189$$.orientation, $totalDim$$1$$ = null, $horizAvailSpace$$ = $availSpace$$92$$.$clone$(), $sectionDim$$, $i$$707$$ = 0;$i$$707$$ < $sections$$4$$.length;$i$$707$$++) {
    var $sectionId$$2$$ = $id$$223$$.concat([$i$$707$$]), $gapHeight$$3$$ = "off" == $sections$$4$$[$i$$707$$].expanded || !1 == $sections$$4$$[$i$$707$$].expanded ? $titleGapHeight$$ : $sectionGapHeight$$;
    $isHoriz$$16_options$$189$$ ? ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$15$$, $container$$134$$, $sections$$4$$[$i$$707$$], $horizAvailSpace$$, $rowHeight$$2$$), $sectionDim$$.$w$ > $horizAvailSpace$$.$w$ ? ($horizAvailSpace$$.$w$ < $availSpace$$92$$.$w$ && ($availSpace$$92$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$92$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$), $sectionDim$$ = $sectionDim$$.$w$ <= $availSpace$$92$$.$w$ ? D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$15$$, 
    $container$$134$$, $sections$$4$$[$i$$707$$], $availSpace$$92$$, $rowHeight$$2$$) : D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$15$$, $container$$134$$, $sections$$4$$[$i$$707$$], $availSpace$$92$$, $rowHeight$$2$$, $sectionId$$2$$, !0), $availSpace$$92$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$92$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$, $horizAvailSpace$$ = $availSpace$$92$$.$clone$()) : ($horizAvailSpace$$.$w$ -= $sectionDim$$.$w$ + $gapWidth$$3$$, (0,D.$DvtAgent$isRightToLeft$$)($legend$$15$$.$getCtx$()) || 
    ($horizAvailSpace$$.x += $sectionDim$$.$w$ + $gapWidth$$3$$))) : ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$15$$, $container$$134$$, $sections$$4$$[$i$$707$$], $availSpace$$92$$, $rowHeight$$2$$, $sectionId$$2$$, !1), $availSpace$$92$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$92$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$);
    $totalDim$$1$$ = $totalDim$$1$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$1$$, $sectionDim$$) : $sectionDim$$
  }
  return $totalDim$$1$$
};
D.$DvtLegendRenderer$$.$_createButton$ = function $$DvtLegendRenderer$$$$_createButton$$($button$$65_context$$456$$, $legend$$16_peer$$23$$, $item$$33$$, $downState$$14_resources$$5$$, $prefix$$5$$, $x$$236$$, $y$$210$$, $tooltip$$37$$, $id$$224$$, $callback$$120$$, $callbackObj$$71$$) {
  var $upState$$17$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$456$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Enabled", $x$$236$$, $y$$210$$), $overState$$14$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$456$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Over", $x$$236$$, $y$$210$$);
  $downState$$14_resources$$5$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$456$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Down", $x$$236$$, $y$$210$$);
  $button$$65_context$$456$$ = new D.$DvtButton$$($button$$65_context$$456$$, $upState$$17$$, $overState$$14$$, $downState$$14_resources$$5$$, null, $id$$224$$, $callback$$120$$, $callbackObj$$71$$);
  $legend$$16_peer$$23$$ = (0,D.$DvtLegendObjPeer$associate$$)([$button$$65_context$$456$$], $legend$$16_peer$$23$$, $item$$33$$, $tooltip$$37$$, null, !1);
  $button$$65_context$$456$$.$setAriaRole$("button");
  (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($legend$$16_peer$$23$$);
  return $button$$65_context$$456$$
};
D.$DvtLegendRenderer$$.$_createButtonImage$ = function $$DvtLegendRenderer$$$$_createButtonImage$$($context$$457_image$$13$$, $resources$$6$$, $name$$101$$, $x$$237$$, $y$$211$$) {
  var $suffix$$3$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$457_image$$13$$) ? "RTL" : "";
  $context$$457_image$$13$$ = new D.$DvtImage$$($context$$457_image$$13$$, $resources$$6$$[$name$$101$$ + $suffix$$3$$] ? $resources$$6$$[$name$$101$$ + $suffix$$3$$] : $resources$$6$$[$name$$101$$], $x$$237$$, $y$$211$$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$457_image$$13$$);
  return $context$$457_image$$13$$
};
D.$DvtLegendRenderer$$.$_renderVerticalSection$ = function $$DvtLegendRenderer$$$$_renderVerticalSection$$($legend$$17$$, $container$$135$$, $section$$8$$, $availSpace$$93_sectionSpace$$, $rowHeight$$3$$, $id$$225_nestedSectionDim_numRows$$, $minimizeNumRows_numCols$$) {
  if($section$$8$$) {
    var $options$$190_textSpace$$ = $legend$$17$$.$getOptions$(), $currRow_symbolGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$190_textSpace$$.layout.symbolGapWidth), $rowGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$190_textSpace$$.layout.rowGap), $colGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$190_textSpace$$.layout.columnGap), $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ = $legend$$17$$.$getCtx$(), 
    $isRTL$$35$$ = (0,D.$DvtAgent$isRightToLeft$$)($button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$);
    $availSpace$$93_sectionSpace$$ = $availSpace$$93_sectionSpace$$.$clone$();
    "off" != $options$$190_textSpace$$.scrolling && ($availSpace$$93_sectionSpace$$.$h$ = window.Infinity);
    var $buttonDim_buttonX_colInitY$$, $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = "on" == $section$$8$$.collapsible || !0 == $section$$8$$.collapsible;
    if($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$) {
      $buttonDim_buttonX_colInitY$$ = $isRTL$$35$$ ? $availSpace$$93_sectionSpace$$.x + $availSpace$$93_sectionSpace$$.$w$ - D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ : $availSpace$$93_sectionSpace$$.x;
      if(!$options$$190_textSpace$$.isLayout) {
        var $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = "off" == $section$$8$$.expanded || !1 == $section$$8$$.expanded, $buttonType_contentHeight$$2_currCol$$ = $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ ? "closed" : "open", $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ ? "EXPAND" : "COLLAPSE", null), $em$$4_i$$708$$ = $legend$$17$$.$getEventManager$(), 
        $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ = D.$DvtLegendRenderer$$.$_createButton$($button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$, $legend$$17$$, $section$$8$$, $options$$190_textSpace$$._resources, $buttonType_contentHeight$$2_currCol$$, $buttonDim_buttonX_colInitY$$, $availSpace$$93_sectionSpace$$.y, $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$, $id$$225_nestedSectionDim_numRows$$, $em$$4_i$$708$$.$onCollapseButtonClick$, $em$$4_i$$708$$);
        $container$$135$$.$addChild$($button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$)
      }
      $buttonDim_buttonX_colInitY$$ = new D.$DvtRectangle$$($buttonDim_buttonX_colInitY$$, $availSpace$$93_sectionSpace$$.y, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$);
      $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$190_textSpace$$.layout.symbolGapWidth);
      $isRTL$$35$$ || ($availSpace$$93_sectionSpace$$.x += D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ + $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$);
      $availSpace$$93_sectionSpace$$.$w$ -= D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ + $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$
    }
    $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = ($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$17$$, $container$$135$$, $section$$8$$.title, $availSpace$$93_sectionSpace$$, $section$$8$$, !$isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ && 1 >= $id$$225_nestedSectionDim_numRows$$.length, $id$$225_nestedSectionDim_numRows$$)) ? $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$.$measureDimensions$() : new D.$DvtRectangle$$($isRTL$$35$$ ? 
    $availSpace$$93_sectionSpace$$.x + $availSpace$$93_sectionSpace$$.$w$ : $availSpace$$93_sectionSpace$$.x, $availSpace$$93_sectionSpace$$.y, 0, 0);
    $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = $buttonDim_buttonX_colInitY$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$, $buttonDim_buttonX_colInitY$$) : $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$;
    if(!$section$$8$$.items && !$section$$8$$.sections || "off" == $section$$8$$.expanded || !1 == $section$$8$$.expanded) {
      return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
    }
    0 < $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$.$h$ && ($button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$190_textSpace$$.layout.titleGapHeight), $availSpace$$93_sectionSpace$$.y += $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$.$h$ + $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$, $availSpace$$93_sectionSpace$$.$h$ -= $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$.$h$ + $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$);
    $section$$8$$.sections && ($id$$225_nestedSectionDim_numRows$$ = D.$DvtLegendRenderer$$.$_renderSections$($legend$$17$$, $container$$135$$, $section$$8$$.sections, $availSpace$$93_sectionSpace$$, $id$$225_nestedSectionDim_numRows$$), $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$, $id$$225_nestedSectionDim_numRows$$));
    if(!$section$$8$$.items) {
      return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
    }
    $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ = D.$DvtLegendRenderer$$.$_calcColumns$($legend$$17$$, $availSpace$$93_sectionSpace$$, $rowHeight$$3$$, $section$$8$$.items, $minimizeNumRows_numCols$$);
    $minimizeNumRows_numCols$$ = $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$.numCols;
    $id$$225_nestedSectionDim_numRows$$ = $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$.numRows;
    $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ = $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$.width;
    $buttonDim_buttonX_colInitY$$ = $availSpace$$93_sectionSpace$$.y;
    if(0 == $id$$225_nestedSectionDim_numRows$$ || 0 == $minimizeNumRows_numCols$$) {
      return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
    }
    $buttonType_contentHeight$$2_currCol$$ = $id$$225_nestedSectionDim_numRows$$ * ($rowHeight$$3$$ + $rowGap$$) - $rowGap$$;
    $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = window.Math.min($minimizeNumRows_numCols$$ * ($button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ + $colGap$$) - $colGap$$, $availSpace$$93_sectionSpace$$.$w$);
    $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$, new D.$DvtRectangle$$($isRTL$$35$$ ? $availSpace$$93_sectionSpace$$.x + $availSpace$$93_sectionSpace$$.$w$ - $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ : $availSpace$$93_sectionSpace$$.x, $availSpace$$93_sectionSpace$$.y, $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$, $buttonType_contentHeight$$2_currCol$$));
    if($options$$190_textSpace$$.isLayout) {
      return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
    }
    $options$$190_textSpace$$ = $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ - $options$$190_textSpace$$.symbolWidth - $currRow_symbolGap$$;
    $currRow_symbolGap$$ = 0;
    $buttonType_contentHeight$$2_currCol$$ = 1;
    $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = $section$$8$$.items.length;
    for($em$$4_i$$708$$ = 0;$em$$4_i$$708$$ < $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ && !(D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$17$$, $container$$135$$, $section$$8$$.items[$em$$4_i$$708$$], $availSpace$$93_sectionSpace$$, $options$$190_textSpace$$, $rowHeight$$3$$, $em$$4_i$$708$$), $availSpace$$93_sectionSpace$$.y += $rowHeight$$3$$ + $rowGap$$, $currRow_symbolGap$$++, $currRow_symbolGap$$ === $id$$225_nestedSectionDim_numRows$$ && $buttonType_contentHeight$$2_currCol$$ !== 
    $minimizeNumRows_numCols$$ && ($availSpace$$93_sectionSpace$$.y = $buttonDim_buttonX_colInitY$$, $availSpace$$93_sectionSpace$$.$w$ -= $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ + $colGap$$, $isRTL$$35$$ || ($availSpace$$93_sectionSpace$$.x += $button$$66_buttonGap_colInfo_colWidth_context$$458_titleGap$$1$$ + $colGap$$), $currRow_symbolGap$$ = 0, $buttonType_contentHeight$$2_currCol$$++), $currRow_symbolGap$$ === $id$$225_nestedSectionDim_numRows$$);$em$$4_i$$708$$++) {
    }
    return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
  }
};
D.$DvtLegendRenderer$$.$_renderHorizontalSection$ = function $$DvtLegendRenderer$$$$_renderHorizontalSection$$($legend$$18$$, $container$$136$$, $section$$9$$, $availSpace$$94_colWidth$$1$$, $rowHeight$$4$$) {
  if($section$$9$$) {
    var $options$$191$$ = $legend$$18$$.$getOptions$(), $symbolWidth$$ = $options$$191$$.symbolWidth, $symbolGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$191$$.layout.symbolGapWidth), $colGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$191$$.layout.columnGap), $textWidths$$1_titleGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$191$$.layout.titleGapWidth), $numItems$$3$$ = $section$$9$$.items.length, $isRTL$$36$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$18$$.$getCtx$()), 
    $sectionSpace$$1$$ = $availSpace$$94_colWidth$$1$$.$clone$(), $title$$17$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$18$$, $container$$136$$, $section$$9$$.title, $availSpace$$94_colWidth$$1$$, $section$$9$$, !1), $sectionDim$$2_titleDim$$2$$ = $title$$17$$ ? $title$$17$$.$measureDimensions$() : new D.$DvtRectangle$$($isRTL$$36$$ ? $availSpace$$94_colWidth$$1$$.x + $availSpace$$94_colWidth$$1$$.$w$ : $availSpace$$94_colWidth$$1$$.x, $availSpace$$94_colWidth$$1$$.y, 0, 0);
    if($section$$9$$.items) {
      0 < $sectionDim$$2_titleDim$$2$$.$w$ && ($sectionSpace$$1$$.$w$ -= $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths$$1_titleGap$$2$$, $isRTL$$36$$ || ($sectionSpace$$1$$.x += $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths$$1_titleGap$$2$$))
    }else {
      return $sectionDim$$2_titleDim$$2$$
    }
    var $textWidths$$1_titleGap$$2$$ = [], $totalWidth$$6$$ = $availSpace$$94_colWidth$$1$$.$w$ - $sectionSpace$$1$$.$w$, $item$$35_textWidth$$3$$, $i$$709$$;
    for($i$$709$$ = 0;$i$$709$$ < $numItems$$3$$;$i$$709$$++) {
      $item$$35_textWidth$$3$$ = $section$$9$$.items[$i$$709$$], $item$$35_textWidth$$3$$ = window.Math.ceil(D.$DvtTextUtils$$.$getTextStringWidth$($legend$$18$$.$getCtx$(), $item$$35_textWidth$$3$$.text, $options$$191$$.textStyle)), $totalWidth$$6$$ += $item$$35_textWidth$$3$$ + $symbolWidth$$ + $symbolGap$$1$$ + $colGap$$1$$, $textWidths$$1_titleGap$$2$$.push($item$$35_textWidth$$3$$)
    }
    0 < $numItems$$3$$ && ($totalWidth$$6$$ -= $colGap$$1$$);
    $sectionDim$$2_titleDim$$2$$ = new D.$DvtRectangle$$($isRTL$$36$$ ? $availSpace$$94_colWidth$$1$$.x + $availSpace$$94_colWidth$$1$$.$w$ - $totalWidth$$6$$ : $availSpace$$94_colWidth$$1$$.x, $availSpace$$94_colWidth$$1$$.y, $totalWidth$$6$$, window.Math.max($rowHeight$$4$$, $sectionDim$$2_titleDim$$2$$.$h$));
    if($options$$191$$.isLayout || $totalWidth$$6$$ > $availSpace$$94_colWidth$$1$$.$w$) {
      return $container$$136$$.removeChild($title$$17$$), $sectionDim$$2_titleDim$$2$$
    }
    for($i$$709$$ = 0;$i$$709$$ < $numItems$$3$$;$i$$709$$++) {
      $item$$35_textWidth$$3$$ = $section$$9$$.items[$i$$709$$], D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$18$$, $container$$136$$, $item$$35_textWidth$$3$$, $sectionSpace$$1$$, $textWidths$$1_titleGap$$2$$[$i$$709$$], $rowHeight$$4$$, $i$$709$$), $availSpace$$94_colWidth$$1$$ = $textWidths$$1_titleGap$$2$$[$i$$709$$] + $symbolWidth$$ + $symbolGap$$1$$, $sectionSpace$$1$$.$w$ -= $availSpace$$94_colWidth$$1$$ + $colGap$$1$$, $isRTL$$36$$ || ($sectionSpace$$1$$.x += $availSpace$$94_colWidth$$1$$ + 
      $colGap$$1$$)
    }
    return $sectionDim$$2_titleDim$$2$$
  }
};
D.$DvtLegendRenderer$$.$_calcColumns$ = function $$DvtLegendRenderer$$$$_calcColumns$$($colGap$$2_legend$$19$$, $availSpace$$95_colWidth$$2$$, $numRows$$1_rowHeight$$5$$, $items$$28$$, $minimizeNumRows$$1_numCols$$1$$) {
  for(var $options$$192$$ = $colGap$$2_legend$$19$$.$getOptions$(), $fullColWidth_textWidth$$4$$ = 0, $i$$710_symbolWidth$$1$$ = 0;$i$$710_symbolWidth$$1$$ < $items$$28$$.length;$i$$710_symbolWidth$$1$$++) {
    var $rowGap$$1_tempWidth$$ = D.$DvtTextUtils$$.$getTextStringWidth$($colGap$$2_legend$$19$$.$getCtx$(), $items$$28$$[$i$$710_symbolWidth$$1$$].text, $options$$192$$.textStyle);
    $rowGap$$1_tempWidth$$ > $fullColWidth_textWidth$$4$$ && ($fullColWidth_textWidth$$4$$ = $rowGap$$1_tempWidth$$)
  }
  var $i$$710_symbolWidth$$1$$ = $options$$192$$.symbolWidth, $symbolGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$192$$.layout.symbolGapWidth), $rowGap$$1_tempWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$192$$.layout.rowGap);
  $colGap$$2_legend$$19$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$192$$.layout.columnGap);
  $fullColWidth_textWidth$$4$$ = window.Math.ceil($i$$710_symbolWidth$$1$$ + $symbolGap$$2$$ + $fullColWidth_textWidth$$4$$);
  $minimizeNumRows$$1_numCols$$1$$ ? ($minimizeNumRows$$1_numCols$$1$$ = window.Math.min(window.Math.floor(($availSpace$$95_colWidth$$2$$.$w$ + $colGap$$2_legend$$19$$) / ($fullColWidth_textWidth$$4$$ + $colGap$$2_legend$$19$$)), $items$$28$$.length), $numRows$$1_rowHeight$$5$$ = window.Math.min(window.Math.floor(($availSpace$$95_colWidth$$2$$.$h$ + $rowGap$$1_tempWidth$$) / ($numRows$$1_rowHeight$$5$$ + $rowGap$$1_tempWidth$$)), window.Math.ceil($items$$28$$.length / $minimizeNumRows$$1_numCols$$1$$)), 
  $minimizeNumRows$$1_numCols$$1$$ = window.Math.ceil($items$$28$$.length / $numRows$$1_rowHeight$$5$$), $numRows$$1_rowHeight$$5$$ = window.Math.ceil($items$$28$$.length / $minimizeNumRows$$1_numCols$$1$$)) : window.Infinity == $availSpace$$95_colWidth$$2$$.$h$ ? ($minimizeNumRows$$1_numCols$$1$$ = 1, $numRows$$1_rowHeight$$5$$ = $items$$28$$.length) : ($numRows$$1_rowHeight$$5$$ = window.Math.min(window.Math.floor(($availSpace$$95_colWidth$$2$$.$h$ + $rowGap$$1_tempWidth$$) / ($numRows$$1_rowHeight$$5$$ + 
  $rowGap$$1_tempWidth$$)), $items$$28$$.length), $minimizeNumRows$$1_numCols$$1$$ = window.Math.ceil($items$$28$$.length / $numRows$$1_rowHeight$$5$$), $numRows$$1_rowHeight$$5$$ = window.Math.ceil($items$$28$$.length / $minimizeNumRows$$1_numCols$$1$$));
  $availSpace$$95_colWidth$$2$$ = window.Math.min($fullColWidth_textWidth$$4$$, ($availSpace$$95_colWidth$$2$$.$w$ - $colGap$$2_legend$$19$$ * ($minimizeNumRows$$1_numCols$$1$$ - 1)) / $minimizeNumRows$$1_numCols$$1$$);
  return $availSpace$$95_colWidth$$2$$ < $i$$710_symbolWidth$$1$$ ? {width:0, numCols:0, numRows:0} : {width:$availSpace$$95_colWidth$$2$$, numCols:$minimizeNumRows$$1_numCols$$1$$, numRows:$numRows$$1_rowHeight$$5$$}
};
D.$DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($legend$$20_symbolHeight$$) {
  var $options$$193$$ = $legend$$20_symbolHeight$$.$getOptions$(), $text$$97_textHeight$$3$$ = new D.$DvtOutputText$$($legend$$20_symbolHeight$$.$getCtx$(), "Test");
  $text$$97_textHeight$$3$$.$setCSSStyle$($options$$193$$.textStyle);
  $text$$97_textHeight$$3$$.$alignMiddle$();
  $text$$97_textHeight$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$($text$$97_textHeight$$3$$).$h$;
  $legend$$20_symbolHeight$$ = $options$$193$$.symbolHeight + (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$20_symbolHeight$$, $options$$193$$.layout.symbolGapHeight);
  return window.Math.ceil(window.Math.max($text$$97_textHeight$$3$$, $legend$$20_symbolHeight$$))
};
D.$DvtLegendRenderer$$.$_createLegendItem$ = function $$DvtLegendRenderer$$$$_createLegendItem$$($legend$$21$$, $container$$137_displayables$$22$$, $item$$37$$, $availSpace$$96_itemRect$$, $textSpace$$1$$, $rowHeight$$6$$) {
  var $hideAndShow$$4_options$$194$$ = $legend$$21$$.$getOptions$(), $context$$459$$ = $legend$$21$$.$getCtx$(), $isRTL$$37$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$459$$), $symbolWidth$$2$$ = $hideAndShow$$4_options$$194$$.symbolWidth, $symbolGap$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$21$$, $hideAndShow$$4_options$$194$$.layout.symbolGapWidth), $symbolX$$ = $isRTL$$37$$ ? $availSpace$$96_itemRect$$.x + $availSpace$$96_itemRect$$.$w$ - $symbolWidth$$2$$ : $availSpace$$96_itemRect$$.x, 
  $textX$$ = $isRTL$$37$$ ? $availSpace$$96_itemRect$$.x + $availSpace$$96_itemRect$$.$w$ - $symbolWidth$$2$$ - $symbolGap$$3$$ : $availSpace$$96_itemRect$$.x + $symbolWidth$$2$$ + $symbolGap$$3$$, $marker$$13$$ = D.$DvtLegendRenderer$$.$_createLegendSymbol$($legend$$21$$, $symbolX$$, $availSpace$$96_itemRect$$.y, $rowHeight$$6$$, $item$$37$$), $label$$60$$ = $item$$37$$.text, $peer$$24_text$$98$$;
  if($label$$60$$ && ($peer$$24_text$$98$$ = D.$DvtLegendRenderer$$.$_createLegendText$($container$$137_displayables$$22$$, $textSpace$$1$$, $label$$60$$, $hideAndShow$$4_options$$194$$.textStyle))) {
    $peer$$24_text$$98$$.$setX$($textX$$), D.$DvtTextUtils$$.$centerTextVertically$($peer$$24_text$$98$$, $availSpace$$96_itemRect$$.y + $rowHeight$$6$$ / 2), $isRTL$$37$$ && $peer$$24_text$$98$$.$alignRight$()
  }
  $container$$137_displayables$$22$$.$addChild$($marker$$13$$);
  $availSpace$$96_itemRect$$ = new D.$DvtRect$$($context$$459$$, $isRTL$$37$$ ? $textX$$ - $textSpace$$1$$ - D.$DvtLegendRenderer$$.$_FOCUS_GAP$ : $symbolX$$ - D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $availSpace$$96_itemRect$$.y - D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $symbolWidth$$2$$ + $symbolGap$$3$$ + $textSpace$$1$$ + 2 * D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $rowHeight$$6$$ + 2 * D.$DvtLegendRenderer$$.$_FOCUS_GAP$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$96_itemRect$$);
  $hideAndShow$$4_options$$194$$ = $hideAndShow$$4_options$$194$$.hideAndShowBehavior;
  "none" != $hideAndShow$$4_options$$194$$ && "off" != $hideAndShow$$4_options$$194$$ && $availSpace$$96_itemRect$$.setCursor("pointer");
  $container$$137_displayables$$22$$.$addChild$($availSpace$$96_itemRect$$);
  $container$$137_displayables$$22$$ = [$availSpace$$96_itemRect$$, $marker$$13$$];
  null != $peer$$24_text$$98$$ && $container$$137_displayables$$22$$.push($peer$$24_text$$98$$);
  $peer$$24_text$$98$$ = (0,D.$DvtLegendObjPeer$associate$$)($container$$137_displayables$$22$$, $legend$$21$$, $item$$37$$, null != $peer$$24_text$$98$$ ? $peer$$24_text$$98$$.$getUntruncatedTextString$() : null, $item$$37$$.shortDesc, D.$DvtLegendRenderer$$.$_isItemDrillable$($legend$$21$$, $item$$37$$));
  D.$DvtLegendRenderer$$.$isCategoryHidden$(D.$DvtLegendRenderer$$.$getItemCategory$($item$$37$$), $legend$$21$$) && $marker$$13$$.$setHollow$($peer$$24_text$$98$$.$getColor$());
  if("none" != $hideAndShow$$4_options$$194$$ && "off" != $hideAndShow$$4_options$$194$$ || null != $item$$37$$.shortDesc) {
    $availSpace$$96_itemRect$$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($peer$$24_text$$98$$)
  }
};
D.$DvtLegendRenderer$$.$_isItemDrillable$ = function $$DvtLegendRenderer$$$$_isItemDrillable$$($legend$$22$$, $item$$38$$) {
  return"on" == $item$$38$$.drilling ? !0 : "off" == $item$$38$$.drilling ? !1 : "on" == $legend$$22$$.$getOptions$().drilling
};
D.$DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($container$$138$$, $textSpace$$2$$, $label$$61_text$$99$$, $style$$98$$) {
  $label$$61_text$$99$$ = new D.$DvtOutputText$$($container$$138$$.$getCtx$(), $label$$61_text$$99$$);
  $label$$61_text$$99$$.$setCSSStyle$($style$$98$$);
  return $label$$61_text$$99$$ = D.$DvtTextUtils$$.$fitText$($label$$61_text$$99$$, $textSpace$$2$$, window.Infinity, $container$$138$$) ? $label$$61_text$$99$$ : null
};
D.$DvtLegendRenderer$$.$_createLegendSymbol$ = function $$DvtLegendRenderer$$$$_createLegendSymbol$$($legend$$23$$, $symbol$$1_x$$238$$, $y$$212$$, $rowHeight$$7$$, $item$$39$$) {
  var $legendOptions$$6_symbolHeight$$1$$ = $legend$$23$$.$getOptions$();
  $item$$39$$.markerShape || ($item$$39$$.markerShape = $legendOptions$$6_symbolHeight$$1$$._markerShape);
  $item$$39$$.color || ($item$$39$$.color = $legendOptions$$6_symbolHeight$$1$$._color);
  $item$$39$$.lineWidth || ($item$$39$$.lineWidth = $legendOptions$$6_symbolHeight$$1$$._lineWidth);
  var $symbolWidth$$3$$ = $legendOptions$$6_symbolHeight$$1$$.symbolWidth, $legendOptions$$6_symbolHeight$$1$$ = $legendOptions$$6_symbolHeight$$1$$.symbolHeight, $cy$$55$$ = $y$$212$$ + $rowHeight$$7$$ / 2, $cx$$54$$ = $symbol$$1_x$$238$$ + $symbolWidth$$3$$ / 2, $symbolType$$ = null != $item$$39$$.type ? $item$$39$$.type : $item$$39$$.symbolType;
  "line" == $symbolType$$ ? ($item$$39$$.lineWidth = window.Math.min($item$$39$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$), $symbol$$1_x$$238$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$23$$.$getCtx$(), $symbol$$1_x$$238$$, $y$$212$$, $symbolWidth$$3$$, $rowHeight$$7$$, $item$$39$$)) : "lineWithMarker" == $symbolType$$ ? ($item$$39$$.lineWidth = window.Math.min($item$$39$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$), $symbol$$1_x$$238$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$23$$.$getCtx$(), 
  $symbol$$1_x$$238$$, $y$$212$$, $symbolWidth$$3$$, $rowHeight$$7$$, $item$$39$$), D.$DvtLegendRenderer$$.$isCategoryHidden$(D.$DvtLegendRenderer$$.$getItemCategory$($item$$39$$), $legend$$23$$) || $symbol$$1_x$$238$$.$addChild$(D.$DvtLegendRenderer$$.$_createMarker$($legend$$23$$, $cx$$54$$, $cy$$55$$, $symbolWidth$$3$$ * D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $legendOptions$$6_symbolHeight$$1$$ * D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $item$$39$$))) : $symbol$$1_x$$238$$ = 
  "image" == $symbolType$$ ? D.$DvtLegendRenderer$$.$_createImage$($legend$$23$$, $symbol$$1_x$$238$$, $y$$212$$, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $rowHeight$$7$$, $item$$39$$) : D.$DvtLegendRenderer$$.$_createMarker$($legend$$23$$, $cx$$54$$, $cy$$55$$, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $item$$39$$);
  return $symbol$$1_x$$238$$
};
D.$DvtLegendRenderer$$.$_createImage$ = function $$DvtLegendRenderer$$$$_createImage$$($legend$$24$$, $x$$239$$, $y$$213$$, $symbolWidth$$4$$, $symbolHeight$$2$$, $rowHeight$$8$$, $item$$40$$) {
  return new D.$DvtImage$$($legend$$24$$.$getCtx$(), $item$$40$$.source, $x$$239$$, $y$$213$$ + ($rowHeight$$8$$ - $symbolHeight$$2$$) / 2, $symbolWidth$$4$$, $symbolHeight$$2$$)
};
D.$DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($legend$$25_shape$$69$$, $cx$$55$$, $cy$$56$$, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$, $item$$41$$) {
  var $context$$461$$ = $legend$$25_shape$$69$$.$getCtx$(), $legendOptions$$7$$ = $legend$$25_shape$$69$$.$getOptions$();
  $legend$$25_shape$$69$$ = $item$$41$$.markerShape;
  var $color$$65$$ = $item$$41$$.markerColor ? $item$$41$$.markerColor : $item$$41$$.color, $pattern$$12$$ = $item$$41$$.pattern;
  $pattern$$12$$ && "none" != $pattern$$12$$ ? ($legendMarker_symbolWidth$$5$$ = new D.$DvtSimpleMarker$$($context$$461$$, $legend$$25_shape$$69$$, $legendOptions$$7$$.skin, 0, 0, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$), $legendMarker_symbolWidth$$5$$.$setFill$(new D.$DvtPatternFill$$($pattern$$12$$, $color$$65$$, "#FFFFFF")), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($legendMarker_symbolWidth$$5$$, $cx$$55$$, $cy$$56$$)) : ($legendMarker_symbolWidth$$5$$ = new D.$DvtSimpleMarker$$($context$$461$$, 
  $legend$$25_shape$$69$$, $legendOptions$$7$$.skin, $cx$$55$$, $cy$$56$$, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$), $legendMarker_symbolWidth$$5$$.$setSolidFill$($color$$65$$));
  $item$$41$$.borderColor && $legendMarker_symbolWidth$$5$$.$setSolidStroke$($item$$41$$.borderColor, null, $item$$41$$._borderWidth ? $item$$41$$._borderWidth : 1);
  "square" == $legend$$25_shape$$69$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($legendMarker_symbolWidth$$5$$);
  return $legendMarker_symbolWidth$$5$$
};
D.$DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($context$$462_line$$11$$, $stroke$$98_x$$240$$, $lineY_y$$214$$, $colWidth$$3$$, $rowHeight$$9$$, $item$$42_style$$99$$) {
  $lineY_y$$214$$ += $rowHeight$$9$$ / 2;
  $context$$462_line$$11$$ = new D.$DvtLine$$($context$$462_line$$11$$, $stroke$$98_x$$240$$, $lineY_y$$214$$, $stroke$$98_x$$240$$ + $colWidth$$3$$, $lineY_y$$214$$);
  $stroke$$98_x$$240$$ = new D.$DvtSolidStroke$$($item$$42_style$$99$$.color, 1, $item$$42_style$$99$$.lineWidth);
  $item$$42_style$$99$$ = $item$$42_style$$99$$.lineStyle;
  "dashed" == $item$$42_style$$99$$ ? $stroke$$98_x$$240$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$42_style$$99$$), "4,2,4") : "dotted" == $item$$42_style$$99$$ && $stroke$$98_x$$240$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$42_style$$99$$), "2");
  $context$$462_line$$11$$.$setStroke$($stroke$$98_x$$240$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$462_line$$11$$);
  return $context$$462_line$$11$$
};
D.$DvtLegendRenderer$$.$getItemCategory$ = function $$DvtLegendRenderer$$$$getItemCategory$$($item$$43$$) {
  var $category$$17$$ = null;
  return $category$$17$$ = $item$$43$$.categories && 0 < $item$$43$$.categories.length ? $item$$43$$.categories[0] : $item$$43$$.id ? $item$$43$$.id : $item$$43$$.text
};
D.$DvtLegendRenderer$$.$isCategoryHidden$ = function $$DvtLegendRenderer$$$$isCategoryHidden$$($category$$18$$, $legend$$26$$) {
  var $hiddenCategories$$9$$ = $legend$$26$$.$getOptions$().hiddenCategories;
  return!$hiddenCategories$$9$$ || 0 >= $hiddenCategories$$9$$.length ? !1 : -1 !== D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$9$$, $category$$18$$)
};

  return D;
});