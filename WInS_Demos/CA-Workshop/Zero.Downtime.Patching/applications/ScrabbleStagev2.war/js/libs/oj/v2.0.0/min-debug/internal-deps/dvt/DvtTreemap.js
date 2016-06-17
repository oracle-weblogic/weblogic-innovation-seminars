/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTreemap$$ = function $$DvtTreemap$$$($context$$656$$, $callback$$180$$, $callbackObj$$125$$) {
  this.Init($context$$656$$, $callback$$180$$, $callbackObj$$125$$)
};
(0,D.$goog$exportPath_$$)("DvtTreemap", D.$DvtTreemap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemap$$, D.$DvtBaseTreeView$$, "DvtTreemap");
D.$DvtTreemap$$.newInstance = function $$DvtTreemap$$$newInstance$($context$$657$$, $callback$$181$$, $callbackObj$$126$$) {
  return new D.$DvtTreemap$$($context$$657$$, $callback$$181$$, $callbackObj$$126$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemap$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$658$$, $callback$$182$$, $callbackObj$$127$$) {
  D.$DvtTreemap$$.$superclass$.Init.call(this, $context$$658$$, $callback$$182$$, $callbackObj$$127$$);
  this.$Defaults$ = new D.$DvtTreemapDefaults$$;
  this.setId("treemap1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($options$$318_props$$24$$) {
  D.$DvtTreemap$$.$superclass$.$ApplyParsedProperties$.call(this, $options$$318_props$$24$$);
  $options$$318_props$$24$$ = this.$getOptions$();
  this.$_layout$ = "sliceAndDiceHorizontal" == $options$$318_props$$24$$.layout ? new D.$DvtSliceAndDiceLayout$$(!0) : "sliceAndDiceVertical" == $options$$318_props$$24$$.layout ? new D.$DvtSliceAndDiceLayout$$(!1) : new D.$DvtSquarifyingLayout$$;
  this.$_isolatedNodes$ = [];
  var $isolateRowKey$$inline_9178$$ = $options$$318_props$$24$$.isolatedNode;
  if($isolateRowKey$$inline_9178$$ && this.$_root$) {
    var $allNodes$$inline_9179$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this.$_root$);
    $allNodes$$inline_9179$$.push(this.$_root$);
    for(var $i$$inline_9180$$ = 0;$i$$inline_9180$$ < $allNodes$$inline_9179$$.length;$i$$inline_9180$$++) {
      if($allNodes$$inline_9179$$[$i$$inline_9180$$].getId() == $isolateRowKey$$inline_9178$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_9179$$[$i$$inline_9180$$]);
        break
      }
    }
  }
  "auto" == $options$$318_props$$24$$.animationOnDisplay && ($options$$318_props$$24$$.animationOnDisplay = "alphaFade")
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$135$$) {
  var $bufferSpace$$1_gap$$31_numIsolated$$ = "jet" != this.$getOptions$()._environment ? 7 : 1, $bufferSpace$$1_gap$$31_numIsolated$$ = window.Math.max(window.Math.ceil($bufferSpace$$1_gap$$31_numIsolated$$ * window.Math.min($availSpace$$135$$.$w$, $availSpace$$135$$.$h$) / 400), 1);
  $availSpace$$135$$.x += $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$135$$.y += $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$135$$.$w$ -= 2 * $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$135$$.$h$ -= 2 * $bufferSpace$$1_gap$$31_numIsolated$$;
  $bufferSpace$$1_gap$$31_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$135$$.x += $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$135$$.$w$ -= 2 * $bufferSpace$$1_gap$$31_numIsolated$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$135$$);
  this.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$(this, $availSpace$$135$$, this.$_legendSource$);
  $availSpace$$135$$.x -= $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$135$$.$w$ += 2 * $bufferSpace$$1_gap$$31_numIsolated$$;
  $bufferSpace$$1_gap$$31_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace$$1_gap$$31_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace$$1_gap$$31_numIsolated$$ - 1], $availSpace$$135$$.x, $availSpace$$135$$.y, $availSpace$$135$$.$w$, $availSpace$$135$$.$h$, !0)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$135$$.x, $availSpace$$135$$.y, $availSpace$$135$$.$w$, $availSpace$$135$$.$h$, !1);
    for(var $i$$924$$ = 0;$i$$924$$ < $bufferSpace$$1_gap$$31_numIsolated$$;$i$$924$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$924$$], $availSpace$$135$$.x, $availSpace$$135$$.y, $availSpace$$135$$.$w$, $availSpace$$135$$.$h$, !0)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$222_i$$925$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$222_i$$925$$);
  this.$_breadcrumbs$ && $container$$222_i$$925$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$222_i$$925$$.$addChild$(this.$_legend$), this.$_legend$ = null);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_groupTextLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$222_i$$925$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$222_i$$925$$) : this.$_root$.$hasChildren$() ? (this.$_root$.$renderChildren$($container$$222_i$$925$$), (0,D.$JSCompiler_StaticMethods_UpdateAriaNavigation$$)(this, this.$_root$)) : this.$_root$.$render$($container$$222_i$$925$$);
    this.$_isolatedLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$222_i$$925$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$222_i$$925$$.$addChild$(this.$_selectedLayer$);
    $container$$222_i$$925$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new D.$DvtPolyline$$(this.$getCtx$(), []);
    this.$_hoverEffect$.$setVisible$(!1);
    this.$_hoverEffect$.$setMouseEnabled$(!1);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_hoverEffect$);
    $container$$222_i$$925$$.$addChild$(this.$_hoverEffect$);
    for($container$$222_i$$925$$ = 0;$container$$222_i$$925$$ < this.$_isolatedNodes$.length;$container$$222_i$$925$$++) {
      var $displayable$$118$$ = this.$_isolatedNodes$[$container$$222_i$$925$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$118$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$222_i$$925$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  D.$DvtTreemap$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$2$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$926$$ = 0;$i$$926$$ < $selectedNodes$$2$$.length;$i$$926$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$2$$[$i$$926$$] == $lastIsolated$$1$$ || $selectedNodes$$2$$[$i$$926$$].$isDescendantOf$($lastIsolated$$1$$)) && $selectedNodes$$2$$[$i$$926$$].$setSelected$(!0)
    }else {
      $selectedNodes$$2$$[$i$$926$$].$setSelected$(!0)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$36$$) {
  return new D.$DvtTreemapKeyboardHandler$$($manager$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$68$$, $context$$659$$, $callback$$183$$, $callbackObj$$128$$) {
  return new D.$DvtTreemapEventManager$$($view$$68$$, $context$$659$$, $callback$$183$$, $callbackObj$$128$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$38$$) {
  var $isolatedRootNode$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this);
  return $isolatedRootNode$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, D.$DvtBaseTreeUtils$$.$getLeafNodes$($isolatedRootNode$$)) : $root$$38$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, D.$DvtBaseTreeUtils$$.$getLeafNodes$($root$$38$$)) : null
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$51$$) {
  for(var $newIndex$$9$$ = 0, $numChildren$$17$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$927$$ = 0;$i$$927$$ < $numChildren$$17$$;$i$$927$$++) {
    var $child$$83$$ = this.$_selectedLayer$.$getChildAt$($i$$927$$);
    $rect$$51$$.zIndex > $child$$83$$.zIndex && ($newIndex$$9$$ = $i$$927$$ + 1)
  }
  $newIndex$$9$$ < $numChildren$$17$$ ? this.$_selectedLayer$.$addChildAt$($rect$$51$$, $newIndex$$9$$) : this.$_selectedLayer$.$addChild$($rect$$51$$)
};
D.$JSCompiler_prototypeAlias$$.$__getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$__getNodeUnderPoint$$($x$$314$$, $y$$281$$) {
  return 0 < this.$_isolatedNodes$.length ? this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1].$getNodeUnderPoint$($x$$314$$, $y$$281$$) : this.$_root$.$getNodeUnderPoint$($x$$314$$, $y$$281$$)
};
D.$JSCompiler_StaticMethods___getLastIsolatedNode$$ = function $$JSCompiler_StaticMethods___getLastIsolatedNode$$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : null
};
D.$JSCompiler_StaticMethods__renderIsolateRestore$$ = function $$JSCompiler_StaticMethods__renderIsolateRestore$$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$345$$) {
  if("none" != $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$getOptions$().animationOnDataChange) {
    for(var $playables$$inline_9195_selectedNodes$$3$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_9196_i$$928$$ = 0;$descendants$$inline_9196_i$$928$$ < $playables$$inline_9195_selectedNodes$$3$$.length;$descendants$$inline_9196_i$$928$$++) {
      $playables$$inline_9195_selectedNodes$$3$$[$descendants$$inline_9196_i$$928$$].$setSelected$(!1)
    }
    for(var $playables$$inline_9195_selectedNodes$$3$$ = [(0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($node$$345$$)], $descendants$$inline_9196_i$$928$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($node$$345$$), $i$$inline_9197$$ = 0;$i$$inline_9197$$ < $descendants$$inline_9196_i$$928$$.length;$i$$inline_9197$$++) {
      $playables$$inline_9195_selectedNodes$$3$$.push((0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($descendants$$inline_9196_i$$928$$[$i$$inline_9197$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$getCtx$(), $playables$$inline_9195_selectedNodes$$3$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$(null, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, !0)
  }
};
D.$JSCompiler_StaticMethods___getDefaultNavigable$$ = function $$JSCompiler_StaticMethods___getDefaultNavigable$$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$10$$) {
  var $keyboardHandler$$10$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$10$$ ? $keyboardHandler$$10$$.$getDefaultNavigable$($navigableItems$$10$$) : $navigableItems$$10$$ && 0 < $navigableItems$$10$$.length ? $navigableItems$$10$$[0] : null
};
D.$DvtTreemap$$.prototype.$GetComponentDescription$ = function $$DvtTreemap$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "TREEMAP")
};
D.$DvtTreemap$$.prototype.$getBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtTreemapBundle");
D.$DvtTreemap$$.prototype.$CreateNode$ = function $$DvtTreemap$$$$$CreateNode$$($nodeOptions$$6$$) {
  return new D.$DvtTreemapNode$$(this, $nodeOptions$$6$$)
};
D.$DvtTreemapNode$$ = function $$DvtTreemapNode$$$($treemap$$, $props$$25$$) {
  this.Init($treemap$$, $props$$25$$);
  var $options$$320$$ = this.$_view$.$getOptions$(), $nodeDefaults$$3$$ = $options$$320$$.nodeDefaults, $headerDefaults$$ = $nodeDefaults$$3$$.header, $headerOptions$$ = $props$$25$$.header ? $props$$25$$.header : {};
  this.$_groupLabelDisplay$ = $props$$25$$.groupLabelDisplay ? $props$$25$$.groupLabelDisplay : $nodeDefaults$$3$$.groupLabelDisplay;
  this.$_labelDisplay$ = $props$$25$$.labelDisplay ? $props$$25$$.labelDisplay : $nodeDefaults$$3$$.labelDisplay;
  this.$_labelHalign$ = $props$$25$$.labelHalign ? $props$$25$$.labelHalign : $nodeDefaults$$3$$.labelHalign;
  this.$_labelValign$ = $props$$25$$.labelValign ? $props$$25$$.labelValign : $nodeDefaults$$3$$.labelValign;
  this.$_headerHalign$ = $headerOptions$$.labelHalign ? $headerOptions$$.labelHalign : $headerDefaults$$.labelHalign;
  this.$_headerLabelStyle$ = $headerOptions$$.labelStyle ? new D.$DvtCSSStyle$$($headerOptions$$.labelStyle) : null;
  this.$_bHeaderUseNodeColor$ = "on" == ($headerOptions$$.useNodeColor ? $headerOptions$$.useNodeColor : $headerDefaults$$.useNodeColor);
  this.$_isolate$ = $headerOptions$$.isolate ? $headerOptions$$.isolate : $headerDefaults$$.isolate;
  "auto" == this.$_isolate$ && (this.$_isolate$ = (0,D.$DvtAgent$isTouchDevice$$)() ? "off" : "on");
  this.$_bIsolated$ = null != $options$$320$$.isolatedNode && $options$$320$$.isolatedNode == this.getId()
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapNode$$, D.$DvtBaseTreeNode$$, "DvtTreemapNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$.$addChild$(this.$_shape$);
    var $afRoot$$11_template$$25$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new D.$DvtContainer$$(this.$_view$.$getCtx$()), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot$$11_template$$25$$ = (0,D.$JSCompiler_StaticMethods_GetTemplate$$)(this);
    if($afRoot$$11_template$$25$$) {
      var $aw$$4_elAttrs$$2$$ = this.$getOptions$()._cf, $afContext$$64$$ = this.$_view$.$_afContext$;
      $afContext$$64$$.$_elContext$ = $aw$$4_elAttrs$$2$$;
      var $aw$$4_elAttrs$$2$$ = this.$_width$ - 8 - 2, $ah$$6$$ = this.$_height$ - 4 - 2;
      0 < $aw$$4_elAttrs$$2$$ && 0 < $ah$$6$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$64$$, $aw$$4_elAttrs$$2$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$64$$, $ah$$6$$), $afContext$$64$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$11_template$$25$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$64$$, $afRoot$$11_template$$25$$, this.$_shape$), (0,D.$DvtAgent$isRightToLeft$$)($container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$.$getCtx$()) ? 
      ($container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$ = $afRoot$$11_template$$25$$.$getDimensions$(), $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$.$w$) : $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$ = this.$_x$ + 4 + 1, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$11_template$$25$$, $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$, 
      this.$_y$ + 2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), null != this.$_text$ && (this.$_pattern$ && "header" != this.$_textStyle$) && ($container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$.x, $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$.y, $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$.$w$, 
      $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(!1), this.$_shape$.$addChild$(this.$_textBackground$), $container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$ = this.$_text$, "node" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$) : this.$_shape$.$addChild$($container$$223_dim$$89_dims$$72_text$$inline_9211_transX$$9$$))
    }
    this.$hasChildren$() ? this.$_shape$.$setAriaRole$("group") : this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($nodeDefaults$$4_parentNode$$18_selected$$48$$) {
  D.$DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $nodeDefaults$$4_parentNode$$18_selected$$48$$);
  if(this.$_shape$) {
    $nodeDefaults$$4_parentNode$$18_selected$$48$$ = this.$_view$.$getOptions$().nodeDefaults;
    var $nodeHeaderDefaults$$ = $nodeDefaults$$4_parentNode$$18_selected$$48$$.header;
    if(this.$isSelected$()) {
      var $x$$315$$ = this.$_x$, $y$$282$$ = this.$_y$ + 1, $w$$74$$ = this.$_width$ - 1, $h$$68$$ = this.$_height$ - 1;
      (0,D.$DvtAgent$isPlatformWebkit$$)() && ($y$$282$$ -= 1);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = null;
      this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $x$$315$$, $y$$282$$, $w$$74$$, $h$$68$$);
      this.$_selectionOuter$.$setMouseEnabled$(!1);
      this.$_selectionOuter$.$setFill$(null);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$);
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $x$$315$$ + 1, $y$$282$$ + 1, $w$$74$$ - 2, $h$$68$$ - 2);
      this.$_selectionInner$.$setMouseEnabled$(!1);
      this.$_selectionInner$.$setFill$(null);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionInner$);
      this.$_shape$.$addChild$(this.$_selectionInner$);
      "header" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.hoverBackgroundColor) : (this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.selectedBackgroundColor), this.$_text$ && (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_selectedLabelStyle")), this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($nodeHeaderDefaults$$.selectedInnerColor), 
      (0,D.$DvtAgent$isTouchDevice$$)() && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$))) : (this.$_selectionOuter$.$setSolidStroke$($nodeDefaults$$4_parentNode$$18_selected$$48$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($nodeDefaults$$4_parentNode$$18_selected$$48$$.selectedInnerColor), !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shape$, 
      D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$), this.$_selectionInner$ = null, (0,D.$DvtAgent$isTouchDevice$$)() && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), "header" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.hoverBackgroundColor) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$), this.$_text$ && 
      (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "labelStyle"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$.hoverOuterColor) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = 
      null))) : ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_shape$), this.$_selectionOuter$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = null), ($nodeDefaults$$4_parentNode$$18_selected$$48$$ = this.$_parent$) && $nodeDefaults$$4_parentNode$$18_selected$$48$$.$_childNodeGroup$ && $nodeDefaults$$4_parentNode$$18_selected$$48$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $nodeDefaults$$5_stroke$$122_stroke$$inline_9215_x$$316$$ = this.$_view$.$getOptions$().nodeDefaults, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$ = $nodeDefaults$$5_stroke$$122_stroke$$inline_9215_x$$316$$.header, $isolatedNode_points$$80$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$);
    if(!(null != $isolatedNode_points$$80$$ && $isolatedNode_points$$80$$ != this && !this.$isDescendantOf$($isolatedNode_points$$80$$))) {
      var $isolatedNode_points$$80$$ = [], $x1$$58_y$$283$$, $w$$75_y1$$48$$, $h$$69_x2$$55$$, $y2$$45$$;
      "header" == this.$_textStyle$ ? (this.$_innerShape$.$setSolidFill$($JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$.hoverBackgroundColor), this.$_selectionOuter$ || ($nodeDefaults$$5_stroke$$122_stroke$$inline_9215_x$$316$$ = this.$_x$, $x1$$58_y$$283$$ = this.$_y$ + 1, $w$$75_y1$$48$$ = this.$_width$ - 1, $h$$69_x2$$55$$ = this.$_height$ - 1, (0,D.$DvtAgent$isPlatformWebkit$$)() && ($x1$$58_y$$283$$ -= 1), this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), 
      $nodeDefaults$$5_stroke$$122_stroke$$inline_9215_x$$316$$, $x1$$58_y$$283$$, $w$$75_y1$$48$$, $h$$69_x2$$55$$), this.$_selectionOuter$.$setMouseEnabled$(!1), this.$_selectionOuter$.$setFill$(null), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$_selectionOuter$.$setSolidStroke$(this.$isSelected$() ? $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$.selectedOuterColor : $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$.hoverOuterColor), 
      $x1$$58_y$$283$$ = this.$_x$ + 1.5 + 1, $h$$69_x2$$55$$ = this.$_x$ + this.$_width$ - 1.5 - 1, $w$$75_y1$$48$$ = this.$_y$ + this.$_titleBarHeight$, $y2$$45$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$80$$.push($h$$69_x2$$55$$, $w$$75_y1$$48$$, $h$$69_x2$$55$$, $y2$$45$$, $x1$$58_y$$283$$, $y2$$45$$, $x1$$58_y$$283$$, $w$$75_y1$$48$$), $nodeDefaults$$5_stroke$$122_stroke$$inline_9215_x$$316$$ = new D.$DvtSolidStroke$$($JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$.hoverInnerColor, 
      0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableHoverLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_hoverLabelStyle"))) : ($x1$$58_y$$283$$ = this.$_x$ + 1, $h$$69_x2$$55$$ = this.$_x$ + this.$_width$ - 1, $w$$75_y1$$48$$ = this.$_y$ + 1, $y2$$45$$ = this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$80$$.push(this.$_x$, $w$$75_y1$$48$$, $h$$69_x2$$55$$, 
      $w$$75_y1$$48$$, $h$$69_x2$$55$$, $y2$$45$$, $x1$$58_y$$283$$, $y2$$45$$, $x1$$58_y$$283$$, $w$$75_y1$$48$$), $nodeDefaults$$5_stroke$$122_stroke$$inline_9215_x$$316$$ = new D.$DvtSolidStroke$$($nodeDefaults$$5_stroke$$122_stroke$$inline_9215_x$$316$$.hoverColor, 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$80$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setStroke$($nodeDefaults$$5_stroke$$122_stroke$$inline_9215_x$$316$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9213_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setVisible$(!0)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $nodeHeaderDefaults$$2$$ = this.$_view$.$getOptions$().nodeDefaults.header;
    "header" == this.$_textStyle$ && (this.$isSelected$() ? (this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$2$$.selectedBackgroundColor), this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$2$$.selectedOuterColor), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableSelectedLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_selectedLabelStyle"))) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, 
    this.$_shape$, this.$_innerShape$), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = null), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "labelStyle"))));
    this.$_view$.$_hoverEffect$.$setVisible$(!1)
  }
};
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($bDimmed$$4$$, $alpha$$54$$) {
  this.$hasChildren$() ? (this.$_text$ && this.$_text$.$setAlpha$($alpha$$54$$), "header" == this.$_textStyle$ && (this.$_bHeaderUseNodeColor$ && this.$_innerShape$) && this.$_innerShape$.$setAlpha$($alpha$$54$$)) : D.$DvtTreemapNode$$.$superclass$.$highlight$.call(this, $bDimmed$$4$$, $alpha$$54$$)
};
D.$JSCompiler_prototypeAlias$$.$isIsolateEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIsolateEnabled$$() {
  return"off" != this.$_isolate$ && "header" == this.$_textStyle$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$17$$) {
  return!$behavior$$17$$ || !$behavior$$17$$.$getAlign$() ? D.$DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$17$$) : new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$829_lastChild$$2_next$$20$$) {
  var $keyCode$$56_navigables$$16_parent$$96$$;
  if($event$$829_lastChild$$2_next$$20$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$829_lastChild$$2_next$$20$$)
  }
  $keyCode$$56_navigables$$16_parent$$96$$ = $event$$829_lastChild$$2_next$$20$$.keyCode;
  if(32 == $keyCode$$56_navigables$$16_parent$$96$$ && $event$$829_lastChild$$2_next$$20$$.ctrlKey) {
    return this
  }
  if(38 == $keyCode$$56_navigables$$16_parent$$96$$ && $event$$829_lastChild$$2_next$$20$$.altKey || 221 == $keyCode$$56_navigables$$16_parent$$96$$) {
    ($keyCode$$56_navigables$$16_parent$$96$$ = this.$_parent$) && $keyCode$$56_navigables$$16_parent$$96$$.getId() != this.$_view$.$_root$.getId() ? ($event$$829_lastChild$$2_next$$20$$ = $keyCode$$56_navigables$$16_parent$$96$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($keyCode$$56_navigables$$16_parent$$96$$)) : $event$$829_lastChild$$2_next$$20$$ = this
  }else {
    if(40 == $keyCode$$56_navigables$$16_parent$$96$$ && $event$$829_lastChild$$2_next$$20$$.altKey || 219 == $keyCode$$56_navigables$$16_parent$$96$$) {
      $event$$829_lastChild$$2_next$$20$$ = ($event$$829_lastChild$$2_next$$20$$ = this.$_lastVisitedChild$) ? $event$$829_lastChild$$2_next$$20$$ : this.$hasChildren$() ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$39$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$), $depth$$28$$ = 0;
      if($root$$39$$) {
        if(this == $root$$39$$) {
          $depth$$28$$ = 0
        }else {
          $keyCode$$56_navigables$$16_parent$$96$$ = this.$_parent$;
          for($depth$$28$$ = 1;$root$$39$$ != $keyCode$$56_navigables$$16_parent$$96$$;) {
            $depth$$28$$++, $keyCode$$56_navigables$$16_parent$$96$$ = $keyCode$$56_navigables$$16_parent$$96$$.$_parent$
          }
        }
      }else {
        for($root$$39$$ = this;$root$$39$$.$_parent$;) {
          $root$$39$$ = $root$$39$$.$_parent$
        }
        $depth$$28$$ = (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this)
      }
      $keyCode$$56_navigables$$16_parent$$96$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$39$$, $depth$$28$$);
      $event$$829_lastChild$$2_next$$20$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$829_lastChild$$2_next$$20$$, $keyCode$$56_navigables$$16_parent$$96$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$829_lastChild$$2_next$$20$$);
  return $event$$829_lastChild$$2_next$$20$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : null
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$116_x$$317_xx$$65$$, $y$$284_yy$$65$$, $width$$194_ww$$120$$, $height$$173_hh$$104$$) {
  if(!(0 >= $width$$194_ww$$120$$ || 0 >= $height$$173_hh$$104$$)) {
    this.$_hasLayout$ = !0;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$116_x$$317_xx$$65$$;
    this.$_y$ = $y$$284_yy$$65$$;
    this.$_width$ = $width$$194_ww$$120$$ ? $width$$194_ww$$120$$ : 0;
    this.$_height$ = $height$$173_hh$$104$$ ? $height$$173_hh$$104$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "off");
    if("header" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$116_x$$317_xx$$65$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$);
      $headerLabelHeight_text$$116_x$$317_xx$$65$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $headerLabelHeight_text$$116_x$$317_xx$$65$$, "labelStyle");
      $headerLabelHeight_text$$116_x$$317_xx$$65$$ = D.$DvtTextUtils$$.$guessTextDimensions$($headerLabelHeight_text$$116_x$$317_xx$$65$$).$h$;
      this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$116_x$$317_xx$$65$$);
      this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$116_x$$317_xx$$65$$ = this.$_x$;
      $y$$284_yy$$65$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$194_ww$$120$$ = this.$_width$;
      $height$$173_hh$$104$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$194_ww$$120$$ && 0 <= $height$$173_hh$$104$$) {
        return new D.$DvtRectangle$$($headerLabelHeight_text$$116_x$$317_xx$$65$$, $y$$284_yy$$65$$, $width$$194_ww$$120$$, $height$$173_hh$$104$$)
      }
      this.$_textStyle$ = null
    }
    return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$getNodeUnderPoint$$($x$$318$$, $y$$285$$) {
  if(this.contains($x$$318$$, $y$$285$$) || !this.$_hasLayout$) {
    for(var $childNodes$$26$$ = this.$getChildNodes$(), $i$$930$$ = 0;$i$$930$$ < $childNodes$$26$$.length;$i$$930$$++) {
      if($childNodes$$26$$[$i$$930$$].contains($x$$318$$, $y$$285$$)) {
        return $childNodes$$26$$[$i$$930$$].$getNodeUnderPoint$($x$$318$$, $y$$285$$)
      }
    }
    if(this.$_hasLayout$) {
      return this
    }
  }
  return null
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$319$$, $y$$286$$) {
  return $x$$319$$ >= this.$_x$ && $x$$319$$ <= this.$_x$ + this.$_width$ && $y$$286$$ >= this.$_y$ && $y$$286$$ <= this.$_y$ + this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$97$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$30$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$69$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$97$$, $g$$30$$, $b$$69$$, this.$hasChildren$() ? 0 : window.Math.random()]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$53$$) {
  this.$setLayoutParams$($params$$53$$[0], $params$$53$$[1], $params$$53$$[2], $params$$53$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$53$$[4]), window.Math.round($params$$53$$[5]), window.Math.round($params$$53$$[6]));
  this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_shape$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && (0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_innerShape$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("header" != this.$_textStyle$ || this.$_bHeaderUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$(!1), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_fillShape$), 
  (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = null, (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), (0,D.$JSCompiler_StaticMethods_GetTemplate$$)(this) ? ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_contentRoot$), this.$_contentRoot$ = null) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_textBackground$), this.$_textBackground$ = null, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), 
  this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
