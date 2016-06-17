/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtPictoChart"], function($oj$$59$$, $$$$54$$, $comp$$14$$, $base$$10$$, $dvt$$7$$) {
  $oj$$59$$.$__registerWidget$("oj.ojPictoChart", $$$$54$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null, drill:null}, $_CreateDvtComponent$:function($context$$140$$, $callback$$117$$, $callbackObj$$10$$) {
    return $dvt$$7$$.DvtPictoChart.newInstance($context$$140$$, $callback$$117$$, $callbackObj$$10$$);
  }, $_ConvertLocatorToSubId$:function($locator$$49$$) {
    var $subId$$53$$ = $locator$$49$$.subId;
    "oj-pictochart-item" == $subId$$53$$ ? $subId$$53$$ = "item[" + $locator$$49$$.index + "]" : "oj-pictochart-tooltip" == $subId$$53$$ && ($subId$$53$$ = "tooltip");
    return $subId$$53$$;
  }, $_ConvertSubIdToLocator$:function($subId$$54$$) {
    var $locator$$50$$ = {};
    0 == $subId$$54$$.indexOf("item") ? ($locator$$50$$.subId = "oj-pictochart-item", $locator$$50$$.index = this.$_GetFirstIndex$($subId$$54$$)) : "tooltip" == $subId$$54$$ && ($locator$$50$$.subId = "oj-pictochart-tooltip");
    return $locator$$50$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$16$$ = this._super();
    $styleClasses$$16$$.push("oj-pictochart");
    return $styleClasses$$16$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$17$$ = this._super();
    $styleClasses$$17$$["oj-pictochart-item"] = {path:"_defaultColor", property:"background-color"};
    return $styleClasses$$17$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_HandleEvent$:function($event$$581$$) {
    var $type$$98$$ = $event$$581$$ && $event$$581$$.getType ? $event$$581$$.getType() : null;
    $type$$98$$ === $dvt$$7$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$581$$.getSelection()) : $type$$98$$ === $dvt$$7$$.DvtCategoryRolloverEvent.TYPE_OVER || $type$$98$$ === $dvt$$7$$.DvtCategoryRolloverEvent.TYPE_OUT ? this.$_UserOptionChange$("highlightedCategories", $event$$581$$.categories) : $type$$98$$ === $dvt$$7$$.DvtDrillEvent.TYPE ? this._trigger("drill", null, {id:$event$$581$$.getId()}) : this._super($event$$581$$);
  }, getItem:function($index$$253$$) {
    return this.$_component$.getAutomation().getItem($index$$253$$);
  }, getItemCount:function() {
    return this.$_component$.getAutomation().getItemCount();
  }, getContextByNode:function($context$$141_node$$109$$) {
    return($context$$141_node$$109$$ = this.getSubIdByNode($context$$141_node$$109$$)) && "oj-pictochart-tooltip" !== $context$$141_node$$109$$.subId ? $context$$141_node$$109$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["items"]};
  }, $_IsFlowingLayoutSupported$:function() {
    return!0;
  }});
});
