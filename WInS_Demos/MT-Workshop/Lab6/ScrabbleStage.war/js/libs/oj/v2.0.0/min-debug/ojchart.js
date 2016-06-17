/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtChart"], function($oj$$27$$, $$$$26$$, $comp$$7$$, $base$$6$$, $dvt$$3$$) {
  $oj$$27$$.$__registerWidget$("oj.ojChart", $$$$26$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, optionChange:null, selectInput:null, viewportChange:null, viewportChangeInput:null, drill:null}, $_CreateDvtComponent$:function($context$$107$$, $callback$$103$$, $callbackObj$$5$$) {
    return $dvt$$3$$.DvtChart.newInstance($context$$107$$, $callback$$103$$, $callbackObj$$5$$);
  }, $_ConvertLocatorToSubId$:function($locator$$32$$) {
    var $subId$$37$$ = $locator$$32$$.subId;
    "oj-chart-item" == $subId$$37$$ ? $subId$$37$$ = "dataItem[" + $locator$$32$$.seriesIndex + "][" + $locator$$32$$.itemIndex + "]" : "oj-chart-group" == $subId$$37$$ ? $subId$$37$$ = "group" + this.$_GetStringFromIndexPath$($locator$$32$$.indexPath) : "oj-chart-series" == $subId$$37$$ ? $subId$$37$$ = "series[" + $locator$$32$$.index + "]" : "oj-chart-axis-title" == $subId$$37$$ ? $subId$$37$$ = $locator$$32$$.axis + ":title" : "oj-chart-reference-object" == $subId$$37$$ ? $subId$$37$$ = $locator$$32$$.axis + 
    ":referenceObject[" + $locator$$32$$.index + "]" : "oj-legend-section" == $subId$$37$$ ? $subId$$37$$ = "legend:section" + this.$_GetStringFromIndexPath$($locator$$32$$.indexPath) : "oj-legend-item" == $subId$$37$$ ? ($subId$$37$$ = "legend:section" + this.$_GetStringFromIndexPath$($locator$$32$$.sectionIndexPath), $subId$$37$$ += ":item[" + $locator$$32$$.itemIndex + "]") : "oj-chart-tooltip" == $subId$$37$$ && ($subId$$37$$ = "tooltip");
    return $subId$$37$$;
  }, $_ConvertSubIdToLocator$:function($itemSubstr_subId$$38$$) {
    var $locator$$33$$ = {};
    if (0 == $itemSubstr_subId$$38$$.indexOf("dataItem")) {
      var $indexPath$$2_sectionSubstr$$ = this.$_GetIndexPath$($itemSubstr_subId$$38$$);
      $locator$$33$$.subId = "oj-chart-item";
      $locator$$33$$.seriesIndex = $indexPath$$2_sectionSubstr$$[0];
      $locator$$33$$.itemIndex = $indexPath$$2_sectionSubstr$$[1];
    } else {
      if (0 == $itemSubstr_subId$$38$$.indexOf("group")) {
        $locator$$33$$.subId = "oj-chart-group", $locator$$33$$.indexPath = this.$_GetIndexPath$($itemSubstr_subId$$38$$);
      } else {
        if (0 == $itemSubstr_subId$$38$$.indexOf("series")) {
          $locator$$33$$.subId = "oj-chart-series", $locator$$33$$.index = this.$_GetFirstIndex$($itemSubstr_subId$$38$$);
        } else {
          if (0 < $itemSubstr_subId$$38$$.indexOf("Axis:title")) {
            $locator$$33$$.subId = "oj-chart-axis-title", $locator$$33$$.axis = $itemSubstr_subId$$38$$.substring(0, $itemSubstr_subId$$38$$.indexOf(":"));
          } else {
            if (0 < $itemSubstr_subId$$38$$.indexOf("Axis:referenceObject")) {
              $locator$$33$$.subId = "oj-chart-reference-object", $locator$$33$$.axis = $itemSubstr_subId$$38$$.substring(0, $itemSubstr_subId$$38$$.indexOf(":")), $locator$$33$$.index = this.$_GetFirstIndex$($itemSubstr_subId$$38$$);
            } else {
              if (0 == $itemSubstr_subId$$38$$.indexOf("legend")) {
                if (0 < $itemSubstr_subId$$38$$.indexOf(":item")) {
                  var $itemStartIndex$$ = $itemSubstr_subId$$38$$.indexOf(":item"), $indexPath$$2_sectionSubstr$$ = $itemSubstr_subId$$38$$.substring(0, $itemStartIndex$$);
                  $itemSubstr_subId$$38$$ = $itemSubstr_subId$$38$$.substring($itemStartIndex$$);
                  $locator$$33$$.subId = "oj-legend-item";
                  $locator$$33$$.sectionIndexPath = this.$_GetIndexPath$($indexPath$$2_sectionSubstr$$);
                  $locator$$33$$.itemIndex = this.$_GetFirstIndex$($itemSubstr_subId$$38$$);
                } else {
                  0 == $itemSubstr_subId$$38$$.indexOf("section") && ($locator$$33$$.subId = "oj-legend-section", $locator$$33$$.indexPath = this.$_GetIndexPath$($itemSubstr_subId$$38$$));
                }
              } else {
                "tooltip" == $itemSubstr_subId$$38$$ && ($locator$$33$$.subId = "oj-chart-tooltip");
              }
            }
          }
        }
      }
    }
    return $locator$$33$$;
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    if (!this.options.styleDefaults.colors) {
      var $handler$$49$$ = new $oj$$27$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.colors = $handler$$49$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$.push("oj-chart");
    return $styleClasses$$7$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$8$$ = this._super();
    $styleClasses$$8$$["oj-chart-data-label"] = {path:"styleDefaults/dataLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-stack-label"] = {path:"styleDefaults/stackLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-footnote"] = {path:"footnote/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-pie-center-label"] = {path:"pieCenterLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-slice-label"] = {path:"styleDefaults/sliceLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-subtitle"] = {path:"subtitle/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-stock-falling"] = {path:"styleDefaults/stockFallingColor", property:"background-color"};
    $styleClasses$$8$$["oj-chart-stock-range"] = {path:"styleDefaults/stockRangeColor", property:"background-color"};
    $styleClasses$$8$$["oj-chart-stock-rising"] = {path:"styleDefaults/stockRisingColor", property:"background-color"};
    $styleClasses$$8$$["oj-chart-title"] = {path:"title/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-xaxis-tick-label"] = {path:"xAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-xaxis-title"] = {path:"xAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-yaxis-tick-label"] = {path:"yAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-yaxis-title"] = {path:"yAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-y2axis-tick-label"] = {path:"y2Axis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-y2axis-title"] = {path:"y2Axis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-chart-pan-icon"] = {path:"_resources/panUp", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-pan-icon oj-active"] = {path:"_resources/panDown", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-select-icon"] = {path:"_resources/selectUp", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-select-icon oj-active"] = {path:"_resources/selectDown", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-zoom-icon"] = {path:"_resources/zoomUp", property:"CSS_URL"};
    $styleClasses$$8$$["oj-chart-zoom-icon oj-active"] = {path:"_resources/zoomDown", property:"CSS_URL"};
    $styleClasses$$8$$["oj-legend"] = {path:"legend/textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-legend-title"] = {path:"legend/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$8$$["oj-legend-section-close-icon"] = {path:"legend/_resources/closedEnabled", property:"CSS_URL"};
    $styleClasses$$8$$["oj-legend-section-close-icon oj-hover"] = {path:"legend/_resources/closedOver", property:"CSS_URL"};
    $styleClasses$$8$$["oj-legend-section-close-icon oj-active"] = {path:"legend/_resources/closedDown", property:"CSS_URL"};
    $styleClasses$$8$$["oj-legend-section-open-icon"] = {path:"legend/_resources/openEnabled", property:"CSS_URL"};
    $styleClasses$$8$$["oj-legend-section-open-icon oj-hover"] = {path:"legend/_resources/openOver", property:"CSS_URL"};
    $styleClasses$$8$$["oj-legend-section-open-icon oj-active"] = {path:"legend/_resources/openDown", property:"CSS_URL"};
    return $styleClasses$$8$$;
  }, $_GetEventTypes$:function() {
    return "categoryFilter categoryHighlight drill optionChange selectInput viewportChange viewportChangeInput".split(" ");
  }, $_GetTranslationMap$:function() {
    var $translations$$12$$ = this.options.translations, $ret$$33$$ = this._super();
    $ret$$33$$["DvtChartBundle.DEFAULT_GROUP_NAME"] = $translations$$12$$.labelDefaultGroupName;
    $ret$$33$$["DvtChartBundle.LABEL_SERIES"] = $translations$$12$$.labelSeries;
    $ret$$33$$["DvtChartBundle.LABEL_GROUP"] = $translations$$12$$.labelGroup;
    $ret$$33$$["DvtChartBundle.LABEL_VALUE"] = $translations$$12$$.labelValue;
    $ret$$33$$["DvtChartBundle.LABEL_TARGET_VALUE"] = $translations$$12$$.labelTargetValue;
    $ret$$33$$["DvtChartBundle.LABEL_X"] = $translations$$12$$.labelX;
    $ret$$33$$["DvtChartBundle.LABEL_Y"] = $translations$$12$$.labelY;
    $ret$$33$$["DvtChartBundle.LABEL_Z"] = $translations$$12$$.labelZ;
    $ret$$33$$["DvtChartBundle.LABEL_PERCENTAGE"] = $translations$$12$$.labelPercentage;
    $ret$$33$$["DvtChartBundle.LABEL_LOW"] = $translations$$12$$.labelLow;
    $ret$$33$$["DvtChartBundle.LABEL_HIGH"] = $translations$$12$$.labelHigh;
    $ret$$33$$["DvtChartBundle.LABEL_OPEN"] = $translations$$12$$.labelOpen;
    $ret$$33$$["DvtChartBundle.LABEL_CLOSE"] = $translations$$12$$.labelClose;
    $ret$$33$$["DvtChartBundle.LABEL_VOLUME"] = $translations$$12$$.labelVolume;
    $ret$$33$$["DvtChartBundle.LABEL_MIN"] = $translations$$12$$.labelMin;
    $ret$$33$$["DvtChartBundle.LABEL_MAX"] = $translations$$12$$.labelMax;
    $ret$$33$$["DvtChartBundle.LABEL_OTHER"] = $translations$$12$$.labelOther;
    $ret$$33$$["DvtChartBundle.PAN"] = $translations$$12$$.tooltipPan;
    $ret$$33$$["DvtChartBundle.MARQUEE_SELECT"] = $translations$$12$$.tooltipSelect;
    $ret$$33$$["DvtChartBundle.MARQUEE_ZOOM"] = $translations$$12$$.tooltipZoom;
    $ret$$33$$["DvtUtilBundle.CHART"] = $translations$$12$$.componentName;
    return $ret$$33$$;
  }, $_HandleEvent$:function($event$$380_selectPayload$$) {
    var $filterType_type$$87$$ = $event$$380_selectPayload$$ && $event$$380_selectPayload$$.getType ? $event$$380_selectPayload$$.getType() : null;
    if ($filterType_type$$87$$ === $dvt$$3$$.DvtSelectionEvent.TYPE || $filterType_type$$87$$ === $dvt$$3$$.DvtSelectionEvent.TYPE_INPUT) {
      var $selection$$14$$ = $event$$380_selectPayload$$.getSelection();
      if ($selection$$14$$) {
        for (var $selectedItems$$6_viewportChangePayload$$ = [], $i$$322$$ = 0;$i$$322$$ < $selection$$14$$.length;$i$$322$$++) {
          var $selectedItem$$1$$ = {id:$selection$$14$$[$i$$322$$].getId(), series:$selection$$14$$[$i$$322$$].getSeries(), group:$selection$$14$$[$i$$322$$].getGroup()};
          $selectedItems$$6_viewportChangePayload$$.push($selectedItem$$1$$);
        }
        $event$$380_selectPayload$$ = {endGroup:$event$$380_selectPayload$$.getEndGroup(), startGroup:$event$$380_selectPayload$$.getStartGroup(), xMax:$event$$380_selectPayload$$.getXMax(), xMin:$event$$380_selectPayload$$.getXMin(), yMax:$event$$380_selectPayload$$.getYMax(), yMin:$event$$380_selectPayload$$.getYMin()};
        $filterType_type$$87$$ === $dvt$$3$$.DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $selectedItems$$6_viewportChangePayload$$, $event$$380_selectPayload$$) : ($event$$380_selectPayload$$.items = $selectedItems$$6_viewportChangePayload$$, this._trigger("selectInput", null, $event$$380_selectPayload$$));
      }
    } else {
      $filterType_type$$87$$ === $dvt$$3$$.DvtCategoryHideShowEvent.TYPE_HIDE || $filterType_type$$87$$ === $dvt$$3$$.DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType_type$$87$$ = $filterType_type$$87$$ === $dvt$$3$$.DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this._trigger("categoryFilter", null, {category:$event$$380_selectPayload$$.getCategory(), type:$filterType_type$$87$$}), this.$_UserOptionChange$("hiddenCategories", $event$$380_selectPayload$$.hiddenCategories)) : $filterType_type$$87$$ === 
      $dvt$$3$$.DvtCategoryRolloverEvent.TYPE_OVER || $filterType_type$$87$$ === $dvt$$3$$.DvtCategoryRolloverEvent.TYPE_OUT ? (this._trigger("categoryHighlight", null, {categories:$event$$380_selectPayload$$.categories, type:$filterType_type$$87$$ === $dvt$$3$$.DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off"}), this.$_UserOptionChange$("highlightedCategories", $event$$380_selectPayload$$.categories)) : $filterType_type$$87$$ === $dvt$$3$$.DvtChartViewportChangeEvent.TYPE || $filterType_type$$87$$ === 
      $dvt$$3$$.DvtChartViewportChangeEvent.TYPE_INPUT ? ($selectedItems$$6_viewportChangePayload$$ = {endGroup:$event$$380_selectPayload$$.getEndGroup(), startGroup:$event$$380_selectPayload$$.getStartGroup(), xMax:$event$$380_selectPayload$$.getXMax(), xMin:$event$$380_selectPayload$$.getXMin(), yMax:$event$$380_selectPayload$$.getYMax(), yMin:$event$$380_selectPayload$$.getYMin()}, $filterType_type$$87$$ === $dvt$$3$$.DvtChartViewportChangeEvent.TYPE && (this.options.xAxis || (this.options.xAxis = 
      {}), this.options.yAxis || (this.options.yAxis = {}), this.options.xAxis.viewportStartGroup = null, this.options.xAxis.viewportEndGroup = null, null != $event$$380_selectPayload$$.getXMin() && null != $event$$380_selectPayload$$.getXMax() && (this.options.xAxis.viewportMin = $event$$380_selectPayload$$.getXMin(), this.options.xAxis.viewportMax = $event$$380_selectPayload$$.getXMax()), null != $event$$380_selectPayload$$.getYMin() && null != $event$$380_selectPayload$$.getYMax() && (this.options.yAxis.viewportMin = 
      $event$$380_selectPayload$$.getYMin(), this.options.yAxis.viewportMax = $event$$380_selectPayload$$.getYMax())), this._trigger($filterType_type$$87$$ === $dvt$$3$$.DvtChartViewportChangeEvent.TYPE ? "viewportChange" : "viewportChangeInput", null, $selectedItems$$6_viewportChangePayload$$)) : $filterType_type$$87$$ === $dvt$$3$$.DvtDrillEvent.TYPE ? this._trigger("drill", null, {id:$event$$380_selectPayload$$.getId(), series:$event$$380_selectPayload$$.getSeries(), group:$event$$380_selectPayload$$.getGroup()}) : 
      this._super($event$$380_selectPayload$$);
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$ = this.options._resources;
    $resources$$.overviewGrippy = $oj$$27$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
    $resources$$.panCursorDown = $oj$$27$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-closed.cur");
    $resources$$.panCursorUp = $oj$$27$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-open.cur");
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getGroup:function($groupIndex$$) {
    return this.$_component$.getAutomation().getGroup($groupIndex$$);
  }, getSeries:function($seriesIndex$$) {
    return this.$_component$.getAutomation().getSeries($seriesIndex$$);
  }, getGroupCount:function() {
    return this.$_component$.getAutomation().getGroupCount();
  }, getSeriesCount:function() {
    return this.$_component$.getAutomation().getSeriesCount();
  }, getDataItem:function($seriesIndex$$1$$, $groupIndex$$1$$) {
    var $ret$$34$$ = this.$_component$.getAutomation().getDataItem($seriesIndex$$1$$, $groupIndex$$1$$);
    this.$_AddAutomationGetters$($ret$$34$$);
    return $ret$$34$$;
  }, getLegend:function() {
    var $ret$$35$$ = this.$_component$.getAutomation().getLegend();
    this.$_AddAutomationGetters$($ret$$35$$);
    return $ret$$35$$;
  }, getPlotArea:function() {
    var $ret$$36$$ = this.$_component$.getAutomation().getPlotArea();
    this.$_AddAutomationGetters$($ret$$36$$);
    return $ret$$36$$;
  }, getXAxis:function() {
    var $ret$$37$$ = this.$_component$.getAutomation().getXAxis();
    this.$_AddAutomationGetters$($ret$$37$$);
    return $ret$$37$$;
  }, getYAxis:function() {
    var $ret$$38$$ = this.$_component$.getAutomation().getYAxis();
    this.$_AddAutomationGetters$($ret$$38$$);
    return $ret$$38$$;
  }, getY2Axis:function() {
    var $ret$$39$$ = this.$_component$.getAutomation().getY2Axis();
    this.$_AddAutomationGetters$($ret$$39$$);
    return $ret$$39$$;
  }, getValuesAt:function($x$$54$$, $y$$38$$) {
    return this.$_component$.getValuesAt($x$$54$$, $y$$38$$);
  }, getContextByNode:function($context$$108_node$$80$$) {
    return($context$$108_node$$80$$ = this.getSubIdByNode($context$$108_node$$80$$)) && "oj-chart-tooltip" !== $context$$108_node$$80$$.subId ? $context$$108_node$$80$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["groups", "series"]};
  }, whenReady:function() {
    return this._super();
  }});
  $oj$$27$$.$__registerWidget$("oj.ojSparkChart", $$$$26$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{}, $_CreateDvtComponent$:function($context$$109$$, $callback$$104$$, $callbackObj$$6$$) {
    return $dvt$$3$$.DvtSparkChart.newInstance($context$$109$$, $callback$$104$$, $callbackObj$$6$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$.push("oj-sparkchart");
    return $styleClasses$$9$$;
  }, $_GetTranslationMap$:function() {
    var $translations$$13$$ = this.options.translations, $ret$$40$$ = this._super();
    $ret$$40$$["DvtUtilBundle.CHART"] = $translations$$13$$.componentName;
    return $ret$$40$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getDataItem:function($itemIndex$$) {
    var $auto$$8$$ = this.$_component$.getAutomation();
    return new $oj$$27$$.$SparkChartDataItem$($auto$$8$$.getDataItem($itemIndex$$));
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["items"]};
  }});
  $oj$$27$$.$SparkChartDataItem$ = function $$oj$$27$$$$SparkChartDataItem$$($data$$149$$) {
    this.$_data$ = $data$$149$$;
  };
  $goog$exportPath_$$("SparkChartDataItem", $oj$$27$$.$SparkChartDataItem$, $oj$$27$$);
  $oj$$27$$.$SparkChartDataItem$.prototype.$getBorderColor$ = function $$oj$$27$$$$SparkChartDataItem$$$$getBorderColor$$() {
    return this.$_data$ ? this.$_data$.borderColor : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getBorderColor", {$getBorderColor$:$oj$$27$$.$SparkChartDataItem$.prototype.$getBorderColor$});
  $oj$$27$$.$SparkChartDataItem$.prototype.$getColor$ = function $$oj$$27$$$$SparkChartDataItem$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getColor", {$getColor$:$oj$$27$$.$SparkChartDataItem$.prototype.$getColor$});
  $oj$$27$$.$SparkChartDataItem$.prototype.getDate = function $$oj$$27$$$$SparkChartDataItem$$$getDate$() {
    return this.$_data$ ? this.$_data$.date : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getDate", {getDate:$oj$$27$$.$SparkChartDataItem$.prototype.getDate});
  $oj$$27$$.$SparkChartDataItem$.prototype.getFloatValue = function $$oj$$27$$$$SparkChartDataItem$$$getFloatValue$() {
    return this.$getLow$();
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getFloatValue", {getFloatValue:$oj$$27$$.$SparkChartDataItem$.prototype.getFloatValue});
  $oj$$27$$.$SparkChartDataItem$.prototype.$getLow$ = function $$oj$$27$$$$SparkChartDataItem$$$$getLow$$() {
    return this.$_data$ ? this.$_data$.low : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getLow", {$getLow$:$oj$$27$$.$SparkChartDataItem$.prototype.$getLow$});
  $oj$$27$$.$SparkChartDataItem$.prototype.$getHigh$ = function $$oj$$27$$$$SparkChartDataItem$$$$getHigh$$() {
    return this.$_data$ ? this.$_data$.high : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getHigh", {$getHigh$:$oj$$27$$.$SparkChartDataItem$.prototype.$getHigh$});
  $oj$$27$$.$SparkChartDataItem$.prototype.$getValue$ = function $$oj$$27$$$$SparkChartDataItem$$$$getValue$$() {
    return this.$_data$ ? this.$_data$.value : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getValue", {$getValue$:$oj$$27$$.$SparkChartDataItem$.prototype.$getValue$});
});
