/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtNBox"], function($oj$$54$$, $$$$49$$, $comp$$13$$, $base$$9$$, $dvt$$6$$) {
  $oj$$54$$.$__registerWidget$("oj.ojNBox", $$$$49$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$138$$, $callback$$112$$, $callbackObj$$9$$) {
    return $dvt$$6$$.DvtNBox.newInstance($context$$138$$, $callback$$112$$, $callbackObj$$9$$);
  }, $_ConvertLocatorToSubId$:function($locator$$46$$) {
    var $subId$$51$$ = $locator$$46$$.subId;
    if ("oj-nbox-cell" == $subId$$51$$) {
      $subId$$51$$ = "cell[" + $locator$$46$$.row + "," + $locator$$46$$.column + "]";
    } else {
      if ("oj-nbox-dialog" == $subId$$51$$) {
        $subId$$51$$ = "dialog";
      } else {
        if ("oj-nbox-dialog-close-button" == $subId$$51$$) {
          $subId$$51$$ = "dialog#closeButton";
        } else {
          if ("oj-nbox-dialog-node" == $subId$$51$$) {
            $subId$$51$$ = "dialog#node[" + $locator$$46$$.index + "]";
          } else {
            if ("oj-nbox-group-node" == $subId$$51$$) {
              $subId$$51$$ = $locator$$46$$.row && $locator$$46$$.column ? "cell[" + $locator$$46$$.row + "," + $locator$$46$$.column + "]#groupNode[" : "groupNode[", $subId$$51$$ += $locator$$46$$.groupCategory + "]";
            } else {
              if ("oj-nbox-node" == $subId$$51$$) {
                var $id$$45_index$$246$$, $subId$$51$$ = "";
                $id$$45_index$$246$$ = $locator$$46$$.id;
                var $auto$$14$$ = this.$_component$.getAutomation();
                $id$$45_index$$246$$ && $auto$$14$$ ? $id$$45_index$$246$$ = $auto$$14$$.getNodeIndexFromId($id$$45_index$$246$$) : ($id$$45_index$$246$$ = $locator$$46$$.index, $locator$$46$$.row && $locator$$46$$.column && ($subId$$51$$ = "cell[" + $locator$$46$$.row + "," + $locator$$46$$.column + "]#"));
                $subId$$51$$ += "node[" + $id$$45_index$$246$$ + "]";
              } else {
                "oj-nbox-overflow" == $subId$$51$$ ? $subId$$51$$ = "cell[" + $locator$$46$$.row + "," + $locator$$46$$.column + "]#overflow" : "oj-nbox-tooltip" == $subId$$51$$ && ($subId$$51$$ = "tooltip");
              }
            }
          }
        }
      }
    }
    return $subId$$51$$;
  }, $_ConvertSubIdToLocator$:function($index$$247_subId$$52$$) {
    var $locator$$47$$ = {};
    if (0 == $index$$247_subId$$52$$.indexOf("node")) {
      $locator$$47$$.subId = "oj-nbox-node";
      $index$$247_subId$$52$$ = this.$_GetFirstIndex$($index$$247_subId$$52$$);
      var $auto$$15_cellIds_poundIndex$$ = this.$_component$.getAutomation();
      $auto$$15_cellIds_poundIndex$$ && ($locator$$47$$.id = $auto$$15_cellIds_poundIndex$$.getNodeIdFromIndex($index$$247_subId$$52$$));
    } else {
      if (0 == $index$$247_subId$$52$$.indexOf("cell")) {
        var $auto$$15_cellIds_poundIndex$$ = this.$_GetFirstBracketedString$($index$$247_subId$$52$$), $commaIndex$$ = $auto$$15_cellIds_poundIndex$$.indexOf(",");
        $locator$$47$$.row = $auto$$15_cellIds_poundIndex$$.substring(0, $commaIndex$$);
        $locator$$47$$.column = $auto$$15_cellIds_poundIndex$$.substring($commaIndex$$ + 1);
        $auto$$15_cellIds_poundIndex$$ = $index$$247_subId$$52$$.indexOf("#");
        0 < $index$$247_subId$$52$$.indexOf("#groupNode") ? ($locator$$47$$.subId = "oj-nbox-group-node", $locator$$47$$.groupCategory = this.$_GetFirstBracketedString$($index$$247_subId$$52$$.substring($auto$$15_cellIds_poundIndex$$))) : 0 < $index$$247_subId$$52$$.indexOf("#node") ? ($locator$$47$$.subId = "oj-nbox-node", $locator$$47$$.index = this.$_GetFirstIndex$($index$$247_subId$$52$$.substring($auto$$15_cellIds_poundIndex$$))) : 0 < $index$$247_subId$$52$$.indexOf("#overflow") ? $locator$$47$$.subId = 
        "oj-nbox-overflow" : $locator$$47$$.subId = "oj-nbox-cell";
      } else {
        0 == $index$$247_subId$$52$$.indexOf("dialog") ? 0 < $index$$247_subId$$52$$.indexOf("#closeButton") ? $locator$$47$$.subId = "oj-nbox-dialog-close-button" : 0 < $index$$247_subId$$52$$.indexOf("#node") ? ($locator$$47$$.subId = "oj-nbox-dialog-node", $locator$$47$$.index = this.$_GetFirstIndex$($index$$247_subId$$52$$)) : $locator$$47$$.subId = "oj-nbox-dialog" : 0 == $index$$247_subId$$52$$.indexOf("groupNode") ? ($locator$$47$$.subId = "oj-nbox-group-node", $locator$$47$$.groupCategory = 
        this.$_GetFirstBracketedString$($index$$247_subId$$52$$)) : "tooltip" == $index$$247_subId$$52$$ && ($locator$$47$$.subId = "oj-nbox-tooltip");
      }
    }
    return $locator$$47$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$.push("oj-nbox");
    return $styleClasses$$14$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$["oj-nbox-columns-title"] = {path:"styleDefaults/columnsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-rows-title"] = {path:"styleDefaults/rowsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-column-label"] = {path:"styleDefaults/columnLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-row-label"] = {path:"styleDefaults/rowLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-cell"] = {path:"styleDefaults/cellDefaults/style", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-cell oj-minimized"] = {path:"styleDefaults/cellDefaults/minimizedStyle", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-cell oj-maximized"] = {path:"styleDefaults/cellDefaults/maximizedStyle", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-cell-label"] = {path:"styleDefaults/cellDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-cell-countlabel"] = {path:"styleDefaults/cellDefaults/bodyCountLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-cell-countlabel oj-nbox-cell-header"] = {path:"styleDefaults/cellDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-node"] = {path:"styleDefaults/nodeDefaults/color", property:"background-color"};
    $styleClasses$$15$$["oj-nbox-node oj-hover"] = {path:"styleDefaults/nodeDefaults/hoverColor", property:"border-color"};
    $styleClasses$$15$$["oj-nbox-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$15$$["oj-nbox-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-node-secondarylabel"] = {path:"styleDefaults/nodeDefaults/secondaryLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-node-categorylabel"] = {path:"styleDefaults/__categoryNodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-dialog"] = [{path:"styleDefaults/__drawerDefaults/background", property:"background-color"}, {path:"styleDefaults/__drawerDefaults/borderColor", property:"border-color"}];
    $styleClasses$$15$$["oj-nbox-dialog-label"] = {path:"styleDefaults/__drawerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-nbox-dialog-countlabel"] = {path:"styleDefaults/__drawerDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$15$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$17$$ = this.options.translations, $ret$$52$$ = this._super();
    $ret$$52$$["DvtUtilBundle.NBOX"] = $translations$$17$$.componentName;
    $ret$$52$$["DvtNBoxBundle.HIGHLIGHTED_COUNT"] = $translations$$17$$.highlightedCount;
    $ret$$52$$["DvtNBoxBundle.OTHER"] = $translations$$17$$.labelOther;
    $ret$$52$$["DvtNBoxBundle.GROUP_NODE"] = $translations$$17$$.labelGroup;
    $ret$$52$$["DvtNBoxBundle.SIZE"] = $translations$$17$$.labelSize;
    $ret$$52$$["DvtNBoxBundle.ADDITIONAL_DATA"] = $translations$$17$$.labelAdditionalData;
    return $ret$$52$$;
  }, $_HandleEvent$:function($event$$566$$) {
    var $keys$$43_type$$97$$ = $event$$566$$ && $event$$566$$.getType ? $event$$566$$.getType() : null;
    if ($keys$$43_type$$97$$ === $dvt$$6$$.DvtSelectionEvent.TYPE) {
      this.$_UserOptionChange$("selection", $event$$566$$.getSelection());
    } else {
      if ($keys$$43_type$$97$$ === $dvt$$6$$.DvtSetPropertyEvent.TYPE) {
        for (var $keys$$43_type$$97$$ = $event$$566$$.getParamKeys(), $i$$416$$ = 0;$i$$416$$ < $keys$$43_type$$97$$.length;$i$$416$$++) {
          var $key$$170$$ = $keys$$43_type$$97$$[$i$$416$$], $value$$282$$ = $event$$566$$.getParamValue($key$$170$$);
          "_drawer" == $key$$170$$ ? ($value$$282$$ && ($value$$282$$ = {id:$value$$282$$}), this.options[$key$$170$$] = $value$$282$$) : "maximizedRow" != $key$$170$$ && "maximizedColumn" != $key$$170$$ || this.$_UserOptionChange$($key$$170$$, $value$$282$$);
        }
      } else {
        this._super($event$$566$$);
      }
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$2$$ = this.options._resources;
    $resources$$2$$.overflow_dwn = {src:$oj$$54$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dwn.png"), width:34, height:9};
    $resources$$2$$.overflow_ovr = {src:$oj$$54$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ovr.png"), width:34, height:9};
    $resources$$2$$.overflow_ena = {src:$oj$$54$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ena.png"), width:34, height:9};
    $resources$$2$$.overflow_dis = {src:$oj$$54$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dis.png"), width:34, height:9};
    $resources$$2$$.close_dwn = {src:$oj$$54$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_dwn.png"), width:16, height:16};
    $resources$$2$$.close_ovr = {src:$oj$$54$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ovr.png"), width:16, height:16};
    $resources$$2$$.close_ena = {src:$oj$$54$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ena.png"), width:16, height:16};
  }, getNodeBySubId:function($locator$$48$$) {
    return this._super($locator$$48$$);
  }, getSubIdByNode:function($node$$107$$) {
    return this._super($node$$107$$);
  }, getRowsTitle:function() {
    var $auto$$16$$ = this.$_component$.getAutomation();
    return $auto$$16$$ ? $auto$$16$$.getData("rowsTitle") : null;
  }, getRowCount:function() {
    var $auto$$17$$ = this.$_component$.getAutomation();
    return $auto$$17$$ ? $auto$$17$$.getData("rowCount") : null;
  }, getRow:function($rowValue$$) {
    var $auto$$18$$ = this.$_component$.getAutomation();
    return $auto$$18$$ ? $auto$$18$$.getData("row", $rowValue$$) : null;
  }, getColumnsTitle:function() {
    var $auto$$19$$ = this.$_component$.getAutomation();
    return $auto$$19$$ ? $auto$$19$$.getData("columnsTitle") : null;
  }, getColumnCount:function() {
    var $auto$$20$$ = this.$_component$.getAutomation();
    return $auto$$20$$ ? $auto$$20$$.getData("columnCount") : -1;
  }, getColumn:function($columnValue$$) {
    var $auto$$21$$ = this.$_component$.getAutomation();
    return $auto$$21$$ ? $auto$$21$$.getData("column", $columnValue$$) : null;
  }, getCell:function($rowValue$$1$$, $columnValue$$1$$) {
    var $auto$$22$$ = this.$_component$.getAutomation(), $ret$$53$$ = $auto$$22$$ ? $auto$$22$$.getCell($rowValue$$1$$, $columnValue$$1$$) : null;
    $ret$$53$$ && ($ret$$53$$.getGroupNode = function $$ret$$53$$$getGroupNode$($groupMap$$) {
      return $auto$$22$$.getCellGroupNode($ret$$53$$, $groupMap$$);
    }, $ret$$53$$.getNode = function $$ret$$53$$$getNode$($nodeIndex$$1$$) {
      return $auto$$22$$.getCellNode($ret$$53$$, $nodeIndex$$1$$);
    });
    return $ret$$53$$;
  }, getGroupBehavior:function() {
    var $auto$$23$$ = this.$_component$.getAutomation();
    return $auto$$23$$ ? $auto$$23$$.getData("groupBehavior") : null;
  }, getGroupNode:function($groupCategory$$) {
    return this.$_component$.getAutomation().getGroupNode($groupCategory$$);
  }, getDialog:function() {
    var $auto$$25$$ = this.$_component$.getAutomation(), $ret$$54$$ = $auto$$25$$ ? $auto$$25$$.getDialog() : null;
    $ret$$54$$ && ($ret$$54$$.getNode = function $$ret$$54$$$getNode$($nodeIndex$$2$$) {
      return $auto$$25$$.getDialogNode($nodeIndex$$2$$);
    });
    return $ret$$54$$;
  }, getContextByNode:function($context$$139_node$$108$$) {
    return($context$$139_node$$108$$ = this.getSubIdByNode($context$$139_node$$108$$)) && "oj-nbox-tooltip" !== $context$$139_node$$108$$.subId && "oj-nbox-dialog-close-button" !== $context$$139_node$$108$$.subId && "oj-nbox-overflow" !== $context$$139_node$$108$$.subId ? $context$$139_node$$108$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["cells", "rows", "columns", "nodes"]};
  }});
});
