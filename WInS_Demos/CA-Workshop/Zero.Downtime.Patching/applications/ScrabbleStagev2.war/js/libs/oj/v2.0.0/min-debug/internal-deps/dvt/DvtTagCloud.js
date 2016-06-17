/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTagCloud$$ = function $$DvtTagCloud$$$($context$$583$$, $callback$$151$$, $callbackObj$$100$$) {
  this.Init($context$$583$$, $callback$$151$$, $callbackObj$$100$$)
};
(0,D.$goog$exportPath_$$)("DvtTagCloud", D.$DvtTagCloud$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloud$$, D.$DvtBaseComponent$$, "DvtTagCloud");
D.$DvtTagCloud$$.newInstance = function $$DvtTagCloud$$$newInstance$($context$$584$$, $callback$$152$$, $callbackObj$$101$$) {
  return new D.$DvtTagCloud$$($context$$584$$, $callback$$152$$, $callbackObj$$101$$)
};
D.$DvtTagCloud$$.prototype.Init = function $$DvtTagCloud$$$$Init$($context$$585$$, $callback$$153$$, $callbackObj$$102$$) {
  D.$DvtTagCloud$$.$superclass$.Init.call(this, $context$$585$$, $callback$$153$$, $callbackObj$$102$$);
  this.$getCtx$().$_stage$.$getElem$().setAttributeNS(null, "text-rendering", "geometricPrecision");
  this.$EventManager$ = new D.$DvtTagCloudEventManager$$(this, $context$$585$$, this.$processEvent$, this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, new D.$DvtTagCloudKeyboardHandler$$(this.$EventManager$));
  this.$Defaults$ = new D.$DvtTagCloudDefaults$$;
  this.$_items$ = [];
  this.$_peers$ = [];
  this.$legend$ = null;
  this.$_dragSource$ = new D.$DvtDragSource$$(this.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$EventManager$, this.$_dragSource$)
};
D.$DvtTagCloud$$.prototype.$render$ = function $$DvtTagCloud$$$$$render$$($ah$$4_options$$261$$, $animationDuration$$10_width$$156$$, $bounds$$152_height$$141$$) {
  !(0,window.isNaN)($animationDuration$$10_width$$156$$) && !(0,window.isNaN)($bounds$$152_height$$141$$) && (this.$Width$ = $animationDuration$$10_width$$156$$, this.$Height$ = $bounds$$152_height$$141$$);
  this.$__cleanUp$();
  this.$SetOptions$($ah$$4_options$$261$$);
  this.$_animation$ && this.$_animation$.stop();
  this.$_oldContainer$ = this.$_container$;
  this.$_oldItems$ = this.$_items$;
  this.$_items$ = [];
  this.$_itemCollection$ = [];
  this.$_container$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$(this.$_container$);
  D.$DvtTagCloudRenderer$$.$render$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$SelectionHandler$, this.$Options$.selection, this.$getObjects$());
  $animationDuration$$10_width$$156$$ = this.$Options$.animationDuration;
  $bounds$$152_height$$141$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$_oldContainer$ ? "none" !== this.$Options$.animationOnDataChange && $ah$$4_options$$261$$ && (this.$_deleteContainer$ = new D.$DvtContainer$$(this.$getCtx$()), this.$addChild$(this.$_deleteContainer$), $ah$$4_options$$261$$ = new D.$DvtDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$4_options$$261$$, this.$_oldItems$, this.$_items$), this.$_animation$ = $ah$$4_options$$261$$.$getAnimation$()) : "none" !== this.$Options$.animationOnDisplay && 
  (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$, this.$_container$, $bounds$$152_height$$141$$, $animationDuration$$10_width$$156$$));
  this.$_animation$ ? (this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$_animation$.$setOnEnd$(this.$OnRenderEnd$, this), this.$_animation$.play()) : this.$OnRenderEnd$();
  this.$UpdateAriaAttributes$()
};
D.$DvtTagCloud$$.prototype.render = D.$DvtTagCloud$$.prototype.$render$;
D.$DvtTagCloud$$.prototype.$registerItems$ = (0,D.$JSCompiler_set$$)("$_items$");
D.$DvtTagCloud$$.prototype.$getAutomation$ = function $$DvtTagCloud$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtTagCloudAutomation$$(this));
  return this.$Automation$
};
D.$DvtTagCloud$$.prototype.getAutomation = D.$DvtTagCloud$$.prototype.$getAutomation$;
D.$DvtTagCloud$$.prototype.$registerObject$ = function $$DvtTagCloud$$$$$registerObject$$($peer$$28$$, $index$$233$$) {
  this.$_peers$.push($peer$$28$$);
  this.$_itemCollection$[$index$$233$$] = $peer$$28$$
};
D.$DvtTagCloud$$.prototype.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$DvtTagCloud$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_itemCollection$");
D.$DvtTagCloud$$.prototype.$highlight$ = function $$DvtTagCloud$$$$$highlight$$($categories$$27$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$27$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$27$$, this.$getObjects$(), "any" === this.$Options$.highlightMatch);
  this.$legend$ && this.$legend$.$highlight$($categories$$27$$)
};
D.$DvtTagCloud$$.prototype.highlight = D.$DvtTagCloud$$.prototype.$highlight$;
D.$DvtTagCloud$$.prototype.select = function $$DvtTagCloud$$$$select$($selection$$32$$) {
  this.$Options$.selection = D.$DvtJSONUtils$$.$clone$($selection$$32$$);
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$SelectionHandler$, this.$Options$.selection, this.$getObjects$())
};
D.$DvtTagCloud$$.prototype.select = D.$DvtTagCloud$$.prototype.select;
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloud$$.prototype;
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$262_selectionMode$$13$$) {
  $options$$262_selectionMode$$13$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$262_selectionMode$$13$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$262_selectionMode$$13$$ = this.$Options$.selectionMode;
  this.$SelectionHandler$ = "single" === $options$$262_selectionMode$$13$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" === $options$$262_selectionMode$$13$$ ? new D.$DvtSelectionHandler$$("m") : null;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "TAG_CLOUD")
};
D.$JSCompiler_prototypeAlias$$.$OnRenderEnd$ = function $$JSCompiler_prototypeAlias$$$$OnRenderEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$(), this.$_deleteContainer$ = null);
  this.$_animation$ && (this.$_animation$ = null, this.$EventManager$.$addListeners$(this));
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$735$$, $source$$34$$) {
  var $type$$236$$ = $event$$735$$.$getType$();
  if($type$$236$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $type$$236$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    var $category$$21$$ = $event$$735$$.$_category$, $index$$234$$ = D.$DvtArrayUtils$$.$getIndex$(this.$Options$.hiddenCategories, $category$$21$$);
    $type$$236$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ && 0 > $index$$234$$ && this.$Options$.hiddenCategories.push($category$$21$$);
    $type$$236$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ && 0 <= $index$$234$$ && this.$Options$.hiddenCategories.splice($index$$234$$, 1);
    this.$render$(this.$Options$, this.$Width$, this.$Height$)
  }else {
    if("categoryRollOver" == $type$$236$$ || "categoryRollOut" == $type$$236$$) {
      this != $source$$34$$ ? this.$highlight$($event$$735$$.categories) : this.$legend$ && this.$legend$ != $source$$34$$ && this.$legend$.$processEvent$($event$$735$$, $source$$34$$)
    }
  }
  $event$$735$$ && this.dispatchEvent($event$$735$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  for(var $displayables$$28$$ = [], $selection$$34$$ = this.$SelectionHandler$.getSelection(), $i$$789$$ = 0;$i$$789$$ < $selection$$34$$.length;$i$$789$$++) {
    $displayables$$28$$ = $displayables$$28$$.concat($selection$$34$$[$i$$789$$].$getDisplayables$())
  }
  return $displayables$$28$$
};
D.$DvtTagCloud$$.prototype.$isDragAvailable$ = function $$DvtTagCloud$$$$$isDragAvailable$$($mouseX$$43$$, $mouseY$$43$$, $clientIds$$19$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$19$$)
};
D.$DvtTagCloud$$.prototype.isDragAvailable = D.$DvtTagCloud$$.prototype.$isDragAvailable$;
D.$DvtTagCloud$$.prototype.$getDragTransferable$ = function $$DvtTagCloud$$$$$getDragTransferable$$($mouseX$$44$$, $mouseY$$44$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$44$$, $mouseY$$44$$)
};
D.$DvtTagCloud$$.prototype.getDragTransferable = D.$DvtTagCloud$$.prototype.$getDragTransferable$;
D.$DvtTagCloud$$.prototype.$getDragOverFeedback$ = function $$DvtTagCloud$$$$$getDragOverFeedback$$($mouseX$$45$$, $mouseY$$45$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$45$$, $mouseY$$45$$)
};
D.$DvtTagCloud$$.prototype.getDragOverFeedback = D.$DvtTagCloud$$.prototype.$getDragOverFeedback$;
D.$DvtTagCloud$$.prototype.$getDragContext$ = function $$DvtTagCloud$$$$$getDragContext$$($mouseX$$46$$, $mouseY$$46$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$46$$, $mouseY$$46$$)
};
D.$DvtTagCloud$$.prototype.getDragContext = D.$DvtTagCloud$$.prototype.$getDragContext$;
D.$DvtTagCloud$$.prototype.$getDragOffset$ = function $$DvtTagCloud$$$$$getDragOffset$$($mouseX$$47$$, $mouseY$$47$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$47$$, $mouseY$$47$$)
};
D.$DvtTagCloud$$.prototype.getDragOffset = D.$DvtTagCloud$$.prototype.$getDragOffset$;
D.$DvtTagCloud$$.prototype.$getPointerOffset$ = function $$DvtTagCloud$$$$$getPointerOffset$$($xOffset$$6$$, $yOffset$$9$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$6$$, $yOffset$$9$$)
};
D.$DvtTagCloud$$.prototype.getPointerOffset = D.$DvtTagCloud$$.prototype.$getPointerOffset$;
D.$DvtTagCloud$$.prototype.$initiateDrag$ = function $$DvtTagCloud$$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
D.$DvtTagCloud$$.prototype.initiateDrag = D.$DvtTagCloud$$.prototype.$initiateDrag$;
D.$DvtTagCloud$$.prototype.$dragDropEnd$ = function $$DvtTagCloud$$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
D.$DvtTagCloud$$.prototype.dragDropEnd = D.$DvtTagCloud$$.prototype.$dragDropEnd$;
D.$DvtTagCloud$$.prototype.$acceptDrag$ = function $$DvtTagCloud$$$$$acceptDrag$$($mouseX$$48$$, $mouseY$$48$$, $clientIds$$20$$) {
  this.$_dropTarget$ || (this.$_dropTarget$ = new D.$DvtTagCloudDropTarget$$);
  return this.$_dropTarget$.$acceptDrag$($mouseX$$48$$, $mouseY$$48$$, $clientIds$$20$$)
};
D.$DvtTagCloud$$.prototype.acceptDrag = D.$DvtTagCloud$$.prototype.$acceptDrag$;
D.$DvtTagCloudAutomation$$ = (0,D.$JSCompiler_set$$)("$_tagCloud$");
(0,D.$goog$exportPath_$$)("DvtTagCloudAutomation", D.$DvtTagCloudAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudAutomation$$, D.$DvtAutomation$$, "DvtTagCloudAutomation");
D.$DvtTagCloudAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTagCloudAutomation$$$$$GetSubIdForDomElement$$($displayable$$88_logicalObj$$14$$) {
  return($displayable$$88_logicalObj$$14$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tagCloud$.$EventManager$, $displayable$$88_logicalObj$$14$$)) && $displayable$$88_logicalObj$$14$$ instanceof D.$DvtTagCloudObjPeer$$ ? "item[" + this.$_tagCloud$.$getItems$().indexOf($displayable$$88_logicalObj$$14$$) + "]" : null
};
D.$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTagCloudAutomation$$$$$getDomElementForSubId$$($index$$236_peer$$30_subId$$30$$) {
  if("tooltip" == $index$$236_peer$$30_subId$$30$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_tagCloud$)
  }
  var $parenIdx$$1$$ = $index$$236_peer$$30_subId$$30$$.indexOf("[");
  return 0 < $parenIdx$$1$$ && "item" === $index$$236_peer$$30_subId$$30$$.substring(0, $parenIdx$$1$$) && ($index$$236_peer$$30_subId$$30$$ = (0,window.parseInt)($index$$236_peer$$30_subId$$30$$.substring($parenIdx$$1$$ + 1, $index$$236_peer$$30_subId$$30$$.length - 1)), $index$$236_peer$$30_subId$$30$$ = this.$_tagCloud$.$getItems$()[$index$$236_peer$$30_subId$$30$$]) ? $index$$236_peer$$30_subId$$30$$.$getDisplayables$()[0].$getElem$() : null
};
D.$DvtTagCloudAutomation$$.prototype.getDomElementForSubId = D.$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtTagCloudAutomation$$.prototype.getItem = function $$DvtTagCloudAutomation$$$$getItem$($index$$237_peer$$31$$) {
  if($index$$237_peer$$31$$ = this.$_tagCloud$.$getItems$()[$index$$237_peer$$31$$]) {
    var $data$$93$$ = {};
    $data$$93$$.color = $index$$237_peer$$31$$.$getDatatipColor$();
    $data$$93$$.tooltip = $index$$237_peer$$31$$.$getShortDesc$();
    $data$$93$$.label = $index$$237_peer$$31$$.$getLabel$();
    $data$$93$$.value = $index$$237_peer$$31$$.getValue();
    $data$$93$$.selected = $index$$237_peer$$31$$.$isSelected$();
    return $data$$93$$
  }
  return null
};
D.$DvtTagCloudAutomation$$.prototype.getItem = D.$DvtTagCloudAutomation$$.prototype.getItem;
D.$DvtTagCloudAutomation$$.prototype.$getItemCount$ = function $$DvtTagCloudAutomation$$$$$getItemCount$$() {
  return this.$_tagCloud$.$getObjects$().length
};
D.$DvtTagCloudAutomation$$.prototype.getItemCount = D.$DvtTagCloudAutomation$$.prototype.$getItemCount$;
D.$DvtTagCloudItem$$ = function $$DvtTagCloudItem$$$($tagCloud$$, $context$$587$$, $textStr$$16$$, $x$$270$$, $y$$243$$, $style$$109$$, $id$$281$$) {
  this.Init($tagCloud$$, $context$$587$$, $textStr$$16$$, $x$$270$$, $y$$243$$, $style$$109$$, $id$$281$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudItem$$, D.$DvtBackgroundOutputText$$, "DvtTagCloudItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloudItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$1$$, $context$$588$$, $textStr$$17$$, $x$$271$$, $y$$244$$, $style$$110$$, $id$$282$$) {
  D.$DvtTagCloudItem$$.$superclass$.Init.call(this, $context$$588$$, $textStr$$17$$, $x$$271$$, $y$$244$$, $style$$110$$, $id$$282$$);
  this.$_tagCloud$ = $tagCloud$$1$$;
  this.$alignAuto$();
  $style$$110$$ && (0,D.$JSCompiler_StaticMethods__createFeedbackStyles$$)(this, $style$$110$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$8$$) {
  this.$_isSelected$ != $bSelected$$8$$ && ((this.$_isSelected$ = $bSelected$$8$$) ? this.$_isShowingHoverEffect$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = !0, this.$_isSelected$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_hoverStyle$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isSelected$ ? this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$);
  this.$_isShowingHoverEffect$ = !1
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$58$$, $oldObj$$2$$) {
  var $anim$$38$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), $endSize_endX$$1_endY$$1_style$$111$$ = this.$getCSSStyle$(), $oldStyle_startAlign_startSize$$ = $oldObj$$2$$.$getCSSStyle$(), $bSizeChange_startY$$6_x$$inline_8180$$ = !1, $dims$$inline_8182_startColor$$14_startX$$5$$ = $oldStyle_startAlign_startSize$$.$getStyle$("color"), $endAlign_endColor$$17$$ = $endSize_endX$$1_endY$$1_style$$111$$.$getStyle$("color");
  if($dims$$inline_8182_startColor$$14_startX$$5$$ != $endAlign_endColor$$17$$) {
    var $tag$$2$$ = this;
    this.$setCSSStyle$($endSize_endX$$1_endY$$1_style$$111$$.$setStyle$("color", $dims$$inline_8182_startColor$$14_startX$$5$$));
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeColor", this, function() {
      return $tag$$2$$.$getCSSStyle$().$getStyle$("color")
    }, function($handler$$58$$) {
      $tag$$2$$.$setCSSStyle$($tag$$2$$.$getCSSStyle$().$setStyle$("color", $handler$$58$$))
    }, $endAlign_endColor$$17$$)
  }
  $oldStyle_startAlign_startSize$$ = (0,window.parseFloat)($oldStyle_startAlign_startSize$$.$getStyle$("font-size"));
  $endSize_endX$$1_endY$$1_style$$111$$ = (0,window.parseFloat)($endSize_endX$$1_endY$$1_style$$111$$.$getStyle$("font-size"));
  $oldStyle_startAlign_startSize$$ != $endSize_endX$$1_endY$$1_style$$111$$ && ($bSizeChange_startY$$6_x$$inline_8180$$ = !0, $tag$$2$$ = this, this.$setFontSize$($oldStyle_startAlign_startSize$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, function() {
    return(0,window.parseFloat)($tag$$2$$.$getCSSStyle$().$getStyle$("font-size"))
  }, this.$setFontSize$, $endSize_endX$$1_endY$$1_style$$111$$));
  $dims$$inline_8182_startColor$$14_startX$$5$$ = $oldObj$$2$$.$getX$();
  $endSize_endX$$1_endY$$1_style$$111$$ = this.$getX$();
  $oldStyle_startAlign_startSize$$ = $oldObj$$2$$.$getHorizAlignment$();
  $endAlign_endColor$$17$$ = this.$getHorizAlignment$();
  if($endSize_endX$$1_endY$$1_style$$111$$ != $dims$$inline_8182_startColor$$14_startX$$5$$ || $bSizeChange_startY$$6_x$$inline_8180$$ && $endAlign_endColor$$17$$ != $oldStyle_startAlign_startSize$$) {
    $endAlign_endColor$$17$$ != $oldStyle_startAlign_startSize$$ && ($bSizeChange_startY$$6_x$$inline_8180$$ = $dims$$inline_8182_startColor$$14_startX$$5$$, $dims$$inline_8182_startColor$$14_startX$$5$$ = $oldObj$$2$$.$TextInstance$.$getDimensions$(void 0), $dims$$inline_8182_startColor$$14_startX$$5$$ = "left" == $oldStyle_startAlign_startSize$$ ? $bSizeChange_startY$$6_x$$inline_8180$$ + $dims$$inline_8182_startColor$$14_startX$$5$$.$w$ : "right" == $oldStyle_startAlign_startSize$$ ? $bSizeChange_startY$$6_x$$inline_8180$$ - 
    $dims$$inline_8182_startColor$$14_startX$$5$$.$w$ : $bSizeChange_startY$$6_x$$inline_8180$$), this.$setX$($dims$$inline_8182_startColor$$14_startX$$5$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, this.$getX$, this.$setX$, $endSize_endX$$1_endY$$1_style$$111$$)
  }
  $bSizeChange_startY$$6_x$$inline_8180$$ = $oldObj$$2$$.$getY$();
  $endSize_endX$$1_endY$$1_style$$111$$ = this.$getY$();
  $endSize_endX$$1_endY$$1_style$$111$$ != $bSizeChange_startY$$6_x$$inline_8180$$ && (this.$setY$($bSizeChange_startY$$6_x$$inline_8180$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, this.$getY$, this.$setY$, $endSize_endX$$1_endY$$1_style$$111$$));
  $oldObj$$2$$.$setAlpha$(0);
  $handler$$58$$.add($anim$$38$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$59$$) {
  $handler$$59$$.add(new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$60$$) {
  this.$setAlpha$(0);
  $handler$$60$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 2)
};
D.$JSCompiler_prototypeAlias$$.$setFontSize$ = function $$JSCompiler_prototypeAlias$$$$setFontSize$$($size$$49$$) {
  D.$DvtTagCloudItem$$.$superclass$.$setFontSize$.call(this, $size$$49$$);
  (0,D.$JSCompiler_StaticMethods__createFeedbackStyles$$)(this, this.$getCSSStyle$())
};
D.$JSCompiler_StaticMethods__createFeedbackStyles$$ = function $$JSCompiler_StaticMethods__createFeedbackStyles$$$($JSCompiler_StaticMethods__createFeedbackStyles$self$$, $style$$112$$) {
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$ = $style$$112$$.$clone$();
  var $color$$86_hoverSelectedColor$$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$getStyle$("color");
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$setStyle$("background-color", null);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  var $hoverColor$$7$$ = (0,D.$DvtTagCloudItem$_lightenColor$$)($color$$86_hoverSelectedColor$$, 0.3);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$("background-color", $hoverColor$$7$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($hoverColor$$7$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$("background-color", $color$$86_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($color$$86_hoverSelectedColor$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $color$$86_hoverSelectedColor$$ = (0,D.$DvtTagCloudItem$_lightenColor$$)($color$$86_hoverSelectedColor$$, 0.6);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$("background-color", $color$$86_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($color$$86_hoverSelectedColor$$))
};
D.$DvtTagCloudItem$_lightenColor$$ = function $$DvtTagCloudItem$_lightenColor$$$($color$$87$$, $opacity$$4$$) {
  var $r$$92$$ = D.$DvtColorUtils$$.$getRed$($color$$87$$), $g$$28$$ = D.$DvtColorUtils$$.$getGreen$($color$$87$$), $b$$63$$ = D.$DvtColorUtils$$.$getBlue$($color$$87$$);
  return D.$DvtColorUtils$$.$makeRGB$(window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $r$$92$$), window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $g$$28$$), window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $b$$63$$))
};
D.$DvtTagCloudObjPeer$$ = function $$DvtTagCloudObjPeer$$$($tagCloud$$2$$, $displayable$$89$$, $data$$94$$) {
  this.Init($tagCloud$$2$$, $displayable$$89$$, $data$$94$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudObjPeer$$, D.$DvtObj$$, "DvtTagCloudObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloudObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$3$$, $displayable$$90$$, $data$$95$$) {
  this.$_view$ = $tagCloud$$3$$;
  this.$_displayable$ = $displayable$$90$$;
  this.$_data$ = $data$$95$$;
  this.$_bSelectable$ = this.$_isSelected$ = !1;
  $data$$95$$.url ? ($displayable$$90$$.$setAriaRole$("link"), this.$_linkCallback$ = D.$DvtToolkitUtils$$.$getLinkCallback$("_blank", $data$$95$$.url)) : $displayable$$90$$.$setAriaRole$("img");
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_data$.label
};
D.$JSCompiler_prototypeAlias$$.getValue = function $$JSCompiler_prototypeAlias$$$getValue$() {
  return this.$_data$.value
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$9$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$9$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$9$$, this.$getDataContext$()) : this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), color:this.$getDatatipColor$(), value:this.getValue()}
};
D.$JSCompiler_prototypeAlias$$.$getLinkCallback$ = (0,D.$JSCompiler_get$$)("$_linkCallback$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  this.$_dataColor$ || (this.$_dataColor$ = (new D.$DvtCSSStyle$$(this.$_data$.style)).$getStyle$("color"));
  return this.$_dataColor$
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_bSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_get$$)("$_bSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$9$$) {
  this.$_isSelected$ = $bSelected$$9$$;
  this.$_displayable$.$setSelected$($bSelected$$9$$);
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_displayable$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_displayable$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$) {
  var $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$ = this.$_view$.$EventManager$.$KeyboardHandler$;
  $bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$.type == D.$DvtMouseEvent$CLICK$$ || $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$.$isMultiSelectEvent$($bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$) ? $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$ = this : $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$.$isNavigationEvent$($bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$) ? 
  ($JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$ = this.$_view$.$getObjects$(), $bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$ = 39 == $bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$.keyCode || 40 == $bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$.keyCode ? !0 : !1, $bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$ = D.$DvtArrayUtils$$.$getIndex$($JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$, 
  this) + ($bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$ ? 1 : -1), $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$ = $bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$ < $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$.length && 0 <= $bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$ ? $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$[$bNext$$inline_8187_event$$744_nextIdx$$inline_8188$$] : 
  null) : $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$ = null;
  return $JSCompiler_temp$$228_JSCompiler_temp$$229_keyboardHandler$$8_navigableItems$$inline_8186$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$61$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$61$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = !1, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$17$$ = [];
  this.$isSelectable$() && $states$$17$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_data$.showPopupBehaviors)) {
    for(var $spbs$$4$$ = this.$_data$.showPopupBehaviors, $si$$ = 0;$si$$ < $spbs$$4$$.length;$si$$++) {
      this.$_showPopupBehaviors$.push(new D.$DvtShowPopupBehavior$$($spbs$$4$$[$si$$].popupId, $spbs$$4$$[$si$$].triggerType, $spbs$$4$$[$si$$].alignId, $spbs$$4$$[$si$$].align))
    }
  }
  return this.$_showPopupBehaviors$
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$18$$) {
  return this.$_view$.$SelectionHandler$ ? $clientIds$$18$$[0] : null
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  var $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8190_selection$$inline_8193$$ = this.$_view$;
  this.$isSelected$() || ($JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8190_selection$$inline_8193$$.$SelectionHandler$.$processClick$(this, !1), $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8190_selection$$inline_8193$$.$EventManager$.$fireSelectionEvent$());
  for(var $rowKeys$$inline_8192$$ = [], $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8190_selection$$inline_8193$$ = $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8190_selection$$inline_8193$$.$SelectionHandler$.getSelection(), $i$$inline_8194$$ = 0;$i$$inline_8194$$ < $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8190_selection$$inline_8193$$.length;$i$$inline_8194$$++) {
    var $item$$inline_8195$$ = $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8190_selection$$inline_8193$$[$i$$inline_8194$$];
    $item$$inline_8195$$ instanceof D.$DvtTagCloudObjPeer$$ && $rowKeys$$inline_8192$$.push($item$$inline_8195$$.getId())
  }
  return $rowKeys$$inline_8192$$
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$getDragFeedback$()
};
D.$DvtTagCloudDefaults$$ = function $$DvtTagCloudDefaults$$$() {
  this.Init({alta:D.$DvtTagCloudDefaults$VERSION_1$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtTagCloudDefaults");
D.$DvtTagCloudDefaults$VERSION_1$$ = {animationOnDisplay:"none", animationOnDataChange:"none", emptyText:null, hiddenCategories:[], hideAndShowBehavior:"none", highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", layout:"rectangular", selectionMode:"none", _statusMessageStyle:new D.$DvtCSSStyle$$('font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #333333;'), styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, style:new D.$DvtCSSStyle$$('font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #333333;')}, 
touchResponse:"auto"};
D.$DvtTagCloudRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudRenderer$$, D.$DvtObj$$, "DvtTagCloudRenderer");
D.$DvtTagCloudRenderer$$.$render$ = function $$DvtTagCloudRenderer$$$$render$$($tagCloud$$4$$, $container$$185$$, $availSpace$$121$$) {
  D.$DvtTagCloudRenderer$$.$_renderBackground$($tagCloud$$4$$, $container$$185$$, $availSpace$$121$$);
  D.$DvtTagCloudRenderer$$.$_renderLegend$($tagCloud$$4$$, $container$$185$$, $availSpace$$121$$);
  D.$DvtTagCloudRenderer$$.$_adjustAvailSpace$($availSpace$$121$$);
  var $items$$38_options$$264$$ = $tagCloud$$4$$.$getOptions$();
  $items$$38_options$$264$$.items && 0 < $items$$38_options$$264$$.items.length ? ($items$$38_options$$264$$ = D.$DvtTagCloudRenderer$$.$_renderItems$($tagCloud$$4$$, $container$$185$$, $availSpace$$121$$), 0 < $items$$38_options$$264$$.length ? ($tagCloud$$4$$.$registerItems$($items$$38_options$$264$$), (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($tagCloud$$4$$.$EventManager$, $tagCloud$$4$$.$getObjects$()[0])) : D.$DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$185$$, $availSpace$$121$$)) : 
  D.$DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$185$$, $availSpace$$121$$)
};
D.$DvtTagCloudRenderer$$.$_renderEmptyText$ = function $$DvtTagCloudRenderer$$$$_renderEmptyText$$($tagCloud$$5$$, $container$$186$$, $availSpace$$122$$) {
  var $options$$265$$ = $tagCloud$$5$$.$getOptions$(), $emptyTextStr$$3$$ = $options$$265$$.emptyText;
  $emptyTextStr$$3$$ || ($emptyTextStr$$3$$ = (0,D.$DvtBundle$getTranslation$$)($options$$265$$, "labelNoData", "DvtUtilBundle", "NO_DATA", null));
  D.$DvtTextUtils$$.$renderEmptyText$($container$$186$$, $emptyTextStr$$3$$, new D.$DvtRectangle$$($availSpace$$122$$.x, $availSpace$$122$$.y, $availSpace$$122$$.$w$, $availSpace$$122$$.$h$), $tagCloud$$5$$.$EventManager$, $options$$265$$._statusMessageStyle)
};
D.$DvtTagCloudRenderer$$.$_renderBackground$ = function $$DvtTagCloudRenderer$$$$_renderBackground$$($rect$$49_tagCloud$$6$$, $container$$187$$, $availSpace$$123$$) {
  $rect$$49_tagCloud$$6$$ = new D.$DvtRect$$($rect$$49_tagCloud$$6$$.$getCtx$(), $availSpace$$123$$.x, $availSpace$$123$$.y, $availSpace$$123$$.$w$, $availSpace$$123$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$49_tagCloud$$6$$);
  $container$$187$$.$addChild$($rect$$49_tagCloud$$6$$)
};
D.$DvtTagCloudRenderer$$.$_renderItems$ = function $$DvtTagCloudRenderer$$$$_renderItems$$($tagCloud$$7$$, $container$$188$$, $availSpace$$124$$) {
  for(var $options$$266$$ = $tagCloud$$7$$.$getOptions$(), $items$$39$$ = [], $dataItems$$2$$ = $options$$266$$.items, $fontSizeFunction_minValue$$17$$ = window.Number.MAX_VALUE, $categoryMap$$2_maxValue$$17$$ = -window.Number.MAX_VALUE, $i$$793$$ = 0;$i$$793$$ < $dataItems$$2$$.length;$i$$793$$++) {
    $fontSizeFunction_minValue$$17$$ = window.Math.min($fontSizeFunction_minValue$$17$$, $dataItems$$2$$[$i$$793$$].value), $categoryMap$$2_maxValue$$17$$ = window.Math.max($categoryMap$$2_maxValue$$17$$, $dataItems$$2$$[$i$$793$$].value)
  }
  $fontSizeFunction_minValue$$17$$ = D.$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$($fontSizeFunction_minValue$$17$$, $categoryMap$$2_maxValue$$17$$);
  $categoryMap$$2_maxValue$$17$$ = D.$DvtArrayUtils$$.$createBooleanMap$($options$$266$$.hiddenCategories);
  for($i$$793$$ = 0;$i$$793$$ < $dataItems$$2$$.length;$i$$793$$++) {
    var $data$$96$$ = $dataItems$$2$$[$i$$793$$];
    $data$$96$$.categories || ($data$$96$$.categories = [$data$$96$$.label]);
    if(!$categoryMap$$2_maxValue$$17$$ || !D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$2_maxValue$$17$$, $data$$96$$.categories)) {
      var $item$$55_style$$113$$ = $options$$266$$.styleDefaults.style.$clone$();
      (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($item$$55_style$$113$$, $data$$96$$.style);
      $item$$55_style$$113$$.$setStyle$("font-size", $fontSizeFunction_minValue$$17$$.call(null, $data$$96$$.value).toString());
      var $item$$55_style$$113$$ = new D.$DvtTagCloudItem$$($tagCloud$$7$$, $tagCloud$$7$$.$getCtx$(), $data$$96$$.label, 0, 0, $item$$55_style$$113$$, $data$$96$$.id), $peer$$32$$ = new D.$DvtTagCloudObjPeer$$($tagCloud$$7$$, $item$$55_style$$113$$, $data$$96$$);
      $tagCloud$$7$$.$EventManager$.$associate$($item$$55_style$$113$$, $peer$$32$$);
      $tagCloud$$7$$.$registerObject$($peer$$32$$, $i$$793$$);
      "none" !== $options$$266$$.selectionMode && $peer$$32$$.$setSelectable$(!0);
      ($peer$$32$$.$isSelectable$() || $data$$96$$.url || $peer$$32$$.$getAction$()) && $item$$55_style$$113$$.setCursor("pointer");
      $items$$39$$.push($item$$55_style$$113$$);
      $container$$188$$.$addChild$($item$$55_style$$113$$)
    }
  }
  0 < $items$$39$$.length && ("cloud" === $options$$266$$.layout ? D.$DvtTagCloudLayoutUtils$$.$cloudLayout$($availSpace$$124$$, $items$$39$$) : D.$DvtTagCloudLayoutUtils$$.$rectangleLayout$($availSpace$$124$$, $items$$39$$, (0,D.$DvtAgent$isRightToLeft$$)($tagCloud$$7$$.$getCtx$())));
  return $items$$39$$
};
D.$DvtTagCloudRenderer$$.$_renderLegend$ = function $$DvtTagCloudRenderer$$$$_renderLegend$$($tagCloud$$8$$, $container$$189$$, $availSpace$$125$$) {
  var $legend$$30_options$$267$$ = $tagCloud$$8$$.$getOptions$(), $legendData$$6_legendOptions$$9$$ = $legend$$30_options$$267$$.legend;
  if($legendData$$6_legendOptions$$9$$ && $legendData$$6_legendOptions$$9$$.sections) {
    $legendData$$6_legendOptions$$9$$ = D.$DvtJSONUtils$$.$clone$($legendData$$6_legendOptions$$9$$);
    $legendData$$6_legendOptions$$9$$.orientation = "horizontal";
    $legendData$$6_legendOptions$$9$$.halign = "center";
    $legendData$$6_legendOptions$$9$$.hoverBehavior = $legend$$30_options$$267$$.hoverBehavior;
    $legendData$$6_legendOptions$$9$$.hideAndShowBehavior = $legend$$30_options$$267$$.hideAndShowBehavior;
    $legendData$$6_legendOptions$$9$$.hiddenCategories = $legend$$30_options$$267$$.hiddenCategories;
    $legend$$30_options$$267$$ = (0,D.$DvtLegend$newInstance$$)($tagCloud$$8$$.$getCtx$(), $tagCloud$$8$$.$processEvent$, $tagCloud$$8$$);
    $container$$189$$.$addChild$($legend$$30_options$$267$$);
    var $preferredSize$$7$$ = $legend$$30_options$$267$$.$getPreferredSize$($legendData$$6_legendOptions$$9$$, $availSpace$$125$$.$w$, $availSpace$$125$$.$h$ / 3);
    $legend$$30_options$$267$$.$render$($legendData$$6_legendOptions$$9$$, $preferredSize$$7$$.$w$, $preferredSize$$7$$.$h$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$125$$, "bottom", $legend$$30_options$$267$$, $preferredSize$$7$$.$w$, $preferredSize$$7$$.$h$, 0);
    $tagCloud$$8$$.$legend$ && ($tagCloud$$8$$.$legend$.$destroy$(), $container$$189$$.removeChild($tagCloud$$8$$.$legend$));
    $tagCloud$$8$$.$legend$ = $legend$$30_options$$267$$
  }
};
D.$DvtTagCloudRenderer$$.$_adjustAvailSpace$ = function $$DvtTagCloudRenderer$$$$_adjustAvailSpace$$($availSpace$$126$$) {
  $availSpace$$126$$.x = window.Math.round($availSpace$$126$$.x);
  $availSpace$$126$$.y = window.Math.round($availSpace$$126$$.y);
  $availSpace$$126$$.$w$ = window.Math.round($availSpace$$126$$.$w$);
  $availSpace$$126$$.$h$ = window.Math.round($availSpace$$126$$.$h$)
};
D.$DvtTagCloudLayoutUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudLayoutUtils$$, D.$DvtObj$$, "DvtTagCloudLayoutUtils");
D.$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$ = function $$DvtTagCloudLayoutUtils$$$$getFontSizeFunction$$($minValue$$16$$, $maxValue$$16$$) {
  return function($value$$188$$) {
    return 12 + window.Math.ceil(12 * (2 * ($value$$188$$ - $minValue$$16$$) / ($maxValue$$16$$ - $minValue$$16$$)))
  }
};
D.$DvtTagCloudLayoutUtils$$.$cloudLayout$ = function $$DvtTagCloudLayoutUtils$$$$cloudLayout$$($availSpace$$119$$, $items$$36$$) {
  var $positions$$2_scale$$62$$ = [], $cx$$62_xrStep$$ = 10 / 180, $fontSize$$12_yrStep$$ = 10 / 180;
  $availSpace$$119$$.$w$ > $availSpace$$119$$.$h$ ? $cx$$62_xrStep$$ *= $availSpace$$119$$.$w$ / $availSpace$$119$$.$h$ : $fontSize$$12_yrStep$$ *= $availSpace$$119$$.$h$ / $availSpace$$119$$.$w$;
  for(var $thetaStep$$1$$ = 2 * window.Math.PI / 180, $bounds$$153_cy$$63$$ = null, $maxFontSize$$ = 0, $cosCache$$ = [], $sinCache$$ = [], $i$$790$$ = 0;$i$$790$$ < $items$$36$$.length;$i$$790$$++) {
    for(var $placed$$ = !1, $step$$4$$ = 0, $stepIncrement$$ = 4, $tag$$4$$ = $items$$36$$[$i$$790$$], $dims$$68$$ = $tag$$4$$.$getDimensions$(), $maxFontSize$$ = window.Math.max($maxFontSize$$, (0,window.parseFloat)($tag$$4$$.$getCSSStyle$().$getStyle$("font-size"))), $lastCollisionIndex$$ = -1;!$placed$$;) {
      var $j$$105_lookup$$ = $step$$4$$ % 180;
      void 0 === $cosCache$$[$j$$105_lookup$$] && ($cosCache$$[$j$$105_lookup$$] = window.Math.cos($step$$4$$ * $thetaStep$$1$$));
      void 0 === $sinCache$$[$j$$105_lookup$$] && ($sinCache$$[$j$$105_lookup$$] = window.Math.sin($step$$4$$ * $thetaStep$$1$$));
      var $x$$273$$ = $cx$$62_xrStep$$ * $step$$4$$ * $cosCache$$[$j$$105_lookup$$], $y$$245$$ = $fontSize$$12_yrStep$$ * $step$$4$$ * $sinCache$$[$j$$105_lookup$$], $rect$$48$$ = new D.$DvtRectangle$$($x$$273$$, $y$$245$$, $dims$$68$$.$w$, $dims$$68$$.$h$), $placed$$ = !0;
      -1 != $lastCollisionIndex$$ && $positions$$2_scale$$62$$[$lastCollisionIndex$$].$intersects$($rect$$48$$) && ($placed$$ = !1);
      if($placed$$) {
        for($j$$105_lookup$$ = 0;$j$$105_lookup$$ < $i$$790$$;$j$$105_lookup$$++) {
          if($positions$$2_scale$$62$$[$j$$105_lookup$$].$intersects$($rect$$48$$)) {
            $lastCollisionIndex$$ = $j$$105_lookup$$;
            $placed$$ = !1;
            break
          }
        }
      }
      $placed$$ && ($bounds$$153_cy$$63$$ = $bounds$$153_cy$$63$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$153_cy$$63$$, $rect$$48$$) : $rect$$48$$, $lastCollisionIndex$$ = -1, $positions$$2_scale$$62$$[$i$$790$$] = $rect$$48$$, $tag$$4$$.$setX$($x$$273$$), $tag$$4$$.$setY$(-$dims$$68$$.y + $y$$245$$));
      3600 === $step$$4$$ ? $stepIncrement$$ = 3 : 5400 === $step$$4$$ ? $stepIncrement$$ = 2 : 10800 === $step$$4$$ && ($stepIncrement$$ = 1);
      $step$$4$$ += $stepIncrement$$
    }
  }
  $positions$$2_scale$$62$$ = window.Math.max($bounds$$153_cy$$63$$.$w$ / $availSpace$$119$$.$w$, $bounds$$153_cy$$63$$.$h$ / $availSpace$$119$$.$h$);
  $cx$$62_xrStep$$ = $bounds$$153_cy$$63$$.x + $bounds$$153_cy$$63$$.$w$ / 2;
  $bounds$$153_cy$$63$$ = $bounds$$153_cy$$63$$.y + $bounds$$153_cy$$63$$.$h$ / 2;
  for($j$$105_lookup$$ = 0;$j$$105_lookup$$ < $items$$36$$.length;$j$$105_lookup$$++) {
    $tag$$4$$ = $items$$36$$[$j$$105_lookup$$], $tag$$4$$.$setX$($availSpace$$119$$.x + $tag$$4$$.$getX$() / $positions$$2_scale$$62$$ + ($availSpace$$119$$.$w$ / 2 - $cx$$62_xrStep$$ / $positions$$2_scale$$62$$)), $tag$$4$$.$setY$($availSpace$$119$$.y + $tag$$4$$.$getY$() / $positions$$2_scale$$62$$ + ($availSpace$$119$$.$h$ / 2 - $bounds$$153_cy$$63$$ / $positions$$2_scale$$62$$)), $fontSize$$12_yrStep$$ = (0,window.parseFloat)($tag$$4$$.$getCSSStyle$().$getStyle$("font-size")), $tag$$4$$.$setFontSize$($fontSize$$12_yrStep$$ / 
    $positions$$2_scale$$62$$)
  }
};
D.$DvtTagCloudLayoutUtils$$.$rectangleLayout$ = function $$DvtTagCloudLayoutUtils$$$$rectangleLayout$$($availSpace$$120$$, $items$$37$$, $isBidi$$) {
  for(var $arDims$$1$$ = [], $maxWidth$$31_scale$$63$$ = 0, $maxHeight$$19$$ = 0, $arLines_maxFontSize$$1$$ = 0, $i$$791_minScale$$9$$ = 0;$i$$791_minScale$$9$$ < $items$$37$$.length;$i$$791_minScale$$9$$++) {
    var $lineWidth$$9_maxScale_tag$$5$$ = $items$$37$$[$i$$791_minScale$$9$$], $dims$$69_lineStart$$ = $lineWidth$$9_maxScale_tag$$5$$.$getDimensions$(), $maxWidth$$31_scale$$63$$ = window.Math.max($maxWidth$$31_scale$$63$$, $dims$$69_lineStart$$.$w$), $maxHeight$$19$$ = window.Math.max($maxHeight$$19$$, $dims$$69_lineStart$$.$h$), $arLines_maxFontSize$$1$$ = window.Math.max($arLines_maxFontSize$$1$$, (0,window.parseFloat)($lineWidth$$9_maxScale_tag$$5$$.$getCSSStyle$().$getStyle$("font-size")));
    $arDims$$1$$.push(new D.$DvtDimension$$($dims$$69_lineStart$$.$w$, $dims$$69_lineStart$$.$h$))
  }
  $i$$791_minScale$$9$$ = 0;
  for($lineWidth$$9_maxScale_tag$$5$$ = ($availSpace$$120$$.$w$ - 10) / $maxWidth$$31_scale$$63$$;0.001 < $lineWidth$$9_maxScale_tag$$5$$ - $i$$791_minScale$$9$$;) {
    $maxWidth$$31_scale$$63$$ = ($i$$791_minScale$$9$$ + $lineWidth$$9_maxScale_tag$$5$$) / 2, $arLines_maxFontSize$$1$$ = D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($availSpace$$120$$.$w$ - 10) / $maxWidth$$31_scale$$63$$), $arLines_maxFontSize$$1$$.length * ($maxWidth$$31_scale$$63$$ * $maxHeight$$19$$ + 2) - 2 > $availSpace$$120$$.$h$ - 10 ? $lineWidth$$9_maxScale_tag$$5$$ = $maxWidth$$31_scale$$63$$ : $i$$791_minScale$$9$$ = $maxWidth$$31_scale$$63$$
  }
  $maxWidth$$31_scale$$63$$ = $i$$791_minScale$$9$$;
  $arLines_maxFontSize$$1$$ = D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($availSpace$$120$$.$w$ - 10) / $maxWidth$$31_scale$$63$$);
  $arLines_maxFontSize$$1$$.push($items$$37$$.length);
  for($i$$791_minScale$$9$$ = 0;$i$$791_minScale$$9$$ < $arLines_maxFontSize$$1$$.length - 1;$i$$791_minScale$$9$$++) {
    var $dims$$69_lineStart$$ = $arLines_maxFontSize$$1$$[$i$$791_minScale$$9$$], $lineEnd$$ = $arLines_maxFontSize$$1$$[$i$$791_minScale$$9$$ + 1], $hPadding$$1$$ = 0, $bottomY$$2_maxLineHeight$$ = 0, $justified$$ = !0;
    if(1 < $lineEnd$$ - $dims$$69_lineStart$$) {
      for(var $lineWidth$$9_maxScale_tag$$5$$ = 0, $flowPadding_j$$106$$ = $dims$$69_lineStart$$;$flowPadding_j$$106$$ < $lineEnd$$;$flowPadding_j$$106$$++) {
        $lineWidth$$9_maxScale_tag$$5$$ += $arDims$$1$$[$flowPadding_j$$106$$].$w$ * $maxWidth$$31_scale$$63$$, $bottomY$$2_maxLineHeight$$ = window.Math.max($bottomY$$2_maxLineHeight$$, $arDims$$1$$[$flowPadding_j$$106$$].$h$ * $maxWidth$$31_scale$$63$$)
      }
      $hPadding$$1$$ = ($availSpace$$120$$.$w$ - 10 - $lineWidth$$9_maxScale_tag$$5$$) / ($lineEnd$$ - $dims$$69_lineStart$$ - 1);
      $i$$791_minScale$$9$$ == $arLines_maxFontSize$$1$$.length - 2 && ($flowPadding_j$$106$$ = 0.5 * $bottomY$$2_maxLineHeight$$, $flowPadding_j$$106$$ < $hPadding$$1$$ && $lineWidth$$9_maxScale_tag$$5$$ + ($lineEnd$$ - $dims$$69_lineStart$$) * $flowPadding_j$$106$$ < 0.9 * ($availSpace$$120$$.$w$ - 10) && ($hPadding$$1$$ = $flowPadding_j$$106$$, $justified$$ = !1))
    }
    for(var $bottomY$$2_maxLineHeight$$ = 5 + ($i$$791_minScale$$9$$ + 1) * ($maxHeight$$19$$ * $maxWidth$$31_scale$$63$$ + 2) - 2, $curX$$2$$ = $isBidi$$ ? $availSpace$$120$$.$w$ - 5 : 5, $flowPadding_j$$106$$ = $dims$$69_lineStart$$;$flowPadding_j$$106$$ < $lineEnd$$;$flowPadding_j$$106$$++) {
      var $lineWidth$$9_maxScale_tag$$5$$ = $items$$37$$[$flowPadding_j$$106$$], $fontSize$$13$$ = (0,window.parseFloat)($lineWidth$$9_maxScale_tag$$5$$.$getCSSStyle$().$getStyle$("font-size"));
      $lineWidth$$9_maxScale_tag$$5$$.$setFontSize$($fontSize$$13$$ * $maxWidth$$31_scale$$63$$);
      $lineWidth$$9_maxScale_tag$$5$$.$setY$($availSpace$$120$$.y + $bottomY$$2_maxLineHeight$$);
      $justified$$ && $flowPadding_j$$106$$ == $lineEnd$$ - 1 && $flowPadding_j$$106$$ != $dims$$69_lineStart$$ ? $isBidi$$ ? ($lineWidth$$9_maxScale_tag$$5$$.$alignLeft$(), $lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$120$$.x + 5)) : ($lineWidth$$9_maxScale_tag$$5$$.$alignRight$(), $lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$120$$.x + $availSpace$$120$$.$w$ - 5)) : ($lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$120$$.x + $curX$$2$$), $isBidi$$ ? ($lineWidth$$9_maxScale_tag$$5$$.$alignRight$(), 
      $curX$$2$$ -= $arDims$$1$$[$flowPadding_j$$106$$].$w$ * $maxWidth$$31_scale$$63$$ + $hPadding$$1$$) : ($lineWidth$$9_maxScale_tag$$5$$.$alignLeft$(), $curX$$2$$ += $arDims$$1$$[$flowPadding_j$$106$$].$w$ * $maxWidth$$31_scale$$63$$ + $hPadding$$1$$))
    }
  }
};
D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$ = function $$DvtTagCloudLayoutUtils$$$$_calculateLineBreaks$$($arDims$$2$$, $width$$157$$) {
  var $lines$$1$$ = [0], $curWidth$$ = $arDims$$2$$[0].$w$ + 2;
  if(1 < $arDims$$2$$.length) {
    for(var $i$$792$$ = 1;$i$$792$$ < $arDims$$2$$.length;$i$$792$$++) {
      $curWidth$$ + $arDims$$2$$[$i$$792$$].$w$ > $width$$157$$ && ($lines$$1$$.push($i$$792$$), $curWidth$$ = 0), $curWidth$$ += $arDims$$2$$[$i$$792$$].$w$ + 2
    }
  }
  return $lines$$1$$
};
D.$DvtTagCloudStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudStyleUtils$$, D.$DvtObj$$, "DvtTagCloudStyleUtils");
D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$ = function $$DvtTagCloudStyleUtils$$$$getAnimationDuration$$($tagCloud$$9$$) {
  return $tagCloud$$9$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtTagCloudEventManager$$ = function $$DvtTagCloudEventManager$$$($view$$57$$, $context$$586$$, $callback$$154$$, $callbackObj$$103$$) {
  this.Init($context$$586$$, $callback$$154$$, $callbackObj$$103$$);
  this.$_view$ = $view$$57$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudEventManager$$, D.$DvtEventManager$$, "DvtTagCloudEventManager");
D.$DvtTagCloudEventManager$$.prototype.$OnClickInternal$ = function $$DvtTagCloudEventManager$$$$$OnClickInternal$$($event$$736_obj$$343$$) {
  $event$$736_obj$$343$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$736_obj$$343$$.target);
  (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($event$$736_obj$$343$$);
  this.$_processActionEvent$($event$$736_obj$$343$$)
};
D.$DvtTagCloudEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchHoverEndInternal$$($event$$737_obj$$344$$) {
  $event$$737_obj$$344$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$737_obj$$344$$.target);
  this.$_processActionEvent$($event$$737_obj$$344$$)
};
D.$DvtTagCloudEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchClickInternal$$($event$$738_obj$$345$$) {
  $event$$738_obj$$345$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$738_obj$$345$$.target);
  (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($event$$738_obj$$345$$);
  this.$_processActionEvent$($event$$738_obj$$345$$)
};
D.$JSCompiler_StaticMethods__handleLinkCallback$$ = function $$JSCompiler_StaticMethods__handleLinkCallback$$$($callback$$155_obj$$346$$) {
  $callback$$155_obj$$346$$ instanceof D.$DvtTagCloudObjPeer$$ && ($callback$$155_obj$$346$$ = $callback$$155_obj$$346$$.$getLinkCallback$()) && $callback$$155_obj$$346$$.call()
};
D.$DvtTagCloudEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessKeyboardEvent$$($event$$739$$) {
  var $eventConsumed$$6$$ = !0, $focusObj$$1$$ = this.$getFocus$();
  13 == $event$$739$$.keyCode ? (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($focusObj$$1$$) : $eventConsumed$$6$$ = D.$DvtTagCloudEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$739$$);
  return $eventConsumed$$6$$
};
D.$DvtTagCloudEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessRolloverEvent$$($event$$740_options$$263$$, $categories$$28_hoverBehaviorDelay$$5_obj$$347$$, $bOver$$12_rolloverEvent$$6$$) {
  $event$$740_options$$263$$ = this.$_view$.$getOptions$();
  "dim" == $event$$740_options$$263$$.hoverBehavior && ($categories$$28_hoverBehaviorDelay$$5_obj$$347$$ = $categories$$28_hoverBehaviorDelay$$5_obj$$347$$.$getCategories$ ? $categories$$28_hoverBehaviorDelay$$5_obj$$347$$.$getCategories$() : [], $event$$740_options$$263$$.highlightedCategories = $bOver$$12_rolloverEvent$$6$$ ? $categories$$28_hoverBehaviorDelay$$5_obj$$347$$.slice() : null, $bOver$$12_rolloverEvent$$6$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$12_rolloverEvent$$6$$ ? "categoryRollOver" : 
  "categoryRollOut", $event$$740_options$$263$$.highlightedCategories), $categories$$28_hoverBehaviorDelay$$5_obj$$347$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$740_options$$263$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$12_rolloverEvent$$6$$, this.$_view$.$getObjects$(), $categories$$28_hoverBehaviorDelay$$5_obj$$347$$, "any" == $event$$740_options$$263$$.highlightMatch))
};
D.$DvtTagCloudEventManager$$.prototype.$_processActionEvent$ = function $$DvtTagCloudEventManager$$$$$_processActionEvent$$($obj$$348$$) {
  $obj$$348$$ && ($obj$$348$$.$getAction$ && $obj$$348$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$348$$.$getAction$(), $obj$$348$$.getId()))
};
D.$DvtTagCloudEventManager$$.prototype.$GetTouchResponse$ = function $$DvtTagCloudEventManager$$$$$GetTouchResponse$$() {
  return this.$_view$.$getOptions$().touchResponse
};
D.$DvtTagCloudKeyboardHandler$$ = function $$DvtTagCloudKeyboardHandler$$$($manager$$28$$) {
  this.Init($manager$$28$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtTagCloudKeyboardHandler");
D.$DvtTagCloudKeyboardHandler$$.prototype.Init = function $$DvtTagCloudKeyboardHandler$$$$Init$($manager$$29$$) {
  D.$DvtTagCloudKeyboardHandler$$.$superclass$.Init.call(this, $manager$$29$$)
};
D.$DvtTagCloudKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isSelectionEvent$$($event$$741$$) {
  return this.$isNavigationEvent$($event$$741$$) && !$event$$741$$.ctrlKey
};
D.$DvtTagCloudKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isMultiSelectEvent$$($event$$742$$) {
  return 32 == $event$$742$$.keyCode && $event$$742$$.ctrlKey
};
D.$DvtTagCloudDropTarget$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudDropTarget$$, D.$DvtDropTarget$$, "DvtTagCloudDropTarget");
D.$DvtTagCloudDropTarget$$.prototype.$acceptDrag$ = function $$DvtTagCloudDropTarget$$$$$acceptDrag$$($mouseX$$40$$, $mouseY$$40$$, $clientIds$$17$$) {
  return $clientIds$$17$$[0]
};

  return D;
});