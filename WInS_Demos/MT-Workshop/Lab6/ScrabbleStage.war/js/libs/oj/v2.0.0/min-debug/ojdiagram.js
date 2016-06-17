/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtDiagram"], function($oj$$38$$, $$$$36$$, $comp$$8$$, $base$$7$$, $dvt$$4$$) {
  $oj$$38$$.$__registerWidget$("oj.ojDiagram", $$$$36$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_Render$:function($isResize$$1$$) {
    this.options._logger = $oj$$38$$.$Logger$;
    this.options._templateFunction && (this.options.renderer = this.$_getTemplateRenderer$(this.options._templateFunction));
    this.options.renderer && (this.options._contextHandler = this.$_getContextHandler$());
    return this._super($isResize$$1$$);
  }, $_getTemplateRenderer$:function($templateFunction$$) {
    var $thisRef$$ = this;
    return function($context$$110_elem$$90$$) {
      var $dummyDiv$$ = document.createElement("div");
      $dummyDiv$$.style.display = "none";
      $dummyDiv$$.$_dvtcontext$ = $thisRef$$.$_context$;
      $thisRef$$.element.append($dummyDiv$$);
      $templateFunction$$({parentElement:$dummyDiv$$, data:$context$$110_elem$$90$$.data});
      return($context$$110_elem$$90$$ = $dummyDiv$$.children[0]) && "http://www.w3.org/2000/svg" === $context$$110_elem$$90$$.namespaceURI ? ($$$$36$$($dummyDiv$$).remove(), $context$$110_elem$$90$$) : $context$$110_elem$$90$$ ? $thisRef$$.$_GetDvtComponent$($context$$110_elem$$90$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$1$$ = this;
    return function($parentElement$$8$$, $rootElement$$, $data$$153$$, $state$$11$$, $previousState$$) {
      return{component:$oj$$38$$.Components.$getWidgetConstructor$($thisRef$$1$$.element), parentElement:$parentElement$$8$$, rootElement:$rootElement$$, data:$data$$153$$, state:$state$$11$$, previousState:$previousState$$, id:$data$$153$$.id, type:"node", label:$data$$153$$.label};
    };
  }, renderDefaultHover:function($context$$112$$) {
    $context$$112$$.previousState && $context$$112$$.state.hovered == $context$$112$$.previousState.hovered || this.$_GetDvtComponent$(this.element).processDefaultHoverEffect($context$$112$$.id, $context$$112$$.state.hovered);
  }, renderDefaultSelection:function($context$$113$$) {
    $context$$113$$.previousState && $context$$113$$.state.selected == $context$$113$$.previousState.selected || this.$_GetDvtComponent$(this.element).processDefaultSelectionEffect($context$$113$$.id, $context$$113$$.state.selected);
  }, renderDefaultFocus:function($context$$114$$) {
    $context$$114$$.previousState && $context$$114$$.state.focused == $context$$114$$.previousState.focused || this.$_GetDvtComponent$(this.element).processDefaultFocusEffect($context$$114$$.id, $context$$114$$.state.focused);
  }, $_CreateDvtComponent$:function($context$$115$$, $callback$$107$$, $callbackObj$$7$$) {
    return $dvt$$4$$.DvtDiagram.newInstance($context$$115$$, $callback$$107$$, $callbackObj$$7$$);
  }, $_ConvertLocatorToSubId$:function($locator$$37$$) {
    var $subId$$42$$ = $locator$$37$$.subId;
    "oj-diagram-link" == $subId$$42$$ ? $subId$$42$$ = "link[" + $locator$$37$$.index + "]" : "oj-diagram-node" == $subId$$42$$ ? $subId$$42$$ = "node[" + $locator$$37$$.index + "]" : "oj-diagram-tooltip" == $subId$$42$$ && ($subId$$42$$ = "tooltip");
    return $subId$$42$$;
  }, $_ConvertSubIdToLocator$:function($subId$$43$$) {
    var $locator$$38$$ = {};
    0 == $subId$$43$$.indexOf("link") ? ($locator$$38$$.subId = "oj-diagram-link", $locator$$38$$.index = this.$_GetFirstIndex$($subId$$43$$)) : 0 == $subId$$43$$.indexOf("node") ? ($locator$$38$$.subId = "oj-diagram-node", $locator$$38$$.index = this.$_GetFirstIndex$($subId$$43$$)) : "tooltip" == $subId$$43$$ && ($locator$$38$$.subId = "oj-diagram-tooltip");
    return $locator$$38$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$.push("oj-diagram");
    return $styleClasses$$10$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-diagram-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-diagram-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$11$$["oj-diagram-node oj-hover"] = [{path:"styleDefaults/nodeDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/nodeDefaults/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-diagram-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$11$$["oj-diagram-link-label"] = {path:"styleDefaults/linkDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-diagram-link oj-selected"] = {path:"styleDefaults/linkDefaults/selectionColor", property:"border-color"};
    $styleClasses$$11$$["oj-diagram-link oj-hover"] = [{path:"styleDefaults/linkDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/linkDefaults/hoverInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$11$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$14$$ = this.options.translations, $ret$$42$$ = this._super();
    $ret$$42$$["DvtUtilBundle.DIAGRAM"] = $translations$$14$$.componentName;
    return $ret$$42$$;
  }, $_HandleEvent$:function($event$$429$$) {
    ($event$$429$$ && $event$$429$$.getType ? $event$$429$$.getType() : null) === $dvt$$4$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$429$$.getSelection()) : this._super($event$$429$$);
  }, getNodeCount:function() {
    return this.$_component$.getAutomation().getNodeCount();
  }, getNode:function($nodeIndex$$) {
    return this.$_component$.getAutomation().getNode($nodeIndex$$);
  }, getLinkCount:function() {
    return this.$_component$.getAutomation().getLinkCount();
  }, getLink:function($linkIndex$$) {
    return this.$_component$.getAutomation().getLink($linkIndex$$);
  }, getContextByNode:function($context$$116_node$$87$$) {
    return($context$$116_node$$87$$ = this.getSubIdByNode($context$$116_node$$87$$)) && "oj-diagram-tooltip" !== $context$$116_node$$87$$.subId ? $context$$116_node$$87$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes", "links"]};
  }});
});
