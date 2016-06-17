/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreemap"], function($oj$$80$$, $$$$74$$, $comp$$20$$, $base$$15$$, $dvt$$12$$) {
  $oj$$80$$.$__registerWidget$("oj.ojTreemap", $$$$74$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$172$$, $callback$$133$$, $callbackObj$$15$$) {
    return $dvt$$12$$.DvtTreemap.newInstance($context$$172$$, $callback$$133$$, $callbackObj$$15$$);
  }, $_ConvertLocatorToSubId$:function($locator$$67$$) {
    var $subId$$70$$ = $locator$$67$$.subId;
    "oj-treemap-node" == $subId$$70$$ ? $subId$$70$$ = "node" + this.$_GetStringFromIndexPath$($locator$$67$$.indexPath) : "oj-treemap-tooltip" == $subId$$70$$ && ($subId$$70$$ = "tooltip");
    return $subId$$70$$;
  }, $_ConvertSubIdToLocator$:function($subId$$71$$) {
    var $locator$$68$$ = {};
    0 == $subId$$71$$.indexOf("node") ? ($locator$$68$$.subId = "oj-treemap-node", $locator$$68$$.indexPath = this.$_GetIndexPath$($subId$$71$$)) : "tooltip" == $subId$$71$$ && ($locator$$68$$.subId = "oj-treemap-tooltip");
    return $locator$$68$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$26$$ = this._super();
    $styleClasses$$26$$.push("oj-treemap");
    return $styleClasses$$26$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$27$$ = this._super();
    $styleClasses$$27$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$27$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$27$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$27$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$27$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$27$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$27$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$27$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$27$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$27$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}, {path:"nodeDefaults/header/_hoverLabelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$27$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}, {path:"nodeDefaults/header/_selectedLabelStyle", property:"CSS_TEXT_PROPERTIES"}];
    return $styleClasses$$27$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$22$$ = this.options.translations, $ret$$80$$ = this._super();
    $ret$$80$$["DvtTreemapBundle.COLOR"] = $translations$$22$$.labelColor;
    $ret$$80$$["DvtTreemapBundle.ISOLATE"] = $translations$$22$$.tooltipIsolate;
    $ret$$80$$["DvtTreemapBundle.RESTORE"] = $translations$$22$$.tooltipRestore;
    $ret$$80$$["DvtTreemapBundle.SIZE"] = $translations$$22$$.labelSize;
    $ret$$80$$["DvtUtilBundle.TREEMAP"] = $translations$$22$$.componentName;
    return $ret$$80$$;
  }, $_HandleEvent$:function($event$$683_isolatedNode$$) {
    var $isolatedNodes_type$$109$$ = $event$$683_isolatedNode$$ && $event$$683_isolatedNode$$.getType ? $event$$683_isolatedNode$$.getType() : null;
    $isolatedNodes_type$$109$$ === $dvt$$12$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$683_isolatedNode$$.getSelection()) : $isolatedNodes_type$$109$$ === $dvt$$12$$.DvtTreemapIsolateEvent.TYPE ? ($isolatedNodes_type$$109$$ = this.options.$_isolatedNodes$, $isolatedNodes_type$$109$$ || (this.options.$_isolatedNodes$ = [], $isolatedNodes_type$$109$$ = this.options.$_isolatedNodes$), ($event$$683_isolatedNode$$ = $event$$683_isolatedNode$$.getId()) ? ($isolatedNodes_type$$109$$.push($event$$683_isolatedNode$$), 
    this.$_UserOptionChange$("isolatedNode", $event$$683_isolatedNode$$)) : ($isolatedNodes_type$$109$$.pop(), this.$_UserOptionChange$("isolatedNode", 0 < $isolatedNodes_type$$109$$.length ? $isolatedNodes_type$$109$$[$isolatedNodes_type$$109$$.length] : null))) : this._super($event$$683_isolatedNode$$);
  }, getNode:function($ret$$81_subIdPath$$3$$) {
    $ret$$81_subIdPath$$3$$ = this.$_component$.getAutomation().getNode($ret$$81_subIdPath$$3$$);
    this.$_AddAutomationGetters$($ret$$81_subIdPath$$3$$);
    return $ret$$81_subIdPath$$3$$;
  }, getContextByNode:function($context$$173_node$$173$$) {
    return($context$$173_node$$173$$ = this.getSubIdByNode($context$$173_node$$173$$)) && "oj-treemap-tooltip" !== $context$$173_node$$173$$.subId ? $context$$173_node$$173$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes"]};
  }});
});
