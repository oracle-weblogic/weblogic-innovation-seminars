/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout"], function($oj$$7$$, $$$$7$$, $ko$$1$$) {
  function $GlobalChangeQueue$$() {
    this.Init();
  }
  function $_extractValueFromChangeEvent$$($event$$59$$, $eventData$$1$$) {
    var $nameVal$$ = {};
    $nameVal$$.value = $eventData$$1$$.value;
    return $nameVal$$;
  }
  function $_extractOptionChange$$($event$$60$$, $eventData$$2$$) {
    var $nameVal$$1$$ = {}, $metadata$$ = $eventData$$2$$.optionMetadata;
    $metadata$$ && "shouldWrite" === $metadata$$.writeback && ($nameVal$$1$$[$eventData$$2$$.option] = $eventData$$2$$.value);
    return $nameVal$$1$$;
  }
  function $_getComboboxOptionRenderer$$($bindingContext$$, $template$$) {
    return function($context$$43$$) {
      var $parent$$4$$, $childContext$$;
      $parent$$4$$ = $context$$43$$.parentElement;
      $childContext$$ = $bindingContext$$.createChildContext($context$$43$$.data, null, function($binding$$) {
        $binding$$.$optionContext = $context$$43$$;
      });
      $ko$$1$$.renderTemplate($template$$, $childContext$$, null, $parent$$4$$);
      return null;
    };
  }
  function $_handleComboboxManagedAttributes$$($name$$80$$, $value$$149$$, $bindingContext$$1$$) {
    return "optionTemplate" === $name$$80$$ && null !== $value$$149$$ ? {optionRenderer:$_getComboboxOptionRenderer$$($bindingContext$$1$$, String($value$$149$$))} : null;
  }
  function $ComponentChangeTracker$$($component$$6$$, $queue$$) {
    this.Init($component$$6$$, $queue$$);
  }
  function $_replaceComponentBindingWithV2$$($node$$25$$, $bindingContext$$3$$, $accessorMap$$, $wrapped$$1$$) {
    if (null == $accessorMap$$) {
      return null;
    }
    var $bindingName$$1$$ = $_findOwnBinding$$($accessorMap$$);
    null != $bindingName$$1$$ && ($accessorMap$$ = $_modifyOjComponentBinding$$($node$$25$$, $bindingName$$1$$, $wrapped$$1$$, $bindingContext$$3$$, $accessorMap$$));
    return $accessorMap$$;
  }
  function $_findOwnBinding$$($accessorMap$$1_keys$$7$$) {
    $accessorMap$$1_keys$$7$$ = Object.keys($accessorMap$$1_keys$$7$$);
    for (var $i$$124$$ = -0;$i$$124$$ < $accessorMap$$1_keys$$7$$.length;$i$$124$$++) {
      var $key$$41$$ = $accessorMap$$1_keys$$7$$[$i$$124$$];
      if ($oj$$7$$.$ComponentBinding$.$_isNameRegistered$($key$$41$$)) {
        return $key$$41$$;
      }
    }
    return null;
  }
  function $_modifyOjComponentBinding$$($info$$1_node$$26$$, $bindingName$$2$$, $bindingList_wrapped$$2$$, $bindingContext$$4$$, $accessorMap$$2$$) {
    $info$$1_node$$26$$ = $_getBindingValueInfo$$($info$$1_node$$26$$, $bindingName$$2$$, $bindingList_wrapped$$2$$, $bindingContext$$4$$);
    $bindingList_wrapped$$2$$ = $info$$1_node$$26$$.$attrList$;
    if (null == $bindingList_wrapped$$2$$) {
      return $accessorMap$$2$$;
    }
    var $bindingMap$$ = {};
    $_keyValueArrayForEach$$($bindingList_wrapped$$2$$, function($key$$42$$, $value$$150$$) {
      $bindingMap$$[$key$$42$$] = $value$$150$$;
    });
    $accessorMap$$2$$ = $oj$$7$$.$CollectionUtils$.$copyInto$({}, $accessorMap$$2$$);
    $accessorMap$$2$$[$bindingName$$2$$] = $_getOjComponent2BindingAccessor$$($bindingContext$$4$$, $bindingMap$$, $info$$1_node$$26$$.$bindingExpr$);
    return $accessorMap$$2$$;
  }
  function $_getOjComponent2BindingAccessor$$($bindingContext$$5$$, $attributeMap$$, $bindingExpr$$) {
    function $accessorFunc$$() {
      var $accessor$$ = {};
      Object.keys($attributeMap$$).forEach(function($option$$22$$) {
        var $getter$$1$$ = $oj$$7$$.$ComponentBinding$.$_createEvaluator$($attributeMap$$[$option$$22$$]).bind(null, $bindingContext$$5$$);
        Object.defineProperty($accessor$$, $option$$22$$, {get:$getter$$1$$, enumerable:!0});
      });
      Object.defineProperty($accessor$$, $oj$$7$$.$ComponentBinding$.$_OPTION_MAP$, {value:$attributeMap$$});
      return $accessor$$;
    }
    $accessorFunc$$.toString = function $$accessorFunc$$$toString$() {
      return $bindingExpr$$;
    };
    return $accessorFunc$$;
  }
  function $_getBindingString$$($match$$14_node$$27$$, $wrapped$$3$$, $bindingContext$$6$$) {
    var $func$$6$$ = $wrapped$$3$$.getBindingsString;
    if ($func$$6$$) {
      return $func$$6$$.call($wrapped$$3$$, $match$$14_node$$27$$, $bindingContext$$6$$);
    }
    switch($match$$14_node$$27$$.nodeType) {
      case 1:
        return $match$$14_node$$27$$.getAttribute("data-bind");
      case 8:
        return($match$$14_node$$27$$ = $match$$14_node$$27$$.nodeValue.match(/^\s*ko(?:\s+([\s\S]+))?\s*$/)) ? $match$$14_node$$27$$[1] : null;
    }
    return null;
  }
  function $_getBindingValueInfo$$($bindingString_keyValueArray_node$$28$$, $bindingName$$3$$, $wrapped$$4$$, $bindingContext$$7$$) {
    var $list$$ = null;
    $bindingString_keyValueArray_node$$28$$ = $_getBindingString$$($bindingString_keyValueArray_node$$28$$, $wrapped$$4$$, $bindingContext$$7$$);
    $bindingString_keyValueArray_node$$28$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($bindingString_keyValueArray_node$$28$$);
    var $selfVal$$ = null;
    $_keyValueArrayForEach$$($bindingString_keyValueArray_node$$28$$, function($key$$43$$, $value$$151$$) {
      return $key$$43$$ === $bindingName$$3$$ ? ($selfVal$$ = $value$$151$$, !0) : !1;
    });
    null != $selfVal$$ && 0 === $selfVal$$.indexOf("{") && ($list$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($selfVal$$));
    return{$attrList$:$list$$, $bindingExpr$:$selfVal$$};
  }
  function $_keyValueArrayForEach$$($array$$14$$, $callback$$83$$) {
    for (var $i$$125$$ = 0;$i$$125$$ < $array$$14$$.length;$i$$125$$++) {
      var $entry_value$$152$$ = $array$$14$$[$i$$125$$], $key$$44$$ = $entry_value$$152$$.key, $entry_value$$152$$ = $entry_value$$152$$.value;
      if (null != $key$$44$$ && null != $entry_value$$152$$ && $callback$$83$$($key$$44$$.trim(), $entry_value$$152$$.trim())) {
        break;
      }
    }
  }
  function $_defineWrappedMethod$$($wrapped$$5$$, $target$$76$$, $name$$81$$, $postprocessMethod$$) {
    var $delegate$$ = $wrapped$$5$$[$name$$81$$];
    null != $delegate$$ && ($target$$76$$[$name$$81$$] = function $$target$$76$$$$name$$81$$$() {
      var $ret$$22$$ = $delegate$$.apply($wrapped$$5$$, arguments);
      if (null != $postprocessMethod$$) {
        var $args$$16$$ = Array.prototype.slice.call(arguments);
        $args$$16$$.push($ret$$22$$, $wrapped$$5$$);
        $ret$$22$$ = $postprocessMethod$$.apply(null, $args$$16$$);
      }
      return $ret$$22$$;
    });
  }
  function $_getDataGridHeaderRenderer$$($bindingContext$$8$$, $template$$2$$) {
    return function($context$$44$$) {
      var $parent$$5$$, $childContext$$1$$;
      $parent$$5$$ = $context$$44$$.parentElement;
      $childContext$$1$$ = $bindingContext$$8$$.createChildContext($context$$44$$.data, null, function($binding$$1$$) {
        $binding$$1$$.$key = $context$$44$$.key;
        $binding$$1$$.$metadata = $context$$44$$.metadata;
        $binding$$1$$.$headerContext = $context$$44$$;
      });
      $ko$$1$$.renderTemplate($template$$2$$, $childContext$$1$$, null, $parent$$5$$);
      return null;
    };
  }
  function $_getDataGridCellRenderer$$($bindingContext$$9$$, $template$$3$$) {
    return function($context$$45$$) {
      var $parent$$6$$, $childContext$$2$$;
      $parent$$6$$ = $context$$45$$.parentElement;
      $childContext$$2$$ = $bindingContext$$9$$.createChildContext($context$$45$$.data, null, function($binding$$2$$) {
        $binding$$2$$.$keys = $context$$45$$.keys;
        $binding$$2$$.$metadata = $context$$45$$.metadata;
        $binding$$2$$.$cellContext = $context$$45$$;
      });
      $ko$$1$$.renderTemplate($template$$3$$, $childContext$$2$$, null, $parent$$6$$);
      return null;
    };
  }
  function $_getDiagramNodeRenderer$$($bindingContext$$10$$, $template$$4$$) {
    return function($context$$46$$) {
      var $model$$56$$ = $bindingContext$$10$$.createChildContext($context$$46$$.data);
      $ko$$1$$.renderTemplate($template$$4$$, $model$$56$$, null, $context$$46$$.parentElement);
      return null;
    };
  }
  function $_getListViewItemRenderer$$($bindingContext$$12$$, $template$$5$$) {
    return function($context$$47$$) {
      var $parent$$7$$, $childContext$$3$$;
      $parent$$7$$ = $context$$47$$.parentElement;
      $childContext$$3$$ = $bindingContext$$12$$.createChildContext($context$$47$$.data, null, function($binding$$3$$) {
        $binding$$3$$.$itemContext = $context$$47$$;
      });
      $ko$$1$$.renderTemplate($template$$5$$, $childContext$$3$$, null, $parent$$7$$, "replaceNode");
      return null;
    };
  }
  function $_handleListViewManagedAttributes$$($name$$83_template$$6$$, $value$$154$$, $bindingContext$$13$$) {
    return "item" == $name$$83_template$$6$$ ? ($name$$83_template$$6$$ = $value$$154$$.template, null != $name$$83_template$$6$$ && ($value$$154$$.renderer = $_getListViewItemRenderer$$($bindingContext$$13$$, $name$$83_template$$6$$)), {item:$value$$154$$}) : null;
  }
  function $_getTableColumnTemplateRenderer$$($bindingContext$$14$$, $type$$77$$, $template$$7$$) {
    var $rendererOption$$ = {};
    (function($template$$8$$, $type$$78$$) {
      $rendererOption$$ = function $$rendererOption$$$($params$$13$$) {
        var $childContext$$4$$ = null, $parentElement$$ = null;
        "header" == $type$$78$$ ? ($childContext$$4$$ = $bindingContext$$14$$.extend({$columnIndex:$params$$13$$.columnIndex, $headerContext:$params$$13$$.headerContext, $data:$params$$13$$.data}), $parentElement$$ = $params$$13$$.headerContext.parentElement) : "cell" == $type$$78$$ && ($childContext$$4$$ = $bindingContext$$14$$.createChildContext($params$$13$$.row, null, function($binding$$4$$) {
          $binding$$4$$.$columnIndex = $params$$13$$.columnIndex;
          $binding$$4$$.$cellContext = $params$$13$$.cellContext;
        }), $parentElement$$ = $params$$13$$.cellContext.parentElement);
        "footer" == $type$$78$$ && ($childContext$$4$$ = $bindingContext$$14$$.extend({$columnIndex:$params$$13$$.columnIndex, $footerContext:$params$$13$$.footerContext}), $parentElement$$ = $params$$13$$.footerContext.parentElement);
        $ko$$1$$.renderTemplate($template$$8$$, $childContext$$4$$, null, $parentElement$$, "replaceNode");
      };
    })($template$$7$$, $type$$77$$);
    return $rendererOption$$;
  }
  function $_getTableRowTemplateRenderer$$($bindingContext$$15$$, $template$$9$$) {
    return function($params$$14$$) {
      var $childContext$$5$$ = $bindingContext$$15$$.createChildContext($params$$14$$.row, null, function($binding$$5$$) {
        $binding$$5$$.$rowContext = $params$$14$$.rowContext;
      });
      $ko$$1$$.renderTemplate($template$$9$$, $childContext$$5$$, null, $params$$14$$.rowContext.parentElement, "replaceNode");
    };
  }
  function $_getDataLayerRenderer$$($bindingContext$$16$$, $template$$10$$) {
    return function($context$$48$$) {
      var $model$$57$$ = $bindingContext$$16$$.createChildContext($context$$48$$.data);
      $ko$$1$$.renderTemplate($template$$10$$, $model$$57$$, null, $context$$48$$.parentElement);
      return null;
    };
  }
  function $_handleManagedAttributes$$($i$$126_name$$84$$, $value$$155$$, $bindingContext$$17$$) {
    if ("areaLayers" === $i$$126_name$$84$$) {
      for ($i$$126_name$$84$$ = 0;$i$$126_name$$84$$ < $value$$155$$.length;$i$$126_name$$84$$++) {
        var $areaDataLayer$$ = $value$$155$$[$i$$126_name$$84$$].areaDataLayer;
        if ($areaDataLayer$$) {
          var $template$$11$$ = $areaDataLayer$$.template;
          null != $template$$11$$ && ($areaDataLayer$$._templateRenderer = $_getDataLayerRenderer$$($bindingContext$$17$$, $template$$11$$));
        }
      }
      return{areaLayers:$value$$155$$};
    }
    if ("pointDataLayers" === $i$$126_name$$84$$) {
      for ($i$$126_name$$84$$ = 0;$i$$126_name$$84$$ < $value$$155$$.length;$i$$126_name$$84$$++) {
        $template$$11$$ = $value$$155$$[$i$$126_name$$84$$].template, null != $template$$11$$ && ($value$$155$$[$i$$126_name$$84$$]._templateRenderer = $_getDataLayerRenderer$$($bindingContext$$17$$, $template$$11$$));
      }
      return{pointDataLayers:$value$$155$$};
    }
    return null;
  }
  $oj$$7$$.$Object$.$createSubclass$($GlobalChangeQueue$$, $oj$$7$$.$Object$, "ComponentBinding.GlobalChangeQueue");
  $GlobalChangeQueue$$.prototype.Init = function $$GlobalChangeQueue$$$$Init$() {
    $GlobalChangeQueue$$.$superclass$.Init.call(this);
    this.$_trackers$ = [];
    this.$_queue$ = [];
  };
  $GlobalChangeQueue$$.prototype.$registerComponentChanges$ = function $$GlobalChangeQueue$$$$$registerComponentChanges$$($tracker$$3$$) {
    -1 === this.$_trackers$.indexOf($tracker$$3$$) && (this.$_trackers$.push($tracker$$3$$), this.$_delayTimer$ || (this.$_delayTimer$ = setTimeout($oj$$7$$.$Object$.$createCallback$(this, this.$_deliverChangesImpl$), 1)));
  };
  $GlobalChangeQueue$$.prototype.$deliverChanges$ = function $$GlobalChangeQueue$$$$$deliverChanges$$() {
    this.$_delayTimer$ && clearTimeout(this.$_delayTimer$);
    this.$_deliverChangesImpl$();
  };
  $GlobalChangeQueue$$.prototype.$_deliverChangesImpl$ = function $$GlobalChangeQueue$$$$$_deliverChangesImpl$$() {
    var $i$$127_record$$3$$;
    this.$_delayTimer$ = null;
    var $trackers$$ = this.$_trackers$;
    this.$_trackers$ = [];
    for ($i$$127_record$$3$$ = 0;$i$$127_record$$3$$ < $trackers$$.length;$i$$127_record$$3$$++) {
      var $tracker$$4$$ = $trackers$$[$i$$127_record$$3$$];
      this.$_queue$.push({$tracker$:$tracker$$4$$, $changes$:$tracker$$4$$.$flushChanges$()});
    }
    for (;0 < this.$_queue$.length;) {
      $i$$127_record$$3$$ = this.$_queue$.shift(), $i$$127_record$$3$$.$tracker$.$applyChanges$($i$$127_record$$3$$.$changes$);
    }
  };
  $oj$$7$$.$ComponentBinding$ = function $$oj$$7$$$$ComponentBinding$$($name$$85$$, $options$$209$$) {
    this.Init($name$$85$$, $options$$209$$);
  };
  $goog$exportPath_$$("ComponentBinding", $oj$$7$$.$ComponentBinding$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$ComponentBinding$, $oj$$7$$.$Object$, "oj.ComponentBinding");
  $oj$$7$$.$ComponentBinding$.create = function $$oj$$7$$$$ComponentBinding$$create$($name$$86$$, $options$$210$$) {
    if (null == $name$$86$$) {
      throw "Binding name is required!";
    }
    var $instance$$14$$ = new $oj$$7$$.$ComponentBinding$($name$$86$$, $options$$210$$), $handlers$$5$$ = $ko$$1$$.bindingHandlers, $i$$128$$, $names$$1$$ = Array.isArray($name$$86$$) ? $name$$86$$ : [$name$$86$$];
    for ($i$$128$$ = 0;$i$$128$$ < $names$$1$$.length;$i$$128$$++) {
      var $nm$$ = $names$$1$$[$i$$128$$];
      $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$.push($nm$$);
      $handlers$$5$$[$nm$$] = $instance$$14$$;
    }
    return $instance$$14$$;
  };
  $goog$exportPath_$$("ComponentBinding.create", $oj$$7$$.$ComponentBinding$.create, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$ = function $$oj$$7$$$$ComponentBinding$$$getDefaultInstance$$() {
    return $oj$$7$$.$ComponentBinding$.$_INSTANCE$;
  };
  $goog$exportPath_$$("ComponentBinding.getDefaultInstance", $oj$$7$$.$ComponentBinding$.$getDefaultInstance$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$setupManagedAttributes$$($opts$$9$$) {
    var $forName$$ = $opts$$9$$["for"], $forName$$ = null == $forName$$ ? "@global" : $forName$$, $managers$$ = this.$_managedAttrOptions$[$forName$$] || [];
    $managers$$.push($opts$$9$$);
    this.$_managedAttrOptions$[$forName$$] = $managers$$;
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ComponentBinding.prototype.setupManagedAttributes", {$setupManagedAttributes$:$oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$});
  $oj$$7$$.$ComponentBinding$.$deliverChanges$ = function $$oj$$7$$$$ComponentBinding$$$deliverChanges$$() {
    $oj$$7$$.$ComponentBinding$.$_changeQueue$.$deliverChanges$();
  };
  $goog$exportPath_$$("ComponentBinding.deliverChanges", $oj$$7$$.$ComponentBinding$.$deliverChanges$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.Init = function $$oj$$7$$$$ComponentBinding$$$Init$($names$$2$$, $options$$211$$) {
    $oj$$7$$.$ComponentBinding$.$superclass$.Init.call(this);
    "string" === typeof $options$$211$$ && ($options$$211$$ = {componentName:$options$$211$$});
    this.$_bindingOptions$ = $options$$211$$ || {};
    Array.isArray($names$$2$$);
    this.init = this._init.bind(this);
    this.update = this.$_update$.bind(this);
    this.$_managedAttrOptions$ = {};
  };
  $oj$$7$$.$ComponentBinding$.prototype._init = function $$oj$$7$$$$ComponentBinding$$$_init$($element$$42$$, $valueAccessor$$, $allBindingsAccessor$$, $viewModel$$1$$, $bindingContext$$18$$) {
    $ko$$1$$.applyBindingsToDescendants($bindingContext$$18$$, $element$$42$$);
    return{controlsDescendantBindings:!0};
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_update$ = function $$oj$$7$$$$ComponentBinding$$$$_update$$($element$$43$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $viewModel$$2$$, $bindingContext$$19$$) {
    function $cleanup$$($destroyComponent$$) {
      $componentComputeds$$.forEach(function($computed$$) {
        $computed$$.dispose();
      });
      $componentComputeds$$ = [];
      $destroyComponent$$ && $component$$7$$ && ($component$$7$$("destroy"), $component$$7$$ = null);
      $changeTracker$$ && ($changeTracker$$.$dispose$(), $changeTracker$$ = null);
      $jelem$$4$$.off($oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$);
    }
    function $createComponent$$($componentName$$3$$, $nameOption$$, $bindingValue$$) {
      if (null != $componentName$$3$$) {
        var $comp$$2$$ = $jelem$$4$$[$componentName$$3$$];
        if ("function" !== typeof $comp$$2$$) {
          $oj$$7$$.$Logger$.error("Component %s is not found", $componentName$$3$$);
        } else {
          $comp$$2$$ = $comp$$2$$.bind($jelem$$4$$);
          $changeTracker$$ = new $ComponentChangeTracker$$($comp$$2$$, $oj$$7$$.$ComponentBinding$.$_changeQueue$);
          var $specifiedOptions$$ = Object.keys($bindingValue$$).filter(function($value$$156$$) {
            return!(null == $value$$156$$ || $value$$156$$ === $nameOption$$);
          });
          $component$$7$$ = this.$_initComponent$($element$$43$$, {$component$:$comp$$2$$, $changeTracker$:$changeTracker$$, $componentName$:$componentName$$3$$, $specifiedOptions$:$specifiedOptions$$, $computeds$:$componentComputeds$$, $valueAccessor$:function() {
            return $bindingValue$$;
          }, $allBindingsAccessor$:$allBindingsAccessor$$1$$, $bindingContext$:$bindingContext$$19$$, $destroyCallback$:function() {
            $component$$7$$ = null;
          }});
        }
      }
    }
    var $componentComputeds$$ = [], $stage$$ = 0, $component$$7$$, $changeTracker$$, $jelem$$4$$ = $$$$7$$($element$$43$$);
    $ko$$1$$.ignoreDependencies(function() {
      $ko$$1$$.computed(function() {
        var $bindingValue$$1$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$1$$());
        "object" !== typeof $bindingValue$$1$$ && $oj$$7$$.$Logger$.error("ojComponent binding should evaluate to an object");
        var $componentName$$4$$ = this.$_bindingOptions$.componentName, $nameOpt$$, $nameOptionFound$$ = !1;
        if (null == $componentName$$4$$ & null != $bindingValue$$1$$) {
          for (var $name_attrs$$ = [$oj$$7$$.$ComponentBinding$.$_COMPONENT_OPTION$, "role"], $n$$20$$ = 0;!$nameOptionFound$$ && $n$$20$$ < $name_attrs$$.length;$n$$20$$++) {
            $nameOpt$$ = $name_attrs$$[$n$$20$$], $nameOpt$$ in $bindingValue$$1$$ && ($nameOptionFound$$ = !0, $componentName$$4$$ = $bindingValue$$1$$[$nameOpt$$]);
          }
          $nameOptionFound$$ || $oj$$7$$.$Logger$.error("component attribute is required for the ojComponent binding");
          $componentName$$4$$ = $ko$$1$$.utils.unwrapObservable($componentName$$4$$);
        }
        0 == $stage$$ ? $stage$$ = 1 : $ko$$1$$.ignoreDependencies($cleanup$$, this, [!0]);
        $ko$$1$$.ignoreDependencies($createComponent$$, this, [$componentName$$4$$, $nameOpt$$, $bindingValue$$1$$]);
      }, this, {disposeWhenNodeIsRemoved:$element$$43$$});
    }, this);
    $ko$$1$$.utils.domNodeDisposal.addDisposeCallback($element$$43$$, $cleanup$$.bind(this, [!1]));
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_initComponent$ = function $$oj$$7$$$$ComponentBinding$$$$_initComponent$$($element$$44$$, $ctx$$) {
    function $propertyReadFunc$$() {
      var $initProps_prop$$57_updateProps$$ = this.$_property$, $updateKeys_value$$157$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($ctx$$.$valueAccessor$()[$initProps_prop$$57_updateProps$$]);
      if (0 === $stage$$1$$) {
        var $initFunc_k$$5_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$57_updateProps$$];
        null != $initFunc_k$$5_managedPropEntry_updateFunc$$ ? ($specifiedManagedAttrs$$[$initProps_prop$$57_updateProps$$] = $initFunc_k$$5_managedPropEntry_updateFunc$$, $initFunc_k$$5_managedPropEntry_updateFunc$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$.$init$, null != $initFunc_k$$5_managedPropEntry_updateFunc$$ && ($initProps_prop$$57_updateProps$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$($initProps_prop$$57_updateProps$$, $updateKeys_value$$157$$, $element$$44$$, $comp$$3$$, $ctx$$.$valueAccessor$, 
        $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$) || {}, $oj$$7$$.$CollectionUtils$.$copyInto$($resolvedInitialOptions$$, $initProps_prop$$57_updateProps$$))) : $resolvedInitialOptions$$[$initProps_prop$$57_updateProps$$] = $updateKeys_value$$157$$;
      } else {
        if (!$disposed$$) {
          if (null != $managedAttrMap$$[$initProps_prop$$57_updateProps$$]) {
            if ($initFunc_k$$5_managedPropEntry_updateFunc$$ = $managedAttrMap$$[$initProps_prop$$57_updateProps$$].update, null != $initFunc_k$$5_managedPropEntry_updateFunc$$) {
              for ($initProps_prop$$57_updateProps$$ = $initFunc_k$$5_managedPropEntry_updateFunc$$($initProps_prop$$57_updateProps$$, $updateKeys_value$$157$$, $element$$44$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$) || {}, $updateKeys_value$$157$$ = Object.keys($initProps_prop$$57_updateProps$$), $initFunc_k$$5_managedPropEntry_updateFunc$$ = 0;$initFunc_k$$5_managedPropEntry_updateFunc$$ < $updateKeys_value$$157$$.length;$initFunc_k$$5_managedPropEntry_updateFunc$$++) {
                var $p$$3$$ = $updateKeys_value$$157$$[$initFunc_k$$5_managedPropEntry_updateFunc$$];
                $ctx$$.$changeTracker$.$addChange$($p$$3$$, $initProps_prop$$57_updateProps$$[$p$$3$$]);
              }
            }
          } else {
            $ctx$$.$changeTracker$.$addChange$($initProps_prop$$57_updateProps$$, $updateKeys_value$$157$$);
          }
        }
      }
    }
    var $disposed$$ = !1, $stage$$1$$ = 0, $specifiedManagedAttrs$$ = {}, $createCallback_jelem$$5_mutationOptions$$ = $$$$7$$($element$$44$$), $comp$$3$$ = $ctx$$.$component$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = $ctx$$.$componentName$, $self$$50$$ = this;
    $createCallback_jelem$$5_mutationOptions$$.on("ojdestroy" + $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, function($destroyCallback_evt$$18$$) {
      $destroyCallback_evt$$18$$.target && $destroyCallback_evt$$18$$.target == $element$$44$$ && ($ctx$$.$destroyCallback$(), ($destroyCallback_evt$$18$$ = $self$$50$$.$_bindingOptions$.beforeDestroy) && $destroyCallback_evt$$18$$($element$$44$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$), $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$(!1, $specifiedManagedAttrs$$, $element$$44$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, 
      $ctx$$.$bindingContext$), $disposed$$ = !0, $ctx$$.$changeTracker$.$dispose$());
    });
    var $managedAttrMap$$ = $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $ctx$$.$specifiedOptions$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$), $defaultInstance_m$$18$$ = $oj$$7$$.$ComponentBinding$.$getDefaultInstance$();
    this !== $defaultInstance_m$$18$$ && ($componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = $defaultInstance_m$$18$$.$_getManagedAttributes$($ctx$$.$specifiedOptions$, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$), $oj$$7$$.$CollectionUtils$.$copyInto$($componentName$$5_defaultManagedMap_k$$4_mutationKeys$$, $managedAttrMap$$), $managedAttrMap$$ = $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$);
    for (var $resolvedInitialOptions$$ = {}, $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = 0;$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ < $ctx$$.$specifiedOptions$.length;$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$++) {
      $ctx$$.$computeds$.push($ko$$1$$.computed($propertyReadFunc$$, {$_property$:$ctx$$.$specifiedOptions$[$componentName$$5_defaultManagedMap_k$$4_mutationKeys$$]}));
    }
    $stage$$1$$ = 1;
    $oj$$7$$.$ComponentBinding$.$_registerWritebacks$($createCallback_jelem$$5_mutationOptions$$, $ctx$$);
    $createCallback_jelem$$5_mutationOptions$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($resolvedInitialOptions$$);
    $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$ = Object.keys($createCallback_jelem$$5_mutationOptions$$);
    $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$.forEach(function($mutationOpt$$) {
      delete $resolvedInitialOptions$$[$mutationOpt$$];
    });
    $comp$$3$$($resolvedInitialOptions$$);
    for ($defaultInstance_m$$18$$ = 0;$defaultInstance_m$$18$$ < $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$.length;$defaultInstance_m$$18$$++) {
      var $mo$$ = $componentName$$5_defaultManagedMap_k$$4_mutationKeys$$[$defaultInstance_m$$18$$];
      $comp$$3$$("option", $mo$$, $createCallback_jelem$$5_mutationOptions$$[$mo$$]);
    }
    ($createCallback_jelem$$5_mutationOptions$$ = this.$_bindingOptions$.afterCreate) && $createCallback_jelem$$5_mutationOptions$$($element$$44$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$);
    $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$(!0, $specifiedManagedAttrs$$, $element$$44$$, $comp$$3$$, $ctx$$.$valueAccessor$, $ctx$$.$allBindingsAccessor$, $ctx$$.$bindingContext$);
    $resolvedInitialOptions$$ = null;
    return $comp$$3$$;
  };
  $oj$$7$$.$ComponentBinding$.$_createEvaluator$ = function $$oj$$7$$$$ComponentBinding$$$_createEvaluator$$($expr$$3$$) {
    return new Function("$context", "with($context){with($data||{}){return " + $expr$$3$$ + ";}}");
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_getManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$_getManagedAttributes$$($specifiedOptions$$1$$, $componentName$$6$$) {
    return $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $specifiedOptions$$1$$, $componentName$$6$$);
  };
  $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$_resolveManagedAttributes$$($optionMap$$, $specifiedOptions$$2$$, $componentName$$7_k$$6_proto$$4_widgetClass$$) {
    function $traverseOptions$$($name$$87$$, $followLinks$$) {
      var $managers$$1$$ = $optionMap$$[$name$$87$$];
      if (null != $managers$$1$$) {
        for (var $n$$21$$ = $managers$$1$$.length - 1;0 <= $n$$21$$;$n$$21$$--) {
          var $opt$$17_parents$$ = $managers$$1$$[$n$$21$$];
          null != $opt$$17_parents$$.attributes && $applicableOptions$$.push($opt$$17_parents$$);
          if ($followLinks$$ && ($opt$$17_parents$$ = $opt$$17_parents$$.use, null != $opt$$17_parents$$)) {
            for (var $opt$$17_parents$$ = Array.isArray($opt$$17_parents$$) ? $opt$$17_parents$$ : [$opt$$17_parents$$], $i$$129$$ = 0;$i$$129$$ < $opt$$17_parents$$.length;$i$$129$$++) {
              $traverseOptions$$($opt$$17_parents$$[$i$$129$$], !0);
            }
          }
        }
      }
    }
    var $managedAttrMap$$1$$ = {}, $applicableOptions$$ = [];
    $traverseOptions$$($componentName$$7_k$$6_proto$$4_widgetClass$$, !0);
    $componentName$$7_k$$6_proto$$4_widgetClass$$ = $$$$7$$.oj[$componentName$$7_k$$6_proto$$4_widgetClass$$];
    if (null != $componentName$$7_k$$6_proto$$4_widgetClass$$) {
      for ($componentName$$7_k$$6_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$7_k$$6_proto$$4_widgetClass$$.prototype);null != $componentName$$7_k$$6_proto$$4_widgetClass$$ && "oj" === $componentName$$7_k$$6_proto$$4_widgetClass$$.namespace;) {
        $traverseOptions$$($componentName$$7_k$$6_proto$$4_widgetClass$$.widgetName, !0), $componentName$$7_k$$6_proto$$4_widgetClass$$ = Object.getPrototypeOf($componentName$$7_k$$6_proto$$4_widgetClass$$);
      }
    }
    $traverseOptions$$("@global", !1);
    if (0 < $applicableOptions$$.length) {
      for ($componentName$$7_k$$6_proto$$4_widgetClass$$ = 0;$componentName$$7_k$$6_proto$$4_widgetClass$$ < $specifiedOptions$$2$$.length;$componentName$$7_k$$6_proto$$4_widgetClass$$++) {
        for (var $attr$$13$$ = $specifiedOptions$$2$$[$componentName$$7_k$$6_proto$$4_widgetClass$$], $l$$2$$ = 0;$l$$2$$ < $applicableOptions$$.length;$l$$2$$++) {
          var $opts$$10$$ = $applicableOptions$$[$l$$2$$];
          if (0 <= $opts$$10$$.attributes.indexOf($attr$$13$$)) {
            $managedAttrMap$$1$$[$attr$$13$$] = {$init$:$opts$$10$$.init, update:$opts$$10$$.update, $afterCreate$:$opts$$10$$.afterCreate, $beforeDestroy$:$opts$$10$$.beforeDestroy};
            break;
          }
        }
      }
    }
    return $managedAttrMap$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$ = ".oj_ko";
  $oj$$7$$.$ComponentBinding$.$_registerWritebacks$ = function $$oj$$7$$$$ComponentBinding$$$_registerWritebacks$$($jelem$$6$$, $ctx$$1$$) {
    for (var $eventInfos_writablePropMap$$ = {"^slider$":[{event:"slidechange", getter:$_extractValueFromChangeEvent$$}], "^oj*":[{event:"ojoptionchange", getter:$_extractOptionChange$$}]}, $cachedWriterFunctionEvaluators$$ = {}, $i$$130_keys$$8$$ = Object.keys($eventInfos_writablePropMap$$), $info$$2_k$$7$$ = 0;$info$$2_k$$7$$ < $i$$130_keys$$8$$.length;$info$$2_k$$7$$++) {
      var $pattern$$12$$ = $i$$130_keys$$8$$[$info$$2_k$$7$$];
      if ($ctx$$1$$.$componentName$.match($pattern$$12$$)) {
        $eventInfos_writablePropMap$$ = $eventInfos_writablePropMap$$[$pattern$$12$$];
        for ($i$$130_keys$$8$$ = 0;$i$$130_keys$$8$$ < $eventInfos_writablePropMap$$.length;$i$$130_keys$$8$$++) {
          $info$$2_k$$7$$ = $eventInfos_writablePropMap$$[$i$$130_keys$$8$$], $jelem$$6$$.on($info$$2_k$$7$$.event + $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, {$getter$:$info$$2_k$$7$$.getter}, function($evt$$19$$, $data$$53$$) {
            $evt$$19$$.stopPropagation();
            var $nameValues$$ = $evt$$19$$.data.$getter$($evt$$19$$, $data$$53$$), $accessor$$1$$ = $ctx$$1$$.$valueAccessor$(), $name$$88$$;
            for ($name$$88$$ in $nameValues$$) {
              $ctx$$1$$.$changeTracker$.$suspend$($name$$88$$);
              try {
                if (0 <= $ctx$$1$$.$specifiedOptions$.indexOf($name$$88$$)) {
                  var $optionMap$$1$$ = $accessor$$1$$[$oj$$7$$.$ComponentBinding$.$_OPTION_MAP$];
                  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$($name$$88$$, $accessor$$1$$[$name$$88$$], $nameValues$$[$name$$88$$], null == $optionMap$$1$$ ? null : $optionMap$$1$$[$name$$88$$], $ctx$$1$$.$bindingContext$, $cachedWriterFunctionEvaluators$$);
                }
              } finally {
                $ctx$$1$$.$changeTracker$.$resume$($name$$88$$);
              }
            }
          });
        }
        break;
      }
    }
  };
  $oj$$7$$.$ComponentBinding$.$_getPropertyWriterExpression$ = function $$oj$$7$$$$ComponentBinding$$$_getPropertyWriterExpression$$($expression$$4$$) {
    var $match$$15_reserveddWords$$ = ["true", "false", "null", "undefined"];
    if (null == $expression$$4$$ || 0 <= $match$$15_reserveddWords$$.indexOf($expression$$4$$)) {
      return null;
    }
    $match$$15_reserveddWords$$ = $expression$$4$$.match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);
    return null === $match$$15_reserveddWords$$ ? null : "function(v){" + ($match$$15_reserveddWords$$[1] ? "Object(" + $match$$15_reserveddWords$$[1] + ")" + $match$$15_reserveddWords$$[2] : $expression$$4$$) + "\x3dv;}";
  };
  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$ = function $$oj$$7$$$$ComponentBinding$$$_writeValueToProperty$$($func$$7_name$$89$$, $inContextWriter_target$$79$$, $value$$158$$, $propertyExpression_writerExpr$$, $bindingContext$$20$$, $cachedWriterFunctionEvaluators$$1$$) {
    null != $inContextWriter_target$$79$$ && $ko$$1$$.isObservable($inContextWriter_target$$79$$) ? $ko$$1$$.isWriteableObservable($inContextWriter_target$$79$$) && $inContextWriter_target$$79$$($value$$158$$) : ($func$$7_name$$89$$ in $cachedWriterFunctionEvaluators$$1$$ || ($inContextWriter_target$$79$$ = null, $propertyExpression_writerExpr$$ = $oj$$7$$.$ComponentBinding$.$_getPropertyWriterExpression$($propertyExpression_writerExpr$$), null != $propertyExpression_writerExpr$$ && ($inContextWriter_target$$79$$ = 
    $oj$$7$$.$ComponentBinding$.$_createEvaluator$($propertyExpression_writerExpr$$)), $cachedWriterFunctionEvaluators$$1$$[$func$$7_name$$89$$] = $inContextWriter_target$$79$$), ($func$$7_name$$89$$ = $cachedWriterFunctionEvaluators$$1$$[$func$$7_name$$89$$]) && $func$$7_name$$89$$($bindingContext$$20$$)($value$$158$$));
  };
  $oj$$7$$.$ComponentBinding$.$_toJS$ = function $$oj$$7$$$$ComponentBinding$$$_toJS$$($prop$$58$$) {
    $prop$$58$$ = $ko$$1$$.utils.unwrapObservable($prop$$58$$);
    (Array.isArray($prop$$58$$) || $oj$$7$$.$CollectionUtils$.isPlainObject($prop$$58$$)) && $prop$$58$$.ojConvertToJS && ($prop$$58$$ = $ko$$1$$.toJS($prop$$58$$));
    return $prop$$58$$;
  };
  $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$ = function $$oj$$7$$$$ComponentBinding$$$_extractDotNotationOptions$$($options$$212$$) {
    for (var $mutationOptions$$1$$ = {}, $keys$$9$$ = Object.keys($options$$212$$), $k$$8$$ = 0;$k$$8$$ < $keys$$9$$.length;$k$$8$$++) {
      var $opt$$18$$ = $keys$$9$$[$k$$8$$];
      0 <= $opt$$18$$.indexOf(".") && ($mutationOptions$$1$$[$opt$$18$$] = $options$$212$$[$opt$$18$$]);
    }
    return $mutationOptions$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_deliverCreateDestroyEventToManagedProps$ = function $$oj$$7$$$$ComponentBinding$$$_deliverCreateDestroyEventToManagedProps$$($isCreate$$, $managedAttrMap$$2$$, $element$$45$$, $comp$$4$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$21$$) {
    for (var $props$$7$$ = Object.keys($managedAttrMap$$2$$), $i$$131$$ = 0;$i$$131$$ < $props$$7$$.length;$i$$131$$++) {
      var $prop$$59$$ = $props$$7$$[$i$$131$$], $callback$$84_entry$$1$$ = $managedAttrMap$$2$$[$prop$$59$$];
      ($callback$$84_entry$$1$$ = $isCreate$$ ? $callback$$84_entry$$1$$.$afterCreate$ : $callback$$84_entry$$1$$.$beforeDestroy$) && $callback$$84_entry$$1$$($prop$$59$$, $element$$45$$, $comp$$4$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$21$$);
    }
  };
  $oj$$7$$.$ComponentBinding$.$_changeQueue$ = new $GlobalChangeQueue$$;
  $oj$$7$$.$ComponentBinding$.$__getKnockoutVersion$ = function $$oj$$7$$$$ComponentBinding$$$__getKnockoutVersion$$() {
    return $oj$$7$$.$__isAmdLoaderPresent$() && $ko$$1$$ ? $ko$$1$$.version : "";
  };
  $oj$$7$$.$ComponentBinding$.$_isNameRegistered$ = function $$oj$$7$$$$ComponentBinding$$$_isNameRegistered$$($bindingName$$4$$) {
    return 0 <= $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$.indexOf($bindingName$$4$$);
  };
  $oj$$7$$.$ComponentBinding$.$_REGISTERED_NAMES$ = [];
  $oj$$7$$.$ComponentBinding$.$_COMPONENT_OPTION$ = "component";
  $oj$$7$$.$ComponentBinding$.$_OPTION_MAP$ = "_ojOptions";
  (function() {
    var $wrapped$$6$$ = $ko$$1$$.removeNode;
    $ko$$1$$.removeNode = function $$ko$$1$$$removeNode$($node$$29$$) {
      var $ojComponents$$ = $oj$$7$$.Components;
      $ojComponents$$ && $oj$$7$$.$DomUtils$.$setInKoRemoveNode$($node$$29$$);
      try {
        $wrapped$$6$$($node$$29$$);
      } finally {
        $ojComponents$$ && $oj$$7$$.$DomUtils$.$setInKoRemoveNode$(null);
      }
    };
  })();
  $oj$$7$$.$ComponentBinding$.$_INSTANCE$ = $oj$$7$$.$ComponentBinding$.create(["ojComponent", "jqueryUI"]);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["optionTemplate"], init:function($name$$91_result$$16$$, $value$$159$$, $element$$46$$, $widgetConstructor$$, $valueAccessor$$3$$, $allBindingsAccessor$$3$$, $bindingContext$$22$$) {
    $name$$91_result$$16$$ = $_handleComboboxManagedAttributes$$($name$$91_result$$16$$, $value$$159$$, $bindingContext$$22$$);
    if (null !== $name$$91_result$$16$$) {
      return $name$$91_result$$16$$;
    }
  }, update:function($name$$92$$, $value$$160$$, $element$$47$$, $widgetConstructor$$1$$, $valueAccessor$$4$$, $allBindingsAccessor$$4$$, $bindingContext$$23$$) {
    return $_handleComboboxManagedAttributes$$($name$$92$$, $value$$160$$, $bindingContext$$23$$);
  }, "for":"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCombobox", use:"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojSelect", use:"ComboboxOptionRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputSearch", use:"ComboboxOptionRenderer"});
  $oj$$7$$.$Object$.$createSubclass$($ComponentChangeTracker$$, $oj$$7$$.$Object$, "ComponentBinding.ComponentChangeTracker");
  $ComponentChangeTracker$$.prototype.Init = function $$ComponentChangeTracker$$$$Init$($component$$8$$, $queue$$1$$) {
    $ComponentChangeTracker$$.$superclass$.Init.call(this);
    this.$_component$ = $component$$8$$;
    this.$_queue$ = $queue$$1$$;
    this.$_changes$ = {};
    this.$_suspendCountMap$ = {};
  };
  $ComponentChangeTracker$$.prototype.$addChange$ = function $$ComponentChangeTracker$$$$$addChange$$($property$$17$$, $value$$161$$) {
    this.$_isSuspended$($property$$17$$) || this.$_disposed$ || (this.$_changes$[$property$$17$$] = $value$$161$$, this.$_queue$.$registerComponentChanges$(this));
  };
  $ComponentChangeTracker$$.prototype.$dispose$ = function $$ComponentChangeTracker$$$$$dispose$$() {
    this.$_disposed$ = !0;
  };
  $ComponentChangeTracker$$.prototype.$resume$ = function $$ComponentChangeTracker$$$$$resume$$($option$$23$$) {
    var $count$$28$$ = this.$_suspendCountMap$[$option$$23$$] || 0;
    $oj$$7$$.$Assert$.assert(0 < $count$$28$$, "ComponentChangeTracker suspendCount underflow");
    $count$$28$$--;
    0 == $count$$28$$ ? delete this.$_suspendCountMap$[$option$$23$$] : this.$_suspendCountMap$[$option$$23$$] = $count$$28$$;
  };
  $ComponentChangeTracker$$.prototype.$suspend$ = function $$ComponentChangeTracker$$$$$suspend$$($option$$24$$) {
    this.$_suspendCountMap$[$option$$24$$] = (this.$_suspendCountMap$[$option$$24$$] || 0) + 1;
  };
  $ComponentChangeTracker$$.prototype.$applyChanges$ = function $$ComponentChangeTracker$$$$$applyChanges$$($changes$$1$$) {
    if (!this.$_disposed$) {
      var $mutationOptions$$2$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($changes$$1$$), $flags$$15$$ = {changed:!0};
      this.$_component$("option", $changes$$1$$, $flags$$15$$);
      for (var $mo$$1$$ in $mutationOptions$$2$$) {
        this.$_component$("option", $mo$$1$$, $mutationOptions$$2$$[$mo$$1$$], $flags$$15$$);
      }
    }
  };
  $ComponentChangeTracker$$.prototype.$flushChanges$ = function $$ComponentChangeTracker$$$$$flushChanges$$() {
    var $changes$$2$$ = this.$_changes$;
    this.$_changes$ = {};
    return $changes$$2$$;
  };
  $ComponentChangeTracker$$.prototype.$_isSuspended$ = function $$ComponentChangeTracker$$$$$_isSuspended$$($option$$25$$) {
    return 1 <= (this.$_suspendCountMap$[$option$$25$$] || 0);
  };
  $ko$$1$$.bindingHandlers.ojContextMenu = {update:function $$ko$$1$$$bindingHandlers$ojContextMenu$update$($element$$48$$, $valueAccessor$$5$$) {
    function $launch$$1$$($event$$63$$, $eventType$$29_openOptions$$1$$, $pressHold$$1$$) {
      $isPressHold$$1$$ = $pressHold$$1$$;
      var $menu$$3$$ = $getContextMenu$$();
      if ($isPressHold$$1$$) {
        $$element$$.one("touchend.ojContextMenu", function() {
          $menu$$3$$.$__contextMenuPressHoldJustEnded$(!0);
          setTimeout(function() {
            $menu$$3$$.$__contextMenuPressHoldJustEnded$(!1);
          }, 50);
        });
      }
      "touchstart" === $doubleOpenType$$1$$ && "contextmenu" === $event$$63$$.type || "contextmenu" === $doubleOpenType$$1$$ && "touchstart" === $event$$63$$.type ? ($doubleOpenType$$1$$ = null, clearTimeout($doubleOpenTimer$$1$$)) : !$event$$63$$.isDefaultPrevented() && ($eventType$$29_openOptions$$1$$ = {launcher:$$element$$, initialFocus:"menu", position:{mouse:{my:"start top", at:"start bottom", of:$event$$63$$}, touch:{my:"start\x3e40 center", at:"start bottom", of:$event$$63$$, collision:"flipfit"}, 
      keyboard:{my:"start top", at:"start bottom", of:"launcher"}}[$eventType$$29_openOptions$$1$$]}, $menu$$3$$.$__openingContextMenu$ = !0, $menu$$3$$.open($event$$63$$, $eventType$$29_openOptions$$1$$), $menu$$3$$.$__openingContextMenu$ = !1, $getContextMenuNode$$().is(":visible") && ($event$$63$$.preventDefault(), document.addEventListener("keyup", $preventKeyUpEventIfMenuOpen$$), "touchstart" === $event$$63$$.type || "contextmenu" === $event$$63$$.type)) && ($doubleOpenType$$1$$ = $event$$63$$.type, 
      $doubleOpenTimer$$1$$ = setTimeout(function() {
        $doubleOpenType$$1$$ = null;
      }, 300));
    }
    function $preventKeyUpEventIfMenuOpen$$($event$$62$$) {
      121 == $event$$62$$.which && $event$$62$$.shiftKey && $getContextMenuNode$$().is(":visible") && $event$$62$$.preventDefault();
    }
    function $getContextMenuNode$$() {
      $$menu$$ || $setContextMenuIvars$$();
      return $$menu$$;
    }
    function $getContextMenu$$() {
      $_menu$$ || $setContextMenuIvars$$();
      return $_menu$$;
    }
    function $setContextMenuIvars$$() {
      $$menu$$ = $$$$7$$($menuSelector$$).first();
      $_menu$$ = $$menu$$.data("oj-ojMenu");
      if (!$_menu$$) {
        throw Error('"contextMenu" set to "' + $menuSelector$$ + '", which does not reference a valid JET Menu.');
      }
      $$menu$$.on("ojclose.ojContextMenu", function() {
        document.removeEventListener("keyup", $preventKeyUpEventIfMenuOpen$$);
      });
    }
    var $$element$$ = $$$$7$$($element$$48$$), $$menu$$, $_menu$$, $pressHoldTimer$$, $isPressHold$$1$$ = !1, $touchInProgress$$1$$ = !1, $doubleOpenTimer$$1$$, $doubleOpenType$$1$$ = null, $clickListener$$;
    $$element$$.off(".ojContextMenu").removeClass("oj-menu-context-menu-launcher")[0].removeEventListener("click", $clickListener$$, !0);
    $$menu$$ && $$menu$$.off(".ojContextMenu");
    clearTimeout($pressHoldTimer$$);
    $$menu$$ = $_menu$$ = void 0;
    var $menuSelector$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$5$$());
    "string" !== $$$$7$$.type($menuSelector$$) && ($menuSelector$$ = $element$$48$$.getAttribute("contextmenu")) && ($menuSelector$$ = "#" + $menuSelector$$);
    $clickListener$$ = function $$clickListener$$$($event$$65$$) {
      if ($isPressHold$$1$$) {
        return $event$$65$$.preventDefault(), $event$$65$$.stopPropagation(), $isPressHold$$1$$ = !1;
      }
    };
    $element$$48$$.addEventListener("click", $clickListener$$, !0);
    $$element$$.on("touchstart.ojContextMenu mousedown.ojContextMenu keydown.ojContextMenu ", function($event$$66$$) {
      if ("mousedown" !== $event$$66$$.type || !$getContextMenu$$().$__contextMenuPressHoldJustEnded$()) {
        return $isPressHold$$1$$ = !1, "touchstart" === $event$$66$$.type && ($touchInProgress$$1$$ = !0, $pressHoldTimer$$ = setTimeout($launch$$1$$.bind(void 0, $event$$66$$, "touch", !0), 750)), !0;
      }
    }).on("touchend.ojContextMenu touchcancel.ojContextMenu", function() {
      $touchInProgress$$1$$ = !1;
      clearTimeout($pressHoldTimer$$);
      return!0;
    }).on("keydown.ojContextMenu contextmenu.ojContextMenu", function($event$$68$$) {
      ("contextmenu" === $event$$68$$.type || 121 == $event$$68$$.which && $event$$68$$.shiftKey) && $launch$$1$$($event$$68$$, $touchInProgress$$1$$ ? "touch" : "keydown" === $event$$68$$.type ? "keyboard" : "mouse", !1);
      return!0;
    }).addClass($oj$$7$$.$DomUtils$.$isTouchSupported$() ? "oj-menu-context-menu-launcher" : "");
  }};
  (function _wrapKnockoutBindingProvider() {
    var $custom$$2_provider$$ = $ko$$1$$.bindingProvider, $wrapped$$ = $custom$$2_provider$$.instance, $custom$$2_provider$$ = $custom$$2_provider$$.instance = {};
    $_defineWrappedMethod$$($wrapped$$, $custom$$2_provider$$, "nodeHasBindings");
    $_defineWrappedMethod$$($wrapped$$, $custom$$2_provider$$, "getBindings", function($node$$24_ret$$21$$, $bindingContext$$2_bindingName$$, $wrappedReturn$$) {
      $node$$24_ret$$21$$ = $wrappedReturn$$;
      $bindingContext$$2_bindingName$$ = $_findOwnBinding$$($wrappedReturn$$);
      null != $bindingContext$$2_bindingName$$ && ($oj$$7$$.$Logger$.error("%s binding is not compatible with bidding providers not implementing getBindingAccessors()", $bindingContext$$2_bindingName$$), $node$$24_ret$$21$$ = $oj$$7$$.$CollectionUtils$.$copyInto$({}, $wrappedReturn$$), delete $node$$24_ret$$21$$[$bindingContext$$2_bindingName$$]);
      return $node$$24_ret$$21$$;
    });
    $_defineWrappedMethod$$($wrapped$$, $custom$$2_provider$$, "getBindingAccessors", $_replaceComponentBindingWithV2$$);
  })();
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["header", "cell"], init:function($cellTemplate_column_name$$93_row$$, $value$$162$$, $columnTemplate_element$$49_rowTemplate$$, $widgetConstructor$$2$$, $valueAccessor$$6$$, $allBindingsAccessor$$5$$, $bindingContext$$25$$) {
    if ("header" === $cellTemplate_column_name$$93_row$$) {
      return $cellTemplate_column_name$$93_row$$ = $value$$162$$.row, null != $cellTemplate_column_name$$93_row$$ && ($columnTemplate_element$$49_rowTemplate$$ = $cellTemplate_column_name$$93_row$$.template, null != $columnTemplate_element$$49_rowTemplate$$ && ($cellTemplate_column_name$$93_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$25$$, $columnTemplate_element$$49_rowTemplate$$))), $cellTemplate_column_name$$93_row$$ = $value$$162$$.column, null != $cellTemplate_column_name$$93_row$$ && 
      ($columnTemplate_element$$49_rowTemplate$$ = $cellTemplate_column_name$$93_row$$.template, null != $columnTemplate_element$$49_rowTemplate$$ && ($cellTemplate_column_name$$93_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$25$$, $columnTemplate_element$$49_rowTemplate$$))), {header:$value$$162$$};
    }
    if ("cell" === $cellTemplate_column_name$$93_row$$) {
      return $cellTemplate_column_name$$93_row$$ = $value$$162$$.template, null != $cellTemplate_column_name$$93_row$$ && ($value$$162$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$25$$, $cellTemplate_column_name$$93_row$$)), {cell:$value$$162$$};
    }
  }, update:function($cellTemplate$$1_column$$1_name$$94_row$$1$$, $value$$163$$, $columnTemplate$$1_element$$50_rowTemplate$$1$$, $widgetConstructor$$3$$, $valueAccessor$$7$$, $allBindingsAccessor$$6$$, $bindingContext$$26$$) {
    return "header" === $cellTemplate$$1_column$$1_name$$94_row$$1$$ ? ($cellTemplate$$1_column$$1_name$$94_row$$1$$ = $value$$163$$.row, null != $cellTemplate$$1_column$$1_name$$94_row$$1$$ && ($columnTemplate$$1_element$$50_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$94_row$$1$$.template, null != $columnTemplate$$1_element$$50_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$94_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$26$$, $columnTemplate$$1_element$$50_rowTemplate$$1$$))), 
    $cellTemplate$$1_column$$1_name$$94_row$$1$$ = $value$$163$$.column, null != $cellTemplate$$1_column$$1_name$$94_row$$1$$ && ($columnTemplate$$1_element$$50_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$94_row$$1$$.template, null != $columnTemplate$$1_element$$50_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$94_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$26$$, $columnTemplate$$1_element$$50_rowTemplate$$1$$))), {header:$value$$163$$}) : "cell" === $cellTemplate$$1_column$$1_name$$94_row$$1$$ ? 
    ($cellTemplate$$1_column$$1_name$$94_row$$1$$ = $value$$163$$.template, null != $cellTemplate$$1_column$$1_name$$94_row$$1$$ && ($value$$163$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$26$$, $cellTemplate$$1_column$$1_name$$94_row$$1$$)), {cell:$value$$163$$}) : null;
  }, "for":"ojDataGrid"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["template"], init:function($name$$95$$, $value$$164$$, $element$$51$$, $widgetConstructor$$4$$, $valueAccessor$$8$$, $allBindingsAccessor$$7$$, $bindingContext$$27$$) {
    return "template" === $name$$95$$ ? {_templateFunction:$_getDiagramNodeRenderer$$($bindingContext$$27$$, $value$$164$$)} : null;
  }, update:function($name$$96$$, $value$$165$$, $element$$52$$, $widgetConstructor$$5$$, $valueAccessor$$9$$, $allBindingsAccessor$$8$$, $bindingContext$$28$$) {
    return "template" === $name$$96$$ ? {_templateFunction:$_getDiagramNodeRenderer$$($bindingContext$$28$$, $value$$165$$)} : null;
  }, "for":"ojDiagram"});
  $oj$$7$$.$koStringTemplateEngine$ = {};
  $goog$exportPath_$$("koStringTemplateEngine", $oj$$7$$.$koStringTemplateEngine$, $oj$$7$$);
  $oj$$7$$.$koStringTemplateEngine$.$install$ = function $$oj$$7$$$$koStringTemplateEngine$$$install$$() {
    if (!$ko$$1$$.templates) {
      var $_templateText$$ = {}, $_templateData$$ = {}, $_engine$$ = new $ko$$1$$.nativeTemplateEngine, $StringTemplate$$ = function $$StringTemplate$$$($template$$12$$) {
        this.$_templateName$ = $template$$12$$;
        this.text = function $this$text$($value$$166$$) {
          if (!$value$$166$$) {
            return $_templateText$$[this.$_templateName$];
          }
          $_templateText$$[this.$_templateName$] = $value$$166$$;
        };
        this.data = function $this$data$($key$$45$$, $value$$167$$) {
          $_templateData$$[this.$_templateName$] || ($_templateData$$[this.$_templateName$] = {});
          if (1 === arguments.length) {
            return $_templateData$$[this.$_templateName$][$key$$45$$];
          }
          $_templateData$$[this.$_templateName$][$key$$45$$] = $value$$167$$;
        };
      };
      $_engine$$.makeTemplateSource = function $$_engine$$$makeTemplateSource$($template$$13$$, $templateDocument$$) {
        if ("string" == typeof $template$$13$$) {
          $templateDocument$$ = $templateDocument$$ || document;
          var $elem$$19$$ = $templateDocument$$.getElementById($template$$13$$);
          return $elem$$19$$ ? new $ko$$1$$.templateSources.domElement($elem$$19$$) : new $StringTemplate$$($template$$13$$);
        }
        if ($template$$13$$ && 1 == $template$$13$$.nodeType || 8 == $template$$13$$.nodeType) {
          return new $ko$$1$$.templateSources.anonymousTemplate($template$$13$$);
        }
      };
      $ko$$1$$.templates = $_templateText$$;
      $ko$$1$$.setTemplateEngine($_engine$$);
    }
  };
  $goog$exportPath_$$("koStringTemplateEngine.install", $oj$$7$$.$koStringTemplateEngine$.$install$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["item"], init:function($name$$97_result$$17$$, $value$$168$$, $element$$53$$, $widgetConstructor$$6$$, $valueAccessor$$10$$, $allBindingsAccessor$$9$$, $bindingContext$$29$$) {
    $name$$97_result$$17$$ = $_handleListViewManagedAttributes$$($name$$97_result$$17$$, $value$$168$$, $bindingContext$$29$$);
    if (null != $name$$97_result$$17$$) {
      return $name$$97_result$$17$$;
    }
  }, update:function($name$$98$$, $value$$169$$, $element$$54$$, $widgetConstructor$$7$$, $valueAccessor$$11$$, $allBindingsAccessor$$10$$, $bindingContext$$30$$) {
    return $_handleListViewManagedAttributes$$($name$$98$$, $value$$169$$, $bindingContext$$30$$);
  }, "for":"ojListViewRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojListView", use:"ojListViewRenderer"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojNavigationList", use:"ojListViewRenderer"});
  $oj$$7$$.ResponsiveKnockoutUtils = {};
  $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable = function $$oj$$7$$$ResponsiveKnockoutUtils$createMediaQueryObservable$($query$$4_queryString$$1$$) {
    if (null == $query$$4_queryString$$1$$) {
      throw Error("oj.ResponsiveKnockoutUtils.createMediaQueryObservable: aborting, queryString is null");
    }
    $query$$4_queryString$$1$$ = window.matchMedia($query$$4_queryString$$1$$);
    var $observable$$ = $ko$$1$$.observable($query$$4_queryString$$1$$.matches);
    $query$$4_queryString$$1$$.addListener(function($query$$5$$) {
      $observable$$($query$$5$$.matches);
    });
    -1 != navigator.userAgent.indexOf("WebKit") && -1 == navigator.userAgent.indexOf("Chrome") && $$$$7$$(window).resize(function() {
      0 === $$$$7$$("body").has(".oj-webkit-bug-123293").length && $$$$7$$("body").append('\x3cdiv aria-hidden\x3d"true" class\x3d"oj-helper-hidden-accessible oj-webkit-bug-123293"\x3e');
      $$$$7$$(".oj-webkit-bug-123293").text((new Date).getMilliseconds().toString());
    });
    return $observable$$;
  };
  $oj$$7$$.ResponsiveKnockoutUtils.createScreenRangeObservable = function $$oj$$7$$$ResponsiveKnockoutUtils$createScreenRangeObservable$() {
    var $xxlQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XXL_UP), $xlQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.XL_UP), $lgQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.LG_UP), $mdQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP), $smQuery$$ = $oj$$7$$.ResponsiveUtils.getFrameworkQuery($oj$$7$$.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_UP), 
    $xxlObservable$$ = null == $xxlQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($xxlQuery$$), $xlObservable$$ = null == $xlQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($xlQuery$$), $lgObservable$$ = null == $lgQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($lgQuery$$), $mdObservable$$ = null == $mdQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($mdQuery$$), $smObservable$$ = 
    null == $smQuery$$ ? null : $oj$$7$$.ResponsiveKnockoutUtils.createMediaQueryObservable($smQuery$$);
    return $ko$$1$$.computed(function() {
      if ($xxlObservable$$ && $xxlObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.XXL;
      }
      if ($xlObservable$$ && $xlObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.XL;
      }
      if ($lgObservable$$ && $lgObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.LG;
      }
      if ($mdObservable$$ && $mdObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.MD;
      }
      if ($smObservable$$ && $smObservable$$()) {
        return $oj$$7$$.ResponsiveUtils.SCREEN_RANGE.SM;
      }
      throw Error(" NO MATCH in oj.ResponsiveKnockoutUtils.createScreenRangeObservable");
    });
  };
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["columns", "columnsDefault", "rowTemplate"], init:function($name$$99$$, $value$$170$$, $element$$55_i$$132$$, $template$$14_widgetConstructor$$8$$, $footerTemplate_valueAccessor$$12$$, $allBindingsAccessor$$11_headerTemplate$$, $bindingContext$$31$$) {
    if ("columns" == $name$$99$$ || "columnsDefault" == $name$$99$$) {
      for ($element$$55_i$$132$$ = 0;$element$$55_i$$132$$ < $value$$170$$.length;$element$$55_i$$132$$++) {
        var $column$$2$$ = $value$$170$$[$element$$55_i$$132$$];
        $template$$14_widgetConstructor$$8$$ = $column$$2$$.template;
        $footerTemplate_valueAccessor$$12$$ = $column$$2$$.footerTemplate;
        $allBindingsAccessor$$11_headerTemplate$$ = $column$$2$$.headerTemplate;
        null != $template$$14_widgetConstructor$$8$$ && ($column$$2$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$31$$, "cell", $template$$14_widgetConstructor$$8$$));
        null != $footerTemplate_valueAccessor$$12$$ && ($column$$2$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$31$$, "footer", $footerTemplate_valueAccessor$$12$$));
        null != $allBindingsAccessor$$11_headerTemplate$$ && ($column$$2$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$31$$, "header", $allBindingsAccessor$$11_headerTemplate$$));
      }
      return "columns" == $name$$99$$ ? {columns:$value$$170$$} : {columnsDefault:$value$$170$$};
    }
    if ("rowTemplate" == $name$$99$$) {
      return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$31$$, $value$$170$$)};
    }
  }, update:function($name$$100$$, $value$$171$$, $element$$56_i$$133$$, $widgetConstructor$$9$$, $template$$15_valueAccessor$$13$$, $allBindingsAccessor$$12_footerTemplate$$1$$, $bindingContext$$32$$) {
    if ("columns" == $name$$100$$ || "columnsDefault" == $name$$100$$) {
      var $headerTemplate$$1$$;
      for ($element$$56_i$$133$$ = 0;$element$$56_i$$133$$ < $value$$171$$.length;$element$$56_i$$133$$++) {
        var $column$$3$$ = $value$$171$$[$element$$56_i$$133$$];
        $template$$15_valueAccessor$$13$$ = $column$$3$$.template;
        $allBindingsAccessor$$12_footerTemplate$$1$$ = $column$$3$$.footerTemplate;
        $headerTemplate$$1$$ = $column$$3$$.headerTemplate;
        null != $template$$15_valueAccessor$$13$$ && ($column$$3$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$32$$, "cell", $template$$15_valueAccessor$$13$$));
        null != $allBindingsAccessor$$12_footerTemplate$$1$$ && ($column$$3$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$32$$, "footer", $allBindingsAccessor$$12_footerTemplate$$1$$));
        null != $headerTemplate$$1$$ && ($column$$3$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$32$$, "header", $headerTemplate$$1$$));
      }
      "columns" == $name$$100$$ ? $widgetConstructor$$9$$({columns:$value$$171$$}) : $widgetConstructor$$9$$({columnsDefault:$value$$171$$});
    } else {
      if ("rowTemplate" == $name$$100$$) {
        return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$32$$, $value$$171$$)};
      }
    }
    return null;
  }, "for":"ojTable"});
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["areaLayers", "pointDataLayers"], init:function($name$$101$$, $value$$172$$, $element$$57$$, $widgetConstructor$$10$$, $valueAccessor$$14$$, $allBindingsAccessor$$13$$, $bindingContext$$33$$) {
    return $_handleManagedAttributes$$($name$$101$$, $value$$172$$, $bindingContext$$33$$);
  }, update:function($name$$102$$, $value$$173$$, $element$$58$$, $widgetConstructor$$11$$, $valueAccessor$$15$$, $allBindingsAccessor$$14$$, $bindingContext$$34$$) {
    return $_handleManagedAttributes$$($name$$102$$, $value$$173$$, $bindingContext$$34$$);
  }, "for":"ojThematicMap"});
});
