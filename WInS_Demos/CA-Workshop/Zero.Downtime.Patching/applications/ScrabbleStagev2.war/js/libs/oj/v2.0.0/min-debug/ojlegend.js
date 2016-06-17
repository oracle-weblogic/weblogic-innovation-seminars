/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtLegend"], function($oj$$49$$, $$$$46$$, $comp$$12$$, $base$$8$$, $dvt$$5$$) {
  $oj$$49$$.$__registerWidget$("oj.ojLegend", $$$$46$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, drill:null}, $_CreateDvtComponent$:function($context$$117$$, $callback$$109$$, $callbackObj$$8$$) {
    return $dvt$$5$$.DvtLegend.newInstance($context$$117$$, $callback$$109$$, $callbackObj$$8$$);
  }, $_ConvertLocatorToSubId$:function($locator$$43$$) {
    var $subId$$49$$ = $locator$$43$$.subId;
    "oj-legend-section" == $subId$$49$$ ? $subId$$49$$ = "section" + this.$_GetStringFromIndexPath$($locator$$43$$.indexPath) : "oj-legend-item" == $subId$$49$$ ? ($subId$$49$$ = "section" + this.$_GetStringFromIndexPath$($locator$$43$$.sectionIndexPath), $subId$$49$$ += ":item[" + $locator$$43$$.itemIndex + "]") : "oj-legend-tooltip" == $subId$$49$$ && ($subId$$49$$ = "tooltip");
    return $subId$$49$$;
  }, $_ConvertSubIdToLocator$:function($itemSubstr$$1_subId$$50$$) {
    var $locator$$44$$ = {};
    if (0 < $itemSubstr$$1_subId$$50$$.indexOf(":item")) {
      var $itemStartIndex$$1$$ = $itemSubstr$$1_subId$$50$$.indexOf(":item"), $sectionSubstr$$1$$ = $itemSubstr$$1_subId$$50$$.substring(0, $itemStartIndex$$1$$);
      $itemSubstr$$1_subId$$50$$ = $itemSubstr$$1_subId$$50$$.substring($itemStartIndex$$1$$);
      $locator$$44$$.subId = "oj-legend-item";
      $locator$$44$$.sectionIndexPath = this.$_GetIndexPath$($sectionSubstr$$1$$);
      $locator$$44$$.itemIndex = this.$_GetFirstIndex$($itemSubstr$$1_subId$$50$$);
    } else {
      0 == $itemSubstr$$1_subId$$50$$.indexOf("section") ? ($locator$$44$$.subId = "oj-legend-section", $locator$$44$$.indexPath = this.$_GetIndexPath$($itemSubstr$$1_subId$$50$$)) : "tooltip" == $itemSubstr$$1_subId$$50$$ && ($locator$$44$$.subId = "oj-legend-tooltip");
    }
    return $locator$$44$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$.push("oj-legend");
    return $styleClasses$$12$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$["oj-legend"] = {path:"textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-title"] = {path:"titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-section-title"] = {path:"_sectionTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-section-close-icon"] = {path:"_resources/closedEnabled", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-close-icon oj-hover"] = {path:"_resources/closedOver", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-close-icon oj-active"] = {path:"_resources/closedDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-open-icon"] = {path:"_resources/openEnabled", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-open-icon oj-hover"] = {path:"_resources/openOver", property:"CSS_URL"};
    $styleClasses$$13$$["oj-legend-section-open-icon oj-active"] = {path:"_resources/openDown", property:"CSS_URL"};
    return $styleClasses$$13$$;
  }, $_GetTranslationMap$:function() {
    var $translations$$16$$ = this.options.translations, $ret$$45$$ = this._super();
    $ret$$45$$["DvtUtilBundle.LEGEND"] = $translations$$16$$.componentName;
    return $ret$$45$$;
  }, $_GetEventTypes$:function() {
    return["categoryFilter", "categoryHighlight", "drill"];
  }, $_HandleEvent$:function($event$$515$$) {
    var $filterType$$1_highlightType$$1_type$$92$$ = $event$$515$$ && $event$$515$$.getType ? $event$$515$$.getType() : null;
    $filterType$$1_highlightType$$1_type$$92$$ === $dvt$$5$$.DvtCategoryHideShowEvent.TYPE_HIDE || $filterType$$1_highlightType$$1_type$$92$$ === $dvt$$5$$.DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType$$1_highlightType$$1_type$$92$$ = $filterType$$1_highlightType$$1_type$$92$$ === $dvt$$5$$.DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$515$$.getCategory(), type:$filterType$$1_highlightType$$1_type$$92$$}), this.$_UserOptionChange$("hiddenCategories", 
    $event$$515$$.hiddenCategories)) : $filterType$$1_highlightType$$1_type$$92$$ === $dvt$$5$$.DvtCategoryRolloverEvent.TYPE_OVER || $filterType$$1_highlightType$$1_type$$92$$ === $dvt$$5$$.DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType$$1_highlightType$$1_type$$92$$ = $filterType$$1_highlightType$$1_type$$92$$ === $dvt$$5$$.DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:$event$$515$$.categories, type:$filterType$$1_highlightType$$1_type$$92$$}), 
    this.$_UserOptionChange$("highlightedCategories", $event$$515$$.categories)) : $filterType$$1_highlightType$$1_type$$92$$ === $dvt$$5$$.DvtDrillEvent.TYPE ? this._trigger("drill", null, {id:$event$$515$$.getId()}) : this._super($event$$515$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.overviewGrippy = $oj$$49$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
  }, $_Render$:function() {
    this._super();
    this.element.attr("role") || this.element.attr("tabIndex", null);
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getSection:function($subIdPath$$) {
    var $ret$$46$$ = this.$_component$.getAutomation().getSection($subIdPath$$);
    if ($ret$$46$$) {
      var $ojComponent$$ = this;
      this.$_AddAutomationGetters$($ret$$46$$);
      $ret$$46$$.getSection = function $$ret$$46$$$getSection$($section$$1_sectionIndex$$) {
        ($section$$1_sectionIndex$$ = $ret$$46$$.sections ? $ret$$46$$.sections[$section$$1_sectionIndex$$] : null) && $ojComponent$$.$_AddAutomationGetters$($section$$1_sectionIndex$$);
        return $section$$1_sectionIndex$$;
      };
      $ret$$46$$.getItem = function $$ret$$46$$$getItem$($item$$123_itemIndex$$4$$) {
        ($item$$123_itemIndex$$4$$ = $ret$$46$$.items ? $ret$$46$$.items[$item$$123_itemIndex$$4$$] : null) && $ojComponent$$.$_AddAutomationGetters$($item$$123_itemIndex$$4$$);
        return $item$$123_itemIndex$$4$$;
      };
    }
    return $ret$$46$$;
  }, getItem:function($ret$$47_subIdPath$$1$$) {
    $ret$$47_subIdPath$$1$$ = this.$_component$.getAutomation().getItem($ret$$47_subIdPath$$1$$);
    this.$_AddAutomationGetters$($ret$$47_subIdPath$$1$$);
    return $ret$$47_subIdPath$$1$$;
  }, getPreferredSize:function($width$$31$$, $height$$30$$) {
    var $dims$$ = this.$_component$.getPreferredSize(this.options, $width$$31$$, $height$$30$$);
    return{width:$dims$$.getWidth(), height:$dims$$.getHeight()};
  }, getContextByNode:function($context$$118_node$$97$$) {
    return($context$$118_node$$97$$ = this.getSubIdByNode($context$$118_node$$97$$)) && "oj-legend-tooltip" !== $context$$118_node$$97$$.subId ? $context$$118_node$$97$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{sections:["items"]};
  }});
});
