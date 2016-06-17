/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtNBox$$ = function $$DvtNBox$$$($context$$463$$, $callback$$121$$, $callbackObj$$72$$) {
  this.Init($context$$463$$, $callback$$121$$, $callbackObj$$72$$)
};
(0,D.$goog$exportPath_$$)("DvtNBox", D.$DvtNBox$$);
D.$DvtObj$$.$createSubclass$(D.$DvtNBox$$, D.$DvtBaseComponent$$, "DvtNBox");
D.$DvtNBox$$.newInstance = function $$DvtNBox$$$newInstance$($context$$464$$, $callback$$122$$, $callbackObj$$73$$) {
  return new D.$DvtNBox$$($context$$464$$, $callback$$122$$, $callbackObj$$73$$)
};
D.$DvtNBox$$.getDefaults = function $$DvtNBox$$$getDefaults$($skin$$17$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtNBoxDefaults$$, $skin$$17$$)
};
D.$DvtNBox$$.prototype.Init = function $$DvtNBox$$$$Init$($context$$465$$, $callback$$123$$, $callbackObj$$74$$) {
  D.$DvtNBox$$.$superclass$.Init.call(this, $context$$465$$, $callback$$123$$, $callbackObj$$74$$);
  this.$Defaults$ = new D.$DvtNBoxDefaults$$;
  this.$EventManager$ = new D.$DvtNBoxEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$465$$);
  this.$_dropTarget$ = new D.$DvtNBoxDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$EventManager$, this.$_dragSource$);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("nbox1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$legend$ = this.$_animation$ = null;
  this.$_peers$ = [];
  this.$_animationAllowed$ = !0
};
D.$DvtNBox$$.prototype.$SetOptions$ = function $$DvtNBox$$$$$SetOptions$$($options$$195_selectionMode$$8$$) {
  $options$$195_selectionMode$$8$$ || ($options$$195_selectionMode$$8$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this));
  $options$$195_selectionMode$$8$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$195_selectionMode$$8$$), D.$DvtNBoxDataUtils$$.$processDataObject$(this), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$[D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$] = "none", this.$Options$[D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$] = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  this.$_displayables$ = [];
  $options$$195_selectionMode$$8$$ = this.$Options$[D.$DvtNBoxConstants$$.$SELECTION_MODE$];
  this.$_selectionHandler$ = "single" == $options$$195_selectionMode$$8$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$195_selectionMode$$8$$ ? new D.$DvtSelectionHandler$$("m") : null;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$)
};
D.$DvtNBox$$.prototype.$render$ = function $$DvtNBox$$$$$render$$($options$$196$$, $container$$139_width$$115$$, $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$) {
  var $ah$$2_animationOnDataChange$$2$$ = D.$DvtNBoxStyleUtils$$.$getAnimationOnDataChange$(this), $oldNBox$$ = null;
  this.$Options$ && "none" !== $ah$$2_animationOnDataChange$$2$$ && ($oldNBox$$ = {options:this.$Options$, getOptions:(0,D.$JSCompiler_get$$)("options"), displayables:this.$_displayables$, getDisplayables:(0,D.$JSCompiler_get$$)("displayables"), id:this.getId(), getId:(0,D.$JSCompiler_get$$)("id")}, $oldNBox$$.$getOptions$ = $oldNBox$$.getOptions, $oldNBox$$.$getDisplayables$ = $oldNBox$$.getDisplayables, $oldNBox$$.getId = $oldNBox$$.getId);
  this.$__cleanUp$();
  this.$SetOptions$($options$$196$$);
  !(0,window.isNaN)($container$$139_width$$115$$) && !(0,window.isNaN)($bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$) && (this.$Width$ = $container$$139_width$$115$$, this.$Height$ = $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$);
  $container$$139_width$$115$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$($container$$139_width$$115$$);
  D.$DvtNBoxRenderer$$.$render$(this, $container$$139_width$$115$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ = [this];
  var $animationOnDisplay$$2_legend$$27_legendData$$3$$ = D.$DvtNBoxDataUtils$$.$getLegend$(this);
  if($animationOnDisplay$$2_legend$$27_legendData$$3$$ && $animationOnDisplay$$2_legend$$27_legendData$$3$$.sections) {
    var $animationDuration$$8_panelDrawer$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $animationOnDisplay$$2_legend$$27_legendData$$3$$, "panelDrawer");
    $animationDuration$$8_panelDrawer$$2$$ && ($bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$.push($animationDuration$$8_panelDrawer$$2$$), $animationDuration$$8_panelDrawer$$2$$.$isDisclosed$() && ($animationOnDisplay$$2_legend$$27_legendData$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $animationOnDisplay$$2_legend$$27_legendData$$3$$, "legend"), $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$.push($animationOnDisplay$$2_legend$$27_legendData$$3$$)))
  }
  (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$);
  $options$$196$$ && (D.$DvtNBoxDataUtils$$.$getDrawer$(this) && D.$DvtNBoxDataUtils$$.$getGrouping$(this)) && ($bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, D.$DvtNBoxDataUtils$$.$getDrawer$(this)), this.$EventManager$.$setFocus$($bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$), this.$EventManager$.$setFocused$(!1));
  this.$_updateKeyboardFocusEffect$();
  this.$_animation$ && (this.$_animationStopped$ = !0, this.$_animation$.stop());
  var $animationOnDisplay$$2_legend$$27_legendData$$3$$ = D.$DvtNBoxStyleUtils$$.$getAnimationOnDisplay$(this), $animationDuration$$8_panelDrawer$$2$$ = D.$DvtNBoxStyleUtils$$.$getAnimationDuration$(this), $bounds$$137$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ = !1;
  this.$_container$ ? "none" != $ah$$2_animationOnDataChange$$2$$ && $options$$196$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $ah$$2_animationOnDataChange$$2$$, this.$_container$, $container$$139_width$$115$$, $bounds$$137$$, $animationDuration$$8_panelDrawer$$2$$)) ? $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ = !0 : (this.$_deleteContainer$ = new D.$DvtContainer$$(this.$getCtx$(), "DeleteContainer"), this.$addChild$(this.$_deleteContainer$), 
  $ah$$2_animationOnDataChange$$2$$ = new D.$DvtNBoxDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$, $oldNBox$$, this), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$2_animationOnDataChange$$2$$, [$oldNBox$$], [this]), this.$_animation$ = $ah$$2_animationOnDataChange$$2$$.$getAnimation$())) : "none" !== $animationOnDisplay$$2_legend$$27_legendData$$3$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), $animationOnDisplay$$2_legend$$27_legendData$$3$$, 
  $container$$139_width$$115$$, $bounds$$137$$, $animationDuration$$8_panelDrawer$$2$$));
  this.$_animation$ && (this.$setMouseEnabled$(!1), (0,D.$DvtPlayable$appendOnEnd$$)(this.$_animation$, this.$_onAnimationEnd$, this), (0,D.$DvtAgent$isPlatformIE$$)() && 12 <= (0,D.$DvtAgent$getVersion$$)() && (0,D.$DvtPlayable$appendOnEnd$$)(this.$_animation$, function() {
    this.$_animationAllowed$ = !1;
    this.$render$($options$$196$$);
    this.$_animationAllowed$ = !0
  }, this), this.$_animation$.play());
  $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$());
  this.$_container$ = $container$$139_width$$115$$;
  this.$UpdateAriaAttributes$()
};
D.$DvtNBox$$.prototype.render = D.$DvtNBox$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = null);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$());
  this.$_deleteContainer$ = null;
  this.$_animationStopped$ = !1;
  this.$_animation$ = null;
  this.$setMouseEnabled$(!0)
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$21$$) {
  return new D.$DvtNBoxKeyboardHandler$$($manager$$21$$, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_container$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$() {
  var $navigable$$16$$ = this.$EventManager$.$getFocus$(), $isShowingKeyboardFocusEffect$$ = !1;
  if($navigable$$16$$) {
    var $newNavigable$$, $isShowingKeyboardFocusEffect$$ = $navigable$$16$$.$isShowingKeyboardFocusEffect$();
    $navigable$$16$$.$getKeyboardFocusDisplayable$ && ($newNavigable$$ = $navigable$$16$$.$getKeyboardFocusDisplayable$());
    $newNavigable$$ && $isShowingKeyboardFocusEffect$$ && $newNavigable$$.$showKeyboardFocusEffect$();
    this.$EventManager$.$setFocus$($newNavigable$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$560$$) {
  var $disclosure_type$$228$$ = $event$$560$$.$getType$(), $options$$197$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this);
  $disclosure_type$$228$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $disclosure_type$$228$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ ? $event$$560$$ = this.$_processHideShowEvent$($event$$560$$) : "categoryRollOver" == $disclosure_type$$228$$ || "categoryRollOut" == $disclosure_type$$228$$ ? $event$$560$$ = this.$_processRolloverEvent$($event$$560$$) : "selection" == $disclosure_type$$228$$ ? $event$$560$$ = this.$_processSelectionEvent$($event$$560$$) : $options$$197$$._legend && "dvtPanelDrawerEvent" == 
  $disclosure_type$$228$$ && ($disclosure_type$$228$$ = "hide" == $event$$560$$.$getSubType$() ? "undisclosed" : "disclosed", $event$$560$$ = new D.$DvtSetPropertyEvent$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$560$$, D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$, $disclosure_type$$228$$), $options$$197$$[D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$] = $disclosure_type$$228$$, this.$render$($options$$197$$));
  $event$$560$$ && this.dispatchEvent($event$$560$$)
};
D.$JSCompiler_prototypeAlias$$.$_processHideShowEvent$ = function $$JSCompiler_prototypeAlias$$$$_processHideShowEvent$$($event$$561$$) {
  var $options$$198$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this), $hiddenCategories$$10$$ = $options$$198$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$];
  $hiddenCategories$$10$$ || ($hiddenCategories$$10$$ = []);
  var $categoryIndex$$2$$ = D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$10$$, $event$$561$$.$_category$);
  $event$$561$$.$getType$() == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ && -1 == $categoryIndex$$2$$ && $hiddenCategories$$10$$.push($event$$561$$.$_category$);
  $event$$561$$.$getType$() == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ && -1 != $categoryIndex$$2$$ && $hiddenCategories$$10$$.splice($categoryIndex$$2$$, 1);
  0 == $hiddenCategories$$10$$.length && ($hiddenCategories$$10$$ = null);
  $event$$561$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$561$$, D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$, $hiddenCategories$$10$$);
  $options$$198$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$] = $hiddenCategories$$10$$;
  this.$render$($options$$198$$);
  return $event$$561$$
};
D.$JSCompiler_prototypeAlias$$.$_processRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$_processRolloverEvent$$($event$$562$$) {
  this.$_processHighlighting$($event$$562$$.categories);
  return $event$$562$$
};
D.$JSCompiler_prototypeAlias$$.$_processSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processSelectionEvent$$($event$$563_selectedMap$$) {
  var $eventSelection_objects$$3_selection$$29$$ = $event$$563_selectedMap$$.getSelection(), $i$$713_selectedItems$$ = null;
  if($eventSelection_objects$$3_selection$$29$$) {
    $event$$563_selectedMap$$ = {};
    for($i$$713_selectedItems$$ = 0;$i$$713_selectedItems$$ < $eventSelection_objects$$3_selection$$29$$.length;$i$$713_selectedItems$$++) {
      $event$$563_selectedMap$$[$eventSelection_objects$$3_selection$$29$$[$i$$713_selectedItems$$]] = !0
    }
    var $eventSelection_objects$$3_selection$$29$$ = this.$getObjects$(), $drawer$$1$$ = null;
    if(D.$DvtNBoxDataUtils$$.$getGrouping$(this)) {
      for($i$$713_selectedItems$$ = 0;$i$$713_selectedItems$$ < $eventSelection_objects$$3_selection$$29$$.length;$i$$713_selectedItems$$++) {
        if($eventSelection_objects$$3_selection$$29$$[$i$$713_selectedItems$$] instanceof D.$DvtNBoxCategoryNode$$) {
          if($event$$563_selectedMap$$[$eventSelection_objects$$3_selection$$29$$[$i$$713_selectedItems$$].getId()]) {
            $event$$563_selectedMap$$[$eventSelection_objects$$3_selection$$29$$[$i$$713_selectedItems$$].getId()] = !1;
            for(var $nodeIndices$$1$$ = $eventSelection_objects$$3_selection$$29$$[$i$$713_selectedItems$$].getData().nodeIndices, $j$$93$$ = 0;$j$$93$$ < $nodeIndices$$1$$.length;$j$$93$$++) {
              var $node$$252$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$1$$[$j$$93$$]);
              $event$$563_selectedMap$$[$node$$252$$[D.$DvtNBoxConstants$$.ID]] = !0
            }
          }
        }else {
          $eventSelection_objects$$3_selection$$29$$[$i$$713_selectedItems$$] instanceof D.$DvtNBoxDrawer$$ && ($drawer$$1$$ = $eventSelection_objects$$3_selection$$29$$[$i$$713_selectedItems$$])
        }
      }
    }
    var $eventSelection_objects$$3_selection$$29$$ = [], $i$$713_selectedItems$$ = [], $id$$226$$;
    for($id$$226$$ in $event$$563_selectedMap$$) {
      $event$$563_selectedMap$$[$id$$226$$] && ($eventSelection_objects$$3_selection$$29$$.push($id$$226$$), $i$$713_selectedItems$$.push($id$$226$$))
    }
    $event$$563_selectedMap$$ = new D.$DvtSelectionEvent$$($eventSelection_objects$$3_selection$$29$$)
  }
  D.$DvtNBoxDataUtils$$.$setSelectedItems$(this, $i$$713_selectedItems$$);
  $drawer$$1$$ && $drawer$$1$$.$UpdateAccessibilityAttributes$();
  return $event$$563_selectedMap$$
};
D.$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$25$$) {
  this.$_peers$.push($peer$$25$$)
};
D.$JSCompiler_prototypeAlias$$.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? !0 : !1
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$19$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$19$$] : null
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$7$$, $oldNBox$$1$$) {
  D.$DvtNBoxRenderer$$.$animateUpdate$($animationHandler$$7$$, $oldNBox$$1$$, this)
};
D.$JSCompiler_StaticMethods_getSanitizedOptions$$ = function $$JSCompiler_StaticMethods_getSanitizedOptions$$$($JSCompiler_StaticMethods_getSanitizedOptions$self$$) {
  return D.$DvtJSONUtils$$.$clone$($JSCompiler_StaticMethods_getSanitizedOptions$self$$.$getOptions$(), function($JSCompiler_StaticMethods_getSanitizedOptions$self$$) {
    return 0 != $JSCompiler_StaticMethods_getSanitizedOptions$self$$.indexOf("__")
  })
};
D.$DvtNBox$$.prototype.$getSubcomponentStyles$ = function $$DvtNBox$$$$$getSubcomponentStyles$$() {
  return{}
};
D.$DvtNBox$$.prototype.$__isDragAvailable$ = function $$DvtNBox$$$$$__isDragAvailable$$($clientIds$$10$$) {
  return this.$_selectionHandler$ ? $clientIds$$10$$[0] : null
};
D.$DvtNBox$$.prototype.$__getDragTransferable$ = function $$DvtNBox$$$$$__getDragTransferable$$($node$$253_rowKeys$$1$$) {
  $node$$253_rowKeys$$1$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$253_rowKeys$$1$$, !1), this.$EventManager$.$fireSelectionEvent$());
  $node$$253_rowKeys$$1$$ = [];
  for(var $selectionMap$$ = {}, $selectedIds$$8_selection$$30$$ = this.$_selectionHandler$.getSelection(), $i$$714$$ = 0;$i$$714$$ < $selectedIds$$8_selection$$30$$.length;$i$$714$$++) {
    var $id$$227_item$$44$$ = $selectedIds$$8_selection$$30$$[$i$$714$$];
    if($id$$227_item$$44$$ instanceof D.$DvtNBoxNode$$) {
      $id$$227_item$$44$$ = $id$$227_item$$44$$.getData()[D.$DvtNBoxConstants$$.ID], $node$$253_rowKeys$$1$$.push($id$$227_item$$44$$), $selectionMap$$[$id$$227_item$$44$$] = !0
    }else {
      if($id$$227_item$$44$$ instanceof D.$DvtNBoxCategoryNode$$) {
        for(var $nodeIndices$$2$$ = $id$$227_item$$44$$.getData().nodeIndices, $j$$94$$ = 0;$j$$94$$ < $nodeIndices$$2$$.length;$j$$94$$++) {
          var $nodeId$$143$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$2$$[$j$$94$$])[D.$DvtNBoxConstants$$.ID];
          $node$$253_rowKeys$$1$$.push($nodeId$$143$$);
          $selectionMap$$[$nodeId$$143$$] = !0
        }
        $selectionMap$$[$id$$227_item$$44$$.getData()[D.$DvtNBoxConstants$$.ID]] = !0
      }
    }
  }
  $selectedIds$$8_selection$$30$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$_selectionHandler$);
  for($i$$714$$ = 0;$i$$714$$ < $selectedIds$$8_selection$$30$$.length;$i$$714$$++) {
    if($id$$227_item$$44$$ = $selectedIds$$8_selection$$30$$[$i$$714$$], !$selectionMap$$[$id$$227_item$$44$$]) {
      if((0,window.isNaN)(D.$DvtNBoxDataUtils$$.$getNodeIndex$(this, $id$$227_item$$44$$))) {
        if(D.$DvtNBoxDataUtils$$.$getGrouping$(this) && D.$DvtNBoxDataUtils$$.$getCategoryNode$(this, $id$$227_item$$44$$)) {
          $nodeIndices$$2$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this, $id$$227_item$$44$$).nodeIndices;
          for($j$$94$$ = 0;$j$$94$$ < $nodeIndices$$2$$.length;$j$$94$$++) {
            $nodeId$$143$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$2$$[$j$$94$$])[D.$DvtNBoxConstants$$.ID], $selectionMap$$[$nodeId$$143$$] || ($node$$253_rowKeys$$1$$.push($nodeId$$143$$), $selectionMap$$[$nodeId$$143$$] = !0)
          }
          $selectionMap$$[$id$$227_item$$44$$] = !0
        }
      }else {
        $node$$253_rowKeys$$1$$.push($id$$227_item$$44$$), $selectionMap$$[$id$$227_item$$44$$] = !0
      }
    }
  }
  return $node$$253_rowKeys$$1$$
};
D.$DvtNBox$$.prototype.$__getDragFeedback$ = function $$DvtNBox$$$$$__getDragFeedback$$() {
  return this.$_selectionHandler$.getSelection().slice(0)
};
D.$JSCompiler_StaticMethods___getCellUnderPoint$$ = function $$JSCompiler_StaticMethods___getCellUnderPoint$$$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $x$$241$$, $y$$215$$) {
  for(var $cellCount$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($JSCompiler_StaticMethods___getCellUnderPoint$self$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($JSCompiler_StaticMethods___getCellUnderPoint$self$$), $i$$715$$ = 0;$i$$715$$ < $cellCount$$;$i$$715$$++) {
    var $cell$$23$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, D.$DvtNBoxDataUtils$$.$getCell$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $i$$715$$));
    if($cell$$23$$.contains($x$$241$$, $y$$215$$)) {
      return $cell$$23$$
    }
  }
  return null
};
D.$DvtNBox$$.prototype.$__showDropSiteFeedback$ = function $$DvtNBox$$$$$__showDropSiteFeedback$$($cell$$24$$) {
  this.$_dropSiteFeedback$ && (this.$_dropSiteFeedback$.getParent().removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = null);
  $cell$$24$$ && (this.$_dropSiteFeedback$ = $cell$$24$$.$renderDropSiteFeedback$());
  return this.$_dropSiteFeedback$
};
D.$DvtNBox$$.prototype.$getAutomation$ = function $$DvtNBox$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtNBoxAutomation$$(this));
  return this.$Automation$
};
D.$DvtNBox$$.prototype.getAutomation = D.$DvtNBox$$.prototype.$getAutomation$;
D.$DvtNBox$$.prototype.$GetComponentDescription$ = function $$DvtNBox$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NBOX", D.$DvtNBoxDataUtils$$.$getColumnCount$(this) * D.$DvtNBoxDataUtils$$.$getRowCount$(this))
};
D.$DvtNBox$$.prototype.$highlight$ = function $$DvtNBox$$$$$highlight$$($categories$$18$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$18$$);
  this.$_processHighlighting$($categories$$18$$)
};
D.$DvtNBox$$.prototype.highlight = D.$DvtNBox$$.prototype.$highlight$;
D.$DvtNBox$$.prototype.$_processHighlighting$ = function $$DvtNBox$$$$$_processHighlighting$$($categories$$19$$) {
  var $displayables$$24$$ = (0,D.$JSCompiler_StaticMethods_getNodeDisplayables$$)(this), $cellCount$$1_highlightedMap$$ = D.$DvtNBoxDataUtils$$.$getRowCount$(this) * D.$DvtNBoxDataUtils$$.$getColumnCount$(this);
  this.$getOptions$().__highlightedMap = null;
  for(var $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$(this), $i$$716$$ = 0;$i$$716$$ < $cellCount$$1_highlightedMap$$;$i$$716$$++) {
    var $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$ = D.$DvtNBoxDataUtils$$.$getCell$(this, $i$$716$$), $cell$$25_i$$inline_7343_j$$95$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$);
    D.$DvtNBoxCellRenderer$$.$renderHeader$(this, $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$, $cell$$25_i$$inline_7343_j$$95$$, $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$, !1)
  }
  $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$(this);
  $cellCount$$1_highlightedMap$$ = {};
  if($JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$) {
    for(var $i$$716$$ = 0;$i$$716$$ < $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.length;$i$$716$$++) {
      $cellCount$$1_highlightedMap$$[$JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$[$i$$716$$][D.$DvtNBoxConstants$$.ID]] = !0
    }
  }
  for($i$$716$$ = 0;$i$$716$$ < $displayables$$24$$.length;$i$$716$$++) {
    if($JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = $categories$$19$$) {
      if($JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = 0 < $categories$$19$$.length) {
        a: {
          $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = $displayables$$24$$[$i$$716$$];
          if($JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ instanceof D.$DvtNBoxNode$$) {
            if($JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.$getCategories$()) {
              $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = "all" == this.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllItems$($categories$$19$$, $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.$getCategories$()) : D.$DvtArrayUtils$$.$hasAnyItem$($categories$$19$$, 
              $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.$getCategories$());
              break a
            }
          }else {
            if($JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ instanceof D.$DvtNBoxCategoryNode$$) {
              $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.getData();
              $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$ = $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.nodeIndices.length;
              for($cell$$25_i$$inline_7343_j$$95$$ = 0;$cell$$25_i$$inline_7343_j$$95$$ < $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$;$cell$$25_i$$inline_7343_j$$95$$++) {
                var $nodeData$$inline_7344$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.nodeIndices[$cell$$25_i$$inline_7343_j$$95$$]);
                if($nodeData$$inline_7344$$[D.$DvtNBoxConstants$$.$CATEGORIES$] && ("all" == this.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllItems$($categories$$19$$, $nodeData$$inline_7344$$[D.$DvtNBoxConstants$$.$CATEGORIES$]) : D.$DvtArrayUtils$$.$hasAnyItem$($categories$$19$$, $nodeData$$inline_7344$$[D.$DvtNBoxConstants$$.$CATEGORIES$]))) {
                  $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = !0;
                  break a
                }
              }
            }
          }
          $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = !1
        }
        $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = !$JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$
      }
    }
    $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ ? $displayables$$24$$[$i$$716$$].$setAlpha$(D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$(this)) : $displayables$$24$$[$i$$716$$].$setAlpha$(1);
    if($displayables$$24$$[$i$$716$$] instanceof D.$DvtNBoxCategoryNode$$) {
      $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$ = 0;
      $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$ = $displayables$$24$$[$i$$716$$].getData();
      for($cell$$25_i$$inline_7343_j$$95$$ = 0;$cell$$25_i$$inline_7343_j$$95$$ < $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.nodeIndices.length;$cell$$25_i$$inline_7343_j$$95$$++) {
        $cellCount$$1_highlightedMap$$[$JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.nodeIndices[$cell$$25_i$$inline_7343_j$$95$$]] && ($bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$ += 1)
      }
      $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.highlightedCount = $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$;
      $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$ = null != D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$(this, $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$) || null != D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this, $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$);
      D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$(this, $displayables$$24$$[$i$$716$$].getData(), $displayables$$24$$[$i$$716$$], $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.__scale, $bIndicator_categoryNodeCount$$inline_7342_cellData$$1_count$$17$$, $JSCompiler_inline_result$$392_JSCompiler_temp$$390_JSCompiler_temp$$391_cellCounts_data$$63_data$$inline_7341_disp$$inline_7340_highlightedItems$$.__gap)
    }
  }
};
D.$JSCompiler_StaticMethods_getNodeDisplayables$$ = function $$JSCompiler_StaticMethods_getNodeDisplayables$$$($JSCompiler_StaticMethods_getNodeDisplayables$self$$) {
  for(var $dataObjects$$ = [], $displayable$$67_groupInfo_nodeCount$$5$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$), $groupBehavior_i$$718$$ = 0;$groupBehavior_i$$718$$ < $displayable$$67_groupInfo_nodeCount$$5$$;$groupBehavior_i$$718$$++) {
    $dataObjects$$.push(D.$DvtNBoxDataUtils$$.$getNode$($JSCompiler_StaticMethods_getNodeDisplayables$self$$, $groupBehavior_i$$718$$))
  }
  $groupBehavior_i$$718$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($JSCompiler_StaticMethods_getNodeDisplayables$self$$);
  if($displayable$$67_groupInfo_nodeCount$$5$$ = $JSCompiler_StaticMethods_getNodeDisplayables$self$$.$getOptions$().__groups) {
    if($groupBehavior_i$$718$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for(var $cellCount$$2$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$), $groupBehavior_i$$718$$ = 0;$groupBehavior_i$$718$$ < $cellCount$$2$$;$groupBehavior_i$$718$$++) {
        var $cellGroups$$ = $displayable$$67_groupInfo_nodeCount$$5$$[$groupBehavior_i$$718$$ + ""], $displayables$$25_id$$228$$;
        for($displayables$$25_id$$228$$ in $cellGroups$$) {
          $dataObjects$$.push($cellGroups$$[$displayables$$25_id$$228$$])
        }
      }
    }else {
      for($displayables$$25_id$$228$$ in $displayable$$67_groupInfo_nodeCount$$5$$) {
        $dataObjects$$.push($displayable$$67_groupInfo_nodeCount$$5$$[$displayables$$25_id$$228$$])
      }
    }
  }
  $displayables$$25_id$$228$$ = [];
  for($groupBehavior_i$$718$$ = 0;$groupBehavior_i$$718$$ < $dataObjects$$.length;$groupBehavior_i$$718$$++) {
    ($displayable$$67_groupInfo_nodeCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods_getNodeDisplayables$self$$, $dataObjects$$[$groupBehavior_i$$718$$])) && $displayables$$25_id$$228$$.push($displayable$$67_groupInfo_nodeCount$$5$$)
  }
  return $displayables$$25_id$$228$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($mouseX$$31$$, $mouseY$$31$$, $clientIds$$14$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$32$$, $mouseY$$32$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$32$$, $mouseY$$32$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$33$$, $mouseY$$33$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$33$$, $mouseY$$33$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$34$$, $mouseY$$34$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$34$$, $mouseY$$34$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$35$$, $mouseY$$35$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$35$$, $mouseY$$35$$)
};
D.$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$3$$, $yOffset$$5$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$3$$, $yOffset$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
D.$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
D.$DvtNBox$$.prototype.$acceptDrag$ = function $$DvtNBox$$$$$acceptDrag$$($mouseX$$36$$, $mouseY$$36$$, $clientIds$$15$$) {
  return this.$_dropTarget$.$acceptDrag$($mouseX$$36$$, $mouseY$$36$$, $clientIds$$15$$)
};
D.$DvtNBox$$.prototype.$getDropSite$ = function $$DvtNBox$$$$$getDropSite$$($mouseX$$37$$, $mouseY$$37$$) {
  return this.$_dropTarget$.$getDropSite$($mouseX$$37$$, $mouseY$$37$$)
};
D.$DvtNBoxConstants$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxConstants$$, D.$DvtObj$$, "DvtNBoxConstants");
D.$DvtNBoxConstants$$.$COLUMN$ = "column";
D.$DvtNBoxConstants$$.$COLUMNS$ = "columns";
D.$DvtNBoxConstants$$.$COLUMNS_TITLE$ = "columnsTitle";
D.$DvtNBoxConstants$$.$COLUMNS_TITLE_STYLE$ = "columnsTitleStyle";
D.$DvtNBoxConstants$$.$COLUMN_LABEL_STYLE$ = "columnLabelStyle";
D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$ = "maximizedColumn";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.MAXIMIZED_COLUMN", D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$);
D.$DvtNBoxConstants$$.$ROW$ = "row";
D.$DvtNBoxConstants$$.$ROWS$ = "rows";
D.$DvtNBoxConstants$$.$ROWS_TITLE$ = "rowsTitle";
D.$DvtNBoxConstants$$.$ROWS_TITLE_STYLE$ = "rowsTitleStyle";
D.$DvtNBoxConstants$$.$ROW_LABEL_STYLE$ = "rowLabelStyle";
D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$ = "maximizedRow";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.MAXIMIZED_ROW", D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$);
D.$DvtNBoxConstants$$.$CELL$ = "cell";
D.$DvtNBoxConstants$$.$CELLS$ = "cells";
D.$DvtNBoxConstants$$.$CELL_DEFAULTS$ = "cellDefaults";
D.$DvtNBoxConstants$$.$NODES$ = "nodes";
D.$DvtNBoxConstants$$.$NODE_DEFAULTS$ = "nodeDefaults";
D.$DvtNBoxConstants$$.$CATEGORIES$ = "categories";
D.$DvtNBoxConstants$$.$ICON$ = "icon";
D.$DvtNBoxConstants$$.$ICON_DEFAULTS$ = "iconDefaults";
D.$DvtNBoxConstants$$.$INDICATOR$ = "indicator";
D.$DvtNBoxConstants$$.$INDICATOR_ICON$ = "indicatorIcon";
D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$ = "indicatorIconDefaults";
D.$DvtNBoxConstants$$.$INDICATOR_COLOR$ = "indicatorColor";
D.$DvtNBoxConstants$$.$X_PERCENTAGE$ = "xPercentage";
D.$DvtNBoxConstants$$.$Y_PERCENTAGE$ = "yPercentage";
D.$DvtNBoxConstants$$.$SELECTION$ = "selection";
D.$DvtNBoxConstants$$.$SELECTION_MODE$ = "selectionMode";
D.$DvtNBoxConstants$$.$SELECTION_INFO$ = "selectionInfo";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.SELECTION_INFO", D.$DvtNBoxConstants$$.$SELECTION_INFO$);
D.$DvtNBoxConstants$$.$HAS_SELECTION_LISTENER$ = "hasSelectionListener";
D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$ = "highlightedCategories";
D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$ = "highlightMatch";
D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$ = "hiddenCategories";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.HIDDEN_CATEGORIES", D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$);
D.$DvtNBoxConstants$$.$HOVER_BEHAVIOR$ = "hoverBehavior";
D.$DvtNBoxConstants$$.$GROUP_CATEGORY$ = "groupCategory";
D.$DvtNBoxConstants$$.$GROUP_ATTRIBUTES$ = "groupAttributes";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$ = "groupBehavior";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ = "withinCell";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ = "acrossCells";
D.$DvtNBoxConstants$$.$OTHER_COLOR$ = "otherColor";
D.$DvtNBoxConstants$$.$OTHER_THRESHOLD$ = "otherThreshold";
D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$ = "animationOnDataChange";
D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$ = "animationOnDisplay";
D.$DvtNBoxConstants$$.$ANIMATION_DURATION$ = "animationDuration";
D.$DvtNBoxConstants$$.$DRAWER$ = "_drawer";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.DRAWER", D.$DvtNBoxConstants$$.$DRAWER$);
D.$DvtNBoxConstants$$.$LEGEND$ = "_legend";
D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$ = "legendDisclosure";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.LEGEND_DISCLOSURE", D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$);
D.$DvtNBoxConstants$$.ID = "id";
D.$DvtNBoxConstants$$.$LABEL$ = "label";
D.$DvtNBoxConstants$$.$LABEL_STYLE$ = "labelStyle";
D.$DvtNBoxConstants$$.$LABEL_HALIGN$ = "labelHalign";
D.$DvtNBoxConstants$$.$SECONDARY_LABEL$ = "secondaryLabel";
D.$DvtNBoxConstants$$.$SECONDARY_LABEL_STYLE$ = "secondaryLabelStyle";
D.$DvtNBoxConstants$$.$SHORT_DESC$ = "shortDesc";
D.$DvtNBoxConstants$$.$SHOW_COUNT$ = "showCount";
D.$DvtNBoxConstants$$.$STYLE$ = "style";
D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$ = "styleDefaults";
D.$DvtNBoxConstants$$.$BORDER_COLOR$ = "borderColor";
D.$DvtNBoxConstants$$.$BORDER_RADIUS$ = "borderRadius";
D.$DvtNBoxConstants$$.$BORDER_WIDTH$ = "borderWidth";
D.$DvtNBoxConstants$$.$COLOR$ = "color";
D.$DvtNBoxConstants$$.$PATTERN$ = "pattern";
D.$DvtNBoxConstants$$.$OPACITY$ = "opacity";
D.$DvtNBoxConstants$$.$SHAPE$ = "shape";
D.$DvtNBoxConstants$$.$SOURCE$ = "source";
D.$DvtNBoxConstants$$.$HEIGHT$ = "height";
D.$DvtNBoxConstants$$.$WIDTH$ = "width";
(0,D.$DvtBundle$addDefaultStrings$$)("DvtNBoxBundle", {HIGHLIGHTED_COUNT:"{0}/{1}", COMMA_SEP_LIST:"{0}, {1}", OTHER:"Other", LEGEND:"Legend", GROUP_NODE:"Group", ADDITIONAL_DATA:"Additional Data", SIZE:"Size"});
D.$DvtNBoxDefaults$$ = function $$DvtNBoxDefaults$$$() {
  this.Init({skyros:D.$DvtNBoxDefaults$VERSION_1$$, alta:D.$DvtNBoxDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtNBoxDefaults");
D.$DvtNBoxDefaults$VERSION_1$$ = {skin:"alta", selectionMode:"multiple", animationOnDataChange:"none", animationOnDisplay:"none", cellMaximize:"on", cellContent:"auto", legendDisplay:"auto", legendDisclosure:"disclosed", groupBehavior:"withinCell", otherColor:"#636363", otherThreshold:0, hoverBehavior:"none", highlightMatch:"all", highlightedCategories:[], touchResponse:"auto", styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, columnLabelStyle:new D.$DvtCSSStyle$$('font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), 
rowLabelStyle:new D.$DvtCSSStyle$$('font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), columnsTitleStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), rowsTitleStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), cellDefaults:{style:new D.$DvtCSSStyle$$("background-color:#e9e9e9"), maximizedStyle:new D.$DvtCSSStyle$$("background-color:#dddddd"), 
minimizedStyle:new D.$DvtCSSStyle$$("background-color:#e9e9e9"), labelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), countLabelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), bodyCountLabelStyle:new D.$DvtCSSStyle$$('color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), dropTargetStyle:new D.$DvtCSSStyle$$("background-color:rgba(217, 244, 250, .75);border-color:#ccf6ff"), 
showCount:"auto", showMaximize:"on"}, __scrollbar:{scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333"}, __drawerDefaults:{background:"#e9e9e9", borderColor:"#bcc7d2", borderRadius:1, headerBackground:"linear-gradient(to bottom, #f5f5f5 0%, #f0f0f0 100%)", labelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), 
countLabelStyle:new D.$DvtCSSStyle$$('font-size: 14px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), countBorderRadius:1}, nodeDefaults:{color:"#FFFFFF", labelStyle:new D.$DvtCSSStyle$$('font-size: 12px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), secondaryLabelStyle:new D.$DvtCSSStyle$$('font-size: 11px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), alphaFade:0.2, borderRadius:1, hoverColor:"#FFFFFF", selectionColor:"#000000", iconDefaults:{preferredSize:19, 
preferredSizeTouch:34, shapePaddingRatio:0.15, sourcePaddingRatio:0, opacity:1, pattern:"none", borderWidth:1, borderRadius:0, shape:"circle"}, indicatorIconDefaults:{width:10, height:10, opacity:1, pattern:"none", borderWidth:1, borderRadius:0, shape:"circle"}}, __legendDefaults:{sectionStyle:'font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif; font-weight:bold', itemStyle:'font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif', 
markerColor:"#808080"}, __categoryNodeDefaults:{labelStyle:new D.$DvtCSSStyle$$('font-family:"Helvetica Neue", Helvetica, Arial, sans-serif')}}, __layout:{componentGap:8, titleGap:4, titleComponentGap:4, nodeLabelOnlyStartLabelGap:5, nodeStartLabelGap:3, nodeEndLabelGap:5, nodeSingleLabelGap:2, nodeDualLabelGap:2, nodeInterLabelGap:0, nodeIndicatorGap:3, nodeSwatchSize:10, categoryNodeLabelGap:5, minimumCellSize:34, cellGap:3, gridGap:6, cellStartGap:6, cellEndGap:6, cellTopGap:6, cellBottomGap:6, 
cellLabelGap:6, cellCloseGap:6, countLabelGap:10, markerGap:3, minimumLabelWidth:55, maximumLabelWidth:148, drawerButtonGap:6, drawerCountHorizontalGap:5, drawerCountVerticalGap:3, drawerStartGap:6, drawerLabelGap:6, drawerHeaderHeight:31, legendBottomGap:10}};
D.$DvtNBoxDefaults$SKIN_ALTA$$ = {};
D.$DvtNBoxCell$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCell$$, D.$DvtContainer$$, "DvtNBoxCell");
D.$DvtNBoxCell$$.newInstance = function $$DvtNBoxCell$$$newInstance$($nbox$$3$$, $data$$74$$) {
  var $component$$21$$ = new D.$DvtNBoxCell$$;
  $component$$21$$.Init($nbox$$3$$, $data$$74$$);
  return $component$$21$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCell$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$4$$, $data$$75$$) {
  var $r$$55$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$4$$, $data$$75$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$36$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$4$$, $data$$75$$[D.$DvtNBoxConstants$$.$COLUMN$]);
  D.$DvtNBoxCell$$.$superclass$.Init.call(this, $nbox$$4$$.$getCtx$(), null, "c:" + $r$$55$$ + "," + $c$$36$$);
  this.$_nbox$ = $nbox$$4$$;
  this.$_data$ = $data$$75$$;
  this.$_scrollContainer$ = !1
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$144$$, $cellLayout$$, $cellCounts$$1$$, $availSpace$$97$$) {
  this.$_cellCounts$ = $cellCounts$$1$$;
  $container$$144$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  D.$DvtNBoxCellRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $cellLayout$$, $cellCounts$$1$$, $availSpace$$97$$);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$setChildContainer$ = (0,D.$JSCompiler_set$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$11$$, $oldCell$$) {
  D.$DvtNBoxCellRenderer$$.$animateUpdate$($animationHandler$$11$$, $oldCell$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$12$$) {
  D.$DvtNBoxCellRenderer$$.$animateDelete$($animationHandler$$12$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$13$$) {
  D.$DvtNBoxCellRenderer$$.$animateInsert$($animationHandler$$13$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$)
};
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  if(this.$isDoubleClickable$()) {
    var $maximizedRow_oldFocus$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $options$$200$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$), $event$$570$$ = new D.$DvtSetPropertyEvent$$;
    $options$$200$$[D.$DvtNBoxConstants$$.$DRAWER$] = null;
    (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$DRAWER$, null);
    $maximizedRow_oldFocus$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? ($options$$200$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = null, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$, null), $options$$200$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = null, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$, null)) : ($options$$200$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = 
    this.$_data$[D.$DvtNBoxConstants$$.$ROW$], (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$, this.$_data$[D.$DvtNBoxConstants$$.$ROW$]), $options$$200$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$], (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$, this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$]));
    var $otherCell$$;
    ($maximizedRow_oldFocus$$ = this.$_nbox$.$EventManager$.$getFocus$()) ? $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxNode$$ ? $otherCell$$ = this.$getCellIndex$() != D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $maximizedRow_oldFocus$$.getData()) : $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxNodeOverflow$$ ? $otherCell$$ = this != $maximizedRow_oldFocus$$.$_cell$ : $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxCell$$ ? $otherCell$$ = this.$getCellIndex$() != $maximizedRow_oldFocus$$.$getCellIndex$() : 
    $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxCategoryNode$$ && ($otherCell$$ = this.$getCellIndex$() != $maximizedRow_oldFocus$$.getData().cell) : (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_nbox$.$EventManager$, this);
    $otherCell$$ && ((0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_nbox$.$EventManager$, this), this.$_nbox$.$EventManager$.$setFocused$(!1));
    this.$_nbox$.$processEvent$($event$$570$$);
    this.$_nbox$.$render$($options$$200$$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$243$$, $y$$217$$) {
  var $background$$10_maxY$$14$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background"), $minX$$15$$ = this.$getTranslateX$() + $background$$10_maxY$$14$$.$getX$(), $minY$$17$$ = this.$getTranslateY$() + $background$$10_maxY$$14$$.$getY$(), $maxX$$12$$ = $minX$$15$$ + $background$$10_maxY$$14$$.getWidth(), $background$$10_maxY$$14$$ = $minY$$17$$ + $background$$10_maxY$$14$$.getHeight();
  return $minX$$15$$ <= $x$$243$$ && $x$$243$$ <= $maxX$$12$$ && $minY$$17$$ <= $y$$217$$ && $y$$217$$ <= $background$$10_maxY$$14$$
};
D.$JSCompiler_prototypeAlias$$.$renderDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$renderDropSiteFeedback$$() {
  return D.$DvtNBoxCellRenderer$$.$renderDropSiteFeedback$(this.$_nbox$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$571$$) {
  var $isCellMaximized_maximizedRow$$1$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$1$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $isCellMaximized_maximizedRow$$1$$ = $isCellMaximized_maximizedRow$$1$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$1$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? !0 : !1;
  (!$isCellMaximized_maximizedRow$$1$$ && 13 == $event$$571$$.keyCode || $isCellMaximized_maximizedRow$$1$$ && 27 == $event$$571$$.keyCode) && this.$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $cellIndex$$2$$ = this.$getCellIndex$(), $states$$12$$ = [];
  D.$DvtNBoxDataUtils$$.$isCellMaximized$(this.$_nbox$, $cellIndex$$2$$) ? $states$$12$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_MAXIMIZED")) : D.$DvtNBoxDataUtils$$.$isCellMinimized$(this.$_nbox$, $cellIndex$$2$$) && $states$$12$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_MINIMIZED"));
  $states$$12$$.push([(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), this.$getNodeCount$()]);
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().shortDesc, $states$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($JSCompiler_temp$$233_event$$572$$) {
  var $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = null;
  if(this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($JSCompiler_temp$$233_event$$572$$)) {
    if(219 == $JSCompiler_temp$$233_event$$572$$.keyCode) {
      var $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = null, $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $cellCount$$inline_7419_maximizedColumn$$inline_7409_nodes$$inline_7412$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
      if($drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$ && $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ == this.getData()[D.$DvtNBoxConstants$$.$ROW$] && $cellCount$$inline_7419_maximizedColumn$$inline_7409_nodes$$inline_7412$$ == this.getData()[D.$DvtNBoxConstants$$.$COLUMN$]) {
        $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$)
      }else {
        if($cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = this.$getChildContainer$(), $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$.$getScrollingPane$ && ($cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$.$_container$), 0 < $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$.$getNumChildren$() && 
        ($cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$.$getChildAt$(0) instanceof D.$DvtNBoxNode$$ || $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$.$getChildAt$(0) instanceof D.$DvtNBoxNodeOverflow$$)) {
          $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$)
        }else {
          $cellCount$$inline_7419_maximizedColumn$$inline_7409_nodes$$inline_7412$$ = [];
          for($drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$ = 0;$drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$ < $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$.$getNumChildren$();$drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$++) {
            var $child$$inline_7414$$ = $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$.$getChildAt$($drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$);
            $child$$inline_7414$$ instanceof D.$DvtNBoxCategoryNode$$ && $cellCount$$inline_7419_maximizedColumn$$inline_7409_nodes$$inline_7412$$.push($child$$inline_7414$$)
          }
          $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(null, $JSCompiler_temp$$233_event$$572$$, $cellCount$$inline_7419_maximizedColumn$$inline_7409_nodes$$inline_7412$$)
        }
      }
      $JSCompiler_temp$$233_event$$572$$ = $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$
    }else {
      $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = [];
      $cellCount$$inline_7419_maximizedColumn$$inline_7409_nodes$$inline_7412$$ = D.$DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) * D.$DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$);
      for($drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$ = 0;$drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$ < $cellCount$$inline_7419_maximizedColumn$$inline_7409_nodes$$inline_7412$$;$drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$++) {
        $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $drawerData$$inline_7410_i$$inline_7413_i$$inline_7420$$)))
      }
      $JSCompiler_temp$$233_event$$572$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $JSCompiler_temp$$233_event$$572$$, $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$)
    }
    $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$ = $JSCompiler_temp$$233_event$$572$$
  }
  return $cells$$inline_7418_childObj$$inline_7407_container$$inline_7411_maximizedRow$$inline_7408_next$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getCellIndex$ = function $$JSCompiler_prototypeAlias$$$$getCellIndex$$() {
  return D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.$ROW$], this.getData()[D.$DvtNBoxConstants$$.$COLUMN$])
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  var $label$$62$$ = this.getData()[D.$DvtNBoxConstants$$.$LABEL$];
  return $label$$62$$ ? $label$$62$$ : null
};
D.$JSCompiler_prototypeAlias$$.$getNodeCount$ = function $$JSCompiler_prototypeAlias$$$$getNodeCount$$() {
  this.$_cellCounts$ || (this.$_cellCounts$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$(this.$_nbox$));
  var $index$$217$$ = this.$getCellIndex$();
  return this.$_cellCounts$.total[$index$$217$$]
};
D.$JSCompiler_prototypeAlias$$.$getNode$ = function $$JSCompiler_prototypeAlias$$$$getNode$$($index$$218$$) {
  var $nodes$$15$$ = this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$];
  if($nodes$$15$$) {
    for(var $nodeIndex$$11$$ = 0, $idx$$33$$ = 0;$idx$$33$$ < $nodes$$15$$.length;$idx$$33$$++) {
      if(this.getData()[D.$DvtNBoxConstants$$.$ROW$] == $nodes$$15$$[$idx$$33$$][D.$DvtNBoxConstants$$.$ROW$] && this.getData()[D.$DvtNBoxConstants$$.$COLUMN$] == $nodes$$15$$[$idx$$33$$][D.$DvtNBoxConstants$$.$COLUMN$] && !D.$DvtNBoxDataUtils$$.$isNodeHidden$(this.$_nbox$, $nodes$$15$$[$idx$$33$$])) {
        if($index$$218$$ == $nodeIndex$$11$$) {
          return $nodes$$15$$[$idx$$33$$]
        }
        $nodeIndex$$11$$++
      }
    }
  }
  return null
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  return D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) != D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ || !this.$_nbox$.$getOptions$().__groups ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, this.getData()))) : null
};
D.$DvtNBoxNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNode$$, D.$DvtContainer$$, "DvtNBoxNode");
D.$DvtNBoxNode$$.newInstance = function $$DvtNBoxNode$$$newInstance$($nbox$$10$$, $data$$79$$) {
  var $component$$23$$ = new D.$DvtNBoxNode$$;
  $component$$23$$.Init($nbox$$10$$, $data$$79$$);
  return $component$$23$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$11$$, $data$$80$$) {
  D.$DvtNBoxNode$$.$superclass$.Init.call(this, $nbox$$11$$.$getCtx$(), null, $data$$80$$[D.$DvtNBoxConstants$$.ID]);
  this.$_nbox$ = $nbox$$11$$;
  this.$_data$ = $data$$80$$;
  this.$_nbox$.$registerObject$(this);
  var $selectionMode$$11$$ = this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$];
  ("single" == $selectionMode$$11$$ || "multiple" == $selectionMode$$11$$ || this.$getAction$()) && this.setCursor("pointer");
  this.$_maxAlpha$ = 1
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$150$$, $nodeLayout$$) {
  D.$DvtNBoxNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $nodeLayout$$);
  $container$$150$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(!0);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$getSelectionShape$().$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$35$$) {
  this.$getSelectionShape$().$setSelected$($selected$$35$$);
  this.$UpdateAccessibilityAttributes$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$getSelectionShape$().$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$getSelectionShape$().$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$setSelectionShape$ = (0,D.$JSCompiler_set$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getSelectionShape$ = (0,D.$JSCompiler_get$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$7$$ = this.$_nbox$.$getOptions$().tooltip;
  if($tooltipFunc$$7$$) {
    var $dataContext$$8$$ = {id:this.$_data$.id, label:this.$_data$.label, secondaryLabel:this.$_data$.secondaryLabel, row:this.$_data$.row, column:this.$_data$.column, color:D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nbox$, this.$_data$)};
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_nbox$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$7$$, $dataContext$$8$$)
  }
  return this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$[D.$DvtNBoxConstants$$.$SHORT_DESC$]
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$)
};
D.$JSCompiler_prototypeAlias$$.$setMaxAlpha$ = function $$JSCompiler_prototypeAlias$$$$setMaxAlpha$$($maxAlpha$$4$$) {
  this.$_maxAlpha$ = $maxAlpha$$4$$;
  this.$setAlpha$(this.$getAlpha$())
};
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$44$$) {
  D.$DvtNBoxNode$$.$superclass$.$setAlpha$.call(this, window.Math.min($alpha$$44$$, this.$_maxAlpha$))
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$17$$, $oldNode$$11$$) {
  D.$DvtNBoxNodeRenderer$$.$animateUpdate$($animationHandler$$17$$, $oldNode$$11$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$18$$) {
  D.$DvtNBoxNodeRenderer$$.$animateDelete$($animationHandler$$18$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$19$$) {
  D.$DvtNBoxNodeRenderer$$.$animateInsert$($animationHandler$$19$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(!0);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  (0,D.$JSCompiler_StaticMethods__getParentContainer$$)(this).$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$) {
    this.$_showPopupBehaviors$ = [];
    var $spbs$$3$$ = this.$_data$.showPopupBehaviors;
    if($spbs$$3$$) {
      for(var $i$$728$$ = 0;$i$$728$$ < $spbs$$3$$.length;$i$$728$$++) {
        this.$_showPopupBehaviors$.push(new D.$DvtShowPopupBehavior$$($spbs$$3$$[$i$$728$$].popupId, $spbs$$3$$[$i$$728$$].triggerType, $spbs$$3$$[$i$$728$$].alignId, $spbs$$3$$[$i$$728$$].align))
      }
    }
  }
  return this.$_showPopupBehaviors$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$13_matrix$$17$$) {
  if($behavior$$13_matrix$$17$$ && $behavior$$13_matrix$$17$$.$getAlign$()) {
    $behavior$$13_matrix$$17$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$(this);
    var $background$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background");
    return new D.$DvtRectangle$$($behavior$$13_matrix$$17$$.$_tx$ + $background$$11$$.$getX$(), $behavior$$13_matrix$$17$$.$_ty$ + $background$$11$$.$getY$(), $background$$11$$.getWidth(), $background$$11$$.getHeight())
  }
  return null
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$13$$) {
  return this.$_nbox$.$__isDragAvailable$($clientIds$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_nbox$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_nbox$.$__getDragFeedback$()
};
D.$JSCompiler_StaticMethods__getParentContainer$$ = function $$JSCompiler_StaticMethods__getParentContainer$$$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$) {
  var $cellData$$7_cellIndex$$3_drawerData$$4$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_nbox$);
  $cellData$$7_cellIndex$$3_drawerData$$4$$ || ($cellData$$7_cellIndex$$3_drawerData$$4$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_nbox$, $JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_data$), $cellData$$7_cellIndex$$3_drawerData$$4$$ = D.$DvtNBoxDataUtils$$.$getCell$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_nbox$, $cellData$$7_cellIndex$$3_drawerData$$4$$));
  return $JSCompiler_StaticMethods__getParentContainer$self_container$$151$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getParentContainer$self_container$$151$$.$_nbox$, $cellData$$7_cellIndex$$3_drawerData$$4$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$20$$ = this.$getAriaLabel$();
    $desc$$20$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$20$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] ? this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] : []
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  this.$showHoverEffect$();
  var $scrollContainer$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$(this.$_nbox$, this);
  $scrollContainer$$ && $scrollContainer$$.scrollIntoView(this)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$590$$) {
  var $next$$11$$ = null;
  if(32 == $event$$590$$.keyCode && $event$$590$$.ctrlKey) {
    return this
  }
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($event$$590$$) ? $next$$11$$ = 221 == $event$$590$$.keyCode ? (0,D.$JSCompiler_StaticMethods__getParentContainer$$)(this) : 219 == $event$$590$$.keyCode ? this : D.$DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $event$$590$$) : $event$$590$$.type == D.$DvtMouseEvent$CLICK$$ && ($next$$11$$ = this);
  return $next$$11$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$591$$) {
  if(D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$) && 27 == $event$$591$$.keyCode) {
    this.$handleDoubleClick$()
  }else {
    var $isCellMaximized$$1_maximizedRow$$3$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$3$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $isCellMaximized$$1_maximizedRow$$3$$ = $isCellMaximized$$1_maximizedRow$$3$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$3$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? !0 : !1;
    (!$isCellMaximized$$1_maximizedRow$$3$$ && 13 == $event$$591$$.keyCode || $isCellMaximized$$1_maximizedRow$$3$$ && 27 == $event$$591$$.keyCode) && this.$handleDoubleClick$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $cell$$31_cellData$$8_node$$256$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.ID]));
  if($cell$$31_cellData$$8_node$$256$$) {
    var $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cell$$31_cellData$$8_node$$256$$);
    if($ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$) {
      return $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$
    }
    $cell$$31_cellData$$8_node$$256$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $cell$$31_cellData$$8_node$$256$$));
    $cell$$31_cellData$$8_node$$256$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cell$$31_cellData$$8_node$$256$$);
    $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ = D.$DvtNBoxDataUtils$$.$getLastNavigableNode$(this.$_nbox$, $cell$$31_cellData$$8_node$$256$$.$getChildContainer$());
    if($ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ instanceof D.$DvtNBoxNodeOverflow$$) {
      return $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$
    }
    a: {
      for($ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ = this;$ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ && $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$.getParent;) {
        if($ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ = $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$.getParent(), $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ instanceof D.$DvtNBoxDrawer$$) {
          break a
        }
      }
      $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ = null
    }
    return $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$ ? $ancestor$$inline_7423_displayable$$74_drawer$$5_lastNode$$1$$.$getKeyboardFocusDisplayable$() : $cell$$31_cellData$$8_node$$256$$.$getKeyboardFocusDisplayable$()
  }
  return null
};
D.$DvtNBoxNodeOverflow$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNodeOverflow$$, D.$DvtContainer$$, "DvtNBoxNodeOverflow");
D.$DvtNBoxNodeOverflow$$.newInstance = function $$DvtNBoxNodeOverflow$$$newInstance$($nbox$$12$$, $cell$$32$$) {
  var $component$$24$$ = new D.$DvtNBoxNodeOverflow$$;
  $component$$24$$.Init($nbox$$12$$, $cell$$32$$);
  return $component$$24$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNodeOverflow$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$13$$, $cell$$33$$) {
  D.$DvtNBoxNodeOverflow$$.$superclass$.Init.call(this, $nbox$$13$$.$getCtx$());
  this.$_nbox$ = $nbox$$13$$;
  this.$_cell$ = $cell$$33$$;
  this.$_button$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$152$$, $keyboardFocusEffect_width$$116$$, $height$$108$$) {
  var $options$$205$$ = this.$_nbox$.$getOptions$(), $w$$57$$ = $options$$205$$._resources.overflow_ena.width, $h$$52$$ = $options$$205$$._resources.overflow_ena.height, $scale$$54_x$$245$$ = 1;
  if($keyboardFocusEffect_width$$116$$ < $w$$57$$ || $height$$108$$ < $h$$52$$) {
    $scale$$54_x$$245$$ = window.Math.min($keyboardFocusEffect_width$$116$$ / $w$$57$$, $height$$108$$ / $h$$52$$)
  }
  var $w$$57$$ = $scale$$54_x$$245$$ * $w$$57$$, $h$$52$$ = $scale$$54_x$$245$$ * $h$$52$$, $scale$$54_x$$245$$ = ($keyboardFocusEffect_width$$116$$ - $w$$57$$) / 2, $y$$219$$ = ($height$$108$$ - $h$$52$$) / 2, $ctx$$4$$ = this.$_nbox$.$getCtx$(), $upRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$116$$, $height$$108$$), $overRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$116$$, $height$$108$$), $downRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$116$$, 
  $height$$108$$), $disRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$116$$, $height$$108$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($disRect$$);
  var $upState$$18$$ = new D.$DvtContainer$$($ctx$$4$$), $overState$$15$$ = new D.$DvtContainer$$($ctx$$4$$), $downState$$15$$ = new D.$DvtContainer$$($ctx$$4$$), $disState$$ = new D.$DvtContainer$$($ctx$$4$$);
  $upState$$18$$.$addChild$($upRect$$);
  $overState$$15$$.$addChild$($overRect$$);
  $downState$$15$$.$addChild$($downRect$$);
  $disState$$.$addChild$($disRect$$);
  $upState$$18$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$205$$._resources.overflow_ena.src, $scale$$54_x$$245$$, $y$$219$$, $w$$57$$, $h$$52$$));
  $overState$$15$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$205$$._resources.overflow_ovr.src, $scale$$54_x$$245$$, $y$$219$$, $w$$57$$, $h$$52$$));
  $downState$$15$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$205$$._resources.overflow_dwn.src, $scale$$54_x$$245$$, $y$$219$$, $w$$57$$, $h$$52$$));
  $disState$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$205$$._resources.overflow_dis.src, $scale$$54_x$$245$$, $y$$219$$, $w$$57$$, $h$$52$$));
  this.$_button$ = new D.$DvtButton$$($ctx$$4$$, $upState$$18$$, $overState$$15$$, $downState$$15$$, $disState$$, null, this.$HandleClick$, this);
  D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$) || ((0,D.$JSCompiler_StaticMethods_setEnabled$$)(this.$_button$, !1), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)(this.$_button$));
  this.$addChild$(this.$_button$);
  $keyboardFocusEffect_width$$116$$ = new D.$DvtKeyboardFocusEffect$$(this.$_nbox$.$getCtx$(), this, new D.$DvtRectangle$$(-1, -1, $keyboardFocusEffect_width$$116$$ + 2, $height$$108$$ + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this, $keyboardFocusEffect_width$$116$$, "focusEffect");
  $container$$152$$.$addChild$(this);
  this.$_addAccessibilityAttributes$();
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$592$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$592$$);
  this.$_cell$.$handleDoubleClick$(!0)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$593$$) {
  13 == $event$$593$$.keyCode && this.$_cell$.$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$_addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$_addAccessibilityAttributes$$() {
  this.$setAriaRole$("button");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$21$$ = this.$getAriaLabel$();
    $desc$$21$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$21$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "ADDITIONAL_DATA")
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return this.$getDatatip$()
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$594$$) {
  var $next$$12$$ = null;
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($event$$594$$) && ($next$$12$$ = 221 == $event$$594$$.keyCode ? this.$_cell$ : D.$DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $event$$594$$));
  return $next$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $newNode$$8$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.__prev[D.$DvtNBoxConstants$$.ID])).__next;
  return D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $newNode$$8$$)
};
D.$DvtNBoxCategoryNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryNode$$, D.$DvtContainer$$, "DvtNBoxCategoryNode");
D.$DvtNBoxCategoryNode$$.newInstance = function $$DvtNBoxCategoryNode$$$newInstance$($nbox$$1$$, $data$$72$$) {
  var $component$$20$$ = new D.$DvtNBoxCategoryNode$$;
  $component$$20$$.Init($nbox$$1$$, $data$$72$$);
  return $component$$20$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCategoryNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$2$$, $data$$73$$) {
  D.$DvtNBoxCategoryNode$$.$superclass$.Init.call(this, $nbox$$2$$.$getCtx$(), null, (0,window.isNaN)($data$$73$$[D.$DvtNBoxConstants$$.$CELL$]) ? $data$$73$$[D.$DvtNBoxConstants$$.ID] : $data$$73$$[D.$DvtNBoxConstants$$.$CELL$] + ":" + $data$$73$$[D.$DvtNBoxConstants$$.ID]);
  this.$_nbox$ = $nbox$$2$$;
  this.$_data$ = $data$$73$$;
  this.$_nbox$.$registerObject$(this);
  "multiple" == this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$] && this.setCursor("pointer");
  this.$_maxAlpha$ = 1
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$142$$, $scale$$53$$, $gap$$23$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $scale$$53$$, $gap$$23$$);
  $container$$142$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"multiple" == this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$]
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$getSelectionShape$().$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$33$$) {
  this.$getSelectionShape$().$setSelected$($selected$$33$$);
  this.$UpdateAccessibilityAttributes$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$getSelectionShape$().$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$getSelectionShape$().$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$setSelectionShape$ = (0,D.$JSCompiler_set$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getSelectionShape$ = (0,D.$JSCompiler_get$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  for(var $labels$$21$$ = D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$);1 < $labels$$21$$.length;) {
    var $joined$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "COMMA_SEP_LIST", [$labels$$21$$[0], $labels$$21$$[1]]);
    $labels$$21$$.splice(0, 2, $joined$$)
  }
  return $labels$$21$$[0]
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$6$$ = this.$_nbox$.$getOptions$().tooltip;
  if($tooltipFunc$$6$$) {
    var $dataContext$$7$$ = {id:this.$_data$.id, color:D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this.$_nbox$, this.$_data$), size:this.$_data$.nodeIndices.length};
    "withinCell" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) && ($dataContext$$7$$.row = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).row, $dataContext$$7$$.column = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).column);
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_nbox$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$6$$, $dataContext$$7$$)
  }
  return this.$getShortDesc$() + "\n" + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), this.$_data$.nodeIndices.length])
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$).join("\n")
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$)
};
D.$JSCompiler_prototypeAlias$$.$setMaxAlpha$ = function $$JSCompiler_prototypeAlias$$$$setMaxAlpha$$($maxAlpha$$3$$) {
  this.$_maxAlpha$ = $maxAlpha$$3$$;
  this.$setAlpha$(this.$getAlpha$())
};
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$43$$) {
  D.$DvtNBoxCategoryNode$$.$superclass$.$setAlpha$.call(this, window.Math.min($alpha$$43$$, this.$_maxAlpha$))
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(!0);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  var $options$$199$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$);
  $options$$199$$[D.$DvtNBoxConstants$$.$DRAWER$] = {id:this.getId()};
  var $event$$565$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$565$$, D.$DvtNBoxConstants$$.$DRAWER$, this.getId());
  this.$_nbox$.$processEvent$($event$$565$$);
  this.$_nbox$.$render$($options$$199$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$8$$, $oldNode$$10$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateUpdate$($animationHandler$$8$$, $oldNode$$10$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$9$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateDelete$($animationHandler$$9$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$10$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateInsert$($animationHandler$$10$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$11$$) {
  return this.$_nbox$.$__isDragAvailable$($clientIds$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_nbox$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_nbox$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$566$$) {
  if(13 == $event$$566$$.keyCode) {
    this.$handleDoubleClick$()
  }else {
    if(27 == $event$$566$$.keyCode && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      var $cellData$$4$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.$cell$);
      D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$4$$).$HandleKeyboardEvent$($event$$566$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$18$$ = this.$getAriaLabel$();
    $desc$$18$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$18$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  var $categories$$21$$ = this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$];
  if(!$categories$$21$$) {
    for(var $intersect$$ = function $$intersect$$$($categories$$21$$, $intersect$$) {
      return $categories$$21$$.filter(function($categories$$21$$) {
        return-1 < $intersect$$.indexOf($categories$$21$$)
      })
    }, $indices$$10$$ = this.getData().nodeIndices, $categories$$21$$ = null, $i$$723$$ = 0;$i$$723$$ < $indices$$10$$.length;$i$$723$$++) {
      var $nodeCategories$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $indices$$10$$[$i$$723$$])[D.$DvtNBoxConstants$$.$CATEGORIES$];
      if(!$nodeCategories$$) {
        $categories$$21$$ = [];
        break
      }
      $categories$$21$$ = null == $categories$$21$$ ? $nodeCategories$$ : $intersect$$($categories$$21$$, $nodeCategories$$)
    }
    this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] = $categories$$21$$
  }
  return $categories$$21$$
};
D.$DvtNBoxCategoryNode$$.$compareSize$ = function $$DvtNBoxCategoryNode$$$$compareSize$$($a$$69$$, $b$$49$$) {
  var $alength$$ = $a$$69$$.nodeIndices.length, $blength$$ = $b$$49$$.nodeIndices.length;
  return $alength$$ == $blength$$ ? 0 : $alength$$ < $blength$$ ? 1 : -1
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCategoryNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
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
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($cellData$$5_event$$567$$) {
  var $groups$$7_next$$6_nodes$$13$$ = null;
  if(32 == $cellData$$5_event$$567$$.keyCode && $cellData$$5_event$$567$$.ctrlKey) {
    return this
  }
  if(221 == $cellData$$5_event$$567$$.keyCode && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    $cellData$$5_event$$567$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.$CELL$]), $groups$$7_next$$6_nodes$$13$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$5_event$$567$$)
  }else {
    if(221 == $cellData$$5_event$$567$$.keyCode || 219 == $cellData$$5_event$$567$$.keyCode) {
      $groups$$7_next$$6_nodes$$13$$ = this
    }else {
      if(this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($cellData$$5_event$$567$$)) {
        if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
          var $groups$$7_next$$6_nodes$$13$$ = this.$_nbox$.$getOptions$().__groups, $groupNodes_i$$724$$ = [], $container$$143_id$$232$$;
          for($container$$143_id$$232$$ in $groups$$7_next$$6_nodes$$13$$) {
            var $displayable$$71$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $groups$$7_next$$6_nodes$$13$$[$container$$143_id$$232$$]);
            $displayable$$71$$ && $groupNodes_i$$724$$.push($displayable$$71$$)
          }
          $groups$$7_next$$6_nodes$$13$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(this, $cellData$$5_event$$567$$, $groupNodes_i$$724$$)
        }else {
          $container$$143_id$$232$$ = this.getParent();
          $groups$$7_next$$6_nodes$$13$$ = [];
          for($groupNodes_i$$724$$ = 0;$groupNodes_i$$724$$ < $container$$143_id$$232$$.$getNumChildren$();$groupNodes_i$$724$$++) {
            $container$$143_id$$232$$.$getChildAt$($groupNodes_i$$724$$) instanceof D.$DvtNBoxCategoryNode$$ && $groups$$7_next$$6_nodes$$13$$.push($container$$143_id$$232$$.$getChildAt$($groupNodes_i$$724$$))
          }
          $groups$$7_next$$6_nodes$$13$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(this, $cellData$$5_event$$567$$, $groups$$7_next$$6_nodes$$13$$)
        }
      }else {
        $cellData$$5_event$$567$$.type == D.$DvtMouseEvent$CLICK$$ && ($groups$$7_next$$6_nodes$$13$$ = this)
      }
    }
  }
  return $groups$$7_next$$6_nodes$$13$$
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $drawerData_groupNodeData$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
  return $drawerData_groupNodeData$$ || D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nbox$) && ($drawerData_groupNodeData$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getId())) ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData_groupNodeData$$) : null
};
D.$DvtNBoxCategoryRolloverHandler$$ = function $$DvtNBoxCategoryRolloverHandler$$$($callback$$124$$, $callbackObj$$75$$) {
  D.$DvtNBoxCategoryRolloverHandler$$.$superclass$.constructor.call(this, $callback$$124$$, $callbackObj$$75$$);
  this.$_nbox$ = $callbackObj$$75$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryRolloverHandler$$, D.$DvtCategoryRolloverHandler$$, "DvtNBoxCategoryRolloverHandler");
D.$DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloverCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloverCallback$$($event$$568$$) {
  return D.$DvtObj$$.$createCallback$(this, function() {
    this.$_bHighlightMode$ = !0;
    this.$_nbox$.$processEvent$($event$$568$$);
    this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $event$$568$$, this.$_source$)
  })
};
D.$DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloutCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloutCallback$$($event$$569$$) {
  return D.$DvtObj$$.$createCallback$(this, function() {
    (0,D.$JSCompiler_StaticMethods_SetHighlightModeTimeout$$)(this);
    this.$_nbox$.$processEvent$($event$$569$$);
    this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $event$$569$$, this.$_source$)
  })
};
D.$DvtNBoxDrawer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDrawer$$, D.$DvtContainer$$, "DvtNBoxDrawer");
D.$DvtNBoxDrawer$$.newInstance = function $$DvtNBoxDrawer$$$newInstance$($nbox$$5$$, $data$$76$$) {
  var $component$$22$$ = new D.$DvtNBoxDrawer$$;
  $component$$22$$.Init($nbox$$5$$, $data$$76$$);
  return $component$$22$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$6$$, $data$$77$$) {
  D.$DvtNBoxDrawer$$.$superclass$.Init.call(this, $nbox$$6$$.$getCtx$(), null, $data$$77$$.id + "_d");
  this.$_nbox$ = $nbox$$6$$;
  this.$_data$ = $data$$77$$;
  this.$_nbox$.$registerObject$(this)
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$147$$, $availSpace$$98$$) {
  $container$$147$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  D.$DvtNBoxDrawerRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $availSpace$$98$$);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$setChildContainer$ = (0,D.$JSCompiler_set$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(!0);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  this.$closeDrawer$()
};
D.$JSCompiler_prototypeAlias$$.$closeDrawer$ = function $$JSCompiler_prototypeAlias$$$$closeDrawer$$() {
  var $options$$202$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$);
  $options$$202$$[D.$DvtNBoxConstants$$.$DRAWER$] = null;
  var $event$$575$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$575$$, D.$DvtNBoxConstants$$.$DRAWER$, null);
  this.$_nbox$.$processEvent$($event$$575$$);
  this.$_nbox$.$render$($options$$202$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$14$$, $oldDrawer$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateUpdate$($animationHandler$$14$$, $oldDrawer$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$15$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateDelete$($animationHandler$$15$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$16$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateInsert$($animationHandler$$16$$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$576$$) {
  27 == $event$$576$$.keyCode && this.$closeDrawer$()
};
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$19$$ = this.$getAriaLabel$();
    $desc$$19$$ && ((0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "background") : this).$setAriaProperty$("label", $desc$$19$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $categoryNode$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData().id)), $selected$$34$$ = D.$DvtNBoxDataUtils$$.$isDrawerSelected$(this.$_nbox$, $categoryNode$$2$$);
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, $categoryNode$$2$$.$getShortDesc$(), $selected$$34$$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !0;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = !1;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($container$$149_event$$577_maximizedCellIndex$$) {
  var $next$$8$$ = null;
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($container$$149_event$$577_maximizedCellIndex$$) && (219 == $container$$149_event$$577_maximizedCellIndex$$.keyCode ? ($container$$149_event$$577_maximizedCellIndex$$ = this.$getChildContainer$(), $container$$149_event$$577_maximizedCellIndex$$.$getScrollingPane$ && ($container$$149_event$$577_maximizedCellIndex$$ = $container$$149_event$$577_maximizedCellIndex$$.$_container$), $next$$8$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, 
  $container$$149_event$$577_maximizedCellIndex$$)) : 221 == $container$$149_event$$577_maximizedCellIndex$$.keyCode && ($container$$149_event$$577_maximizedCellIndex$$ = D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$), $next$$8$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $container$$149_event$$577_maximizedCellIndex$$))));
  return $next$$8$$
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getDisplayable$$() {
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  if(this.$_nbox$.$getOptions$()._drawer) {
    return this
  }
  var $groupNodeData$$1$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.ID]);
  return $groupNodeData$$1$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $groupNodeData$$1$$) : null
};
D.$DvtNBoxDataAnimationHandler$$ = function $$DvtNBoxDataAnimationHandler$$$($context$$466$$, $deleteContainer$$9$$, $oldNBox$$2$$, $newNBox$$) {
  this.Init($context$$466$$, $deleteContainer$$9$$, $oldNBox$$2$$, $newNBox$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDataAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtNBoxDataAnimationHandler");
D.$DvtNBoxDataAnimationHandler$$.prototype.Init = function $$DvtNBoxDataAnimationHandler$$$$Init$($context$$467$$, $deleteContainer$$10$$, $oldNBox$$3$$, $newNBox$$1$$) {
  D.$DvtNBoxDataAnimationHandler$$.$superclass$.Init.call(this, $context$$467$$, $deleteContainer$$10$$);
  this.$_oldNBox$ = $oldNBox$$3$$;
  this.$_newNBox$ = $newNBox$$1$$
};
D.$DvtNBoxDataAnimationHandler$$.prototype.$getAnimationDuration$ = function $$DvtNBoxDataAnimationHandler$$$$$getAnimationDuration$$() {
  return D.$DvtNBoxStyleUtils$$.$getAnimationDuration$(this.$_oldNBox$)
};
D.$DvtNBoxDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDropTarget$$, D.$DvtDropTarget$$, "DvtNBoxDropTarget");
D.$DvtNBoxDropTarget$$.prototype.$acceptDrag$ = function $$DvtNBoxDropTarget$$$$$acceptDrag$$($cell$$29_mouseX$$27$$, $mouseY$$27$$, $clientIds$$12$$) {
  if($cell$$29_mouseX$$27$$ = (0,D.$JSCompiler_StaticMethods___getCellUnderPoint$$)(this.$_view$, $cell$$29_mouseX$$27$$, $mouseY$$27$$)) {
    $cell$$29_mouseX$$27$$ != this.$_dropSite$ && (this.$_view$.$__showDropSiteFeedback$($cell$$29_mouseX$$27$$), this.$_dropSite$ = $cell$$29_mouseX$$27$$)
  }else {
    return this.$_view$.$__showDropSiteFeedback$(null), null
  }
  return $clientIds$$12$$[0]
};
D.$DvtNBoxDropTarget$$.prototype.$getDropSite$ = function $$DvtNBoxDropTarget$$$$$getDropSite$$($mouseX$$28$$, $mouseY$$28$$) {
  var $cell$$30_data$$78$$ = (0,D.$JSCompiler_StaticMethods___getCellUnderPoint$$)(this.$_view$, $mouseX$$28$$, $mouseY$$28$$);
  return $cell$$30_data$$78$$ ? ($cell$$30_data$$78$$ = $cell$$30_data$$78$$.getData(), {$row$:$cell$$30_data$$78$$[D.$DvtNBoxConstants$$.$ROW$], $column$:$cell$$30_data$$78$$[D.$DvtNBoxConstants$$.$COLUMN$]}) : null
};
D.$DvtNBoxEventManager$$ = function $$DvtNBoxEventManager$$$($nbox$$7$$) {
  this.Init($nbox$$7$$.$getCtx$(), $nbox$$7$$.$processEvent$, $nbox$$7$$);
  this.$_nbox$ = $nbox$$7$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxEventManager$$, D.$DvtEventManager$$, "DvtNBoxEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$578_obj$$304$$) {
  $event$$578_obj$$304$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$578_obj$$304$$.target);
  this.$_processActionEvent$($event$$578_obj$$304$$)
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$579$$) {
  (0,D.$JSCompiler_StaticMethods__handleDblClick$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$579$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$580$$) {
  (0,D.$JSCompiler_StaticMethods__handleDblClick$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$580$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$581_obj$$305$$) {
  $event$$581_obj$$305$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$581_obj$$305$$.target);
  this.$_processActionEvent$($event$$581_obj$$305$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$582_obj$$306$$) {
  $event$$582_obj$$306$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$582_obj$$306$$.target);
  this.$_processActionEvent$($event$$582_obj$$306$$)
};
D.$JSCompiler_StaticMethods__handleDblClick$$ = function $$JSCompiler_StaticMethods__handleDblClick$$$($JSCompiler_StaticMethods__handleDblClick$self$$, $displayable$$72$$) {
  var $logicalObject$$12$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_StaticMethods__handleDblClick$self$$, $displayable$$72$$);
  $logicalObject$$12$$ && ($logicalObject$$12$$.$isDoubleClickable$ && $logicalObject$$12$$.$isDoubleClickable$() && $logicalObject$$12$$.$handleDoubleClick$) && $logicalObject$$12$$.$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$583$$) {
  var $eventConsumed$$3$$ = !1, $keyCode$$38$$ = $event$$583$$.keyCode, $navigable$$17$$ = this.$getFocus$();
  if(13 == $keyCode$$38$$ || 27 == $keyCode$$38$$) {
    $navigable$$17$$ && $navigable$$17$$.$HandleKeyboardEvent$ && $navigable$$17$$.$HandleKeyboardEvent$($event$$583$$)
  }else {
    if(32 == $event$$583$$.keyCode && $event$$583$$.ctrlKey) {
      if($navigable$$17$$ instanceof D.$DvtNBoxCategoryNode$$ || $navigable$$17$$ instanceof D.$DvtNBoxNode$$) {
        $eventConsumed$$3$$ = D.$DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$583$$)
      }
    }else {
      $eventConsumed$$3$$ = D.$DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$583$$)
    }
  }
  return $eventConsumed$$3$$
};
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$584_options$$203$$, $categories$$22_hoverBehaviorDelay$$3_obj$$307$$, $bOver$$10_rolloverEvent$$4$$) {
  $event$$584_options$$203$$ = this.$_nbox$.$getOptions$();
  "dim" == $event$$584_options$$203$$.hoverBehavior && ($categories$$22_hoverBehaviorDelay$$3_obj$$307$$ = $categories$$22_hoverBehaviorDelay$$3_obj$$307$$.$getCategories$ ? $categories$$22_hoverBehaviorDelay$$3_obj$$307$$.$getCategories$() : [], $event$$584_options$$203$$.highlightedCategories = $bOver$$10_rolloverEvent$$4$$ ? $categories$$22_hoverBehaviorDelay$$3_obj$$307$$.slice() : null, $bOver$$10_rolloverEvent$$4$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$10_rolloverEvent$$4$$ ? "categoryRollOver" : 
  "categoryRollOut", $event$$584_options$$203$$.highlightedCategories), $categories$$22_hoverBehaviorDelay$$3_obj$$307$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$584_options$$203$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$10_rolloverEvent$$4$$, (0,D.$JSCompiler_StaticMethods_getNodeDisplayables$$)(this.$_nbox$), $categories$$22_hoverBehaviorDelay$$3_obj$$307$$, "any" == $event$$584_options$$203$$.highlightMatch))
};
D.$JSCompiler_prototypeAlias$$.$CreateCategoryRolloverHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateCategoryRolloverHandler$$($callback$$127$$, $callbackObj$$76$$) {
  return new D.$DvtNBoxCategoryRolloverHandler$$($callback$$127$$, $callbackObj$$76$$)
};
D.$JSCompiler_prototypeAlias$$.$_processActionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processActionEvent$$($obj$$308$$) {
  $obj$$308$$ && ($obj$$308$$.$getAction$ && $obj$$308$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$308$$.$getAction$(), $obj$$308$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  var $options$$204$$ = this.$_nbox$.$getOptions$(), $drawerData$$2$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$), $cellData$$6$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$));
  return $drawerData$$2$$ && (0,D.$JSCompiler_StaticMethods_hasScrollingContent$$)(D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData$$2$$).$getChildContainer$()) || $cellData$$6$$ && (0,D.$JSCompiler_StaticMethods_hasScrollingContent$$)(D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$6$$).$getChildContainer$()) ? "touchHold" : "touchStart" === $options$$204$$.touchResponse ? "touchStart" : "auto"
};
D.$DvtNBoxKeyboardHandler$$ = function $$DvtNBoxKeyboardHandler$$$($manager$$22$$, $nbox$$8$$) {
  this.Init($manager$$22$$, $nbox$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtNBoxKeyboardHandler");
D.$DvtNBoxKeyboardHandler$$.prototype.Init = function $$DvtNBoxKeyboardHandler$$$$Init$($manager$$23$$, $nbox$$9$$) {
  D.$DvtNBoxKeyboardHandler$$.$superclass$.Init.call(this, $manager$$23$$);
  this.$_nbox$ = $nbox$$9$$
};
D.$DvtNBoxKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtNBoxKeyboardHandler$$$$$processKeyDown$$($event$$585_index$$219$$) {
  if(9 == $event$$585_index$$219$$.keyCode) {
    var $currentNavigable$$13_drawerData$$3_groups$$8$$ = this.$_eventManager$.$getFocus$(), $groupNodes$$1_next$$9$$ = null;
    (0,D.$DvtEventManager$consumeEvent$$)($event$$585_index$$219$$);
    if($currentNavigable$$13_drawerData$$3_groups$$8$$) {
      $groupNodes$$1_next$$9$$ = $currentNavigable$$13_drawerData$$3_groups$$8$$
    }else {
      if($currentNavigable$$13_drawerData$$3_groups$$8$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$)) {
        $groupNodes$$1_next$$9$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $currentNavigable$$13_drawerData$$3_groups$$8$$)
      }else {
        if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($currentNavigable$$13_drawerData$$3_groups$$8$$ = this.$_nbox$.$getOptions$().__groups)) {
          var $groupNodes$$1_next$$9$$ = [], $id$$233$$;
          for($id$$233$$ in $currentNavigable$$13_drawerData$$3_groups$$8$$) {
            var $displayable$$73$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $currentNavigable$$13_drawerData$$3_groups$$8$$[$id$$233$$]);
            $displayable$$73$$ && $groupNodes$$1_next$$9$$.push($displayable$$73$$)
          }
          $groupNodes$$1_next$$9$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(null, $event$$585_index$$219$$, $groupNodes$$1_next$$9$$)
        }
      }
      $groupNodes$$1_next$$9$$ || ($event$$585_index$$219$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$) * (D.$DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) - 1), $groupNodes$$1_next$$9$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $event$$585_index$$219$$)))
    }
    return $groupNodes$$1_next$$9$$
  }
  return D.$DvtNBoxKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$585_index$$219$$)
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isSelectionEvent$$($event$$586$$) {
  return 9 == $event$$586$$.keyCode ? !1 : this.$isNavigationEvent$($event$$586$$) && !$event$$586$$.ctrlKey
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isMultiSelectEvent$$($event$$587$$) {
  return 32 == $event$$587$$.keyCode && $event$$587$$.ctrlKey
};
D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$ = function $$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$$($obj$$309_stageP2$$4$$) {
  var $bounds$$138$$ = $obj$$309_stageP2$$4$$.$getDimensions$(), $stageP1$$4$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$309_stageP2$$4$$, new D.$DvtPoint$$($bounds$$138$$.x, $bounds$$138$$.y));
  $obj$$309_stageP2$$4$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$309_stageP2$$4$$, new D.$DvtPoint$$($bounds$$138$$.x + $bounds$$138$$.$w$, $bounds$$138$$.y + $bounds$$138$$.$h$));
  return new D.$DvtRectangle$$($stageP1$$4$$.x, $stageP1$$4$$.y, $obj$$309_stageP2$$4$$.x - $stageP1$$4$$.x, $obj$$309_stageP2$$4$$.y - $stageP1$$4$$.y)
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isNavigationEvent$$($event$$588$$) {
  var $retVal$$2$$ = !1;
  switch($event$$588$$.keyCode) {
    case 219:
    ;
    case 221:
      $retVal$$2$$ = !0;
      break;
    default:
      $retVal$$2$$ = D.$DvtNBoxKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$588$$)
  }
  return $retVal$$2$$
};
D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$ = function $$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$$($curr$$, $bNext$$6_event$$589$$, $navigableItems$$3$$) {
  if(!$navigableItems$$3$$ || 0 >= $navigableItems$$3$$.length) {
    return null
  }
  $navigableItems$$3$$[0] instanceof D.$DvtNBoxCategoryNode$$ && $navigableItems$$3$$.sort(function($curr$$, $bNext$$6_event$$589$$) {
    return D.$DvtNBoxCategoryNode$$.$compareSize$($curr$$.getData(), $bNext$$6_event$$589$$.getData())
  });
  if(null == $curr$$) {
    return $navigableItems$$3$$[0]
  }
  var $next$$10$$ = $curr$$;
  $bNext$$6_event$$589$$ = 39 == $bNext$$6_event$$589$$.keyCode || 40 == $bNext$$6_event$$589$$.keyCode ? !0 : !1;
  for(var $itemCount$$1$$ = $navigableItems$$3$$.length, $i$$727$$ = 0;$i$$727$$ < $itemCount$$1$$;$i$$727$$++) {
    if($navigableItems$$3$$[$i$$727$$] === $curr$$) {
      $next$$10$$ = $navigableItems$$3$$[$bNext$$6_event$$589$$ ? $i$$727$$ + 1 < $itemCount$$1$$ ? $i$$727$$ + 1 : $i$$727$$ : 0 <= $i$$727$$ - 1 ? $i$$727$$ - 1 : $i$$727$$];
      break
    }
  }
  return $next$$10$$
};
D.$DvtNBoxAutomation$$ = function $$DvtNBoxAutomation$$$($dvtComponent$$12$$) {
  this.Init($dvtComponent$$12$$)
};
(0,D.$goog$exportPath_$$)("DvtNBoxAutomation", D.$DvtNBoxAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxAutomation$$, D.$DvtAutomation$$, "DvtNBoxAutomation");
D.$DvtNBoxAutomation$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_nBox$");
D.$DvtNBoxAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtNBoxAutomation$$$$$GetSubIdForDomElement$$($displayable$$68_index$$213$$) {
  for(var $cell$$26_id$$229$$ = (0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$68_index$$213$$, "DvtNBoxCell"), $drawer$$2$$ = (0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$68_index$$213$$, "DvtNBoxDrawer");$displayable$$68_index$$213$$ && !($displayable$$68_index$$213$$ instanceof D.$DvtNBox$$);) {
    var $nBox$$ = this.$getComponent$(), $component$$16_r$$54_values$$10$$, $action$$23$$;
    if($displayable$$68_index$$213$$ instanceof D.$DvtNBoxNode$$) {
      return $displayable$$68_index$$213$$ = D.$DvtNBoxDataUtils$$.$getNodeIndex$($nBox$$, $displayable$$68_index$$213$$.getData().id), $component$$16_r$$54_values$$10$$ = (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$displayable$$68_index$$213$$]), $component$$16_r$$54_values$$10$$ = "node" + $component$$16_r$$54_values$$10$$, this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$23$$)
    }
    if($cell$$26_id$$229$$) {
      $component$$16_r$$54_values$$10$$ = $cell$$26_id$$229$$.getData().row;
      var $c$$35$$ = $cell$$26_id$$229$$.getData().column;
      $component$$16_r$$54_values$$10$$ = (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$component$$16_r$$54_values$$10$$, $c$$35$$]);
      $component$$16_r$$54_values$$10$$ = "cell" + $component$$16_r$$54_values$$10$$;
      if($displayable$$68_index$$213$$ instanceof D.$DvtNBoxCell$$) {
        return this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$23$$)
      }
      if($displayable$$68_index$$213$$ instanceof D.$DvtButton$$) {
        if((0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$68_index$$213$$, "DvtNBoxNodeOverflow")) {
          return $action$$23$$ = "overflow", this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$23$$)
        }
        if($displayable$$68_index$$213$$ == D.$DvtNBoxDataUtils$$.$getDisplayable$($nBox$$, $cell$$26_id$$229$$.getData(), "closeButton")) {
          return $action$$23$$ = "closeButton", this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$23$$)
        }
      }
      if($displayable$$68_index$$213$$ instanceof D.$DvtNBoxCategoryNode$$) {
        return $cell$$26_id$$229$$ = $displayable$$68_index$$213$$.getData().id, $action$$23$$ = "groupNode", $action$$23$$ = D.$DvtNBoxDataUtils$$.$getNode$($nBox$$, $displayable$$68_index$$213$$.getData().nodeIndices[0]).groupCategory ? $action$$23$$ + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$cell$$26_id$$229$$]) : $action$$23$$ + (0,D.$JSCompiler_StaticMethods__createBraces$$)($cell$$26_id$$229$$.split(";")), this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$23$$)
      }
    }
    if($drawer$$2$$) {
      $component$$16_r$$54_values$$10$$ = "dialog";
      if($displayable$$68_index$$213$$ instanceof D.$DvtNBoxDrawer$$) {
        return this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$23$$)
      }
      if($displayable$$68_index$$213$$ instanceof D.$DvtButton$$) {
        return $action$$23$$ = "closeButton", this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$23$$)
      }
    }
    if($displayable$$68_index$$213$$ instanceof D.$DvtNBoxCategoryNode$$) {
      return $cell$$26_id$$229$$ = $displayable$$68_index$$213$$.getData().id, $component$$16_r$$54_values$$10$$ = "groupNode", $component$$16_r$$54_values$$10$$ = D.$DvtNBoxDataUtils$$.$getNode$($nBox$$, $displayable$$68_index$$213$$.getData().nodeIndices[0]).groupCategory ? $component$$16_r$$54_values$$10$$ + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$cell$$26_id$$229$$]) : $component$$16_r$$54_values$$10$$ + (0,D.$JSCompiler_StaticMethods__createBraces$$)($cell$$26_id$$229$$.split(";")), 
      this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$23$$)
    }
    $displayable$$68_index$$213$$ = $displayable$$68_index$$213$$.getParent()
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.$_createSubId$ = function $$DvtNBoxAutomation$$$$$_createSubId$$($component$$17$$, $action$$24$$) {
  var $subId$$26$$ = $component$$17$$;
  $action$$24$$ && ($subId$$26$$ += "#" + $action$$24$$);
  return $subId$$26$$
};
D.$DvtNBoxAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtNBoxAutomation$$$$$getDomElementForSubId$$($displayable$$69_parsedId_subId$$27$$) {
  var $id$$230_nBox$$1$$ = this.$getComponent$();
  if("tooltip" == $displayable$$69_parsedId_subId$$27$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)($id$$230_nBox$$1$$)
  }
  $displayable$$69_parsedId_subId$$27$$ = this.$_parseSubId$($displayable$$69_parsedId_subId$$27$$);
  var $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = $displayable$$69_parsedId_subId$$27$$.component, $action$$25$$ = $displayable$$69_parsedId_subId$$27$$.action, $j$$96_values$$11$$ = null, $colCount$$inline_7349_container$$141_data$$65$$ = null;
  $displayable$$69_parsedId_subId$$27$$ = null;
  0 === $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.lastIndexOf("node", 0) && ($j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$, !0), $colCount$$inline_7349_container$$141_data$$65$$ = D.$DvtNBoxDataUtils$$.$getNode$($id$$230_nBox$$1$$, $j$$96_values$$11$$[0]), $displayable$$69_parsedId_subId$$27$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$230_nBox$$1$$, $colCount$$inline_7349_container$$141_data$$65$$));
  if(0 === $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.lastIndexOf("cell", 0)) {
    var $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ = $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$), $count$$18_nBox$$inline_7348$$ = this.$getComponent$(), $colCount$$inline_7349_container$$141_data$$65$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($count$$18_nBox$$inline_7348$$), $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($count$$18_nBox$$inline_7348$$, 
    $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$[0]), $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($count$$18_nBox$$inline_7348$$, $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$[1]), $colCount$$inline_7349_container$$141_data$$65$$ = D.$DvtNBoxDataUtils$$.$getCell$($id$$230_nBox$$1$$, null != $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ && null != $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ ? 
    $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ + $colCount$$inline_7349_container$$141_data$$65$$ * $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ : null);
    if(!$colCount$$inline_7349_container$$141_data$$65$$) {
      return null
    }
    $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$230_nBox$$1$$, $colCount$$inline_7349_container$$141_data$$65$$);
    if($action$$25$$) {
      $colCount$$inline_7349_container$$141_data$$65$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.$getChildContainer$();
      $colCount$$inline_7349_container$$141_data$$65$$.$getScrollingPane$ && ($colCount$$inline_7349_container$$141_data$$65$$ = $colCount$$inline_7349_container$$141_data$$65$$.$_container$);
      if("overflow" == $action$$25$$) {
        for($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ = $colCount$$inline_7349_container$$141_data$$65$$.$getNumChildren$();0 < $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$;$colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$--) {
          if($colCount$$inline_7349_container$$141_data$$65$$.$getChildAt$($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ - 1) instanceof D.$DvtNBoxNodeOverflow$$) {
            $displayable$$69_parsedId_subId$$27$$ = $colCount$$inline_7349_container$$141_data$$65$$.$getChildAt$($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ - 1).$_button$;
            break
          }
        }
      }
      "closeButton" == $action$$25$$ && ($displayable$$69_parsedId_subId$$27$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$230_nBox$$1$$, $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.getData(), "closeButton"));
      if(0 === $action$$25$$.lastIndexOf("node", 0)) {
        $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($action$$25$$, !0);
        $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ = $j$$96_values$$11$$[0];
        if(0 > $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$) {
          return null
        }
        $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$($id$$230_nBox$$1$$, $colCount$$inline_7349_container$$141_data$$65$$);
        for($count$$18_nBox$$inline_7348$$ = 0;$cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ && "DvtNBoxNode" == $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.$getTypeName$();) {
          if($count$$18_nBox$$inline_7348$$ == $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$) {
            $displayable$$69_parsedId_subId$$27$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$;
            break
          }
          $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$230_nBox$$1$$, $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.getData().__next);
          $count$$18_nBox$$inline_7348$$++
        }
      }
      if(0 === $action$$25$$.lastIndexOf("groupNode", 0)) {
        var $dialog_dialogContainer_value$$182$$;
        -1 < $action$$25$$.indexOf("{") ? $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBraces$$)($action$$25$$) : $dialog_dialogContainer_value$$182$$ = $action$$25$$.substring($action$$25$$.indexOf("[") + 1, $action$$25$$.indexOf("]"));
        for($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ = 0;$colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ < $colCount$$inline_7349_container$$141_data$$65$$.$getNumChildren$();$colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$++) {
          if($cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = $colCount$$inline_7349_container$$141_data$$65$$.$getChildAt$($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$), $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ instanceof D.$DvtNBoxCategoryNode$$) {
            if($id$$230_nBox$$1$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.getData().id, $j$$96_values$$11$$ && (0,D.$JSCompiler_StaticMethods__compareCategories$$)($j$$96_values$$11$$, $id$$230_nBox$$1$$.split(";"))) {
              $displayable$$69_parsedId_subId$$27$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$;
              break
            }else {
              if($dialog_dialogContainer_value$$182$$ && $dialog_dialogContainer_value$$182$$ == $id$$230_nBox$$1$$) {
                $displayable$$69_parsedId_subId$$27$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$;
                break
              }
            }
          }
        }
      }
    }else {
      $displayable$$69_parsedId_subId$$27$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$
    }
  }else {
    if(0 === $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.lastIndexOf("groupNode", 0)) {
      $colCount$$inline_7349_container$$141_data$$65$$ = $id$$230_nBox$$1$$.$getChildContainer$();
      -1 < $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.indexOf("{") ? $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBraces$$)($cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$) : $dialog_dialogContainer_value$$182$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.substring($cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.indexOf("[") + 1, $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.indexOf("]"));
      for($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ = 0;$colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ < $colCount$$inline_7349_container$$141_data$$65$$.$getNumChildren$();$colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$++) {
        if($cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = $colCount$$inline_7349_container$$141_data$$65$$.$getChildAt$($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$), $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ instanceof D.$DvtNBoxCategoryNode$$) {
          if($id$$230_nBox$$1$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.getData().id, $j$$96_values$$11$$ && (0,D.$JSCompiler_StaticMethods__compareCategories$$)($j$$96_values$$11$$, $id$$230_nBox$$1$$.split(";"))) {
            $displayable$$69_parsedId_subId$$27$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$;
            break
          }else {
            if($dialog_dialogContainer_value$$182$$ && $dialog_dialogContainer_value$$182$$ == $id$$230_nBox$$1$$) {
              $displayable$$69_parsedId_subId$$27$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$;
              break
            }
          }
        }
      }
    }else {
      if("dialog" === $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ && ($colCount$$inline_7349_container$$141_data$$65$$ = $id$$230_nBox$$1$$.$getChildContainer$())) {
        for($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ = 0;$colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ < $colCount$$inline_7349_container$$141_data$$65$$.$getNumChildren$();$colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$++) {
          if($colCount$$inline_7349_container$$141_data$$65$$.$getChildAt$($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$) instanceof D.$DvtNBoxDrawer$$) {
            $dialog_dialogContainer_value$$182$$ = $colCount$$inline_7349_container$$141_data$$65$$.$getChildAt$($colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$);
            if($action$$25$$) {
              if("closeButton" == $action$$25$$) {
                for($j$$96_values$$11$$ = 0;$j$$96_values$$11$$ < $dialog_dialogContainer_value$$182$$.$getNumChildren$();$j$$96_values$$11$$++) {
                  $dialog_dialogContainer_value$$182$$.$getChildAt$($j$$96_values$$11$$) instanceof D.$DvtButton$$ && ($displayable$$69_parsedId_subId$$27$$ = $dialog_dialogContainer_value$$182$$.$getChildAt$($j$$96_values$$11$$))
                }
              }
              if(0 === $action$$25$$.lastIndexOf("node", 0)) {
                $dialog_dialogContainer_value$$182$$ = $dialog_dialogContainer_value$$182$$.$getChildContainer$().$_container$;
                $j$$96_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($action$$25$$, !0);
                $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$ = $j$$96_values$$11$$[0];
                if(0 > $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$) {
                  return null
                }
                $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$($id$$230_nBox$$1$$, $dialog_dialogContainer_value$$182$$);
                for($count$$18_nBox$$inline_7348$$ = 0;$cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ && "DvtNBoxNode" == $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.$getTypeName$();) {
                  if($count$$18_nBox$$inline_7348$$ == $colIndex$$inline_7351_i$$719_nodeIndex$$7_values$$inline_7347$$) {
                    $displayable$$69_parsedId_subId$$27$$ = $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$;
                    break
                  }
                  $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$230_nBox$$1$$, $cell$$27_component$$18_node$$254_rowIndex$$inline_7350$$.getData().__next);
                  $count$$18_nBox$$inline_7348$$++
                }
              }
            }else {
              $displayable$$69_parsedId_subId$$27$$ = $dialog_dialogContainer_value$$182$$
            }
            break
          }
        }
      }
    }
  }
  return $displayable$$69_parsedId_subId$$27$$ ? $displayable$$69_parsedId_subId$$27$$.$getElem$() : null
};
D.$DvtNBoxAutomation$$.prototype.getDomElementForSubId = D.$DvtNBoxAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtNBoxAutomation$$.prototype.$_parseSubId$ = function $$DvtNBoxAutomation$$$$$_parseSubId$$($subId$$28$$) {
  var $component$$19$$ = null, $action$$26$$ = null, $hashIndex$$ = $subId$$28$$.indexOf("#");
  -1 !== $hashIndex$$ ? ($component$$19$$ = $subId$$28$$.substring(0, $hashIndex$$), $action$$26$$ = $subId$$28$$.substring($hashIndex$$ + 1)) : $component$$19$$ = $subId$$28$$;
  return{component:$component$$19$$, action:$action$$26$$}
};
D.$DvtNBoxAutomation$$.prototype.$getComponent$ = (0,D.$JSCompiler_get$$)("$_nBox$");
D.$JSCompiler_StaticMethods__parseBrackets$$ = function $$JSCompiler_StaticMethods__parseBrackets$$$($str$$17$$, $bParseInt$$) {
  var $values$$12$$ = $str$$17$$.substring($str$$17$$.indexOf("[") + 1, $str$$17$$.indexOf("]")).split(",");
  if($bParseInt$$) {
    for(var $i$$720$$ = 0;$i$$720$$ < $values$$12$$.length;$i$$720$$++) {
      $values$$12$$[$i$$720$$] = (0,window.parseInt)($values$$12$$[$i$$720$$])
    }
  }
  return 0 < $values$$12$$.length ? $values$$12$$ : null
};
D.$JSCompiler_StaticMethods__createBrackets$$ = function $$JSCompiler_StaticMethods__createBrackets$$$($values$$13$$) {
  return 0 < $values$$13$$.length ? "[" + $values$$13$$.join(",") + "]" : ""
};
D.$JSCompiler_StaticMethods__parseBraces$$ = function $$JSCompiler_StaticMethods__parseBraces$$$($str$$18$$) {
  return $str$$18$$.substring($str$$18$$.indexOf("{") + 1, $str$$18$$.lastIndexOf("}")).split(",")
};
D.$JSCompiler_StaticMethods__createBraces$$ = function $$JSCompiler_StaticMethods__createBraces$$$($values$$14$$) {
  for(var $str$$19$$ = "{", $i$$721$$ = 0;$i$$721$$ < $values$$14$$.length;$i$$721$$++) {
    $str$$19$$ += $values$$14$$[$i$$721$$].trim() + ","
  }
  return $str$$19$$.substring(0, $str$$19$$.length - 1) + "}"
};
D.$JSCompiler_StaticMethods__compareCategories$$ = function $$JSCompiler_StaticMethods__compareCategories$$$($arr1$$, $arr2$$) {
  if($arr1$$.length != $arr2$$.length) {
    return!1
  }
  $arr1$$.sort();
  $arr2$$.sort();
  for(var $i$$722$$ = 0;$i$$722$$ < $arr1$$.length;$i$$722$$++) {
    if($arr1$$[$i$$722$$].trim() != $arr2$$[$i$$722$$].trim()) {
      return!1
    }
  }
  return!0
};
D.$JSCompiler_StaticMethods__getParentObject$$ = function $$JSCompiler_StaticMethods__getParentObject$$$($displayable$$70$$, $type$$229$$) {
  for(var $parent$$76$$ = $displayable$$70$$;$parent$$76$$;) {
    if($parent$$76$$.$getTypeName$() == $type$$229$$) {
      return $parent$$76$$
    }
    $parent$$76$$ = $parent$$76$$.getParent()
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.getData = function $$DvtNBoxAutomation$$$$getData$($key$$119$$, $attribute$$2$$) {
  if(this.$_nBox$) {
    if("rowsTitle" == $key$$119$$) {
      if(this.$_nBox$.$getOptions$().rowsTitle) {
        return this.$_nBox$.$getOptions$().rowsTitle
      }
    }else {
      if("rowCount" == $key$$119$$) {
        var $cols$$3_data$$66_rows$$13$$ = this.$_nBox$.$getOptions$().rows;
        if($cols$$3_data$$66_rows$$13$$) {
          return $cols$$3_data$$66_rows$$13$$.length
        }
      }else {
        if("row" == $key$$119$$) {
          if(0 <= D.$DvtNBoxDataUtils$$.$getRowIndex$(this.$_nBox$, $attribute$$2$$)) {
            return $cols$$3_data$$66_rows$$13$$ = {}, $cols$$3_data$$66_rows$$13$$.label = D.$DvtNBoxDataUtils$$.$getRowLabel$(this.$_nBox$, $attribute$$2$$), $cols$$3_data$$66_rows$$13$$
          }
        }else {
          if("columnsTitle" == $key$$119$$) {
            if(this.$_nBox$.$getOptions$().columnsTitle) {
              return this.$_nBox$.$getOptions$().columnsTitle
            }
          }else {
            if("columnCount" == $key$$119$$) {
              if($cols$$3_data$$66_rows$$13$$ = this.$_nBox$.$getOptions$().columns) {
                return $cols$$3_data$$66_rows$$13$$.length
              }
            }else {
              if("column" == $key$$119$$) {
                if(0 <= D.$DvtNBoxDataUtils$$.$getColumnIndex$(this.$_nBox$, $attribute$$2$$)) {
                  return $cols$$3_data$$66_rows$$13$$ = {}, $cols$$3_data$$66_rows$$13$$.label = D.$DvtNBoxDataUtils$$.$getColumnLabel$(this.$_nBox$, $attribute$$2$$), $cols$$3_data$$66_rows$$13$$
                }
              }else {
                if("groupBehavior" == $key$$119$$) {
                  return D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$)
                }
              }
            }
          }
        }
      }
    }
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.getData = D.$DvtNBoxAutomation$$.prototype.getData;
D.$DvtNBoxAutomation$$.prototype.$getGroupNode$ = function $$DvtNBoxAutomation$$$$$getGroupNode$$($groupInfo$$1$$) {
  if($groupInfo$$1$$ && D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
    if("string" === typeof $groupInfo$$1$$) {
      return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupInfo$$1$$)
    }
    var $groupData$$ = "", $key$$120$$;
    for($key$$120$$ in $groupInfo$$1$$) {
      $groupData$$ = $groupInfo$$1$$[$key$$120$$] ? $groupData$$ + ($key$$120$$ + ":" + $groupInfo$$1$$[$key$$120$$] + ";") : $groupData$$ + ($key$$120$$ + ";")
    }
    return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupData$$.substring(0, $groupData$$.length - 1))
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.getGroupNode = D.$DvtNBoxAutomation$$.prototype.$getGroupNode$;
D.$JSCompiler_StaticMethods__getGroupNodeData$$ = function $$JSCompiler_StaticMethods__getGroupNodeData$$$($JSCompiler_StaticMethods__getGroupNodeData$self$$, $groupData$$1$$) {
  var $categoryData_indicatorIcon$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $groupData$$1$$);
  if($categoryData_indicatorIcon$$) {
    var $categoryNode$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
    if($categoryNode$$) {
      var $data$$67$$ = {};
      $data$$67$$.selected = $categoryNode$$.$isSelected$();
      $data$$67$$.color = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
      $data$$67$$.indicatorColor = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
      $data$$67$$.tooltip = $categoryNode$$.$getShortDesc$();
      $data$$67$$.size = $categoryData_indicatorIcon$$.nodeIndices ? $categoryData_indicatorIcon$$.nodeIndices.length : -1;
      $categoryData_indicatorIcon$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$, "indicatorIcon");
      $data$$67$$.indicatorIcon = $JSCompiler_StaticMethods__getGroupNodeData$self$$.$_getMarkerData$($categoryData_indicatorIcon$$);
      return $data$$67$$
    }
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.$getCell$ = function $$DvtNBoxAutomation$$$$$getCell$$($rowValue$$, $columnValue$$) {
  var $cellObj$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $rowValue$$, $columnValue$$);
  if($cellObj$$) {
    var $cellIndex$$1$$ = $cellObj$$.$getCellIndex$(), $data$$68$$ = {};
    $data$$68$$.label = $cellObj$$.$getLabel$();
    var $colorFill$$inline_7368_style$$inline_7366$$ = D.$DvtNBoxStyleUtils$$.$getCellStyle$($cellObj$$.$_nbox$, $cellObj$$.$getCellIndex$()), $bgFill$$inline_7367$$ = $colorFill$$inline_7368_style$$inline_7366$$.$getStyle$("background"), $colorFill$$inline_7368_style$$inline_7366$$ = $colorFill$$inline_7368_style$$inline_7366$$.$getStyle$("background-color");
    $data$$68$$.background = $bgFill$$inline_7367$$ ? $bgFill$$inline_7367$$ : $colorFill$$inline_7368_style$$inline_7366$$;
    $data$$68$$.getNodeCount = function $$data$$68$$$getNodeCount$() {
      return $cellObj$$.$getNodeCount$()
    };
    $data$$68$$.rowValue = $rowValue$$;
    $data$$68$$.columnValue = $columnValue$$;
    $data$$68$$.cellIndex = $cellIndex$$1$$;
    return $data$$68$$
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.getCell = D.$DvtNBoxAutomation$$.prototype.$getCell$;
D.$DvtNBoxAutomation$$.prototype.$getCellNode$ = function $$DvtNBoxAutomation$$$$$getCellNode$$($cellData$$2$$, $nodeIndex$$8$$) {
  if(this.$_nBox$ && !D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$)) {
    var $nodeData$$38$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $cellData$$2$$.rowValue, $cellData$$2$$.columnValue).$getNode$($nodeIndex$$8$$);
    return this.$_getNode$($nodeData$$38$$)
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.getCellNode = D.$DvtNBoxAutomation$$.prototype.$getCellNode$;
D.$DvtNBoxAutomation$$.prototype.$getNode$ = function $$DvtNBoxAutomation$$$$$getNode$$($nodeData$$39_nodeIndex$$9$$) {
  $nodeData$$39_nodeIndex$$9$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $nodeData$$39_nodeIndex$$9$$);
  return this.$_getNode$($nodeData$$39_nodeIndex$$9$$)
};
D.$DvtNBoxAutomation$$.prototype.getNode = D.$DvtNBoxAutomation$$.prototype.$getNode$;
D.$DvtNBoxAutomation$$.prototype.$_getNode$ = function $$DvtNBoxAutomation$$$$$_getNode$$($indicatorIcon$$1_nodeData$$40$$) {
  if($indicatorIcon$$1_nodeData$$40$$) {
    var $icon$$42_node$$255$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
    if($icon$$42_node$$255$$) {
      var $data$$69$$ = {};
      $data$$69$$.selected = $icon$$42_node$$255$$.$isSelected$();
      $data$$69$$.tooltip = $icon$$42_node$$255$$.$getShortDesc$();
      $data$$69$$.color = D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
      $data$$69$$.indicatorColor = D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
      $indicatorIcon$$1_nodeData$$40$$.label && ($data$$69$$.label = $indicatorIcon$$1_nodeData$$40$$.label);
      $indicatorIcon$$1_nodeData$$40$$.secondaryLabel && ($data$$69$$.secondaryLabel = $indicatorIcon$$1_nodeData$$40$$.secondaryLabel);
      $icon$$42_node$$255$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$, "icon");
      $data$$69$$.icon = this.$_getMarkerData$($icon$$42_node$$255$$);
      $indicatorIcon$$1_nodeData$$40$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$, "indicatorIcon");
      $data$$69$$.indicatorIcon = this.$_getMarkerData$($indicatorIcon$$1_nodeData$$40$$);
      return $data$$69$$
    }
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.$getCellGroupNode$ = function $$DvtNBoxAutomation$$$$$getCellGroupNode$$($cellData$$3$$, $groupInfo$$2$$) {
  if($groupInfo$$2$$ && D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    if("string" === typeof $groupInfo$$2$$) {
      return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $cellData$$3$$.cellIndex + ":" + $groupInfo$$2$$)
    }
    var $groupData$$2$$ = $cellData$$3$$.cellIndex + ":", $key$$121$$;
    for($key$$121$$ in $groupInfo$$2$$) {
      $groupData$$2$$ = $groupInfo$$2$$[$key$$121$$] ? $groupData$$2$$ + ($key$$121$$ + ":" + $groupInfo$$2$$[$key$$121$$] + ";") : $groupData$$2$$ + ($key$$121$$ + ";")
    }
    return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupData$$2$$.substring(0, $groupData$$2$$.length - 1))
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.getCellGroupNode = D.$DvtNBoxAutomation$$.prototype.$getCellGroupNode$;
D.$DvtNBoxAutomation$$.prototype.$_getMarkerData$ = function $$DvtNBoxAutomation$$$$$_getMarkerData$$($marker$$14$$) {
  if($marker$$14$$) {
    var $data$$70$$ = {};
    $data$$70$$.shape = $marker$$14$$ instanceof D.$DvtSimpleMarker$$ ? $marker$$14$$.$getType$() : "none";
    $marker$$14$$.$getFill$() && ($data$$70$$.color = $marker$$14$$.$getFill$().$getColor$());
    return $data$$70$$
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.$getDialog$ = function $$DvtNBoxAutomation$$$$$getDialog$$() {
  var $data$$71_drawer$$3$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
  if($data$$71_drawer$$3$$) {
    var $categoryData$$1$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $data$$71_drawer$$3$$.id);
    if($categoryData$$1$$) {
      var $categoryNode$$1_groupInfo$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $categoryData$$1$$), $data$$71_drawer$$3$$ = {};
      $data$$71_drawer$$3$$.label = $categoryNode$$1_groupInfo$$3$$.$getLabel$();
      $data$$71_drawer$$3$$.getNodeCount = function $$data$$71_drawer$$3$$$getNodeCount$() {
        return $categoryData$$1$$.nodeIndices ? $categoryData$$1$$.nodeIndices.length : -1
      };
      for(var $categoryNode$$1_groupInfo$$3$$ = {}, $categories$$20$$ = $categoryData$$1$$.id.split(";"), $idx$$32$$ = 0;$idx$$32$$ < $categories$$20$$.length;$idx$$32$$++) {
        var $row$$48$$ = $categories$$20$$[$idx$$32$$].split(":");
        $row$$48$$ && 2 == $row$$48$$.length && ($categoryNode$$1_groupInfo$$3$$[$row$$48$$[0]] = $row$$48$$[1])
      }
      $data$$71_drawer$$3$$.groupInfo = $categoryNode$$1_groupInfo$$3$$;
      return $data$$71_drawer$$3$$
    }
  }
  return null
};
D.$DvtNBoxAutomation$$.prototype.getDialog = D.$DvtNBoxAutomation$$.prototype.$getDialog$;
D.$DvtNBoxAutomation$$.prototype.$getDialogNode$ = function $$DvtNBoxAutomation$$$$$getDialogNode$$($nodeData$$41_nodeIndex$$10$$) {
  var $categoryData$$2_drawer$$4$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
  return $categoryData$$2_drawer$$4$$ && ($categoryData$$2_drawer$$4$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $categoryData$$2_drawer$$4$$.id)) && $categoryData$$2_drawer$$4$$.nodeIndices && null != $categoryData$$2_drawer$$4$$.nodeIndices[$nodeData$$41_nodeIndex$$10$$] ? ($nodeData$$41_nodeIndex$$10$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $categoryData$$2_drawer$$4$$.nodeIndices[$nodeData$$41_nodeIndex$$10$$]), this.$_getNode$($nodeData$$41_nodeIndex$$10$$)) : null
};
D.$DvtNBoxAutomation$$.prototype.getDialogNode = D.$DvtNBoxAutomation$$.prototype.$getDialogNode$;
D.$DvtNBoxAutomation$$.prototype.$getNodeIdFromIndex$ = function $$DvtNBoxAutomation$$$$$getNodeIdFromIndex$$($index$$215$$) {
  return D.$DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $index$$215$$).id
};
D.$DvtNBoxAutomation$$.prototype.getNodeIdFromIndex = D.$DvtNBoxAutomation$$.prototype.$getNodeIdFromIndex$;
D.$DvtNBoxAutomation$$.prototype.$getNodeIndexFromId$ = function $$DvtNBoxAutomation$$$$$getNodeIndexFromId$$($id$$231$$) {
  return D.$DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nBox$, $id$$231$$)
};
D.$DvtNBoxAutomation$$.prototype.getNodeIndexFromId = D.$DvtNBoxAutomation$$.prototype.$getNodeIndexFromId$;
D.$DvtNBoxRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxRenderer$$, D.$DvtObj$$, "DvtNBoxRenderer");
D.$DvtNBoxRenderer$$.$render$ = function $$DvtNBoxRenderer$$$$render$$($nbox$$46$$, $container$$157$$, $availSpace$$103$$) {
  D.$DvtNBoxRenderer$$.$_renderBackground$($nbox$$46$$, $container$$157$$, $availSpace$$103$$);
  D.$DvtNBoxRenderer$$.$_renderLegend$($nbox$$46$$, $container$$157$$, $availSpace$$103$$);
  D.$DvtNBoxRenderer$$.$_adjustAvailSpace$($availSpace$$103$$);
  var $cellCounts$$7$$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$($nbox$$46$$), $cellLayout$$8$$ = D.$DvtNBoxCellRenderer$$.$calculateCellLayout$($nbox$$46$$, $cellCounts$$7$$);
  D.$DvtNBoxRenderer$$.$_renderTitles$($nbox$$46$$, $container$$157$$, $cellLayout$$8$$, $availSpace$$103$$);
  D.$DvtNBoxRenderer$$.$_adjustAvailSpace$($availSpace$$103$$);
  D.$DvtNBoxRenderer$$.$_renderCells$($nbox$$46$$, $container$$157$$, $cellCounts$$7$$, $cellLayout$$8$$, $availSpace$$103$$);
  D.$DvtNBoxRenderer$$.$_renderNodes$($nbox$$46$$, $container$$157$$, $cellCounts$$7$$, $availSpace$$103$$);
  D.$DvtNBoxRenderer$$.$_renderInitialSelection$($nbox$$46$$);
  D.$DvtNBoxRenderer$$.$_fixZOrder$($nbox$$46$$)
};
D.$DvtNBoxRenderer$$.$_renderBackground$ = function $$DvtNBoxRenderer$$$$_renderBackground$$($clipPath$$12_nbox$$47_rect$$37$$, $container$$158$$, $availSpace$$104$$) {
  $clipPath$$12_nbox$$47_rect$$37$$ = new D.$DvtRect$$($clipPath$$12_nbox$$47_rect$$37$$.$getCtx$(), $availSpace$$104$$.x, $availSpace$$104$$.y, $availSpace$$104$$.$w$, $availSpace$$104$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($clipPath$$12_nbox$$47_rect$$37$$);
  $container$$158$$.$addChild$($clipPath$$12_nbox$$47_rect$$37$$);
  $clipPath$$12_nbox$$47_rect$$37$$ = new D.$DvtClipPath$$;
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$12_nbox$$47_rect$$37$$, $availSpace$$104$$.x, $availSpace$$104$$.y, $availSpace$$104$$.$w$, $availSpace$$104$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$158$$, $clipPath$$12_nbox$$47_rect$$37$$)
};
D.$DvtNBoxRenderer$$.$_renderLegend$ = function $$DvtNBoxRenderer$$$$_renderLegend$$($nbox$$48$$, $container$$159_legendDwn_legendDwnImg$$, $availSpace$$105$$) {
  var $legendData$$4$$ = D.$DvtNBoxDataUtils$$.$getLegend$($nbox$$48$$);
  if($legendData$$4$$ && $legendData$$4$$.sections) {
    var $dims$$59_options$$219$$ = $nbox$$48$$.$getOptions$(), $rtl$$30$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$48$$.$getCtx$()), $panelDrawer$$3$$ = new D.$DvtPanelDrawer$$($nbox$$48$$.$getCtx$(), $nbox$$48$$.$processEvent$, $nbox$$48$$, "pd1");
    $panelDrawer$$3$$.$addEvtListener$("dvtPanelDrawerEvent", $nbox$$48$$.$processEvent$, !1, $nbox$$48$$);
    $panelDrawer$$3$$.$_dockSide$ = "top";
    $panelDrawer$$3$$.$setMaxHeight$($availSpace$$105$$.$h$ - $dims$$59_options$$219$$.__layout.legendBottomGap);
    $panelDrawer$$3$$.$setMaxWidth$($availSpace$$105$$.$w$ / 3);
    $container$$159_legendDwn_legendDwnImg$$.$addChild$($panelDrawer$$3$$);
    var $legend$$28$$ = (0,D.$DvtLegend$newInstance$$)($nbox$$48$$.$getCtx$(), $nbox$$48$$.$processEvent$, $nbox$$48$$);
    $container$$159_legendDwn_legendDwnImg$$.$addChild$($legend$$28$$);
    var $legendEna_legendEnaImg_preferredSize$$5$$ = $legend$$28$$.$getPreferredSize$($legendData$$4$$, $panelDrawer$$3$$.$getMaxContentWidth$(), $panelDrawer$$3$$.$getMaxContentHeight$());
    $legend$$28$$.$render$($legendData$$4$$, $legendEna_legendEnaImg_preferredSize$$5$$.$w$, $legendEna_legendEnaImg_preferredSize$$5$$.$h$);
    $container$$159_legendDwn_legendDwnImg$$.removeChild($legend$$28$$);
    var $legendEna_legendEnaImg_preferredSize$$5$$ = $dims$$59_options$$219$$._resources.legend_ena, $legendOvr_legendOvrImg$$ = $dims$$59_options$$219$$._resources.legend_ovr;
    $container$$159_legendDwn_legendDwnImg$$ = $dims$$59_options$$219$$._resources.legend_dwn;
    $legendEna_legendEnaImg_preferredSize$$5$$ = new D.$DvtImage$$($nbox$$48$$.$getCtx$(), $legendEna_legendEnaImg_preferredSize$$5$$.src, 0, 0, $legendEna_legendEnaImg_preferredSize$$5$$.width, $legendEna_legendEnaImg_preferredSize$$5$$.height);
    $legendOvr_legendOvrImg$$ = new D.$DvtImage$$($nbox$$48$$.$getCtx$(), $legendOvr_legendOvrImg$$.src, 0, 0, $legendOvr_legendOvrImg$$.width, $legendOvr_legendOvrImg$$.height);
    $container$$159_legendDwn_legendDwnImg$$ = new D.$DvtImage$$($nbox$$48$$.$getCtx$(), $container$$159_legendDwn_legendDwnImg$$.src, 0, 0, $container$$159_legendDwn_legendDwnImg$$.width, $container$$159_legendDwn_legendDwnImg$$.height);
    (0,D.$JSCompiler_StaticMethods_addPanel$$)($panelDrawer$$3$$, $legend$$28$$, $legendEna_legendEnaImg_preferredSize$$5$$, $legendOvr_legendOvrImg$$, $container$$159_legendDwn_legendDwnImg$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND"), "legend");
    $rtl$$30$$ && ($panelDrawer$$3$$.$_discloseDirection$ = "right");
    $panelDrawer$$3$$.$renderComponent$();
    "disclosed" == $dims$$59_options$$219$$[D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$] && ((0,D.$JSCompiler_StaticMethods_setDisplayedPanelId$$)($panelDrawer$$3$$, "legend"), $panelDrawer$$3$$.$setDisclosed$(!0, !0));
    $dims$$59_options$$219$$ = $panelDrawer$$3$$.$getDimensions$();
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelDrawer$$3$$, $rtl$$30$$ ? 0 : $availSpace$$105$$.$w$, 0);
    $rtl$$30$$ && ($availSpace$$105$$.x += $dims$$59_options$$219$$.$w$);
    $availSpace$$105$$.$w$ -= $dims$$59_options$$219$$.$w$;
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, $legendData$$4$$, $legend$$28$$, "legend");
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, $legendData$$4$$, $panelDrawer$$3$$, "panelDrawer")
  }
};
D.$DvtNBoxRenderer$$.$_renderTitles$ = function $$DvtNBoxRenderer$$$$_renderTitles$$($nbox$$49$$, $container$$160$$, $cellLayout$$9$$, $availSpace$$106$$) {
  var $i$$734_options$$220$$ = $nbox$$49$$.$getOptions$(), $columnCount$$7$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$49$$), $rowCount$$12$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$49$$), $componentGap_maximizedColumnIndex$$2$$ = $i$$734_options$$220$$.__layout.componentGap, $rowHeaderWidth$$4_titleGap$$3$$ = $i$$734_options$$220$$.__layout.titleGap, $columnHeaderHeight_titleComponentGap$$ = $i$$734_options$$220$$.__layout.titleComponentGap, $rtl$$31$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$49$$.$getCtx$());
  $availSpace$$106$$.x += $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$106$$.y += $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$106$$.$w$ -= 2 * $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$106$$.$h$ -= 2 * $componentGap_maximizedColumnIndex$$2$$;
  var $maximizedColumn$$7_row$$49$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$49$$), $componentGap_maximizedColumnIndex$$2$$ = $maximizedColumn$$7_row$$49$$ ? D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$49$$, $maximizedColumn$$7_row$$49$$) : -1, $maximizedRow$$7$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$49$$), $maximizedRowIndex$$2$$ = $maximizedRow$$7$$ ? D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$49$$, $maximizedRow$$7$$) : -1, $cellDims$$2_columnsTitle$$ = null, $rowsTitle$$ = 
  null, $columnLabels$$ = [], $rowLabels$$ = [], $columnsTitleHeight$$ = 0, $rowsTitleWidth$$ = 0, $rowTitleGap$$ = 0, $columnTitleGap$$ = 0, $columnLabelsHeight$$ = 0, $rowLabelsWidth$$ = 0, $rowTitleComponentGap$$ = 0, $columnTitleComponentGap$$ = 0;
  $i$$734_options$$220$$[D.$DvtNBoxConstants$$.$COLUMNS_TITLE$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$49$$.$getCtx$(), $i$$734_options$$220$$[D.$DvtNBoxConstants$$.$COLUMNS_TITLE$], $i$$734_options$$220$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLUMNS_TITLE_STYLE$], "center", "middle"), $container$$160$$.$addChild$($cellDims$$2_columnsTitle$$), $columnsTitleHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellDims$$2_columnsTitle$$).$h$);
  $i$$734_options$$220$$[D.$DvtNBoxConstants$$.$ROWS_TITLE$] && ($rowsTitle$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$49$$.$getCtx$(), $i$$734_options$$220$$[D.$DvtNBoxConstants$$.$ROWS_TITLE$], $i$$734_options$$220$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ROWS_TITLE_STYLE$], "center", "middle"), $container$$160$$.$addChild$($rowsTitle$$), $rowsTitleWidth$$ = D.$DvtTextUtils$$.$guessTextDimensions$($rowsTitle$$).$h$);
  for($i$$734_options$$220$$ = 0;$i$$734_options$$220$$ < $columnCount$$7$$;$i$$734_options$$220$$++) {
    var $column$$8_rowLabel$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$49$$, $i$$734_options$$220$$);
    if($column$$8_rowLabel$$[D.$DvtNBoxConstants$$.$LABEL$]) {
      var $columnLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$49$$.$getCtx$(), $column$$8_rowLabel$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getColumnLabelStyle$($nbox$$49$$, $i$$734_options$$220$$), "center", "middle"), $columnLabelsHeight$$ = window.Math.max($columnLabelsHeight$$, D.$DvtTextUtils$$.$guessTextDimensions$($columnLabel$$).$h$);
      if(!$maximizedColumn$$7_row$$49$$ || $maximizedColumn$$7_row$$49$$ == $column$$8_rowLabel$$[D.$DvtNBoxConstants$$.ID]) {
        $columnLabels$$[$i$$734_options$$220$$] = $columnLabel$$, $container$$160$$.$addChild$($columnLabels$$[$i$$734_options$$220$$])
      }
    }
  }
  for($i$$734_options$$220$$ = 0;$i$$734_options$$220$$ < $rowCount$$12$$;$i$$734_options$$220$$++) {
    if($maximizedColumn$$7_row$$49$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$49$$, $i$$734_options$$220$$), $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.$LABEL$] && ($column$$8_rowLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$49$$.$getCtx$(), $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getRowLabelStyle$($nbox$$49$$, $i$$734_options$$220$$), "center", "middle"), $rowLabelsWidth$$ = window.Math.max($rowLabelsWidth$$, D.$DvtTextUtils$$.$guessTextDimensions$($column$$8_rowLabel$$).$h$), 
    !$maximizedRow$$7$$ || $maximizedRow$$7$$ == $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.ID])) {
      $rowLabels$$[$i$$734_options$$220$$] = $column$$8_rowLabel$$, $container$$160$$.$addChild$($rowLabels$$[$i$$734_options$$220$$])
    }
  }
  if($rowsTitleWidth$$ || $rowLabelsWidth$$) {
    $rowTitleComponentGap$$ = $columnHeaderHeight_titleComponentGap$$, $rowsTitleWidth$$ && $rowLabelsWidth$$ && ($rowTitleGap$$ = $rowHeaderWidth$$4_titleGap$$3$$)
  }
  if($columnsTitleHeight$$ || $columnLabelsHeight$$) {
    $columnTitleComponentGap$$ = $columnHeaderHeight_titleComponentGap$$, $columnsTitleHeight$$ && $columnLabelsHeight$$ && ($columnTitleGap$$ = $rowHeaderWidth$$4_titleGap$$3$$)
  }
  $rowHeaderWidth$$4_titleGap$$3$$ = $rowsTitleWidth$$ + $rowTitleGap$$ + $rowLabelsWidth$$ + $rowTitleComponentGap$$;
  $columnHeaderHeight_titleComponentGap$$ = $columnsTitleHeight$$ + $columnTitleGap$$ + $columnLabelsHeight$$ + $columnTitleComponentGap$$;
  $availSpace$$106$$.x += $rtl$$31$$ ? 0 : $rowHeaderWidth$$4_titleGap$$3$$;
  $availSpace$$106$$.$w$ -= $rowHeaderWidth$$4_titleGap$$3$$;
  $availSpace$$106$$.$h$ -= $columnHeaderHeight_titleComponentGap$$;
  $cellDims$$2_columnsTitle$$ && D.$DvtTextUtils$$.$fitText$($cellDims$$2_columnsTitle$$, $availSpace$$106$$.$w$, $columnsTitleHeight$$, $container$$160$$) && (D.$DvtNBoxRenderer$$.$positionText$($cellDims$$2_columnsTitle$$, $availSpace$$106$$.x + $availSpace$$106$$.$w$ / 2, $availSpace$$106$$.y + $availSpace$$106$$.$h$ + $columnHeaderHeight_titleComponentGap$$ - $columnsTitleHeight$$ / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$49$$, $nbox$$49$$.$getOptions$(), $cellDims$$2_columnsTitle$$, 
  D.$DvtNBoxConstants$$.$COLUMNS_TITLE$));
  $rowsTitle$$ && D.$DvtTextUtils$$.$fitText$($rowsTitle$$, $availSpace$$106$$.$h$, $rowsTitleWidth$$, $container$$160$$) && (D.$DvtNBoxRenderer$$.$positionText$($rowsTitle$$, $availSpace$$106$$.x + ($rtl$$31$$ ? $availSpace$$106$$.$w$ : 0) + ($rtl$$31$$ ? 1 : -1) * ($rowHeaderWidth$$4_titleGap$$3$$ - $rowsTitleWidth$$ / 2), $availSpace$$106$$.y + $availSpace$$106$$.$h$ / 2, $rtl$$31$$ ? window.Math.PI / 2 : -window.Math.PI / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$49$$, $nbox$$49$$.$getOptions$(), 
  $rowsTitle$$, D.$DvtNBoxConstants$$.$ROWS_TITLE$));
  for($i$$734_options$$220$$ = 0;$i$$734_options$$220$$ < $columnCount$$7$$;$i$$734_options$$220$$++) {
    $columnLabels$$[$i$$734_options$$220$$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$49$$, -1 == $maximizedRowIndex$$2$$ ? 0 : $maximizedRowIndex$$2$$, $i$$734_options$$220$$, $cellLayout$$9$$, $availSpace$$106$$), D.$DvtTextUtils$$.$fitText$($columnLabels$$[$i$$734_options$$220$$], $cellDims$$2_columnsTitle$$.$w$, $columnLabelsHeight$$, $container$$160$$) && (D.$DvtNBoxRenderer$$.$positionText$($columnLabels$$[$i$$734_options$$220$$], $cellDims$$2_columnsTitle$$.x + 
    $cellDims$$2_columnsTitle$$.$w$ / 2, $availSpace$$106$$.y + $availSpace$$106$$.$h$ + $columnTitleComponentGap$$ + $columnLabelsHeight$$ / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$49$$, D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$49$$, $i$$734_options$$220$$), $columnLabels$$[$i$$734_options$$220$$], D.$DvtNBoxConstants$$.$LABEL$)))
  }
  for($i$$734_options$$220$$ = 0;$i$$734_options$$220$$ < $rowCount$$12$$;$i$$734_options$$220$$++) {
    $rowLabels$$[$i$$734_options$$220$$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$49$$, $i$$734_options$$220$$, -1 == $componentGap_maximizedColumnIndex$$2$$ ? 0 : $componentGap_maximizedColumnIndex$$2$$, $cellLayout$$9$$, $availSpace$$106$$), D.$DvtTextUtils$$.$fitText$($rowLabels$$[$i$$734_options$$220$$], $cellDims$$2_columnsTitle$$.$h$, $rowLabelsWidth$$, $container$$160$$) && (D.$DvtNBoxRenderer$$.$positionText$($rowLabels$$[$i$$734_options$$220$$], 
    $availSpace$$106$$.x + ($rtl$$31$$ ? $availSpace$$106$$.$w$ : 0) + ($rtl$$31$$ ? 1 : -1) * ($rowTitleComponentGap$$ + $rowLabelsWidth$$ / 2), $cellDims$$2_columnsTitle$$.y + $cellDims$$2_columnsTitle$$.$h$ / 2, $rtl$$31$$ ? window.Math.PI / 2 : -window.Math.PI / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$49$$, D.$DvtNBoxDataUtils$$.$getRow$($nbox$$49$$, $i$$734_options$$220$$), $rowLabels$$[$i$$734_options$$220$$], D.$DvtNBoxConstants$$.$LABEL$)))
  }
};
D.$DvtNBoxRenderer$$.$createText$ = function $$DvtNBoxRenderer$$$$createText$$($ctx$$5_text$$100$$, $strText$$3$$, $style$$104$$, $halign$$10$$, $valign$$6$$) {
  $ctx$$5_text$$100$$ = new D.$DvtOutputText$$($ctx$$5_text$$100$$, $strText$$3$$, 0, 0);
  $ctx$$5_text$$100$$.$setCSSStyle$($style$$104$$);
  $ctx$$5_text$$100$$.$setHorizAlignment$($halign$$10$$);
  $ctx$$5_text$$100$$.$setVertAlignment$($valign$$6$$);
  return $ctx$$5_text$$100$$
};
D.$DvtNBoxRenderer$$.$_renderCells$ = function $$DvtNBoxRenderer$$$$_renderCells$$($nbox$$50$$, $container$$161$$, $cellCounts$$8$$, $cellLayout$$10$$, $availSpace$$107$$) {
  for(var $rowCount$$13$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$50$$), $columnCount$$8$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$50$$), $r$$60$$ = 0;$r$$60$$ < $rowCount$$13$$;$r$$60$$++) {
    for(var $c$$41$$ = 0;$c$$41$$ < $columnCount$$8$$;$c$$41$$++) {
      var $cell$$37$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$50$$, $r$$60$$ * $columnCount$$8$$ + $c$$41$$);
      D.$DvtNBoxCell$$.newInstance($nbox$$50$$, $cell$$37$$).$render$($container$$161$$, $cellLayout$$10$$, $cellCounts$$8$$, $availSpace$$107$$)
    }
  }
};
D.$DvtNBoxRenderer$$.$_calculateCellCounts$ = function $$DvtNBoxRenderer$$$$_calculateCellCounts$$($nbox$$51_retVal$$4$$) {
  var $rowCount$$14_total$$6$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$51_retVal$$4$$), $columnCount$$9_highlighted$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$51_retVal$$4$$), $cellCount$$4_nodeCount$$9$$ = $rowCount$$14_total$$6$$ * $columnCount$$9_highlighted$$1$$, $rowCount$$14_total$$6$$ = [], $columnCount$$9_highlighted$$1$$ = null, $highlightedItems$$3_node$$270$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$51_retVal$$4$$), $highlightedMap$$2$$ = {};
  if($highlightedItems$$3_node$$270$$) {
    for(var $columnCount$$9_highlighted$$1$$ = [], $i$$735$$ = 0;$i$$735$$ < $highlightedItems$$3_node$$270$$.length;$i$$735$$++) {
      $highlightedMap$$2$$[$highlightedItems$$3_node$$270$$[$i$$735$$][D.$DvtNBoxConstants$$.ID]] = !0
    }
  }
  for($i$$735$$ = 0;$i$$735$$ < $cellCount$$4_nodeCount$$9$$;$i$$735$$++) {
    $rowCount$$14_total$$6$$[$i$$735$$] = 0, $columnCount$$9_highlighted$$1$$ && ($columnCount$$9_highlighted$$1$$[$i$$735$$] = 0)
  }
  $cellCount$$4_nodeCount$$9$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$51_retVal$$4$$);
  for($i$$735$$ = 0;$i$$735$$ < $cellCount$$4_nodeCount$$9$$;$i$$735$$++) {
    if($highlightedItems$$3_node$$270$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$51_retVal$$4$$, $i$$735$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$51_retVal$$4$$, $highlightedItems$$3_node$$270$$)) {
      var $cellIndex$$9$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$51_retVal$$4$$, $highlightedItems$$3_node$$270$$);
      $rowCount$$14_total$$6$$[$cellIndex$$9$$]++;
      $columnCount$$9_highlighted$$1$$ && $highlightedMap$$2$$[$highlightedItems$$3_node$$270$$[D.$DvtNBoxConstants$$.ID]] && $columnCount$$9_highlighted$$1$$[$cellIndex$$9$$]++
    }
  }
  $nbox$$51_retVal$$4$$ = {};
  $nbox$$51_retVal$$4$$.total = $rowCount$$14_total$$6$$;
  $columnCount$$9_highlighted$$1$$ && ($nbox$$51_retVal$$4$$.highlighted = $columnCount$$9_highlighted$$1$$);
  return $nbox$$51_retVal$$4$$
};
D.$DvtNBoxRenderer$$.$_renderNodes$ = function $$DvtNBoxRenderer$$$$_renderNodes$$($nbox$$52$$, $container$$162_rowCount$$15$$, $cellCounts$$9$$, $availSpace$$108_columnCount$$10$$) {
  if(0 < D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$52$$)) {
    if("counts" == D.$DvtNBoxDataUtils$$.$getCellContent$($nbox$$52$$)) {
      $container$$162_rowCount$$15$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$52$$);
      $availSpace$$108_columnCount$$10$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$52$$);
      for(var $bodyCountLabels$$ = [], $r$$61$$ = 0;$r$$61$$ < $container$$162_rowCount$$15$$;$r$$61$$++) {
        for(var $c$$42$$ = 0;$c$$42$$ < $availSpace$$108_columnCount$$10$$;$c$$42$$++) {
          $bodyCountLabels$$.push($r$$61$$ * $availSpace$$108_columnCount$$10$$ + $c$$42$$)
        }
      }
      D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$($nbox$$52$$, $cellCounts$$9$$, $bodyCountLabels$$)
    }else {
      D.$DvtNBoxDataUtils$$.$getGrouping$($nbox$$52$$) ? (D.$DvtNBoxRenderer$$.$_renderCategoryNodes$($nbox$$52$$, $container$$162_rowCount$$15$$, $availSpace$$108_columnCount$$10$$), D.$DvtNBoxRenderer$$.$_renderDrawer$($nbox$$52$$, $container$$162_rowCount$$15$$, $availSpace$$108_columnCount$$10$$)) : D.$DvtNBoxRenderer$$.$_renderIndividualNodes$($nbox$$52$$, $cellCounts$$9$$)
    }
  }
};
D.$DvtNBoxRenderer$$.$_renderIndividualNodes$ = function $$DvtNBoxRenderer$$$$_renderIndividualNodes$$($nbox$$53$$, $cellCounts$$10$$) {
  var $gridGap$$4$$ = $nbox$$53$$.$getOptions$().__layout.gridGap, $rtl$$32$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$53$$.$getCtx$()), $nodeLayout$$11_orderPasses$$1$$ = ["normal"], $alphaFade$$2_bodyCountLabels$$1$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($nbox$$53$$), $ci$$3_highlightedItems$$4$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$53$$), $highlightedMap$$3_overflowContainer$$ = {};
  if($ci$$3_highlightedItems$$4$$) {
    for(var $cellData$$16_cellNodes$$1_i$$736$$ = 0;$cellData$$16_cellNodes$$1_i$$736$$ < $ci$$3_highlightedItems$$4$$.length;$cellData$$16_cellNodes$$1_i$$736$$++) {
      $highlightedMap$$3_overflowContainer$$[$ci$$3_highlightedItems$$4$$[$cellData$$16_cellNodes$$1_i$$736$$][D.$DvtNBoxConstants$$.ID]] = !0
    }
  }
  var $nodeCount$$10_selectedItems$$2_vGridSize$$1$$ = D.$DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$53$$), $hGridSize$$1_selectedMap$$2$$ = {};
  if($nodeCount$$10_selectedItems$$2_vGridSize$$1$$) {
    for($cellData$$16_cellNodes$$1_i$$736$$ = 0;$cellData$$16_cellNodes$$1_i$$736$$ < $nodeCount$$10_selectedItems$$2_vGridSize$$1$$.length;$cellData$$16_cellNodes$$1_i$$736$$++) {
      $hGridSize$$1_selectedMap$$2$$[$nodeCount$$10_selectedItems$$2_vGridSize$$1$$[$cellData$$16_cellNodes$$1_i$$736$$]] = !0
    }
  }
  $ci$$3_highlightedItems$$4$$ ? $nodeLayout$$11_orderPasses$$1$$ = $nodeCount$$10_selectedItems$$2_vGridSize$$1$$ ? ["highlighted-selected", "highlighted-unselected", "unhighlighted-selected", "unhighlighted-unselected"] : ["highlighted-unselected", "unhighlighted-unselected"] : $nodeCount$$10_selectedItems$$2_vGridSize$$1$$ && ($nodeLayout$$11_orderPasses$$1$$ = ["unhighlighted-selected", "unhighlighted-unselected"]);
  for(var $cellData$$16_cellNodes$$1_i$$736$$ = {}, $nodeCount$$10_selectedItems$$2_vGridSize$$1$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$53$$), $p$$28_rowCount$$16$$ = 0;$p$$28_rowCount$$16$$ < $nodeLayout$$11_orderPasses$$1$$.length;$p$$28_rowCount$$16$$++) {
    for(var $cellRows$$1_n$$22$$ = 0;$cellRows$$1_n$$22$$ < $nodeCount$$10_selectedItems$$2_vGridSize$$1$$;$cellRows$$1_n$$22$$++) {
      var $node$$271$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$53$$, $cellRows$$1_n$$22$$);
      if(!D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$53$$, $node$$271$$) && ("normal" == $nodeLayout$$11_orderPasses$$1$$[$p$$28_rowCount$$16$$] || "highlighted-selected" == $nodeLayout$$11_orderPasses$$1$$[$p$$28_rowCount$$16$$] && $highlightedMap$$3_overflowContainer$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]] && $hGridSize$$1_selectedMap$$2$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]] || "highlighted-unselected" == $nodeLayout$$11_orderPasses$$1$$[$p$$28_rowCount$$16$$] && $highlightedMap$$3_overflowContainer$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]] && 
      !$hGridSize$$1_selectedMap$$2$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]] || "unhighlighted-selected" == $nodeLayout$$11_orderPasses$$1$$[$p$$28_rowCount$$16$$] && !$highlightedMap$$3_overflowContainer$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]] && $hGridSize$$1_selectedMap$$2$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]] || "unhighlighted-unselected" == $nodeLayout$$11_orderPasses$$1$$[$p$$28_rowCount$$16$$] && !$highlightedMap$$3_overflowContainer$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]] && !$hGridSize$$1_selectedMap$$2$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]])) {
        var $cellIndex$$10_cellLayout$$11$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$53$$, $node$$271$$);
        D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$53$$, $cellIndex$$10_cellLayout$$11$$) || ($cellData$$16_cellNodes$$1_i$$736$$[$cellIndex$$10_cellLayout$$11$$] || ($cellData$$16_cellNodes$$1_i$$736$$[$cellIndex$$10_cellLayout$$11$$] = []), $cellData$$16_cellNodes$$1_i$$736$$[$cellIndex$$10_cellLayout$$11$$].push($node$$271$$))
      }
    }
  }
  for(var $nodeLayout$$11_orderPasses$$1$$ = D.$DvtNBoxNodeRenderer$$.$calculateNodeLayout$($nbox$$53$$, $cellData$$16_cellNodes$$1_i$$736$$), $hGridSize$$1_selectedMap$$2$$ = $nodeLayout$$11_orderPasses$$1$$.indicatorSectionWidth + $nodeLayout$$11_orderPasses$$1$$.iconSectionWidth + $nodeLayout$$11_orderPasses$$1$$.labelSectionWidth + $gridGap$$4$$, $nodeCount$$10_selectedItems$$2_vGridSize$$1$$ = $nodeLayout$$11_orderPasses$$1$$.nodeHeight + $gridGap$$4$$, $p$$28_rowCount$$16$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$53$$), 
  $columnCount$$11$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$53$$), $r$$62$$ = 0;$r$$62$$ < $p$$28_rowCount$$16$$;$r$$62$$++) {
    for(var $c$$43$$ = 0;$c$$43$$ < $columnCount$$11$$;$c$$43$$++) {
      var $cellIndex$$10_cellLayout$$11$$ = $r$$62$$ * $columnCount$$11$$ + $c$$43$$, $nodes$$20$$ = $cellData$$16_cellNodes$$1_i$$736$$[$cellIndex$$10_cellLayout$$11$$];
      if($nodes$$20$$ && $nodes$$20$$.length) {
        var $cell$$38$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$53$$, $cellIndex$$10_cellLayout$$11$$), $cellIndex$$10_cellLayout$$11$$ = $nodeLayout$$11_orderPasses$$1$$.cellLayouts[$cellIndex$$10_cellLayout$$11$$], $cellRows$$1_n$$22$$ = $cellIndex$$10_cellLayout$$11$$.cellRows, $cellColumns$$1$$ = $cellIndex$$10_cellLayout$$11$$.cellColumns;
        if(!(0 == $cellRows$$1_n$$22$$ || 0 == $cellColumns$$1$$ || 1 == $cellRows$$1_n$$22$$ && 1 == $cellColumns$$1$$ && $cellIndex$$10_cellLayout$$11$$.overflow)) {
          for(var $maxNodes$$1$$ = $cellRows$$1_n$$22$$ * $cellColumns$$1$$ - ($cellIndex$$10_cellLayout$$11$$.overflow ? 1 : 0), $cellRows$$1_n$$22$$ = 0;$cellRows$$1_n$$22$$ < $nodes$$20$$.length;$cellRows$$1_n$$22$$++) {
            if($node$$271$$ = $nodes$$20$$[$cellRows$$1_n$$22$$], 0 > $maxNodes$$1$$ || $cellRows$$1_n$$22$$ < $maxNodes$$1$$) {
              var $cellContainer$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$53$$, $cell$$38$$).$getChildContainer$(), $scrolling$$ = $cellContainer$$5$$ instanceof D.$DvtSimpleScrollableContainer$$, $nodeContainer$$10$$ = D.$DvtNBoxNode$$.newInstance($nbox$$53$$, $node$$271$$), $gridXOrigin$$1_prevNode$$1$$ = $cell$$38$$.__childArea.x + ($cell$$38$$.__childArea.$w$ - $cellIndex$$10_cellLayout$$11$$.cellColumns * $hGridSize$$1_selectedMap$$2$$ + $gridGap$$4$$) / 2, $gridYOrigin$$1$$ = $scrolling$$ ? 
              $gridGap$$4$$ : $cell$$38$$.__childArea.y, $gridColumn$$1$$ = $cellRows$$1_n$$22$$ % $cellColumns$$1$$;
              $rtl$$32$$ && ($gridColumn$$1$$ = $cellColumns$$1$$ - $gridColumn$$1$$ - 1);
              var $gridRow$$1$$ = window.Math.floor($cellRows$$1_n$$22$$ / $cellColumns$$1$$);
              (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$10$$, $gridXOrigin$$1_prevNode$$1$$ + $hGridSize$$1_selectedMap$$2$$ * $gridColumn$$1$$, $gridYOrigin$$1$$ + $nodeCount$$10_selectedItems$$2_vGridSize$$1$$ * $gridRow$$1$$);
              $nodeContainer$$10$$.$render$($scrolling$$ ? $cellContainer$$5$$.$_container$ : $cellContainer$$5$$, $nodeLayout$$11_orderPasses$$1$$);
              $ci$$3_highlightedItems$$4$$ && !$highlightedMap$$3_overflowContainer$$[$node$$271$$[D.$DvtNBoxConstants$$.ID]] && $nodeContainer$$10$$.$setAlpha$($alphaFade$$2_bodyCountLabels$$1$$);
              if($gridXOrigin$$1_prevNode$$1$$ = 0 < $cellRows$$1_n$$22$$ ? $nodes$$20$$[$cellRows$$1_n$$22$$ - 1] : null) {
                $node$$271$$.__prev = $gridXOrigin$$1_prevNode$$1$$, $gridXOrigin$$1_prevNode$$1$$.__next = $node$$271$$
              }
            }
          }
        }
      }
    }
  }
  $p$$28_rowCount$$16$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$53$$);
  $columnCount$$11$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$53$$);
  $alphaFade$$2_bodyCountLabels$$1$$ = [];
  for($r$$62$$ = 0;$r$$62$$ < $p$$28_rowCount$$16$$;$r$$62$$++) {
    for($c$$43$$ = 0;$c$$43$$ < $columnCount$$11$$;$c$$43$$++) {
      $ci$$3_highlightedItems$$4$$ = $r$$62$$ * $columnCount$$11$$ + $c$$43$$;
      if(!D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$53$$, $ci$$3_highlightedItems$$4$$) && ($cellData$$16_cellNodes$$1_i$$736$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$53$$, $ci$$3_highlightedItems$$4$$), $cell$$38$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$53$$, $cellData$$16_cellNodes$$1_i$$736$$), $cellIndex$$10_cellLayout$$11$$ = $nodeLayout$$11_orderPasses$$1$$.cellLayouts[$ci$$3_highlightedItems$$4$$], $cellIndex$$10_cellLayout$$11$$.overflow)) {
        if($cellRows$$1_n$$22$$ = $cellIndex$$10_cellLayout$$11$$.cellRows, $cellColumns$$1$$ = $cellIndex$$10_cellLayout$$11$$.cellColumns, 0 == $cellRows$$1_n$$22$$ || 0 == $cellColumns$$1$$ || 1 == $cellRows$$1_n$$22$$ && 1 == $cellColumns$$1$$ && $cellIndex$$10_cellLayout$$11$$.overflow) {
          $alphaFade$$2_bodyCountLabels$$1$$.push($ci$$3_highlightedItems$$4$$)
        }else {
          $highlightedMap$$3_overflowContainer$$ = D.$DvtNBoxNodeOverflow$$.newInstance($nbox$$53$$, $cell$$38$$);
          if(($gridXOrigin$$1_prevNode$$1$$ = D.$DvtNBoxDataUtils$$.$getLastNavigableNode$($nbox$$53$$, $cell$$38$$.$getChildContainer$())) && $gridXOrigin$$1_prevNode$$1$$ instanceof D.$DvtNBoxNode$$) {
            $highlightedMap$$3_overflowContainer$$.__prev = $gridXOrigin$$1_prevNode$$1$$.getData(), $gridXOrigin$$1_prevNode$$1$$.getData().__next = $highlightedMap$$3_overflowContainer$$
          }
          D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$53$$, $highlightedMap$$3_overflowContainer$$, $highlightedMap$$3_overflowContainer$$);
          D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$53$$, $cellData$$16_cellNodes$$1_i$$736$$, $highlightedMap$$3_overflowContainer$$, "overflow");
          $gridXOrigin$$1_prevNode$$1$$ = $cellData$$16_cellNodes$$1_i$$736$$.__childArea.x + ($cellData$$16_cellNodes$$1_i$$736$$.__childArea.$w$ - $cellIndex$$10_cellLayout$$11$$.cellColumns * $hGridSize$$1_selectedMap$$2$$ + $gridGap$$4$$) / 2;
          $gridYOrigin$$1$$ = $cellData$$16_cellNodes$$1_i$$736$$.__childArea.y;
          $gridColumn$$1$$ = $cellIndex$$10_cellLayout$$11$$.cellColumns - 1;
          $rtl$$32$$ && ($gridColumn$$1$$ = 0);
          $gridRow$$1$$ = $cellIndex$$10_cellLayout$$11$$.cellRows - 1;
          (0,D.$JSCompiler_StaticMethods_setTranslate$$)($highlightedMap$$3_overflowContainer$$, $gridXOrigin$$1_prevNode$$1$$ + $hGridSize$$1_selectedMap$$2$$ * $gridColumn$$1$$, $gridYOrigin$$1$$ + $nodeCount$$10_selectedItems$$2_vGridSize$$1$$ * $gridRow$$1$$);
          $highlightedMap$$3_overflowContainer$$.$render$($cell$$38$$.$getChildContainer$(), $hGridSize$$1_selectedMap$$2$$ - $gridGap$$4$$, $nodeCount$$10_selectedItems$$2_vGridSize$$1$$ - $gridGap$$4$$)
        }
      }
      D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$53$$, $ci$$3_highlightedItems$$4$$) && ($cellContainer$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$53$$, D.$DvtNBoxDataUtils$$.$getCell$($nbox$$53$$, $ci$$3_highlightedItems$$4$$)).$getChildContainer$(), (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($cellContainer$$5$$))
    }
  }
  0 < $alphaFade$$2_bodyCountLabels$$1$$.length && D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$($nbox$$53$$, $cellCounts$$10$$, $alphaFade$$2_bodyCountLabels$$1$$)
};
D.$DvtNBoxRenderer$$.$_renderCategoryNodes$ = function $$DvtNBoxRenderer$$$$_renderCategoryNodes$$($nbox$$54$$, $cellCount$$5_columnCount$$12_container$$164$$, $availSpace$$110_layouts$$) {
  var $groups$$11$$ = {}, $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$54$$), $groupBehavior$$4_scale$$60$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$54$$), $cell$$39_rtl$$33$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$54$$.$getCtx$()), $highlightedItems$$5_node$$272_positions$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$54$$), $childContainer$$4_highlightedMap$$4_xPos$$2$$ = {};
  if($highlightedItems$$5_node$$272_positions$$) {
    for(var $i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = 0;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$ < $highlightedItems$$5_node$$272_positions$$.length;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$++) {
      $childContainer$$4_highlightedMap$$4_xPos$$2$$[$highlightedItems$$5_node$$272_positions$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$][D.$DvtNBoxConstants$$.ID]] = !0
    }
  }
  for($i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = 0;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$ < $nodeContainer$$11_nodeCount$$11$$;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$++) {
    if($highlightedItems$$5_node$$272_positions$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$54$$, $i$$737_n$$23_otherGroups$$1_rowCount$$17$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$54$$, $highlightedItems$$5_node$$272_positions$$)) {
      var $groupContainer_scrolling$$1_yPos$$2$$ = $groups$$11$$;
      if($groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        var $groupId$$23_j$$97$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$54$$, $highlightedItems$$5_node$$272_positions$$) + "", $groupContainer_scrolling$$1_yPos$$2$$ = $groups$$11$$[$groupId$$23_j$$97$$];
        $groupContainer_scrolling$$1_yPos$$2$$ || ($groupContainer_scrolling$$1_yPos$$2$$ = {}, $groups$$11$$[$groupId$$23_j$$97$$] = $groupContainer_scrolling$$1_yPos$$2$$)
      }
      var $groupId$$23_j$$97$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$($highlightedItems$$5_node$$272_positions$$), $group$$34$$ = $groupContainer_scrolling$$1_yPos$$2$$[$groupId$$23_j$$97$$];
      $group$$34$$ || ($group$$34$$ = {}, $group$$34$$[D.$DvtNBoxConstants$$.ID] = $groupId$$23_j$$97$$, $groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($group$$34$$[D.$DvtNBoxConstants$$.$CELL$] = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$54$$, $highlightedItems$$5_node$$272_positions$$)), $group$$34$$.nodeIndices = [], $group$$34$$.highlightedCount = 0, $groupContainer_scrolling$$1_yPos$$2$$[$groupId$$23_j$$97$$] = $group$$34$$);
      $group$$34$$.nodeIndices.push($i$$737_n$$23_otherGroups$$1_rowCount$$17$$);
      $childContainer$$4_highlightedMap$$4_xPos$$2$$[D.$DvtNBoxDataUtils$$.$getNode$($nbox$$54$$, $i$$737_n$$23_otherGroups$$1_rowCount$$17$$)[D.$DvtNBoxConstants$$.ID]] && $group$$34$$.highlightedCount++
    }
  }
  if($groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    var $i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = {}, $cellId_center$$7_sortedGroups$$;
    for($cellId_center$$7_sortedGroups$$ in $groups$$11$$) {
      $i$$737_n$$23_otherGroups$$1_rowCount$$17$$[$cellId_center$$7_sortedGroups$$] = D.$DvtNBoxRenderer$$.$_processOtherThreshold$($nbox$$54$$, $groups$$11$$[$cellId_center$$7_sortedGroups$$])
    }
  }else {
    $i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = D.$DvtNBoxRenderer$$.$_processOtherThreshold$($nbox$$54$$, $groups$$11$$)
  }
  $groups$$11$$ = $i$$737_n$$23_otherGroups$$1_rowCount$$17$$;
  $nbox$$54$$.$getOptions$().__groups = $groups$$11$$;
  if($groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
    $cellId_center$$7_sortedGroups$$ = [];
    for($group$$34$$ in $groups$$11$$) {
      $cellId_center$$7_sortedGroups$$.push($group$$34$$)
    }
    $cellId_center$$7_sortedGroups$$.sort(function($nbox$$54$$, $cellCount$$5_columnCount$$12_container$$164$$) {
      return D.$DvtNBoxCategoryNode$$.$compareSize$($groups$$11$$[$nbox$$54$$], $groups$$11$$[$cellCount$$5_columnCount$$12_container$$164$$])
    });
    $groupBehavior$$4_scale$$60$$ = window.Math.sqrt(0.15 * $availSpace$$110_layouts$$.$w$ * $availSpace$$110_layouts$$.$h$ / $nodeContainer$$11_nodeCount$$11$$);
    for($i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = 0;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$ < $cellId_center$$7_sortedGroups$$.length;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$++) {
      $group$$34$$ = $cellId_center$$7_sortedGroups$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$];
      $groupContainer_scrolling$$1_yPos$$2$$ = $childContainer$$4_highlightedMap$$4_xPos$$2$$ = 0;
      $nodeContainer$$11_nodeCount$$11$$ = $groups$$11$$[$group$$34$$].nodeIndices.length;
      for($groupId$$23_j$$97$$ = 0;$groupId$$23_j$$97$$ < $nodeContainer$$11_nodeCount$$11$$;$groupId$$23_j$$97$$++) {
        $highlightedItems$$5_node$$272_positions$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$54$$, $groups$$11$$[$group$$34$$].nodeIndices[$groupId$$23_j$$97$$]), $childContainer$$4_highlightedMap$$4_xPos$$2$$ += D.$DvtNBoxDataUtils$$.$getXPercentage$($nbox$$54$$, $highlightedItems$$5_node$$272_positions$$), $groupContainer_scrolling$$1_yPos$$2$$ += D.$DvtNBoxDataUtils$$.$getYPercentage$($nbox$$54$$, $highlightedItems$$5_node$$272_positions$$)
      }
      $childContainer$$4_highlightedMap$$4_xPos$$2$$ /= $nodeContainer$$11_nodeCount$$11$$;
      $groupContainer_scrolling$$1_yPos$$2$$ /= $nodeContainer$$11_nodeCount$$11$$;
      $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxCategoryNode$$.newInstance($nbox$$54$$, $groups$$11$$[$group$$34$$]);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$11_nodeCount$$11$$, $availSpace$$110_layouts$$.x + ($cell$$39_rtl$$33$$ ? 1 - $childContainer$$4_highlightedMap$$4_xPos$$2$$ : $childContainer$$4_highlightedMap$$4_xPos$$2$$) * $availSpace$$110_layouts$$.$w$, $availSpace$$110_layouts$$.y + (1 - $groupContainer_scrolling$$1_yPos$$2$$) * $availSpace$$110_layouts$$.$h$);
      $nodeContainer$$11_nodeCount$$11$$.$render$($cellCount$$5_columnCount$$12_container$$164$$, $groupBehavior$$4_scale$$60$$, 0);
      $nodeContainer$$11_nodeCount$$11$$.$setMaxAlpha$(0.8)
    }
  }else {
    if($groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      $i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$54$$);
      $cellCount$$5_columnCount$$12_container$$164$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$54$$);
      $cellCount$$5_columnCount$$12_container$$164$$ *= $i$$737_n$$23_otherGroups$$1_rowCount$$17$$;
      $availSpace$$110_layouts$$ = [];
      for($i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = 0;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$164$$;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$++) {
        $groups$$11$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$54$$, $i$$737_n$$23_otherGroups$$1_rowCount$$17$$) && ($cell$$39_rtl$$33$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$54$$, $i$$737_n$$23_otherGroups$$1_rowCount$$17$$), $availSpace$$110_layouts$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$] = D.$DvtNBoxRenderer$$.$_forceLayoutGroups$($groups$$11$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$], $cell$$39_rtl$$33$$.__childArea.$w$, $cell$$39_rtl$$33$$.__childArea.$h$))
      }
      $groupBehavior$$4_scale$$60$$ = 40;
      for($i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = 0;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$164$$;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$++) {
        $groups$$11$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$54$$, $i$$737_n$$23_otherGroups$$1_rowCount$$17$$) && ($groupBehavior$$4_scale$$60$$ = window.Math.min($groupBehavior$$4_scale$$60$$, $availSpace$$110_layouts$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$].scale))
      }
      for($i$$737_n$$23_otherGroups$$1_rowCount$$17$$ = 0;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$164$$;$i$$737_n$$23_otherGroups$$1_rowCount$$17$$++) {
        if($groups$$11$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$54$$, $i$$737_n$$23_otherGroups$$1_rowCount$$17$$)) {
          for($group$$34$$ in $highlightedItems$$5_node$$272_positions$$ = $availSpace$$110_layouts$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$].positions, $cellId_center$$7_sortedGroups$$ = $availSpace$$110_layouts$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$].center, $cell$$39_rtl$$33$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$54$$, $i$$737_n$$23_otherGroups$$1_rowCount$$17$$), $childContainer$$4_highlightedMap$$4_xPos$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$54$$, $cell$$39_rtl$$33$$).$getChildContainer$(), 
          $groupContainer_scrolling$$1_yPos$$2$$ = $childContainer$$4_highlightedMap$$4_xPos$$2$$ instanceof D.$DvtSimpleScrollableContainer$$, $highlightedItems$$5_node$$272_positions$$) {
            $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxCategoryNode$$.newInstance($nbox$$54$$, $groups$$11$$[$i$$737_n$$23_otherGroups$$1_rowCount$$17$$][$group$$34$$]), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$11_nodeCount$$11$$, $cell$$39_rtl$$33$$.__childArea.x + $cell$$39_rtl$$33$$.__childArea.$w$ / 2 + $groupBehavior$$4_scale$$60$$ * ($highlightedItems$$5_node$$272_positions$$[$group$$34$$].x - $cellId_center$$7_sortedGroups$$.x), ($groupContainer_scrolling$$1_yPos$$2$$ ? 
            0 : $cell$$39_rtl$$33$$.__childArea.y) + $cell$$39_rtl$$33$$.__childArea.$h$ / 2 + $groupBehavior$$4_scale$$60$$ * ($highlightedItems$$5_node$$272_positions$$[$group$$34$$].y - $cellId_center$$7_sortedGroups$$.y)), $nodeContainer$$11_nodeCount$$11$$.$render$($groupContainer_scrolling$$1_yPos$$2$$ ? $childContainer$$4_highlightedMap$$4_xPos$$2$$.$_container$ : $childContainer$$4_highlightedMap$$4_xPos$$2$$, $groupBehavior$$4_scale$$60$$, 3)
          }
        }
      }
    }
  }
};
D.$DvtNBoxRenderer$$.$getRowDimensions$ = function $$DvtNBoxRenderer$$$$getRowDimensions$$($nbox$$55_rowCount$$18$$, $rowIndex$$15$$, $availSpace$$111$$) {
  $nbox$$55_rowCount$$18$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$55_rowCount$$18$$);
  var $rowHeight$$10$$ = $availSpace$$111$$.$h$ / $nbox$$55_rowCount$$18$$;
  return new D.$DvtRectangle$$($availSpace$$111$$.x, $availSpace$$111$$.y + ($nbox$$55_rowCount$$18$$ - $rowIndex$$15$$ - 1) * $rowHeight$$10$$, $availSpace$$111$$.$w$, $rowHeight$$10$$)
};
D.$DvtNBoxRenderer$$.$getColumnDimensions$ = function $$DvtNBoxRenderer$$$$getColumnDimensions$$($nbox$$56_rtl$$34$$, $columnIndex$$4$$, $availSpace$$112$$) {
  var $columnCount$$13_columnWidth$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$56_rtl$$34$$), $columnCount$$13_columnWidth$$1$$ = $availSpace$$112$$.$w$ / $columnCount$$13_columnWidth$$1$$;
  $nbox$$56_rtl$$34$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$56_rtl$$34$$.$getCtx$());
  return new D.$DvtRectangle$$($availSpace$$112$$.x + ($nbox$$56_rtl$$34$$ ? $availSpace$$112$$.$w$ - $columnCount$$13_columnWidth$$1$$ : 0) + ($nbox$$56_rtl$$34$$ ? -1 : 1) * $columnIndex$$4$$ * $columnCount$$13_columnWidth$$1$$, $availSpace$$112$$.y, $columnCount$$13_columnWidth$$1$$, $availSpace$$112$$.$h$)
};
D.$DvtNBoxRenderer$$.$_adjustAvailSpace$ = function $$DvtNBoxRenderer$$$$_adjustAvailSpace$$($availSpace$$113$$) {
  $availSpace$$113$$.x = window.Math.round($availSpace$$113$$.x);
  $availSpace$$113$$.y = window.Math.round($availSpace$$113$$.y);
  $availSpace$$113$$.$w$ = window.Math.round($availSpace$$113$$.$w$);
  $availSpace$$113$$.$h$ = window.Math.round($availSpace$$113$$.$h$)
};
D.$DvtNBoxRenderer$$.$positionText$ = function $$DvtNBoxRenderer$$$$positionText$$($text$$101$$, $x$$248$$, $y$$222$$, $angle$$51$$) {
  $text$$101$$.$setX$($x$$248$$);
  $text$$101$$.$setY$($y$$222$$);
  if($angle$$51$$) {
    var $matrix$$18$$ = $text$$101$$.$getMatrix$();
    $matrix$$18$$.translate(-$x$$248$$, -$y$$222$$);
    $matrix$$18$$.rotate($angle$$51$$);
    $matrix$$18$$.translate($x$$248$$, $y$$222$$);
    $text$$101$$.$setMatrix$($matrix$$18$$)
  }
};
D.$DvtNBoxRenderer$$.$_renderInitialSelection$ = function $$DvtNBoxRenderer$$$$_renderInitialSelection$$($nbox$$57$$) {
  if($nbox$$57$$.$isSelectionSupported$()) {
    var $selectedMap$$3$$ = {}, $selectedIds$$9$$ = [], $nodeIndices$$3_selectedItems$$3$$ = D.$DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$57$$);
    if($nodeIndices$$3_selectedItems$$3$$) {
      for(var $i$$738$$ = 0;$i$$738$$ < $nodeIndices$$3_selectedItems$$3$$.length;$i$$738$$++) {
        $selectedIds$$9$$.push($nodeIndices$$3_selectedItems$$3$$[$i$$738$$]), $selectedMap$$3$$[$nodeIndices$$3_selectedItems$$3$$[$i$$738$$]] = !0
      }
      var $objects$$4$$ = $nbox$$57$$.$getObjects$();
      if(D.$DvtNBoxDataUtils$$.$getGrouping$($nbox$$57$$)) {
        for($i$$738$$ = 0;$i$$738$$ < $objects$$4$$.length;$i$$738$$++) {
          if($objects$$4$$[$i$$738$$] instanceof D.$DvtNBoxCategoryNode$$) {
            for(var $nodeIndices$$3_selectedItems$$3$$ = $objects$$4$$[$i$$738$$].getData().nodeIndices, $selected$$36$$ = !0, $j$$98$$ = 0;$j$$98$$ < $nodeIndices$$3_selectedItems$$3$$.length;$j$$98$$++) {
              var $node$$273$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$57$$, $nodeIndices$$3_selectedItems$$3$$[$j$$98$$]);
              if(!$selectedMap$$3$$[$node$$273$$[D.$DvtNBoxConstants$$.ID]]) {
                $selected$$36$$ = !1;
                break
              }
            }
            $selected$$36$$ && $selectedIds$$9$$.push($objects$$4$$[$i$$738$$].getId())
          }
        }
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($nbox$$57$$.$getSelectionHandler$(), $selectedIds$$9$$, $objects$$4$$)
  }
};
D.$DvtNBoxRenderer$$.$_forceLayoutGroups$ = function $$DvtNBoxRenderer$$$$_forceLayoutGroups$$($groups$$12$$, $width$$120$$, $height$$110$$) {
  var $sortedGroups$$1$$ = [], $group$$35_iPos_position$$59$$;
  for($group$$35_iPos_position$$59$$ in $groups$$12$$) {
    $sortedGroups$$1$$.push($group$$35_iPos_position$$59$$)
  }
  $sortedGroups$$1$$.sort(function($width$$120$$, $height$$110$$) {
    return D.$DvtNBoxCategoryNode$$.$compareSize$($groups$$12$$[$width$$120$$], $groups$$12$$[$height$$110$$])
  });
  for(var $positions$$1$$ = {}, $alpha$$45_left$$16_thetaStep$$ = 2 * window.Math.PI / $sortedGroups$$1$$.length, $i$$739$$ = 0;$i$$739$$ < $sortedGroups$$1$$.length;$i$$739$$++) {
    $positions$$1$$[$sortedGroups$$1$$[$i$$739$$]] = D.$DvtVectorUtils$$.$createVector$($i$$739$$ * window.Math.cos($alpha$$45_left$$16_thetaStep$$ * $i$$739$$), $i$$739$$ * window.Math.sin($alpha$$45_left$$16_thetaStep$$ * $i$$739$$))
  }
  for(var $alpha$$45_left$$16_thetaStep$$ = 1, $right$$11_xGravity$$ = -0.25 * $height$$110$$ / window.Math.max($width$$120$$, $height$$110$$), $top$$15_yGravity$$ = -0.25 * $width$$120$$ / window.Math.max($width$$120$$, $height$$110$$);0.005 < $alpha$$45_left$$16_thetaStep$$;) {
    for(var $bottom$$10_displacement$$3$$ = {}, $i$$739$$ = 0;$i$$739$$ < $sortedGroups$$1$$.length;$i$$739$$++) {
      var $iGroup_side$$25$$ = $sortedGroups$$1$$[$i$$739$$];
      $group$$35_iPos_position$$59$$ = $positions$$1$$[$iGroup_side$$25$$];
      var $iSize$$ = $groups$$12$$[$iGroup_side$$25$$].nodeIndices.length;
      $bottom$$10_displacement$$3$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$createVector$($alpha$$45_left$$16_thetaStep$$ * $right$$11_xGravity$$ * $group$$35_iPos_position$$59$$.x, $alpha$$45_left$$16_thetaStep$$ * $top$$15_yGravity$$ * $group$$35_iPos_position$$59$$.y);
      for(var $j$$99$$ = 0;$j$$99$$ < $sortedGroups$$1$$.length;$j$$99$$++) {
        if($i$$739$$ != $j$$99$$) {
          for(var $difference$$2_jGroup$$ = $sortedGroups$$1$$[$j$$99$$], $jSize$$ = $groups$$12$$[$difference$$2_jGroup$$].nodeIndices.length, $difference$$2_jGroup$$ = D.$DvtVectorUtils$$.$subtractVectors$($group$$35_iPos_position$$59$$, $positions$$1$$[$difference$$2_jGroup$$]), $distance$$9$$ = D.$DvtVectorUtils$$.$getMagnitude$($difference$$2_jGroup$$), $angle$$52_minimumDistance$$ = window.Math.atan2($difference$$2_jGroup$$.y, $difference$$2_jGroup$$.x);0 > $angle$$52_minimumDistance$$;) {
            $angle$$52_minimumDistance$$ += window.Math.PI / 2
          }
          for(;$angle$$52_minimumDistance$$ >= window.Math.PI / 2;) {
            $angle$$52_minimumDistance$$ -= window.Math.PI / 2
          }
          $angle$$52_minimumDistance$$ = $angle$$52_minimumDistance$$ < window.Math.PI / 4 ? 0.5 * (window.Math.sqrt($iSize$$) + window.Math.sqrt($jSize$$)) / window.Math.cos($angle$$52_minimumDistance$$) : 0.5 * (window.Math.sqrt($iSize$$) + window.Math.sqrt($jSize$$)) / window.Math.sin($angle$$52_minimumDistance$$);
          $distance$$9$$ < $angle$$52_minimumDistance$$ && ($bottom$$10_displacement$$3$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$addVectors$($bottom$$10_displacement$$3$$[$iGroup_side$$25$$], D.$DvtVectorUtils$$.$scaleVector$($difference$$2_jGroup$$, (1 - $alpha$$45_left$$16_thetaStep$$) * $jSize$$ / ($iSize$$ + $jSize$$) * (($angle$$52_minimumDistance$$ - $distance$$9$$) / $distance$$9$$))))
        }
      }
    }
    for($i$$739$$ = 0;$i$$739$$ < $sortedGroups$$1$$.length;$i$$739$$++) {
      $iGroup_side$$25$$ = $sortedGroups$$1$$[$i$$739$$], $positions$$1$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$addVectors$($positions$$1$$[$iGroup_side$$25$$], $bottom$$10_displacement$$3$$[$iGroup_side$$25$$])
    }
    $alpha$$45_left$$16_thetaStep$$ *= 0.98
  }
  $alpha$$45_left$$16_thetaStep$$ = window.Number.MAX_VALUE;
  $right$$11_xGravity$$ = -window.Number.MAX_VALUE;
  $top$$15_yGravity$$ = window.Number.MAX_VALUE;
  $bottom$$10_displacement$$3$$ = -window.Number.MAX_VALUE;
  for($i$$739$$ = 0;$i$$739$$ < $sortedGroups$$1$$.length;$i$$739$$++) {
    $group$$35_iPos_position$$59$$ = $sortedGroups$$1$$[$i$$739$$], $iGroup_side$$25$$ = window.Math.sqrt($groups$$12$$[$group$$35_iPos_position$$59$$].nodeIndices.length), $group$$35_iPos_position$$59$$ = $positions$$1$$[$group$$35_iPos_position$$59$$], $alpha$$45_left$$16_thetaStep$$ = window.Math.min($alpha$$45_left$$16_thetaStep$$, $group$$35_iPos_position$$59$$.x - $iGroup_side$$25$$ / 2), $right$$11_xGravity$$ = window.Math.max($right$$11_xGravity$$, $group$$35_iPos_position$$59$$.x + $iGroup_side$$25$$ / 
    2), $top$$15_yGravity$$ = window.Math.min($top$$15_yGravity$$, $group$$35_iPos_position$$59$$.y - $iGroup_side$$25$$ / 2), $bottom$$10_displacement$$3$$ = window.Math.max($bottom$$10_displacement$$3$$, $group$$35_iPos_position$$59$$.y + $iGroup_side$$25$$ / 2)
  }
  return{scale:window.Math.min($width$$120$$ / ($right$$11_xGravity$$ - $alpha$$45_left$$16_thetaStep$$), $height$$110$$ / ($bottom$$10_displacement$$3$$ - $top$$15_yGravity$$)), center:new D.$DvtPoint$$(($alpha$$45_left$$16_thetaStep$$ + $right$$11_xGravity$$) / 2, ($top$$15_yGravity$$ + $bottom$$10_displacement$$3$$) / 2), positions:$positions$$1$$}
};
D.$DvtNBoxRenderer$$.$_processOtherThreshold$ = function $$DvtNBoxRenderer$$$$_processOtherThreshold$$($nbox$$58$$, $groups$$13$$) {
  var $nodeCount$$12_otherCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$58$$), $nodeCount$$12_otherCount$$ = D.$DvtNBoxDataUtils$$.$getOtherThreshold$($nbox$$58$$) * $nodeCount$$12_otherCount$$;
  if(1 >= $nodeCount$$12_otherCount$$) {
    return $groups$$13$$
  }
  var $processedGroups$$ = {}, $otherGroup$$ = {};
  if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$58$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    for(var $groupId$$24$$ in $groups$$13$$) {
      var $group$$36$$ = $groups$$13$$[$groupId$$24$$];
      $otherGroup$$.cell = $group$$36$$.cell;
      break
    }
  }
  $otherGroup$$.id = "other";
  $otherGroup$$.nodeIndices = [];
  $otherGroup$$.otherNode = !0;
  for($groupId$$24$$ in $groups$$13$$) {
    if($group$$36$$ = $groups$$13$$[$groupId$$24$$], $group$$36$$.nodeIndices.length < $nodeCount$$12_otherCount$$) {
      for(var $i$$740$$ = 0;$i$$740$$ < $group$$36$$.nodeIndices.length;$i$$740$$++) {
        $otherGroup$$.nodeIndices.push($group$$36$$.nodeIndices[$i$$740$$])
      }
    }else {
      $processedGroups$$[$groupId$$24$$] = $group$$36$$
    }
  }
  0 < $otherGroup$$.nodeIndices.length && ($processedGroups$$.other = $otherGroup$$);
  return $processedGroups$$
};
D.$DvtNBoxRenderer$$.$_renderDrawer$ = function $$DvtNBoxRenderer$$$$_renderDrawer$$($nbox$$59$$, $container$$165_event$$595$$, $availSpace$$114$$) {
  var $drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($nbox$$59$$);
  $drawerData$$6$$ && (D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$59$$, $drawerData$$6$$.id) ? D.$DvtNBoxDrawer$$.newInstance($nbox$$59$$, $drawerData$$6$$).$render$($container$$165_event$$595$$, $availSpace$$114$$) : ($nbox$$59$$.$getOptions$()[D.$DvtNBoxConstants$$.$DRAWER$] = null, $container$$165_event$$595$$ = new D.$DvtSetPropertyEvent$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($container$$165_event$$595$$, D.$DvtNBoxConstants$$.$DRAWER$, null), $nbox$$59$$.$processEvent$($container$$165_event$$595$$)))
};
D.$DvtNBoxRenderer$$.$getGlobalMatrix$ = function $$DvtNBoxRenderer$$$$getGlobalMatrix$$($current$$7_displayable$$76$$) {
  var $matrix$$19$$ = $current$$7_displayable$$76$$.$getMatrix$().$clone$();
  for($current$$7_displayable$$76$$ = $current$$7_displayable$$76$$.getParent();$current$$7_displayable$$76$$;) {
    var $currentMatrix$$ = $current$$7_displayable$$76$$.$getMatrix$();
    $matrix$$19$$.translate($currentMatrix$$.$_tx$, $currentMatrix$$.$_ty$);
    $current$$7_displayable$$76$$ = $current$$7_displayable$$76$$.getParent()
  }
  return $matrix$$19$$
};
D.$DvtNBoxRenderer$$.$animateUpdate$ = function $$DvtNBoxRenderer$$$$animateUpdate$$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$) {
  D.$DvtNBoxRenderer$$.$_animateCells$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$);
  D.$DvtNBoxRenderer$$.$_animateNodes$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$);
  var $oldDrawer$$3$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($oldNBox$$14$$), $oldDrawer$$3$$ = $oldDrawer$$3$$ ? $oldDrawer$$3$$.id : null, $newDrawer$$2$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newNBox$$14$$), $newDrawer$$2$$ = $newDrawer$$2$$ ? $newDrawer$$2$$.id : null;
  $oldDrawer$$3$$ != $newDrawer$$2$$ && D.$DvtNBoxRenderer$$.$_animateDrawer$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$)
};
D.$DvtNBoxRenderer$$.$_animateCells$ = function $$DvtNBoxRenderer$$$$_animateCells$$($animationHandler$$34$$, $oldNBox$$15$$, $newNBox$$15$$) {
  for(var $identical$$1_oldRowCount$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($oldNBox$$15$$), $newRowCount_oldColumnValue$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($newNBox$$15$$), $newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($oldNBox$$15$$), $newColumnCount$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($newNBox$$15$$), $newRowValue_oldCellCount$$ = $identical$$1_oldRowCount$$ * $newColumnValue_oldColumnCount_oldRowValue$$, $newCellCount$$ = $newRowCount_oldColumnValue$$ * 
  $newColumnCount$$, $oldCells$$ = [], $newCells$$ = [], $i$$741$$ = 0;$i$$741$$ < $newRowValue_oldCellCount$$;$i$$741$$++) {
    $oldCells$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($oldNBox$$15$$, D.$DvtNBoxDataUtils$$.$getCell$($oldNBox$$15$$, $i$$741$$)))
  }
  for($i$$741$$ = 0;$i$$741$$ < $newCellCount$$;$i$$741$$++) {
    $newCells$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$15$$, D.$DvtNBoxDataUtils$$.$getCell$($newNBox$$15$$, $i$$741$$)))
  }
  if($identical$$1_oldRowCount$$ == $newRowCount_oldColumnValue$$ && $newColumnValue_oldColumnCount_oldRowValue$$ == $newColumnCount$$) {
    $identical$$1_oldRowCount$$ = !0;
    for($i$$741$$ = 0;$i$$741$$ < $newRowCount_oldColumnValue$$;$i$$741$$++) {
      if($newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getRow$($oldNBox$$15$$, $i$$741$$)[D.$DvtNBoxConstants$$.ID], $newRowValue_oldCellCount$$ = D.$DvtNBoxDataUtils$$.$getRow$($newNBox$$15$$, $i$$741$$)[D.$DvtNBoxConstants$$.ID], $newColumnValue_oldColumnCount_oldRowValue$$ != $newRowValue_oldCellCount$$) {
        $identical$$1_oldRowCount$$ = !1;
        break
      }
    }
    if($identical$$1_oldRowCount$$) {
      for($i$$741$$ = 0;$i$$741$$ < $newColumnCount$$;$i$$741$$++) {
        if($newRowCount_oldColumnValue$$ = D.$DvtNBoxDataUtils$$.$getColumn$($oldNBox$$15$$, $i$$741$$)[D.$DvtNBoxConstants$$.ID], $newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getColumn$($newNBox$$15$$, $i$$741$$)[D.$DvtNBoxConstants$$.ID], $newRowCount_oldColumnValue$$ != $newColumnValue_oldColumnCount_oldRowValue$$) {
          $identical$$1_oldRowCount$$ = !1;
          break
        }
      }
    }
    if($identical$$1_oldRowCount$$) {
      (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, $oldCells$$, $newCells$$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, $oldCells$$, []);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, [], $newCells$$)
};
D.$DvtNBoxRenderer$$.$_animateNodes$ = function $$DvtNBoxRenderer$$$$_animateNodes$$($animationHandler$$35$$, $oldNBox$$16$$, $newNBox$$16$$) {
  for(var $oldDrawer$$4_oldNodeCount$$1$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($oldNBox$$16$$), $newNodeCount$$1_oldGroupNodes$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($newNBox$$16$$), $newGroupNodes_oldNodes$$4$$ = [], $newNodes$$4$$ = [], $i$$742$$ = 0;$i$$742$$ < $oldDrawer$$4_oldNodeCount$$1$$;$i$$742$$++) {
    $newGroupNodes_oldNodes$$4$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($oldNBox$$16$$, D.$DvtNBoxDataUtils$$.$getNode$($oldNBox$$16$$, $i$$742$$)))
  }
  for($i$$742$$ = 0;$i$$742$$ < $newNodeCount$$1_oldGroupNodes$$;$i$$742$$++) {
    $newNodes$$4$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$16$$, D.$DvtNBoxDataUtils$$.$getNode$($newNBox$$16$$, $i$$742$$)))
  }
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$35$$, $newGroupNodes_oldNodes$$4$$, $newNodes$$4$$);
  $oldDrawer$$4_oldNodeCount$$1$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($oldNBox$$16$$);
  D.$DvtNBoxDataUtils$$.$getDrawer$($newNBox$$16$$) || ($newNodeCount$$1_oldGroupNodes$$ = D.$DvtNBoxRenderer$$.$_getSortedGroups$($oldNBox$$16$$), $newGroupNodes_oldNodes$$4$$ = D.$DvtNBoxRenderer$$.$_getSortedGroups$($newNBox$$16$$), $oldDrawer$$4_oldNodeCount$$1$$ && (D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$($oldNBox$$16$$) != D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$($newNBox$$16$$) ? ($newNodeCount$$1_oldGroupNodes$$ = $newNodeCount$$1_oldGroupNodes$$.filter(function($animationHandler$$35$$) {
    return $animationHandler$$35$$.getData().cell != D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$($oldNBox$$16$$)
  }), $newGroupNodes_oldNodes$$4$$ = $newGroupNodes_oldNodes$$4$$.filter(function($animationHandler$$35$$) {
    return $animationHandler$$35$$.getData().cell != D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$($oldNBox$$16$$)
  })) : $newGroupNodes_oldNodes$$4$$ = $newNodeCount$$1_oldGroupNodes$$ = null), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$35$$, $newNodeCount$$1_oldGroupNodes$$, $newGroupNodes_oldNodes$$4$$))
};
D.$DvtNBoxRenderer$$.$_getSortedGroups$ = function $$DvtNBoxRenderer$$$$_getSortedGroups$$($nbox$$60$$) {
  var $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$60$$), $groupInfo$$4$$ = $nbox$$60$$.$getOptions$().__groups, $groupNodes$$2$$ = [];
  if($groupInfo$$4$$) {
    if($cellCount$$6_groupBehavior$$6_rowCount$$19$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for(var $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$60$$), $columnCount$$14_i$$743$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$60$$), $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = $cellCount$$6_groupBehavior$$6_rowCount$$19$$ * $columnCount$$14_i$$743$$, $columnCount$$14_i$$743$$ = 0;$columnCount$$14_i$$743$$ < $cellCount$$6_groupBehavior$$6_rowCount$$19$$;$columnCount$$14_i$$743$$++) {
        for(var $cellGroupNodes$$ = D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($nbox$$60$$, $groupInfo$$4$$[$columnCount$$14_i$$743$$ + ""]), $j$$100$$ = 0;$j$$100$$ < $cellGroupNodes$$.length;$j$$100$$++) {
          $groupNodes$$2$$.push($cellGroupNodes$$[$j$$100$$])
        }
      }
    }else {
      $groupNodes$$2$$ = D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($nbox$$60$$, $groupInfo$$4$$)
    }
  }
  return $groupNodes$$2$$
};
D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$ = function $$DvtNBoxRenderer$$$$_getSortedGroupsFromContainer$$($nbox$$61$$, $container$$166$$) {
  var $groupNodes$$3$$ = [], $id$$238$$;
  for($id$$238$$ in $container$$166$$) {
    var $displayable$$77$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$61$$, $container$$166$$[$id$$238$$]);
    $displayable$$77$$ && $groupNodes$$3$$.push($displayable$$77$$)
  }
  $groupNodes$$3$$.sort(function($nbox$$61$$, $container$$166$$) {
    var $groupNodes$$3$$ = $nbox$$61$$.getId(), $id$$238$$ = $container$$166$$.getId();
    return $groupNodes$$3$$ == $id$$238$$ ? 0 : $groupNodes$$3$$ < $id$$238$$ ? -1 : 1
  });
  return $groupNodes$$3$$
};
D.$DvtNBoxRenderer$$.$_animateDrawer$ = function $$DvtNBoxRenderer$$$$_animateDrawer$$($animationHandler$$36$$, $newDrawer$$4_oldNBox$$17$$, $newNBox$$17$$) {
  var $oldDrawer$$5$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newDrawer$$4_oldNBox$$17$$), $oldDrawer$$5$$ = $oldDrawer$$5$$ ? [D.$DvtNBoxDataUtils$$.$getDisplayable$($newDrawer$$4_oldNBox$$17$$, $oldDrawer$$5$$)] : null;
  $newDrawer$$4_oldNBox$$17$$ = ($newDrawer$$4_oldNBox$$17$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newNBox$$17$$)) ? [D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$17$$, $newDrawer$$4_oldNBox$$17$$)] : [];
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$36$$, $oldDrawer$$5$$, $newDrawer$$4_oldNBox$$17$$)
};
D.$DvtNBoxRenderer$$.$setFill$ = function $$DvtNBoxRenderer$$$$setFill$$($displayable$$78$$, $fillString$$) {
  if(0 == $fillString$$.indexOf("linear-gradient")) {
    var $linearGradient$$3$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($fillString$$);
    $linearGradient$$3$$ && $displayable$$78$$.$setFill$(new D.$DvtLinearGradientFill$$($linearGradient$$3$$.$getAngle$(), $linearGradient$$3$$.$_arColors$, $linearGradient$$3$$.$_arAlphas$, $linearGradient$$3$$.$_arRatios$))
  }else {
    $displayable$$78$$.$setSolidFill$($fillString$$)
  }
};
D.$DvtNBoxRenderer$$.$_fixZOrder$ = function $$DvtNBoxRenderer$$$$_fixZOrder$$($nbox$$62_panelDrawer$$4$$) {
  var $legendData$$5$$ = D.$DvtNBoxDataUtils$$.$getLegend$($nbox$$62_panelDrawer$$4$$);
  $legendData$$5$$ && $legendData$$5$$.sections && ($nbox$$62_panelDrawer$$4$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$62_panelDrawer$$4$$, $legendData$$5$$, "panelDrawer")) && $nbox$$62_panelDrawer$$4$$.getParent().$addChild$($nbox$$62_panelDrawer$$4$$)
};
D.$DvtNBoxCellRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCellRenderer$$, D.$DvtObj$$, "DvtNBoxCellRenderer");
D.$DvtNBoxCellRenderer$$.$render$ = function $$DvtNBoxCellRenderer$$$$render$$($nbox$$19$$, $cellData$$9$$, $cellContainer_childArea$$, $cellLayout$$2$$, $addedHeader_cellCounts$$2$$, $availSpace$$99_cellIndex$$4_childContainer$$) {
  var $cellBottomGap_options$$208$$ = $nbox$$19$$.$getOptions$(), $cellGap_cellRect$$ = $cellBottomGap_options$$208$$.__layout.cellGap, $cellStartGap$$ = $cellBottomGap_options$$208$$.__layout.cellStartGap, $cellEndGap$$ = $cellBottomGap_options$$208$$.__layout.cellEndGap, $cellTopGap$$ = $cellBottomGap_options$$208$$.__layout.cellTopGap, $cellBottomGap_options$$208$$ = $cellBottomGap_options$$208$$.__layout.cellBottomGap, $keyboardFocusEffect$$1_r$$56_style$$101$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$19$$, 
  $cellData$$9$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$37$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$19$$, $cellData$$9$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellDims$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$19$$, $keyboardFocusEffect$$1_r$$56_style$$101$$, $c$$37$$, $cellLayout$$2$$, $availSpace$$99_cellIndex$$4_childContainer$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($cellContainer_childArea$$, $cellDims$$.x + $cellGap_cellRect$$ / 2, $cellDims$$.y + $cellGap_cellRect$$ / 2);
  $availSpace$$99_cellIndex$$4_childContainer$$ = $keyboardFocusEffect$$1_r$$56_style$$101$$ * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$19$$) + $c$$37$$;
  $cellGap_cellRect$$ = new D.$DvtRect$$($nbox$$19$$.$getCtx$(), 0, 0, window.Math.max($cellDims$$.$w$ - $cellGap_cellRect$$, 0), window.Math.max($cellDims$$.$h$ - $cellGap_cellRect$$, 0));
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cellGap_cellRect$$);
  $keyboardFocusEffect$$1_r$$56_style$$101$$ = D.$DvtNBoxStyleUtils$$.$getCellStyle$($nbox$$19$$, $availSpace$$99_cellIndex$$4_childContainer$$);
  D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$($cellGap_cellRect$$, $keyboardFocusEffect$$1_r$$56_style$$101$$);
  $cellContainer_childArea$$.$addChild$($cellGap_cellRect$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$19$$, $cellData$$9$$, $cellGap_cellRect$$, "background");
  $keyboardFocusEffect$$1_r$$56_style$$101$$ = new D.$DvtKeyboardFocusEffect$$($nbox$$19$$.$getCtx$(), $cellContainer_childArea$$, new D.$DvtRectangle$$(-1, -1, $cellGap_cellRect$$.getWidth() + 2, $cellGap_cellRect$$.getHeight() + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$19$$, $cellData$$9$$, $keyboardFocusEffect$$1_r$$56_style$$101$$, "focusEffect");
  $addedHeader_cellCounts$$2$$ = D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$19$$, $cellData$$9$$, $cellContainer_childArea$$, $addedHeader_cellCounts$$2$$, !1);
  $availSpace$$99_cellIndex$$4_childContainer$$ = D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$19$$, $availSpace$$99_cellIndex$$4_childContainer$$) ? new D.$DvtSimpleScrollableContainer$$($nbox$$19$$.$getCtx$(), $cellGap_cellRect$$.getWidth(), $cellGap_cellRect$$.getHeight() - ($addedHeader_cellCounts$$2$$ ? $cellLayout$$2$$.headerSize : 0)) : new D.$DvtContainer$$($nbox$$19$$.$getCtx$());
  $cellContainer_childArea$$.$addChild$($availSpace$$99_cellIndex$$4_childContainer$$);
  $cellContainer_childArea$$.$setChildContainer$($availSpace$$99_cellIndex$$4_childContainer$$);
  $cellContainer_childArea$$ = null;
  $addedHeader_cellCounts$$2$$ ? ($cellContainer_childArea$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$19$$, $cellData$$9$$) ? new D.$DvtRectangle$$($cellLayout$$2$$.headerSize, $cellTopGap$$, $cellGap_cellRect$$.getWidth() - $cellLayout$$2$$.headerSize - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellTopGap$$ - $cellBottomGap_options$$208$$) : new D.$DvtRectangle$$($cellStartGap$$, $cellLayout$$2$$.headerSize, $cellGap_cellRect$$.getWidth() - $cellStartGap$$ - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - 
  $cellLayout$$2$$.headerSize - $cellBottomGap_options$$208$$), $availSpace$$99_cellIndex$$4_childContainer$$ instanceof D.$DvtSimpleScrollableContainer$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($availSpace$$99_cellIndex$$4_childContainer$$, 0, $cellLayout$$2$$.headerSize)) : $cellContainer_childArea$$ = new D.$DvtRectangle$$($cellStartGap$$, $cellTopGap$$, $cellGap_cellRect$$.getWidth() - $cellStartGap$$ - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellTopGap$$ - $cellBottomGap_options$$208$$);
  $cellContainer_childArea$$.$w$ = window.Math.max($cellContainer_childArea$$.$w$, 0);
  $cellContainer_childArea$$.$h$ = window.Math.max($cellContainer_childArea$$.$h$, 0);
  $cellData$$9$$.__childArea = $cellContainer_childArea$$
};
D.$DvtNBoxCellRenderer$$.$renderHeader$ = function $$DvtNBoxCellRenderer$$$$renderHeader$$($nbox$$20$$, $cellData$$10$$, $cellContainer$$1$$, $cellCounts$$3_countLabelOffset_labelWidth$$6$$, $label$$64_noCount$$) {
  var $countLabelGap_oldClose_oldCountLabel_oldLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$10$$, D.$DvtNBoxConstants$$.$LABEL$);
  $countLabelGap_oldClose_oldCountLabel_oldLabel$$ && ($countLabelGap_oldClose_oldCountLabel_oldLabel$$.getParent().removeChild($countLabelGap_oldClose_oldCountLabel_oldLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$10$$, null, D.$DvtNBoxConstants$$.$LABEL$));
  if($countLabelGap_oldClose_oldCountLabel_oldLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$10$$, "countLabel")) {
    $countLabelGap_oldClose_oldCountLabel_oldLabel$$.getParent().removeChild($countLabelGap_oldClose_oldCountLabel_oldLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$10$$, null, "countLabel")
  }
  if($countLabelGap_oldClose_oldCountLabel_oldLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$10$$, "closeButton")) {
    $countLabelGap_oldClose_oldCountLabel_oldLabel$$.getParent().removeChild($countLabelGap_oldClose_oldCountLabel_oldLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$10$$, null, "closeButton")
  }
  var $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = !1;
  if($cellData$$10$$) {
    var $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ = $nbox$$20$$.$getOptions$(), $countLabelGap_oldClose_oldCountLabel_oldLabel$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$.__layout.countLabelGap, $cellCloseGap_labelHeight$$6$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$.__layout.cellCloseGap, $cellStartGap$$1_labelX$$2$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$.__layout.cellStartGap, $cellEndGap$$1$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$.__layout.cellEndGap, 
    $cellTopGap$$1$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$.__layout.cellTopGap, $cellLayout$$3_countLabel$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$.__layout.__cellLayout, $cellRect$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$10$$, "background"), $r$$57_rtl$$22$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$20$$, $cellData$$10$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$38_cellIndex$$5$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$20$$, 
    $cellData$$10$$[D.$DvtNBoxConstants$$.$COLUMN$]), $c$$38_cellIndex$$5$$ = $r$$57_rtl$$22$$ * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$20$$) + $c$$38_cellIndex$$5$$, $r$$57_rtl$$22$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$20$$.$getCtx$()), $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = 0;
    if(D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$20$$, $c$$38_cellIndex$$5$$)) {
      var $closeEna_countLabelY$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$._resources.close_ena, $closeWidth_halign$$7$$ = $closeEna_countLabelY$$.width;
      $cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$ > $closeWidth_halign$$7$$ && ($addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$._resources.close_ovr, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$._resources.close_dwn, $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ = new D.$DvtImage$$($nbox$$20$$.$getCtx$(), $closeEna_countLabelY$$.src, 
      0, 0, $closeEna_countLabelY$$.width, $closeEna_countLabelY$$.height), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = new D.$DvtImage$$($nbox$$20$$.$getCtx$(), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$.src, 0, 0, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$.width, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$.height), $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = new D.$DvtImage$$($nbox$$20$$.$getCtx$(), $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$.src, 
      0, 0, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$.width, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$.height), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = new D.$DvtButton$$($nbox$$20$$.$getCtx$(), $closeEnaImg_countLabelWidth_countLabelX_options$$209$$, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$, null, null, $cellContainer$$1$$.$handleDoubleClick$, $cellContainer$$1$$), $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = 
      $r$$57_rtl$$22$$ ? window.Math.min(($cellRect$$1$$.getWidth() - $closeWidth_halign$$7$$) / 2, $cellEndGap$$1$$) : window.Math.max(($cellRect$$1$$.getWidth() - $closeWidth_halign$$7$$) / 2, $cellRect$$1$$.getWidth() - $cellEndGap$$1$$ - $closeWidth_halign$$7$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$, $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$, $cellTopGap$$1$$), $cellContainer$$1$$.$addChild$($addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$), 
      $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ = $closeWidth_halign$$7$$ + $cellCloseGap_labelHeight$$6$$, D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$10$$, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$, "closeButton"), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = !0)
    }
    if($cellData$$10$$[D.$DvtNBoxConstants$$.$LABEL$]) {
      var $cellCloseGap_labelHeight$$6$$ = $cellLayout$$3_countLabel$$.labelHeight, $skipLabel$$ = !1, $closeWidth_halign$$7$$ = D.$DvtNBoxStyleUtils$$.$getLabelHalign$($nbox$$20$$, $cellData$$10$$), $countLabelWidthWithGap$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ = 0, $cellLayout$$3_countLabel$$ = null, $closeEna_countLabelY$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ = 0, $countText$$ = null, $showCount$$ = D.$DvtNBoxStyleUtils$$.$getCellShowCount$($nbox$$20$$, 
      $cellData$$10$$), $cellCountLabel$$ = $cellData$$10$$.countLabel;
      $label$$64_noCount$$ || ($cellCountLabel$$ && "off" != $showCount$$ ? $countText$$ = $cellCountLabel$$ : "on" == $showCount$$ && ($countText$$ = "" + $cellCounts$$3_countLabelOffset_labelWidth$$6$$.total[$c$$38_cellIndex$$5$$], $cellCounts$$3_countLabelOffset_labelWidth$$6$$.highlighted && ($countText$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "HIGHLIGHTED_COUNT", [$cellCounts$$3_countLabelOffset_labelWidth$$6$$.highlighted[$c$$38_cellIndex$$5$$], $countText$$]))));
      D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$20$$, $cellData$$10$$) ? ($countText$$ && ($cellLayout$$3_countLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $countText$$, D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$20$$), "center", "middle"), D.$DvtTextUtils$$.$fitText$($cellLayout$$3_countLabel$$, $cellRect$$1$$.getHeight() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$, $cellRect$$1$$.getWidth() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) ? (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, 
      $cellData$$10$$, $cellLayout$$3_countLabel$$, "countLabel"), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = !0, $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ = $cellLayout$$3_countLabel$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$, $closeEna_countLabelY$$ = $cellRect$$1$$.getHeight() / 2, $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ = $cellTopGap$$1$$ + 
      $cellCloseGap_labelHeight$$6$$ / 2) : $skipLabel$$ = !0), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 0, $skipLabel$$ || ($label$$64_noCount$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $cellData$$10$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$20$$, $c$$38_cellIndex$$5$$), "center", "middle"), D.$DvtTextUtils$$.$fitText$($label$$64_noCount$$, $cellRect$$1$$.getHeight() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$ - $countLabelWidthWithGap$$, 
      $cellRect$$1$$.getWidth() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) && (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$10$$, $label$$64_noCount$$, D.$DvtNBoxConstants$$.$LABEL$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = $label$$64_noCount$$.$getDimensions$().$w$, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = !0, D.$DvtNBoxRenderer$$.$positionText$($label$$64_noCount$$, $cellTopGap$$1$$ + $cellCloseGap_labelHeight$$6$$ / 2, ($cellRect$$1$$.getHeight() + 
      $countLabelWidthWithGap$$) / 2, $r$$57_rtl$$22$$ ? window.Math.PI / 2 : -window.Math.PI / 2), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$) / 2)), $cellLayout$$3_countLabel$$ && D.$DvtNBoxRenderer$$.$positionText$($cellLayout$$3_countLabel$$, $closeEnaImg_countLabelWidth_countLabelX_options$$209$$, $closeEna_countLabelY$$ - $cellCounts$$3_countLabelOffset_labelWidth$$6$$, $r$$57_rtl$$22$$ ? 
      window.Math.PI / 2 : -window.Math.PI / 2)) : ($countText$$ && ($cellLayout$$3_countLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $countText$$, D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$20$$), $closeWidth_halign$$7$$, "middle"), D.$DvtTextUtils$$.$fitText$($cellLayout$$3_countLabel$$, $cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$ - $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$, $cellRect$$1$$.getHeight() - 2 * $cellTopGap$$1$$, 
      $cellContainer$$1$$) ? (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$10$$, $cellLayout$$3_countLabel$$, "countLabel"), $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = !0, $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ = $cellLayout$$3_countLabel$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$, $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ = 
      "center" == $closeWidth_halign$$7$$ ? $cellRect$$1$$.getWidth() / 2 : "right" == $closeWidth_halign$$7$$ ? $cellRect$$1$$.getWidth() - $cellEndGap$$1$$ : $cellStartGap$$1_labelX$$2$$, $closeEna_countLabelY$$ = $cellTopGap$$1$$ + $cellCloseGap_labelHeight$$6$$ / 2, D.$DvtNBoxRenderer$$.$positionText$($cellLayout$$3_countLabel$$, $closeEnaImg_countLabelWidth_countLabelX_options$$209$$, $closeEna_countLabelY$$)) : $skipLabel$$ = !0), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 0, $skipLabel$$ || 
      ($label$$64_noCount$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $cellData$$10$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$20$$, $c$$38_cellIndex$$5$$), $closeWidth_halign$$7$$, "middle"), D.$DvtTextUtils$$.$fitText$($label$$64_noCount$$, $cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$ - $cellCloseWidthWithGap_closeButtonX_closeDwn_closeDwnImg$$ - $countLabelWidthWithGap$$, $cellRect$$1$$.getHeight() - 2 * 
      $cellTopGap$$1$$, $cellContainer$$1$$) && (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$10$$, $label$$64_noCount$$, D.$DvtNBoxConstants$$.$LABEL$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = $label$$64_noCount$$.$getDimensions$().$w$, $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$ = !0, "center" == $closeWidth_halign$$7$$ ? ($cellStartGap$$1_labelX$$2$$ = ($cellRect$$1$$.getWidth() - ($r$$57_rtl$$22$$ ? -1 : 1) * $countLabelWidthWithGap$$) / 2, $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 
      ($r$$57_rtl$$22$$ ? -1 : 1) * ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$) / 2) : "right" == $closeWidth_halign$$7$$ ? ($cellStartGap$$1_labelX$$2$$ = $cellRect$$1$$.getWidth() - $cellEndGap$$1$$ - ($r$$57_rtl$$22$$ ? 0 : 1) * $countLabelWidthWithGap$$, $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($r$$57_rtl$$22$$ ? -1 : 0) * ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$)) : ($cellStartGap$$1_labelX$$2$$ += 
      ($r$$57_rtl$$22$$ ? 1 : 0) * $countLabelWidthWithGap$$, $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($r$$57_rtl$$22$$ ? 0 : 1) * ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap_oldClose_oldCountLabel_oldLabel$$)), D.$DvtNBoxRenderer$$.$positionText$($label$$64_noCount$$, $cellStartGap$$1_labelX$$2$$, $cellTopGap$$1$$ + $cellCloseGap_labelHeight$$6$$ / 2))), $cellLayout$$3_countLabel$$ && $cellCounts$$3_countLabelOffset_labelWidth$$6$$ && D.$DvtNBoxRenderer$$.$positionText$($cellLayout$$3_countLabel$$, 
      $closeEnaImg_countLabelWidth_countLabelX_options$$209$$ + $cellCounts$$3_countLabelOffset_labelWidth$$6$$, $closeEna_countLabelY$$))
    }
  }
  D.$DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$($nbox$$20$$, $cellData$$10$$, $cellContainer$$1$$);
  return $addedHeader$$1_closeButton$$2_closeOvr_closeOvrImg$$
};
D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$ = function $$DvtNBoxCellRenderer$$$$renderBodyCountLabels$$($nbox$$21$$, $cellCounts$$4$$, $cellContainer$$2_cellIndices$$) {
  var $cellLayout$$4$$ = D.$DvtNBoxCellRenderer$$.$calculateCellLayout$($nbox$$21$$, $cellCounts$$4$$), $cellTopGap$$2$$ = $nbox$$21$$.$getOptions$().__layout.cellTopGap, $cellStartGap$$2$$ = $nbox$$21$$.$getOptions$().__layout.cellStartGap, $childArea$$1_headerFontSize$$ = window.Number.MAX_VALUE, $removeHeaders$$ = !1, $cellData$$11_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellContainer$$2_cellIndices$$[0]), $headerLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, 
  $cellData$$11_cellIndex$$6_count$$20$$, D.$DvtNBoxConstants$$.$LABEL$), $headerCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$, "countLabel"), $headerLabelSize_maximizedCellIndices$$ = $headerLabel$$ && $headerLabel$$.$getCSSStyle$() ? $headerLabel$$.$getCSSStyle$().$getFontSize$() : null, $headerCountSize_minimizedCellIndices$$ = $headerCount$$5$$ && $headerCount$$5$$.$getCSSStyle$() ? $headerCount$$5$$.$getCSSStyle$().$getFontSize$() : null, 
  $headerLabelSize_maximizedCellIndices$$ = (0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) ? (0,window.parseFloat)($headerLabelSize_maximizedCellIndices$$) : $headerLabelSize_maximizedCellIndices$$, $headerCountSize_minimizedCellIndices$$ = (0,window.isNaN)($headerCountSize_minimizedCellIndices$$) ? (0,window.parseFloat)($headerCountSize_minimizedCellIndices$$) : $headerCountSize_minimizedCellIndices$$;
  if(!(0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) || !(0,window.isNaN)($headerCountSize_minimizedCellIndices$$)) {
    $childArea$$1_headerFontSize$$ = (0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) ? $headerCountSize_minimizedCellIndices$$ : (0,window.isNaN)($headerCountSize_minimizedCellIndices$$) ? $headerLabelSize_maximizedCellIndices$$ : window.Math.max($headerLabelSize_maximizedCellIndices$$, $headerCountSize_minimizedCellIndices$$)
  }
  for(var $headerLabelSize_maximizedCellIndices$$ = [], $headerCountSize_minimizedCellIndices$$ = [], $i$$730$$ = 0;$i$$730$$ < $cellContainer$$2_cellIndices$$.length;$i$$730$$++) {
    $cellData$$11_cellIndex$$6_count$$20$$ = $cellContainer$$2_cellIndices$$[$i$$730$$], D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$) ? $headerCountSize_minimizedCellIndices$$.push($cellData$$11_cellIndex$$6_count$$20$$) : $headerLabelSize_maximizedCellIndices$$.push($cellData$$11_cellIndex$$6_count$$20$$)
  }
  for(var $maximizedLabels$$ = [], $minimizedLabels$$ = [], $i$$730$$ = 0;$i$$730$$ < $headerLabelSize_maximizedCellIndices$$.length;$i$$730$$++) {
    $cellData$$11_cellIndex$$6_count$$20$$ = $headerLabelSize_maximizedCellIndices$$[$i$$730$$], $cellData$$11_cellIndex$$6_count$$20$$ = $cellCounts$$4$$.total[$cellData$$11_cellIndex$$6_count$$20$$], $maximizedLabels$$[$i$$730$$] = D.$DvtNBoxRenderer$$.$createText$($nbox$$21$$.$getCtx$(), "" + $cellData$$11_cellIndex$$6_count$$20$$, D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($nbox$$21$$), "center", "middle")
  }
  for($i$$730$$ = 0;$i$$730$$ < $headerCountSize_minimizedCellIndices$$.length;$i$$730$$++) {
    $cellData$$11_cellIndex$$6_count$$20$$ = $headerCountSize_minimizedCellIndices$$[$i$$730$$], $cellData$$11_cellIndex$$6_count$$20$$ = $cellCounts$$4$$.total[$cellData$$11_cellIndex$$6_count$$20$$], $minimizedLabels$$[$i$$730$$] = D.$DvtNBoxRenderer$$.$createText$($nbox$$21$$.$getCtx$(), "" + $cellData$$11_cellIndex$$6_count$$20$$, D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($nbox$$21$$), "center", "middle")
  }
  var $headerRemoved_maximizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerLabelSize_maximizedCellIndices$$, $maximizedLabels$$);
  if($headerRemoved_maximizedFontSize$$ <= $childArea$$1_headerFontSize$$ || $headerCount$$5$$ && !$headerLabel$$) {
    $removeHeaders$$ = !0
  }
  var $minimizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerCountSize_minimizedCellIndices$$, $minimizedLabels$$);
  if($minimizedFontSize$$ <= $childArea$$1_headerFontSize$$ || $headerCount$$5$$ && !$headerLabel$$) {
    $removeHeaders$$ = !0
  }
  if($removeHeaders$$) {
    for($i$$730$$ = 0;$i$$730$$ < $cellContainer$$2_cellIndices$$.length;$i$$730$$++) {
      $cellData$$11_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellContainer$$2_cellIndices$$[$i$$730$$]), $headerLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$, D.$DvtNBoxConstants$$.$LABEL$), $headerCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$, "countLabel"), $childArea$$1_headerFontSize$$ = $cellData$$11_cellIndex$$6_count$$20$$.__childArea, $headerRemoved_maximizedFontSize$$ = 
      !1, $headerLabel$$ && ($headerLabel$$.getParent().removeChild($headerLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$, null, D.$DvtNBoxConstants$$.$LABEL$), $headerRemoved_maximizedFontSize$$ = !0), $headerCount$$5$$ && ($headerCount$$5$$.getParent().removeChild($headerCount$$5$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$, null, "countLabel"), $headerRemoved_maximizedFontSize$$ = !0), $headerRemoved_maximizedFontSize$$ && 
      (D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$) ? ($childArea$$1_headerFontSize$$.x -= $cellLayout$$4$$.headerSize - $cellStartGap$$2$$, $childArea$$1_headerFontSize$$.$w$ += $cellLayout$$4$$.headerSize - $cellStartGap$$2$$) : ($childArea$$1_headerFontSize$$.y -= $cellLayout$$4$$.headerSize - $cellTopGap$$2$$, $childArea$$1_headerFontSize$$.$h$ += $cellLayout$$4$$.headerSize - $cellTopGap$$2$$), $cellData$$11_cellIndex$$6_count$$20$$.__childArea = 
      $childArea$$1_headerFontSize$$)
    }
    $headerRemoved_maximizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerLabelSize_maximizedCellIndices$$, $maximizedLabels$$);
    $minimizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerCountSize_minimizedCellIndices$$, $minimizedLabels$$)
  }
  for($i$$730$$ = 0;$i$$730$$ < $headerLabelSize_maximizedCellIndices$$.length;$i$$730$$++) {
    $cellData$$11_cellIndex$$6_count$$20$$ = $headerLabelSize_maximizedCellIndices$$[$i$$730$$], $cellData$$11_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$), $cellContainer$$2_cellIndices$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$), $childArea$$1_headerFontSize$$ = $cellData$$11_cellIndex$$6_count$$20$$.__childArea, $maximizedLabels$$[$i$$730$$].$setFontSize$($headerRemoved_maximizedFontSize$$), 
    D.$DvtTextUtils$$.$fitText$($maximizedLabels$$[$i$$730$$], $childArea$$1_headerFontSize$$.$w$, $childArea$$1_headerFontSize$$.$h$, $cellContainer$$2_cellIndices$$) && ($removeHeaders$$ || D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$, $cellContainer$$2_cellIndices$$, $cellCounts$$4$$, !0), D.$DvtNBoxRenderer$$.$positionText$($maximizedLabels$$[$i$$730$$], $childArea$$1_headerFontSize$$.x + $childArea$$1_headerFontSize$$.$w$ / 2, $childArea$$1_headerFontSize$$.y + 
    $childArea$$1_headerFontSize$$.$h$ / 2))
  }
  for($i$$730$$ = 0;$i$$730$$ < $headerCountSize_minimizedCellIndices$$.length;$i$$730$$++) {
    $cellData$$11_cellIndex$$6_count$$20$$ = $headerCountSize_minimizedCellIndices$$[$i$$730$$], $cellData$$11_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$), $cellContainer$$2_cellIndices$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$), $childArea$$1_headerFontSize$$ = $cellData$$11_cellIndex$$6_count$$20$$.__childArea, $minimizedLabels$$[$i$$730$$].$setFontSize$($minimizedFontSize$$), 
    D.$DvtTextUtils$$.$fitText$($minimizedLabels$$[$i$$730$$], $childArea$$1_headerFontSize$$.$w$, $childArea$$1_headerFontSize$$.$h$, $cellContainer$$2_cellIndices$$) && ($removeHeaders$$ || D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$21$$, $cellData$$11_cellIndex$$6_count$$20$$, $cellContainer$$2_cellIndices$$, $cellCounts$$4$$, !0), D.$DvtNBoxRenderer$$.$positionText$($minimizedLabels$$[$i$$730$$], $childArea$$1_headerFontSize$$.x + $childArea$$1_headerFontSize$$.$w$ / 2, $childArea$$1_headerFontSize$$.y + 
    $childArea$$1_headerFontSize$$.$h$ / 2))
  }
};
D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$ = function $$DvtNBoxCellRenderer$$$$getBodyCountLabelsFontSize$$($nbox$$22$$, $cellIndices$$1$$, $labels$$22$$) {
  for(var $fontSize$$11$$ = window.Number.MAX_VALUE, $i$$731$$ = 0;$i$$731$$ < $cellIndices$$1$$.length;$i$$731$$++) {
    var $childArea$$2$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$22$$, $cellIndices$$1$$[$i$$731$$]).__childArea, $fontSize$$11$$ = window.Math.min($fontSize$$11$$, $labels$$22$$[$i$$731$$].$getOptimalFontSize$($childArea$$2$$))
  }
  return $fontSize$$11$$
};
D.$DvtNBoxCellRenderer$$.$_isLabelVertical$ = function $$DvtNBoxCellRenderer$$$$_isLabelVertical$$($nbox$$23$$, $cellData$$12$$) {
  var $maximizedColumn$$4$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$23$$), $maximizedRow$$4$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$23$$);
  return $maximizedColumn$$4$$ && $maximizedColumn$$4$$ != $cellData$$12$$[D.$DvtNBoxConstants$$.$COLUMN$] && (!$maximizedRow$$4$$ || $maximizedRow$$4$$ == $cellData$$12$$[D.$DvtNBoxConstants$$.$ROW$]) ? !0 : !1
};
D.$DvtNBoxCellRenderer$$.$getCellDimensions$ = function $$DvtNBoxCellRenderer$$$$getCellDimensions$$($maximizedColumnIndex_nbox$$24$$, $minimizedColumnSize_rowIndex$$14$$, $columnIndex$$3$$, $cellLayout$$5_columnCount$$5$$, $availSpace$$100$$) {
  var $cellGap$$1_minimizedSize$$ = $maximizedColumnIndex_nbox$$24$$.$getOptions$().__layout.cellGap, $rtl$$23$$ = (0,D.$DvtAgent$isRightToLeft$$)($maximizedColumnIndex_nbox$$24$$.$getCtx$()), $cellGap$$1_minimizedSize$$ = $cellGap$$1_minimizedSize$$ + $cellLayout$$5_columnCount$$5$$.minimumCellSize, $rowCount$$10$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($maximizedColumnIndex_nbox$$24$$);
  $cellLayout$$5_columnCount$$5$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($maximizedColumnIndex_nbox$$24$$);
  var $defaultRowDimensions_rowH$$ = D.$DvtNBoxRenderer$$.$getRowDimensions$($maximizedColumnIndex_nbox$$24$$, $minimizedColumnSize_rowIndex$$14$$, $availSpace$$100$$), $columnW_defaultColumnDimensions$$ = D.$DvtNBoxRenderer$$.$getColumnDimensions$($maximizedColumnIndex_nbox$$24$$, $columnIndex$$3$$, $availSpace$$100$$), $maximizedRow$$5_minimizedRowSize$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($maximizedColumnIndex_nbox$$24$$), $maximizedColumn$$5$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($maximizedColumnIndex_nbox$$24$$), 
  $columnX$$ = $columnW_defaultColumnDimensions$$.x, $maximizedRowIndex_rowY$$ = $defaultRowDimensions_rowH$$.y, $columnW_defaultColumnDimensions$$ = $columnW_defaultColumnDimensions$$.$w$, $defaultRowDimensions_rowH$$ = $defaultRowDimensions_rowH$$.$h$, $processColumn$$ = !0;
  $maximizedRow$$5_minimizedRowSize$$ && ($maximizedRowIndex_rowY$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($maximizedColumnIndex_nbox$$24$$, $maximizedRow$$5_minimizedRowSize$$), $maximizedRow$$5_minimizedRowSize$$ = window.Math.min($availSpace$$100$$.$h$ / (3 * ($rowCount$$10$$ - 1)), $cellGap$$1_minimizedSize$$), $minimizedColumnSize_rowIndex$$14$$ < $maximizedRowIndex_rowY$$ ? ($maximizedRowIndex_rowY$$ = $availSpace$$100$$.y + $availSpace$$100$$.$h$ - ($minimizedColumnSize_rowIndex$$14$$ + 1) * 
  $maximizedRow$$5_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $maximizedRow$$5_minimizedRowSize$$, $processColumn$$ = !1) : $minimizedColumnSize_rowIndex$$14$$ == $maximizedRowIndex_rowY$$ ? ($maximizedRowIndex_rowY$$ = $availSpace$$100$$.y + ($rowCount$$10$$ - $minimizedColumnSize_rowIndex$$14$$ - 1) * $maximizedRow$$5_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $availSpace$$100$$.$h$ - ($rowCount$$10$$ - 1) * $maximizedRow$$5_minimizedRowSize$$) : ($maximizedRowIndex_rowY$$ = $availSpace$$100$$.y + 
  ($rowCount$$10$$ - $minimizedColumnSize_rowIndex$$14$$ - 1) * $maximizedRow$$5_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $maximizedRow$$5_minimizedRowSize$$, $processColumn$$ = !1));
  $maximizedColumn$$5$$ && $processColumn$$ && ($maximizedColumnIndex_nbox$$24$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($maximizedColumnIndex_nbox$$24$$, $maximizedColumn$$5$$), $minimizedColumnSize_rowIndex$$14$$ = window.Math.min($availSpace$$100$$.$w$ / (3 * ($cellLayout$$5_columnCount$$5$$ - 1)), $cellGap$$1_minimizedSize$$), $columnIndex$$3$$ < $maximizedColumnIndex_nbox$$24$$ ? ($columnW_defaultColumnDimensions$$ = $minimizedColumnSize_rowIndex$$14$$, $columnX$$ = $availSpace$$100$$.x + ($rtl$$23$$ ? 
  $availSpace$$100$$.$w$ - $minimizedColumnSize_rowIndex$$14$$ : 0) + ($rtl$$23$$ ? -1 : 1) * $columnIndex$$3$$ * $minimizedColumnSize_rowIndex$$14$$) : $columnIndex$$3$$ == $maximizedColumnIndex_nbox$$24$$ ? ($columnW_defaultColumnDimensions$$ = $availSpace$$100$$.$w$ - ($cellLayout$$5_columnCount$$5$$ - 1) * $minimizedColumnSize_rowIndex$$14$$, $columnX$$ = $availSpace$$100$$.x + ($rtl$$23$$ ? $availSpace$$100$$.$w$ - $columnW_defaultColumnDimensions$$ : 0) + ($rtl$$23$$ ? -1 : 1) * $columnIndex$$3$$ * 
  $minimizedColumnSize_rowIndex$$14$$) : ($columnW_defaultColumnDimensions$$ = $minimizedColumnSize_rowIndex$$14$$, $columnX$$ = $availSpace$$100$$.x + ($rtl$$23$$ ? -$minimizedColumnSize_rowIndex$$14$$ : $availSpace$$100$$.$w$) + ($rtl$$23$$ ? 1 : -1) * ($cellLayout$$5_columnCount$$5$$ - $columnIndex$$3$$) * $minimizedColumnSize_rowIndex$$14$$));
  return new D.$DvtRectangle$$($columnX$$, $maximizedRowIndex_rowY$$, $columnW_defaultColumnDimensions$$, $defaultRowDimensions_rowH$$)
};
D.$DvtNBoxCellRenderer$$.$calculateCellLayout$ = function $$DvtNBoxCellRenderer$$$$calculateCellLayout$$($nbox$$25$$, $cellCounts$$6$$) {
  var $options$$211$$ = $nbox$$25$$.$getOptions$(), $cellTopGap$$3_headerSize$$ = $options$$211$$.__layout.cellTopGap, $cellBottomGap$$1_minimizedHeaderSize$$ = $options$$211$$.__layout.cellBottomGap, $cellLabelGap$$ = $options$$211$$.__layout.cellLabelGap, $cellLayout$$6_minimumCellSize$$ = $options$$211$$.__layout.minimumCellSize, $label$$65_labelHeight$$7$$ = 0, $cellData$$13_count$$21_countLabelHeight$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$25$$, 0);
  if($cellData$$13_count$$21_countLabelHeight$$ && $cellData$$13_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $halign$$8$$ = $cellData$$13_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL_HALIGN$], $label$$65_labelHeight$$7$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$25$$.$getCtx$(), $cellData$$13_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$25$$, 0), $halign$$8$$, "middle"), $label$$65_labelHeight$$7$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$65_labelHeight$$7$$).$h$;
    "on" == D.$DvtNBoxStyleUtils$$.$getCellShowCount$($nbox$$25$$, $cellData$$13_count$$21_countLabelHeight$$) && ($cellData$$13_count$$21_countLabelHeight$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$25$$.$getCtx$(), $cellCounts$$6$$.total[0], D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$25$$), $halign$$8$$, "middle"), $cellData$$13_count$$21_countLabelHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellData$$13_count$$21_countLabelHeight$$).$h$, $label$$65_labelHeight$$7$$ = window.Math.max($label$$65_labelHeight$$7$$, 
    $cellData$$13_count$$21_countLabelHeight$$))
  }
  D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$25$$) && D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$25$$) && ($label$$65_labelHeight$$7$$ = window.Math.max($label$$65_labelHeight$$7$$, $options$$211$$._resources.close_ena.height));
  $cellBottomGap$$1_minimizedHeaderSize$$ = $label$$65_labelHeight$$7$$ + $cellTopGap$$3_headerSize$$ + $cellBottomGap$$1_minimizedHeaderSize$$;
  $cellTopGap$$3_headerSize$$ = $label$$65_labelHeight$$7$$ + $cellTopGap$$3_headerSize$$ + $cellLabelGap$$;
  $cellLayout$$6_minimumCellSize$$ = window.Math.max($cellBottomGap$$1_minimizedHeaderSize$$, $cellLayout$$6_minimumCellSize$$);
  $cellLayout$$6_minimumCellSize$$ = {labelHeight:$label$$65_labelHeight$$7$$, headerSize:$cellTopGap$$3_headerSize$$, minimizedHeaderSize:$cellBottomGap$$1_minimizedHeaderSize$$, minimumCellSize:$cellLayout$$6_minimumCellSize$$};
  return $options$$211$$.__layout.__cellLayout = $cellLayout$$6_minimumCellSize$$
};
D.$DvtNBoxCellRenderer$$.$animateUpdate$ = function $$DvtNBoxCellRenderer$$$$animateUpdate$$($animationHandler$$23$$, $oldCell$$1_oldClose$$1$$, $newCell$$) {
  var $newClose_oldCloseStart_oldNBox$$8$$ = $animationHandler$$23$$.$_oldNBox$, $newNBox$$6$$ = $animationHandler$$23$$.$_newNBox$, $playable$$40$$ = new D.$DvtCustomAnimation$$($newNBox$$6$$.$getCtx$(), $newCell$$, $animationHandler$$23$$.$getAnimationDuration$()), $childContainer$$1$$ = $newCell$$.$getChildContainer$(), $childMatrix$$ = $childContainer$$1$$.$getMatrix$();
  $childContainer$$1$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($childContainer$$1$$));
  var $cellParent_cellTx$$ = $newCell$$.getParent();
  $cellParent_cellTx$$.$addChildAt$($childContainer$$1$$, $cellParent_cellTx$$.$getChildIndex$($newCell$$) + 1);
  var $cellParent_cellTx$$ = $newCell$$.$getTranslateX$(), $cellTy$$ = $newCell$$.$getTranslateY$();
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeMatrix", $newCell$$, $newCell$$.$getMatrix$, $newCell$$.$setMatrix$, $newCell$$.$getMatrix$());
  $newCell$$.$setMatrix$($oldCell$$1_oldClose$$1$$.$getMatrix$());
  var $oldBackground$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newClose_oldCloseStart_oldNBox$$8$$, $oldCell$$1_oldClose$$1$$.getData(), "background"), $effect$$14_newBackground$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$6$$, $newCell$$.getData(), "background"), $widthDiff$$ = (0,D.$DvtAgent$isRightToLeft$$)($newNBox$$6$$.$getCtx$()) ? 0 : $effect$$14_newBackground$$.getWidth() - $oldBackground$$.getWidth();
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeFill", $effect$$14_newBackground$$, $effect$$14_newBackground$$.$getFill$, $effect$$14_newBackground$$.$setFill$, $effect$$14_newBackground$$.$getFill$());
  $effect$$14_newBackground$$.$setFill$($oldBackground$$.$getFill$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $effect$$14_newBackground$$, $effect$$14_newBackground$$.getWidth, $effect$$14_newBackground$$.$setWidth$, $effect$$14_newBackground$$.getWidth());
  $effect$$14_newBackground$$.$setWidth$($oldBackground$$.getWidth());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $effect$$14_newBackground$$, $effect$$14_newBackground$$.getHeight, $effect$$14_newBackground$$.$setHeight$, $effect$$14_newBackground$$.getHeight());
  $effect$$14_newBackground$$.$setHeight$($oldBackground$$.getHeight());
  if($newCell$$.$isShowingKeyboardFocusEffect$() && ($effect$$14_newBackground$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$6$$, $newCell$$.getData(), "focusEffect").$getEffect$())) {
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $effect$$14_newBackground$$, $effect$$14_newBackground$$.getWidth, $effect$$14_newBackground$$.$setWidth$, $effect$$14_newBackground$$.getWidth()), $effect$$14_newBackground$$.$setWidth$($oldBackground$$.getWidth() + 2), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $effect$$14_newBackground$$, $effect$$14_newBackground$$.getHeight, $effect$$14_newBackground$$.$setHeight$, 
    $effect$$14_newBackground$$.getHeight()), $effect$$14_newBackground$$.$setHeight$($oldBackground$$.getHeight() + 2)
  }
  D.$DvtNBoxCellRenderer$$.$_animateLabels$($animationHandler$$23$$, $oldCell$$1_oldClose$$1$$, $newCell$$, "countLabel");
  D.$DvtNBoxCellRenderer$$.$_animateLabels$($animationHandler$$23$$, $oldCell$$1_oldClose$$1$$, $newCell$$, D.$DvtNBoxConstants$$.$LABEL$);
  $oldCell$$1_oldClose$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newClose_oldCloseStart_oldNBox$$8$$, $oldCell$$1_oldClose$$1$$.getData(), "closeButton");
  $newClose_oldCloseStart_oldNBox$$8$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$6$$, $newCell$$.getData(), "closeButton");
  $oldCell$$1_oldClose$$1$$ ? $newClose_oldCloseStart_oldNBox$$8$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeMatrix", $newClose_oldCloseStart_oldNBox$$8$$, $newClose_oldCloseStart_oldNBox$$8$$.$getMatrix$, $newClose_oldCloseStart_oldNBox$$8$$.$setMatrix$, $newClose_oldCloseStart_oldNBox$$8$$.$getMatrix$()), $newClose_oldCloseStart_oldNBox$$8$$.$setMatrix$($oldCell$$1_oldClose$$1$$.$getMatrix$())) : ($newClose_oldCloseStart_oldNBox$$8$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldCell$$1_oldClose$$1$$), 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($oldCell$$1_oldClose$$1$$, $oldCell$$1_oldClose$$1$$.$getTranslateX$() + $widthDiff$$ + $cellParent_cellTx$$, $oldCell$$1_oldClose$$1$$.$getTranslateY$() + $cellTy$$), $animationHandler$$23$$.add(new D.$DvtAnimFadeOut$$($newNBox$$6$$.$getCtx$(), $oldCell$$1_oldClose$$1$$, $animationHandler$$23$$.$getAnimationDuration$()), 1), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeMatrix", $oldCell$$1_oldClose$$1$$, $oldCell$$1_oldClose$$1$$.$getMatrix$, 
  $oldCell$$1_oldClose$$1$$.$setMatrix$, $oldCell$$1_oldClose$$1$$.$getMatrix$()), $oldCell$$1_oldClose$$1$$.$setMatrix$($newClose_oldCloseStart_oldNBox$$8$$), $newNBox$$6$$.$_deleteContainer$.$addChild$($oldCell$$1_oldClose$$1$$)) : $newClose_oldCloseStart_oldNBox$$8$$ && ($animationHandler$$23$$.add(new D.$DvtAnimFadeIn$$($newNBox$$6$$.$getCtx$(), $newClose_oldCloseStart_oldNBox$$8$$, $animationHandler$$23$$.$getAnimationDuration$()), 1), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, 
  "typeMatrix", $newClose_oldCloseStart_oldNBox$$8$$, $newClose_oldCloseStart_oldNBox$$8$$.$getMatrix$, $newClose_oldCloseStart_oldNBox$$8$$.$setMatrix$, $newClose_oldCloseStart_oldNBox$$8$$.$getMatrix$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($newClose_oldCloseStart_oldNBox$$8$$, $newClose_oldCloseStart_oldNBox$$8$$.$getTranslateX$() - $widthDiff$$, $newClose_oldCloseStart_oldNBox$$8$$.$getTranslateY$()), $newClose_oldCloseStart_oldNBox$$8$$.$setAlpha$(0));
  (0,D.$DvtPlayable$appendOnEnd$$)($playable$$40$$, function() {
    $newCell$$.$addChild$($childContainer$$1$$);
    $childContainer$$1$$.$setMatrix$($childMatrix$$)
  });
  $animationHandler$$23$$.add($playable$$40$$, 1)
};
D.$DvtNBoxCellRenderer$$.$_animateLabels$ = function $$DvtNBoxCellRenderer$$$$_animateLabels$$($animationHandler$$24$$, $oldCell$$2_oldVerticalLabel_playable$$41$$, $fadeOutAnim_newCell$$1$$, $labelKey$$) {
  var $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $animationHandler$$24$$.$_oldNBox$, $newNBox$$7$$ = $animationHandler$$24$$.$_newNBox$, $oldLabel$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$, $oldCell$$2_oldVerticalLabel_playable$$41$$.getData(), $labelKey$$), $fadeInAnim_newLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$7$$, $fadeOutAnim_newCell$$1$$.getData(), $labelKey$$);
  $oldCell$$2_oldVerticalLabel_playable$$41$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$, $oldCell$$2_oldVerticalLabel_playable$$41$$.getData());
  $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($newNBox$$7$$, $fadeOutAnim_newCell$$1$$.getData());
  if($oldLabel$$1$$ || $fadeInAnim_newLabel$$) {
    if($oldLabel$$1$$ && $fadeInAnim_newLabel$$ && $oldCell$$2_oldVerticalLabel_playable$$41$$ == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$) {
      $oldCell$$2_oldVerticalLabel_playable$$41$$ = new D.$DvtCustomAnimation$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$());
      var $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $oldLabel$$1$$.$getHorizAlignment$(), $newAlign$$ = $fadeInAnim_newLabel$$.$getHorizAlignment$(), $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = (("left" == $newAlign$$ ? -1 : "center" == $newAlign$$ ? 0 : 1) - ("left" == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ ? -1 : "center" == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ ? 0 : 1)) * $fadeInAnim_newLabel$$.$measureDimensions$().$w$ / 2;
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeNumber", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getX$, $fadeInAnim_newLabel$$.$setX$, $fadeInAnim_newLabel$$.$getX$());
      $fadeInAnim_newLabel$$.$setX$($oldLabel$$1$$.$getX$() + $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$);
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeNumber", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getY$, $fadeInAnim_newLabel$$.$setY$, $fadeInAnim_newLabel$$.$getY$());
      $fadeInAnim_newLabel$$.$setY$($oldLabel$$1$$.$getY$());
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeMatrix", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getMatrix$, $fadeInAnim_newLabel$$.$setMatrix$, $fadeInAnim_newLabel$$.$getMatrix$());
      $fadeInAnim_newLabel$$.$setMatrix$($oldLabel$$1$$.$getMatrix$());
      $animationHandler$$24$$.add($oldCell$$2_oldVerticalLabel_playable$$41$$, 1);
      "countLabel" == $labelKey$$ && $oldLabel$$1$$.$getTextString$() != $fadeInAnim_newLabel$$.$getTextString$() && ($fadeInAnim_newLabel$$.$setAlpha$(0), $fadeOutAnim_newCell$$1$$.$addChild$($oldLabel$$1$$), $fadeOutAnim_newCell$$1$$ = new D.$DvtAnimFadeOut$$($newNBox$$7$$.$getCtx$(), $oldLabel$$1$$, $animationHandler$$24$$.$getAnimationDuration$()), $fadeInAnim_newLabel$$ = new D.$DvtAnimFadeIn$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$()), 
      $animationHandler$$24$$.add($fadeOutAnim_newCell$$1$$, 1), $animationHandler$$24$$.add($fadeInAnim_newLabel$$, 2), (0,D.$DvtPlayable$appendOnEnd$$)($fadeOutAnim_newCell$$1$$, function() {
        $newNBox$$7$$.$_deleteContainer$.$addChild$($oldLabel$$1$$)
      }))
    }else {
      $oldLabel$$1$$ && ($oldLabel$$1$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldLabel$$1$$)), $newNBox$$7$$.$_deleteContainer$.$addChild$($oldLabel$$1$$), $animationHandler$$24$$.add(new D.$DvtAnimFadeOut$$($newNBox$$7$$.$getCtx$(), $oldLabel$$1$$, $animationHandler$$24$$.$getAnimationDuration$()), 1)), $fadeInAnim_newLabel$$ && ($fadeInAnim_newLabel$$.$setAlpha$(0), $animationHandler$$24$$.add(new D.$DvtAnimFadeIn$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$()), 
      1))
    }
  }
};
D.$DvtNBoxCellRenderer$$.$animateDelete$ = function $$DvtNBoxCellRenderer$$$$animateDelete$$($animationHandler$$25$$, $oldCell$$3$$) {
  var $nbox$$26$$ = $animationHandler$$25$$.$_newNBox$, $childContainer$$2$$ = $oldCell$$3$$.$getChildContainer$();
  if($childContainer$$2$$) {
    var $globalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($childContainer$$2$$), $cellParent$$1$$ = $oldCell$$3$$.getParent();
    $cellParent$$1$$.$addChildAt$($childContainer$$2$$, $cellParent$$1$$.$getChildIndex$($oldCell$$3$$) + 1);
    $childContainer$$2$$.$setMatrix$($globalMatrix$$)
  }
  $nbox$$26$$.$_deleteContainer$.$addChild$($oldCell$$3$$);
  $animationHandler$$25$$.add(new D.$DvtAnimFadeOut$$($nbox$$26$$.$getCtx$(), $oldCell$$3$$, $animationHandler$$25$$.$getAnimationDuration$()), 1)
};
D.$DvtNBoxCellRenderer$$.$animateInsert$ = function $$DvtNBoxCellRenderer$$$$animateInsert$$($animationHandler$$26$$, $newCell$$2$$) {
  var $nbox$$27_playable$$42$$ = $animationHandler$$26$$.$_newNBox$, $childContainer$$3$$ = $newCell$$2$$.$getChildContainer$(), $childMatrix$$1$$ = null;
  if($childContainer$$3$$) {
    var $childMatrix$$1$$ = $childContainer$$3$$.$getMatrix$(), $globalMatrix$$1$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$2$$), $cellParent$$2$$ = $newCell$$2$$.getParent();
    $cellParent$$2$$.$addChildAt$($childContainer$$3$$, $cellParent$$2$$.$getChildIndex$($newCell$$2$$) + 1);
    $childContainer$$3$$.$setMatrix$($globalMatrix$$1$$)
  }
  $newCell$$2$$.$setAlpha$(0);
  $nbox$$27_playable$$42$$ = new D.$DvtAnimFadeIn$$($nbox$$27_playable$$42$$.$getCtx$(), $newCell$$2$$, $animationHandler$$26$$.$getAnimationDuration$());
  $childContainer$$3$$ && (0,D.$DvtPlayable$appendOnEnd$$)($nbox$$27_playable$$42$$, function() {
    $newCell$$2$$.$addChild$($childContainer$$3$$);
    $childContainer$$3$$.$setMatrix$($childMatrix$$1$$)
  });
  $animationHandler$$26$$.add($nbox$$27_playable$$42$$, 1)
};
D.$DvtNBoxCellRenderer$$.$renderDropSiteFeedback$ = function $$DvtNBoxCellRenderer$$$$renderDropSiteFeedback$$($nbox$$28$$, $cell$$34$$) {
  var $background$$12$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$28$$, $cell$$34$$.getData(), "background"), $dropSiteFeedback$$ = new D.$DvtRect$$($nbox$$28$$.$getCtx$(), $background$$12$$.$getX$(), $background$$12$$.$getY$(), $background$$12$$.getWidth(), $background$$12$$.getHeight());
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($dropSiteFeedback$$);
  var $style$$102$$ = D.$DvtNBoxStyleUtils$$.$getCellDropTargetStyle$($nbox$$28$$);
  D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$($dropSiteFeedback$$, $style$$102$$);
  $cell$$34$$.$addChildAt$($dropSiteFeedback$$, $cell$$34$$.$getChildIndex$($background$$12$$) + 1);
  return $dropSiteFeedback$$
};
D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$ = function $$DvtNBoxCellRenderer$$$$_applyStyleToRect$$($rect$$34$$, $style$$103$$) {
  var $bgFill$$1_borderColor$$52_fill$$64$$ = $style$$103$$.$getStyle$("background"), $borderWidth$$14_colorFill$$1$$ = $style$$103$$.$getStyle$("background-color");
  ($bgFill$$1_borderColor$$52_fill$$64$$ = $bgFill$$1_borderColor$$52_fill$$64$$ ? $bgFill$$1_borderColor$$52_fill$$64$$ : $borderWidth$$14_colorFill$$1$$) && D.$DvtNBoxRenderer$$.$setFill$($rect$$34$$, $bgFill$$1_borderColor$$52_fill$$64$$);
  "solid" == $style$$103$$.$getStyle$("border-style") && ($bgFill$$1_borderColor$$52_fill$$64$$ = ($bgFill$$1_borderColor$$52_fill$$64$$ = $style$$103$$.$getStyle$("border-color")) ? $bgFill$$1_borderColor$$52_fill$$64$$ : "#000000", $borderWidth$$14_colorFill$$1$$ = $style$$103$$.$getStyle$("border-width"), $borderWidth$$14_colorFill$$1$$ = null == $borderWidth$$14_colorFill$$1$$ ? 1 : (0,window.parseFloat)($borderWidth$$14_colorFill$$1$$), $rect$$34$$.$setSolidStroke$($bgFill$$1_borderColor$$52_fill$$64$$, 
  null, $borderWidth$$14_colorFill$$1$$))
};
D.$DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCellRenderer$$$$_addAccessibilityAttributes$$($nbox$$29_object$$14$$, $cellData$$14$$, $cellContainer$$3_desc$$23$$) {
  $nbox$$29_object$$14$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$29_object$$14$$, $cellData$$14$$, "background") : $cellContainer$$3_desc$$23$$;
  $nbox$$29_object$$14$$.$setAriaRole$("img");
  (0,D.$DvtAgent$deferAriaCreation$$)() || ($cellContainer$$3_desc$$23$$ = $cellContainer$$3_desc$$23$$.$getAriaLabel$()) && $nbox$$29_object$$14$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $cellContainer$$3_desc$$23$$)
};
D.$DvtNBoxNodeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNodeRenderer$$, D.$DvtObj$$, "DvtNBoxNodeRenderer");
D.$DvtNBoxNodeRenderer$$.$render$ = function $$DvtNBoxNodeRenderer$$$$render$$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$) {
  D.$DvtNBoxNodeRenderer$$.$_renderNodeBackground$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeIndicator$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeIcon$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeLabels$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$($nbox$$35$$, $nodeContainer$$5$$)
};
D.$DvtNBoxNodeRenderer$$.$calculateNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeLayout$$($nbox$$36$$, $cellNodes$$) {
  for(var $options$$215$$ = $nbox$$36$$.$getOptions$(), $container$$154_gridGap$$2$$ = $options$$215$$.__layout.gridGap, $cellLayouts_nodeStartLabelGap$$ = $options$$215$$.__layout.nodeStartLabelGap, $nodeLabelOnlyStartLabelGap_startLabelGap$$ = $options$$215$$.__layout.nodeLabelOnlyStartLabelGap, $nodeEndLabelGap_overflow$$4$$ = $options$$215$$.__layout.nodeEndLabelGap, $cellIndices$$2_nodeSwatchSize$$ = $options$$215$$.__layout.nodeSwatchSize, $columnsPerRow_labelVisible_maximumLabelWidth$$ = $options$$215$$.__layout.maximumLabelWidth, 
  $nodes$$17_simpleLayout$$ = D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($nbox$$36$$), $nodeHeight$$3_nodeLayout$$3$$ = $nodes$$17_simpleLayout$$.nodeHeight, $indicatorSectionWidth$$ = $nodes$$17_simpleLayout$$.indicatorSectionWidth, $iconSectionWidth$$ = $nodes$$17_simpleLayout$$.iconSectionWidth, $nodeLabelOnlyStartLabelGap_startLabelGap$$ = $indicatorSectionWidth$$ || $iconSectionWidth$$ ? $cellLayouts_nodeStartLabelGap$$ : $nodeLabelOnlyStartLabelGap_startLabelGap$$, $maxCellIndex_node$$262$$ = 
  D.$DvtNBoxDataUtils$$.$getNode$($nbox$$36$$, 0), $indicatorIcon$$4_maxColumns$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$36$$, $maxCellIndex_node$$262$$), $icon$$43_widestLabel$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$36$$, $maxCellIndex_node$$262$$), $labelSectionWidth_rowCount$$11$$ = 0, $cellLayouts_nodeStartLabelGap$$ = [], $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = 0, $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = 0, 
  $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$36$$), $cellArea_ci$$2_maximizedColumn$$6$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$36$$), $labelSectionWidth_rowCount$$11$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$36$$), $columnCount$$6_label$$66_secondaryLabel$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$36$$), $nodeCount$$8_r$$59$$ = 0;$nodeCount$$8_r$$59$$ < $labelSectionWidth_rowCount$$11$$;$nodeCount$$8_r$$59$$++) {
    for(var $c$$40_nodeCellIndex$$ = 0;$c$$40_nodeCellIndex$$ < $columnCount$$6_label$$66_secondaryLabel$$;$c$$40_nodeCellIndex$$++) {
      $cellLayouts_nodeStartLabelGap$$.push({cellRows:0, cellColumns:0, overflow:!1})
    }
  }
  for(var $maximizedCellIndex$$1_nodeCounts$$ = [], $nodeCount$$8_r$$59$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$36$$), $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = 0;$cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ < $nodeCount$$8_r$$59$$;$cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$++) {
    var $cellIndex$$8_n$$20$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$36$$, $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$);
    D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$36$$, $cellIndex$$8_n$$20$$) || ($c$$40_nodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$36$$, $cellIndex$$8_n$$20$$), (0,window.isNaN)($maximizedCellIndex$$1_nodeCounts$$[$c$$40_nodeCellIndex$$]) && ($maximizedCellIndex$$1_nodeCounts$$[$c$$40_nodeCellIndex$$] = 0), $maximizedCellIndex$$1_nodeCounts$$[$c$$40_nodeCellIndex$$]++)
  }
  if($cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ && $cellArea_ci$$2_maximizedColumn$$6$$) {
    $maximizedCellIndex$$1_nodeCounts$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$36$$, $cellArea_ci$$2_maximizedColumn$$6$$) + $columnCount$$6_label$$66_secondaryLabel$$ * D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$36$$, $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$);
    $cellArea_ci$$2_maximizedColumn$$6$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$36$$, $maximizedCellIndex$$1_nodeCounts$$).__childArea;
    $labelSectionWidth_rowCount$$11$$ = $nodes$$17_simpleLayout$$.labelSectionWidth;
    null == $labelSectionWidth_rowCount$$11$$ && ("ifRequired" != $options$$215$$.labelTruncation ? $labelSectionWidth_rowCount$$11$$ = $columnsPerRow_labelVisible_maximumLabelWidth$$ + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$ : ($nodes$$17_simpleLayout$$ = $cellNodes$$[$maximizedCellIndex$$1_nodeCounts$$], $labelSectionWidth_rowCount$$11$$ = window.Math.max($columnsPerRow_labelVisible_maximumLabelWidth$$, D.$DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($nbox$$36$$, 
    $nodes$$17_simpleLayout$$)) + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$), $labelSectionWidth_rowCount$$11$$ = window.Math.min($labelSectionWidth_rowCount$$11$$, $cellArea_ci$$2_maximizedColumn$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$));
    $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $labelSectionWidth_rowCount$$11$$ + $container$$154_gridGap$$2$$));
    if($maxCellIndex_node$$262$$[D.$DvtNBoxConstants$$.$LABEL$] && ($container$$154_gridGap$$2$$ = new D.$DvtContainer$$, $columnsPerRow_labelVisible_maximumLabelWidth$$ = !1, $columnCount$$6_label$$66_secondaryLabel$$ = D.$DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$36$$, $maxCellIndex_node$$262$$), $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($columnCount$$6_label$$66_secondaryLabel$$).$h$, D.$DvtTextUtils$$.$fitText$($columnCount$$6_label$$66_secondaryLabel$$, 
    $labelSectionWidth_rowCount$$11$$ - $nodeLabelOnlyStartLabelGap_startLabelGap$$ - $nodeEndLabelGap_overflow$$4$$, $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$, $container$$154_gridGap$$2$$) && ($columnsPerRow_labelVisible_maximumLabelWidth$$ = !0), $maxCellIndex_node$$262$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && ($columnCount$$6_label$$66_secondaryLabel$$ = D.$DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$36$$, $maxCellIndex_node$$262$$), $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = 
    D.$DvtTextUtils$$.$guessTextDimensions$($columnCount$$6_label$$66_secondaryLabel$$).$h$, D.$DvtTextUtils$$.$fitText$($columnCount$$6_label$$66_secondaryLabel$$, $labelSectionWidth_rowCount$$11$$ - $nodeLabelOnlyStartLabelGap_startLabelGap$$ - $nodeEndLabelGap_overflow$$4$$, $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$, $container$$154_gridGap$$2$$) && ($columnsPerRow_labelVisible_maximumLabelWidth$$ = !0)), !$columnsPerRow_labelVisible_maximumLabelWidth$$ && ($labelSectionWidth_rowCount$$11$$ = 
    0, $maxCellIndex_node$$262$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$4_maxColumns$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$36$$, $maxCellIndex_node$$262$$)) && (!$icon$$43_widestLabel$$ || $icon$$43_widestLabel$$[D.$DvtNBoxConstants$$.$SOURCE$])))) {
      $labelSectionWidth_rowCount$$11$$ = window.Math.max(0, window.Math.min($cellIndices$$2_nodeSwatchSize$$, $cellArea_ci$$2_maximizedColumn$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$))
    }
    if(0 > $cellArea_ci$$2_maximizedColumn$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$) {
      var $iconWidth$$9$$ = $iconSectionWidth$$, $iconSectionWidth$$ = window.Math.max(0, $cellArea_ci$$2_maximizedColumn$$6$$.$w$ - $indicatorSectionWidth$$)
    }
    0 > $cellArea_ci$$2_maximizedColumn$$6$$.$w$ - $indicatorSectionWidth$$ && ($indicatorSectionWidth$$ = $cellArea_ci$$2_maximizedColumn$$6$$.$w$);
    $cellLayouts_nodeStartLabelGap$$[$maximizedCellIndex$$1_nodeCounts$$] = {cellRows:-1, cellColumns:$cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$, overflow:!1}
  }else {
    $cellIndices$$2_nodeSwatchSize$$ = [];
    if($cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$) {
      $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$36$$, $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$);
      for($c$$40_nodeCellIndex$$ = 0;$c$$40_nodeCellIndex$$ < $columnCount$$6_label$$66_secondaryLabel$$;$c$$40_nodeCellIndex$$++) {
        $cellIndices$$2_nodeSwatchSize$$.push($c$$40_nodeCellIndex$$ + $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ * $columnCount$$6_label$$66_secondaryLabel$$)
      }
    }else {
      if($cellArea_ci$$2_maximizedColumn$$6$$) {
        $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$36$$, $cellArea_ci$$2_maximizedColumn$$6$$);
        for($nodeCount$$8_r$$59$$ = 0;$nodeCount$$8_r$$59$$ < $labelSectionWidth_rowCount$$11$$;$nodeCount$$8_r$$59$$++) {
          $cellIndices$$2_nodeSwatchSize$$.push($cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ + $nodeCount$$8_r$$59$$ * $columnCount$$6_label$$66_secondaryLabel$$)
        }
      }else {
        for($cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = 0;$cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ < $cellLayouts_nodeStartLabelGap$$.length;$cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$++) {
          $cellIndices$$2_nodeSwatchSize$$.push($cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$)
        }
      }
    }
    if(null != $nodes$$17_simpleLayout$$.labelSectionWidth) {
      $labelSectionWidth_rowCount$$11$$ = $nodes$$17_simpleLayout$$.labelSectionWidth, $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$36$$, $cellIndices$$2_nodeSwatchSize$$[0]), $cellArea_ci$$2_maximizedColumn$$6$$ = $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$.__childArea, $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$h$ + 
      $container$$154_gridGap$$2$$) / ($nodeHeight$$3_nodeLayout$$3$$ + $container$$154_gridGap$$2$$)), $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $labelSectionWidth_rowCount$$11$$ + $container$$154_gridGap$$2$$))
    }else {
      for($cellArea_ci$$2_maximizedColumn$$6$$ = $maxCellIndex_node$$262$$ = 0;$cellArea_ci$$2_maximizedColumn$$6$$ < $cellIndices$$2_nodeSwatchSize$$.length;$cellArea_ci$$2_maximizedColumn$$6$$++) {
        !(0,window.isNaN)($maximizedCellIndex$$1_nodeCounts$$[$cellIndices$$2_nodeSwatchSize$$[$cellArea_ci$$2_maximizedColumn$$6$$]]) && $maximizedCellIndex$$1_nodeCounts$$[$cellIndices$$2_nodeSwatchSize$$[$cellArea_ci$$2_maximizedColumn$$6$$]] > $maximizedCellIndex$$1_nodeCounts$$[$maxCellIndex_node$$262$$] && ($maxCellIndex_node$$262$$ = $cellIndices$$2_nodeSwatchSize$$[$cellArea_ci$$2_maximizedColumn$$6$$])
      }
      if("ifRequired" != $options$$215$$.labelTruncation) {
        if($cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$36$$, $maxCellIndex_node$$262$$), $cellArea_ci$$2_maximizedColumn$$6$$ = $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$.__childArea, $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$h$ + $container$$154_gridGap$$2$$) / 
        ($nodeHeight$$3_nodeLayout$$3$$ + $container$$154_gridGap$$2$$)), $indicatorIcon$$4_maxColumns$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $options$$215$$.__layout.minimumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$ + $container$$154_gridGap$$2$$)), $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ * 
        $indicatorIcon$$4_maxColumns$$ < $maximizedCellIndex$$1_nodeCounts$$[$maxCellIndex_node$$262$$]) {
          $labelSectionWidth_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$215$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$, ($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / $indicatorIcon$$4_maxColumns$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$154_gridGap$$2$$))), $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$, 
          $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = $indicatorIcon$$4_maxColumns$$
        }else {
          $columnsPerRow_labelVisible_maximumLabelWidth$$ = $indicatorIcon$$4_maxColumns$$;
          for($labelSectionWidth_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$215$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$, ($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / $columnsPerRow_labelVisible_maximumLabelWidth$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$154_gridGap$$2$$)));$labelSectionWidth_rowCount$$11$$ < $options$$215$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + 
          $nodeEndLabelGap_overflow$$4$$;) {
            if(($columnsPerRow_labelVisible_maximumLabelWidth$$ - 1) * $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ >= $maximizedCellIndex$$1_nodeCounts$$[$maxCellIndex_node$$262$$]) {
              $columnsPerRow_labelVisible_maximumLabelWidth$$--, $labelSectionWidth_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$215$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$, ($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / $columnsPerRow_labelVisible_maximumLabelWidth$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$154_gridGap$$2$$)))
            }else {
              break
            }
          }
          $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$;
          $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = $columnsPerRow_labelVisible_maximumLabelWidth$$
        }
      }else {
        for(var $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$36$$, $cellIndices$$2_nodeSwatchSize$$[0]), $cellArea_ci$$2_maximizedColumn$$6$$ = $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$.__childArea, $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$h$ + $container$$154_gridGap$$2$$) / 
        ($nodeHeight$$3_nodeLayout$$3$$ + $container$$154_gridGap$$2$$)), $indicatorIcon$$4_maxColumns$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $options$$215$$.__layout.minimumLabelWidth + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$ + $container$$154_gridGap$$2$$)), $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ = $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$, 
        $startIndex$$19$$ = $icon$$43_widestLabel$$ = $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = 0;$cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ <= $indicatorIcon$$4_maxColumns$$;) {
          $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$++;
          var $maxLabelWidth$$5$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$154_gridGap$$2$$));
          if($icon$$43_widestLabel$$ > $maxLabelWidth$$5$$) {
            $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = window.Math.max($cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ - 1, 1);
            break
          }
          for(var $maxNodes$$ = $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ * $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$, $nodeArray$$ = [], $nodeCount$$8_r$$59$$ = 0;$nodeCount$$8_r$$59$$ < $labelSectionWidth_rowCount$$11$$;$nodeCount$$8_r$$59$$++) {
            for($c$$40_nodeCellIndex$$ = 0;$c$$40_nodeCellIndex$$ < $columnCount$$6_label$$66_secondaryLabel$$;$c$$40_nodeCellIndex$$++) {
              if($cellIndex$$8_n$$20$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$36$$, $c$$40_nodeCellIndex$$) + $columnCount$$6_label$$66_secondaryLabel$$ * D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$36$$, $nodeCount$$8_r$$59$$), ($nodes$$17_simpleLayout$$ = $cellNodes$$[$cellIndex$$8_n$$20$$]) && $nodes$$17_simpleLayout$$.length) {
                var $numNodes$$3$$ = window.Math.min($nodes$$17_simpleLayout$$.length, $maxNodes$$);
                $nodes$$17_simpleLayout$$.length > $maxNodes$$ && $numNodes$$3$$--;
                for($cellIndex$$8_n$$20$$ = $startIndex$$19$$;$cellIndex$$8_n$$20$$ < $numNodes$$3$$;$cellIndex$$8_n$$20$$++) {
                  $nodeArray$$.push($nodes$$17_simpleLayout$$[$cellIndex$$8_n$$20$$])
                }
              }
            }
          }
          $icon$$43_widestLabel$$ = window.Math.max($icon$$43_widestLabel$$, window.Math.ceil(D.$DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($nbox$$36$$, $nodeArray$$) + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$));
          if($icon$$43_widestLabel$$ > $maxLabelWidth$$5$$) {
            $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = window.Math.max($cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ - 1, 1);
            break
          }
          if($maxNodes$$ >= $maximizedCellIndex$$1_nodeCounts$$[$maxCellIndex_node$$262$$]) {
            break
          }
          $startIndex$$19$$ = $maxNodes$$
        }
        $maxLabelWidth$$5$$ = window.Math.floor(($cellArea_ci$$2_maximizedColumn$$6$$.$w$ + $container$$154_gridGap$$2$$) / $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$154_gridGap$$2$$));
        $labelSectionWidth_rowCount$$11$$ = $icon$$43_widestLabel$$ > $maxLabelWidth$$5$$ ? $maxLabelWidth$$5$$ : window.Math.max($icon$$43_widestLabel$$, window.Math.min($maxLabelWidth$$5$$, $columnsPerRow_labelVisible_maximumLabelWidth$$ + $nodeLabelOnlyStartLabelGap_startLabelGap$$ + $nodeEndLabelGap_overflow$$4$$));
        $labelSectionWidth_rowCount$$11$$ < $options$$215$$.__layout.minimumLabelWidth && ($cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ = 0)
      }
    }
    for($cellArea_ci$$2_maximizedColumn$$6$$ = 0;$cellArea_ci$$2_maximizedColumn$$6$$ < $cellIndices$$2_nodeSwatchSize$$.length;$cellArea_ci$$2_maximizedColumn$$6$$++) {
      $cellIndex$$8_n$$20$$ = $cellIndices$$2_nodeSwatchSize$$[$cellArea_ci$$2_maximizedColumn$$6$$], $nodeEndLabelGap_overflow$$4$$ = !1, $maximizedCellIndex$$1_nodeCounts$$[$cellIndex$$8_n$$20$$] > $cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$ * $cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$ && ($nodeEndLabelGap_overflow$$4$$ = !0), $cellLayouts_nodeStartLabelGap$$[$cellIndex$$8_n$$20$$] = {cellRows:$cellRows_i$$733_labelHeight$$8_secondaryLabelHeight$$, 
      cellColumns:$cell$$36_cellColumns_maxRows_maximizedColumnIndex$$1_maximizedRow$$6_maximizedRowIndex$$1$$, overflow:$nodeEndLabelGap_overflow$$4$$}
    }
  }
  $nodeHeight$$3_nodeLayout$$3$$ = {nodeHeight:$nodeHeight$$3_nodeLayout$$3$$, indicatorSectionWidth:$indicatorSectionWidth$$, iconSectionWidth:$iconSectionWidth$$, iconWidth:$iconWidth$$9$$, labelSectionWidth:$labelSectionWidth_rowCount$$11$$, cellLayouts:$cellLayouts_nodeStartLabelGap$$};
  return $options$$215$$.__layout.__nodeLayout = $nodeHeight$$3_nodeLayout$$3$$
};
D.$DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeDrawerLayout$$($nbox$$37_nodeDrawerLayout$$, $childArea$$3_data$$86$$, $columns$$3_nodes$$18$$) {
  var $options$$216$$ = $nbox$$37_nodeDrawerLayout$$.$getOptions$(), $container$$155_gridGap$$3$$ = $options$$216$$.__layout.gridGap, $nodeStartLabelGap$$1_startLabelGap$$1$$ = $options$$216$$.__layout.nodeStartLabelGap, $label$$67_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$ = $options$$216$$.__layout.nodeLabelOnlyStartLabelGap, $nodeEndLabelGap$$1$$ = $options$$216$$.__layout.nodeEndLabelGap, $nodeSwatchSize$$1$$ = $options$$216$$.__layout.nodeSwatchSize, $labelVisible$$1_maximumLabelWidth$$1$$ = 
  $options$$216$$.__layout.maximumLabelWidth, $node$$263$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$37_nodeDrawerLayout$$, 0), $indicatorIcon$$5$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$37_nodeDrawerLayout$$, $node$$263$$), $icon$$44$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$37_nodeDrawerLayout$$, $node$$263$$), $labelSectionWidth$$1_simpleLayout$$1$$ = D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($nbox$$37_nodeDrawerLayout$$), $nodeHeight$$4$$ = $labelSectionWidth$$1_simpleLayout$$1$$.nodeHeight, 
  $indicatorSectionWidth$$1$$ = $labelSectionWidth$$1_simpleLayout$$1$$.indicatorSectionWidth, $iconSectionWidth$$1$$ = $labelSectionWidth$$1_simpleLayout$$1$$.iconSectionWidth, $nodeStartLabelGap$$1_startLabelGap$$1$$ = $indicatorSectionWidth$$1$$ || $iconSectionWidth$$1$$ ? $nodeStartLabelGap$$1_startLabelGap$$1$$ : $label$$67_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$;
  $childArea$$3_data$$86$$ = $childArea$$3_data$$86$$.__childArea;
  $labelSectionWidth$$1_simpleLayout$$1$$ = $labelSectionWidth$$1_simpleLayout$$1$$.labelSectionWidth;
  null == $labelSectionWidth$$1_simpleLayout$$1$$ && ($labelSectionWidth$$1_simpleLayout$$1$$ = "ifRequired" != $options$$216$$.labelTruncation ? $labelVisible$$1_maximumLabelWidth$$1$$ + $nodeStartLabelGap$$1_startLabelGap$$1$$ + $nodeEndLabelGap$$1$$ : window.Math.max($labelVisible$$1_maximumLabelWidth$$1$$, D.$DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$($nbox$$37_nodeDrawerLayout$$, $columns$$3_nodes$$18$$)) + $nodeStartLabelGap$$1_startLabelGap$$1$$ + $nodeEndLabelGap$$1$$, $labelSectionWidth$$1_simpleLayout$$1$$ = 
  window.Math.min($labelSectionWidth$$1_simpleLayout$$1$$, $childArea$$3_data$$86$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$));
  $columns$$3_nodes$$18$$ = window.Math.floor(($childArea$$3_data$$86$$.$w$ + $container$$155_gridGap$$3$$) / ($indicatorSectionWidth$$1$$ + $iconSectionWidth$$1$$ + $labelSectionWidth$$1_simpleLayout$$1$$ + $container$$155_gridGap$$3$$));
  if($node$$263$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $container$$155_gridGap$$3$$ = new D.$DvtContainer$$, $labelVisible$$1_maximumLabelWidth$$1$$ = !1, $label$$67_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$ = D.$DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$37_nodeDrawerLayout$$, $node$$263$$), $labelHeight$$9_secondaryLabelHeight$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$67_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$).$h$;
    D.$DvtTextUtils$$.$fitText$($label$$67_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$, $labelSectionWidth$$1_simpleLayout$$1$$ - $nodeStartLabelGap$$1_startLabelGap$$1$$ - $nodeEndLabelGap$$1$$, $labelHeight$$9_secondaryLabelHeight$$1$$, $container$$155_gridGap$$3$$) && ($labelVisible$$1_maximumLabelWidth$$1$$ = !0);
    $node$$263$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && ($label$$67_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$ = D.$DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$37_nodeDrawerLayout$$, $node$$263$$), $labelHeight$$9_secondaryLabelHeight$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$67_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$).$h$, D.$DvtTextUtils$$.$fitText$($label$$67_nodeLabelOnlyStartLabelGap$$1_secondaryLabel$$1$$, $labelSectionWidth$$1_simpleLayout$$1$$ - $nodeStartLabelGap$$1_startLabelGap$$1$$ - 
    $nodeEndLabelGap$$1$$, $labelHeight$$9_secondaryLabelHeight$$1$$, $container$$155_gridGap$$3$$) && ($labelVisible$$1_maximumLabelWidth$$1$$ = !0));
    if(!$labelVisible$$1_maximumLabelWidth$$1$$ && ($labelSectionWidth$$1_simpleLayout$$1$$ = 0, $node$$263$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$5$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$37_nodeDrawerLayout$$, $node$$263$$)) && (!$icon$$44$$ || $icon$$44$$[D.$DvtNBoxConstants$$.$SOURCE$]))) {
      $labelSectionWidth$$1_simpleLayout$$1$$ = window.Math.max(0, window.Math.min($nodeSwatchSize$$1$$, $childArea$$3_data$$86$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$))
    }
  }
  if(0 > $childArea$$3_data$$86$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$) {
    var $iconWidth$$10$$ = $iconSectionWidth$$1$$, $iconSectionWidth$$1$$ = window.Math.max(0, $childArea$$3_data$$86$$.$w$ - $indicatorSectionWidth$$1$$)
  }
  0 > $childArea$$3_data$$86$$.$w$ - $indicatorSectionWidth$$1$$ && ($indicatorSectionWidth$$1$$ = $childArea$$3_data$$86$$.$w$);
  $nbox$$37_nodeDrawerLayout$$ = {nodeHeight:$nodeHeight$$4$$, indicatorSectionWidth:$indicatorSectionWidth$$1$$, iconSectionWidth:$iconSectionWidth$$1$$, iconWidth:$iconWidth$$10$$, labelSectionWidth:$labelSectionWidth$$1_simpleLayout$$1$$, drawerLayout:{rows:-1, columns:$columns$$3_nodes$$18$$}};
  return $options$$216$$.__layout.__nodeDrawerLayout = $nbox$$37_nodeDrawerLayout$$
};
D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$_calculateSimpleNodeLayout$$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$) {
  var $nodeHeight$$5_options$$217$$ = $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$.$getOptions$(), $label$$68_labelHeight$$10_nodeIndicatorGap$$ = $nodeHeight$$5_options$$217$$.__layout.nodeIndicatorGap, $nodeSingleLabelGap$$ = $nodeHeight$$5_options$$217$$.__layout.nodeSingleLabelGap, $nodeDualLabelGap_padding$$27$$ = $nodeHeight$$5_options$$217$$.__layout.nodeDualLabelGap, $iconHeight$$9_nodeInterLabelGap$$ = $nodeHeight$$5_options$$217$$.__layout.nodeInterLabelGap, $nodeSwatchSize$$2$$ = 
  $nodeHeight$$5_options$$217$$.__layout.nodeSwatchSize, $node$$264$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, 0), $indicatorSectionWidth$$2$$ = $nodeHeight$$5_options$$217$$ = 0, $iconSectionWidth$$2_preferredSize$$4$$ = 0, $labelSectionWidth$$2$$ = null, $indicatorIcon$$6$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$264$$), $indicatorColor$$2_indicatorIconHeight$$1$$ = D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, 
  $node$$264$$), $icon$$45$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$264$$);
  $indicatorIcon$$6$$ ? ($indicatorColor$$2_indicatorIconHeight$$1$$ = $indicatorIcon$$6$$[D.$DvtNBoxConstants$$.$HEIGHT$], $indicatorSectionWidth$$2$$ = $indicatorIcon$$6$$[D.$DvtNBoxConstants$$.$WIDTH$] + 2 * $label$$68_labelHeight$$10_nodeIndicatorGap$$, $nodeHeight$$5_options$$217$$ = window.Math.max($nodeHeight$$5_options$$217$$, $indicatorColor$$2_indicatorIconHeight$$1$$ + 2 * $label$$68_labelHeight$$10_nodeIndicatorGap$$)) : $indicatorColor$$2_indicatorIconHeight$$1$$ && ($indicatorSectionWidth$$2$$ = 
  $nodeSwatchSize$$2$$);
  if($node$$264$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    $label$$68_labelHeight$$10_nodeIndicatorGap$$ = D.$DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$264$$), $label$$68_labelHeight$$10_nodeIndicatorGap$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$68_labelHeight$$10_nodeIndicatorGap$$).$h$, $nodeHeight$$5_options$$217$$ = window.Math.max($nodeHeight$$5_options$$217$$, $label$$68_labelHeight$$10_nodeIndicatorGap$$ + 2 * $nodeSingleLabelGap$$), $node$$264$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && 
    ($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ = D.$DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$264$$), $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ = D.$DvtTextUtils$$.$guessTextDimensions$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$).$h$, $nodeHeight$$5_options$$217$$ = window.Math.max($nodeHeight$$5_options$$217$$, $label$$68_labelHeight$$10_nodeIndicatorGap$$ + $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ + 
    2 * $nodeDualLabelGap_padding$$27$$ + $iconHeight$$9_nodeInterLabelGap$$))
  }else {
    if($labelSectionWidth$$2$$ = 0, $node$$264$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$6$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$264$$)) && (!$icon$$45$$ || $icon$$45$$[D.$DvtNBoxConstants$$.$SOURCE$])) {
      $labelSectionWidth$$2$$ = $indicatorSectionWidth$$2$$ ? $indicatorSectionWidth$$2$$ : $nodeSwatchSize$$2$$
    }
  }
  $icon$$45$$ && ($iconSectionWidth$$2_preferredSize$$4$$ = window.Math.max($nodeHeight$$5_options$$217$$, (0,D.$DvtAgent$isTouchDevice$$)() ? $icon$$45$$.preferredSizeTouch : $icon$$45$$.preferredSize), $nodeDualLabelGap_padding$$27$$ = ($icon$$45$$[D.$DvtNBoxConstants$$.$SOURCE$] ? $icon$$45$$.sourcePaddingRatio : $icon$$45$$.shapePaddingRatio) * $iconSectionWidth$$2_preferredSize$$4$$, $iconHeight$$9_nodeInterLabelGap$$ = $icon$$45$$[D.$DvtNBoxConstants$$.$HEIGHT$] ? $icon$$45$$[D.$DvtNBoxConstants$$.$HEIGHT$] : 
  $iconSectionWidth$$2_preferredSize$$4$$ - 2 * $nodeDualLabelGap_padding$$27$$, $iconSectionWidth$$2_preferredSize$$4$$ = ($icon$$45$$[D.$DvtNBoxConstants$$.$WIDTH$] ? $icon$$45$$[D.$DvtNBoxConstants$$.$WIDTH$] : $iconSectionWidth$$2_preferredSize$$4$$ - 2 * $nodeDualLabelGap_padding$$27$$) + 2 * $nodeDualLabelGap_padding$$27$$, $nodeHeight$$5_options$$217$$ = window.Math.max($nodeHeight$$5_options$$217$$, $iconHeight$$9_nodeInterLabelGap$$ + 2 * $nodeDualLabelGap_padding$$27$$));
  return{nodeHeight:$nodeHeight$$5_options$$217$$, indicatorSectionWidth:$indicatorSectionWidth$$2$$, iconSectionWidth:$iconSectionWidth$$2_preferredSize$$4$$, labelSectionWidth:$labelSectionWidth$$2$$}
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeBackground$$($nbox$$39$$, $node$$265$$, $nodeContainer$$6$$, $borderRadius$$8_color$$69_nodeLayout$$4$$) {
  var $nodeRect$$1_width$$118$$ = $borderRadius$$8_color$$69_nodeLayout$$4$$.indicatorSectionWidth + $borderRadius$$8_color$$69_nodeLayout$$4$$.iconSectionWidth + $borderRadius$$8_color$$69_nodeLayout$$4$$.labelSectionWidth, $height$$109$$ = $borderRadius$$8_color$$69_nodeLayout$$4$$.nodeHeight;
  $borderRadius$$8_color$$69_nodeLayout$$4$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($nbox$$39$$);
  var $hoverColor$$6$$ = D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$($nbox$$39$$), $selectionColor$$2$$ = D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$($nbox$$39$$), $selectionRect$$1$$ = new D.$DvtRect$$($nbox$$39$$.$getCtx$(), 0, 0, $nodeRect$$1_width$$118$$, $height$$109$$);
  $selectionRect$$1$$.$setFill$(null);
  $borderRadius$$8_color$$69_nodeLayout$$4$$ && ($selectionRect$$1$$.$setRx$($borderRadius$$8_color$$69_nodeLayout$$4$$), $selectionRect$$1$$.$setRy$($borderRadius$$8_color$$69_nodeLayout$$4$$));
  $selectionRect$$1$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$6$$, null, 2), new D.$DvtSolidStroke$$($selectionColor$$2$$, null, 4));
  $selectionRect$$1$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectionColor$$2$$, null, 4), null);
  $selectionRect$$1$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$6$$, null, 2), new D.$DvtSolidStroke$$($selectionColor$$2$$, null, 6));
  $nodeContainer$$6$$.$addChild$($selectionRect$$1$$);
  $nodeContainer$$6$$.$setSelectionShape$($selectionRect$$1$$);
  $nodeRect$$1_width$$118$$ = new D.$DvtRect$$($nbox$$39$$.$getCtx$(), 0, 0, $nodeRect$$1_width$$118$$, $height$$109$$);
  $borderRadius$$8_color$$69_nodeLayout$$4$$ && ($nodeRect$$1_width$$118$$.$setRx$($borderRadius$$8_color$$69_nodeLayout$$4$$), $nodeRect$$1_width$$118$$.$setRy$($borderRadius$$8_color$$69_nodeLayout$$4$$));
  $borderRadius$$8_color$$69_nodeLayout$$4$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$39$$, $node$$265$$);
  $nodeRect$$1_width$$118$$.$setSolidFill$($borderRadius$$8_color$$69_nodeLayout$$4$$);
  D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$($nbox$$39$$, $node$$265$$) && D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$($nbox$$39$$, $node$$265$$) && $nodeRect$$1_width$$118$$.$setSolidStroke$(D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$($nbox$$39$$, $node$$265$$), null, D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$($nbox$$39$$, $node$$265$$));
  $nodeContainer$$6$$.$addChild$($nodeRect$$1_width$$118$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$39$$, $node$$265$$, $nodeRect$$1_width$$118$$, "background")
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIndicator$$($nbox$$40$$, $node$$266$$, $nodeContainer$$7$$, $nodeLayout$$5$$) {
  var $color$$70$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$40$$, $node$$266$$), $contrastColor$$3_indicatorIconColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$70$$), $indicatorMarker$$2_indicatorX$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$40$$.$getCtx$()) ? $nodeLayout$$5$$.labelSectionWidth + $nodeLayout$$5$$.iconSectionWidth : 0, $indicatorColor$$3_indicatorIcon$$7$$ = D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$40$$, $node$$266$$);
  if($indicatorColor$$3_indicatorIcon$$7$$) {
    var $contrastColor$$3_indicatorIconColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($indicatorColor$$3_indicatorIcon$$7$$), $bgRect$$4$$ = new D.$DvtRect$$($nbox$$40$$.$getCtx$(), $indicatorMarker$$2_indicatorX$$2$$, 0, $nodeLayout$$5$$.indicatorSectionWidth, $nodeLayout$$5$$.nodeHeight);
    $bgRect$$4$$.$setSolidFill$($indicatorColor$$3_indicatorIcon$$7$$);
    D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$40$$, $bgRect$$4$$, $nodeLayout$$5$$);
    $nodeContainer$$7$$.$addChild$($bgRect$$4$$);
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$40$$, $node$$266$$, $bgRect$$4$$, D.$DvtNBoxConstants$$.$INDICATOR$)
  }
  if($indicatorColor$$3_indicatorIcon$$7$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$40$$, $node$$266$$)) {
    $contrastColor$$3_indicatorIconColor$$2$$ = $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$COLOR$] ? $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$COLOR$] : $contrastColor$$3_indicatorIconColor$$2$$, $indicatorMarker$$2_indicatorX$$2$$ = $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SOURCE$] ? new D.$DvtImageMarker$$($nbox$$40$$.$getCtx$(), $indicatorMarker$$2_indicatorX$$2$$ + $nodeLayout$$5$$.indicatorSectionWidth / 2, $nodeLayout$$5$$.nodeHeight / 
    2, $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$], $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$HEIGHT$], $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SOURCE$]) : new D.$DvtSimpleMarker$$($nbox$$40$$.$getCtx$(), $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $indicatorMarker$$2_indicatorX$$2$$ + $nodeLayout$$5$$.indicatorSectionWidth / 2, $nodeLayout$$5$$.nodeHeight / 2, $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$], 
    $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$HEIGHT$]), "none" != $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $indicatorMarker$$2_indicatorX$$2$$.$setFill$(new D.$DvtPatternFill$$($indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$PATTERN$], $contrastColor$$3_indicatorIconColor$$2$$, $color$$70$$)) : $indicatorMarker$$2_indicatorX$$2$$.$setSolidFill$($contrastColor$$3_indicatorIconColor$$2$$), $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$] > 
    $nodeLayout$$5$$.indicatorSectionWidth && D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$40$$, $indicatorMarker$$2_indicatorX$$2$$, $nodeLayout$$5$$), $nodeContainer$$7$$.$addChild$($indicatorMarker$$2_indicatorX$$2$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$40$$, $node$$266$$, $indicatorMarker$$2_indicatorX$$2$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$)
  }
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeIcon$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIcon$$($nbox$$41$$, $node$$267$$, $nodeContainer$$8$$, $nodeLayout$$6$$) {
  var $color$$71$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$41$$, $node$$267$$), $contrastColor$$4_iconColor$$1$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$71$$), $iconX$$2_rtl$$28$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$41$$.$getCtx$()), $icon$$46$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$41$$, $node$$267$$);
  if($icon$$46$$) {
    var $iconHeight$$10_padding$$28$$ = ($icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$] ? $icon$$46$$.sourcePaddingRatio : $icon$$46$$.shapePaddingRatio) * $nodeLayout$$6$$.nodeHeight, $iconMarker$$1_iconWidth$$12$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$WIDTH$] ? $icon$$46$$[D.$DvtNBoxConstants$$.$WIDTH$] : $nodeLayout$$6$$.iconWidth ? $nodeLayout$$6$$.iconWidth : $nodeLayout$$6$$.iconSectionWidth - 2 * $iconHeight$$10_padding$$28$$, $iconHeight$$10_padding$$28$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$HEIGHT$] ? 
    $icon$$46$$[D.$DvtNBoxConstants$$.$HEIGHT$] : $nodeLayout$$6$$.nodeHeight - 2 * $iconHeight$$10_padding$$28$$, $iconX$$2_rtl$$28$$ = $nodeLayout$$6$$[$iconX$$2_rtl$$28$$ ? "labelSectionWidth" : "indicatorSectionWidth"] + window.Math.max($nodeLayout$$6$$.iconSectionWidth / 2, $nodeLayout$$6$$.iconWidth ? $nodeLayout$$6$$.iconWidth / 2 : 0), $iconY$$2$$ = $nodeLayout$$6$$.nodeHeight / 2, $contrastColor$$4_iconColor$$1$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$COLOR$] ? $icon$$46$$[D.$DvtNBoxConstants$$.$COLOR$] : 
    $contrastColor$$4_iconColor$$1$$, $iconMarker$$1_iconWidth$$12$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$] ? new D.$DvtImageMarker$$($nbox$$41$$.$getCtx$(), $iconX$$2_rtl$$28$$, $iconY$$2$$, $iconMarker$$1_iconWidth$$12$$, $iconHeight$$10_padding$$28$$, $icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$]) : new D.$DvtSimpleMarker$$($nbox$$41$$.$getCtx$(), $icon$$46$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $iconX$$2_rtl$$28$$, $iconY$$2$$, $iconMarker$$1_iconWidth$$12$$, $iconHeight$$10_padding$$28$$);
    "none" != $icon$$46$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $iconMarker$$1_iconWidth$$12$$.$setFill$(new D.$DvtPatternFill$$($icon$$46$$[D.$DvtNBoxConstants$$.$PATTERN$], $contrastColor$$4_iconColor$$1$$, $color$$71$$)) : $iconMarker$$1_iconWidth$$12$$.$setSolidFill$($contrastColor$$4_iconColor$$1$$);
    (0 == $nodeLayout$$6$$.indicatorSectionWidth || 0 == $nodeLayout$$6$$.labelSectionWidth) && D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$41$$, $iconMarker$$1_iconWidth$$12$$, $nodeLayout$$6$$);
    $nodeContainer$$8$$.$addChild$($iconMarker$$1_iconWidth$$12$$)
  }
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$41$$, $node$$267$$, $iconMarker$$1_iconWidth$$12$$, D.$DvtNBoxConstants$$.$ICON$)
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeLabels$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeLabels$$($nbox$$42$$, $node$$268$$, $nodeContainer$$9_yOffset$$6$$, $nodeLayout$$7$$) {
  var $nodeEndLabelGap$$2_options$$218$$ = $nbox$$42$$.$getOptions$(), $nodeInterLabelGap$$1$$ = $nodeEndLabelGap$$2_options$$218$$.__layout.nodeInterLabelGap, $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ = $nodeEndLabelGap$$2_options$$218$$.__layout.nodeLabelOnlyStartLabelGap, $color$$72_contrastColor$$5_nodeStartLabelGap$$2$$ = $nodeEndLabelGap$$2_options$$218$$.__layout.nodeStartLabelGap, $nodeEndLabelGap$$2_options$$218$$ = $nodeEndLabelGap$$2_options$$218$$.__layout.nodeEndLabelGap, $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ = 
  $nodeLayout$$7$$.indicatorSectionWidth || $nodeLayout$$7$$.iconSectionWidth ? $color$$72_contrastColor$$5_nodeStartLabelGap$$2$$ : $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$, $color$$72_contrastColor$$5_nodeStartLabelGap$$2$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$42$$, $node$$268$$), $color$$72_contrastColor$$5_nodeStartLabelGap$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$72_contrastColor$$5_nodeStartLabelGap$$2$$), $labelX$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$42$$.$getCtx$()) ? 
  $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ : $nodeLayout$$7$$.indicatorSectionWidth + $nodeLayout$$7$$.iconSectionWidth + $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$;
  if($node$$268$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $label$$69$$ = D.$DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$42$$, $node$$268$$), $labelHeight$$11$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$69$$).$h$;
    D.$DvtTextUtils$$.$fitText$($label$$69$$, $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ - $nodeEndLabelGap$$2_options$$218$$, $labelHeight$$11$$, $nodeContainer$$9_yOffset$$6$$) && (D.$DvtNBoxRenderer$$.$positionText$($label$$69$$, $labelX$$4$$, $nodeLayout$$7$$.nodeHeight / 2), $label$$69$$.$getCSSStyle$() && $label$$69$$.$getCSSStyle$().$getStyle$("color") ? $label$$69$$.$setSolidFill$($label$$69$$.$getCSSStyle$().$getStyle$("color")) : $label$$69$$.$setSolidFill$($color$$72_contrastColor$$5_nodeStartLabelGap$$2$$), 
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$42$$, $node$$268$$, $label$$69$$, D.$DvtNBoxConstants$$.$LABEL$));
    if($node$$268$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$]) {
      var $secondaryLabel$$3$$ = D.$DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$42$$, $node$$268$$), $secondaryLabelHeight$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$($secondaryLabel$$3$$).$h$;
      D.$DvtTextUtils$$.$fitText$($secondaryLabel$$3$$, $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ - $nodeEndLabelGap$$2_options$$218$$, $secondaryLabelHeight$$3$$, $nodeContainer$$9_yOffset$$6$$) && ($nodeContainer$$9_yOffset$$6$$ = ($nodeLayout$$7$$.nodeHeight - $labelHeight$$11$$ - $secondaryLabelHeight$$3$$ - $nodeInterLabelGap$$1$$) / 2, D.$DvtNBoxRenderer$$.$positionText$($label$$69$$, $labelX$$4$$, $nodeContainer$$9_yOffset$$6$$ + $labelHeight$$11$$ / 
      2), D.$DvtNBoxRenderer$$.$positionText$($secondaryLabel$$3$$, $labelX$$4$$, $nodeContainer$$9_yOffset$$6$$ + $labelHeight$$11$$ + $nodeInterLabelGap$$1$$ + $secondaryLabelHeight$$3$$ / 2), $secondaryLabel$$3$$.$getCSSStyle$() && $secondaryLabel$$3$$.$getCSSStyle$().$getStyle$("color") ? $secondaryLabel$$3$$.$setSolidFill$($secondaryLabel$$3$$.$getCSSStyle$().$getStyle$("color")) : $secondaryLabel$$3$$.$setSolidFill$($color$$72_contrastColor$$5_nodeStartLabelGap$$2$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$42$$, 
      $node$$268$$, $secondaryLabel$$3$$, D.$DvtNBoxConstants$$.$SECONDARY_LABEL$))
    }
  }
};
D.$DvtNBoxNodeRenderer$$.$_getMaxLabelWidth$ = function $$DvtNBoxNodeRenderer$$$$_getMaxLabelWidth$$($nbox$$43$$, $nodes$$19$$) {
  for(var $container$$156$$ = new D.$DvtContainer$$, $n$$21_width$$119$$ = 0;$n$$21_width$$119$$ < $nodes$$19$$.length;$n$$21_width$$119$$++) {
    var $node$$269$$ = $nodes$$19$$[$n$$21_width$$119$$];
    $container$$156$$.$addChild$(D.$DvtNBoxDataUtils$$.$getNodeLabel$($nbox$$43$$, $node$$269$$));
    $container$$156$$.$addChild$(D.$DvtNBoxDataUtils$$.$getNodeSecondaryLabel$($nbox$$43$$, $node$$269$$))
  }
  $nbox$$43$$.$addChild$($container$$156$$);
  for($n$$21_width$$119$$ = $container$$156$$.$getDimensions$().$w$;0 < $container$$156$$.$getNumChildren$();) {
    $container$$156$$.removeChild($container$$156$$.$getChildAt$(0))
  }
  $nbox$$43$$.removeChild($container$$156$$);
  return $n$$21_width$$119$$
};
D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$ = function $$DvtNBoxNodeRenderer$$$$_clipIfNecessary$$($borderRadius$$9_nbox$$44$$, $displayable$$75$$, $nodeHeight$$6_nodeLayout$$8$$) {
  if($borderRadius$$9_nbox$$44$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($borderRadius$$9_nbox$$44$$)) {
    var $nodeWidth$$3$$ = $nodeHeight$$6_nodeLayout$$8$$.indicatorSectionWidth + $nodeHeight$$6_nodeLayout$$8$$.iconSectionWidth + $nodeHeight$$6_nodeLayout$$8$$.labelSectionWidth;
    $nodeHeight$$6_nodeLayout$$8$$ = $nodeHeight$$6_nodeLayout$$8$$.nodeHeight;
    var $clipPath$$9$$ = new D.$DvtClipPath$$;
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$9$$, 0, 0, $nodeWidth$$3$$, $nodeHeight$$6_nodeLayout$$8$$, $borderRadius$$9_nbox$$44$$, $borderRadius$$9_nbox$$44$$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($displayable$$75$$, $clipPath$$9$$)
  }
};
D.$DvtNBoxNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxNodeRenderer$$$$animateUpdate$$($animationHandler$$30$$, $oldNode$$14$$, $newNode$$11$$) {
  var $oldNBox$$10$$ = $animationHandler$$30$$.$_oldNBox$, $newNBox$$10$$ = $animationHandler$$30$$.$_newNBox$, $clipPath$$10_oldGlobalMatrix$$1$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$14$$), $movePlayable_newGlobalMatrix$$1_playable$$45$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$11$$), $newMatrix$$3$$ = $newNode$$11$$.$getMatrix$(), $parent$$79$$ = $newNode$$11$$.getParent();
  $oldNode$$14$$.$setAlpha$(0);
  $animationHandler$$30$$.$_newNBox$.$addChild$($newNode$$11$$);
  $newNode$$11$$.$setMatrix$($clipPath$$10_oldGlobalMatrix$$1$$);
  var $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($oldNBox$$10$$, $oldNode$$14$$), $newRect_newScrollContainer_newScrollRect$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($newNBox$$10$$, $newNode$$11$$);
  if($newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ || $newRect_newScrollContainer_newScrollRect$$) {
    var $clipPath$$10_oldGlobalMatrix$$1$$ = new D.$DvtClipPath$$, $oldScrollMatrix_oldScrollRect_rect$$35$$;
    if($newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$) {
      $oldScrollMatrix_oldScrollRect_rect$$35$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$);
      $oldScrollMatrix_oldScrollRect_rect$$35$$ = new D.$DvtRectangle$$($oldScrollMatrix_oldScrollRect_rect$$35$$.$_tx$, $oldScrollMatrix_oldScrollRect_rect$$35$$.$_ty$, $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getWidth(), $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getHeight());
      var $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($oldNBox$$10$$, $oldNode$$14$$.getData()), $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getCell$($oldNBox$$10$$, $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), 
      $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($oldNBox$$10$$, $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$, "background"), $newCellMatrix_oldCellMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), 
      $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = new D.$DvtRectangle$$($newCellMatrix_oldCellMatrix$$.$_tx$, $newCellMatrix_oldCellMatrix$$.$_ty$, $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getWidth(), $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getHeight());
      $oldScrollMatrix_oldScrollRect_rect$$35$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($oldScrollMatrix_oldScrollRect_rect$$35$$, $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$)
    }
    $newRect_newScrollContainer_newScrollRect$$ && ($newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newRect_newScrollContainer_newScrollRect$$), $newRect_newScrollContainer_newScrollRect$$ = new D.$DvtRectangle$$($newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.$_tx$, 
    $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.$_ty$, $newRect_newScrollContainer_newScrollRect$$.getWidth(), $newRect_newScrollContainer_newScrollRect$$.getHeight()), $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($newNBox$$10$$, $newNode$$11$$.getData()), 
    $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getCell$($newNBox$$10$$, $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = 
    D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$10$$, $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$, "background"), $newCellMatrix_oldCellMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$ = 
    new D.$DvtRectangle$$($newCellMatrix_oldCellMatrix$$.$_tx$, $newCellMatrix_oldCellMatrix$$.$_ty$, $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getWidth(), $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$.getHeight()), $newRect_newScrollContainer_newScrollRect$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($newRect_newScrollContainer_newScrollRect$$, 
    $newCell$$3_newCellBackground_newCellIndex$$4_newCellRect_newScrollMatrix_oldCell$$4_oldCellBackground_oldCellIndex_oldCellRect_oldScrollContainer$$), $oldScrollMatrix_oldScrollRect_rect$$35$$ = $oldScrollMatrix_oldScrollRect_rect$$35$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($oldScrollMatrix_oldScrollRect_rect$$35$$, $newRect_newScrollContainer_newScrollRect$$) : $newRect_newScrollContainer_newScrollRect$$);
    $oldScrollMatrix_oldScrollRect_rect$$35$$ && ((0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$10_oldGlobalMatrix$$1$$, $oldScrollMatrix_oldScrollRect_rect$$35$$.x, $oldScrollMatrix_oldScrollRect_rect$$35$$.y, $oldScrollMatrix_oldScrollRect_rect$$35$$.$w$, $oldScrollMatrix_oldScrollRect_rect$$35$$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($newNode$$11$$, $clipPath$$10_oldGlobalMatrix$$1$$))
  }
  $movePlayable_newGlobalMatrix$$1_playable$$45$$ = new D.$DvtAnimMoveTo$$($newNode$$11$$.$getCtx$(), $newNode$$11$$, new D.$DvtPoint$$($movePlayable_newGlobalMatrix$$1_playable$$45$$.$_tx$, $movePlayable_newGlobalMatrix$$1_playable$$45$$.$_ty$), $animationHandler$$30$$.$getAnimationDuration$());
  (0,D.$DvtPlayable$appendOnEnd$$)($movePlayable_newGlobalMatrix$$1_playable$$45$$, function() {
    $parent$$79$$.$addChild$($newNode$$11$$);
    $newNode$$11$$.$setMatrix$($newMatrix$$3$$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($newNode$$11$$, null)
  });
  $animationHandler$$30$$.add($movePlayable_newGlobalMatrix$$1_playable$$45$$, 1);
  $movePlayable_newGlobalMatrix$$1_playable$$45$$ = new D.$DvtCustomAnimation$$($newNBox$$10$$.$getCtx$(), $newNode$$11$$, $animationHandler$$30$$.$getAnimationDuration$());
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, "background");
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$LABEL$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$SECONDARY_LABEL$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$INDICATOR$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$ICON$);
  $animationHandler$$30$$.add($movePlayable_newGlobalMatrix$$1_playable$$45$$, 1)
};
D.$DvtNBoxNodeRenderer$$.$_animateFill$ = function $$DvtNBoxNodeRenderer$$$$_animateFill$$($playable$$46$$, $oldDisplayable$$1_oldNBox$$11$$, $newDisplayable$$1_newNBox$$11$$, $oldNode$$15$$, $newNode$$12$$, $displayableKey$$) {
  $oldDisplayable$$1_oldNBox$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($oldDisplayable$$1_oldNBox$$11$$, $oldNode$$15$$.getData(), $displayableKey$$);
  $newDisplayable$$1_newNBox$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newDisplayable$$1_newNBox$$11$$, $newNode$$12$$.getData(), $displayableKey$$);
  $oldDisplayable$$1_oldNBox$$11$$ && $newDisplayable$$1_newNBox$$11$$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$46$$.$_animator$, "typeFill", $newDisplayable$$1_newNBox$$11$$, $newDisplayable$$1_newNBox$$11$$.$getFill$, $newDisplayable$$1_newNBox$$11$$.$setFill$, $newDisplayable$$1_newNBox$$11$$.$getFill$()), $newDisplayable$$1_newNBox$$11$$.$setFill$($oldDisplayable$$1_oldNBox$$11$$.$getFill$()))
};
D.$DvtNBoxNodeRenderer$$.$animateDelete$ = function $$DvtNBoxNodeRenderer$$$$animateDelete$$($animationHandler$$31$$, $oldNode$$16$$) {
  var $animationPhase$$4_oldDims$$2$$ = 0, $cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$ = $animationHandler$$31$$.$_oldNBox$, $newNBox$$12$$ = $animationHandler$$31$$.$_newNBox$, $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = $cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$.$getOptions$().__layout.__nodeLayout;
  if($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$) {
    var $cellDimensions_groups$$9_newCell$$4_oldData$$1$$ = $oldNode$$16$$.getData(), $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNodeIndex$($newNBox$$12$$, $cellDimensions_groups$$9_newCell$$4_oldData$$1$$[D.$DvtNBoxConstants$$.ID]);
    if(!(0,window.isNaN)($centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$) && ($centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNode$($newNBox$$12$$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($newNBox$$12$$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$))) {
      if($animationPhase$$4_oldDims$$2$$ = 1, D.$DvtNBoxDataUtils$$.$getGrouping$($newNBox$$12$$)) {
        if($cellDimensions_groups$$9_newCell$$4_oldData$$1$$ = $newNBox$$12$$.$getOptions$().__groups, D.$DvtNBoxDataUtils$$.$getGroupBehavior$($newNBox$$12$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cellDimensions_groups$$9_newCell$$4_oldData$$1$$ = $cellDimensions_groups$$9_newCell$$4_oldData$$1$$[D.$DvtNBoxDataUtils$$.$getCellIndex$($newNBox$$12$$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$)]), $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$ = 
        $cellDimensions_groups$$9_newCell$$4_oldData$$1$$[D.$DvtNBoxDataUtils$$.$getNodeGroupId$($centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$)]) {
          if($centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$12$$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$)) {
            $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$), $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = new D.$DvtPoint$$(($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.indicatorSectionWidth + $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.iconSectionWidth + 
            $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.labelSectionWidth) / 2, $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.nodeHeight / 2), $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$.$_tx$ - $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.x, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$.$_ty$ - 
            $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.y), $animationHandler$$31$$.$getAnimationDuration$()), $animationPhase$$4_oldDims$$2$$)
          }
        }
      }else {
        if($cellDimensions_groups$$9_newCell$$4_oldData$$1$$[D.$DvtNBoxConstants$$.$ROW$] != $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$ROW$] || $cellDimensions_groups$$9_newCell$$4_oldData$$1$$[D.$DvtNBoxConstants$$.$COLUMN$] != $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$COLUMN$]) {
          $cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$16$$);
          $animationPhase$$4_oldDims$$2$$ = $oldNode$$16$$.$getDimensions$();
          $animationHandler$$31$$.$_newNBox$.$addChild$($oldNode$$16$$);
          $oldNode$$16$$.$setMatrix$($cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$);
          $cellDimensions_groups$$9_newCell$$4_oldData$$1$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$($newNBox$$12$$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$ROW$], $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$COLUMN$]);
          ($cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$12$$, $cellDimensions_groups$$9_newCell$$4_oldData$$1$$.getData(), "overflow")) ? ($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$), $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$_tx$, 
          $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$_ty$), $animationHandler$$31$$.$getAnimationDuration$()), 1)) : ($cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($cellDimensions_groups$$9_newCell$$4_oldData$$1$$), $cellDimensions_groups$$9_newCell$$4_oldData$$1$$ = $cellDimensions_groups$$9_newCell$$4_oldData$$1$$.$getDimensions$(), $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = new D.$DvtPoint$$(($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.indicatorSectionWidth + 
          $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.iconSectionWidth + $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.labelSectionWidth) / 2, $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.nodeHeight / 2), $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$.$_tx$ + $cellDimensions_groups$$9_newCell$$4_oldData$$1$$.$w$ / 
          2 - $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.x, $cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$.$_ty$ + $cellDimensions_groups$$9_newCell$$4_oldData$$1$$.$h$ / 2 - $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.y), $animationHandler$$31$$.$getAnimationDuration$()), 1));
          $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = new D.$DvtCustomAnimation$$($newNBox$$12$$.$getCtx$(), $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$, $animationHandler$$31$$.$getAnimationDuration$());
          (0,D.$JSCompiler_StaticMethods_addProp$$)($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$_animator$, "typeNumber", $oldNode$$16$$, $oldNode$$16$$.$getScaleX$, $oldNode$$16$$.$setScaleX$, 0.01);
          (0,D.$JSCompiler_StaticMethods_addProp$$)($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$.$_animator$, "typeNumber", $oldNode$$16$$, $oldNode$$16$$.$getScaleY$, $oldNode$$16$$.$setScaleY$, 0.01);
          (0,D.$DvtPlayable$appendOnEnd$$)($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$, function() {
            $newNBox$$12$$.$_deleteContainer$.$addChild$($oldNode$$16$$)
          });
          $animationHandler$$31$$.add($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$, 2);
          $animationHandler$$31$$.add(new D.$DvtAnimMoveBy$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($animationPhase$$4_oldDims$$2$$.$w$ / 2, $animationPhase$$4_oldDims$$2$$.$h$ / 2), $animationHandler$$31$$.$getAnimationDuration$()), 2);
          $animationHandler$$31$$.add(new D.$DvtAnimFadeOut$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, $animationHandler$$31$$.$getAnimationDuration$()), 2);
          return
        }
      }
    }
    $oldNode$$16$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$16$$));
    if($centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$, $oldNode$$16$$)) {
      $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$ = new D.$DvtClipPath$$, $cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$), $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$ = new D.$DvtRectangle$$($cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$.$_tx$, 
      $cellMatrix_oldGlobalMatrix$$2_oldNBox$$12_overflow$$5_scrollMatrix$$.$_ty$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$.$_width$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$.$_height$), (0,D.$JSCompiler_StaticMethods_addRect$$)($centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$.x, 
      $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$.y, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$.$w$, $centerMatrix$$2_group$$32_groupNode$$14_newNode$$13_newNodeIndex_rect$$36_scrollContainer$$2$$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($oldNode$$16$$, $centerOffset_clipPath$$11_nodeLayout$$9_overflowMatrix_scaleAnim$$)
    }
    $animationHandler$$31$$.add(new D.$DvtAnimFadeOut$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, $animationHandler$$31$$.$getAnimationDuration$()), $animationPhase$$4_oldDims$$2$$);
    $newNBox$$12$$.$_deleteContainer$.$addChild$($oldNode$$16$$)
  }
};
D.$DvtNBoxNodeRenderer$$.$animateInsert$ = function $$DvtNBoxNodeRenderer$$$$animateInsert$$($animationHandler$$32$$, $newNode$$14$$) {
  var $animationPhase$$5$$ = 2, $finalMatrix$$1_oldNBox$$13$$ = $animationHandler$$32$$.$_oldNBox$, $fadeAnim$$2_newNBox$$13$$ = $animationHandler$$32$$.$_newNBox$, $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$ = $fadeAnim$$2_newNBox$$13$$.$getOptions$().__layout.__nodeLayout;
  if($centerOffset$$1_movePlayable$$1_nodeLayout$$10$$) {
    var $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$ = $newNode$$14$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getNodeIndex$($finalMatrix$$1_oldNBox$$13$$, $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$);
    if(!(0,window.isNaN)($centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$) && ($centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getNode$($finalMatrix$$1_oldNBox$$13$$, $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($finalMatrix$$1_oldNBox$$13$$, $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$) && ($animationPhase$$5$$ = 1, 
    D.$DvtNBoxDataUtils$$.$getGrouping$($finalMatrix$$1_oldNBox$$13$$)))) {
      var $groups$$10$$ = $finalMatrix$$1_oldNBox$$13$$.$getOptions$().__groups;
      D.$DvtNBoxDataUtils$$.$getGroupBehavior$($finalMatrix$$1_oldNBox$$13$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($groups$$10$$ = $groups$$10$$[D.$DvtNBoxDataUtils$$.$getCellIndex$($finalMatrix$$1_oldNBox$$13$$, $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$)]);
      if($centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$ = $groups$$10$$[D.$DvtNBoxDataUtils$$.$getNodeGroupId$($centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$)]) {
        if($centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($finalMatrix$$1_oldNBox$$13$$, $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$)) {
          var $childMatrix$$2$$ = $newNode$$14$$.$getMatrix$(), $parent$$80$$ = $newNode$$14$$.getParent(), $finalMatrix$$1_oldNBox$$13$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$14$$), $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$), $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$ = new D.$DvtPoint$$(($centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.indicatorSectionWidth + 
          $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.iconSectionWidth + $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.labelSectionWidth) / 2, $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.nodeHeight / 2);
          $centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$.translate(-$centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.x, -$centerOffset$$1_movePlayable$$1_nodeLayout$$10$$.y);
          $fadeAnim$$2_newNBox$$13$$.$addChild$($newNode$$14$$);
          $newNode$$14$$.$setMatrix$($centerMatrix$$3_group$$33_groupNode$$15_id$$237_oldNode$$17_oldNodeIndex$$);
          $centerOffset$$1_movePlayable$$1_nodeLayout$$10$$ = new D.$DvtAnimMoveTo$$($fadeAnim$$2_newNBox$$13$$.$getCtx$(), $newNode$$14$$, new D.$DvtPoint$$($finalMatrix$$1_oldNBox$$13$$.$_tx$, $finalMatrix$$1_oldNBox$$13$$.$_ty$), $animationHandler$$32$$.$getAnimationDuration$());
          (0,D.$DvtPlayable$appendOnEnd$$)($centerOffset$$1_movePlayable$$1_nodeLayout$$10$$, function() {
            $newNode$$14$$.$setMatrix$($childMatrix$$2$$);
            $parent$$80$$.$addChild$($newNode$$14$$)
          });
          $animationHandler$$32$$.add($centerOffset$$1_movePlayable$$1_nodeLayout$$10$$, $animationPhase$$5$$)
        }
      }
    }
    $fadeAnim$$2_newNBox$$13$$ = new D.$DvtCustomAnimation$$($fadeAnim$$2_newNBox$$13$$.$getCtx$(), $newNode$$14$$, $animationHandler$$32$$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_addProp$$)($fadeAnim$$2_newNBox$$13$$.$_animator$, "typeNumber", $newNode$$14$$, $newNode$$14$$.$getAlpha$, $newNode$$14$$.$setAlpha$, $newNode$$14$$.$getAlpha$());
    $animationHandler$$32$$.add($fadeAnim$$2_newNBox$$13$$, $animationPhase$$5$$);
    $newNode$$14$$.$setAlpha$(0)
  }
};
D.$DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxNodeRenderer$$$$_addAccessibilityAttributes$$($nbox$$45$$, $object$$16$$) {
  $object$$16$$.$setAriaRole$("img");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$25$$ = $object$$16$$.$getAriaLabel$();
    $desc$$25$$ && $object$$16$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$25$$)
  }
};
D.$DvtNBoxCategoryNodeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryNodeRenderer$$, D.$DvtObj$$, "DvtNBoxCategoryNodeRenderer");
D.$DvtNBoxCategoryNodeRenderer$$.$render$ = function $$DvtNBoxCategoryNodeRenderer$$$$render$$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$55$$, $gap$$24$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$55$$, $gap$$24$$);
  var $rendered$$5$$ = D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$55$$, $gap$$24$$);
  D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$55$$, $rendered$$5$$, $gap$$24$$);
  D.$DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$($nbox$$14$$, $nodeContainer$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeBackground$$($color$$66_nbox$$15$$, $node$$257$$, $nodeContainer$$1$$, $borderRadius$$6_scale$$56$$, $gap$$25_nodeRect_side$$22$$) {
  $node$$257$$.__scale = $borderRadius$$6_scale$$56$$;
  $node$$257$$.__gap = $gap$$25_nodeRect_side$$22$$;
  $gap$$25_nodeRect_side$$22$$ = window.Math.max(0, D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($node$$257$$));
  $borderRadius$$6_scale$$56$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($color$$66_nbox$$15$$);
  var $hoverColor$$5$$ = D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$($color$$66_nbox$$15$$), $selectionColor$$1$$ = D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$($color$$66_nbox$$15$$), $selectionRect$$ = new D.$DvtRect$$($color$$66_nbox$$15$$.$getCtx$(), -$gap$$25_nodeRect_side$$22$$ / 2, -$gap$$25_nodeRect_side$$22$$ / 2, $gap$$25_nodeRect_side$$22$$, $gap$$25_nodeRect_side$$22$$);
  $selectionRect$$.$setFill$(null);
  $borderRadius$$6_scale$$56$$ && ($selectionRect$$.$setRx$($borderRadius$$6_scale$$56$$), $selectionRect$$.$setRy$($borderRadius$$6_scale$$56$$));
  $selectionRect$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$5$$, null, 2), new D.$DvtSolidStroke$$($selectionColor$$1$$, null, 4));
  $selectionRect$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectionColor$$1$$, null, 4), null);
  $selectionRect$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$5$$, null, 2), new D.$DvtSolidStroke$$($selectionColor$$1$$, null, 6));
  $nodeContainer$$1$$.$addChild$($selectionRect$$);
  $nodeContainer$$1$$.$setSelectionShape$($selectionRect$$);
  $gap$$25_nodeRect_side$$22$$ = new D.$DvtRect$$($color$$66_nbox$$15$$.$getCtx$(), -$gap$$25_nodeRect_side$$22$$ / 2, -$gap$$25_nodeRect_side$$22$$ / 2, $gap$$25_nodeRect_side$$22$$, $gap$$25_nodeRect_side$$22$$);
  $borderRadius$$6_scale$$56$$ && ($gap$$25_nodeRect_side$$22$$.$setRx$($borderRadius$$6_scale$$56$$), $gap$$25_nodeRect_side$$22$$.$setRy$($borderRadius$$6_scale$$56$$));
  $color$$66_nbox$$15$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($color$$66_nbox$$15$$, $node$$257$$);
  $gap$$25_nodeRect_side$$22$$.$setSolidFill$($color$$66_nbox$$15$$);
  $nodeContainer$$1$$.$addChild$($gap$$25_nodeRect_side$$22$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$ = function $$DvtNBoxCategoryNodeRenderer$$$$getSideLength$$($node$$258$$) {
  return $node$$258$$.__scale * window.Math.sqrt($node$$258$$.nodeIndices.length) - $node$$258$$.__gap
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeIndicator$$($nbox$$16$$, $node$$259$$, $nodeContainer$$2$$, $color$$67_scale$$57$$, $gap$$26_indicatorIcon$$2$$) {
  var $bgRect$$3_indicatorIconColor_retVal$$3$$ = !1, $indicatorColor_markerGap$$ = $nbox$$16$$.$getOptions$().__layout.markerGap, $indicatorMarker_rtl$$20$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$16$$.$getCtx$()), $side$$23$$ = $color$$67_scale$$57$$ * window.Math.sqrt($node$$259$$.nodeIndices.length) - $gap$$26_indicatorIcon$$2$$;
  $color$$67_scale$$57$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($nbox$$16$$, $node$$259$$);
  var $contrastColor$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$67_scale$$57$$), $indicatorWidth$$ = $side$$23$$ / 4, $indicatorIconScale$$ = 1, $indicatorX$$ = $indicatorMarker_rtl$$20$$ ? $side$$23$$ / 2 - $indicatorWidth$$ : -$side$$23$$ / 2;
  ($gap$$26_indicatorIcon$$2$$ = D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($nbox$$16$$, $node$$259$$)) && ($indicatorIconScale$$ = window.Math.min($indicatorWidth$$ / ($gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$WIDTH$] + 2 * $indicatorColor_markerGap$$), $side$$23$$ / ($gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$HEIGHT$] + 2 * $indicatorColor_markerGap$$)));
  if($indicatorColor_markerGap$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($nbox$$16$$, $node$$259$$)) {
    $contrastColor$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($indicatorColor_markerGap$$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = new D.$DvtRect$$($nbox$$16$$.$getCtx$(), $indicatorX$$, -$side$$23$$ / 2, $indicatorWidth$$, $side$$23$$), $bgRect$$3_indicatorIconColor_retVal$$3$$.$setSolidFill$($indicatorColor_markerGap$$), $nodeContainer$$2$$.$addChild$($bgRect$$3_indicatorIconColor_retVal$$3$$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = !0
  }
  $gap$$26_indicatorIcon$$2$$ && ($bgRect$$3_indicatorIconColor_retVal$$3$$ = $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$COLOR$] ? $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$COLOR$] : $contrastColor$$, $indicatorMarker_rtl$$20$$ = new D.$DvtSimpleMarker$$($nbox$$16$$.$getCtx$(), $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", ($indicatorMarker_rtl$$20$$ ? 1 : -1) * ($side$$23$$ - $indicatorWidth$$) / 2, 0, $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$WIDTH$] * 
  $indicatorIconScale$$, $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$HEIGHT$] * $indicatorIconScale$$), $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$] && "none" != $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $indicatorMarker_rtl$$20$$.$setFill$(new D.$DvtPatternFill$$($gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$], $bgRect$$3_indicatorIconColor_retVal$$3$$, $color$$67_scale$$57$$)) : $indicatorMarker_rtl$$20$$.$setSolidFill$($bgRect$$3_indicatorIconColor_retVal$$3$$), 
  $nodeContainer$$2$$.$addChild$($indicatorMarker_rtl$$20$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$16$$, $node$$259$$, $indicatorMarker_rtl$$20$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = !0);
  return $bgRect$$3_indicatorIconColor_retVal$$3$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeCount$$($fontSize$$10_nbox$$17$$, $node$$260$$, $nodeContainer$$3$$, $scale$$58_side$$24$$, $bIndicator$$1_width$$117$$, $color$$68_contrastColor$$1_gap$$27$$) {
  var $labelGap$$1$$ = $fontSize$$10_nbox$$17$$.$getOptions$().__layout.categoryNodeLabelGap, $countX_rtl$$21$$ = (0,D.$DvtAgent$isRightToLeft$$)($fontSize$$10_nbox$$17$$.$getCtx$()), $alphaFade_labelBounds$$12$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($fontSize$$10_nbox$$17$$), $count$$19_highlightedItems$$1$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($fontSize$$10_nbox$$17$$), $label$$63$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fontSize$$10_nbox$$17$$, $node$$260$$, "label");
  if($count$$19_highlightedItems$$1$$) {
    if($count$$19_highlightedItems$$1$$ = $node$$260$$.highlightedCount, 0 == $count$$19_highlightedItems$$1$$) {
      $label$$63$$ && $label$$63$$.$setTextString$("");
      $nodeContainer$$3$$.$setAlpha$($alphaFade_labelBounds$$12$$);
      return
    }
  }else {
    $count$$19_highlightedItems$$1$$ = $node$$260$$.nodeIndices.length
  }
  $scale$$58_side$$24$$ = $scale$$58_side$$24$$ * window.Math.sqrt($node$$260$$.nodeIndices.length) - $color$$68_contrastColor$$1_gap$$27$$;
  $bIndicator$$1_width$$117$$ = $bIndicator$$1_width$$117$$ ? 0.75 * $scale$$58_side$$24$$ : $scale$$58_side$$24$$;
  $countX_rtl$$21$$ = ($countX_rtl$$21$$ ? -1 : 1) * ($scale$$58_side$$24$$ - $bIndicator$$1_width$$117$$) / 2;
  $color$$68_contrastColor$$1_gap$$27$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($fontSize$$10_nbox$$17$$, $node$$260$$);
  $color$$68_contrastColor$$1_gap$$27$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$68_contrastColor$$1_gap$$27$$);
  $alphaFade_labelBounds$$12$$ = new D.$DvtRectangle$$(0, 0, $bIndicator$$1_width$$117$$ - 2 * $labelGap$$1$$, $scale$$58_side$$24$$ - 2 * $labelGap$$1$$);
  $label$$63$$ ? $label$$63$$.$setTextString$("" + $count$$19_highlightedItems$$1$$) : ($label$$63$$ = D.$DvtNBoxRenderer$$.$createText$($fontSize$$10_nbox$$17$$.$getCtx$(), "" + $count$$19_highlightedItems$$1$$, D.$DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$($fontSize$$10_nbox$$17$$), "center", "middle"), D.$DvtNBoxDataUtils$$.$setDisplayable$($fontSize$$10_nbox$$17$$, $node$$260$$, $label$$63$$, "label"));
  $fontSize$$10_nbox$$17$$ = $label$$63$$.$getOptimalFontSize$($alphaFade_labelBounds$$12$$);
  $label$$63$$.$setFontSize$($fontSize$$10_nbox$$17$$);
  D.$DvtTextUtils$$.$fitText$($label$$63$$, $bIndicator$$1_width$$117$$ - 2 * $labelGap$$1$$, $scale$$58_side$$24$$ - 2 * $labelGap$$1$$, $nodeContainer$$3$$) && (D.$DvtNBoxRenderer$$.$positionText$($label$$63$$, $countX_rtl$$21$$, 0), $label$$63$$.$setSolidFill$($color$$68_contrastColor$$1_gap$$27$$))
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateUpdate$$($animationHandler$$20$$, $oldNode$$12_playable$$39$$, $newNode$$9$$) {
  var $oldGlobalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$12_playable$$39$$), $newGlobalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$9$$), $newMatrix$$2$$ = $newNode$$9$$.$getMatrix$(), $parent$$77$$ = $newNode$$9$$.getParent();
  $oldNode$$12_playable$$39$$.$setAlpha$(0);
  $animationHandler$$20$$.$_newNBox$.$addChild$($newNode$$9$$);
  $newNode$$9$$.$setMatrix$($oldGlobalMatrix$$);
  $oldNode$$12_playable$$39$$ = new D.$DvtAnimMoveTo$$($newNode$$9$$.$getCtx$(), $newNode$$9$$, new D.$DvtPoint$$($newGlobalMatrix$$.$_tx$, $newGlobalMatrix$$.$_ty$), $animationHandler$$20$$.$getAnimationDuration$());
  (0,D.$DvtPlayable$appendOnEnd$$)($oldNode$$12_playable$$39$$, function() {
    $parent$$77$$.$addChild$($newNode$$9$$);
    $newNode$$9$$.$setMatrix$($newMatrix$$2$$)
  });
  $animationHandler$$20$$.add($oldNode$$12_playable$$39$$, 1)
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateDelete$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateDelete$$($animationHandler$$21$$, $oldNode$$13$$) {
  var $animationPhase$$ = 1, $fadePlayable_oldNBox$$4_scalePlayable$$ = $animationHandler$$21$$.$_oldNBox$, $newNBox$$2$$ = $animationHandler$$21$$.$_newNBox$;
  D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($fadePlayable_oldNBox$$4_scalePlayable$$, $newNBox$$2$$) && D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($fadePlayable_oldNBox$$4_scalePlayable$$, $newNBox$$2$$) && ($animationPhase$$ = 0);
  $fadePlayable_oldNBox$$4_scalePlayable$$ = new D.$DvtAnimScaleTo$$($newNBox$$2$$.$getCtx$(), $oldNode$$13$$, new D.$DvtPoint$$(0.01, 0.01), $animationHandler$$21$$.$getAnimationDuration$());
  $animationHandler$$21$$.add($fadePlayable_oldNBox$$4_scalePlayable$$, $animationPhase$$);
  $fadePlayable_oldNBox$$4_scalePlayable$$ = new D.$DvtAnimFadeOut$$($newNBox$$2$$.$getCtx$(), $oldNode$$13$$, $animationHandler$$21$$.$getAnimationDuration$());
  $animationHandler$$21$$.add($fadePlayable_oldNBox$$4_scalePlayable$$, $animationPhase$$);
  $oldNode$$13$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$13$$));
  $newNBox$$2$$.$_deleteContainer$.$addChild$($oldNode$$13$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateInsert$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateInsert$$($animationHandler$$22$$, $newNode$$10$$) {
  var $animationPhase$$1$$ = 1, $oldNBox$$5_scalePlayable$$1$$ = $animationHandler$$22$$.$_oldNBox$, $fadeAnim$$1_newNBox$$3$$ = $animationHandler$$22$$.$_newNBox$;
  D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($oldNBox$$5_scalePlayable$$1$$, $fadeAnim$$1_newNBox$$3$$) && D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($oldNBox$$5_scalePlayable$$1$$, $fadeAnim$$1_newNBox$$3$$) && ($animationPhase$$1$$ = 2);
  $newNode$$10$$.$setScaleX$(0.01);
  $newNode$$10$$.$setScaleY$(0.01);
  $oldNBox$$5_scalePlayable$$1$$ = new D.$DvtAnimScaleTo$$($fadeAnim$$1_newNBox$$3$$.$getCtx$(), $newNode$$10$$, new D.$DvtPoint$$(1, 1), $animationHandler$$22$$.$getAnimationDuration$());
  $animationHandler$$22$$.add($oldNBox$$5_scalePlayable$$1$$, $animationPhase$$1$$);
  $fadeAnim$$1_newNBox$$3$$ = new D.$DvtCustomAnimation$$($fadeAnim$$1_newNBox$$3$$.$getCtx$(), $newNode$$10$$, $animationHandler$$22$$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($fadeAnim$$1_newNBox$$3$$.$_animator$, "typeNumber", $newNode$$10$$, $newNode$$10$$.$getAlpha$, $newNode$$10$$.$setAlpha$, $newNode$$10$$.$getAlpha$());
  $animationHandler$$22$$.add($fadeAnim$$1_newNBox$$3$$, $animationPhase$$1$$);
  $newNode$$10$$.$setAlpha$(0)
};
D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isGroupingEqual$$($oldNBox$$6$$, $newNBox$$4$$) {
  var $i$$729_oldGroupBehavior$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($oldNBox$$6$$), $newGroupBehavior_oldCategory$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($newNBox$$4$$), $oldNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($oldNBox$$6$$), $newCategory_newNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($newNBox$$4$$), $identical$$ = !1;
  if($i$$729_oldGroupBehavior$$ == $newGroupBehavior_oldCategory$$ && $oldNodeCount$$ == $newCategory_newNodeCount$$) {
    $identical$$ = !0;
    for($i$$729_oldGroupBehavior$$ = 0;$i$$729_oldGroupBehavior$$ < $oldNodeCount$$;$i$$729_oldGroupBehavior$$++) {
      if($newGroupBehavior_oldCategory$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$(D.$DvtNBoxDataUtils$$.$getNode$($oldNBox$$6$$, $i$$729_oldGroupBehavior$$)), $newCategory_newNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$(D.$DvtNBoxDataUtils$$.$getNode$($newNBox$$4$$, $i$$729_oldGroupBehavior$$)), $newGroupBehavior_oldCategory$$ != $newCategory_newNodeCount$$) {
        $identical$$ = !1;
        break
      }
    }
  }
  return $identical$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isMaximizeEqual$$($oldNBox$$7$$, $newNBox$$5$$) {
  var $oldMaximizedRow$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($oldNBox$$7$$), $oldMaximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($oldNBox$$7$$), $newMaximizedRow$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($newNBox$$5$$), $newMaximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($newNBox$$5$$);
  return $oldMaximizedRow$$ == $newMaximizedRow$$ && $oldMaximizedColumn$$ == $newMaximizedColumn$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCategoryNodeRenderer$$$$_addAccessibilityAttributes$$($nbox$$18$$, $object$$13$$) {
  $object$$13$$.$setAriaRole$("img");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$22$$ = $object$$13$$.$getAriaLabel$();
    $desc$$22$$ && $object$$13$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$22$$)
  }
};
D.$DvtNBoxDrawerRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDrawerRenderer$$, D.$DvtObj$$, "DvtNBoxDrawerRenderer");
D.$DvtNBoxDrawerRenderer$$.$render$ = function $$DvtNBoxDrawerRenderer$$$$render$$($nbox$$30$$, $data$$81$$, $drawerContainer$$, $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$) {
  $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$ = D.$DvtNBoxDrawerRenderer$$.$getDrawerBounds$($nbox$$30$$, $data$$81$$, $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$);
  $data$$81$$.__drawerBounds = $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($drawerContainer$$, $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$.x, $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$.y);
  $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$ = new D.$DvtKeyboardFocusEffect$$($nbox$$30$$.$getCtx$(), $drawerContainer$$, new D.$DvtRectangle$$(-1, -1, $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$.$w$ + 2, $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$.$h$ + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$30$$, $data$$81$$, $availSpace$$101_drawerBounds_keyboardFocusEffect$$2$$, "focusEffect");
  D.$DvtNBoxDrawerRenderer$$.$_renderBody$($nbox$$30$$, $data$$81$$, $drawerContainer$$);
  D.$DvtNBoxDrawerRenderer$$.$_renderHeader$($nbox$$30$$, $data$$81$$, $drawerContainer$$);
  D.$DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$($nbox$$30$$, $data$$81$$, $drawerContainer$$)
};
D.$DvtNBoxDrawerRenderer$$.$_renderHeader$ = function $$DvtNBoxDrawerRenderer$$$$_renderHeader$$($categoryLabel_nbox$$31$$, $data$$82_drawerBounds$$1$$, $drawerContainer$$1$$) {
  var $closeHeight_countColor_options$$212$$ = $categoryLabel_nbox$$31$$.$getOptions$(), $drawerButtonGap$$ = $closeHeight_countColor_options$$212$$.__layout.drawerButtonGap, $drawerStartGap$$ = $closeHeight_countColor_options$$212$$.__layout.drawerStartGap, $drawerLabelGap$$ = $closeHeight_countColor_options$$212$$.__layout.drawerLabelGap, $categoryText_drawerCountHGap_labelOffset$$ = $closeHeight_countColor_options$$212$$.__layout.drawerCountHorizontalGap, $countIndicatorHeight_drawerCountVGap$$ = 
  $closeHeight_countColor_options$$212$$.__layout.drawerCountVerticalGap, $drawerHeaderHeight$$ = $closeHeight_countColor_options$$212$$.__layout.drawerHeaderHeight, $countIndicatorWidth_indicatorGap$$ = $closeHeight_countColor_options$$212$$.__layout.nodeIndicatorGap, $countIndicatorSectionWidth_swatchSize$$ = $closeHeight_countColor_options$$212$$.__layout.nodeSwatchSize, $rtl$$25$$ = (0,D.$DvtAgent$isRightToLeft$$)($categoryLabel_nbox$$31$$.$getCtx$()), $categoryNode$$3$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($categoryLabel_nbox$$31$$, 
  $data$$82_drawerBounds$$1$$[D.$DvtNBoxConstants$$.ID]), $countLabel$$1_nodeCount$$6$$ = $categoryNode$$3$$.nodeIndices.length;
  $data$$82_drawerBounds$$1$$ = $data$$82_drawerBounds$$1$$.__drawerBounds;
  var $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$ = $closeHeight_countColor_options$$212$$._resources.close_ena, $closeWidth$$1$$ = $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$.width;
  if($data$$82_drawerBounds$$1$$.$w$ > $closeWidth$$1$$) {
    var $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$ = $closeHeight_countColor_options$$212$$._resources.close_ovr, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$ = $closeHeight_countColor_options$$212$$._resources.close_dwn, $closeHeight_countColor_options$$212$$ = $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$.height, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$ = new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$.src, 
    0, 0, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$.width, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$.height), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$ = new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$.src, 0, 0, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$.width, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$.height), $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$ = 
    new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$.src, 0, 0, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$.width, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$.height), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$ = new D.$DvtButton$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$, $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$, 
    $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$, null, null, $drawerContainer$$1$$.$closeDrawer$, $drawerContainer$$1$$), $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$ = $rtl$$25$$ ? window.Math.min(($data$$82_drawerBounds$$1$$.$w$ - $closeWidth$$1$$) / 2, $drawerButtonGap$$) : window.Math.max(($data$$82_drawerBounds$$1$$.$w$ - $closeWidth$$1$$) / 2, $data$$82_drawerBounds$$1$$.$w$ - $drawerButtonGap$$ - $closeWidth$$1$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$, $drawerHeaderHeight$$ / 2 - $closeHeight_countColor_options$$212$$ / 2);
    $drawerContainer$$1$$.$addChild$($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$)
  }
  var $closeHeight_countColor_options$$212$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($categoryLabel_nbox$$31$$, $categoryNode$$3$$), $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($closeHeight_countColor_options$$212$$), $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$ = ($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($categoryLabel_nbox$$31$$, $categoryNode$$3$$)) ? 
  D.$DvtColorUtils$$.$getContrastingTextColor$($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$) : $closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$, $indicatorIcon$$3$$ = D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($categoryLabel_nbox$$31$$, $categoryNode$$3$$), $countLabelSectionWidth_indicatorIconWidth$$1$$ = $countIndicatorSectionWidth_swatchSize$$, $indicatorMarker$$1_scale$$59$$ = 1;
  if($indicatorIcon$$3$$) {
    var $halign$$9_indicatorIconW$$ = $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$WIDTH$], $indicatorMarker$$1_scale$$59$$ = $countIndicatorSectionWidth_swatchSize$$ / $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$HEIGHT$], $countLabelSectionWidth_indicatorIconWidth$$1$$ = $indicatorMarker$$1_scale$$59$$ * $halign$$9_indicatorIconW$$, $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$ = $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$COLOR$] ? $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$COLOR$] : $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$
  }
  var $countBorderRadius_indicatorSection_indicatorSectionPath$$ = D.$DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$ = $rtl$$25$$ ? "right" : "left", $countLabel$$1_nodeCount$$6$$ = D.$DvtNBoxRenderer$$.$createText$($categoryLabel_nbox$$31$$.$getCtx$(), "" + $countLabel$$1_nodeCount$$6$$, D.$DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$, "middle"), $countLabelDims_indicatorX$$1$$ = $countLabel$$1_nodeCount$$6$$.$measureDimensions$(), 
  $countIndicatorHeight_drawerCountVGap$$ = $countLabelDims_indicatorX$$1$$.$h$ + 2 * $countIndicatorHeight_drawerCountVGap$$, $countIndicatorSectionWidth_swatchSize$$ = $indicatorIcon$$3$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ + 2 * $countIndicatorWidth_indicatorGap$$ : $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$ ? $countIndicatorSectionWidth_swatchSize$$ : 0, $countLabelSectionWidth_indicatorIconWidth$$1$$ = $countLabelDims_indicatorX$$1$$.$w$ + 2 * $categoryText_drawerCountHGap_labelOffset$$, 
  $countIndicatorWidth_indicatorGap$$ = $countIndicatorSectionWidth_swatchSize$$ + $countLabelSectionWidth_indicatorIconWidth$$1$$, $countIndicatorPath_countIndicatorShape$$;
  $data$$82_drawerBounds$$1$$.$w$ - $closeWidth$$1$$ - 2 * $drawerButtonGap$$ - $drawerStartGap$$ > $countIndicatorWidth_indicatorGap$$ && ($countIndicatorPath_countIndicatorShape$$ = D.$DvtPathUtils$$.$roundedRectangle$(0, 0, $countIndicatorWidth_indicatorGap$$, $countIndicatorHeight_drawerCountVGap$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
  $countIndicatorPath_countIndicatorShape$$ = new D.$DvtPath$$($categoryLabel_nbox$$31$$.$getCtx$(), $countIndicatorPath_countIndicatorShape$$), $countIndicatorPath_countIndicatorShape$$.$setSolidFill$($closeHeight_countColor_options$$212$$), $drawerContainer$$1$$.$addChild$($countIndicatorPath_countIndicatorShape$$), $countLabelDims_indicatorX$$1$$ = $rtl$$25$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ : 0, 0 < $countIndicatorSectionWidth_swatchSize$$ && ($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$ && 
  ($countBorderRadius_indicatorSection_indicatorSectionPath$$ = D.$DvtPathUtils$$.$roundedRectangle$($countLabelDims_indicatorX$$1$$, 0, $countIndicatorSectionWidth_swatchSize$$, $countIndicatorHeight_drawerCountVGap$$, $rtl$$25$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$, $rtl$$25$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $rtl$$25$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $rtl$$25$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
  $countBorderRadius_indicatorSection_indicatorSectionPath$$ = new D.$DvtPath$$($categoryLabel_nbox$$31$$.$getCtx$(), $countBorderRadius_indicatorSection_indicatorSectionPath$$), $countBorderRadius_indicatorSection_indicatorSectionPath$$.$setSolidFill$($closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($countBorderRadius_indicatorSection_indicatorSectionPath$$)), $indicatorIcon$$3$$ && ($indicatorMarker$$1_scale$$59$$ = new D.$DvtSimpleMarker$$($categoryLabel_nbox$$31$$.$getCtx$(), 
  $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $countLabelDims_indicatorX$$1$$ + $countIndicatorSectionWidth_swatchSize$$ / 2, $countIndicatorHeight_drawerCountVGap$$ / 2, $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$WIDTH$] * $indicatorMarker$$1_scale$$59$$, $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$HEIGHT$] * $indicatorMarker$$1_scale$$59$$), $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$] && "none" != $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $indicatorMarker$$1_scale$$59$$.$setFill$(new D.$DvtPatternFill$$($indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$], 
  $closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$, $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$ ? $closeButtonX$$1_closeDwn$$1_closeDwnImg$$1_indicatorColor$$1$$ : $closeHeight_countColor_options$$212$$)) : $indicatorMarker$$1_scale$$59$$.$setSolidFill$($closeEna$$1_closeEnaImg$$1_indicatorIconColor$$1$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($indicatorMarker$$1_scale$$59$$))), $countIndicatorPath_countIndicatorShape$$.$addChild$($countLabel$$1_nodeCount$$6$$), 
  $countLabel$$1_nodeCount$$6$$.$setSolidFill$($closeButton$$3_closeOvr$$1_closeOvrImg$$1_contrastColor$$2$$), D.$DvtNBoxRenderer$$.$positionText$($countLabel$$1_nodeCount$$6$$, $rtl$$25$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ - $categoryText_drawerCountHGap_labelOffset$$ : $countIndicatorSectionWidth_swatchSize$$ + $categoryText_drawerCountHGap_labelOffset$$, $countIndicatorHeight_drawerCountVGap$$ / 2));
  $categoryText_drawerCountHGap_labelOffset$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($categoryLabel_nbox$$31$$, $categoryNode$$3$$).$getLabel$();
  $categoryLabel_nbox$$31$$ = D.$DvtNBoxRenderer$$.$createText$($categoryLabel_nbox$$31$$.$getCtx$(), $categoryText_drawerCountHGap_labelOffset$$, D.$DvtNBoxStyleUtils$$.$getDrawerLabelStyle$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$, "middle");
  $categoryText_drawerCountHGap_labelOffset$$ = 0;
  D.$DvtTextUtils$$.$fitText$($categoryLabel_nbox$$31$$, $data$$82_drawerBounds$$1$$.$w$ - $drawerStartGap$$ - $drawerLabelGap$$ - $countIndicatorWidth_indicatorGap$$ - 2 * $drawerButtonGap$$ - $closeWidth$$1$$, $drawerHeaderHeight$$, $drawerContainer$$1$$) && (D.$DvtNBoxRenderer$$.$positionText$($categoryLabel_nbox$$31$$, $rtl$$25$$ ? $data$$82_drawerBounds$$1$$.$w$ - $drawerStartGap$$ : $drawerStartGap$$, $drawerHeaderHeight$$ / 2), $categoryText_drawerCountHGap_labelOffset$$ = $categoryLabel_nbox$$31$$.$measureDimensions$().$w$ + 
  $drawerLabelGap$$);
  $countIndicatorPath_countIndicatorShape$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($countIndicatorPath_countIndicatorShape$$, $rtl$$25$$ ? $data$$82_drawerBounds$$1$$.$w$ - $drawerStartGap$$ - $countIndicatorWidth_indicatorGap$$ - $categoryText_drawerCountHGap_labelOffset$$ : $drawerStartGap$$ + $categoryText_drawerCountHGap_labelOffset$$, ($drawerHeaderHeight$$ - $countIndicatorHeight_drawerCountVGap$$) / 2)
};
D.$DvtNBoxDrawerRenderer$$.$_renderBody$ = function $$DvtNBoxDrawerRenderer$$$$_renderBody$$($nbox$$32$$, $data$$83$$, $alphaFade$$1_drawerContainer$$2$$) {
  var $options$$213_rtl$$26$$ = $nbox$$32$$.$getOptions$(), $gridGap$$ = $options$$213_rtl$$26$$.__layout.gridGap, $drawerHeaderHeight$$1_highlightedItems$$2$$ = $options$$213_rtl$$26$$.__layout.drawerHeaderHeight, $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$ = $data$$83$$.__drawerBounds, $options$$213_rtl$$26$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$32$$.$getCtx$()), $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ = D.$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$($nbox$$32$$), 
  $borderColor$$53_i$$732_nodes$$16$$ = D.$DvtNBoxStyleUtils$$.$getDrawerBorderColor$($nbox$$32$$), $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ = D.$DvtPathUtils$$.$roundedRectangle$(0, 0, $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$.$w$, $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$.$h$, $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$, $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$, $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$, 
  $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$), $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ = new D.$DvtPath$$($nbox$$32$$.$getCtx$(), $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$);
  D.$DvtNBoxRenderer$$.$setFill$($body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$, D.$DvtNBoxStyleUtils$$.$getDrawerBackground$($nbox$$32$$));
  $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$.$setSolidStroke$($borderColor$$53_i$$732_nodes$$16$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$);
  $alphaFade$$1_drawerContainer$$2$$.$addChild$($body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$32$$, $data$$83$$, $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$, "background");
  $data$$83$$.__childArea = new D.$DvtRectangle$$($gridGap$$, $drawerHeaderHeight$$1_highlightedItems$$2$$ + $gridGap$$, window.Math.max($drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$.$w$ - 2 * $gridGap$$, 0), window.Math.max($drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$.$h$ - $drawerHeaderHeight$$1_highlightedItems$$2$$ - 2 * $gridGap$$, 0));
  $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$ = new D.$DvtSimpleScrollableContainer$$($nbox$$32$$.$getCtx$(), $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$.$w$, $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$.$h$ - $drawerHeaderHeight$$1_highlightedItems$$2$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$, 0, $drawerHeaderHeight$$1_highlightedItems$$2$$);
  $alphaFade$$1_drawerContainer$$2$$.$addChild$($drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$);
  $alphaFade$$1_drawerContainer$$2$$.$setChildContainer$($drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$);
  var $nodeLayout$$1_orderPasses$$ = ["normal"];
  $alphaFade$$1_drawerContainer$$2$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($nbox$$32$$);
  $drawerHeaderHeight$$1_highlightedItems$$2$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$32$$);
  $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$ = {};
  if($drawerHeaderHeight$$1_highlightedItems$$2$$) {
    for($borderColor$$53_i$$732_nodes$$16$$ = 0;$borderColor$$53_i$$732_nodes$$16$$ < $drawerHeaderHeight$$1_highlightedItems$$2$$.length;$borderColor$$53_i$$732_nodes$$16$$++) {
      $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$[$drawerHeaderHeight$$1_highlightedItems$$2$$[$borderColor$$53_i$$732_nodes$$16$$][D.$DvtNBoxConstants$$.ID]] = !0
    }
  }
  var $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ = D.$DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$32$$), $hGridSize_selectedMap$$1$$ = {};
  if($body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$) {
    for($borderColor$$53_i$$732_nodes$$16$$ = 0;$borderColor$$53_i$$732_nodes$$16$$ < $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$.length;$borderColor$$53_i$$732_nodes$$16$$++) {
      $hGridSize_selectedMap$$1$$[$body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$[$borderColor$$53_i$$732_nodes$$16$$]] = !0
    }
  }
  $drawerHeaderHeight$$1_highlightedItems$$2$$ ? $nodeLayout$$1_orderPasses$$ = $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ ? ["highlighted-selected", "highlighted-unselected", "unhighlighted-selected", "unhighlighted-unselected"] : ["highlighted-unselected", "unhighlighted-unselected"] : $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ && ($nodeLayout$$1_orderPasses$$ = ["unhighlighted-selected", "unhighlighted-unselected"]);
  for(var $borderColor$$53_i$$732_nodes$$16$$ = [], $categoryNode$$4_vGridSize$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$32$$, $data$$83$$[D.$DvtNBoxConstants$$.ID]), $container$$153_nodeCount$$7$$ = $categoryNode$$4_vGridSize$$.nodeIndices.length, $nodeContainer$$4_p$$27_prevNode$$ = 0;$nodeContainer$$4_p$$27_prevNode$$ < $nodeLayout$$1_orderPasses$$.length;$nodeContainer$$4_p$$27_prevNode$$++) {
    for($body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ = 0;$body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ < $container$$153_nodeCount$$7$$;$body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$++) {
      var $node$$261$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$32$$, $categoryNode$$4_vGridSize$$.nodeIndices[$body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$]);
      ("normal" == $nodeLayout$$1_orderPasses$$[$nodeContainer$$4_p$$27_prevNode$$] || "highlighted-selected" == $nodeLayout$$1_orderPasses$$[$nodeContainer$$4_p$$27_prevNode$$] && $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]] && $hGridSize_selectedMap$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]] || "highlighted-unselected" == $nodeLayout$$1_orderPasses$$[$nodeContainer$$4_p$$27_prevNode$$] && $drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]] && 
      !$hGridSize_selectedMap$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]] || "unhighlighted-selected" == $nodeLayout$$1_orderPasses$$[$nodeContainer$$4_p$$27_prevNode$$] && !$drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]] && $hGridSize_selectedMap$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]] || "unhighlighted-unselected" == $nodeLayout$$1_orderPasses$$[$nodeContainer$$4_p$$27_prevNode$$] && !$drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]] && 
      !$hGridSize_selectedMap$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]]) && $borderColor$$53_i$$732_nodes$$16$$.push($node$$261$$)
    }
  }
  $nodeLayout$$1_orderPasses$$ = D.$DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$($nbox$$32$$, $data$$83$$, $borderColor$$53_i$$732_nodes$$16$$);
  $hGridSize_selectedMap$$1$$ = $nodeLayout$$1_orderPasses$$.indicatorSectionWidth + $nodeLayout$$1_orderPasses$$.iconSectionWidth + $nodeLayout$$1_orderPasses$$.labelSectionWidth + $gridGap$$;
  $categoryNode$$4_vGridSize$$ = $nodeLayout$$1_orderPasses$$.nodeHeight + $gridGap$$;
  $container$$153_nodeCount$$7$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$32$$, $data$$83$$).$getChildContainer$();
  for($body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ = 0;$body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ < $borderColor$$53_i$$732_nodes$$16$$.length;$body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$++) {
    if($node$$261$$ = $borderColor$$53_i$$732_nodes$$16$$[$body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$], 0 != $nodeLayout$$1_orderPasses$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] && 0 != $nodeLayout$$1_orderPasses$$.drawerLayout[D.$DvtNBoxConstants$$.$ROWS$]) {
      var $nodeContainer$$4_p$$27_prevNode$$ = D.$DvtNBoxNode$$.newInstance($nbox$$32$$, $node$$261$$), $gridXOrigin$$ = $data$$83$$.__childArea.x + ($data$$83$$.__childArea.$w$ - $nodeLayout$$1_orderPasses$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] * $hGridSize_selectedMap$$1$$ + $gridGap$$) / 2, $gridYOrigin$$ = $gridGap$$, $gridColumn$$ = $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ % $nodeLayout$$1_orderPasses$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$];
      $options$$213_rtl$$26$$ && ($gridColumn$$ = $nodeLayout$$1_orderPasses$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] - $gridColumn$$ - 1);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$4_p$$27_prevNode$$, $gridXOrigin$$ + $hGridSize_selectedMap$$1$$ * $gridColumn$$, $gridYOrigin$$ + $categoryNode$$4_vGridSize$$ * window.Math.floor($body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ / $nodeLayout$$1_orderPasses$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$]));
      $nodeContainer$$4_p$$27_prevNode$$.$render$($container$$153_nodeCount$$7$$.$_container$, $nodeLayout$$1_orderPasses$$);
      $drawerHeaderHeight$$1_highlightedItems$$2$$ && !$drawerBounds$$2_highlightedMap$$1_scrollContainer$$1$$[$node$$261$$[D.$DvtNBoxConstants$$.ID]] && $nodeContainer$$4_p$$27_prevNode$$.$setAlpha$($alphaFade$$1_drawerContainer$$2$$);
      if($nodeContainer$$4_p$$27_prevNode$$ = 0 < $body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ ? $borderColor$$53_i$$732_nodes$$16$$[$body$$3_bodyPath_borderRadius$$7_n$$19_selectedItems$$1$$ - 1] : null) {
        $node$$261$$.__prev = $nodeContainer$$4_p$$27_prevNode$$, $nodeContainer$$4_p$$27_prevNode$$.__next = $node$$261$$
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($container$$153_nodeCount$$7$$)
};
D.$DvtNBoxDrawerRenderer$$.$getDrawerBounds$ = function $$DvtNBoxDrawerRenderer$$$$getDrawerBounds$$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$84_r$$58$$, $availSpace$$102$$) {
  var $cellLayout$$7_options$$214$$ = $cellDims$$1_nbox$$33$$.$getOptions$(), $gridGap$$1$$ = $cellLayout$$7_options$$214$$.__layout.gridGap, $cellLayout$$7_options$$214$$ = $cellLayout$$7_options$$214$$.__layout.__cellLayout, $c$$39_cell$$35_drawerBounds$$3$$ = new D.$DvtRectangle$$($availSpace$$102$$.x + $gridGap$$1$$, $availSpace$$102$$.y + $gridGap$$1$$, window.Math.max($availSpace$$102$$.$w$ - 2 * $gridGap$$1$$, 0), window.Math.max($availSpace$$102$$.$h$ - 2 * $gridGap$$1$$, 0));
  D.$DvtNBoxDataUtils$$.$getGroupBehavior$($cellDims$$1_nbox$$33$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cellIndex$$7_data$$84_r$$58$$ = (0,window.parseInt)($cellIndex$$7_data$$84_r$$58$$.id.substring(0, $cellIndex$$7_data$$84_r$$58$$[D.$DvtNBoxConstants$$.ID].indexOf(":"))), D.$DvtNBoxDataUtils$$.$isCellMaximized$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$84_r$$58$$) && ($c$$39_cell$$35_drawerBounds$$3$$ = D.$DvtNBoxDataUtils$$.$getCell$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$84_r$$58$$), 
  $cellIndex$$7_data$$84_r$$58$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($cellDims$$1_nbox$$33$$, $c$$39_cell$$35_drawerBounds$$3$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$39_cell$$35_drawerBounds$$3$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($cellDims$$1_nbox$$33$$, $c$$39_cell$$35_drawerBounds$$3$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellDims$$1_nbox$$33$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$84_r$$58$$, $c$$39_cell$$35_drawerBounds$$3$$, $cellLayout$$7_options$$214$$, 
  $availSpace$$102$$), $c$$39_cell$$35_drawerBounds$$3$$ = new D.$DvtRectangle$$($cellDims$$1_nbox$$33$$.x + $gridGap$$1$$, $cellDims$$1_nbox$$33$$.y + $gridGap$$1$$ + $cellLayout$$7_options$$214$$.headerSize, window.Math.max($cellDims$$1_nbox$$33$$.$w$ - 2 * $gridGap$$1$$, 0), window.Math.max($cellDims$$1_nbox$$33$$.$h$ - $cellLayout$$7_options$$214$$.headerSize - 2 * $gridGap$$1$$, 0))));
  return $c$$39_cell$$35_drawerBounds$$3$$
};
D.$DvtNBoxDrawerRenderer$$.$animateUpdate$ = function $$DvtNBoxDrawerRenderer$$$$animateUpdate$$() {
  window.console.log("********************* DvtNBoxDrawerRenderer.animateUpdate *********************")
};
D.$DvtNBoxDrawerRenderer$$.$animateDelete$ = function $$DvtNBoxDrawerRenderer$$$$animateDelete$$($animationHandler$$28$$, $oldDrawer$$2$$) {
  var $fadePlayable$$1_newNBox$$8$$ = $animationHandler$$28$$.$_newNBox$, $drawerBounds$$4_scaleY$$5$$ = $oldDrawer$$2$$.getData().__drawerBounds, $finalMatrix_id$$234_sideLength$$ = $oldDrawer$$2$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix_group$$30_groupNode$$12$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($fadePlayable$$1_newNBox$$8$$, $finalMatrix_id$$234_sideLength$$);
  if($centerMatrix_group$$30_groupNode$$12$$) {
    var $finalMatrix_id$$234_sideLength$$ = D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($centerMatrix_group$$30_groupNode$$12$$), $playable$$43_scaleX$$5$$ = $finalMatrix_id$$234_sideLength$$ / $drawerBounds$$4_scaleY$$5$$.$w$, $drawerBounds$$4_scaleY$$5$$ = $finalMatrix_id$$234_sideLength$$ / $drawerBounds$$4_scaleY$$5$$.$h$;
    if($centerMatrix_group$$30_groupNode$$12$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fadePlayable$$1_newNBox$$8$$, $centerMatrix_group$$30_groupNode$$12$$)) {
      $centerMatrix_group$$30_groupNode$$12$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix_group$$30_groupNode$$12$$), $finalMatrix_id$$234_sideLength$$ = new D.$DvtMatrix$$($playable$$43_scaleX$$5$$, 0, 0, $drawerBounds$$4_scaleY$$5$$, $centerMatrix_group$$30_groupNode$$12$$.$_tx$ - $finalMatrix_id$$234_sideLength$$ / 2, $centerMatrix_group$$30_groupNode$$12$$.$_ty$ - $finalMatrix_id$$234_sideLength$$ / 2), $playable$$43_scaleX$$5$$ = new D.$DvtCustomAnimation$$($fadePlayable$$1_newNBox$$8$$.$getCtx$(), 
      $oldDrawer$$2$$, $animationHandler$$28$$.$getAnimationDuration$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$43_scaleX$$5$$.$_animator$, "typeMatrix", $oldDrawer$$2$$, $oldDrawer$$2$$.$getMatrix$, $oldDrawer$$2$$.$setMatrix$, $finalMatrix_id$$234_sideLength$$), $animationHandler$$28$$.add($playable$$43_scaleX$$5$$, 1)
    }
  }
  $fadePlayable$$1_newNBox$$8$$.$_deleteContainer$.$addChild$($oldDrawer$$2$$);
  $fadePlayable$$1_newNBox$$8$$ = new D.$DvtAnimFadeOut$$($fadePlayable$$1_newNBox$$8$$.$getCtx$(), $oldDrawer$$2$$, $animationHandler$$28$$.$getAnimationDuration$());
  $animationHandler$$28$$.add($fadePlayable$$1_newNBox$$8$$, 1)
};
D.$DvtNBoxDrawerRenderer$$.$animateInsert$ = function $$DvtNBoxDrawerRenderer$$$$animateInsert$$($animationHandler$$29$$, $newDrawer$$1$$) {
  var $fadePlayable$$2_newNBox$$9$$ = $animationHandler$$29$$.$_newNBox$, $drawerBounds$$5_scaleY$$6$$ = $newDrawer$$1$$.getData().__drawerBounds, $id$$235_initMatrix_sideLength$$1$$ = $newDrawer$$1$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix$$1_group$$31_groupNode$$13$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($fadePlayable$$2_newNBox$$9$$, $id$$235_initMatrix_sideLength$$1$$);
  if($centerMatrix$$1_group$$31_groupNode$$13$$) {
    var $id$$235_initMatrix_sideLength$$1$$ = D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($centerMatrix$$1_group$$31_groupNode$$13$$), $playable$$44_scaleX$$6$$ = $id$$235_initMatrix_sideLength$$1$$ / $drawerBounds$$5_scaleY$$6$$.$w$, $drawerBounds$$5_scaleY$$6$$ = $id$$235_initMatrix_sideLength$$1$$ / $drawerBounds$$5_scaleY$$6$$.$h$;
    if($centerMatrix$$1_group$$31_groupNode$$13$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fadePlayable$$2_newNBox$$9$$, $centerMatrix$$1_group$$31_groupNode$$13$$)) {
      $centerMatrix$$1_group$$31_groupNode$$13$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$1_group$$31_groupNode$$13$$);
      $id$$235_initMatrix_sideLength$$1$$ = new D.$DvtMatrix$$($playable$$44_scaleX$$6$$, 0, 0, $drawerBounds$$5_scaleY$$6$$, $centerMatrix$$1_group$$31_groupNode$$13$$.$_tx$ - $id$$235_initMatrix_sideLength$$1$$ / 2, $centerMatrix$$1_group$$31_groupNode$$13$$.$_ty$ - $id$$235_initMatrix_sideLength$$1$$ / 2);
      $playable$$44_scaleX$$6$$ = new D.$DvtCustomAnimation$$($fadePlayable$$2_newNBox$$9$$.$getCtx$(), $newDrawer$$1$$, $animationHandler$$29$$.$getAnimationDuration$());
      (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$44_scaleX$$6$$.$_animator$, "typeMatrix", $newDrawer$$1$$, $newDrawer$$1$$.$getMatrix$, $newDrawer$$1$$.$setMatrix$, $newDrawer$$1$$.$getMatrix$());
      var $parent$$78$$ = $newDrawer$$1$$.getParent();
      $fadePlayable$$2_newNBox$$9$$.$addChild$($newDrawer$$1$$);
      (0,D.$DvtPlayable$appendOnEnd$$)($playable$$44_scaleX$$6$$, function() {
        $parent$$78$$.$addChild$($newDrawer$$1$$)
      });
      $newDrawer$$1$$.$setMatrix$($id$$235_initMatrix_sideLength$$1$$);
      $animationHandler$$29$$.add($playable$$44_scaleX$$6$$, 1)
    }
  }
  $newDrawer$$1$$.$setAlpha$(0);
  $fadePlayable$$2_newNBox$$9$$ = new D.$DvtAnimFadeIn$$($fadePlayable$$2_newNBox$$9$$.$getCtx$(), $newDrawer$$1$$, $animationHandler$$29$$.$getAnimationDuration$());
  $animationHandler$$29$$.add($fadePlayable$$2_newNBox$$9$$, 1)
};
D.$DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxDrawerRenderer$$$$_addAccessibilityAttributes$$($nbox$$34_object$$15$$, $data$$85$$, $desc$$24_drawerContainer$$3$$) {
  $nbox$$34_object$$15$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$34_object$$15$$, $data$$85$$, "background") : $desc$$24_drawerContainer$$3$$;
  $nbox$$34_object$$15$$.$setAriaRole$("img");
  (0,D.$DvtAgent$deferAriaCreation$$)() || ($desc$$24_drawerContainer$$3$$ = $desc$$24_drawerContainer$$3$$.$getAriaLabel$()) && $nbox$$34_object$$15$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$24_drawerContainer$$3$$)
};
D.$DvtNBoxDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDataUtils$$, D.$DvtObj$$, "DvtNBoxDataUtils");
D.$DvtNBoxDataUtils$$.$processDataObject$ = function $$DvtNBoxDataUtils$$$$processDataObject$$($legend$$29_nbox$$63$$) {
  var $options$$223$$ = $legend$$29_nbox$$63$$.$getOptions$(), $cells$$3_columnMap_hiddenCategories$$11$$ = $options$$223$$[D.$DvtNBoxConstants$$.$CELLS$], $cellMap_nodeMap$$6_section$$10$$ = {};
  if($cells$$3_columnMap_hiddenCategories$$11$$) {
    for(var $i$$744_rowMap$$ = 0;$i$$744_rowMap$$ < $cells$$3_columnMap_hiddenCategories$$11$$.length;$i$$744_rowMap$$++) {
      var $cell$$40_newCells$$1_nodeObj$$ = $cells$$3_columnMap_hiddenCategories$$11$$[$i$$744_rowMap$$], $grouping$$4_j$$101_row$$50_rowObj$$ = $cell$$40_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$ROW$];
      $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$] || ($cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$] = {});
      var $column$$9_columnObj_item$$45_n$$24$$ = $cell$$40_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$COLUMN$];
      $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$][$column$$9_columnObj_item$$45_n$$24$$] = $cell$$40_newCells$$1_nodeObj$$
    }
  }
  for(var $cell$$40_newCells$$1_nodeObj$$ = [], $i$$744_rowMap$$ = {}, $cells$$3_columnMap_hiddenCategories$$11$$ = {}, $r$$63$$ = 0;$r$$63$$ < D.$DvtNBoxDataUtils$$.$getRowCount$($legend$$29_nbox$$63$$);$r$$63$$++) {
    $grouping$$4_j$$101_row$$50_rowObj$$ = D.$DvtNBoxDataUtils$$.$getRow$($legend$$29_nbox$$63$$, $r$$63$$), $i$$744_rowMap$$[$grouping$$4_j$$101_row$$50_rowObj$$[D.$DvtNBoxConstants$$.ID]] = $r$$63$$
  }
  $options$$223$$.__rowMap = $i$$744_rowMap$$;
  for(var $c$$44$$ = 0;$c$$44$$ < D.$DvtNBoxDataUtils$$.$getColumnCount$($legend$$29_nbox$$63$$);$c$$44$$++) {
    $column$$9_columnObj_item$$45_n$$24$$ = D.$DvtNBoxDataUtils$$.$getColumn$($legend$$29_nbox$$63$$, $c$$44$$), $cells$$3_columnMap_hiddenCategories$$11$$[$column$$9_columnObj_item$$45_n$$24$$[D.$DvtNBoxConstants$$.ID]] = $c$$44$$
  }
  $options$$223$$.__columnMap = $cells$$3_columnMap_hiddenCategories$$11$$;
  for($r$$63$$ = 0;$r$$63$$ < D.$DvtNBoxDataUtils$$.$getRowCount$($legend$$29_nbox$$63$$);$r$$63$$++) {
    $grouping$$4_j$$101_row$$50_rowObj$$ = D.$DvtNBoxDataUtils$$.$getRow$($legend$$29_nbox$$63$$, $r$$63$$);
    $grouping$$4_j$$101_row$$50_rowObj$$ = $grouping$$4_j$$101_row$$50_rowObj$$[D.$DvtNBoxConstants$$.ID];
    for($c$$44$$ = 0;$c$$44$$ < D.$DvtNBoxDataUtils$$.$getColumnCount$($legend$$29_nbox$$63$$);$c$$44$$++) {
      $column$$9_columnObj_item$$45_n$$24$$ = D.$DvtNBoxDataUtils$$.$getColumn$($legend$$29_nbox$$63$$, $c$$44$$), $column$$9_columnObj_item$$45_n$$24$$ = $column$$9_columnObj_item$$45_n$$24$$[D.$DvtNBoxConstants$$.ID], $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$] && $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$][$column$$9_columnObj_item$$45_n$$24$$] ? $cell$$40_newCells$$1_nodeObj$$.push($cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$101_row$$50_rowObj$$][$column$$9_columnObj_item$$45_n$$24$$]) : 
      $cell$$40_newCells$$1_nodeObj$$.push({row:$grouping$$4_j$$101_row$$50_rowObj$$, column:$column$$9_columnObj_item$$45_n$$24$$})
    }
  }
  $options$$223$$[D.$DvtNBoxConstants$$.$CELLS$] = $cell$$40_newCells$$1_nodeObj$$;
  $cellMap_nodeMap$$6_section$$10$$ = {};
  $grouping$$4_j$$101_row$$50_rowObj$$ = !1;
  for($column$$9_columnObj_item$$45_n$$24$$ = 0;$column$$9_columnObj_item$$45_n$$24$$ < D.$DvtNBoxDataUtils$$.$getNodeCount$($legend$$29_nbox$$63$$);$column$$9_columnObj_item$$45_n$$24$$++) {
    if($cell$$40_newCells$$1_nodeObj$$ = D.$DvtNBoxDataUtils$$.$getNode$($legend$$29_nbox$$63$$, $column$$9_columnObj_item$$45_n$$24$$), $cellMap_nodeMap$$6_section$$10$$[$cell$$40_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.ID]] = $column$$9_columnObj_item$$45_n$$24$$, !$grouping$$4_j$$101_row$$50_rowObj$$ && ($cell$$40_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] || $cell$$40_newCells$$1_nodeObj$$._groupCategories || $cell$$40_newCells$$1_nodeObj$$._groupLabels)) {
      $grouping$$4_j$$101_row$$50_rowObj$$ = !0
    }
  }
  $options$$223$$.__nodeMap = $cellMap_nodeMap$$6_section$$10$$;
  $options$$223$$.__grouping = "none" != $options$$223$$[D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$] ? $grouping$$4_j$$101_row$$50_rowObj$$ : !1;
  D.$DvtNBoxDataUtils$$.$getGrouping$($legend$$29_nbox$$63$$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$($legend$$29_nbox$$63$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($options$$223$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = null, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$63$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$), $options$$223$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = null, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$63$$, D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$));
  if($options$$223$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] && (0,window.isNaN)($i$$744_rowMap$$[$options$$223$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$]]) || $options$$223$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] && (0,window.isNaN)($cells$$3_columnMap_hiddenCategories$$11$$[$options$$223$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$]])) {
    $options$$223$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = null, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$63$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$), $options$$223$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = null, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$63$$, D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$)
  }
  if(($legend$$29_nbox$$63$$ = $options$$223$$[D.$DvtNBoxConstants$$.$LEGEND$]) && $legend$$29_nbox$$63$$.sections) {
    var $legendPrecedence$$ = "color iconFill iconShape iconPattern indicatorColor indicatorIconColor indicatorIconShape indicatorIconPattern".split(" ");
    $legend$$29_nbox$$63$$.sections = $legend$$29_nbox$$63$$.sections.slice(0);
    $legend$$29_nbox$$63$$.sections.sort(function($legend$$29_nbox$$63$$, $options$$223$$) {
      return D.$DvtArrayUtils$$.$getIndex$($legendPrecedence$$, $legend$$29_nbox$$63$$.type) - D.$DvtArrayUtils$$.$getIndex$($legendPrecedence$$, $options$$223$$.type)
    });
    $cells$$3_columnMap_hiddenCategories$$11$$ = $options$$223$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$];
    $legend$$29_nbox$$63$$.hideAndShowBehavior = "on";
    $legend$$29_nbox$$63$$.textStyle = $options$$223$$.styleDefaults.__legendDefaults.itemStyle;
    $legend$$29_nbox$$63$$.layout = {rowGap:2};
    $legend$$29_nbox$$63$$.symbolWidth = 16;
    $legend$$29_nbox$$63$$.symbolHeight = 16;
    for($i$$744_rowMap$$ = 0;$i$$744_rowMap$$ < $legend$$29_nbox$$63$$.sections.length;$i$$744_rowMap$$++) {
      $cellMap_nodeMap$$6_section$$10$$ = $legend$$29_nbox$$63$$.sections[$i$$744_rowMap$$];
      $cellMap_nodeMap$$6_section$$10$$.titleStyle = $options$$223$$.styleDefaults.__legendDefaults.sectionStyle;
      for($grouping$$4_j$$101_row$$50_rowObj$$ = 0;$grouping$$4_j$$101_row$$50_rowObj$$ < $cellMap_nodeMap$$6_section$$10$$.items.length;$grouping$$4_j$$101_row$$50_rowObj$$++) {
        $column$$9_columnObj_item$$45_n$$24$$ = $cellMap_nodeMap$$6_section$$10$$.items[$grouping$$4_j$$101_row$$50_rowObj$$], $column$$9_columnObj_item$$45_n$$24$$.categoryVisibility = -1 != D.$DvtArrayUtils$$.$getIndex$($cells$$3_columnMap_hiddenCategories$$11$$, $column$$9_columnObj_item$$45_n$$24$$.categories && 0 < $column$$9_columnObj_item$$45_n$$24$$.categories.length ? $column$$9_columnObj_item$$45_n$$24$$.categories[0] : $column$$9_columnObj_item$$45_n$$24$$.id) ? "hidden" : null, $column$$9_columnObj_item$$45_n$$24$$.indicatorColor && 
        ($column$$9_columnObj_item$$45_n$$24$$.color = $column$$9_columnObj_item$$45_n$$24$$.indicatorColor), $column$$9_columnObj_item$$45_n$$24$$.color || ($column$$9_columnObj_item$$45_n$$24$$.color = $options$$223$$.styleDefaults.__legendDefaults.markerColor), $column$$9_columnObj_item$$45_n$$24$$.shape && ($column$$9_columnObj_item$$45_n$$24$$.markerShape = $column$$9_columnObj_item$$45_n$$24$$.shape)
      }
    }
  }
};
D.$DvtNBoxDataUtils$$.$getColumnCount$ = function $$DvtNBoxDataUtils$$$$getColumnCount$$($nbox$$64$$) {
  return $nbox$$64$$.$getOptions$()[D.$DvtNBoxConstants$$.$COLUMNS$].length
};
D.$DvtNBoxDataUtils$$.$getRowCount$ = function $$DvtNBoxDataUtils$$$$getRowCount$$($nbox$$65$$) {
  return $nbox$$65$$.$getOptions$()[D.$DvtNBoxConstants$$.$ROWS$].length
};
D.$DvtNBoxDataUtils$$.$getColumnLabel$ = function $$DvtNBoxDataUtils$$$$getColumnLabel$$($nbox$$66$$, $colValue$$) {
  var $col$$4$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$66$$, D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$66$$, $colValue$$));
  return $col$$4$$ && $col$$4$$[D.$DvtNBoxConstants$$.$LABEL$] ? $col$$4$$[D.$DvtNBoxConstants$$.$LABEL$] : null
};
D.$DvtNBoxDataUtils$$.$getRowLabel$ = function $$DvtNBoxDataUtils$$$$getRowLabel$$($nbox$$67$$, $rowValue$$1$$) {
  var $row$$51$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$67$$, D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$67$$, $rowValue$$1$$));
  return $row$$51$$ && $row$$51$$[D.$DvtNBoxConstants$$.$LABEL$] ? $row$$51$$[D.$DvtNBoxConstants$$.$LABEL$] : null
};
D.$DvtNBoxDataUtils$$.$getCellByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellByRowColumn$$($nbox$$68$$, $cell$$41_rowValue$$2$$, $columnValue$$1$$) {
  return($cell$$41_rowValue$$2$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$68$$, D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$($nbox$$68$$, $cell$$41_rowValue$$2$$, $columnValue$$1$$))) ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$68$$, $cell$$41_rowValue$$2$$) : null
};
D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellIndexByRowColumn$$($nbox$$69$$, $rowValue$$3$$, $columnValue$$2$$) {
  return D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$69$$, $columnValue$$2$$) + D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$69$$, $rowValue$$3$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$69$$)
};
D.$DvtNBoxDataUtils$$.$getColumn$ = function $$DvtNBoxDataUtils$$$$getColumn$$($nbox$$70$$, $columnIndex$$5$$) {
  return $nbox$$70$$.$getOptions$()[D.$DvtNBoxConstants$$.$COLUMNS$][$columnIndex$$5$$]
};
D.$DvtNBoxDataUtils$$.$getRow$ = function $$DvtNBoxDataUtils$$$$getRow$$($nbox$$71$$, $rowIndex$$16$$) {
  return $nbox$$71$$.$getOptions$()[D.$DvtNBoxConstants$$.$ROWS$][$rowIndex$$16$$]
};
D.$DvtNBoxDataUtils$$.$getMaximizedRow$ = function $$DvtNBoxDataUtils$$$$getMaximizedRow$$($nbox$$72$$) {
  return $nbox$$72$$.$getOptions$()[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$]
};
D.$DvtNBoxDataUtils$$.$getMaximizedColumn$ = function $$DvtNBoxDataUtils$$$$getMaximizedColumn$$($nbox$$73$$) {
  return $nbox$$73$$.$getOptions$()[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$]
};
D.$DvtNBoxDataUtils$$.$getRowIndex$ = function $$DvtNBoxDataUtils$$$$getRowIndex$$($nbox$$74$$, $row$$52$$) {
  return $nbox$$74$$.$getOptions$().__rowMap[$row$$52$$]
};
D.$DvtNBoxDataUtils$$.$getColumnIndex$ = function $$DvtNBoxDataUtils$$$$getColumnIndex$$($nbox$$75$$, $column$$10$$) {
  return $nbox$$75$$.$getOptions$().__columnMap[$column$$10$$]
};
D.$DvtNBoxDataUtils$$.$getCell$ = function $$DvtNBoxDataUtils$$$$getCell$$($nbox$$76$$, $cellIndex$$11$$) {
  return $nbox$$76$$.$getOptions$()[D.$DvtNBoxConstants$$.$CELLS$][$cellIndex$$11$$]
};
D.$DvtNBoxDataUtils$$.$getNodeCount$ = function $$DvtNBoxDataUtils$$$$getNodeCount$$($nbox$$77$$) {
  return $nbox$$77$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$] ? $nbox$$77$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$].length : 0
};
D.$DvtNBoxDataUtils$$.$getNode$ = function $$DvtNBoxDataUtils$$$$getNode$$($nbox$$78$$, $nodeIndex$$12$$) {
  return $nbox$$78$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$][$nodeIndex$$12$$]
};
D.$DvtNBoxDataUtils$$.$getNodeIndex$ = function $$DvtNBoxDataUtils$$$$getNodeIndex$$($nbox$$79$$, $id$$239$$) {
  return $nbox$$79$$.$getOptions$().__nodeMap[$id$$239$$]
};
D.$DvtNBoxDataUtils$$.$getCellIndex$ = function $$DvtNBoxDataUtils$$$$getCellIndex$$($nbox$$80$$, $node$$276$$) {
  var $nodeRowIndex$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$80$$, $node$$276$$[D.$DvtNBoxConstants$$.$ROW$]), $nodeColumnIndex$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$80$$, $node$$276$$[D.$DvtNBoxConstants$$.$COLUMN$]), $columnCount$$15$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$80$$);
  return $nodeColumnIndex$$ + $nodeRowIndex$$ * $columnCount$$15$$
};
D.$DvtNBoxDataUtils$$.$getIcon$ = function $$DvtNBoxDataUtils$$$$getIcon$$($nbox$$81$$, $node$$277$$) {
  return $node$$277$$[D.$DvtNBoxConstants$$.$ICON$] ? D.$DvtNBoxStyleUtils$$.$getStyledIcon$($nbox$$81$$, $node$$277$$[D.$DvtNBoxConstants$$.$ICON$]) : null
};
D.$DvtNBoxDataUtils$$.$getIndicatorIcon$ = function $$DvtNBoxDataUtils$$$$getIndicatorIcon$$($nbox$$82$$, $node$$278$$) {
  return $node$$278$$[D.$DvtNBoxConstants$$.$INDICATOR_ICON$] ? D.$DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$($nbox$$82$$, $node$$278$$[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) : null
};
D.$DvtNBoxDataUtils$$.$getSelectedItems$ = function $$DvtNBoxDataUtils$$$$getSelectedItems$$($nbox$$83$$) {
  return $nbox$$83$$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION$]
};
D.$DvtNBoxDataUtils$$.$setSelectedItems$ = function $$DvtNBoxDataUtils$$$$setSelectedItems$$($nbox$$84$$, $selectedItems$$4$$) {
  $nbox$$84$$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION$] = $selectedItems$$4$$
};
D.$DvtNBoxDataUtils$$.$getHighlightedItems$ = function $$DvtNBoxDataUtils$$$$getHighlightedItems$$($nbox$$85$$) {
  var $items$$29$$, $categories$$23_n$$25$$ = $nbox$$85$$.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$];
  if($categories$$23_n$$25$$ && 0 < $categories$$23_n$$25$$.length) {
    $items$$29$$ = [];
    for($categories$$23_n$$25$$ = 0;$categories$$23_n$$25$$ < D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$85$$);$categories$$23_n$$25$$++) {
      var $node$$279$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$85$$, $categories$$23_n$$25$$);
      D.$DvtNBoxDataUtils$$.$isNodeHighlighted$($nbox$$85$$, $node$$279$$) && $items$$29$$.push($node$$279$$)
    }
  }
  return $items$$29$$
};
D.$DvtNBoxDataUtils$$.$getGrouping$ = function $$DvtNBoxDataUtils$$$$getGrouping$$($nbox$$86$$) {
  return $nbox$$86$$.$getOptions$().__grouping
};
D.$DvtNBoxDataUtils$$.$getGroupAttributes$ = function $$DvtNBoxDataUtils$$$$getGroupAttributes$$($nbox$$87$$) {
  return $nbox$$87$$.$getOptions$()[D.$DvtNBoxConstants$$.$GROUP_ATTRIBUTES$]
};
D.$DvtNBoxDataUtils$$.$getGroupBehavior$ = function $$DvtNBoxDataUtils$$$$getGroupBehavior$$($nbox$$88$$) {
  return $nbox$$88$$.$getOptions$()[D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$]
};
D.$DvtNBoxDataUtils$$.$getNodeGroupId$ = function $$DvtNBoxDataUtils$$$$getNodeGroupId$$($categories$$24_node$$280$$) {
  return $categories$$24_node$$280$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] ? $categories$$24_node$$280$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] : ($categories$$24_node$$280$$ = $categories$$24_node$$280$$._groupCategories) && 0 < $categories$$24_node$$280$$.length ? $categories$$24_node$$280$$.join(";") : null
};
D.$DvtNBoxDataUtils$$.$getXPercentage$ = function $$DvtNBoxDataUtils$$$$getXPercentage$$($nbox$$89$$, $node$$281$$) {
  if(!(0,window.isNaN)($node$$281$$[D.$DvtNBoxConstants$$.$X_PERCENTAGE$])) {
    return $node$$281$$[D.$DvtNBoxConstants$$.$X_PERCENTAGE$]
  }
  var $columnCount$$16$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$89$$);
  return(D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$89$$, $node$$281$$[D.$DvtNBoxConstants$$.$COLUMN$]) + 0.5) / $columnCount$$16$$
};
D.$DvtNBoxDataUtils$$.$getYPercentage$ = function $$DvtNBoxDataUtils$$$$getYPercentage$$($nbox$$90$$, $node$$282$$) {
  if(!(0,window.isNaN)($node$$282$$[D.$DvtNBoxConstants$$.$Y_PERCENTAGE$])) {
    return $node$$282$$[D.$DvtNBoxConstants$$.$Y_PERCENTAGE$]
  }
  var $rowCount$$20$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$90$$);
  return(D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$90$$, $node$$282$$[D.$DvtNBoxConstants$$.$ROW$]) + 0.5) / $rowCount$$20$$
};
D.$DvtNBoxDataUtils$$.$getOtherThreshold$ = function $$DvtNBoxDataUtils$$$$getOtherThreshold$$($nbox$$91$$) {
  return $nbox$$91$$.$getOptions$()[D.$DvtNBoxConstants$$.$OTHER_THRESHOLD$]
};
D.$DvtNBoxDataUtils$$.$getOtherColor$ = function $$DvtNBoxDataUtils$$$$getOtherColor$$($nbox$$92$$) {
  return $nbox$$92$$.$getOptions$()[D.$DvtNBoxConstants$$.$OTHER_COLOR$]
};
D.$DvtNBoxDataUtils$$.$getDrawer$ = function $$DvtNBoxDataUtils$$$$getDrawer$$($nbox$$93$$) {
  return $nbox$$93$$.$getOptions$()[D.$DvtNBoxConstants$$.$DRAWER$]
};
D.$DvtNBoxDataUtils$$.$getCategoryNode$ = function $$DvtNBoxDataUtils$$$$getCategoryNode$$($nbox$$94$$, $id$$240$$) {
  var $cell$$42_groupBehavior$$7$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$94$$), $groups$$14$$ = $nbox$$94$$.$getOptions$().__groups, $groupId$$25$$ = $id$$240$$;
  $cell$$42_groupBehavior$$7$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cell$$42_groupBehavior$$7$$ = $id$$240$$.substring(0, $id$$240$$.indexOf(":")), $groupId$$25$$ = $id$$240$$.substring($id$$240$$.indexOf(":") + 1), $groups$$14$$ = $groups$$14$$[$cell$$42_groupBehavior$$7$$]);
  return $groups$$14$$ ? $groups$$14$$[$groupId$$25$$] : null
};
D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$ = function $$DvtNBoxDataUtils$$$$getCategoryNodeLabels$$($nbox$$95$$, $categoryNode$$6$$) {
  if($categoryNode$$6$$.__labels) {
    return $categoryNode$$6$$.__labels
  }
  var $node$$283$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$95$$, $categoryNode$$6$$.nodeIndices[0]);
  if($node$$283$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$]) {
    return $categoryNode$$6$$.__labels = [$node$$283$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$]]
  }
  $categoryNode$$6$$.__labels = [];
  if($node$$283$$._groupCategories) {
    for(var $labelMap$$ = $nbox$$95$$.$getOptions$()._groupLabels, $i$$745$$ = 0;$i$$745$$ < $node$$283$$._groupCategories.length;$i$$745$$++) {
      $categoryNode$$6$$.__labels[$i$$745$$] = $labelMap$$ && $labelMap$$[$node$$283$$._groupCategories[$i$$745$$]] ? $labelMap$$[$node$$283$$._groupCategories[$i$$745$$]] : $node$$283$$._groupCategories[$i$$745$$]
    }
  }
  return $categoryNode$$6$$.__labels
};
D.$DvtNBoxDataUtils$$.$setDisplayable$ = function $$DvtNBoxDataUtils$$$$setDisplayable$$($displayables$$26_nbox$$96$$, $dataObject$$, $displayable$$79$$, $fullKey$$2_key$$122$$) {
  $displayables$$26_nbox$$96$$ = $displayables$$26_nbox$$96$$.$getDisplayables$();
  $fullKey$$2_key$$122$$ = $fullKey$$2_key$$122$$ ? "__displayable:" + $fullKey$$2_key$$122$$ : "__displayable";
  $dataObject$$[$fullKey$$2_key$$122$$] ? $displayables$$26_nbox$$96$$[$dataObject$$[$fullKey$$2_key$$122$$]] = $displayable$$79$$ : ($dataObject$$[$fullKey$$2_key$$122$$] = $displayables$$26_nbox$$96$$.length, $displayables$$26_nbox$$96$$.push($displayable$$79$$))
};
D.$DvtNBoxDataUtils$$.$getDisplayable$ = function $$DvtNBoxDataUtils$$$$getDisplayable$$($displayables$$27_nbox$$97$$, $dataObject$$1_index$$220$$, $key$$123$$) {
  if(!$dataObject$$1_index$$220$$) {
    return null
  }
  $dataObject$$1_index$$220$$ = $dataObject$$1_index$$220$$[$key$$123$$ ? "__displayable:" + $key$$123$$ : "__displayable"];
  $displayables$$27_nbox$$97$$ = $displayables$$27_nbox$$97$$.$getDisplayables$();
  return null == $dataObject$$1_index$$220$$ ? null : $displayables$$27_nbox$$97$$[$dataObject$$1_index$$220$$]
};
D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$ = function $$DvtNBoxDataUtils$$$$isMaximizeEnabled$$($nbox$$98$$) {
  return"off" != $nbox$$98$$.$getOptions$().cellMaximize
};
D.$DvtNBoxDataUtils$$.$getCellContent$ = function $$DvtNBoxDataUtils$$$$getCellContent$$($nbox$$99$$) {
  return"counts" == $nbox$$99$$.$getOptions$().cellContent ? "counts" : "auto"
};
D.$DvtNBoxDataUtils$$.$isCellMinimized$ = function $$DvtNBoxDataUtils$$$$isCellMinimized$$($nbox$$100$$, $cellIndex$$12$$) {
  var $maximizedRow$$8$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$100$$), $maximizedColumn$$8$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$100$$);
  if(!$maximizedRow$$8$$ && !$maximizedColumn$$8$$) {
    return!1
  }
  var $cell$$43_cellColumn$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$100$$, $cellIndex$$12$$), $cellRow$$ = $cell$$43_cellColumn$$[D.$DvtNBoxConstants$$.$ROW$], $cell$$43_cellColumn$$ = $cell$$43_cellColumn$$[D.$DvtNBoxConstants$$.$COLUMN$];
  return $maximizedRow$$8$$ && $maximizedColumn$$8$$ ? $maximizedRow$$8$$ != $cellRow$$ || $maximizedColumn$$8$$ != $cell$$43_cellColumn$$ : $maximizedRow$$8$$ != $cellRow$$ && $maximizedColumn$$8$$ != $cell$$43_cellColumn$$
};
D.$DvtNBoxDataUtils$$.$isCellMaximized$ = function $$DvtNBoxDataUtils$$$$isCellMaximized$$($nbox$$101$$, $cellIndex$$13$$) {
  var $maximizedRow$$9$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$101$$), $maximizedColumn$$9$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$101$$), $cell$$44$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$101$$, $cellIndex$$13$$), $cellColumn$$1$$ = $cell$$44$$[D.$DvtNBoxConstants$$.$COLUMN$];
  return $maximizedRow$$9$$ == $cell$$44$$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$9$$ == $cellColumn$$1$$
};
D.$DvtNBoxDataUtils$$.$getLegend$ = function $$DvtNBoxDataUtils$$$$getLegend$$($nbox$$102$$) {
  return $nbox$$102$$.$getOptions$()._legend
};
D.$DvtNBoxDataUtils$$.$isNodeHidden$ = function $$DvtNBoxDataUtils$$$$isNodeHidden$$($nbox$$103$$, $node$$284$$) {
  var $options$$224$$ = $nbox$$103$$.$getOptions$();
  $options$$224$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$] && !$options$$224$$.__hiddenMap && ($options$$224$$.__hiddenMap = D.$DvtArrayUtils$$.$createBooleanMap$($options$$224$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$]));
  return D.$DvtArrayUtils$$.$hasAnyMapItem$($options$$224$$.__hiddenMap, $node$$284$$[D.$DvtNBoxConstants$$.$CATEGORIES$])
};
D.$DvtNBoxDataUtils$$.$isNodeHighlighted$ = function $$DvtNBoxDataUtils$$$$isNodeHighlighted$$($nbox$$104$$, $node$$285$$) {
  var $options$$225$$ = $nbox$$104$$.$getOptions$();
  $options$$225$$[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$] && !$options$$225$$.__highlightedMap && ($options$$225$$.__highlightedMap = D.$DvtArrayUtils$$.$createBooleanMap$($options$$225$$[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$]));
  return"all" == $options$$225$$[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllMapItems$($options$$225$$.__highlightedMap, $node$$285$$[D.$DvtNBoxConstants$$.$CATEGORIES$]) : D.$DvtArrayUtils$$.$hasAnyMapItem$($options$$225$$.__highlightedMap, $node$$285$$[D.$DvtNBoxConstants$$.$CATEGORIES$])
};
D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$ = function $$DvtNBoxDataUtils$$$$getNodeScrollableContainer$$($nbox$$105$$, $node$$286$$) {
  if(!$node$$286$$) {
    return null
  }
  var $cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($nbox$$105$$);
  if($cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$ && ($cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$105$$, $cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$))) {
    return $cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$.$getChildContainer$()
  }
  $cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$105$$, $node$$286$$.getData());
  return D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$105$$, $cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$) ? ($cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$105$$, $cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$), D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$105$$, $cell$$45_cellIndex$$14_drawer$$7_drawerData$$7$$).$getChildContainer$()) : null
};
D.$DvtNBoxDataUtils$$.$getNodeLabel$ = function $$DvtNBoxDataUtils$$$$getNodeLabel$$($nbox$$106$$, $node$$287$$) {
  if(!$node$$287$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    return null
  }
  var $halign$$11_label$$70$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$106$$, $node$$287$$, D.$DvtNBoxConstants$$.$LABEL$);
  if($halign$$11_label$$70$$) {
    return $halign$$11_label$$70$$
  }
  $halign$$11_label$$70$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$106$$.$getCtx$()) ? "right" : "left";
  $halign$$11_label$$70$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$106$$.$getCtx$(), $node$$287$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($nbox$$106$$), $halign$$11_label$$70$$, "middle");
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$106$$, $node$$287$$, $halign$$11_label$$70$$, D.$DvtNBoxConstants$$.$LABEL$);
  return $halign$$11_label$$70$$
};
D.$DvtNBoxDataUtils$$.$getNodeSecondaryLabel$ = function $$DvtNBoxDataUtils$$$$getNodeSecondaryLabel$$($nbox$$107$$, $node$$288$$) {
  if(!$node$$288$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$]) {
    return null
  }
  var $halign$$12_secondaryLabel$$4$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$107$$, $node$$288$$, D.$DvtNBoxConstants$$.$SECONDARY_LABEL$);
  if($halign$$12_secondaryLabel$$4$$) {
    return $halign$$12_secondaryLabel$$4$$
  }
  $halign$$12_secondaryLabel$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$107$$.$getCtx$()) ? "right" : "left";
  $halign$$12_secondaryLabel$$4$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$107$$.$getCtx$(), $node$$288$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($nbox$$107$$), $halign$$12_secondaryLabel$$4$$, "middle");
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$107$$, $node$$288$$, $halign$$12_secondaryLabel$$4$$, D.$DvtNBoxConstants$$.$SECONDARY_LABEL$);
  return $halign$$12_secondaryLabel$$4$$
};
D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$ = function $$DvtNBoxDataUtils$$$$fireSetPropertyEvent$$($nbox$$108$$, $key$$124$$) {
  var $event$$596$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$596$$, $key$$124$$, null);
  $nbox$$108$$.$processEvent$($event$$596$$)
};
D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$ = function $$DvtNBoxDataUtils$$$$getMaximizedCellIndex$$($nbox$$109$$) {
  var $columnCount$$17_maximizedCellIndex$$2$$ = null, $maximizedRow$$10$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$109$$), $maximizedColumn$$10$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$109$$);
  $maximizedRow$$10$$ && $maximizedColumn$$10$$ && ($columnCount$$17_maximizedCellIndex$$2$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$109$$), $columnCount$$17_maximizedCellIndex$$2$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$109$$, $maximizedColumn$$10$$) + $columnCount$$17_maximizedCellIndex$$2$$ * D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$109$$, $maximizedRow$$10$$));
  return $columnCount$$17_maximizedCellIndex$$2$$
};
D.$DvtNBoxDataUtils$$.$isDrawerSelected$ = function $$DvtNBoxDataUtils$$$$isDrawerSelected$$($nbox$$110$$, $categoryNode$$7$$) {
  var $i$$746_selected$$37$$ = !1, $nodeIndices$$4_selectedItems$$5$$ = D.$DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$110$$);
  if($nodeIndices$$4_selectedItems$$5$$) {
    for(var $selectedMap$$4$$ = {}, $i$$746_selected$$37$$ = 0;$i$$746_selected$$37$$ < $nodeIndices$$4_selectedItems$$5$$.length;$i$$746_selected$$37$$++) {
      $selectedMap$$4$$[$nodeIndices$$4_selectedItems$$5$$[$i$$746_selected$$37$$]] = !0
    }
    for(var $nodeIndices$$4_selectedItems$$5$$ = $categoryNode$$7$$.getData().nodeIndices, $i$$746_selected$$37$$ = !0, $j$$102$$ = 0;$j$$102$$ < $nodeIndices$$4_selectedItems$$5$$.length;$j$$102$$++) {
      var $node$$289$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$110$$, $nodeIndices$$4_selectedItems$$5$$[$j$$102$$]);
      if(!$selectedMap$$4$$[$node$$289$$[D.$DvtNBoxConstants$$.ID]]) {
        $i$$746_selected$$37$$ = !1;
        break
      }
    }
  }
  return $i$$746_selected$$37$$
};
D.$DvtNBoxDataUtils$$.$buildAriaDesc$ = function $$DvtNBoxDataUtils$$$$buildAriaDesc$$($nbox$$111_nodeCount$$13$$, $object$$17$$, $baseDesc_datatip$$19$$, $selected$$38$$) {
  $baseDesc_datatip$$19$$ = $object$$17$$ instanceof D.$DvtNBoxCategoryNode$$ || $object$$17$$ instanceof D.$DvtNBoxDrawer$$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "GROUP_NODE"), $baseDesc_datatip$$19$$]) : $baseDesc_datatip$$19$$;
  var $states$$13$$ = [];
  $selected$$38$$ ? $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_SELECTED")) : $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_UNSELECTED"));
  $object$$17$$ instanceof D.$DvtNBoxCategoryNode$$ ? ($nbox$$111_nodeCount$$13$$ = $object$$17$$.getData().nodeIndices.length, $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_COLLAPSED")), $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), $nbox$$111_nodeCount$$13$$]))) : $object$$17$$ instanceof D.$DvtNBoxDrawer$$ && ($nbox$$111_nodeCount$$13$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$111_nodeCount$$13$$, 
  $object$$17$$.getData()[D.$DvtNBoxConstants$$.ID]).nodeIndices.length, $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_EXPANDED")), $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), $nbox$$111_nodeCount$$13$$])));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($baseDesc_datatip$$19$$, $states$$13$$)
};
D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$ = function $$DvtNBoxDataUtils$$$$getFirstNavigableNode$$($nbox$$112$$, $container$$167$$) {
  var $navigable$$18$$ = null;
  if(0 < $container$$167$$.$getNumChildren$()) {
    var $navigable$$18$$ = $container$$167$$.$getChildAt$(0), $prevData$$;
    do {
      $navigable$$18$$ instanceof D.$DvtNBoxNode$$ ? $prevData$$ = $navigable$$18$$.getData().__prev : $navigable$$18$$ instanceof D.$DvtNBoxNodeOverflow$$ && ($prevData$$ = $navigable$$18$$.__prev), $navigable$$18$$ = $prevData$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$112$$, $prevData$$) : $navigable$$18$$
    }while($prevData$$)
  }
  return $navigable$$18$$
};
D.$DvtNBoxDataUtils$$.$getLastNavigableNode$ = function $$DvtNBoxDataUtils$$$$getLastNavigableNode$$($nbox$$113$$, $container$$168$$) {
  var $navigable$$19$$ = null, $childCnt$$2_nextData$$ = $container$$168$$.$getNumChildren$();
  if(0 < $childCnt$$2_nextData$$) {
    $navigable$$19$$ = $container$$168$$.$getChildAt$($childCnt$$2_nextData$$ - 1);
    do {
      $navigable$$19$$ = ($childCnt$$2_nextData$$ = $navigable$$19$$ instanceof D.$DvtNBoxNode$$ ? $navigable$$19$$.getData().__next : null) ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$113$$, $childCnt$$2_nextData$$) : $navigable$$19$$
    }while($childCnt$$2_nextData$$)
  }
  return $navigable$$19$$
};
D.$DvtNBoxDataUtils$$.$getNextNavigableNode$ = function $$DvtNBoxDataUtils$$$$getNextNavigableNode$$($nbox$$114$$, $object$$18$$, $bNext$$7_event$$597$$) {
  $bNext$$7_event$$597$$ = 39 == $bNext$$7_event$$597$$.keyCode || 40 == $bNext$$7_event$$597$$.keyCode ? !0 : !1;
  var $nextData$$1$$;
  $object$$18$$ instanceof D.$DvtNBoxNode$$ ? $nextData$$1$$ = $bNext$$7_event$$597$$ ? $object$$18$$.getData().__next : $object$$18$$.getData().__prev : $object$$18$$ instanceof D.$DvtNBoxNodeOverflow$$ && ($nextData$$1$$ = $bNext$$7_event$$597$$ ? null : $object$$18$$.__prev);
  return $nextData$$1$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$114$$, $nextData$$1$$) : $object$$18$$
};
D.$DvtNBoxStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxStyleUtils$$, D.$DvtObj$$, "DvtNBoxStyleUtils");
D.$DvtNBoxStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDisplay$$($animationOnDisplay$$3_nbox$$115$$) {
  if(!$animationOnDisplay$$3_nbox$$115$$.$_animationAllowed$) {
    return"none"
  }
  $animationOnDisplay$$3_nbox$$115$$ = $animationOnDisplay$$3_nbox$$115$$.$getOptions$()[D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$];
  "auto" == $animationOnDisplay$$3_nbox$$115$$ && ($animationOnDisplay$$3_nbox$$115$$ = D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$);
  return $animationOnDisplay$$3_nbox$$115$$
};
D.$DvtNBoxStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDataChange$$($nbox$$116$$) {
  return!$nbox$$116$$.$_animationAllowed$ ? "none" : $nbox$$116$$.$getOptions$()[D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$]
};
D.$DvtNBoxStyleUtils$$.$getAnimationDuration$ = function $$DvtNBoxStyleUtils$$$$getAnimationDuration$$($nbox$$117$$) {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)($nbox$$117$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ANIMATION_DURATION$]) / 1E3
};
D.$DvtNBoxStyleUtils$$.$getColumnLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getColumnLabelStyle$$($nbox$$118$$, $columnIndex$$7$$) {
  var $defaults$$1$$ = $nbox$$118$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLUMN_LABEL_STYLE$], $column$$11$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$118$$, $columnIndex$$7$$);
  return $column$$11$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($column$$11$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$1$$) : $defaults$$1$$
};
D.$DvtNBoxStyleUtils$$.$getRowLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getRowLabelStyle$$($nbox$$119$$, $rowIndex$$18$$) {
  var $defaults$$2$$ = $nbox$$119$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ROW_LABEL_STYLE$], $row$$53$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$119$$, $rowIndex$$18$$);
  return $row$$53$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($row$$53$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$2$$) : $defaults$$2$$
};
D.$DvtNBoxStyleUtils$$.$getCellStyle$ = function $$DvtNBoxStyleUtils$$$$getCellStyle$$($nbox$$120$$, $cellIndex$$15$$) {
  var $defaults$$3_options$$228$$ = $nbox$$120$$.$getOptions$(), $styleKey$$ = D.$DvtNBoxConstants$$.$STYLE$, $cell$$46_maximizedRow$$11$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$120$$), $maximizedColumn$$11$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$120$$);
  if(D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$120$$, $cellIndex$$15$$)) {
    $styleKey$$ = "minimizedStyle"
  }else {
    if(($cell$$46_maximizedRow$$11$$ || $maximizedColumn$$11$$) && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$120$$, $cellIndex$$15$$)) {
      $styleKey$$ = "maximizedStyle"
    }
  }
  $defaults$$3_options$$228$$ = $defaults$$3_options$$228$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][$styleKey$$];
  $cell$$46_maximizedRow$$11$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$120$$, $cellIndex$$15$$);
  return $cell$$46_maximizedRow$$11$$[$styleKey$$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($cell$$46_maximizedRow$$11$$[$styleKey$$]), $defaults$$3_options$$228$$) : $defaults$$3_options$$228$$
};
D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellLabelStyle$$($nbox$$121$$, $cellIndex$$16$$) {
  var $defaults$$4$$ = $nbox$$121$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_STYLE$], $cell$$47$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$121$$, $cellIndex$$16$$);
  return $cell$$47$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($cell$$47$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$4$$) : $defaults$$4$$
};
D.$DvtNBoxStyleUtils$$.$getCellShowCount$ = function $$DvtNBoxStyleUtils$$$$getCellShowCount$$($nbox$$122$$, $cell$$48$$) {
  return $cell$$48$$[D.$DvtNBoxConstants$$.$SHOW_COUNT$] ? $cell$$48$$[D.$DvtNBoxConstants$$.$SHOW_COUNT$] : $nbox$$122$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$SHOW_COUNT$]
};
D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellCountLabelStyle$$($nbox$$123$$) {
  return $nbox$$123$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].countLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellBodyCountLabelStyle$$($nbox$$124$$) {
  return $nbox$$124$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].bodyCountLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getCellDropTargetStyle$ = function $$DvtNBoxStyleUtils$$$$getCellDropTargetStyle$$($nbox$$125$$) {
  return $nbox$$125$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].dropTargetStyle
};
D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeLabelStyle$$($nbox$$126$$) {
  return $nbox$$126$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeSecondaryLabelStyle$$($nbox$$127$$) {
  return $nbox$$127$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$SECONDARY_LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getNodeColor$ = function $$DvtNBoxStyleUtils$$$$getNodeColor$$($nbox$$128$$, $node$$292$$) {
  return $node$$292$$[D.$DvtNBoxConstants$$.$COLOR$] ? $node$$292$$[D.$DvtNBoxConstants$$.$COLOR$] : $nbox$$128$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderColor$$($nbox$$129$$, $node$$293$$) {
  var $color$$73$$ = $node$$293$$[D.$DvtNBoxConstants$$.$BORDER_COLOR$] ? $node$$293$$[D.$DvtNBoxConstants$$.$BORDER_COLOR$] : $nbox$$129$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_COLOR$];
  return $color$$73$$ ? $color$$73$$ : null
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderWidth$$($nbox$$130$$, $node$$294$$) {
  var $width$$121$$ = $node$$294$$[D.$DvtNBoxConstants$$.$BORDER_WIDTH$] ? $node$$294$$[D.$DvtNBoxConstants$$.$BORDER_WIDTH$] : $nbox$$130$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_WIDTH$];
  return $width$$121$$ ? $width$$121$$ : null
};
D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getNodeIndicatorColor$$($nbox$$131$$, $node$$295$$) {
  return $node$$295$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$] ? $node$$295$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$] : $nbox$$131$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getStyledIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIcon$$($nbox$$132$$, $icon$$47$$) {
  return D.$DvtJSONUtils$$.$merge$($icon$$47$$, $nbox$$132$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIndicatorIcon$$($nbox$$133$$, $indicatorIcon$$8$$) {
  return D.$DvtJSONUtils$$.$merge$($indicatorIcon$$8$$, $nbox$$133$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$ = function $$DvtNBoxStyleUtils$$$$getFadedNodeAlpha$$($nbox$$134$$) {
  return $nbox$$134$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].alphaFade
};
D.$DvtNBoxStyleUtils$$.$getScrollbarStyleMap$ = function $$DvtNBoxStyleUtils$$$$getScrollbarStyleMap$$($nbox$$135$$) {
  return $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__scrollbar
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeColor$$($nbox$$136$$, $categoryNode$$8$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$136$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$136$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$136$$).indexOf("color")) {
    return $nbox$$136$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  if($categoryNode$$8$$.otherNode) {
    return D.$DvtNBoxDataUtils$$.$getOtherColor$($nbox$$136$$)
  }
  var $nodeIndices$$5$$ = $categoryNode$$8$$.nodeIndices, $color$$74$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$136$$, $nodeIndices$$5$$[0])[D.$DvtNBoxConstants$$.$COLOR$];
  if(!$color$$74$$) {
    return $nbox$$136$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  for(var $i$$747$$ = 1;$i$$747$$ < $nodeIndices$$5$$.length;$i$$747$$++) {
    var $node$$296$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$136$$, $nodeIndices$$5$$[$i$$747$$]);
    if($color$$74$$ != $node$$296$$[D.$DvtNBoxConstants$$.$COLOR$]) {
      return $nbox$$136$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
    }
  }
  return $color$$74$$
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeIndicatorColor$$($nbox$$137$$, $categoryNode$$9$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$137$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$137$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$137$$).indexOf("indicatorColor")) {
    return null
  }
  var $nodeIndices$$6$$ = $categoryNode$$9$$.nodeIndices, $color$$75$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$137$$, $nodeIndices$$6$$[0])[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$];
  if(!$color$$75$$) {
    return $nbox$$137$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
  }
  for(var $i$$748$$ = 1;$i$$748$$ < $nodeIndices$$6$$.length;$i$$748$$++) {
    var $node$$297$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$137$$, $nodeIndices$$6$$[$i$$748$$]);
    if($color$$75$$ != $node$$297$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]) {
      return $nbox$$137$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
    }
  }
  return $color$$75$$
};
D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledCategoryIndicatorIcon$$($nbox$$138$$, $categoryNode$$10$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$138$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$).indexOf("indicatorIconShape") && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$).indexOf("indicatorIconColor") && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$).indexOf("indicatorIconPattern")) {
    return null
  }
  var $indicatorIcon$$9$$ = {}, $nodeIndices$$7$$ = $categoryNode$$10$$.nodeIndices, $baseIcon_pattern$$13$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$138$$, $nodeIndices$$7$$[0])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$];
  if(!$baseIcon_pattern$$13$$) {
    return null
  }
  var $match$$7$$ = !0;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$).indexOf("indicatorIconShape")) {
    for(var $color$$76_k$$9_shape$$70$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$SHAPE$], $i$$749_j$$103$$ = 1;$i$$749_j$$103$$ < $nodeIndices$$7$$.length;$i$$749_j$$103$$++) {
      var $nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$138$$, $nodeIndices$$7$$[$i$$749_j$$103$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$];
      $nodeIcon$$ && $color$$76_k$$9_shape$$70$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$SHAPE$] && ($match$$7$$ = !1)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$SHAPE$] = $match$$7$$ ? $color$$76_k$$9_shape$$70$$ : $nbox$$138$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$SHAPE$]
  }
  $match$$7$$ = !0;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$).indexOf("indicatorIconColor")) {
    $color$$76_k$$9_shape$$70$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$COLOR$];
    for($i$$749_j$$103$$ = 1;$i$$749_j$$103$$ < $nodeIndices$$7$$.length;$i$$749_j$$103$$++) {
      ($nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$138$$, $nodeIndices$$7$$[$i$$749_j$$103$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) && $color$$76_k$$9_shape$$70$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$COLOR$] && ($match$$7$$ = !1)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$COLOR$] = $match$$7$$ ? $color$$76_k$$9_shape$$70$$ : $nbox$$138$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  $match$$7$$ = !0;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$138$$).indexOf("indicatorIconPattern")) {
    $baseIcon_pattern$$13$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$PATTERN$];
    for($color$$76_k$$9_shape$$70$$ = 1;$color$$76_k$$9_shape$$70$$ < $nodeIndices$$7$$.length;$color$$76_k$$9_shape$$70$$++) {
      ($nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$138$$, $nodeIndices$$7$$[$color$$76_k$$9_shape$$70$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) && $baseIcon_pattern$$13$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$PATTERN$] && ($match$$7$$ = !1)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$PATTERN$] = $match$$7$$ ? $baseIcon_pattern$$13$$ : $nbox$$138$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$PATTERN$]
  }
  return D.$DvtJSONUtils$$.$merge$($indicatorIcon$$9$$, $nbox$$138$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getDrawerBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerBackground$$($nbox$$139$$) {
  return $nbox$$139$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.background
};
D.$DvtNBoxStyleUtils$$.$getDrawerHeaderBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerHeaderBackground$$($nbox$$140$$) {
  return $nbox$$140$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.headerBackground
};
D.$DvtNBoxStyleUtils$$.$getDrawerBorderColor$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderColor$$($nbox$$141$$) {
  return $nbox$$141$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$BORDER_COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderRadius$$($nbox$$142$$) {
  return $nbox$$142$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$BORDER_RADIUS$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerLabelStyle$$($nbox$$143$$) {
  return $nbox$$143$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountLabelStyle$$($nbox$$144$$) {
  return $nbox$$144$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.countLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountBorderRadius$$($nbox$$145$$) {
  return $nbox$$145$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.countBorderRadius
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeLabelStyle$$($nbox$$146$$) {
  return $nbox$$146$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__categoryNodeDefaults.labelStyle
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderRadius$$($nbox$$147$$) {
  return $nbox$$147$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_RADIUS$]
};
D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$ = function $$DvtNBoxStyleUtils$$$$getNodeHoverColor$$($nbox$$148$$) {
  return $nbox$$148$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].hoverColor
};
D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$ = function $$DvtNBoxStyleUtils$$$$getNodeSelectionColor$$($nbox$$149$$) {
  return $nbox$$149$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].selectionColor
};
D.$DvtNBoxStyleUtils$$.$getLabelHalign$ = function $$DvtNBoxStyleUtils$$$$getLabelHalign$$($nbox$$150$$, $data$$88$$) {
  var $halign$$13$$ = $data$$88$$[D.$DvtNBoxConstants$$.$LABEL_HALIGN$];
  $halign$$13$$ || ($halign$$13$$ = $nbox$$150$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_HALIGN$]);
  var $rtl$$37$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$150$$.$getCtx$());
  return"end" == $halign$$13$$ ? $rtl$$37$$ ? "left" : "right" : "center" == $halign$$13$$ ? "center" : $rtl$$37$$ ? "right" : "left"
};

  return D;
});