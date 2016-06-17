/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtBaseTreeView$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtBaseTreeView", D.$DvtBaseTreeView$$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeView$$, D.$DvtBaseComponent$$, "DvtBaseTreeView");
D.$DvtBaseTreeView$$.prototype.Init = function $$DvtBaseTreeView$$$$Init$($context$$651$$, $callback$$178$$, $callbackObj$$123$$) {
  D.$DvtBaseTreeView$$.$superclass$.Init.call(this, $context$$651$$, $callback$$178$$, $callbackObj$$123$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$651$$, this.dispatchEvent, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$651$$);
  this.$_dropTarget$ = new D.$DvtBaseTreeDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_legend$ = null;
  this.$_hasFocus$ = !1;
  this.$_navigableIdToFocus$ = null
};
D.$DvtBaseTreeView$$.prototype.$SetOptions$ = function $$DvtBaseTreeView$$$$$SetOptions$$($options$$309$$) {
  $options$$309$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$309$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtBaseTreeView$$.prototype.$render$ = function $$DvtBaseTreeView$$$$$render$$($ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$, $container$$215_width$$186$$, $availSpace$$129_bBlackBoxUpdate$$3_height$$164$$) {
  var $bNewOptions$$ = $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ || !this.$Options$;
  this.$SetOptions$($ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$);
  var $newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$ = this.$getOptions$();
  if(null == $newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$.nodes) {
    $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ = null
  }else {
    $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ = [];
    for(var $hiddenCategories$$inline_9103_oldAncestors$$inline_9116_oldList$$inline_9118$$ = D.$DvtArrayUtils$$.$createBooleanMap$($newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$.hiddenCategories), $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$ = 0;$artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$ < $newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$.nodes.length;$artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$++) {
      var $newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$ = $newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$.nodes[$artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$];
      $newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$._index = $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$;
      ($newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$ = (0,D.$JSCompiler_StaticMethods__processNode$$)(this, $hiddenCategories$$inline_9103_oldAncestors$$inline_9116_oldList$$inline_9118$$, $newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$)) && $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$.push($newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$)
    }
    if(1 == $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$.length) {
      $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ = $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$[0]
    }else {
      for(var $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$ = $newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$ = 0;$artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$ < $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$.length;$artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$++) {
        $newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$ += $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$[$artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$].$getSize$()
      }
      $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$ = this.$CreateNode$({value:$newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$, $bArtificialRoot$:!0});
      $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$.$setChildNodes$($ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$);
      $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ = $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$
    }
  }
  this.$ApplyParsedProperties$({root:$ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$});
  !(0,window.isNaN)($container$$215_width$$186$$) && !(0,window.isNaN)($availSpace$$129_bBlackBoxUpdate$$3_height$$164$$) && (this.$Width$ = $container$$215_width$$186$$, this.$Height$ = $availSpace$$129_bBlackBoxUpdate$$3_height$$164$$);
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  $availSpace$$129_bBlackBoxUpdate$$3_height$$164$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$129_bBlackBoxUpdate$$3_height$$164$$);
  $container$$215_width$$186$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$($container$$215_width$$186$$);
  this.$_templates$ && (this.$_afContext$ = new D.$DvtAfContext$$(this.$getCtx$(), this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = !0);
  this.$Render$($container$$215_width$$186$$, $availSpace$$129_bBlackBoxUpdate$$3_height$$164$$);
  this.$Animation$ && (this.$AnimationStopped$ = !0, this.$Animation$.stop());
  $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ = this.$getOptions$().animationOnDataChange;
  $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$129_bBlackBoxUpdate$$3_height$$164$$ = !1;
  this.$_container$ ? $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ && $bNewOptions$$ && (D.$DvtBlackBoxAnimationHandler$$.isSupported($ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$) ? (this.$Animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$, this.$_container$, $container$$215_width$$186$$, $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$, 
  this.$AnimationDuration$), $availSpace$$129_bBlackBoxUpdate$$3_height$$164$$ = !0) : this.$_oldRoot$ && "auto" == $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ && (this.$_deleteContainer$ = this.$GetDeleteContainer$(), this.$addChild$(this.$_deleteContainer$), $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$ = new D.$DvtBaseTreeAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$ = 
  this.$_oldRoot$, $newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$ = this.$_root$, $hiddenCategories$$inline_9103_oldAncestors$$inline_9116_oldList$$inline_9118$$ = this.$_oldAncestors$, $newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$ = this.$_ancestors$, $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$.$_bDrill$ = !1, $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$.$_oldRoot$ = 
  $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$, $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$.$_oldAncestors$ = $hiddenCategories$$inline_9103_oldAncestors$$inline_9116_oldList$$inline_9118$$, (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$, $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$) || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($hiddenCategories$$inline_9103_oldAncestors$$inline_9116_oldList$$inline_9118$$, 
  $newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$) ? ($ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$.$_bDrill$ = !0, $hiddenCategories$$inline_9103_oldAncestors$$inline_9116_oldList$$inline_9118$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$), $newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$), 
  $hiddenCategories$$inline_9103_oldAncestors$$inline_9116_oldList$$inline_9118$$.push($artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$), $newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$.push($newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$, $hiddenCategories$$inline_9103_oldAncestors$$inline_9116_oldList$$inline_9118$$, 
  $newAncestors$$inline_9117_newList$$inline_9119_nodeOptions$$inline_9104_rootNode$$inline_9105$$)) : (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$, [$artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$], [$newRoot$$inline_9115_options$$inline_9101_size$$inline_9106$$]), this.$Animation$ = $ah$$5_animationOnDataChange$$3_options$$310_root$$32_rootNodes$$inline_9102$$.$getAnimation$(!0))) : 
  this.$Animation$ = this.$GetDisplayAnimation$($container$$215_width$$186$$, $artificialRoot$$inline_9108_bounds$$160_i$$inline_9107_oldRoot$$inline_9114$$);
  this.$_oldAncestors$ = this.$_oldRoot$ = null;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$129_bBlackBoxUpdate$$3_height$$164$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$215_width$$186$$;
  $bNewOptions$$ ? this.$_processInitialSelections$() : this.$ReselectNodes$();
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !this.$Animation$);
  this.$Animation$ || (0,D.$JSCompiler_StaticMethods__processInitialHighlighting$$)(this);
  this.$UpdateAriaAttributes$();
  this.$Animation$ || (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this)
};
D.$DvtBaseTreeView$$.prototype.render = D.$DvtBaseTreeView$$.prototype.$render$;
D.$DvtBaseTreeView$$.prototype.$Parse$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$DvtBaseTreeView$$.prototype.$Layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeView$$.prototype.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_RenderBackground$$ = function $$JSCompiler_StaticMethods_RenderBackground$$$($JSCompiler_StaticMethods_RenderBackground$self$$, $container$$217$$) {
  var $background$$16$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_RenderBackground$self$$.$getCtx$(), 0, 0, $JSCompiler_StaticMethods_RenderBackground$self$$.$Width$, $JSCompiler_StaticMethods_RenderBackground$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$16$$);
  $container$$217$$.$addChild$($background$$16$$)
};
D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$ = function $$JSCompiler_StaticMethods_LayoutBreadcrumbs$$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$131$$) {
  if(0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : null;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$());
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$131$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$);
    (0,D.$JSCompiler_StaticMethods_addComponentKeyboardHandlerAt$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$())
  }else {
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$()), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = null
  }
};
D.$JSCompiler_StaticMethods_RenderEmptyText$$ = function $$JSCompiler_StaticMethods_RenderEmptyText$$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$220$$) {
  var $options$$311$$ = $JSCompiler_StaticMethods_RenderEmptyText$self$$.$getOptions$(), $emptyText$$5$$ = $options$$311$$.emptyText;
  $emptyText$$5$$ || ($emptyText$$5$$ = (0,D.$DvtBundle$getTranslation$$)($options$$311$$, "labelNoData", "DvtUtilBundle", "NO_DATA"));
  D.$DvtTextUtils$$.$renderEmptyText$($container$$220$$, $emptyText$$5$$, new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$), $JSCompiler_StaticMethods_RenderEmptyText$self$$.$getEventManager$(), $options$$311$$._statusMessageStyle)
};
D.$JSCompiler_StaticMethods_HasValidData$$ = function $$JSCompiler_StaticMethods_HasValidData$$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$221$$, $bounds$$162$$) {
  var $animationOnDisplay$$4$$ = this.$getOptions$().animationOnDisplay;
  return D.$DvtBlackBoxAnimationHandler$$.isSupported($animationOnDisplay$$4$$) ? D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), $animationOnDisplay$$4$$, $container$$221$$, $bounds$$162$$, this.$AnimationDuration$) : null
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = null);
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = null);
  this.$_eventHandler$.$addListeners$(this);
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !0);
  (0,D.$JSCompiler_StaticMethods__processInitialHighlighting$$)(this);
  this.$AnimationStopped$ || (0,D.$JSCompiler_StaticMethods_RenderComplete$$)(this);
  this.$AnimationStopped$ = !1;
  this.$Animation$ = null
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  return new D.$DvtContainer$$(this.$getCtx$())
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$35$$) {
  return new D.$DvtBaseTreeKeyboardHandler$$($manager$$35$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$62$$, $context$$652$$, $callback$$179$$, $callbackObj$$124$$) {
  return new D.$DvtBaseTreeEventManager$$($view$$62$$, $context$$652$$, $callback$$179$$, $callbackObj$$124$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$33$$) {
  if($root$$33$$ && $root$$33$$.$_bArtificialRoot$) {
    var $nodes$$26$$ = $root$$33$$.$getChildNodes$();
    if($nodes$$26$$ && 0 < $nodes$$26$$.length) {
      return $nodes$$26$$[0]
    }
  }
  return $root$$33$$
};
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($categories$$33$$) {
  this.$getOptions$().highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$33$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$33$$, D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$), "any" == this.$getOptions$().highlightMatch)
};
D.$DvtBaseTreeView$$.prototype.highlight = D.$DvtBaseTreeView$$.prototype.$highlight$;
D.$DvtBaseTreeView$$.prototype.select = function $$DvtBaseTreeView$$$$select$($selection$$40_targets$$8$$) {
  var $options$$312$$ = this.$getOptions$();
  $options$$312$$.selection = D.$DvtJSONUtils$$.$clone$($selection$$40_targets$$8$$);
  this.$_selectionHandler$ && ($selection$$40_targets$$8$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$), (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, $options$$312$$.selection, $selection$$40_targets$$8$$))
};
D.$DvtBaseTreeView$$.prototype.select = D.$DvtBaseTreeView$$.prototype.select;
D.$DvtBaseTreeView$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$DvtBaseTreeView$$.prototype.$ApplyParsedProperties$ = function $$DvtBaseTreeView$$$$$ApplyParsedProperties$$($afComponent$$3_menus$$1_nodes$$27_props$$22$$) {
  var $options$$313_templates$$2$$ = this.$getOptions$();
  this.$_oldRoot$ = this.$_root$;
  this.$_oldAncestors$ = this.$_ancestors$;
  this.$_root$ = $afComponent$$3_menus$$1_nodes$$27_props$$22$$.root;
  this.$_ancestors$ = $options$$313_templates$$2$$._ancestors ? $options$$313_templates$$2$$._ancestors : [];
  this.$_nodeCount$ = this.$_root$ ? D.$DvtBaseTreeUtils$$.$calcNodeCount$(this.$_root$) : 0;
  this.$_maxDepth$ = this.$_root$ ? D.$DvtBaseTreeUtils$$.$calcMaxDepth$(this.$_root$, 0) : 0;
  this.$AnimationDuration$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$313_templates$$2$$.animationDuration) / 1E3;
  this.$_styles$ = $afComponent$$3_menus$$1_nodes$$27_props$$22$$.$styles$ ? $afComponent$$3_menus$$1_nodes$$27_props$$22$$.$styles$ : {};
  (this.$_nodeSelection$ = "none" == $options$$313_templates$$2$$.selectionMode ? null : "single" == $options$$313_templates$$2$$.selectionMode ? "s" : "m") ? (this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_nodeSelection$), this.$_initialSelection$ = $options$$313_templates$$2$$.selection) : this.$_selectionHandler$ = null;
  this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, this.$CreateKeyboardHandler$(this.$_eventHandler$));
  this.$_legendSource$ = null;
  this.$_attrGroups$ = [];
  if($options$$313_templates$$2$$.attributeGroups) {
    $afComponent$$3_menus$$1_nodes$$27_props$$22$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$);
    for(var $i$$913$$ = 0;$i$$913$$ < $options$$313_templates$$2$$.attributeGroups.length;$i$$913$$++) {
      var $attrGroup$$ = $options$$313_templates$$2$$.attributeGroups[$i$$913$$], $agObj$$ = null;
      if("continuous" == $attrGroup$$.attributeType) {
        D.$DvtBaseTreeUtils$$.$calcContinuousAttrGroupsExtents$($attrGroup$$, $afComponent$$3_menus$$1_nodes$$27_props$$22$$), $agObj$$ = new D.$DvtContinuousAttrGroups$$($attrGroup$$.min, $attrGroup$$.max, $attrGroup$$.minLabel, $attrGroup$$.maxLabel, $attrGroup$$.colors)
      }else {
        for(var $agObj$$ = new D.$DvtDiscreteAttrGroups$$, $groupIndex$$78$$ = 0;$groupIndex$$78$$ < $attrGroup$$.groups.length;$groupIndex$$78$$++) {
          var $group$$39$$ = $attrGroup$$.groups[$groupIndex$$78$$];
          $agObj$$.add($group$$39$$.id, $group$$39$$.label, {color:$group$$39$$.color, pattern:$group$$39$$.pattern})
        }
      }
      this.$_attrGroups$.push({$attrGroups$:$agObj$$, $stampId$:$attrGroup$$.S, id:$attrGroup$$.id});
      !$options$$313_templates$$2$$._adf && !$options$$313_templates$$2$$._legendSource && 0 == $i$$913$$ ? this.$_legendSource$ = $agObj$$ : $options$$313_templates$$2$$._legendSource && $options$$313_templates$$2$$._legendSource == $attrGroup$$.id && (this.$_legendSource$ = $agObj$$)
    }
    D.$DvtBaseTreeUtils$$.$processContinuousAttrGroups$(this.$_attrGroups$, $afComponent$$3_menus$$1_nodes$$27_props$$22$$)
  }
  if(($afComponent$$3_menus$$1_nodes$$27_props$$22$$ = $options$$313_templates$$2$$._contextMenus) && 0 < $afComponent$$3_menus$$1_nodes$$27_props$$22$$.length) {
    this.$_eventHandler$.$ContextMenuHandler$ = new D.$DvtContextMenuHandler$$(this.$getCtx$(), $afComponent$$3_menus$$1_nodes$$27_props$$22$$)
  }
  if($options$$313_templates$$2$$ = $options$$313_templates$$2$$._templates) {
    this.$_templates$ = {};
    for(var $templateKey$$ in $options$$313_templates$$2$$) {
      $afComponent$$3_menus$$1_nodes$$27_props$$22$$ = D.$DvtAfComponentFactory$$.$parseJsonElement$($options$$313_templates$$2$$[$templateKey$$]), this.$_templates$[$templateKey$$] = $afComponent$$3_menus$$1_nodes$$27_props$$22$$
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$ReselectNodes$ = function $$DvtBaseTreeView$$$$$ReselectNodes$$() {
  for(var $selectedNodes$$1$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$914$$ = 0;$i$$914$$ < $selectedNodes$$1$$.length;$i$$914$$++) {
    $selectedNodes$$1$$[$i$$914$$].$setSelected$(!0)
  }
};
D.$DvtBaseTreeView$$.prototype.$_processInitialSelections$ = function $$DvtBaseTreeView$$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$9$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$);
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initialSelection$, $targets$$9$$);
    this.$_initialSelection$ = null
  }
};
D.$JSCompiler_StaticMethods__processInitialHighlighting$$ = function $$JSCompiler_StaticMethods__processInitialHighlighting$$$($JSCompiler_StaticMethods__processInitialHighlighting$self$$) {
  var $highlightedCategories$$1$$ = $JSCompiler_StaticMethods__processInitialHighlighting$self$$.$getOptions$().highlightedCategories;
  $highlightedCategories$$1$$ && 0 < $highlightedCategories$$1$$.length && $JSCompiler_StaticMethods__processInitialHighlighting$self$$.$highlight$($highlightedCategories$$1$$)
};
D.$JSCompiler_StaticMethods__processInitialFocus$$ = function $$JSCompiler_StaticMethods__processInitialFocus$$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = null, $id$$320$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$320$$ && ($initialFocus$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$320$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = null);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setFocused$ = function $$JSCompiler_prototypeAlias$$$$setFocused$$($isFocused$$6$$) {
  this.$_hasFocus$ = $isFocused$$6$$;
  this.$_eventHandler$.$setFocused$($isFocused$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$isFocused$ = (0,D.$JSCompiler_get$$)("$_hasFocus$");
D.$JSCompiler_prototypeAlias$$.$__getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$__getNodeUnderPoint$$($x$$305$$, $y$$273$$) {
  return this.$_root$.$getNodeUnderPoint$($x$$305$$, $y$$273$$)
};
D.$JSCompiler_prototypeAlias$$.$__isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$__isDragAvailable$$($clientIds$$27$$) {
  return this.$_selectionHandler$ ? $clientIds$$27$$[0] : null
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($node$$333_rowKeys$$4$$) {
  $node$$333_rowKeys$$4$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$333_rowKeys$$4$$, !1), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$333_rowKeys$$4$$ = [];
  for(var $selection$$41$$ = this.$_selectionHandler$.getSelection(), $i$$915$$ = 0;$i$$915$$ < $selection$$41$$.length;$i$$915$$++) {
    $node$$333_rowKeys$$4$$.push($selection$$41$$[$i$$915$$].getId())
  }
  return $node$$333_rowKeys$$4$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$30$$ = [], $selection$$42$$ = this.$_selectionHandler$.getSelection(), $i$$916$$ = 0;$i$$916$$ < $selection$$42$$.length;$i$$916$$++) {
    $displayables$$30$$.push($selection$$42$$[$i$$916$$].$getDisplayable$())
  }
  return $displayables$$30$$
};
D.$JSCompiler_prototypeAlias$$.$__showDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$__showDropSiteFeedback$$($node$$334_styleDefaults$$4$$) {
  this.$_dropSiteFeedback$ && (this.removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = null);
  if($node$$334_styleDefaults$$4$$ && (this.$_dropSiteFeedback$ = $node$$334_styleDefaults$$4$$.$getDropSiteFeedback$())) {
    $node$$334_styleDefaults$$4$$ = this.$getOptions$().styleDefaults, this.$_dropSiteFeedback$.$setSolidFill$($node$$334_styleDefaults$$4$$._dropSiteFillColor, $node$$334_styleDefaults$$4$$._dropSiteOpacity), this.$_dropSiteFeedback$.$setSolidStroke$($node$$334_styleDefaults$$4$$._dropSiteBorderColor), this.$addChild$(this.$_dropSiteFeedback$)
  }
  return this.$_dropSiteFeedback$
};
D.$JSCompiler_prototypeAlias$$.$__processBreadcrumbsEvent$ = function $$JSCompiler_prototypeAlias$$$$__processBreadcrumbsEvent$$($event$$826$$) {
  $event$$826$$ instanceof D.$DvtBreadcrumbsDrillEvent$$ && (0,D.$JSCompiler_StaticMethods___drill$$)(this, $event$$826$$.getId(), !1)
};
D.$JSCompiler_StaticMethods___drill$$ = function $$JSCompiler_StaticMethods___drill$$$($JSCompiler_StaticMethods___drill$self$$, $id$$321$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$321$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$321$$, $JSCompiler_StaticMethods___drill$self$$.dispatchEvent(new D.$DvtDrillReplaceEvent$$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || $JSCompiler_StaticMethods___drill$self$$.dispatchEvent(new D.$DvtDrillReplaceEvent$$($id$$321$$));
  $JSCompiler_StaticMethods___drill$self$$.$getCtx$().$getTooltipManager$().$hideTooltip$()
};
D.$DvtBaseTreeView$$.prototype.$getLogicalObject$ = function $$DvtBaseTreeView$$$$$getLogicalObject$$($target$$127$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $target$$127$$)
};
D.$DvtBaseTreeView$$.prototype.$CreateNode$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$DvtBaseTreeView$$.prototype.$getBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$DvtBaseTreeView$$.prototype.$getAutomation$ = function $$DvtBaseTreeView$$$$$getAutomation$$() {
  return new D.$DvtTreeAutomation$$(this)
};
D.$DvtBaseTreeView$$.prototype.getAutomation = D.$DvtBaseTreeView$$.prototype.$getAutomation$;
D.$DvtBaseTreeView$$.prototype.$getBreadcrumbs$ = (0,D.$JSCompiler_get$$)("$_breadcrumbs$");
D.$JSCompiler_StaticMethods__processNode$$ = function $$JSCompiler_StaticMethods__processNode$$$($JSCompiler_StaticMethods__processNode$self$$, $hiddenCategories$$14$$, $childOptions_nodeOptions$$5$$) {
  if(D.$DvtBaseTreeUtils$$.$isHiddenNode$($hiddenCategories$$14$$, $childOptions_nodeOptions$$5$$)) {
    return null
  }
  var $node$$335$$ = $JSCompiler_StaticMethods__processNode$self$$.$CreateNode$($childOptions_nodeOptions$$5$$);
  if($node$$335$$.$isDisclosed$()) {
    var $childNodes$$25$$ = [];
    $childOptions_nodeOptions$$5$$ = $childOptions_nodeOptions$$5$$.nodes ? $childOptions_nodeOptions$$5$$.nodes : [];
    for(var $childIndex$$12$$ = 0;$childIndex$$12$$ < $childOptions_nodeOptions$$5$$.length;$childIndex$$12$$++) {
      var $childNode$$13_childNodeOptions$$ = $childOptions_nodeOptions$$5$$[$childIndex$$12$$];
      $childNode$$13_childNodeOptions$$._index = $childIndex$$12$$;
      ($childNode$$13_childNodeOptions$$ = (0,D.$JSCompiler_StaticMethods__processNode$$)($JSCompiler_StaticMethods__processNode$self$$, $hiddenCategories$$14$$, $childNode$$13_childNodeOptions$$)) && $childNodes$$25$$.push($childNode$$13_childNodeOptions$$)
    }
    $node$$335$$.$setChildNodes$($childNodes$$25$$)
  }
  return $node$$335$$
};
D.$JSCompiler_StaticMethods_UpdateAriaNavigation$$ = function $$JSCompiler_StaticMethods_UpdateAriaNavigation$$$($JSCompiler_StaticMethods_UpdateAriaNavigation$self$$, $root$$34$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$DvtAgent$isEnvironmentTest$$)()) {
    for(var $nodes$$28$$ = D.$DvtBaseTreeUtils$$.$getAllVisibleNodes$($root$$34$$), $i$$918$$ = 0;$i$$918$$ < $nodes$$28$$.length - 1;$i$$918$$++) {
      var $id$$323$$ = $JSCompiler_StaticMethods_UpdateAriaNavigation$self$$.getId() + ($nodes$$28$$[$i$$918$$ + 1].getId() ? $nodes$$28$$[$i$$918$$ + 1].getId() : $nodes$$28$$[$i$$918$$ + 1].$getLabel$()), $id$$323$$ = $id$$323$$.replace(/\s+/g, "");
      $nodes$$28$$[$i$$918$$ + 1].$getDisplayable$().setId($id$$323$$, !0);
      $nodes$$28$$[$i$$918$$].$getDisplayable$().$setAriaProperty$("flowto", $id$$323$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($mouseX$$65$$, $mouseY$$65$$, $clientIds$$28$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$28$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$66$$, $mouseY$$66$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$66$$, $mouseY$$66$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$67$$, $mouseY$$67$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$67$$, $mouseY$$67$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$68$$, $mouseY$$68$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$68$$, $mouseY$$68$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$69$$, $mouseY$$69$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$69$$, $mouseY$$69$$)
};
D.$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$8$$, $yOffset$$11$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$8$$, $yOffset$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
D.$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
D.$DvtBaseTreeView$$.prototype.$acceptDrag$ = function $$DvtBaseTreeView$$$$$acceptDrag$$($mouseX$$70$$, $mouseY$$70$$, $clientIds$$29$$) {
  return this.$_dropTarget$.$acceptDrag$($mouseX$$70$$, $mouseY$$70$$, $clientIds$$29$$)
};
D.$DvtBaseTreeView$$.prototype.$getDropSite$ = function $$DvtBaseTreeView$$$$$getDropSite$$($mouseX$$71$$, $mouseY$$71$$) {
  return this.$_dropTarget$.$getDropSite$($mouseX$$71$$, $mouseY$$71$$)
};
D.$DvtBaseTreeAnimationHandler$$ = function $$DvtBaseTreeAnimationHandler$$$($context$$649$$, $deleteContainer$$13$$) {
  this.Init($context$$649$$, $deleteContainer$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtBaseTreeAnimationHandler");
D.$DvtBaseTreeAnimationHandler$_isAncestor$$ = function $$DvtBaseTreeAnimationHandler$_isAncestor$$$($ancestors$$7$$, $node$$318$$) {
  if(!$node$$318$$ || !$ancestors$$7$$) {
    return!1
  }
  for(var $i$$900$$ = 0;$i$$900$$ < $ancestors$$7$$.length;$i$$900$$++) {
    if($ancestors$$7$$[$i$$900$$].id == $node$$318$$.getId()) {
      return!0
    }
  }
  return!1
};
D.$DvtBaseTreeDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDropTarget$$, D.$DvtDropTarget$$, "DvtBaseTreeDropTarget");
D.$DvtBaseTreeDropTarget$$.prototype.$acceptDrag$ = function $$DvtBaseTreeDropTarget$$$$$acceptDrag$$($mouseX$$61_node$$319$$, $mouseY$$61$$, $clientIds$$25$$) {
  if($mouseX$$61_node$$319$$ = this.$_view$.$__getNodeUnderPoint$($mouseX$$61_node$$319$$, $mouseY$$61$$)) {
    $mouseX$$61_node$$319$$ != this.$_dropSite$ && (this.$_view$.$__showDropSiteFeedback$($mouseX$$61_node$$319$$), this.$_dropSite$ = $mouseX$$61_node$$319$$)
  }else {
    return this.$_view$.$__showDropSiteFeedback$(null), null
  }
  return $clientIds$$25$$[0]
};
D.$DvtBaseTreeDropTarget$$.prototype.$getDropSite$ = function $$DvtBaseTreeDropTarget$$$$$getDropSite$$($mouseX$$62$$, $mouseY$$62$$) {
  var $node$$320$$ = this.$_view$.$__getNodeUnderPoint$($mouseX$$62$$, $mouseY$$62$$);
  return $node$$320$$ ? {$clientRowKey$:$node$$320$$.getId()} : null
};
D.$DvtBaseTreeEventManager$$ = function $$DvtBaseTreeEventManager$$$($view$$61$$, $context$$650$$, $callback$$177$$, $callbackObj$$122$$) {
  this.Init($context$$650$$, $callback$$177$$, $callbackObj$$122$$);
  this.$_view$ = $view$$61$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeEventManager$$, D.$DvtEventManager$$, "DvtBaseTreeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$815$$) {
  var $obj$$373$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$815$$.target);
  $obj$$373$$ && $obj$$373$$.$isSelectable$ && $obj$$373$$.$isSelectable$() && (0,D.$JSCompiler_StaticMethods__processDrill$$)(this, $obj$$373$$, $event$$815$$.shiftKey)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$816$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$816$$);
  var $obj$$374$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$816$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $obj$$374$$);
  $obj$$374$$ && (!$obj$$374$$.$isSelectable$ || !$obj$$374$$.$isSelectable$()) && (0,D.$JSCompiler_StaticMethods__processDrill$$)(this, $obj$$374$$, $event$$816$$.shiftKey)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$817_obj$$375$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$817_obj$$375$$);
  ($event$$817_obj$$375$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$817_obj$$375$$.target)) && $event$$817_obj$$375$$.$handleMouseOver$ && $event$$817_obj$$375$$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$818_relatedId_relatedObj$$1$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$818_relatedId_relatedObj$$1$$);
  var $obj$$376$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$818_relatedId_relatedObj$$1$$.target);
  $obj$$376$$ && $obj$$376$$.$handleMouseOut$ && ($event$$818_relatedId_relatedObj$$1$$ = ($event$$818_relatedId_relatedObj$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$818_relatedId_relatedObj$$1$$.relatedTarget)) && $event$$818_relatedId_relatedObj$$1$$.getId ? $event$$818_relatedId_relatedObj$$1$$.getId() : null, (null == $obj$$376$$.getId() || $event$$818_relatedId_relatedObj$$1$$ != $obj$$376$$.getId()) && $obj$$376$$.$handleMouseOut$())
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$819$$) {
  var $eventConsumed$$8_obj$$377$$ = !1, $eventConsumed$$8_obj$$377$$ = this.$getFocus$();
  13 == $event$$819$$.keyCode && !$event$$819$$.ctrlKey ? ($eventConsumed$$8_obj$$377$$ = this.$getFocus$(), $eventConsumed$$8_obj$$377$$.$isDrillReplaceEnabled$ && $eventConsumed$$8_obj$$377$$.$isDrillReplaceEnabled$() && ($event$$819$$.shiftKey && ($eventConsumed$$8_obj$$377$$ = this.$_view$.$_root$), (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $eventConsumed$$8_obj$$377$$.getId(), $event$$819$$.shiftKey)), (0,D.$DvtEventManager$consumeEvent$$)($event$$819$$), $eventConsumed$$8_obj$$377$$ = 
  !0) : $eventConsumed$$8_obj$$377$$ = D.$DvtBaseTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$819$$);
  return $eventConsumed$$8_obj$$377$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$820$$) {
  var $obj$$378$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$820$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $obj$$378$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $obj$$378$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = null);
  $obj$$378$$ && ($obj$$378$$ instanceof D.$DvtBaseTreeNode$$ && this.$_currentHoverItem$ != $obj$$378$$ && (this.$_currentHoverItem$ = $obj$$378$$, $obj$$378$$.$handleMouseOver$()), (!$obj$$378$$.$isSelectable$ || !$obj$$378$$.$isSelectable$()) && (0,D.$JSCompiler_StaticMethods__processDrill$$)(this, $obj$$378$$, $event$$820$$.shiftKey))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$821_obj$$379$$) {
  ($event$$821_obj$$379$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$821_obj$$379$$.target)) && $event$$821_obj$$379$$.$isSelectable$ && $event$$821_obj$$379$$.$isSelectable$() && (0,D.$JSCompiler_StaticMethods__processDrill$$)(this, $event$$821_obj$$379$$, !1)
};
D.$JSCompiler_StaticMethods__processNodeLabel$$ = function $$JSCompiler_StaticMethods__processNodeLabel$$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$380$$) {
  $obj$$380$$ && ($obj$$380$$ instanceof D.$DvtBaseTreePeer$$ && $obj$$380$$.$isDrillable$()) && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$380$$.getId(), !1)
};
D.$JSCompiler_StaticMethods__processDrill$$ = function $$JSCompiler_StaticMethods__processDrill$$$($JSCompiler_StaticMethods__processDrill$self$$, $obj$$381$$, $shiftKey$$5$$) {
  $obj$$381$$.$isDrillReplaceEnabled$ && $obj$$381$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processDrill$self$$.$_view$, $obj$$381$$.getId(), $shiftKey$$5$$)
};
D.$DvtBaseTreeEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtBaseTreeEventManager$$$$$ProcessRolloverEvent$$($event$$822_options$$308$$, $categories$$31_nodes$$23_obj$$382$$, $bOver$$14_rolloverEvent$$9$$) {
  $event$$822_options$$308$$ = this.$_view$.$getOptions$();
  if("dim" == $event$$822_options$$308$$.hoverBehavior) {
    $categories$$31_nodes$$23_obj$$382$$ = $categories$$31_nodes$$23_obj$$382$$.$getCategories$ ? $categories$$31_nodes$$23_obj$$382$$.$getCategories$() : [];
    $event$$822_options$$308$$.highlightedCategories = $bOver$$14_rolloverEvent$$9$$ ? $categories$$31_nodes$$23_obj$$382$$.slice() : null;
    $bOver$$14_rolloverEvent$$9$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$14_rolloverEvent$$9$$ ? "categoryRollOver" : "categoryRollOut", $event$$822_options$$308$$.highlightedCategories);
    $categories$$31_nodes$$23_obj$$382$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_view$.$_root$);
    var $hoverBehaviorDelay$$7$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$822_options$$308$$.hoverBehaviorDelay);
    this.$RolloverHandler$.$processEvent$($bOver$$14_rolloverEvent$$9$$, $categories$$31_nodes$$23_obj$$382$$, $hoverBehaviorDelay$$7$$, "any" == $event$$822_options$$308$$.highlightMatch)
  }
};
D.$DvtBaseTreeEventManager$$.prototype.$GetTouchResponse$ = function $$DvtBaseTreeEventManager$$$$$GetTouchResponse$$() {
  return this.$_view$.$getOptions$().touchResponse
};
D.$DvtBaseTreeNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeNode$$, D.$DvtObj$$, "DvtBaseTreeNode");
D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$ = new D.$DvtShadow$$("#000000", 2, 5, 5, 45, 0.5);
D.$DvtBaseTreeNode$$.prototype.Init = function $$DvtBaseTreeNode$$$$Init$($treeView$$, $props$$21$$) {
  this.$_view$ = $treeView$$;
  this.$_options$ = $props$$21$$;
  var $nodeDefaults$$2$$ = this.$_view$.$getOptions$().nodeDefaults;
  this.$_id$ = $props$$21$$.id || $props$$21$$.label;
  this.$_color$ = $props$$21$$.color ? $props$$21$$.color : "#000000";
  this.$_textStr$ = $props$$21$$.label;
  this.$_labelStyle$ = "string" == typeof $props$$21$$.labelStyle ? new D.$DvtCSSStyle$$($props$$21$$.labelStyle) : $props$$21$$.labelStyle;
  this.$_pattern$ = $props$$21$$.pattern;
  this.$_selectable$ = $props$$21$$.selectable;
  this.$_shortDesc$ = $props$$21$$.shortDesc ? $props$$21$$.shortDesc : $props$$21$$.tooltip;
  this.$_size$ = $props$$21$$.value;
  this.$_drilling$ = $props$$21$$.drilling ? $props$$21$$.drilling : $nodeDefaults$$2$$.drilling;
  this.$_stampId$ = $props$$21$$.S;
  this.$_bArtificialRoot$ = $props$$21$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = null;
  this.$IsHover$ = this.$_isShowingKeyboardFocusEffect$ = !1
};
D.$DvtBaseTreeNode$$.prototype.$setChildNodes$ = function $$DvtBaseTreeNode$$$$$setChildNodes$$($children$$17$$) {
  if(null != $children$$17$$) {
    for(var $i$$901$$ = 0;$i$$901$$ < $children$$17$$.length;$i$$901$$++) {
      $children$$17$$[$i$$901$$].$_parent$ = this
    }
  }
  this.$_children$ = $children$$17$$
};
D.$DvtBaseTreeNode$$.prototype.$getChildNodes$ = function $$DvtBaseTreeNode$$$$$getChildNodes$$() {
  return this.$_children$ ? this.$_children$ : []
};
D.$JSCompiler_StaticMethods_getDescendantNodes$$ = function $$JSCompiler_StaticMethods_getDescendantNodes$$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$3$$ = [], $childDescendants$$, $child$$78$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$3$$
  }
  for(var $i$$902$$ = 0;$i$$902$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$902$$++) {
    $child$$78$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$902$$], $childDescendants$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($child$$78$$), $descendants$$3$$.push($child$$78$$), $descendants$$3$$ = $descendants$$3$$.concat($childDescendants$$)
  }
  return $descendants$$3$$
};
D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$ = function $$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$91$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$91$$ && ($parent$$91$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
};
D.$DvtBaseTreeNode$$.prototype.$isDescendantOf$ = function $$DvtBaseTreeNode$$$$$isDescendantOf$$($node$$321$$) {
  return!$node$$321$$ || !this.$_parent$ ? !1 : this.$_parent$ == $node$$321$$ ? !0 : this.$_parent$.$isDescendantOf$($node$$321$$)
};
D.$JSCompiler_StaticMethods_GetNodesAtDepth$$ = function $$JSCompiler_StaticMethods_GetNodesAtDepth$$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$, $child$$79_root$$30$$, $depth$$24$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$24$$) {
    return $returnArray$$
  }
  if(0 == $depth$$24$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$]
  }
  if($child$$79_root$$30$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$ = $child$$79_root$$30$$.$getChildNodes$();
    for(var $i$$903$$ = 0;$i$$903$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$.length;$i$$903$$++) {
      $child$$79_root$$30$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$[$i$$903$$], $returnArray$$ = $returnArray$$.concat((0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)($child$$79_root$$30$$, $child$$79_root$$30$$, $depth$$24$$ - 1))
    }
  }
  return $returnArray$$
};
D.$DvtBaseTreeNode$getNodeById$$ = function $$DvtBaseTreeNode$getNodeById$$$($root$$31$$, $id$$318$$) {
  if($root$$31$$.getId() == $id$$318$$) {
    return $root$$31$$
  }
  for(var $child$$80_node$$322$$ = null, $children$$19$$ = $root$$31$$.$getChildNodes$(), $length$$28$$ = $children$$19$$.length, $child$$80_node$$322$$ = null, $i$$904$$ = 0;$i$$904$$ < $length$$28$$;$i$$904$$++) {
    if($child$$80_node$$322$$ = $children$$19$$[$i$$904$$], $child$$80_node$$322$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($child$$80_node$$322$$, $id$$318$$)) {
      return $child$$80_node$$322$$
    }
  }
  return null
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  if(this.$_bArtificialRoot$) {
    return[]
  }
  var $categories$$32_parent$$92_parentCategories$$1$$ = this.$getOptions$().categories;
  $categories$$32_parent$$92_parentCategories$$1$$ || ($categories$$32_parent$$92_parentCategories$$1$$ = ($categories$$32_parent$$92_parentCategories$$1$$ = ($categories$$32_parent$$92_parentCategories$$1$$ = this.$_parent$) ? $categories$$32_parent$$92_parentCategories$$1$$.$getCategories$() : null) ? $categories$$32_parent$$92_parentCategories$$1$$.slice() : [], $categories$$32_parent$$92_parentCategories$$1$$.push(this.getId()));
  return $categories$$32_parent$$92_parentCategories$$1$$
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$11$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$11$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$11$$, this.$getDataContext$()) : this.$_shortDesc$
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = (0,D.$JSCompiler_get$$)("$_shortDesc$");
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), value:this.$getSize$(), color:this.$getColor$()}
};
D.$JSCompiler_prototypeAlias$$.$getIndex$ = function $$JSCompiler_prototypeAlias$$$$getIndex$$() {
  return this.$getOptions$()._index
};
D.$JSCompiler_prototypeAlias$$.$getAlpha$ = (0,D.$JSCompiler_get$$)("$_alpha$");
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$52$$) {
  this.$_alpha$ = $alpha$$52$$;
  this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
};
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = function $$JSCompiler_prototypeAlias$$$$setDisclosed$$($disclosed$$6$$) {
  this.$getOptions$()._expanded = $disclosed$$6$$
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = function $$JSCompiler_prototypeAlias$$$$isDisclosed$$() {
  return!1 !== this.$getOptions$()._expanded
};
D.$JSCompiler_prototypeAlias$$.$isDrillReplaceEnabled$ = function $$JSCompiler_prototypeAlias$$$$isDrillReplaceEnabled$$() {
  return"replace" == this.$_drilling$ || "insertAndReplace" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  var $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$ = this.$_view$.$getOptions$()._spb;
  if(!$JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$ || !$JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$[this.$_stampId$]) {
    $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$ = null
  }else {
    for(var $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$ = $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$[this.$_stampId$], $ret$$inline_9093$$ = [], $i$$inline_9094$$ = 0;$i$$inline_9094$$ < $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$.length;$i$$inline_9094$$++) {
      $ret$$inline_9093$$.push(new D.$DvtShowPopupBehavior$$($JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$[$i$$inline_9094$$].popupId, $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$[$i$$inline_9094$$].triggerType, $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$[$i$$inline_9094$$].alignId, $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$[$i$$inline_9094$$].align))
    }
    $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$ = $ret$$inline_9093$$
  }
  return $JSCompiler_temp$$450_behaviors$$10_optionsArray$$inline_9092$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$213$$) {
  var $children$$20$$ = this.$getChildNodes$();
  if(null != $children$$20$$) {
    for(var $i$$905$$ = 0;$i$$905$$ < $children$$20$$.length;$i$$905$$++) {
      $children$$20$$[$i$$905$$].$render$($container$$213$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)(this);
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$showHoverEffect$();
  this.$handleMouseOver$ && this.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = !1, this.$hideHoverEffect$());
  this.$handleMouseOut$ && this.$handleMouseOut$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$IsHover$ = !0
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$IsHover$ = !1
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"off" != this.$_selectable$ && null != this.$_view$.$_nodeSelection$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$47$$) {
  this.$_selected$ = $selected$$47$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($bDimmed$$3$$, $alpha$$53$$) {
  this.$setAlpha$($alpha$$53$$)
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$26$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$26$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_view$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.contains = (0,D.$JSCompiler_returnArg$$)(!1);
D.$JSCompiler_prototypeAlias$$.$getNodeUnderPoint$ = (0,D.$JSCompiler_returnArg$$)(null);
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$66$$, $oldNode$$19$$) {
  $handler$$66$$.$_bDrill$ || (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$66$$, $oldNode$$19$$.$getChildNodes$(), this.$getChildNodes$());
  var $bSizeChanged_endState$$18$$ = this.$GetAnimationParams$(), $animationUpdateColor_startState$$8$$ = $oldNode$$19$$.$GetAnimationParams$($bSizeChanged_endState$$18$$), $bColorChanged_nodePlayable$$29$$;
  if(!D.$DvtArrayUtils$$.$equals$($animationUpdateColor_startState$$8$$, $bSizeChanged_endState$$18$$) && ($bColorChanged_nodePlayable$$29$$ = new D.$DvtCustomAnimation$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($bColorChanged_nodePlayable$$29$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$18$$), $handler$$66$$.add($bColorChanged_nodePlayable$$29$$, 1), $bSizeChanged_endState$$18$$ = 
  this.$_size$ != $oldNode$$19$$.$_size$, $bColorChanged_nodePlayable$$29$$ = D.$DvtColorUtils$$.$getRGBA$(this.$_color$) != D.$DvtColorUtils$$.$getRGBA$($oldNode$$19$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$8$$), ($animationUpdateColor_startState$$8$$ = this.$_view$.$getOptions$().animationUpdateColor) && ($bSizeChanged_endState$$18$$ || $bColorChanged_nodePlayable$$29$$))) {
    this.$_color$ = $animationUpdateColor_startState$$8$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$67$$) {
  if(!$handler$$67$$.$_bDrill$ || !$handler$$67$$.$_bDrill$ || !($handler$$67$$.$_oldRoot$.getId() == this.getId() || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($handler$$67$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$44_i$$906$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
    $handler$$67$$.add($anim$$44_i$$906$$, 2);
    if(this.$hasChildren$()) {
      for($anim$$44_i$$906$$ = 0;$anim$$44_i$$906$$ < this.$_children$.length;$anim$$44_i$$906$$++) {
        this.$_children$[$anim$$44_i$$906$$].$animateInsert$($handler$$67$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$68$$, $container$$214$$) {
  $container$$214$$.$addChild$(this.$_shape$);
  var $anim$$45_i$$907$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
  $handler$$68$$.add($anim$$45_i$$907$$, 0);
  if(!$handler$$68$$.$_bDrill$ && this.$hasChildren$()) {
    for($anim$$45_i$$907$$ = 0;$anim$$45_i$$907$$ < this.$_children$.length;$anim$$45_i$$907$$++) {
      this.$_children$[$anim$$45_i$$907$$].$animateDelete$($handler$$68$$, $container$$214$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return null != this.$_children$ && 0 < this.$_children$.length
};
D.$JSCompiler_StaticMethods_GetDepth$$ = function $$JSCompiler_StaticMethods_GetDepth$$$($JSCompiler_StaticMethods_GetDepth$self_parent$$93$$) {
  var $depth$$25$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$93$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$93$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$93$$;) {
    $depth$$25$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$93$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$93$$.$_parent$
  }
  return $depth$$25$$
};
D.$DvtBaseTreeNode$$.prototype.$GetFill$ = function $$DvtBaseTreeNode$$$$$GetFill$$() {
  return this.$_pattern$ ? new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$) : new D.$DvtSolidFill$$(this.$_color$)
};
D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyLabelTextStyle$$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$115$$) {
  var $defaultFillColor$$ = $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_pattern$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_color$);
  $text$$115$$.$setSolidFill$($defaultFillColor$$);
  var $textStyle$$8$$ = [];
  $textStyle$$8$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$getOptions$().nodeDefaults.labelStyle);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $textStyle$$8$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$115$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($textStyle$$8$$));
  !0 === D.$DvtAgent$_highContrast$$ && $text$$115$$.$setSolidFill$($defaultFillColor$$)
};
D.$JSCompiler_StaticMethods_GetTextSize$$ = function $$JSCompiler_StaticMethods_GetTextSize$$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$14$$) {
  var $size$$53$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$14$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$14$$.$_view$.$getOptions$().nodeDefaults.labelStyle.$getFontSize$()) && ($size$$53$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$14$$));
  return $size$$53$$
};
D.$DvtBaseTreeNode$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$DvtBaseTreeNode$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_textStr$");
D.$JSCompiler_StaticMethods_GetTemplate$$ = function $$JSCompiler_StaticMethods_GetTemplate$$$($JSCompiler_StaticMethods_GetTemplate$self$$) {
  return $JSCompiler_StaticMethods_GetTemplate$self$$.$_view$.$_templates$ ? $JSCompiler_StaticMethods_GetTemplate$self$$.$_view$.$_templates$[$JSCompiler_StaticMethods_GetTemplate$self$$.$_stampId$] : null
};
D.$DvtBaseTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtBaseTreeNode$$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
D.$DvtBaseTreeNode$$.prototype.$UpdateAriaLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreePeer$$ = function $$DvtBaseTreePeer$$$($node$$324$$, $id$$319$$, $tooltip$$49$$, $datatip$$20$$, $datatipColor$$3$$) {
  this.Init($tooltip$$49$$, $datatip$$20$$, $datatipColor$$3$$);
  this.$_node$ = $node$$324$$;
  this.$_id$ = $id$$319$$;
  this.$_bDrillable$ = !1
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreePeer$$, D.$DvtSimpleObjPeer$$, "DvtBaseTreePeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreePeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$JSCompiler_prototypeAlias$$.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$_node$ && this.$_node$.$handleMouseOver$ && this.$_node$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
};
D.$DvtTreeBreadcrumbsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtTreeBreadcrumbsRenderer");
D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
D.$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$2$$, $availSpace$$133$$, $ancestors$$8_dataItems$$3$$, $dims$$71_height$$165_rootLabel$$1$$) {
  var $breadcrumbs$$5_context$$653$$ = $treeView$$2$$.$getCtx$(), $disabledStyle_styleDefaults$$5$$ = $treeView$$2$$.$getOptions$().styleDefaults, $enabledStyle$$1_enabledStyleArray$$ = [];
  $enabledStyle$$1_enabledStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle$$1_enabledStyleArray$$.push($disabledStyle_styleDefaults$$5$$._drillTextStyle);
  var $enabledStyle$$1_enabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($enabledStyle$$1_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle$$1_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyleArray$$ = [];
  $disabledStyleArray$$.push($disabledStyle_styleDefaults$$5$$._currentTextStyle);
  $disabledStyle_styleDefaults$$5$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($disabledStyleArray$$).toString();
  $breadcrumbs$$5_context$$653$$ = new D.$DvtBreadcrumbs$$($breadcrumbs$$5_context$$653$$, $treeView$$2$$.$__processBreadcrumbsEvent$, $treeView$$2$$, {$labelStyle$:$enabledStyle$$1_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_styleDefaults$$5$$});
  $treeView$$2$$.$addChild$($breadcrumbs$$5_context$$653$$);
  $ancestors$$8_dataItems$$3$$ = $ancestors$$8_dataItems$$3$$.slice(0).reverse();
  $ancestors$$8_dataItems$$3$$.push({label:$dims$$71_height$$165_rootLabel$$1$$});
  $breadcrumbs$$5_context$$653$$.$render$({items:$ancestors$$8_dataItems$$3$$}, $availSpace$$133$$.$w$);
  $dims$$71_height$$165_rootLabel$$1$$ = $breadcrumbs$$5_context$$653$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($breadcrumbs$$5_context$$653$$, $availSpace$$133$$.x, $availSpace$$133$$.y);
  $dims$$71_height$$165_rootLabel$$1$$ = $dims$$71_height$$165_rootLabel$$1$$.$h$ + D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$133$$.y += $dims$$71_height$$165_rootLabel$$1$$;
  $availSpace$$133$$.$h$ -= $dims$$71_height$$165_rootLabel$$1$$;
  $treeView$$2$$.removeChild($breadcrumbs$$5_context$$653$$);
  return $breadcrumbs$$5_context$$653$$
};
D.$DvtTreeLegendRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeLegendRenderer$$, D.$DvtObj$$, "DvtTreeLegendRenderer");
D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
D.$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
D.$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$3$$, $availSpace$$134$$, $attrGroups$$7_legendDims$$) {
  var $colorContainer$$2_options$$316$$ = $treeView$$3$$.$getOptions$(), $colorSpace_sizeValueStr$$ = $colorContainer$$2_options$$316$$.sizeLabel, $colorValueStr$$ = $colorContainer$$2_options$$316$$.colorLabel;
  if(!(null == $colorSpace_sizeValueStr$$ && null == $colorValueStr$$ && null == $attrGroups$$7_legendDims$$)) {
    var $context$$654$$ = $treeView$$3$$.$getCtx$(), $eventManager$$34_labelSpace$$2$$ = $treeView$$3$$.$getEventManager$(), $legend$$32$$ = new D.$DvtContainer$$($context$$654$$);
    $treeView$$3$$.$addChild$($legend$$32$$);
    var $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$654$$, $treeView$$3$$, $legend$$32$$, $availSpace$$134$$.$w$, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$), $borderColor$$64_legendStyles$$ = (0,D.$DvtCSSStyle$afterSkinAlta$$)($treeView$$3$$.$getOptions$().skin) ? null : "#000000", $labelDims$$13_legendStyleArray$$ = [];
    $labelDims$$13_legendStyleArray$$.push($colorContainer$$2_options$$316$$.styleDefaults._labelStyle);
    var $borderColor$$64_legendStyles$$ = {borderColor:$borderColor$$64_legendStyles$$, $labelStyle$:(0,D.$DvtCSSStyle$mergeStyles$$)($labelDims$$13_legendStyleArray$$)}, $colorContainer$$2_options$$316$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$654$$, $eventManager$$34_labelSpace$$2$$, $legend$$32$$, $availSpace$$134$$.$w$, $availSpace$$134$$.$h$, $attrGroups$$7_legendDims$$, $borderColor$$64_legendStyles$$), $labelDims$$13_legendStyleArray$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : 
    null, $colorDims$$ = $colorContainer$$2_options$$316$$ ? $colorContainer$$2_options$$316$$.$getDimensions$() : null;
    if($labelContainer$$ && !$colorContainer$$2_options$$316$$) {
      $labelContainer$$.$setTranslateX$($availSpace$$134$$.y + ($availSpace$$134$$.$w$ - $labelDims$$13_legendStyleArray$$.$w$) / 2)
    }else {
      if($colorContainer$$2_options$$316$$ && !$labelContainer$$) {
        $colorContainer$$2_options$$316$$.$setTranslateX$($availSpace$$134$$.y + ($availSpace$$134$$.$w$ - $colorDims$$.$w$) / 2)
      }else {
        if($colorContainer$$2_options$$316$$ && $labelContainer$$) {
          var $availWidth$$18$$ = $availSpace$$134$$.$w$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
          $labelDims$$13_legendStyleArray$$.$w$ + $colorDims$$.$w$ > $availWidth$$18$$ && ($labelDims$$13_legendStyleArray$$.$w$ > $availWidth$$18$$ / 2 && $colorDims$$.$w$ > $availWidth$$18$$ / 2 ? ($legend$$32$$.removeChild($labelContainer$$), $legend$$32$$.removeChild($colorContainer$$2_options$$316$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$654$$, $treeView$$3$$, $legend$$32$$, $availWidth$$18$$ / 2, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$), 
          $colorContainer$$2_options$$316$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$654$$, $eventManager$$34_labelSpace$$2$$, $legend$$32$$, $availWidth$$18$$ / 2, $availSpace$$134$$.$h$, $attrGroups$$7_legendDims$$, $borderColor$$64_legendStyles$$)) : $labelDims$$13_legendStyleArray$$.$w$ > $colorDims$$.$w$ ? ($eventManager$$34_labelSpace$$2$$ = $availWidth$$18$$ - $colorDims$$.$w$, $legend$$32$$.removeChild($labelContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$654$$, 
          $treeView$$3$$, $legend$$32$$, $eventManager$$34_labelSpace$$2$$, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$)) : ($colorSpace_sizeValueStr$$ = $availWidth$$18$$ - $labelDims$$13_legendStyleArray$$.$w$, $legend$$32$$.removeChild($colorContainer$$2_options$$316$$), $colorContainer$$2_options$$316$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$654$$, $eventManager$$34_labelSpace$$2$$, $legend$$32$$, $colorSpace_sizeValueStr$$, $availSpace$$134$$.$h$, 
          $attrGroups$$7_legendDims$$, $borderColor$$64_legendStyles$$)), $labelDims$$13_legendStyleArray$$ = $labelContainer$$.$getDimensions$(), $colorDims$$ = $colorContainer$$2_options$$316$$.$getDimensions$());
          (0,D.$DvtAgent$isRightToLeft$$)($context$$654$$) ? ($colorContainer$$2_options$$316$$.$setTranslateX$($availSpace$$134$$.x), $labelContainer$$.$setTranslateX$($availSpace$$134$$.x + $availSpace$$134$$.$w$ - $labelDims$$13_legendStyleArray$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$134$$.x), $colorContainer$$2_options$$316$$.$setTranslateX$($availSpace$$134$$.x + $availSpace$$134$$.$w$ - $colorDims$$.$w$))
        }
      }
    }
    $attrGroups$$7_legendDims$$ = $legend$$32$$.$getDimensions$();
    $legend$$32$$.$setTranslateY$($availSpace$$134$$.y + $availSpace$$134$$.$h$ - $attrGroups$$7_legendDims$$.$h$);
    $availSpace$$134$$.$h$ -= $attrGroups$$7_legendDims$$.$h$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
    $treeView$$3$$.removeChild($legend$$32$$);
    return $legend$$32$$
  }
};
D.$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$655_widthPerSection$$, $treeView$$4$$, $attrTypeStyle_legend$$33$$, $availWidth$$19_x$$306$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$64$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$655_widthPerSection$$), $eventManager$$35$$ = $treeView$$4$$.$getEventManager$(), $attrValueStyle_styleDefaults$$6$$ = $treeView$$4$$.$getOptions$().styleDefaults, $labelContainer$$1$$ = null;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new D.$DvtContainer$$($context$$655_widthPerSection$$);
    $attrTypeStyle_legend$$33$$.$addChild$($labelContainer$$1$$);
    var $sizeWidth_textStyle$$10$$ = [];
    $sizeWidth_textStyle$$10$$.push($attrValueStyle_styleDefaults$$6$$._attributeTypeTextStyle);
    $attrTypeStyle_legend$$33$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($sizeWidth_textStyle$$10$$);
    $sizeWidth_textStyle$$10$$ = [];
    $sizeWidth_textStyle$$10$$.push($attrValueStyle_styleDefaults$$6$$._attributeValueTextStyle);
    var $attrValueStyle_styleDefaults$$6$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($sizeWidth_textStyle$$10$$), $sizeLabel_sizeStr$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$, $sizeWidth_textStyle$$10$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel_sizeStr$$ = (0,D.$DvtBundle$getTranslation$$)($treeView$$4$$.$getOptions$(), "labelSize", $treeView$$4$$.$getBundlePrefix$(), "SIZE"), $sizeLabel_sizeStr$$ = new D.$DvtOutputText$$($context$$655_widthPerSection$$, $sizeLabel_sizeStr$$, 0, 0), $sizeLabel_sizeStr$$.$setCSSStyle$($attrTypeStyle_legend$$33$$), $labelContainer$$1$$.$addChild$($sizeLabel_sizeStr$$), $sizeLabelWidth$$ = $sizeLabel_sizeStr$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new D.$DvtOutputText$$($context$$655_widthPerSection$$, 
    $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle_styleDefaults$$6$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_textStyle$$10$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel_colorStr$$1$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$, $colorWidth$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel_colorStr$$1$$ = (0,D.$DvtBundle$getTranslation$$)($treeView$$4$$.$getOptions$(), "labelColor", $treeView$$4$$.$getBundlePrefix$(), "COLOR"), $colorLabel_colorStr$$1$$ = new D.$DvtOutputText$$($context$$655_widthPerSection$$, $colorLabel_colorStr$$1$$, 0, 0), $colorLabel_colorStr$$1$$.$setCSSStyle$($attrTypeStyle_legend$$33$$), $labelContainer$$1$$.$addChild$($colorLabel_colorStr$$1$$), $colorLabelWidth$$ = $colorLabel_colorStr$$1$$.$measureDimensions$().$w$, 
    $colorValueLabel$$ = new D.$DvtOutputText$$($context$$655_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle_styleDefaults$$6$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$19_x$$306$$ -= D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_textStyle$$10$$ + $colorWidth$$ > $availWidth$$19_x$$306$$ && ($context$$655_widthPerSection$$ = $availWidth$$19_x$$306$$ / 2, $sizeWidth_textStyle$$10$$ > $context$$655_widthPerSection$$ && $colorWidth$$ > $context$$655_widthPerSection$$ ? (D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $context$$655_widthPerSection$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$35$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel_sizeStr$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = null, $sizeValueLabelWidth$$ = 0), D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $context$$655_widthPerSection$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$35$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel_colorStr$$1$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = null, $colorValueLabelWidth$$ = 0)) : $sizeWidth_textStyle$$10$$ > $colorWidth$$ ? D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $availWidth$$19_x$$306$$ - $colorWidth$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, 
    $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$35$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel_sizeStr$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = null, $sizeValueLabelWidth$$ = 0) : D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $availWidth$$19_x$$306$$ - $sizeWidth_textStyle$$10$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$35$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel_colorStr$$1$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = null, $colorValueLabelWidth$$ = 0));
    $availWidth$$19_x$$306$$ = 0;
    $isRTL$$64$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$19_x$$306$$), $availWidth$$19_x$$306$$ += $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel_colorStr$$1$$.$setX$($availWidth$$19_x$$306$$), $availWidth$$19_x$$306$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$19_x$$306$$), $availWidth$$19_x$$306$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel_sizeStr$$.$setX$($availWidth$$19_x$$306$$))) : ($sizeValueLabel$$ && ($sizeLabel_sizeStr$$.$setX$($availWidth$$19_x$$306$$), $availWidth$$19_x$$306$$ += $sizeLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$19_x$$306$$), $availWidth$$19_x$$306$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel_colorStr$$1$$.$setX$($availWidth$$19_x$$306$$), $availWidth$$19_x$$306$$ += 
    $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorValueLabel$$.$setX$($availWidth$$19_x$$306$$)))
  }
  return $labelContainer$$1$$
};
D.$DvtBaseTreeKeyboardHandler$$ = function $$DvtBaseTreeKeyboardHandler$$$($manager$$34$$) {
  this.Init($manager$$34$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtBaseTreeKeyboardHandler");
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$823$$) {
  return this.$isNavigationEvent$($event$$823$$) && !$event$$823$$.ctrlKey
};
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$824$$) {
  return 32 == $event$$824$$.keyCode && $event$$824$$.ctrlKey
};
D.$DvtBaseTreeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtBaseTreeDefaults");
D.$DvtBaseTreeDefaults$VERSION_1$$ = {skin:"alta", animationDuration:500, animationOnDataChange:"none", animationOnDisplay:"none", highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, nodeDefaults:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, selectionMode:"multiple", sorting:"off", _statusMessageStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), styleDefaults:{_attributeTypeTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), 
_attributeValueTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _currentTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _drillTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, touchResponse:"auto", _resources:{}};
D.$DvtBaseTreeDefaults$$.prototype.Init = function $$DvtBaseTreeDefaults$$$$Init$($defaultsMap$$2_ret$$105$$) {
  $defaultsMap$$2_ret$$105$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$105$$.skyros, D.$DvtBaseTreeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$105$$.alta, {})};
  D.$DvtBaseTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$2_ret$$105$$)
};
D.$DvtBaseTreeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeUtils$$, D.$DvtObj$$, "DvtBaseTreeUtils");
D.$DvtBaseTreeUtils$$.$calcMaxDepth$ = function $$DvtBaseTreeUtils$$$$calcMaxDepth$$($node$$325$$, $depth$$26$$) {
  var $maxDepth$$2$$ = $depth$$26$$, $children$$21$$ = $node$$325$$.$getChildNodes$();
  if($children$$21$$) {
    for(var $i$$908$$ = 0;$i$$908$$ < $children$$21$$.length;$i$$908$$++) {
      var $childDepth$$ = D.$DvtBaseTreeUtils$$.$calcMaxDepth$($children$$21$$[$i$$908$$], $depth$$26$$ + 1), $maxDepth$$2$$ = window.Math.max($maxDepth$$2$$, $childDepth$$)
    }
  }
  return $maxDepth$$2$$
};
D.$DvtBaseTreeUtils$$.$calcNodeCount$ = function $$DvtBaseTreeUtils$$$$calcNodeCount$$($children$$22_node$$326$$) {
  var $count$$27$$ = 1;
  if($children$$22_node$$326$$ = $children$$22_node$$326$$.$getChildNodes$()) {
    for(var $i$$909$$ = 0;$i$$909$$ < $children$$22_node$$326$$.length;$i$$909$$++) {
      $count$$27$$ += D.$DvtBaseTreeUtils$$.$calcNodeCount$($children$$22_node$$326$$[$i$$909$$])
    }
  }
  return $count$$27$$
};
D.$DvtBaseTreeUtils$$.$getAllNodes$ = function $$DvtBaseTreeUtils$$$$getAllNodes$$($node$$327$$) {
  var $ret$$106$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$327$$, $ret$$106$$);
  return $ret$$106$$
};
D.$DvtBaseTreeUtils$$.$getAllVisibleNodes$ = function $$DvtBaseTreeUtils$$$$getAllVisibleNodes$$($node$$328$$) {
  var $ret$$107$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$328$$, $ret$$107$$, !1, !0);
  return $ret$$107$$
};
D.$DvtBaseTreeUtils$$.$getLeafNodes$ = function $$DvtBaseTreeUtils$$$$getLeafNodes$$($node$$329$$) {
  var $ret$$108$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$329$$, $ret$$108$$, !0);
  return $ret$$108$$
};
D.$DvtBaseTreeUtils$$.$isHiddenNode$ = function $$DvtBaseTreeUtils$$$$isHiddenNode$$($categoryMap$$3$$, $nodeOptions$$2$$) {
  return D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$3$$, $nodeOptions$$2$$.categories)
};
D.$DvtBaseTreeUtils$$.$calcContinuousAttrGroupsExtents$ = function $$DvtBaseTreeUtils$$$$calcContinuousAttrGroupsExtents$$($attrGroupOptions$$, $nodes$$24$$) {
  var $stampId$$22$$ = $attrGroupOptions$$.S;
  if(!(null == $stampId$$22$$ || null != $attrGroupOptions$$.min && null != $attrGroupOptions$$.max)) {
    for(var $min$$19$$ = window.Infinity, $max$$20$$ = -window.Infinity, $i$$910$$ = 0;$i$$910$$ < $nodes$$24$$.length;$i$$910$$++) {
      var $node$$330_value$$191$$ = $nodes$$24$$[$i$$910$$];
      $stampId$$22$$ == $node$$330_value$$191$$.$_stampId$ && ($node$$330_value$$191$$ = $node$$330_value$$191$$.$getOptions$()._cv, null != $node$$330_value$$191$$ && ($max$$20$$ = window.Math.max($max$$20$$, $node$$330_value$$191$$), $min$$19$$ = window.Math.min($min$$19$$, $node$$330_value$$191$$)))
    }
    null == $attrGroupOptions$$.min && ($attrGroupOptions$$.min = $min$$19$$);
    null == $attrGroupOptions$$.max && ($attrGroupOptions$$.max = $max$$20$$)
  }
};
D.$DvtBaseTreeUtils$$.$processContinuousAttrGroups$ = function $$DvtBaseTreeUtils$$$$processContinuousAttrGroups$$($attrGroupsList$$, $nodes$$25$$) {
  for(var $i$$911$$ = 0;$i$$911$$ < $attrGroupsList$$.length;$i$$911$$++) {
    var $attrGroupsMap_stampId$$23$$ = $attrGroupsList$$[$i$$911$$], $attrGroups$$6$$ = $attrGroupsMap_stampId$$23$$.$attrGroups$, $attrGroupsMap_stampId$$23$$ = $attrGroupsMap_stampId$$23$$.$stampId$;
    if($attrGroups$$6$$ instanceof D.$DvtContinuousAttrGroups$$ && null != $attrGroupsMap_stampId$$23$$) {
      for(var $j$$130$$ = 0;$j$$130$$ < $nodes$$25$$.length;$j$$130$$++) {
        var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_9096_node$$331$$ = $nodes$$25$$[$j$$130$$];
        if($attrGroupsMap_stampId$$23$$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_9096_node$$331$$.$_stampId$) {
          var $color$$inline_9098$$ = $attrGroups$$6$$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_9096_node$$331$$.$getOptions$()._cv);
          $color$$inline_9098$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_9096_node$$331$$.$_color$ = $color$$inline_9098$$)
        }
      }
    }
  }
};
D.$DvtBaseTreeUtils$$.$_addNodesToArray$ = function $$DvtBaseTreeUtils$$$$_addNodesToArray$$($i$$912_node$$332$$, $ret$$109$$, $bLeafOnly$$, $bRendered$$1$$) {
  if($i$$912_node$$332$$) {
    var $children$$23$$ = $i$$912_node$$332$$.$getChildNodes$(), $childCount$$8$$ = $children$$23$$ ? $children$$23$$.length : 0;
    (!$bLeafOnly$$ || 0 == $childCount$$8$$) && (!$bRendered$$1$$ || $i$$912_node$$332$$.$getDisplayable$()) && $ret$$109$$.push($i$$912_node$$332$$);
    for($i$$912_node$$332$$ = 0;$i$$912_node$$332$$ < $childCount$$8$$;$i$$912_node$$332$$++) {
      D.$DvtBaseTreeUtils$$.$_addNodesToArray$($children$$23$$[$i$$912_node$$332$$], $ret$$109$$, $bLeafOnly$$, $bRendered$$1$$)
    }
  }
};
D.$DvtTreeAutomation$$ = function $$DvtTreeAutomation$$$($treeView$$1$$) {
  this.$_treeView$ = $treeView$$1$$;
  this.$_root$ = $treeView$$1$$.$_root$
};
(0,D.$goog$exportPath_$$)("DvtTreeAutomation", D.$DvtTreeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreeAutomation$$, D.$DvtAutomation$$, "DvtTreeAutomation");
D.$DvtTreeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTreeAutomation$$$$$GetSubIdForDomElement$$($displayable$$117_indices$$11$$) {
  var $childIndices_logicalObj$$18_parent$$94$$ = this.$_treeView$.$getLogicalObject$($displayable$$117_indices$$11$$);
  if(!$childIndices_logicalObj$$18_parent$$94$$) {
    return $displayable$$117_indices$$11$$.getParent() instanceof D.$DvtButton$$ && ($displayable$$117_indices$$11$$ = $displayable$$117_indices$$11$$.getParent()), $childIndices_logicalObj$$18_parent$$94$$ = $displayable$$117_indices$$11$$.getParent(), $childIndices_logicalObj$$18_parent$$94$$ instanceof D.$DvtBreadcrumbs$$ ? "breadcrumbs[" + (0,D.$JSCompiler_StaticMethods_getCrumbIndex$$)($childIndices_logicalObj$$18_parent$$94$$, $displayable$$117_indices$$11$$) + "]" : null
  }
  if($childIndices_logicalObj$$18_parent$$94$$ instanceof D.$DvtBaseTreeNode$$) {
    $displayable$$117_indices$$11$$ = "";
    if(!this.$_root$.$_bArtificialRoot$) {
      if($childIndices_logicalObj$$18_parent$$94$$ == this.$_root$) {
        return"node[0]"
      }
      $displayable$$117_indices$$11$$ += "[0]"
    }
    $displayable$$117_indices$$11$$ = ($childIndices_logicalObj$$18_parent$$94$$ = this.$_getIndicesFromNode$($childIndices_logicalObj$$18_parent$$94$$, this.$_root$.$getChildNodes$())) ? $displayable$$117_indices$$11$$ + $childIndices_logicalObj$$18_parent$$94$$ : $displayable$$117_indices$$11$$;
    if(0 < $displayable$$117_indices$$11$$.length) {
      return"node" + $displayable$$117_indices$$11$$
    }
  }
  return null
};
D.$DvtTreeAutomation$$.prototype.$_getIndicesFromNode$ = function $$DvtTreeAutomation$$$$$_getIndicesFromNode$$($node$$336$$, $children$$24$$) {
  if($children$$24$$ && 0 < $children$$24$$.length) {
    for(var $n$$40$$ = 0;$n$$40$$ < $children$$24$$.length;$n$$40$$++) {
      if($children$$24$$[$n$$40$$] == $node$$336$$) {
        return"[" + $n$$40$$ + "]"
      }
      var $nodeIndex$$13$$ = this.$_getIndicesFromNode$($node$$336$$, $children$$24$$[$n$$40$$].$getChildNodes$());
      if($nodeIndex$$13$$) {
        return"[" + $n$$40$$ + "]" + $nodeIndex$$13$$
      }
    }
  }
  return null
};
D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTreeAutomation$$$$$getDomElementForSubId$$($crumb$$2_foundNode_subId$$37$$) {
  return!$crumb$$2_foundNode_subId$$37$$ ? null : "tooltip" == $crumb$$2_foundNode_subId$$37$$ ? (0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_treeView$) : 0 == $crumb$$2_foundNode_subId$$37$$.indexOf("breadcrumbs") ? ($crumb$$2_foundNode_subId$$37$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_root$.$_view$.$getBreadcrumbs$(), $crumb$$2_foundNode_subId$$37$$.substring($crumb$$2_foundNode_subId$$37$$.indexOf("[") + 1, $crumb$$2_foundNode_subId$$37$$.indexOf("]")))) ? $crumb$$2_foundNode_subId$$37$$.$getElem$() : 
  null : !this.$_root$.$_bArtificialRoot$ && ($crumb$$2_foundNode_subId$$37$$ = $crumb$$2_foundNode_subId$$37$$.substring(0, $crumb$$2_foundNode_subId$$37$$.indexOf("[")) + $crumb$$2_foundNode_subId$$37$$.substring($crumb$$2_foundNode_subId$$37$$.indexOf("]") + 1), "node" == $crumb$$2_foundNode_subId$$37$$) ? this.$_root$.$getDisplayable$().$getElem$() : ($crumb$$2_foundNode_subId$$37$$ = (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)(this, this.$_root$, $crumb$$2_foundNode_subId$$37$$)) ? $crumb$$2_foundNode_subId$$37$$.$getDisplayable$().$getElem$() : 
  null
};
D.$DvtTreeAutomation$$.prototype.getDomElementForSubId = D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$;
D.$JSCompiler_StaticMethods__getNodeFromSubId$$ = function $$JSCompiler_StaticMethods__getNodeFromSubId$$$($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $childNode$$14_node$$337$$, $subId$$38$$) {
  var $index$$254_openParen$$4$$ = $subId$$38$$.indexOf("["), $closeParen$$4_nextOpenParen$$1$$ = $subId$$38$$.indexOf("]");
  if(0 <= $index$$254_openParen$$4$$ && 0 <= $closeParen$$4_nextOpenParen$$1$$) {
    $index$$254_openParen$$4$$ = $subId$$38$$.substring($index$$254_openParen$$4$$ + 1, $closeParen$$4_nextOpenParen$$1$$);
    $subId$$38$$ = $subId$$38$$.substring($closeParen$$4_nextOpenParen$$1$$ + 1);
    var $closeParen$$4_nextOpenParen$$1$$ = $subId$$38$$.indexOf("["), $nextCloseParen$$1$$ = $subId$$38$$.indexOf("]");
    return($childNode$$14_node$$337$$ = (0,D.$DvtTreeAutomation$_getNodeByIndex$$)($childNode$$14_node$$337$$.$getChildNodes$(), $index$$254_openParen$$4$$)) && 0 <= $closeParen$$4_nextOpenParen$$1$$ && 0 <= $nextCloseParen$$1$$ ? (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $childNode$$14_node$$337$$, $subId$$38$$) : $childNode$$14_node$$337$$
  }
};
D.$JSCompiler_StaticMethods__getNodeFromPath$$ = function $$JSCompiler_StaticMethods__getNodeFromPath$$$($JSCompiler_StaticMethods__getNodeFromPath$self$$, $childNode$$15_node$$338$$, $path$$41$$) {
  var $index$$255$$ = $path$$41$$.shift();
  $childNode$$15_node$$338$$ = (0,D.$DvtTreeAutomation$_getNodeByIndex$$)($childNode$$15_node$$338$$.$getChildNodes$(), $index$$255$$);
  return 0 == $path$$41$$.length ? $childNode$$15_node$$338$$ : 0 < $path$$41$$.length ? (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)($JSCompiler_StaticMethods__getNodeFromPath$self$$, $childNode$$15_node$$338$$, $path$$41$$) : null
};
D.$DvtTreeAutomation$$.prototype.$getNode$ = function $$DvtTreeAutomation$$$$$getNode$$($node$$339_subIdPath$$2$$) {
  !this.$_root$.$_bArtificialRoot$ && 0 == $node$$339_subIdPath$$2$$[0] && $node$$339_subIdPath$$2$$.shift();
  $node$$339_subIdPath$$2$$ = 0 == $node$$339_subIdPath$$2$$.length ? this.$_root$ : (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)(this, this.$_root$, $node$$339_subIdPath$$2$$);
  return{color:$node$$339_subIdPath$$2$$.$getColor$(), label:$node$$339_subIdPath$$2$$.$getLabel$(), selected:void 0 == $node$$339_subIdPath$$2$$.$isSelected$() ? !1 : $node$$339_subIdPath$$2$$.$isSelected$(), size:$node$$339_subIdPath$$2$$.$getSize$(), tooltip:$node$$339_subIdPath$$2$$.$getShortDesc$()}
};
D.$DvtTreeAutomation$$.prototype.getNode = D.$DvtTreeAutomation$$.prototype.$getNode$;
D.$DvtTreeAutomation$_getNodeByIndex$$ = function $$DvtTreeAutomation$_getNodeByIndex$$$($nodes$$29$$, $index$$256$$) {
  for(var $i$$919$$ = 0;$i$$919$$ < $nodes$$29$$.length;$i$$919$$++) {
    if($index$$256$$ == $nodes$$29$$[$i$$919$$].$getIndex$()) {
      return $nodes$$29$$[$i$$919$$]
    }
  }
  return null
};

  return D;
});