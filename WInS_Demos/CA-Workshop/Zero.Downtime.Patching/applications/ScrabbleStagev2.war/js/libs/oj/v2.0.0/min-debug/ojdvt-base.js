/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojvalidation", "ojs/internal-deps/dvt/DvtToolkit", "promise"], function($oj$$15$$, $$$$15$$, $comp$$5$$, $val$$39$$, $dvt$$1$$) {
  function $DvtJsonPath$$($object$$5$$, $path$$7$$) {
    this.$_path$ = $path$$7$$;
    this.$_root$ = $object$$5$$;
    this.$_delimiter$ = "/";
  }
  $oj$$15$$.$AttributeGroupHandler$ = function $$oj$$15$$$$AttributeGroupHandler$$($matchRules$$) {
    this.Init($matchRules$$);
  };
  $goog$exportPath_$$("AttributeGroupHandler", $oj$$15$$.$AttributeGroupHandler$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$AttributeGroupHandler$, $oj$$15$$.$Object$, "oj.AttributeGroupHandler");
  $oj$$15$$.$AttributeGroupHandler$.prototype.Init = function $$oj$$15$$$$AttributeGroupHandler$$$Init$($idx$$12_matchRules$$1$$) {
    $oj$$15$$.$AttributeGroupHandler$.$superclass$.Init.call(this);
    this.$_matchRules$ = $idx$$12_matchRules$$1$$ ? $idx$$12_matchRules$$1$$ : {};
    this.$_assignments$ = {};
    this.$_valueIndex$ = 0;
    this.$Values$ = this.$getValueRamp$();
    for (var $key$$69$$ in this.$_matchRules$) {
      $idx$$12_matchRules$$1$$ = this.$Values$.indexOf(this.$_matchRules$[$key$$69$$]), -1 !== $idx$$12_matchRules$$1$$ && this.$Values$.splice($idx$$12_matchRules$$1$$, 1);
    }
  };
  $oj$$15$$.$AttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$15$$$$AttributeGroupHandler$$$$getValueRamp$$() {
    return[];
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValueRamp", {$getValueRamp$:$oj$$15$$.$AttributeGroupHandler$.prototype.$getValueRamp$});
  $oj$$15$$.$AttributeGroupHandler$.prototype.$getValue$ = function $$oj$$15$$$$AttributeGroupHandler$$$$getValue$$($category$$1$$) {
    if (this.$_matchRules$[$category$$1$$]) {
      return this.$_matchRules$[$category$$1$$];
    }
    this.$_assignments$[$category$$1$$] || (this.$_assignments$[$category$$1$$] = this.$Values$[this.$_valueIndex$], this.$_valueIndex$ == this.$Values$.length - 1 ? this.$_valueIndex$ = 0 : this.$_valueIndex$++);
    return this.$_assignments$[$category$$1$$];
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getValue", {$getValue$:$oj$$15$$.$AttributeGroupHandler$.prototype.$getValue$});
  $oj$$15$$.$AttributeGroupHandler$.prototype.$getCategoryAssignments$ = function $$oj$$15$$$$AttributeGroupHandler$$$$getCategoryAssignments$$() {
    var $assignments$$ = [], $i$$240$$;
    for ($i$$240$$ in this.$_assignments$) {
      $assignments$$.push({category:$i$$240$$, value:this.$_assignments$[$i$$240$$]});
    }
    return $assignments$$;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.getCategoryAssignments", {$getCategoryAssignments$:$oj$$15$$.$AttributeGroupHandler$.prototype.$getCategoryAssignments$});
  $oj$$15$$.$AttributeGroupHandler$.prototype.$addMatchRule$ = function $$oj$$15$$$$AttributeGroupHandler$$$$addMatchRule$$($category$$2$$, $attributeValue$$) {
    this.$_matchRules$[$category$$2$$] = $attributeValue$$;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("AttributeGroupHandler.prototype.addMatchRule", {$addMatchRule$:$oj$$15$$.$AttributeGroupHandler$.prototype.$addMatchRule$});
  $oj$$15$$.$ColorAttributeGroupHandler$ = function $$oj$$15$$$$ColorAttributeGroupHandler$$($matchRules$$2$$) {
    this.$_attributeValues$ = [];
    if ($$$$15$$(document.body).hasClass("oj-hicontrast")) {
      this.$_attributeValues$ = $oj$$15$$.$ColorAttributeGroupHandler$.$_DEFAULT_COLORS$.slice();
    } else {
      if (!$oj$$15$$.$ColorAttributeGroupHandler$.$_colors$) {
        $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$ = [];
        var $attrGpsDiv$$ = $$$$15$$(document.createElement("div"));
        $attrGpsDiv$$.attr("style", "display:none;");
        $attrGpsDiv$$.attr("id", "attrGps");
        $$$$15$$(document.body).append($attrGpsDiv$$);
        for (var $i$$241$$ = 0;$i$$241$$ < $oj$$15$$.$ColorAttributeGroupHandler$.$_STYLE_CLASSES$.length;$i$$241$$++) {
          var $childDiv_color$$2$$ = $$$$15$$(document.createElement("div"));
          $childDiv_color$$2$$.addClass($oj$$15$$.$ColorAttributeGroupHandler$.$_STYLE_CLASSES$[$i$$241$$]);
          $attrGpsDiv$$.append($childDiv_color$$2$$);
          ($childDiv_color$$2$$ = $childDiv_color$$2$$.css("color")) && $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$.push($childDiv_color$$2$$);
        }
        $attrGpsDiv$$.remove();
      }
      this.$_attributeValues$ = 0 < $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$.length ? $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$.slice() : $oj$$15$$.$ColorAttributeGroupHandler$.$_DEFAULT_COLORS$.slice();
    }
    this.Init($matchRules$$2$$);
  };
  $goog$exportPath_$$("ColorAttributeGroupHandler", $oj$$15$$.$ColorAttributeGroupHandler$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$ColorAttributeGroupHandler$, $oj$$15$$.$AttributeGroupHandler$, "oj.ColorAttributeGroupHandler");
  $oj$$15$$.$ColorAttributeGroupHandler$.$_DEFAULT_COLORS$ = "#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" ");
  $oj$$15$$.$ColorAttributeGroupHandler$.$_STYLE_CLASSES$ = "oj-dvt-category1 oj-dvt-category2 oj-dvt-category3 oj-dvt-category4 oj-dvt-category5 oj-dvt-category6 oj-dvt-category7 oj-dvt-category8 oj-dvt-category9 oj-dvt-category10 oj-dvt-category11 oj-dvt-category12".split(" ");
  $oj$$15$$.$ColorAttributeGroupHandler$.$_colors$ = null;
  $oj$$15$$.$ColorAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$15$$$$ColorAttributeGroupHandler$$$$getValueRamp$$() {
    return this.$_attributeValues$.slice();
  };
  $DvtJsonPath$$.prototype.$_resolveLeafObjectAndProperty$ = function $$DvtJsonPath$$$$$_resolveLeafObjectAndProperty$$($root$$2$$, $path$$8$$, $delimiter$$, $createIfMissing$$) {
    for (var $result$$39$$ = {};$root$$2$$ && -1 < $path$$8$$.indexOf($delimiter$$);) {
      var $subProperty$$ = $path$$8$$.substring(0, $path$$8$$.indexOf($delimiter$$));
      $createIfMissing$$ && void 0 === $root$$2$$[$subProperty$$] && ($root$$2$$[$subProperty$$] = {});
      $root$$2$$ = $root$$2$$[$subProperty$$];
      $path$$8$$ = $path$$8$$.substring($path$$8$$.indexOf($delimiter$$) + 1, $path$$8$$.length);
    }
    $root$$2$$ && ($result$$39$$.object = $root$$2$$, $result$$39$$.parameter = $path$$8$$);
    return $result$$39$$;
  };
  $DvtJsonPath$$.prototype.$_resolvePath$ = function $$DvtJsonPath$$$$$_resolvePath$$($createIfMissing$$1_result$$40$$) {
    void 0 === this.$_leaf$ && ($createIfMissing$$1_result$$40$$ = this.$_resolveLeafObjectAndProperty$(this.$_root$, this.$_path$, this.$_delimiter$, $createIfMissing$$1_result$$40$$), this.$_leaf$ = $createIfMissing$$1_result$$40$$.object, this.$_param$ = $createIfMissing$$1_result$$40$$.parameter);
  };
  $DvtJsonPath$$.prototype.$getValue$ = function $$DvtJsonPath$$$$$getValue$$() {
    this.$_resolvePath$(!1);
    return void 0 === this.$_leaf$ ? void 0 : this.$_leaf$[this.$_param$];
  };
  $DvtJsonPath$$.prototype.$setValue$ = function $$DvtJsonPath$$$$$setValue$$($value$$212$$, $bOverride$$) {
    this.$_resolvePath$(!0);
    if ($bOverride$$ || !this.$_leaf$[this.$_param$]) {
      this.$_leaf$[this.$_param$] = $value$$212$$;
    }
  };
  var $DvtStyleProcessor$$ = {CSS_TEXT_PROPERTIES:function($cssDiv$$) {
    var $ignoreProperties$$ = {};
    $cssDiv$$ && ($cssDiv$$.hasClass("oj-gaugeMetricLabel") && $cssDiv$$.hasClass($cssDiv$$.parentNode, "oj-ledGauge") ? ($ignoreProperties$$["font-size"] = !0, $ignoreProperties$$.color = !0) : $cssDiv$$.hasClass($cssDiv$$, "oj-chartSliceLabel") ? $ignoreProperties$$.color = !0 : $cssDiv$$.hasClass("oj-treemap-node-header") && ($ignoreProperties$$["font-weight"] = !0));
    return $DvtStyleProcessor$$.$_buildTextCssPropertiesObject$($cssDiv$$, $ignoreProperties$$);
  }, CSS_BACKGROUND_PROPERTIES:function($cssDiv$$1$$) {
    return $DvtStyleProcessor$$.$_buildCssBackgroundPropertiesObject$($cssDiv$$1$$);
  }, CSS_URL:function($cssDiv$$2$$) {
    return $DvtStyleProcessor$$.$_parseUrl$($cssDiv$$2$$);
  }, $_INHERITED_FONT_COLOR$:"rgb(254, 0, 254)", $_INHERITED_FONT_FAMILY$:"Times", $_INHERITED_FONT_SIZE$:"1px", $_INHERITED_FONT_WEIGHT$:"1", $_INHERITED_FONT_STYLE$:"normal", $_FONT_SIZE_BUFFER$:4, $_styleCache$:{}, $defaultStyleProcessor$:function($cssDiv$$3$$, $property$$23$$) {
    return $cssDiv$$3$$.css($property$$23$$);
  }, $_parseUrl$:function($cssDiv$$4_url$$20$$) {
    return($cssDiv$$4_url$$20$$ = $cssDiv$$4_url$$20$$.css("background-image")) && -1 !== $cssDiv$$4_url$$20$$.indexOf("url(") ? $cssDiv$$4_url$$20$$.slice($cssDiv$$4_url$$20$$.indexOf("url(") + 4, $cssDiv$$4_url$$20$$.length - 1).replace(/"/g, "") : $cssDiv$$4_url$$20$$;
  }, $_buildCssBackgroundPropertiesObject$:function($cssDiv$$5$$) {
    var $cssObj$$ = {};
    $cssDiv$$5$$.css("border-top-color") && ($cssObj$$["border-color"] = $cssDiv$$5$$.css("border-top-color"));
    $cssDiv$$5$$.css("border-width") && $cssDiv$$5$$.css("border-style") && "none" != $cssDiv$$5$$.css("border-style") && ($cssObj$$["border-width"] = $cssDiv$$5$$.css("border-width"));
    $cssDiv$$5$$.css("background-color") && ($cssObj$$["background-color"] = $cssDiv$$5$$.css("background-color"));
    return $cssObj$$;
  }, $_buildTextCssPropertiesObject$:function($cssDiv$$6$$, $ignoreProperties$$1$$) {
    var $cssObj$$1$$ = {}, $value$$213$$ = $cssDiv$$6$$.css("font-family");
    $value$$213$$ && $value$$213$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_FAMILY$ && ($cssObj$$1$$["font-family"] = $value$$213$$.replace(/"/g, "'"));
    $value$$213$$ = $cssDiv$$6$$.css("font-size");
    !$value$$213$$ || -1 < $value$$213$$.indexOf("px") && parseFloat($value$$213$$) < $DvtStyleProcessor$$.$_FONT_SIZE_BUFFER$ || $ignoreProperties$$1$$["font-size"] || ($cssObj$$1$$["font-size"] = $value$$213$$);
    ($value$$213$$ = $cssDiv$$6$$.css("font-weight")) && $value$$213$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$ && !$ignoreProperties$$1$$["font-weight"] && ($cssObj$$1$$["font-weight"] = $value$$213$$);
    ($value$$213$$ = $cssDiv$$6$$.css("color")) && $value$$213$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$ && !$ignoreProperties$$1$$.color && ($cssObj$$1$$.color = $value$$213$$);
    ($value$$213$$ = $cssDiv$$6$$.css("font-style")) && $value$$213$$ !== $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$ && ($cssObj$$1$$["font-style"] = $value$$213$$);
    return $cssObj$$1$$;
  }, $processStyles$:function($definitions_element$$103_styleClasses$$, $options$$249$$, $componentClasses_innerDummyDiv$$, $childClasses$$) {
    var $outerDummyDiv$$ = $$$$15$$(document.createElement("div"));
    $outerDummyDiv$$.attr("style", "display:none;");
    $definitions_element$$103_styleClasses$$.append($outerDummyDiv$$);
    $definitions_element$$103_styleClasses$$ = "";
    for (var $i$$242$$ = 0;$i$$242$$ < $componentClasses_innerDummyDiv$$.length;$i$$242$$++) {
      $definitions_element$$103_styleClasses$$ = $definitions_element$$103_styleClasses$$ + $componentClasses_innerDummyDiv$$[$i$$242$$] + " ";
    }
    $outerDummyDiv$$.attr("class", $definitions_element$$103_styleClasses$$);
    $$$$15$$(document.body).append($outerDummyDiv$$);
    $componentClasses_innerDummyDiv$$ = $$$$15$$(document.createElement("div"));
    $componentClasses_innerDummyDiv$$.css("font-size", $DvtStyleProcessor$$.$_INHERITED_FONT_SIZE$);
    $componentClasses_innerDummyDiv$$.css("color", $DvtStyleProcessor$$.$_INHERITED_FONT_COLOR$);
    $componentClasses_innerDummyDiv$$.css("font-weight", $DvtStyleProcessor$$.$_INHERITED_FONT_WEIGHT$);
    $componentClasses_innerDummyDiv$$.css("font-style", $DvtStyleProcessor$$.$_INHERITED_FONT_STYLE$);
    $outerDummyDiv$$.append($componentClasses_innerDummyDiv$$);
    for (var $styleClass$$4$$ in $childClasses$$) {
      $definitions_element$$103_styleClasses$$ = $childClasses$$[$styleClass$$4$$], $definitions_element$$103_styleClasses$$ instanceof Array || ($definitions_element$$103_styleClasses$$ = [$definitions_element$$103_styleClasses$$]), $DvtStyleProcessor$$.$_processStyle$($componentClasses_innerDummyDiv$$, $options$$249$$, $styleClass$$4$$, $definitions_element$$103_styleClasses$$);
    }
    $outerDummyDiv$$.remove();
  }, $_processStyle$:function($element$$104$$, $options$$250$$, $styleClass$$5$$, $definitions$$1$$) {
    $DvtStyleProcessor$$.$_styleCache$[$styleClass$$5$$] || ($DvtStyleProcessor$$.$_styleCache$[$styleClass$$5$$] = {});
    for (var $cssDiv$$7$$ = null, $i$$243$$ = 0;$i$$243$$ < $definitions$$1$$.length;$i$$243$$++) {
      var $definition_path$$10$$ = $definitions$$1$$[$i$$243$$], $property$$24_strValue$$ = $definition_path$$10$$.property;
      if ($property$$24_strValue$$) {
        var $value$$214$$ = $DvtStyleProcessor$$.$_styleCache$[$styleClass$$5$$][$property$$24_strValue$$];
        "undefined" == typeof $value$$214$$ && ($cssDiv$$7$$ || ($cssDiv$$7$$ = $$$$15$$(document.createElement("div")), $cssDiv$$7$$.addClass($styleClass$$5$$), $element$$104$$.append($cssDiv$$7$$)), $value$$214$$ = $DvtStyleProcessor$$.$_resolveStyle$($cssDiv$$7$$, $property$$24_strValue$$), $DvtStyleProcessor$$.$_styleCache$[$styleClass$$5$$][$property$$24_strValue$$] = $value$$214$$);
        if (null != $value$$214$$) {
          var $definition_path$$10$$ = new $DvtJsonPath$$($options$$250$$, $definition_path$$10$$.path), $handler$$47$$ = $DvtStyleProcessor$$[$property$$24_strValue$$];
          if (null != $handler$$47$$) {
            var $optionsValue$$ = $definition_path$$10$$.$getValue$();
            if ("CSS_URL" !== $property$$24_strValue$$) {
              $property$$24_strValue$$ = "";
              if (null != $optionsValue$$) {
                for (var $attr$$16$$ in $value$$214$$) {
                  -1 === $optionsValue$$.indexOf($attr$$16$$) && ($property$$24_strValue$$ += $attr$$16$$ + ":" + $value$$214$$[$attr$$16$$] + ";");
                }
                $property$$24_strValue$$ += $optionsValue$$;
              } else {
                for ($attr$$16$$ in $value$$214$$) {
                  $property$$24_strValue$$ += $attr$$16$$ + ":" + $value$$214$$[$attr$$16$$] + ";";
                }
              }
              $value$$214$$ = $property$$24_strValue$$;
            }
          }
          $definition_path$$10$$.$setValue$($value$$214$$, null != $handler$$47$$);
        }
      }
    }
  }, $_resolveStyle$:function($cssDiv$$8$$, $property$$25$$) {
    var $handler$$48_value$$215$$ = $DvtStyleProcessor$$[$property$$25$$], $handler$$48_value$$215$$ = $handler$$48_value$$215$$ ? $handler$$48_value$$215$$($cssDiv$$8$$) : $DvtStyleProcessor$$.$defaultStyleProcessor$($cssDiv$$8$$, $property$$25$$);
    return null == $handler$$48_value$$215$$ || "string" == typeof $handler$$48_value$$215$$ && "" == $handler$$48_value$$215$$.replace(/^\s+/g, "") ? null : $handler$$48_value$$215$$;
  }};
  $oj$$15$$.$__registerWidget$("oj.dvtBaseComponent", $$$$15$$.oj.baseComponent, {_ComponentCreate:function() {
    this._super();
    this.$_numDeferredObjs$ = this.$_renderCount$ = 0;
    this.$_optionsCopy$ = null;
    this.$_referenceDiv$ = $$$$15$$(document.createElement("div"));
    this.$_referenceDiv$.attr("style", "visibility:hidden;");
    this.element.append(this.$_referenceDiv$);
    var $parentElement$$4$$ = this.element[0].parentElement;
    this.$_context$ = $parentElement$$4$$ && $parentElement$$4$$.$_dvtcontext$ ? $parentElement$$4$$.$_dvtcontext$ : new $dvt$$1$$.DvtContext(this.element[0], null, this.$_referenceDiv$[0]);
    this.$_context$.setReadingDirection(this.$_GetReadingDirection$());
    this.$_context$.setTooltipAttachedCallback($oj$$15$$.Components.$subtreeAttached$);
    this.$_context$.setTooltipStyleClass("oj-dvt-tooltip");
    this.$_context$.setDatatipStyleClass("oj-dvt-datatip");
    $$$$15$$(document.body).hasClass("oj-hicontrast") && $dvt$$1$$.DvtAgent.setHighContrast(!0);
    this.$_component$ = this.$_CreateDvtComponent$(this.$_context$, this.$_HandleEvent$, this);
    this.$_context$.getStage().addChild(this.$_component$);
    !1 !== $dvt$$1$$.requireJS && (this.$_setLocaleHelpers$(), this.$_processTranslations$());
    this.$_LoadResources$();
    this.options._environment = "jet";
    this.options._widgetConstructor = $oj$$15$$.Components.$getWidgetConstructor$(this.element);
  }, $_AfterCreate$:function() {
    this._super();
    this.element.attr("tabIndex", 0);
    this.$_Render$();
    "off" != this.options.trackResize && this.$_addResizeListener$();
  }, refresh:function() {
    this._super();
    this.$_context$.setReadingDirection(this.$_GetReadingDirection$());
    this.$_processTranslations$();
    this.$_Render$();
  }, getNodeBySubId:function($locator$$19_subId$$20$$) {
    var $automation$$ = this.$_component$ && this.$_component$.getAutomation ? this.$_component$.getAutomation() : null;
    if ($automation$$) {
      return $locator$$19_subId$$20$$ = this.$_ConvertLocatorToSubId$($locator$$19_subId$$20$$), $automation$$.getDomElementForSubId($locator$$19_subId$$20$$);
    }
  }, getSubIdByNode:function($node$$61_subId$$21$$) {
    var $automation$$1$$ = this.$_component$ && this.$_component$.getAutomation ? this.$_component$.getAutomation() : null;
    if ($automation$$1$$) {
      return($node$$61_subId$$21$$ = $automation$$1$$.getSubIdForDomElement($node$$61_subId$$21$$)) ? this.$_ConvertSubIdToLocator$($node$$61_subId$$21$$) : null;
    }
  }, $_ConvertLocatorToSubId$:function() {
    return null;
  }, $_ConvertSubIdToLocator$:function() {
    return null;
  }, $_ProcessStyles$:function() {
    for (var $componentStyles$$ = this.$_GetComponentStyleClasses$(), $i$$244$$ = 0;$i$$244$$ < $componentStyles$$.length;$i$$244$$++) {
      this.element.addClass($componentStyles$$[$i$$244$$]);
    }
    $DvtStyleProcessor$$.$processStyles$(this.element, this.options, this.$_GetComponentStyleClasses$(), this.$_GetChildStyleClasses$());
  }, $_GetComponentStyleClasses$:function() {
    return["oj-dvtbase"];
  }, $_GetChildStyleClasses$:function() {
    return{"oj-dvt-no-data-message":{path:"_statusMessageStyle", property:"CSS_TEXT_PROPERTIES"}};
  }, $_GetEventTypes$:function() {
    return[];
  }, $_GetTranslationMap$:function() {
    var $ret$$30_translations$$10$$ = this.options.translations, $ret$$30_translations$$10$$ = {"DvtUtilBundle.CLEAR_SELECTION":$ret$$30_translations$$10$$.labelClearSelection, "DvtUtilBundle.COLON_SEP_LIST":$ret$$30_translations$$10$$.labelAndValue, "DvtUtilBundle.INVALID_DATA":$ret$$30_translations$$10$$.labelInvalidData, "DvtUtilBundle.NO_DATA":$ret$$30_translations$$10$$.labelNoData, "DvtUtilBundle.DATA_VISUALIZATION":$ret$$30_translations$$10$$.labelDataVisualization, "DvtUtilBundle.STATE_SELECTED":$ret$$30_translations$$10$$.stateSelected, 
    "DvtUtilBundle.STATE_UNSELECTED":$ret$$30_translations$$10$$.stateUnselected, "DvtUtilBundle.STATE_MAXIMIZED":$ret$$30_translations$$10$$.stateMaximized, "DvtUtilBundle.STATE_MINIMIZED":$ret$$30_translations$$10$$.stateMinimized, "DvtUtilBundle.STATE_EXPANDED":$ret$$30_translations$$10$$.stateExpanded, "DvtUtilBundle.STATE_COLLAPSED":$ret$$30_translations$$10$$.stateCollapsed, "DvtUtilBundle.STATE_ISOLATED":$ret$$30_translations$$10$$.stateIsolated, "DvtUtilBundle.STATE_HIDDEN":$ret$$30_translations$$10$$.stateHidden, 
    "DvtUtilBundle.STATE_VISIBLE":$ret$$30_translations$$10$$.stateVisible, "DvtUtilBundle.SCALING_SUFFIX_THOUSAND":$ret$$30_translations$$10$$.labelScalingSuffixThousand, "DvtUtilBundle.SCALING_SUFFIX_MILLION":$ret$$30_translations$$10$$.labelScalingSuffixMillion, "DvtUtilBundle.SCALING_SUFFIX_BILLION":$ret$$30_translations$$10$$.labelScalingSuffixBillion, "DvtUtilBundle.SCALING_SUFFIX_TRILLION":$ret$$30_translations$$10$$.labelScalingSuffixTrillion, "DvtUtilBundle.SCALING_SUFFIX_QUADRILLION":$ret$$30_translations$$10$$.labelScalingSuffixQuadrillion}, 
    $monthNames$$2$$ = $oj$$15$$.$LocaleData$.$getMonthNames$("abbreviated");
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_JANUARY"] = $monthNames$$2$$[0];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_FEBRUARY"] = $monthNames$$2$$[1];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_MARCH"] = $monthNames$$2$$[2];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_APRIL"] = $monthNames$$2$$[3];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_MAY"] = $monthNames$$2$$[4];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_JUNE"] = $monthNames$$2$$[5];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_JULY"] = $monthNames$$2$$[6];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_AUGUST"] = $monthNames$$2$$[7];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_SEPTEMBER"] = $monthNames$$2$$[8];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_OCTOBER"] = $monthNames$$2$$[9];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_NOVEMBER"] = $monthNames$$2$$[10];
    $ret$$30_translations$$10$$["DvtUtilBundle.MONTH_SHORT_DECEMBER"] = $monthNames$$2$$[11];
    return $ret$$30_translations$$10$$;
  }, $_processTranslations$:function() {
    var $translationMap$$ = this.$_GetTranslationMap$();
    $dvt$$1$$.DvtBundle.addLocalizedStrings($translationMap$$);
  }, $_setLocaleHelpers$:function() {
    var $helpers$$ = {};
    $helpers$$.numberConverterFactory = $oj$$15$$.$Validation$.$getDefaultConverterFactory$("number");
    $helpers$$.dateToIsoConverter = function $$helpers$$$dateToIsoConverter$($input$$4$$) {
      return $input$$4$$ instanceof Date ? $oj$$15$$.$IntlConverterUtils$.dateToLocalIso($input$$4$$) : $input$$4$$;
    };
    $helpers$$.isoToDateConverter = function $$helpers$$$isoToDateConverter$($input$$5$$) {
      return "string" == typeof $input$$5$$ ? $oj$$15$$.$IntlConverterUtils$.isoToLocalDate($input$$5$$) : $input$$5$$;
    };
    this.$_context$.setLocaleHelpers($helpers$$);
  }, _destroy:function() {
    this.$_context$.hideTooltips();
    this.$_component$.destroy && this.$_component$.destroy();
    this.$_removeResizeListener$();
    this.element.children().remove();
    this.element.removeAttr("role").removeAttr("tabIndex");
    for (var $componentStyles$$1$$ = this.$_GetComponentStyleClasses$(), $i$$245$$ = 0;$i$$245$$ < $componentStyles$$1$$.length;$i$$245$$++) {
      this.element.removeClass($componentStyles$$1$$[$i$$245$$]);
    }
    this._super();
  }, _setOptions:function($options$$251$$, $flags$$23$$) {
    this._superApply(arguments);
    var $trackResize$$ = this.options.trackResize;
    "off" == $trackResize$$ && this.$_resizeListener$ ? this.$_removeResizeListener$() : "off" == $trackResize$$ || this.$_resizeListener$ || this.$_addResizeListener$();
    if (!this.$_bUserDrivenChange$) {
      var $bRenderNeeded$$ = !1, $eventTypes$$ = this.$_GetEventTypes$(), $optimizedOptions$$ = ["highlightedCategories", "selection", "dataCursorPosition"];
      $$$$15$$.each($options$$251$$, function($key$$70$$) {
        if (0 > $eventTypes$$.indexOf($key$$70$$) && 0 > $optimizedOptions$$.indexOf($key$$70$$)) {
          return $bRenderNeeded$$ = !0, !1;
        }
      });
      $bRenderNeeded$$ ? this.$_Render$() : (void 0 !== $options$$251$$.highlightedCategories && this.$_component$.highlight($options$$251$$.highlightedCategories), void 0 !== $options$$251$$.selection && this.$_component$.select($options$$251$$.selection), void 0 !== $options$$251$$.dataCursorPosition && this.$_component$.positionDataCursor && this.$_component$.positionDataCursor($options$$251$$.dataCursorPosition));
    }
  }, $_CreateDvtComponent$:function() {
    return null;
  }, $_HandleEvent$:function($event$$246$$) {
    var $type$$81$$ = $event$$246$$ && $event$$246$$.getType ? $event$$246$$.getType() : null;
    $type$$81$$ === $dvt$$1$$.DvtCategoryHideShowEvent.TYPE_HIDE || $type$$81$$ === $dvt$$1$$.DvtCategoryHideShowEvent.TYPE_SHOW ? this.$_UserOptionChange$("hiddenCategories", $event$$246$$.hiddenCategories) : $type$$81$$ === $dvt$$1$$.DvtCategoryRolloverEvent.TYPE_OVER || $type$$81$$ === $dvt$$1$$.DvtCategoryRolloverEvent.TYPE_OUT ? this.$_UserOptionChange$("highlightedCategories", $event$$246$$.categories) : $type$$81$$ === $dvt$$1$$.DvtOptionChangeEvent.TYPE ? this.$_UserOptionChange$($event$$246$$.key, 
    $event$$246$$.value, $event$$246$$.optionMetadata) : this.options.contextMenu && $type$$81$$ === $dvt$$1$$.DvtComponentTouchEvent.TOUCH_HOVER_END_TYPE ? this.$_OpenContextMenu$($$$$15$$.Event($event$$246$$.getNativeEvent()), "touch") : "ready" === $type$$81$$ && 0 === this.$_numDeferredObjs$ && (this.$_promiseResolve$ && this.$_promiseResolve$(!0), this.$_ready$ = !0, this.$_promise$ = this.$_promiseResolve$ = null);
  }, $_addResizeListener$:function() {
    this.$_resizeListener$ || (this.$_resizeListener$ = this.$_handleResize$.bind(this), $oj$$15$$.$DomUtils$.$addResizeListener$(this.element[0], this.$_resizeListener$, 250));
  }, $_removeResizeListener$:function() {
    this.$_resizeListener$ && ($oj$$15$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_resizeListener$), this.$_resizeListener$ = null);
  }, $_handleResize$:function() {
    var $newWidth$$2$$ = this.element.width(), $newHeight$$2$$ = this.element.height();
    (null == this.$_width$ || null == this.$_height$ || 5 <= Math.abs($newWidth$$2$$ - this.$_width$) + Math.abs($newHeight$$2$$ - this.$_height$)) && this.$_Render$(!0);
  }, $_LoadResources$:function() {
  }, $_Render$:function($isResize$$) {
    this.$_ready$ = !1;
    this.$_context$.isReadyToRender() ? (this.$_width$ = this.$_IsFlowingLayoutSupported$() ? null : this.element.width(), this.$_height$ = this.$_IsFlowingLayoutSupported$() ? null : this.element.height(), this.options._width = this.$_width$, this.options._height = this.$_height$, this.options._locale = $oj$$15$$.$Config$.$getLocale$(), this.$_ProcessStyles$(), this.$_renderCount$++, $isResize$$ ? this.$_optionsCopy$ || this.$_renderComponent$(null) : 0 === this.$_resolveDeferredData$().length && 
    this.$_renderComponent$(this.options), this.$_renderNeeded$ = !1) : this.$_renderNeeded$ = !0;
  }, $_NotifyShown$:function() {
    this._super();
    this.$_renderNeeded$ && this.$_Render$();
  }, $_NotifyAttached$:function() {
    this._super();
    this.$_renderNeeded$ && this.$_Render$();
  }, $_NotifyDetached$:function() {
    this._super();
    this.$_context$.hideTooltips();
  }, $_NotifyHidden$:function() {
    this._super();
    this.$_context$.hideTooltips();
  }, $_UserOptionChange$:function($key$$71$$, $value$$217$$, $optionMetadata$$1$$) {
    this.$_bUserDrivenChange$ = !0;
    this.option($key$$71$$, $value$$217$$, {_context:{$writeback$:!0, $optionMetadata$:$optionMetadata$$1$$, $internalSet$:!0}});
    this.$_bUserDrivenChange$ = !1;
  }, $_NotifyContextMenuGesture$:function($menu$$5$$, $event$$247$$, $eventType$$34$$) {
    "touch" !== $eventType$$34$$ && ("keyboard" === $eventType$$34$$ ? this.$_OpenContextMenu$($event$$247$$, $eventType$$34$$, {position:{of:this.$_component$.getKeyboardFocus()}}) : this._super($menu$$5$$, $event$$247$$, $eventType$$34$$));
  }, $_GetDvtComponent$:function($element$$105_widget$$4$$) {
    return($element$$105_widget$$4$$ = $oj$$15$$.Components.$getWidgetConstructor$($element$$105_widget$$4$$)("instance")) ? $element$$105_widget$$4$$.$_component$ : null;
  }, $_AddAutomationGetters$:function($map$$1$$) {
    if ($map$$1$$) {
      var $props$$12$$ = {}, $key$$72$$;
      for ($key$$72$$ in $map$$1$$) {
        this.$_addGetter$($map$$1$$, $key$$72$$, $props$$12$$);
      }
      Object.defineProperties($map$$1$$, $props$$12$$);
    }
  }, $_addGetter$:function($map$$2$$, $key$$73$$, $props$$13$$) {
    var $getterName$$ = ("selected" == $key$$73$$ ? "is" : "get") + $key$$73$$.charAt(0).toUpperCase() + $key$$73$$.slice(1);
    $props$$13$$[$getterName$$] = {value:function $$props$$13$$$$getterName$$$value$() {
      return $map$$2$$[$key$$73$$];
    }};
  }, $_GetStringFromIndexPath$:function($indexPath$$) {
    for (var $ret$$31$$ = "", $i$$246$$ = 0;$i$$246$$ < $indexPath$$.length;$i$$246$$++) {
      $ret$$31$$ += "[" + $indexPath$$[$i$$246$$] + "]";
    }
    return $ret$$31$$;
  }, $_GetIndexPath$:function($subId$$23$$) {
    for (var $indexPath$$1$$ = [], $currentIndex_end$$8$$ = 0;0 < $subId$$23$$.indexOf("[", $currentIndex_end$$8$$);) {
      var $start$$28$$ = $subId$$23$$.indexOf("[", $currentIndex_end$$8$$) + 1, $currentIndex_end$$8$$ = $subId$$23$$.indexOf("]", $currentIndex_end$$8$$);
      $indexPath$$1$$.push(Number($subId$$23$$.substring($start$$28$$, $currentIndex_end$$8$$)));
      $currentIndex_end$$8$$ += 1;
    }
    return $indexPath$$1$$;
  }, $_GetFirstIndex$:function($subId$$24$$) {
    return Number(this.$_GetFirstBracketedString$($subId$$24$$));
  }, $_GetFirstBracketedString$:function($subId$$25$$) {
    var $start$$29$$ = $subId$$25$$.indexOf("[") + 1, $end$$9$$ = $subId$$25$$.indexOf("]");
    return $subId$$25$$.substring($start$$29$$, $end$$9$$);
  }, $_GetComponentDeferredDataPaths$:function() {
    return{};
  }, $_resolveDeferredData$:function() {
    this.$_optionsCopy$ = null;
    var $paths$$ = this.$_GetComponentDeferredDataPaths$(), $path$$11$$;
    for ($path$$11$$ in $paths$$) {
      for (var $subpaths$$ = $paths$$[$path$$11$$], $i$$247$$ = 0;$i$$247$$ < $subpaths$$.length;$i$$247$$++) {
        if ("root" === $path$$11$$) {
          if (this.$_copyOptions$(this.options, $subpaths$$[$i$$247$$])) {
            break;
          }
        } else {
          var $suboptions$$ = this.options[$path$$11$$];
          if ($suboptions$$) {
            for (var $j$$35$$ = 0;$j$$35$$ < $suboptions$$.length && !this.$_copyOptions$($suboptions$$[$j$$35$$], $subpaths$$[$i$$247$$]);$j$$35$$++) {
            }
          }
        }
      }
    }
    var $deferredData$$1$$ = [];
    this.$_numDeferredObjs$ = 0;
    if (this.$_optionsCopy$) {
      var $self$$112$$ = this;
      for ($path$$11$$ in $paths$$) {
        $subpaths$$ = $paths$$[$path$$11$$], $subpaths$$.forEach(function($subpath$$) {
          var $promise$$;
          if ("root" === $path$$11$$) {
            ($promise$$ = $self$$112$$.$_getPromise$($self$$112$$.$_optionsCopy$, $subpath$$)) && $deferredData$$1$$.push($promise$$);
          } else {
            var $suboptions$$1$$ = $self$$112$$.$_optionsCopy$[$path$$11$$];
            if ($suboptions$$1$$) {
              for (var $j$$36$$ = 0;$j$$36$$ < $suboptions$$1$$.length;$j$$36$$++) {
                ($promise$$ = $self$$112$$.$_getPromise$($suboptions$$1$$[$j$$36$$], $subpath$$)) && $deferredData$$1$$.push($promise$$);
              }
            }
          }
        });
      }
    }
    return $deferredData$$1$$;
  }, $_copyOptions$:function($options$$252$$, $path$$12$$) {
    if (!this.$_optionsCopy$) {
      var $optionValue$$2$$ = (new $DvtJsonPath$$($options$$252$$, $path$$12$$)).$getValue$();
      $optionValue$$2$$ && ($optionValue$$2$$ instanceof Function || $optionValue$$2$$ instanceof Promise) && (this.$_optionsCopy$ = $dvt$$1$$.DvtJSONUtils.clone(this.options));
    }
    return null !== this.$_optionsCopy$;
  }, $_getPromise$:function($options$$253$$, $path$$13$$) {
    var $optionPath$$ = new $DvtJsonPath$$($options$$253$$, $path$$13$$), $optionValue$$3$$ = $optionPath$$.$getValue$();
    $optionValue$$3$$ instanceof Function && ($optionValue$$3$$ = Promise.resolve($optionValue$$3$$(this.$_GetDataContext$($options$$253$$))));
    if ($optionValue$$3$$ && $optionValue$$3$$ instanceof Promise) {
      this.$_numDeferredObjs$++;
      var $renderCount$$ = this.$_renderCount$, $self$$113$$ = this;
      $optionValue$$3$$.then(function($value$$218$$) {
        $self$$113$$.$_renderDeferredData$($renderCount$$, $optionPath$$, $value$$218$$);
      }, function() {
        $self$$113$$.$_renderDeferredData$($renderCount$$, $optionPath$$, []);
      });
      return $optionValue$$3$$;
    }
    return null;
  }, $_renderDeferredData$:function($renderCount$$1$$, $optionPath$$1$$, $value$$219$$) {
    $renderCount$$1$$ === this.$_renderCount$ && (this.$_numDeferredObjs$--, $optionPath$$1$$.$setValue$($value$$219$$, !0), 0 === this.$_numDeferredObjs$ && (this.$_renderComponent$(this.$_optionsCopy$), this.$_optionsCopy$ = null));
  }, $_renderComponent$:function($options$$254$$) {
    var $bRemoveResizeListener$$ = this.$_IsFlowingLayoutSupported$() && this.$_resizeListener$;
    $bRemoveResizeListener$$ && this.$_removeResizeListener$();
    this.$_component$.render($options$$254$$, this.$_width$, this.$_height$);
    $bRemoveResizeListener$$ && this.$_addResizeListener$();
  }, $_GetDataContext$:function() {
    return{};
  }, $_IsFlowingLayoutSupported$:function() {
    return!1;
  }, whenReady:function() {
    if (this.$_ready$) {
      return Promise.resolve(!0);
    }
    if (!this.$_promise$) {
      var $self$$114$$ = this;
      this.$_promise$ = new Promise(function($resolve$$28$$) {
        $self$$114$$.$_promiseResolve$ = $resolve$$28$$;
      });
    }
    return this.$_promise$;
  }}, !0);
  $oj$$15$$.$ShapeAttributeGroupHandler$ = function $$oj$$15$$$$ShapeAttributeGroupHandler$$($matchRules$$3$$) {
    this.Init($matchRules$$3$$);
  };
  $goog$exportPath_$$("ShapeAttributeGroupHandler", $oj$$15$$.$ShapeAttributeGroupHandler$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$ShapeAttributeGroupHandler$, $oj$$15$$.$AttributeGroupHandler$, "oj.ShapeAttributeGroupHandler");
  $oj$$15$$.$ShapeAttributeGroupHandler$.$_attributeValues$ = "square circle diamond plus triangleDown triangleUp human".split(" ");
  $oj$$15$$.$ShapeAttributeGroupHandler$.prototype.$getValueRamp$ = function $$oj$$15$$$$ShapeAttributeGroupHandler$$$$getValueRamp$$() {
    return $oj$$15$$.$ShapeAttributeGroupHandler$.$_attributeValues$.slice();
  };
});
