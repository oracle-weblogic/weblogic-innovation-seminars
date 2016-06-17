/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$73$$, $$$$67$$, $comp$$17$$, $base$$13$$, $dvt$$10$$) {
  $oj$$73$$.$__registerWidget$("oj.ojThematicMap", $$$$67$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_currentLocale$:"", $_loadedBasemaps$:[], $_supportedLocales$:{ar:"ar", cs:"cs", da:"da", de:"de", el:"el", es:"es", fi:"fi", fr:"fr", "fr-ca":"fr_CA", he:"iw", hu:"hu", it:"it", ja:"ja", ko:"ko", nl:"nl", no:"no", pl:"pl", pt:"pt_BR", "pt-pt":"pt", ro:"ro", ru:"ru", sk:"sk", sv:"sv", th:"th", tr:"tr", "zh-hans":"zh_CN", "zh-hant":"zh_TW"}, _ComponentCreate:function() {
    this._super();
    this.$_checkBasemaps$ = [];
    this.$_initiallyRendered$ = !1;
    this.$_dataLayersToUpdate$ = [];
  }, $_CreateDvtComponent$:function($context$$160$$, $callback$$127$$, $callbackObj$$13$$) {
    return $dvt$$10$$.DvtThematicMap.newInstance($context$$160$$, $callback$$127$$, $callbackObj$$13$$);
  }, $_ConvertLocatorToSubId$:function($locator$$60$$) {
    var $subId$$64$$ = $locator$$60$$.subId;
    "oj-thematicmap-area" == $subId$$64$$ ? $subId$$64$$ = $locator$$60$$.dataLayer + ":area[" + $locator$$60$$.index + "]" : "oj-thematicmap-marker" == $subId$$64$$ ? $subId$$64$$ = $locator$$60$$.dataLayer + ":marker[" + $locator$$60$$.index + "]" : "oj-thematicmap-tooltip" == $subId$$64$$ && ($subId$$64$$ = "tooltip");
    return $subId$$64$$;
  }, $_ConvertSubIdToLocator$:function($subId$$65$$) {
    var $locator$$61$$ = {};
    0 < $subId$$65$$.indexOf(":area") ? ($locator$$61$$.subId = "oj-thematicmap-area", $locator$$61$$.dataLayer = $subId$$65$$.substring(0, $subId$$65$$.indexOf(":")), $locator$$61$$.index = this.$_GetFirstIndex$($subId$$65$$)) : 0 < $subId$$65$$.indexOf(":marker") ? ($locator$$61$$.subId = "oj-thematicmap-marker", $locator$$61$$.dataLayer = $subId$$65$$.substring(0, $subId$$65$$.indexOf(":")), $locator$$61$$.index = this.$_GetFirstIndex$($subId$$65$$)) : "tooltip" == $subId$$65$$ && ($locator$$61$$.subId = 
    "oj-thematicmap-tooltip");
    return $locator$$61$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$22$$ = this._super();
    $styleClasses$$22$$.push("oj-thematicmap");
    return $styleClasses$$22$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$23$$ = this._super();
    $styleClasses$$23$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$23$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$23$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$23$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}];
    return $styleClasses$$23$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, _setOptions:function($options$$406$$, $flags$$53$$) {
    var $i$$444_numUpdates$$ = Object.keys($options$$406$$).length, $newAreaLayers$$ = $options$$406$$.areaLayers, $oldAreaLayers$$ = this.options.areaLayers, $newAreaLayer_pointDataLayers$$ = $options$$406$$.pointDataLayers;
    if (1 == $i$$444_numUpdates$$ && $newAreaLayers$$ && $oldAreaLayers$$ && 0 < $oldAreaLayers$$.length) {
      for ($i$$444_numUpdates$$ = 0;$i$$444_numUpdates$$ < $newAreaLayers$$.length;$i$$444_numUpdates$$++) {
        var $newAreaLayer_pointDataLayers$$ = $newAreaLayers$$[$i$$444_numUpdates$$], $currAreaLayer$$ = $oldAreaLayers$$[$i$$444_numUpdates$$], $updateDataLayer$$ = !0, $areaLayerKey$$;
        for ($areaLayerKey$$ in $newAreaLayer_pointDataLayers$$) {
          "areaDataLayer" != $areaLayerKey$$ && $newAreaLayer_pointDataLayers$$[$areaLayerKey$$] != $currAreaLayer$$[$areaLayerKey$$] && ($updateDataLayer$$ = $updateDataLayer$$ && !1);
        }
        $updateDataLayer$$ && !$oj$$73$$.$Object$.$compareValues$($currAreaLayer$$.areaDataLayer, $newAreaLayer_pointDataLayers$$.areaDataLayer) && this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$.areaDataLayer, parentLayer:$newAreaLayer_pointDataLayers$$.layer, isADL:!0});
      }
    } else {
      if (1 == $i$$444_numUpdates$$ && $newAreaLayer_pointDataLayers$$ && this.options.pointDataLayers && 0 < this.options.pointDataLayers.length) {
        for ($i$$444_numUpdates$$ = 0;$i$$444_numUpdates$$ < $newAreaLayer_pointDataLayers$$.length;$i$$444_numUpdates$$++) {
          $oj$$73$$.$Object$.$compareValues$(this.options.pointDataLayers[$i$$444_numUpdates$$], $newAreaLayer_pointDataLayers$$[$i$$444_numUpdates$$]) || this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$[$i$$444_numUpdates$$], parentLayer:$newAreaLayer_pointDataLayers$$[$i$$444_numUpdates$$].id, isADL:!1});
        }
      }
    }
    this._super($options$$406$$, $flags$$53$$);
  }, $_Render$:function() {
    this.$_loadBasemap$();
    for (var $i$$445$$ = 0;$i$$445$$ < this.$_checkBasemaps$.length;$i$$445$$++) {
      if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$445$$]]) {
        return;
      }
    }
    this.$_checkBasemaps$ = [];
    this.$_updateDataLayerSelection$();
    var $areaLayers_pointDataLayers$$1$$ = this.options.areaLayers;
    if ($areaLayers_pointDataLayers$$1$$) {
      for ($i$$445$$ = 0;$i$$445$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$445$$++) {
        var $areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$445$$].areaDataLayer;
        if ($areaDataLayer$$1_pointDataLayer$$) {
          var $dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer;
          $dl_renderer$$2$$ && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
        }
      }
    }
    if ($areaLayers_pointDataLayers$$1$$ = this.options.pointDataLayers) {
      for ($i$$445$$ = 0;$i$$445$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$445$$++) {
        ($areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$445$$]) && ($dl_renderer$$2$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer) && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$2$$, $areaDataLayer$$1_pointDataLayer$$.markers));
      }
    }
    this.options._contextHandler = this.$_getContextHandler$();
    if (this.$_initiallyRendered$ && 0 < this.$_dataLayersToUpdate$.length) {
      if (this.$_context$.isReadyToRender()) {
        for ($i$$445$$ = 0;$i$$445$$ < this.$_dataLayersToUpdate$.length;$i$$445$$++) {
          $dl_renderer$$2$$ = this.$_dataLayersToUpdate$[$i$$445$$], this.$_component$.updateLayer($dl_renderer$$2$$.options, $dl_renderer$$2$$.parentLayer, $dl_renderer$$2$$.isADL);
        }
        this.$_dataLayersToUpdate$ = [];
      }
    } else {
      this._super(), this.$_initiallyRendered$ = !0;
    }
    this._trigger("load", null, null);
  }, $_getTemplateRenderer$:function($templateFunction$$1$$) {
    var $thisRef$$2$$ = this;
    return function($context$$161_elem$$162$$) {
      var $dummyDiv$$1$$ = document.createElement("div");
      $dummyDiv$$1$$.style.display = "none";
      $dummyDiv$$1$$.$_dvtcontext$ = $thisRef$$2$$.$_context$;
      $thisRef$$2$$.element.append($dummyDiv$$1$$);
      $templateFunction$$1$$({parentElement:$dummyDiv$$1$$, data:$context$$161_elem$$162$$.data});
      return($context$$161_elem$$162$$ = $dummyDiv$$1$$.children[0]) ? "http://www.w3.org/2000/svg" === $context$$161_elem$$162$$.namespaceURI ? ($$$$67$$($dummyDiv$$1$$).remove(), $context$$161_elem$$162$$) : $thisRef$$2$$.$_GetDvtComponent$($context$$161_elem$$162$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$3$$ = this;
    return function($parentElement$$9$$, $rootElement$$21$$, $data$$172$$, $state$$13$$, $previousState$$1$$) {
      return{component:$oj$$73$$.Components.$getWidgetConstructor$($thisRef$$3$$.element), parentElement:$parentElement$$9$$, rootElement:$rootElement$$21$$, data:$data$$172$$, state:$state$$13$$, previousState:$previousState$$1$$, id:$data$$172$$.id, label:$data$$172$$.label, color:$data$$172$$.color, location:$data$$172$$.location, x:$data$$172$$.x, y:$data$$172$$.y};
    };
  }, renderDefaultHover:function($context$$163$$) {
    $context$$163$$.previousState && $context$$163$$.state.hovered == $context$$163$$.previousState.hovered || this.$_component$.processDefaultHoverEffect($context$$163$$.id, $context$$163$$.state.hovered);
  }, renderDefaultSelection:function($context$$164$$) {
    $context$$164$$.previousState && $context$$164$$.state.selected == $context$$164$$.previousState.selected || this.$_component$.processDefaultSelectionEffect($context$$164$$.id, $context$$164$$.state.selected);
  }, renderDefaultFocus:function($context$$165$$) {
    $context$$165$$.previousState && $context$$165$$.state.focused == $context$$165$$.previousState.focused || this.$_component$.processDefaultFocusEffect($context$$165$$.id, $context$$165$$.state.focused);
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$22$$ = $oj$$73$$.$Config$.$getLocale$();
      $locale$$22$$ !== this.$_currentLocale$ && (this.$_currentLocale$ = $locale$$22$$, this.$_loadedBasemaps$ = []);
      var $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers$$1_pointDataLayers$$2$$ = this.options.areaLayers;
      if ($areaLayers$$1_pointDataLayers$$2$$) {
        for (var $i$$446$$ = 0;$i$$446$$ < $areaLayers$$1_pointDataLayers$$2$$.length;$i$$446$$++) {
          var $layer$$22$$ = $areaLayers$$1_pointDataLayers$$2$$[$i$$446$$].layer;
          $layer$$22$$ && ($layer$$22$$ = $layer$$22$$.charAt(0).toUpperCase() + $layer$$22$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$22$$, $locale$$22$$));
        }
      }
      ($areaLayers$$1_pointDataLayers$$2$$ = this.options.pointDataLayers) && 0 < $areaLayers$$1_pointDataLayers$$2$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$35$$) {
    if (!this.$_loadedBasemaps$[$url$$35$$]) {
      var $resolvedUrl$$ = $oj$$73$$.$Config$.$getResourceUrl$($url$$35$$), $thisRef$$4$$ = this, $loadedBundles$$ = this.$_loadedBasemaps$;
      $$$$67$$.getScript($resolvedUrl$$, function() {
        $loadedBundles$$[$url$$35$$] = !0;
        $thisRef$$4$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName_bundleUrl$$, $i$$447_layer$$23$$, $locale$$23_localeList$$) {
    var $relativeUrl_splitLocale$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1_bundleName_bundleUrl$$ + $i$$447_layer$$23$$ + ".js";
    -1 == this.$_checkBasemaps$.indexOf($relativeUrl_splitLocale$$) && (this.$_checkBasemaps$.push($relativeUrl_splitLocale$$), this.$_loadResourceByUrl$($relativeUrl_splitLocale$$));
    if (-1 === $locale$$23_localeList$$.indexOf("en")) {
      for ($relativeUrl_splitLocale$$ = $locale$$23_localeList$$.toLowerCase().split("-"), $locale$$23_localeList$$ = [$relativeUrl_splitLocale$$[0]], 1 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1]), 2 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[2], $relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1] + 
      "-" + $relativeUrl_splitLocale$$[2]), $basemap$$1_bundleName_bundleUrl$$ = "resources/internal-deps/dvt/thematicMap/resourceBundles/" + $basemap$$1_bundleName_bundleUrl$$ + $i$$447_layer$$23$$ + "Bundle", $i$$447_layer$$23$$ = 0;$i$$447_layer$$23$$ < $locale$$23_localeList$$.length;$i$$447_layer$$23$$++) {
        if (this.$_supportedLocales$[$locale$$23_localeList$$[$i$$447_layer$$23$$]]) {
          $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$ + "_" + this.$_supportedLocales$[$locale$$23_localeList$$[$i$$447_layer$$23$$]] + ".js";
          -1 == this.$_checkBasemaps$.indexOf($basemap$$1_bundleName_bundleUrl$$) && (this.$_checkBasemaps$.push($basemap$$1_bundleName_bundleUrl$$), this.$_loadResourceByUrl$($basemap$$1_bundleName_bundleUrl$$));
          break;
        }
      }
    }
  }, $_HandleEvent$:function($event$$647$$) {
    var $selection$$15$$, $id$$58$$;
    if (($event$$647$$ && $event$$647$$.getType ? $event$$647$$.getType() : null) === $dvt$$10$$.DvtSelectionEvent.TYPE) {
      $selection$$15$$ = {};
      $id$$58$$ = $event$$647$$.getParamValue("clientId");
      $selection$$15$$[$id$$58$$] = $event$$647$$.getSelection();
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$58$$ !== $dataLayerId$$ && ($selection$$15$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$15$$);
    } else {
      this._super($event$$647$$);
    }
  }, $_GetTranslationMap$:function() {
    var $translations$$20$$ = this.options.translations, $ret$$60$$ = this._super();
    $ret$$60$$["DvtUtilBundle.THEMATIC_MAP"] = $translations$$20$$.componentName;
    return $ret$$60$$;
  }, $_updateDataLayerSelection$:function() {
    var $selection$$16$$ = this.options.selection;
    if ($selection$$16$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$448$$ = 0;$i$$448$$ < $als_pdls$$.length;$i$$448$$++) {
          $selection$$16$$[$als_pdls$$[$i$$448$$].id] && ($als_pdls$$[$i$$448$$].selection = $selection$$16$$[$als_pdls$$[$i$$448$$].id]);
        }
      }
      if ($als_pdls$$ = this.options.areaLayers) {
        for ($i$$448$$ = 0;$i$$448$$ < $als_pdls$$.length;$i$$448$$++) {
          var $adl$$ = $als_pdls$$[$i$$448$$].areaDataLayer;
          $adl$$ && $selection$$16$$[$adl$$.id] && ($adl$$.selection = $selection$$16$$[$adl$$.id]);
        }
      }
    }
  }, getArea:function($dataLayerId$$1$$, $index$$291$$) {
    var $ret$$61$$ = this.$_component$.getAutomation().getData($dataLayerId$$1$$, "area", $index$$291$$);
    this.$_AddAutomationGetters$($ret$$61$$);
    return $ret$$61$$;
  }, getMarker:function($dataLayerId$$2$$, $index$$292$$) {
    var $ret$$62$$ = this.$_component$.getAutomation().getData($dataLayerId$$2$$, "marker", $index$$292$$);
    this.$_AddAutomationGetters$($ret$$62$$);
    return $ret$$62$$;
  }, getContextByNode:function($context$$166_node$$120$$) {
    return($context$$166_node$$120$$ = this.getSubIdByNode($context$$166_node$$120$$)) && "oj-thematicmap-tooltip" !== $context$$166_node$$120$$.subId ? $context$$166_node$$120$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{areaLayers:["areaDataLayer/areas", "areaDataLayer/markers"], pointDataLayers:["markers"]};
  }, $_GetDataContext$:function($layer$$24_options$$407$$) {
    var $basemap$$2$$ = this.options.basemap;
    $layer$$24_options$$407$$ = $layer$$24_options$$407$$.layer ? $layer$$24_options$$407$$.layer : "cities";
    return{basemap:$basemap$$2$$, layer:$layer$$24_options$$407$$, ids:$dvt$$10$$.DvtBaseMapManager.getLayerIds($basemap$$2$$, $layer$$24_options$$407$$)};
  }});
});