D.$JSCompiler_StaticMethods__getIsolateAnimation$$ = function $$JSCompiler_StaticMethods__getIsolateAnimation$$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$48$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$getCtx$(), $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$48$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$48$$
  }
  return null
};
D.$DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($handler$$69$$, $oldNode$$20$$) {
  return 0 == (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this) || $oldNode$$20$$.$_hasLayout$ && 0 < $oldNode$$20$$.$_width$ && 0 < $oldNode$$20$$.$_height$ ? D.$DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$69$$, $oldNode$$20$$) : this.$animateInsert$($handler$$69$$)
};
D.$DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
  var $context$$661$$ = this.$_view$.$getCtx$(), $shape$$94$$;
  if("header" == this.$_textStyle$) {
    $shape$$94$$ = new D.$DvtRect$$($context$$661$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new D.$DvtRect$$($context$$661$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, $shape$$94$$, this.$_innerShape$), this.$_innerShape$.$setMouseEnabled$(!1), $shape$$94$$.$addChild$(this.$_innerShape$), this.$_bIsolated$ && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, 
    $shape$$94$$))
  }else {
    var $fill$$77$$ = this.$GetFill$();
    $shape$$94$$ = new D.$DvtRect$$($context$$661$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !(0,D.$DvtAgent$isTouchDevice$$)()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new D.$DvtSolidStroke$$("#FFFFFF");
      new D.$DvtSolidStroke$$("#000000", 0.3);
      this.$_pattern$ && new D.$DvtSolidStroke$$(this.$_color$, 0.15);
      var $bottomRightColor_fillColor$$12$$ = this.$getColor$(), $topLeftColor$$ = D.$DvtColorUtils$$.$interpolateColor$("#FFFFFF", $bottomRightColor_fillColor$$12$$, 0.7), $bottomRightColor_fillColor$$12$$ = D.$DvtColorUtils$$.$interpolateColor$("#000000", $bottomRightColor_fillColor$$12$$, 0.7), $minDim$$1$$ = window.Math.min(this.$_width$, this.$_height$);
      4 <= $minDim$$1$$ ? ($shape$$94$$.$setSolidFill$($bottomRightColor_fillColor$$12$$), this.$_topLeftShape$ = new D.$DvtRect$$($context$$661$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$(!1), $shape$$94$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new D.$DvtRect$$($context$$661$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), this.$_fillShape$.$setFill$($fill$$77$$), 
      this.$_fillShape$.$setMouseEnabled$(!1), $shape$$94$$.$addChild$(this.$_fillShape$)) : 2 <= $minDim$$1$$ ? ($shape$$94$$.$setSolidFill$($bottomRightColor_fillColor$$12$$), this.$_fillShape$ = new D.$DvtRect$$($context$$661$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$77$$), this.$_fillShape$.$setMouseEnabled$(!1), $shape$$94$$.$addChild$(this.$_fillShape$)) : $shape$$94$$.$setFill$($fill$$77$$)
    }else {
      $shape$$94$$.$setFill$($fill$$77$$)
    }
  }
  this.$_view$.$getEventManager$().$associate$($shape$$94$$, this);
  this.$isSelectable$() ? $shape$$94$$.$setSelectable$(!0) : $shape$$94$$.setCursor("default");
  $shape$$94$$.zIndex = this.$_zIndex$;
  return $shape$$94$$
};
D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__createIsolateRestoreButton$$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$224$$) {
  if("header" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !$JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$isIsolateEnabled$()) {
    return null
  }
  var $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$ = null, $transX$$10_x1$$59$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$56$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$52_tooltip$$50_y1$$49$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, $y2$$46$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 
  $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$56$$ - $transX$$10_x1$$59$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$) {
      var $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getCtx$(), $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_context$), $resources$$inline_9224_resources$$inline_9235$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$()._resources, 
      $overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$ = $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ && $resources$$inline_9224_resources$$inline_9235$$.restoreDownRtl ? $resources$$inline_9224_resources$$inline_9235$$.restoreDownRtl : $resources$$inline_9224_resources$$inline_9235$$.restoreDown, $downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$ = $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ && 
      $resources$$inline_9224_resources$$inline_9235$$.restoreOverRtl ? $resources$$inline_9224_resources$$inline_9235$$.restoreOverRtl : $resources$$inline_9224_resources$$inline_9235$$.restoreOver, $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ = new D.$DvtImage$$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ && 
      $resources$$inline_9224_resources$$inline_9235$$.restoreRtl ? $resources$$inline_9224_resources$$inline_9235$$.restoreRtl : $resources$$inline_9224_resources$$inline_9235$$.restore, 0, 0, 12, 12), $overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$ = new D.$DvtImage$$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$, 
      0, 0, 12, 12), $downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$ = new D.$DvtImage$$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$, 0, 0, 12, 12);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$);
      $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$ = new D.$DvtButton$$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$, $overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$, $downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$);
      $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, !1, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getCtx$(), $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_context$), $resources$$inline_9224_resources$$inline_9235$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$()._resources, 
      $overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$ = $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ && $resources$$inline_9224_resources$$inline_9235$$.isolateDownRtl ? $resources$$inline_9224_resources$$inline_9235$$.isolateDownRtl : $resources$$inline_9224_resources$$inline_9235$$.isolateDown, $downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$ = $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ && 
      $resources$$inline_9224_resources$$inline_9235$$.isolateOverRtl ? $resources$$inline_9224_resources$$inline_9235$$.isolateOverRtl : $resources$$inline_9224_resources$$inline_9235$$.isolateOver, $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ = new D.$DvtImage$$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$ && 
      $resources$$inline_9224_resources$$inline_9235$$.isolateRtl ? $resources$$inline_9224_resources$$inline_9235$$.isolateRtl : $resources$$inline_9224_resources$$inline_9235$$.isolate, 0, 0, 12, 12), $overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$ = new D.$DvtImage$$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$, 
      0, 0, 12, 12), $downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$ = new D.$DvtImage$$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$, 0, 0, 12, 12), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$), 
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$), $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$ = new D.$DvtButton$$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $bRtl$$inline_9223_bRtl$$inline_9234_upState$$inline_9227_upState$$inline_9238$$, $overImage$$inline_9225_overImage$$inline_9236_overState$$inline_9228_overState$$inline_9239$$, 
      $downImage$$inline_9226_downImage$$inline_9237_downState$$inline_9229_downState$$inline_9240$$), $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, !1, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$10_x1$$59$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$224$$.$getCtx$()) ? $transX$$10_x1$$59$$ + 1 : $x2$$56$$ - 12 - 1;
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $transX$$10_x1$$59$$, ($y2$$46$$ + $rect$$52_tooltip$$50_y1$$49$$ - 12) / 2);
    $container$$224$$.$addChild$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$);
    (0,D.$DvtAgent$isTouchDevice$$)() && ($rect$$52_tooltip$$50_y1$$49$$ = new D.$DvtRect$$($container$$224$$.$getCtx$(), -2, -2, 16, 16), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$52_tooltip$$50_y1$$49$$), $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$.$addChild$($rect$$52_tooltip$$50_y1$$49$$));
    (0,D.$DvtCSSStyle$afterSkinAlta$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$().skin) ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getEventManager$().$associate$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$52_tooltip$$50_y1$$49$$ = (0,D.$DvtBundle$getTranslation$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$(), 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", "DvtTreemapBundle", $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$ ? "RESTORE" : "ISOLATE"), $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getEventManager$().$associate$($JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$, new D.$DvtBaseTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$52_tooltip$$50_y1$$49$$)))
  }
  return $JSCompiler_temp$$163_button$$76_button$$inline_9230_button$$inline_9241_context$$inline_9222_context$$inline_9233$$
};
D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__removeIsolateRestoreButton$$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = null)
};
D.$DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($container$$225$$) {
  var $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$225$$.$getCtx$());
  if(!this.$_textStr$ || !$container$$225$$ || !this.$_textStyle$ || "off" == this.$_textStyle$) {
    return null
  }
  var $availHeight$$13$$ = this.$_height$;
  if((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) > $availHeight$$13$$) {
    return null
  }
  var $hAlign$$6$$ = "node" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ && ("start" == $hAlign$$6$$ ? $hAlign$$6$$ = "end" : "end" == $hAlign$$6$$ && ($hAlign$$6$$ = "start"));
  var $availWidth$$20$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  this.$isIsolateEnabled$() && ($isolateWidth$$ = 13, $availWidth$$20$$ = "center" == $hAlign$$6$$ ? $availWidth$$20$$ - 2 * $isolateWidth$$ : $availWidth$$20$$ - $isolateWidth$$);
  if(0 >= $availWidth$$20$$) {
    return null
  }
  var $text$$117$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$);
  $text$$117$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
  "start" == $hAlign$$6$$ ? ($chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ ? $text$$117$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$117$$.$setX$(this.$_x$ + 4), $text$$117$$.$alignLeft$()) : "center" == $hAlign$$6$$ ? ($text$$117$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$117$$.$alignCenter$()) : "end" == $hAlign$$6$$ && ($chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ ? $text$$117$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$117$$.$setX$(this.$_x$ + this.$_width$ - 4 - 
  $isolateWidth$$), $text$$117$$.$alignRight$());
  "node" == this.$_textStyle$ ? ((0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $text$$117$$), $availHeight$$13$$ = this.$_height$ - 4, $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ = D.$DvtTextUtils$$.$getTextHeight$($text$$117$$), "top" == this.$_labelValign$ ? $text$$117$$.$setY$(this.$_y$ + 2) : "center" == this.$_labelValign$ ? $text$$117$$.$setY$(this.$_y$ + this.$_height$ / 2 - $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ / 2) : "bottom" == this.$_labelValign$ && 
  $text$$117$$.$setY$(this.$_y$ + this.$_height$ - 2 - $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$)) : "header" == this.$_textStyle$ && ($chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ = (0,D.$DvtAgent$isPlatformWebkit$$)() ? 1 : 0, $text$$117$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$), $text$$117$$.$alignMiddle$(), (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$117$$, "labelStyle"));
  if(null != $text$$117$$) {
    return"header" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$117$$, "_drillableLabelStyle"), $text$$117$$.setCursor("pointer"), $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ = new D.$DvtBaseTreePeer$$(this, this.getId(), null, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$.$setDrillable$(!0), this.$_view$.$getEventManager$().$associate$($text$$117$$, $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$)) : 
    $text$$117$$.$setMouseEnabled$(!1), D.$DvtTextUtils$$.$fitText$($text$$117$$, $availWidth$$20$$, $availHeight$$13$$, $container$$225$$) ? $text$$117$$ : null
  }
};
D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderStyle$$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$, $shape$$95$$, $borderColor$$65_innerShape$$) {
  var $nodeHeaderDefaults$$3$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$_view$.$getOptions$().nodeDefaults.header;
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$_bHeaderUseNodeColor$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$getColor$(), $borderColor$$65_innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$), $borderColor$$65_innerShape$$ = D.$DvtColorUtils$$.$interpolateColor$($nodeHeaderDefaults$$3$$.borderColor, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$, 
  0.5), $shape$$95$$.$setSolidFill$($borderColor$$65_innerShape$$)) : ($shape$$95$$.$setSolidFill$($nodeHeaderDefaults$$3$$.borderColor), $borderColor$$65_innerShape$$.$setSolidFill$($nodeHeaderDefaults$$3$$.backgroundColor))
};
D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$118$$, $styleType$$) {
  var $textStyle$$11$$ = [];
  1 >= (0,D.$JSCompiler_StaticMethods_GetDepth$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $textStyle$$11$$.push(new D.$DvtCSSStyle$$("font-weight:bold;"));
  $textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$getOptions$().nodeDefaults.header[$styleType$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_bHeaderUseNodeColor$ && ("labelStyle" == $styleType$$ || "_drillableLabelStyle" == $styleType$$) && $textStyle$$11$$.push(new D.$DvtCSSStyle$$("color: " + ($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_pattern$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_color$))));
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$118$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($textStyle$$11$$))
};
D.$DvtTreemapNode$$.prototype.$handleMouseOver$ = function $$DvtTreemapNode$$$$$handleMouseOver$$() {
  !this.$_isolateButton$ && !(0,D.$DvtAgent$isTouchDevice$$)() && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$));
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtTreemapNode$$.prototype.$handleMouseOut$ = function $$DvtTreemapNode$$$$$handleMouseOut$$() {
  !0 !== this.$_bIsolated$ && !(0,D.$DvtAgent$isTouchDevice$$)() && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$DvtTreemapNode$$.prototype.$getDropSiteFeedback$ = function $$DvtTreemapNode$$$$$getDropSiteFeedback$$() {
  return this.$_shape$ ? new D.$DvtRect$$(this.$_view$.$getCtx$(), this.$_shape$.$getX$(), this.$_shape$.$getY$(), this.$_shape$.getWidth(), this.$_shape$.getHeight()) : null
};
D.$JSCompiler_StaticMethods__removeChildShape$$ = function $$JSCompiler_StaticMethods__removeChildShape$$$($JSCompiler_StaticMethods__removeChildShape$self$$, $childShape$$) {
  $childShape$$ && $JSCompiler_StaticMethods__removeChildShape$self$$.$_shape$.removeChild($childShape$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__isolateNode$ = function $$JSCompiler_prototypeAlias$$$$__isolateNode$$($event$$830$$) {
  this.$_bIsolated$ = !0;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___isolate$self$$inline_9243$$ = this.$_view$, $currentNavigable$$inline_9245_displayable$$inline_9246$$ = $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$getEventManager$().$getFocus$();
  $currentNavigable$$inline_9245_displayable$$inline_9246$$ && $currentNavigable$$inline_9245_displayable$$inline_9246$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$getOptions$().isolatedNode = this.getId();
  $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.dispatchEvent(new D.$DvtTreemapIsolateEvent$$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$_isolateRestoreLayout$ = !0;
  $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$_isolateRestoreLayout$ = !1;
  $currentNavigable$$inline_9245_displayable$$inline_9246$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_9243$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_9245_displayable$$inline_9246$$);
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___isolate$self$$inline_9243$$, this);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$();
  $event$$830$$ && $event$$830$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$($event$$831$$) {
  this.$_bIsolated$ = !1;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_9248$$ = this.$_view$, $restoreNode$$inline_9249$$ = $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$_isolatedNodes$.pop();
  $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$getOptions$().isolatedNode = 0 < $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$_isolatedNodes$[$JSCompiler_StaticMethods___restore$self$$inline_9248$$.$_isolatedNodes$.length - 1].getId() : null;
  var $currentNavigable$$inline_9250_id$$inline_11580$$ = $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$getEventManager$().$getFocus$();
  $currentNavigable$$inline_9250_id$$inline_11580$$ && $currentNavigable$$inline_9250_id$$inline_11580$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_9250_id$$inline_11580$$ = $restoreNode$$inline_9249$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$_navigableIdToFocus$ = $currentNavigable$$inline_9250_id$$inline_11580$$;
  $JSCompiler_StaticMethods___restore$self$$inline_9248$$.dispatchEvent(new D.$DvtTreemapIsolateEvent$$);
  $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$_isolateRestoreLayout$ = !0;
  $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_9248$$.$_isolateRestoreLayout$ = !1;
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___restore$self$$inline_9248$$, $restoreNode$$inline_9249$$);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$();
  $event$$831$$ && $event$$831$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$128$$, $x$$320$$, $y$$287$$) {
  return $target$$128$$ && $target$$128$$ instanceof D.$DvtButton$$ ? null : D.$DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$128$$, $x$$320$$, $y$$287$$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$129$$) {
  return $target$$129$$ && $target$$129$$ instanceof D.$DvtButton$$ ? null : D.$DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$129$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$130$$) {
  return $target$$130$$ && $target$$130$$ instanceof D.$DvtButton$$ ? (0,D.$DvtBundle$getTranslation$$)(this.$_view$.$getOptions$(), this.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", "DvtTreemapBundle", this.$_bIsolated$ ? "RESTORE" : "ISOLATE") : null
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $options$$321$$ = this.$_view$.$getOptions$(), $states$$20$$ = [];
  this.$isSelectable$() && $states$$20$$.push((0,D.$DvtBundle$getTranslation$$)($options$$321$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", "DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$_bIsolated$ && $states$$20$$.push((0,D.$DvtBundle$getTranslation$$)($options$$321$$, "stateIsolated", "DvtUtilBundle", "STATE_ISOLATED"));
  this.$isDrillReplaceEnabled$() && $states$$20$$.push((0,D.$DvtBundle$getTranslation$$)($options$$321$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtBaseTreemapLayout$$ = function $$DvtBaseTreemapLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemapLayout$$, D.$DvtObj$$, "DvtBaseTreemapLayout");
D.$DvtBaseTreemapLayout$$.prototype.Init = function $$DvtBaseTreemapLayout$$$$Init$() {
  this.$_zIndex$ = 0
};
D.$DvtBaseTreemapLayout$$.prototype.$layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_setNodeBounds$$ = function $$JSCompiler_StaticMethods_setNodeBounds$$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$, $availBounds_node$$340$$, $x$$308$$, $y$$275$$, $width$$188$$, $height$$167$$, $isRoot$$2_xx$$64$$) {
  $availBounds_node$$340$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$.$_zIndex$++;
  if(!$isRoot$$2_xx$$64$$ || !$availBounds_node$$340$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$.$getGapSize$($availBounds_node$$340$$.$_view$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)($availBounds_node$$340$$));
    $isRoot$$2_xx$$64$$ = window.Math.round($x$$308$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$);
    var $yy$$64$$ = window.Math.round($y$$275$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$);
    if($availBounds_node$$340$$ = $availBounds_node$$340$$.$setLayoutParams$($isRoot$$2_xx$$64$$, $yy$$64$$, window.Math.round($x$$308$$ + $width$$188$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$) - $isRoot$$2_xx$$64$$, window.Math.round($y$$275$$ + $height$$167$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$) - $yy$$64$$)) {
      return $availBounds_node$$340$$
    }
  }
  return new D.$DvtRectangle$$($x$$308$$, $y$$275$$, $width$$188$$, $height$$167$$)
};
D.$DvtBaseTreemapLayout$$.prototype.$getGapSize$ = function $$DvtBaseTreemapLayout$$$$$getGapSize$$($view$$64$$, $depth$$27$$) {
  var $groupGaps$$ = $view$$64$$.$getOptions$().groupGaps;
  return"outer" == $groupGaps$$ ? 1 == $depth$$27$$ && 2 <= $view$$64$$.$_maxDepth$ ? 3 : 0 : "all" == $groupGaps$$ ? $depth$$27$$ < $view$$64$$.$_maxDepth$ ? 3 : 0 : 0
};
D.$DvtSquarifyingLayout$$ = function $$DvtSquarifyingLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtSquarifyingLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSquarifyingLayout");
D.$DvtSquarifyingLayout$$.prototype.$layout$ = function $$DvtSquarifyingLayout$$$$$layout$$($view$$67$$, $root$$37$$, $x$$311$$, $y$$278$$, $width$$191$$, $height$$170$$, $bShowRoot$$2$$) {
  this.$_layout$($root$$37$$, $x$$311$$, $y$$278$$, $width$$191$$, $height$$170$$, $bShowRoot$$2$$ ? !1 : !0)
};
D.$DvtSquarifyingLayout$$.prototype.$_layout$ = function $$DvtSquarifyingLayout$$$$$_layout$$($children$$26_node$$342$$, $availBounds$$2_x$$312$$, $children$$inline_9157_w$$70_y$$279$$, $i$$inline_9160_width$$192$$, $area$$inline_9158_factor$$inline_9161_height$$171$$, $child$$inline_9162_isRoot$$6_total$$inline_9159$$) {
  $availBounds$$2_x$$312$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$26_node$$342$$, $availBounds$$2_x$$312$$, $children$$inline_9157_w$$70_y$$279$$, $i$$inline_9160_width$$192$$, $area$$inline_9158_factor$$inline_9161_height$$171$$, $child$$inline_9162_isRoot$$6_total$$inline_9159$$);
  $children$$26_node$$342$$ = $children$$26_node$$342$$.$getChildNodes$();
  if(null != $children$$26_node$$342$$ && 0 < $children$$26_node$$342$$.length) {
    $children$$inline_9157_w$$70_y$$279$$ = $children$$26_node$$342$$;
    $area$$inline_9158_factor$$inline_9161_height$$171$$ = $availBounds$$2_x$$312$$.$w$ * $availBounds$$2_x$$312$$.$h$;
    for($i$$inline_9160_width$$192$$ = $i$$inline_9160_width$$192$$ = $child$$inline_9162_isRoot$$6_total$$inline_9159$$ = 0;$i$$inline_9160_width$$192$$ < $children$$inline_9157_w$$70_y$$279$$.length;$i$$inline_9160_width$$192$$++) {
      $child$$inline_9162_isRoot$$6_total$$inline_9159$$ += 0 < $children$$inline_9157_w$$70_y$$279$$[$i$$inline_9160_width$$192$$].$getSize$() ? $children$$inline_9157_w$$70_y$$279$$[$i$$inline_9160_width$$192$$].$getSize$() : 0
    }
    $area$$inline_9158_factor$$inline_9161_height$$171$$ = 0 == $area$$inline_9158_factor$$inline_9161_height$$171$$ ? 0 : $area$$inline_9158_factor$$inline_9161_height$$171$$ / $child$$inline_9162_isRoot$$6_total$$inline_9159$$;
    for($i$$inline_9160_width$$192$$ = 0;$i$$inline_9160_width$$192$$ < $children$$inline_9157_w$$70_y$$279$$.length;$i$$inline_9160_width$$192$$++) {
      $child$$inline_9162_isRoot$$6_total$$inline_9159$$ = $children$$inline_9157_w$$70_y$$279$$[$i$$inline_9160_width$$192$$], $child$$inline_9162_isRoot$$6_total$$inline_9159$$.$__pxSize$ = $child$$inline_9162_isRoot$$6_total$$inline_9159$$.$getSize$() * $area$$inline_9158_factor$$inline_9161_height$$171$$
    }
    $children$$26_node$$342$$ = $children$$26_node$$342$$.slice(0).sort(function($children$$26_node$$342$$, $availBounds$$2_x$$312$$) {
      return $children$$26_node$$342$$.$getSize$() - $availBounds$$2_x$$312$$.$getSize$()
    });
    $children$$inline_9157_w$$70_y$$279$$ = window.Math.min($availBounds$$2_x$$312$$.$w$, $availBounds$$2_x$$312$$.$h$);
    (0,D.$JSCompiler_StaticMethods__squarify$$)(this, $children$$26_node$$342$$, $children$$inline_9157_w$$70_y$$279$$, new D.$DvtRectangle$$($availBounds$$2_x$$312$$.x, $availBounds$$2_x$$312$$.y, $availBounds$$2_x$$312$$.$w$, $availBounds$$2_x$$312$$.$h$))
  }
};
D.$JSCompiler_StaticMethods__squarify$$ = function $$JSCompiler_StaticMethods__squarify$$$($JSCompiler_StaticMethods__squarify$self$$, $children$$28$$, $w$$71$$, $r$$95$$) {
  var $row$$56$$ = [], $worst$$ = window.Infinity;
  if(null == $children$$28$$ || 0 == $children$$28$$.length) {
    (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$56$$, $w$$71$$, $r$$95$$)
  }else {
    for(;0 < $children$$28$$.length;) {
      var $c$$52$$ = $children$$28$$.pop();
      if(0 > $c$$52$$.$__pxSize$) {
        (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$56$$, $w$$71$$, $r$$95$$);
        break
      }
      $row$$56$$.push($c$$52$$);
      var $min$$inline_9167_newWorst$$, $areas$$inline_9164_s2$$inline_9170$$ = $row$$56$$, $w$$inline_9165_w2$$inline_9171$$ = $w$$71$$, $total$$inline_9166$$ = 0;
      $min$$inline_9167_newWorst$$ = window.Infinity;
      for(var $max$$inline_9168$$ = -window.Infinity, $i$$inline_9169$$ = 0;$i$$inline_9169$$ < $areas$$inline_9164_s2$$inline_9170$$.length;$i$$inline_9169$$++) {
        $total$$inline_9166$$ += $areas$$inline_9164_s2$$inline_9170$$[$i$$inline_9169$$].$__pxSize$, $min$$inline_9167_newWorst$$ = window.Math.min($min$$inline_9167_newWorst$$, $areas$$inline_9164_s2$$inline_9170$$[$i$$inline_9169$$].$__pxSize$), $max$$inline_9168$$ = window.Math.max($max$$inline_9168$$, $areas$$inline_9164_s2$$inline_9170$$[$i$$inline_9169$$].$__pxSize$)
      }
      $areas$$inline_9164_s2$$inline_9170$$ = $total$$inline_9166$$ * $total$$inline_9166$$;
      $w$$inline_9165_w2$$inline_9171$$ *= $w$$inline_9165_w2$$inline_9171$$;
      $min$$inline_9167_newWorst$$ = window.Math.max($w$$inline_9165_w2$$inline_9171$$ * $max$$inline_9168$$ / $areas$$inline_9164_s2$$inline_9170$$, $areas$$inline_9164_s2$$inline_9170$$ / ($w$$inline_9165_w2$$inline_9171$$ * $min$$inline_9167_newWorst$$));
      if($min$$inline_9167_newWorst$$ > $worst$$) {
        $children$$28$$.push($c$$52$$);
        $row$$56$$.pop();
        $r$$95$$ = (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$56$$, $w$$71$$, $r$$95$$);
        (0,D.$JSCompiler_StaticMethods__squarify$$)($JSCompiler_StaticMethods__squarify$self$$, $children$$28$$, window.Math.min($r$$95$$.$w$, $r$$95$$.$h$), $r$$95$$);
        break
      }else {
        if(0 == $children$$28$$.length) {
          (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$56$$, $w$$71$$, $r$$95$$);
          break
        }else {
          $worst$$ = $min$$inline_9167_newWorst$$
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods__layoutRow$$ = function $$JSCompiler_StaticMethods__layoutRow$$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$57$$, $w$$73_width$$193$$, $r$$96$$) {
  var $height$$172_total$$11$$ = 0, $i$$923$$;
  for($i$$923$$ = 0;$i$$923$$ < $row$$57$$.length;$i$$923$$++) {
    $height$$172_total$$11$$ += $row$$57$$[$i$$923$$].$__pxSize$
  }
  var $x$$313$$ = $r$$96$$.x, $y$$280$$ = $r$$96$$.y;
  if($w$$73_width$$193$$ == $r$$96$$.$w$) {
    $height$$172_total$$11$$ = 0 == $w$$73_width$$193$$ ? 0 : $height$$172_total$$11$$ / $w$$73_width$$193$$;
    for($i$$923$$ = 0;$i$$923$$ < $row$$57$$.length;$i$$923$$++) {
      $w$$73_width$$193$$ = $row$$57$$[$i$$923$$].$__pxSize$ / $height$$172_total$$11$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$57$$[$i$$923$$], $x$$313$$, $y$$280$$, $w$$73_width$$193$$, $height$$172_total$$11$$, !1), $x$$313$$ += $w$$73_width$$193$$
    }
    return new D.$DvtRectangle$$($r$$96$$.x, $r$$96$$.y + $height$$172_total$$11$$, $r$$96$$.$w$, $r$$96$$.$h$ - $height$$172_total$$11$$)
  }
  $w$$73_width$$193$$ = 0 == $w$$73_width$$193$$ ? 0 : $height$$172_total$$11$$ / $w$$73_width$$193$$;
  for($i$$923$$ = 0;$i$$923$$ < $row$$57$$.length;$i$$923$$++) {
    $height$$172_total$$11$$ = $row$$57$$[$i$$923$$].$__pxSize$ / $w$$73_width$$193$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$57$$[$i$$923$$], $x$$313$$, $y$$280$$, $w$$73_width$$193$$, $height$$172_total$$11$$, !1), $y$$280$$ += $height$$172_total$$11$$
  }
  return new D.$DvtRectangle$$($r$$96$$.x + $w$$73_width$$193$$, $r$$96$$.y, $r$$96$$.$w$ - $w$$73_width$$193$$, $r$$96$$.$h$)
};
D.$DvtSliceAndDiceLayout$$ = function $$DvtSliceAndDiceLayout$$$($isHoriz$$18$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$18$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSliceAndDiceLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSliceAndDiceLayout");
D.$DvtSliceAndDiceLayout$$.prototype.$layout$ = function $$DvtSliceAndDiceLayout$$$$$layout$$($view$$65$$, $root$$36$$, $x$$309$$, $y$$276$$, $width$$189$$, $height$$168$$, $bShowRoot$$1$$) {
  this.$_layout$(this.$_isHoriz$, $view$$65$$, $root$$36$$, $x$$309$$, $y$$276$$, $width$$189$$, $height$$168$$, $bShowRoot$$1$$ ? !1 : !0)
};
D.$DvtSliceAndDiceLayout$$.prototype.$_layout$ = function $$DvtSliceAndDiceLayout$$$$$_layout$$($isHoriz$$19$$, $view$$66$$, $children$$25_node$$341$$, $availBounds$$1_x$$310$$, $childX$$1_y$$277$$, $childY$$1_width$$190$$, $childWidth_height$$169$$, $childHeight_isRoot$$4$$) {
  var $child$$81_options$$317$$ = $view$$66$$.$getOptions$();
  $availBounds$$1_x$$310$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$25_node$$341$$, $availBounds$$1_x$$310$$, $childX$$1_y$$277$$, $childY$$1_width$$190$$, $childWidth_height$$169$$, $childHeight_isRoot$$4$$);
  $children$$25_node$$341$$ = $children$$25_node$$341$$.$getChildNodes$();
  if(null != $children$$25_node$$341$$) {
    $childX$$1_y$$277$$ = $availBounds$$1_x$$310$$.x;
    $childY$$1_width$$190$$ = $availBounds$$1_x$$310$$.y;
    $childWidth_height$$169$$ = $availBounds$$1_x$$310$$.$w$;
    $childHeight_isRoot$$4$$ = $availBounds$$1_x$$310$$.$h$;
    var $total$$8$$ = 0, $i$$920$$;
    for($i$$920$$ = 0;$i$$920$$ < $children$$25_node$$341$$.length;$i$$920$$++) {
      $total$$8$$ += 0 < $children$$25_node$$341$$[$i$$920$$].$getSize$() ? $children$$25_node$$341$$[$i$$920$$].$getSize$() : 0
    }
    "on" == $child$$81_options$$317$$.sorting && ($children$$25_node$$341$$ = $children$$25_node$$341$$.slice(0), $children$$25_node$$341$$.sort(function($isHoriz$$19$$, $view$$66$$) {
      return $view$$66$$.$getSize$() - $isHoriz$$19$$.$getSize$()
    }));
    $isHoriz$$19$$ && (0,D.$DvtAgent$isRightToLeft$$)($view$$66$$.$getCtx$()) && ($children$$25_node$$341$$ = $children$$25_node$$341$$.slice(0).reverse());
    for($i$$920$$ = 0;$i$$920$$ < $children$$25_node$$341$$.length;$i$$920$$++) {
      if($child$$81_options$$317$$ = $children$$25_node$$341$$[$i$$920$$], !(0 >= $child$$81_options$$317$$.$getSize$())) {
        var $sizeRatio$$1$$ = $child$$81_options$$317$$.$getSize$() / $total$$8$$;
        $isHoriz$$19$$ ? $childWidth_height$$169$$ = $availBounds$$1_x$$310$$.$w$ * $sizeRatio$$1$$ : $childHeight_isRoot$$4$$ = $availBounds$$1_x$$310$$.$h$ * $sizeRatio$$1$$;
        this.$_layout$(!$isHoriz$$19$$, $view$$66$$, $child$$81_options$$317$$, $childX$$1_y$$277$$, $childY$$1_width$$190$$, $childWidth_height$$169$$, $childHeight_isRoot$$4$$, !1);
        $isHoriz$$19$$ ? $childX$$1_y$$277$$ += $childWidth_height$$169$$ : $childY$$1_width$$190$$ += $childHeight_isRoot$$4$$
      }
    }
  }
};
D.$DvtTreemapIsolateEvent$$ = function $$DvtTreemapIsolateEvent$$$($id$$325$$) {
  this.Init("treemapIsolate");
  this.$_id$ = $id$$325$$ ? $id$$325$$ : null
};
(0,D.$goog$exportPath_$$)("DvtTreemapIsolateEvent", D.$DvtTreemapIsolateEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapIsolateEvent$$, D.$DvtBaseComponentEvent$$, "DvtTreemapIsolateEvent");
D.$DvtTreemapIsolateEvent$$.TYPE = "treemapIsolate";
D.$DvtTreemapIsolateEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtTreemapIsolateEvent$$.prototype.getId = D.$DvtTreemapIsolateEvent$$.prototype.getId;
D.$DvtTreemapKeyboardHandler$$ = function $$DvtTreemapKeyboardHandler$$$($manager$$37$$) {
  this.Init($manager$$37$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapKeyboardHandler$$, D.$DvtBaseTreeKeyboardHandler$$, "DvtTreemapKeyboardHandler");
D.$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$828_keyCode$$55$$) {
  var $isNavigable$$1$$ = D.$DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$828_keyCode$$55$$);
  if(!$isNavigable$$1$$ && ($event$$828_keyCode$$55$$ = $event$$828_keyCode$$55$$.keyCode, 219 == $event$$828_keyCode$$55$$ || 221 == $event$$828_keyCode$$55$$)) {
    $isNavigable$$1$$ = !0
  }
  return $isNavigable$$1$$
};
D.$DvtTreemapEventManager$$ = function $$DvtTreemapEventManager$$$($view$$69$$, $context$$660$$, $callback$$184$$, $callbackObj$$129$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$69$$, $context$$660$$, $callback$$184$$, $callbackObj$$129$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtTreemapEventManager");
D.$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$827$$) {
  var $eventConsumed$$9$$ = !0;
  if(13 == $event$$827$$.keyCode && $event$$827$$.ctrlKey) {
    var $node$$347$$ = this.$getFocus$();
    $node$$347$$.$isIsolateEnabled$() && ($node$$347$$.$_bIsolated$ ? $node$$347$$.$__restoreNode$() : $node$$347$$.$__isolateNode$());
    (0,D.$DvtEventManager$consumeEvent$$)($event$$827$$)
  }else {
    $eventConsumed$$9$$ = D.$DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$827$$)
  }
  return $eventConsumed$$9$$
};
D.$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = (0,D.$JSCompiler_returnArg$$)(!1);
(0,D.$DvtBundle$addDefaultStrings$$)("DvtTreemapBundle", {COLOR:"Color", ISOLATE:"Isolate", OTHER:"Other", RESTORE:"Restore", SIZE:"Size"});
D.$DvtTreemapDefaults$$ = function $$DvtTreemapDefaults$$$() {
  this.Init({skyros:D.$DvtTreemapDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtTreemapDefaults");
D.$DvtTreemapDefaults$VERSION_1$$ = {groupGaps:"outer", nodeDefaults:{header:{backgroundColor:"#FFFFFF", borderColor:"#d6dfe6", hoverBackgroundColor:"#ebeced", hoverOuterColor:"#ebeced", hoverInnerColor:"#d6d7d8", isolate:"auto", labelHalign:"start", labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), selectedBackgroundColor:"#dae9f5", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000", useNodeColor:"off", _hoverLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), 
_selectedLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), _drillableLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"), _drillableHoverLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"), _drillableSelectedLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;")}, 
hoverColor:"#ebeced", groupLabelDisplay:"header", labelDisplay:"node", labelHalign:"center", labelValign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}};

  return D;
});